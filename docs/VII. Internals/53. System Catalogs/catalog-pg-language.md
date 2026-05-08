---
title: 53.29. `pg_language`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_language` registers languages in which you can write functions or stored procedures. See [CREATE LANGUAGE](</VI. Reference/I. SQL Commands/sql-createlanguage.md>) for more information about language handlers.

**Table  53.29. `pg_language` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`lanname` `name` Name of the language  
`lanowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the language  
`lanispl` `bool` This is false for internal languages (such as SQL) and true for user-defined languages. Currently, pg_dump still uses this to determine which languages need to be dumped, but this might be replaced by a different mechanism in the future.  
`lanpltrusted` `bool` True if this is a trusted language, which means that it is believed not to grant access to anything outside the normal SQL execution environment. Only superusers can create functions in untrusted languages.  
`lanplcallfoid` `oid` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) For noninternal languages this references the language handler, which is a special function that is responsible for executing all functions that are written in the particular language. Zero for internal languages.  
`laninline` `oid` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>) blocks). Zero if inline blocks are not supported.  
`lanvalidator` `oid` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) This references a language validator function that is responsible for checking the syntax and validity of new functions when they are created. Zero if no validator is provided.  
`lanacl` `aclitem[]` Access privileges; see [Section 5.7](</II. The SQL Language/5. Data Definition/ddl-priv.md>) for details  
  
  



  
