---
title: 53.34. `pg_operator`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_operator` stores information about operators. See [CREATE OPERATOR](</VI. Reference/I. SQL Commands/sql-createoperator.md>) for more information.

**Table  53.34. `pg_operator` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`oprname` `name` Name of the operator  
`oprnamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) The OID of the namespace that contains this operator  
`oprowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the operator  
`oprkind` `char` `b` = infix operator (“both”), or `l` = prefix operator (“left”)  
`oprcanmerge` `bool` This operator supports merge joins  
`oprcanhash` `bool` This operator supports hash joins  
`oprleft` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Type of the left operand (zero for a prefix operator)  
`oprright` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Type of the right operand  
`oprresult` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Type of the result (zero for a not-yet-defined “shell” operator)  
`oprcom` `oid` (references [`pg_operator`](</VII. Internals/53. System Catalogs/catalog-pg-operator.md>).`oid`) Commutator of this operator (zero if none)  
`oprnegate` `oid` (references [`pg_operator`](</VII. Internals/53. System Catalogs/catalog-pg-operator.md>).`oid`) Negator of this operator (zero if none)  
`oprcode` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) Function that implements this operator (zero for a not-yet-defined “shell” operator)  
`oprrest` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) Restriction selectivity estimation function for this operator (zero if none)  
`oprjoin` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>).`oid`) Join selectivity estimation function for this operator (zero if none)  
  
  



  
