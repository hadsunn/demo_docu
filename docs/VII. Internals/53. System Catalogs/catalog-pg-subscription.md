---
title: 53.54. `pg_subscription`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_subscription` contains all existing logical replication subscriptions. For more information about logical replication see [Chapter 31](</III. Server Administration/31. Logical Replication/31. Logical Replication.md>).

Unlike most system catalogs, `pg_subscription` is shared across all databases of a cluster: there is only one copy of `pg_subscription` per cluster, not one per database.

Access to the column `subconninfo` is revoked from normal users, because it could contain plain-text passwords.

**Table  53.54. `pg_subscription` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`subdbid` `oid` (references [`pg_database`](</VII. Internals/53. System Catalogs/catalog-pg-database.md>).`oid`) OID of the database that the subscription resides in  
`subskiplsn` `pg_lsn` Finish LSN of the transaction whose changes are to be skipped, if a valid LSN; otherwise `0/0`.  
`subname` `name` Name of the subscription  
`subowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the subscription  
`subenabled` `bool` If true, the subscription is enabled and should be replicating  
`subbinary` `bool` If true, the subscription will request that the publisher send data in binary format  
`substream` `char` Controls how to handle the streaming of in-progress transactions: `f` = disallow streaming of in-progress transactions, `t` = spill the changes of in-progress transactions to disk and apply at once after the transaction is committed on the publisher and received by the subscriber, `p` = apply changes directly using a parallel apply worker if available (same as 't' if no worker is available)  
`subtwophasestate` `char` State codes for two-phase mode: `d` = disabled, `p` = pending enablement, `e` = enabled  
`subdisableonerr` `bool` If true, the subscription will be disabled if one of its workers detects an error  
`subpasswordrequired` `bool` If true, the subscription will be required to specify a password for authentication  
`subrunasowner` `bool` If true, the subscription will be run with the permissions of the subscription owner  
`subconninfo` `text` Connection string to the upstream database  
`subslotname` `name` Name of the replication slot in the upstream database (also used for the local replication origin name); null represents `NONE`  
`subsynccommit` `text` The `synchronous_commit` setting for the subscription's workers to use  
`subpublications` `text[]` Array of subscribed publication names. These reference publications defined in the upstream database. For more on publications see [Section 31.1](</III. Server Administration/31. Logical Replication/logical-replication-publication.md>).  
`suborigin` `text` The origin value must be either `none` or `any`. The default is `any`. If `none`, the subscription will request the publisher to only send changes that don't have an origin. If `any`, the publisher sends changes regardless of their origin.  
  
  



  
