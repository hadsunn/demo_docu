---
title: DROP CAST
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP CAST [ IF EXISTS ] (_source_type_ AS _target_type_) [ CASCADE | RESTRICT ]
    

## Description

`DROP CAST` removes a previously defined cast.

To be able to drop a cast, you must own the source or the target data type. These are the same privileges that are required to create a cast.

## Parameters

`IF EXISTS`
    

Do not throw an error if the cast does not exist. A notice is issued in this case.

_`source_type`_
    

The name of the source data type of the cast.

_`target_type`_
    

The name of the target data type of the cast.

`CASCADE`  
`RESTRICT`
    

These key words do not have any effect, since there are no dependencies on casts.

## Examples

To drop the cast from type `text` to type `int`:
    
    
    DROP CAST (text AS int);
    

## Compatibility

The `DROP CAST` command conforms to the SQL standard.

## See Also

[CREATE CAST](</VI. Reference/I. SQL Commands/sql-createcast.md>)


  
