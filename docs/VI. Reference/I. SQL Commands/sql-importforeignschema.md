---
title: IMPORT FOREIGN SCHEMA
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    IMPORT FOREIGN SCHEMA _remote_schema_
        [ { LIMIT TO | EXCEPT } ( _table_name_ [, ...] ) ]
        FROM SERVER _server_name_
        INTO _local_schema_
        [ OPTIONS ( _option_ '_value_ ' [, ... ] ) ]
    

## Description

`IMPORT FOREIGN SCHEMA` creates foreign tables that represent tables existing on a foreign server. The new foreign tables will be owned by the user issuing the command and are created with the correct column definitions and options to match the remote tables.

By default, all tables and views existing in a particular schema on the foreign server are imported. Optionally, the list of tables can be limited to a specified subset, or specific tables can be excluded. The new foreign tables are all created in the target schema, which must already exist.

To use `IMPORT FOREIGN SCHEMA`, the user must have `USAGE` privilege on the foreign server, as well as `CREATE` privilege on the target schema.

## Parameters

_`remote_schema`_
    

The remote schema to import from. The specific meaning of a remote schema depends on the foreign data wrapper in use.

`LIMIT TO ( _`table_name`_ [, ...] )`
    

Import only foreign tables matching one of the given table names. Other tables existing in the foreign schema will be ignored.

`EXCEPT ( _`table_name`_ [, ...] )`
    

Exclude specified foreign tables from the import. All tables existing in the foreign schema will be imported except the ones listed here.

_`server_name`_
    

The foreign server to import from.

_`local_schema`_
    

The schema in which the imported foreign tables will be created.

`OPTIONS ( _`option`_ '_`value`_ ' [, ...] )`
    

Options to be used during the import. The allowed option names and values are specific to each foreign data wrapper.

## Examples

Import table definitions from a remote schema `foreign_films` on server `film_server`, creating the foreign tables in local schema `films`:
    
    
    IMPORT FOREIGN SCHEMA foreign_films
        FROM SERVER film_server INTO films;
    

As above, but import only the two tables `actors` and `directors` (if they exist):
    
    
    IMPORT FOREIGN SCHEMA foreign_films LIMIT TO (actors, directors)
        FROM SERVER film_server INTO films;
    

## Compatibility

The `IMPORT FOREIGN SCHEMA` command conforms to the SQL standard, except that the `OPTIONS` clause is a PostgreSQL extension.

## See Also

[CREATE FOREIGN TABLE](</VI. Reference/I. SQL Commands/sql-createforeigntable.md>)


  
