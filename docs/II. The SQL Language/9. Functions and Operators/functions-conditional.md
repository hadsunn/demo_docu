---
title: 9.18. Conditional Expressions
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[9.18.1. `CASE`](</II. The SQL Language/9. Functions and Operators/functions-conditional.md#9181-case>)


[9.18.2. `COALESCE`](</II. The SQL Language/9. Functions and Operators/functions-conditional.md#9182-coalesce>)


[9.18.3. `NULLIF`](</II. The SQL Language/9. Functions and Operators/functions-conditional.md#9183-nullif>)


[9.18.4. `GREATEST` and `LEAST`](</II. The SQL Language/9. Functions and Operators/functions-conditional.md#9184-greatest-and-least>)



This section describes the SQL-compliant conditional expressions available in PostgreSQL.

### Tip

If your needs go beyond the capabilities of these conditional expressions, you might want to consider writing a server-side function in a more expressive programming language.

### Note

Although `COALESCE`, `GREATEST`, and `LEAST` are syntactically similar to functions, they are not ordinary functions, and thus cannot be used with explicit `VARIADIC` array arguments.

### 9.18.1. `CASE` #

The SQL `CASE` expression is a generic conditional expression, similar to if/else statements in other programming languages:
    
    
    CASE WHEN _condition_ THEN _result_
         [WHEN ...]
         [ELSE _result_]
    END
    

`CASE` clauses can be used wherever an expression is valid. Each _`condition`_ is an expression that returns a `boolean` result. If the condition's result is true, the value of the `CASE` expression is the _`result`_ that follows the condition, and the remainder of the `CASE` expression is not processed. If the condition's result is not true, any subsequent `WHEN` clauses are examined in the same manner. If no `WHEN` _`condition`_ yields true, the value of the `CASE` expression is the _`result`_ of the `ELSE` clause. If the `ELSE` clause is omitted and no condition is true, the result is null.

An example:
    
    
    SELECT * FROM test;
    
     a
    ---
     1
     2
     3
    
    
    SELECT a,
           CASE WHEN a=1 THEN 'one'
                WHEN a=2 THEN 'two'
                ELSE 'other'
           END
        FROM test;
    
     a | case
    ---+-------
     1 | one
     2 | two
     3 | other
    

The data types of all the _`result`_ expressions must be convertible to a single output type. See [Section 10.5](</II. The SQL Language/10. Type Conversion/typeconv-union-case.md>) for more details.

There is a “simple” form of `CASE` expression that is a variant of the general form above:
    
    
    CASE _expression_
        WHEN _value_ THEN _result_
        [WHEN ...]
        [ELSE _result_]
    END
    

The first _`expression`_ is computed, then compared to each of the _`value`_ expressions in the `WHEN` clauses until one is found that is equal to it. If no match is found, the _`result`_ of the `ELSE` clause (or a null value) is returned. This is similar to the `switch` statement in C.

The example above can be written using the simple `CASE` syntax:
    
    
    SELECT a,
           CASE a WHEN 1 THEN 'one'
                  WHEN 2 THEN 'two'
                  ELSE 'other'
           END
        FROM test;
    
     a | case
    ---+-------
     1 | one
     2 | two
     3 | other
    

A `CASE` expression does not evaluate any subexpressions that are not needed to determine the result. For example, this is a possible way of avoiding a division-by-zero failure:
    
    
    SELECT ... WHERE CASE WHEN x <> 0 THEN y/x > 1.5 ELSE false END;
    

### Note

As described in [Section 4.2.14](sql-expressions.html#SYNTAX-EXPRESS-EVAL "4.2.14. Expression Evaluation Rules"), there are various situations in which subexpressions of an expression are evaluated at different times, so that the principle that “`CASE` evaluates only necessary subexpressions” is not ironclad. For example a constant `1/0` subexpression will usually result in a division-by-zero failure at planning time, even if it's within a `CASE` arm that would never be entered at run time.

### 9.18.2. `COALESCE` #
    
    
    COALESCE(_value_ [, ...])
    

The `COALESCE` function returns the first of its arguments that is not null. Null is returned only if all arguments are null. It is often used to substitute a default value for null values when data is retrieved for display, for example:
    
    
    SELECT COALESCE(description, short_description, '(none)') ...
    

This returns `description` if it is not null, otherwise `short_description` if it is not null, otherwise `(none)`.

The arguments must all be convertible to a common data type, which will be the type of the result (see [Section 10.5](</II. The SQL Language/10. Type Conversion/typeconv-union-case.md>) for details).

Like a `CASE` expression, `COALESCE` only evaluates the arguments that are needed to determine the result; that is, arguments to the right of the first non-null argument are not evaluated. This SQL-standard function provides capabilities similar to `NVL` and `IFNULL`, which are used in some other database systems.

### 9.18.3. `NULLIF` #
    
    
    NULLIF(_value1_ , _value2_)
    

The `NULLIF` function returns a null value if _`value1`_ equals _`value2`_ ; otherwise it returns _`value1`_. This can be used to perform the inverse operation of the `COALESCE` example given above:
    
    
    SELECT NULLIF(value, '(none)') ...
    

In this example, if `value` is `(none)`, null is returned, otherwise the value of `value` is returned.

The two arguments must be of comparable types. To be specific, they are compared exactly as if you had written `_`value1`_ = _`value2`_`, so there must be a suitable `=` operator available.

The result has the same type as the first argument — but there is a subtlety. What is actually returned is the first argument of the implied `=` operator, and in some cases that will have been promoted to match the second argument's type. For example, `NULLIF(1, 2.2)` yields `numeric`, because there is no `integer` `=` `numeric` operator, only `numeric` `=` `numeric`.

### 9.18.4. `GREATEST` and `LEAST` #
    
    
    GREATEST(_value_ [, ...])
    
    
    
    LEAST(_value_ [, ...])
    

The `GREATEST` and `LEAST` functions select the largest or smallest value from a list of any number of expressions. The expressions must all be convertible to a common data type, which will be the type of the result (see [Section 10.5](</II. The SQL Language/10. Type Conversion/typeconv-union-case.md>) for details).

NULL values in the argument list are ignored. The result will be NULL only if all the expressions evaluate to NULL. (This is a deviation from the SQL standard. According to the standard, the return value is NULL if any argument is NULL. Some other databases behave this way.)


  
