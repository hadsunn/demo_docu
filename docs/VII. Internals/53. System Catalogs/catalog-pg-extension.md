---
title: 53.22. `pg_extension`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_extension` stores information about the installed extensions. See [Section 38.17](</V. Server Programming/38. Extending SQL/extend-extensions.md>) for details about extensions.

**Table  53.22. `pg_extension` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`extname` `name` Name of the extension  
`extowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the extension  
`extnamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) Schema containing the extension's exported objects  
`extrelocatable` `bool` True if extension can be relocated to another schema  
`extversion` `text` Version name for the extension  
`extconfig` `oid[]` (<references>).`oid`) Array of `regclass` OIDs for the extension's configuration table(s), or `NULL` if none  
`extcondition` `text[]` Array of `WHERE`-clause filter conditions for the extension's configuration table(s), or `NULL` if none  
  
  


Note that unlike most catalogs with a “namespace” column, `extnamespace` is not meant to imply that the extension belongs to that schema. Extension names are never schema-qualified. Rather, `extnamespace` indicates the schema that contains most or all of the extension's objects. If `extrelocatable` is true, then this schema must in fact contain all schema-qualifiable objects belonging to the extension.


  
