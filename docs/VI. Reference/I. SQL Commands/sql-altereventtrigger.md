---
title: ALTER EVENT TRIGGER
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER EVENT TRIGGER _name_ DISABLE
    ALTER EVENT TRIGGER _name_ ENABLE [ REPLICA | ALWAYS ]
    ALTER EVENT TRIGGER _name_ OWNER TO { _new_owner_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    ALTER EVENT TRIGGER _name_ RENAME TO _new_name_
    

## Description

`ALTER EVENT TRIGGER` changes properties of an existing event trigger.

You must be superuser to alter an event trigger.

## Parameters

_`name`_
    

The name of an existing trigger to alter.

_`new_owner`_
    

The user name of the new owner of the event trigger.

_`new_name`_
    

The new name of the event trigger.

`DISABLE`/`ENABLE [ REPLICA | ALWAYS ]`
    

These forms configure the firing of event triggers. A disabled trigger is still known to the system, but is not executed when its triggering event occurs. See also [session_replication_role](runtime-config-client.html#GUC-SESSION-REPLICATION-ROLE).

## Compatibility

There is no `ALTER EVENT TRIGGER` statement in the SQL standard.

## See Also

[CREATE EVENT TRIGGER](</VI. Reference/I. SQL Commands/sql-createeventtrigger.md>)


  
