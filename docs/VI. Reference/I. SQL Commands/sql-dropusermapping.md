---
title: DROP USER MAPPING
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP USER MAPPING [ IF EXISTS ] FOR { _user_name_ | USER | CURRENT_ROLE | CURRENT_USER | PUBLIC } SERVER _server_name_
    

## Description

`DROP USER MAPPING` removes an existing user mapping from foreign server.

The owner of a foreign server can drop user mappings for that server for any user. Also, a user can drop a user mapping for their own user name if `USAGE` privilege on the server has been granted to the user.

## Parameters

`IF EXISTS`
    

Do not throw an error if the user mapping does not exist. A notice is issued in this case.

_`user_name`_
    

User name of the mapping. `CURRENT_ROLE`, `CURRENT_USER`, and `USER` match the name of the current user. `PUBLIC` is used to match all present and future user names in the system.

_`server_name`_
    

Server name of the user mapping.

## Examples

Drop a user mapping `bob`, server `foo` if it exists:
    
    
    DROP USER MAPPING IF EXISTS FOR bob SERVER foo;
    

## Compatibility

`DROP USER MAPPING` conforms to ISO/IEC 9075-9 (SQL/MED). The `IF EXISTS` clause is a PostgreSQL extension.

## See Also

[CREATE USER MAPPING](</VI. Reference/I. SQL Commands/sql-createusermapping.md>)


  
