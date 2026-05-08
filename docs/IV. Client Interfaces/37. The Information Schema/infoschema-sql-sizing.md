---
title: 37.51. `sql_sizing`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The table `sql_sizing` contains information about various size limits and maximum values in PostgreSQL. This information is primarily intended for use in the context of the ODBC interface; users of other interfaces will probably find this information to be of little use. For this reason, the individual sizing items are not described here; you will find them in the description of the ODBC interface.

**Table  37.49. `sql_sizing` Columns**

Column Type Description  
---  
`sizing_id` `cardinal_number` Identifier of the sizing item  
`sizing_name` `character_data` Descriptive name of the sizing item  
`supported_value` `cardinal_number` Value of the sizing item, or 0 if the size is unlimited or cannot be determined, or null if the features for which the sizing item is applicable are not supported  
`comments` `character_data` Possibly a comment pertaining to the sizing item  
  
  



  
