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
<p><strong>Руководство по настройке. Часть 3.<br />
Формирование отчетов по журналам СУБД.<br />
Компонент «pgBadger»</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-03</strong></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">Листов 30</td>
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

В документе приведены сведения, необходимые для формирования аналитической отчетности по заданным параметрам, для выявления потенциальных проблем с системой управления базами данных «Jatoba» (далее – СУБД «Jatoba»). Настоящее руководство предназначено для администратора СУБД «Jatoba».

Администратор СУБД «Jatoba» должен иметь навыки по работе с системами управления базами данных «PostgreSQL» или защищенной СУБД «Jatoba»  
(ООО «Газинформсервис»).

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:</p>
<ul>
<li></li>
<li></li>
</ul>
<p>ОС Windows – «C:\Program Files\GIS\Jatoba\6\bin»;ОС Linux – «/usr/jatoba-6/bin».</p>
<p>Для СУБД «Jatoba» версии ядра 4 используется версия компонента — 12.1</p>
<p>Для СУБД «Jatoba» версии ядра 5 используется версия компонента — 12.1</p>
<p>Для СУБД «Jatoba» версии ядра 6 используется версия компонента — 12.1</p></th>
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
<th style="text-align: left;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image2.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|:---|----|
| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонента [5](#назначение-компонента)](#назначение-компонента)

[1.1. Функциональные возможности компонента [5](#функциональные-возможности-компонента)](#функциональные-возможности-компонента)

[1.2. Условия применения [5](#условия-применения)](#условия-применения)

[2. Требования по использованию [6](#требования-по-использованию)](#требования-по-использованию)

[3. Установка и удаление [8](#установка-и-удаление)](#установка-и-удаление)

[4. Настройка Jatoba/PostgreSQL [10](#настройка-jatobapostgresql)](#настройка-jatobapostgresql)

[5. Опции использования компонента [12](#опции-использования-компонента)](#опции-использования-компонента)

[5.1. Формат значения datetime [16](#формат-значения-datetime)](#формат-значения-datetime)

[5.2. SSH опции [16](#ssh-опции)](#ssh-опции)

[5.3. Примеры использования [17](#примеры-использования)](#примеры-использования)

[6. Журналирование запросов [20](#журналирование-запросов)](#журналирование-запросов)

[7. Параллельная обработка [21](#параллельная-обработка)](#параллельная-обработка)

[8. Инкрементальные отчеты [23](#инкрементальные-отчеты)](#инкрементальные-отчеты)

[9. Ежемесячные отчеты [24](#ежемесячные-отчеты)](#ежемесячные-отчеты)

[10. Бинарный формат [25](#бинарный-формат)](#бинарный-формат)

[11. Формат JSON [26](#формат-json)](#формат-json)

[12. Отчеты, получаемые с помощью компонента [27](#отчеты-получаемые-с-помощью-компонента)](#отчеты-получаемые-с-помощью-компонента)

[Перечень сокращений [29](#_Toc215497123)](#_Toc215497123)

# Назначение компонента

«pgBadger» – компонент, обеспечивающий анализ журналов регистрации событий СУБД, в том числе событий безопасности, и формирование статистических отчетов и графиков на их основе.

Компонент «pgBadger» позволяет выполнять обработку в части событий, содержащихся в журналах. С помощью параметров командной строки возможно установить такой режим работы компонента, при котором будет обрабатываться только заданный набор сообщений.

## Функциональные возможности компонента

Компонент «pgBadger» обладает следующими функциональными возможностями:

- 
- 
- 

сбор общих данных о работе СУБД из файлов регистрации событий, в том числе о сессиях пользователя (выполненные SQL-запросы), и предоставление данных администратору в виде HTML-отчетов;выявление проблемных мест в производительности СУБД;поиск и анализ запросов, подлежащих оптимизации.При работе с данным компонентом администратор должен иметь доступ и обладать правами на чтение директории, в которой расположены файлы регистрации событий, и правами на чтение и запись в директорию сохранения отчетов. Допускается использование учетной записи администратора ОС (например, root для Linux) и системной учетной записи postgres.

## Условия применения

Компонент «pgBadger» может использоваться совместно с СУБД «Jatoba» версий 1.x, 4х и выше.

# Требования по использованию

Перед использованием компонента «pgBadger» необходимо выполнить установку динамического языка программирования Perl не ниже версии 5.14, с дополнительными компонентами, приведенными в таблице Таблица 2.1.

| **Компонент** |  | **Назначение** |
|----|----|----|
| Text::CSV_XS |  | Разбор файлов журналов в формате CSV |
| JSON::XS |  | Сериализация/десериализация JSON (для экспорта статистики в файл JSON) |
| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /> | Установка данных компонентов осуществляется только при необходимости разбора файлов журналов в формате CSV и выгрузки статистики в формате JSON. |  |
| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image2.png" style="width:0.25139in;height:0.25139in" /> | Названия пакетов могут отличаться в различных дистрибутивах GNU/Linux. Для получения точного названия рекомендуется сверяться с данными подключенных репозиториев пакетов. |  |

Таблица . – Дополнительные компоненты Perl

> Для установки на Debian-подобную систему используется команда:
>
> sudo apt-get install libtext-csv-xs-perl libjson-xs-perl
>
> Для установки на RedHat-подобную систему используется команда:
>
> sudo yum install perl-Text-CSV_XS perl-JSON-XS
>
> Для установки на openSUSE используется команда:
>
> sudo zypper install perl-Text-CSV_XS perl-JSON-XS

Графическое отображение информации осуществляется с помощью библиотеки JavaScript с использованием веб-браузера.

Поддерживается работа браузеров: Google Chrome, Mozilla Firefox, Microsoft Edge, Internet Explorer, Safari и др.

Формат сжатого файла журнала определяется автоматически по расширению файла. Список расширений архивов и соответствующих им утилит представлен в таблице Таблица 2.2.

| **Расширение архива** | **Используемая утилита** |
|-----------------------|--------------------------|
| gz                    | zcat                     |
| bz2                   | bzcat                    |
| lz4                   | lz4cat                   |
| zst                   | Zstdcat                  |
| Zip                   | unzip                    |
| Xz                    | xz                       |

Таблица . – Список расширений и соответствующих им утилит

Если утилиты не найдены в директориях, заданных в переменные окружения PATH, воспользуйтесь опцией командной строки --zcat для изменения этого пути.

Примеры:

> --zcat="/usr/local/bin/gunzip -c"
>
> --zcat="/usr/local/bin/bzip2 -dc"
>
> --zcat="C:\tools\unzip -p"

При использовании режима автоопределения формата сжатия файлы gz, bz2, lz4, xz, zip или zstd можно смешивать.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /> | Указание пользовательского значения для опции --zcat отключит возможность смешанного формата сжатия. |
|----|----|

# Установка и удаление

Установка компонента «pgBadger» должна производиться от имени пользователя, обладающего административными привилегиями в системе.

Компонент «pgBadger» может быть установлен штатным образом только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

Для использования компонента отдельно от СУБД «Jatoba» потребуется установка вручную (данный режим официально не поддерживается разработчиком).

Компонент распространяется в составе СУБД в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС.

Для разных типов пакетных менеджеров команда установки различается:

- 

> для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты):apt-get install jatoba4-pgBadger

- 

> для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты):yum install jatoba4-pgBadger

Установка компонента на ОС ALT Linux и openSUSE имеет следующие особенности:

- 

> ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов, команда установки выглядит аналогично Debian:apt-get install jatoba4-pgBadger

Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично в соответствии с номером версии СУБД, в составе которой он распространяется. Пример имен пакетов приведен в таблице Таблица 3.1.

| **Маркировка частей пакета** | **Имя пакета**   |                  |
|------------------------------|------------------|------------------|
|                              | jatoba1-pgBadger | jatoba4-pgBadger |
| Наименование СУБД            | jatoba           | jatoba           |
| Версия СУБД                  | 1                | 4                |
| Разделитель                  | \-               | \-               |
| Наименование компонента      | pgBadger         | pgBadger         |

Таблица . – Имена пакетов для разных версий СУБД

Удаление компонента осуществляется средствами пакетного менеджера ОС. Синтаксис команды удаления аналогичен синтаксису команды установки (install), описанной выше. При этом нужно использовать команду удаления, соответствующую пакетному менеджеру: remove, purge, erase и т.п.

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

# Настройка Jatoba/PostgreSQL

Перед началом работы необходимо включить журналирование SQL-запросов в файле postgresql.conf:

> log_min_duration_statement = 0

Включение данного параметра позволит осуществлять регистрацию каждого запроса, длительность которого превышает заданное значение в миллисекундах.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /> | На высоко нагруженном сервере, для увеличения производительности СУБД, рекомендуется увеличить данное значение, чтобы регистрировать только длительные запросы. |
|----|----|
| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image2.png" style="width:0.25139in;height:0.25139in" /> | Компонент pgBadger поддерживает только определенную комбинацию значений параметров log_statement, log_duration и log_min_duration_statement в конфигурационном режиме. Подробное описание приведено в разделе 6 «Журналирование запросов» данного руководства. |

Компонент «pgBadger» поддерживает любой пользовательский формат, заданный в параметре log_line_prefix файла postgresql.conf, если в нем указана временная управляющая последовательность (%t, %m или %n) и управляющая последовательность, связанная с процессом СУБД (%p или %c).

Например, для формата журнала 'stderr' префикс log_line_prefix должен принимать следующее минимальное значение:

> log_line_prefix = '%t \[%p\]:'

Префикс строки журнала может включать имя пользователя, имя базы данных, имя приложения и IP-адрес клиента:

> log_line_prefix = '%t \[%p\]: user=%u,db=%d,app=%a,client=%h'

Для формата файла журнала syslog используется следующий префикс:

> log_line_prefix = 'user=%u,db=%d,app=%a,client=%h'

Префикс строки журнала для вывода stderr может принимать значение:

> log_line_prefix = '%t \[%p\]: db=%d,user=%u,app=%a,  
> client=%h'

Для вывода журнала syslog используется следующий префикс:

> log_line_prefix = 'db=%d,user=%u,app=%a,client=%h'

Для журналирования детальной информации о работе СУБД необходимо включить дополнительные параметры в файле postgresql.conf:

> log_checkpoints = on
>
> log_connections = on
>
> log_disconnections = on
>
> log_lock_waits = on
>
> log_temp_files = 0
>
> log_autovacuum_min_duration = 0
>
> log_error_verbosity = default

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /> | Сообщения журнала должны быть на английском языке. Компонент «pgBadger» не поддерживает обработку и разбор сообщений на других языках: |
|----|----|

> lc_messages='en_US.UTF-8'
>
> lc_messages='C'

# Опции использования компонента

В данном разделе приведены опции командной строки компонента «pgBadger» (см. таблицу Таблица 5.1) и примеры запуска и использования данных опций.

<table>
<caption><p>Таблица . – Опции командной строки «pgBadger»</p></caption>
<colgroup>
<col style="width: 29%" />
<col style="width: 70%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Опция</strong></th>
<th style="text-align: center;"><strong>Назначение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>-a | --average min</td>
<td style="text-align: left;">количество минут для построения усредненных графиков запросов и соединений. <em>По умолчанию –</em> 5 <em>минут</em></td>
</tr>
<tr>
<td>-A | --histo-average min</td>
<td style="text-align: left;">количество минут для построения усредненных гистограмм запросов. <em>По умолчанию –</em> 60 <em>минут</em></td>
</tr>
<tr>
<td>-b | --begin datetime</td>
<td style="text-align: left;">дата / время начала разбора данных в журнале (задается в формате метки времени (включает дату и время), либо только времени без указания даты)</td>
</tr>
<tr>
<td>-c | --dbclient host</td>
<td style="text-align: left;">отчет о записях только для данного клиентского узла</td>
</tr>
<tr>
<td>-C | --nocomment</td>
<td style="text-align: left;">удаление комментариев типа /* ... */ из запросов</td>
</tr>
<tr>
<td>-d | --dbname database</td>
<td style="text-align: left;">сообщение только о записях для данной базы данных</td>
</tr>
<tr>
<td>-D | --dns-resolv</td>
<td style="text-align: left;"><p>замена IP-адресов клиентов их DNS-именами</p>
<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 83%" />
</colgroup>
<thead>
<tr>
<th><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th>Это может сильно замедлить работу pgBadger.</th>
</tr>
</thead>
<tbody>
</tbody>
</table></td>
</tr>
<tr>
<td>-e | --end datetime</td>
<td style="text-align: left;">дата / время окончания анализа данных, разбираемых в журнале (формат значения см. п. 5.1)</td>
</tr>
<tr>
<td>-E | --explode</td>
<td style="text-align: left;">разбиение общего отчета на части; опция создает по одному отчету для каждой базы данных</td>
</tr>
<tr>
<td>f | --format logtype</td>
<td style="text-align: left;"><p>явное указание формата файлов регистрации событий СУБД, когда pgBadger не может определить их формат автоматически.</p>
<p>Возможные значения: syslog, syslog2, stderr, jsonlog, cvs, pgbouncer, logplex, rds и redshift</p></td>
</tr>
<tr>
<td>-G | --nograph</td>
<td style="text-align: left;">отключение графики при выводе HTML-отчета. <em>По умолчанию – включено</em></td>
</tr>
<tr>
<td>-h | --help</td>
<td style="text-align: left;">краткий вывод списка опций</td>
</tr>
<tr>
<td>-H | --html-outdir path</td>
<td style="text-align: left;">путь к директории, в которую сохраняется HTML-отчет. В инкрементальном режиме бинарные файлы (см. раздел 8 и 10) остаются в каталоге, который определен опцией -O, --outdir</td>
</tr>
<tr>
<td>-i | --ident name</td>
<td style="text-align: left;">имя программы, используемое в качестве идентификатора syslog. <em>По умолчанию:</em> postgres</td>
</tr>
<tr>
<td>-I | --incremental</td>
<td style="text-align: left;">использование инкрементального режима. Отчеты будут генерироваться по дням в отдельном каталоге, необходимо задать параметр --outdir</td>
</tr>
<tr>
<td>-j | --jobs number</td>
<td style="text-align: left;">количество заданий для одновременного выполнения. <em>По умолчанию запускается одно задание</em></td>
</tr>
<tr>
<td>-J | --Jobs number</td>
<td style="text-align: left;">количество файлов журнала для параллельного разбора. <em>По умолчанию обрабатывается один файл</em></td>
</tr>
<tr>
<td>-l | --last-parsed file</td>
<td style="text-align: left;">разрешение инкрементального разбора журнала, используя последнее разобранное время и строку</td>
</tr>
<tr>
<td>-L | --logfile-list file</td>
<td style="text-align: left;">файл, содержащий список файлов журнала для разбора</td>
</tr>
<tr>
<td>-m | --maxlength size</td>
<td style="text-align: left;">максимальная длина запроса, которая будет ограничена заданным размером. <em>По умолчанию размер ограничения равен</em> 100000</td>
</tr>
<tr>
<td>-M | --no-multiline</td>
<td style="text-align: left;">сокращение размера отчета, опция не собирает данные о многострочных запросах</td>
</tr>
<tr>
<td>-n | --nohighlight<a href="#fn1" class="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a></td>
<td style="text-align: left;">отключение выделения кода SQL</td>
</tr>
<tr>
<td>-N | --appname name</td>
<td style="text-align: left;">составление отчета только по записям для заданного приложения</td>
</tr>
<tr>
<td>-o | --outfile filename</td>
<td style="text-align: left;">определение имени файла для вывода. <em>По умолчанию зависит от формата вывода:</em> out.html<em>,</em> out.txt<em>,</em> out.bin<em>,</em> out.json <em>или</em> out.tsung. Опция может быть использована несколько раз для вывода нескольких форматов</td>
</tr>
<tr>
<td>-O | --outdir path</td>
<td style="text-align: left;">каталог, в котором будет сохранен файл вывода</td>
</tr>
<tr>
<td>-p | --prefix string</td>
<td style="text-align: left;"><p>значение пользовательского префикса log_line_prefix, которое определено в postgresql.conf</p>
<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 83%" />
</colgroup>
<thead>
<tr>
<th><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Применяется только в случае, если не используется один из стандартных префиксов, указанных в документации pgBadger.</p>
<p>Например, если префикс включает дополнительные переменные, такие как IP-клиента или имя приложения.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table></td>
</tr>
<tr>
<td>-P | --no-prettify</td>
<td style="text-align: left;">отключение форматирования SQL-запросов</td>
</tr>
<tr>
<td>-q | --quiet</td>
<td style="text-align: left;">запрет вывода информации, в том числе строки состояния</td>
</tr>
<tr>
<td>-Q | --query-numbering</td>
<td style="text-align: left;">добавление в вывод нумерации запросов при использовании опций --dump-all-queries или<br />
--normalized-only</td>
</tr>
<tr>
<td>-r | --remote-host ip</td>
<td style="text-align: left;">добавление хоста, на котором будет выполняться команда cat удаленного файла журнала для локального разбора файла</td>
</tr>
<tr>
<td>-R | --retention N</td>
<td style="text-align: left;"><p>количество недель для хранения в инкрементальном режиме. <em>По умолчанию</em> 0<em>, отключено</em></p>
<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 83%" />
</colgroup>
<thead>
<tr>
<th><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th>Используется для установки количества недель для хранения данных в выходном каталоге. Более старые недели и дни автоматически удаляются из каталога.</th>
</tr>
</thead>
<tbody>
</tbody>
</table></td>
</tr>
<tr>
<td>-s | --sample number</td>
<td style="text-align: left;">количество выборок запроса для хранения. <em>По умолчанию:</em> 3</td>
</tr>
<tr>
<td>-S | --select-only</td>
<td style="text-align: left;">сообщение только о SELECT-запросах</td>
</tr>
<tr>
<td>-t | --top number</td>
<td style="text-align: left;">количество запросов для хранения / отображения. <em>По умолчанию:</em> 20</td>
</tr>
<tr>
<td>-T | --title string</td>
<td style="text-align: left;">изменение заголовка отчета HTML-страницы</td>
</tr>
<tr>
<td>-u | --dbuser username</td>
<td style="text-align: left;">отчет только по записям для указанного пользователя</td>
</tr>
<tr>
<td>-U | --exclude-user username</td>
<td style="text-align: left;">исключение записи для указанного пользователя из отчета. Может быть использовано несколько раз</td>
</tr>
<tr>
<td>-v | --verbose</td>
<td style="text-align: left;">включение режима просмотра или отладки. <em>По умолчанию отключен</em></td>
</tr>
<tr>
<td>-V | --version</td>
<td style="text-align: left;">версия pgBadger</td>
</tr>
<tr>
<td>-w | --watch-mode</td>
<td style="text-align: left;">сообщение только об ошибках</td>
</tr>
<tr>
<td>-W | --wide-char</td>
<td style="text-align: left;">кодирование HTML-вывода запросов в UTF8; позволяет избегать появления сообщения "Wide character in print"</td>
</tr>
<tr>
<td>-x | --extension</td>
<td style="text-align: left;">формат вывода. Значения: text, html, bin, json или tsung. <em>По умолчанию:</em> html</td>
</tr>
<tr>
<td>-X | --extra-files</td>
<td style="text-align: left;">в инкрементальном режиме позволяет pgBadger записывать CSS и JS файлы в выходной каталог в виде отдельных файлов</td>
</tr>
<tr>
<td>-z | --zcat exec_path</td>
<td style="text-align: left;">полный путь к программе zcat. Используется, если zcat, bzcat, или unzip не найдена</td>
</tr>
<tr>
<td>-Z | --timezone +/-XX</td>
<td style="text-align: left;">количество часов от GMT для данного часового пояса. Используется для корректировки даты / времени в графиках JavaScript</td>
</tr>
<tr>
<td>--pie-limit num</td>
<td style="text-align: left;">не выводить подписи на круговых диаграммах для значений меньше num (задается в процентах, <em>по умолчанию</em> 2)</td>
</tr>
<tr>
<td>--exclude-query regex</td>
<td style="text-align: left;">запрос, соответствующий заданному регулярному выражению, будет исключен из отчета. Может быть использован несколько раз</td>
</tr>
<tr>
<td>--exclude-file filename</td>
<td style="text-align: left;">путь к файлу, который содержит все регулярные выражения для исключения запросов из отчета. Допускается одно регулярное выражение на строку</td>
</tr>
<tr>
<td>--include-query regex</td>
<td style="text-align: left;">запрос, который не соответствует заданному регулярному выражению, будет исключен из отчета. Может быть использован несколько раз</td>
</tr>
<tr>
<td>--include-file filename</td>
<td style="text-align: left;">путь к файлу, содержащему все регулярные выражения для включения в отчет. Допускается одно регулярное выражение на строку</td>
</tr>
<tr>
<td>--disable-error</td>
<td style="text-align: left;">запрет формирования отчета об ошибках</td>
</tr>
<tr>
<td>--disable-hourly</td>
<td style="text-align: left;">запрет формирования почасового отчета</td>
</tr>
<tr>
<td>--disable-type</td>
<td style="text-align: left;">запрет формирования отчета о запросах по типу, базе данных или пользователю</td>
</tr>
<tr>
<td>--disable-query</td>
<td style="text-align: left;">запрет формирования отчета о запросах (медленные, самые частые, запросы по пользователям, по базам данных и т.п.)</td>
</tr>
<tr>
<td>--disable-session</td>
<td style="text-align: left;">запрет формирования отчета о сессиях</td>
</tr>
<tr>
<td>--disable-connection</td>
<td style="text-align: left;">запрет формирования отчета о соединениях</td>
</tr>
<tr>
<td>--disable-lock</td>
<td style="text-align: left;">запрет формирования отчета о блокировках</td>
</tr>
<tr>
<td>--disable-temporary</td>
<td style="text-align: left;">запрет формирования отчетов о временных событиях</td>
</tr>
<tr>
<td>--disable-checkpoint</td>
<td style="text-align: left;">запрет формирования отчета о контрольной точке / перезагрузке</td>
</tr>
<tr>
<td>--disable-autovacuum</td>
<td style="text-align: left;">запрет формирования отчета об автовакууме</td>
</tr>
<tr>
<td>--charset</td>
<td style="text-align: left;">установка используемой кодировки HTML. По умолчанию: UTF-8</td>
</tr>
<tr>
<td>--csv-separator</td>
<td style="text-align: left;">установка разделителя полей CSV, по умолчанию: <em>"</em>,<em>"</em></td>
</tr>
<tr>
<td>--exclude-time regex</td>
<td style="text-align: left;">любая временная метка, соответствующая заданному регулярному выражению, будет исключена из отчета. Может быть использована несколько раз</td>
</tr>
<tr>
<td>--include-time regex</td>
<td style="text-align: left;">только временная метка, соответствующая заданному регулярному выражению, будет включена в отчет. Может быть использована несколько раз</td>
</tr>
<tr>
<td>--exclude-db name</td>
<td style="text-align: left;">исключение записи журнала для указанной базы данных из отчета. Может быть использована несколько раз</td>
</tr>
<tr>
<td>--exclude-appname name</td>
<td style="text-align: left;">исключение записи журнала для указанного имени приложения из отчета. Может быть использована несколько раз</td>
</tr>
<tr>
<td>--exclude-line regex</td>
<td style="text-align: left;">исключение любой записи журнала, которая соответствует заданному регулярному выражению. Может быть использована несколько раз</td>
</tr>
<tr>
<td>--exclude-client name</td>
<td style="text-align: left;">исключение записи журнала для указанного IP-клиента. Может быть использована несколько раз</td>
</tr>
<tr>
<td>--anonymize</td>
<td style="text-align: left;">скрытие всех фиксированных данных в запросах</td>
</tr>
<tr>
<td>--noreport</td>
<td style="text-align: left;">запрет pgBadger создавать отчеты в инкрементальном режиме</td>
</tr>
<tr>
<td>--log-duration</td>
<td style="text-align: left;">обработка pgBadger записей журнала, созданных как с log_duration = on, так и с log_statement = 'all'</td>
</tr>
<tr>
<td>--enable-checksum</td>
<td style="text-align: left;">добавление md5-суммы под каждым запросом</td>
</tr>
<tr>
<td>--journalctl command</td>
<td style="text-align: left;">добавление к списку файлов регистрации событий СУБД команду вызова системного журнала journalctl для включения его записей в отчет. <em>Например:</em> journalctl -u jatoba-1</td>
</tr>
<tr>
<td>--pid-dir path</td>
<td style="text-align: left;">путь, где должен храниться файл pid. <em>По умолчанию</em> /tmp</td>
</tr>
<tr>
<td>--prettify-json</td>
<td style="text-align: left;">форматирование вывода json</td>
</tr>
<tr>
<td>--month-report YYYY-MM</td>
<td style="text-align: left;">создание кумулятивного HTML-отчета за указанный месяц</td>
</tr>
<tr>
<td>--day-report YYYY-MM-DD</td>
<td style="text-align: left;">создание HTML-отчета за указанный день</td>
</tr>
<tr>
<td>--noexplain</td>
<td style="text-align: left;">не обрабатывать строки, сгенерированные auto_explain</td>
</tr>
<tr>
<td>--command CMD</td>
<td style="text-align: left;">получение записей журнала через стандартный ввод от вывода команды, указанной в параметре</td>
</tr>
<tr>
<td>--no-week</td>
<td style="text-align: left;">отмена еженедельных отчетов в инкрементальном режиме</td>
</tr>
<tr>
<td>--explain-url URL</td>
<td style="text-align: left;">переопределение URL-адреса графического инструмента для EXPLAIN. <em>По умолчанию:</em> <a href="http://explain.depesz.com/?is_public=0&amp;is_anon=0&amp;plan=">http://explain.depesz.com/?is_public=0&amp;is_anon=0&amp;plan=</a></td>
</tr>
<tr>
<td>--tempdir DIR</td>
<td style="text-align: left;">каталог, в который будут записываться временные файлы. <em>По умолчанию:</em> File::Spec-&gt;tmpdir() || '/tmp'</td>
</tr>
<tr>
<td>--no-process-info</td>
<td style="text-align: left;">запрет на изменение названия процесса при идентификации процесса pgBadger</td>
</tr>
<tr>
<td>--dump-all-queries</td>
<td style="text-align: left;">сброс всех запросов, найденных в лог-файле</td>
</tr>
<tr>
<td>--keep-comments</td>
<td style="text-align: left;">запрет на удаление комментариев из нормализованных запросов</td>
</tr>
<tr>
<td>--no-progressbar</td>
<td style="text-align: left;">отключение панели прогресса</td>
</tr>
</tbody>
</table>
<section id="footnotes" class="footnotes footnotes-end-of-document" role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p>данная опция поддерживается только в версии компонента 11.8<a href="#fnref1" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
</ol>
</section>

Таблица . – Опции командной строки «pgBadger»

## Формат значения datetime

Формат datetime может быть задан в формате метки времени (включает дату и время) или в формате времени.

Формат метка времени YYYY-MM-DD hh:mm:ss.SZ.

Формат значения времени hh:mm:ss.SSSZZZ.

YYYY – год, MM – месяц, DD – день, hh – час, mm – минут, ss – секунда, «.S» – миллисекунды, Z – часовой пояс, заданный в формате \[+\|-\] hh\[:mm\[:ss\]\].

Пример.

> 2021-08-27 14:12:45.34567+03.

## SSH опции

Компонент pgBadger способен анализировать удаленный файл журнала, используя SSH-соединение. При настройке SSH возможна поддержка аутентификации без пароля, при этом пароль заменяется сгенерированными ключами.

Опция -r или --remote-host задает IP-адрес или имя хоста.

В таблице Таблица 5.2 приведены дополнительные опции, позволяющие полностью контролировать SSH-соединение.

<table>
<caption><p>Таблица . – Дополнительные опции для контроля SSH-соединения</p></caption>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Опция</strong></th>
<th style="text-align: center;"><strong>Назначение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>--ssh-program ssh</td>
<td>путь к используемой SSH-программе. <em>По умолчанию:</em> ssh</td>
</tr>
<tr>
<td>--ssh-port port ssh</td>
<td>порт, используемый для соединения. <em>По умолчанию:</em> 22</td>
</tr>
<tr>
<td>--ssh-user name</td>
<td>имя пользователя, логин подключения. <em>По умолчанию: текущий пользователь</em></td>
</tr>
<tr>
<td>--ssh-identity file</td>
<td>путь к используемому файлу идентификации</td>
</tr>
<tr>
<td>--ssh-timeout second</td>
<td>время до отказа SSH-соединения. <em>По умолчанию</em> 10 <em>секунд</em></td>
</tr>
<tr>
<td>--ssh-option options</td>
<td><p>список опций -o, передаваемых SSH-программе. Всегда передаются опции (значение ConnectTimeout берется из параметра --ssh-timeout):</p>
<p>-o ConnectTimeout=10</p>
<p>-o PreferredAuthentications=hostbased,publickey</p></td>
</tr>
</tbody>
</table>

Таблица . – Дополнительные опции для контроля SSH-соединения

## Примеры использования

В данном разделе приведены общие примеры синтаксиса некоторых опций и специальные примеры, направленные на решение конкретной задачи.

> Общие примеры синтаксиса:
>
> pgBadger /var/log/jatoba.log
>
> pgBadger /var/log/jatoba.log.2.gz /var/log/jatoba.log.1.gz /var/log/jatoba.log
>
> pgBadger /var/log/jatoba/jatoba-2021-08-\*
>
> pgBadger --exclude-query="^(COPY\|COMMIT)" /var/log/jatoba.log
>
> pgBadger -b "2021-09-25 10:56:11" -e "2021-09-25 10:59:11" /var/log/jatoba.log
>
> cat /var/log/jatoba.log \| pgBadger -
>
> pgBadger --prefix '%t \[%p\]: user=%u,db=%d,client=%h' /var/lib/jatoba/4/data/log/jatoba-2021-08-21\*
>
> pgBadger --prefix '%m %u@%d %p %r %a : ' /var/lib/jatoba/4/data/log/jatoba.log
>
> pgBadger --prefix 'user=%u,db=%d,client=%h,appname=%a' /var/lib/jatoba/4/data/log/jatoba-2021-08-21\*
>
> pgBadger -j 8 /var/lib/jatoba/4/data/log/jatoba-10.1-main.log
>
> Специальные примеры синтаксиса:

- 

> использование URL для удаленного файла журнала:pgBadger http://10.96.1.50/var/log/jatoba/jatoba-10.1-main.log
>
> pgBadger ftp://username@10.96.1.50/jatoba-10.1-main.log
>
> pgBadger ssh://username@10.96.1.50/var/log/jatoba/jatoba-10.1-main.log\*

- 

> совместное использование локальных и удаленных журнальных файлов:pgBadger /var/log/jatoba/jatoba-10.1-main.log ssh ://username@10.96.1.50/ var/log/ jatoba.log

- 

> создание XML-файла в формате Tsung[^1] сессий только с выборочными запросами:pgBadger -S -o sessions.tsung --prefix '%t \[%p\]: user=%u,db=%d ' /var/lib/jatoba/4/data/log/jatoba.log

- 

> еженедельный отчет об ошибках по заданию cron:30 23 \* \* \* 1 /usr/jatoba-4/bin/pgBadger -q -w /var/log/jatoba.log -o /var/reports/jatoba_errors.html

- 

> создание еженедельного отчета, используя инкрементальный режим (лог-файл и HTML-отчет обновляются каждую неделю):0 4 \* \* \* 1 /usr/jatoba-4/bin/pgBadger -q \`find /var/log/ -mtime -7 -name "jatoba.log\*"\` -o /var/reports/jatoba_errors-\`date +\\F\`.html -l /var/reports/pgBadger_incremental_file.dat

- 

> использование автоматически генерируемых инкрементальных отчетов (генерирует ежедневный и еженедельный отчеты):0 4 \* \* \* /usr/jatoba-4/bin/pgBadger -I -q /var/log/jatoba/jatoba.log.1 -O /var/www/html/jatoba_reports/

- 

> указание периода в неделях, которые будут храниться в отчетах, в инкрементальном режиме:/usr/jatoba-4/bin/pgBadger --retention 2 -I -q /var/log/jatoba/jatoba.log.1 -O /var/www/html/jatoba_reports/

- 

> исключение из отчета периода, в который информация не собиралась (если в отчете есть параметр pg_dump). Например, pg_dump работает в 23:00 и 13:00 каждый день в течение получаса в сентябре 2021 года. Исключить этот период из отчета возможно следующим образом:pgBadger --exclude-time "2021-09-.\* (23\|13):.\*" jatoba.log

Это поможет избежать появления COPY-запросов, генерируемых pg_dump, на вершине списка самых медленных запросов.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /> | Параметр --exclude-appname "pg_dump" позволяет решить проблему появления COPY-запросов более простым способом. |
|----|----|

- 

> вывод journalctl может быть разобран, как файл журнала:pgBadger --journalctl 'journalctl -u jatoba-1.service’

- 

> вызов journalctl с удаленного хоста:pgBadger -r 10.96.1.50 --journalctl 'journalctl -u jatoba-1.service'

- 

> восстановление всех инкрементных HTML-отчетов (обновление всех файлов ресурсов JS и CSS):rm /path/to/reports/\*.js
>
> rm /path/to/reports/\*.css
>
> pgBadger -X -I -O /path/to/reports/ --rebuild

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /> | Необходимо использовать опцию -E или --explode, если ранее эти отчеты были построены с использованием этой опции. |
|----|----|

- 

> для создания кумулятивного отчета за месяц (добавление ссылки в название месяца представления календаря в инкрементальных отчетах) используется команда:pgBadger --month-report 2021-05 –O /path/to/  
> incremantal/reports/

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /> | Необходимо использовать опцию -E или --explode, если ранее инкрементальные отчеты были построены с использованием этой опции. |
|----|----|

# Журналирование запросов

Журналирование запросов включает в себя параметры – log_min_duration_statement, log_duration и log_statement.

При необходимости включения в статистику запросов продолжительности выполнения всех команд, время работы которых равно или превышает указанное количество миллисекунд, в параметре log_min_duration_statement необходимо установить значение равным 0 или больше. По умолчанию отключено (принимает значение «-1»).

Для отображения длительности выполнения всех завершенных команд, нужно установить значение параметра log_duration = on в файле postgresql.conf.

Значение параметра log_duration = on не означает одно и то же, что установка log_min_duration_statement = 0. При превышении значения log_min_duration_statement в журнал записывается текст запроса, а при включении данного параметра – нет.

При log_duration = on и положительном значении log_min_duration_statement в журнал записывается длительность всех команд, а текст запросов – только для команд с длительностью, превысившей установленный в параметре предел.

Для добавления отчета о наиболее распространенных запросах, нужно установить log_min_duration_statement в значение больше 0, либо включить log_statement.

Включение log_min_duration_statement добавит отчеты о самых медленных запросах и запросах, которые заняли больше всего времени.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /> | Если для параметра log_statement установлено значение 'all', то при включении log_min_duration_statement запросы регистрироваться в журнал не будут. |
|----|----|
| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /> | При использовании log_min_duration_statement совместно с log_statement, текст SQL-запросов будет записываться только один раз (от использования log_statement) без дублирования в сообщении о длительности выполнения. |

# Параллельная обработка

Компонент pgBadger позволяет выполнять параллельную обработку одного или нескольких файлов журнала с помощью параметров -j N или –J N (например, pgBadger -j 8).

В первом случае (-j N) каждый файл журнала разбивается на N частей и обрабатывается отдельным параллельным процессом. Данный режим рекомендуется для обработки файлов журнала большого объема.

Во втором случае (–J N) каждый файл журнала целиком обрабатывается отдельным параллельным процессом (всего будет создано N параллельных процессов). Данный режим рекомендуется для обработки большого количества файлов, каждый из которых имеет сравнительно небольшой размер.

Указанные режимы можно комбинировать (одновременная обработка сразу нескольких файлов, каждый из которых, в свою очередь, обрабатывается несколькими параллельными процессами).

Значения N этих параметров определяется исходя из количества доступных ядер в системе. Использование значений N при параллельной обработке (в том числе при комбинировании режимов), превышающее количество ядер, приведет к потере скорости параллельной обработки.

Ниже приведен пример параллельной обработки, выполненной разными способами:

Вариант 1 – параллельная обработка, выполненная на сервере с 8 процессорами и одним файлом размером 9,5 ГБ:

| Вариант | 1 CPU   | 2 CPU | 4 CPU | 8 CPU |
|---------|---------|-------|-------|-------|
| -j      | 1h41m18 | 50m25 | 25m39 | 15m58 |
| -J      | 1h41m18 | 54m28 | 41m16 | 34m45 |

Вариант 2 – параллельная обработка, выполненная на сервере с 8 процессорами и 200 файлами журналов по 10 МБ каждый и общим объемом 2 ГБ:

| Вариант | 1 CPU | 2 CPU | 4 CPU | 8 CPU |
|---------|-------|-------|-------|-------|
| -j      | 20m15 | 9m56  | 5m20  | 4m20  |
| -J      | 20m15 | 9m49  | 5m00  | 2m40  |

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>При параллельной обработке компонентом pgBadger осуществляется генерация большого количества временных файлов в каталоге /tmp, которые будут автоматически удалены по завершению работы.</p>
<p>Удалять временные файлы в процессе работы утилиты нельзя.</p>
<p>Для идентификации файлов используется следующий шаблон в наименовании: tmp_pgBadgerXXXX.bin.</p></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /></td>
<td>Параллельная обработка не может использоваться со сжатыми файлами или CSV-файлами, а также, на платформе Windows.</td>
</tr>
</tbody>
</table>

# Инкрементальные отчеты

Компонент «pgBadger» включает режим автоматического инкрементального отчета с помощью опции -I или --incremental.

При работе в этом режиме «pgBadger» генерирует один отчет в день и суммарный отчет в неделю. Сначала вывод осуществляется в двоичном формате в обязательный выходной каталог (см. опцию -O или --outdir таблицы Таблица 5.1), затем в формате HTML для ежедневных и еженедельных отчетов с основным индексным файлом.

В главном индексном файле будет отображено выпадающее меню по неделям со ссылкой на каждый недельный отчет и ссылками на ежедневные отчеты каждой недели.

Если запустить «pgBadger» следующим образом на основе ежедневно чередующихся файлов:

> 0 4 \* \* \* /usr/jatoba-4/bin/pgBadger -I -q /var/log/jatoba/jatoba.log.1 -O /var/www/html/jatoba_reports/

в результате работы будут получены все ежедневные и еженедельные отчеты за весь период работы.

В этом режиме «pgBadger» создаст автоматический инкрементный файл в выходном каталоге. Для изменения пути к данному файлу необходимо использовать опцию -l. «pgBadger» можно запускать в режиме, при котором каждый день работы будет записываться в файл, предназначенный только для записей этого дня недели.

Для экономии дискового пространства используется опция командной строки -X или --extra-files, чтобы компонент «pgBadger» записывал JavaScript и CSS в отдельные файлы в выходном каталоге. Затем эти ресурсы будут загружены с помощью тегов script и link.

# Ежемесячные отчеты

По умолчанию «pgBadger» в инкрементальном режиме рассчитывает только ежедневные и еженедельные отчеты.

Для получения ежемесячного сводного отчета необходимо использовать отдельную команду.

Например, чтобы построить отчет за август 2021 года необходимо воспользоваться командой:

> pgBadger -X --month-report 2021-08 /var/www/html/jatoba_reports/

это добавит ссылку на название месяца в календарный вид инкрементных отчетов для просмотра ежемесячного отчета. Отчет за текущий месяц можно запускать ежедневно, при этом каждый раз он полностью перестраивается.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /> | Ежемесячный отчет не строится по умолчанию, так как занимает много времени из-за большого количества данных. |
|----|----|

Если отчеты, на основании которых строится месячный отчет (ежедневные или еженедельные), были построены с опцией -E (--explode), то данная опция должна быть использована при вызове pgBadger для построения ежемесячного отчета:

> pgBadger -E -X --month-report 2021-08 -O /var/www/html/jatoba_reports/

То же самое происходит при использовании опции перестройки -R (--rebuild).

# Бинарный формат

Используя бинарный формат можно создавать пользовательские инкрементальные и кумулятивные отчеты.

> Пример 1.

При необходимости обновления отчета pgBadger каждый час из ежедневного файла журнала СУБД, для генерации инкрементных файлов данных в двоичном формате, следует выполнять следующие команды:

> pgBadger --last-parsed .pgBadger_last_state_file -o sunday/hourX.bin /var/lib/jatoba/4/data/log/jatoba-Sun.log

для генерации инкрементных файлов данных в двоичном формате.

Затем сгенерировать HTML-отчет из этого двоичного файла командой:

> pgBadger sunday/\*.bin
>
> Пример 2.

При генерации одного файла журнала в час и необходимости перестроения отчетов при каждой ротации файла журнала необходимо выполнить следующие действия:

> pgBadger -o day1/hour01.bin /var/lib/jatoba/4/data/log/jatoba-2021-08-23_10.log
>
> pgBadger -o day1/hour02.bin /var/lib/jatoba/4/data/log/jatoba-2021-08-23_11.log
>
> pgBadger -o day1/hour03.bin /var/lib/jatoba/4/data/log/jatoba-2021-08-23_12.log

Для обновления HTML-отчета, например, каждый раз после создания нового двоичного файла нужно ввести следующую команду:

> pgBadger -o day1_report.html day1/\*.bin

и настроить команды в соответствии с конкретными потребностями.

# Формат JSON

Формирование отчета возможно в формате JSON через параметр -o \| --output. Данный формат хорошо подходит для интеграции «pgBadger» в другие системы мониторинга.

# Отчеты, получаемые с помощью компонента

Компонент «pgBadger» собирает данные о SQL-запросах:

| Overall statistics | Общая статистика |
|:---|:---|
| The most frequent waiting queries | Наиболее частые ожидающие запросы |
| Queries that waited the most | Запросы с наибольшим временем ожидания |
| Queries generating the most temporary files | Запросы, генерирующие больше всего временных файлов |
| Queries generating the largest temporary files | Запросы, генерирующие самые большие временные файлы |
| The slowest queries | Самые медленные запросы |
| Queries that took up the most time | Запросы, занимающие больше всего времени |
| The most frequent queries | Самые частые запросы |
| Histogram of query times | Гистограмма продолжительности запросов |
| Histogram of sessions times | Гистограмма продолжительности сессий |
| Users involved in top queries | Пользователи наиболее частых запросов |
| Applications involved in top queries | Приложения наиболее частых запросов |
| Queries generating the most cancellation | Запросы, вызывающие наибольшее количество отмен |
| Queries most cancelled | Наиболее частые отмененные запросы |
| The most time consuming prepare/bind queries | Самые трудоемкие запросы на подготовку/привязку параметров |

Доступны следующие отчеты с почасовыми графиками, разделенными на периоды по пять минут:

| SQL queries statistics | Статистика SQL-запросов |
|:---|:---|
| Temporary file statistics | Статистика временных файлов |
| Checkpoints statistics | Статистика контрольных точек |
| Autovacuum and autoanalyze statistics | Статистика автовакуума и автоанализа |
| Cancelled queries | Отмененные запросы |
| Error events (panic, fatal, error and warning) | События ошибок (паника, фатальная ошибка, ошибка и предупреждение) |
| Error class distribution | Распределение классов ошибок |

Круговые диаграммы о распределении:

| Locks statistics | Статистика блокировок |
|:---|----|
| Queries by type (select/insert/update/delete) | Запросы по типу (выбрать/вставить/обновить/удалить) |
| Distribution of queries type per database/application | Распределение типов запросов по базе данных/приложению |
| Sessions per database/user/client/application | Сеансы для каждой базы данных/пользователей/клиентов/приложений |
| Connections per database/user/client/application | Количество подключений для каждой базы данных/пользователей/клиентов/приложений |
| Autovacuum and autoanalyze per table | Автовакуум и автоанализ по таблице |
| Queries per user and total duration per user | Запросы пользователя и общая продолжительность запросов пользователя |

Все диаграммы можно масштабировать и сохранять в формате PNG. Ко всем SQL-запросам автоматически применяется подсветка синтаксиса и выравнивание.

Точность гистограммы настраивается с помощью ключа - A. По умолчанию в гистограммах отображается среднее значение каждого топ-запроса / ошибки, произошедшей за час, но возможно указать гранулярность вплоть до минут.

# 

| <span id="_Toc215497123" class="anchor"></span>Перечень сокращенийHTML | – | HyperText Markup Language — стандартизированный язык разметки документов для просмотра веб-страниц в браузере |
|:---|----|:---|
| IP-адрес | – | Internet Protocol — уникальный числовой идентификатор устройства в компьютерной сети, работающей по протоколу TCP/IP |
| JSON | – | JavaScript Object Notation — текстовый формат обмена данными, основанный на JavaScript |
| SSH | – | Secure Shell — сетевой протокол прикладного уровня |
| SQL | – | Structured Query Language — язык структурированных запросов |
| XML | – | eXtensible Markup Language — расширяемый язык разметки |
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

[^1]: Для использования в системе распределенного нагрузочного тестирования Tsung, http://tsung.erlang-projects.org/
