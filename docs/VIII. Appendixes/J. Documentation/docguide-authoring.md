---
title: J.5. Documentation Authoring
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[J.5.1. Emacs](</VIII. Appendixes/J. Documentation/docguide-authoring.md#j51-emacs>)



The documentation sources are most conveniently modified with an editor that has a mode for editing XML, and even more so if it has some awareness of XML schema languages so that it can know about DocBook syntax specifically.

Note that for historical reasons the documentation source files are named with an extension `.sgml` even though they are now XML files. So you might need to adjust your editor configuration to set the correct mode.

### J.5.1. Emacs #

nXML Mode, which ships with Emacs, is the most common mode for editing XML documents with Emacs. It will allow you to use Emacs to insert tags and check markup consistency, and it supports DocBook out of the box. Check the [nXML manual](https://www.gnu.org/software/emacs/manual/html_mono/nxml-mode.html) for detailed documentation.

`src/tools/editors/emacs.samples` contains recommended settings for this mode.


  
