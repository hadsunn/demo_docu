---
title: 54.20. `pg_roles`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_roles` provides access to information about database roles. This is simply a publicly readable view of [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>) that blanks out the password field.

**Table  54.20. `pg_roles` Columns**

Column Type Description  
---  
`rolname` `name` Role name  
`rolsuper` `bool` Role has superuser privileges  
`rolinherit` `bool` Role automatically inherits privileges of roles it is a member of  
`rolcreaterole` `bool` Role can create more roles  
`rolcreatedb` `bool` Role can create databases  
`rolcanlogin` `bool` Role can log in. That is, this role can be given as the initial session authorization identifier  
`rolreplication` `bool` Role is a replication role. A replication role can initiate replication connections and create and drop replication slots.  
`rolconnlimit` `int4` For roles that can log in, this sets maximum number of concurrent connections this role can make. -1 means no limit.  
`rolpassword` `text` Not the password (always reads as `********`)  
`rolvaliduntil` `timestamptz` Password expiry time (only used for password authentication); null if no expiration  
`rolbypassrls` `bool` Role bypasses every row-level security policy, see [Section 5.8](</II. The SQL Language/5. Data Definition/ddl-rowsecurity.md>) for more information.  
`rolconfig` `text[]` Role-specific defaults for run-time configuration variables  
`oid` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) ID of role  
  
  



  
