---
title: 53.40. `pg_publication`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_publication` contains all publications created in the database. For more on publications see [Section 31.1](</III. Server Administration/31. Logical Replication/logical-replication-publication.md>).

**Table  53.40. `pg_publication` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`pubname` `name` Name of the publication  
`pubowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the publication  
`puballtables` `bool` If true, this publication automatically includes all tables in the database, including any that will be created in the future.  
`pubinsert` `bool` If true, [INSERT](</VI. Reference/I. SQL Commands/sql-insert.md>) operations are replicated for tables in the publication.  
`pubupdate` `bool` If true, [UPDATE](</VI. Reference/I. SQL Commands/sql-update.md>) operations are replicated for tables in the publication.  
`pubdelete` `bool` If true, [DELETE](</VI. Reference/I. SQL Commands/sql-delete.md>) operations are replicated for tables in the publication.  
`pubtruncate` `bool` If true, [TRUNCATE](</VI. Reference/I. SQL Commands/sql-truncate.md>) operations are replicated for tables in the publication.  
`pubviaroot` `bool` If true, operations on a leaf partition are replicated using the identity and schema of its topmost partitioned ancestor mentioned in the publication instead of its own.  
  
  



  
