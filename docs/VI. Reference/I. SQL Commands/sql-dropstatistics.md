---
title: DROP STATISTICS
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP STATISTICS [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]
    

## Description

`DROP STATISTICS` removes statistics object(s) from the database. Only the statistics object's owner, the schema owner, or a superuser can drop a statistics object.

## Parameters

`IF EXISTS`
    

Do not throw an error if the statistics object does not exist. A notice is issued in this case.

_`name`_
    

The name (optionally schema-qualified) of the statistics object to drop.

`CASCADE`  
`RESTRICT`
    

These key words do not have any effect, since there are no dependencies on statistics.

## Examples

To destroy two statistics objects in different schemas, without failing if they don't exist:
    
    
    DROP STATISTICS IF EXISTS
        accounting.users_uid_creation,
        public.grants_user_role;
    

## Compatibility

There is no `DROP STATISTICS` command in the SQL standard.

## See Also

[ALTER STATISTICS](</VI. Reference/I. SQL Commands/sql-alterstatistics.md>)


  
