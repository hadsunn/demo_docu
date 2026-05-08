---
title: SPI_getvalue
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    char * SPI_getvalue(HeapTuple _row_ , TupleDesc _rowdesc_ , int _colnumber_)
    

## Description

`SPI_getvalue` returns the string representation of the value of the specified column.

The result is returned in memory allocated using `palloc`. (You can use `pfree` to release the memory when you don't need it anymore.)

## Arguments

`HeapTuple _`row`_`
    

input row to be examined

`TupleDesc _`rowdesc`_`
    

input row description

`int _`colnumber`_`
    

column number (count starts at 1)

## Return Value

Column value, or `NULL` if the column is null, _`colnumber`_ is out of range (`SPI_result` is set to `SPI_ERROR_NOATTRIBUTE`), or no output function is available (`SPI_result` is set to `SPI_ERROR_NOOUTFUNC`).


  
