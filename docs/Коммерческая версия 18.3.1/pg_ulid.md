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
<p><strong>Руководство по настройке. Часть 10.</strong></p>
<p><strong>Поддержка лексографического идентификатора.</strong></p>
<p><strong>Компонент «pg_ulid»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-10</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 29</p>
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

> В документе приведены сведения, необходимые для установки и эксплуатации компонента «pg_ulid» (далее по тексту – «компонент» или «pg_ulid»), предназначенного для поддержки типа данных ULID.
>
> <img src="../docs/assets/images/com18.3.1/pg_ulid/media/image1.png" style="width:0.24722in;height:0.24635in" />Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра</p>
<p>5.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-6/bin».</p>
<p>Версия компонента — 0.0.1-15</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <img src="../docs/assets/images/com18.3.1/pg_ulid/media/image2.png" style="width:0.25208in;height:0.25208in" />Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/pg_ulid/media/image2.png" style="width:0.25139in;height:0.25139in" /> **Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/pg_ulid/media/image1.png" style="width:0.25in;height:0.25in" /> **Дополнительная информация** – указания, позволяющие упростить работу с изделием

# СОДЕРЖАНИЕ

1.  [Назначение компонента 4](#назначение-компонента)

    1.  [Условия применения 4](#условия-применения)

2.  [Установка и настройка 5](#установка-и-настройка)

    1.  [Установка компонента «pg_ulid» в ОС GNU/Linux 5](#установка-компонента-pg_ulid-в-ос-gnulinux)

    2.  [Настройка конфигурационного файла «postgresql.conf» 6](#настройка-конфигурационного-файла-postgresql.conf)

    3.  [Установка расширения «ulid» 6](#установка-расширения-ulid)

3.  [Функциональные возможности компонента 8](#функциональные-возможности-компонента)

    1.  [Компонент pg_ulid 8](#компонент-pg_ulid)

        1.  [Функция gen_ulid() 9](#функция-gen_ulid)

        2.  [Конструкции приведения типа ulid к тексту и наоборот 9](#конструкции-приведения-типа-ulid-к-тексту-и-наоборот)

        3.  [Конструкции приведения типа ulid к штампу времени 10](#конструкции-приведения-типа-ulid-к-штампу-времени)

        4.  [Использование нового типа данных «ulid» в таблицах пользователя 11](#_bookmark11)

        5.  [Сравнение двух ulid-значений 13](#сравнение-двух-ulid-значений)

        6.  [Использование нового типа данных в индексах пользователя 15](#использование-нового-типа-данных-в-индексах-пользователя)

4.  [Применение идентификатора UUIDv7 19](#применение-идентификатора-uuidv7)

    1.  [Миграция с ULID к UUIDv7 19](#миграция-с-ulid-к-uuidv7)

    2.  [ULID используется в качестве первичного ключа 19](#ulid-используется-в-качестве-первичного-ключа)

        1.  [Создание тестовой таблицы 19](#создание-тестовой-таблицы)

        2.  [Изменение ограничений первичного ключа в таблице 23](#изменение-ограничений-первичного-ключа-в-таблице)

    3.  [ULID используется в качестве внешнего ключа 23](#ulid-используется-в-качестве-внешнего-ключа)

        1.  [Создание тестовой таблицы 23](#создание-тестовой-таблицы-1)

        2.  [Изменение ограничений внешнего ключа 24](#изменение-ограничений-внешнего-ключа)

5.  [Удаление компонента 26](#удаление-компонента)

[Термины и определения 27](#термины-и-определения)

[Перечень сокращений 28](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент «pg_ulid» предназначен для поддержки в СУБД типа данных ULID (128 бит) с полноценным использованием в таблицах, запросах и индексах.
>
> Компонент обладает функцией монотонности в случае генерации большого количество случайных значений в рамках одной миллисекунды, в формате до 80 бит.

## Например

> ulid() -- 01BX5ZZKBKACTAV9WEVGEMMVRY ulid() -- 01BX5ZZKBKACTAV9WEVGEMMVRZ ulid() -- 01BX5ZZKBKACTAV9WEVGEMMVS0
>
> В таком случае временная часть ULID будет постоянной, а случайная часть будет генерироваться в виде последовательности значений. Если же генерация значений происходит в разные миллисекунды реального времени, то случайная часть будет именно случайной. Свойство порядка будет обеспечивать временная часть.

## Условия применения

> <img src="../docs/assets/images/com18.3.1/pg_ulid/media/image2.png" style="width:0.25138in;height:0.25125in" />Компонент «pg_ulid» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционной системы GNU/Linux.
>
> В текущей реализации не поддерживается управление компонентом «pg_ulid» из компонента пользовательского веб-интерфейса для администраторов
>
> «Jatoba data safe»Ограничений по совместимости с другими компонентами нет.

# УСТАНОВКА И НАСТРОЙКА

> Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

## Установка компонента «pg_ulid» в ОС GNU/Linux

> Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке, либо доустановить.
>
> Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

> Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

> apt-get install jatoba18-pg-ulid

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:

> yum install jatoba18-pg_ulid
>
> Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

> apt-get install jatoba18-pg_ulid
>
> Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba6-pg_ulid и т.п.
>
> Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Настройка конфигурационного файла «postgresql.conf»

> В разделе «Shared Library Preloading», для последующей загрузки расширения, установить параметр:
>
> shared_preload_libraries = 'ulid'
>
> Рисунок 2.1 – Параметр загрузки расширения Для применения параметров потребуется перезапустить СУБД.

## Установка расширения «ulid»

> После перезагрузки СУБД станет доступной установка расширения «ulid».
>
> CREATE EXTENSION ulid;
>
> <img src="../docs/assets/images/com18.3.1/pg_ulid/media/image4.png" style="width:7.00916in;height:1.88635in" />
>
> Рисунок 2.2 – Команда установки расширения «ulid»
>
> В результате выполненных действий установится расширение «ulid».

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image5.png" style="width:6.94301in;height:2.07187in" />

> Рисунок 2.3 – Вывод установленных расширений

# ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

## Компонент pg_ulid

> После установки расширения в составе выбранной базы данных пользователю становятся доступны следующие объекты БД, вносимые расширением:

1)  Тип данных ulid

> Размер поля 128 бит; временная часть= старшие 48 бит; случайная часть = младшие 80 бит.
>
> Временная часть отвечает за порядок следования случайных значений.
>
> Случайная часть за генерацию уникальных значений (вероятность коллизии 10^-24).

2)  Операторы и функции для работы с типом данных ulid:

    - функция gen_ulid() (см .п. [3.1.1](#функция-gen_ulid));

    - конструкции приведения типа ulid к тексту и наоборот (см .п. [3.1.2](#конструкции-приведения-типа-ulid-к-тексту-и-наоборот))

    - конструкции приведения типа ulid к штампу времени (см. п. [3.1.3](#конструкции-приведения-типа-ulid-к-штампу-времени));

    - сравнение двух ulid-значений (см. п. [3.1.5](#сравнение-двух-ulid-значений));

3)  Использование нового типа данных в таблицах пользователя (см. п. [3.1.4](#_bookmark11));

4)  Использование нового типа данных в индексах пользователя в том числе и в составных индексах указанных типов (см. п. [3.1.6](#использование-нового-типа-данных-в-индексах-пользователя));

5)  Использование нового типа данных в представлениях и материализованных представлениях в качестве полей результата запроса

6)  Использование нового типа данных в триггерных процедурах (поддерживается язык PL/pgSQL) в качестве элемента, который можно вставлять/изменять/удалять или читать значение этого элемента в составе кода триггерной процедуры.

## Функция gen_ulid()

> Функция gen_ulid() возвращает случайный идентификатор.
>
> Может применяться в SQL запросах в выражениях там, где допустим вызов функции.

## Например

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image6.png" style="width:7.01911in;height:1.73469in" />

> SELECT gen_ulid();
>
> SELECT ... FROM ... WHERE ... gen_ulid() ...
>
> Рисунок 3.1 – Генерация случайного ulid

## Конструкции приведения типа ulid к тексту и наоборот

> Конструкции приведения типа «ulid» к тексту и наоборот имеет синтаксис SQL-команды:
>
> SELECT ulid_field::text .... SELECT 'XXXXXXX...'::ulid ...

## Например

> Преобразовать значение в текст:
>
> SELECT ('7ZZZZZZZZZZZZZZZZZZZZZZZZZ'::ulid)::text;
>
> <img src="../docs/assets/images/com18.3.1/pg_ulid/media/image7.png" style="width:6.79039in;height:1.72333in" />
>
> Рисунок 3.2 – Преобразование значения в тип данных «text» Преобразовать значение в тип данных «ulid»:

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image8.png" style="width:7.08106in;height:1.7825in" />

> SELECT ('7ZZZZZZZZZZZZZZZZZZZZZZZZZ'::ulid);
>
> Рисунок 3.3 - Преобразование значение в тип данных «ulid»

## Конструкции приведения типа ulid к штампу времени

> SELECT ulid_field::timestamp ... SELECT ts_field::ulid ...

## Например

> Выполнить преобразование в timestamp:
>
> SELECT ('7ZZZZZZZZZZZZZZZZZZZZZZZZZ'::ulid)::timestamp; SELECT ('7ZZZZZZZZZZZZZZZZZZZZZZZZZ'::ulid)::timestamp; SELECT ('01H55TNAQ96WPSWE6WZRCH9G0C'::ulid)::timestamp;

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>№ изменения:</p>
</blockquote></th>
<th><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></th>
<th><blockquote>
<p>Дата внесения изм:</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> <img src="../docs/assets/images/com18.3.1/pg_ulid/media/image9.png" style="width:7.06135in;height:3.83333in" />
>
> Рисунок 3.4 – Преобразование значения из формата «ulid» в формат «timestamp» Выполнить преобразование в ulid:

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image10.png" style="width:7.1057in;height:1.7825in" />

> SELECT('2023-07-12 19:53:43.401'::timestamp::ulid);
>
> Рисунок 3.5 – Преобразование значения из формата timestamp в формат ulid

## Использование нового типа данных «ulid» в таблицах пользователя

> Компонент «pg_ulid» вводит новый тип данных «ulid» в таблицах пользователя. При этом используется синтаксис SQL-команды:
>
> CREATE TABLE t ( id ulid ... );
>
> Допустимы и другие конструкции создания и изменений полей через оператора ALTER TABLE.

## Например

> Создать таблицу:

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image11.png" style="width:7.16114in;height:1.18187in" />

> \# CREATE TABLE t0 (id ulid DEFAULT gen_ulid() NOT null);
>
> Рисунок 3.6 – Создание таблицы с типом данных «ulid» Вставить произвольный ulid:

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image12.png" style="width:7.15646in;height:1.17219in" />

> \# INSERT INTO t0 SELECT gen_ulid() FROM
>
> generate_series(1,100000);
>
> Рисунок 3.7 – Вставка произвольных значений Указать первичный ключ:

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image13.png" style="width:7.07139in;height:1.09958in" />

> ALTER TABLE t0 ADD PRIMARY KEY (id);
>
> Рисунок 3.8 – Установка первичного ключа Вывести содержание таблицы:
>
> SELECT id FROM public.t0;
>
> <img src="../docs/assets/images/com18.3.1/pg_ulid/media/image14.png" style="width:7.00228in;height:3.26083in" />
>
> Рисунок 3.9 – Вывод содержания таблицы
>
> Тип данных «ulid» допускает применение по отношению к нему всех типов ограничений таблицы: PRIMARY KEY, NULL/NOT NULL, UNIQUE, CHECK, REFERENCE, GENERATED
>
> CREATE TABLE t ( id ulid PRIMARY KEY, ... );
>
> и другие конструкции создания и изменений полей через ALTER TABLE.

## Сравнение двух ulid-значений

> Данные выражения возвращают тип boolean и могут применяться в SQL запросах в контексте выражений:
>
> – = оператор равенства двух ulid;

- \<\> оператор неравенства двух ulid;

- \> больше;

- \>= больше или равно;

- \< меньше;

- \<= меньше или равно.

## Например

> Создать таблицу:

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image15.png" style="width:7.08501in;height:1.76042in" />

> \# CREATE TABLE ulid1 (
>
> ulid_field ULID,
>
> text_field TEXT DEFAULT(now())
>
> );
>
> Рисунок 3.10 – Создание таблицы
>
> Вставить данные:

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image16.png" style="width:7.10668in;height:1.77083in" />

> \# INSERT INTO ulid1(ulid_field) VALUES('11111111111111111111111111');
>
> \# INSERT INTO ulid1(ulid_field) VALUES('22222222222222222222222222');
>
> \# INSERT INTO ulid1(ulid_field) VALUES('3F3E3C3B3A3039383736353433');
>
> Рисунок 3.11 – Вставка значений в таблицу Выполнить проверку операторов сравнения:
>
> \# SELECT COUNT(\*) FROM ulid1 WHERE ulid_field = '3F3E3C3B3A3039383736353433';
>
> \# SELECT COUNT(\*) FROM ulid1 WHERE ulid_field \<\> '11111111111111111111111111';
>
> \# SELECT COUNT(\*) FROM ulid1 WHERE ulid_field \< '22222222222222222222222222';

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image17.png" style="width:7.11227in;height:3.47375in" />

> Рисунок 3.12 – Проверка операторов сравнения

## Использование нового типа данных в индексах пользователя

> Компонент «pg_ulid» вводит новый тип данных «ulid» в индексах пользователя. В настоящее время поддерживаются типы индексов «BTREE» и «HASH».
>
> Пользователь может создать индекс по полю типа данных «ulid» используя синтаксис SQL-команды:
>
> CREATE INDEX my_idx on my_table \[ USING btree \| hash \] (id);

## Например

> Создать таблицу:
>
> \# CREATE TABLE ulid1 (
>
> ulid_field ULID,
>
> text_field TEXT DEFAULT(now())
>
> );

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image18.png" style="width:7.1286in;height:1.77292in" />

> Рисунок 3.13 – Создание таблицы
>
> Вставить данные:

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image19.png" style="width:7.06449in;height:1.71875in" />

> \# INSERT INTO ulid1(ulid_field) VALUES('11111111111111111111111111');
>
> \# INSERT INTO ulid1(ulid_field) VALUES('22222222222222222222222222');
>
> \# INSERT INTO ulid1(ulid_field) VALUES('3F3E3C3B3A3039383736353433');
>
> Рисунок 3.14 – Вставка данных
>
> Сгенерировать записи:
>
> INSERT INTO ulid1 (ulid_field) SELECT gen_ulid() FROM generate_series(1,100000);
>
> <img src="../docs/assets/images/com18.3.1/pg_ulid/media/image20.png" style="width:7.07167in;height:1.19437in" />
>
> Рисунок 3.15 – Генерирование записей Создать индексы «BTREE», «HASH»:

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image21.png" style="width:7.05709in;height:1.4375in" />

> \# CREATE INDEX ulid1_btree ON ulid1 USING BTREE (ulid_field); \# CREATE INDEX ulid1_hash ON ulid1 USING HASH (ulid_field);
>
> Рисунок 3.16 – Создание индексов Вывести план запроса:

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image22.png" style="width:7.14261in;height:1.99969in" />

> EXPLAIN SELECT \* FROM public.ulid1 WHERE ulid_field = '11111111111111111111111111';
>
> Рисунок 3.17 – Вывод плана запроса Вывести содержание таблицы:
>
> SELECT \* FROM public.ulid1;
>
> <img src="../docs/assets/images/com18.3.1/pg_ulid/media/image23.png" style="width:6.67579in;height:2.33812in" />
>
> Рисунок 3.18 – Вывод содержания таблицы с индексами BTREE, HASH Индексы успешно созданы и используются.

# ПРИМЕНЕНИЕ ИДЕНТИФИКАТОРА UUIDV7

> В СУБД «Jatoba» 18 встроена поддержка идентификатора UUID версии 7 – новой версии стандарта UUID (Universally Unique Identifier).
>
> Идентификатор UUID версии 7 применяется в базах данных, распределённых системах и API.

## Миграция с ULID к UUIDv7

> В СУБД «Jatoba» применяются механизмы миграции с идентификаторов ULID, поддерживаемых компонентом pg_ulid, на идентификаторы UUID версии 7. Далее приводится примеры процедур по миграции:

- Миграция от ULID к UUIDv7, когда колонка с типом данных ULID используется в качестве первичного ключа;

- Миграция от ULID к UUIDv7, когда колонка с типом данных ULID используется в качестве внешнего ключа.

## ULID используется в качестве первичного ключа

## Создание тестовой таблицы

> Допустим, имеется таблица t_ulid с первичным ключом по столбцу id с типом данных ULID. Создадим таблицу t_ulid при помощи следующей команды:
>
> CREATE TABLE t_ulid(
>
> id ULID PRIMARY KEY DEFAULT gen_ulid()
>
> ,load_id INTEGER
>
> ,order_id INTEGER);
>
> Заполнение таблицы t_ulid случайными тестовыми данными производится при помощи команды:
>
> INSERT INTO t_ulid(order_id,load_id) SELECT n,1 FROM generate_series(1,10000) AS gs(n);
>
> Проверить содержимое таблицы t_ulid при помощи команды:

№ изменения: Подпись отв. лица: Дата внесения изм:

> SELECT id, to_char(id::timestamp, 'dd-mm-yyyy hh24:mi:ss,ff3') AS ts FROM t_ulid ORDER BY id FETCH FIRST 10 ROWS ONLY;
>
> \+ 01KA959YWGZTV653GC7M92F2SR \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SS \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2ST \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SV \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SW \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SX \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SY \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SZ \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2T0 \| 17-11-2025 15:00:34,320
>
> Создание процедуры для формирования UUIDv7 на основе существующих значений ULID выполняется при помощи команды:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3"><blockquote>
<p>CREATE OR REPLACE PROCEDURE ulid2uuid_1()</p>
<p>LANGUAGE 'plpgsql' AS $BODY$ DECLARE</p>
<p>vepoch_old BIGINT := null; vepoch_new BIGINT;</p>
<p>vnano INTEGER; vuuid_current TEXT; vuuid_new TEXT;</p>
<p>vuuid UUID;</p>
<p>c1 cursor for select id,id_uuid from t_ulid order by id for update;</p>
<p>BEGIN</p>
<p>for c1r in c1 loop</p>
<p>vepoch_new := floor(extract(epoch from c1r.id::timestamp)*1000)::bigint;</p>
<p>if vepoch_old is null or vepoch_new&lt;&gt;vepoch_old then</p>
<p>vepoch_old := vepoch_new; vnano := 1;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

> else
>
> vnano := vnano+1; end if;
>
> vuuid_current := uuidv7()::text; vuuid_new := lpad(to_hex(vepoch_new),12,'0');
>
> vuuid_new := vuuid_new\|\|substr(vuuid_current,15,1)\|\|lpad(to_hex(vnano),3,'0'
>
> )\|\|substr(vuuid_current,20,4)
>
> \|\|substr(vuuid_current,25,12); vuuid := vuuid_new::uuid;
>
> UPDATE t_ulid SET id_uuid=vuuid WHERE CURRENT OF c1; end loop;
>
> COMMIT; END;
>
> \$BODY\$;
>
> Добавление в таблицу t_ulid нового столбца id_uuid с новым типом данных UUID при помощи команды:
>
> ALTER TABLE t_ulid ADD id_uuid UUID;
>
> Заполнение столбца id_uuid в таблице t_ulid значениями с использованием процедуры ulid2uuid_1 при помощи команды:
>
> CALL ulid2uuid_1();
>
> Пример выборки значений из таблицы t_ulid
>
> SELECT id, to_char(id::timestamp,'dd-mm-yyyy hh24:mi:ss,ff3') AS ts,id_uuid, to_char(uuid_extract_timestamp(id_uuid) AT TIME ZONE 'UTC','dd-mm-yyyy hh24:mi:ss,ff3') AS ts_id_uuid FROM t_ulid ORDER BY id LIMIT 10;
>
> В результате будет представлено
>
> 01KA959YWGZTV653GC7M92F2SQ \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7001-ba95-779652ad9221 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SR \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7002-b777-ba487bbb4db8 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SS \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7003-a036-538e36dc2cb6 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2ST \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7004-9fa8-4ed5ac39ee44 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SV \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7005-9b20-1d61a3af869c \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SW \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7006-bc02-6afcfbbdb452 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SX \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7007-b679-46edfcfbcc79 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SY \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7008-ad68-f8c22a5e39e1 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SZ \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7009-b824-8f2c74911c8d \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2T0 \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-700a-a304-77b1b1480705 \| 17-11-2025 15:00:34,320
>
> Пример выборки значений из таблицы t_ulid
>
> SELECT id, to_char(id::timestamp,'dd-mm-yyyy hh24:mi:ss,ff3') AS ts, id_uuid, to_char(uuid_extract_timestamp(id_uuid) AT TIME ZONE 'UTC','dd-mm-yyyy hh24:mi:ss,ff3') AS ts_id_uuid FROM t_ulid ORDER BY id_uuid LIMIT 10;
>
> В результате выполнения предыдущего запроса
>
> 01KA959YWGZTV653GC7M92F2SQ \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7001-ba95-779652ad9221 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SR \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7002-b777-ba487bbb4db8 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SS \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7003-a036-538e36dc2cb6 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2ST \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7004-9fa8-4ed5ac39ee44 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SV \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7005-9b20-1d61a3af869c \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SW \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7006-bc02-6afcfbbdb452 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SX \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7007-b679-46edfcfbcc79 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SY \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7008-ad68-f8c22a5e39e1 \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2SZ \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-7009-b824-8f2c74911c8d \| 17-11-2025 15:00:34,320
>
> 01KA959YWGZTV653GC7M92F2T0 \| 17-11-2025 15:00:34,320 \|
>
> 019a9254-fb90-700a-a304-77b1b1480705 \| 17-11-2025 15:00:34,320

## Изменение ограничений первичного ключа в таблице

> Получение ограничений таблицы t_ulid:
>
> SELECT conname AS constraint_name,conrelid::regclass AS table_name,contype AS constraint_type,pg_get_constraintdef(oid) AS constraint_definition FROM pg_constraint WHERE conrelid = '**t_ulid**'::regclass;
>
> В ответ будет выведено следующее:
>
> t_ulid_pkey \| t_ulid \| p \| PRIMARY KEY (id)
>
> Удаление ограничения первичного ключа в таблице t_ulid:
>
> ALTER TABLE t_ulid DROP CONSTRAINT t_ulid_pkey CASCADE;
>
> Добавление нового ограничения первичного ключа в таблицу t_ulid:
>
> ALTER TABLE t_ulid ADD PRIMARY KEY (id_uuid);
>
> Удаление столбца id из таблицы t_ulid:
>
> ALTER TABLE t_ulid DROP id CASCADE;

## ULID используется в качестве внешнего ключа

## Создание тестовой таблицы

> Допустим, имеется таблица t_ulid с первичным ключом по столбцу id с типом данных ULID. Создадим таблицу t_ulid при помощи следующей команды:

<img src="../docs/assets/images/com18.3.1/pg_ulid/media/image1.png" style="width:0.25in;height:0.25in" />

> CREATE TABLE t_ulid(
>
> id ULID PRIMARY KEY DEFAULT gen_ulid()
>
> ,load_id INTEGER
>
> ,order_id INTEGER);
>
> Допустим, имеется таблица t_ulid_detail с внешним ключом по столбцу id_fk с типом данных ULID, который указывает на первичный ключ в таблице t_ulid.
>
> После добавления и заполнения UUIDv7 в таблице t_ulid (см. п. [4.2.1](#создание-тестовой-таблицы)), необходимо удалить старые и создать новые ограничения.
>
> Для этого следует добавить в таблицу t_ulid_detail нового столбца id_uuid_fk с типом данных UUID:
>
> ALTER TABLE t_ulid_detail ADD id_uuid_fk UUID;
>
> Заполнение данными столбца id_uuid_fk в таблице t_ulid_detail:
>
> UPDATE t_ulid_detail t1 SET id_uuid_fk = (SELECT t2.id_uuid FROM t_ulid t2 WHERE t2.id=t1.id_fk);

## Изменение ограничений внешнего ключа

> Получение ограничений таблицы t_ulid
>
> SELECT conname AS constraint_name,conrelid::regclass AS table_name,contype AS constraint_type,pg_get_constraintdef(oid) AS constraint_definition FROM pg_constraint WHERE conrelid = '**t_ulid**'::regclass;
>
> В ответ будет выведено следующее:
>
> t_ulid_pkey \| t_ulid \| p \| PRIMARY KEY (id)
>
> Удаление ограничения первичного ключа в таблице t_ulid:
>
> ALTER TABLE t_ulid DROP CONSTRAINT t_ulid_pkey CASCADE;
>
> Удаление распространяется на объект ограничение t_ulid_detail_id_fk_fkey в отношении таблицы t_ulid_detail.
>
> Добавление нового ограничения первичного ключа в таблицу t_ulid:
>
> ALTER TABLE t_ulid ADD PRIMARY KEY (id_uuid);
>
> Добавление нового ограничения внешнего ключа в таблицу t_ulid_detail:
>
> ALTER TABLE t_ulid_detail ADD FOREIGN KEY (id_uuid_fk) REFERENCES t_ulid(id_uuid);

# УДАЛЕНИЕ КОМПОНЕНТА

> Удаление компонента проводится в несколько этапов. Удалить пакет:
>
> − для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда удаления следующая:
>
> apt-get remove jatoba\<version\>-pg-ulid
>
> − для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда удаления следующая:
>
> yum remove jatoba\<version\>-pg_ulid
>
> После чего необходимо убрать загрузку модуля из конфигурационного файла
>
> «postgresql.conf», поставив знак \#, или удалить имя расширения из списка расширений.
>
> \#shared_preload_libraries = 'ulid'
>
> Расширение может быть удалено из базы данных пользователя SQL-командой:
>
> DROP EXTENSION ulid;
>
> Но при условии, что тип данных ulid нигде более в базе данных не используется.
>
> В противном случае будет ошибка о наличии зависимостей - это нормально, пользователь сам должен разрешить эту зависимость (удалить использование типа ulid или конвертировать такие поля в text).
>
> Расширение может быть удалено каскадным методом из базы данных пользователя SQL-командой:
>
> DROP EXTENSION ulid CASCADE;

# ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ

> **ULID (Universally Unique Lexicographically Sortable Identifier)** - это уникальный, глобально уникальный, лексикографически сортируемый идентификатор. ULID представляет собой строку, состоящую из двух частей: даты и времени создания объекта и уникального случайного числа. Обе части преобразуются в числовое значение, что позволяет сортировать объекты в лексикографическом порядке. ULID используется для уникальной идентификации объектов без использования централизованных серверов или баз данных, обеспечивая децентрализованное управление и хранение данных.

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
