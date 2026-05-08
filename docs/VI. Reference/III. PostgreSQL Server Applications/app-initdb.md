---
title: initdb
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


initdb  
---  
  

## initdb

initdb — create a new PostgreSQL database cluster

## Synopsis

`initdb` [_`option`_...] [ `--pgdata` | `-D` ] _`directory`_

## Description

`initdb` creates a new PostgreSQL [](glossary.html#GLOSSARY-DB-CLUSTER)[database cluster](glossary.html#GLOSSARY-DB-CLUSTER "Database cluster").

Creating a database cluster consists of creating the [](<glossary#GLOSSARY-DATA-DIRECTORY)[directories]>) for more details.

Although `initdb` will attempt to create the specified data directory, it might not have permission if the parent directory of the desired data directory is root-owned. To initialize in such a setup, create an empty data directory as root, then use `chown` to assign ownership of that directory to the database user account, then `su` to become the database user to run `initdb`.

`initdb` must be run as the user that will own the server process, because the server needs to have access to the files and directories that `initdb` creates. Since the server cannot be run as root, you must not run `initdb` as root either. (It will in fact refuse to do so.)

For security reasons the new cluster created by `initdb` will only be accessible by the cluster owner by default. The `--allow-group-access` option allows any user in the same group as the cluster owner to read files in the cluster. This is useful for performing backups as a non-privileged user.

`initdb` initializes the database cluster's default locale and character set encoding. These can also be set separately for each database when it is created. `initdb` determines those settings for the template databases, which will serve as the default for all other databases.

By default, `initdb` uses the locale provider `libc` (see [Section 24.1.4](locale.html#LOCALE-PROVIDERS "24.1.4. Locale Providers")). The `libc` locale provider takes the locale settings from the environment, and determines the encoding from the locale settings.

To choose a different locale for the cluster, use the option `--locale`. There are also individual options `--lc-*` and `--icu-locale` (see below) to set values for the individual locale categories. Note that inconsistent settings for different locale categories can give nonsensical results, so this should be used with care.

Alternatively, `initdb` can use the ICU library to provide locale services by specifying `--locale-provider=icu`. The server must be built with ICU support. To choose the specific ICU locale ID to apply, use the option `--icu-locale`. Note that for implementation reasons and to support legacy code, `initdb` will still select and initialize libc locale settings when the ICU locale provider is used.

When `initdb` runs, it will print out the locale settings it has chosen. If you have complex requirements or specified multiple options, it is advisable to check that the result matches what was intended.

More details about locale settings can be found in [Section 24.1](</III. Server Administration/24. Localization/locale.md>).

To alter the default encoding, use the `--encoding`. More details can be found in [Section 24.3](</III. Server Administration/24. Localization/multibyte.md>).

## Options

`-A _`authmethod`_`  
`--auth=_`authmethod`_` #
    

This option specifies the default authentication method for local users used in `pg_hba.conf` (`host` and `local` lines). See [Section 21.1](</III. Server Administration/21. Client Authentication/auth-pg-hba-conf.md>) for an overview of valid values.

`initdb` will prepopulate `pg_hba.conf` entries using the specified authentication method for non-replication as well as replication connections.

Do not use `trust` unless you trust all local users on your system. `trust` is the default for ease of installation.

`--auth-host=_`authmethod`_` #
    

This option specifies the authentication method for local users via TCP/IP connections used in `pg_hba.conf` (`host` lines).

`--auth-local=_`authmethod`_` #
    

This option specifies the authentication method for local users via Unix-domain socket connections used in `pg_hba.conf` (`local` lines).

`-D _`directory`_`  
`--pgdata=_`directory`_` #
    

This option specifies the directory where the database cluster should be stored. This is the only information required by `initdb`, but you can avoid writing it by setting the `PGDATA` environment variable, which can be convenient since the database server (`postgres`) can find the data directory later by the same variable.

`-E _`encoding`_`  
`--encoding=_`encoding`_` #
    

Selects the encoding of the template databases. This will also be the default encoding of any database you create later, unless you override it then. The character sets supported by the PostgreSQL server are described in [Section 24.3.1](multibyte.html#MULTIBYTE-CHARSET-SUPPORTED "24.3.1. Supported Character Sets").

By default, the template database encoding is derived from the locale. If [`--no-locale`](app-initdb.html#APP-INITDB-OPTION-NO-LOCALE) is specified (or equivalently, if the locale is `C` or `POSIX`), then the default is `UTF8` for the ICU provider and `SQL_ASCII` for the `libc` provider.

`-g`  
`--allow-group-access` #
    

Allows users in the same group as the cluster owner to read all cluster files created by `initdb`. This option is ignored on Windows as it does not support POSIX-style group permissions.

`--icu-locale=_`locale`_` #
    

Specifies the ICU locale when the ICU provider is used. Locale support is described in [Section 24.1](</III. Server Administration/24. Localization/locale.md>).

`--icu-rules=_`rules`_` #
    

Specifies additional collation rules to customize the behavior of the default collation. This is supported for ICU only.

`-k`  
`--data-checksums` #
    

Use checksums on data pages to help detect corruption by the I/O system that would otherwise be silent. Enabling checksums may incur a noticeable performance penalty. If set, checksums are calculated for all objects, in all databases. All checksum failures will be reported in the [`pg_stat_database`](<monitoring-stats#MONITORING-PG-STAT-DATABASE-VIEW>) for details.

`--locale=_`locale`_` #
    

Sets the default locale for the database cluster. If this option is not specified, the locale is inherited from the environment that `initdb` runs in. Locale support is described in [Section 24.1](</III. Server Administration/24. Localization/locale.md>).

`--lc-collate=_`locale`_`  
`--lc-ctype=_`locale`_`  
`--lc-messages=_`locale`_`  
`--lc-monetary=_`locale`_`  
`--lc-numeric=_`locale`_`  
`--lc-time=_`locale`_` #
    

Like `--locale`, but only sets the locale in the specified category.

`--no-locale` #
    

Equivalent to `--locale=C`.

`--locale-provider={`libc`|`icu`}` #
    

This option sets the locale provider for databases created in the new cluster. It can be overridden in the `CREATE DATABASE` command when new databases are subsequently created. The default is `libc` (see [Section 24.1.4](locale.html#LOCALE-PROVIDERS "24.1.4. Locale Providers")).

`-N`  
`--no-sync` #
    

By default, `initdb` will wait for all files to be written safely to disk. This option causes `initdb` to return without waiting, which is faster, but means that a subsequent operating system crash can leave the data directory corrupt. Generally, this option is useful for testing, but should not be used when creating a production installation.

`--no-instructions` #
    

By default, `initdb` will write instructions for how to start the cluster at the end of its output. This option causes those instructions to be left out. This is primarily intended for use by tools that wrap `initdb` in platform-specific behavior, where those instructions are likely to be incorrect.

`--pwfile=_`filename`_` #
    

Makes `initdb` read the bootstrap superuser's password from a file. The first line of the file is taken as the password.

`-S`  
`--sync-only` #
    

Safely write all database files to disk and exit. This does not perform any of the normal initdb operations. Generally, this option is useful for ensuring reliable recovery after changing [fsync](runtime-config-wal.html#GUC-FSYNC) from `off` to `on`.

`-T _`config`_`  
`--text-search-config=_`config`_` #
    

Sets the default text search configuration. See [default_text_search_config](runtime-config-client.html#GUC-DEFAULT-TEXT-SEARCH-CONFIG) for further information.

`-U _`username`_`  
`--username=_`username`_` #
    

Sets the user name of the [](glossary.html#GLOSSARY-BOOTSTRAP-SUPERUSER)[bootstrap superuser](glossary.html#GLOSSARY-BOOTSTRAP-SUPERUSER "Bootstrap superuser"). This defaults to the name of the operating-system user running `initdb`.

`-W`  
`--pwprompt` #
    

Makes `initdb` prompt for a password to give the bootstrap superuser. If you don't plan on using password authentication, this is not important. Otherwise you won't be able to use password authentication until you have a password set up.

`-X _`directory`_`  
`--waldir=_`directory`_` #
    

This option specifies the directory where the write-ahead log should be stored.

`--wal-segsize=_`size`_` #
    

Set the _WAL segment size_ , in megabytes. This is the size of each individual file in the WAL log. The default size is 16 megabytes. The value must be a power of 2 between 1 and 1024 (megabytes). This option can only be set during initialization, and cannot be changed later.

It may be useful to adjust this size to control the granularity of WAL log shipping or archiving. Also, in databases with a high volume of WAL, the sheer number of WAL files per directory can become a performance and management problem. Increasing the WAL file size will reduce the number of WAL files.

Other, less commonly used, options are also available:

`-c _`name`_ =_`value`_`  
`--set _`name`_ =_`value`_` #
    

Forcibly set the server parameter _`name`_ to _`value`_ during `initdb`, and also install that setting in the generated `postgresql.conf` file, so that it will apply during future server runs. This option can be given more than once to set several parameters. It is primarily useful when the environment is such that the server will not start at all using the default parameters.

`-d`  
`--debug` #
    

Print debugging output from the bootstrap backend and a few other messages of lesser interest for the general public. The bootstrap backend is the program `initdb` uses to create the catalog tables. This option generates a tremendous amount of extremely boring output.

`--discard-caches` #
    

Run the bootstrap backend with the `debug_discard_caches=1` option. This takes a very long time and is only of use for deep debugging.

`-L _`directory`_` #
    

Specifies where `initdb` should find its input files to initialize the database cluster. This is normally not necessary. You will be told if you need to specify their location explicitly.

`-n`  
`--no-clean` #
    

By default, when `initdb` determines that an error prevented it from completely creating the database cluster, it removes any files it might have created before discovering that it cannot finish the job. This option inhibits tidying-up and is thus useful for debugging.

Other options:

`-V`  
`--version` #
    

Print the initdb version and exit.

`-?`  
`--help` #
    

Show help about initdb command line arguments, and exit.

## Environment

`PGDATA` #
    

Specifies the directory where the database cluster is to be stored; can be overridden using the `-D` option.

`PG_COLOR` #
    

Specifies whether to use color in diagnostic messages. Possible values are `always`, `auto` and `never`.

`TZ` #
    

Specifies the default time zone of the created database cluster. The value should be a full time zone name (see [Section 8.5.3](datatype-datetime.html#DATATYPE-TIMEZONES "8.5.3. Time Zones")).

## Notes

`initdb` can also be invoked via `pg_ctl initdb`.

## See Also

[pg_ctl](</VI. Reference/III. PostgreSQL Server Applications/app-pg-ctl.md>)


  
