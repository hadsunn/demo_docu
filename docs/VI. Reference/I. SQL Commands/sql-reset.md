---
title: RESET
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    RESET _configuration_parameter_
    RESET ALL
    

## Description

`RESET` restores run-time parameters to their default values. `RESET` is an alternative spelling for
    
    
    SET _configuration_parameter_ TO DEFAULT
    

Refer to [SET](</VI. Reference/I. SQL Commands/sql-set.md>) for details.

The default value is defined as the value that the parameter would have had, if no `SET` had ever been issued for it in the current session. The actual source of this value might be a compiled-in default, the configuration file, command-line options, or per-database or per-user default settings. This is subtly different from defining it as “the value that the parameter had at session start”, because if the value came from the configuration file, it will be reset to whatever is specified by the configuration file now. See [Chapter 20](</III. Server Administration/20. Server Configuration/20. Server Configuration.md>) for details.

The transactional behavior of `RESET` is the same as `SET`: its effects will be undone by transaction rollback.

## Parameters

_`configuration_parameter`_
    

Name of a settable run-time parameter. Available parameters are documented in [Chapter 20](</III. Server Administration/20. Server Configuration/20. Server Configuration.md>) reference page.

`ALL`
    

Resets all settable run-time parameters to default values.

## Examples

Set the `timezone` configuration variable to its default value:
    
    
    RESET timezone;
    

## Compatibility

`RESET` is a PostgreSQL extension.

## See Also

[SET](</VI. Reference/I. SQL Commands/sql-set.md>)


  
