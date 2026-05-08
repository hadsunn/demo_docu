---
title: UNLISTEN
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    UNLISTEN { _channel_ | * }
    

## Description

`UNLISTEN` is used to remove an existing registration for `NOTIFY` events. `UNLISTEN` cancels any existing registration of the current PostgreSQL session as a listener on the notification channel named _`channel`_. The special wildcard `*` cancels all listener registrations for the current session.

[NOTIFY](</VI. Reference/I. SQL Commands/sql-notify.md>) contains a more extensive discussion of the use of `LISTEN` and `NOTIFY`.

## Parameters

_`channel`_
    

Name of a notification channel (any identifier).

`*`
    

All current listen registrations for this session are cleared.

## Notes

You can unlisten something you were not listening for; no warning or error will appear.

At the end of each session, `UNLISTEN *` is automatically executed.

A transaction that has executed `UNLISTEN` cannot be prepared for two-phase commit.

## Examples

To make a registration:
    
    
    LISTEN virtual;
    NOTIFY virtual;
    Asynchronous notification "virtual" received from server process with PID 8448.
    

Once `UNLISTEN` has been executed, further `NOTIFY` messages will be ignored:
    
    
    UNLISTEN virtual;
    NOTIFY virtual;
    -- no NOTIFY event is received
    

## Compatibility

There is no `UNLISTEN` command in the SQL standard.

## See Also

[LISTEN](</VI. Reference/I. SQL Commands/sql-listen.md>)


  
