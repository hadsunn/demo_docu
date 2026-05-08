---
title: 37.9. `check_constraints`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `check_constraints` contains all check constraints, either defined on a table or on a domain, that are owned by a currently enabled role. (The owner of the table or domain is the owner of the constraint.)

**Table  37.7. `check_constraints` Columns**

Column Type Description  
---  
`constraint_catalog` `sql_identifier` Name of the database containing the constraint (always the current database)  
`constraint_schema` `sql_identifier` Name of the schema containing the constraint  
`constraint_name` `sql_identifier` Name of the constraint  
`check_clause` `character_data` The check expression of the check constraint  
  
  



  
