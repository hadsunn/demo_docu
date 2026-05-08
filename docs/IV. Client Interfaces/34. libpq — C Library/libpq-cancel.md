---
title: 34.7. Canceling Queries in Progress
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


A client application can request cancellation of a command that is still being processed by the server, using the functions described in this section.

`PQgetCancel` #
    

Creates a data structure containing the information needed to cancel a command issued through a particular database connection.
    
    
    PGcancel *PQgetCancel(PGconn *conn);
    

[`PQgetCancel`](libpq-cancel.html#LIBPQ-PQGETCANCEL) creates a `PGcancel` object given a `PGconn` connection object. It will return `NULL` if the given _`conn`_ is `NULL` or an invalid connection. The `PGcancel` object is an opaque structure that is not meant to be accessed directly by the application; it can only be passed to [`PQcancel`](libpq-cancel.html#LIBPQ-PQCANCEL) or [`PQfreeCancel`](libpq-cancel.html#LIBPQ-PQFREECANCEL).

`PQfreeCancel` #
    

Frees a data structure created by [`PQgetCancel`](libpq-cancel.html#LIBPQ-PQGETCANCEL).
    
    
    void PQfreeCancel(PGcancel *cancel);
    

[`PQfreeCancel`](libpq-cancel.html#LIBPQ-PQFREECANCEL) frees a data object previously created by [`PQgetCancel`](libpq-cancel.html#LIBPQ-PQGETCANCEL).

`PQcancel` #
    

Requests that the server abandon processing of the current command.
    
    
    int PQcancel(PGcancel *cancel, char *errbuf, int errbufsize);
    

The return value is 1 if the cancel request was successfully dispatched and 0 if not. If not, _`errbuf`_ is filled with an explanatory error message. _`errbuf`_ must be a char array of size _`errbufsize`_ (the recommended size is 256 bytes).

Successful dispatch is no guarantee that the request will have any effect, however. If the cancellation is effective, the current command will terminate early and return an error result. If the cancellation fails (say, because the server was already done processing the command), then there will be no visible result at all.

[`PQcancel`](libpq-cancel.html#LIBPQ-PQCANCEL) can safely be invoked from a signal handler, if the _`errbuf`_ is a local variable in the signal handler. The `PGcancel` object is read-only as far as [`PQcancel`](libpq-cancel.html#LIBPQ-PQCANCEL) is concerned, so it can also be invoked from a thread that is separate from the one manipulating the `PGconn` object.

`PQrequestCancel` #
    

[`PQrequestCancel`](libpq-cancel.html#LIBPQ-PQREQUESTCANCEL) is a deprecated variant of [`PQcancel`](libpq-cancel.html#LIBPQ-PQCANCEL).
    
    
    int PQrequestCancel(PGconn *conn);
    

Requests that the server abandon processing of the current command. It operates directly on the `PGconn` object, and in case of failure stores the error message in the `PGconn` object (whence it can be retrieved by [`PQerrorMessage`](libpq-status.html#LIBPQ-PQERRORMESSAGE)). Although the functionality is the same, this approach is not safe within multiple-thread programs or signal handlers, since it is possible that overwriting the `PGconn`'s error message will mess up the operation currently in progress on the connection.


  
