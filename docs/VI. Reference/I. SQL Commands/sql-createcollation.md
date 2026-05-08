---
title: CREATE COLLATION
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    CREATE COLLATION [ IF NOT EXISTS ] _name_ (
        [ LOCALE = _locale_ , ]
        [ LC_COLLATE = _lc_collate_ , ]
        [ LC_CTYPE = _lc_ctype_ , ]
        [ PROVIDER = _provider_ , ]
        [ DETERMINISTIC = _boolean_ , ]
        [ RULES = _rules_ , ]
        [ VERSION = _version_ ]
    )
    CREATE COLLATION [ IF NOT EXISTS ] _name_ FROM _existing_collation_
    

## Description

`CREATE COLLATION` defines a new collation using the specified operating system locale settings, or by copying an existing collation.

To be able to create a collation, you must have `CREATE` privilege on the destination schema.

## Parameters

`IF NOT EXISTS`
    

Do not throw an error if a collation with the same name already exists. A notice is issued in this case. Note that there is no guarantee that the existing collation is anything like the one that would have been created.

_`name`_
    

The name of the collation. The collation name can be schema-qualified. If it is not, the collation is defined in the current schema. The collation name must be unique within that schema. (The system catalogs can contain collations with the same name for other encodings, but these are ignored if the database encoding does not match.)

_`locale`_
    

The locale name for this collation. See [Section 24.2.2.3.1](collation.html#COLLATION-MANAGING-CREATE-LIBC "24.2.2.3.1. libc Collations") and [Section 24.2.2.3.2](collation.html#COLLATION-MANAGING-CREATE-ICU "24.2.2.3.2. ICU Collations") for details.

If _`provider`_ is `libc`, this is a shortcut for setting `LC_COLLATE` and `LC_CTYPE` at once. If you specify _`locale`_ , you cannot specify either of those parameters.

_`lc_collate`_
    

If _`provider`_ is `libc`, use the specified operating system locale for the `LC_COLLATE` locale category.

_`lc_ctype`_
    

If _`provider`_ is `libc`, use the specified operating system locale for the `LC_CTYPE` locale category.

_`provider`_
    

Specifies the provider to use for locale services associated with this collation. Possible values are `icu` (if the server was built with ICU support) or `libc`. `libc` is the default. See [Section 24.1.4](locale.html#LOCALE-PROVIDERS "24.1.4. Locale Providers") for details.

`DETERMINISTIC`
    

Specifies whether the collation should use deterministic comparisons. The default is true. A deterministic comparison considers strings that are not byte-wise equal to be unequal even if they are considered logically equal by the comparison. PostgreSQL breaks ties using a byte-wise comparison. Comparison that is not deterministic can make the collation be, say, case- or accent-insensitive. For that, you need to choose an appropriate `LOCALE` setting _and_ set the collation to not deterministic here.

Nondeterministic collations are only supported with the ICU provider.

_`rules`_
    

Specifies additional collation rules to customize the behavior of the collation. This is supported for ICU only. See [Section 24.2.3.4](collation.html#ICU-TAILORING-RULES "24.2.3.4. ICU Tailoring Rules") for details.

_`version`_
    

Specifies the version string to store with the collation. Normally, this should be omitted, which will cause the version to be computed from the actual version of the collation as provided by the operating system. This option is intended to be used by `pg_upgrade` for copying the version from an existing installation.

See also [ALTER COLLATION](</VI. Reference/I. SQL Commands/sql-altercollation.md>) for how to handle collation version mismatches.

_`existing_collation`_
    

The name of an existing collation to copy. The new collation will have the same properties as the existing one, but it will be an independent object.

## Notes

`CREATE COLLATION` takes a `SHARE ROW EXCLUSIVE` lock, which is self-conflicting, on the `pg_collation` system catalog, so only one `CREATE COLLATION` command can run at a time.

Use `DROP COLLATION` to remove user-defined collations.

See [Section 24.2.2.3](collation.html#COLLATION-CREATE "24.2.2.3. Creating New Collation Objects") for more information on how to create collations.

When using the `libc` collation provider, the locale must be applicable to the current database encoding. See [CREATE DATABASE](</VI. Reference/I. SQL Commands/sql-createdatabase.md>) for the precise rules.

## Examples

To create a collation from the operating system locale `fr_FR.utf8` (assuming the current database encoding is `UTF8`):
    
    
    CREATE COLLATION french (locale = 'fr_FR.utf8');
    

To create a collation using the ICU provider using German phone book sort order:
    
    
    CREATE COLLATION german_phonebook (provider = icu, locale = 'de-u-co-phonebk');
    

To create a collation using the ICU provider, based on the root ICU locale, with custom rules:
    
    
    CREATE COLLATION custom (provider = icu, locale = 'und', rules = '&V << w <<< W');
    

See [Section 24.2.3.4](collation.html#ICU-TAILORING-RULES "24.2.3.4. ICU Tailoring Rules") for further details and examples on the rules syntax.

To create a collation from an existing collation:
    
    
    CREATE COLLATION german FROM "de_DE";
    

This can be convenient to be able to use operating-system-independent collation names in applications.

## Compatibility

There is a `CREATE COLLATION` statement in the SQL standard, but it is limited to copying an existing collation. The syntax to create a new collation is a PostgreSQL extension.

## See Also

[ALTER COLLATION](</VI. Reference/I. SQL Commands/sql-altercollation.md>)


  
