---
title: 53.52. `pg_statistic_ext`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_statistic_ext` holds definitions of extended planner statistics. Each row in this catalog corresponds to a _statistics object_ created with [`CREATE STATISTICS`](</VI. Reference/I. SQL Commands/sql-createstatistics.md>).

**Table  53.52. `pg_statistic_ext` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`stxrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) Table containing the columns described by this object  
`stxname` `name` Name of the statistics object  
`stxnamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) The OID of the namespace that contains this statistics object  
`stxowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the statistics object  
`stxstattarget` `int4` `stxstattarget` controls the level of detail of statistics accumulated for this statistics object by [`ANALYZE`](</VI. Reference/I. SQL Commands/sql-analyze.md>). A zero value indicates that no statistics should be collected. A negative value says to use the maximum of the statistics targets of the referenced columns, if set, or the system default statistics target. Positive values of `stxstattarget` determine the target number of “most common values” to collect.  
`stxkeys` `int2vector` (references [`pg_attribute`](</VII. Internals/53. System Catalogs/catalog-pg-attribute.md>).`attnum`) An array of attribute numbers, indicating which table columns are covered by this statistics object; for example a value of `1 3` would mean that the first and the third table columns are covered  
`stxkind` `char[]` An array containing codes for the enabled statistics kinds; valid values are: `d` for n-distinct statistics, `f` for functional dependency statistics, `m` for most common values (MCV) list statistics, and `e` for expression statistics  
`stxexprs` `pg_node_tree` Expression trees (in `nodeToString()` representation) for statistics object attributes that are not simple column references. This is a list with one element per expression. Null if all statistics object attributes are simple references.  
  
  


The `pg_statistic_ext` entry is filled in completely during [`CREATE STATISTICS`](</VI. Reference/I. SQL Commands/sql-createstatistics.md>) catalog.


  
