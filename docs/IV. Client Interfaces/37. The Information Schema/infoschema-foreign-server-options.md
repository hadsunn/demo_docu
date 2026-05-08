---
title: 37.28. `foreign_server_options`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `foreign_server_options` contains all the options defined for foreign servers in the current database. Only those foreign servers are shown that the current user has access to (by way of being the owner or having some privilege).

**Table  37.26. `foreign_server_options` Columns**

Column Type Description  
---  
`foreign_server_catalog` `sql_identifier` Name of the database that the foreign server is defined in (always the current database)  
`foreign_server_name` `sql_identifier` Name of the foreign server  
`option_name` `sql_identifier` Name of an option  
`option_value` `character_data` Value of the option  
  
  



  
