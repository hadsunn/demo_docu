---
title: 54.13. `pg_matviews`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_matviews` provides access to useful information about each materialized view in the database.

**Table  54.13. `pg_matviews` Columns**

Column Type Description  
---  
`schemaname` `name` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`nspname`) Name of schema containing materialized view  
`matviewname` `name` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relname`) Name of materialized view  
`matviewowner` `name` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`rolname`) Name of materialized view's owner  
`tablespace` `name` (references [`pg_tablespace`](</VII. Internals/53. System Catalogs/catalog-pg-tablespace.md>).`spcname`) Name of tablespace containing materialized view (null if default for database)  
`hasindexes` `bool` True if materialized view has (or recently had) any indexes  
`ispopulated` `bool` True if materialized view is currently populated  
`definition` `text` Materialized view definition (a reconstructed [SELECT](</VI. Reference/I. SQL Commands/sql-select.md>) query)  
  
  



  
