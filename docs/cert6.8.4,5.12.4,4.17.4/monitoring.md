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
<p><strong>Руководство по настройке. Часть 28.<br />
Поддержка мониторинга СУБД</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-28</strong></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">Листов 58</td>
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

В документе приведены сведения, необходимые для установки и эксплуатации компонентов, предназначенных для мониторинга СУБД:

- 
- 
- 
- 
- 

Компонент «node_exporter». Версия компонента – 1.7.0;Компонент «postgres_exporter». Версия компонента – 0.15.0;Компонент «sql_exporter». Версия компонента – 0.13.0.Система «Prometheus». Версия системы – 0.52.0.Утилита «Alertmanager». Версия компонента – 0.27.0.Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th style="text-align: left;"><p>Все примеры в данном документе приведены для СУБД «Jatoba» версии<br />
ядра 5.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:</p>
<ul>
<li></li>
<li></li>
</ul>
<p>ОС Windows – «C:\Program Files\GIS\Jatoba\6\bin»;ОС Linux – «/usr/jatoba-6/bin».</p></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image2.png" style="width:0.25139in;height:0.25139in" /></td>
<td style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></td>
</tr>
</tbody>
</table>

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image2.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image1.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонентов [5](#назначение-компонентов)](#назначение-компонентов)

[1.1. Условия применения [5](#условия-применения)](#условия-применения)

[1.2. Ограничения по эксплуатации [5](#ограничения-по-эксплуатации)](#ограничения-по-эксплуатации)

[2. Архитектура системы мониторинга [7](#архитектура-системы-мониторинга)](#архитектура-системы-мониторинга)

[3. Установка и настройка целевых СУБД [9](#установка-и-настройка-целевых-субд)](#установка-и-настройка-целевых-субд)

[3.1. Установка СУБД [9](#установка-субд)](#установка-субд)

[3.2. Настройка конфигурационных файлов [9](#настройка-конфигурационных-файлов)](#настройка-конфигурационных-файлов)

[3.3. Установка расширения «pg_stat_statements» [9](#установка-расширения-pg_stat_statements)](#установка-расширения-pg_stat_statements)

[4. Установка экспортера «jatoba\*\_node_exporter» [12](#установка-экспортера-jatoba_node_exporter)](#установка-экспортера-jatoba_node_exporter)

[5. Установка экспортера «jatoba\*\_postgres_exporter» [16](#установка-экспортера-jatoba_postgres_exporter)](#установка-экспортера-jatoba_postgres_exporter)

[5.1. Установка утилиты и службы «jatoba\*\_postgres_exporter» [16](#установка-утилиты-и-службы-jatoba_postgres_exporter)](#установка-утилиты-и-службы-jatoba_postgres_exporter)

[5.2. Создание пользователя СУБД «postgres_exporter» [17](#создание-пользователя-субд-postgres_exporter)](#создание-пользователя-субд-postgres_exporter)

[5.3. Настройка переменных окружения [17](#настройка-переменных-окружения)](#настройка-переменных-окружения)

[5.4. Запуск утилиты «postgres_exporter» [19](#запуск-утилиты-postgres_exporter)](#запуск-утилиты-postgres_exporter)

[6. Установка экспортера «jatoba\*\_sql_exporter» [22](#установка-экспортера-jatoba_sql_exporter)](#установка-экспортера-jatoba_sql_exporter)

[6.1. Установка утилиты и службы «sql_exporter» [22](#установка-утилиты-и-службы-sql_exporter)](#установка-утилиты-и-службы-sql_exporter)

[6.2. Настройка переменных окружения [23](#настройка-переменных-окружения-1)](#настройка-переменных-окружения-1)

[6.3. Создание пользователя СУБД «sql_exporter» [23](#создание-пользователя-субд-sql_exporter)](#создание-пользователя-субд-sql_exporter)

[6.4. Настройка параметров экспортера и подключения к БД в файле «sql_exporter.yml» [24](#настройка-параметров-экспортера-и-подключения-к-бд-в-файле-sql_exporter.yml)](#настройка-параметров-экспортера-и-подключения-к-бд-в-файле-sql_exporter.yml)

[6.5. Запуск утилиты «jatoba\*\_sql_exporter» [25](#запуск-утилиты-jatoba_sql_exporter)](#запуск-утилиты-jatoba_sql_exporter)

[7. Система «Prometheus» [28](#система-prometheus)](#система-prometheus)

[7.1. Установка системы «Prometheus» [28](#установка-системы-prometheus)](#установка-системы-prometheus)

[7.2. Конфигурация системы «Prometheus» [29](#конфигурация-системы-prometheus)](#конфигурация-системы-prometheus)

[7.3. Запуск системы «Prometheus» [31](#запуск-системы-prometheus)](#запуск-системы-prometheus)

[8. Утилита «Alertmanager» [36](#утилита-alertmanager)](#утилита-alertmanager)

[8.1. Установка утилиты и службы «alertmanager» [36](#группировка-оповещений-группирует-похожие-оповещения-для-снижения-шума-и-предотвращения-дублирования.удаление-дубликатов-гарантирует-отправку-уникальных-оповещений-без-повторений.маршрутизация-и-приглушение-оповещений-позволяет-определять-правила-и-конфигурации-для-маршрутизации-оповещений-нужным-получателям-на-основе-их-важности-или-других-критериев.-также-можно-временно-приглушить-оповещения-во-время-обслуживания-или-определённых-периодов.уведомление-о-тревоге-интегрируется-с-различными-каналами-связи-такими-как-электронная-почта-slack-pagerduty-и-другие-позволяя-отправлять-уведомления-о-тревогах-нужным-людям-или-командам.установка-утилиты-и-службы-alertmanager)](#группировка-оповещений-группирует-похожие-оповещения-для-снижения-шума-и-предотвращения-дублирования.удаление-дубликатов-гарантирует-отправку-уникальных-оповещений-без-повторений.маршрутизация-и-приглушение-оповещений-позволяет-определять-правила-и-конфигурации-для-маршрутизации-оповещений-нужным-получателям-на-основе-их-важности-или-других-критериев.-также-можно-временно-приглушить-оповещения-во-время-обслуживания-или-определённых-периодов.уведомление-о-тревоге-интегрируется-с-различными-каналами-связи-такими-как-электронная-почта-slack-pagerduty-и-другие-позволяя-отправлять-уведомления-о-тревогах-нужным-людям-или-командам.установка-утилиты-и-службы-alertmanager)

[8.2. Настройка параметров утилиты файле «alertmanager.yml» [37](#настройка-параметров-утилиты-файле-alertmanager.yml)](#настройка-параметров-утилиты-файле-alertmanager.yml)

[8.3. Запуск утилиты «alertmanager» [38](#запуск-утилиты-alertmanager)](#запуск-утилиты-alertmanager)

[9. Подключение к JDS [40](#подключение-к-jds)](#подключение-к-jds)

[9.1. Настройка SSH-соединения [41](#настройка-ssh-соединения)](#настройка-ssh-соединения)

[9.2. Конфигурирование JDS [42](#конфигурирование-jds)](#конфигурирование-jds)

[9.3. Настройка связки системы «Prometheus» и утилиты «Alertmanager» [44](#настройка-связки-системы-prometheus-и-утилиты-alertmanager)](#настройка-связки-системы-prometheus-и-утилиты-alertmanager)

[10. Система «Grafana» [46](#система-grafana)](#система-grafana)

[10.1. Установка системы «Grafana» [46](#установка-системы-grafana)](#установка-системы-grafana)

[10.2. Запуск системы «Grafana» [46](#запуск-системы-grafana)](#запуск-системы-grafana)

[10.3. Создание дашбордов [49](#создание-дашбордов)](#создание-дашбордов)

[10.4. Импорт дашбордов [49](#импорт-дашбордов)](#импорт-дашбордов)

[11. Дашборды [52](#дашборды)](#дашборды)

[Приложение 1 [54](#_Toc195525335)](#_Toc195525335)

[Термины и определения [56](#_Toc195525336)](#_Toc195525336)

[Перечень сокращений [57](#_Toc195525337)](#_Toc195525337)

# Назначение компонентов

Компонент «node_exporter» – программный инструмент, предназначенный для мониторинга и сбора метрик с различных компонентов в Linux-подобных ОС.

Компонент собирает и экспортирует различные метрики, такие как загрузка процессора, использование памяти, статистика сети, системные вызовы и т.д. Собранные данные могут быть отправлены на серверы «Prometheus» или «Grafana» для визуализации и анализа.

Компонент «postgres_exporter» – инструмент для сбора и экспорта метрик PostgreSQL, таких как статистика по базе данных, нагрузка на сервер, количество запросов и т.д. Он разработан для работы с PostgreSQL и предоставляет данные в формате, удобном для системы «Prometheus». С помощью «postgres_exporter» можно отслеживать производительность PostgreSQL, выявлять проблемы и оптимизировать настройки базы данных.

Компонент «sql_exporter» – инструмент для экспорта данных из SQL-запросов в формат, удобный для анализа и визуализации. Он позволяет получать информацию о структуре таблиц, данных, индексах, статистике и других параметрах базы данных. Полезен для анализа производительности системы, выявления проблем и оптимизации запросов.

## Условия применения

Компоненты могут использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux.

## Ограничения по эксплуатации

В комплект поставки не входит система «Grafana».

К системам «Prometheus» и «Grafana» поставляются конфигурационные файлы, обеспечивающие снятие метрик с СУБД «Jatoba».

При установке системы «Grafana» следует руководствоваться документацией с официального сайта разработчика систем.

Приведенные в документе действия по вышеуказанной системе носят рекомендательный характер.

Для подключения целевой СУБД к компоненту «Jatoba data safe» требуется указывать IP–адрес в строке подключения утилит к СУБД и не использовать параметр «localhost».

Символы «коммерческое эт» «@», «амперсанд» «&», «равно» «=», «вопросительный знак» «?» и «двоеточие» «:», не рекомендуется использовать в именах пользователей и в паролях, для исключения ошибки в строке подключения.

Эти символы используются для разделения параметров строки подключения.

Ограничений по совместимости с другими компонентами нет.

# Архитектура системы мониторинга

Архитектура системы мониторинга основана на том, что:

- 
- 

<!-- -->

- 
- 

<!-- -->

- 
- 
- 

на серверах целевых СУБД устанавливается экспортера «node_exporter» (см. р. 4);на целевых СУБД с предустановленным расширением «pg_stat_statements» устанавливаются утилиты сбора метрик, такие как: экспортер «postgres_exporter» (см. р. 5);экспортер «sql_exporter» (см. р. 6);система «Prometheus» собирает их в своём хранилище (см. р. 7);компонент «Jatoba data safe» использует данные хранилища «Prometheus» для отображения их в разделе «Мониторинг».утилита «Alertmanager» обеспечивает контроль над пороговыми значениями и рассылку уведомлений (см. р. 8).В зависимости от количества СУБД, подключенных к мониторингу и общей нагрузки, система «Prometheus» может быть установлена на отдельном сервере. В этом случае «JDS» будет получать данные по сети, что увеличит нагрузку на неё.

Целесообразнее компонент JDS и систему «Prometheus» устанавливать на одном сервере. Такая конфигурация сделает данный сервер полноценным сервером мониторинга и безопасности.

В рассматриваемом примере на ОС Ubuntu 22.04 используются параметры сети и программного обеспечения, приведенные в таблице Таблица 2.1.

<table>
<caption><p>Таблица 2.1 – Конфигурация стенда</p></caption>
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
<th style="text-align: center;"><strong>№</strong></th>
<th style="text-align: center;"><strong>Имя сервера</strong></th>
<th style="text-align: center;"><strong>IP-адрес</strong></th>
<th style="text-align: center;"><strong>ПО</strong></th>
<th style="text-align: center;"><strong>Port</strong></th>
<th style="text-align: center;"><strong>Роль</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: left;">u602doc-jds01</td>
<td style="text-align: left;">10.116.102.41/24</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Сервер мониторинга</td>
</tr>
<tr>
<td style="text-align: center;">1.1</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">JDS</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">1.2</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Prometheus</td>
<td style="text-align: left;">9090</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Alert manager</td>
<td style="text-align: left;"><p>9093</p>
<p>22</p></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">2</td>
<td style="text-align: left;">u602doc-pgp01</td>
<td style="text-align: left;">10.116.102.45/24</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Целевая СУБД</td>
</tr>
<tr>
<td style="text-align: center;">2.1</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">pg_stat_statements</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">2.2</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">node_exporter</td>
<td style="text-align: left;">9100</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">2.3</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">postgres_exporter</td>
<td style="text-align: left;">9187</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">2.4</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">sql_exporter</td>
<td style="text-align: left;">9399</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">3</td>
<td style="text-align: left;">u602doc-ldap01</td>
<td style="text-align: left;">10.116.102.47/24</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Целевая СУБД</td>
</tr>
<tr>
<td style="text-align: center;">3.1</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">pg_stat_statements</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">3.2</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">node_exporter</td>
<td style="text-align: left;">9100</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">3.3</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">postgres_exporter</td>
<td style="text-align: left;">9187</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">3.4</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">sql_exporter</td>
<td style="text-align: left;">9399</td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

Таблица 2.1 – Конфигурация стенда

Схема стенда представлена на рисунке Рисунок 2.1.

![](../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image3.emf)

Рисунок 2.1 – Схема стенда

# Установка и настройка целевых СУБД

## Установка СУБД

Установка СУБД «Jatoba» выполняется от имени пользователя, обладающего административными привилегиями в системе, в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по установке».

## Настройка конфигурационных файлов

Целевые СУБД должны быть настроены на приём подключений

В конфигурационном файле «postgresql.conf», в разделе «CONNECTIONS AND AUTHENTICATION» раскомментирован и установлен параметр:

> listen_addresses = '\*'

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image4.png" style="width:6.72in;height:1.575in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-09 10-57-37.png" />

Рисунок 3.1 - Конфигурационный файл «postgresql.conf»

В конфигурационном файле «pg_hba.conf» разрешены подключения к СУБД в параметре:

> host all all all md5

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image5.png" style="width:6.736in;height:1.47917in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-09 11-02-33.png" />

Рисунок 3.2 – Конфигурационный файл «pg_hba.conf»

## Установка расширения «pg_stat_statements»

На каждой целевой СУБД должно быть установлено расширение «pg_stat_statements».

Для установки расширения «pg_stat_statements» потребуется:

- 

> В конфигурационном файле «postgresql.conf», в разделе «Shared Library Preloading» для последующей загрузки расширения установить параметр:shared_preload_libraries = 'pg_stat_statements'

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image6.png" style="width:7.1029in;height:1.368in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-25 11-16-23.png" />

Рисунок 3.3 – Строка загрузки расширения в конфигурационном файле СУБД «postgresql.conf»

- 

> В разделе «STATISTICS» – «Monitoring» раскомментировать строку и добавить параметры:compute_query_id = on

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image7.png" style="width:7.02335in;height:1.424in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-25 11-18-26.png" />

Рисунок 3.4 – Строка параметра «compute_query_id» в конфигурационном файле СУБД «postgresql.conf»

- 

> В разделе «CUSTOMIZED OPTIONS» добавить параметры:pg_stat_statements.max = 10000
>
> pg_stat_statements.track = all

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image8.png" style="width:7.10784in;height:1.448in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-25 11-20-49.png" />

Рисунок 3.5 – Параметры статистики в конфигурационном файле СУБД «postgresql.conf»

Сохранить конфигурационный файл «postgresql.conf» и перезагрузить СУБД.

Расширение «pg_stat_statements» устанавливается при помощи SQL-команды:

> CREATE EXTENSION pg_stat_statements;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image9.png" style="width:7.13043in;height:1.91864in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic2\Screenshot from 2024-01-17 04-44-12.png" />

Рисунок 3.6 – Создание расширения

# Установка экспортера «jatoba\*\_node_exporter»

Экспортер «jatoba\*\_node_exporter» должен быть установлен на всех целевых СУБД.

Экспортер позволяет снимать различные метрики с Linux-подобных операционных систем. Это агент, который передает серверу «Prometheus» аппаратные и программные показатели работы GNU/Linux.

Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

> apt-get install jatoba\<ver\>-node-exporter

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image10.png" style="width:6.66234in;height:1.175in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-08 10-37-10.png" />

Рисунок 4.1 – Установка пакета «jatoba\*\_node_exporter»

В результате установки пакета будет создан пользователь ОС «node_exporter_usr», от которого будет производиться запуск утилиты.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image11.png" style="width:6.77778in;height:1.36799in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-05 14-17-09.png" />

Рисунок 4.2 -пользователя «node_exporter_usr»

У данного пользователя нет интерактивной оболочки для входа.

Автоматически будет создан файл конфигурации сервиса по адресу:

> /usr/lib/systemd/system/jatoba5_node_exporter.service

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image12.png" style="width:6.73377in;height:2.29097in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-08 13-28-39.png" />

Рисунок 4.3 – Содержание конфигурационного файла

Далее требуется запустить службу экспортера, включить ее в автозапуск и проверить статус работы:

> \# systemctl enable jatoba\<ver\>\_node_exporter
>
> \# systemctl start jatoba\<ver\>\_node_exporter
>
> \# systemctl status jatoba\<ver\>\_node_exporter

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image13.png" style="width:6.64935in;height:1.29792in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-08 13-07-38.png" />

Рисунок 4.4 - Проверка сервиса «jatoba\*\_node_exporter»

Чтобы проверить статус работы экспортера нужно в браузере открыть веб-интерфейс экспортера:

\# localhost:9100

\# http://0.0.0.0:9100

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image14.png" style="width:7.2064in;height:1.93507in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic2\Screenshot from 2024-01-18 00-54-36.png" />

Рисунок 4.5 – Веб-интерфейс утилиты «node_exporter»

В рассматриваемом примере на целевой СУБД:

- 

u602doc-pgp01 IP - 10.116.102.45 веб-интерфейс утилиты «node_exporter» проверяется по URL:# http://10.116.102.45:9100

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image15.png" style="width:7.05151in;height:2.00833in" />

Рисунок 4.6 – Веб-интерфейс утилиты «node_exporter» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- 

u602doc-ldap01 IP-10.116.102.47 веб-интерфейс утилиты «node_exporter» проверяется по URL:# http://10.116.102.47:9100

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image16.png" style="width:7.08472in;height:2.05616in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-25 15-39-05.png" />

Рисунок 4.7 – Веб-интерфейс утилиты «node_exporter» на целевой СУБД u602doc-ldap01 IP-10.116.102.47

По умолчанию экспортер использует все доступные коллекторы метрик.

Состав снимаемых метрик отображается на странице:

> localhost:9100/metrics

При необходимости может быть изменен состав используемых коллекторов с помощью опций командной строки:

> ./jatoba\<ver\>\_node_exporter --\[no-\]collector.netdev --\[no-\]collector.netstat

Если необходимо изменить значения адреса веб-интерфейса (:9100), node_exporter запускается с опцией --web.listen-address:

> ./jatoba\<ver\>\_node_exporter --web.listen-address=:9101

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image1.png" style="width:0.25in;height:0.25in" /> | Изменение состава метрик либо адреса веб-интерфейса целесообразнее сохранить в файле сервиса «node_exporter.service». Иначе при перезагрузке ОС настройки компонента вернутся к изначальным, хранящимся в файле сервиса |
|----|----|

Ручной запуск утилиты производится командой:

> ./jatoba\<ver\>\_node_exporter

Никакой конфигурации экспортера не требуется.

# Установка экспортера «jatoba\*\_postgres_exporter»

Экспортер «jatoba\*postgres_exporter» должен быть установлен на всех целевых СУБД.

С помощью данного экспортера снимаются метрики с сервера PostgreSQL (Jatoba). Это агент, написанный на языке Golang, подключающийся к заданному источнику данных (БД) и по запросу сервера «Prometheus» возвращающий ему значения метрик. Состав метрик заранее предопределен и их значения вычисляются с помощью фиксированных  
SQL-запросов.

## Установка утилиты и службы «jatoba\*\_postgres_exporter»

Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

> apt-get install jatoba\<ver\>-postgres-exporter

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image17.png" style="width:6.65584in;height:1.44097in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-08 13-55-31.png" />

Рисунок 5.1 – Установка пакета jatoba\*-postgres-exporter

В результате установки пакета будет создан:

- 

> файл запуска по адресу: /usr/jatoba-\<ver\>/bin/postgres_exporter

- 

> конфигурационный файл по адресу:   /usr/jatoba-\<ver\>/monitoring/default/postgres_exporter

- 

пользователь ОС «postgres_exporter_usr», от которого будет производиться запуск сервиса.У данного пользователя нет интерактивной оболочки для входа.

## Создание пользователя СУБД «postgres_exporter»

Для соединения утилиты с СУБД создать пользователя СУБД «postgres_exporter» SQL-командой:

> CREATE ROLE postgres_exporter SUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'Password';

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image18.png" style="width:6.97848in;height:2.04348in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-25 14-04-19.png" />

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image2.png" style="width:0.25139in;height:0.25139in" /> | В рассматриваемом примере пользователь СУБД «postgres_exporter» является привилегированным пользователем |
|----|----|

Рисунок 5.2 – Создание роли «postgres_exporter»

## Настройка переменных окружения

Дальнейшая настройка утилиты требует внесения параметров подключения в файле переменных окружения «postgres_exporter», командой:

> gedit /usr/jatoba-5/monitoring/default/postgres_exporter

Необходимо настроить имя пользователя, пароль и параметры SSL-подключения в файле переменных окружения «postgres_exporter».

Строка подключения выполнена в формате схемы URL. Основная форма URI подключения имеет синтаксис:

> postgresql://\[пользователь@\]\[сервер\]\[/база_данных\]\[?указание_параметра\]
>
> где пользователь:
>
> имя_пользователя\[:пароль\]
>
> и сервер:
>
> \[узел\]\[:порт\]\[,...\]
>
> и указание_параметра:
>
> имя=значение\[&...\]

В качестве обозначения схемы URI может использоваться postgresql:// или postgres://. Остальные части URI являются необязательными. В следующих примерах показан допустимый синтаксис URI:

> postgresql://
>
> postgresql://localhost
>
> postgresql://localhost:5433
>
> postgresql://localhost/mydb
>
> postgresql://user@localhost
>
> postgresql://user:secret@localhost
>
> postgresql://other@localhost/otherdb?connect_timeout=10&application_name=myapp
>
> postgresql://host1:123,host2:456/somedb?target_session_attrs=any&application_name=myapp

В рассматриваемом примере на целевой СУБД:

- 

> u602doc-pgp01 IP - 10.116.102.45 строка подключения утилиты к СУБД имеет следующий вид:DATA_SOURCE_NAME="postgresql://postgres_exporter:Password@10.116.102.45:5432/postgres?sslmode=disable"

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image1.png" style="width:0.25in;height:0.25in" /> | Обратите внимание, что необходимо прописывать общий, а не локальный адрес сетевого интерфейса |
|----|----|

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image19.png" style="width:7.088in;height:1.12284in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-08 15-20-27.png" />

Рисунок 5.3 – Содержание файла «postgres_exporter.default» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- 

> u602doc-ldap01 IP-10.116.102.47 строка подключения утилиты к СУБД имеет следующий вид:DATA_SOURCE_NAME="postgresql://postgres_exporter:Password@10.116.102.47:5432/postgres?sslmode=disable"

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image20.png" style="width:6.74675in;height:1.06429in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-08 15-26-08.png" />

Рисунок 5.4– Содержание файла «postgres_exporter.default» на целевой СУБД u602doc-ldap01 IP-10.116.102.47

## Запуск утилиты «postgres_exporter»

Обновить конфигурацию system командой:

> \# sudo systemctl daemon-reload

Запустить службу экспортера, включить ее автозапуск и проверить статус работы:

> \# systemctl start jatoba\<ver\>\_postgres_exporter
>
> \# systemctl enable jatoba\<ver\>\_postgres_exporter
>
> \# systemctl status jatoba\<ver\>\_postgres_exporter

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image21.png" style="width:7.12299in;height:2.24026in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-08 15-34-39.png" />

Рисунок 5.5 – Запуск и вывод статуса службы «postgres_exporter»

Чтобы проверить статус работы экспортера нужно в браузере открыть веб-интерфейс экспортера:

\# localhost:9187

\# http://0.0.0.0:9187

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image22.png" style="width:7.19403in;height:2.10746in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic2\Screenshot from 2024-01-19 04-47-32.png" />

Рисунок 5.6 – Веб-интерфейс «postgres_exporter»

В рассматриваемом примере на целевой СУБД:

- 

u602doc-pgp01 IP - 10.116.102.45 веб-интерфейс утилиты «node_exporter» проверяется по URL:# http://10.116.102.45:9187

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image23.png" style="width:7.16887in;height:2.01023in" />

Рисунок 5.7 – Веб-интерфейс «postgres_exporter» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- 

u602doc-ldap01 IP-10.116.102.47 веб-интерфейс утилиты «node_exporter» проверяется по URL:# http://10.116.102.47:9187

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image24.png" style="width:7.05893in;height:2.02712in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-25 15-56-47.png" />

Рисунок 5.8 – Веб-интерфейс «postgres_exporter» на целевой СУБД u602doc-ldap01 IP-10.116.102.47

При успешном подключении к БД на странице localhost:9187/metrics будет показан список значений метрик с префиксом «pg\_» в имени.

Если необходимо изменить значение адреса веб-интерфейса (по умолчанию :9187), postgres_exporter запускается с опцией --web.listen-address, например:

> export DATA_SOURCE_NAME=postgresql://postgres:secret@127.0.0.1
>
> ./jatoba\*\_postgres_exporter --web.listen-address=:9188

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image1.png" style="width:0.25in;height:0.25in" /> | Изменение адреса веб-интерфейса целесообразнее сохранить в файле сервиса «postgres_exporter». Иначе при перезагрузке ОС настройки компонента вернуться к изначальным, хранящимся в файле сервиса. |
|----|----|

Полный список опций командной строки postgres_exporter можно вывести, если запустить его с опцией --help.

Компонент «postgres_exporter» можно запускать из Docker, если использовать готовые образы из репозитария <https://quay.io/repository/prometheuscommunity/postgres-exporter>.

Например:

> docker pull quay.io/prometheuscommunity/postgres-exporter:latest
>
> docker run –p 9187:9187 -e DATA_SOURCE_NAME="postgresql://postgres:sql@IP/" --name postgres-exporter quay.io/prometheuscommunity/postgres-exporter

# Установка экспортера «jatoba\*\_sql_exporter»

Экспортер «jatoba\*\_SQL_exporter» должен быть установлен на всех целевых СУБД.

Данный экспортер можно использовать для расширения состава метрик, снимаемых с сервера PostgreSQL стандартным экспортером «jatoba\*\_postgres_exporter» (см. п. 5).

Это агент, также написанный на языке Golang, который подключается к заданному источнику данных (БД) и забирает с него метрики по pull-запросу сервера «Prometheus».

Состав собираемых метрик и SQL-запросов, которые их возвращают, полностью конфигурируемы пользователем. Используемые SQL-запросы группируются в так называемые коллекторы, состав которых легко может быть расширен. Также в коллекторе для каждого возвращаемого запросом поля задается мэппинг на соответствующую метрику.

## Установка утилиты и службы «sql_exporter»

Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

> apt-get install jatoba\<ver\>-sql-exporter

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image25.png" style="width:6.664in;height:1.47917in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-08 16-28-27.png" />

Рисунок 6.1 – Установка пакета «jatoba\*-sql-exporter»

В результате установки пакета будет создан:

- 

> файл запуска по адресу: /usr/jatoba-\<ver\>/bin/sql_exporter

- 

> конфигурационный файл по адресу:   /usr/jatoba-\<ver\>/monitoring/default/sql_exporter.yml

- 

> конфигурационный файл переменных окружения по адресу/usr/jatoba-5/monitoring/default/sql_exporter

- 

пользователь ОС «sql_exporter_usr», от которого будет производиться запуск сервиса.У данного пользователя нет интерактивной оболочки для входа.

## Настройка переменных окружения

Проверить параметры экспортера в файле переменных окружения «sql_exporter», выполнив команду редактирования:

> gedit /usr/jatoba-5/monitoring/default/sql_exporter

Основным из параметров является путь к конфигурационному файлу «sql_exporter.yml» в строке параметра CONF_FILE.

> CONF_FILE=/etc/sql_exporter/sql_exporter.yml

Настройка и расположение файла «sql_exporter.yml» приведены в п. 6.4 настоящего документа.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image26.png" style="width:6.768in;height:1.75903in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-08 17-39-08.png" />

Рисунок 6.2 – Содержание файла переменных окружения «sql_exporter»

## Создание пользователя СУБД «sql_exporter»

Для соединения утилиты с СУБД необходимо создать пользователя СУБД «sql_exporter» SQL-командой:

> CREATE ROLE sql_exporter SUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'Password';

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image27.png" style="width:7.11404in;height:2.15278in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-25 16-17-05.png" />

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image2.png" style="width:0.25139in;height:0.25139in" /> | В рассматриваемом примере пользователь СУБД «sql_exporter» является привилегированным пользователем |
|----|----|

Рисунок 6.3 – Создание роли «sql_exporter»

## Настройка параметров экспортера и подключения к БД в файле «sql_exporter.yml»

Основным параметром для настройки параметров экспортера и подключения к БД в файле «sql_exporter.yml» является параметр «data_source_name».

Требуется открыть файл для редактирования командами:

> gedit /usr/jatoba-5/monitoring/default/sql_exporter.yml

Строка подключения выполнена в формате схемы URL. Синтаксис строки описан в п. 5.3 настоящего документа.

В рассматриваемом примере на целевой СУБД:

- 

> u602doc-pgp01 IP - 10.116.102.45 строка подключения утилиты к СУБД имеет следующий вид:data_source_name: 'postgresql://sql_exporter:Password@10.116.102.45:5432/postgres?sslmode=disable'

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image1.png" style="width:0.25in;height:0.25in" /> | Обратите внимание, что необходимо прописывать общий, а не локальный адрес сетевого интерфейса |
|----|----|

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image28.png" style="width:6.75935in;height:1.34386in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-09 08-32-54.png" />

Рисунок 6.4 – Содержание файла «sql_exporter.yml», строка «data_source_name» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- 

> u602doc-ldap01 IP-10.116.102.47 строка подключения утилиты к СУБД имеет следующий вид:data_source_name: 'postgresql://sql_exporter:Password@10.116.102.47:5432/postgres?sslmode=disable'

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image29.png" style="width:6.75761in;height:1.21572in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-09 08-34-00.png" />

Рисунок 6.5 – Содержание файла «sql_exporter.yml», строка «data_source_name» на целевой СУБД u602doc-ldap01 IP-10.116.102.47

Сохранить внесенные изменения.

В дистрибутиве содержится файл с подготовленными метриками для мониторинга СУБД «Jatoba» «postgres.collector.yml», который по умолчанию использует «jatoba\*\_SQL_exporter».

## Запуск утилиты «jatoba\*\_sql_exporter»

Обновить конфигурацию systemd:

> \# systemctl daemon-reload

Запустить службу экспортера, включить ее в автозапуск и проверить статус работы:

> \# systemctl start jatoba5_sql_exporter
>
> \# systemctl enable jatoba5_sql_exporter
>
> \# systemctl status jatoba5_sql_exporter

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image30.png" style="width:6.672in;height:1.96736in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-09 08-39-23.png" />

Рисунок 6.6 – Установка и запуск службы «sql_exporter»

Чтобы проверить статус работы экспортера, нужно в браузере открыть веб-интерфейс экспортера:

> \# localhost:9399
>
> \# http://0.0.0.0:9399

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image31.png" style="width:7.06609in;height:1.32538in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-23 03-45-25.png" />

Рисунок 6.7 – Веб-интерфейс «sql_exporter»

В рассматриваемом примере на целевой СУБД:

- 

> u602doc-pgp01 IP - 10.116.102.45 веб-интерфейс утилиты «sql_exporter» проверяется по URL:# http://10.116.102.45:9399

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image32.png" style="width:7.08681in;height:1.08255in" />

Рисунок 6.8 – Веб-интерфейс «sql_exporter» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- 

> u602doc-ldap01 IP-10.116.102.47 веб-интерфейс утилиты «node_exporter» проверяется по URL:# http://10.116.102.47:9399

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image33.png" style="width:7.08651in;height:1.18738in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-26 10-47-56.png" />

Рисунок 6.9 – Веб-интерфейс «sql_exporter» на целевой СУБД u602doc-ldap01 IP-10.116.102.47

При успешном подключении к БД и отсутствии ошибок в конфигурации на странице localhost:9399/metrics будет показан список значений снятых метрик.

Если необходимо изменить значения адреса веб-интерфейса (:9399), jatoba\*\_sql_exporter запускается с опцией -web.listen-address, например:

> ./jatoba5_sql_exporter -web.listen-address :9398

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image1.png" style="width:0.25in;height:0.25in" /> | Изменение адреса веб-интерфейса целесообразнее сохранить в файле сервиса «sql_exporter». Иначе при перезагрузке ОС настройки компонента вернуться к изначальным, хранящимся в файле сервиса. |
|----|----|

Полный список опций командной строки sql_exporter можно вывести, если запустить его с опцией -help.

sql_exporter можно запускать из Docker, если использовать готовый образ из репозитария <https://hub.docker.com/r/burningalchemist/sql_exporter>. Например

> docker pull burningalchemist/jatoba5_sql_exporter
>
> docker run –p 9399:9399 --name jatoba5_sql_exporter burningalchemist/jatoba5_sql_exporter

# Система «Prometheus»

«Prometheus» – система мониторинга различных программных систем и сервисов. «Prometheus» собирает и сохраняет метрики в виде временных рядов данных. Информация о каждой метрике хранится вместе с отметкой времени, когда она была записана, и опционным набором меток (labels), представляющих пары «ключ: значение». Сами метрики являются числовыми измерениями, которые по типу могут быть монотонно возрастающими значениями счетчиков (counter) или произвольно изменяющимися значениями датчиков (gauge).

Основными компонентами системы «Prometheus» являются:

- 
- 
- 

Сервер «Prometheus», который собирает и сохраняет метрики в своей встроенной базе данных TSDB;Экспортеры данных, которые по запросу сервера снимают метрики с заданных сервисов (targets) и возвращают их серверу;Web UI, с помощью которого можно исследовать собранные метрики с помощью языка запросов promQL.Документация по использованию системы находится на официальном сайте разработчика по адресу: <https://prometheus.io>.

## Установка системы «Prometheus»

Документация по использованию системы находится на официальном сайте разработчика по адресу: <https://prometheus.io>.

Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

> apt-get install jatoba\<ver\>-prometheus

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image34.png" style="width:6.656in;height:1.4875in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-09 13-46-46.png" />

Рисунок 7.1 – Установка пакета «jatoba\<ver\>-prometheus»

В результате установки пакета будет создан:

- 

> файл переменных окружения сервиса по адресу:usr/jatoba-5/monitoring/default/prometheus

- 

> файл сервиса по адресуusr/lib/system/system/jatoba-5_prometheus.service

- 

> файл конфигурации, адаптированный под использование с СУБД «Jatoba» по адресу:usr/jatoba-5/monitoring/default/prometheus.yml

- 

> база данных по адресу:/opt/prometheus

- 

> служебные директории веб-консоли по адресу:usr/jatoba-5/monitoring/prometheus

- 

пользователь ОС «prometheus», от которого будет производиться запуск сервиса.У данного пользователя нет интерактивной оболочки для входа и нет домашней директории.

## Конфигурация системы «Prometheus»

Необходимо задать конфигурацию сервера в формате YAML выполнив команду редактирования:

> gedit usr/jatoba-5/monitoring/default/prometheus.yml

В конфигурации важными параметрами являются:

- 
- 
- 

частота опроса метрик (scrape_interval);время ожидания ответа (scrape_timeout);HTTP, IP адреса (targets).Для параметра «targets» возможно указать несколько целей, для получения метрик с экспортера, при этом параметр будет иметь синтаксис:

> \- targets: \['X.X.X.X:port', 'X.X.X.X:port'\]

В рассматриваемом примере, в конфигурационном файле prometheus.yml устанавливаются IP-адреса серверов, находящихся под наблюдением.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image1.png" style="width:0.25in;height:0.25in" /> | Обратите внимание, что необходимо прописывать общий, а не локальный адрес сетевого интерфейса |
|----|----|

> \# стандартный экспортер данных для PostgreSQL
>
> \- job_name: "postgres-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.102.45:9187','10.116.102.47:9187'\]
>
> labels:
>
> alias: postgres

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image35.png" style="width:6.776in;height:1.52708in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-09 14-44-29.png" />

Рисунок 7.2 - Стандартный экспортер данных для PostgreSQL

> \# экспортер данных для SQL
>
> \- job_name: "sql-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.102.45:9399','10.116.102.47:9399'\]
>
> labels:
>
> alias: postgres

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image36.png" style="width:6.76in;height:1.79167in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-09 14-46-42.png" />

Рисунок 7.3 - Экспортер данных для SQL

> \# экспортер данных для Linux
>
> \- job_name: "node-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.102.45:9100','10.116.102.47:9100'\]
>
> labels:
>
> alias: os

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image37.png" style="width:6.768in;height:1.784in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-09 14-49-08.png" />

Рисунок 7.4 – экспортер данных для Linux

Обработка критических событий и вычисление rules не заданы, хотя соответствующие блоки присутствуют в конфигурации.

Полное описание параметров конфигурации сервера приведено в документации <https://prometheus.io/docs/prometheus/latest/configuration/configuration/>

## Запуск системы «Prometheus»

Перед запуском сервиса требуется удостоверится в корректности содержания файла сервиса.

Просмотр файла осуществляется командой в терминале ОС:

> gedit usr/lib/systemd/system/jatoba-5_prometheus.service

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image38.png" style="width:6.736in;height:3.176in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-11 08-31-02.png" />

Рисунок 7.5 – Содержание файла сервиса «jatoba-5_prometheus.service»

Обновить конфигурацию systemd:

> \# systemctl daemon-reload

Запустить службу система, включить ее в автозапуск и проверить статус работы:

> \# systemctl start jatoba5_prometheus
>
> \# systemctl enable jatoba5_prometheus
>
> \# systemctl status jatoba5_prometheus

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image39.png" style="width:6.68in;height:2.10338in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-09 14-57-43.png" />

Рисунок 7.6 Установка и запуск службы системы «Prometheus»

Статус запущенного сервера «Prometheus» можно проверить с помощью web UI, открыв в браузере страницу с адресом [http://localhost:9090](http://localhost:9090/).

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image40.png" style="width:6.95461in;height:2.40642in" />

Рисунок 7.7 – Веб интерфейс системы «Prometheus»

На вкладке «Status» можно посмотреть текущую конфигурацию и опции запуска сервера, статус встроенной базы данных tsdb и заданные цели (targets).

В окне «Expression» можно ввести название метрики или выражение на языке promQL и, нажатием на кнопку «Execute», отобразить результаты в виде таблицы или графика.

Руководство по языку запросов promQL располагается по адресу: <https://prometheus.io/docs/prometheus/latest/querying/basics/>

Полный список собираемых метрик можно открыть при нажатии на кнопку «Open Metrics Explorer» слева от кнопки «Execute» или отобразить в окне «Expressions» при вводе первых символов наименования метрики, если включена опция автодополнения.

Список значений собираемых метрик для каждой цели можно отобразить на странице веб-интерфейса соответствующего экспортера данных, например, localhost:9090/metrics.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image41.png" style="width:7.03406in;height:4.5in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-25 03-23-46.png" />

Рисунок 7.8 – Список значений собираемых метрик

В рассматриваемом примере подключение к системе «Prometheus» используется адрес:

> http://10.116.102.41:9090/

Перейдя в меню «Target» отразятся статистические данные наблюдаемых СУБД.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image42.png" style="width:7.08681in;height:4.53034in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-02 08-42-24.png" />

Рисунок 7.9 – Страница целей системы «Prometheus»

Система «Prometheus» может быть запущен в Docker с использованием готового образа из репозитория, например:

> docker pull prom/prometheus-linux-amd64
>
> docker run –p 9090:9090 --name prometheus prom/prometheus-linux-amd64

# Утилита «Alertmanager»

Alertmanager — это инструмент для управления и обработки оповещений в системе мониторинга Prometheus. Он выполняет следующие функции:

- 
- 
- 
- 

## группировка оповещений: группирует похожие оповещения для снижения шума и предотвращения дублирования.удаление дубликатов: гарантирует отправку уникальных оповещений без повторений.маршрутизация и приглушение оповещений: позволяет определять правила и конфигурации для маршрутизации оповещений нужным получателям на основе их важности или других критериев. Также можно временно приглушить оповещения во время обслуживания или определённых периодов.уведомление о тревоге: интегрируется с различными каналами связи, такими как электронная почта, Slack, PagerDuty и другие, позволяя отправлять уведомления о тревогах нужным людям или командам.Установка утилиты и службы «alertmanager»

Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

> apt-get install jatoba\<ver\>-alertmanager

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image43.png" style="width:6.68in;height:1.29514in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-10 08-52-22.png" />

Рисунок 8.1 – Установка пакета «jatoba\*-alertmanager»

В результате установки пакета будет создан:

- 

файл запуска по адресу:/usr/jatoba-\<ver\>/bin/alertmanager

- 

конфигурационный файл по адресу: /usr/jatoba-\<ver\>/monitoring/default/alertmanager.yml

- 

служба по адресу: /usr/lib/systemd/jatoba\<ver\>\_alertmanager.service

- 

пользователь ОС «alertmanager», от которого будет производиться запуск сервиса.У данного пользователя нет интерактивной оболочки для входа и нет домашней директории.

## Настройка параметров утилиты файле «alertmanager.yml»

После установки пакета в конфигурационном файле будет установлены параметры по умолчанию.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image44.png" style="width:6.744in;height:2.60751in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-10 11-58-22.png" />

Рисунок 8.2 – Параметры по умолчанию

Редактирование конфигурационного файла выполняется командой:

gedit /usr/jatoba-\<ver\>/monitoring/default/alertmanager.yml

В узле «global» необходимо указать данные для подключения к почтовому серверу. Целесообразно использовать специальную, неперсонофицированную, техническую учетную запись почты, от имени которой будет рассылаться предупреждения.

В узле route указываются настройки агрегирования предупреждений.

В узле «receivers» в узле «email_general» указываются настройки получателя. Используется общий узел для всех получателей, email получателя подставляется из метки «emailto» с помощью шаблона.

global:

smtp_smarthost: mail.domain.ru:587

smtp_from: domain_name@domain.ru

smtp_auth_user_name: user_name@domain.ru

smtp_auth_password: password

smtp_require_tls: true

route:

receiver: email_general

group_by: \[emailto\]

group_wait: 30s

group_interval: 5m

repeat_interval: 3h

receivers:

\- name: email_general

email_configs:

\- send_resolved: true

to: '{{ .CommonLabels.emailto }}'

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image45.png" style="width:6.768in;height:2.91944in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-10 12-14-49.png" />

Рисунок 8.3 - Конфигурационного файла «alertmanager.yml»

## Запуск утилиты «alertmanager»

Обновить конфигурацию system командой:

> \# sudo systemctl daemon-reload

Запустить службу утилиты, включить ее автозапуск и проверить статус работы:

> \# systemctl start jatoba\<ver\>\_alertmanager
>
> \# systemctl enable jatoba\<ver\>\_alertmanager
>
> \# systemctl status jatoba\<ver\>\_alertmanager

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image46.png" style="width:6.672in;height:1.95903in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-10 12-34-36.png" />

Рисунок 8.4 - Запуск и вывод статуса службы «jatoba\*\_alertmanager»

Чтобы проверить статус работы утилиты, нужно в браузере открыть веб-интерфейс утилиты «Alertmanager»:

\# localhost:9093

\# <http://0.0.0.0:9093>

\# http://\<ip\>:9093

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image47.png" style="width:7.00467in;height:2.84003in" />

Рисунок 8.5 – Веб-интерфейс утилиты «alertmanager»

На данном шаге конфигурирование утилиты не закончено. Проверена, только работоспособность. Интеграция с другими компонентами описана в разделе 9 «Подключение к JDS».

# Подключение к JDS

Подключение хранилища системы «Prometheus» к компоненту «Jatoba data safe» для отображения в разделе «Мониторинг» описано в документе «Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe», в пункте «Источники данных».

Для настройки «Уведомлений» о контролируемых значениях СУБД требуется сконфигурировать 3 компонента, такие как система «Prometheus», утилита «Alertmanager» и компоненты пользовательского веб-интерфейса для администраторов «Jatoba data safe» (JDS).

Последовательность действий будет следующая.

Настраивается SSH-соединение на хосте и/или с хостом с установленной системой «Prometheus» (см. п. 9.1).

В разделе «Настройки» компонента JDS, во вкладке «Источник данных» созданное подключение к системе «Prometheus» дополняется параметрами «Настройки конфигурации предупреждений» (уведомлений).

В этой настройке указывается, IP адрес системы «Prometheus», порт подключения, пользователь и путь к файлу с правилами уведомлений. В последствии это имя файла будет использовано в конфигурировании системы «Prometheus».

Файл с правилами уведомлений предварительно не создаётся и появляется по вышеуказанному пути. Поэтому для его создания требуется создать уведомление в разделе «Мониторинг» в любом из дашбордов.

На хосте с системой «Prometheus» в конфигурационном файле

> usr/jatoba-5/monitoring/default/prometheus.yml

связать систему «Prometheus» и утилиту «Alertmanager».

## Настройка SSH-соединения

Настройка SSH-соединения производится в обязательном порядке для любой архитектуры компонентов. В том числе, если утилита «Alertmanager», система «Prometheus» и JDS установлены на одном хосте.

Необходимо настроить SSH-соединение с хоста компонента JDS на сервер с развернутой системой «Prometheus». Соединение будет использоваться компонентом JDS для копирования конфигурационного файла с правилами предупреждений.

В настройках SSH-сервера должны быть разрешены локальные подключения и подключения от имени и с правами пользователя «root».

Следует выполнить следующие действия:

- 

создать папку пользователя, под которым работает JDS:sudo -s

mkdir /home/jds

chown jds /home/jds

exit

- 

сгенерировать ключи под пользователем JDS, скопировать на хост с системой «Prometheus»:sudo -u jds /usr/bin/bash

ssh-keygen

(задать пустой пароль)

ssh-copy-id root@IP

(yes)

- 

проверить соединение (должно соединиться без запроса пароля):ssh root@IP

exit

exit

## Конфигурирование JDS

**Вкладка «Источник данных»**

На хосте с установленным компонентом JDS перейти в раздел «Настройки». Созданной подключение к системе «Prometheus» изменить, дополнив параметрами «Настройки конфигурации предупреждений» (уведомлений).

В этой настройке указывается:

- 
- 
- 
- 

IP адрес системы «Prometheus»;порт подключения – 22, соответствующий SSH-подключению;пользователь – root;путь к файлу с правилами уведомлений: /usr/jatoba-5/monitoring/default/alertrules.yml

В последствии это имя файла будет использовано в конфигурировании системы «Prometheus».

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image48.png" style="width:7.08681in;height:4.53472in" />

Рисунок 9.1 - «Настройки конфигурации предупреждений»

**Раздел «Мониторинг»**

В разделе «Мониторинг» создав уведомление в любом из дашбордов с динамическими данными будет сформирован файл с правилами уведомлений по пути указанному в настройках «Источника данных» в сформированном подключении к системе «Prometheus»:

/usr/jatoba-5/monitoring/default/alertrules.yml

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image49.png" style="width:7.08681in;height:4.53056in" />

Рисунок 9.2 – Создание уведомления в компоненте JDS

## Настройка связки системы «Prometheus» и утилиты «Alertmanager»

Имея данные конфигурации и конфигурационный файл уведомлений можно приступить к связке системы «Prometheus» и утилиты «Alertmanager», для чего надо выполнить команду редактирования конфигурационного файла системы «Prometheus»:

> gedit usr/jatoba-5/monitoring/default/prometheus.yml

Соответствующий раздел «Alertmanager configuration» находится в начале файла и параметры надо внести именно в него. Вставка параметров в конец файла может привести к ошибке.

В узле «targets» указывается хост или хосты с установленной утилитой «Alertmanager»

В узле rule_files необходимо указать имя конфигурационного файла уведомлений

alerting:

alertmanagers:

\- static_configs:

\- targets:

\- IP\*\*.\*\*\*.\*\*\*.\*\*:9093

rule_files:

\- "alertrules.yml"

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image50.png" style="width:6.752in;height:3.09514in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-07-11 14-06-29.png" />

Рисунок 9.3 - Раздел «Alertmanager configuration»

Проверить корректность введенных параметров возможно командами:

\# cd /usr/jatoba-5/bin#

\# ./promtool check config /usr/jatoba-5/monitoring/default/prometheus.yml

Если параметры верны, перезапустить службу:

\# systemctl restart jatoba5_prometheus

На данном шаге конфигурирование раздела «Мониторинг» компонента JDS закончено.

# Система «Grafana»

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image2.png" style="width:0.25139in;height:0.25139in" /> | Установка системы «Grafana» для работы компонента «Jatoba data safe» не требуется |
|----|----|

«Grafana» – графическая система визуализации данных, интегрируемая с системой «Prometheus». Сервер «Grafana» может быть установлен на любом компьютере, с которого есть доступ к серверу «Prometheus».

## Установка системы «Grafana»

На официальном сайте <https://grafana.com/grafana/download> доступны сборки «Grafana» для разных операционных систем, включая Windows и образы Docker.

Документация по установке системы находится на официальном сайте разработчика по адресу: <https://grafana.com/docs/grafana/latest/setup-grafana/installation/debian/>.

Для каждого варианта на сайте приведены подробные инструкции по установке.

Например, для запуска образа «Grafana» в Docker-контейнере требуется выполнить:

> docker run -d --name=grafana -p 3000:3000 grafana/grafana-enterprise

Пример установки системы приведен в Приложении Приложение 1 настоящего документа.

## Запуск системы «Grafana»

По умолчанию веб-интерфейс «Grafana» имеет адрес <http://localhost:3000>. Открыв в браузере эту страницу, при первом входе, потребуется ввести имя пользователя «admin» и пароль «admin».

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image51.png" style="width:6.83582in;height:4.14097in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-29 08-20-39.png" />

Рисунок 10.1 – Стартовое окно

В следующем окне система предложит сменить пароль, заданный по умолчанию.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image52.png" style="width:6.85012in;height:4.1194in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-29 22-02-20.png" />

Рисунок 10.2 – Окно смены пароля

Открыть боковое меню, нажав по значку главного меню в левом верхнем углу.

Нажать в открывшемся меню «Connections» → «Data Sources».

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image53.png" style="width:6.84306in;height:3.31343in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-29 22-21-58.png" />

Рисунок 10.3 – Расположение меню «Data Sources»

Нажать кнопку «Add new data source» в верхнем правом углу и выбрать в списке сервер «Prometheus».

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image54.png" style="width:6.84328in;height:3.11111in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-29 22-28-30.png" />

Рисунок 10.4 – Выбор сервера «Prometheus»

В следующем окне, задайте URL сервера «Prometheus» (например, <http://0.0.0.0:9090/>).

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th>При запуске системы «Grafana» в Docker необходимо указывать реальный<br />
IP-адрес.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

При необходимости задаются прочие параметры.

По окончании настройки, нажать кнопку «Save and test», расположенную внизу окна, чтобы сохранить изменения и проверить доступ к источнику данных.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image55.png" style="width:6.84271in;height:2.76866in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-29 22-36-26.png" />

Рисунок 10.5 – Задание URL сервера «Prometheus»

При успешной проверке источник данных будет сохранен в системе и можно будет перейти к созданию дашбордов.

## Создание дашбордов

Описание дашбордов и действий с ними приведено в официальной документации на сайте разработчика по адресу: <https://grafana.com/docs/grafana/latest/dashboards/>

## Импорт дашбордов

На дистрибутивном диске содержится архив jatoba_dashboard.tar, который требуется распаковать в доступный каталог. В архиве хранится файл «Мониторинг основных показателей работы сервера БД-1703516982482.json» с подготовленными дашбордами.

Импорт дашбордов выполняется следующими шагами:

- 
- 

Открыть меню «Dashboards», расположенном слева вверху.Нажать кнопку «New» и выбрать опцию «Import» в выпадающем меню.<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image56.png" style="width:7.04028in;height:2.51493in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-29 23-32-40.png" />

Рисунок 10.6 – Выбор опции импорт

Выполнить загрузку из файла «Мониторинг основных показателей работы сервера БД-1703516982482.json» и сервер «Prometheus».

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image57.png" style="width:7.00413in;height:4.26119in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-29 23-37-10.png" />

Рисунок 10.7 – Импорт файла дашбордов

В результате будет выведен группированный список подготовленных дашбордов.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image58.png" style="width:7.01067in;height:3.30597in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-29 23-40-41.png" />

Рисунок 10.8 – Список дашбордов

На данном шаге формирование дашбордов закончено.

# Дашборды

В результате установки экспортеров и импорта дашбордов получен готовый, преднастроенный механизм мониторинга СУБД. Перечень импортированных дашбордов приведен в таблице Таблица 11.1.

| **Раздел** | **Метрика** |
|:---|:---|
| **Общий обзор** |  |
|  | Наименование хоста |
|  | Длительность работы сервера |
|  | Длительность работы СУБД |
|  | Количество сессий |
|  | Среднее время выполнения запросов |
|  | Утилизация CPU |
|  | Использование ОЗУ |
|  | Утилизация I/O (производительность) |
|  | Количество транзакций и запросов /сек (tps.qps) |
|  | Дисковый ввод/вывод, байт/сек |
|  | Количество дисковых iops/сек |
|  | Сетевой ввод/вывод, байт/сек |
|  | Размер БД, байт |
|  | Доля чтения из кэша (% попадания в кэш) |
|  | Возраст незамороженных транзакций |
| **Информация о сервере БД** |  |
|  | Hostname |
|  | OS version (Версия ОС) |
|  | Server uptime |
|  | CPU cores |
|  | Total memory (Размер оперативной памяти) |
|  | Used memory |
|  | Disk volume (Размер файловой системы) |
|  | Free space (Свободное место на дисках) |
|  | Network speed |
|  | DB version |
|  | DB uptime |
| **Системные метрики** |  |
|  | Утилизация CPU |
|  | Загрузка CPU процессами (system load 1/5/15 min) |
|  | Использование ОЗУ экземпляром СУБД, % |
|  | Использование ОЗУ экземпляром СУБД, байт |
|  | Дисковый ввод/вывод, байт/сек |
|  | Сетевой ввод/вывод, байт/сек |
|  | Количество дисковых iops/сек |
|  | Утилизация I/O (произв-ть), % |
| **Доступность БД извне** |  |
|  | Среднее время выполнения запросов суммарно по всем БД, мс |
|  | Среднее время выполнения запросов по указанным БД, мс |
| **Подключенные клиенты и их деятельность** |  |
|  | Количество сессий |
|  | Количество сессий по статусам |
|  | Максимальная продолжительность запросов / сессий / ожиданий в сек. |
|  | Количество заблокированных и ожидающих сессий |
|  | Наибольшая длительность сессии в "idle in transaction", сек |
|  | Суммарная продолжительность ожидания заблокированными сессиями, сек. |
| **Детальная информация о блокировках сессиями друг друга** |  |
|  | Блокирование сессиями друг друга |
| **Работа с данными** |  |
|  | Размеры БД, байт |
|  | Изменение размеров БД, байт/сек |
|  | Количество транзакций и запросов / сек (tps, qps) |
|  | Количество транзакций и их откатов |
|  | Работа со строками данных, tuples / сек. |
|  | Блокировки / сек. |
|  | Доля чтения из кэша (% попадания в кэш) |
|  | Использование счетчика транзакций - age(datfrozenxid) |
|  | Наибольшая длительность транзакции (без автовакуумов), сек. |
| **Детальная информация о долгих транзакциях** |  |
|  | Информация о 10-ти самых долгих транзакциях |
| **Детальная информация о долгих транзакциях** |  |
|  | Информация о 10-ти самых долгих транзакциях |
| **Дополнительная аналитика по запросам и блокировкам** |  |
|  | TOP-10 запросов по частоте выполнения (calls) |
|  | TOP-10 запросов по времени выполнения (total_time), мс |
|  | Среднее время ожидания назначения блокировки, сек. |
|  | Назначенные блокировки в зависимости от режима |
|  | Наибольшая длительность и кол-во автовакуумов, сек |
|  | Интенсивность записи буферов на диск, буф./сек. |
|  | Количество контрольных точек / сек. |
|  | Длительность обработки контрольных точек, мс |
|  | Запись во временные файлы |
|  | Deadlocks и конфликты |
|  | Объем WAL, байт |

Таблица 11.1 – Перечень импортированных дашбордов

# 

<span id="_Toc195525335" class="anchor"></span>Пример установки системы «Grafana»

Для установки системы «Grafana» требуется выполнить следующие шаги:

1.  

> Установить пакет «musl»:apt-get install -y adduser libfontconfig1 musl

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image59.png" style="width:7.07375in;height:2.10448in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-29 06-21-57.png" />

Рисунок 1.1 – Установка пакета «musl»

2.  

> Установить систему «grafana» из пакета командой:sudo dpkg -i grafana_10.1.4_amd64.deb

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image60.png" style="width:7.00735in;height:3.71411in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-29 06-24-07.png" />

Рисунок 1.2 – Установка системы «Grafana»

В процессе установки будет:

- 
- 

3.  

> создан пользователь «grafana»;служба «grafana-server» установит себя в автозагрузку.Запустить службу и проверить ее статус:systemctl start grafana-server
>
> systemctl status grafana-server

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/monitoring/media/image61.png" style="width:7.11147in;height:2.56618in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-01-29 06-42-48.png" />

Рисунок 1.3 – Запуск и проверка статуса службы «grafana-server»

4.  

Для того, чтобы убедиться в работоспособности системы «Grafana» работает, необходимо зайти на порт 3000 по адресу сервера, на котором установлена система.Например, можно использовать любой текстовый браузер на сервере:

> \# lynx <http://0.0.0.0:3000>
>
> \# w3m <http://0.0.0.0:3000>

# 

<span id="_Toc195525336" class="anchor"></span>Термины и определения@ - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как, «коммерческое эт» (англ. «commercial ат»).

& - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как, «коммерческое и» (амперсанд) (англ. ampersand)

= - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как, «равно» (англ. equals SIGH).

? - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как, «вопросительный знак» (англ. question mark).

: - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как, «двоеточие» (англ. colon).

# 

| <span id="_Toc195525337" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language |
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
