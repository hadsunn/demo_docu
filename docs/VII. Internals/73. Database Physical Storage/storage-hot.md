---
title: 73.7. Heap-Only Tuples (HOT)
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


To allow for high concurrency, PostgreSQL uses [multiversion concurrency control](</II. The SQL Language/13. Concurrency Control/mvcc-intro.md>) (MVCC) to store rows. However, MVCC has some downsides for update queries. Specifically, updates require new versions of rows to be added to tables. This can also require new index entries for each updated row, and removal of old versions of rows and their index entries can be expensive.

To help reduce the overhead of updates, PostgreSQL has an optimization called heap-only tuples (HOT). This optimization is possible when:

  * The update does not modify any columns referenced by the table's indexes, not including summarizing indexes. The only summarizing index method in the core PostgreSQL distribution is [BRIN](</VII. Internals/71. BRIN Indexes/71. BRIN Indexes.md>).

  * There is sufficient free space on the page containing the old row for the updated row.




In such cases, heap-only tuples provide two optimizations:

  * New index entries are not needed to represent updated rows, however, summary indexes may still need to be updated.

  * Old versions of updated rows can be completely removed during normal operation, including `SELECT`s, instead of requiring periodic vacuum operations. (This is possible because indexes do not reference their [page item identifiers](</VII. Internals/73. Database Physical Storage/storage-page-layout.md>).)




You can increase the likelihood of sufficient page space for HOT updates by decreasing a table's [`fillfactor`](sql-createtable.html#RELOPTION-FILLFACTOR). If you don't, HOT updates will still happen because new rows will naturally migrate to new pages and existing pages with sufficient free space for new row versions. The system view [pg_stat_all_tables](monitoring-stats.html#MONITORING-PG-STAT-ALL-TABLES-VIEW "28.2.18. pg_stat_all_tables") allows monitoring of the occurrence of HOT and non-HOT updates.


  
