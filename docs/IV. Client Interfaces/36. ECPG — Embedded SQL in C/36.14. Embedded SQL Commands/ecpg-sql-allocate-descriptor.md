---
title: ALLOCATE DESCRIPTOR
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALLOCATE DESCRIPTOR _name_
    

## Description

`ALLOCATE DESCRIPTOR` allocates a new named SQL descriptor area, which can be used to exchange data between the PostgreSQL server and the host program.

Descriptor areas should be freed after use using the `DEALLOCATE DESCRIPTOR` command.

## Parameters

_`name`_ #
    

A name of SQL descriptor, case sensitive. This can be an SQL identifier or a host variable.

## Examples
    
    
    EXEC SQL ALLOCATE DESCRIPTOR mydesc;
    

## Compatibility

`ALLOCATE DESCRIPTOR` is specified in the SQL standard.

## See Also

[DEALLOCATE DESCRIPTOR](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/36.14. Embedded SQL Commands/ecpg-sql-deallocate-descriptor.md>)


  
