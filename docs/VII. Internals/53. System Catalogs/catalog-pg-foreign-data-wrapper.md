---
title: 53.23. `pg_foreign_data_wrapper`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_foreign_data_wrapper` stores foreign-data wrapper definitions. A foreign-data wrapper is the mechanism by which external data, residing on foreign servers, is accessed.

**Table  53.23. `pg_foreign_data_wrapper` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`fdwname` `name` Name of the foreign-data wrapper  
`fdwowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the foreign-data wrapper  
`fdwhandler` `oid` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) References a handler function that is responsible for supplying execution routines for the foreign-data wrapper. Zero if no handler is provided  
`fdwvalidator` `oid` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) References a validator function that is responsible for checking the validity of the options given to the foreign-data wrapper, as well as options for foreign servers and user mappings using the foreign-data wrapper. Zero if no validator is provided  
`fdwacl` `aclitem[]` Access privileges; see [Section 5.7](</II. The SQL Language/5. Data Definition/ddl-priv.md>) for details  
`fdwoptions` `text[]` Foreign-data wrapper specific options, as “keyword=value” strings  
  
  



  
