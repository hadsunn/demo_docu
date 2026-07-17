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
<p><strong>Руководство по настройке. Часть 9.</strong></p>
<p><strong>Обфускация кода PL/spgSQL.</strong></p>
<p><strong>Компонент «PLsPgSQL»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-09</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 37</p>
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

# <img src="../docs/assets/images/com18.3.1/plspgsql/media/image1.png" style="width:0.25208in;height:0.25208in" />АННОТАЦИЯ

> В документе приведены сведения необходимые для установки и эксплуатации компонента «PLsPgSQL» (далее по тексту – «компонент» либо «PLsPgSQL»).
>
> Настоящее руководство предназначено для администраторов систем управления базами данных (СУБД).
>
> Администратор СУБД «Jatoba» должен иметь навыки по работе с СУБД PostgreSQL или защищенной СУБД «Jatoba» (ООО «Газинформсервис»).
>
> Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image1.png" style="width:0.25139in;height:0.25139in" />**Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image2.png" style="width:0.25in;height:0.24862in" /><img src="../docs/assets/images/com18.3.1/plspgsql/media/image2.png" style="width:0.2525in;height:0.25208in" />**Дополнительная информация** – указания, позволяющие упростить работу с изделием

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><blockquote>
<p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 5.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 4.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-4/bin».</p>
<p>Для СУБД «Jatoba» версий 4/5/6/18 используется версия компонента — 2.0.</p>
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

# СОДЕРЖАНИЕ

1.  [Назначение компонента 4](#назначение-компонента)

2.  [Ограничения 5](#ограничения)

3.  [Установка и использование компонента 6](#установка-и-использование-компонента)

    1.  [Установка компонента в сегменте разработки и в промышленном сегменте 7](#установка-компонента-в-сегменте-разработки-и-в-промышленном-сегменте)

    2.  [Установка криптопровайдера «КриптоПро CSP» 8](#установка-криптопровайдера-криптопро-csp)

    3.  [Установка библиотеки «КриптоПлатформа» (gis-cryptoplatform17) 14](#установка-библиотеки-криптоплатформа-gis-cryptoplatform17)

    4.  [Установка приложения «Litoria Desktop 2» 14](#установка-приложения-litoria-desktop-2)

    5.  [Выпуск сертификата 15](#выпуск-сертификата)

        1.  [Первый запуск приложения «Litoria Desktop2» 15](#первый-запуск-приложения-litoria-desktop2)

        2.  [Запуск приложения «Litoria Desktop 2» от имени и с правами пользователя 15](#запуск-приложения-litoria-desktop-2-от-имени-и-с-правами-пользователя)

        3.  [Формирование сертификата 16](#формирование-сертификата)

        4.  [Импорт сертификата в личное хранилище пользователя ОС 21](#импорт-сертификата-в-личное-хранилище-пользователя-ос)

    6.  [Установка компонента «PLsPgSQL» 24](#установка-компонента-plspgsql)

        1.  [Установка пакета «jatoba5-plspgsql» 24](#установка-пакета-jatoba5-plspgsql)

        2.  [Редактирование конфигурационного файла «postgresql.conf» 26](#редактирование-конфигурационного-файла-postgresql.conf)

        3.  [Установка расширения 27](#установка-расширения)

    7.  [Описание утилиты wplpsql 28](#описание-утилиты-wplpsql)

        1.  [Установка прав на каталоги 28](#установка-прав-на-каталоги)

        2.  [Процедура обфускации 29](#процедура-обфускации)

        3.  [Перемещение преобразованной функции в промышленный сегмент 32](#перемещение-преобразованной-функции-в-промышленный-сегмент)

4.  [Сообщения об ошибках 34](#сообщения-об-ошибках)

    1.  [Ошибка установки пакета «jatoba\<ver\>-plspgsql» 34](#ошибка-установки-пакета-jatobaver-plspgsql)

    2.  [Ошибка запуска приложения «Litoria Desktop 2» 34](#ошибка-запуска-приложения-litoria-desktop-2)

[Перечень сокращений 36](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> PL/spgSQL – процедурный язык PL/pgSQL с дополнительными функциями безопасности.
>
> Расширение PL/spgSQL добавляет в СУБД новый язык plspgsql, обеспечивающий разработчику дополнительные функции безопасности при создании хранимых процедур.
>
> В состав СУБД «Jatoba» включена утилита обфускации wplpgsql, которая создает в dst-dir обфусцированную версию src-dir с заменой процедур и функций с языка 'plpgsql' на 'plspgsql'.
>
> Утилита обфускации использует серверную часть СУБД для обфускации отдельных SQL-команд.

# ОГРАНИЧЕНИЯ

> При работе со скрытым кодом необходимо учитывать следующее:

- сокрытие усложняет восстановление исходного кода, но пароли и другие конфиденциальные данные не должны храниться в коде;

- исходный код должен быть pgplsql, преобразование процедур и функций других языков не поддерживается;

- скрытый код не может компилироваться в экземплярах СУБД отличных от СУБД «Jatoba»;

- в коде, к которому будет применяться сокрытие, не могут использоваться подстановочные переменные.

# УСТАНОВКА И ИСПОЛЬЗОВАНИЕ КОМПОНЕНТА

> Процесс сокрытия исходных текстов, процедур и функций в СУБД «Jatoba» отображен на рисунке [3.1](#_bookmark3).

Сег мен т р азр або тк и

Пр омы шле нный сегмент

DEV DB

PRO D D B

Cryp t o p r ovid er

П р е об р аз ов ан и е для к о мп и ля ц и и

Cryp t o p r ovid er

Отк р ы ты й тек ст п роц едуры \\ фун к ц и и

Зак р ы ты й тек ст п роц едуры \\ фун к ц и и

П ер едача фай ла зак аз чи к у

> (ди стр и б ути в)

Зак р ы ты й тек ст п роц едуры \\ фун к ц и и

Develop er

In t eg rat or

DBA , SA

> Об фуск ац и я
>
> К оди р о ван и е
>
> Вер и фи к ац и я си н так си са plpgsql

К ом п и ляц и я

> К ом п и ляц и я
>
> Вер и фи к ац и я си н так си са
>
> plpgsql
>
> <span id="_bookmark3" class="anchor"></span>Рисунок 3.1 – Процесс сокрытия процедур и функций в СУБД «Jatoba» В общем цикле операций выделяются следующие этапы:

1)  Разработка автором ПО кода процедур и функций в штатном режиме.

> С исходным кодом процедур и функций на языке pgsql разработчики работают в удобном для них виде без использования механизмов сокрытия.

2)  Подготовка релиза к выпуску.

> При подготовке кода к поставке или сборке релиза необходимо использовать СУБД «Jatoba» с соответствующими утилитами преобразования кода pgsql. Каждый
>
> подготовленный файл преобразуется специальной утилитой, на выходе получается файл с pgsql, где текст преобразован в нечитаемую форму и не подлежит изменению.

3)  Установка в промышленную среду.

> Дистрибутив с преобразованными файлами передается службе эксплуатации заказчика. Файл может быть скомпилирован без раскрытия текста на СУБД «Jatoba».

4)  Эксплуатация.

> После компиляции текст файла находится в СУБД в преобразованном виде и не подлежит изменению, при этом полностью сохраняет работоспособность и соответствует изначальной логике производителя.

### Установка компонента в сегменте разработки и в промышленном сегменте

> Процесс установки компонента идентичен для всех сегментов и состоит из следующих этапов:

1)  Установка СУБД.

> Первоначально СУБД «Jatoba» устанавливается в двух сегментах.
>
> Более подробно процесс установки СУБД описан в документе 643.72410666.00067-08
>
> 97 01 «Защищенная система управления базами данных «Jatoba». Руководство по установке».

2)  Установка криптопровайдера «КриптоПро CSP».

3)  Установка библиотеки «КриптоПлатформа» (gis-cryptoplatform17).

4)  Выпуск сертификата.

> Сертификаты выпускаются для каждого из участников процесса обфускации кода.
>
> В приведенном описании, сертификат формируется с помощью ПК «Litoria Desktop 2» [<sup>1</sup>](#_bookmark5) . Допустим выпуск сертификатов и ключей любым другим доступным образом, при соблюдении характеристик и требований приведенных в п. [3.5](#выпуск-сертификата).

- Установка пакета «jatoba\<ver\>-plspgsql»;

> <span id="_bookmark5" class="anchor"></span><sup>1</sup> Не входит в комплект поставки СУБД «Jatoba»
>
> Пакет использует внешние зависимости и для удовлетворения их требуется установка следующих внешних продуктов:

1)  lsb-cprocsp – криптопровайдер «КриптоПро CSP» версии 5.0. Данный пакет распространяется в виде самостоятельного DEB/RPM дистрибутива. Для установки необходимо обратиться к документации на официальном сайте разработчика КриптоПро – для доступа требуется зарегистрированный пользователь по правилам сайта [<u>https://cryptopro.ru/user</u>)](https://cryptopro.ru/user);

> Установка пакета описана в разделе [3.2](#установка-криптопровайдера-криптопро-csp) настоящего документа.

2)  gis-cryptoplatform17 – библиотека «КриптоПлатформа» версия 1.7.3-4. Данный пакет распространяется в составе дистрибутива СУБД «Jatoba» и устанавливается автоматически по зависимостям при установке пакета jatoba\<ver\>-plspgsql. Продукт поставляет ООО «Газинформсервис».

> Установка пакета описана в разделе [3.3](#установка-библиотеки-криптоплатформа-gis-cryptoplatform17) настоящего документа.

- Редактирование конфигурационного файла postgresql.conf;

> Вносятся параметры выпущенных сертификатов для каждого экземпляра СУБД.

- Установка расширения.

### Установка криптопровайдера «КриптоПро CSP»

> Сборки продуктов загружаются с официального сайта ООО «Крипто-Про» [<u>https://www.cryptopro.ru/</u>.](https://www.cryptopro.ru/)
>
> На сайте ООО «Крипто-Про» перейти по следующему пути:
>
> Скачать – КриптоПро CSP - Сертифицированные версии - «Крипто Про CSP 5.0» - для - «Unix» - КриптоПро CSP 5.0 для Linux (x64, deb)
>
> Рисунок 3.2 – Страница загрузки
>
> Распаковать полученный архив linux-amd64_deb.tgz, например, в каталог «install» и назначить права на выполнение скрипта «install_gui.sh» командой:

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image34.png" style="width:7.02928in;height:0.80573in" />

> chmod +x /\<PathToCryptoPro\>/install_gui.sh
>
> Рисунок 3.3 – Команда установки прав выполнения «install_gui.sh» После чего запустить скрипт командой:
>
> ./install_gui.sh
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image35.png" style="width:6.29379in;height:4.15979in" />
>
> Рисунок 3.4 – Выбор компонент для установки криптопровайдера В окне установить флаги:

- KC1 Cryptographic Service Provider;

- KC2 Provider (skip if not sure);

- GUI dialogs component;

- cptoolls, GUI applications for various tasks.

> Подтвердить установку компонент нажав кнопку «Next».
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image36.png" style="width:6.35278in;height:3.88198in" />
>
> Рисунок 3.5 – Окно подтверждения установки компонент По окончании процесса установки нажмите кнопку «OK».

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image37.png" style="width:6.31008in;height:3.80104in" />

> Рисунок 3.6 – Окно окончания установки
>
> После установки компонент будет предложено активировать лицензию. На данном этапе возможно либо ввести ключ лицензии, либо пропустить этап.
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image38.png" style="width:6.34289in;height:3.87333in" />
>
> Рисунок 3.7 – Окно проверки статуса лицензии
>
> В следующем окне требуется нажать кнопку «Exit» для выхода из скрипта установки.

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image39.png" style="width:6.27727in;height:3.84375in" />

> Рисунок 3.8 – Выход из скрипта установки Далее активируется биологический ДСЧ.
>
> Рисунок 3.9 – Датчик случайных чисел
>
> В приложении «Инструменты КриптоПро» на вкладке «Общее» можно проверить статус лицензии.
>
> Рисунок 3.10 – Проверка статуса лицензии «В приложении «Инструменты КриптоПро» На данном шаге установка криптопровайдера закончена.

### Установка библиотеки «КриптоПлатформа» (gis-cryptoplatform17)

> Установка библиотеки «КриптоПлатформа» выполняется командой:

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image42.png" style="width:7.09642in;height:1.60812in" />

> apt-get install gis-criptoplatform17
>
> Рисунок 3.11 – Установка библиотеки «КриптоПлатформа»

### Установка приложения «Litoria Desktop 2»

> Имеющийся архив с дистрибутивом графического интерфейса «Litoria Desktop 2» распаковать в директорию.

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image43.jpeg" style="width:3.93194in;height:1.0625in" />

> Рисунок 3.12 – Структура каталога Установить права для выполнения скрипта командой:
>
> chmod +x /\<PathToCryptoPro\>/litoria_install.sh
>
> В рассматриваемом примере команда будет следующей:

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image44.png" style="width:7.18922in;height:1.10625in" />

> chmod +x /install/litoria_install.sh
>
> Рисунок 3.13 – Команда установки прав на выполнение скрипта
>
> После чего запустить скрипт установки графического интерфейса «Litoria Desktop 2»:
>
> ./litoria_install.sh

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image45.png" style="width:7.06062in;height:2.07in" />

> Рисунок 3.14 – Установка графического интерфейса «Litoria Desktop 2»

### Выпуск сертификата

> Пакет устанавливается в сегменте разработки и в промышленном сегменте.

### Первый запуск приложения «Litoria Desktop2»

> Первый запуск приложения должен выполняться от имени и с правами пользователя
>
> «root», необходимо перейти в каталог:
>
> /opt/GIS/litoria
>
> запустить клиента:

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image46.png" style="width:7.13068in;height:0.87208in" />

> cd /opt/GIS/litoria/
>
> ./litoria
>
> Рисунок 3.15 – Первый запуск приложения В открывшимся окне приложения установить тип лицензии.

### Запуск приложения «Litoria Desktop 2» от имени и с правами пользователя

> Приложение должно запускаться от имени и с правами пользователя, для которого будет формироваться сертификат.
>
> Для этого требуется:

- Выйти из текущего сеанса.

- Войти в ОС от требуемого пользователя.

> В представляемом примере используется пользователь «postgres».
>
> Рисунок 3.16 – Вход в ОС от имени пользователя «postgres»

- Запустить приложение «Litoria Desktop 2».

> Приложение «Litoria Desktop 2» может быть запущено двумя способами:

1)  Через терминал используя команду:

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image48.png" style="width:7.14692in;height:1.07531in" />

> cd /opt/GIS/litoria/
>
> ./litoria
>
> Рисунок 3.17 – Запуск приложения «Litoria Desktop 2» от имени пользователя

2)  Через список установленного ПО.

### Формирование сертификата

> В меню «Сертификаты» (Certificates) выбрать вкладку «Запрос на сертификат» (Reguest) и в окне «Криптопровайдер» (Cryptography tool) установить параметры, приведенные в таблице [3.1](#_bookmark13).
>
> <span id="_bookmark13" class="anchor"></span>Таблица 3.1 – Значения устанавливаемые в вкладке «Запрос на сертификат»

<table>
<colgroup>
<col style="width: 30%" />
<col style="width: 16%" />
<col style="width: 34%" />
<col style="width: 18%" />
</colgroup>
<thead>
<tr>
<th colspan="3" style="text-align: center;"><blockquote>
<p><strong>Область поля</strong></p>
</blockquote></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>Поле (RU)</strong></p>
</blockquote></td>
<td><blockquote>
<p><strong>Поле (ENG)</strong></p>
</blockquote></td>
<td style="text-align: center;"><strong>Значение</strong></td>
<td><blockquote>
<p><strong>Тип поля</strong></p>
</blockquote></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>«Криптопровайдер» (Cryptography tool)</strong></p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Криптосредство</p>
</blockquote></td>
<td><blockquote>
<p>Name</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Crypto_Pro GOST R 34. 10-</p>
<p>2012 Cryptographic Service Provider</p>
</blockquote></td>
<td><blockquote>
<p>Выпадающий список</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Алгоритм</p>
</blockquote></td>
<td><blockquote>
<p>Algorithm</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>GOST R 34. 10-2012 256</p>
</blockquote></td>
<td><blockquote>
<p>По</p>
<p>умолчанию</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Длина ключа</p>
</blockquote></td>
<td><blockquote>
<p>Key length</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>512</p>
</blockquote></td>
<td><blockquote>
<p>По умолчанию</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>Контейнер для ключевой пары (Key pair container)</strong></p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Сгенерировать</p>
</blockquote></td>
<td><blockquote>
<p>Generate</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>флаг</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ПИН-код</p>
</blockquote></td>
<td><blockquote>
<p>PIN-code</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>12345678</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Создать экспортируемый контейнер</p>
</blockquote></td>
<td><blockquote>
<p>Mark as exportable</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>флаг</p>
</blockquote></td>
<td><blockquote>
<p>флаг</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3"><blockquote>
<p><strong>Информация о владельце ключа (Subject key information)</strong></p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Шаблон</p>
</blockquote></td>
<td><blockquote>
<p>Template</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Пустой (Empty)</p>
</blockquote></td>
<td><blockquote>
<p>Выпадающий список</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3"><blockquote>
<p><strong>Information</strong></p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Общее имя</p>
</blockquote></td>
<td><blockquote>
<p>Common name</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>devel</p>
</blockquote></td>
<td><blockquote>
<p>Текстовое поле</p>
</blockquote></td>
</tr>
</tbody>
</table>

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image49.png" style="width:3.91493in;height:4.09896in" />

> Рисунок 3.18 – Окно формирования сертификата
>
> В области поля «Информация о владельце ключа» (Subject key information) перейти в вкладку «Параметры» (Settings) и установить параметры, приведенные в таблице [3.2](#_bookmark14).
>
> <span id="_bookmark14" class="anchor"></span>Таблица 3.2 – Значения, устанавливаемые в области поля «Информация о владельце ключа»

<table>
<colgroup>
<col style="width: 30%" />
<col style="width: 30%" />
<col style="width: 19%" />
<col style="width: 18%" />
</colgroup>
<thead>
<tr>
<th colspan="3" style="text-align: center;"><blockquote>
<p><strong>Область поля</strong></p>
</blockquote></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>Поле (RU)</strong></p>
</blockquote></td>
<td><blockquote>
<p><strong>Поле (ENG)</strong></p>
</blockquote></td>
<td><blockquote>
<p><strong>Значение</strong></p>
</blockquote></td>
<td><blockquote>
<p><strong>Тип поля</strong></p>
</blockquote></td>
</tr>
<tr>
<td colspan="3"><blockquote>
<p><strong>Информация о владельце ключа (Subject key information)</strong></p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>Использование ключа</strong></p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Подпись данных</p>
</blockquote></td>
<td><blockquote>
<p>Digital signature</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>флаг</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Неотрекаемость</p>
</blockquote></td>
<td><blockquote>
<p>Non-repudiation</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>флаг</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Шифрование ключа</p>
</blockquote></td>
<td><blockquote>
<p>Key encryption</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>флаг</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Шифрование данных</p>
</blockquote></td>
<td><blockquote>
<p>Data encryption</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>флаг</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>Назначение сертификата</strong></p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Цифровая подпись</p>
</blockquote></td>
<td><blockquote>
<p>Digital signature</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>флаг</p>
</blockquote></td>
</tr>
</tbody>
</table>

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image50.jpeg" style="width:3.99329in;height:4.18094in" />

> Рисунок 3.19 – Параметры в области поля «Информация о владельце ключа»
>
> После установки параметров нажмите кнопку «Создать» (Create) и генерируем случайную последовательность движениями мышки или клавишами на клавиатуре.
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image51.jpeg" style="width:3.93749in;height:4.10417in" />
>
> Рисунок 3.20 – Генератор ДСЧ В результате получаем запрос на сертификат.

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image52.jpeg" style="width:3.93749in;height:4.125in" />

> Рисунок 3.21 – Запрос на сертификат

Копируем получившийся текст нажатием кнопки «Копировать» (Copy).

> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image2.png" style="width:0.25in;height:0.25in" />В рассматриваемом примере используется тестовый удостоверяющий центр компании «Газинформсервис».
>
> Для формирования сертификата в промышленной среде, следует использовать реальный удостоверяющий центр.
>
> С помощью браузера открываем страницу тестового удостоверяющего центра по адресу: [<u>http://testca.gaz-is.ru/#</u>](http://testca.gaz-is.ru/)
>
> Рисунок 3.22 – Окно тестового УЦ
>
> В окне УЦ необходимо вставить скопированный запрос на сертификат.
>
> При нажатии кнопки «Получить сертификат», выбрать пункт «Получить сертификат 2012 гост».
>
> После этого сертификат загрузится в стандартную директорию для загрузок.
>
> Рисунок 3.23 – Получение сертификата

### Импорт сертификата в личное хранилище пользователя ОС

## В приложении «Litoria Desktop 2» требуется перейти на вкладку «Управление» (Manage) и импортировать сертификат. Из директории загрузки сертификата возможно его перетащить мышкой в окно импорта сертификата.

## 

> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image55.jpeg" style="width:3.91494in;height:4.09896in" />
>
> Рисунок 3.24 – Вкладка «Управление»

## Импортированный сертификат необходимо перетащить мышкой в раздел

> «Личные сертификаты» (Personal certificates), после чего нажать «Установить» (Install).

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image56.png" style="width:3.96186in;height:3.08333in" />

> Рисунок 3.25 – Размещение сертификата в разделе «Личные сертификаты»

## После установки в общем списке выбрать требуемый сертификат, для подтверждения подлинности нажать кнопку, отмеченную на рисунке [3.26](#_bookmark16).

## 

> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image57.jpeg" style="width:4.03905in;height:4.2275in" />
>
> <span id="_bookmark16" class="anchor"></span>Рисунок 3.26 – Импорт сертификата в личное хранилище пользователя

## В всплывающем окне подтвердить размещение сертификата в личном хранилище пользователя.

> Рисунок 3.27 – Окно подтверждения
>
> Рисунок 3.28 – Завершение импорта сертификата

## На данном шаге формирование и импорт сертификата закончено.

### Установка компонента «PLsPgSQL»

> Компонент «PLsPgSQL» устанавливается в сегменте разработки и в промышленном сегменте.

### Установка пакета «jatoba5-plspgsql»

> После того как, установлен криптопровайдер (см. п. [3.2](#установка-криптопровайдера-криптопро-csp)) и криптоплатформа (см. п.[3.3](#установка-библиотеки-криптоплатформа-gis-cryptoplatform17)), становится доступной установка пакета компонента «PLsPgSQL».
>
> Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

> Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

> apt-get install jatoba\<ver\>-plspgsql

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:

> yum install jatoba\<ver\>-plspgsql
>
> Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

> apt-get install jatoba\<ver\>-plspgsql
>
> Более подробно процесс установки компонента описан в документе 643.72410666.00067-08 97 01 «Защищенная система управления базами данных «Jatoba». Руководство по установке».
>
> Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba5-plspgsql и т.п.
>
> Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.
>
> В рассматриваемом примере установка пакета под ОС Ubuntu выполняется командой:
>
> apt-get install jatoba5-plspgsql
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image60.png" style="width:7.07832in;height:3.15812in" />
>
> Рисунок 3.29 – Установка пакета «jatoba5-plspgsql»
>
> Необходимо убедиться, что отсутствуют ошибки зависимостей, выполнив команду:

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image61.png" style="width:7.09599in;height:3.06125in" />

> for f in \$(LANG=C find /usr/jatoba-5 -type f -exec file {} \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done
>
> Рисунок 3.30 – Проверка отсутствия зависимостей

### Редактирование конфигурационного файла «postgresql.conf»

> В конфигурационный файл «postgresql.conf» в раздел «CUSTOMIZED OPTIONS», добавляются два параметра:

- plspgsql.cert_cn – имя созданного сертификата;

- plspgsql.cert_pincode – пин-код от сертификата.

> Для каждой из СУБД устанавливаются собственные параметры.

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image62.png" style="width:6.99375in;height:2.0475in" />

> Рисунок 3.31 – Параметры сертификата в конфигурационном файле postgresql.conf

### Установка расширения

> Установка расширения в СУБД должна выполняться от имени и с правами пользователя, для которого был создан сертификат.
>
> Авторизовавшись в СУБД требуется выполнить SQL-команду:

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image63.png" style="width:7.02562in;height:3.8201in" />

> CREATE EXTENSION plspgsql
>
> Рисунок 3.32 – Установка расширения

### Описание утилиты wplpsql

> Одним из важных элементов функции сокрытия исходных текстов процедур и функций в СУБД «Jatoba» является утилита wplpgsql.
>
> Утилита имеет модульную архитектуру и различные механизмы. Для преобразования текстов процедур и функций данные механизмы подключаются к утилите как модули расширения. Основным условием к механизмам преобразования является использование обратимых алгоритмов, так как на этапе установки в эксплуатируемую среду утилита производит валидацию синтаксиса после обратного преобразования текста.
>
> Данная утилита разработана в рамках продукта СУБД «Jatoba» компанией ООО «Газинформсервис».

### Установка прав на каталоги

> После установки расширения дополнительная функциональность с использованием специальной утилиты wplpgsql становится доступной.
>
> В каталоге /usr/jatoba-5 создайте 2 подкаталога:

- input;

- output.

> Для каталогов обязательно следует установить права доступа для пользователя от имени и с правами которого будет проводится процедура обфускации. Права устанавливаются командой в терминале ОС от пользователя «root»:
>
> chown postgres:postgres input chown postgres:postgres output
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image64.png" style="width:6.9403in;height:3.87187in" />
>
> Рисунок 3.33 – Установление прав на директории

### Процедура обфускации

> К примеру, исходный текст сохранен в файле /usr/jatoba-5/output/jatoba_secret_function.sql со следующим содержимым:
>
> CREATE OR REPLACE FUNCTION jatoba_secret_function() RETURNS text AS \$\$
>
> BEGIN
>
> RETURN 'secret text';
>
> END;
>
> \$\$ LANGUAGE plpgsql;
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image65.png" style="width:7.06382in;height:1.7825in" alt="C:\Users\kuznetsov-a\AppData\Local\Microsoft\Windows\INetCache\Content.Word\Screenshot from 2023-11-27 07-52-15 (copy).png " />
>
> Рисунок 3.34 – Исходный текст сохранен в файле /usr/jatoba-5/output/jatoba_secret_function.sql
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image2.png" style="width:0.25in;height:0.25in" />Процедура написана на языке plpgsql, который присутствует в СУБД «Jatoba» по умолчанию.
>
> Процедура обфускации выполняется при помощи утилиты «wplpgsql», расположенной по пути /usr/jatoba-5/bin.
>
> Команда обфускации имеет синтаксис:
>
> ./wplpgsql -i \<path to input directory\> -o \<path to output directory\> -m file
>
> С параметрами, приведенными в таблице [3.3](#_bookmark24).
>
> <span id="_bookmark24" class="anchor"></span>Таблица 3.3 – Параметры команды обфускации

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 34%" />
<col style="width: 58%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th><blockquote>
<p><strong>Значение параметра</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>- i</p>
</blockquote></td>
<td><blockquote>
<p>входящая директория «input»</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>&lt;path to input directory&gt;</p>
</blockquote></td>
<td><blockquote>
<p>Путь к директории</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>-h</p>
</blockquote></td>
<td><blockquote>
<p>Хост подключения</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>-p</p>
</blockquote></td>
<td><blockquote>
<p>Порт подключения</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>-U</p>
</blockquote></td>
<td><blockquote>
<p>Пользователь для подключения к СУБД</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>6</p>
</blockquote></td>
<td><blockquote>
<p>-d</p>
</blockquote></td>
<td><blockquote>
<p>БД подключения</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>7</p>
</blockquote></td>
<td><blockquote>
<p>-o</p>
</blockquote></td>
<td><blockquote>
<p>Исходящая директория «output»</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>8</p>
</blockquote></td>
<td><blockquote>
<p>-m</p>
</blockquote></td>
<td><blockquote>
<p>Режим работы. Имеет два значения:</p>
</blockquote>
<ul>
<li><p>file – обфускация в файле</p></li>
<li><p>database – обфускация в БД</p></li>
</ul></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>9</p>
</blockquote></td>
<td><blockquote>
<p>-w</p>
</blockquote></td>
<td><blockquote>
<p>Не запрашивать пароль</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>10</p>
</blockquote></td>
<td><blockquote>
<p>-W</p>
</blockquote></td>
<td><blockquote>
<p>Запрос пароля</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Преобразование читаемого исходного текста в файл с выполнением преобразования в нечитаемый текст в рассматриваемом примере выполняется командой:
>
> ./wplpgsql -i /usr/jatoba-5/input/ –h localhost –p 5432 –U postgres –d postgres -o /usr/jatoba-5/output/ -m file -w
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image66.png" style="width:7.00976in;height:2.90062in" />
>
> Рисунок 3.35 – Выполнение команды обфускации
>
> Утилита:

- возьмет функцию из исходного каталога /usr/jatoba-5/input/;

- преобразует текст функции;

- преобразованный файл с тем же наименованием поместит в конечный/исходящий каталог /usr/jatoba-5/output/.

> В результате преобразования содержание файла «jatoba_secret_function.sql» имеет следующий вид:

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image67.png" style="width:7.16948in;height:1.09469in" />

> CREATE OR REPLACE FUNCTION jatoba_secret_function() RETURNS text AS \$\$ CkJFR0lOIAogICAgUkVUVVJOICdzZWNyZXQgdGV4dCc7CkVORDsK\$\$ LANGUAGE plspgsql;
>
> Рисунок 3.36 – Содержание преобразованного файла «jatoba_secret_function.sql»
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image2.png" style="width:0.25in;height:0.25in" />Утилита wplpgsql работает со вложенными структурами каталогов – реализована поддержка пакетного преобразования файлов.

### Перемещение преобразованной функции в промышленный сегмент

> Переместить полученный файл «jatoba_secret_function.sql» на эксплуатируемую БД и скомпилировать эту функцию, используя стандартную утилиту работы с БД, выполнив команду в консоли ОС:

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image68.png" style="width:7.14113in;height:1.24969in" />

> psql -d postgres -h localhost -p 5432 -U postgres \<
>
> /usr/jatoba-5/output/jatoba_secret_function.sql
>
> Рисунок 3.37 – Команда экспорта
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image2.png" style="width:0.25in;height:0.24869in" />В эксплуатируемой БД для экспорта функции должно быть установлено расширение «plspgsql» (см. п. [3.6.3](#установка-расширения)).
>
> В результате выполнения на эксплуатируемой СУБД в БД «postgres» появится эквивалентная функция.
>
> Выполнить запрос к созданной функции SQL-командой:
>
> select jatoba_secret_function();

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image69.png" style="width:6.62899in;height:2.44562in" />

> Рисунок 3.38 – Запрос функции
>
> Результат соответствует ожидаемому, функция сохранила изначальную логику.
>
> Проверить исходный текст, который может получить пользователь с соответствующими привилегиями выполнив SQL-команду:

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image70.png" style="width:7.0048in;height:3.24292in" />

> SELECT proname,prosrc from pg_proc where proname='jatoba_secret_function';
>
> Рисунок 3.39 – Проверка исходного текста

# СООБЩЕНИЯ ОБ ОШИБКАХ

### Ошибка установки пакета «jatoba\<ver\>-plspgsql»

> При выполнении команды установки пакета компонента «PLsPgSQL»
>
> apt-get install jatoba\<ver\>-plspgsql
>
> может возникнуть ошибка установки.

<img src="../docs/assets/images/com18.3.1/plspgsql/media/image71.png" style="width:6.85954in;height:3.05937in" />

> Рисунок 4.1 – Ошибка установки Это ошибка последовательности установки компонента.
>
> Исправить ошибку возможно установкой библиотеки «КриптоПлатформа» (gis-cryptoplatform17), описанной в п. [3.3](#установка-библиотеки-криптоплатформа-gis-cryptoplatform17) настоящего документа.

### Ошибка запуска приложения «Litoria Desktop 2»

> Ошибка запуска приложения «Litoria Desktop 2» возникает при попытке его запуска из терминала не от имени текущего пользователя.
>
> <img src="../docs/assets/images/com18.3.1/plspgsql/media/image72.png" style="width:6.82212in;height:3.03156in" alt="C:\Users\KUZNET~1\AppData\Local\Temp\vmware-kuznetsov-a\VMwareDnD\56a2e2d2\Screenshot from 2023-11-01 00-47-01.png " />
>
> Рисунок 4.2 – Ошибка запуска Ошибка устраняется путем:

- выхода из текущего сеанса в ОС;

- авторизации в ОС от требуемого пользователя; как описано в п. [3.5.2](#запуск-приложения-litoria-desktop-2-от-имени-и-с-правами-пользователя) настоящего документа.

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 8%" />
<col style="width: 78%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>SQL</p>
</blockquote></th>
<th style="text-align: right;">–</th>
<th><blockquote>
<p>Structured Query Language – язык структурированных запросов</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>БД</p>
</blockquote></td>
<td style="text-align: right;">–</td>
<td><blockquote>
<p>База данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>СУБД</p>
</blockquote></td>
<td style="text-align: right;">–</td>
<td><blockquote>
<p>Система управления базами данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ДСЧ</p>
</blockquote></td>
<td style="text-align: right;">–</td>
<td><blockquote>
<p>Датчик случайных чисел</p>
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
