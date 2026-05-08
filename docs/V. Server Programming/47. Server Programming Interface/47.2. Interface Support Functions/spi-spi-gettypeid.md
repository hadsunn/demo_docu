---
title: SPI_gettypeid
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    Oid SPI_gettypeid(TupleDesc _rowdesc_ , int _colnumber_)
    

## Description

`SPI_gettypeid` returns the OID of the data type of the specified column.

## Arguments

`TupleDesc _`rowdesc`_`
    

input row description

`int _`colnumber`_`
    

column number (count starts at 1)

## Return Value

The OID of the data type of the specified column or `InvalidOid` on error. On error, `SPI_result` is set to `SPI_ERROR_NOATTRIBUTE`.


  
