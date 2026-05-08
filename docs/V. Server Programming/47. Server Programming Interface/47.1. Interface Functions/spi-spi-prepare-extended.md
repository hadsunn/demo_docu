---
title: SPI_prepare_extended
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


---  
  



## Synopsis
    
    
    SPIPlanPtr SPI_prepare_extended(const char * _command_ ,
                                    const SPIPrepareOptions * _options_)
    

## Description

`SPI_prepare_extended` creates and returns a prepared statement for the specified command, but doesn't execute the command. This function is equivalent to `SPI_prepare`, with the addition that the caller can specify options to control the parsing of external parameter references, as well as other facets of query parsing and planning.

## Arguments

`const char * _`command`_`
    

command string

`const SPIPrepareOptions * _`options`_`
    

struct containing optional arguments

Callers should always zero out the entire _`options`_ struct, then fill whichever fields they want to set. This ensures forward compatibility of code, since any fields that are added to the struct in future will be defined to behave backwards-compatibly if they are zero. The currently available _`options`_ fields are:

`ParserSetupHook _`parserSetup`_`
    

Parser hook setup function

`void * _`parserSetupArg`_`
    

pass-through argument for _`parserSetup`_

`RawParseMode _`parseMode`_`
    

mode for raw parsing; `RAW_PARSE_DEFAULT` (zero) produces default behavior

`int _`cursorOptions`_`
    

integer bit mask of cursor options; zero produces default behavior

## Return Value

`SPI_prepare_extended` has the same return conventions as `SPI_prepare`.


  
