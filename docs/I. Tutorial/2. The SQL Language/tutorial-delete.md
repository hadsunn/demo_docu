---
title: 2.9. Deletions
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Rows can be removed from a table using the `DELETE` command. Suppose you are no longer interested in the weather of Hayward. Then you can do the following to delete those rows from the table:
    
    
    DELETE FROM weather WHERE city = 'Hayward';
    

All weather records belonging to Hayward are removed.
    
    
    SELECT * FROM weather;
    
    
    
         city      | temp_lo | temp_hi | prcp |    date
    ---------------+---------+---------+------+------------
     San Francisco |      46 |      50 | 0.25 | 1994-11-27
     San Francisco |      41 |      55 |    0 | 1994-11-29
    (2 rows)
    

One should be wary of statements of the form
    
    
    DELETE FROM _tablename_ ;
    

Without a qualification, `DELETE` will remove _all_ rows from the given table, leaving it empty. The system will not request confirmation before doing this!


  
