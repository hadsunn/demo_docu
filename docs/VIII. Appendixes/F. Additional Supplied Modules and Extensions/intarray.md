---
title: F.20. intarray — manipulate arrays of integers
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[F.20.1. `intarray` Functions and Operators](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/intarray.md#f201-intarray-functions-and-operators>)


[F.20.2. Index Support](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/intarray.md#f202-index-support>)


[F.20.3. Example](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/intarray.md#f203-example>)


[F.20.4. Benchmark](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/intarray.md#f204-benchmark>)


[F.20.5. Authors](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/intarray.md#f205-authors>)



The `intarray` module provides a number of useful functions and operators for manipulating null-free arrays of integers. There is also support for indexed searches using some of the operators.

All of these operations will throw an error if a supplied array contains any NULL elements.

Many of these operations are only sensible for one-dimensional arrays. Although they will accept input arrays of more dimensions, the data is treated as though it were a linear array in storage order.

This module is considered “trusted”, that is, it can be installed by non-superusers who have `CREATE` privilege on the current database.

### F.20.1. `intarray` Functions and Operators #

The functions provided by the `intarray` module are shown in [Table F.9](intarray.html#INTARRAY-FUNC-TABLE "Table F.9. intarray Functions"), the operators in [Table F.10](intarray.html#INTARRAY-OP-TABLE "Table F.10. intarray Operators").

**Table  F.9. `intarray` Functions**

Function Description Example(s)  
---  
`icount` ( `integer[]` ) → `integer` Returns the number of elements in the array. `icount('{1,2,3}'::integer[])` → `3`  
`sort` ( `integer[]`, _`dir`_ `text` ) → `integer[]` Sorts the array in either ascending or descending order. _`dir`_ must be `asc` or `desc`. `sort('{1,3,2}'::integer[], 'desc')` → `{3,2,1}`  
`sort` ( `integer[]` ) → `integer[]` `sort_asc` ( `integer[]` ) → `integer[]` Sorts in ascending order. `sort(array[11,77,44])` → `{11,44,77}`  
`sort_desc` ( `integer[]` ) → `integer[]` Sorts in descending order. `sort_desc(array[11,77,44])` → `{77,44,11}`  
`uniq` ( `integer[]` ) → `integer[]` Removes adjacent duplicates. Often used with `sort` to remove all duplicates. `uniq('{1,2,2,3,1,1}'::integer[])` → `{1,2,3,1}` `uniq(sort('{1,2,3,2,1}'::integer[]))` → `{1,2,3}`  
`idx` ( `integer[]`, _`item`_ `integer` ) → `integer` Returns index of the first array element matching _`item`_ , or 0 if no match. `idx(array[11,22,33,22,11], 22)` → `2`  
`subarray` ( `integer[]`, _`start`_ `integer`, _`len`_ `integer` ) → `integer[]` Extracts the portion of the array starting at position _`start`_ , with _`len`_ elements. `subarray('{1,2,3,2,1}'::integer[], 2, 3)` → `{2,3,2}`  
`subarray` ( `integer[]`, _`start`_ `integer` ) → `integer[]` Extracts the portion of the array starting at position _`start`_. `subarray('{1,2,3,2,1}'::integer[], 2)` → `{2,3,2,1}`  
`intset` ( `integer` ) → `integer[]` Makes a single-element array. `intset(42)` → `{42}`  
  
  


**Table  F.10. `intarray` Operators**

Operator Description  
---  
`integer[]` `&&` `integer[]` → `boolean` Do arrays overlap (have at least one element in common)?  
`integer[]` `@>` `integer[]` → `boolean` Does left array contain right array?  
`integer[]` `<@` `integer[]` → `boolean` Is left array contained in right array?  
`#` `integer[]` → `integer` Returns the number of elements in the array.  
`integer[]` `#` `integer` → `integer` Returns index of the first array element matching the right argument, or 0 if no match. (Same as `idx` function.)  
`integer[]` `+` `integer` → `integer[]` Adds element to end of array.  
`integer[]` `+` `integer[]` → `integer[]` Concatenates the arrays.  
`integer[]` `-` `integer` → `integer[]` Removes entries matching the right argument from the array.  
`integer[]` `-` `integer[]` → `integer[]` Removes elements of the right array from the left array.  
`integer[]` `|` `integer` → `integer[]` Computes the union of the arguments.  
`integer[]` `|` `integer[]` → `integer[]` Computes the union of the arguments.  
`integer[]` `&` `integer[]` → `integer[]` Computes the intersection of the arguments.  
`integer[]` `@@` `query_int` → `boolean` Does array satisfy query? (see below)  
`query_int` `~~` `integer[]` → `boolean` Does array satisfy query? (commutator of `@@`)  
  
  


The operators `&&`, `@>` and `<@` are equivalent to PostgreSQL's built-in operators of the same names, except that they work only on integer arrays that do not contain nulls, while the built-in operators work for any array type. This restriction makes them faster than the built-in operators in many cases.

The `@@` and `~~` operators test whether an array satisfies a _query_ , which is expressed as a value of a specialized data type `query_int`. A _query_ consists of integer values that are checked against the elements of the array, possibly combined using the operators `&` (AND), `|` (OR), and `!` (NOT). Parentheses can be used as needed. For example, the query `1&(2|3)` matches arrays that contain 1 and also contain either 2 or 3.

### F.20.2. Index Support #

`intarray` provides index support for the `&&`, `@>`, and `@@` operators, as well as regular array equality.

Two parameterized GiST index operator classes are provided: `gist__int_ops` (used by default) is suitable for small- to medium-size data sets, while `gist__intbig_ops` uses a larger signature and is more suitable for indexing large data sets (i.e., columns containing a large number of distinct array values). The implementation uses an RD-tree data structure with built-in lossy compression.

`gist__int_ops` approximates an integer set as an array of integer ranges. Its optional integer parameter `numranges` determines the maximum number of ranges in one index key. The default value of `numranges` is 100. Valid values are between 1 and 253. Using larger arrays as GiST index keys leads to a more precise search (scanning a smaller fraction of the index and fewer heap pages), at the cost of a larger index.

`gist__intbig_ops` approximates an integer set as a bitmap signature. Its optional integer parameter `siglen` determines the signature length in bytes. The default signature length is 16 bytes. Valid values of signature length are between 1 and 2024 bytes. Longer signatures lead to a more precise search (scanning a smaller fraction of the index and fewer heap pages), at the cost of a larger index.

There is also a non-default GIN operator class `gin__int_ops`, which supports these operators as well as `<@`.

The choice between GiST and GIN indexing depends on the relative performance characteristics of GiST and GIN, which are discussed elsewhere.

### F.20.3. Example #
    
    
    -- a message can be in one or more “sections”
    CREATE TABLE message (mid INT PRIMARY KEY, sections INT[], ...);
    
    -- create specialized index with signature length of 32 bytes
    CREATE INDEX message_rdtree_idx ON message USING GIST (sections gist__intbig_ops (siglen = 32));
    
    -- select messages in section 1 OR 2 - OVERLAP operator
    SELECT message.mid FROM message WHERE message.sections && '{1,2}';
    
    -- select messages in sections 1 AND 2 - CONTAINS operator
    SELECT message.mid FROM message WHERE message.sections @> '{1,2}';
    
    -- the same, using QUERY operator
    SELECT message.mid FROM message WHERE message.sections @@ '1&2'::query_int;
    

### F.20.4. Benchmark #

The source directory `contrib/intarray/bench` contains a benchmark test suite, which can be run against an installed PostgreSQL server. (It also requires `DBD::Pg` to be installed.) To run:
    
    
    cd .../contrib/intarray/bench
    createdb TEST
    psql -c "CREATE EXTENSION intarray" TEST
    ./create_test.pl | psql TEST
    ./bench.pl
    

The `bench.pl` script has numerous options, which are displayed when it is run without any arguments.

### F.20.5. Authors #

All work was done by Teodor Sigaev (`<[teodor@sigaev.ru](mailto:teodor@sigaev.ru)>`) and Oleg Bartunov (`<[oleg@sai.msu.su](mailto:oleg@sai.msu.su)>`). See <http://www.sai.msu.su/~megera/postgres/gist/> for additional information. Andrey Oktyabrski did a great work on adding new functions and operations.


  
