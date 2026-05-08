---
title: 37.39. `role_usage_grants`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `role_usage_grants` identifies `USAGE` privileges granted on various kinds of objects where the grantor or grantee is a currently enabled role. Further information can be found under `usage_privileges`. The only effective difference between this view and `usage_privileges` is that this view omits objects that have been made accessible to the current user by way of a grant to `PUBLIC`.

**Table  37.37. `role_usage_grants` Columns**

Column Type Description  
---  
`grantor` `sql_identifier` The name of the role that granted the privilege  
`grantee` `sql_identifier` The name of the role that the privilege was granted to  
`object_catalog` `sql_identifier` Name of the database containing the object (always the current database)  
`object_schema` `sql_identifier` Name of the schema containing the object, if applicable, else an empty string  
`object_name` `sql_identifier` Name of the object  
`object_type` `character_data` `COLLATION` or `DOMAIN` or `FOREIGN DATA WRAPPER` or `FOREIGN SERVER` or `SEQUENCE`  
`privilege_type` `character_data` Always `USAGE`  
`is_grantable` `yes_or_no` `YES` if the privilege is grantable, `NO` if not  
  
  



  
