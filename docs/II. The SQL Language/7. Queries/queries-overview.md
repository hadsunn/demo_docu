---
title: 7.1. Overview
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The process of retrieving or the command to retrieve data from a database is called a _query_. In SQL the [`SELECT`](</VI. Reference/I. SQL Commands/sql-select.md>) command is used to specify queries. The general syntax of the `SELECT` command is
    
    
    [WITH _with_queries_] SELECT _select_list_ FROM _table_expression_ [_sort_specification_]
    

The following sections describe the details of the select list, the table expression, and the sort specification. `WITH` queries are treated last since they are an advanced feature.

A simple kind of query has the form:
    
    
    SELECT * FROM table1;
    

Assuming that there is a table called `table1`, this command would retrieve all rows and all user-defined columns from `table1`. (The method of retrieval depends on the client application. For example, the psql program will display an ASCII-art table on the screen, while client libraries will offer functions to extract individual values from the query result.) The select list specification `*` means all columns that the table expression happens to provide. A select list can also select a subset of the available columns or make calculations using the columns. For example, if `table1` has columns named `a`, `b`, and `c` (and perhaps others) you can make the following query:
    
    
    SELECT a, b + c FROM table1;
    

(assuming that `b` and `c` are of a numerical data type). See [Section 7.3](</II. The SQL Language/7. Queries/queries-select-lists.md>) for more details.

`FROM table1` is a simple kind of table expression: it reads just one table. In general, table expressions can be complex constructs of base tables, joins, and subqueries. But you can also omit the table expression entirely and use the `SELECT` command as a calculator:
    
    
    SELECT 3 * 4;
    

This is more useful if the expressions in the select list return varying results. For example, you could call a function this way:
    
    
    SELECT random();
    


  
