---
title: 23.5. Destroying a Database
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Databases are destroyed with the command [DROP DATABASE](</VI. Reference/I. SQL Commands/sql-dropdatabase.md>):
    
    
    DROP DATABASE _name_ ;
    

Only the owner of the database, or a superuser, can drop a database. Dropping a database removes all objects that were contained within the database. The destruction of a database cannot be undone.

You cannot execute the `DROP DATABASE` command while connected to the victim database. You can, however, be connected to any other database, including the `template1` database. `template1` would be the only option for dropping the last user database of a given cluster.

For convenience, there is also a shell program to drop databases, [dropdb](</VI. Reference/II. PostgreSQL Client Applications/app-dropdb.md>):
    
    
    dropdb _dbname_
    

(Unlike `createdb`, it is not the default action to drop the database with the current user name.)


  
