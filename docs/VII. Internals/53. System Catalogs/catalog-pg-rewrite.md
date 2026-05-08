---
title: 53.45. `pg_rewrite`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_rewrite` stores rewrite rules for tables and views.

**Table  53.45. `pg_rewrite` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`rulename` `name` Rule name  
`ev_class` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The table this rule is for  
`ev_type` `char` Event type that the rule is for: 1 = [SELECT](</VI. Reference/I. SQL Commands/sql-select.md>)  
`ev_enabled` `char` Controls in which [session_replication_role](runtime-config-client.html#GUC-SESSION-REPLICATION-ROLE) modes the rule fires. `O` = rule fires in “origin” and “local” modes, `D` = rule is disabled, `R` = rule fires in “replica” mode, `A` = rule fires always.  
`is_instead` `bool` True if the rule is an `INSTEAD` rule  
`ev_qual` `pg_node_tree` Expression tree (in the form of a `nodeToString()` representation) for the rule's qualifying condition  
`ev_action` `pg_node_tree` Query tree (in the form of a `nodeToString()` representation) for the rule's action  
  
  


### Note

`pg_class.relhasrules` must be true if a table has any rules in this catalog.


  
