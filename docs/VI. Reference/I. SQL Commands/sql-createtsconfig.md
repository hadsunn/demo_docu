---
title: CREATE TEXT SEARCH CONFIGURATION
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    CREATE TEXT SEARCH CONFIGURATION _name_ (
        PARSER = _parser_name_ |
        COPY = _source_config_
    )
    

## Description

`CREATE TEXT SEARCH CONFIGURATION` creates a new text search configuration. A text search configuration specifies a text search parser that can divide a string into tokens, plus dictionaries that can be used to determine which tokens are of interest for searching.

If only the parser is specified, then the new text search configuration initially has no mappings from token types to dictionaries, and therefore will ignore all words. Subsequent `ALTER TEXT SEARCH CONFIGURATION` commands must be used to create mappings to make the configuration useful. Alternatively, an existing text search configuration can be copied.

If a schema name is given then the text search configuration is created in the specified schema. Otherwise it is created in the current schema.

The user who defines a text search configuration becomes its owner.

Refer to [Chapter 12](</II. The SQL Language/12. Full Text Search/12. Full Text Search.md>) for further information.

## Parameters

_`name`_
    

The name of the text search configuration to be created. The name can be schema-qualified.

_`parser_name`_
    

The name of the text search parser to use for this configuration.

_`source_config`_
    

The name of an existing text search configuration to copy.

## Notes

The `PARSER` and `COPY` options are mutually exclusive, because when an existing configuration is copied, its parser selection is copied too.

## Compatibility

There is no `CREATE TEXT SEARCH CONFIGURATION` statement in the SQL standard.

## See Also

[ALTER TEXT SEARCH CONFIGURATION](</VI. Reference/I. SQL Commands/sql-altertsconfig.md>)


  
