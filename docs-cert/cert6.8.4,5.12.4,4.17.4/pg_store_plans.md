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
<p><strong>Руководство по настройке. Часть 32.<br />
Контроль выполненных планов запросов.<br />
Компонент «pg_store_plans»</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-32</strong></td>
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

В документе приведены сведения, необходимые для установки и эксплуатации компонента «pg_store_plans» (далее по тексту – «компонент»), предназначенного для контроля выполнения запросов.

Настоящее руководство предназначено для администраторов СУБД.

Версия компонента — 1.8

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image1.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image2.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонента [4](#назначение-компонента)](#назначение-компонента)

[1.1. Условия применения [4](#условия-применения)](#условия-применения)

[2. Установка и настройка [5](#установка-и-настройка)](#установка-и-настройка)

[2.1. Параметры конфигурации [6](#параметры-конфигурации)](#параметры-конфигурации)

[2.1.1. Параметр «pg_store_plans.max» [6](#параметр-pg_store_plans.max)](#параметр-pg_store_plans.max)

[2.1.2. Параметр «pg_store_plans.track» [8](#параметр-pg_store_plans.track)](#параметр-pg_store_plans.track)

[2.1.3. Параметр «pg_store_plans.plan_format» [9](#параметр-pg_store_plans.plan_format)](#параметр-pg_store_plans.plan_format)

[2.1.4. Параметр pg_store_plans.max_plan_length [11](#параметр-pg_store_plans.max_plan_length)](#параметр-pg_store_plans.max_plan_length)

[2.1.5. Параметр «pg_store_plans.plan_storage» [12](#параметр-pg_store_plans.plan_storage)](#параметр-pg_store_plans.plan_storage)

[2.1.6. Параметр «pg_store_plans.min_duration» [14](#параметр-pg_store_plans.min_duration)](#параметр-pg_store_plans.min_duration)

[2.1.7. Параметр «pg_store_plans.log_analyze» [15](#параметр-pg_store_plans.log_analyze)](#параметр-pg_store_plans.log_analyze)

[2.1.8. Параметр «pg_store_plans.log_buffers» [17](#параметр-pg_store_plans.log_buffers)](#параметр-pg_store_plans.log_buffers)

[2.1.9. Параметр «pg_store_plans.log_timing» [18](#параметр-pg_store_plans.log_timing)](#параметр-pg_store_plans.log_timing)

[2.1.10. Параметр «pg_store_plans.log_triggers» [20](#параметр-pg_store_plans.log_triggers)](#параметр-pg_store_plans.log_triggers)

[2.1.11. Параметр «pg_store_plans.save» [21](#параметр-pg_store_plans.save)](#параметр-pg_store_plans.save)

[3. Функциональные возможности компонента [24](#функциональные-возможности-компонента)](#функциональные-возможности-компонента)

[3.1. +Представление «pg_store_plans» [24](#представление-pg_store_plans)](#представление-pg_store_plans)

[3.2. Представление «pg_store_plans_info» [26](#представление-pg_store_plans_info)](#представление-pg_store_plans_info)

[3.3. Функции компонента [26](#функции-компонента)](#функции-компонента)

[3.3.1. Функция «pg_store_plans_reset» [26](#функция-pg_store_plans_reset)](#функция-pg_store_plans_reset)

[3.3.2. Функция «pg_store_plans» [27](#функция-pg_store_plans)](#функция-pg_store_plans)

[3.3.3. Функция «pg_store_plans_info» [27](#функция-pg_store_plans_info)](#функция-pg_store_plans_info)

[3.3.4. Функция «pg_store_hash_query» [28](#функция-pg_store_hash_query)](#функция-pg_store_hash_query)

[3.3.5. Функция «pg_store_plans_textplan» [28](#функция-pg_store_plans_textplan)](#функция-pg_store_plans_textplan)

[3.3.6. Функция «pg_store_plans_xmlplan» [29](#функция-pg_store_plans_xmlplan)](#функция-pg_store_plans_xmlplan)

[3.3.7. Функция «pg_store_plans_yamlplan» [29](#функция-pg_store_plans_yamlplan)](#функция-pg_store_plans_yamlplan)

[4. Пример вывода [30](#пример-вывода)](#пример-вывода)

[4.1. Создание тестовой таблицы [30](#создание-тестовой-таблицы)](#создание-тестовой-таблицы)

[4.2. Вывод оценки качества плана [31](#вывод-оценки-качества-плана)](#вывод-оценки-качества-плана)

[Перечень сокращений [33](#_Toc154068517)](#_Toc154068517)

# Назначение компонента

Компонент «pg_store_plans» предназначен для контроля выполнения планов запросов статистическими методами всех операторов SQL, выполняемых сервером СУБД.

## Условия применения

Компонент «pg_store_plans» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем Windows и GNU/Linux.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image1.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>В текущей реализации компонента не поддерживается управление через компонент пользовательского веб-интерфейса для администраторов<br />
«Jatoba data safe».</p>
<p>Ограничений по совместимости с другими компонентами нет.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# Установка и настройка

Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

Для установки компонента в разделе «Shared Library Preloading» конфигурационного файла «postgresql.conf» прописать следующую строку:

> shared_preload_libraries = 'pg_store_plans'

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image3.png" style="width:7.07469in;height:1.58261in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-17 23-05-01.png" />

Рисунок . – Параметры конфигурационного файла «postgresql.conf»

Сохранив изменения и перезагрузив СУБД станет доступной установка расширения выполнением SQL-команды:

> CREATE EXTENSION pg_store_plans;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image4.png" style="width:7.04103in;height:1.93913in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-17 23-12-37.png" />

Рисунок . – Установка расширения «pg_store_plans»

Корректность установки расширения выполняется SQL-командой

> \dx

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image5.png" style="width:7.07415in;height:2.14783in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-17 23-15-06.png" />

Рисунок . – Проверка установленных расширений

## Параметры конфигурации 

Параметры конфигурации компонента имеют два способа установки:

- 

через конфигурационный файл «postgresql.conf», как представлено на рисунке Рисунок 2.4.<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image3.png" style="width:7.07697in;height:1.96522in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-17 23-05-01.png" />

Рисунок . – Параметры конфигурации в конфигурационном файле «postgresql.conf»

- 

> через SQL-команды: ALTER SYSTEM SET \[имя параметра конфигурации\];
>
> SELECT pg_reload_conf();

Параметры компонента устанавливаются от имени и с правами привилегированного пользователя postgres или с пользователя с атрибутом «SUPERUSER».

### Параметр «pg_store_plans.max» 

Параметр «pg_store_plans.max» имеет синтаксис:

> pg_store_plans.max (целое число)

Значение по умолчанию — 1000

Параметр «pg_store_plans.max» — это максимальное количество планов, отслеживаемых компонентом. Это максимальное количество строк в представлении «pg_store_plans» (см. п. 3.1).

Параметр задается только при запуске сервера.

**Например**

Просмотрим установленное значение «pg_store_plans.max» через SQL-команду

> SHOW pg_store_plans.max;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image6.png" style="width:6.95517in;height:1.76522in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 05-05-11.png" />

Рисунок . – Просмотр параметра по умолчанию

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным 10000, перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

> ALTER SYSTEM SET pg_store_plans.max = 10000;
>
> SELECT pg_reload_conf();
>
> SHOW pg_store_plans.max;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image7.png" style="width:7.08681in;height:3.13185in" />

Рисунок . – Установка параметра «pg_store_plans.max»

### Параметр «pg_store_plans.track» 

Параметр «pg_store_plans.track» имеет синтаксис:

> pg_store_plans.track (перечисление)

Значение по умолчанию — «top».

Параметр «pg_store_plans.track» указывает, какие операторы учитываются компонентом.

Устанавливаются следующие значения:

- 
- 

| «top» - отслеживание операторов верхнего уровня (выданные непосредственно клиентами);«all» - отслеживание вложенных операторов (например, операторы, вызываемые внутри функций);<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image2.png" style="width:0.25in;height:0.25in" /> | При использовании значения «all» команды «CREATE EXTENSION» и «ALTER EXTENSION» игнорируются |
|----|----|

- 

«none» - отключение сбора статистики операторов. **Например**

Просмотрим установленное значение «pg_store_plans.max» через SQL-команду:

> SHOW pg_store_plans.track;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image8.png" style="width:7.05125in;height:1.8087in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 05-57-35.png" />

Рисунок . - Просмотр установленного значения параметра «pg_store_plans.max»

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «all», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

> ALTER SYSTEM SET pg_store_plans.track = 'all';
>
> SELECT pg_reload_conf();
>
> SHOW pg_store_plans.track;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image9.png" style="width:7.08494in;height:3.18589in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 05-59-27.png" />

Рисунок . – Установка нового значения параметра «pg_store_plans.max»

### Параметр «pg_store_plans.plan_format»

Параметр «pg_store_plans.plan_format» имеет синтаксис:

> pg_store_plans.plan_format (перечисление)

Значение по умолчанию — text.

Параметр «pg_store_plans.plan_format» устанавливает форматы планов.

Устанавливаются следующие значения:

- 
- 
- 
- 
- 

| «text»; «json»; «xml»; «yaml»; «raw». <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image2.png" style="width:0.25in;height:0.25in" /> | Значение «raw» используется, когда требуется получить внутреннее представление, которое можно передать функция компонента |
|----|----|

**Например**

Просмотрим установленное значение параметра «pg_store_plans.max» через SQL-команду:

> SHOW pg_store_plans.plan_format;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image10.png" style="width:7.12563in;height:1.8087in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 07-00-10.png" />

Рисунок . – Просмотр значения параметра «pg_store_plans.max»

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «raw», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

> ALTER SYSTEM SET pg_store_plans.plan_format = 'raw';
>
> SELECT pg_reload_conf();
>
> SHOW pg_store_plans.plan_format;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image11.png" style="width:6.96476in;height:3.1543in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 07-01-45.png" />

Рисунок . – Установка нового значения параметра «pg_store_plans.max»

### Параметр pg_store_plans.max_plan_length

Параметр «pg_store_plans.max_plan_length» имеет синтаксис:

> pg_store_plans.max_plan_length (целое число)

Значение по умолчанию — 5000

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image2.png" style="width:0.25in;height:0.25in" /> | Устанавливается только после значения «pg_store_plans.plan_format» (см. п. 2.1.3) |
|----|----|

Параметр «pg_store_plans.max_plan_length» устанавливает максимальную длину планов в необработанном (сокращенном формате JSON) для хранения в байтах. Этот параметр можно задать только при запуске сервера.

**Например**

Просмотрим установленное значение «pg_store_plans.max_plan_length» через SQL-команду:

> SHOW pg_store_plans.max_plan_length;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image12.png" style="width:7.04065in;height:1.74783in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 07-32-01.png" />

Рисунок . – SQL-команда просмотра параметра «pg_store_plans.max_plan_length»

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным 6000 SQL-командой:

> ALTER SYSTEM SET pg_store_plans.max_plan_length = 6000;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image13.png" style="width:7.1355in;height:1.08696in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 07-55-42.png" />

Рисунок . – SQL-команда установки нового значения параметра «pg_store_plans.max_plan_length»

Перезагрузим СУБД.

Проверим применение установленного параметра SQL-командой:

> SHOW pg_store_plans.max_plan_length;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image14.png" style="width:7.07898in;height:1.8087in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 07-54-26.png" />

Рисунок . - SQL-команда просмотра нового значения параметра «pg_store_plans.max_plan_length»

### Параметр «pg_store_plans.plan_storage» 

Параметр «pg_store_plans.plan_storage» имеет синтаксис:

> pg_store_plans.plan_storage (перечисление)

Значение по умолчанию — «файл».

Параметр «pg_store_plans.plan_storage» устанавливает метод хранения текстрв планов во время работы сервера.

Устанавливаются следующие значения:

- 
- 

«file» - хранение текстов планов сохраняются во временном файле;«shmem» - хранение текстов планов в памяти.**Например**

Просмотрим установленное значение «pg_store_plans.plan_storage» через SQL-команду:

> SHOW pg_store_plans.plan_storage;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image15.png" style="width:7.00175in;height:1.8in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 08-07-14.png" />

Рисунок . – SQL-команда установленного значения по умолчанию параметра «pg_store_plans.plan_storage»

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «shmem» SQL-командой:

> ALTER SYSTEM SET pg_store_plans.plan_storage = 'shmem';

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image16.png" style="width:7.11304in;height:1.10278in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 08-22-35.png" />

Рисунок . - SQL-команда установки нового значения параметра «pg_store_plans.plan_storage»

Перезагрузим СУБД.

Проверим применение установленного параметра SQL-командой:

> SHOW pg_store_plans.plan_storage;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image17.png" style="width:7.03517in;height:1.77391in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 08-13-53.png" />

Рисунок . – Просмотр установленного параметра «pg_store_plans.plan_storage»

### Параметр «pg_store_plans.min_duration»

Параметр «pg_store_plans.min_duration» имеет синтаксис:

> pg_store_plans.min_duration (целое число)

Значение по умолчанию - «0».

Параметр «pg_store_plans.min_duration» устанавливает минимальное время выполнения оператора в миллисекундах. Установленное значение по умолчанию регистрирует все планы.

Например

Просмотрим установленное значение параметра «pg_store_plans.min_duration» через SQL-команду:

> SHOW pg_store_plans.min_duration;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image18.png" style="width:7.02506in;height:1.81739in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 21-57-53.png" />

Рисунок . – Просмотр текущего значения параметра «pg_store_plans.min_duration»

Установим новое значение равным «1», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

> ALTER SYSTEM SET pg_store_plans.min_duration = 1;
>
> SELECT pg_reload_conf();
>
> SHOW pg_store_plans.min_duration;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image19.png" style="width:6.99021in;height:3.09565in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 22-01-33.png" />

Рисунок . – Установка нового значения параметра «pg_store_plans.min_duration»

### Параметр «pg_store_plans.log_analyze» 

Параметр «pg_store_plans.log_analyze» имеет синтаксис:

> pg_store_plans.log_analyze (логическое значение)

Устанавливаются значения:

- 
- 

«on», «true», «yes», «1» – включен;«off», «false», «no», «0»- отключен.По умолчанию параметр отключен.

При выводе показываются значения «on»/«off».

Параметр «pg_store_plans.log_analyze» устанавливает включение в план вывода команды «EXPLAIN» с параметром «ANALYZE», а не только команду «EXPLAIN».

**Например**

Просмотрим установленное значение параметра «pg_store_plans.max» через SQL-команду:

> SHOW pg_store_plans.log_analyze;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image20.png" style="width:7.07567in;height:1.75652in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 22-18-39.png" />

Рисунок . – Просмотр значения по умолчанию параметра «pg_store_plans.log_analyze»

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «on», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

> ALTER SYSTEM SET pg_store_plans.log_analyze = on;
>
> SELECT pg_reload_conf();
>
> SHOW pg_store_plans.log_analyze;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image21.png" style="width:7.0527in;height:3.13043in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 22-22-57.png" />

Рисунок . – Установка нового значения параметра «pg_store_plans.log_analyze»

### Параметр «pg_store_plans.log_buffers» 

Параметр «pg_store_plans.log_buffers» имеет синтаксис:

> pg_store_plans.log_buffers (логическое значение)

Устанавливаются значения:

- 
- 

«on», «true», «yes», «1» – включен;«off», «false», «no», «0»- отключен.По умолчанию параметр отключен.

При выводе показываются значения «on»/«off».

Параметр «pg_store_plans.log_buffers» устанавливает включение в план вывода команду «EXPLAIN» с параметром «ANALYZE, BUFFERS», а не только команду «EXPLAIN». Значения, выводимые с параметром «BUFFERS», детализируют информацию на какие части запроса приходится большинство операций ввода-вывода.

**Например**

Просмотрим установленное значение параметра «pg_store_plans.log_buffers» через SQL-команду:

> SHOW pg_store_plans.log_buffers;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image22.png" style="width:7.06087in;height:1.77618in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 23-25-34.png" />

Рисунок . – Вывод значения параметра «pg_store_plans.log_buffers» по умолчанию

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «on», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

> ALTER SYSTEM SET pg_store_plans.log_buffers = on;
>
> SELECT pg_reload_conf();
>
> SHOW pg_store_plans.log_buffers;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image23.png" style="width:6.96249in;height:3.12174in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 23-26-55.png" />

Рисунок . – Изменение параметра «pg_store_plans.log_buffers»

### Параметр «pg_store_plans.log_timing» 

Параметр «pg_store_plans.log_timing» имеет синтаксис:

> pg_store_plans.log_timing (логическое значение)

Устанавливаются значения:

- 
- 

«on», «true», «yes», «1» – включен;«off», «false», «no», «0»- отключен.По умолчанию параметр включен.

При выводе показываются значения «on»/«off».

Параметр «pg_store_plans.log_timing» управляет включением/отключением записи точного времени выполнения для каждого узла выполнения. Его целесообразно использовать при включенном параметре «pg_store_plans.log_analyze» (см. п. 2.1.7).

Запись временных показателей может значительно увеличить время выполнение запроса. Для отображения фактического отображения строк запроса, параметр отключается.

**Например**

Просмотрим установленное значение параметра «pg_store_plans.log_timing» через SQL-команду:

> SHOW pg_store_plans.log_timing;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image24.png" style="width:7.17538in;height:1.8in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 23-58-23.png" />

Рисунок . – Отображение установленного значения параметра «pg_store_plans.log_timing» по умолчанию

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «off», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

> ALTER SYSTEM SET pg_store_plans.log_timing = off;
>
> SELECT pg_reload_conf();
>
> SHOW pg_store_plans.log_timing;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image25.png" style="width:7.00721in;height:3.14701in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-19 00-00-12.png" />

Рисунок . - Установка нового значения параметра«pg_store_plans.log_timing»

### Параметр «pg_store_plans.log_triggers»

Параметр «pg_store_plans.log_triggers» имеет синтаксис:

> pg_store_plans.log_triggers (логическое значение)

Устанавливаются значения:

- 
- 

«on», «true», «yes», «1» – включен;«off», «false», «no», «0»- отключен.По умолчанию параметр включен.

При выводе показываются значения «on»/«off».

Параметр «pg_store_plans.log_triggers» управляет включением/отключением записи выполнения триггера в записываемые планы.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image2.png" style="width:0.25in;height:0.25in" /> | Параметр не функционирует при отключённом параметре «pg_store_plans.log_analyze» (см. п. 2.1.7) |
|----|----|

**Например**

Просмотрим установленное значение параметра «pg_store_plans.log_triggers» через SQL-команду:

> SHOW pg_store_plans.log_buffers;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image26.png" style="width:7.01456in;height:1.85217in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-19 01-34-59.png" />

Рисунок . – Просмотр значения параметра «pg_store_plans.log_triggers» по умолчанию

Установим новое значение равным «off», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

> ALTER SYSTEM SET pg_store_plans.log_triggers = off;
>
> SELECT pg_reload_conf();
>
> SHOW pg_store_plans.log_triggers;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image27.png" style="width:7.00281in;height:3.10435in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-19 01-38-22.png" />

Рисунок . - Изменение параметра «pg_store_plans.log_triggers»

### Параметр «pg_store_plans.save»

Параметр «pg_store_plans.save» имеет синтаксис:

> pg_store_plans.save (логическое значение)

Устанавливаются значения:

- 
- 

«on», «true», «yes», «1» – включен;«off», «false», «no», «0»- отключен.По умолчанию параметр включен.

При выводе показываются значения «on»/«off».

Параметр «pg_store_plans.save» управляет включением/отключением записи статистики плана при выключении сервера СУБД.

**Например**

Просмотрим установленное значение параметра «pg_store_plans.save» через SQL-команду:

> SHOW pg_store_plans.save;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image28.png" style="width:7.06087in;height:1.7784in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-19 02-07-25.png" />

Рисунок . – Просмотр значения по умолчанию параметра «pg_store_plans.save»

Значение параметра соответствует значению по умолчанию.

Установим новое значение равным «off», перезагрузим конфигурацию СУБД и проверим применение установленного параметра SQL-командами:

> ALTER SYSTEM SET pg_store_plans.save = off;
>
> SELECT pg_reload_conf();
>
> SHOW pg_store_plans.save;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image29.png" style="width:7.01883in;height:3.17391in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-19 02-12-18.png" />

Рисунок . – Установка нового значения параметра «pg_store_plans.save»

# Функциональные возможности компонента

В результате установки расширения сформируются два представления «pg_store_plans» (см. п. 3.1) и «pg_store_plans_info» (см п. 3.2).

В представление «pg_store_plans» аккумулирует в себе основную информацию, а представление «pg_store_plans_info» содержит в себе статистику расширения «pg_store_plans».

## Представление «pg_store_plans»

В представление «pg_store_plans» аккумулирует в себе строки для:

- 
- 
- 

каждого набора идентификаторов БД;идентификаторов пользователей; идентификаторов запросов.Столбцы представления описаны в таблице Таблица 3.1.

| **Название** | **Тип** | **Описание** |
|----|----|----|
| userid | oid | OID пользователя, выполнившего оператор, получается из системного каталога «pg_authid.oid» |
| dbid | oid | OID базы данных, в которой был выполнен оператор получается из системного каталога «pg_database.oid» |
| queryid | int8 | Идентификатор запроса, сгенерированный ядром. Если для параметра calculate_query_id установлено значение "нет", pg_store_plan автоматически отключается |
| planid | int8 | Хэш-код плана, вычисленный из нормализованного представления плана |
| plan | text | Текст репрезентативного плана. Формат задается параметром конфигурации pg_store_plans.plan_format. |
| calls | int8 | Количество выполненных раз |
| total_time | float8 | Общее время нахождения в выписке по плану, в миллисекундах |
| min_time | float8 | Минимальное время |
| max_time | float8 | Максимальное время |
| mean_time | float8 | Среднее время |
| stddev_time | float8 | Стандартное время |
| rows | int8 | Общее количество строк, извлеченных или затронутых оператором с использованием плана |
| shared_blks_hit | int8 | Общее количество попаданий в кэш общих блоков оператором, использующим план |
| shared_blks_read | int8 | Общее количество общих блоков, прочитанных оператором с использованием плана |
| shared_blks_dirtied | int8 | Общее количество общих блоков, загаженных оператором с использованием плана |
| shared_blks_written | int8 | Общее количество общих блоков, записанных оператором с использованием плана |
| local_blks_hit | int8 | Общее количество попаданий в локальный кэш блоков оператором, использующим план |
| local_blks_read | int8 | Общее количество локальных блоков, прочитанных оператором с использованием плана |
| local_blks_dirtied | int8 | Общее количество локальных блоков, загаженных оператором с использованием плана |
| local_blks_written | int8 | Общее количество локальных блоков, записанных оператором с использованием плана |
| temp_blks_read | int8 | Общее количество временных блоков, прочитанных оператором с использованием плана |
| temp_blks_written | int8 | Общее количество временных блоков, записанных оператором с использованием плана |
| blk_read_time | float8 | Общее время, затраченное оператором, использующим план, на чтение блоков, в миллисекундах (если включена функция track_io_timing, иначе ноль) |
| blk_write_time | float8 | Общее время, затраченное оператором с использованием плана на запись блоков, в миллисекундах (если включена функция track_io_timing, иначе ноль) |
| temp_blk_read_time | float8 | Общее время, затраченное оператором, использующим план, на чтение блоков временного файла, в миллисекундах (если включена функция track_io_timing, в противном случае ноль) |
| temp_blk_write_time | float8 | Общее время, затраченное оператором с использованием плана на запись блоков временного файла, в миллисекундах (если включена функция track_io_timing, иначе ноль) |
| first_call | timestamp with time zone | Временная метка для последнего вызова запроса с использованием этого плана |
| last_call | timestamp with time zone | Отметка времени для последнего вызова запроса с использованием этого плана |

Таблица . - Столбцы «pg_store_plans»

## Представление «pg_store_plans_info»

Статистика самого модуля «pg_store_plans» отслеживается и становится доступной через представление с именем «pg_store_plans_info». Это представление содержит только одну строку. Столбцы представления показаны в таблице Таблица 3.2.

| **Имя** | **Тип** | **Описание** |
|----|----|----|
| dealloc | bigint | Общее количество раз, когда записи pg_store_plans о наименее выполняемых инструкциях были освобождены из-за того, что наблюдалось больше отдельных инструкций, чем в pg_store_plans.max |
| stats_reset | timestamp with time zone | Время последнего сброса всей статистики в представлении pg_store_plans |

Таблица 3.2 - Столбцы «pg_store_plans_info»

## Функции компонента

### Функция «pg_store_plans_reset»

Функция «pg_store_plans_reset» имеет синтаксис:

> pg_store_plans_reset()returns void

Функция сбрасывает всю статистику, собранную компонентом и выполняется от имени и с правами привилегированного пользователя postgres или с пользователя с атрибутом «SUPERUSER».

**Например**

Сброс статистики выполняется SQL-командой:

> SELECT pg_store_plans_reset();

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image30.png" style="width:7.05368in;height:1.52174in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 02-17-46.png" />

Рисунок . – SQL-команда выполнения сброса статистики

### Функция «pg_store_plans»

Функция «pg_store_plans» служит для выводы одноименного представления «pg_store_plans» и имеет синтаксис вызова:

> SELECT pg_store_plans();

При этом выведенная информация не будет структурирована и целесообразно вывести требуемые столбы.

Например

Выведем содержимое представления «pg_store_plans» с столбцами userid, dbid, queryid, planid. SQL-команда будет следующей:

> SELECT userid, dbid, queryid, planid from pg_store_plans;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image31.png" style="width:7.06277in;height:3.5913in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-20 02-24-25.png" />

Рисунок . – Вывод представления «pg_store_plans»

### Функция «pg_store_plans_info»

Функция «pg_store_plans_info» предназначена для просмотра одноимённого представления.

**Например**

Просмотр содержания представления выполняется SQL-командой:

> SELECT pg_store_plans_info();

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image32.png" style="width:7.05339in;height:1.8087in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-18 03-48-47.png" />

Рисунок . - Просмотр содержания представления «pg_store_plans_info»

### Функция «pg_store_hash_query»

Функция «pg_store_hash_query» вычисляет хеш-значение текста SQL-запроса и имеет синтаксис:

> pg_store_hash_query (query text)

Например

Вычислим хеш-значение текста SQL-запроса в созданную таблицу «orders». Для этого в теле SQL запроса указывается вызываемая функция (допускается указать схему данных в которой она расположена) и текст SQL-запроса к таблице:

> SELECT public.pg_store_plans_hash_query('select \* FROM orders');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image33.png" style="width:7.07826in;height:1.77332in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-19 22-39-37.png" />

Рисунок . – Вызов функции «pg_store_hash_query»

### Функция «pg_store_plans_textplan» 

Функция «pg_store_plans_textplan» генерирует обычное текстовое представление из необработанного представления плана в «pg_store_plans», при установленном значении 'raw' параметра «pg_store_plans.plan_formats» (см. п. 2.1.3).

Поскольку текст плана результатов генерируется из представления json, он может немного отличаться от того, что вы получите непосредственно из команды «EXPLAIN».

Функция имеет синтаксис:

> pg_store_plans_textplan(query text) returns text

### Функция «pg_store_plans_xmlplan»

Функция «pg_store_plans_xmlplan» создает XML-представление из необработанного представления плана в «pg_store_plans», при установленном значении 'raw' параметра «pg_store_plans.plan_formats» (см. п. 2.1.3).

Функция имеет синтаксис:

> pg_store_plans_xmlplan(query text) returns text

### Функция «pg_store_plans_yamlplan»

Функция «pg_store_plans_yamlplan» генерирует представление YAML из необработанного представления плана в «pg_store_plans», при установленном значении 'raw' параметра «pg_store_plans.plan_formats» (см. п. 2.1.3).

Функция имеет синтаксис:

> pg_store_plans_yamlplan(query text) returns text

# Пример вывода 

В качестве примера использования компонента будет использована тестовая таблица, к которой будет создан простейший план запроса. Данному плану запроса будет дана качественная оценка компонентом «pg_store_plans».

## Создание тестовой таблицы

В БД создать таблицу «orders»:

> CREATE TABLE orders(id serial PRIMARY KEY, customer_id integer NOT NULL, product text NOT NULL, price integer NOT NULL);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image34.png" style="width:7.19792in;height:1.31476in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-19 06-36-26.png" />

Рисунок . – Создание таблицы «orders»

Добавить 1000 записей в таблицу «orders»:

> INSERT INTO orders (customer_id, product, price)
>
> SELECT (random() \* 3 + 1)::integer, 'product', (random() \* 1000 + 1)::integer
>
> FROM generate_series(1, 1000);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image35.png" style="width:7.125in;height:1.64968in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-19 06-36-54.png" />

Рисунок . – Команда добавления записей в таблицу

## Вывод оценки качества плана

Для вывода оценки качества плана потребуется:

- 
- 
- 
- 

установить формат вывода (см. п. 2.1.3);перезагрузить конфигурацию СУБД;просмотреть установленные изменения;очистить имеющуюся статистику (см. п. 3.3.1) ;SQL – командами:

> ALTER SYSTEM SET pg_store_plans.plan_format = 'text';
>
> SELECT pg_reload_conf();
>
> SHOW pg_store_plans.plan_format;
>
> SELECT pg_store_plans_reset();

В качестве запроса для анализа будет использоваться SQL-запрос к таблице «orders»:

> SELECT \* FROM orders;

Создать план запроса с опциями:

- 
- 

«ANALYZE», которая выполняет фактический запрос в реальном времени для сбора и подготовки плана выполнения;«SUMMARY» - добавляет итоговую информацию в план выполнения запроса;SQL – командой:

> EXPLAIN (ANALYZE, SUMMARY FALSE) SELECT \* FROM orders;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image36.png" style="width:7.12576in;height:1.77391in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-19 06-56-24.png" />

Рисунок . – Сознание плана выполнения запроса

Установить расширенный вывод в СУБД:

> \x

Вывести характеристики плана выполнения запроса:

> SELECT
>
> queryid, plan, calls,  
> total_time, min_time,  
> max_time, mean_time, stddev_time  
> from pg_store_plans LIMIT 1;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_store_plans/media/image37.png" style="width:7.07009in;height:3.08696in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-21 04-37-47.png" />

Рисунок . – Вывод оценки выполнения плана запроса

Вывод оценочной информации в SQL-запросе может дополняться строками из представления «pg_store_plans», приведенными в таблице Таблица 3.1.

# 

| <span id="_Toc154068517" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language |
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
