---
title: DESCRIBE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DESCRIBE [ OUTPUT ] _prepared_name_ USING [ SQL ] DESCRIPTOR _descriptor_name_
    DESCRIBE [ OUTPUT ] _prepared_name_ INTO [ SQL ] DESCRIPTOR _descriptor_name_
    DESCRIBE [ OUTPUT ] _prepared_name_ INTO _sqlda_name_
    

## Description

`DESCRIBE` retrieves metadata information about the result columns contained in a prepared statement, without actually fetching a row.

## Parameters

_`prepared_name`_ #
    

The name of a prepared statement. This can be an SQL identifier or a host variable.

_`descriptor_name`_ #
    

A descriptor name. It is case sensitive. It can be an SQL identifier or a host variable.

_`sqlda_name`_ #
    

The name of an SQLDA variable.

## Examples
    
    
    EXEC SQL ALLOCATE DESCRIPTOR mydesc;
    EXEC SQL PREPARE stmt1 FROM :sql_stmt;
    EXEC SQL DESCRIBE stmt1 INTO SQL DESCRIPTOR mydesc;
    EXEC SQL GET DESCRIPTOR mydesc VALUE 1 :charvar = NAME;
    EXEC SQL DEALLOCATE DESCRIPTOR mydesc;
    

## Compatibility

`DESCRIBE` is specified in the SQL standard.

## See Also

[ALLOCATE DESCRIPTOR](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/36.14. Embedded SQL Commands/ecpg-sql-allocate-descriptor.md>)


  
