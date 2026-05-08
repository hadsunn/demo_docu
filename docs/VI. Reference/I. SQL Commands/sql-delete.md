---
title: DELETE
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    [ WITH [ RECURSIVE ] _with_query_ [, ...] ]
    DELETE FROM [ ONLY ] _table_name_ [ * ] [ [ AS ] _alias_ ]
        [ USING _from_item_ [, ...] ]
        [ WHERE _condition_ | WHERE CURRENT OF _cursor_name_ ]
        [ RETURNING { * | _output_expression_ [ [ AS ] _output_name_ ] } [, ...] ]
    

## Description

`DELETE` deletes rows that satisfy the `WHERE` clause from the specified table. If the `WHERE` clause is absent, the effect is to delete all rows in the table. The result is a valid, but empty table.

### Tip

[`TRUNCATE`](</VI. Reference/I. SQL Commands/sql-truncate.md>) provides a faster mechanism to remove all rows from a table.

There are two ways to delete rows in a table using information contained in other tables in the database: using sub-selects, or specifying additional tables in the `USING` clause. Which technique is more appropriate depends on the specific circumstances.

The optional `RETURNING` clause causes `DELETE` to compute and return value(s) based on each row actually deleted. Any expression using the table's columns, and/or columns of other tables mentioned in `USING`, can be computed. The syntax of the `RETURNING` list is identical to that of the output list of `SELECT`.

You must have the `DELETE` privilege on the table to delete from it, as well as the `SELECT` privilege for any table in the `USING` clause or whose values are read in the _`condition`_.

## Parameters

_`with_query`_
    

The `WITH` clause allows you to specify one or more subqueries that can be referenced by name in the `DELETE` query. See [Section 7.8](</II. The SQL Language/7. Queries/queries-with.md>) for details.

_`table_name`_
    

The name (optionally schema-qualified) of the table to delete rows from. If `ONLY` is specified before the table name, matching rows are deleted from the named table only. If `ONLY` is not specified, matching rows are also deleted from any tables inheriting from the named table. Optionally, `*` can be specified after the table name to explicitly indicate that descendant tables are included.

_`alias`_
    

A substitute name for the target table. When an alias is provided, it completely hides the actual name of the table. For example, given `DELETE FROM foo AS f`, the remainder of the `DELETE` statement must refer to this table as `f` not `foo`.

_`from_item`_
    

A table expression allowing columns from other tables to appear in the `WHERE` condition. This uses the same syntax as the [`FROM`](sql-select.html#SQL-FROM "FROM Clause") clause of a `SELECT` statement; for example, an alias for the table name can be specified. Do not repeat the target table as a _`from_item`_ unless you wish to set up a self-join (in which case it must appear with an alias in the _`from_item`_).

_`condition`_
    

An expression that returns a value of type `boolean`. Only rows for which this expression returns `true` will be deleted.

_`cursor_name`_
    

The name of the cursor to use in a `WHERE CURRENT OF` condition. The row to be deleted is the one most recently fetched from this cursor. The cursor must be a non-grouping query on the `DELETE`'s target table. Note that `WHERE CURRENT OF` cannot be specified together with a Boolean condition. See [DECLARE](</VI. Reference/I. SQL Commands/sql-declare.md>) for more information about using cursors with `WHERE CURRENT OF`.

_`output_expression`_
    

An expression to be computed and returned by the `DELETE` command after each row is deleted. The expression can use any column names of the table named by _`table_name`_ or table(s) listed in `USING`. Write `*` to return all columns.

_`output_name`_
    

A name to use for a returned column.

## Outputs

On successful completion, a `DELETE` command returns a command tag of the form
    
    
    DELETE _count_
    

The _`count`_ is the number of rows deleted. Note that the number may be less than the number of rows that matched the _`condition`_ when deletes were suppressed by a `BEFORE DELETE` trigger. If _`count`_ is 0, no rows were deleted by the query (this is not considered an error).

If the `DELETE` command contains a `RETURNING` clause, the result will be similar to that of a `SELECT` statement containing the columns and values defined in the `RETURNING` list, computed over the row(s) deleted by the command.

## Notes

PostgreSQL lets you reference columns of other tables in the `WHERE` condition by specifying the other tables in the `USING` clause. For example, to delete all films produced by a given producer, one can do:
    
    
    DELETE FROM films USING producers
      WHERE producer_id = producers.id AND producers.name = 'foo';
    

What is essentially happening here is a join between `films` and `producers`, with all successfully joined `films` rows being marked for deletion. This syntax is not standard. A more standard way to do it is:
    
    
    DELETE FROM films
      WHERE producer_id IN (SELECT id FROM producers WHERE name = 'foo');
    

In some cases the join style is easier to write or faster to execute than the sub-select style.

## Examples

Delete all films but musicals:
    
    
    DELETE FROM films WHERE kind <> 'Musical';
    

Clear the table `films`:
    
    
    DELETE FROM films;
    

Delete completed tasks, returning full details of the deleted rows:
    
    
    DELETE FROM tasks WHERE status = 'DONE' RETURNING *;
    

Delete the row of `tasks` on which the cursor `c_tasks` is currently positioned:
    
    
    DELETE FROM tasks WHERE CURRENT OF c_tasks;
    

## Compatibility

This command conforms to the SQL standard, except that the `USING` and `RETURNING` clauses are PostgreSQL extensions, as is the ability to use `WITH` with `DELETE`.

## See Also

[TRUNCATE](</VI. Reference/I. SQL Commands/sql-truncate.md>)


  
