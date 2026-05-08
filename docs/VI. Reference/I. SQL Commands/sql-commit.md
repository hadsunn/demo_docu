---
title: COMMIT
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    COMMIT [ WORK | TRANSACTION ] [ AND [ NO ] CHAIN ]
    

## Description

`COMMIT` commits the current transaction. All changes made by the transaction become visible to others and are guaranteed to be durable if a crash occurs.

## Parameters

`WORK`  
`TRANSACTION` #
    

Optional key words. They have no effect.

`AND CHAIN` #
    

If `AND CHAIN` is specified, a new transaction is immediately started with the same transaction characteristics (see [SET TRANSACTION](</VI. Reference/I. SQL Commands/sql-set-transaction.md>)) as the just finished one. Otherwise, no new transaction is started.

## Notes

Use [ROLLBACK](</VI. Reference/I. SQL Commands/sql-rollback.md>) to abort a transaction.

Issuing `COMMIT` when not inside a transaction does no harm, but it will provoke a warning message. `COMMIT AND CHAIN` when not inside a transaction is an error.

## Examples

To commit the current transaction and make all changes permanent:
    
    
    COMMIT;
    

## Compatibility

The command `COMMIT` conforms to the SQL standard. The form `COMMIT TRANSACTION` is a PostgreSQL extension.

## See Also

[BEGIN](</VI. Reference/I. SQL Commands/sql-begin.md>)


  
