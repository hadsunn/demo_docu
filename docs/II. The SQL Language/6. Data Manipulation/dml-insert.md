---
title: 6.1. Inserting Data
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


When a table is created, it contains no data. The first thing to do before a database can be of much use is to insert data. Data is inserted one row at a time. You can also insert more than one row in a single command, but it is not possible to insert something that is not a complete row. Even if you know only some column values, a complete row must be created.

To create a new row, use the [INSERT](</VI. Reference/I. SQL Commands/sql-insert.md>):
    
    
    CREATE TABLE products (
        product_no integer,
        name text,
        price numeric
    );
    

An example command to insert a row would be:
    
    
    INSERT INTO products VALUES (1, 'Cheese', 9.99);
    

The data values are listed in the order in which the columns appear in the table, separated by commas. Usually, the data values will be literals (constants), but scalar expressions are also allowed.

The above syntax has the drawback that you need to know the order of the columns in the table. To avoid this you can also list the columns explicitly. For example, both of the following commands have the same effect as the one above:
    
    
    INSERT INTO products (product_no, name, price) VALUES (1, 'Cheese', 9.99);
    INSERT INTO products (name, price, product_no) VALUES ('Cheese', 9.99, 1);
    

Many users consider it good practice to always list the column names.

If you don't have values for all the columns, you can omit some of them. In that case, the columns will be filled with their default values. For example:
    
    
    INSERT INTO products (product_no, name) VALUES (1, 'Cheese');
    INSERT INTO products VALUES (1, 'Cheese');
    

The second form is a PostgreSQL extension. It fills the columns from the left with as many values as are given, and the rest will be defaulted.

For clarity, you can also request default values explicitly, for individual columns or for the entire row:
    
    
    INSERT INTO products (product_no, name, price) VALUES (1, 'Cheese', DEFAULT);
    INSERT INTO products DEFAULT VALUES;
    

You can insert multiple rows in a single command:
    
    
    INSERT INTO products (product_no, name, price) VALUES
        (1, 'Cheese', 9.99),
        (2, 'Bread', 1.99),
        (3, 'Milk', 2.99);
    

It is also possible to insert the result of a query (which might be no rows, one row, or many rows):
    
    
    INSERT INTO products (product_no, name, price)
      SELECT product_no, name, price FROM new_products
        WHERE release_date = 'today';
    

This provides the full power of the SQL query mechanism ([Chapter 7](</II. The SQL Language/7. Queries/7. Queries.md>)) for computing the rows to be inserted.

### Tip

When inserting a lot of data at the same time, consider using the [COPY](</VI. Reference/I. SQL Commands/sql-copy.md>) for more information on improving bulk loading performance.


  
