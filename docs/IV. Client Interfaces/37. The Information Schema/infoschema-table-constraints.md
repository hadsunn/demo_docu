---
title: 37.52. `table_constraints`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `table_constraints` contains all constraints belonging to tables that the current user owns or has some privilege other than `SELECT` on.

**Table  37.50. `table_constraints` Columns**

Column Type Description  
---  
`constraint_catalog` `sql_identifier` Name of the database that contains the constraint (always the current database)  
`constraint_schema` `sql_identifier` Name of the schema that contains the constraint  
`constraint_name` `sql_identifier` Name of the constraint  
`table_catalog` `sql_identifier` Name of the database that contains the table (always the current database)  
`table_schema` `sql_identifier` Name of the schema that contains the table  
`table_name` `sql_identifier` Name of the table  
`constraint_type` `character_data` Type of the constraint: `CHECK`, `FOREIGN KEY`, `PRIMARY KEY`, or `UNIQUE`  
`is_deferrable` `yes_or_no` `YES` if the constraint is deferrable, `NO` if not  
`initially_deferred` `yes_or_no` `YES` if the constraint is deferrable and initially deferred, `NO` if not  
`enforced` `yes_or_no` Applies to a feature not available in PostgreSQL (currently always `YES`)  
`nulls_distinct` `yes_or_no` If the constraint is a unique constraint, then `YES` if the constraint treats nulls as distinct or `NO` if it treats nulls as not distinct, otherwise null for other types of constraints.  
  
  



  
