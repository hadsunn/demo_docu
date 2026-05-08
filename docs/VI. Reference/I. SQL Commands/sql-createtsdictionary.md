---
title: CREATE TEXT SEARCH DICTIONARY
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  



## Synopsis
    
    
    CREATE TEXT SEARCH DICTIONARY _name_ (
        TEMPLATE = _template_
        [, _option_ = _value_ [, ... ]]
    )
    

## Description

`CREATE TEXT SEARCH DICTIONARY` creates a new text search dictionary. A text search dictionary specifies a way of recognizing interesting or uninteresting words for searching. A dictionary depends on a text search template, which specifies the functions that actually perform the work. Typically the dictionary provides some options that control the detailed behavior of the template's functions.

If a schema name is given then the text search dictionary is created in the specified schema. Otherwise it is created in the current schema.

The user who defines a text search dictionary becomes its owner.

Refer to [Chapter 12](</II. The SQL Language/12. Full Text Search/12. Full Text Search.md>) for further information.

## Parameters

_`name`_
    

The name of the text search dictionary to be created. The name can be schema-qualified.

_`template`_
    

The name of the text search template that will define the basic behavior of this dictionary.

_`option`_
    

The name of a template-specific option to be set for this dictionary.

_`value`_
    

The value to use for a template-specific option. If the value is not a simple identifier or number, it must be quoted (but you can always quote it, if you wish).

The options can appear in any order.

## Examples

The following example command creates a Snowball-based dictionary with a nonstandard list of stop words.
    
    
    CREATE TEXT SEARCH DICTIONARY my_russian (
        template = snowball,
        language = russian,
        stopwords = myrussian
    );
    

## Compatibility

There is no `CREATE TEXT SEARCH DICTIONARY` statement in the SQL standard.

## See Also

[ALTER TEXT SEARCH DICTIONARY](</VI. Reference/I. SQL Commands/sql-altertsdictionary.md>)


  
