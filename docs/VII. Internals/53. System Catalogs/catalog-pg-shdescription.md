---
title: 53.49. `pg_shdescription`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_shdescription` stores optional descriptions (comments) for shared database objects. Descriptions can be manipulated with the [`COMMENT`](</VI. Reference/I. SQL Commands/sql-comment.md>) command and viewed with psql's `\d` commands.

See also [`pg_description`](</VII. Internals/53. System Catalogs/catalog-pg-description.md>), which performs a similar function for descriptions involving objects within a single database.

Unlike most system catalogs, `pg_shdescription` is shared across all databases of a cluster: there is only one copy of `pg_shdescription` per cluster, not one per database.

**Table  53.49. `pg_shdescription` Columns**

Column Type Description  
---  
`objoid` `oid` (references any OID column) The OID of the object this description pertains to  
`classoid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The OID of the system catalog this object appears in  
`description` `text` Arbitrary text that serves as the description of this object  
  
  



  
