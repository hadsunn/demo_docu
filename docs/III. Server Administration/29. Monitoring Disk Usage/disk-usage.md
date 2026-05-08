---
title: 29.1. Determining Disk Usage
---







Supported versions: 13 / 14 / 15 / 16 / 17


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Each table has a primary heap disk file where most of the data is stored. If the table has any columns with potentially-wide values, there also might be a TOAST file associated with the table, which is used to store values too wide to fit comfortably in the main table (see [Section 73.2](</VII. Internals/73. Database Physical Storage/storage-toast.md>).

You can monitor disk space in three ways: using the SQL functions listed in [Table 9.96](<functions-admin#FUNCTIONS-ADMIN-DBSIZE>) module, or using manual inspection of the system catalogs. The SQL functions are the easiest to use and are generally recommended. The remainder of this section shows how to do it by inspection of the system catalogs.

Using psql on a recently vacuumed or analyzed database, you can issue queries to see the disk usage of any table:
    
    
    SELECT pg_relation_filepath(oid), relpages FROM pg_class WHERE relname = 'customer';
    
     pg_relation_filepath | relpages
    ----------------------+----------
     base/16384/16806     |       60
    (1 row)
    

Each page is typically 8 kilobytes. (Remember, `relpages` is only updated by `VACUUM`, `ANALYZE`, and a few DDL commands such as `CREATE INDEX`.) The file path name is of interest if you want to examine the table's disk file directly.

To show the space used by TOAST tables, use a query like the following:
    
    
    SELECT relname, relpages
    FROM pg_class,
         (SELECT reltoastrelid
          FROM pg_class
          WHERE relname = 'customer') AS ss
    WHERE oid = ss.reltoastrelid OR
          oid = (SELECT indexrelid
                 FROM pg_index
                 WHERE indrelid = ss.reltoastrelid)
    ORDER BY relname;
    
           relname        | relpages
    ----------------------+----------
     pg_toast_16806       |        0
     pg_toast_16806_index |        1
    

You can easily display index sizes, too:
    
    
    SELECT c2.relname, c2.relpages
    FROM pg_class c, pg_class c2, pg_index i
    WHERE c.relname = 'customer' AND
          c.oid = i.indrelid AND
          c2.oid = i.indexrelid
    ORDER BY c2.relname;
    
          relname      | relpages
    -------------------+----------
     customer_id_index |       26
    

It is easy to find your largest tables and indexes using this information:
    
    
    SELECT relname, relpages
    FROM pg_class
    ORDER BY relpages DESC;
    
           relname        | relpages
    ----------------------+----------
     bigtable             |     3290
     customer             |     3144
    


  
