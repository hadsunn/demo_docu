---
title: CALL
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    CALL _name_ ( [ _argument_ ] [, ...] )
    

## Description

`CALL` executes a procedure.

If the procedure has any output parameters, then a result row will be returned, containing the values of those parameters.

## Parameters

_`name`_
    

The name (optionally schema-qualified) of the procedure.

_`argument`_
    

An argument expression for the procedure call.

Arguments can include parameter names, using the syntax `_`name`_ => _`value`_`. This works the same as in ordinary function calls; see [Section 4.3](</II. The SQL Language/4. SQL Syntax/sql-syntax-calling-funcs.md>) for details.

Arguments must be supplied for all procedure parameters that lack defaults, including `OUT` parameters. However, arguments matching `OUT` parameters are not evaluated, so it's customary to just write `NULL` for them. (Writing something else for an `OUT` parameter might cause compatibility problems with future PostgreSQL versions.)

## Notes

The user must have `EXECUTE` privilege on the procedure in order to be allowed to invoke it.

To call a function (not a procedure), use `SELECT` instead.

If `CALL` is executed in a transaction block, then the called procedure cannot execute transaction control statements. Transaction control statements are only allowed if `CALL` is executed in its own transaction.

PL/pgSQL handles output parameters in `CALL` commands differently; see [Section 43.6.3](plpgsql-control-structures.html#PLPGSQL-STATEMENTS-CALLING-PROCEDURE "43.6.3. Calling a Procedure").

## Examples
    
    
    CALL do_db_maintenance();
    

## Compatibility

`CALL` conforms to the SQL standard, except for the handling of output parameters. The standard says that users should write variables to receive the values of output parameters.

## See Also

[CREATE PROCEDURE](</VI. Reference/I. SQL Commands/sql-createprocedure.md>)


  
