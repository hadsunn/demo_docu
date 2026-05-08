---
title: 43.4. Expressions
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


All expressions used in PL/pgSQL statements are processed using the server's main SQL executor. For example, when you write a PL/pgSQL statement like
    
    
    IF _expression_ THEN ...
    

PL/pgSQL will evaluate the expression by feeding a query like
    
    
    SELECT _expression_
    

to the main SQL engine. While forming the `SELECT` command, any occurrences of PL/pgSQL variable names are replaced by query parameters, as discussed in detail in [Section 43.11.1](plpgsql-implementation.html#PLPGSQL-VAR-SUBST "43.11.1. Variable Substitution"). This allows the query plan for the `SELECT` to be prepared just once and then reused for subsequent evaluations with different values of the variables. Thus, what really happens on first use of an expression is essentially a `PREPARE` command. For example, if we have declared two integer variables `x` and `y`, and we write
    
    
    IF x < y THEN ...
    

what happens behind the scenes is equivalent to
    
    
    PREPARE _statement_name_(integer, integer) AS SELECT $1 < $2;
    

and then this prepared statement is `EXECUTE`d for each execution of the `IF` statement, with the current values of the PL/pgSQL variables supplied as parameter values. Normally these details are not important to a PL/pgSQL user, but they are useful to know when trying to diagnose a problem. More information appears in [Section 43.11.2](plpgsql-implementation.html#PLPGSQL-PLAN-CACHING "43.11.2. Plan Caching").

Since an _`expression`_ is converted to a `SELECT` command, it can contain the same clauses that an ordinary `SELECT` would, except that it cannot include a top-level `UNION`, `INTERSECT`, or `EXCEPT` clause. Thus for example one could test whether a table is non-empty with
    
    
    IF count(*) > 0 FROM my_table THEN ...
    

since the _`expression`_ between `IF` and `THEN` is parsed as though it were `SELECT count(*) > 0 FROM my_table`. The `SELECT` must produce a single column, and not more than one row. (If it produces no rows, the result is taken as NULL.)


  
