---
title: 54.5. `pg_config`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_config` describes the compile-time configuration parameters of the currently installed version of PostgreSQL. It is intended, for example, to be used by software packages that want to interface to PostgreSQL to facilitate finding the required header files and libraries. It provides the same basic information as the [pg_config](</VI. Reference/II. PostgreSQL Client Applications/app-pgconfig.md>) PostgreSQL client application.

By default, the `pg_config` view can be read only by superusers.

**Table  54.5. `pg_config` Columns**

Column Type Description  
---  
`name` `text` The parameter name  
`setting` `text` The parameter value  
  
  



  
