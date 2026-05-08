---
title: 53.1. Overview
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[Table 53.1](catalogs-overview.html#CATALOG-TABLE "Table 53.1. System Catalogs") lists the system catalogs. More detailed documentation of each catalog follows below.

Most system catalogs are copied from the template database during database creation and are thereafter database-specific. A few catalogs are physically shared across all databases in a cluster; these are noted in the descriptions of the individual catalogs.

**Table  53.1. System Catalogs**

Catalog Name | Purpose  
[`pg_aggregate`](</VII. Internals/53. System Catalogs/catalog-pg-aggregate.md>) | aggregate functions  
[`pg_am`](</VII. Internals/53. System Catalogs/catalog-pg-am.md>) | relation access methods  
[`pg_amop`](</VII. Internals/53. System Catalogs/catalog-pg-amop.md>) | access method operators  
[`pg_amproc`](</VII. Internals/53. System Catalogs/catalog-pg-amproc.md>) | access method support functions  
[`pg_attrdef`](</VII. Internals/53. System Catalogs/catalog-pg-attrdef.md>) | column default values  
[`pg_attribute`](</VII. Internals/53. System Catalogs/catalog-pg-attribute.md>) | table columns (“attributes”)  
[`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>) | authorization identifiers (roles)  
[`pg_auth_members`](</VII. Internals/53. System Catalogs/catalog-pg-auth-members.md>) | authorization identifier membership relationships  
[`pg_cast`](</VII. Internals/53. System Catalogs/catalog-pg-cast.md>) | casts (data type conversions)  
[`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>) | tables, indexes, sequences, views (“relations”)  
[`pg_collation`](</VII. Internals/53. System Catalogs/catalog-pg-collation.md>) | collations (locale information)  
[`pg_constraint`](</VII. Internals/53. System Catalogs/catalog-pg-constraint.md>) | check constraints, unique constraints, primary key constraints, foreign key constraints  
[`pg_conversion`](</VII. Internals/53. System Catalogs/catalog-pg-conversion.md>) | encoding conversion information  
[`pg_database`](</VII. Internals/53. System Catalogs/catalog-pg-database.md>) | databases within this database cluster  
[`pg_db_role_setting`](</VII. Internals/53. System Catalogs/catalog-pg-db-role-setting.md>) | per-role and per-database settings  
[`pg_default_acl`](</VII. Internals/53. System Catalogs/catalog-pg-default-acl.md>) | default privileges for object types  
[`pg_depend`](</VII. Internals/53. System Catalogs/catalog-pg-depend.md>) | dependencies between database objects  
[`pg_description`](</VII. Internals/53. System Catalogs/catalog-pg-description.md>) | descriptions or comments on database objects  
[`pg_enum`](</VII. Internals/53. System Catalogs/catalog-pg-enum.md>) | enum label and value definitions  
[`pg_event_trigger`](</VII. Internals/53. System Catalogs/catalog-pg-event-trigger.md>) | event triggers  
[`pg_extension`](</VII. Internals/53. System Catalogs/catalog-pg-extension.md>) | installed extensions  
[`pg_foreign_data_wrapper`](</VII. Internals/53. System Catalogs/catalog-pg-foreign-data-wrapper.md>) | foreign-data wrapper definitions  
[`pg_foreign_server`](</VII. Internals/53. System Catalogs/catalog-pg-foreign-server.md>) | foreign server definitions  
[`pg_foreign_table`](</VII. Internals/53. System Catalogs/catalog-pg-foreign-table.md>) | additional foreign table information  
[`pg_index`](</VII. Internals/53. System Catalogs/catalog-pg-index.md>) | additional index information  
[`pg_inherits`](</VII. Internals/53. System Catalogs/catalog-pg-inherits.md>) | table inheritance hierarchy  
[`pg_init_privs`](</VII. Internals/53. System Catalogs/catalog-pg-init-privs.md>) | object initial privileges  
[`pg_language`](</VII. Internals/53. System Catalogs/catalog-pg-language.md>) | languages for writing functions  
[`pg_largeobject`](</VII. Internals/53. System Catalogs/catalog-pg-largeobject.md>) | data pages for large objects  
[`pg_largeobject_metadata`](</VII. Internals/53. System Catalogs/catalog-pg-largeobject-metadata.md>) | metadata for large objects  
[`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>) | schemas  
[`pg_opclass`](</VII. Internals/53. System Catalogs/catalog-pg-opclass.md>) | access method operator classes  
[`pg_operator`](</VII. Internals/53. System Catalogs/catalog-pg-operator.md>) | operators  
[`pg_opfamily`](</VII. Internals/53. System Catalogs/catalog-pg-opfamily.md>) | access method operator families  
[`pg_parameter_acl`](</VII. Internals/53. System Catalogs/catalog-pg-parameter-acl.md>) | configuration parameters for which privileges have been granted  
[`pg_partitioned_table`](</VII. Internals/53. System Catalogs/catalog-pg-partitioned-table.md>) | information about partition key of tables  
[`pg_policy`](</VII. Internals/53. System Catalogs/catalog-pg-policy.md>) | row-security policies  
[`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>) | functions and procedures  
[`pg_publication`](</VII. Internals/53. System Catalogs/catalog-pg-publication.md>) | publications for logical replication  
[`pg_publication_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-publication-namespace.md>) | schema to publication mapping  
[`pg_publication_rel`](</VII. Internals/53. System Catalogs/catalog-pg-publication-rel.md>) | relation to publication mapping  
[`pg_range`](</VII. Internals/53. System Catalogs/catalog-pg-range.md>) | information about range types  
[`pg_replication_origin`](</VII. Internals/53. System Catalogs/catalog-pg-replication-origin.md>) | registered replication origins  
[`pg_rewrite`](</VII. Internals/53. System Catalogs/catalog-pg-rewrite.md>) | query rewrite rules  
[`pg_seclabel`](</VII. Internals/53. System Catalogs/catalog-pg-seclabel.md>) | security labels on database objects  
[`pg_sequence`](</VII. Internals/53. System Catalogs/catalog-pg-sequence.md>) | information about sequences  
[`pg_shdepend`](</VII. Internals/53. System Catalogs/catalog-pg-shdepend.md>) | dependencies on shared objects  
[`pg_shdescription`](</VII. Internals/53. System Catalogs/catalog-pg-shdescription.md>) | comments on shared objects  
[`pg_shseclabel`](</VII. Internals/53. System Catalogs/catalog-pg-shseclabel.md>) | security labels on shared database objects  
[`pg_statistic`](</VII. Internals/53. System Catalogs/catalog-pg-statistic.md>) | planner statistics  
[`pg_statistic_ext`](</VII. Internals/53. System Catalogs/catalog-pg-statistic-ext.md>) | extended planner statistics (definition)  
[`pg_statistic_ext_data`](</VII. Internals/53. System Catalogs/catalog-pg-statistic-ext-data.md>) | extended planner statistics (built statistics)  
[`pg_subscription`](</VII. Internals/53. System Catalogs/catalog-pg-subscription.md>) | logical replication subscriptions  
[`pg_subscription_rel`](</VII. Internals/53. System Catalogs/catalog-pg-subscription-rel.md>) | relation state for subscriptions  
[`pg_tablespace`](</VII. Internals/53. System Catalogs/catalog-pg-tablespace.md>) | tablespaces within this database cluster  
[`pg_transform`](</VII. Internals/53. System Catalogs/catalog-pg-transform.md>) | transforms (data type to procedural language conversions)  
[`pg_trigger`](</VII. Internals/53. System Catalogs/catalog-pg-trigger.md>) | triggers  
[`pg_ts_config`](</VII. Internals/53. System Catalogs/catalog-pg-ts-config.md>) | text search configurations  
[`pg_ts_config_map`](</VII. Internals/53. System Catalogs/catalog-pg-ts-config-map.md>) | text search configurations' token mappings  
[`pg_ts_dict`](</VII. Internals/53. System Catalogs/catalog-pg-ts-dict.md>) | text search dictionaries  
[`pg_ts_parser`](</VII. Internals/53. System Catalogs/catalog-pg-ts-parser.md>) | text search parsers  
[`pg_ts_template`](</VII. Internals/53. System Catalogs/catalog-pg-ts-template.md>) | text search templates  
[`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>) | data types  
[`pg_user_mapping`](</VII. Internals/53. System Catalogs/catalog-pg-user-mapping.md>) | mappings of users to foreign servers  
  
  



  
