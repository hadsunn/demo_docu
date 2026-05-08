---
title: 54.31. `pg_timezone_abbrevs`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_timezone_abbrevs` provides a list of time zone abbreviations that are currently recognized by the datetime input routines. The contents of this view change when the [timezone_abbreviations](runtime-config-client.html#GUC-TIMEZONE-ABBREVIATIONS) run-time parameter is modified.

**Table  54.31. `pg_timezone_abbrevs` Columns**

Column Type Description  
---  
`abbrev` `text` Time zone abbreviation  
`utc_offset` `interval` Offset from UTC (positive means east of Greenwich)  
`is_dst` `bool` True if this is a daylight-savings abbreviation  
  
  


While most timezone abbreviations represent fixed offsets from UTC, there are some that have historically varied in value (see [Section B.4](</VIII. Appendixes/B. DateTime Support/datetime-config-files.md>) for more information). In such cases this view presents their current meaning.


  
