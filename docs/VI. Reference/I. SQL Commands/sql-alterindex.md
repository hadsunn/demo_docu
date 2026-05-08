---
title: ALTER INDEX
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER INDEX [ IF EXISTS ] _name_ RENAME TO _new_name_
    ALTER INDEX [ IF EXISTS ] _name_ SET TABLESPACE _tablespace_name_
    ALTER INDEX _name_ ATTACH PARTITION _index_name_
    ALTER INDEX _name_ [ NO ] DEPENDS ON EXTENSION _extension_name_
    ALTER INDEX [ IF EXISTS ] _name_ SET ( _storage_parameter_ [= _value_] [, ... ] )
    ALTER INDEX [ IF EXISTS ] _name_ RESET ( _storage_parameter_ [, ... ] )
    ALTER INDEX [ IF EXISTS ] _name_ ALTER [ COLUMN ] _column_number_
        SET STATISTICS _integer_
    ALTER INDEX ALL IN TABLESPACE _name_ [ OWNED BY _role_name_ [, ... ] ]
        SET TABLESPACE _new_tablespace_ [ NOWAIT ]
    

## Description

`ALTER INDEX` changes the definition of an existing index. There are several subforms described below. Note that the lock level required may differ for each subform. An `ACCESS EXCLUSIVE` lock is held unless explicitly noted. When multiple subcommands are listed, the lock held will be the strictest one required from any subcommand.

`RENAME`
    

The `RENAME` form changes the name of the index. If the index is associated with a table constraint (either `UNIQUE`, `PRIMARY KEY`, or `EXCLUDE`), the constraint is renamed as well. There is no effect on the stored data.

Renaming an index acquires a `SHARE UPDATE EXCLUSIVE` lock.

`SET TABLESPACE`
    

This form changes the index's tablespace to the specified tablespace and moves the data file(s) associated with the index to the new tablespace. To change the tablespace of an index, you must own the index and have `CREATE` privilege on the new tablespace. All indexes in the current database in a tablespace can be moved by using the `ALL IN TABLESPACE` form, which will lock all indexes to be moved and then move each one. This form also supports `OWNED BY`, which will only move indexes owned by the roles specified. If the `NOWAIT` option is specified then the command will fail if it is unable to acquire all of the locks required immediately. Note that system catalogs will not be moved by this command, use `ALTER DATABASE` or explicit `ALTER INDEX` invocations instead if desired. See also [`CREATE TABLESPACE`](</VI. Reference/I. SQL Commands/sql-createtablespace.md>).

`ATTACH PARTITION _`index_name`_`
    

Causes the named index (possibly schema-qualified) to become attached to the altered index. The named index must be on a partition of the table containing the index being altered, and have an equivalent definition. An attached index cannot be dropped by itself, and will automatically be dropped if its parent index is dropped.

`DEPENDS ON EXTENSION _`extension_name`_`  
`NO DEPENDS ON EXTENSION _`extension_name`_`
    

This form marks the index as dependent on the extension, or no longer dependent on that extension if `NO` is specified. An index that's marked as dependent on an extension is automatically dropped when the extension is dropped.

`SET ( _`storage_parameter`_ [= _`value`_] [, ... ] )`
    

This form changes one or more index-method-specific storage parameters for the index. See [`CREATE INDEX`](</VI. Reference/I. SQL Commands/sql-createindex.md>) to get the desired effects.

`RESET ( _`storage_parameter`_ [, ... ] )`
    

This form resets one or more index-method-specific storage parameters to their defaults. As with `SET`, a `REINDEX` might be needed to update the index entirely.

`ALTER [ COLUMN ] _`column_number`_ SET STATISTICS _`integer`_`
    

This form sets the per-column statistics-gathering target for subsequent [`ANALYZE`](</VI. Reference/I. SQL Commands/sql-analyze.md>).

## Parameters

`IF EXISTS`
    

Do not throw an error if the index does not exist. A notice is issued in this case.

_`column_number`_
    

The ordinal number refers to the ordinal (left-to-right) position of the index column.

_`name`_
    

The name (possibly schema-qualified) of an existing index to alter.

_`new_name`_
    

The new name for the index.

_`tablespace_name`_
    

The tablespace to which the index will be moved.

_`extension_name`_
    

The name of the extension that the index is to depend on.

_`storage_parameter`_
    

The name of an index-method-specific storage parameter.

_`value`_
    

The new value for an index-method-specific storage parameter. This might be a number or a word depending on the parameter.

## Notes

These operations are also possible using [`ALTER TABLE`](</VI. Reference/I. SQL Commands/sql-altertable.md>). `ALTER INDEX` is in fact just an alias for the forms of `ALTER TABLE` that apply to indexes.

There was formerly an `ALTER INDEX OWNER` variant, but this is now ignored (with a warning). An index cannot have an owner different from its table's owner. Changing the table's owner automatically changes the index as well.

Changing any part of a system catalog index is not permitted.

## Examples

To rename an existing index:
    
    
    ALTER INDEX distributors RENAME TO suppliers;
    

To move an index to a different tablespace:
    
    
    ALTER INDEX distributors SET TABLESPACE fasttablespace;
    

To change an index's fill factor (assuming that the index method supports it):
    
    
    ALTER INDEX distributors SET (fillfactor = 75);
    REINDEX INDEX distributors;
    

Set the statistics-gathering target for an expression index:
    
    
    CREATE INDEX coord_idx ON measured (x, y, (z + t));
    ALTER INDEX coord_idx ALTER COLUMN 3 SET STATISTICS 1000;
    

## Compatibility

`ALTER INDEX` is a PostgreSQL extension.

## See Also

[CREATE INDEX](</VI. Reference/I. SQL Commands/sql-createindex.md>)


  
