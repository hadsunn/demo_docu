---
title: 46.4. Anonymous Code Blocks
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


PL/Python also supports anonymous code blocks called with the [DO](</VI. Reference/I. SQL Commands/sql-do.md>) statement:
    
    
    DO $$
        # PL/Python code
    $$ LANGUAGE plpython3u;
    

An anonymous code block receives no arguments, and whatever value it might return is discarded. Otherwise it behaves just like a function.


  
