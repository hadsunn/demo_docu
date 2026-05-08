---
title: 54.18. `pg_replication_origin_status`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `pg_replication_origin_status` view contains information about how far replay for a certain origin has progressed. For more on replication origins see [Chapter 50](</V. Server Programming/replication-origins.md>).

**Table  54.18. `pg_replication_origin_status` Columns**

Column Type Description  
---  
`local_id` `oid` (references [`pg_replication_origin`](</VII. Internals/53. System Catalogs/catalog-pg-replication-origin.md>).`roident`) internal node identifier  
`external_id` `text` (references [`pg_replication_origin`](</VII. Internals/53. System Catalogs/catalog-pg-replication-origin.md>).`roname`) external node identifier  
`remote_lsn` `pg_lsn` The origin node's LSN up to which data has been replicated.  
`local_lsn` `pg_lsn` This node's LSN at which `remote_lsn` has been replicated. Used to flush commit records before persisting data to disk when using asynchronous commits.  
  
  



  
