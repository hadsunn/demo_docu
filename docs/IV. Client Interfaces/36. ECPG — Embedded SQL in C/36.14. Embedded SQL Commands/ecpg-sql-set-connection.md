---
title: SET CONNECTION
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    SET CONNECTION [ TO | = ] _connection_name_
    

## Description

`SET CONNECTION` sets the “current” database connection, which is the one that all commands use unless overridden.

## Parameters

_`connection_name`_ #
    

A database connection name established by the `CONNECT` command.

`CURRENT` #
    

Set the connection to the current connection (thus, nothing happens).

## Examples
    
    
    EXEC SQL SET CONNECTION TO con2;
    EXEC SQL SET CONNECTION = con1;
    

## Compatibility

`SET CONNECTION` is specified in the SQL standard.

## See Also

[CONNECT](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/36.14. Embedded SQL Commands/ecpg-sql-connect.md>)


  
