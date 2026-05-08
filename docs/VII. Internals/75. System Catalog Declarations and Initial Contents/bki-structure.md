---
title: 75.5. Structure of the Bootstrap BKI File
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `open` command cannot be used until the tables it uses exist and have entries for the table that is to be opened. (These minimum tables are `pg_class`, `pg_attribute`, `pg_proc`, and `pg_type`.) To allow those tables themselves to be filled, `create` with the `bootstrap` option implicitly opens the created table for data insertion.

Also, the `declare index` and `declare toast` commands cannot be used until the system catalogs they need have been created and filled in.

Thus, the structure of the `postgres.bki` file has to be:

  1. `create bootstrap` one of the critical tables

  2. `insert` data describing at least the critical tables

  3. `close`

  4. Repeat for the other critical tables.

  5. `create` (without `bootstrap`) a noncritical table

  6. `open`

  7. `insert` desired data

  8. `close`

  9. Repeat for the other noncritical tables.

  10. Define indexes and toast tables.

  11. `build indices`




There are doubtless other, undocumented ordering dependencies.


  
