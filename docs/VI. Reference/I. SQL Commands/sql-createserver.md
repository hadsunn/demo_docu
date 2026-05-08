---
title: CREATE SERVER
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    CREATE SERVER [ IF NOT EXISTS ] _server_name_ [ TYPE '_server_type_ ' ] [ VERSION '_server_version_ ' ]
        FOREIGN DATA WRAPPER _fdw_name_
        [ OPTIONS ( _option_ '_value_ ' [, ... ] ) ]
    

## Description

`CREATE SERVER` defines a new foreign server. The user who defines the server becomes its owner.

A foreign server typically encapsulates connection information that a foreign-data wrapper uses to access an external data resource. Additional user-specific connection information may be specified by means of user mappings.

The server name must be unique within the database.

Creating a server requires `USAGE` privilege on the foreign-data wrapper being used.

## Parameters

`IF NOT EXISTS`
    

Do not throw an error if a server with the same name already exists. A notice is issued in this case. Note that there is no guarantee that the existing server is anything like the one that would have been created.

_`server_name`_
    

The name of the foreign server to be created.

_`server_type`_
    

Optional server type, potentially useful to foreign-data wrappers.

_`server_version`_
    

Optional server version, potentially useful to foreign-data wrappers.

_`fdw_name`_
    

The name of the foreign-data wrapper that manages the server.

`OPTIONS ( _`option`_ '_`value`_ ' [, ... ] )`
    

This clause specifies the options for the server. The options typically define the connection details of the server, but the actual names and values are dependent on the server's foreign-data wrapper.

## Notes

When using the [dblink](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/F.12. dblink — connect to other PostgreSQL databases/F.12. dblink — connect to other PostgreSQL databases.md>) function to indicate the connection parameters. It is necessary to have the `USAGE` privilege on the foreign server to be able to use it in this way.

If the foreign server supports sort pushdown, it is necessary for it to have the same sort ordering as the local server.

## Examples

Create a server `myserver` that uses the foreign-data wrapper `postgres_fdw`:
    
    
    CREATE SERVER myserver FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'foo', dbname 'foodb', port '5432');
    

See [postgres_fdw](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/postgres-fdw.md>) for more details.

## Compatibility

`CREATE SERVER` conforms to ISO/IEC 9075-9 (SQL/MED).

## See Also

[ALTER SERVER](</VI. Reference/I. SQL Commands/sql-alterserver.md>)


  
