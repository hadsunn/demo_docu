---
title: createdb
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis

`createdb` [_`connection-option`_...] [_`option`_...] [_`dbname`_ [_`description`_]]

## Description


Normally, the database user who executes this command becomes the owner of the new database. However, a different owner can be specified via the `-O` option, if the executing user has appropriate privileges.


## Options


_`dbname`_
    

Specifies the name of the database to be created. The name must be unique among all PostgreSQL databases in this cluster. The default is to create a database with the same name as the current system user.

_`description`_
    

Specifies a comment to be associated with the newly created database.

`-D _`tablespace`_`  
`--tablespace=_`tablespace`_`
    

Specifies the default tablespace for the database. (This name is processed as a double-quoted identifier.)

`-e`  
`--echo`
    

Echo the commands that createdb generates and sends to the server.

`-E _`encoding`_`  
`--encoding=_`encoding`_`
    

Specifies the character encoding scheme to be used in this database. The character sets supported by the PostgreSQL server are described in [Section 24.3.1](multibyte.html#MULTIBYTE-CHARSET-SUPPORTED "24.3.1. Supported Character Sets").

`-l _`locale`_`  
`--locale=_`locale`_`
    

Specifies the locale to be used in this database. This is equivalent to specifying `--lc-collate`, `--lc-ctype`, and `--icu-locale` to the same value. Some locales are only valid for ICU and must be set with `--icu-locale`.

`--lc-collate=_`locale`_`
    

Specifies the LC_COLLATE setting to be used in this database.

`--lc-ctype=_`locale`_`
    

Specifies the LC_CTYPE setting to be used in this database.

`--icu-locale=_`locale`_`
    

Specifies the ICU locale ID to be used in this database, if the ICU locale provider is selected.

`--icu-rules=_`rules`_`
    

Specifies additional collation rules to customize the behavior of the default collation of this database. This is supported for ICU only.

`--locale-provider={`libc`|`icu`}`
    

Specifies the locale provider for the database's default collation.

`-O _`owner`_`  
`--owner=_`owner`_`
    

Specifies the database user who will own the new database. (This name is processed as a double-quoted identifier.)

`-S _`strategy`_`  
`--strategy=_`strategy`_`
    

Specifies the database creation strategy. See [CREATE DATABASE STRATEGY](sql-createdatabase.html#CREATE-DATABASE-STRATEGY) for more details.

`-T _`template`_`  
`--template=_`template`_`
    

Specifies the template database from which to build this database. (This name is processed as a double-quoted identifier.)

`-V`  
`--version`
    

Print the createdb version and exit.

`-?`  
`--help`
    

Show help about createdb command line arguments, and exit.

The options `-D`, `-l`, `-E`, `-O`, and `-T` correspond to options of the underlying SQL command [`CREATE DATABASE`](</VI. Reference/I. SQL Commands/sql-createdatabase.md>); see there for more information about them.


`-h _`host`_`  
`--host=_`host`_`
    

Specifies the host name of the machine on which the server is running. If the value begins with a slash, it is used as the directory for the Unix domain socket.

`-p _`port`_`  
`--port=_`port`_`
    

Specifies the TCP port or the local Unix domain socket file extension on which the server is listening for connections.

`-U _`username`_`  
`--username=_`username`_`
    

User name to connect as.

`-w`  
`--no-password`
    

Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a `.pgpass` file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password.

`-W`  
`--password`
    

Force createdb to prompt for a password before connecting to a database.

This option is never essential, since createdb will automatically prompt for a password if the server demands password authentication. However, createdb will waste a connection attempt finding out that the server wants a password. In some cases it is worth typing `-W` to avoid the extra connection attempt.

`--maintenance-db=_`dbname`_`
    

Specifies the name of the database to connect to when creating the new database. If not specified, the `postgres` database will be used; if that does not exist (or if it is the name of the new database being created), `template1` will be used. This can be a [connection string](libpq-connect.html#LIBPQ-CONNSTRING "34.1.1. Connection Strings"). If so, connection string parameters will override any conflicting command line options.

## Environment

`PGDATABASE`
    

If set, the name of the database to create, unless overridden on the command line.

`PGHOST`  
`PGPORT`  
`PGUSER`
    

Default connection parameters. `PGUSER` also determines the name of the database to create, if it is not specified on the command line or by `PGDATABASE`.

`PG_COLOR`
    

Specifies whether to use color in diagnostic messages. Possible values are `always`, `auto` and `never`.

This utility, like most other PostgreSQL utilities, also uses the environment variables supported by libpq (see [Section 34.15](</IV. Client Interfaces/34. libpq — C Library/libpq-envars.md>)).

## Diagnostics

In case of difficulty, see [CREATE DATABASE](</VI. Reference/I. SQL Commands/sql-createdatabase.md>) for discussions of potential problems and error messages. The database server must be running at the targeted host. Also, any default connection settings and environment variables used by the libpq front-end library will apply.

## Examples

To create the database `demo` using the default database server:
    
    
    $ **createdb demo**
    

To create the database `demo` using the server on host `eden`, port 5000, using the `template0` template database, here is the command-line command and the underlying SQL command:
    
    
    $ **createdb -p 5000 -h eden -T template0 -e demo**
    CREATE DATABASE demo TEMPLATE template0;
    

## See Also

[dropdb](</VI. Reference/II. PostgreSQL Client Applications/app-dropdb.md>)


  
