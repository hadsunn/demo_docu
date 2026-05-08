---
title: 53.60. `pg_ts_config_map`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `pg_ts_config_map` catalog contains entries showing which text search dictionaries should be consulted, and in what order, for each output token type of each text search configuration's parser.

PostgreSQL's text search features are described at length in [Chapter 12](</II. The SQL Language/12. Full Text Search/12. Full Text Search.md>).

**Table  53.60. `pg_ts_config_map` Columns**

Column Type Description  
---  
`mapcfg` `oid` (references [`pg_ts_config`](</VII. Internals/53. System Catalogs/catalog-pg-ts-config.md>) entry owning this map entry  
`maptokentype` `int4` A token type emitted by the configuration's parser  
`mapseqno` `int4` Order in which to consult this entry (lower `mapseqno`s first)  
`mapdict` `oid` (references [`pg_ts_dict`](</VII. Internals/53. System Catalogs/catalog-pg-ts-dict.md>).`oid`) The OID of the text search dictionary to consult  
  
  



  
