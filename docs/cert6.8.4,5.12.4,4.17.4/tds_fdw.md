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
<p><strong>Руководство по настройке. Часть 20. Обеспечение работы с СУБД MS SQL Server.<br />
Компонент «TDS_FDW»</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-20</strong></td>
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
<td colspan="2" style="text-align: center;">2024</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: right;">Литера О<sub>1</sub></td>
</tr>
</tbody>
</table>

**АННОТАЦИЯ**

В документе приведены сведения, необходимые для установки и эксплуатации компонента «TDS_FDW» (далее по тексту – «компонент» или TDS_FDW), предназначенного для миграции БД на платформе Microsoft SQL Server в СУБД «Jatoba» и прямой доступ к СУБД на платформе Microsoft SQL Server (далее – MS SQL) из СУБД «Jatoba».

Настоящее руководство предназначено для администраторов СУБД.

Версия компонента — 2.0.3.

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/tds_fdw/media/image1.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/tds_fdw/media/image2.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонента [4](#назначение-компонента)](#назначение-компонента)

[1.1. Условия применения [5](#условия-применения)](#условия-применения)

[2. Установка и настройка [6](#установка-и-настройка)](#установка-и-настройка)

[2.1. Установка компонента «TDS_FDW» в ОС GNU/Linux [6](#установка-компонента-tds_fdw-в-ос-gnulinux)](#установка-компонента-tds_fdw-в-ос-gnulinux)

[2.2. Установка расширения «TDS_FDW» [7](#установка-расширения-tds_fdw)](#установка-расширения-tds_fdw)

[3. Функциональные возможности компонента [8](#функциональные-возможности-компонента)](#функциональные-возможности-компонента)

[3.1. Создание внешнего сервера [8](#создание-внешнего-сервера)](#создание-внешнего-сервера)

[3.2. Создание внешней таблицы [9](#создание-внешней-таблицы)](#создание-внешней-таблицы)

[3.3. Задание сопоставления пользователей [11](#задание-сопоставления-пользователей)](#задание-сопоставления-пользователей)

[3.4. Импорт внешней схемы [11](#импорт-внешней-схемы)](#импорт-внешней-схемы)

[3.5. Определение локальных переменных [12](#определение-локальных-переменных)](#определение-локальных-переменных)

[3.6. Пример использования компонента [12](#пример-использования-компонента)](#пример-использования-компонента)

[4. Удаление компонента [14](#удаление-компонента)](#удаление-компонента)

[Перечень сокращений [15](#_Toc215497267)](#_Toc215497267)

# Назначение компонента

Компонент «TDS_FDW» предназначен для импорта данных из БД MS SQL в  
СУБД «Jatoba», который помогает сопоставить типы данных.

Сопоставляемые типы данных приведены в таблице Таблица 1.1.

| **MS SQL**    | **СУБД «Jatoba»**           |
|---------------|-----------------------------|
| bingint       | bingint                     |
| integer       | integer                     |
| smallint      | Smallint                    |
| Real          | Real                        |
| Numeric(18,0) | Numeric(18,0)               |
| Binary(10)    | Bytea                       |
| Bit           | Smallint                    |
| Char(8)       | Character(8)                |
| nchar(8)      | Character(8)                |
| Float         | Double precision            |
| Decimal(18,0) | Numeric(18,0)               |
| Ntext         | Text                        |
| Text          | Text                        |
| Nvarchar(8)   | Character varying(8)        |
| Date          | Date                        |
| Datetime      | Timestamp without time zone |
| Time          | Time without time zone      |
| Timestamp     | Bytea                       |
| Money         | Money                       |
| Tinyint       | Smallint                    |
| Smallmoney    | money                       |

Таблица 1.1 – Сопоставляемые типы данных

## Условия применения

Компонент «TDS_FDW» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/tds_fdw/media/image1.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;">Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/tds_fdw/media/image1.png" style="width:0.25139in;height:0.25139in" /></td>
<td><p>В текущей реализации компонента не поддерживается управление через компонент пользовательского веб-интерфейса для администраторов<br />
«Jatoba data safe».</p>
<p>Ограничений по совместимости с другими компонентами нет.</p></td>
</tr>
</tbody>
</table>

# Установка и настройка

Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

## Установка компонента «TDS_FDW» в ОС GNU/Linux

Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо доустановить.

Установку компонента возможно провести двумя способами:

1)  
2)  

> установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.Перед установкой компонента необходимо установить библиотеки:

- 
- 
- 

«libsybdb5»;«freetds-dev»;«freetds-common».Для систем на основе пакетного менеджера APT команда установки библиотек следующая:

> apt-get install libsybdb5 freetds-dev freetds-common

Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- 

> для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:apt-get install jatoba5-tds-fdw

- 

> для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:yum install jatoba5-tds-fdw

Отдельного уточнения требуют операционные системы ALT Linux.

- 

> ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:apt-get install jatoba5-tds-fdw

Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется.

Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Установка расширения «TDS_FDW»

Расширение устанавливается при помощи SQL-команды:

> CREATE EXTENSION tds_fdw;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/tds_fdw/media/image3.png" style="width:7.08597in;height:2.01042in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-07-13 07-05-26.png" />

Рисунок 2.1 – Команда установки расширения

# Функциональные возможности компонента

## Создание внешнего сервера

Внешний сервер создается командой:

CREATE SERVER mssql_svr

FOREIGN DATA WRAPPER tds_fdw

OPTIONS (servername '127.0.0.1', port '1433', database 'tds_fdw_test', tds_version '7.1');

Параметры команды приведены в таблице Таблица 3.1.

| **Название параметра** | **Обязательный** | **Описание** |
|----|:--:|----|
| servername | \+ | адрес сервера внешней базы данных |
| port | \+ | порт внешней базы данных |
| database | – | название внешней базы данных |
| dbuse | – | если параметр установлен в «0» (значение по умолчанию), подключение идет к базе данных, указанной в параметр «database»; если в «1» — подключение идет к базе данных, полученной через вызов метода «dbuse()» |
| language | – | язык сообщений и локаль для даты (по умолчанию — «us_english») |
| tds_version | – | версия протокола TDS |
| msg_handler | – | функция, использующаяся обработчиком сообщений TDS: «blackhole» (значение по умолчанию, сообщения TDS будут игнорироваться), «notice» (сообщения TDS будут выводиться как уведомления СУБД «Jatoba») |
| fdw_startup_cost | – | числовое значение стоимости запуска чтения информации с внешнего сервера |
| fdw_tuple_cost | – | числовое значение стоимости чтения строк на внешнем сервере |

Таблица 3.1 – Параметры команды создания внешнего сервера

## Создание внешней таблицы

Внешнюю таблицу можно определить четырьмя способами:

1)  

С помощью названия таблицы:CREATE FOREIGN TABLE mssql_table (

id integer,

data varchar)

SERVER mssql_svr

OPTIONS (table_name 'dbo.mytable', row_estimate_method 'showplan_all');

2)  

С помощью названия схемы и названия таблицы:CREATE FOREIGN TABLE mssql_table (

id integer,

data varchar)

SERVER mssql_svr

OPTIONS (schema_name 'dbo', table_name 'mytable', row_estimate_method 'showplan_all');

3)  

С помощью запроса:CREATE FOREIGN TABLE mssql_table (

id integer,

data varchar)

SERVER mssql_svr

OPTIONS (query 'SELECT \* FROM dbo.mytable', row_estimate_method 'showplan_all');

4)  

Указывая название столбца:CREATE FOREIGN TABLE mssql_table (

id integer,

col2 varchar OPTIONS (column_name 'data'))

SERVER mssql_svr

OPTIONS (schema_name 'dbo', table_name 'mytable', row_estimate_method 'showplan_all');

Параметры команды приведены в таблице Таблица 3.2.

| **Название параметра** | **Обязательный** | **Описание** |
|----|----|----|
| query | \+ (если не указан параметр «table_name») | запрос, выполняющийся на внешней таблице |
| schema_name | – | название схемы (не обязательно указывать, если схема была указана в названии таблицы в параметре «query» или «table_name») |
| table_name | \+ (если не указан параметр «query») | название внешней таблицы |
| match_column_names | – | сопоставлять ли названия столбцов таблицы Jatoba и внешней таблицы по названию (по умолчанию сопоставление идет по порядку) |
| use_remote_estimate | – | оценивать ли размер внешней таблицы через операцию, определяемую параметром «row_estimate_method» (если нет, то используется параметр «local_tuple_estimate» |
| local_tuple_estimate | – | числовая оценка количества строк во внешней таблице |
| row_estimate_method | – | метод, использующийся для оценки размера внешней таблицы: «execute» (по умолчанию) выполняет запрос к внешней таблице, «showplan_all» получает примерное количество строк используя функцию MS SQL «SET SHOWPLAN_ALL» |

Таблица 3.2 – Параметры команды создания внешней таблицы

## Задание сопоставления пользователей

Соответствие пользователя задается командой:

> CREATE USER MAPPING FOR postgres
>
> SERVER mssql_svr
>
> OPTIONS (username 'sa', password '');

Параметры команды приведены в таблице Таблица 3.3.

| **Название параметра** | **Обязательный** | **Описание** |
|----|----|----|
| username | \+ | имя пользователя внешнего сервера |
| password | \+ | пароль пользователя внешнего сервера |

Таблица 3.3 – Параметры команды задания сопоставления пользователей

## Импорт внешней схемы

Используется команда

> IMPORT FOREIGN SCHEMA dbo
>
> EXCEPT (mssql_table)
>
> FROM SERVER mssql_svr
>
> INTO public
>
> OPTIONS (import_default 'true');

Параметры команды приведены в таблице Таблица 3.4.

| **Название параметра** | **Обязательный** | **Описание** |
|----|----|----|
| import_default | – | включать ли выражения столбца DEFAULT в определения внешних таблиц (по умолчанию выключено) |
| import_not_null | – | включать ли ограничения столбца NOT NULL в определения внешних таблиц (по умолчанию включено) |

Таблица 3.4 – Параметры команды импорта внешней схемы

## Определение локальных переменных

Используется следующая команда:

> SET tds_fdw.show_finished_memory_stats=1;

Локальные переменные, использующиеся компонентом, приведены в таблице Таблица 3.5.

| **Название** | **Описание** |
|----|----|
| tds_fdw.show_before_row_memory_stats | выводить статистику контекста памяти в журнал СУБД «Jatoba» перед чтением каждой строки |
| tds_fdw.show_after_row_memory_stats | выводить статистику контекста памяти в журнал СУБД «Jatoba» после чтения каждой строки |
| tds_fdw.show_finished_memory_stats | выводить статистику контекста памяти в журнал СУБД «Jatoba» после завершения запроса |

Таблица 3.5 – Локальные переменные компонента «TDS_FDW»

## Пример использования компонента

1.  

> Создать расширение с помощью команды:CREATE EXTENSION tds_fdw;

2.  

В СУБД «Jatoba» создать объект типа «FOREIGN SERVER».Это специальный объект, который позволяет через расширение tds_fdw получать доступ к данным MS SQL.

> CREATE SERVER mssql_srv
>
> FOREIGN DATA WRAPPER tds_fdw
>
> OPTIONS (servername ‘192.168.243.223’), port ‘1433’, database ‘aszp’;

3.  

> Создать маппинг для созданного сервера, т.е. от имени и с правами какого пользователя будет проводиться подключение к MS SQL:CREATE USER MAPPING FOR postgres
>
> SERVER mssql_srv
>
> OPTIONS (user ‘slog’, password ‘p@ssword’);

4.  

> Импортировать исходную схему «dbo» MS SQL в схему «public» СУБД «Jatoba»:IMPORT FOREIGN SCHEMA dbo FROM SERVER “mssql_srv” INTO public;

В результате станет доступным просмотр созданных таблиц и импорт данных.

# Удаление компонента

Удаление компонента проводится SQL-командой:

> DROP EXTENSION tds_fdw;

# 

| <span id="_Toc215497267" class="anchor"></span>Перечень сокращенийMS SQL | – | Microsoft SQL Server |
|:---|----|----|
| SQL | – | Structured Query Language |
| TDS | – | Tabular Data Stream |
| БД | – | База данных |
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
