---
title: 11.11. Indexes and Collations
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


An index can support only one collation per index column. If multiple collations are of interest, multiple indexes may be needed.

Consider these statements:
    
    
    CREATE TABLE test1c (
        id integer,
        content varchar COLLATE "x"
    );
    
    CREATE INDEX test1c_content_index ON test1c (content);
    

The index automatically uses the collation of the underlying column. So a query of the form
    
    
    SELECT * FROM test1c WHERE content > _constant_ ;
    

could use the index, because the comparison will by default use the collation of the column. However, this index cannot accelerate queries that involve some other collation. So if queries of the form, say,
    
    
    SELECT * FROM test1c WHERE content > _constant_ COLLATE "y";
    

are also of interest, an additional index could be created that supports the `"y"` collation, like this:
    
    
    CREATE INDEX test1c_content_y_index ON test1c (content COLLATE "y");
    


  
