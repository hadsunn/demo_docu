---
title: F.46. tsm_system_rows — the `SYSTEM_ROWS` sampling method for `TABLESAMPLE`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[F.46.1. Examples](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/tsm-system-rows.md#f461-examples>)



The `tsm_system_rows` module provides the table sampling method `SYSTEM_ROWS`, which can be used in the `TABLESAMPLE` clause of a [`SELECT`](</VI. Reference/I. SQL Commands/sql-select.md>) command.

This table sampling method accepts a single integer argument that is the maximum number of rows to read. The resulting sample will always contain exactly that many rows, unless the table does not contain enough rows, in which case the whole table is selected.

Like the built-in `SYSTEM` sampling method, `SYSTEM_ROWS` performs block-level sampling, so that the sample is not completely random but may be subject to clustering effects, especially if only a small number of rows are requested.

`SYSTEM_ROWS` does not support the `REPEATABLE` clause.

This module is considered “trusted”, that is, it can be installed by non-superusers who have `CREATE` privilege on the current database.

### F.46.1. Examples #

Here is an example of selecting a sample of a table with `SYSTEM_ROWS`. First install the extension:
    
    
    CREATE EXTENSION tsm_system_rows;
    

Then you can use it in a `SELECT` command, for instance:
    
    
    SELECT * FROM my_table TABLESAMPLE SYSTEM_ROWS(100);
    

This command will return a sample of 100 rows from the table `my_table` (unless the table does not have 100 visible rows, in which case all its rows are returned).


  
