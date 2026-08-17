---
title: Компонент «TDS_FDW»
---

# Компонент «TDS_FDW». Обеспечение работы с СУБД MS SQL Server.

**АННОТАЦИЯ**

В документе приведены сведения, необходимые для установки и эксплуатации компонента «TDS_FDW» (далее по тексту – «компонент» или TDS_FDW), предназначенного для миграции БД на платформе Microsoft SQL Server в СУБД «Jatoba» и прямой доступ к СУБД на платформе Microsoft SQL Server (далее – MS SQL) из СУБД «Jatoba».

Настоящее руководство предназначено для администраторов СУБД.

Версия компонента — 2.0.

## НАЗНАЧЕНИЕ КОМПОНЕНТА

Компонент «TDS_FDW» предназначен для импорта данных из БД MS SQL в СУБД «Jatoba», который помогает сопоставить типы данных.

Сопоставляемые типы данных приведены в таблице [1.1](#_bookmark1). <span id="_bookmark1" class="anchor"></span>Таблица 1.1 – Сопоставляемые типы данных

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>MS SQL</strong></p>
</th>
<th>
<p><strong>СУБД «Jatoba»</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>bingint</p>
</td>
<td>
<p>bingint</p>
</td>
</tr>
<tr>
<td>
<p>integer</p>
</td>
<td>
<p>integer</p>
</td>
</tr>
<tr>
<td>
<p>smallint</p>
</td>
<td>
<p>Smallint</p>
</td>
</tr>
<tr>
<td>
<p>Real</p>
</td>
<td>
<p>Real</p>
</td>
</tr>
<tr>
<td>
<p>Numeric(18,0)</p>
</td>
<td>
<p>Numeric(18,0)</p>
</td>
</tr>
<tr>
<td>
<p>Binary(10)</p>
</td>
<td>
<p>Bytea</p>
</td>
</tr>
<tr>
<td>
<p>Bit</p>
</td>
<td>
<p>Smallint</p>
</td>
</tr>
<tr>
<td>
<p>Char(8)</p>
</td>
<td>
<p>Character(8)</p>
</td>
</tr>
<tr>
<td>
<p>nchar(8)</p>
</td>
<td>
<p>Character(8)</p>
</td>
</tr>
<tr>
<td>
<p>Float</p>
</td>
<td>
<p>Double precision</p>
</td>
</tr>
<tr>
<td>
<p>Decimal(18,0)</p>
</td>
<td>
<p>Numeric(18,0)</p>
</td>
</tr>
<tr>
<td>
<p>Ntext</p>
</td>
<td>
<p>Text</p>
</td>
</tr>
<tr>
<td>
<p>Text</p>
</td>
<td>
<p>Text</p>
</td>
</tr>
<tr>
<td>
<p>Nvarchar(8)</p>
</td>
<td>
<p>Character varying(8)</p>
</td>
</tr>
<tr>
<td>
<p>Date</p>
</td>
<td>
<p>Date</p>
</td>
</tr>
<tr>
<td>
<p>Datetime</p>
</td>
<td>
<p>Timestamp without time zone</p>
</td>
</tr>
<tr>
<td>
<p>Time</p>
</td>
<td>
<p>Time without time zone</p>
</td>
</tr>
<tr>
<td>
<p>Timestamp</p>
</td>
<td>
<p>Bytea</p>
</td>
</tr>
<tr>
<td>
<p>Money</p>
</td>
<td>
<p>Money</p>
</td>
</tr>
<tr>
<td>
<p>Tinyint</p>
</td>
<td>
<p>Smallint</p>
</td>
</tr>
<tr>
<td>
<p>Smallmoney</p>
</td>
<td>
<p>money</p>
</td>
</tr>
</tbody>
</table>

### Условия применения

Компонент «TDS_FDW» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux.

:::warning Важная информация
Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!
:::

:::warning Важная информация
В текущей реализации компонента не поддерживается управление через компонент	пользовательского	веб-интерфейса	для	администраторов
«Jatoba data safe».

Ограничений по совместимости с другими компонентами нет.
:::

## УСТАНОВКА И НАСТРОЙКА

Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

### Установка компонента «TDS_FDW» в ОС GNU/Linux

Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо доустановить.

Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

:::warning Важная информация
Перед установкой компонента «TDS_FDW» в ОС GNU/Linux на базе Debian 10 необходимо добавить архивный репозиторий в список доступных репозиториев ОС при помощи команды:

```
echo "deb http://archive.debian.org/debian buster main" > /etc/apt/sources.list
```
:::

Перед установкой компонента необходимо установить библиотеки:

- «libsybdb5»;

- «freetds-dev»;

- «freetds-common».

Для систем на основе пакетного менеджера APT команда установки библиотек следующая:

```
apt-get install libsybdb5 freetds-dev freetds-common
```

Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента

осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

```
apt-get install jatoba5-tds-fdw
```

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:

```shell
yum install jatoba5-tds-fdw
```

Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

```shell
apt-get install jatoba5-tds-fdw
```

![](@site/docs/assets/images/com18.3.1/tds_fdw/media/image3.png)


Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется.

Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

### Установка расширения «TDS_FDW»

Расширение устанавливается при помощи SQL-команды:

```sql
CREATE EXTENSION tds_fdw;
```

![](@site/docs/assets/images/com18.3.1/tds_fdw/media/image4.png)



Рисунок 2.1 – Команда установки расширения

## ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

### Создание внешнего сервера

Внешний сервер создается командой:

```sql
CREATE SERVER mssql_svr
    FOREIGN DATA WRAPPER tds_fdw
    OPTIONS (servername '127.0.0.1', port '1433', database 'tds_fdw_test', tds_version '7.1');
```

Параметры команды приведены в таблице [3.1](#_bookmark8).

<span id="_bookmark8" class="anchor"></span>Таблица 3.1 – Параметры команды создания внешнего сервера

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 19%" />
<col style="width: 54%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название параметра</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обязательный</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>servername</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td>
<p>адрес сервера внешней базы данных</p>
</td>
</tr>
<tr>
<td>
<p>port</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td>
<p>порт внешней базы данных</p>
</td>
</tr>
<tr>
<td>
<p>database</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>название внешней базы данных</p>
</td>
</tr>
<tr>
<td>
<p>dbuse</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td style="text-align: left;">
<p>если параметр установлен в «0» (значение по умолчанию), подключение идет к базе данных, указанной в параметр «database»; если в «1» — подключение идет к базе данных, полученной</p>
<p>через вызов метода «dbuse()»</p>
</td>
</tr>
<tr>
<td>
<p>language</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>язык сообщений и локаль для даты (по</p>
<p>умолчанию — «us_english»)</p>
</td>
</tr>
<tr>
<td>
<p>tds_version</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>версия протокола TDS</p>
</td>
</tr>
<tr>
<td>
<p>msg_handler</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td style="text-align: left;">
<p>функция, использующаяся обработчиком сообщений TDS: «blackhole» (значение по умолчанию, сообщения TDS будут игнорироваться), «notice» (сообщения TDS будут выводиться как уведомления СУБД</p>
<p>«Jatoba»)</p>
</td>
</tr>
<tr>
<td>
<p>fdw_startup_cost</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>числовое значение стоимости запуска чтения</p>
<p>информации с внешнего сервера</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 19%" />
<col style="width: 54%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название параметра</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обязательный</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>fdw_tuple_cost</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>числовое значение стоимости чтения строк на</p>
<p>внешнем сервере</p>
</td>
</tr>
</tbody>
</table>

### Создание внешней таблицы

Внешнюю таблицу можно определить четырьмя способами:

1)  С помощью названия таблицы:

```sql
CREATE FOREIGN TABLE mssql_table ( 
    id integer, 
    data varchar) 
    SERVER mssql_svr 
    OPTIONS (table_name 'dbo.mytable', row_estimate_method 'showplan_all');
```

2)  С помощью названия схемы и названия таблицы:

```sql
CREATE FOREIGN TABLE mssql_table ( 
    id integer,
    data varchar) 
    SERVER mssql_svr
    OPTIONS (schema_name 'dbo', table_name 'mytable', row_estimate_method 'showplan_all');
```

3)  С помощью запроса:

```sql
CREATE FOREIGN TABLE mssql_table ( 
    id integer,
    data varchar) 
    SERVER mssql_svr
    OPTIONS (query 'SELECT * FROM dbo.mytable', row_estimate_method 'showplan_all');
```

4)  Указывая название столбца:

```sql
CREATE FOREIGN TABLE mssql_table (
    id integer,
    col2 varchar OPTIONS (column_name 'data')) 
    SERVER mssql_svr
    OPTIONS (schema_name 'dbo', table_name 'mytable', row_estimate_method 'showplan_all');
```

Параметры команды приведены в таблице [3.2](#_bookmark10).

<span id="_bookmark10" class="anchor"></span>Таблица 3.2 – Параметры команды создания внешней таблицы

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 22%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название параметра</strong></p>
</th>
<th>
<p><strong>Обязательный</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>query</p>
</td>
<td>
<p>+ (если не указан параметр</p>
<p>«table_name»)</p>
</td>
<td>
<p>запрос, выполняющийся на внешней таблице</p>
</td>
</tr>
<tr>
<td>
<p>schema_name</p>
</td>
<td>
<p>–</p>
</td>
<td>
<p>название схемы (не обязательно указывать, если схема была указана в названии таблицы</p>
<p>в параметре «query» или «table_name»)</p>
</td>
</tr>
<tr>
<td>
<p>table_name</p>
</td>
<td>
<p>+ (если не указан</p>
<p>параметр «query»)</p>
</td>
<td>
<p>название внешней таблицы</p>
</td>
</tr>
<tr>
<td>
<p>match_column_names</p>
</td>
<td>
<p>–</p>
</td>
<td>
<p>сопоставлять ли названия столбцов таблицы</p>
<p>Jatoba и внешней таблицы по названию (по умолчанию сопоставление идет по порядку)</p>
</td>
</tr>
<tr>
<td>
<p>use_remote_estimate</p>
</td>
<td>
<p>–</p>
</td>
<td>
<p>оценивать ли размер внешней таблицы через операцию, определяемую параметром</p>
<p>«row_estimate_method» (если нет, то</p>
<p>используется параметр «local_tuple_estimate»</p>
</td>
</tr>
<tr>
<td>
<p>local_tuple_estimate</p>
</td>
<td>
<p>–</p>
</td>
<td>
<p>числовая оценка количества строк во</p>
<p>внешней таблице</p>
</td>
</tr>
<tr>
<td>
<p>row_estimate_method</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>метод, использующийся для оценки размера внешней таблицы: «execute» (по умолчанию) выполняет запрос к внешней таблице,</p>
<p>«showplan_all» получает примерное количество строк используя функцию MS</p>
<p>SQL «SET SHOWPLAN_ALL»</p>
</td>
</tr>
</tbody>
</table>

### Задание сопоставления пользователей

Соответствие пользователя задается командой:

```sql
CREATE USER MAPPING FOR postgres
    SERVER mssql_svr
    OPTIONS (username 'sa', password '');
```

Параметры команды приведены в таблице [3.3](#_bookmark12).

<span id="_bookmark12" class="anchor"></span>Таблица 3.3 – Параметры команды задания сопоставления пользователей

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 22%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название параметра</strong></p>
</th>
<th>
<p><strong>Обязательный</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>username</p>
</td>
<td>
<p>+</p>
</td>
<td>
<p>имя пользователя внешнего сервера</p>
</td>
</tr>
<tr>
<td>
<p>password</p>
</td>
<td>
<p>+</p>
</td>
<td>
<p>пароль пользователя внешнего сервера</p>
</td>
</tr>
</tbody>
</table>

### Импорт внешней схемы

Используется команда

```sql
IMPORT FOREIGN SCHEMA dbo
    EXCEPT (mssql_table) 
    FROM SERVER mssql_svr 
    INTO public
    OPTIONS (import_default 'true');
```

Параметры команды приведены в таблице [3.4](#_bookmark14).

<span id="_bookmark14" class="anchor"></span>Таблица 3.4 – Параметры команды импорта внешней схемы

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 22%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название параметра</strong></p>
</th>
<th>
<p><strong>Обязательный</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>import_default</p>
</td>
<td>
<p>–</p>
</td>
<td>
<p>включать ли выражения столбца DEFAULT в определения внешних таблиц (по умолчанию</p>
<p>выключено)</p>
</td>
</tr>
<tr>
<td>
<p>import_not_null</p>
</td>
<td>
<p>–</p>
</td>
<td>
<p>включать ли ограничения столбца NOT NULL в определения внешних таблиц (по</p>
<p>умолчанию включено)</p>
</td>
</tr>
</tbody>
</table>

### Определение локальных переменных

Используется следующая команда:

```sql
SET tds_fdw.show_finished_memory_stats=1;
```

Локальные переменные, использующиеся компонентом, приведены в таблице [3.5](#_bookmark16).

<span id="_bookmark16" class="anchor"></span>Таблица 3.5 – Локальные переменные компонента «TDS_FDW»

<table>
<colgroup>
<col style="width: 44%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Название</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>tds_fdw.show_before_row_memory_stats</p>
</td>
<td>
<p>выводить статистику контекста памяти в журнал</p>
<p>СУБД «Jatoba» перед чтением каждой строки</p>
</td>
</tr>
<tr>
<td>
<p>tds_fdw.show_after_row_memory_stats</p>
</td>
<td>
<p>выводить статистику контекста памяти в журнал</p>
<p>СУБД «Jatoba» после чтения каждой строки</p>
</td>
</tr>
<tr>
<td>
<p>tds_fdw.show_finished_memory_stats</p>
</td>
<td>
<p>выводить статистику контекста памяти в журнал</p>
<p>СУБД «Jatoba» после завершения запроса</p>
</td>
</tr>
</tbody>
</table>

### Пример использования компонента

1.  Создать расширение с помощью команды:

```sql
CREATE EXTENSION tds_fdw;
```

2.  В СУБД «Jatoba» создать объект типа «FOREIGN SERVER».

Это специальный объект, который позволяет через расширение tds_fdw получать доступ к данным MS SQL.

```sql
CREATE SERVER mssql_srv 
    FOREIGN DATA WRAPPER tds_fdw
    OPTIONS (servername ‘192.168.243.223’), port ‘1433’, database ‘aszp’;
```

3.  Создать маппинг для созданного сервера, т.е. от имени и с правами какого пользователя будет проводиться подключение к MS SQL:

```sql
CREATE USER MAPPING FOR postgres
    SERVER mssql_srv
    OPTIONS (user ‘slog’, password ‘p@ssword’);
```

4.  Импортировать исходную схему «dbo» MS SQL в схему «public» СУБД «Jatoba»:

```sql
IMPORT FOREIGN SCHEMA dbo FROM SERVER “mssql_srv” INTO public;
```

В результате станет доступным просмотр созданных таблиц и импорт данных.

## УДАЛЕНИЕ КОМПОНЕНТА

Удаление компонента проводится SQL-командой:

```sql
DROP EXTENSION tds_fdw;
```

## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

| Сокращение | Расшифровка                      |
|------------|----------------------------------|
| SQL        | Structured Query Language        |
| TDS        | Tabular Data Stream              |
| БД         | База данных                      |
| ОС         | Операционная система             |
| СУБД       | Система управления базами данных |

