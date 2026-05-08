---
title: SPI_getargtypeid
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    Oid SPI_getargtypeid(SPIPlanPtr _plan_ , int _argIndex_)
    

## Description

`SPI_getargtypeid` returns the OID representing the type for the _`argIndex`_ 'th argument of a statement prepared by `SPI_prepare`. First argument is at index zero.

## Arguments

`SPIPlanPtr _`plan`_`
    

prepared statement (returned by `SPI_prepare`)

`int _`argIndex`_`
    

zero based index of the argument

## Return Value

The type OID of the argument at the given index. If the _`plan`_ is `NULL` or invalid, or _`argIndex`_ is less than 0 or not less than the number of arguments declared for the _`plan`_ , `SPI_result` is set to `SPI_ERROR_ARGUMENT` and `InvalidOid` is returned.


  
