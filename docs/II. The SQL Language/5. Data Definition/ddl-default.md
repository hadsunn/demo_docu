---
title: 5.2. Default Values
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


A column can be assigned a default value. When a new row is created and no values are specified for some of the columns, those columns will be filled with their respective default values. A data manipulation command can also request explicitly that a column be set to its default value, without having to know what that value is. (Details about data manipulation commands are in [Chapter 6](</II. The SQL Language/6. Data Manipulation/6. Data Manipulation.md>).)

If no default value is declared explicitly, the default value is the null value. This usually makes sense because a null value can be considered to represent unknown data.

In a table definition, default values are listed after the column data type. For example:
    
    
    CREATE TABLE products (
        product_no integer,
        name text,
        price numeric **DEFAULT 9.99**
    );
    

The default value can be an expression, which will be evaluated whenever the default value is inserted (_not_ when the table is created). A common example is for a `timestamp` column to have a default of `CURRENT_TIMESTAMP`, so that it gets set to the time of row insertion. Another common example is generating a “serial number” for each row. In PostgreSQL this is typically done by something like:
    
    
    CREATE TABLE products (
        product_no integer **DEFAULT nextval('products_product_no_seq')** ,
        ...
    );
    

where the `nextval()` function supplies successive values from a _sequence object_ (see [Section 9.17](</II. The SQL Language/9. Functions and Operators/functions-sequence.md>)). This arrangement is sufficiently common that there's a special shorthand for it:
    
    
    CREATE TABLE products (
        product_no **SERIAL** ,
        ...
    );
    

The `SERIAL` shorthand is discussed further in [Section 8.1.4](datatype-numeric.html#DATATYPE-SERIAL "8.1.4. Serial Types").


  
