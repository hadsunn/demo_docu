---
title: DROP COLLATION
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP COLLATION [ IF EXISTS ] _name_ [ CASCADE | RESTRICT ]
    

## Description

`DROP COLLATION` removes a previously defined collation. To be able to drop a collation, you must own the collation.

## Parameters

`IF EXISTS`
    

Do not throw an error if the collation does not exist. A notice is issued in this case.

_`name`_
    

The name of the collation. The collation name can be schema-qualified.

`CASCADE`
    

Automatically drop objects that depend on the collation, and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the collation if any objects depend on it. This is the default.

## Examples

To drop the collation named `german`:
    
    
    DROP COLLATION german;
    

## Compatibility

The `DROP COLLATION` command conforms to the SQL standard, apart from the `IF EXISTS` option, which is a PostgreSQL extension.

## See Also

[ALTER COLLATION](</VI. Reference/I. SQL Commands/sql-altercollation.md>)


  
