---
title: dblink_disconnect
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    dblink_disconnect() returns text
    dblink_disconnect(text connname) returns text
    

## Description

`dblink_disconnect()` closes a connection previously opened by `dblink_connect()`. The form with no arguments closes an unnamed connection.

## Arguments

_`connname`_
    

The name of a named connection to be closed.

## Return Value

Returns status, which is always `OK` (since any error causes the function to throw an error instead of returning).

## Examples
    
    
    SELECT dblink_disconnect();
     dblink_disconnect
    -------------------
     OK
    (1 row)
    
    SELECT dblink_disconnect('myconn');
     dblink_disconnect
    -------------------
     OK
    (1 row)
    


  
