---
title: Part VII. Internals
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  

# Part VII. Internals

This part contains assorted information that might be of use to PostgreSQL developers.

**Table of Contents**

[52\. Overview of PostgreSQL Internals](</VII. Internals/52. Overview of PostgreSQL Internals/52. Overview of PostgreSQL Internals.md>)
    

[52.1. The Path of a Query](</VII. Internals/52. Overview of PostgreSQL Internals/query-path.md>)
[52.2. How Connections Are Established](</VII. Internals/52. Overview of PostgreSQL Internals/connect-estab.md>)
[52.3. The Parser Stage](</VII. Internals/52. Overview of PostgreSQL Internals/parser-stage.md>)
[52.4. The PostgreSQL Rule System](</VII. Internals/52. Overview of PostgreSQL Internals/rule-system.md>)
[52.5. Planner/Optimizer](</VII. Internals/52. Overview of PostgreSQL Internals/planner-optimizer.md>)
[52.6. Executor](</VII. Internals/52. Overview of PostgreSQL Internals/executor.md>)
[53\. System Catalogs](</VII. Internals/53. System Catalogs/53. System Catalogs.md>)
    

[53.1. Overview](</VII. Internals/53. System Catalogs/catalogs-overview.md>)
[53.2. `pg_aggregate`](</VII. Internals/53. System Catalogs/catalog-pg-aggregate.md>)
[53.3. `pg_am`](</VII. Internals/53. System Catalogs/catalog-pg-am.md>)
[53.4. `pg_amop`](</VII. Internals/53. System Catalogs/catalog-pg-amop.md>)
[53.5. `pg_amproc`](</VII. Internals/53. System Catalogs/catalog-pg-amproc.md>)
[53.6. `pg_attrdef`](</VII. Internals/53. System Catalogs/catalog-pg-attrdef.md>)
[53.7. `pg_attribute`](</VII. Internals/53. System Catalogs/catalog-pg-attribute.md>)
[53.8. `pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>)
[53.9. `pg_auth_members`](</VII. Internals/53. System Catalogs/catalog-pg-auth-members.md>)
[53.10. `pg_cast`](</VII. Internals/53. System Catalogs/catalog-pg-cast.md>)
[53.11. `pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>)
[53.12. `pg_collation`](</VII. Internals/53. System Catalogs/catalog-pg-collation.md>)
[53.13. `pg_constraint`](</VII. Internals/53. System Catalogs/catalog-pg-constraint.md>)
[53.14. `pg_conversion`](</VII. Internals/53. System Catalogs/catalog-pg-conversion.md>)
[53.15. `pg_database`](</VII. Internals/53. System Catalogs/catalog-pg-database.md>)
[53.16. `pg_db_role_setting`](</VII. Internals/53. System Catalogs/catalog-pg-db-role-setting.md>)
[53.17. `pg_default_acl`](</VII. Internals/53. System Catalogs/catalog-pg-default-acl.md>)
[53.18. `pg_depend`](</VII. Internals/53. System Catalogs/catalog-pg-depend.md>)
[53.19. `pg_description`](</VII. Internals/53. System Catalogs/catalog-pg-description.md>)
[53.20. `pg_enum`](</VII. Internals/53. System Catalogs/catalog-pg-enum.md>)
[53.21. `pg_event_trigger`](</VII. Internals/53. System Catalogs/catalog-pg-event-trigger.md>)
[53.22. `pg_extension`](</VII. Internals/53. System Catalogs/catalog-pg-extension.md>)
[53.23. `pg_foreign_data_wrapper`](</VII. Internals/53. System Catalogs/catalog-pg-foreign-data-wrapper.md>)
[53.24. `pg_foreign_server`](</VII. Internals/53. System Catalogs/catalog-pg-foreign-server.md>)
[53.25. `pg_foreign_table`](</VII. Internals/53. System Catalogs/catalog-pg-foreign-table.md>)
[53.26. `pg_index`](</VII. Internals/53. System Catalogs/catalog-pg-index.md>)
[53.27. `pg_inherits`](</VII. Internals/53. System Catalogs/catalog-pg-inherits.md>)
[53.28. `pg_init_privs`](</VII. Internals/53. System Catalogs/catalog-pg-init-privs.md>)
[53.29. `pg_language`](</VII. Internals/53. System Catalogs/catalog-pg-language.md>)
[53.30. `pg_largeobject`](</VII. Internals/53. System Catalogs/catalog-pg-largeobject.md>)
[53.31. `pg_largeobject_metadata`](</VII. Internals/53. System Catalogs/catalog-pg-largeobject-metadata.md>)
[53.32. `pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>)
[53.33. `pg_opclass`](</VII. Internals/53. System Catalogs/catalog-pg-opclass.md>)
[53.34. `pg_operator`](</VII. Internals/53. System Catalogs/catalog-pg-operator.md>)
[53.35. `pg_opfamily`](</VII. Internals/53. System Catalogs/catalog-pg-opfamily.md>)
[53.36. `pg_parameter_acl`](</VII. Internals/53. System Catalogs/catalog-pg-parameter-acl.md>)
[53.37. `pg_partitioned_table`](</VII. Internals/53. System Catalogs/catalog-pg-partitioned-table.md>)
[53.38. `pg_policy`](</VII. Internals/53. System Catalogs/catalog-pg-policy.md>)
[53.39. `pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>)
[53.40. `pg_publication`](</VII. Internals/53. System Catalogs/catalog-pg-publication.md>)
[53.41. `pg_publication_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-publication-namespace.md>)
[53.42. `pg_publication_rel`](</VII. Internals/53. System Catalogs/catalog-pg-publication-rel.md>)
[53.43. `pg_range`](</VII. Internals/53. System Catalogs/catalog-pg-range.md>)
[53.44. `pg_replication_origin`](</VII. Internals/53. System Catalogs/catalog-pg-replication-origin.md>)
[53.45. `pg_rewrite`](</VII. Internals/53. System Catalogs/catalog-pg-rewrite.md>)
[53.46. `pg_seclabel`](</VII. Internals/53. System Catalogs/catalog-pg-seclabel.md>)
[53.47. `pg_sequence`](</VII. Internals/53. System Catalogs/catalog-pg-sequence.md>)
[53.48. `pg_shdepend`](</VII. Internals/53. System Catalogs/catalog-pg-shdepend.md>)
[53.49. `pg_shdescription`](</VII. Internals/53. System Catalogs/catalog-pg-shdescription.md>)
[53.50. `pg_shseclabel`](</VII. Internals/53. System Catalogs/catalog-pg-shseclabel.md>)
[53.51. `pg_statistic`](</VII. Internals/53. System Catalogs/catalog-pg-statistic.md>)
[53.52. `pg_statistic_ext`](</VII. Internals/53. System Catalogs/catalog-pg-statistic-ext.md>)
[53.53. `pg_statistic_ext_data`](</VII. Internals/53. System Catalogs/catalog-pg-statistic-ext-data.md>)
[53.54. `pg_subscription`](</VII. Internals/53. System Catalogs/catalog-pg-subscription.md>)
[53.55. `pg_subscription_rel`](</VII. Internals/53. System Catalogs/catalog-pg-subscription-rel.md>)
[53.56. `pg_tablespace`](</VII. Internals/53. System Catalogs/catalog-pg-tablespace.md>)
[53.57. `pg_transform`](</VII. Internals/53. System Catalogs/catalog-pg-transform.md>)
[53.58. `pg_trigger`](</VII. Internals/53. System Catalogs/catalog-pg-trigger.md>)
[53.59. `pg_ts_config`](</VII. Internals/53. System Catalogs/catalog-pg-ts-config.md>)
[53.60. `pg_ts_config_map`](</VII. Internals/53. System Catalogs/catalog-pg-ts-config-map.md>)
[53.61. `pg_ts_dict`](</VII. Internals/53. System Catalogs/catalog-pg-ts-dict.md>)
[53.62. `pg_ts_parser`](</VII. Internals/53. System Catalogs/catalog-pg-ts-parser.md>)
[53.63. `pg_ts_template`](</VII. Internals/53. System Catalogs/catalog-pg-ts-template.md>)
[53.64. `pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>)
[53.65. `pg_user_mapping`](</VII. Internals/53. System Catalogs/catalog-pg-user-mapping.md>)
[54\. System Views](</VII. Internals/54. System Views/54. System Views.md>)
    

[54.1. Overview](</VII. Internals/54. System Views/views-overview.md>)
[54.2. `pg_available_extensions`](</VII. Internals/54. System Views/view-pg-available-extensions.md>)
[54.3. `pg_available_extension_versions`](</VII. Internals/54. System Views/view-pg-available-extension-versions.md>)
[54.4. `pg_backend_memory_contexts`](</VII. Internals/54. System Views/view-pg-backend-memory-contexts.md>)
[54.5. `pg_config`](</VII. Internals/54. System Views/view-pg-config.md>)
[54.6. `pg_cursors`](</VII. Internals/54. System Views/view-pg-cursors.md>)
[54.7. `pg_file_settings`](</VII. Internals/54. System Views/view-pg-file-settings.md>)
[54.8. `pg_group`](</VII. Internals/54. System Views/view-pg-group.md>)
[54.9. `pg_hba_file_rules`](</VII. Internals/54. System Views/view-pg-hba-file-rules.md>)
[54.10. `pg_ident_file_mappings`](</VII. Internals/54. System Views/view-pg-ident-file-mappings.md>)
[54.11. `pg_indexes`](</VII. Internals/54. System Views/view-pg-indexes.md>)
[54.12. `pg_locks`](</VII. Internals/54. System Views/view-pg-locks.md>)
[54.13. `pg_matviews`](</VII. Internals/54. System Views/view-pg-matviews.md>)
[54.14. `pg_policies`](</VII. Internals/54. System Views/view-pg-policies.md>)
[54.15. `pg_prepared_statements`](</VII. Internals/54. System Views/view-pg-prepared-statements.md>)
[54.16. `pg_prepared_xacts`](</VII. Internals/54. System Views/view-pg-prepared-xacts.md>)
[54.17. `pg_publication_tables`](</VII. Internals/54. System Views/view-pg-publication-tables.md>)
[54.18. `pg_replication_origin_status`](</VII. Internals/54. System Views/view-pg-replication-origin-status.md>)
[54.19. `pg_replication_slots`](</VII. Internals/54. System Views/view-pg-replication-slots.md>)
[54.20. `pg_roles`](</VII. Internals/54. System Views/view-pg-roles.md>)
[54.21. `pg_rules`](</VII. Internals/54. System Views/view-pg-rules.md>)
[54.22. `pg_seclabels`](</VII. Internals/54. System Views/view-pg-seclabels.md>)
[54.23. `pg_sequences`](</VII. Internals/54. System Views/view-pg-sequences.md>)
[54.24. `pg_settings`](</VII. Internals/54. System Views/view-pg-settings.md>)
[54.25. `pg_shadow`](</VII. Internals/54. System Views/view-pg-shadow.md>)
[54.26. `pg_shmem_allocations`](</VII. Internals/54. System Views/view-pg-shmem-allocations.md>)
[54.27. `pg_stats`](</VII. Internals/54. System Views/view-pg-stats.md>)
[54.28. `pg_stats_ext`](</VII. Internals/54. System Views/view-pg-stats-ext.md>)
[54.29. `pg_stats_ext_exprs`](</VII. Internals/54. System Views/view-pg-stats-ext-exprs.md>)
[54.30. `pg_tables`](</VII. Internals/54. System Views/view-pg-tables.md>)
[54.31. `pg_timezone_abbrevs`](</VII. Internals/54. System Views/view-pg-timezone-abbrevs.md>)
[54.32. `pg_timezone_names`](</VII. Internals/54. System Views/view-pg-timezone-names.md>)
[54.33. `pg_user`](</VII. Internals/54. System Views/view-pg-user.md>)
[54.34. `pg_user_mappings`](</VII. Internals/54. System Views/view-pg-user-mappings.md>)
[54.35. `pg_views`](</VII. Internals/54. System Views/view-pg-views.md>)
[55\. Frontend/Backend Protocol](</VII. Internals/55. FrontendBackend Protocol/55. FrontendBackend Protocol.md>)
    

[55.1. Overview](</VII. Internals/55. FrontendBackend Protocol/protocol-overview.md>)
[55.2. Message Flow](</VII. Internals/55. FrontendBackend Protocol/protocol-flow.md>)
[55.3. SASL Authentication](</VII. Internals/55. FrontendBackend Protocol/sasl-authentication.md>)
[55.4. Streaming Replication Protocol](</VII. Internals/55. FrontendBackend Protocol/protocol-replication.md>)
[55.5. Logical Streaming Replication Protocol](</VII. Internals/55. FrontendBackend Protocol/protocol-logical-replication.md>)
[55.6. Message Data Types](</VII. Internals/55. FrontendBackend Protocol/protocol-message-types.md>)
[55.7. Message Formats](</VII. Internals/55. FrontendBackend Protocol/protocol-message-formats.md>)
[55.8. Error and Notice Message Fields](</VII. Internals/55. FrontendBackend Protocol/protocol-error-fields.md>)
[55.9. Logical Replication Message Formats](</VII. Internals/55. FrontendBackend Protocol/protocol-logicalrep-message-formats.md>)
[55.10. Summary of Changes since Protocol 2.0](</VII. Internals/55. FrontendBackend Protocol/protocol-changes.md>)
[56\. PostgreSQL Coding Conventions](</VII. Internals/56. PostgreSQL Coding Conventions/56. PostgreSQL Coding Conventions.md>)
    

[56.1. Formatting](</VII. Internals/56. PostgreSQL Coding Conventions/source-format.md>)
[56.2. Reporting Errors Within the Server](</VII. Internals/56. PostgreSQL Coding Conventions/error-message-reporting.md>)
[56.3. Error Message Style Guide](</VII. Internals/56. PostgreSQL Coding Conventions/error-style-guide.md>)
[56.4. Miscellaneous Coding Conventions](</VII. Internals/56. PostgreSQL Coding Conventions/source-conventions.md>)
[57\. Native Language Support](</VII. Internals/57. Native Language Support/57. Native Language Support.md>)
    

[57.1. For the Translator](</VII. Internals/57. Native Language Support/nls-translator.md>)
[57.2. For the Programmer](</VII. Internals/57. Native Language Support/nls-programmer.md>)
[58\. Writing a Procedural Language Handler](</VII. Internals/plhandler.md>)
[59\. Writing a Foreign Data Wrapper](</VII. Internals/59. Writing a Foreign Data Wrapper/59. Writing a Foreign Data Wrapper.md>)
    

[59.1. Foreign Data Wrapper Functions](</VII. Internals/59. Writing a Foreign Data Wrapper/fdw-functions.md>)
[59.2. Foreign Data Wrapper Callback Routines](</VII. Internals/59. Writing a Foreign Data Wrapper/fdw-callbacks.md>)
[59.3. Foreign Data Wrapper Helper Functions](</VII. Internals/59. Writing a Foreign Data Wrapper/fdw-helpers.md>)
[59.4. Foreign Data Wrapper Query Planning](</VII. Internals/59. Writing a Foreign Data Wrapper/fdw-planning.md>)
[59.5. Row Locking in Foreign Data Wrappers](</VII. Internals/59. Writing a Foreign Data Wrapper/fdw-row-locking.md>)
[60\. Writing a Table Sampling Method](</VII. Internals/60. Writing a Table Sampling Method/60. Writing a Table Sampling Method.md>)
    

[60.1. Sampling Method Support Functions](</VII. Internals/60. Writing a Table Sampling Method/tablesample-support-functions.md>)
[61\. Writing a Custom Scan Provider](</VII. Internals/61. Writing a Custom Scan Provider/61. Writing a Custom Scan Provider.md>)
    

[61.1. Creating Custom Scan Paths](</VII. Internals/61. Writing a Custom Scan Provider/custom-scan-path.md>)
[61.2. Creating Custom Scan Plans](</VII. Internals/61. Writing a Custom Scan Provider/custom-scan-plan.md>)
[61.3. Executing Custom Scans](</VII. Internals/61. Writing a Custom Scan Provider/custom-scan-execution.md>)
[62\. Genetic Query Optimizer](</VII. Internals/62. Genetic Query Optimizer/62. Genetic Query Optimizer.md>)
    

[62.1. Query Handling as a Complex Optimization Problem](</VII. Internals/62. Genetic Query Optimizer/geqo-intro.md>)
[62.2. Genetic Algorithms](</VII. Internals/62. Genetic Query Optimizer/geqo-intro2.md>)
[62.3. Genetic Query Optimization (GEQO) in PostgreSQL](</VII. Internals/62. Genetic Query Optimizer/geqo-pg-intro.md>)
[62.4. Further Reading](</VII. Internals/62. Genetic Query Optimizer/geqo-biblio.md>)
[63\. Table Access Method Interface Definition](</VII. Internals/tableam.md>)
[64\. Index Access Method Interface Definition](</VII. Internals/64. Index Access Method Interface Definition/64. Index Access Method Interface Definition.md>)
    

[64.1. Basic API Structure for Indexes](</VII. Internals/64. Index Access Method Interface Definition/index-api.md>)
[64.2. Index Access Method Functions](</VII. Internals/64. Index Access Method Interface Definition/index-functions.md>)
[64.3. Index Scanning](</VII. Internals/64. Index Access Method Interface Definition/index-scanning.md>)
[64.4. Index Locking Considerations](</VII. Internals/64. Index Access Method Interface Definition/index-locking.md>)
[64.5. Index Uniqueness Checks](</VII. Internals/64. Index Access Method Interface Definition/index-unique-checks.md>)
[64.6. Index Cost Estimation Functions](</VII. Internals/64. Index Access Method Interface Definition/index-cost-estimation.md>)
[65\. Generic WAL Records](</VII. Internals/generic-wal.md>)
[66\. Custom WAL Resource Managers](</VII. Internals/custom-rmgr.md>)
[67\. B-Tree Indexes](</VII. Internals/67. B-Tree Indexes/67. B-Tree Indexes.md>)
    

[67.1. Introduction](</VII. Internals/67. B-Tree Indexes/btree-intro.md>)
[67.2. Behavior of B-Tree Operator Classes](</VII. Internals/67. B-Tree Indexes/btree-behavior.md>)
[67.3. B-Tree Support Functions](</VII. Internals/67. B-Tree Indexes/btree-support-funcs.md>)
[67.4. Implementation](</VII. Internals/67. B-Tree Indexes/btree-implementation.md>)
[68\. GiST Indexes](</VII. Internals/68. GiST Indexes/68. GiST Indexes.md>)
    

[68.1. Introduction](</VII. Internals/68. GiST Indexes/gist-intro.md>)
[68.2. Built-in Operator Classes](</VII. Internals/68. GiST Indexes/gist-builtin-opclasses.md>)
[68.3. Extensibility](</VII. Internals/68. GiST Indexes/gist-extensibility.md>)
[68.4. Implementation](</VII. Internals/68. GiST Indexes/gist-implementation.md>)
[68.5. Examples](</VII. Internals/68. GiST Indexes/gist-examples.md>)
[69\. SP-GiST Indexes](</VII. Internals/69. SP-GiST Indexes/69. SP-GiST Indexes.md>)
    

[69.1. Introduction](</VII. Internals/69. SP-GiST Indexes/spgist-intro.md>)
[69.2. Built-in Operator Classes](</VII. Internals/69. SP-GiST Indexes/spgist-builtin-opclasses.md>)
[69.3. Extensibility](</VII. Internals/69. SP-GiST Indexes/spgist-extensibility.md>)
[69.4. Implementation](</VII. Internals/69. SP-GiST Indexes/spgist-implementation.md>)
[69.5. Examples](</VII. Internals/69. SP-GiST Indexes/spgist-examples.md>)
[70\. GIN Indexes](</VII. Internals/70. GIN Indexes/70. GIN Indexes.md>)
    

[70.1. Introduction](</VII. Internals/70. GIN Indexes/gin-intro.md>)
[70.2. Built-in Operator Classes](</VII. Internals/70. GIN Indexes/gin-builtin-opclasses.md>)
[70.3. Extensibility](</VII. Internals/70. GIN Indexes/gin-extensibility.md>)
[70.4. Implementation](</VII. Internals/70. GIN Indexes/gin-implementation.md>)
[70.5. GIN Tips and Tricks](</VII. Internals/70. GIN Indexes/gin-tips.md>)
[70.6. Limitations](</VII. Internals/70. GIN Indexes/gin-limit.md>)
[70.7. Examples](</VII. Internals/70. GIN Indexes/gin-examples.md>)
[71\. BRIN Indexes](</VII. Internals/71. BRIN Indexes/71. BRIN Indexes.md>)
    

[71.1. Introduction](</VII. Internals/71. BRIN Indexes/brin-intro.md>)
[71.2. Built-in Operator Classes](</VII. Internals/71. BRIN Indexes/brin-builtin-opclasses.md>)
[71.3. Extensibility](</VII. Internals/71. BRIN Indexes/brin-extensibility.md>)
[72\. Hash Indexes](</VII. Internals/72. Hash Indexes/72. Hash Indexes.md>)
    

[72.1. Overview](</VII. Internals/72. Hash Indexes/hash-intro.md>)
[72.2. Implementation](</VII. Internals/72. Hash Indexes/hash-implementation.md>)
[73\. Database Physical Storage](</VII. Internals/73. Database Physical Storage/73. Database Physical Storage.md>)
    

[73.1. Database File Layout](</VII. Internals/73. Database Physical Storage/storage-file-layout.md>)
[73.2. TOAST](</VII. Internals/73. Database Physical Storage/storage-toast.md>)
[73.3. Free Space Map](</VII. Internals/73. Database Physical Storage/storage-fsm.md>)
[73.4. Visibility Map](</VII. Internals/73. Database Physical Storage/storage-vm.md>)
[73.5. The Initialization Fork](</VII. Internals/73. Database Physical Storage/storage-init.md>)
[73.6. Database Page Layout](</VII. Internals/73. Database Physical Storage/storage-page-layout.md>)
[73.7. Heap-Only Tuples (HOT)](</VII. Internals/73. Database Physical Storage/storage-hot.md>)
[74\. Transaction Processing](</VII. Internals/74. Transaction Processing/74. Transaction Processing.md>)
    

[74.1. Transactions and Identifiers](</VII. Internals/74. Transaction Processing/transaction-id.md>)
[74.2. Transactions and Locking](</VII. Internals/74. Transaction Processing/xact-locking.md>)
[74.3. Subtransactions](</VII. Internals/74. Transaction Processing/subxacts.md>)
[74.4. Two-Phase Transactions](</VII. Internals/74. Transaction Processing/two-phase.md>)
[75\. System Catalog Declarations and Initial Contents](</VII. Internals/75. System Catalog Declarations and Initial Contents/75. System Catalog Declarations and Initial Contents.md>)
    

[75.1. System Catalog Declaration Rules](</VII. Internals/75. System Catalog Declarations and Initial Contents/system-catalog-declarations.md>)
[75.2. System Catalog Initial Data](</VII. Internals/75. System Catalog Declarations and Initial Contents/system-catalog-initial-data.md>)
[75.3. BKI File Format](</VII. Internals/75. System Catalog Declarations and Initial Contents/bki-format.md>)
[75.4. BKI Commands](</VII. Internals/75. System Catalog Declarations and Initial Contents/bki-commands.md>)
[75.5. Structure of the Bootstrap BKI File](</VII. Internals/75. System Catalog Declarations and Initial Contents/bki-structure.md>)
[75.6. BKI Example](</VII. Internals/75. System Catalog Declarations and Initial Contents/bki-example.md>)
[76\. How the Planner Uses Statistics](</VII. Internals/76. How the Planner Uses Statistics/76. How the Planner Uses Statistics.md>)
    

[76.1. Row Estimation Examples](</VII. Internals/76. How the Planner Uses Statistics/row-estimation-examples.md>)
[76.2. Multivariate Statistics Examples](</VII. Internals/76. How the Planner Uses Statistics/multivariate-statistics-examples.md>)
[76.3. Planner Statistics and Security](</VII. Internals/76. How the Planner Uses Statistics/planner-stats-security.md>)
[77\. Backup Manifest Format](</VII. Internals/77. Backup Manifest Format/77. Backup Manifest Format.md>)
    

[77.1. Backup Manifest Top-level Object](</VII. Internals/77. Backup Manifest Format/backup-manifest-toplevel.md>)
[77.2. Backup Manifest File Object](</VII. Internals/77. Backup Manifest Format/backup-manifest-files.md>)
[77.3. Backup Manifest WAL Range Object](</VII. Internals/77. Backup Manifest Format/backup-manifest-wal-ranges.md>)


  
