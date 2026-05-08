---
title: DROP VIEW
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP VIEW [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]
    

## Description

`DROP VIEW` drops an existing view. To execute this command you must be the owner of the view.

## Parameters

`IF EXISTS`
    

Do not throw an error if the view does not exist. A notice is issued in this case.

_`name`_
    

The name (optionally schema-qualified) of the view to remove.

`CASCADE`
    

Automatically drop objects that depend on the view (such as other views), and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the view if any objects depend on it. This is the default.

## Examples

This command will remove the view called `kinds`:
    
    
    DROP VIEW kinds;
    

## Compatibility

This command conforms to the SQL standard, except that the standard only allows one view to be dropped per command, and apart from the `IF EXISTS` option, which is a PostgreSQL extension.

## See Also

[ALTER VIEW](</VI. Reference/I. SQL Commands/sql-alterview.md>)


  
