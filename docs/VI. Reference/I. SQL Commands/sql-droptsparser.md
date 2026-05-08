---
title: DROP TEXT SEARCH PARSER
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP TEXT SEARCH PARSER [ IF EXISTS ] _name_ [ CASCADE | RESTRICT ]
    

## Description

`DROP TEXT SEARCH PARSER` drops an existing text search parser. You must be a superuser to use this command.

## Parameters

`IF EXISTS`
    

Do not throw an error if the text search parser does not exist. A notice is issued in this case.

_`name`_
    

The name (optionally schema-qualified) of an existing text search parser.

`CASCADE`
    

Automatically drop objects that depend on the text search parser, and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the text search parser if any objects depend on it. This is the default.

## Examples

Remove the text search parser `my_parser`:
    
    
    DROP TEXT SEARCH PARSER my_parser;
    

This command will not succeed if there are any existing text search configurations that use the parser. Add `CASCADE` to drop such configurations along with the parser.

## Compatibility

There is no `DROP TEXT SEARCH PARSER` statement in the SQL standard.

## See Also

[ALTER TEXT SEARCH PARSER](</VI. Reference/I. SQL Commands/sql-altertsparser.md>)


  
