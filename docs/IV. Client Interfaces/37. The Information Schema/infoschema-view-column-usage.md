---
title: 37.63. `view_column_usage`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `view_column_usage` identifies all columns that are used in the query expression of a view (the `SELECT` statement that defines the view). A column is only included if the table that contains the column is owned by a currently enabled role.

### Note

Columns of system tables are not included. This should be fixed sometime.

**Table  37.61. `view_column_usage` Columns**

Column Type Description  
---  
`view_catalog` `sql_identifier` Name of the database that contains the view (always the current database)  
`view_schema` `sql_identifier` Name of the schema that contains the view  
`view_name` `sql_identifier` Name of the view  
`table_catalog` `sql_identifier` Name of the database that contains the table that contains the column that is used by the view (always the current database)  
`table_schema` `sql_identifier` Name of the schema that contains the table that contains the column that is used by the view  
`table_name` `sql_identifier` Name of the table that contains the column that is used by the view  
`column_name` `sql_identifier` Name of the column that is used by the view  
  
  



  
