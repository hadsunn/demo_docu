---
title: 37.58. `udt_privileges`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `udt_privileges` identifies `USAGE` privileges granted on user-defined types to a currently enabled role or by a currently enabled role. There is one row for each combination of type, grantor, and grantee. This view shows only composite types (see under [Section 37.60](</IV. Client Interfaces/37. The Information Schema/infoschema-user-defined-types.md>) for domain privileges.

**Table  37.56. `udt_privileges` Columns**

Column Type Description  
---  
`grantor` `sql_identifier` Name of the role that granted the privilege  
`grantee` `sql_identifier` Name of the role that the privilege was granted to  
`udt_catalog` `sql_identifier` Name of the database containing the type (always the current database)  
`udt_schema` `sql_identifier` Name of the schema containing the type  
`udt_name` `sql_identifier` Name of the type  
`privilege_type` `character_data` Always `TYPE USAGE`  
`is_grantable` `yes_or_no` `YES` if the privilege is grantable, `NO` if not  
  
  



  
