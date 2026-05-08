---
title: 49.8. Synchronous Replication Support for Logical Decoding
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[49.8.1. Overview](</V. Server Programming/49. Logical Decoding/logicaldecoding-synchronous.md#4981-overview>)


[49.8.2. Caveats](</V. Server Programming/49. Logical Decoding/logicaldecoding-synchronous.md#4982-caveats>)



### 49.8.1. Overview #

Logical decoding can be used to build [synchronous replication](<warm-standby#SYNCHRONOUS-REPLICATION>)) messages, just like streaming replication clients do.

### Note

A synchronous replica receiving changes via logical decoding will work in the scope of a single database. Since, in contrast to that, _`synchronous_standby_names`_ currently is server wide, this means this technique will not work properly if more than one database is actively used.

### 49.8.2. Caveats #

In synchronous replication setup, a deadlock can happen, if the transaction has locked [user] catalog tables exclusively. See [Section 49.6.2](logicaldecoding-output-plugin.html#LOGICALDECODING-CAPABILITIES "49.6.2. Capabilities") for information on user catalog tables. This is because logical decoding of transactions can lock catalog tables to access them. To avoid this users must refrain from taking an exclusive lock on [user] catalog tables. This can happen in the following ways:

  * Issuing an explicit `LOCK` on `pg_class` in a transaction.

  * Perform `CLUSTER` on `pg_class` in a transaction.

  * `PREPARE TRANSACTION` after `LOCK` command on `pg_class` and allow logical decoding of two-phase transactions.

  * `PREPARE TRANSACTION` after `CLUSTER` command on `pg_trigger` and allow logical decoding of two-phase transactions. This will lead to deadlock only when published table have a trigger.

  * Executing `TRUNCATE` on [user] catalog table in a transaction.




Note that these commands that can cause deadlock apply to not only explicitly indicated system catalog tables above but also to any other [user] catalog table.


  
