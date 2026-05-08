---
title: 53.11. `pg_class`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_class` describes tables and other objects that have columns or are otherwise similar to a table. This includes indexes (but see also [`pg_index`](</VII. Internals/53. System Catalogs/catalog-pg-index.md>)), views, materialized views, composite types, and TOAST tables; see `relkind`. Below, when we mean all of these kinds of objects we speak of “relations”. Not all of `pg_class`'s columns are meaningful for all relation kinds.

**Table  53.11. `pg_class` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`relname` `name` Name of the table, index, view, etc.  
`relnamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) The OID of the namespace that contains this relation  
`reltype` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) The OID of the data type that corresponds to this table's row type, if any; zero for indexes, sequences, and toast tables, which have no `pg_type` entry  
`reloftype` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) For typed tables, the OID of the underlying composite type; zero for all other relations  
`relowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the relation  
`relam` `oid` (references [`pg_am`](</VII. Internals/53. System Catalogs/catalog-pg-am.md>).`oid`) If this is a table or an index, the access method used (heap, B-tree, hash, etc.); otherwise zero (zero occurs for sequences, as well as relations without storage, such as views)  
`relfilenode` `oid` Name of the on-disk file of this relation; zero means this is a “mapped” relation whose disk file name is determined by low-level state  
`reltablespace` `oid` (references [`pg_tablespace`](</VII. Internals/53. System Catalogs/catalog-pg-tablespace.md>).`oid`) The tablespace in which this relation is stored. If zero, the database's default tablespace is implied. Not meaningful if the relation has no on-disk file, except for partitioned tables, where this is the tablespace in which partitions will be created when one is not specified in the creation command.  
`relpages` `int4` Size of the on-disk representation of this table in pages (of size `BLCKSZ`). This is only an estimate used by the planner. It is updated by [`VACUUM`](</VI. Reference/I. SQL Commands/sql-vacuum.md>).  
`reltuples` `float4` Number of live rows in the table. This is only an estimate used by the planner. It is updated by [`VACUUM`](</VI. Reference/I. SQL Commands/sql-vacuum.md>). If the table has never yet been vacuumed or analyzed, `reltuples` contains `-1` indicating that the row count is unknown.  
`relallvisible` `int4` Number of pages that are marked all-visible in the table's visibility map. This is only an estimate used by the planner. It is updated by [`VACUUM`](</VI. Reference/I. SQL Commands/sql-vacuum.md>).  
`reltoastrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) OID of the TOAST table associated with this table, zero if none. The TOAST table stores large attributes “out of line” in a secondary table.  
`relhasindex` `bool` True if this is a table and it has (or recently had) any indexes  
`relisshared` `bool` True if this table is shared across all databases in the cluster. Only certain system catalogs (such as [`pg_database`](</VII. Internals/53. System Catalogs/catalog-pg-database.md>)) are shared.  
`relpersistence` `char` `p` = permanent table/sequence, `u` = unlogged table/sequence, `t` = temporary table/sequence  
`relkind` `char` `r` = ordinary table, `i` = index, `S` = sequence, `t` = TOAST table, `v` = view, `m` = materialized view, `c` = composite type, `f` = foreign table, `p` = partitioned table, `I` = partitioned index  
`relnatts` `int2` Number of user columns in the relation (system columns not counted). There must be this many corresponding entries in [`pg_attribute`](</VII. Internals/53. System Catalogs/catalog-pg-attribute.md>). See also `pg_attribute`.`attnum`.  
`relchecks` `int2` Number of `CHECK` constraints on the table; see [`pg_constraint`](</VII. Internals/53. System Catalogs/catalog-pg-constraint.md>) catalog  
`relhasrules` `bool` True if table has (or once had) rules; see [`pg_rewrite`](</VII. Internals/53. System Catalogs/catalog-pg-rewrite.md>) catalog  
`relhastriggers` `bool` True if table has (or once had) triggers; see [`pg_trigger`](</VII. Internals/53. System Catalogs/catalog-pg-trigger.md>) catalog  
`relhassubclass` `bool` True if table or index has (or once had) any inheritance children or partitions  
`relrowsecurity` `bool` True if table has row-level security enabled; see [`pg_policy`](</VII. Internals/53. System Catalogs/catalog-pg-policy.md>) catalog  
`relforcerowsecurity` `bool` True if row-level security (when enabled) will also apply to table owner; see [`pg_policy`](</VII. Internals/53. System Catalogs/catalog-pg-policy.md>) catalog  
`relispopulated` `bool` True if relation is populated (this is true for all relations other than some materialized views)  
`relreplident` `char` Columns used to form “replica identity” for rows: `d` = default (primary key, if any), `n` = nothing, `f` = all columns, `i` = index with `indisreplident` set (same as nothing if the index used has been dropped)  
`relispartition` `bool` True if table or index is a partition  
`relrewrite` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) For new relations being written during a DDL operation that requires a table rewrite, this contains the OID of the original relation; otherwise zero. That state is only visible internally; this field should never contain anything other than zero for a user-visible relation.  
`relfrozenxid` `xid` All transaction IDs before this one have been replaced with a permanent (“frozen”) transaction ID in this table. This is used to track whether the table needs to be vacuumed in order to prevent transaction ID wraparound or to allow `pg_xact` to be shrunk. Zero (`InvalidTransactionId`) if the relation is not a table.  
`relminmxid` `xid` All multixact IDs before this one have been replaced by a transaction ID in this table. This is used to track whether the table needs to be vacuumed in order to prevent multixact ID wraparound or to allow `pg_multixact` to be shrunk. Zero (`InvalidMultiXactId`) if the relation is not a table.  
`relacl` `aclitem[]` Access privileges; see [Section 5.7](</II. The SQL Language/5. Data Definition/ddl-priv.md>) for details  
`reloptions` `text[]` Access-method-specific options, as “keyword=value” strings  
`relpartbound` `pg_node_tree` If table is a partition (see `relispartition`), internal representation of the partition bound  
  
  


Several of the Boolean flags in `pg_class` are maintained lazily: they are guaranteed to be true if that's the correct state, but may not be reset to false immediately when the condition is no longer true. For example, `relhasindex` is set by [`CREATE INDEX`](</VI. Reference/I. SQL Commands/sql-createindex.md>) clears `relhasindex` if it finds the table has no indexes. This arrangement avoids race conditions and improves concurrency.


  
