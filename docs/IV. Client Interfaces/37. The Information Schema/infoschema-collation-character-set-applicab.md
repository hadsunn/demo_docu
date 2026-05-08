---
title: 37.11. `collation_character_set_​applicability`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `collation_character_set_applicability` identifies which character set the available collations are applicable to. In PostgreSQL, there is only one character set per database (see explanation in [Section 37.7](</IV. Client Interfaces/37. The Information Schema/infoschema-character-sets.md>)), so this view does not provide much useful information.

**Table  37.9. `collation_character_set_applicability` Columns**

Column Type Description  
---  
`collation_catalog` `sql_identifier` Name of the database containing the collation (always the current database)  
`collation_schema` `sql_identifier` Name of the schema containing the collation  
`collation_name` `sql_identifier` Name of the default collation  
`character_set_catalog` `sql_identifier` Character sets are currently not implemented as schema objects, so this column is null  
`character_set_schema` `sql_identifier` Character sets are currently not implemented as schema objects, so this column is null  
`character_set_name` `sql_identifier` Name of the character set  
  
  



  
