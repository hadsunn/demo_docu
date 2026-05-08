---
title: 37.13. `column_domain_usage`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `column_domain_usage` identifies all columns (of a table or a view) that make use of some domain defined in the current database and owned by a currently enabled role.

**Table  37.11. `column_domain_usage` Columns**

Column Type Description  
---  
`domain_catalog` `sql_identifier` Name of the database containing the domain (always the current database)  
`domain_schema` `sql_identifier` Name of the schema containing the domain  
`domain_name` `sql_identifier` Name of the domain  
`table_catalog` `sql_identifier` Name of the database containing the table (always the current database)  
`table_schema` `sql_identifier` Name of the schema containing the table  
`table_name` `sql_identifier` Name of the table  
`column_name` `sql_identifier` Name of the column  
  
  



  
