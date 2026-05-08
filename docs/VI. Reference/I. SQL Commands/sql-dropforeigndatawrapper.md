---
title: DROP FOREIGN DATA WRAPPER
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP FOREIGN DATA WRAPPER [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]
    

## Description

`DROP FOREIGN DATA WRAPPER` removes an existing foreign-data wrapper. To execute this command, the current user must be the owner of the foreign-data wrapper.

## Parameters

`IF EXISTS`
    

Do not throw an error if the foreign-data wrapper does not exist. A notice is issued in this case.

_`name`_
    

The name of an existing foreign-data wrapper.

`CASCADE`
    

Automatically drop objects that depend on the foreign-data wrapper (such as foreign tables and servers), and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the foreign-data wrapper if any objects depend on it. This is the default.

## Examples

Drop the foreign-data wrapper `dbi`:
    
    
    DROP FOREIGN DATA WRAPPER dbi;
    

## Compatibility

`DROP FOREIGN DATA WRAPPER` conforms to ISO/IEC 9075-9 (SQL/MED). The `IF EXISTS` clause is a PostgreSQL extension.

## See Also

[CREATE FOREIGN DATA WRAPPER](</VI. Reference/I. SQL Commands/sql-createforeigndatawrapper.md>)


  
