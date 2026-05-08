---
title: 53.46. `pg_seclabel`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_seclabel` stores security labels on database objects. Security labels can be manipulated with the [`SECURITY LABEL`](</VI. Reference/I. SQL Commands/sql-security-label.md>).

See also [`pg_shseclabel`](</VII. Internals/53. System Catalogs/catalog-pg-shseclabel.md>), which performs a similar function for security labels of database objects that are shared across a database cluster.

**Table  53.46. `pg_seclabel` Columns**

Column Type Description  
---  
`objoid` `oid` (references any OID column) The OID of the object this security label pertains to  
`classoid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The OID of the system catalog this object appears in  
`objsubid` `int4` For a security label on a table column, this is the column number (the `objoid` and `classoid` refer to the table itself). For all other object types, this column is zero.  
`provider` `text` The label provider associated with this label.  
`label` `text` The security label applied to this object.  
  
  



  
