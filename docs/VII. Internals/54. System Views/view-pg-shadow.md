---
title: 54.25. `pg_shadow`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_shadow` exists for backwards compatibility: it emulates a catalog that existed in PostgreSQL before version 8.1. It shows properties of all roles that are marked as `rolcanlogin` in [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).

The name stems from the fact that this table should not be readable by the public since it contains passwords. [`pg_user`](</VII. Internals/54. System Views/view-pg-user.md>) is a publicly readable view on `pg_shadow` that blanks out the password field.

**Table  54.25. `pg_shadow` Columns**

Column Type Description  
---  
`usename` `name` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`rolname`) User name  
`usesysid` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) ID of this user  
`usecreatedb` `bool` User can create databases  
`usesuper` `bool` User is a superuser  
`userepl` `bool` User can initiate streaming replication and put the system in and out of backup mode.  
`usebypassrls` `bool` User bypasses every row-level security policy, see [Section 5.8](</II. The SQL Language/5. Data Definition/ddl-rowsecurity.md>) for more information.  
`passwd` `text` Password (possibly encrypted); null if none. See [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>) for details of how encrypted passwords are stored.  
`valuntil` `timestamptz` Password expiry time (only used for password authentication)  
`useconfig` `text[]` Session defaults for run-time configuration variables  
  
  



  
