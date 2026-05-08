---
title: DROP DOMAIN
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP DOMAIN [ IF EXISTS ] _name_ [, ...] [ CASCADE | RESTRICT ]
    

## Description

`DROP DOMAIN` removes a domain. Only the owner of a domain can remove it.

## Parameters

`IF EXISTS`
    

Do not throw an error if the domain does not exist. A notice is issued in this case.

_`name`_
    

The name (optionally schema-qualified) of an existing domain.

`CASCADE`
    

Automatically drop objects that depend on the domain (such as table columns), and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the domain if any objects depend on it. This is the default.

## Examples

To remove the domain `box`:
    
    
    DROP DOMAIN box;
    

## Compatibility

This command conforms to the SQL standard, except for the `IF EXISTS` option, which is a PostgreSQL extension.

## See Also

[CREATE DOMAIN](</VI. Reference/I. SQL Commands/sql-createdomain.md>)


  
