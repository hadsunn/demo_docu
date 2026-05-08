---
title: ALTER GROUP
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER GROUP _role_specification_ ADD USER _user_name_ [, ... ]
    ALTER GROUP _role_specification_ DROP USER _user_name_ [, ... ]
    
    where _role_specification_ can be:
    
        _role_name_
      | CURRENT_ROLE
      | CURRENT_USER
      | SESSION_USER
    
    ALTER GROUP _group_name_ RENAME TO _new_name_
    

## Description

`ALTER GROUP` changes the attributes of a user group. This is an obsolete command, though still accepted for backwards compatibility, because groups (and users too) have been superseded by the more general concept of roles.

The first two variants add users to a group or remove them from a group. (Any role can play the part of either a “user” or a “group” for this purpose.) These variants are effectively equivalent to granting or revoking membership in the role named as the “group”; so the preferred way to do this is to use [`GRANT`](</VI. Reference/I. SQL Commands/sql-grant.md>). Note that `GRANT` and `REVOKE` have additional options which are not available with this command, such as the ability to grant and revoke `ADMIN OPTION`, and the ability to specify the grantor.

The third variant changes the name of the group. This is exactly equivalent to renaming the role with [`ALTER ROLE`](</VI. Reference/I. SQL Commands/sql-alterrole.md>).

## Parameters

_`group_name`_
    

The name of the group (role) to modify.

_`user_name`_
    

Users (roles) that are to be added to or removed from the group. The users must already exist; `ALTER GROUP` does not create or drop users.

_`new_name`_
    

The new name of the group.

## Examples

Add users to a group:
    
    
    ALTER GROUP staff ADD USER karl, john;
    

Remove a user from a group:
    
    
    ALTER GROUP workers DROP USER beth;
    

## Compatibility

There is no `ALTER GROUP` statement in the SQL standard.

## See Also

[GRANT](</VI. Reference/I. SQL Commands/sql-grant.md>)


  
