---
title: DECLARE STATEMENT
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


---  
  



## Synopsis
    
    
    EXEC SQL [ AT _connection_name_ ] DECLARE _statement_name_ STATEMENT
    

## Description

`DECLARE STATEMENT` declares an SQL statement identifier. SQL statement identifier can be associated with the connection. When the identifier is used by dynamic SQL statements, the statements are executed using the associated connection. The namespace of the declaration is the precompile unit, and multiple declarations to the same SQL statement identifier are not allowed. Note that if the precompiler runs in Informix compatibility mode and some SQL statement is declared, "database" can not be used as a cursor name.

## Parameters

_`connection_name`_ #
    

A database connection name established by the `CONNECT` command.

AT clause can be omitted, but such statement has no meaning.

_`statement_name`_ #
    

The name of an SQL statement identifier, either as an SQL identifier or a host variable.

## Notes

This association is valid only if the declaration is physically placed on top of a dynamic statement.

## Examples
    
    
    EXEC SQL CONNECT TO postgres AS con1;
    EXEC SQL AT con1 DECLARE sql_stmt STATEMENT;
    EXEC SQL DECLARE cursor_name CURSOR FOR sql_stmt;
    EXEC SQL PREPARE sql_stmt FROM :dyn_string;
    EXEC SQL OPEN cursor_name;
    EXEC SQL FETCH cursor_name INTO :column1;
    EXEC SQL CLOSE cursor_name;
    

## Compatibility

`DECLARE STATEMENT` is an extension of the SQL standard, but can be used in famous DBMSs.

## See Also

[CONNECT](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/36.14. Embedded SQL Commands/ecpg-sql-connect.md>)


  
