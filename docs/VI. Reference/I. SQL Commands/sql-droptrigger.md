---
title: DROP TRIGGER
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP TRIGGER [ IF EXISTS ] _name_ ON _table_name_ [ CASCADE | RESTRICT ]
    

## Description

`DROP TRIGGER` removes an existing trigger definition. To execute this command, the current user must be the owner of the table for which the trigger is defined.

## Parameters

`IF EXISTS`
    

Do not throw an error if the trigger does not exist. A notice is issued in this case.

_`name`_
    

The name of the trigger to remove.

_`table_name`_
    

The name (optionally schema-qualified) of the table for which the trigger is defined.

`CASCADE`
    

Automatically drop objects that depend on the trigger, and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the trigger if any objects depend on it. This is the default.

## Examples

Destroy the trigger `if_dist_exists` on the table `films`:
    
    
    DROP TRIGGER if_dist_exists ON films;
    

## Compatibility

The `DROP TRIGGER` statement in PostgreSQL is incompatible with the SQL standard. In the SQL standard, trigger names are not local to tables, so the command is simply `DROP TRIGGER _`name`_`.

## See Also

[CREATE TRIGGER](</VI. Reference/I. SQL Commands/sql-createtrigger.md>)


  
