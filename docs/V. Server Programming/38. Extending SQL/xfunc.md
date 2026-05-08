---
title: 38.3. User-Defined Functions
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


PostgreSQL provides four kinds of functions:

  * query language functions (functions written in SQL) ([Section 38.5](</V. Server Programming/38. Extending SQL/xfunc-sql.md>))

  * procedural language functions (functions written in, for example, PL/pgSQL or PL/Tcl) ([Section 38.8](</V. Server Programming/38. Extending SQL/xfunc-pl.md>))

  * internal functions ([Section 38.9](</V. Server Programming/38. Extending SQL/xfunc-internal.md>))

  * C-language functions ([Section 38.10](</V. Server Programming/38. Extending SQL/xfunc-c.md>))




Every kind of function can take base types, composite types, or combinations of these as arguments (parameters). In addition, every kind of function can return a base type or a composite type. Functions can also be defined to return sets of base or composite values.

Many kinds of functions can take or return certain pseudo-types (such as polymorphic types), but the available facilities vary. Consult the description of each kind of function for more details.

It's easiest to define SQL functions, so we'll start by discussing those. Most of the concepts presented for SQL functions will carry over to the other types of functions.

Throughout this chapter, it can be useful to look at the reference page of the [`CREATE FUNCTION`](</VI. Reference/I. SQL Commands/sql-createfunction.md>) command to understand the examples better. Some examples from this chapter can be found in `funcs.sql` and `funcs.c` in the `src/tutorial` directory in the PostgreSQL source distribution.


  
