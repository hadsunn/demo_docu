---
title: 37.66. `views`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `views` contains all views defined in the current database. Only those views are shown that the current user has access to (by way of being the owner or having some privilege).

**Table  37.64. `views` Columns**

Column Type Description  
---  
`table_catalog` `sql_identifier` Name of the database that contains the view (always the current database)  
`table_schema` `sql_identifier` Name of the schema that contains the view  
`table_name` `sql_identifier` Name of the view  
`view_definition` `character_data` Query expression defining the view (null if the view is not owned by a currently enabled role)  
`check_option` `character_data` `CASCADED` or `LOCAL` if the view has a `CHECK OPTION` defined on it, `NONE` if not  
`is_updatable` `yes_or_no` `YES` if the view is updatable (allows `UPDATE` and `DELETE`), `NO` if not  
`is_insertable_into` `yes_or_no` `YES` if the view is insertable into (allows `INSERT`), `NO` if not  
`is_trigger_updatable` `yes_or_no` `YES` if the view has an `INSTEAD OF` `UPDATE` trigger defined on it, `NO` if not  
`is_trigger_deletable` `yes_or_no` `YES` if the view has an `INSTEAD OF` `DELETE` trigger defined on it, `NO` if not  
`is_trigger_insertable_into` `yes_or_no` `YES` if the view has an `INSTEAD OF` `INSERT` trigger defined on it, `NO` if not  
  
  



  
