---
title: E.4. Release 16.6
---







Supported versions: 13 / 14 / 15 / 16 / 17


---  
  


[E.4.1. Migration to Version 16.6](</VIII. Appendixes/E. Release Notes/release-16-6.md#e41-migration-to-version-166>)


[E.4.2. Changes](</VIII. Appendixes/E. Release Notes/release-16-6.md#e42-changes>)



**Release date:  **2024-11-21

This release contains a few fixes from 16.5. For information about new features in major release 16, see [Section E.10](</VIII. Appendixes/E. Release Notes/release-16.md>).

### E.4.1. Migration to Version 16.6 #

A dump/restore is not required for those running 16.X.

However, if you are upgrading from a version earlier than 16.5, see [Section E.5](</VIII. Appendixes/E. Release Notes/release-16-5.md>).

### E.4.2. Changes #

  * Repair ABI break for extensions that work with struct `ResultRelInfo` (Tom Lane) [§](https://postgr.es/c/ee33d5847)

Last week's minor releases unintentionally broke binary compatibility with timescaledb and several other extensions. Restore the affected structure to its previous size, so that such extensions need not be rebuilt.

  * Restore functionality of `ALTER {ROLE|DATABASE} SET role` (Tom Lane, Noah Misch) [§](https://postgr.es/c/b0918c128)

The fix for CVE-2024-10978 accidentally caused settings for `role` to not be applied if they come from non-interactive sources, including previous `ALTER {ROLE|DATABASE}` commands and the `PGOPTIONS` environment variable.

  * Fix cases where a logical replication slot's `restart_lsn` could go backwards (Masahiko Sawada) [§](https://postgr.es/c/f35391133)

Previously, restarting logical replication could sometimes cause the slot's restart point to be recomputed as an older value than had previously been advertised in `pg_replication_slots`. This is bad, since for example WAL files might have been removed on the basis of the later `restart_lsn` value, in which case replication would fail to restart.

  * Avoid deleting still-needed WAL files during pg_rewind (Polina Bungina, Alexander Kukushkin) [§](https://postgr.es/c/ea1649c35)

Previously, in unlucky cases, it was possible for pg_rewind to remove important WAL files from the rewound demoted primary. In particular this happens if those files have been marked for archival (i.e., their `.ready` files were created) but not yet archived. Then the newly promoted node no longer has such files because of them having been recycled, but likely they are needed for recovery in the demoted node. If pg_rewind removes them, recovery is not possible anymore.

  * Fix race conditions associated with dropping shared statistics entries (Kyotaro Horiguchi, Michael Paquier) [§](https://postgr.es/c/afa20845d)

These bugs could lead to loss of statistics data, assertion failures, or “can only drop stats once” errors.

  * Count index scans in `contrib/bloom` indexes in the statistics views, such as the `pg_stat_user_indexes`.`idx_scan` counter (Masahiro Ikeda) [§](https://postgr.es/c/05aac2e83)

  * Fix crash when checking to see if an index's opclass options have changed (Alexander Korotkov) [§](https://postgr.es/c/b242aba02)

Some forms of `ALTER TABLE` would fail if the table has an index with non-default operator class options.

  * Avoid assertion failure caused by disconnected NFA sub-graphs in regular expression parsing (Tom Lane) [§](https://postgr.es/c/b6312becc)

This bug does not appear to have any visible consequences in non-assert builds.





  
