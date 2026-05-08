---
title: F.12. dblink — connect to other PostgreSQL databases
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[dblink_connect](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-connect.md>) — opens a persistent connection to a remote database
[dblink_connect_u](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-connect-u.md>) — opens a persistent connection to a remote database, insecurely
[dblink_disconnect](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-disconnect.md>) — closes a persistent connection to a remote database
[dblink](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-function.md>) — executes a query in a remote database
[dblink_exec](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-exec.md>) — executes a command in a remote database
[dblink_open](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-open.md>) — opens a cursor in a remote database
[dblink_fetch](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-fetch.md>) — returns rows from an open cursor in a remote database
[dblink_close](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-close.md>) — closes a cursor in a remote database
[dblink_get_connections](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-get-connections.md>) — returns the names of all open named dblink connections
[dblink_error_message](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-error-message.md>) — gets last error message on the named connection
[dblink_send_query](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-send-query.md>) — sends an async query to a remote database
[dblink_is_busy](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-is-busy.md>) — checks if connection is busy with an async query
[dblink_get_notify](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-get-notify.md>) — retrieve async notifications on a connection
[dblink_get_result](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-get-result.md>) — gets an async query result
[dblink_cancel_query](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-cancel-query.md>) — cancels any active query on the named connection
[dblink_get_pkey](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-get-pkey.md>) — returns the positions and field names of a relation's primary key fields
[dblink_build_sql_insert](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-build-sql-insert.md>) — builds an INSERT statement using a local tuple, replacing the primary key field values with alternative supplied values
[dblink_build_sql_delete](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-build-sql-delete.md>) — builds a DELETE statement using supplied values for primary key field values
[dblink_build_sql_update](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/contrib-dblink-build-sql-update.md>) — builds an UPDATE statement using a local tuple, replacing the primary key field values with alternative supplied values

`dblink` is a module that supports connections to other PostgreSQL databases from within a database session.

See also [postgres_fdw](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/postgres-fdw.md>), which provides roughly the same functionality using a more modern and standards-compliant infrastructure.


  
