---
title: 2.4. Populating a Table With Rows
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `INSERT` statement is used to populate a table with rows:
    
    
    INSERT INTO weather VALUES ('San Francisco', 46, 50, 0.25, '1994-11-27');
    

Note that all data types use rather obvious input formats. Constants that are not simple numeric values usually must be surrounded by single quotes (`'`), as in the example. The `date` type is actually quite flexible in what it accepts, but for this tutorial we will stick to the unambiguous format shown here.

The `point` type requires a coordinate pair as input, as shown here:
    
    
    INSERT INTO cities VALUES ('San Francisco', '(-194.0, 53.0)');
    

The syntax used so far requires you to remember the order of the columns. An alternative syntax allows you to list the columns explicitly:
    
    
    INSERT INTO weather (city, temp_lo, temp_hi, prcp, date)
        VALUES ('San Francisco', 43, 57, 0.0, '1994-11-29');
    

You can list the columns in a different order if you wish or even omit some columns, e.g., if the precipitation is unknown:
    
    
    INSERT INTO weather (date, city, temp_hi, temp_lo)
        VALUES ('1994-11-29', 'Hayward', 54, 37);
    

Many developers consider explicitly listing the columns better style than relying on the order implicitly.

Please enter all the commands shown above so you have some data to work with in the following sections.

You could also have used `COPY` to load large amounts of data from flat-text files. This is usually faster because the `COPY` command is optimized for this application while allowing less flexibility than `INSERT`. An example would be:
    
    
    COPY weather FROM '/home/user/weather.txt';
    

where the file name for the source file must be available on the machine running the backend process, not the client, since the backend process reads the file directly. You can read more about the `COPY` command in [COPY](</VI. Reference/I. SQL Commands/sql-copy.md>).


  
