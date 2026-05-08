---
title: 37.21. `domain_constraints`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `domain_constraints` contains all constraints belonging to domains defined in the current database. Only those domains are shown that the current user has access to (by way of being the owner or having some privilege).

**Table  37.19. `domain_constraints` Columns**

Column Type Description  
---  
`constraint_catalog` `sql_identifier` Name of the database that contains the constraint (always the current database)  
`constraint_schema` `sql_identifier` Name of the schema that contains the constraint  
`constraint_name` `sql_identifier` Name of the constraint  
`domain_catalog` `sql_identifier` Name of the database that contains the domain (always the current database)  
`domain_schema` `sql_identifier` Name of the schema that contains the domain  
`domain_name` `sql_identifier` Name of the domain  
`is_deferrable` `yes_or_no` `YES` if the constraint is deferrable, `NO` if not  
`initially_deferred` `yes_or_no` `YES` if the constraint is deferrable and initially deferred, `NO` if not  
  
  



  
