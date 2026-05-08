---
title: 53.24. `pg_foreign_server`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_foreign_server` stores foreign server definitions. A foreign server describes a source of external data, such as a remote server. Foreign servers are accessed via foreign-data wrappers.

**Table  53.24. `pg_foreign_server` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`srvname` `name` Name of the foreign server  
`srvowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the foreign server  
`srvfdw` `oid` (references [`pg_foreign_data_wrapper`](</VII. Internals/53. System Catalogs/catalog-pg-foreign-data-wrapper.md>).`oid`) OID of the foreign-data wrapper of this foreign server  
`srvtype` `text` Type of the server (optional)  
`srvversion` `text` Version of the server (optional)  
`srvacl` `aclitem[]` Access privileges; see [Section 5.7](</II. The SQL Language/5. Data Definition/ddl-priv.md>) for details  
`srvoptions` `text[]` Foreign server specific options, as “keyword=value” strings  
  
  



  
