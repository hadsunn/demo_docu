---
title: ALTER TEXT SEARCH CONFIGURATION
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER TEXT SEARCH CONFIGURATION _name_
        ADD MAPPING FOR _token_type_ [, ... ] WITH _dictionary_name_ [, ... ]
    ALTER TEXT SEARCH CONFIGURATION _name_
        ALTER MAPPING FOR _token_type_ [, ... ] WITH _dictionary_name_ [, ... ]
    ALTER TEXT SEARCH CONFIGURATION _name_
        ALTER MAPPING REPLACE _old_dictionary_ WITH _new_dictionary_
    ALTER TEXT SEARCH CONFIGURATION _name_
        ALTER MAPPING FOR _token_type_ [, ... ] REPLACE _old_dictionary_ WITH _new_dictionary_
    ALTER TEXT SEARCH CONFIGURATION _name_
        DROP MAPPING [ IF EXISTS ] FOR _token_type_ [, ... ]
    ALTER TEXT SEARCH CONFIGURATION _name_ RENAME TO _new_name_
    ALTER TEXT SEARCH CONFIGURATION _name_ OWNER TO { _new_owner_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    ALTER TEXT SEARCH CONFIGURATION _name_ SET SCHEMA _new_schema_
    

## Description

`ALTER TEXT SEARCH CONFIGURATION` changes the definition of a text search configuration. You can modify its mappings from token types to dictionaries, or change the configuration's name or owner.

You must be the owner of the configuration to use `ALTER TEXT SEARCH CONFIGURATION`.

## Parameters

_`name`_
    

The name (optionally schema-qualified) of an existing text search configuration.

_`token_type`_
    

The name of a token type that is emitted by the configuration's parser.

_`dictionary_name`_
    

The name of a text search dictionary to be consulted for the specified token type(s). If multiple dictionaries are listed, they are consulted in the specified order.

_`old_dictionary`_
    

The name of a text search dictionary to be replaced in the mapping.

_`new_dictionary`_
    

The name of a text search dictionary to be substituted for _`old_dictionary`_.

_`new_name`_
    

The new name of the text search configuration.

_`new_owner`_
    

The new owner of the text search configuration.

_`new_schema`_
    

The new schema for the text search configuration.

The `ADD MAPPING FOR` form installs a list of dictionaries to be consulted for the specified token type(s); it is an error if there is already a mapping for any of the token types. The `ALTER MAPPING FOR` form does the same, but first removing any existing mapping for those token types. The `ALTER MAPPING REPLACE` forms substitute _`new_dictionary`_ for _`old_dictionary`_ anywhere the latter appears. This is done for only the specified token types when `FOR` appears, or for all mappings of the configuration when it doesn't. The `DROP MAPPING` form removes all dictionaries for the specified token type(s), causing tokens of those types to be ignored by the text search configuration. It is an error if there is no mapping for the token types, unless `IF EXISTS` appears.

## Examples

The following example replaces the `english` dictionary with the `swedish` dictionary anywhere that `english` is used within `my_config`.
    
    
    ALTER TEXT SEARCH CONFIGURATION my_config
      ALTER MAPPING REPLACE english WITH swedish;
    

## Compatibility

There is no `ALTER TEXT SEARCH CONFIGURATION` statement in the SQL standard.

## See Also

[CREATE TEXT SEARCH CONFIGURATION](</VI. Reference/I. SQL Commands/sql-createtsconfig.md>)


  
