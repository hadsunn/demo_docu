---
title: 9.14. UUID Functions
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


---  
  


PostgreSQL includes one function to generate a UUID:
    
    
    gen_random_uuid () → uuid
    

This function returns a version 4 (random) UUID. This is the most commonly used type of UUID and is appropriate for most applications.

The [uuid-ossp](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/uuid-ossp.md>) module provides additional functions that implement other standard algorithms for generating UUIDs.

PostgreSQL also provides the usual comparison operators shown in [Table 9.1](functions-comparison.html#FUNCTIONS-COMPARISON-OP-TABLE "Table 9.1. Comparison Operators") for UUIDs.


  
