---
title: 38.14. User-Defined Operators
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Every operator is “syntactic sugar” for a call to an underlying function that does the real work; so you must first create the underlying function before you can create the operator. However, an operator is _not merely_ syntactic sugar, because it carries additional information that helps the query planner optimize queries that use the operator. The next section will be devoted to explaining that additional information.

PostgreSQL supports prefix and infix operators. Operators can be overloaded; that is, the same operator name can be used for different operators that have different numbers and types of operands. When a query is executed, the system determines the operator to call from the number and types of the provided operands.

Here is an example of creating an operator for adding two complex numbers. We assume we've already created the definition of type `complex` (see [Section 38.13](</V. Server Programming/38. Extending SQL/xtypes.md>)). First we need a function that does the work, then we can define the operator:
    
    
    CREATE FUNCTION complex_add(complex, complex)
        RETURNS complex
        AS '_filename_ ', 'complex_add'
        LANGUAGE C IMMUTABLE STRICT;
    
    CREATE OPERATOR + (
        leftarg = complex,
        rightarg = complex,
        function = complex_add,
        commutator = +
    );
    

Now we could execute a query like this:
    
    
    SELECT (a + b) AS c FROM test_complex;
    
            c
    -----------------
     (5.2,6.05)
     (133.42,144.95)
    

We've shown how to create a binary operator here. To create a prefix operator, just omit the `leftarg`. The `function` clause and the argument clauses are the only required items in `CREATE OPERATOR`. The `commutator` clause shown in the example is an optional hint to the query optimizer. Further details about `commutator` and other optimizer hints appear in the next section.


  
