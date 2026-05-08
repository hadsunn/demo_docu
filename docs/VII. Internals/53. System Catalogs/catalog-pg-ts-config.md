---
title: 53.59. `pg_ts_config`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `pg_ts_config` catalog contains entries representing text search configurations. A configuration specifies a particular text search parser and a list of dictionaries to use for each of the parser's output token types. The parser is shown in the `pg_ts_config` entry, but the token-to-dictionary mapping is defined by subsidiary entries in [`pg_ts_config_map`](</VII. Internals/53. System Catalogs/catalog-pg-ts-config-map.md>).

PostgreSQL's text search features are described at length in [Chapter 12](</II. The SQL Language/12. Full Text Search/12. Full Text Search.md>).

**Table  53.59. `pg_ts_config` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`cfgname` `name` Text search configuration name  
`cfgnamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) The OID of the namespace that contains this configuration  
`cfgowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the configuration  
`cfgparser` `oid` (references [`pg_ts_parser`](</VII. Internals/53. System Catalogs/catalog-pg-ts-parser.md>).`oid`) The OID of the text search parser for this configuration  
  
  



  
