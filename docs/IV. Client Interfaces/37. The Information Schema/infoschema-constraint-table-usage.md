---
title: 37.19. `constraint_table_usage`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `constraint_table_usage` identifies all tables in the current database that are used by some constraint and are owned by a currently enabled role. (This is different from the view `table_constraints`, which identifies all table constraints along with the table they are defined on.) For a foreign key constraint, this view identifies the table that the foreign key references. For a unique or primary key constraint, this view simply identifies the table the constraint belongs to. Check constraints and not-null constraints are not included in this view.

**Table  37.17. `constraint_table_usage` Columns**

Column Type Description  
---  
`table_catalog` `sql_identifier` Name of the database that contains the table that is used by some constraint (always the current database)  
`table_schema` `sql_identifier` Name of the schema that contains the table that is used by some constraint  
`table_name` `sql_identifier` Name of the table that is used by some constraint  
`constraint_catalog` `sql_identifier` Name of the database that contains the constraint (always the current database)  
`constraint_schema` `sql_identifier` Name of the schema that contains the constraint  
`constraint_name` `sql_identifier` Name of the constraint  
  
  



  
