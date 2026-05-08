---
title: 54.7. `pg_file_settings`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The view `pg_file_settings` provides a summary of the contents of the server's configuration file(s). A row appears in this view for each “name = value” entry appearing in the files, with annotations indicating whether the value could be applied successfully. Additional row(s) may appear for problems not linked to a “name = value” entry, such as syntax errors in the files.

This view is helpful for checking whether planned changes in the configuration files will work, or for diagnosing a previous failure. Note that this view reports on the _current_ contents of the files, not on what was last applied by the server. (The [`pg_settings`](</VII. Internals/54. System Views/view-pg-settings.md>) view is usually sufficient to determine that.)

By default, the `pg_file_settings` view can be read only by superusers.

**Table  54.7. `pg_file_settings` Columns**

Column Type Description  
---  
`sourcefile` `text` Full path name of the configuration file  
`sourceline` `int4` Line number within the configuration file where the entry appears  
`seqno` `int4` Order in which the entries are processed (1.._`n`_)  
`name` `text` Configuration parameter name  
`setting` `text` Value to be assigned to the parameter  
`applied` `bool` True if the value can be applied successfully  
`error` `text` If not null, an error message indicating why this entry could not be applied  
  
  


If the configuration file contains syntax errors or invalid parameter names, the server will not attempt to apply any settings from it, and therefore all the `applied` fields will read as false. In such a case there will be one or more rows with non-null `error` fields indicating the problem(s). Otherwise, individual settings will be applied if possible. If an individual setting cannot be applied (e.g., invalid value, or the setting cannot be changed after server start) it will have an appropriate message in the `error` field. Another way that an entry might have `applied` = false is that it is overridden by a later entry for the same parameter name; this case is not considered an error so nothing appears in the `error` field.

See [Section 20.1](</III. Server Administration/20. Server Configuration/config-setting.md>) for more information about the various ways to change run-time parameters.


  
