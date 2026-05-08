---
title: 37.56. `triggered_update_columns`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


For triggers in the current database that specify a column list (like `UPDATE OF column1, column2`), the view `triggered_update_columns` identifies these columns. Triggers that do not specify a column list are not included in this view. Only those columns are shown that the current user owns or has some privilege other than `SELECT` on.

**Table  37.54. `triggered_update_columns` Columns**

Column Type Description  
---  
`trigger_catalog` `sql_identifier` Name of the database that contains the trigger (always the current database)  
`trigger_schema` `sql_identifier` Name of the schema that contains the trigger  
`trigger_name` `sql_identifier` Name of the trigger  
`event_object_catalog` `sql_identifier` Name of the database that contains the table that the trigger is defined on (always the current database)  
`event_object_schema` `sql_identifier` Name of the schema that contains the table that the trigger is defined on  
`event_object_table` `sql_identifier` Name of the table that the trigger is defined on  
`event_object_column` `sql_identifier` Name of the column that the trigger is defined on  
  
  



  
