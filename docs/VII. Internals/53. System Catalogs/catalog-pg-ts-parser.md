---
title: 53.62. `pg_ts_parser`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `pg_ts_parser` catalog contains entries defining text search parsers. A parser is responsible for splitting input text into lexemes and assigning a token type to each lexeme. Since a parser must be implemented by C-language-level functions, creation of new parsers is restricted to database superusers.

PostgreSQL's text search features are described at length in [Chapter 12](</II. The SQL Language/12. Full Text Search/12. Full Text Search.md>).

**Table  53.62. `pg_ts_parser` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`prsname` `name` Text search parser name  
`prsnamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) The OID of the namespace that contains this parser  
`prsstart` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) OID of the parser's startup function  
`prstoken` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) OID of the parser's next-token function  
`prsend` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) OID of the parser's shutdown function  
`prsheadline` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) OID of the parser's headline function (zero if none)  
`prslextype` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) OID of the parser's lextype function  
  
  



  
