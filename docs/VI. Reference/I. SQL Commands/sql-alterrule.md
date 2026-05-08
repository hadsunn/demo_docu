---
title: ALTER RULE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER RULE _name_ ON _table_name_ RENAME TO _new_name_
    

## Description

`ALTER RULE` changes properties of an existing rule. Currently, the only available action is to change the rule's name.

To use `ALTER RULE`, you must own the table or view that the rule applies to.

## Parameters

_`name`_
    

The name of an existing rule to alter.

_`table_name`_
    

The name (optionally schema-qualified) of the table or view that the rule applies to.

_`new_name`_
    

The new name for the rule.

## Examples

To rename an existing rule:
    
    
    ALTER RULE notify_all ON emp RENAME TO notify_me;
    

## Compatibility

`ALTER RULE` is a PostgreSQL language extension, as is the entire query rewrite system.

## See Also

[CREATE RULE](</VI. Reference/I. SQL Commands/sql-createrule.md>)


  
