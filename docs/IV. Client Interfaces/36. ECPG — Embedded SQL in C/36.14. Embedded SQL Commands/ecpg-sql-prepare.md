---
title: PREPARE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    PREPARE _prepared_name_ FROM _string_
    

## Description

`PREPARE` prepares a statement dynamically specified as a string for execution. This is different from the direct SQL statement [PREPARE](</VI. Reference/I. SQL Commands/sql-prepare.md>) command is used to execute either kind of prepared statement.

## Parameters

_`prepared_name`_ #
    

An identifier for the prepared query.

_`string`_ #
    

A literal string or a host variable containing a preparable SQL statement, one of SELECT, INSERT, UPDATE, or DELETE. Use question marks (`?`) for parameter values to be supplied at execution.

## Notes

In typical usage, the _`string`_ is a host variable reference to a string containing a dynamically-constructed SQL statement. The case of a literal string is not very useful; you might as well just write a direct SQL `PREPARE` statement.

If you do use a literal string, keep in mind that any double quotes you might wish to include in the SQL statement must be written as octal escapes (`\042`) not the usual C idiom `\"`. This is because the string is inside an `EXEC SQL` section, so the ECPG lexer parses it according to SQL rules not C rules. Any embedded backslashes will later be handled according to C rules; but `\"` causes an immediate syntax error because it is seen as ending the literal.

## Examples
    
    
    char *stmt = "SELECT * FROM test1 WHERE a = ? AND b = ?";
    
    EXEC SQL ALLOCATE DESCRIPTOR outdesc;
    EXEC SQL PREPARE foo FROM :stmt;
    
    EXEC SQL EXECUTE foo USING SQL DESCRIPTOR indesc INTO SQL DESCRIPTOR outdesc;
    

## Compatibility

`PREPARE` is specified in the SQL standard.

## See Also

[EXECUTE](</VI. Reference/I. SQL Commands/sql-execute.md>)


  
