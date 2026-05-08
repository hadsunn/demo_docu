---
title: 53.42. `pg_publication_rel`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_publication_rel` contains the mapping between relations and publications in the database. This is a many-to-many mapping. See also [Section 54.17](</VII. Internals/54. System Views/view-pg-publication-tables.md>) for a more user-friendly view of this information.

**Table  53.42. `pg_publication_rel` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`prpubid` `oid` (references [`pg_publication`](</VII. Internals/53. System Catalogs/catalog-pg-publication.md>).`oid`) Reference to publication  
`prrelid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) Reference to relation  
`prqual` `pg_node_tree` Expression tree (in `nodeToString()` representation) for the relation's publication qualifying condition. Null if there is no publication qualifying condition.  
`prattrs` `int2vector` (references [`pg_attribute`](</VII. Internals/53. System Catalogs/catalog-pg-attribute.md>).`attnum`) This is an array of values that indicates which table columns are part of the publication. For example, a value of `1 3` would mean that the first and the third table columns are published. A null value indicates that all columns are published.  
  
  



  
