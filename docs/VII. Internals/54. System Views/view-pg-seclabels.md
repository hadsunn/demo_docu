---
title: 54.22. `pg_seclabels`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_seclabels` provides information about security labels. It as an easier-to-query version of the [`pg_seclabel`](</VII. Internals/53. System Catalogs/catalog-pg-seclabel.md>) catalog.

**Table  54.22. `pg_seclabels` Columns**

Column Type Description  
---  
`objoid` `oid` (references any OID column) The OID of the object this security label pertains to  
`classoid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The OID of the system catalog this object appears in  
`objsubid` `int4` For a security label on a table column, this is the column number (the `objoid` and `classoid` refer to the table itself). For all other object types, this column is zero.  
`objtype` `text` The type of object to which this label applies, as text.  
`objnamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) The OID of the namespace for this object, if applicable; otherwise NULL.  
`objname` `text` The name of the object to which this label applies, as text.  
`provider` `text` (references [`pg_seclabel`](</VII. Internals/53. System Catalogs/catalog-pg-seclabel.md>).`provider`) The label provider associated with this label.  
`label` `text` (references [`pg_seclabel`](</VII. Internals/53. System Catalogs/catalog-pg-seclabel.md>).`label`) The security label applied to this object.  
  
  



  
