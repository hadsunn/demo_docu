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
<p><strong>Руководство по настройке. Часть 17.</strong></p>
<p><strong>Выявление и предотвращение исполнения нетипичных SQL-запросов.</strong></p>
<p><strong>Компонент «SQL_Firewall»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-17</strong></p>
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

В документе приведены сведения, необходимые для установки и эксплуатации компонента «SQL_Firewall» (далее – компонент или SQL_Firewall). Настоящее руководство предназначено для администратора защищенной системы управления базами данных (СУБД) «Jatoba».

> <img src="../docs/assets/images/com18.3.1/firewall/media/image1.png" style="width:0.24769in;height:0.24635in" />Администратор СУБД «Jatoba» должен иметь навыки по работе с СУБД PostgreSQL или защищенной СУБД Jatoba (ООО «Газинформсервис»).

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
<p>Для СУБД «Jatoba» версии ядра 4 используется версия компонента — 0.8</p>
<p>Для СУБД «Jatoba» версии ядра 5/6/18 используется версия компонента — 1.1</p>
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

> <img src="../docs/assets/images/com18.3.1/firewall/media/image2.png" style="width:0.25343in;height:0.25208in" />Степени важности примечаний, применяемые в документе:

<img src="../docs/assets/images/com18.3.1/firewall/media/image2.png" style="width:0.25139in;height:0.25139in" /> **Важная информация** – указания, требующие особого внимания

> <img src="../docs/assets/images/com18.3.1/firewall/media/image1.png" style="width:0.25in;height:0.24961in" /> **Дополнительная информация** – указания, позволяющие упростить работу с изделием

# СОДЕРЖАНИЕ

1.  [Назначение компонента 4](#назначение-компонента)

    1.  [Условия применения 4](#условия-применения)

        1.  [Влияние на производительность СУБД 4](#влияние-на-производительность-субд)

        2.  [Требования к используемой локали ОС 5](#требования-к-используемой-локали-ос)

2.  [Установка и настройка 6](#установка-и-настройка)

    1.  [Установка компонента «SQL_Firewall» в ОС GNU/Linux 6](#установка-компонента-sql_firewall-в-ос-gnulinux)

    2.  [Настройка конфигурационного фала postgresql.conf 7](#настройка-конфигурационного-фала-postgresql.conf)

    3.  [Установка расширения компонента «SQL_Firewall» 7](#установка-расширения-компонента-sql_firewall)

3.  [Функциональные возможности 9](#функциональные-возможности)

    1.  [Режимы фильтрации SQL-запросов 9](#режимы-фильтрации-sql-запросов)

        1.  [Режим обучения «learning» 9](#режим-обучения-learning)

        2.  [Режим применения «enforcing» 10](#режим-применения-enforcing)

        3.  [Режим разрешающий «permissive» 11](#режим-разрешающий-permissive)

        4.  [Режим отключения компонента «disabled» 11](#режим-отключения-компонента-disabled)

    2.  [Режим обнаружения SQL-инъекций 12](#режим-обнаружения-sql-инъекций)

        1.  [Принцип работы ML-модели в компоненте SQL Firewall 12](#принцип-работы-ml-модели-в-компоненте-sql-firewall)

        2.  [Параметры режима обнаружения SQL-инъекций 14](#параметры-режима-обнаружения-sql-инъекций)

        3.  [Активация режима обнаружения SQL-инъекций 15](#_bookmark17)

        4.  [Сочетание режимов работы SQL Firewall при обнаружении SQL-инъекций 17](#сочетание-режимов-работы-sql-firewall-при-обнаружении-sql-инъекций)

        5.  [Проверка режима обнаружения SQL-инъекций 18](#проверка-режима-обнаружения-sql-инъекций)

4.  [Описание операций 20](#описание-операций)

    1.  [Функции просмотра 20](#функции-просмотра)

        1.  [Просмотр правил брандмауэра (sql_firewall.sql_firewall_statements) 20](#просмотр-правил-брандмауэра-sql_firewall.sql_firewall_statements)

        2.  [Просмотр статистики (sql_firewall.sql_firewall_stat) 21](#просмотр-статистики-sql_firewall.sql_firewall_stat)

    2.  [Управление функциями мониторинга 21](#управление-функциями-мониторинга)

        1.  [Экспорт правил компонента (sql_firewall_export_rule) 21](#экспорт-правил-компонента-sql_firewall_export_rule)

        2.  [Импорт правил компонента (sql_firewall_import_rule) 22](#импорт-правил-компонента-sql_firewall_import_rule)

        3.  [Очистка правил (sql_firewall_reset) 23](#очистка-правил-sql_firewall_reset)

        4.  [Очистка предупреждений и ошибок (sql_firewall_stat_reset) 24](#очистка-предупреждений-и-ошибок-sql_firewall_stat_reset)

5.  [Обновление 25](#обновление)

6.  [Удаление 26](#удаление)

[Перечень сокращений 27](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

Компонент «SQL_Firewall» просматривает запросы к СУБД, которые могут быть выполнены, и предотвращает либо предупреждает о выполнении запросов, которые не найдены в установленных правилах («белых списках», WhiteList) по аналогии с брандмауэром, т.е. фильтрует трафик SQL-запросов.

> <img src="../docs/assets/images/com18.3.1/firewall/media/image1.png" style="width:0.25in;height:0.24851in" />Компонент «SQL_Firewall» не является межсетевым экраном (firewall) в классическом понимании, как программный или программно-аппаратный элемент компьютерной сети, применяемого для фильтрации сетевого трафика.

Компонент «SQL_Firewall» предназначен для защиты базы данных от SQL-инъекций или неожиданных запросов. Входящий запрос перед исполнением подается на обработку в обученную модель машинного обучения, которая возвращает в результате одно значение – вероятность содержания во входящем запросе SQL-инъекции. После этого вычисленная вероятность сравнивается со значением порога классификации, устанавливаемым с помощью параметра СУБД. Запросы с превышенной вероятностью наличия SQL-инъекций прерываются с выводом ошибки.

## Условия применения

## Влияние на производительность СУБД

Применение режима обнаружения SQL-инъекций может приводить к снижению производительности СУБД.

Суммарное влияние компонента «SQL_Firewall» (обнаружение SQL-инъекций + базовые функции фильтрации) на снижение производительности может составлять:

- в части влияния на TPS - 39,8%, в случае если в белом списке нет запросов из теста и 6,1%, если белый список содержит все запросы теста производительности;

- в части метрики Latency - 3,14 мс и 0,21 мс, соответственно.

Влияние отдельных компонентов SQL Firewall на снижение производительности в проведенных может составить:

- в части обнаружения SQL-инъекций - до 6,6% TPS и до 0,31 мс Latency (только для ОС, поддерживающих ML-модель);

- в части использования базовых функций фильтрации компонента

> «SQL_Firewall» (белые списки) - до 38,6% TPS и 3,1 мс Latency, если в белом списке нет запросов из теста и до 1,4% TPS и 0,03 мс Latency, если белый список содержит все запросы теста производительности.
>
> Настройка мониторинга компонента «SQL_Firewall» приведена в документе

«Поддержка мониторинга СУБД» 643.72410666.00067-08 98 01-28.

## Требования к используемой локали ОС

При использовании в компоненте SQL Firewall режима обнаружения SQL-инъекций для библиотеки ONNX Runtime (поставляется в составе установочного пакета компонента) в ОС должна быть обеспечена поддержка локали en_US.UTF8. Вывод список доступных локалей в ОС осуществляется при помощи команды:

\# locale -a

В случае, если поддержка локали en_US.UTF8 отсутствует в ОС, то необходимо сгенерировать локаль при помощи следующих команд:

\# locale-gen en_US

\# locale-gen en_US.UTF-8 \# update-locale

\# update-locale

Необходимо в конфигурационном файле postgresql.conf определить следующие параметры поддержки локали:

lc_messages = 'en_US.UTF-8' lc_monetary = 'en_US.UTF-8' lc_numeric = 'en_US.UTF-8' lc_time = 'en_US.UTF-8'

# УСТАНОВКА И НАСТРОЙКА

Установка компонента должна производиться от имени пользователя, обладающего административными привилегиями в системе. Компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

## Установка компонента «SQL_Firewall» в ОС GNU/Linux

Установка компонента осуществляется в процессе установки СУБД «Jatoba», также компонент можно установить опционально после основной инсталляции СУБД.

> Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

apt-get install jatoba\<ver\>-sql-firewall

> Здесь и далее \<ver\> - номер используемой версии СУБД «Jatoba».

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:

yum install jatoba\<ver\>-sql-firewall

Отдельного уточнения требуют операционные системы ALT Linux.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

apt-get install jatoba\<ver\>-sql-firewall

Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba5-sql-firewall и т.п.

Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Настройка конфигурационного фала postgresql.conf

В разделе «Shared Library Preloading», для последующей загрузки расширения, установить параметр:

<img src="../docs/assets/images/com18.3.1/firewall/media/image3.png" style="width:6.95655in;height:1.3175in" />

shared_preload_libraries = 'sql_firewall'

> Рисунок 2.1 – Параметр загрузки расширения
>
> <img src="../docs/assets/images/com18.3.1/firewall/media/image1.png" style="width:0.25in;height:0.25in" />В случае, если в параметре shared_preload_libraries также используется значение pg_stat_statements, то значение sql_firewall должно быть в обязательном порядке через запятую установлено после него:

shared_preload_libraries = 'pg_stat_statements, sql_firewall'

> Для применения параметров потребуется перезапустить СУБД.

## Установка расширения компонента «SQL_Firewall»

После перезагрузки СУБД и загрузки расширения станет доступной установка расширения «sql_firewall».

> Расширение устанавливается на всех узлах кластера при помощи SQL-команды:

CREATE EXTENSION sql_firewall;

<img src="../docs/assets/images/com18.3.1/firewall/media/image4.png" style="width:7.11579in;height:1.94719in" />

> Рисунок 2.2 – Команда установки расширения в ОС GNU/Linux
>
> В результате выполнения SQL-команды будет создано расширение (extension)
>
> «sql_firewall» в схеме данных.

# ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ

Компонент «SQL_Firewall» выполнен в форме расширения СУБД и предназначен для фильтрации SQL-запросов (далее – «запрос»), поступающих в СУБД.

> Фильтрация выполняется в два этапа:

1)  определение наличия SQL-инъекции в запросе. В случае наличия выполняется блокировка поступившего запроса в соответствии с указанными параметрами. Определение наличия SQL-инъекции выполняется с помощью обученной ML-модели (см. п. [3.2](#режим-обнаружения-sql-инъекций)).

2)  определяется наличие запроса в перечне разрешенных для выполнения запросов.

## Режимы фильтрации SQL-запросов

Компонент «SQL_Firewall» функционирует в следующих режимах, указанных в параметре sql_firewall.firewall:

- "learning" – режим обучения;

- "enforcing" – режим применения;

- "permissive" – режим разрешающий любые SQL запросы;

- "disabled" – режим отключенного модуля.

> <img src="../docs/assets/images/com18.3.1/firewall/media/image1.png" style="width:0.25in;height:0.24932in" />Перед установкой параметра режима компонента «sql_firewall.firewall» в режимах «enforcing» или «permissive» необходимо активировать мониторинг всех метрик СУБД в режиме «learning» для того, чтобы используемые запросы вошли в состав разрешённых.

## Режим обучения «learning»

В режиме обучения модуль собирает информацию о пользователе и его запросах. Собирает, записывает и связывает информацию об идентификаторе пользователя «userid» и идентификаторе SQL-запроса «query id».

«query id» устанавливается по дереву синтаксического анализа, аналогично расширению «pg_stat_statements».

> Режим обучения инициализируется установкой параметра:

sql_firewall.firewall = 'learning'

в конфигурационном файле СУБД postgresql.conf и последующей перезагрузкой СУБД.

<img src="../docs/assets/images/com18.3.1/firewall/media/image5.png" style="width:6.89368in;height:1.495in" />

> Рисунок 3.1 – Инициализация режима обучения

По умолчанию в режиме обучения может обработаться 5000 запросов. Запросы превышающие данное значение не будут изучаться.

Параметр изучаемых запросов может быть установлен от 100 до 5000, который устанавливается в конфигурационном файле СУБД postgresql.conf

<img src="../docs/assets/images/com18.3.1/firewall/media/image6.png" style="width:7.10151in;height:1.47521in" />

> Рисунок 3.2 – Установка параметра количества обрабатываемых SQL - запросов

## Режим применения «enforcing»

В режиме применения «enforcing», модуль проверяет находятся ли идентификатор пользователя «userid» и его SQL-запрос «query id» в паре, которая была ранее записана в режиме обучения «learning».

Если обнаруживается несоответствие, то пользователю выдается предупреждение о предотвращении выполнения.

> Режим применения инициализируется установкой параметра:

sql_firewall.firewall = 'enforcing'

в конфигурационном файле СУБД postgresql.conf и последующей перезагрузкой СУБД.

<img src="../docs/assets/images/com18.3.1/firewall/media/image7.png" style="width:6.92987in;height:1.51417in" />

> Рисунок 3.3 – Инициализация режима применения

## Режим разрешающий «permissive»

В разрешающем режиме «permissive» модуль проверяет все запросы, но позволяет их выполнение, даже в случае, если таких запросов нет в правилах модуля. При несовпадениях выполняет запрос и сигнализирует пользователю о выявленном несоответствии.

> Режим разрешения инициализируется установкой параметра:

sql_firewall.firewall = 'permissive'

в конфигурационном файле СУБД postgresql.conf и последующей перезагрузкой СУБД.

<img src="../docs/assets/images/com18.3.1/firewall/media/image8.png" style="width:6.89347in;height:0.96875in" />

> Рисунок 3.4 – Инициализация разрешающего режима

## Режим отключения компонента «disabled»

В данном режиме модуль отключен и не проводит никаких действий и включен по умолчанию.

> Режим отключения компонента инициализируется установкой параметра:

sql_firewall.firewall = 'disabled'

в конфигурационном файле СУБД postgresql.conf и последующей перезагрузкой СУБД.

> <img src="../docs/assets/images/com18.3.1/firewall/media/image9.png" style="width:6.95486in;height:1.45312in" />
>
> Рисунок 3.5 – Инициализация отключения модуля

## Режим обнаружения SQL-инъекций

В данном режиме компонент «SQL_Firewall реализует функционал обнаружения SQL-инъекций в входящих запросах к СУБД.

> Режим обнаружения SQL-инъекций доступен для компонента «SQL_Firewall» версии

1.  с использованием СУБД «Jatoba» версии 5/6/18 при использовании ОС GNU/Linux. Список поддерживаемых ОС GNU/Linux приведен в документе «Руководство по установке» 643.72410666.00067-08 97 01

> SQL-инъекция – это уязвимость, которая позволяет атакующей стороне использовать фрагмент вредоносного кода на языке SQL для получения доступа к потенциально ценной (коммерческой, конфиденциальной, персональной) информации и манипулирования СУБД.
>
> Обнаружение SQL-инъекций производится с помощью обученной ML-модели (Machine Learning, машинное обучение), принцип которой приводится в п. [3.2.1](#принцип-работы-ml-модели-в-компоненте-sql-firewall).

## Принцип работы ML-модели в компоненте SQL Firewall

> Модель машинного обучения обучена распознавать широкий спектр техник SQL-инъекций, включая, но не ограничиваясь: IN-BAND (включая ERROR-BASED и UNION-BASED), BLIND (включая TIME-BASED) и OUT OF BAND атаки.

## Определяемые типы SQL-инъекций

> ML-модель компонента SQL Firewall детектирует следующие основные типы SQL-инъекций:

1)  IN-BAND SQLi – для атаки и получения данных используется один канал. К этому типу относятся:

    - ERROR-BASED (на основе ошибок) – вид атаки, при проведении которой нарушители используют сообщения об ошибках сервера базы данных для разведки и определения её структуры. В результате атаки

> будет передана ошибка, в тексте которой будет присутствовать полная версия используемой СУБД;

AND (SELECT version())::int=1 -- -

- UNION-BASED – предоставляет возможность получения информации с помощью оператора UNION для объединения результатов двух или более запросов SELECT. В ходе проведения атаки позволяет определить количество столбцов в исходном запросе. При совпадении количества NULL с количеством столбцов запрос выполнится, иначе возникнет ошибка.

UNION ALL SELECT NULL, NULL, NULL; -- -

2)  BLIND SQLi («слепая» SQL-инъекция) – вид атаки, при которой ответ от базы данных можно получить лишь в формате «да»/«нет» (true/false) или через анализ времени ответа. Применение такой инъекции позволяет атакующему определить тип используемой базы данных: если это СУБД «Jatoba», то значение выражения будет True, иначе False.

AND substr(version(),1,10) = 'PostgreSQL' and '1'

3)  TIME-BASED (на основе времени ответа) – еще один тип «слепой» SQL-инъекций, при которой атакующий специально заставляют СУБД задержать ответ на запрос на несколько секунд. Таким образом злоумышленник может понять корректность составленного запроса.

SELECT CASE WHEN substring(datname,1,1)='1' THEN pg_sleep(5) ELSE pg_sleep(0) END FROM pg_database LIMIT 1;

4)  OUT OF BAND – атакующий отправляет SQL-запросы к СУБД способом, отличным от обычного взаимодействия. В качестве примера – использование DNS- или HTTP-запросов.

## Определение вероятности SQL-инъекции

Входящий запрос перед исполнением подается на обработку в ML-модель, которая возвращает в результате одно значение – вероятность (P) содержания во входящем запросе SQL-инъекции.

После этого значение *P* сравнивается с пороговым значением *T*, которое устанавливает администратором (см. далее п. [3.2.2](#параметры-режима-обнаружения-sql-инъекций)).

> При P ≤ T запросы считаются безопасными и допускаются к выполнению.

При P \> T запрос классифицируется как содержащий SQL-инъекцию, и его выполнение прерывается с ошибкой.

## Параметры режима обнаружения SQL-инъекций

Параметры режима обнаружения SQL-инъекций определяются в конфигурационном файле postgresql.conf.

1.  **sql_firewall.ml_enabled**

> Параметр отвечает за работу алгоритма определения SQL-инъекций.
>
> <img src="../docs/assets/images/com18.3.1/firewall/media/image2.png" style="width:0.25139in;height:0.25139in" />При включённом режиме обнаружения в SQL-инъекций (sql_firewall.ml_enabled = 'true') запросы, исполняемые суперпользователями (например, postgres), не проверяются на наличие SQL-инъекций!
>
> Тип: boolean

При значении «true» режим обнаружения SQL-инъекций включён, при «false» - выключен.

> Значение по умолчанию: false

2.  **sql_firewall.ml_score_threshold**

Параметр определяет предельный порог *T*, при превышении которого обработанный запрос с значением P будет классифицироваться как содержащий SQL-инъекцию.

> Тип: float
>
> Значение по умолчанию: 0.35.

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 93%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><img src="../docs/assets/images/com18.3.1/firewall/media/image1.png" style="width:0.25208in;height:0.25208in" /></p>
</blockquote></th>
<th><blockquote>
<p>В ходе тестирования ML-модели для компонента «SQL_Firewall» на</p>
<p>синтетических данных установлено, что вариант с предобработкой</p>
</blockquote></th>
</tr>
</thead>
<tbody>
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

> демонстрирует более высокие значения метрик качества при снижении порогового значения ml_score_threshold ниже 0.5. Оптимальные результаты в рамках проведенных испытаний достигаются в диапазоне значений 0.3–0.35.
>
> Следует учитывать, что значение параметра ml_score_threshold является подбираемым и зависит от особенностей конкретного экземпляра СУБД. Администратору рекомендуется самостоятельно определить оптимальное значение ml_score_threshold для своего экземпляра.

## Пример.

> Установлено стандартное значение порога ml_score_threshold = 0.35
>
> В СУБД поступают два запроса, их вычисленное значение P — 0.25 и 0.75 соответственно.

В этом случае, первый запрос будет считаться безопасным, а второй – SQL-инъекцией, и он будет заблокирован компонентом.

## Активация режима обнаружения SQL-инъекций

> Режим обнаружения SQL-инъекций инициализируется установкой параметров:

shared_preload_libraries = 'sql_firewall' sql_firewall.ml_enabled = 'true'

> в конфигурационном файле СУБД postgresql.conf и последующей перезагрузкой СУБД.
>
> <img src="../docs/assets/images/com18.3.1/firewall/media/image10.png" style="width:7.08166in;height:3.09031in" />
>
> Рисунок 3.6 – Активация режима обнаружения SQL-инъекций в конфигурационном файле postgresql.conf
>
> Убедится в том, что установлена библиотека ONNX Runtime с помощью команды:

<img src="../docs/assets/images/com18.3.1/firewall/media/image11.png" style="width:7.04528in;height:1.61875in" />

ldd /usr/jatoba-\<ver\>/lib/sql_firewall.so

> Рисунок 3.7 – Проверка установки библиотеки onnxruntime

Также для работы режима обнаружения SQL-инъекций необходимо установленное расширение в СУБД (см. п. [2.3](#установка-расширения-компонента-sql_firewall)).

Ознакомится с версией используемой ML-модели можно выполнив следующий запрос:

SELECT sql_firewall_ml_version();

> <img src="../docs/assets/images/com18.3.1/firewall/media/image12.jpeg" style="width:7.09408in;height:1.63719in" />
>
> Рисунок 3.8 – Проверка используемой ML-модели

## Сочетание режимов работы SQL Firewall при обнаружении SQL-инъекций

> Таблица 3.1 – Режимы работы SQL Firewall при обнаружении SQL-инъекций

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 29%" />
<col style="width: 23%" />
<col style="width: 43%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>sqli_catcher (ml_enabled)</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>SQL Firewall (firewall)</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Комментарий</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>False</p>
</blockquote></td>
<td><blockquote>
<p>disabled</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>False</p>
</blockquote></td>
<td><blockquote>
<p>learning</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>False</p>
</blockquote></td>
<td><blockquote>
<p>permissive</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>False</p>
</blockquote></td>
<td><blockquote>
<p>enforcing</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>True</p>
</blockquote></td>
<td><blockquote>
<p>disabled</p>
</blockquote></td>
<td><blockquote>
<p>Только обнаружение SQL-инъекций</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>6</p>
</blockquote></td>
<td><blockquote>
<p>True</p>
</blockquote></td>
<td><blockquote>
<p>learning</p>
</blockquote></td>
<td><blockquote>
<p>Обучение выполняется не для обнаружения SQL-инъекций</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>7</p>
</blockquote></td>
<td><blockquote>
<p>True</p>
</blockquote></td>
<td><blockquote>
<p>permissive</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Только для запросов, не являющихся SQL-инъекции.</p>
<p>В случае, если запрос не входит в белый список компонента «SQL_Firewall», выдается соответствующее предупреждение</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>8</p>
</blockquote></td>
<td><blockquote>
<p>True</p>
</blockquote></td>
<td><blockquote>
<p>enforcing</p>
</blockquote></td>
<td><blockquote>
<p>Только для запросов:</p>
</blockquote>
<ol type="1">
<li><p>не являющихся SQL-инъекциями</p></li>
<li><p>входящих в белый список SQL</p></li>
</ol>
<blockquote>
<p>Firewall</p>
</blockquote></td>
</tr>
</tbody>
</table>

Схема взаимодействия и обработки SQL-запросов в различных режимах работы компонента «SQL_Firewall» представлена на рисунке [3.9](#_bookmark19).

disabled

> SQL-запрос

имеется в "белом списке"

> Вычисление вероятности принадлежности к классу "SQL-инъекция" (P)

Да

learning

P \> score_threshold

firewall

> Обработка
>
> SQL-выражения

Нет

False

True

ml_enabled

> Получение
>
> SQL-запроса
>
> Запись информации в журнал работы
>
> Добавление SQL-запроса в "белый список"
>
> Сообщение "Prohibited SQL-statement"
>
> Запись информации в журнал работы
>
> Выполнение SQL-
>
> запроса

permissive/

> enforcing

Нет

firewall

permissive

enfo rcing

Да

> Ожидание

следующего

> SQL-запроса
>
> Сообщение "Обнаружена
>
> SQL-инъекция"
>
> <span id="_bookmark19" class="anchor"></span>Рисунок 3.9 – Схема взаимодействия и обработки SQL-запросов в различных режимах работы компонента «SQL_Firewall»

## Проверка режима обнаружения SQL-инъекций

После выполнения настройки режима обнаружения SQL-инъекций необходимо выполнить несколько тестовых запросов.

Тестовые запросы составлены специальным образом и содержат наглядные примеры инъекций:

SELECT \* FROM tbl WHERE name='admin' OR 1=1 UNION ALL SELECT NULL, NULL, NULL;

SELECT \* FROM tbl WHERE name='user' AND 1=CAST((SELECT

concat('DATABASE: ',current_database())) AS int) AND '1'='1';

Данные запросы должны быть заблокированы компонента «SQL_Firewall» с выводом следующего сообщения:

ОШИБКА: Обнаружена SQL-инъекция! Выполнение запроса прервано

# ОПИСАНИЕ ОПЕРАЦИЙ

## Функции просмотра

> Компонент обладает функциональными возможностями просмотра:

- правил брандмауэра;

- статистики брандмауэра.

## Просмотр правил брандмауэра (sql_firewall.sql_firewall_statements)

Представление «sql_firewall_statements» показывает правила брандмауэра и счетчик выполнения для каждого запроса.

> Просмотр правил брандмауэра выполняется SQL-командой:

SELECT \* from sql_firewall.sql_firewall_statements;

Данную SQL-команду целесообразно использовать для специального программного обеспечения по управлению СУБД.

При работе в CLI целесообразно изменить ее и использовать ограничение количества символов в поле «query» оператором «substring»:

<img src="../docs/assets/images/com18.3.1/firewall/media/image16.png" style="width:7.11581in;height:1.97625in" />

SELECT userid, queryid, calls, substring (query from 0 for 90) from sql_firewall.sql_firewall_statements;

> Рисунок 4.1 – Просмотр правил брандмауэра в ОС GNU/Linux В полученном списке отражены поля:

- userid – идентификационный номер пользователя (идентификационный номер 10 присваивается роли postgres);

- queryid – идентификационный номер запроса;

- query – тело запроса;

- calls – вызовы.

## Просмотр статистики (sql_firewall.sql_firewall_stat)

> В представлении «sql_firewall_stat» есть два счетчика: "sql_warning" и "sql_error".
>
> «sql_warning» показывает количество выполненных запросов с предупреждениями в

«разрешающем»" режиме (<u>permissive</u>).

«sql_error» показывает количество предотвращенных запросов в «применительном» режиме (<u>enforcing</u>).

> Просмотр статистика выполняется SQL-командой:

<img src="../docs/assets/images/com18.3.1/firewall/media/image17.png" style="width:7.12073in;height:1.80187in" />

SELECT \* from sql_firewall.sql_firewall_stat;

> Рисунок 4.2 – Просмотр статистики в ОС GNU/Linux

## Управление функциями мониторинга

Компонент обладает функциональными возможностями управления правилами, такими как:

- экспорт правил (п. [4.2.1](#экспорт-правил-компонента-sql_firewall_export_rule));

- импорт правил (п. [4.2.2](#импорт-правил-компонента-sql_firewall_import_rule));

- очистка правил (п. [4.2.3](#очистка-правил-sql_firewall_reset));

- очистка предупреждений и ошибок (п. [4.2.4](#очистка-предупреждений-и-ошибок-sql_firewall_stat_reset)).

## Экспорт правил компонента (sql_firewall_export_rule)

Функциональная возможность экспорта правил компонента «sql_firewall» доступна в режиме «[<u>disabled</u>](#режим-отключения-компонента-disabled)» от имени и с правами привилегированного пользователя с атрибутом

«Superuser».

> SQL-команда экспорта правил SQL-брандмауэра имеет синтаксис:

sql_firewall_export_rule('/path/to/rule.txt')

Для предотвращения ошибки доступа к файлу рекомендуется размещать его в директории DATA, где у системной учетной записи postgres есть полные права на чтение и запись.

> В рассматриваемом примере для ОС GNU/Linux файл rule.txt расположен по пути:

/var/lib/jatoba/\<ver\>/data/rule.txt

> SQL-команда будет иметь вид:

<img src="../docs/assets/images/com18.3.1/firewall/media/image18.png" style="width:7.0455in;height:1.75375in" />

SELECT

sql_firewall_export_rule('/var/lib/jatoba/\<ver\>/data/rule.txt')

> ;
>
> Рисунок 4.3 – Выполнение команды экспорта правил в ОС GNU/Linux

## Импорт правил компонента (sql_firewall_import_rule)

Функциональная возможность импорта правил компонента «SQL_Firewall» доступна в режиме «[<u>disabled</u>](#режим-отключения-компонента-disabled)» от имени и с правами привилегированного пользователя с атрибутом

«Superuser».

> SQL-команда импорта правил SQL-брандмауэра имеет синтаксис:

sql_firewall_import_rule('/path/to/rule.txt')

> В рассматриваемом примере файл rule.txt расположен в директории «import». В ОС GNU/Linux SQL-команда будет иметь вид:

SELECT sql_firewall_import_rule('/import/rule.txt');

<img src="../docs/assets/images/com18.3.1/firewall/media/image19.png" style="width:7.1159in;height:1.96656in" />

> Рисунок 4.4 – Выполнение команды импорта правил в ОС GNU/Linux

После этого необходимо проверить импортированные правила из файла с помощью функции «sql_firewall.sql_firewall_statements» (см. п. [4.1.1](#просмотр-правил-брандмауэра-sql_firewall.sql_firewall_statements)).

## Очистка правил (sql_firewall_reset)

> Функциональная возможность очистки правил компонента «SQL_Firewall» доступна в режиме «[<u>disabled</u>](#режим-отключения-компонента-disabled)» от имени и с правами привилегированного пользователя с атрибутом

«Superuser» и выполняется SQL-командой:

<img src="../docs/assets/images/com18.3.1/firewall/media/image20.png" style="width:7.11573in;height:1.76312in" />

SELECT sql_firewall_reset();

> Рисунок 4.5 – SQL-команда очистки правил в ОС GNU/Linux
>
> В итоге очистятся сформированные правила и перезапишется файл «rule.txt»
>
> Проверить выполнение очистки правил компонента возможно вызовом функции

«[<u>sql_firewall.sql_firewall_statements</u>](#просмотр-правил-брандмауэра-sql_firewall.sql_firewall_statements)».

## Очистка предупреждений и ошибок (sql_firewall_stat_reset)

> Функциональная возможность очистки правил компонента «SQL_Firewall» доступна в режиме «[<u>disabled</u>](#режим-отключения-компонента-disabled)» от имени и с правами привилегированного пользователя с атрибутом

«Superuser» и выполняется SQL-командой:

<img src="../docs/assets/images/com18.3.1/firewall/media/image21.png" style="width:7.11983in;height:1.77281in" />

SELECT sql_firewall_reset();

> Рисунок 4.6 – SQL-команда очистки предупреждений и ошибок в ОС GNU/Linux

По результатам выполнения команды выполнится очистка счетчиков предупреждений и ошибок.

> Проверить выполнение очистки правил компонента возможно вызовом функции

«[<u>sql_firewall.sql_firewall_stat</u>](#просмотр-статистики-sql_firewall.sql_firewall_stat)», через SQL-команду:

SELECT \* from sql_firewall.sql_firewall_stat;

# ОБНОВЛЕНИЕ

Обновление компонента выполняется согласно документу «Руководство по обновлению» 643.72410666.00067-08 93 01.

# УДАЛЕНИЕ

> Для полного удаления компонента необходимо выполнить следующие действия:

1)  удалить расширение SQL-командой:

DROP EXTENSION sql_firewall

2)  удалить или закомментировать в конфигурационном файле postgresql.conf загрузку компонента:

\#shared_preload_libraries = 'sql_firewall' \#sql_firewall.firewall = 'disabled' \#sql_firewall.max = 5000

3)  перезапустить службу СУБД.

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 8%" />
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
