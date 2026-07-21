---
title: Компонент «pg_store_plans»
---

# Компонент «pg_store_plans». Контроль выполненных планов запросов

**АННОТАЦИЯ**

В документе приведены сведения, необходимые для установки и эксплуатации компонента «pg_store_plans» (далее по тексту – «компонент»), предназначенного для контроля выполнения запросов.

Настоящее руководство предназначено для администраторов СУБД.

Для СУБД «Jatoba» версий ядра 5 и 6 используется версия компонента – 1.8 

Для СУБД «Jatoba» версий ядра 18 используется версия компонента – 1.9 

## НАЗНАЧЕНИЕ КОМПОНЕНТА

Компонент «pg_store_plans» предназначен для контроля выполнения планов запросов статистическими методами всех операторов SQL, выполняемых сервером СУБД.

### Условия применения

Компонент «pg_store_plans» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux.

:::warning Важная информация
В текущей реализации компонента не поддерживается управление через компонент	пользовательского	веб-интерфейса	для	администраторов
«Jatoba data safe».

Ограничений по совместимости с другими компонентами нет.
:::

## УСТАНОВКА И НАСТРОЙКА

Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

Для установки компонента в разделе «Shared Library Preloading» конфигурационного файла «postgresql.conf» прописать следующую строку:

```
shared_preload_libraries = 'pg_store_plans'
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image3.png)



Рисунок 2.1 – Параметры конфигурационного файла «postgresql.conf»

Сохранив изменения и перезагрузив СУБД станет доступной установка расширения выполнением SQL-команды:

```sql
CREATE EXTENSION pg_store_plans;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image4.png)



Рисунок 2.2 – Установка расширения «pg_store_plans» Корректность установки расширения выполняется SQL-командой

```
\dx
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image5.png)

Рисунок 2.3 – Проверка установленных расширений

### Параметры конфигурации

Параметры конфигурации компонента имеют два способа установки:

- через конфигурационный файл «postgresql.conf», как представлено на рисунке [2.4](#_bookmark4).

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image6.png)

<span id="_bookmark4" class="anchor"></span>Рисунок 2.4 – Параметры конфигурации в конфигурационном файле «postgresql.conf»

- через SQL-команды:

```sql
ALTER SYSTEM SET [имя параметра конфигурации];
SELECT pg_reload_conf();
```

Параметры компонента устанавливаются от имени и с правами привилегированного пользователя postgres или с пользователя с атрибутом «SUPERUSER».

### Параметр «pg_store_plans.max»

Параметр «pg_store_plans.max» имеет синтаксис:

```
pg_store_plans.max (целое число)
```

Значение по умолчанию — 1000

Параметр «pg_store_plans.max» — это максимальное количество планов, отслеживаемых компонентом, а также параметр ограничивает максимальное количество строк в представлении «pg_store_plans», описание которого приводится в п. [3.1](#представление-pg_store_plans).

Параметр задается только при запуске сервера.

### Например

Просмотрим установленное значение «pg_store_plans.max» через SQL-команду

```sql
SHOW pg_store_plans.max;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image7.png)



Рисунок 2.5 – Просмотр параметра по умолчанию Значение параметра соответствует значению по умолчанию.

Установим новое значение равным 10000, перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

```sql
ALTER SYSTEM SET pg_store_plans.max = 10000; 
SELECT pg_reload_conf();
SHOW pg_store_plans.max;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image8.jpeg)

Рисунок 2.6 – Установка параметра «pg_store_plans.max»

### Параметр «pg_store_plans.track»

Параметр «pg_store_plans.track» имеет синтаксис:

```
pg_store_plans.track (перечисление)
```

Значение по умолчанию — «top».

Параметр «pg_store_plans.track» указывает, какие операторы учитываются компонентом.

Устанавливаются следующие значения:

- «top» - отслеживание операторов верхнего уровня (выданные непосредственно клиентами);

- «all» - отслеживание вложенных операторов (например, операторы, вызываемые внутри функций);

:::info Дополнительная информация
При использовании значения «all» команды «CREATE EXTENSION» и «ALTER EXTENSION» игнорируются
:::

- «none» - отключение сбора статистики операторов.

**Например**

Просмотрим установленное значение «pg_store_plans.max» через SQL-команду:

```sql
SHOW pg_store_plans.track;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image9.png)

Рисунок 2.7 - Просмотр установленного значения параметра «pg_store_plans.max» 

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «all», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

```sql
ALTER SYSTEM SET pg_store_plans.track = 'all'; 
SELECT pg_reload_conf();
SHOW pg_store_plans.track;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image10.png)



Рисунок 2.8 – Установка нового значения параметра «pg_store_plans.max»

### Параметр «pg_store_plans.plan_format»

Параметр «pg_store_plans.plan_format» имеет синтаксис:

```
pg_store_plans.plan_format (перечисление)
```

Значение по умолчанию — text.

Параметр «pg_store_plans.plan_format» устанавливает форматы планов. Устанавливаются следующие значения:

- «text»;

- «json»;

- «xml»;

- «yaml»;

- «raw».

:::info Дополнительная информация
Значение	«raw»	используется,	когда	требуется	получить	внутреннее представление, которое можно передать функция компонента
:::

**Например**

Просмотрим установленное значение параметра «pg_store_plans.max» через SQL-команду:

```sql
SHOW pg_store_plans.plan_format;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image11.png)



Рисунок 2.9 – Просмотр значения параметра «pg_store_plans.max» Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «raw», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

```sql
ALTER SYSTEM SET pg_store_plans.plan_format = 'raw'; 
SELECT pg_reload_conf();
SHOW pg_store_plans.plan_format;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image12.png)

Рисунок 2.10 – Установка нового значения параметра «pg_store_plans.max»

### Параметр pg_store_plans.max_plan_length

Параметр «pg_store_plans.max_plan_length» имеет синтаксис:

```
pg_store_plans.max_plan_length (целое число)
```

Значение по умолчанию — 5000

:::info Дополнительная информация
Устанавливается только после значения «pg_store_plans.plan_format» (см. п. 2.1.3)
:::

Параметр «pg_store_plans.max_plan_length» устанавливает максимальную длину планов в необработанном (сокращенном формате JSON) для хранения в байтах. Этот параметр можно задать только при запуске сервера.

**Например**

Просмотрим установленное значение «pg_store_plans.max_plan_length» через SQL-команду:

```sql
SHOW pg_store_plans.max_plan_length;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image13.png)

Рисунок 2.11 – SQL-команда просмотра параметра «pg_store_plans.max_plan_length» Значение параметра соответствует значению по умолчанию.

Установим новое значение равным 6000 SQL-командой:

```sql
ALTER SYSTEM SET pg_store_plans.max_plan_length = 6000;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image14.png)



Рисунок 2.12 – SQL-команда установки нового значения параметра «pg_store_plans.max_plan_length»

Перезагрузим СУБД.

Проверим применение установленного параметра SQL-командой:

```sql
SHOW pg_store_plans.max_plan_length;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image15.png)



Рисунок 2.13 - SQL-команда просмотра нового значения параметра «pg_store_plans.max_plan_length»

### Параметр «pg_store_plans.plan_storage»

Параметр «pg_store_plans.plan_storage» имеет синтаксис:

```
pg_store_plans.plan_storage (перечисление)
```

Значение по умолчанию — «файл».

Параметр «pg_store_plans.plan_storage» устанавливает метод хранения текстов планов во время работы сервера.

Устанавливаются следующие значения:

- «file» - хранение текстов планов сохраняются во временном файле;

- «shmem» - хранение текстов планов в памяти.

**Например**

Просмотрим установленное значение «pg_store_plans.plan_storage» через SQL-команду:

```sql
SHOW pg_store_plans.plan_storage;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image16.png)



Рисунок 2.14 – SQL-команда установленного значения по умолчанию параметра «pg_store_plans.plan_storage» 

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «shmem» SQL-командой:

```sql
ALTER SYSTEM SET pg_store_plans.plan_storage = 'shmem';
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image17.png)

Рисунок 2.15 - SQL-команда установки нового значения параметра

```
«pg_store_plans.plan_storage»
```

Перезагрузим СУБД.

Проверим применение установленного параметра SQL-командой:

```sql
SHOW pg_store_plans.plan_storage;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image18.png)



Рисунок 2.16 – Просмотр установленного параметра «pg_store_plans.plan_storage»

### Параметр «pg_store_plans.min_duration»

Параметр «pg_store_plans.min_duration» имеет синтаксис:

```
pg_store_plans.min_duration (целое число)
```

Значение по умолчанию - «0».

Параметр «pg_store_plans.min_duration» устанавливает минимальное время выполнения оператора в миллисекундах. Установленное значение по умолчанию регистрирует все планы.

**Например**

Просмотрим установленное значение параметра «pg_store_plans.min_duration» через SQL-команду:

```sql
SHOW pg_store_plans.min_duration;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image19.png)

Рисунок 2.17 – Просмотр текущего значения параметра «pg_store_plans.min_duration»

Установим новое значение равным «1», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

```sql
ALTER SYSTEM SET pg_store_plans.min_duration = 1; 
SELECT pg_reload_conf();
SHOW pg_store_plans.min_duration;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image20.png)



Рисунок 2.18 – Установка нового значения параметра «pg_store_plans.min_duration»

### Параметр «pg_store_plans.log_analyze»

Параметр «pg_store_plans.log_analyze» имеет синтаксис:

```
pg_store_plans.log_analyze (логическое значение)
```

Устанавливаются значения:

- «on», «true», «yes», «1» – включен;

- «off», «false», «no», «0»- отключен. По умолчанию параметр отключен.

При выводе показываются значения «on»/«off».

Параметр «pg_store_plans.log_analyze» устанавливает включение в план вывода команды «EXPLAIN» с параметром «ANALYZE», а не только команду «EXPLAIN».

**Например**

Просмотрим установленное значение параметра «pg_store_plans.max» через SQL-команду:

```
SHOW pg_store_plans.log_analyze;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image21.png)



Рисунок 2.19 – Просмотр значения по умолчанию параметра «pg_store_plans.log_analyze» 

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «on», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

```sql
ALTER SYSTEM SET pg_store_plans.log_analyze = on; 
SELECT pg_reload_conf();
SHOW pg_store_plans.log_analyze;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image22.png)

Рисунок 2.20 – Установка нового значения параметра «pg_store_plans.log_analyze»

### Параметр «pg_store_plans.log_buffers»

Параметр «pg_store_plans.log_buffers» имеет синтаксис:

```
pg_store_plans.log_buffers (логическое значение)
```

Устанавливаются значения:

- «on», «true», «yes», «1» – включен;

- «off», «false», «no», «0»- отключен. По умолчанию параметр отключен.

При выводе показываются значения «on»/«off».

Параметр «pg_store_plans.log_buffers» устанавливает включение в план вывода команду «EXPLAIN» с параметром «ANALYZE, BUFFERS», а не только команду «EXPLAIN». Значения, выводимые с параметром «BUFFERS», детализируют информацию на какие части запроса приходится большинство операций ввода-вывода.

**Например**

Просмотрим установленное значение параметра «pg_store_plans.log_buffers» через SQL-команду:

```ыйд
SHOW pg_store_plans.log_buffers;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image23.png)

Рисунок 2.21 – Вывод значения параметра «pg_store_plans.log_buffers» по умолчанию 

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «on», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

```sql
ALTER SYSTEM SET pg_store_plans.log_buffers = on;
SELECT pg_reload_conf();
SHOW pg_store_plans.log_buffers;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image24.png)



Рисунок 2.22 – Изменение параметра «pg_store_plans.log_buffers»

### Параметр «pg_store_plans.log_timing»

Параметр «pg_store_plans.log_timing» имеет синтаксис:

```
pg_store_plans.log_timing (логическое значение)
```

Устанавливаются значения:

- «on», «true», «yes», «1» – включен;

- «off», «false», «no», «0»- отключен. По умолчанию параметр включен.

При выводе показываются значения «on»/«off».

Параметр «pg_store_plans.log_timing» управляет включением/отключением записи точного времени выполнения для каждого узла выполнения. Его целесообразно использовать при включенном параметре «pg_store_plans.log_analyze» (см. п. [2.1.7](#параметр-pg_store_plans.log_analyze)).

Запись временных показателей может значительно увеличить время выполнение запроса. Для отображения фактического отображения строк запроса, параметр отключается.

**Например**

Просмотрим установленное значение параметра «pg_store_plans.log_timing» через SQL-команду:

```sql
SHOW pg_store_plans.log_timing;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image25.png)



Рисунок 2.23 – Отображение установленного значения параметра «pg_store_plans.log_timing» по умолчанию 

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «off», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

```sql
ALTER SYSTEM SET pg_store_plans.log_timing = off; 
SELECT pg_reload_conf();
SHOW pg_store_plans.log_timing;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image26.png)

Рисунок 2.24 - Установка нового значения параметра«pg_store_plans.log_timing»

### Параметр «pg_store_plans.log_triggers»

Параметр «pg_store_plans.log_triggers» имеет синтаксис:

```
pg_store_plans.log_triggers (логическое значение)
```

Устанавливаются значения:

- «on», «true», «yes», «1» – включен;

- «off», «false», «no», «0»- отключен. По умолчанию параметр включен.

При выводе показываются значения «on»/«off».

Параметр «pg_store_plans.log_triggers» управляет включением/отключением записи выполнения триггера в записываемые планы.

:::info Дополнительная информация
Параметр	не	функционирует	при	отключённом	параметре «pg_store_plans.log_analyze»
:::

**Например**

Просмотрим установленное значение параметра «pg_store_plans.log_triggers» через SQL-команду:

```sql
SHOW pg_store_plans.log_buffers;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image27.png)

Рисунок 2.25 – Просмотр значения параметра «pg_store_plans.log_triggers» по умолчанию 

Установим новое значение равным «off», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

```
ALTER SYSTEM SET pg_store_plans.log_triggers = off; 
SELECT pg_reload_conf();
SHOW pg_store_plans.log_triggers;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image28.png)



Рисунок 2.26 - Изменение параметра «pg_store_plans.log_triggers»

### Параметр «pg_store_plans.save»

Параметр «pg_store_plans.save» имеет синтаксис:

```
pg_store_plans.save (логическое значение)
```

Устанавливаются значения:

- «on», «true», «yes», «1» – включен;

- «off», «false», «no», «0»- отключен. По умолчанию параметр включен.

При выводе показываются значения «on»/«off».

Параметр «pg_store_plans.save» управляет включением/отключением записи статистики плана при выключении сервера СУБД.

**Например**

Просмотрим установленное значение параметра «pg_store_plans.save» через SQL-команду:

```sql
SHOW pg_store_plans.save;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image29.png)



Рисунок 2.27 – Просмотр значения по умолчанию параметра «pg_store_plans.save» 

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «off», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

```sql
ALTER SYSTEM SET pg_store_plans.save = off; 
SELECT pg_reload_conf();
SHOW pg_store_plans.save;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image30.png)

Рисунок 2.28 – Установка нового значения параметра «pg_store_plans.save»

## ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

В результате установки расширения сформируются два представления «pg_store_plans» (см. п. [3.1](#представление-pg_store_plans)) и «pg_store_plans_info» (см п. [3.2](#представление-pg_store_plans_info)).

В представление «pg_store_plans» аккумулирует в себе основную информацию, а представление «pg_store_plans_info» содержит в себе статистику расширения «pg_store_plans».

### Представление «pg_store_plans»

В представление «pg_store_plans» аккумулирует в себе строки для:

- каждого набора идентификаторов БД;

- идентификаторов пользователей;

- идентификаторов запросов.

Столбцы представления описаны в таблице [3.1](#_bookmark18).

<span id="_bookmark18" class="anchor"></span>Таблица 3.1 - Столбцы «pg_store_plans»

<table>
<colgroup>
<col style="width: 21%" />
<col style="width: 11%" />
<col style="width: 3%" />
<col style="width: 29%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название</strong></p>
</th>
<th colspan="2">
<p><strong>Тип</strong></p>
</th>
<th colspan="2">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>userid</p>
</td>
<td colspan="2">
<p>oid</p>
</td>
<td colspan="2">
<p>OID пользователя, выполнившего оператор, получается из системного каталога «pg_authid.oid»</p>
</td>
</tr>
<tr>
<td>
<p>dbid</p>
</td>
<td colspan="2">
<p>oid</p>
</td>
<td colspan="2">
<p>OID базы данных, в которой был выполнен оператор получается из системного каталога «pg_database.oid»</p>
</td>
</tr>
<tr>
<td>
<p>queryid</p>
</td>
<td colspan="2">
<p>int8</p>
</td>
<td colspan="2" style="text-align: left;">
<p>Идентификатор запроса, сгенерированный ядром. Если для параметра calculate_query_id установлено значение "нет", pg_store_plan автоматически отключается</p>
</td>
</tr>
<tr>
<td>
<p>planid</p>
</td>
<td colspan="2">
<p>int8</p>
</td>
<td colspan="2">
<p>Хэш-код плана, вычисленный из нормализованного представления плана</p>
</td>
</tr>
<tr>
<td>
<p>plan</p>
</td>
<td colspan="2">
<p>text</p>
</td>
<td colspan="2">
<p>Текст репрезентативного плана. Формат задается параметром конфигурации pg_store_plans.plan_format.</p>
</td>
</tr>
<tr>
<td>
<p>calls</p>
</td>
<td colspan="2">
<p>int8</p>
</td>
<td colspan="2">
<p>Количество выполненных раз</p>
</td>
</tr>
<tr>
<td>
<p>total_time</p>
</td>
<td colspan="2">
<p>float8</p>
</td>
<td colspan="2">
<p>Общее время нахождения в выписке по плану, в миллисекундах</p>
</td>
</tr>
<tr>
<td>
<p>min_time</p>
</td>
<td colspan="2">
<p>float8</p>
</td>
<td colspan="2">
<p>Минимальное время</p>
</td>
</tr>
<tr>
<td>
<p>max_time</p>
</td>
<td colspan="2">
<p>float8</p>
</td>
<td colspan="2">
<p>Максимальное время</p>
</td>
</tr>
<tr>
<td>
<p>mean_time</p>
</td>
<td colspan="2">
<p>float8</p>
</td>
<td colspan="2">
<p>Среднее время</p>
</td>
</tr>
<tr>
<td>
<p>stddev_time</p>
</td>
<td colspan="2">
<p>float8</p>
</td>
<td colspan="2">
<p>Стандартное время</p>
</td>
</tr>
<tr>
<td>
<p>rows</p>
</td>
<td colspan="2">
<p>int8</p>
</td>
<td colspan="2">
<p>Общее количество строк, извлеченных или затронутых оператором с использованием плана</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 21%" />
<col style="width: 15%" />
<col style="width: 62%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название</strong></p>
</th>
<th>
<p><strong>Тип</strong></p>
</th>
<th>
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>shared_blks_hit</p>
</td>
<td>
<p>int8</p>
</td>
<td>
<p>Общее количество попаданий в кэш общих блоков оператором, использующим план</p>
</td>
</tr>
<tr>
<td>
<p>shared_blks_read</p>
</td>
<td>
<p>int8</p>
</td>
<td>
<p>Общее количество общих блоков, прочитанных оператором с использованием плана</p>
</td>
</tr>
<tr>
<td>
<p>shared_blks_dirtied</p>
</td>
<td>
<p>int8</p>
</td>
<td>
<p>Общее количество общих блоков, загаженных оператором с использованием плана</p>
</td>
</tr>
<tr>
<td>
<p>shared_blks_written</p>
</td>
<td>
<p>int8</p>
</td>
<td>
<p>Общее количество общих блоков, записанных оператором с использованием плана</p>
</td>
</tr>
<tr>
<td>
<p>local_blks_hit</p>
</td>
<td>
<p>int8</p>
</td>
<td>
<p>Общее количество попаданий в локальный кэш блоков оператором, использующим план</p>
</td>
</tr>
<tr>
<td>
<p>local_blks_read</p>
</td>
<td>
<p>int8</p>
</td>
<td>
<p>Общее количество локальных блоков, прочитанных оператором с использованием плана</p>
</td>
</tr>
<tr>
<td>
<p>local_blks_dirtied</p>
</td>
<td>
<p>int8</p>
</td>
<td>
<p>Общее количество локальных блоков, загаженных оператором с использованием плана</p>
</td>
</tr>
<tr>
<td>
<p>local_blks_written</p>
</td>
<td>
<p>int8</p>
</td>
<td>
<p>Общее количество локальных блоков, записанных оператором с использованием плана</p>
</td>
</tr>
<tr>
<td>
<p>temp_blks_read</p>
</td>
<td>
<p>int8</p>
</td>
<td>
<p>Общее количество временных блоков, прочитанных оператором с использованием плана</p>
</td>
</tr>
<tr>
<td>
<p>temp_blks_written</p>
</td>
<td>
<p>int8</p>
</td>
<td>
<p>Общее количество временных блоков, записанных оператором с использованием плана</p>
</td>
</tr>
<tr>
<td>
<p>blk_read_time</p>
</td>
<td>
<p>float8</p>
</td>
<td style="text-align: left;">
<p>Общее время, затраченное оператором, использующим план, на чтение блоков, в миллисекундах (если включена функция track_io_timing, иначе ноль)</p>
<p><strong>До версии компонента 1.8 включительно</strong></p>
</td>
</tr>
<tr>
<td>
<p>blk_write_time</p>
</td>
<td>
<p>float8</p>
</td>
<td style="text-align: left;">
<p>Общее время, затраченное оператором с использованием плана на запись блоков, в миллисекундах (если включена функция track_io_timing, иначе ноль)</p>
<p><strong>До версии компонента 1.8 включительно</strong></p>
</td>
</tr>
<tr>
<td>
<p>shared_blk_read_time</p>
</td>
<td>
<p>float8</p>
</td>
<td style="text-align: left;">
<p>Общее время, затраченное оператором на чтение разделяемых блоков, в миллисекундах (если включён track_io_timing, иначе ноль)</p>
<p><strong>Начиная с версии компонента 1.9</strong></p>
</td>
</tr>
<tr>
<td>
<p>shared_blk_write_time</p>
</td>
<td>
<p>float8</p>
</td>
<td style="text-align: left;">
<p>Общее время, затраченное оператором на запись разделяемых блоков, в миллисекундах (если включён track_io_timing, иначе ноль)</p>
<p><strong>Начиная с версии компонента 1.9</strong></p>
</td>
</tr>
<tr>
<td>
<p>local_blk_read_time</p>
</td>
<td>
<p>float8</p>
</td>
<td style="text-align: left;">
<p>Общее время, затраченное оператором на чтение локальных блоков, в миллисекундах (если включён track_io_timing, или ноль в противном случае). В версиях Postgres Pro ниже 17 всегда содержит ноль.</p>
<p><strong>Начиная с версии компонента 1.9</strong></p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 21%" />
<col style="width: 15%" />
<col style="width: 62%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название</strong></p>
</th>
<th>
<p><strong>Тип</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>local_blk_write_time</p>
</td>
<td>
<p>float8</p>
</td>
<td style="text-align: left;">
<p>Общее время, затраченное оператором на запись локальных блоков, в миллисекундах (если включён track_io_timing, или ноль в противном случае). В версиях Postgres Pro ниже 17 всегда содержит ноль.</p>
<p><strong>Начиная с версии компонента 1.9</strong></p>
</td>
</tr>
<tr>
<td>
<p>temp_blk_read_time</p>
</td>
<td>
<p>float8</p>
</td>
<td style="text-align: left;">
<p>Общее время, затраченное оператором, использующим план, на чтение блоков временного файла, в миллисекундах (если включена функция track_io_timing, в противном случае ноль)</p>
</td>
</tr>
<tr>
<td>
<p>temp_blk_write_time</p>
</td>
<td>
<p>float8</p>
</td>
<td style="text-align: left;">
<p>Общее время, затраченное оператором с использованием плана на запись блоков временного файла, в миллисекундах (если включена функция track_io_timing, иначе ноль)</p>
</td>
</tr>
<tr>
<td>
<p>first_call</p>
</td>
<td>
<p>timestamp with time zone</p>
</td>
<td style="text-align: left;">
<p>Временная метка для последнего вызова запроса с использованием этого плана</p>
</td>
</tr>
<tr>
<td>
<p>last_call</p>
</td>
<td>
<p>timestamp with time zone</p>
</td>
<td style="text-align: left;">
<p>Отметка времени для последнего вызова запроса с использованием этого плана</p>
</td>
</tr>
</tbody>
</table>

### Представление «pg_store_plans_info»

Статистика самого модуля «pg_store_plans» отслеживается и становится доступной через представление с именем «pg_store_plans_info». Это представление содержит только одну строку. Столбцы представления показаны в таблице [3.2](#_bookmark20).

<span id="_bookmark20" class="anchor"></span>Таблица 3.2 - Столбцы «pg_store_plans_info»

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 14%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Имя</strong></p>
</th>
<th>
<p><strong>Тип</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>dealloc</p>
</td>
<td>
<p>bigint</p>
</td>
<td style="text-align: left;">
<p>Общее количество раз, когда записи pg_store_plans о наименее выполняемых инструкциях были освобождены из-за того, что наблюдалось больше отдельных инструкций, чем в pg_store_plans.max</p>
</td>
</tr>
<tr>
<td>
<p>stats_reset</p>
</td>
<td>
<p>timestamp with time zone</p>
</td>
<td style="text-align: left;">
<p>Время последнего сброса всей статистики в представлении pg_store_plans</p>
</td>
</tr>
</tbody>
</table>

### Функции компонента

### Функция «pg_store_plans_reset»

Функция «pg_store_plans_reset» имеет синтаксис:

```
pg_store_plans_reset()returns void
```

Функция сбрасывает всю статистику, собранную компонентом и выполняется от имени и с правами привилегированного пользователя postgres или с пользователя с атрибутом «SUPERUSER».

**Например**

Сброс статистики выполняется SQL-командой:

```sql
SELECT pg_store_plans_reset();
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image31.png)



Рисунок 3.1 – SQL-команда выполнения сброса статистики

### Функция «pg_store_plans»

Функция «pg_store_plans» служит для выводы одноименного представления «pg_store_plans» и имеет синтаксис вызова:

```sql
SELECT pg_store_plans();
```

При этом выведенная информация не будет структурирована и целесообразно вывести требуемые столбы.

**Например**

Выведем содержимое представления «pg_store_plans» с столбцами userid, dbid, queryid, planid. SQL-команда будет следующей:

```sql
SELECT userid, dbid, queryid, planid from pg_store_plans;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image32.png)

Рисунок 3.2 – Вывод представления «pg_store_plans»

### Функция «pg_store_plans_info»

Функция «pg_store_plans_info» предназначена для просмотра одноимённого представления.

**Например**

Просмотр содержания представления выполняется SQL-командой:

```sql
SELECT pg_store_plans_info();
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image33.png)



Рисунок 3.3 - Просмотр содержания представления «pg_store_plans_info»

### Функция «pg_store_hash_query»

Функция «pg_store_hash_query» вычисляет хеш-значение текста SQL-запроса и имеет синтаксис:

```
pg_store_hash_query (query text)
```

**Например**

Вычислим хеш-значение текста SQL-запроса в созданную таблицу «orders». Для этого в теле SQL запроса указывается вызываемая функция (допускается указать схему данных в которой она расположена) и текст SQL-запроса к таблице:

```
SELECT public.pg_store_plans_hash_query('select * FROM orders');
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image34.png)



Рисунок 3.4 – Вызов функции «pg_store_hash_query»

### Функция «pg_store_plans_textplan»

Функция «pg_store_plans_textplan» генерирует обычное текстовое представление из необработанного представления плана в «pg_store_plans», при установленном значении 'raw' параметра «pg_store_plans.plan_formats» (см. п. [2.1.3](#параметр-pg_store_plans.plan_format)).

Поскольку текст плана результатов генерируется из представления json, он может немного отличаться от того, что вы получите непосредственно из команды «EXPLAIN».

Функция имеет синтаксис:

```
pg_store_plans_textplan(query text) returns text
```

### Функция «pg_store_plans_xmlplan»

Функция «pg_store_plans_xmlplan» создает XML-представление из необработанного представления плана в «pg_store_plans», при установленном значении 'raw' параметра «pg_store_plans.plan_formats» (см. п. [2.1.3](#параметр-pg_store_plans.plan_format)).

Функция имеет синтаксис:

```
pg_store_plans_xmlplan(query text) returns text
```

### Функция «pg_store_plans_yamlplan»

Функция «pg_store_plans_yamlplan» генерирует представление YAML из необработанного представления плана в «pg_store_plans», при установленном значении 'raw' параметра «pg_store_plans.plan_formats» (см. п. [2.1.3](#параметр-pg_store_plans.plan_format)).

Функция имеет синтаксис:

```
pg_store_plans_yamlplan(query text) returns text
```

## ПРИМЕР ВЫВОДА

В качестве примера использования компонента будет использована тестовая таблица, к которой будет создан простейший план запроса. Данному плану запроса будет дана качественная оценка компонентом «pg_store_plans».

### Создание тестовой таблицы

В БД создать таблицу «orders»:

```sql
CREATE TABLE orders(
    id serial PRIMARY KEY, 
    customer_id integer NOT NULL, 
    product text NOT NULL, 
    price integer NOT NULL);
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image35.png)



Рисунок 4.1 – Создание таблицы «orders» Добавить 1000 записей в таблицу «orders»:



```
INSERT INTO orders (
    customer_id, product, price)
    SELECT (
        random() \* 3 + 1)::integer, 
        'product', 
        (random() \* 1000 + 1)::integer
    FROM generate_series(1, 1000);
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image36.png)

Рисунок 4.2 – Команда добавления записей в таблицу

### Вывод оценки качества плана

Для вывода оценки качества плана потребуется:

- установить формат вывода (см. п. [2.1.3](#параметр-pg_store_plans.plan_format));

- перезагрузить конфигурацию СУБД;

- просмотреть установленные изменения;

- очистить имеющуюся статистику (см. п. [3.3.1](#функция-pg_store_plans_reset)) ; SQL – командами:

```sql
ALTER SYSTEM SET pg_store_plans.plan_format = 'text'; 
SELECT pg_reload_conf();
SHOW pg_store_plans.plan_format; 
SELECT pg_store_plans_reset();
```

В качестве запроса для анализа будет использоваться SQL-запрос к таблице «orders»:

```sql
SELECT * FROM orders;
```

Создать план запроса с опциями:

- «ANALYZE», которая выполняет фактический запрос в реальном времени для сбора и подготовки плана выполнения;

- «SUMMARY» - добавляет итоговую информацию в план выполнения запроса; 

SQL – командой:

```sql
EXPLAIN (ANALYZE, SUMMARY FALSE) SELECT * FROM orders;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image37.png)

Рисунок 4.3 – Сознание плана выполнения запроса

Установить расширенный вывод в СУБД:

```
\x
```

Вывести характеристики плана выполнения запроса:

```
SELECT
    queryid, plan, calls, total_time, min_time,
    max_time, mean_time, stddev_time from pg_store_plans
LIMIT 1;
```

![](@site/docs/assets/images/com18.3.1/pg_store_plans/media/image38.png)



Рисунок 4.4 – Вывод оценки выполнения плана запроса

Вывод оценочной информации в SQL-запросе может дополняться строками из представления «pg_store_plans», приведенными в таблице [3.1](#_bookmark18).

## ОБНОВЛЕНИЕ КОМПОНЕНТА

### Обновление компонента pg_store_plans в ОС GNU/Linux

Предварительные условия: выполнено обновление СУБД «Jatoba» до версии 18 согласно документу «Руководство по обновлению СУБД Jatoba» 643.72410666.00067-08 93 01.

:::warning Важная информация
При обновлении СУБД «Jatoba» до версии 18 необходимо отключить функцию подсчета контрольных сумм при инициализации каталога данных. Сведения о процедурах обновления до СУБД «Jatoba» 18 изложены в документе «Руководство по обновлению» 643.72410666.00067-08 93 01
:::

Для обновления компонента pg_store_plans с версии 1.8 включительно до версии 1.9 необходимо выполнить следующие шаги:

1)  Остановить службу СУБД «Jatoba»:

```
# systemctl stop jatoba-18
```

2)  Установить новую версию компонента командой:

```
# apt install jatoba18-pg-store-plans
```

3)  В конфигурационный файл /var/lib/jatoba/18/data/postgresql.conf добавить параметры:

```
shared_preload_libraries = 'pg_store_plans, pg_stat_statements' 
pg_store_plans.max = 10000
pg_store_plans.track = all
```

4)  Выполнить запуск обновлённой СУБД «Jatoba» 18:

```
# systemctl start jatoba-18 && systemctl status jatoba-18
```

5)  Обновить версию расширения в БД:

```sql
ALTER EXTENSION pg_store_plans UPDATE;
```

На данном шаге обновление компонента pg_store_plans завершено.

## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

| Сокращение | Расшифровка                      |
|------------|----------------------------------|
| SQL        | Structured Query Language        |
| БД         | База данных                      |
| ОС         | Операционная система             |
| СУБД       | Система управления базами данных |

<table>