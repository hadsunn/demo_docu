---
title: SPI_prepare_params
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    SPIPlanPtr SPI_prepare_params(const char * _command_ ,
                                  ParserSetupHook _parserSetup_ ,
                                  void * _parserSetupArg_ ,
                                  int _cursorOptions_)
    

## Description

`SPI_prepare_params` creates and returns a prepared statement for the specified command, but doesn't execute the command. This function is equivalent to `SPI_prepare_cursor`, with the addition that the caller can specify parser hook functions to control the parsing of external parameter references.

This function is now deprecated in favor of `SPI_prepare_extended`.

## Arguments

`const char * _`command`_`
    

command string

`ParserSetupHook _`parserSetup`_`
    

Parser hook setup function

`void * _`parserSetupArg`_`
    

pass-through argument for _`parserSetup`_

`int _`cursorOptions`_`
    

integer bit mask of cursor options; zero produces default behavior

## Return Value

`SPI_prepare_params` has the same return conventions as `SPI_prepare`.


  
