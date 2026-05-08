---
title: 54.21. `pg_rules`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_rules` provides access to useful information about query rewrite rules.

**Table  54.21. `pg_rules` Columns**

Column Type Description  
---  
`schemaname` `name` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`nspname`) Name of schema containing table  
`tablename` `name` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relname`) Name of table the rule is for  
`rulename` `name` (references [`pg_rewrite`](</VII. Internals/53. System Catalogs/catalog-pg-rewrite.md>).`rulename`) Name of rule  
`definition` `text` Rule definition (a reconstructed creation command)  
  
  


The `pg_rules` view excludes the `ON SELECT` rules of views and materialized views; those can be seen in [`pg_views`](</VII. Internals/54. System Views/view-pg-views.md>).


  
