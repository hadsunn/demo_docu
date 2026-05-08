---
title: ALTER TRIGGER
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER TRIGGER _name_ ON _table_name_ RENAME TO _new_name_
    ALTER TRIGGER _name_ ON _table_name_ [ NO ] DEPENDS ON EXTENSION _extension_name_
    

## Description

`ALTER TRIGGER` changes properties of an existing trigger.

The `RENAME` clause changes the name of the given trigger without otherwise changing the trigger definition. If the table that the trigger is on is a partitioned table, then corresponding clone triggers in the partitions are renamed too.

The `DEPENDS ON EXTENSION` clause marks the trigger as dependent on an extension, such that if the extension is dropped, the trigger will automatically be dropped as well.

You must own the table on which the trigger acts to be allowed to change its properties.

## Parameters

_`name`_
    

The name of an existing trigger to alter.

_`table_name`_
    

The name of the table on which this trigger acts.

_`new_name`_
    

The new name for the trigger.

_`extension_name`_
    

The name of the extension that the trigger is to depend on (or no longer dependent on, if `NO` is specified). A trigger that's marked as dependent on an extension is automatically dropped when the extension is dropped.

## Notes

The ability to temporarily enable or disable a trigger is provided by [`ALTER TABLE`](</VI. Reference/I. SQL Commands/sql-altertable.md>), not by `ALTER TRIGGER`, because `ALTER TRIGGER` has no convenient way to express the option of enabling or disabling all of a table's triggers at once.

## Examples

To rename an existing trigger:
    
    
    ALTER TRIGGER emp_stamp ON emp RENAME TO emp_track_chgs;
    

To mark a trigger as being dependent on an extension:
    
    
    ALTER TRIGGER emp_stamp ON emp DEPENDS ON EXTENSION emplib;
    

## Compatibility

`ALTER TRIGGER` is a PostgreSQL extension of the SQL standard.

## See Also

[ALTER TABLE](</VI. Reference/I. SQL Commands/sql-altertable.md>)


  
