---
title: 54.35. `pg_views`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_views` provides access to useful information about each view in the database.

**Table  54.35. `pg_views` Columns**

Column Type Description  
---  
`schemaname` `name` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`nspname`) Name of schema containing view  
`viewname` `name` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relname`) Name of view  
`viewowner` `name` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`rolname`) Name of view's owner  
`definition` `text` View definition (a reconstructed [SELECT](</VI. Reference/I. SQL Commands/sql-select.md>) query)  
  
  



  
