---
title: 53.35. `pg_opfamily`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_opfamily` defines operator families. Each operator family is a collection of operators and associated support routines that implement the semantics specified for a particular index access method. Furthermore, the operators in a family are all “compatible”, in a way that is specified by the access method. The operator family concept allows cross-data-type operators to be used with indexes and to be reasoned about using knowledge of access method semantics.

Operator families are described at length in [Section 38.16](</V. Server Programming/38. Extending SQL/xindex.md>).

**Table  53.35. `pg_opfamily` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`opfmethod` `oid` (references [`pg_am`](</VII. Internals/53. System Catalogs/catalog-pg-am.md>).`oid`) Index access method operator family is for  
`opfname` `name` Name of this operator family  
`opfnamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) Namespace of this operator family  
`opfowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the operator family  
  
  


The majority of the information defining an operator family is not in its `pg_opfamily` row, but in the associated rows in [`pg_amop`](</VII. Internals/53. System Catalogs/catalog-pg-amop.md>).


  
