---
title: ALTER MATERIALIZED VIEW
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER MATERIALIZED VIEW [ IF EXISTS ] _name_
        _action_ [, ... ]
    ALTER MATERIALIZED VIEW _name_
        [ NO ] DEPENDS ON EXTENSION _extension_name_
    ALTER MATERIALIZED VIEW [ IF EXISTS ] _name_
        RENAME [ COLUMN ] _column_name_ TO _new_column_name_
    ALTER MATERIALIZED VIEW [ IF EXISTS ] _name_
        RENAME TO _new_name_
    ALTER MATERIALIZED VIEW [ IF EXISTS ] _name_
        SET SCHEMA _new_schema_
    ALTER MATERIALIZED VIEW ALL IN TABLESPACE _name_ [ OWNED BY _role_name_ [, ... ] ]
        SET TABLESPACE _new_tablespace_ [ NOWAIT ]
    
    where _action_ is one of:
    
        ALTER [ COLUMN ] _column_name_ SET STATISTICS _integer_
        ALTER [ COLUMN ] _column_name_ SET ( _attribute_option_ = _value_ [, ... ] )
        ALTER [ COLUMN ] _column_name_ RESET ( _attribute_option_ [, ... ] )
        ALTER [ COLUMN ] _column_name_ SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN | DEFAULT }
        ALTER [ COLUMN ] _column_name_ SET COMPRESSION _compression_method_
        CLUSTER ON _index_name_
        SET WITHOUT CLUSTER
        SET ACCESS METHOD _new_access_method_
        SET TABLESPACE _new_tablespace_
        SET ( _storage_parameter_ [= _value_] [, ... ] )
        RESET ( _storage_parameter_ [, ... ] )
        OWNER TO { _new_owner_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    

## Description

`ALTER MATERIALIZED VIEW` changes various auxiliary properties of an existing materialized view.

You must own the materialized view to use `ALTER MATERIALIZED VIEW`. To change a materialized view's schema, you must also have `CREATE` privilege on the new schema. To alter the owner, you must be able to `SET ROLE` to the new owning role, and that role must have `CREATE` privilege on the materialized view's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the materialized view. However, a superuser can alter ownership of any view anyway.)

The statement subforms and actions available for `ALTER MATERIALIZED VIEW` are a subset of those available for `ALTER TABLE`, and have the same meaning when used for materialized views. See the descriptions for [`ALTER TABLE`](</VI. Reference/I. SQL Commands/sql-altertable.md>) for details.

## Parameters

_`name`_
    

The name (optionally schema-qualified) of an existing materialized view.

_`column_name`_
    

Name of an existing column.

_`extension_name`_
    

The name of the extension that the materialized view is to depend on (or no longer dependent on, if `NO` is specified). A materialized view that's marked as dependent on an extension is automatically dropped when the extension is dropped.

_`new_column_name`_
    

New name for an existing column.

_`new_owner`_
    

The user name of the new owner of the materialized view.

_`new_name`_
    

The new name for the materialized view.

_`new_schema`_
    

The new schema for the materialized view.

## Examples

To rename the materialized view `foo` to `bar`:
    
    
    ALTER MATERIALIZED VIEW foo RENAME TO bar;
    

## Compatibility

`ALTER MATERIALIZED VIEW` is a PostgreSQL extension.

## See Also

[CREATE MATERIALIZED VIEW](</VI. Reference/I. SQL Commands/sql-creatematerializedview.md>)


  
