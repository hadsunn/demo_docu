---
title: DROP POLICY
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    DROP POLICY [ IF EXISTS ] _name_ ON _table_name_ [ CASCADE | RESTRICT ]
    

## Description

`DROP POLICY` removes the specified policy from the table. Note that if the last policy is removed for a table and the table still has row-level security enabled via `ALTER TABLE`, then the default-deny policy will be used. `ALTER TABLE ... DISABLE ROW LEVEL SECURITY` can be used to disable row-level security for a table, whether policies for the table exist or not.

## Parameters

`IF EXISTS`
    

Do not throw an error if the policy does not exist. A notice is issued in this case.

_`name`_
    

The name of the policy to drop.

_`table_name`_
    

The name (optionally schema-qualified) of the table that the policy is on.

`CASCADE`  
`RESTRICT`
    

These key words do not have any effect, since there are no dependencies on policies.

## Examples

To drop the policy called `p1` on the table named `my_table`:
    
    
    DROP POLICY p1 ON my_table;
    

## Compatibility

`DROP POLICY` is a PostgreSQL extension.

## See Also

[CREATE POLICY](</VI. Reference/I. SQL Commands/sql-createpolicy.md>)


  
