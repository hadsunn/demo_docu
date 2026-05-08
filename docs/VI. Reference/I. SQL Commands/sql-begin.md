---
title: BEGIN
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    BEGIN [ WORK | TRANSACTION ] [ _transaction_mode_ [, ...] ]
    
    where _transaction_mode_ is one of:
    
        ISOLATION LEVEL { SERIALIZABLE | REPEATABLE READ | READ COMMITTED | READ UNCOMMITTED }
        READ WRITE | READ ONLY
        [ NOT ] DEFERRABLE
    

## Description

`BEGIN` initiates a transaction block, that is, all statements after a `BEGIN` command will be executed in a single transaction until an explicit [`COMMIT`](</VI. Reference/I. SQL Commands/sql-commit.md>) is given. By default (without `BEGIN`), PostgreSQL executes transactions in “autocommit” mode, that is, each statement is executed in its own transaction and a commit is implicitly performed at the end of the statement (if execution was successful, otherwise a rollback is done).

Statements are executed more quickly in a transaction block, because transaction start/commit requires significant CPU and disk activity. Execution of multiple statements inside a transaction is also useful to ensure consistency when making several related changes: other sessions will be unable to see the intermediate states wherein not all the related updates have been done.

If the isolation level, read/write mode, or deferrable mode is specified, the new transaction has those characteristics, as if [`SET TRANSACTION`](</VI. Reference/I. SQL Commands/sql-set-transaction.md>) was executed.

## Parameters

`WORK`  
`TRANSACTION`
    

Optional key words. They have no effect.

Refer to [SET TRANSACTION](</VI. Reference/I. SQL Commands/sql-set-transaction.md>) for information on the meaning of the other parameters to this statement.

## Notes

[`START TRANSACTION`](</VI. Reference/I. SQL Commands/sql-start-transaction.md>) has the same functionality as `BEGIN`.

Use [`COMMIT`](</VI. Reference/I. SQL Commands/sql-commit.md>) to terminate a transaction block.

Issuing `BEGIN` when already inside a transaction block will provoke a warning message. The state of the transaction is not affected. To nest transactions within a transaction block, use savepoints (see [SAVEPOINT](</VI. Reference/I. SQL Commands/sql-savepoint.md>)).

For reasons of backwards compatibility, the commas between successive _`transaction_modes`_ can be omitted.

## Examples

To begin a transaction block:
    
    
    BEGIN;
    

## Compatibility

`BEGIN` is a PostgreSQL language extension. It is equivalent to the SQL-standard command [`START TRANSACTION`](</VI. Reference/I. SQL Commands/sql-start-transaction.md>), whose reference page contains additional compatibility information.

The `DEFERRABLE` _`transaction_mode`_ is a PostgreSQL language extension.

Incidentally, the `BEGIN` key word is used for a different purpose in embedded SQL. You are advised to be careful about the transaction semantics when porting database applications.

## See Also

[COMMIT](</VI. Reference/I. SQL Commands/sql-commit.md>)


  
