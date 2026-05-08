---
title: F.13. dict_int — example full-text search dictionary for integers
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[F.13.1. Configuration](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/dict-int.md#f131-configuration>)


[F.13.2. Usage](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/dict-int.md#f132-usage>)



`dict_int` is an example of an add-on dictionary template for full-text search. The motivation for this example dictionary is to control the indexing of integers (signed and unsigned), allowing such numbers to be indexed while preventing excessive growth in the number of unique words, which greatly affects the performance of searching.

This module is considered “trusted”, that is, it can be installed by non-superusers who have `CREATE` privilege on the current database.

### F.13.1. Configuration #

The dictionary accepts three options:

  * The `maxlen` parameter specifies the maximum number of digits allowed in an integer word. The default value is 6.

  * The `rejectlong` parameter specifies whether an overlength integer should be truncated or ignored. If `rejectlong` is `false` (the default), the dictionary returns the first `maxlen` digits of the integer. If `rejectlong` is `true`, the dictionary treats an overlength integer as a stop word, so that it will not be indexed. Note that this also means that such an integer cannot be searched for.

  * The `absval` parameter specifies whether leading “`+`” or “`-`” signs should be removed from integer words. The default is `false`. When `true`, the sign is removed before `maxlen` is applied.




### F.13.2. Usage #

Installing the `dict_int` extension creates a text search template `intdict_template` and a dictionary `intdict` based on it, with the default parameters. You can alter the parameters, for example
    
    
    mydb# ALTER TEXT SEARCH DICTIONARY intdict (MAXLEN = 4, REJECTLONG = true);
    ALTER TEXT SEARCH DICTIONARY
    

or create new dictionaries based on the template.

To test the dictionary, you can try
    
    
    mydb# select ts_lexize('intdict', '12345678');
     ts_lexize
    -----------
     {123456}
    

but real-world usage will involve including it in a text search configuration as described in [Chapter 12](</II. The SQL Language/12. Full Text Search/12. Full Text Search.md>). That might look like this:
    
    
    ALTER TEXT SEARCH CONFIGURATION english
        ALTER MAPPING FOR int, uint WITH intdict;
    


  
