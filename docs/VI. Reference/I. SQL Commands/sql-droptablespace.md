---
title: DROP TABLESPACE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP TABLESPACE [ IF EXISTS ] _name_
    

## Description

`DROP TABLESPACE` removes a tablespace from the system.

A tablespace can only be dropped by its owner or a superuser. The tablespace must be empty of all database objects before it can be dropped. It is possible that objects in other databases might still reside in the tablespace even if no objects in the current database are using the tablespace. Also, if the tablespace is listed in the [temp_tablespaces](runtime-config-client.html#GUC-TEMP-TABLESPACES) setting of any active session, the `DROP` might fail due to temporary files residing in the tablespace.

## Parameters

`IF EXISTS`
    

Do not throw an error if the tablespace does not exist. A notice is issued in this case.

_`name`_
    

The name of a tablespace.

## Notes

`DROP TABLESPACE` cannot be executed inside a transaction block.

## Examples

To remove tablespace `mystuff` from the system:
    
    
    DROP TABLESPACE mystuff;
    

## Compatibility

`DROP TABLESPACE` is a PostgreSQL extension.

## See Also

[CREATE TABLESPACE](</VI. Reference/I. SQL Commands/sql-createtablespace.md>)


  
