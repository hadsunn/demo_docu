---
title: 54.34. `pg_user_mappings`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_user_mappings` provides access to information about user mappings. This is essentially a publicly readable view of [`pg_user_mapping`](</VII. Internals/53. System Catalogs/catalog-pg-user-mapping.md>) that leaves out the options field if the user has no rights to use it.

**Table  54.34. `pg_user_mappings` Columns**

Column Type Description  
---  
`umid` `oid` (references [`pg_user_mapping`](</VII. Internals/53. System Catalogs/catalog-pg-user-mapping.md>).`oid`) OID of the user mapping  
`srvid` `oid` (references [`pg_foreign_server`](</VII. Internals/53. System Catalogs/catalog-pg-foreign-server.md>).`oid`) The OID of the foreign server that contains this mapping  
`srvname` `name` (references [`pg_foreign_server`](</VII. Internals/53. System Catalogs/catalog-pg-foreign-server.md>).`srvname`) Name of the foreign server  
`umuser` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) OID of the local role being mapped, or zero if the user mapping is public  
`usename` `name` Name of the local user to be mapped  
`umoptions` `text[]` User mapping specific options, as “keyword=value” strings  
  
  


To protect password information stored as a user mapping option, the `umoptions` column will read as null unless one of the following applies:

  * current user is the user being mapped, and owns the server or holds `USAGE` privilege on it

  * current user is the server owner and mapping is for `PUBLIC`

  * current user is a superuser





  
