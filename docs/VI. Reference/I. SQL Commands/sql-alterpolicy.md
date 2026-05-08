---
title: ALTER POLICY
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER POLICY _name_ ON _table_name_ RENAME TO _new_name_
    
    ALTER POLICY _name_ ON _table_name_
        [ TO { _role_name_ | PUBLIC | CURRENT_ROLE | CURRENT_USER | SESSION_USER } [, ...] ]
        [ USING ( _using_expression_ ) ]
        [ WITH CHECK ( _check_expression_ ) ]
    

## Description

`ALTER POLICY` changes the definition of an existing row-level security policy. Note that `ALTER POLICY` only allows the set of roles to which the policy applies and the `USING` and `WITH CHECK` expressions to be modified. To change other properties of a policy, such as the command to which it applies or whether it is permissive or restrictive, the policy must be dropped and recreated.

To use `ALTER POLICY`, you must own the table that the policy applies to.

In the second form of `ALTER POLICY`, the role list, _`using_expression`_ , and _`check_expression`_ are replaced independently if specified. When one of those clauses is omitted, the corresponding part of the policy is unchanged.

## Parameters

_`name`_
    

The name of an existing policy to alter.

_`table_name`_
    

The name (optionally schema-qualified) of the table that the policy is on.

_`new_name`_
    

The new name for the policy.

_`role_name`_
    

The role(s) to which the policy applies. Multiple roles can be specified at one time. To apply the policy to all roles, use `PUBLIC`.

_`using_expression`_
    

The `USING` expression for the policy. See [CREATE POLICY](</VI. Reference/I. SQL Commands/sql-createpolicy.md>) for details.

_`check_expression`_
    

The `WITH CHECK` expression for the policy. See [CREATE POLICY](</VI. Reference/I. SQL Commands/sql-createpolicy.md>) for details.

## Compatibility

`ALTER POLICY` is a PostgreSQL extension.

## See Also

[CREATE POLICY](</VI. Reference/I. SQL Commands/sql-createpolicy.md>)


  
