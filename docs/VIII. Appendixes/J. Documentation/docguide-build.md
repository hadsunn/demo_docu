---
title: J.3. Building the Documentation with Make
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[J.3.1. HTML](</VIII. Appendixes/J. Documentation/docguide-build.md#j31-html>)


[J.3.2. Manpages](</VIII. Appendixes/J. Documentation/docguide-build.md#j32-manpages>)


[J.3.3. PDF](</VIII. Appendixes/J. Documentation/docguide-build.md#j33-pdf>)


[J.3.4. Plain Text Files](</VIII. Appendixes/J. Documentation/docguide-build.md#j34-plain-text-files>)


[J.3.5. Syntax Check](</VIII. Appendixes/J. Documentation/docguide-build.md#j35-syntax-check>)



Once you have everything set up, change to the directory `doc/src/sgml` and run one of the commands described in the following subsections to build the documentation. (Remember to use GNU make.)

### J.3.1. HTML #

To build the HTML version of the documentation:
    
    
    doc/src/sgml$ **make html**
    

This is also the default target. The output appears in the subdirectory `html`.

To produce HTML documentation with the stylesheet used on [postgresql.org](https://www.postgresql.org/docs/current/) instead of the default simple style use:
    
    
    doc/src/sgml$ **make STYLE=website html**
    

If the `STYLE=website` option is used, the generated HTML files include references to stylesheets hosted on [postgresql.org](https://www.postgresql.org/docs/current/) and require network access to view.

### J.3.2. Manpages #

We use the DocBook XSL stylesheets to convert DocBook `refentry` pages to *roff output suitable for man pages. To create the man pages, use the command:
    
    
    doc/src/sgml$ **make man**
    

### J.3.3. PDF #

To produce a PDF rendition of the documentation using FOP, you can use one of the following commands, depending on the preferred paper format:

  * For A4 format:
        
        doc/src/sgml$ **make postgres-A4.pdf**
        

  * For U.S. letter format:
        
        doc/src/sgml$ **make postgres-US.pdf**
        




Because the PostgreSQL documentation is fairly big, FOP will require a significant amount of memory. Because of that, on some systems, the build will fail with a memory-related error message. This can usually be fixed by configuring Java heap settings in the configuration file `~/.foprc`, for example:
    
    
    # FOP binary distribution
    FOP_OPTS='-Xmx1500m'
    # Debian
    JAVA_ARGS='-Xmx1500m'
    # Red Hat
    ADDITIONAL_FLAGS='-Xmx1500m'
    

There is a minimum amount of memory that is required, and to some extent more memory appears to make things a bit faster. On systems with very little memory (less than 1 GB), the build will either be very slow due to swapping or will not work at all.

In its default configuration FOP will emit an `INFO` message for each page. The log level can be changed via `~/.foprc`:
    
    
    LOGCHOICE=-Dorg.apache.commons.logging.Log=​org.apache.commons.logging.impl.SimpleLog
    LOGLEVEL=-Dorg.apache.commons.logging.simplelog.defaultlog=WARN
    

Other XSL-FO processors can also be used manually, but the automated build process only supports FOP.

### J.3.4. Plain Text Files #

The installation instructions are also distributed as plain text, in case they are needed in a situation where better reading tools are not available. The `INSTALL` file corresponds to [Chapter 17](</III. Server Administration/17. Installation from Source Code/17. Installation from Source Code.md>), with some minor changes to account for the different context. To recreate the file, change to the directory `doc/src/sgml` and enter **`make INSTALL`**. Building text output requires Pandoc version 1.13 or newer as an additional build tool.

In the past, the release notes and regression testing instructions were also distributed as plain text, but this practice has been discontinued.

### J.3.5. Syntax Check #

Building the documentation can take very long. But there is a method to just check the correct syntax of the documentation files, which only takes a few seconds:
    
    
    doc/src/sgml$ **make check**
    


  
