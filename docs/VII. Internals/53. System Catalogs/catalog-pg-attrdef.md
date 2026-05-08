---
title: 53.6. `pg_attrdef`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_attrdef` stores column default values. The main information about columns is stored in [`pg_attribute`](</VII. Internals/53. System Catalogs/catalog-pg-attribute.md>). Only columns for which a default value has been explicitly set will have an entry here.

**Table  53.6. `pg_attrdef` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`adrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The table this column belongs to  
`adnum` `int2` (references [`pg_attribute`](</VII. Internals/53. System Catalogs/catalog-pg-attribute.md>).`attnum`) The number of the column  
`adbin` `pg_node_tree` The column default value, in `nodeToString()` representation. Use `pg_get_expr(adbin, adrelid)` to convert it to an SQL expression.  
  
  



  
