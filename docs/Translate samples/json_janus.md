::::::::: container-fluid
:::::: {.row .justify-content-md-center}
::::: col

:::: {#pgNavbar .collapse .navbar-collapse}
- [Home](/ "Home")
- [About](/about/ "About")
- [Download](/download/ "Download")
- [Documentation](/docs/ "Documentation")
- [Community](/community/ "Community")
- [Developers](/developer/ "Developers")
- [Support](/support/ "Support")
- [Donate](/about/donate/ "Donate")
- [Your account](/account/ "Your account")

::: input-group
:::
::::
:::::
::::::

:::: {.row .justify-content-center .pg-shout-box}
::: {.col .text-white .text-center}
:::
::::
:::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: {.container-fluid .margin}
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: row
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: {#pgContentWrap .col-11}
::::::::::::::: row
:::::::::::: {.col-md-6 .mb-2}
::::: row
:::: col
<div>


</div>
::::
:::::

:::: row
::: col
Supported Versions: [Current](</docs/current/datatype-json>)
:::
::::

:::: row
::: col
Development Versions: [18](</docs/18/datatype-json>){rel="nofollow"}
:::
::::

:::: row
::: col-12
Unsupported versions: [12](</docs/12/datatype-json>){rel="nofollow"}
:::
::::
::::::::::::

:::: {.col-md-6 .col-lg-5 .offset-lg-1}
::: input-group
:::
::::
:::::::::::::::

:::::::::::::::::::::::::::::::::::::::::::::::::: {#docContent}
::: navheader
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 8.14. JSON Types                                                                                                                                                                                                                                                         |
+:===========================================================+:===========================================================+:=====================:+==================================================================:+===================================================:+
| [Prev](</II. The SQL Language/8. Data Types/datatype-xml.md>){accesskey="n"} |
+------------------------------------------------------------+------------------------------------------------------------+-----------------------+-------------------------------------------------------------------+----------------------------------------------------+

------------------------------------------------------------------------
:::

::::::::::::::::::::::::::::::::::::::::::::::: {#DATATYPE-JSON .sect1}
::::: titlepage
<div>

<div>

## 8.14. JSON Types [\#](#DATATYPE-JSON){.id_link} {#json-types .title style="clear: both"}

</div>

</div>
:::::

::: toc
[[8.14.1. JSON Input and Output Syntax](datatype-json.html#JSON-KEYS-ELEMENTS)]{.sect2}

[[8.14.2. Designing JSON Documents](datatype-json.html#JSON-DOC-DESIGN)]{.sect2}

[[8.14.3. `jsonb`{.type} Containment and Existence](datatype-json.html#JSON-CONTAINMENT)]{.sect2}

[[8.14.4. `jsonb`{.type} Indexing](datatype-json.html#JSON-INDEXING)]{.sect2}

[[8.14.5. `jsonb`{.type} Subscripting](datatype-json.html#JSONB-SUBSCRIPTING)]{.sect2}

[[8.14.6. Transforms](datatype-json.html#DATATYPE-JSON-TRANSFORMS)]{.sect2}

[[8.14.7. jsonpath Type](datatype-json.html#DATATYPE-JSONPATH)]{.sect2}
:::

[]{#id-1.5.7.22.2 .indexterm}[]{#id-1.5.7.22.3 .indexterm}

Типы данных JSON предназначены для хранения данных в формате JSON (JavaScript Object Notation), как указано в документе [RFC 7159](<https://datatracker.ietf.org/doc/html/rfc7159){.ulink>){.xref}.

[PostgreSQL]{.productname} поддерживает два типа для хранения данных JSON: `json`{.type} и `jsonb`{.type}. Для реализации эффективных механизмов запроса к этим типам данных в [PostgreSQL]{.productname} также предусмотрен тип `jsonpath`{.type}, описанный в [разделе 8.14.7](datatype-json.html#DATATYPE-JSONPATH "8.14.7. jsonpath Type"){.xref}.

Типы данных `json`{.type} и `jsonb`{.type} принимают в качестве ввода [*почти*]{.emphasis} одинаковые наборы значений. Основное различие между ними — в эффективности обработки. Тип данных `json`{.type} сохраняет точную копию подаваемого на ввод текста, что требует повторного синтаксического анализа при каждой обработке. В отличие от него, `jsonb`{.type} хранит данные в декомпозированном двоичном формате, который слегка замедляет ввод из-за необходимости преобразования, но значительно ускоряет обработку, так как повторный разбор не требуется. Тип `jsonb`{.type} также поддерживает индексирование, что может быть значительным преимуществом.

Поскольку тип `json`{.type} хранит точную копию подаваемого на ввод текста, он сохраняет не несущие смысла пробелы между токенами, а также порядок ключей в объектах JSON. Помимо этого, если объект JSON внутри значения содержит один и тот же ключ несколько раз, все пары «ключ-значение» сохраняются. (Функции обработки принимают в качестве рабочего последнее значение.) Тип `jsonb`{.type}, напротив, не сохраняет пробелы, порядок ключей объектов и дублирующиеся ключи. Если во входных данных указаны дублирующиеся ключи, сохраняется только последнее из значений.

Как правило, для большинства приложений рекомендуется хранить данные JSON в виде `jsonb`{.type}, за исключением особых случаев, например если предполагается традиционный порядок ключей объектов.

В документе RFC 7159 указано, что строки JSON должны использовать кодировку UTF-8. Это означает, что типы JSON могут строго соответствовать спецификации JSON только в случае, если в базе данных используется кодировка UTF-8. Использовать напрямую символы, непредставимые в кодировке базы данных, будет невозможно. С другой стороны, символы, которые можно представить в кодировке базы, но не в кодировке UTF-8, будут разрешены.

RFC 7159 разрешает строкам JSON содержать экранированные последовательности Юникода в форме `\u`{.literal}*`XXXX`*. Если функция принимает на вход тип `json`{.type}, экранированные последовательности Юникода будут разрешены вне зависимости от кодировки базы данных и будет проверяться только корректность их синтаксиса (наличие четырех шестнадцатеричных цифр после `\u`{.literal}). Однако к функции, принимающей на вход `jsonb`{.type}, требования более строгие: использование экранированных последовательностей Юникода с символами, непредставимыми в кодировке базы данных, будет запрещено. Тип `jsonb`{.type} также не допускает `\u0000`{.literal} (поскольку это не может быть представлено в типе [PostgreSQL]{.productname} `text`{.type}), и он требует корректного использования суррогатных пар Юникода для назначения символов, не входящих в Основную многоязычную плоскость. Допустимые экранированные последовательности Юникода преобразуются для хранения в эквивалентный единичный символ. Это касается и суррогатных пар.

::: note
### Note {#note .title}

Many of the JSON processing functions described in [Section 9.16](</II. The SQL Language/9. Functions and Operators/functions-json.md>){.xref} will convert Unicode escapes to regular characters, and will therefore throw the same types of errors just described even if their input is of type `json`{.type} not `jsonb`{.type}. The fact that the `json`{.type} input function does not make these checks may be considered a historical artifact, although it does allow for simple storage (without processing) of JSON Unicode escapes in a database encoding that does not support the represented characters.
:::

When converting textual JSON input into `jsonb`{.type}, the primitive types described by RFC 7159 are effectively mapped onto native [PostgreSQL]{.productname} types, as shown in [Table 8.23](datatype-json.html#JSON-TYPE-MAPPING-TABLE "Table 8.23. JSON Primitive Types and Corresponding PostgreSQL Types"){.xref}. Therefore, there are some minor additional constraints on what constitutes valid `jsonb`{.type} data that do not apply to the `json`{.type} type, nor to JSON in the abstract, corresponding to limits on what can be represented by the underlying data type. Notably, `jsonb`{.type} will reject numbers that are outside the range of the [PostgreSQL]{.productname} `numeric`{.type} data type, while `json`{.type} will not. Such implementation-defined restrictions are permitted by RFC 7159. However, in practice such problems are far more likely to occur in other implementations, as it is common to represent JSON\'s `number`{.type} primitive type as IEEE 754 double precision floating point (which RFC 7159 explicitly anticipates and allows for). When using JSON as an interchange format with such systems, the danger of losing numeric precision compared to data originally stored by [PostgreSQL]{.productname} should be considered.

Conversely, as noted in the table there are some minor restrictions on the input format of JSON primitive types that do not apply to the corresponding [PostgreSQL]{.productname} types.

:::: {#JSON-TYPE-MAPPING-TABLE .table}
**Table 8.23. JSON Primitive Types and Corresponding [PostgreSQL]{.productname} Types**

::: table-contents
  JSON primitive type   [PostgreSQL]{.productname} type   Notes
  --------------------- --------------------------------- -------------------------------------------------------------------------------------------------------------------------
  `string`{.type}       `text`{.type}                     `\u0000`{.literal} is disallowed, as are Unicode escapes representing characters not available in the database encoding
  `number`{.type}       `numeric`{.type}                  `NaN`{.literal} and `infinity`{.literal} values are disallowed
  `boolean`{.type}      `boolean`{.type}                  Only lowercase `true`{.literal} and `false`{.literal} spellings are accepted
  `null`{.type}         (none)                            SQL `NULL`{.literal} is a different concept
:::
::::

\

:::::: {#JSON-KEYS-ELEMENTS .sect2}
::::: titlepage
<div>

<div>

### 8.14.1. JSON Input and Output Syntax [\#](#JSON-KEYS-ELEMENTS){.id_link} {#json-input-and-output-syntax .title}

</div>

</div>
:::::

The input/output syntax for the JSON data types is as specified in RFC 7159.

The following are all valid `json`{.type} (or `jsonb`{.type}) expressions:

``` programlisting
-- Simple scalar/primitive value
-- Primitive values can be numbers, quoted strings, true, false, or null
SELECT '5'::json;

-- Array of zero or more elements (elements need not be of same type)
SELECT '[1, 2, "foo", null]'::json;

-- Object containing pairs of keys and values
-- Note that object keys must always be quoted strings
SELECT '{"bar": "baz", "balance": 7.77, "active": false}'::json;

-- Arrays and objects can be nested arbitrarily
SELECT '{"foo": [true, "bar"], "tags": {"a": 1, "b": null}}'::json;
```

As previously stated, when a JSON value is input and then printed without any additional processing, `json`{.type} outputs the same text that was input, while `jsonb`{.type} does not preserve semantically-insignificant details such as whitespace. For example, note the differences here:

``` programlisting
SELECT '{"bar": "baz", "balance": 7.77, "active":false}'::json;
                      json
-------------------------------------------------
 {"bar": "baz", "balance": 7.77, "active":false}
(1 row)

SELECT '{"bar": "baz", "balance": 7.77, "active":false}'::jsonb;
                      jsonb
--------------------------------------------------
 {"bar": "baz", "active": false, "balance": 7.77}
(1 row)
```

One semantically-insignificant detail worth noting is that in `jsonb`{.type}, numbers will be printed according to the behavior of the underlying `numeric`{.type} type. In practice this means that numbers entered with `E`{.literal} notation will be printed without it, for example:

``` programlisting
SELECT '{"reading": 1.230e-5}'::json, '{"reading": 1.230e-5}'::jsonb;
         json          |          jsonb
-----------------------+-------------------------
 {"reading": 1.230e-5} | {"reading": 0.00001230}
(1 row)
```

However, `jsonb`{.type} will preserve trailing fractional zeroes, as seen in this example, even though those are semantically insignificant for purposes such as equality checks.

For the list of built-in functions and operators available for constructing and processing JSON values, see [Section 9.16](</II. The SQL Language/9. Functions and Operators/functions-json.md>){.xref}.
::::::

:::::: {#JSON-DOC-DESIGN .sect2}
::::: titlepage
<div>

<div>

### 8.14.2. Designing JSON Documents [\#](#JSON-DOC-DESIGN){.id_link} {#designing-json-documents .title}

</div>

</div>
:::::

Representing data as JSON can be considerably more flexible than the traditional relational data model, which is compelling in environments where requirements are fluid. It is quite possible for both approaches to co-exist and complement each other within the same application. However, even for applications where maximal flexibility is desired, it is still recommended that JSON documents have a somewhat fixed structure. The structure is typically unenforced (though enforcing some business rules declaratively is possible), but having a predictable structure makes it easier to write queries that usefully summarize a set of ["[documents]{.quote}"]{.quote} (datums) in a table.

JSON data is subject to the same concurrency-control considerations as any other data type when stored in a table. Although storing large documents is practicable, keep in mind that any update acquires a row-level lock on the whole row. Consider limiting JSON documents to a manageable size in order to decrease lock contention among updating transactions. Ideally, JSON documents should each represent an atomic datum that business rules dictate cannot reasonably be further subdivided into smaller datums that could be modified independently.
::::::

::::::: {#JSON-CONTAINMENT .sect2}
::::: titlepage
<div>

<div>

### 8.14.3. `jsonb`{.type} Containment and Existence [\#](#JSON-CONTAINMENT){.id_link} {#jsonb-containment-and-existence .title}

</div>

</div>
:::::

[]{#id-1.5.7.22.17.2 .indexterm}[]{#id-1.5.7.22.17.3 .indexterm}

Testing *containment* is an important capability of `jsonb`{.type}. There is no parallel set of facilities for the `json`{.type} type. Containment tests whether one `jsonb`{.type} document has contained within it another one. These examples return true except as noted:

``` programlisting
-- Simple scalar/primitive values contain only the identical value:
SELECT '"foo"'::jsonb @> '"foo"'::jsonb;

-- The array on the right side is contained within the one on the left:
SELECT '[1, 2, 3]'::jsonb @> '[1, 3]'::jsonb;

-- Order of array elements is not significant, so this is also true:
SELECT '[1, 2, 3]'::jsonb @> '[3, 1]'::jsonb;

-- Duplicate array elements don't matter either:
SELECT '[1, 2, 3]'::jsonb @> '[1, 2, 2]'::jsonb;

-- The object with a single pair on the right side is contained
-- within the object on the left side:
SELECT '{"product": "PostgreSQL", "version": 9.4, "jsonb": true}'::jsonb @> '{"version": 9.4}'::jsonb;

-- The array on the right side is not considered contained within the
-- array on the left, even though a similar array is nested within it:
SELECT '[1, 2, [1, 3]]'::jsonb @> '[1, 3]'::jsonb;  -- yields false

-- But with a layer of nesting, it is contained:
SELECT '[1, 2, [1, 3]]'::jsonb @> '[[1, 3]]'::jsonb;

-- Similarly, containment is not reported here:
SELECT '{"foo": {"bar": "baz"}}'::jsonb @> '{"bar": "baz"}'::jsonb;  -- yields false

-- A top-level key and an empty object is contained:
SELECT '{"foo": {"bar": "baz"}}'::jsonb @> '{"foo": {}}'::jsonb;
```

The general principle is that the contained object must match the containing object as to structure and data contents, possibly after discarding some non-matching array elements or object key/value pairs from the containing object. But remember that the order of array elements is not significant when doing a containment match, and duplicate array elements are effectively considered only once.

As a special exception to the general principle that the structures must match, an array may contain a primitive value:

``` programlisting
-- This array contains the primitive string value:
SELECT '["foo", "bar"]'::jsonb @> '"bar"'::jsonb;

-- This exception is not reciprocal -- non-containment is reported here:
SELECT '"bar"'::jsonb @> '["bar"]'::jsonb;  -- yields false
```

`jsonb`{.type} also has an *existence* operator, which is a variation on the theme of containment: it tests whether a string (given as a `text`{.type} value) appears as an object key or array element at the top level of the `jsonb`{.type} value. These examples return true except as noted:

``` programlisting
-- String exists as array element:
SELECT '["foo", "bar", "baz"]'::jsonb ? 'bar';

-- String exists as object key:
SELECT '{"foo": "bar"}'::jsonb ? 'foo';

-- Object values are not considered:
SELECT '{"foo": "bar"}'::jsonb ? 'bar';  -- yields false

-- As with containment, existence must match at the top level:
SELECT '{"foo": {"bar": "baz"}}'::jsonb ? 'bar'; -- yields false

-- A string is considered to exist if it matches a primitive JSON string:
SELECT '"foo"'::jsonb ? 'foo';
```

JSON objects are better suited than arrays for testing containment or existence when there are many keys or elements involved, because unlike arrays they are internally optimized for searching, and do not need to be searched linearly.

::: tip
### Tip {#tip .title}

Because JSON containment is nested, an appropriate query can skip explicit selection of sub-objects. As an example, suppose that we have a `doc`{.structfield} column containing objects at the top level, with most objects containing `tags`{.literal} fields that contain arrays of sub-objects. This query finds entries in which sub-objects containing both `"term":"paris"`{.literal} and `"term":"food"`{.literal} appear, while ignoring any such keys outside the `tags`{.literal} array:

``` programlisting
SELECT doc->'site_name' FROM websites
  WHERE doc @> '{"tags":[{"term":"paris"}, {"term":"food"}]}';
```

One could accomplish the same thing with, say,

``` programlisting
SELECT doc->'site_name' FROM websites
  WHERE doc->'tags' @> '[{"term":"paris"}, {"term":"food"}]';
```

but that approach is less flexible, and often less efficient as well.

On the other hand, the JSON existence operator is not nested: it will only look for the specified key or array element at top level of the JSON value.
:::

The various containment and existence operators, along with all other JSON operators and functions are documented in [Section 9.16](</II. The SQL Language/9. Functions and Operators/functions-json.md>){.xref}.
:::::::

:::::: {#JSON-INDEXING .sect2}
::::: titlepage
<div>

<div>

### 8.14.4. `jsonb`{.type} Indexing [\#](#JSON-INDEXING){.id_link} {#jsonb-indexing .title}

</div>

</div>
:::::

[]{#id-1.5.7.22.18.2 .indexterm}

GIN indexes can be used to efficiently search for keys or key/value pairs occurring within a large number of `jsonb`{.type} documents (datums). Two GIN ["[operator classes]{.quote}"]{.quote} are provided, offering different performance and flexibility trade-offs.

The default GIN operator class for `jsonb`{.type} supports queries with the key-exists operators `?`{.literal}, `?|`{.literal} and `?&`{.literal}, the containment operator `@>`{.literal}, and the `jsonpath`{.type} match operators `@?`{.literal} and `@@`{.literal}. (For details of the semantics that these operators implement, see [Table 9.46](functions-json.html#FUNCTIONS-JSONB-OP-TABLE "Table 9.46. Additional jsonb Operators"){.xref}.) An example of creating an index with this operator class is:

``` programlisting
CREATE INDEX idxgin ON api USING GIN (jdoc);
```

The non-default GIN operator class `jsonb_path_ops`{.literal} does not support the key-exists operators, but it does support `@>`{.literal}, `@?`{.literal} and `@@`{.literal}. An example of creating an index with this operator class is:

``` programlisting
CREATE INDEX idxginp ON api USING GIN (jdoc jsonb_path_ops);
```

Consider the example of a table that stores JSON documents retrieved from a third-party web service, with a documented schema definition. A typical document is:

``` programlisting
{
    "guid": "9c36adc1-7fb5-4d5b-83b4-90356a46061a",
    "name": "Angela Barton",
    "is_active": true,
    "company": "Magnafone",
    "address": "178 Howard Place, Gulf, Washington, 702",
    "registered": "2009-11-07T08:53:22 +08:00",
    "latitude": 19.793713,
    "longitude": 86.513373,
    "tags": [
        "enim",
        "aliquip",
        "qui"
    ]
}
```

We store these documents in a table named `api`{.structname}, in a `jsonb`{.type} column named `jdoc`{.structfield}. If a GIN index is created on this column, queries like the following can make use of the index:

``` programlisting
-- Find documents in which the key "company" has value "Magnafone"
SELECT jdoc->'guid', jdoc->'name' FROM api WHERE jdoc @> '{"company": "Magnafone"}';
```

However, the index could not be used for queries like the following, because though the operator `?`{.literal} is indexable, it is not applied directly to the indexed column `jdoc`{.structfield}:

``` programlisting
-- Find documents in which the key "tags" contains key or array element "qui"
SELECT jdoc->'guid', jdoc->'name' FROM api WHERE jdoc -> 'tags' ? 'qui';
```

Still, with appropriate use of expression indexes, the above query can use an index. If querying for particular items within the `"tags"`{.literal} key is common, defining an index like this may be worthwhile:

``` programlisting
CREATE INDEX idxgintags ON api USING GIN ((jdoc -> 'tags'));
```

Now, the `WHERE`{.literal} clause `jdoc -> 'tags' ? 'qui'`{.literal} will be recognized as an application of the indexable operator `?`{.literal} to the indexed expression `jdoc -> 'tags'`{.literal}. (More information on expression indexes can be found in [Section 11.7](</II. The SQL Language/11. Indexes/indexes-expressional.md>){.xref}.)

Another approach to querying is to exploit containment, for example:

``` programlisting
-- Find documents in which the key "tags" contains array element "qui"
SELECT jdoc->'guid', jdoc->'name' FROM api WHERE jdoc @> '{"tags": ["qui"]}';
```

A simple GIN index on the `jdoc`{.structfield} column can support this query. But note that such an index will store copies of every key and value in the `jdoc`{.structfield} column, whereas the expression index of the previous example stores only data found under the `tags`{.literal} key. While the simple-index approach is far more flexible (since it supports queries about any key), targeted expression indexes are likely to be smaller and faster to search than a simple index.

GIN indexes also support the `@?`{.literal} and `@@`{.literal} operators, which perform `jsonpath`{.type} matching. Examples are

``` programlisting
SELECT jdoc->'guid', jdoc->'name' FROM api WHERE jdoc @? '$.tags[*] ? (@ == "qui")';
```

``` programlisting
SELECT jdoc->'guid', jdoc->'name' FROM api WHERE jdoc @@ '$.tags[*] == "qui"';
```

For these operators, a GIN index extracts clauses of the form *`accessors_chain`*` = `{.literal}*`constant`* out of the `jsonpath`{.type} pattern, and does the index search based on the keys and values mentioned in these clauses. The accessors chain may include `.`{.literal}*`key`*, `[*]`{.literal}, and `[`{.literal}*`index`*`]`{.literal} accessors. The `jsonb_ops`{.literal} operator class also supports `.*`{.literal} and `.**`{.literal} accessors, but the `jsonb_path_ops`{.literal} operator class does not.

Although the `jsonb_path_ops`{.literal} operator class supports only queries with the `@>`{.literal}, `@?`{.literal} and `@@`{.literal} operators, it has notable performance advantages over the default operator class `jsonb_ops`{.literal}. A `jsonb_path_ops`{.literal} index is usually much smaller than a `jsonb_ops`{.literal} index over the same data, and the specificity of searches is better, particularly when queries contain keys that appear frequently in the data. Therefore search operations typically perform better than with the default operator class.

The technical difference between a `jsonb_ops`{.literal} and a `jsonb_path_ops`{.literal} GIN index is that the former creates independent index items for each key and value in the data, while the latter creates index items only for each value in the data. [^\[7\]^](#ftn.id-1.5.7.22.18.9.3){.footnote} Basically, each `jsonb_path_ops`{.literal} index item is a hash of the value and the key(s) leading to it; for example to index `{"foo": {"bar": "baz"}}`{.literal}, a single index item would be created incorporating all three of `foo`{.literal}, `bar`{.literal}, and `baz`{.literal} into the hash value. Thus a containment query looking for this structure would result in an extremely specific index search; but there is no way at all to find out whether `foo`{.literal} appears as a key. On the other hand, a `jsonb_ops`{.literal} index would create three index items representing `foo`{.literal}, `bar`{.literal}, and `baz`{.literal} separately; then to do the containment query, it would look for rows containing all three of these items. While GIN indexes can perform such an AND search fairly efficiently, it will still be less specific and slower than the equivalent `jsonb_path_ops`{.literal} search, especially if there are a very large number of rows containing any single one of the three index items.

A disadvantage of the `jsonb_path_ops`{.literal} approach is that it produces no index entries for JSON structures not containing any values, such as `{"a": {}}`{.literal}. If a search for documents containing such a structure is requested, it will require a full-index scan, which is quite slow. `jsonb_path_ops`{.literal} is therefore ill-suited for applications that often perform such searches.

`jsonb`{.type} also supports `btree`{.literal} and `hash`{.literal} indexes. These are usually useful only if it\'s important to check equality of complete JSON documents. The `btree`{.literal} ordering for `jsonb`{.type} datums is seldom of great interest, but for completeness it is:

``` synopsis
Object > Array > Boolean > Number > String > null

Object with n pairs > object with n - 1 pairs

Array with n elements > array with n - 1 elements
```

with the exception that (for historical reasons) an empty top level array sorts less than *`null`*. Objects with equal numbers of pairs are compared in the order:

``` synopsis
key-1, value-1, key-2 ...
```

Note that object keys are compared in their storage order; in particular, since shorter keys are stored before longer keys, this can lead to results that might be unintuitive, such as:

``` programlisting
{ "aa": 1, "c": 1} > {"b": 1, "d": 1}
```

Similarly, arrays with equal numbers of elements are compared in the order:

``` synopsis
element-1, element-2 ...
```

Primitive JSON values are compared using the same comparison rules as for the underlying [PostgreSQL]{.productname} data type. Strings are compared using the default database collation.
::::::

:::::: {#JSONB-SUBSCRIPTING .sect2}
::::: titlepage
<div>

<div>

### 8.14.5. `jsonb`{.type} Subscripting [\#](#JSONB-SUBSCRIPTING){.id_link} {#jsonb-subscripting .title}

</div>

</div>
:::::

The `jsonb`{.type} data type supports array-style subscripting expressions to extract and modify elements. Nested values can be indicated by chaining subscripting expressions, following the same rules as the `path`{.literal} argument in the `jsonb_set`{.literal} function. If a `jsonb`{.type} value is an array, numeric subscripts start at zero, and negative integers count backwards from the last element of the array. Slice expressions are not supported. The result of a subscripting expression is always of the jsonb data type.

`UPDATE`{.command} statements may use subscripting in the `SET`{.literal} clause to modify `jsonb`{.type} values. Subscript paths must be traversable for all affected values insofar as they exist. For instance, the path `val['a']['b']['c']`{.literal} can be traversed all the way to `c`{.literal} if every `val`{.literal}, `val['a']`{.literal}, and `val['a']['b']`{.literal} is an object. If any `val['a']`{.literal} or `val['a']['b']`{.literal} is not defined, it will be created as an empty object and filled as necessary. However, if any `val`{.literal} itself or one of the intermediary values is defined as a non-object such as a string, number, or `jsonb`{.literal} `null`{.literal}, traversal cannot proceed so an error is raised and the transaction aborted.

An example of subscripting syntax:

``` programlisting

-- Extract object value by key
SELECT ('{"a": 1}'::jsonb)['a'];

-- Extract nested object value by key path
SELECT ('{"a": {"b": {"c": 1}}}'::jsonb)['a']['b']['c'];

-- Extract array element by index
SELECT ('[1, "2", null]'::jsonb)[1];

-- Update object value by key. Note the quotes around '1': the assigned
-- value must be of the jsonb type as well
UPDATE table_name SET jsonb_field['key'] = '1';

-- This will raise an error if any record's jsonb_field['a']['b'] is something
-- other than an object. For example, the value {"a": 1} has a numeric value
-- of the key 'a'.
UPDATE table_name SET jsonb_field['a']['b']['c'] = '1';

-- Filter records using a WHERE clause with subscripting. Since the result of
-- subscripting is jsonb, the value we compare it against must also be jsonb.
-- The double quotes make "value" also a valid jsonb string.
SELECT * FROM table_name WHERE jsonb_field['key'] = '"value"';
```

`jsonb`{.type} assignment via subscripting handles a few edge cases differently from `jsonb_set`{.literal}. When a source `jsonb`{.type} value is `NULL`{.literal}, assignment via subscripting will proceed as if it was an empty JSON value of the type (object or array) implied by the subscript key:

``` programlisting
-- Where jsonb_field was NULL, it is now {"a": 1}
UPDATE table_name SET jsonb_field['a'] = '1';

-- Where jsonb_field was NULL, it is now [1]
UPDATE table_name SET jsonb_field[0] = '1';
```

If an index is specified for an array containing too few elements, `NULL`{.literal} elements will be appended until the index is reachable and the value can be set.

``` programlisting
-- Where jsonb_field was [], it is now [null, null, 2];
-- where jsonb_field was [0], it is now [0, null, 2]
UPDATE table_name SET jsonb_field[2] = '2';
```

A `jsonb`{.type} value will accept assignments to nonexistent subscript paths as long as the last existing element to be traversed is an object or array, as implied by the corresponding subscript (the element indicated by the last subscript in the path is not traversed and may be anything). Nested array and object structures will be created, and in the former case `null`{.literal}-padded, as specified by the subscript path until the assigned value can be placed.

``` programlisting
-- Where jsonb_field was {}, it is now {"a": [{"b": 1}]}
UPDATE table_name SET jsonb_field['a'][0]['b'] = '1';

-- Where jsonb_field was [], it is now [null, {"a": 1}]
UPDATE table_name SET jsonb_field[1]['a'] = '1';
```
::::::

:::::: {#DATATYPE-JSON-TRANSFORMS .sect2}
::::: titlepage
<div>

<div>

### 8.14.6. Transforms [\#](#DATATYPE-JSON-TRANSFORMS){.id_link} {#transforms .title}

</div>

</div>
:::::

Additional extensions are available that implement transforms for the `jsonb`{.type} type for different procedural languages.

The extensions for PL/Perl are called `jsonb_plperl`{.literal} and `jsonb_plperlu`{.literal}. If you use them, `jsonb`{.type} values are mapped to Perl arrays, hashes, and scalars, as appropriate.

The extension for PL/Python is called `jsonb_plpython3u`{.literal}. If you use it, `jsonb`{.type} values are mapped to Python dictionaries, lists, and scalars, as appropriate.

Of these extensions, `jsonb_plperl`{.literal} is considered ["[trusted]{.quote}"]{.quote}, that is, it can be installed by non-superusers who have `CREATE`{.literal} privilege on the current database. The rest require superuser privilege to install.
::::::

:::::::::::: {#DATATYPE-JSONPATH .sect2}
::::: titlepage
<div>

<div>

### 8.14.7. jsonpath Type [\#](#DATATYPE-JSONPATH){.id_link} {#jsonpath-type .title}

</div>

</div>
:::::

[]{#id-1.5.7.22.21.2 .indexterm}

The `jsonpath`{.type} type implements support for the SQL/JSON path language in [PostgreSQL]{.productname} to efficiently query JSON data. It provides a binary representation of the parsed SQL/JSON path expression that specifies the items to be retrieved by the path engine from the JSON data for further processing with the SQL/JSON query functions.

The semantics of SQL/JSON path predicates and operators generally follow SQL. At the same time, to provide a natural way of working with JSON data, SQL/JSON path syntax uses some JavaScript conventions:

::: itemizedlist
- Dot (`.`{.literal}) is used for member access.

- Square brackets (`[]`{.literal}) are used for array access.

- SQL/JSON arrays are 0-relative, unlike regular SQL arrays that start from 1.
:::

Numeric literals in SQL/JSON path expressions follow JavaScript rules, which are different from both SQL and JSON in some minor details. For example, SQL/JSON path allows `.1`{.literal} and `1.`{.literal}, which are invalid in JSON. Non-decimal integer literals and underscore separators are supported, for example, `1_000_000`{.literal}, `0x1EEE_FFFF`{.literal}, `0o273`{.literal}, `0b100101`{.literal}. In SQL/JSON path (and in JavaScript, but not in SQL proper), there must not be an underscore separator directly after the radix prefix.

An SQL/JSON path expression is typically written in an SQL query as an SQL character string literal, so it must be enclosed in single quotes, and any single quotes desired within the value must be doubled (see [Section 4.1.2.1](sql-syntax-lexical.html#SQL-SYNTAX-STRINGS "4.1.2.1. String Constants"){.xref}). Some forms of path expressions require string literals within them. These embedded string literals follow JavaScript/ECMAScript conventions: they must be surrounded by double quotes, and backslash escapes may be used within them to represent otherwise-hard-to-type characters. In particular, the way to write a double quote within an embedded string literal is `\"`{.literal}, and to write a backslash itself, you must write `\\`{.literal}. Other special backslash sequences include those recognized in JavaScript strings: `\b`{.literal}, `\f`{.literal}, `\n`{.literal}, `\r`{.literal}, `\t`{.literal}, `\v`{.literal} for various ASCII control characters, `\x`{.literal}*`NN`* for a character code written with only two hex digits, `\u`{.literal}*`NNNN`* for a Unicode character identified by its 4-hex-digit code point, and `\u{`{.literal}*`N...`*`}`{.literal} for a Unicode character code point written with 1 to 6 hex digits.

A path expression consists of a sequence of path elements, which can be any of the following:

::: itemizedlist
- Path literals of JSON primitive types: Unicode text, numeric, true, false, or null.

- Path variables listed in [Table 8.24](datatype-json.html#TYPE-JSONPATH-VARIABLES "Table 8.24. jsonpath Variables"){.xref}.

- Accessor operators listed in [Table 8.25](datatype-json.html#TYPE-JSONPATH-ACCESSORS "Table 8.25. jsonpath Accessors"){.xref}.

- `jsonpath`{.type} operators and methods listed in [Section 9.16.2.2](functions-json.html#FUNCTIONS-SQLJSON-PATH-OPERATORS "9.16.2.2. SQL/JSON Path Operators and Methods"){.xref}.

- Parentheses, which can be used to provide filter expressions or define the order of path evaluation.
:::

For details on using `jsonpath`{.type} expressions with SQL/JSON query functions, see [Section 9.16.2](functions-json.html#FUNCTIONS-SQLJSON-PATH "9.16.2. The SQL/JSON Path Language"){.xref}.

:::: {#TYPE-JSONPATH-VARIABLES .table}
**Table 8.24. `jsonpath`{.type} Variables**

::: table-contents
  Variable               Description
  ---------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `$`{.literal}          A variable representing the JSON value being queried (the *context item*).
  `$varname`{.literal}   A named variable. Its value can be set by the parameter *`vars`* of several JSON processing functions; see [Table 9.49](functions-json.html#FUNCTIONS-JSON-PROCESSING-TABLE "Table 9.49. JSON Processing Functions"){.xref} for details.
  `@`{.literal}          A variable representing the result of path evaluation in filter expressions.
:::
::::

\

:::: {#TYPE-JSONPATH-ACCESSORS .table}
**Table 8.25. `jsonpath`{.type} Accessors**

::: table-contents
+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Accessor Operator                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
+===========================================================================+===================================================================================================================================================================================================================================================================================================================================================+
| `.`{.literal}*`key`*                                                      | Member accessor that returns an object member with the specified key. If the key name matches some named variable starting with `$`{.literal} or does not meet the JavaScript rules for an identifier, it must be enclosed in double quotes to make it a string literal.                                                                          |
|                                                                           |                                                                                                                                                                                                                                                                                                                                                   |
| `."$`{.literal}*`varname`*`"`{.literal}                                   |                                                                                                                                                                                                                                                                                                                                                   |
+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| `.*`{.literal}                                                            | Wildcard member accessor that returns the values of all members located at the top level of the current object.                                                                                                                                                                                                                                   |
+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| `.**`{.literal}                                                           | Recursive wildcard member accessor that processes all levels of the JSON hierarchy of the current object and returns all the member values, regardless of their nesting level. This is a [PostgreSQL]{.productname} extension of the SQL/JSON standard.                                                                                           |
+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| `.**{`{.literal}*`level`*`}`{.literal}                                    | Like `.**`{.literal}, but selects only the specified levels of the JSON hierarchy. Nesting levels are specified as integers. Level zero corresponds to the current object. To access the lowest nesting level, you can use the `last`{.literal} keyword. This is a [PostgreSQL]{.productname} extension of the SQL/JSON standard.                 |
|                                                                           |                                                                                                                                                                                                                                                                                                                                                   |
| `.**{`{.literal}*`start_level`*` to `{.literal}*`end_level`*`}`{.literal} |                                                                                                                                                                                                                                                                                                                                                   |
+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| `[`{.literal}*`subscript`*`, ...]`{.literal}                              | Array element accessor. *`subscript`* can be given in two forms: *`index`* or *`start_index`*` to `{.literal}*`end_index`*. The first form returns a single array element by its index. The second form returns an array slice by the range of indexes, including the elements that correspond to the provided *`start_index`* and *`end_index`*. |
|                                                                           |                                                                                                                                                                                                                                                                                                                                                   |
|                                                                           | The specified *`index`* can be an integer, as well as an expression returning a single numeric value, which is automatically cast to integer. Index zero corresponds to the first array element. You can also use the `last`{.literal} keyword to denote the last array element, which is useful for handling arrays of unknown length.           |
+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| `[*]`{.literal}                                                           | Wildcard array element accessor that returns all array elements.                                                                                                                                                                                                                                                                                  |
+---------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
:::
::::

\
::::::::::::

:::: footnotes
\

------------------------------------------------------------------------

::: {#ftn.id-1.5.7.22.18.9.3 .footnote}
[^\[7\]^](#id-1.5.7.22.18.9.3){.para} For this purpose, the term ["[value]{.quote}"]{.quote} includes array elements, though JSON terminology sometimes considers array elements distinct from values within objects.
:::
::::
:::::::::::::::::::::::::::::::::::::::::::::::

::: navfooter

------------------------------------------------------------------------

  ------------------------------------------------------------ ------------------------------------------------------------------- ----------------------------------------------------
  [Prev](</II. The SQL Language/8. Data Types/datatype-xml.md>){accesskey="n"}
  8.13. XML Type                                                [Home](</index.md>){accesskey="h"}                                          8.15. Arrays
  ------------------------------------------------------------ ------------------------------------------------------------------- ----------------------------------------------------
:::
::::::::::::::::::::::::::::::::::::::::::::::::::

::: {#docComments}
## Submit correction

If you see anything in the documentation that is not correct, does not match your experience with the particular feature or requires further clarification, please use [this form](/account/comments/new/16/datatype-json.html/){rel="nofollow"} to report a documentation issue.
:::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::: container
[Privacy Policy](/about/privacypolicy) \| [Code of Conduct](/about/policies/coc/) \| [About PostgreSQL](/about/) \| [Contact](/about/contact/)\

Copyright © 1996-2025 The PostgreSQL Global Development Group
:::
