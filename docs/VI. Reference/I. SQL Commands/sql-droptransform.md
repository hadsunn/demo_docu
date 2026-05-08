---
title: DROP TRANSFORM
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP TRANSFORM [ IF EXISTS ] FOR _type_name_ LANGUAGE _lang_name_ [ CASCADE | RESTRICT ]
    

## Description

`DROP TRANSFORM` removes a previously defined transform.

To be able to drop a transform, you must own the type and the language. These are the same privileges that are required to create a transform.

## Parameters

`IF EXISTS`
    

Do not throw an error if the transform does not exist. A notice is issued in this case.

_`type_name`_
    

The name of the data type of the transform.

_`lang_name`_
    

The name of the language of the transform.

`CASCADE`
    

Automatically drop objects that depend on the transform, and in turn all objects that depend on those objects (see [Section 5.14](</II. The SQL Language/5. Data Definition/ddl-depend.md>)).

`RESTRICT`
    

Refuse to drop the transform if any objects depend on it. This is the default.

## Examples

To drop the transform for type `hstore` and language `plpython3u`:
    
    
    DROP TRANSFORM FOR hstore LANGUAGE plpython3u;
    

## Compatibility

This form of `DROP TRANSFORM` is a PostgreSQL extension. See [CREATE TRANSFORM](</VI. Reference/I. SQL Commands/sql-createtransform.md>) for details.

## See Also

[CREATE TRANSFORM](</VI. Reference/I. SQL Commands/sql-createtransform.md>)


  
