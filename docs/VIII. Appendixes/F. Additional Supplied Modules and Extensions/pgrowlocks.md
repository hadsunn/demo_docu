---
title: F.31. pgrowlocks — show a table's row locking information
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[F.31.1. Overview](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/pgrowlocks.md#f311-overview>)


[F.31.2. Sample Output](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/pgrowlocks.md#f312-sample-output>)


[F.31.3. Author](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/pgrowlocks.md#f313-author>)



The `pgrowlocks` module provides a function to show row locking information for a specified table.

By default use is restricted to superusers, roles with privileges of the `pg_stat_scan_tables` role, and users with `SELECT` permissions on the table.

### F.31.1. Overview #
    
    
    pgrowlocks(text) returns setof record
    

The parameter is the name of a table. The result is a set of records, with one row for each locked row within the table. The output columns are shown in [Table F.21](pgrowlocks.html#PGROWLOCKS-COLUMNS "Table F.21. pgrowlocks Output Columns").

**Table  F.21. `pgrowlocks` Output Columns**

Name | Type | Description  
`locked_row` | `tid` | Tuple ID (TID) of locked row  
`locker` | `xid` | Transaction ID of locker, or multixact ID if multitransaction; see [Section 74.1](</VII. Internals/74. Transaction Processing/transaction-id.md>)  
`multi` | `boolean` | True if locker is a multitransaction  
`xids` | `xid[]` | Transaction IDs of lockers (more than one if multitransaction)  
`modes` | `text[]` | Lock mode of lockers (more than one if multitransaction), an array of `Key Share`, `Share`, `For No Key Update`, `No Key Update`, `For Update`, `Update`.  
`pids` | `integer[]` | Process IDs of locking backends (more than one if multitransaction)  
  
  


`pgrowlocks` takes `AccessShareLock` for the target table and reads each row one by one to collect the row locking information. This is not very speedy for a large table. Note that:

  1. If an `ACCESS EXCLUSIVE` lock is taken on the table, `pgrowlocks` will be blocked.

  2. `pgrowlocks` is not guaranteed to produce a self-consistent snapshot. It is possible that a new row lock is taken, or an old lock is freed, during its execution.




`pgrowlocks` does not show the contents of locked rows. If you want to take a look at the row contents at the same time, you could do something like this:
    
    
    SELECT * FROM accounts AS a, pgrowlocks('accounts') AS p
      WHERE p.locked_row = a.ctid;
    

Be aware however that such a query will be very inefficient.

### F.31.2. Sample Output #
    
    
    =# SELECT * FROM pgrowlocks('t1');
     locked_row | locker | multi | xids  |     modes      |  pids
    ------------+--------+-------+-------+----------------+--------
     (0,1)      |    609 | f     | {609} | {"For Share"}  | {3161}
     (0,2)      |    609 | f     | {609} | {"For Share"}  | {3161}
     (0,3)      |    607 | f     | {607} | {"For Update"} | {3107}
     (0,4)      |    607 | f     | {607} | {"For Update"} | {3107}
    (4 rows)
    

### F.31.3. Author #

Tatsuo Ishii


  
