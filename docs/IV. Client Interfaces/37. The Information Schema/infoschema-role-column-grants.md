---
title: 37.35. `role_column_grants`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `role_column_grants` identifies all privileges granted on columns where the grantor or grantee is a currently enabled role. Further information can be found under `column_privileges`. The only effective difference between this view and `column_privileges` is that this view omits columns that have been made accessible to the current user by way of a grant to `PUBLIC`.

**Table  37.33. `role_column_grants` Columns**

Column Type Description  
---  
`grantor` `sql_identifier` Name of the role that granted the privilege  
`grantee` `sql_identifier` Name of the role that the privilege was granted to  
`table_catalog` `sql_identifier` Name of the database that contains the table that contains the column (always the current database)  
`table_schema` `sql_identifier` Name of the schema that contains the table that contains the column  
`table_name` `sql_identifier` Name of the table that contains the column  
`column_name` `sql_identifier` Name of the column  
`privilege_type` `character_data` Type of the privilege: `SELECT`, `INSERT`, `UPDATE`, or `REFERENCES`  
`is_grantable` `yes_or_no` `YES` if the privilege is grantable, `NO` if not  
  
  



  
