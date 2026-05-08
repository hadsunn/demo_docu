---
title: 44.10. Transaction Management
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


In a procedure called from the top level or an anonymous code block (`DO` command) called from the top level it is possible to control transactions. To commit the current transaction, call the `commit` command. To roll back the current transaction, call the `rollback` command. (Note that it is not possible to run the SQL commands `COMMIT` or `ROLLBACK` via `spi_exec` or similar. It has to be done using these functions.) After a transaction is ended, a new transaction is automatically started, so there is no separate command for that.

Here is an example:
    
    
    CREATE PROCEDURE transaction_test1()
    LANGUAGE pltcl
    AS $$
    for {set i 0} {$i < 10} {incr i} {
        spi_exec "INSERT INTO test1 (a) VALUES ($i)"
        if {$i % 2 == 0} {
            commit
        } else {
            rollback
        }
    }
    $$;
    
    CALL transaction_test1();
    

Transactions cannot be ended when an explicit subtransaction is active.


  
