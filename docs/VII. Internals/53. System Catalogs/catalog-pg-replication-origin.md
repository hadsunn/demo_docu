---
title: 53.44. `pg_replication_origin`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `pg_replication_origin` catalog contains all replication origins created. For more on replication origins see [Chapter 50](</V. Server Programming/replication-origins.md>).

Unlike most system catalogs, `pg_replication_origin` is shared across all databases of a cluster: there is only one copy of `pg_replication_origin` per cluster, not one per database.

**Table  53.44. `pg_replication_origin` Columns**

Column Type Description  
---  
`roident` `oid` A unique, cluster-wide identifier for the replication origin. Should never leave the system.  
`roname` `text` The external, user defined, name of a replication origin.  
  
  



  
