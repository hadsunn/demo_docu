---
title: F.45. test_decoding — SQL-based test/example module for WAL logical decoding
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


`test_decoding` is an example of a logical decoding output plugin. It doesn't do anything especially useful, but can serve as a starting point for developing your own output plugin.

`test_decoding` receives WAL through the logical decoding mechanism and decodes it into text representations of the operations performed.

Typical output from this plugin, used over the SQL logical decoding interface, might be:
    
    
    postgres=# SELECT * FROM pg_logical_slot_get_changes('test_slot', NULL, NULL, 'include-xids', '0');
       lsn     | xid |                       data
    -----------+-----+--------------------------------------------------
     0/16D30F8 | 691 | BEGIN
     0/16D32A0 | 691 | table public.data: INSERT: id[int4]:2 data[text]:'arg'
     0/16D32A0 | 691 | table public.data: INSERT: id[int4]:3 data[text]:'demo'
     0/16D32A0 | 691 | COMMIT
     0/16D32D8 | 692 | BEGIN
     0/16D3398 | 692 | table public.data: DELETE: id[int4]:2
     0/16D3398 | 692 | table public.data: DELETE: id[int4]:3
     0/16D3398 | 692 | COMMIT
    (8 rows)
    

We can also get the changes of the in-progress transaction, and the typical output might be:
    
    
    postgres[33712]=#* SELECT * FROM pg_logical_slot_get_changes('test_slot', NULL, NULL, 'stream-changes', '1');
        lsn    | xid |                       data
    -----------+-----+--------------------------------------------------
     0/16B21F8 | 503 | opening a streamed block for transaction TXN 503
     0/16B21F8 | 503 | streaming change for TXN 503
     0/16B2300 | 503 | streaming change for TXN 503
     0/16B2408 | 503 | streaming change for TXN 503
     0/16BEBA0 | 503 | closing a streamed block for transaction TXN 503
     0/16B21F8 | 503 | opening a streamed block for transaction TXN 503
     0/16BECA8 | 503 | streaming change for TXN 503
     0/16BEDB0 | 503 | streaming change for TXN 503
     0/16BEEB8 | 503 | streaming change for TXN 503
     0/16BEBA0 | 503 | closing a streamed block for transaction TXN 503
    (10 rows)
    


  
