---
title: DROP TEXT SEARCH DICTIONARY
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP TEXT SEARCH DICTIONARY [ IF EXISTS ] _name_ [ CASCADE | RESTRICT ]
    

## Description

`DROP TEXT SEARCH DICTIONARY` drops an existing text search dictionary. To execute this command you must be the owner of the dictionary.

## Parameters

`IF EXISTS`
    

Do not throw an error if the text search dictionary does not exist. A notice is issued in this case.

_`name`_
    

The name (optionally schema-qualified) of an existing text search dictionary.

`CASCADE`
    

Automatically drop objects that depend on the text search dictionary, and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the text search dictionary if any objects depend on it. This is the default.

## Examples

Remove the text search dictionary `english`:
    
    
    DROP TEXT SEARCH DICTIONARY english;
    

This command will not succeed if there are any existing text search configurations that use the dictionary. Add `CASCADE` to drop such configurations along with the dictionary.

## Compatibility

There is no `DROP TEXT SEARCH DICTIONARY` statement in the SQL standard.

## See Also

[ALTER TEXT SEARCH DICTIONARY](</VI. Reference/I. SQL Commands/sql-altertsdictionary.md>)


  
