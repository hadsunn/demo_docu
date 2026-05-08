---
title: 53.21. `pg_event_trigger`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_event_trigger` stores event triggers. See [Chapter 40](</V. Server Programming/40. Event Triggers/40. Event Triggers.md>) for more information.

**Table  53.21. `pg_event_trigger` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`evtname` `name` Trigger name (must be unique)  
`evtevent` `name` Identifies the event for which this trigger fires  
`evtowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the event trigger  
`evtfoid` `oid` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) The function to be called  
`evtenabled` `char` Controls in which [session_replication_role](runtime-config-client.html#GUC-SESSION-REPLICATION-ROLE) modes the event trigger fires. `O` = trigger fires in “origin” and “local” modes, `D` = trigger is disabled, `R` = trigger fires in “replica” mode, `A` = trigger fires always.  
`evttags` `text[]` Command tags for which this trigger will fire. If NULL, the firing of this trigger is not restricted on the basis of the command tag.  
  
  



  
