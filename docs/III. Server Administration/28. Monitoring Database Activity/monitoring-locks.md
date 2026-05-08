---
title: 28.3. Viewing Locks
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Another useful tool for monitoring database activity is the `pg_locks` system table. It allows the database administrator to view information about the outstanding locks in the lock manager. For example, this capability can be used to:

  * View all the locks currently outstanding, all the locks on relations in a particular database, all the locks on a particular relation, or all the locks held by a particular PostgreSQL session.

  * Determine the relation in the current database with the most ungranted locks (which might be a source of contention among database clients).

  * Determine the effect of lock contention on overall database performance, as well as the extent to which contention varies with overall database traffic.




Details of the `pg_locks` view appear in [Section 54.12](</VII. Internals/54. System Views/view-pg-locks.md>).


  
