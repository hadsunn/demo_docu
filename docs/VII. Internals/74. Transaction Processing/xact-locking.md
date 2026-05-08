---
title: 74.2. Transactions and Locking
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


---  
  


The transaction IDs of currently executing transactions are shown in [`pg_locks`](</VII. Internals/54. System Views/view-pg-locks.md>) in columns `virtualxid` and `transactionid`. Read-only transactions will have `virtualxid`s but NULL `transactionid`s, while both columns will be set in read-write transactions.

Some lock types wait on `virtualxid`, while other types wait on `transactionid`. Row-level read and write locks are recorded directly in the locked rows and can be inspected using the [pgrowlocks](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/pgrowlocks.md>)).


  
