---
title: vacuumlo
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis

`vacuumlo` [_`option`_...] _`dbname`_...

## Description


If you use this, you may also be interested in the `lo_manage` trigger in the [lo](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/lo.md>) module. `lo_manage` is useful to try to avoid creating orphaned LOs in the first place.

All databases named on the command line are processed.

## Options


`-l _`limit`_`  
`--limit=_`limit`_`
    

Remove no more than _`limit`_ large objects per transaction (default 1000). Since the server acquires a lock per LO removed, removing too many LOs in one transaction risks exceeding [max_locks_per_transaction](runtime-config-locks.html#GUC-MAX-LOCKS-PER-TRANSACTION). Set the limit to zero if you want all removals done in a single transaction.

`-n`  
`--dry-run`
    

Don't remove anything, just show what would be done.

`-v`  
`--verbose`
    

Write a lot of progress messages.

`-V`  
`--version`
    

Print the vacuumlo version and exit.

`-?`  
`--help`
    

Show help about vacuumlo command line arguments, and exit.


`-h _`host`_`  
`--host=_`host`_`
    

Database server's host.

`-p _`port`_`  
`--port=_`port`_`
    

Database server's port.

`-U _`username`_`  
`--username=_`username`_`
    

User name to connect as.

`-w`  
`--no-password`
    

Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a `.pgpass` file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password.

`-W`  
`--password`
    

Force vacuumlo to prompt for a password before connecting to a database.

This option is never essential, since vacuumlo will automatically prompt for a password if the server demands password authentication. However, vacuumlo will waste a connection attempt finding out that the server wants a password. In some cases it is worth typing `-W` to avoid the extra connection attempt.

## Environment

`PGHOST`  
`PGPORT`  
`PGUSER`
    

Default connection parameters.

This utility, like most other PostgreSQL utilities, also uses the environment variables supported by libpq (see [Section 34.15](</IV. Client Interfaces/34. libpq — C Library/libpq-envars.md>)).

The environment variable `PG_COLOR` specifies whether to use color in diagnostic messages. Possible values are `always`, `auto` and `never`.

## Notes


## Author

Peter Mount `<[peter@retep.org.uk](mailto:peter@retep.org.uk)>`


  
