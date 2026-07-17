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
<p><strong>Руководство по настройке. Часть 28.</strong></p>
<p><strong>Поддержка мониторинга СУБД</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-28</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 82</p>
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

> В документе приведены сведения, необходимые для установки и эксплуатации компонентов, предназначенных для мониторинга СУБД:

- Компонент «node_exporter». Версия компонента – 1.8.0;

- Компонент «postgres_exporter». Версия компонента – 0.18.1;

- Компонент «sql_exporter». Версия компонента – 0.18.6.

- Система «Prometheus». Версия системы – 3.5.0.

- <img src="../docs/assets/images/com18.3.1/monitoring/media/image1.png" style="width:0.25208in;height:0.25208in" />Утилита «Alertmanager». Версия компонента – 0.27.0. Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><blockquote>
<p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 5.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-6/bin».</p>
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

> <img src="../docs/assets/images/com18.3.1/monitoring/media/image2.png" style="width:0.25341in;height:0.25208in" />Степени важности примечаний, применяемые в документе:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image2.png" style="width:0.25138in;height:0.25056in" /> **Важная информация** – указания, требующие особого внимания

> <img src="../docs/assets/images/com18.3.1/monitoring/media/image1.png" style="width:0.25in;height:0.25in" /> **Дополнительная информация** – указания, позволяющие упростить работу с изделием

# СОДЕРЖАНИЕ

# 

1.  [Назначение компонентов 5](#назначение-компонентов)

    1.  [Условия применения 5](#условия-применения)

    2.  [Ограничения по эксплуатации 5](#ограничения-по-эксплуатации)

2.  [Архитектура системы мониторинга 6](#архитектура-системы-мониторинга)

3.  [Установка и настройка целевых СУБД 8](#установка-и-настройка-целевых-субд)

    1.  [Установка СУБД 8](#установка-субд)

    2.  [Настройка конфигурационных файлов 8](#настройка-конфигурационных-файлов)

    3.  [Установка расширения «pg_stat_statements» 8](#установка-расширения-pg_stat_statements)

4.  [Установка экспортера «jatoba\*\_node_exporter» 11](#установка-экспортера-jatoba_node_exporter)

5.  [Установка экспортера «jatoba\*\_postgres_exporter» 15](#установка-экспортера-jatoba_postgres_exporter)

    1.  [Установка утилиты и службы «jatoba\*\_postgres_exporter» 15](#установка-утилиты-и-службы-jatoba_postgres_exporter)

    2.  [Создание пользователя СУБД «postgres_exporter» 16](#создание-пользователя-субд-postgres_exporter)

    3.  [Настройка переменных окружения 16](#настройка-переменных-окружения)

    4.  [Запуск утилиты «postgres_exporter» 18](#запуск-утилиты-postgres_exporter)

6.  [Установка экспортера «jatoba\*\_sql_exporter» 21](#установка-экспортера-jatoba_sql_exporter)

    1.  [Установка утилиты и службы «sql_exporter» 21](#установка-утилиты-и-службы-sql_exporter)

    2.  [Настройка переменных окружения 22](#настройка-переменных-окружения-1)

    3.  [Создание пользователя СУБД «sql_exporter» 23](#создание-пользователя-субд-sql_exporter)

    4.  [Настройка параметров экспортера и подключения к БД в файле «sql_exporter.yml» 23](#настройка-параметров-экспортера-и-подключения-к-бд-в-файле)

    5.  [Запуск утилиты «jatoba\*\_sql_exporter» 25](#запуск-утилиты-jatoba_sql_exporter)

7.  [Система «Prometheus» 28](#система-prometheus)

    1.  [Установка системы «Prometheus» 28](#установка-системы-prometheus)

    2.  [Конфигурация системы «Prometheus» 29](#конфигурация-системы-prometheus)

        1.  [Примеры блока «postgres-exporter» 30](#примеры-блока-postgres-exporter)

        2.  [Примеры блока «sql-exporter» 31](#примеры-блока-sql-exporter)

        3.  [Примеры блока «node-exporter» 33](#примеры-блока-node-exporter)

    3.  [Запуск системы «Prometheus» 34](#запуск-системы-prometheus)

8.  [Утилита «Alertmanager» 39](#утилита-alertmanager)

    1.  [Установка утилиты и службы «alertmanager» 39](#установка-утилиты-и-службы-alertmanager)

    2.  [Настройка параметров утилиты 40](#настройка-параметров-утилиты)

        1.  [SMTP 41](#smtp)

        2.  [Telegram 42](#telegram)

        3.  [Zulip 45](#zulip)

    3.  [Запуск утилиты «alertmanager» 50](#запуск-утилиты-alertmanager)

9.  [Подключение к JDS 52](#подключение-к-jds)

    1.  [Настройка SSH-соединения 53](#настройка-ssh-соединения)

    2.  [Конфигурирование JDS 54](#конфигурирование-jds-вкладка-источник-данных)

    3.  [Настройка связки системы «Prometheus» и утилиты «Alertmanager» 56](#настройка-связки-системы-prometheus-и-утилиты-alertmanager)

10. [Настройка экспортеров для компонента ja_Hipe_Cluster 58](#настройка-экспортеров-для-компонента)

    1.  [Параметры стенда 58](#параметры-стенда)

    2.  [Конфигурирование системы «Prometheus» для компонента «ja_Hipe_Cluster» 61](#конфигурирование-системы-prometheus-для-компонента)

11. [Настройка экспортеров для компонента jaDog 64](#настройка-экспортеров-для-компонента-jadog)

    1.  [Параметры стенда 64](#параметры-стенда-1)

    2.  [Конфигурирование системы «Prometheus» для компонента «jaDog» 66](#конфигурирование-системы-prometheus-для-компонента-jadog)

12. [Обновление компонентов экспортеров 69](#обновление-компонентов-экспортеров)

    1.  [Обновление компонента «sql_exporter» 69](#обновление-компонента-sql_exporter)

        1.  [Установка новой версии компонента «sql_exporter» 69](#установка-новой-версии-компонента-sql_exporter)

        2.  [Настройка мониторинга кластера «ja_Hipe_Cluster» после обновления 70](#настройка-мониторинга-кластера-ja_hipe_cluster-после-обновления)

    2.  [Обновление компонентов node_exporter, postgres_exporter и alertmanager 75](#обновление-компонентов-node_exporter-postgres_exporter-и-alertmanager)

13. [Обновление системы «Prometeus» 77](#обновление-системы-prometeus)

[Термины и определения 80](#термины-и-определения)

[Перечень сокращений 81](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТОВ

> Компонент «node_exporter» – программный инструмент, предназначенный для мониторинга и сбора метрик с различных компонентов в Linux-подобных ОС.
>
> Компонент собирает и экспортирует различные метрики, такие как загрузка процессора, использование памяти, статистика сети, системные вызовы и т.д. Собранные данные могут быть отправлены на сервер «Prometheus» для визуализации и анализа.
>
> Компонент «postgres_exporter» – инструмент для сбора и экспорта метрик PostgreSQL, таких как статистика по базе данных, нагрузка на сервер, количество запросов и т.д. Он разработан для работы с PostgreSQL и предоставляет данные в формате, удобном для системы «Prometheus». С помощью «postgres_exporter» можно отслеживать производительность PostgreSQL, выявлять проблемы и оптимизировать настройки базы данных.
>
> Компонент «sql_exporter» – инструмент для экспорта данных из SQL-запросов в формат, удобный для анализа и визуализации. Он позволяет получать информацию о структуре таблиц, данных, индексах, статистике и других параметрах базы данных. Полезен для анализа производительности системы, выявления проблем и оптимизации запросов.

## Условия применения

> Компоненты могут использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux.

## Ограничения по эксплуатации

> Для подключения целевой СУБД к компоненту «Jatoba data safe» требуется указывать IP–адрес в строке подключения утилит к СУБД и не использовать параметр «localhost».
>
> Символы «коммерческое эт» «@», «амперсанд» «&», «равно» «=», «вопросительный знак» «?» и «двоеточие» «:», не рекомендуется использовать в именах пользователей и в паролях, для исключения ошибки в строке подключения.
>
> Эти символы используются для разделения параметров строки подключения. Ограничений по совместимости с другими компонентами нет.

# АРХИТЕКТУРА СИСТЕМЫ МОНИТОРИНГА

> Архитектура системы мониторинга основана на том, что:

- на серверах целевых СУБД устанавливается экспортера «node_exporter» (см. р. [4](#установка-экспортера-jatoba_node_exporter));

- на целевых СУБД с предустановленным расширением «pg_stat_statements» устанавливаются утилиты сбора метрик, такие как:

  - экспортер «postgres_exporter» (см. р. [5](#установка-экспортера-jatoba_postgres_exporter));

  - экспортер «sql_exporter» (см. р. [6](#установка-экспортера-jatoba_sql_exporter));

- система «Prometheus» собирает их в своём хранилище (см. р. [7](#система-prometheus));

- компонент «Jatoba data safe» использует данные хранилища «Prometheus» для отображения их в разделе «Мониторинг»;

- утилита «Alertmanager» обеспечивает контроль над пороговыми значениями и рассылку уведомлений (см. р. [8](#утилита-alertmanager)).

> В зависимости от количества СУБД, подключенных к мониторингу и общей нагрузки, система «Prometheus» может быть установлена на отдельном сервере. В этом случае «JDS» будет получать данные по сети, что увеличит нагрузку на неё.
>
> Целесообразнее компонент JDS и систему «Prometheus» устанавливать на одном сервере. Такая конфигурация сделает данный сервер полноценным сервером мониторинга и безопасности.
>
> Для каждой наблюдаемой СУБД должны быть настроены все экспортёры.
>
> В рассматриваемом примере на ОС Ubuntu 22.04 используются параметры сети и программного обеспечения, приведенные в таблице [2.1](#_bookmark4).
>
> <span id="_bookmark4" class="anchor"></span>Таблица 2.1 – Конфигурация стенда

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 18%" />
<col style="width: 19%" />
<col style="width: 20%" />
<col style="width: 11%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: right;"><strong>Имя сервера</strong></th>
<th style="text-align: center;"><blockquote>
<p><strong>IP-адрес</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ПО</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Port</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Роль</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></td>
<td style="text-align: right;">u602doc-jds01</td>
<td style="text-align: center;"><blockquote>
<p>10.116.102.41/24</p>
</blockquote></td>
<td></td>
<td></td>
<td><blockquote>
<p>Сервер мониторинга</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>1.1</p>
</blockquote></td>
<td style="text-align: right;"></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>JDS</p>
</blockquote></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>1.2</p>
</blockquote></td>
<td style="text-align: right;"></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>Prometheus</p>
</blockquote></td>
<td><blockquote>
<p>9090</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: right;"></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>Alert manager</p>
</blockquote></td>
<td><blockquote>
<p>9093</p>
<p>22</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td style="text-align: right;">u602doc-pgp01</td>
<td style="text-align: center;"><blockquote>
<p>10.116.102.45/24</p>
</blockquote></td>
<td></td>
<td></td>
<td><blockquote>
<p>Целевая СУБД</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2.1</p>
</blockquote></td>
<td style="text-align: right;"></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>pg_stat_statements</p>
</blockquote></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2.2</p>
</blockquote></td>
<td style="text-align: right;"></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>node_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9100</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2.3</p>
</blockquote></td>
<td style="text-align: right;"></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>postgres_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9187</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2.4</p>
</blockquote></td>
<td style="text-align: right;"></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>sql_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9399</p>
</blockquote></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 18%" />
<col style="width: 19%" />
<col style="width: 20%" />
<col style="width: 11%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Имя сервера</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>IP-адрес</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ПО</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Port</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Роль</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>3</p>
</blockquote></td>
<td style="text-align: center;">u602doc-ldap01</td>
<td style="text-align: center;"><blockquote>
<p>10.116.102.47/24</p>
</blockquote></td>
<td></td>
<td></td>
<td><blockquote>
<p>Целевая СУБД</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>3.1</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>pg_stat_statements</p>
</blockquote></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>3.2</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>node_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9100</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>3.3</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>postgres_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9187</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>3.4</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>sql_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9399</p>
</blockquote></td>
<td></td>
</tr>
</tbody>
</table>

> Схема стенда представлена на рисунке [2.1](#_bookmark5).

Служ ебная СУБД

Prom et heus

JDS

Alert Manag er

IP 10 .116.10 2.41

Целевая СУБД

«p g \_st at \_statem ents»

Целевая СУБД

«p g \_st at \_statem ents»

«n ode_export er»

«n ode_export er»

«post gres_export er»

«post gres_export er»

IP 10 .116.10 2.45 IP 10 .116.10 2.47

«sq l_export er»

«sq l_export er»

> <span id="_bookmark5" class="anchor"></span>Рисунок 2.1 – Схема стенда

# УСТАНОВКА И НАСТРОЙКА ЦЕЛЕВЫХ СУБД

## Установка СУБД

> Установка СУБД «Jatoba» выполняется от имени пользователя, обладающего административными привилегиями в системе, в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по установке».

## Настройка конфигурационных файлов

> Целевые СУБД должны быть настроены на приём подключений
>
> В конфигурационном файле «postgresql.conf», в разделе «CONNECTIONS AND AUTHENTICATION» раскомментирован и установлен параметр:
>
> listen_addresses = '\*'
>
> Рисунок 3.1 - Конфигурационный файл «postgresql.conf»
>
> В конфигурационном файле «pg_hba.conf» разрешены подключения к СУБД в параметре:
>
> host all all all md5
>
> Рисунок 3.2 – Конфигурационный файл «pg_hba.conf»

## Установка расширения «pg_stat_statements»

> На каждой целевой СУБД должно быть установлено расширение «pg_stat_statements».
>
> Для установки расширения «pg_stat_statements» потребуется:
>
> – В конфигурационном файле «postgresql.conf», в разделе «Shared Library Preloading» для последующей загрузки расширения установить параметр:
>
> shared_preload_libraries = 'pg_stat_statements'
>
> Рисунок 3.3 – Строка загрузки расширения в конфигурационном файле СУБД
>
> «postgresql.conf»
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image1.png" style="width:0.25in;height:0.25in" />В случае, если утилитой sql_exporter опрашиваются метрики компонента SQL Firewall, в параметре shared_preload_libraries перед значением sql_firewall должно быть в обязательном порядке через запятую установлено значение pg_stat_statements:
>
> shared_preload_libraries = 'pg_stat_statements, sql_firewall'
>
> – В разделе «STATISTICS» – «Monitoring» раскомментировать строку и добавить параметры:
>
> compute_query_id = on
>
> Рисунок 3.4 – Строка параметра «compute_query_id» в конфигурационном файле СУБД
>
> «postgresql.conf»
>
> – В разделе «CUSTOMIZED OPTIONS» добавить параметры:
>
> pg_stat_statements.max = 10000 pg_stat_statements.track = all
>
> Рисунок 3.5 – Параметры статистики в конфигурационном файле СУБД «postgresql.conf» Сохранить конфигурационный файл «postgresql.conf» и перезагрузить СУБД.
>
> Расширение «pg_stat_statements» устанавливается при помощи SQL-команды:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image104.png" style="width:7.12312in;height:1.91667in" />

> CREATE EXTENSION pg_stat_statements;
>
> Рисунок 3.6 – Создание расширения

# УСТАНОВКА ЭКСПОРТЕРА «JATOBA\*\_NODE_EXPORTER»

> Экспортер «jatoba\*\_node_exporter» должен быть установлен на всех целевых СУБД.
>
> Экспортер позволяет снимать различные метрики с Linux-подобных операционных систем. Это агент, который передает серверу «Prometheus» аппаратные и программные показатели работы GNU/Linux.
>
> Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image105.png" style="width:6.68009in;height:1.17812in" />

> \# apt-get install jatoba\<ver\>-node-exporter
>
> Рисунок 4.1 – Установка пакета «jatoba\*\_node_exporter»
>
> В результате установки пакета будет создан пользователь ОС «node_exporter_usr», от которого будет производиться запуск утилиты.

<img src="../docs/assets/images/com18.3.1/monitoring/media/image106.png" style="width:6.74906in;height:1.36083in" />

> Рисунок 4.2 -пользователя «node_exporter_usr» У данного пользователя нет интерактивной оболочки для входа.
>
> Автоматически будет создан файл конфигурации сервиса по адресу:
>
> /usr/lib/systemd/system/jatoba\<ver\>\_node_exporter.service
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image107.png" style="width:6.69541in;height:2.27792in" />
>
> Рисунок 4.3 – Содержание конфигурационного файла
>
> Далее требуется запустить службу экспортера, включить ее в автозапуск и проверить статус работы:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image108.png" style="width:6.6856in;height:1.305in" />

> \# systemctl enable jatoba\<ver\>\_node_exporter \# systemctl start jatoba\<ver\>\_node_exporter \# systemctl status jatoba\<ver\>\_node_exporter
>
> Рисунок 4.4 - Проверка сервиса «jatoba\*\_node_exporter»
>
> Чтобы проверить статус работы экспортера нужно в браузере открыть веб-интерфейс экспортера:
>
> \# localhost:9100
>
> \# [http://0.0.0.0:9100](http://0.0.0.0:9100/)
>
> Рисунок 4.5 – Веб-интерфейс утилиты «node_exporter» В рассматриваемом примере на целевой СУБД:

- u602doc-pgp01 IP - 10.116.102.45 веб-интерфейс утилиты «node_exporter» проверяется по URL:

> \# [http://10.116.102.45:9100](http://10.116.102.45:9100/)
>
> Рисунок 4.6 – Веб-интерфейс утилиты «node_exporter» на целевой СУБД u602doc-pgp01 IP
>
> \- 10.116.102.45

- u602doc-ldap01 IP-10.116.102.47 веб-интерфейс утилиты «node_exporter» проверяется по URL:

> \# [http://10.116.102.47:9100](http://10.116.102.47:9100/)
>
> Рисунок 4.7 – Веб-интерфейс утилиты «node_exporter» на целевой СУБД u602doc-ldap01 IP-10.116.102.47
>
> По умолчанию экспортер использует все доступные коллекторы метрик. Состав снимаемых метрик отображается на странице:
>
> localhost:9100/metrics
>
> При необходимости может быть изменен состав используемых коллекторов с помощью опций командной строки:
>
> ./jatoba\<ver\>\_node_exporter --\[no-\]collector.netdev --\[no-
>
> \]collector.netstat
>
> Если необходимо изменить значения адреса веб-интерфейса (:9100), node_exporter запускается с опцией --web.listen-address:
>
> ./jatoba\<ver\>\_node_exporter --web.listen-address=:9101
>
> Изменение состава метрик либо адреса веб-интерфейса целесообразнее сохранить в файле сервиса «node_exporter.service». Иначе при перезагрузке ОС настройки компонента вернутся к изначальным, хранящимся в файле сервиса
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image1.png" style="width:0.25in;height:0.25in" />Ручной запуск утилиты производится командой:
>
> ./jatoba\<ver\>\_node_exporter
>
> Никакой конфигурации экспортера не требуется.

# УСТАНОВКА ЭКСПОРТЕРА «JATOBA\*\_POSTGRES_EXPORTER»

> Экспортер «jatoba\*postgres_exporter» должен быть установлен на всех целевых СУБД, и в той же БД, в которой установлено расширение «pg_stat_statements».
>
> С помощью данного экспортера снимаются метрики с сервера PostgreSQL (Jatoba). Это агент, написанный на языке Golang, подключающийся к заданному источнику данных (БД) и по запросу сервера «Prometheus» возвращающий ему значения метрик. Состав метрик заранее предопределен и их значения вычисляются с помощью фиксированных SQL-запросов.

## Установка утилиты и службы «jatoba\*\_postgres_exporter»

> Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image112.png" style="width:6.62066in;height:1.43333in" />

> \# apt-get install jatoba\<ver\>-postgres-exporter
>
> Рисунок 5.1 – Установка пакета jatoba\*-postgres-exporter В результате установки пакета будет создан:

- файл запуска по адресу:

> /usr/jatoba-\<ver\>/bin/postgres_exporter
>
> – конфигурационный файл по адресу:
>
> /usr/jatoba-\<ver\>/monitoring/default/postgres_exporter
>
> – пользователь ОС «postgres_exporter_usr», от которого будет производиться запуск сервиса.
>
> У данного пользователя нет интерактивной оболочки для входа.

## Создание пользователя СУБД «postgres_exporter»

> Для соединения утилиты с СУБД создать пользователя СУБД «postgres_exporter» SQL-командой:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image113.png" style="width:6.99223in;height:2.0475in" />

> CREATE ROLE postgres_exporter SUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'Password';
>
> Рисунок 5.2 – Создание роли «postgres_exporter»
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image2.png" style="width:0.25139in;height:0.25139in" />В рассматриваемом примере пользователь СУБД «postgres_exporter» является привилегированным пользователем

## Настройка переменных окружения

> Дальнейшая настройка утилиты требует внесения параметров подключения в файле переменных окружения «postgres_exporter», командой:
>
> \# gedit /usr/jatoba-\<ver\>/monitoring/default/postgres_exporter
>
> Необходимо настроить имя пользователя, пароль и параметры SSL-подключения в файле переменных окружения «postgres_exporter».
>
> Строка подключения выполнена в формате схемы URL. Основная форма URI подключения имеет синтаксис:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3"><blockquote>
<p>postgresql://[пользователь@][сервер][/база_данных][?указание_па раметра]</p>
<p>где пользователь: имя_пользователя[:пароль] и сервер: [узел][:порт][,...]</p>
<p>и указание_параметра:</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>№ изменения:</p>
</blockquote></td>
<td><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></td>
<td><blockquote>
<p>Дата внесения изм:</p>
</blockquote></td>
</tr>
</tbody>
</table>

> имя=значение\[&...\]
>
> В качестве обозначения схемы URI может использоваться postgresql:// или postgres://. Остальные части URI являются необязательными. В следующих примерах показан допустимый синтаксис URI:
>
> postgresql:// postgresql://localhost postgresql://localhost:5433 postgresql://localhost/mydb postgresql://user@localhost postgresql://user:secret@localhost
>
> postgresql://other@localhost/otherdb?connect_timeout=10&applica tion_name=myapp postgresql://host1:123,host2:456/somedb?target_session_attrs=an y&application_name=myapp
>
> В рассматриваемом примере на целевой СУБД:

- <img src="../docs/assets/images/com18.3.1/monitoring/media/image1.png" style="width:0.25in;height:0.25in" />u602doc-pgp01 IP - 10.116.102.45 строка подключения утилиты к СУБД имеет следующий вид:

> DATA_SOURCE_NAME="postgresql://postgres_exporter:<Password@10.11> 6.102.45:5432/postgres?sslmode=disable"
>
> Обратите внимание, что необходимо прописывать общий, а не локальный адрес сетевого интерфейса
>
> Рисунок 5.3 – Содержание файла «postgres_exporter.default» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- u602doc-ldap01 IP-10.116.102.47 строка подключения утилиты к СУБД имеет следующий вид:

> DATA_SOURCE_NAME="postgresql://postgres_exporter:<Password@10.11> 6.102.47:5432/postgres?sslmode=disable"
>
> Рисунок 5.4– Содержание файла «postgres_exporter.default» на целевой СУБД u602doc-ldap01 IP-10.116.102.47

## Запуск утилиты «postgres_exporter»

> Обновить конфигурацию system командой:
>
> \# systemctl daemon-reload
>
> Запустить службу экспортера, включить ее автозапуск и проверить статус работы:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image116.png" style="width:7.13013in;height:2.2425in" />

> \# systemctl start jatoba\<ver\>\_postgres_exporter \# systemctl enable jatoba\<ver\>\_postgres_exporter \# systemctl status jatoba\<ver\>\_postgres_exporter
>
> Рисунок 5.5 – Запуск и вывод статуса службы «postgres_exporter»
>
> Чтобы проверить статус работы экспортера нужно в браузере открыть веб-интерфейс экспортера:
>
> localhost:9187 [http://0.0.0.0:9187](http://0.0.0.0:9187/)
>
> Рисунок 5.6 – Веб-интерфейс «postgres_exporter» В рассматриваемом примере на целевой СУБД:

- u602doc-pgp01 IP - 10.116.102.45 веб-интерфейс утилиты «node_exporter» проверяется по URL:

> [http://10.116.102.45:9187](http://10.116.102.45:9187/)
>
> Рисунок 5.7 – Веб-интерфейс «postgres_exporter» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- u602doc-ldap01 IP-10.116.102.47 веб-интерфейс утилиты «node_exporter» проверяется по URL:

> [http://10.116.102.47:9187](http://10.116.102.47:9187/)
>
> Рисунок 5.8 – Веб-интерфейс «postgres_exporter» на целевой СУБД u602doc-ldap01 IP-10.116.102.47
>
> При успешном подключении к БД на странице localhost:9187/metrics будет показан список значений метрик с префиксом «pg\_» в имени.
>
> Если необходимо изменить значение адреса веб-интерфейса (по умолчанию
>
> :9187), postgres_exporter запускается с опцией --web.listen-address, например:
>
> export DATA_SOURCE_NAME=postgresql://postgres:<secret@127.0.0.1>
>
> ./jatoba\*\_postgres_exporter --web.listen-address=:9188
>
> Изменение адреса веб-интерфейса целесообразнее сохранить в файле сервиса
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image1.png" style="width:0.25in;height:0.25in" />«postgres_exporter». Иначе при перезагрузке ОС настройки компонента вернуться к изначальным, хранящимся в файле сервиса.
>
> Полный список опций командной строки postgres_exporter можно вывести, если запустить его с опцией --help.

# УСТАНОВКА ЭКСПОРТЕРА «JATOBA\*\_SQL_EXPORTER»

> Экспортер «jatoba\*\_SQL_exporter» должен быть установлен на всех целевых СУБД и в той же БД, в которой установлено расширение «pg_stat_statements».
>
> Данный экспортер можно использовать для расширения состава метрик, снимаемых с сервера PostgreSQL стандартным экспортером «jatoba\*\_postgres_exporter» (см. п. [5](#установка-экспортера-jatoba_postgres_exporter)), а также для метрик компонента «SQL_Firewall».
>
> Это агент, также написанный на языке Golang, который подключается к заданному источнику данных (БД) и забирает с него метрики по pull-запросу сервера «Prometheus».
>
> Состав собираемых метрик и SQL-запросов, которые их возвращают, полностью конфигурируемы пользователем. Используемые SQL-запросы группируются в так называемые коллекторы, состав которых легко может быть расширен. Также в коллекторе для каждого возвращаемого запросом поля задается указатель на соответствующую метрику.

## Установка утилиты и службы «sql_exporter»

> Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image120.png" style="width:6.65585in;height:1.47917in" />

> \# apt-get install jatoba\<ver\>-sql-exporter
>
> Рисунок 6.1 – Установка пакета «jatoba\*-sql-exporter» В результате установки пакета будет создан:

- файл запуска по адресу:

> /usr/jatoba-\<ver\>/bin/sql_exporter

- конфигурационный файл по адресу:

> /usr/jatoba-\<ver\>/monitoring/default/sql_exporter.yml

- конфигурационный файл переменных окружения по адресу

> /usr/jatoba-\<ver\>/monitoring/default/sql_exporter

- конфигурационный файл для сбора данных узлов кластера Citus по адресу:

> /usr/jatoba-\<ver\>/monitoring/default/citus.collector.yml

- конфигурационный файл для сбора данных компонента SQL_Firewall по адресу:

> /usr/jatoba-\<ver\>/monitoring/default/sqlfw.collector.yml

- пользователь ОС «sql_exporter_usr», от которого будет производиться запуск сервиса.

> У данного пользователя нет интерактивной оболочки для входа.

## Настройка переменных окружения

> Проверить параметры экспортера в файле переменных окружения «sql_exporter», выполнив команду редактирования:
>
> \# gedit /usr/jatoba-\<ver\>/monitoring/default/sql_exporter
>
> Основным из параметров является путь к конфигурационному файлу
>
> «sql_exporter.yml» в строке параметра CONF_FILE.
>
> CONF_FILE=/etc/sql_exporter/sql_exporter.yml
>
> Настройка и расположение файла «sql_exporter.yml» приведены в п. [6.4](#настройка-параметров-экспортера-и-подключения-к-бд-в-файле) настоящего документа.
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image121.png" style="width:6.74409in;height:1.75281in" />
>
> Рисунок 6.2 – Содержание файла переменных окружения «sql_exporter»

## Создание пользователя СУБД «sql_exporter»

> Для соединения утилиты с СУБД необходимо создать пользователя СУБД
>
> «sql_exporter» SQL-командой:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image122.png" style="width:7.13897in;height:2.16031in" />

> CREATE ROLE sql_exporter SUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'Password';
>
> Рисунок 6.3 – Создание роли «sql_exporter»
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image2.png" style="width:0.25138in;height:0.25116in" />В рассматриваемом примере пользователь СУБД «sql_exporter» является привилегированным пользователем

## Настройка параметров экспортера и подключения к БД в файле

> **«sql_exporter.yml»**
>
> Основным параметром для настройки параметров экспортера и подключения к БД в файле «sql_exporter.yml» является параметр «data_source_name».
>
> Требуется открыть файл для редактирования командами:
>
> \# gedit /usr/jatoba-\<ver\>/monitoring/default/sql_exporter.yml
>
> Строка подключения выполнена в формате схемы URL. Синтаксис строки описан в п.
>
> [5.3](#настройка-переменных-окружения) настоящего документа.
>
> В рассматриваемом примере на целевой СУБД:

- <img src="../docs/assets/images/com18.3.1/monitoring/media/image1.png" style="width:0.25in;height:0.25in" />u602doc-pgp01 IP - 10.116.102.45 строка подключения утилиты к СУБД имеет следующий вид:

> data_source_name:
>
> 'postgresql://sql_exporter:Password@10.116.102.45:5432/postgres
>
> ?sslmode=disable'
>
> Обратите внимание, что необходимо прописывать общий, а не локальный адрес сетевого интерфейса.
>
> Рисунок 6.4 – Содержание файла «sql_exporter.yml», строка «data_source_name» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- u602doc-ldap01 IP-10.116.102.47 строка подключения утилиты к СУБД имеет следующий вид:

> data_source_name: 'postgresql://sql_exporter:Password@10.116.102.47:5432/postgres
>
> ?sslmode=disable'
>
> Рисунок 6.5 – Содержание файла «sql_exporter.yml», строка «data_source_name» на целевой СУБД u602doc-ldap01 IP-10.116.102.47
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image1.png" style="width:0.25in;height:0.25in" />В случае необходимости мониторинга компонента SQL Firewall в конфигурационном файле sql_exporter.yml в поле «collectors» через запятую необходимо добавить значение sql_firewall (см. рисунок [6.6](#_bookmark21)).

<img src="../docs/assets/images/com18.3.1/monitoring/media/image125.jpeg" style="width:6.11664in;height:4.00833in" />

> <span id="_bookmark21" class="anchor"></span>Рисунок 6.6 – Добавление мониторинга компонента SQL Firewall в конфигурационном файле sql_exporter.yml
>
> Сохранить внесенные изменения.
>
> В дистрибутиве содержится файл с подготовленными метриками для мониторинга СУБД «Jatoba» «postgres.collector.yml», который по умолчанию использует
>
> «jatoba\*\_SQL_exporter».

## Запуск утилиты «jatoba\*\_sql_exporter»

> Обновить конфигурацию systemd:
>
> \# systemctl daemon-reload
>
> Запустить службу экспортера, включить ее в автозапуск и проверить статус работы:
>
> \# systemctl start jatoba\<ver\>\_sql_exporter \# systemctl enable jatoba\<ver\>\_sql_exporter \# systemctl status jatoba\<ver\>\_sql_exporter
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image126.png" style="width:6.70007in;height:1.97562in" />
>
> Рисунок 6.7 – Установка и запуск службы «sql_exporter»
>
> Чтобы проверить статус работы экспортера, нужно в браузере открыть веб-интерфейс экспортера:
>
> localhost:9399 [http://0.0.0.0:9399](http://0.0.0.0:9399/)
>
> Рисунок 6.8 – Веб-интерфейс «sql_exporter» В рассматриваемом примере на целевой СУБД:

- u602doc-pgp01 IP - 10.116.102.45 веб-интерфейс утилиты «sql_exporter» проверяется по URL:

> [http://10.116.102.45:9399](http://10.116.102.45:9399/)
>
> Рисунок 6.9 – Веб-интерфейс «sql_exporter» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- u602doc-ldap01 IP-10.116.102.47 веб-интерфейс утилиты «node_exporter» проверяется по URL:

> [http://10.116.102.47:9399](http://10.116.102.47:9399/)
>
> Рисунок 6.10 – Веб-интерфейс «sql_exporter» на целевой СУБД u602doc-ldap01 IP-10.116.102.47
>
> При успешном подключении к БД и отсутствии ошибок в конфигурации на странице localhost:9399/metrics будет показан список значений снятых метрик.
>
> Если необходимо изменить значения адреса веб-интерфейса (:9399), jatoba\*\_sql_exporter запускается с опцией -web.listen-address, например:
>
> ./jatoba\<ver\>\_sql_exporter -web.listen-address :9398
>
> Изменение адреса веб-интерфейса целесообразнее сохранить в файле сервиса
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image1.png" style="width:0.25in;height:0.25in" />«sql_exporter». Иначе при перезагрузке ОС настройки компонента вернуться к изначальным, хранящимся в файле сервиса.
>
> Полный список опций командной строки sql_exporter можно вывести, если запустить его с опцией -help.

# СИСТЕМА «PROMETHEUS»

> «Prometheus» – система мониторинга различных программных систем и сервисов.
>
> «Prometheus» собирает и сохраняет метрики в виде временных рядов данных. Информация о каждой метрике хранится вместе с отметкой времени, когда она была записана, и опционным набором меток (labels), представляющих пары «ключ: значение». Сами метрики являются числовыми измерениями, которые по типу могут быть монотонно возрастающими значениями счетчиков (counter) или произвольно изменяющимися значениями датчиков (gauge).
>
> Основными компонентами системы «Prometheus» являются:

- Сервер «Prometheus», который собирает и сохраняет метрики в своей встроенной базе данных TSDB;

- Экспортеры данных, которые по запросу сервера снимают метрики с заданных сервисов (targets) и возвращают их серверу;

- Web UI, с помощью которого можно исследовать собранные метрики с помощью языка запросов promQL.

> Документация по использованию системы находится на официальном сайте разработчика по адресу: [<u>https://prometheus.io</u>.](https://prometheus.io/)

## Установка системы «Prometheus»

> Документация по использованию системы находится на официальном сайте разработчика по адресу: [<u>https://prometheus.io</u>.](https://prometheus.io/)
>
> Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image130.png" style="width:6.65096in;height:1.11083in" />

> \# apt-get install jatoba\<ver\>-prometheus
>
> Рисунок 7.1 – Установка пакета «jatoba\<ver\>-prometheus» В результате установки пакета будет создан:
>
> – файл переменных окружения сервиса по адресу:
>
> usr/jatoba-\<ver\>/monitoring/default/prometheus
>
> – файл сервиса по адресу
>
> usr/lib/system/system/jatoba\<ver\>\_prometheus.service
>
> – файл конфигурации, адаптированный под использование с СУБД «Jatoba» по адресу:
>
> usr/jatoba-\<ver\>/monitoring/default/prometheus.yml
>
> – база данных по адресу:
>
> /opt/prometheus
>
> – служебные директории веб-консоли по адресу:
>
> usr/jatoba-\<ver\>/monitoring/prometheus
>
> – пользователь ОС «prometheus», от которого будет производиться запуск сервиса.
>
> У данного пользователя нет интерактивной оболочки для входа и нет домашней директории.

## Конфигурация системы «Prometheus»

> Необходимо задать конфигурацию сервера в формате YAML выполнив команду редактирования:
>
> \# gedit /usr/jatoba-\<ver\>/monitoring/default/prometheus.yml
>
> В конфигурации важными параметрами являются:

- частота опроса метрик (scrape_interval);

- время ожидания ответа (scrape_timeout);

- HTTP, IP адреса (targets).

> Для параметра «targets» возможно указать одну или несколько целей, для получения метрик с экспортера, при этом параметр будет иметь синтаксис, с одной целью:
>
> \- targets: \['X.X.X.X:port'\]
>
> и с несколькими целями
>
> \- targets: \['X.X.X.X:port', 'X.X.X.X:port'\]
>
> В рассматриваемом примере, в конфигурационном файле prometheus.yml устанавливаются IP-адреса серверов, находящихся под наблюдением.
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image1.png" style="width:0.25in;height:0.25in" />Обратите внимание, что необходимо прописывать общий, а не локальный адрес сетевого интерфейса
>
> Ниже приведены примеры таких «job-name».

## Примеры блока «postgres-exporter»

> Пример стандартного «postgres-exporter» экспортера с двумя целями:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image131.png" style="width:6.91959in;height:1.8in" />

> \# стандартный экспортер данных для PostgreSQL
>
> \- job_name: "postgres-exporter" metrics_path: '/metrics' static_configs:
>
> \- targets: \['10.116.102.45:9187','10.116.102.47:9187'\]
>
> labels:
>
> alias: postgres
>
> Рисунок 7.2 - Стандартный экспортер данных для PostgreSQL
>
> Пример стандартного «postgres-exporter» экспортера для двух «job-name» с одной и двумя целями:
>
> \# Экспортер данных для PostgreSQL сервера srv1
>
> \- job_name: "srv1-postgres-exporter" metrics_path: '/metrics' static_configs:
>
> \- targets: \['10.116.103.45:9187'\]
>
> labels: alias: postgres
>
> \# Экспортер данных для PostgreSQL сервера srv2 и srv3
>
> \- job_name: "srv2-srv3-postgres-exporter" metrics_path: '/metrics' static_configs:
>
> \- targets: \['10.116.103.46:9187', '10.116.103.47:9187'\]
>
> labels:
>
> alias: postgres
>
> Рисунок 7.3 - «postgres-exporter» экспортера для двух «job-name» с одной и двумя целями

## Примеры блока «sql-exporter»

> Пример экспортера данных для SQL с двумя целями:
>
> \# экспортер данных для SQL
>
> \- job_name: "sql-exporter" metrics_path: '/metrics' static_configs:
>
> \- targets: \['10.116.102.45:9399','10.116.102.47:9399'\]
>
> labels:
>
> alias: postgres
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image133.png" style="width:6.91347in;height:1.7925in" />
>
> Рисунок 7.4 - «sql-exporter» с двумя целями

Пример экспортера SQL для двух «job-name» с одной и двумя целями:

> \# Экспортер данных для SQL сервера srv1

- job_name: "srv1-sql-exporter" metrics_path: '/metrics' static_configs:

> \- targets: \['10.116.103.45:9399'\]
>
> labels:
>
> alias: postgres
>
> \# Экспортер данных для SQL сервера srv2 и srv3

- job_name: "srv2-srv3-sql-exporter" metrics_path: '/metrics' static_configs:

> \- targets: \['10.116.103.46:9399','10.116.103.47:9399'\]
>
> labels:
>
> alias: postgres
>
> Рисунок 7.5 – «sql-exporter» для двух «job-name» с одной и двумя целями
>
> При использовании виджета «jaDog» необходимо добавить параметр labels:cluster_jadog и указать в нем название кластера, которое соответствует названию в цели кластера (см. п. [11.2](#конфигурирование-системы-prometheus-для-компонента-jadog) данного руководства), например:
>
> \# экспортер данных для SQL
>
> \- job_name: "node_sql" metrics_path: '/metrics' static_configs:
>
> \- targets: \['10.116.102.45:9399','10.116.102.47:9399'\]
>
> labels:
>
> alias: postgres
>
> **cluster_jadog: 'jadog'**

## Примеры блока «node-exporter»

> Пример экспортера данных «node-exporter» для GNU/ Linux с двумя целями:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image135.png" style="width:7.1289in;height:2.07in" />

> \# экспортер данных для Linux
>
> \- job_name: "node-exporter" metrics_path: '/metrics' static_configs:
>
> \- targets: \['10.116.102.45:9100','10.116.102.47:9100'\]
>
> labels: alias: os
>
> Рисунок 7.6 – «node-exporter» для GNU/ Linux с двумя целями
>
> Пример экспортера данных «node-exporter» для GNU/Linux для двух «job-name» с одной и двумя целями:
>
> \# Экспортер данных для Linux сервера srv1

- job_name: "srv1-node-exporter" metrics_path: '/metrics' static_configs:

> \- targets: \['10.116.103.46:9100'\]
>
> labels:
>
> alias: os
>
> \# Экспортер данных для Linux сервера srv2 и srv3

- job_name: "srv2-srv3-node-exporter"

> metrics_path: '/metrics' static_configs:
>
> \- targets: \['10.116.103.46:9100','10.116.103.47:9100'\]
>
> labels: alias: os
>
> Рисунок 7.7 – «node-exporter» для GNU/Linux для двух «job-name» с одной и двумя
>
> целями
>
> В конфигурационном файле prometheus.yml, в строке «targets», допустимо указывать любое количество адресов экспортеров, относящихся к одной или разным СУБД.
>
> Обработка критических событий и вычисление rules не заданы, хотя соответствующие блоки присутствуют в конфигурации.
>
> Полное описание параметров конфигурации сервера приведено в документации [<u>https://prometheus.io/docs/prometheus/latest/configuration/configuration/</u>](https://prometheus.io/docs/prometheus/latest/configuration/configuration/)

## Запуск системы «Prometheus»

> Перед запуском сервиса требуется удостоверится в корректности содержания файла сервиса.
>
> Просмотр файла осуществляется командой в терминале ОС:
>
> \# gedit usr/lib/systemd/system/jatoba\<ver\>\_prometheus.service \# gedit usr/lib/systemd/system/jatoba\<ver\>\_prometheus.service
>
> Рисунок 7.8 – Содержание файла сервиса «jatoba-5_prometheus.service»

<img src="../docs/assets/images/com18.3.1/monitoring/media/image138.png" style="width:7.04155in;height:3.29854in" />

> Рисунок 7.9 – Содержание файла сервиса «jatoba18_prometheus.service» Обновить конфигурацию systemd:
>
> \# systemctl daemon-reload
>
> Запустить службу система, включить ее в автозапуск и проверить статус работы:
>
> \# systemctl start jatoba\<ver\>\_prometheus \# systemctl enable jatoba\<ver\>\_prometheus \# systemctl status jatoba\<ver\>\_prometheus
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image139.png" style="width:6.70597in;height:2.11156in" />
>
> Рисунок 7.10 Установка и запуск службы системы «Prometheus»
>
> Статус запущенного сервера «Prometheus» можно проверить с помощью web UI, открыв в браузере страницу с адресом [http://localhost:9090.](http://localhost:9090/)
>
> Рисунок 7.11 – Веб интерфейс системы «Prometheus»
>
> На вкладке «Status» можно посмотреть текущую конфигурацию и опции запуска сервера, статус встроенной базы данных tsdb и заданные цели (targets).
>
> В окне «Expression» можно ввести название метрики или выражение на языке promQL и, нажатием на кнопку «Execute», отобразить результаты в виде таблицы или графика.
>
> Руководство по языку запросов promQL располагается по адресу: <https://prometheus.io/docs/prometheus/latest/querying/basics/>
>
> Полный список собираемых метрик можно открыть при нажатии на кнопку «Open Metrics Explorer» слева от кнопки «Execute» или отобразить в окне «Expressions» при вводе первых символов наименования метрики, если включена опция автодополнения.
>
> Список значений собираемых метрик для каждой цели можно отобразить на странице веб-интерфейса соответствующего экспортера данных, например, localhost:9090/metrics.
>
> адрес:
>
> Рисунок 7.12 – Список значений собираемых метрик

В рассматриваемом примере подключение к системе «Prometheus» используется

> <http://10.116.102.41:9090/>
>
> Перейдя в меню «Target» отразятся статистические данные наблюдаемых СУБД.
>
> Рисунок 7.13 – Страница целей системы «Prometheus»

# УТИЛИТА «ALERTMANAGER»

> Alertmanager — это инструмент для управления и обработки оповещений в системе мониторинга Prometheus. Он выполняет следующие функции:

- группировка оповещений: группирует похожие оповещения для снижения шума и предотвращения дублирования.

- удаление дубликатов: гарантирует отправку уникальных оповещений без повторений.

- маршрутизация и приглушение оповещений: позволяет определять правила и конфигурации для маршрутизации оповещений нужным получателям на основе их важности или других критериев. Также можно временно приглушить оповещения во время обслуживания или определённых периодов.

- уведомление о тревоге: интегрируется с различными каналами связи, такими как электронная почта, Slack, PagerDuty и другие, позволяя отправлять уведомления о тревогах нужным людям или командам.

## Установка утилиты и службы «alertmanager»

> Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image143.png" style="width:6.66185in;height:1.24in" />

> \# apt-get install jatoba\<ver\>-alertmanager
>
> Рисунок 8.1 – Установка пакета «jatoba\*-alertmanager» В результате установки пакета будет создан:
>
> – файл запуска по адресу:
>
> /usr/jatoba-\<ver\>/bin/alertmanager
>
> – конфигурационный файл по адресу:
>
> /usr/jatoba-\<ver\>/monitoring/default/alertmanager.yml
>
> – служба по адресу:
>
> /usr/lib/systemd/jatoba\<ver\>\_alertmanager.service
>
> – пользователь ОС «alertmanager», от которого будет производиться запуск сервиса.
>
> У данного пользователя нет интерактивной оболочки для входа и нет домашней директории.

## Настройка параметров утилиты

> Утилита «AlertManager» отправляет уведомления через каналы:

- SMTP;

- Telegram;

- Zulip.

> Настройка каждого из каналов выполняется файле в конфигурационном файле
>
> «alertmanager.yml». После установки пакета в конфигурационном файле будет установлены параметры по умолчанию.

<img src="../docs/assets/images/com18.3.1/monitoring/media/image144.png" style="width:7.03683in;height:3.40948in" />

> Рисунок 8.2 – Параметры по умолчанию

## SMTP

> В узле «global» необходимо указать данные для подключения к почтовому серверу. Целесообразно использовать специальную, неперсонифицированную, техническую учетную запись почты, от имени которой будет рассылаться предупреждения.
>
> Редактирование конфигурационного файла выполняется командой:
>
> \# gedit /usr/jatoba-\<ver\>/monitoring/default/alertmanager.yml

В узле «route» указываются настройки агрегирования предупреждений.

> В узле «receivers» в узле «email_general» указываются настройки получателя. Используется общий узел для всех получателей, email получателя подставляется из метки
>
> «emailto» с помощью шаблона.
>
> global:
>
> smtp_smarthost: mail.domain.ru:587 smtp_from: <domain_name@domain.ru> smtp_auth_user_name: <user_name@domain.ru> smtp_auth_password: password smtp_require_tls: true
>
> route:
>
> receiver: email_general group_by: \[emailto\] group_wait: 30s group_interval: 5m repeat_interval: 3h
>
> receivers:
>
> \- name: email_general email_configs:
>
> \- send_resolved: true
>
> to: '{{ .CommonLabels.emailto }}'
>
> Рисунок 8.3 - Конфигурационный файл «alertmanager.yml»

## Telegram

> Настройка получения уведомлений (предупреждений) от утилиты «AlertManager» в Telegram состоит из нескольких этапов:

- Создать в Telegram бота;

- Создание канала в Telegram;

- открытие канала передачи предупреждений в утилите «AlertManager».

## Создание в Telegram бота

> Бот должен создаваться через @BotFather официальный сервис Telegram для создания, настройки и управления чат-ботами.
>
> Сервис находится через оно поиска в Telegram.
>
> Рисунок 8.4 – Поиск сервиса @BotFather Нажать кнопку «Старт».
>
> Рисунок 8.5 – Создание бота
>
> Выполните команду создания бота и следуем инструкциям, задаем имя JDS alerts, а username – jds_alertmanager_bot.
>
> Выполнить команду создания бота:
>
> /newbot - create a new bot
>
> Задайте уникальное имя бота:
>
> jds_alertmanager_bot
>
> my_jds_alertmanager_bot
>
> При создании бота выдается его токен. Далее он потребуется в настройках.
>
> Рисунок 8.6 – Вывод информации о боте
>
> Далее необходимо выяснить идентификатор чата (канала), в который будут отправляться предупреждения. Это можно сделать, например, с помощью веб-запроса.
>
> Пишем в чат произвольное сообщение, тэгируя бота:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image149.jpeg" style="width:4.31869in;height:1.47812in" />

> Рисунок 8.7 – Сообщение с тэгированием бота
>
> Добавьте новый маршрут, нового получателя и указываем местонахождение шаблонов уведомлений в конфигурационный файл alertmanager.yml.
>
> По указанному пути к файлам шаблонов создайте преднастроенный шаблон - файл telegram.jds.tmpl следующего содержания:
>
> {{ define "telegram.jds" }}
>
> {{ range .Alerts }}
>
> {{ if eq .Status "firing"}}\<b\>{{ .Status \| toUpper }}\</b\>&#x1F525{{ else }}\<b\>{{ .Status \| toUpper }}\</b\>&#x2705{{ end }}
>
> {{- if .Annotations.summary }}
>
> {{ .Annotations.summary }}
>
> {{- end }}
>
> {{- if .Labels.dbms }}
>
> \<b\>Database:\</b\> {{ .Labels.dbms }}
>
> {{- end }}
>
> {{- if .Annotations.object }}
>
> \<b\>Object:\</b\> {{ .Annotations.object }}
>
> {{- end }}
>
> {{- if .Labels.emailto }}
>
> \<b\>EmailTo:\</b\> {{ .Labels.emailto }}
>
> {{- end }}
>
> {{- if .Labels.alertid }}
>
> alert_id: \<code\>{{ .Labels.alertid }}\</code\>
>
> {{- end }}
>
> {{ end }}
>
> {{ end }}
>
> Перезапустите «Alertmanager» командой:
>
> \# systemctl restart alertmanager

## Zulip

> Конфигурирование утилиты «AlertManager» и приложения «Zulip» состоит из нескольких этапов. Создание канала и бота в приложении «Zulip» и открытие канала передачи предупреждений в утилите «AlertManager».
>
> Создание канал и бота в приложении «Zulip» требует следующих действий:

- Открыть приложение Zulip и перейти в меню «Каналы»;

> Рисунок 8.8 – Создание канала

- Создать канал;

- Установить настройки нового канала;

- Задать название канала и описание;

> Рисунок 8.9 – Настройки канала

- Нажать кнопку «Добавить еще подписчиков»

> В качестве первого подписчика автоматически будет выбран создатель канала.

- Нажать кнопку «Создать»;

- Создать бота;

> Через пиктограмму личного профиля, расположенную в правом верхнем углу приложения Zulip перейти в «Настройки». Выбрать меню «Боты» и нажать кнопку
>
> «Добавить нового бота».
>
> В открывшимся окне «Добавить нового бота»:

- Выбрать тип бота – Входящий вебхук;

- Имя (бота) – уникальное имя (в рассматриваемом примере используется имя

> «alert»);

- Адрес электронной почты бота – допустимо использовать имя бота. Домен почты подключится автоматически;

- Аватар – не обязательно.

> <img src="../docs/assets/images/com18.3.1/monitoring/media/image152.jpeg" style="width:6.14156in;height:3.5in" />
>
> Рисунок 8.10 – Создание бота в Zilip
>
> После установки параметров нажать кнопку «Добавить». Созданный бот отразится в списке «Активные боты».

- Создать «URL для интеграции»

> Для интеграции утилиты «AlertManager» и приложения «Zulip» требуется «URL интеграции».
>
> URL создается через пиктограмму в виде цепи, расположенную в блоке бота.
>
> Рисунок 8.11 – Пиктограмма «Создать URL для интеграции»
>
> Нажатие на пиктограмму вызовет окне «Создать URL для интеграции», в котором устанавливаются параметры:

- Интеграция – Prometheus Alertmanager;

- Куда отправлять оповещения – выбрать созданный канал (alert).

<img src="../docs/assets/images/com18.3.1/monitoring/media/image154.jpeg" style="width:6.11139in;height:3.44792in" />

> Рисунок 8.12 - Копирование URL для интеграции
>
> Нажатие кнопки «Копировать URL» скопирует созданную ссылку в буфер обмена, после чего далее окно можно закрыть.

- Сконфигурировать «AlertManager»;

> Создав бота в Zulip и сгенерировав «URL интеграции» сконфигурируйте
>
> «AlertManager» через конфигурационный файл «alertmanager.yml».
>
> Редактирование конфигурационного файла выполняется командой:
>
> \# gedit /usr/jatoba-\<ver\>/monitoring/default/alertmanager.yml
>
> Раскомментируйте строки:

- receiver: zulip_chat;

- continue: true.

> Тем самым создаётся «маршрут» для отправки сообщений по каналу Zulip.
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image155.png" style="width:6.84165in;height:3.32812in" />
>
> Рисунок 8.13 – Параметры «маршрута» для отправки предупреждений по каналу Zulip Расскомментируйте строки:

- url;

- send_resolved.

> В строку «URL» вставьте «URL для интеграции» скопированный из созданного бота в Zulip и в конце строки добавить значение:
>
> &desc=summary
>
> Данное значение служит для кастомизации сообщений.

<img src="../docs/assets/images/com18.3.1/monitoring/media/image156.png" style="width:6.82254in;height:2.52937in" />

> Рисунок 8.14 – URL для отправки предупреждений в Zulip
>
> На данном конфигурирование утилиты «AlertManager» для отправки сообщений по каналу Zulip закончено и модно переходить к запуску утилиты описанному в п.п. [8.3](#запуск-утилиты-alertmanager).

## Запуск утилиты «alertmanager»

> Обновить конфигурацию system командой:
>
> \# systemctl daemon-reload
>
> Запустить службу утилиты, включить ее автозапуск и проверить статус работы:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image157.png" style="width:6.69763in;height:1.96656in" />

> \# systemctl start jatoba\<ver\>\_alertmanager \# systemctl enable jatoba\<ver\>\_alertmanager \# systemctl status jatoba\<ver\>\_alertmanager
>
> Рисунок 8.15 - Запуск и вывод статуса службы «jatoba\*\_alertmanager»
>
> Чтобы проверить статус работы утилиты, нужно в браузере открыть веб-интерфейс утилиты «Alertmanager»:
>
> localhost:9093 [<u>http://0.0.0.0:9093</u>](http://0.0.0.0:9093/) http://\<ip\>:9093
>
> Рисунок 8.16 – Веб-интерфейс утилиты «alertmanager»
>
> На данном шаге конфигурирование утилиты не закончено. Проверена, только работоспособность. Интеграция с другими компонентами описана в разделе [9](#подключение-к-jds)
>
> «[Подключение к JDS](#подключение-к-jds)».

# ПОДКЛЮЧЕНИЕ К JDS

> Подключение хранилища системы «Prometheus» к компоненту «Jatoba data safe» для отображения в разделе «Мониторинг» описано в документе «Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe», в пункте «Источники данных».
>
> Для настройки «Уведомлений» о контролируемых значениях СУБД требуется сконфигурировать 3 компонента, такие как система «Prometheus», утилита «Alertmanager» и компоненты пользовательского веб-интерфейса для администраторов «Jatoba data safe» (JDS).
>
> Последовательность действий будет следующая.
>
> Настраивается SSH-соединение на хосте и/или с хостом с установленной системой
>
> «Prometheus» (см. п. [9.1](#настройка-ssh-соединения)).
>
> В разделе «Настройки» компонента JDS, во вкладке «Источник данных» созданное подключение к системе «Prometheus» дополняется параметрами «Настройки конфигурации предупреждений» (уведомлений).
>
> В этой настройке указывается, IP адрес системы «Prometheus», порт подключения, пользователь и путь к файлу с правилами уведомлений. В последствии это имя файла будет использовано в конфигурировании системы «Prometheus».
>
> Файл с правилами уведомлений предварительно не создаётся и появляется по вышеуказанному пути. Поэтому для его создания требуется создать уведомление в разделе
>
> «Мониторинг» в любом из дашбордов.
>
> На хосте с системой «Prometheus» в конфигурационном файле
>
> /usr/jatoba-\<ver\>/monitoring/default/prometheus.yml
>
> связать систему «Prometheus» и утилиту «Alertmanager».

## Настройка SSH-соединения

> Настройка SSH-соединения производится в обязательном порядке для любой архитектуры компонентов. В том числе, если утилита «Alertmanager», система «Prometheus» и JDS установлены на одном хосте.
>
> Необходимо настроить SSH-соединение с хоста компонента JDS на сервер с развернутой системой «Prometheus». Соединение будет использоваться компонентом JDS для копирования конфигурационного файла с правилами предупреждений.
>
> В настройках SSH-сервера должны быть разрешены локальные подключения и подключения от имени и с правами пользователя «root».
>
> Следует выполнить следующие действия:
>
> ‒ создать папку пользователя, под которым работает JDS:
>
> sudo -s
>
> \# mkdir /home/jds
>
> \# chown jds /home/jds \# exit
>
> ‒ сгенерировать ключи под пользователем JDS, скопировать на хост с системой
>
> «Prometheus»:
>
> sudo -u jds /usr/bin/bash \# ssh-keygen
>
> (задать пустой пароль) \# ssh-copy-id root@IP (yes)

‒ проверить соединение (должно соединиться без запроса пароля):

> \# ssh root@IP \# exit
>
> exit

## Конфигурирование JDS Вкладка «Источник данных»

> На хосте с установленным компонентом JDS перейти в раздел «Настройки». Созданной подключение к системе «Prometheus» изменить, дополнив параметрами
>
> «Настройки конфигурации предупреждений» (уведомлений).
>
> В этой настройке указывается:
>
> ‒ IP адрес системы «Prometheus»;
>
> ‒ порт подключения – 22, соответствующий SSH-подключению;
>
> ‒ пользователь – root;
>
> ‒ путь к файлу с правилами уведомлений:
>
> /usr/jatoba-\<ver\>/monitoring/default/alertrules.yml
>
> В последствии это имя файла будет использовано в конфигурировании системы
>
> «Prometheus».
>
> Рисунок 9.1 - «Настройки конфигурации предупреждений»

## Раздел «Мониторинг»

> В разделе «Мониторинг» создав уведомление в любом из дашбордов с динамическими данными будет сформирован файл с правилами уведомлений по пути указанному в настройках «Источника данных» в сформированном подключении к системе
>
> «Prometheus»:
>
> /usr/jatoba-\<ver\>/monitoring/default/alertrules.yml
>
> Рисунок 9.2 – Создание уведомления в компоненте JDS

## Настройка связки системы «Prometheus» и утилиты «Alertmanager»

> Имея данные конфигурации и конфигурационный файл уведомлений можно приступить к связке системы «Prometheus» и утилиты «Alertmanager», для чего надо выполнить команду редактирования конфигурационного файла системы «Prometheus»:
>
> \# gedit usr/jatoba-\<ver\>/monitoring/default/prometheus.yml
>
> Соответствующий раздел «Alertmanager configuration» находится в начале файла и параметры надо внести именно в него. Вставка параметров в конец файла может привести к ошибке.
>
> В узле «targets» указывается хост или хосты с установленной утилитой
>
> «Alertmanager»
>
> В узле rule_files необходимо указать имя конфигурационного файла уведомлений
>
> alerting: alertmanagers:
>
> \- static_configs:
>
> \- targets:
>
> \- IP\*\*.\*\*\*.\*\*\*.\*\*:9093 rule_files:
>
> \- "alertrules.yml"
>
> Рисунок 9.3 - Раздел «Alertmanager configuration» Проверить корректность введенных параметров возможно командами:
>
> \# cd /usr/jatoba-\<ver\>/bin#
>
> \# ./promtool check config /usr/jatoba-
>
> \<ver\>/monitoring/default/prometheus.yml
>
> Если параметры верны, перезапустить службу:
>
> \# systemctl restart jatoba\<ver\>\_prometheus
>
> На данном шаге конфигурирование раздела «Мониторинг» компонента JDS закончено.

# НАСТРОЙКА ЭКСПОРТЕРОВ ДЛЯ КОМПОНЕНТА

> **JA_HIPE_CLUSTER**
>
> Настройка системы мониторинга подразумевает конфигурирование целевых СУБД и кластера на основе компонента «ja_Hipe_Cluster» в экосистеме СУБД «Jatoba». Используется выделенный сервер мониторинга «Jatoba Data Safe» собирающий данные для виджетов с сервера «Prometheus». Сервера «Prometheus» аккумулирует данные о СУБД и ОС с кластера и СУБД.

## Параметры стенда

> Параметры стенда, приведенные в таблице [10.1](#_bookmark43). <span id="_bookmark43" class="anchor"></span>Таблица 10.1 – Конфигурация стенда

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 17%" />
<col style="width: 10%" />
<col style="width: 8%" />
<col style="width: 20%" />
<col style="width: 5%" />
<col style="width: 6%" />
<col style="width: 24%" />
<col style="width: 2%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Имя сервера</strong></p>
</blockquote></th>
<th colspan="2"><blockquote>
<p><strong>IP-адрес</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ПО</strong></p>
</blockquote></th>
<th colspan="2"><blockquote>
<p><strong>Port</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Роль</strong></p>
</blockquote></th>
<th rowspan="32"></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>u602doc-jds01</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>10.116.102.41/24</p>
</blockquote></th>
<th><blockquote>
<p>JDS</p>
</blockquote></th>
<th colspan="2"></th>
<th><blockquote>
<p>Сервер мониторинга</p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>u602doc-pgp01</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>10.116.102.45/24</p>
</blockquote></th>
<th></th>
<th colspan="2"></th>
<th rowspan="7"><blockquote>
<p>Сервер Prometheus</p>
</blockquote></th>
</tr>
<tr>
<th colspan="4" rowspan="6"></th>
<th><blockquote>
<p>Prometheus</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9090</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>Alert manager</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9093, 22</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>pg_stat_statements</p>
</blockquote></th>
<th colspan="2"></th>
</tr>
<tr>
<th><blockquote>
<p>node_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9100</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>postgres_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9187</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>sql_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9399</p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p>3</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>u602doc-hipe01</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>10.116.102.61/24</p>
</blockquote></th>
<th></th>
<th colspan="2"></th>
<th rowspan="6"><blockquote>
<p>Coordinator</p>
</blockquote></th>
</tr>
<tr>
<th colspan="4" rowspan="5"></th>
<th><blockquote>
<p>citus</p>
</blockquote></th>
<th colspan="2"></th>
</tr>
<tr>
<th><blockquote>
<p>pg_stat_statements</p>
</blockquote></th>
<th colspan="2"></th>
</tr>
<tr>
<th><blockquote>
<p>node_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9100</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>postgres_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9187</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>sql_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9399</p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p>4</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>u602doc-hipe02</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>10.116.102.62/24</p>
</blockquote></th>
<th></th>
<th colspan="2"></th>
<th rowspan="6"><blockquote>
<p>Worker (Node1)</p>
</blockquote></th>
</tr>
<tr>
<th colspan="4" rowspan="5"></th>
<th><blockquote>
<p>citus</p>
</blockquote></th>
<th colspan="2"></th>
</tr>
<tr>
<th><blockquote>
<p>pg_stat_statements</p>
</blockquote></th>
<th colspan="2"></th>
</tr>
<tr>
<th><blockquote>
<p>node_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9100</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>postgres_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9187</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>sql_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9399</p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p>5</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>u602doc-hipe03</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>10.116.102.63/24</p>
</blockquote></th>
<th></th>
<th colspan="2"></th>
<th rowspan="6"><blockquote>
<p>Worker (Node2)</p>
</blockquote></th>
</tr>
<tr>
<th colspan="4" rowspan="5"></th>
<th><blockquote>
<p>citus</p>
</blockquote></th>
<th colspan="2"></th>
</tr>
<tr>
<th><blockquote>
<p>pg_stat_statements</p>
</blockquote></th>
<th colspan="2"></th>
</tr>
<tr>
<th><blockquote>
<p>node_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9100</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>postgres_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9187</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>sql_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9399</p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p>6</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>u602doc-ldap01</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>10.116.102.47/24</p>
</blockquote></th>
<th></th>
<th colspan="2"></th>
<th rowspan="5"><blockquote>
<p>Целевая СУБД</p>
</blockquote></th>
</tr>
<tr>
<th colspan="4" rowspan="4"></th>
<th><blockquote>
<p>pg_stat_statements</p>
</blockquote></th>
<th colspan="2"></th>
</tr>
<tr>
<th><blockquote>
<p>node_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9100</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>postgres_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9187</p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>sql_exporter</p>
</blockquote></th>
<th colspan="2"><blockquote>
<p>9399</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3"><blockquote>
<p>№ изменения:</p>
</blockquote></td>
<td colspan="3"><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></td>
<td colspan="3"><blockquote>
<p>Дата внесения изм:</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Схема стенда представлена на рисунке [10.1](#_bookmark44).

**Сервер мониторинга Jatoba D ata Safe**

**ja_Hipe_Clust er**

pg \_st at \_statem ents cit us

nod e_export er

JDS

post g res_export er

IP 10 .116.10 2.41

**W orker (Node1)**

> IP -10 .116.10 2.62

sql_export er

**Сервер Prom etheus**

pg \_st at \_statem ents

**ja_Hipe_Clust er**

pg \_st at \_statem ents

nod e_export er

cit us

Prom et heus

post g res_export er

nod e_export er

sql_export er

post g res_export er

Alert Manag er

IP 10 .116.10 2.45

> **Coorditator**

IP -10 .116.10 2.61

sql_export er

**Целевая СУ БД**

**ja_Hipe_Clust er**

pg \_st at \_statem ents

pg \_st at \_statem ents

cit us

nod e_export er

nod e_export er

post g res_export er

post g res_export er

sql_export er

IP 10 .116.10 2.47

**W orker (Node2)**

> IP -10 .116.10 2.63

sql_export er

> Рисунок 10.1 – Схема стенда мониторинга с кластером «ja_Hipe_Cluster»
>
> Настройка экспортёров на целевой СУБД описан выше в настоящем документе и их параметры остаются неизменными в конфигурационном фале /usr/jatoba-
>
> \<ver\>/monitoring/default/prometheus.yml.
>
> Конфигурация экспортёров кластера добавляется отдельно.
>
> Настройка экспортёров ja_Hipe_Cluster для принципиально не отличается от вышеописанного процесса, но имеет ряд особенностей.
>
> Настройка СУБД в кластере для мониторинга выполняется согласно разделу [3](#установка-и-настройка-целевых-субд)
>
> «[Установка и настройка целевых СУБД](#установка-и-настройка-целевых-субд)».
>
> В результате:

- должна быть настроена аутентификация;

- в конфигурационный файл «postgresql.conf» добавлены параметры:

> shared_preload_libraries = 'citus, pg_stat_statements' pg_stat_statements'compute_query_id = on pg_stat_statements.max = 10000 pg_stat_statements.track = all

- должны быть установлены, как минимум, расширения pg_stat_statements, citus и citus_columnar.

<img src="../docs/assets/images/com18.3.1/monitoring/media/image507.png" style="width:7.05942in;height:1.70625in" />

> Рисунок 10.2 – Вывод установленных расширений
>
> БД установки расширения «pg_stat_statements» не имеет принципиального значения. Установка экспортёров выполняется согласно разделам настоящего документа:

- [4](#установка-экспортера-jatoba_node_exporter) «[Установка экспортера «jatoba\*\_node_exporter»](#установка-экспортера-jatoba_node_exporter);

- [5](#установка-экспортера-jatoba_postgres_exporter) «[Установка экспортера «jatoba\*\_postgres_exporter»](#установка-экспортера-jatoba_postgres_exporter);

- [6](#установка-экспортера-jatoba_sql_exporter) «[Установка экспортера «jatoba\*\_sql_exporter»](#установка-экспортера-jatoba_sql_exporter).

> В конфигурационных файлах «jatoba\*\_postgres_exporter» и «jatoba\*\_sql_exporter» в строке «DATA_SOURCE_NAME» должен быть указан IP-адрес узла.

## Конфигурирование системы «Prometheus» для компонента

> **«ja_Hipe_Cluster»**
>
> На сервере «Prometheus» (u602doc-pgp01, IP-10.116.102.45/24) в конфигурационный файл /usr/jatoba-\<ver\>/monitoring/default/prometheus.yml добавляется раздел с экспортёрами, установленными на узлах кластера.
>
> \###############################################################
>
> \# экспортеры координатора (Citus)
>
> \- job_name: "coordinator" static_configs:
>
> \- targets: \['10.116.102.61:9100', '10.116.102.61:9187',
>
> '10.116.102.61:9399', '10.116.102.61:9398'\]
>
> labels:
>
> cluster: 'ja_hipe_cluster'
>
> \# экспортеры worker1 (Node1)
>
> \- job_name: "worker1" static_configs:
>
> \- targets: \['10.116.102.62:9100', '10.116.102.62:9187',
>
> '10.116.102.62:9399'\]
>
> labels:
>
> cluster: 'ja_hipe_cluster'
>
> \# экспортеры worker2 (Node2)
>
> \- job_name: worker2 static_configs:
>
> \- targets: \['10.116.102.63:9100', '10.116.102.63:9187',
>
> '10.116.102.63:9399'\]
>
> labels:
>
> cluster: 'ja_hipe_cluster' \###############################################################
>
> В строке «job_name» целесообразнее указать роль узла в кластере.
>
> В строке «targets» перечисляются IP-адрес и порт каждого из установленных экспортёров, установленных на узле.
>
> Строка «labels: cluster:» является меткой для формирования выпадающего списка
>
> «Кластеры» по которой формируется кластерная панель виджетов.
>
> Строка является текстовой. Допускается указание IP-адреса узла, как показано на рисунке [10.3](#_bookmark46).
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image508.png" style="width:6.85214in;height:4.2375in" />
>
> <span id="_bookmark46" class="anchor"></span>Рисунок 10.3 – Использование IP-адреса узла в строке Строка «labels: cluster:»
>
> Целесообразнее указывать идентификационный признак подключенного к мониторингу кластера, как показано на рисунке [10.4](#_bookmark47).
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image509.png" style="width:7.0376in;height:4.40792in" />
>
> <span id="_bookmark47" class="anchor"></span>Рисунок 10.4 - Использование имени кластера в строке Строка «labels: cluster:»
>
> В результате на панели виджетов для кластера, в выпадающем списке отразится имя кластера.
>
> Рисунок 10.5 – Имя кластера на панели виджетов На виджетах отразятся графы каждого узла кластера.

# НАСТРОЙКА ЭКСПОРТЕРОВ ДЛЯ КОМПОНЕНТА JADOG

> Настройка системы мониторинга кластеров на основе компонента «jaDog» требует:

- конфигурирования узлов кластера;

- выделенный сервер мониторинга «Jatoba Data Safe» собирающий данные для виджетов с сервера «Prometheus».

> Настройка СУБД в кластере «jaDog» для мониторинга выполняется согласно разделу [3](#установка-и-настройка-целевых-субд) «[Установка и настройка целевых СУБД](#установка-и-настройка-целевых-субд)».
>
> Настройка экспортёров на целевых СУБД кластера описана выше в настоящем документе и их параметры остаются неизменными в конфигурационном фале /usr/jatoba-
>
> \<ver\>/monitoring/default/prometheus.yml.
>
> Установка экспортеров выполняется согласно разделам настоящего документа:

- [4](#установка-экспортера-jatoba_node_exporter) «[Установка экспортера «jatoba\*\_node_exporter»](#установка-экспортера-jatoba_node_exporter);

- [5](#установка-экспортера-jatoba_postgres_exporter) «[Установка экспортера «jatoba\*\_postgres_exporter»](#установка-экспортера-jatoba_postgres_exporter);

- [6](#установка-экспортера-jatoba_sql_exporter) «[Установка экспортера «jatoba\*\_sql_exporter»](#установка-экспортера-jatoba_sql_exporter).

> В конфигурационных файлах «jatoba\*\_postgres_exporter» и «jatoba\*\_sql_exporter» в строке «DATA_SOURCE_NAME» должен быть указан IP-адрес узла.

## Параметры стенда

> Параметры стенда, приведенные в таблице Таблица 11.1 – Конфигурация стенда

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 18%" />
<col style="width: 19%" />
<col style="width: 20%" />
<col style="width: 11%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: right;"><strong>Имя сервера</strong></th>
<th style="text-align: center;"><blockquote>
<p><strong>IP-адрес</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ПО</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Port</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Роль</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></td>
<td style="text-align: right;">u602doc-jds01</td>
<td style="text-align: center;"><blockquote>
<p>10.116.102.41/24</p>
</blockquote></td>
<td><blockquote>
<p>JDS</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Сервер мониторинга</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td style="text-align: right;">u602doc-pgp01</td>
<td style="text-align: center;"><blockquote>
<p>10.116.102.45/24</p>
</blockquote></td>
<td></td>
<td></td>
<td rowspan="7"><blockquote>
<p>Сервер Prometheus</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3" rowspan="6" style="text-align: center;"></td>
<td><blockquote>
<p>Prometheus</p>
</blockquote></td>
<td><blockquote>
<p>9090</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Alert manager</p>
</blockquote></td>
<td><blockquote>
<p>9093, 22</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg_stat_statements</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>node_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9100</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>postgres_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9187</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>sql_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9399</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>3</p>
</blockquote></td>
<td style="text-align: right;"><blockquote>
<p>u602doc-</p>
<p>jadog01</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>10.116.102.54/24</p>
</blockquote></td>
<td></td>
<td></td>
<td rowspan="3"><blockquote>
<p>Главный узел</p>
<p>(Master)</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3" rowspan="2" style="text-align: center;"></td>
<td><blockquote>
<p>jadog</p>
</blockquote></td>
<td><blockquote>
<p>5432</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg_stat_statements</p>
</blockquote></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 18%" />
<col style="width: 19%" />
<col style="width: 20%" />
<col style="width: 11%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Имя сервера</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>IP-адрес</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ПО</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Port</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Роль</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3" rowspan="3"></td>
<td><blockquote>
<p>node_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9100</p>
</blockquote></td>
<td rowspan="3"></td>
</tr>
<tr>
<td><blockquote>
<p>postgres_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9187</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>sql_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9399</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>u602doc-</p>
<p>jadog02</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>10.116.102.55/24</p>
</blockquote></td>
<td></td>
<td></td>
<td rowspan="6"><blockquote>
<p>Резервный узел</p>
<p>(Slave)</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3" rowspan="5"></td>
<td><blockquote>
<p>jadog</p>
</blockquote></td>
<td><blockquote>
<p>5432</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg_stat_statements</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>node_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9100</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>postgres_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9187</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>sql_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9399</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>u602doc-</p>
<p>jadog03</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>10.116.102.56/24</p>
</blockquote></td>
<td></td>
<td></td>
<td rowspan="6"><blockquote>
<p>Узел-арбитр (Referee)</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3" rowspan="5"></td>
<td><blockquote>
<p>jadog</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>pg_stat_statements</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>node_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9100</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>postgres_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9187</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>sql_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9399</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>6</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>u602doc-ldap01</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>10.116.102.47/24</p>
</blockquote></td>
<td></td>
<td></td>
<td rowspan="5"><blockquote>
<p>Целевая СУБД</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3" rowspan="4"></td>
<td><blockquote>
<p>pg_stat_statements</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>node_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9100</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>postgres_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9187</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>sql_exporter</p>
</blockquote></td>
<td><blockquote>
<p>9399</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Схема стенда представлена на рисунке [11.1](#_bookmark50).

**Сервер мониторинга Jatoba Data**

**Safe**

**jaDog**

pg_stat_statements

jadog node_exporter

JDS

postgres_exporter

IP 10.116.102.41

**Slave**

IP -10.116.102.55

sql_exporter

**Сервер**

**Prometheus**

**jaDog**

pg_stat_statements

pg_stat_statements

jadog

node_exporter

Prometheus

node_exporter

postgres_exporter

postgres_exporter

sql_exporter

Alert Manager

IP 10.116.102.45

**Master**

IP -10.116.102.54

sql_exporter

**Целевая СУБД**

**jaDog**

pg_stat_statements

pg_stat_statements

jadog

node_exporter

node_exporter

postgres_exporter

postgres_exporter

sql_exporter

IP 10.116.102.47

> **Referee**

IP -10.116.102.56

sql_exporter

> <span id="_bookmark50" class="anchor"></span>Рисунок 11.1 – Схема стенда мониторинга с кластером «jaDog»

## Конфигурирование системы «Prometheus» для компонента «jaDog»

> На сервере «Prometheus» (u602doc-pgp01, IP-10.116.102.45/24) в конфигурационный файл /usr/jatoba-\<ver\>/monitoring/default/prometheus.yml добавляется раздел с целями по количеству узлов отказоустойчивого кластера.
>
> \###############################################################
>
> \# экспортер данных для jaDog
>
> \- job_name: node1 scheme: https tls_config:
>
> \#ca_file: /opt/prometheus/rootca.crt cert_file: /opt/prometheus/rest_user.crt key_file: /opt/prometheus/rest_user.key insecure_skip_verify: true
>
> static_configs:
>
> \- targets: \['10.116.102.54:54443'\]
>
> labels:
>
> cluster_jadog: 'jadog' node: '10.116.102.54:5432'
>
> \- job_name: node2 scheme: https tls_config:
>
> \#ca_file: /opt/prometheus/rootca.crt cert_file: /opt/prometheus/rest_user.crt key_file: /opt/prometheus/rest_user.key insecure_skip_verify: true
>
> static_configs:
>
> \- targets: \['10.116.102.55:54443'\]
>
> labels:
>
> cluster_jadog: 'jadog' node: '10.116.102.55:5432'
>
> \- job_name: node_referee scheme: https tls_config:
>
> \#ca_file: /opt/prometheus/rootca.crt cert_file: /opt/prometheus/rest_user.crt key_file: /opt/prometheus/rest_user.key insecure_skip_verify: true
>
> static_configs:
>
> \- targets: \['10.116.102.56:54443'\]
>
> labels:
>
> cluster_jadog: 'jadog' node: '10.116.102.56'
>
> \###############################################################

В строке «targets» указать адрес и сетевой порт REST API узла «jaDog».

> <img src="../docs/assets/images/com18.3.1/monitoring/media/image1.png" style="width:0.25in;height:0.25in" />Для подключения к интерфейсу REST API компонента «jaDog» применяются сертификаты SSL. При этом к каталогу /var/lib/jatoba/ssl_jadog/, в котором располагаются сертификаты SSL пользователя компонента «jaDog», должен быть обеспечен доступ для системного пользователя prometheus. Для этого необходимо его добавить в системную группу postgres.
>
> Другим вариантом является копирование сертификатов SSL пользователя компонента «jaDog», например, в каталог /opt/prometheus/.
>
> В строке «cluster_jadog» задать произвольное название кластера (одинаковое для всех узлов).
>
> В строке «node» задать адрес СУБД управляемой экземпляром «jaDog» (для узла-арбитра сетевой порт не указывается).
>
> После внесенных изменений конфигурационный файл /usr/jatoba-
>
> \<ver\>/monitoring/default/prometheus.yml требуется сохранить, обновить конфигурацию systemd и перезапустить службу Prometheus:
>
> \# systemctl daemon-reload
>
> \# systemctl restart jatoba18_prometheus.service
>
> На данном шаге конфигурирование системы «Prometheus» для мониторинга кластера на основе компонента «jaDog» закончено.
>
> Добавление виджетов описано в документе «Руководство по настройке. Часть 20.
>
> Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe».

# ОБНОВЛЕНИЕ КОМПОНЕНТОВ ЭКСПОРТЕРОВ

> Предварительные условия: необходимо в каталоге /localrepo заменить файлы на ту версию дистрибутива, с которой в дальнейшем будет выполняться обновление компонентов. Если это не сделано, необходимо обратиться в раздел «1.2 Обновление СУБД с промежуточных версий» документа «Руководство по обновлению СУБД «Jatoba» 643.72410666.00067-08 93 01.

## Обновление компонента «sql_exporter»

## Установка новой версии компонента «sql_exporter»

> Обновление версии компонента «sql_exporter» требует сохранения конфигурационных файлов и выполняется на узлах в следующем порядке:

1)  Скопировать новый пакет компонента «sql_exporter» в отдельную директорию. Например, в директорию /home/admin/Downloads.

2)  Загрузить и установить новый пакет jatoba\<ver\>\_sql_exporter от имени и с правами привилегированного пользователя ОС:

    - Находясь в каталоге с пакетом:

> \# apt install ./jatoba\<ver\>-sql-exporter\_\* –y

- Из корневого каталога командой:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image836.jpeg" style="width:7.04403in;height:1.2075in" />

> \# apt install /home/admin/Downloads/jatoba\<ver\>-sql-exporter\_\* –y
>
> Рисунок 12.1 – Установка нового пакета
>
> При установке новой версии конфигурационные файлы предыдущей версии будут сохранены в каталоге /usr/jatoba-\<ver\>/monitoring/default с расширением backup.
>
> После установки новой версии jatoba\<ver\>\_sql_exporter в каталоге /usr/jatoba-
>
> \<ver\>/monitoring/default будет создан дополнительный файл конфигурации citus.collector.yml, а также обновлен postgres.collector.yml.

3)  Восстановить резервные копии конфигураций в каталог /usr/jatoba-

> \<ver\>/monitoring/default.
>
> На данном шаге обновление компонента sql_exporter завершено.

## Настройка мониторинга кластера «ja_Hipe_Cluster» после обновления

> Следующие шаги выполняются только на узле-координаторе кластера
>
> «ja_Hipe_Cluster».

1)  Начиная с версии jatoba6-sql-exporter_0.14.3-440 для поддержки мониторинга ja_Hipe Citus на узле-координаторе необходимо дополнительно создать второй экземпляр службы - jatoba\<ver\>\_sql_exporter.сitus.service. Для этого потребуется скопировать файл сервиса командой в консоли ОС:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image837.png" style="width:7.00222in;height:1.17562in" />

> \# cp /lib/systemd/system/jatoba\<ver\>\_sql_exporter.service
>
> /lib/systemd/system/jatoba\<ver\>\_sql_exporter.citus.service
>
> Рисунок 12.2 – Создание второго экземпляра службы

2)  Настроить второй экземпляр jatoba\<ver\>\_sql_exporter.citus.service. Для этого необходимо открыть файл

> \# nano
>
> /lib/systemd/system/jatoba\<ver\>\_sql_exporter.citus.service
>
> И внести следующие изменения:
>
> \[Service\] EnvironmentFile=/usr/jatoba-
>
> \<ver\>/monitoring/default/sql_exporter.citus
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image838.jpeg" style="width:7.0168in;height:3.51667in" />
>
> Рисунок 12.3 – Изменение настроек второго экземпляра

3)  Скопировать файл командой в консоли ОС:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image839.png" style="width:7.07019in;height:0.92812in" />

> \# cp /usr/jatoba-\<ver\>/monitoring/default/sql_exporter.yml
>
> /usr/jatoba-\<ver\>/monitoring/default/sql_exporter.citus.yml
>
> Рисунок 12.4 – Копирование файла настроек sql_exporter.citus.yml

4)  Открыть файл sql_exporter.citus.yml

> \# nano /usr/jatoba-
>
> \<ver\>/monitoring/default/sql_exporter.citus.yml
>
> И внести следующие изменения:
>
> data_source_name: 'postgresql://sql_exporter:\[password\]@10.116.102.61:5432/\[citus
>
> \_db\]?sslmode=disable' collectors: \[citus\]
>
> Где password – пароль пользователя СУБД, citus_db – название БД, в которой установлено расширение «citus».
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image840.jpeg" style="width:7.02625in;height:2.89177in" />
>
> Рисунок 12.5 – Изменение настроек второго экземпляра

5)  Скопировать файл командой в консоли ОС:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image841.png" style="width:6.97822in;height:1.07802in" />

> \# cp /usr/jatoba-\<ver\>/monitoring/default/sql_exporter
>
> /usr/jatoba-\<ver\>/monitoring/default/sql_exporter.citus
>
> Рисунок 12.6 – Копирование файла настроек sql_exporter.yml

6)  Открыть файл sql_exporter.citus:

> \# nano /usr/jatoba-\<ver\>/monitoring/default/sql_exporter.citus
>
> И внести следующие изменения:
>
> CONF_FILE=/usr/jatoba-
>
> \<ver\>/monitoring/default/sql_exporter.citus.yml LISTEN_ADDRESS=0.0.0.0:9366
>
> Здесь для доступа к метрикам компонента «ja_Hipe_Cluster» будет использован сетевой порт 9366.
>
> <img src="../docs/assets/images/com18.3.1/monitoring/media/image842.jpeg" style="width:7.08335in;height:1.83333in" />
>
> Рисунок 12.7 – Изменение настроек второго экземпляра

7)  Обновить конфигурацию systemd:

> \# systemctl daemon-reload

8)  Запустить второй экземпляр службы jatoba\<ver\>\_sql_exporter.citus, включить ее в автозапуск и проверить статус работы:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image843.png" style="width:7.03652in;height:1.87396in" />

> \# systemctl start jatoba\<ver\>\_sql_exporter.citus \# systemctl enable jatoba\<ver\>\_sql_exporter.citus \# systemctl status jatoba\<ver\>\_sql_exporter.citus
>
> Рисунок 12.8 – Проверка статуса службы второго экземпляра

9)  Запустить и проверить статус работы первого экземпляра:

> \# systemctl start jatoba\<ver\>\_sql_exporter \# systemctl status jatoba\<ver\>\_sql_exporter

10) Открыть в браузере веб-интерфейс sql_exporter и проверить наличие метрик компонента Citus для второго экземпляра службы:

> <http://localhost:9366/metrics>
>
> Рисунок 12.9 – Проверка метрик компонента sql_exporter

11) Переключиться на узел с запущенной системой «Prometheus» и открыть на редактирование файл:

> \# nano /usr/jatoba-\<ver\>/monitoring/default/prometheus.yml
>
> В секции «# экспортеры координатора (Citus)» внести (добавить) следующие изменения:
>
> \# экспортеры координатора (Citus)
>
> \- job_name: "coordinator" static_configs:
>
> \- targets: \[..., **'IP-address:9366'**\]
>
> Где IP-address – сетевой адрес узла-координатора.

<img src="../docs/assets/images/com18.3.1/monitoring/media/image845.jpeg" style="width:6.91186in;height:2.49219in" />

> Рисунок 12.10 – Параметры в конфигурационном файле prometheus.yml

12) Перезагрузить службу «Prometheus»

> \# systemctl stop jatoba\<ver\>\_prometheus
>
> \# systemctl start jatoba\<ver\>\_prometheus

13) Открыть веб-интерфейс системы «Prometheus» по адресу http://\<IP-адрес\>:9090/targets и проверить наличие соединения с компонентом sql_exporter.

> Рисунок 12.11 – Страница «Targets» в системе «Prometheus»
>
> Открыть веб-интерфейс администратора Jatoba Data Safe (JDS) и проверить наличие метрик кластера «ja_Hipe_Cluster».

## Обновление компонентов node_exporter, postgres_exporter и alertmanager

> Обновление версии компонентов мониторинга СУБД node_exporter, postgres_exporter и alertmanager выполняется на узлах в следующем порядке:

1)  Остановка и отключение служб обновляемых компонентов мониторинга СУБД:

> \# systemctl stop jatoba\<ver\>\_node_exporter jatoba\<ver\>\_postgres_exporter jatoba\<ver\>\_alertmanager \# systemctl disable jatoba\<ver\>\_node_exporter jatoba\<ver\>\_postgres_exporter jatoba\<ver\>\_alertmanager

2)  Обновление версии компонентов мониторинга СУБД из локального репозитория:

> \# apt-get install jatoba\<ver\>-node-exporter jatoba\<ver\>-postgres-exporter jatoba\<ver\>-alertmanager

3)  После обновления открыть файлы конфигурации компонентов мониторинга СУБД и ознакомиться с новыми параметрами:

> \# nano /usr/jatoba-\<ver\>/monitoring/default/postgres_exporter \# nano /usr/jatoba-\<ver\>/monitoring/default/alertmanager.yml

4)  Отредактировать пользовательские файлы конфигурации компонентов мониторинга СУБД (с расширением .backup), созданные на этапе обновления с внесением в них параметров из новой версии:

> \# nano /usr/jatoba-
>
> \<ver\>/monitoring/default/postgres_exporter.backup \# nano /usr/jatoba-
>
> \<ver\>/monitoring/default/alertmanager.yml.backup
>
> и переименовать обратно:
>
> \# cp /usr/jatoba-
>
> \<ver\>/monitoring/default/postgres_exporter.backup /usr/jatoba-
>
> \<ver\>/monitoring/default/postgres_exporter \# cp /usr/jatoba-
>
> \<ver\>/monitoring/default/alertmanager.yml.backup /usr/jatoba-
>
> \<ver\>/monitoring/default/alertmanager.yml

5)  Активация, запуск и проверка статуса компонентов мониторинга СУБД после обновления:

> \# systemctl enable jatoba\<ver\>\_node_exporter jatoba\<ver\>\_postgres_exporter jatoba\<ver\>\_alertmanager \# systemctl start jatoba\<ver\>\_node_exporter jatoba\<ver\>\_postgres_exporter jatoba\<ver\>\_alertmanager \# systemctl status jatoba\<ver\>\_node_exporter
>
> \# systemctl status jatoba\<ver\>\_postgres_exporter \# systemctl status jatoba\<ver\>\_alertmanager

6)  Запустить веб-интерфейс и убедиться, что служба компонента работает:

    - <http://localhost:9100/> - node_exporter;

    - <http://localhost:9187/> - postgres_exporter;

    - <http://localhost:9093/> - alertmanager.

> На данном шаге обновление компонентов мониторинга СУБД завершено.

# ОБНОВЛЕНИЕ СИСТЕМЫ «PROMETEUS»

> Обновление версии системы «Prometheus» требует сохранения конфигурационных файлов системы и выполняется в следующем порядке:

1)  Сохранить резервную копию каталога конфигураций /usr/jatoba-

> \<ver\>/monitoring/default

2)  Скопировать новый пакет в отдельную директорию. Например, в директорию

> /home/admin/Downloads.

3)  Удалить существующий пакет

<img src="../docs/assets/images/com18.3.1/monitoring/media/image847.png" style="width:7.07354in;height:1.36083in" />

> \# apt remove jatoba\<ver\>-prometheus –y
>
> ОС:
>
> Рисунок 13.1 – Удаление существующего пакета

4)  Установить новый пакет от имени и с правами привилегированного пользователя

> – Находясь в каталоге с пакетом:
>
> \# apt install ./jatoba\<ver\>-prometheus\_\* –y
>
> – Из корневого каталога командой:

<img src="../docs/assets/images/com18.3.1/monitoring/media/image848.png" style="width:7.17165in;height:1.33687in" />

> \# apt install /home/admin/Downloads/jatoba\<ver\>-prometheus\* –y
>
> Рисунок 13.2 – Установка нового пакета

5)  Восстановить резервные копии конфигураций в каталог /usr/jatoba-

> \<ver\>/monitoring/default

6)  Проверить владельца и права на каталог приложения командой:

> ls -la /opt/prometheus/

7)  В случае отклонения настроек назначить корректные права командой:

> chown prometheus:prometheus -R /opt/prometheus/

8)  Обновить конфигурацию systemd:

> \# systemctl daemon-reload

9)  Запустить службу системы, включить ее в автозапуск и проверить статус работы:

> \# systemctl start jatoba\<ver\>\_prometheus \# systemctl enable jatoba\<ver\>\_prometheus \# systemctl status jatoba\<ver\>\_prometheus
>
> На данном шаге обновление системы «Prometheus» закончено.
>
> В момент обновления компонента данные с экспортёров будут потеряны, т.к. экспортёры не хранят данные, а передают их постоянно.
>
> Рисунок 13.3 – Промежуток в данных собранных с экспортёров

# ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ

> @ - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как,
>
> «коммерческое эт» (англ. «commercial ат»).
>
> & - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как,
>
> «коммерческое и» (амперсанд) (англ. ampersand)
>
> = - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как,
>
> «равно» (англ. equals SIGH).
>
> ? - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как,
>
> «вопросительный знак» (англ. question mark).
>
> : - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как,
>
> «двоеточие» (англ. colon).

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
