---
title: 37.26. `foreign_data_wrapper_options`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `foreign_data_wrapper_options` contains all the options defined for foreign-data wrappers in the current database. Only those foreign-data wrappers are shown that the current user has access to (by way of being the owner or having some privilege).

**Table  37.24. `foreign_data_wrapper_options` Columns**

Column Type Description  
---  
`foreign_data_wrapper_catalog` `sql_identifier` Name of the database that the foreign-data wrapper is defined in (always the current database)  
`foreign_data_wrapper_name` `sql_identifier` Name of the foreign-data wrapper  
`option_name` `sql_identifier` Name of an option  
`option_value` `character_data` Value of the option  
  
  



  
