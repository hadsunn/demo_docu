---
title: Компонент «pgSQL-HTTP»
---

# Компонент «pgSQL-HTTP». Формирование HTTP/HTTPS запросов из СУБД 

**АННОТАЦИЯ**

В документе приведены сведения, необходимые для установки и эксплуатации компонента «Формирование HTTP/HTTPS запросов из СУБД "pgSQL-HTTP" (далее по тексту – «компонент»).

Настоящее руководство предназначено для администраторов СУБД.

:::info Дополнительная информация
Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра
4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.

Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-6/bin».

Для СУБД «Jatoba» версии ядра 4 используется версия компонента — 1.5.

Для СУБД «Jatoba» версии ядра 5/6/18 используется версия компонента — 1.6.
:::

## НАЗНАЧЕНИЕ КОМПОНЕНТА

Компонент "pgSQL-HTTP" предназначен для выполнения запросов по протоколам HTTP и HTTPS с веб-ресурсов.

:::warning Важная информация
Компонент "pgSQL-HTTP" не реализует функции безопасности СУБД согласно нормативной документации ФСТЭК России
:::

### Условия применения

Компонент "pgSQL-HTTP" может использоваться совместно с СУБД «Jatoba» версий 4.x и выше под управлением ОС GNU/Linux.

:::warning Важная информация
В текущей реализации компонента не поддерживается управление через компонент	пользовательского	веб-интерфейса	для	администраторов «Jatoba data safe».

Ограничений по совместимости с другими компонентами нет.

:::

## УСТАНОВКА

Компонент функционирует под управлением ОС семейства GNU Linux. Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе.

### Установка компонента ОС GNU/Linux

Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо доустановить.

Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:


```
apt-get install jatoba18-pgsql-http
```


- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:


```
yum install jatoba18-pgsql-http
```


Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:


```
apt-get install jatoba18-pgsql-http
```


Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba18-pgsql-http и т.п.

Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

### Установка расширения компонента

Предварительной настройки конфигурационного файла postgresql.conf не требуется. Расширение устанавливается на при помощи SQL-команды (рисунок [2.1](#_bookmark5)).


```
CREATE EXTENSION http;
```


![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image3.png)

<span id="_bookmark5" class="anchor"></span>Рисунок 2.1 – Команда установки расширения

В результате выполнения SQL-команды будет создано расширение (EXTENSION) «http».

Убедиться в установке расширения возможно при помощи SQL-команды:


```
\dx
```


![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image4.png)

Рисунок 2.2 – Список установленных расширений

## ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ

### Функция «http_header»

Функция «http_header» используется для составления заголовка запроса. Функция используется с синтаксисом SQL-запросов:


```
http_header(field VARCHAR, value VARCHAR)
```


Применяется с параметрами, приведенными в таблице [3.1](#_bookmark8).

<span id="_bookmark8" class="anchor"></span>Таблица 3.1 – Параметры функции «http_header»

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
<p>http_header(field VARCHAR, value VARCHAR)</p>
</td>
</tr>
<tr>
<td>
<p>#1 field</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Имя поля заголовка</p>
</td>
</tr>
<tr>
<td>
<p>#2 value</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Значение поля заголовка</p>
</td>
</tr>
</tbody>
</table>

**Пример**


```sql
select http_header('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9');
```


В представленном примере функция составляет заголовок для авторизации с использованием имени поля «Authorization» и значением поля (рисунок [3.1](#_bookmark9))

![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image5.png)

<span id="_bookmark9" class="anchor"></span>Рисунок 3.1 – SQL-запрос http_header

### Функция «http»

Функция «http» используется для создания и выполнения http запроса. Функция используется с синтаксисом SQL-запросов:


```
http(request http_request)
```


**Пример**


```sql
SELECT content::json->'headers'->>'Authorization' FROM http((
    'GET',
    'http://httpbin.org/headers',
    ARRAY[http_header('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9')],
    NULL, NULL
    )::http_request);
```



В представленном запросе отсылается запрос на авторизацию пользователя на указанном веб-ресурсе и разбирается ответ в формате JSON.

![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image6.png)

Рисунок 3.2 – SQL-запрос http

### Функция «http_get»

Функция «http_get» используется для получения информации о веб-ресурсе. Функция используется с синтаксисом SQL-запросов:


```sql
http_get(uri VARCHAR) http_get(uri VARCHAR, data JSONB)
```


Функция позволяет получать данные:

- IP-адрес веб-ресурса (п. [3.3.1](#ip-адрес-веб-ресурса));

- Тип контента (п. [3.3.2](#тип-контента));

- Формат изображений (п. [3.3.3](#формат-изображений));

- HTTP заголовок в табличном формате (п. [3.3.4](#http-заголовок-в-табличном-формате)).

Применяется с параметрами, приведенными в таблице [3.2](#_bookmark12).

<span id="_bookmark12" class="anchor"></span>Таблица 3.2 – Параметры функции «http_get»

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
<td colspan="3">
<p>http_get(uri VARCHAR)</p>
</td>
</tr>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Адрес веб-ресурса</p>
</td>
</tr>
<tr>
<td colspan="3">
<p>http_get(uri VARCHAR, data JSONB)</p>
</td>
</tr>
<tr>
<td>
<p>#1</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Адрес веб-ресурса</p>
</td>
</tr>
<tr>
<td>
<p>#2</p>
</td>
<td>
<p>JSONB</p>
</td>
<td>
<p>Аргумент данных</p>
</td>
</tr>
</tbody>
</table>

**Пример**

В качестве ярлыка для отправки данных в запрос GET передан аргумент данных JSONB.


```sql
SELECT status, content::json->'args' AS args 
    FROM http_get('http://httpbin.org/get',
    jsonb_build_object('myvar','myval','foo','bar'));
```



![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image7.png)

Рисунок 3.3 – SQL-запрос GET c передачей аргумента данных JSONB

### IP-адрес веб-ресурса

Функция «http_get» может использоваться для определения IP-адреса веб-ресурса c применением аргумента – «IP».


```sql
http_get(uri VARCHAR/ip)
```


**Пример**

Для выяснения IP-адреса ресурса «http://httpbin.org/» формируется следующая SQL-команда:


```sql
SELECT content
    FROM http_get('http://httpbin.org/ip');
```



![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image8.png)

Рисунок 3.4 – Пример запроса IP-адреса

### Тип контента

Функция «http_get» может использоваться для определения типа контента веб-ресурса. В этом случае составляется SQL-запрос:


```sql
SELECT status, content_type
    FROM http_get('http://httpbin.org/');
```



![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image9.png)

Рисунок 3.5 – Вывод типа контента веб-ресурса

В результате будет выведена информация о типе текста и кодировке.

### Формат изображений

Функция «http_get» может применяться для получения данных об изображениях на веб-ресурсе. И используется синтаксис SQL-команд:


```sql
http_get(uri VARCHAR/image/[type])
```


функция использует операторы:

- /image

Запрос возвращает данные о полях заголовков HTTP


```sql
http_get(uri VARCHAR/image)
```


- /image/jpeg

Запрос возвращает данные о изображениях в формате JPEG


```sql
http_get(uri VARCHAR/image/jpeg)
```


- /image/png

Запрос возвращает данные о изображениях в формате PNG


```sql
http_get(uri VARCHAR/image/png)
```


- /image/svg

Запрос возвращает данные о изображениях в формате SVG


```sql
http_get(uri VARCHAR/image/svg)
```


- /image/webp

Запрос возвращает данные об изображениях, сжатых в формате WEBP


```sql
http_get(uri VARCHAR/image/webp)
```


**Пример**

Ниже рассмотрен запрос сведений об изображениях в формате «SVG». SQL-запрос будет следующим:


```sql
WITH
    http AS (
    SELECT * FROM http_get('http://httpbin.org/image/svg')
    ),
    headers AS (
SELECT (unnest(headers)).* FROM http
    ) SELECT
    http.content_type, length(textsend(http.content)) AS length_binary, headers.value AS length_headers
FROM http, headers
WHERE field = 'Content-Length';
```


![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image10.png)

Рисунок 3.6 – Пример SQL-запроса «http_get» с аргументом «svg»

### HTTP заголовок в табличном формате

Показывает все заголовки HTTP (http_header) в ответе (http_response), используя табличный формат.

**Пример**


```sql
SELECT (unnest(headers)).*
    FROM http_get('http://httpbin.org/');
```


![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image11.png)

Рисунок 3.7 – SQL-запрос получения заголовка в табличном формате

### Функция «http_post»

Функция «http_post» используется для отправки на веб-ресурс данных. Функция используется с синтаксисом SQL-запросов:


```sql
http_post(uri VARCHAR, content VARCHAR, content_type VARCHAR) http_post(uri VARCHAR, data JSONB)
```


Применяется с параметрами, приведенными в таблице [3.3](#_bookmark18).

<span id="_bookmark18" class="anchor"></span>Таблица 3.3 – Параметры функции «http_post»

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
<p>http_post(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</td>
</tr>
<tr>
<td>
<p>#1 uri</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Адрес веб-ресурса</p>
</td>
</tr>
<tr>
<td>
<p>#2 content</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Отправляемый контент</p>
</td>
</tr>
<tr>
<td>
<p>#3 content_type</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Аргумент данных</p>
</td>
</tr>
<tr>
<td colspan="3">
<p>http_ post(uri VARCHAR, data JSONB)</p>
</td>
</tr>
<tr>
<td>
<p>#1 uri</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Адрес веб-ресурса</p>
</td>
</tr>
<tr>
<td>
<p>#2 data</p>
</td>
<td>
<p>JSONB</p>
</td>
<td>
<p>Аргумент данных</p>
</td>
</tr>
</tbody>
</table>

**Пример**

Позволяет выполнить стандартный запрос «post» стандарта HTTP, используя синтаксис SQL:


```sql
http_post(uri VARCHAR, content VARCHAR, content_type VARCHAR)
```


SQL-запрос может быть следующим:


```sql
select * from http_post('https://httpbin.org/post', 'param1=value1&param2=value2', 'application/json');
```


В представленном примере отправлен запрос с функцией «http_post»:

- на адрес (url) https://httpbin.org/post;

- контент в виде строки, которая может быть любой;

- получили ответ формате JSON.

![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image12.png)

Рисунок 3.8 – SQL-запрос http_post

**Пример**

Чтобы выполнить POST для URL-адреса с использованием полезных данных вместо параметров, встроенных в URL-адрес, закодируйте данные в JSONB как полезные данные.


```sql
http_post(uri VARCHAR, data JSONB)
```


SQL-запрос может быть следующим:


```sql
SELECT status, content::json->'form' AS form
    FROM http_post('http://httpbin.org/post', jsonb_build_object('myvar','myval','foo','bar'));
```


![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image13.png)

Рисунок 3.9 – SQL-запрос http_post с кодировкой данных в формате JSONB

### Функция «http_put»

Функция «http_put» используется для отправки простого документа на веб-сервер. Функция используется с синтаксисом SQL-запросов:


```sql
http_put(uri VARCHAR, content VARCHAR, content_type VARCHAR)
```


И применяется с параметрами, приведенными в таблице [3.4](#_bookmark20).

<span id="_bookmark20" class="anchor"></span>Таблица 3.4 – Параметры функции «http_put»

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
<p>http_put(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</td>
</tr>
<tr>
<td>
<p>#1 uri</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Адрес веб-ресурса</p>
</td>
</tr>
<tr>
<td>
<p>#2 content</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Отправляемый контент</p>
</td>
</tr>
<tr>
<td>
<p>#3 content_type</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Аргумент данных</p>
</td>
</tr>
</tbody>
</table>

**Пример**

Для отправки простого документа на веб-сервер формируется SQL-команда:


```sql
SELECT status, content_type, content::json->>'data' AS data
    FROM http_put('http://httpbin.org/put', 'some text', 'text/plain');
```


![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image14.png)

Рисунок 3.10 – Отправка простого документа

### Функция «http_patch»

Функция «http_patch» используется для отправки простого документа JSON на веб-сервер.

Функция используется с синтаксисом SQL-запросов:


```sql
http_patch(uri VARCHAR, content VARCHAR, content_type VARCHAR)
```

И применяется с параметрами, приведенными в таблице [3.5](#_bookmark22).

<span id="_bookmark22" class="anchor"></span>Таблица 3.5 – Параметры функции «http_patch»

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
<p>http_patch(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</td>
</tr>
<tr>
<td>
<p>#1 uri</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Адрес веб-ресурса</p>
</td>
</tr>
<tr>
<td>
<p>#2 content</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Отправляемый контент</p>
</td>
</tr>
<tr>
<td>
<p>#3 content_type</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Аргумент данных</p>
</td>
</tr>
</tbody>
</table>

**Пример**

Для отправки простого документа JSON на веб-сервер формируется SQL-команда:


```sql
SELECT status, content_type, content::json->>'data' AS data
    FROM http_patch('http://httpbin.org/patch', '{"this":"that"}', 'application/json');
```


![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image15.png)

Рисунок 3.11 – Отправка простого документа JSON

### Функция «http_delete»

Функция «http_delete» используется для запроса удаления ресурса на HTTP-сервере. Функция используется с синтаксисом SQL-запросов:


```sql
http_delete(uri VARCHAR, content VARCHAR, content_type VARCHAR)
```


Применяется с параметрами, приведенными в таблице [3.6](#_bookmark24).

<span id="_bookmark24" class="anchor"></span>Таблица 3.6 – Параметры функции «http_delete»

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
<p>http_delete(uri VARCHAR, content VARCHAR, content_type VARCHAR)</p>
</td>
</tr>
<tr>
<td>
<p>#1 uri</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Адрес веб-ресурса</p>
</td>
</tr>
<tr>
<td>
<p>#2 content</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Отправляемый контент</p>
</td>
</tr>
<tr>
<td>
<p>#3 content_type</p>
</td>
<td>
<p>varchar</p>
</td>
<td>
<p>Аргумент данных</p>
</td>
</tr>
</tbody>
</table>

**Пример**


```sql
SELECT status, content_type, content::json->>'url' AS url 
    FROM http_delete('http://httpbin.org/delete');
```


![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image16.png)

Рисунок 3.12 – Запрос удаления ресурса

### Функция «http_head»

Функция «http_head» используется для получения заголовка запроса и принятия решения о дальнейших действиях.

Аналогично «http_get» функция «http_head» возвращает заголовок:


```sql
http_head(uri VARCHAR)
```


**Пример**


```sql
SELECT
    http.status, headers.value AS location
FROM
    http_head('http://google.com') AS http LEFT OUTER JOIN LATERAL (SELECT value
FROM unnest(http.headers)
WHERE field = 'Location') AS headers ON true;
```



![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image17.png)

Рисунок 3.13 – SQL-запрос с функцией «http_head»

### Функция «curlopt»

Функция «curlopt» использует SQL-синтаксис:


```sql
http_set_curlopt(curlopt VARCHAR, value varchar)
```


и может использоваться с параметрами:

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

### Функция «http_set_curlopt»

Функция «http_set_curlopt» может использоваться для установки параметров прокси-порта на время существования соединения с базой данных.


```sql
http_set_curlopt(curlopt VARCHAR, value varchar)
```


**Пример**


```sql
SELECT http_set_curlopt('CURLOPT_PROXYPORT', '12345');
```

Политики API могут требовать предоставления определенной контактной информации при каждом запросе. Другие могут запретить определенных агентов, которых они не распознают.

Для таких случаев можно установить CURLOPT_USERAGENT опцию.

**Пример**


```sql
SELECT http_set_curlopt('CURLOPT_USERAGENT', 'Examplebot/2.1 (+http://www.example.com/bot.html) Contact abuse@example.com');

SELECT status, content::json ->> 'user-agent' 
    FROM http_get('http://httpbin.org/user-agent');
```


![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image18.png)

Рисунок 3.14 – Установка CURLOPT_USERAGENT

### Функция «http_reset_curlopt»

Функция «http_reset_curlopt» может использоваться для сброса всех параметров CURL до значений по умолчанию.

SQL-запрос будет следующим:

```sql
SELECT * FROM http_reset_curlopt();
```

![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image19.png)



Рисунок 3.15 – SQL-запрос для сбора параметров прокси

### Функция «http_list_curlopt»

Функция «http_list_curlopt» может использоваться для получения всех установленных параметров.


```sql
SELECT\* FROM http_list_curlopt();
```


**Пример**

![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image20.png)

Рисунок 3.16 – Вывод установленных параметров

### Функция «urlencode»

Функция «urlencode» используется, для:

- кодирования строки (п. [3.10.1](#кодирование-строки));

- кодирования ассоциативного массива JSON (п. [3.10.2](#кодирование-ассоциативного-массива-json)).

Используется SQL-синтаксис:


```sql
urlencode(string VARCHAR) 
urlencode(data JSONB)
```


### Кодирование строки

Эта функция удобна, когда закодированная строка будет использоваться в запросе, как часть URL, также это удобный способ для передачи переменных другим страницам.

Возвращает строку, в которой все не цифробуквенные символы, кроме (– _.) должны быть заменены знаком процента (%), за которым следует два шестнадцатеричных числа, а пробелы кодируются как знак сложения (+). Строка кодируется тем же способом, что и POST данные WWW-формы, то есть по типу контента application/x-www-form-urlencoded. Это отличается от RFC 3986 кодирования тем, что по историческим соображениям, пробелы кодируются как знак "плюс" (+).

```sql
SELECT urlencode('my special string''s & things?');
```

![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image21.png)



Рисунок 3.17 – SQL-запрос с кодированием строки

### Кодирование ассоциативного массива JSON

При использовании функции «urlencode» с использованием аргумента JSON


```sql
urlencode(data JSONB)
```


URL кодирует ассоциативный массив JSON.

**Пример**

```sql
SELECT urlencode(jsonb_build_object('name','Colin & James','rate','50%'));
```

![](@site/versioned_docs/version-18.3.1/assets/images/com18.3.1/pgsql-http/media/image22.png)



Рисунок 3.18 – SQL-запрос с кодированием массива JSON

## УДАЛЕНИЕ КОМПОНЕНТА

### Удаление компонента при отсутствии зависимых от него объектов

Для удаления компонента потребуется авторизоваться в СУБД и выполнить команду:


```sql
DROP extension http;
```


### Удаление компонента при наличии зависимых от него объектов

Для удаления компонента вместе со всеми зависимыми от него объектами потребуется:

- авторизоваться в СУБД;

- выполнить команду:


```sql
DROP extension http cascade;
```


### Удаление пакета

В ОС GNU/Linux выйти из psql и удалить пакет расширения, выполнив команду:


```
apt-get remove jatoba4-pgsql-http;
```


## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

| Сокращение   | Расшифровка                                                      |
|--------------|------------------------------------------------------------------|
| CLI          | Command-line interface – интерфейс командной строки              |
| SQL          | Structured Query Language                                        |
| БД           | База данных                                                      |
| ОС           | Операционная система                                             |
| СУБД         | Система управления базами данных                                 |
| ФСТЭК России | Федеральная служба по техническому и экспортному контролю России |
