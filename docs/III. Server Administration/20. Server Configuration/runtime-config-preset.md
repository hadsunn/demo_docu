---
title: 20.15. Preset Options
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The following “parameters” are read-only. As such, they have been excluded from the sample `postgresql.conf` file. These options report various aspects of PostgreSQL behavior that might be of interest to certain applications, particularly administrative front-ends. Most of them are determined when PostgreSQL is compiled or when it is installed.

`block_size` (`integer`)  #
    

Reports the size of a disk block. It is determined by the value of `BLCKSZ` when building the server. The default value is 8192 bytes. The meaning of some configuration variables (such as [shared_buffers](<runtime-config-resource#GUC-SHARED-BUFFERS))>) for information.

`data_checksums` (`boolean`)  #
    

Reports whether data checksums are enabled for this cluster. See [data checksums](app-initdb.html#APP-INITDB-DATA-CHECKSUMS) for more information.

`data_directory_mode` (`integer`)  #
    

On Unix systems this parameter reports the permissions the data directory (defined by [data_directory](runtime-config-file-locations.html#GUC-DATA-DIRECTORY)) had at server startup. (On Microsoft Windows this parameter will always display `0700`.) See [group access](app-initdb.html#APP-INITDB-ALLOW-GROUP-ACCESS) for more information.

`debug_assertions` (`boolean`)  #
    

Reports whether PostgreSQL has been built with assertions enabled. That is the case if the macro `USE_ASSERT_CHECKING` is defined when PostgreSQL is built (accomplished e.g., by the `configure` option `--enable-cassert`). By default PostgreSQL is built without assertions.

`integer_datetimes` (`boolean`)  #
    

Reports whether PostgreSQL was built with support for 64-bit-integer dates and times. As of PostgreSQL 10, this is always `on`.

`in_hot_standby` (`boolean`)  #
    

Reports whether the server is currently in hot standby mode. When this is `on`, all transactions are forced to be read-only. Within a session, this can change only if the server is promoted to be primary. See [Section 27.4](</III. Server Administration/27. High Availability, Load Balancing, and Replication/hot-standby.md>) for more information.

`max_function_args` (`integer`)  #
    

Reports the maximum number of function arguments. It is determined by the value of `FUNC_MAX_ARGS` when building the server. The default value is 100 arguments.

`max_identifier_length` (`integer`)  #
    

Reports the maximum identifier length. It is determined as one less than the value of `NAMEDATALEN` when building the server. The default value of `NAMEDATALEN` is 64; therefore the default `max_identifier_length` is 63 bytes, which can be less than 63 characters when using multibyte encodings.

`max_index_keys` (`integer`)  #
    

Reports the maximum number of index keys. It is determined by the value of `INDEX_MAX_KEYS` when building the server. The default value is 32 keys.

`segment_size` (`integer`)  #
    

Reports the number of blocks (pages) that can be stored within a file segment. It is determined by the value of `RELSEG_SIZE` when building the server. The maximum size of a segment file in bytes is equal to `segment_size` multiplied by `block_size`; by default this is 1GB.

`server_encoding` (`string`)  #
    

Reports the database encoding (character set). It is determined when the database is created. Ordinarily, clients need only be concerned with the value of [client_encoding](runtime-config-client.html#GUC-CLIENT-ENCODING).

`server_version` (`string`)  #
    

Reports the version number of the server. It is determined by the value of `PG_VERSION` when building the server.

`server_version_num` (`integer`)  #
    

Reports the version number of the server as an integer. It is determined by the value of `PG_VERSION_NUM` when building the server.

`shared_memory_size` (`integer`)  #
    

Reports the size of the main shared memory area, rounded up to the nearest megabyte.

`shared_memory_size_in_huge_pages` (`integer`)  #
    

Reports the number of huge pages that are needed for the main shared memory area based on the specified [huge_page_size](runtime-config-resource.html#GUC-HUGE-PAGE-SIZE). If huge pages are not supported, this will be `-1`.

This setting is supported only on Linux. It is always set to `-1` on other platforms. For more details about using huge pages on Linux, see [Section 19.4.5](kernel-resources.html#LINUX-HUGE-PAGES "19.4.5. Linux Huge Pages").

`ssl_library` (`string`)  #
    

Reports the name of the SSL library that this PostgreSQL server was built with (even if SSL is not currently configured or in use on this instance), for example `OpenSSL`, or an empty string if none.

`wal_block_size` (`integer`)  #
    

Reports the size of a WAL disk block. It is determined by the value of `XLOG_BLCKSZ` when building the server. The default value is 8192 bytes.

`wal_segment_size` (`integer`)  #
    

Reports the size of write ahead log segments. The default value is 16MB. See [Section 30.5](</III. Server Administration/30. Reliability and the Write-Ahead Log/wal-configuration.md>) for more information.


  
