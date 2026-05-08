---
title: 37.62. `user_mappings`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `user_mappings` contains all user mappings defined in the current database. Only those user mappings are shown where the current user has access to the corresponding foreign server (by way of being the owner or having some privilege).

**Table  37.60. `user_mappings` Columns**

Column Type Description  
---  
`authorization_identifier` `sql_identifier` Name of the user being mapped, or `PUBLIC` if the mapping is public  
`foreign_server_catalog` `sql_identifier` Name of the database that the foreign server used by this mapping is defined in (always the current database)  
`foreign_server_name` `sql_identifier` Name of the foreign server used by this mapping  
  
  



  
