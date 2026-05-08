---
title: 54.30. `pg_tables`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_tables` provides access to useful information about each table in the database.

**Table  54.30. `pg_tables` Columns**

Column Type Description  
---  
`schemaname` `name` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`nspname`) Name of schema containing table  
`tablename` `name` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relname`) Name of table  
`tableowner` `name` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`rolname`) Name of table's owner  
`tablespace` `name` (references [`pg_tablespace`](</VII. Internals/53. System Catalogs/catalog-pg-tablespace.md>).`spcname`) Name of tablespace containing table (null if default for database)  
`hasindexes` `bool` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relhasindex`) True if table has (or recently had) any indexes  
`hasrules` `bool` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relhasrules`) True if table has (or once had) rules  
`hastriggers` `bool` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relhastriggers`) True if table has (or once had) triggers  
`rowsecurity` `bool` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relrowsecurity`) True if row security is enabled on the table  
  
  



  
