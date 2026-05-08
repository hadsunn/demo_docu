---
title: 53.4. `pg_amop`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_amop` stores information about operators associated with access method operator families. There is one row for each operator that is a member of an operator family. A family member can be either a _search_ operator or an _ordering_ operator. An operator can appear in more than one family, but cannot appear in more than one search position nor more than one ordering position within a family. (It is allowed, though unlikely, for an operator to be used for both search and ordering purposes.)

**Table  53.4. `pg_amop` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`amopfamily` `oid` (references [`pg_opfamily`](</VII. Internals/53. System Catalogs/catalog-pg-opfamily.md>).`oid`) The operator family this entry is for  
`amoplefttype` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Left-hand input data type of operator  
`amoprighttype` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Right-hand input data type of operator  
`amopstrategy` `int2` Operator strategy number  
`amoppurpose` `char` Operator purpose, either `s` for search or `o` for ordering  
`amopopr` `oid` (references [`pg_operator`](</VII. Internals/53. System Catalogs/catalog-pg-operator.md>).`oid`) OID of the operator  
`amopmethod` `oid` (references [`pg_am`](</VII. Internals/53. System Catalogs/catalog-pg-am.md>).`oid`) Index access method operator family is for  
`amopsortfamily` `oid` (references [`pg_opfamily`](</VII. Internals/53. System Catalogs/catalog-pg-opfamily.md>).`oid`) The B-tree operator family this entry sorts according to, if an ordering operator; zero if a search operator  
  
  


A “search” operator entry indicates that an index of this operator family can be searched to find all rows satisfying `WHERE` _`indexed_column`_ _`operator`_ _`constant`_. Obviously, such an operator must return `boolean`, and its left-hand input type must match the index's column data type.

An “ordering” operator entry indicates that an index of this operator family can be scanned to return rows in the order represented by `ORDER BY` _`indexed_column`_ _`operator`_ _`constant`_. Such an operator could return any sortable data type, though again its left-hand input type must match the index's column data type. The exact semantics of the `ORDER BY` are specified by the `amopsortfamily` column, which must reference a B-tree operator family for the operator's result type.

### Note

At present, it's assumed that the sort order for an ordering operator is the default for the referenced operator family, i.e., `ASC NULLS LAST`. This might someday be relaxed by adding additional columns to specify sort options explicitly.

An entry's `amopmethod` must match the `opfmethod` of its containing operator family (including `amopmethod` here is an intentional denormalization of the catalog structure for performance reasons). Also, `amoplefttype` and `amoprighttype` must match the `oprleft` and `oprright` fields of the referenced [`pg_operator`](</VII. Internals/53. System Catalogs/catalog-pg-operator.md>) entry.


  
