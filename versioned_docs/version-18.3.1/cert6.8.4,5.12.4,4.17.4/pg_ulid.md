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
<p><strong>Руководство по настройке. Часть 10.<br />
Поддержка лексографического идентификатора.<br />
Компонент «pg_ulid»</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-10</strong></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">Листов 22</td>
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

В документе приведены сведения, необходимые для установки и эксплуатации компонента «pg_ulid» (далее по тексту – «компонент» или «pg_ulid»), предназначенного для поддержки типа данных ULID.

Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th style="text-align: left;"><p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 5.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:</p>
<ul>
<li></li>
</ul>
<p>ОС Linux – «/usr/jatoba-6/bin».Версия компонента — 0.0.1-15</p></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image2.png" style="width:0.25139in;height:0.25139in" /></td>
<td style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></td>
</tr>
</tbody>
</table>

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image2.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image1.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонента [4](#назначение-компонента)](#назначение-компонента)

[1.1. Условия применения [4](#условия-применения)](#условия-применения)

[2. Установка и настройка [5](#установка-и-настройка)](#установка-и-настройка)

[2.1. Установка компонента «pg_ulid» в ОС GNU/Linux [5](#установка-компонента-pg_ulid-в-ос-gnulinux)](#установка-компонента-pg_ulid-в-ос-gnulinux)

[2.2. Настройка конфигурационного файла «postgresql.conf» [6](#настройка-конфигурационного-файла-postgresql.conf)](#настройка-конфигурационного-файла-postgresql.conf)

[2.3. Установка расширения «ulid» [6](#установка-расширения-ulid)](#установка-расширения-ulid)

[3. Функциональные возможности компонента [8](#функциональные-возможности-компонента)](#функциональные-возможности-компонента)

[3.1.1. Функция gen_ulid() [9](#функция-gen_ulid)](#функция-gen_ulid)

[3.1.2. Конструкции приведения типа ulid к тексту и наоборот [9](#конструкции-приведения-типа-ulid-к-тексту-и-наоборот)](#конструкции-приведения-типа-ulid-к-тексту-и-наоборот)

[3.1.3. Конструкции приведения типа ulid к штампу времени [10](#конструкции-приведения-типа-ulid-к-штампу-времени)](#конструкции-приведения-типа-ulid-к-штампу-времени)

[3.1.4. Использование нового типа данных «ulid» в таблицах пользователя [11](#использование-нового-типа-данных-ulid-в-таблицах-пользователя)](#использование-нового-типа-данных-ulid-в-таблицах-пользователя)

[3.1.5. Сравнение двух ulid-значений [13](#сравнение-двух-ulid-значений)](#сравнение-двух-ulid-значений)

[3.1.6. Использование нового типа данных в индексах пользователя [15](#использование-нового-типа-данных-в-индексах-пользователя)](#использование-нового-типа-данных-в-индексах-пользователя)

[4. Удаление компонента [19](#удаление-компонента)](#удаление-компонента)

[Термины и определения [20](#_Toc215497086)](#_Toc215497086)

[Перечень сокращений [21](#_Toc215497087)](#_Toc215497087)

# Назначение компонента

Компонент «pg_ulid» предназначен для поддержки в СУБД типа данных ULID (128 бит) с полноценным использованием в таблицах, запросах и индексах.

Компонент обладает функцией монотонности в случае генерации большого количество случайных значений в рамках одной миллисекунды, в формате до 80 бит.

**Например**

> ulid() -- 01BX5ZZKBKACTAV9WEVGEMMVRY
>
> ulid() -- 01BX5ZZKBKACTAV9WEVGEMMVRZ
>
> ulid() -- 01BX5ZZKBKACTAV9WEVGEMMVS0

В таком случае временная часть ULID будет постоянной, а случайная часть будет генерироваться в виде последовательности значений. Если же генерация значений происходит в разные миллисекунды реального времени, то случайная часть будет именно случайной. Свойство порядка будет обеспечивать временная часть.

## Условия применения

Компонент «pg_ulid» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем Windows и GNU/Linux.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th>В текущей реализации не поддерживается управление компонентом «pg_ulid» из компонента пользовательского веб-интерфейса для администраторов<br />
«Jatoba data safe»Ограничений по совместимости с другими компонентами нет.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# Установка и настройка

Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

## Установка компонента «pg_ulid» в ОС GNU/Linux

Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке, либо доустановить.

Установку компонента возможно провести двумя способами:

1)  
2)  

установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- 

> для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:apt-get install jatoba5-pg-ulid

- 

> для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:yum install jatoba5-pg_ulid

Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- 

> ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:apt-get install jatoba5-pg_ulid

- 

> openSUSE также распространяется в виде rpm-пакетов, но использует собственный пакетный менеджер zypper, для нее команда установки выглядит следующим образом:zypper install jatoba5-pg_ulid

Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba6-pg_ulid и т.п.

Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Настройка конфигурационного файла «postgresql.conf»

В разделе «Shared Library Preloading», для последующей загрузки расширения, установить параметр:

> shared_preload_libraries = 'ulid'

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image3.png" style="width:7.10807in;height:1.35652in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-20 04-01-47.png" />

Рисунок . – Параметр загрузки расширения

Для применения параметров потребуется перезапустить СУБД.

## Установка расширения «ulid»

После перезагрузки СУБД станет доступной установка расширения «ulid».

> CREATE EXTENSION ulid;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image4.png" style="width:7.0114in;height:1.88696in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-20 04-05-31.png" />

Рисунок . – Команда установки расширения «ulid»

В результате выполненных действий установится расширение «ulid».

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image5.png" style="width:6.9644in;height:2.07826in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-20 04-07-18.png" />

Рисунок . – Вывод установленных расширений

# Функциональные возможности компонента

После установки расширения в составе выбранной базы данных пользователю становятся доступны следующие объекты БД, вносимые расширением:

1)  

Тип данных ulid Размер поля 128 бит; временнАя часть= старшие 48 бит; случайная часть = младшие 80 бит.

Временная часть отвечает за порядок следования случайных значений.

Случайная часть за генерацию уникальных значений (вероятность коллизии 10^-24).

2)  

- 
- 
- 
- 

3)  
4)  
5)  
6)  

> Операторы и функции для работы с типом данных ulid:функция gen_ulid() (см .п. 3.1.1);конструкции приведения типа ulid к тексту и наоборот (см .п. 3.1.2)конструкции приведения типа ulid к штампу времени (см. п. 3.1.3);сравнение двух ulid-значений (см. п. 3.1.5); Использование нового типа данных в таблицах пользователя (см. п. 3.1.4);Использование нового типа данных в индексах пользователя в том числе и в составных индексах указанных типов (см. п. 3.1.6);Использование нового типа данных в представлениях и материализованных представлениях в качестве полей результата запросаИспользование нового типа данных в триггерных процедурах (поддерживается язык PL/pgSQL) в качестве элемента, который можно вставлять/изменять/удалять или читать значение этого элемента в составе кода триггерной процедуры.
>
> **  
> **

### Функция gen_ulid() 

Функция gen_ulid() возвращает случайный идентификатор.

Может применяться в SQL запросах в выражениях там, где допустим вызов функции.

**Например**

> SELECT gen_ulid();
>
> SELECT ... FROM ... WHERE ... gen_ulid() ...

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image6.png" style="width:6.98564in;height:1.72642in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-21 02-18-01.png" />

Рисунок . – Генерация случайного ulid

### Конструкции приведения типа ulid к тексту и наоборот

Конструкции приведения типа «ulid» к тексту и наоборот имеет синтаксис SQL-команды:

> SELECT ulid_field::text ....
>
> SELECT 'XXXXXXX...'::ulid ...

**Например**

Преобразовать значение в текст:

> SELECT ('7ZZZZZZZZZZZZZZZZZZZZZZZZZ'::ulid)::text;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image7.png" style="width:6.7834in;height:1.72156in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-21 01-47-18.png" />

Рисунок . – Преобразование значения в тип данных «text»

Преобразовать значение в тип данных «ulid»:

> SELECT ('7ZZZZZZZZZZZZZZZZZZZZZZZZZ'::ulid);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image8.png" style="width:7.11397in;height:1.79167in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-21 01-49-42.png" />

Рисунок . - Преобразование значение в тип данных «ulid»

### Конструкции приведения типа ulid к штампу времени

> SELECT ulid_field::timestamp ...
>
> SELECT ts_field::ulid ...

**Например**

Выполнить преобразование в timestamp:

> SELECT ('7ZZZZZZZZZZZZZZZZZZZZZZZZZ'::ulid)::timestamp;
>
> SELECT ('7ZZZZZZZZZZZZZZZZZZZZZZZZZ'::ulid)::timestamp;
>
> SELECT ('01H55TNAQ96WPSWE6WZRCH9G0C'::ulid)::timestamp;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image9.png" style="width:7.0625in;height:3.83257in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-20 23-40-56.png" />

Рисунок . – Преобразование значения из формата «ulid» в формат «timestamp»

Выполнить преобразование в ulid:

> SELECT('2023-07-12 19:53:43.401'::timestamp::ulid);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image10.png" style="width:7.10417in;height:1.78361in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-20 23-42-46.png" />

Рисунок . – Преобразование значения из формата timestamp в формат ulid

### Использование нового типа данных «ulid» в таблицах пользователя

Компонент «pg_ulid» вводит новый тип данных «ulid» в таблицах пользователя. При этом используется синтаксис SQL-команды:

> CREATE TABLE t ( id ulid ... );

Допустимы и другие конструкции создания и изменений полей через оператора ALTER TABLE.

**Например**

Создать таблицу:

> \# CREATE TABLE t0 (id ulid DEFAULT gen_ulid() NOT null);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image11.png" style="width:7.19268in;height:1.1875in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-20 23-50-16.png" />

Рисунок . – Создание таблицы с типом данных «ulid»

Вставить произвольный ulid:

> \# INSERT INTO t0 SELECT gen_ulid() FROM generate_series(1,100000);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image12.png" style="width:7.12268in;height:1.16667in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-20 23-51-09.png" />

Рисунок . – Вставка произвольных значений

Указать первичный ключ:

> ALTER TABLE t0 ADD PRIMARY KEY (id);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image13.png" style="width:7.10377in;height:1.10577in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-20 23-51-55.png" />

Рисунок . – Установка первичного ключа

Вывести содержание таблицы:

> SELECT id FROM public.t0;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image14.png" style="width:6.98603in;height:3.25327in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-21 01-11-05.png" />

Рисунок . – Вывод содержания таблицы

Тип данных «ulid» допускает применение по отношению к нему всех типов ограничений таблицы: PRIMARY KEY, NULL/NOT NULL, UNIQUE, CHECK, REFERENCE, GENERATED

> CREATE TABLE t ( id ulid PRIMARY KEY, ... );

и другие конструкции создания и изменений полей через ALTER TABLE.

### Сравнение двух ulid-значений

Данные выражения возвращают тип boolean и могут применяться в SQL запросах в контексте выражений:

- 
- 
- 
- 
- 
- 

= оператор равенства двух ulid;\<\> оператор неравенства двух ulid;\> больше;\>= больше или равно;\< меньше;\<= меньше или равно.**Например**

Создать таблицу:

> \# CREATE TABLE ulid1
>
> (
>
> ulid_field ULID,
>
> text_field TEXT DEFAULT(now())
>
> );

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image15.png" style="width:7.0773in;height:1.76032in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-21 05-25-40.png" />

Рисунок . – Создание таблицы

Вставить данные:

> \# INSERT INTO ulid1(ulid_field) VALUES('11111111111111111111111111');
>
> \# INSERT INTO ulid1(ulid_field) VALUES('22222222222222222222222222');
>
> \# INSERT INTO ulid1(ulid_field) VALUES('3F3E3C3B3A3039383736353433');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image16.png" style="width:7.09553in;height:1.76877in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-21 05-27-00.png" />

Рисунок . – Вставка значений в таблицу

Выполнить проверку операторов сравнения:

> \# SELECT COUNT(\*) FROM ulid1 WHERE ulid_field = '3F3E3C3B3A3039383736353433';
>
> \# SELECT COUNT(\*) FROM ulid1 WHERE ulid_field \<\> '11111111111111111111111111';
>
> \# SELECT COUNT(\*) FROM ulid1 WHERE ulid_field \< '22222222222222222222222222';

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image17.png" style="width:7.13904in;height:3.4878in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-21 05-33-41.png" />

Рисунок . – Проверка операторов сравнения

### Использование нового типа данных в индексах пользователя

Компонент «pg_ulid» вводит новый тип данных «ulid» в индексах пользователя. В настоящее время поддерживаются типы индексов «BTREE» и «HASH».

Пользователь может создать индекс по полю типа данных «ulid» используя синтаксис SQL-команды:

> CREATE INDEX my_idx on my_table \[ USING btree \| hash \] (id);

**Например**

Создать таблицу:

> \# CREATE TABLE ulid1
>
> (
>
> ulid_field ULID,
>
> text_field TEXT DEFAULT(now())
>
> );

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image18.png" style="width:7.1195in;height:1.77083in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-21 01-14-32.png" />

Рисунок . – Создание таблицы

Вставить данные:

> \# INSERT INTO ulid1(ulid_field) VALUES('11111111111111111111111111');
>
> \# INSERT INTO ulid1(ulid_field) VALUES('22222222222222222222222222');
>
> \# INSERT INTO ulid1(ulid_field) VALUES('3F3E3C3B3A3039383736353433');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image19.png" style="width:7.07634in;height:1.71875in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-21 01-15-57.png" />

Рисунок . – Вставка данных

Сгенерировать записи:

> INSERT INTO ulid1 (ulid_field) SELECT gen_ulid() FROM generate_series(1,100000);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image20.png" style="width:7.07017in;height:1.1941in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-21 01-06-40.png" />

Рисунок . – Генерирование записей

Создать индексы «BTREE», «HASH»:

> \# CREATE INDEX ulid1_btree ON ulid1 USING BTREE (ulid_field);
>
> \# CREATE INDEX ulid1_hash ON ulid1 USING HASH (ulid_field);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image21.png" style="width:7.05337in;height:1.43738in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-21 01-17-09.png" />

Рисунок 3.16 – Создание индексов

Вывести план запроса:

> EXPLAIN SELECT \* FROM public.ulid1 WHERE ulid_field = '11111111111111111111111111';

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image22.png" style="width:7.11266in;height:1.9913in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-21 01-05-40.png" />

Рисунок . – Вывод плана запроса

Вывести содержание таблицы:

> SELECT \* FROM public.ulid1;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_ulid/media/image23.png" style="width:6.65217in;height:2.32985in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-21 01-04-00.png" />

Рисунок . – Вывод содержания таблицы с индексами BTREE, HASH

Индексы успешно созданы и используются. 

# Удаление компонента

Удаление компонента проводится в несколько этапов.

Удалить пакет:

- 

> для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда удаления следующая:apt-get remove jatoba\<version\>-pg-ulid

- 

> для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда удаления следующая:yum remove jatoba\<version\>-pg_ulid

После чего необходимо убрать загрузку модуля из конфигурационного файла «postgresql.conf», поставив знак \#, или удалить имя расширения из списка расширений.

> \#shared_preload_libraries = 'ulid'

Расширение может быть удалено из базы данных пользователя SQL-командой:

> DROP EXTENSION ulid;

Но при условии, что тип данных ulid нигде более в базе данных не используется.

В противном случае будет ошибка о наличии зависимостей - это нормально, пользователь сам должен разрешить эту зависимость (удалить использование типа ulid или конвертировать такие поля в text).

Расширение может быть удалено каскадным методом из базы данных пользователя SQL-командой:

> DROP EXTENSION ulid CASCADE;

# 

<span id="_Toc215497086" class="anchor"></span>Термины и определения**ULID (Universally Unique Lexicographically Sortable Identifier)** - это уникальный, глобально уникальный, лексикографически сортируемый идентификатор. ULID представляет собой строку, состоящую из двух частей: даты и времени создания объекта и уникального случайного числа. Обе части преобразуются в числовое значение, что позволяет сортировать объекты в лексикографическом порядке. ULID используется для уникальной идентификации объектов без использования централизованных серверов или баз данных, обеспечивая децентрализованное управление и хранение данных.

# 

| <span id="_Toc215497087" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language |
|:---|----|----|
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
