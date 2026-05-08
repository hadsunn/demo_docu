---
title: 53.43. `pg_range`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_range` stores information about range types. This is in addition to the types' entries in [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).

**Table  53.43. `pg_range` Columns**

Column Type Description  
---  
`rngtypid` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) OID of the range type  
`rngsubtype` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) OID of the element type (subtype) of this range type  
`rngmultitypid` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) OID of the multirange type for this range type  
`rngcollation` `oid` (references [`pg_collation`](</VII. Internals/53. System Catalogs/catalog-pg-collation.md>).`oid`) OID of the collation used for range comparisons, or zero if none  
`rngsubopc` `oid` (references [`pg_opclass`](</VII. Internals/53. System Catalogs/catalog-pg-opclass.md>).`oid`) OID of the subtype's operator class used for range comparisons  
`rngcanonical` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) OID of the function to convert a range value into canonical form, or zero if none  
`rngsubdiff` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) OID of the function to return the difference between two element values as `double precision`, or zero if none  
  
  


`rngsubopc` (plus `rngcollation`, if the element type is collatable) determines the sort ordering used by the range type. `rngcanonical` is used when the element type is discrete. `rngsubdiff` is optional but should be supplied to improve performance of GiST indexes on the range type.


  
