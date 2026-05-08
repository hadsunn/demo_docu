---
title: 53.3. `pg_am`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_am` stores information about relation access methods. There is one row for each access method supported by the system. Currently, only tables and indexes have access methods. The requirements for table and index access methods are discussed in detail in [Chapter 63](</VII. Internals/tableam.md>) respectively.

**Table  53.3. `pg_am` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`amname` `name` Name of the access method  
`amhandler` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) OID of a handler function that is responsible for supplying information about the access method  
`amtype` `char` `t` = table (including materialized views), `i` = index.  
  
  


### Note

Before PostgreSQL 9.6, `pg_am` contained many additional columns representing properties of index access methods. That data is now only directly visible at the C code level. However, `pg_index_column_has_property()` and related functions have been added to allow SQL queries to inspect index access method properties; see [Table 9.72](functions-info.html#FUNCTIONS-INFO-CATALOG-TABLE "Table 9.72. System Catalog Information Functions").


  
