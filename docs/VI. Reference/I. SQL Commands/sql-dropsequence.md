---
title: DROP SEQUENCE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP SEQUENCE [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]
    

## Description

`DROP SEQUENCE` removes sequence number generators. A sequence can only be dropped by its owner or a superuser.

## Parameters

`IF EXISTS`
    

Do not throw an error if the sequence does not exist. A notice is issued in this case.

_`name`_
    

The name (optionally schema-qualified) of a sequence.

`CASCADE`
    

Automatically drop objects that depend on the sequence, and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the sequence if any objects depend on it. This is the default.

## Examples

To remove the sequence `serial`:
    
    
    DROP SEQUENCE serial;
    

## Compatibility

`DROP SEQUENCE` conforms to the SQL standard, except that the standard only allows one sequence to be dropped per command, and apart from the `IF EXISTS` option, which is a PostgreSQL extension.

## See Also

[CREATE SEQUENCE](</VI. Reference/I. SQL Commands/sql-createsequence.md>)


  
