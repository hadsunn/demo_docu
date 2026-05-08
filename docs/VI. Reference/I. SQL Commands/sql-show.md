---
title: SHOW
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    SHOW _name_
    SHOW ALL
    

## Description

`SHOW` will display the current setting of run-time parameters. These variables can be set using the `SET` statement, by editing the `postgresql.conf` configuration file, through the `PGOPTIONS` environmental variable (when using libpq or a libpq-based application), or through command-line flags when starting the `postgres` server. See [Chapter 20](</III. Server Administration/20. Server Configuration/20. Server Configuration.md>) for details.

## Parameters

_`name`_
    

The name of a run-time parameter. Available parameters are documented in [Chapter 20](</III. Server Administration/20. Server Configuration/20. Server Configuration.md>) reference page. In addition, there are a few parameters that can be shown but not set:

`SERVER_VERSION`
    

Shows the server's version number.

`SERVER_ENCODING`
    

Shows the server-side character set encoding. At present, this parameter can be shown but not set, because the encoding is determined at database creation time.

`IS_SUPERUSER`
    

True if the current role has superuser privileges.

`ALL`
    

Show the values of all configuration parameters, with descriptions.

## Notes

The function `current_setting` produces equivalent output; see [Section 9.27.1](<functions-admin#FUNCTIONS-ADMIN-SET>) system view produces the same information.

## Examples

Show the current setting of the parameter `DateStyle`:
    
    
    SHOW DateStyle;
     DateStyle
    -----------
     ISO, MDY
    (1 row)
    

Show the current setting of the parameter `geqo`:
    
    
    SHOW geqo;
     geqo
    ------
     on
    (1 row)
    

Show all settings:
    
    
    SHOW ALL;
                name         | setting |                description
    -------------------------+---------+-------------------------------------------------
     allow_system_table_mods | off     | Allows modifications of the structure of ...
        .
        .
        .
     xmloption               | content | Sets whether XML data in implicit parsing ...
     zero_damaged_pages      | off     | Continues processing past damaged page headers.
    (196 rows)
    

## Compatibility

The `SHOW` command is a PostgreSQL extension.

## See Also

[SET](</VI. Reference/I. SQL Commands/sql-set.md>)


  
