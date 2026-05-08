---
title: ALTER TYPE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    ALTER TYPE _name_ OWNER TO { _new_owner_ | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    ALTER TYPE _name_ RENAME TO _new_name_
    ALTER TYPE _name_ SET SCHEMA _new_schema_
    ALTER TYPE _name_ RENAME ATTRIBUTE _attribute_name_ TO _new_attribute_name_ [ CASCADE | RESTRICT ]
    ALTER TYPE _name_ _action_ [, ... ]
    ALTER TYPE _name_ ADD VALUE [ IF NOT EXISTS ] _new_enum_value_ [ { BEFORE | AFTER } _neighbor_enum_value_ ]
    ALTER TYPE _name_ RENAME VALUE _existing_enum_value_ TO _new_enum_value_
    ALTER TYPE _name_ SET ( _property_ = _value_ [, ... ] )
    
    where _action_ is one of:
    
        ADD ATTRIBUTE _attribute_name_ _data_type_ [ COLLATE _collation_ ] [ CASCADE | RESTRICT ]
        DROP ATTRIBUTE [ IF EXISTS ] _attribute_name_ [ CASCADE | RESTRICT ]
        ALTER ATTRIBUTE _attribute_name_ [ SET DATA ] TYPE _data_type_ [ COLLATE _collation_ ] [ CASCADE | RESTRICT ]
    

## Description

`ALTER TYPE` changes the definition of an existing type. There are several subforms:

`OWNER`
    

This form changes the owner of the type.

`RENAME`
    

This form changes the name of the type.

`SET SCHEMA`
    

This form moves the type into another schema.

`RENAME ATTRIBUTE`
    

This form is only usable with composite types. It changes the name of an individual attribute of the type.

`ADD ATTRIBUTE`
    

This form adds a new attribute to a composite type, using the same syntax as [`CREATE TYPE`](</VI. Reference/I. SQL Commands/sql-createtype.md>).

`DROP ATTRIBUTE [ IF EXISTS ]`
    

This form drops an attribute from a composite type. If `IF EXISTS` is specified and the attribute does not exist, no error is thrown. In this case a notice is issued instead.

`ALTER ATTRIBUTE ... SET DATA TYPE`
    

This form changes the type of an attribute of a composite type.

`ADD VALUE [ IF NOT EXISTS ] [ BEFORE | AFTER ]`
    

This form adds a new value to an enum type. The new value's place in the enum's ordering can be specified as being `BEFORE` or `AFTER` one of the existing values. Otherwise, the new item is added at the end of the list of values.

If `IF NOT EXISTS` is specified, it is not an error if the type already contains the new value: a notice is issued but no other action is taken. Otherwise, an error will occur if the new value is already present.

`RENAME VALUE`
    

This form renames a value of an enum type. The value's place in the enum's ordering is not affected. An error will occur if the specified value is not present or the new name is already present.

`SET ( _`property`_ = _`value`_ [, ... ] )`
    

This form is only applicable to base types. It allows adjustment of a subset of the base-type properties that can be set in `CREATE TYPE`. Specifically, these properties can be changed:

  * `RECEIVE` can be set to the name of a binary input function, or `NONE` to remove the type's binary input function. Using this option requires superuser privilege.

  * `SEND` can be set to the name of a binary output function, or `NONE` to remove the type's binary output function. Using this option requires superuser privilege.

  * `TYPMOD_IN` can be set to the name of a type modifier input function, or `NONE` to remove the type's type modifier input function. Using this option requires superuser privilege.

  * `TYPMOD_OUT` can be set to the name of a type modifier output function, or `NONE` to remove the type's type modifier output function. Using this option requires superuser privilege.

  * `ANALYZE` can be set to the name of a type-specific statistics collection function, or `NONE` to remove the type's statistics collection function. Using this option requires superuser privilege.

  * `SUBSCRIPT` can be set to the name of a type-specific subscripting handler function, or `NONE` to remove the type's subscripting handler function. Using this option requires superuser privilege.

  * `STORAGE` can be set to `plain`, `extended`, `external`, or `main` (see [Section 73.2](</VII. Internals/73. Database Physical Storage/storage-toast.md>) to change the TOAST strategy for existing table columns.




See [CREATE TYPE](</VI. Reference/I. SQL Commands/sql-createtype.md>) for more details about these type properties. Note that where appropriate, a change in these properties for a base type will be propagated automatically to domains based on that type.

The `ADD ATTRIBUTE`, `DROP ATTRIBUTE`, and `ALTER ATTRIBUTE` actions can be combined into a list of multiple alterations to apply in parallel. For example, it is possible to add several attributes and/or alter the type of several attributes in a single command.

You must own the type to use `ALTER TYPE`. To change the schema of a type, you must also have `CREATE` privilege on the new schema. To alter the owner, you must be able to `SET ROLE` to the new owning role, and that role must have `CREATE` privilege on the type's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the type. However, a superuser can alter ownership of any type anyway.) To add an attribute or alter an attribute type, you must also have `USAGE` privilege on the attribute's data type.

## Parameters

_`name`_
    

The name (possibly schema-qualified) of an existing type to alter.

_`new_name`_
    

The new name for the type.

_`new_owner`_
    

The user name of the new owner of the type.

_`new_schema`_
    

The new schema for the type.

_`attribute_name`_
    

The name of the attribute to add, alter, or drop.

_`new_attribute_name`_
    

The new name of the attribute to be renamed.

_`data_type`_
    

The data type of the attribute to add, or the new type of the attribute to alter.

_`new_enum_value`_
    

The new value to be added to an enum type's list of values, or the new name to be given to an existing value. Like all enum literals, it needs to be quoted.

_`neighbor_enum_value`_
    

The existing enum value that the new value should be added immediately before or after in the enum type's sort ordering. Like all enum literals, it needs to be quoted.

_`existing_enum_value`_
    

The existing enum value that should be renamed. Like all enum literals, it needs to be quoted.

_`property`_
    

The name of a base-type property to be modified; see above for possible values.

`CASCADE`
    

Automatically propagate the operation to typed tables of the type being altered, and their descendants.

`RESTRICT`
    

Refuse the operation if the type being altered is the type of a typed table. This is the default.

## Notes

If `ALTER TYPE ... ADD VALUE` (the form that adds a new value to an enum type) is executed inside a transaction block, the new value cannot be used until after the transaction has been committed.

Comparisons involving an added enum value will sometimes be slower than comparisons involving only original members of the enum type. This will usually only occur if `BEFORE` or `AFTER` is used to set the new value's sort position somewhere other than at the end of the list. However, sometimes it will happen even though the new value is added at the end (this occurs if the OID counter “wrapped around” since the original creation of the enum type). The slowdown is usually insignificant; but if it matters, optimal performance can be regained by dropping and recreating the enum type, or by dumping and restoring the database.

## Examples

To rename a data type:
    
    
    ALTER TYPE electronic_mail RENAME TO email;
    

To change the owner of the type `email` to `joe`:
    
    
    ALTER TYPE email OWNER TO joe;
    

To change the schema of the type `email` to `customers`:
    
    
    ALTER TYPE email SET SCHEMA customers;
    

To add a new attribute to a composite type:
    
    
    ALTER TYPE compfoo ADD ATTRIBUTE f3 int;
    

To add a new value to an enum type in a particular sort position:
    
    
    ALTER TYPE colors ADD VALUE 'orange' AFTER 'red';
    

To rename an enum value:
    
    
    ALTER TYPE colors RENAME VALUE 'purple' TO 'mauve';
    

To create binary I/O functions for an existing base type:
    
    
    CREATE FUNCTION mytypesend(mytype) RETURNS bytea ...;
    CREATE FUNCTION mytyperecv(internal, oid, integer) RETURNS mytype ...;
    ALTER TYPE mytype SET (
        SEND = mytypesend,
        RECEIVE = mytyperecv
    );
    

## Compatibility

The variants to add and drop attributes are part of the SQL standard; the other variants are PostgreSQL extensions.

## See Also

[CREATE TYPE](</VI. Reference/I. SQL Commands/sql-createtype.md>)


  
