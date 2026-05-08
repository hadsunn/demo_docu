---
title: 68.4. Implementation
---







Supported versions: 13 / 14 / 15 / 16 / 17


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[68.4.1. GiST Index Build Methods](</VII. Internals/68. GiST Indexes/gist-implementation.md#6841-gist-index-build-methods>)



### 68.4.1. GiST Index Build Methods #

The simplest way to build a GiST index is just to insert all the entries, one by one. This tends to be slow for large indexes, because if the index tuples are scattered across the index and the index is large enough to not fit in cache, a lot of random I/O will be needed. PostgreSQL supports two alternative methods for initial build of a GiST index: _sorted_ and _buffered_ modes.

The sorted method is only available if each of the opclasses used by the index provides a `sortsupport` function, as described in [Section 68.3](</VII. Internals/68. GiST Indexes/gist-extensibility.md>). If they do, this method is usually the best, so it is used by default.

The buffered method works by not inserting tuples directly into the index right away. It can dramatically reduce the amount of random I/O needed for non-ordered data sets. For well-ordered data sets the benefit is smaller or non-existent, because only a small number of pages receive new tuples at a time, and those pages fit in cache even if the index as a whole does not.

The buffered method needs to call the `penalty` function more often than the simple method does, which consumes some extra CPU resources. Also, the buffers need temporary disk space, up to the size of the resulting index. Buffering can also influence the quality of the resulting index, in both positive and negative directions. That influence depends on various factors, like the distribution of the input data and the operator class implementation.

If sorting is not possible, then by default a GiST index build switches to the buffering method when the index size reaches [effective_cache_size](runtime-config-query.html#GUC-EFFECTIVE-CACHE-SIZE). Buffering can be manually forced or prevented by the `buffering` parameter to the CREATE INDEX command. The default behavior is good for most cases, but turning buffering off might speed up the build somewhat if the input data is ordered.


  
