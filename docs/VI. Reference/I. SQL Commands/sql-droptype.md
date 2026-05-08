---
title: DROP TYPE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP TYPE [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]
    

## Description

`DROP TYPE` removes a user-defined data type. Only the owner of a type can remove it.

## Parameters

`IF EXISTS`
    

Do not throw an error if the type does not exist. A notice is issued in this case.

_`name`_
    

The name (optionally schema-qualified) of the data type to remove.

`CASCADE`
    

Automatically drop objects that depend on the type (such as table columns, functions, and operators), and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the type if any objects depend on it. This is the default.

## Examples

To remove the data type `box`:
    
    
    DROP TYPE box;
    

## Compatibility

This command is similar to the corresponding command in the SQL standard, apart from the `IF EXISTS` option, which is a PostgreSQL extension. But note that much of the `CREATE TYPE` command and the data type extension mechanisms in PostgreSQL differ from the SQL standard.

## See Also

[ALTER TYPE](</VI. Reference/I. SQL Commands/sql-altertype.md>)


  
