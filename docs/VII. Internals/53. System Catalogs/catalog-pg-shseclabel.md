---
title: 53.50. `pg_shseclabel`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_shseclabel` stores security labels on shared database objects. Security labels can be manipulated with the [`SECURITY LABEL`](</VI. Reference/I. SQL Commands/sql-security-label.md>).

See also [`pg_seclabel`](</VII. Internals/53. System Catalogs/catalog-pg-seclabel.md>), which performs a similar function for security labels involving objects within a single database.

Unlike most system catalogs, `pg_shseclabel` is shared across all databases of a cluster: there is only one copy of `pg_shseclabel` per cluster, not one per database.

**Table  53.50. `pg_shseclabel` Columns**

Column Type Description  
---  
`objoid` `oid` (references any OID column) The OID of the object this security label pertains to  
`classoid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The OID of the system catalog this object appears in  
`provider` `text` The label provider associated with this label.  
`label` `text` The security label applied to this object.  
  
  



  
