---
title: 40.3. Writing Event Trigger Functions in C
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


This section describes the low-level details of the interface to an event trigger function. This information is only needed when writing event trigger functions in C. If you are using a higher-level language then these details are handled for you. In most cases you should consider using a procedural language before writing your event triggers in C. The documentation of each procedural language explains how to write an event trigger in that language.

Event trigger functions must use the “version 1” function manager interface.

When a function is called by the event trigger manager, it is not passed any normal arguments, but it is passed a “context” pointer pointing to a `EventTriggerData` structure. C functions can check whether they were called from the event trigger manager or not by executing the macro:
    
    
    CALLED_AS_EVENT_TRIGGER(fcinfo)
    

which expands to:
    
    
    ((fcinfo)->context != NULL && IsA((fcinfo)->context, EventTriggerData))
    

If this returns true, then it is safe to cast `fcinfo->context` to type `EventTriggerData *` and make use of the pointed-to `EventTriggerData` structure. The function must _not_ alter the `EventTriggerData` structure or any of the data it points to.

`struct EventTriggerData` is defined in `commands/event_trigger.h`:
    
    
    typedef struct EventTriggerData
    {
        NodeTag     type;
        const char *event;      /* event name */
        Node       *parsetree;  /* parse tree */
        CommandTag  tag;        /* command tag */
    } EventTriggerData;
    

where the members are defined as follows:

`type`
    

Always `T_EventTriggerData`.

`event`
    

Describes the event for which the function is called, one of `"ddl_command_start"`, `"ddl_command_end"`, `"sql_drop"`, `"table_rewrite"`. See [Section 40.1](</V. Server Programming/40. Event Triggers/event-trigger-definition.md>) for the meaning of these events.

`parsetree`
    

A pointer to the parse tree of the command. Check the PostgreSQL source code for details. The parse tree structure is subject to change without notice.

`tag`
    

The command tag associated with the event for which the event trigger is run, for example `"CREATE FUNCTION"`.

An event trigger function must return a `NULL` pointer (_not_ an SQL null value, that is, do not set _`isNull`_ true).


  
