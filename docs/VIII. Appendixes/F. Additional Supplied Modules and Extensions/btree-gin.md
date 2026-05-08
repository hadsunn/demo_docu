---
title: F.8. btree_gin — GIN operator classes with B-tree behavior
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[F.8.1. Example Usage](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/btree-gin.md#f81-example-usage>)


[F.8.2. Authors](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/btree-gin.md#f82-authors>)



`btree_gin` provides GIN operator classes that implement B-tree equivalent behavior for the data types `int2`, `int4`, `int8`, `float4`, `float8`, `timestamp with time zone`, `timestamp without time zone`, `time with time zone`, `time without time zone`, `date`, `interval`, `oid`, `money`, `"char"`, `varchar`, `text`, `bytea`, `bit`, `varbit`, `macaddr`, `macaddr8`, `inet`, `cidr`, `uuid`, `name`, `bool`, `bpchar`, and all `enum` types.

In general, these operator classes will not outperform the equivalent standard B-tree index methods, and they lack one major feature of the standard B-tree code: the ability to enforce uniqueness. However, they are useful for GIN testing and as a base for developing other GIN operator classes. Also, for queries that test both a GIN-indexable column and a B-tree-indexable column, it might be more efficient to create a multicolumn GIN index that uses one of these operator classes than to create two separate indexes that would have to be combined via bitmap ANDing.

This module is considered “trusted”, that is, it can be installed by non-superusers who have `CREATE` privilege on the current database.

### F.8.1. Example Usage #
    
    
    CREATE TABLE test (a int4);
    -- create index
    CREATE INDEX testidx ON test USING GIN (a);
    -- query
    SELECT * FROM test WHERE a < 10;
    

### F.8.2. Authors #

Teodor Sigaev (`<[teodor@stack.net](mailto:teodor@stack.net)>`) and Oleg Bartunov (`<[oleg@sai.msu.su](mailto:oleg@sai.msu.su)>`). See <http://www.sai.msu.su/~megera/oddmuse/index.cgi/Gin> for additional information.


  
