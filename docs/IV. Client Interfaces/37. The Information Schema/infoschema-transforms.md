---
title: 37.55. `transforms`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `transforms` contains information about the transforms defined in the current database. More precisely, it contains a row for each function contained in a transform (the “from SQL” or “to SQL” function).

**Table  37.53. `transforms` Columns**

Column Type Description  
---  
`udt_catalog` `sql_identifier` Name of the database that contains the type the transform is for (always the current database)  
`udt_schema` `sql_identifier` Name of the schema that contains the type the transform is for  
`udt_name` `sql_identifier` Name of the type the transform is for  
`specific_catalog` `sql_identifier` Name of the database containing the function (always the current database)  
`specific_schema` `sql_identifier` Name of the schema containing the function  
`specific_name` `sql_identifier` The “specific name” of the function. See [Section 37.45](</IV. Client Interfaces/37. The Information Schema/infoschema-routines.md>) for more information.  
`group_name` `sql_identifier` The SQL standard allows defining transforms in “groups”, and selecting a group at run time. PostgreSQL does not support this. Instead, transforms are specific to a language. As a compromise, this field contains the language the transform is for.  
`transform_type` `character_data` `FROM SQL` or `TO SQL`  
  
  



  
