---
title: REASSIGN OWNED
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    REASSIGN OWNED BY { _old_role_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER } [, ...]
                   TO { _new_role_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    

## Description

`REASSIGN OWNED` instructs the system to change the ownership of database objects owned by any of the _`old_roles`_ to _`new_role`_.

## Parameters

_`old_role`_
    

The name of a role. The ownership of all the objects within the current database, and of all shared objects (databases, tablespaces), owned by this role will be reassigned to _`new_role`_.

_`new_role`_
    

The name of the role that will be made the new owner of the affected objects.

## Notes

`REASSIGN OWNED` is often used to prepare for the removal of one or more roles. Because `REASSIGN OWNED` does not affect objects within other databases, it is usually necessary to execute this command in each database that contains objects owned by a role that is to be removed.

`REASSIGN OWNED` requires membership on both the source role(s) and the target role.

The [`DROP OWNED`](</VI. Reference/I. SQL Commands/sql-drop-owned.md>) command is an alternative that simply drops all the database objects owned by one or more roles.

The `REASSIGN OWNED` command does not affect any privileges granted to the _`old_roles`_ on objects that are not owned by them. Likewise, it does not affect default privileges created with `ALTER DEFAULT PRIVILEGES`. Use `DROP OWNED` to revoke such privileges.

See [Section 22.4](</III. Server Administration/22. Database Roles/role-removal.md>) for more discussion.

## Compatibility

The `REASSIGN OWNED` command is a PostgreSQL extension.

## See Also

[DROP OWNED](</VI. Reference/I. SQL Commands/sql-drop-owned.md>)


  
