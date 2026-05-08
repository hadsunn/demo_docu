---
title: CREATE MATERIALIZED VIEW
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    CREATE MATERIALIZED VIEW [ IF NOT EXISTS ] _table_name_
        [ (_column_name_ [, ...] ) ]
        [ USING _method_ ]
        [ WITH ( _storage_parameter_ [= _value_] [, ... ] ) ]
        [ TABLESPACE _tablespace_name_ ]
        AS _query_
        [ WITH [ NO ] DATA ]
    

## Description

`CREATE MATERIALIZED VIEW` defines a materialized view of a query. The query is executed and used to populate the view at the time the command is issued (unless `WITH NO DATA` is used) and may be refreshed later using `REFRESH MATERIALIZED VIEW`.

`CREATE MATERIALIZED VIEW` is similar to `CREATE TABLE AS`, except that it also remembers the query used to initialize the view, so that it can be refreshed later upon demand. A materialized view has many of the same properties as a table, but there is no support for temporary materialized views.

`CREATE MATERIALIZED VIEW` requires `CREATE` privilege on the schema used for the materialized view.

## Parameters

`IF NOT EXISTS`
    

Do not throw an error if a materialized view with the same name already exists. A notice is issued in this case. Note that there is no guarantee that the existing materialized view is anything like the one that would have been created.

_`table_name`_
    

The name (optionally schema-qualified) of the materialized view to be created. The name must be distinct from the name of any other relation (table, sequence, index, view, materialized view, or foreign table) in the same schema.

_`column_name`_
    

The name of a column in the new materialized view. If column names are not provided, they are taken from the output column names of the query.

`USING _`method`_`
    

This optional clause specifies the table access method to use to store the contents for the new materialized view; the method needs be an access method of type `TABLE`. See [Chapter 63](</VII. Internals/tableam.md>) for more information. If this option is not specified, the default table access method is chosen for the new materialized view. See [default_table_access_method](runtime-config-client.html#GUC-DEFAULT-TABLE-ACCESS-METHOD) for more information.

`WITH ( _`storage_parameter`_ [= _`value`_] [, ... ] )`
    

This clause specifies optional storage parameters for the new materialized view; see [Storage Parameters](<sql-createtable#SQL-CREATETABLE-STORAGE-PARAMETERS>) for more information.

`TABLESPACE _`tablespace_name`_`
    

The _`tablespace_name`_ is the name of the tablespace in which the new materialized view is to be created. If not specified, [default_tablespace](runtime-config-client.html#GUC-DEFAULT-TABLESPACE) is consulted.

_`query`_
    

A [`SELECT`](</VI. Reference/I. SQL Commands/sql-select.md>) command. This query will run within a security-restricted operation; in particular, calls to functions that themselves create temporary tables will fail.

`WITH [ NO ] DATA`
    

This clause specifies whether or not the materialized view should be populated at creation time. If not, the materialized view will be flagged as unscannable and cannot be queried until `REFRESH MATERIALIZED VIEW` is used.

## Compatibility

`CREATE MATERIALIZED VIEW` is a PostgreSQL extension.

## See Also

[ALTER MATERIALIZED VIEW](</VI. Reference/I. SQL Commands/sql-altermaterializedview.md>)


  
