---
title: H.1. Client Interfaces
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


There are only two client interfaces included in the base PostgreSQL distribution:

  * [libpq](</IV. Client Interfaces/34. libpq — C Library/34. libpq — C Library.md>) is included because it is the primary C language interface, and because many other client interfaces are built on top of it.

  * [ECPG](</IV. Client Interfaces/36. ECPG — Embedded SQL in C/36. ECPG — Embedded SQL in C.md>) is included because it depends on the server-side SQL grammar, and is therefore sensitive to changes in PostgreSQL itself.




All other language interfaces are external projects and are distributed separately. A [list of language interfaces](https://wiki.postgresql.org/wiki/List_of_drivers) is maintained on the PostgreSQL wiki. Note that some of these packages are not released under the same license as PostgreSQL. For more information on each language interface, including licensing terms, refer to its website and documentation.

<https://wiki.postgresql.org/wiki/List_of_drivers>


  
