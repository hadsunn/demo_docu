---
title: 37.12. `column_column_usage`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `column_column_usage` identifies all generated columns that depend on another base column in the same table. Only tables owned by a currently enabled role are included.

**Table  37.10. `column_column_usage` Columns**

Column Type Description  
---  
`table_catalog` `sql_identifier` Name of the database containing the table (always the current database)  
`table_schema` `sql_identifier` Name of the schema containing the table  
`table_name` `sql_identifier` Name of the table  
`column_name` `sql_identifier` Name of the base column that a generated column depends on  
`dependent_column` `sql_identifier` Name of the generated column  
  
  



  
