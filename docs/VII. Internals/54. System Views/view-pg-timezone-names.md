---
title: 54.32. `pg_timezone_names`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_timezone_names` provides a list of time zone names that are recognized by `SET TIMEZONE`, along with their associated abbreviations, UTC offsets, and daylight-savings status. (Technically, PostgreSQL does not use UTC because leap seconds are not handled.) Unlike the abbreviations shown in [`pg_timezone_abbrevs`](</VII. Internals/54. System Views/view-pg-timezone-abbrevs.md>), many of these names imply a set of daylight-savings transition date rules. Therefore, the associated information changes across local DST boundaries. The displayed information is computed based on the current value of `CURRENT_TIMESTAMP`.

**Table  54.32. `pg_timezone_names` Columns**

Column Type Description  
---  
`name` `text` Time zone name  
`abbrev` `text` Time zone abbreviation  
`utc_offset` `interval` Offset from UTC (positive means east of Greenwich)  
`is_dst` `bool` True if currently observing daylight savings  
  
  



  
