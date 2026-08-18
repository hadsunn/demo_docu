---
title: СУБД Jatoba. Описание применения
sidebar_position: 10
---

## АННОТАЦИЯ

В документе приведены сведения о защищенной системе управления базами данных «Jatoba» (далее − СУБД «Jatoba»). Настоящий документ содержит описание назначения СУБД «Jatoba», описание функциональных возможностей, условий применения и решаемых СУБД «Jatoba» задач.

В Приложении 1 приведены основные характеристики СУБД.

## НАЗНАЧЕНИЕ ПРОГРАММЫ

СУБД «Jatoba» базируется на свободном программном обеспечении СУБД «PostgreSQL».

Поддерживает все стандартные функции «PostgreSQL», описание которых доступно на официальном сайте.

СУБД «Jatoba» предназначена для управления базами данных (далее – БД) в:

- значимых объектах критической информационной инфраструктуры 1 категории;

- государственных информационных системах 1 класса защищенности;

- автоматизированных системах управления производственными и технологическими процессами 1 класса защищенности;

- информационных системах персональных данных при необходимости обеспечения 1 уровня защищенности персональных данных;

- информационных системах общего пользования II класса на базе электронно-вычислительных машин (далее – ЭВМ);

- коммерческих информационных системах, под управлением операционных систем (далее – ОС), приведенных в таблице 1.2.

## СОСТАВ СУБД

СУБД «Jatoba» реализована в виде дистрибутива с:

- версией ядра «4» (далее по тексту «J4») на основе СУБД «PostgreSQL» 14;

- версией ядра «5» (далее по тексту «J5») на основе СУБД «PostgreSQL» 15;

- версией ядра «6» (далее по тексту «J6») на основе СУБД «PostgreSQL» 16;

- версией ядра «18» (далее по тексту «J18») на основе СУБД «PostgreSQL» 18.

и образа контейнера. Перечень компонент, входящих в образ контейнера, приведен в Инструкции по настройке и использованию контейнера (таблица 2.2 – Состав образа контейнера).

Компиляция СУБД выполняется с поддержкой SSL (Secure Socket Layer). Используется библиотека OpenSSL, пакет openssl-dev, который содержит заголовочные файлы и библиотеки для компиляции с OpenSSL.

В параметрах компиляции устанавливается флаг «-lssl» который подключает библиотеку OpenSSL.

СУБД «Jatoba» поставляется в формате сертифицированной и коммерческой версии.

Данные версии подразделяются на:

- «Для использования в ИС»;

- «Jatoba 1С».

В состав СУБД «Jatoba» входят компоненты, указанные в таблице 2.1.

Таблица 2.1 – Состав компонент

<table>
<colgroup>
<col style="width: 2%" />
<col style="width: 58%" />
<col style="width: 14%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
</colgroup>
<thead>
<tr>
<th colspan="2" rowspan="2" style="text-align: left;">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2" style="text-align: left;">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4">
<p><strong>ИС</strong></p>
</th>
<th colspan="4">
<p><strong>1С</strong></p>
</th>
</tr>
<tr>
<th>
<p><strong>J4</strong></p>
</th>
<th>
<p><strong>J5</strong></p>
</th>
<th>
<p><strong>J6</strong></p>
</th>
<th>
<p><strong>J18</strong></p>
</th>
<th>
<p><strong>J4</strong></p>
</th>
<th>
<p><strong>J5</strong></p>
</th>
<th>
<p><strong>J6</strong></p>
</th>
<th>
<p><strong>J18</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" style="text-align: left;">
<p>Базовый инсталляционный пакет</p>
</td>
<td style="text-align: left;">
<p>Jatoba</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p><strong>Х</strong></p>
</td>
<td>
<p><strong>Х</strong></p>
</td>
<td>
<p><strong>Х</strong></p>
</td>
<td>
<p><strong>Х</strong></p>
</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">
<p>Генератор паролей. pwgen</p>
</td>
<td style="text-align: left;">
<p>pwgen</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">
<p>Маскирование паролей</p>
</td>
<td style="text-align: left;">
<p>ja_pwmasking</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">
<p>Поиск ближайших соседей. KNN</p>
</td>
<td style="text-align: left;">
<p>KNN</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">
<p>Компонент xid64</p>
</td>
<td style="text-align: left;">
<p>xid64</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">
<p>Сжатие данных на уровне страниц. Компонент «ja_Compression»</p>
</td>
<td style="text-align: left;">
<p>ja_Compression</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">
<p>Восстановление поврежденных WAL записей. WAL Recovery</p>
</td>
<td style="text-align: left;">
<p>ja_Wal_Recovery</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">
<p>Автоматическое создание директорий табличных пространств</p>
</td>
<td style="text-align: left;">
<p>ja_TableSpace</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">
<p>Генератор конфигурационного файла</p>
</td>
<td style="text-align: left;">
<p>ja_tune</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">
<p>Механизм автономных транзакций</p>
</td>
<td style="text-align: left;">
<p>ja_ATX</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">
<p>DataWiping: очистка файлов данных объектов доступа</p>
</td>
<td style="text-align: left;">
<p>ja_WIpe_Files</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: left;">
<p>Управление режимом работы узлов кластера.</p>
<p>Компонент «jaDog»</p>
</td>
<td style="text-align: left;">
<p>jaDog</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: left;">
<p>Контроль субъектов доступа.</p>
<p>Компонент «Jatoba data vault»</p>
</td>
<td style="text-align: left;">
<p>JDV</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: left;">
<p>Формирование отчетов по журналам СУБД. Компонент «pgBadger»</p>
</td>
<td style="text-align: left;">
<p>pgBadger</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: left;">
<p>Расширенное резервное копирование. Компонент «pg_ProBackup»</p>
</td>
<td style="text-align: left;">
<p>pg_ProBackup</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 61%" />
<col style="width: 14%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2" style="text-align: left;">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4">
<p><strong>ИС</strong></p>
</th>
<th colspan="4">
<p><strong>1С</strong></p>
</th>
</tr>
<tr>
<th>
<p><strong>J4</strong></p>
</th>
<th>
<p><strong>J5</strong></p>
</th>
<th>
<p><strong>J6</strong></p>
</th>
<th>
<p><strong>J18</strong></p>
</th>
<th>
<p><strong>J4</strong></p>
</th>
<th>
<p><strong>J5</strong></p>
</th>
<th>
<p><strong>J6</strong></p>
</th>
<th>
<p><strong>J18</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Планирование заданий СУБД.</p>
<p>Компонент «pg_Task»</p>
</td>
<td style="text-align: left;">
<p>pg_Task</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Формирование отчетов производительности СУБД. Компонент «pg_Profile»</p>
</td>
<td style="text-align: left;">
<p>pg_Profile</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Пользовательский веб-интерфейс для администраторов.</p>
<p>Компонент «Jatoba data safe»</p>
</td>
<td style="text-align: left;">
<p>Jatoba data safe</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td rowspan="5" style="text-align: left;">
<p>Компонент мониторинга запросов СУБД</p>
</td>
<td style="text-align: left;">
<p>pg-explain</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>pg-explain-db</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>pg-monitor</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>pg-monitor-collector</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>pg-monitor-</p>
<p>dispatcher</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Синхронизация учетных записей с MS Active Directory / LDAP. Компонент «ja_Sync_LDAP»</p>
</td>
<td style="text-align: left;">
<p>ja_Sync_LDAP</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Обфускация кода PL/spgSQL. Компонент «PLspgSQL»</p>
</td>
<td style="text-align: left;">
<p>PLspgSQL</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Высокопроизводительный кластер Компонент «ja_Hipe_Cluster»</p>
</td>
<td style="text-align: left;">
<p>ja_Hipe_Cluster</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Централизованный сбор записей событий СУБД. Компонент «ja_Log»</p>
</td>
<td style="text-align: left;">
<p>ja_Log</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка платформы 1С</p>
</td>
<td style="text-align: left;">
<p>1C_support</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Компонент совместимости с 1С. «fasttrun»</p>
</td>
<td style="text-align: left;">
<p>fasttrun</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 61%" />
<col style="width: 14%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2" style="text-align: left;">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4">
<p><strong>ИС</strong></p>
</th>
<th colspan="4">
<p><strong>1С</strong></p>
</th>
</tr>
<tr>
<th>
<p><strong>J4</strong></p>
</th>
<th>
<p><strong>J5</strong></p>
</th>
<th>
<p><strong>J6</strong></p>
</th>
<th>
<p><strong>J18</strong></p>
</th>
<th>
<p><strong>J4</strong></p>
</th>
<th>
<p><strong>J5</strong></p>
</th>
<th>
<p><strong>J6</strong></p>
</th>
<th>
<p><strong>J18</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Компонент совместимости с 1С. «fulleq»</p>
</td>
<td style="text-align: left;">fulleq</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Компонент совместимости с 1С. «mchar»</p>
</td>
<td style="text-align: left;">mchar</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Компонент совместимости с 1С. «online_analyze»</p>
</td>
<td style="text-align: left;">online_analyze</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Компонент совместимости с 1С. «plantuner»</p>
</td>
<td style="text-align: left;">plantuner</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Контроль целостности. Компонент «ja_CSum»</p>
</td>
<td style="text-align: left;">ja_CSum</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Балансировка подключений пользователей к СУБД. Компонент «jaPooler»</p>
</td>
<td style="text-align: left;">jaPooler</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td rowspan="3" style="text-align: left;">
<p>Обеспечение работы с СУБД Oracle</p>
</td>
<td style="text-align: left;">Oracle_FDW</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">OraFCE</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">pg_Variables</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Выявление и предотвращение исполнения нетипичных SQL-запросов. Компонент «SQL_Firewall»</p>
</td>
<td style="text-align: left;">SQL_Firewall</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Библиотека для взаимодействия с моделями машинного обучения. Компонент "ONNX Runtime"</p>
</td>
<td style="text-align: left;">onnxruntime</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Сокрытие информации в файлах данных СУБД. Компонент «Jatoba crypto access storage»</p>
</td>
<td style="text-align: left;">JCS</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 61%" />
<col style="width: 14%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2" style="text-align: left;">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4" style="text-align: left;">
<p><strong>ИС</strong></p>
</th>
<th colspan="4" style="text-align: left;">
<p><strong>1С</strong></p>
</th>
</tr>
<tr>
<th style="text-align: left;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J6</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J18</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J6</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J18</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Формирование HTTP/HTTPS запросов из СУБД. Компонент «pgSQL-HTTP»</p>
</td>
<td style="text-align: left;">
<p>pgSQL-HTTP</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Обеспечение работы с СУБД MS SQL Server. Компонент «TDS_FDW»</p>
</td>
<td style="text-align: left;">
<p>TDS_FDW</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Pасширенное журналирование событий СУБД. Компонент «pgAudit»</p>
</td>
<td style="text-align: left;">
<p>pgAudit</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Компонент «pgauditlogtofile»</p>
</td>
<td style="text-align: left;">
<p>pgauditlogtofile</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Работа с географическими данными. Компонент «PostGIS»</p>
</td>
<td style="text-align: left;">
<p>PostGIS</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Расширенное резервное копирование. Компонент «PTrack»</p>
</td>
<td style="text-align: left;">
<p>PTrack</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Управление парольными политиками пользователей СУБД. Компонент «SecurityProfile»</p>
</td>
<td style="text-align: left;">
<p>SecurityProfile</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Управление планами запросов. Компонент «ja_Plan_Manager»</p>
</td>
<td style="text-align: left;">
<p>ja_Plan_Manager</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Контроль выполненных планов запросов Компонент «pg_store_plans»</p>
</td>
<td style="text-align: left;">
<p>pg_store_plans</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Настройка планов выполнения. Компонент «pg_hint_plan»</p>
</td>
<td style="text-align: left;">
<p>pg_hint_plan</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>«Jatoba» в контейнере</p>
</td>
<td style="text-align: left;">
<p>ja_Container</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Компонент сбора аппаратных и программных показателей работы GNU/Linux.</p>
<p>node_exporter</p>
</td>
<td style="text-align: left;">
<p>node_exporter</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Компонент сбора метрик СУБД. postgres_exporter</p>
</td>
<td style="text-align: left;">
<p>postgres_exporter</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>SQL экспортёр. Компонент сбора расширенных метрик СУБД</p>
</td>
<td style="text-align: left;">
<p>sql_exporter</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Компонент мониторинга различных программных систем и сервисов.</p>
</td>
<td style="text-align: left;">
<p>prometheus</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 61%" />
<col style="width: 14%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2" style="text-align: left;">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4" style="text-align: left;">
<p><strong>ИС</strong></p>
</th>
<th colspan="4" style="text-align: left;">
<p><strong>1С</strong></p>
</th>
</tr>
<tr>
<th style="text-align: left;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J6</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J18</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J6</strong></p>
</th>
<th style="text-align: left;">
<p><strong>J18</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Prometheus</p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Компонент управления и обработки оповещений в системе мониторинга Prometheus.</p>
<p>Alertmanager</p>
</td>
<td style="text-align: left;">
<p>Alertmanager</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Работа СУБД «Jatoba» в режиме ЗПС в ОС Astra Linux</p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>gis-cryptoplatform</p>
</td>
<td style="text-align: left;">
<p>gis-cryptoplatform</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка лексографического идентификатора. Компонент «pg-ulid»</p>
</td>
<td style="text-align: left;">
<p>pg-ulid</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Запись событий информационной безопасности. Компонент «ja_seceventlog»</p>
</td>
<td style="text-align: left;">
<p>ja_seceventlog</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Обратный индекс с хранением позиционной информации, полнотекстовый поиск.</p>
<p>Компонент «rum»</p>
</td>
<td style="text-align: left;">
<p>rum</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Реорганизация таблицы с минимальными блокировками. Компонент «pg_repack»</p>
</td>
<td style="text-align: left;">
<p>pg_repack</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Работа СУБД Jatoba в режиме ЗПС в ОС ОСНОВА</p>
</td>
<td style="text-align: left;">
<p>osnova-digsig-key</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Расширенный тип данных tsvector. Компонент "tsvector2"</p>
</td>
<td style="text-align: left;">
<p>tsvector2</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Полнотекстовый поиск и определение похожих текстов. Компонент "ja_Similar"</p>
</td>
<td style="text-align: left;">
<p>ja_Similar</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Инвентаризация СУБД</p>
</td>
<td style="text-align: left;">
<p>ja_Inventory</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Свободная библиотека для проверки орфографии и морфологического анализа.</p>
<p>Компонент «hunspell»</p>
</td>
<td style="text-align: left;">
<p>hunspell</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Маскирование данных. Компонент «ja_anonymizer»</p>
</td>
<td style="text-align: left;">
<p>ja_anonymizer</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 61%" />
<col style="width: 14%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 3%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2" style="text-align: left;">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4">
<p><strong>ИС</strong></p>
</th>
<th colspan="4">
<p><strong>1С</strong></p>
</th>
</tr>
<tr>
<th>
<p><strong>J4</strong></p>
</th>
<th>
<p><strong>J5</strong></p>
</th>
<th>
<p><strong>J6</strong></p>
</th>
<th>
<p><strong>J18</strong></p>
</th>
<th>
<p><strong>J4</strong></p>
</th>
<th>
<p><strong>J5</strong></p>
</th>
<th>
<p><strong>J6</strong></p>
</th>
<th>
<p><strong>J18</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Архивация и восстановление данных. Компонент «wal-g»</p>
</td>
<td style="text-align: left;">
<p>wal-g</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
</tbody>
</table>

Возможна эксплуатация СУБД Jatoba с установленным сторонним компонентом «TimescaleDB» без установки других встроенных компонентов СУБД «Jatoba».

## РЕШАЕМЫЕ ЗАДАЧИ

Использование СУБД «Jatoba» позволяет решать следующий ряд задач:

- Установка с помощью инсталлятора СУБД и компонента «Jatoba Data Safe» под ОС Windows и GNU/Linux (п. [3.1](#инсталлятор));

  - Установка СУБД с рекомендуемой, генерируемой конфигурацией, компонентом «ja_tune»;

- Балансировка нагрузки на СУБД (п. [3.2](#балансировка-нагрузки));

- Кластеризация СУБД (п. [3.3](#кластеризация)):

  - Кластеры на основе компонента jaDog. Инженерные решения ([3.3.1](#инженерные-решения-построения-кластера));

  - Отказоустойчивый кластер в Kubernetes (п. [3.3.2](#отказоустойчивый-кластер-в-kubernetes));

  - Управление кластером jaDog через веб-интерфейс JDS (п. [3.3.3](#управление-кластером-jadog-в-jds)).

- Секционирование (шардирование) больших таблиц (п. [3.4](#секционирование-больших-таблиц.-ja_hipe_cluster));

- Мониторинг и управление СУБД (п. [3.5](#мониторинг-и-управление-субд)):

  - Раздел «Мониторинг» (п. [3.5.1](#раздел-мониторинг));

  - Раздел «Анализ рисков» (User Risk) (п. [3.5.2](#раздел-ландшафт-landscape));

  - Раздел «Матрица доступа» (Access matrix) (п. [3.5.7](#_bookmark23));

  - Раздел «Кластеры» (п. [3.5.9](#раздел-кластеры));

  - Раздел «Список событий» (Event List) (п. [3.5.8](#раздел-список-событий-event-list));

  - Раздел «Снимки и отчеты» (Snapshots & Reports) (п. [3.5.10](#раздел-снимки-и-отчеты-snapshots-reports));

  - Раздел «Проблемы и решения» (Problems & Solutions) (п. [3.5.11](#раздел-проблемы-и-решения-problems-solutions));

  - Раздел «Анализ запросов» (Query analysis) (п. [3.5.12](#_bookmark28))

  - Раздел «Активность БД» (п. [3.5.13](#раздел-активность-бд));

  - Раздел «LDAP синхронизация» (п. [3.5.15](#раздел-ldap-синхронизация));

  - Раздел «Роли БД» (DB roles) (п. [3.5.16](#раздел-роли-субд-db-roles));

  - Раздел «Уведомления» (Notifications) (п. [3.5.17](#раздел-уведомления-notifications))

  - Раздел «Парольные политики» (п. [3.5.18](#раздел-парольные-политики-password-policies));

  - Раздел «Ландшафт» (Landscape) (п. [3.5.18](#раздел-парольные-политики-password-policies));

  - Раздел «Резервное копирование» (BACKUP) (п. [3.5.19](#_bookmark36)).

- Резервное копирование (п. [3.6](#резервное-копирование));

- Маскирование данных (п. [3.7](#маскирование-данных.-компонент-ja_anonymizer));

- Поддержки платформы Oracle (п. [3.8](#поддержки-платформы-oracle));

- Поддержка платформы MS SQL (п. [3.9](#поддержка-платформы-ms-sql));

[3.10.1](#компонент-ja_plan_manager.-управление-планами-запросов));

- Управление планами запросов (п. [3.10](#управление-планами-запросов));

- Выявления и предотвращение исполнения нетипичных SQL-запросов (п.

- Регистрация событий безопасности (п. [3.13](#регистрация-событий-безопасности));

  - Расширенная регистрация событий (п. [3.13.1](#расширенная-регистрация-событий-субд));

  - Регистрация событий безопасности в соответствии с ГОСТ-Р-59548-2022 (п. [3.13.3](#централизованный-сбор-событий-субд));

  - Централизованный собор событий безопасности ([3.13.3](#централизованный-сбор-событий-субд)).

- Пароли и парольные политики (п. [3.14](#пароли-и-парольные-политики));

- Поддержка работы СУБД с геоданными (п. [3.15](#поддержка-работы-субд-с-геоданными));

- Контроль целостности (п. [3.16](#контроль-целостности));

- Обфускации (маскирование) кода хранимых процедур на языке PL/pgSQL

(п. [3.17](#обфускации-кода));

- Формирование HTTP/HTTPS запросов из СУБД (п. [3.18](#формирование-httphttps-запросов-из-субд));

- Компрессия данных (п. [3.19](#_bookmark71));

- Полнотекстовый поиск и определение похожих текстов (п. [3.20](#полнотекстовый-поиск-и-определение-похожих-текстов));

- Метод поиска KNN (п. [3.21](#поиск-ближайших-соседей-knn-для-b-tree));

- 64-битный счетчик транзакций (п. [3.22](#битный-счетчик-транзакций.-компонент-xid64));

- Инвентаризация СУБД (п. [3.22](#битный-счетчик-транзакций.-компонент-xid64));

- Разрешение или запрет действий пользователей (п. [3.24](#_bookmark77)).

### Инсталлятор

Процесс установки СУБД облегчен входящими в поставку инсталляторами, которые автоматизируют рутинные операции.

Под ОС семейства Windows ядро СУБД и компоненты устанавливаются при помощи инсталлятора.

![](@site/docs/assets/images/com18.4.1/describe/media/image1.png)

Рисунок 3.1 – Запуск мастера установки

Основные пакеты ядра СУБД под ОС GNU/Linux могут устанавливаться инсталлятором.

![](@site/docs/assets/images/com18.4.1/describe/media/image2.png)

Рисунок 3.2 – Окно инсталлятора ОС GNU/Linux

Сохранен режим установки СУБД под GNU/Linux из локального репозитория.

![](@site/docs/assets/images/com18.4.1/describe/media/image3.png)

Рисунок 3.3 – Установка основных пакетов

Установка компонента пользовательского веб-интерфейса для администраторов «Jatoba data safe» может выполняться:

1)  Инсталлятором компонента на ОС Windows.

![](@site/docs/assets/images/com18.4.1/describe/media/image4.jpeg)

Рисунок 3.4 – Окно инсталлятора JDS на ОС Windows

2)  Вручную из архива.

3)  Инсталлятором компонента JDS под ОС GNU/Linux.

![](@site/docs/assets/images/com18.4.1/describe/media/image5.png)

Рисунок 3.5 – Инсталлятор JDS под ОС GNU/Linux

### Установка СУБД с рекомендуемой, генерируемой конфигурацией, компонентом «ja_tune»

Установка СУБД с рекомендуемыми, генерируемыми параметрами возможна при ручной установке.

Компонент «ja_tune», на основе данных об аппаратной платформе, на которой предполагается запускать экземпляр СУБД, данных операционной системы, предполагаемом профиле нагрузки СУБД и некоторых дополнительных параметрах генерирует рекомендуемые параметры конфигурационного файла «postgresql.conf».

Например

Вывод результатов в файл с добавлением результатов в конец файла

```
./ja_tune --workload web --os Linux -- ram 2 GB --cpu 2 --maxconn 10 --pgversion 14.0 --strgtype ssd --replication true --syncommit true >> pairwise1_web.cfg
```

:::info Дополнительная информация
Компонент «ja_tune» не поддерживается в СУБД «Jatoba» с версией ядра «4» и
«5»
:::

### Балансировка нагрузки

Помимо базовых механизмов СУБД для балансировки и оптимизации запросов пользователей к СУБД используется компонент «jaPooler».

Компонент имеет функциональную возможность оптимизировать запросы от пользователя(ей) к серверу при их подключении к серверу СУБД на указанный порт, как представлено на рисунке 3.6.

![](@site/docs/assets/images/com18.4.1/describe/media/image41.png)

Рисунок 3.6 – Балансировка запросов пользователя

Также компонент обладает функциональной возможностью балансировки подключений множества пользователей к серверам СУБД, как представлено на рисунке 3.7.

![](@site/docs/assets/images/com18.4.1/describe/media/image40.png)

Рисунок 3.7 – Балансировка запросов пользователей к серверам СУБД Подключения формируются как от пользователей, так и от пользовательских

приложений.

### Кластеризация

Отказоустойчивость в СУБД «Jatoba» реализуется средствами репликации данных компонентом «jaDog». Экземпляр СУБД может выступать в роли ведущего

или ведомого сервера. Роль сервера определяется соответствующими конфигурационными параметрами, заданными администратором СУБД. Ведомый сервер всегда зависит от ведущего и получает от него все изменения данных, которые накапливаются в журнале транзакций. В случае выхода из строя ведущего сервера, ведомый сервер может автоматически или по команде администратора принять на себя роль ведущего. После восстановления функционирования сервера ему снова может быть возвращена роль ведущего.

![](@site/docs/assets/images/com18.4.1/describe/media/image42.png)

Рисунок 3.8 – Физическая структура узлов кластера

Базовые функциональные возможности кластера расширены до полнофункциональных инженерных решений катастрофоустойчивого и геораспределенного кластера.

### Инженерные решения построения кластера

Функциональные возможности компонента jaDog позволяют построить кластер различных конфигураций и приведенных в таблице 3.1. настоящего документа.

Развёртывание кластеров может проходить как в ручном, так и в полуавтоматическом режиме с использованием файлов ответов \*.yml.

**Инженерные решения компонента «jaDog»**

![](@site/docs/assets/images/com18.4.1/describe/media/image70.png)

Разделы описания инженерного решения во 2-ой части руководства jaDog:
- Перекрестная репликация. Использование файлов ответов;
- Перекрестная репликация. Настройка в ручном режиме.

![](@site/docs/assets/images/com18.4.1/describe/media/image71.png)

Разделы описания инженерного решения во 2-ой части руководства jaDog:
- Каскадная репликация. Использование файлов ответов;
- Каскадная репликация. Настройка в ручном режиме.

![](@site/docs/assets/images/com18.4.1/describe/media/image72.png)

Разделы описания инженерного решения во 2-ой части руководства jaDog:
- Работа кластера с каскадной репликацией в дата-центрах.

![](@site/docs/assets/images/com18.4.1/describe/media/image73.png)

Разделы описания инженерного решения во 2-ой части руководства jaDog:
- Геораспределенный, отказоустойчивый кластер. Решение JA_DTC_AS.

![](@site/docs/assets/images/com18.4.1/describe/media/image74.png)

Разделы описания инженерного решения во 2-ой части руководства jaDog:
- Настройка группы кластеров (bundle) с компонентом «jadog» в ручном режиме;
- Настройка группы кластеров (bundle) с компонентом «jadog» в автоматическом режиме.

#### Отказоустойчивый кластер в Kubernetes

СУБД «Jatoba» может применяться в составе продукта CloudNativePG, позволяющего развертывать предварительно сконфигурированный отказоустойчивый

кластер в окружении Kubernetes. Текущая реализация кластера CNPG использует физическую потоковую репликацию.

![](@site/docs/assets/images/com18.4.1/describe/media/image75.png)

Рисунок 3.9 – Архитектура кластера, устанавливаемого с помощью CloudNativePG

### Управление кластером jaDog в JDS

На уровне компонента пользовательского веб-интерфейса для администраторов «Jatoba data safe» поддерживаются функциональные возможности:

- создание кластера (Create cluster);

- назначение роли «Мастер» (Make a master);

- добавление узла в кластер (Add new node);

- удаление выбранного узла (Delete selected node);

- активация PUBLIC IP;

- деактивация PUBLIC IP;

- управление параметрами кластера.

![](@site/docs/assets/images/com18.4.1/describe/media/image76.png)

Рисунок 3.10 – Вид раздела «Список кластеров» (Cluster list)

![](@site/docs/assets/images/com18.4.1/describe/media/image77.png)

Рисунок 3.11 – Вкладка «Обзор» параметров кластера Подключение к кластеру доступно через REST API.

### Секционирование больших таблиц. ja_Hipe_Cluster

Компонент «ja_Hipe_Cluster» реализует функциональную возможность, позволяющую обычным серверам баз данных (называемым узлами) координировать свои действия друг с другом в архитектуре «ничего общего» («shared nothing»). Узлы образуют кластер, который позволяет СУБД хранить больше данных и использовать больше ядер центрального процессора, чем это было бы возможно на одном компьютере. Эта архитектура также позволяет масштабировать базу данных, просто добавляя дополнительные узлы в кластер. Данное расширение позволяет выполнять распределение таблиц и запросов по рабочим узлам, входящим в кластер.

![](@site/docs/assets/images/com18.4.1/describe/media/image78.png)

Рисунок 3.12 – Отправка запросов на рабочие узлы

:::info Дополнительная информация
Компонент «ja_Hipe_Cluster» не поддерживается в СУБД «Jatoba» с версией ядра «18»
:::

### Мониторинг и управление СУБД

Компонент пользовательского веб-интерфейса для администраторов «Jatoba data safe» предназначен для администраторов СУБД и БД, специалистов по безопасности и аудиторов безопасности.

Обладает следующими функциональными возможностями:

- управление и конфигурирование хоста СУБД и самой СУБД;

- установка расширений СУБД;

- просмотр событий безопасности;

- управление кластером СУБД;

- формирование матрицы привилегий пользователей;

- формирование матрицы системных привилегий пользователей;

- формирование отчетов о СУБД;

- синхронизация учетных записей пользователей;

- управление резервными копиями.

Безопасность внутри компонента обеспечивается реализованной двухкомпонентной ролевой моделью доступа, в которой пользователь компонента не знает и не может использовать учетную запись в СУБД.

### Раздел «Мониторинг»

В комплект поставки СУБД «Jatoba» с версией ядра «5» и выше в компонент JDS включен раздел «Мониторинг».

Раздел «Мониторинг» предназначен для отображения оперативной информации в форме графических и цифровых панелей (виджетов) о целевой СУБД и ОС, на которой она установлена.

![](@site/docs/assets/images/com18.4.1/describe/media/image79.png)

Рисунок 3.13 – Предустановленные виджеты

Виджеты имеют функциональную возможность контроль над пороговыми значениями и рассылку уведомлений.

:::info Дополнительная информация
Раздел «Монитогринг» использует компоненты:

- node_exporter;

- postgres_exporter;

- sql_exporter;

установленные на целевой СУБД, а также:

- Prometheus;

- Alertmanager;

установленные на отдельном хосте.

Данные компоненты не поддерживается в СУБД «Jatoba» с версией ядра «4».
:::



### Раздел «Ландшафт» (Landscape)

Раздел «Ландшафт» предназначен для:

- навигации между разделами компонента JDS:

![](@site/docs/assets/images/com18.4.1/describe/media/image80.png)

Рисунок 3.14 – Навигация между разделами

- получения общей информации о хосте СУБД;

![](@site/docs/assets/images/com18.4.1/describe/media/image81.png)

Рисунок 3.15 - Хост. Вкладка «Обзор»

- получения общей информации о БД;

![](@site/docs/assets/images/com18.4.1/describe/media/image82.png)

Рисунок 3.16 – Вкладка «Обзор» БД

### Раздел «Параметры СУБД»

Раздел «Параметры СУБД» позволяет изменять значения конфигурационного файла «postgresql.conf» на целевой СУБД и применять установленные значения.

![](@site/docs/assets/images/com18.4.1/describe/media/image83.png)

Рисунок 3.17 - Вкладка «Параметры СУБД»

Функциональная возможность изменения конфигурации целевых СУБД, позволяет оперативно применять, как шаблоны параметров, так и отдельные параметры, с целью:

- масштабирования типовых параметров;

- конфигурирования СУБД под определенный тип нагрузки;

- оперативного изменения набора параметров.

![](@site/docs/assets/images/com18.4.1/describe/media/image84.png)

Рисунок 3.18 – Добавление параметра в шаблон

### Раздел «Правила доступа»

В разделе «Правила доступа» доступно изменение значений конфигурационного файла «pg_hba.conf», в котором устанавливаются параметры аутентификации в СУБД.

![](@site/docs/assets/images/com18.4.1/describe/media/image85.png)

Рисунок 3.19 - Вкладка «Параметры СУБД»

### Раздел «Расширения»

Раздел обеспечивает установку и удаление расширений СУБД.

![](@site/docs/assets/images/com18.4.1/describe/media/image87.png)

Рисунок 3.20 – Установка расширения

### Раздел «Анализ рисков» (User Risk)

Разработанная функциональность раздела не имеет аналогов на рынке информационных технологий.

Раздел в графическом формате отображает системные привилегии ролей, предоставленные относительно объектов доступа.

![](@site/docs/assets/images/com18.4.1/describe/media/image86.png)

Рисунок 3.21 – Вид раздела «Анализ рисков» (User Risk)

### Раздел «Матрица доступа» (Access matrix)

Раздел также уникален и не имеет аналогов. В нем отображаются атрибутов пользователей относительно субъектов доступа.

Рисунок 3.22 – Вид раздела «Матрица доступа» (Access matrix) Полученные результаты возможно экспортировать в файл MS Excel.

### Раздел «Список событий» (Event List)

Раздел «Список событий» (Event List) предназначен для просмотра событий безопасности в выбранной инсталляции (Target).

Для функционирования раздела требуется, чтобы на целевой СУБД был установлен компонент «ja_Log», обеспечивающий передачу событий безопасности в служебную СУБД. Компонент «pgAudit» при этом обеспечивает расширенную регистрацию событий безопасности.

![](@site/docs/assets/images/com18.4.1/describe/media/image323.png)

Рисунок 3.23 – Вид раздела «Список событий» (Event List) Раздел JDS «Event List» оснащен:

- полем контекстного поиска;

- набором фильтров;

- механизмом выбора отображаемых полей;

- механизмом автоматического обновления.

Время хранения журналов событий СУБД ограничено только выделенным дисковым пространством для служебной БД «ja_log».

### Раздел «Кластеры»

Функциональные возможности раздела описаны в п. [3.3.3](#управление-кластером-jadog-в-jds) настоящего документа.

### Раздел «Снимки и отчеты» (Snapshots & Reports)

Подраздел «Снимки и отчеты» (Snapshots & Reports) предназначен для создания снимков состояния БД (Snapshots) и получения отчетов. Формирование статической информации выполняется компонентом «pg_Profile».

![](@site/docs/assets/images/com18.4.1/describe/media/image324.png)

Рисунок 3.24 – Вкладка «Снимки»

![](@site/docs/assets/images/com18.4.1/describe/media/image325.png)

Рисунок 3.25 – Вкладка «Отчеты»

### Раздел «Проблемы и решения» (Problems & Solutions)

Подраздел «Проблемы и решения» (Problems & Solutions) представляет собой интеллектуальный инструмент, который позволяет определять ряд проблем, существующих в целевой СУБД и разрешать их.

![](@site/docs/assets/images/com18.4.1/describe/media/image326.png)

Рисунок 3.26 – Вкладка проблемы

### Раздел «Анализ запросов» (Query analysis)

Подраздел «Анализ запросов» предоставляет пользователю с ролью

«Администратор СУБД»:

- отображение визуализации плана запроса средствами Pg-explain;

![](@site/docs/assets/images/com18.4.1/describe/media/image327.png)

Рисунок 3.27 – Визуализация explain по узлам

- отображение списка планов запросов по нескольким критериям отбора и переход по ссылке из выбранного плана запроса на страницу анализа плана запроса;

![](@site/docs/assets/images/com18.4.1/describe/media/image328.png)

Рисунок 3.28 – Вкладка «по шаблонам»

- возможность ручного ввод плана запроса.

:::info Дополнительная информация
Раздел «Анализ запросов» использует компоненты:

- pg-explain;

- pg-explain-db;

- pg-monitor;

- pg-monitor-collector;

- pg-monitor-dispatcher; 

установленные на целевой СУБД.

Данные компоненты не поддерживается в СУБД «Jatoba» с версией ядра «4».
:::



### Раздел «Активность БД»

Подраздел «Активность БД» (DB Activity) предназначен для:

- мониторинга активности в СУБД;

- получения информации о выполняющихся сессиях/процессах, существующих блокировках;

- завершения сессий;

- выявления подозрительной активности пользователей.

Может использоваться в случаях, когда пользователь(и) СУБД сообщает(ют), что:

- операция «зависла»;

- СУБД потеряла производительность;

- типичные операции, выполняются дольше обычного;

- зависла сессия, не позволяющая подсоединиться повторно и требуется ее

- требуется разобраться по каким причинам «зависла» его операция.

При выборе цели компонент JDS автоматически отобразит текущие сессии.

![](@site/docs/assets/images/com18.4.1/describe/media/image329.png)

Рисунок 3.29 – Отображение текущих сессий

Во вложенном окне «Запрос» отражается выполняемый запрос, который возможно скопировать в буфер обмена, либо завершить.

![](@site/docs/assets/images/com18.4.1/describe/media/image330.png)

Рисунок 3.30 – Дополнительное окно «Завершение сессии» в вкладке «Сессии»

### Вкладка «Подключения»

Вкладка «Подключения» отображает количество подключений к выбранной

СУБД.

После выбора цели отображаются столбцы:

- Пользователь/роль;

- Количество подключений;

- Квота подключений.

![](@site/docs/assets/images/com18.4.1/describe/media/image331.png)

Рисунок 3.31 – Вкладка «Подключения»

### Подраздел «Подключения JDS»

Вкладка «Подключения JDS» отображает количество подключений к компоненту пользовательского веб-интерфейса для администраторов «Jatoba data safe»

Рисунок 3.32 – Отображение дополнительной информации о подключении пользователя JDS

После выбора цели отображаются столбцы:

- Пользователь;

- Тип:

<!-- -->

- JDS (подключение к компоненту);

- БД (подключение к служебной БД компонента);

  - Количество подключений;

  - Лимит подключений.

### Раздел «LDAP синхронизация»

В разделе «LDAP синхронизация» используется уникальный компонент собственной разработки «ja_Sync_LDAP».

Раздел «LDAP синхронизация» автоматизирует и визуализирует работу компонента «ja_Sync_LDAP» используемого для синхронизации учетных записей служб каталогов и СУБД, таких как:

- Active Directory;

- ALD Pro;

- FreeIPA;

- SAMBA.

Рисунок 3.33 – Окно создания профиля синхронизации в версии JDS 2.2

Во избежание ошибок аутентификации в компоненте применяется механизм преобразования имен пользователей.

Примеры использования механизма приведены в таблице [3.2](#_bookmark32).

<span id="_bookmark32" class="anchor"></span>Таблица 3.2 – Примеры преобразования имен

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 34%" />
<col style="width: 32%" />
<col style="width: 17%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Значение параметра</strong></p>
</th>
<th style="text-align: right;"><strong>Наименование УЗ в LDAP</strong></th>
<th>
<p><strong>Наименование УЗ в СУБД</strong></p>
</th>
<th>
<p><strong>Комментарий</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>none (по умолчанию)</p>
</td>
<td><a href="mailto:j.USER01@cntr.gazPROM.Loc">j.USER01@cntr.gazPROM.Loc</a></td>
<td>
<p><a href="mailto:j.USER01@cntr.gazPROM.Loc">j.USER01@cntr.gazPROM.Loc</a></p>
</td>
<td>
<p>ни каких преобразований не производится. УЗ в LDAP и СУБД</p>
<p>идентичны.</p>
</td>
</tr>
<tr>
<td>
<p>lower</p>
</td>
<td><a href="mailto:j.USER01@cntr.gazPROM.Loc">j.USER01@cntr.gazPROM.Loc</a></td>
<td>
<p><a href="mailto:j.user01@cntr.gazprom.loc">j.user01@cntr.gazprom.loc</a></p>
</td>
<td>
<p>все символы переводятся в нижний</p>
<p>регистр</p>
</td>
</tr>
</tbody>
</table>

Рисунок 3.34 – Раздел «LDAP Sync»

### Раздел «Роли СУБД» (DB roles)

Раздел «Роли БД» позволяет:

- просматривать список пользователей СУБД;

Рисунок 3.35 – Вкладка «Роли БД»

- создавать и удалять роли;

- редактировать роли;

- назначать атрибуты роли;

Рисунок 3.36 – Вкладка «Атрибуты»

- включать и исключать роль в групповые роли;

Рисунок 3.37 – Вкладка «Роли и группы»

- назначать привилегии роли;

Рисунок 3.38 – Вкладка «Привилегии»

В совокупности с функциональными возможностями раздела «Уведомления» становится возможным установить контроль над действиями, связанными с учетными записями пользователей в СУБД.

### Раздел «Уведомления» (Notifications)

Раздел «Уведомления» предназначен для оповещения администраторов о событиях целевой СУБД и компонента JDS.

Механизм уведомлений содержит в себе три типа поиска сообщений:

- ошибки БД;

Поиск выполняется по классу события или по коду события.

Рисунок 3.39 – Поле «Тип события»

- события учетных записей;

Поиск выполняется по ключевым фразам.

Рисунок 3.40 – Поле «События» при выбранном типе события «События учетных записей»

- произвольный текст;

Поиск выполняется, по ключевым словам, задаваемым пользователем JDS.

Рисунок 3.41 – Тип события «Произвольный текст»

Таким образом реализована функциональная возможность контроля и оповещения ответственных сотрудников о любых событиях СУБД средствами:

- электронной почты (SMTP);

- мессенджера Zulip.

Рисунок 3.42 – Список каналов событий

Совокупностью реализованных механизмов выполняются функциональные возможности по оперативному контролю и мониторингу событий СУБД.

### Раздел «Парольные политики» (Password policies)

В комплект поставки СУБД «Jatoba» с версией ядра «5» и выше в компонент JDS включен раздел «Парольные политики».

Раздел «Парольные политики» предназначен для автоматизации и упрощения работы с парольными политиками и блокировками пользователей целевой СУБД.

Раздел включает в себя подразделы:

- Управление политиками (Policy management);

- Привязка ролей (Role Binding);

- Работа с блокировками.

Корректная работа раздела обеспечивается установленными и настроенными на целевой СУБД компонент:

SecurityProfile, описанного в документе «Руководство администратора»; ja_CSum, описанного в документе «Руководство по настройке. Часть 14.

Контроль целостности. Компонент «ja_CSum».

<span id="_bookmark36" class="anchor"></span>Рисунок 3.43 – Список пользователей привязанных к парольной политике

### Раздел «Резервное копирование» (BACKUP)

Раздел предназначен для:

- настройки и управления компонентом «probackup»;

- управления хранилищем резервных копий;

- создания резервных копий.

Рисунок 3.44 – Список резервных копии

:::info Дополнительная информация
Раздел «Резервное копирование» не доступен целевой СУБД «Jatoba» с версией ядра «18», т.к. компонент «pg_ProBackup» в данной версии не поддерживается.
:::

### Резервное копирование

### Компонент «pg_ProBackup»

Отказоустойчивость СУБД «Jatoba» реализуется применением полного или инкрементального резервного копирования, выполняемого компонентом

«pg_ProBackup».

Полные резервные копии содержат все файлы данных, необходимые для восстановления сервера баз данных с нулевой точки.

Инкрементальные копии создаются на уровне страниц данных и включают только ту информацию, которая изменилась со времени последнего резервного копирования.

![](@site/docs/assets/images/com18.4.1/describe/media/image345.png)

Рисунок 3.45 – Реализуемые способы резервного копирования

:::info Дополнительная информация
Компонент «pg_ProBackup» не поддерживается в СУБД «Jatoba» с версией ядра «18»
:::

### Компонент «wal-g»

Компонент «wal-g» — представляет собой расширение функционала СУБД

«Jatoba» и предназначен для управления резервным копированием и восстановлением баз данных СУБД «Jatoba», для регулярного создания резервных копий, позволяющих восстанавливать работу СУБД в случае аварийной ситуации, порчи или потери данных.

![](@site/docs/assets/images/com18.4.1/describe/media/image303.png)

Рисунок 3.46 – Запуск и успешное восстановление СУБД из РК

:::info Дополнительная информация
Компонент «wal-g» не поддерживается в СУБД «Jatoba» с версией ядра «4» и «5»
:::

### Маскирование данных. Компонент «ja_Anonymizer»

Компонент «ja_Anonymizer» — представляет собой расширение СУДБ

«Jatoba», которое предоставляет механизм маскировки и анонимизирования данных.

Обладает функциональными возможностями

- **Статическое маскирование** (Static Masking): безвозвратно замаскировать все персональные данные, хранящиеся в БД, заменив их другими значениями, сохранив структуру для дальнейшего анализа;

- **Динамическое маскирование** (Dynamic Masking): включить

«прозрачную» маскировку для определённых (MASKED) пользователей, чтобы они не имели возможности доступа к маскируемым реальным персональным данным;

- **Анонимные дампы** (Anonymous Dumps): экспортировать замаскированную версию данных в внешний SQL-файл. SQL-файл с замаскированными данными возможно использовать для тестов или передачи другим пользователям;

- **Маскирующие представления** (Masking Views): создание специальных представлений (views), в которых конфиденциальные поля уже замаскированы;

- **Маскирующие обертки данных** (Masking Data Wrappers): применение правил маскировки к данным, поступающим в БД из внешних источников.

### Например

![](@site/docs/assets/images/com18.4.1/describe/media/image304.jpeg)

Рисунок 3.47 – Применение правила anon.anonymize_column статического маскирования исходных данных таблицы employees к столбцу postcode

![](@site/docs/assets/images/com18.4.1/describe/media/image305.jpeg)

Рисунок 3.48 – Данные таблицы employees после использования статического маскирования к столбцу postcode

:::info Дополнительная информация
Компонент «ja_Anonymizer» не поддерживается в СУБД «Jatoba» с версией ядра «4» и «5»
:::

### Поддержки платформы Oracle

В СУБД «Jatoba» реализован набор расширений, обеспечивающий интеграцию СУБД «Jatoba» с СУБД «Oracle». Расширения предоставляют дополнительные функции, повышающие синтаксическую совместимость и упрощающие перенос хранимых процедур, и предоставляют дополнительные методы прозрачного доступа к данным из одной СУБД в другую.

Компонент «OraFCE» выполнен в виде расширения и имеет дополнительные функции и операторы для работы текстовыми и временными строками. Может применяться для миграции данных из Oracle в СУБД «Jatoba».

Компонент «pg_Variables» выполнен в виде расширения и предназначен для работы с переменными различных типов. Созданные переменные существуют только в рамках текущей пользовательской сессии.

Компонент «Oracle_FDW» дает возможность создать обертку (Foreign-Data Wrapper, FDW) для доступа к базе данных Oracle.

### Поддержка платформы MS SQL

Компонент «TDS_FDW» предназначен для импорта данных из БД MS SQL в СУБД «Jatoba», который помогает сопоставить типы данных.

Сопоставляемые типы данных приведены в таблице [3.3](#_bookmark43).

<span id="_bookmark43" class="anchor"></span>Таблица 3.3 – Сопоставляемые типы данных

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>MS SQL</strong></p>
</th>
<th>
<p><strong>СУБД «Jatoba»</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>bingint</p>
</td>
<td>
<p>bingint</p>
</td>
</tr>
<tr>
<td>
<p>integer</p>
</td>
<td>
<p>integer</p>
</td>
</tr>
<tr>
<td>
<p>smallint</p>
</td>
<td>
<p>Smallint</p>
</td>
</tr>
<tr>
<td>
<p>Real</p>
</td>
<td>
<p>Real</p>
</td>
</tr>
<tr>
<td>
<p>Numeric(18,0)</p>
</td>
<td>
<p>Numeric(18,0)</p>
</td>
</tr>
<tr>
<td>
<p>Binary(10)</p>
</td>
<td>
<p>Bytea</p>
</td>
</tr>
<tr>
<td>
<p>Bit</p>
</td>
<td>
<p>Smallint</p>
</td>
</tr>
<tr>
<td>
<p>Char(8)</p>
</td>
<td>
<p>Character(8)</p>
</td>
</tr>
<tr>
<td>
<p>nchar(8)</p>
</td>
<td>
<p>Character(8)</p>
</td>
</tr>
<tr>
<td>
<p>Float</p>
</td>
<td>
<p>Double precision</p>
</td>
</tr>
<tr>
<td>
<p>Decimal(18,0)</p>
</td>
<td>
<p>Numeric(18,0)</p>
</td>
</tr>
<tr>
<td>
<p>Ntext</p>
</td>
<td>
<p>Text</p>
</td>
</tr>
<tr>
<td>
<p>Text</p>
</td>
<td>
<p>Text</p>
</td>
</tr>
<tr>
<td>
<p>Nvarchar(8)</p>
</td>
<td>
<p>Character varying(8)</p>
</td>
</tr>
<tr>
<td>
<p>Date</p>
</td>
<td>
<p>Date</p>
</td>
</tr>
<tr>
<td>
<p>Datetime</p>
</td>
<td>
<p>Timestamp without time zone</p>
</td>
</tr>
<tr>
<td>
<p>Time</p>
</td>
<td>
<p>Time without time zone</p>
</td>
</tr>
<tr>
<td>
<p>Timestamp</p>
</td>
<td>
<p>Bytea</p>
</td>
</tr>
<tr>
<td>
<p>Money</p>
</td>
<td>
<p>Money</p>
</td>
</tr>
<tr>
<td>
<p>Tinyint</p>
</td>
<td>
<p>Smallint</p>
</td>
</tr>
<tr>
<td>
<p>Smallmoney</p>
</td>
<td>
<p>money</p>
</td>
</tr>
</tbody>
</table>

### Управление планами запросов

### Компонент ja_Plan_Manager. Управление планами запросов

Компонент «ja_Plan_Manager» предназначен для создания, оптимизации, экспорта/импорта и подмены планов запросов в БД.

Компонент «ja_Plan_Manager» предназначен для управления процессом выполнения заранее определенных запросов с заранее определенными (альтернативными) планами в обход стандартного планировщика. Также, модуль позволяет записывать, хранить, выбирать для использования варианты планов. Полезен в случаях сложных по конструкции запросов, когда планировщик выбирает нерациональный план выполнения.

Схема работы компонента представлена на рисунке [3.49](#_bookmark52).

test_db_a

export

EXTENSION

ja_Plan_Manager

dblink connection

/var/lib/jatoba/4/data

import

EXTENSION

ja_Plan_Manager

СУБД «Jatoba»

test_db_b

<span id="_bookmark52" class="anchor"></span>Рисунок 3.49 – Схема работы компонента

**Применение к 1С**: в некоторых случаях планировщик СУБД «Jatoba» выбирает неоптимальный план выполнения для SQL-запросов в 1C, несмотря на собранную статистику по соответствующим объектам БД. Это приводит к увеличению времени выполнения запросов и созданию непродуктивной нагрузки на оборудование. *Пример*: длительно выполняющийся (более 40 минут) запрос в 1С, для которого планировщиком СУБД «Jatoba» выбран план выполнения с использованием конструкций Group+Sort вместо более оптимальной в данном случае конструкции HashAggregate. С помощью компонента «ja_Plan_Manager» можно прикрепить к запросу более оптимальный план с использованием конструкции HashAggregate, полученный в определенных синтетических условиях для данного проблемного

запроса.

Функциональные возможности компонента позволяют:

- включать/отключать режим сохранения запросов;

- включать/отключать режим использования сохраненных запросов;

- экспортировать планы запросов в формате:

  - json;

  - text;

  - xml;

  - yaml;

- экспортировать планы запросов через:

  - домашний каталог пользователя;

  - строку соединения с другой БД (dblink connection);

- импортировать планы запросов.

При использовании компонента есть возможность использовать кириллицу в именах объектов СУБД «Jatoba».

### Компонент pg_hint_plan. Корректировка запросов

Компонент «pg_hint_plan» предназначен для корректировки планов выполнения, применяя так называемые «указания», записываемые в виде простых описаний в SQL-комментариях особого вида.

Компонент считывает указания в комментариях особого вида, заданных оператором SQL. Эта особая запись начинается с последовательности символов /\*+ и заканчивается последовательностью \*/. Фразы указаний состоят из имени указания и последующих параметров, которые заключаются в скобки и разделяются пробелами. Такие указания могут размещаться в нескольких строках для улучшения читаемости.

:::info Дополнительная информация
Компонент «pg_hint_plan» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционной системы GNU/Linux
:::

### Компонент pg_store_plans. Контроль выполненных планов запросов

Компонент «pg_store_plans» предназначен для контроля выполнения планов запросов статистическими методами всех операторов SQL, выполняемых сервером СУБД, выполненного в форме расширения.

В результате установки расширения сформируются два представления «pg_store_plans» и «pg_store_plans_info».

В представление «pg_store_plans» аккумулирует в себе основную информацию, а представление «pg_store_plans_info» содержит в себе статистику расширения «pg_store_plans».

:::warning Важная информация
Компонент «pg_store_plans» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux.
:::

### Выявления и предотвращение исполнения нетипичных SQL-запросов

Для выявления и предотвращения исполнения нетипичных SQL-запросов используется компонент «SQL_Firewall». Компонент SQL_Firewall просматривает запросы к СУБД, которые могут быть выполнены, и предотвращает либо предупреждает о выполнении запросов, которые не найдены в установленных правилах («белых списках», WhiteList).

Компонент «SQL_Firewall» функционирует в режимах:

- "learning" – режим обучения;

- "enforcing" – режим применения;

- "permissive" – режим разрешающий любые SQL запросы;

- "disabled" – режим отключенного модуля.

Накопленные SQL-запросы хранятся и их можно просмотреть и скорректировать.

![](@site/docs/assets/images/com18.4.1/describe/media/image343.png)

Рисунок 3.50 – Просмотр правил брандмауэра в ОС GNU/Linux 

В полученном списке отражены поля:

- userid – идентификационный номер пользователя (идентификационный номер 10 присваивается роли postgres);

- queryid – идентификационный номер запроса;

- query – тело запроса;

- calls – вызовы.

Дополнительным функционалом компонента «SQL_Firewall» является применение обученной модели машинного обучения, которая определяет вероятность содержания во входящем запросе SQL-инъекции. Запросы, которые считаются безопасными, допускаются к выполнению. Запрос, который классифицируется как содержащий SQL-инъекцию, прерывается с выводом ошибки. Функциональность модели машинного обучения для компонента «SQL_Firewall» поддерживается:

- только в СУБД «Jatoba» версии 18;

- с установленной библиотекой для взаимодействия с моделями машинного обучения (Компонент «ONNX Runtime»);

- при условии использования совместимых операционных систем: Astra Linux 1.8 (x86-64), Debian 11, Debian 12, Альт 10 СП, Альт 10 Server, Ubuntu 22.04, Ubuntu 24.04, РЕД ОС 7.3 Муром, РЕД ОС 8, РОСА Хром 12.4.

### Регистрация событий безопасности

В комплект поставки СУБД входят компоненты регистрации событий:

- «pgAudit» – компонент расширенного журналирования событий СУБД;

- «ja_Log» – компонент централизованного сбора записей событий СУБД;

- «ja_seceventlog» - компонент записи событий безопасности;

- «pgBadger» – компонент формирования отчетов по журналам СУБД.

В зависимости от поставленных задач перечень используемых компонентов может меняться.

### Расширенная регистрация событий СУБД

Компонент «pgAudit» обеспечивает расширенное журналирование событий дополняя поле «Error message». Таким образом регистрируются дополнительные SQL-команды.

Сравнение регистрируемых SQL-команд при стандартной регистрации событий СУБД и с применением компонента «pgAudit» приведены в таблице 3.4.

Таблица 3.4 – Сравнительная таблица регистрируемых SQL-команд

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 31%" />
<col style="width: 16%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr>
<th colspan="2">
<p><strong>log_statement</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>pg_Audit</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Параметр</strong></p>
</td>
<td>
<p><strong>SQL-команды записывать в журнал</strong></p>
</td>
<td>
<p><strong>Параметр</strong></p>
</td>
<td>
<p><strong>SQL-команды записывать в журнал</strong></p>
</td>
</tr>
<tr>
<td>
<p>ALL</p>
</td>
<td></td>
<td>
<p>ALL</p>
</td>
<td></td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
<td rowspan="2">
<p>READ</p>
</td>
<td>
<p>SELECT</p>
</td>
</tr>
<tr>
<td>
<p>COPY TO</p>
</td>
</tr>
<tr>
<td rowspan="3">
<p>MOD</p>
</td>
<td>
<p>INSERT</p>
</td>
<td rowspan="3">
<p>WRITE</p>
</td>
<td>
<p>INSERT</p>
</td>
</tr>
<tr>
<td>
<p>UPDATE</p>
</td>
<td>
<p>UPDATE</p>
</td>
</tr>
<tr>
<td>
<p>DELETE</p>
</td>
<td>
<p>DELETE</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 31%" />
<col style="width: 16%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr>
<th colspan="2">
<p><strong>log_statement</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>pg_Audit</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Параметр</strong></p>
</td>
<td>
<p><strong>SQL-команды записывать в журнал</strong></p>
</td>
<td>
<p><strong>Параметр</strong></p>
</td>
<td>
<p><strong>SQL-команды записывать в журнал</strong></p>
</td>
</tr>
<tr>
<td rowspan="5"></td>
<td>
<p>TRUNCATE</p>
</td>
<td rowspan="2"></td>
<td>
<p>TRUNCATE</p>
</td>
</tr>
<tr>
<td>
<p>COPY FROM</p>
</td>
<td>
<p>COPY FROM</p>
</td>
</tr>
<tr>
<td>
<p>PREPARE</p>
</td>
<td rowspan="3"></td>
<td rowspan="3"></td>
</tr>
<tr>
<td>
<p>EXECUTE</p>
</td>
</tr>
<tr>
<td>
<p>EXPLAIN ANALYZE</p>
</td>
</tr>
<tr>
<td rowspan="3">
<p>DDL</p>
</td>
<td>
<p>CREATE</p>
</td>
<td rowspan="3">
<p>DDL</p>
</td>
<td>
<p>CREATE</p>
</td>
</tr>
<tr>
<td>
<p>ALTER</p>
</td>
<td>
<p>ALTER</p>
</td>
</tr>
<tr>
<td>
<p>DROP</p>
</td>
<td>
<p>DROP</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
<td rowspan="2">
<p>FUNCTIO</p>
<p>N</p>
</td>
<td>
<p>CALL</p>
</td>
</tr>
<tr>
<td>
<p>DO</p>
</td>
</tr>
<tr>
<td rowspan="4"></td>
<td rowspan="4"></td>
<td rowspan="4">
<p>ROLE</p>
</td>
<td>
<p>GRANT</p>
</td>
</tr>
<tr>
<td>
<p>REVOKE</p>
</td>
</tr>
<tr>
<td>
<p>ALTER DEFAULT</p>
<p>PRIVILEGES</p>
</td>
</tr>
<tr>
<td>
<p>SET ROLE</p>
</td>
</tr>
<tr>
<td rowspan="5"></td>
<td rowspan="5"></td>
<td rowspan="5">
<p>MISC</p>
</td>
<td>
<p>DISCARD</p>
</td>
</tr>
<tr>
<td>
<p>FETCH</p>
</td>
</tr>
<tr>
<td>
<p>CHECKPOINT</p>
</td>
</tr>
<tr>
<td>
<p>VACUUM</p>
</td>
</tr>
<tr>
<td>
<p>SET</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td>
<p>MISC_SET</p>
</td>
<td>
<p>SET</p>
</td>
</tr>
<tr>
<td>
<p>NONE</p>
</td>
<td></td>
<td>
<p>NONE</p>
</td>
<td></td>
</tr>
</tbody>
</table>

### Компонент «ja_seceventlog»

Компонент «ja_seceventlog» формирует событий безопасности СУБД в соответствии с ГОСТ-Р-59548-2022 «Национальный стандарт Российской Федерации. Защита информации. Регистрация событий безопасности. Требования к регистрируемой информации» и хранения их в отдельном каталоге.

Компонент устанавливает собственные и независимые параметры регистрации событий и вырезает события безопасности из журнала аудита СУБД, складывая их

- в свой журнал (в отдельном каталоге);

- во временную таблицу в БД.

При этом параметры регистрации событий безопасности гораздо шире чем в компоненте «pg_audit».

Перечень регистрируемых событий регулируется установленными фильтрами.

Для передачи событий безопасности в JDS используются компонент «ja_Log».

:::info Дополнительная информация
Компонент «ja_seceventlog» не поддерживается в СУБД «Jatoba» с версией ядра «4»
:::

### Централизованный сбор событий СУБД

Компонент «ja_Log» предназначен для сбора событий безопасности с целевых СУБД «Jatoba» в служебную СУБД «Jatoba data safe».

При клиент-серверной установке на серверах целевых СУБД устанавливается агент компонента, а на сервере служебной СУБД серверная часть компонента. Передача данных осуществляется по протоколу Libpq или TLS.

![](@site/docs/assets/images/com18.4.1/describe/media/image351.png)

Рисунок 3.51 – Схема работы компонента при клиент-серверной установке

### Формирование отчетов по журналам СУБД

Компонент «pgBadger» обладает следующими функциональными возможностями:

- сбор общих данных о работе СУБД из файлов регистрации событий, в том числе о сессиях пользователя (выполненные SQL-запросы), и предоставление данных администратору в виде HTML-отчетов;

- выявление проблемных мест в производительности СУБД;

- поиск и анализ запросов, подлежащих оптимизации.

### Пароли и парольные политики

Парольные политики реализуются компонентом «SecurityProfile» при методе идентификации PASSWORD.

Привилегированный пользователь имеет возможности:

- смены пароля пользователя;

- снятия блокировки пользователя;

- создания профиля парольной политики;

- назначения пользователю профиля парольной политики;

- смены параметров профиля парольной политики и т.д.

Компонент «SecurityProfile» имеет функциональную возможность распределять учетные записи по применяемым к ним парольным политикам. Как было описано ранее, возможно применять парольные политики по умолчанию, создавать собственные, либо использовать преднастроенные профили парольных политик.

Роли (пользователи) СУБД могут прикрепляться к вновь создаваемым или к преднастроенным профилям парольных политик:

- FSTEC_1_class – профиль для ИС первого класса защищенности;

- FSTEC_2_class – профиль для ИС второго класса защищенности;

- CIS – профиль, основанный на рекомендациях Center for Internet Security;

- Corporate_1 – корпоративный профиль первого уровня для учетных записей пользователей;

- Corporate_2 – корпоративный профиль второго уровня для учетных записей администраторов программных (программно-аппаратных средств);

- Corporate_3 – корпоративный профиль третьего уровня для технических (сервисных, служебных) учетных записей, используемых в технологических процессах ИС или встроенных производителями программных (программно-аппаратных) средств в такие средства.

### Генератор паролей «pwgen»

Расширение «pwgen» служит в качестве генератора пароля или множества паролей, с возможностью задания параметров.

:::info Дополнительная информация
Компонент «pwgen» не поддерживается в СУБД «Jatoba» с версией ядра «4»
:::

### Маскирование паролей «ja_pwmasking»

На уровне патча ядра СУБД реализована функциональная возможность маскирования паролей. Пароли, вводимые в открытом виде и хэшированные пароли в формате SHA256 и MD5 в журнале аудита СУБД, будут маскированы.

:::info Дополнительная информация
Патч ядра «ja_pwmasking» не поддерживается в СУБД «Jatoba» с версией ядра «4»
:::

### Поддержка работы СУБД с геоданными

В СУБД «Jatoba» реализован набор расширений PostGIS, обеспечивающий управление пространственными данными для построения на базу СУБД геоинформационных систем. Набор расширений включает дополнительные типы данных и процедуры обработки данных этих типов.

### Контроль целостности

СУБД «Jatoba» на уровне ядра поддерживает несколько механизмов обеспечения целостности данных.

Первый встроенный механизм СУБД позволяет проводить проверки корректности данных, которые пользователь вносит в базу данных. Реализована программная возможность включения этих проверок для отдельных полей таблиц по выбору пользователя. Также реализована система ограничений, накладываемая на данные, помещаемые в таблицы. Данные ограничения позволяют обеспечивать ссылочную целостность данных в разных таблицах.

Вторым механизмом контроля целостности является компонент «ja_CSum» предназначенный для выполнения периодических фоновых проверок фалов, расположенных в ключевых директориях СУБД, а также:

- конфигурации системы управления базами данных;

- конфигураций баз данных;

- процедур (программного кода) системы управления базами данных;

- процедур (программного кода), хранимых в базах данных.

Компонент «ja_CSum» опосредовано может взаимодействовать с другими компонентами СУБД «Jatoba», такими как:

- пользовательский веб-интерфейс для администраторов, компонент «Jatoba data safe» (643.72410666.00067-075 98 01-07 Руководство по настройке. Часть 7);

- компонент централизованного сбора записей событий СУБД «ja_Log» (643.72410666.00067-075 98 01-12 Руководство по настройке. Часть 12).

![](@site/docs/assets/images/com18.4.1/describe/media/image352.png)

Рисунок 3.52 – Схема взаимодействия компонентов

В процессе работы «ja_CSum» записывает сгенерированные события безопасности в СУБД (в хранилище событий).

Компонент централизованного сбора записей событий СУБД «ja_Log», получив указание от сервера, собирает события безопасности базы данных «ja_Log» в служебную СУБД компонента «Jatoba data safe».

Из базы данных события безопасности передаются в пользовательский веб-интерфейс для администраторов компонента «JDS», который передает события безопасности в разделе «Event List».

Отфильтровать события безопасности можно при помощи текстового поиска, как представлено на рисунке 3.53.

![](@site/docs/assets/images/com18.4.1/describe/media/image353.png)

Рисунок 3.53 – Отображение событий безопасности в веб-интерфейсе

### Обфускации кода

Компонент обфускации кода PL/pgSQL добавляет в СУБД новый язык plspgsql, обеспечивающий разработчику дополнительные функции безопасности при создании хранимых процедур.

В состав СУБД «Jatoba» включена утилита обфускации wplpgsql, которая создает в dst-dir обфусцированную версию src-dir с заменой процедур и функций с языка 'plpgsql' на 'plspgsql'.

Утилита обфускации использует серверную часть СУБД для обфускации отдельных SQL-команд.

Процесс сокрытия исходных текстов, процедур и функций в СУБД «Jatoba» отображен на рисунке 3.54.

![](@site/docs/assets/images/com18.4.1/describe/media/image354.png)

Рисунок 3.54 – Процесс сокрытия процедур и функций в СУБД «Jatoba»

### Формирование HTTP/HTTPS запросов из СУБД

Компонент формирования HTTP/HTTPS запросов из СУБД «pgSQL-HTTP» поддерживает формирование HTTP-запросов (http_request) к СУБД и формирование HTTP-ответов (http_response) из СУБД.

В частности, поддерживает функции:

- http_header;

- http;

- http_get;

- http_post;

- http_put;

- http_patch;

- http_delete;

- http_head;

- http_set_curlopt;

- http_reset_curlopt;

- http_list_curlopt;

- urlencode.

**Например**

Для отправки простого документа JSON на веб-сервер формируется SQL-команда:

```
SELECT status, content_type, content::json->>'data' AS data FROM http_patch('http://httpbin.org/patch',
'{"this":"that"}', 'application/json');
```

![](@site/docs/assets/images/com18.4.1/describe/media/image390.png)

Рисунок 3.55 – Отправка простого документа JSON

### Компрессия данных. Компонент «ja_Сompression»

Компонент «ja_Сompression» предназначен для экономии имеющегося дискового пространства физического сервера СУБД.

Для каждой таблицы СУБД «Jatoba», соответствуют определённые файлы на диске. В файлы данные поступают в следующих обстоятельствах: после операций commit, checkpoint и вытеснения буфера из памяти на диск.

Табличные пространства стоят выше по иерархии чем БД, поэтому возможны следующие варианты использования компрессии:

− табличные пространства с компрессией;

Все включенные и/или перенесенные таблицы, индексы и БД будут подвергнуты компрессии:

- таблицы с компрессией;

- индексы с компрессией.

Компонент совместим с БД 1С и может использоваться с любыми конфигурациями.

:::info Дополнительная информация
Компонент «ja_Сompression» может использоваться с СУБД «Jatoba» версий 6.x и выше, под управлением операционной системы GNU/Linux
:::

### Полнотекстовый поиск и определение похожих текстов

Компонент «ja_Similar» предназначен для предоставления функции и операторы для определения схожести текстов на основе техники хеширования, чувствительного к близким значениям (Locally-Sensitive Hashing, или LSH).

Решение такого типа задачи ранее не было доступно в PostgreSQL. С помощью этого расширения решаются типы задач:

- поиск плагиата;

- сравнение содержания статей;

- дедупликация документов;

- поиск аномалий в типовых документах;

- сравнение с эталоном на схожесть.

Загружая в БД искомый текст и дамп текстов, применяя стандартный SQL-запрос получается список статей, содержимое которых имеет схожесть с нашим искомым куском текста, и эту самую расчетную схожесть.

```
SELECT t.id, minhash_similarity(t.text_col, :'query_text') AS similarity
FROM user_tbl AS t
WHERE t.content <~> :'query_text' ORDER BY similarity DESC;
```

![](@site/docs/assets/images/com18.4.1/describe/media/image391.png)

Рисунок 3.56 – Запрос и вывод схожести текстов

:::info Дополнительная информация
Компонент «ja_Similar» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционной системы GNU/Linux
:::

### Проверка орфографии и морфологический анализ. Компонент «hunspell»

Компонент «hunspell» - это свободная библиотека для проверки орфографии и морфологического анализа.

обеспечивает:

- Проверку правописания;

- Поддержку множества языков за счёт внешних словарей.

При совместном использовании компонентов «tsvector2» и «hunspell» доступно:

- Искать слово в любом падеже (например, «проверка» → найдёт и

«проверки», и «проверку»);

- Игнорировать стоп-слова (если они заданы в конфигурации);

- Строить эффективные индексы для быстрого поиска.

:::info Дополнительная информация
Компонент «tsvector2» и «hunspell» не поддерживается в СУБД «Jatoba» с версией ядра «4»
:::

### Поиск ближайших соседей (KNN для B-TREE)

Метод K-ближайших соседей (K-nearest neighbors, KNN) — это метод, используемый для решения задач классификации и регрессии. KNN основан на идее,

что объекты, которые находятся рядом в пространстве признаков, вероятно относятся к одной категории.

При использовании KNN для классификации нового объекта вычисляются расстояния до всех известных объектов в наборе. Затем выбирается K объектов с наименьшими расстояниями (ближайшие соседи).

Области применения метода KNN:

- предварительная обработка данных;

- механизмы рекомендаций;

- финансы: (прогнозирование фондового рынка, курсы валют, торговые фьючерсы и анализ отмывания денег);

- здравоохранение;

- распознавание образов: (идентификация шаблонов, например, при классификации текста и цифр).

Когда выполняется поиск на основе этого индекса, он проходит вниз по дереву, чтобы найти ключ, по которому дерево построено, а затем возвращает искомые данные. Использование индекса гораздо быстрее, чем последовательное сканирование.

![](@site/docs/assets/images/com18.4.1/describe/media/image357.png)

Рисунок 3.57 – K Nearest Neighbors для B-tree

:::info Дополнительная информация
Патч ядра «KNN» не поддерживается в СУБД «Jatoba» с версией ядра «18»
:::

### 64-битный счетчик транзакций. Компонент XID64

Для обеспечения работы механизма MVCC (управление параллельным доступом посредством многоверсионности транзакций) СУБД «Jatoba» отслеживает, какие транзакции уже завершены, а какие еще активны.

Для этого каждой транзакции в СУБД «Jatoba» присваивается уникальный номер — идентификатор (xid). Его можно узнать, используя функцию txid_current().

Применяемый 64-битный счетчик транзакции xid64 в СУБД «Jatoba» в условиях высокой транзакционной нагрузки, позволяет избежать его «переполнения» (как в случае использования 32-битного счетчика и риска остановки работы БД) и дает гораздо большую свободу администраторам БД.

:::info Дополнительная информация
Компонент «XID64» не поддерживается в СУБД «Jatoba» с версией ядра «4» и «18»
:::

### Инвентаризация СУБД. Компонент «ja_Inventory»

Компонент «ja_Inventory» предназначен для сбора информации об установленных СУБД «Jatoba» в форме отчета в формате JSON. В отчет включается информация о:

- версии СУБД;

- количествах ядер сервера;

- используемых расширениях.

Отчет имеет вид, показанный на рисунке 3.58.

![](@site/docs/assets/images/com18.4.1/describe/media/image358.png)

Рисунок 3.58 – Вид отчета о хосте

### Разрешение (запрет) действий пользователей, разрешенных до идентификации и аутентификации

Выполнение условий эксплуатации, в частности исключение применения метода аутентификации «Trust», который предполагает, что любой подключающийся к серверу пользователь авторизован для доступа к базе данных вне зависимости от указанного имени пользователя базы данных, позволяет запретить любые действия пользователей, разрешенных до идентификации и аутентификации.

## ПРИЛОЖЕНИЕ 1

(обязательное)

### Реализуемые функции СУБД

СУБД «Jatoba» реализует следующие функциональные возможности:

а) управление данными во внешней памяти;

б) управление данными в оперативной памяти;

в) выполнение запросов (DDL/DML);

г) управление транзакциями;

д) журнализация изменений, резервное копирование и восстановление базы данных после сбоев, репликация.

В дополнение к стандартным возможностям управления базами данных, реализует следующие функции:

а) хранение пространственных, географических и геометрических данных, поддержка запросов к ним и управление ими;

б) синтаксическая совместимость с распространенными PL/SQL Oracle; в) расширенные возможности секционирования больших таблиц;

г) протоколирование, анализ и запрет выполнения команд манипулирования данными (DDL/DML);

д) сбор журналов аудита всех операций и загрузка конфигураций в СУБД; е) журналирование операций доступа к защищенным таблицам;

ж) работа в составе отказоустойчивого кластера с механизмом переключения нагрузки на основной узел кластера;

з) защита от несанкционированного изменения конфигурационных файлов; и) единый пользовательский интерфейс для управления конфигурациями

компонентов СУБД и просмотра их состояния.

к) поддержка предустановленных профилей парольных политик:

- FSTEC_1_class – профиль для ИС первого класса защищенности;

- FSTEC_2_class – профиль для ИС второго класса защищенности;

- CIS – профиль, основанный на рекомендациях Center for Internet Security;

- Corporate_1 – корпоративный профиль первого уровня для учетных записей пользователей;

- Corporate_2 – корпоративный профиль второго уровня, для учетных записей администраторов программных (программно-аппаратных средств);

- Corporate_3 – корпоративный профиль третьего уровня для, технических (сервисных, служебных) учетных записей, используемых в технологических

процессах ИС или встроенных производителями программных (программно-аппаратных) средств в такие средства.

л) СУБД «Jatoba» поддерживает методы аутентификации:

- PASSWORD, MD5, SCRAM-SHA-256;

- GSSAPI / SSPI (Kerberos);

- Ident;

- Peer;

- LDAP (LDAPS);

- PAM;

- RADIUS;

- OAuth (только для версии J18);

- Certificate.

м) синхронизация УЗ со службой каталогов/доменов (Active Directory, FreeIPA, ALD Pro, Samba).

н) ограничение создания ролей администраторами БД/СУБД.

о) создание защищенных таблиц, ограничивающих доступ суперпользователей СУБД.

п) полнотекстовый поиск и определение похожих текстов.

### Основные функциональные возможности управления базами данных

СУБД «Jatoba» обладает следующими характеристиками:

1)  Многоверсионность (Multiversion Concurrency Control (MVCC)). Должна быть реализована защита транзакций от несогласованных изменений данных, которые могли быть вызваны (другой) конкурентной транзакцией, и обеспечена изоляция транзакций.

2)  Журналирование. Должен быть реализован механизм протоколирования всех транзакций Write Ahead Logging (WAL).

3)  Журналирование выполнения транзакций независимо от результата выполнения родительской транзакции средствами администрирования и мониторинга.

4)  Point in Time Recovery (PITR) – возможность восстановления базы данных (используя WAL) на любой момент в прошлом, что позволяет осуществлять непрерывное резервное копирование кластера.

5)  Поддержка целостности данных на уровне схемы – внешние ключи (foreign keys), ограничения (constraints).

6)  Поддержка стандартных индексов – B-tree, hash, R-tree, GiST (обобщенное поисковое дерево).

7)  Поддержка частичных индексов (partial indices).

8)  Поддержка функциональных индексов.

9)  Наличие планировщика запросов, выполняющего оценку требуемых для выполнения запроса ресурсов и предоставляющего пользователю возможность отлаживать запросы и настраивать планы выполнения.

10) Организация хранения данных на уровне Tablespaces (табличные пространства).

11) Поддержка организации схем, которые обеспечивают пространство имен на уровне SQL.

12) Поддержка Subqueries – подзапросы (subselects), полная поддержка SQL92.

13) Поддержка Outer Joins – внешние связки (LEFT, RIGHT, FULL).

14) Поддержка Rules – правила, согласно которым модифицируется исходный

запрос.

15) Поддержка Views – представления, виртуальные таблицы.

16) Поддержка Cursors – курсоры, позволяющие уменьшить трафик между

клиентом и сервером.

17) Поддержка Table Inheritance – наследование таблиц.

18) Поддержка Prepared Statements (преподготовленные запросы).

19) Поддержка Stored Procedures – серверные (хранимые) процедуры, позволяющие реализовывать бизнес-логику приложения на стороне сервера.

20) Поддержка табличных триггеров базы данных и триггеров событий.

21) Поддержка Savepoints (nested transactions), позволяющая отменять работу части транзакции, без влияния на оставшуюся часть транзакции.

22) Поддержка права доступа к объектам системы на основе системы привилегий, разграничение доступа к таблицам на уровне строк, интеграции с подсистемой SE-Linux.

23) Высокогранулярный контроль доступа к объектам БД (например, вплоть до поля в таблице или видимость строки по условию на поле).

24) Cluster table – упорядочивание записей таблицы на диске согласно индексу.

25) Поддержка массивов стандарту SQL:2003.

26) Поддержка транзакций, обеспечивающих атомарность, согласованность, изолированность, долговечность (ACID).

27) Поддержка механизма исправления повреждённых данных WAL из буферов в оперативной памяти.

28) Наличие встроенных средств для построения кластеров высокой доступности с автоматических восстановлением узлов.

29) Поддержка размещения файлов данных на NFS.

30) Возможность передачи событий безопасности в системы информационно-технологического мониторинга и системы учета событий информационной безопасности.

31) Наличие механизма управления подключений к системе управления базами данных.

32) Наличие единого пользовательского интерфейса для оценки состояния

СУБД.

33) Поддержка функциональных возможностей OLAP.

34) Поддержка механизмов прямой и обратной сортировки.

35) Поддержка механизмов сортировки по пользовательскому словарю.

36) Наличие средств мониторинга экземпляра БД в разрезе событий, сессией,

процессов.

37) Поддержка параллельного экспорта/импорта данных.

38) +Поддерживаемая гранулярности экспорта/импорта (при выполнении экспорта/импорта существует возможность экспортировать/импортировать как всю БД, так и отдельные схемы, таблицы, данные, метаданные).

39) Наличие механизмов оперативного обмена данными с другими БД того же типа по установленным каналам (DBLINK).

40) Поддержка 64-битного счетчика транзакций.

41) Поддержка работы в многопоточном режиме (Hyper-Threading Technology).

42) Поддержка неблокируемых операций с индексами (создание/удаление индексов без существенного влияния на другие протекающие с данной таблицей операции).

43) Поддержка проведения распределённых транзакций.

44) Поддержка синхронной и асинхронной репликации данных между несколькими БД одного и того же типа.

45) Работа в составе географически распределенного кластера с автоматическим механизмом переключения нагрузки на основной узел кластера.

46) Поддержка секционирования таблиц;

47) Поддержка создания зеркальной копии БД пересылкой блоков данных (так называемый «Теплый режим ожидания»);

48) Оконные функции и запросы. Поддержка сложных аналитических запросов, включая оконные функции для вычислений внутри наборов данных;

49) Процедурные языки. Написание пользовательских функций и процедур (PL/pgSQL, C, Python, Perl, JavaScript и др.).

В части управления базами данных в СУБД «Jatoba» реализует следующие функциональные возможности:


<table>
<colgroup>
<col style="width: 75%" />
<col style="width: 6%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: left;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th style="text-align: left;"><strong>J18</strong></th>
<th style="text-align: left;"><strong>J6</strong></th>
<th style="text-align: left;"><strong>J5</strong></th>
<th style="text-align: left;"><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p><strong>Backend</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>64-битные большие объекты</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Рекомендуемые блокировки</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Пользовательские фоновые процессы</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Дисковая карта свободного пространства</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Динамические фоновые процессы</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка EXPLAIN (BUFFERS)</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка EXPLAIN (MEMORY)</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">-</td>
<td style="text-align: left;">-</td>
<td style="text-align: left;">-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка EXPLAIN (SERIALIZE)</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">-</td>
<td style="text-align: left;">-</td>
<td style="text-align: left;">-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка EXPLAIN (WAL)</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Формат журнала логов jsonlog</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Загружаемая инфраструктура плагинов для мониторинга планировщика</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка полезной нагрузки для LISTEN/NOTIFY</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Системное представление - pg_stat_checkpointer</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">-</td>
<td style="text-align: left;">-</td>
<td style="text-align: left;">-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Представление метрик ввода-вывода - pg_stat_io</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">-</td>
<td style="text-align: left;">-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Системное представление pg_wait_events</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">-</td>
<td style="text-align: left;">-</td>
<td style="text-align: left;">-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Статистика сервера в разделяемой памяти</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Информационная схема, соответствующая стандарту SQL</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка анонимной разделяемой памяти</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Вывод команды EXPLAIN в форматах XML, JSON и YAML.</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Типы данных, функции и операторы</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Массивы составных типов</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка массивов</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип данных ENUM</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип данных GUID/UUID</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип данных macaddr8</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Многодиапазонный тип</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Нулевые значения в массиве</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поиск по фразе</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Диапазонный тип</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип smallserial</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка модификатора типов</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип UUIDv7</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">-</td>
<td style="text-align: left;">-</td>
<td style="text-align: left;">-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип данных XML</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Индексы и ограничения</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Индексы BRIN</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Удаление индекса B-tree снизу вверх</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Дедупликация B-tree индексов</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Индексы GiST с поддержкой Concurrenrly</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Покрывающие индексы B-tree (INCLUDE)</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Покрывающие индексы GiST (INCLUDE)</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Отложенные уникальные ограничения</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Ограничения исключений</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Индексы GIN</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Частичное совпадение индексов GIN</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Улучшения производительности и размера индекса GIN</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Индексы GiST</p>
</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">+</td>
<td style="text-align: left;">
<p>+</p>
</td>
<td style="text-align: left;">
<p>+</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 33%" />
<col style="width: 8%" />
<col style="width: 6%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 1%" />
</colgroup>
<thead>
<tr>
<th colspan="3" rowspan="2" style="text-align: left;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: left;">
<p><strong>Версия ядра</strong></p>
</th>
<th rowspan="52" style="text-align: left;"></th>
</tr>
<tr>
<th style="text-align: left;"><strong>J18</strong></th>
<th style="text-align: left;"><strong>J6</strong></th>
<th style="text-align: left;"><strong>J5</strong></th>
<th style="text-align: left;"><strong>J4</strong></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Индексы выражений</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Сканирование только индекса</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Сканирование только индекса GiST</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка индексов для IS NULL</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Bitmap индексы в оперативной памяти</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка метода k-ближайших соседей GiST</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка метода k-ближайших соседей SP-GiST</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Неблокирующий CREATE INDEX</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Параллельное сканирование индексов B-деревьев</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Параллельное выполнение команды CREATE INDEX для BRIN индексов</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Параллельное выполнение команды CREATE INDEX для B-tree индексов</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Параллельное выполнение команды CREATE INDEX для GIN индексов</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Пропуск сканирования многоколоночных B-tree индексов</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Пространственно-разделенные индексы GiST (SP-GiST)</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Индексы SP-GiST для диапазонных типов</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка UNIQUE NULLS NOT DISTINCT</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка WAL для хэш-индексов</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p><strong>Язык SQL</strong></p>
</th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Агрегатная функция ANY_VALUE</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка оператора FETCH FIRST .. WITH TIES</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка группировки GROUPING SETS, CUBE and ROLLUP</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка операторов INSERT/UPDATE/DELETE RETURNING</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Предложение LATERAL</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка MERGE</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка MERGE... RETURNING</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Многострочные VALUE</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Целочисленные литералы, не являющиеся десятичными числами</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка сортировки ORDER BY NULLS FIRST/LAST</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Агрегатная функция по диапазонному типу range_agg</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Рекурсивные запросы</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка функций regexp_count, regexp_instr, regexp_like</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Возврат OLD и NEW значений из измененных строк</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Построчное сравнение</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Режим блокировки SELECT FOR NO KEY UPDATE/SELECT FOR KEY SHARE</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>SQL-стандарт обработка интервалов</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Пользователь SYSTEM_USER</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Оператор TABLE</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Подчеркивания (_) используется в качестве разделителей тысяч</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка функций unnest/array_agg</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка оператора Upsert (INSERT ... ON CONFLICT DO ...)</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Оконные функции</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка оператора WITHIN GROUP</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка оператора WITH ORDINALITY</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Запросы с оператором WITH (общие табличные выражения)</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Запросы с возможностью записи с использованием оператора WITH (общие табличные выражения)</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p><strong>DDL</strong></p>
</th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>ALTER &lt;объект&gt; IF EXIST</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>ALTER TABLE ... ADD UNIQUE/PRIMARY KEY USING INDEX</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>ALTER TABLE ... SET ACCESS METHOD</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>ALTER TABLE ... SET LOGGED / UNLOGGED</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>№ изменения:</p>
</td>
<td style="text-align: left;">
<p>Подпись отв. лица:</p>
</td>
<td colspan="6" style="text-align: left;">
<p>Дата внесения изм.:</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 75%" />
<col style="width: 6%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: left;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th><strong>J18</strong></th>
<th><strong>J6</strong></th>
<th><strong>J5</strong></th>
<th><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Изменение типов столбцов (ALTER TABLE .. ALTER COLUMN TYPE)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>CREATE ACCESS METHOD</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>CREATE TABLE ... (LIKE) с использованием внешних таблиц, представлений и составных типов</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>DROP &lt;объект&gt; IF EXISTS</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>ON COMMITв предложении для CREATE TEMPORARY TABLE</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>REINDEX CONCURRENTLY</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Сохранение сгенерированных столбцов</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Временные ограничения (temporal)</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Типизированные таблицы</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Виртуальные сгенерированные столбцы</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Производительность</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Сокращенные ключи</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Асинхронная фиксация</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Асинхронный ввод-вывод (AIO)</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Автоматическая аннулирование плана</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Фоновый процесс создания контрольных точек (Background Checkpointer)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Фоновый процесс записи данных на диск (Background Writer)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Регулирование скорости резервного копирования</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>CREATE STATISTICS - наиболее часто встречающихся значений (MCV) статистики</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>CREATE STATISTICS - многоколоночная</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>CREATE STATISTICS - статистика "OR" и "IN/ANY"</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка перекрестного хэширования типов данных</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Распределенное создание контрольных точек</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Отметка внешних ключей как NOT VALID</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Карта замороженных страниц</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Полнотекстовый поиск</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Для агрегирования хеш-функций можно использовать дисковое пространство</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка хеширования для DISTINCT/UNION/INTERSECT/EXCEPT</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка хеширования для FULL OUTER JOIN, LEFT OUTER JOIN и RIGHT OUTER JOIN</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Кортежи только с кучей (HOT)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Улучшенная производительность для сортировок, превышающих объем work_mem</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Улучшена производительность оконных функций</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Пошаговая сортировка</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Пошаговая сортировка для SELECT DISTINCT</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Пошаговая сортировка для оконных функций</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Встроенные запросы WITH (общие табличные выражения)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Встраивание SQL-функций</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Компиляция «на лету» (JIT) для оценки выражений и деформации кортежей</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Балансировка нагрузки для libpq/psql</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Сжатие LZ4 для таблиц TOAST</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Масштабируемость многоядерных процессоров для рабочих нагрузок только чтение</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Несколько временных табличных пространств</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Переупорядочивание внешнего соединения</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параллельное сканирование кучи битовых карт</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 75%" />
<col style="width: 6%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: left;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th><strong>J18</strong></th>
<th><strong>J6</strong></th>
<th><strong>J5</strong></th>
<th><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Параллельные FULL и RIGHT соединения</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параллельное сканирование всей таблицы (последовательное сканирование)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параллельные хеш-соединения</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Агрегирование параллельного соединения (JOIN)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параллельные слияния</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параллельный запрос</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параллельный "SELECT DISTINCT"</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Возможность частичной сортировки (top-n sorting)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Конвейерный режим обработки запросов</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Снижен уровень блокировки для команд ALTER TABLE</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>SELECT ... FOR UPDATE/SHARE NOWAIT</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Установка индивидуальной стоимости для табличных пространств CREATE/ALTER TABLESPACE ... SET (seq_page_cost = ...,</p>
<p>random_page_cost = ...)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Общая блокировка на уровне строк</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка SIMD для ARM</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка SIMD для x86</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Предложение SKIP LOCKED</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Синхронизированное последовательное сканирование</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Предложение TABLESAMPLE</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Табличные пространства</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Нежурналируемые таблицы</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Автоматическая настройка размера WAL-буфера</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>JSON</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Улучшен набор функций и операторов для работы с JSON.</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип данных JSONB</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Операторы и функции, изменяющие JSONB</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Использование синтаксиса JSONB</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип данных JSON</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Конструкторы SQL/JSON</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Функция SQL/JSON: datetime()</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Предикат SQL/JSON IS JSON</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Предикат SQL/JSON JSON_TABLE</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Предикаты путей SQL/JSON</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Функции для выполнения запросов SQL/JSON</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Секционирование и наследование</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Ускоренное удаление секций</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Декларативное секционирование таблиц</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Секционирование по умолчанию</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Ссылки на внешние ключи для секционированных таблиц</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Наследование внешней таблицы</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Секционирование данных по хеш-ключу</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Удаление секций во время выполнения запроса</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка первичных ключей, внешних ключей, индексов и триггеров для секционированных таблиц.</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Секционирование таблиц</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>UPDATE по ключу секционирования</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Представления и материализованные представления</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Материализованные представления</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Обновление материализованных представлений без блокировки</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Представление SECURITY INVOKER</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 75%" />
<col style="width: 6%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: left;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th><strong>J18</strong></th>
<th><strong>J6</strong></th>
<th><strong>J5</strong></th>
<th><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Временные (temporary) представления</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Обновляемые представления</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Предложение WITH CHECK</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Репликация</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>ALTER SUBSCRIPTION ... SKIP</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Каскадная потоковая репликация</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Настройка максимальный размера WAL для слотов репликации</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка отказоустойчивости для слотов логической репликации</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Логическая репликация</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Логическая репликация с предотвращением зацикливания репликации</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Списки столбцов логической репликации</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Логическая репликация для секционированных таблиц</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Логическая репликация из резервных копий</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Логическая репликация сохраненных сгенерированных столбцов</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Логическая репликация, начальная синхронизация с использованием бинарного протокола</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Логическая репликация запросов с использованием дополнительных индексов</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Логическая репликация, параллельное применение транзакций</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Логическая репликация, публикация всех таблиц в схеме</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Фильтрация строк логической репликации</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Логические слоты репликации мигрируют с помощью pg_upgrade</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Потоковая логическая репликация</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Возможность "Подписчика" логической репликации отключиться при возникновении ошибки</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Журналирование конфликтов логической репликации</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Фиксация кворума для синхронной репликации</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Слоты репликации</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Каскадная репликация только для потоковой передачи</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Потоковая репликация</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Синхронная репликация</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Резервное копирование, восстановление и целостность данных</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Модули архивирования</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Контрольная сумма страниц данных</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Включение/отключение контрольных сумм страниц в автономном кластере</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Унифицированные записи WAL</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Режим горячего ожидания</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Сжатие lz4 и Zstandard (zstd) для записи полных страниц WAL.</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параметр min_wal_size / max_wal_size</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка множества синхронных реплик</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Именованные точки восстановления</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параллельный pg_dump</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параллельное восстановление</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>pg_basebackup распаковка сжатой копии на клиенте</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>pg_basebackup инкрементальное резервное копирование</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>pg_basebackup сжатие на стороне сервера</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>инструмент pg_basebackup</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Опция для pg_dump, pg_dumpall, pg_restore --filler</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Утилита pg_receivewal (ранее pg_receivexlog)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Восстановление на определенный момент времени (PITR)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Предварительная загрузка WAL во время восстановления</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 75%" />
<col style="width: 6%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: left;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th><strong>J18</strong></th>
<th><strong>J6</strong></th>
<th><strong>J5</strong></th>
<th><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Режим remote_apply</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параметр задержки применения репликации по времени в режиме ожидания - recovery_min_apply_delay</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Проверка целостности резервной копии (pg_verifybackup)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>"Теплый режим" ожидания</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Обновление</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Опция для pg_upgrade --swap</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Статистика планировщика сохраняется при обновлении до мажорной версии</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Импорт и экспорт данных</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка COPY в/из STDIN/STDOUT</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка COPY FROM ... WHERE</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка COPY ... ON_ERROR</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка COPY с произвольным SELECT</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка CSV для COPY</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Управление конфигурацией</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка ALTER SYSTEM</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Ввод дробных значений для целых чисел</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Директива включения (include) в файлы pg_hba.conf и pg_ident.conf</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Настройки конфигурации для каждого пользователя/сервера базы данных ALTER ROLE/DATABASE</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Системное представление pg_config</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Регулярные выражения в файлах pg_hba.conf и pg_ident.conf</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Безопасность</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Проверка подлинности канала SCRAM</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Требование клиента проверки подлинности канала SCRAM</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Требования к аутентификации, заданные клиентом</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Права доступа на уровне столбцов</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Права доступа по умолчанию</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Прямое согласование по протоколу TLS ("sslnegotiation")</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка режима FIPS</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Операторы GRANT/REVOKE ON ALL TABLES/SEQUENCES/FUNCTIONS</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Защита соединения на стороне клиента и сервера с использованием GSSAPI</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка GSSAPI</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Делегирование учетных данных Kerberos</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Аутентификация krb5 (без gssapi) не поддерживается</p>
</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Контроль доступа к большим объектам</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Обнаружение LDAP-сервера</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Двухсторонняя аутентификация с использованием действительного клиентского SSL/TLS-сертификата</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Встроенная аутентификация LDAP</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Встроенная аутентификация RADIUS</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Аутентификация/авторизация OAuth</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Ограничения на подключение для каждого "пользователь/база данных"</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Предопределенные роли</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Права доступа к настройке параметров конфигурации</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Ролевая модель (ROLES)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Безопасность на уровне строк (RLS)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Аутентификация SCRAM-SHA-256</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Режим поиска и привязки для аутентификации LDAP</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 33%" />
<col style="width: 8%" />
<col style="width: 6%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 1%" />
</colgroup>
<thead>
<tr>
<th colspan="3" rowspan="2" style="text-align: left;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: left;">
<p><strong>Версия ядра</strong></p>
</th>
<th rowspan="53" style="text-align: left;"></th>
</tr>
<tr>
<th style="text-align: left;"><strong>J18</strong></th>
<th style="text-align: left;"><strong>J6</strong></th>
<th style="text-align: left;"><strong>J5</strong></th>
<th style="text-align: left;"><strong>J4</strong></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Опция security_barrier в представлениях</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Интерфейс поставщика услуг безопасности (SSPI)</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Защита аутентификационной информации с помощью SHA-2</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Проверка SSL-сертификатов в libpq</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Аутентификация с помощью клиентского SSL-сертификата</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Аутентификация SSPI через GSSAPI</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка использования доверенного центра сертификации операционной системы клиента.</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка наборов алгоритмов для защиты соединений TLS версии 1.3</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p><strong>Транзакции и видимость</strong></p>
</th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Курсоры</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Точки сохранения</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Уровень изоляция Serializable Snapshot</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Двухфазная фиксация транзакций</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Обновляемые курсоры</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p><strong>Автоочистка и техническое обслуживание</strong></p>
</th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Вставка данные может запустить автоматическую очистку</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Встроенный демон автоочистки</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Оптимизация заморозки страниц</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Параллельный VACUUM для индексов</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Параллельные задания vacuumDB</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Древовидная структура памяти для очистки</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Очистка в «аварийном режиме»</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Карта видимости для очистки</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p><strong>Внешние обертки данных (FDW)</strong></p>
</th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Аутентификация с помощью сертификата для postgres_fdw</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Оператор CREATE FOREIGN TABLE ... LIKE</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Параллелизм запросов с использованием внешней обертки данных</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Доступ к внешней обертки данных</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Внешние таблицы</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Оператор IMPORT FOREIGN SCHEMA</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Импорт разделов внешних таблиц</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Параллельное выполнение запросов к удаленным базам данных</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка для postgres_fdw параллельной фиксация транзакций</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Выполнение запросов postgres_fdw на внешнем сервере</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Сквозная аутентификация SCRAM для postgres_fdw</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
<th style="text-align: left;">-</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Внешние обертки данных для PostgreSQL</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Записываемые внешние обертки данных</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p><strong>Пользовательские функции, хранимые процедуры и триггеры</strong></p>
</th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
<th style="text-align: left;"></th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Оператор ALTER TABLE ENABLE/DISABLE TRIGGER</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>ОператорALTER TABLE / ENABLE REPLICA TRIGGER/RULE</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Оператор BEGIN ATOMIC тела функции</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Синтаксис CALL для выполнения процедур</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Триггеры на уровне столбцов</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Синтаксис CREATE PROCEDURE для хранимых процедур SQL</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Триггеры событий</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Предложение FILTER для агрегатных функций</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Поддержка ORDER BY внутри агрегации</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Параметры GUC для каждой функции</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Статистика для функций</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Оператор RETURN QUERY EXECUTE</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
<tr>
<th colspan="3" style="text-align: left;">
<p>Оператор RETURNS TABLE</p>
</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">+</th>
<th style="text-align: left;">
<p>+</p>
</th>
<th style="text-align: left;">
<p>+</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>№ изменения:</p>
</td>
<td style="text-align: left;">
<p>Подпись отв. лица:</p>
</td>
<td colspan="6" style="text-align: left;">
<p>Дата внесения изм.:</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 75%" />
<col style="width: 6%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: left;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th><strong>J18</strong></th>
<th><strong>J6</strong></th>
<th><strong>J5</strong></th>
<th><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Триггеры на уровне оператора</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Триггеры TRUNCATE на уровне оператора</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Триггеры в представлениях</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Вариативные функции</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Условие WHEN для триггера CREATE</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Процедурные языки</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Оператор CASE в pl/pgsql</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Оператор CONTINUE для PL/pgSQL</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Оператор CREATE TRANSFORM</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Оператор DO для pl/perl</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Оператор DO для PL/PGSQL</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка исключений в PL/pgSQL</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>ОператорEXECUTE USING в PL/pgSQL</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Оператор FOREACH IN ARRAY в pl/pgsql</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параметры IN/OUT/INOUT для PL/PGSQL и PL/SQL</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Именованные параметры</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Создание процедурного языка без прав суперпользователя</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Язык pl/pgsql используется по умолчанию</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Полиморфные функции</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка Python 3 для pl/python</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Квалифицированные параметры функций</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Параллельная обработка запросов для RETURN QUERY</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Оператор RETURN QUERY в pl/pgsql</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Указание параметров ROWS и COST для функций</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка прокручиваемых и обновляемых курсоров для PL/PGSQL</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Оператор SQLERRM/SQLSTATE для pl/pgsql</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка объектов Unicode в PL/Python</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Пользовательские исключения</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Функция валидатора для PL/Perl</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Расширения</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Оператор CREATE EXTENSION ... CASCADE</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Установка расширения</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Доверенные расширения</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Интернационализация</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Встроенная, независимая от платформы неизменяемая сортировка</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Функция casefold</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка сопоставления на уровне столбцов</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Сортировка на уровне базы данных</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Сортировка ICU по умолчанию для кластеров/баз данных</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка EUC_JIS_2004/ SHIFT_JIS_2004</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Сортировка ICU</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Сравнения LIKE для недетерминированных параметров сортировки</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка многобайтового кодирования, включая UTF8</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка нескольких языков</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Недетерминированные сопоставления</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Сортировка pg_unicode_fast</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Строковые литералы и идентификаторы Unicode</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка UTF8 в Windows</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Клиентские приложения</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тест производительности pgbench</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Утилита восстановления РК pg_combinebackup</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 75%" />
<col style="width: 6%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: left;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th><strong>J18</strong></th>
<th><strong>J6</strong></th>
<th><strong>J5</strong></th>
<th><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Преобразование физической репликации в логическую pg_createsubscriber</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Предварительная загрузка данных отношений в кеш буферов pg_prewarm</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Синхронизация каталога данных pg_rewind</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Инициализации резервных копий pg_standby (не используется)</p>
</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Обновление экземпляра сервера pg_upgrade</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Вывод журнала WAL в удобочитаемом виде pg_waldump</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Вывод содержимого WAL файлов pg_walsummary</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>pg_xlogdump, заменен на pg_waldump (не используется)</p>
</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Установка нового соединения psql \bind</p>
</td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Вывод списка параметров и значений конфигурации сервера psql \dconfig</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Конвейерные запросы psql</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Именованные подготовленные операторы psql</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка предыдущих версий psql</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Дополнительные модули (contrib)</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Набор инструментов поддержки pgAdmin - adminpack</p>
</td>
<td>-</td>
<td>-</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Задержка при ошибке аутентификации - auth_delay</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Автоматическая запись планов запросов - auto_explain</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Классы операторов GIN с поведением B-tree - btree_gin</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Классы операторов GIST с поведением B-tree btree_gist</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Nип данных для строк, нечувствительных к регистру - citex</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Подключение к другому серверу PostgreSQL - dblink</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка асинхронных уведомлений dblink</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Обращение к файлам данных - file_fdw</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Вычисление схожести и расстояния между строками - fuzzystrmatch</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип данных hstore для хранения пар ключ-значение - hstore</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Работа с целочисленными массивами - intarray</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>типы данных для международных стандартов нумерации (ISBN, EAN, UPC и т. д.) - isn (ISBN)</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка KNN для CUBE</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип данных для представления меток данных в иерархической древовидной структуре - ltree</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Низкоуровневое исследование страниц баз данных - pageinspect</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Проверка надежности пароля - passwordcheck</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Состояние буферного кеша - pg_buffercache</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Просмотр карты свободного пространства - pg_freespacemap</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Проверка компонентов логического декодирования - pg_logicalinspect</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Выгрузка дополнительной информации через команду EXPLAIN - pg_overexplain</p>
</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Отслеживание статистики планирования и выполнения SQL-операторов</p>
<p>- pg_stat_statements</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Улучшенный pg_stat_statements</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Получение статистики на уровне кортежа - pgstattuple</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка определения схожести текста на основе триграмм - pg_trgm</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Индексирование регулярных выражений pg_trgm</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Просмотр журнала предзаписи на низком уровне - pg_walinspect</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип данных для отрезков или интервалов чисел с плавающей точкой - seg</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Проверка безопасности на базе политик SELinux для мандатного управления доступом- sepgsql</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Получение информации об SSL-сертификате клиента - sslinfo</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Функции, возвращающие таблицы - tablefunc</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Триггерная функция, уведомляющая об изменениях в таблице - tcn</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 75%" />
<col style="width: 6%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: left;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th><strong>J18</strong></th>
<th><strong>J6</strong></th>
<th><strong>J5</strong></th>
<th><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Обертка совместимости tsearch2 (не поддерживается)</p>
</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Словарь текстового поиска, который убирает диакритические знаки - unaccent</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Генератор UUID - uuid-ossp</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>xml2 (не поддерживается)</p>
</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Сеть</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Полная поддержка SSL</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка IPv6</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Протокол клиента V2</p>
</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Протокол клиента V3</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p><strong>Поддерживаемые платформы</strong></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка Microsoft Visual C++</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Портированная версия для Windows</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка спин-блокировок для аппаратной платформы SuperH</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Компилятор Sun Studio на Linux</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Поддержка Windows x64</p>
</td>
<td>+</td>
<td>+</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
</tbody>
</table>

### Поддерживаемые типы данных

СУБД «Jatoba» поддерживает следующие типы данных:

1)  Числовые типы данных: целочисленные типы, числа с произвольной точностью, числа с плавающей точкой, последовательности. Которые включают: двух-, четырёх- и восьмибайтные целые, четырёх- и восьмибайтные числа с плавающей точкой, а также десятичные числа с задаваемой точностью.

2)  Денежный тип: money.

3)  Символьные типы данных (CHARACTER(n)), определенные в стандарте SQL, VARCHAR(n), и типа TEXT с практически неограниченной длиной.

4)  Двоичные типы данных - bytea, могут храниться в шестнадцатеричном формате и в формате спецпоследовательностей.

5)  Numeric – тип с произвольной точностью.

6)  Типы данных времени с точностью до микросекунд:

    - DATE – время суток без даты;

    - TIME – дата и время с учетом часового пояса;

    - TIMESTAMP – время суток с учетом часового пояса;

    - TIMESTAMP WITH TIMEZONE – дата и время (без часового пояса);

    - INTERVAL – интервал времени.

7)  Логический тип BOOLEAN.

8)  Перечисляемый типы: представляют собой статический, упорядоченный набор значений.

9)  Геометрические типы данных (point, line, circle, polygon, box) – для работы с пространственными данными на плоскости.

10) Сетевые типы данных (Network types) – inet для IPv4, IPv6, а также CIDR (Classless Internet Domain Routing) блоки, macaddr и macaddr8.

11) Битовые строки.

12) Типы текстового поиска: тип tsvector представляет собой документ в виде, оптимизированном для текстового поиска, а тип tsquery представляет собой текстовый поисковый запрос.

13) Тип UUID: хранит универсальный уникальный идентификатор.

14) Композитные типы данных (composite types).

15) Тип XML

16) Типы JSON, JSONB и JSONPATH

17) Массивы: многомерные массивы переменной длины. Элементами массивов могут быть любые встроенные или определённые пользователями базовые типы, перечисления, составные типы, диапазоны или домены.

18) Составной тип: представляет собой структуру строки или записи; по сути, это просто список имен полей и их типов данных.

19) Диапазонные типы — это типы данных, представляющие диапазон значений некоторого типа элемента (называемого подтипом диапазона).

20) Типы доменов — это определяемый пользователем тип данных, основанный на другом базовом типе.

21) Типы идентификаторов объектов: используются внутри СУБД, в качестве первичных ключей для различных системных таблиц, а так же, как идентификатор объекта.

22) Тип pg_lsn: используется для хранения данных LSN (Log Sequence Number), которые представляют собой указатель на местоположение в WAL.

23) Псевдотипы — это ряд специальных элементов.

24) Псевдотипы данных SERIAL и BIGSERIAL, позволяющие организовать упорядоченную последовательность целых чисел.

25) Типы данных «ключ-значение» (noSQL).

26) Целые типы данных: INT, SMALLINT, BIGINT.

27) Типы с плавающей точкой: REAL, DOUBLE PRESISION.

СУБД обеспечивает возможность добавления новых типов данных, функций, операторов, методов доступа, языков программирования без перекомпилирования ядра системы и остановки сервера.

### Поддерживаемые типы индексов

СУБД поддерживает следующие типы индексов:

1)  Стандартные индексы – B-tree, hash, GiST (обобщенное поисковое дерево, R-tree, ranked B+-trees, partial sum trees), SP-GiST, GIN (обобщенный инвертированный индекс), BRIN.

2)  Составные индексы: индексы по нескольким столбцам таблицы.

3)  Индексы ORDER BY: для сортировки строк в определённом порядке.

4)  Объединение нескольких индексов: возможность объединять несколько индексов (включая многократное использование одного и того же индекса) для обработки случаев, которые невозможно реализовать с помощью сканирования одного индекса.

5)  Уникальные индексы: для обеспечения уникальности значения столбца или уникальности комбинированных значений нескольких столбцов.

6)  Индексы выражений — это индексы, вычисленные на основе одного или нескольких столбцов таблицы.

7)  Частичные индексы — это индексы, построенные на подмножестве таблицы.

8)  Сканирование только индекса (Index-Only Scans) и покрывающие индексы (Covering Indexes).

9)  Индексы типа «битовая карта».

Поддержка технологий расширенного индексирования (поддержка секционированных индексов, индексирование XML и т.д.).

Поддержка индексов типа «битовая карта» или аналогичных механизмов для эффективной обработки данных с низкой кардинальностью.

### Поддерживаемые методы стандартизации и унификации

СУБД поддерживает следующие кодировки и унифицированные интерфейсы:

1)  Доступ к данным по интерфейсу ODBC/JDBC.

2)  Клиентские интерфейсы Libpq и ECPG.

3)  Поддержка кодировок UTF8, WIN866, WIN1251 и др.

СУБД поддерживает стандарт SQL ISO/IEC 9075:2023, начиная от ISO/IEC 9075:2008.

СУБД обеспечивает поддержку хранения и обработки запросов к пространственным данным с помощью встроенных операторов (в том числе в соответствие со стандартами OGC (ISO 19125-1:2004 и ISO 19125-2:2004). Поддержка картографических проекций, инструментов и SQL-выражений работы с пространственными данными, включая перепроецирование, встроенные операторы (пересечение, включение и т.п.) и пространственные индексы.

СУБД поддерживает языковые стандарты средствами локали предоставляемые операционной системой сервера.

### Расширенные функциональные возможности управления базами данных

СУБД «Jatoba» обеспечивает:

1)  Отсутствие ограничения на размер БД.

2)  Количество баз данных - 4 294 950 911.

3)  Отношений в базе данных - 1 431 650 303.

4)  Размер отношения - 32 ТБ.

5)  Отсутствие ограничения на максимальное количество записей пользователей.

6)  Столбцов в таблице – 1600.

7)  Столбцов в результирующем наборе - 1664.

8)  Размер поля - 1 ГБ.

9)  Отсутствие ограничения на количество индексов.

10) Столбцов в одном индексе - 32.

11) Ключей секционирования - 32.

12) Длина идентификатора - 63 байта.

13) Аргументов в функции - 100.

14) Параметров запроса - 65535.

15) Поддержку LOB (Large Object) до 4 ТБ.

16) Поддержку многоядерных серверов, имеющих больше 256 ядер.

17) Возможность фонового конвертирования данных в различных кодировках.

18) Поддержку параллельных многоядерных операций (SMP).

19) Поддержку параллельного выполнения запроса несколькими процессами/ядрами.

20) Поддержку технологий VLDB/NLDB.

### Механизм защиты подключений к системе управления базами данных

СУБД «Jatoba» соответствует следующим требованиям к механизму защиты подключений к системе управления базами данных:

1)  Обрабатываемые команды DDL/DML должны проходить аудит и регистрироваться в журнале.

2)  Должен быть реализован сбор журналов аудита всех операций и загрузка конфигураций в СУБД.

### Среда функционирования СУБД

Допускается установка СУБД «Jatoba» на ЭВМ, функционирующие под управлением ОС, указанных в таблице 1.2.

Таблица 1.2 – Поддерживаемые операционные системы

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 25%" />
<col style="width: 14%" />
<col style="width: 16%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;">
<p><strong>№</strong></p>
</th>
<th rowspan="2" style="text-align: left;">
<p><strong>Наименование ОС</strong></p>
</th>
<th rowspan="2" style="text-align: left;">
<p><strong>Серверная часть</strong></p>
</th>
<th rowspan="2" style="text-align: left;">
<p><strong>Клиентская часть</strong></p>
</th>
<th rowspan="2" style="text-align: left;">
<p><strong>Docker (ver.)</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>Сертификат ФСТЭК</strong></p>
</th>
</tr>
<tr>
<th>
<p><strong>№ серт.</strong></p>
</th>
<th>
<p><strong>Дата</strong></p>
<p><strong>выдачи</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td style="text-align: left;">
<p>Windows 10</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>2</p>
</td>
<td style="text-align: left;">
<p>Windows 11</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>3</p>
</td>
<td style="text-align: left;">
<p>Windows Server 2016</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>4</p>
</td>
<td style="text-align: left;">
<p>Windows Server 2019</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>5</p>
</td>
<td style="text-align: left;">
<p>Windows Server 2022</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>6</p>
</td>
<td style="text-align: left;">
<p>Astra Linux 1.7 Special</p>
<p>Edition Смоленск (x86-64)</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>25.0.5</p>
</td>
<td style="text-align: left;">
<p>2557</p>
</td>
<td style="text-align: left;">
<p>30.01.2012</p>
</td>
</tr>
<tr>
<td>
<p>7</p>
</td>
<td style="text-align: left;">
<p>Astra Linux 1.8 (x86-</p>
<p>64)</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>8</p>
</td>
<td style="text-align: left;">
<p>Astra Linux 2.12</p>
<p>Сommon Edition Орел (x86-64)</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
<td style="text-align: left;">
<p>24.0.2</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td>
<p>9</p>
</td>
<td style="text-align: left;">
<p>Debian 11</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>24.0.2</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>10</p>
</td>
<td style="text-align: left;">
<p>Debian 12</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>27.1.1</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>11</p>
</td>
<td style="text-align: left;">
<p>Альт 8 СП</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>27.1.1</p>
</td>
<td>
<p>3866</p>
</td>
<td>
<p>10.08.2018</p>
</td>
</tr>
<tr>
<td>
<p>12</p>
</td>
<td style="text-align: left;">
<p>Альт 9.1 Server</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td>
<p>13</p>
</td>
<td style="text-align: left;">
<p>Альт 10 Server</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>23.0.1</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>14</p>
</td>
<td style="text-align: left;">
<p>Ubuntu 20.04</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>24.0.2</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>15</p>
</td>
<td style="text-align: left;">
<p>Ubuntu 22.04</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>24.0.2</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>16</p>
</td>
<td style="text-align: left;">
<p>Ubuntu 24.04</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>24.0.2</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>17</p>
</td>
<td style="text-align: left;">
<p>ОСНОВА2</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>20.10.5</p>
</td>
<td>
<p>4381</p>
</td>
<td>
<p>31.03.2021</p>
</td>
</tr>
<tr>
<td>
<p>18</p>
</td>
<td style="text-align: left;">
<p>РЕД ОС 7.3 Муром</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>20.10.1</p>
</td>
<td>
<p>4060</p>
</td>
<td>
<p>12.01.2019</p>
</td>
</tr>
<tr>
<td>
<p>19</p>
</td>
<td style="text-align: left;">
<p>РЕД ОС 8</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>20</p>
</td>
<td style="text-align: left;">
<p>РОСА 12.4</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>21</p>
</td>
<td style="text-align: left;">
<p>Oracle Linux 8</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p>Х</p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
<td>
<p></p>
</td>
</tr>
</tbody>
</table>

СУБД «Jatoba» устанавливается на ЭВМ с процессорами, имеющими архитектуру x86-64, ARM64 и AMD64, удовлетворяющие следующим аппаратным требованиям, указанным в таблице [1.3](#_bookmark82).

<span id="_bookmark82" class="anchor"></span>Таблица 1.3 – Аппаратные требования к ЭВМ, на которых фукционируют клиентская и серверная части СУБД

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 54%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">
<p><strong>Параметр</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Характеристика</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Серт-я ОС</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3">
<p><strong>Требования к аппаратному обеспечению сервера СУБД/JDS</strong></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>ОЗУ</p>
</td>
<td style="text-align: left;">
<p>Не менее 2 Гб</p>
</td>
<td style="text-align: left;"></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 54%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">
<p><strong>Параметр</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Характеристика</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Серт-я ОС</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Свободный объем</p>
<p>жесткого диска</p>
</td>
<td style="text-align: left;">
<p>Минимальный объем от 40 Гб</p>
<p>Рекомендуемый объем от 100 Гб</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Устройства видео вывода</p>
</td>
<td style="text-align: left;">
<p>Монитор и видеоадаптер с поддержкой VGA</p>
<p>и разрешением 800x600 или выше</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип процессора и</p>
<p>минимальная тактовая частота процессора</p>
</td>
<td style="text-align: left;">
<p>64-разрядный процессор Intel или AMD 3 ГГц или больше</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Минимальное количество</p>
<p>ядер</p>
</td>
<td style="text-align: left;">
<p>4</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Устройства ввода-вывода</p>
</td>
<td style="text-align: left;">
<p>Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB, либо PS/2</p>
<p>интерфейсами</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Адаптер Ethernet</p>
</td>
<td style="text-align: left;">
<p>100 Мбит/с</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td colspan="3" style="text-align: left;">
<p><strong>Требования к аппаратному обеспечению АРМ управления</strong></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>ОЗУ</p>
</td>
<td style="text-align: left;">
<p>Не менее 4 Гб</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Свободный объем</p>
<p>жесткого диска</p>
</td>
<td style="text-align: left;">
<p>От 3 Гб</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Устройства видео вывода</p>
</td>
<td style="text-align: left;">
<p>Монитор и видеоадаптер с поддержкой VGA</p>
<p>и разрешением 800x600 или выше</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Тип процессора и минимальная тактовая</p>
<p>частота процессора</p>
</td>
<td style="text-align: left;">
<p>64-разрядный процессор Intel или AMD Рекомендуемая частота: 2.4 ГГц или больше</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Устройства ввода-вывода</p>
</td>
<td style="text-align: left;">
<p>Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB-интерфейсами</p>
<p>либо PS/2 интерфейсами</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">
<p>Адаптер Ethernet</p>
</td>
<td style="text-align: left;">
<p>100 Мбит/с</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td colspan="3" style="text-align: left;">
<p><strong>Требования к программному обеспечению сервера</strong></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Операционная система</p>
</td>
<td style="text-align: left;">
<p>Требования приведены в таблице <a href="#_bookmark81">1.2</a></p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td colspan="3" style="text-align: left;">
<p><strong>Требования к программному обеспечению АРМ управления</strong></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Операционная система</p>
</td>
<td style="text-align: left;">
<p>Требования приведены в таблице <a href="#_bookmark81">1.2</a></p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td colspan="3" style="text-align: left;">
<p><strong>Требования к программному обеспечению сервера JDS</strong></p>
</td>
</tr>
<tr>
<td rowspan="3" style="text-align: left;">
<p>Поддерживаемые платформы</p>
</td>
<td style="text-align: left;"><ul>
<li><p>win-x86;</p></li>
</ul></td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;"><ul>
<li><p>win-x64;</p></li>
</ul></td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;"><ul>
<li><p>linux-x64</p></li>
</ul></td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>СУБД</p>
</td>
<td style="text-align: left;">
<p>Защищенная система управления базами</p>
<p>данных «Jatoba»</p>
</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td rowspan="2" style="text-align: left;">
<p>Веб-сервер</p>
</td>
<td style="text-align: left;">
<p>IIS 10</p>
</td>
<td style="text-align: left;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>nginx</p>
</td>
<td style="text-align: left;">
<p>Х</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 54%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">
<p><strong>Параметр</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Характеристика</strong></p>
</th>
<th>
<p><strong>Серт-я ОС</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Компоненты</p>
</td>
<td style="text-align: left;">
<p>ASP.NET Core 6.0 Runtime (v6.0.1) –</p>
<p>Windows Hosting Bundle Installer</p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td rowspan="5" style="text-align: left;">
<p>Internet браузеры сертифицированных ОС</p>
</td>
<td style="text-align: left;"><ul>
<li><p>Google Chrome;</p></li>
</ul></td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"><ul>
<li><p>Яндекс.Браузер;</p></li>
</ul></td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"><ul>
<li><p>Chromium;</p></li>
</ul></td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"><ul>
<li><p>Opera;</p></li>
</ul></td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: left;"><ul>
<li><p>Mozilla Firefox.</p></li>
</ul></td>
<td>
<p>Х</p>
</td>
</tr>
</tbody>
</table>

### Производительность СУБД

СУБД должна обеспечивать требования по производительности, указанные в таблице [1.4](#_bookmark84).

Таблица 1.4 – Требования к производительности СУБД

<table>
<colgroup>
<col style="width: 3%" />
<col style="width: 17%" />
<col style="width: 9%" />
<col style="width: 10%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 10%" />
<col style="width: 9%" />
<col style="width: 10%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr>
<th rowspan="3" style="text-align: left;">
<p><strong>№</strong></p>
</th>
<th rowspan="3" style="text-align: left;">
<p><strong>Параметр производительности</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>J4</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>J5</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>J6</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>J18</strong></p>
</th>
</tr>
<tr>
<th colspan="2" style="text-align: left;">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
</tr>
<tr>
<th style="text-align: left;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Обр.к.</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>1</p>
</td>
<td style="text-align: left;">
<p>Количество пользовательских сессий, поддерживаемых параллельно</p>
</td>
<td style="text-align: left;">
<p>1000</p>
</td>
<td style="text-align: left;">
<p>1000</p>
</td>
<td style="text-align: left;">
<p>1000</p>
</td>
<td style="text-align: left;">
<p>1000</p>
</td>
<td style="text-align: left;">
<p>1000</p>
</td>
<td style="text-align: left;">
<p>1000</p>
</td>
<td style="text-align: left;">
<p>1000</p>
</td>
<td style="text-align: left;">
<p>1000</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>2</p>
</td>
<td style="text-align: left;">
<p>Количество обрабатываемых стандартных запросов в единицу времени (сек)</p>
</td>
<td style="text-align: left;">
<p>26180</p>
<p>(32</p>
<p>сессий)</p>
</td>
<td style="text-align: left;">
<p>39700</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: left;">
<p>24710</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: left;">
<p>29255</p>
<p>(32</p>
<p>сессий)</p>
</td>
<td style="text-align: left;">
<p>25580</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: left;">
<p>38470</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: left;">
<p>24760</p>
<p>(32 сессий)</p>
</td>
<td style="text-align: left;">
<p>29255 (64</p>
<p>сессий)</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>3</p>
</td>
<td style="text-align: left;">
<p>Количество транзакций в единицу времени (ед/сек)</p>
</td>
<td style="text-align: left;">
<p>5236</p>
<p>(32 сессий)</p>
</td>
<td style="text-align: left;">
<p>7940</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: left;">
<p>4942</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: left;">
<p>5851</p>
<p>(32 сессий)</p>
</td>
<td style="text-align: left;">
<p>5116</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: left;">
<p>7694</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: left;">
<p>4952</p>
<p>(32 сессий)</p>
</td>
<td style="text-align: left;">
<p>28860</p>
<p>(64 сессий)</p>
</td>
</tr>
<tr>
<td rowspan="6" style="text-align: left;">
<p>4</p>
</td>
<td rowspan="6" style="text-align: left;">
<p>Задержка в выполнении стандартного запроса (мс)</p>
</td>
<td style="text-align: left;">
<p>мин. 1,4</p>
</td>
<td style="text-align: left;">
<p>мин. 1</p>
</td>
<td style="text-align: left;">
<p>мин. 1,5</p>
</td>
<td style="text-align: left;">
<p>мин. 1,4</p>
</td>
<td style="text-align: left;">
<p>мин. 1,5</p>
</td>
<td style="text-align: left;">
<p>мин. 1</p>
</td>
<td style="text-align: left;">
<p>мин. 1,4</p>
</td>
<td style="text-align: left;">
<p>мин. 1,4</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>1 сессия</p>
</td>
<td style="text-align: left;">
<p>1 сессия</p>
</td>
<td style="text-align: left;">
<p>1 сессия</p>
</td>
<td style="text-align: left;">
<p>1 сессия</p>
</td>
<td style="text-align: left;">
<p>1 сессия</p>
</td>
<td style="text-align: left;">
<p>1 сессия</p>
</td>
<td style="text-align: left;">
<p>1 сессия</p>
</td>
<td style="text-align: left;">
<p>1 сессия</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>макс. 492</p>
</td>
<td style="text-align: left;">
<p>макс. 293</p>
</td>
<td style="text-align: left;">
<p>макс. 556</p>
</td>
<td style="text-align: left;">
<p>макс. 457</p>
</td>
<td style="text-align: left;">
<p>макс. 551</p>
</td>
<td style="text-align: left;">
<p>макс. 273</p>
</td>
<td style="text-align: left;">
<p>макс. 531</p>
</td>
<td style="text-align: left;">
<p>макс. 397</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>1000</p>
<p>сессий</p>
</td>
<td style="text-align: left;">
<p>1000 сессий</p>
</td>
<td style="text-align: left;">
<p>1000 сессий</p>
</td>
<td style="text-align: left;">
<p>1000</p>
<p>сессий</p>
</td>
<td style="text-align: left;">
<p>1000 сессий</p>
</td>
<td style="text-align: left;">
<p>1000</p>
<p>сессий</p>
</td>
<td style="text-align: left;">
<p>1000 сессий</p>
</td>
<td style="text-align: left;">
<p>1000</p>
<p>сессий</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>6,1</p>
</td>
<td style="text-align: left;">
<p>8,1</p>
</td>
<td style="text-align: left;">
<p>13</p>
</td>
<td style="text-align: left;">
<p>5,5</p>
</td>
<td style="text-align: left;">
<p>12,5</p>
</td>
<td style="text-align: left;">
<p>8,3</p>
</td>
<td style="text-align: left;">
<p>6,5</p>
</td>
<td style="text-align: left;">
<p>11,1</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>32 сессии</p>
</td>
<td style="text-align: left;">
<p>64 сессии</p>
</td>
<td style="text-align: left;">
<p>64 сессии</p>
</td>
<td style="text-align: left;">
<p>32 сессии</p>
</td>
<td style="text-align: left;">
<p>64 сессии</p>
</td>
<td style="text-align: left;">
<p>64 сессии</p>
</td>
<td style="text-align: left;">
<p>32 сессии</p>
</td>
<td style="text-align: left;">
<p>64 сессии</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 3%" />
<col style="width: 17%" />
<col style="width: 9%" />
<col style="width: 10%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 10%" />
<col style="width: 9%" />
<col style="width: 10%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr>
<th rowspan="3" style="text-align: left;">
<p><strong>№</strong></p>
</th>
<th rowspan="3" style="text-align: left;">
<p><strong>Параметр производительности</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>J4</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>J5</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>J6</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>J18</strong></p>
</th>
</tr>
<tr>
<th colspan="2" style="text-align: left;">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
<th colspan="2" style="text-align: left;">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
</tr>
<tr>
<th style="text-align: left;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Обр.к.</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>5</p>
</td>
<td style="text-align: left;">
<p>Количество экземпляров системы управления базами данных, которые могут совместно работать в режиме балансировки нагрузки</p>
</td>
<td style="text-align: left;">
<p>2 - 8</p>
</td>
<td style="text-align: left;">
<p>2 - 8</p>
</td>
<td style="text-align: left;">
<p>2 - 8</p>
</td>
<td style="text-align: left;">
<p>2 - 8</p>
</td>
<td style="text-align: left;">
<p>2 - 8</p>
</td>
<td style="text-align: left;">
<p>2 - 8</p>
</td>
<td style="text-align: left;">
<p>2 - 8</p>
</td>
<td style="text-align: left;">
<p>2 - 8</p>
</td>
</tr>
</tbody>
</table>

## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 7%" />
<col style="width: 79%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">
<p>DDL</p>
</th>
<th>
<p>–</p>
</th>
<th style="text-align: left;">
<p>Data Definition Language, язык описания данных</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>DML</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Data Manipulation Language, язык манипулирования данными</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>SQL</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Structured Query Language, язык структурированных запросов</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>БД</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>База данных</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>ГИС</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Государственные информационные системы</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Дист.</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Дистрибутив</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>ИСПДн</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Информационная система персональных данных</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>КВО</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Критически важный объект</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>КИИ</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Критическая информационная инфраструктура</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Обр.к</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Образ контейнера</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>ОС</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Операционная система</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>СУБД</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Система управления базами данных</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>ФСТЭК</p>
<p>России</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Федеральная служба по техническому и экспортному контролю России</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>ЭВМ</p>
</td>
<td>
<p>–</p>
</td>
<td style="text-align: left;">
<p>Электронно-вычислительная машина</p>
</td>
</tr>
</tbody>
</table>