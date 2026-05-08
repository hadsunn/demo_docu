---
title: CHECKPOINT
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    CHECKPOINT
    

## Description

A checkpoint is a point in the write-ahead log sequence at which all data files have been updated to reflect the information in the log. All data files will be flushed to disk. Refer to [Section 30.5](</III. Server Administration/30. Reliability and the Write-Ahead Log/wal-configuration.md>) for more details about what happens during a checkpoint.

The `CHECKPOINT` command forces an immediate checkpoint when the command is issued, without waiting for a regular checkpoint scheduled by the system (controlled by the settings in [Section 20.5.2](runtime-config-wal.html#RUNTIME-CONFIG-WAL-CHECKPOINTS "20.5.2. Checkpoints")). `CHECKPOINT` is not intended for use during normal operation.

If executed during recovery, the `CHECKPOINT` command will force a restartpoint (see [Section 30.5](</III. Server Administration/30. Reliability and the Write-Ahead Log/wal-configuration.md>)) rather than writing a new checkpoint.

Only superusers or users with the privileges of the [`pg_checkpoint`](predefined-roles.html#PREDEFINED-ROLES-TABLE "Table 22.1. Predefined Roles") role can call `CHECKPOINT`.

## Compatibility

The `CHECKPOINT` command is a PostgreSQL language extension.


  
