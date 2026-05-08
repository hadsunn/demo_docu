---
title: CREATE TRANSFORM
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    CREATE [ OR REPLACE ] TRANSFORM FOR _type_name_ LANGUAGE _lang_name_ (
        FROM SQL WITH FUNCTION _from_sql_function_name_ [ (_argument_type_ [, ...]) ],
        TO SQL WITH FUNCTION _to_sql_function_name_ [ (_argument_type_ [, ...]) ]
    );
    

## Description

`CREATE TRANSFORM` defines a new transform. `CREATE OR REPLACE TRANSFORM` will either create a new transform, or replace an existing definition.

A transform specifies how to adapt a data type to a procedural language. For example, when writing a function in PL/Python using the `hstore` type, PL/Python has no prior knowledge how to present `hstore` values in the Python environment. Language implementations usually default to using the text representation, but that is inconvenient when, for example, an associative array or a list would be more appropriate.

A transform specifies two functions:

  * A “from SQL” function that converts the type from the SQL environment to the language. This function will be invoked on the arguments of a function written in the language.

  * A “to SQL” function that converts the type from the language to the SQL environment. This function will be invoked on the return value of a function written in the language.




It is not necessary to provide both of these functions. If one is not specified, the language-specific default behavior will be used if necessary. (To prevent a transformation in a certain direction from happening at all, you could also write a transform function that always errors out.)

To be able to create a transform, you must own and have `USAGE` privilege on the type, have `USAGE` privilege on the language, and own and have `EXECUTE` privilege on the from-SQL and to-SQL functions, if specified.

## Parameters

_`type_name`_
    

The name of the data type of the transform.

_`lang_name`_
    

The name of the language of the transform.

`_`from_sql_function_name`_[(_`argument_type`_ [, ...])]`
    

The name of the function for converting the type from the SQL environment to the language. It must take one argument of type `internal` and return type `internal`. The actual argument will be of the type for the transform, and the function should be coded as if it were. (But it is not allowed to declare an SQL-level function returning `internal` without at least one argument of type `internal`.) The actual return value will be something specific to the language implementation. If no argument list is specified, the function name must be unique in its schema.

`_`to_sql_function_name`_[(_`argument_type`_ [, ...])]`
    

The name of the function for converting the type from the language to the SQL environment. It must take one argument of type `internal` and return the type that is the type for the transform. The actual argument value will be something specific to the language implementation. If no argument list is specified, the function name must be unique in its schema.

## Notes

Use [`DROP TRANSFORM`](</VI. Reference/I. SQL Commands/sql-droptransform.md>) to remove transforms.

## Examples

To create a transform for type `hstore` and language `plpython3u`, first set up the type and the language:
    
    
    CREATE TYPE hstore ...;
    
    CREATE EXTENSION plpython3u;
    

Then create the necessary functions:
    
    
    CREATE FUNCTION hstore_to_plpython(val internal) RETURNS internal
    LANGUAGE C STRICT IMMUTABLE
    AS ...;
    
    CREATE FUNCTION plpython_to_hstore(val internal) RETURNS hstore
    LANGUAGE C STRICT IMMUTABLE
    AS ...;
    

And finally create the transform to connect them all together:
    
    
    CREATE TRANSFORM FOR hstore LANGUAGE plpython3u (
        FROM SQL WITH FUNCTION hstore_to_plpython(internal),
        TO SQL WITH FUNCTION plpython_to_hstore(internal)
    );
    

In practice, these commands would be wrapped up in an extension.

The `contrib` section contains a number of extensions that provide transforms, which can serve as real-world examples.

## Compatibility

This form of `CREATE TRANSFORM` is a PostgreSQL extension. There is a `CREATE TRANSFORM` command in the SQL standard, but it is for adapting data types to client languages. That usage is not supported by PostgreSQL.

## See Also

[CREATE FUNCTION](</VI. Reference/I. SQL Commands/sql-createfunction.md>)


  
