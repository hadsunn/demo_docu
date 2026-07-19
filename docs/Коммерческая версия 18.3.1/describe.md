---
title: СУБД Jatoba. Описание применения
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

В состав СУБД «Jatoba» входят компоненты, указанные в таблице 2.1.

Таблица 2.1 – Состав компонент

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 35%" />
<col style="width: 22%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr>
<th colspan="2" rowspan="2">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4">
<p><strong>Версия компонента</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J18</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<p>Базовый инсталляционный пакет</p>
</td>
<td>
<p>Jatoba</p>
</td>
<td>
<p>4.22.1-</p>
<p>53897</p>
</td>
<td>
<p>5.17.1-</p>
<p>55711</p>
</td>
<td>
<p>6.13.1-</p>
<p>57857</p>
</td>
<td>
<p>18.3.1-</p>
<p>62238</p>
</td>
</tr>
<tr>
<td></td>
<td>
<p>Генератор паролей. pwgen</p>
</td>
<td>
<p>pwgen</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
<tr>
<td></td>
<td>
<p>Маскирование паролей</p>
</td>
<td>
<p>ja_pwmasking</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
<tr>
<td></td>
<td>
<p>Поиск ближайших соседей. KNN</p>
</td>
<td>
<p>KNN</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td></td>
<td>
<p>Компонент xid64</p>
</td>
<td>
<p>xid64</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
<tr>
<td></td>
<td>
<p>Сжатие данных на уровне страниц. Компонент</p>
<p>"ja_Compression"</p>
</td>
<td>
<p>ja_Compression</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>1.0</p>
</td>
<td>
<p>1.0</p>
</td>
</tr>
<tr>
<td></td>
<td>
<p>Восстановление поврежденных</p>
<p>WAL записей. WAL Recovery</p>
</td>
<td>
<p>WAL Recovery</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
<tr>
<td></td>
<td>
<p>Автоматическое создание директорий табличных</p>
<p>пространств</p>
</td>
<td>
<p>ja_TableSpace</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>+</p>
</td>
<td>
<p>+</p>
</td>
</tr>
<tr>
<td></td>
<td>
<p>Генератор конфигурационного</p>
<p>файла</p>
</td>
<td>
<p>ja_tune</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>1.2.0</p>
</td>
<td style="text-align: center;">
<p>1.3.0</p>
</td>
</tr>
<tr>
<td></td>
<td>
<p>Механизм автономных</p>
<p>транзакций</p>
</td>
<td>
<p>ja_ATX</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
<tr>
<td></td>
<td>
<p>DataWiping: очистка файлов</p>
<p>данных объектов доступа</p>
</td>
<td>
<p>ja_WIpe_Files</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 41%" />
<col style="width: 22%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr>
<th rowspan="2">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4">
<p><strong>Версия компонента</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J18</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Управление режимом работы узлов кластера.</p>
<p>Компонент «jaDog»</p>
</td>
<td>
<p>jaDog</p>
</td>
<td>
<p>4.2.0-</p>
<p>5432</p>
</td>
<td>
<p>4.2.0-</p>
<p>5432</p>
</td>
<td>
<p>4.2.0-</p>
<p>5432</p>
</td>
<td>
<p>4.2.0-</p>
<p>5432</p>
</td>
</tr>
<tr>
<td>
<p>Контроль субъектов доступа. Компонент «Jatoba data vault»</p>
</td>
<td>
<p>Jatoba data vault</p>
</td>
<td>
<p>1.4.1-</p>
<p>142</p>
</td>
<td>
<p>1.7.0-</p>
<p>159</p>
</td>
<td>
<p>1.7.0-</p>
<p>159</p>
</td>
<td>
<p>1.7.0-</p>
<p>159</p>
</td>
</tr>
<tr>
<td>
<p>Формирование отчетов по журналам СУБД. Компонент «pgBadger»</p>
</td>
<td>
<p>pgBadger</p>
</td>
<td>
<p>13.1.0-</p>
<p>1491</p>
</td>
<td>
<p>13.1.0-</p>
<p>1491</p>
</td>
<td>
<p>13.1.0-</p>
<p>1491</p>
</td>
<td>
<p>13.1.0-</p>
<p>1491</p>
</td>
</tr>
<tr>
<td>
<p>Расширенное резервное копирование. Компонент «pg_ProBackup»</p>
</td>
<td>
<p>pg_ProBackup</p>
</td>
<td>
<p>2.5.12-</p>
<p>3653</p>
</td>
<td>
<p>2.5.15-</p>
<p>3736</p>
</td>
<td>
<p>2.5.15-</p>
<p>3736</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td>
<p>Планирование заданий СУБД. Компонент «pg_Task»</p>
</td>
<td>
<p>pg_Task</p>
</td>
<td>
<p>2.0.39-</p>
<p>2617</p>
</td>
<td>
<p>2.0.39-</p>
<p>2617</p>
</td>
<td>
<p>2.0.39-</p>
<p>2617</p>
</td>
<td>
<p>2.0.39-</p>
<p>2966</p>
</td>
</tr>
<tr>
<td>
<p>Формирование отчетов производительности СУБД. Компонент</p>
<p>«pg_Profile»</p>
</td>
<td>
<p>pg_Profile</p>
</td>
<td>
<p>4.6.0-</p>
<p>141</p>
</td>
<td style="text-align: center;">
<p>4.10.0-</p>
<p>190</p>
</td>
<td style="text-align: center;">
<p>4.10.0-</p>
<p>190</p>
</td>
<td style="text-align: center;">
<p>4.10.0-</p>
<p>190</p>
</td>
</tr>
<tr>
<td>
<p>Пользовательский веб-интерфейс для администраторов.</p>
<p>Компонент «Jatoba data safe»</p>
</td>
<td>
<p>Jatoba data safe</p>
</td>
<td>
<p>2.11.0</p>
</td>
<td>
<p>2.11.0</p>
</td>
<td>
<p>2.11.0</p>
</td>
<td>
<p>2.11.0</p>
</td>
</tr>
<tr>
<td rowspan="5">
<p>Компонент мониторинга запросов СУБД</p>
</td>
<td>
<p>pg-explain</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>1.6.2</p>
</td>
<td style="text-align: center;">
<p>1.6.2</p>
</td>
<td style="text-align: center;">
<p>1.6.2</p>
</td>
</tr>
<tr>
<td>
<p>pg-explain-db</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>1.6.0</p>
</td>
<td style="text-align: center;">
<p>1.6.0</p>
</td>
<td style="text-align: center;">
<p>1.6.0</p>
</td>
</tr>
<tr>
<td>
<p>pg-monitor</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>1.6.5</p>
</td>
<td style="text-align: center;">
<p>1.6.5</p>
</td>
<td style="text-align: center;">
<p>1.6.5</p>
</td>
</tr>
<tr>
<td>
<p>pg-monitor-collector</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>1.6.5</p>
</td>
<td style="text-align: center;">
<p>1.6.5</p>
</td>
<td style="text-align: center;">
<p>1.6.5</p>
</td>
</tr>
<tr>
<td>
<p>pg-monitor-dispatcher</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>1.6.5</p>
</td>
<td style="text-align: center;">
<p>1.6.5</p>
</td>
<td style="text-align: center;">
<p>1.6.5</p>
</td>
</tr>
<tr>
<td>
<p>Синхронизация учетных записей с MS Active Directory / LDAP.</p>
<p>Компонент «ja_Sync_LDAP»</p>
</td>
<td>
<p>ja_Sync_LDAP</p>
</td>
<td>
<p>1.3.2-</p>
<p>176</p>
</td>
<td>
<p>1.3.2-</p>
<p>176</p>
</td>
<td>
<p>1.3.2-</p>
<p>176</p>
</td>
<td>
<p>1.3.2-</p>
<p>176</p>
</td>
</tr>
<tr>
<td>
<p>Обфускация кода PL/spgSQL. Компонент «PLspgSQL»</p>
</td>
<td>
<p>PLspgSQL</p>
</td>
<td>
<p>2.0.1-</p>
<p>300</p>
</td>
<td>
<p>2.0.1-</p>
<p>311</p>
</td>
<td>
<p>2.0.1-</p>
<p>311</p>
</td>
<td>
<p>2.0.1-</p>
<p>311</p>
</td>
</tr>
<tr>
<td>
<p>Высокопроизводительный кластер. Компонент «ja_Hipe_Cluster»</p>
</td>
<td>
<p>ja_Hipe_Cluster</p>
</td>
<td>
<p>12.1.1-</p>
<p>6955</p>
</td>
<td>
<p>12.1.1-</p>
<p>6951</p>
</td>
<td>
<p>12.1.1-</p>
<p>6951</p>
</td>
<td>
<p>14.0.0-</p>
<p>7236</p>
</td>
</tr>
<tr>
<td>
<p>Централизованный сбор записей событий СУБД.</p>
<p>Компонент «ja_Log»</p>
</td>
<td>
<p>ja_Log</p>
</td>
<td>
<p>3.0.0-</p>
<p>499</p>
</td>
<td>
<p>3.0.0-</p>
<p>499</p>
</td>
<td>
<p>3.0.0-</p>
<p>499</p>
</td>
<td>
<p>3.0.0-</p>
<p>499</p>
</td>
</tr>
<tr>
<td>
<p>Поддержка платформы 1С</p>
</td>
<td>
<p>1C_support</p>
</td>
<td>
<p>4.22.1-</p>
<p>53897</p>
</td>
<td>
<p>5.17.1-</p>
<p>55711</p>
</td>
<td>
<p>6.13.1-</p>
<p>57857</p>
</td>
<td>
<p>18.3.1-</p>
<p>62238</p>
</td>
</tr>
<tr>
<td>
<p>Компонент совместимости с 1С.</p>
<p>«fasttrun»</p>
</td>
<td>
<p>fasttrun</p>
</td>
<td style="text-align: center;">
<p>2.0.15-</p>
<p>19</p>
</td>
<td style="text-align: center;">
<p>2.0.0-23</p>
</td>
<td style="text-align: center;">
<p>2.0.0-23</p>
</td>
<td style="text-align: center;">
<p>2.0.0-23</p>
</td>
</tr>
<tr>
<td>
<p>Компонент совместимости с 1С.</p>
<p>«fulleq»</p>
</td>
<td>
<p>fulleq</p>
</td>
<td style="text-align: center;">
<p>2.0.0-21</p>
</td>
<td style="text-align: center;">
<p>2.0.0-21</p>
</td>
<td style="text-align: center;">
<p>2.0.0-21</p>
</td>
<td style="text-align: center;">
<p>2.0.0-21</p>
</td>
</tr>
<tr>
<td>
<p>Компонент совместимости с 1С.</p>
<p>«mchar»</p>
</td>
<td>
<p>mchar</p>
</td>
<td>
<p>2.2.1-</p>
<p>153</p>
</td>
<td>
<p>2.2.1-</p>
<p>160</p>
</td>
<td>
<p>2.2.1-</p>
<p>160</p>
</td>
<td>
<p>2.2.1-</p>
<p>160</p>
</td>
</tr>
<tr>
<td>
<p>Компонент совместимости с 1С.</p>
<p>«online_analyze»</p>
</td>
<td>
<p>online_analyze</p>
</td>
<td style="text-align: center;">
<p>1.0.0-25</p>
</td>
<td style="text-align: center;">
<p>1.0.0-29</p>
</td>
<td style="text-align: center;">
<p>1.0.0-29</p>
</td>
<td style="text-align: center;">
<p>1.0.0-29</p>
</td>
</tr>
<tr>
<td>
<p>Компонент совместимости с 1С.</p>
<p>«plantuner»</p>
</td>
<td>
<p>plantuner</p>
</td>
<td style="text-align: center;">
<p>1.0.0-13</p>
</td>
<td style="text-align: center;">
<p>1.0.0-16</p>
</td>
<td style="text-align: center;">
<p>1.0.0-16</p>
</td>
<td style="text-align: center;">
<p>1.0.0-16</p>
</td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 41%" />
<col style="width: 22%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr>
<th rowspan="2">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4" style="text-align: center;">
<p><strong>Версия компонента</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J18</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Контроль целостности. Компонент «ja_CSum»</p>
</td>
<td>
<p>ja_CSum</p>
</td>
<td style="text-align: center;">
<p>1.0.19-</p>
<p>53</p>
</td>
<td style="text-align: center;">
<p>1.1.4-72</p>
</td>
<td style="text-align: center;">
<p>1.1.4-72</p>
</td>
<td style="text-align: center;">
<p>1.1.4-72</p>
</td>
</tr>
<tr>
<td>
<p>Балансировка подключений пользователей к СУБД.</p>
<p>Компонент «jaPooler»</p>
</td>
<td>
<p>jaPooler</p>
</td>
<td style="text-align: center;">
<p>2.1.1-</p>
<p>317</p>
</td>
<td style="text-align: center;">
<p>2.1.0-</p>
<p>317</p>
</td>
<td style="text-align: center;">
<p>2.1.1 -</p>
<p>317</p>
</td>
<td style="text-align: center;">
<p>2.1.1 -</p>
<p>317</p>
</td>
</tr>
<tr>
<td rowspan="3">
<p>Обеспечение работы с СУБД Oracle</p>
</td>
<td>
<p>Oracle_FDW</p>
</td>
<td style="text-align: center;">
<p>1.2.0-</p>
<p>640</p>
</td>
<td style="text-align: center;">
<p>1.2.0-</p>
<p>640</p>
</td>
<td style="text-align: center;">
<p>1.2.0-</p>
<p>640</p>
</td>
<td style="text-align: center;">
<p>2.8.1-</p>
<p>796</p>
</td>
</tr>
<tr>
<td>
<p>OraFCE</p>
</td>
<td style="text-align: center;">
<p>3.22.0-</p>
<p>588</p>
</td>
<td style="text-align: center;">
<p>4.3.0-</p>
<p>684</p>
</td>
<td style="text-align: center;">
<p>4.3.0-</p>
<p>684</p>
</td>
<td style="text-align: center;">
<p>4.16-871</p>
</td>
</tr>
<tr>
<td>
<p>pg_Variables</p>
</td>
<td style="text-align: center;">
<p>1.2.0-</p>
<p>201</p>
</td>
<td style="text-align: center;">
<p>1.2.5-</p>
<p>201</p>
</td>
<td style="text-align: center;">
<p>1.2.5-</p>
<p>201</p>
</td>
<td style="text-align: center;">
<p>1.2.5 -</p>
<p>202</p>
</td>
</tr>
<tr>
<td>
<p>Выявление и предотвращение исполнения нетипичных SQL-запросов. Компонент «SQL_Firewall»</p>
</td>
<td>
<p>SQL_Firewall</p>
</td>
<td style="text-align: center;">
<p>0.8.1-38</p>
</td>
<td style="text-align: center;">
<p>1.1.0-69</p>
</td>
<td style="text-align: center;">
<p>1.1.0-69</p>
</td>
<td style="text-align: center;">
<p>1.1.0-69</p>
</td>
</tr>
<tr>
<td>
<p>Библиотека для взаимодействия с моделями машинного обучения. Компонент «ONNX Runtime»<a href="#_bookmark3"><sup>1</sup></a></p>
</td>
<td>
<p>onnxruntime</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>1.18.0-</p>
<p>10990</p>
</td>
<td style="text-align: center;">
<p>1.18.0-</p>
<p>10990</p>
</td>
<td style="text-align: center;">
<p>1.18.0-</p>
<p>10990</p>
</td>
</tr>
<tr>
<td>
<p>Сокрытие информации в файлах данных СУБД.</p>
<p>Компонент «Jatoba crypto access</p>
<p>storage»</p>
</td>
<td>
<p>Jatoba crypto access storage</p>
</td>
<td style="text-align: center;">
<p>2.0.0-82</p>
</td>
<td style="text-align: center;">
<p>3.0.0-96</p>
</td>
<td style="text-align: center;">
<p>3.0.0-96</p>
</td>
<td style="text-align: center;">
<p>3.0.0-96</p>
</td>
</tr>
<tr>
<td>
<p>Формирование HTTP/HTTPS запросов из СУБД.</p>
<p>Компонент «pgSQL-HTTP»</p>
</td>
<td>
<p>pgSQL-HTTP</p>
</td>
<td style="text-align: center;">
<p>1.5.0-</p>
<p>324</p>
</td>
<td style="text-align: center;">
<p>1.7.0-</p>
<p>394</p>
</td>
<td style="text-align: center;">
<p>1.7.0-</p>
<p>394</p>
</td>
<td style="text-align: center;">
<p>1.7.0-</p>
<p>394</p>
</td>
</tr>
<tr>
<td>
<p>Обеспечение работы с СУБД MS SQL Server. Компонент «TDS_FDW»</p>
</td>
<td>
<p>TDS_FDW</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>2.0.5-</p>
<p>325</p>
</td>
<td style="text-align: center;">
<p>2.0.5-</p>
<p>325</p>
</td>
<td style="text-align: center;">
<p>2.0.5-</p>
<p>325</p>
</td>
</tr>
<tr>
<td>
<p>Pасширенное журналирование событий СУБД.</p>
<p>Компонент «pgAudit»</p>
</td>
<td>
<p>pgAudit</p>
</td>
<td style="text-align: center;">
<p>1.6.2-91</p>
</td>
<td style="text-align: center;">
<p>1.7.0-91</p>
</td>
<td style="text-align: center;">
<p>16.0.0-</p>
<p>102</p>
</td>
<td style="text-align: center;">
<p>18.0.0-</p>
<p>134</p>
</td>
</tr>
<tr>
<td>
<p>Компонент «pgauditlogtofile»</p>
</td>
<td>
<p>pgauditlogtofile</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>1.7.5-90</p>
</td>
<td style="text-align: center;">
<p>1.7.5-90</p>
</td>
<td style="text-align: center;">
<p>1.7.5-90</p>
</td>
</tr>
<tr>
<td>
<p>Работа с географическими данными. Компонент «PostGIS»</p>
</td>
<td>
<p>PostGIS</p>
</td>
<td style="text-align: center;">
<p>3.2.1-</p>
<p>14372</p>
</td>
<td style="text-align: center;">
<p>3.6.0-</p>
<p>18717</p>
</td>
<td style="text-align: center;">
<p>3.6.0-</p>
<p>18717</p>
</td>
<td style="text-align: center;">
<p>3.6.0-</p>
<p>18716</p>
</td>
</tr>
<tr>
<td>
<p>Расширенное резервное копирование. Компонент «PTrack»</p>
</td>
<td>
<p>PTrack</p>
</td>
<td style="text-align: center;">
<p>2.3.0-91</p>
</td>
<td style="text-align: center;">
<p>2.4.4-</p>
<p>121</p>
</td>
<td style="text-align: center;">
<p>2.4.4-</p>
<p>121</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td>
<p>Управление парольными политиками пользователей СУБД.</p>
<p>Компонент «SecurityProfile»</p>
</td>
<td>
<p>SecurityProfile</p>
</td>
<td style="text-align: center;">
<p>2.3.0-</p>
<p>285</p>
</td>
<td style="text-align: center;">
<p>2.5.0-</p>
<p>303</p>
</td>
<td style="text-align: center;">
<p>2.5.0-</p>
<p>303</p>
</td>
<td style="text-align: center;">
<p>2.5.0-</p>
<p>303</p>
</td>
</tr>
<tr>
<td>
<p>Управление планами запросов. Компонент «ja_Plan_Manager»</p>
</td>
<td>
<p>ja_Plan_Manager</p>
</td>
<td style="text-align: center;">
<p>1.2.0-</p>
<p>438</p>
</td>
<td style="text-align: center;">
<p>1.2.0-</p>
<p>439</p>
</td>
<td style="text-align: center;">
<p>1.2.0-</p>
<p>438</p>
</td>
<td style="text-align: center;">
<p>1.2.0-</p>
<p>4309</p>
</td>
</tr>
<tr>
<td>
<p>Контроль выполненных планов запросов Компонент «pg_store_plans»</p>
</td>
<td>
<p>pg_store_plans</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>1.8.0-</p>
<p>113</p>
</td>
<td style="text-align: center;">
<p>1.8.0-</p>
<p>113</p>
</td>
<td style="text-align: center;">
<p>1.9.1-</p>
<p>116</p>
</td>
</tr>
</tbody>
</table>

<span id="_bookmark3" class="anchor"></span><sup>1</sup> Ограничения по эксплуатации приведены в п.п. [3.12](#выявления-и-предотвращение-исполнения-нетипичных-sql-запросов) настоящего документа

<table style="width:100%;">
<colgroup>
<col style="width: 41%" />
<col style="width: 22%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr>
<th rowspan="2">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4" style="text-align: center;">
<p><strong>Версия компонента</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J18</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Настройка планов выполнения.</p>
<p>Компонент «pg_hint_plan»</p>
</td>
<td>
<p>pg_hint_plan</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>1.5.1-</p>
<p>729</p>
</td>
<td>
<p>1.6.1-</p>
<p>748</p>
</td>
<td>
<p>1.8.1-</p>
<p>823</p>
</td>
</tr>
<tr>
<td>
<p>«Jatoba» в контейнере</p>
</td>
<td>
<p>ja_Container</p>
</td>
<td style="text-align: center;">
<p>4.20.1</p>
</td>
<td style="text-align: center;">
<p>5.15.1</p>
</td>
<td style="text-align: center;">
<p>6.11.1</p>
</td>
<td style="text-align: center;">
<p>18.1.1</p>
</td>
</tr>
<tr>
<td>
<p>Компонент сбора аппаратных и программных показателей работы GNU/Linux.</p>
<p>node_exporter.</p>
</td>
<td>
<p>node_exporter</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>1.8.0-</p>
<p>2165</p>
</td>
<td>
<p>1.8.0-</p>
<p>2165</p>
</td>
<td>
<p>1.8.0-</p>
<p>2165</p>
</td>
</tr>
<tr>
<td>
<p>Компонент сбора метрик СУБД.</p>
<p>postgres_exporter</p>
</td>
<td>
<p>postgres_exporter</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>0.18.1-</p>
<p>649</p>
</td>
<td style="text-align: center;">
<p>0.18.1-</p>
<p>649</p>
</td>
<td style="text-align: center;">
<p>0.18.1-</p>
<p>648</p>
</td>
</tr>
<tr>
<td>
<p>SQL экспортёр. Компонент сбора</p>
<p>расширенных метрик СУБД</p>
</td>
<td>
<p>sql_exporter</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>0.18.6-</p>
<p>683</p>
</td>
<td style="text-align: center;">
<p>0.18.6-</p>
<p>683</p>
</td>
<td style="text-align: center;">
<p>0.18.6-</p>
<p>682</p>
</td>
</tr>
<tr>
<td>
<p>Компонент мониторинга различных программных систем и сервисов.</p>
<p>Prometheus</p>
</td>
<td>
<p>Prometheus</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>3.5.0-</p>
<p>15793</p>
</td>
<td>
<p>3.5.0-</p>
<p>15793</p>
</td>
<td>
<p>3.5.0-</p>
<p>15792</p>
</td>
</tr>
<tr>
<td>
<p>Компонент управления и обработки оповещений в системе мониторинга</p>
<p>Prometheus. Alertmanager</p>
</td>
<td>
<p>Alertmanager</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>0.27.0-</p>
<p>3086</p>
</td>
<td>
<p>0.27.0-</p>
<p>3086</p>
</td>
<td>
<p>0.27.0-</p>
<p>3086</p>
</td>
</tr>
<tr>
<td>
<p>Работа СУБД «Jatoba» в режиме ЗПС в ОС Astra Linux</p>
</td>
<td></td>
<td style="text-align: center;">
<p>4.22.1-</p>
<p>53897</p>
</td>
<td>
<p>5.17.1-</p>
<p>55711</p>
</td>
<td>
<p>6.13.1-</p>
<p>57857</p>
</td>
<td>
<p>18.3.1-</p>
<p>62238</p>
</td>
</tr>
<tr>
<td>
<p>gis-cryptoplatform</p>
</td>
<td>
<p>gis-cryptoplatform</p>
</td>
<td style="text-align: center;">
<p>17_1.7.3</p>
<p>-4</p>
</td>
<td style="text-align: center;">
<p>17_1.7.3</p>
<p>-4</p>
</td>
<td style="text-align: center;">
<p>17_1.7.3</p>
<p>-4</p>
</td>
<td style="text-align: center;">
<p>17_1.7.3</p>
<p>-4</p>
</td>
</tr>
<tr>
<td>
<p>Поддержка лексографического идентификатора.</p>
<p>Компонент «pg-ulid»</p>
</td>
<td>
<p>pg-ulid</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>0.0.1-15</p>
</td>
<td>
<p>0.0.1-16</p>
</td>
<td>
<p>0.0.1-18</p>
</td>
</tr>
<tr>
<td>
<p>Запись событий информационной безопасности.</p>
<p>Компонент «ja_seceventlog»</p>
</td>
<td>
<p>ja_seceventlog</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>3.3.0-</p>
<p>250</p>
</td>
<td>
<p>3.3.0-</p>
<p>250</p>
</td>
<td>
<p>3.3.0-</p>
<p>250</p>
</td>
</tr>
<tr>
<td>
<p>Обратный индекс с хранением позиционной информации, полнотекстовый поиск.</p>
<p>Компонент «rum»</p>
</td>
<td>
<p>rum</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>1.3.13-</p>
<p>534</p>
</td>
<td>
<p>1.3.13-</p>
<p>534</p>
</td>
<td>
<p>1.3.13-</p>
<p>587</p>
</td>
</tr>
<tr>
<td>
<p>Реорганизация таблицы с минимальными блокировками.</p>
<p>Компонент «pg_repack»</p>
</td>
<td>
<p>pg_repack</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>1.5.3-</p>
<p>611</p>
</td>
<td>
<p>1.5.1-</p>
<p>588</p>
</td>
<td>
<p>1.5.3-</p>
<p>611</p>
</td>
</tr>
<tr>
<td>
<p>Работа СУБД Jatoba в режиме ЗПС в ОС ОСНОВА</p>
</td>
<td>
<p>osnova-digsig-key</p>
</td>
<td style="text-align: center;">
<p>4.22.1-</p>
<p>53897</p>
</td>
<td>
<p>5.17.1-</p>
<p>55711</p>
</td>
<td>
<p>6.13.1-</p>
<p>57857</p>
</td>
<td>
<p>18.3.1-</p>
<p>62238</p>
</td>
</tr>
<tr>
<td>
<p>Расширенный тип данных tsvector. Компонент "tsvector2"</p>
</td>
<td>
<p>tsvector2</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>1.0.0-52</p>
</td>
<td style="text-align: center;">
<p>1.0.0-59</p>
</td>
<td style="text-align: center;">
<p>1.0.0-58</p>
</td>
</tr>
<tr>
<td>
<p>Полнотекстовый поиск и определение</p>
<p>похожих текстов. Компонент "ja_Similar"</p>
</td>
<td>
<p>ja_Similar</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>1.0.0-36</p>
</td>
<td>
<p>1.0.0-36</p>
</td>
<td>
<p>1.0.0-36</p>
</td>
</tr>
<tr>
<td>
<p>Инвентаризация СУБД</p>
</td>
<td>
<p>ja_Inventory</p>
</td>
<td style="text-align: center;">
<p>1.0.1-46</p>
</td>
<td style="text-align: center;">
<p>1.0.1-46</p>
</td>
<td style="text-align: center;">
<p>1.0.1-46</p>
</td>
<td style="text-align: center;">
<p>1.0.1-46</p>
</td>
</tr>
<tr>
<td>
<p>Cвободная библиотека для проверки</p>
<p>орфографии и морфологического анализа. Компонент «hunspell»</p>
</td>
<td>
<p>hunspell</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>1.0.0-4</p>
</td>
<td>
<p>1.0.0-4</p>
</td>
<td>
<p>1.0.0-4</p>
</td>
</tr>
<tr>
<td>
<p>Маскирование данных. Компонент «ja_anonymizer»</p>
</td>
<td>
<p>ja_anonymizer</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>2.4.1-</p>
<p>1565</p>
</td>
<td>
<p>2.4.1-</p>
<p>1564</p>
</td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 41%" />
<col style="width: 22%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr>
<th rowspan="2">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4" style="text-align: center;">
<p><strong>Версия компонента</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th>
<p><strong>J18</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Архивация и восстановление данных. Компонент «wal-g»</p>
</td>
<td>
<p>wal-g</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td>
<p>3.0.7-</p>
<p>1925</p>
</td>
<td>
<p>3.0.7-</p>
<p>1925</p>
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

[3.11.1](#компонент-ja_plan_manager.-управление-планами-запросов));

- Совместимость платформой с 1C (п. [3.10](#совместимость-платформой-с-1c));

- Управление планами запросов (п. [3.11](#управление-планами-запросов));

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

![](@site/docs/assets/images/com18.3.1/describe/media/image1.png)

Рисунок 3.1 – Запуск мастера установки

Основные пакеты ядра СУБД под ОС GNU/Linux могут устанавливаться инсталлятором.

![](@site/docs/assets/images/com18.3.1/describe/media/image2.png)

Рисунок 3.2 – Окно инсталлятора ОС GNU/Linux

Сохранен режим установки СУБД под GNU/Linux из локального репозитория.

![](@site/docs/assets/images/com18.3.1/describe/media/image3.png)

Рисунок 3.3 – Установка основных пакетов

Установка компонента пользовательского веб-интерфейса для администраторов «Jatoba data safe» может выполняться:

1)  Инсталлятором компонента на ОС Windows.

![](@site/docs/assets/images/com18.3.1/describe/media/image4.jpeg)

Рисунок 3.4 – Окно инсталлятора JDS на ОС Windows

2)  Вручную из архива.

3)  Инсталлятором компонента JDS под ОС GNU/Linux.

![](@site/docs/assets/images/com18.3.1/describe/media/image5.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image41.png)

Рисунок 3.6 – Балансировка запросов пользователя

Также компонент обладает функциональной возможностью балансировки подключений множества пользователей к серверам СУБД, как представлено на рисунке 3.7.

![](@site/docs/assets/images/com18.3.1/describe/media/image40.png)

Рисунок 3.7 – Балансировка запросов пользователей к серверам СУБД Подключения формируются как от пользователей, так и от пользовательских

приложений.

### Кластеризация

Отказоустойчивость в СУБД «Jatoba» реализуется средствами репликации данных компонентом «jaDog». Экземпляр СУБД может выступать в роли ведущего

или ведомого сервера. Роль сервера определяется соответствующими конфигурационными параметрами, заданными администратором СУБД. Ведомый сервер всегда зависит от ведущего и получает от него все изменения данных, которые накапливаются в журнале транзакций. В случае выхода из строя ведущего сервера, ведомый сервер может автоматически или по команде администратора принять на себя роль ведущего. После восстановления функционирования сервера ему снова может быть возвращена роль ведущего.

![](@site/docs/assets/images/com18.3.1/describe/media/image42.png)

Рисунок 3.8 – Физическая структура узлов кластера

Базовые функциональные возможности кластера расширены до полнофункциональных инженерных решений катастрофоустойчивого и геораспределенного кластера.

### Инженерные решения построения кластера

Функциональные возможности компонента jaDog позволяют построить кластер различных конфигураций и приведенных в таблице 3.1. настоящего документа.

Развёртывание кластеров может проходить как в ручном, так и в полуавтоматическом режиме с использованием файлов ответов \*.yml.

**Инженерные решения компонента «jaDog»**

![](@site/docs/assets/images/com18.3.1/describe/media/image70.png)

Разделы описания инженерного решения во 2-ой части руководства jaDog:
- Перекрестная репликация. Использование файлов ответов;
- Перекрестная репликация. Настройка в ручном режиме.

![](@site/docs/assets/images/com18.3.1/describe/media/image71.png)

Разделы описания инженерного решения во 2-ой части руководства jaDog:
- Каскадная репликация. Использование файлов ответов;
- Каскадная репликация. Настройка в ручном режиме.

![](@site/docs/assets/images/com18.3.1/describe/media/image72.png)

Разделы описания инженерного решения во 2-ой части руководства jaDog:
- Работа кластера с каскадной репликацией в дата-центрах.

![](@site/docs/assets/images/com18.3.1/describe/media/image73.png)

Разделы описания инженерного решения во 2-ой части руководства jaDog:
- Геораспределенный, отказоустойчивый кластер. Решение JA_DTC_AS.

![](@site/docs/assets/images/com18.3.1/describe/media/image74.png)

Разделы описания инженерного решения во 2-ой части руководства jaDog:
- Настройка группы кластеров (bundle) с компонентом «jadog» в ручном режиме;
- Настройка группы кластеров (bundle) с компонентом «jadog» в автоматическом режиме.

### Отказоустойчивый кластер в Kubernetes

СУБД «Jatoba» может применяться в составе продукта CloudNativePG, позволяющего развертывать предварительно сконфигурированный отказоустойчивый

кластер в окружении Kubernetes. Текущая реализация кластера CNPG использует физическую потоковую репликацию.

![](@site/docs/assets/images/com18.3.1/describe/media/image75.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image76.png)

Рисунок 3.10 – Вид раздела «Список кластеров» (Cluster list)

![](@site/docs/assets/images/com18.3.1/describe/media/image77.png)

Рисунок 3.11 – Вкладка «Обзор» параметров кластера Подключение к кластеру доступно через REST API.

### Секционирование больших таблиц. ja_Hipe_Cluster

Компонент «ja_Hipe_Cluster» реализует функциональную возможность, позволяющую обычным серверам баз данных (называемым узлами) координировать свои действия друг с другом в архитектуре «ничего общего» («shared nothing»). Узлы образуют кластер, который позволяет СУБД хранить больше данных и использовать больше ядер центрального процессора, чем это было бы возможно на одном компьютере. Эта архитектура также позволяет масштабировать базу данных, просто добавляя дополнительные узлы в кластер. Данное расширение позволяет выполнять распределение таблиц и запросов по рабочим узлам, входящим в кластер.

![](@site/docs/assets/images/com18.3.1/describe/media/image78.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image79.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image80.png)

Рисунок 3.14 – Навигация между разделами

- получения общей информации о хосте СУБД;

![](@site/docs/assets/images/com18.3.1/describe/media/image81.png)

Рисунок 3.15 - Хост. Вкладка «Обзор»

- получения общей информации о БД;

![](@site/docs/assets/images/com18.3.1/describe/media/image82.png)

Рисунок 3.16 – Вкладка «Обзор» БД

### Раздел «Параметры СУБД»

Раздел «Параметры СУБД» позволяет изменять значения конфигурационного файла «postgresql.conf» на целевой СУБД и применять установленные значения.

![](@site/docs/assets/images/com18.3.1/describe/media/image83.png)

Рисунок 3.17 - Вкладка «Параметры СУБД»

Функциональная возможность изменения конфигурации целевых СУБД, позволяет оперативно применять, как шаблоны параметров, так и отдельные параметры, с целью:

- масштабирования типовых параметров;

- конфигурирования СУБД под определенный тип нагрузки;

- оперативного изменения набора параметров.

![](@site/docs/assets/images/com18.3.1/describe/media/image84.png)

Рисунок 3.18 – Добавление параметра в шаблон

### Раздел «Правила доступа»

В разделе «Правила доступа» доступно изменение значений конфигурационного файла «pg_hba.conf», в котором устанавливаются параметры аутентификации в СУБД.

![](@site/docs/assets/images/com18.3.1/describe/media/image85.png)

Рисунок 3.19 - Вкладка «Параметры СУБД»

### Раздел «Расширения»

Раздел обеспечивает установку и удаление расширений СУБД.

![](@site/docs/assets/images/com18.3.1/describe/media/image87.png)

Рисунок 3.20 – Установка расширения

### Раздел «Анализ рисков» (User Risk)

Разработанная функциональность раздела не имеет аналогов на рынке информационных технологий.

Раздел в графическом формате отображает системные привилегии ролей, предоставленные относительно объектов доступа.

![](@site/docs/assets/images/com18.3.1/describe/media/image86.png)

Рисунок 3.21 – Вид раздела «Анализ рисков» (User Risk)

### Раздел «Матрица доступа» (Access matrix)

Раздел также уникален и не имеет аналогов. В нем отображаются атрибутов пользователей относительно субъектов доступа.

Рисунок 3.22 – Вид раздела «Матрица доступа» (Access matrix) Полученные результаты возможно экспортировать в файл MS Excel.

### Раздел «Список событий» (Event List)

Раздел «Список событий» (Event List) предназначен для просмотра событий безопасности в выбранной инсталляции (Target).

Для функционирования раздела требуется, чтобы на целевой СУБД был установлен компонент «ja_Log», обеспечивающий передачу событий безопасности в служебную СУБД. Компонент «pgAudit» при этом обеспечивает расширенную регистрацию событий безопасности.

![](@site/docs/assets/images/com18.3.1/describe/media/image323.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image324.png)

Рисунок 3.24 – Вкладка «Снимки»

![](@site/docs/assets/images/com18.3.1/describe/media/image325.png)

Рисунок 3.25 – Вкладка «Отчеты»

### Раздел «Проблемы и решения» (Problems & Solutions)

Подраздел «Проблемы и решения» (Problems & Solutions) представляет собой интеллектуальный инструмент, который позволяет определять ряд проблем, существующих в целевой СУБД и разрешать их.

![](@site/docs/assets/images/com18.3.1/describe/media/image326.png)

Рисунок 3.26 – Вкладка проблемы

### Раздел «Анализ запросов» (Query analysis)

Подраздел «Анализ запросов» предоставляет пользователю с ролью

«Администратор СУБД»:

- отображение визуализации плана запроса средствами Pg-explain;

![](@site/docs/assets/images/com18.3.1/describe/media/image327.png)

Рисунок 3.27 – Визуализация explain по узлам

- отображение списка планов запросов по нескольким критериям отбора и переход по ссылке из выбранного плана запроса на страницу анализа плана запроса;

![](@site/docs/assets/images/com18.3.1/describe/media/image328.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image329.png)

Рисунок 3.29 – Отображение текущих сессий

Во вложенном окне «Запрос» отражается выполняемый запрос, который возможно скопировать в буфер обмена, либо завершить.

![](@site/docs/assets/images/com18.3.1/describe/media/image330.png)

Рисунок 3.30 – Дополнительное окно «Завершение сессии» в вкладке «Сессии»

### Вкладка «Подключения»

Вкладка «Подключения» отображает количество подключений к выбранной

СУБД.

После выбора цели отображаются столбцы:

- Пользователь/роль;

- Количество подключений;

- Квота подключений.

![](@site/docs/assets/images/com18.3.1/describe/media/image331.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image345.png)

Рисунок 3.45 – Реализуемые способы резервного копирования

:::info Дополнительная информация
Компонент «pg_ProBackup» не поддерживается в СУБД «Jatoba» с версией ядра «18»
:::

### Компонент «wal-g»

Компонент «wal-g» — представляет собой расширение функционала СУБД

«Jatoba» и предназначен для управления резервным копированием и восстановлением баз данных СУБД «Jatoba», для регулярного создания резервных копий, позволяющих восстанавливать работу СУБД в случае аварийной ситуации, порчи или потери данных.

![](@site/docs/assets/images/com18.3.1/describe/media/image303.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image304.jpeg)

Рисунок 3.47 – Применение правила anon.anonymize_column статического маскирования исходных данных таблицы employees к столбцу postcode

![](@site/docs/assets/images/com18.3.1/describe/media/image305.jpeg)

Рисунок 3.48 – Данные таблицы employees после использования статического маскирования к столбцу postcode

:::info Дополнительная информация
Компонент «ja_Anonymizer» не поддерживается в СУБД «Jatoba» с версией
ядра «4» и «5»
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

### Совместимость платформой с 1C

Совместимость с платформой 1С и СУБД «Jatoba» подтверждена сертификатом.

### Компонент совместимости 1С fasttrun

Платформа 1С для выполнения своих обработок очень часто пользуется временными таблицами. Компонент fasttrun предоставляет транзакционно-небезопасную (изменения нельзя откатить) функцию, предназначенную для быстрого удаления содержимого заданной временной таблицы (по имени) и своевременного обновления статистики этой таблицы после удаления ее содержимого. Это предотвращает разрастание системного каталога pg_class, положительно сказывается на производительности системы при работе с большим количеством временных таблиц, создаваемых 1С в СУБД. Установку и вызов функций данного расширения

Платформа 1С производит самостоятельно. Администратору надо только обеспечить установку данного расширения в составе СУБД.

### Компонент совместимости 1С fulleq

Платформа 1С может использоваться на большом количестве разных СУБД. В разных СУБД имеются разные трактовки отдельных параграфов стандарта языка SQL. Компонент fulleq предоставляет дополнительный оператор сравнения значений базовых типов данных, совместимый с СУБД MS SQL Server. А именно, обеспечивается совместимость сравнения двух NULL-значений, результат которого в MS SQL Server должен быть TRUE. По умолчанию в СУБД на основе PostgreSQL результат сравнения с NULL-значением равно NULL, что идет в разрез совместимости с 1С. Установку и вызов функций данного расширения Платформа 1С производит самостоятельно. Администратору надо только обеспечить установку данного расширения в составе СУБД.

### Компонент совместимости 1С mchar

Компонент mchar предоставляет дополнительные строковые типы данных и операторы для работы с ними, совместимые с аналогичными строковыми типами данных CHAR и VARCHAR в MS SQL Server (совместимая обработка пробельных символов в конце строк; совместимое сравнение и преобразование регистра символов в строках и т.п.). Установку данного расширения и использование соответствующих строковых типов данных Платформа 1С производит самостоятельно. Администратору надо только обеспечить установку данного расширения в составе СУБД.

### Компонент совместимости 1С online_analyze

Поддержание статистики таблиц в актуальном состоянии – важная функция СУБД, отвечающая за своевременный выбор оптимальных планов выполнения запросов. Учитывая, что 1С использует большое количество таблиц и индексов для своей работы, то рекомендуется использовать компонент online_analyze для повышения производительности работы 1С Платформы. Расширение предоставляет функциональную возможность немедленного обновления статистики таблиц после операций добавления, удаления или изменения записей в таблицах. Установку и настройку данного расширения администратор должен проводить самостоятельно в случае падения производительности отдельных обработок.

Примечание:

В последних версиях 1С отмечено, что Платформа 1С сама посылает команду ANALYZE для своевременного обновления статистики нужных таблиц. Применение этого расширения может быть уже не актуально.

### Компонент совместимости 1С plantuner

Платформа 1С содержит большое количество таблиц и индексов для хранения своих данных, выполняет очень сложные SQL-запросы для получения итоговых или промежуточных результатов обработок. Для получения оптимальных планов сложных запросов, особенно часто возникающих при написании собственных обработок, иногда возникает необходимость адаптировать планировщик на использование тех или иных индексов таблиц. Данный компонент предназначен для расширения функций планировщика запросов. Он позволяет подключать или отключать использование определенных индексов при выполнении запросов поддержкой переменных:

- plantuner.disable_index — список индексов, которые не будет видеть планировщик;

- plantuner.enable_index — список индексов, которые будет видеть планировщик, даже если они скрыты параметром plantuner.disable_index.

Установку и настройку расширения администратор должен проводить самостоятельно в случае обнаружения фактов неправильной генерации планов запросов, ухудшающих скорость выполнения запросов.

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
Компонент «pg_hint_plan» может использоваться с СУБД «Jatoba» версий 5.x и
выше, под управлением операционной системы GNU/Linux
:::

### Компонент pg_store_plans. Контроль выполненных планов запросов

Компонент «pg_store_plans» предназначен для контроля выполнения планов запросов статистическими методами всех операторов SQL, выполняемых сервером СУБД, выполненного в форме расширения.

В результате установки расширения сформируются два представления «pg_store_plans» и «pg_store_plans_info».

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

![](@site/docs/assets/images/com18.3.1/describe/media/image343.png)

Рисунок 3.50 – Просмотр правил брандмауэра в ОС GNU/Linux В полученном списке отражены поля:

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

![](@site/docs/assets/images/com18.3.1/describe/media/image351.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image352.png)

Рисунок 3.52 – Схема взаимодействия компонентов

В процессе работы «ja_CSum» записывает сгенерированные события безопасности в СУБД (в хранилище событий).

Компонент централизованного сбора записей событий СУБД «ja_Log», получив указание от сервера, собирает события безопасности базы данных «ja_Log» в служебную СУБД компонента «Jatoba data safe».

Из базы данных события безопасности передаются в пользовательский веб-интерфейс для администраторов компонента «JDS», который передает события безопасности в разделе «Event List».

Отфильтровать события безопасности можно при помощи текстового поиска, как представлено на рисунке 3.53.

![](@site/docs/assets/images/com18.3.1/describe/media/image353.png)

Рисунок 3.53 – Отображение событий безопасности в веб-интерфейсе

### Обфускации кода

Компонент обфускации кода PL/pgSQL добавляет в СУБД новый язык plspgsql, обеспечивающий разработчику дополнительные функции безопасности при создании хранимых процедур.

В состав СУБД «Jatoba» включена утилита обфускации wplpgsql, которая создает в dst-dir обфусцированную версию src-dir с заменой процедур и функций с языка 'plpgsql' на 'plspgsql'.

Утилита обфускации использует серверную часть СУБД для обфускации отдельных SQL-команд.

Процесс сокрытия исходных текстов, процедур и функций в СУБД «Jatoba» отображен на рисунке 3.54.

![](@site/docs/assets/images/com18.3.1/describe/media/image354.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image390.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image391.png)

Рисунок 3.56 – Запрос и вывод схожести текстов

:::info Дополнительная информация
Компонент «ja_Similar» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционной системы GNU/Linux
:::

### Проверка орфографии и морфологический анализ. Компонент

### «hunspell»

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

![](@site/docs/assets/images/com18.3.1/describe/media/image357.png)

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

![](@site/docs/assets/images/com18.3.1/describe/media/image358.png)

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

Таблица 1.1 – Перечень функциональных возможностей

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
<th rowspan="2" style="text-align: center;"><strong>Функциональная возможность</strong></th>
<th colspan="4">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Backend</strong></p>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>64-битные большие объекты</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Рекомендуемые блокировки</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Пользовательские фоновые процессы</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Дисковая карта свободного пространства</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Динамические фоновые процессы</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка EXPLAIN (BUFFERS)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка EXPLAIN (MEMORY)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Поддержка EXPLAIN (SERIALIZE)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Поддержка EXPLAIN (WAL)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Формат журнала логов jsonlog</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Загружаемая инфраструктура плагинов для мониторинга планировщика</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка полезной нагрузки для LISTEN/NOTIFY</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Системное представление - pg_stat_checkpointer</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Представление метрик ввода-вывода - pg_stat_io</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Системное представление pg_wait_events</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Статистика сервера в разделяемой памяти</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Информационная схема, соответствующая стандарту SQL</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка анонимной разделяемой памяти</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Вывод команды EXPLAIN в форматах XML, JSON и YAML.</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Типы данных, функции и операторы</strong></p>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>Массивы составных типов</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка массивов</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Тип данных ENUM</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Тип данных GUID/UUID</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Тип данных macaddr8</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Многодиапазонный тип</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Нулевые значения в массиве</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поиск по фразе</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Диапазонный тип</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Тип smallserial</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка модификатора типов</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Тип UUIDv7</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Тип данных XML</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Индексы и ограничения</strong></p>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>Индексы BRIN</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Удаление индекса B-tree снизу вверх</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Дедупликация B-tree индексов</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Индексы GiST с поддержкой Concurrenrly</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Покрывающие индексы B-tree (INCLUDE)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Покрывающие индексы GiST (INCLUDE)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Отложенные уникальные ограничения</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Ограничения исключений</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Индексы GIN</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Частичное совпадение индексов GIN</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Улучшения производительности и размера индекса GIN</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Индексы GiST</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
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
<th colspan="3" rowspan="2" style="text-align: center;"><strong>Функциональная возможность</strong></th>
<th colspan="4">
<p><strong>Версия ядра</strong></p>
</th>
<th rowspan="52"></th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
<tr>
<th colspan="3">
<p>Индексы выражений</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Сканирование только индекса</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Сканирование только индекса GiST</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка индексов для IS NULL</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Bitmap индексы в оперативной памяти</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка метода k-ближайших соседей GiST</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка метода k-ближайших соседей SP-GiST</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Неблокирующий CREATE INDEX</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Параллельное сканирование индексов B-деревьев</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Параллельное выполнение команды CREATE INDEX для BRIN индексов</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Параллельное выполнение команды CREATE INDEX для B-tree индексов</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Параллельное выполнение команды CREATE INDEX для GIN индексов</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Пропуск сканирования многоколоночных B-tree индексов</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Пространственно-разделенные индексы GiST (SP-GiST)</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Индексы SP-GiST для диапазонных типов</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка UNIQUE NULLS NOT DISTINCT</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка WAL для хэш-индексов</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p><strong>Язык SQL</strong></p>
</th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3">
<p>Агрегатная функция ANY_VALUE</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка оператора FETCH FIRST .. WITH TIES</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка группировки GROUPING SETS, CUBE and ROLLUP</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка операторов INSERT/UPDATE/DELETE RETURNING</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Предложение LATERAL</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка MERGE</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка MERGE... RETURNING</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Многострочные VALUE</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Целочисленные литералы, не являющиеся десятичными числами</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка сортировки ORDER BY NULLS FIRST/LAST</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Агрегатная функция по диапазонному типу range_agg</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Рекурсивные запросы</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка функций regexp_count, regexp_instr, regexp_like</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Возврат OLD и NEW значений из измененных строк</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Построчное сравнение</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Режим блокировки SELECT FOR NO KEY UPDATE/SELECT FOR KEY SHARE</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>SQL-стандарт обработка интервалов</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Пользователь SYSTEM_USER</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Оператор TABLE</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Подчеркивания (_) используется в качестве разделителей тысяч</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка функций unnest/array_agg</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка оператора Upsert (INSERT ... ON CONFLICT DO ...)</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Оконные функции</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка оператора WITHIN GROUP</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка оператора WITH ORDINALITY</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Запросы с оператором WITH (общие табличные выражения)</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Запросы с возможностью записи с использованием оператора WITH (общие табличные выражения)</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p><strong>DDL</strong></p>
</th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3">
<p>ALTER &lt;объект&gt; IF EXIST</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>ALTER TABLE ... ADD UNIQUE/PRIMARY KEY USING INDEX</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>ALTER TABLE ... SET ACCESS METHOD</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>ALTER TABLE ... SET LOGGED / UNLOGGED</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>№ изменения:</p>
</td>
<td>
<p>Подпись отв. лица:</p>
</td>
<td colspan="6">
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
<th rowspan="2" style="text-align: center;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: center;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Изменение типов столбцов (ALTER TABLE .. ALTER COLUMN TYPE)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>CREATE ACCESS METHOD</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>CREATE TABLE ... (LIKE) с использованием внешних таблиц, представлений и составных типов</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>DROP &lt;объект&gt; IF EXISTS</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>ON COMMITв предложении для CREATE TEMPORARY TABLE</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>REINDEX CONCURRENTLY</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Сохранение сгенерированных столбцов</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Временные ограничения (temporal)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Типизированные таблицы</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Виртуальные сгенерированные столбцы</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p><strong>Производительность</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Сокращенные ключи</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Асинхронная фиксация</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Асинхронный ввод-вывод (AIO)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Автоматическая аннулирование плана</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Фоновый процесс создания контрольных точек (Background Checkpointer)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Фоновый процесс записи данных на диск (Background Writer)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Регулирование скорости резервного копирования</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>CREATE STATISTICS - наиболее часто встречающихся значений (MCV) статистики</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>CREATE STATISTICS - многоколоночная</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>CREATE STATISTICS - статистика "OR" и "IN/ANY"</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка перекрестного хэширования типов данных</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Распределенное создание контрольных точек</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Отметка внешних ключей как NOT VALID</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Карта замороженных страниц</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Полнотекстовый поиск</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Для агрегирования хеш-функций можно использовать дисковое пространство</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка хеширования для DISTINCT/UNION/INTERSECT/EXCEPT</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка хеширования для FULL OUTER JOIN, LEFT OUTER JOIN и</p>
<p>RIGHT OUTER JOIN</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Кортежи только с кучей (HOT)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Улучшенная производительность для сортировок, превышающих объем work_mem</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Улучшена производительность оконных функций</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Пошаговая сортировка</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Пошаговая сортировка для SELECT DISTINCT</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Пошаговая сортировка для оконных функций</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Встроенные запросы WITH (общие табличные выражения)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Встраивание SQL-функций</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Компиляция «на лету» (JIT) для оценки выражений и деформации кортежей</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Балансировка нагрузки для libpq/psql</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Сжатие LZ4 для таблиц TOAST</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Масштабируемость многоядерных процессоров для рабочих нагрузок только чтение</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Несколько временных табличных пространств</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Переупорядочивание внешнего соединения</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Параллельное сканирование кучи битовых карт</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
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
<th rowspan="2" style="text-align: center;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: center;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Параллельные FULL и RIGHT соединения</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Параллельное сканирование всей таблицы (последовательное</p>
<p>сканирование)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Параллельные хеш-соединения</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Агрегирование параллельного соединения (JOIN)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Параллельные слияния</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Параллельный запрос</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Параллельный "SELECT DISTINCT"</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Возможность частичной сортировки (top-n sorting)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Конвейерный режим обработки запросов</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Снижен уровень блокировки для команд ALTER TABLE</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>SELECT ... FOR UPDATE/SHARE NOWAIT</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Установка индивидуальной стоимости для табличных пространств CREATE/ALTER TABLESPACE ... SET (seq_page_cost = ...,</p>
<p>random_page_cost = ...)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Общая блокировка на уровне строк</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка SIMD для ARM</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Поддержка SIMD для x86</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Предложение SKIP LOCKED</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Синхронизированное последовательное сканирование</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Предложение TABLESAMPLE</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Табличные пространства</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Нежурналируемые таблицы</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Автоматическая настройка размера WAL-буфера</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>JSON</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Улучшен набор функций и операторов для работы с JSON.</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Тип данных JSONB</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Операторы и функции, изменяющие JSONB</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Использование синтаксиса JSONB</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Тип данных JSON</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Конструкторы SQL/JSON</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Функция SQL/JSON: datetime()</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Предикат SQL/JSON IS JSON</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Предикат SQL/JSON JSON_TABLE</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Предикаты путей SQL/JSON</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Функции для выполнения запросов SQL/JSON</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p><strong>Секционирование и наследование</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Ускоренное удаление секций</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Декларативное секционирование таблиц</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Секционирование по умолчанию</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Ссылки на внешние ключи для секционированных таблиц</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Наследование внешней таблицы</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Секционирование данных по хеш-ключу</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Удаление секций во время выполнения запроса</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка первичных ключей, внешних ключей, индексов и триггеров для секционированных таблиц.</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Секционирование таблиц</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>UPDATE по ключу секционирования</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Представления и материализованные представления</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Материализованные представления</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Обновление материализованных представлений без блокировки</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Представление SECURITY INVOKER</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
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
<th rowspan="2" style="text-align: center;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: center;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Временные (temporary) представления</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Обновляемые представления</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Предложение WITH CHECK</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Репликация</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>ALTER SUBSCRIPTION ... SKIP</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Каскадная потоковая репликация</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Настройка максимальный размера WAL для слотов репликации</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка отказоустойчивости для слотов логической репликации</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Логическая репликация</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Логическая репликация с предотвращением зацикливания репликации</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Списки столбцов логической репликации</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Логическая репликация для секционированных таблиц</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Логическая репликация из резервных копий</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Логическая репликация сохраненных сгенерированных столбцов</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Логическая репликация, начальная синхронизация с использованием бинарного протокола</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Логическая репликация запросов с использованием дополнительных индексов</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Логическая репликация, параллельное применение транзакций</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Логическая репликация, публикация всех таблиц в схеме</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Фильтрация строк логической репликации</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Логические слоты репликации мигрируют с помощью pg_upgrade</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Потоковая логическая репликация</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Возможность "Подписчика" логической репликации отключиться при</p>
<p>возникновении ошибки</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Журналирование конфликтов логической репликации</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Фиксация кворума для синхронной репликации</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Слоты репликации</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Каскадная репликация только для потоковой передачи</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Потоковая репликация</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Синхронная репликация</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Резервное копирование, восстановление и целостность данных</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Модули архивирования</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Контрольная сумма страниц данных</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Включение/отключение контрольных сумм страниц в автономном кластере</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Унифицированные записи WAL</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Режим горячего ожидания</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Сжатие lz4 и Zstandard (zstd) для записи полных страниц WAL.</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Параметр min_wal_size / max_wal_size</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка множества синхронных реплик</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Именованные точки восстановления</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Параллельный pg_dump</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Параллельное восстановление</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>pg_basebackup распаковка сжатой копии на клиенте</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>pg_basebackup инкрементальное резервное копирование</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>pg_basebackup сжатие на стороне сервера</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>инструмент pg_basebackup</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Опция для pg_dump, pg_dumpall, pg_restore --filler</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Утилита pg_receivewal (ранее pg_receivexlog)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Восстановление на определенный момент времени (PITR)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Предварительная загрузка WAL во время восстановления</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
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
<th rowspan="2" style="text-align: center;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: center;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Режим remote_apply</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Параметр задержки применения репликации по времени в режиме</p>
<p>ожидания - recovery_min_apply_delay</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Проверка целостности резервной копии (pg_verifybackup)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>"Теплый режим" ожидания</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Обновление</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Опция для pg_upgrade --swap</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Статистика планировщика сохраняется при обновлении до мажорной версии</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p><strong>Импорт и экспорт данных</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Поддержка COPY в/из STDIN/STDOUT</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка COPY FROM ... WHERE</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка COPY ... ON_ERROR</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Поддержка COPY с произвольным SELECT</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка CSV для COPY</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Управление конфигурацией</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Поддержка ALTER SYSTEM</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Ввод дробных значений для целых чисел</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Директива включения (include) в файлы pg_hba.conf и pg_ident.conf</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Настройки конфигурации для каждого пользователя/сервера базы</p>
<p>данных ALTER ROLE/DATABASE</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Системное представление pg_config</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Регулярные выражения в файлах pg_hba.conf и pg_ident.conf</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p><strong>Безопасность</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Проверка подлинности канала SCRAM</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Требование клиента проверки подлинности канала SCRAM</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Требования к аутентификации, заданные клиентом</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Права доступа на уровне столбцов</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Права доступа по умолчанию</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Прямое согласование по протоколу TLS ("sslnegotiation")</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Поддержка режима FIPS</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Операторы GRANT/REVOKE ON ALL TABLES/SEQUENCES/FUNCTIONS</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Защита соединения на стороне клиента и сервера с использованием GSSAPI</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка GSSAPI</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Делегирование учетных данных Kerberos</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Аутентификация krb5 (без gssapi) не поддерживается</p>
</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Контроль доступа к большим объектам</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Обнаружение LDAP-сервера</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Двухсторонняя аутентификация с использованием действительного клиентского SSL/TLS-сертификата</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Встроенная аутентификация LDAP</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Встроенная аутентификация RADIUS</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Аутентификация/авторизация OAuth</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Ограничения на подключение для каждого "пользователь/база данных"</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Предопределенные роли</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Права доступа к настройке параметров конфигурации</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Ролевая модель (ROLES)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Безопасность на уровне строк (RLS)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Аутентификация SCRAM-SHA-256</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Режим поиска и привязки для аутентификации LDAP</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
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
<th colspan="3" rowspan="2" style="text-align: center;"><strong>Функциональная возможность</strong></th>
<th colspan="4">
<p><strong>Версия ядра</strong></p>
</th>
<th rowspan="53"></th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
<tr>
<th colspan="3">
<p>Опция security_barrier в представлениях</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Интерфейс поставщика услуг безопасности (SSPI)</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Защита аутентификационной информации с помощью SHA-2</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Проверка SSL-сертификатов в libpq</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Аутентификация с помощью клиентского SSL-сертификата</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Аутентификация SSPI через GSSAPI</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка использования доверенного центра сертификации операционной системы клиента.</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка наборов алгоритмов для защиты соединений TLS версии 1.3</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p><strong>Транзакции и видимость</strong></p>
</th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3">
<p>Курсоры</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Точки сохранения</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Уровень изоляция Serializable Snapshot</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Двухфазная фиксация транзакций</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Обновляемые курсоры</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p><strong>Автоочистка и техническое обслуживание</strong></p>
</th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3">
<p>Вставка данные может запустить автоматическую очистку</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Встроенный демон автоочистки</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Оптимизация заморозки страниц</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Параллельный VACUUM для индексов</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Параллельные задания vacuumDB</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Древовидная структура памяти для очистки</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Очистка в «аварийном режиме»</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Карта видимости для очистки</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p><strong>Внешние обертки данных (FDW)</strong></p>
</th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3">
<p>Аутентификация с помощью сертификата для postgres_fdw</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Оператор CREATE FOREIGN TABLE ... LIKE</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Параллелизм запросов с использованием внешней обертки данных</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Доступ к внешней обертки данных</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Внешние таблицы</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Оператор IMPORT FOREIGN SCHEMA</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Импорт разделов внешних таблиц</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Параллельное выполнение запросов к удаленным базам данных</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка для postgres_fdw параллельной фиксация транзакций</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Выполнение запросов postgres_fdw на внешнем сервере</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Сквозная аутентификация SCRAM для postgres_fdw</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3">
<p>Внешние обертки данных для PostgreSQL</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Записываемые внешние обертки данных</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p><strong>Пользовательские функции, хранимые процедуры и триггеры</strong></p>
</th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3">
<p>Оператор ALTER TABLE ENABLE/DISABLE TRIGGER</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>ОператорALTER TABLE / ENABLE REPLICA TRIGGER/RULE</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Оператор BEGIN ATOMIC тела функции</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Синтаксис CALL для выполнения процедур</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Триггеры на уровне столбцов</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Синтаксис CREATE PROCEDURE для хранимых процедур SQL</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Триггеры событий</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Предложение FILTER для агрегатных функций</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Поддержка ORDER BY внутри агрегации</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Параметры GUC для каждой функции</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Статистика для функций</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Оператор RETURN QUERY EXECUTE</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3">
<p>Оператор RETURNS TABLE</p>
</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>№ изменения:</p>
</td>
<td>
<p>Подпись отв. лица:</p>
</td>
<td colspan="6">
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
<th rowspan="2" style="text-align: center;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: center;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Триггеры на уровне оператора</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Триггеры TRUNCATE на уровне оператора</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Триггеры в представлениях</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Вариативные функции</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Условие WHEN для триггера CREATE</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Процедурные языки</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Оператор CASE в pl/pgsql</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Оператор CONTINUE для PL/pgSQL</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Оператор CREATE TRANSFORM</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Оператор DO для pl/perl</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Оператор DO для PL/PGSQL</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка исключений в PL/pgSQL</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>ОператорEXECUTE USING в PL/pgSQL</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Оператор FOREACH IN ARRAY в pl/pgsql</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Параметры IN/OUT/INOUT для PL/PGSQL и PL/SQL</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Именованные параметры</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Создание процедурного языка без прав суперпользователя</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Язык pl/pgsql используется по умолчанию</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Полиморфные функции</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка Python 3 для pl/python</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Квалифицированные параметры функций</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Параллельная обработка запросов для RETURN QUERY</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Оператор RETURN QUERY в pl/pgsql</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Указание параметров ROWS и COST для функций</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка прокручиваемых и обновляемых курсоров для PL/PGSQL</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Оператор SQLERRM/SQLSTATE для pl/pgsql</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка объектов Unicode в PL/Python</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Пользовательские исключения</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Функция валидатора для PL/Perl</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Расширения</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Оператор CREATE EXTENSION ... CASCADE</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Установка расширения</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Доверенные расширения</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Интернационализация</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Встроенная, независимая от платформы неизменяемая сортировка</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Функция casefold</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Поддержка сопоставления на уровне столбцов</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Сортировка на уровне базы данных</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Сортировка ICU по умолчанию для кластеров/баз данных</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Поддержка EUC_JIS_2004/ SHIFT_JIS_2004</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Сортировка ICU</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Сравнения LIKE для недетерминированных параметров сортировки</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Поддержка многобайтового кодирования, включая UTF8</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка нескольких языков</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Недетерминированные сопоставления</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Сортировка pg_unicode_fast</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Строковые литералы и идентификаторы Unicode</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка UTF8 в Windows</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Клиентские приложения</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Тест производительности pgbench</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Утилита восстановления РК pg_combinebackup</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
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
<th rowspan="2" style="text-align: center;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: center;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Преобразование физической репликации в логическую pg_createsubscriber</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Предварительная загрузка данных отношений в кеш буферов pg_prewarm</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Синхронизация каталога данных pg_rewind</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Инициализации резервных копий pg_standby (не используется)</p>
</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Обновление экземпляра сервера pg_upgrade</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Вывод журнала WAL в удобочитаемом виде pg_waldump</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Вывод содержимого WAL файлов pg_walsummary</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>pg_xlogdump, заменен на pg_waldump (не используется)</p>
</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Установка нового соединения psql \bind</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Вывод списка параметров и значений конфигурации сервера psql \dconfig</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Конвейерные запросы psql</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Именованные подготовленные операторы psql</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Поддержка предыдущих версий psql</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Дополнительные модули (contrib)</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Набор инструментов поддержки pgAdmin - adminpack</p>
</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Задержка при ошибке аутентификации - auth_delay</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Автоматическая запись планов запросов - auto_explain</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Классы операторов GIN с поведением B-tree - btree_gin</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Классы операторов GIST с поведением B-tree btree_gist</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Nип данных для строк, нечувствительных к регистру - citex</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Подключение к другому серверу PostgreSQL - dblink</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка асинхронных уведомлений dblink</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Обращение к файлам данных - file_fdw</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Вычисление схожести и расстояния между строками - fuzzystrmatch</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Тип данных hstore для хранения пар ключ-значение - hstore</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Работа с целочисленными массивами - intarray</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>типы данных для международных стандартов нумерации (ISBN, EAN, UPC и т. д.) - isn (ISBN)</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка KNN для CUBE</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Тип данных для представления меток данных в иерархической древовидной структуре - ltree</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Низкоуровневое исследование страниц баз данных - pageinspect</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Проверка надежности пароля - passwordcheck</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Состояние буферного кеша - pg_buffercache</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Просмотр карты свободного пространства - pg_freespacemap</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Проверка компонентов логического декодирования - pg_logicalinspect</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Выгрузка дополнительной информации через команду EXPLAIN -</p>
<p>pg_overexplain</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Отслеживание статистики планирования и выполнения SQL-операторов</p>
<p>- pg_stat_statements</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Улучшенный pg_stat_statements</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Получение статистики на уровне кортежа - pgstattuple</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка определения схожести текста на основе триграмм - pg_trgm</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Индексирование регулярных выражений pg_trgm</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Просмотр журнала предзаписи на низком уровне - pg_walinspect</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Тип данных для отрезков или интервалов чисел с плавающей точкой - seg</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Проверка безопасности на базе политик SELinux для мандатного управления доступом- sepgsql</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Получение информации об SSL-сертификате клиента - sslinfo</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Функции, возвращающие таблицы - tablefunc</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Триггерная функция, уведомляющая об изменениях в таблице - tcn</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
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
<th rowspan="2" style="text-align: center;"><strong>Функциональная возможность</strong></th>
<th colspan="4" style="text-align: center;">
<p><strong>Версия ядра</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Обертка совместимости tsearch2 (не поддерживается)</p>
</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Словарь текстового поиска, который убирает диакритические знаки -</p>
<p>unaccent</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Генератор UUID - uuid-ossp</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>xml2 (не поддерживается)</p>
</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p><strong>Сеть</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Полная поддержка SSL</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка IPv6</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Протокол клиента V2</p>
</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td>
<p>Протокол клиента V3</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p><strong>Поддерживаемые платформы</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p>Поддержка Microsoft Visual C++</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Портированная версия для Windows</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка спин-блокировок для аппаратной платформы SuperH</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Компилятор Sun Studio на Linux</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td>
<p>Поддержка Windows x64</p>
</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
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
<th rowspan="2" style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование ОС</strong></p>
</th>
<th rowspan="2" style="text-align: center;">
<p><strong>Серверная часть</strong></p>
</th>
<th rowspan="2" style="text-align: center;">
<p><strong>Клиентская часть</strong></p>
</th>
<th rowspan="2" style="text-align: center;">
<p><strong>Docker (ver.)</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>Сертификат ФСТЭК</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>№ серт.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дата</strong></p>
<p><strong>выдачи</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Windows 10</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Windows 11</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Windows Server 2016</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Windows Server 2019</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Windows Server 2022</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>Astra Linux 1.7 Special Edition Смоленск (x86-</p>
<p>64)</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>25.0.5</p>
</td>
<td style="text-align: center;">
<p>2557</p>
</td>
<td style="text-align: center;">
<p>30.01.2012</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>Astra Linux 1.8 (x86-</p>
<p>64)</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>Astra Linux 2.12 Сommon Edition Орел</p>
<p>(x86-64)</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>24.0.2</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>Debian 11</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>24.0.2</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>10</p>
</td>
<td>
<p>Debian 12</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>27.1.1</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>11</p>
</td>
<td>
<p>Альт 8 СП</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>27.1.1</p>
</td>
<td style="text-align: center;">
<p>3866</p>
</td>
<td style="text-align: center;">
<p>10.08.2018</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>12</p>
</td>
<td>
<p>Альт 9.1 Server</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>13</p>
</td>
<td>
<p>Альт 10 Server</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>23.0.1</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>14</p>
</td>
<td>
<p>Ubuntu 20.04</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>24.0.2</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>15</p>
</td>
<td>
<p>Ubuntu 22.04</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>24.0.2</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>16</p>
</td>
<td>
<p>Ubuntu 24.04</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>24.0.2</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>17</p>
</td>
<td>
<p>ОСНОВА2</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>20.10.5</p>
</td>
<td style="text-align: center;">
<p>4381</p>
</td>
<td style="text-align: center;">
<p>31.03.2021</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>18</p>
</td>
<td>
<p>РЕД ОС 7.3 Муром</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>20.10.1</p>
</td>
<td style="text-align: center;">
<p>4060</p>
</td>
<td style="text-align: center;">
<p>12.01.2019</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>19</p>
</td>
<td>
<p>РЕД ОС 8</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>20</p>
</td>
<td>
<p>РОСА 12.4</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>21</p>
</td>
<td>
<p>Oracle Linux 8</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>+</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
</tbody>
</table>

СУБД «Jatoba» устанавливается на ЭВМ с процессорами, имеющими архитектуру x86-64, ARM64 и AMD64, удовлетворяющие следующим аппаратным требованиям, указанным в таблице 1.3.

Таблица 1.3 – Аппаратные требования к ЭВМ, на которых фукционируют клиентская и серверная части СУБД

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 54%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Параметр</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Характеристика</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Серт-я ОС</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3" style="text-align: center;"><strong>Требования к аппаратному обеспечению сервера СУБД/JDS</strong></td>
</tr>
<tr>
<td style="text-align: center;">
<p>ОЗУ</p>
</td>
<td style="text-align: center;">
<p>Не менее 2 Гб</p>
</td>
<td style="text-align: center;"></td>
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
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Характеристика</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Серт-я ОС</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Свободный объем</p>
<p>жесткого диска</p>
</td>
<td>
<p>Минимальный объем от 40 Гб</p>
<p>Рекомендуемый объем от 100 Гб</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Устройства видео вывода</p>
</td>
<td>
<p>Монитор и видеоадаптер с поддержкой VGA</p>
<p>и разрешением 800x600 или выше</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Тип процессора и</p>
<p>минимальная тактовая частота процессора</p>
</td>
<td>
<p>64-разрядный процессор Intel или AMD 3 ГГц или больше</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Минимальное количество</p>
<p>ядер</p>
</td>
<td>
<p>4</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Устройства ввода-вывода</p>
</td>
<td>
<p>Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB, либо PS/2</p>
<p>интерфейсами</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Адаптер Ethernet</p>
</td>
<td>
<p>100 Мбит/с</p>
</td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><strong>Требования к аппаратному обеспечению АРМ управления</strong></td>
</tr>
<tr>
<td>
<p>ОЗУ</p>
</td>
<td>
<p>Не менее 4 Гб</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Свободный объем</p>
<p>жесткого диска</p>
</td>
<td>
<p>От 3 Гб</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Устройства видео вывода</p>
</td>
<td>
<p>Монитор и видеоадаптер с поддержкой VGA</p>
<p>и разрешением 800x600 или выше</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Тип процессора и</p>
<p>минимальная тактовая частота процессора</p>
</td>
<td>
<p>64-разрядный процессор Intel или AMD Рекомендуемая частота: 2.4 ГГц или больше</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Устройства ввода-вывода</p>
</td>
<td>
<p>Стандартные 105-клавишная клавиатура и</p>
<p>манипулятор «мышь» с USB-интерфейсами либо PS/2 интерфейсами</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Адаптер Ethernet</p>
</td>
<td>
<p>100 Мбит/с</p>
</td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;">
<p><strong>Требования к программному обеспечению сервера</strong></p>
</td>
</tr>
<tr>
<td>
<p>Операционная система</p>
</td>
<td>
<p>Требования приведены в таблице <a href="#_bookmark88">1.2</a></p>
</td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><strong>Требования к программному обеспечению АРМ управления</strong></td>
</tr>
<tr>
<td>
<p>Операционная система</p>
</td>
<td>
<p>Требования приведены в таблице <a href="#_bookmark88">1.2</a></p>
</td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;">
<p><strong>Требования к программному обеспечению сервера JDS</strong></p>
</td>
</tr>
<tr>
<td rowspan="3">
<p>Поддерживаемые платформы</p>
</td>
<td><ul>
<li><p>win-x86;</p></li>
</ul></td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td><ul>
<li><p>win-x64;</p></li>
</ul></td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td><ul>
<li><p>linux-x64</p></li>
</ul></td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
<tr>
<td>
<p>СУБД</p>
</td>
<td>
<p>Защищенная система управления базами</p>
<p>данных «Jatoba»</p>
</td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>Веб-сервер</p>
</td>
<td>
<p>IIS 10</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td>
<p>nginx</p>
</td>
<td style="text-align: center;">
<p>+</p>
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
<th>
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Характеристика</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Серт-я ОС</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Компоненты</p>
</td>
<td>
<p>ASP.NET Core 6.0 Runtime (v6.0.1) –</p>
<p>Windows Hosting Bundle Installer</p>
</td>
<td style="text-align: center;">
<p>-</p>
</td>
</tr>
<tr>
<td rowspan="5">
<p>Internet браузеры сертифицированных ОС</p>
</td>
<td><ul>
<li><p>Google Chrome;</p></li>
</ul></td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
<tr>
<td><ul>
<li><p>Яндекс.Браузер;</p></li>
</ul></td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
<tr>
<td><ul>
<li><p>Chromium;</p></li>
</ul></td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
<tr>
<td><ul>
<li><p>Opera;</p></li>
</ul></td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
<tr>
<td><ul>
<li><p>Mozilla Firefox.</p></li>
</ul></td>
<td style="text-align: center;">
<p>+</p>
</td>
</tr>
</tbody>
</table>

### Производительность СУБД

СУБД должна обеспечивать требования по производительности, указанные в таблице 1.4.

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
<th rowspan="3">
<p><strong>№</strong></p>
</th>
<th rowspan="3">
<p><strong>Параметр производительности</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J18</strong></p>
</th>
</tr>
<tr>
<th colspan="2" style="text-align: center;">
<p><strong>Серверная часть,</strong></p>
<p><strong>исполнение</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>Серверная часть,</strong></p>
<p><strong>исполнение</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>Серверная часть,</strong></p>
<p><strong>исполнение</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>Серверная часть,</strong></p>
<p><strong>исполнение</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td>
<p>Количество пользовательских сессий, поддерживаемых</p>
<p>параллельно</p>
</td>
<td>
<p>1000</p>
</td>
<td>
<p>1000</p>
</td>
<td>
<p>1000</p>
</td>
<td>
<p>1000</p>
</td>
<td>
<p>1000</p>
</td>
<td>
<p>1000</p>
</td>
<td>
<p>1000</p>
</td>
<td>
<p>1000</p>
</td>
</tr>
<tr>
<td>
<p>2</p>
</td>
<td>
<p>Количество обрабатываемых стандартных запросов</p>
<p>в единицу времени (сек)</p>
</td>
<td style="text-align: center;">
<p>26180</p>
<p>(32</p>
<p>сессий)</p>
</td>
<td>
<p>39700</p>
<p>(64 сессий)</p>
</td>
<td>
<p>24710</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: center;">
<p>29255</p>
<p>(32</p>
<p>сессий)</p>
</td>
<td>
<p>25580</p>
<p>(64 сессий)</p>
</td>
<td>
<p>38470</p>
<p>(64 сессий)</p>
</td>
<td>
<p>24760</p>
<p>(32 сессий)</p>
</td>
<td>
<p>29255 (64</p>
<p>сессий)</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Количество транзакций в единицу</p>
<p>времени (ед/сек)</p>
</td>
<td style="text-align: center;">
<p>5236</p>
<p>(32 сессий)</p>
</td>
<td style="text-align: center;">
<p>7940</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: center;">
<p>4942</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: center;">
<p>5851</p>
<p>(32 сессий)</p>
</td>
<td style="text-align: center;">
<p>5116</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: center;">
<p>7694</p>
<p>(64 сессий)</p>
</td>
<td style="text-align: center;">
<p>4952</p>
<p>(32 сессий)</p>
</td>
<td style="text-align: center;">
<p>28860</p>
<p>(64 сессий)</p>
</td>
</tr>
<tr>
<td rowspan="6">
<p>4</p>
</td>
<td rowspan="6">
<p>Задержка в выполнении стандартного запроса (мс)</p>
</td>
<td style="text-align: center;">
<p>мин. 1,4</p>
</td>
<td style="text-align: center;">
<p>мин. 1</p>
</td>
<td style="text-align: center;">
<p>мин. 1,5</p>
</td>
<td style="text-align: center;">
<p>мин. 1,4</p>
</td>
<td style="text-align: center;">
<p>мин. 1,5</p>
</td>
<td style="text-align: center;">
<p>мин. 1</p>
</td>
<td style="text-align: center;">
<p>мин. 1,4</p>
</td>
<td style="text-align: center;">
<p>мин. 1,4</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>1 сессия</p>
</td>
<td style="text-align: center;">
<p>1 сессия</p>
</td>
<td style="text-align: center;">
<p>1 сессия</p>
</td>
<td style="text-align: center;">
<p>1 сессия</p>
</td>
<td style="text-align: center;">
<p>1 сессия</p>
</td>
<td style="text-align: center;">
<p>1 сессия</p>
</td>
<td style="text-align: center;">
<p>1 сессия</p>
</td>
<td style="text-align: center;">
<p>1 сессия</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>макс. 492</p>
</td>
<td style="text-align: center;">
<p>макс. 293</p>
</td>
<td style="text-align: center;">
<p>макс. 556</p>
</td>
<td style="text-align: center;">
<p>макс. 457</p>
</td>
<td style="text-align: center;">
<p>макс. 551</p>
</td>
<td style="text-align: center;">
<p>макс. 273</p>
</td>
<td style="text-align: center;">
<p>макс. 531</p>
</td>
<td style="text-align: center;">
<p>макс. 397</p>
</td>
</tr>
<tr>
<td>
<p>1000</p>
<p>сессий</p>
</td>
<td style="text-align: center;">
<p>1000 сессий</p>
</td>
<td style="text-align: center;">
<p>1000 сессий</p>
</td>
<td>
<p>1000</p>
<p>сессий</p>
</td>
<td style="text-align: center;">
<p>1000 сессий</p>
</td>
<td>
<p>1000</p>
<p>сессий</p>
</td>
<td style="text-align: center;">
<p>1000 сессий</p>
</td>
<td>
<p>1000</p>
<p>сессий</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>6,1</p>
</td>
<td style="text-align: center;">
<p>8,1</p>
</td>
<td style="text-align: center;">
<p>13</p>
</td>
<td style="text-align: center;">
<p>5,5</p>
</td>
<td style="text-align: center;">
<p>12,5</p>
</td>
<td style="text-align: center;">
<p>8,3</p>
</td>
<td style="text-align: center;">
<p>6,5</p>
</td>
<td style="text-align: center;">
<p>11,1</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>32 сессии</p>
</td>
<td style="text-align: center;">
<p>64 сессии</p>
</td>
<td style="text-align: center;">
<p>64 сессии</p>
</td>
<td style="text-align: center;">
<p>32 сессии</p>
</td>
<td style="text-align: center;">
<p>64 сессии</p>
</td>
<td style="text-align: center;">
<p>64 сессии</p>
</td>
<td style="text-align: center;">
<p>32 сессии</p>
</td>
<td style="text-align: center;">
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
<th rowspan="3">
<p><strong>№</strong></p>
</th>
<th rowspan="3">
<p><strong>Параметр производительности</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J18</strong></p>
</th>
</tr>
<tr>
<th colspan="2">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
<th colspan="2">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
<th colspan="2">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
<th colspan="2">
<p><strong>Серверная часть, исполнение</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>5</p>
</td>
<td>
<p>Количество экземпляров системы управления базами данных, которые могут совместно работать в режиме балансировки</p>
<p>нагрузки</p>
</td>
<td>
<p>2 - 8</p>
</td>
<td>
<p>2 - 8</p>
</td>
<td>
<p>2 - 8</p>
</td>
<td>
<p>2 - 8</p>
</td>
<td>
<p>2 - 8</p>
</td>
<td>
<p>2 - 8</p>
</td>
<td>
<p>2 - 8</p>
</td>
<td>
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
<th>
<p>DDL</p>
</th>
<th style="text-align: center;">
<p>–</p>
</th>
<th>
<p>Data Definition Language, язык описания данных</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>DML</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Data Manipulation Language, язык манипулирования данными</p>
</td>
</tr>
<tr>
<td>
<p>SQL</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Structured Query Language, язык структурированных запросов</p>
</td>
</tr>
<tr>
<td>
<p>БД</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>База данных</p>
</td>
</tr>
<tr>
<td>
<p>ГИС</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Государственные информационные системы</p>
</td>
</tr>
<tr>
<td>
<p>Дист.</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Дистрибутив</p>
</td>
</tr>
<tr>
<td>
<p>ИСПДн</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Информационная система персональных данных</p>
</td>
</tr>
<tr>
<td>
<p>КВО</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Критически важный объект</p>
</td>
</tr>
<tr>
<td>
<p>КИИ</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Критическая информационная инфраструктура</p>
</td>
</tr>
<tr>
<td>
<p>Обр.к</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Образ контейнера</p>
</td>
</tr>
<tr>
<td>
<p>ОС</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Операционная система</p>
</td>
</tr>
<tr>
<td>
<p>СУБД</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Система управления базами данных</p>
</td>
</tr>
<tr>
<td>
<p>ФСТЭК</p>
<p>России</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Федеральная служба по техническому и экспортному контролю России</p>
</td>
</tr>
<tr>
<td>
<p>ЭВМ</p>
</td>
<td style="text-align: center;">
<p>–</p>
</td>
<td>
<p>Электронно-вычислительная машина</p>
</td>
</tr>
</tbody>
</table>

