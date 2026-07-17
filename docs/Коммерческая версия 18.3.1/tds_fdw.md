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
<p><strong>Руководство по настройке. Часть 20. Обеспечение работы с СУБД MS SQL Server.</strong></p>
<p><strong>Компонент «TDS_FDW»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-20</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 17</p>
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

> **АННОТАЦИЯ**
>
> В документе приведены сведения, необходимые для установки и эксплуатации компонента «TDS_FDW» (далее по тексту – «компонент» или TDS_FDW), предназначенного для миграции БД на платформе Microsoft SQL Server в СУБД «Jatoba» и прямой доступ к СУБД на платформе Microsoft SQL Server (далее – MS SQL) из СУБД
>
> «Jatoba».
>
> Настоящее руководство предназначено для администраторов СУБД. Версия компонента — 2.0.
>
> Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/tds_fdw/media/image1.png" style="width:0.25139in;height:0.25139in" />**Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/tds_fdw/media/image2.png" style="width:0.25in;height:0.24928in" />**Дополнительная информация** – указания, позволяющие упростить работу с изделием
>
> **СОДЕРЖАНИЕ**

1.  1.  
2.  1.  
    2.  
3.  1.  
    2.  
    3.  
    4.  
    5.  
    6.  
4.  

[Назначение компонента 4](#назначение-компонента)[Условия применения 5](#условия-применения)[Установка и настройка 6](#установка-и-настройка)[Установка компонента «TDS_FDW» в ОС GNU/Linux 6](#установка-компонента-tds_fdw-в-ос-gnulinux)[Установка расширения «TDS_FDW» 8](#установка-расширения-tds_fdw)[Функциональные возможности компонента 9](#функциональные-возможности-компонента)[Создание внешнего сервера 9](#создание-внешнего-сервера)[Создание внешней таблицы 10](#создание-внешней-таблицы)[Задание сопоставления пользователей 12](#задание-сопоставления-пользователей)[Импорт внешней схемы 12](#импорт-внешней-схемы)[Определение локальных переменных 12](#определение-локальных-переменных)[Пример использования компонента 13](#пример-использования-компонента)[Удаление компонента 15](#удаление-компонента)[Перечень сокращений 16](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент «TDS_FDW» предназначен для импорта данных из БД MS SQL в СУБД «Jatoba», который помогает сопоставить типы данных.
>
> Сопоставляемые типы данных приведены в таблице [1.1](#_bookmark1). <span id="_bookmark1" class="anchor"></span>Таблица 1.1 – Сопоставляемые типы данных

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>MS SQL</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>СУБД «Jatoba»</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>bingint</p>
</blockquote></td>
<td><blockquote>
<p>bingint</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>integer</p>
</blockquote></td>
<td><blockquote>
<p>integer</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>smallint</p>
</blockquote></td>
<td><blockquote>
<p>Smallint</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Real</p>
</blockquote></td>
<td><blockquote>
<p>Real</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Numeric(18,0)</p>
</blockquote></td>
<td><blockquote>
<p>Numeric(18,0)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Binary(10)</p>
</blockquote></td>
<td><blockquote>
<p>Bytea</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Bit</p>
</blockquote></td>
<td><blockquote>
<p>Smallint</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Char(8)</p>
</blockquote></td>
<td><blockquote>
<p>Character(8)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>nchar(8)</p>
</blockquote></td>
<td><blockquote>
<p>Character(8)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Float</p>
</blockquote></td>
<td><blockquote>
<p>Double precision</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Decimal(18,0)</p>
</blockquote></td>
<td><blockquote>
<p>Numeric(18,0)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Ntext</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Nvarchar(8)</p>
</blockquote></td>
<td><blockquote>
<p>Character varying(8)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Date</p>
</blockquote></td>
<td><blockquote>
<p>Date</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Datetime</p>
</blockquote></td>
<td><blockquote>
<p>Timestamp without time zone</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Time</p>
</blockquote></td>
<td><blockquote>
<p>Time without time zone</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Timestamp</p>
</blockquote></td>
<td><blockquote>
<p>Bytea</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Money</p>
</blockquote></td>
<td><blockquote>
<p>Money</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Tinyint</p>
</blockquote></td>
<td><blockquote>
<p>Smallint</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Smallmoney</p>
</blockquote></td>
<td><blockquote>
<p>money</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Условия применения

> <img src="../docs/assets/images/com18.3.1/tds_fdw/media/image1.png" style="width:0.25321in;height:0.25208in" /><img src="../docs/assets/images/com18.3.1/tds_fdw/media/image1.png" style="width:0.25225in;height:0.25208in" />Компонент «TDS_FDW» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>В текущей реализации компонента не поддерживается управление через компонент пользовательского веб-интерфейса для администраторов</p>
<p>«Jatoba data safe».</p>
<p>Ограничений по совместимости с другими компонентами нет.</p>
</blockquote></td>
</tr>
</tbody>
</table>

# УСТАНОВКА И НАСТРОЙКА

> Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

## Установка компонента «TDS_FDW» в ОС GNU/Linux

> Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо доустановить.
>
> Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

> <img src="../docs/assets/images/com18.3.1/tds_fdw/media/image1.png" style="width:0.25138in;height:0.25125in" />Перед установкой компонента «TDS_FDW» в ОС GNU/Linux на базе Debian 10 необходимо добавить архивный репозиторий в список доступных репозиториев ОС при помощи команды:
>
> echo "deb <http://archive.debian.org/debian> buster main" \> /etc/apt/sources.list
>
> Перед установкой компонента необходимо установить библиотеки:

- «libsybdb5»;

- «freetds-dev»;

- «freetds-common».

> Для систем на основе пакетного менеджера APT команда установки библиотек следующая:
>
> apt-get install libsybdb5 freetds-dev freetds-common
>
> Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента
>
> осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

> apt-get install jatoba5-tds-fdw

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:

> yum install jatoba5-tds-fdw
>
> Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

<img src="../docs/assets/images/com18.3.1/tds_fdw/media/image3.png" style="width:7.11061in;height:3.18719in" />

> apt-get install jatoba5-tds-fdw
>
> Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется.
>
> Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Установка расширения «TDS_FDW»

> Расширение устанавливается при помощи SQL-команды:

<img src="../docs/assets/images/com18.3.1/tds_fdw/media/image4.png" style="width:7.11414in;height:2.015in" />

> CREATE EXTENSION tds_fdw;
>
> Рисунок 2.1 – Команда установки расширения

# ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

## Создание внешнего сервера

> Внешний сервер создается командой:
>
> CREATE SERVER mssql_svr
>
> FOREIGN DATA WRAPPER tds_fdw
>
> OPTIONS (servername '127.0.0.1', port '1433', database
>
> 'tds_fdw_test', tds_version '7.1');
>
> Параметры команды приведены в таблице [3.1](#_bookmark8).
>
> <span id="_bookmark8" class="anchor"></span>Таблица 3.1 – Параметры команды создания внешнего сервера

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 19%" />
<col style="width: 54%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Название параметра</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обязательный</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>servername</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>адрес сервера внешней базы данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>port</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>порт внешней базы данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>database</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>название внешней базы данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>dbuse</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>если параметр установлен в «0» (значение по умолчанию), подключение идет к базе данных, указанной в параметр «database»; если в «1» — подключение идет к базе данных, полученной</p>
<p>через вызов метода «dbuse()»</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>language</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>язык сообщений и локаль для даты (по</p>
<p>умолчанию — «us_english»)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>tds_version</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>версия протокола TDS</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>msg_handler</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>функция, использующаяся обработчиком сообщений TDS: «blackhole» (значение по умолчанию, сообщения TDS будут игнорироваться), «notice» (сообщения TDS будут выводиться как уведомления СУБД</p>
<p>«Jatoba»)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>fdw_startup_cost</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>числовое значение стоимости запуска чтения</p>
<p>информации с внешнего сервера</p>
</blockquote></td>
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
<th><blockquote>
<p><strong>Название параметра</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обязательный</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>fdw_tuple_cost</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>числовое значение стоимости чтения строк на</p>
<p>внешнем сервере</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Создание внешней таблицы

> Внешнюю таблицу можно определить четырьмя способами:

1)  С помощью названия таблицы:

> CREATE FOREIGN TABLE mssql_table ( id integer,
>
> data varchar) SERVER mssql_svr
>
> OPTIONS (table_name 'dbo.mytable', row_estimate_method 'showplan_all');

2)  С помощью названия схемы и названия таблицы:

> CREATE FOREIGN TABLE mssql_table ( id integer,
>
> data varchar) SERVER mssql_svr
>
> OPTIONS (schema_name 'dbo', table_name 'mytable', row_estimate_method 'showplan_all');

3)  С помощью запроса:

> CREATE FOREIGN TABLE mssql_table ( id integer,
>
> data varchar) SERVER mssql_svr
>
> OPTIONS (query 'SELECT \* FROM dbo.mytable', row_estimate_method 'showplan_all');

4)  Указывая название столбца:

> CREATE FOREIGN TABLE mssql_table (
>
> id integer,
>
> col2 varchar OPTIONS (column_name 'data')) SERVER mssql_svr
>
> OPTIONS (schema_name 'dbo', table_name 'mytable', row_estimate_method 'showplan_all');
>
> Параметры команды приведены в таблице [3.2](#_bookmark10).
>
> <span id="_bookmark10" class="anchor"></span>Таблица 3.2 – Параметры команды создания внешней таблицы

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 22%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Название параметра</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Обязательный</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>query</p>
</blockquote></td>
<td><blockquote>
<p>+ (если не указан параметр</p>
<p>«table_name»)</p>
</blockquote></td>
<td><blockquote>
<p>запрос, выполняющийся на внешней таблице</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>schema_name</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>название схемы (не обязательно указывать, если схема была указана в названии таблицы</p>
<p>в параметре «query» или «table_name»)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>table_name</p>
</blockquote></td>
<td><blockquote>
<p>+ (если не указан</p>
<p>параметр «query»)</p>
</blockquote></td>
<td><blockquote>
<p>название внешней таблицы</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>match_column_names</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>сопоставлять ли названия столбцов таблицы</p>
<p>Jatoba и внешней таблицы по названию (по умолчанию сопоставление идет по порядку)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>use_remote_estimate</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>оценивать ли размер внешней таблицы через операцию, определяемую параметром</p>
<p>«row_estimate_method» (если нет, то</p>
<p>используется параметр «local_tuple_estimate»</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>local_tuple_estimate</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>числовая оценка количества строк во</p>
<p>внешней таблице</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>row_estimate_method</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>метод, использующийся для оценки размера внешней таблицы: «execute» (по умолчанию) выполняет запрос к внешней таблице,</p>
<p>«showplan_all» получает примерное количество строк используя функцию MS</p>
<p>SQL «SET SHOWPLAN_ALL»</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Задание сопоставления пользователей

> Соответствие пользователя задается командой:
>
> CREATE USER MAPPING FOR postgres
>
> SERVER mssql_svr
>
> OPTIONS (username 'sa', password '');
>
> Параметры команды приведены в таблице [3.3](#_bookmark12).
>
> <span id="_bookmark12" class="anchor"></span>Таблица 3.3 – Параметры команды задания сопоставления пользователей

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 22%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Название параметра</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Обязательный</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>username</p>
</blockquote></td>
<td><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>имя пользователя внешнего сервера</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>password</p>
</blockquote></td>
<td><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>пароль пользователя внешнего сервера</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Импорт внешней схемы

> Используется команда
>
> IMPORT FOREIGN SCHEMA dbo
>
> EXCEPT (mssql_table) FROM SERVER mssql_svr INTO public
>
> OPTIONS (import_default 'true');
>
> Параметры команды приведены в таблице [3.4](#_bookmark14).
>
> <span id="_bookmark14" class="anchor"></span>Таблица 3.4 – Параметры команды импорта внешней схемы

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 22%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Название параметра</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Обязательный</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>import_default</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>включать ли выражения столбца DEFAULT в определения внешних таблиц (по умолчанию</p>
<p>выключено)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>import_not_null</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>включать ли ограничения столбца NOT NULL в определения внешних таблиц (по</p>
<p>умолчанию включено)</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Определение локальных переменных

> Используется следующая команда:
>
> SET tds_fdw.show_finished_memory_stats=1;
>
> Локальные переменные, использующиеся компонентом, приведены в таблице [3.5](#_bookmark16).
>
> <span id="_bookmark16" class="anchor"></span>Таблица 3.5 – Локальные переменные компонента «TDS_FDW»

<table>
<colgroup>
<col style="width: 44%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Название</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>tds_fdw.show_before_row_memory_stats</p>
</blockquote></td>
<td><blockquote>
<p>выводить статистику контекста памяти в журнал</p>
<p>СУБД «Jatoba» перед чтением каждой строки</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>tds_fdw.show_after_row_memory_stats</p>
</blockquote></td>
<td><blockquote>
<p>выводить статистику контекста памяти в журнал</p>
<p>СУБД «Jatoba» после чтения каждой строки</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>tds_fdw.show_finished_memory_stats</p>
</blockquote></td>
<td><blockquote>
<p>выводить статистику контекста памяти в журнал</p>
<p>СУБД «Jatoba» после завершения запроса</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Пример использования компонента

1.  Создать расширение с помощью команды:

> CREATE EXTENSION tds_fdw;

2.  В СУБД «Jatoba» создать объект типа «FOREIGN SERVER».

> Это специальный объект, который позволяет через расширение tds_fdw получать доступ к данным MS SQL.
>
> CREATE SERVER mssql_srv FOREIGN DATA WRAPPER tds_fdw
>
> OPTIONS (servername ‘192.168.243.223’), port ‘1433’, database ‘aszp’;

3.  Создать маппинг для созданного сервера, т.е. от имени и с правами какого пользователя будет проводиться подключение к MS SQL:

> CREATE USER MAPPING FOR postgres
>
> SERVER mssql_srv
>
> OPTIONS (user ‘slog’, password ‘p@ssword’);

4.  Импортировать исходную схему «dbo» MS SQL в схему «public» СУБД «Jatoba»:

> IMPORT FOREIGN SCHEMA dbo FROM SERVER “mssql_srv” INTO public;
>
> В результате станет доступным просмотр созданных таблиц и импорт данных.

# УДАЛЕНИЕ КОМПОНЕНТА

> Удаление компонента проводится SQL-командой:
>
> DROP EXTENSION tds_fdw;

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 10%" />
<col style="width: 71%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>MS SQL</p>
</blockquote></th>
<th><blockquote>
<p>–</p>
</blockquote></th>
<th><blockquote>
<p>Microsoft SQL Server</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>SQL</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Structured Query Language</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>TDS</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Tabular Data Stream</p>
</blockquote></td>
</tr>
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
