---
title: ALTER TEXT SEARCH TEMPLATE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER TEXT SEARCH TEMPLATE _name_ RENAME TO _new_name_
    ALTER TEXT SEARCH TEMPLATE _name_ SET SCHEMA _new_schema_
    

## Description

`ALTER TEXT SEARCH TEMPLATE` changes the definition of a text search template. Currently, the only supported functionality is to change the template's name.

You must be a superuser to use `ALTER TEXT SEARCH TEMPLATE`.

## Parameters

_`name`_
    

The name (optionally schema-qualified) of an existing text search template.

_`new_name`_
    

The new name of the text search template.

_`new_schema`_
    

The new schema for the text search template.

## Compatibility

There is no `ALTER TEXT SEARCH TEMPLATE` statement in the SQL standard.

## See Also

[CREATE TEXT SEARCH TEMPLATE](</VI. Reference/I. SQL Commands/sql-createtstemplate.md>)


  
