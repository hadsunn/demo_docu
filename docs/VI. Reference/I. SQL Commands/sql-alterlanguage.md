---
title: ALTER LANGUAGE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER [ PROCEDURAL ] LANGUAGE _name_ RENAME TO _new_name_
    ALTER [ PROCEDURAL ] LANGUAGE _name_ OWNER TO { _new_owner_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    

## Description

`ALTER LANGUAGE` changes the definition of a procedural language. The only functionality is to rename the language or assign a new owner. You must be superuser or owner of the language to use `ALTER LANGUAGE`.

## Parameters

_`name`_
    

Name of a language

_`new_name`_
    

The new name of the language

_`new_owner`_
    

The new owner of the language

## Compatibility

There is no `ALTER LANGUAGE` statement in the SQL standard.

## See Also

[CREATE LANGUAGE](</VI. Reference/I. SQL Commands/sql-createlanguage.md>)


  
