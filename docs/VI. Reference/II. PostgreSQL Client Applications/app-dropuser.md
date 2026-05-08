---
title: dropuser
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis

`dropuser` [_`connection-option`_...] [_`option`_...] [_`username`_]

## Description



## Options


_`username`_
    

Specifies the name of the PostgreSQL user to be removed. You will be prompted for a name if none is specified on the command line and the `-i`/`--interactive` option is used.

`-e`  
`--echo`
    

Echo the commands that dropuser generates and sends to the server.

`-i`  
`--interactive`
    

Prompt for confirmation before actually removing the user, and prompt for the user name if none is specified on the command line.

`-V`  
`--version`
    

Print the dropuser version and exit.

`--if-exists`
    

Do not throw an error if the user does not exist. A notice is issued in this case.

`-?`  
`--help`
    

Show help about dropuser command line arguments, and exit.


`-h _`host`_`  
`--host=_`host`_`
    

Specifies the host name of the machine on which the server is running. If the value begins with a slash, it is used as the directory for the Unix domain socket.

`-p _`port`_`  
`--port=_`port`_`
    

Specifies the TCP port or local Unix domain socket file extension on which the server is listening for connections.

`-U _`username`_`  
`--username=_`username`_`
    

User name to connect as (not the user name to drop).

`-w`  
`--no-password`
    

Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a `.pgpass` file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password.

`-W`  
`--password`
    

Force dropuser to prompt for a password before connecting to a database.

This option is never essential, since dropuser will automatically prompt for a password if the server demands password authentication. However, dropuser will waste a connection attempt finding out that the server wants a password. In some cases it is worth typing `-W` to avoid the extra connection attempt.

## Environment

`PGHOST`  
`PGPORT`  
`PGUSER`
    

Default connection parameters

`PG_COLOR`
    

Specifies whether to use color in diagnostic messages. Possible values are `always`, `auto` and `never`.

This utility, like most other PostgreSQL utilities, also uses the environment variables supported by libpq (see [Section 34.15](</IV. Client Interfaces/34. libpq — C Library/libpq-envars.md>)).

## Diagnostics

In case of difficulty, see [DROP ROLE](</VI. Reference/I. SQL Commands/sql-droprole.md>) for discussions of potential problems and error messages. The database server must be running at the targeted host. Also, any default connection settings and environment variables used by the libpq front-end library will apply.

## Examples

To remove user `joe` from the default database server:
    
    
    $ **dropuser joe**
    

To remove user `joe` using the server on host `eden`, port 5000, with verification and a peek at the underlying command:
    
    
    $ **dropuser -p 5000 -h eden -i -e joe**
    Role "joe" will be permanently removed.
    Are you sure? (y/n) **y**
    DROP ROLE joe;
    

## See Also

[createuser](</VI. Reference/II. PostgreSQL Client Applications/app-createuser.md>)


  
