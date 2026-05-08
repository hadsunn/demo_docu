---
title: CREATE EVENT TRIGGER
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    CREATE EVENT TRIGGER _name_
        ON _event_
        [ WHEN _filter_variable_ IN (_filter_value_ [, ... ]) [ AND ... ] ]
        EXECUTE { FUNCTION | PROCEDURE } _function_name_()
    

## Description

`CREATE EVENT TRIGGER` creates a new event trigger. Whenever the designated event occurs and the `WHEN` condition associated with the trigger, if any, is satisfied, the trigger function will be executed. For a general introduction to event triggers, see [Chapter 40](</V. Server Programming/40. Event Triggers/40. Event Triggers.md>). The user who creates an event trigger becomes its owner.

## Parameters

_`name`_
    

The name to give the new trigger. This name must be unique within the database.

_`event`_
    

The name of the event that triggers a call to the given function. See [Section 40.1](</V. Server Programming/40. Event Triggers/event-trigger-definition.md>) for more information on event names.

_`filter_variable`_
    

The name of a variable used to filter events. This makes it possible to restrict the firing of the trigger to a subset of the cases in which it is supported. Currently the only supported _`filter_variable`_ is `TAG`.

_`filter_value`_
    

A list of values for the associated _`filter_variable`_ for which the trigger should fire. For `TAG`, this means a list of command tags (e.g., `'DROP FUNCTION'`).

_`function_name`_
    

A user-supplied function that is declared as taking no argument and returning type `event_trigger`.

In the syntax of `CREATE EVENT TRIGGER`, the keywords `FUNCTION` and `PROCEDURE` are equivalent, but the referenced function must in any case be a function, not a procedure. The use of the keyword `PROCEDURE` here is historical and deprecated.

## Notes

Only superusers can create event triggers.

Event triggers are disabled in single-user mode (see [postgres](</VI. Reference/III. PostgreSQL Server Applications/app-postgres.md>)). If an erroneous event trigger disables the database so much that you can't even drop the trigger, restart in single-user mode and you'll be able to do that.

## Examples

Forbid the execution of any [DDL](</II. The SQL Language/5. Data Definition/5. Data Definition.md>) command:
    
    
    CREATE OR REPLACE FUNCTION abort_any_command()
      RETURNS event_trigger
     LANGUAGE plpgsql
      AS $$
    BEGIN
      RAISE EXCEPTION 'command % is disabled', tg_tag;
    END;
    $$;
    
    CREATE EVENT TRIGGER abort_ddl ON ddl_command_start
       EXECUTE FUNCTION abort_any_command();
    

## Compatibility

There is no `CREATE EVENT TRIGGER` statement in the SQL standard.

## See Also

[ALTER EVENT TRIGGER](</VI. Reference/I. SQL Commands/sql-altereventtrigger.md>)


  
