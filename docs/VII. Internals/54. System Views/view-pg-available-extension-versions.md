---
title: 54.3. `pg_available_extension_versions`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `pg_available_extension_versions` view lists the specific extension versions that are available for installation. See also the [`pg_extension`](</VII. Internals/53. System Catalogs/catalog-pg-extension.md>) catalog, which shows the extensions currently installed.

**Table  54.3. `pg_available_extension_versions` Columns**

Column Type Description  
---  
`name` `name` Extension name  
`version` `text` Version name  
`installed` `bool` True if this version of this extension is currently installed  
`superuser` `bool` True if only superusers are allowed to install this extension (but see `trusted`)  
`trusted` `bool` True if the extension can be installed by non-superusers with appropriate privileges  
`relocatable` `bool` True if extension can be relocated to another schema  
`schema` `name` Name of the schema that the extension must be installed into, or `NULL` if partially or fully relocatable  
`requires` `name[]` Names of prerequisite extensions, or `NULL` if none  
`comment` `text` Comment string from the extension's control file  
  
  


The `pg_available_extension_versions` view is read-only.


  
