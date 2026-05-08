---
title: 54.14. `pg_policies`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_policies` provides access to useful information about each row-level security policy in the database.

**Table  54.14. `pg_policies` Columns**

Column Type Description  
---  
`schemaname` `name` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`nspname`) Name of schema containing table policy is on  
`tablename` `name` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relname`) Name of table policy is on  
`policyname` `name` (references [`pg_policy`](</VII. Internals/53. System Catalogs/catalog-pg-policy.md>).`polname`) Name of policy  
`permissive` `text` Is the policy permissive or restrictive?  
`roles` `name[]` The roles to which this policy applies  
`cmd` `text` The command type to which the policy is applied  
`qual` `text` The expression added to the security barrier qualifications for queries that this policy applies to  
`with_check` `text` The expression added to the WITH CHECK qualifications for queries that attempt to add rows to this table  
  
  



  
