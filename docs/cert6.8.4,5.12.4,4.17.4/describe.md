<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 59%" />
<col style="width: 6%" />
<col style="width: 23%" />
<col style="width: 1%" />
</colgroup>
<thead>
<tr>
<th colspan="2" rowspan="6"></th>
<th><p>УТВЕРЖДЕНО</p>
<p>643.72410666.00067-07 31 01</p></th>
<th colspan="3" style="text-align: center;"></th>
</tr>
<tr>
<th colspan="3" style="text-align: center;"><p><strong>ЗАЩИЩЕННАЯ СИСТЕМА УПРАВЛЕНИЯ</strong></p>
<p><strong>БАЗАМИ ДАННЫХ «JATOBA»</strong></p>
<p><strong>Описание применения</strong></p></th>
<th></th>
</tr>
<tr>
<th colspan="3" style="text-align: center;"><strong>643.72410666.00067-07 31 01</strong></th>
<th></th>
</tr>
<tr>
<th colspan="3" style="text-align: center;"></th>
<th></th>
</tr>
<tr>
<th colspan="3" style="text-align: center;">Листов 30</th>
<th></th>
</tr>
<tr>
<th colspan="2" rowspan="6"></th>
<th colspan="2" rowspan="6" style="text-align: center;"></th>
</tr>
<tr>
<th><blockquote>
<p><strong>Подп. и дата</strong></p>
</blockquote></th>
<th></th>
</tr>
<tr>
<th style="text-align: left;"><blockquote>
<p><strong>Инв. № дубл.</strong></p>
</blockquote></th>
<th></th>
</tr>
<tr>
<th><blockquote>
<p><strong>Взам. инв. №</strong></p>
</blockquote></th>
<th></th>
</tr>
<tr>
<th><blockquote>
<p><strong>Подп. и дата</strong></p>
</blockquote></th>
<th></th>
</tr>
<tr>
<th rowspan="2" style="text-align: left;"><blockquote>
<p><strong>Инв. № подл.</strong></p>
</blockquote></th>
<th rowspan="2"></th>
</tr>
<tr>
<th colspan="4" style="text-align: center;"><p>2024</p>
<p>Литера О<sub>1</sub></p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# аннотация

В документе приведены сведения о защищенной системе управления базами данных «Jatoba» (далее − СУБД «Jatoba»). Настоящий документ содержит описание назначения СУБД «Jatoba», описание функциональных возможностей, условий применения и решаемых СУБД «Jatoba» задач, а также входные и выходные данные СУБД.

# СОДЕРЖАНИЕ

[1. НАЗНАЧЕНИЕ ПРОГРАММЫ [4](#назначение-программы)](#назначение-программы)

[1.1. Назначение СУБД «Jatoba» [4](#назначение-субд-jatoba)](#назначение-субд-jatoba)

[1.2. Основные характеристики [4](#основные-характеристики)](#основные-характеристики)

[1.3. Производительность СУБД [10](#производительность-субд)](#производительность-субд)

[2. УСЛОВИЯ ПРИМЕНЕНИЯ [11](#условия-применения)](#условия-применения)

[3. ОПИСАНИЕ ЗАДАЧИ [16](#описание-задачи)](#описание-задачи)

[3.1. Классы решаемых задач [16](#классы-решаемых-задач)](#классы-решаемых-задач)

[3.2. Методы решения задач [17](#методы-решения-задач)](#методы-решения-задач)

[3.2.1. Задачи управления базами данных, решаемые ядром СУБД [17](#задачи-управления-базами-данных-решаемые-ядром-субд)](#задачи-управления-базами-данных-решаемые-ядром-субд)

[3.2.2. Задачи расширения функциональных возможностей ядра СУБД [20](#задачи-расширения-функциональных-возможностей-ядра-субд)](#задачи-расширения-функциональных-возможностей-ядра-субд)

[3.2.3. Задачи расширения защиты данных и обеспечения отказоустойчивости [21](#задачи-расширения-защиты-данных-и-обеспечения-отказоустойчивости)](#задачи-расширения-защиты-данных-и-обеспечения-отказоустойчивости)

[4. ВХОДНЫЕ И ВЫХОДНЫЕ ДАННЫЕ [28](#входные-и-выходные-данные)](#входные-и-выходные-данные)

[4.1. Входные данные [28](#входные-данные)](#входные-данные)

[4.2. Выходные данные [28](#выходные-данные)](#выходные-данные)

[ПЕРЕЧЕНЬ СОКРАЩЕНИЙ [29](#перечень-сокращений)](#перечень-сокращений)

[ЛИСТ РЕГИСТРАЦИИ ИЗМЕНЕНИЙ [30](#лист-регистрации-изменений)](#лист-регистрации-изменений)

# НАЗНАЧЕНИЕ ПРОГРАММЫ

## Назначение СУБД «Jatoba»

СУБД «Jatoba» базируется на свободном программном обеспечении СУБД «PostgreSQL».

СУБД «Jatoba» предназначена для управления базами данных (далее – БД) в значимых объектах критической информационной инфраструктуры 1 категории, в государственных информационных системах 1 класса защищенности, в автоматизированных системах управления производственными и технологическими процессами 1 класса защищенности, в информационных системах персональных данных при необходимости обеспечения 1 уровня защищенности персональных данных, в информационных системах общего пользования II класса на базе электронно-вычислительных машин (далее – ЭВМ) под управлением операционных систем (далее – ОС) приведенных в таблице Таблица 2.1.

## Основные характеристики

СУБД «Jatoba» реализована в архитектуре клиент-сервер. Рабочий сеанс включает следующие взаимодействующие процессы (программы):

- главный серверный процесс, управляющий файлами баз данных, принимающий подключения клиентских приложений и выполняющий различные запросы клиентов к базам данных;

- клиентское приложение пользователя, выполняющее операции в БД;

- CLI-консоль на АРМ управления.

Клиентская и серверная часть СУБД «Jatoba» могут располагаться на разных ЭВМ. Взаимодействие организовано по протоколу TCP/IP. Сервер СУБД «Jatoba» может обслуживать одновременно несколько подключений клиентов.

В состав СУБД «Jatoba» входят компоненты, приведенные в таблице Таблица 1.1.

Таблица 1.1 – Состав компонент

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 18%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: left;"><strong>№</strong></th>
<th rowspan="2" style="text-align: left;"><strong>Наименование</strong></th>
<th rowspan="2" style="text-align: center;"><strong>J4</strong></th>
<th rowspan="2" style="text-align: center;"><strong>J5</strong></th>
<th rowspan="2" style="text-align: center;"><strong>J6</strong></th>
<th rowspan="2" style="text-align: left;"><strong>Описание</strong></th>
<th colspan="2" style="text-align: center;"><strong>J4</strong></th>
<th colspan="2" style="text-align: center;"><strong>J5</strong></th>
<th colspan="2" style="text-align: center;"><strong>J6</strong></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.1)</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.2)</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.1)</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.2)</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.1)</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.2)</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">1</td>
<td style="text-align: left;">ядро СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: left;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">pwgen</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: left;">Генератор паролей</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: left;">Маскирование паролей</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">KNN</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: left;">Поиск ближайших соседей</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">xid64</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: left;">Компонент xid64</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">ja_Compression</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">1.0</td>
<td style="text-align: left;">Сжатие данных на уровне страниц</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">WAL Recovery</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: left;">Восстановление поврежденных WAL записей</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">2</td>
<td style="text-align: left;">jaDog</td>
<td style="text-align: center;">3.3.0</td>
<td style="text-align: center;">3.3.0</td>
<td style="text-align: center;">3.3.0</td>
<td style="text-align: left;">компонент управления режимом работы узлов кластера</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">3</td>
<td style="text-align: left;"><p>JDV</p>
<p>(Jatoba data vault)</p></td>
<td style="text-align: center;">1.5.1</td>
<td style="text-align: center;">1.5.1</td>
<td style="text-align: center;">1.6.1</td>
<td style="text-align: left;">компонент контроля субъектов доступа</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">4</td>
<td style="text-align: left;">pgBadger</td>
<td style="text-align: center;">12.1</td>
<td style="text-align: center;">12.1</td>
<td style="text-align: center;">12.1</td>
<td style="text-align: left;">компонент формирования отчетов по журналам СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">5</td>
<td style="text-align: left;">pg_ProBackup</td>
<td style="text-align: center;">2.5.12</td>
<td style="text-align: center;">2.5.14</td>
<td style="text-align: center;">2.5.14</td>
<td style="text-align: left;">компонент расширенного резервного копирования</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">6</td>
<td style="text-align: left;">pg_Task</td>
<td style="text-align: center;">2.0.39</td>
<td style="text-align: center;">2.0.39</td>
<td style="text-align: center;">2.0.39</td>
<td style="text-align: left;">компонент планирования заданий СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">7</td>
<td style="text-align: left;">pg_Profile</td>
<td style="text-align: center;">4.6.0</td>
<td style="text-align: center;">4.6.0</td>
<td style="text-align: center;">4.6.0</td>
<td style="text-align: left;">компонент формирования отчетов производительности СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">8</td>
<td style="text-align: left;"><p>JDS</p>
<p>(Jatoba data safe)</p></td>
<td style="text-align: center;">2.7.0</td>
<td style="text-align: center;">2.7.0</td>
<td style="text-align: center;">2.7.0</td>
<td style="text-align: left;">компонент пользовательского веб-интерфейса для администраторов</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">9</td>
<td style="text-align: left;">ja_Sync_Ldap</td>
<td style="text-align: center;">1.3.1</td>
<td style="text-align: center;">1.3.1</td>
<td style="text-align: center;">1.3.1</td>
<td style="text-align: left;">компонент синхронизации учетных записей со службами каталогов</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">10</td>
<td style="text-align: left;">PlsPgSQL</td>
<td style="text-align: center;">2.0.1</td>
<td style="text-align: center;">2.0.1</td>
<td style="text-align: center;">2.0.1</td>
<td style="text-align: left;">компонент обфускации кода PL/pgSQL</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">11</td>
<td style="text-align: left;">ja_Hipe_Cluster</td>
<td style="text-align: center;">12.1.1</td>
<td style="text-align: center;">12.1.1</td>
<td style="text-align: center;">12.1.1</td>
<td style="text-align: left;">компонент высокопроизводительного кластера</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">12</td>
<td style="text-align: left;">ja_Log</td>
<td style="text-align: center;">1.2.0</td>
<td style="text-align: center;">1.2.0</td>
<td style="text-align: center;">1.2.0</td>
<td style="text-align: left;">компонент централизованного сбора записей событий СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">13</td>
<td style="text-align: left;">1c_support</td>
<td style="text-align: center;">4.17.1</td>
<td style="text-align: center;">5.12.1</td>
<td style="text-align: center;">5.12.1</td>
<td style="text-align: left;">компонент поддержки платформы 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">14</td>
<td style="text-align: left;">fasttrun</td>
<td style="text-align: center;">2.0.15</td>
<td style="text-align: center;">2.0.0</td>
<td style="text-align: center;">2.0.0</td>
<td style="text-align: left;">компонент совместимости с 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">15</td>
<td style="text-align: left;">fulleq</td>
<td style="text-align: center;">2.0.0</td>
<td style="text-align: center;">2.0.0</td>
<td style="text-align: center;">2.0.0</td>
<td style="text-align: left;">компонент совместимости с 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">16</td>
<td style="text-align: left;">mchar</td>
<td style="text-align: center;">2.2.1</td>
<td style="text-align: center;">2.2.1</td>
<td style="text-align: center;">2.2.1</td>
<td style="text-align: left;">компонент совместимости с 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">17</td>
<td style="text-align: left;">online_analyze</td>
<td style="text-align: center;">1.0.0</td>
<td style="text-align: center;">1.0.0</td>
<td style="text-align: center;">1.0.0</td>
<td style="text-align: left;">компонент совместимости с 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">18</td>
<td style="text-align: left;">plantuner</td>
<td style="text-align: center;">1.0.0</td>
<td style="text-align: center;">1.0.0</td>
<td style="text-align: center;">1.0.0</td>
<td style="text-align: left;">компонент совместимости с 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">19</td>
<td style="text-align: left;">ja_CSum</td>
<td style="text-align: center;">1.0.19</td>
<td style="text-align: center;">1.1.1</td>
<td style="text-align: center;">1.1.1</td>
<td style="text-align: left;">компонент контроля целостности</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">20</td>
<td style="text-align: left;">jaPooler</td>
<td style="text-align: center;">2.1.0</td>
<td style="text-align: center;">2.1.0</td>
<td style="text-align: center;">2.1.0</td>
<td style="text-align: left;">компонент балансировки подключений пользователей к СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">21</td>
<td style="text-align: left;">Oracle_FDW (Foreign data wrapper for oracle)</td>
<td style="text-align: center;">1.2.0</td>
<td style="text-align: center;">1.2.0</td>
<td style="text-align: center;">1.2.0</td>
<td style="text-align: left;">компонент доступа к данным СУБД Oracle</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">22</td>
<td style="text-align: left;">OraFCE (Oracle function compatibility extension)</td>
<td style="text-align: center;">3.22.0</td>
<td style="text-align: center;">4.3.0</td>
<td style="text-align: center;">4.3.0</td>
<td style="text-align: left;">компонент совместимости с СУБД Oracle</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">23</td>
<td style="text-align: left;">pg_Variables</td>
<td style="text-align: center;">1.2.0</td>
<td style="text-align: center;">1.2.5</td>
<td style="text-align: center;">1.2.5</td>
<td style="text-align: left;">компонент совместимости с системой глобальных переменных СУБД Oracle</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">24</td>
<td style="text-align: left;">SQL_Firewall</td>
<td style="text-align: center;">0.8.1</td>
<td style="text-align: center;">0.8.1</td>
<td style="text-align: center;">0.8.1</td>
<td style="text-align: left;">компонент выявления и предотвращения исполнения нетипичных SQL-запросов</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">25</td>
<td style="text-align: left;">JCS (Jatoba crypto access storage)</td>
<td style="text-align: center;">2.0.0</td>
<td style="text-align: center;">2.0.0</td>
<td style="text-align: center;">2.0.0</td>
<td style="text-align: left;">компонент сокрытия информации в файлах данных СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">26</td>
<td style="text-align: left;">pgSQL-HTTP</td>
<td style="text-align: center;">1.5.0</td>
<td style="text-align: center;">1.6.0</td>
<td style="text-align: center;">1.6.0</td>
<td style="text-align: left;">компонент формирования HTTP/HTTPS запросов из СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">27</td>
<td style="text-align: left;">TDS_FDW</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">2.0.3</td>
<td style="text-align: center;">2.0.3</td>
<td style="text-align: left;">компонент поддержки платформы Microsoft SQL Server</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">28</td>
<td style="text-align: left;">pgAudit</td>
<td style="text-align: center;">1.6.2</td>
<td style="text-align: center;">16.0.0</td>
<td style="text-align: center;">16.0.0</td>
<td style="text-align: left;">компонент расширенного журналирования событий СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">29</td>
<td style="text-align: left;">pgauditlogtofile</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">1.5.12</td>
<td style="text-align: center;">1.5.12</td>
<td style="text-align: left;">хранение событий безопасности в отдельном хранилище</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">30</td>
<td style="text-align: left;">PostGIS</td>
<td style="text-align: center;">3.2.1</td>
<td style="text-align: center;">3.3.3</td>
<td style="text-align: center;">3.3.3</td>
<td style="text-align: left;">компонент работы с географическими данными</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">31</td>
<td style="text-align: left;">PTrack</td>
<td style="text-align: center;">2.3.0</td>
<td style="text-align: center;">2.4.4</td>
<td style="text-align: center;">2.4.4</td>
<td style="text-align: left;">компонент расширенного резервного копирования</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">32</td>
<td style="text-align: left;">SecurityProfile</td>
<td style="text-align: center;">2.1.1</td>
<td style="text-align: center;">2.1.1</td>
<td style="text-align: center;">2.1.1</td>
<td style="text-align: left;">компонент управления парольными политиками пользователей СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">33</td>
<td style="text-align: left;">ja_Plan_Manager</td>
<td style="text-align: center;">1.2.0</td>
<td style="text-align: center;">1.2.0</td>
<td style="text-align: center;">1.2.0</td>
<td style="text-align: left;">компонент создания планов запросов в базах данных (БД), их оптимизации и экспорта в БД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">34</td>
<td style="text-align: left;">pg_store_plans</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">1.8.0</td>
<td style="text-align: center;">1.8.0</td>
<td style="text-align: left;">контроль выполненных планов запросов</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">35</td>
<td style="text-align: left;">pg-hint-plan</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">1.5.1</td>
<td style="text-align: center;">1.6.0</td>
<td style="text-align: left;">компонент корректировки запросов</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">36</td>
<td style="text-align: left;">ja_Container</td>
<td style="text-align: center;">4.17.1</td>
<td style="text-align: center;">5.12.1</td>
<td style="text-align: center;">6.8.1</td>
<td style="text-align: left;">СУБД «Jatoba» в контейнере</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">37</td>
<td style="text-align: left;">node_exporter</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">1.8.0</td>
<td style="text-align: center;">1.8.0</td>
<td style="text-align: left;">компонент сбора аппаратных и программных показателей работы GNU/Linux</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: left;">38</td>
<td style="text-align: left;">postgres_exporter</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">0.15.0</td>
<td style="text-align: center;">0.15.0</td>
<td style="text-align: left;">компонент сбора метрик СУБД</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: left;">39</td>
<td style="text-align: left;">sql_exporter</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">0.14.3</td>
<td style="text-align: center;">0.14.3</td>
<td style="text-align: left;">SQL экспортёр. Компонент сбора расширенных метрик СУБД</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: left;">40</td>
<td style="text-align: left;">prometheus</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">2.52.0</td>
<td style="text-align: center;">2.52.0</td>
<td style="text-align: left;">компонент мониторинга различных программных систем и сервисов Prometheus</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: left;">41</td>
<td style="text-align: left;">Alertmanager</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">0.27.0</td>
<td style="text-align: center;">0.27.0</td>
<td style="text-align: left;">компонент управления и обработки оповещений в системе мониторинга Prometheus</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: left;">42</td>
<td style="text-align: left;"></td>
<td style="text-align: center;">4.17.1</td>
<td style="text-align: center;">5.12.1</td>
<td style="text-align: center;">6.8.1</td>
<td style="text-align: left;">Работа СУБД «Jatoba» в режиме ЗПС в ОС Astra Linux</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: left;">43</td>
<td style="text-align: left;">gis-cryptoplatform</td>
<td style="text-align: center;">17_1.7.3-4</td>
<td style="text-align: center;">17_1.7.3-4</td>
<td style="text-align: center;">17_1.7.3-4</td>
<td style="text-align: left;">библиотека «КриптоПлатформа»</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: left;">44</td>
<td style="text-align: left;">pg_ulid</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">0.0.1-15</td>
<td style="text-align: center;">0.0.1-15</td>
<td style="text-align: left;">компонент поддержки лексографического идентификатора</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">45</td>
<td style="text-align: left;">ja_Seceventlog</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">3.0.0</td>
<td style="text-align: center;">3.0.0</td>
<td style="text-align: left;">компонент записи событий информационной безопасности</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">46</td>
<td style="text-align: left;">rum</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">1.3.13</td>
<td style="text-align: center;">1.3.13</td>
<td style="text-align: left;">компонент поддерживающий обратный индекс с хранением позиционной информации и полнотекстовый поиск</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">47</td>
<td style="text-align: left;">pg_repak</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">1.5.1</td>
<td style="text-align: center;">1.5.1</td>
<td style="text-align: left;">компонент реорганизации таблицы с минимальными блокировками</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">48</td>
<td style="text-align: left;">osnova-digsig-key</td>
<td style="text-align: center;">4.17.1</td>
<td style="text-align: center;">5.12.1</td>
<td style="text-align: center;">6.8.1</td>
<td style="text-align: left;">работа СУБД Jatoba в режиме ЗПС в ОС ОСНОВА</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">49</td>
<td style="text-align: left;">tsvector2</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">1.0.0</td>
<td style="text-align: center;">1.0.0</td>
<td style="text-align: left;">компонент полнотекстового поиска в БД</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">50</td>
<td style="text-align: left;">ja_Similar</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">1.0</td>
<td style="text-align: center;">1.0</td>
<td style="text-align: left;">компонент для полнотекстового поиска и определения похожих текстов</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">51</td>
<td style="text-align: left;">ja_Inventory</td>
<td style="text-align: center;">1.0</td>
<td style="text-align: center;">1.0</td>
<td style="text-align: center;">1.0</td>
<td style="text-align: left;">компонент инвентаризации СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: left;">52</td>
<td style="text-align: left;">ja_tune</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">1.0.0</td>
<td style="text-align: left;">Генератор конфигурационного файла</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
</tbody>
</table>

СУБД «Jatoba» реализует следующие функциональные возможности:

1)  управление данными во внешней памяти;

2)  управление данными в оперативной памяти;

3)  выполнение запросов (DDL/DML);

4)  управление транзакциями;

5)  журнализация изменений, резервное копирование и восстановление базы данных после сбоев, репликация.

СУБД «Jatoba» в дополнение к стандартным возможностям управления базами данных, реализует функции:

1)  хранение пространственных, географических и геометрических данных, поддержка запросов к ним и управление ими;

2)  синтаксическая совместимость с распространенными PL/SQL Oracle;

3)  расширенные возможности секционирования больших таблиц;

4)  протоколирование, анализ и запрет выполнения команд манипулирования данными (DDL/DML);

5)  сбор журналов аудита всех операций и загрузка конфигураций в СУБД;

6)  журналирование операций доступа к защищенным таблицам;

7)  работа в составе отказоустойчивого кластера с механизмом переключения нагрузки на основной узел кластера;

8)  защита от несанкционированного изменения конфигурационных файлов;

9)  единый пользовательский интерфейс для управления конфигурациями компонентов СУБД и просмотра их состояния.

10) поддержка предустановленных профилей парольных политик:

- FSTEC_1_class – профиль для ИС первого класса защищенности;

- FSTEC_2_class – профиль для ИС второго класса защищенности;

- CIS – профиль, основанный на рекомендациях Center for Internet Security;

- Corporate_1 – корпоративный профиль первого уровня для учетных записей пользователей;

- Corporate_2 – корпоративный профиль второго уровня, для учетных записей администраторов программных (программно-аппаратных средств);

- Corporate_3 – корпоративный профиль третьего уровня для, технических (сервисных, служебных) учетных записей, используемых в технологических процессах ИС или встроенных производителями программных (программно-аппаратных) средств в такие средства.

11) СУБД «Jatoba» поддерживает методы аутентификации:

- PASSWORD;

- GSSAPI / SSPI (Kerberos);

- LDAP (LDAPS);

- PAM;

- RADIUS;

- по сертификатам (SSL/TLS).

## Производительность СУБД

СУБД должна обеспечивать требования по производительности указанные в таблице Таблица 1.2.

| **№** | **Параметр производительности** | **J4** |  | **J5** |  | **J6** |  |
|:--:|----|----|----|----|----|----|----|
|  |  | **Серверная часть, исполнение** |  | **Серверная часть, исполнение** |  | **Серверная часть, исполнение** |  |
|  |  | **Дист.<sup>1)</sup>** | **Обр.к.<sup>2)</sup>** | **Дист.<sup>1)</sup>** | **Обр.к.<sup>2)</sup>** | **Дист.<sup>1)</sup>** | **Обр.к.<sup>2)</sup>** |
| 1 | Количество пользовательских сессий, поддерживаемых параллельно | 800 | 750 | 800 | 750 | 800 | 750 |
| 2 | Количество обрабатываемых стандартных запросов в единицу времени (сек) | 3650 | 3475 | 3520 | 3305 | 3540 | 3420 |
|  |  | (256 сессий) | (128 сессий) | (256 сессий) | (128 сессий) | (256 сессий) | (128 сессий) |
| 3 | Количество транзакций в единицу времени (ед/сек) | 730 | 695 | 704 | 661 | 725 | 643 |
|  |  | 256 сессий | 128 сессий | 256 сессий | 128 сессий | (256 сессий) | (128 сессий) |
| 4 | Задержка в выполнении стандартного запроса (сек) | мин. 13,5 | мин. 14,4 | мин. 13,9 | мин. 15,9 | мин. 13,6 | мин. 15,8 |
|  |  | (1 сессия) | (1 сессия) | (1 сессия) | (1 сессия) | (1 сессия) | (1 сессия) |
|  |  | макс. 5558 | макс. 5724 | макс. 5222 | макс. 7475 | макс. 5222 | макс. 7475 |
|  |  | (800 сессий) | (750 сессий) | (800 сессий) | (700 сессий) | (800 сессий) | (700 сессий) |
|  |  | 348 | 210 | 441 | 191 | 446 | 198 |
|  |  | (256 сессий) | (128 сессий) | (256 сессий) | (128 сессий) | (256 сессий) | (128 сессий) |
| 5 | Количество экземпляров системы управления базами данных, которые могут совместно работать в режиме балансировки нагрузки | 2 **–** 8 | 2 **–** 8 | 2 **–** 8 | 2 **–** 8 | 2 – 8 | 2 – 8 |

Таблица 1.2 – Требования к производительности СУБД

# УСЛОВИЯ ПРИМЕНЕНИЯ

Установка СУБД «Jatoba» должна выполняться на ЭВМ защищаемой локальной вычислительной сети, расположенные в контролируемой зоне.

Допускается установка СУБД «Jatoba» на ЭВМ, функционирующие под управлением ОС, указанных в таблице Таблица 2.1.

Таблица 2.1 – Поддерживаемые операционные системы

<table style="width:100%;">
<colgroup>
<col style="width: 5%" />
<col style="width: 21%" />
<col style="width: 8%" />
<col style="width: 14%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 4%" />
<col style="width: 5%" />
<col style="width: 5%" />
</colgroup>
<thead>
<tr>
<th rowspan="3" style="text-align: center;"><strong>№</strong></th>
<th rowspan="3" style="text-align: center;"><strong>Наименование ОС</strong></th>
<th colspan="2" style="text-align: center;"><strong>Сертификат ФСТЭК</strong></th>
<th colspan="3" style="text-align: center;"><strong>J4</strong></th>
<th colspan="3" style="text-align: center;"><strong>J5</strong></th>
<th colspan="3" style="text-align: center;"><strong>J6</strong></th>
</tr>
<tr>
<th rowspan="2"><strong>№ серт.</strong></th>
<th rowspan="2"><strong>Дата выдачи</strong></th>
<th colspan="2" style="text-align: center;"><strong>Серв. часть, исп.</strong></th>
<th rowspan="2"><strong>КЧ</strong></th>
<th colspan="2" style="text-align: center;"><strong>Серв. часть, исп.</strong></th>
<th rowspan="2"><strong>КЧ</strong></th>
<th colspan="2" style="text-align: center;"><strong>Серв. часть, исп.</strong></th>
<th rowspan="2"><strong>КЧ</strong></th>
</tr>
<tr>
<th><blockquote>
<p><strong>Дист.</strong><sup>1)</sup></p>
</blockquote></th>
<th><blockquote>
<p><strong>Обр.к.</strong><sup>2)</sup></p>
</blockquote></th>
<th><blockquote>
<p><strong>Дист.<sup>1)</sup></strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Обр.к.</strong> <strong><sup>2)</sup></strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Дист.</strong><sup>1)</sup></p>
</blockquote></th>
<th><blockquote>
<p><strong>Обр.к.</strong><sup>2)</sup></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">1</td>
<td>Astra Linux Special Edition 1.7 Смоленск (x86-64)</td>
<td>2557</td>
<td>27.01.2012</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
</tr>
<tr>
<td style="text-align: center;">2</td>
<td><p>Astra Linux Special Edition 1.8</p>
<p>(x86-64)</p></td>
<td>2557</td>
<td>27.01.2012</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
</tr>
<tr>
<td style="text-align: center;">3</td>
<td>Альт 8 СП</td>
<td>3866</td>
<td>10.08.2018</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
</tr>
<tr>
<td style="text-align: center;">4</td>
<td>Альт 10 Server</td>
<td>3866</td>
<td>10.08.2018</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td>РЕД ОС 7.3 Муром</td>
<td>4060</td>
<td>12.01.2019</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
</tr>
<tr>
<td style="text-align: center;">6</td>
<td>Основа2</td>
<td>4381</td>
<td>31.03.2021</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
<td>Х</td>
<td>*3)</td>
<td>Х</td>
</tr>
</tbody>
</table>

Примечание:

1)  Дистрибутив.

2)  Образ контейнера.

3)  Из комплекта поставки ОС.

СУБД «Jatoba» устанавливается на ЭВМ с процессорами, имеющими архитектуру x86-64 и AMD64, удовлетворяющие следующим аппаратным требованиям, указанным в таблице 2.2.

<table>
<caption><p>Таблица 2.2 – Аппаратные требования к средствам вычислительной техники, на которых функционируют клиентская и серверная части СУБД</p></caption>
<colgroup>
<col style="width: 46%" />
<col style="width: 53%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Характеристика</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" style="text-align: center;"><strong>Требования к аппаратному обеспечению сервера СУБД</strong></td>
</tr>
<tr>
<td style="text-align: center;">ОЗУ</td>
<td style="text-align: center;">Не менее 2 Гб</td>
</tr>
<tr>
<td style="text-align: center;">Свободный объем жесткого диска</td>
<td style="text-align: center;"><p>Минимальный объем от 40 Гб</p>
<p>Рекомендуемый объем от 100 Гб</p></td>
</tr>
<tr>
<td style="text-align: center;">Устройства видео вывода</td>
<td style="text-align: center;">Монитор и видеоадаптер с поддержкой VGA и разрешением 800x600 или выше</td>
</tr>
<tr>
<td style="text-align: center;">Тип процессора и минимальная тактовая частота процессора</td>
<td style="text-align: center;">64-разрядный процессор Intel или AMD 3 ГГц или больше</td>
</tr>
<tr>
<td style="text-align: center;">Минимальное количество ядер</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">Максимальное количество ядер</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">Устройства ввода-вывода</td>
<td style="text-align: center;">Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB, либо PS/2-интерфейсами</td>
</tr>
<tr>
<td style="text-align: center;">Адаптер Ethernet</td>
<td style="text-align: center;">100 Мбит/с</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>Требования к аппаратному обеспечению АРМ управления</strong></td>
</tr>
<tr>
<td style="text-align: center;">ОЗУ</td>
<td style="text-align: center;">Не менее 4 Гб</td>
</tr>
<tr>
<td style="text-align: center;">Свободный объем жесткого диска</td>
<td style="text-align: center;">От 3 Гб</td>
</tr>
<tr>
<td style="text-align: center;">Устройства видео вывода</td>
<td style="text-align: center;">Монитор и видеоадаптер с поддержкой VGA и разрешением 800x600 или выше</td>
</tr>
<tr>
<td style="text-align: center;">Тип процессора и минимальная тактовая частота процессора</td>
<td style="text-align: center;"><p>64-разрядный процессор Intel или AMD</p>
<p>Рекомендуемая частота: 2.4 ГГц или больше</p></td>
</tr>
<tr>
<td style="text-align: center;">Устройства ввода-вывода</td>
<td style="text-align: center;">Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB-интерфейсами, либо PS/2 интерфейсами</td>
</tr>
<tr>
<td style="text-align: center;">Адаптер Ethernet</td>
<td style="text-align: center;">100 Мбит/с</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>Требования к программному обеспечению сервера</strong></td>
</tr>
<tr>
<td style="text-align: left;">Операционная система</td>
<td style="text-align: left;">Требования приведены в таблице Таблица 2.1</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>Требования к программному обеспечению АРМ управления</strong></td>
</tr>
<tr>
<td style="text-align: left;">Операционная система</td>
<td style="text-align: left;">Требования приведены в таблице Таблица 2.1</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>Требования к аппаратному обеспечению сервера Jatoba data safe</strong></td>
</tr>
<tr>
<td style="text-align: center;">ОЗУ</td>
<td style="text-align: center;">Не менее 2 Гб</td>
</tr>
<tr>
<td style="text-align: center;">Свободный объем жесткого диска</td>
<td style="text-align: center;"><p>Минимальный объем от 40 Гб</p>
<p>Рекомендуемый объем от 100 Гб</p></td>
</tr>
<tr>
<td style="text-align: center;">Устройства видео вывода</td>
<td style="text-align: center;">Монитор и видеоадаптер с поддержкой VGA и разрешением 800x600 или выше</td>
</tr>
<tr>
<td style="text-align: center;">Тип процессора и минимальная тактовая частота процессора</td>
<td style="text-align: center;">64-разрядный процессор Intel или AMD 3 ГГц или больше</td>
</tr>
<tr>
<td style="text-align: center;">Минимальное количество ядер</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">Устройства ввода-вывода</td>
<td style="text-align: center;">Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB-интерфейсами, либо PS/2 интерфейсами</td>
</tr>
<tr>
<td style="text-align: center;">Адаптер Ethernet</td>
<td style="text-align: center;">100 Мбит/с</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>Требования к программному обеспечению сервера Jatoba data safe</strong></td>
</tr>
<tr>
<td style="text-align: left;">Поддерживаемые платформы</td>
<td style="text-align: left;">linux-x64</td>
</tr>
<tr>
<td style="text-align: center;">СУБД</td>
<td style="text-align: center;">Защищенная система управления базами данных «Jatoba»</td>
</tr>
<tr>
<td style="text-align: center;">Веб-сервер</td>
<td style="text-align: center;">nginx</td>
</tr>
<tr>
<td style="text-align: left;">Internet браузеры сертифицированных ОС</td>
<td style="text-align: center;"><ul>
<li><p>Яндекс.Браузер;</p></li>
<li><p>Chromium;</p></li>
<li><p>Mozilla Firefox.</p></li>
</ul></td>
</tr>
<tr>
<td style="text-align: left;">Internet браузеры ОС</td>
<td style="text-align: center;"><ul>
<li><p>Google Chrome;</p></li>
<li><p>Opera.</p></li>
</ul></td>
</tr>
</tbody>
</table>

Таблица 2.2 – Аппаратные требования к средствам вычислительной техники, на которых функционируют клиентская и серверная части СУБД

СУБД «Jatoba» может использоваться для обеспечения базовых и адаптированных мер защиты информации:

1)  при создании защищенных автоматизированных систем, не обрабатывающих сведения составляющие государственную тайну, до класса защищенности 1Г включительно (руководящий документ «Автоматизированные системы. Защита от несанкционированного доступа к информации. Классификация автоматизированных систем и требования по защите информации» (Гостехкомиссия России, 1992);

2)  для обеспечения 1 уровня защищенности персональных данных (п. 12 Приказа ФСТЭК России № 21 от 18 февраля 2013 г. (ред. от 14.05.2020) «Об утверждении состава и содержания организационных и технических мер по обеспечению безопасности персональных данных при их обработке в информационных системах персональных данных»);

3)  в государственных информационных системах 1 класса защищенности (п. 26 Приказа ФСТЭК России № 17 от 11 февраля 2013 г. (ред. от 28.05.2019) «Об утверждении Требований о защите информации, не составляющей государственную тайну, содержащейся в государственных информационных системах»);

4)  при создании защищенных информационных систем управления производственными и технологическими процессами на критически важных объектах, потенциально опасных объектах, а также объектах, представляющих повышенную опасность для жизни и здоровья людей и для окружающей природной среды до 1 класса защищенности включительно (п. 26 Приказа ФСТЭК России № 31 от 14 марта 2014 г. (ред. от 15.03.2021) «Об утверждении Требований к обеспечению защиты информации в автоматизированных системах управления производственными и технологическими процессами на критически важных объектах, потенциально опасных объектах, а также объектах, представляющих повышенную опасность для жизни и здоровья людей и для окружающей природной среды»);

5)  при создании информационных систем 1 категории значимости (п. 27 Приказа ФСТЭК России № 239 от 25.12.2017 (ред. от 20.02.2020) «Об утверждении требований по обеспечению безопасности значимых объектов критической информационной инфраструктуры Российской Федерации»);

6)  в информационных системах общего пользования II класса в соответствии с приказом ФСБ России и ФСТЭК России от 31.08.2010 г. №416/489,

и обеспечивать базовые и адаптированные меры защиты информации, приведенные ниже.

В таблице 2.3 приведены выполняемые меры защиты информации в соответствии с Приказами ФСТЭК России № 17 от 11.02.2013 (ред. от 28.08.2024), № 21 от 18.02.2013 (ред. от 14.05.2020), № 31 от 14.03.2014 (ред. от 15.03.2021) и № 239 от 25.12.2017 (ред. от 28.08.2024).

> Таблица 2.3 – Реализуемые меры защиты информации

| **Наименование** | **J4** |  | **J5** |  | **J6** |  | **Приказы ФСТЭК** |  |  |
|----|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|  |  |  |  |  |  |  | **ГИС** | **ИСПДн** | **КИИ и КВО** |
|  | **Дист.<sup>1)</sup>** | **Обр.к.<sup>2)</sup>** | **Дист.<sup>1)</sup>** | **Обр.к.<sup>2)</sup>** | **Дист.<sup>1)</sup>** | **Обр.к.<sup>2)</sup>** | **№17** | **№21** | **№239, №31** |
| Идентификация и аутентификация субъектов доступа и объектов доступа (ИАФ) | X | X | X | X | X | X | ИАФ.1 | ИАФ.1 | ИАФ.1 |
|  | X | X | X | X | X | X | ИАФ.3 | ИАФ.3 | ИАФ.3 |
|  | X | X | X | X | X | X | ИАФ.4 | ИАФ.4 | ИАФ.4 |
|  |  |  |  |  |  |  | ИАФ.4(1г) |  |  |
|  |  |  | X | X | X | X | ИАФ.4(2) |  |  |
|  | X | X | X | X | X | X | ИАФ.5 | ИАФ.5 |  |
| Управление доступом субъектов доступа к объектам доступа (УПД) | X | X | X | X | X | X | УПД.1 | УПД.1 | УПД.1 |
|  | X | X | X | X | X | X | УПД.1(1) |  |  |
|  | X | X | X | X | X | X | УПД.1(2) |  |  |
|  | X | X | X | X | X | X | УПД.1(3б) |  |  |
|  |  |  | X |  | X |  | УПД.1(5) |  |  |
|  | X | X | X | X | X | X | УПД.2 | УПД.2 | УПД.2 |
|  | X | X | X | X | X | X | УПД.2(1) |  |  |
|  | X |  | X |  | X |  | УПД.4 | УПД.4 | УПД.4 |
|  | X | X | X | X | X | X | УПД.5 | УПД.5 | УПД.5 |
|  | X | X | X | X | X | X | УПД.6 | УПД.6 | УПД.6 |
|  | X | X | X | X | X | X | УПД.6(1) |  |  |
|  | X | X | X | X | X | X | УПД.9 | УПД.9 | УПД.9 |
|  | X | X | X | X | X | X | УПД.9(3) |  |  |
|  |  |  | X |  | X |  | УПД.9(4) |  |  |
| Регистрация событий безопасности (РСБ) | X | X | X | X | X | X | РСБ.2(1а) |  |  |
|  | X | X | X | X | X | X | РСБ.3 | РСБ.3 | АУД.4 |
|  | X |  | X |  | X |  | РСБ.3(1) |  |  |
|  | X | X | X | X | X | X | РСБ.6 | РСБ.6 | АУД.3 |
|  | X | X | X | X | X | X | РСБ.7 | РСБ.7 | АУД.6 |
|  | X | X | X | X | X | X | РСБ.8 |  | АУД.9 |
|  | X |  | X |  | X |  | РСБ.8(1) |  |  |
| Обеспечение целостности информационной системы и информации ОЦЛ) | X | X | X | X | X | X | ОЦЛ.1 | ОЦЛ.1 | ОЦЛ.1 |
|  | X | X | X | X | X | X | ОЦЛ.2 | ОЦЛ.2 | ОЦЛ.2 |
|  | X | X | X | X | X | X | ОЦЛ.7 | ОЦЛ.7 | ОЦЛ.4 |
| Обеспечение доступности информации (ОДТ) | X |  | X |  | X |  | ОДТ.4 | ОДТ.4 | ОДТ.4 |
|  | X |  | X |  | X |  | ОДТ.5 | ОДТ.5 | ОДТ.5 |
|  | X | X | X | X | X | X | ОДТ.6 (2) |  | ОДТ.7 |

СУБД «Jatoba» выполняет требования по безопасности информации, установленные приказом ФСТЭК России от 14.04.2023 № 64 «Требования по безопасности информации к системам управления базами данных».

# ОПИСАНИЕ ЗАДАЧИ

Основная задача, решаемая СУБД «Jatoba» в процессе своего функционирования – управление реляционными базами данных, обеспечивающими многопользовательский доступ к данным при необходимых уровнях отказоустойчивости и защищенности в соответствии с нормативными документами, указанными в «Условиях применения» данного документа.

## Классы решаемых задач

Для решения основной задачи функционирования СУБД «Jatoba» задача создания и управления реляционными базами данных разбивается на следующие классы задач:

1)  задачи управления базами данных, решаемые ядром СУБД:

- управление данными во внешней памяти;

- управление данными в оперативной памяти;

- выполнение запросов;

- управление транзакциями;

- журнализация изменений, резервное копирование и восстановление базы данных после сбоев, репликация;

- поддержка языков определения и манипулирования данными;

2)  задачи расширения функциональных возможностей ядра СУБД:

- хранение пространственных, географических и геометрических данных, поддержка запросов к ним и управление ими;

- совместимость с функциями процедурных языков СУБД «Oracle»;

- расширение возможностей секционирования больших таблиц;

3)  задачи защиты данных и обеспечения отказоустойчивости:

- протоколирование, анализ и запрет выполнения команд манипулирования данными (DDL/DML);

- ролевое разграничение доступа

- дискреционное разграничение доступа;

- идентификация и аутентификация;

- очистка памяти;

- регистрация событий;

- контроль целостности;

- управление подключениями к системе управления базами данных;

- обеспечение отказоустойчивости СУБД «Jatoba»;

- управление конфигурациями компонентов СУБД «Jatoba» и просмотр их состояния с использованием единого пользовательского интерфейса;

- передача значимых событий в системы информационно-технологического мониторинга и системы учета событий информационной безопасности.

## Методы решения задач

### Задачи управления базами данных, решаемые ядром СУБД

#### Управление данными во внешней памяти

В СУБД «Jatoba» на уровне ядра реализован программный интерфейс управления данными во внешней памяти. Через данный интерфейс другим компонентам и подсистемам СУБД предоставляется набор функций поблочного чтения и записи из файлов данных, составляющих конкретную базу данных. Внутренние функции интерфейса реализуют управление структурой и расположением файлов баз данных, находящихся под управлением ядра СУБД.

#### Управление данными в оперативной памяти

В СУБД «Jatoba» управление данными в оперативной памяти организуется с помощью встроенных менеджеров памяти нескольких видов. Внутренняя структура памяти представляет собой массивы и хеш-таблицы связанных сегментов, блоков и страниц для высокопроизводительного выполнения процедур обработки данных.

#### Выполнение запросов

В СУБД «Jatoba» реализован конвейер из нескольких исполнительных блоков, отвечающий за выполнение запросов пользователей. Каждый запрос проходит блок разбора и анализа синтаксической корректности SQL-запроса, блок построения дерева планов выполнения запросов, блок оптимизации и нахождения оптимального плана выполнения запроса в дереве и блок непосредственного выполнения выбранного плана, приводящий к результату запроса (внесение, получение или изменение данных).

В СУБД «Jatoba» реализован механизм для создания, оптимизации, экспорта/импорта и подмены планов запросов в БД.

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/describe/media/image1.emf" />
<figcaption><p>Рисунок . – Схема работы экспорт/импорта планов запросов</p></figcaption>
</figure>

Помимо базовых механизмов СУБД для балансировки и оптимизации запросов пользователей к СУБД используется компонент «jaPooler».

Компонент имеет функциональную возможность оптимизировать запросы от пользователя (ей) к серверу при их подключении к серверу СУБД на указанный порт, как представлено на рисунке Рисунок 3.2.

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/describe/media/image2.emf" />
<figcaption><p>Рисунок 3.2 – Балансировка запросов пользователя</p></figcaption>
</figure>

Также компонент обладает функциональной возможностью балансировки подключений множества пользователей к серверам СУБД, как представлено на рисунке Рисунок 3.3.

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/describe/media/image3.emf" />
<figcaption><p>Рисунок 3.3 – Балансировка запросов пользователей к серверам СУБД</p></figcaption>
</figure>

Подключения формируются, как от пользователей, так и от пользовательских приложений.

Для выявления и предотвращение исполнения нетипичных SQL-запросов используется компонент «SQL_Firewall». Компонент предназначен для защиты базы данных от SQL-инъекций или неожиданных запросов.

Компонент SQL_Firewall функционирует в режимах:

- «learning» – режим обучения;

- «enforcing» – режим применения;

- «permissive» – режим разрешающий любые SQL запросы;

- «disabled» – режим отключенного модуля.

#### Управление транзакциями

В СУБД «Jatoba» реализован на уровне ядра механизм управлениями транзакциями. Данный механизм тесно связан с механизмом многоверсионности данных, что позволяет реализовать безблокировочный механизм одновременного изменения данных множеством параллельных транзакций. В результате каждая транзакция пользователя либо успешно завершается и данные надежно фиксируются во внешней памяти, либо отвергается с отбрасыванием сделанных изменений.

#### Журнализация изменений, резервное копирование и восстановление базы данных после сбоев, репликация

В СУБД «Jatoba» реализован ряд механизмов, значительно повышающих надежность ее работы в условиях возникновения аварийной ситуации (физический выход из строя оборудования сервера). Список механизмов включает: журнал транзакций (журнал опережающей записи), который в момент исполнения транзакции фиксирует все сделанные ею изменения в отдельное хранилище внешней памяти; процедуры резервного копирования и восстановления, в том числе с использованием журнала транзакций, чтобы восстановить работу с момента последней зафиксированной транзакции до сбоя; процедуры репликации данных для передачи всех зафиксированных транзакций на резервные сервера с возможностью включения в оперативную работу резервного сервера в случае выхода главного сервера из строя.

#### Поддержка языков определения и манипулирования данными

В СУБД «Jatoba» реализована полная поддержка современных стандартов языка SQL, включая выражения определения (CREATE/DROP/ALTER) необходимых объектов баз данных для хранения и управления данными пользователей и выражения манипулирования данными (SELECT/INSERT/UPDATE/DELETE), отвечающими за преобразования данных пользователя.

### Задачи расширения функциональных возможностей ядра СУБД

#### Хранение пространственных, географических и геометрических данных, поддержка запросов к ним и управление ими

В СУБД «Jatoba» реализован набор расширений, обеспечивающий управление пространственными данными для построения на базу СУБД геоинформационных систем. Набор расширений включает дополнительные типы данных и процедуры обработки данных этих типов.

#### Совместимость с функциями процедурных языков СУБД «Oracle»

В СУБД «Jatoba» реализован набор расширений, обеспечивающий интеграцию СУБД «Jatoba» с СУБД «Oracle». Расширения предоставляют дополнительные функции, повышающие синтаксическую совместимость и упрощающие перенос хранимых процедур, и предоставляют дополнительные методы прозрачного доступа к данными из одной СУБД в другую.

#### Расширение возможностей секционирования больших таблиц

В СУБД «Jatoba» реализована функциональная возможность, позволяющая обычным серверам баз данных (называемым узлами) координировать свои действия друг с другом в архитектуре «ничего общего» («shared nothing»). Узлы образуют кластер, который позволяет СУБД хранить больше данных и использовать больше ядер центрального процессора, чем это было бы возможно на одном компьютере. Эта архитектура также позволяет масштабировать базу данных, просто добавляя дополнительные узлы в кластер. Данное расширение позволяет выполнять распределение таблиц и запросов по рабочим узлам, входящим в кластер.

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/describe/media/image4.png" style="width:6.63472in;height:3.49778in" alt="C:\Users\kuznetsov-a\Downloads\ja_Hipe_Cluster.png" />
<figcaption><p>Рисунок . – Отправка запросов на рабочие узлы</p></figcaption>
</figure>

### Задачи расширения защиты данных и обеспечения отказоустойчивости

#### Протоколирование, анализ и запрет выполнения команд манипулирования данными (DDL/DML)

В СУБД «Jatoba» реализован механизм детального протоколирования запросов пользователей. Реализация данного механизма использует возможности блоков управления запросов для формирования детальной информации о статусе выполнения запроса. Статусная информация включает описание об объекте и субъекте доступа.

#### Ролевое разграничение доступа

В СУБД «Jatoba» реализован механизм ролевого разграничения доступа. Механизм контроля доступа при обращении к объекту доступа в процессе выполнения запроса проверяет необходимые привилегии. В случае отсутствия достаточных привилегий доступ к объекту запрещается, выполнение запроса пользователя прекращается по ошибке.

Дополнительно в пользовательском веб-интерфейсе для администраторов компонента «Jatoba data safe» реализована двухкомпонентная ролевая модель.

Первым компонентом выступает предопределенная ролевая модель JDS, в которую включена доступность разделов.

Вторым компонентом ролевой модели является набор групповых ролей в целевой СУБД, которым предоставлены необходимые права и привилегии при инициализации компонент и расширений СУБД.

Механизм разграничения доступа реализован таким образом при котором пользователю JDS присваивается предустановленная роль в компоненте, определяющая доступность разделов и в соответствии с данной ролью, пользователь ассоциируется с учетной записью в целевой СУБД.

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/describe/media/image5.emf" />
<figcaption><p>Рисунок 3.5 – Двухкомпонентная ролевая модель</p></figcaption>
</figure>

#### Дискреционное разграничение доступа

В СУБД «Jatoba» реализован дискреционный механизм разграничения доступа. Механизм контроля доступа при обращении к объекту доступа в процессе выполнения запроса проверяет необходимые привилегии на вложенные объекты уровня БД. В случае отсутствия достаточных привилегий доступ к объекту запрещается, выполнение запроса пользователя прекращается по ошибке.

#### Идентификация и аутентификация

В СУБД «Jatoba» каждое подключение пользователя предварительно проходит процедуру аутентификации. Аутентификация включает проверку данных сетевого подключения, имени базы данных, имени пользователя и согласования метода аутентификации. Если запрошенные данные подтверждаются, то проводится процедура установления идентичности пользователя в соответствии с заданным методом аутентификации. Основным методом аутентификации пользователей является метод «Password».

Поддерживается функциональная возможность применения методов аутентификации:

- GSSAPI;

- LDAP(LDAPS);

- PAM;

- RADIUS;

- SSL;

- SSPI.

#### Очистка памяти

В СУБД «Jatoba» поддерживаются внутренние процедуры очистки блоков памяти, в которых располагаются данные пользователя в процессе его работы с некоторой базой данных. В случае фиксации этих данных ядром СУБД и отсутствия текущего использования этих данных другими запросами пользователей, данные принудительно удаляются во избежание утечек конфиденциальной информации. При завершении сессии пользователя вся память, где хранились данные пользователя, также принудительно отчищается.

#### Регистрация событий

В ядро СУБД «Jatoba» встроен механизм регистрации различных событий, связанных как с работой самого ядра СУБД, так и с выполнение запросов пользователей на доступ и изменение данных. Реализовано несколько уровней детализации событий, которые администратор может выбрать и настроить на основании имеющихся требований, предъявляемых к СУБД.

Помимо встроенного механизма СУБД, применение компонента «Jatoba data safe» пользовательского веб-интерфейс для администраторов и в совокупности с компонентом централизованного сбора записей событий в СУБД «ja_Log» позволяют обеспечить централизованный сбор, хранение, обработку и просмотр событий безопасности с СУБД.

#### Контроль целостности

СУБД «Jatoba» на уровне ядра поддерживает несколько механизмов обеспечения целостности данных.

Первый встроенный механизм СУБД позволяет проводить проверки корректности данных, которые пользователь вносит в базу данных. Реализована программная возможность включения этих проверок для отдельных полей таблиц по выбору пользователя. Также реализована система ограничений, накладываемая на данные, помещаемые в таблицы. Данные ограничения позволяют обеспечивать ссылочную целостность данных в разных таблицах.

Вторым механизмом контроля целостности является компонент «ja_CSum» предназначенный для выполнения периодических фоновых проверок фалов, расположенных в ключевых директориях СУБД, а также:

- конфигурации системы управления базами данных;

- конфигураций баз данных;

- процедур (программного кода) системы управления базами данных;

- процедур (программного кода), хранимых в базах данных.

#### Механизм управления подключениями к системе управления базами данных

Защита подключений реализуется сторонними по отношению к ядру СУБД средствами, что подтверждается соответствующими описанными требованиями к среде функционирования.

#### Обеспечение отказоустойчивости СУБД «Jatoba»

Отказоустойчивость в СУБД «Jatoba» реализуется средствами репликации данных. Экземпляр СУБД может выступать в роли ведущего или ведомого сервера. Роль сервера определяется соответствующими конфигурационными параметрами, заданными администратором СУБД. Ведомый сервер всегда зависит от ведущего и получает от него все изменения данных, которые накапливаются в журнале транзакций. В случае выхода из строя ведущего сервера, ведомый сервер может автоматически или по команде администратора принять на себя роль ведущего. После восстановления функционирования сервера ему снова может быть возвращена роль ведущего.

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/describe/media/image6.emf" />
<figcaption><p>Рисунок 3.6 – Физическая структура узлов кластера</p></figcaption>
</figure>

Базовые функциональные возможности кластера расширены до полнофункционального инженерного решения катастрофоустойчивого и геораспределенного кластера.

Дополнительно отказоустойчивость СУБД «Jatoba» реализуется применением полного или инкрементального резервного копирования.

Полные резервные копии содержат все файлы данных, необходимые для восстановления сервера баз данных с нулевой точки;

Инкрементальные копии создаются на уровне страниц данных и включают только ту информацию, которая изменилась со времени последнего резервного копирования.

![](../docs/assets/images/cert6.8.4,5.12.4,4.17.4/describe/media/image7.emf)Рисунок 3.7 – Реализуемые способы резервного копирования

#### Ограничение программной среды

СУБД на уровне ядра и используя компонент «ja_CSum» выявляет и блокирует загрузку в адресное пространство СУБД:

- ПО не включенного в перечень разрешенного;

- ПО целостность которого нарушена.

#### Управление компонентами СУБД «Jatoba» и просмотр их состояния с использованием единого пользовательского интерфейса

Для обслуживания и управления СУБД «Jatoba» используется единый пользовательский интерфейс в виде командной строки (CLI).

Дополнительно реализован пользовательский веб-интерфейс для администраторов в компоненте «Jatoba data safe», содержащий следующие разделы:

- Разделы «Анализ рисков» (UserRisk) и «Матрица доступа» (Access matrix) используются для контроля имеющихся привилегий в СУБД и привилегий на вложенные объекты уровня БД.

- Раздел «Список кластеров» (Cluster list) позволяет управлять преднастроенным кластером серверов СУБД. Раздел представляет собой графическое отображение управления компонентом «Jadog».

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/describe/media/image8.emf" />
<figcaption><p>Рисунок . – Схема работы компонента при клиент-серверном варианте</p></figcaption>
</figure>

- Раздел «Список событий» (Event List) предназначен для просмотра событий безопасности в выбранной инсталляции (Target).

Для функционирования раздела требуется, чтобы на целевой СУБД был установлен компонент «ja_Log», обеспечивающий передачу событий безопасности в служебную СУБД. Компонент «pgAudit» при этом обеспечивает расширенную регистрацию событий безопасности.

- Подраздел «Снимки и отчеты» (Snapshots & Reports) предназначен для создания снимков состояния БД (Snapshots) и получения отчетов. Формирование статической информации выполняется компонентом «pg_Profile».

- Подраздел «Проблемы и решения» (Problems & Solutions) представляет собой интеллектуальный инструмент, который позволяет определять ряд проблем, существующих в целевой СУБД.

- Раздел «LDAP синхронизация» (LDAP Sync) предназначен для графического отображения операций по синхронизации учетных записей со службой каталогов и учетных записей целевой СУБД. Для выполнения синхронизации требуется, чтобы расширение было установлено на целевой СУБД.

- Раздел «Уведомления» предназначен для оповещения администраторов о событиях целевой СУБД и компонента «JDS» по классам событий, кодам событий, ключевым фразам и словам.

- Раздел «Роли БД» предназначен для:

<!-- -->

- создания ролей;

- редактирования ролей;

- назначения атрибутов и привилегий ролей.

Сопоставление разделов JDS и, обеспечивающих их функционирование, компонентов целевой СУБД представлено на рисунке Рисунок 3.9.

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/describe/media/image9.emf" />
<figcaption><p>Рисунок 3.9 – Разделы JDS и компоненты СУБД, требуемые для работы разделов JDS</p></figcaption>
</figure>

#### Передача событий безопасности в системы информационно-технологического мониторинга и системы учета событий информационной безопасности

В СУБД «Jatoba» через систему регистрации событий административными мерами реализуется передача событий в сторонние системы информационно-технологического мониторинга и учета событий безопасности. Данная функция включается соответствующими конфигурационными параметрами администратором СУБД на основании соответствующих требований безопасности.

# ВХОДНЫЕ И ВЫХОДНЫЕ ДАННЫЕ

## Входные данные

Входными данными являются:

1)  загружаемые табличные стройки;

2)  атрибуты ролей, определяющие их полномочия и взаимодействие с системой аутентификации клиентов;

3)  привилегии ролей, определяющие ролевые правила разграничения доступа к объектам баз данных;

4)  настройка обращений ролей пользователей к защищенным данным;

5)  политики защиты строк, определяющие правила доступа к строкам таблиц.

## Выходные данные

Выходными данными является результат использования субъектом доступа защищаемых объектов, предоставленных ему в соответствии с установленными правилами разграничение доступа.

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

|  |  |  |
|:---|:--:|----|
| DDL | – | Data Definition Language, язык описания данных |
| DML | – | Data Manipulation Language, язык манипулирования данными |
| SQL | – | Structured Query Language, язык структурированных запросов |
| БД | – | База данных |
| ГИС | – | Государственные информационные системы |
| Дист. | – | Дистрибутив |
| ИСПДн | – | Информационная система персональных данных |
| КВО | – | Критически важный объект |
| КИИ | – | Критическая информационная инфраструктура |
| Обр.к | – | Образ контейнера |
| ОС | – | Операционная система |
| СУБД | – | Система управления базами данных |
| ФСТЭК России | – | Федеральная служба по техническому и экспортному контролю России |
| ЭВМ | – | Электронно-вычислительная машина |

# ЛИСТ РЕГИСТРАЦИИ ИЗМЕНЕНИЙ

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 11%" />
<col style="width: 17%" />
<col style="width: 10%" />
<col style="width: 9%" />
</colgroup>
<tbody>
<tr>
<td rowspan="2" style="text-align: center;"><strong>Изм</strong></td>
<td colspan="4" style="text-align: center;"><strong>Номера листов (страниц)</strong></td>
<td rowspan="2" style="text-align: center;"><strong>Всего листов (страниц) в докум.</strong></td>
<td rowspan="2" style="text-align: center;"><strong>№ докум.</strong></td>
<td rowspan="2" style="text-align: center;"><p><strong>Входящий №</strong></p>
<p><strong>сопроводитель</strong></p>
<p><strong>ного докум. и дата</strong></p></td>
<td rowspan="2" style="text-align: center;"><strong>Подпись</strong></td>
<td rowspan="2" style="text-align: center;"><strong>Дата</strong></td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>изменен</strong></p>
<p><strong>ных</strong></p></td>
<td style="text-align: center;"><p><strong>заменен</strong></p>
<p><strong>ных</strong></p></td>
<td style="text-align: center;"><strong>новых</strong></td>
<td style="text-align: center;"><p><strong>аннули</strong></p>
<p><strong>рован</strong></p>
<p><strong>ных</strong></p></td>
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
