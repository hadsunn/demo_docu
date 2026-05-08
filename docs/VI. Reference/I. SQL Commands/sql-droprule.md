---
title: DROP RULE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP RULE [ IF EXISTS ] _name_ ON _table_name_ [ CASCADE | RESTRICT ]
    

## Description

`DROP RULE` drops a rewrite rule.

## Parameters

`IF EXISTS`
    

Do not throw an error if the rule does not exist. A notice is issued in this case.

_`name`_
    

The name of the rule to drop.

_`table_name`_
    

The name (optionally schema-qualified) of the table or view that the rule applies to.

`CASCADE`
    

Automatically drop objects that depend on the rule, and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the rule if any objects depend on it. This is the default.

## Examples

To drop the rewrite rule `newrule`:
    
    
    DROP RULE newrule ON mytable;
    

## Compatibility

`DROP RULE` is a PostgreSQL language extension, as is the entire query rewrite system.

## See Also

[CREATE RULE](</VI. Reference/I. SQL Commands/sql-createrule.md>)


  
