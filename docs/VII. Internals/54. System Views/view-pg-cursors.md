---
title: 54.6. `pg_cursors`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The `pg_cursors` view lists the cursors that are currently available. Cursors can be defined in several ways:

  * via the [`DECLARE`](</VI. Reference/I. SQL Commands/sql-declare.md>) statement in SQL

  * via the Bind message in the frontend/backend protocol, as described in [Section 55.2.3](protocol-flow.html#PROTOCOL-FLOW-EXT-QUERY "55.2.3. Extended Query")

  * via the Server Programming Interface (SPI), as described in [Section 47.1](</V. Server Programming/47. Server Programming Interface/47.1. Interface Functions/47.1. Interface Functions.md>)




The `pg_cursors` view displays cursors created by any of these means. Cursors only exist for the duration of the transaction that defines them, unless they have been declared `WITH HOLD`. Therefore non-holdable cursors are only present in the view until the end of their creating transaction.

### Note

Cursors are used internally to implement some of the components of PostgreSQL, such as procedural languages. Therefore, the `pg_cursors` view might include cursors that have not been explicitly created by the user.

**Table  54.6. `pg_cursors` Columns**

Column Type Description  
---  
`name` `text` The name of the cursor  
`statement` `text` The verbatim query string submitted to declare this cursor  
`is_holdable` `bool` `true` if the cursor is holdable (that is, it can be accessed after the transaction that declared the cursor has committed); `false` otherwise  
`is_binary` `bool` `true` if the cursor was declared `BINARY`; `false` otherwise  
`is_scrollable` `bool` `true` if the cursor is scrollable (that is, it allows rows to be retrieved in a nonsequential manner); `false` otherwise  
`creation_time` `timestamptz` The time at which the cursor was declared  
  
  


The `pg_cursors` view is read-only.


  
