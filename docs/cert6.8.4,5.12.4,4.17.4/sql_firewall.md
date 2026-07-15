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
<p><strong>Руководство по настройке. Часть 17.<br />
Выявление и предотвращение исполнения нетипичных SQL-запросов.<br />
Компонент «SQL_Firewall»</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-17</strong></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">Листов 24</td>
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

В документе приведены сведения, необходимые для установки и эксплуатации компонента «SQL_Firewall» (далее – компонент или SQL_Firewall). Настоящее руководство предназначено для администратора защищенной системы управления базами данных (СУБД) «Jatoba».

Администратор СУБД «Jatoba» должен иметь навыки по работе с СУБД PostgreSQL или защищенной СУБД Jatoba (ООО «Газинформсервис»).

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:</p>
<ul>
<li></li>
<li></li>
</ul>
<p>ОС Windows – «C:\Program Files\GIS\Jatoba\6\bin»;ОС Linux – «/usr/jatoba-6/bin».Версия компонента – 0.8.1</p></th>
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
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image2.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image1.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонента [4](#назначение-компонента)](#назначение-компонента)

[1.1. Условия применения [4](#условия-применения)](#условия-применения)

[2. Установка и настройка [5](#установка-и-настройка)](#установка-и-настройка)

[2.1. Установка компонента «SQL_Firewall» в ОС GNU/Linux [5](#установка-компонента-sql_firewall-в-ос-gnulinux)](#установка-компонента-sql_firewall-в-ос-gnulinux)

[2.2. Установка/удаление в ОС Microsoft Windows [6](#_Toc166574101)](#_Toc166574101)

[2.3. Настройка конфигурационного фала postgresql.conf [8](#настройка-конфигурационного-фала-postgresql.conf)](#настройка-конфигурационного-фала-postgresql.conf)

[2.4. Установка расширения компонента «SQL_Firewall» [8](#установка-расширения-компонента-sql_firewall)](#установка-расширения-компонента-sql_firewall)

[3. Функциональные возможности [10](#функциональные-возможности)](#функциональные-возможности)

[3.1. Режимы функционирования компонента [12](#режимы-функционирования-компонента)](#режимы-функционирования-компонента)

[3.1.1. Режим обучения «learning» [12](#learning-режим-обученияenforcing-режим-примененияpermissive-режим-разрешающий-любые-sql-запросыdisabled-режим-отключенного-модуля.режим-обучения-learning)](#learning-режим-обученияenforcing-режим-примененияpermissive-режим-разрешающий-любые-sql-запросыdisabled-режим-отключенного-модуля.режим-обучения-learning)

[3.1.2. Режим применения «enforcing» [13](#режим-применения-enforcing)](#режим-применения-enforcing)

[3.1.3. Режим разрешающий «permissive» [13](#режим-разрешающий-permissive)](#режим-разрешающий-permissive)

[3.1.4. Режим отключения компонента «disabled» [14](#режим-отключения-компонента-disabled)](#режим-отключения-компонента-disabled)

[4. Описание операций [15](#описание-операций)](#описание-операций)

[4.1. Функции просмотра [15](#функции-просмотра)](#функции-просмотра)

[4.1.1. Просмотр правил брандмауэра (sql_firewall.sql_firewall_statements) [15](#правил-брандмауэрастатистики-брандмауэра.просмотр-правил-брандмауэра-sql_firewall.sql_firewall_statements)](#правил-брандмауэрастатистики-брандмауэра.просмотр-правил-брандмауэра-sql_firewall.sql_firewall_statements)

[4.1.2. Просмотр статистики (sql_firewall.sql_firewall_stat) [16](#userid-идентификационный-номер-пользователя-идентификационный-номер-10-присваивается-роли-postgresqweryid-идентификационный-номер-запросаqwery-тело-запросаcalls-вызовы.просмотр-статистики-sql_firewall.sql_firewall_stat)](#userid-идентификационный-номер-пользователя-идентификационный-номер-10-присваивается-роли-postgresqweryid-идентификационный-номер-запросаqwery-тело-запросаcalls-вызовы.просмотр-статистики-sql_firewall.sql_firewall_stat)

[4.2. Управление функциями мониторинга [17](#управление-функциями-мониторинга)](#управление-функциями-мониторинга)

[4.2.1. Экспорт правил компонента (sql_firewall_export_rule) [17](#экспорт-правил-п.-4.2.1импорт-правил-п.-4.2.2очистка-правил-п.-4.2.3очистка-предупреждений-и-ошибок-п.-4.2.4.экспорт-правил-компонента-sql_firewall_export_rule)](#экспорт-правил-п.-4.2.1импорт-правил-п.-4.2.2очистка-правил-п.-4.2.3очистка-предупреждений-и-ошибок-п.-4.2.4.экспорт-правил-компонента-sql_firewall_export_rule)

[4.2.2. Импорт правил компонента (sql_firewall_import_rule) [18](#импорт-правил-компонента-sql_firewall_import_rule)](#импорт-правил-компонента-sql_firewall_import_rule)

[4.2.3. Очистка правил (sql_firewall_reset) [19](#очистка-правил-sql_firewall_reset)](#очистка-правил-sql_firewall_reset)

[4.2.4. Очистка предупреждений и ошибок (sql_firewall_stat_reset) [20](#очистка-предупреждений-и-ошибок-sql_firewall_stat_reset)](#очистка-предупреждений-и-ошибок-sql_firewall_stat_reset)

[5. Удаление [22](#удаление)](#удаление)

[Перечень сокращений [23](#_Toc166574120)](#_Toc166574120)

# Назначение компонента

Компонент не является межсетевым экраном (firewall) в классическом понимании, как программный или программно-аппаратный элемент компьютерной сети, применяемого для фильтрации трафика.

Компонент SQL_Firewall предназначен для защиты базы данных от SQL-инъекций или неожиданных запросов.

Компонент просматривает запросы, которые могут быть выполнены, и предотвращает либо предупреждает о выполнении запросов, которые не найдены в установленных правилах по аналогии с брандмауэром, т.е. фильтрует трафик SQL-запросов.

## Условия применения

Компонент «SQL_Firewall» может использоваться совместно с СУБД «Jatoba» версии 1.x и выше.

В текущей реализации не поддерживается управление с помощью пользовательского веб-интерфейса для администраторов «Jatoba data safe».

# Установка и настройка

Установка компонента должна производиться от имени пользователя, обладающего административными привилегиями в системе. Компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

## Установка компонента «SQL_Firewall» в ОС GNU/Linux

Установка компонента осуществляется в процессе установки СУБД «Jatoba», также компонент можно установить опционально после основной инсталляции СУБД.

Установку компонента возможно провести двумя способами:

1)  
2)  

установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- 

> для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:apt-get install jatoba4-sql-firewall

- 

> для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:yum install jatoba4-sql-firewall

Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- 

> ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:apt-get install jatoba4-sql-firewall

- 

> openSUSE также распространяется в виде rpm-пакетов, но использует собственный пакетный менеджер zypper, для нее команда установки выглядит следующим образом:zypper install jatoba4-sql-firewall

Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba5-sql-firewall и т.п.

Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Настройка конфигурационного фала postgresql.conf

В разделе «Shared Library Preloading», для последующей загрузки расширения, установить параметр:

> shared_preload_libraries = 'sql_firewall'

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image3.png" style="width:6.92986in;height:1.31244in" />

Рисунок . – Параметр загрузки расширения

Для применения параметров потребуется перезапустить СУБД.

## Установка расширения компонента «SQL_Firewall»

После перезагрузки СУБД и загрузки расширения станет доступной установка расширения «SQL_Firewall».

Расширение устанавливается на всех узлах кластера при помощи SQL-команды:

> CREATE EXTENSION sql_firewall;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image4.png" style="width:7.0859in;height:1.9403in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-19 23-49-15.png" />

Рисунок . – Команда установки расширения в ОС GNU/Linux

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image5.png" style="width:7.08681in;height:1.20149in" />

Рисунок . – Команда установки расширения в ОС Windows

В результате выполнения SQL-команды будет создано расширение (extension) «sql_firewall» в схеме данных.

# Функциональные возможности

Компонент «SQL_Firewall» выполнен в форме расширения СУБД и предназначен для нормализации записи запросов.

Нормализация – процесс, при котором похожие запросы, как правило, отличающиеся только константами (хотя точные правила несколько сложнее) признаются эквивалентными и отслеживаются как одна запись. Это особенно полезно для неподготовленных запросов.

Нормализация реализуется с помощью запросов-"отпечатков" (fingerprinting queries), которые выборочно сериализуют те поля узлов каждого дерева запроса, которые оцениваются как значимые.

Это называется слепок запроса «query jumble». Он отличается от обычной сериализации тем, что информация, такая как сопоставления переменных или значения констант, игнорируется как несущественная для запроса.

Слепок «jumble» получается в результате парсинг-анализа каждого запроса, и 32(64)-битный хеш слепка сохраняется в поле запроса «Query.queryId».

Затем сервер распространяет это значение, делая его доступным в плановом дереве, сгенерированном из запроса.

Исполнитель («executor» – главная процедура, непосредственно выполняющая запрос) может затем использовать это значение, чтобы приписать временные затраты на исполнение запроса ориентируясь по подходящему «queryId».

Для упрощения представления записей, создается "демонстрационная" строка SQL-запроса, в которой константы заменены на символ «?», чтобы было понятнее, что может из себя представлять нормализованная запись.

Чтобы сэкономить на общей памяти «shared memory», и чтобы избежать усечения длинных строк SQL-запроса, эти строки хранятся во временном внешнем файле с текстом SQL-запросов.

Смещения в этот файл хранятся в общей памяти «shared memory» в хэш-таблице.

Каждая запись в хэш-таблице основанная на id (хэше) запроса, рассматривается как "правило" файервола.

"Выученные" правила выводятся для каждого отдельного исходного запроса.

Отслеживается только то количество разных запросов, которое будет соответствовать указанному в конфигурации объему общей памяти «shared memory» – 100 до 5000.

Проверка каждого нового запроса на соответствие правилам производится при попытке записи в хэш-таблицу. Это может произойти сразу после парсинга запроса, или в процессе выполнения команд.

В зависимости от режима расширения записывается сообщение об ошибке и, если это ошибка, вызывается еще и pg_unreachable() за счет механики «ereport».

Также расширение предоставляет возможность импортировать или экспортировать правила при помощи вызова соответствующих функций расширения. При импорте и экспорте правила сохраняются в файл на диске.

Примечание о блокировках: чтобы создать или удалить запись в общей хеш-таблице, нужно захватывать монопольную блокировку pgss-\>lock. Изменение любого поля в записи, кроме счетчиков, требует того же. Чтобы найти запись, нужно удерживать общую блокировку.

Чтобы прочитать или обновить счетчики в записи, необходимо удерживать общую или монопольную блокировку (чтобы запись не исчезла), а также использовать мьютекс spinloсk записи хэш-таблицы.

Переменная общего состояния pgss-\>extent (следующее свободное для записи место во внешнем файле текста SQL-запросов) должна быть доступна только при удержании либо спин-блокировки pgss-\>mutex, либо монопольной блокировки на pgss-\>lock.

Мьютекс используется, чтобы разрешить резервирование файлового пространства, удерживая только общую блокировку на pgss-\>lock.

Перезапись всего внешнего файла текста SQL запросов требует удержания монопольной блокировки pgss-\>lock. Это позволяет читать или записывать отдельные записи в файле, удерживая только общую блокировку.

## Режимы функционирования компонента

Компонент «SQL_Firewall» функционирует в следующих режимах, указанных в параметре sql_firewall.firewall:

- 
- 
- 
- 

### "learning" – режим обучения;"enforcing" – режим применения;"permissive" – режим разрешающий любые SQL запросы;"disabled" – режим отключенного модуля.Режим обучения «learning»

В режиме обучения модуль собирает информацию о пользователе и его запросах. Собирает, записывает и связывает информацию об идентификаторе пользователя «userid» и идентификаторе SQL-запроса «query id».

«query id» устанавливается по дереву синтаксического анализа, аналогично pg_stat_statements.

Режим обучения инициализируется установкой параметра:

> sql_firewall.firewall = 'learning'

в конфигурационном файле СУБД postgresql.conf и последующей перезагрузкой СУБД.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image6.png" style="width:6.92986in;height:1.50728in" />

Рисунок . – Инициализация режима обучения

По умолчанию в режиме обучения может обработаться 5000 запросов. Запросы превышающие данное значение не будут изучаться.

Параметр изучаемых запросов может быть установлен от 100 до 5000, который устанавливается в конфигурационном файле СУБД postgresql.conf

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image7.png" style="width:7.08681in;height:1.47222in" />

Рисунок . – Установка параметра количества обрабатываемых SQL - запросов

### Режим применения «enforcing»

В режиме применения «enforcing», модуль проверяет находятся ли идентификатор пользователя «userid» и его SQL-запрос «query id» в паре, которая была ранее записана в режиме обучения «learning».

Если обнаруживается несоответствие, то пользователю выдается предупреждение о предотвращении выполнения.

Режим применения инициализируется установкой параметра:

> sql_firewall.firewall = 'enforcing'

в конфигурационном файле СУБД postgresql.conf и последующей перезагрузкой СУБД.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image8.png" style="width:6.92986in;height:1.517in" />

Рисунок . – Инициализация режима применения

### Режим разрешающий «permissive»

В разрешающем режиме «permissive» модуль проверяет все запросы, но позволяет их выполнение, даже в случае, если таких запросов нет в правилах модуля. При несовпадениях выполняет запрос и сигнализирует пользователю о выявленном несоответствии.

Режим разрешения инициализируется установкой параметра:

> sql_firewall.firewall = 'permissive'

в конфигурационном файле СУБД postgresql.conf и последующей перезагрузкой СУБД.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image9.png" style="width:6.92986in;height:0.97386in" />

Рисунок . – Инициализация разрешающего режима

### Режим отключения компонента «disabled»

В данном режиме модуль отключен и не проводит ни каких действий и включен по умолчанию.

Режим отключения компонента инициализируется установкой параметра:

> sql_firewall.firewall = 'disabled'

в конфигурационном файле СУБД postgresql.conf и последующей перезагрузкой СУБД.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image10.png" style="width:6.92986in;height:1.44897in" />

Рисунок . – Инициализация отключения модуля

# Описание операций

## Функции просмотра

Компонент обладает функциональными возможностями просмотра:

- 
- 

### правил брандмауэра;статистики брандмауэра.Просмотр правил брандмауэра (sql_firewall.sql_firewall_statements)

Представление sql_firewall_statements показывает правила брандмауэра и счетчик выполнения для каждого запроса.

Просмотр правил брандмауэра выполняется SQL-командой:

> SELECT \* from sql_firewall.sql_firewall_statements;

Данную SQL-команду целесообразно использовать для специального программного обеспечения по управлению СУБД.

При работе в CLI целесообразно изменить ее и использовать ограничение количества символов в поле «query» оператором «substring»:

> SELECT userid, queryid, calls, substring (query from 0 for 90) from sql_firewall.sql_firewall_statements;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image11.png" style="width:7.08681in;height:2.20149in" />

Рисунок . – Просмотр правил брандмауэра в ОС Windows

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image12.png" style="width:7.0859in;height:1.97015in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 05-59-53.png" />

Рисунок . – Просмотр правил брандмауэра в ОС GNU/Linux

В полученном списке отражены поля:

- 
- 
- 
- 

### userid – идентификационный номер пользователя (идентификационный номер 10 присваивается роли postgres);Qweryid – идентификационный номер запроса;Qwery – тело запроса;Calls – вызовы.Просмотр статистики (sql_firewall.sql_firewall_stat)

В представлении sql_firewall_stat есть два счетчика: "sql_warning" и "sql_error".

«sql_warning» показывает количество выполненных запросов с предупреждениями в «разрешающем»" режиме ([permissive](permissive#_Режим_разрешающий_)).

«sql_error» показывает количество предотвращенных запросов в «применительном» режиме ([enforcing](enforcing#_Режим_применения_)).

Просмотр статистика выполняется SQL-командой:

> SELECT \* from sql_firewall.sql_firewall_stat;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image13.png" style="width:7.08681in;height:1.34328in" />

Рисунок . – Просмотр статистики в ОС Windows

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image14.png" style="width:7.0859in;height:1.79851in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 06-01-43.png" />

Рисунок . – Просмотр статистики в ОС GNU/Linux

## Управление функциями мониторинга

Компонент обладает функциональными возможностями управления правилами, такими как:

- 
- 
- 
- 

### экспорт правил (п. 4.2.1);импорт правил (п. 4.2.2);очистка правил (п. 4.2.3);очистка предупреждений и ошибок (п. 4.2.4).Экспорт правил компонента (sql_firewall_export_rule)

Функциональная возможность экспорта правил компонента «sql_firewall» доступна в режиме «[disabled](#режим-отключения-компонента-disabled)» от имени и с правами привилегированного пользователя с атрибутом «Superuser».

SQL-команда экспорта правил SQL-брандмауэра имеет синтаксис:

> sql_firewall_export_rule('/path/to/rule.txt')

Для предотвращения ошибки доступа к файлу рекомендуется размещать его в директории DATA, где у системной учетной записи postgres есть полные права на чтение и запись.

В рассматриваемом примере для ОС GNU/Linux файл rule.txt расположен по пути:

> /var/lib/jatoba/4/data/rule.txt

SQL-команда будет иметь вид:

> SELECT sql_firewall_export_rule('/var/lib/jatoba/4/data/rule.txt');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image15.png" style="width:7.0859in;height:1.76866in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 04-11-27.png" />

Рисунок . – Выполнение команды экспорта правил в ОС GNU/Linux

В рассматриваемом примере для ОС Windows, файл rule.txt расположен по пути:

> C:\Program Files\GIS\Jatoba\4\data\rule.txt

SQL-команда будет иметь вид:

> select sql_firewall_export_rule('C:\Program Files\GIS\Jatoba\4\data\rule.txt');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image16.png" style="width:7.08681in;height:1.31343in" />

Рисунок . – Выполнение команды экспорта правил в ОС Windows

### Импорт правил компонента (sql_firewall_import_rule)

Функциональная возможность импорта правил компонента «sql_firewall» доступна в режиме «[disabled](#режим-отключения-компонента-disabled)» от имени и с правами привилегированного пользователя с атрибутом «Superuser».

SQL-команда экспорта правил SQL-брандмауэра имеет синтаксис:

> sql_firewall_import_rule('/path/to/rule.txt')

В рассматриваемом примере файл rule.txt расположен в директории «import».

В ОС GNU/Linux SQL-команда будет иметь вид:

> SELECT sql_firewall_import_rule('/import/rule.txt');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image17.png" style="width:7.0859in;height:1.96269in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 06-54-25.png" />

Рисунок . – Выполнение команды импорта правил в ОС GNU/Linux

В ОС Windows SQL-команда будет иметь вид:

> SELECT sql_firewall_import_rule('C:\import\rule.txt');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image18.png" style="width:7.08681in;height:1.29105in" />

Рисунок . – Выполнение команды импорта правил в ОС Windows

### Очистка правил (sql_firewall_reset)

Функциональная возможность очистки правил компонента «sql_firewall» доступна в режиме «[disabled](#режим-отключения-компонента-disabled)» от имени и с правами привилегированного пользователя с атрибутом «Superuser» и выполняется SQL-командой:

> SELECT sql_firewall_reset();

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image19.png" style="width:7.0859in;height:1.76119in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 01-30-55.png" />

Рисунок . – SQL-команда очистки правил в ОС GNU/Linux

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image20.png" style="width:7.08681in;height:1.31343in" />

Рисунок . – SQL-команда очистки правил в ОС Windows

В итоге очистятся сформированные правила и перезапишется файл «rule.txt»

Проверить выполнение очистки правил компонента возможно вызовом функции «sql_firewall.sql_firewall_statements».

### Очистка предупреждений и ошибок (sql_firewall_stat_reset)

Функциональная возможность очистки правил компонента «sql_firewall» доступна в режиме «[disabled](#режим-отключения-компонента-disabled)» от имени и с правами привилегированного пользователя с атрибутом «Superuser» и выполняется SQL-командой:

> SELECT sql_firewall_reset();

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image21.png" style="width:7.0859in;height:1.76866in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-20 01-37-46.png" />

Рисунок . – SQL-команда очистки предупреждений и ошибок в ОС GNU/Linux

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sql_firewall/media/image20.png" style="width:7.08681in;height:1.31343in" />

Рисунок . – SQL-команда очистки правил в ОС Windows

По результатам выполнения команды выполнится очистка счетчиков предупреждений и ошибок.

Проверить выполнение очистки правил компонента возможно вызовом функции «[sql_firewall.sql_firewall_stat](#userid-идентификационный-номер-пользователя-идентификационный-номер-10-присваивается-роли-postgresqweryid-идентификационный-номер-запросаqwery-тело-запросаcalls-вызовы.просмотр-статистики-sql_firewall.sql_firewall_stat)», через SQL-команду:

> SELECT \* from sql_firewall.sql_firewall_stat;

# Удаление

Для полного удаления компонента необходимо выполнить следующие действия:

1)  

> удалить расширение SQL-командой:DROP EXTENSION sql_firewall

2)  

> удалить или закомментировать в конфигурационном файле postgresql.conf загрузку компонента:#shared_preload_libraries = 'sql_firewall'
>
> \#sql_firewall.firewall = 'disabled'
>
> \#sql_firewall.max = 5000

3)  

# 

| перезапустить СУБД.<span id="_Toc166574120" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language – язык структурированных запросов |
|----|----|----|
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
