---
title: 53.8. `pg_authid`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_authid` contains information about database authorization identifiers (roles). A role subsumes the concepts of “users” and “groups”. A user is essentially just a role with the `rolcanlogin` flag set. Any role (with or without `rolcanlogin`) can have other roles as members; see [`pg_auth_members`](</VII. Internals/53. System Catalogs/catalog-pg-auth-members.md>).

Since this catalog contains passwords, it must not be publicly readable. [`pg_roles`](</VII. Internals/54. System Views/view-pg-roles.md>) is a publicly readable view on `pg_authid` that blanks out the password field.

[Chapter 22](</III. Server Administration/22. Database Roles/22. Database Roles.md>) contains detailed information about user and privilege management.

Because user identities are cluster-wide, `pg_authid` is shared across all databases of a cluster: there is only one copy of `pg_authid` per cluster, not one per database.

**Table  53.8. `pg_authid` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`rolname` `name` Role name  
`rolsuper` `bool` Role has superuser privileges  
`rolinherit` `bool` Role automatically inherits privileges of roles it is a member of  
`rolcreaterole` `bool` Role can create more roles  
`rolcreatedb` `bool` Role can create databases  
`rolcanlogin` `bool` Role can log in. That is, this role can be given as the initial session authorization identifier.  
`rolreplication` `bool` Role is a replication role. A replication role can initiate replication connections and create and drop replication slots.  
`rolbypassrls` `bool` Role bypasses every row-level security policy, see [Section 5.8](</II. The SQL Language/5. Data Definition/ddl-rowsecurity.md>) for more information.  
`rolconnlimit` `int4` For roles that can log in, this sets maximum number of concurrent connections this role can make. -1 means no limit.  
`rolpassword` `text` Password (possibly encrypted); null if none. The format depends on the form of encryption used.  
`rolvaliduntil` `timestamptz` Password expiry time (only used for password authentication); null if no expiration  
  
  


For an MD5 encrypted password, `rolpassword` column will begin with the string `md5` followed by a 32-character hexadecimal MD5 hash. The MD5 hash will be of the user's password concatenated to their user name. For example, if user `joe` has password `xyzzy`, PostgreSQL will store the md5 hash of `xyzzyjoe`.

If the password is encrypted with SCRAM-SHA-256, it has the format:
    
    
    SCRAM-SHA-256$_<iteration count>_:_<salt>_$_<StoredKey>_:_<ServerKey>_
    

where _`salt`_ , _`StoredKey`_ and _`ServerKey`_ are in Base64 encoded format. This format is the same as that specified by [RFC 5803](https://datatracker.ietf.org/doc/html/rfc5803).

A password that does not follow either of those formats is assumed to be unencrypted.


  
