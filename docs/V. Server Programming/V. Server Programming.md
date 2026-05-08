---
title: Part V. Server Programming
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  

# Part V. Server Programming

This part is about extending the server functionality with user-defined functions, data types, triggers, etc. These are advanced topics which should probably be approached only after all the other user documentation about PostgreSQL has been understood. Later chapters in this part describe the server-side programming languages available in the PostgreSQL distribution as well as general issues concerning server-side programming languages. It is essential to read at least the earlier sections of [Chapter 38](</V. Server Programming/38. Extending SQL/38. Extending SQL.md>) (covering functions) before diving into the material about server-side programming languages.

**Table of Contents**

[38\. Extending SQL](</V. Server Programming/38. Extending SQL/38. Extending SQL.md>)
    

[38.1. How Extensibility Works](</V. Server Programming/38. Extending SQL/extend-how.md>)
[38.2. The PostgreSQL Type System](</V. Server Programming/38. Extending SQL/extend-type-system.md>)
[38.3. User-Defined Functions](</V. Server Programming/38. Extending SQL/xfunc.md>)
[38.4. User-Defined Procedures](</V. Server Programming/38. Extending SQL/xproc.md>)
[38.5. Query Language (SQL) Functions](</V. Server Programming/38. Extending SQL/xfunc-sql.md>)
[38.6. Function Overloading](</V. Server Programming/38. Extending SQL/xfunc-overload.md>)
[38.7. Function Volatility Categories](</V. Server Programming/38. Extending SQL/xfunc-volatility.md>)
[38.8. Procedural Language Functions](</V. Server Programming/38. Extending SQL/xfunc-pl.md>)
[38.9. Internal Functions](</V. Server Programming/38. Extending SQL/xfunc-internal.md>)
[38.10. C-Language Functions](</V. Server Programming/38. Extending SQL/xfunc-c.md>)
[38.11. Function Optimization Information](</V. Server Programming/38. Extending SQL/xfunc-optimization.md>)
[38.12. User-Defined Aggregates](</V. Server Programming/38. Extending SQL/xaggr.md>)
[38.13. User-Defined Types](</V. Server Programming/38. Extending SQL/xtypes.md>)
[38.14. User-Defined Operators](</V. Server Programming/38. Extending SQL/xoper.md>)
[38.15. Operator Optimization Information](</V. Server Programming/38. Extending SQL/xoper-optimization.md>)
[38.16. Interfacing Extensions to Indexes](</V. Server Programming/38. Extending SQL/xindex.md>)
[38.17. Packaging Related Objects into an Extension](</V. Server Programming/38. Extending SQL/extend-extensions.md>)
[38.18. Extension Building Infrastructure](</V. Server Programming/38. Extending SQL/extend-pgxs.md>)
[39\. Triggers](</V. Server Programming/39. Triggers/39. Triggers.md>)
    

[39.1. Overview of Trigger Behavior](</V. Server Programming/39. Triggers/trigger-definition.md>)
[39.2. Visibility of Data Changes](</V. Server Programming/39. Triggers/trigger-datachanges.md>)
[39.3. Writing Trigger Functions in C](</V. Server Programming/39. Triggers/trigger-interface.md>)
[39.4. A Complete Trigger Example](</V. Server Programming/39. Triggers/trigger-example.md>)
[40\. Event Triggers](</V. Server Programming/40. Event Triggers/40. Event Triggers.md>)
    

[40.1. Overview of Event Trigger Behavior](</V. Server Programming/40. Event Triggers/event-trigger-definition.md>)
[40.2. Event Trigger Firing Matrix](</V. Server Programming/40. Event Triggers/event-trigger-matrix.md>)
[40.3. Writing Event Trigger Functions in C](</V. Server Programming/40. Event Triggers/event-trigger-interface.md>)
[40.4. A Complete Event Trigger Example](</V. Server Programming/40. Event Triggers/event-trigger-example.md>)
[40.5. A Table Rewrite Event Trigger Example](</V. Server Programming/40. Event Triggers/event-trigger-table-rewrite-example.md>)
[41\. The Rule System](</V. Server Programming/41. The Rule System/41. The Rule System.md>)
    

[41.1. The Query Tree](</V. Server Programming/41. The Rule System/querytree.md>)
[41.2. Views and the Rule System](</V. Server Programming/41. The Rule System/rules-views.md>)
[41.3. Materialized Views](</V. Server Programming/41. The Rule System/rules-materializedviews.md>)
[41.4. Rules on `INSERT`, `UPDATE`, and `DELETE`](</V. Server Programming/41. The Rule System/rules-update.md>)
[41.5. Rules and Privileges](</V. Server Programming/41. The Rule System/rules-privileges.md>)
[41.6. Rules and Command Status](</V. Server Programming/41. The Rule System/rules-status.md>)
[41.7. Rules Versus Triggers](</V. Server Programming/41. The Rule System/rules-triggers.md>)
[42\. Procedural Languages](</V. Server Programming/42. Procedural Languages/42. Procedural Languages.md>)
    

[42.1. Installing Procedural Languages](</V. Server Programming/42. Procedural Languages/xplang-install.md>)
[43\. PL/pgSQL — SQL Procedural Language](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/43. PLpgSQL — SQL Procedural Language.md>)
    

[43.1. Overview](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-overview.md>)
[43.2. Structure of PL/pgSQL](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-structure.md>)
[43.3. Declarations](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-declarations.md>)
[43.4. Expressions](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-expressions.md>)
[43.5. Basic Statements](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-statements.md>)
[43.6. Control Structures](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-control-structures.md>)
[43.7. Cursors](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-cursors.md>)
[43.8. Transaction Management](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-transactions.md>)
[43.9. Errors and Messages](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-errors-and-messages.md>)
[43.10. Trigger Functions](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-trigger.md>)
[43.11. PL/pgSQL under the Hood](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-implementation.md>)
[43.12. Tips for Developing in PL/pgSQL](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-development-tips.md>)
[43.13. Porting from Oracle PL/SQL](</V. Server Programming/43. PLpgSQL — SQL Procedural Language/plpgsql-porting.md>)
[44\. PL/Tcl — Tcl Procedural Language](</V. Server Programming/44. PLTcl — Tcl Procedural Language/44. PLTcl — Tcl Procedural Language.md>)
    

[44.1. Overview](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-overview.md>)
[44.2. PL/Tcl Functions and Arguments](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-functions.md>)
[44.3. Data Values in PL/Tcl](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-data.md>)
[44.4. Global Data in PL/Tcl](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-global.md>)
[44.5. Database Access from PL/Tcl](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-dbaccess.md>)
[44.6. Trigger Functions in PL/Tcl](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-trigger.md>)
[44.7. Event Trigger Functions in PL/Tcl](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-event-trigger.md>)
[44.8. Error Handling in PL/Tcl](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-error-handling.md>)
[44.9. Explicit Subtransactions in PL/Tcl](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-subtransactions.md>)
[44.10. Transaction Management](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-transactions.md>)
[44.11. PL/Tcl Configuration](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-config.md>)
[44.12. Tcl Procedure Names](</V. Server Programming/44. PLTcl — Tcl Procedural Language/pltcl-procnames.md>)
[45\. PL/Perl — Perl Procedural Language](</V. Server Programming/45. PLPerl — Perl Procedural Language/45. PLPerl — Perl Procedural Language.md>)
    

[45.1. PL/Perl Functions and Arguments](</V. Server Programming/45. PLPerl — Perl Procedural Language/plperl-funcs.md>)
[45.2. Data Values in PL/Perl](</V. Server Programming/45. PLPerl — Perl Procedural Language/plperl-data.md>)
[45.3. Built-in Functions](</V. Server Programming/45. PLPerl — Perl Procedural Language/plperl-builtins.md>)
[45.4. Global Values in PL/Perl](</V. Server Programming/45. PLPerl — Perl Procedural Language/plperl-global.md>)
[45.5. Trusted and Untrusted PL/Perl](</V. Server Programming/45. PLPerl — Perl Procedural Language/plperl-trusted.md>)
[45.6. PL/Perl Triggers](</V. Server Programming/45. PLPerl — Perl Procedural Language/plperl-triggers.md>)
[45.7. PL/Perl Event Triggers](</V. Server Programming/45. PLPerl — Perl Procedural Language/plperl-event-triggers.md>)
[45.8. PL/Perl Under the Hood](</V. Server Programming/45. PLPerl — Perl Procedural Language/plperl-under-the-hood.md>)
[46\. PL/Python — Python Procedural Language](</V. Server Programming/46. PLPython — Python Procedural Language/46. PLPython — Python Procedural Language.md>)
    

[46.1. PL/Python Functions](</V. Server Programming/46. PLPython — Python Procedural Language/plpython-funcs.md>)
[46.2. Data Values](</V. Server Programming/46. PLPython — Python Procedural Language/plpython-data.md>)
[46.3. Sharing Data](</V. Server Programming/46. PLPython — Python Procedural Language/plpython-sharing.md>)
[46.4. Anonymous Code Blocks](</V. Server Programming/46. PLPython — Python Procedural Language/plpython-do.md>)
[46.5. Trigger Functions](</V. Server Programming/46. PLPython — Python Procedural Language/plpython-trigger.md>)
[46.6. Database Access](</V. Server Programming/46. PLPython — Python Procedural Language/plpython-database.md>)
[46.7. Explicit Subtransactions](</V. Server Programming/46. PLPython — Python Procedural Language/plpython-subtransaction.md>)
[46.8. Transaction Management](</V. Server Programming/46. PLPython — Python Procedural Language/plpython-transactions.md>)
[46.9. Utility Functions](</V. Server Programming/46. PLPython — Python Procedural Language/plpython-util.md>)
[46.10. Python 2 vs. Python 3](</V. Server Programming/46. PLPython — Python Procedural Language/plpython-python23.md>)
[46.11. Environment Variables](</V. Server Programming/46. PLPython — Python Procedural Language/plpython-envar.md>)
[47\. Server Programming Interface](</V. Server Programming/47. Server Programming Interface/47. Server Programming Interface.md>)
    

[47.1. Interface Functions](</V. Server Programming/47. Server Programming Interface/47.1. Interface Functions/47.1. Interface Functions.md>)
[47.2. Interface Support Functions](</V. Server Programming/47. Server Programming Interface/47.2. Interface Support Functions/47.2. Interface Support Functions.md>)
[47.3. Memory Management](</V. Server Programming/47. Server Programming Interface/47.3. Memory Management/47.3. Memory Management.md>)
[47.4. Transaction Management](</V. Server Programming/47. Server Programming Interface/47.4. Transaction Management/47.4. Transaction Management.md>)
[47.5. Visibility of Data Changes](</V. Server Programming/47. Server Programming Interface/spi-visibility.md>)
[47.6. Examples](</V. Server Programming/47. Server Programming Interface/spi-examples.md>)
[48\. Background Worker Processes](</V. Server Programming/bgworker.md>)
[49\. Logical Decoding](</V. Server Programming/49. Logical Decoding/49. Logical Decoding.md>)
    

[49.1. Logical Decoding Examples](</V. Server Programming/49. Logical Decoding/logicaldecoding-example.md>)
[49.2. Logical Decoding Concepts](</V. Server Programming/49. Logical Decoding/logicaldecoding-explanation.md>)
[49.3. Streaming Replication Protocol Interface](</V. Server Programming/49. Logical Decoding/logicaldecoding-walsender.md>)
[49.4. Logical Decoding SQL Interface](</V. Server Programming/49. Logical Decoding/logicaldecoding-sql.md>)
[49.5. System Catalogs Related to Logical Decoding](</V. Server Programming/49. Logical Decoding/logicaldecoding-catalogs.md>)
[49.6. Logical Decoding Output Plugins](</V. Server Programming/49. Logical Decoding/logicaldecoding-output-plugin.md>)
[49.7. Logical Decoding Output Writers](</V. Server Programming/49. Logical Decoding/logicaldecoding-writer.md>)
[49.8. Synchronous Replication Support for Logical Decoding](</V. Server Programming/49. Logical Decoding/logicaldecoding-synchronous.md>)
[49.9. Streaming of Large Transactions for Logical Decoding](</V. Server Programming/49. Logical Decoding/logicaldecoding-streaming.md>)
[49.10. Two-phase Commit Support for Logical Decoding](</V. Server Programming/49. Logical Decoding/logicaldecoding-two-phase-commits.md>)
[50\. Replication Progress Tracking](</V. Server Programming/replication-origins.md>)
[51\. Archive Modules](</V. Server Programming/51. Archive Modules/51. Archive Modules.md>)
    

[51.1. Initialization Functions](</V. Server Programming/51. Archive Modules/archive-module-init.md>)
[51.2. Archive Module Callbacks](</V. Server Programming/51. Archive Modules/archive-module-callbacks.md>)


  
