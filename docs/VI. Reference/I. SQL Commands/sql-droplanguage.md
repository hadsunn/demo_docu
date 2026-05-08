---
title: DROP LANGUAGE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP [ PROCEDURAL ] LANGUAGE [ IF EXISTS ] _name_ [ CASCADE | RESTRICT ]
    

## Description

`DROP LANGUAGE` removes the definition of a previously registered procedural language. You must be a superuser or the owner of the language to use `DROP LANGUAGE`.

### Note

As of PostgreSQL 9.1, most procedural languages have been made into “extensions”, and should therefore be removed with [`DROP EXTENSION`](</VI. Reference/I. SQL Commands/sql-dropextension.md>) not `DROP LANGUAGE`.

## Parameters

`IF EXISTS`
    

Do not throw an error if the language does not exist. A notice is issued in this case.

_`name`_
    

The name of an existing procedural language.

`CASCADE`
    

Automatically drop objects that depend on the language (such as functions in the language), and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the language if any objects depend on it. This is the default.

## Examples

This command removes the procedural language `plsample`:
    
    
    DROP LANGUAGE plsample;
    

## Compatibility

There is no `DROP LANGUAGE` statement in the SQL standard.

## See Also

[ALTER LANGUAGE](</VI. Reference/I. SQL Commands/sql-alterlanguage.md>)


  
