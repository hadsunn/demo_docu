---
title: DECLARE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DECLARE _cursor_name_ [ BINARY ] [ ASENSITIVE | INSENSITIVE ] [ [ NO ] SCROLL ] CURSOR [ { WITH | WITHOUT } HOLD ] FOR _prepared_name_
    DECLARE _cursor_name_ [ BINARY ] [ ASENSITIVE | INSENSITIVE ] [ [ NO ] SCROLL ] CURSOR [ { WITH | WITHOUT } HOLD ] FOR _query_
    

## Description

`DECLARE` declares a cursor for iterating over the result set of a prepared statement. This command has slightly different semantics from the direct SQL command `DECLARE`: Whereas the latter executes a query and prepares the result set for retrieval, this embedded SQL command merely declares a name as a “loop variable” for iterating over the result set of a query; the actual execution happens when the cursor is opened with the `OPEN` command.

## Parameters

_`cursor_name`_ #
    

A cursor name, case sensitive. This can be an SQL identifier or a host variable.

_`prepared_name`_ #
    

The name of a prepared query, either as an SQL identifier or a host variable.

_`query`_ #
    

A [SELECT](</VI. Reference/I. SQL Commands/sql-select.md>) command which will provide the rows to be returned by the cursor.

For the meaning of the cursor options, see [DECLARE](</VI. Reference/I. SQL Commands/sql-declare.md>).

## Examples

Examples declaring a cursor for a query:
    
    
    EXEC SQL DECLARE C CURSOR FOR SELECT * FROM My_Table;
    EXEC SQL DECLARE C CURSOR FOR SELECT Item1 FROM T;
    EXEC SQL DECLARE cur1 CURSOR FOR SELECT version();
    

An example declaring a cursor for a prepared statement:
    
    
    EXEC SQL PREPARE stmt1 AS SELECT version();
    EXEC SQL DECLARE cur1 CURSOR FOR stmt1;
    

## Compatibility

`DECLARE` is specified in the SQL standard.

## See Also

[OPEN](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/36.14. Embedded SQL Commands/ecpg-sql-open.md>)


  
