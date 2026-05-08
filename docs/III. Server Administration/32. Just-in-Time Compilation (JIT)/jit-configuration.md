---
title: 32.3. Configuration
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The configuration variable [jit](runtime-config-query.html#GUC-JIT) determines whether JIT compilation is enabled or disabled. If it is enabled, the configuration variables [jit_above_cost](runtime-config-query.html#GUC-JIT-ABOVE-COST), [jit_inline_above_cost](runtime-config-query.html#GUC-JIT-INLINE-ABOVE-COST), and [jit_optimize_above_cost](runtime-config-query.html#GUC-JIT-OPTIMIZE-ABOVE-COST) determine whether JIT compilation is performed for a query, and how much effort is spent doing so.

[jit_provider](runtime-config-client.html#GUC-JIT-PROVIDER) determines which JIT implementation is used. It is rarely required to be changed. See [Section 32.4.2](jit-extensibility.html#JIT-PLUGGABLE "32.4.2. Pluggable JIT Providers").

For development and debugging purposes a few additional configuration parameters exist, as described in [Section 20.17](</III. Server Administration/20. Server Configuration/runtime-config-developer.md>).


  
