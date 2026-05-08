---
title: 53.9. `pg_auth_members`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_auth_members` shows the membership relations between roles. Any non-circular set of relationships is allowed.

Because user identities are cluster-wide, `pg_auth_members` is shared across all databases of a cluster: there is only one copy of `pg_auth_members` per cluster, not one per database.

**Table  53.9. `pg_auth_members` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`roleid` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) ID of a role that has a member  
`member` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) ID of a role that is a member of `roleid`  
`grantor` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) ID of the role that granted this membership  
`admin_option` `bool` True if `member` can grant membership in `roleid` to others  
`inherit_option` `bool` True if the member automatically inherits the privileges of the granted role  
`set_option` `bool` True if the member can [`SET ROLE`](</VI. Reference/I. SQL Commands/sql-set-role.md>) to the granted role  
  
  



  
