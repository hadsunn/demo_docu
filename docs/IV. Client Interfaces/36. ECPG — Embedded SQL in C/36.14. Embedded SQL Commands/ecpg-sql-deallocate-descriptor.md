---
title: DEALLOCATE DESCRIPTOR
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DEALLOCATE DESCRIPTOR _name_
    

## Description

`DEALLOCATE DESCRIPTOR` deallocates a named SQL descriptor area.

## Parameters

_`name`_ #
    

The name of the descriptor which is going to be deallocated. It is case sensitive. This can be an SQL identifier or a host variable.

## Examples
    
    
    EXEC SQL DEALLOCATE DESCRIPTOR mydesc;
    

## Compatibility

`DEALLOCATE DESCRIPTOR` is specified in the SQL standard.

## See Also

[ALLOCATE DESCRIPTOR](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/36.14. Embedded SQL Commands/ecpg-sql-allocate-descriptor.md>)


  
