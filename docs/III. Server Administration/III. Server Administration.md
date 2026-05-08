---
title: Part III. Server Administration
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  

# Part III. Server Administration

This part covers topics that are of interest to a PostgreSQL database administrator. This includes installation of the software, set up and configuration of the server, management of users and databases, and maintenance tasks. Anyone who runs a PostgreSQL server, even for personal use, but especially in production, should be familiar with the topics covered in this part.

The information in this part is arranged approximately in the order in which a new user should read it. But the chapters are self-contained and can be read individually as desired. The information in this part is presented in a narrative fashion in topical units. Readers looking for a complete description of a particular command should see [Part VI](</VI. Reference/VI. Reference.md>).

The first few chapters are written so they can be understood without prerequisite knowledge, so new users who need to set up their own server can begin their exploration with this part. The rest of this part is about tuning and management; that material assumes that the reader is familiar with the general use of the PostgreSQL database system. Readers are encouraged to look at [Part I](</I. Tutorial/I. Tutorial.md>) for additional information.

**Table of Contents**

[16\. Installation from Binaries](</III. Server Administration/install-binaries.md>)
[17\. Installation from Source Code](</III. Server Administration/17. Installation from Source Code/17. Installation from Source Code.md>)
    

[17.1. Requirements](</III. Server Administration/17. Installation from Source Code/install-requirements.md>)
[17.2. Getting the Source](</III. Server Administration/17. Installation from Source Code/install-getsource.md>)
[17.3. Building and Installation with Autoconf and Make](</III. Server Administration/17. Installation from Source Code/install-make.md>)
[17.4. Building and Installation with Meson](</III. Server Administration/17. Installation from Source Code/install-meson.md>)
[17.5. Post-Installation Setup](</III. Server Administration/17. Installation from Source Code/install-post.md>)
[17.6. Supported Platforms](</III. Server Administration/17. Installation from Source Code/supported-platforms.md>)
[17.7. Platform-Specific Notes](</III. Server Administration/17. Installation from Source Code/installation-platform-notes.md>)
[18\. Installation from Source Code on Windows](</III. Server Administration/18. Installation from Source Code on Windows/18. Installation from Source Code on Windows.md>)
    

[18.1. Building with Visual C++ or the Microsoft Windows SDK](</III. Server Administration/18. Installation from Source Code on Windows/install-windows-full.md>)
[19\. Server Setup and Operation](</III. Server Administration/19. Server Setup and Operation/19. Server Setup and Operation.md>)
    

[19.1. The PostgreSQL User Account](</III. Server Administration/19. Server Setup and Operation/postgres-user.md>)
[19.2. Creating a Database Cluster](</III. Server Administration/19. Server Setup and Operation/creating-cluster.md>)
[19.3. Starting the Database Server](</III. Server Administration/19. Server Setup and Operation/server-start.md>)
[19.4. Managing Kernel Resources](</III. Server Administration/19. Server Setup and Operation/kernel-resources.md>)
[19.5. Shutting Down the Server](</III. Server Administration/19. Server Setup and Operation/server-shutdown.md>)
[19.6. Upgrading a PostgreSQL Cluster](</III. Server Administration/19. Server Setup and Operation/upgrading.md>)
[19.7. Preventing Server Spoofing](</III. Server Administration/19. Server Setup and Operation/preventing-server-spoofing.md>)
[19.8. Encryption Options](</III. Server Administration/19. Server Setup and Operation/encryption-options.md>)
[19.9. Secure TCP/IP Connections with SSL](</III. Server Administration/19. Server Setup and Operation/ssl-tcp.md>)
[19.10. Secure TCP/IP Connections with GSSAPI Encryption](</III. Server Administration/19. Server Setup and Operation/gssapi-enc.md>)
[19.11. Secure TCP/IP Connections with SSH Tunnels](</III. Server Administration/19. Server Setup and Operation/ssh-tunnels.md>)
[19.12. Registering Event Log on Windows](</III. Server Administration/19. Server Setup and Operation/event-log-registration.md>)
[20\. Server Configuration](</III. Server Administration/20. Server Configuration/20. Server Configuration.md>)
    

[20.1. Setting Parameters](</III. Server Administration/20. Server Configuration/config-setting.md>)
[20.2. File Locations](</III. Server Administration/20. Server Configuration/runtime-config-file-locations.md>)
[20.3. Connections and Authentication](</III. Server Administration/20. Server Configuration/runtime-config-connection.md>)
[20.4. Resource Consumption](</III. Server Administration/20. Server Configuration/runtime-config-resource.md>)
[20.5. Write Ahead Log](</III. Server Administration/20. Server Configuration/runtime-config-wal.md>)
[20.6. Replication](</III. Server Administration/20. Server Configuration/runtime-config-replication.md>)
[20.7. Query Planning](</III. Server Administration/20. Server Configuration/runtime-config-query.md>)
[20.8. Error Reporting and Logging](</III. Server Administration/20. Server Configuration/runtime-config-logging.md>)
[20.9. Run-time Statistics](</III. Server Administration/20. Server Configuration/runtime-config-statistics.md>)
[20.10. Automatic Vacuuming](</III. Server Administration/20. Server Configuration/runtime-config-autovacuum.md>)
[20.11. Client Connection Defaults](</III. Server Administration/20. Server Configuration/runtime-config-client.md>)
[20.12. Lock Management](</III. Server Administration/20. Server Configuration/runtime-config-locks.md>)
[20.13. Version and Platform Compatibility](</III. Server Administration/20. Server Configuration/runtime-config-compatible.md>)
[20.14. Error Handling](</III. Server Administration/20. Server Configuration/runtime-config-error-handling.md>)
[20.15. Preset Options](</III. Server Administration/20. Server Configuration/runtime-config-preset.md>)
[20.16. Customized Options](</III. Server Administration/20. Server Configuration/runtime-config-custom.md>)
[20.17. Developer Options](</III. Server Administration/20. Server Configuration/runtime-config-developer.md>)
[20.18. Short Options](</III. Server Administration/20. Server Configuration/runtime-config-short.md>)
[21\. Client Authentication](</III. Server Administration/21. Client Authentication/21. Client Authentication.md>)
    

[21.1. The `pg_hba.conf` File](</III. Server Administration/21. Client Authentication/auth-pg-hba-conf.md>)
[21.2. User Name Maps](</III. Server Administration/21. Client Authentication/auth-username-maps.md>)
[21.3. Authentication Methods](</III. Server Administration/21. Client Authentication/auth-methods.md>)
[21.4. Trust Authentication](</III. Server Administration/21. Client Authentication/auth-trust.md>)
[21.5. Password Authentication](</III. Server Administration/21. Client Authentication/auth-password.md>)
[21.6. GSSAPI Authentication](</III. Server Administration/21. Client Authentication/gssapi-auth.md>)
[21.7. SSPI Authentication](</III. Server Administration/21. Client Authentication/sspi-auth.md>)
[21.8. Ident Authentication](</III. Server Administration/21. Client Authentication/auth-ident.md>)
[21.9. Peer Authentication](</III. Server Administration/21. Client Authentication/auth-peer.md>)
[21.10. LDAP Authentication](</III. Server Administration/21. Client Authentication/auth-ldap.md>)
[21.11. RADIUS Authentication](</III. Server Administration/21. Client Authentication/auth-radius.md>)
[21.12. Certificate Authentication](</III. Server Administration/21. Client Authentication/auth-cert.md>)
[21.13. PAM Authentication](</III. Server Administration/21. Client Authentication/auth-pam.md>)
[21.14. BSD Authentication](</III. Server Administration/21. Client Authentication/auth-bsd.md>)
[21.15. Authentication Problems](</III. Server Administration/21. Client Authentication/client-authentication-problems.md>)
[22\. Database Roles](</III. Server Administration/22. Database Roles/22. Database Roles.md>)
    

[22.1. Database Roles](</III. Server Administration/22. Database Roles/database-roles.md>)
[22.2. Role Attributes](</III. Server Administration/22. Database Roles/role-attributes.md>)
[22.3. Role Membership](</III. Server Administration/22. Database Roles/role-membership.md>)
[22.4. Dropping Roles](</III. Server Administration/22. Database Roles/role-removal.md>)
[22.5. Predefined Roles](</III. Server Administration/22. Database Roles/predefined-roles.md>)
[22.6. Function Security](</III. Server Administration/22. Database Roles/perm-functions.md>)
[23\. Managing Databases](</III. Server Administration/23. Managing Databases/23. Managing Databases.md>)
    

[23.1. Overview](</III. Server Administration/23. Managing Databases/manage-ag-overview.md>)
[23.2. Creating a Database](</III. Server Administration/23. Managing Databases/manage-ag-createdb.md>)
[23.3. Template Databases](</III. Server Administration/23. Managing Databases/manage-ag-templatedbs.md>)
[23.4. Database Configuration](</III. Server Administration/23. Managing Databases/manage-ag-config.md>)
[23.5. Destroying a Database](</III. Server Administration/23. Managing Databases/manage-ag-dropdb.md>)
[23.6. Tablespaces](</III. Server Administration/23. Managing Databases/manage-ag-tablespaces.md>)
[24\. Localization](</III. Server Administration/24. Localization/24. Localization.md>)
    

[24.1. Locale Support](</III. Server Administration/24. Localization/locale.md>)
[24.2. Collation Support](</III. Server Administration/24. Localization/collation.md>)
[24.3. Character Set Support](</III. Server Administration/24. Localization/multibyte.md>)
[25\. Routine Database Maintenance Tasks](</III. Server Administration/25. Routine Database Maintenance Tasks/25. Routine Database Maintenance Tasks.md>)
    

[25.1. Routine Vacuuming](</III. Server Administration/25. Routine Database Maintenance Tasks/routine-vacuuming.md>)
[25.2. Routine Reindexing](</III. Server Administration/25. Routine Database Maintenance Tasks/routine-reindex.md>)
[25.3. Log File Maintenance](</III. Server Administration/25. Routine Database Maintenance Tasks/logfile-maintenance.md>)
[26\. Backup and Restore](</III. Server Administration/26. Backup and Restore/26. Backup and Restore.md>)
    

[26.1. SQL Dump](</III. Server Administration/26. Backup and Restore/backup-dump.md>)
[26.2. File System Level Backup](</III. Server Administration/26. Backup and Restore/backup-file.md>)
[26.3. Continuous Archiving and Point-in-Time Recovery (PITR)](</III. Server Administration/26. Backup and Restore/continuous-archiving.md>)
[27\. High Availability, Load Balancing, and Replication](</III. Server Administration/27. High Availability, Load Balancing, and Replication/27. High Availability, Load Balancing, and Replication.md>)
    

[27.1. Comparison of Different Solutions](</III. Server Administration/27. High Availability, Load Balancing, and Replication/different-replication-solutions.md>)
[27.2. Log-Shipping Standby Servers](</III. Server Administration/27. High Availability, Load Balancing, and Replication/warm-standby.md>)
[27.3. Failover](</III. Server Administration/27. High Availability, Load Balancing, and Replication/warm-standby-failover.md>)
[27.4. Hot Standby](</III. Server Administration/27. High Availability, Load Balancing, and Replication/hot-standby.md>)
[28\. Monitoring Database Activity](</III. Server Administration/28. Monitoring Database Activity/28. Monitoring Database Activity.md>)
    

[28.1. Standard Unix Tools](</III. Server Administration/28. Monitoring Database Activity/monitoring-ps.md>)
[28.2. The Cumulative Statistics System](</III. Server Administration/28. Monitoring Database Activity/monitoring-stats.md>)
[28.3. Viewing Locks](</III. Server Administration/28. Monitoring Database Activity/monitoring-locks.md>)
[28.4. Progress Reporting](</III. Server Administration/28. Monitoring Database Activity/progress-reporting.md>)
[28.5. Dynamic Tracing](</III. Server Administration/28. Monitoring Database Activity/dynamic-trace.md>)
[29\. Monitoring Disk Usage](</III. Server Administration/29. Monitoring Disk Usage/diskusage.md>)
    

[29.1. Determining Disk Usage](</III. Server Administration/29. Monitoring Disk Usage/disk-usage.md>)
[29.2. Disk Full Failure](</III. Server Administration/29. Monitoring Disk Usage/disk-full.md>)
[30\. Reliability and the Write-Ahead Log](</III. Server Administration/30. Reliability and the Write-Ahead Log/30. Reliability and the Write-Ahead Log.md>)
    

[30.1. Reliability](</III. Server Administration/30. Reliability and the Write-Ahead Log/wal-reliability.md>)
[30.2. Data Checksums](</III. Server Administration/30. Reliability and the Write-Ahead Log/checksums.md>)
[30.3. Write-Ahead Logging (WAL)](</III. Server Administration/30. Reliability and the Write-Ahead Log/wal-intro.md>)
[30.4. Asynchronous Commit](</III. Server Administration/30. Reliability and the Write-Ahead Log/wal-async-commit.md>)
[30.5. WAL Configuration](</III. Server Administration/30. Reliability and the Write-Ahead Log/wal-configuration.md>)
[30.6. WAL Internals](</III. Server Administration/30. Reliability and the Write-Ahead Log/wal-internals.md>)
[31\. Logical Replication](</III. Server Administration/31. Logical Replication/31. Logical Replication.md>)
    

[31.1. Publication](</III. Server Administration/31. Logical Replication/logical-replication-publication.md>)
[31.2. Subscription](</III. Server Administration/31. Logical Replication/logical-replication-subscription.md>)
[31.3. Row Filters](</III. Server Administration/31. Logical Replication/logical-replication-row-filter.md>)
[31.4. Column Lists](</III. Server Administration/31. Logical Replication/logical-replication-col-lists.md>)
[31.5. Conflicts](</III. Server Administration/31. Logical Replication/logical-replication-conflicts.md>)
[31.6. Restrictions](</III. Server Administration/31. Logical Replication/logical-replication-restrictions.md>)
[31.7. Architecture](</III. Server Administration/31. Logical Replication/logical-replication-architecture.md>)
[31.8. Monitoring](</III. Server Administration/31. Logical Replication/logical-replication-monitoring.md>)
[31.9. Security](</III. Server Administration/31. Logical Replication/logical-replication-security.md>)
[31.10. Configuration Settings](</III. Server Administration/31. Logical Replication/logical-replication-config.md>)
[31.11. Quick Setup](</III. Server Administration/31. Logical Replication/logical-replication-quick-setup.md>)
[32\. Just-in-Time Compilation (JIT)](</III. Server Administration/32. Just-in-Time Compilation (JIT)/32. Just-in-Time Compilation (JIT).md>)
    

[32.1. What Is JIT compilation?](</III. Server Administration/32. Just-in-Time Compilation (JIT)/jit-reason.md>)
[32.2. When to JIT?](</III. Server Administration/32. Just-in-Time Compilation (JIT)/jit-decision.md>)
[32.3. Configuration](</III. Server Administration/32. Just-in-Time Compilation (JIT)/jit-configuration.md>)
[32.4. Extensibility](</III. Server Administration/32. Just-in-Time Compilation (JIT)/jit-extensibility.md>)
[33\. Regression Tests](</III. Server Administration/33. Regression Tests/33. Regression Tests.md>)
    

[33.1. Running the Tests](</III. Server Administration/33. Regression Tests/regress-run.md>)
[33.2. Test Evaluation](</III. Server Administration/33. Regression Tests/regress-evaluation.md>)
[33.3. Variant Comparison Files](</III. Server Administration/33. Regression Tests/regress-variant.md>)
[33.4. TAP Tests](</III. Server Administration/33. Regression Tests/regress-tap.md>)
[33.5. Test Coverage Examination](</III. Server Administration/33. Regression Tests/regress-coverage.md>)


  
