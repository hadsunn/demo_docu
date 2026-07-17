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
<p><strong>Руководство по настройке. Часть 19.</strong></p>
<p><strong>Формирование HTTP/HTTPS запросов из СУБД Компонент «pgSQL-HTTP»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-19</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 28</p>
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

> В документе приведены сведения, необходимые для установки и эксплуатации компонента «Формирование HTTP/HTTPS запросов из СУБД "pgSQL-HTTP" (далее по тексту – «компонент»).
>
> <img src="../docs/assets/images/com18.3.1/pgsql-http/media/image1.png" style="width:0.24722in;height:0.24635in" />Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра</p>
<p>4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-6/bin».</p>
<p>Для СУБД «Jatoba» версии ядра 4 используется версия компонента — 1.5.</p>
<p>Для СУБД «Jatoba» версии ядра 5/6/18 используется версия компонента — 1.6.</p>
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

> <img src="../docs/assets/images/com18.3.1/pgsql-http/media/image2.png" style="width:0.25293in;height:0.25208in" />Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/pgsql-http/media/image2.png" style="width:0.25139in;height:0.25139in" />**Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/pgsql-http/media/image1.png" style="width:0.25in;height:0.24932in" /> **Дополнительная информация** – указания, позволяющие упростить работу с изделием

# СОДЕРЖАНИЕ

1.  [Назначение компонента 4](#назначение-компонента)

    1.  [Условия применения 4](#условия-применения)

2.  [Установка 5](#установка)

    1.  [Установка компонента ОС GNU/Linux 5](#установка-компонента-ос-gnulinux)

    2.  [Установка расширения компонента 6](#установка-расширения-компонента)

3.  [Функциональные возможности 8](#функциональные-возможности)

    1.  [Функция «http_header» 8](#функция-http_header)

    2.  [Функция «http» 9](#функция-http)

    3.  [Функция «http_get» 10](#функция-http_get)

        1.  [IP-адрес веб-ресурса 11](#ip-адрес-веб-ресурса)

        2.  [Тип контента 12](#тип-контента)

        3.  [Формат изображений 12](#формат-изображений)

        4.  [HTTP заголовок в табличном формате 14](#http-заголовок-в-табличном-формате)

    4.  [Функция «http_post» 15](#функция-http_post)

    5.  [Функция «http_put» 17](#функция-http_put)

    6.  [Функция «http_patch» 18](#функция-http_patch)

    7.  [Функция «http_delete» 19](#функция-http_delete)

    8.  [Функция «http_head» 20](#функция-http_head)

    9.  [Функция «curlopt» 21](#функция-curlopt)

        1.  [Функция «http_set_curlopt» 22](#функция-http_set_curlopt)

        2.  [Функция «http_reset_curlopt» 23](#функция-http_reset_curlopt)

        3.  [Функция «http_list_curlopt» 23](#функция-http_list_curlopt)

    10. [Функция «urlencode» 24](#функция-urlencode)

        1.  [Кодирование строки 24](#кодирование-строки)

        2.  [Кодирование ассоциативного массива JSON 25](#кодирование-ассоциативного-массива-json)

4.  [Удаление компонента 26](#удаление-компонента)

    1.  [Удаление компонента при отсутствии зависимых от него объектов 26](#удаление-компонента-при-отсутствии-зависимых-от-него-объектов)

    2.  [Удаление компонента при наличии зависимых от него объектов 26](#удаление-компонента-при-наличии-зависимых-от-него-объектов)

    3.  [Удаление пакета 26](#удаление-пакета)

[Перечень сокращений 27](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент "pgSQL-HTTP" предназначен для выполнения запросов по протоколам HTTP и HTTPS с веб-ресурсов.
>
> <img src="../docs/assets/images/com18.3.1/pgsql-http/media/image2.png" style="width:0.25138in;height:0.25037in" />Компонент "pgSQL-HTTP" не реализует функции безопасности СУБД согласно нормативной документации ФСТЭК России

## Условия применения

> Компонент "pgSQL-HTTP" может использоваться совместно с СУБД «Jatoba» версий
>
> 4.x и выше под управлением ОС GNU/Linux.
>
> <img src="../docs/assets/images/com18.3.1/pgsql-http/media/image2.png" style="width:0.25138in;height:0.25076in" />В текущей реализации компонента не поддерживается управление через компонент пользовательского веб-интерфейса для администраторов
>
> «Jatoba data safe».
>
> Ограничений по совместимости с другими компонентами нет.

# УСТАНОВКА

> Компонент функционирует под управлением ОС семейства GNU Linux. Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе.

## Установка компонента ОС GNU/Linux

> Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо доустановить.
>
> Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

> Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

> apt-get install jatoba18-pgsql-http

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:

> yum install jatoba18-pgsql-http
>
> Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде

> rpm-пакетов и для нее команда установки выглядит аналогично Debian:
>
> apt-get install jatoba18-pgsql-http
>
> Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba18-pgsql-http и т.п.
>
> Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Установка расширения компонента

> Предварительной настройки конфигурационного файла postgresql.conf не требуется. Расширение устанавливается на при помощи SQL-команды (рисунок [2.1](#_bookmark5)).
>
> CREATE EXTENSION http;

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image3.png" style="width:7.11588in;height:1.98594in" />

> <span id="_bookmark5" class="anchor"></span>Рисунок 2.1 – Команда установки расширения
>
> В результате выполнения SQL-команды будет создано расширение (EXTENSION)
>
> «http».
>
> Убедиться в установке расширения возможно при помощи SQL-команды:
>
> \dx
>
> <img src="../docs/assets/images/com18.3.1/pgsql-http/media/image4.png" style="width:7.11584in;height:2.68344in" />
>
> Рисунок 2.2 – Список установленных расширений

# ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ

## Функция «http_header»

> Функция «http_header» используется для составления заголовка запроса. Функция используется с синтаксисом SQL-запросов:
>
> http_header(field VARCHAR, value VARCHAR)
>
> Применяется с параметрами, приведенными в таблице [3.1](#_bookmark8).
>
> <span id="_bookmark8" class="anchor"></span>Таблица 3.1 – Параметры функции «http_header»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Тип данных</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обозначение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3"><blockquote>
<p>http_header(field VARCHAR, value VARCHAR)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#1 field</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Имя поля заголовка</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#2 value</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Значение поля заголовка</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Пример

> select http_header('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9');
>
> В представленном примере функция составляет заголовок для авторизации с использованием имени поля «Authorization» и значением поля (рисунок [3.1](#_bookmark9))

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image5.png" style="width:7.11581in;height:1.97625in" />

> <span id="_bookmark9" class="anchor"></span>Рисунок 3.1 – SQL-запрос http_header

## Функция «http»

> Функция «http» используется для создания и выполнения http запроса. Функция используется с синтаксисом SQL-запросов:
>
> http(request http_request)

## Пример

> SELECT content::json-\>'headers'-\>\>'Authorization' FROM http((
>
> 'GET',
>
> '[http://httpbin.org/headers'](http://httpbin.org/headers%27),
>
> ARRAY\[http_header('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9')\],
>
> NULL, NULL
>
> )::http_request);
>
> В представленном запросе отсылается запрос на авторизацию пользователя на указанном веб-ресурсе и разбирается ответ в формате JSON.

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image6.png" style="width:7.11584in;height:3.20656in" />

> Рисунок 3.2 – SQL-запрос http

## Функция «http_get»

> Функция «http_get» используется для получения информации о веб-ресурсе. Функция используется с синтаксисом SQL-запросов:
>
> http_get(uri VARCHAR) http_get(uri VARCHAR, data JSONB)
>
> Функция позволяет получать данные:

- IP-адрес веб-ресурса (п. [3.3.1](#ip-адрес-веб-ресурса));

- Тип контента (п. [3.3.2](#тип-контента));

- Формат изображений (п. [3.3.3](#формат-изображений));

- HTTP заголовок в табличном формате (п. [3.3.4](#http-заголовок-в-табличном-формате)).

> Применяется с параметрами, приведенными в таблице [3.2](#_bookmark12).
>
> <span id="_bookmark12" class="anchor"></span>Таблица 3.2 – Параметры функции «http_get»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Тип данных</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Обозначение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3"><blockquote>
<p>http_get(uri VARCHAR)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#1</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Адрес веб-ресурса</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3"><blockquote>
<p>http_get(uri VARCHAR, data JSONB)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#1</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Адрес веб-ресурса</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#2</p>
</blockquote></td>
<td><blockquote>
<p>JSONB</p>
</blockquote></td>
<td><blockquote>
<p>Аргумент данных</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Пример

> В качестве ярлыка для отправки данных в запрос GET передан аргумент данных JSONB.
>
> SELECT status, content::json-\>'args' AS args FROM http_get('[http://httpbin.org/get'](http://httpbin.org/get%27),
>
> jsonb_build_object('myvar','myval','foo','bar'));
>
> <img src="../docs/assets/images/com18.3.1/pgsql-http/media/image7.png" style="width:7.11587in;height:2.65437in" />
>
> Рисунок 3.3 – SQL-запрос GET c передачей аргумента данных JSONB

## IP-адрес веб-ресурса

> Функция «http_get» может использоваться для определения IP-адреса веб-ресурса c применением аргумента – «IP».
>
> http_get(uri VARCHAR/ip)

## Пример

> Для выяснения IP-адреса ресурса «[http://httpbin.org](http://httpbin.org/)» формируется следующая SQL-команда:

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image8.png" style="width:7.11573in;height:2.49937in" />

> SELECT content
>
> FROM http_get('[http://httpbin.org/ip'](http://httpbin.org/ip%27));
>
> Рисунок 3.4 – Пример запроса IP-адреса

## Тип контента

> Функция «http_get» может использоваться для определения типа контента веб-ресурса. В этом случае составляется SQL-запрос:

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image9.png" style="width:7.11619in;height:1.95687in" />

> SELECT status, content_type
>
> FROM http_get('[http://httpbin.org/'](http://httpbin.org/%27));
>
> Рисунок 3.5 – Вывод типа контента веб-ресурса

В результате будет выведена информация о типе текста и кодировке.

## Формат изображений

> Функция «http_get» может применяться для получения данных об изображениях на веб-ресурсе. И используется синтаксис SQL-команд:
>
> http_get(uri VARCHAR/image/\[type\])
>
> функция использует операторы:

- /image

> Запрос возвращает данные о полях заголовков HTTP
>
> http_get(uri VARCHAR/image)

- /image/jpeg

> Запрос возвращает данные о изображениях в формате JPEG
>
> http_get(uri VARCHAR/image/jpeg)

- /image/png

> Запрос возвращает данные о изображениях в формате PNG
>
> http_get(uri VARCHAR/image/png)

- /image/svg

> Запрос возвращает данные о изображениях в формате SVG
>
> http_get(uri VARCHAR/image/svg)

- /image/webp

> Запрос возвращает данные об изображениях, сжатых в формате WEBP
>
> http_get(uri VARCHAR/image/webp)

## Пример

> Ниже рассмотрен запрос сведений об изображениях в формате «SVG». SQL-запрос будет следующим:
>
> WITH
>
> http AS (
>
> SELECT \* FROM http_get('[http://httpbin.org/image/svg'](http://httpbin.org/image/svg%27))
>
> ),
>
> headers AS (
>
> SELECT (unnest(headers)).\* FROM http
>
> ) SELECT
>
> http.content_type, length(textsend(http.content)) AS length_binary, headers.value AS length_headers
>
> FROM http, headers
>
> WHERE field = 'Content-Length';
>
> <img src="../docs/assets/images/com18.3.1/pgsql-http/media/image10.png" style="width:7.11577in;height:3.86531in" />
>
> Рисунок 3.6 – Пример SQL-запроса «http_get» с аргументом «svg»

## HTTP заголовок в табличном формате

> Показывает все заголовки HTTP (http_header) в ответе (http_response), используя табличный формат.

## Пример

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image11.png" style="width:7.0393in;height:2.95167in" />

> SELECT (unnest(headers)).\*
>
> FROM http_get('[http://httpbin.org/'](http://httpbin.org/%27));
>
> Рисунок 3.7 – SQL-запрос получения заголовка в табличном формате

## Функция «http_post»

> Функция «http_post» используется для отправки на веб-ресурс данных. Функция используется с синтаксисом SQL-запросов:
>
> http_post(uri VARCHAR, content VARCHAR, content_type VARCHAR) http_post(uri VARCHAR, data JSONB)
>
> Применяется с параметрами, приведенными в таблице [3.3](#_bookmark18).
>
> <span id="_bookmark18" class="anchor"></span>Таблица 3.3 – Параметры функции «http_post»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Тип данных</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обозначение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3"><blockquote>
<p>http_post(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#1 uri</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Адрес веб-ресурса</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#2 content</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Отправляемый контент</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#3 content_type</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Аргумент данных</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3"><blockquote>
<p>http_ post(uri VARCHAR, data JSONB)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#1 uri</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Адрес веб-ресурса</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#2 data</p>
</blockquote></td>
<td><blockquote>
<p>JSONB</p>
</blockquote></td>
<td><blockquote>
<p>Аргумент данных</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Пример

> Позволяет выполнить стандартный запрос «post» стандарта HTTP, используя синтаксис SQL:
>
> http_post(uri VARCHAR, content VARCHAR, content_type VARCHAR)
>
> SQL-запрос может быть следующим:
>
> select \* from http_post('[https://httpbin.org/post'](https://httpbin.org/post%27), 'param1=value1&param2=value2', 'application/json');
>
> В представленном примере отправлен запрос с функцией «http_post»:

- на адрес (url) '[https://httpbin.org/post'](https://httpbin.org/post%27);

- контент в виде строки, которая может быть любой;

- получили ответ формате JSON.

> <img src="../docs/assets/images/com18.3.1/pgsql-http/media/image12.png" style="width:7.07445in;height:2.90125in" />
>
> Рисунок 3.8 – SQL-запрос http_post

## Пример

> Чтобы выполнить POST для URL-адреса с использованием полезных данных вместо параметров, встроенных в URL-адрес, закодируйте данные в JSONB как полезные данные.
>
> http_post(uri VARCHAR, data JSONB)
>
> SQL-запрос может быть следующим:

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image13.png" style="width:7.03926in;height:2.66417in" />

> SELECT status, content::json-\>'form' AS form
>
> FROM http_post('[http://httpbin.org/post'](http://httpbin.org/post%27), jsonb_build_object('myvar','myval','foo','bar'));
>
> Рисунок 3.9 – SQL-запрос http_post с кодировкой данных в формате JSONB

## Функция «http_put»

> Функция «http_put» используется для отправки простого документа на веб-сервер. Функция используется с синтаксисом SQL-запросов:
>
> http_put(uri VARCHAR, content VARCHAR, content_type VARCHAR)
>
> И применяется с параметрами, приведенными в таблице [3.4](#_bookmark20).
>
> <span id="_bookmark20" class="anchor"></span>Таблица 3.4 – Параметры функции «http_put»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Тип данных</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обозначение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3"><blockquote>
<p>http_put(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#1 uri</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Адрес веб-ресурса</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#2 content</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Отправляемый контент</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#3 content_type</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Аргумент данных</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Пример

> Для отправки простого документа на веб-сервер формируется SQL-команда:

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image14.png" style="width:7.11571in;height:2.44125in" />

> SELECT status, content_type, content::json-\>\>'data' AS data
>
> FROM http_put('[http://httpbin.org/put'](http://httpbin.org/put%27), 'some text', 'text/plain');
>
> Рисунок 3.10 – Отправка простого документа

## Функция «http_patch»

> Функция «http_patch» используется для отправки простого документа JSON на веб-сервер.
>
> Функция используется с синтаксисом SQL-запросов:
>
> http_patch(uri VARCHAR, content VARCHAR, content_type VARCHAR)
>
> И применяется с параметрами, приведенными в таблице [3.5](#_bookmark22).
>
> <span id="_bookmark22" class="anchor"></span>Таблица 3.5 – Параметры функции «http_patch»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Тип данных</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обозначение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3"><blockquote>
<p>http_patch(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#1 uri</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Адрес веб-ресурса</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#2 content</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Отправляемый контент</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#3 content_type</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Аргумент данных</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Пример

> Для отправки простого документа JSON на веб-сервер формируется SQL-команда:

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image15.png" style="width:7.11572in;height:2.14094in" />

> SELECT status, content_type, content::json-\>\>'data' AS data
>
> FROM http_patch('[http://httpbin.org/patch'](http://httpbin.org/patch%27), '{"this":"that"}', 'application/json');
>
> Рисунок 3.11 – Отправка простого документа JSON

## Функция «http_delete»

> Функция «http_delete» используется для запроса удаления ресурса на HTTP-сервере. Функция используется с синтаксисом SQL-запросов:
>
> http_delete(uri VARCHAR, content VARCHAR, content_type VARCHAR)
>
> Применяется с параметрами, приведенными в таблице [3.6](#_bookmark24).
>
> <span id="_bookmark24" class="anchor"></span>Таблица 3.6 – Параметры функции «http_delete»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 17%" />
<col style="width: 55%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Тип данных</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обозначение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3"><blockquote>
<p>http_delete(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#1 uri</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Адрес веб-ресурса</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#2 content</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Отправляемый контент</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>#3 content_type</p>
</blockquote></td>
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>Аргумент данных</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Пример

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image16.png" style="width:7.11573in;height:2.27656in" />

> SELECT status, content_type, content::json-\>\>'url' AS url FROM http_delete('[http://httpbin.org/delete'](http://httpbin.org/delete%27));
>
> Рисунок 3.12 – Запрос удаления ресурса

## Функция «http_head»

> Функция «http_head» используется для получения заголовка запроса и принятия решения о дальнейших действиях.
>
> Аналогично «http_get» функция «http_head» возвращает заголовок:
>
> http_head(uri VARCHAR)

## Пример

> SELECT
>
> http.status, headers.value AS location
>
> FROM
>
> http_head('[http://google.com'](http://google.com/)) AS http LEFT OUTER JOIN LATERAL (SELECT value
>
> FROM unnest(http.headers)
>
> WHERE field = 'Location') AS headers ON true;

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image17.png" style="width:7.11848in;height:3.1775in" />

> Рисунок 3.13 – SQL-запрос с функцией «http_head»

## Функция «curlopt»

> Функция «curlopt» использует SQL-синтаксис:
>
> http_set_curlopt(curlopt VARCHAR, value varchar)
>
> и может использоваться с параметрами:

- [CURLOPT_DNS_SERVERS](https://curl.haxx.se/libcurl/c/CURLOPT_DNS_SERVERS.html);

- [CURLOPT_PROXY](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY.html);

- [CURLOPT_PRE_PROXY](https://curl.haxx.se/libcurl/c/CURLOPT_PRE_PROXY.html);

- [CURLOPT_PROXYPORT](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPORT.html);

- [CURLOPT_PROXYUSERPWD](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERPWD.html);

- [CURLOPT_PROXYUSERNAME](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYUSERNAME.html);

- [CURLOPT_PROXYPASSWORD](https://curl.haxx.se/libcurl/c/CURLOPT_PROXYPASSWORD.html);

- [CURLOPT_PROXY_TLSAUTH_USERNAME](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_USERNAME.html);

- [CURLOPT_PROXY_TLSAUTH_PASSWORD](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_PASSWORD.html);

- [CURLOPT_PROXY_TLSAUTH_TYPE](https://curl.haxx.se/libcurl/c/CURLOPT_PROXY_TLSAUTH_TYPE.html);

- [CURLOPT_TLSAUTH_USERNAME](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_USERNAME.html);

- [CURLOPT_TLSAUTH_PASSWORD](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_PASSWORD.html);

- [CURLOPT_TLSAUTH_TYPE](https://curl.haxx.se/libcurl/c/CURLOPT_TLSAUTH_TYPE.html);

- [CURLOPT_SSL_VERIFYHOST](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYHOST.html);

- [CURLOPT_SSL_VERIFYPEER](https://curl.haxx.se/libcurl/c/CURLOPT_SSL_VERIFYPEER.html);

- [CURLOPT_SSLCERT](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERT.html);

- [CURLOPT_SSLKEY](https://curl.haxx.se/libcurl/c/CURLOPT_SSLKEY.html);

- [CURLOPT_SSLCERTTYPE](https://curl.haxx.se/libcurl/c/CURLOPT_SSLCERTTYPE.html);

- [CURLOPT_CAINFO](https://curl.haxx.se/libcurl/c/CURLOPT_CAINFO.html);

- [CURLOPT_TIMEOUT](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT.html);

- [CURLOPT_TIMEOUT_MS](https://curl.haxx.se/libcurl/c/CURLOPT_TIMEOUT_MS.html);

- [CURLOPT_TCP_KEEPALIVE](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPALIVE.html);

- [CURLOPT_TCP_KEEPIDLE](https://curl.haxx.se/libcurl/c/CURLOPT_TCP_KEEPIDLE.html);

- [CURLOPT_CONNECTTIMEOUT](https://curl.haxx.se/libcurl/c/CURLOPT_CONNECTTIMEOUT.html);

- [CURLOPT_USERAGENT](https://curl.haxx.se/libcurl/c/CURLOPT_USERAGENT.html).

## Функция «http_set_curlopt»

> Функция «http_set_curlopt» может использоваться для установки параметров прокси-порта на время существования соединения с базой данных.
>
> http_set_curlopt(curlopt VARCHAR, value varchar)

## Пример

> SELECT http_set_curlopt('CURLOPT_PROXYPORT', '12345');
>
> Политики API могут требовать предоставления определенной контактной информации при каждом запросе. Другие могут запретить определенных агентов, которых они не распознают.
>
> Для таких случаев можно установить CURLOPT_USERAGENT опцию.

## Пример

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image18.png" style="width:6.88719in;height:3.76875in" />

> SELECT http_set_curlopt('CURLOPT_USERAGENT', 'Examplebot/2.1 (+<http://www.example.com/bot.html>) Contact [abuse@example.com'](mailto:abuse@example.com));
>
> SELECT status, content::json -\>\> 'user-agent' FROM http_get('[http://httpbin.org/user-agent'](http://httpbin.org/user-agent%27));
>
> Рисунок 3.14 – Установка CURLOPT_USERAGENT

## Функция «http_reset_curlopt»

> Функция «http_reset_curlopt» может использоваться для сброса всех параметров CURL до значений по умолчанию.
>
> SQL-запрос будет следующим:

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image19.png" style="width:7.11965in;height:1.79219in" />

> SELECT \* FROM http_reset_curlopt();
>
> Рисунок 3.15 – SQL-запрос для сбора параметров прокси

## Функция «http_list_curlopt»

> Функция «http_list_curlopt» может использоваться для получения всех установленных параметров.
>
> SELECT \* FROM http_list_curlopt();

## Пример

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image20.png" style="width:7.11739in;height:1.94719in" />

> Рисунок 3.16 – Вывод установленных параметров

## Функция «urlencode»

> Функция «urlencode» используется, для:

- кодирования строки (п. [3.10.1](#кодирование-строки));

- кодирования ассоциативного массива JSON (п. [3.10.2](#кодирование-ассоциативного-массива-json)).

> Используется SQL-синтаксис:
>
> urlencode(string VARCHAR) urlencode(data JSONB)

## Кодирование строки

> Эта функция удобна, когда закодированная строка будет использоваться в запросе, как часть URL, также это удобный способ для передачи переменных другим страницам.
>
> Возвращает строку, в которой все не цифробуквенные символы, кроме (– \_.) должны быть заменены знаком процента (%), за которым следует два шестнадцатеричных числа, а пробелы кодируются как знак сложения (+). Строка кодируется тем же способом, что и POST данные WWW-формы, то есть по типу контента application/x-www-form-urlencoded. Это отличается от RFC 3986 кодирования тем, что по историческим соображениям, пробелы кодируются как знак "плюс" (+).

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image21.png" style="width:7.116in;height:2.08281in" />

> SELECT urlencode('my special string''s & things?');
>
> Рисунок 3.17 – SQL-запрос с кодированием строки

## Кодирование ассоциативного массива JSON

> При использовании функции «urlencode» с использованием аргумента JSON
>
> urlencode(data JSONB)
>
> URL кодирует ассоциативный массив JSON.

## Пример

<img src="../docs/assets/images/com18.3.1/pgsql-http/media/image22.png" style="width:7.11976in;height:1.99562in" />

> SELECT urlencode(jsonb_build_object('name','Colin & James','rate','50%'));
>
> Рисунок 3.18 – SQL-запрос с кодированием массива JSON

# УДАЛЕНИЕ КОМПОНЕНТА

## Удаление компонента при отсутствии зависимых от него объектов

> Для удаления компонента потребуется авторизоваться в СУБД и выполнить команду:
>
> DROP extension http;

## Удаление компонента при наличии зависимых от него объектов

> Для удаления компонента вместе со всеми зависимыми от него объектами потребуется:

- авторизоваться в СУБД;

- выполнить команду:

> DROP extension http cascade;

## Удаление пакета

> В ОС GNU/Linux выйти из psql и удалить пакет расширения, выполнив команду:
>
> apt-get remove jatoba4-pgsql-http;

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 7%" />
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
<p>CLI</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Command-line interface – интерфейс командной строки</p>
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
<tr>
<td><blockquote>
<p>ФСТЭК</p>
<p>России</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Федеральная служба по техническому и экспортному контролю России</p>
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
