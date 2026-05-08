---
title: SPI_getbinval
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    Datum SPI_getbinval(HeapTuple _row_ , TupleDesc _rowdesc_ , int _colnumber_ ,
                        bool * _isnull_)
    

## Description

`SPI_getbinval` returns the value of the specified column in the internal form (as type `Datum`).

This function does not allocate new space for the datum. In the case of a pass-by-reference data type, the return value will be a pointer into the passed row.

## Arguments

`HeapTuple _`row`_`
    

input row to be examined

`TupleDesc _`rowdesc`_`
    

input row description

`int _`colnumber`_`
    

column number (count starts at 1)

`bool * _`isnull`_`
    

flag for a null value in the column

## Return Value

The binary value of the column is returned. The variable pointed to by _`isnull`_ is set to true if the column is null, else to false.

`SPI_result` is set to `SPI_ERROR_NOATTRIBUTE` on error.


  
