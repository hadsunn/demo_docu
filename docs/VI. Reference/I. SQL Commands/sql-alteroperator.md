---
title: ALTER OPERATOR
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER OPERATOR _name_ ( { _left_type_ | NONE } , _right_type_ )
        OWNER TO { _new_owner_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    
    ALTER OPERATOR _name_ ( { _left_type_ | NONE } , _right_type_ )
        SET SCHEMA _new_schema_
    
    ALTER OPERATOR _name_ ( { _left_type_ | NONE } , _right_type_ )
        SET ( {  RESTRICT = { _res_proc_ | NONE }
               | JOIN = { _join_proc_ | NONE }
             } [, ... ] )
    

## Description

`ALTER OPERATOR` changes the definition of an operator.

You must own the operator to use `ALTER OPERATOR`. To alter the owner, you must be able to `SET ROLE` to the new owning role, and that role must have `CREATE` privilege on the operator's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the operator. However, a superuser can alter ownership of any operator anyway.)

## Parameters

_`name`_
    

The name (optionally schema-qualified) of an existing operator.

_`left_type`_
    

The data type of the operator's left operand; write `NONE` if the operator has no left operand.

_`right_type`_
    

The data type of the operator's right operand.

_`new_owner`_
    

The new owner of the operator.

_`new_schema`_
    

The new schema for the operator.

_`res_proc`_
    

The restriction selectivity estimator function for this operator; write NONE to remove existing selectivity estimator.

_`join_proc`_
    

The join selectivity estimator function for this operator; write NONE to remove existing selectivity estimator.

## Examples

Change the owner of a custom operator `a @@ b` for type `text`:
    
    
    ALTER OPERATOR @@ (text, text) OWNER TO joe;
    

Change the restriction and join selectivity estimator functions of a custom operator `a && b` for type `int[]`:
    
    
    ALTER OPERATOR && (_int4, _int4) SET (RESTRICT = _int_contsel, JOIN = _int_contjoinsel);
    

## Compatibility

There is no `ALTER OPERATOR` statement in the SQL standard.

## See Also

[CREATE OPERATOR](</VI. Reference/I. SQL Commands/sql-createoperator.md>)


  
