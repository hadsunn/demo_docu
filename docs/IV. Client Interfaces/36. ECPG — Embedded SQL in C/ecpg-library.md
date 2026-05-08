---
title: 36.11. Library Functions
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `libecpg` library primarily contains “hidden” functions that are used to implement the functionality expressed by the embedded SQL commands. But there are some functions that can usefully be called directly. Note that this makes your code unportable.

  * `ECPGdebug(int _`on`_ , FILE *_`stream`_)` turns on debug logging if called with the first argument non-zero. Debug logging is done on _`stream`_. The log contains all SQL statements with all the input variables inserted, and the results from the PostgreSQL server. This can be very useful when searching for errors in your SQL statements.

### Note

On Windows, if the ecpg libraries and an application are compiled with different flags, this function call will crash the application because the internal representation of the `FILE` pointers differ. Specifically, multithreaded/single-threaded, release/debug, and static/dynamic flags should be the same for the library and all applications using that library.

  * `ECPGget_PGconn(const char *_`connection_name`_)` returns the library database connection handle identified by the given name. If _`connection_name`_ is set to `NULL`, the current connection handle is returned. If no connection handle can be identified, the function returns `NULL`. The returned connection handle can be used to call any other functions from libpq, if necessary.

### Note

It is a bad idea to manipulate database connection handles made from ecpg directly with libpq routines.

  * `ECPGtransactionStatus(const char *_`connection_name`_)` returns the current transaction status of the given connection identified by _`connection_name`_. See [Section 34.2](</IV. Client Interfaces/34. libpq — C Library/libpq-status.md>) and libpq's [`PQtransactionStatus`](libpq-status.html#LIBPQ-PQTRANSACTIONSTATUS) for details about the returned status codes.

  * `ECPGstatus(int _`lineno`_ , const char* _`connection_name`_)` returns true if you are connected to a database and false if not. _`connection_name`_ can be `NULL` if a single connection is being used.





  
