---
title: DROP EVENT TRIGGER
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP EVENT TRIGGER [ IF EXISTS ] _name_ [ CASCADE | RESTRICT ]
    

## Description

`DROP EVENT TRIGGER` removes an existing event trigger. To execute this command, the current user must be the owner of the event trigger.

## Parameters

`IF EXISTS`
    

Do not throw an error if the event trigger does not exist. A notice is issued in this case.

_`name`_
    

The name of the event trigger to remove.

`CASCADE`
    

Automatically drop objects that depend on the trigger, and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the trigger if any objects depend on it. This is the default.

## Examples

Destroy the trigger `snitch`:
    
    
    DROP EVENT TRIGGER snitch;
    

## Compatibility

There is no `DROP EVENT TRIGGER` statement in the SQL standard.

## See Also

[CREATE EVENT TRIGGER](</VI. Reference/I. SQL Commands/sql-createeventtrigger.md>)


  
