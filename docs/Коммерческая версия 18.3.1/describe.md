<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 91%" />
</colgroup>
<thead>
<tr>
<th colspan="3"><blockquote>
<p>УТВЕРЖДЕНО</p>
<p>643.72410666.00067-075 31 01-ЛУ</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td><blockquote>
<p><strong>ЗАЩИЩЕННАЯ СИСТЕМА УПРАВЛЕНИЯ БАЗАМИ ДАННЫХ «JATOBA»</strong></p>
<p><strong>Описание применения</strong></p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td></td>
<td><blockquote>
<p><strong>643.72410666.00067-076 31 01</strong></p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>Листов 87</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Подп. и</p>
</blockquote></td>
<td></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Инв. №</p>
</blockquote></td>
<td></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Взам. инв.</p>
</blockquote></td>
<td></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Подп. и</p>
</blockquote></td>
<td></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Инв. № подл.</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>2026</p>
<p>Литера О1</p>
</blockquote></td>
</tr>
</tbody>
</table>

# АННОТАЦИЯ

> В документе приведены сведения о защищенной системе управления базами данных «Jatoba» (далее − СУБД «Jatoba»). Настоящий документ содержит описание назначения СУБД «Jatoba», описание функциональных возможностей, условий применения и решаемых СУБД «Jatoba» задач.
>
> В Приложении 1 приведены основные характеристики СУБД.

<table>
<colgroup>
<col style="width: 32%" />
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
<p>Дата внесения изм.:</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# СОДЕРЖАНИЕ

# 

1.  [НАЗНАЧЕНИЕ ПРОГРАММЫ 6](#_bookmark0)

2.  [Состав СУБД 7](#состав-субд)

3.  [Решаемые задачи 12](#решаемые-задачи)

    1.  [Инсталлятор 14](#инсталлятор)

        1.  [Установка СУБД с рекомендуемой, генерируемой конфигурацией,](#установка-субд-с-рекомендуемой-генерируемой-конфигурацией-компонентом-ja_tune) [компонентом «ja_tune» 16](#установка-субд-с-рекомендуемой-генерируемой-конфигурацией-компонентом-ja_tune)

    2.  [Балансировка нагрузки 17](#балансировка-нагрузки)

    3.  [Кластеризация 17](#кластеризация)

        1.  [Инженерные решения построения кластера 18](#инженерные-решения-построения-кластера)

        2.  [Отказоустойчивый кластер в Kubernetes 20](#отказоустойчивый-кластер-в-kubernetes)

        3.  [Управление кластером jaDog в JDS 21](#управление-кластером-jadog-в-jds)

    4.  [Секционирование больших таблиц. ja_Hipe_Cluster 22](#секционирование-больших-таблиц.-ja_hipe_cluster)

    5.  [Мониторинг и управление СУБД 23](#мониторинг-и-управление-субд)

        1.  [Раздел «Мониторинг» 24](#раздел-мониторинг)

        2.  [Раздел «Ландшафт» (Landscape) 25](#раздел-ландшафт-landscape)

        3.  [Раздел «Параметры СУБД» 25](#_bookmark19)

        4.  [Раздел «Правила доступа» 26](#раздел-правила-доступа)

        5.  [Раздел «Расширения» 26](#раздел-расширения)

        6.  [Раздел «Анализ рисков» (User Risk) 27](#раздел-анализ-рисков-user-risk)

        7.  [Раздел «Матрица доступа» (Access matrix) 27](#_bookmark23)

        8.  [Раздел «Список событий» (Event List) 27](#раздел-список-событий-event-list)

        9.  [Раздел «Кластеры» 28](#раздел-кластеры)

        10. [Раздел «Снимки и отчеты» (Snapshots & Reports) 28](#раздел-снимки-и-отчеты-snapshots-reports)

        11. [Раздел «Проблемы и решения» (Problems & Solutions) 29](#раздел-проблемы-и-решения-problems-solutions)

        12. [Раздел «Анализ запросов» (Query analysis) 29](#_bookmark28)

        13. [Раздел «Активность БД» 31](#раздел-активность-бд)

        14. [Подраздел «Подключения JDS» 32](#подраздел-подключения-jds)

        15. [Раздел «LDAP синхронизация» 33](#раздел-ldap-синхронизация)

        16. [Раздел «Роли СУБД» (DB roles) 35](#раздел-роли-субд-db-roles)

        17. [Раздел «Уведомления» (Notifications) 37](#раздел-уведомления-notifications)

        18. [Раздел «Парольные политики» (Password policies) 39](#раздел-парольные-политики-password-policies)

        19. [Раздел «Резервное копирование» (BACKUP) 40](#_bookmark36)

    6.  [Резервное копирование 40](#резервное-копирование)

        1.  [Компонент «pg_ProBackup» 40](#компонент-pg_probackup)

        2.  [Компонент «wal-g» 41](#компонент-wal-g)

    7.  [Маскирование данных. Компонент «ja_Anonymizer» 42](#маскирование-данных.-компонент-ja_anonymizer)

    8.  [Поддержки платформы Oracle 43](#поддержки-платформы-oracle)

    9.  [Поддержка платформы MS SQL 43](#поддержка-платформы-ms-sql)

    10. [Совместимость платформой с 1C 44](#совместимость-платформой-с-1c)

        1.  [Компонент совместимости 1С fasttrun 44](#компонент-совместимости-1с-fasttrun)

        2.  [Компонент совместимости 1С fulleq 45](#компонент-совместимости-1с-fulleq)

        3.  [Компонент совместимости 1С mchar 45](#компонент-совместимости-1с-mchar)

        4.  [Компонент совместимости 1С online_analyze 45](#компонент-совместимости-1с-online_analyze)

        5.  [Компонент совместимости 1С plantuner 46](#компонент-совместимости-1с-plantuner)

    11. [Управление планами запросов 46](#управление-планами-запросов)

        1.  [Компонент ja_Plan_Manager. Управление планами запросов 46](#компонент-ja_plan_manager.-управление-планами-запросов)

        2.  [Компонент pg_hint_plan. Корректировка запросов 48](#компонент-pg_hint_plan.-корректировка-запросов)

        3.  [Компонент pg_store_plans. Контроль выполненных планов запросов 48](#компонент-pg_store_plans.-контроль-выполненных-планов-запросов)

    12. [Выявления и предотвращение исполнения нетипичных SQL-запросов 49](#выявления-и-предотвращение-исполнения-нетипичных-sql-запросов)

    13. [Регистрация событий безопасности 50](#регистрация-событий-безопасности)

        1.  [Расширенная регистрация событий СУБД 50](#расширенная-регистрация-событий-субд)

        2.  [Компонент «ja_seceventlog» 51](#компонент-ja_seceventlog)

        3.  [Централизованный сбор событий СУБД 52](#централизованный-сбор-событий-субд)

        4.  [Формирование отчетов по журналам СУБД 52](#_bookmark61)

    14. [Пароли и парольные политики 53](#пароли-и-парольные-политики)

        1.  [Генератор паролей «pwgen» 53](#генератор-паролей-pwgen)

        2.  [Маскирование паролей «ja_pwmasking» 54](#маскирование-паролей-ja_pwmasking)

    15. [Поддержка работы СУБД с геоданными 54](#поддержка-работы-субд-с-геоданными)

    16. [Контроль целостности 54](#контроль-целостности)

    17. [Обфускации кода 56](#обфускации-кода)

    18. [Формирование HTTP/HTTPS запросов из СУБД 57](#формирование-httphttps-запросов-из-субд)

    19. [Компрессия данных. Компонент «ja_Сompression» 58](#_bookmark71)

    20. [Полнотекстовый поиск и определение похожих текстов 59](#полнотекстовый-поиск-и-определение-похожих-текстов)

        1.  [Проверка орфографии и морфологический анализ. Компонент](#проверка-орфографии-и-морфологический-анализ.-компонент)

[«hunspell» 60](#проверка-орфографии-и-морфологический-анализ.-компонент)

21. [Поиск ближайших соседей (KNN для B-TREE) 60](#поиск-ближайших-соседей-knn-для-b-tree)

22. [64-битный счетчик транзакций. Компонент XID64 61](#битный-счетчик-транзакций.-компонент-xid64)

23. [Инвентаризация СУБД. Компонент «ja_Inventory» 62](#инвентаризация-субд.-компонент-ja_inventory)

24. [Разрешение (запрет) действий пользователей, разрешенных до](#_bookmark77) [идентификации и аутентификации 63](#_bookmark77)

[Приложение 1 64](#приложение-1)

1)  [Реализуемые функции СУБД 64](#реализуемые-функции-субд)

2)  [Основные функциональные возможности управления базами данных 65](#основные-функциональные-возможности-управления-базами-данных)

3)  [Поддерживаемые типы данных 77](#поддерживаемые-типы-данных)

4)  [Поддерживаемые типы индексов 78](#поддерживаемые-типы-индексов)

5)  [Поддерживаемые методы стандартизации и унификации 79](#поддерживаемые-методы-стандартизации-и-унификации)

6)  [Расширенные функциональные возможности управления базами данных](#расширенные-функциональные-возможности-управления-базами-данных) [80](#расширенные-функциональные-возможности-управления-базами-данных)

7)  [Механизм защиты подключений к системе управления базами данных 80](#механизм-защиты-подключений-к-системе-управления-базами-данных)

8)  [Среда функционирования СУБД 81](#среда-функционирования-субд)

9)  [Производительность СУБД 84](#_bookmark90)

[ПЕРЕЧЕНЬ СОКРАЩЕНИЙ 86](#_bookmark92)

[ЛИСТ РЕГИСТРАЦИИ ИЗМЕНЕНИЙ 87](#лист-регистрации-изменений)

# НАЗНАЧЕНИЕ ПРОГРАММЫ

> СУБД «Jatoba» базируется на свободном программном обеспечении СУБД
>
> «PostgreSQL».
>
> Поддерживает все стандартные функции «PostgreSQL», описание которых доступно на официальном сайте.
>
> СУБД «Jatoba» предназначена для управления базами данных (далее – БД) в:

- значимых объектах критической информационной инфраструктуры 1 категории;

- государственных информационных системах 1 класса защищенности;

- автоматизированных системах управления производственными и технологическими процессами 1 класса защищенности;

- информационных системах персональных данных при необходимости обеспечения 1 уровня защищенности персональных данных;

- информационных системах общего пользования II класса на базе электронно-вычислительных машин (далее – ЭВМ);

- коммерческих информационных системах,

> под управлением операционных систем (далее – ОС), приведенных в таблице
>
> [1.2](#_bookmark88).

# СОСТАВ СУБД

> СУБД «Jatoba» реализована в виде дистрибутива с:

- версией ядра «4» (далее по тексту «J4») на основе СУБД «PostgreSQL» 14;

- версией ядра «5» (далее по тексту «J5») на основе СУБД «PostgreSQL» 15;

- версией ядра «6» (далее по тексту «J6») на основе СУБД «PostgreSQL» 16;

- версией ядра «18» (далее по тексту «J18») на основе СУБД «PostgreSQL» 18.

> и образа контейнера. Перечень компонент, входящих в образ контейнера, приведен в Инструкции по настройке и использованию контейнера (таблица 2.2 – Состав образа контейнера).
>
> Компиляция СУБД выполняется с поддержкой SSL (Secure Socket Layer). Используется библиотека OpenSSL, пакет openssl-dev, который содержит заголовочные файлы и библиотеки для компиляции с OpenSSL.
>
> В параметрах компиляции устанавливается флаг «-lssl» который подключает библиотеку OpenSSL.
>
> В состав СУБД «Jatoba» входят компоненты, указанные в таблице [2.1](#_bookmark2).
>
> <span id="_bookmark2" class="anchor"></span>Таблица 2.1 – Состав компонент

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
<th colspan="2" rowspan="2"><blockquote>
<p><strong>Полное название компонента</strong></p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p><strong>Наименование англоязычное</strong></p>
</blockquote></th>
<th colspan="4"><blockquote>
<p><strong>Версия компонента</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>J4</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J5</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J6</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J18</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2"><blockquote>
<p>Базовый инсталляционный пакет</p>
</blockquote></td>
<td><blockquote>
<p>Jatoba</p>
</blockquote></td>
<td><blockquote>
<p>4.22.1-</p>
<p>53897</p>
</blockquote></td>
<td><blockquote>
<p>5.17.1-</p>
<p>55711</p>
</blockquote></td>
<td><blockquote>
<p>6.13.1-</p>
<p>57857</p>
</blockquote></td>
<td><blockquote>
<p>18.3.1-</p>
<p>62238</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Генератор паролей. pwgen</p>
</blockquote></td>
<td><blockquote>
<p>pwgen</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Маскирование паролей</p>
</blockquote></td>
<td><blockquote>
<p>ja_pwmasking</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Поиск ближайших соседей. KNN</p>
</blockquote></td>
<td><blockquote>
<p>KNN</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Компонент xid64</p>
</blockquote></td>
<td><blockquote>
<p>xid64</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Сжатие данных на уровне страниц. Компонент</p>
<p>"ja_Compression"</p>
</blockquote></td>
<td><blockquote>
<p>ja_Compression</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>1.0</p>
</blockquote></td>
<td><blockquote>
<p>1.0</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Восстановление поврежденных</p>
<p>WAL записей. WAL Recovery</p>
</blockquote></td>
<td><blockquote>
<p>WAL Recovery</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Автоматическое создание директорий табличных</p>
<p>пространств</p>
</blockquote></td>
<td><blockquote>
<p>ja_TableSpace</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Генератор конфигурационного</p>
<p>файла</p>
</blockquote></td>
<td><blockquote>
<p>ja_tune</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.0</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.3.0</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Механизм автономных</p>
<p>транзакций</p>
</blockquote></td>
<td><blockquote>
<p>ja_ATX</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>DataWiping: очистка файлов</p>
<p>данных объектов доступа</p>
</blockquote></td>
<td><blockquote>
<p>ja_WIpe_Files</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
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
<th rowspan="2"><blockquote>
<p><strong>Полное название компонента</strong></p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p><strong>Наименование англоязычное</strong></p>
</blockquote></th>
<th colspan="4"><blockquote>
<p><strong>Версия компонента</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>J4</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J5</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J6</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J18</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Управление режимом работы узлов кластера.</p>
<p>Компонент «jaDog»</p>
</blockquote></td>
<td><blockquote>
<p>jaDog</p>
</blockquote></td>
<td><blockquote>
<p>4.2.0-</p>
<p>5432</p>
</blockquote></td>
<td><blockquote>
<p>4.2.0-</p>
<p>5432</p>
</blockquote></td>
<td><blockquote>
<p>4.2.0-</p>
<p>5432</p>
</blockquote></td>
<td><blockquote>
<p>4.2.0-</p>
<p>5432</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Контроль субъектов доступа. Компонент «Jatoba data vault»</p>
</blockquote></td>
<td><blockquote>
<p>Jatoba data vault</p>
</blockquote></td>
<td><blockquote>
<p>1.4.1-</p>
<p>142</p>
</blockquote></td>
<td><blockquote>
<p>1.7.0-</p>
<p>159</p>
</blockquote></td>
<td><blockquote>
<p>1.7.0-</p>
<p>159</p>
</blockquote></td>
<td><blockquote>
<p>1.7.0-</p>
<p>159</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Формирование отчетов по журналам СУБД. Компонент «pgBadger»</p>
</blockquote></td>
<td><blockquote>
<p>pgBadger</p>
</blockquote></td>
<td><blockquote>
<p>13.1.0-</p>
<p>1491</p>
</blockquote></td>
<td><blockquote>
<p>13.1.0-</p>
<p>1491</p>
</blockquote></td>
<td><blockquote>
<p>13.1.0-</p>
<p>1491</p>
</blockquote></td>
<td><blockquote>
<p>13.1.0-</p>
<p>1491</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Расширенное резервное копирование. Компонент «pg_ProBackup»</p>
</blockquote></td>
<td><blockquote>
<p>pg_ProBackup</p>
</blockquote></td>
<td><blockquote>
<p>2.5.12-</p>
<p>3653</p>
</blockquote></td>
<td><blockquote>
<p>2.5.15-</p>
<p>3736</p>
</blockquote></td>
<td><blockquote>
<p>2.5.15-</p>
<p>3736</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Планирование заданий СУБД. Компонент «pg_Task»</p>
</blockquote></td>
<td><blockquote>
<p>pg_Task</p>
</blockquote></td>
<td><blockquote>
<p>2.0.39-</p>
<p>2617</p>
</blockquote></td>
<td><blockquote>
<p>2.0.39-</p>
<p>2617</p>
</blockquote></td>
<td><blockquote>
<p>2.0.39-</p>
<p>2617</p>
</blockquote></td>
<td><blockquote>
<p>2.0.39-</p>
<p>2966</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Формирование отчетов производительности СУБД. Компонент</p>
<p>«pg_Profile»</p>
</blockquote></td>
<td><blockquote>
<p>pg_Profile</p>
</blockquote></td>
<td><blockquote>
<p>4.6.0-</p>
<p>141</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4.10.0-</p>
<p>190</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4.10.0-</p>
<p>190</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4.10.0-</p>
<p>190</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Пользовательский веб-интерфейс для администраторов.</p>
<p>Компонент «Jatoba data safe»</p>
</blockquote></td>
<td><blockquote>
<p>Jatoba data safe</p>
</blockquote></td>
<td><blockquote>
<p>2.11.0</p>
</blockquote></td>
<td><blockquote>
<p>2.11.0</p>
</blockquote></td>
<td><blockquote>
<p>2.11.0</p>
</blockquote></td>
<td><blockquote>
<p>2.11.0</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="5"><blockquote>
<p>Компонент мониторинга запросов СУБД</p>
</blockquote></td>
<td><blockquote>
<p>pg-explain</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.2</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg-explain-db</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.0</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.0</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.0</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg-monitor</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.5</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg-monitor-collector</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.5</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg-monitor-dispatcher</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.5</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Синхронизация учетных записей с MS Active Directory / LDAP.</p>
<p>Компонент «ja_Sync_LDAP»</p>
</blockquote></td>
<td><blockquote>
<p>ja_Sync_LDAP</p>
</blockquote></td>
<td><blockquote>
<p>1.3.2-</p>
<p>176</p>
</blockquote></td>
<td><blockquote>
<p>1.3.2-</p>
<p>176</p>
</blockquote></td>
<td><blockquote>
<p>1.3.2-</p>
<p>176</p>
</blockquote></td>
<td><blockquote>
<p>1.3.2-</p>
<p>176</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Обфускация кода PL/spgSQL. Компонент «PLspgSQL»</p>
</blockquote></td>
<td><blockquote>
<p>PLspgSQL</p>
</blockquote></td>
<td><blockquote>
<p>2.0.1-</p>
<p>300</p>
</blockquote></td>
<td><blockquote>
<p>2.0.1-</p>
<p>311</p>
</blockquote></td>
<td><blockquote>
<p>2.0.1-</p>
<p>311</p>
</blockquote></td>
<td><blockquote>
<p>2.0.1-</p>
<p>311</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Высокопроизводительный кластер. Компонент «ja_Hipe_Cluster»</p>
</blockquote></td>
<td><blockquote>
<p>ja_Hipe_Cluster</p>
</blockquote></td>
<td><blockquote>
<p>12.1.1-</p>
<p>6955</p>
</blockquote></td>
<td><blockquote>
<p>12.1.1-</p>
<p>6951</p>
</blockquote></td>
<td><blockquote>
<p>12.1.1-</p>
<p>6951</p>
</blockquote></td>
<td><blockquote>
<p>14.0.0-</p>
<p>7236</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Централизованный сбор записей событий СУБД.</p>
<p>Компонент «ja_Log»</p>
</blockquote></td>
<td><blockquote>
<p>ja_Log</p>
</blockquote></td>
<td><blockquote>
<p>3.0.0-</p>
<p>499</p>
</blockquote></td>
<td><blockquote>
<p>3.0.0-</p>
<p>499</p>
</blockquote></td>
<td><blockquote>
<p>3.0.0-</p>
<p>499</p>
</blockquote></td>
<td><blockquote>
<p>3.0.0-</p>
<p>499</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка платформы 1С</p>
</blockquote></td>
<td><blockquote>
<p>1C_support</p>
</blockquote></td>
<td><blockquote>
<p>4.22.1-</p>
<p>53897</p>
</blockquote></td>
<td><blockquote>
<p>5.17.1-</p>
<p>55711</p>
</blockquote></td>
<td><blockquote>
<p>6.13.1-</p>
<p>57857</p>
</blockquote></td>
<td><blockquote>
<p>18.3.1-</p>
<p>62238</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент совместимости с 1С.</p>
<p>«fasttrun»</p>
</blockquote></td>
<td><blockquote>
<p>fasttrun</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.15-</p>
<p>19</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.0-23</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.0-23</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.0-23</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент совместимости с 1С.</p>
<p>«fulleq»</p>
</blockquote></td>
<td><blockquote>
<p>fulleq</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.0-21</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.0-21</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.0-21</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.0-21</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент совместимости с 1С.</p>
<p>«mchar»</p>
</blockquote></td>
<td><blockquote>
<p>mchar</p>
</blockquote></td>
<td><blockquote>
<p>2.2.1-</p>
<p>153</p>
</blockquote></td>
<td><blockquote>
<p>2.2.1-</p>
<p>160</p>
</blockquote></td>
<td><blockquote>
<p>2.2.1-</p>
<p>160</p>
</blockquote></td>
<td><blockquote>
<p>2.2.1-</p>
<p>160</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент совместимости с 1С.</p>
<p>«online_analyze»</p>
</blockquote></td>
<td><blockquote>
<p>online_analyze</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.0-25</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.0-29</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.0-29</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.0-29</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент совместимости с 1С.</p>
<p>«plantuner»</p>
</blockquote></td>
<td><blockquote>
<p>plantuner</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.0-13</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.0-16</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.0-16</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.0-16</p>
</blockquote></td>
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
<th rowspan="2"><blockquote>
<p><strong>Полное название компонента</strong></p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p><strong>Наименование англоязычное</strong></p>
</blockquote></th>
<th colspan="4" style="text-align: center;"><blockquote>
<p><strong>Версия компонента</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>J4</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J5</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J6</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J18</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Контроль целостности. Компонент «ja_CSum»</p>
</blockquote></td>
<td><blockquote>
<p>ja_CSum</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.19-</p>
<p>53</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.1.4-72</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.1.4-72</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.1.4-72</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Балансировка подключений пользователей к СУБД.</p>
<p>Компонент «jaPooler»</p>
</blockquote></td>
<td><blockquote>
<p>jaPooler</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.1.1-</p>
<p>317</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.1.0-</p>
<p>317</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.1.1 -</p>
<p>317</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.1.1 -</p>
<p>317</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="3"><blockquote>
<p>Обеспечение работы с СУБД Oracle</p>
</blockquote></td>
<td><blockquote>
<p>Oracle_FDW</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.0-</p>
<p>640</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.0-</p>
<p>640</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.0-</p>
<p>640</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.8.1-</p>
<p>796</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>OraFCE</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3.22.0-</p>
<p>588</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4.3.0-</p>
<p>684</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4.3.0-</p>
<p>684</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4.16-871</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg_Variables</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.0-</p>
<p>201</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.5-</p>
<p>201</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.5-</p>
<p>201</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.5 -</p>
<p>202</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Выявление и предотвращение исполнения нетипичных SQL-запросов. Компонент «SQL_Firewall»</p>
</blockquote></td>
<td><blockquote>
<p>SQL_Firewall</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0.8.1-38</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.1.0-69</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.1.0-69</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.1.0-69</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Библиотека для взаимодействия с моделями машинного обучения. Компонент «ONNX Runtime»<a href="#_bookmark3"><sup>1</sup></a></p>
</blockquote></td>
<td><blockquote>
<p>onnxruntime</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.18.0-</p>
<p>10990</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.18.0-</p>
<p>10990</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.18.0-</p>
<p>10990</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Сокрытие информации в файлах данных СУБД.</p>
<p>Компонент «Jatoba crypto access</p>
<p>storage»</p>
</blockquote></td>
<td><blockquote>
<p>Jatoba crypto access storage</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.0-82</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3.0.0-96</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3.0.0-96</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3.0.0-96</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Формирование HTTP/HTTPS запросов из СУБД.</p>
<p>Компонент «pgSQL-HTTP»</p>
</blockquote></td>
<td><blockquote>
<p>pgSQL-HTTP</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.5.0-</p>
<p>324</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.7.0-</p>
<p>394</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.7.0-</p>
<p>394</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.7.0-</p>
<p>394</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Обеспечение работы с СУБД MS SQL Server. Компонент «TDS_FDW»</p>
</blockquote></td>
<td><blockquote>
<p>TDS_FDW</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.5-</p>
<p>325</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.5-</p>
<p>325</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.0.5-</p>
<p>325</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Pасширенное журналирование событий СУБД.</p>
<p>Компонент «pgAudit»</p>
</blockquote></td>
<td><blockquote>
<p>pgAudit</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.6.2-91</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.7.0-91</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>16.0.0-</p>
<p>102</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>18.0.0-</p>
<p>134</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент «pgauditlogtofile»</p>
</blockquote></td>
<td><blockquote>
<p>pgauditlogtofile</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.7.5-90</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.7.5-90</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.7.5-90</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Работа с географическими данными. Компонент «PostGIS»</p>
</blockquote></td>
<td><blockquote>
<p>PostGIS</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3.2.1-</p>
<p>14372</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3.6.0-</p>
<p>18717</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3.6.0-</p>
<p>18717</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3.6.0-</p>
<p>18716</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Расширенное резервное копирование. Компонент «PTrack»</p>
</blockquote></td>
<td><blockquote>
<p>PTrack</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.3.0-91</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.4.4-</p>
<p>121</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.4.4-</p>
<p>121</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Управление парольными политиками пользователей СУБД.</p>
<p>Компонент «SecurityProfile»</p>
</blockquote></td>
<td><blockquote>
<p>SecurityProfile</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.3.0-</p>
<p>285</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.5.0-</p>
<p>303</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.5.0-</p>
<p>303</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2.5.0-</p>
<p>303</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Управление планами запросов. Компонент «ja_Plan_Manager»</p>
</blockquote></td>
<td><blockquote>
<p>ja_Plan_Manager</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.0-</p>
<p>438</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.0-</p>
<p>439</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.0-</p>
<p>438</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.2.0-</p>
<p>4309</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Контроль выполненных планов запросов Компонент «pg_store_plans»</p>
</blockquote></td>
<td><blockquote>
<p>pg_store_plans</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.8.0-</p>
<p>113</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.8.0-</p>
<p>113</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.9.1-</p>
<p>116</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <span id="_bookmark3" class="anchor"></span><sup>1</sup> Ограничения по эксплуатации приведены в п.п. [3.12](#выявления-и-предотвращение-исполнения-нетипичных-sql-запросов) настоящего документа

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
<th rowspan="2"><blockquote>
<p><strong>Полное название компонента</strong></p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p><strong>Наименование англоязычное</strong></p>
</blockquote></th>
<th colspan="4" style="text-align: center;"><blockquote>
<p><strong>Версия компонента</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>J4</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J5</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J6</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J18</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Настройка планов выполнения.</p>
<p>Компонент «pg_hint_plan»</p>
</blockquote></td>
<td><blockquote>
<p>pg_hint_plan</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>1.5.1-</p>
<p>729</p>
</blockquote></td>
<td><blockquote>
<p>1.6.1-</p>
<p>748</p>
</blockquote></td>
<td><blockquote>
<p>1.8.1-</p>
<p>823</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>«Jatoba» в контейнере</p>
</blockquote></td>
<td><blockquote>
<p>ja_Container</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4.20.1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>5.15.1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>6.11.1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>18.1.1</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент сбора аппаратных и программных показателей работы GNU/Linux.</p>
<p>node_exporter.</p>
</blockquote></td>
<td><blockquote>
<p>node_exporter</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>1.8.0-</p>
<p>2165</p>
</blockquote></td>
<td><blockquote>
<p>1.8.0-</p>
<p>2165</p>
</blockquote></td>
<td><blockquote>
<p>1.8.0-</p>
<p>2165</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент сбора метрик СУБД.</p>
<p>postgres_exporter</p>
</blockquote></td>
<td><blockquote>
<p>postgres_exporter</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0.18.1-</p>
<p>649</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0.18.1-</p>
<p>649</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0.18.1-</p>
<p>648</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SQL экспортёр. Компонент сбора</p>
<p>расширенных метрик СУБД</p>
</blockquote></td>
<td><blockquote>
<p>sql_exporter</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0.18.6-</p>
<p>683</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0.18.6-</p>
<p>683</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0.18.6-</p>
<p>682</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент мониторинга различных программных систем и сервисов.</p>
<p>Prometheus</p>
</blockquote></td>
<td><blockquote>
<p>Prometheus</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>3.5.0-</p>
<p>15793</p>
</blockquote></td>
<td><blockquote>
<p>3.5.0-</p>
<p>15793</p>
</blockquote></td>
<td><blockquote>
<p>3.5.0-</p>
<p>15792</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент управления и обработки оповещений в системе мониторинга</p>
<p>Prometheus. Alertmanager</p>
</blockquote></td>
<td><blockquote>
<p>Alertmanager</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>0.27.0-</p>
<p>3086</p>
</blockquote></td>
<td><blockquote>
<p>0.27.0-</p>
<p>3086</p>
</blockquote></td>
<td><blockquote>
<p>0.27.0-</p>
<p>3086</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Работа СУБД «Jatoba» в режиме ЗПС в ОС Astra Linux</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>4.22.1-</p>
<p>53897</p>
</blockquote></td>
<td><blockquote>
<p>5.17.1-</p>
<p>55711</p>
</blockquote></td>
<td><blockquote>
<p>6.13.1-</p>
<p>57857</p>
</blockquote></td>
<td><blockquote>
<p>18.3.1-</p>
<p>62238</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>gis-cryptoplatform</p>
</blockquote></td>
<td><blockquote>
<p>gis-cryptoplatform</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>17_1.7.3</p>
<p>-4</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>17_1.7.3</p>
<p>-4</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>17_1.7.3</p>
<p>-4</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>17_1.7.3</p>
<p>-4</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка лексографического идентификатора.</p>
<p>Компонент «pg-ulid»</p>
</blockquote></td>
<td><blockquote>
<p>pg-ulid</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>0.0.1-15</p>
</blockquote></td>
<td><blockquote>
<p>0.0.1-16</p>
</blockquote></td>
<td><blockquote>
<p>0.0.1-18</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Запись событий информационной безопасности.</p>
<p>Компонент «ja_seceventlog»</p>
</blockquote></td>
<td><blockquote>
<p>ja_seceventlog</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>3.3.0-</p>
<p>250</p>
</blockquote></td>
<td><blockquote>
<p>3.3.0-</p>
<p>250</p>
</blockquote></td>
<td><blockquote>
<p>3.3.0-</p>
<p>250</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Обратный индекс с хранением позиционной информации, полнотекстовый поиск.</p>
<p>Компонент «rum»</p>
</blockquote></td>
<td><blockquote>
<p>rum</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>1.3.13-</p>
<p>534</p>
</blockquote></td>
<td><blockquote>
<p>1.3.13-</p>
<p>534</p>
</blockquote></td>
<td><blockquote>
<p>1.3.13-</p>
<p>587</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Реорганизация таблицы с минимальными блокировками.</p>
<p>Компонент «pg_repack»</p>
</blockquote></td>
<td><blockquote>
<p>pg_repack</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>1.5.3-</p>
<p>611</p>
</blockquote></td>
<td><blockquote>
<p>1.5.1-</p>
<p>588</p>
</blockquote></td>
<td><blockquote>
<p>1.5.3-</p>
<p>611</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Работа СУБД Jatoba в режиме ЗПС в ОС ОСНОВА</p>
</blockquote></td>
<td><blockquote>
<p>osnova-digsig-key</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4.22.1-</p>
<p>53897</p>
</blockquote></td>
<td><blockquote>
<p>5.17.1-</p>
<p>55711</p>
</blockquote></td>
<td><blockquote>
<p>6.13.1-</p>
<p>57857</p>
</blockquote></td>
<td><blockquote>
<p>18.3.1-</p>
<p>62238</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Расширенный тип данных tsvector. Компонент "tsvector2"</p>
</blockquote></td>
<td><blockquote>
<p>tsvector2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.0-52</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.0-59</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.0-58</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Полнотекстовый поиск и определение</p>
<p>похожих текстов. Компонент "ja_Similar"</p>
</blockquote></td>
<td><blockquote>
<p>ja_Similar</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>1.0.0-36</p>
</blockquote></td>
<td><blockquote>
<p>1.0.0-36</p>
</blockquote></td>
<td><blockquote>
<p>1.0.0-36</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Инвентаризация СУБД</p>
</blockquote></td>
<td><blockquote>
<p>ja_Inventory</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.1-46</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.1-46</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.1-46</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1.0.1-46</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Cвободная библиотека для проверки</p>
<p>орфографии и морфологического анализа. Компонент «hunspell»</p>
</blockquote></td>
<td><blockquote>
<p>hunspell</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>1.0.0-4</p>
</blockquote></td>
<td><blockquote>
<p>1.0.0-4</p>
</blockquote></td>
<td><blockquote>
<p>1.0.0-4</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Маскирование данных. Компонент «ja_anonymizer»</p>
</blockquote></td>
<td><blockquote>
<p>ja_anonymizer</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>2.4.1-</p>
<p>1565</p>
</blockquote></td>
<td><blockquote>
<p>2.4.1-</p>
<p>1564</p>
</blockquote></td>
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
<th rowspan="2"><blockquote>
<p><strong>Полное название компонента</strong></p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p><strong>Наименование англоязычное</strong></p>
</blockquote></th>
<th colspan="4" style="text-align: center;"><blockquote>
<p><strong>Версия компонента</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>J4</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J5</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>J6</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>J18</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Архивация и восстановление данных. Компонент «wal-g»</p>
</blockquote></td>
<td><blockquote>
<p>wal-g</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>3.0.7-</p>
<p>1925</p>
</blockquote></td>
<td><blockquote>
<p>3.0.7-</p>
<p>1925</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Возможна эксплуатация СУБД Jatoba с установленным сторонним компонентом «TimescaleDB» без установки других встроенных компонентов СУБД
>
> «Jatoba».

# РЕШАЕМЫЕ ЗАДАЧИ

> Использование СУБД «Jatoba» позволяет решать следующий ряд задач:

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

> [3.11.1](#компонент-ja_plan_manager.-управление-планами-запросов));

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

> (п. [3.17](#обфускации-кода));

- Формирование HTTP/HTTPS запросов из СУБД (п. [3.18](#формирование-httphttps-запросов-из-субд));

- Компрессия данных (п. [3.19](#_bookmark71));

- Полнотекстовый поиск и определение похожих текстов (п. [3.20](#полнотекстовый-поиск-и-определение-похожих-текстов));

- Метод поиска KNN (п. [3.21](#поиск-ближайших-соседей-knn-для-b-tree));

- 64-битный счетчик транзакций (п. [3.22](#битный-счетчик-транзакций.-компонент-xid64));

- Инвентаризация СУБД (п. [3.22](#битный-счетчик-транзакций.-компонент-xid64));

- Разрешение или запрет действий пользователей (п. [3.24](#_bookmark77)).

## Инсталлятор

> Процесс установки СУБД облегчен входящими в поставку инсталляторами, которые автоматизируют рутинные операции.
>
> Под ОС семейства Windows ядро СУБД и компоненты устанавливаются при помощи инсталлятора.

<img src="../docs/assets/images/com18.3.1/describe/media/image1.png" style="width:3.91877in;height:3.06375in" />

> Рисунок 3.1 – Запуск мастера установки
>
> Основные пакеты ядра СУБД под ОС GNU/Linux могут устанавливаться инсталлятором.
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image2.png" style="width:6.63601in;height:1.33479in" />
>
> Рисунок 3.2 – Окно инсталлятора ОС GNU/Linux
>
> Сохранен режим установки СУБД под GNU/Linux из локального репозитория.
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image3.png" style="width:6.57269in;height:3.27875in" />
>
> Рисунок 3.3 – Установка основных пакетов
>
> Установка компонента пользовательского веб-интерфейса для администраторов «Jatoba data safe» может выполняться:

1)  Инсталлятором компонента на ОС Windows.

<img src="../docs/assets/images/com18.3.1/describe/media/image4.jpeg" style="width:3.97204in;height:3.10406in" />

> Рисунок 3.4 – Окно инсталлятора JDS на ОС Windows

2)  Вручную из архива.

3)  Инсталлятором компонента JDS под ОС GNU/Linux.

> <img src="../docs/assets/images/com18.3.1/describe/media/image5.png" style="width:6.6528in;height:4.30469in" />
>
> Рисунок 3.5 – Инсталлятор JDS под ОС GNU/Linux

## Установка СУБД с рекомендуемой, генерируемой конфигурацией, компонентом «ja_tune»

> Установка СУБД с рекомендуемыми, генерируемыми параметрами возможна при ручной установке.
>
> Компонент «ja_tune», на основе данных об аппаратной платформе, на которой предполагается запускать экземпляр СУБД, данных операционной системы, предполагаемом профиле нагрузки СУБД и некоторых дополнительных параметрах генерирует рекомендуемые параметры конфигурационного файла «postgresql.conf».

## Например

> Вывод результатов в файл с добавлением результатов в конец файла
>
> ./ja_tune --workload web --os Linux -- ram 2 GB --cpu 2 --maxconn 10 --pgversion 14.0 --strgtype ssd --replication true --syncommit true \>\> pairwise1_web.cfg
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Компонент «ja_tune» не поддерживается в СУБД «Jatoba» с версией ядра «4» и
>
> «5»

## Балансировка нагрузки

> Помимо базовых механизмов СУБД для балансировки и оптимизации запросов пользователей к СУБД используется компонент «jaPooler».
>
> Компонент имеет функциональную возможность оптимизировать запросы от пользователя(ей) к серверу при их подключении к серверу СУБД на указанный порт, как представлено на рисунке [3.6](#_bookmark8).

**Write req**

**Read req**

> <span id="_bookmark8" class="anchor"></span>Рисунок 3.6 – Балансировка запросов пользователя
>
> Также компонент обладает функциональной возможностью балансировки подключений множества пользователей к серверам СУБД, как представлено на рисунке [3.7](#_bookmark9).
>
> RW, MASTER RO, SLAVE

**Read req**

> **Write req**

**Write req**

repl

sync

> **Write req**

**Read req**

repl

> repl

sync

> RW, MASTER RO, SLAVE
>
> <span id="_bookmark9" class="anchor"></span>Рисунок 3.7 – Балансировка запросов пользователей к серверам СУБД Подключения формируются как от пользователей, так и от пользовательских
>
> приложений.

## Кластеризация

> Отказоустойчивость в СУБД «Jatoba» реализуется средствами репликации данных компонентом «jaDog». Экземпляр СУБД может выступать в роли ведущего
>
> или ведомого сервера. Роль сервера определяется соответствующими конфигурационными параметрами, заданными администратором СУБД. Ведомый сервер всегда зависит от ведущего и получает от него все изменения данных, которые накапливаются в журнале транзакций. В случае выхода из строя ведущего сервера, ведомый сервер может автоматически или по команде администратора принять на себя роль ведущего. После восстановления функционирования сервера ему снова может быть возвращена роль ведущего.

Главн ый уз ел

Рез ервн ый уз ел

P2P обмен

jaDog

jaDog

jadog.exe

jadog.exe

СУБД

«Ja t ob a»

СУБД

«Ja t ob a»

jadog_ct l.exe

jadog_ct l.exe

ui_port

ui_port

Общ ий IP-адр ес

АРМ

п ользов ателя

АРМ

адм ин истр атора

Д оверенный

> IP-адр ес

jadog_ct l.exe

Сег м ент сети

> Реп ли к ац ия
>
> Рисунок 3.8 – Физическая структура узлов кластера
>
> Базовые функциональные возможности кластера расширены до полнофункциональных инженерных решений катастрофоустойчивого и геораспределенного кластера.

## Инженерные решения построения кластера

> Функциональные возможности компонента jaDog позволяют построить кластер различных конфигураций и приведенных в таблице [3.1](#_bookmark12). настоящего документа.
>
> Развёртывание кластеров может проходить как в ручном, так и в полуавтоматическом режиме с использованием файлов ответов \*.yml.
>
> **Кластер № 2**
>
> **Кластер № 2**
>
> <span id="_bookmark12" class="anchor"></span>Таблица 3.1 – Инженерные решения компонента «jaDog»
>
> **Кластер № 1**
>
> **Кластер № 1**

<table>
<colgroup>
<col style="width: 58%" />
<col style="width: 41%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Схема работы компонента</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Разделы описания инженерного решения во 2-ой</strong></p>
<p><strong>части руководства jaDog</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><p><strong>Сервер Сервер</strong></p>
<p><strong>Первый экземпляр СУБД Второй экземпляр СУБД</strong></p>
<p><strong>Master Slave</strong></p>
<p>/usr/jatoba-6/ /var/lib/jatoba/6/clone</p>
<p><strong>Второй экземпляр СУБД Первый экземпляр СУБД</strong></p>
<p><strong>Slave Master</strong></p>
<p>/var/lib/jatoba/6/clone /usr/jatoba-6/</p></td>
<td><ol start="2" type="1">
<li><p>Перекрестная репликация. Использование файлов ответов</p></li>
<li><p>Перекрестная репликация. Настройка в ручном режиме</p></li>
</ol></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Площ адк а 1</p>
<p>Shared-node IP 10.116.10 2.56</p>
<p>К оп ирование в Ар хи в W AL</p>
<p>архи в W AL с Mast er</p>
</blockquote>
<p>Реп ли к ац ия Slave Cascad e</p>
<p>IP 10.116.10 2.57</p>
<blockquote>
<p>Mast er Slave Main</p>
<p>IP 10.116.10 2.54 IP 10.116.10 2.55</p>
<p>Реп ли к ац ия</p>
<p>К оп ирование в архи в W AL с Mast er Slave Cascad e</p>
</blockquote>
<p>IP 10.116.10 2.58</p>
<blockquote>
<p>К оп ирование и з архив а W AL</p>
</blockquote></td>
<td><ol start="4" type="1">
<li><p>Каскадная репликация. Использование файлов ответов</p></li>
<li><p>Каскадная репликация. настройка в ручном режиме</p></li>
</ol></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Площ адк а 1 Площ адк а 2</p>
<p>Shared-node IP 10.116.10 2.56</p>
<p>К оп ирование в Ар хи в W AL</p>
<p>архи в W AL с Mast er</p>
</blockquote>
<p>Реп ли к ац ия Slave Cascad e</p>
<p>IP 10.116.10 2.57</p>
<blockquote>
<p>Mast er Slave Main</p>
<p>IP 10.116.10 2.54 IP 10.116.10 2.55</p>
<p>Реп ли к ац ия</p>
<p>К оп ирование в архи в W AL с Mast er Slave Cascad e</p>
</blockquote>
<p>IP 10.116.10 2.58</p>
<blockquote>
<p>К оп ирование и з архив а W AL</p>
</blockquote></td>
<td><blockquote>
<p>5.5. Работа кластера с каскадной репликацией в дата-центрах</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 18%" />
<col style="width: 4%" />
<col style="width: 7%" />
<col style="width: 15%" />
<col style="width: 2%" />
<col style="width: 4%" />
<col style="width: 9%" />
<col style="width: 27%" />
</colgroup>
<thead>
<tr>
<th colspan="6"><blockquote>
<p><strong>Схема работы компонента</strong></p>
</blockquote></th>
<th colspan="3" style="text-align: center;"><blockquote>
<p><strong>Разделы описания инженерного решения во 2-ой части руководства jaDog</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3"><blockquote>
<p>Площ адк а 1 dc 1</p>
<p>Mast er node2</p>
<p>IP 10.116.10 2.55</p>
<p>Public IP</p>
<p>10.116.10 2.81</p>
</blockquote></td>
<td rowspan="3"><blockquote>
<p>К оп ирование в архи в W AL с Mast er</p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image227.png" style="width:0.20563in" /></p>
<p>Реп ли к ац ия</p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image231.png" style="width:0.25309in;height:0.10094in" /></p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image233.png" style="width:0.24957in;height:0.13781in" /></p>
<p>Slave node1</p>
<p>IP 10.116.10 2.54</p>
</blockquote></td>
<td rowspan="3"></td>
<td rowspan="3"><blockquote>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image235.png" style="width:0.31635in;height:0.2975in" /></p>
<p>Ар хи в W AL</p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image236.png" style="width:0.2041in;height:0.11458in" /></p>
<p>Slave node5</p>
<p>IP 10.116.10 3.57</p>
</blockquote></td>
<td rowspan="3"><blockquote>
<p>Площ адк а 2 dc 2</p>
<p>К оп ирование и з архи ва W AL</p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image237.png" style="width:0.20563in" /></p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image243.png" style="width:0.29526in;height:0.30812in" /></p>
<p>Slave node6</p>
</blockquote>
<p>IP 10.116.10 3.58</p></td>
<td rowspan="3"></td>
<td colspan="3"><blockquote>
<p>6. Геораспределенный,</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3"><blockquote>
<p>отказоустойчивый кластер.</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3"><blockquote>
<p>Решение JA_DTC_AS</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="13"><blockquote>
<p>Worker</p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image244.png" style="width:0.26011in;height:0.26042in" /></p>
<p>Worker</p>
</blockquote></td>
<td rowspan="13"><p>Coordinator</p>
<blockquote>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image245.png" style="width:0.26011in;height:0.26042in" /></p>
<p><strong>Cluster 2</strong></p>
<p>Master</p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image246.png" style="width:0.22881in;height:0.23958in" /> <img src="../docs/assets/images/com18.3.1/describe/media/image247.png" style="width:0.26011in;height:0.26042in" /></p>
<p>Slave</p>
</blockquote></td>
<td rowspan="13"><blockquote>
<p>host</p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image248.png" style="width:0.2078in;height:0.23958in" /></p>
<p>Worker</p>
<p>Worker</p>
</blockquote></td>
<td rowspan="13"><blockquote>
<p><strong>Bundle Cluster 1</strong></p>
<p>Master</p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image250.png" style="width:0.25962in;height:0.26042in" /></p>
<p><strong>Cluster 3</strong></p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image248.png" style="width:0.22881in;height:0.23958in" /></p>
</blockquote></td>
<td rowspan="13"><p>host</p>
<blockquote>
<p>Slave</p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image251.png" style="width:0.25962in;height:0.26042in" /></p>
<p>Master Worker</p>
</blockquote>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image252.png" style="width:0.25261in;height:0.26042in" /> <img src="../docs/assets/images/com18.3.1/describe/media/image244.png" style="width:0.26011in;height:0.26042in" /></p>
<blockquote>
<p>Slave Worker</p>
</blockquote></td>
<td colspan="2" rowspan="13"><blockquote>
<p>Coordinator (реплика)</p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image253.png" style="width:0.25962in;height:0.26042in" /></p>
<p><strong>Cluster 4</strong></p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image254.png" style="width:0.22881in;height:0.23958in" /></p>
</blockquote></td>
<td rowspan="13"><blockquote>
<p>Master</p>
<p><img src="../docs/assets/images/com18.3.1/describe/media/image255.png" style="width:0.26011in;height:0.26042in" /></p>
<p>Slave</p>
</blockquote></td>
<td><blockquote>
<p>Группа кластеров на основе компонентов jaDog и ja_Hipe_Cluster</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>9. Настройка группы</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>кластеров (bundle) с</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>компонентом</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>«jadog» в ручном</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>режиме.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>10. Настройка</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>группы кластеров</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>(bundle) с</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>компонентом</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>«jadog» в</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>автоматическом</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>режиме.</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Отказоустойчивый кластер в Kubernetes

> СУБД «Jatoba» может применяться в составе продукта CloudNativePG, позволяющего развертывать предварительно сконфигурированный отказоустойчивый
>
> кластер в окружении Kubernetes. Текущая реализация кластера CNPG использует физическую потоковую репликацию.

Пер ви чный уз ел СУБД

Реп ли к а

Реп ли к а

PVC

PVC

PVC

Рабочий уз ел

Рабочий уз ел

Рабочий уз ел

Clust er n am espace

> Оп ерат ор Рабочий уз ел

Operat or n am espace

Kubernet es Clust er

Сер вис для п ер вич ног о уз ла к ласт ера СУБД

> Рисунок 3.9 – Архитектура кластера, устанавливаемого с помощью CloudNativePG

## Управление кластером jaDog в JDS

> На уровне компонента пользовательского веб-интерфейса для администраторов «Jatoba data safe» поддерживаются функциональные возможности:

- создание кластера (Create cluster);

- назначение роли «Мастер» (Make a master);

- добавление узла в кластер (Add new node);

- удаление выбранного узла (Delete selected node);

- активация PUBLIC IP;

- деактивация PUBLIC IP;

- управление параметрами кластера.

> Рисунок 3.10 – Вид раздела «Список кластеров» (Cluster list)
>
> Рисунок 3.11 – Вкладка «Обзор» параметров кластера Подключение к кластеру доступно через REST API.

## Секционирование больших таблиц. ja_Hipe_Cluster

> Компонент «ja_Hipe_Cluster» реализует функциональную возможность, позволяющую обычным серверам баз данных (называемым узлами) координировать свои действия друг с другом в архитектуре «ничего общего» («shared nothing»). Узлы образуют кластер, который позволяет СУБД хранить больше данных и использовать больше ядер центрального процессора, чем это было бы возможно на одном компьютере. Эта архитектура также позволяет масштабировать базу данных, просто добавляя дополнительные узлы в кластер. Данное расширение позволяет выполнять распределение таблиц и запросов по рабочим узлам, входящим в кластер.
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image271.jpeg" style="width:5.11089in;height:2.83083in" alt="C:\Users\kuznetsov-a\Downloads\ja_Hipe_Cluster.png " />
>
> Рисунок 3.12 – Отправка запросов на рабочие узлы
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.24999in" />Компонент «ja_Hipe_Cluster» не поддерживается в СУБД «Jatoba» с версией ядра «18»

## Мониторинг и управление СУБД

> Компонент пользовательского веб-интерфейса для администраторов «Jatoba data safe» предназначен для администраторов СУБД и БД, специалистов по безопасности и аудиторов безопасности.
>
> Обладает следующими функциональными возможностями:

- управление и конфигурирование хоста СУБД и самой СУБД;

- установка расширений СУБД;

- просмотр событий безопасности;

- управление кластером СУБД;

- формирование матрицы привилегий пользователей;

- формирование матрицы системных привилегий пользователей;

- формирование отчетов о СУБД;

- синхронизация учетных записей пользователей;

- управление резервными копиями.

> Безопасность внутри компонента обеспечивается реализованной двухкомпонентной ролевой моделью доступа, в которой пользователь компонента не знает и не может использовать учетную запись в СУБД.

## Раздел «Мониторинг»

> В комплект поставки СУБД «Jatoba» с версией ядра «5» и выше в компонент JDS включен раздел «Мониторинг».
>
> Раздел «Мониторинг» предназначен для отображения оперативной информации в форме графических и цифровых панелей (виджетов) о целевой СУБД и ОС, на которой она установлена.
>
> Рисунок 3.13 – Предустановленные виджеты
>
> Виджеты имеют функциональную возможность контроль над пороговыми значениями и рассылку уведомлений.
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Раздел «Монитогринг» использует компоненты:

- node_exporter;

- postgres_exporter;

- sql_exporter;

> установленные на целевой СУБД, а также:

- Prometheus;

- Alertmanager;

> установленные на отдельном хосте.
>
> Данные компоненты не поддерживается в СУБД «Jatoba» с версией ядра «4».

## Раздел «Ландшафт» (Landscape)

> Раздел «Ландшафт» предназначен для:

- навигации между разделами компонента JDS:

> Рисунок 3.14 – Навигация между разделами

- получения общей информации о хосте СУБД;

> Рисунок 3.15 - Хост. Вкладка «Обзор»

- получения общей информации о БД;

> <span id="_bookmark19" class="anchor"></span>Рисунок 3.16 – Вкладка «Обзор» БД

## Раздел «Параметры СУБД»

> Раздел «Параметры СУБД» позволяет изменять значения конфигурационного файла «postgresql.conf» на целевой СУБД и применять установленные значения.
>
> Рисунок 3.17 - Вкладка «Параметры СУБД»
>
> Функциональная возможность изменения конфигурации целевых СУБД, позволяет оперативно применять, как шаблоны параметров, так и отдельные параметры, с целью:

- масштабирования типовых параметров;

- конфигурирования СУБД под определенный тип нагрузки;

- оперативного изменения набора параметров.

> Рисунок 3.18 – Добавление параметра в шаблон

## Раздел «Правила доступа»

> В разделе «Правила доступа» доступно изменение значений конфигурационного файла «pg_hba.conf», в котором устанавливаются параметры аутентификации в СУБД.
>
> Рисунок 3.19 - Вкладка «Параметры СУБД»

## Раздел «Расширения»

> Раздел обеспечивает установку и удаление расширений СУБД.
>
> Рисунок 3.20 – Установка расширения

## Раздел «Анализ рисков» (User Risk)

> Разработанная функциональность раздела не имеет аналогов на рынке информационных технологий.
>
> Раздел в графическом формате отображает системные привилегии ролей, предоставленные относительно объектов доступа.
>
> <span id="_bookmark23" class="anchor"></span>Рисунок 3.21 – Вид раздела «Анализ рисков» (User Risk)

## Раздел «Матрица доступа» (Access matrix)

> Раздел также уникален и не имеет аналогов. В нем отображаются атрибутов пользователей относительно субъектов доступа.
>
> Рисунок 3.22 – Вид раздела «Матрица доступа» (Access matrix) Полученные результаты возможно экспортировать в файл MS Excel.

## Раздел «Список событий» (Event List)

> Раздел «Список событий» (Event List) предназначен для просмотра событий безопасности в выбранной инсталляции (Target).
>
> Для функционирования раздела требуется, чтобы на целевой СУБД был установлен компонент «ja_Log», обеспечивающий передачу событий безопасности в служебную СУБД. Компонент «pgAudit» при этом обеспечивает расширенную регистрацию событий безопасности.
>
> Рисунок 3.23 – Вид раздела «Список событий» (Event List) Раздел JDS «Event List» оснащен:

- полем контекстного поиска;

- набором фильтров;

- механизмом выбора отображаемых полей;

- механизмом автоматического обновления.

> Время хранения журналов событий СУБД ограничено только выделенным дисковым пространством для служебной БД «ja_log».

## Раздел «Кластеры»

> Функциональные возможности раздела описаны в п. [3.3.3](#управление-кластером-jadog-в-jds) настоящего документа.

## Раздел «Снимки и отчеты» (Snapshots & Reports)

> Подраздел «Снимки и отчеты» (Snapshots & Reports) предназначен для создания снимков состояния БД (Snapshots) и получения отчетов. Формирование статической информации выполняется компонентом «pg_Profile».

Рисунок 3.24 – Вкладка «Снимки»

Рисунок 3.25 – Вкладка «Отчеты»

## Раздел «Проблемы и решения» (Problems & Solutions)

> Подраздел «Проблемы и решения» (Problems & Solutions) представляет собой интеллектуальный инструмент, который позволяет определять ряд проблем, существующих в целевой СУБД и разрешать их.

<span id="_bookmark28" class="anchor"></span>Рисунок 3.26 – Вкладка проблемы

## Раздел «Анализ запросов» (Query analysis)

> Подраздел «Анализ запросов» предоставляет пользователю с ролью
>
> «Администратор СУБД»:

- отображение визуализации плана запроса средствами Pg-explain;

> Рисунок 3.27 – Визуализация explain по узлам

- отображение списка планов запросов по нескольким критериям отбора и переход по ссылке из выбранного плана запроса на страницу анализа плана запроса;

> Рисунок 3.28 – Вкладка «по шаблонам»

- возможность ручного ввод плана запроса.

> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Раздел «Анализ запросов» использует компоненты:

- pg-explain;

- pg-explain-db;

- pg-monitor;

- pg-monitor-collector;

- pg-monitor-dispatcher; установленные на целевой СУБД.

> Данные компоненты не поддерживается в СУБД «Jatoba» с версией ядра «4».

## Раздел «Активность БД»

> Подраздел «Активность БД» (DB Activity) предназначен для:

- мониторинга активности в СУБД;

- получения информации о выполняющихся сессиях/процессах, существующих блокировках;

- завершения сессий;

- выявления подозрительной активности пользователей.

> Может использоваться в случаях, когда пользователь(и) СУБД сообщает(ют),
>
> что:
>
> снять

- операция «зависла»;

- СУБД потеряла производительность;

- типичные операции, выполняются дольше обычного;

- зависла сессия, не позволяющая подсоединиться повторно и требуется ее

- требуется разобраться по каким причинам «зависла» его операция.

> При выборе цели компонент JDS автоматически отобразит текущие сессии.
>
> Рисунок 3.29 – Отображение текущих сессий
>
> Во вложенном окне «Запрос» отражается выполняемый запрос, который возможно скопировать в буфер обмена, либо завершить.
>
> Рисунок 3.30 – Дополнительное окно «Завершение сессии» в вкладке «Сессии»

## Вкладка «Подключения»

> Вкладка «Подключения» отображает количество подключений к выбранной
>
> СУБД.
>
> После выбора цели отображаются столбцы:

- Пользователь/роль;

- Количество подключений;

- Квота подключений.

> Рисунок 3.31 – Вкладка «Подключения»

## Подраздел «Подключения JDS»

> Вкладка «Подключения JDS» отображает количество подключений к компоненту пользовательского веб-интерфейса для администраторов «Jatoba data safe»
>
> Рисунок 3.32 – Отображение дополнительной информации о подключении пользователя JDS
>
> После выбора цели отображаются столбцы:

- Пользователь;

- Тип:

<!-- -->

- JDS (подключение к компоненту);

- БД (подключение к служебной БД компонента);

  - Количество подключений;

  - Лимит подключений.

## Раздел «LDAP синхронизация»

> В разделе «LDAP синхронизация» используется уникальный компонент собственной разработки «ja_Sync_LDAP».
>
> Раздел «LDAP синхронизация» автоматизирует и визуализирует работу компонента «ja_Sync_LDAP» используемого для синхронизации учетных записей служб каталогов и СУБД, таких как:

- Active Directory;

- ALD Pro;

- FreeIPA;

- SAMBA.

> Рисунок 3.33 – Окно создания профиля синхронизации в версии JDS 2.2
>
> Во избежание ошибок аутентификации в компоненте применяется механизм преобразования имен пользователей.
>
> Примеры использования механизма приведены в таблице [3.2](#_bookmark32).
>
> <span id="_bookmark32" class="anchor"></span>Таблица 3.2 – Примеры преобразования имен

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 34%" />
<col style="width: 32%" />
<col style="width: 17%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Значение параметра</strong></p>
</blockquote></th>
<th style="text-align: right;"><strong>Наименование УЗ в LDAP</strong></th>
<th><blockquote>
<p><strong>Наименование УЗ в СУБД</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Комментарий</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>none (по умолчанию)</p>
</blockquote></td>
<td><a href="mailto:j.USER01@cntr.gazPROM.Loc">j.USER01@cntr.gazPROM.Loc</a></td>
<td><blockquote>
<p><a href="mailto:j.USER01@cntr.gazPROM.Loc">j.USER01@cntr.gazPROM.Loc</a></p>
</blockquote></td>
<td><blockquote>
<p>ни каких преобразований не производится. УЗ в LDAP и СУБД</p>
<p>идентичны.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>lower</p>
</blockquote></td>
<td><a href="mailto:j.USER01@cntr.gazPROM.Loc">j.USER01@cntr.gazPROM.Loc</a></td>
<td><blockquote>
<p><a href="mailto:j.user01@cntr.gazprom.loc">j.user01@cntr.gazprom.loc</a></p>
</blockquote></td>
<td><blockquote>
<p>все символы переводятся в нижний</p>
<p>регистр</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Рисунок 3.34 – Раздел «LDAP Sync»

## Раздел «Роли СУБД» (DB roles)

> Раздел «Роли БД» позволяет:

- просматривать список пользователей СУБД;

> Рисунок 3.35 – Вкладка «Роли БД»

- создавать и удалять роли;

- редактировать роли;

- назначать атрибуты роли;

> Рисунок 3.36 – Вкладка «Атрибуты»

- включать и исключать роль в групповые роли;

> Рисунок 3.37 – Вкладка «Роли и группы»

- назначать привилегии роли;

> Рисунок 3.38 – Вкладка «Привилегии»
>
> В совокупности с функциональными возможностями раздела «Уведомления» становится возможным установить контроль над действиями, связанными с учетными записями пользователей в СУБД.

## Раздел «Уведомления» (Notifications)

> Раздел «Уведомления» предназначен для оповещения администраторов о событиях целевой СУБД и компонента JDS.
>
> Механизм уведомлений содержит в себе три типа поиска сообщений:

- ошибки БД;

> Поиск выполняется по классу события или по коду события.
>
> Рисунок 3.39 – Поле «Тип события»

- события учетных записей;

> Поиск выполняется по ключевым фразам.
>
> Рисунок 3.40 – Поле «События» при выбранном типе события «События учетных записей»

- произвольный текст;

> Поиск выполняется, по ключевым словам, задаваемым пользователем JDS.
>
> Рисунок 3.41 – Тип события «Произвольный текст»
>
> Таким образом реализована функциональная возможность контроля и оповещения ответственных сотрудников о любых событиях СУБД средствами:

- электронной почты (SMTP);

- мессенджера Zulip.

> Рисунок 3.42 – Список каналов событий
>
> Совокупностью реализованных механизмов выполняются функциональные возможности по оперативному контролю и мониторингу событий СУБД.

## Раздел «Парольные политики» (Password policies)

> В комплект поставки СУБД «Jatoba» с версией ядра «5» и выше в компонент JDS включен раздел «Парольные политики».
>
> Раздел «Парольные политики» предназначен для автоматизации и упрощения работы с парольными политиками и блокировками пользователей целевой СУБД.
>
> Раздел включает в себя подразделы:

- Управление политиками (Policy management);

- Привязка ролей (Role Binding);

- Работа с блокировками.

> Корректная работа раздела обеспечивается установленными и настроенными на целевой СУБД компонент:
>
> SecurityProfile, описанного в документе «Руководство администратора»; ja_CSum, описанного в документе «Руководство по настройке. Часть 14.
>
> Контроль целостности. Компонент «ja_CSum».
>
> <span id="_bookmark36" class="anchor"></span>Рисунок 3.43 – Список пользователей привязанных к парольной политике

## Раздел «Резервное копирование» (BACKUP)

> Раздел предназначен для:

- настройки и управления компонентом «probackup»;

- управления хранилищем резервных копий;

- создания резервных копий.

> Рисунок 3.44 – Список резервных копии
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Раздел «Резервное копирование» не доступен целевой СУБД «Jatoba» с версией ядра «18», т.к. компонент «pg_ProBackup» в данной версии не поддерживается.

## Резервное копирование

## Компонент «pg_ProBackup»

> Отказоустойчивость СУБД «Jatoba» реализуется применением полного или инкрементального резервного копирования, выполняемого компонентом
>
> «pg_ProBackup».
>
> Полные резервные копии содержат все файлы данных, необходимые для восстановления сервера баз данных с нулевой точки.
>
> Инкрементальные копии создаются на уровне страниц данных и включают только ту информацию, которая изменилась со времени последнего резервного копирования.

pg \_Pro Backu p

Полн ая к оп и я

Ин к р емен тальн ое р езер ви р ован и е

Стр ан и чн ое к о п и р ован и е PAGE

Разн остн ое к оп и р ован и е DELTA

К оп и р ован и е и змен ен и й PTRACK

> Рисунок 3.45 – Реализуемые способы резервного копирования
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Компонент «pg_ProBackup» не поддерживается в СУБД «Jatoba» с версией ядра «18»

## Компонент «wal-g»

> Компонент «wal-g» — представляет собой расширение функционала СУБД
>
> «Jatoba» и предназначен для управления резервным копированием и восстановлением баз данных СУБД «Jatoba», для регулярного создания резервных копий, позволяющих восстанавливать работу СУБД в случае аварийной ситуации, порчи или потери данных.
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image303.png" style="width:6.60958in;height:2.175in" />
>
> Рисунок 3.46 – Запуск и успешное восстановление СУБД из РК
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Компонент «wal-g» не поддерживается в СУБД «Jatoba» с версией ядра «4» и
>
> «5»

## Маскирование данных. Компонент «ja_Anonymizer»

> Компонент «ja_Anonymizer» — представляет собой расширение СУДБ
>
> «Jatoba», которое предоставляет механизм маскировки и анонимизирования данных.
>
> Обладает функциональными возможностями

- **Статическое маскирование** (Static Masking): безвозвратно замаскировать все персональные данные, хранящиеся в БД, заменив их другими значениями, сохранив структуру для дальнейшего анализа;

- **Динамическое маскирование** (Dynamic Masking): включить

> «прозрачную» маскировку для определённых (MASKED) пользователей, чтобы они не имели возможности доступа к маскируемым реальным персональным данным;

- **Анонимные дампы** (Anonymous Dumps): экспортировать замаскированную версию данных в внешний SQL-файл. SQL-файл с замаскированными данными возможно использовать для тестов или передачи другим пользователям;

- **Маскирующие представления** (Masking Views): создание специальных представлений (views), в которых конфиденциальные поля уже замаскированы;

- **Маскирующие обертки данных** (Masking Data Wrappers): применение правил маскировки к данным, поступающим в БД из внешних источников.

## Например

<img src="../docs/assets/images/com18.3.1/describe/media/image304.jpeg" style="width:6.58746in;height:1.69531in" />

> Рисунок 3.47 – Применение правила anon.anonymize_column статического маскирования исходных данных таблицы employees к столбцу postcode
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image305.jpeg" style="width:6.57974in;height:1.86969in" />
>
> Рисунок 3.48 – Данные таблицы employees после использования статического маскирования к столбцу postcode
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Компонент «ja_Anonymizer» не поддерживается в СУБД «Jatoba» с версией ядра «4» и «5»

## Поддержки платформы Oracle

> В СУБД «Jatoba» реализован набор расширений, обеспечивающий интеграцию СУБД «Jatoba» с СУБД «Oracle». Расширения предоставляют дополнительные функции, повышающие синтаксическую совместимость и упрощающие перенос хранимых процедур, и предоставляют дополнительные методы прозрачного доступа к данным из одной СУБД в другую.
>
> Компонент «OraFCE» выполнен в виде расширения и имеет дополнительные функции и операторы для работы текстовыми и временными строками. Может применяться для миграции данных из Oracle в СУБД «Jatoba».
>
> Компонент «pg_Variables» выполнен в виде расширения и предназначен для работы с переменными различных типов. Созданные переменные существуют только в рамках текущей пользовательской сессии.
>
> Компонент «Oracle_FDW» дает возможность создать обертку (Foreign-Data Wrapper, FDW) для доступа к базе данных Oracle.

## Поддержка платформы MS SQL

> Компонент «TDS_FDW» предназначен для импорта данных из БД MS SQL в СУБД «Jatoba», который помогает сопоставить типы данных.
>
> Сопоставляемые типы данных приведены в таблице [3.3](#_bookmark43).
>
> <span id="_bookmark43" class="anchor"></span>Таблица 3.3 – Сопоставляемые типы данных

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>MS SQL</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>СУБД «Jatoba»</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>bingint</p>
</blockquote></td>
<td><blockquote>
<p>bingint</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>integer</p>
</blockquote></td>
<td><blockquote>
<p>integer</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>smallint</p>
</blockquote></td>
<td><blockquote>
<p>Smallint</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Real</p>
</blockquote></td>
<td><blockquote>
<p>Real</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Numeric(18,0)</p>
</blockquote></td>
<td><blockquote>
<p>Numeric(18,0)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Binary(10)</p>
</blockquote></td>
<td><blockquote>
<p>Bytea</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Bit</p>
</blockquote></td>
<td><blockquote>
<p>Smallint</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Char(8)</p>
</blockquote></td>
<td><blockquote>
<p>Character(8)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>nchar(8)</p>
</blockquote></td>
<td><blockquote>
<p>Character(8)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Float</p>
</blockquote></td>
<td><blockquote>
<p>Double precision</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Decimal(18,0)</p>
</blockquote></td>
<td><blockquote>
<p>Numeric(18,0)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Ntext</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Nvarchar(8)</p>
</blockquote></td>
<td><blockquote>
<p>Character varying(8)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Date</p>
</blockquote></td>
<td><blockquote>
<p>Date</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Datetime</p>
</blockquote></td>
<td><blockquote>
<p>Timestamp without time zone</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Time</p>
</blockquote></td>
<td><blockquote>
<p>Time without time zone</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Timestamp</p>
</blockquote></td>
<td><blockquote>
<p>Bytea</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Money</p>
</blockquote></td>
<td><blockquote>
<p>Money</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Tinyint</p>
</blockquote></td>
<td><blockquote>
<p>Smallint</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Smallmoney</p>
</blockquote></td>
<td><blockquote>
<p>money</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Совместимость платформой с 1C

> Совместимость с платформой 1С и СУБД «Jatoba» подтверждена сертификатом.

## Компонент совместимости 1С fasttrun

> Платформа 1С для выполнения своих обработок очень часто пользуется временными таблицами. Компонент fasttrun предоставляет транзакционно-небезопасную (изменения нельзя откатить) функцию, предназначенную для быстрого удаления содержимого заданной временной таблицы (по имени) и своевременного обновления статистики этой таблицы после удаления ее содержимого. Это предотвращает разрастание системного каталога pg_class, положительно сказывается на производительности системы при работе с большим количеством временных таблиц, создаваемых 1С в СУБД. Установку и вызов функций данного расширения
>
> Платформа 1С производит самостоятельно. Администратору надо только обеспечить установку данного расширения в составе СУБД.

## Компонент совместимости 1С fulleq

> Платформа 1С может использоваться на большом количестве разных СУБД. В разных СУБД имеются разные трактовки отдельных параграфов стандарта языка SQL. Компонент fulleq предоставляет дополнительный оператор сравнения значений базовых типов данных, совместимый с СУБД MS SQL Server. А именно, обеспечивается совместимость сравнения двух NULL-значений, результат которого в MS SQL Server должен быть TRUE. По умолчанию в СУБД на основе PostgreSQL результат сравнения с NULL-значением равно NULL, что идет в разрез совместимости с 1С. Установку и вызов функций данного расширения Платформа 1С производит самостоятельно. Администратору надо только обеспечить установку данного расширения в составе СУБД.

## Компонент совместимости 1С mchar

> Компонент mchar предоставляет дополнительные строковые типы данных и операторы для работы с ними, совместимые с аналогичными строковыми типами данных CHAR и VARCHAR в MS SQL Server (совместимая обработка пробельных символов в конце строк; совместимое сравнение и преобразование регистра символов в строках и т.п.). Установку данного расширения и использование соответствующих строковых типов данных Платформа 1С производит самостоятельно. Администратору надо только обеспечить установку данного расширения в составе СУБД.

## Компонент совместимости 1С online_analyze

> Поддержание статистики таблиц в актуальном состоянии – важная функция СУБД, отвечающая за своевременный выбор оптимальных планов выполнения запросов. Учитывая, что 1С использует большое количество таблиц и индексов для своей работы, то рекомендуется использовать компонент online_analyze для повышения производительности работы 1С Платформы. Расширение предоставляет функциональную возможность немедленного обновления статистики таблиц после операций добавления, удаления или изменения записей в таблицах. Установку и настройку данного расширения администратор должен проводить самостоятельно в случае падения производительности отдельных обработок.
>
> Примечание:
>
> В последних версиях 1С отмечено, что Платформа 1С сама посылает команду ANALYZE для своевременного обновления статистики нужных таблиц. Применение этого расширения может быть уже не актуально.

## Компонент совместимости 1С plantuner

> Платформа 1С содержит большое количество таблиц и индексов для хранения своих данных, выполняет очень сложные SQL-запросы для получения итоговых или промежуточных результатов обработок. Для получения оптимальных планов сложных запросов, особенно часто возникающих при написании собственных обработок, иногда возникает необходимость адаптировать планировщик на использование тех или иных индексов таблиц. Данный компонент предназначен для расширения функций планировщика запросов. Он позволяет подключать или отключать использование определенных индексов при выполнении запросов поддержкой переменных:

- plantuner.disable_index — список индексов, которые не будет видеть планировщик;

- plantuner.enable_index — список индексов, которые будет видеть планировщик, даже если они скрыты параметром plantuner.disable_index.

> Установку и настройку расширения администратор должен проводить самостоятельно в случае обнаружения фактов неправильной генерации планов запросов, ухудшающих скорость выполнения запросов.

## Управление планами запросов

## Компонент ja_Plan_Manager. Управление планами запросов

> Компонент «ja_Plan_Manager» предназначен для создания, оптимизации, экспорта/импорта и подмены планов запросов в БД.
>
> Компонент «ja_Plan_Manager» предназначен для управления процессом выполнения заранее определенных запросов с заранее определенными (альтернативными) планами в обход стандартного планировщика. Также, модуль позволяет записывать, хранить, выбирать для использования варианты планов. Полезен в случаях сложных по конструкции запросов, когда планировщик выбирает нерациональный план выполнения.
>
> Схема работы компонента представлена на рисунке [3.49](#_bookmark52).
>
> test_db_a

export

> EXTENSION
>
> ja_Plan_Manager
>
> dblink connection
>
> /var/lib/jatoba/4/data
>
> import
>
> EXTENSION
>
> ja_Plan_Manager
>
> СУБД «Jatoba»
>
> test_db_b
>
> <span id="_bookmark52" class="anchor"></span>Рисунок 3.49 – Схема работы компонента
>
> **Применение к 1С**: в некоторых случаях планировщик СУБД «Jatoba» выбирает неоптимальный план выполнения для SQL-запросов в 1C, несмотря на собранную статистику по соответствующим объектам БД. Это приводит к увеличению времени выполнения запросов и созданию непродуктивной нагрузки на оборудование. *Пример*: длительно выполняющийся (более 40 минут) запрос в 1С, для которого планировщиком СУБД «Jatoba» выбран план выполнения с использованием конструкций Group+Sort вместо более оптимальной в данном случае конструкции HashAggregate. С помощью компонента «ja_Plan_Manager» можно прикрепить к запросу более оптимальный план с использованием конструкции HashAggregate, полученный в определенных синтетических условиях для данного проблемного
>
> запроса.
>
> Функциональные возможности компонента позволяют:

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

> При использовании компонента есть возможность использовать кириллицу в именах объектов СУБД «Jatoba».

## Компонент pg_hint_plan. Корректировка запросов

> Компонент «pg_hint_plan» предназначен для корректировки планов выполнения, применяя так называемые «указания», записываемые в виде простых описаний в SQL-комментариях особого вида.
>
> Компонент считывает указания в комментариях особого вида, заданных оператором SQL. Эта особая запись начинается с последовательности символов /\*+ и заканчивается последовательностью \*/. Фразы указаний состоят из имени указания и последующих параметров, которые заключаются в скобки и разделяются пробелами. Такие указания могут размещаться в нескольких строках для улучшения читаемости.
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Компонент «pg_hint_plan» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционной системы GNU/Linux

## Компонент pg_store_plans. Контроль выполненных планов запросов

> Компонент «pg_store_plans» предназначен для контроля выполнения планов запросов статистическими методами всех операторов SQL, выполняемых сервером СУБД, выполненного в форме расширения.
>
> В результате установки расширения сформируются два представления
>
> «pg_store_plans» и «pg_store_plans_info».
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image342.png" style="width:0.25139in;height:0.25139in" />В представление «pg_store_plans» аккумулирует в себе основную информацию, а представление «pg_store_plans_info» содержит в себе статистику расширения «pg_store_plans».
>
> Компонент «pg_store_plans» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux.

## Выявления и предотвращение исполнения нетипичных SQL-запросов

> Для выявления и предотвращения исполнения нетипичных SQL-запросов используется компонент «SQL_Firewall». Компонент SQL_Firewall просматривает запросы к СУБД, которые могут быть выполнены, и предотвращает либо предупреждает о выполнении запросов, которые не найдены в установленных правилах («белых списках», WhiteList).
>
> Компонент «SQL_Firewall» функционирует в режимах:

- "learning" – режим обучения;

- "enforcing" – режим применения;

- "permissive" – режим разрешающий любые SQL запросы;

- "disabled" – режим отключенного модуля.

> Накопленные SQL-запросы хранятся и их можно просмотреть и скорректировать.
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image343.png" style="width:6.44003in;height:1.785in" />
>
> Рисунок 3.50 – Просмотр правил брандмауэра в ОС GNU/Linux В полученном списке отражены поля:

- userid – идентификационный номер пользователя (идентификационный номер 10 присваивается роли postgres);

- queryid – идентификационный номер запроса;

- query – тело запроса;

- calls – вызовы.

> Дополнительным функционалом компонента «SQL_Firewall» является применение обученной модели машинного обучения, которая определяет вероятность содержания во входящем запросе SQL-инъекции. Запросы, которые считаются
>
> безопасными, допускаются к выполнению. Запрос, который классифицируется как
>
> содержащий SQL-инъекцию, прерывается с выводом ошибки. Функциональность модели машинного обучения для компонента «SQL_Firewall» поддерживается:

- только в СУБД «Jatoba» версии 18;

- с установленной библиотекой для взаимодействия с моделями машинного обучения (Компонент «ONNX Runtime»);

- при условии использования совместимых операционных систем: Astra Linux 1.8 (x86-64), Debian 11, Debian 12, Альт 10 СП, Альт 10 Server, Ubuntu 22.04,

> Ubuntu 24.04, РЕД ОС 7.3 Муром, РЕД ОС 8, РОСА Хром 12.4.

## Регистрация событий безопасности

> В комплект поставки СУБД входят компоненты регистрации событий:

- «pgAudit» – компонент расширенного журналирования событий СУБД;

- «ja_Log» – компонент централизованного сбора записей событий СУБД;

- «ja_seceventlog» - компонент записи событий безопасности;

- «pgBadger» – компонент формирования отчетов по журналам СУБД.

> В зависимости от поставленных задач перечень используемых компонентов может меняться.

## Расширенная регистрация событий СУБД

> Компонент «pgAudit» обеспечивает расширенное журналирование событий дополняя поле «Error message». Таким образом регистрируются дополнительные SQL-команды.
>
> Сравнение регистрируемых SQL-команд при стандартной регистрации событий СУБД и с применением компонента «pgAudit» приведены в таблице [3.4](#_bookmark58).
>
> <span id="_bookmark58" class="anchor"></span>Таблица 3.4 – Сравнительная таблица регистрируемых SQL-команд

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 31%" />
<col style="width: 16%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr>
<th colspan="2"><blockquote>
<p><strong>log_statement</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>pg_Audit</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></td>
<td><blockquote>
<p><strong>SQL-команды записывать в журнал</strong></p>
</blockquote></td>
<td><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></td>
<td><blockquote>
<p><strong>SQL-команды записывать в журнал</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ALL</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>ALL</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
<td rowspan="2"><blockquote>
<p>READ</p>
</blockquote></td>
<td><blockquote>
<p>SELECT</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>COPY TO</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="3"><blockquote>
<p>MOD</p>
</blockquote></td>
<td><blockquote>
<p>INSERT</p>
</blockquote></td>
<td rowspan="3"><blockquote>
<p>WRITE</p>
</blockquote></td>
<td><blockquote>
<p>INSERT</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>UPDATE</p>
</blockquote></td>
<td><blockquote>
<p>UPDATE</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>DELETE</p>
</blockquote></td>
<td><blockquote>
<p>DELETE</p>
</blockquote></td>
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
<th colspan="2"><blockquote>
<p><strong>log_statement</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>pg_Audit</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></td>
<td><blockquote>
<p><strong>SQL-команды записывать в журнал</strong></p>
</blockquote></td>
<td><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></td>
<td><blockquote>
<p><strong>SQL-команды записывать в журнал</strong></p>
</blockquote></td>
</tr>
<tr>
<td rowspan="5"></td>
<td><blockquote>
<p>TRUNCATE</p>
</blockquote></td>
<td rowspan="2"></td>
<td><blockquote>
<p>TRUNCATE</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>COPY FROM</p>
</blockquote></td>
<td><blockquote>
<p>COPY FROM</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>PREPARE</p>
</blockquote></td>
<td rowspan="3"></td>
<td rowspan="3"></td>
</tr>
<tr>
<td><blockquote>
<p>EXECUTE</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>EXPLAIN ANALYZE</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="3"><blockquote>
<p>DDL</p>
</blockquote></td>
<td><blockquote>
<p>CREATE</p>
</blockquote></td>
<td rowspan="3"><blockquote>
<p>DDL</p>
</blockquote></td>
<td><blockquote>
<p>CREATE</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ALTER</p>
</blockquote></td>
<td><blockquote>
<p>ALTER</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>DROP</p>
</blockquote></td>
<td><blockquote>
<p>DROP</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
<td rowspan="2"><blockquote>
<p>FUNCTIO</p>
<p>N</p>
</blockquote></td>
<td><blockquote>
<p>CALL</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>DO</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="4"></td>
<td rowspan="4"></td>
<td rowspan="4"><blockquote>
<p>ROLE</p>
</blockquote></td>
<td><blockquote>
<p>GRANT</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>REVOKE</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ALTER DEFAULT</p>
<p>PRIVILEGES</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SET ROLE</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="5"></td>
<td rowspan="5"></td>
<td rowspan="5"><blockquote>
<p>MISC</p>
</blockquote></td>
<td><blockquote>
<p>DISCARD</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>FETCH</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>CHECKPOINT</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>VACUUM</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SET</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td></td>
<td><blockquote>
<p>MISC_SET</p>
</blockquote></td>
<td><blockquote>
<p>SET</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>NONE</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>NONE</p>
</blockquote></td>
<td></td>
</tr>
</tbody>
</table>

## Компонент «ja_seceventlog»

> Компонент «ja_seceventlog» формирует событий безопасности СУБД в соответствии с ГОСТ-Р-59548-2022 «Национальный стандарт Российской Федерации. Защита информации. Регистрация событий безопасности. Требования к регистрируемой информации» и хранения их в отдельном каталоге.
>
> Компонент устанавливает собственные и независимые параметры регистрации событий и вырезает события безопасности из журнала аудита СУБД, складывая их

- в свой журнал (в отдельном каталоге);

- во временную таблицу в БД.

> При этом параметры регистрации событий безопасности гораздо шире чем в компоненте «pg_audit».
>
> Перечень регистрируемых событий регулируется установленными фильтрами.
>
> Для передачи событий безопасности в JDS используются компонент «ja_Log».
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.24999in" />Компонент «ja_seceventlog» не поддерживается в СУБД «Jatoba» с версией ядра «4»

## Централизованный сбор событий СУБД

> Компонент «ja_Log» предназначен для сбора событий безопасности с целевых СУБД «Jatoba» в служебную СУБД «Jatoba data safe».
>
> При клиент-серверной установке на серверах целевых СУБД устанавливается агент компонента, а на сервере служебной СУБД серверная часть компонента. Передача данных осуществляется по протоколу Libpq или TLS.

ja_log \_agen t

JDS

ja_log \_server

ja_log \_agen t

> <span id="_bookmark61" class="anchor"></span>Рисунок 3.51 – Схема работы компонента при клиент-серверной установке

## Формирование отчетов по журналам СУБД

> Компонент «pgBadger» обладает следующими функциональными возможностями:

- сбор общих данных о работе СУБД из файлов регистрации событий, в том числе о сессиях пользователя (выполненные SQL-запросы), и предоставление данных администратору в виде HTML-отчетов;

- выявление проблемных мест в производительности СУБД;

- поиск и анализ запросов, подлежащих оптимизации.

## Пароли и парольные политики

> Парольные политики реализуются компонентом «SecurityProfile» при методе идентификации PASSWORD.
>
> Привилегированный пользователь имеет возможности:

- смены пароля пользователя;

- снятия блокировки пользователя;

- создания профиля парольной политики;

- назначения пользователю профиля парольной политики;

- смены параметров профиля парольной политики и т.д.

> Компонент «SecurityProfile» имеет функциональную возможность распределять учетные записи по применяемым к ним парольным политикам. Как было описано ранее, возможно применять парольные политики по умолчанию, создавать собственные, либо использовать преднастроенные профили парольных политик.
>
> Роли (пользователи) СУБД могут прикрепляться к вновь создаваемым или к преднастроенным профилям парольных политик:

- FSTEC_1_class – профиль для ИС первого класса защищенности;

- FSTEC_2_class – профиль для ИС второго класса защищенности;

- CIS – профиль, основанный на рекомендациях Center for Internet Security;

- Corporate_1 – корпоративный профиль первого уровня для учетных записей пользователей;

- Corporate_2 – корпоративный профиль второго уровня для учетных записей администраторов программных (программно-аппаратных средств);

- Corporate_3 – корпоративный профиль третьего уровня для технических (сервисных, служебных) учетных записей, используемых в технологических процессах ИС или встроенных производителями программных (программно-аппаратных) средств в такие средства.

## Генератор паролей «pwgen»

> Расширение «pwgen» служит в качестве генератора пароля или множества паролей, с возможностью задания параметров.
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Компонент «pwgen» не поддерживается в СУБД «Jatoba» с версией ядра «4»

## Маскирование паролей «ja_pwmasking»

> На уровне патча ядра СУБД реализована функциональная возможность маскирования паролей. Пароли, вводимые в открытом виде и хэшированные пароли в формате SHA256 и MD5 в журнале аудита СУБД, будут маскированы.
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Патч ядра «ja_pwmasking» не поддерживается в СУБД «Jatoba» с версией ядра
>
> «4»

## Поддержка работы СУБД с геоданными

> В СУБД «Jatoba» реализован набор расширений PostGIS, обеспечивающий управление пространственными данными для построения на базу СУБД геоинформационных систем. Набор расширений включает дополнительные типы данных и процедуры обработки данных этих типов.

## Контроль целостности

> СУБД «Jatoba» на уровне ядра поддерживает несколько механизмов обеспечения целостности данных.
>
> Первый встроенный механизм СУБД позволяет проводить проверки корректности данных, которые пользователь вносит в базу данных. Реализована программная возможность включения этих проверок для отдельных полей таблиц по выбору пользователя. Также реализована система ограничений, накладываемая на данные, помещаемые в таблицы. Данные ограничения позволяют обеспечивать ссылочную целостность данных в разных таблицах.
>
> Вторым механизмом контроля целостности является компонент «ja_CSum» предназначенный для выполнения периодических фоновых проверок фалов, расположенных в ключевых директориях СУБД, а также:

- конфигурации системы управления базами данных;

- конфигураций баз данных;

- процедур (программного кода) системы управления базами данных;

- процедур (программного кода), хранимых в базах данных.

> Компонент «ja_CSum» опосредовано может взаимодействовать с другими компонентами СУБД «Jatoba», такими как:

- пользовательский веб-интерфейс для администраторов, компонент «Jatoba data safe» (643.72410666.00067-075 98 01-07 Руководство по настройке. Часть 7);

- компонент централизованного сбора записей событий СУБД «ja_Log» (643.72410666.00067-075 98 01-12 Руководство по настройке. Часть 12).

> ja_Log

jalog \_server

ja_CSu m

Jat oba Dat a Safe

ja_Log

> jalog \_agen t
>
> jalog \_agent .con f
>
> ja_CSu m

ja_Log

> jalog \_agen t
>
> jalog \_ser ve r.con f
>
> Jat oba Dat a Safe - Even t List
>
> ja_log
>
> jd sd b
>
> jalog \_agent .con f
>
> Рисунок 3.52 – Схема взаимодействия компонентов
>
> В процессе работы «ja_CSum» записывает сгенерированные события безопасности в СУБД (в хранилище событий).
>
> Компонент централизованного сбора записей событий СУБД «ja_Log», получив указание от сервера, собирает события безопасности базы данных «ja_Log» в служебную СУБД компонента «Jatoba data safe».
>
> Из базы данных события безопасности передаются в пользовательский веб-интерфейс для администраторов компонента «JDS», который передает события безопасности в разделе «Event List».
>
> Отфильтровать события безопасности можно при помощи текстового поиска, как представлено на рисунке [3.53](#_bookmark67).
>
> <span id="_bookmark67" class="anchor"></span>Рисунок 3.53 – Отображение событий безопасности в веб-интерфейсе

## Обфускации кода

> Компонент обфускации кода PL/pgSQL добавляет в СУБД новый язык plspgsql, обеспечивающий разработчику дополнительные функции безопасности при создании хранимых процедур.
>
> В состав СУБД «Jatoba» включена утилита обфускации wplpgsql, которая создает в dst-dir обфусцированную версию src-dir с заменой процедур и функций с языка 'plpgsql' на 'plspgsql'.
>
> Утилита обфускации использует серверную часть СУБД для обфускации отдельных SQL-команд.
>
> Процесс сокрытия исходных текстов, процедур и функций в СУБД «Jatoba» отображен на рисунке [3.54](#_bookmark69).

Сег м ен т р азр або тк и

Пр ом ы шле нный сегм ент

DEV DB

PRO D D B

Cryp t o p r ovid er

П р е обр аз ов ан и е для к о мп и ля ци и

Cryp t o p r ovid er

Отк р ы ты й тек ст п роцедуры\\ фун к ц и и

Зак р ы ты й тек ст п роцедуры\\ фун к ц и и

П ер едача фай ла зак аз чи к у (ди стр и бути в)

Зак р ы ты й тек ст п роцедуры\\ фун к ц и и

Develop er

In t eg rat or

DBA , SA

> Обфуск аци я
>
> К оди р о ван и е
>
> Вер и фи к аци я си н так си са plpgsql

К ом п и ляц и я

> К ом п и ляц и я
>
> Вер и фи к аци я си н так си са
>
> plpgsql
>
> <span id="_bookmark69" class="anchor"></span>Рисунок 3.54 – Процесс сокрытия процедур и функций в СУБД «Jatoba»

## Формирование HTTP/HTTPS запросов из СУБД

> Компонент формирования HTTP/HTTPS запросов из СУБД «pgSQL-HTTP» поддерживает формирование HTTP-запросов (http_request) к СУБД и формирование HTTP-ответов (http_response) из СУБД.
>
> В частности, поддерживает функции:

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

## Например

> Для отправки простого документа JSON на веб-сервер формируется SQL-команда:

<img src="../docs/assets/images/com18.3.1/describe/media/image390.png" style="width:6.73318in;height:2.02583in" />

> SELECT status, content_type, content::json-\>\>'data' AS data FROM http_patch('[http://httpbin.org/patch'](http://httpbin.org/patch%27),
>
> '{"this":"that"}', 'application/json');
>
> <span id="_bookmark71" class="anchor"></span>Рисунок 3.55 – Отправка простого документа JSON

## Компрессия данных. Компонент «ja_Сompression»

> Компонент «ja_Сompression» предназначен для экономии имеющегося дискового пространства физического сервера СУБД.
>
> Для каждой таблицы СУБД «Jatoba», соответствуют определённые файлы на диске. В файлы данные поступают в следующих обстоятельствах: после операций commit, checkpoint и вытеснения буфера из памяти на диск.
>
> Табличные пространства стоят выше по иерархии чем БД, поэтому возможны следующие варианты использования компрессии:
>
> − табличные пространства с компрессией;
>
> Все включенные и/или перенесенные таблицы, индексы и БД будут подвергнуты компрессии:

- таблицы с компрессией;

- индексы с компрессией.

> Компонент совместим с БД 1С и может использоваться с любыми конфигурациями.
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Компонент «ja_Сompression» может использоваться с СУБД «Jatoba» версий
>
> 6.x и выше, под управлением операционной системы GNU/Linux

## Полнотекстовый поиск и определение похожих текстов

> Компонент «ja_Similar» предназначен для предоставления функции и операторы для определения схожести текстов на основе техники хеширования, чувствительного к близким значениям (Locally-Sensitive Hashing, или LSH).
>
> Решение такого типа задачи ранее не было доступно в PostgreSQL. С помощью этого расширения решаются типы задач:

- поиск плагиата;

- сравнение содержания статей;

- дедупликация документов;

- поиск аномалий в типовых документах;

- сравнение с эталоном на схожесть.

> Загружая в БД искомый текст и дамп текстов, применяя стандартный SQL-запрос получается список статей, содержимое которых имеет схожесть с нашим искомым куском текста, и эту самую расчетную схожесть.
>
> SELECT t.id, minhash_similarity(t.text_col, :'query_text') AS similarity
>
> FROM user_tbl AS t
>
> WHERE t.content \<~\> :'query_text' ORDER BY similarity DESC;
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image391.png" style="width:6.63988in;height:2.29333in" />
>
> Рисунок 3.56 – Запрос и вывод схожести текстов
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Компонент «ja_Similar» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционной системы GNU/Linux

## Проверка орфографии и морфологический анализ. Компонент

## «hunspell»

> Компонент «hunspell» - это свободная библиотека для проверки орфографии и морфологического анализа.
>
> обеспечивает:

- Проверку правописания;

- Поддержку множества языков за счёт внешних словарей.

> При совместном использовании компонентов «tsvector2» и «hunspell» доступно:

- Искать слово в любом падеже (например, «проверка» → найдёт и

> «проверки», и «проверку»);

- Игнорировать стоп-слова (если они заданы в конфигурации);

- Строить эффективные индексы для быстрого поиска.

> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.24999in" />Компонент «tsvector2» и «hunspell» не поддерживается в СУБД «Jatoba» с версией ядра «4»

## Поиск ближайших соседей (KNN для B-TREE)

> Метод K-ближайших соседей (K-nearest neighbors, KNN) — это метод, используемый для решения задач классификации и регрессии. KNN основан на идее,
>
> что объекты, которые находятся рядом в пространстве признаков, вероятно относятся к одной категории.
>
> При использовании KNN для классификации нового объекта вычисляются расстояния до всех известных объектов в наборе. Затем выбирается K объектов с наименьшими расстояниями (ближайшие соседи).
>
> Области применения метода KNN:

- предварительная обработка данных;

- механизмы рекомендаций;

- финансы: (прогнозирование фондового рынка, курсы валют, торговые фьючерсы и анализ отмывания денег);

- здравоохранение;

- распознавание образов: (идентификация шаблонов, например, при классификации текста и цифр).

> Когда выполняется поиск на основе этого индекса, он проходит вниз по дереву, чтобы найти ключ, по которому дерево построено, а затем возвращает искомые данные. Использование индекса гораздо быстрее, чем последовательное сканирование.
>
> ли стья

13

7/

Внутр енни е узлы (p ivot s)

23 31 43

2 3 5

7 11

13 17 19 23 29

31 37 41 43 47

к ор теж и

к ор теж и

к ор теж и

к ор теж и

к ор теж и

к ор теж и

> Рисунок 3.57 – K Nearest Neighbors для B-tree
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.24999in" />Патч ядра «KNN» не поддерживается в СУБД «Jatoba» с версией ядра «18»

## 64-битный счетчик транзакций. Компонент XID64

> Для обеспечения работы механизма MVCC (управление параллельным доступом посредством многоверсионности транзакций) СУБД «Jatoba» отслеживает, какие транзакции уже завершены, а какие еще активны.
>
> Для этого каждой транзакции в СУБД «Jatoba» присваивается уникальный номер — идентификатор (xid). Его можно узнать, используя функцию txid_current().
>
> Применяемый 64-битный счетчик транзакции xid64 в СУБД «Jatoba» в условиях высокой транзакционной нагрузки, позволяет избежать его «переполнения» (как в случае использования 32-битного счетчика и риска остановки работы БД) и дает гораздо большую свободу администраторам БД.
>
> <img src="../docs/assets/images/com18.3.1/describe/media/image6.png" style="width:0.25in;height:0.25in" />Компонент «XID64» не поддерживается в СУБД «Jatoba» с версией ядра «4» и
>
> «18»

## Инвентаризация СУБД. Компонент «ja_Inventory»

> Компонент «ja_Inventory» предназначен для сбора информации об установленных СУБД «Jatoba» в форме отчета в формате JSON. В отчет включается информация о:

- версии СУБД;

- количествах ядер сервера;

- используемых расширениях.

> Отчет имеет вид, показанный на рисунке [3.58](#_bookmark78).
>
> <span id="_bookmark77" class="anchor"><span id="_bookmark78" class="anchor"></span></span>Рисунок 3.58 – Вид отчета о хосте

## Разрешение (запрет) действий пользователей, разрешенных до идентификации и аутентификации

> Выполнение условий эксплуатации, в частности исключение применения метода аутентификации «Trust», который предполагает, что любой подключающийся к серверу пользователь авторизован для доступа к базе данных вне зависимости от указанного имени пользователя базы данных, позволяет запретить любые действия пользователей, разрешенных до идентификации и аутентификации.

# ПРИЛОЖЕНИЕ 1

(обязательное)

## Реализуемые функции СУБД

> СУБД «Jatoba» реализует следующие функциональные возможности:
>
> а) управление данными во внешней памяти;
>
> б) управление данными в оперативной памяти;
>
> в) выполнение запросов (DDL/DML);
>
> г) управление транзакциями;
>
> д) журнализация изменений, резервное копирование и восстановление базы данных после сбоев, репликация.
>
> В дополнение к стандартным возможностям управления базами данных, реализует следующие функции:
>
> а) хранение пространственных, географических и геометрических данных, поддержка запросов к ним и управление ими;
>
> б) синтаксическая совместимость с распространенными PL/SQL Oracle; в) расширенные возможности секционирования больших таблиц;
>
> г) протоколирование, анализ и запрет выполнения команд манипулирования данными (DDL/DML);
>
> д) сбор журналов аудита всех операций и загрузка конфигураций в СУБД; е) журналирование операций доступа к защищенным таблицам;
>
> ж) работа в составе отказоустойчивого кластера с механизмом переключения нагрузки на основной узел кластера;
>
> з) защита от несанкционированного изменения конфигурационных файлов; и) единый пользовательский интерфейс для управления конфигурациями
>
> компонентов СУБД и просмотра их состояния.
>
> к) поддержка предустановленных профилей парольных политик:

- FSTEC_1_class – профиль для ИС первого класса защищенности;

- FSTEC_2_class – профиль для ИС второго класса защищенности;

- CIS – профиль, основанный на рекомендациях Center for Internet Security;

- Corporate_1 – корпоративный профиль первого уровня для учетных записей пользователей;

- Corporate_2 – корпоративный профиль второго уровня, для учетных записей администраторов программных (программно-аппаратных средств);

- Corporate_3 – корпоративный профиль третьего уровня для, технических (сервисных, служебных) учетных записей, используемых в технологических

> процессах ИС или встроенных производителями программных (программно-аппаратных) средств в такие средства.
>
> л) СУБД «Jatoba» поддерживает методы аутентификации:

- PASSWORD, MD5, SCRAM-SHA-256;

- GSSAPI / SSPI (Kerberos);

- Ident;

- Peer;

- LDAP (LDAPS);

- PAM;

- RADIUS;

- OAuth (только для версии J18);

- Certificate.

> м) синхронизация УЗ со службой каталогов/доменов (Active Directory, FreeIPA, ALD Pro, Samba).
>
> н) ограничение создания ролей администраторами БД/СУБД.
>
> о) создание защищенных таблиц, ограничивающих доступ суперпользователей СУБД.
>
> п) полнотекстовый поиск и определение похожих текстов.

## Основные функциональные возможности управления базами данных

> СУБД «Jatoba» обладает следующими характеристиками:

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

> запрос.

15) Поддержка Views – представления, виртуальные таблицы.

16) Поддержка Cursors – курсоры, позволяющие уменьшить трафик между

> клиентом и сервером.

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

> СУБД.

33) Поддержка функциональных возможностей OLAP.

34) Поддержка механизмов прямой и обратной сортировки.

35) Поддержка механизмов сортировки по пользовательскому словарю.

36) Наличие средств мониторинга экземпляра БД в разрезе событий, сессией,

> процессов.

37) Поддержка параллельного экспорта/импорта данных.

> 38\) +Поддерживаемая гранулярности экспорта/импорта (при выполнении экспорта/импорта существует возможность экспортировать/импортировать как всю БД, так и отдельные схемы, таблицы, данные, метаданные).

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

> В части управления базами данных в СУБД «Jatoba» реализует следующие функциональные возможности:
>
> Таблица 1.1 – Перечень функциональных возможностей

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
<th colspan="4"><blockquote>
<p><strong>Версия ядра</strong></p>
</blockquote></th>
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
<td><blockquote>
<p><strong>Backend</strong></p>
</blockquote></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>64-битные большие объекты</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Рекомендуемые блокировки</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Пользовательские фоновые процессы</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Дисковая карта свободного пространства</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Динамические фоновые процессы</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка EXPLAIN (BUFFERS)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка EXPLAIN (MEMORY)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка EXPLAIN (SERIALIZE)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка EXPLAIN (WAL)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Формат журнала логов jsonlog</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Загружаемая инфраструктура плагинов для мониторинга планировщика</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка полезной нагрузки для LISTEN/NOTIFY</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Системное представление - pg_stat_checkpointer</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Представление метрик ввода-вывода - pg_stat_io</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Системное представление pg_wait_events</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Статистика сервера в разделяемой памяти</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Информационная схема, соответствующая стандарту SQL</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка анонимной разделяемой памяти</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Вывод команды EXPLAIN в форматах XML, JSON и YAML.</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Типы данных, функции и операторы</strong></p>
</blockquote></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Массивы составных типов</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка массивов</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Тип данных ENUM</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Тип данных GUID/UUID</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Тип данных macaddr8</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Многодиапазонный тип</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Нулевые значения в массиве</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поиск по фразе</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Диапазонный тип</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Тип smallserial</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка модификатора типов</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Тип UUIDv7</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Тип данных XML</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Индексы и ограничения</strong></p>
</blockquote></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Индексы BRIN</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Удаление индекса B-tree снизу вверх</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Дедупликация B-tree индексов</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Индексы GiST с поддержкой Concurrenrly</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Покрывающие индексы B-tree (INCLUDE)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Покрывающие индексы GiST (INCLUDE)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Отложенные уникальные ограничения</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Ограничения исключений</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Индексы GIN</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Частичное совпадение индексов GIN</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Улучшения производительности и размера индекса GIN</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Индексы GiST</p>
</blockquote></td>
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
<th colspan="4"><blockquote>
<p><strong>Версия ядра</strong></p>
</blockquote></th>
<th rowspan="52"></th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Индексы выражений</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Сканирование только индекса</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Сканирование только индекса GiST</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка индексов для IS NULL</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Bitmap индексы в оперативной памяти</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка метода k-ближайших соседей GiST</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка метода k-ближайших соседей SP-GiST</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Неблокирующий CREATE INDEX</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Параллельное сканирование индексов B-деревьев</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Параллельное выполнение команды CREATE INDEX для BRIN индексов</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Параллельное выполнение команды CREATE INDEX для B-tree индексов</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Параллельное выполнение команды CREATE INDEX для GIN индексов</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Пропуск сканирования многоколоночных B-tree индексов</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Пространственно-разделенные индексы GiST (SP-GiST)</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Индексы SP-GiST для диапазонных типов</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка UNIQUE NULLS NOT DISTINCT</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка WAL для хэш-индексов</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p><strong>Язык SQL</strong></p>
</blockquote></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Агрегатная функция ANY_VALUE</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка оператора FETCH FIRST .. WITH TIES</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка группировки GROUPING SETS, CUBE and ROLLUP</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка операторов INSERT/UPDATE/DELETE RETURNING</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Предложение LATERAL</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка MERGE</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка MERGE... RETURNING</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Многострочные VALUE</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Целочисленные литералы, не являющиеся десятичными числами</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка сортировки ORDER BY NULLS FIRST/LAST</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Агрегатная функция по диапазонному типу range_agg</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Рекурсивные запросы</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка функций regexp_count, regexp_instr, regexp_like</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Возврат OLD и NEW значений из измененных строк</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Построчное сравнение</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Режим блокировки SELECT FOR NO KEY UPDATE/SELECT FOR KEY SHARE</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>SQL-стандарт обработка интервалов</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Пользователь SYSTEM_USER</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Оператор TABLE</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Подчеркивания (_) используется в качестве разделителей тысяч</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка функций unnest/array_agg</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка оператора Upsert (INSERT ... ON CONFLICT DO ...)</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Оконные функции</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка оператора WITHIN GROUP</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка оператора WITH ORDINALITY</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Запросы с оператором WITH (общие табличные выражения)</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Запросы с возможностью записи с использованием оператора WITH (общие табличные выражения)</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p><strong>DDL</strong></p>
</blockquote></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>ALTER &lt;объект&gt; IF EXIST</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>ALTER TABLE ... ADD UNIQUE/PRIMARY KEY USING INDEX</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>ALTER TABLE ... SET ACCESS METHOD</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>ALTER TABLE ... SET LOGGED / UNLOGGED</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
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
<td colspan="6"><blockquote>
<p>Дата внесения изм.:</p>
</blockquote></td>
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
<th colspan="4" style="text-align: center;"><blockquote>
<p><strong>Версия ядра</strong></p>
</blockquote></th>
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
<td><blockquote>
<p>Изменение типов столбцов (ALTER TABLE .. ALTER COLUMN TYPE)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>CREATE ACCESS METHOD</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>CREATE TABLE ... (LIKE) с использованием внешних таблиц, представлений и составных типов</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>DROP &lt;объект&gt; IF EXISTS</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>ON COMMITв предложении для CREATE TEMPORARY TABLE</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>REINDEX CONCURRENTLY</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Сохранение сгенерированных столбцов</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Временные ограничения (temporal)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Типизированные таблицы</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Виртуальные сгенерированные столбцы</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Производительность</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Сокращенные ключи</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Асинхронная фиксация</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Асинхронный ввод-вывод (AIO)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Автоматическая аннулирование плана</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Фоновый процесс создания контрольных точек (Background Checkpointer)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Фоновый процесс записи данных на диск (Background Writer)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Регулирование скорости резервного копирования</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>CREATE STATISTICS - наиболее часто встречающихся значений (MCV) статистики</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>CREATE STATISTICS - многоколоночная</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>CREATE STATISTICS - статистика "OR" и "IN/ANY"</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка перекрестного хэширования типов данных</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Распределенное создание контрольных точек</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Отметка внешних ключей как NOT VALID</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Карта замороженных страниц</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Полнотекстовый поиск</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Для агрегирования хеш-функций можно использовать дисковое пространство</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка хеширования для DISTINCT/UNION/INTERSECT/EXCEPT</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка хеширования для FULL OUTER JOIN, LEFT OUTER JOIN и</p>
<p>RIGHT OUTER JOIN</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Кортежи только с кучей (HOT)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Улучшенная производительность для сортировок, превышающих объем work_mem</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Улучшена производительность оконных функций</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Пошаговая сортировка</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Пошаговая сортировка для SELECT DISTINCT</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Пошаговая сортировка для оконных функций</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Встроенные запросы WITH (общие табличные выражения)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Встраивание SQL-функций</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Компиляция «на лету» (JIT) для оценки выражений и деформации кортежей</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Балансировка нагрузки для libpq/psql</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Сжатие LZ4 для таблиц TOAST</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Масштабируемость многоядерных процессоров для рабочих нагрузок только чтение</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Несколько временных табличных пространств</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Переупорядочивание внешнего соединения</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Параллельное сканирование кучи битовых карт</p>
</blockquote></td>
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
<th colspan="4" style="text-align: center;"><blockquote>
<p><strong>Версия ядра</strong></p>
</blockquote></th>
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
<td><blockquote>
<p>Параллельные FULL и RIGHT соединения</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Параллельное сканирование всей таблицы (последовательное</p>
<p>сканирование)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Параллельные хеш-соединения</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Агрегирование параллельного соединения (JOIN)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Параллельные слияния</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Параллельный запрос</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Параллельный "SELECT DISTINCT"</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Возможность частичной сортировки (top-n sorting)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Конвейерный режим обработки запросов</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Снижен уровень блокировки для команд ALTER TABLE</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>SELECT ... FOR UPDATE/SHARE NOWAIT</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Установка индивидуальной стоимости для табличных пространств CREATE/ALTER TABLESPACE ... SET (seq_page_cost = ...,</p>
<p>random_page_cost = ...)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Общая блокировка на уровне строк</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка SIMD для ARM</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка SIMD для x86</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Предложение SKIP LOCKED</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Синхронизированное последовательное сканирование</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Предложение TABLESAMPLE</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Табличные пространства</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Нежурналируемые таблицы</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Автоматическая настройка размера WAL-буфера</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>JSON</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Улучшен набор функций и операторов для работы с JSON.</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Тип данных JSONB</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Операторы и функции, изменяющие JSONB</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Использование синтаксиса JSONB</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Тип данных JSON</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Конструкторы SQL/JSON</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Функция SQL/JSON: datetime()</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Предикат SQL/JSON IS JSON</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Предикат SQL/JSON JSON_TABLE</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Предикаты путей SQL/JSON</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Функции для выполнения запросов SQL/JSON</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Секционирование и наследование</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Ускоренное удаление секций</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Декларативное секционирование таблиц</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Секционирование по умолчанию</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Ссылки на внешние ключи для секционированных таблиц</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Наследование внешней таблицы</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Секционирование данных по хеш-ключу</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Удаление секций во время выполнения запроса</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка первичных ключей, внешних ключей, индексов и триггеров для секционированных таблиц.</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Секционирование таблиц</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>UPDATE по ключу секционирования</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Представления и материализованные представления</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Материализованные представления</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Обновление материализованных представлений без блокировки</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Представление SECURITY INVOKER</p>
</blockquote></td>
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
<th colspan="4" style="text-align: center;"><blockquote>
<p><strong>Версия ядра</strong></p>
</blockquote></th>
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
<td><blockquote>
<p>Временные (temporary) представления</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Обновляемые представления</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Предложение WITH CHECK</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Репликация</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>ALTER SUBSCRIPTION ... SKIP</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Каскадная потоковая репликация</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Настройка максимальный размера WAL для слотов репликации</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка отказоустойчивости для слотов логической репликации</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Логическая репликация</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Логическая репликация с предотвращением зацикливания репликации</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Списки столбцов логической репликации</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Логическая репликация для секционированных таблиц</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Логическая репликация из резервных копий</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Логическая репликация сохраненных сгенерированных столбцов</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Логическая репликация, начальная синхронизация с использованием бинарного протокола</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Логическая репликация запросов с использованием дополнительных индексов</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Логическая репликация, параллельное применение транзакций</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Логическая репликация, публикация всех таблиц в схеме</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Фильтрация строк логической репликации</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Логические слоты репликации мигрируют с помощью pg_upgrade</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Потоковая логическая репликация</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Возможность "Подписчика" логической репликации отключиться при</p>
<p>возникновении ошибки</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Журналирование конфликтов логической репликации</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Фиксация кворума для синхронной репликации</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Слоты репликации</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Каскадная репликация только для потоковой передачи</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Потоковая репликация</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Синхронная репликация</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Резервное копирование, восстановление и целостность данных</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Модули архивирования</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Контрольная сумма страниц данных</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Включение/отключение контрольных сумм страниц в автономном кластере</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Унифицированные записи WAL</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Режим горячего ожидания</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Сжатие lz4 и Zstandard (zstd) для записи полных страниц WAL.</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Параметр min_wal_size / max_wal_size</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка множества синхронных реплик</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Именованные точки восстановления</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Параллельный pg_dump</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Параллельное восстановление</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>pg_basebackup распаковка сжатой копии на клиенте</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>pg_basebackup инкрементальное резервное копирование</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>pg_basebackup сжатие на стороне сервера</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>инструмент pg_basebackup</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Опция для pg_dump, pg_dumpall, pg_restore --filler</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Утилита pg_receivewal (ранее pg_receivexlog)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Восстановление на определенный момент времени (PITR)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Предварительная загрузка WAL во время восстановления</p>
</blockquote></td>
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
<th colspan="4" style="text-align: center;"><blockquote>
<p><strong>Версия ядра</strong></p>
</blockquote></th>
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
<td><blockquote>
<p>Режим remote_apply</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Параметр задержки применения репликации по времени в режиме</p>
<p>ожидания - recovery_min_apply_delay</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Проверка целостности резервной копии (pg_verifybackup)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>"Теплый режим" ожидания</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Обновление</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Опция для pg_upgrade --swap</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Статистика планировщика сохраняется при обновлении до мажорной версии</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Импорт и экспорт данных</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка COPY в/из STDIN/STDOUT</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка COPY FROM ... WHERE</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка COPY ... ON_ERROR</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка COPY с произвольным SELECT</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка CSV для COPY</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Управление конфигурацией</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка ALTER SYSTEM</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Ввод дробных значений для целых чисел</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Директива включения (include) в файлы pg_hba.conf и pg_ident.conf</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Настройки конфигурации для каждого пользователя/сервера базы</p>
<p>данных ALTER ROLE/DATABASE</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Системное представление pg_config</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Регулярные выражения в файлах pg_hba.conf и pg_ident.conf</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Безопасность</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Проверка подлинности канала SCRAM</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Требование клиента проверки подлинности канала SCRAM</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Требования к аутентификации, заданные клиентом</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Права доступа на уровне столбцов</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Права доступа по умолчанию</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Прямое согласование по протоколу TLS ("sslnegotiation")</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка режима FIPS</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Операторы GRANT/REVOKE ON ALL TABLES/SEQUENCES/FUNCTIONS</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Защита соединения на стороне клиента и сервера с использованием GSSAPI</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка GSSAPI</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Делегирование учетных данных Kerberos</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Аутентификация krb5 (без gssapi) не поддерживается</p>
</blockquote></td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Контроль доступа к большим объектам</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Обнаружение LDAP-сервера</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Двухсторонняя аутентификация с использованием действительного клиентского SSL/TLS-сертификата</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Встроенная аутентификация LDAP</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Встроенная аутентификация RADIUS</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Аутентификация/авторизация OAuth</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Ограничения на подключение для каждого "пользователь/база данных"</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Предопределенные роли</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Права доступа к настройке параметров конфигурации</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Ролевая модель (ROLES)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Безопасность на уровне строк (RLS)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Аутентификация SCRAM-SHA-256</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Режим поиска и привязки для аутентификации LDAP</p>
</blockquote></td>
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
<th colspan="4"><blockquote>
<p><strong>Версия ядра</strong></p>
</blockquote></th>
<th rowspan="53"></th>
</tr>
<tr>
<th style="text-align: center;"><strong>J18</strong></th>
<th style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>J5</strong></th>
<th style="text-align: center;"><strong>J4</strong></th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Опция security_barrier в представлениях</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Интерфейс поставщика услуг безопасности (SSPI)</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Защита аутентификационной информации с помощью SHA-2</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Проверка SSL-сертификатов в libpq</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Аутентификация с помощью клиентского SSL-сертификата</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Аутентификация SSPI через GSSAPI</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка использования доверенного центра сертификации операционной системы клиента.</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка наборов алгоритмов для защиты соединений TLS версии 1.3</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p><strong>Транзакции и видимость</strong></p>
</blockquote></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Курсоры</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Точки сохранения</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Уровень изоляция Serializable Snapshot</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Двухфазная фиксация транзакций</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Обновляемые курсоры</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p><strong>Автоочистка и техническое обслуживание</strong></p>
</blockquote></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Вставка данные может запустить автоматическую очистку</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Встроенный демон автоочистки</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Оптимизация заморозки страниц</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Параллельный VACUUM для индексов</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Параллельные задания vacuumDB</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Древовидная структура памяти для очистки</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Очистка в «аварийном режиме»</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Карта видимости для очистки</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p><strong>Внешние обертки данных (FDW)</strong></p>
</blockquote></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Аутентификация с помощью сертификата для postgres_fdw</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Оператор CREATE FOREIGN TABLE ... LIKE</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Параллелизм запросов с использованием внешней обертки данных</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Доступ к внешней обертки данных</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Внешние таблицы</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Оператор IMPORT FOREIGN SCHEMA</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Импорт разделов внешних таблиц</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Параллельное выполнение запросов к удаленным базам данных</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка для postgres_fdw параллельной фиксация транзакций</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Выполнение запросов postgres_fdw на внешнем сервере</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Сквозная аутентификация SCRAM для postgres_fdw</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
<th style="text-align: center;">-</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Внешние обертки данных для PostgreSQL</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Записываемые внешние обертки данных</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p><strong>Пользовательские функции, хранимые процедуры и триггеры</strong></p>
</blockquote></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Оператор ALTER TABLE ENABLE/DISABLE TRIGGER</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>ОператорALTER TABLE / ENABLE REPLICA TRIGGER/RULE</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Оператор BEGIN ATOMIC тела функции</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Синтаксис CALL для выполнения процедур</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Триггеры на уровне столбцов</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Синтаксис CREATE PROCEDURE для хранимых процедур SQL</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Триггеры событий</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Предложение FILTER для агрегатных функций</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Поддержка ORDER BY внутри агрегации</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Параметры GUC для каждой функции</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Статистика для функций</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Оператор RETURN QUERY EXECUTE</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
</tr>
<tr>
<th colspan="3"><blockquote>
<p>Оператор RETURNS TABLE</p>
</blockquote></th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
<th style="text-align: center;">+</th>
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
<td colspan="6"><blockquote>
<p>Дата внесения изм.:</p>
</blockquote></td>
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
<th colspan="4" style="text-align: center;"><blockquote>
<p><strong>Версия ядра</strong></p>
</blockquote></th>
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
<td><blockquote>
<p>Триггеры на уровне оператора</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Триггеры TRUNCATE на уровне оператора</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Триггеры в представлениях</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Вариативные функции</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Условие WHEN для триггера CREATE</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Процедурные языки</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Оператор CASE в pl/pgsql</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Оператор CONTINUE для PL/pgSQL</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Оператор CREATE TRANSFORM</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Оператор DO для pl/perl</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Оператор DO для PL/PGSQL</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка исключений в PL/pgSQL</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>ОператорEXECUTE USING в PL/pgSQL</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Оператор FOREACH IN ARRAY в pl/pgsql</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Параметры IN/OUT/INOUT для PL/PGSQL и PL/SQL</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Именованные параметры</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Создание процедурного языка без прав суперпользователя</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Язык pl/pgsql используется по умолчанию</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Полиморфные функции</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка Python 3 для pl/python</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Квалифицированные параметры функций</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Параллельная обработка запросов для RETURN QUERY</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Оператор RETURN QUERY в pl/pgsql</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Указание параметров ROWS и COST для функций</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка прокручиваемых и обновляемых курсоров для PL/PGSQL</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Оператор SQLERRM/SQLSTATE для pl/pgsql</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка объектов Unicode в PL/Python</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Пользовательские исключения</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Функция валидатора для PL/Perl</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Расширения</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Оператор CREATE EXTENSION ... CASCADE</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Установка расширения</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Доверенные расширения</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Интернационализация</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Встроенная, независимая от платформы неизменяемая сортировка</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Функция casefold</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка сопоставления на уровне столбцов</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Сортировка на уровне базы данных</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Сортировка ICU по умолчанию для кластеров/баз данных</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка EUC_JIS_2004/ SHIFT_JIS_2004</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Сортировка ICU</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Сравнения LIKE для недетерминированных параметров сортировки</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка многобайтового кодирования, включая UTF8</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка нескольких языков</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Недетерминированные сопоставления</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Сортировка pg_unicode_fast</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Строковые литералы и идентификаторы Unicode</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка UTF8 в Windows</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Клиентские приложения</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Тест производительности pgbench</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Утилита восстановления РК pg_combinebackup</p>
</blockquote></td>
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
<th colspan="4" style="text-align: center;"><blockquote>
<p><strong>Версия ядра</strong></p>
</blockquote></th>
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
<td><blockquote>
<p>Преобразование физической репликации в логическую pg_createsubscriber</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Предварительная загрузка данных отношений в кеш буферов pg_prewarm</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Синхронизация каталога данных pg_rewind</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Инициализации резервных копий pg_standby (не используется)</p>
</blockquote></td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Обновление экземпляра сервера pg_upgrade</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Вывод журнала WAL в удобочитаемом виде pg_waldump</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Вывод содержимого WAL файлов pg_walsummary</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>pg_xlogdump, заменен на pg_waldump (не используется)</p>
</blockquote></td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Установка нового соединения psql \bind</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Вывод списка параметров и значений конфигурации сервера psql \dconfig</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Конвейерные запросы psql</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Именованные подготовленные операторы psql</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка предыдущих версий psql</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Дополнительные модули (contrib)</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Набор инструментов поддержки pgAdmin - adminpack</p>
</blockquote></td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Задержка при ошибке аутентификации - auth_delay</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Автоматическая запись планов запросов - auto_explain</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Классы операторов GIN с поведением B-tree - btree_gin</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Классы операторов GIST с поведением B-tree btree_gist</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Nип данных для строк, нечувствительных к регистру - citex</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Подключение к другому серверу PostgreSQL - dblink</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка асинхронных уведомлений dblink</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Обращение к файлам данных - file_fdw</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Вычисление схожести и расстояния между строками - fuzzystrmatch</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Тип данных hstore для хранения пар ключ-значение - hstore</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Работа с целочисленными массивами - intarray</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>типы данных для международных стандартов нумерации (ISBN, EAN, UPC и т. д.) - isn (ISBN)</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка KNN для CUBE</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Тип данных для представления меток данных в иерархической древовидной структуре - ltree</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Низкоуровневое исследование страниц баз данных - pageinspect</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Проверка надежности пароля - passwordcheck</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Состояние буферного кеша - pg_buffercache</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Просмотр карты свободного пространства - pg_freespacemap</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Проверка компонентов логического декодирования - pg_logicalinspect</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Выгрузка дополнительной информации через команду EXPLAIN -</p>
<p>pg_overexplain</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Отслеживание статистики планирования и выполнения SQL-операторов</p>
<p>- pg_stat_statements</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Улучшенный pg_stat_statements</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Получение статистики на уровне кортежа - pgstattuple</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка определения схожести текста на основе триграмм - pg_trgm</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Индексирование регулярных выражений pg_trgm</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Просмотр журнала предзаписи на низком уровне - pg_walinspect</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Тип данных для отрезков или интервалов чисел с плавающей точкой - seg</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Проверка безопасности на базе политик SELinux для мандатного управления доступом- sepgsql</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Получение информации об SSL-сертификате клиента - sslinfo</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Функции, возвращающие таблицы - tablefunc</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Триггерная функция, уведомляющая об изменениях в таблице - tcn</p>
</blockquote></td>
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
<th colspan="4" style="text-align: center;"><blockquote>
<p><strong>Версия ядра</strong></p>
</blockquote></th>
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
<td><blockquote>
<p>Обертка совместимости tsearch2 (не поддерживается)</p>
</blockquote></td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Словарь текстового поиска, который убирает диакритические знаки -</p>
<p>unaccent</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Генератор UUID - uuid-ossp</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>xml2 (не поддерживается)</p>
</blockquote></td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Сеть</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Полная поддержка SSL</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка IPv6</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Протокол клиента V2</p>
</blockquote></td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
<td style="text-align: center;">-</td>
</tr>
<tr>
<td><blockquote>
<p>Протокол клиента V3</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p><strong>Поддерживаемые платформы</strong></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка Microsoft Visual C++</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Портированная версия для Windows</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка спин-блокировок для аппаратной платформы SuperH</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Компилятор Sun Studio на Linux</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка Windows x64</p>
</blockquote></td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
<td style="text-align: center;">+</td>
</tr>
</tbody>
</table>

## Поддерживаемые типы данных

> СУБД «Jatoba» поддерживает следующие типы данных:

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

> СУБД обеспечивает возможность добавления новых типов данных, функций, операторов, методов доступа, языков программирования без перекомпилирования ядра системы и остановки сервера.

## Поддерживаемые типы индексов

> СУБД поддерживает следующие типы индексов:

1)  Стандартные индексы – B-tree, hash, GiST (обобщенное поисковое дерево, R-tree, ranked B+-trees, partial sum trees), SP-GiST, GIN (обобщенный инвертированный индекс), BRIN.

2)  Составные индексы: индексы по нескольким столбцам таблицы.

3)  Индексы ORDER BY: для сортировки строк в определённом порядке.

4)  Объединение нескольких индексов: возможность объединять несколько индексов (включая многократное использование одного и того же индекса) для обработки случаев, которые невозможно реализовать с помощью сканирования одного индекса.

5)  Уникальные индексы: для обеспечения уникальности значения столбца или уникальности комбинированных значений нескольких столбцов.

6)  Индексы выражений — это индексы, вычисленные на основе одного или нескольких столбцов таблицы.

7)  Частичные индексы — это индексы, построенные на подмножестве таблицы.

8)  Сканирование только индекса (Index-Only Scans) и покрывающие индексы (Covering Indexes).

9)  Индексы типа «битовая карта».

> Поддержка технологий расширенного индексирования (поддержка секционированных индексов, индексирование XML и т.д.).
>
> Поддержка индексов типа «битовая карта» или аналогичных механизмов для эффективной обработки данных с низкой кардинальностью.

## Поддерживаемые методы стандартизации и унификации

> СУБД поддерживает следующие кодировки и унифицированные интерфейсы:

1)  Доступ к данным по интерфейсу ODBC/JDBC.

2)  Клиентские интерфейсы Libpq и ECPG.

3)  Поддержка кодировок UTF8, WIN866, WIN1251 и др.

> СУБД поддерживает стандарт SQL ISO/IEC 9075:2023, начиная от ISO/IEC 9075:2008.
>
> СУБД обеспечивает поддержку хранения и обработки запросов к пространственным данным с помощью встроенных операторов (в том числе в соответствие со стандартами OGC (ISO 19125-1:2004 и ISO 19125-2:2004). Поддержка картографических проекций, инструментов и SQL-выражений работы с пространственными данными, включая перепроецирование, встроенные операторы (пересечение, включение и т.п.) и пространственные индексы.
>
> СУБД поддерживает языковые стандарты средствами локали предоставляемые операционной системой сервера.

## Расширенные функциональные возможности управления базами данных

> СУБД «Jatoba» обеспечивает:

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

## Механизм защиты подключений к системе управления базами данных

> СУБД «Jatoba» соответствует следующим требованиям к механизму защиты подключений к системе управления базами данных:

1)  Обрабатываемые команды DDL/DML должны проходить аудит и регистрироваться в журнале.

2)  Должен быть реализован сбор журналов аудита всех операций и загрузка конфигураций в СУБД.

## Среда функционирования СУБД

> Допускается установка СУБД «Jatoba» на ЭВМ, функционирующие под управлением ОС, указанных в таблице [1.2](#_bookmark88).
>
> <span id="_bookmark88" class="anchor"></span>Таблица 1.2 – Поддерживаемые операционные системы

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
<th rowspan="2" style="text-align: center;"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p><strong>Наименование ОС</strong></p>
</blockquote></th>
<th rowspan="2" style="text-align: center;"><blockquote>
<p><strong>Серверная часть</strong></p>
</blockquote></th>
<th rowspan="2" style="text-align: center;"><blockquote>
<p><strong>Клиентская часть</strong></p>
</blockquote></th>
<th rowspan="2" style="text-align: center;"><blockquote>
<p><strong>Docker (ver.)</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>Сертификат ФСТЭК</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>№ серт.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дата</strong></p>
<p><strong>выдачи</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>Windows 10</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>Windows 11</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>Windows Server 2016</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>Windows Server 2019</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>Windows Server 2022</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>6</p>
</blockquote></td>
<td><blockquote>
<p>Astra Linux 1.7 Special Edition Смоленск (x86-</p>
<p>64)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>25.0.5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2557</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>30.01.2012</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>7</p>
</blockquote></td>
<td><blockquote>
<p>Astra Linux 1.8 (x86-</p>
<p>64)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>8</p>
</blockquote></td>
<td><blockquote>
<p>Astra Linux 2.12 Сommon Edition Орел</p>
<p>(x86-64)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>24.0.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>9</p>
</blockquote></td>
<td><blockquote>
<p>Debian 11</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>24.0.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>10</p>
</blockquote></td>
<td><blockquote>
<p>Debian 12</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>27.1.1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>11</p>
</blockquote></td>
<td><blockquote>
<p>Альт 8 СП</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>27.1.1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3866</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>10.08.2018</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>12</p>
</blockquote></td>
<td><blockquote>
<p>Альт 9.1 Server</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>13</p>
</blockquote></td>
<td><blockquote>
<p>Альт 10 Server</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>23.0.1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>14</p>
</blockquote></td>
<td><blockquote>
<p>Ubuntu 20.04</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>24.0.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>15</p>
</blockquote></td>
<td><blockquote>
<p>Ubuntu 22.04</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>24.0.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>16</p>
</blockquote></td>
<td><blockquote>
<p>Ubuntu 24.04</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>24.0.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>17</p>
</blockquote></td>
<td><blockquote>
<p>ОСНОВА2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>20.10.5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4381</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>31.03.2021</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>18</p>
</blockquote></td>
<td><blockquote>
<p>РЕД ОС 7.3 Муром</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>20.10.1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4060</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>12.01.2019</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>19</p>
</blockquote></td>
<td><blockquote>
<p>РЕД ОС 8</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>20</p>
</blockquote></td>
<td><blockquote>
<p>РОСА 12.4</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>21</p>
</blockquote></td>
<td><blockquote>
<p>Oracle Linux 8</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
</tbody>
</table>

> СУБД «Jatoba» устанавливается на ЭВМ с процессорами, имеющими архитектуру x86-64, ARM64 и AMD64, удовлетворяющие следующим аппаратным требованиям, указанным в таблице [1.3](#_bookmark89).
>
> <span id="_bookmark89" class="anchor"></span>Таблица 1.3 – Аппаратные требования к ЭВМ, на которых фукционируют клиентская и серверная части СУБД

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 54%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Характеристика</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Серт-я ОС</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3" style="text-align: center;"><strong>Требования к аппаратному обеспечению сервера СУБД/JDS</strong></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>ОЗУ</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Не менее 2 Гб</p>
</blockquote></td>
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
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Характеристика</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Серт-я ОС</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Свободный объем</p>
<p>жесткого диска</p>
</blockquote></td>
<td><blockquote>
<p>Минимальный объем от 40 Гб</p>
<p>Рекомендуемый объем от 100 Гб</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Устройства видео вывода</p>
</blockquote></td>
<td><blockquote>
<p>Монитор и видеоадаптер с поддержкой VGA</p>
<p>и разрешением 800x600 или выше</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Тип процессора и</p>
<p>минимальная тактовая частота процессора</p>
</blockquote></td>
<td><blockquote>
<p>64-разрядный процессор Intel или AMD 3 ГГц или больше</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Минимальное количество</p>
<p>ядер</p>
</blockquote></td>
<td><blockquote>
<p>4</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Устройства ввода-вывода</p>
</blockquote></td>
<td><blockquote>
<p>Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB, либо PS/2</p>
<p>интерфейсами</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Адаптер Ethernet</p>
</blockquote></td>
<td><blockquote>
<p>100 Мбит/с</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><strong>Требования к аппаратному обеспечению АРМ управления</strong></td>
</tr>
<tr>
<td><blockquote>
<p>ОЗУ</p>
</blockquote></td>
<td><blockquote>
<p>Не менее 4 Гб</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Свободный объем</p>
<p>жесткого диска</p>
</blockquote></td>
<td><blockquote>
<p>От 3 Гб</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Устройства видео вывода</p>
</blockquote></td>
<td><blockquote>
<p>Монитор и видеоадаптер с поддержкой VGA</p>
<p>и разрешением 800x600 или выше</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Тип процессора и</p>
<p>минимальная тактовая частота процессора</p>
</blockquote></td>
<td><blockquote>
<p>64-разрядный процессор Intel или AMD Рекомендуемая частота: 2.4 ГГц или больше</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Устройства ввода-вывода</p>
</blockquote></td>
<td><blockquote>
<p>Стандартные 105-клавишная клавиатура и</p>
<p>манипулятор «мышь» с USB-интерфейсами либо PS/2 интерфейсами</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Адаптер Ethernet</p>
</blockquote></td>
<td><blockquote>
<p>100 Мбит/с</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>Требования к программному обеспечению сервера</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Операционная система</p>
</blockquote></td>
<td><blockquote>
<p>Требования приведены в таблице <a href="#_bookmark88">1.2</a></p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><strong>Требования к программному обеспечению АРМ управления</strong></td>
</tr>
<tr>
<td><blockquote>
<p>Операционная система</p>
</blockquote></td>
<td><blockquote>
<p>Требования приведены в таблице <a href="#_bookmark88">1.2</a></p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>Требования к программному обеспечению сервера JDS</strong></p>
</blockquote></td>
</tr>
<tr>
<td rowspan="3"><blockquote>
<p>Поддерживаемые платформы</p>
</blockquote></td>
<td><ul>
<li><p>win-x86;</p></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><ul>
<li><p>win-x64;</p></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><ul>
<li><p>linux-x64</p></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>СУБД</p>
</blockquote></td>
<td><blockquote>
<p>Защищенная система управления базами</p>
<p>данных «Jatoba»</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td rowspan="2"><blockquote>
<p>Веб-сервер</p>
</blockquote></td>
<td><blockquote>
<p>IIS 10</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>nginx</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
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
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Характеристика</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Серт-я ОС</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Компоненты</p>
</blockquote></td>
<td><blockquote>
<p>ASP.NET Core 6.0 Runtime (v6.0.1) –</p>
<p>Windows Hosting Bundle Installer</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td rowspan="5"><blockquote>
<p>Internet браузеры сертифицированных ОС</p>
</blockquote></td>
<td><ul>
<li><p>Google Chrome;</p></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><ul>
<li><p>Яндекс.Браузер;</p></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><ul>
<li><p>Chromium;</p></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><ul>
<li><p>Opera;</p></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><ul>
<li><p>Mozilla Firefox.</p></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Производительность СУБД

> СУБД должна обеспечивать требования по производительности, указанные в таблице [1.4](#_bookmark91).
>
> Таблица 1.4 – Требования к производительности СУБД

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
<th rowspan="3"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th rowspan="3"><blockquote>
<p><strong>Параметр производительности</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J4</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J5</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J6</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J18</strong></p>
</blockquote></th>
</tr>
<tr>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>Серверная часть,</strong></p>
<p><strong>исполнение</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>Серверная часть,</strong></p>
<p><strong>исполнение</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>Серверная часть,</strong></p>
<p><strong>исполнение</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>Серверная часть,</strong></p>
<p><strong>исполнение</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>Количество пользовательских сессий, поддерживаемых</p>
<p>параллельно</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>Количество обрабатываемых стандартных запросов</p>
<p>в единицу времени (сек)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>26180</p>
<p>(32</p>
<p>сессий)</p>
</blockquote></td>
<td><blockquote>
<p>39700</p>
<p>(64 сессий)</p>
</blockquote></td>
<td><blockquote>
<p>24710</p>
<p>(64 сессий)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>29255</p>
<p>(32</p>
<p>сессий)</p>
</blockquote></td>
<td><blockquote>
<p>25580</p>
<p>(64 сессий)</p>
</blockquote></td>
<td><blockquote>
<p>38470</p>
<p>(64 сессий)</p>
</blockquote></td>
<td><blockquote>
<p>24760</p>
<p>(32 сессий)</p>
</blockquote></td>
<td><blockquote>
<p>29255 (64</p>
<p>сессий)</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>Количество транзакций в единицу</p>
<p>времени (ед/сек)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>5236</p>
<p>(32 сессий)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>7940</p>
<p>(64 сессий)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4942</p>
<p>(64 сессий)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>5851</p>
<p>(32 сессий)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>5116</p>
<p>(64 сессий)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>7694</p>
<p>(64 сессий)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4952</p>
<p>(32 сессий)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>28860</p>
<p>(64 сессий)</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="6"><blockquote>
<p>4</p>
</blockquote></td>
<td rowspan="6"><blockquote>
<p>Задержка в выполнении стандартного запроса (мс)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>мин. 1,4</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>мин. 1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>мин. 1,5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>мин. 1,4</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>мин. 1,5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>мин. 1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>мин. 1,4</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>мин. 1,4</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>1 сессия</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1 сессия</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1 сессия</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1 сессия</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1 сессия</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1 сессия</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1 сессия</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1 сессия</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>макс. 492</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>макс. 293</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>макс. 556</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>макс. 457</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>макс. 551</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>макс. 273</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>макс. 531</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>макс. 397</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>1000</p>
<p>сессий</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1000 сессий</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1000 сессий</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
<p>сессий</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1000 сессий</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
<p>сессий</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1000 сессий</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
<p>сессий</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>6,1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>8,1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>13</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>5,5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>12,5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>8,3</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>6,5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>11,1</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>32 сессии</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>64 сессии</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>64 сессии</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>32 сессии</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>64 сессии</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>64 сессии</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>32 сессии</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>64 сессии</p>
</blockquote></td>
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
<th rowspan="3"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th rowspan="3"><blockquote>
<p><strong>Параметр производительности</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J4</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J5</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J6</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J18</strong></p>
</blockquote></th>
</tr>
<tr>
<th colspan="2"><blockquote>
<p><strong>Серверная часть, исполнение</strong></p>
</blockquote></th>
<th colspan="2"><blockquote>
<p><strong>Серверная часть, исполнение</strong></p>
</blockquote></th>
<th colspan="2"><blockquote>
<p><strong>Серверная часть, исполнение</strong></p>
</blockquote></th>
<th colspan="2"><blockquote>
<p><strong>Серверная часть, исполнение</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>Количество экземпляров системы управления базами данных, которые могут совместно работать в режиме балансировки</p>
<p>нагрузки</p>
</blockquote></td>
<td><blockquote>
<p>2 - 8</p>
</blockquote></td>
<td><blockquote>
<p>2 - 8</p>
</blockquote></td>
<td><blockquote>
<p>2 - 8</p>
</blockquote></td>
<td><blockquote>
<p>2 - 8</p>
</blockquote></td>
<td><blockquote>
<p>2 - 8</p>
</blockquote></td>
<td><blockquote>
<p>2 - 8</p>
</blockquote></td>
<td><blockquote>
<p>2 - 8</p>
</blockquote></td>
<td><blockquote>
<p>2 - 8</p>
</blockquote></td>
</tr>
</tbody>
</table>

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 7%" />
<col style="width: 79%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>DDL</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></th>
<th><blockquote>
<p>Data Definition Language, язык описания данных</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>DML</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Data Manipulation Language, язык манипулирования данными</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SQL</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Structured Query Language, язык структурированных запросов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>БД</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>База данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ГИС</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Государственные информационные системы</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Дист.</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Дистрибутив</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ИСПДн</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Информационная система персональных данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>КВО</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Критически важный объект</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>КИИ</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Критическая информационная инфраструктура</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Обр.к</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Образ контейнера</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ОС</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
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
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Система управления базами данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ФСТЭК</p>
<p>России</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Федеральная служба по техническому и экспортному контролю России</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ЭВМ</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Электронно-вычислительная машина</p>
</blockquote></td>
</tr>
</tbody>
</table>

# ЛИСТ РЕГИСТРАЦИИ ИЗМЕНЕНИЙ

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 9%" />
<col style="width: 10%" />
<col style="width: 11%" />
<col style="width: 17%" />
<col style="width: 10%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr>
<th rowspan="2"><blockquote>
<p>Изм</p>
</blockquote></th>
<th colspan="4"><blockquote>
<p>Номера листов (страниц)</p>
</blockquote></th>
<th rowspan="2" style="text-align: center;"><blockquote>
<p>Всего листов (страни</p>
<p>ц) в докум.</p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p>№ докум.</p>
</blockquote></th>
<th rowspan="2" style="text-align: center;"><blockquote>
<p>Входящий № сопроводител ь</p>
<p>ного докум. и дата</p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p>Подпис ь</p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p>Дата</p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p>измен ен ных</p>
</blockquote></th>
<th><blockquote>
<p>замене н ных</p>
</blockquote></th>
<th><blockquote>
<p>новых</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>аннули рован ных</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
