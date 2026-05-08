---
title: 37.34. `referential_constraints`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `referential_constraints` contains all referential (foreign key) constraints in the current database. Only those constraints are shown for which the current user has write access to the referencing table (by way of being the owner or having some privilege other than `SELECT`).

**Table  37.32. `referential_constraints` Columns**

Column Type Description  
---  
`constraint_catalog` `sql_identifier` Name of the database containing the constraint (always the current database)  
`constraint_schema` `sql_identifier` Name of the schema containing the constraint  
`constraint_name` `sql_identifier` Name of the constraint  
`unique_constraint_catalog` `sql_identifier` Name of the database that contains the unique or primary key constraint that the foreign key constraint references (always the current database)  
`unique_constraint_schema` `sql_identifier` Name of the schema that contains the unique or primary key constraint that the foreign key constraint references  
`unique_constraint_name` `sql_identifier` Name of the unique or primary key constraint that the foreign key constraint references  
`match_option` `character_data` Match option of the foreign key constraint: `FULL`, `PARTIAL`, or `NONE`.  
`update_rule` `character_data` Update rule of the foreign key constraint: `CASCADE`, `SET NULL`, `SET DEFAULT`, `RESTRICT`, or `NO ACTION`.  
`delete_rule` `character_data` Delete rule of the foreign key constraint: `CASCADE`, `SET NULL`, `SET DEFAULT`, `RESTRICT`, or `NO ACTION`.  
  
  



  
