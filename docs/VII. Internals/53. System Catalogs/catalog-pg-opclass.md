---
title: 53.33. `pg_opclass`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_opclass` defines index access method operator classes. Each operator class defines semantics for index columns of a particular data type and a particular index access method. An operator class essentially specifies that a particular operator family is applicable to a particular indexable column data type. The set of operators from the family that are actually usable with the indexed column are whichever ones accept the column's data type as their left-hand input.

Operator classes are described at length in [Section 38.16](</V. Server Programming/38. Extending SQL/xindex.md>).

**Table  53.33. `pg_opclass` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`opcmethod` `oid` (references [`pg_am`](</VII. Internals/53. System Catalogs/catalog-pg-am.md>).`oid`) Index access method operator class is for  
`opcname` `name` Name of this operator class  
`opcnamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) Namespace of this operator class  
`opcowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the operator class  
`opcfamily` `oid` (references [`pg_opfamily`](</VII. Internals/53. System Catalogs/catalog-pg-opfamily.md>).`oid`) Operator family containing the operator class  
`opcintype` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Data type that the operator class indexes  
`opcdefault` `bool` True if this operator class is the default for `opcintype`  
`opckeytype` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Type of data stored in index, or zero if same as `opcintype`  
  
  


An operator class's `opcmethod` must match the `opfmethod` of its containing operator family. Also, there must be no more than one `pg_opclass` row having `opcdefault` true for any given combination of `opcmethod` and `opcintype`.


  
