---
title: SPI_unregister_relation
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    int SPI_unregister_relation(const char * _name_)
    

## Description

`SPI_unregister_relation` removes an ephemeral named relation from the registry for the current connection.

## Arguments

`const char * _`name`_`
    

the relation registry entry name

## Return Value

If the execution of the command was successful then the following (nonnegative) value will be returned:

`SPI_OK_REL_UNREGISTER`
    

if the tuplestore has been successfully removed from the registry

On error, one of the following negative values is returned:

`SPI_ERROR_ARGUMENT`
    

if _`name`_ is `NULL`

`SPI_ERROR_UNCONNECTED`
    

if called from an unconnected C function

`SPI_ERROR_REL_NOT_FOUND`
    

if _`name`_ is not found in the registry for the current connection


  
