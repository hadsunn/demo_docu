---
title: 37.48. `sql_features`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The table `sql_features` contains information about which formal features defined in the SQL standard are supported by PostgreSQL. This is the same information that is presented in [Appendix D](</VIII. Appendixes/D. SQL Conformance/D. SQL Conformance.md>). There you can also find some additional background information.

**Table  37.46. `sql_features` Columns**

Column Type Description  
---  
`feature_id` `character_data` Identifier string of the feature  
`feature_name` `character_data` Descriptive name of the feature  
`sub_feature_id` `character_data` Identifier string of the subfeature, or a zero-length string if not a subfeature  
`sub_feature_name` `character_data` Descriptive name of the subfeature, or a zero-length string if not a subfeature  
`is_supported` `yes_or_no` `YES` if the feature is fully supported by the current version of PostgreSQL, `NO` if not  
`is_verified_by` `character_data` Always null, since the PostgreSQL development group does not perform formal testing of feature conformance  
`comments` `character_data` Possibly a comment about the supported status of the feature  
  
  



  
