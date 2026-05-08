---
title: ROLLBACK PREPARED
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ROLLBACK PREPARED _transaction_id_
    

## Description

`ROLLBACK PREPARED` rolls back a transaction that is in prepared state.

## Parameters

_`transaction_id`_
    

The transaction identifier of the transaction that is to be rolled back.

## Notes

To roll back a prepared transaction, you must be either the same user that executed the transaction originally, or a superuser. But you do not have to be in the same session that executed the transaction.

This command cannot be executed inside a transaction block. The prepared transaction is rolled back immediately.

All currently available prepared transactions are listed in the [`pg_prepared_xacts`](</VII. Internals/54. System Views/view-pg-prepared-xacts.md>) system view.

## Examples

Roll back the transaction identified by the transaction identifier `foobar`:
    
    
    ROLLBACK PREPARED 'foobar';
    

## Compatibility

`ROLLBACK PREPARED` is a PostgreSQL extension. It is intended for use by external transaction management systems, some of which are covered by standards (such as X/Open XA), but the SQL side of those systems is not standardized.

## See Also

[PREPARE TRANSACTION](</VI. Reference/I. SQL Commands/sql-prepare-transaction.md>)


  
