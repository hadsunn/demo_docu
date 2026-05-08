---
title: 53.58. `pg_trigger`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_trigger` stores triggers on tables and views. See [CREATE TRIGGER](</VI. Reference/I. SQL Commands/sql-createtrigger.md>) for more information.

**Table  53.58. `pg_trigger` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`tgrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The table this trigger is on  
`tgparentid` `oid` (references [`pg_trigger`](</VII. Internals/53. System Catalogs/catalog-pg-trigger.md>).`oid`) Parent trigger that this trigger is cloned from (this happens when partitions are created or attached to a partitioned table); zero if not a clone  
`tgname` `name` Trigger name (must be unique among triggers of same table)  
`tgfoid` `oid` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) The function to be called  
`tgtype` `int2` Bit mask identifying trigger firing conditions  
`tgenabled` `char` Controls in which [session_replication_role](runtime-config-client.html#GUC-SESSION-REPLICATION-ROLE) modes the trigger fires. `O` = trigger fires in “origin” and “local” modes, `D` = trigger is disabled, `R` = trigger fires in “replica” mode, `A` = trigger fires always.  
`tgisinternal` `bool` True if trigger is internally generated (usually, to enforce the constraint identified by `tgconstraint`)  
`tgconstrrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The table referenced by a referential integrity constraint (zero if trigger is not for a referential integrity constraint)  
`tgconstrindid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The index supporting a unique, primary key, referential integrity, or exclusion constraint (zero if trigger is not for one of these types of constraint)  
`tgconstraint` `oid` (references [`pg_constraint`](</VII. Internals/53. System Catalogs/catalog-pg-constraint.md>) entry associated with the trigger (zero if trigger is not for a constraint)  
`tgdeferrable` `bool` True if constraint trigger is deferrable  
`tginitdeferred` `bool` True if constraint trigger is initially deferred  
`tgnargs` `int2` Number of argument strings passed to trigger function  
`tgattr` `int2vector` (references [`pg_attribute`](</VII. Internals/53. System Catalogs/catalog-pg-attribute.md>).`attnum`) Column numbers, if trigger is column-specific; otherwise an empty array  
`tgargs` `bytea` Argument strings to pass to trigger, each NULL-terminated  
`tgqual` `pg_node_tree` Expression tree (in `nodeToString()` representation) for the trigger's `WHEN` condition, or null if none  
`tgoldtable` `name` `REFERENCING` clause name for `OLD TABLE`, or null if none  
`tgnewtable` `name` `REFERENCING` clause name for `NEW TABLE`, or null if none  
  
  


Currently, column-specific triggering is supported only for `UPDATE` events, and so `tgattr` is relevant only for that event type. `tgtype` might contain bits for other event types as well, but those are presumed to be table-wide regardless of what is in `tgattr`.

### Note

When `tgconstraint` is nonzero, `tgconstrrelid`, `tgconstrindid`, `tgdeferrable`, and `tginitdeferred` are largely redundant with the referenced [`pg_constraint`](</VII. Internals/53. System Catalogs/catalog-pg-constraint.md>) entry. However, it is possible for a non-deferrable trigger to be associated with a deferrable constraint: foreign key constraints can have some deferrable and some non-deferrable triggers.

### Note

`pg_class.relhastriggers` must be true if a relation has any triggers in this catalog.


  
