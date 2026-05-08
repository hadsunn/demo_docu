---
title: 53.41. `pg_publication_namespace`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


---  
  


The catalog `pg_publication_namespace` contains the mapping between schemas and publications in the database. This is a many-to-many mapping.

**Table  53.41. `pg_publication_namespace` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`pnpubid` `oid` (references [`pg_publication`](</VII. Internals/53. System Catalogs/catalog-pg-publication.md>).`oid`) Reference to publication  
`pnnspid` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) Reference to schema  
  
  



  
