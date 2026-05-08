---
title: 53.16. `pg_db_role_setting`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_db_role_setting` records the default values that have been set for run-time configuration variables, for each role and database combination.

Unlike most system catalogs, `pg_db_role_setting` is shared across all databases of a cluster: there is only one copy of `pg_db_role_setting` per cluster, not one per database.

**Table  53.16. `pg_db_role_setting` Columns**

Column Type Description  
---  
`setdatabase` `oid` (references [`pg_database`](</VII. Internals/53. System Catalogs/catalog-pg-database.md>).`oid`) The OID of the database the setting is applicable to, or zero if not database-specific  
`setrole` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) The OID of the role the setting is applicable to, or zero if not role-specific  
`setconfig` `text[]` Defaults for run-time configuration variables  
  
  



  
