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
<p><strong>Руководство по настройке. Часть 19.<br />
Формирование HTTP/HTTPS запросов из СУБД</strong></p>
<p><strong>Компонент «pgSQL-HTTP»</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-19</strong></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">Листов 34</td>
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

В документе приведены сведения, необходимые для установки и эксплуатации компонента «Формирование HTTP/HTTPS запросов из СУБД "pgSQL-HTTP" (далее по тексту – «компонент»).

Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:</p>
<ul>
<li></li>
<li></li>
</ul>
<p>ОС Windows – «C:\Program Files\GIS\Jatoba\6\bin»;ОС Linux – «/usr/jatoba-6/bin».Для СУБД «Jatoba» версии ядра 4 используется версия компонента — 1.5.0</p>
<p>Для СУБД «Jatoba» версии ядра 5/6 используется версия компонента — 1.6.0</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image2.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image1.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонента [4](#назначение-компонента)](#назначение-компонента)

[1.1. Условия применения [4](#условия-применения)](#условия-применения)

[2. Установка [5](#установка)](#установка)

[2.1. Установка компонента ОС GNU/Linux [5](#установка-компонента-ос-gnulinux)](#установка-компонента-ос-gnulinux)

[2.2. Установка расширения компонента [6](#установка-расширения-компонента)](#установка-расширения-компонента)

[3. Функциональные возможности [8](#функциональные-возможности)](#функциональные-возможности)

[3.1. Функция «http_header» [8](#функция-http_header)](#функция-http_header)

[3.2. Функция «http» [9](#функция-http)](#функция-http)

[3.3. Функция «http_get» [10](#функция-http_get)](#функция-http_get)

[3.3.1. IP-адрес веб-ресурса [11](#ip-адрес-веб-ресурса)](#ip-адрес-веб-ресурса)

[3.3.2. Тип контента [12](#тип-контента)](#тип-контента)

[3.3.3. Формат изображений [12](#формат-изображений)](#формат-изображений)

[3.3.4. HTTP заголовок в табличном формате [14](#http-заголовок-в-табличном-формате)](#http-заголовок-в-табличном-формате)

[3.4. Функция «http_post» [15](#функция-http_post)](#функция-http_post)

[3.5. Функция «http_put» [17](#функция-http_put)](#функция-http_put)

[3.6. Функция «http_patch» [18](#функция-http_patch)](#функция-http_patch)

[3.7. Функция «http_delete» [19](#функция-http_delete)](#функция-http_delete)

[3.8. Функция «http_head» [20](#функция-http_head)](#функция-http_head)

[3.9. Функция «curlopt» [21](#функция-curlopt)](#функция-curlopt)

[3.9.1. Функция «http_set_curlopt» [22](#функция-http_set_curlopt)](#функция-http_set_curlopt)

[3.9.2. Функция «http_reset_curlopt» [23](#функция-http_reset_curlopt)](#функция-http_reset_curlopt)

[3.9.3. Функция «http_list_curlopt» [23](#функция-http_list_curlopt)](#функция-http_list_curlopt)

[3.10. Функция «urlencode» [24](#функция-urlencode)](#функция-urlencode)

[3.10.1. Кодирование строки [24](#кодирование-строки)](#кодирование-строки)

[3.10.2. Кодирование ассоциативного массива JSON [25](#кодирование-ассоциативного-массива-json)](#кодирование-ассоциативного-массива-json)

[4. Удаление компонента [26](#удаление-компонента)](#удаление-компонента)

[4.1. Удаление компонента при отсутствии зависимых от него объектов [26](#удаление-компонента-при-отсутствии-зависимых-от-него-объектов)](#удаление-компонента-при-отсутствии-зависимых-от-него-объектов)

[4.2. Удаление компонента при наличии зависимых от него объектов [26](#удаление-компонента-при-наличии-зависимых-от-него-объектов)](#удаление-компонента-при-наличии-зависимых-от-него-объектов)

[4.3. Удаление пакета [26](#удаление-пакета)](#удаление-пакета)

[Приложение 1 [27](#_Toc215497184)](#_Toc215497184)

[Перечень сокращений [33](#_Toc215497185)](#_Toc215497185)

# Назначение компонента

Компонент "pgSQL-HTTP" предназначен для выполнения запросов по протоколам HTTP и HTTPS с веб-ресурсов.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image2.png" style="width:0.25139in;height:0.25139in" /> | Компонент "pgSQL-HTTP" не реализует функции безопасности СУБД согласно нормативной документации ФСТЭК России |
|----|----|

## Условия применения

Компонент "pgSQL-HTTP" может использоваться совместно с СУБД «Jatoba» версий 4.x и выше под управлением ОС GNU/Linux и ОС Windows.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>В текущей реализации компонента не поддерживается управление через компонент пользовательского веб-интерфейса для администраторов<br />
«Jatoba data safe».</p>
<p>Ограничений по совместимости с другими компонентами нет.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# Установка

Компонент функционирует под управлением ОС семействаWindows и под GNU Linux. Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе.

## Установка компонента ОС GNU/Linux

Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо доустановить.

Установку компонента возможно провести двумя способами:

1)  
2)  

установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- 

> для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:apt-get install jatoba4-pgsql-http

- 

> для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:yum install jatoba4-pgsql-http

Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- 

> ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:apt-get install jatoba4-pgsql-http

Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba3-pgsql-http и т.п.

Пример установки пакетов СУБД с компонентом JCS приведен в приложении Приложение 1 настоящего документа.

Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Установка расширения компонента

Предварительной настройки конфигурационного файла postgresql.conf не требуется.

Расширение устанавливается на при помощи SQL-команды (рисунок Рисунок 2.1).

> CREATE EXTENSION http;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image3.png" style="width:7.0859in;height:1.97761in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 21-34-05.png" />

Рисунок . – Команда установки расширения

В результате выполнения SQL-команды будет создано расширение (EXTENSION) «http».

Убедиться в установке расширения возможно при помощи SQL-команды:

> \dx

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image4.png" style="width:7.0859in;height:2.6791in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 21-35-43.png" />

Рисунок . – Список установленных расширений

# Функциональные возможности

## Функция «http_header»

Функция «http_header» используется для составления заголовка запроса.

Функция используется с синтаксисом SQL-запросов:

> http_header(field VARCHAR, value VARCHAR)

Применяется с параметрами, приведенными в таблице Таблица 3.1.

Таблица . – Параметры функции «http_header»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Тип данных</strong></th>
<th style="text-align: center;"><strong>Обозначение</strong></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;"><blockquote>
<p>http_header(field VARCHAR, value VARCHAR)</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td>#1 field</td>
<td>varchar</td>
<td>Имя поля заголовка</td>
</tr>
<tr>
<td>#2 value</td>
<td>varchar</td>
<td>Значение поля заголовка</td>
</tr>
</tbody>
</table>

**Пример**

> select http_header('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9');

В представленном примере функция составляет заголовок для авторизации с использованием имени поля «Authorization» и значением поля (рисунок Рисунок 3.1)

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image5.png" style="width:7.0859in;height:1.97015in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 21-37-13.png" />

Рисунок . – SQL-запрос http_header

## Функция «http»

Функция «http» используется для создания и выполнения http запроса.

Функция используется с синтаксисом SQL-запросов:

> http(request http_request)

**Пример**

> SELECT content::json-\>'headers'-\>\>'Authorization'
>
> FROM http((
>
> 'GET',
>
> 'http://httpbin.org/headers',
>
> ARRAY\[http_header('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9')\],
>
> NULL,
>
> NULL
>
> )::http_request);

В представленном запросе отсылается запрос на авторизацию пользователя на указанном веб-ресурсе и разбирается ответ в формате JSON.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image6.png" style="width:7.0859in;height:3.19403in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 21-38-16.png" />

Рисунок . – SQL-запрос http

## Функция «http_get»

Функция «http_get» используется для получения информации о веб-ресурсе.

Функция используется с синтаксисом SQL-запросов:

> http_get(uri VARCHAR)
>
> http_get(uri VARCHAR, data JSONB)

Функция позволяет получать данные:

- 
- 
- 
- 

IP-адрес веб-ресурса (п. 3.3.1);Тип контента (п. 3.3.2);Формат изображений (п. 3.3.3);HTTP заголовок в табличном формате (п. 3.3.4).Применяется с параметрами, приведенными в таблице Таблица 3.2.

Таблица . – Параметры функции «http_get»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th><strong>Параметр</strong></th>
<th><strong>Тип данных</strong></th>
<th><strong>Обозначение</strong></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;"><blockquote>
<p>http_get(uri VARCHAR)</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td>#1</td>
<td>varchar</td>
<td>Адрес веб-ресурса</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><blockquote>
<p>http_get(uri VARCHAR, data JSONB)</p>
</blockquote></td>
</tr>
<tr>
<td>#1</td>
<td>varchar</td>
<td>Адрес веб-ресурса</td>
</tr>
<tr>
<td>#2</td>
<td>JSONB</td>
<td>Аргумент данных</td>
</tr>
</tbody>
</table>

**Пример**

В качестве ярлыка для отправки данных в запрос GET передан аргумент данных JSONB.

> SELECT status, content::json-\>'args' AS args
>
> FROM http_get('http://httpbin.org/get',
>
> jsonb_build_object('myvar','myval','foo','bar'));

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image7.png" style="width:7.0859in;height:2.64925in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 21-39-19.png" />

Рисунок . – SQL-запрос GET c передачей аргумента данных JSONB

### IP-адрес веб-ресурса

Функция «http_get» может использоваться для определения IP-адреса веб-ресурса c применением аргумента – «IP».

> http_get(uri VARCHAR/ip)

**Пример**

Для выяснения IP-адреса ресурса «http://httpbin.org» формируется следующая SQL-команда:

> SELECT content
>
> FROM http_get('http://httpbin.org/ip');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image8.png" style="width:7.0859in;height:2.49254in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 21-40-11.png" />

Рисунок . – Пример запроса IP-адреса

### Тип контента

Функция «http_get» может использоваться для определения типа контента веб-ресурса. В этом случае составляется SQL-запрос:

> SELECT status, content_type
>
> FROM http_get('http://httpbin.org/');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image9.png" style="width:7.0859in;height:1.95522in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 21-41-24.png" />

Рисунок . – Вывод типа контента веб-ресурса

В результате будет выведена информация о типе текста и кодировке.

### Формат изображений

Функция «http_get» может применяться для получения данных об изображениях на веб-ресурсе. И используется синтаксис SQL-команд:

> http_get(uri VARCHAR/image/\[type\])

функция использует операторы:

- 

/imageЗапрос возвращает данные о полях заголовков HTTP

> http_get(uri VARCHAR/image)

- 

/image/jpegЗапрос возвращает данные о изображениях в формате JPEG

> http_get(uri VARCHAR/image/jpeg)

- 

/image/pngЗапрос возвращает данные о изображениях в формате PNG

> http_get(uri VARCHAR/image/png)

- 

/image/svgЗапрос возвращает данные о изображениях в формате SVG

> http_get(uri VARCHAR/image/svg)

- 

/image/webpЗапрос возвращает данные об изображениях, сжатых в формате WEBP

> http_get(uri VARCHAR/image/webp)

**Пример**

Ниже рассмотрен запрос сведений об изображениях в формате «SVG».

SQL-запрос будет следующим:

> WITH
>
> http AS (
>
> SELECT \* FROM http_get('http://httpbin.org/image/svg')
>
> ),
>
> headers AS (
>
> SELECT (unnest(headers)).\* FROM http
>
> )
>
> SELECT
>
> http.content_type,
>
> length(textsend(http.content)) AS length_binary,
>
> headers.value AS length_headers
>
> FROM http, headers
>
> WHERE field = 'Content-Length';

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image10.png" style="width:7.0859in;height:3.85821in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 21-42-23.png" />

Рисунок . – Пример SQL-запроса «http_get» с аргументом «svg»

### HTTP заголовок в табличном формате

Показывает все заголовки HTTP (http_header) в ответе (http_response), используя табличный формат.

**Пример**

> SELECT (unnest(headers)).\*
>
> FROM http_get('http://httpbin.org/');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image11.png" style="width:7.04406in;height:2.96023in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 21-43-27.png" />

Рисунок . – SQL-запрос получения заголовка в табличном формате

## Функция «http_post»

Функция «http_post» используется для отправки на веб-ресурс данных.

Функция используется с синтаксисом SQL-запросов:

> http_post(uri VARCHAR, content VARCHAR, content_type VARCHAR)
>
> http_post(uri VARCHAR, data JSONB)

Применяется с параметрами, приведенными в таблице Таблица 3.3.

Таблица . – Параметры функции «http_post»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Тип данных</strong></th>
<th style="text-align: center;"><strong>Обозначение</strong></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;"><blockquote>
<p>http_post(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td>#1 uri</td>
<td>varchar</td>
<td>Адрес веб-ресурса</td>
</tr>
<tr>
<td>#2 content</td>
<td>varchar</td>
<td>Отправляемый контент</td>
</tr>
<tr>
<td>#3 content_type</td>
<td>varchar</td>
<td>Аргумент данных</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><blockquote>
<p>http_ post(uri VARCHAR, data JSONB)</p>
</blockquote></td>
</tr>
<tr>
<td>#1 uri</td>
<td>varchar</td>
<td>Адрес веб-ресурса</td>
</tr>
<tr>
<td>#2 data</td>
<td>JSONB</td>
<td>Аргумент данных</td>
</tr>
</tbody>
</table>

**Пример**

Позволяет выполнить стандартный запрос «post» стандарта HTTP, используя синтаксис SQL:

> http_post(uri VARCHAR, content VARCHAR, content_type VARCHAR)

SQL-запрос может быть следующим:

> select \* from http_post('https://httpbin.org/post', 'param1=value1&param2=value2', 'application/json');

В представленном примере отправлен запрос с функцией «http_post»:

- 
- 
- 

на адрес (url) 'https://httpbin.org/post';контент в виде строки, которая может быть любой;получили ответ формате JSON.<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image12.png" style="width:7.08681in;height:2.91045in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 22-36-43.png" />

Рисунок . – SQL-запрос http_post

**Пример**

Чтобы выполнить POST для URL-адреса с использованием полезных данных вместо параметров, встроенных в URL-адрес, закодируйте данные в JSONB как полезные данные.

> http_post(uri VARCHAR, data JSONB)

SQL-запрос может быть следующим:

> SELECT status, content::json-\>'form' AS form
>
> FROM http_post('http://httpbin.org/post', jsonb_build_object('myvar','myval','foo','bar'));

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image13.png" style="width:7.04451in;height:2.67087in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 22-12-20.png" />

Рисунок . – SQL-запрос http_post с кодировкой данных в формате JSONB

## Функция «http_put»

Функция «http_put» используется для отправки простого документа на веб-сервер.

Функция используется с синтаксисом SQL-запросов:

> http_put(uri VARCHAR, content VARCHAR, content_type VARCHAR)

И применяется с параметрами, приведенными в таблице Таблица 3.4.

Таблица . – Параметры функции «http_put»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Тип данных</strong></th>
<th style="text-align: center;"><strong>Обозначение</strong></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;"><blockquote>
<p>http_put(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td>#1 uri</td>
<td>varchar</td>
<td>Адрес веб-ресурса</td>
</tr>
<tr>
<td>#2 content</td>
<td>varchar</td>
<td>Отправляемый контент</td>
</tr>
<tr>
<td>#3 content_type</td>
<td>varchar</td>
<td>Аргумент данных</td>
</tr>
</tbody>
</table>

**Пример**

Для отправки простого документа на веб-сервер формируется SQL-команда:

> SELECT status, content_type, content::json-\>\>'data' AS data
>
> FROM http_put('http://httpbin.org/put', 'some text', 'text/plain');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image14.png" style="width:7.08451in;height:2.43284in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 21-59-48.png" />

Рисунок . – Отправка простого документа

## Функция «http_patch»

Функция «http_patch» используется для отправки простого документа JSON на веб-сервер.

Функция используется с синтаксисом SQL-запросов:

> http_patch(uri VARCHAR, content VARCHAR, content_type VARCHAR)

И применяется с параметрами, приведенными в таблице Таблица 3.5.

Таблица . – Параметры функции «http_patch»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Тип данных</strong></th>
<th style="text-align: center;"><strong>Обозначение</strong></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;"><blockquote>
<p>http_patch(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td>#1 uri</td>
<td>varchar</td>
<td>Адрес веб-ресурса</td>
</tr>
<tr>
<td>#2 content</td>
<td>varchar</td>
<td>Отправляемый контент</td>
</tr>
<tr>
<td>#3 content_type</td>
<td>varchar</td>
<td>Аргумент данных</td>
</tr>
</tbody>
</table>

**Пример**

Для отправки простого документа JSON на веб-сервер формируется SQL-команда:

> SELECT status, content_type, content::json-\>\>'data' AS data
>
> FROM http_patch('http://httpbin.org/patch', '{"this":"that"}', 'application/json');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image15.png" style="width:7.0859in;height:2.13433in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 22-00-42.png" />

Рисунок . – Отправка простого документа JSON

## Функция «http_delete»

Функция «http_delete» используется для запроса удаления ресурса на HTTP-сервере.

Функция используется с синтаксисом SQL-запросов:

> http_delete(uri VARCHAR, content VARCHAR, content_type VARCHAR)

Применяется с параметрами, приведенными в таблице Таблица 3.6.

Таблица . – Параметры функции «http_delete»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Тип данных</strong></th>
<th style="text-align: center;"><strong>Обозначение</strong></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;"><blockquote>
<p>http_delete(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td>#1 uri</td>
<td>varchar</td>
<td>Адрес веб-ресурса</td>
</tr>
<tr>
<td>#2 content</td>
<td>varchar</td>
<td>Отправляемый контент</td>
</tr>
<tr>
<td>#3 content_type</td>
<td>varchar</td>
<td>Аргумент данных</td>
</tr>
</tbody>
</table>

**Пример**

> SELECT status, content_type, content::json-\>\>'url' AS url
>
> FROM http_delete('http://httpbin.org/delete');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image16.png" style="width:7.0859in;height:2.27612in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 22-02-15.png" />

Рисунок . – Запрос удаления ресурса

## Функция «http_head»

Функция «http_head» используется для получения заголовка запроса и принятия решения о дальнейших действиях.

Аналогично «http_get» функция «http_head» возвращает заголовок:

> http_head(uri VARCHAR)

**Пример**

> SELECT
>
> http.status,
>
> headers.value AS location
>
> FROM
>
> http_head('http://google.com') AS http
>
> LEFT OUTER JOIN LATERAL (SELECT value
>
> FROM unnest(http.headers)
>
> WHERE field = 'Location') AS headers
>
> ON true;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image17.png" style="width:7.0859in;height:3.17164in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 22-03-05.png" />

Рисунок . – SQL-запрос с функцией «http_head»

## Функция «curlopt»

Функция «curlopt» использует SQL-синтаксис:

> http_set_curlopt(curlopt VARCHAR, value varchar)

и может использоваться с параметрами:

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

[CURLOPT_DNS_SERVERS](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SERVERS.html);[CURLOPT_PROXY](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html);[CURLOPT_PRE_PROXY](https://curl.haxx.se/libcurl/c/CURLOPT_PRE_PROXY.html);[CURLOPT_PROXYPORT](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPORT.html);[CURLOPT_PROXYUSERPWD](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERPWD.html);[CURLOPT_PROXYUSERNAME](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERNAME.html);[CURLOPT_PROXYPASSWORD](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPASSWORD.html);[CURLOPT_PROXY_TLSAUTH_USERNAME](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_USERNAME.html);[CURLOPT_PROXY_TLSAUTH_PASSWORD](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_PASSWORD.html);[CURLOPT_PROXY_TLSAUTH_TYPE](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_TYPE.html);[CURLOPT_TLSAUTH_USERNAME](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_USERNAME.html);[CURLOPT_TLSAUTH_PASSWORD](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_PASSWORD.html);[CURLOPT_TLSAUTH_TYPE](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_TYPE.html);[CURLOPT_SSL_VERIFYHOST](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html);[CURLOPT_SSL_VERIFYPEER](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html);[CURLOPT_SSLCERT](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT.html);[CURLOPT_SSLKEY](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY.html);[CURLOPT_SSLCERTTYPE](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERTTYPE.html);[CURLOPT_CAINFO](https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO.html);[CURLOPT_TIMEOUT](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT.html);[CURLOPT_TIMEOUT_MS](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT_MS.html);[CURLOPT_TCP_KEEPALIVE](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPALIVE.html);[CURLOPT_TCP_KEEPIDLE](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPIDLE.html);[CURLOPT_CONNECTTIMEOUT](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT.html);[CURLOPT_USERAGENT](https://curl.haxx.se/libcurl/c/CURLOPT_USERAGENT.html).

### Функция «http_set_curlopt»

Функция «http_set_curlopt» может использоваться для установки параметров прокси-порта на время существования соединения с базой данных.

> http_set_curlopt(curlopt VARCHAR, value varchar)

**Пример**

> SELECT http_set_curlopt('CURLOPT_PROXYPORT', '12345');

Политики API могут требовать предоставления определенной контактной информации при каждом запросе. Другие могут запретить определенных агентов, которых они не распознают.

Для таких случаев можно установить CURLOPT_USERAGENT опцию.

**Пример**

> SELECT http_set_curlopt('CURLOPT_USERAGENT', 'Examplebot/2.1 (+http://www.example.com/bot.html) Contact abuse@example.com');
>
> SELECT status, content::json -\>\> 'user-agent' FROM http_get('http://httpbin.org/user-agent');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image18.png" style="width:6.89679in;height:3.77703in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 22-05-40.png" />

Рисунок . – Установка CURLOPT_USERAGENT

### Функция «http_reset_curlopt»

Функция «http_reset_curlopt» может использоваться для сброса всех параметров CURL до значений по умолчанию.

SQL-запрос будет следующим:

> SELECT \* FROM http_reset_curlopt();

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image19.png" style="width:7.0859in;height:1.79104in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 22-07-44.png" />

Рисунок . – SQL-запрос для сбора параметров прокси

### Функция «http_list_curlopt»

Функция «http_list_curlopt» может использоваться для получения всех установленных параметров.

> SELECT \* FROM http_list_curlopt();

**Пример**

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image20.png" style="width:7.08466in;height:1.94776in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 22-08-21.png" />

Рисунок . – Вывод установленных параметров

## Функция «urlencode»

Функция «urlencode» используется, для:

- 
- 

кодирования строки (п. 3.10.1);кодирования ассоциативного массива JSON (п. 3.10.2).Используется SQL-синтаксис:

> urlencode(string VARCHAR)
>
> urlencode(data JSONB)

### Кодирование строки

Эта функция удобна, когда закодированная строка будет использоваться в запросе, как часть URL, также это удобный способ для передачи переменных другим страницам.

Возвращает строку, в которой все не цифробуквенные символы, кроме (– \_.) должны быть заменены знаком процента (%), за которым следует два шестнадцатеричных числа, а пробелы кодируются как знак сложения (+). Строка кодируется тем же способом, что и POST данные WWW-формы, то есть по типу контента application/x-www-form-urlencoded. Это отличается от RFC 3986 кодирования тем, что по историческим соображениям, пробелы кодируются как знак "плюс" (+).

> SELECT urlencode('my special string''s & things?');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image21.png" style="width:7.08542in;height:2.08209in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 22-08-56.png" />

Рисунок . – SQL-запрос с кодированием строки

### Кодирование ассоциативного массива JSON

При использовании функции «urlencode» с использованием аргумента JSON

> urlencode(data JSONB)

URL кодирует ассоциативный массив JSON.

**Пример**

> SELECT urlencode(jsonb_build_object('name','Colin & James','rate','50%'));

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image22.png" style="width:7.0859in;height:1.99254in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 22-09-55.png" />

Рисунок . – SQL-запрос с кодированием массива JSON

# Удаление компонента

## Удаление компонента при отсутствии зависимых от него объектов

Для удаления компонента потребуется авторизоваться в СУБД и выполнить команду:

> DROP extension http;

## Удаление компонента при наличии зависимых от него объектов

Для удаления компонента вместе со всеми зависимыми от него объектами потребуется:

- 
- 

> авторизоваться в СУБД;выполнить команду:DROP extension http cascade;

## Удаление пакета

В ОС GNU/Linux выйти из psql и удалить пакет расширения, выполнив команду:

> apt-get remove jatoba4-pgsql-http;

# 

<span id="_Toc215497184" class="anchor"></span>Пример установки СУБД «Jatoba» из локального репозитория для ОС Ubuntu с компонентом "pgSQL-HTTP"

Установка СУБД «Jatoba» из локального репозитория для ОС Ubuntu проводится в следующем порядке:

1)  

> В терминале войти в режим суперпользователя, выполнив команду:sudo su

2)  

> Если команды sudo не существует – установить:su -l,
>
> apt-get install sudo -y

3)  

> Выполнить обновление системы:- sudo apt update && sudo apt upgrade –y
>
> \- sudo apt -s dist-upgrade
>
> \- sudo apt dist-upgrade

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image23.png" style="width:7.12409in;height:1.6047in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\pgSQL-HTTP\pic\Screenshot from 2022-09-02 12-32-42.png" />

Рисунок . – Обновление системы

4)  

Создать папку localrepo в корневом каталоге:mkdir /localrepo 

5)  

> В созданную папку скопировать:каталог \<pool\>
>
> каталог \<dist\>
>
> файл \<DEB-GPG-KEY-Jatoba\>

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image24.png" style="width:3.48056in;height:1.08423in" alt="C:\Users\kuznetsov-a\Desktop\Новая папка\123\Screenshot from 2022-08-05 01-48-04.png" />

Рисунок . – Структура каталога «localrepo»

6)  

Установить открытый ключ репозитория:apt-key add /localrepo/DEB-GPG-KEY-Jatoba

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image25.png" style="width:7.08597in;height:1.08333in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\pgSQL-HTTP\pic\Screenshot from 2022-09-02 12-41-02.png" />

Рисунок . – Установка открытого ключа репозитория

7)  

> Добавить описание локального репозитория в систему:nano /etc/apt/sources.list.d/jatoba-4.list

8)  

> Вставить в файл следующее содержимое и сохранить:deb file:///localrepo stable non-free

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image26.png" style="width:7.08597in;height:1.13194in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\pgSQL-HTTP\pic\Screenshot from 2022-09-02 12-43-40.png" />

Рисунок . – Содержание файла «jatoba-4.list»

9)  

> Проиндексировать обновленное состояние репозитория:apt-get update

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image27.png" style="width:7.08597in;height:2.125in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\pgSQL-HTTP\pic\Screenshot from 2022-09-02 12-46-29.png" />

Рисунок . – Индексация репозитория

10) 

Установить СУБД Jatoba при помощи команды:apt-get install jatoba4-client jatoba4-contrib jatoba4-libs jatoba4-server jatoba4-pgsql-http

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image28.png" style="width:7.08542in;height:3.71528in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\pgSQL-HTTP\pic\Screenshot from 2022-09-02 14-25-13.png" />

Рисунок . – Установка пакетов

11) 

Убедиться, что отсутствуют ошибки зависимостей:

> for f in \$(LANG=C find /usr/jatoba-\<версия\> -type f -exec file {} \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image29.png" style="width:7.08597in;height:3.20139in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\pgSQL-HTTP\pic\Screenshot from 2022-09-02 14-27-47.png" />

Рисунок . – Проверка ошибок зависимостей

12) 

> Перейти в директорию исполняемых файлов СУБД:cd /usr/jatoba-4/bin

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image30.png" style="width:7.08597in;height:0.90972in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\pgSQL-HTTP\pic\Screenshot from 2022-09-02 14-28-49.png" />

Рисунок . – Переход в каталог

13) 

> Инициализировать каталог данных СУБД при помощи команды:./jatoba-setup initdb jatoba-4

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image31.png" style="width:7.08597in;height:1.27778in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\pgSQL-HTTP\pic\Screenshot from 2022-09-02 14-29-49.png" />

Рисунок . – Инициализация СУБД

14) 

> Добавить сервис в список автозапуска:systemctl enable jatoba-4

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image32.png" style="width:7.08651in;height:1.23478in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\pgSQL-HTTP\pic\Screenshot from 2022-09-05 10-28-06.png" />

Рисунок . – Добавление сервиса jatoba-4 а автозагрузку ОС

15) 

> Запустить службу:systemctl start jatoba-\<версия\>

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image33.png" style="width:7.08651in;height:0.91304in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\pgSQL-HTTP\pic\Screenshot from 2022-09-05 10-26-29.png" />

Рисунок . – Запуск службы jatoba-4

16) 

> Проверить статус службы:systemctl status jatoba-\<версия\>

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgsql-http/media/image34.png" style="width:7.08681in;height:4.71617in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\pgSQL-HTTP\pic\Screenshot from 2022-09-05 10-28-20.png" />

Рисунок . – Проверка статуса службы jatoba-4

На этом этапе установка пакета http и СУБД закончена.

Далее надо выйти из сессии root:

> su – postgres

Выполнить вход в СУБД с помощью команды:

> psql

# 

| <span id="_Toc215497185" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language – язык структурированных запросов |
|:---|----|----|
| CLI | – | Command-line interface – интерфейс командной строки |
| БД | – | База данных |
| ОС | – | Операционная система |
| СУБД | – | Система управления базами данных |
| ФСТЭК России | – | Федеральная служба по техническому и экспортному контролю России |

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
