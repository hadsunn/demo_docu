---
title: 3.3. Foreign Keys
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Recall the `weather` and `cities` tables from [Chapter 2](</I. Tutorial/2. The SQL Language/2. The SQL Language.md>). Consider the following problem: You want to make sure that no one can insert rows in the `weather` table that do not have a matching entry in the `cities` table. This is called maintaining the _referential integrity_ of your data. In simplistic database systems this would be implemented (if at all) by first looking at the `cities` table to check if a matching record exists, and then inserting or rejecting the new `weather` records. This approach has a number of problems and is very inconvenient, so PostgreSQL can do this for you.

The new declaration of the tables would look like this:
    
    
    CREATE TABLE cities (
            name     varchar(80) primary key,
            location point
    );
    
    CREATE TABLE weather (
            city      varchar(80) references cities(name),
            temp_lo   int,
            temp_hi   int,
            prcp      real,
            date      date
    );
    

Now try inserting an invalid record:
    
    
    INSERT INTO weather VALUES ('Berkeley', 45, 53, 0.0, '1994-11-28');
    
    
    
    ERROR:  insert or update on table "weather" violates foreign key constraint "weather_city_fkey"
    DETAIL:  Key (city)=(Berkeley) is not present in table "cities".
    

The behavior of foreign keys can be finely tuned to your application. We will not go beyond this simple example in this tutorial, but just refer you to [Chapter 5](</II. The SQL Language/5. Data Definition/5. Data Definition.md>) for more information. Making correct use of foreign keys will definitely improve the quality of your database applications, so you are strongly encouraged to learn about them.


  
