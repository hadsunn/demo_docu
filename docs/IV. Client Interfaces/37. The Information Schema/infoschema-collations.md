---
title: 37.10. `collations`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `collations` contains the collations available in the current database.

**Table  37.8. `collations` Columns**

Column Type Description  
---  
`collation_catalog` `sql_identifier` Name of the database containing the collation (always the current database)  
`collation_schema` `sql_identifier` Name of the schema containing the collation  
`collation_name` `sql_identifier` Name of the default collation  
`pad_attribute` `character_data` Always `NO PAD` (The alternative `PAD SPACE` is not supported by PostgreSQL.)  
  
  



  
