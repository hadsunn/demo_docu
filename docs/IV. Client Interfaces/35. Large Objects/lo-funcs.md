---
title: 35.4. Server-Side Functions
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Server-side functions tailored for manipulating large objects from SQL are listed in [Table 35.1](lo-funcs.html#LO-FUNCS-TABLE "Table 35.1. SQL-Oriented Large Object Functions").

**Table  35.1. SQL-Oriented Large Object Functions**

Function Description Example(s)  
---  
`lo_from_bytea` ( _`loid`_ `oid`, _`data`_ `bytea` ) → `oid` Creates a large object and stores _`data`_ in it. If _`loid`_ is zero then the system will choose a free OID, otherwise that OID is used (with an error if some large object already has that OID). On success, the large object's OID is returned. `lo_from_bytea(0, '\xffffff00')` → `24528`  
`lo_put` ( _`loid`_ `oid`, _`offset`_ `bigint`, _`data`_ `bytea` ) → `void` Writes _`data`_ starting at the given offset within the large object; the large object is enlarged if necessary. `lo_put(24528, 1, '\xaa')` →  
`lo_get` ( _`loid`_ `oid` [, _`offset`_ `bigint`, _`length`_ `integer` ] ) → `bytea` Extracts the large object's contents, or a substring thereof. `lo_get(24528, 0, 3)` → `\xffaaff`  
  
  


There are additional server-side functions corresponding to each of the client-side functions described earlier; indeed, for the most part the client-side functions are simply interfaces to the equivalent server-side functions. The ones just as convenient to call via SQL commands are `lo_creat`, `lo_create`, `lo_unlink`, `lo_import`, and `lo_export`. Here are examples of their use:
    
    
    CREATE TABLE image (
        name            text,
        raster          oid
    );
    
    SELECT lo_creat(-1);       -- returns OID of new, empty large object
    
    SELECT lo_create(43213);   -- attempts to create large object with OID 43213
    
    SELECT lo_unlink(173454);  -- deletes large object with OID 173454
    
    INSERT INTO image (name, raster)
        VALUES ('beautiful image', lo_import('/etc/motd'));
    
    INSERT INTO image (name, raster)  -- same as above, but specify OID to use
        VALUES ('beautiful image', lo_import('/etc/motd', 68583));
    
    SELECT lo_export(image.raster, '/tmp/motd') FROM image
        WHERE name = 'beautiful image';
    

The server-side `lo_import` and `lo_export` functions behave considerably differently from their client-side analogs. These two functions read and write files in the server's file system, using the permissions of the database's owning user. Therefore, by default their use is restricted to superusers. In contrast, the client-side import and export functions read and write files in the client's file system, using the permissions of the client program. The client-side functions do not require any database privileges, except the privilege to read or write the large object in question.

### Caution

It is possible to [GRANT](</VI. Reference/I. SQL Commands/sql-grant.md>) use of the server-side `lo_import` and `lo_export` functions to non-superusers, but careful consideration of the security implications is required. A malicious user of such privileges could easily parlay them into becoming superuser (for example by rewriting server configuration files), or could attack the rest of the server's file system without bothering to obtain database superuser privileges as such. _Access to roles having such privilege must therefore be guarded just as carefully as access to superuser roles._ Nonetheless, if use of server-side `lo_import` or `lo_export` is needed for some routine task, it's safer to use a role with such privileges than one with full superuser privileges, as that helps to reduce the risk of damage from accidental errors.

The functionality of `lo_read` and `lo_write` is also available via server-side calls, but the names of the server-side functions differ from the client side interfaces in that they do not contain underscores. You must call these functions as `loread` and `lowrite`.


  
