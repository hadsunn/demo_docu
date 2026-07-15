<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><p>УТВЕРЖДЕН</p>
<p>643.72410666.00067-07 98 01-ЛУ</p></th>
<th style="text-align: center;"></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" style="text-align: center;"><p>ЗАЩИЩЕННАЯ СИСТЕМА УПРАВЛЕНИЯ<br />
БАЗАМИ ДАННЫХ «JATOBA»</p>
<p><strong>Руководство по настройке. Часть ХХ.<br />
Поддержка географических объектов в СУБД.<br />
Компонент «PostGIS»</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-26</strong></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">Листов 16</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">2025</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: right;">Литера О<sub>1</sub></td>
</tr>
</tbody>
</table>

**АННОТАЦИЯ**

В документе приведены сведения, необходимые для установки и эксплуатации компонента «PostGIS» (далее по тексту – «компонент» или postgis), предназначенного для обеспечения поддержки географических объектов в СУБД «Jatoba».

Версия компонента – 3.3.3.

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонента [4](#назначение-компонента)](#назначение-компонента)

[1.1. Условия применения [4](#обеспечение-хранение-различных-типов-пространственных-данных-таких-как-точки-линии-полигоны-и-мультигеометрии-как-в-2d-так-и-в-3d-данныхобеспечение-быстрого-поиска-и-извлечения-пространственных-данных-на-основе-их-местоположенияпредоставление-широкого-спектра-пространственных-функций-которые-позволяют-фильтровать-и-анализировать-пространственные-данные-измерять-расстояния-и-площади-пересекающиеся-геометрии-буферизацию-и-многое-другоепредоставление-инструментов-для-обработки-и-манипулирования-геометрическими-данными-такими-как-упрощение-преобразование-и-генерализацияподдержка-хранения-и-обработки-растровых-данных-таких-как-данные-о-высоте-и-погодеподдержка-функций-для-геокодирования-и-обратного-геокодированияобеспечение-доступа-и-работы-с-компонентом-postgis-с-использованием-сторонних-инструментов.условия-применения)](#обеспечение-хранение-различных-типов-пространственных-данных-таких-как-точки-линии-полигоны-и-мультигеометрии-как-в-2d-так-и-в-3d-данныхобеспечение-быстрого-поиска-и-извлечения-пространственных-данных-на-основе-их-местоположенияпредоставление-широкого-спектра-пространственных-функций-которые-позволяют-фильтровать-и-анализировать-пространственные-данные-измерять-расстояния-и-площади-пересекающиеся-геометрии-буферизацию-и-многое-другоепредоставление-инструментов-для-обработки-и-манипулирования-геометрическими-данными-такими-как-упрощение-преобразование-и-генерализацияподдержка-хранения-и-обработки-растровых-данных-таких-как-данные-о-высоте-и-погодеподдержка-функций-для-геокодирования-и-обратного-геокодированияобеспечение-доступа-и-работы-с-компонентом-postgis-с-использованием-сторонних-инструментов.условия-применения)

[2. Установка и настройка [5](#установка-и-настройка)](#установка-и-настройка)

[2.1. Состав компонента [5](#состав-компонента)](#состав-компонента)

[2.2. Установка пакета компонента «PostGIS» [6](#установка-пакета-компонента-postgis)](#установка-пакета-компонента-postgis)

[2.3. Установка расширения postgis в СУБД «Jatoba» [7](#установка-расширения-postgis-в-субд-jatoba)](#установка-расширения-postgis-в-субд-jatoba)

[2.4. Удаление компонента «PostGIS» [8](#удаление-компонента-postgis)](#удаление-компонента-postgis)

[2.4.1. Удаление пакета компонента «PostGIS» в ОС GNU/Linux [8](#удаление-пакета-компонента-postgis-в-ос-gnulinux)](#удаление-пакета-компонента-postgis-в-ос-gnulinux)

[2.4.2. Удаление пакета компонента «PostGIS» в ОС Microsoft Windows [8](#удаление-пакета-компонента-postgis-в-ос-microsoft-windows)](#удаление-пакета-компонента-postgis-в-ос-microsoft-windows)

[3. Функциональные возможности компонента [9](#функциональные-возможности-компонента)](#функциональные-возможности-компонента)

[3.1. Поддерживаемые типы географических данных [10](#поддерживаемые-типы-географических-данных)](#поддерживаемые-типы-географических-данных)

[3.1.1. Point [10](#point)](#point)

[3.1.2. LineString [10](#linestring)](#linestring)

[3.1.3. LinearRing [10](#linearring)](#linearring)

[3.1.4. Polygon [10](#polygon)](#polygon)

[3.1.5. MultiPoint [11](#multipoint)](#multipoint)

[3.1.6. MultiLineString [11](#multilinestring)](#multilinestring)

[3.1.7. MultiPolygon [11](#multipolygon)](#multipolygon)

[3.1.8. GeometryCollection [11](#geometrycollection)](#geometrycollection)

[3.1.9. PolyhedralSurface [11](#polyhedralsurface)](#polyhedralsurface)

[3.2. Пример создания таблицы с географическими данными [12](#пример-создания-таблицы-с-географическими-данными)](#пример-создания-таблицы-с-географическими-данными)

[3.3. Поддерживаемые типы пространственных данных [12](#поддерживаемые-типы-пространственных-данных)](#поддерживаемые-типы-пространственных-данных)

[3.3.1. box2d [12](#box2d)](#box2d)

[3.3.2. box3d [12](#box3d)](#box3d)

[3.3.3. geometry [12](#geometry)](#geometry)

[3.3.4. geometry_dump [13](#geometry_dump)](#geometry_dump)

[3.3.5. geography [13](#geom---геометрия-представляющая-компонент-выгруженной-геометрии.-тип-геометрии-зависит-от-исходной-функции.path---целочисленный-массив-который-определяет-путь-перехода-к-компоненту-в-пределах-выгруженной-геометрии.-массив-путей-отсчитывается-от-1-т.е.-является-первым-элементом-geompath1.geography)](#geom---геометрия-представляющая-компонент-выгруженной-геометрии.-тип-геометрии-зависит-от-исходной-функции.path---целочисленный-массив-который-определяет-путь-перехода-к-компоненту-в-пределах-выгруженной-геометрии.-массив-путей-отсчитывается-от-1-т.е.-является-первым-элементом-geompath1.geography)

[Термины и определения [14](#_Toc215497238)](#_Toc215497238)

[Перечень сокращений [15](#_Toc215497239)](#_Toc215497239)

# Назначение компонента

Компонент «PostGIS» предназначен для реляционных баз данных и расширяет базовые возможности СУБД «Jatoba», добавляя поддержку хранения, индексирования и запросов геопространственных данных, а также при использовании геоинформационных систем (ГИС).

Возможности компонента «PostGIS» включают в себя:

- 
- 
- 
- 
- 
- 
- 

## обеспечение хранение различных типов пространственных данных, таких как точки, линии, полигоны и мультигеометрии, как в 2D, так и в 3D данных;обеспечение быстрого поиска и извлечения пространственных данных на основе их местоположения;предоставление широкого спектра пространственных функций, которые позволяют фильтровать и анализировать пространственные данные, измерять расстояния и площади, пересекающиеся геометрии, буферизацию и многое другое;предоставление инструментов для обработки и манипулирования геометрическими данными, такими как упрощение, преобразование и генерализация;поддержка хранения и обработки растровых данных, таких как данные о высоте и погоде;поддержка функций для геокодирования и обратного геокодирования;обеспечение доступа и работы с компонентом «PostGIS» с использованием сторонних инструментов.Условия применения

Компонент «PostGIS» может использоваться с СУБД «Jatoba» версий 4.x и выше, под управлением операционных систем Windows и GNU/Linux.

Компонент выполнен в форме расширения для СУБД «Jatoba» и не имеет ограничений по совместимости с другими компонентами.

# Установка и настройка

## Состав компонента

В зависимости от версии СУБД «Jatoba», для которой предназначен, компонент «PostGIS» содержит разный набор расширений.

Для версии СУБД «Jatoba» 4 состав компонента «PostGIS» входят следующие расширения:

- 
- 
- 
- 
- 
- 

sfcgal;rastr;topology;address_standartizer;postgis_tiger_geo_coder;postgis.Для версии СУБД «Jatoba» 5/6 состав компонент «PostGIS» содержит только postgis и postgis_tiger_geo_coder.

Установка компонента «PostGIS» приводится в подразделе 2.2.

Расширение «sfcgal» представляет собой библиотеку-оболочка C++ вокруг CGAL, которая в свою очередь предоставляет расширенные 2D и 3D пространственные функции.

Расширение «rastr» обеспечивает поддержку растровых объектов.

Расширение «topology» предназначено для управления топологическими объектами, такими как грани, ребра и узлы.

Расширение «address_standartizer» — это однострочный парсер адресов, который принимает входной адрес и нормализует его на основе набора правил, хранящихся в таблице и вспомогательных таблицах lex и gaz. Парсер работает справа налево, анализируя сначала элементы для почтового индекса, области/края, города, а затем ищет элементы для определения номером дома, улицу, перекресток или достопримечательность.

Расширение «postgis_tiger_geo_coder» обеспечивает функционал нормализации адресов и геокодирования с использованием данных TIGER (Topologically Integrated Geographic Encoding and Referencing). Это расширение обеспечивает проверку адресов, нормализацию и преобразование адресов в географические координаты.

## Установка пакета компонента «PostGIS»

Версия компонента «PostGIS» для ОС семейства GNU/Linux, распространяется в составе СУБД в виде отдельного DEB или RPM-пакета «jatoba\<ver\>-postgis_Х.ХХ.Х-ХХХХ1_amd64.deb/rpm», находящегося на дистрибутивном диске.

Компонент «PostGIS» требует базовой установки следующих пакетов (здесь и далее \<ver\> - номер основной версии СУБД «Jatoba», например «6»):

- 
- 
- 
- 

jatoba\<ver\>-common *–* клиентская часть СУБД;jatoba\<ver\>-contrib *–* вспомогательный набор модулей (расширений СУБД);jatoba\<ver\>-libs – основные библиотеки для клиентской и серверной части СУБД;jatoba\<ver\>-server – серверная часть СУБД.Команда установки пакета компонента «PostGIS» в разных дистрибутивах Linux может отличаться, а также могут отличаться некоторые шаги установки, связанные с отдельными особенностями дистрибутивов Linux и способами распространения продуктов третьих лиц.

Команды установки компонента «PostGIS» приведены для четырех разных дистрибутивов ОС Linux:

1)  

Классический Debian Linux и все дистрибутивы от него производные:apt-get install jatoba\<ver\>-postgis

2)  

Классический Red Hat и все дистрибутивы от него производные:yum install jatoba\<ver\>-postgis

3)  

ALTLinux – дистрибутив, построенный на базе RPM-пакетов, но использующий apt в качестве высокоуровневого менеджера пакетов (команда установки выглядит аналогично Debian):apt-get install jatoba\<ver\>-postgis

4)  

openSUSE – дистрибутив, построенный на базе RPM-пакетов, но использующий собственный пакетный менеджер zypper:zypper install jatoba\<ver\>-postgis

Все необходимые отличия, связанные с установкой в разных видах дистрибутивов Linux, также даны с пометкой соответствующей ОС.

## Установка расширения postgis в СУБД «Jatoba»

Для того чтобы выполнить установку расширения «postgis» необходимо выполнить следующие действия:

1)  

> Подключиться с БД с правами суперпользователя:su postgres
>
> psql

2)  

> Установить расширение «postgis» для СУБД «Jatoba» при помощи SQL-команды:CREATE EXTENSION postgis;

Подтверждением успешной установки расширения «postgis» следует считать вывод сообщения «CREATE EXTENSION».

3)  

> Для подтверждения успешной установки расширения необходимо выполнить следующую команду:\dx

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/postgis/media/image1.png" style="width:5.61806in;height:2.11667in" />

Рисунок 2.1 – Установка расширения postgis для СУБД

4)  

Убедится в том, что в списке установленных расширений содержится запись с названием расширения «postgis».После установки расширения «postgis» в СУБД «Jatoba» настройка компонента «PostGIS» считается завершенной.

## Удаление компонента «PostGIS»

### Удаление пакета компонента «PostGIS» в ОС GNU/Linux

Описание команды удаления пакета компонента «PostGIS» дано для четырех разных дистрибутивов Linux:

1\) классический Debian Linux и все дистрибутивы от него производные:

> apt-get purge jatoba6-postgis

2\) классический Red Hat и все дистрибутивы от него производные:

> yum remove jatoba6-postgis

3\) ALTLinux – дистрибутив, построенный на базе RPM-пакетов, но использующий apt в качестве высокоуровневого менеджера пакетов (команда установки выглядит аналогично Debian):

> apt-get remove jatoba6-postgis

4\) openSUSE – дистрибутив, построенный на базе RPM-пакетов, но использующий собственный пакетный менеджер zypper:

> zypper remove jatoba6-postgis

Все необходимые отличия, связанные с удалением пакетов в разных видах дистрибутивов Linux, также даны с пометкой соответствующей ОС.

### Удаление пакета компонента «PostGIS» в ОС Microsoft Windows

Удаление пакета компонента «PostGIS» в ОС Microsoft Windows выполняется с помощью встроенных средств управлением программным обеспечением, например «Приложения и возможности», входящим в состав операционной системы.

# Функциональные возможности компонента

Компонент «PostGIS» поддерживает стандарт Simple Features Access (SFA) для предоставления модели для геопространственных данных. Он определяет фундаментальный пространственный тип Geometry, а также операции, которые манипулируют и преобразуют геометрические значения для выполнения задач пространственного анализа. PostGIS реализует модель OGC Geometry как типы данных PostgreSQL: геометрия и география.

Геометрия — это абстрактный тип данных. Значения геометрии относятся к одному из его конкретных подтипов, которые представляют различные виды и измерения геометрических фигур. К ним относятся атомарные типы Point, LineString, LinearRing и Polygon, а также типы коллекций MultiPoint, MultiLineString, MultiPolygon и GeometryCollection.

Геометрия моделирует фигуры в двумерной декартовой плоскости. Типы PolyhedralSurface, Triangle и TIN также могут представлять фигуры в трехмерном пространстве. Размер и местоположение фигур определяются их координатами. Каждая координата имеет значение ординаты X и Y, определяющее ее местоположение на плоскости. Фигуры строятся из точек или отрезков линий, при этом точки задаются одной координатой, а отрезки линий — двумя координатами.

Координаты могут содержать необязательные значения ординат Z и M. Ордината Z часто используется для представления высоты. Ордината M содержит значение меры, которое может представлять время или расстояние. Если значения Z или M присутствуют в значении геометрии, они должны быть определены для каждой точки в геометрии. Если геометрия имеет ординаты Z или M, то размерность координат составляет 3D; если она имеет и Z, и M, то размерность координат составляет 4D.

Значения геометрии связаны с пространственной системой отсчета, указывающей систему координат, в которую она встроена.

Пространственная система отсчета идентифицируется номером SRID геометрии. Единицы осей X и Y определяются пространственной системой отсчета. В плоских системах отсчета координаты X и Y обычно представляют восточное и северное направление, тогда как в геодезических системах они представляют долготу и широту. SRID 0 представляет бесконечную декартову плоскость без единиц, назначенных ее осям.

Геометрическое измерение является свойством геометрических типов. Точечные типы имеют размерность 0, линейные типы имеют размерность 1, а полигональные типы имеют размерность 2. Коллекции имеют размерность максимального элемента.

Значение геометрии может быть пустым. Пустые значения не содержат вершин (для атомарных типов геометрии) или элементов (для коллекций).

## Поддерживаемые типы географических данных

### Point

Точка — это одномерная геометрия, которая представляет собой одно местоположение в координатном пространстве:

> POINT (1 2)
>
> POINT Z (1 2 3)
>
> POINT ZM (1 2 3 4)

### LineString

LineString — это одномерная линия, образованная непрерывной последовательностью линейных сегментов. Каждый линейный сегмент определяется двумя точками, при этом конечная точка одного сегмента образует начальную точку следующего сегмента.

> LINESTRING (1 2, 3 4, 5 6)

### LinearRing

LinearRing — это замкнутый на себя круг. Первая и последняя точки должны быть равны, а линия не должна самопересекаться.

> LINEARRING (0 0 0, 4 0 0, 4 4 0, 0 4 0, 0 0 0)

### Polygon

Полигон — это двумерная плоская область, ограниченная внешней границей (оболочкой) и нулем, а также внутренними границами (отверстиями). Каждая граница — это LinearRing.

> POLYGON ((0 0 0,4 0 0,4 4 0,0 4 0,0 0 0),(1 1 0,2 1 0,2 2 0,1 2 0,1 1 0))

### MultiPoint

MultiPoint — это совокупность точек.

> MULTIPOINT ( (0 0), (1 2) )

### MultiLineString

MultiLineString — это коллекция LineString.

> MULTILINESTRING ( (0 0,1 1,1 2), (2 3,3 2,5 4) )

### MultiPolygon

Мультиполигон — это набор неперекрывающихся, несмежных полигонов. Полигоны в наборе могут соприкасаться только в конечном числе точек.

> MULTIPOLYGON (((1 5, 5 5, 5 1, 1 1, 1 5)), ((6 5, 9 1, 6 1, 6 5)))

### GeometryCollection

GeometryCollection — это неоднородная (смешанная) коллекция геометрий.

> GEOMETRYCOLLECTION ( POINT(2 3), LINESTRING(2 3, 3 4))

### PolyhedralSurface

PolyhedralSurface — это непрерывный набор фрагментов или граней, которые имеют некоторые общие ребра. Каждый фрагмент — это плоский полигон. Если координаты полигона имеют ординаты Z, то поверхность является трехмерной.

> POLYHEDRALSURFACE Z (
>
> ((0 0 0, 0 0 1, 0 1 1, 0 1 0, 0 0 0)),
>
> ((0 0 0, 0 1 0, 1 1 0, 1 0 0, 0 0 0)),
>
> ((0 0 0, 1 0 0, 1 0 1, 0 0 1, 0 0 0)),
>
> ((1 1 0, 1 1 1, 1 0 1, 1 0 0, 1 1 0)),
>
> ((0 1 0, 0 1 1, 1 1 1, 1 1 0, 0 1 0)),
>
> ((0 0 1, 1 0 1, 1 1 1, 0 1 1, 0 0 1)) )

## Пример создания таблицы с географическими данными

Создать таблицу для хранения географических данных можно с помощью SQL-оператора CREATE TABLE со столбцом типа geography:

> CREATE TABLE global_points (
>
> id SERIAL PRIMARY KEY,
>
> name VARCHAR(64),
>
> location geography(POINT,4326)
>
> );

## Поддерживаемые типы пространственных данных

### box2d

box2d — это тип пространственных данных PostGIS, используемый для представления двумерный ограничивающий прямоугольник, заключающий в себе геометрию или коллекцию геометрий.

Представление содержит значения минимальное и максимальное значения экстентов по координатам X и Y: xmin, ymin, xmax, ymax. Например:

> BOX(1 2,5 6)

### box3d

box3d — это тип пространственных данных PostGIS, используемый для представления трехмерный ограничивающий прямоугольник, заключающий в себе геометрию или коллекцию геометрий.

Представление содержит значения минимальное и максимальное значения экстентов по координатам X,Y,Z: xmin, ymin, zmin, xmax, ymax, zmax. Например:

> BOX3D(1 2 3,5 6 5)

### geometry

geometry — это фундаментальный тип пространственных данных PostGIS, используемый для представления объекта в плоских (евклидовых) системах координат.

Все пространственные операции с геометрией используют единицы измерения системы пространственной привязки, в которой находится геометрия.

### geometry_dump

geometry_dump — составной тип данных, содержащий поля:

- 
- 

### geom - геометрия, представляющая компонент выгруженной геометрии. Тип геометрии зависит от исходной функции.path\[\] - целочисленный массив , который определяет путь перехода к компоненту в пределах выгруженной геометрии. Массив путей отсчитывается от 1 (т.е. является первым элементом geompath\[1\]).geography

Это тип пространственных данных, используемый для представления объекта в геодезических системах координат. Геодезические системы координат моделируют Землю с помощью эллипсоида.

Пространственные операции по типу geography дают более точные результаты с учетом эллипсоидальной модели.

# 

|  |  |  |
|----|----|----|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
| <span id="_Toc215497238" class="anchor"></span>Термины и определенияБДБаза данныхГИСГеоинформационная системаОСОперационная системаСУБДСистема управления базами данныхDEBФормат пакетов программного обеспечения ОС на основе GNU/LinuxOGCOpen Geospatial Consortium, организация по стандартизации использования ГИСRPMФормат пакетов программного обеспечения ОС на основе Red Hat LinuxSRIDSpatial Reference Identifier, идентификатор, соответствующий определенной системе координатSQLЯзык управления данными в СУБД |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

# 

| <span id="_Toc215497239" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language |
|:---|----|----|
| БД | – | База данных |
|  |  |  |
| ОС | – | Операционная система |
| СУБД | – | Система управления базами данных |

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 9%" />
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 13%" />
<col style="width: 11%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr>
<th colspan="10" style="text-align: center;">Лист регистрации изменений</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2" style="text-align: center;">Изм.</td>
<td colspan="4" style="text-align: center;">Номера листов (страниц)</td>
<td rowspan="2" style="text-align: center;">Всего<br />
листов (страниц)<br />
в документе</td>
<td rowspan="2" style="text-align: center;">Номер документа</td>
<td rowspan="2" style="text-align: center;">Входящий номер сопроводительного документа и дата</td>
<td rowspan="2" style="text-align: center;">Подпись</td>
<td rowspan="2" style="text-align: center;">Дата</td>
</tr>
<tr>
<td style="text-align: center;">измененных</td>
<td style="text-align: center;">замененных</td>
<td style="text-align: center;">новых</td>
<td style="text-align: center;">аннулированных</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>
