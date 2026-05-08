---
title: 53.65. `pg_user_mapping`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_user_mapping` stores the mappings from local user to remote. Access to this catalog is restricted from normal users, use the view [`pg_user_mappings`](</VII. Internals/54. System Views/view-pg-user-mappings.md>) instead.

**Table  53.66. `pg_user_mapping` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`umuser` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) OID of the local role being mapped, or zero if the user mapping is public  
`umserver` `oid` (references [`pg_foreign_server`](</VII. Internals/53. System Catalogs/catalog-pg-foreign-server.md>).`oid`) The OID of the foreign server that contains this mapping  
`umoptions` `text[]` User mapping specific options, as “keyword=value” strings  
  
  



  
