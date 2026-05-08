---
title: 53.47. `pg_sequence`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_sequence` contains information about sequences. Some of the information about sequences, such as the name and the schema, is in [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>)

**Table  53.47. `pg_sequence` Columns**

Column Type Description  
---  
`seqrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>) entry for this sequence  
`seqtypid` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Data type of the sequence  
`seqstart` `int8` Start value of the sequence  
`seqincrement` `int8` Increment value of the sequence  
`seqmax` `int8` Maximum value of the sequence  
`seqmin` `int8` Minimum value of the sequence  
`seqcache` `int8` Cache size of the sequence  
`seqcycle` `bool` Whether the sequence cycles  
  
  



  
