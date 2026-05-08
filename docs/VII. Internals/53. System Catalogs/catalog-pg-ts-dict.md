---
title: 53.61. `pg_ts_dict`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `pg_ts_dict` catalog contains entries defining text search dictionaries. A dictionary depends on a text search template, which specifies all the implementation functions needed; the dictionary itself provides values for the user-settable parameters supported by the template. This division of labor allows dictionaries to be created by unprivileged users. The parameters are specified by a text string `dictinitoption`, whose format and meaning vary depending on the template.

PostgreSQL's text search features are described at length in [Chapter 12](</II. The SQL Language/12. Full Text Search/12. Full Text Search.md>).

**Table  53.61. `pg_ts_dict` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`dictname` `name` Text search dictionary name  
`dictnamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) The OID of the namespace that contains this dictionary  
`dictowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the dictionary  
`dicttemplate` `oid` (references [`pg_ts_template`](</VII. Internals/53. System Catalogs/catalog-pg-ts-template.md>).`oid`) The OID of the text search template for this dictionary  
`dictinitoption` `text` Initialization option string for the template  
  
  



  
