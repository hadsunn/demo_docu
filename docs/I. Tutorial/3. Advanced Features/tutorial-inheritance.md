---
title: 3.6. Inheritance
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Inheritance is a concept from object-oriented databases. It opens up interesting new possibilities of database design.

Let's create two tables: A table `cities` and a table `capitals`. Naturally, capitals are also cities, so you want some way to show the capitals implicitly when you list all cities. If you're really clever you might invent some scheme like this:
    
    
    CREATE TABLE capitals (
      name       text,
      population real,
      elevation  int,    -- (in ft)
      state      char(2)
    );
    
    CREATE TABLE non_capitals (
      name       text,
      population real,
      elevation  int     -- (in ft)
    );
    
    CREATE VIEW cities AS
      SELECT name, population, elevation FROM capitals
        UNION
      SELECT name, population, elevation FROM non_capitals;
    

This works OK as far as querying goes, but it gets ugly when you need to update several rows, for one thing.

A better solution is this:
    
    
    CREATE TABLE cities (
      name       text,
      population real,
      elevation  int     -- (in ft)
    );
    
    CREATE TABLE capitals (
      state      char(2) UNIQUE NOT NULL
    ) INHERITS (cities);
    

In this case, a row of `capitals` _inherits_ all columns (`name`, `population`, and `elevation`) from its _parent_ , `cities`. The type of the column `name` is `text`, a native PostgreSQL type for variable length character strings. The `capitals` table has an additional column, `state`, which shows its state abbreviation. In PostgreSQL, a table can inherit from zero or more other tables.

For example, the following query finds the names of all cities, including state capitals, that are located at an elevation over 500 feet:
    
    
    SELECT name, elevation
      FROM cities
      WHERE elevation > 500;
    

which returns:
    
    
       name    | elevation
    -----------+-----------
     Las Vegas |      2174
     Mariposa  |      1953
     Madison   |       845
    (3 rows)
    

On the other hand, the following query finds all the cities that are not state capitals and are situated at an elevation over 500 feet:
    
    
    SELECT name, elevation
        FROM ONLY cities
        WHERE elevation > 500;
    
    
    
       name    | elevation
    -----------+-----------
     Las Vegas |      2174
     Mariposa  |      1953
    (2 rows)
    

Here the `ONLY` before `cities` indicates that the query should be run over only the `cities` table, and not tables below `cities` in the inheritance hierarchy. Many of the commands that we have already discussed — `SELECT`, `UPDATE`, and `DELETE` — support this `ONLY` notation.

### Note

Although inheritance is frequently useful, it has not been integrated with unique constraints or foreign keys, which limits its usefulness. See [Section 5.10](</II. The SQL Language/5. Data Definition/ddl-inherit.md>) for more detail.


  
