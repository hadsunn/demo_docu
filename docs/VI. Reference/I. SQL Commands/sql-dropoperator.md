---
title: DROP OPERATOR
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP OPERATOR [ IF EXISTS ] _name_ ( { _left_type_ | NONE } , _right_type_ ) [, ...] [ CASCADE | RESTRICT ]
    

## Description

`DROP OPERATOR` drops an existing operator from the database system. To execute this command you must be the owner of the operator.

## Parameters

`IF EXISTS`
    

Do not throw an error if the operator does not exist. A notice is issued in this case.

_`name`_
    

The name (optionally schema-qualified) of an existing operator.

_`left_type`_
    

The data type of the operator's left operand; write `NONE` if the operator has no left operand.

_`right_type`_
    

The data type of the operator's right operand.

`CASCADE`
    

Automatically drop objects that depend on the operator (such as views using it), and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the operator if any objects depend on it. This is the default.

## Examples

Remove the power operator `a^b` for type `integer`:
    
    
    DROP OPERATOR ^ (integer, integer);
    

Remove the bitwise-complement prefix operator `~b` for type `bit`:
    
    
    DROP OPERATOR ~ (none, bit);
    

Remove multiple operators in one command:
    
    
    DROP OPERATOR ~ (none, bit), ^ (integer, integer);
    

## Compatibility

There is no `DROP OPERATOR` statement in the SQL standard.

## See Also

[CREATE OPERATOR](</VI. Reference/I. SQL Commands/sql-createoperator.md>)


  
