---
title: 32.1. What Is JIT compilation?
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[32.1.1. JIT Accelerated Operations](</III. Server Administration/32. Just-in-Time Compilation (JIT)/jit-reason.md#3211-jit-accelerated-operations>)


[32.1.2. Inlining](</III. Server Administration/32. Just-in-Time Compilation (JIT)/jit-reason.md#3212-inlining>)


[32.1.3. Optimization](</III. Server Administration/32. Just-in-Time Compilation (JIT)/jit-reason.md#3213-optimization>)



Just-in-Time (JIT) compilation is the process of turning some form of interpreted program evaluation into a native program, and doing so at run time. For example, instead of using general-purpose code that can evaluate arbitrary SQL expressions to evaluate a particular SQL predicate like `WHERE a.col = 3`, it is possible to generate a function that is specific to that expression and can be natively executed by the CPU, yielding a speedup.

PostgreSQL has builtin support to perform JIT compilation using [LLVM](https://llvm.org/) when PostgreSQL is built with [`--with-llvm`](install-make.html#CONFIGURE-WITH-LLVM).

See `src/backend/jit/README` for further details.

### 32.1.1. JIT Accelerated Operations #

Currently PostgreSQL's JIT implementation has support for accelerating expression evaluation and tuple deforming. Several other operations could be accelerated in the future.

Expression evaluation is used to evaluate `WHERE` clauses, target lists, aggregates and projections. It can be accelerated by generating code specific to each case.

Tuple deforming is the process of transforming an on-disk tuple (see [Section 73.6.1](storage-page-layout.html#STORAGE-TUPLE-LAYOUT "73.6.1. Table Row Layout")) into its in-memory representation. It can be accelerated by creating a function specific to the table layout and the number of columns to be extracted.

### 32.1.2. Inlining #

PostgreSQL is very extensible and allows new data types, functions, operators and other database objects to be defined; see [Chapter 38](</V. Server Programming/38. Extending SQL/38. Extending SQL.md>)). To reduce that overhead, JIT compilation can inline the bodies of small functions into the expressions using them. That allows a significant percentage of the overhead to be optimized away.

### 32.1.3. Optimization #

LLVM has support for optimizing generated code. Some of the optimizations are cheap enough to be performed whenever JIT is used, while others are only beneficial for longer-running queries. See <https://llvm.org/docs/Passes.html#transform-passes> for more details about optimizations.


  
