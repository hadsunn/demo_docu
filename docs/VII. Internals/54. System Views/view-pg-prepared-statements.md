---
title: 54.15. `pg_prepared_statements`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `pg_prepared_statements` view displays all the prepared statements that are available in the current session. See [PREPARE](</VI. Reference/I. SQL Commands/sql-prepare.md>) for more information about prepared statements.

`pg_prepared_statements` contains one row for each prepared statement. Rows are added to the view when a new prepared statement is created and removed when a prepared statement is released (for example, via the [`DEALLOCATE`](</VI. Reference/I. SQL Commands/sql-deallocate.md>) command).

**Table  54.15. `pg_prepared_statements` Columns**

Column Type Description  
---  
`name` `text` The identifier of the prepared statement  
`statement` `text` The query string submitted by the client to create this prepared statement. For prepared statements created via SQL, this is the `PREPARE` statement submitted by the client. For prepared statements created via the frontend/backend protocol, this is the text of the prepared statement itself.  
`prepare_time` `timestamptz` The time at which the prepared statement was created  
`parameter_types` `regtype[]` The expected parameter types for the prepared statement in the form of an array of `regtype`. The OID corresponding to an element of this array can be obtained by casting the `regtype` value to `oid`.  
`result_types` `regtype[]` The types of the columns returned by the prepared statement in the form of an array of `regtype`. The OID corresponding to an element of this array can be obtained by casting the `regtype` value to `oid`. If the prepared statement does not provide a result (e.g., a DML statement), then this field will be null.  
`from_sql` `bool` `true` if the prepared statement was created via the `PREPARE` SQL command; `false` if the statement was prepared via the frontend/backend protocol  
`generic_plans` `int8` Number of times generic plan was chosen  
`custom_plans` `int8` Number of times custom plan was chosen  
  
  


The `pg_prepared_statements` view is read-only.


  
