---
title: Appendix B. Date/Time Support
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


**Table of Contents**

[B.1. Date/Time Input Interpretation](</VIII. Appendixes/B. DateTime Support/datetime-input-rules.md>)
[B.2. Handling of Invalid or Ambiguous Timestamps](</VIII. Appendixes/B. DateTime Support/datetime-invalid-input.md>)
[B.3. Date/Time Key Words](</VIII. Appendixes/B. DateTime Support/datetime-keywords.md>)
[B.4. Date/Time Configuration Files](</VIII. Appendixes/B. DateTime Support/datetime-config-files.md>)
[B.5. POSIX Time Zone Specifications](</VIII. Appendixes/B. DateTime Support/datetime-posix-timezone-specs.md>)
[B.6. History of Units](</VIII. Appendixes/B. DateTime Support/datetime-units-history.md>)
[B.7. Julian Dates](</VIII. Appendixes/B. DateTime Support/datetime-julian-dates.md>)

PostgreSQL uses an internal heuristic parser for all date/time input support. Dates and times are input as strings, and are broken up into distinct fields with a preliminary determination of what kind of information can be in the field. Each field is interpreted and either assigned a numeric value, ignored, or rejected. The parser contains internal lookup tables for all textual fields, including months, days of the week, and time zones.

This appendix includes information on the content of these lookup tables and describes the steps used by the parser to decode dates and times.


  
