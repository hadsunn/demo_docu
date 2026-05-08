---
title: 53.19. `pg_description`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_description` stores optional descriptions (comments) for each database object. Descriptions can be manipulated with the [`COMMENT`](</VI. Reference/I. SQL Commands/sql-comment.md>) command and viewed with psql's `\d` commands. Descriptions of many built-in system objects are provided in the initial contents of `pg_description`.

See also [`pg_shdescription`](</VII. Internals/53. System Catalogs/catalog-pg-shdescription.md>), which performs a similar function for descriptions involving objects that are shared across a database cluster.

**Table  53.19. `pg_description` Columns**

Column Type Description  
---  
`objoid` `oid` (references any OID column) The OID of the object this description pertains to  
`classoid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The OID of the system catalog this object appears in  
`objsubid` `int4` For a comment on a table column, this is the column number (the `objoid` and `classoid` refer to the table itself). For all other object types, this column is zero.  
`description` `text` Arbitrary text that serves as the description of this object  
  
  



  
