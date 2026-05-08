---
title: 70.2. Built-in Operator Classes
---







Supported versions: 13 / 14 / 15 / 16 / 17


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The core PostgreSQL distribution includes the GIN operator classes shown in [Table 70.1](<gin-builtin-opclasses#GIN-BUILTIN-OPCLASSES-TABLE>) provide additional GIN operator classes.)

**Table  70.1. Built-in GIN Operator Classes**

Name | Indexable Operators  
`array_ops` | `&& (anyarray,anyarray)`  
`@> (anyarray,anyarray)`  
`<@ (anyarray,anyarray)`  
`= (anyarray,anyarray)`  
`jsonb_ops` | `@> (jsonb,jsonb)`  
`@? (jsonb,jsonpath)`  
`@@ (jsonb,jsonpath)`  
`? (jsonb,text)`  
`?| (jsonb,text[])`  
`?& (jsonb,text[])`  
`jsonb_path_ops` | `@> (jsonb,jsonb)`  
`@? (jsonb,jsonpath)`  
`@@ (jsonb,jsonpath)`  
`tsvector_ops` | `@@ (tsvector,tsquery)`  
`@@@ (tsvector,tsquery)`  
  
  


Of the two operator classes for type `jsonb`, `jsonb_ops` is the default. `jsonb_path_ops` supports fewer operators but offers better performance for those operators. See [Section 8.14.4](datatype-json.html#JSON-INDEXING "8.14.4. jsonb Indexing") for details.


  
