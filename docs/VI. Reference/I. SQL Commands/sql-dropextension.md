---
title: DROP EXTENSION
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP EXTENSION [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]
    

## Description

`DROP EXTENSION` removes extensions from the database. Dropping an extension causes its member objects, and other explicitly dependent routines (see [ALTER ROUTINE](</VI. Reference/I. SQL Commands/sql-alterroutine.md>), the `DEPENDS ON EXTENSION _`extension_name`_` action), to be dropped as well.

You must own the extension to use `DROP EXTENSION`.

## Parameters

`IF EXISTS`
    

Do not throw an error if the extension does not exist. A notice is issued in this case.

_`name`_
    

The name of an installed extension.

`CASCADE`
    

Automatically drop objects that depend on the extension, and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

This option prevents the specified extensions from being dropped if other objects, besides these extensions, their members, and their explicitly dependent routines, depend on them. This is the default.

## Examples

To remove the extension `hstore` from the current database:
    
    
    DROP EXTENSION hstore;
    

This command will fail if any of `hstore`'s objects are in use in the database, for example if any tables have columns of the `hstore` type. Add the `CASCADE` option to forcibly remove those dependent objects as well.

## Compatibility

`DROP EXTENSION` is a PostgreSQL extension.

## See Also

[CREATE EXTENSION](</VI. Reference/I. SQL Commands/sql-createextension.md>)


  
