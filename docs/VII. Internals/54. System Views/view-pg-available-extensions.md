---
title: 54.2. `pg_available_extensions`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `pg_available_extensions` view lists the extensions that are available for installation. See also the [`pg_extension`](</VII. Internals/53. System Catalogs/catalog-pg-extension.md>) catalog, which shows the extensions currently installed.

**Table  54.2. `pg_available_extensions` Columns**

Column Type Description  
---  
`name` `name` Extension name  
`default_version` `text` Name of default version, or `NULL` if none is specified  
`installed_version` `text` Currently installed version of the extension, or `NULL` if not installed  
`comment` `text` Comment string from the extension's control file  
  
  


The `pg_available_extensions` view is read-only.


  
