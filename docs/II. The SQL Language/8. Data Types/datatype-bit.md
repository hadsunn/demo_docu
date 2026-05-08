---
title: 8.10. Bit String Types
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Bit strings are strings of 1's and 0's. They can be used to store or visualize bit masks. There are two SQL bit types: `bit(_`n`_)` and `bit varying(_`n`_)`, where _`n`_ is a positive integer.

`bit` type data must match the length _`n`_ exactly; it is an error to attempt to store shorter or longer bit strings. `bit varying` data is of variable length up to the maximum length _`n`_ ; longer strings will be rejected. Writing `bit` without a length is equivalent to `bit(1)`, while `bit varying` without a length specification means unlimited length.

### Note

If one explicitly casts a bit-string value to `bit(_`n`_)`, it will be truncated or zero-padded on the right to be exactly _`n`_ bits, without raising an error. Similarly, if one explicitly casts a bit-string value to `bit varying(_`n`_)`, it will be truncated on the right if it is more than _`n`_ bits.

Refer to [Section 4.1.2.5](<sql-syntax-lexical#SQL-SYNTAX-BIT-STRINGS>).

**Example  8.3. Using the Bit String Types**
    
    
    CREATE TABLE test (a BIT(3), b BIT VARYING(5));
    INSERT INTO test VALUES (B'101', B'00');
    INSERT INTO test VALUES (B'10', B'101');
    
    ERROR:  bit string length 2 does not match type bit(3)
    
    INSERT INTO test VALUES (B'10'::bit(3), B'101');
    SELECT * FROM test;
    
      a  |  b
    -----+-----
     101 | 00
     100 | 101
    
    

  


A bit string value requires 1 byte for each group of 8 bits, plus 5 or 8 bytes overhead depending on the length of the string (but long values may be compressed or moved out-of-line, as explained in [Section 8.3](</II. The SQL Language/8. Data Types/datatype-character.md>) for character strings).


  
