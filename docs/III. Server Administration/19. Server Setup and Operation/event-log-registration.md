---
title: 19.12. Registering Event Log on Windows
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


To register a Windows event log library with the operating system, issue this command:
    
    
    **regsvr32 _pgsql_library_directory_ /pgevent.dll**
    

This creates registry entries used by the event viewer, under the default event source named `PostgreSQL`.

To specify a different event source name (see [event_source](runtime-config-logging.html#GUC-EVENT-SOURCE)), use the `/n` and `/i` options:
    
    
    **regsvr32 /n /i:_event_source_name_ _pgsql_library_directory_ /pgevent.dll**
    

To unregister the event log library from the operating system, issue this command:
    
    
    **regsvr32 /u [/i:_event_source_name_] _pgsql_library_directory_ /pgevent.dll**
    

### Note

To enable event logging in the database server, modify [log_destination](runtime-config-logging.html#GUC-LOG-DESTINATION) to include `eventlog` in `postgresql.conf`.


  
