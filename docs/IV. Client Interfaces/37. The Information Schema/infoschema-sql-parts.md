---
title: 37.50. `sql_parts`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The table `sql_parts` contains information about which of the several parts of the SQL standard are supported by PostgreSQL.

**Table  37.48. `sql_parts` Columns**

Column Type Description  
---  
`feature_id` `character_data` An identifier string containing the number of the part  
`feature_name` `character_data` Descriptive name of the part  
`is_supported` `yes_or_no` `YES` if the part is fully supported by the current version of PostgreSQL, `NO` if not  
`is_verified_by` `character_data` Always null, since the PostgreSQL development group does not perform formal testing of feature conformance  
`comments` `character_data` Possibly a comment about the supported status of the part  
  
  



  
