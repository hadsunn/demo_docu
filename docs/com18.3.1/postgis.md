<table>
<colgroup>
<col style="width: 41%" />
<col style="width: 58%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Подп. и дата</p>
</blockquote></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Инв. № дубл.</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Взам. инв. №</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Подп. и дата</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Инв. № подл.</p>
</blockquote></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>УТВЕРЖДЕН 643.72410666.00067-08 98 01-ЛУ</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>ЗАЩИЩЕННАЯ СИСТЕМА УПРАВЛЕНИЯ БАЗАМИ ДАННЫХ «JATOBA»</p>
<p><strong>Руководство по настройке. Часть 26.</strong></p>
<p><strong>Поддержка географических объектов в СУБД. Компонент «PostGIS»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-26</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 16</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2026</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: right;">Литера О<sub>1</sub></td>
</tr>
</tbody>
</table>

# АННОТАЦИЯ

<img src="../docs/assets/images/com18.3.1/postgis/media/image1.png" style="width:0.25in;height:0.25in" />В документе приведены сведения, необходимые для установки и эксплуатации компонента «PostGIS» (далее по тексту – «компонент» или postgis), предназначенного для обеспечения поддержки географических объектов в СУБД «Jatoba».

> Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра
>
> 6.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.
>
> Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-6/bin».
>
> Для СУБД «Jatoba» версий 4 используется версия компонента — 3.2.
>
> Для СУБД «Jatoba» версий 5/6/18 используется версия компонента — 3.6.

# СОДЕРЖАНИЕ

1.  [Назначение компонента 4](#назначение-компонента)

> <img src="../docs/assets/images/com18.3.1/postgis/media/image2.png" style="width:0.22in;height:0.12333in" /> [Условия применения 4](#условия-применения)

2.  [Установка и настройка 5](#установка-и-настройка)

<img src="../docs/assets/images/com18.3.1/postgis/media/image3.png" style="width:0.23667in;height:0.12333in" /> [Состав компонента 5](#состав-компонента)

<img src="../docs/assets/images/com18.3.1/postgis/media/image4.png" style="width:0.23667in;height:0.12333in" /> [Установка пакета компонента «PostGIS» в ОС GNU Linux 6](#установка-пакета-компонента-postgis-в-ос-gnu-linux)

> <img src="../docs/assets/images/com18.3.1/postgis/media/image5.png" style="width:0.23667in;height:0.12332in" /> [Установка расширения postgis в СУБД «Jatoba» 7](#_bookmark5)

<img src="../docs/assets/images/com18.3.1/postgis/media/image6.png" style="width:0.23667in;height:0.12333in" /> [Удаление пакета компонента «PostGIS» в ОС GNU/Linux 8](#_bookmark6)

3.  [Функциональные возможности компонента 9](#функциональные-возможности-компонента)

> <img src="../docs/assets/images/com18.3.1/postgis/media/image7.png" style="width:0.23333in;height:0.12332in" /> [Поддерживаемые типы географических данных 10](#поддерживаемые-типы-географических-данных)

1.  [Point 10](#point)

2.  [LineString 10](#linestring)

3.  [LinearRing 10](#linearring)

4.  [Polygon 10](#polygon)

5.  [MultiPoint 11](#multipoint)

6.  [MultiLineString 11](#multilinestring)

7.  [MultiPolygon 11](#multipolygon)

8.  [GeometryCollection 11](#geometrycollection)

9.  [PolyhedralSurface 11](#polyhedralsurface)

> <img src="../docs/assets/images/com18.3.1/postgis/media/image8.png" style="width:0.23333in;height:0.12332in" /> [Пример создания таблицы с географическими данными 12](#пример-создания-таблицы-с-географическими-данными)
>
> <img src="../docs/assets/images/com18.3.1/postgis/media/image9.png" style="width:0.23333in;height:0.12333in" /> [Поддерживаемые типы пространственных данных 12](#поддерживаемые-типы-пространственных-данных)

1.  [box2d 12](#box2d)

2.  [box3d 12](#box3d)

3.  [geometry 12](#geometry)

4.  [geometry_dump 13](#geometry_dump)

5.  [geography 13](#geography)

[Термины и определения 14](#термины-и-определения)

[Перечень сокращений 15](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

Компонент «PostGIS» предназначен для реляционных баз данных и расширяет базовые возможности СУБД «Jatoba», добавляя поддержку хранения, индексирования и запросов геопространственных данных, а также при использовании геоинформационных систем (ГИС).

> Возможности компонента «PostGIS» включают в себя:

- обеспечение хранение различных типов пространственных данных, таких как точки, линии, полигоны и мультигеометрии, как в 2D, так и в 3D данных;

- обеспечение быстрого поиска и извлечения пространственных данных на основе их местоположения;

- предоставление широкого спектра пространственных функций, которые позволяют фильтровать и анализировать пространственные данные, измерять расстояния и площади, пересекающиеся геометрии, буферизацию и многое другое;

- предоставление инструментов для обработки и манипулирования геометрическими данными, такими как упрощение, преобразование и генерализация;

- поддержка хранения и обработки растровых данных, таких как данные о высоте и погоде;

- поддержка функций для геокодирования и обратного геокодирования;

- обеспечение доступа и работы с компонентом «PostGIS» с использованием сторонних инструментов.

## <img src="../docs/assets/images/com18.3.1/postgis/media/image10.png" style="width:0.27in;height:0.14in" /> Условия применения

Компонент «PostGIS» может использоваться с СУБД «Jatoba» версий 4.x и выше, под управлением операционной системы GNU/Linux.

Компонент выполнен в форме расширения для СУБД «Jatoba» и не имеет ограничений по совместимости с другими компонентами.

# УСТАНОВКА И НАСТРОЙКА

## <img src="../docs/assets/images/com18.3.1/postgis/media/image11.png" style="width:0.27667in;height:0.14in" /> Состав компонента

> В зависимости от версии СУБД «Jatoba», для которой предназначен, компонент

«PostGIS» содержит разный набор расширений.

Для версии СУБД «Jatoba» 4 состав компонента «PostGIS» входят следующие расширения:

- sfcgal;

- rastr;

- topology;

- address_standartizer;

- postgis_tiger_geo_coder;

- postgis.

Для версии СУБД «Jatoba» 5/6/18 состав компонент «PostGIS» содержит только postgis и postgis_tiger_geo_coder.

> Процедура установки компонента «PostGIS» приводится в п. [2.2](#установка-пакета-компонента-postgis-в-ос-gnu-linux).

Расширение «sfcgal» представляет собой библиотеку-оболочка C++ вокруг CGAL, которая в свою очередь предоставляет расширенные 2D и 3D пространственные функции.

> Расширение «rastr» обеспечивает поддержку растровых объектов.

Расширение «topology» предназначено для управления топологическими объектами, такими как грани, ребра и узлы.

Расширение «address_standartizer» — это однострочный парсер адресов, который принимает входной адрес и нормализует его на основе набора правил, хранящихся в таблице и вспомогательных таблицах lex и gaz. Парсер работает справа налево, анализируя сначала элементы для почтового индекса, области/края, города, а затем ищет элементы для определения номером дома, улицу, перекресток или достопримечательность.

Расширение «postgis_tiger_geo_coder» обеспечивает функционал нормализации адресов и геокодирования с использованием данных TIGER (Topologically Integrated

Geographic Encoding and Referencing). Это расширение обеспечивает проверку адресов, нормализацию и преобразование адресов в географические координаты.

## <img src="../docs/assets/images/com18.3.1/postgis/media/image12.png" style="width:0.27667in;height:0.14in" /> Установка пакета компонента «PostGIS» в ОС GNU Linux

Версия компонента «PostGIS» для ОС семейства GNU/Linux, распространяется в составе СУБД в виде отдельного DEB или RPM-пакета «jatoba\<ver\>-postgis_Х.ХХ.Х-ХХХХ1_amd64.deb/rpm», находящегося на дистрибутивном диске.

> Компонент «PostGIS» требует базовой установки следующих пакетов (здесь и далее

\<ver\> - номер основной версии СУБД «Jatoba», например «6»):

- jatoba\<ver\>-common *–* клиентская часть СУБД;

- jatoba\<ver\>-contrib *–* вспомогательный набор модулей (расширений СУБД);

- jatoba\<ver\>-libs – основные библиотеки для клиентской и серверной части СУБД;

- jatoba\<ver\>-server – серверная часть СУБД.

Команда установки пакета компонента «PostGIS» в разных дистрибутивах Linux может отличаться, а также могут отличаться некоторые шаги установки, связанные с отдельными особенностями дистрибутивов Linux и способами распространения продуктов третьих лиц.

> Команды установки компонента «PostGIS» приведены для четырех разных дистрибутивов ОС Linux:

1)  Классический Debian Linux и все дистрибутивы от него производные:

apt-get install jatoba\<ver\>-postgis

2)  Классический Red Hat и все дистрибутивы от него производные:

yum install jatoba\<ver\>-postgis

3)  ALTLinux – дистрибутив, построенный на базе RPM-пакетов, но использующий apt в качестве высокоуровневого менеджера пакетов (команда установки выглядит аналогично Debian):

apt-get install jatoba\<ver\>-postgis

Все необходимые отличия, связанные с установкой в разных видах дистрибутивов Linux, также даны с пометкой соответствующей ОС.

## <img src="../docs/assets/images/com18.3.1/postgis/media/image13.png" style="width:0.27667in;height:0.14in" /> Установка расширения postgis в СУБД «Jatoba»

Для того чтобы выполнить установку расширения «postgis» необходимо выполнить следующие действия:

1)  Подключиться с БД с правами суперпользователя:

su postgres psql

2)  Установить расширение «postgis» для СУБД «Jatoba» при помощи SQL-команды:

CREATE EXTENSION postgis;

Подтверждением успешной установки расширения «postgis» следует считать вывод сообщения «CREATE EXTENSION».

3)  Для подтверждения успешной установки расширения необходимо выполнить следующую команду:

<img src="../docs/assets/images/com18.3.1/postgis/media/image14.png" style="width:7.0583in;height:2.65417in" />

\dx

> Рисунок 2.1 – Установка расширения postgis для СУБД

4)  Убедится в том, что в списке установленных расширений содержится запись с названием расширения «postgis».

> После установки расширения «postgis» в СУБД «Jatoba» настройка компонента

«PostGIS» считается завершенной.

## <img src="../docs/assets/images/com18.3.1/postgis/media/image15.png" style="width:0.27667in;height:0.14in" /> Удаление пакета компонента «PostGIS» в ОС GNU/Linux

Описание команды удаления пакета компонента «PostGIS» дано для четырех разных дистрибутивов Linux:

1)  классический Debian Linux и все дистрибутивы от него производные:

apt-get purge jatoba\<ver\>-postgis

2)  классический Red Hat и все дистрибутивы от него производные:

yum remove jatoba\<ver\>-postgis

3)  ALTLinux – дистрибутив, построенный на базе RPM-пакетов, но использующий apt в качестве высокоуровневого менеджера пакетов (команда установки выглядит аналогично Debian):

apt-get remove jatoba\<ver\>-postgis

4)  openSUSE – дистрибутив, построенный на базе RPM-пакетов, но использующий собственный пакетный менеджер zypper:

zypper remove jatoba\<ver\>-postgis

Все необходимые отличия, связанные с удалением пакетов в разных видах дистрибутивов Linux, также даны с пометкой соответствующей ОС.

# ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

Компонент «PostGIS» поддерживает стандарт Simple Features Access (SFA) для предоставления модели для геопространственных данных. Он определяет фундаментальный пространственный тип Geometry, а также операции, которые манипулируют и преобразуют геометрические значения для выполнения задач пространственного анализа. PostGIS реализует модель OGC Geometry как типы данных PostgreSQL: геометрия и география.

Геометрия — это абстрактный тип данных. Значения геометрии относятся к одному из его конкретных подтипов, которые представляют различные виды и измерения геометрических фигур. К ним относятся атомарные типы Point, LineString, LinearRing и Polygon, а также типы коллекций MultiPoint, MultiLineString, MultiPolygon и GeometryCollection.

Геометрия моделирует фигуры в двумерной декартовой плоскости. Типы PolyhedralSurface, Triangle и TIN также могут представлять фигуры в трехмерном пространстве. Размер и местоположение фигур определяются их координатами. Каждая координата имеет значение ординаты X и Y, определяющее ее местоположение на плоскости. Фигуры строятся из точек или отрезков линий, при этом точки задаются одной координатой, а отрезки линий — двумя координатами.

Координаты могут содержать необязательные значения ординат Z и M. Ордината Z часто используется для представления высоты. Ордината M содержит значение меры, которое может представлять время или расстояние. Если значения Z или M присутствуют в значении геометрии, они должны быть определены для каждой точки в геометрии. Если геометрия имеет ординаты Z или M, то размерность координат составляет 3D; если она имеет и Z, и M, то размерность координат составляет 4D.

Значения геометрии связаны с пространственной системой отсчета, указывающей систему координат, в которую она встроена.

Пространственная система отсчета идентифицируется номером SRID геометрии. Единицы осей X и Y определяются пространственной системой отсчета. В плоских системах отсчета координаты X и Y обычно представляют восточное и северное направление, тогда как в геодезических системах они представляют долготу и широту. SRID 0 представляет бесконечную декартову плоскость без единиц, назначенных ее осям.

Геометрическое измерение является свойством геометрических типов. Точечные типы имеют размерность 0, линейные типы имеют размерность 1, а полигональные типы имеют размерность 2. Коллекции имеют размерность максимального элемента.

Значение геометрии может быть пустым. Пустые значения не содержат вершин (для атомарных типов геометрии) или элементов (для коллекций).

## <img src="../docs/assets/images/com18.3.1/postgis/media/image16.png" style="width:0.28in;height:0.14in" /> Поддерживаемые типы географических данных

## Point

Точка — это одномерная геометрия, которая представляет собой одно местоположение в координатном пространстве:

> POINT (1 2)
>
> POINT Z (1 2 3)
>
> POINT ZM (1 2 3 4)

## LineString

> LineString — это одномерная линия, образованная непрерывной последовательностью линейных сегментов. Каждый линейный сегмент определяется двумя точками, при этом конечная точка одного сегмента образует начальную точку следующего сегмента.
>
> LINESTRING (1 2, 3 4, 5 6)

## LinearRing

LinearRing — это замкнутый на себя круг. Первая и последняя точки должны быть равны, а линия не должна самопересекаться.

> LINEARRING (0 0 0, 4 0 0, 4 4 0, 0 4 0, 0 0 0)

## Polygon

Полигон — это двумерная плоская область, ограниченная внешней границей (оболочкой) и нулем, а также внутренними границами (отверстиями). Каждая граница — это LinearRing.

> POLYGON ((0 0 0,4 0 0,4 4 0,0 4 0,0 0 0),(1 1 0,2 1 0,2 2 0,1 2

0,1 1 0))

## MultiPoint

> MultiPoint — это совокупность точек.
>
> MULTIPOINT ( (0 0), (1 2) )

## MultiLineString

> MultiLineString — это коллекция LineString.
>
> MULTILINESTRING ( (0 0,1 1,1 2), (2 3,3 2,5 4) )

## MultiPolygon

Мультиполигон — это набор неперекрывающихся, несмежных полигонов. Полигоны в наборе могут соприкасаться только в конечном числе точек.

> MULTIPOLYGON (((1 5, 5 5, 5 1, 1 1, 1 5)), ((6 5, 9 1, 6 1, 6

5)))

## GeometryCollection

> GeometryCollection — это неоднородная (смешанная) коллекция геометрий.
>
> GEOMETRYCOLLECTION ( POINT(2 3), LINESTRING(2 3, 3 4))

## PolyhedralSurface

PolyhedralSurface — это непрерывный набор фрагментов или граней, которые имеют некоторые общие ребра. Каждый фрагмент — это плоский полигон. Если координаты полигона имеют ординаты Z, то поверхность является трехмерной.

> POLYHEDRALSURFACE Z (
>
> ((0 0 0, 0 0 1, 0 1 1, 0 1 0, 0 0 0)),

<table>
<colgroup>
<col style="width: 44%" />
<col style="width: 5%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">((0 0 0, 0 1 0, 1</th>
<th style="text-align: center;">1</th>
<th style="text-align: center;"><blockquote>
<p>0, 1 0 0, 0 0 0)),</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">((0 0 0, 1 0 0, 1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;"><blockquote>
<p>1, 0 0 1, 0 0 0)),</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;">((1 1 0, 1 1 1, 1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;"><blockquote>
<p>1, 1 0 0, 1 1 0)),</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;">((0 1 0, 0 1 1, 1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;"><blockquote>
<p>1, 1 1 0, 0 1 0)),</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;">((0 0 1, 1 0 1, 1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;"><blockquote>
<p>1, 0 1 1, 0 0 1)) )</p>
</blockquote></td>
</tr>
</tbody>
</table>

## <img src="../docs/assets/images/com18.3.1/postgis/media/image17.png" style="width:0.28in;height:0.14in" /> Пример создания таблицы с географическими данными

Создать таблицу для хранения географических данных можно с помощью SQL-оператора CREATE TABLE со столбцом типа geography:

CREATE TABLE global_points ( id SERIAL PRIMARY KEY,

name VARCHAR(64),

location geography(POINT,4326)

> );

## <img src="../docs/assets/images/com18.3.1/postgis/media/image18.png" style="width:0.28in;height:0.14in" /> Поддерживаемые типы пространственных данных

## box2d

box2d — это тип пространственных данных PostGIS, используемый для представления двумерный ограничивающий прямоугольник, заключающий в себе геометрию или коллекцию геометрий.

Представление содержит значения минимальное и максимальное значения экстентов по координатам X и Y: xmin, ymin, xmax, ymax. Например:

> BOX(1 2,5 6)

## box3d

box3d — это тип пространственных данных PostGIS, используемый для представления трехмерный ограничивающий прямоугольник, заключающий в себе геометрию или коллекцию геометрий.

Представление содержит значения минимальное и максимальное значения экстентов по координатам X,Y,Z: xmin, ymin, zmin, xmax, ymax, zmax. Например:

> BOX3D(1 2 3,5 6 5)

## geometry

geometry — это фундаментальный тип пространственных данных PostGIS, используемый для представления объекта в плоских (евклидовых) системах координат.

Все пространственные операции с геометрией используют единицы измерения системы пространственной привязки, в которой находится геометрия.

## geometry_dump

> geometry_dump — составной тип данных, содержащий поля:

- geom - геометрия, представляющая компонент выгруженной геометрии. Тип геометрии зависит от исходной функции.

- path\[\] - целочисленный массив, который определяет путь перехода к компоненту в пределах выгруженной геометрии. Массив путей отсчитывается от 1 (т.е. является первым элементом geompath\[1\]).

## geography

Это тип пространственных данных, используемый для представления объекта в геодезических системах координат. Геодезические системы координат моделируют Землю с помощью эллипсоида.

Пространственные операции по типу geography дают более точные результаты с учетом эллипсоидальной модели.

# ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ

<table>
<colgroup>
<col style="width: 22%" />
<col style="width: 77%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>БД</p>
</blockquote></th>
<th><blockquote>
<p>База данных</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>ГИС</p>
</blockquote></td>
<td><blockquote>
<p>Геоинформационная система</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ОС</p>
</blockquote></td>
<td><blockquote>
<p>Операционная система</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>СУБД</p>
</blockquote></td>
<td><blockquote>
<p>Система управления базами данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>DEB</p>
</blockquote></td>
<td><blockquote>
<p>Формат пакетов программного обеспечения ОС на основе GNU/Linux</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>OGC</p>
</blockquote></td>
<td><blockquote>
<p>Open Geospatial Consortium, организация по стандартизации использования ГИС</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>RPM</p>
</blockquote></td>
<td><blockquote>
<p>Формат пакетов программного обеспечения ОС на основе Red Hat Linux</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SRID</p>
</blockquote></td>
<td><blockquote>
<p>Spatial Reference Identifier, идентификатор, соответствующий определенной системе координат</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SQL</p>
</blockquote></td>
<td><blockquote>
<p>Язык управления данными в СУБД</p>
</blockquote></td>
</tr>
</tbody>
</table>

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 12%" />
<col style="width: 71%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>SQL</p>
</blockquote></th>
<th><blockquote>
<p>–</p>
</blockquote></th>
<th><blockquote>
<p>Structured Query Language</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>БД</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>База данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ОС</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Операционная система</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>СУБД</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Система управления базами данных</p>
</blockquote></td>
</tr>
</tbody>
</table>

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
<th colspan="10" style="text-align: center;"><blockquote>
<p>Лист регистрации изменений</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2"><blockquote>
<p>Изм.</p>
</blockquote></td>
<td colspan="4"><blockquote>
<p>Номера листов (страниц)</p>
</blockquote></td>
<td rowspan="2" style="text-align: center;"><blockquote>
<p>Всего листов (страниц) в документе</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>Номер документа</p>
</blockquote></td>
<td rowspan="2" style="text-align: center;"><blockquote>
<p>Входящий номер сопроводите льного документа и</p>
<p>дата</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>Подпись</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>Дата</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>измене нных</p>
</blockquote></td>
<td><blockquote>
<p>замене нных</p>
</blockquote></td>
<td><blockquote>
<p>новых</p>
</blockquote></td>
<td><blockquote>
<p>аннулир ованных</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td style="text-align: center;"></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
