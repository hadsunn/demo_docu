---
title: SPI_register_trigger_data
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    int SPI_register_trigger_data(TriggerData *_tdata_)
    

## Description

`SPI_register_trigger_data` makes any ephemeral relations captured by a trigger available to queries planned and executed through the current SPI connection. Currently, this means the transition tables captured by an `AFTER` trigger defined with a `REFERENCING OLD/NEW TABLE AS` ... clause. This function should be called by a PL trigger handler function after connecting.

## Arguments

`TriggerData *_`tdata`_`
    

the `TriggerData` object passed to a trigger handler function as `fcinfo->context`

## Return Value

If the execution of the command was successful then the following (nonnegative) value will be returned:

`SPI_OK_TD_REGISTER`
    

if the captured trigger data (if any) has been successfully registered

On error, one of the following negative values is returned:

`SPI_ERROR_ARGUMENT`
    

if _`tdata`_ is `NULL`

`SPI_ERROR_UNCONNECTED`
    

if called from an unconnected C function

`SPI_ERROR_REL_DUPLICATE`
    

if the name of any trigger data transient relation is already registered for this connection


  
