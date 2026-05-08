---
title: OPEN
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    OPEN _cursor_name_
    OPEN _cursor_name_ USING _value_ [, ... ]
    OPEN _cursor_name_ USING SQL DESCRIPTOR _descriptor_name_
    

## Description

`OPEN` opens a cursor and optionally binds actual values to the placeholders in the cursor's declaration. The cursor must previously have been declared with the `DECLARE` command. The execution of `OPEN` causes the query to start executing on the server.

## Parameters

_`cursor_name`_ #
    

The name of the cursor to be opened. This can be an SQL identifier or a host variable.

_`value`_ #
    

A value to be bound to a placeholder in the cursor. This can be an SQL constant, a host variable, or a host variable with indicator.

_`descriptor_name`_ #
    

The name of a descriptor containing values to be bound to the placeholders in the cursor. This can be an SQL identifier or a host variable.

## Examples
    
    
    EXEC SQL OPEN a;
    EXEC SQL OPEN d USING 1, 'test';
    EXEC SQL OPEN c1 USING SQL DESCRIPTOR mydesc;
    EXEC SQL OPEN :curname1;
    

## Compatibility

`OPEN` is specified in the SQL standard.

## See Also

[DECLARE](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/36.14. Embedded SQL Commands/ecpg-sql-declare.md>)


  
