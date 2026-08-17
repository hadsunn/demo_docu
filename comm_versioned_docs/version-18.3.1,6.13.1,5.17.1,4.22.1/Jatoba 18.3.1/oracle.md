---
title: Обеспечение работы с СУБД Oracle
---

**АННОТАЦИЯ**

В документе приведены сведения, необходимые для установки и эксплуатации компонентов, обеспечивающих работу с СУБД «Oracle», таких как:

- компонент совместимости с СУБД Oracle (OraFCE);

- компонент совместимости с системой глобальных переменных СУБД Oracle (pg_Variables);

- компонент для работы с таблицами Oracle как с внешними таблицами (Oracle_FDW).

Настоящее руководство предназначено для администраторов СУБД.

:::info Дополнительная информация
Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра
4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.

Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-6/bin».

Для СУБД «Jatoba» версии ядра 4 используются следующие версии компонент: OraFCE – 3.22.0, pg_Variables – 1.2.0, Oracle_FDW – 1.2.0.

Для	СУБД	«Jatoba»	версии	ядра	5/6	используются	следующие	версии компонент: OraFCE – 4.3.0, pg_Variables – 1.2.5, Oracle_FDW – 1.2.0

Для СУБД «Jatoba» версии ядра 18 используются следующие версии компонент: OraFCE – 4.16, pg_Variables – 1.2.5, Oracle_FDW – 2.8.1
:::

## НАЗНАЧЕНИЕ КОМПОНЕНТА

Компонент «OraFCE» выполнен в виде расширения и имеет дополнительные функции и операторы для работы текстовыми и временными строками. Может применяться для миграции данных из Oracle в СУБД «Jatoba».

Все функции полностью совместимы с Oracle и учитывают все известные строки формата. Формат строк приведен в таблице [1.1](#_bookmark1).

<span id="_bookmark1" class="anchor"></span>Таблица 1.1 – Строки формата

<table>
<colgroup>
<col style="width: 36%" />
<col style="width: 33%" />
<col style="width: 30%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Формат</strong></p>
</th>
<th>
<p><strong>Обозначение (eng)</strong></p>
</th>
<th>
<p><strong>Обозначение (ru)</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Y, YY, YYY, YYYY, SYYY, SYEAR</p>
</td>
<td>
<p>year</p>
</td>
<td>
<p>год</p>
</td>
</tr>
<tr>
<td>
<p>I, IY, IYY, IYYY</p>
</td>
<td>
<p>iso year</p>
</td>
<td>
<p>система дат</p>
</td>
</tr>
<tr>
<td>
<p>Q</p>
</td>
<td>
<p>quarter</p>
</td>
<td>
<p>квартал</p>
</td>
</tr>
<tr>
<td>
<p>WW</p>
</td>
<td>
<p>week, day as first day of year</p>
</td>
<td>
<p>неделя, день как первый день года</p>
</td>
</tr>
<tr>
<td>
<p>IW</p>
</td>
<td>
<p>week, beginning Monday</p>
</td>
<td>
<p>неделя, начинающаяся с понедельника</p>
</td>
</tr>
<tr>
<td>
<p>W</p>
</td>
<td>
<p>week, day as first day of month</p>
</td>
<td>
<p>неделя, день как первый день месяца</p>
</td>
</tr>
<tr>
<td>
<p>DAY, DY, D</p>
</td>
<td>
<p>first day of week, sunday</p>
</td>
<td>
<p>первый день недели, воскресенье</p>
</td>
</tr>
<tr>
<td>
<p>MONTH, MON, MM, RM</p>
</td>
<td>
<p>Month</p>
</td>
<td>
<p>месяц</p>
</td>
</tr>
<tr>
<td>
<p>CC,SCC</p>
</td>
<td>
<p>Century</p>
</td>
<td>
<p>век</p>
</td>
</tr>
<tr>
<td>
<p>DDD,DD,J</p>
</td>
<td>
<p>day</p>
</td>
<td>
<p>день</p>
</td>
</tr>
<tr>
<td>
<p>HH, HH12, HH24</p>
</td>
<td>
<p>hour</p>
</td>
<td>
<p>час</p>
</td>
</tr>
<tr>
<td>
<p>MI</p>
</td>
<td>
<p>minute</p>
</td>
<td>
<p>минуты</p>
</td>
</tr>
</tbody>
</table>

Компонент «pg_Variables» выполнен в виде расширения и предназначен для работы с переменными различных типов. Созданные переменные существуют только в рамках текущей пользовательской сессии.

Компонент «Oracle_FDW» дает возможность создать обертку (Foreign-Data Wrapper, FDW) для доступа к базе данных Oracle.

### Условия применения

Компонент «OraFCE» может использоваться совместно с СУБД «Jatoba» версий 1.x и выше, под управлением ОС GNU/Linux.

Встроенные функции Oracle date были протестированы на соответствие требованиям Oracle 10.

Диапазоны дат с 1960 по 2070 год работают корректно. Дата до 1100-03-01 не может быть проверена из-за ошибки в Oracle.

Компонент «pg_Variables» может использоваться совместно с СУБД «Jatoba» версий 1.x и выше, под управлением ОС GNU/Linux.

Компонент «Oracle_FDW» может использоваться совместно с СУБД «Jatoba» версий 1.x и выше, под управлением ОС GNU/Linux. Для работы с расширением необходимо установить Oracle Instance Client версии 12.2 и выше.

Ограничений по совместимости с другими компонентами нет.

## УСТАНОВКА И НАСТРОЙКА

Установка компонента должна производиться от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

### Установка компонентов ОС GNU/Linux

Компоненты устанавливаются в составе СУБД «Jatoba». Их возможно установить при первичной установке, либо доустановить.

Установку компонент возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

Компоненты выполнены в виде отдельного deb или rpm-пакета. Установка компонент осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты):

  - команда установки компонента «Oracle_FDW» следующая:


```
apt-get install jatoba18-oracle-fdw
```


- команда установки компонента «OraFCE» следующая:


```
apt-get install jatoba18-orafce
```


- команда установки компонента «pg_Variables» следующая:


```
apt-get install jatoba18-pg-variables
```


- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты):

  - команда установки компонента «Oracle_FDW» следующая:


```
yum install jatoba18-oracle_fdw
```


- команда установки компонента «OraFCE» следующая:


```
yum install jatoba18-orafce
```


- команда установки компонента «pg_Variables» следующая:


```
yum install jatoba18-pg_variables
```


Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов:


```
apt-get install jatoba18-oracle_fdw 
apt-get install jatoba18-orafce
apt-get install jatoba18-pg_variables
```


Установка компонентов в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba5-oracle-fdw и т.п.

:::warning Важная информация
Для корректной работы компонента oracle_fdw требуется установка дополнительной библиотеки libnsl. Выполнить установку можно стандартными средствами операционной системы, используя пакетный менеджер.
:::

Удаление компонентов также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

### Установка расширений

### Установка расширения «orafce»

Расширение устанавливается от имени и с правами привилегированного пользователя при помощи SQL-команды:


```sql
CREATE EXTENSION orafce;
```


### Установка расширения «pg_variables»

Расширение устанавливается от имени и с правами привилегированного пользователя при помощи SQL-команды:


```sql
CREATE EXTENSION pg_variables;
```


Убедиться, что расширение установлено возможно SQL-командой:

```sql
\dx
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image3.png)



Рисунок 2.1 – Установка расширения pg_variables и вывод списка установленных расширений

### Установка расширения «oracle_fdw»

Расширение устанавливается от имени и с правами привилегированного пользователя при помощи SQL-команды:


```sql
CREATE EXTENSION oracle_fdw;
```


## ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА «OraFCE»

### Функции работы с датой

#### Функция «add_months»

Функция прибавляет определенное количество месяцев к заданной дате.


```sql
add_months(date, integer) date
```


Функция применяется с параметрами, приведенными в таблице [3.1](#_bookmark12).

<span id="_bookmark12" class="anchor"></span>Таблица 3.1 – Параметры функции «add_months»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>количество месяцев для добавления</p>
</td>
</tr>
</tbody>
</table>

Например, требуется прибавить к дате 1 месяц:


```sql
add_months(date '2022-06-19',1) -> 2022-07-19
```


SQL-запрос будет выглядеть следующим образом:

```sql
SELECT
    oracle.add_months(event_time::date,1)
    from
    security_event where id_event = 1;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image4.png)



Рисунок 3.1 – Пример выполнения SQL-запроса с использованием функции «add_months»

#### Функция «last_day»

Функция возвращает последний день месяца заданной даты.


```sql
last_day(date '') date
```


Функция применяется с параметрами, приведенными в таблице [3.2](#функциональные-возможности-компонента-orafce).

Таблица 3.2 – Параметры функции «last_day»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
</tbody>
</table>

Допустим, что текущая дата 2022-06-24 и требуется вычислить последний день месяца.


```sql
last_day(date '2022-06-24) -> 2022-06-30
```


В этом случае SQL-запрос будет следующим:

```sql
SELECT
    oracle.last_months(event_time::date,1)
    from
    security_event where id_event = 1;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image5.png)



Рисунок 3.2 – Пример выполнения SQL-запроса с использованием функции «last_day»

#### Функция «next_day»

Функция возвращает заданный день недели, следующий после заданной даты.


```sql
next_day(date, text) date
```


Функция применяется с параметрами, приведенными в таблице [3.3](#_bookmark16).

<span id="_bookmark16" class="anchor"></span>Таблица 3.3 – Параметры функции «next_day(date, text) date»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>название дня недели</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT next_day(date '2005-05-24', 'monday');
```


Данный SQL-запрос можно интерпретировать как: «Верни мне дату, которая будет понедельником после указанной даты» или как «Верни мне дату дня недели заданного вторым параметром после даты заданной первым параметром»:

```sql
SELECT oracle.next_day(event_time::date, 'monday') 
    from security_event 
    where id_event = 1;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image6.png)



Рисунок 3.3 – Пример выполнения SQL-запроса с использованием функции «next_day(date, text) date»

Функция возвращает заданный день недели, следующий после заданной даты, используя номер дня недели.


```sql
next_day(date, integer) date
```


Функция применяется с параметрами, приведенными в таблице [3.4](#_bookmark17).

<span id="_bookmark17" class="anchor"></span>Таблица 3.4 – Параметры функции «next_day(date, integer) date»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>порядковый номер дня недели (начиная с воскресенья)</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT
    oracle.next_day(event_time::date, 2)
    from
    security_event where id_event = 1;
```


Данный SQL-запрос можно интерпретировать как: «Верни мне дату, которая будет первым днем недели (понедельником), после указанной даты».

![](@site/docs/assets/images/com18.3.1/oracle/media/image7.png)

Рисунок 3.4 – Пример выполнения SQL-запроса с использованием функции «next_day(date, integer) date»

#### Функция «oracle.months_between»

Функция возвращает количество календарных месяцев между двумя датами. В том случае, если между датами проходит не ровное количество месяцев, дробная часть возвращаемого числа будет вычислена на основе 31-дневного месяца.


```sql
oracle.months_between(timestamp with time zone, timestamp with time zone)
```


Функция применяется с параметрами, приведенными в таблице [3.5](#_bookmark19).

<span id="_bookmark19" class="anchor"></span>Таблица 3.5 – Параметры функции «oracle.months_between»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>timestamp</p>
</td>
<td>
<p>первая заданная дата</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>timestamp</p>
</td>
<td>
<p>вторая заданная дата</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT oracle.months_between(event_time::date '2022-01-19'::date) 
    from security_event 
    where id_event =1;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image8.png)



Рисунок 3.5 – Пример выполнения SQL-запроса с использованием функции «oracle.months_between»

#### Функция «oracle.to_date»

Функция позволяет преобразовывать:

- текстовую строку в тип данных «timestamp without time zone»;

- текстовую строку в тип данных «oracle.date».

#### Преобразование в тип данных «timestamp without time zone»

Функция преобразовывает текстовую строку в тип данных «timestamp without time zone». В качестве второго параметра указывается шаблон, по которому записано время в изначальной строке.


```sql
oracle.to_date(text,text)
```


Функция применяется с параметрами, приведенными в таблице [3.6](#_bookmark21).

<span id="_bookmark21" class="anchor"></span>Таблица 3.6 – Параметры функции «oracle.to_date»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>формат, в котором записано время в изначальной строке</p>
</td>
</tr>
</tbody>
</table>

Допустим есть текстовая строка 07/12/22 04:12:12, с датой в формате месяц (ММ), день (DD), год (YY) и временем в формате час (HH24), минуты(MI) и секунды(SS).

В SQL-запросе указываем:

- дату в текстовом формате;


```
'07/12/22 04:12:12'
```


- шаблон даты в текстовом формате;


```
'MM/DD/YY HH24:MI:SS'
```


SQL-запрос будет следующим:

```sql
SELECT oracle.to_date('07/12/22 04:12:12', 'MM/DD/YY HH24:MI:SS');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image9.png)



Рисунок 3.6 – Пример выполнения SQL-запроса с использованием функции «oracle.date»

#### Преобразование в тип данных «oracle.date»

Функция преобразовывает текстовую строку в тип данных «oracle.date». В данном случае изначальную строку необходимо вводить в определенном формате.


```sql
oracle.to_date(text)
```


Функция применяется с параметрами, приведенными в таблице [3.7](#_bookmark22).

<span id="_bookmark22" class="anchor"></span>Таблица 3.7 – Параметры функции «oracle.to_date»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

![](@site/docs/assets/images/com18.3.1/oracle/media/image10.png)

SELECT oracle.to_date('07/12/22 04:12:12');

Рисунок 3.7 – Пример выполнения SQL-запроса с использованием функции «oracle.to_date»

При выполнении SQL-запроса были введены текстовые данные:


```
'07/12/22 04:12:12'
```


и вывод данных в формате «oracle.date»:


```
2022-12-07 04:12:12'
```


#### Функция «oracle.sysdate»

Функция возвращает значение времени в часовом поясе сервера в формате «timestamp».


```sql
oracle.sysdate()
```


SQL-запрос будет следующим:


```sql
SELECT oracle.sysdate();
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image11.png)

Рисунок 3.8 – Пример выполнения SQL-запроса с использованием функции

#### Функция «oracle.dbtimezone»

Функция возвращает часовой пояс сервера.


```sql
oracle.dbtimezone()
```


SQL-запрос будет следующим:

```sql
SELECT oracle.dbtimezone();
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image12.png)



Рисунок 3.9 – Пример выполнения SQL-запроса с использованием функции «oracle.dbtimezone»

#### Функция «oracle.sessiontimezone»

Функция возвращает часовой пояс сеанса, который указан как текущий часовой пояс СУБД.


```sql
oracle.sessiontimezone()
```


SQL-запрос будет следующим:


```sql
SELECT oracle.sessiontimezone();
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image13.png)

Рисунок 3.10 – Пример выполнения SQL-запроса с использованием функции «oracle.sessiontimezone»

#### Функция «oracle.to_char»

Функция возвращает значение заданного времени в формате «nls_date_format».


```sql
oracle.to_char(timestamp)
```


Функция применяется с параметрами, приведенными в таблице [3.8](#_bookmark27).

<span id="_bookmark27" class="anchor"></span>Таблица 3.8 – Параметры функции «oracle.to_char»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>timestamp</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT oracle.to_char(oracle.to_date('12072022 12:13:44+05:30', 'DDMMYYYY HH24:MI:SS'));
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image14.png)



Рисунок 3.11 – Пример выполнения SQL-запроса с использованием функции «oracle.to_char»

При выполнении SQL-запроса были введены текстовые данные в формате «nls_date_format»:


```
'12072022 12:13:44+05:30'
```


и вывод данных в формате «to_char»:


```
'2022-12-07 04:12:12'
```


### Операторы для работы с датой

#### Оператор «oracle.+»

Оператор позволяет добавить к заданной дате некоторое количество дней.

```sql
oracle.+(oracle.date,smallint) 
oracle.+(oracle.date,integer)
```

Оператор применяется с параметрами, приведенными в таблице [3.9](#_bookmark30).

<span id="_bookmark30" class="anchor"></span>Таблица 3.9 – Параметры оператора «oracle.+(oracle.date,smallint)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer/</p>
<p>smallint</p>
</td>
<td>
<p>количество дней, которое необходимо добавить</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT (oracle.add_months(event_time::date, 1) + 1::smallint) 
    as add_day from security_event 
    where id_event = 1;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image15.png)



Рисунок 3.12 – Пример выполнения SQL-запроса с использованием оператора «oracle.+(oracle.date,smallint)» 

SQL-запрос будет следующим:


```sql
SELECT (oracle.add_months(event_time::date, 1) + 1::integer) 
    as add_day from security_event 
    where id_event = 1;
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image16.png)

Рисунок 3.13 – Пример выполнения SQL-запроса с использованием оператора «oracle.+(oracle.date,integer)»

#### Оператор «oracle.-»

Оператор позволяет:

- отнять от заданной даты некоторое количество дней;

- вычесть из одной даты другую.

##### Вычитание из даты дней

Оператор позволяет отнять от заданной даты некоторое количество дней.


```sql
oracle.-(oracle.date,smallint) 
oracle.-(oracle.date,integer)
```


Оператор применяется с параметрами, приведенными в таблице [3.10](#_bookmark32).

<span id="_bookmark32" class="anchor"></span>Таблица 3.10 – Параметры функции «oracle.-»

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 17%" />
<col style="width: 64%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;"><strong>Обозначение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer/ smallint</p>
</td>
<td>
<p>количество дней, которое необходимо вычесть</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос для типа данных «smallint» будет следующим:

```sql
SELECT (oracle.add_months(event_time::date, 1) – 2::smallint) 
    as sub_day 
    from security_event 
    where id_event = 1;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image17.png)


Рисунок 3.14 – Пример выполнения SQL-запроса с использованием оператора «oracle.-»

SQL-запрос для типа данных «integer» будет следующим:

```sql
SELECT (oracle.add_months(event_time::date, 1) – 2::integer) 
    as sub_day 
    from security_event 
    where id_event = 1;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image18.png)



Рисунок 3.15 – Пример выполнения SQL-запроса с использованием оператора «oracle.-»

##### Вычитание дат

Оператор позволяет вычесть из одной даты другую. Возвращает число двойной точности.


```sql
oracle.-(oracle.date,oracle.date)
```


Оператор применяется с параметрами, приведенными в таблице [3.11](#_bookmark33).

<span id="_bookmark33" class="anchor"></span>Таблица 3.11 – Параметры оператора «oracle.-»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>дата, которую необходимо вычесть</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT (oracle.add_months(event_time::date, 1) – oracle.to_date('2021-06-11 10:00:00', yyyy-mm-dd hh24:mi:ss')) 
    as sub_day 
    from security_event 
    where id_event = 1;
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image19.png)

Рисунок 3.16 – Пример выполнения SQL-запроса с использованием оператора «oracle.-»

### Функции модуля «PLVdate»

Данный модуль предоставляет функции для работы с рабочими, выходными и праздничными днями. На данный момент существуют конфигурации для следующих стран: Чехия, Германия, Австрия, Польша, Словакия, Россия, Великобритания и США. Однако модуль позволяет и самостоятельную настройку рабочих или нерабочих дней.

#### Функция «plvdate.default_holidays»

Функция позволяет установить конфигурацию по умолчанию из существующего списка активных для выбора стран.


```sql
plvdate.default_holidays(varchar)
```


Функция применяется с параметрами, приведенными в таблице [3.12](#_bookmark36).

<span id="_bookmark36" class="anchor"></span>Таблица 3.12 – Параметры функции «plvdate.default_holidays»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>заданная конфигурация для модуля</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvdate.default_holiday('Russia');

```

![](@site/docs/assets/images/com18.3.1/oracle/media/image20.png)


Рисунок 3.17 – Пример выполнения SQL-запроса с использованием функции «plvdate.default_holidays»

#### Функция «plvdate.nearest_bizday»

Функция возвращает ближайшую рабочую дату к указанной дате. Под «ближайшей» понимается дата, с которой минимальная разница в днях относительно указанной. Таким образом, функция может вернуть как предыдущую, так и последующую дату.


```sql
plvdate.nearest_bizday(day date)
```


Функция применяется с параметрами, приведенными в таблице [3.13](#_bookmark38).

<span id="_bookmark38" class="anchor"></span>Таблица 3.13 – Параметры функции «plvdate.nearest_bizday»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

![](@site/docs/assets/images/com18.3.1/oracle/media/image21.png)


```sql
SELECT plvdate.nearest_bizday('2022-01-01'::date);
```


Рисунок 3.18 – Пример выполнения SQL-запроса с использованием функции «plvdate.nearest_bizday»

#### Функция «plvdate.next_bizday»

Функция возвращает следующую рабочую дату относительно указанной даты. В данном случае функция может вернуть только последующую дату.


```sql
plvdate.next_bizday(day date)
```


Функция применяется с параметрами, приведенными в таблице [3.14](#_bookmark40).

<span id="_bookmark40" class="anchor"></span>Таблица 3.14 – Параметры функции «plvdate.next_bizday»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvdate.next_bizday('2022-01-01'::date);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image22.png)



Рисунок 3.19 – Пример выполнения SQL-запроса с использованием функции «plvdate.next_bizday»

#### Функция «plvdate.prev_bizday»

Функция возвращает предыдущую рабочую дату относительно указанной даты. В данном случае функция может вернуть только предшествующую дату.


```sql
plvdate.prev_bizday(day date)
```


Функция применяется с параметрами, приведенными в таблице [3.15](#_bookmark42).

<span id="_bookmark42" class="anchor"></span>Таблица 3.15 – Параметры функции «plvdate.prev_bizday»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvdate.prev_bizday('2022-01-03'::date);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image23.png)

Рисунок 3.20 – Пример выполнения SQL-запроса с использованием функции «plvdate.prev_bizday»

#### Функция «plvdate.add_bizdays»

Функция возвращает дату, полученную путем прибавления к указанной дате некоторого количества рабочих дней.


```sql
plvdate.add_bizdays(day date, days int)
```


Функция применяется с параметрами, приведенными в таблице [3.16](#_bookmark44) . <span id="_bookmark44" class="anchor"></span>Таблица 3.16 – Параметры функции «plvdate.add_bizdays»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>количество рабочих дней для добавления</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvdate.add_bizdays('2022-07-10'::date, 10);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image24.png)



Рисунок 3.21 – Пример выполнения SQL-запроса с использованием функции «plvdate.add_bizdays»

#### Функция «plvdate.bizdays_between»

Функция возвращает количество рабочих дней между двумя указанными датами.


```sql
plvdate.bizdays_between(day1 date, day2 date)
```


Функция применяется с параметрами, приведенными в таблице [3.17](#_bookmark46).

<span id="_bookmark46" class="anchor"></span>Таблица 3.17 – Параметры функции «plvdate.bizdays_between»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>начальная заданная дата</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>конечная заданная дата</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvdate.bizdays_between('2021-12-30'::date, '2022-01-10'::date);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image25.png)



Рисунок 3.22 – Пример выполнения SQL-запроса с использованием функции «plvdate.bizdays_between»

#### Функция «plvdate_isbizday»

Функция позволяет узнать является ли указанная дата рабочим днем. Если дата рабочая, будет возвращено значение «t», в ином случае будет возвращено «f».


```sql
plvdate_isbizday(date)
```


Функция применяется с параметрами, приведенными в таблице [3.18](#_bookmark48).

<span id="_bookmark48" class="anchor"></span>Таблица 3.18 – Параметры функции «plvdate_isbizday»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос с выводом параметра рабочей даты будет следующим:

```sql
SELECT plvdate.isbizday ('2022-01-01'::date);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image26.png)



Рисунок 3.23 – Пример выполнения SQL-запроса с использованием функции «plvdate_isbizday»

SQL-запрос с выводом параметра выходного дня будет следующим:


```sql
SELECT plvdate.isbizday ('2022-01-10'::date);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image27.png)

Рисунок 3.24 – Пример выполнения SQL-запроса с использованием функции «plvdate_isbizday»

#### Функция «plvdate.set_nonbizday»

Функция позволяет установить нерабочим определенный день недели.

Выражение «DOW» можно интерпретировать, как «Day off week» и перевести «Выходной день в неделю»


```sql
plvdate.set_nonbizday(dow varchar)
```


Функция может быть полезной, если в отличии от производственного календаря требуется в календаре установить отметку о выходном дне.

Функция применяется с параметрами, приведенными в таблице [3.19](#_bookmark50).

<span id="_bookmark50" class="anchor"></span>Таблица 3.19 – Параметры функции «plvdate.set_nonbizday»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>заданный день недели</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvdate.set_nonbizday('saturday');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image28.png)



Рисунок 3.25 – Пример выполнения SQL-запроса с использованием функции «plvdate.set_nonbizday(dow varchar)»

#### Функция «plvdate.unset_nonbizday»

Функция позволяет установить рабочим определенный день недели.


```sql
plvdate.unset_nonbizday(dow varchar)
```


Функция применяется с параметрами, приведенными в таблице [3.20](#_bookmark52).

<span id="_bookmark52" class="anchor"></span>Таблица 3.20 – Параметры функции «plvdate.unset_nonbizday»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>заданный день недели</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvdate.unset_nonbizday('saturday');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image29.png)



Рисунок 3.26 – Пример выполнения SQL-запроса с использованием функции

#### Функция «plvdate.set_nonbizday»

Функция позволяет установить нерабочей определенную дату.


```sql
plvdate.set_nonbizday(day date) plvdate.set_nonbizday(day date, repeat bool)
```


Функция применяется с параметрами, приведенными в таблице [3.21](#_bookmark54).

<span id="_bookmark54" class="anchor"></span>Таблица 3.21 – Параметры функции «plvdate.set_nonbizday»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 6%" />
<col style="width: 10%" />
<col style="width: 22%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th colspan="2">
<p><strong>Тип данных</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="5">
<p>plvdate.set_nonbizday(day date)</p>
</td>
</tr>
<tr>
<td colspan="5"></td>
</tr>
<tr>
<td>
<p>#1</p>
</td>
<td colspan="2">
<p>date</p>
</td>
<td colspan="2">
<p>заданная дата</p>
</td>
</tr>
<tr>
<td colspan="5">
<p>plvdate.set_nonbizday(day date, repeat bool)</p>
</td>
</tr>
<tr>
<td colspan="5"></td>
</tr>
<tr>
<td colspan="2">
<p>№ изменения:</p>
</td>
<td colspan="2">
<p>Подпись отв. лица:</p>
</td>
<td>
<p>Дата внесения изм:</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3">
<p>plvdate.set_nonbizday(day date)</p>
</td>
</tr>
<tr>
<td colspan="3"></td>
</tr>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>boolean</p>
</td>
<td>
<p>при указании этого параметра как true заданная дата станет рабочей каждый год</p>
</td>
</tr>
</tbody>
</table>

SQL-запросы будут следующими:

```sql
SELECT plvdate.set_nonbizday('2022-01-01'::date);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image30.png)



Рисунок 3.27 – Пример выполнения SQL-запроса с использованием функции «plvdate.set_nonbizday(day date)»

```sql
SELECT plvdate.set_nonbizday('2022-11-04'::date, '1'::bool);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image31.jpeg)



Рисунок 3.28 – Пример выполнения SQL-запроса с использованием функции «plvdate.set_nonbizday(day date, repeat bool)»

#### Функция «plvdate.unset_nonbizday»

Функция позволяет установить рабочей определенную дату.


```sql
plvdate.unset_nonbizday(day date) plvdate.unset_nonbizday(day date, repeat bool)
```


Функция применяется с параметрами, приведенными в таблице [3.22](#_bookmark56).

<span id="_bookmark56" class="anchor"></span>Таблица 3.22 – Параметры функции «plvdate.unset_nonbizday»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3">
<p>plvdate.unset_nonbizday(day date)</p>
</td>
</tr>
<tr>
<td colspan="3"></td>
</tr>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
<tr>
<td colspan="3">
<p>plvdate.unset_nonbizday(day date, repeat bool)</p>
</td>
</tr>
<tr>
<td colspan="3"></td>
</tr>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>date</p>
</td>
<td>
<p>заданная дата</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>boolean</p>
</td>
<td>
<p>при указании этого параметра как true заданная дата станет рабочей каждый год</p>
</td>
</tr>
</tbody>
</table>

SQL-запросы будут следующими:

```sql
SELECT plvdate.unset_nonbizday('2022-01-01'::date);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image32.png)



Рисунок 3.29 – Пример выполнения SQL-запроса с использованием функции

```sql
SELECT plvdate.unset_nonbizday('2022-11-04'::date, '1'::bool);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image33.png)



Рисунок 3.30 – Пример выполнения SQL-запроса с использованием функции

#### Функция «plvdate.use_easter»

Функция позволяет установить нерабочими днями пасхальное воскресенье и понедельник.

```sql

plvdate.use_easter() plvdate.use_easter(useit boolean)
```


Функция применяется с параметрами, приведенными в таблице [3.23](#_bookmark58).

<span id="_bookmark58" class="anchor"></span>Таблица 3.23 – Параметры функции «plvdate.use_easter»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>boolean</p>
</td>
<td>
<p>включение/отключение режима</p>
</td>
</tr>
</tbody>
</table>

SQL-запросы будут следующими:

```sql
select plvdate.use_easter();
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image34.png)



Рисунок 3.31 – Пример выполнения SQL-запроса с использованием функции «plvdate.use_easter»

```sql
SELECT plvdate.use_easter('1'::bool);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image35.png)



Рисунок 3.32 – Пример выполнения SQL-запроса с использованием функции «plvdate.use_easter»

#### Функция «plvdate.unuse_easter»

Функция позволяет «отменить» установку пасхальных выходных.


```sql
plvdate.unuse_easter()
```


Пример запроса:


```sql
SELECT plvdate.unuse_easter();
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image36.png)

Рисунок 3.33 – Пример выполнения SQL-запроса с использованием функции

«plvdate.unuse_easter»

#### Функция «plvdate.using_easter»

Функция позволяет узнать используются ли в текущей конфигурации пасхальные выходные. Если пасхальные выходные используются будет возвращено значение «t», в ином случае будет возвращено «f».


```sql
plvdate.using_easter()
```


SQL-запрос будет следующим:

```sql
SELECT plvdate.using_easter();
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image37.png)



Рисунок 3.34 – Пример выполнения SQL-запроса с использованием функции «plvdate.using_easter»

#### Функция «plvdate.use_great_friday»

Функция позволяет установить предпасхальную пятницу нерабочим днем.


```sql
plvdate.use_great_friday()
```


SQL-запрос будет следующим:


```sql
SELECT plvdate.use_great_friday();
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image38.png)

Рисунок 3.35 – Пример выполнения SQL-запроса с использованием функции «plvdate.use_great_friday»

#### Функция «plvdate.include_start»

Функция позволяет включать начальную дату в расчеты при использовании функции «bizdays_between».


```sql
plvdate.include_start() plvdate.include_start(include boolean)
```


Функция применяется с параметрами, приведенными в таблице [3.24](#_bookmark63).

<span id="_bookmark63" class="anchor"></span>Таблица 3.24 – Параметры функции «plvdate.include_start»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>boolean</p>
</td>
<td>
<p>включение/отключение режима</p>
</td>
</tr>
</tbody>
</table>

SQL-запросы будет следующими:

```sql
SELECT plvdate.include_start();
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image39.png)



Рисунок 3.36 – Пример выполнения SQL-запроса с использованием функции «plvdate.include_start»


```sql
SELECT plvdate.include_start('1'::bool);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image40.png)

Рисунок 3.37 – Пример выполнения SQL-запроса с использованием функции «plvdate.include_start»

#### Функция «plvdate.noinclude_start»

Функция позволяет не включать начальную дату в расчеты при использовании функции «bizdays_between».


```sql
plvdate.noinclude_start()
```


SQL-запрос будет следующим:

![](@site/docs/assets/images/com18.3.1/oracle/media/image41.png)

SELECT plvdate.noinclude_start();

Рисунок 3.38 – Пример выполнения SQL-запроса с использованием функции

«plvdate.noinclude_start»

#### Функция «plvdate.including_start»

Функция позволяет узнать включается ли начальная дата в расчеты при использовании функции bizdays_between при текущей конфигурации. Если начальная дата включается в расчеты будет возвращено значение «t», в ином случае будет возвращено «f».


```sql
plvdate.including_start()
```


SQL-запрос будет следующим:


```sql
SELECT plvdate.including_start();
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image42.png)

Рисунок 3.39 – Пример выполнения SQL-запроса с использованием функции «plvdate.including_start»

### Функции модуля «PLVstr» и «PLVchr»

#### Функция «plvstr.normalize»

Функция позволяет нормализовать строку, а именно заменить множественные пробелы, различные пробельные символы и знаки табуляции на одиночные пробелы.


```sql
plvstr.normalize(str text)
```


Функция применяется с параметрами, приведенными в таблице [3.25](#_bookmark68).

<span id="_bookmark68" class="anchor"></span>Таблица 3.25 – Параметры функции «plvstr.normalize»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
select plvstr.normalize('some string for an example normalization function ');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image43.png)



Рисунок 3.40 – Пример выполнения SQL-запроса с использованием функции «plvstr.normalize»

#### Функция «plvstr.is_prefix»

Функция позволяет узнать является ли заданное значение префиксом заданной строки. Если строка содержит заданный префикс будет возвращено значение «t», т.е. «true», в ином случае будет возвращено «f», т.е. «false».


```sql
plvstr.is_prefix(str text, prefix text, cs bool) 
plvstr.is_prefix(str text, prefix text) 
plvstr.is_prefix(str int, prefix int) 
plvstr.is_prefix(str bigint, prefix bigint)
```


Для SQL-выражения используются параметры, приведенные в таблице [3.26](#_bookmark70):


```sql
plvstr.is_prefix(str text, prefix text)
```


<span id="_bookmark70" class="anchor"></span>Таблица 3.26 – Параметры функции «plvstr.is_prefix(str text, prefix text)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>префикс для поиска</p>
</td>
</tr>
</tbody>
</table>

Для SQL-выражения используются параметры, приведенные в таблице [3.27](#_bookmark71):


```sql
plvstr.is_prefix(str int, prefix int)
```


<span id="_bookmark71" class="anchor"></span>Таблица 3.27 – Параметры функции «plvstr.is_prefix(str int, prefix int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>заданное число</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>префикс для поиска</p>
</td>
</tr>
</tbody>
</table>

Например, в строке требуется найти сочетание букв 'ambi'. В этом случае SQL-запрос будет следующим:


```sql
SELECT plvstr.is_prefix('ambidextrous', 'ambi');
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image44.png)

Рисунок 3.41 – Пример выполнения SQL-запроса с использованием функции «plvstr.is_prefix»

Поскольку строка содержит заданный префикс 'ambi', будет возвращено значение «t», т.е. «true». Искомое значение найдено.

Аналогично строится поиск цифрового выражения «8921» в строке. SQL-запрос строится следующим образом:


```sql
SELECT plvstr.is_prefix(89216538733, 8921);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image45.png)

Рисунок 3.42 – Пример выполнения SQL-запроса с использованием функции «plvstr.is_prefix»

Также, как и в предыдущем примере будет возвращено значение «t», т.е. «true».

Следовательно, искомое значение найдено.

#### Функция «plvstr.substr»

Функция возвращает подстроку из указанной строки с определенной позиции.


```sql
plvstr.substr(str text, start int, len int) plvstr.substr(str text, start int)
```


Для SQL-выражения используются параметры, приведенные в таблице [3.28](#_bookmark73):


```sql
plvstr.substr(str text, start int, len int)
```


<span id="_bookmark73" class="anchor"></span>Таблица 3.28 – Параметры функции «plvstr.substr(str text, start int, len int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>конечная позиция</p>
</td>
</tr>
</tbody>
</table>

Для SQL-выражения используются параметры, приведенные в таблице [3.29](#_bookmark74):


```sql
plvstr.substr(str text, start int)
```


<span id="_bookmark74" class="anchor"></span>Таблица 3.29 – Параметры функции «plvstr.substr(str text, start int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
</tbody>
</table>

SQL-запросы будут следующими:

```sql
SELECT plvstr.substr('some string for an example substring function', 0, 11);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image46.png)



Рисунок 3.43 – Пример выполнения SQL-запроса с использованием функции

```sql
SELECT plvstr.substr('some string for an example substring function', 28);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image47.png)



Рисунок 3.44 – Пример выполнения SQL-запроса с использованием функции

#### Функция «plvstr.instr»

Функция позволяет искать подстроку в заданной строке по определенным шаблонам. Возвращает номер позиции вхождения. Функция использует нижеперечисленный синтаксис SQL-запросов:


```sql
plvstr.instr(str text, patt text, start int, nth int) 
plvstr.instr(str text, patt text, start int) 
plvstr.instr(str text, patt text)
```


Возможно осуществлять:

- поиск подстроки в строке;

- поиск определенного вхождения подстроки в строке начиная с определенной позиции;

- поиск определенного вхождения подстроки в строке начиная с определенной позиции.

##### Поиск подстроки в строке

Для поиска подстроки в строке, в SQL-запросе использует синтаксис команды:


```sql
plvstr.instr(str text, patt text)
```


Функция применяется с параметрами, приведенными в таблице [3.30](#_bookmark76).

<span id="_bookmark76" class="anchor"></span>Таблица 3.30 – Параметры функции «plvstr.instr(str text, patt text)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для поиска</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.instr('some string for an example instring function', 'instring');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image48.png)



Рисунок 3.45 – Пример выполнения SQL-запроса с использованием функции «plvstr.instr(str text, patt text)»

##### Поиск подстроки в строке, начиная с определенной позиции

Для поиска подстроки в строке начиная с определенной позиции, в SQL-запросе использует синтаксис команды:


```sql
plvstr.instr(str text, patt text, start int)
```


Функция применяется с параметрами, приведенными в таблице [3.31](#_bookmark77).

<span id="_bookmark77" class="anchor"></span>Таблица 3.31 – Параметры функции «plvstr.instr(str text, patt text, start int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для поиска</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.instr('some string for an example instring function', 'instring',30);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image49.png)



Рисунок 3.46 – Пример выполнения SQL-запроса с использованием функции «plvstr.instr(str text, patt text, start int)»

##### Поиск определенного вхождения подстроки в строке, начиная с определенной позиции

Для поиска определенного вхождения подстроки в строке, начиная с определенной позиции, в SQL-запросе использует синтаксис команды:


```sql
plvstr.instr(str text, patt text, start int, nth int)
```


Функция применяется с параметрами, приведенными в таблице [3.32](#_bookmark78).

<span id="_bookmark78" class="anchor"></span>Таблица 3.32 – Параметры функции «plvstr.instr(str text, patt text, start int, nth int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для поиска</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
<tr>
<td>
<p>#4</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>номер вхождения подстроки</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.instr('some string for an example instring function', 'i', 1, 3);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image50.png)



Рисунок 3.47 – Пример выполнения SQL-запроса с использованием функции «plvstr.instr(str text, patt text, start int, nth int)»

#### Функция «plvstr.lpart»

Функция возвращает левую часть заданной строки по определенным критериям и используется нижеперечисленный синтаксис SQL-запросов:


```sql
plvstr.lpart(str text, div text)
plvstr.lpart(str text, div text, start int, nth int, all_if_notfound bool)
plvstr.lpart(str text, div text, start int, nth int) plvstr.lpart(str text, div text, start int)
```


Функция возвращает левую часть заданной строки при:

- первом вхождении заданной подстроки (п. [3.4.5.1](#возврат-левой-части-строки-до-первого-вхождения-заданной-подстроки));

- первом вхождении заданной подстроки и поиском с заданной позиции (п. [3.4.5.2](#возврат-левой-части-строки-до-первого-вхождения-заданной-подстроки-и-поиском-начинается-с-заданной-позиции));

- определенном вхождении заданной подстроки и поиском с заданной позиции (п. [3.4.5.3](#возврат-левой-часть-строки-до-определенного-вхождения-заданной-подстроки-с-поиском-с-заданной-позиции));

- определенном вхождении заданной подстроки и поиском с заданной позиции, а также возвратом изначальной строки (п. [3.4.5.4](#возврат-левой-части-строки-до-определенного-вхождения-заданной-подстроки-и-поиском-с-заданной-позиции)).

##### Возврат левой части строки до первого вхождения заданной подстроки

Функция имеет функциональную возможность возврата левой части заданной строки до первого вхождения заданной подстроки. При этом синтаксис SQL запроса будет следующим:


```sql
plvstr.lpart(str text, div text)
```


Функция применяется с параметрами, приведенными в таблице [3.33](#_bookmark81).

<span id="_bookmark81" class="anchor"></span>Таблица 3.33 – Параметры функции «plvstr.lpart(str text, div text)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для поиска</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.lpart('some string for an example function', 'an');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image51.png)



Рисунок 3.48 – Пример выполнения SQL-запроса с использованием функции «plvstr.lpart(str text, div text)»

##### Возврат левой части строки до первого вхождения заданной подстроки и поиском начинается с заданной позиции

Функция имеет функциональную возможность, возврата левой части заданной строки до первого вхождения заданной подстроки и поиском начинается с заданной позиции. При этом синтаксис SQL запроса будет следующим:


```sql
plvstr.lpart(str text, div text, start int)
```


Функция применяется с параметрами, приведенными в таблице [3.34](#_bookmark83).

<span id="_bookmark83" class="anchor"></span>Таблица 3.34 – Параметры функции «plvstr.lpart(str text, div text, start int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для поиска</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.lpart('some string for an example an function', 'an', 18);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image52.png)



Рисунок 3.49 – Пример выполнения SQL-запроса с использованием функции

###### Возврат левой часть строки до определенного вхождения заданной подстроки с поиском с заданной позиции

Функция имеет функциональную возможность, возврата левой части заданной строки до определенного вхождения заданной подстроки. При этом синтаксис SQL запроса будет следующим:


```sql
plvstr.lpart(str text, div text, start int, nth int)
```


Функция применяется с параметрами, приведенными в таблице [3.35](#_bookmark85).

<span id="_bookmark85" class="anchor"></span>Таблица 3.35 – Параметры функции «plvstr.lpart(str text, div text, start int, nth int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для поиска</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
<tr>
<td>
<p>#4</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>номер вхождения подстроки</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.lpart('some string for an example an function', 'an', 1, 2);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image53.png)



Рисунок 3.50 – Пример выполнения SQL-запроса с использованием функции

##### Возврат левой части строки до определенного вхождения заданной подстроки и поиском с заданной позиции

Функция имеет функциональную возможность, возврата левой части заданной строки до определенного вхождения заданной подстроки. Если заданная подстрока не найдена будет возвращена изначальная строка (при значении последнего параметра true).

При этом синтаксис SQL-запроса будет следующим:


```sql
plvstr.lpart(str text, div text, start int, nth int, all_if_notfound bool)
```


Функция применяется с параметрами, приведенными в таблице [3.36](#_bookmark87).

<span id="_bookmark87" class="anchor"></span>Таблица 3.36 – Параметры функции «plvstr.lpart(str text, div text, start int, nth int, all_if_notfound bool)»

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 17%" />
<col style="width: 65%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для поиска</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 17%" />
<col style="width: 65%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
<tr>
<td>
<p>#4</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>номер вхождения подстроки</p>
</td>
</tr>
<tr>
<td>
<p>#5</p>
</td>
<td>
<p>boolean</p>
</td>
<td>
<p>возвращать ли изначальную строку при ненахождении подстроки</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.lpart('some string for an example an function', 'and', 1, 2, '1'::bool);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image54.png)



Рисунок 3.51 – Пример выполнения SQL-запроса с использованием функции plvstr.lpart(str text, div text, start int, nth int, all_if_notfound bool)

#### Функция «plvstr.rpart»

Функция возвращает правую часть заданной строки по определенным критериям и использует нижеперечисленный синтаксис SQL-запросов:


```sql
plvstr.rpart(str text, div text, start int, nth int, all_if_notfound bool)
plvstr.rpart(str text, div text, start int, nth int) 
plvstr.rpart(str text, div text, start int) 
plvstr.rpart(str text, div text)
```


Функция возвращает правую часть заданной строки при:

- первом вхождении заданной подстроки (п. [3.4.6.1](#возврат-правой-части-строки-до-первого-вхождения-заданной-подстроки));

- первом вхождении заданной подстроки и поиском с заданной позиции (п. [3.4.6.2](#возврат-правой-части-строки-до-первого-вхождения-заданной-подстроки-и-поиском-с-заданной-позиции));

- определении вхождения заданной подстроки и поиском с заданной позиции (п. [3.4.6.3](#возврат-правой-части-строки-до-определенного-вхождения-заданной-подстроки-и-поиском-с-заданной-позиции));

- определенном вхождении заданной подстроки и поиском с заданной позиции, а также возвратом изначальной строки (п. [3.4.6.4](#возврат-правой-части-строки-до-определенного-вхождения-заданной-подстроки-и-поиском-с-заданной-позиции-1)).

##### Возврат правой части строки до первого вхождения заданной подстроки

Функция имеет функциональную возможность возврата правой части заданной строки до первого вхождения заданной подстроки. При этом синтаксис SQL запроса будет следующим:


```sql
plvstr.rpart(str text, div text)
```


Функция применяется с параметрами, приведенными в таблице [3.37](#_bookmark90).

<span id="_bookmark90" class="anchor"></span>Таблица 3.37 – Параметры функции «plvstr.rpart(str text, div text)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для поиска</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.rpart('some string for an example function', 'an');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image55.png)



Рисунок 3.52 – Пример выполнения SQL-запроса с использованием функции «plvstr.rpart(str text, div text)»

##### Возврат правой части строки до первого вхождения заданной подстроки и поиском с заданной позиции

Функция имеет функциональную возможность возврата правой части заданной строки до первого вхождения заданной подстроки. Поиск начинается с заданной позиции. При этом синтаксис SQL запроса будет следующим:


```sql
plvstr.rpart(str text, div text, start int)
```


Функция применяется с параметрами, приведенными в таблице [3.38](#_bookmark92).

<span id="_bookmark92" class="anchor"></span>Таблица 3.38 – Параметры функции «plvstr.rpart(str text, div text, start int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для поиска</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.rpart('some string for an example an function', 'an', 20);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image56.jpeg)



Рисунок 3.53 – Пример выполнения SQL-запроса с использованием функции «plvstr.rpart(str text, div text, start int)»

##### Возврат правой части строки до определенного вхождения заданной подстроки и поиском с заданной позиции

Функция имеет функциональную возможность, возврата правой части заданной строки до определенного вхождения заданной подстроки. Поиск начинается с заданной позиции. При этом синтаксис SQL запроса будет следующим:


```sql
plvstr.rpart(str text, div text, start int, nth int)
```


Функция применяется с параметрами, приведенными в таблице [3.39](#_bookmark94).

<span id="_bookmark94" class="anchor"></span>Таблица 3.39 – Параметры функции «plvstr.rpart(str text, div text, start int, nth int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для поиска</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
<tr>
<td>
<p>#4</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>номер вхождения подстроки</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.rpart('some string for an example an function', 'an', 1, 2);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image57.png)



Рисунок 3.54 – Пример выполнения SQL-запроса с использованием функции «plvstr.rpart(str text, div text, start int, nth int)»

##### Возврат правой части строки до определенного вхождения заданной подстроки и поиском с заданной позиции

Функция имеет функциональную возможность возврата правой части заданной строки до определенного вхождения заданной подстроки. Если заданная подстрока не найдена будет возвращена изначальная строка (при значении последнего параметра true).

При этом синтаксис SQL запроса будет следующим:


```sql
plvstr.rpart(str text, div text, start int, nth int, all_if_notfound bool)
```


Функция применяется с параметрами, приведенными в таблице [3.40](#_bookmark96).

<span id="_bookmark96" class="anchor"></span>Таблица 3.40 – Параметры функции «plvstr.rpart(str text, div text, start int, nth int, all_if_notfound bool)»

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 17%" />
<col style="width: 65%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для поиска</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
<tr>
<td>
<p>#4</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>номер вхождения подстроки</p>
</td>
</tr>
<tr>
<td>
<p>#5</p>
</td>
<td>
<p>boolean</p>
</td>
<td>
<p>возвращать ли изначальную строку при ненахождении подстроки</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT plvstr.rpart('some string for an example an function', 'and', 1, 2, '1'::bool);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image58.png)

Рисунок 3.55 – Пример выполнения SQL-запроса с использованием функции «plvstr.rpart(str text, div text, start int, nth int, all_if_notfound bool)»

#### Функция «plvstr.rvrs»

Функция возвращает перевернутую заданную строку или часть заданной строки по определенным критериям и использует нижеперечисленный синтаксис SQL-запросов:


```sql
plvstr.rvrs(str text, start int, _end int) 
plvstr.rvrs(str text, start int) 
plvstr.rvrs(str text)
```


Функция «plvstr.rvrs» имеет функциональные возможности:

- возврата перевернутой строки (п. [3.4.7.1](#возврат-перевернутой-строки));

- возврата перевернутой части строки с определенной позиции (п. [3.4.7.2](#возврат-перевернутой-части-строки-с-определенной-позиции));

- возврат первой части строки, находящуюся между заданными позициями (п. [3.4.7.3](#возврат-первой-части-строки-находящуюся-между-заданными-позициями)).

#### Возврат перевернутой строки

Функция возвращает перевернутую строку, используя синтаксис SQL-команды:


```sql
plvstr.rvrs(str text, start int, _end int)
```


Функция применяется с параметрами, приведенными в таблице [3.41](#_bookmark99).

<span id="_bookmark99" class="anchor"></span>Таблица 3.41 – Параметры функции «plvstr.rvrs(str text, start int, _end int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT plvstr.rvrs('reverse string');
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image59.png)

Рисунок 3.56 – Пример выполнения SQL-запроса с использованием функции «plvstr.rvrs(str text, start int, _end int)»

##### Возврат перевернутой части строки с определенной позиции

Функция возвращает перевернутую часть строки, начиная с определенной позиции используя синтаксис SQL-команды:


```sql
plvstr.rvrs(str text, start int)
```


Функция применяется с параметрами, приведенными в таблице [3.42](#_bookmark101).

<span id="_bookmark101" class="anchor"></span>Таблица 3.42 – Параметры функции «plvstr.rvrs(str text, start int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.rvrs('reverse string', 8);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image60.png)



Рисунок 3.57 – Пример выполнения SQL-запроса с использованием функции «plvstr.rvrs(str text, start int)»

##### Возврат первой части строки, находящуюся между заданными позициями

Функция возвращает перевернутую часть строки, находящуюся между заданными позициями используя синтаксис SQL-команды:


```sql
plvstr.rvrs(str text, start int, _end int)
```


Функция применяется с параметрами, приведенными в таблице [3.43](#_bookmark103): <span id="_bookmark103" class="anchor"></span>Таблица 3.43 – Параметры функции «plvstr.rvrs(str text, start int, _end int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>конечная позиция</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.rvrs('reverse string', 3, 10);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image61.png)



Рисунок 3.58 – Пример выполнения SQL-запроса с использованием функции «plvstr.rvrs(str text, start int, _end int)»

#### Функция «plvstr.left»

Функция возвращает подстроку из заданной строки, находящуюся перед указанной позицией используя синтаксис SQL-команды:


```sql
plvstr.left(str text, n int)
```


Функция применяется с параметрами, приведенными в таблице [3.44](#_bookmark105).

<span id="_bookmark105" class="anchor"></span>Таблица 3.44 – Параметры функции «plvstr.left(str text, n int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT plvstr.left('left string', 4);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image62.png)

Рисунок 3.59 – Пример выполнения SQL-запроса с использованием функции «plvstr.left(str text, n int)»

#### Функция «plvstr.right»

Функция возвращает подстроку из заданной строки, находящуюся после указанной позиции используя синтаксис SQL-команды:


```sql
plvstr.right(str text, n int)
```


Функция применяется с параметрами, приведенными в таблице [3.45](#_bookmark107).

<span id="_bookmark107" class="anchor"></span>Таблица 3.45 – Параметры функции «plvstr.right(str text, n int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.right('right string', 6);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image63.png)



Рисунок 3.60 – Пример выполнения SQL-запроса с использованием функции «plvstr.right(str text, n int)»

#### Функция «plvstr.swap»

Функция заменяет подстроку в строке на заданную подстроку по определенным критериям и использует нижеперечисленный синтаксис SQL-запросов:


```sql
plvstr.swap(str text, replace text, start int, length int)
plvstr.swap(str text, replace text)
```

Функция «plvstr.swap» имеет функциональные возможности:

- замены на подстроку до первого пробела в строке (п. [3.4.10.1](#замена-на-подстроку-до-первого-пробела-в-строке));

- замены на подстроку с определенной позиции и на определенную длину (п. [3.4.10.2](#замена-на-подстроку-с-определенной-позиции-и-на-определенную-длину.)).

##### Замена на подстроку до первого пробела в строке

Функция заменяет на подстроку при нахождении первого пробела в строке. При этом используется синтаксис SQL-запроса:


```sql
plvstr.swap(str text, replace text)
```


Функция применяется с параметрами, приведенными в таблице [3.46](#_bookmark110).

<span id="_bookmark110" class="anchor"></span>Таблица 3.46 – Параметры функции «plvstr.swap(str text, replace text)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для замены</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.swap('some string for an example function', 'swap');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image64.png)



Рисунок 3.61 – Пример выполнения SQL-запроса с использованием функции «plvstr.swap(str text, replace text)»

##### Замена на подстроку с определенной позиции и на определенную длину.

Функция заменяет на подстроку происходит с определенной позиции и на определенную длину. При этом используется синтаксис SQL-запроса:


```sql
plvstr.swap(str text, replace text, start int, length int)
```


Функция применяется с параметрами, приведенными в таблице [3.47](#_bookmark113).

Таблица 3.47 – Параметры функции «plvstr.swap(str text, replace text, start int, length

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 17%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;"><strong>Обозначение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>подстрока для замены</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
<tr>
<td>
<p>#4</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>длина участка, который необходимо заменить</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.swap('some string for an example function', 'swap', 6, 6);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image65.png)



Рисунок 3.62 – Пример выполнения SQL-запроса с использованием функции «plvstr.swap(str text, replace text, start int, length int)»

#### Функция «plvstr.betwn»

Функция возвращает подстроку из заданной строки, находящуюся между определенными позициями или символами. Функция использует нижеперечисленный синтаксис SQL-запросов:


```sql
plvstr.betwn(str text, start int, _end int) 
plvstr.betwn(str text, start text, _end text)
```


##### Возврат подстроки из заданной строки находящейся между позициями

Функция возвращает подстроку из заданной строки, находящуюся между определенными позициями. Позиция определяется целыми числом.


```sql
plvstr.betwn(str text, start int, _end int)
```


Функция применяется с параметрами, приведенными в таблице [3.48](#_bookmark114).

<span id="_bookmark114" class="anchor"></span>Таблица 3.48 – Параметры функции «plvstr.betwn(str text, start int, _end int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>конечная позиция</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvstr.betwn('some string for an example function', 5, 12);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image66.png)



Рисунок 3.63 – Пример выполнения SQL-запроса с использованием функции «plvstr.betwn(str text, start int, _end int)»

##### Возврат подстроки из заданной строки находящейся между символами

Функция возвращает подстроку из заданной строки, находящуюся между определенными символами. Позиция определяется текстовыми символами.


```sql
plvstr.betwn(str text, start text, _end text)
```


Функция применяется с параметрами, приведенными в таблице [3.49](#_bookmark115).

<span id="_bookmark115" class="anchor"></span>Таблица 3.49 – Параметры функции «plvstr.betwn(str text, start text, _end text)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>начальная позиция (текстом)</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>конечная позиция (текстом)</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT plvstr.betwn('some string for an example function', 'some', 'for');
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image67.png)

Рисунок 3.64 – Пример выполнения SQL-запроса с использованием функции «plvstr.betwn(str text, start text, _end text)»

#### Функция «plvchr.nth»

Функция возвращает символ, находящийся на определенной позиции в заданной строке, используя синтаксис SQL-запроса:


```sql
plvchr.nth(str text, n int)
```


Функция применяется с параметрами, приведенными в таблице [3.50](#_bookmark117).

<span id="_bookmark117" class="anchor"></span>Таблица 3.50 – Параметры функции «plvchr.nth(str text, n int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>позиция в строке</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvchr.nth('some string', 2);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image68.png)



Рисунок 3.65 – Пример выполнения SQL-запроса с использованием функции «plvchr.nth(str text, n int)»

#### Функция «plvchr.first»

Функция возвращает первый символ в заданной строке, используя синтаксис SQL-запроса:


```sql
plvchr.first(str text)
```


Функция применяется с параметрами, приведенными в таблице [3.51](#_bookmark119).

<span id="_bookmark119" class="anchor"></span>Таблица 3.51 – Параметры функции «plvchr.first(str text)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvchr.first('some string');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image69.png)



Рисунок 3.66 – Пример выполнения SQL-запроса с использованием функции «plvchr.first(str text)»

#### Функция «plvchr.last»

Функция возвращает последний символ в заданной строке.


```sql
plvchr.last(str text)
```


Функция применяется с параметрами, приведенными в таблице [3.52](#_bookmark121).

<span id="_bookmark121" class="anchor"></span>Таблица 3.52 – Параметры функции «plvchr.last(str text)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT plvchr.last('some string');
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image70.png)

Рисунок 3.67 – Пример выполнения SQL-запроса с использованием функции «plvchr.last(str text)»

#### Функция «plvchr.is_blank»

Функция определяет является ли заданная строка пустой. Если строка пустая будет возвращено значение «t» (true), в ином случае будет возвращено «f» (false). Функция использует нижеперечисленный синтаксис SQL-запросов:


```sql
plvchr.is_blank(c int) plvchr.is_blank(c text)
```


Функция применяется с параметрами, приведенными в таблице [3.53](#_bookmark123).

<span id="_bookmark123" class="anchor"></span>Таблица 3.53 – Параметры функции «plvchr.is_blank»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>заданное число</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvchr.is_blank(' ');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image71.png)



Рисунок 3.68 – Пример выполнения SQL-запроса с использованием функции «plvchr.is_blank»

#### Функция «plvchr.is_digit»

Функция определяет является ли заданное значение символом числа. Если значение является символом числа будет возвращено значение «t» (true), в ином случае будет возвращено «f» (false). Функция использует нижеперечисленный синтаксис SQL-запросов:


```sql
plvchr.is_digit(c int) plvchr.is_digit(c text)
```


Функция применяется с параметрами, приведенными в таблице [3.54](#_bookmark125).

<span id="_bookmark125" class="anchor"></span>Таблица 3.54 – Параметры функции «plvchr.is_digit»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>заданное число</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданный символ</p>
</td>
</tr>
</tbody>
</table>

SQL-запросы будет следующими:

```sql
SELECT plvchr.is_digit('4');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image72.png)



Рисунок 3.69 – Пример выполнения SQL-запроса с использованием функции «plvchr.is_digit»

```sql
SELECT plvchr.is_digit(4);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image73.png)



Рисунок 3.70 – Пример выполнения SQL-запроса с использованием функции «plvchr.is_digit»

#### Функция plvchr.is_other

Функция определяет является ли заданное значение «иным» символом (не число и не буква). Если значение является «иным» символом будет возвращено значение «t», в ином случае будет возвращено «f». Функция использует нижеперечисленный синтаксис SQL-запросов:


```sql
plvchr.is_other(c int) 
plvchr.is_other(c text)
```


Функция применяется с параметрами, приведенными в таблице [3.55](#_bookmark127).

<span id="_bookmark127" class="anchor"></span>Таблица 3.55 – Параметры функции «plvchr.is_other»

<table>
<colgroup>
<col style="width: 2%" />
<col style="width: 24%" />
<col style="width: 17%" />
<col style="width: 53%" />
<col style="width: 2%" />
</colgroup>
<thead>
<tr>
<th colspan="2">
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="5">
<p>plvchr.is_other(c int)</p>
</td>
</tr>
<tr>
<td colspan="5"></td>
</tr>
<tr>
<td colspan="2">
<p>#1</p>
</td>
<td>
<p>integer</p>
</td>
<td colspan="2">
<p>заданное число</p>
</td>
</tr>
<tr>
<td></td>
<td colspan="3">
<p>plvchr.is_other(c text)</p>
</td>
<td></td>
</tr>
<tr>
<td colspan="5"></td>
</tr>
<tr>
<td colspan="2">
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td colspan="2">
<p>заданный символ</p>
</td>
</tr>
</tbody>
</table>

SQL-запросы будет следующими:

```sql
SELECT plvchr.is_other('*');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image74.png)



Рисунок 3.71 – Пример выполнения SQL-запроса с использованием функции «plvchr.is_other»

```sql
SELECT plvchr.is_other(4);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image75.png)



Рисунок 3.72 – Пример выполнения SQL-запроса с использованием функции «plvchr.is_other»

#### Функция «plvchr.is_letter»

Функция определяет является ли заданное значение символом буквы. Если значение является символом буквы будет возвращено значение «t» (true), в ином случае будет возвращено «f» (false). Функция использует нижеперечисленный синтаксис SQL-запросов:


```sql
plvchr.is_letter(c int) plvchr.is_letter(c text)
```


Функция применяется с параметрами, приведенными в таблице [3.56](#_bookmark129).

<span id="_bookmark129" class="anchor"></span>Таблица 3.56 – Параметры функции «plvchr.is_letter»

<table>
<colgroup>
<col style="width: 31%" />
<col style="width: 0%" />
<col style="width: 18%" />
<col style="width: 49%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th colspan="2">
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">
<p>plvchr.is_letter(c int)</p>
</td>
</tr>
<tr>
<td colspan="4"></td>
</tr>
<tr>
<td>
<p>#1</p>
</td>
<td colspan="2">
<p>integer</p>
</td>
<td>
<p>заданное число</p>
</td>
</tr>
<tr>
<td colspan="4">
<p>plvchr.is_letter(c text)</p>
</td>
</tr>
<tr>
<td colspan="4"></td>
</tr>
<tr>
<td colspan="2">
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданный символ</p>
</td>
</tr>
</tbody>
</table>

SQL-запросы будет следующими:

```sql
SELECT plvchr.is_letter('a');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image76.png)



Рисунок 3.73 – Пример выполнения SQL-запроса с использованием функции plvchr.is_letter(c text)


```sql
SELECT plvchr.is_letter(2);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image77.png)

Рисунок 3.74 – Пример выполнения SQL-запроса с использованием функции plvchr.is_letter(c int)

#### Функция «plvchr.char_name»

Функция возвращает имя символа в коде «ASCII» как «VARCHAR». Для функции используется синтаксис SQL-команды:


```sql
plvchr.char_name(c text)
```


Функция применяется с параметрами, приведенными в таблице [3.57](#_bookmark131).

<span id="_bookmark131" class="anchor"></span>Таблица 3.57 – Параметры функции «plvchr.char_name»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданный символ</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvchr.char_name('#');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image78.png)



Рисунок 3.75 – Пример выполнения SQL-запроса с использованием функции «plvchr.char_name»

#### Функция «plvchr.quoted1»

Функция возвращает заданную строку, оформленную в одинарные кавычки и использует синтаксис SQL-команды:


```sql
plvchr.quoted1(str text)
```


Функция применяется с параметрами, приведенными в таблице [3.58](#_bookmark133).

<span id="_bookmark133" class="anchor"></span>Таблица 3.58 – Параметры функции «plvchr.quoted1(str text)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvchr.quoted1('some text');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image79.png)



Рисунок 3.76 – Пример выполнения SQL-запроса с использованием функции plvchr.quoted1(str text)

#### Функция «plvchr.quoted2»

Функция возвращает заданную строку, оформленную в двойные кавычки, и использует синтаксис SQL-команды:


```sql
plvchr.quoted2(str text)
```


Функция применяется с параметрами, приведенными в таблице [3.59](#_bookmark135).

<span id="_bookmark135" class="anchor"></span>Таблица 3.59 – Параметры функции «plvchr.quoted2(str text)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT plvchr.quoted2('some text');
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image80.png)

Рисунок 3.77 – Пример выполнения SQL-запроса с использованием функции «plvchr.quoted2(str text)»

#### Функция «plvchr.stripped»

Функция удаляет из заданной строки определенные символы.


```sql
plvchr.stripped(str text, char_in text)
```


Функция применяется с параметрами, приведенными в таблице [3.60](#_bookmark137).

<span id="_bookmark137" class="anchor"></span>Таблица 3.60 – Параметры функции «plvchr.stripped»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>символ, который будет удален</p>
</td>
</tr>
</tbody>
</table>

sql-запрос будет следующим:

```sql
SELECT plvchr.stripped('some text', 'e');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image81.png)



Рисунок 3.78 – Пример выполнения SQL-запроса с использованием функции «plvchr.stripped»

### Функции модуля «PLVsubst»

Модуль «PLVsubst» выполняет замену в строках на основе ключевого слова замены.

Функция позволяет производить замену в строке по различным шаблонам.

#### Функция «plvsubst.string»

Функция заменяет символы замены (установленные по умолчанию) на значения из массива в последовательном порядке. При этом использует нижеперечисленный синтаксис SQL-запросов:


```sql
plvsubst.string(template_in text, vals_in text[]) 
plvsubst.string(template_in text, vals_in text, delim_in text)
```


Функция «plvsubst.string» имеет функциональную возможность:

- проверки строки на наличие всех вхождений ключевого слова и замена ее значением из списка значений подстановки (п. [3.5.1.1](#проверка-строки-на-наличие-всех-вхождений-ключевого-слова-и-замена-ее-значением-из-списка-значений-подстановки));

- проверки строки на наличие всех вхождений ключевого слова и замена ее значением из списка значений подстановки и установкой символа замены (п. [3.5.1.2](#проверка-строки-на-наличие-всех-вхождений-ключевого-слова-и-замена-ее-значением-из-списка-значений-подстановки-и-установкой-символа-замены)).

##### Проверка строки на наличие всех вхождений ключевого слова и замена ее значением из списка значений подстановки

Функция «plvsubst.string» выполняет проверку строки на наличие всех вхождений ключевого слова и заменяет ее значением из списка значений (массива) подстановки. Используя синтаксис SQL запроса:


```sql
plvsubst.string(template_in text, vals_in text[])
```


Функция применяется с параметрами, приведенными в таблице [3.61](#_bookmark141).

<span id="_bookmark141" class="anchor"></span>Таблица 3.61 – Параметры функции «plvsubst.string(template_in text, vals_in text\[\])»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>значения для замены</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT plvsubst.string('some %s for an %s', ARRAY['string','example']);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image82.png)

Рисунок 3.79 – Пример выполнения SQL-запроса с использованием функции

##### Проверка строки на наличие всех вхождений ключевого слова и замена ее значением из списка значений подстановки и установкой символа замены

Функция «plvsubst.string» выполняет проверку строки на наличие всех вхождений ключевого слова и заменяет ее значением из списка значений (массива) подстановки, в последовательном порядке и установкой символа замены.

Используя синтаксис SQL-запроса:


```sql
plvsubst.string(template_in text, vals_in text, delim_in text)
```


Функция применяется с параметрами, приведенными в таблице [3.62](#_bookmark143).

<span id="_bookmark143" class="anchor"></span>Таблица 3.62 – Параметры функции «plvsubst.string(template_in text, vals_in text, delim_in text)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>значения для замены</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>символ замены</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvsubst.string('some 1 for an 1', ARRAY\['string','example'\], '1');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image83.png)



Рисунок 3.80 – Пример выполнения SQL-запроса с использованием функции «plvsubst.string(template_in text, vals_in text, delim_in text)»

#### Функция «plvsubst.setsubst»

Функция позволяет установить определенный символ как символ замены по умолчанию. Изначально установлено значение '%s'.

Используется синтаксис SQL-запроса:


```sql
plvsubst.setsubst(str text)
```


Функция применяется с параметрами, приведенными в таблице [3.63](#_bookmark145).

<span id="_bookmark145" class="anchor"></span>Таблица 3.63 – Параметры функции «plvsubst.setsubst»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>символ замены</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT plvsubst.setsubst('1');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image84.png)



Рисунок 3.81 – Пример выполнения SQL-запроса с использованием функции «plvsubst.setsubst»

#### Функция «plvsubst.subst»

Функция возвращает символ, который в данный момент установлен как символ замены.


```sql
plvsubst.subst()
```


SQL-запрос будет следующим:


```sql
SELECT plvsubst.subst();
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image85.png)

Рисунок 3.82 – Пример выполнения SQL-запроса с использованием функции«plvsubst.subst»

### Функции модуля «DBMS_random»

#### Функция «dbms_random.initialize»

Функция инициализирует пакет с начальным значением.


```sql
dbms_random.initialize(int)
```


Функция применяется с параметрами, приведенными в таблице [3.64](#_bookmark149).

<span id="_bookmark149" class="anchor"></span>Таблица 3.64 – Параметры функции «dbms_random.initialize»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th>
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>начальное значение</p>
</td>
</tr>
</tbody>
</table>

Пример SQL-запроса:

```sql
SELECT dbms_random.initialize(10);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image86.png)



Рисунок 3.83 – Пример выполнения SQL-запроса с использованием функции «dbms_random.initialize»

#### Функция «dbms_random.normal»

Функция возвращает случайные числа в стандартном нормальном распределении.


```sql
dbms_random.normal()
```


Пример SQL-запроса:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3">
<p>SELECT dbms_random.normal();</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>№ изменения:</p>
</td>
<td>
<p>Подпись отв. лица:</p>
</td>
<td>
<p>Дата внесения изм:</p>
</td>
</tr>
</tbody>
</table>

![](@site/docs/assets/images/com18.3.1/oracle/media/image87.png)

Рисунок 3.84 – Пример выполнения SQL-запроса с использованием функции «dbms_random.normal»

#### Функция «dbms_random.random»

Функция возвращает случайное число из диапазона -231 .. 231.


```sql
dbms_random.random()
```


Пример SQL-запроса:

```sql
SELECT dbms_random.random();
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image88.png)



Рисунок 3.85 – Пример выполнения SQL-запроса с использованием функции «dbms_random.random»

#### Функция «dbms_random.seed»

Функция сбрасывает состояние генератора псевдослучайных цифр и использует следующий синтаксис SQL-команд:


```sql
dbms_random.seed(int) 
dbms_random.seed(text)
```


Функция применяется с параметрами, приведенными в таблице [3.65](#_bookmark153).

<span id="_bookmark153" class="anchor"></span>Таблица 3.65 – Параметры функции «dbms_random.seed»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3">
<p>dbms_random.seed(int)</p>
</td>
</tr>
<tr>
<td colspan="3"></td>
</tr>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>Integer</p>
</td>
<td>
<p>ключ генерации</p>
</td>
</tr>
<tr>
<td colspan="3">
<p>dbms_random.seed(text)</p>
</td>
</tr>
<tr>
<td colspan="3"></td>
</tr>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>ключ генерации</p>
</td>
</tr>
</tbody>
</table>

SQL-запросы будут следующими:

```sql
SELECT dbms_random.seed(1);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image89.png)



Рисунок 3.86 – Пример выполнения SQL-запроса с использованием функции «dbms_random.seed(int)»

```sql
SELECT dbms_random.seed('text');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image90.png)



Рисунок 3.87 – Пример выполнения SQL-запроса с использованием функции «dbms_random.seed(text)»

#### Функция «dbms_random.string»

Функция генерирует случайную строку.


```sql
dbms_random.string(opt text(1), len int)
```


Функция применяется с параметрами, приведенными в таблице [3.66](#_bookmark155).

<span id="_bookmark155" class="anchor"></span>Таблица 3.66 – Параметры функции «dbms_random.string»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>ключ генерации</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>длина генерируемой строки</p>
</td>
</tr>
</tbody>
</table>

Пример запроса. Для получения случайной строки используем:

- случайный набор текстовых символов (словарь):


```
opt text - 'aAlLuUxXpP'
```


- указываем длину генерируемой строки:


```
len int – 5
```


В итоге сформируется SQL-запрос:

```sql
SELECT dbms_random.string('aAlLuUxXpP',5);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image91.png)



Рисунок 3.88 – Пример выполнения SQL-запроса с использованием функции «dbms_random.string»

В итоге сформируется строка из случайных символов.

#### Функция dbms_random.value

Функция возвращает случайное число из определенного диапазона. Функция возвращает случайное число из диапазона \[0,0–1,0).


```sql
dbms_random.value()
dbms_random.value(low double precision, high double precision)
```


Функция «dbms_random.value» выполняет функциональную возможность:

- возврата случайного числа ([3.6.6.1](#возврат-случайного-числа));

- возврата числа из заданного диапазона ([3.6.6.2](#возврат-числа-из-заданного-диапазона)).

##### Возврат случайного числа

Для возврата случайного используется SQL-команда:


```sql
dbms_random.value()
```


Пример запроса:

```sql
SELECT dbms_random.value();
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image92.png)



Рисунок 3.89 – Пример выполнения SQL-запроса с использованием функции

##### Возврат числа из заданного диапазона

Функция возвращает случайное число из заданного диапазона, используя синтаксис SQL-команды:


```sql
dbms_random.value(low double precision, high double precision)
```


Функция применяется с параметрами, приведенными в таблице [3.67](#_bookmark159).

<span id="_bookmark159" class="anchor"></span>Таблица 3.67 – Параметры функции «dbms_random.value(low double precision, high double precision)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>double</p>
</td>
<td>
<p>нижняя граница диапазона</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>double</p>
</td>
<td>
<p>верхняя граница диапазона</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT dbms_random.value(1,10);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image93.png)

Рисунок 3.90 – Пример выполнения SQL-запроса с использованием функции 

В представленном примере указывается:

- нижняя граница диапазона:


```
low double precision - 1
```


- верхняя граница диапазона:


```
high double precision – 10
```


В результате будет выведено случайное число.

### Дополнительные функции

#### Функция «oracle.substr»

Функция обрезает заданное значение по определенным параметрам. Функция имеет функциональную возможность:

- вырезки из строки подстроку совместимую с Oracle между заданными позициями (п. [3.7.1.1](#вырезка-из-строки-подстроку-совместимую-с-oracle-между-заданными-позициями));

- вырезки из строки подстроку совместимую с Oracle начиная с заданной позиции (п. [3.7.1.2](#вырезка-из-строки-подстроку-совместимую-с-oracle-начиная-с-заданной-позиции));

- вырезки из числа подстроку совместимую с Oracle начиная с заданной позиции (п. [3.7.1.3](#вырезка-из-числа-подстроку-совместимую-с-oracle-начиная-с-заданной-позиции));

- вырезки из числа подстроку совместимую с Oracle между заданными позициями (п. [3.7.1.4](#вырезка-из-числа-подстроку-совместимую-с-oracle-между-заданными-позициями));

#### Вырезка из строки подстроку, совместимую с Oracle между заданными позициями

Функция вырезает из строки подстроку совместимую с Oracle между заданными позициями используя синтаксис SQL-команды:


```sql
oracle.substr(str text, start int, len int)
```


Функция применяется с параметрами, приведенными в таблице [3.68](#_bookmark163).

<span id="_bookmark163" class="anchor"></span>Таблица 3.68 – Параметры функции «oracle.substr(str text, start int, len int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>numeric</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>numeric</p>
</td>
<td>
<p>количество вырезаемых символов</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT oracle.substr('some string', 5, 7);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image94.png)



Рисунок 3.91 – Пример выполнения SQL-запроса с использованием функции «oracle.substr(str text, start int, len int)»

##### Вырезка из строки подстроку совместимую с Oracle, начиная с заданной позиции

Функция вырезает из строки подстроку совместимую с Oracle, начиная с заданной позиции используя синтаксис SQL-команды:


```sql
oracle.substr(str text, start int)
```


Функция применяется с параметрами, приведенными в таблице [3.69](#_bookmark165).

<span id="_bookmark165" class="anchor"></span>Таблица 3.69 – Параметры функции «oracle.substr(str text, start int)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>numeric</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:


```sql
SELECT oracle.substr('some string', 5);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image95.png)

Рисунок 3.92 – Пример выполнения SQL-запроса с использованием функции «oracle.substr(str text, start int)»

##### Вырезка из числа подстроку совместимую с Oracle начиная с заданной позиции

Функция вырезает из числа подстроку совместимую с Oracle, начиная с заданной позиции.


```sql
oracle.substr(str numeric, start numeric)
```


Функция применяется с параметрами, приведенными в таблице [3.70](#_bookmark167).

<span id="_bookmark167" class="anchor"></span>Таблица 3.70 – Параметры функции «oracle.substr(str numeric, start numeric)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>numeric</p>
</td>
<td>
<p>заданное число</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>numeric</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
</tbody>
</table>

Пример запроса:

```sql
SELECT oracle.substr(987654, 4);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image96.png)



Рисунок 3.93 – Пример выполнения SQL-запроса с использованием функции «oracle.substr(str numeric, start numeric)»

##### Вырезка из числа подстроку совместимую с Oracle между заданными позициями

Функция вырезает из числа подстроку совместимую с Oracle между заданными позициями.


```sql
oracle.substr(str numeric, start numeric, len numeric)
```


Функция применяется с параметрами, приведенными в таблице [3.71](#_bookmark169).

<span id="_bookmark169" class="anchor"></span>Таблица 3.71 – Параметры функции «oracle.substr(str numeric, start numeric, len numeric)»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>numeric</p>
</td>
<td>
<p>заданное число</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>numeric</p>
</td>
<td>
<p>начальная позиция</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>numeric</p>
</td>
<td>
<p>количество вырезаемых символов</p>
</td>
</tr>
</tbody>
</table>

Пример запроса:

```sql
SELECT oracle.substr(987654, 4, 2);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image97.png)



Рисунок 3.94 – Пример выполнения SQL-запроса с использованием функции «oracle.substr(str numeric, start numeric, len numeric)»

#### Функция «oracle.lpad»

Функция добавляет в начало заданной строки определенный символ, увеличивая строку до определенной длины.


```sql
oracle.lpad(string, length [, fill])
```


Функция применяется с параметрами, приведенными в таблице [3.72](#_bookmark171).

<span id="_bookmark171" class="anchor"></span>Таблица 3.72 – Параметры функции «oracle.lpad»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>итоговая длина строки</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>символ для добавления</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT oracle.lpad('some string', 15, '!');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image98.png)



Рисунок 3.95 – Пример выполнения SQL-запроса с использованием функции «oracle.lpad»

#### Функция «oracle.rpad»

Функция добавляет в конец заданной строки определенный символ, увеличивая строку до определенной длины.


```sql
oracle.rpad(string, length [, fill])
```


Функция применяется с параметрами, приведенными в таблице [3.73](#_bookmark173).

<span id="_bookmark173" class="anchor"></span>Таблица 3.73 – Параметры функции «oracle.rpad»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>итоговая длина строки</p>
</td>
</tr>
<tr>
<td>
<p>#3</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>символ для добавления</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим.


```sql
SELECT oracle.rpad('some string', 15, '!');
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image99.png)

Рисунок 3.96 – Пример выполнения SQL-запроса с использованием функции «oracle.rpad»

#### Функция «oracle.ltrim»

Функция удаляет из начала заданной строки определенный символ, используя синтаксис SQL-команды:


```sql
oracle.ltrim(string text [, characters text])
```


Функция применяется с параметрами, приведенными в таблице [3.74](#_bookmark175).

<span id="_bookmark175" class="anchor"></span>Таблица 3.74 – Параметры функции «oracle.ltrim»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>символ для удаления</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT oracle.ltrim('111some exmaple string', '1');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image100.png)



Рисунок 3.97 – Пример выполнения SQL-запроса с использованием функции «oracle.ltrim» 

В представленном примере имеется строка «string text»


```
'111some exmaple string'
```


Из которой требуется удалить символ удаления:


```
[, characters text]) - '1'
```


В результате функция удалит из начала строки, найденный символ '1' и выведет строку:


```
some exmaple string
```


#### Функции «oracle.rtrim»

Функция удаляет с конца заданной строки определенный символ, используя синтаксис SQL-команды:


```sql
oracle.rtrim(string text [, characters text])
```


Функция применяется с параметрами, приведенными в таблице [3.75](#_bookmark177).

<span id="_bookmark177" class="anchor"></span>Таблица 3.75 – Параметры функции «oracle.rtrim»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>символ для удаления</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT oracle.rtrim('some exmaple string111', '1');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image101.png)



Рисунок 3.98 – Пример выполнения SQL-запроса с использованием функции «oracle.rtrim» 

В представленном примере имеется строка «string text»


```
'some exmaple string111'
```


Из которой требуется удалить символ удаления:


```
[, characters text]) - '1'
```


В результате функция удалит из конца строки, найденный символ '1' и выведет строку:


```
some exmaple string
```


#### Функция «oracle.btrim»

Функция удаляет из начала и с конца заданной строки определенный символ, используя синтаксис SQL-команды:


```sql
oracle.btrim(string text [, characters text])
```


Функция применяется с параметрами, приведенными в таблице [3.76](#_bookmark179).

<span id="_bookmark179" class="anchor"></span>Таблица 3.76 – Параметры функции «oracle.btrim»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>символ для удаления</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT oracle.btrim('111some exmaple string111', '1');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image102.png)



Рисунок 3.99 – Пример выполнения SQL-запроса с использованием функции «oracle.btrim» 

В представленном примере имеется строка «string text»


```
'111some exmaple string111'
```


Из которой требуется удалить символ удаления:

[, characters text]) - '1'
```


```

В результате функция удалит из строки, найденный символ '1' и выведет строку:


```
some exmaple string
```


#### Функция «oracle.length»

Функция возвращает длину заданной строки, используя синтаксис SQL-команды:


```sql
oracle.length(string char)
```


Функция применяется с параметрами, приведенными в таблице [3.77](#_bookmark181).

<span id="_bookmark181" class="anchor"></span>Таблица 3.77 – Параметры функции «oracle.length»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>char</p>
</td>
<td>
<p>заданная строка</p>
</td>
</tr>
</tbody>
</table>

SQL-запрос будет следующим:

```sql
SELECT oracle.length('some string');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image103.png)



Рисунок 3.100 – Пример выполнения SQL-запроса с использованием функции «oracle.length»

В представленном примере требуется подсчитать количество символов в строке:


```
some string
```


Функция «oracle.length» вывела подсчет результата в количестве 11 символов, что соответствует подсчету приведенному в таблице [3.78](#_bookmark182).

<span id="_bookmark182" class="anchor"></span>Таблица 3.78 – Таблица подсчета символов

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 7%" />
<col style="width: 7%" />
<col style="width: 7%" />
<col style="width: 7%" />
<col style="width: 7%" />
<col style="width: 7%" />
<col style="width: 7%" />
<col style="width: 7%" />
<col style="width: 7%" />
<col style="width: 8%" />
<col style="width: 8%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Символ</strong></p>
</th>
<th style="text-align: center;">
<p>s</p>
</th>
<th style="text-align: center;">
<p>o</p>
</th>
<th style="text-align: center;">
<p>m</p>
</th>
<th style="text-align: center;">
<p>e</p>
</th>
<th style="text-align: center;"></th>
<th style="text-align: center;">
<p>s</p>
</th>
<th style="text-align: center;">
<p>t</p>
</th>
<th style="text-align: center;">
<p>r</p>
</th>
<th style="text-align: center;">
<p>i</p>
</th>
<th style="text-align: center;">
<p>n</p>
</th>
<th style="text-align: center;">
<p>g</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Количество</strong></p>
</td>
<td style="text-align: center;">
<p>1</p>
</td>
<td style="text-align: center;">
<p>2</p>
</td>
<td style="text-align: center;">
<p>3</p>
</td>
<td style="text-align: center;">
<p>4</p>
</td>
<td style="text-align: center;">
<p>5</p>
</td>
<td style="text-align: center;">
<p>6</p>
</td>
<td style="text-align: center;">
<p>7</p>
</td>
<td style="text-align: center;">
<p>8</p>
</td>
<td style="text-align: center;">
<p>9</p>
</td>
<td style="text-align: center;">
<p>10</p>
</td>
<td style="text-align: center;">
<p>11</p>
</td>
</tr>
<tr>
<td>
<p><strong>Итого</strong></p>
</td>
<td colspan="11" style="text-align: center;">
<p><strong>11</strong></p>
</td>
</tr>
</tbody>
</table>

Пробел учитывается в качестве символа.

#### Функция «oracle.to_number»

Функция преобразовывает заданное значение в число.

Практически функция переводит формат Oracle «number» в формат Postgres «numeric»


```sql
oracle.to_number(numeric)
```


Функция применяется с параметрами, приведенными в таблице [3.79](#_bookmark184).

<span id="_bookmark184" class="anchor"></span>Таблица 3.79 – Параметры функции «oracle.to_number»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3">
<p>oracle.to_number(numeric)</p>
</td>
</tr>
<tr>
<td colspan="3"></td>
</tr>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>numeric</p>
</td>
<td>
<p>число для преобразования</p>
</td>
</tr>
<tr>
<td colspan="3">
<p>oracle.to_number(text)</p>
</td>
</tr>
<tr>
<td colspan="3"></td>
</tr>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>text</p>
</td>
<td>
<p>текст для преобразования</p>
</td>
</tr>
</tbody>
</table>

SQL-запросы будут следующими:

```sql
SELECT oracle.to_number('265');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image104.png)



Рисунок 3.101 – Пример выполнения SQL-запроса с использованием функции «oracle.to_number(numeric)»

```sql
SELECT oracle.to_number(265);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image105.png)



Рисунок 3.102 – Пример выполнения SQL-запроса с использованием функции «oracle.to_number(text)»

#### Функция «oracle.mod»

Функция возвращает остаток от деления заданного числа на заданное число.


```sql
oracle.mod(int, int)
```


Функция применяется с параметрами, приведенными в таблице [3.80](#_bookmark186).

<span id="_bookmark186" class="anchor"></span>Таблица 3.80 – Параметры функции «oracle.mod»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Тип данных</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обозначение</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>делимое</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>integer</p>
</td>
<td>
<p>делитель</p>
</td>
</tr>
</tbody>
</table>

Пример запроса:

```sql
SELECT oracle.mod(32, 7);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image106.png)



Рисунок 3.103 – Пример выполнения SQL-запроса с использованием функции «oracle.mod» 

В приведенном примере показана строка вычисления:


```
32=7*4+4
```


В результате будет выведен остаток равный «4».

### Механизм DBMS_PIPE

Пакет DBMS_PIPE позволяет взаимодействовать между двумя и более сессиями подключения к psql. Pipe в данном контексте означает канал обмена сообщениями. Канал может быть частным и публичным: в первом случае из других сессий он доступен только автору, во втором – любым пользователям.

Канал можно создавать, перемещаться по его элементам, помещать в буфер и извлекать из него, отправлять и получать сообщения по мере наполнения буфера, чистить канал и сбрасывать счетчик элементов, получать сгенерированное имя для канала.

Каналы всегда нужно удалять по окончании использования во избежание переполнения доступной памяти.

Ниже представлены функции DBMS_PIPE:

- DBMS_PIPE.CREATE_PIPE – при указании имени, размера и типа канала можно его создать;

- DBMS_PIPE.NEXT_ITEM_TYPE – определить тип следующего элемента в буфере канала;

- DBMS_PIPE.PACK_MESSAGE – при указании элемента можно добавить элемент в буфер при формировании канала;

- DBMS_PIPE.PURGE – при указании имени канала можно его очистить;

- DBMS_PIPE.RECEIVE_MESSAGE – при указании имени канала и таймаута ожидания можно выгрузить содержимое канала;

- DBMS_PIPE.REMOVE_PIPE – при указании имени удалить канал по окончании использования;

- DBMS_PIPE.RESET_BUFFER – сбросить счетчик элементов канала на 0;

- DBMS_PIPE.SEND_MESSAGE – при указании имени, таймаута и максимального размера буфера отправить сформированный буфер канала для последующего получения;

- DBMS_PIPE.UNIQUE_SESSION_NAME – получить уникальное имя сессии для использования канала;

- UNPACK_MESSAGE_BYTEA - получить сообщение в локальном буфере с типом данных «BYTES»;

- UNPACK_MESSAGE_DATE - получить сообщение в локальном буфере с типом данных «DATE»;

- UNPACK_MESSAGE_NUMBER - получить сообщение в локальном буфере с типом данных «NUMERIC»;

- UNPACK_MESSAGE_RECORD - получить сообщение в локальном буфере с типом данных «RECORD»;

- UNPACK_MESSAGE_TEXT - получить сообщение в локальном буфере с типом данных «TEXT»;

- UNPACK_MESSAGE_TIMESTAMP - получить сообщение в локальном буфере с типом данных «TIMESTAMP».

Схема работы механизма DBMS_PIPE представлена на рисунке [3.104](#_bookmark188)

![](@site/docs/assets/images/com18.3.1/oracle/media/image107.png)

<span id="_bookmark188" class="anchor"></span>Рисунок 3.104 – Схема работы DBMS_PIPE

#### Пример реализации автономных транзакции (компонент Orafce, схема dbms_pipe)

##### Методика проверки

В СУБД «Jatoba» создается канал пересылки сообщений (pipe). Из одной сессии отправляются сообщения, во второй сессии они принимаются. Принимаемые значения записываются в таблицу «test2».

##### Сценарий проверки Этап 1. Установка

Выполнить полную установку Jatoba, согласно «Руководства по установке». Для GNU Linux установить следующие пакеты:

- jatoba<версия>-oracle-fdw

- jatoba<версия>-orafce

- jatoba<версия>-pg-variables

Установка пакетов выполняется командами:

- для deb:


```
apt-get install jatoba<версия>-oracle-fdw jatoba<версия>-orafce jatoba<версия>-pg-variables
```


- для rpm:


```
yum install jatoba<версия>-oracle-fdw jatoba<версия>-orafce jatoba<версия>-pg_variables
```


Для GNU Linux помимо вышеописанных пакетов устанавливается пакет oracle-instantclient.

Установка выполняется командой:


```
yum install oracle-instantclient11.2-basic-11.2.0.4.0-1.x86_64.rpm
```


Установить путь к библиотеке Oracle:


```
sh -c "echo /usr/lib/oracle/11.2/client64/lib > /etc/ld.so.conf.d/oracle-instantclient.conf"
```


Выполнить:


```
ldconfig
```


##### Этап 2. Функциональное тестирование

Авторизоваться в СУБД от имени и с правами привилегированного пользователя. Установить расширения SQL-командами:

```sql
# CREATE EXTENSION orafce;
# CREATE EXTENSION pg_variables; 
# CREATE EXTENSION oracle_fdw;
```

Открыть 3 сессии пользователем к postgres.

В **первой сессии** создать 2 таблицы SQL-командами:

```sql
# CREATE TABLE test1(a int); 
# CREATE TABLE test2(b int);
```

Создать канал пересылки сообщений (pipe):


```sql
SELECT dbms_pipe.create_pipe(&apos;my_pipe&apos;,10,true);
```


Запустить внешний цикл в транзакции SQL-командой:


```sql
CREATE OR REPLACE FUNCTION send_func() RETURNS VOID
LANGUAGE PLPGSQL AS $send_func$ 
BEGIN
    FOR i IN 0..1000 LOOP
    INSERT INTO test1 (a) VALUES (i);
    perform dbms_pipe.pack_message(i);
    perform dbms_pipe.send_message(&apos;my_pipe&apos;,5,0); RAISE NOTICE &apos;send message&apos;;
    perform pg_sleep(2); END LOOP;
END
$send_func$;
```

Во **второй сессии** (должны быть установлены расширения) запустить цикл в транзакции:


```sql
CREATE OR REPLACE PROCEDURE recv_func()
LANGUAGE PLPGSQL AS $recv_func$
BEGIN
    FOR i IN 0..1000 LOOP
    perform dbms_pipe.receive_message(&apos;my_pipe&apos;,5); perform dbms_pipe.next_item_type();
    RAISE NOTICE &apos;receive message&apos;;
    INSERT INTO test2 (b) select dbms_pipe.unpack_message_number(); COMMIT;
END LOOP; END
$recv_func$;
```

Во **второй сессии** вызвать процедуру:


```sql
CALL recv_func();
```


Выводятся сообщения RECEIVE MESSAGE. В **первой сессии** вызвать функцию:


```sql
SELECT send_func();
```


Выводятся сообщения SEND MESSAGE.

В **третьей сессии** несколько раз выполнить SQL-команду:


```sql
SELECT count(*) from test2;
```


Количество записей увеличивается.

#### Результат

Сообщения, отправленные в первой сессии psql, получены во второй сессии и записаны в таблицу test2.

## ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА PG_VARIABLES

Компонент используется для работы с переменными различных типов, таких как:

- транзакционные переменные;

- нетранзакционные переменные;

- склярные переменные;

- переменных-записей;

- переменных типа массив.

### Создание и использование не транзакционных переменных

Для использования не транзакционных переменных используется функция «pgv_set». Например.

- Создать несколько не транзакционных переменных и после первой начать транзакцию, выполнив SQL-команды:
- 
```sql
# SELECT pgv_set('vars', 'int1', 101); \# BEGIN;
# SELECT pgv_set('vars', 'int2', 102);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image108.png)



Рисунок 4.1 – Создание не транзакционных переменных и начало транзакции

- Выполнить откат транзакции:


```sql
ROLLBACK;
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image109.png)

Рисунок 4.2 – Команда отката операции

- Вывести список переменных:

```sql
SELECT * FROM pgv_list() order by package, name;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image110.png)



Рисунок 4.3 – Список переменных Обе переменные существуют, несмотря на откат.

### Создание и использование транзакционных переменных

В СУБД по умолчанию переменные создаются как не транзакционные. Успешно созданная переменная продолжает существовать на протяжении всего сеанса, вне зависимости от возможных откатов транзакций.

Например.

- Создать транзакционную переменную (начать транзакцию в самом начале) SQL-командой:

```sql
# BEGIN;
# SELECT pgv_set('vars', 'trans_int', 101, true);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image111.png)

Рисунок 4.4 – Создание транзакционной переменной

- Создать точку сохранения SQL-командой:

```sql
SAVEPOINT sp1;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image112.png)



Рисунок 4.5 – Создание точки сохранения

- Перезаписать переменную и создать новую переменную SQL-командой:

```sql
# SELECT pgv_set('vars', 'trans_int', 102, true);
# SELECT pgv_set('vars', 'trans_int2', 1022, true);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image113.png)



Рисунок 4.6 – Перезапись переменной и создание новой

- Выполнить откат на точку сохранения и закончить транзакцию SQL-командой:

```sql
# ROLLBACK TO sp1; 
# COMMIT;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image114.png)

Рисунок 4.7 – Выполнение отката на точку сохранения

- Вывести значение переменной 'trans_int' SQL-командой:

```sql
SELECT pgv_get('vars', 'trans_int', NULL::int);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image115.png)



Рисунок 4.8 – Ввод значения переменной

Значение «trans_int» соответствует первоначальному, следовательно - откат сработал.

- Вывести значение переменной 'trans_int2' SQL-командой:

```sql
SELECT pgv_get('vars', 'trans_int2', NULL::int);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image116.png)



Рисунок 4.9 – Вывод значения переменной 'trans_int2'

Переменная «trans_int2» не распознана, т.к. была создана после точки сохранения.

### Создание и использование скалярной переменной

Функции «pgv_set» и «pgv_get» поддерживают скалярные переменные.

Функция «pgv_set» выполняет создание пакета и переменной, имеет следующий синтаксис:

pgv_set(package text, name text, value anynonarray, is_transactional bool default false)

Функция «pgv_get» выполняет проверку типа переменной и вывод значения переменной, имеет следующий синтаксис:

pgv_get(package text, name text, var_type anynonarray, strict bool default true)

Например.

- Выполнить функцию вывода значения переменной SQL-командой:

```sql
SELECT pgv_get('vars', 'int1', NULL::int);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image117.png)



Рисунок 4.10 – Вывод значения переменной Выводится сообщение об ошибке, т.к. нет пакета и переменной.

- Выполнить создание пакета и переменной SQL-командой:


```sql
SELECT pgv_set('vars', 'int1', 101);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image118.png)

Рисунок 4.11 – Создание пакета и переменной Пакет и переменная созданы.

- Еще раз выполнить функцию вывода значения переменной SQL-командой:

```sql
SELECT pgv_get('vars', 'int1', NULL::int);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image119.png)



Рисунок 4.12 – Вывод значения переменной

### Создание и использование переменных типа запись

Функция «pgv_insert» вставляет запись в набор переменных для заданного пакета. Если пакет или переменная не существуют, они создаются автоматически. Первый столбец записи r — первичный ключ. Если запись с таким же первичным ключом уже существует или этот набор переменных имеет другую структуру, выдается ошибка. Возвращает тип данных void и имеет следующий синтаксис:

pgv_insert(package text, name text, r record, is_transactional bool default false)

Функция «pgv_update» изменяет запись с соответствующим первичным ключом (он задается в первом столбце r). Возвращает «true», если запись была найдена. Если этот набор переменных имеет другую структуру, выдается ошибка.

Функция «pgv_update» возвращает тип данных «boolean» и имеет следующий синтаксис:

pgv_update(package text, name text, r record)

Функция «pgv_delete» удаляет запись с соответствующим первичным ключом (он задается в первом столбце r). Возвращает «true», если запись была найдена.

Функция возвращает тип данных «boolean» и имеет следующий синтаксис:

pgv_delete(package text, name text, value anynonarray)

Функция «pgv_select» возвращает:

- записи из набора переменных;

- записи из набора переменных с соответствующими первичными ключами (первичный ключ задается в первом столбце r).

Функция возвращает тип данных «set of records», «records» и имеет следующий синтаксис:

pgv_select(package text, name text)

pgv_select(package text, name text, value anynonarray)

Например.

- Создать и наполнить таблицу SQL-командой:

```sql
# CREATE TABLE tab (id int, t varchar);
# INSERT INTO tab VALUES (0, 'str00'), (1, 'str11');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image120.png)



Рисунок 4.13 – Создание таблицы Таблица успешно создана и наполнена данными.

- Выполнить функцию вставки «pgv_insert» и функцию отображения записей «pgv_select»:



```sql
# SELECT pgv_insert('vars', 'r1', tab) FROM tab; \# SELECT pgv_select('vars', 'r1');
```
![](@site/docs/assets/images/com18.3.1/oracle/media/image121.png)

Рисунок 4.14 – Выполнение функции и вывода записи

- Отобразить запись с идентификатором '1' из пакета 'vars':

```sql
SELECT pgv_select('vars', 'r1', 1);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image122.png)



Рисунок 4.15 – Отображение записи с индикатором '1'

- Отобразить запись с идентификатором '0' из пакета 'vars':


```sql
SELECT pgv_select('vars', 'r1', 0);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image123.png)

Рисунок 4.16 - Отображение записи с индикатором '0'

- Отобразить записи из массива выбранных идентификаторов (1 и 0):

```sql
SELECT pgv_select('vars', 'r1', ARRAY[1, 0]);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image124.png)



Рисунок 4.17 – Отображение записи из массива

- Выполнить функцию удаления записи с идентификатором 1:

```sql
SELECT pgv_delete('vars', 'r1', 1);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image125.png)



Рисунок 4.18 – Удаление записи

- Убедиться, что осталась одна запись:


```sql
SELECT pgv_select('vars', 'r1');
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image126.png)

Рисунок 4.19 – Вывод списка записей

- Обновить старую запись и добавить новую:
- 
```sql
# UPDATE tab set t='new_str00' where id=0; \# INSERT INTO tab VALUES (2, 'str22');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image127.png)



Рисунок 4.20 – Обновление записей В таблице старая запись обновлена и добавлена новая.

- Выполнить функции обновления и отображения записей:

```sql
# SELECT pgv_update('vars', 'r1', tab) from tab; \# SELECT pgv_select('vars', 'r1');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image128.png)

Рисунок 4.21 – Обновление и отображение записей

Функция «pgv_update» только обновляет существующие записи, но не добавляет новые, поэтому будет отражена 1 запись.

### Создание и использование переменных типа массив

Функции «pgv_set» и «pgv_get» поддерживают переменный с типом «массив». Функции «pgv_set» использует для переменных типа массив следующий синтаксис:


```sql
pgv_set(package t ext, name text, value anyarray, is_ transactional bool default false)
```


и использует аргументы:

- package - имя пакета, оно должно быть создано если не существует;

- name - имя переменной, она будет создана, если не существует. pgv_set терпит неудачу, если переменная уже существует и ее транзакционность не соответствует is_transactional аргументу;

- value - новое значение переменной. pgv_set терпит неудачу, если переменная уже существует и ее тип не соответствует типу нового значения;

- is_transactional - транзакционность вновь созданной переменной, по умолчанию false.

Функции «pgv_get» использует для переменных типа массив следующий синтаксис:


```sql
pgv_get(p ackage text, name text, var_type an yarray, strict bool default true)
```


и использует аргументы:

- package – имя существующего пакета. Если пакет не существует, результат зависит от strict аргумента: если он ложный, то pgv_get возвращает NULL, в противном случае происходит сбой;

- name – имя существующей переменной. Если переменная не существует, результат зависит от strict аргумента: если он ложный, то pgv_get возвращает NULL, в противном случае происходит сбой;

- var_type – тип существующей переменной. Его необходимо передать, чтобы получить правильный тип возвращаемого значения;

- strict – передать false, если pgv_get не должно вызывать ошибку, если переменная или пакет не были созданы ранее, по умолчанию это правда.

Например.

- Выполнить функцию задания массива:

```sql
SELECT pgv_set('vars', 'arr1', '{101,102}'::int[]);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image129.png)



Рисунок 4.22 – Создание переменной типа массив Функция успешно выполнена.

- Вывести созданный массив:


```sql
SELECT pgv_get('vars', 'arr1', NULL::int[]);
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image130.png)

Рисунок 4.23 – Вывод массива

Массив создан.

### Восстановление удаленной транзакционной переменной

Команда «ROLLBACK» позволяет восстановить удаленную транзакционную переменную.

Например.

- Создать пакет с нетранзакционной и транзакционной переменными:

```sql
# SELECT pgv_set('pack', 'var_reg', 123);
# SELECT pgv_set('pack', 'var_trans', 456, true);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image131.png)



Рисунок 4.24 – Создание пакетов с различными переменными Пакеты с переменными созданы.

- Начать транзакцию и удалить все пакеты с переменными:

```sql
# BEGIN;
# SELECT pgv_free();
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image132.png)

Рисунок 4.25 – Выполнение транзакции Пакеты с переменными удалены.

- Убедиться, что все пакеты удалены:

```sql
SELECT * FROM pgv_list();
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image133.png)



Рисунок 4.26 – Вывод списка пакетов

Выполнить откат и убедиться, что восстановлена только транзакционная переменная:

```sql
# ROLLBACK;
# SELECT \* FROM pgv_list();
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image134.png)

Рисунок 4.27 - Откат удаленной транзакции

### Вывод занимаемой памяти

Функция «pgv_stats» возвращает список созданных пакетов и объем памяти, используемый переменными, в байтах.

Функция имеет синтаксис:


```sql
pgv_stats()
```


Например.

- Создать пакет с переменной:

```sql
SELECT pgv_set('vars', 'int1', 101);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image135.png)



Рисунок 4.28 – Создание пакета с переменной Пакет с переменной созданы.

- Вывести объем памяти в байтах, занятой переменными:


```sql
SELECT * FROM pgv_stats() ORDER BY package;
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image136.png)

Рисунок 4.29 – Вывод объема памяти занятой переменной Выведен объем занятой памяти по пакетам.

### Удаление переменной

Функция «pgv_remove» удаляет заданный пакет и все его переменные. Указанный пакет должен существовать, иначе выдается ошибка.

Функция «pgv_remove» возвращает тип данных void и имеет следующий синтаксис:


```sql
pgv_remove(package text)
```


Например

- Создать пакет и несколько переменных SQL-командой:



```sql
# SELECT pgv_set('vars', 'int1', 101); \# SELECT pgv_set('vars', 'int2', 102);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image137.png)

Рисунок 4.30 – Создание пакета и переменных

Пакет с переменными созданы.

- Вывести пакеты и переменные SQL-командой:

```sql
SELECT * FROM pgv_list() ORDER BY package, name;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image138.png)



Рисунок 4.31 – Вывод пакета и переменных Созданные пакет и переменные отображены.

- Удалить переменную «int1» SQL-командой:

```sql
SELECT pgv_remove('vars', 'int1');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image139.png)



Рисунок 4.32 – Удаление переменной Переменная удалена.

- Еще раз вывести пакеты и переменные SQL-командой:


```sql
SELECT * FROM pgv_list() ORDER BY package, name;
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image140.png)

Рисунок 4.33 – Вывод пакета и переменных Удаленная переменная в списке отсутствует.

### Удаление всех пакетов и переменных

Функция «pgv_free» удаляет все пакеты и переменные. Возвращает тип данных void и имеет следующий синтаксис:


```sql
pgv_free()
```


Например

- Создать 1-й пакет и несколько переменных:

```sql
# SELECT pgv_set('vars', 'int1', 101); \# SELECT pgv_set('vars', 'int2', 102);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image137.png)



Рисунок 4.34 – Создание первого пакета и переменных Пакет с переменными созданы.

- Создать 2-й пакет и несколько переменных:

```sql
# SELECT pgv_set('vars2', 'text_a', 'text_a'::text); \# SELECT pgv_set('vars2', 'text_b', 'text_b'::text);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image141.png)



Рисунок 4.35 – Создание второго пакета и переменных Пакет с переменными созданы.

- Удалить все пакеты и переменные:

```sql
SELECT pgv_free();
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image142.png)



Рисунок 4.36 – Удаление пакетов и переменных Функция удаления выполнена.

- Вывести все пакеты и переменные:


```sql
SELECT * FROM pgv_list() ORDER BY package, name;
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image143.png)

Рисунок 4.37 – Вывод списка пакетов и переменных

Список пуст.

- Убедиться, что память свободна:

```sql
SELECT * FROM pgv_stats() ORDER BY package;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image144.png)



Рисунок 4.38 – Вывод состояния памяти

### Проверка на существование пакета

Функция «pgv_exists» обладает функциональными возможностями проверки на существование пакета и (или) переменной

Возвращает значение «true», если существует указанный пакет и (или) переменная существует.

Функция имеет следующий синтаксис:


```sql
pgv_exists(package text)
```


Например.

- Создать пакет и несколько переменных:

```sql
# SELECT pgv_set('vars', 'int1', 101); \# SELECT pgv_set('vars', 'int2', 102);
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image145.png)

Рисунок 4.39 – Создание пакета и нескольких переменных Пакет с переменными созданы.

- Вывести пакеты и переменные:

```sql
SELECT * FROM pgv_list() ORDER BY package, name;
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image146.png)



Рисунок 4.40 – Вывод состояния пакетов и переменных Созданные пакет и переменные отображены.

- Выполнить функцию, проверяющую существование указанного пакета:


```sql
SELECT pgv_exists('vars');
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image147.png)

Рисунок 4.41 – Вывод состояния пакета Указанный пакет существует, т.к. выведено значение «t» (true).

- Выполнить функцию, проверяющую существование указанного пакета и переменной:

```sql
SELECT pgv_exists('vars', 'int1');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image148.png)



Рисунок 4.42 – Вывод состояния пакета и переменной 

Указанный пакет и переменная существуют, т.к. выведено значение «t» (true).

## ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА ORACLE_FDW

### Добавление внешней таблицы Oracle в СУБД «Jatoba»

Чтобы подключиться к базе данных Oracle и в дальнейшем обращаться к ней под именем «oradb», необходимо от имени привилегированного пользователя выполнить команду:

```sql
CREATE SERVER oradb FOREIGN DATA WRAPPER oracle_fdw OPTIONS (dbserver '<строка подключения>');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image149.jpeg)



Рисунок 5.1 – Пример выполнения команды CREATE SERVER 

Параметры для использования в OPTIONS указаны в таблице [5.1](#_bookmark203).

<span id="_bookmark203" class="anchor"></span>Таблица 5.1 – Параметры для команды CREATE SERVER

<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 19%" />
<col style="width: 16%" />
<col style="width: 44%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обязательный</strong></p>
</th>
<th>
<p><strong>Значение по</strong></p>
<p><strong>умолчанию</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>dbserver</p>
</td>
<td>
<p>+</p>
</td>
<td></td>
<td>
<p>Строка подключения Oracle.</p>
<p>Например:</p>
<p>'//dbserver.mydomain.com: 1521/ORADB</p>
</td>
</tr>
<tr>
<td>
<p>isolation_level</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>serializable</p>
</td>
<td>
<p>Уровень изолированности транзакций к БД Oracle.</p>
<p>Значения параметра:</p>

<ul>
<li><p>serializable,</p></li>
<li><p>read_committed,</p></li>
<li><p>read_only.</p></li>
</ul></td>
</tr>
<tr>
<td>
<p>nchar</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>off</p>
</td>
<td style="text-align: left;">
<p>При значении параметра «on» преобразование символов на стороне Oracle будет более затратным, однако это необходимо в случае если в Oracle</p>
<p>используется однобайтовая кодировка,</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 19%" />
<col style="width: 16%" />
<col style="width: 44%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обязательный</strong></p>
</th>
<th>
<p><strong>Значение по</strong></p>
<p><strong>умолчанию</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td>
<p>но в таблицах есть данные NCHAR или</p>
<p>NVARCHAR2, содержащие символы, которые не могут быть отражены</p>
<p>базой данных.</p>
</td>
</tr>
<tr>
<td>
<p>set_timezone</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>off</p>
</td>
<td style="text-align: left;">
<p>При значении параметра «on» в БД Oracle на время сессии установится часовой пояс, выставленный в БД Jatoba. Установить параметр в «on» может быть полезно, если во внешней таблице Jatoba требуется использовать тип данных timestamp without time zone, а в Oracle у соответствующей колонки используется тип TIMESTAMP WITH LOCAL TIME ZONE.</p>
<p>При использовании значения, которое не определено на сервере Oracle, возникнет ошибка:</p>
<p>ORA-01882: timezone region not found</p>
</td>
</tr>
</tbody>
</table>

Чтобы дать доступ к «oradb» другому (не привилегированному) пользователю Jatoba, выполнить команду:


```sql
GRANT USAGE ON FOREIGN SERVER oradb TO <имя пользователя Jatoba>;
```


Чтобы дать право пользователю Jatoba выполнять команды в БД Oracle, выполнить команду:


```sql
CREATE USER MAPPING FOR <имя пользователя Jatoba> SERVER oradb OPTIONS (user '<имя пользователя БД Oracle>', password '<пароль пользователя БД Oracle>');
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image150.jpeg)

Рисунок 5.2 – Пример выполнения команды CREATE USER MAPPING 

Параметры для использования в OPTIONS указаны в таблице [5.2](#_bookmark204).

<span id="_bookmark204" class="anchor"></span>Таблица 5.2 – Параметры для команды CREATE USER MAPPING

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 20%" />
<col style="width: 45%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название параметра</strong></p>
</th>
<th>
<p><strong>Обязательный</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>user</p>
</td>
<td>
<p>+</p>
</td>
<td>
<p>Имя пользователя БД Oracle.</p>
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
<p>Пароль для пользователя БД Oracle.</p>
</td>
</tr>
</tbody>
</table>

Чтобы получить доступ к внешней таблице, выполнить команду CREATE FOREIGN TABLE, определив ее колонки. Например:

```sql
CREATE FOREIGN TABLE oratab (
    id integer OPTIONS (key 'true') NOT NULL, text character varying(30),
    floating double precision NOT NULL
    ) SERVER oradb OPTIONS (schema '<схема Oracle>', table '<название таблицы Oracle>');
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image151.jpeg)



Рисунок 5.3 – Пример выполнения команды CREATE FOREIGN TABLE Параметры внешней таблицы для использования в OPTIONS указаны в таблице [5.3](#_bookmark205).

Параметры колонок указаны в таблице [5.4](#_bookmark206).

Соответствие типов данных Jatoba и типов Oracle описано в подразделе [5.2.4](#типы-данных).

Также можно добавить целиком схему Oracle (все таблицы). Инструкция находится в подразделе [5.2.10](#поддержка-операции-import-foreign-schema).

<span id="_bookmark205" class="anchor"></span>Таблица 5.3 – Параметры для команды CREATE FOREIGN TABLE

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 19%" />
<col style="width: 17%" />
<col style="width: 42%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название</strong></p>
<p><strong>параметра</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обязательный</strong></p>
</th>
<th>
<p><strong>Значение по</strong></p>
<p><strong>умолчанию</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>table</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td></td>
<td>
<p>Название таблицы Oracle.</p>
</td>
</tr>
<tr>
<td>
<p>dblink</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td></td>
<td>
<p>Oracle database link (ссылка на базу</p>
<p>данных).</p>
</td>
</tr>
<tr>
<td>
<p>schema</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td></td>
<td>
<p>Схема, к которой принадлежит</p>
<p>таблица.</p>
</td>
</tr>
<tr>
<td>
<p>max_long</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>32767</p>
</td>
<td>
<p>Максимальная длина значений типов LONG, LONG RAW и XMLTYPE.</p>
<p>Значение параметра должно быть от 1 до 1073741823.</p>
<p>Если в таблице есть значение больше, при запросе выведется ошибка:</p>
<p>ORA-01406: fetched column value was truncated</p>
</td>
</tr>
<tr>
<td>
<p>readonly</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>false</p>
</td>
<td style="text-align: left;">
<p>Если установить параметр в true, то будет доступна запись во внешнюю таблицу (операции INSERT,</p>
<p>UPDATE и DELETE).</p>
</td>
</tr>
<tr>
<td>
<p>sample_percent</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>100</p>
</td>
<td style="text-align: left;">
<p>Процент строк внешней таблицы, которые будут случайно выбраны для подсчета статистики (операция ANALYZE). Значение параметра</p>
<p>должно быть от 0.000001 до 100.</p>
</td>
</tr>
<tr>
<td>
<p>prefetch</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>50</p>
</td>
<td style="text-align: left;">
<p>Количество строк, которые будут предзагружены из внешней таблицы за один цикл. Значение параметра должно быть от 1 до 1000. Высокие</p>
<p>значения могут улучшить</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 19%" />
<col style="width: 17%" />
<col style="width: 42%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название</strong></p>
<p><strong>параметра</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обязательный</strong></p>
</th>
<th>
<p><strong>Значение по</strong></p>
<p><strong>умолчанию</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td>
<p>производительность, но будут</p>
<p>занимать больше места на сервере. Если какая-то колонка внешней таблицы имеет тип MDSYS.SDO_GEOMETRY,</p>
<p>предзагружаться таблица не будет.</p>
</td>
</tr>
<tr>
<td>
<p>lob_prefetch</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>1048576</p>
</td>
<td style="text-align: left;">
<p>Количество байтов, которые будут предзагружены для значений типов BLOB, CLOB и BFILE. Для загрузки значений, которые превышают значение этого параметра, потребуется дополнительный цикл</p>
<p>обмена данными.</p>
</td>
</tr>
</tbody>
</table>

<span id="_bookmark206" class="anchor"></span>Таблица 5.4 – Параметры колонок

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 19%" />
<col style="width: 16%" />
<col style="width: 47%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название</strong></p>
<p><strong>параметра</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обязательный</strong></p>
</th>
<th>
<p><strong>Значение по</strong></p>
<p><strong>умолчанию</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>key</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>false</p>
</td>
<td style="text-align: left;">
<p>Если установлен в «true», соответствующая колонка внешней таблицы пометится как первичный ключ. Для проведения операций UPDATE и DELETE необходимо указывать через этот параметр корректные первичные</p>
<p>ключи.</p>
</td>
</tr>
<tr>
<td>
<p>strip_zeros</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>false</p>
</td>
<td style="text-align: left;">
<p>Если установлен в «true», символы ASCII</p>
<p>0 будут удалены из всех строковых значений во время переноса внешней таблицы. Эти символы считаются</p>
<p>валидными в Oracle, но не в СУБД Jatoba,</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 19%" />
<col style="width: 16%" />
<col style="width: 47%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название</strong></p>
<p><strong>параметра</strong></p>
</th>
<th>
<p><strong>Обязательный</strong></p>
</th>
<th>
<p><strong>Значение по</strong></p>
<p><strong>умолчанию</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td>
<p>поэтому их выгрузка может привести к</p>
<p>ошибке.</p>
<p>Параметр работает только со значениями типов char, varchar и text.</p>
</td>
</tr>
</tbody>
</table>

После указания внешней таблицы, с ней можно работать как с таблицей СУБД «Jatoba».

Например, выполнить команду SELECT:

![](@site/docs/assets/images/com18.3.1/oracle/media/image152.png)

Рисунок 5.4 – Пример выполнения команды SELECT

### Использование компонента

### Необходимые права в Oracle

Пользователь, через которого идет соединение к Oracle, должен иметь право создавать сессии (CREATE SESSION) и читать таблицу.

### Соединения

Компонент кеширует соединения к Oracle. Все соединения будут автоматически завершены при завершении сессии Jatoba.

Чтобы вручную завершить все соединения Oracle, можно использовать функцию oracle_close_connections(). Например, ее можно вызывать при долгой сессии, во время которой редко происходят обращения ко внешним таблицам, чтобы не блокировать ресурсы, требующиеся для соединения с БД Oracle.

Это функцию невозможно вызвать внутри транзакции, которая меняет данные в БД Oracle.

### Таблицы

Поля таблицы Oracle сопоставляются с колонками таблицы Jatoba в том порядке, в котором они определялись при выполнении команды CREATE FOREIGN TABLE.

При выполнении запроса к внешней таблице компонент будет обращаться только к тем колонкам таблицы Oracle, информация из которых необходима для выполнения запроса.

Во внешней таблице Jatoba может быть больше или меньше колонок, чем в таблице Oracle. Если в таблице Jatoba больше полей, запрос вернет значение NULL для соответствующих полей и покажет предупреждение.

Перед выполнением UPDATE или DELETE необходимо убедиться, что параметр «key» выставлен для всех колонок, которые являются первичными ключами таблицы. Если параметр не выставлен, запрос вернет ошибку.

### Типы данных

Для колонок внешней таблицы Jatoba необходимо определить те типы данных, которые компонент может сопоставить с типами Oracle (см. таблицу [5.5](#_bookmark212)). Если размер значения в таблице Oracle больше, чем размер поля в таблице Jatoba (например, если длина типа varchar или максимальное число integer в колонке Oracle больше, чем в Jatoba), в процессе выполнения запроса вернется ошибка.

<span id="_bookmark212" class="anchor"></span>Таблица 5.5 – Соответствие типов данных Oracle и Jatoba

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Тип данных Oracle</strong></p>
</th>
<th>
<p><strong>Возможный тип данных Jatoba</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>CHAR</p>
</td>
<td>
<p>char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>NCHAR</p>
</td>
<td>
<p>char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>VARCHAR</p>
</td>
<td>
<p>char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>VARCHAR2</p>
</td>
<td>
<p>char, varchar, text, json</p>
</td>
</tr>
<tr>
<td>
<p>NVARCHAR2</p>
</td>
<td>
<p>char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>CLOB</p>
</td>
<td>
<p>char, varchar, text. json</p>
</td>
</tr>
<tr>
<td>
<p>LONG</p>
</td>
<td>
<p>char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>RAW</p>
</td>
<td>
<p>uuid, bytea</p>
</td>
</tr>
<tr>
<td>
<p>BLOB</p>
</td>
<td>
<p>bytea</p>
</td>
</tr>
<tr>
<td>
<p>BFILE</p>
</td>
<td>
<p>bytea (read-only)</p>
</td>
</tr>
<tr>
<td>
<p>LONG RAW</p>
</td>
<td>
<p>bytea</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Тип данных Oracle</strong></p>
</th>
<th>
<p><strong>Возможный тип данных Jatoba</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>NUMBER</p>
</td>
<td>
<p>numeric, float4, float8, char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>NUMBER(n,m) при m&lt;=0</p>
</td>
<td>
<p>numeric, float4, float8, int2, int4, int8, boolean, char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>FLOAT</p>
</td>
<td>
<p>numeric, float4, float8, char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>BINARY_FLOAT</p>
</td>
<td>
<p>numeric, float4, float8, char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>BINARY_DOUBLE</p>
</td>
<td>
<p>numeric, float4, float8, char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>DATE</p>
</td>
<td>
<p>date, timestamp, timestamptz, char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>TIMESTAMP</p>
</td>
<td>
<p>date, timestamp, timestamptz, char, varchar,</p>
<p>text</p>
</td>
</tr>
<tr>
<td>
<p>TIMESTAMP WITH TIME ZONE</p>
</td>
<td>
<p>date, timestamp, timestamptz, char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>TIMESTAMP WITH LOCAL TIME ZONE</p>
</td>
<td>
<p>date, timestamp, timestamptz, char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>INTERVAL YEAR TO MONTH</p>
</td>
<td>
<p>interval, char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>INTERVAL DAY TO SECOND</p>
</td>
<td>
<p>interval, char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>XMLTYPE</p>
</td>
<td>
<p>xml, char, varchar, text</p>
</td>
</tr>
<tr>
<td>
<p>MDSYS.SDO_GEOMETRY</p>
</td>
<td>
<p>geometry</p>
</td>
</tr>
</tbody>
</table>

При сопоставлении типа NUMBER (Oracle) и boolean (Jatoba) значение «0» будет конвертироваться в false, все остальное — в true.

Добавление или изменение XMLTYPE работает только со значениями, которые не превышают максимальное значение типа VARCHAR2 (4000 или 32767, в зависимости от значения параметра MAX_STRING_SIZE)

Тип NCLOB в текущее время не поддерживается, потому что Oracle не может автоматически его конвертировать.

При конвертации типа TIMESTAMP WITH LOCAL TIME ZONE (Oracle) в timestamp (Jatoba) необходимо настроить параметр set_timezone в БД Oracle.

Если необходима специфическая конвертация, не указанная в таблице [Таблица 5.5](#_bookmark212), можно определить подходящее представление в БД Oracle или БД Jatoba.

### Операторы WHERE и ORDER BY

При отправлении запроса, содержащего условия WHERE, к внешней таблице компонент преобразует запрос к Oracle таким образом, чтобы он содержал те же условия

WHERE, если Oracle может их обработать. Это, во-первых, позволяет уменьшить количество строк, которые загружаются из Oracle, а во-вторых, позволяет Oracle выбрать оптимальный способ обращения к нужным таблицам.

Точно так же, ORDER BY условия будут отправлены в запросе к Oracle, если есть такая возможность. Однако условия ORDER BY, которые сортируют результат по строке символов, не будут отправлены к Oracle, потому что порядок сортировки в Jatoba и Oracle может отличаться.

Запросы, содержащие условия, будут отправлены на сервер Oracle целиком с большей вероятностью, если использовать простые условия и если при создании внешней таблицы в Jatoba использовать типы данных, соответствующие типам Oracle (см. таблицу [Таблица 5.5](#_bookmark212)).

Выражения now(), transaction_timestamp(), current_timestamp, current_date и localtimestamp будут транслированы в Oracle корректно.

Чтобы посмотреть, какая часть запроса Jatoba к внешней таблице будет отправлена в Oracle, можно использовать команду EXPLAIN (см. подраздел [5.2.8](#оператор-explain)).

### Использование оператора JOIN с внешними таблицами

JOIN таблиц будет обрабатываться на стороне Oracle, если:

- обе таблицы определены на одном и том же внешнем сервере;

- запрос с JOIN содержит не более двух таблиц;

- запрос с JOIN является запросом SELECT;

- условия WHERE запроса могут быть обработаны на стороне Oracle (см. подраздел [5.2.5](#операторы-where-и-order-by));

- если в запросе есть CROSS JOIN, он содержит условия.

Если в запросе есть и оператор JOIN, и оператор ORDER BY, то в случае, если JOIN может выполниться на стороне Oracle, ORDER BY выполняется на стороне Jatoba.

Важно чтобы статистика по обеим внешним таблицам через ANALYZE (см. подраздел [5.2.9](#оператор-analyze)) была собрана, чтобы СУБД «Jatoba» могла выбрать оптимальный способ сделать JOIN.

### Изменение данных внешней таблицы

Oracle_FDW поддерживает операции INSERT, UPDATE и DELETE над внешними таблицами. По умолчанию эти операции разрешены, но могут быть запрещены с помощью параметра «readonly» (см. таблицу [Таблица 5.3](#_bookmark205)).

Чтобы операции UPDATE и DELETE выполнялись, у колонок, соответствующих первичным ключам в таблице Oracle, должен быть указан параметр «key» (см. таблицу [Таблица 5.4](#_bookmark206)). Эти колонки используются для идентификации строк внешней таблицы.

Если при выполнении команды INSERT значение какой-то колонки внешней таблицы не было указано, будет использовано значение по умолчанию, указанное при создании внешней таблицы Jatoba, или NULL. Значение по умолчанию, указанное для соответствующей колонки в Oracle, будет использоваться только в случае, если эта колонка не была проинициализирована при создании внешней таблицы Jatoba.

Условие RETURNING для команд INSERT, UPDATE и DELETE будет работать, кроме случаев, когда в условии указаны колонки, которые в Oracle имеют тип LONG и LONG RAW (Oracle не поддерживает RETURNING для этих типов данных).

Триггеры для внешних таблиц поддерживаются. Триггеры, которые определяются через AFTER и FOR EACH ROW требуют, чтобы во внешних таблицах не было колонок, которые в Oracle имеют тип LONG и LONG RAW, поскольку эти триггеры используют условие RETURNING, об ограничениях которого упомянуто выше.

Производительность запросов, изменяющих данные во внешних таблицах, низкая, особенно когда меняется много строк, потому что строки обрабатываются по отдельности.

Операции BEGIN, COMMIT, ROLLBACK и SAVEPOINT компонентом поддерживаются.

Подготовленные запросы (prepared statements) ко внешним таблицам не поддерживаются.

По умолчанию oracle_fdw использует уровень изоляции «serializable», поэтому запросы, меняющие данные во внешних таблицах, могут привести к ошибке:

> ORA-08177: can't serialize access for this transaction

Такая ошибка может возникнуть при параллельном выполнении транзакций, особенно если они выполняются долго. Ошибки этого типа обозначены как SQLSTATE (40001). Приложение, которое использует Oracle_FDW должно заново отправить транзакцию, если произошла ошибка этого типа.

Можно также поменять уровень изоляции транзакции (см. параметр «isolation_level» в таблице [5.1](#_bookmark203)).

### Оператор EXPLAIN

Операция EXPLAIN к внешней таблице покажет запрос, который отправится к серверу Oracle. EXPLAIN VERBOSE покажет план исполнения запроса в Oracle (не будет работать в Oracle server 9i или старше).

### Оператор ANALYZE

Оператор ANALYZE можно использовать на внешней таблице, чтобы собрать статистику.

Без сбора статистики Jatoba не сможет оценить количество строк во время запросов к внешней таблице, из-за чего БД может выбирать неоптимальный план выполнения запросов. Jatoba не будет автоматически собирать статистику для внешних таблиц с использованием автоочистки (autovacuum daemon), как она это делает для обычных таблиц, поэтому важно исполнять команду ANALYZE для внешней таблицы после ее создания и после существенных изменений в таблице.

Выполнение операции ANALYZE над внешней таблицей потребует полного последовательного сканирования таблицы. Чтобы ускорить выполнение операции, можно указать меньшее значение параметра «sample_percent» (см. таблицу [5.3](#_bookmark205)).

### Поддержка операции IMPORT FOREIGN SCHEMA

Операция IMPORT FOREIGN SCHEMA позволяет импортировать схему (набор таблиц) из БД Oracle.

Пример команды:


```sql
IMPORT FOREIGN SCHEMA <имя схемы Oracle> FROM SERVER oradb INTO <локальная схема> OPTIONS (case 'lower')
```


Правила использования операции:

- IMPORT FOREIGN SCHEMA создаст внешние таблицы для всех объектов в ALL_TAB_COLUMNS (таблицы, представления, материализированные представления). Синонимы не будут перенесены из схемы Oracle.

- Название схемы в команде должно совпадать с названием схемы в БД Oracle. Регистр также должен совпадать (в Oracle чаще всего используется верхний регистр). Поскольку Jatoba автоматически меняет регистр имен на нижний, необходимо указывать имя схемы в двойных кавычках (например, «SCOTT»).

- При использовании команд LIMIT TO или EXCEPT имена таблиц необходимо указывать в нижнем регистре (вне зависимости от того, какой регистр использовался в Oracle).

Параметры для использования в OPTIONS указаны в таблице [5.6](#_bookmark219). <span id="_bookmark219" class="anchor"></span>Таблица 5.6 – Параметры для команды IMPORT FOREIGN SCHEMA

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 30%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>case</p>
</td>
<td>
<p>smart</p>
</td>
<td>
<p>Регистр, в котором переносятся таблицы и названия столбцов.</p>
<p>Значения параметра:</p>

<ul>
<li><p>keep – оставить тот же регистр, который был в Oracle;</p></li>
<li><p>lower – привести к нижнему регистру;</p></li>
<li><p>smart – привести к нижнему регистру</p></li>
</ul>

<p>только те имена, все символы которых во верхнем регистре.</p>
</td>
</tr>
<tr>
<td>
<p>collation</p>
</td>
<td>
<p>default</p>
</td>
<td style="text-align: left;">
<p>Правило сортировки. Необходимо использовать названия из системной таблицы Jatoba (колонка collname в таблице</p>
<p>pg_collation).</p>
</td>
</tr>
<tr>
<td>
<p>dblink</p>
</td>
<td></td>
<td style="text-align: center;">
<p>Oracle database link (ссылка на базу данных).</p>
</td>
</tr>
<tr>
<td>
<p>readonly</p>
</td>
<td>
<p>false</p>
</td>
<td>
<p>Параметр readonly, использующийся для всех таблиц схемы. Подробнее о параметре в</p>
<p>таблице <a href="#_bookmark205">Таблица 5.3</a>.</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 30%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>max_long</p>
</td>
<td>
<p>32767</p>
</td>
<td>
<p>Параметр max_long, использующийся для</p>
<p>всех таблиц схемы. Подробнее о параметре в таблице <a href="#_bookmark205">Таблица 5.3</a>.</p>
</td>
</tr>
<tr>
<td>
<p>sample_percent</p>
</td>
<td>
<p>100</p>
</td>
<td>
<p>Параметр sample_percent, использующийся</p>
<p>для всех таблиц схемы. Подробнее о параметре в таблице <a href="#_bookmark205">Таблица 5.3</a>.</p>
</td>
</tr>
<tr>
<td>
<p>prefetch</p>
</td>
<td>
<p>50</p>
</td>
<td>
<p>Параметр prefetch, использующийся для всех таблиц схемы. Подробнее о параметре в</p>
<p>таблице <a href="#_bookmark205">Таблица 5.3</a>.</p>
</td>
</tr>
<tr>
<td>
<p>lob_prefetch</p>
</td>
<td>
<p>1048576</p>
</td>
<td>
<p>Параметр lob_prefetch, использующийся для</p>
<p>всех таблиц схемы. Подробнее о параметре в таблице <a href="#_bookmark205">Таблица 5.3</a>.</p>
</td>
</tr>
<tr>
<td>
<p>nchar</p>
</td>
<td></td>
<td>
<p>Параметр nchar, использующийся для всех</p>
<p>таблиц схемы. Подробнее о параметре в таблице <a href="#_bookmark203">Таблица 5.1</a>.</p>
</td>
</tr>
<tr>
<td>
<p>set_timezone</p>
</td>
<td></td>
<td>
<p>Параметр set_timezone, использующийся для всех таблиц схемы. Подробнее о параметре в</p>
<p>таблице <a href="#_bookmark203">Таблица 5.1</a>.</p>
</td>
</tr>
</tbody>
</table>

## УДАЛЕНИЕ КОМПОНЕНТОВ

### Удаление компонентов при отсутствии зависимых от него объектов

Удаление компонентов осуществляется средствами пакетного менеджера ОС. При этом нужно использовать команду удаления, соответствующую пакетному менеджеру: remove, purge, erase и т.п.

Для удаления компонента «orafce» потребуется авторизоваться в СУБД и выполнить команду:


```sql
DROP EXTENSION orafce;
```


В ОС GNU/Linux требуется выйти из psql и удалить пакет расширения, выполнив команду:

```

apt-get remove jatoba4-orafce
```


Для удаления компонента «pg_variables» потребуется авторизоваться в СУБД и выполнить команду:


```sql
DROP EXTENSION pg_variables;
```


В ОС GNU/Linux требуется выйти из psql и удалить пакет расширения, выполнив команду:


```
apt-get remove jatoba4-pg-variables
```


Для удаления компонента «oracle_fdw» потребуется авторизоваться в СУБД и выполнить команду:


```sql
DROP EXTENSION oracle_fdw;
```


В ОС GNU/Linux требуется выйти из psql и удалить пакет расширения, выполнив команду:


```
apt-get remove jatoba4-oracle-fdw
```


### Удаление компонента при наличии зависимых от него объектов

Для удаления компонента вместе со всеми зависимыми от него объектами потребуется авторизоваться в СУБД и выполнить команду:

```sql
# DROP EXTENSION orafce cascade;
# DROP EXTENSION pg_variables cascade; \# DROP EXTENSION oracle_fdw cascade;
```

## ПРИЛОЖЕНИЕ 1

**Пример установки СУБД «Jatoba» из локального репозитория для ОС Ubuntu с компонентами обеспечения работы с СУБД Oracle**

Установка СУБД «Jatoba» из локального репозитория для ОС Ubuntu проводится в следующем порядке:

1)  В терминале войти в режим суперпользователя, выполнив команду:


```
sudo su
```


2)  Если команды sudo не существует – установить:


```
su -l
apt-get install sudo -y
```


3)  Выполнить обновление системы:
4)  
```
sudo apt update && sudo apt upgrade –y
sudo apt -s dist-upgrade
sudo apt dist-upgrade
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image153.png)

Рисунок П1.1 – Обновление системы

4)  Создать папку localrepo в корневом каталоге:


```
mkdir /localrepo
```


5)  В созданную папку скопировать:

    - каталог \<pool\>;

    - каталог \<dist\>;

    - файл \<DEB-GPG-KEY-Jatoba\>

![](@site/docs/assets/images/com18.3.1/oracle/media/image154.png)

Рисунок П1.2 – Структура каталога «localrepo»

6)  Установить открытый ключ репозитория:

```
apt-key add /localrepo/DEB-GPG-KEY-Jatoba
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image155.png)



Рисунок П1.3 – Установка открытого ключа репозитория

7)  Добавить описание локального репозитория в систему:


```
nano /etc/apt/sources.list.d/jatoba-4.list
```


8)  Добавить в файл следующее содержимое и сохранить:

![](@site/docs/assets/images/com18.3.1/oracle/media/image156.png)


```
deb file:///localrepo stable non-free
```


Рисунок П1.4 – Содержание файла «jatoba-4.list»

```
apt-get update
```

9)  Проиндексировать обновленное состояние репозитория:



![](@site/docs/assets/images/com18.3.1/oracle/media/image157.png)

Рисунок П1.5 – Индексация репозитория

10) Установить основные пакеты СУБД «Jatoba»

```
apt-get install jatoba4-client jatoba4-contrib jatoba4-libs jatoba4-server
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image158.png)



Рисунок П1.6 – Установка основных пакетов

11) Скачать внешний пакет для поддержки работы компонента oracle-fdw Пакет oracle-instantclient11.2-basic-11.2.0.4.0-1.x86_64 – Oracle® Instant Client версии 11.2 требуется для работы пакета jatoba4-oracle-fdw. Скачать его возможно по адресу: [<u>https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html</u>](https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html)

Рисунок П1.7 – Страница загрузки пакета 

Скопировать пакет в директорию Download и перейти в нее.

12) Установить утилиту преобразования пакетных форматов Alien

```
sudo apt-get install alien
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image160.png)



Рисунок П1.8 – Установка утилиты Alien

13) Установить пакет операционной системы libaio1


```
sudo apt-get install libaio1
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image161.png)

Рисунок П1.9 – Установка пакета операционной системы libaio1

14) Установить пакет клиентских библиотек СУБД Oracle oracle-instantclient11.2-basic-11.2.0.4.0-1.x86_64.rpm

```
sudo alien -i oracle-instantclient11.2-basic-11.2.0.4.0-1.x86_64.rpm
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image162.png)



Рисунок П1.10 – Установка пакет клиентских библиотек СУБД Oracle

15) Выполнить конфигурирование установленной библиотеки

```
sudo sh -c "echo /usr/lib/oracle/11.2/client64/lib > \\
/etc/ld.so.conf.d/oracle-instantclient.conf" 
sudo ldconfig
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image163.png)



Рисунок П1.11 – Конфигурирование пакета

16) Установить компонент Oracle_FDW
17) 
```
apt-get install jatoba4-oracle-fdw
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image164.png)

Рисунок П1.12 – Установка СУБД с компонентом Oracle_FDW

17) Установить компонент OraFCE


```
apt-get install jatoba4-orafce
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image165.png)

Рисунок П1.13 – Установка СУБД с компонентом OraFCE

18) Установить компонент pg_Variables

```
apt-get install jatoba4-pg-variables
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image166.png)



Рисунок П1.14 – Установка СУБД с компонентом pg_Variables

19) Убедиться в отсутствии ошибок зависимостей:


```
for f in $(LANG=C find /usr/jatoba-4 -type f -exec file {} \; | grep "ELF 64-bit LSB" | awk 'BEGIN {FS=":"} { print $1}' | sort); do echo $f; ldd $f | grep "not found"; done
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image167.png)

Рисунок П1.15 – Проверка ошибок зависимостей

20) Перейти в директорию исполняемых файлов СУБД:

```
cd /usr/jatoba-4/bin
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image168.png)



Рисунок П1.16 – Переход в каталог

21) Инициализировать каталог данных СУБД при помощи команды:

```
./jatoba-setup initdb jatoba-4
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image169.png)



Рисунок П1.17 – Инициализация СУБД

22) Добавить сервис в список автозапуска:

```
systemctl enable jatoba-4
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image170.png)



Рисунок П1.18 – Добавление сервиса jatoba-4 а автозагрузку ОС

23) Запустить службу:

```
systemctl start jatoba-4
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image171.png)



Рисунок П1.19 – Запуск службы jatoba-4

24) Проверить статус службы:

```
systemctl status jatoba-4
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image172.png)



Рисунок П1.20 – Проверка статуса службы jatoba-4

25) Установить пароль для пользователя СУБД postgres: Необходимо выйти из сессии root:


```
su – postgres
```


и зайти в СУБД:


```
psql
```


![](@site/docs/assets/images/com18.3.1/oracle/media/image173.png)

Рисунок П1.21 – Вход в СУБД Выполнить SQL-команду установки пароля:

```
\password
```

![](@site/docs/assets/images/com18.3.1/oracle/media/image174.png)



Рисунок П1.22 – Установка пароля для пользователя СУБД postgres

На этом этапе установка СУБД с компонентами обеспечения работы с СУБД Oracle и СУБД закончена.

## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ
| Сокращение | Расшифровка                      |
|------------|----------------------------------|
| SQL        | Structured Query Language        |
| БД         | База данных                      |
| ОС         | Операционная система             |
| СУБД       | Система управления базами данных |
