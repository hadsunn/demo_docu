---
title: PostgreSQL Client Applications
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  

# PostgreSQL Client Applications


This part contains reference information for PostgreSQL client applications and utilities. Not all of these commands are of general utility; some might require special privileges. The common feature of these applications is that they can be run on any host, independent of where the database server resides.

When specified on the command line, user and database names have their case preserved — the presence of spaces or special characters might require quoting. Table names and other identifiers do not have their case preserved, except where documented, and might require quoting.

**Table of Contents**

[clusterdb](</VI. Reference/II. PostgreSQL Client Applications/app-clusterdb.md>) — cluster a PostgreSQL database
[createdb](</VI. Reference/II. PostgreSQL Client Applications/app-createdb.md>) — create a new PostgreSQL database
[createuser](</VI. Reference/II. PostgreSQL Client Applications/app-createuser.md>) — define a new PostgreSQL user account
[dropdb](</VI. Reference/II. PostgreSQL Client Applications/app-dropdb.md>) — remove a PostgreSQL database
[dropuser](</VI. Reference/II. PostgreSQL Client Applications/app-dropuser.md>) — remove a PostgreSQL user account
[ecpg](</VI. Reference/II. PostgreSQL Client Applications/app-ecpg.md>) — embedded SQL C preprocessor
[pg_amcheck](</VI. Reference/II. PostgreSQL Client Applications/app-pgamcheck.md>) — checks for corruption in one or more PostgreSQL databases
[pg_basebackup](</VI. Reference/II. PostgreSQL Client Applications/app-pgbasebackup.md>) — take a base backup of a PostgreSQL cluster
[pgbench](</VI. Reference/II. PostgreSQL Client Applications/pgbench.md>) — run a benchmark test on PostgreSQL
[pg_config](</VI. Reference/II. PostgreSQL Client Applications/app-pgconfig.md>) — retrieve information about the installed version of PostgreSQL
[pg_dump](</VI. Reference/II. PostgreSQL Client Applications/app-pgdump.md>) — extract a PostgreSQL database into a script file or other archive file
[pg_dumpall](</VI. Reference/II. PostgreSQL Client Applications/app-pg-dumpall.md>) — extract a PostgreSQL database cluster into a script file
[pg_isready](</VI. Reference/II. PostgreSQL Client Applications/app-pg-isready.md>) — check the connection status of a PostgreSQL server
[pg_receivewal](</VI. Reference/II. PostgreSQL Client Applications/app-pgreceivewal.md>) — stream write-ahead logs from a PostgreSQL server
[pg_recvlogical](</VI. Reference/II. PostgreSQL Client Applications/app-pgrecvlogical.md>) — control PostgreSQL logical decoding streams
[pg_restore](</VI. Reference/II. PostgreSQL Client Applications/app-pgrestore.md>) — restore a PostgreSQL database from an archive file created by pg_dump
[pg_verifybackup](</VI. Reference/II. PostgreSQL Client Applications/app-pgverifybackup.md>) — verify the integrity of a base backup of a PostgreSQL cluster
[psql](</VI. Reference/II. PostgreSQL Client Applications/app-psql.md>) — PostgreSQL interactive terminal
[reindexdb](</VI. Reference/II. PostgreSQL Client Applications/app-reindexdb.md>) — reindex a PostgreSQL database
[vacuumdb](</VI. Reference/II. PostgreSQL Client Applications/app-vacuumdb.md>) — garbage-collect and analyze a PostgreSQL database


  
