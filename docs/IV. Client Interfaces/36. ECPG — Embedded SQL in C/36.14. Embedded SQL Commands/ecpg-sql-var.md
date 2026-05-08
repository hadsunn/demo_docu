---
title: VAR
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    VAR _varname_ IS _ctype_
    

## Description

The `VAR` command assigns a new C data type to a host variable. The host variable must be previously declared in a declare section.

## Parameters

_`varname`_ #
    

A C variable name.

_`ctype`_ #
    

A C type specification.

## Examples
    
    
    Exec sql begin declare section;
    short a;
    exec sql end declare section;
    EXEC SQL VAR a IS int;
    

## Compatibility

The `VAR` command is a PostgreSQL extension.


  
