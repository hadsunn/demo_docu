---
title: 53.39. `pg_proc`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The catalog `pg_proc` stores information about functions, procedures, aggregate functions, and window functions (collectively also known as routines). See [CREATE FUNCTION](</VI. Reference/I. SQL Commands/sql-createfunction.md>) for more information.

If `prokind` indicates that the entry is for an aggregate function, there should be a matching row in [`pg_aggregate`](</VII. Internals/53. System Catalogs/catalog-pg-aggregate.md>).

**Table  53.39. `pg_proc` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`proname` `name` Name of the function  
`pronamespace` `oid` (references [`pg_namespace`](</VII. Internals/53. System Catalogs/catalog-pg-namespace.md>).`oid`) The OID of the namespace that contains this function  
`proowner` `oid` (references [`pg_authid`](</VII. Internals/53. System Catalogs/catalog-pg-authid.md>).`oid`) Owner of the function  
`prolang` `oid` (references [`pg_language`](</VII. Internals/53. System Catalogs/catalog-pg-language.md>).`oid`) Implementation language or call interface of this function  
`procost` `float4` Estimated execution cost (in units of [cpu_operator_cost](runtime-config-query.html#GUC-CPU-OPERATOR-COST)); if `proretset`, this is cost per row returned  
`prorows` `float4` Estimated number of result rows (zero if not `proretset`)  
`provariadic` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Data type of the variadic array parameter's elements, or zero if the function does not have a variadic parameter  
`prosupport` `regproc` (references [`pg_proc`](</VII. Internals/53. System Catalogs/catalog-pg-proc.md>)), or zero if none  
`prokind` `char` `f` for a normal function, `p` for a procedure, `a` for an aggregate function, or `w` for a window function  
`prosecdef` `bool` Function is a security definer (i.e., a “setuid” function)  
`proleakproof` `bool` The function has no side effects. No information about the arguments is conveyed except via the return value. Any function that might throw an error depending on the values of its arguments is not leak-proof.  
`proisstrict` `bool` Function returns null if any call argument is null. In that case the function won't actually be called at all. Functions that are not “strict” must be prepared to handle null inputs.  
`proretset` `bool` Function returns a set (i.e., multiple values of the specified data type)  
`provolatile` `char` `provolatile` tells whether the function's result depends only on its input arguments, or is affected by outside factors. It is `i` for “immutable” functions, which always deliver the same result for the same inputs. It is `s` for “stable” functions, whose results (for fixed inputs) do not change within a scan. It is `v` for “volatile” functions, whose results might change at any time. (Use `v` also for functions with side-effects, so that calls to them cannot get optimized away.)  
`proparallel` `char` `proparallel` tells whether the function can be safely run in parallel mode. It is `s` for functions which are safe to run in parallel mode without restriction. It is `r` for functions which can be run in parallel mode, but their execution is restricted to the parallel group leader; parallel worker processes cannot invoke these functions. It is `u` for functions which are unsafe in parallel mode; the presence of such a function forces a serial execution plan.  
`pronargs` `int2` Number of input arguments  
`pronargdefaults` `int2` Number of arguments that have defaults  
`prorettype` `oid` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) Data type of the return value  
`proargtypes` `oidvector` (references [`pg_type`](</VII. Internals/53. System Catalogs/catalog-pg-type.md>).`oid`) An array of the data types of the function arguments. This includes only input arguments (including `INOUT` and `VARIADIC` arguments), and thus represents the call signature of the function.  
`proallargtypes` `oid[]` (<references>).`oid`) An array of the data types of the function arguments. This includes all arguments (including `OUT` and `INOUT` arguments); however, if all the arguments are `IN` arguments, this field will be null. Note that subscripting is 1-based, whereas for historical reasons `proargtypes` is subscripted from 0.  
`proargmodes` `char[]` An array of the modes of the function arguments, encoded as `i` for `IN` arguments, `o` for `OUT` arguments, `b` for `INOUT` arguments, `v` for `VARIADIC` arguments, `t` for `TABLE` arguments. If all the arguments are `IN` arguments, this field will be null. Note that subscripts correspond to positions of `proallargtypes` not `proargtypes`.  
`proargnames` `text[]` An array of the names of the function arguments. Arguments without a name are set to empty strings in the array. If none of the arguments have a name, this field will be null. Note that subscripts correspond to positions of `proallargtypes` not `proargtypes`.  
`proargdefaults` `pg_node_tree` Expression trees (in `nodeToString()` representation) for default values. This is a list with `pronargdefaults` elements, corresponding to the last _`N`_ _input_ arguments (i.e., the last _`N`_ `proargtypes` positions). If none of the arguments have defaults, this field will be null.  
`protrftypes` `oid[]` (<references>).`oid`) An array of the argument/result data type(s) for which to apply transforms (from the function's `TRANSFORM` clause). Null if none.  
`prosrc` `text` This tells the function handler how to invoke the function. It might be the actual source code of the function for interpreted languages, a link symbol, a file name, or just about anything else, depending on the implementation language/call convention.  
`probin` `text` Additional information about how to invoke the function. Again, the interpretation is language-specific.  
`prosqlbody` `pg_node_tree` Pre-parsed SQL function body. This is used for SQL-language functions when the body is given in SQL-standard notation rather than as a string literal. It's null in other cases.  
`proconfig` `text[]` Function's local settings for run-time configuration variables  
`proacl` `aclitem[]` Access privileges; see [Section 5.7](</II. The SQL Language/5. Data Definition/ddl-priv.md>) for details  
  
  


For compiled functions, both built-in and dynamically loaded, `prosrc` contains the function's C-language name (link symbol). For SQL-language functions, `prosrc` contains the function's source text if that is specified as a string literal; but if the function body is specified in SQL-standard style, `prosrc` is unused (typically it's an empty string) and `prosqlbody` contains the pre-parsed definition. For all other currently-known language types, `prosrc` contains the function's source text. `probin` is null except for dynamically-loaded C functions, for which it gives the name of the shared library file containing the function.


  
