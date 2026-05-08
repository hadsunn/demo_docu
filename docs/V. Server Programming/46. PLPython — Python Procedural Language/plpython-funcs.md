---
title: 46.1. PL/Python Functions
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Functions in PL/Python are declared via the standard [CREATE FUNCTION](</VI. Reference/I. SQL Commands/sql-createfunction.md>) syntax:
    
    
    CREATE FUNCTION _funcname_ (_argument-list_)
      RETURNS _return-type_
    AS $$
      # PL/Python function body
    $$ LANGUAGE plpython3u;
    

The body of a function is simply a Python script. When the function is called, its arguments are passed as elements of the list `args`; named arguments are also passed as ordinary variables to the Python script. Use of named arguments is usually more readable. The result is returned from the Python code in the usual way, with `return` or `yield` (in case of a result-set statement). If you do not provide a return value, Python returns the default `None`. PL/Python translates Python's `None` into the SQL null value. In a procedure, the result from the Python code must be `None` (typically achieved by ending the procedure without a `return` statement or by using a `return` statement without argument); otherwise, an error will be raised.

For example, a function to return the greater of two integers can be defined as:
    
    
    CREATE FUNCTION pymax (a integer, b integer)
      RETURNS integer
    AS $$
      if a > b:
        return a
      return b
    $$ LANGUAGE plpython3u;
    

The Python code that is given as the body of the function definition is transformed into a Python function. For example, the above results in:
    
    
    def __plpython_procedure_pymax_23456():
      if a > b:
        return a
      return b
    

assuming that 23456 is the OID assigned to the function by PostgreSQL.

The arguments are set as global variables. Because of the scoping rules of Python, this has the subtle consequence that an argument variable cannot be reassigned inside the function to the value of an expression that involves the variable name itself, unless the variable is redeclared as global in the block. For example, the following won't work:
    
    
    CREATE FUNCTION pystrip(x text)
      RETURNS text
    AS $$
      x = x.strip()  # error
      return x
    $$ LANGUAGE plpython3u;
    

because assigning to `x` makes `x` a local variable for the entire block, and so the `x` on the right-hand side of the assignment refers to a not-yet-assigned local variable `x`, not the PL/Python function parameter. Using the `global` statement, this can be made to work:
    
    
    CREATE FUNCTION pystrip(x text)
      RETURNS text
    AS $$
      global x
      x = x.strip()  # ok now
      return x
    $$ LANGUAGE plpython3u;
    

But it is advisable not to rely on this implementation detail of PL/Python. It is better to treat the function parameters as read-only.


  
