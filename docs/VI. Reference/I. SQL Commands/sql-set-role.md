---
title: SET ROLE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    SET [ SESSION | LOCAL ] ROLE _role_name_
    SET [ SESSION | LOCAL ] ROLE NONE
    RESET ROLE
    

## Description

This command sets the current user identifier of the current SQL session to be _`role_name`_. The role name can be written as either an identifier or a string literal. After `SET ROLE`, permissions checking for SQL commands is carried out as though the named role were the one that had logged in originally.

The current session user must have the `SET` option for the specified _`role_name`_ , either directly or indirectly via a chain of memberships with the `SET` option. (If the session user is a superuser, any role can be selected.)

The `SESSION` and `LOCAL` modifiers act the same as for the regular [`SET`](</VI. Reference/I. SQL Commands/sql-set.md>) command.

`SET ROLE NONE` sets the current user identifier to the current session user identifier, as returned by `session_user`. `RESET ROLE` sets the current user identifier to the connection-time setting specified by the [command-line options](<libpq-connect#LIBPQ-CONNECT-OPTIONS),>), if any such settings exist. Otherwise, `RESET ROLE` sets the current user identifier to the current session user identifier. These forms can be executed by any user.

## Notes

Using this command, it is possible to either add privileges or restrict one's privileges. If the session user role has been granted memberships `WITH INHERIT TRUE`, it automatically has all the privileges of every such role. In this case, `SET ROLE` effectively drops all the privileges except for those which the target role directly possesses or inherits. On the other hand, if the session user role has been granted memberships `WITH INHERIT FALSE`, the privileges of the granted roles can't be accessed by default. However, if the role was granted `WITH SET TRUE`, the session user can use `SET ROLE` to drop the privileges assigned directly to the session user and instead acquire the privileges available to the named role. If the role was granted `WITH INHERIT FALSE, SET FALSE` then the privileges of that role cannot be exercised either with or without `SET ROLE`.

Note that when a superuser chooses to `SET ROLE` to a non-superuser role, they lose their superuser privileges.

`SET ROLE` has effects comparable to [`SET SESSION AUTHORIZATION`](</VI. Reference/I. SQL Commands/sql-set-session-authorization.md>), but the privilege checks involved are quite different. Also, `SET SESSION AUTHORIZATION` determines which roles are allowable for later `SET ROLE` commands, whereas changing roles with `SET ROLE` does not change the set of roles allowed to a later `SET ROLE`.

`SET ROLE` does not process session variables as specified by the role's [`ALTER ROLE`](</VI. Reference/I. SQL Commands/sql-alterrole.md>) settings; this only happens during login.

`SET ROLE` cannot be used within a `SECURITY DEFINER` function.

## Examples
    
    
    SELECT SESSION_USER, CURRENT_USER;
    
     session_user | current_user
    --------------+--------------
     peter        | peter
    
    SET ROLE 'paul';
    
    SELECT SESSION_USER, CURRENT_USER;
    
     session_user | current_user
    --------------+--------------
     peter        | paul
    

## Compatibility

PostgreSQL allows identifier syntax (`"_`rolename`_ "`), while the SQL standard requires the role name to be written as a string literal. SQL does not allow this command during a transaction; PostgreSQL does not make this restriction because there is no reason to. The `SESSION` and `LOCAL` modifiers are a PostgreSQL extension, as is the `RESET` syntax.

## See Also

[SET SESSION AUTHORIZATION](</VI. Reference/I. SQL Commands/sql-set-session-authorization.md>)


  
