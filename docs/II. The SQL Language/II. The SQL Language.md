---
title: Part II. The SQL Language
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  

# Part II. The SQL Language

This part describes the use of the SQL language in PostgreSQL. We start with describing the general syntax of SQL, then explain how to create the structures to hold data, how to populate the database, and how to query it. The middle part lists the available data types and functions for use in SQL commands. The rest treats several aspects that are important for tuning a database for optimal performance.

The information in this part is arranged so that a novice user can follow it start to end to gain a full understanding of the topics without having to refer forward too many times. The chapters are intended to be self-contained, so that advanced users can read the chapters individually as they choose. The information in this part is presented in a narrative fashion in topical units. Readers looking for a complete description of a particular command should see [Part VI](</VI. Reference/VI. Reference.md>).

Readers of this part should know how to connect to a PostgreSQL database and issue SQL commands. Readers that are unfamiliar with these issues are encouraged to read [Part I](</I. Tutorial/I. Tutorial.md>) first. SQL commands are typically entered using the PostgreSQL interactive terminal psql, but other programs that have similar functionality can be used as well.

**Table of Contents**

[4\. SQL Syntax](</II. The SQL Language/4. SQL Syntax/4. SQL Syntax.md>)
    

[4.1. Lexical Structure](</II. The SQL Language/4. SQL Syntax/sql-syntax-lexical.md>)
[4.2. Value Expressions](</II. The SQL Language/4. SQL Syntax/sql-expressions.md>)
[4.3. Calling Functions](</II. The SQL Language/4. SQL Syntax/sql-syntax-calling-funcs.md>)
[5\. Data Definition](</II. The SQL Language/5. Data Definition/5. Data Definition.md>)
    

[5.1. Table Basics](</II. The SQL Language/5. Data Definition/ddl-basics.md>)
[5.2. Default Values](</II. The SQL Language/5. Data Definition/ddl-default.md>)
[5.3. Generated Columns](</II. The SQL Language/5. Data Definition/ddl-generated-columns.md>)
[5.4. Constraints](</II. The SQL Language/5. Data Definition/ddl-constraints.md>)
[5.5. System Columns](</II. The SQL Language/5. Data Definition/ddl-system-columns.md>)
[5.6. Modifying Tables](</II. The SQL Language/5. Data Definition/ddl-alter.md>)
[5.7. Privileges](</II. The SQL Language/5. Data Definition/ddl-priv.md>)
[5.8. Row Security Policies](</II. The SQL Language/5. Data Definition/ddl-rowsecurity.md>)
[5.9. Schemas](</II. The SQL Language/5. Data Definition/ddl-schemas.md>)
[5.10. Inheritance](</II. The SQL Language/5. Data Definition/ddl-inherit.md>)
[5.11. Table Partitioning](</II. The SQL Language/5. Data Definition/ddl-partitioning.md>)
[5.12. Foreign Data](</II. The SQL Language/5. Data Definition/ddl-foreign-data.md>)
[5.13. Other Database Objects](</II. The SQL Language/5. Data Definition/ddl-others.md>)
[5.14. Dependency Tracking](</II. The SQL Language/5. Data Definition/ddl-depend.md>)
[6\. Data Manipulation](</II. The SQL Language/6. Data Manipulation/6. Data Manipulation.md>)
    

[6.1. Inserting Data](</II. The SQL Language/6. Data Manipulation/dml-insert.md>)
[6.2. Updating Data](</II. The SQL Language/6. Data Manipulation/dml-update.md>)
[6.3. Deleting Data](</II. The SQL Language/6. Data Manipulation/dml-delete.md>)
[6.4. Returning Data from Modified Rows](</II. The SQL Language/6. Data Manipulation/dml-returning.md>)
[7\. Queries](</II. The SQL Language/7. Queries/7. Queries.md>)
    

[7.1. Overview](</II. The SQL Language/7. Queries/queries-overview.md>)
[7.2. Table Expressions](</II. The SQL Language/7. Queries/queries-table-expressions.md>)
[7.3. Select Lists](</II. The SQL Language/7. Queries/queries-select-lists.md>)
[7.4. Combining Queries (`UNION`, `INTERSECT`, `EXCEPT`)](</II. The SQL Language/7. Queries/queries-union.md>)
[7.5. Sorting Rows (`ORDER BY`)](</II. The SQL Language/7. Queries/queries-order.md>)
[7.6. `LIMIT` and `OFFSET`](</II. The SQL Language/7. Queries/queries-limit.md>)
[7.7. `VALUES` Lists](</II. The SQL Language/7. Queries/queries-values.md>)
[7.8. `WITH` Queries (Common Table Expressions)](</II. The SQL Language/7. Queries/queries-with.md>)
[8\. Data Types](</II. The SQL Language/8. Data Types/8. Data Types.md>)
    

[8.1. Numeric Types](</II. The SQL Language/8. Data Types/datatype-numeric.md>)
[8.2. Monetary Types](</II. The SQL Language/8. Data Types/datatype-money.md>)
[8.3. Character Types](</II. The SQL Language/8. Data Types/datatype-character.md>)
[8.4. Binary Data Types](</II. The SQL Language/8. Data Types/datatype-binary.md>)
[8.5. Date/Time Types](</II. The SQL Language/8. Data Types/datatype-datetime.md>)
[8.6. Boolean Type](</II. The SQL Language/8. Data Types/datatype-boolean.md>)
[8.7. Enumerated Types](</II. The SQL Language/8. Data Types/datatype-enum.md>)
[8.8. Geometric Types](</II. The SQL Language/8. Data Types/datatype-geometric.md>)
[8.9. Network Address Types](</II. The SQL Language/8. Data Types/datatype-net-types.md>)
[8.10. Bit String Types](</II. The SQL Language/8. Data Types/datatype-bit.md>)
[8.11. Text Search Types](</II. The SQL Language/8. Data Types/datatype-textsearch.md>)
[8.12. UUID Type](</II. The SQL Language/8. Data Types/datatype-uuid.md>)
[8.13. XML Type](</II. The SQL Language/8. Data Types/datatype-xml.md>)
[8.14. JSON Types](</II. The SQL Language/8. Data Types/datatype-json.md>)
[8.15. Arrays](</II. The SQL Language/8. Data Types/arrays.md>)
[8.16. Composite Types](</II. The SQL Language/8. Data Types/rowtypes.md>)
[8.17. Range Types](</II. The SQL Language/8. Data Types/rangetypes.md>)
[8.18. Domain Types](</II. The SQL Language/8. Data Types/domains.md>)
[8.19. Object Identifier Types](</II. The SQL Language/8. Data Types/datatype-oid.md>)
[8.20. `pg_lsn` Type](</II. The SQL Language/8. Data Types/datatype-pg-lsn.md>)
[8.21. Pseudo-Types](</II. The SQL Language/8. Data Types/datatype-pseudo.md>)
[9\. Functions and Operators](</II. The SQL Language/9. Functions and Operators/9. Functions and Operators.md>)
    

[9.1. Logical Operators](</II. The SQL Language/9. Functions and Operators/functions-logical.md>)
[9.2. Comparison Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-comparison.md>)
[9.3. Mathematical Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-math.md>)
[9.4. String Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-string.md>)
[9.5. Binary String Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-binarystring.md>)
[9.6. Bit String Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-bitstring.md>)
[9.7. Pattern Matching](</II. The SQL Language/9. Functions and Operators/functions-matching.md>)
[9.8. Data Type Formatting Functions](</II. The SQL Language/9. Functions and Operators/functions-formatting.md>)
[9.9. Date/Time Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-datetime.md>)
[9.10. Enum Support Functions](</II. The SQL Language/9. Functions and Operators/functions-enum.md>)
[9.11. Geometric Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-geometry.md>)
[9.12. Network Address Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-net.md>)
[9.13. Text Search Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-textsearch.md>)
[9.14. UUID Functions](</II. The SQL Language/9. Functions and Operators/functions-uuid.md>)
[9.15. XML Functions](</II. The SQL Language/9. Functions and Operators/functions-xml.md>)
[9.16. JSON Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-json.md>)
[9.17. Sequence Manipulation Functions](</II. The SQL Language/9. Functions and Operators/functions-sequence.md>)
[9.18. Conditional Expressions](</II. The SQL Language/9. Functions and Operators/functions-conditional.md>)
[9.19. Array Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-array.md>)
[9.20. Range/Multirange Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-range.md>)
[9.21. Aggregate Functions](</II. The SQL Language/9. Functions and Operators/functions-aggregate.md>)
[9.22. Window Functions](</II. The SQL Language/9. Functions and Operators/functions-window.md>)
[9.23. Subquery Expressions](</II. The SQL Language/9. Functions and Operators/functions-subquery.md>)
[9.24. Row and Array Comparisons](</II. The SQL Language/9. Functions and Operators/functions-comparisons.md>)
[9.25. Set Returning Functions](</II. The SQL Language/9. Functions and Operators/functions-srf.md>)
[9.26. System Information Functions and Operators](</II. The SQL Language/9. Functions and Operators/functions-info.md>)
[9.27. System Administration Functions](</II. The SQL Language/9. Functions and Operators/functions-admin.md>)
[9.28. Trigger Functions](</II. The SQL Language/9. Functions and Operators/functions-trigger.md>)
[9.29. Event Trigger Functions](</II. The SQL Language/9. Functions and Operators/functions-event-triggers.md>)
[9.30. Statistics Information Functions](</II. The SQL Language/9. Functions and Operators/functions-statistics.md>)
[10\. Type Conversion](</II. The SQL Language/10. Type Conversion/10. Type Conversion.md>)
    

[10.1. Overview](</II. The SQL Language/10. Type Conversion/typeconv-overview.md>)
[10.2. Operators](</II. The SQL Language/10. Type Conversion/typeconv-oper.md>)
[10.3. Functions](</II. The SQL Language/10. Type Conversion/typeconv-func.md>)
[10.4. Value Storage](</II. The SQL Language/10. Type Conversion/typeconv-query.md>)
[10.5. `UNION`, `CASE`, and Related Constructs](</II. The SQL Language/10. Type Conversion/typeconv-union-case.md>)
[10.6. `SELECT` Output Columns](</II. The SQL Language/10. Type Conversion/typeconv-select.md>)
[11\. Indexes](</II. The SQL Language/11. Indexes/11. Indexes.md>)
    

[11.1. Introduction](</II. The SQL Language/11. Indexes/indexes-intro.md>)
[11.2. Index Types](</II. The SQL Language/11. Indexes/indexes-types.md>)
[11.3. Multicolumn Indexes](</II. The SQL Language/11. Indexes/indexes-multicolumn.md>)
[11.4. Indexes and `ORDER BY`](</II. The SQL Language/11. Indexes/indexes-ordering.md>)
[11.5. Combining Multiple Indexes](</II. The SQL Language/11. Indexes/indexes-bitmap-scans.md>)
[11.6. Unique Indexes](</II. The SQL Language/11. Indexes/indexes-unique.md>)
[11.7. Indexes on Expressions](</II. The SQL Language/11. Indexes/indexes-expressional.md>)
[11.8. Partial Indexes](</II. The SQL Language/11. Indexes/indexes-partial.md>)
[11.9. Index-Only Scans and Covering Indexes](</II. The SQL Language/11. Indexes/indexes-index-only-scans.md>)
[11.10. Operator Classes and Operator Families](</II. The SQL Language/11. Indexes/indexes-opclass.md>)
[11.11. Indexes and Collations](</II. The SQL Language/11. Indexes/indexes-collations.md>)
[11.12. Examining Index Usage](</II. The SQL Language/11. Indexes/indexes-examine.md>)
[12\. Full Text Search](</II. The SQL Language/12. Full Text Search/12. Full Text Search.md>)
    

[12.1. Introduction](</II. The SQL Language/12. Full Text Search/textsearch-intro.md>)
[12.2. Tables and Indexes](</II. The SQL Language/12. Full Text Search/textsearch-tables.md>)
[12.3. Controlling Text Search](</II. The SQL Language/12. Full Text Search/textsearch-controls.md>)
[12.4. Additional Features](</II. The SQL Language/12. Full Text Search/textsearch-features.md>)
[12.5. Parsers](</II. The SQL Language/12. Full Text Search/textsearch-parsers.md>)
[12.6. Dictionaries](</II. The SQL Language/12. Full Text Search/textsearch-dictionaries.md>)
[12.7. Configuration Example](</II. The SQL Language/12. Full Text Search/textsearch-configuration.md>)
[12.8. Testing and Debugging Text Search](</II. The SQL Language/12. Full Text Search/textsearch-debugging.md>)
[12.9. Preferred Index Types for Text Search](</II. The SQL Language/12. Full Text Search/textsearch-indexes.md>)
[12.10. psql Support](</II. The SQL Language/12. Full Text Search/textsearch-psql.md>)
[12.11. Limitations](</II. The SQL Language/12. Full Text Search/textsearch-limitations.md>)
[13\. Concurrency Control](</II. The SQL Language/13. Concurrency Control/13. Concurrency Control.md>)
    

[13.1. Introduction](</II. The SQL Language/13. Concurrency Control/mvcc-intro.md>)
[13.2. Transaction Isolation](</II. The SQL Language/13. Concurrency Control/transaction-iso.md>)
[13.3. Explicit Locking](</II. The SQL Language/13. Concurrency Control/explicit-locking.md>)
[13.4. Data Consistency Checks at the Application Level](</II. The SQL Language/13. Concurrency Control/applevel-consistency.md>)
[13.5. Serialization Failure Handling](</II. The SQL Language/13. Concurrency Control/mvcc-serialization-failure-handling.md>)
[13.6. Caveats](</II. The SQL Language/13. Concurrency Control/mvcc-caveats.md>)
[13.7. Locking and Indexes](</II. The SQL Language/13. Concurrency Control/locking-indexes.md>)
[14\. Performance Tips](</II. The SQL Language/14. Performance Tips/14. Performance Tips.md>)
    

[14.1. Using `EXPLAIN`](</II. The SQL Language/14. Performance Tips/using-explain.md>)
[14.2. Statistics Used by the Planner](</II. The SQL Language/14. Performance Tips/planner-stats.md>)
[14.3. Controlling the Planner with Explicit `JOIN` Clauses](</II. The SQL Language/14. Performance Tips/explicit-joins.md>)
[14.4. Populating a Database](</II. The SQL Language/14. Performance Tips/populate.md>)
[14.5. Non-Durable Settings](</II. The SQL Language/14. Performance Tips/non-durability.md>)
[15\. Parallel Query](</II. The SQL Language/15. Parallel Query/15. Parallel Query.md>)
    

[15.1. How Parallel Query Works](</II. The SQL Language/15. Parallel Query/how-parallel-query-works.md>)
[15.2. When Can Parallel Query Be Used?](</II. The SQL Language/15. Parallel Query/when-can-parallel-query-be-used.md>)
[15.3. Parallel Plans](</II. The SQL Language/15. Parallel Query/parallel-plans.md>)
[15.4. Parallel Safety](</II. The SQL Language/15. Parallel Query/parallel-safety.md>)


  
