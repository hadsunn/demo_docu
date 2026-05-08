---
title: CREATE TEXT SEARCH PARSER
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    CREATE TEXT SEARCH PARSER _name_ (
        START = _start_function_ ,
        GETTOKEN = _gettoken_function_ ,
        END = _end_function_ ,
        LEXTYPES = _lextypes_function_
        [, HEADLINE = _headline_function_ ]
    )
    

## Description

`CREATE TEXT SEARCH PARSER` creates a new text search parser. A text search parser defines a method for splitting a text string into tokens and assigning types (categories) to the tokens. A parser is not particularly useful by itself, but must be bound into a text search configuration along with some text search dictionaries to be used for searching.

If a schema name is given then the text search parser is created in the specified schema. Otherwise it is created in the current schema.

You must be a superuser to use `CREATE TEXT SEARCH PARSER`. (This restriction is made because an erroneous text search parser definition could confuse or even crash the server.)

Refer to [Chapter 12](</II. The SQL Language/12. Full Text Search/12. Full Text Search.md>) for further information.

## Parameters

_`name`_
    

The name of the text search parser to be created. The name can be schema-qualified.

_`start_function`_
    

The name of the start function for the parser.

_`gettoken_function`_
    

The name of the get-next-token function for the parser.

_`end_function`_
    

The name of the end function for the parser.

_`lextypes_function`_
    

The name of the lextypes function for the parser (a function that returns information about the set of token types it produces).

_`headline_function`_
    

The name of the headline function for the parser (a function that summarizes a set of tokens).

The function names can be schema-qualified if necessary. Argument types are not given, since the argument list for each type of function is predetermined. All except the headline function are required.

The arguments can appear in any order, not only the one shown above.

## Compatibility

There is no `CREATE TEXT SEARCH PARSER` statement in the SQL standard.

## See Also

[ALTER TEXT SEARCH PARSER](</VI. Reference/I. SQL Commands/sql-altertsparser.md>)


  
