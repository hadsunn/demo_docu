---
title: 54.33. `pg_user`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_user` provides access to information about database users. This is simply a publicly readable view of [`pg_shadow`](</VII. Internals/54. System Views/view-pg-shadow.md>) that blanks out the password field.

**Table  54.33. `pg_user` Columns**

Column Type Description  
---  
`usename` `name` User name  
`usesysid` `oid` ID of this user  
`usecreatedb` `bool` User can create databases  
`usesuper` `bool` User is a superuser  
`userepl` `bool` User can initiate streaming replication and put the system in and out of backup mode.  
`usebypassrls` `bool` User bypasses every row-level security policy, see [Section 5.8](</II. The SQL Language/5. Data Definition/ddl-rowsecurity.md>) for more information.  
`passwd` `text` Not the password (always reads as `********`)  
`valuntil` `timestamptz` Password expiry time (only used for password authentication)  
`useconfig` `text[]` Session defaults for run-time configuration variables  
  
  



  
