---
title: 37.49. `sql_implementation_info`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The table `sql_implementation_info` contains information about various aspects that are left implementation-defined by the SQL standard. This information is primarily intended for use in the context of the ODBC interface; users of other interfaces will probably find this information to be of little use. For this reason, the individual implementation information items are not described here; you will find them in the description of the ODBC interface.

**Table  37.47. `sql_implementation_info` Columns**

Column Type Description  
---  
`implementation_info_id` `character_data` Identifier string of the implementation information item  
`implementation_info_name` `character_data` Descriptive name of the implementation information item  
`integer_value` `cardinal_number` Value of the implementation information item, or null if the value is contained in the column `character_value`  
`character_value` `character_data` Value of the implementation information item, or null if the value is contained in the column `integer_value`  
`comments` `character_data` Possibly a comment pertaining to the implementation information item  
  
  



  
