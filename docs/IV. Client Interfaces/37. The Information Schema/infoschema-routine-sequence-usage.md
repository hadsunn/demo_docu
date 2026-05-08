---
title: 37.43. `routine_sequence_usage`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


---  
  


The view `routine_sequence_usage` identifies all sequences that are used by a function or procedure, either in the SQL body or in parameter default expressions. (This only works for unquoted SQL bodies, not quoted bodies or functions in other languages.) A sequence is only included if that sequence is owned by a currently enabled role.

**Table  37.41. `routine_sequence_usage` Columns**

Column Type Description  
---  
`specific_catalog` `sql_identifier` Name of the database containing the function (always the current database)  
`specific_schema` `sql_identifier` Name of the schema containing the function  
`specific_name` `sql_identifier` The “specific name” of the function. See [Section 37.45](</IV. Client Interfaces/37. The Information Schema/infoschema-routines.md>) for more information.  
`routine_catalog` `sql_identifier` Name of the database containing the function (always the current database)  
`routine_schema` `sql_identifier` Name of the schema containing the function  
`routine_name` `sql_identifier` Name of the function (might be duplicated in case of overloading)  
`schema_catalog` `sql_identifier` Name of the database that contains the sequence that is used by the function (always the current database)  
`sequence_schema` `sql_identifier` Name of the schema that contains the sequence that is used by the function  
`sequence_name` `sql_identifier` Name of the sequence that is used by the function  
  
  



  
