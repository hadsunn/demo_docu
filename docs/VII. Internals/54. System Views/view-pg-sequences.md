---
title: 54.23. `pg_sequences`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_sequences` provides access to useful information about each sequence in the database.

**Table  54.23. `pg_sequences` Columns**

Column Type Description  
---  
`schemaname` `name` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`nspname`) Name of schema containing sequence  
`sequencename` `name` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relname`) Name of sequence  
`sequenceowner` `name` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`rolname`) Name of sequence's owner  
`data_type` `regtype` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Data type of the sequence  
`start_value` `int8` Start value of the sequence  
`min_value` `int8` Minimum value of the sequence  
`max_value` `int8` Maximum value of the sequence  
`increment_by` `int8` Increment value of the sequence  
`cycle` `bool` Whether the sequence cycles  
`cache_size` `int8` Cache size of the sequence  
`last_value` `int8` The last sequence value written to disk. If caching is used, this value can be greater than the last value handed out from the sequence.  
  
  


The `last_value` column will read as null if any of the following are true:

  * The sequence has not been read from yet.

  * The current user does not have `USAGE` or `SELECT` privilege on the sequence.

  * The sequence is unlogged and the server is a standby.





  
