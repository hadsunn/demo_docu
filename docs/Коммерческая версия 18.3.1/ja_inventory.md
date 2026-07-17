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
<p><strong>Руководство по настройке. Часть 23.</strong></p>
<p><strong>Инвентаризация СУБД. Компонент «ja_Inventory»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-23</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 17</p>
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

> <img src="../docs/assets/images/com18.3.1/ja_inventory/media/image1.png" style="width:0.25208in;height:0.25208in" />**АННОТАЦИЯ**
>
> В документе приведены сведения, необходимые для установки и эксплуатации компонента «ja_Inventory» (далее по тексту – «компонент» или ja_inventory), предназначенного для формирования файла отчета об установленной СУБД «Jatoba».
>
> Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/ja_inventory/media/image1.png" style="width:0.25138in;height:0.25051in" />**Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/ja_inventory/media/image2.png" style="width:0.25in;height:0.25in" />**Дополнительная информация** – указания, позволяющие упростить работу с изделием
>
> <img src="../docs/assets/images/com18.3.1/ja_inventory/media/image2.png" style="width:0.24771in;height:0.24635in" />Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра</p>
<p>6.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 4.x по умолчанию устанавливается в директорию:</p>
</blockquote>
<ul>
<li><p>ОС Windows – «C:\Program Files\GIS\Jatoba\4\bin»;</p></li>
<li><p>ОС Linux – «/usr/jatoba-4/bin».</p></li>
</ul>
<blockquote>
<p>Версия компонента — 1.0.1</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p>
</blockquote></td>
</tr>
</tbody>
</table>

> **СОДЕРЖАНИЕ**

1.  1.  
2.  1.  
    2.  
    3.  
3.  1.  
    2.  
    3.  
    4.  
4.  

[Назначение компонента 4](#назначение-компонента)[Условия применения 4](#условия-применения)[Установка и настройка 5](#установка-и-настройка)[Установка компонента «ja_Inventory» на ОС Windows 5](#установка-компонента-ja_inventory-на-ос-windows)[Установка компонента «ja_Inventory» в ОС GNU/Linux 7](#установка-компонента-ja_inventory-в-ос-gnulinux)[Настройка конфигурационного файла «pg_hba.conf» 8](#настройка-конфигурационного-файла-pg_hba.conf)[Функциональные возможности компонента 10](#функциональные-возможности-компонента)[Синтаксис команды подключения 10](#синтаксис-команды-подключения)[Параметры подключения 10](#параметры-подключения)[Права пользователя СУБД 10](#права-пользователя-субд)[Пример подключения к целевой СУБД и получения отчета 13](#пример-подключения-к-целевой-субд-и-получения-отчета)[Отчет в формате JSON 14](#отчет-в-формате-json)[Термины и определения 15](#термины-и-определения)

[Перечень сокращений 16](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент «ja_Inventory» предназначен для сбора на серверах Заказчика информации об установленных СУБД «Jatoba» в форме отчета в формате JSON. В отчет включается информация о:

- версии СУБД;

- количествах ядер сервера;

- используемых расширениях.

## Условия применения

> Компонент «ja_Inventory» может использоваться с СУБД «Jatoba» версий 4.x и выше, под управлением операционных систем Windows и GNU/Linux.
>
> Компонент выполнен в форме внешней утилиты и не имеет ограничений по совместимости с другими компонентами.

# УСТАНОВКА И НАСТРОЙКА

> Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе.
>
> Так как компонент выполнен в форме внешней утилиты, то для выполнения своих функциональных возможностей не требует установленной СУБД, но входит в дистрибутив. В силу этой особенности компонент возможно установить:

- в составе СУБД (см. документ «Защищенная система управления базами данных

> «Jatoba». Руководство по установке);

- отдельно от СУБД.

> Данный компонент штатным образом может быть установлен только с СУБД
>
> «Jatoba».
>
> Установка компонента под управлением ОС Windows и ОС GNU/Linux приведено
>
> ниже.

## Установка компонента «ja_Inventory» на ОС Windows

> В ОС Windows нет способа отдельной установки компонента, т.к. компонент включен
>
> в состав дистрибутива и устанавливается через инсталлятор.
>
> Для установки компонента требуется выполнить следующие шаги:
>
> а) в окне «Выбор типа установки» следует выбрать тип установки «Выборочная» (см. рис. [2.1](#_bookmark4));

<img src="../docs/assets/images/com18.3.1/ja_inventory/media/image3.png" style="width:3.81589in;height:2.98312in" />

> <span id="_bookmark4" class="anchor"></span>Рисунок 2.1 – Окно выбора типа установки
>
> б) в окне «Выборочная установка», выбрать «ja_Inventory» (см. рис. [2.2](#_bookmark5)); Остальные компоненты при ненадобности доступно отключить.
>
> <img src="../docs/assets/images/com18.3.1/ja_inventory/media/image4.png" style="width:3.81748in;height:2.98312in" />
>
> <span id="_bookmark5" class="anchor"></span>Рисунок 2.2 – Выбор устанавливаемых компонент
>
> в) в открывшемся окне «Все готово к установке Jatoba» запустить процесс установки, нажав кнопку «Установить» (см. рис. [2.3](#_bookmark6));

<img src="../docs/assets/images/com18.3.1/ja_inventory/media/image5.png" style="width:4.00807in;height:3.12812in" />

> <span id="_bookmark6" class="anchor"></span>Рисунок 2.3 – Окно «Все готово к установке Jatoba»

## Установка компонента «ja_Inventory» в ОС GNU/Linux

> Пакет компонента входит в состав дистрибутива, однако может функционировать, как в составе СУБД, так и на отдельном хосте. Поскольку выполнен в виде внешней утилиты.
>
> Установка в составе СУБД описана в документе «Защищенная система управления базами данных «Jatoba». Руководство по установке.
>
> Для функционирования компонента не требуется установка СУБД. Установка на отдельном хосте без установки зависимостей

- DEB пакета для ОС GNU/Linux выполняется командой:

> dpkg --force-all –i
>
> Например

<img src="../docs/assets/images/com18.3.1/ja_inventory/media/image6.png" style="width:7.13517in;height:1.92187in" />

> dpkg --force-all -i jatoba6-ja-inventory_1.0.0-18.\_amd64.deb
>
> Рисунок 2.4 – Установка пакета компонента

- RPM пакета для ОС GNU/Linux выполняется командой:

> rpm -i jatoba6-ja-inventory\*.rpm --nodeps
>
> В результате в каталоге СУБД будет находится единственный файл с утилитой.
>
> <img src="../docs/assets/images/com18.3.1/ja_inventory/media/image7.png" style="width:7.10554in;height:1.41833in" />
>
> Рисунок 2.5 – Содержание каталога СУБД
>
> Удаление модуля осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Настройка конфигурационного файла «pg_hba.conf»

> Для подключения компонента «ja_Inventory» к целевой СУБД «Jatoba» в конфигурационном файле «pg_hba.conf» должно быть разрешено подключение от конкретного IP-адреса или подсети.
>
> host all all \<the_first_computer_IP_address\>/32 md5
>
> В рассматриваемом примере:

- компонента «ja_Inventory» находится на хосте с IP-адресом - 10.116.102.54;

- целевая СУБД находится на хосте с IP-адресом -10.116.102.55

> При разрешении подключения с конкретного IP-адреса, строка разрешения подключения может иметь вид, как представлено на рисунке [2.6](#_bookmark9).
>
> <span id="_bookmark9" class="anchor"></span>Рисунок 2.6 - Вид конфигурационного файла «pg_hba.conf»

# ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

> Подключение к целевой СУБД компонентом «ja_Inventory» выполняется аналогично, подключению интерактивным терминалом psql и используется часть параметров подключения.

## Синтаксис команды подключения

> Применяется следующий синтаксис команды подключения:
>
> ja_inventory {–n \| --org-name } Datagile {–h \| --host} IP-address {–U \| --user} user_name {–d \| --db_name} database {–o \|
>
> --output-dir} /temp/db {–W\|-w}

## Параметры подключения

> Компонент «ja_Inventory» использует параметры подключения приведенные в таблице [3.1](#_bookmark13). Используются типичные параметры подключения к СУБД и введены дополнительные.
>
> <span id="_bookmark13" class="anchor"></span>Таблица 3.1 – Параметры подключения компонента

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 16%" />
<col style="width: 53%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th colspan="2"><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Описание</strong></th>
<th style="text-align: center;"><blockquote>
<p><strong>Уник-й пар-р</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обяз-й пар-р</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>- h</p>
</blockquote></td>
<td><blockquote>
<p>--host</p>
</blockquote></td>
<td><blockquote>
<p>Хост СУБД</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>X</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-p</p>
</blockquote></td>
<td><blockquote>
<p>--port</p>
</blockquote></td>
<td><blockquote>
<p>Порт подключения</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-d</p>
</blockquote></td>
<td><blockquote>
<p>--db_name</p>
</blockquote></td>
<td><blockquote>
<p>Название БД</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-U</p>
</blockquote></td>
<td><blockquote>
<p>--user</p>
</blockquote></td>
<td><blockquote>
<p>Пользователь СУБД</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>–o</p>
</blockquote></td>
<td><blockquote>
<p>--output-dir</p>
</blockquote></td>
<td><blockquote>
<p>Директория сохранения файла отчета</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>X</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-W</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Принудительный ввод пароля пользователя</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-w</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Не запрашивать пароль.</p>
<p>Если пароль требуется серверу, то будет ошибка:</p>
<p>no password supplied</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>–n</p>
</blockquote></td>
<td><blockquote>
<p>--org-name</p>
</blockquote></td>
<td><blockquote>
<p>Ввод названия организации, используется для</p>
<p>идентификации</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>X</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>X</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Права пользователя СУБД

> Файл отчета может быть получен от имени и с правами привилегированного пользователя СУБД (SUPERUSER). В этом случае не требуется дополнительных разрешений. Данный способ подключения менее трудозатратен, но не является безопасным.
>
> Целесообразнее использовать специальную учетную запись в СУБД, наделив ее минимально достаточными привилегиями.
>
> Такого пользователя и его привилегии Администратор СУБД должен создать самостоятельно. Набор привилегий такого пользователя должен распространяться на все БД в СУБД, в том числе права на подключение, а также включать следующее:

- выделенный пользователь должен иметь атрибут LOGIN;

<img src="../docs/assets/images/com18.3.1/ja_inventory/media/image9.png" style="width:7.10932in;height:1.04458in" />

> CREATE ROLE ja_inventory LOGIN PASSWORD 'password';
>
> Рисунок 3.1 – Создание пользователя

- выделенный пользователь должен уметь запускать функцию jatoba_version и получать результаты выполнения этой функции;

<img src="../docs/assets/images/com18.3.1/ja_inventory/media/image10.png" style="width:7.07902in;height:1.04458in" />

> GRANT EXECUTE ON FUNCTION pg_catalog.jatoba_version TO ja_inven tory;
>
> Рисунок 3.2 – SQL- команда наделения правом пользователя на выполнение функции jatoba_version
>
> <img src="../docs/assets/images/com18.3.1/ja_inventory/media/image2.png" style="width:0.25in;height:0.24999in" />Разрешение применяется для всех БД

- выделенный пользователь должен уметь читать таблицу pg_database в схеме pg_catalog;

- <img src="../docs/assets/images/com18.3.1/ja_inventory/media/image2.png" style="width:0.25in;height:0.24999in" />выделенный пользователь должен уметь читать таблицу pg_extension в схеме pg_catalog;

> GRANT SELECT ON TABLE pg_catalog.pg_database TO ja_inventory;
>
> Разрешение применяется для всех БД
>
> GRANT SELECT ON TABLE pg_catalog.pg_extension TO ja_inventory;

<img src="../docs/assets/images/com18.3.1/ja_inventory/media/image11.png" style="width:7.09939in;height:1.45667in" />

> Рисунок 3.3 – SQL – команды наделения правом пользователя на чтение таблиц

## Пример подключения к целевой СУБД и получения отчета

> Запуск компонента выполняется из каталога СУБД, для чего требуется перейти в него командой:
>
> cd /usr/jatoba-18/bin/
>
> Команда получения файла отчета выполняется от имени и с правами привилегированного пользователя ОС и имеет вид:

<img src="../docs/assets/images/com18.3.1/ja_inventory/media/image12.png" style="width:7.12396in;height:1.26146in" />

> ./ja_inventory -h 10.116.102.55 -U postgres -d postgres --org-name Datagile –W
>
> Рисунок 3.4 – Команда получения файла отчета
>
> Компонент запросит пароль указанного в строке подключения пользователя и если не указана директория сохранения файла отчета, то он будет сохранен в текущей директории.

# ОТЧЕТ В ФОРМАТЕ JSON

> Получаемый отчет имеет формат JSON с реквизитами и атрибутами приведенными в таблице [4.1](#_bookmark17).
>
> <span id="_bookmark17" class="anchor"></span>Таблица 4.1 - Перечень реквизитов и атрибутов JSON

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 49%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Реквизит</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Атрибут json</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Название утилиты</p>
</blockquote></td>
<td><blockquote>
<p>utilName</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Версия утилиты</p>
</blockquote></td>
<td><blockquote>
<p>utilVersion</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Наименование организации</p>
</blockquote></td>
<td><blockquote>
<p>orgName</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Дата формирования отчета</p>
</blockquote></td>
<td><blockquote>
<p>reportDate</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Имя хоста</p>
</blockquote></td>
<td><blockquote>
<p>hostName</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Версия Jatoba</p>
</blockquote></td>
<td><blockquote>
<p>jatobaVersion</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Ядра</p>
</blockquote></td>
<td><blockquote>
<p>coreCount</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Расширение</p>
</blockquote></td>
<td><blockquote>
<p>extensionName</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Отчет имеет вид представленный на рисунке [4.1](#_bookmark18).
>
> <span id="_bookmark18" class="anchor"></span>Рисунок 4.1 – Вид отчета о хосте В процессе формирования отчета компонент:

- формирует значения атрибутов, описанных выше;

- рассчитывает контрольную сумму (далее – КС) хеш-суммы по алгоритму CRC32.

- КС включается в имя файла отчета и не может быть изменена; Пример названия файла отчета:

> ja_inventory_ABCDEF12_123456AB.json

# ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ

> **Администратор СУБД** – субъект доступа, выполняющий административные функции в СУБД и наделенный правами:

- создавать учетные записи пользователей системы управления базами данных;

- модифицировать, блокировать и удалять учетные записи пользователей системы управления базами данных;

- назначать права доступа пользователям системы управления базами данных к объектам доступа системы управления базами данных;

- управлять конфигурацией системы управления базами данных;

- создавать, подключать базы данных.

> Администратор СУБД имеет атрибут SUPERUSER и/или обладает системной учетной записью «postgres».
>
> **Целевая СУБД** – СУБД являющаяся целью мониторинга.
>
> **Пользователь БД** - субъект доступа, имеющий доступ к ограниченному перечню БД и объектов БД. Имеющий следующий набор привилегий:

- создавать и манипулировать объектами доступа БД (таблица, запись или столбец, поле, представление и иные объекты доступа);

- выполнять процедуры (программный код), хранимые в БД. Пользователь БД имеет обязательный атрибут LOGIN.

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
<p>КС</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Контрольные суммы</p>
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
