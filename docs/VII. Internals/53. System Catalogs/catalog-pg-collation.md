---
title: 53.12. `pg_collation`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_collation` describes the available collations, which are essentially mappings from an SQL name to operating system locale categories. See [Section 24.2](</III. Server Administration/24. Localization/collation.md>) for more information.

**Table  53.12. `pg_collation` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`collname` `name` Collation name (unique per namespace and encoding)  
`collnamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) The OID of the namespace that contains this collation  
`collowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the collation  
`collprovider` `char` Provider of the collation: `d` = database default, `c` = libc, `i` = icu  
`collisdeterministic` `bool` Is the collation deterministic?  
`collencoding` `int4` Encoding in which the collation is applicable, or -1 if it works for any encoding  
`collcollate` `text` `LC_COLLATE` for this collation object  
`collctype` `text` `LC_CTYPE` for this collation object  
`colliculocale` `text` ICU locale ID for this collation object  
`collicurules` `text` ICU collation rules for this collation object  
`collversion` `text` Provider-specific version of the collation. This is recorded when the collation is created and then checked when it is used, to detect changes in the collation definition that could lead to data corruption.  
  
  


Note that the unique key on this catalog is (`collname`, `collencoding`, `collnamespace`) not just (`collname`, `collnamespace`). PostgreSQL generally ignores all collations that do not have `collencoding` equal to either the current database's encoding or -1, and creation of new entries with the same name as an entry with `collencoding` = -1 is forbidden. Therefore it is sufficient to use a qualified SQL name (_`schema`_._`name`_) to identify a collation, even though this is not unique according to the catalog definition. The reason for defining the catalog this way is that initdb fills it in at cluster initialization time with entries for all locales available on the system, so it must be able to hold entries for all encodings that might ever be used in the cluster.

In the `template0` database, it could be useful to create collations whose encoding does not match the database encoding, since they could match the encodings of databases later cloned from `template0`. This would currently have to be done manually.


  
