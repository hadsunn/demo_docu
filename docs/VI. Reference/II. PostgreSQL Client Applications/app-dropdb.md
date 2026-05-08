---
title: dropdb
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis

`dropdb` [_`connection-option`_...] [_`option`_...] _`dbname`_

## Description



## Options


_`dbname`_
    

Specifies the name of the database to be removed.

`-e`  
`--echo`
    

Echo the commands that dropdb generates and sends to the server.

`-f`  
`--force`
    

Attempt to terminate all existing connections to the target database before dropping it. See [DROP DATABASE](</VI. Reference/I. SQL Commands/sql-dropdatabase.md>) for more information on this option.

`-i`  
`--interactive`
    

Issues a verification prompt before doing anything destructive.

`-V`  
`--version`
    

Print the dropdb version and exit.

`--if-exists`
    

Do not throw an error if the database does not exist. A notice is issued in this case.

`-?`  
`--help`
    

Show help about dropdb command line arguments, and exit.


`-h _`host`_`  
`--host=_`host`_`
    

Specifies the host name of the machine on which the server is running. If the value begins with a slash, it is used as the directory for the Unix domain socket.

`-p _`port`_`  
`--port=_`port`_`
    

Specifies the TCP port or local Unix domain socket file extension on which the server is listening for connections.

`-U _`username`_`  
`--username=_`username`_`
    

User name to connect as.

`-w`  
`--no-password`
    

Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a `.pgpass` file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password.

`-W`  
`--password`
    

Force dropdb to prompt for a password before connecting to a database.

This option is never essential, since dropdb will automatically prompt for a password if the server demands password authentication. However, dropdb will waste a connection attempt finding out that the server wants a password. In some cases it is worth typing `-W` to avoid the extra connection attempt.

`--maintenance-db=_`dbname`_`
    

Specifies the name of the database to connect to in order to drop the target database. If not specified, the `postgres` database will be used; if that does not exist (or is the database being dropped), `template1` will be used. This can be a [connection string](libpq-connect.html#LIBPQ-CONNSTRING "34.1.1. Connection Strings"). If so, connection string parameters will override any conflicting command line options.

## Environment

`PGHOST`  
`PGPORT`  
`PGUSER`
    

Default connection parameters

`PG_COLOR`
    

Specifies whether to use color in diagnostic messages. Possible values are `always`, `auto` and `never`.

This utility, like most other PostgreSQL utilities, also uses the environment variables supported by libpq (see [Section 34.15](</IV. Client Interfaces/34. libpq — C Library/libpq-envars.md>)).

## Diagnostics

In case of difficulty, see [DROP DATABASE](</VI. Reference/I. SQL Commands/sql-dropdatabase.md>) for discussions of potential problems and error messages. The database server must be running at the targeted host. Also, any default connection settings and environment variables used by the libpq front-end library will apply.

## Examples

To destroy the database `demo` on the default database server:
    
    
    $ **dropdb demo**
    

To destroy the database `demo` using the server on host `eden`, port 5000, with verification and a peek at the underlying command:
    
    
    $ **dropdb -p 5000 -h eden -i -e demo**
    Database "demo" will be permanently deleted.
    Are you sure? (y/n) **y**
    DROP DATABASE demo;
    

## See Also

[createdb](</VI. Reference/II. PostgreSQL Client Applications/app-createdb.md>)


  
