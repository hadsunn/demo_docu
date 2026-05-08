---
title: DROP TEXT SEARCH TEMPLATE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP TEXT SEARCH TEMPLATE [ IF EXISTS ] _name_ [ CASCADE | RESTRICT ]
    

## Description

`DROP TEXT SEARCH TEMPLATE` drops an existing text search template. You must be a superuser to use this command.

## Parameters

`IF EXISTS`
    

Do not throw an error if the text search template does not exist. A notice is issued in this case.

_`name`_
    

The name (optionally schema-qualified) of an existing text search template.

`CASCADE`
    

Automatically drop objects that depend on the text search template, and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the text search template if any objects depend on it. This is the default.

## Examples

Remove the text search template `thesaurus`:
    
    
    DROP TEXT SEARCH TEMPLATE thesaurus;
    

This command will not succeed if there are any existing text search dictionaries that use the template. Add `CASCADE` to drop such dictionaries along with the template.

## Compatibility

There is no `DROP TEXT SEARCH TEMPLATE` statement in the SQL standard.

## See Also

[ALTER TEXT SEARCH TEMPLATE](</VI. Reference/I. SQL Commands/sql-altertstemplate.md>)


  
