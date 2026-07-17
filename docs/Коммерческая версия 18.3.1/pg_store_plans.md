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
<p><strong>Руководство по настройке. Часть 32.</strong></p>
<p><strong>Контроль выполненных планов запросов.</strong></p>
<p><strong>Компонент «pg_store_plans»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-32</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 36</p>
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

> В документе приведены сведения, необходимые для установки и эксплуатации компонента «pg_store_plans» (далее по тексту – «компонент»), предназначенного для контроля выполнения запросов.
>
> Настоящее руководство предназначено для администраторов СУБД.
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image1.png" style="width:0.25138in;height:0.25138in" />Для СУБД «Jatoba» версий ядра 5 и 6 используется версия компонента – 1.8 Для СУБД «Jatoba» версий ядра 18 используется версия компонента – 1.9 Степени важности примечаний, применяемые в документе:
>
> **Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image2.png" style="width:0.25in;height:0.24862in" />**Дополнительная информация** – указания, позволяющие упростить работу с изделием

# СОДЕРЖАНИЕ

1.  [Назначение компонента 4](#назначение-компонента)

    1.  [Условия применения 4](#условия-применения)

2.  [Установка и настройка 5](#установка-и-настройка)

    1.  [Параметры конфигурации 6](#параметры-конфигурации)

        1.  [Параметр «pg_store_plans.max» 6](#параметр-pg_store_plans.max)

        2.  [Параметр «pg_store_plans.track» 8](#параметр-pg_store_plans.track)

        3.  [Параметр «pg_store_plans.plan_format» 9](#параметр-pg_store_plans.plan_format)

        4.  [Параметр pg_store_plans.max_plan_length 11](#параметр-pg_store_plans.max_plan_length)

        5.  [Параметр «pg_store_plans.plan_storage» 12](#параметр-pg_store_plans.plan_storage)

        6.  [Параметр «pg_store_plans.min_duration» 14](#параметр-pg_store_plans.min_duration)

        7.  [Параметр «pg_store_plans.log_analyze» 15](#параметр-pg_store_plans.log_analyze)

        8.  [Параметр «pg_store_plans.log_buffers» 17](#параметр-pg_store_plans.log_buffers)

        9.  [Параметр «pg_store_plans.log_timing» 18](#параметр-pg_store_plans.log_timing)

        10. [Параметр «pg_store_plans.log_triggers» 20](#параметр-pg_store_plans.log_triggers)

        11. [Параметр «pg_store_plans.save» 21](#параметр-pg_store_plans.save)

3.  [Функциональные возможности компонента 24](#функциональные-возможности-компонента)

    1.  [Представление «pg_store_plans» 24](#представление-pg_store_plans)

    2.  [Представление «pg_store_plans_info» 26](#представление-pg_store_plans_info)

    3.  [Функции компонента 26](#функции-компонента)

        1.  [Функция «pg_store_plans_reset» 26](#функция-pg_store_plans_reset)

        2.  [Функция «pg_store_plans» 27](#функция-pg_store_plans)

        3.  [Функция «pg_store_plans_info» 28](#функция-pg_store_plans_info)

        4.  [Функция «pg_store_hash_query» 28](#функция-pg_store_hash_query)

        5.  [Функция «pg_store_plans_textplan» 29](#функция-pg_store_plans_textplan)

        6.  [Функция «pg_store_plans_xmlplan» 29](#функция-pg_store_plans_xmlplan)

        7.  [Функция «pg_store_plans_yamlplan» 30](#функция-pg_store_plans_yamlplan)

4.  [Пример вывода 31](#пример-вывода)

    1.  [Создание тестовой таблицы 31](#создание-тестовой-таблицы)

    2.  [Вывод оценки качества плана 32](#вывод-оценки-качества-плана)

5.  [Обновление компонента 34](#обновление-компонента)

    1.  [Обновление компонента pg_store_plans в ОС GNU/Linux 34](#обновление-компонента-pg_store_plans-в-ос-gnulinux)

[Перечень сокращений 35](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент «pg_store_plans» предназначен для контроля выполнения планов запросов статистическими методами всех операторов SQL, выполняемых сервером СУБД.

## Условия применения

> Компонент «pg_store_plans» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux.
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image1.png" style="width:0.25138in;height:0.25122in" />В текущей реализации компонента не поддерживается управление через компонент пользовательского веб-интерфейса для администраторов
>
> «Jatoba data safe».
>
> Ограничений по совместимости с другими компонентами нет.

# УСТАНОВКА И НАСТРОЙКА

> Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).
>
> Для установки компонента в разделе «Shared Library Preloading» конфигурационного файла «postgresql.conf» прописать следующую строку:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image3.png" style="width:7.10215in;height:1.58875in" />

> shared_preload_libraries = 'pg_store_plans'
>
> Рисунок 2.1 – Параметры конфигурационного файла «postgresql.conf»
>
> Сохранив изменения и перезагрузив СУБД станет доступной установка расширения выполнением SQL-команды:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image4.png" style="width:7.02149in;height:1.93375in" />

> CREATE EXTENSION pg_store_plans;
>
> Рисунок 2.2 – Установка расширения «pg_store_plans» Корректность установки расширения выполняется SQL-командой
>
> \dx
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image5.png" style="width:7.10125in;height:2.15604in" />
>
> Рисунок 2.3 – Проверка установленных расширений

## Параметры конфигурации

> Параметры конфигурации компонента имеют два способа установки:

- через конфигурационный файл «postgresql.conf», как представлено на рисунке [2.4](#_bookmark4).

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image6.png" style="width:7.08187in;height:1.96656in" />

> <span id="_bookmark4" class="anchor"></span>Рисунок 2.4 – Параметры конфигурации в конфигурационном файле «postgresql.conf»

- через SQL-команды:

> ALTER SYSTEM SET \[имя параметра конфигурации\];
>
> SELECT pg_reload_conf();
>
> Параметры компонента устанавливаются от имени и с правами привилегированного пользователя postgres или с пользователя с атрибутом «SUPERUSER».

## Параметр «pg_store_plans.max»

> Параметр «pg_store_plans.max» имеет синтаксис:
>
> pg_store_plans.max (целое число)
>
> Значение по умолчанию — 1000
>
> Параметр «pg_store_plans.max» — это максимальное количество планов, отслеживаемых компонентом, а также параметр ограничивает максимальное количество строк в представлении «pg_store_plans», описание которого приводится в п. [3.1](#представление-pg_store_plans).
>
> Параметр задается только при запуске сервера.

## Например

> Просмотрим установленное значение «pg_store_plans.max» через SQL-команду

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image7.png" style="width:6.91496in;height:1.75365in" />

> SHOW pg_store_plans.max;
>
> Рисунок 2.5 – Просмотр параметра по умолчанию Значение параметра соответствует значению по умолчанию.
>
> Установим новое значение равным 10000, перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:
>
> ALTER SYSTEM SET pg_store_plans.max = 10000; SELECT pg_reload_conf();
>
> SHOW pg_store_plans.max;
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image8.jpeg" style="width:7.08048in;height:3.12906in" />
>
> Рисунок 2.6 – Установка параметра «pg_store_plans.max»

## Параметр «pg_store_plans.track»

> Параметр «pg_store_plans.track» имеет синтаксис:
>
> pg_store_plans.track (перечисление)
>
> Значение по умолчанию — «top».
>
> Параметр «pg_store_plans.track» указывает, какие операторы учитываются компонентом.
>
> Устанавливаются следующие значения:

- «top» - отслеживание операторов верхнего уровня (выданные непосредственно клиентами);

- «all» - отслеживание вложенных операторов (например, операторы, вызываемые внутри функций);

> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image2.png" style="width:0.25in;height:0.25in" />При использовании значения «all» команды «CREATE EXTENSION» и «ALTER EXTENSION» игнорируются

- «none» - отключение сбора статистики операторов.

## Например

> Просмотрим установленное значение «pg_store_plans.max» через SQL-команду:
>
> SHOW pg_store_plans.track;

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image9.png" style="width:7.06249in;height:1.81156in" />

> Рисунок 2.7 - Просмотр установленного значения параметра «pg_store_plans.max» Значение параметра соответствует значению по умолчанию.
>
> Установим новое значение равным «all», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image10.png" style="width:7.09084in;height:3.18719in" />

> ALTER SYSTEM SET pg_store_plans.track = 'all'; SELECT pg_reload_conf();
>
> SHOW pg_store_plans.track;
>
> Рисунок 2.8 – Установка нового значения параметра «pg_store_plans.max»

## Параметр «pg_store_plans.plan_format»

> Параметр «pg_store_plans.plan_format» имеет синтаксис:
>
> pg_store_plans.plan_format (перечисление)
>
> Значение по умолчанию — text.
>
> Параметр «pg_store_plans.plan_format» устанавливает форматы планов. Устанавливаются следующие значения:

- «text»;

- «json»;

- «xml»;

- «yaml»;

- «raw».

> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image2.png" style="width:0.25in;height:0.25in" />Значение «raw» используется, когда требуется получить внутреннее представление, которое можно передать функция компонента

## Например

> Просмотрим установленное значение параметра «pg_store_plans.max» через SQL-команду:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image11.png" style="width:7.09876in;height:1.80187in" />

> SHOW pg_store_plans.plan_format;
>
> Рисунок 2.9 – Просмотр значения параметра «pg_store_plans.max» Значение параметра соответствует значению по умолчанию.
>
> Установим новое значение равным «raw», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:
>
> ALTER SYSTEM SET pg_store_plans.plan_format = 'raw'; SELECT pg_reload_conf();
>
> SHOW pg_store_plans.plan_format;

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image12.png" style="width:6.92788in;height:3.1376in" />

> Рисунок 2.10 – Установка нового значения параметра «pg_store_plans.max»

## Параметр pg_store_plans.max_plan_length

> Параметр «pg_store_plans.max_plan_length» имеет синтаксис:
>
> pg_store_plans.max_plan_length (целое число)
>
> Значение по умолчанию — 5000
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image2.png" style="width:0.25in;height:0.25in" />Устанавливается только после значения «pg_store_plans.plan_format» (см. п. [2.1.3](#параметр-pg_store_plans.plan_format))
>
> Параметр «pg_store_plans.max_plan_length» устанавливает максимальную длину планов в необработанном (сокращенном формате JSON) для хранения в байтах. Этот параметр можно задать только при запуске сервера.

## Например

> Просмотрим установленное значение «pg_store_plans.max_plan_length» через SQL-команду:
>
> SHOW pg_store_plans.max_plan_length;
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image13.png" style="width:7.0633in;height:1.75344in" />
>
> Рисунок 2.11 – SQL-команда просмотра параметра «pg_store_plans.max_plan_length» Значение параметра соответствует значению по умолчанию.
>
> Установим новое значение равным 6000 SQL-командой:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image14.png" style="width:7.12267in;height:1.085in" />

> ALTER SYSTEM SET pg_store_plans.max_plan_length = 6000;
>
> Рисунок 2.12 – SQL-команда установки нового значения параметра
>
> «pg_store_plans.max_plan_length»
>
> Перезагрузим СУБД.
>
> Проверим применение установленного параметра SQL-командой:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image15.png" style="width:7.05614in;height:1.80187in" />

> SHOW pg_store_plans.max_plan_length;
>
> Рисунок 2.13 - SQL-команда просмотра нового значения параметра
>
> «pg_store_plans.max_plan_length»

## Параметр «pg_store_plans.plan_storage»

> Параметр «pg_store_plans.plan_storage» имеет синтаксис:
>
> pg_store_plans.plan_storage (перечисление)
>
> Значение по умолчанию — «файл».
>
> Параметр «pg_store_plans.plan_storage» устанавливает метод хранения текстов планов во время работы сервера.
>
> Устанавливаются следующие значения:

- «file» - хранение текстов планов сохраняются во временном файле;

- «shmem» - хранение текстов планов в памяти.

## Например

> Просмотрим установленное значение «pg_store_plans.plan_storage» через SQL-команду:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image16.png" style="width:7.00825in;height:1.80167in" />

> SHOW pg_store_plans.plan_storage;
>
> Рисунок 2.14 – SQL-команда установленного значения по умолчанию параметра
>
> «pg_store_plans.plan_storage» Значение параметра соответствует значению по умолчанию.
>
> Установим новое значение равным «shmem» SQL-командой:
>
> ALTER SYSTEM SET pg_store_plans.plan_storage = 'shmem';
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image17.png" style="width:7.13669in;height:1.10646in" />
>
> Рисунок 2.15 - SQL-команда установки нового значения параметра
>
> «pg_store_plans.plan_storage»
>
> Перезагрузим СУБД.
>
> Проверим применение установленного параметра SQL-командой:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image18.png" style="width:7.03122in;height:1.77292in" />

> SHOW pg_store_plans.plan_storage;
>
> Рисунок 2.16 – Просмотр установленного параметра «pg_store_plans.plan_storage»

## Параметр «pg_store_plans.min_duration»

> Параметр «pg_store_plans.min_duration» имеет синтаксис:
>
> pg_store_plans.min_duration (целое число)
>
> Значение по умолчанию - «0».
>
> Параметр «pg_store_plans.min_duration» устанавливает минимальное время выполнения оператора в миллисекундах. Установленное значение по умолчанию регистрирует все планы.
>
> Например
>
> Просмотрим установленное значение параметра «pg_store_plans.min_duration» через SQL-команду:
>
> SHOW pg_store_plans.min_duration;
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image19.png" style="width:7.03835in;height:1.82083in" />
>
> Рисунок 2.17 – Просмотр текущего значения параметра «pg_store_plans.min_duration»
>
> Установим новое значение равным «1», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image20.png" style="width:6.95772in;height:3.08073in" />

> ALTER SYSTEM SET pg_store_plans.min_duration = 1; SELECT pg_reload_conf();
>
> SHOW pg_store_plans.min_duration;
>
> Рисунок 2.18 – Установка нового значения параметра «pg_store_plans.min_duration»

## Параметр «pg_store_plans.log_analyze»

> Параметр «pg_store_plans.log_analyze» имеет синтаксис:
>
> pg_store_plans.log_analyze (логическое значение)
>
> Устанавливаются значения:

- «on», «true», «yes», «1» – включен;

- «off», «false», «no», «0»- отключен. По умолчанию параметр отключен.

> При выводе показываются значения «on»/«off».
>
> Параметр «pg_store_plans.log_analyze» устанавливает включение в план вывода команды «EXPLAIN» с параметром «ANALYZE», а не только команду «EXPLAIN».

## Например

> Просмотрим установленное значение параметра «pg_store_plans.max» через SQL-команду:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image21.png" style="width:7.06324in;height:1.75344in" />

> SHOW pg_store_plans.log_analyze;
>
> Рисунок 2.19 – Просмотр значения по умолчанию параметра «pg_store_plans.log_analyze» Значение параметра соответствует значению по умолчанию.
>
> Установим новое значение равным «on», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:
>
> ALTER SYSTEM SET pg_store_plans.log_analyze = on; SELECT pg_reload_conf();
>
> SHOW pg_store_plans.log_analyze;
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image22.png" style="width:7.07143in;height:3.13875in" />
>
> Рисунок 2.20 – Установка нового значения параметра «pg_store_plans.log_analyze»

## Параметр «pg_store_plans.log_buffers»

> Параметр «pg_store_plans.log_buffers» имеет синтаксис:
>
> pg_store_plans.log_buffers (логическое значение)
>
> Устанавливаются значения:

- «on», «true», «yes», «1» – включен;

- «off», «false», «no», «0»- отключен. По умолчанию параметр отключен.

> При выводе показываются значения «on»/«off».
>
> Параметр «pg_store_plans.log_buffers» устанавливает включение в план вывода команду «EXPLAIN» с параметром «ANALYZE, BUFFERS», а не только команду
>
> «EXPLAIN». Значения, выводимые с параметром «BUFFERS», детализируют информацию на какие части запроса приходится большинство операций ввода-вывода.

## Например

> Просмотрим установленное значение параметра «pg_store_plans.log_buffers» через SQL-команду:
>
> SHOW pg_store_plans.log_buffers;
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image23.png" style="width:7.08605in;height:1.7825in" />
>
> Рисунок 2.21 – Вывод значения параметра «pg_store_plans.log_buffers» по умолчанию Значение параметра соответствует значению по умолчанию.
>
> Установим новое значение равным «on», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image24.png" style="width:6.99099in;height:3.13375in" />

> ALTER SYSTEM SET pg_store_plans.log_buffers = on; SELECT pg_reload_conf();
>
> SHOW pg_store_plans.log_buffers;
>
> Рисунок 2.22 – Изменение параметра «pg_store_plans.log_buffers»

## Параметр «pg_store_plans.log_timing»

> Параметр «pg_store_plans.log_timing» имеет синтаксис:
>
> pg_store_plans.log_timing (логическое значение)
>
> Устанавливаются значения:

- «on», «true», «yes», «1» – включен;

- «off», «false», «no», «0»- отключен. По умолчанию параметр включен.

> При выводе показываются значения «on»/«off».
>
> Параметр «pg_store_plans.log_timing» управляет включением/отключением записи точного времени выполнения для каждого узла выполнения. Его целесообразно использовать при включенном параметре «pg_store_plans.log_analyze» (см. п. [2.1.7](#параметр-pg_store_plans.log_analyze)).
>
> Запись временных показателей может значительно увеличить время выполнение запроса. Для отображения фактического отображения строк запроса, параметр отключается.

## Например

> Просмотрим установленное значение параметра «pg_store_plans.log_timing» через SQL-команду:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image25.png" style="width:7.14647in;height:1.79187in" />

> SHOW pg_store_plans.log_timing;
>
> Рисунок 2.23 – Отображение установленного значения параметра
>
> «pg_store_plans.log_timing» по умолчанию Значение параметра соответствует значению по умолчанию.
>
> Установим новое значение равным «off», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:
>
> ALTER SYSTEM SET pg_store_plans.log_timing = off; SELECT pg_reload_conf();
>
> SHOW pg_store_plans.log_timing;
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image26.png" style="width:7.02035in;height:3.15292in" />
>
> Рисунок 2.24 - Установка нового значения параметра«pg_store_plans.log_timing»

## Параметр «pg_store_plans.log_triggers»

> Параметр «pg_store_plans.log_triggers» имеет синтаксис:
>
> pg_store_plans.log_triggers (логическое значение)
>
> Устанавливаются значения:

- «on», «true», «yes», «1» – включен;

- «off», «false», «no», «0»- отключен. По умолчанию параметр включен.

> При выводе показываются значения «on»/«off».
>
> Параметр «pg_store_plans.log_triggers» управляет включением/отключением записи выполнения триггера в записываемые планы.
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image2.png" style="width:0.25in;height:0.25in" />Параметр не функционирует при отключённом параметре
>
> «pg_store_plans.log_analyze» (см. п. [2.1.7](#параметр-pg_store_plans.log_analyze))

## Например

> Просмотрим установленное значение параметра «pg_store_plans.log_triggers» через SQL-команду:
>
> SHOW pg_store_plans.log_buffers;
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image27.png" style="width:7.00479in;height:1.84958in" />
>
> Рисунок 2.25 – Просмотр значения параметра «pg_store_plans.log_triggers» по умолчанию Установим новое значение равным «off», перезагрузим конфигурацию СУБД и
>
> проверим применение установленного параметра SQL-командами:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image28.png" style="width:7.0259in;height:3.11458in" />

> ALTER SYSTEM SET pg_store_plans.log_triggers = off; SELECT pg_reload_conf();
>
> SHOW pg_store_plans.log_triggers;
>
> Рисунок 2.26 - Изменение параметра «pg_store_plans.log_triggers»

## Параметр «pg_store_plans.save»

> Параметр «pg_store_plans.save» имеет синтаксис:
>
> pg_store_plans.save (логическое значение)
>
> Устанавливаются значения:

- «on», «true», «yes», «1» – включен;

- «off», «false», «no», «0»- отключен. По умолчанию параметр включен.

> При выводе показываются значения «on»/«off».
>
> Параметр «pg_store_plans.save» управляет включением/отключением записи статистики плана при выключении сервера СУБД.

## Например

> Просмотрим установленное значение параметра «pg_store_plans.save» через SQL-команду:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image29.png" style="width:7.07712in;height:1.7825in" />

> SHOW pg_store_plans.save;
>
> Рисунок 2.27 – Просмотр значения по умолчанию параметра «pg_store_plans.save» Значение параметра соответствует значению по умолчанию.
>
> Установим новое значение равным «off», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:
>
> ALTER SYSTEM SET pg_store_plans.save = off; SELECT pg_reload_conf();
>
> SHOW pg_store_plans.save;
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image30.png" style="width:6.99359in;height:3.1625in" />
>
> Рисунок 2.28 – Установка нового значения параметра «pg_store_plans.save»

# ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

> В результате установки расширения сформируются два представления
>
> «pg_store_plans» (см. п. [3.1](#представление-pg_store_plans)) и «pg_store_plans_info» (см п. [3.2](#представление-pg_store_plans_info)).
>
> В представление «pg_store_plans» аккумулирует в себе основную информацию, а представление «pg_store_plans_info» содержит в себе статистику расширения
>
> «pg_store_plans».

## Представление «pg_store_plans»

> В представление «pg_store_plans» аккумулирует в себе строки для:

- каждого набора идентификаторов БД;

- идентификаторов пользователей;

- идентификаторов запросов.

> Столбцы представления описаны в таблице [3.1](#_bookmark18).
>
> <span id="_bookmark18" class="anchor"></span>Таблица 3.1 - Столбцы «pg_store_plans»

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
<th><blockquote>
<p><strong>Название</strong></p>
</blockquote></th>
<th colspan="2"><blockquote>
<p><strong>Тип</strong></p>
</blockquote></th>
<th colspan="2"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>userid</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>oid</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>OID пользователя, выполнившего оператор, получается из системного каталога «pg_authid.oid»</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>dbid</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>oid</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>OID базы данных, в которой был выполнен оператор получается из системного каталога «pg_database.oid»</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>queryid</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>int8</p>
</blockquote></td>
<td colspan="2" style="text-align: left;"><blockquote>
<p>Идентификатор запроса, сгенерированный ядром. Если для параметра calculate_query_id установлено значение "нет", pg_store_plan автоматически отключается</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>planid</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>int8</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Хэш-код плана, вычисленный из нормализованного представления плана</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>plan</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>text</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Текст репрезентативного плана. Формат задается параметром конфигурации pg_store_plans.plan_format.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>calls</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>int8</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Количество выполненных раз</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>total_time</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>float8</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Общее время нахождения в выписке по плану, в миллисекундах</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>min_time</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>float8</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Минимальное время</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>max_time</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>float8</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Максимальное время</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>mean_time</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>float8</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Среднее время</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>stddev_time</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>float8</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Стандартное время</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>rows</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>int8</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Общее количество строк, извлеченных или затронутых оператором с использованием плана</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2"><blockquote>
<p>№ изменения:</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></td>
<td><blockquote>
<p>Дата внесения изм:</p>
</blockquote></td>
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
<th><blockquote>
<p><strong>Название</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Тип</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>shared_blks_hit</p>
</blockquote></td>
<td><blockquote>
<p>int8</p>
</blockquote></td>
<td><blockquote>
<p>Общее количество попаданий в кэш общих блоков оператором, использующим план</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>shared_blks_read</p>
</blockquote></td>
<td><blockquote>
<p>int8</p>
</blockquote></td>
<td><blockquote>
<p>Общее количество общих блоков, прочитанных оператором с использованием плана</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>shared_blks_dirtied</p>
</blockquote></td>
<td><blockquote>
<p>int8</p>
</blockquote></td>
<td><blockquote>
<p>Общее количество общих блоков, загаженных оператором с использованием плана</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>shared_blks_written</p>
</blockquote></td>
<td><blockquote>
<p>int8</p>
</blockquote></td>
<td><blockquote>
<p>Общее количество общих блоков, записанных оператором с использованием плана</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>local_blks_hit</p>
</blockquote></td>
<td><blockquote>
<p>int8</p>
</blockquote></td>
<td><blockquote>
<p>Общее количество попаданий в локальный кэш блоков оператором, использующим план</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>local_blks_read</p>
</blockquote></td>
<td><blockquote>
<p>int8</p>
</blockquote></td>
<td><blockquote>
<p>Общее количество локальных блоков, прочитанных оператором с использованием плана</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>local_blks_dirtied</p>
</blockquote></td>
<td><blockquote>
<p>int8</p>
</blockquote></td>
<td><blockquote>
<p>Общее количество локальных блоков, загаженных оператором с использованием плана</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>local_blks_written</p>
</blockquote></td>
<td><blockquote>
<p>int8</p>
</blockquote></td>
<td><blockquote>
<p>Общее количество локальных блоков, записанных оператором с использованием плана</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>temp_blks_read</p>
</blockquote></td>
<td><blockquote>
<p>int8</p>
</blockquote></td>
<td><blockquote>
<p>Общее количество временных блоков, прочитанных оператором с использованием плана</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>temp_blks_written</p>
</blockquote></td>
<td><blockquote>
<p>int8</p>
</blockquote></td>
<td><blockquote>
<p>Общее количество временных блоков, записанных оператором с использованием плана</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>blk_read_time</p>
</blockquote></td>
<td><blockquote>
<p>float8</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Общее время, затраченное оператором, использующим план, на чтение блоков, в миллисекундах (если включена функция track_io_timing, иначе ноль)</p>
<p><strong>До версии компонента 1.8 включительно</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>blk_write_time</p>
</blockquote></td>
<td><blockquote>
<p>float8</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Общее время, затраченное оператором с использованием плана на запись блоков, в миллисекундах (если включена функция track_io_timing, иначе ноль)</p>
<p><strong>До версии компонента 1.8 включительно</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>shared_blk_read_time</p>
</blockquote></td>
<td><blockquote>
<p>float8</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Общее время, затраченное оператором на чтение разделяемых блоков, в миллисекундах (если включён track_io_timing, иначе ноль)</p>
<p><strong>Начиная с версии компонента 1.9</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>shared_blk_write_time</p>
</blockquote></td>
<td><blockquote>
<p>float8</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Общее время, затраченное оператором на запись разделяемых блоков, в миллисекундах (если включён track_io_timing, иначе ноль)</p>
<p><strong>Начиная с версии компонента 1.9</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>local_blk_read_time</p>
</blockquote></td>
<td><blockquote>
<p>float8</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Общее время, затраченное оператором на чтение локальных блоков, в миллисекундах (если включён track_io_timing, или ноль в противном случае). В версиях Postgres Pro ниже 17 всегда содержит ноль.</p>
<p><strong>Начиная с версии компонента 1.9</strong></p>
</blockquote></td>
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
<th><blockquote>
<p><strong>Название</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Тип</strong></p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>local_blk_write_time</p>
</blockquote></td>
<td><blockquote>
<p>float8</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Общее время, затраченное оператором на запись локальных блоков, в миллисекундах (если включён track_io_timing, или ноль в противном случае). В версиях Postgres Pro ниже 17 всегда содержит ноль.</p>
<p><strong>Начиная с версии компонента 1.9</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>temp_blk_read_time</p>
</blockquote></td>
<td><blockquote>
<p>float8</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Общее время, затраченное оператором, использующим план, на чтение блоков временного файла, в миллисекундах (если включена функция track_io_timing, в противном случае ноль)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>temp_blk_write_time</p>
</blockquote></td>
<td><blockquote>
<p>float8</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Общее время, затраченное оператором с использованием плана на запись блоков временного файла, в миллисекундах (если включена функция track_io_timing, иначе ноль)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>first_call</p>
</blockquote></td>
<td><blockquote>
<p>timestamp with time zone</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Временная метка для последнего вызова запроса с использованием этого плана</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>last_call</p>
</blockquote></td>
<td><blockquote>
<p>timestamp with time zone</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Отметка времени для последнего вызова запроса с использованием этого плана</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Представление «pg_store_plans_info»

> Статистика самого модуля «pg_store_plans» отслеживается и становится доступной через представление с именем «pg_store_plans_info». Это представление содержит только одну строку. Столбцы представления показаны в таблице [3.2](#_bookmark20).
>
> <span id="_bookmark20" class="anchor"></span>Таблица 3.2 - Столбцы «pg_store_plans_info»

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 14%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Имя</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Тип</strong></p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>dealloc</p>
</blockquote></td>
<td><blockquote>
<p>bigint</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Общее количество раз, когда записи pg_store_plans о наименее выполняемых инструкциях были освобождены из-за того, что наблюдалось больше отдельных инструкций, чем в pg_store_plans.max</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>stats_reset</p>
</blockquote></td>
<td><blockquote>
<p>timestamp with time zone</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Время последнего сброса всей статистики в представлении pg_store_plans</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Функции компонента

## Функция «pg_store_plans_reset»

> Функция «pg_store_plans_reset» имеет синтаксис:
>
> pg_store_plans_reset()returns void
>
> Функция сбрасывает всю статистику, собранную компонентом и выполняется от имени и с правами привилегированного пользователя postgres или с пользователя с атрибутом «SUPERUSER».

## Например

> Сброс статистики выполняется SQL-командой:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image31.png" style="width:7.05872in;height:1.5224in" />

> SELECT pg_store_plans_reset();
>
> Рисунок 3.1 – SQL-команда выполнения сброса статистики

## Функция «pg_store_plans»

> Функция «pg_store_plans» служит для выводы одноименного представления
>
> «pg_store_plans» и имеет синтаксис вызова:
>
> SELECT pg_store_plans();
>
> При этом выведенная информация не будет структурирована и целесообразно вывести требуемые столбы.
>
> Например
>
> Выведем содержимое представления «pg_store_plans» с столбцами userid, dbid, queryid, planid. SQL-команда будет следующей:
>
> SELECT userid, dbid, queryid, planid from pg_store_plans;
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image32.png" style="width:7.06023in;height:3.59in" />
>
> Рисунок 3.2 – Вывод представления «pg_store_plans»

## Функция «pg_store_plans_info»

> Функция «pg_store_plans_info» предназначена для просмотра одноимённого представления.

## Например

> Просмотр содержания представления выполняется SQL-командой:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image33.png" style="width:7.02862in;height:1.80167in" />

> SELECT pg_store_plans_info();
>
> Рисунок 3.3 - Просмотр содержания представления «pg_store_plans_info»

## Функция «pg_store_hash_query»

> Функция «pg_store_hash_query» вычисляет хеш-значение текста SQL-запроса и имеет синтаксис:
>
> pg_store_hash_query (query text)
>
> Например
>
> Вычислим хеш-значение текста SQL-запроса в созданную таблицу «orders». Для этого в теле SQL запроса указывается вызываемая функция (допускается указать схему данных в которой она расположена) и текст SQL-запроса к таблице:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image34.png" style="width:7.08017in;height:1.77281in" />

> SELECT public.pg_store_plans_hash_query('select \* FROM orders');
>
> Рисунок 3.4 – Вызов функции «pg_store_hash_query»

## Функция «pg_store_plans_textplan»

> Функция «pg_store_plans_textplan» генерирует обычное текстовое представление из необработанного представления плана в «pg_store_plans», при установленном значении 'raw' параметра «pg_store_plans.plan_formats» (см. п. [2.1.3](#параметр-pg_store_plans.plan_format)).
>
> Поскольку текст плана результатов генерируется из представления json, он может немного отличаться от того, что вы получите непосредственно из команды «EXPLAIN».
>
> Функция имеет синтаксис:
>
> pg_store_plans_textplan(query text) returns text

## Функция «pg_store_plans_xmlplan»

> Функция «pg_store_plans_xmlplan» создает XML-представление из необработанного представления плана в «pg_store_plans», при установленном значении 'raw' параметра
>
> «pg_store_plans.plan_formats» (см. п. [2.1.3](#параметр-pg_store_plans.plan_format)).
>
> Функция имеет синтаксис:
>
> pg_store_plans_xmlplan(query text) returns text

## Функция «pg_store_plans_yamlplan»

> Функция «pg_store_plans_yamlplan» генерирует представление YAML из необработанного представления плана в «pg_store_plans», при установленном значении 'raw' параметра «pg_store_plans.plan_formats» (см. п. [2.1.3](#параметр-pg_store_plans.plan_format)).
>
> Функция имеет синтаксис:
>
> pg_store_plans_yamlplan(query text) returns text

# ПРИМЕР ВЫВОДА

> В качестве примера использования компонента будет использована тестовая таблица, к которой будет создан простейший план запроса. Данному плану запроса будет дана качественная оценка компонентом «pg_store_plans».

## Создание тестовой таблицы

> В БД создать таблицу «orders»:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image35.png" style="width:7.20548in;height:1.31615in" />

> CREATE TABLE orders(id serial PRIMARY KEY, customer_id integer NOT NULL, product text NOT NULL, price integer NOT NULL);
>
> Рисунок 4.1 – Создание таблицы «orders» Добавить 1000 записей в таблицу «orders»:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image36.png" style="width:7.15163in;height:1.65479in" />

> INSERT INTO orders (customer_id, product, price)
>
> SELECT (random() \* 3 + 1)::integer, 'product', (random() \* 1000 + 1)::integer
>
> FROM generate_series(1, 1000);
>
> Рисунок 4.2 – Команда добавления записей в таблицу

## Вывод оценки качества плана

> Для вывода оценки качества плана потребуется:

- установить формат вывода (см. п. [2.1.3](#параметр-pg_store_plans.plan_format));

- перезагрузить конфигурацию СУБД;

- просмотреть установленные изменения;

- очистить имеющуюся статистику (см. п. [3.3.1](#функция-pg_store_plans_reset)) ; SQL – командами:

> ALTER SYSTEM SET pg_store_plans.plan_format = 'text'; SELECT pg_reload_conf();
>
> SHOW pg_store_plans.plan_format; SELECT pg_store_plans_reset();
>
> В качестве запроса для анализа будет использоваться SQL-запрос к таблице «orders»:
>
> SELECT \* FROM orders;
>
> Создать план запроса с опциями:

- «ANALYZE», которая выполняет фактический запрос в реальном времени для сбора и подготовки плана выполнения;

- «SUMMARY» - добавляет итоговую информацию в план выполнения запроса; SQL – командой:

> EXPLAIN (ANALYZE, SUMMARY FALSE) SELECT \* FROM orders;

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image37.png" style="width:7.16033in;height:1.78208in" />

> Рисунок 4.3 – Сознание плана выполнения запроса
>
> Установить расширенный вывод в СУБД:
>
> \x
>
> Вывести характеристики плана выполнения запроса:

<img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image38.png" style="width:7.08087in;height:3.09167in" />

> SELECT
>
> queryid, plan, calls, total_time, min_time,
>
> max_time, mean_time, stddev_time from pg_store_plans LIMIT 1;
>
> Рисунок 4.4 – Вывод оценки выполнения плана запроса
>
> Вывод оценочной информации в SQL-запросе может дополняться строками из представления «pg_store_plans», приведенными в таблице [3.1](#_bookmark18).

# ОБНОВЛЕНИЕ КОМПОНЕНТА

## Обновление компонента pg_store_plans в ОС GNU/Linux

> Предварительные условия: выполнено обновление СУБД «Jatoba» до версии 18 согласно документу «Руководство по обновлению СУБД Jatoba» 643.72410666.00067-08 93 01.
>
> <img src="../docs/assets/images/com18.3.1/pg_store_plans/media/image1.png" style="width:0.25138in;height:0.2498in" />При обновлении СУБД «Jatoba» до версии 18 необходимо отключить функцию подсчета контрольных сумм при инициализации каталога данных. Сведения о процедурах обновления до СУБД «Jatoba» 18 изложены в документе
>
> «Руководство по обновлению» 643.72410666.00067-08 93 01
>
> Для обновления компонента pg_store_plans с версии 1.8 включительно до версии 1.9 необходимо выполнить следующие шаги:

1)  Остановить службу СУБД «Jatoba»:

> \# systemctl stop jatoba-18

2)  Установить новую версию компонента командой:

> \# apt install jatoba18-pg-store-plans

3)  В конфигурационный файл /var/lib/jatoba/18/data/postgresql.conf добавить параметры:

> shared_preload_libraries = 'pg_store_plans, pg_stat_statements' pg_store_plans.max = 10000
>
> pg_store_plans.track = all

4)  Выполнить запуск обновлённой СУБД «Jatoba» 18:

> \# systemctl start jatoba-18 && systemctl status jatoba-18

5)  Обновить версию расширения в БД:

> ALTER EXTENSION pg_store_plans UPDATE;
>
> На данном шаге обновление компонента pg_store_plans завершено.

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
