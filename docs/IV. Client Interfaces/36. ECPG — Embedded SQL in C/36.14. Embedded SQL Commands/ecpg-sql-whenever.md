---
title: WHENEVER
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    WHENEVER { NOT FOUND | SQLERROR | SQLWARNING } _action_
    

## Description

Define a behavior which is called on the special cases (Rows not found, SQL warnings or errors) in the result of SQL execution.

## Parameters

See [Section 36.8.1](ecpg-errors.html#ECPG-WHENEVER "36.8.1. Setting Callbacks") for a description of the parameters.

## Examples
    
    
    EXEC SQL WHENEVER NOT FOUND CONTINUE;
    EXEC SQL WHENEVER NOT FOUND DO BREAK;
    EXEC SQL WHENEVER NOT FOUND DO CONTINUE;
    EXEC SQL WHENEVER SQLWARNING SQLPRINT;
    EXEC SQL WHENEVER SQLWARNING DO warn();
    EXEC SQL WHENEVER SQLERROR sqlprint;
    EXEC SQL WHENEVER SQLERROR CALL print2();
    EXEC SQL WHENEVER SQLERROR DO handle_error("select");
    EXEC SQL WHENEVER SQLERROR DO sqlnotice(NULL, NONO);
    EXEC SQL WHENEVER SQLERROR DO sqlprint();
    EXEC SQL WHENEVER SQLERROR GOTO error_label;
    EXEC SQL WHENEVER SQLERROR STOP;
    

A typical application is the use of `WHENEVER NOT FOUND BREAK` to handle looping through result sets:
    
    
    int
    main(void)
    {
        EXEC SQL CONNECT TO testdb AS con1;
        EXEC SQL SELECT pg_catalog.set_config('search_path', '', false); EXEC SQL COMMIT;
        EXEC SQL ALLOCATE DESCRIPTOR d;
        EXEC SQL DECLARE cur CURSOR FOR SELECT current_database(), 'hoge', 256;
        EXEC SQL OPEN cur;
    
        /* when end of result set reached, break out of while loop */
        EXEC SQL WHENEVER NOT FOUND DO BREAK;
    
        while (1)
        {
            EXEC SQL FETCH NEXT FROM cur INTO SQL DESCRIPTOR d;
            ...
        }
    
        EXEC SQL CLOSE cur;
        EXEC SQL COMMIT;
    
        EXEC SQL DEALLOCATE DESCRIPTOR d;
        EXEC SQL DISCONNECT ALL;
    
        return 0;
    }
    

## Compatibility

`WHENEVER` is specified in the SQL standard, but most of the actions are PostgreSQL extensions.


  
