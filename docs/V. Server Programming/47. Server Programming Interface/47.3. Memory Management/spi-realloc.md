---
title: SPI_repalloc
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    void * SPI_repalloc(void * _pointer_ , Size _size_)
    

## Description

`SPI_repalloc` changes the size of a memory segment previously allocated using `SPI_palloc`.

This function is no longer different from plain `repalloc`. It's kept just for backward compatibility of existing code.

## Arguments

`void * _`pointer`_`
    

pointer to existing storage to change

`Size _`size`_`
    

size in bytes of storage to allocate

## Return Value

pointer to new storage space of specified size with the contents copied from the existing area


  
