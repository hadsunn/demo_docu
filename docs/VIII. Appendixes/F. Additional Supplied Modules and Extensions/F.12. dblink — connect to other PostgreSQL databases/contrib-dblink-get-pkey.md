---
title: dblink_get_pkey
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    dblink_get_pkey(text relname) returns setof dblink_pkey_results
    

## Description

`dblink_get_pkey` provides information about the primary key of a relation in the local database. This is sometimes useful in generating queries to be sent to remote databases.

## Arguments

_`relname`_
    

Name of a local relation, for example `foo` or `myschema.mytab`. Include double quotes if the name is mixed-case or contains special characters, for example `"FooBar"`; without quotes, the string will be folded to lower case.

## Return Value

Returns one row for each primary key field, or no rows if the relation has no primary key. The result row type is defined as
    
    
    CREATE TYPE dblink_pkey_results AS (position int, colname text);
    

The `position` column simply runs from 1 to _`N`_ ; it is the number of the field within the primary key, not the number within the table's columns.

## Examples
    
    
    CREATE TABLE foobar (
        f1 int,
        f2 int,
        f3 int,
        PRIMARY KEY (f1, f2, f3)
    );
    CREATE TABLE
    
    SELECT * FROM dblink_get_pkey('foobar');
     position | colname
    ----------+---------
            1 | f1
            2 | f2
            3 | f3
    (3 rows)
    


  
