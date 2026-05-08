---
title: START TRANSACTION
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    START TRANSACTION [ _transaction_mode_ [, ...] ]
    
    where _transaction_mode_ is one of:
    
        ISOLATION LEVEL { SERIALIZABLE | REPEATABLE READ | READ COMMITTED | READ UNCOMMITTED }
        READ WRITE | READ ONLY
        [ NOT ] DEFERRABLE
    

## Description

This command begins a new transaction block. If the isolation level, read/write mode, or deferrable mode is specified, the new transaction has those characteristics, as if [`SET TRANSACTION`](</VI. Reference/I. SQL Commands/sql-set-transaction.md>) command.

## Parameters

Refer to [SET TRANSACTION](</VI. Reference/I. SQL Commands/sql-set-transaction.md>) for information on the meaning of the parameters to this statement.

## Compatibility

In the standard, it is not necessary to issue `START TRANSACTION` to start a transaction block: any SQL command implicitly begins a block. PostgreSQL's behavior can be seen as implicitly issuing a `COMMIT` after each command that does not follow `START TRANSACTION` (or `BEGIN`), and it is therefore often called “autocommit”. Other relational database systems might offer an autocommit feature as a convenience.

The `DEFERRABLE` _`transaction_mode`_ is a PostgreSQL language extension.

The SQL standard requires commas between successive _`transaction_modes`_ , but for historical reasons PostgreSQL allows the commas to be omitted.

See also the compatibility section of [SET TRANSACTION](</VI. Reference/I. SQL Commands/sql-set-transaction.md>).

## See Also

[BEGIN](</VI. Reference/I. SQL Commands/sql-begin.md>)


  
