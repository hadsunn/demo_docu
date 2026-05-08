---
title: 52.4. The PostgreSQL Rule System
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


PostgreSQL supports a powerful _rule system_ for the specification of _views_ and ambiguous _view updates_. Originally the PostgreSQL rule system consisted of two implementations:

  * The first one worked using _row level_ processing and was implemented deep in the _executor_. The rule system was called whenever an individual row had been accessed. This implementation was removed in 1995 when the last official release of the Berkeley Postgres project was transformed into Postgres95.

  * The second implementation of the rule system is a technique called _query rewriting_. The _rewrite system_ is a module that exists between the _parser stage_ and the _planner/optimizer_. This technique is still implemented.




The query rewriter is discussed in some detail in [Chapter 41](</V. Server Programming/41. The Rule System/41. The Rule System.md>), so there is no need to cover it here. We will only point out that both the input and the output of the rewriter are query trees, that is, there is no change in the representation or level of semantic detail in the trees. Rewriting can be thought of as a form of macro expansion.


  
