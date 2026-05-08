---
title: SPI_cursor_open_with_paramlist
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    Portal SPI_cursor_open_with_paramlist(const char *_name_ ,
                                          SPIPlanPtr _plan_ ,
                                          ParamListInfo _params_ ,
                                          bool _read_only_)
    

## Description

`SPI_cursor_open_with_paramlist` sets up a cursor (internally, a portal) that will execute a statement prepared by `SPI_prepare`. This function is equivalent to `SPI_cursor_open` except that information about the parameter values to be passed to the query is presented differently. The `ParamListInfo` representation can be convenient for passing down values that are already available in that format. It also supports use of dynamic parameter sets via hook functions specified in `ParamListInfo`.

The passed-in parameter data will be copied into the cursor's portal, so it can be freed while the cursor still exists.

## Arguments

`const char * _`name`_`
    

name for portal, or `NULL` to let the system select a name

`SPIPlanPtr _`plan`_`
    

prepared statement (returned by `SPI_prepare`)

`ParamListInfo _`params`_`
    

data structure containing parameter types and values; NULL if none

`bool _`read_only`_`
    

`true` for read-only execution

## Return Value

Pointer to portal containing the cursor. Note there is no error return convention; any error will be reported via `elog`.


  
