---
title: 30.2. Data Checksums
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


---  
  


[30.2.1. Off-line Enabling of Checksums](</III. Server Administration/30. Reliability and the Write-Ahead Log/checksums.md#3021-off-line-enabling-of-checksums>)



By default, data pages are not protected by checksums, but this can optionally be enabled for a cluster. When enabled, each data page includes a checksum that is updated when the page is written and verified each time the page is read. Only data pages are protected by checksums; internal data structures and temporary files are not.

Checksums can be enabled when the cluster is initialized using [initdb](app-initdb.html#APP-INITDB-DATA-CHECKSUMS). They can also be enabled or disabled at a later time as an offline operation. Data checksums are enabled or disabled at the full cluster level, and cannot be specified individually for databases or tables.

The current state of checksums in the cluster can be verified by viewing the value of the read-only configuration variable [data_checksums](runtime-config-preset.html#GUC-DATA-CHECKSUMS) by issuing the command `SHOW data_checksums`.

When attempting to recover from page corruptions, it may be necessary to bypass the checksum protection. To do this, temporarily set the configuration parameter [ignore_checksum_failure](runtime-config-developer.html#GUC-IGNORE-CHECKSUM-FAILURE).

### 30.2.1. Off-line Enabling of Checksums #

The [pg_checksums](</VI. Reference/III. PostgreSQL Server Applications/app-pgchecksums.md>) application can be used to enable or disable data checksums, as well as verify checksums, on an offline cluster.


  
