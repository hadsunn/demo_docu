---
title: DROP ROLE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP ROLE [ IF EXISTS ] _name_ [, ...]
    

## Description

`DROP ROLE` removes the specified role(s). To drop a superuser role, you must be a superuser yourself; to drop non-superuser roles, you must have `CREATEROLE` privilege and have been granted `ADMIN OPTION` on the role.

A role cannot be removed if it is still referenced in any database of the cluster; an error will be raised if so. Before dropping the role, you must drop all the objects it owns (or reassign their ownership) and revoke any privileges the role has been granted on other objects. The [`REASSIGN OWNED`](</VI. Reference/I. SQL Commands/sql-reassign-owned.md>) for more discussion.

However, it is not necessary to remove role memberships involving the role; `DROP ROLE` automatically revokes any memberships of the target role in other roles, and of other roles in the target role. The other roles are not dropped nor otherwise affected.

## Parameters

`IF EXISTS`
    

Do not throw an error if the role does not exist. A notice is issued in this case.

_`name`_
    

The name of the role to remove.

## Notes

PostgreSQL includes a program [dropuser](</VI. Reference/II. PostgreSQL Client Applications/app-dropuser.md>) that has the same functionality as this command (in fact, it calls this command) but can be run from the command shell.

## Examples

To drop a role:
    
    
    DROP ROLE jonathan;
    

## Compatibility

The SQL standard defines `DROP ROLE`, but it allows only one role to be dropped at a time, and it specifies different privilege requirements than PostgreSQL uses.

## See Also

[CREATE ROLE](</VI. Reference/I. SQL Commands/sql-createrole.md>)


  
