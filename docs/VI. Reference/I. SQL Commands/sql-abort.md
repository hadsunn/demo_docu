---
title: ABORT
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ABORT [ WORK | TRANSACTION ] [ AND [ NO ] CHAIN ]
    

## Description

`ABORT` rolls back the current transaction and causes all the updates made by the transaction to be discarded. This command is identical in behavior to the standard SQL command [`ROLLBACK`](</VI. Reference/I. SQL Commands/sql-rollback.md>), and is present only for historical reasons.

## Parameters

`WORK`  
`TRANSACTION`
    

Optional key words. They have no effect.

`AND CHAIN`
    

If `AND CHAIN` is specified, a new transaction is immediately started with the same transaction characteristics (see [`SET TRANSACTION`](</VI. Reference/I. SQL Commands/sql-set-transaction.md>)) as the just finished one. Otherwise, no new transaction is started.

## Notes

Use [`COMMIT`](</VI. Reference/I. SQL Commands/sql-commit.md>) to successfully terminate a transaction.

Issuing `ABORT` outside of a transaction block emits a warning and otherwise has no effect.

## Examples

To abort all changes:
    
    
    ABORT;
    

## Compatibility

This command is a PostgreSQL extension present for historical reasons. `ROLLBACK` is the equivalent standard SQL command.

## See Also

[BEGIN](</VI. Reference/I. SQL Commands/sql-begin.md>)


  
