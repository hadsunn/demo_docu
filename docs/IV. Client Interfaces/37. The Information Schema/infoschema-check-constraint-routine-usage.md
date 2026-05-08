---
title: 37.8. `check_constraint_routine_usage`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `check_constraint_routine_usage` identifies routines (functions and procedures) that are used by a check constraint. Only those routines are shown that are owned by a currently enabled role.

**Table  37.6. `check_constraint_routine_usage` Columns**

Column Type Description  
---  
`constraint_catalog` `sql_identifier` Name of the database containing the constraint (always the current database)  
`constraint_schema` `sql_identifier` Name of the schema containing the constraint  
`constraint_name` `sql_identifier` Name of the constraint  
`specific_catalog` `sql_identifier` Name of the database containing the function (always the current database)  
`specific_schema` `sql_identifier` Name of the schema containing the function  
`specific_name` `sql_identifier` The “specific name” of the function. See [Section 37.45](</IV. Client Interfaces/37. The Information Schema/infoschema-routines.md>) for more information.  
  
  



  
