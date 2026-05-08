---
title: ALTER USER
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER USER _role_specification_ [ WITH ] _option_ [ ... ]
    
    where _option_ can be:
    
          SUPERUSER | NOSUPERUSER
        | CREATEDB | NOCREATEDB
        | CREATEROLE | NOCREATEROLE
        | INHERIT | NOINHERIT
        | LOGIN | NOLOGIN
        | REPLICATION | NOREPLICATION
        | BYPASSRLS | NOBYPASSRLS
        | CONNECTION LIMIT _connlimit_
        | [ ENCRYPTED ] PASSWORD '_password_ ' | PASSWORD NULL
        | VALID UNTIL '_timestamp_ '
    
    ALTER USER _name_ RENAME TO _new_name_
    
    ALTER USER { _role_specification_ | ALL } [ IN DATABASE _database_name_ ] SET _configuration_parameter_ { TO | = } { _value_ | DEFAULT }
    ALTER USER { _role_specification_ | ALL } [ IN DATABASE _database_name_ ] SET _configuration_parameter_ FROM CURRENT
    ALTER USER { _role_specification_ | ALL } [ IN DATABASE _database_name_ ] RESET _configuration_parameter_
    ALTER USER { _role_specification_ | ALL } [ IN DATABASE _database_name_ ] RESET ALL
    
    where _role_specification_ can be:
    
        _role_name_
      | CURRENT_ROLE
      | CURRENT_USER
      | SESSION_USER
    

## Description

`ALTER USER` is now an alias for [`ALTER ROLE`](</VI. Reference/I. SQL Commands/sql-alterrole.md>).

## Compatibility

The `ALTER USER` statement is a PostgreSQL extension. The SQL standard leaves the definition of users to the implementation.

## See Also

[ALTER ROLE](</VI. Reference/I. SQL Commands/sql-alterrole.md>)


  
