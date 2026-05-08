---
title: dblink_build_sql_delete
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    dblink_build_sql_delete(text relname,
                            int2vector primary_key_attnums,
                            integer num_primary_key_atts,
                            text[] tgt_pk_att_vals_array) returns text
    

## Description

`dblink_build_sql_delete` can be useful in doing selective replication of a local table to a remote database. It builds an SQL `DELETE` command that will delete the row with the given primary key values.

## Arguments

_`relname`_
    

Name of a local relation, for example `foo` or `myschema.mytab`. Include double quotes if the name is mixed-case or contains special characters, for example `"FooBar"`; without quotes, the string will be folded to lower case.

_`primary_key_attnums`_
    

Attribute numbers (1-based) of the primary key fields, for example `1 2`.

_`num_primary_key_atts`_
    

The number of primary key fields.

_`tgt_pk_att_vals_array`_
    

Values of the primary key fields to be used in the resulting `DELETE` command. Each field is represented in text form.

## Return Value

Returns the requested SQL statement as text.

## Notes

As of PostgreSQL 9.0, the attribute numbers in _`primary_key_attnums`_ are interpreted as logical column numbers, corresponding to the column's position in `SELECT * FROM relname`. Previous versions interpreted the numbers as physical column positions. There is a difference if any column(s) to the left of the indicated column have been dropped during the lifetime of the table.

## Examples
    
    
    SELECT dblink_build_sql_delete('"MyFoo"', '1 2', 2, '{"1", "b"}');
               dblink_build_sql_delete
    ---------------------------------------------
     DELETE FROM "MyFoo" WHERE f1='1' AND f2='b'
    (1 row)
    


  
