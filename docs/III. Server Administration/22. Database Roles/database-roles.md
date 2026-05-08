---
title: 22.1. Database Roles
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Database roles are conceptually completely separate from operating system users. In practice it might be convenient to maintain a correspondence, but this is not required. Database roles are global across a database cluster installation (and not per individual database). To create a role use the [`CREATE ROLE`](</VI. Reference/I. SQL Commands/sql-createrole.md>) SQL command:
    
    
    CREATE ROLE _name_ ;
    

_`name`_ follows the rules for SQL identifiers: either unadorned without special characters, or double-quoted. (In practice, you will usually want to add additional options, such as `LOGIN`, to the command. More details appear below.) To remove an existing role, use the analogous [`DROP ROLE`](</VI. Reference/I. SQL Commands/sql-droprole.md>) command:
    
    
    DROP ROLE _name_ ;
    

For convenience, the programs [createuser](</VI. Reference/II. PostgreSQL Client Applications/app-createuser.md>) are provided as wrappers around these SQL commands that can be called from the shell command line:
    
    
    createuser _name_
    dropuser _name_
    

To determine the set of existing roles, examine the `pg_roles` system catalog, for example:
    
    
    SELECT rolname FROM pg_roles;
    

or to see just those capable of logging in:
    
    
    SELECT rolname FROM pg_roles WHERE rolcanlogin;
    

The [psql](</VI. Reference/II. PostgreSQL Client Applications/app-psql.md>) program's `\du` meta-command is also useful for listing the existing roles.

In order to bootstrap the database system, a freshly initialized system always contains one predefined login-capable role. This role is always a “superuser”, and it will have the same name as the operating system user that initialized the database cluster with `initdb` unless a different name is specified. This role is often named `postgres`. In order to create more roles you first have to connect as this initial role.

Every connection to the database server is made using the name of some particular role, and this role determines the initial access privileges for commands issued in that connection. The role name to use for a particular database connection is indicated by the client that is initiating the connection request in an application-specific fashion. For example, the `psql` program uses the `-U` command line option to indicate the role to connect as. Many applications assume the name of the current operating system user by default (including `createuser` and `psql`). Therefore it is often convenient to maintain a naming correspondence between roles and operating system users.

The set of database roles a given client connection can connect as is determined by the client authentication setup, as explained in [Chapter 21](</III. Server Administration/21. Client Authentication/21. Client Authentication.md>). (Thus, a client is not limited to connect as the role matching its operating system user, just as a person's login name need not match his or her real name.) Since the role identity determines the set of privileges available to a connected client, it is important to carefully configure privileges when setting up a multiuser environment.


  
