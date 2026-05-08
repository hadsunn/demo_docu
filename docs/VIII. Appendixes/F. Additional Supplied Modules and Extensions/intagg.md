---
title: F.19. intagg — integer aggregator and enumerator
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[F.19.1. Functions](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/intagg.md#f191-functions>)


[F.19.2. Sample Uses](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/intagg.md#f192-sample-uses>)



The `intagg` module provides an integer aggregator and an enumerator. `intagg` is now obsolete, because there are built-in functions that provide a superset of its capabilities. However, the module is still provided as a compatibility wrapper around the built-in functions.

### F.19.1. Functions #

The aggregator is an aggregate function `int_array_aggregate(integer)` that produces an integer array containing exactly the integers it is fed. This is a wrapper around `array_agg`, which does the same thing for any array type.

The enumerator is a function `int_array_enum(integer[])` that returns `setof integer`. It is essentially the reverse operation of the aggregator: given an array of integers, expand it into a set of rows. This is a wrapper around `unnest`, which does the same thing for any array type.

### F.19.2. Sample Uses #

Many database systems have the notion of a one to many table. Such a table usually sits between two indexed tables, for example:
    
    
    CREATE TABLE left (id INT PRIMARY KEY, ...);
    CREATE TABLE right (id INT PRIMARY KEY, ...);
    CREATE TABLE one_to_many(left INT REFERENCES left, right INT REFERENCES right);
    

It is typically used like this:
    
    
    SELECT right.* from right JOIN one_to_many ON (right.id = one_to_many.right)
      WHERE one_to_many.left = _item_ ;
    

This will return all the items in the right hand table for an entry in the left hand table. This is a very common construct in SQL.

Now, this methodology can be cumbersome with a very large number of entries in the `one_to_many` table. Often, a join like this would result in an index scan and a fetch for each right hand entry in the table for a particular left hand entry. If you have a very dynamic system, there is not much you can do. However, if you have some data which is fairly static, you can create a summary table with the aggregator.
    
    
    CREATE TABLE summary AS
      SELECT left, int_array_aggregate(right) AS right
      FROM one_to_many
      GROUP BY left;
    

This will create a table with one row per left item, and an array of right items. Now this is pretty useless without some way of using the array; that's why there is an array enumerator. You can do
    
    
    SELECT left, int_array_enum(right) FROM summary WHERE left = _item_ ;
    

The above query using `int_array_enum` produces the same results as
    
    
    SELECT left, right FROM one_to_many WHERE left = _item_ ;
    

The difference is that the query against the summary table has to get only one row from the table, whereas the direct query against `one_to_many` must index scan and fetch a row for each entry.

On one system, an `EXPLAIN` showed a query with a cost of 8488 was reduced to a cost of 329. The original query was a join involving the `one_to_many` table, which was replaced by:
    
    
    SELECT right, count(right) FROM
      ( SELECT left, int_array_enum(right) AS right
        FROM summary JOIN (SELECT left FROM left_table WHERE left = _item_) AS lefts
             ON (summary.left = lefts.left)
      ) AS list
      GROUP BY right
      ORDER BY count DESC;
    


  
