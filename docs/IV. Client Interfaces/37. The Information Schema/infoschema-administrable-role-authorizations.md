---
title: 37.4. `administrable_role_​authorizations`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `administrable_role_authorizations` identifies all roles that the current user has the admin option for.

**Table  37.2. `administrable_role_authorizations` Columns**

Column Type Description  
---  
`grantee` `sql_identifier` Name of the role to which this role membership was granted (can be the current user, or a different role in case of nested role memberships)  
`role_name` `sql_identifier` Name of a role  
`is_grantable` `yes_or_no` Always `YES`  
  
  



  
