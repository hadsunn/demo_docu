---
title: 9.1. Logical Operators
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


The usual logical operators are available: 
    
    
    boolean AND boolean → boolean
    boolean OR boolean → boolean
    NOT boolean → boolean
    

SQL uses a three-valued logic system with true, false, and `null`, which represents “unknown”. Observe the following truth tables:

_`a`_ | _`b`_ | _`a`_ AND _`b`_ | _`a`_ OR _`b`_  
TRUE | TRUE | TRUE | TRUE  
TRUE | FALSE | FALSE | TRUE  
TRUE | NULL | NULL | TRUE  
FALSE | FALSE | FALSE | FALSE  
FALSE | NULL | FALSE | NULL  
NULL | NULL | NULL | NULL  
  
_`a`_ | NOT _`a`_  
TRUE | FALSE  
FALSE | TRUE  
NULL | NULL  
  
The operators `AND` and `OR` are commutative, that is, you can switch the left and right operands without affecting the result. (However, it is not guaranteed that the left operand is evaluated before the right operand. See [Section 4.2.14](sql-expressions.html#SYNTAX-EXPRESS-EVAL "4.2.14. Expression Evaluation Rules") for more information about the order of evaluation of subexpressions.)


  
