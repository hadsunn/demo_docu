---
title: SPI_register_relation
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    int SPI_register_relation(EphemeralNamedRelation _enr_)
    

## Description

`SPI_register_relation` makes an ephemeral named relation, with associated information, available to queries planned and executed through the current SPI connection.

## Arguments

`EphemeralNamedRelation _`enr`_`
    

the ephemeral named relation registry entry

## Return Value

If the execution of the command was successful then the following (nonnegative) value will be returned:

`SPI_OK_REL_REGISTER`
    

if the relation has been successfully registered by name

On error, one of the following negative values is returned:

`SPI_ERROR_ARGUMENT`
    

if _`enr`_ is `NULL` or its `name` field is `NULL`

`SPI_ERROR_UNCONNECTED`
    

if called from an unconnected C function

`SPI_ERROR_REL_DUPLICATE`
    

if the name specified in the `name` field of _`enr`_ is already registered for this connection


  
