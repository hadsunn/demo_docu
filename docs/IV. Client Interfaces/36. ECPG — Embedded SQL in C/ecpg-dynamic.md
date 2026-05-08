---
title: 36.5. Dynamic SQL
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[36.5.1. Executing Statements without a Result Set](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-dynamic.md#3651-executing-statements-without-a-result-set>)


[36.5.2. Executing a Statement with Input Parameters](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-dynamic.md#3652-executing-a-statement-with-input-parameters>)


[36.5.3. Executing a Statement with a Result Set](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/ecpg-dynamic.md#3653-executing-a-statement-with-a-result-set>)



In many cases, the particular SQL statements that an application has to execute are known at the time the application is written. In some cases, however, the SQL statements are composed at run time or provided by an external source. In these cases you cannot embed the SQL statements directly into the C source code, but there is a facility that allows you to call arbitrary SQL statements that you provide in a string variable.

### 36.5.1. Executing Statements without a Result Set #

The simplest way to execute an arbitrary SQL statement is to use the command `EXECUTE IMMEDIATE`. For example:
    
    
    EXEC SQL BEGIN DECLARE SECTION;
    const char *stmt = "CREATE TABLE test1 (...);";
    EXEC SQL END DECLARE SECTION;
    
    EXEC SQL EXECUTE IMMEDIATE :stmt;
    

`EXECUTE IMMEDIATE` can be used for SQL statements that do not return a result set (e.g., DDL, `INSERT`, `UPDATE`, `DELETE`). You cannot execute statements that retrieve data (e.g., `SELECT`) this way. The next section describes how to do that.

### 36.5.2. Executing a Statement with Input Parameters #

A more powerful way to execute arbitrary SQL statements is to prepare them once and execute the prepared statement as often as you like. It is also possible to prepare a generalized version of a statement and then execute specific versions of it by substituting parameters. When preparing the statement, write question marks where you want to substitute parameters later. For example:
    
    
    EXEC SQL BEGIN DECLARE SECTION;
    const char *stmt = "INSERT INTO test1 VALUES(?, ?);";
    EXEC SQL END DECLARE SECTION;
    
    EXEC SQL PREPARE mystmt FROM :stmt;
     ...
    EXEC SQL EXECUTE mystmt USING 42, 'foobar';
    

When you don't need the prepared statement anymore, you should deallocate it:
    
    
    EXEC SQL DEALLOCATE PREPARE _name_ ;
    

### 36.5.3. Executing a Statement with a Result Set #

To execute an SQL statement with a single result row, `EXECUTE` can be used. To save the result, add an `INTO` clause.
    
    
    EXEC SQL BEGIN DECLARE SECTION;
    const char *stmt = "SELECT a, b, c FROM test1 WHERE a > ?";
    int v1, v2;
    VARCHAR v3[50];
    EXEC SQL END DECLARE SECTION;
    
    EXEC SQL PREPARE mystmt FROM :stmt;
     ...
    EXEC SQL EXECUTE mystmt INTO :v1, :v2, :v3 USING 37;
    
    

An `EXECUTE` command can have an `INTO` clause, a `USING` clause, both, or neither.

If a query is expected to return more than one result row, a cursor should be used, as in the following example. (See [Section 36.3.2](ecpg-commands.html#ECPG-CURSORS "36.3.2. Using Cursors") for more details about the cursor.)
    
    
    EXEC SQL BEGIN DECLARE SECTION;
    char dbaname[128];
    char datname[128];
    char *stmt = "SELECT u.usename as dbaname, d.datname "
                 "  FROM pg_database d, pg_user u "
                 "  WHERE d.datdba = u.usesysid";
    EXEC SQL END DECLARE SECTION;
    
    EXEC SQL CONNECT TO testdb AS con1 USER testuser;
    EXEC SQL SELECT pg_catalog.set_config('search_path', '', false); EXEC SQL COMMIT;
    
    EXEC SQL PREPARE stmt1 FROM :stmt;
    
    EXEC SQL DECLARE cursor1 CURSOR FOR stmt1;
    EXEC SQL OPEN cursor1;
    
    EXEC SQL WHENEVER NOT FOUND DO BREAK;
    
    while (1)
    {
        EXEC SQL FETCH cursor1 INTO :dbaname,:datname;
        printf("dbaname=%s, datname=%s\n", dbaname, datname);
    }
    
    EXEC SQL CLOSE cursor1;
    
    EXEC SQL COMMIT;
    EXEC SQL DISCONNECT ALL;
    


  
