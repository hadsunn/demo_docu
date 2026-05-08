---
title: LOAD
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    LOAD '_filename_ '
    

## Description

This command loads a shared library file into the PostgreSQL server's address space. If the file has been loaded already, the command does nothing. Shared library files that contain C functions are automatically loaded whenever one of their functions is called. Therefore, an explicit `LOAD` is usually only needed to load a library that modifies the server's behavior through “hooks” rather than providing a set of functions.

The library file name is typically given as just a bare file name, which is sought in the server's library search path (set by [dynamic_library_path](runtime-config-client.html#GUC-DYNAMIC-LIBRARY-PATH)). Alternatively it can be given as a full path name. In either case the platform's standard shared library file name extension may be omitted. See [Section 38.10.1](xfunc-c.html#XFUNC-C-DYNLOAD "38.10.1. Dynamic Loading") for more information on this topic.

Non-superusers can only apply `LOAD` to library files located in `$libdir/plugins/` — the specified _`filename`_ must begin with exactly that string. (It is the database administrator's responsibility to ensure that only “safe” libraries are installed there.)

## Compatibility

`LOAD` is a PostgreSQL extension.

## See Also

[CREATE FUNCTION](</VI. Reference/I. SQL Commands/sql-createfunction.md>)


  
