---
title: 37.27. `foreign_data_wrappers`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `foreign_data_wrappers` contains all foreign-data wrappers defined in the current database. Only those foreign-data wrappers are shown that the current user has access to (by way of being the owner or having some privilege).

**Table  37.25. `foreign_data_wrappers` Columns**

Column Type Description  
---  
`foreign_data_wrapper_catalog` `sql_identifier` Name of the database that contains the foreign-data wrapper (always the current database)  
`foreign_data_wrapper_name` `sql_identifier` Name of the foreign-data wrapper  
`authorization_identifier` `sql_identifier` Name of the owner of the foreign server  
`library_name` `character_data` File name of the library that implementing this foreign-data wrapper  
`foreign_data_wrapper_language` `character_data` Language used to implement this foreign-data wrapper  
  
  



  
