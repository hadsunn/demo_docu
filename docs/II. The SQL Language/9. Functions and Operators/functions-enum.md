---
title: 9.10. Enum Support Functions
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


For enum types (described in [Section 8.7](</II. The SQL Language/8. Data Types/datatype-enum.md>). The examples assume an enum type created as:
    
    
    CREATE TYPE rainbow AS ENUM ('red', 'orange', 'yellow', 'green', 'blue', 'purple');
    

**Table  9.35. Enum Support Functions**

Function Description Example(s)  
---  
`enum_first` ( `anyenum` ) → `anyenum` Returns the first value of the input enum type. `enum_first(null::rainbow)` → `red`  
`enum_last` ( `anyenum` ) → `anyenum` Returns the last value of the input enum type. `enum_last(null::rainbow)` → `purple`  
`enum_range` ( `anyenum` ) → `anyarray` Returns all values of the input enum type in an ordered array. `enum_range(null::rainbow)` → `{red,orange,yellow,​green,blue,purple}`  
`enum_range` ( `anyenum`, `anyenum` ) → `anyarray` Returns the range between the two given enum values, as an ordered array. The values must be from the same enum type. If the first parameter is null, the result will start with the first value of the enum type. If the second parameter is null, the result will end with the last value of the enum type. `enum_range('orange'::rainbow, 'green'::rainbow)` → `{orange,yellow,green}` `enum_range(NULL, 'green'::rainbow)` → `{red,orange,​yellow,green}` `enum_range('orange'::rainbow, NULL)` → `{orange,yellow,green,​blue,purple}`  
  
  


Notice that except for the two-argument form of `enum_range`, these functions disregard the specific value passed to them; they care only about its declared data type. Either null or a specific value of the type can be passed, with the same result. It is more common to apply these functions to a table column or function argument than to a hardwired type name as used in the examples.


  
