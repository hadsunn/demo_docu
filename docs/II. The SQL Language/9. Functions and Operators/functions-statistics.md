---
title: 9.30. Statistics Information Functions
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[9.30.1. Inspecting MCV Lists](</II. The SQL Language/9. Functions and Operators/functions-statistics.md#9301-inspecting-mcv-lists>)



PostgreSQL provides a function to inspect complex statistics defined using the `CREATE STATISTICS` command.

### 9.30.1. Inspecting MCV Lists #
    
    
    pg_mcv_list_items ( pg_mcv_list ) → setof record
    

`pg_mcv_list_items` returns a set of records describing all items stored in a multi-column MCV list. It returns the following columns:

Name | Type | Description  
`index` | `integer` | index of the item in the MCV list  
`values` | `text[]` | values stored in the MCV item  
`nulls` | `boolean[]` | flags identifying `NULL` values  
`frequency` | `double precision` | frequency of this MCV item  
`base_frequency` | `double precision` | base frequency of this MCV item  
  
The `pg_mcv_list_items` function can be used like this:
    
    
    SELECT m.* FROM pg_statistic_ext join pg_statistic_ext_data on (oid = stxoid),
                    pg_mcv_list_items(stxdmcv) m WHERE stxname = 'stts';
    

Values of the `pg_mcv_list` type can be obtained only from the `pg_statistic_ext_data`.`stxdmcv` column.


  
