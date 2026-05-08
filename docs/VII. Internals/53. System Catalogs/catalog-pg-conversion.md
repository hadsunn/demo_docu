---
title: 53.14. `pg_conversion`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_conversion` describes encoding conversion functions. See [CREATE CONVERSION](</VI. Reference/I. SQL Commands/sql-createconversion.md>) for more information.

**Table  53.14. `pg_conversion` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`conname` `name` Conversion name (unique within a namespace)  
`connamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) The OID of the namespace that contains this conversion  
`conowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the conversion  
`conforencoding` `int4` Source encoding ID ([`pg_encoding_to_char()`](functions-info.html#PG-ENCODING-TO-CHAR) can translate this number to the encoding name)  
`contoencoding` `int4` Destination encoding ID ([`pg_encoding_to_char()`](functions-info.html#PG-ENCODING-TO-CHAR) can translate this number to the encoding name)  
`conproc` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) Conversion function  
`condefault` `bool` True if this is the default conversion  
  
  



  
