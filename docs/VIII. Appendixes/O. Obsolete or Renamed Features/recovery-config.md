---
title: O.1. `recovery.conf` file merged into `postgresql.conf`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


PostgreSQL 11 and below used a configuration file named `recovery.conf` to manage replicas and standbys. Support for this file was removed in PostgreSQL 12. See [the release notes for PostgreSQL 12](</VIII. Appendixes/E. Release Notes/release-prior.md>) for details on this change.

On PostgreSQL 12 and above, [archive recovery, streaming replication, and PITR](</III. Server Administration/26. Backup and Restore/continuous-archiving.md>) like any other parameter.

The server will not start if a `recovery.conf` exists.

PostgreSQL 15 and below had a setting `promote_trigger_file`, or `trigger_file` before 12. Use `pg_ctl promote` or call `pg_promote()` to promote a standby instead.

The `standby_mode` setting has been removed. A `standby.signal` file in the data directory is used instead. See [Standby Server Operation](warm-standby.html#STANDBY-SERVER-OPERATION "27.2.2. Standby Server Operation") for details.


  
