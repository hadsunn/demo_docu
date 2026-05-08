---
title: ALTER SYSTEM
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER SYSTEM SET _configuration_parameter_ { TO | = } { _value_ [, ...] | DEFAULT }
    
    ALTER SYSTEM RESET _configuration_parameter_
    ALTER SYSTEM RESET ALL
    

## Description

`ALTER SYSTEM` is used for changing server configuration parameters across the entire database cluster. It can be more convenient than the traditional method of manually editing the `postgresql.conf` file. `ALTER SYSTEM` writes the given parameter setting to the `postgresql.auto.conf` file, which is read in addition to `postgresql.conf`. Setting a parameter to `DEFAULT`, or using the `RESET` variant, removes that configuration entry from the `postgresql.auto.conf` file. Use `RESET ALL` to remove all such configuration entries.

Values set with `ALTER SYSTEM` will be effective after the next server configuration reload, or after the next server restart in the case of parameters that can only be changed at server start. A server configuration reload can be commanded by calling the SQL function `pg_reload_conf()`, running `pg_ctl reload`, or sending a SIGHUP signal to the main server process.

Only superusers and users granted `ALTER SYSTEM` privilege on a parameter can change it using `ALTER SYSTEM`. Also, since this command acts directly on the file system and cannot be rolled back, it is not allowed inside a transaction block or function.

## Parameters

_`configuration_parameter`_
    

Name of a settable configuration parameter. Available parameters are documented in [Chapter 20](</III. Server Administration/20. Server Configuration/20. Server Configuration.md>).

_`value`_
    

New value of the parameter. Values can be specified as string constants, identifiers, numbers, or comma-separated lists of these, as appropriate for the particular parameter. Values that are neither numbers nor valid identifiers must be quoted. `DEFAULT` can be written to specify removing the parameter and its value from `postgresql.auto.conf`.

For some list-accepting parameters, quoted values will produce double-quoted output to preserve whitespace and commas; for others, double-quotes must be used inside single-quoted strings to get this effect.

## Notes

This command can't be used to set [data_directory](<runtime-config-file-locations#GUC-DATA-DIRECTORY),>)).

See [Section 20.1](</III. Server Administration/20. Server Configuration/config-setting.md>) for other ways to set the parameters.

## Examples

Set the `wal_level`:
    
    
    ALTER SYSTEM SET wal_level = replica;
    

Undo that, restoring whatever setting was effective in `postgresql.conf`:
    
    
    ALTER SYSTEM RESET wal_level;
    

## Compatibility

The `ALTER SYSTEM` statement is a PostgreSQL extension.

## See Also

[SET](</VI. Reference/I. SQL Commands/sql-set.md>)


  
