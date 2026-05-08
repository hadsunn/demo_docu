---
title: RELEASE SAVEPOINT
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    RELEASE [ SAVEPOINT ] _savepoint_name_
    

## Description

`RELEASE SAVEPOINT` releases the named savepoint and all active savepoints that were created after the named savepoint, and frees their resources. All changes made since the creation of the savepoint that didn't already get rolled back are merged into the transaction or savepoint that was active when the named savepoint was created. Changes made after `RELEASE SAVEPOINT` will also be part of this active transaction or savepoint.

## Parameters

_`savepoint_name`_
    

The name of the savepoint to release.

## Notes

Specifying a savepoint name that was not previously defined is an error.

It is not possible to release a savepoint when the transaction is in an aborted state; to do that, use [ROLLBACK TO SAVEPOINT](</VI. Reference/I. SQL Commands/sql-rollback-to.md>).

If multiple savepoints have the same name, only the most recently defined unreleased one is released. Repeated commands will release progressively older savepoints.

## Examples

To establish and later release a savepoint:
    
    
    BEGIN;
        INSERT INTO table1 VALUES (3);
        SAVEPOINT my_savepoint;
        INSERT INTO table1 VALUES (4);
        RELEASE SAVEPOINT my_savepoint;
    COMMIT;
    

The above transaction will insert both 3 and 4.

A more complex example with multiple nested subtransactions:
    
    
    BEGIN;
        INSERT INTO table1 VALUES (1);
        SAVEPOINT sp1;
        INSERT INTO table1 VALUES (2);
        SAVEPOINT sp2;
        INSERT INTO table1 VALUES (3);
        RELEASE SAVEPOINT sp2;
        INSERT INTO table1 VALUES (4))); -- generates an error
    

In this example, the application requests the release of the savepoint `sp2`, which inserted 3. This changes the insert's transaction context to `sp1`. When the statement attempting to insert value 4 generates an error, the insertion of 2 and 4 are lost because they are in the same, now-rolled back savepoint, and value 3 is in the same transaction context. The application can now only choose one of these two commands, since all other commands will be ignored:
    
    
       ROLLBACK;
       ROLLBACK TO SAVEPOINT sp1;
    

Choosing `ROLLBACK` will abort everything, including value 1, whereas `ROLLBACK TO SAVEPOINT sp1` will retain value 1 and allow the transaction to continue.

## Compatibility

This command conforms to the SQL standard. The standard specifies that the key word `SAVEPOINT` is mandatory, but PostgreSQL allows it to be omitted.

## See Also

[BEGIN](</VI. Reference/I. SQL Commands/sql-begin.md>)


  
