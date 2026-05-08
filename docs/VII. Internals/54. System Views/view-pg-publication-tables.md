---
title: 54.17. `pg_publication_tables`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_publication_tables` provides information about the mapping between publications and information of tables they contain. Unlike the underlying catalog [`pg_publication_rel`](</VII. Internals/53. System Catalogs/catalog-pg-publication-rel.md>), this view expands publications defined as [`FOR ALL TABLES`](sql-createpublication.html#SQL-CREATEPUBLICATION-FOR-ALL-TABLES) and [`FOR TABLES IN SCHEMA`](sql-createpublication.html#SQL-CREATEPUBLICATION-FOR-TABLES-IN-SCHEMA), so for such publications there will be a row for each eligible table.

**Table  54.17. `pg_publication_tables` Columns**

Column Type Description  
---  
`pubname` `name` (references [`pg_publication`](</VII. Internals/53. System Catalogs/catalog-pg-publication.md>).`pubname`) Name of publication  
`schemaname` `name` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`nspname`) Name of schema containing table  
`tablename` `name` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relname`) Name of table  
`attnames` `name[]` (<references>).`attname`) Names of table columns included in the publication. This contains all the columns of the table when the user didn't specify the column list for the table.  
`rowfilter` `text` Expression for the table's publication qualifying condition  
  
  



  
