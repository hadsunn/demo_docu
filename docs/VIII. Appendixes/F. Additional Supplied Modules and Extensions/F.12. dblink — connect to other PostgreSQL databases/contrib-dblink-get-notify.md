---
title: dblink_get_notify
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    dblink_get_notify() returns setof (notify_name text, be_pid int, extra text)
    dblink_get_notify(text connname) returns setof (notify_name text, be_pid int, extra text)
    

## Description

`dblink_get_notify` retrieves notifications on either the unnamed connection, or on a named connection if specified. To receive notifications via dblink, `LISTEN` must first be issued, using `dblink_exec`. For details see [LISTEN](</VI. Reference/I. SQL Commands/sql-listen.md>).

## Arguments

_`connname`_
    

The name of a named connection to get notifications on.

## Return Value

Returns `setof (notify_name text, be_pid int, extra text)`, or an empty set if none.

## Examples
    
    
    SELECT dblink_exec('LISTEN virtual');
     dblink_exec
    -------------
     LISTEN
    (1 row)
    
    SELECT * FROM dblink_get_notify();
     notify_name | be_pid | extra
    -------------+--------+-------
    (0 rows)
    
    NOTIFY virtual;
    NOTIFY
    
    SELECT * FROM dblink_get_notify();
     notify_name | be_pid | extra
    -------------+--------+-------
     virtual     |   1229 |
    (1 row)
    


  
