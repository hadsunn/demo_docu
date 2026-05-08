---
title: DISCONNECT
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DISCONNECT _connection_name_
    DISCONNECT [ CURRENT ]
    DISCONNECT ALL
    

## Description

`DISCONNECT` closes a connection (or all connections) to the database.

## Parameters

_`connection_name`_ #
    

A database connection name established by the `CONNECT` command.

`CURRENT` #
    

Close the “current” connection, which is either the most recently opened connection, or the connection set by the `SET CONNECTION` command. This is also the default if no argument is given to the `DISCONNECT` command.

`ALL` #
    

Close all open connections.

## Examples
    
    
    int
    main(void)
    {
        EXEC SQL CONNECT TO testdb AS con1 USER testuser;
        EXEC SQL CONNECT TO testdb AS con2 USER testuser;
        EXEC SQL CONNECT TO testdb AS con3 USER testuser;
    
        EXEC SQL DISCONNECT CURRENT;  /* close con3          */
        EXEC SQL DISCONNECT ALL;      /* close con2 and con1 */
    
        return 0;
    }
    

## Compatibility

`DISCONNECT` is specified in the SQL standard.

## See Also

[CONNECT](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/36.14. Embedded SQL Commands/ecpg-sql-connect.md>)


  
