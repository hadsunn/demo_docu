---
title: 53.25. `pg_foreign_table`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_foreign_table` contains auxiliary information about foreign tables. A foreign table is primarily represented by a [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>) entry, just like a regular table. Its `pg_foreign_table` entry contains the information that is pertinent only to foreign tables and not any other kind of relation.

**Table  53.25. `pg_foreign_table` Columns**

Column Type Description  
---  
`ftrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>) entry for this foreign table  
`ftserver` `oid` (references [`pg_foreign_server`](</VII. Internals/53. System Catalogs/catalog-pg-foreign-server.md>).`oid`) OID of the foreign server for this foreign table  
`ftoptions` `text[]` Foreign table options, as “keyword=value” strings  
  
  



  
