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
<p><strong>Руководство по настройке. Часть 3.</strong></p>
<p><strong>Формирование отчетов по журналам СУБД. Компонент «pgBadger»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-03</strong></p>
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

> **АННОТАЦИЯ**
>
> В документе приведены сведения, необходимые для формирования аналитической отчетности по заданным параметрам, для выявления потенциальных проблем с системой управления базами данных «Jatoba» (далее – СУБД «Jatoba»). Настоящее руководство предназначено для администратора СУБД «Jatoba».
>
> <img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25in;height:0.24999in" />Администратор СУБД «Jatoba» должен иметь навыки по работе с системами управления базами данных «PostgreSQL» или защищенной СУБД «Jatoba» (ООО «Газинформсервис»).
>
> Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра
>
> 4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.
>
> Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:

- ОС Windows – «C:\Program Files\GIS\Jatoba\6\bin»;

- ОС Linux – «/usr/jatoba-6/bin».

> Для СУБД «Jatoba» версии ядра 4/5/6/18 используется версия компонента — 13.1.
>
> <img src="../docs/assets/images/com18.3.1/pgbadger/media/image2.png" style="width:0.25139in;height:0.25046in" />**Важная информация**
>
> Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!
>
> <img src="../docs/assets/images/com18.3.1/pgbadger/media/image2.png" style="width:0.25208in;height:0.25208in" /><img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25208in;height:0.25208in" />Степени важности примечаний, применяемые в документе:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Важная информация</strong> – указания, требующие особого внимания</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>Дополнительная информация</strong> – указания, позволяющие упростить работу с изделием</p>
</blockquote></td>
</tr>
</tbody>
</table>

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

> **СОДЕРЖАНИЕ**

1.  1.  
    2.  
2.  
3.  1.  
    2.  
4.  
5.  1.  
    2.  
    3.  
6.  
7.  
8.  
9.  
10. 
11. 
12. 

[Назначение компонента 4](#назначение-компонента)[Функциональные возможности компонента 4](#функциональные-возможности-компонента)[Условия применения 4](#условия-применения)[Требования по использованию 5](#требования-по-использованию)[Установка и удаление 7](#установка-и-удаление)[Установка/удаление в ОС GNU/Linux 7](#установкаудаление-в-ос-gnulinux)[Установка/удаление в ОС Microsoft Windows 8](#установкаудаление-в-ос-microsoft-windows)[Настройка Jatoba/PostgreSQL 9](#настройка-jatobapostgresql)[Опции использования компонента 11](#опции-использования-компонента)[Формат значения datetime 15](#формат-значения-datetime)[SSH опции 15](#ssh-опции)[Примеры использования 16](#примеры-использования)[Журналирование запросов 19](#журналирование-запросов)[Параллельная обработка 20](#параллельная-обработка)[Инкрементальные отчеты 22](#инкрементальные-отчеты)[Ежемесячные отчеты 23](#ежемесячные-отчеты)[Бинарный формат 24](#бинарный-формат)[Формат JSON 25](#формат-json)[Отчеты, получаемые с помощью компонента 26](#отчеты-получаемые-с-помощью-компонента)[Перечень сокращений 28](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> «pgBadger» – компонент, обеспечивающий анализ журналов регистрации событий СУБД, в том числе событий безопасности, и формирование статистических отчетов и графиков на их основе.
>
> Компонент «pgBadger» позволяет выполнять обработку в части событий, содержащихся в журналах. С помощью параметров командной строки возможно установить такой режим работы компонента, при котором будет обрабатываться только заданный набор сообщений.

## Функциональные возможности компонента

> Компонент «pgBadger» обладает следующими функциональными возможностями:

- сбор общих данных о работе СУБД из файлов регистрации событий, в том числе о сессиях пользователя (выполненные SQL-запросы), и предоставление данных администратору в виде HTML-отчетов;

- выявление проблемных мест в производительности СУБД;

- поиск и анализ запросов, подлежащих оптимизации.

> При работе с данным компонентом администратор должен иметь доступ и обладать правами на чтение директории, в которой расположены файлы регистрации событий, и правами на чтение и запись в директорию сохранения отчетов. Допускается использование учетной записи администратора ОС (например, root для Linux) и системной учетной записи postgres.

## Условия применения

> Компонент «pgBadger» может использоваться совместно с СУБД «Jatoba» версий 4х и выше.

# ТРЕБОВАНИЯ ПО ИСПОЛЬЗОВАНИЮ

> Перед использованием компонента «pgBadger» необходимо выполнить установку динамического языка программирования Perl не ниже версии 5.14, с дополнительными компонентами, приведенными в таблице [2.1](#_bookmark4).
>
> <span id="_bookmark4" class="anchor"></span>Таблица 2.1 – Дополнительные компоненты Perl

<table>
<colgroup>
<col style="width: 31%" />
<col style="width: 68%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Компонент</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Назначение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Text::CSV_XS</p>
</blockquote></td>
<td><blockquote>
<p>Разбор файлов журналов в формате CSV</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>JSON::XS</p>
</blockquote></td>
<td><blockquote>
<p>Сериализация/десериализация JSON (для экспорта</p>
<p>статистики в файл JSON)</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25in;height:0.24999in" />Установка данных компонентов осуществляется только при необходимости разбора файлов журналов в формате CSV и выгрузки статистики в формате JSON.
>
> <img src="../docs/assets/images/com18.3.1/pgbadger/media/image2.png" style="width:0.25139in;height:0.25139in" />Названия пакетов могут отличаться в различных дистрибутивах GNU/Linux. Для получения точного названия рекомендуется сверяться с данными подключенных репозиториев пакетов.
>
> Для установки на Debian-подобную систему используется команда:
>
> sudo apt-get install libtext-csv-xs-perl libjson-xs-perl
>
> Для установки на RedHat-подобную систему используется команда:
>
> sudo yum install perl-Text-CSV_XS perl-JSON-XS
>
> Графическое отображение информации осуществляется с помощью библиотеки JavaScript с использованием веб-браузера.
>
> Поддерживается работа браузеров: Google Chrome, Mozilla Firefox, Microsoft Edge, Internet Explorer, Safari и др.
>
> Формат сжатого файла журнала определяется автоматически по расширению файла.
>
> Список расширений архивов и соответствующих им утилит представлен в таблице [2.2.](#_bookmark5)
>
> <span id="_bookmark5" class="anchor"></span>Таблица 2.2 – Список расширений и соответствующих им утилит

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Расширение архива</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Используемая утилита</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>gz</p>
</blockquote></td>
<td><blockquote>
<p>zcat</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>bz2</p>
</blockquote></td>
<td><blockquote>
<p>bzcat</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>lz4</p>
</blockquote></td>
<td><blockquote>
<p>lz4cat</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>zst</p>
</blockquote></td>
<td><blockquote>
<p>Zstdcat</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Zip</p>
</blockquote></td>
<td><blockquote>
<p>unzip</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Xz</p>
</blockquote></td>
<td><blockquote>
<p>xz</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Если утилиты не найдены в директориях, заданных в переменные окружения PATH, воспользуйтесь опцией командной строки **--zcat** для изменения этого пути.
>
> Примеры:
>
> --zcat="/usr/local/bin/gunzip -c"
>
> --zcat="/usr/local/bin/bzip2 -dc"
>
> --zcat="C:\tools\unzip -p"
>
> При использовании режима автоматического определения формата сжатия файлы gz, bz2, lz4, xz, zip или zstd можно смешивать.
>
> <img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" />Указание пользовательского значения для опции **--zcat** отключит возможность смешанного формата сжатия.

# УСТАНОВКА И УДАЛЕНИЕ

> Установка компонента «pgBadger» должна производиться от имени пользователя, обладающего административными привилегиями в системе.
>
> Компонент «pgBadger» может быть установлен штатным образом только с СУБД
>
> «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).
>
> Для использования компонента отдельно от СУБД «Jatoba» потребуется установка вручную (данный режим официально не поддерживается разработчиком).

## Установка/удаление в ОС GNU/Linux

> Компонент распространяется в составе СУБД в виде отдельного deb или rpm-пакета.
>
> Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки различается:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты):

> apt-get install jatoba4-pgBadger

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты):

> yum install jatoba4-pgBadger
>
> Установка компонента на ОС ALT Linux и openSUSE имеет следующие особенности:

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов, команда установки выглядит аналогично Debian:

> apt-get install jatoba4-pgBadger
>
> Удаление компонента осуществляется средствами пакетного менеджера ОС. Синтаксис команды удаления аналогичен синтаксису команды установки (install), описанной выше. При этом нужно использовать команду удаления, соответствующую пакетному менеджеру: remove, purge, erase и т.п.
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Установка/удаление в ОС Microsoft Windows

> Компонент распространяется в составе инсталляционного msi-файла СУБД «Jatoba».
>
> При выборе режима установки «Полный», компонент «pgBadger» установится автоматически в составе СУБД.
>
> При выборе режима установки «Выборочный», для установки компонента
>
> «pgBadger» необходимо в списке компонент выбрать пункт «Анализ журналов сообщений (pgBadger)».

<img src="../docs/assets/images/com18.3.1/pgbadger/media/image3.png" style="width:3.91876in;height:3.06375in" />

> Рисунок 3.1 – Выбор компонента при установке
>
> Удаление компонента «pgBadger» доступно через инсталлятор СУБД «Jatoba» – компонент удалится при удалении СУБД «Jatoba». Также компонент возможно исключить из состава установленных компонент СУБД через управление приложениями в панели управления Microsoft Windows.
>
> Для получения детальной информации по установке/удалению программ в Microsoft Windows рекомендуется обратиться к документации по ОС.

# <img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25208in;height:0.25208in" /><img src="../docs/assets/images/com18.3.1/pgbadger/media/image2.png" style="width:0.25208in;height:0.25208in" />НАСТРОЙКА JATOBA/POSTGRESQL

> Перед началом работы необходимо включить журналирование SQL-запросов в файле
>
> **postgresql.conf**:
>
> log_min_duration_statement = 0
>
> Включение данного параметра позволит осуществлять регистрацию каждого запроса, длительность которого превышает заданное значение в миллисекундах.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><blockquote>
<p>На высоко нагруженном сервере, для увеличения производительности СУБД, рекомендуется увеличить данное значение, чтобы регистрировать только длительные запросы.</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><blockquote>
<p>Компонент «pgBadger» поддерживает только определенную комбинацию значений параметров <strong>log_statement</strong>, <strong>log_duration</strong> и <strong>log_min_duration_statement</strong> в конфигурационном режиме. Подробное описание приведено в разделе 6 «Журналирование запросов» данного</p>
<p>руководства.</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Компонент «pgBadger» поддерживает любой пользовательский формат, заданный в параметре **log_line_prefix** файла **postgresql.conf**, если в нем указана временная управляющая последовательность (**%t**, **%m** или **%n**) и управляющая последовательность, связанная с процессом СУБД (**%p** или **%c**).
>
> Например, для формата журнала **'stderr'** префикс **log_line_prefix** должен принимать следующее минимальное значение:
>
> log_line_prefix = '%t \[%p\]:'
>
> Префикс строки журнала может включать имя пользователя, имя базы данных, имя приложения и IP-адрес клиента:
>
> log_line_prefix = '%t \[%p\]: user=%u,db=%d,app=%a,client=%h'
>
> Для формата файла журнала **syslog** используется следующий префикс:

<img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" />

> log_line_prefix = 'user=%u,db=%d,app=%a,client=%h'
>
> Префикс строки журнала для вывода **stderr** может принимать значение:
>
> log_line_prefix = '%t \[%p\]: db=%d,user=%u,app=%a, client=%h'
>
> Для вывода журнала **syslog** используется следующий префикс:
>
> log_line_prefix = 'db=%d,user=%u,app=%a,client=%h'
>
> Для журналирования детальной информации о работе СУБД необходимо включить дополнительные параметры в конфигурационном файле **postgresql.conf**:
>
> log_checkpoints = on log_connections = on log_disconnections = on log_lock_waits = on log_temp_files = 0
>
> log_autovacuum_min_duration = 0 log_error_verbosity = default
>
> Компонент «pgBadger» не поддерживает обработку и разбор сообщений на других языках, кроме английского. Для этого необходимо установить параметр в конфигурационном файле **postgresql.conf**:
>
> lc_messages='en_US.UTF-8' lc_messages='C'

# ОПЦИИ ИСПОЛЬЗОВАНИЯ КОМПОНЕНТА

> В данном разделе приведены опции командной строки компонента «pgBadger» (см. таблицу [5.1](#_bookmark11)) и примеры запуска и использования данных опций.
>
> <span id="_bookmark11" class="anchor"></span>Таблица 5.1 – Опции командной строки «pgBadger»

<table>
<colgroup>
<col style="width: 29%" />
<col style="width: 70%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Опция</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Назначение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>-a | --average min</p>
</blockquote></td>
<td><blockquote>
<p>количество минут для построения усредненных графиков запросов</p>
<p>и соединений. <em>По умолчанию –</em> 5 <em>минут</em></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-A | --histo-average min</p>
</blockquote></td>
<td><blockquote>
<p>количество минут для построения усредненных гистограмм</p>
<p>запросов. <em>По умолчанию –</em> 60 <em>минут</em></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-b | --begin datetime</p>
</blockquote></td>
<td><blockquote>
<p>дата / время начала разбора данных в журнале (задается в формате</p>
<p>метки времени (включает дату и время), либо только времени без указания даты)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-c | --dbclient host</p>
</blockquote></td>
<td><blockquote>
<p>отчет о записях только для данного клиентского узла</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-C | --nocomment</p>
</blockquote></td>
<td><blockquote>
<p>удаление комментариев типа /* ... */ из запросов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-d | --dbname database</p>
</blockquote></td>
<td><blockquote>
<p>сообщение только о записях для данной базы данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-D | --dns-resolv</p>
</blockquote></td>
<td><blockquote>
<p>замена IP-адресов клиентов их DNS-именами</p>
<p>Это может сильно замедлить работу pgBadger.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-e | --end datetime</p>
</blockquote></td>
<td><blockquote>
<p>дата / время окончания анализа данных, разбираемых в журнале</p>
<p>(формат значения см. п. <a href="#формат-значения-datetime">5.1</a>)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-E | --explode</p>
</blockquote></td>
<td><blockquote>
<p>разбиение общего отчета на части; опция создает по одному отчету</p>
<p>для каждой базы данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>f | --format logtype</p>
</blockquote></td>
<td><blockquote>
<p>явное указание формата файлов регистрации событий СУБД, когда pgBadger не может определить их формат автоматически.</p>
<p>Возможные значения: syslog, syslog2, stderr, jsonlog, cvs, pgbouncer,</p>
<p>logplex, rds и redshift</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-G | --nograph</p>
</blockquote></td>
<td><blockquote>
<p>отключение графики при выводе HTML-отчета. <em>По умолчанию –</em></p>
<p><em>включено</em></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-h | --help</p>
</blockquote></td>
<td><blockquote>
<p>краткий вывод списка опций</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-H | --html-outdir path</p>
</blockquote></td>
<td><blockquote>
<p>путь к директории, в которую сохраняется HTML-отчет. В</p>
<p>инкрементальном режиме бинарные файлы (см. раздел <a href="#инкрементальные-отчеты">8</a> и <a href="#бинарный-формат">10</a>) остаются в каталоге, который определен опцией -O, --outdir</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-i | --ident name</p>
</blockquote></td>
<td><blockquote>
<p>имя программы, используемое в качестве идентификатора syslog. <em>По</em></p>
<p><em>умолчанию:</em> postgres</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-I | --incremental</p>
</blockquote></td>
<td><blockquote>
<p>использование инкрементального режима. Отчеты будут</p>
<p>генерироваться по дням в отдельном каталоге, необходимо задать параметр --outdir</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-j | --jobs number</p>
</blockquote></td>
<td><blockquote>
<p>количество заданий для одновременного выполнения. <em>По умолчанию</em></p>
<p><em>запускается одно задание</em></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-J | --Jobs number</p>
</blockquote></td>
<td><blockquote>
<p>количество файлов журнала для параллельного разбора. <em>По</em></p>
<p><em>умолчанию обрабатывается один файл</em></p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 29%" />
<col style="width: 70%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Опция</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Назначение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>-l | --last-parsed file</p>
</blockquote></td>
<td><blockquote>
<p>разрешение инкрементального разбора журнала, используя</p>
<p>последнее разобранное время и строку</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-L | --logfile-list file</p>
</blockquote></td>
<td><blockquote>
<p>файл, содержащий список файлов журнала для разбора</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-m | --maxlength size</p>
</blockquote></td>
<td><blockquote>
<p>максимальная длина запроса, которая будет ограничена заданным</p>
<p>размером. <em>По умолчанию размер ограничения равен</em> 100000</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-M | --no-multiline</p>
</blockquote></td>
<td><blockquote>
<p>сокращение размера отчета, опция не собирает данные о</p>
<p>многострочных запросах</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-n | --nohighlight<a href="#_bookmark12"><sup>1</sup></a></p>
</blockquote></td>
<td><blockquote>
<p>отключение выделения кода SQL</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-N | --appname name</p>
</blockquote></td>
<td><blockquote>
<p>составление отчета только по записям для заданного приложения</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-o | --outfile filename</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>определение имени файла для вывода. <em>По умолчанию зависит от формата вывода:</em> out.html<em>,</em> out.txt<em>,</em> out.bin<em>,</em> out.json <em>или</em> out.tsung. Опция может быть использована несколько раз для вывода</p>
<p>нескольких форматов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-O | --outdir path</p>
</blockquote></td>
<td><blockquote>
<p>каталог, в котором будет сохранен файл вывода</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-p | --prefix string</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>значение пользовательского префикса log_line_prefix, которое определено в postgresql.conf</p>
<p>Применяется только в случае, если не используется один из стандартных префиксов, указанных в документации pgBadger.</p>
<p>Например, если префикс включает дополнительные переменные, такие как IP-клиента или имя приложения.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-P | --no-prettify</p>
</blockquote></td>
<td><blockquote>
<p>отключение форматирования SQL-запросов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-q | --quiet</p>
</blockquote></td>
<td><blockquote>
<p>запрет вывода информации, в том числе строки состояния</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-Q | --query-numbering</p>
</blockquote></td>
<td><blockquote>
<p>добавление в вывод нумерации запросов при использовании опций</p>
<p>--dump-all-queries или</p>
<p>--normalized-only</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-r | --remote-host ip</p>
</blockquote></td>
<td><blockquote>
<p>добавление хоста, на котором будет выполняться команда cat</p>
<p>удаленного файла журнала для локального разбора файла</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-R | --retention N</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>количество недель для хранения в инкрементальном режиме. <em>По умолчанию</em> 0<em>, отключено</em></p>
<p>Используется для установки количества недель для хранения данных в выходном каталоге. Более старые недели и дни автоматически удаляются из каталога.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-s | --sample number</p>
</blockquote></td>
<td><blockquote>
<p>количество выборок запроса для хранения. <em>По умолчанию:</em> 3</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-S | --select-only</p>
</blockquote></td>
<td><blockquote>
<p>сообщение только о SELECT-запросах</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-t | --top number</p>
</blockquote></td>
<td><blockquote>
<p>количество запросов для хранения / отображения. <em>По умолчанию:</em> 20</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-T | --title string</p>
</blockquote></td>
<td><blockquote>
<p>изменение заголовка отчета HTML-страницы</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-u | --dbuser username</p>
</blockquote></td>
<td><blockquote>
<p>отчет только по записям для указанного пользователя</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <span id="_bookmark12" class="anchor"></span><sup>1</sup> данная опция поддерживается только в версии компонента 11.8

<table>
<colgroup>
<col style="width: 29%" />
<col style="width: 70%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Опция</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Назначение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>-U | --exclude-user</p>
<p>username</p>
</blockquote></td>
<td><blockquote>
<p>исключение записи для указанного пользователя из отчета. Может</p>
<p>быть использовано несколько раз</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-v | --verbose</p>
</blockquote></td>
<td><blockquote>
<p>включение режима просмотра или отладки. <em>По умолчанию отключен</em></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-V | --version</p>
</blockquote></td>
<td><blockquote>
<p>версия pgBadger</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-w | --watch-mode</p>
</blockquote></td>
<td><blockquote>
<p>сообщение только об ошибках</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-W | --wide-char</p>
</blockquote></td>
<td><blockquote>
<p>кодирование HTML-вывода запросов в UTF8; позволяет избегать</p>
<p>появления сообщения "Wide character in print"</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-x | --extension</p>
</blockquote></td>
<td><blockquote>
<p>формат вывода. Значения: text, html, bin, json или tsung. <em>По</em></p>
<p><em>умолчанию:</em> html</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-X | --extra-files</p>
</blockquote></td>
<td><blockquote>
<p>в инкрементальном режиме позволяет pgBadger записывать CSS и JS</p>
<p>файлы в выходной каталог в виде отдельных файлов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-z | --zcat exec_path</p>
</blockquote></td>
<td><blockquote>
<p>полный путь к программе zcat. Используется, если zcat, bzcat, или</p>
<p>unzip не найдена</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-Z | --timezone +/-XX</p>
</blockquote></td>
<td><blockquote>
<p>количество часов от GMT для данного часового пояса. Используется</p>
<p>для корректировки даты / времени в графиках JavaScript</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--pie-limit num</p>
</blockquote></td>
<td><blockquote>
<p>не выводить подписи на круговых диаграммах для значений меньше</p>
<p>num (задается в процентах, <em>по умолчанию</em> 2)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--exclude-query regex</p>
</blockquote></td>
<td><blockquote>
<p>запрос, соответствующий заданному регулярному выражению,</p>
<p>будет исключен из отчета. Может быть использован несколько раз</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--exclude-file filename</p>
</blockquote></td>
<td><blockquote>
<p>путь к файлу, который содержит все регулярные выражения для исключения запросов из отчета. Допускается одно регулярное</p>
<p>выражение на строку</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--include-query regex</p>
</blockquote></td>
<td><blockquote>
<p>запрос, который не соответствует заданному регулярному выражению, будет исключен из отчета. Может быть использован</p>
<p>несколько раз</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--include-file filename</p>
</blockquote></td>
<td><blockquote>
<p>путь к файлу, содержащему все регулярные выражения для включения в отчет. Допускается одно регулярное выражение на</p>
<p>строку</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--disable-error</p>
</blockquote></td>
<td><blockquote>
<p>запрет формирования отчета об ошибках</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--disable-hourly</p>
</blockquote></td>
<td><blockquote>
<p>запрет формирования почасового отчета</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--disable-type</p>
</blockquote></td>
<td><blockquote>
<p>запрет формирования отчета о запросах по типу, базе данных или</p>
<p>пользователю</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--disable-query</p>
</blockquote></td>
<td><blockquote>
<p>запрет формирования отчета о запросах (медленные, самые частые,</p>
<p>запросы по пользователям, по базам данных и т.п.)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--disable-session</p>
</blockquote></td>
<td><blockquote>
<p>запрет формирования отчета о сессиях</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--disable-connection</p>
</blockquote></td>
<td><blockquote>
<p>запрет формирования отчета о соединениях</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--disable-lock</p>
</blockquote></td>
<td><blockquote>
<p>запрет формирования отчета о блокировках</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--disable-temporary</p>
</blockquote></td>
<td><blockquote>
<p>запрет формирования отчетов о временных событиях</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--disable-checkpoint</p>
</blockquote></td>
<td><blockquote>
<p>запрет формирования отчета о контрольной точке / перезагрузке</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--disable-autovacuum</p>
</blockquote></td>
<td><blockquote>
<p>запрет формирования отчета об автовакууме</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--charset</p>
</blockquote></td>
<td><blockquote>
<p>установка используемой кодировки HTML. По умолчанию: UTF-8</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--csv-separator</p>
</blockquote></td>
<td><blockquote>
<p>установка разделителя полей CSV, по умолчанию: <em>"</em>,<em>"</em></p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 29%" />
<col style="width: 70%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Опция</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Назначение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>--exclude-time regex</p>
</blockquote></td>
<td><blockquote>
<p>любая временная метка, соответствующая заданному регулярному</p>
<p>выражению, будет исключена из отчета. Может быть использована несколько раз</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--include-time regex</p>
</blockquote></td>
<td><blockquote>
<p>только временная метка, соответствующая заданному регулярному</p>
<p>выражению, будет включена в отчет. Может быть использована несколько раз</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--exclude-db name</p>
</blockquote></td>
<td><blockquote>
<p>исключение записи журнала для указанной базы данных из отчета.</p>
<p>Может быть использована несколько раз</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--exclude-appname name</p>
</blockquote></td>
<td><blockquote>
<p>исключение записи журнала для указанного имени приложения из</p>
<p>отчета. Может быть использована несколько раз</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--exclude-line regex</p>
</blockquote></td>
<td><blockquote>
<p>исключение любой записи журнала, которая соответствует</p>
<p>заданному регулярному выражению. Может быть использована несколько раз</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--exclude-client name</p>
</blockquote></td>
<td><blockquote>
<p>исключение записи журнала для указанного IP-клиента. Может быть</p>
<p>использована несколько раз</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--anonymize</p>
</blockquote></td>
<td><blockquote>
<p>скрытие всех фиксированных данных в запросах</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--noreport</p>
</blockquote></td>
<td><blockquote>
<p>запрет pgBadger создавать отчеты в инкрементальном режиме</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--log-duration</p>
</blockquote></td>
<td><blockquote>
<p>обработка pgBadger записей журнала, созданных как с log_duration =</p>
<p>on, так и с log_statement = 'all'</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--enable-checksum</p>
</blockquote></td>
<td><blockquote>
<p>добавление md5-суммы под каждым запросом</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--journalctl command</p>
</blockquote></td>
<td><blockquote>
<p>добавление к списку файлов регистрации событий СУБД команду вызова системного журнала journalctl для включения его записей в</p>
<p>отчет. <em>Например:</em> journalctl -u jatoba-1</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--pid-dir path</p>
</blockquote></td>
<td><blockquote>
<p>путь, где должен храниться файл pid. <em>По умолчанию</em> /tmp</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--prettify-json</p>
</blockquote></td>
<td><blockquote>
<p>форматирование вывода json</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--month-report YYYY-MM</p>
</blockquote></td>
<td><blockquote>
<p>создание кумулятивного HTML-отчета за указанный месяц</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--day-report YYYY-MM-</p>
<p>DD</p>
</blockquote></td>
<td><blockquote>
<p>создание HTML-отчета за указанный день</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--noexplain</p>
</blockquote></td>
<td><blockquote>
<p>не обрабатывать строки, сгенерированные auto_explain</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--command CMD</p>
</blockquote></td>
<td><blockquote>
<p>получение записей журнала через стандартный ввод от вывода</p>
<p>команды, указанной в параметре</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--no-week</p>
</blockquote></td>
<td><blockquote>
<p>отмена еженедельных отчетов в инкрементальном режиме</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--explain-url URL</p>
</blockquote></td>
<td><blockquote>
<p>переопределение URL-адреса графического инструмента для EXPLAIN. <em>По умолчанию:</em></p>
<p><a href="http://explain.depesz.com/?is_public=0&amp;is_anon=0&amp;plan">http://explain.depesz.com/?is_public=0&amp;is_anon=0&amp;plan=</a></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--tempdir DIR</p>
</blockquote></td>
<td><blockquote>
<p>каталог, в который будут записываться временные файлы. <em>По</em></p>
<p><em>умолчанию:</em> File::Spec-&gt;tmpdir() || '/tmp'</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--no-process-info</p>
</blockquote></td>
<td><blockquote>
<p>запрет на изменение названия процесса при идентификации</p>
<p>процесса pgBadger</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--dump-all-queries</p>
</blockquote></td>
<td><blockquote>
<p>сброс всех запросов, найденных в лог-файле</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--keep-comments</p>
</blockquote></td>
<td><blockquote>
<p>запрет на удаление комментариев из нормализованных запросов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--no-progressbar</p>
</blockquote></td>
<td><blockquote>
<p>отключение панели прогресса</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Формат значения datetime

> Формат **datetime** может быть задан в формате метки времени (включает дату и время) или в формате времени.
>
> Формат метка времени **YYYY-MM-DD hh:mm:ss.SZ**. Формат значения времени **hh:mm:ss.SSSZZZ**.
>
> YYYY – год, MM – месяц, DD – день, hh – час, mm – минут, ss – секунда, «.S» – миллисекунды, Z – часовой пояс, заданный в формате \[+\|-\] hh\[:mm\[:ss\]\].
>
> Пример.
>
> 2021-08-27 14:12:45.34567+03.

## SSH опции

> Компонент «pgBadger» способен анализировать удаленный файл журнала, используя SSH-соединение. При настройке SSH возможна поддержка аутентификации без пароля, при этом пароль заменяется сгенерированными ключами.
>
> Опция **-r** или **--remote-host** задает IP-адрес или имя хоста.
>
> В таблице [5.2](#_bookmark15) приведены дополнительные опции, позволяющие полностью контролировать SSH-соединение.
>
> <span id="_bookmark15" class="anchor"></span>Таблица 5.2 – Дополнительные опции для контроля SSH-соединения

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Опция</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Назначение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>--ssh-program ssh</p>
</blockquote></td>
<td><blockquote>
<p>путь к используемой SSH-программе. <em>По умолчанию:</em> ssh</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--ssh-port port ssh</p>
</blockquote></td>
<td><blockquote>
<p>порт, используемый для соединения. <em>По умолчанию:</em> 22</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--ssh-user name</p>
</blockquote></td>
<td><blockquote>
<p>имя пользователя, логин подключения. <em>По умолчанию: текущий</em></p>
<p><em>пользователь</em></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--ssh-identity file</p>
</blockquote></td>
<td><blockquote>
<p>путь к используемому файлу идентификации</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--ssh-timeout second</p>
</blockquote></td>
<td><blockquote>
<p>время до отказа SSH-соединения. <em>По умолчанию</em> 10 <em>секунд</em></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--ssh-option options</p>
</blockquote></td>
<td><blockquote>
<p>список опций -o, передаваемых SSH-программе. Всегда передаются опции (значение ConnectTimeout берется из параметра --ssh-timeout):</p>
<p>-o ConnectTimeout=10</p>
<p>-o PreferredAuthentications=hostbased,publickey</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Примеры использования

> В данном разделе приведены общие примеры синтаксиса некоторых опций и специальные примеры, направленные на решение конкретной задачи.
>
> Общие примеры синтаксиса:
>
> pgbadger /var/log/jatoba.log
>
> pgbadger /var/log/jatoba.log.2.gz /var/log/jatoba.log.1.gz
>
> /var/log/jatoba.log
>
> pgbadger /var/log/jatoba/jatoba-2021-08-\*
>
> pgbadger --exclude-query="^(COPY\|COMMIT)" /var/log/jatoba.log pgbadger -b "2021-09-25 10:56:11" -e "2021-09-25 10:59:11"
>
> /var/log/jatoba.log
>
> cat /var/log/jatoba.log \| pgbadger -
>
> pgbadger --prefix '%t \[%p\]: user=%u,db=%d,client=%h'
>
> /var/lib/jatoba/4/data/log/jatoba-2021-08-21\* pgbadger --prefix '%m %u@%d %p %r %a : '
>
> /var/lib/jatoba/4/data/log/jatoba.log
>
> pgbadger --prefix 'user=%u,db=%d,client=%h,appname=%a'
>
> /var/lib/jatoba/4/data/log/jatoba-2021-08-21\*
>
> pgbadger -j 8 /var/lib/jatoba/4/data/log/jatoba-10.1-main.log
>
> Специальные примеры синтаксиса:
>
> − использование URL для удаленного файла журнала:
>
> pgbadger <http://10.96.1.50/var/log/jatoba/jatoba-10.1-main.log> pgbadger ftp://username@10.96.1.50/jatoba-10.1-main.log pgbadger ssh://username@10.96.1.50/var/log/jatoba/jatoba-10.1-main.log\*
>
> − совместное использование локальных и удаленных журнальных файлов:
>
> pgbadger /var/log/jatoba/jatoba-10.1-main.log ssh
>
> ://[username@10.96.1.50/](mailto:username@10.96.1.50) var/log/ jatoba.log

- создание XML-файла в формате Tsung [<sup>2</sup>](#_bookmark17) сессий только с выборочными запросами:

> pgbadger -S -o sessions.tsung --prefix '%t \[%p\]: user=%u,db=%d ' /var/lib/jatoba/4/data/log/jatoba.log
>
> <span id="_bookmark17" class="anchor"></span><sup>2</sup> Для использования в системе распределенного нагрузочного тестирования Tsung, <http://tsung.erlang-projects.org/>

- еженедельный отчет об ошибках по заданию cron:

> 30 23 \* \* \* 1 /usr/jatoba-4/bin/pgbadger -q -w
>
> /var/log/jatoba.log -o /var/reports/jatoba_errors.html

- создание еженедельного отчета, используя инкрементальный режим (лог-файл и HTML-отчет обновляются каждую неделю):

> 0 4 \* \* \* 1 /usr/jatoba-4/bin/pgbadger -q \`find /var/log/ - mtime -7 -name "jatoba.log\*"\` -o /var/reports/jatoba_errors-
>
> \`date +\\F\`.html -l /var/reports/pgbadger_incremental_file.dat

- использование автоматически генерируемых инкрементальных отчетов (генерирует ежедневный и еженедельный отчеты):

> 0 4 \* \* \* /usr/jatoba-4/bin/pgbadger -I -q
>
> /var/log/jatoba/jatoba.log.1 -O /var/www/html/jatoba_reports/

- указание периода в неделях, которые будут храниться в отчетах, в инкрементальном режиме:

> /usr/jatoba-4/bin/pgbadger --retention 2 -I -q
>
> /var/log/jatoba/jatoba.log.1 -O /var/www/html/jatoba_reports/

- исключение из отчета периода, в который информация не собиралась (если в отчете есть параметр **pg_dump**). Например, **pg_dump** работает в 23:00 и 13:00 каждый день в течение получаса в сентябре 2021 года. Исключить этот период из отчета возможно следующим образом:

> pgbadger --exclude-time "2021-09-.\* (23\|13):.\*" jatoba.log
>
> Это поможет избежать появления COPY-запросов, генерируемых **pg_dump**, на вершине списка самых медленных запросов.
>
> <img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" />Параметр **--exclude-appname** "pg_dump" позволяет решить проблему появления COPY-запросов более простым способом.

- вывод **journalctl** может быть разобран, как файл журнала:

> pgbadger --journalctl 'journalctl -u jatoba-1.service’

- вызов **journalctl** с удаленного хоста:

> pgbadger -r 10.96.1.50 --journalctl 'journalctl -u jatoba-
>
> 1.service'

- восстановление всех инкрементных HTML-отчетов (обновление всех файлов ресурсов JS и CSS):

> rm /path/to/reports/\*.js rm /path/to/reports/\*.css
>
> pgbadger -X -I -O /path/to/reports/ --rebuild
>
> Необходимо использовать опцию **-E** или **--explode**, если ранее эти отчеты были построены с использованием этой опции.

- <img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" /><img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" />для создания кумулятивного отчета за месяц (добавление ссылки в название месяца представления календаря в инкрементальных отчетах) используется команда:

> pgbadger --month-report 2021-05 –O /path/to/ incremantal/reports/
>
> Необходимо использовать опцию **-E** или **--explode**, если ранее инкрементальные отчеты были построены с использованием этой опции.

# ЖУРНАЛИРОВАНИЕ ЗАПРОСОВ

> Журналирование запросов включает в себя параметры – **log_min_duration_statement**, **log_duration** и **log_statement**.
>
> При необходимости включения в статистику запросов продолжительности выполнения всех команд, время работы которых равно или превышает указанное количество миллисекунд, в параметре **log_min_duration_statement** необходимо установить значение равным 0 или больше. По умолчанию отключено (принимает значение «-1»).
>
> Для отображения длительности выполнения всех завершенных команд, нужно установить значение параметра **log_duration = on** в конфигурационном файле **postgresql.conf**.
>
> Значение параметра **log_duration = on** не означает одно и то же, что установка **log_min_duration_statement = 0**. При превышении значения **log_min_duration_statement** в журнал записывается текст запроса, а при включении данного параметра – нет.
>
> При **log_duration = on** и положительном значении **log_min_duration_statement** в журнал записывается длительность всех команд, а текст запросов – только для команд с длительностью, превысившей установленный в параметре предел.
>
> Для добавления отчета о наиболее распространенных запросах, нужно установить
>
> **log_min_duration_statement** в значение больше 0, либо включить **log_statement**.
>
> <img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25208in;height:0.25208in" /><img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25208in;height:0.25208in" />Включение **log_min_duration_statement** добавит отчеты о самых медленных запросах и запросах, которые заняли больше всего времени.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Если для параметра <strong>log_statement</strong> установлено значение <strong>'all'</strong>, то при включении <strong>log_min_duration_statement</strong> запросы регистрироваться в журнал не будут.</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>При использовании <strong>log_min_duration_statement</strong> совместно с <strong>log_statement</strong>, текст SQL-запросов будет записываться только один раз (от использования</p>
<p><strong>log_statement</strong>) без дублирования в сообщении о длительности выполнения.</p>
</blockquote></td>
</tr>
</tbody>
</table>

# ПАРАЛЛЕЛЬНАЯ ОБРАБОТКА

> Компонент «pgBadger» позволяет выполнять параллельную обработку одного или нескольких файлов журнала с помощью параметров **-j N** или **–J N** (например, **pgbadger -j 8**).
>
> В первом случае (**-j N**) каждый файл журнала разбивается на N частей и обрабатывается отдельным параллельным процессом. Данный режим рекомендуется для обработки файлов журнала большого объема.
>
> Во втором случае (**–J N**) каждый файл журнала целиком обрабатывается отдельным параллельным процессом (всего будет создано N параллельных процессов). Данный режим рекомендуется для обработки большого количества файлов, каждый из которых имеет сравнительно небольшой размер.
>
> Указанные режимы можно комбинировать (одновременная обработка сразу нескольких файлов, каждый из которых, в свою очередь, обрабатывается несколькими параллельными процессами).
>
> Значения N этих параметров определяется исходя из количества доступных ядер в системе. Использование значений N при параллельной обработке (в том числе при комбинировании режимов), превышающее количество ядер, приведет к потере скорости параллельной обработки.
>
> Ниже приведен пример параллельной обработки, выполненной разными способами:
>
> Вариант 1 – параллельная обработка, выполненная на сервере с 8 процессорами и одним файлом размером 9,5 ГБ:

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 23%" />
<col style="width: 18%" />
<col style="width: 18%" />
<col style="width: 18%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Вариант</p>
</blockquote></th>
<th><blockquote>
<p>1 CPU</p>
</blockquote></th>
<th><blockquote>
<p>2 CPU</p>
</blockquote></th>
<th><blockquote>
<p>4 CPU</p>
</blockquote></th>
<th><blockquote>
<p>8 CPU</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>-j</p>
</blockquote></td>
<td><blockquote>
<p>1h41m18</p>
</blockquote></td>
<td><blockquote>
<p>50m25</p>
</blockquote></td>
<td><blockquote>
<p>25m39</p>
</blockquote></td>
<td><blockquote>
<p>15m58</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-J</p>
</blockquote></td>
<td><blockquote>
<p>1h41m18</p>
</blockquote></td>
<td><blockquote>
<p>54m28</p>
</blockquote></td>
<td><blockquote>
<p>41m16</p>
</blockquote></td>
<td><blockquote>
<p>34m45</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Вариант 2 – параллельная обработка, выполненная на сервере с 8 процессорами и 200 файлами журналов по 10 МБ каждый и общим объемом 2 ГБ:

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 23%" />
<col style="width: 18%" />
<col style="width: 18%" />
<col style="width: 18%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Вариант</p>
</blockquote></th>
<th><blockquote>
<p>1 CPU</p>
</blockquote></th>
<th><blockquote>
<p>2 CPU</p>
</blockquote></th>
<th><blockquote>
<p>4 CPU</p>
</blockquote></th>
<th><blockquote>
<p>8 CPU</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>-j</p>
</blockquote></td>
<td><blockquote>
<p>20m15</p>
</blockquote></td>
<td><blockquote>
<p>9m56</p>
</blockquote></td>
<td><blockquote>
<p>5m20</p>
</blockquote></td>
<td><blockquote>
<p>4m20</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-J</p>
</blockquote></td>
<td><blockquote>
<p>20m15</p>
</blockquote></td>
<td><blockquote>
<p>9m49</p>
</blockquote></td>
<td><blockquote>
<p>5m00</p>
</blockquote></td>
<td><blockquote>
<p>2m40</p>
</blockquote></td>
</tr>
</tbody>
</table>

<img src="../docs/assets/images/com18.3.1/pgbadger/media/image2.png" style="width:0.25208in;height:0.25208in" /><img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25208in;height:0.25208in" />

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><blockquote>
<p>При параллельной обработке компонентом «pgBadger» осуществляется генерация большого количества временных файлов в каталоге <strong>/tmp</strong>, которые будут автоматически удалены по завершению работы.</p>
<p>Удалять временные файлы в процессе работы утилиты нельзя.</p>
<p>Для идентификации файлов используется следующий шаблон в наименовании: tmp_pgBadgerXXXX.bin.</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Параллельная обработка не может использоваться со сжатыми файлами или CSV-файлами, а также, на платформе Windows.</p>
</blockquote></td>
</tr>
</tbody>
</table>

# ИНКРЕМЕНТАЛЬНЫЕ ОТЧЕТЫ

> Компонент «pgBadger» включает режим автоматического инкрементального отчета с помощью опции **-I** или **--incremental**.
>
> При работе в этом режиме утилита **pgbadger** генерирует один отчет в день и суммарный отчет в неделю. Сначала вывод осуществляется в двоичном формате в обязательный выходной каталог (см. опцию **-O** или **--outdir** из таблицы [5.1](#_bookmark11)), затем в формате HTML для ежедневных и еженедельных отчетов с основным индексным файлом.
>
> В главном индексном файле будет отображено выпадающее меню по неделям со ссылкой на каждый недельный отчет и ссылками на ежедневные отчеты каждой недели.
>
> Если запустить утилиту **pgbadger** следующим образом на основе ежедневно чередующихся файлов:
>
> 0 4 \* \* \* /usr/jatoba-4/bin/pgbadger -I -q
>
> /var/log/jatoba/jatoba.log.1 -O /var/www/html/jatoba_reports/
>
> в результате работы будут получены все ежедневные и еженедельные отчеты за весь период работы.
>
> В этом режиме утилита **pgbadger** создаст автоматический инкрементный файл в выходном каталоге. Для изменения пути к данному файлу необходимо использовать опцию
>
> **-l**. Утилиту **pgbadger** можно запускать в режиме, при котором каждый день работы будет записываться в файл, предназначенный только для записей этого дня недели.
>
> Для экономии дискового пространства используется опция командной строки **-X** или
>
> **--extra-files**, чтобы компонент «pgBadger» записывал JavaScript и CSS в отдельные файлы в выходном каталоге. Затем эти ресурсы будут загружены с помощью тегов script и link.

# ЕЖЕМЕСЯЧНЫЕ ОТЧЕТЫ

> По умолчанию компонент «pgBadger» в инкрементальном режиме рассчитывает только ежедневные и еженедельные отчеты.
>
> Для получения ежемесячного сводного отчета необходимо использовать отдельную команду.
>
> Например, чтобы построить отчет за август 2021 года необходимо воспользоваться командой:
>
> pgbadger -X --month-report 2021-08
>
> /var/www/html/jatoba_reports/
>
> это добавит ссылку на название месяца в календарный вид инкрементных отчетов для просмотра ежемесячного отчета. Отчет за текущий месяц можно запускать ежедневно, при этом каждый раз он полностью перестраивается.
>
> <img src="../docs/assets/images/com18.3.1/pgbadger/media/image1.png" style="width:0.25in;height:0.25in" />Ежемесячный отчет не строится по умолчанию, так как занимает много времени из-за большого количества данных.
>
> Если отчеты, на основании которых строится месячный отчет (ежедневные или еженедельные), были построены с опцией **-E** (**--explode**), то данная опция должна быть использована при вызове pbadger для построения ежемесячного отчета:
>
> pgbadger -E -X --month-report 2021-08 -O
>
> /var/www/html/jatoba_reports/
>
> То же самое происходит при использовании опции перестройки **-R** (**--rebuild**).

# БИНАРНЫЙ ФОРМАТ

> Используя бинарный формат можно создавать пользовательские инкрементальные и кумулятивные отчеты.
>
> Пример 1.
>
> При необходимости обновления отчета утилита **pgbadger** каждый час из ежедневного файла журнала СУБД, для генерации инкрементных файлов данных в двоичном формате, следует выполнять следующие команды:
>
> pgbadger --last-parsed .pgbadger_last_state_file -o sunday/hourX.bin /var/lib/jatoba/4/data/log/jatoba-Sun.log
>
> для генерации инкрементных файлов данных в двоичном формате. Затем сгенерировать HTML-отчет из этого двоичного файла командой:
>
> pgbadger sunday/\*.bin
>
> Пример 2.
>
> При генерации одного файла журнала в час и необходимости перестроения отчетов при каждой ротации файла журнала необходимо выполнить следующие действия:
>
> pgbadger -o day1/hour01.bin /var/lib/jatoba/4/data/log/jatoba-2021-08-23_10.log
>
> pgbadger -o day1/hour02.bin /var/lib/jatoba/4/data/log/jatoba-2021-08-23_11.log
>
> pgbadger -o day1/hour03.bin /var/lib/jatoba/4/data/log/jatoba-2021-08-23_12.log
>
> Для обновления HTML-отчета, например, каждый раз после создания нового двоичного файла нужно ввести следующую команду:
>
> pgbadger -o day1_report.html day1/\*.bin
>
> и настроить команды в соответствии с конкретными потребностями.

# ФОРМАТ JSON

> Формирование отчета возможно в формате JSON через параметр **-o** (**--output**). Данный формат хорошо подходит для интеграции компонента «pgBadger» в другие системы мониторинга.

# ОТЧЕТЫ, ПОЛУЧАЕМЫЕ С ПОМОЩЬЮ КОМПОНЕНТА

> Компонент «pgBadger» собирает данные о SQL-запросах:

<table>
<colgroup>
<col style="width: 40%" />
<col style="width: 59%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Overall statistics</p>
</blockquote></th>
<th><blockquote>
<p>Общая статистика</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>The most frequent waiting queries</p>
</blockquote></td>
<td><blockquote>
<p>Наиболее частые ожидающие запросы</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Queries that waited the most</p>
</blockquote></td>
<td><blockquote>
<p>Запросы с наибольшим временем ожидания</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Queries generating the most temporary files</p>
</blockquote></td>
<td><blockquote>
<p>Запросы, генерирующие больше всего временных файлов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Queries generating the largest temporary files</p>
</blockquote></td>
<td><blockquote>
<p>Запросы, генерирующие самые большие временные файлы</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>The slowest queries</p>
</blockquote></td>
<td><blockquote>
<p>Самые медленные запросы</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Queries that took up the most time</p>
</blockquote></td>
<td><blockquote>
<p>Запросы, занимающие больше всего времени</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>The most frequent queries</p>
</blockquote></td>
<td><blockquote>
<p>Самые частые запросы</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Histogram of query times</p>
</blockquote></td>
<td><blockquote>
<p>Гистограмма продолжительности запросов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Histogram of sessions times</p>
</blockquote></td>
<td><blockquote>
<p>Гистограмма продолжительности сессий</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Users involved in top queries</p>
</blockquote></td>
<td><blockquote>
<p>Пользователи наиболее частых запросов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Applications involved in top queries</p>
</blockquote></td>
<td><blockquote>
<p>Приложения наиболее частых запросов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Queries generating the most cancellation</p>
</blockquote></td>
<td><blockquote>
<p>Запросы, вызывающие наибольшее количество отмен</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Queries most cancelled</p>
</blockquote></td>
<td><blockquote>
<p>Наиболее частые отмененные запросы</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>The most time consuming prepare/bind queries</p>
</blockquote></td>
<td><blockquote>
<p>Самые трудоемкие запросы на подготовку/привязку параметров</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Доступны следующие отчеты с почасовыми графиками, разделенными на периоды по пять минут:

<table>
<colgroup>
<col style="width: 40%" />
<col style="width: 59%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>SQL queries statistics</p>
</blockquote></th>
<th><blockquote>
<p>Статистика SQL-запросов</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Temporary file statistics</p>
</blockquote></td>
<td><blockquote>
<p>Статистика временных файлов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Checkpoints statistics</p>
</blockquote></td>
<td><blockquote>
<p>Статистика контрольных точек</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Autovacuum and autoanalyze statistics</p>
</blockquote></td>
<td><blockquote>
<p>Статистика автовакуума и автоанализа</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 40%" />
<col style="width: 59%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Cancelled queries</p>
</blockquote></th>
<th><blockquote>
<p>Отмененные запросы</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Error events (panic, fatal, error and warning)</p>
</blockquote></td>
<td><blockquote>
<p>События ошибок (паника, фатальная ошибка, ошибка и предупреждение)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Error class distribution</p>
</blockquote></td>
<td><blockquote>
<p>Распределение классов ошибок</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Круговые диаграммы о распределении:

<table>
<colgroup>
<col style="width: 47%" />
<col style="width: 52%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Locks statistics</p>
</blockquote></th>
<th><blockquote>
<p>Статистика блокировок</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Queries by type (select/insert/update/delete)</p>
</blockquote></td>
<td><blockquote>
<p>Запросы по типу (выбрать/вставить/обновить/удалить)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Distribution of queries type per database/application</p>
</blockquote></td>
<td><blockquote>
<p>Распределение типов запросов по базе данных/приложению</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Sessions per database/user/client/application</p>
</blockquote></td>
<td><blockquote>
<p>Сеансы для каждой базы данных/пользователей/клиентов/приложений</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Connections per database/user/client/application</p>
</blockquote></td>
<td><blockquote>
<p>Количество подключений для каждой базы данных/пользователей/клиентов/приложений</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Autovacuum and autoanalyze per table</p>
</blockquote></td>
<td><blockquote>
<p>Автовакуум и автоанализ по таблице</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Queries per user and total duration per user</p>
</blockquote></td>
<td><blockquote>
<p>Запросы пользователя и общая продолжительность запросов пользователя</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Все диаграммы можно масштабировать и сохранять в формате PNG. Ко всем SQL-запросам автоматически применяется подсветка синтаксиса и выравнивание.
>
> Точность гистограммы настраивается с помощью ключа **-A**. По умолчанию в гистограммах отображается среднее значение каждого топ-запроса / ошибки, произошедшей за час, но возможно указать гранулярность вплоть до минут.

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 6%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>HTML</p>
</blockquote></th>
<th><blockquote>
<p>–</p>
</blockquote></th>
<th><blockquote>
<p>HyperText Markup Language — стандартизированный язык разметки</p>
<p>документов для просмотра веб-страниц в браузере</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>IP-адрес</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Internet Protocol — уникальный числовой идентификатор устройства в компьютерной сети, работающей по протоколу TCP/IP</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>JSON</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>JavaScript Object Notation — текстовый формат обмена данными, основанный на JavaScript</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SSH</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Secure Shell — сетевой протокол прикладного уровня</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SQL</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Structured Query Language — язык структурированных запросов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>XML</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>eXtensible Markup Language — расширяемый язык разметки</p>
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
