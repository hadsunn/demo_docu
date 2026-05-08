---
title: 53.37. `pg_partitioned_table`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_partitioned_table` stores information about how tables are partitioned.

**Table  53.37. `pg_partitioned_table` Columns**

Column Type Description  
---  
`partrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>) entry for this partitioned table  
`partstrat` `char` Partitioning strategy; `h` = hash partitioned table, `l` = list partitioned table, `r` = range partitioned table  
`partnatts` `int2` The number of columns in the partition key  
`partdefid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>) entry for the default partition of this partitioned table, or zero if this partitioned table does not have a default partition  
`partattrs` `int2vector` (references [`pg_attribute`](</VII. Internals/53. System Catalogs/catalog-pg-attribute.md>).`attnum`) This is an array of `partnatts` values that indicate which table columns are part of the partition key. For example, a value of `1 3` would mean that the first and the third table columns make up the partition key. A zero in this array indicates that the corresponding partition key column is an expression, rather than a simple column reference.  
`partclass` `oidvector` (references [`pg_opclass`](</VII. Internals/53. System Catalogs/catalog-pg-opclass.md>) for details.  
`partcollation` `oidvector` (references [`pg_collation`](</VII. Internals/53. System Catalogs/catalog-pg-collation.md>).`oid`) For each column in the partition key, this contains the OID of the collation to use for partitioning, or zero if the column is not of a collatable data type.  
`partexprs` `pg_node_tree` Expression trees (in `nodeToString()` representation) for partition key columns that are not simple column references. This is a list with one element for each zero entry in `partattrs`. Null if all partition key columns are simple references.  
  
  



  
