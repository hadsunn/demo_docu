---
title: 54.16. `pg_prepared_xacts`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_prepared_xacts` displays information about transactions that are currently prepared for two-phase commit (see [PREPARE TRANSACTION](</VI. Reference/I. SQL Commands/sql-prepare-transaction.md>) for details).

`pg_prepared_xacts` contains one row per prepared transaction. An entry is removed when the transaction is committed or rolled back.

**Table  54.16. `pg_prepared_xacts` Columns**

Column Type Description  
---  
`transaction` `xid` Numeric transaction identifier of the prepared transaction  
`gid` `text` Global transaction identifier that was assigned to the transaction  
`prepared` `timestamptz` Time at which the transaction was prepared for commit  
`owner` `name` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`rolname`) Name of the user that executed the transaction  
`database` `name` (references [`pg_database`](</VII. Internals/53. System Catalogs/catalog-pg-database.md>).`datname`) Name of the database in which the transaction was executed  
  
  


When the `pg_prepared_xacts` view is accessed, the internal transaction manager data structures are momentarily locked, and a copy is made for the view to display. This ensures that the view produces a consistent set of results, while not blocking normal operations longer than necessary. Nonetheless there could be some impact on database performance if this view is frequently accessed.


  
