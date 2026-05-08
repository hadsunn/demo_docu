---
title: 31.8. Monitoring
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Because logical replication is based on a similar architecture as [physical streaming replication](warm-standby.html#STREAMING-REPLICATION "27.2.5. Streaming Replication"), the monitoring on a publication node is similar to monitoring of a physical replication primary (see [Section 27.2.5.2](warm-standby.html#STREAMING-REPLICATION-MONITORING "27.2.5.2. Monitoring")).

The monitoring information about subscription is visible in [`pg_stat_subscription`](monitoring-stats.html#MONITORING-PG-STAT-SUBSCRIPTION "28.2.8. pg_stat_subscription"). This view contains one row for every subscription worker. A subscription can have zero or more active subscription workers depending on its state.

Normally, there is a single apply process running for an enabled subscription. A disabled subscription or a crashed subscription will have zero rows in this view. If the initial data synchronization of any table is in progress, there will be additional workers for the tables being synchronized. Moreover, if the [`streaming`](sql-createsubscription.html#SQL-CREATESUBSCRIPTION-WITH-STREAMING) transaction is applied in parallel, there may be additional parallel apply workers.


  
