---
title: 33.5. Test Coverage Examination
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[33.5.1. Coverage with Autoconf and Make](</III. Server Administration/33. Regression Tests/regress-coverage.md#3351-coverage-with-autoconf-and-make>)


[33.5.2. Coverage with Meson](</III. Server Administration/33. Regression Tests/regress-coverage.md#3352-coverage-with-meson>)



The PostgreSQL source code can be compiled with coverage testing instrumentation, so that it becomes possible to examine which parts of the code are covered by the regression tests or any other test suite that is run with the code. This is currently supported when compiling with GCC, and it requires the `gcov` and `lcov` packages.

### 33.5.1. Coverage with Autoconf and Make #

A typical workflow looks like this:
    
    
    ./configure --enable-coverage ... OTHER OPTIONS ...
    make
    make check # or other test suite
    make coverage-html
    

Then point your HTML browser to `coverage/index.html`.

If you don't have `lcov` or prefer text output over an HTML report, you can run
    
    
    make coverage
    

instead of `make coverage-html`, which will produce `.gcov` output files for each source file relevant to the test. (`make coverage` and `make coverage-html` will overwrite each other's files, so mixing them might be confusing.)

You can run several different tests before making the coverage report; the execution counts will accumulate. If you want to reset the execution counts between test runs, run:
    
    
    make coverage-clean
    

You can run the `make coverage-html` or `make coverage` command in a subdirectory if you want a coverage report for only a portion of the code tree.

Use `make distclean` to clean up when done.

### 33.5.2. Coverage with Meson #

A typical workflow looks like this:
    
    
    meson setup -Db_coverage=true ... OTHER OPTIONS ... builddir/
    meson compile -C builddir/
    meson test -C builddir/
    cd builddir/
    ninja coverage-html
    

Then point your HTML browser to `./meson-logs/coveragereport/index.html`.

You can run several different tests before making the coverage report; the execution counts will accumulate.


  
