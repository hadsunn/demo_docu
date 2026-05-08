---
title: Part VI. Reference
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  

# Part VI. Reference

The entries in this Reference are meant to provide in reasonable length an authoritative, complete, and formal summary about their respective subjects. More information about the use of PostgreSQL, in narrative, tutorial, or example form, can be found in other parts of this book. See the cross-references listed on each reference page.

The reference entries are also available as traditional “man” pages.

**Table of Contents**

[I. SQL Commands](</VI. Reference/I. SQL Commands/I. SQL Commands.md>)
    

[ABORT](</VI. Reference/I. SQL Commands/sql-abort.md>) — abort the current transaction
[ALTER AGGREGATE](</VI. Reference/I. SQL Commands/sql-alteraggregate.md>) — change the definition of an aggregate function
[ALTER COLLATION](</VI. Reference/I. SQL Commands/sql-altercollation.md>) — change the definition of a collation
[ALTER CONVERSION](</VI. Reference/I. SQL Commands/sql-alterconversion.md>) — change the definition of a conversion
[ALTER DATABASE](</VI. Reference/I. SQL Commands/sql-alterdatabase.md>) — change a database
[ALTER DEFAULT PRIVILEGES](</VI. Reference/I. SQL Commands/sql-alterdefaultprivileges.md>) — define default access privileges
[ALTER DOMAIN](</VI. Reference/I. SQL Commands/sql-alterdomain.md>) — change the definition of a domain
[ALTER EVENT TRIGGER](</VI. Reference/I. SQL Commands/sql-altereventtrigger.md>) — change the definition of an event trigger
[ALTER EXTENSION](</VI. Reference/I. SQL Commands/sql-alterextension.md>) — change the definition of an extension
[ALTER FOREIGN DATA WRAPPER](</VI. Reference/I. SQL Commands/sql-alterforeigndatawrapper.md>) — change the definition of a foreign-data wrapper
[ALTER FOREIGN TABLE](</VI. Reference/I. SQL Commands/sql-alterforeigntable.md>) — change the definition of a foreign table
[ALTER FUNCTION](</VI. Reference/I. SQL Commands/sql-alterfunction.md>) — change the definition of a function
[ALTER GROUP](</VI. Reference/I. SQL Commands/sql-altergroup.md>) — change role name or membership
[ALTER INDEX](</VI. Reference/I. SQL Commands/sql-alterindex.md>) — change the definition of an index
[ALTER LANGUAGE](</VI. Reference/I. SQL Commands/sql-alterlanguage.md>) — change the definition of a procedural language
[ALTER LARGE OBJECT](</VI. Reference/I. SQL Commands/sql-alterlargeobject.md>) — change the definition of a large object
[ALTER MATERIALIZED VIEW](</VI. Reference/I. SQL Commands/sql-altermaterializedview.md>) — change the definition of a materialized view
[ALTER OPERATOR](</VI. Reference/I. SQL Commands/sql-alteroperator.md>) — change the definition of an operator
[ALTER OPERATOR CLASS](</VI. Reference/I. SQL Commands/sql-alteropclass.md>) — change the definition of an operator class
[ALTER OPERATOR FAMILY](</VI. Reference/I. SQL Commands/sql-alteropfamily.md>) — change the definition of an operator family
[ALTER POLICY](</VI. Reference/I. SQL Commands/sql-alterpolicy.md>) — change the definition of a row-level security policy
[ALTER PROCEDURE](</VI. Reference/I. SQL Commands/sql-alterprocedure.md>) — change the definition of a procedure
[ALTER PUBLICATION](</VI. Reference/I. SQL Commands/sql-alterpublication.md>) — change the definition of a publication
[ALTER ROLE](</VI. Reference/I. SQL Commands/sql-alterrole.md>) — change a database role
[ALTER ROUTINE](</VI. Reference/I. SQL Commands/sql-alterroutine.md>) — change the definition of a routine
[ALTER RULE](</VI. Reference/I. SQL Commands/sql-alterrule.md>) — change the definition of a rule
[ALTER SCHEMA](</VI. Reference/I. SQL Commands/sql-alterschema.md>) — change the definition of a schema
[ALTER SEQUENCE](</VI. Reference/I. SQL Commands/sql-altersequence.md>) — change the definition of a sequence generator
[ALTER SERVER](</VI. Reference/I. SQL Commands/sql-alterserver.md>) — change the definition of a foreign server
[ALTER STATISTICS](</VI. Reference/I. SQL Commands/sql-alterstatistics.md>) — change the definition of an extended statistics object
[ALTER SUBSCRIPTION](</VI. Reference/I. SQL Commands/sql-altersubscription.md>) — change the definition of a subscription
[ALTER SYSTEM](</VI. Reference/I. SQL Commands/sql-altersystem.md>) — change a server configuration parameter
[ALTER TABLE](</VI. Reference/I. SQL Commands/sql-altertable.md>) — change the definition of a table
[ALTER TABLESPACE](</VI. Reference/I. SQL Commands/sql-altertablespace.md>) — change the definition of a tablespace
[ALTER TEXT SEARCH CONFIGURATION](</VI. Reference/I. SQL Commands/sql-altertsconfig.md>) — change the definition of a text search configuration
[ALTER TEXT SEARCH DICTIONARY](</VI. Reference/I. SQL Commands/sql-altertsdictionary.md>) — change the definition of a text search dictionary
[ALTER TEXT SEARCH PARSER](</VI. Reference/I. SQL Commands/sql-altertsparser.md>) — change the definition of a text search parser
[ALTER TEXT SEARCH TEMPLATE](</VI. Reference/I. SQL Commands/sql-altertstemplate.md>) — change the definition of a text search template
[ALTER TRIGGER](</VI. Reference/I. SQL Commands/sql-altertrigger.md>) — change the definition of a trigger
[ALTER TYPE](</VI. Reference/I. SQL Commands/sql-altertype.md>) — change the definition of a type
[ALTER USER](</VI. Reference/I. SQL Commands/sql-alteruser.md>) — change a database role
[ALTER USER MAPPING](</VI. Reference/I. SQL Commands/sql-alterusermapping.md>) — change the definition of a user mapping
[ALTER VIEW](</VI. Reference/I. SQL Commands/sql-alterview.md>) — change the definition of a view
[ANALYZE](</VI. Reference/I. SQL Commands/sql-analyze.md>) — collect statistics about a database
[BEGIN](</VI. Reference/I. SQL Commands/sql-begin.md>) — start a transaction block
[CALL](</VI. Reference/I. SQL Commands/sql-call.md>) — invoke a procedure
[CHECKPOINT](</VI. Reference/I. SQL Commands/sql-checkpoint.md>) — force a write-ahead log checkpoint
[CLOSE](</VI. Reference/I. SQL Commands/sql-close.md>) — close a cursor
[CLUSTER](</VI. Reference/I. SQL Commands/sql-cluster.md>) — cluster a table according to an index
[COMMENT](</VI. Reference/I. SQL Commands/sql-comment.md>) — define or change the comment of an object
[COMMIT](</VI. Reference/I. SQL Commands/sql-commit.md>) — commit the current transaction
[COMMIT PREPARED](</VI. Reference/I. SQL Commands/sql-commit-prepared.md>) — commit a transaction that was earlier prepared for two-phase commit
[COPY](</VI. Reference/I. SQL Commands/sql-copy.md>) — copy data between a file and a table
[CREATE ACCESS METHOD](</VI. Reference/I. SQL Commands/sql-create-access-method.md>) — define a new access method
[CREATE AGGREGATE](</VI. Reference/I. SQL Commands/sql-createaggregate.md>) — define a new aggregate function
[CREATE CAST](</VI. Reference/I. SQL Commands/sql-createcast.md>) — define a new cast
[CREATE COLLATION](</VI. Reference/I. SQL Commands/sql-createcollation.md>) — define a new collation
[CREATE CONVERSION](</VI. Reference/I. SQL Commands/sql-createconversion.md>) — define a new encoding conversion
[CREATE DATABASE](</VI. Reference/I. SQL Commands/sql-createdatabase.md>) — create a new database
[CREATE DOMAIN](</VI. Reference/I. SQL Commands/sql-createdomain.md>) — define a new domain
[CREATE EVENT TRIGGER](</VI. Reference/I. SQL Commands/sql-createeventtrigger.md>) — define a new event trigger
[CREATE EXTENSION](</VI. Reference/I. SQL Commands/sql-createextension.md>) — install an extension
[CREATE FOREIGN DATA WRAPPER](</VI. Reference/I. SQL Commands/sql-createforeigndatawrapper.md>) — define a new foreign-data wrapper
[CREATE FOREIGN TABLE](</VI. Reference/I. SQL Commands/sql-createforeigntable.md>) — define a new foreign table
[CREATE FUNCTION](</VI. Reference/I. SQL Commands/sql-createfunction.md>) — define a new function
[CREATE GROUP](</VI. Reference/I. SQL Commands/sql-creategroup.md>) — define a new database role
[CREATE INDEX](</VI. Reference/I. SQL Commands/sql-createindex.md>) — define a new index
[CREATE LANGUAGE](</VI. Reference/I. SQL Commands/sql-createlanguage.md>) — define a new procedural language
[CREATE MATERIALIZED VIEW](</VI. Reference/I. SQL Commands/sql-creatematerializedview.md>) — define a new materialized view
[CREATE OPERATOR](</VI. Reference/I. SQL Commands/sql-createoperator.md>) — define a new operator
[CREATE OPERATOR CLASS](</VI. Reference/I. SQL Commands/sql-createopclass.md>) — define a new operator class
[CREATE OPERATOR FAMILY](</VI. Reference/I. SQL Commands/sql-createopfamily.md>) — define a new operator family
[CREATE POLICY](</VI. Reference/I. SQL Commands/sql-createpolicy.md>) — define a new row-level security policy for a table
[CREATE PROCEDURE](</VI. Reference/I. SQL Commands/sql-createprocedure.md>) — define a new procedure
[CREATE PUBLICATION](</VI. Reference/I. SQL Commands/sql-createpublication.md>) — define a new publication
[CREATE ROLE](</VI. Reference/I. SQL Commands/sql-createrole.md>) — define a new database role
[CREATE RULE](</VI. Reference/I. SQL Commands/sql-createrule.md>) — define a new rewrite rule
[CREATE SCHEMA](</VI. Reference/I. SQL Commands/sql-createschema.md>) — define a new schema
[CREATE SEQUENCE](</VI. Reference/I. SQL Commands/sql-createsequence.md>) — define a new sequence generator
[CREATE SERVER](</VI. Reference/I. SQL Commands/sql-createserver.md>) — define a new foreign server
[CREATE STATISTICS](</VI. Reference/I. SQL Commands/sql-createstatistics.md>) — define extended statistics
[CREATE SUBSCRIPTION](</VI. Reference/I. SQL Commands/sql-createsubscription.md>) — define a new subscription
[CREATE TABLE](</VI. Reference/I. SQL Commands/sql-createtable.md>) — define a new table
[CREATE TABLE AS](</VI. Reference/I. SQL Commands/sql-createtableas.md>) — define a new table from the results of a query
[CREATE TABLESPACE](</VI. Reference/I. SQL Commands/sql-createtablespace.md>) — define a new tablespace
[CREATE TEXT SEARCH CONFIGURATION](</VI. Reference/I. SQL Commands/sql-createtsconfig.md>) — define a new text search configuration
[CREATE TEXT SEARCH DICTIONARY](</VI. Reference/I. SQL Commands/sql-createtsdictionary.md>) — define a new text search dictionary
[CREATE TEXT SEARCH PARSER](</VI. Reference/I. SQL Commands/sql-createtsparser.md>) — define a new text search parser
[CREATE TEXT SEARCH TEMPLATE](</VI. Reference/I. SQL Commands/sql-createtstemplate.md>) — define a new text search template
[CREATE TRANSFORM](</VI. Reference/I. SQL Commands/sql-createtransform.md>) — define a new transform
[CREATE TRIGGER](</VI. Reference/I. SQL Commands/sql-createtrigger.md>) — define a new trigger
[CREATE TYPE](</VI. Reference/I. SQL Commands/sql-createtype.md>) — define a new data type
[CREATE USER](</VI. Reference/I. SQL Commands/sql-createuser.md>) — define a new database role
[CREATE USER MAPPING](</VI. Reference/I. SQL Commands/sql-createusermapping.md>) — define a new mapping of a user to a foreign server
[CREATE VIEW](</VI. Reference/I. SQL Commands/sql-createview.md>) — define a new view
[DEALLOCATE](</VI. Reference/I. SQL Commands/sql-deallocate.md>) — deallocate a prepared statement
[DECLARE](</VI. Reference/I. SQL Commands/sql-declare.md>) — define a cursor
[DELETE](</VI. Reference/I. SQL Commands/sql-delete.md>) — delete rows of a table
[DISCARD](</VI. Reference/I. SQL Commands/sql-discard.md>) — discard session state
[DO](</VI. Reference/I. SQL Commands/sql-do.md>) — execute an anonymous code block
[DROP ACCESS METHOD](</VI. Reference/I. SQL Commands/sql-drop-access-method.md>) — remove an access method
[DROP AGGREGATE](</VI. Reference/I. SQL Commands/sql-dropaggregate.md>) — remove an aggregate function
[DROP CAST](</VI. Reference/I. SQL Commands/sql-dropcast.md>) — remove a cast
[DROP COLLATION](</VI. Reference/I. SQL Commands/sql-dropcollation.md>) — remove a collation
[DROP CONVERSION](</VI. Reference/I. SQL Commands/sql-dropconversion.md>) — remove a conversion
[DROP DATABASE](</VI. Reference/I. SQL Commands/sql-dropdatabase.md>) — remove a database
[DROP DOMAIN](</VI. Reference/I. SQL Commands/sql-dropdomain.md>) — remove a domain
[DROP EVENT TRIGGER](</VI. Reference/I. SQL Commands/sql-dropeventtrigger.md>) — remove an event trigger
[DROP EXTENSION](</VI. Reference/I. SQL Commands/sql-dropextension.md>) — remove an extension
[DROP FOREIGN DATA WRAPPER](</VI. Reference/I. SQL Commands/sql-dropforeigndatawrapper.md>) — remove a foreign-data wrapper
[DROP FOREIGN TABLE](</VI. Reference/I. SQL Commands/sql-dropforeigntable.md>) — remove a foreign table
[DROP FUNCTION](</VI. Reference/I. SQL Commands/sql-dropfunction.md>) — remove a function
[DROP GROUP](</VI. Reference/I. SQL Commands/sql-dropgroup.md>) — remove a database role
[DROP INDEX](</VI. Reference/I. SQL Commands/sql-dropindex.md>) — remove an index
[DROP LANGUAGE](</VI. Reference/I. SQL Commands/sql-droplanguage.md>) — remove a procedural language
[DROP MATERIALIZED VIEW](</VI. Reference/I. SQL Commands/sql-dropmaterializedview.md>) — remove a materialized view
[DROP OPERATOR](</VI. Reference/I. SQL Commands/sql-dropoperator.md>) — remove an operator
[DROP OPERATOR CLASS](</VI. Reference/I. SQL Commands/sql-dropopclass.md>) — remove an operator class
[DROP OPERATOR FAMILY](</VI. Reference/I. SQL Commands/sql-dropopfamily.md>) — remove an operator family
[DROP OWNED](</VI. Reference/I. SQL Commands/sql-drop-owned.md>) — remove database objects owned by a database role
[DROP POLICY](</VI. Reference/I. SQL Commands/sql-droppolicy.md>) — remove a row-level security policy from a table
[DROP PROCEDURE](</VI. Reference/I. SQL Commands/sql-dropprocedure.md>) — remove a procedure
[DROP PUBLICATION](</VI. Reference/I. SQL Commands/sql-droppublication.md>) — remove a publication
[DROP ROLE](</VI. Reference/I. SQL Commands/sql-droprole.md>) — remove a database role
[DROP ROUTINE](</VI. Reference/I. SQL Commands/sql-droproutine.md>) — remove a routine
[DROP RULE](</VI. Reference/I. SQL Commands/sql-droprule.md>) — remove a rewrite rule
[DROP SCHEMA](</VI. Reference/I. SQL Commands/sql-dropschema.md>) — remove a schema
[DROP SEQUENCE](</VI. Reference/I. SQL Commands/sql-dropsequence.md>) — remove a sequence
[DROP SERVER](</VI. Reference/I. SQL Commands/sql-dropserver.md>) — remove a foreign server descriptor
[DROP STATISTICS](</VI. Reference/I. SQL Commands/sql-dropstatistics.md>) — remove extended statistics
[DROP SUBSCRIPTION](</VI. Reference/I. SQL Commands/sql-dropsubscription.md>) — remove a subscription
[DROP TABLE](</VI. Reference/I. SQL Commands/sql-droptable.md>) — remove a table
[DROP TABLESPACE](</VI. Reference/I. SQL Commands/sql-droptablespace.md>) — remove a tablespace
[DROP TEXT SEARCH CONFIGURATION](</VI. Reference/I. SQL Commands/sql-droptsconfig.md>) — remove a text search configuration
[DROP TEXT SEARCH DICTIONARY](</VI. Reference/I. SQL Commands/sql-droptsdictionary.md>) — remove a text search dictionary
[DROP TEXT SEARCH PARSER](</VI. Reference/I. SQL Commands/sql-droptsparser.md>) — remove a text search parser
[DROP TEXT SEARCH TEMPLATE](</VI. Reference/I. SQL Commands/sql-droptstemplate.md>) — remove a text search template
[DROP TRANSFORM](</VI. Reference/I. SQL Commands/sql-droptransform.md>) — remove a transform
[DROP TRIGGER](</VI. Reference/I. SQL Commands/sql-droptrigger.md>) — remove a trigger
[DROP TYPE](</VI. Reference/I. SQL Commands/sql-droptype.md>) — remove a data type
[DROP USER](</VI. Reference/I. SQL Commands/sql-dropuser.md>) — remove a database role
[DROP USER MAPPING](</VI. Reference/I. SQL Commands/sql-dropusermapping.md>) — remove a user mapping for a foreign server
[DROP VIEW](</VI. Reference/I. SQL Commands/sql-dropview.md>) — remove a view
[END](</VI. Reference/I. SQL Commands/sql-end.md>) — commit the current transaction
[EXECUTE](</VI. Reference/I. SQL Commands/sql-execute.md>) — execute a prepared statement
[EXPLAIN](</VI. Reference/I. SQL Commands/sql-explain.md>) — show the execution plan of a statement
[FETCH](</VI. Reference/I. SQL Commands/sql-fetch.md>) — retrieve rows from a query using a cursor
[GRANT](</VI. Reference/I. SQL Commands/sql-grant.md>) — define access privileges
[IMPORT FOREIGN SCHEMA](</VI. Reference/I. SQL Commands/sql-importforeignschema.md>) — import table definitions from a foreign server
[INSERT](</VI. Reference/I. SQL Commands/sql-insert.md>) — create new rows in a table
[LISTEN](</VI. Reference/I. SQL Commands/sql-listen.md>) — listen for a notification
[LOAD](</VI. Reference/I. SQL Commands/sql-load.md>) — load a shared library file
[LOCK](</VI. Reference/I. SQL Commands/sql-lock.md>) — lock a table
[MERGE](</VI. Reference/I. SQL Commands/sql-merge.md>) — conditionally insert, update, or delete rows of a table
[MOVE](</VI. Reference/I. SQL Commands/sql-move.md>) — position a cursor
[NOTIFY](</VI. Reference/I. SQL Commands/sql-notify.md>) — generate a notification
[PREPARE](</VI. Reference/I. SQL Commands/sql-prepare.md>) — prepare a statement for execution
[PREPARE TRANSACTION](</VI. Reference/I. SQL Commands/sql-prepare-transaction.md>) — prepare the current transaction for two-phase commit
[REASSIGN OWNED](</VI. Reference/I. SQL Commands/sql-reassign-owned.md>) — change the ownership of database objects owned by a database role
[REFRESH MATERIALIZED VIEW](</VI. Reference/I. SQL Commands/sql-refreshmaterializedview.md>) — replace the contents of a materialized view
[REINDEX](</VI. Reference/I. SQL Commands/sql-reindex.md>) — rebuild indexes
[RELEASE SAVEPOINT](</VI. Reference/I. SQL Commands/sql-release-savepoint.md>) — release a previously defined savepoint
[RESET](</VI. Reference/I. SQL Commands/sql-reset.md>) — restore the value of a run-time parameter to the default value
[REVOKE](</VI. Reference/I. SQL Commands/sql-revoke.md>) — remove access privileges
[ROLLBACK](</VI. Reference/I. SQL Commands/sql-rollback.md>) — abort the current transaction
[ROLLBACK PREPARED](</VI. Reference/I. SQL Commands/sql-rollback-prepared.md>) — cancel a transaction that was earlier prepared for two-phase commit
[ROLLBACK TO SAVEPOINT](</VI. Reference/I. SQL Commands/sql-rollback-to.md>) — roll back to a savepoint
[SAVEPOINT](</VI. Reference/I. SQL Commands/sql-savepoint.md>) — define a new savepoint within the current transaction
[SECURITY LABEL](</VI. Reference/I. SQL Commands/sql-security-label.md>) — define or change a security label applied to an object
[SELECT](</VI. Reference/I. SQL Commands/sql-select.md>) — retrieve rows from a table or view
[SELECT INTO](</VI. Reference/I. SQL Commands/sql-selectinto.md>) — define a new table from the results of a query
[SET](</VI. Reference/I. SQL Commands/sql-set.md>) — change a run-time parameter
[SET CONSTRAINTS](</VI. Reference/I. SQL Commands/sql-set-constraints.md>) — set constraint check timing for the current transaction
[SET ROLE](</VI. Reference/I. SQL Commands/sql-set-role.md>) — set the current user identifier of the current session
[SET SESSION AUTHORIZATION](</VI. Reference/I. SQL Commands/sql-set-session-authorization.md>) — set the session user identifier and the current user identifier of the current session
[SET TRANSACTION](</VI. Reference/I. SQL Commands/sql-set-transaction.md>) — set the characteristics of the current transaction
[SHOW](</VI. Reference/I. SQL Commands/sql-show.md>) — show the value of a run-time parameter
[START TRANSACTION](</VI. Reference/I. SQL Commands/sql-start-transaction.md>) — start a transaction block
[TRUNCATE](</VI. Reference/I. SQL Commands/sql-truncate.md>) — empty a table or set of tables
[UNLISTEN](</VI. Reference/I. SQL Commands/sql-unlisten.md>) — stop listening for a notification
[UPDATE](</VI. Reference/I. SQL Commands/sql-update.md>) — update rows of a table
[VACUUM](</VI. Reference/I. SQL Commands/sql-vacuum.md>) — garbage-collect and optionally analyze a database
[VALUES](</VI. Reference/I. SQL Commands/sql-values.md>) — compute a set of rows
[II. PostgreSQL Client Applications](</VI. Reference/II. PostgreSQL Client Applications/II. PostgreSQL Client Applications.md>)
    

[clusterdb](</VI. Reference/II. PostgreSQL Client Applications/app-clusterdb.md>) — cluster a PostgreSQL database
[createdb](</VI. Reference/II. PostgreSQL Client Applications/app-createdb.md>) — create a new PostgreSQL database
[createuser](</VI. Reference/II. PostgreSQL Client Applications/app-createuser.md>) — define a new PostgreSQL user account
[dropdb](</VI. Reference/II. PostgreSQL Client Applications/app-dropdb.md>) — remove a PostgreSQL database
[dropuser](</VI. Reference/II. PostgreSQL Client Applications/app-dropuser.md>) — remove a PostgreSQL user account
[ecpg](</VI. Reference/II. PostgreSQL Client Applications/app-ecpg.md>) — embedded SQL C preprocessor
[pg_amcheck](</VI. Reference/II. PostgreSQL Client Applications/app-pgamcheck.md>) — checks for corruption in one or more PostgreSQL databases
[pg_basebackup](</VI. Reference/II. PostgreSQL Client Applications/app-pgbasebackup.md>) — take a base backup of a PostgreSQL cluster
[pgbench](</VI. Reference/II. PostgreSQL Client Applications/pgbench.md>) — run a benchmark test on PostgreSQL
[pg_config](</VI. Reference/II. PostgreSQL Client Applications/app-pgconfig.md>) — retrieve information about the installed version of PostgreSQL
[pg_dump](</VI. Reference/II. PostgreSQL Client Applications/app-pgdump.md>) — extract a PostgreSQL database into a script file or other archive file
[pg_dumpall](</VI. Reference/II. PostgreSQL Client Applications/app-pg-dumpall.md>) — extract a PostgreSQL database cluster into a script file
[pg_isready](</VI. Reference/II. PostgreSQL Client Applications/app-pg-isready.md>) — check the connection status of a PostgreSQL server
[pg_receivewal](</VI. Reference/II. PostgreSQL Client Applications/app-pgreceivewal.md>) — stream write-ahead logs from a PostgreSQL server
[pg_recvlogical](</VI. Reference/II. PostgreSQL Client Applications/app-pgrecvlogical.md>) — control PostgreSQL logical decoding streams
[pg_restore](</VI. Reference/II. PostgreSQL Client Applications/app-pgrestore.md>) — restore a PostgreSQL database from an archive file created by pg_dump
[pg_verifybackup](</VI. Reference/II. PostgreSQL Client Applications/app-pgverifybackup.md>) — verify the integrity of a base backup of a PostgreSQL cluster
[psql](</VI. Reference/II. PostgreSQL Client Applications/app-psql.md>) — PostgreSQL interactive terminal
[reindexdb](</VI. Reference/II. PostgreSQL Client Applications/app-reindexdb.md>) — reindex a PostgreSQL database
[vacuumdb](</VI. Reference/II. PostgreSQL Client Applications/app-vacuumdb.md>) — garbage-collect and analyze a PostgreSQL database
[III. PostgreSQL Server Applications](</VI. Reference/III. PostgreSQL Server Applications/III. PostgreSQL Server Applications.md>)
    

[initdb](</VI. Reference/III. PostgreSQL Server Applications/app-initdb.md>) — create a new PostgreSQL database cluster
[pg_archivecleanup](</VI. Reference/III. PostgreSQL Server Applications/pgarchivecleanup.md>) — clean up PostgreSQL WAL archive files
[pg_checksums](</VI. Reference/III. PostgreSQL Server Applications/app-pgchecksums.md>) — enable, disable or check data checksums in a PostgreSQL database cluster
[pg_controldata](</VI. Reference/III. PostgreSQL Server Applications/app-pgcontroldata.md>) — display control information of a PostgreSQL database cluster
[pg_ctl](</VI. Reference/III. PostgreSQL Server Applications/app-pg-ctl.md>) — initialize, start, stop, or control a PostgreSQL server
[pg_resetwal](</VI. Reference/III. PostgreSQL Server Applications/app-pgresetwal.md>) — reset the write-ahead log and other control information of a PostgreSQL database cluster
[pg_rewind](</VI. Reference/III. PostgreSQL Server Applications/app-pgrewind.md>) — synchronize a PostgreSQL data directory with another data directory that was forked from it
[pg_test_fsync](</VI. Reference/III. PostgreSQL Server Applications/pgtestfsync.md>) — determine fastest `wal_sync_method` for PostgreSQL
[pg_test_timing](</VI. Reference/III. PostgreSQL Server Applications/pgtesttiming.md>) — measure timing overhead
[pg_upgrade](</VI. Reference/III. PostgreSQL Server Applications/pgupgrade.md>) — upgrade a PostgreSQL server instance
[pg_waldump](</VI. Reference/III. PostgreSQL Server Applications/pgwaldump.md>) — display a human-readable rendering of the write-ahead log of a PostgreSQL database cluster
[postgres](</VI. Reference/III. PostgreSQL Server Applications/app-postgres.md>) — PostgreSQL database server


  
