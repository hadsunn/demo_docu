---
title: ALTER CONVERSION
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER CONVERSION _name_ RENAME TO _new_name_
    ALTER CONVERSION _name_ OWNER TO { _new_owner_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    ALTER CONVERSION _name_ SET SCHEMA _new_schema_
    

## Description

`ALTER CONVERSION` changes the definition of a conversion.

You must own the conversion to use `ALTER CONVERSION`. To alter the owner, you must be able to `SET ROLE` to the new owning role, and that role must have `CREATE` privilege on the conversion's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the conversion. However, a superuser can alter ownership of any conversion anyway.)

## Parameters

_`name`_
    

The name (optionally schema-qualified) of an existing conversion.

_`new_name`_
    

The new name of the conversion.

_`new_owner`_
    

The new owner of the conversion.

_`new_schema`_
    

The new schema for the conversion.

## Examples

To rename the conversion `iso_8859_1_to_utf8` to `latin1_to_unicode`:
    
    
    ALTER CONVERSION iso_8859_1_to_utf8 RENAME TO latin1_to_unicode;
    

To change the owner of the conversion `iso_8859_1_to_utf8` to `joe`:
    
    
    ALTER CONVERSION iso_8859_1_to_utf8 OWNER TO joe;
    

## Compatibility

There is no `ALTER CONVERSION` statement in the SQL standard.

## See Also

[CREATE CONVERSION](</VI. Reference/I. SQL Commands/sql-createconversion.md>)


  
