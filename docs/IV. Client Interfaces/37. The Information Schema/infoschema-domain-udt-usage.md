---
title: 37.22. `domain_udt_usage`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `domain_udt_usage` identifies all domains that are based on data types owned by a currently enabled role. Note that in PostgreSQL, built-in data types behave like user-defined types, so they are included here as well.

**Table  37.20. `domain_udt_usage` Columns**

Column Type Description  
---  
`udt_catalog` `sql_identifier` Name of the database that the domain data type is defined in (always the current database)  
`udt_schema` `sql_identifier` Name of the schema that the domain data type is defined in  
`udt_name` `sql_identifier` Name of the domain data type  
`domain_catalog` `sql_identifier` Name of the database that contains the domain (always the current database)  
`domain_schema` `sql_identifier` Name of the schema that contains the domain  
`domain_name` `sql_identifier` Name of the domain  
  
  



  
