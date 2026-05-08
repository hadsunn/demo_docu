---
title: 53.48. `pg_shdepend`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_shdepend` records the dependency relationships between database objects and shared objects, such as roles. This information allows PostgreSQL to ensure that those objects are unreferenced before attempting to delete them.

See also [`pg_depend`](</VII. Internals/53. System Catalogs/catalog-pg-depend.md>), which performs a similar function for dependencies involving objects within a single database.

Unlike most system catalogs, `pg_shdepend` is shared across all databases of a cluster: there is only one copy of `pg_shdepend` per cluster, not one per database.

**Table  53.48. `pg_shdepend` Columns**

Column Type Description  
---  
`dbid` `oid` (references [`pg_database`](</VII. Internals/53. System Catalogs/catalog-pg-database.md>).`oid`) The OID of the database the dependent object is in, or zero for a shared object  
`classid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The OID of the system catalog the dependent object is in  
`objid` `oid` (references any OID column) The OID of the specific dependent object  
`objsubid` `int4` For a table column, this is the column number (the `objid` and `classid` refer to the table itself). For all other object types, this column is zero.  
`refclassid` `oid` (references [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`oid`) The OID of the system catalog the referenced object is in (must be a shared catalog)  
`refobjid` `oid` (references any OID column) The OID of the specific referenced object  
`deptype` `char` A code defining the specific semantics of this dependency relationship; see text  
  
  


In all cases, a `pg_shdepend` entry indicates that the referenced object cannot be dropped without also dropping the dependent object. However, there are several subflavors identified by `deptype`:

`SHARED_DEPENDENCY_OWNER` (`o`)
    

The referenced object (which must be a role) is the owner of the dependent object.

`SHARED_DEPENDENCY_ACL` (`a`)
    

The referenced object (which must be a role) is mentioned in the ACL (access control list, i.e., privileges list) of the dependent object. (A `SHARED_DEPENDENCY_ACL` entry is not made for the owner of the object, since the owner will have a `SHARED_DEPENDENCY_OWNER` entry anyway.)

`SHARED_DEPENDENCY_POLICY` (`r`)
    

The referenced object (which must be a role) is mentioned as the target of a dependent policy object.

`SHARED_DEPENDENCY_TABLESPACE` (`t`)
    

The referenced object (which must be a tablespace) is mentioned as the tablespace for a relation that doesn't have storage.

Other dependency flavors might be needed in future. Note in particular that the current definition only supports roles and tablespaces as referenced objects.

As in the `pg_depend` catalog, most objects created during initdb are considered “pinned”. No entries are made in `pg_shdepend` that would have a pinned object as either referenced or dependent object.


  
