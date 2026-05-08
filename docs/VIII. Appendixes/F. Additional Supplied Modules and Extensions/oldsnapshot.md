---
title: F.24. old_snapshot — inspect `old_snapshot_threshold` state
---







Supported versions: 13 / 14 / 15 / 16 / 17


---  
  


[F.24.1. Functions](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/oldsnapshot.md#f241-functions>)



The `old_snapshot` module allows inspection of the server state that is used to implement [old_snapshot_threshold](runtime-config-resource.html#GUC-OLD-SNAPSHOT-THRESHOLD).

### F.24.1. Functions #

`pg_old_snapshot_time_mapping(array_offset OUT int4, end_timestamp OUT timestamptz, newest_xmin OUT xid) returns setof record`
    

Returns all of the entries in the server's timestamp to XID mapping. Each entry represents the newest xmin of any snapshot taken in the corresponding minute.


  
