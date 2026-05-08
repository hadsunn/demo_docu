---
title: 53.5. `pg_amproc`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_amproc` stores information about support functions associated with access method operator families. There is one row for each support function belonging to an operator family.

**Table  53.5. `pg_amproc` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`amprocfamily` `oid` (references [`pg_opfamily`](</VII. Internals/53. System Catalogs/catalog-pg-opfamily.md>).`oid`) The operator family this entry is for  
`amproclefttype` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Left-hand input data type of associated operator  
`amprocrighttype` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Right-hand input data type of associated operator  
`amprocnum` `int2` Support function number  
`amproc` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) OID of the function  
  
  


The usual interpretation of the `amproclefttype` and `amprocrighttype` fields is that they identify the left and right input types of the operator(s) that a particular support function supports. For some access methods these match the input data type(s) of the support function itself, for others not. There is a notion of “default” support functions for an index, which are those with `amproclefttype` and `amprocrighttype` both equal to the index operator class's `opcintype`.


  
