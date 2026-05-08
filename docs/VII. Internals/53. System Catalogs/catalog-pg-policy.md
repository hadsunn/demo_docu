---
title: 53.38. `pg_policy`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_policy` stores row-level security policies for tables. A policy includes the kind of command that it applies to (possibly all commands), the roles that it applies to, the expression to be added as a security-barrier qualification to queries that include the table, and the expression to be added as a `WITH CHECK` option for queries that attempt to add new records to the table.

**Table  53.38. `pg_policy` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`polname` `name` The name of the policy  
`polrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The table to which the policy applies  
`polcmd` `char` The command type to which the policy is applied: `r` for [SELECT](</VI. Reference/I. SQL Commands/sql-select.md>), or `*` for all  
`polpermissive` `bool` Is the policy permissive or restrictive?  
`polroles` `oid[]` (<references>).`oid`) The roles to which the policy is applied; zero means `PUBLIC` (and normally appears alone in the array)  
`polqual` `pg_node_tree` The expression tree to be added to the security barrier qualifications for queries that use the table  
`polwithcheck` `pg_node_tree` The expression tree to be added to the WITH CHECK qualifications for queries that attempt to add rows to the table  
  
  


### Note

Policies stored in `pg_policy` are applied only when [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relrowsecurity` is set for their table.


  
