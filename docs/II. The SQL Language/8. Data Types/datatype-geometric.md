---
title: 8.8. Geometric Types
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[8.8.1. Points](</II. The SQL Language/8. Data Types/datatype-geometric.md#881-points>)


[8.8.2. Lines](</II. The SQL Language/8. Data Types/datatype-geometric.md#882-lines>)


[8.8.3. Line Segments](</II. The SQL Language/8. Data Types/datatype-geometric.md#883-line-segments>)


[8.8.4. Boxes](</II. The SQL Language/8. Data Types/datatype-geometric.md#884-boxes>)


[8.8.5. Paths](</II. The SQL Language/8. Data Types/datatype-geometric.md#885-paths>)


[8.8.6. Polygons](</II. The SQL Language/8. Data Types/datatype-geometric.md#886-polygons>)


[8.8.7. Circles](</II. The SQL Language/8. Data Types/datatype-geometric.md#887-circles>)



Geometric data types represent two-dimensional spatial objects. [Table 8.20](datatype-geometric.html#DATATYPE-GEO-TABLE "Table 8.20. Geometric Types") shows the geometric types available in PostgreSQL.

**Table  8.20. Geometric Types**

Name | Storage Size | Description | Representation  
`point` | 16 bytes | Point on a plane | (x,y)  
`line` | 24 bytes | Infinite line | {A,B,C}  
`lseg` | 32 bytes | Finite line segment | ((x1,y1),(x2,y2))  
`box` | 32 bytes | Rectangular box | ((x1,y1),(x2,y2))  
`path` | 16+16n bytes | Closed path (similar to polygon) | ((x1,y1),...)  
`path` | 16+16n bytes | Open path | [(x1,y1),...]  
`polygon` | 40+16n bytes | Polygon (similar to closed path) | ((x1,y1),...)  
`circle` | 24 bytes | Circle | <(x,y),r> (center point and radius)  
  
  


In all these types, the individual coordinates are stored as `double precision` (`float8`) numbers.

A rich set of functions and operators is available to perform various geometric operations such as scaling, translation, rotation, and determining intersections. They are explained in [Section 9.11](</II. The SQL Language/9. Functions and Operators/functions-geometry.md>).

### 8.8.1. Points #

Points are the fundamental two-dimensional building block for geometric types. Values of type `point` are specified using either of the following syntaxes:
    
    
    ( _x_ , _y_ )
      _x_ , _y_
    

where _`x`_ and _`y`_ are the respective coordinates, as floating-point numbers.

Points are output using the first syntax.

### 8.8.2. Lines #

Lines are represented by the linear equation _`A`_ x + _`B`_ y + _`C`_ = 0, where _`A`_ and _`B`_ are not both zero. Values of type `line` are input and output in the following form:
    
    
    { _A_ , _B_ , _C_ }
    

Alternatively, any of the following forms can be used for input:
    
    
    [ ( _x1_ , _y1_ ) , ( _x2_ , _y2_ ) ]
    ( ( _x1_ , _y1_ ) , ( _x2_ , _y2_ ) )
      ( _x1_ , _y1_ ) , ( _x2_ , _y2_ )
        _x1_ , _y1_   ,   _x2_ , _y2_
    

where `(_`x1`_ ,_`y1`_)` and `(_`x2`_ ,_`y2`_)` are two different points on the line.

### 8.8.3. Line Segments #

Line segments are represented by pairs of points that are the endpoints of the segment. Values of type `lseg` are specified using any of the following syntaxes:
    
    
    [ ( _x1_ , _y1_ ) , ( _x2_ , _y2_ ) ]
    ( ( _x1_ , _y1_ ) , ( _x2_ , _y2_ ) )
      ( _x1_ , _y1_ ) , ( _x2_ , _y2_ )
        _x1_ , _y1_   ,   _x2_ , _y2_
    

where `(_`x1`_ ,_`y1`_)` and `(_`x2`_ ,_`y2`_)` are the end points of the line segment.

Line segments are output using the first syntax.

### 8.8.4. Boxes #

Boxes are represented by pairs of points that are opposite corners of the box. Values of type `box` are specified using any of the following syntaxes:
    
    
    ( ( _x1_ , _y1_ ) , ( _x2_ , _y2_ ) )
      ( _x1_ , _y1_ ) , ( _x2_ , _y2_ )
        _x1_ , _y1_   ,   _x2_ , _y2_
    

where `(_`x1`_ ,_`y1`_)` and `(_`x2`_ ,_`y2`_)` are any two opposite corners of the box.

Boxes are output using the second syntax.

Any two opposite corners can be supplied on input, but the values will be reordered as needed to store the upper right and lower left corners, in that order.

### 8.8.5. Paths #

Paths are represented by lists of connected points. Paths can be _open_ , where the first and last points in the list are considered not connected, or _closed_ , where the first and last points are considered connected.

Values of type `path` are specified using any of the following syntaxes:
    
    
    [ ( _x1_ , _y1_ ) , ... , ( _xn_ , _yn_ ) ]
    ( ( _x1_ , _y1_ ) , ... , ( _xn_ , _yn_ ) )
      ( _x1_ , _y1_ ) , ... , ( _xn_ , _yn_ )
      ( _x1_ , _y1_   , ... ,   _xn_ , _yn_ )
        _x1_ , _y1_   , ... ,   _xn_ , _yn_
    

where the points are the end points of the line segments comprising the path. Square brackets (`[]`) indicate an open path, while parentheses (`()`) indicate a closed path. When the outermost parentheses are omitted, as in the third through fifth syntaxes, a closed path is assumed.

Paths are output using the first or second syntax, as appropriate.

### 8.8.6. Polygons #

Polygons are represented by lists of points (the vertexes of the polygon). Polygons are very similar to closed paths; the essential semantic difference is that a polygon is considered to include the area within it, while a path is not.

An important implementation difference between polygons and paths is that the stored representation of a polygon includes its smallest bounding box. This speeds up certain search operations, although computing the bounding box adds overhead while constructing new polygons.

Values of type `polygon` are specified using any of the following syntaxes:
    
    
    ( ( _x1_ , _y1_ ) , ... , ( _xn_ , _yn_ ) )
      ( _x1_ , _y1_ ) , ... , ( _xn_ , _yn_ )
      ( _x1_ , _y1_   , ... ,   _xn_ , _yn_ )
        _x1_ , _y1_   , ... ,   _xn_ , _yn_
    

where the points are the end points of the line segments comprising the boundary of the polygon.

Polygons are output using the first syntax.

### 8.8.7. Circles #

Circles are represented by a center point and radius. Values of type `circle` are specified using any of the following syntaxes:
    
    
    < ( _x_ , _y_ ) , _r_ >
    ( ( _x_ , _y_ ) , _r_ )
      ( _x_ , _y_ ) , _r_
        _x_ , _y_   , _r_
    

where `(_`x`_ ,_`y`_)` is the center point and _`r`_ is the radius of the circle.

Circles are output using the first syntax.


  
