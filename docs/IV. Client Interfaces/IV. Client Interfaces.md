---
title: Part IV. Client Interfaces
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  

# Part IV. Client Interfaces

This part describes the client programming interfaces distributed with PostgreSQL. Each of these chapters can be read independently. Note that there are many other programming interfaces for client programs that are distributed separately and contain their own documentation ([Appendix H](</VIII. Appendixes/H. External Projects/H. External Projects.md>)) and of course with the programming language that the interface uses.

**Table of Contents**

[34\. libpq — C Library](</IV. Client Interfaces/34. libpq — C Library/34. libpq — C Library.md>)
    

[34.1. Database Connection Control Functions](</IV. Client Interfaces/34. libpq — C Library/libpq-connect.md>)
[34.2. Connection Status Functions](</IV. Client Interfaces/34. libpq — C Library/libpq-status.md>)
[34.3. Command Execution Functions](</IV. Client Interfaces/34. libpq — C Library/libpq-exec.md>)
[34.4. Asynchronous Command Processing](</IV. Client Interfaces/34. libpq — C Library/libpq-async.md>)
[34.5. Pipeline Mode](</IV. Client Interfaces/34. libpq — C Library/libpq-pipeline-mode.md>)
[34.6. Retrieving Query Results Row-by-Row](</IV. Client Interfaces/34. libpq — C Library/libpq-single-row-mode.md>)
[34.7. Canceling Queries in Progress](</IV. Client Interfaces/34. libpq — C Library/libpq-cancel.md>)
[34.8. The Fast-Path Interface](</IV. Client Interfaces/34. libpq — C Library/libpq-fastpath.md>)
[34.9. Asynchronous Notification](</IV. Client Interfaces/34. libpq — C Library/libpq-notify.md>)
[34.10. Functions Associated with the `COPY` Command](</IV. Client Interfaces/34. libpq — C Library/libpq-copy.md>)
[34.11. Control Functions](</IV. Client Interfaces/34. libpq — C Library/libpq-control.md>)
[34.12. Miscellaneous Functions](</IV. Client Interfaces/34. libpq — C Library/libpq-misc.md>)
[34.13. Notice Processing](</IV. Client Interfaces/34. libpq — C Library/libpq-notice-processing.md>)
[34.14. Event System](</IV. Client Interfaces/34. libpq — C Library/libpq-events.md>)
[34.15. Environment Variables](</IV. Client Interfaces/34. libpq — C Library/libpq-envars.md>)
[34.16. The Password File](</IV. Client Interfaces/34. libpq — C Library/libpq-pgpass.md>)
[34.17. The Connection Service File](</IV. Client Interfaces/34. libpq — C Library/libpq-pgservice.md>)
[34.18. LDAP Lookup of Connection Parameters](</IV. Client Interfaces/34. libpq — C Library/libpq-ldap.md>)
[34.19. SSL Support](</IV. Client Interfaces/34. libpq — C Library/libpq-ssl.md>)
[34.20. Behavior in Threaded Programs](</IV. Client Interfaces/34. libpq — C Library/libpq-threading.md>)
[34.21. Building libpq Programs](</IV. Client Interfaces/34. libpq — C Library/libpq-build.md>)
[34.22. Example Programs](</IV. Client Interfaces/34. libpq — C Library/libpq-example.md>)
[35\. Large Objects](</IV. Client Interfaces/35. Large Objects/35. Large Objects.md>)
    

[35.1. Introduction](</IV. Client Interfaces/35. Large Objects/lo-intro.md>)
[35.2. Implementation Features](</IV. Client Interfaces/35. Large Objects/lo-implementation.md>)
[35.3. Client Interfaces](</IV. Client Interfaces/35. Large Objects/lo-interfaces.md>)
[35.4. Server-Side Functions](</IV. Client Interfaces/35. Large Objects/lo-funcs.md>)
[35.5. Example Program](</IV. Client Interfaces/35. Large Objects/lo-examplesect.md>)
[36\. ECPG — Embedded SQL in C](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/36. ECPG — Embedded SQL in C.md>)
    

[36.1. The Concept](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-concept.md>)
[36.2. Managing Database Connections](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-connect.md>)
[36.3. Running SQL Commands](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-commands.md>)
[36.4. Using Host Variables](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-variables.md>)
[36.5. Dynamic SQL](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-dynamic.md>)
[36.6. pgtypes Library](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-pgtypes.md>)
[36.7. Using Descriptor Areas](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-descriptors.md>)
[36.8. Error Handling](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-errors.md>)
[36.9. Preprocessor Directives](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-preproc.md>)
[36.10. Processing Embedded SQL Programs](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-process.md>)
[36.11. Library Functions](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-library.md>)
[36.12. Large Objects](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-lo.md>)
[36.13. C++ Applications](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-cpp.md>)
[36.14. Embedded SQL Commands](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/36.14. Embedded SQL Commands/36.14. Embedded SQL Commands.md>)
[36.15. Informix Compatibility Mode](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-informix-compat.md>)
[36.16. Oracle Compatibility Mode](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-oracle-compat.md>)
[36.17. Internals](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-develop.md>)
[37\. The Information Schema](</IV. Client Interfaces/37. The Information Schema/37. The Information Schema.md>)
    

[37.1. The Schema](</IV. Client Interfaces/37. The Information Schema/infoschema-schema.md>)
[37.2. Data Types](</IV. Client Interfaces/37. The Information Schema/infoschema-datatypes.md>)
[37.3. `information_schema_catalog_name`](</IV. Client Interfaces/37. The Information Schema/infoschema-information-schema-catalog-name.md>)
[37.4. `administrable_role_​authorizations`](</IV. Client Interfaces/37. The Information Schema/infoschema-administrable-role-authorizations.md>)
[37.5. `applicable_roles`](</IV. Client Interfaces/37. The Information Schema/infoschema-applicable-roles.md>)
[37.6. `attributes`](</IV. Client Interfaces/37. The Information Schema/infoschema-attributes.md>)
[37.7. `character_sets`](</IV. Client Interfaces/37. The Information Schema/infoschema-character-sets.md>)
[37.8. `check_constraint_routine_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-check-constraint-routine-usage.md>)
[37.9. `check_constraints`](</IV. Client Interfaces/37. The Information Schema/infoschema-check-constraints.md>)
[37.10. `collations`](</IV. Client Interfaces/37. The Information Schema/infoschema-collations.md>)
[37.11. `collation_character_set_​applicability`](</IV. Client Interfaces/37. The Information Schema/infoschema-collation-character-set-applicab.md>)
[37.12. `column_column_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-column-column-usage.md>)
[37.13. `column_domain_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-column-domain-usage.md>)
[37.14. `column_options`](</IV. Client Interfaces/37. The Information Schema/infoschema-column-options.md>)
[37.15. `column_privileges`](</IV. Client Interfaces/37. The Information Schema/infoschema-column-privileges.md>)
[37.16. `column_udt_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-column-udt-usage.md>)
[37.17. `columns`](</IV. Client Interfaces/37. The Information Schema/infoschema-columns.md>)
[37.18. `constraint_column_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-constraint-column-usage.md>)
[37.19. `constraint_table_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-constraint-table-usage.md>)
[37.20. `data_type_privileges`](</IV. Client Interfaces/37. The Information Schema/infoschema-data-type-privileges.md>)
[37.21. `domain_constraints`](</IV. Client Interfaces/37. The Information Schema/infoschema-domain-constraints.md>)
[37.22. `domain_udt_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-domain-udt-usage.md>)
[37.23. `domains`](</IV. Client Interfaces/37. The Information Schema/infoschema-domains.md>)
[37.24. `element_types`](</IV. Client Interfaces/37. The Information Schema/infoschema-element-types.md>)
[37.25. `enabled_roles`](</IV. Client Interfaces/37. The Information Schema/infoschema-enabled-roles.md>)
[37.26. `foreign_data_wrapper_options`](</IV. Client Interfaces/37. The Information Schema/infoschema-foreign-data-wrapper-options.md>)
[37.27. `foreign_data_wrappers`](</IV. Client Interfaces/37. The Information Schema/infoschema-foreign-data-wrappers.md>)
[37.28. `foreign_server_options`](</IV. Client Interfaces/37. The Information Schema/infoschema-foreign-server-options.md>)
[37.29. `foreign_servers`](</IV. Client Interfaces/37. The Information Schema/infoschema-foreign-servers.md>)
[37.30. `foreign_table_options`](</IV. Client Interfaces/37. The Information Schema/infoschema-foreign-table-options.md>)
[37.31. `foreign_tables`](</IV. Client Interfaces/37. The Information Schema/infoschema-foreign-tables.md>)
[37.32. `key_column_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-key-column-usage.md>)
[37.33. `parameters`](</IV. Client Interfaces/37. The Information Schema/infoschema-parameters.md>)
[37.34. `referential_constraints`](</IV. Client Interfaces/37. The Information Schema/infoschema-referential-constraints.md>)
[37.35. `role_column_grants`](</IV. Client Interfaces/37. The Information Schema/infoschema-role-column-grants.md>)
[37.36. `role_routine_grants`](</IV. Client Interfaces/37. The Information Schema/infoschema-role-routine-grants.md>)
[37.37. `role_table_grants`](</IV. Client Interfaces/37. The Information Schema/infoschema-role-table-grants.md>)
[37.38. `role_udt_grants`](</IV. Client Interfaces/37. The Information Schema/infoschema-role-udt-grants.md>)
[37.39. `role_usage_grants`](</IV. Client Interfaces/37. The Information Schema/infoschema-role-usage-grants.md>)
[37.40. `routine_column_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-routine-column-usage.md>)
[37.41. `routine_privileges`](</IV. Client Interfaces/37. The Information Schema/infoschema-routine-privileges.md>)
[37.42. `routine_routine_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-routine-routine-usage.md>)
[37.43. `routine_sequence_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-routine-sequence-usage.md>)
[37.44. `routine_table_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-routine-table-usage.md>)
[37.45. `routines`](</IV. Client Interfaces/37. The Information Schema/infoschema-routines.md>)
[37.46. `schemata`](</IV. Client Interfaces/37. The Information Schema/infoschema-schemata.md>)
[37.47. `sequences`](</IV. Client Interfaces/37. The Information Schema/infoschema-sequences.md>)
[37.48. `sql_features`](</IV. Client Interfaces/37. The Information Schema/infoschema-sql-features.md>)
[37.49. `sql_implementation_info`](</IV. Client Interfaces/37. The Information Schema/infoschema-sql-implementation-info.md>)
[37.50. `sql_parts`](</IV. Client Interfaces/37. The Information Schema/infoschema-sql-parts.md>)
[37.51. `sql_sizing`](</IV. Client Interfaces/37. The Information Schema/infoschema-sql-sizing.md>)
[37.52. `table_constraints`](</IV. Client Interfaces/37. The Information Schema/infoschema-table-constraints.md>)
[37.53. `table_privileges`](</IV. Client Interfaces/37. The Information Schema/infoschema-table-privileges.md>)
[37.54. `tables`](</IV. Client Interfaces/37. The Information Schema/infoschema-tables.md>)
[37.55. `transforms`](</IV. Client Interfaces/37. The Information Schema/infoschema-transforms.md>)
[37.56. `triggered_update_columns`](</IV. Client Interfaces/37. The Information Schema/infoschema-triggered-update-columns.md>)
[37.57. `triggers`](</IV. Client Interfaces/37. The Information Schema/infoschema-triggers.md>)
[37.58. `udt_privileges`](</IV. Client Interfaces/37. The Information Schema/infoschema-udt-privileges.md>)
[37.59. `usage_privileges`](</IV. Client Interfaces/37. The Information Schema/infoschema-usage-privileges.md>)
[37.60. `user_defined_types`](</IV. Client Interfaces/37. The Information Schema/infoschema-user-defined-types.md>)
[37.61. `user_mapping_options`](</IV. Client Interfaces/37. The Information Schema/infoschema-user-mapping-options.md>)
[37.62. `user_mappings`](</IV. Client Interfaces/37. The Information Schema/infoschema-user-mappings.md>)
[37.63. `view_column_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-view-column-usage.md>)
[37.64. `view_routine_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-view-routine-usage.md>)
[37.65. `view_table_usage`](</IV. Client Interfaces/37. The Information Schema/infoschema-view-table-usage.md>)
[37.66. `views`](</IV. Client Interfaces/37. The Information Schema/infoschema-views.md>)


  
