---
title: DROP DATABASE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP DATABASE [ IF EXISTS ] _name_ [ [ WITH ] ( _option_ [, ...] ) ]
    
    where _option_ can be:
    
        FORCE
    

## Description

`DROP DATABASE` drops a database. It removes the catalog entries for the database and deletes the directory containing the data. It can only be executed by the database owner. It cannot be executed while you are connected to the target database. (Connect to `postgres` or any other database to issue this command.) Also, if anyone else is connected to the target database, this command will fail unless you use the `FORCE` option described below.

`DROP DATABASE` cannot be undone. Use it with care!

## Parameters

`IF EXISTS`
    

Do not throw an error if the database does not exist. A notice is issued in this case.

_`name`_
    

The name of the database to remove.

`FORCE`
    

Attempt to terminate all existing connections to the target database. It doesn't terminate if prepared transactions, active logical replication slots or subscriptions are present in the target database.

This terminates background worker connections and connections that the current user has permission to terminate with `pg_terminate_backend`, described in [Section 9.27.2](functions-admin.html#FUNCTIONS-ADMIN-SIGNAL "9.27.2. Server Signaling Functions"). If connections would remain, this command will fail.

## Notes

`DROP DATABASE` cannot be executed inside a transaction block.

This command cannot be executed while connected to the target database. Thus, it might be more convenient to use the program [dropdb](</VI. Reference/II. PostgreSQL Client Applications/app-dropdb.md>) instead, which is a wrapper around this command.

## Compatibility

There is no `DROP DATABASE` statement in the SQL standard.

## See Also

[CREATE DATABASE](</VI. Reference/I. SQL Commands/sql-createdatabase.md>)


  
