---
title: 53.53. `pg_statistic_ext_data`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_statistic_ext_data` holds data for extended planner statistics defined in [`pg_statistic_ext`](</VII. Internals/53. System Catalogs/catalog-pg-statistic-ext.md>).

Normally there is one entry, with `stxdinherit` = `false`, for each statistics object that has been analyzed. If the table has inheritance children or partitions, a second entry with `stxdinherit` = `true` is also created. This row represents the statistics object over the inheritance tree, i.e., statistics for the data you'd see with `SELECT * FROM _`table`_ *`, whereas the `stxdinherit` = `false` row represents the results of `SELECT * FROM ONLY _`table`_`.

Like [`pg_statistic`](</VII. Internals/53. System Catalogs/catalog-pg-statistic.md>)) that only exposes information about tables the current user owns.

**Table  53.53. `pg_statistic_ext_data` Columns**

Column Type Description  
---  
`stxoid` `oid` (references [`pg_statistic_ext`](</VII. Internals/53. System Catalogs/catalog-pg-statistic-ext.md>).`oid`) Extended statistics object containing the definition for this data  
`stxdinherit` `bool` If true, the stats include values from child tables, not just the values in the specified relation  
`stxdndistinct` `pg_ndistinct` N-distinct counts, serialized as `pg_ndistinct` type  
`stxddependencies` `pg_dependencies` Functional dependency statistics, serialized as `pg_dependencies` type  
`stxdmcv` `pg_mcv_list` MCV (most-common values) list statistics, serialized as `pg_mcv_list` type  
`stxdexpr` `pg_statistic[]` Per-expression statistics, serialized as an array of `pg_statistic` type  
  
  



  
