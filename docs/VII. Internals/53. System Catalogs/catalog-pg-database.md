---
title: 53.15. `pg_database`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_database` stores information about the available databases. Databases are created with the [`CREATE DATABASE`](</VI. Reference/I. SQL Commands/sql-createdatabase.md>) for details about the meaning of some of the parameters.

Unlike most system catalogs, `pg_database` is shared across all databases of a cluster: there is only one copy of `pg_database` per cluster, not one per database.

**Table  53.15. `pg_database` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`datname` `name` Database name  
`datdba` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the database, usually the user who created it  
`encoding` `int4` Character encoding for this database ([`pg_encoding_to_char()`](functions-info.html#PG-ENCODING-TO-CHAR) can translate this number to the encoding name)  
`datlocprovider` `char` Locale provider for this database: `c` = libc, `i` = icu  
`datistemplate` `bool` If true, then this database can be cloned by any user with `CREATEDB` privileges; if false, then only superusers or the owner of the database can clone it.  
`datallowconn` `bool` If false then no one can connect to this database. This is used to protect the `template0` database from being altered.  
`datconnlimit` `int4` Sets maximum number of concurrent connections that can be made to this database. -1 means no limit, -2 indicates the database is invalid.  
`datfrozenxid` `xid` All transaction IDs before this one have been replaced with a permanent (“frozen”) transaction ID in this database. This is used to track whether the database needs to be vacuumed in order to prevent transaction ID wraparound or to allow `pg_xact` to be shrunk. It is the minimum of the per-table [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relfrozenxid` values.  
`datminmxid` `xid` All multixact IDs before this one have been replaced with a transaction ID in this database. This is used to track whether the database needs to be vacuumed in order to prevent multixact ID wraparound or to allow `pg_multixact` to be shrunk. It is the minimum of the per-table [`pg_class`](</VII. Internals/53. System Catalogs/catalog-pg-class.md>).`relminmxid` values.  
`dattablespace` `oid` (references [`pg_tablespace`](</VII. Internals/53. System Catalogs/catalog-pg-tablespace.md>).`reltablespace` is zero will be stored in this tablespace; in particular, all the non-shared system catalogs will be there.  
`datcollate` `text` LC_COLLATE for this database  
`datctype` `text` LC_CTYPE for this database  
`daticulocale` `text` ICU locale ID for this database  
`daticurules` `text` ICU collation rules for this database  
`datcollversion` `text` Provider-specific version of the collation. This is recorded when the database is created and then checked when it is used, to detect changes in the collation definition that could lead to data corruption.  
`datacl` `aclitem[]` Access privileges; see [Section 5.7](</II. The SQL Language/5. Data Definition/ddl-priv.md>) for details  
  
  



  
