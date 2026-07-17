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
<p><strong>Руководство по настройке. Часть 21.</strong></p>
<p><strong>Управление планами запросов. Компонент «ja_Plan_Manager»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-21</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 27</p>
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

# <img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image1.png" style="width:0.25344in;height:0.25208in" />АННОТАЦИЯ

> В документе приведены сведения, необходимые для установки и эксплуатации компонента «ja_Plan_Manager» (далее по тексту – компонент или ja_Plan_Manager), предназначенного для сохранения планов запросов, их дальнейшего использования, экспорта и импорта в базах данных (БД) и оптимизации.
>
> Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image1.png" style="width:0.25139in;height:0.25139in" />**Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image2.png" style="width:0.25in;height:0.2491in" />**Дополнительная информация** – указания, позволяющие упростить работу с изделием
>
> <img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image2.png" style="width:0.25209in;height:0.25208in" />Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра</p>
<p>6.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-6/bin»</p>
<p>Версия компонента – 1.2</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p>
</blockquote></td>
</tr>
</tbody>
</table>

# СОДЕРЖАНИЕ

1.  [Назначение компонента 4](#назначение-компонента)

    1.  [Условия применения 4](#условия-применения)

2.  [Установка компонента 5](#установка-компонента)

    1.  [Установка компонента «ja_Plan_Manager» в ОС GNU/Linux 5](#установка-компонента-ja_plan_manager-в-ос-gnulinux)

3.  [Настройка компонента 7](#настройка-компонента)

    1.  [Механизм работы компонента 7](#механизм-работы-компонента)

    2.  [Настройка конфигурационного файла postgresql.conf 8](#настройка-конфигурационного-файла-postgresql.conf)

    3.  [Установка расширения «ja_Plan_Manager» 9](#установка-расширения-ja_plan_manager)

4.  [Функциональные возможности компонента 11](#функциональные-возможности-компонента)

    1.  [Включение/отключение режима сохранения плана запросов 11](#включениеотключение-режима-сохранения-плана-запросов)

    2.  [Включение/отключение режима использования сохраненных планов запросов 12](#_bookmark12)

    3.  [Экспорт/импорт плана запросов 12](#_bookmark13)

        1.  [Экспорт 12](#_bookmark14)

        2.  [Импорт 13](#импорт)

    4.  [Просмотр сохраненных планов запросов 15](#просмотр-сохраненных-планов-запросов)

    5.  [Анализ планов запросов 15](#анализ-планов-запросов)

    6.  [Журналирование отработанных планов запросов 15](#журналирование-отработанных-планов-запросов)

5.  [Пример реализации функциональных возможностей компонента 17](#пример-реализации-функциональных-возможностей-компонента)

    1.  [Подготовка БД «test_db_a» 17](#подготовка-бд-test_db_a)

    2.  [Подготовка БД «test_db_b» 19](#подготовка-бд-test_db_b)

    3.  [Сознание плана запроса на test_db_a 20](#сознание-плана-запроса-на-test_db_a)

    4.  [Экспорт плана в каталог пользователя 22](#экспорт-плана-в-каталог-пользователя)

    5.  [Импорт плана в БД «test_db_b» 23](#импорт-плана-в-бд-test_db_b)

6.  [Удаление компонента 25](#удаление-компонента)

    1.  [Отключение режима использования плана запросов 25](#отключение-режима-использования-плана-запросов)

[Перечень сокращений 26](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент «ja_Plan_Manager» предназначен для сохранения, экспорта/импорта и подмены планов запросов в БД.

## Условия применения

> <img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image1.png" style="width:0.25225in;height:0.25208in" /><img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image1.png" style="width:0.25208in;height:0.25208in" />Компонент «ja_Plan_Manager» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционной системы GNU/Linux.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>В текущей реализации компонента не поддерживается управление через компонент пользовательского веб-интерфейса для администраторов</p>
<p>«Jatoba data safe», но поддерживается установка расширения.</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Ввиду различий в планировщике на разных мажорных версиях СУБД - импорт планов запросов необходимо выполнять в рамках той же версии, из которой выполнялся экспорт.</p>
<p>Ограничений по совместимости с другими компонентами нет.</p>
</blockquote></td>
</tr>
</tbody>
</table>

# УСТАНОВКА КОМПОНЕНТА

> Установка компонента должна производиться от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

## Установка компонента «ja_Plan_Manager» в ОС GNU/Linux

> Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо доустановить.
>
> Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

> Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

> apt-get install jatoba\<ver\>-ja-plan-manager

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:

> yum install jatoba\<ver\>-ja-plan-manager
>
> Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

> apt-get install jatoba\<ver\>-ja-plan-manager
>
> Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется.
>
> Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

# НАСТРОЙКА КОМПОНЕНТА

## Механизм работы компонента

> Компонент работает, используя принцип импорта/экспорта. Для экспорта используется домашний каталог пользователя postgres, либо указанный администратором СУБД.
>
> Сначала формируется план запросов в одной БД (test_db_a), он в виде файла экспортируется в папку обмена.
>
> Затем из папки обмена или через соединение dblink загружается в другую БД (test_db_b). Для этого необходимо:

- настроить конфигурационный файл для каждой БД;

- установить расширение для каждой БД;

- выполнить действия по экспорту/импорту плана запросов.

> Схема работы компонента представлена на рисунке [3.1](#_bookmark6).
>
> t est \_db \_a

export

> EXTEN SION
>
> ja_Plan \_M an ag er

db link

con nect ion

> / var/ lib / jat ob a/ \<ver\>/ dat a
>
> im p ort
>
> EXTEN SION
>
> ja_Plan \_M an ag er
>
> СУБ Д «Jat oba»
>
> t est \_db \_b
>
> <span id="_bookmark6" class="anchor"></span>Рисунок 3.1 – Схема работы компонента
>
> Компонент хранит планы запросов в таблице ja_plan_manager.jpm_plans. Столбцы таблицы описаны в таблице [3.1](#_bookmark7).
>
> <span id="_bookmark7" class="anchor"></span>Таблица 3.1 – Описание столбцов таблицы jpm_plans

<table>
<colgroup>
<col style="width: 29%" />
<col style="width: 70%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Название столбца</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>query</p>
</blockquote></td>
<td><blockquote>
<p>запрос (записывается в параметризованном виде)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>query_hash</p>
</blockquote></td>
<td><blockquote>
<p>хеш от запроса</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>query_id</p>
</blockquote></td>
<td><blockquote>
<p>идентификатор запроса (вычисляется только при включении</p>
<p>системной функции compute_query_id)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>enable</p>
</blockquote></td>
<td><blockquote>
<p>включение (true) / отключение (false) режима использования</p>
<p>плана запроса</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>plan</p>
</blockquote></td>
<td><blockquote>
<p>план запроса</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>plan_hash</p>
</blockquote></td>
<td><blockquote>
<p>хеш от плана запроса</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>description</p>
</blockquote></td>
<td><blockquote>
<p>описание (заполняется пользователем при необходимости)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>reloids</p>
</blockquote></td>
<td><blockquote>
<p>системный столбец, необходимый для работы компонента</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>index_reloids</p>
</blockquote></td>
<td><blockquote>
<p>системный столбец, необходимый для работы компонента</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Настройка конфигурационного файла postgresql.conf

> Установка расширения «ja_plan_manager» требует, чтобы в конфигурационном файле postgresql.conf были заданы параметры загрузки разделяемых библиотек, которые будут загружаться при запуске сервера СУБД.
>
> Файл расположен в каталоге:
>
> /var/lib/jatoba/\<ver\>/data/
>
> Откройте его в режиме редактирования и в разделе «Shared Library Preloading», для последующей загрузки расширения установите параметр:
>
> shared_preload_libraries = 'ja_plan_manager'
>
> Рисунок 3.2 – Параметры конфигурационного файла postgresql.conf
>
> Для применения параметров потребуется перезапустить СУБД и проверить статус демона «jatoba-5».
>
> systemctl restart jatoba-\<ver\> systemctl status jatoba-\<ver\>
>
> В случае, когда базы данных находятся в разных инсталляциях СУБД, вышеописанные действия проводятся в каждой из СУБД.

## Установка расширения «ja_Plan_Manager»

> После перезагрузки СУБД и загрузки расширения станет доступной установка расширения «ja_plan_manager». Расширение должно быть установлено в каждой базе данных, в которых планируются проводить манипуляции по экспорту/импорту планов запросов. В рассматриваемом примере расширение должно быть установлено в тестовых базах данных:

- test_db_a;

- test_db_b.

> Расширение устанавливается SQL-командой:
>
> CREATE EXTENSION ja_plan_manager;
>
> Просмотреть расширения БД можно SQL-командой:
>
> \dx
>
> <img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image42.png" style="width:7.10072in;height:2.8175in" />
>
> Рисунок 3.4 – Команда установки расширения в «test_db_a» Аналогичные действия выполняются для второй тестовой БД «test_db_b»

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image43.png" style="width:7.04696in;height:2.79635in" alt="C:\Users\KUZNET~1\AppData\Local\Temp\vmware-kuznetsov-a\VMwareDnD\4cb3d220\Screenshot from 2024-12-13 02-41-26.png " />

> \# \connect test_db_b
>
> \# CREATE EXTENSION ja_plan_manager; \# \dx
>
> Рисунок 3.5 – Команда установки расширения в «test_db_b»

# ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

> Функциональные возможности компонента позволяют:

- включать/отключать режим сохранения запросов;

- включать/отключать режим использования сохраненных запросов;

- экспортировать планы запросов в формате:

  - json;

  - text;

  - xml;

  - yaml;

- экспортировать планы запросов через:

  - домашний каталог пользователя;

  - строку соединения с другой БД (dblink connection);

- импортировать планы запросов.

> При использовании компонента есть возможность использовать кириллицу в именах объектов СУБД «Jatoba».

## Включение/отключение режима сохранения плана запросов

> Для включения режима сохранения плана запросов устанавливается переменная SQL-командой:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image44.png" style="width:7.11376in;height:1.07333in" />

> SET ja_plan_manager.write_mode = true;
>
> Рисунок 4.1 – SQL-команда включения режима сохранения плана запросов
>
> В режиме сохранения плана запросов данные будут сохраняться в таблицу
>
> «ja_plan_manager.jpm_plans». В таблицу будут сохраняться только разные планы, даже если они были сгенерированы для одинакового запроса.
>
> Отключается режим сохранения планов запросов SQL-командой:
>
> SET ja_plan_manager.write_mode = false;

## Включение/отключение режима использования сохраненных планов запросов

> Для установления режима использования сохраненных планов запросов устанавливается переменная SQL-командой:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image45.png" style="width:7.09029in;height:1.15354in" />

> UPDATE ja_plan_manager.jpm_plans SET enable=true;
>
> Рисунок 4.2 – Команда установления режима использования сохраненных запросов После этого шага план для запроса будет взят из таблицы
>
> «ja_plan_manager.jpm_plans».
>
> Одному и тому же запросу могут соответствовать разные планы. Если включен режим использования одного плана запроса, второй план к этому запросу невозможно будет включить: сработает триггер.

## Экспорт/импорт плана запросов

## Экспорт

> Чтобы экспортировать план запроса через файл json, необходимо выполнить следующий SQL-запрос:
>
> SELECT ja_plan_manager.ja_export_plan (\<query_hash\>,
>
> \<file_path\>);
>
> Формат вывода указывается в расширении имени файла экспорта. Поддерживаются следующие форматы:

- json;

- text;

- xml;

- yaml.

## Экспорт через «dblink connection»

> Чтобы экспортировать план запроса непосредственно в другую базу данных c которой есть соединение, необходимо выполнить следующий SQL-запрос:
>
> SELECT ja_plan_manager.ja_copy_plan(\<connection_string\>,
>
> \<query_hash\>);
>
> План будет автоматически импортирован принимающей базой данных без необходимости вызова там каких-либо функций.
>
> Формат «connection_string» совпадает с обычной строкой подключения «dblink». Он должен содержать параметры, необходимые для идентификации базы данных и авторизации импорта (имя базы данных, хост, порт, суперпользователь и пароль).
>
> После импорта плана необходимо активировать его, чтобы он был выполнен соответствующим SQL-запросом:
>
> UPDATE ja_plan_manager.jpm_plans SET enable = true;

## Импорт

> Для импорта плана запроса необходимо выполнить следующую SQL-команду:
>
> SELECT ja_plan_manager.ja_import_plan(\<query_hash\>,
>
> \<file_path\>);

## Импорт в другую версию СУБД

> В случае если план запросов создан в другой версии СУБД «Jatoba», при выполнении его импорта в новую версию может отличаться результат query_hash. В этом случае импортированный план запросов не будет задействован в СУБД.
>
> Для того чтобы задействовать импортированный план запросов администратору СУБД необходимо:

1)  Установить новую версию СУБД.

2)  Установить (см. раздел [2](#установка-компонента)) и настроить (см. раздел [3](#настройка-компонента)) расширение

> ja_Plan_Manager так, как это указано в данном руководстве.

3)  Создать таблицы и заполнить их теми же данными как при использовании на предыдущей версии СУБД.

4)  Включить режим сохранения планов запросов (см. п. [4.1](#включениеотключение-режима-сохранения-плана-запросов)).

5)  Выполнить запросы так же как на предыдущей версии СУБД.

6)  Выключить режим сохранения планов запросов (см. п. [4.1](#включениеотключение-режима-сохранения-плана-запросов)).

7)  Получить данные query_hash из таблицы ja_plan_manager.jpm_plans:

> SELECT \* FROM ja_plan_manager.jpm_plans;

8)  Обновить значения query_hash планов запросов в JSON-файлах (которые использовались для экспорта в предыдущей версии СУБД ) новыми, полученными в пункте 6).

> Важно обращать внимание на наименование запросов и соответствующее значение query_hash.

9)  Удалить из БД сохраненные планы запросов.

10) Выполнить импорт планов запросов из предыдущей версии СУБД с исправленными значениями query_hash (см. п. [4.3.2](#импорт)).

## Импорт через «dblink connection»

> Для прямой передачи плана запроса на другую базу внутри сети можно использовать
>
> «dblink». Для этого необходимо вызвать следующий SQL-запрос:
>
> SELECT ja_plan_manager.ja_copy_plan(\<connection_string\>,
>
> \<query_hash\>);
>
> План запроса будет автоматически импортирован принимающей базой данных без необходимости вызывать какие-либо функции в ней.
>
> Формат «connection_string» аналогичен формату «connstr» в функциях «dblink». В ней должна содержаться информация, достаточная для подключения к базе и авторизации в ней:

- dbname;

- host;

- port;

- user;

- password – пароль суперпользователя.

> После импорта плана необходимо активировать его, чтобы при вызове соответствующего ему запроса выполнялся именно импортированный план:
>
> UPDATE ja_plan_manager.jpm_plans SET enable = true;

## Просмотр сохраненных планов запросов

> С помощью функции «show_plan» можно просмотреть сохраненные планы. Для этого требуется знать хеш запроса, который может быть извлечен из таблицы
>
> «ja_plan_manager.jpm_plans», и выполнить SQL-запрос:
>
> SELECT ja_plan_manager.show_plan(\<query_hash\>);

## Анализ планов запросов

> Анализ плана запроса выполняется SQL-командой:
>
> EXPLAIN ANALYZE \<query\>;

## Журналирование отработанных планов запросов

> При использовании плана запроса возникнет уведомление (notice), сообщающее, план с каким query_hash был отработан:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image46.png" style="width:7.06325in;height:1.99062in" />

> Рисунок 4.3 – Уведомление о срабатывании плана запроса
>
> В файле журнала событий СУБД «Jatoba» также появится запись о срабатывании плана:
>
> Рисунок 4.4 – Файл журнала событий с записью о срабатывании плана запроса Файлы журнала событий находятся в директории:
>
> /var/lib/jatoba/\<ver\>/data/log/
>
> Запись в журнале событий появится также если отработан запрос, план которого есть в таблице «ja_plan_manager.jpm_plans», но он не включен (enable=false).

# ПРИМЕР РЕАЛИЗАЦИИ ФУНКЦИОНАЛЬНЫХ ВОЗМОЖНОСТЕЙ КОМПОНЕНТА

> В качестве примера использования компонента будут рассмотрены две тестовые БД, находящиеся в одной СУБД, у которых уже установлено расширение «ja_plan_manager».

- test_db_a;

- test_db_b.

> В базах данных создаются таблицы «customers» и «orders». Таблица «customers» содержит три записи, а таблица «orders» будет содержать тысячу записей.

## Подготовка БД «test_db_a»

> В БД «test_db_a» создать таблицу «customers»:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image48.png" style="width:7.11586in;height:1.28417in" />

> CREATE table customers(id serial PRIMARY KEY, name text not null, city text not null);
>
> Рисунок 5.1 – Создание таблицы «customers» в БД «test_db_a» Добавить три записи в таблицу «customers»:
>
> INSERT INTO customers (name, city) VALUES ('Alice', 'Paris'),
>
> ('Bob', 'London'),
>
> ('Eve', 'Berlin');
>
> <img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image49.png" style="width:7.04981in;height:2.12333in" />
>
> Рисунок 5.2 – Добавление значений в таблицу «customers» в БД «test_db_a» В БД «test_db_a» создать таблицу «orders»:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image50.png" style="width:7.17004in;height:1.35625in" />

> CREATE table orders(id serial PRIMARY KEY, customer_id integer NOT NULL, product text NOT NULL, price integer NOT NULL);
>
> Рисунок 5.3 – Создание таблицы «orders» в БД «test_db_a» Добавьте 1000 записей в таблицу «orders»:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image51.png" style="width:7.05203in;height:2.06646in" />

> INSERT INTO orders (customer_id, product, price)
>
> SELECT (random() \* 3 + 1)::integer, 'product', (random() \* 1000 + 1)::integer
>
> FROM generate_series(1, 1000);
>
> Рисунок 5.4 – Добавление значений в таблицу «orders» в БД «test_db_a»

## Подготовка БД «test_db_b»

> В БД «test_db_b» создать таблицу «customers»:
>
> CREATE TABLE customers(id serial PRIMARY KEY, name text not null, city text not null);
>
> Добавить три записи в таблицу «customers»:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image52.png" style="width:7.04972in;height:2.13281in" />

> INSERT INTO customers (name, city) VALUES ('Alice', 'Paris'),
>
> ('Bob', 'London'),
>
> ('Eve', 'Berlin');
>
> Рисунок 5.5 – Создание и добавление значений в таблицу «customers» в БД «test_db_b» В БД «test_db_b» создать таблицу «orders»:
>
> CREATE table orders(id serial PRIMARY KEY, customer_id integer NOT NULL, product text NOT NULL, price integer NOT NULL);
>
> Добавить 1000 записей в таблицу «orders»:
>
> INSERT INTO orders (customer_id, product, price)
>
> SELECT (random() \* 3 + 1)::integer, 'product', (random() \* 1000 + 1)::integer
>
> FROM generate_series(1, 1000);
>
> <img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image53.png" style="width:7.05477in;height:2.0949in" />
>
> Рисунок 5.6 – Создание и добавление значений в таблицу «orders» в БД «test_db_b»
>
> Для последующего сравнения планов запроса необходимо создать индекс для таблицы «orders» в БД «test_db_b»:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image54.png" style="width:7.07281in;height:1.08062in" />

> CREATE index idx_orders_price on orders(price);
>
> Рисунок 5.7 – Создание индекса

## Сознание плана запроса на test_db_a

> Установить соединение с БД «test_db_a» и выполнить анализ плана запроса:
>
> EXPLAIN ANALYZE SELECT c.name, c.city FROM orders o JOIN customers c ON o.customer_id = c.id WHERE o.price = 500;
>
> СУБД выведет параметры плана запроса.

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image55.png" style="width:6.77444in;height:2.28937in" />

> Рисунок 5.8 – Вывод плана запроса
>
> Включить режим сохранения плана запросов, установив переменную «write_mode» в режим «true» SQL-командой:
>
> SET ja_plan_manager.write_mode = true;
>
> <img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image56.png" style="width:7.19072in;height:1.14312in" />
>
> Рисунок 5.9 – Режим сохранения плана запросов
>
> Затем выполнить SQL-запрос, который запишется в таблицу «jpm_plans»:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image46.png" style="width:7.0575in;height:1.99062in" />

> SELECT c.name, c.city FROM orders o JOIN customers c ON o.customer_id = c.id WHERE o.price = 500;
>
> Рисунок 5.10 – Выполнение SQL-запроса
>
> Из записи таблицы «ja_plan_manager.jpm_plans» вывести присвоенное значение
>
> «query_hash»:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image57.png" style="width:7.08242in;height:1.43125in" />

> SELECT query, query_hash, enable FROM ja_plan_manager.jpm_plans;
>
> Рисунок 5.11 – Вывод присвоенного значения
>
> Полученный хеш запроса равен «334402852». Полученное значение потребуется для экспорта.

## Экспорт плана в каталог пользователя

> Выполнить экспорт плана запроса, указав формат вывода JSON в расширении файла, значение «query_hash» равное «334402852» и путь к каталогу пользователя:
>
> SELECT ja_plan_manager.ja_export_plan(334402852, '/var/lib/jatoba/6/data/plan.json');
>
> Экспорт плана запроса должен выполняться с тем же присвоенным значением хеш (query_hash).
>
> <img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image1.png" style="width:0.25138in;height:0.25107in" />При вводе не верного значения рационального числа хеш в SQL-команде экспорта будет создан пустой файл плана запроса.
>
> <img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image58.png" style="width:7.05978in;height:1.97167in" />
>
> Рисунок 5.12 – SQL-команда экспорта плана запроса
>
> В результате по указанному пути будет создан файл плана запроса в формате JSON.
>
> Рисунок 5.13 – Экспортированный план запроса

## Импорт плана в БД «test_db_b»

> Установить соединение с БД «test_db_b» и выполнить импорт плана запроса из каталога пользователя SQL-командой:
>
> SELECT ja_plan_manager.ja_import_plan(334402852, '/var/lib/jatoba/6/data/plan.json');
>
> Импортированный план запроса запишется в таблицу «jpm_plans».

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image60.png" style="width:7.0725in;height:2.5625in" />

> Рисунок 5.14 – Импорт плана запроса
>
> Чтобы использовать импортированный план запроса, необходимо включить режим использования сохраненных планов запросов SQL-командой:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image61.png" style="width:7.16369in;height:0.95in" />

> UPDATE ja_plan_manager.jpm_plans SET enable = true where query_hash = 334402852;
>
> Рисунок 5.15 – Режим использования сохраненных планов запросов
>
> Затем необходимо выполнить анализ плана запроса, чтобы убедиться в применении плана запроса:
>
> EXPLAIN ANALYZE SELECT c.name, c.city FROM orders o JOIN customers c ON o.customer_id = c.id WHERE o.price = 500;
>
> Выведенные параметры плана запроса в БД «test_db_b» идентичны параметрам плана запроса в БД «test_db_a».

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image62.png" style="width:6.9894in;height:2.47917in" />

> Рисунок 5.16 – Вывод плана запроса в БД «test_db_b»

# УДАЛЕНИЕ КОМПОНЕНТА

> Удаление компонента производится SQL-командой:
>
> DROP EXTENSION ja_plan_manager;
>
> После чего необходимо убрать загрузку модуля из postgresql.conf, поставив знак \# или удалив имя расширения из списка расширений.
>
> \#shared_preload_libraries = 'ja_plan_manager'

## Отключение режима использования плана запросов

> Отключить режим использования планов запросов:

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image63.png" style="width:7.13644in;height:1.265in" />

> UPDATE ja_plan_manager.jpm_plans SET enable = false where query_hash = 334402852;
>
> Рисунок 6.1 – Отключение режима использования планов запросов Затем выполнить анализ плана запроса:
>
> EXPLAIN ANALYZE SELECT c.name, c.city FROM orders o JOIN customers c ON o.customer_id = c.id WHERE o.price = 500;
>
> Убедиться, что изменились параметры плана запроса. В частности, в плане запроса используется сканирование индекса таблицы.

<img src="../docs/assets/images/com18.3.1/ja_plan_manager/media/image64.png" style="width:7.17214in;height:1.78229in" />

> Рисунок 6.2 – Новый план запроса

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 8%" />
<col style="width: 80%" />
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
<p>Structured Query Language – язык структурированных запросов</p>
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
