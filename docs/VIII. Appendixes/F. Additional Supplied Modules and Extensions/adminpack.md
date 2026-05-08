---
title: F.1. adminpack — pgAdmin support toolpack
---







Supported versions: 13 / 14 / 15 / 16 / 17


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


`adminpack` provides a number of support functions which pgAdmin and other administration and management tools can use to provide additional functionality, such as remote management of server log files. Use of all these functions is only allowed to database superusers by default, but may be allowed to other users by using the `GRANT` command.

The functions shown in [Table F.1](adminpack.html#FUNCTIONS-ADMINPACK-TABLE "Table F.1. adminpack Functions") provide write access to files on the machine hosting the server. (See also the functions in [Table 9.101](functions-admin.html#FUNCTIONS-ADMIN-GENFILE-TABLE "Table 9.101. Generic File Access Functions"), which provide read-only access.) Only files within the database cluster directory can be accessed, unless the user is a superuser or given privileges of one of the `pg_read_server_files` or `pg_write_server_files` roles, as appropriate for the function, but either a relative or absolute path is allowable.

**Table  F.1. `adminpack` Functions**

Function Description  
---  
`pg_catalog.pg_file_write` ( _`filename`_ `text`, _`data`_ `text`, _`append`_ `boolean` ) → `bigint` Writes, or appends to, a text file.  
`pg_catalog.pg_file_sync` ( _`filename`_ `text` ) → `void` Flushes a file or directory to disk.  
`pg_catalog.pg_file_rename` ( _`oldname`_ `text`, _`newname`_ `text` [, _`archivename`_ `text` ] ) → `boolean` Renames a file.  
`pg_catalog.pg_file_unlink` ( _`filename`_ `text` ) → `boolean` Removes a file.  
`pg_catalog.pg_logdir_ls` () → `setof record` Lists the log files in the `log_directory` directory.  
  
  


`pg_file_write` writes the specified _`data`_ into the file named by _`filename`_. If _`append`_ is false, the file must not already exist. If _`append`_ is true, the file can already exist, and will be appended to if so. Returns the number of bytes written.

`pg_file_sync` fsyncs the specified file or directory named by _`filename`_. An error is thrown on failure (e.g., the specified file is not present). Note that [data_sync_retry](runtime-config-error-handling.html#GUC-DATA-SYNC-RETRY) has no effect on this function, and therefore a PANIC-level error will not be raised even on failure to flush database files.

`pg_file_rename` renames a file. If _`archivename`_ is omitted or NULL, it simply renames _`oldname`_ to _`newname`_ (which must not already exist). If _`archivename`_ is provided, it first renames _`newname`_ to _`archivename`_ (which must not already exist), and then renames _`oldname`_ to _`newname`_. In event of failure of the second rename step, it will try to rename _`archivename`_ back to _`newname`_ before reporting the error. Returns true on success, false if the source file(s) are not present or not writable; other cases throw errors.

`pg_file_unlink` removes the specified file. Returns true on success, false if the specified file is not present or the `unlink()` call fails; other cases throw errors.

`pg_logdir_ls` returns the start timestamps and path names of all the log files in the [log_directory](runtime-config-logging.html#GUC-LOG-DIRECTORY) directory. The [log_filename](runtime-config-logging.html#GUC-LOG-FILENAME) parameter must have its default setting (`postgresql-%Y-%m-%d_%H%M%S.log`) to use this function.


  
