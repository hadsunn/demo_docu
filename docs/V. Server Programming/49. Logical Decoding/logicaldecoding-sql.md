---
title: 49.4. Logical Decoding SQL Interface
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


See [Section 9.27.6](functions-admin.html#FUNCTIONS-REPLICATION "9.27.6. Replication Management Functions") for detailed documentation on the SQL-level API for interacting with logical decoding.

Synchronous replication (see [Section 27.2.8](warm-standby.html#SYNCHRONOUS-REPLICATION "27.2.8. Synchronous Replication")) is only supported on replication slots used over the streaming replication interface. The function interface and additional, non-core interfaces do not support synchronous replication.


  
