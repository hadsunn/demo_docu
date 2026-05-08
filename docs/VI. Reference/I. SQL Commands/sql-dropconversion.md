---
title: DROP CONVERSION
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP CONVERSION [ IF EXISTS ] _name_ [ CASCADE | RESTRICT ]
    

## Description

`DROP CONVERSION` removes a previously defined conversion. To be able to drop a conversion, you must own the conversion.

## Parameters

`IF EXISTS`
    

Do not throw an error if the conversion does not exist. A notice is issued in this case.

_`name`_
    

The name of the conversion. The conversion name can be schema-qualified.

`CASCADE`  
`RESTRICT`
    

These key words do not have any effect, since there are no dependencies on conversions.

## Examples

To drop the conversion named `myname`:
    
    
    DROP CONVERSION myname;
    

## Compatibility

There is no `DROP CONVERSION` statement in the SQL standard, but a `DROP TRANSLATION` statement that goes along with the `CREATE TRANSLATION` statement that is similar to the `CREATE CONVERSION` statement in PostgreSQL.

## See Also

[ALTER CONVERSION](</VI. Reference/I. SQL Commands/sql-alterconversion.md>)


  
