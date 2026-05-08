---
title: 53.26. `pg_index`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_index` contains part of the information about indexes. The rest is mostly in [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).

**Table  53.26. `pg_index` Columns**

Column Type Description  
---  
`indexrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>) entry for this index  
`indrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>) entry for the table this index is for  
`indnatts` `int2` The total number of columns in the index (duplicates `pg_class.relnatts`); this number includes both key and included attributes  
`indnkeyatts` `int2` The number of _key columns_ in the index, not counting any _included columns_ , which are merely stored and do not participate in the index semantics  
`indisunique` `bool` If true, this is a unique index  
`indnullsnotdistinct` `bool` This value is only used for unique indexes. If false, this unique index will consider null values distinct (so the index can contain multiple null values in a column, the default PostgreSQL behavior). If it is true, it will consider null values to be equal (so the index can only contain one null value in a column).  
`indisprimary` `bool` If true, this index represents the primary key of the table (`indisunique` should always be true when this is true)  
`indisexclusion` `bool` If true, this index supports an exclusion constraint  
`indimmediate` `bool` If true, the uniqueness check is enforced immediately on insertion (irrelevant if `indisunique` is not true)  
`indisclustered` `bool` If true, the table was last clustered on this index  
`indisvalid` `bool` If true, the index is currently valid for queries. False means the index is possibly incomplete: it must still be modified by [`INSERT`](</VI. Reference/I. SQL Commands/sql-insert.md>) operations, but it cannot safely be used for queries. If it is unique, the uniqueness property is not guaranteed true either.  
`indcheckxmin` `bool` If true, queries must not use the index until the `xmin` of this `pg_index` row is below their `TransactionXmin` event horizon, because the table may contain broken [HOT chains](</VII. Internals/73. Database Physical Storage/storage-hot.md>) with incompatible rows that they can see  
`indisready` `bool` If true, the index is currently ready for inserts. False means the index must be ignored by [`INSERT`](</VI. Reference/I. SQL Commands/sql-insert.md>) operations.  
`indislive` `bool` If false, the index is in process of being dropped, and should be ignored for all purposes (including HOT-safety decisions)  
`indisreplident` `bool` If true this index has been chosen as “replica identity” using [`ALTER TABLE ... REPLICA IDENTITY USING INDEX ...`](sql-altertable.html#SQL-ALTERTABLE-REPLICA-IDENTITY)  
`indkey` `int2vector` (references [`pg_attribute`](</VII. Internals/53. System Catalogs/catalog-pg-attribute.md>).`attnum`) This is an array of `indnatts` values that indicate which table columns this index indexes. For example, a value of `1 3` would mean that the first and the third table columns make up the index entries. Key columns come before non-key (included) columns. A zero in this array indicates that the corresponding index attribute is an expression over the table columns, rather than a simple column reference.  
`indcollation` `oidvector` (references [`pg_collation`](</VII. Internals/53. System Catalogs/catalog-pg-collation.md>).`oid`) For each column in the index key (`indnkeyatts` values), this contains the OID of the collation to use for the index, or zero if the column is not of a collatable data type.  
`indclass` `oidvector` (references [`pg_opclass`](</VII. Internals/53. System Catalogs/catalog-pg-opclass.md>) for details.  
`indoption` `int2vector` This is an array of `indnkeyatts` values that store per-column flag bits. The meaning of the bits is defined by the index's access method.  
`indexprs` `pg_node_tree` Expression trees (in `nodeToString()` representation) for index attributes that are not simple column references. This is a list with one element for each zero entry in `indkey`. Null if all index attributes are simple references.  
`indpred` `pg_node_tree` Expression tree (in `nodeToString()` representation) for partial index predicate. Null if not a partial index.  
  
  



  
