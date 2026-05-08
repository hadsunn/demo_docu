---
title: 38.4. User-Defined Procedures
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


A procedure is a database object similar to a function. The key differences are:

  * Procedures are defined with the [`CREATE PROCEDURE`](</VI. Reference/I. SQL Commands/sql-createprocedure.md>) command, not `CREATE FUNCTION`.

  * Procedures do not return a function value; hence `CREATE PROCEDURE` lacks a `RETURNS` clause. However, procedures can instead return data to their callers via output parameters.

  * While a function is called as part of a query or DML command, a procedure is called in isolation using the [`CALL`](</VI. Reference/I. SQL Commands/sql-call.md>) command.

  * A procedure can commit or roll back transactions during its execution (then automatically beginning a new transaction), so long as the invoking `CALL` command is not part of an explicit transaction block. A function cannot do that.

  * Certain function attributes, such as strictness, don't apply to procedures. Those attributes control how the function is used in a query, which isn't relevant to procedures.




The explanations in the following sections about how to define user-defined functions apply to procedures as well, except for the points made above.

Collectively, functions and procedures are also known as _routines_. There are commands such as [`ALTER ROUTINE`](</VI. Reference/I. SQL Commands/sql-alterroutine.md>) that can operate on functions and procedures without having to know which kind it is. Note, however, that there is no `CREATE ROUTINE` command.


  
