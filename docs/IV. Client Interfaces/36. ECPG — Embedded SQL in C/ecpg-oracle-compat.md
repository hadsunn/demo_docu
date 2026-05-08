---
title: 36.16. Oracle Compatibility Mode
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


`ecpg` can be run in a so-called _Oracle compatibility mode_. If this mode is active, it tries to behave as if it were Oracle Pro*C.

Specifically, this mode changes `ecpg` in three ways:

  * Pad character arrays receiving character string types with trailing spaces to the specified length

  * Zero byte terminate these character arrays, and set the indicator variable if truncation occurs

  * Set the null indicator to `-1` when character arrays receive empty character string types





  
