---
title: ALTER STATISTICS
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER STATISTICS _name_ OWNER TO { _new_owner_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    ALTER STATISTICS _name_ RENAME TO _new_name_
    ALTER STATISTICS _name_ SET SCHEMA _new_schema_
    ALTER STATISTICS _name_ SET STATISTICS _new_target_
    

## Description

`ALTER STATISTICS` changes the parameters of an existing extended statistics object. Any parameters not specifically set in the `ALTER STATISTICS` command retain their prior settings.

You must own the statistics object to use `ALTER STATISTICS`. To change a statistics object's schema, you must also have `CREATE` privilege on the new schema. To alter the owner, you must be able to `SET ROLE` to the new owning role, and that role must have `CREATE` privilege on the statistics object's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the statistics object. However, a superuser can alter ownership of any statistics object anyway.)

## Parameters

_`name`_
    

The name (optionally schema-qualified) of the statistics object to be altered.

_`new_owner`_
    

The user name of the new owner of the statistics object.

_`new_name`_
    

The new name for the statistics object.

_`new_schema`_
    

The new schema for the statistics object.

_`new_target`_
    

The statistic-gathering target for this statistics object for subsequent [`ANALYZE`](</VI. Reference/I. SQL Commands/sql-analyze.md>).

## Compatibility

There is no `ALTER STATISTICS` command in the SQL standard.

## See Also

[CREATE STATISTICS](</VI. Reference/I. SQL Commands/sql-createstatistics.md>)


  
