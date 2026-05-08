---
title: 49.3. Streaming Replication Protocol Interface
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The commands

  * `CREATE_REPLICATION_SLOT _`slot_name`_ LOGICAL _`output_plugin`_`

  * `DROP_REPLICATION_SLOT _`slot_name`_` [ `WAIT` ]

  * `START_REPLICATION SLOT _`slot_name`_ LOGICAL ...`




are used to create, drop, and stream changes from a replication slot, respectively. These commands are only available over a replication connection; they cannot be used via SQL. See [Section 55.4](</VII. Internals/55. FrontendBackend Protocol/protocol-replication.md>) for details on these commands.

The command [pg_recvlogical](</VI. Reference/II. PostgreSQL Client Applications/app-pgrecvlogical.md>) can be used to control logical decoding over a streaming replication connection. (It uses these commands internally.)


  
