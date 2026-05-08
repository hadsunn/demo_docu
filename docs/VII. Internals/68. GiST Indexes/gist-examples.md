---
title: 68.5. Examples
---







Supported versions: 13 / 14 / 15 / 16 / 17


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The PostgreSQL source distribution includes several examples of index methods implemented using GiST. The core system currently provides text search support (indexing for `tsvector` and `tsquery`) as well as R-Tree equivalent functionality for some of the built-in geometric data types (see `src/backend/access/gist/gistproc.c`). The following `contrib` modules also contain GiST operator classes:

`btree_gist`
    

B-tree equivalent functionality for several data types

`cube`
    

Indexing for multidimensional cubes

`hstore`
    

Module for storing (key, value) pairs

`intarray`
    

RD-Tree for one-dimensional array of int4 values

`ltree`
    

Indexing for tree-like structures

`pg_trgm`
    

Text similarity using trigram matching

`seg`
    

Indexing for “float ranges”


  
