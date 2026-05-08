---
title: pg_checksums
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis

`pg_checksums` [_`option`_...] [[ `-D` | `--pgdata` ]_`datadir`_]

## Description


When verifying checksums, every file in the cluster is scanned. When enabling checksums, each relation file block with a changed checksum is rewritten in-place. Disabling checksums only updates the file `pg_control`.

## Options

The following command-line options are available:

`-D _`directory`_`  
`--pgdata=_`directory`_`
    

Specifies the directory where the database cluster is stored.

`-c`  
`--check`
    

Checks checksums. This is the default mode if nothing else is specified.

`-d`  
`--disable`
    

Disables checksums.

`-e`  
`--enable`
    

Enables checksums.

`-f _`filenode`_`  
`--filenode=_`filenode`_`
    

Only validate checksums in the relation with filenode _`filenode`_.

`-N`  
`--no-sync`
    

By default, `pg_checksums` will wait for all files to be written safely to disk. This option causes `pg_checksums` to return without waiting, which is faster, but means that a subsequent operating system crash can leave the updated data directory corrupt. Generally, this option is useful for testing but should not be used on a production installation. This option has no effect when using `--check`.

`-P`  
`--progress`
    

Enable progress reporting. Turning this on will deliver a progress report while checking or enabling checksums.

`-v`  
`--verbose`
    

Enable verbose output. Lists all checked files.

`-V`  
`--version`
    

Print the pg_checksums version and exit.

`-?`  
`--help`
    

Show help about pg_checksums command line arguments, and exit.

## Environment

`PGDATA`
    

Specifies the directory where the database cluster is stored; can be overridden using the `-D` option.

`PG_COLOR`
    

Specifies whether to use color in diagnostic messages. Possible values are `always`, `auto` and `never`.

## Notes

Enabling checksums in a large cluster can potentially take a long time. During this operation, the cluster or other programs that write to the data directory must not be started or else data loss may occur.

When using a replication setup with tools which perform direct copies of relation file blocks (for example [pg_rewind](</VI. Reference/III. PostgreSQL Server Applications/app-pgrewind.md>)), enabling or disabling checksums can lead to page corruptions in the shape of incorrect checksums if the operation is not done consistently across all nodes. When enabling or disabling checksums in a replication setup, it is thus recommended to stop all the clusters before switching them all consistently. Destroying all standbys, performing the operation on the primary and finally recreating the standbys from scratch is also safe.

If pg_checksums is aborted or killed while enabling or disabling checksums, the cluster's data checksum configuration remains unchanged, and pg_checksums can be re-run to perform the same operation.


  
