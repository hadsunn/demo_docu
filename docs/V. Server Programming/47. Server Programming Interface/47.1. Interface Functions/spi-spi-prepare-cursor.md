---
title: SPI_prepare_cursor
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    SPIPlanPtr SPI_prepare_cursor(const char * _command_ , int _nargs_ ,
                                  Oid * _argtypes_ , int _cursorOptions_)
    

## Description

`SPI_prepare_cursor` is identical to `SPI_prepare`, except that it also allows specification of the planner's “cursor options” parameter. This is a bit mask having the values shown in `nodes/parsenodes.h` for the `options` field of `DeclareCursorStmt`. `SPI_prepare` always takes the cursor options as zero.

This function is now deprecated in favor of `SPI_prepare_extended`.

## Arguments

`const char * _`command`_`
    

command string

`int _`nargs`_`
    

number of input parameters (`$1`, `$2`, etc.)

`Oid * _`argtypes`_`
    

pointer to an array containing the OIDs of the data types of the parameters

`int _`cursorOptions`_`
    

integer bit mask of cursor options; zero produces default behavior

## Return Value

`SPI_prepare_cursor` has the same return conventions as `SPI_prepare`.

## Notes

Useful bits to set in _`cursorOptions`_ include `CURSOR_OPT_SCROLL`, `CURSOR_OPT_NO_SCROLL`, `CURSOR_OPT_FAST_PLAN`, `CURSOR_OPT_GENERIC_PLAN`, and `CURSOR_OPT_CUSTOM_PLAN`. Note in particular that `CURSOR_OPT_HOLD` is ignored.


  
