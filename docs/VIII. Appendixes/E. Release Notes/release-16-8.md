---
title: E.2. Release 16.8
---







Supported versions: 13 / 14 / 15 / 16 / 17


---  
  


[E.2.1. Migration to Version 16.8](</VIII. Appendixes/E. Release Notes/release-16-8.md#e21-migration-to-version-168>)


[E.2.2. Changes](</VIII. Appendixes/E. Release Notes/release-16-8.md#e22-changes>)



**Release date:  **2025-02-20

This release contains a few fixes from 16.7. For information about new features in major release 16, see [Section E.10](</VIII. Appendixes/E. Release Notes/release-16.md>).

### E.2.1. Migration to Version 16.8 #

A dump/restore is not required for those running 16.X.

However, if you are upgrading from a version earlier than 16.5, see [Section E.5](</VIII. Appendixes/E. Release Notes/release-16-5.md>).

### E.2.2. Changes #

  * Improve behavior of libpq's quoting functions (Andres Freund, Tom Lane) [§](https://postgr.es/c/111f4dd27) [§](https://postgr.es/c/991a60a9f) [§](https://postgr.es/c/644b7d686)

The changes made for CVE-2025-1094 had one serious oversight: `PQescapeLiteral()` and `PQescapeIdentifier()` failed to honor their string length parameter, instead always reading to the input string's trailing null. This resulted in including unwanted text in the output, if the caller intended to truncate the string via the length parameter. With very bad luck it could cause a crash due to reading off the end of memory.

In addition, modify all these quoting functions so that when invalid encoding is detected, an invalid sequence is substituted for just the first byte of the presumed character, not all of it. This reduces the risk of problems if a calling application performs additional processing on the quoted string.

  * Fix meson build system to correctly detect availability of the `bsd_auth.h` system header (Nazir Bilal Yavuz) [§](https://postgr.es/c/01cdb98e4)





  
