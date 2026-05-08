---
title: ALTER AGGREGATE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER AGGREGATE _name_ ( _aggregate_signature_ ) RENAME TO _new_name_
    ALTER AGGREGATE _name_ ( _aggregate_signature_ )
                    OWNER TO { _new_owner_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    ALTER AGGREGATE _name_ ( _aggregate_signature_ ) SET SCHEMA _new_schema_
    
    where _aggregate_signature_ is:
    
    * |
    [ _argmode_ ] [ _argname_ ] _argtype_ [ , ... ] |
    [ [ _argmode_ ] [ _argname_ ] _argtype_ [ , ... ] ] ORDER BY [ _argmode_ ] [ _argname_ ] _argtype_ [ , ... ]
    

## Description

`ALTER AGGREGATE` changes the definition of an aggregate function.

You must own the aggregate function to use `ALTER AGGREGATE`. To change the schema of an aggregate function, you must also have `CREATE` privilege on the new schema. To alter the owner, you must be able to `SET ROLE` to the new owning role, and that role must have `CREATE` privilege on the aggregate function's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the aggregate function. However, a superuser can alter ownership of any aggregate function anyway.)

## Parameters

_`name`_
    

The name (optionally schema-qualified) of an existing aggregate function.

_`argmode`_
    

The mode of an argument: `IN` or `VARIADIC`. If omitted, the default is `IN`.

_`argname`_
    

The name of an argument. Note that `ALTER AGGREGATE` does not actually pay any attention to argument names, since only the argument data types are needed to determine the aggregate function's identity.

_`argtype`_
    

An input data type on which the aggregate function operates. To reference a zero-argument aggregate function, write `*` in place of the list of argument specifications. To reference an ordered-set aggregate function, write `ORDER BY` between the direct and aggregated argument specifications.

_`new_name`_
    

The new name of the aggregate function.

_`new_owner`_
    

The new owner of the aggregate function.

_`new_schema`_
    

The new schema for the aggregate function.

## Notes

The recommended syntax for referencing an ordered-set aggregate is to write `ORDER BY` between the direct and aggregated argument specifications, in the same style as in [`CREATE AGGREGATE`](</VI. Reference/I. SQL Commands/sql-createaggregate.md>). However, it will also work to omit `ORDER BY` and just run the direct and aggregated argument specifications into a single list. In this abbreviated form, if `VARIADIC "any"` was used in both the direct and aggregated argument lists, write `VARIADIC "any"` only once.

## Examples

To rename the aggregate function `myavg` for type `integer` to `my_average`:
    
    
    ALTER AGGREGATE myavg(integer) RENAME TO my_average;
    

To change the owner of the aggregate function `myavg` for type `integer` to `joe`:
    
    
    ALTER AGGREGATE myavg(integer) OWNER TO joe;
    

To move the ordered-set aggregate `mypercentile` with direct argument of type `float8` and aggregated argument of type `integer` into schema `myschema`:
    
    
    ALTER AGGREGATE mypercentile(float8 ORDER BY integer) SET SCHEMA myschema;
    

This will work too:
    
    
    ALTER AGGREGATE mypercentile(float8, integer) SET SCHEMA myschema;
    

## Compatibility

There is no `ALTER AGGREGATE` statement in the SQL standard.

## See Also

[CREATE AGGREGATE](</VI. Reference/I. SQL Commands/sql-createaggregate.md>)


  
