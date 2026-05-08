---
title: ALTER OPERATOR CLASS
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER OPERATOR CLASS _name_ USING _index_method_
        RENAME TO _new_name_
    
    ALTER OPERATOR CLASS _name_ USING _index_method_
        OWNER TO { _new_owner_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    
    ALTER OPERATOR CLASS _name_ USING _index_method_
        SET SCHEMA _new_schema_
    

## Description

`ALTER OPERATOR CLASS` changes the definition of an operator class.

You must own the operator class to use `ALTER OPERATOR CLASS`. To alter the owner, you must be able to `SET ROLE` to the new owning role, and that role must have `CREATE` privilege on the operator class's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the operator class. However, a superuser can alter ownership of any operator class anyway.)

## Parameters

_`name`_
    

The name (optionally schema-qualified) of an existing operator class.

_`index_method`_
    

The name of the index method this operator class is for.

_`new_name`_
    

The new name of the operator class.

_`new_owner`_
    

The new owner of the operator class.

_`new_schema`_
    

The new schema for the operator class.

## Compatibility

There is no `ALTER OPERATOR CLASS` statement in the SQL standard.

## See Also

[CREATE OPERATOR CLASS](</VI. Reference/I. SQL Commands/sql-createopclass.md>)


  
