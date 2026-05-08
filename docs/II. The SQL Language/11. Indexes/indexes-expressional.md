---
title: 11.7. Indexes on Expressions
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


An index column need not be just a column of the underlying table, but can be a function or scalar expression computed from one or more columns of the table. This feature is useful to obtain fast access to tables based on the results of computations.

For example, a common way to do case-insensitive comparisons is to use the `lower` function:
    
    
    SELECT * FROM test1 WHERE lower(col1) = 'value';
    

This query can use an index if one has been defined on the result of the `lower(col1)` function:
    
    
    CREATE INDEX test1_lower_col1_idx ON test1 (lower(col1));
    

If we were to declare this index `UNIQUE`, it would prevent creation of rows whose `col1` values differ only in case, as well as rows whose `col1` values are actually identical. Thus, indexes on expressions can be used to enforce constraints that are not definable as simple unique constraints.

As another example, if one often does queries like:
    
    
    SELECT * FROM people WHERE (first_name || ' ' || last_name) = 'John Smith';
    

then it might be worth creating an index like this:
    
    
    CREATE INDEX people_names ON people ((first_name || ' ' || last_name));
    

The syntax of the `CREATE INDEX` command normally requires writing parentheses around index expressions, as shown in the second example. The parentheses can be omitted when the expression is just a function call, as in the first example.

Index expressions are relatively expensive to maintain, because the derived expression(s) must be computed for each row insertion and [non-HOT update.](</VII. Internals/73. Database Physical Storage/storage-hot.md>) However, the index expressions are _not_ recomputed during an indexed search, since they are already stored in the index. In both examples above, the system sees the query as just `WHERE indexedcolumn = 'constant'` and so the speed of the search is equivalent to any other simple index query. Thus, indexes on expressions are useful when retrieval speed is more important than insertion and update speed.


  
