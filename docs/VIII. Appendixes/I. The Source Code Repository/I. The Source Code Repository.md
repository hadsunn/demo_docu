---
title: Appendix I. The Source Code Repository
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


**Table of Contents**

[I.1. Getting the Source via Git](</VIII. Appendixes/I. The Source Code Repository/git.md>)

The PostgreSQL source code is stored and managed using the Git version control system. A public mirror of the master repository is available; it is updated within a minute of any change to the master repository.

Our wiki, <https://wiki.postgresql.org/wiki/Working_with_Git>, has some discussion on working with Git.

Note that building PostgreSQL from the source repository requires reasonably up-to-date versions of bison, flex, and Perl. These tools are not needed to build from a distribution tarball, because the files generated with these tools are included in the tarball. Other tool requirements are the same as shown in [Section 17.1](</III. Server Administration/17. Installation from Source Code/install-requirements.md>).


  
