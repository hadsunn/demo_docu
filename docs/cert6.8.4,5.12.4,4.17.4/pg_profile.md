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
<p><strong>Руководство по настройке. Часть 6.<br />
Формирование отчетов производительности СУБД.<br />
Компонент «pg_Profile»</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-06</strong></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">Листов 77</td>
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

В документе приведены сведения, необходимые для настройки и использования компонента pg_Profile, который позволяет собирать и просматривать параметры и метрики системы управления базами данных «Jatoba» (далее – СУБД «Jatoba»). Настоящее руководство предназначено для администратора СУБД «Jatoba».

Администратор СУБД «Jatoba» должен иметь навыки по работе с системами управления базами данных (СУБД) PostgreSQL или защищенной СУБД «Jatoba» (ООО «Газинформсервис»).

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 5.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:</p>
<ul>
<li></li>
<li></li>
</ul>
<p>ОС Windows – «C:\Program Files\GIS\Jatoba\6\bin»;ОС Linux – «/usr/jatoba-6/bin».Для СУБД «Jatoba» версии ядра 4/5/6 используется версия компонента — 4.6</p></th>
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
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image2.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонента [7](#назначение-компонента)](#назначение-компонента)

[1.1. Функциональные возможности [7](#функциональные-возможности)](#функциональные-возможности)

[1.2. Условия применения [8](#условия-применения)](#условия-применения)

[2. Установка [9](#установка)](#установка)

[2.1. Установка компонента ОС GNU/Linux [9](#установка-компонента-ос-gnulinux)](#установка-компонента-ос-gnulinux)

[2.2. Рекомендованные настройки postgresql.conf [10](#рекомендованные-настройки-postgresql.conf)](#рекомендованные-настройки-postgresql.conf)

[2.3. Установка расширения pg_Profile [11](#установка-расширения-pg_profile)](#установка-расширения-pg_profile)

[2.3.1. Установка расширений в БД «postgres» [11](#установка-расширений-в-бд-postgres)](#установка-расширений-в-бд-postgres)

[2.3.2. Установка расширений в служебную БД [12](#установка-расширений-в-служебную-бд)](#установка-расширений-в-служебную-бд)

[2.3.3. Установка внешнего сервера для служебной БД [15](#установка-внешнего-сервера-для-служебной-бд)](#установка-внешнего-сервера-для-служебной-бд)

[2.4. Дополнительные настройки «postgresql.conf» [19](#дополнительные-настройки-postgresql.conf)](#дополнительные-настройки-postgresql.conf)

[3. Использование [20](#pg_profile.topn-20-количество-основных-объектов-для-каждого-типа-которые-будут-выводиться-в-отчетеpg_profile.max_sample_age-7-время-жизни-снапшота-снимки-состояния-которые-старше-7-дней-будут-удаляться-при-создании-новогоpg_profile.track_sample_timings-off-настройка-записи-детальных-данных-о-времени-в-снапшотpg_profile.max_query_length-20000-ограничение-длины-запроса-для-отчетов.-все-запросы-в-отчете-будут-усечены-до-этой-длины.-этот-параметр-не-влияет-на-сбор-текста-запроса-во-время-выборки-собираются-полные-тексты-запросов-таким-образом-они-могут-быть-получены.использование)](#pg_profile.topn-20-количество-основных-объектов-для-каждого-типа-которые-будут-выводиться-в-отчетеpg_profile.max_sample_age-7-время-жизни-снапшота-снимки-состояния-которые-старше-7-дней-будут-удаляться-при-создании-новогоpg_profile.track_sample_timings-off-настройка-записи-детальных-данных-о-времени-в-снапшотpg_profile.max_query_length-20000-ограничение-длины-запроса-для-отчетов.-все-запросы-в-отчете-будут-усечены-до-этой-длины.-этот-параметр-не-влияет-на-сбор-текста-запроса-во-время-выборки-собираются-полные-тексты-запросов-таким-образом-они-могут-быть-получены.использование)

[3.1. Управление соединениями с серверами [20](#управление-соединениями-с-серверами)](#управление-соединениями-с-серверами)

[3.2. Сбор данных о размерах страниц [21](#сбор-данных-о-размерах-страниц)](#сбор-данных-о-размерах-страниц)

[3.3. Снимки состояния БД [22](#функция-show_servers_size_sampling-показывает-все-установленные-политики.снимки-состояния-бд)](#функция-show_servers_size_sampling-показывает-все-установленные-политики.снимки-состояния-бд)

[3.3.1. Снятие снапшотов [24](#sample-integer-id-снапшотаsample_time-timestamp-0-with-time-zone-время-когда-был-снят-снапшотdbstats_reset-clustats_reset-archstats_reset-timestamp-0-with-time-zone-время-сброса-статистики-в-представлениях-pg_stat_database-pg_stat_bgwriter-с-pg_stat_archiver-с-момента-последнего-снятия-снапшота.снятие-снапшотов)](#sample-integer-id-снапшотаsample_time-timestamp-0-with-time-zone-время-когда-был-снят-снапшотdbstats_reset-clustats_reset-archstats_reset-timestamp-0-with-time-zone-время-сброса-статистики-в-представлениях-pg_stat_database-pg_stat_bgwriter-с-pg_stat_archiver-с-момента-последнего-снятия-снапшота.снятие-снапшотов)

[3.3.2. Время жизни снапшотов [25](#время-жизни-снапшотов)](#время-жизни-снапшотов)

[3.3.3. Описание событий [25](#установка-параметра-pg_profile.max_sample_age-в-файле-postgresql.conf-общая-настройка-которая-действует-если-не-определено-ни-одно-из-другихопределение-параметра-max_sample_age-сервера-при-создании-сервера-или-использование-функции-set_server_max_sample_age-для-существующего-сервера-настройка-переопределяет-глобальную-настройку-pg_profile.max_sample_age-для-конкретного-серверасоздание-baseline-см.-пункт-3.4-baseline-будет-переопределять-период-хранения-для-включенных-снапшотов-с-наивысшим-приоритетом.описание-событий)](#установка-параметра-pg_profile.max_sample_age-в-файле-postgresql.conf-общая-настройка-которая-действует-если-не-определено-ни-одно-из-другихопределение-параметра-max_sample_age-сервера-при-создании-сервера-или-использование-функции-set_server_max_sample_age-для-существующего-сервера-настройка-переопределяет-глобальную-настройку-pg_profile.max_sample_age-для-конкретного-серверасоздание-baseline-см.-пункт-3.4-baseline-будет-переопределять-период-хранения-для-включенных-снапшотов-с-наивысшим-приоритетом.описание-событий)

[3.4. Baseline [26](#baseline)](#baseline)

[3.4.1. Функции управления baseline [26](#функции-управления-baseline)](#функции-управления-baseline)

[3.5. Экспорт / импорт данных [28](#экспорт-импорт-данных)](#экспорт-импорт-данных)

[3.5.1. Экспорт данных [28](#экспорт-данных)](#экспорт-данных)

[3.5.2. Импорт данных [29](#импорт-данных)](#импорт-данных)

[3.6. Создание отчетов [30](#создание-отчетов)](#создание-отчетов)

[3.6.1. Обычные отчеты [30](#обычные-отчеты)](#обычные-отчеты)

[3.6.2. Дифференциальные отчеты [31](#дифференциальные-отчеты)](#дифференциальные-отчеты)

[4. Данные в отчетах [33](#данные-в-отчетах)](#данные-в-отчетах)

[4.1. Server statistics (Статистика сервера) [33](#server-statistics-статистика-сервера)](#server-statistics-статистика-сервера)

[4.1.1. Database statistics (Статистика базы данных) [33](#database-statistics-статистика-базы-данных)](#database-statistics-статистика-базы-данных)

[4.1.2. Statement statistics by database [34](#statement-statistics-by-database)](#statement-statistics-by-database)

[4.1.3. Statement statistics by database (Статистика запросов по базе данных) [35](#statement-statistics-by-database-статистика-запросов-по-базе-данных)](#statement-statistics-by-database-статистика-запросов-по-базе-данных)

[4.1.4. Cluster statistics (Статистика кластера) [36](#cluster-statistics-статистика-кластера)](#cluster-statistics-статистика-кластера)

[4.1.5. WAL statistics (Статистика WAL) [38](#wal-statistics-статистика-wal)](#wal-statistics-статистика-wal)

[4.1.6. Tablespace statistics (Статистика табличных пространств) [39](#tablespace-statistics-статистика-табличных-пространств)](#tablespace-statistics-статистика-табличных-пространств)

[4.2. SQL Query statistics (Статистика SQL-запросов) [39](#sql-query-statistics-статистика-sql-запросов)](#sql-query-statistics-статистика-sql-запросов)

[4.2.1. Top SQL by elapsed time (Топ SQL-запросов по затраченному времени) [40](#top-sql-by-elapsed-time-топ-sql-запросов-по-затраченному-времени)](#top-sql-by-elapsed-time-топ-sql-запросов-по-затраченному-времени)

[4.2.2. Top SQL by planning time (Топ SQL-запросов по времени планирования) [41](#top-sql-by-planning-time-топ-sql-запросов-по-времени-планирования)](#top-sql-by-planning-time-топ-sql-запросов-по-времени-планирования)

[4.2.3. Top SQL by execution time (Топ SQL-запросов по времени выполнения) [41](#top-sql-by-execution-time-топ-sql-запросов-по-времени-выполнения)](#top-sql-by-execution-time-топ-sql-запросов-по-времени-выполнения)

[4.2.4. Top SQL by executions (Топ SQL-запросов по количеству выполнений) [42](#top-sql-by-executions-топ-sql-запросов-по-количеству-выполнений)](#top-sql-by-executions-топ-sql-запросов-по-количеству-выполнений)

[4.2.5. Top SQL by I/O wait time (Топ SQL-запросов по времени ожидания ввода/вывода) [43](#top-sql-by-io-wait-time-топ-sql-запросов-по-времени-ожидания-вводавывода)](#top-sql-by-io-wait-time-топ-sql-запросов-по-времени-ожидания-вводавывода)

[4.2.6. Top SQL by shared blocks fetched (Топ SQL-запросов по выбранным общим блокам) [44](#top-sql-by-shared-blocks-fetched-топ-sql-запросов-по-выбранным-общим-блокам)](#top-sql-by-shared-blocks-fetched-топ-sql-запросов-по-выбранным-общим-блокам)

[4.2.7. Top SQL by shared blocks read (Топ SQL-запросов по количеству прочитанных разделяемых блоков) [45](#top-sql-by-shared-blocks-read-топ-sql-запросов-по-количеству-прочитанных-разделяемых-блоков)](#top-sql-by-shared-blocks-read-топ-sql-запросов-по-количеству-прочитанных-разделяемых-блоков)

[4.2.8. Top SQL by shared blocks dirtied (Топ SQL-запросов по заполненным разделяемым блокам) [46](#top-sql-by-shared-blocks-dirtied-топ-sql-запросов-по-заполненным-разделяемым-блокам)](#top-sql-by-shared-blocks-dirtied-топ-sql-запросов-по-заполненным-разделяемым-блокам)

[4.2.9. Top SQL by shared blocks written (Топ SQL-запросов по записи общих блоков) [47](#top-sql-by-shared-blocks-written-топ-sql-запросов-по-записи-общих-блоков)](#top-sql-by-shared-blocks-written-топ-sql-запросов-по-записи-общих-блоков)

[4.2.10. Top SQL by WAL size (Топ SQL-запросов по размеру WAL) [47](#top-sql-by-wal-size-топ-sql-запросов-по-размеру-wal)](#top-sql-by-wal-size-топ-sql-запросов-по-размеру-wal)

[4.2.11. Complete list of SQL texts (Полный список текстов SQL) [48](#complete-list-of-sql-texts-полный-список-текстов-sql)](#complete-list-of-sql-texts-полный-список-текстов-sql)

[4.2.12. Top SQL by temp usage (Топ SQL-запросов по использованию временных данных) [49](#top-sql-by-temp-usage-топ-sql-запросов-по-использованию-временных-данных)](#top-sql-by-temp-usage-топ-sql-запросов-по-использованию-временных-данных)

[4.3. Rusage statistics (Статистика использования ресурсов) [50](#rusage-statistics-статистика-использования-ресурсов)](#rusage-statistics-статистика-использования-ресурсов)

[4.3.1. Top SQL by system and user time (Топ SQL-запросов по потреблению системного и пользовательского времени) [50](#top-sql-by-system-and-user-time-топ-sql-запросов-по-потреблению-системного-и-пользовательского-времени)](#top-sql-by-system-and-user-time-топ-sql-запросов-по-потреблению-системного-и-пользовательского-времени)

[4.3.2. Top SQL by reads/writes done by filesystem layer (Топ SQL-запросов по количеству операций чтения/записи, выполняемых на уровне файловой системы) [51](#top-sql-by-readswrites-done-by-filesystem-layer-топ-sql-запросов-по-количеству-операций-чтениязаписи-выполняемых-на-уровне-файловой-системы)](#top-sql-by-readswrites-done-by-filesystem-layer-топ-sql-запросов-по-количеству-операций-чтениязаписи-выполняемых-на-уровне-файловой-системы)

[4.3.3. Top SQL by JIT elapsed time (Топ SQL-запросов отсортированных по общему JIT-времени) [52](#top-sql-by-jit-elapsed-time-топ-sql-запросов-отсортированных-по-общему-jit-времени)](#top-sql-by-jit-elapsed-time-топ-sql-запросов-отсортированных-по-общему-jit-времени)

[4.3.4. Complete list of SQL texts (Полный список текстов SQL-запросов) [53](#complete-list-of-sql-texts-полный-список-текстов-sql-запросов)](#complete-list-of-sql-texts-полный-список-текстов-sql-запросов)

[4.4. Schema object statistics (Статистика объекта схемы) [54](#schema-object-statistics-статистика-объекта-схемы)](#schema-object-statistics-статистика-объекта-схемы)

[4.4.1. Top tables by estimated sequentially scanned volume (Топ таблиц по предполагаемому объему последовательного сканирования) [54](#top-tables-by-estimated-sequentially-scanned-volume-топ-таблиц-по-предполагаемому-объему-последовательного-сканирования)](#top-tables-by-estimated-sequentially-scanned-volume-топ-таблиц-по-предполагаемому-объему-последовательного-сканирования)

[4.4.2. Top tables by blocks fetched (Топ таблиц по выбранным блокам) [55](#top-tables-by-blocks-fetched-топ-таблиц-по-выбранным-блокам)](#top-tables-by-blocks-fetched-топ-таблиц-по-выбранным-блокам)

[4.4.3. Top tables by blocks read (Топ таблиц по прочитанным блокам) [55](#top-tables-by-blocks-read-топ-таблиц-по-прочитанным-блокам)](#top-tables-by-blocks-read-топ-таблиц-по-прочитанным-блокам)

[4.4.4. Top DML tables (Топ таблиц по количеству операций DML) [56](#top-dml-tables-топ-таблиц-по-количеству-операций-dml)](#top-dml-tables-топ-таблиц-по-количеству-операций-dml)

[4.4.5. Top tables by updated/deleted tuples (Топ таблиц по обновленным/удаленным записям) [57](#top-tables-by-updateddeleted-tuples-топ-таблиц-по-обновленнымудаленным-записям)](#top-tables-by-updateddeleted-tuples-топ-таблиц-по-обновленнымудаленным-записям)

[4.4.6. Top growing tables (Топ таблиц по увеличению размера) [58](#top-growing-tables-топ-таблиц-по-увеличению-размера)](#top-growing-tables-топ-таблиц-по-увеличению-размера)

[4.4.7. Top indexes by blocks fetched (Топ индексов по выбранным блокам) [58](#top-indexes-by-blocks-fetched-топ-индексов-по-выбранным-блокам)](#top-indexes-by-blocks-fetched-топ-индексов-по-выбранным-блокам)

[4.4.8. Top indexes by blocks read (Топ индексов по прочитанным блокам) [59](#top-indexes-by-blocks-read-топ-индексов-по-прочитанным-блокам)](#top-indexes-by-blocks-read-топ-индексов-по-прочитанным-блокам)

[4.4.9. Top growing indexes (Топ таблиц по увеличению объемов индексов) [59](#top-growing-indexes-топ-таблиц-по-увеличению-объемов-индексов)](#top-growing-indexes-топ-таблиц-по-увеличению-объемов-индексов)

[4.4.10. Unused indexes (Неиспользуемые индексы) [60](#unused-indexes-неиспользуемые-индексы)](#unused-indexes-неиспользуемые-индексы)

[4.5. User function statistics (Статистика функций пользователя) [61](#user-function-statistics-статистика-функций-пользователя)](#user-function-statistics-статистика-функций-пользователя)

[4.5.1. Top functions by total time (Топ функций по общему времени) [61](#top-functions-by-total-time-топ-функций-по-общему-времени)](#top-functions-by-total-time-топ-функций-по-общему-времени)

[4.5.2. Top functions by executions (Топ функций по исполнению) [61](#top-functions-by-executions-топ-функций-по-исполнению)](#top-functions-by-executions-топ-функций-по-исполнению)

[4.5.3. Top trigger functions by total time (Топ триггерных функций по общему времени) [62](#top-trigger-functions-by-total-time-топ-триггерных-функций-по-общему-времени)](#top-trigger-functions-by-total-time-топ-триггерных-функций-по-общему-времени)

[4.6. Vacuum–related stats (Статистика, связанная с вакуумом) [62](#vacuumrelated-stats-статистика-связанная-с-вакуумом)](#vacuumrelated-stats-статистика-связанная-с-вакуумом)

[4.6.1. Top tables by vacuum operations (Топ таблиц по статистике вакуума) [63](#top-tables-by-vacuum-operations-топ-таблиц-по-статистике-вакуума)](#top-tables-by-vacuum-operations-топ-таблиц-по-статистике-вакуума)

[4.6.2. Top tables by analyze operations (Топ таблиц по операциям анализа) [63](#top-tables-by-analyze-operations-топ-таблиц-по-операциям-анализа)](#top-tables-by-analyze-operations-топ-таблиц-по-операциям-анализа)

[4.6.3. Top indexes by estimated vacuum load (Топ индексов по расчетной нагрузке вакуумного ввода/вывода) [64](#top-indexes-by-estimated-vacuum-load-топ-индексов-по-расчетной-нагрузке-вакуумного-вводавывода)](#top-indexes-by-estimated-vacuum-load-топ-индексов-по-расчетной-нагрузке-вакуумного-вводавывода)

[4.6.4. Top tables by dead tuples ratio (Топ таблиц по проценту наличия удаленных записей) [64](#top-tables-by-dead-tuples-ratio-топ-таблиц-по-проценту-наличия-удаленных-записей)](#top-tables-by-dead-tuples-ratio-топ-таблиц-по-проценту-наличия-удаленных-записей)

[4.6.5. Top tables by modified tuples ratio (Топ таблиц по проценту измененных записей) [65](#top-tables-by-modified-tuples-ratio-топ-таблиц-по-проценту-измененных-записей)](#top-tables-by-modified-tuples-ratio-топ-таблиц-по-проценту-измененных-записей)

[4.7. Cluster settings during the report interval (Настройка кластера во время отчетного интервала) [66](#cluster-settings-during-the-report-interval-настройка-кластера-во-время-отчетного-интервала)](#cluster-settings-during-the-report-interval-настройка-кластера-во-время-отчетного-интервала)

[4.8. Отчеты по компоненту «ja_Hipe_Cluster» (Citus) [67](#отчеты-по-компоненту-ja_hipe_cluster-citus)](#отчеты-по-компоненту-ja_hipe_cluster-citus)

[4.8.1. Nodes [67](#nodes)](#nodes)

[4.8.2. Connectivity between all nodes [67](#connectivity-between-all-nodes)](#connectivity-between-all-nodes)

[4.8.3. Tables (citus_tables) [67](#tables-citus_tables)](#tables-citus_tables)

[4.8.4. Shards [68](#shards)](#shards)

[4.8.5. Blocked queries (citus_lock_waits) [69](#blocked-queries-citus_lock_waits)](#blocked-queries-citus_lock_waits)

[4.8.6. Query statistics (citus_stat_statements) [69](#query-statistics-citus_stat_statements)](#query-statistics-citus_stat_statements)

[4.8.7. Rebalance progress (get_rebalance_progress) [70](#rebalance-progress-get_rebalance_progress)](#rebalance-progress-get_rebalance_progress)

[4.8.8. Configuration parameters [70](#configuration-parameters)](#configuration-parameters)

[4.8.9. Active tenants (citus_stat_tenants) [71](#active-tenants-citus_stat_tenants)](#active-tenants-citus_stat_tenants)

[5. Дополнительная информация [72](#дополнительная-информация)](#дополнительная-информация)

[Термины и определение [73](#_Toc215495340)](#_Toc215495340)

[Перечень сокращений [76](#_Toc215495341)](#_Toc215495341)

# Назначение компонента

pg_Profile – компонент, позволяющий собирать и просматривать параметры и метрики функционирования БД в различное время, а также строить отчеты по этим данным и сравнивать их между собой для выявления проблемных мест.

Для сбора параметров и метрик БД используется система снапшотов.

Анализ снимков состояния позволяет выявить проблемные участки путем просмотра или сравнения данных из разных снапшотов.

Снапшоты можно снимать как с текущей БД, так и с любых других БД, к которым есть доступ.

pg_Profile допускает экспортировать и импортировать собранную статистику в свои служебные таблицы.

Компонент реализован в формате расширения для СУБД PostgreSQL/Jatoba, установка которого регламентирована соответствующими правилами СУБД.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>Для установки расширения необходимо заранее установить другие дополнительные расширения, на работе которых основана работа pg_profile, а именно – plpgsql и dblink.</p>
<p>Для получения данных в разделе отчета rusage_statistics необходимо установить расширение pg_stat_kcache и включить его параметр pg_stat_kcache.track_planning = 'on' в postgresql.conf. Если эти данные не нужны, то расширение можно не устанавливать.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Функциональные возможности

Компонент автоматизации работы администратора СУБД обладает следующими функциональными возможностями:

1)  
2)  

выявление и анализ наиболее ресурсоемких операций и SQL-запросов;гибкое формирование итоговых отчетов по накопленной статистической информации.Компонент предоставляет для просмотра информацию о SQL-запросах, выполнение которых по разным характеристикам занимало больше всего времени. Количество таких запросов в формируемых отчетах определяется соответствующим параметром компонента, описанным в разделе 2.4.

Компонент обеспечивает сбор и хранение одномоментной и ретроспективной дискретной статистической информации о работе отдельных компонентов СУБД при выполнении SQL-запросов. Снятие статистической информации само по себе является затратной операцией, которая может вызывать блокировку отдельных объектов СУБД и влиять на производительность работы пользователей. В компоненте предусмотрен соответствующий механизм, основанный на использовании параметра СУБД lock_timeout, прерывающий построение снапшота, который занимает более 3 секунд времени.

## Условия применения

Компонент pg_Profile может использоваться совместно с СУБД «Jatoba» версий  
1.x – 5.x.

# Установка

## Установка компонента ОС GNU/Linux

Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке, либо доустановить.

Установку компонента возможно провести двумя способами:

1)  
2)  

установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- 

> для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:apt-get install jatoba\<ver\>-pg-profile

- 

> для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:yum install jatoba\<ver\>-pg-profile

Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- 

> ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:apt-get install jatoba\<ver\>-pg-profile

Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba3-pg-profile и т.п.

Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Рекомендованные настройки postgresql.conf

Для корректного функционирования расширения в разделе «Shared Library Preloading» в конфигурационном файле postgresql.conf необходимо добавить строку (рисунок Рисунок 2.1):

> shared_preload_libraries = 'pg_stat_statements'

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image3.png" style="width:7.08644in;height:2.21698in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 02-35-51.png" />

Рисунок 2.1 – Настройки postgresql.conf

В разделе «Statistics» – «Query and Index Statistics Collector» рекомендовано проверить и привести к следующему виду настройки для Statistic Collector (встроенный в СУБД механизм, позволяющий собирать метрики активности сервера БД) (рисунок Рисунок 2.2):

> track_activities = on
>
> track_counts = on
>
> track_io_timing = on
>
> track_functions = all

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image4.png" style="width:7.08644in;height:3.16981in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 02-39-59.png" />

<table>
<caption><p>Рисунок 2.2 – Настройки postgresql.conf</p></caption>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>В настройке track_function допустимым значением является «pl», которое отслеживает время выполнения функций, написанных на процедурных языках.</p>
<p>Значение «all» отслеживает все функции, к процедурным языкам добавляются SQL и C-функции.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Рисунок 2.2 – Настройки postgresql.conf

После внесения изменений в конфигурационный файл, для применения настроек необходимо перезагрузить СУБД.

## Установка расширения pg_Profile

Установка основного расширения «pg_profile» и дополнительных расширений допустима в:

- 
- 

БД по умолчанию «postgres» (п. 2.3.1);служебную БД «pg_profile» (п. 2.3.2).Для дальнейшего использования с компонентом пользовательского веб-интерфейса для администраторов «Jatoba data safe» целесообразнее устанавливать расширения в служебную БД, с последующей установкой внешнего сервера для служебной БД (п. 2.3.3).

### Установка расширений в БД «postgres»

Установка расширения может быть проведена следующим способом:

> postgres=# CREATE EXTENSION dblink;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image5.png" style="width:7.08644in;height:1.11321in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-29-28.png" />

Рисунок 2.3 – Выполнение SQL-команды CREATE EXTENSION dblink

> postgres=# CREATE EXTENSION pg_stat_statements;
>
> postgres=# CREATE EXTENSION pg_profile;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image6.png" style="width:7.08644in;height:1.4717in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-30-27.png" />

Рисунок 2.4 – Выполнение SQL-команд создания расширений

После выполнения данных команд будут созданы расширения СУБД (рисунок Рисунок 2.5).

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image7.png" style="width:7.08531in;height:1.71698in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-32-26.png" />

Рисунок 2.5 – Созданные расширения СУБД

Также есть возможность создать расширение в отдельной схеме:

> postgres=# CREATE EXTENSION dblink;
>
> postgres=# CREATE EXTENSION pg_stat_statements;
>
> postgres=# CREATE SCHEMA profile;
>
> postgres=# CREATE EXTENSION pg_profile SCHEMA profile;

### Установка расширений в служебную БД

В случае, когда архитектура безопасности информационной системы следует принципу назначения минимально необходимых прав и привилегий пользователям и администраторам, использование компонента от имени и с правами суперпользователя становится невозможным. Кроме того, БД «postgres» является БД по умолчанию и использование ее для установки расширений нежелательно.

Существует наиболее безопасный способ использования компонента «pg_Profile» с установкой в служебную БД, в которой устанавливаются требуемые расширения, правами использования которых обладает пользователь СУБД с минимально достаточными правами.

> Для этого необходимо проделать следующие шаги:

- 

> создать БД «pg_profile»:create database pg_profile;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image8.png" style="width:7.08644in;height:1.11321in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-44-44.png" />

Рисунок 2.6 – Создание БД «pg_profile»

- 

> подключиться к БД:\connect pg_profile;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image9.png" style="width:7.08644in;height:1.12264in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-46-57.png" />

Рисунок 2.7 – Подключение к БД «pg_profile»

- 

> создать пользователя «profile_usr»:create role profile_usr login password 'pwd';

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image10.png" style="width:7.08644in;height:1.13208in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-47-46.png" />

Рисунок 2.8 – Создание пользователя «profile_usr»

- 

> создать схему для установки pg_profile:create schema profile authorization profile_usr;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image11.png" style="width:7.08644in;height:1.09434in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-48-35.png" />

Рисунок 2.9 – Создание схемы «profile»

- 

> установить расширение «dblink»:CREATE EXTENSION dblink;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image12.png" style="width:7.08644in;height:1.11321in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-49-30.png" />

Рисунок 2.10 – Установка расширения «dblink»

- 

> установить расширение «pg_stat_statements»:CREATE EXTENSION pg_stat_statements;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image13.png" style="width:7.08644in;height:1.09434in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-50-23.png" />

Рисунок 2.11 – Установка расширения «pg_stat_statements»

- 

> предоставить разрешение на использование схемы public, в которой находится расширение dblink:grant usage on schema public to profile_usr;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image14.png" style="width:7.08644in;height:1.11321in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-51-00.png" />

Рисунок 2.12 – Разрешение на использование схемы public

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /> | Предполагается, что расширение dblink установлено в схему public |
|----|----|

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image15.png" style="width:7.08552in;height:1.64151in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-52-10.png" />

Рисунок 2.13 – Список установленных расширений в схемах данных

- 

создать расширение, «pg_profile» в схеме данных «profile»:create extension pg_profile schema profile;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image16.png" style="width:7.08644in;height:1.13208in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 05-53-42.png" />

Рисунок 2.14 – Создание расширения, используя учетную запись profile_usr

На этом шаге установка компонента в отдельной БД закончена.

### Установка внешнего сервера для служебной БД

Компонент обладает функциональной возможностью предоставления внешнего подключения пользователю или приложению. Для этого используется виртуальный сервер.

В разбираемом примере:

- 
- 
- 
- 

| создана служебная БД «pg_profile»;в служебной БД «pg_profile» установлены требуемые расширения;сервер СУБД имеет IP-адрес 10.96.1.70;создан пользователь «admin_bd» c атрибутом «Login».<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /> | В синтаксисе SQL-команды при вызове функций следует учитывать, что они установлены в отдельной схеме данных и для их вызова потребуется указывать схему данных, в которых они установлены. |
|----|----|

Имея исходные данные, создать внешний сервер при помощи SQL-команды:

> select profile.create_server('pg_profile_server','host=10.96.1.70 port=5432 user=admin_bd password=P@ssword dbname=pg_profile');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image17.png" style="width:7.08644in;height:1.99057in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 06-01-16.png" />

Рисунок 2.15 – Создание внешнего сервера

После выполнения SQL-команды в таблице «server» будет создана запись с строкой подключения внешнего пользователя СУБД.

Пользователю СУБД от имени и с правами которого будет производится подключение, достаточно иметь атрибут «Login» и дополнительные привилегии.

Для этого, необходимо назначить права на:

- 

> схему данных «profile» SQL-командой:GRANT ALL ON SCHEMA profile TO \[username\];

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image18.png" style="width:7.08644in;height:1.09434in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 07-28-36.png" />

Рисунок 2.16 – Предоставление прав на схему данных

- 

> таблицы схемы данных «profile» SQL-командой:GRANT ALL ON ALL TABLES IN SCHEMA profile TO \[username\];

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image19.png" style="width:7.08644in;height:1.09434in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 07-29-35.png" />

Рисунок 2.17 – Предоставление прав на таблицы схемы данных «profile»

- 

> функции схемы данных «profile» SQL-командой:GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA profile TO \[username\];

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image20.png" style="width:7.08644in;height:1.12264in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 07-30-49.png" />

Рисунок 2.18 – Предоставление прав на функции схемы «profile»

Необходимо убедиться, что пользователь имеет права на подключение к любой БД в СУБД (по умолчанию это так) и в конфигурационном файле «pg_hba.conf» прописаны разрешения для подключения с узла БД «pg_profile».

Кроме того, необходимо, чтобы пользователь СУБД от имени и с правами которого производится подключение, был включен в групповую роль «pg_read_all_stats» и имел привилегию «execute» на функцию «pg_stat_statements_reset».

> \# GRANT pg_read_all_stats to \[username\];
>
> \# GRANT execute on function pg_stat_statements_reset TO \[username\];

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image21.png" style="width:7.08819in;height:1.49057in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5\Пользовательская документация\PIC\Screenshot from 2023-08-18 07-31-56.png" />

Рисунок 2.19 – Включение в групповую роль «pg_stat_statements_reset» и назначение привилегии «execute» на функцию «pg_stat_statements_reset»

По умолчанию, вновь созданный сервер будет неактивен. Это отразится при просмотре состояния снапшотов:

> SELECT profile.take_sample();

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image22.png" style="width:7.0855in;height:1.992in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\4.X_Draft\pic\Screenshot from 2023-08-24 04-18-45.png" />

Рисунок 2.20 – Состояние снятия снапшотов

Включение сервера выполняется командой:

> SELECT profile.enable_server('pg_profile_server');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image23.png" style="width:7.08648in;height:1.76in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\4.X_Draft\pic\Screenshot from 2023-08-24 04-14-46.png" />

Рисунок 2.21 – Включение сервера с именем 'pg_profile_server'

После чего оба сервера будут активны, но для снижения нагрузки на СУБД, рекомендуется оставлять работающим один сервер.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image24.png" style="width:7.08648in;height:1.96in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\4.X_Draft\pic\Screenshot from 2023-08-24 04-27-36.png" />

Рисунок 2.22 – Активное состояние серверов

На этом формирование подключения к внешнему серверу закончено.

## Дополнительные настройки «postgresql.conf»

По умолчанию в postgresql.conf устанавливаются следующие параметры, которые можно поменять вручную:

- 
- 
- 
- 

# pg_profile.topn = 20 – количество основных объектов для каждого типа, которые будут выводиться в отчете;pg_profile.max_sample_age = 7 – время жизни снапшота (снимки состояния, которые старше 7 дней будут удаляться при создании нового);pg_profile.track_sample_timings = off – настройка записи детальных данных о времени в снапшот;pg_profile.max_query_length = 20000 – ограничение длины запроса для отчетов. Все запросы в отчете будут усечены до этой длины. Этот параметр не влияет на сбор текста запроса – во время выборки собираются полные тексты запросов, таким образом, они могут быть получены.Использование

## Управление соединениями с серверами

После установки расширение автоматически создаст соединение с локальным сервером, на котором оно установлено. Для управления другими соединениями имеются следующие функции:

> create_server(server name, server_connstr text, server_enabled boolean = TRUE, max_sample_age integer = NULL, description text = NULL)

– создание нового соединения с сервером со следующими аргументами:

- 
- 
- 
- 
- 

> server – уникальное имя сервера;server_connstr – строка соединения с сервером;enabled – включение сервера в набор серверов, на которых снимаются метрики при создании снапшота;max_sample_age – время жизни снапшота на сервере;description – описание сервера, которое будет указано в отчетах.drop_server(server name)

– удаление сервера из настроек и удаление его снапшотов;

> enable_server(server name)

– включает сервер в набор серверов, на которых снимаются метрики при создании снапшота;

> disable_server(server name)

– исключает сервер из набора серверов, на которых снимаются метрики при создании снапшота;

> rename_server(server name, new_name name)

– переименование сервера;

> set_server_max_sample_age(server name, max_sample_age integer)

– определение времени жизни снапшота на сервере;

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Функция set_server_max_sample_age перезаписывает значение pg_profile.max_sample_age в postgresql.conf для сервера.</p>
<p>Для отмены времени жизни снапшота, необходимо установить значение NULL.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> set_server_db_exclude(server name, exclude_db name\[\])

– исключение из снапшота определенных БД на сервере (не будут указаны в отчетах);

> set_server_connstr(server name, new_connstr text)

– установка правил соединения с сервером;

> set_server_description(server name, description text)

– описание сервера (будет указано в отчетах);

> show_servers()

– отображение созданных соединений с серверами.

Пример создания сервера:

> SELECT profile.create_server('omega','host=name_or_ip dbname=postgres port=5432')

## Сбор данных о размерах страниц

Для определения сбора данных о размерах таблиц реализована политика сбора данных.

Сбор данных о размерах таблиц в СУБД ресурсозатратный процесс и требует, чтобы таблица была эксклюзивно заблокирована на момент подсчета размера.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Данные о размерах таблиц можно собирать не постоянно, а, например, раз в сутки в выделенный промежуток времени.</p>
<p>Также можно установить временной интервал между двумя снимками состояния, где просчитываются данные о размерах таблиц.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- 

> Функция set_server_size_sampling() определяет данные политики сбора размеров.set_server_size_sampling(server name, window_start time with time zone = NULL, window_duration interval hour to second = NULL, sample_interval interval day to minute = NULL)

server – имя сервера;

window_start – начало временного промежутка, когда разрешено собирать данные о размерах таблиц;

window_duration – продолжительность временного промежутка;

sample_interval – минимальное время между двумя снапшотами с собранными размерами таблиц.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image2.png" style="width:0.25139in;height:0.25139in" /> | Все три параметра являются обязательными для установки политики сбора данных о размерах таблиц. |
|----|----|

Пример:

> SELECT set_server_size_sampling('local','23:00+03', interval '2 hour',interval '8 hour')

- 

## Функция show_servers_size_sampling() показывает все установленные политики.Снимки состояния БД

Каждый снапшот показывает статистическую информацию о метриках БД и нагрузке с момента снятия предыдущего состояния.

Для работы со снапшотами используются следующие команды:

> take_sample(server name \[, skip_sizes boolean\])

- 

снятие снапшотов со всех серверов.server_name – имя сервера для снятия снапшота;

skip_sizes – переопределение установленной политики сбора данных о размерах.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /> | Снапшоты для каждого сервера будут сняты последовательно, один за другим. |
|----|----|

Если не указывать параметры server_name, то будут сняты снапшоты со всех доступных серверов.

При запросе функции без указания параметров пользователю будет возвращена таблица вида (см. рис. Рисунок 3.1):

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image25.png" style="width:7.08648in;height:1.736in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\4.X_Draft\pic\Screenshot from 2023-08-24 04-43-41.png" />

Рисунок 3.1 – Возвращение таблицы

server name – имя сервера;

result text – результат (OK – успешно, текст ошибки – неудача);

elapsed interval – время, затраченное на создание снапшота.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /> | Работа функции take_sample() может занять значительное время из-за последовательного снятия снапшотов. |
|----|----|

> take_sample_subset(\[sets_cnt integer\], \[current_set integer\])

- 

функция take_sample() обрабатывает данные и создает снапшоты последовательно. В случае, если пользователь зарегистрирует множество серверов через функцию create_server(), то для получения всех снапшотов может быть затрачено значительное время. Функция take_sample_subset() предоставляет возможность использовать параллельную обработку серверов, тем самым, сокращая время на получение всех снапшотов.sets_cnt – число, на которое будет разделено все множество серверов. К примеру, если у пользователя есть 20 серверов, то указывая sets_cnt = 5, будет создано 5 подмножеств по 4 сервера.

current_set – номер подмножества, которое будет обрабатываться в данный момент. Счет идет от 0, максимальное значение current_set = sets_cnt – 1.

Можно запускать как один за другим, контролируя таким образом время выполнения, так и запустить параллельно в нескольких сеансах, указывая разный current_set.

> show_samples(\[server name,\] \[days integer\])

– возвращение таблицы с данными об имеющихся снапшотах. Если не вводить имя сервера, то автоматически подставится локальный сервер.

- 
- 
- 

### sample integer – ID снапшота;sample_time timestamp (0) with time zone – время, когда был снят снапшот;dbstats_reset / clustats_reset / archstats_reset timestamp (0) with time zone – время сброса статистики в представлениях pg_stat_database, pg_stat_bgwriter с pg_stat_archiver с момента последнего снятия снапшота.Снятие снапшотов

Для построения отчета необходимо, как минимум, 2 снапшота.

Для автоматического получения снимков по расписанию, к примеру, раз в 30 минут, нужно поместить вызов функции в планировщик задач системы.

В стандартной утилите Linux – crontab:

> \*/30 \* \* \* \* psql -c 'SELECT \[profile\].take_sample();' \> /dev/null 2\>&1

В MS Windows (начиная с Windows Server 2003) – стандартной утилитой schtasks:

> schtasks /create /sc minute /mo 30 /tn "30_min_sample" /tr psql -c "SELECT \[profile\].take_sample();"

Для получения списка существующих снапшотов в хранилище используется функция show_samples(). Эта функция также покажет обнаруженные сбросы статистики БД.

### Время жизни снапшотов

Для определения срока хранения снапшотов реализована политика хранения. Определить политику хранения можно на трех уровнях:

1)  
2)  
3)  

### установка параметра pg_profile.max_sample_age в файле postgresql.conf – общая настройка, которая действует, если не определено ни одно из других;определение параметра max_sample_age сервера при создании сервера или использование функции set_server_max_sample_age() для существующего сервера – настройка переопределяет глобальную настройку pg_profile.max_sample_age для конкретного сервера;создание baseline (см. пункт 3.4) – baseline будет переопределять период хранения для включенных снапшотов с наивысшим приоритетом.Описание событий

pg_profile собирает подробную статистику времени снятия снапшотов, если включен параметр pg_profile.track_sample_timings. Результаты можно получить из представления v_sample_timings.

Описание полей v_sample_timings:

- 
- 
- 
- 
- 

server_name – имя сервера с которого создавался снапшот;sample_id – идентификатор снапшота;sample_time – время взятия снапшота;event – событие на котором замерялось время;time_spent – количество времени, проведенного в событии.В таблице Таблица 3.1 описаны все события и метрики, которые доступны пользователю в созданном отчете.

| **Описание** |  | **Значение** |
|----|----|----|
| total |  | снятие снапшота (все этапы) |
| connect |  | установка соединения dblink с сервером |
| get server environment |  | получение конфигурационных параметров сервера, доступных расширений и т.д. |
| collect database stats |  | запрос представления pg_stat_database для получения статистики по БД |
| calculate database stats |  | вычисление дифференциальной статистики по БД с момента предыдущего снапшота |
| collect tablespace stats |  | запрос представления pg_tablespace для получения статистики по табличным пространствам |
| collect statement stats |  | сбор статистики по операторам с помощью расширений pg_stat_statements и pg_stat_kcache |
| query pg_stat_bgwriter |  | сбор статистики кластера с помощью представления pg_stat_bgwriter |
| query pg_stat_archiver |  | сбор статистики кластера с помощью представления pg_stat_archiver |
| collect object stats |  | сбор статистики по объектам БД. Включает события |
|  | db:dbname collect tables stats | сбор статистики по таблицам для БД dbname |
|  | db:dbname collect indexes stats | сбор статистики по индексам для БД dbname |
|  | db:dbname collect functions stats | сбор статистики по функциям для БД dbname |
| maintain repository |  | выполнение процедур поддержки |
| calculate tablespace stats |  | вычисление дифференциальной статистики по табличным пространствам. Включает события |
|  | calculate object stats | вычисление дифференциальной статистики по объектам БД |
|  | calculate tables stats | вычисление дифференциальной статистики по таблицам БД |
|  | calculate indexes stats | вычисление дифференциальной статистики по индексам БД |
| calculate functions stats |  | вычисление дифференциальной статистики по функциям БД |
| calculate cluster stats |  | вычисление дифференциальной статистики кластера |
| calculate archiver stats |  | вычисление дифференциальной статистики архиватора |
| delete obsolete samples |  | удаление устаревших baseline и снапшотов |

Таблица 3.1 – Описание событий и метрик

## Baseline

Baseline – именованная последовательность снапшотов, которая имеет отдельную от настроенной политику хранения. Можно задать как определенное время хранения в днях, так и бесконечное время хранения, оставив соответственный параметр пустым. Также можно создать последовательность снапшотов только для определенного периода времени.

Можно сохранить снапшоты, собранные во время нагрузочного тестирования или во время обычной нагрузки на систему для дальнейшего использования.

### Функции управления baseline

Для управления baseline предназначены следующие функции:

> CREATE_baseline(\[server name,\] baseline_name varchar(25), start_id integer, end_id integer \[, days integer\])

– создание baseline,

server name – имя сервера (если параметр опущен, предполагается локальный сервер);

baseline_name – имя baseline. Каждый baseline должен иметь уникальное имя в пределах сервера;

start_id, end_id – первый и последний образцы, включенные в baseline;

days – время хранения baseline. Определяется в целых днях с момента времени now(). Этот параметр может быть опущен (или установлен в null), что означает неограниченное хранение.

> CREATE_baseline(\[server name,\] baseline_name varchar(25), time_range tstzrange \[, days integer\])

*–* создание baseline,

server name – имя сервера (если параметр опущен, предполагается локальный сервер);

baseline_name – имя baseline. Каждый baseline должен иметь уникальное имя в пределах сервера;

time_range – временной интервал для baseline. Baseline будет включать все доступные снапшоты, перекрывающие этот интервал;

days – время хранения baseline. Определяется в целых днях с момента времени now(). Этот параметр может быть опущен (или иметь значение null), что означает неограниченное хранение.

> drop_baseline(\[server name,\] name varchar(25))

*–* удаление baseline,

server name – имя сервера (если параметр опущен, предполагается локальный сервер);

name – имя baseline для удаления. Удаление baseline не означает удаление его снапшотов, они исключаются из baseline.

> keep_baseline(\[server name,\] name varchar(25) \[, days integer\])

*–* изменение времени хранения baseline,

server name – имя сервера (если параметр опущен, предполагается локальный сервер);

name – имя baseline. Каждый baseline должен иметь уникальное имя в пределах сервера;

days – время хранения baseline. Определяется в целых днях с момента времени now(). Этот параметр может быть опущен (или иметь значение null), что означает неограниченное сохранение.

> show_baselines(\[server name\])

*–* просмотр существующих baseline и их информация,

server name – имя сервера (если параметр опущен, предполагается локальный сервер).

Пример просмотра существующих baseline:

> postgres=# SELECT \* FROM show_baselines('local');

## Экспорт / импорт данных

Собранные снапшоты можно экспортировать из экземпляра расширения pg_Profile и импортировать на другой сервер.

### Экспорт данных

Данные экспортируются в виде обычной таблицы с помощью функции export_data(). Можно использовать любой метод для экспорта этой таблицы из БД. Например, можно использовать команду copy в psql для получения одного файла .csv:

> postgres=# \copy (select \* from export_data()) to 'export.csv'

По умолчанию функция export_data() экспортирует все снапшоты всех настроенных серверов. Можно ограничить экспорт только одним сервером, а также ограничить диапазон снапшотов:

> export_data(\[server name, \[min_sample_id integer,\] \[max_sample_id integer\]\] \[, obfuscate_queries boolean\])

– экспорт собранных данных,

server – имя сервера (если параметр опущен, предполагаются все серверы);

min_sample_id и max_sample_id – экспорт идентификаторов граничных снапшотов (включительно). Нулевое значение min_sample_id приводит к экспорту всех снапшотов до max_sample_id, а нулевое значение max_sample_id приводит к экспорту всех снапшотов, начиная с min_sample_id;

obfuscate_queries – скрытие текста запросов, они будут экспортированы в виде MD5-хэша.

### Импорт данных

Данные могут быть импортированы только из локальной таблицы, поэтому ранее экспортированные данные необходимо сначала загрузить с помощью команды copy:

> \# CREATE TABLE import (section_id bigint, row_data json);
>
> \# \copy import from 'export.csv'

После загрузки можно выполнить импорт данных, предоставив эту таблицу функции import_data():

> \# SELECT \* FROM import_data('import');

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /> | Одинаково названные pg_profile сервера на разных физических серверах при импорте данных не будут обработаны из-за внутренних ограничений функции. Во избежание данной ситуации нужно временно переименовать их через встроенную функцию rename_server(server name, new_name name) |
|----|----|

Если понадобится импортировать новые данные для ранее импортированных серверов, они будут сопоставлены по системному идентификатору. Все серверы импортируются с опцией server_enabled = FALSE (см. пункт 3.1).

Функция import_data() принимает только импортируемую таблицу:

> import_data(data regclass)

data – таблица, содержащая экспортируемые данные. Эта функция возвращает количество строк, фактически загруженных в таблицы расширения. После успешного завершения операции можно удалить таблицу импорта.

## Создание отчетов

Отчеты создаются в формате HTML. Существует два вида отчетов: обычные отчеты и дифференциальные отчеты.

### Обычные отчеты

Обычные отчеты содержат статистическую информацию для определенного периода времени.

Функции обычного отчета:

> get_report(\[server name,\] start_id integer, end_id integer \[, description text \[, with_growth boolean\]\])

– создание отчета, исходя из идентификаторов снапшотов;

> get_report(\[server name,\] time_range tstzrange \[, description text \[, with_growth boolean\]\])

– генерирование отчета для самого короткого интервала снапшотов, охватывающего указанный time_range;

> get_report(\[server name\], baseline varchar(25) \[, description text \[, with_growth boolean\]\])

– генерирование отчета, используя baseline в качестве интервала снапшотов;

> get_report_latest(\[server name\])

– создание отчета, исходя из двух последних снапшотов,

server – имя сервера (если параметр опущен, предполагается локальный сервер);

start1_id, end1_id – идентификаторы снапшота первого интервала;

start2_id, end2_id – идентификаторы снапшота второго интервала;

baseline1 – имя baseline первого интервала;

baseline2 – имя baseline второго интервала;

time_range1 – временной диапазон первого интервала;

time_range2 – временной диапазон второго интервала;

description – текстовая заметка, которая будет включена в отчет, как описание отчета;

with_growth – параметр, который означает, что будет браться ближайший снапшот с данными о размерах.

### Дифференциальные отчеты

Дифференциальные отчеты содержат статистическую информацию за два выбранных периода, позволяя легко сравнить показатели.

Функции дифференциального отчета:

> get_diffreport(\[server name,\] start1_id integer, end1_id integer, start2_id integer, end2_id integer \[, description text \[, with_growth boolean\]\])

*–* создание отчета на основе двух периодов времени;

> get_diffreport(\[server name,\] baseline1 varchar(25), baseline2 varchar(25) \[, description text \[, with_growth boolean\]\])

*–* создание дифференциального отчета по двум интервалам, заданными именами baseline;

> get_diffreport(\[server name,\] time_range1 tstzrange, time_range2 tstzrange \[, description text \[, with_growth boolean\]\])

*–* создание дифференциального отчета по двум интервалам, заданным временными диапазонами,

server – имя сервера (если параметр опущен, предполагается локальный сервер);

start1_id, end1_id – идентификаторы снапшотов первого интервала;

start2_id, end2_id – идентификаторы снапшотов второго интервала;

baseline1 – название базовой линии первого интервала;

baseline2 – название базовой линии второго интервала;

time_range1 – временной диапазон первого интервала;

time_range2 – временной диапазон второго интервала;

with_growth – параметр, который означает, что будет браться ближайший снапшот с данными о размерах;

description – текстовая информация, которая будет выведена в отчете.

Пример формирования отчета:

> \$ psql -Aqtc "SELECT profile.get_report('omega',12,14)" -o report_omega_12_14.html

# Данные в отчетах

В данном разделе описаны таблицы отчетов:

1)  
2)  
3)  
4)  
5)  
6)  
7)  
8)  

статистики сервера (Server statistics п. 4.1);статистики SQL-запросов (SQL query statistics п. 4.2);статистики использования ресурсов (Rusage statistics п. 4.3);статистики объекта схемы (Schema object statistics п. 4.4);статистики функций пользователя (User function statistics п. 4.5);статистики, связанной с вакуумом (Vacuum-related statistics п. 4.6);настройки кластера во время отчетного интервала (Cluster settings during the report interval п 4.7);Отчеты по компоненту «ja_Hipe_Cluster» (Citus) (п. 4.8).В каждом подразделе приведены подробные виды отчета.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /> | Наименование таблиц в отчетах отображаются на английском языке. |
|----|----|

## Server statistics (Статистика сервера)

Данный раздел содержит сведения о метриках и статистических данных, собранных в генерируемом отчете.

### Database statistics (Статистика базы данных)

Таблица Рисунок 4.1 содержит статистику по БД в течение интервала отчета, основанную на представлении pg_stat_database.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image26.png" style="width:6.69236in;height:1.05694in" />

Рисунок 4.1 – Пример отчета Database statistics

| **Параметр** |  | **Описание** |
|----|----|----|
| Database |  | имя БД |
| Transaction |  | статистика транзакций БД |
|  | Commits | количество зафиксированных транзакций (xact_commit) |
|  | Rollbacks | количество откаченных транзакций (xact_rollback) |
|  | Deadlocks | количество обнаруженных взаимных блокировок (deadlocks) |
| Block statistics |  | статистика чтения и попаданий в блоки БД |
|  | Hit(%) | коэффициент попадания в буферный кэш |
|  | Read | количество прочитанных дисковых блоков в данной БД (blks_read) |
|  | Hit | количество раз, когда дисковые блоки были найдены в буферном кэше (blks_hit) |
| Tuples |  | раздел статистики записей |
|  | Ret | количество возвращенных записей (tup_returned) |
|  | Fet | количество извлеченных записей (tup_fetched) |
|  | Ins | количество вставленных записей (tup_inserted) |
|  | Upd | количество обновленных записей (tup_updated) |
|  | Del | количество удаленных записей (tup_deleted) |
| Temp files |  | статистика временных файлов |
|  | Size | общий объем данных, записанных во временные файлы запросами в этой БД (temp_bytes) |
|  | Files | количество временных файлов, созданных запросами в этой БД (temp_files) |
| Size |  | размер БД в конце интервала отчета (pg_database_size()) |
| Growth |  | рост БД в течение интервала отчета (разница pg_database_size()) |

Таблица 4.1 – Описание параметров отчета Database statistics

### Statement statistics by database

Таблица Рисунок 4.2 содержит агрегированные общие статистические данные по базе данных pg_stat_statements (если расширение pg_stat_statements было доступно в течение интервала отчета).

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image27.png" style="width:7.08681in;height:1.25833in" />

Рисунок 4.2 – Пример отчета Statement statistics by database

| **Параметр** |  |  |  |  |  |  | **Описание** |
|----|----|----|----|----|----|----|----|
| Database |  |  |  |  |  |  | имя БД |
| Calls  |  |  |  |  |  |  | общее количество исполнений всех запросов (сумма вызовов). |
| Time (s)  |  |  |  |  |  |  | затраченное время в секундах |
|  |  |  |  |  |  | Plan | время, затраченное на планирование (сумма total_plan_time) – доступно с версии pg_stat_statements 1.8 |
|  |  |  |  |  |  | Exec | время, затраченное на выполнение (сумма total_time или total_exec_time) |
|  |  |  |  |  |  | Read | время, затраченное на чтение блоков (сумма blk_read_time) |
|  |  |  |  |  |  | Write | время, затраченное на запись блоков (сумма blk_write_time) |
|  |  |  |  |  |  | Trg | время, затраченное на выполнение функций триггера |
| Temp I/O Time |  |  |  |  |  |  | время, потраченное на временные блоки ввода-вывода файлов |
|  |  |  |  |  | Read  |  | время, затраченное на чтение временных блоков файлов, в секундах |
|  |  |  |  |  | Write  |  | время, затраченное на запись временных блоков файлов в секундах |
| Fetched (blk) |  |  |  |  |  |  | общее количество блоков, извлеченных с диска и кэша буфера |
|  |  |  |  | Shared  |  |  | общее количество найденных общих блоков (сумма shared_blks_read + shared_blks_hit) |
|  |  |  |  | Local  |  |  | общее количество локальных блоков (сумма local_blks_read + local_blks_hit) |
| Dirtied (blk) |  |  |  |  |  |  | общее количество блоков, заполненных в БД |
|  |  |  | Shared  |  |  |  | общее количество общих блоков, заполненных в БД (сумма shared_blks_dirtied) |
|  |  |  | Local  |  |  |  | общее количество локальных блоков, заполненных в БД (сумма local_blks_dirtied) |
| Temp (blk) |  |  |  |  |  |  | блоки, используемые для операций соединения и сортировки |
|  |  | Read  |  |  |  |  | прочитанные блоки (сумма temp_blks_read) |
|  |  | Write  |  |  |  |  | записанные блоки (сумма temp_blks_written) |
| Local (blk) |  |  |  |  |  |  | блоки, используемые для временных таблиц |
|  | Read  |  |  |  |  |  | прочитанные блоки (сумма local_blks_read) |
|  | Write  |  |  |  |  |  | записанные блоки (сумма local_blks_written) |
| Statements  |  |  |  |  |  |  | общее количество перехваченных заявлений |
| WAL size |  |  |  |  |  |  | общий объем WAL, сгенерированный операторами (сумма wal_bytes) |

Таблица 4.2 – Описание параметров отчета Statement statistics by database

### Statement statistics by database (Статистика запросов по базе данных)

Таблица Рисунок 4.3 содержит агрегированную общую статистику данных pg_stat_statements по каждой БД (если расширение pg_stat_statements было доступно в течение интервала отчета).

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image28.png" style="width:6.69236in;height:1.05764in" />

Рисунок 4.3 – Пример отчета Statement statistics by database

| **Параметр** |  | **Описание** |
|----|----|----|
| Database |  | имя БД |
| Calls |  | общее количество выполнения всех запросов (сумма вызовов) |
| Time(s) |  | затраченное время в секундах |
|  | Plan | время, затраченное на планирование (сумма total_plan_time) – доступно с версии pg_stat_statements 1.8 |
|  | Exec | время, затраченное на выполнение (сумма total_time или total_exec_time) |
|  | Read | время, затраченное на чтение блоков (сумма blk_read_time) |
|  | Write | время, затраченное на запись блоков (сумма blk_write_time) |
|  | Trg | время, затраченное на выполнение функций триггера |
| Fetched (blk) |  | общее количество блоков, извлеченных с диска и кэша буфера |
|  | Shared | общее количество найденных общих блоков (сумма shared_blks_read + shared_blks_hit) |
|  | Local | общее количество локальных блоков (сумма local_blks_read + local_blks_hit) |
| Dirtied (blk) |  | общее количество блоков, заполненных в БД |
|  | Shared | общее количество общих блоков, заполненных в БД (сумма shared_blks_dirtied) |
|  | Local | общее количество локальных блоков, заполненных в БД (сумма local_blks_dirtied) |
| Temp (blk) |  | блоки, используемые для операций соединения и сортировки |
|  | Read | прочитанные блоки (сумма temp_blks_read) |
|  | Write | записанные блоки (сумма temp_blks_written) |
| Local (blk) |  | блоки, используемые для временных таблиц |
|  | Read | прочитанные блоки (сумма local_blks_read) |
|  | Write | записанные блоки (сумма local_blks_written) |
| Statements |  | общее количество перехваченных заявлений |
| WAL size |  | общий объем WAL, сгенерированный операторами (сумма wal_bytes) |

Таблица 4.3 – Описание параметров отчета Statement statistics by database

### Cluster statistics (Статистика кластера)

Таблица Рисунок 4.4 содержит данные из представления pg_stat_bgwriter.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image29.png" style="width:2.94446in;height:3.4709in" />

Рисунок 4.4 – Пример отчета Cluster statistics

Таблица 4.4 – Описание параметров отчета Cluster statistics

| **Параметр** | **Описание** |
|----|----|
| Scheduled checkpoints | общее количество контрольных точек, завершенных по расписанию благодаря параметру checkpoint_timeout (поле checkpoints_timed) |
| Requested checkpoints | общее количество других контрольных точек из-за значений параметров max_wal_size, archive_timeout и команды CHECKPOINT (поле checkpoints_req) |
| Checkpoint write time(s) | общее время записи контрольных точек в секундах (поле checkpoint_write_time) |
| Checkpoint sync time(s) | общее время синхронизации контрольных точек в секундах (поле checkpoint_sync_time) |
| Checkpoints buffers written | общее количество буферов, записанных процессом Checkpointer (поле buffers_checkpoint) |
| Background buffers written | общее количество буферов, записанных фоновым процессом записи (поле buffers_clean) |
| Backend buffers written | общее количество буферов, записанных backend (поле buffers_backend) |
| Backend fsync count | общее количество вызовов fsync backend (поле buffers_backend_fsync) |
| Bgwriter interrupts (too many buffers) | общее количество прерываний фонового писателя из-за достижения значения параметра bgwriter_lru_maxpages |
| Number of buffers allocated | общее количество выделенных буферов (поле buffers_alloc) |
| WAL generated | общее количество сгенерированных WAL (на основе pg_current_wal_lsn()) |
| WAL segments archived | количество архивированных сегментов WAL (на основе archived_count представления pg_stat_archiver) |
| WAL segments archive failed | количество неудач архивирования сегментов WAL (на основе failed_count представления pg_stat_archiver) |

### WAL statistics (Статистика WAL)

Таблица Рисунок 4.5 содержит данные из представления pg_stat_wal[^1].

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image30.png" style="width:2.42708in;height:4.5in" />

Рисунок 4.5 – Пример отчета WAL statistics

Таблица 4.5 – Описание параметров отчета WAL statistics

<table>
<colgroup>
<col style="width: 28%" />
<col style="width: 71%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>WAL generated</td>
<td>Общий объем сгенерированного WAL (wal_bytes)</td>
</tr>
<tr>
<td>WAL per second</td>
<td>Средний объем WAL, генерируемого в секунду</td>
</tr>
<tr>
<td>WAL records</td>
<td>Общее количество сгенерированных записей WAL (wal_records)</td>
</tr>
<tr>
<td>WAL FPI</td>
<td>Общее количество созданных полных изображений WAL-страниц (wal_fpi)</td>
</tr>
<tr>
<td>WAL buffers full</td>
<td>Количество раз, когда данные WAL записывались на диск из-за того, что буферы WAL заполнялись (wal_buffers_full)</td>
</tr>
<tr>
<td>WAL writes</td>
<td>Количество раз, когда буферы WAL записывались на диск с помощью запроса XLogWrite (wal_write)</td>
</tr>
<tr>
<td>WAL writes per second</td>
<td>Среднее количество раз, которое буферы WAL записываются на диск посредством запроса XLogWrite в секунду</td>
</tr>
<tr>
<td>WAL sync</td>
<td>Количество раз, когда файлы WAL были синхронизированы с диском посредством запроса issue_xlog_fsync</td>
</tr>
<tr>
<td>WAL syncs per second</td>
<td>Среднее количество раз, когда файлы WAL синхронизировались с диском с помощью запроса issue_xlog_fsync в секунду</td>
</tr>
<tr>
<td>WAL write time (s)</td>
<td><p>Общее время, затраченное на запись буферов WAL на диск с использованием запроса XLogWrite, в секундах</p>
<p>Это включает время синхронизации, когда wal_sync_method является open_datasync или open_sync (wal_write_time)</p></td>
</tr>
<tr>
<td>WAL write duty</td>
<td>Процентное соотношение времени записи WAL от общего времени отчета</td>
</tr>
<tr>
<td>WAL sync time (s)</td>
<td>Общее количество времени, затраченного на синхронизацию файлов WAL с диском посредством выполнения запроса issue_xlog_fsync, в секундах</td>
</tr>
<tr>
<td>WAL sync duty</td>
<td>Процентное соотношение времени синхронизации WAL от общего времени отчета</td>
</tr>
</tbody>
</table>

### Tablespace statistics (Статистика табличных пространств)

Таблица Рисунок 4.6 содержит информацию о размерах и росте табличных пространств.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image31.png" style="width:2.95833in;height:0.9375in" alt="111" />

Рисунок 4.6 – Пример отчета Tablespace statistics

| **Параметр** | **Описание** |
|----|----|
| Tablespace | имя табличного пространства |
| Path | путь к табличному пространству |
| Size | размер табличного пространства на момент последнего снапшота в интервале отчета |
| Growth | рост табличного пространства в течение интервала отчета |

Таблица 4.6 – Описание параметров отчета Tablespace statistics

## SQL Query statistics (Статистика SQL-запросов)

В данном разделе отчета содержатся таблицы топ запросов за интервал отчета, отсортированные по нескольким важным статистикам. Данные берутся из представления pg_stat_statements, если оно было доступно во время снятия снапшота.

### Top SQL by elapsed time (Топ SQL-запросов по затраченному времени)

Таблица Рисунок 4.7 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по прошедшему времени total_plan_time + total_exec_time из представления pg_stat_statements.

pg_stat_statements.total_plan_time выключена по умолчанию, для включения этой метрики и расчета данных таблиц необходимо включить параметр pg_stat_statements.track_planning = 'on' в postgresql.conf.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image32.png" style="width:6.69236in;height:1.1625in" />

Рисунок 4.7 – Пример отчета Top SQL by elapsed time

| **Параметр** |  | **Описание** |
|----|----|----|
| Query ID |  | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database |  | имя БД запроса (получено из поля dbid) |
| %Total |  | общее время данного утверждения в процентах от общего времени всех утверждений в кластере |
| Time(s) |  | время, затраченное на выполнение данного утверждения (в секундах) |
|  | Elapsed | общее время, затраченное на выполнение данного утверждения (total_plan_time + total_exec_time) |
|  | Plan | время, затраченное на планирование этого утверждения (поле total_plan_time) |
|  | Exec | время, затраченное на выполнение данного запроса (поле total_exec_time) |
| I\O Time(s) |  |  |
|  | Read | время, затраченное на чтение блоков (поле blk_read_time) |
|  | Write | время, затраченное на запись блоков (поле blk_write_time) |
| CPU time(s) |  | время, затраченное на работу центрального процессора. Основано на данных, предоставляемых расширением pg_stat_kcache |
|  | Usr | время процессора, проведенное в пространстве пользователя |
|  | Sys | время процессора, затраченное в пространстве ядра |
| Plans |  | количество раз, когда утверждение было запланировано (поле plans) |
| Executions |  | количество раз, когда оператор был выполнен (поле calls) |

Таблица 4.7 – Описание параметров отчета Top SQL by elapsed time

### Top SQL by planning time (Топ SQL-запросов по времени планирования)

Таблица Рисунок 4.8 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по полю total_plan_time представления pg_stat_statements.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image33.png" style="width:6.69236in;height:1.17222in" />

Рисунок 4.8 – Пример отчета Top SQL by planning time

| **Параметр** |  | **Описание** |
|----|----|----|
| Query ID |  | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database |  | имя БД запроса (получено из поля dbid) |
| Plan elapsed(s) |  | время, затраченное на планирование данного утверждения (поле total_plan_time) |
| %Elapsed |  | время планирования этого утверждения в процентах от времени выполнения утверждения |
| Plan times (ms) |  | подробная статистика времени планирования данного утверждения (в миллисекундах) |
|  | Mean | среднее время, затраченное на планирование этого утверждения (поле mean_plan_time) |
|  | Min | минимальное время, затраченное на планирование этого утверждения (поле min_plan_time) |
|  | Max | максимальное время, затраченное на планирование этого утверждения (поле max_plan_time) |
|  | StdErr | популяционное стандартное отклонение времени, затраченное на планирование данного утверждения (поле stddev_plan_time) |
| Plans |  | количество раз, когда это утверждение было запланировано (поле plans) |
| Executions |  | количество раз, когда этот оператор был выполнен (поле calls) |

Таблица 4.8 – Описание параметров отчета Top SQL by planning time

### Top SQL by execution time (Топ SQL-запросов по времени выполнения)

Таблица Рисунок 4.9 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по полю total_time (или total_exec_time) представления pg_stat_statements.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image34.png" style="width:6.69236in;height:1.12083in" />

Рисунок 4.9 – Пример отчета Top SQL by execution time

| **Параметр** |  | **Описание** |
|----|----|----|
| Query ID |  | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database |  | имя БД запроса (получено из поля dbid) |
| Exec(s) |  | время, затраченное на выполнение данного запроса (поле total_exec_time) |
| %Elapsed |  | время выполнения этого оператора в процентах от времени выполнения запроса |
| %Total |  | время выполнения данного запроса в процентах от общего времени выполнения всех операторов в кластере |
| I/O time(s): |  |  |
|  | Read | время, затраченное на чтение блоков (поле blk_read_time) |
|  | Write | время, затраченное на запись блоков (поле blk_write_time) |
| Rows |  | количество строк, извлеченных или затронутых запросом (поле rows) |
| Execution times (ms) |  | подробная статистика времени выполнения данного запроса (в миллисекундах) |
|  | Mean | среднее время выполнения данного запроса (поле mean_exec_time) |
|  | Min | минимальное время, затраченное на выполнение данного запроса (поле min_exec_time) |
|  | Max | максимальное время выполнения данного запроса (поле max_exec_time) |
|  | StdErr | популяционное стандартное отклонение времени, затраченное на выполнение данного запроса (поле stddev_exec_time) |
| Executions |  | количество раз, за которое было выполнено данное запроса (поле calls) |

Таблица 4.9 – Описание параметров отчета Top SQL by execution time

### Top SQL by executions (Топ SQL-запросов по количеству выполнений)

Таблица Рисунок 4.10 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по полю calls представления pg_stat_statements.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image35.png" style="width:6.80208in;height:0.90625in" alt="33333" />

Рисунок 4.10 – Пример отчета Top SQL by executions

| **Параметр** | **Описание** |
|----|----|
| Query ID | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database | имя БД запроса (получено из поля dbid) |
| Executions | количество выполнений запроса (поле calls) |
| %Total | вызовы данного запроса в процентах от общего количества вызовов всех запросов в кластере |
| Rows | количество строк, извлеченных или затронутых запросом (поле rows) |
| Mean(ms) | среднее время, проведенное в запросе, в миллисекундах (поле mean_time или mean_exec_time) |
| Min(ms) | минимальное время, затраченное в запросе, в миллисекундах (поле min_time или min_exec_time) |
| Max(ms) | максимальное время, проведенное в запросе, в миллисекундах (поле max_time или max_exec_time) |
| StdErr(ms) | популяционное стандартное отклонение времени, проведенное в запросе, в миллисекундах (поле stddev_time или stddev_exec_time) |
| Elapsed(s) | количество времени, затраченное на выполнение данного запроса, в секундах (поле total_time или total_exec_time) |

Таблица 4.10 – Описание параметров отчета Top SQL by executions

### Top SQL by I/O wait time (Топ SQL-запросов по времени ожидания ввода/вывода)

Таблица Рисунок 4.11 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по времени чтения и записи (blk_read_time + blk_write_time).

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image36.png" style="width:6.69236in;height:1.09653in" />

Рисунок 4.11 – Пример отчета Top SQL by I/O wait time

| **Параметр** |  | **Описание** |
|----|----|----|
| Query ID |  | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database |  | имя БД запроса (получено из поля dbid) |
| IO(s) |  | количество времени, затраченное на чтение и запись (время ввода/вывода) данным утверждением в секундах (blk_read_time + blk_write_time) |
| R(s) |  | количество времени, затраченное на чтение, данным оператором в секундах (blk_read_time) |
| W(s) |  | количество времени, затраченное на запись, данным оператором в секундах (blk_write_time) |
| %Total |  | время ввода/вывода данного оператора в процентах от общего времени ввода/вывода для всех операторов в кластере |
| Reads |  | количество блоков, прочитанных данным оператором, разделенное на три подстолбца |
|  | Shr | общие чтения (поле shared_blks_read) |
|  | Loc | локальные чтения (поле local_blks_read) |
|  | Tmp | временные чтения (поле temp_blks_read) |
| Writes |  | количество блоков, записанных данным оператором, разделенное на три подстолбца |
|  | Shr | общие записи (поле shared_blks_written) |
|  | Loc | локальные записи (поле local_blks_written) |
|  | Tmp | временные записи (поле temp_blks_written) |
| Elapsed(s) |  | количество времени, затраченное на выполнение данного запроса в секундах (поле total_time или total_exec_time) |
| Executions |  | количество выполнений для данного запроса (поле calls) |

Таблица 4.11 – Описание параметров отчета Top SQL by I/O wait time

### Top SQL by shared blocks fetched (Топ SQL-запросов по выбранным общим блокам)

Таблица Рисунок 4.12 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по прочитанным и перехваченным блокам, помогающие обнаружить запросы которые обрабатывают наибольшее количество данных.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image37.png" style="width:6.61458in;height:1.10417in" alt="444444" />

Рисунок 4.12 – Пример отчета Top SQL by shared blocks fetched

| **Параметр** | **Описание** |
|----|----|
| Query ID | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database | имя БД запроса (получено из поля dbid) |
| blks fetched | количество найденных блоков (выражение shared_blks_hit + shared_blks_read) |
| %Total | количество блоков, найденных для данного запроса в процентах от общего количества блоков, найденных для всех утверждений в кластере |
| Hits(%) | процент блоков, полученных из буферов в пределах всех полученных блоков |
| Elapsed(s) | количество времени, затраченное на выполнение данного запроса, в секундах (поле total_time или total_exec_time+total_plan_time) |
| Rows | количество строк, извлеченных или затронутых данным запросом (поле rows) |
| Executions | количество выполнений для данного запроса (поле calls) |

Таблица 4.12 – Описание параметров отчета Top SQL by shared blocks fetched

### Top SQL by shared blocks read (Топ SQL-запросов по количеству прочитанных разделяемых блоков)

Таблица Рисунок 4.13 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по общим прочитанным блокам, помогающие обнаружить наиболее интенсивные по чтению операторы.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image38.png" style="width:6.69236in;height:1.18056in" />

Рисунок 4.13 – Пример отчета Top SQL by shared blocks read

| **Параметр** | **Описание** |
|----|----|
| Query ID | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database | имя БД запроса (получено из поля dbid) |
| Reads | количество общих блоков чтения для данного запроса (поле shared_blks_read) |
| %Total | количество общих чтений для данного запроса в процентах от общего количества общих чтений для всех утверждений в кластере |
| Hits(%) | процент блоков, полученных из буферов, среди всех полученных блоков |
| Elapsed(s) | количество времени, затраченное на выполнение данного запроса в секундах (поле total_time или total_exec_time+total_plan_time) |
| Rows | количество строк, извлеченных или затронутых данным запросом (поле rows) |
| Executions | количество выполнений для данного запроса (поле calls) |

Таблица 4.13 – Описание параметров отчета Top SQL by shared blocks read

### Top SQL by shared blocks dirtied (Топ SQL-запросов по заполненным разделяемым блокам)

Таблица Рисунок 4.14 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по количеству общих заполненных буферов, помогающие обнаружить наиболее изменяющие данные запросы.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image39.png" style="width:7.08681in;height:1.52639in" />

Рисунок 4.14 – Пример отчета Top SQL by shared blocks dirtied

| **Параметр** | **Описание** |
|----|----|
| Query ID | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database | имя БД запроса (получено из поля dbid) |
| User | Имя пользователя |
| Dirtied | количество общих блоков, заполненных этим запросом (поле shared_blks_dirtied) |
| %Total | количество общих блоков, заполненных этим запросом, в процентах от общего количества общих блоков, заполненными всеми операторами в кластере |
| Hits(%) | процент блоков, полученных из буферов, среди всех полученных блоков |
| Elapsed(s) | количество времени, затраченное на выполнение данного запроса в секундах (поле total_time или total_exec_time+total_plan_time) |
| Rows | количество строк, извлеченных или затронутых данным запросом (поле rows) |
| Executions | количество выполнений для данного запроса (поле calls) |

Таблица 4.14 – Описание параметров отчета Top SQL by shared blocks dirtied

### Top SQL by shared blocks written (Топ SQL-запросов по записи общих блоков)

Таблица Рисунок 4.15 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, выполняющие записи отсортированные по количеству записанных блоков.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image40.png" style="width:7.08681in;height:0.78819in" />

Рисунок 4.15 – Пример отчета Top SQL by shared blocks written

| **Параметр** | **Описание** |
|----|----|
| Query ID | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database | имя БД запроса (получено из поля dbid) |
| User | Имя пользователя |
| Written | количество блоков, записанных данным запросом (поле shared_blks_written |
| %Total | количество блоков, записанных данным запросом в процентах от общего количества блоков, записанных всеми операторами в кластере |
| %BackendW | количество блоков, записанных данным запросом, в процентах от всех блоков, записанных backend в кластере (поле buffers_backend представления pg_stat_bgwriter) |
| Hits(%) | процент блоков, полученных из буферов, среди всех полученных блоков |
| Elapsed(s) | количество времени, затраченное на выполнение данного запроса в секундах (поле total_time или total_exec_time+total_plan_time) |
| Rows | количество строк, извлеченных или затронутых данным запросом (поле rows) |
| Executions | количество выполнений данного запроса (поле calls) |

Таблица 4.15 – Описание параметров отчета Top SQL by shared blocks written

### Top SQL by WAL size (Топ SQL-запросов по размеру WAL)

Таблица Рисунок 4.16 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по размеру WAL (доступно в pg_stat_statements, начиная с версии 1.8).

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image41.png" style="width:6.91667in;height:1.39583in" />

Рисунок 4.16 – Пример отчета Top SQL by WAL size

| **Параметр** | **Описание** |
|----|----|
| Query ID | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database | имя БД запроса (получено из поля dbid) |
| User | Имя пользователя |
| WAL | объем WAL, сгенерированный запросом (поле wal_bytes) |
| %Total | объем WAL, сгенерированный оператором, как процент от общего объема WAL, сгенерированного в кластере (приращение pg_current_wal_lsn()) |
| Dirtied | количество общих блоков, заполненных этим запросом (поле shared_blks_dirtied) |
| WAL FPI | общее количество полностраничных образов WAL, сгенерированных этим запросом (поле wal_fpi) |
| WAL records | общее количество байт WAL, сгенерированных запросом (поле wal_bytes) |

Таблица 4.16 – Описание параметров отчета Top SQL by WAL size

### Complete list of SQL texts (Полный список текстов SQL)

Таблица содержит полный текст SQL-запросов и состоит из столбцов:

- 
- 

Query ID – идентификатор запроса в виде хэша БД;Query Text – текст SQLзапроса.<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image42.png" style="width:7.08681in;height:3.46736in" />

Рисунок 4.17 - Пример отчета Complete list of SQL texts

### Top SQL by temp usage (Топ SQL-запросов по использованию временных данных)

Таблица Рисунок 4.18 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по temp I/O, рассчитанные как сумма полей temp_blks_read, temp_blks_written, local_blks_read и local_blks_written.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image43.png" style="width:7.19214in;height:0.63884in" />

Рисунок 4.18 – Пример отчета Top SQL by temp usage

| **Параметр** |  | **Описание** |
|----|----|----|
| Query ID |  | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database |  | имя БД запроса (получено из поля dbid) |
| Local fetched |  | количество извлеченных локальных блоков (выражение local_blks_hit + local_blks_read) |
| Hits(%) |  | процент локальных блоков, полученных из временных буферов, от всех полученных локальных блоков |
| Local (blk) |  | статистика ввода/вывода блоков, используемых во временных таблицах |
|  | Write | количество записанных локальных блоков (local_blks_written) |
|  | %Total | количество локальных блоков, записанных данным запросом в процентах от общего количества локальных блоков, записанных для всех операторов в кластере |
|  | Read | количество прочитанных локальных блоков (local_blks_read) |
|  | %Total | количество локальных блоков, прочитанных данным запросом в процентах от общего количества локальных блоков, прочитанных всеми операторами в кластере |
| Temp (blk) |  | статистика ввода/вывода блоков, используемых в операциях сортировки и объединения |
|  | Write | количество записанных временных блоков (temp_blks_written) |
|  | %Total | количество записанных временных блоков данным запросом в процентах от общего количества записанных временных блоков для всех операторов в кластере |
|  | Read | количество прочитанных локальных блоков (temp_blks_read) |
|  | %Total | количество прочитанных локальных блоков данным запросом в процентах от общего количества прочитанных локальных блоков для всех операторов в кластере |
| Elapsed(s) |  | количество времени, затраченного на выполнение данного запроса в секундах (поле total_time или total_exec_time+total_plan_time) |
| Rows |  | количество строк, извлеченных или затронутых данным запросом (поле rows) |
| Executions |  | количество выполнений для данного запроса (поле calls) |

Таблица 4.17 – Описание параметров отчета Top SQL by temp usage

## Rusage statistics (Статистика использования ресурсов)

Данный раздел содержит статистику использования ресурсов, предоставленную расширением pg_stat_kcache, если оно было доступно в интервале отчета.

### Top SQL by system and user time (Топ SQL-запросов по потреблению системного и пользовательского времени)

Таблица Рисунок 4.19 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по сумме полей user_time и system_time расширения pg_stat_kcache.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image44.png" style="width:6.66667in;height:1.52083in" alt="7777" />

Рисунок 4.19 – Пример отчета Top SQL by system and user time

| **Параметр** |  | **Описание** |
|----|----|----|
| Query ID |  | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |
| Database |  | имя БД запроса (получено из поля dbid) |
| User Time |  | использованное процессорное время пользователя |
|  | Plan (s) | время процессора пользователя, затраченное на планирование в секундах (поле plan_user_time) |
|  | Exec (s) | процессорное время пользователя, затраченное на выполнение в секундах (поле exec_user_time или user_time) |
|  | %Total | пользовательское процессорное время данного запроса в процентах от суммарного пользовательского процессорного времени для всех утверждений |
| System Time |  | использованное системное процессорное время |
|  | Plan (s) | системное процессорное время, прошедшее во время планирования в секундах (поле plan_system_time) |
|  | Exec (s) | системное процессорное время, затраченное на выполнение в секундах (поле exec_system_time или system_time) |
|  | %Total | системное процессорное время данного запроса в процентах от суммарного системного процессорного времени для всех операторов |

Таблица 4.18 – Описание параметров отчета Top SQL by system and user time

### Top SQL by reads/writes done by filesystem layer (Топ SQL-запросов по количеству операций чтения/записи, выполняемых на уровне файловой системы)

Таблица Рисунок 4.20 содержит топ запросы в количестве, которое указано в параметре pg_profile.topn, отсортированные по сумме полей reads и writes поля pg_stat_kcache.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image45.png" style="width:5.67497in;height:1.43059in" />

Рисунок 4.20 – Пример отчета Top SQL by reads/writes done by filesystem layer

| **Параметр** |  | **Описание** |  |
|----|----|----|----|
| Query ID |  | идентификатор запроса в виде хэша БД, пользователя и текста запроса. Совместим с утилитой pgcenter. Родное поле pg_stat_statements qieryid в шестнадцатеричной нотации показано в квадратных скобках |  |
| Database |  | имя БД запроса (получено из поля dbid) |  |
| Read Bytes |  | количество байт, прочитанных уровнем файловой системы |  |
|  | Plan | байты, прочитанные во время планирования (поле plan_reads) |  |
|  | Exec | байты, прочитанные во время выполнения (поле exec_reads) |  |
|  | %Total | байты, прочитанные данным запросом как процент от суммарного количества прочитанных байтов для всех операторов |  |
| Write Bytes |  | количество байт, записанных уровнем файловой системы (поле writes) |  |
|  | Plan | байты, записанные во время планирования (поле plan_writes) |  |
|  | Exec | байты, записанные во время выполнения (поле exec_writes) |  |
|  | %Total | байты, записанные данным запросом как процент от общего количества байт записанных всеми операторами |  |

Таблица 4.19 – Описание параметров отчета Top SQL by reads/writes done by filesystem layer

### Top SQL by JIT elapsed time (Топ SQL-запросов отсортированных по общему JIT-времени)

Таблица «Top SQL by JIT elapsed time» Топ SQL-запросов, отсортированных по суммарному JIT-времени, связанному со следующими параметрами:

- 
- 
- 
- 

| **Параметр** |  | **Описание** |
|----|----|----|
| Query ID |  | идентификатор запроса, предоставленный расширением pg_stat_statements (queryid), в шестнадцатеричной нотации. Альтернативный идентификатор запроса в виде хэша из dbid, userid и queryid показан в квадратных скобках, этот идентификатор совместим с утилитой pgcenter. |
| Database  |  | имя базы данных, в которой было выполнено заявление (получено из поля dbid) |
| User  |  | имя пользователя, выполнившего это заявление (получено из field userid) |
| JIT total (s) |  |  время, затрачиваемое на генерацию JIT в секундах (jit_generation_time + jit_inlining_time + jit_optimization_time + jit_emission_time) |
| Generation |  | генерация |
|  | Count  | общее количество функций, скомпилированных JIT для заявления |
|  | Gen. time | общее время, которое заявление потратило на генерацию кода JIT |
| Inlining |  | Встраивание |
|  | Count  | количество раз, когда функции были встроены |
|  | Time  | общее количество времени, затраченного заявлением на встраивание функций (в секундах) |
| Optimization |  | оптимизация |
|  | Count  | количество раз, сколько заявление было оптимизировано |
|  | Time  | общее количество секунд, затраченных заявлением на оптимизацию |
| Emission |  | эмиссия |
|  | Count  | количество раз, сколько был сгенерирован код |
|  | Time  | общее потраченное время заявлением на сгенерированном коде в секундах |
| Time (s)  |  | время, затраченное этим заявлением в секундах |
|  | Plan  | время, затраченное планом на планирование этого утверждения (field total_plan_time в поле) |
|  | Exec  | Время, затраченное выполнением этого запроса (поле total_exec_time). |
| I/O time (s) |  | Время ввода-вывода (с) |
|  | Read  | Время, затраченное на прочтение блоков (field blk_read_time). |
|  | Write  | Время, затраченное на запись блоков (поле blk_write_time). |

jit_generation_time;jit_inlining_time;jit_optimization_time;jit_emission_time.Таблица 4.20 – Описание параметров отчета Top SQL by JIT elapsed time

### Complete list of SQL texts (Полный список текстов SQL-запросов)

Таблица Рисунок 4.21 содержит тексты всех запросов, упомянутых в отчете. Можно использовать ссылку Query ID в любой таблице статистики, чтобы перейти туда и увидеть текст запроса.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image46.png" style="width:5.44792in;height:1.01042in" alt="88888" />

Рисунок 4.21 – Пример отчета Complete list of SQL texts

## Schema object statistics (Статистика объекта схемы)

Данный раздел отчета содержит топ объектов БД, используя статистику из представлений Statistics Collector.

### Top tables by estimated sequentially scanned volume (Топ таблиц по предполагаемому объему последовательного сканирования)

Таблица Рисунок 4.22 содержит топ запросы БД, отсортированные по предполагаемому объему, прочитанному последовательным сканированием. Основано на представлении pg_stat_all_tables. Здесь можно искать таблицы, в которых, возможно, отсутствует какой-либо индекс.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image47.png" style="width:6.69236in;height:0.54514in" />

Рисунок 4.22 – Пример отчета Top tables by estimated sequentially scanned volume

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД, в которой находится таблица |
| Tablespace | имя табличного пространства, в котором находится таблица |
| Schema | имя схемы таблицы |
| Table | имя таблицы |
| ~SeqBytes | предполагаемый объем, прочитанный при последовательном сканировании. Рассчитывается как сумма размера отношения, умноженная на seq_scan для всех снапшотов отчета |
| SeqScan | количество последовательных сканирований, выполненных над таблицей (поле seq_scan) |
| IxScan | количество индексных сканирований, инициированных для этой таблицы (поле idx_scan) |
| IxFet | количество живых строк, извлеченных при индексном сканировании (поле idx_tup_fetch) |
| Ins | количество вставленных строк (поле n_tup_ins) |
| Upd | количество обновленных строк (включая HOT) (поле n_tup_upd) |
| Del | количество удаленных строк (поле n_tup_del) |
| Upd(HOT) | количество строк, обновленных по HOT (поле n_tup_hot_upd) |

Таблица 4.21 – Описание параметров отчета Top tables by estimated sequentially scanned volume

### Top tables by blocks fetched (Топ таблиц по выбранным блокам)

Таблица Рисунок 4.23 содержит захваченный блок – это блок, обрабатываемый с диска (read) или из общих буферов (hit). Таблицы в этом списке сортируются по сумме найденных блоков для отношения таблицы, ее индексов, TOAST-таблицы (если существует) и индекса TOAST (если существует). Этот раздел может привлечь внимание к таблицам с избыточной обработкой блоков. Основано на данных представления pg_statio_all_tables.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image48.png" style="width:6.69236in;height:0.82569in" />

Рисунок 4.23 – Пример отчета Top tables by blocks fetched

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД таблицы |
| Tablespace | имя табличного пространства, в котором находится таблица |
| Schema | имя схемы таблицы |
| Table | имя таблицы |
| Heap | статистика по найденным блокам таблиц (heap_blks_read + heap_blks_hit) |
| Ix | статистика для всех найденных блоков индексов таблиц (idx_blks_read + idx_blks_hit) |
| TOAST | статистика для блоков, полученных для TOAST-таблиц (toast_blks_read + toast_blks_hit) |
| TOAST-Ix | статистика для найденных блоков индекса TOAST (tidx_blks_read + tidx_blks_hit) |
| **Каждое поле статистики в этой таблице разделено на два столбца** |  |
| Blks | количество блоков, найденных для heap таблиц, индекса, TOAST или индекса TOAST |
| %Total | блоки, найденные для heap таблиц, индекса, TOAST или индекса TOAST в процентах от всех блоков, найденных во всем кластере |

Таблица 4.22 – Описание параметров отчета Top tables by blocks fetched

### Top tables by blocks read (Топ таблиц по прочитанным блокам)

Таблица Рисунок 4.24 содержит топ таблицы, отсортированные по количеству прочитанных блоков. Таблицы в этом списке отсортированы по сумме прочитанных блоков для таблицы, ее индексов, TOAST-таблицы (если существует) и индекса TOAST (если существует). Этот раздел может сфокусировать внимание на таблицах с чрезмерным количеством прочитанных блоков. Основано на данных представления pg_statio_all_tables.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image49.png" style="width:6.77083in;height:0.80208in" alt="565646445" />

Рисунок 4.24 – Пример отчета Top tables by blocks read

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД таблицы |
| Tablespace | имя табличного пространства, в котором находится таблица |
| Schema | имя схемы таблицы |
| Table | имя таблицы |
| Heap | статистика чтения блоков таблиц (heap_blks_read) |
| Ix | статистика чтения блоков всех индексов таблицы (idx_blks_read) |
| TOAST | статистика чтений блоков TOAST-таблиц (toast_blks_read) |
| TOAST-Ix | статистика чтения блоков индексов TOAST (tidx_blks_read) |
| Hit(%) | процент блоков, полученных из буферов, среди всех полученных блоков |
| **Каждая статистика чтения в этой таблице разделена на два столбца** |  |
| Blks | количество блочных чтений для heap таблиц, index, TOAST или индекса TOAST |
| %Total | блочные чтения для heap таблиц, индекса, TOAST или индекса TOAST как процент от всех блочных чтений во всем кластере |

Таблица 4.23 – Описание параметров отчета Top tables by blocks read

### Top DML tables (Топ таблиц по количеству операций DML)

Таблица Рисунок 4.25 содержит топ таблицы, отсортированные по количеству строк, затронутых DML, т.е. сумма n_tup_ins, n_tup_upd и n_tup_del (включая таблицы TOAST).

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image50.png" style="width:6.76042in;height:0.75in" alt="лглп" />

Рисунок 4.25 – Пример отчета Top DML tables

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД таблиц |
| Tablespace | имя табличного пространства, в котором находится таблица |
| Schema | имя схемы таблицы |
| Table | имя таблицы |
| Ins | количество вставленных строк (поле n_tup_ins) |
| Upd | количество обновленных строк (включая HOT) (поле n_tup_upd) |
| Del | количество удаленных строк (поле n_tup_del) |
| Upd(HOT) | количество обновленных строк HOT (поле n_tup_hot_upd) |
| SeqScan | количество последовательных сканирований, выполненных над таблицей (поле seq_scan) |
| SeqFet | количество живых строк, извлеченных в результате последовательного сканирования (поле seq_tup_read) |
| IxScan | количество индексных сканирований, инициированных для этой таблицы (поле idx_scan) |
| IxFet | количество живых строк, полученных при индексном сканировании (поле idx_tup_fetch) |

Таблица 4.24 – Описание параметров отчета Top DML tables

### Top tables by updated/deleted tuples (Топ таблиц по обновленным/удаленным записям)

Таблица Рисунок 4.26 содержит топ таблицы, отсортированные по количеству операций, вызывающих автовакуумную нагрузку, т.е. сумма n_tup_upd и n_tup_del (включая таблицы TOAST).

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image51.png" style="width:6.77083in;height:0.69792in" alt="прптоы" />

Рисунок 4.26 – Пример отчета Top tables by updated/deleted tuples

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД таблицы |
| Tablespace | имя табличного пространства, в котором находится таблица |
| Schema | имя схемы таблицы |
| Table | имя таблицы |
| Upd | количество обновленных строк (включая HOT) (поле n_tup_upd) |
| Upd(HOT) | количество строк, обновленных HOT (поле n_tup_hot_upd) |
| Del | количество удаленных строк (поле n_tup_del) |
| Vacuum | количество раз, когда эта таблица была обработана вручную (не считая VACUUM FULL) (поле vacuum_count) |
| AutoVacuum | количество раз, когда эта таблица была обработана фоновым процессом autovacuum (поле autovacuum_count) |
| Analyze | количество раз, когда эта таблица была проанализирована вручную (поле analyze_count) |
| AutoAnalyze | количество раз, когда эта таблица была проанализирована процессом autovacuum (поле autoanalyze_count) |

Таблица 4.25 – Описание параметров отчета Top tables by updated/deleted tuples

### Top growing tables (Топ таблиц по увеличению размера)

Таблица Рисунок 4.27 содержит топ таблицы, отсортированные по росту.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image52.png" style="width:7.08681in;height:1.21528in" />

Рисунок 4.27 – Пример отчета Top growing tables

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД таблицы |
| Tablespace | имя табличного пространства, в котором находится таблица |
| Schema | имя схемы таблицы |
| Table | имя таблицы |
| Size | размер таблицы, каким он был на момент последнего снапшота в интервале отчета |
| Growth | рост таблицы |
| Ins | количество вставленных строк (поле n_tup_ins) |
| Upd | количество обновленных строк (включая HOT) (поле n_tup_upd) |
| Del | количество удаленных строк (поле n_tup_del) |
| Upd(HOT) | количество строк, обновленных по HOT (поле n_tup_hot_upd) |

Таблица 4.26 – Описание параметров отчета Top growing tables

### Top indexes by blocks fetched (Топ индексов по выбранным блокам)

Таблица Рисунок 4.28 содержит захваченный блок – это блок, обрабатываемый с диска (read) или из общих буферов (hit). Основано на данных представления pg_statio_all_indexes.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image53.png" style="width:7.08681in;height:1.00972in" />

Рисунок 4.28 – Пример отчета Top indexes by blocks fetched

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД индекса |
| Tablespace | имя табличного пространства, в котором расположен индекс |
| Schema | имя схемы индекса |
| Table | имя таблицы |
| Index | имя индекса |
| Scans | количество сканирований, выполненных по индексу (поле idx_scan) |
| Blks | блоки, извлеченные из данного индекса (idx_blks_read + idx_blks_hit) |
| %Total | блоки, считанные для этого индекса, в процентах от всех блоков, считанных во всем кластере |

Таблица 4.27 – Описание параметров отчета Top indexes by blocks fetched

### Top indexes by blocks read (Топ индексов по прочитанным блокам)

Таблица Рисунок 4.29 содержит топ индексы, отсортированные по количеству прочитанных блоков. Основано на данных представления pg_statio_all_indexes.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image54.png" style="width:7.08681in;height:0.93056in" />

Рисунок 4.29 – Пример отчета Top indexes by blocks read

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД индекса |
| Tablespace | имя табличного пространства, в котором расположен индекс |
| Schema | имя схемы индекса |
| Table | имя таблицы |
| Index | имя индекса |
| Scans | количество сканирований, выполненных по индексу (поле idx_scan) |
| Blk Reads | количество дисковых блоков, прочитанных из данного индекса (поле idx_blks_read) |
| %Total | чтение блоков из данного индекса в процентах от всех чтений блоков во всем кластере |
| Hits(%) | процент индексных блоков, полученных из буферного кэша, среди всех индексных блоков, найденных для этого индекса |

Таблица 4.28 – Описание параметров отчета Top indexes by blocks read

### Top growing indexes (Топ таблиц по увеличению объемов индексов)

Таблица Рисунок 4.30 содержит топ индексы, отсортированные по росту.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image55.png" style="width:6.69236in;height:0.94097in" />

Рисунок 4.30 – Пример отчета Top growing indexes

| **Параметр** |  | **Описание** |
|----|----|----|
| Database |  | имя БД индекса |
| Tablespace |  | имя табличного пространства, в котором находится индекс |
| Schema |  | имя схемы индекса |
| Table |  | имя таблицы |
| Index |  | имя индекса |
| Index |  | статистика индекса |
|  | Size | размер индекса, каким он был на момент последнего снапшота в интервале отчета |
|  | Growth | рост индекса в течение интервала отчета |
| Table |  | статистика базовой таблицы |
|  | Ins | количество вставленных строк в базовую таблицу (поле n_tup_ins) |
|  | Upd | количество строк, обновленных в базовой таблице (без HOT) (n_tup_upd - n_tup_hot_upd) |
|  | Del | количество строк, удаленных из базовой таблицы (поле n_tup_del) |

Таблица 4.29 – Описание параметров отчета Top growing indexes

### Unused indexes (Неиспользуемые индексы)

Таблица Рисунок 4.31 содержит неиспользуемые индексы в течение интервала отчета, отсортированные по операциям DML над базовыми таблицами, вызывающими поддержку индексов. Индексы ограничений исключены.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image56.png" style="width:6.69236in;height:0.79653in" />

Рисунок 4.31 – Пример отчета Unused indexes

| **Параметр** |  | **Описание** |
|----|----|----|
| Database |  | имя БД индекса |
| Tablespace |  | имя табличного пространства, в котором расположен индекс |
| Schema |  | имя схемы индекса |
| Table |  | имя таблицы |
| Index |  | имя индекса |
| Index |  | статистика индекса |
|  | Size | размер индекса, каким он был на момент последнего снапшота в интервале отчета |
|  | Growth | рост индекса в течение интервала отчета |
| Table |  | статистика базовой таблицы |
|  | Ins | количество вставленных строк в базовую таблицу (поле n_tup_ins) |
|  | Upd | количество строк, обновленных в базовой таблице (без HOT) (n_tup_upd - n_tup_hot_upd) |
|  | Del | количество строк, удаленных из базовой таблицы (поле n_tup_del) |

Таблица 4.30 – Описание параметров отчета Unused indexes

## User function statistics (Статистика функций пользователя)

Данный раздел отчета содержит топ функции в кластере, основанные на представлении pg_stat_user_functions, которое наполняется данными о статистике выполнения функций.

### Top functions by total time (Топ функций по общему времени)

Таблица Рисунок 4.32 содержит топ функций, отсортированных по затраченному времени.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image57.png" style="width:6.69236in;height:1.29375in" />

Рисунок 4.32 – Пример отчета Top functions by total time

| **Параметр** |  | **Описание** |
|----|----|----|
| Database |  | имя БД функции |
| Schema |  | имя схемы индекса |
| Function |  | имя функции |
| Executions |  | количество вызовов данной функции (поле calls) |
| Time (s) |  | статистика времени выполнения функции в секундах |
|  | Total | общее время, затраченное на эту функцию и все другие вызванные ей функции (поле total_time) |
|  | Self | общее время, затраченное на выполнение самой функции без учета других вызванных ей функций (поле self_time) |
|  | Mean | среднее время выполнения одной функции |
|  | Mean self | среднее собственное время выполнения одной функции |

Таблица 4.31 – Описание параметров отчета Top functions by total time

### Top functions by executions (Топ функций по исполнению)

Таблица Рисунок 4.33 содержит топ функции, отсортированные по количеству выполнений.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image58.png" style="width:6.36753in;height:0.99045in" />

Рисунок 4.33 – Пример отчета Top functions by executions

| **Параметр** |  | **Описание** |
|----|----|----|
| Database |  | имя БД функции |
| Schema |  | имя схемы индекса |
| Function |  | имя функции |
| Executions |  | количество вызовов данной функции (поле calls) |
| Time(s) |  | статистика времени выполнения функции в секундах |
|  | Total | общее время, затраченное на эту функцию и все другие вызванные ей функции (поле total_time) |
|  | Self | общее время, затраченное на выполнение самой функции, без учета других вызванных ей функций (поле self_time) |
|  | Mean | среднее время выполнения одной функции |
|  | Mean self | среднее собственное время выполнения одной функции |

Таблица 4.32 – Описание параметров отчета Top functions by executions

### Top trigger functions by total time (Топ триггерных функций по общему времени)

Таблица Рисунок 4.34 содержит топ триггерных функций, отсортированных по затраченному времени.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image59.png" style="width:5.91511in;height:1.01309in" />

Рисунок 4.34 – Пример отчета Top trigger functions by total time

| **Параметр** |  | **Описание** |
|----|----|----|
| Database |  | имя БД функции |
| Schema |  | имя схемы индекса |
| Function |  | имя функции |
| Executions |  | количество вызовов данной функции (поле calls) |
| Time (s) |  | статистика времени выполнения функции в секундах |
|  | Total | общее время, затраченное на эту функцию и все другие вызванные ей функции (поле total_time) |
|  | Self | общее время, затраченное на выполнение самой функции, без учета других вызванных ей функций (поле self_time) |
|  | Mean | среднее время выполнения одной функции |
|  | Mean self | среднее собственное время выполнения одной функции |

Таблица 4.33 – Описание параметров отчета Top trigger functions by total time

## Vacuum–related stats (Статистика, связанная с вакуумом)

Данный раздел отчета содержит статистику работы процесса autovacuum. Если во время работы между снапшотами не было вакуумных операций – данный раздел останется пустым.

### Top tables by vacuum operations (Топ таблиц по статистике вакуума)

Таблица Рисунок 4.35 содержит топ таблицы, отсортированные по очистке (ручной и автоматической).

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image60.png" style="width:6.69236in;height:0.57153in" />

Рисунок 4.35 – Пример отчета Top tables by vacuum operations

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД таблицы |
| Tablespace | имя табличного пространства, в котором находится таблица |
| Schema | имя схемы таблицы |
| Table | имя таблицы |
| Vacuum count | количество раз, когда эта таблица была обработана вручную (не считая VACUUM FULL) (поле vacuum_count) |
| Autovacuum count | количество раз, когда эта таблица была обработана фоновым процессом autovacuum (поле autovacuum_count) |
| Ins | количество вставленных строк (поле n_tup_ins) |
| Upd | количество обновленных строк (включая HOT) (поле n_tup_upd) |
| Del | количество удаленных строк (поле n_tup_del) |
| Upd(HOT) | количество обновленных строк HOT (поле n_tup_hot_upd) |

Таблица 4.34 – Описание параметров отчета Top tables by vacuum operations

### Top tables by analyze operations (Топ таблиц по операциям анализа)

Таблица Рисунок 4.36 содержит топ таблицы, отсортированные по количеству запусков анализа (ручных и автоматических).

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image61.png" style="width:6.69236in;height:0.55556in" />

Рисунок 4.36 – Пример отчета Top tables by analyze operations

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД таблицы |
| Tablespace | имя табличного пространства, в котором находится таблица |
| Schema | имя схемы таблицы |
| Table | имя таблицы |
| Analyze count | количество раз, когда эта таблица была обработана вручную (поле analyze_count) |
| Autoanalyze count | количество раз, когда эта таблица была обработана фоновым процессом autovacuum (поле autoanalyze_count) |
| Ins | количество вставленных строк (поле n_tup_ins) |
| Upd | количество обновленных строк (включая HOT) (поле n_tup_upd) |
| Del | количество удаленных строк (поле n_tup_del) |
| Upd(HOT) | количество строк, обновленных по HOT (поле n_tup_hot_upd) |

Таблица 4.35 – Описание параметров отчета Top tables by analyze operations

### Top indexes by estimated vacuum load (Топ индексов по расчетной нагрузке вакуумного ввода/вывода)

В таблице Рисунок 4.37 представлена оценка неявной вакуумной нагрузки, вызванной индексами таблицы. Здесь представлены топ индексы, отсортированные по количеству вакуумов, выполненные для базовой таблицы, умноженные на размер индекса.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image62.png" style="width:6.76042in;height:0.45833in" alt="999999" />

Рисунок 4.37 – Пример отчета Top indexes by estimated vacuum I/O load

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД индекса |
| Tablespace | имя табличного пространства, в котором расположен индекс |
| Schema | имя схемы индекса |
| Table | имя таблицы |
| Index | имя индекса |
| ~Vacuum bytes | оценка вакуумной нагрузки, рассчитываемая как (vacuum_count + autovacuum_count) \* index_size |
| Vacuum cnt | количество раз, когда эта таблица была обработана вручную (не считая VACUUM FULL) (поле vacuum_count) |
| Autovacuum cnt | количество раз, когда эта таблица была обработана фоновым процессом autovacuum (поле autovacuum_count) |
| IX size | средний размер индекса в течение интервала отчета |
| Relsize | средний размер отношения в течение интервала отчета |

Таблица 4.36 – Описание параметров отчета Top indexes by estimated vacuum load

### Top tables by dead tuples ratio (Топ таблиц по проценту наличия удаленных записей)

Данный раздел содержит измененные таблицы Рисунок 4.38 с последним запуском vacuum. Статистика действительна для последнего снапшота в интервале отчета. Основана на представлении pg_stat_all_tables.

Топ таблицы размером 5 МБ и более, отсортированные по соотношению устаревших записей.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image63.png" style="width:6.69236in;height:0.58194in" />

Рисунок 4.38 – Пример отчета Top tables by dead tuples ratio

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД таблицы |
| Schema | имя схемы таблицы |
| Table | имя таблицы |
| Live | предполагаемое количество живых строк (n_live_tup) |
| Dead | предполагаемое количество мертвых строк (n_dead_tup) |
| %Dead | мертвые строки таблицы в процентах от всех строк таблицы |
| Last AV | последний раз, когда эта таблица была обработана фоновым процессом autovacuum (last_autovacuum) |
| Size | размер таблицы, каким он был на момент последнего снапшота отчета |

Таблица 4.37 – Описание параметров отчета Top tables by dead tuples ratio

### Top tables by modified tuples ratio (Топ таблиц по проценту измененных записей)

Данный раздел содержит модифицированные таблицы Рисунок 4.39 с последним запуском vacuum. Статистика действительна для последнего снапшота в интервале отчета. Основана на представлении pg_stat_all_tables.

Топ таблицы размером 5 МБ и более, отсортированные по соотношению модифицированных записей.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image64.png" style="width:6.41587in;height:0.63534in" />

Рисунок 4.39 – Пример отчета Top tables by modified tuples ratio

| **Параметр** | **Описание** |
|----|----|
| Database | имя БД таблицы |
| Schema | имя схемы таблицы |
| Table | имя таблицы |
| Live | предполагаемое количество живых строк (n_live_tup) |
| Dead | предполагаемое количество мертвых строк (n_dead_tup) |
| Mod | предполагаемое количество строк, измененных с момента последнего анализа этой таблицы (n_mod_since_analyze) |
| %Mod | модифицированные строки таблицы в процентах от всех строк в таблице |
| Last AA | последний раз, когда эта таблица была обработана фоновым процессом autovacuum |
| Size | размер таблицы, каким он был на момент последнего снапшота отчета |

Таблица 4.38 – Описание параметров отчета Top tables by modified tuples ratio

## Cluster settings during the report interval (Настройка кластера во время отчетного интервала)

Данный раздел отчета содержит параметры СУБД «Jatoba», а также значения встроенных системных функций version(), pg_postmaster_start_time(), pg_conf_load_time() и поле system_identifier функции pg_control_system() в течение интервала отчета.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image65.png" style="width:7.08681in;height:0.91667in" />

Рисунок 4.40 – Пример отчета Cluster settings during the report interval

| **Параметр** | **Описание** |
|----|----|
| Setting | имя параметра |
| reset_val | поле reset_val представления pg_settings. Жирный шрифт используется для отображения настроек, измененных в течение интервала отчета |
| Unit | единица измерения параметра |
| Source | конфигурационный файл, в котором была определена данная настройка, номер строки после точки с запятой |
| Notes | поле, содержащее временную метку образца, когда это значение наблюдалось впервые в течение интервала отчета |

Таблица 4.39 – Описание параметров отчета Cluster settings during the report interval

## Отчеты по компоненту «ja_Hipe_Cluster» (Citus)

Данный раздел отчетов содержит параметры высокопроизводительного кластера, созданного компонентом «ja_Hipe_Cluster» (Citus).

### Nodes 

Отчет содержит информацию об узлах кластера. В нем используются citus_stat_activity, pg_dist_node и функция run_command_on_all_nodes.

| **Название параметра** | **Название параметра в pg_profile** | **Тип данных параметра** | **Описание параметра** |
|----|----|----|----|
| Nodeid | Node id | Integer | Id узла |
| Groupid | Group id | Integer | Id группы |
| Nodename | Node name | Text | Наименование узла |
| nodeport | Node port | Integer | Порт |
| noderole | Node role | Noderole | Является ли узел первичным или вторичным |
| nodecluster | Node cluster | Name | Имя кластера |
| available | Available | integer | Доступность узла |
| count_conn | Count connection | integer | Количество соединений |

Таблица 4.40 - Описание параметров отчета Nodes

### Connectivity between all nodes 

Отчет содержит информацию о связь между всеми узлами кластера. В нем используется функция citus_check_cluster_node_health.

<table style="width:100%;">
<caption><p>Таблица 4.41 – Описание параметров отчета Connectivity between all nodes</p></caption>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 16%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Название параметра</strong></th>
<th style="text-align: center;"><strong>Название параметра в pg_profile</strong></th>
<th style="text-align: center;"><strong>Тип данных параметра</strong></th>
<th style="text-align: center;"><strong>Описание параметра</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>From_nodename</td>
<td>From node name</td>
<td>Text</td>
<td>Имя исходного узла</td>
</tr>
<tr>
<td>From_nodeport</td>
<td>From node port</td>
<td>integer</td>
<td>Порт на исходном узле</td>
</tr>
<tr>
<td>To_nodename</td>
<td>To node name</td>
<td>text</td>
<td>Имя узла назначения</td>
</tr>
<tr>
<td>To_nodeport</td>
<td>To node port</td>
<td>Integer</td>
<td><p>Порт на узле назначения</p>
<p> </p></td>
</tr>
<tr>
<td>Available</td>
<td>Available</td>
<td>integer</td>
<td>Доступность узла</td>
</tr>
</tbody>
</table>

Таблица 4.41 – Описание параметров отчета Connectivity between all nodes

### Tables (citus_tables)

Отчет содержит информацию о таблицах, распределенных и справочных.

| **Название параметра** | **Название параметра в pg_profile** | **Тип данных параметра** | **Описание параметра** |
|----|----|----|----|
| table_name | Table | Text | Наименование таблицы |
| citus_table_type | Type | Text | Тип таблицы (distributed - распределенная, reference - справочная) |
| distribution_column | Distribution column | Text | Наименование столбца распределения |
| colocation_id | Colocation id | Integer | Идентификатор группы совместного размещения |
| table_size | Table size | Text | Размер таблицы |
| shard_count | Shard count | Bigint | Число шардов |
| access_method | Access method | Text | Метод доступа (heap, columnar) |
|   | Growth size | Text | Размер таблицы (разница между текущим и предыдущим снимками) |
|   | Growth shard count | Bigint | Число шардов (разница между текущим и предыдущим снимками) |

Таблица 4.42 – Описание параметров отчета Tables

### Shards 

В отчет входит информация о том, к какой распределенной таблице принадлежит шард, где находится каждый шард (нода/узел и порт), к какому типу таблицы он принадлежит, его размер и статистика о столбце распределения для этого шарда. В случае хэш-распределенных таблиц это диапазоны хэш-токенов, назначенных этому шарду.

Представление citus_shards помогает изучать сегменты, позволяя, среди прочего, находить дисбаланс по размеру между узлами.

| **Название параметра** | **Название параметра в pg_profile** | **Тип данных параметра** | **Описание параметра** |
|----|----|----|----|
| citus_shards.table_name | Table | Regclass | Наименование таблицы и схемы |
| citus_shards.shardid | Shard id | Bigint | Id шарда |
| citus_shards.shard_name | Shard name | Text | Наименование шарда |
| citus_shards.citus_table_type | Table type | Text | Тип таблицы |
| citus_shards.colocation_id | Colocation id | Integer | Идентификатор группы совместного размещения |
| citus_shards.nodename | Node name | Text | Наименование ноды на которой расположен шард |
| citus_shards.nodeport | Node port | Integer | Порт |
| citus_shards.shard_size | Shard size | Bigint | Размер шарда |
| pg_dist_shard.shardstorage | Shard storage | character | Тип хранилища, используемый для этого шарда (‘t’, ‘c’, ‘f’). |
| pg_dist_shard.shardminvalue | Min value | Text | Для распределенных хэш-таблиц минимальное значение |
| pg_dist_shard.shardmaxvalue | Max value | text | Для распределенных хэш-таблиц максимальное значение |
|   | Growth size |  Bigint | Размер шарда (разница между текущим и предыдущим снимками) |

Таблица 4.43 – Описание параметров отчета Shards

### Blocked queries (citus_lock_waits)

Отчет содержит информацию о запросах, заблокированных во всем кластере.

| **Название параметра** | **Название параметра в pg_profile** | **Тип данных параметра** | **Описание параметра** |
|----|----|----|----|
| waiting_gpid | Waiting id | bigint | Id ожидающего запроса |
| blocking_gpid | Blocking id | bigint | Id блокирующего запроса |
| blocked_statement | Waiting query | Text | Заблокированный запрос |
| current_statement_in_blocking_process | Blocking query | Text | Блокирующий запрос |
| waiting_nodeid, | Waiting node id | Integer | Id ноды ожидающего запроса |
| blocking_nodeid | Blocking node id | integer | Id ноды блокирующего запроса |

Таблица 4.44 – Описание параметров отчета Blocked queries

### Query statistics (citus_stat_statements)

Отчет содержит статистику, как и для кого выполняются запросы.

| **Название параметра** | **Название параметра в pg_profile** | **Тип данных параметра** | **Описание параметра** |
|----|----|----|----|
| queryid | Query id | bigint | Id запроса |
| rolname | User | oid | Наименование пользователя выполнившего запрос |
| datname | Database | oid | Наименование бд |
| query | Query | text | Строка запроса |
| partition_key | Partition key | text | Значения столбца распределения в запросах |
| calls | Calls | bigint | Количество запусков запросов |

Таблица 4.45 – Описание параметров отчета Query statistics

### Rebalance progress (get_rebalance_progress) 

Отчет содержит информацию о процессе ребалансировки.

| **Название параметра** | **Название параметра в pg_profile** | **Тип данных параметра** | **Описание параметра** |
|----|----|----|----|
| Table_name | Table | Regclass | Наименование таблицы |
| Shardid | Shard id | Bigint | Id шарда |
| Source_shard_size | Source shard size | Text | Размер исходного шарда |
| Target_shard_size | Target shard size | Text | Размер целевого шарда |
| Percent_completed_estimate | Percent | numeric | Процент выполнения |

Таблица 4.46 - Описание параметров отчета Rebalance progress

### Configuration parameters

Отчет о параметрах конфигурации.

| **Название параметра** | **Название параметра в pg_profile** | **Тип данных параметра** | **Описание параметра** |
|----|----|----|----|
| Name | name | Text | Наименование параметра конфигурации |
| Setting | setting | Text | Текущее значение параметра конфигурации |

Таблица 4.47 - Описание параметров отчета Configuration parameters

### Active tenants (citus_stat_tenants)

В случае если установленная версия Citus меньше чем 11.3, то отчет по таблице Active tenants не отображается.

| **Название параметра** | **Название параметра в pg_profile** | **Тип данных параметра** | **Описание параметра** |
|----|----|----|----|
| Nodename | Node name | Text | Наименование ноды |
| Tenant_attribute | Tenant attribute | Text | Значение в столбце распределения, идентифицирующее tenant |
| Read_count_in_this_period | Read count in this period | Int | Количество запросов на чтение (select) за период |
| Read_count_in_last_peroid | Read count in last peroid | Int | Количество запросов чтения за прошлый период |
| Query_count_in_this_period | Query count in this period | Int | Количество запросов на чтение/запись для tenant за период времени |
| Query_count_in_last_period | Query count in last period | int | Количество запросов на чтение/запись для tenant за прошлый период |
| Cpu_usage_in_this_period | Cpu usage in this period | Float | Секунды процессорного времени, затраченные этим tenant за период |
| Cpu_usage_in_last_period | Cpu usage in last period | float | Секунды процессорного времени, затраченные этим tenant за прошлый период |

Таблица 4.48 – Описание параметров отчета Active tenants

# Дополнительная информация

1)  
2)  
3)  

СУБД собирает статистику после завершения выполнения запроса. Если выполнение запроса длится в течение нескольких снапшотов, это повлияет на статистику только последнего снапшота (когда он был снят). И получить статистику по все еще выполняющимся операторам будет нельзя. Процессы обслуживания, такие как vacuum и checkpointer, обновляют статистику только после завершения.Сброс любой статистики СУБД может повлиять на корректность формирования последующих запросов (планировщик запросов опирается на данные статистики при выборе методов обхода таблиц, использования индексов и т.д.).Эксклюзивные блокировки на таблицах конфликтуют с процедурой вычисления размера таблицы. Снапшот не будет собирать размеры таблиц с AccessExclusiveLock, принадлежащим какой-либо сессии. Сессия может получить AccessExclusiveLock на таблицу во время обработки выборки. Для того, чтобы обойти эту проблему, lock_timeout (настройка СУБД «Jatoba», отвечающая за максимальное разрешенное время блокировки таблицы/индекса, строки или иного объекта БД) установлен на 3 секунды, поэтому если функция take_sample() не сможет получить блокировку в течение 3 секунд, она завершится неудачей, и снапшот не будет снят.

# 

<table>
<colgroup>
<col style="width: 34%" />
<col style="width: 2%" />
<col style="width: 62%" />
</colgroup>
<thead>
<tr>
<th><span id="_Toc215495340" class="anchor"></span>Термины и определениеAccessExclusiveLock</th>
<th>–</th>
<th>вид блокировки таблицы, гарантирующий, что доступ на момент блокировки имеет только та транзакция, которая вызвала блокировку</th>
</tr>
</thead>
<tbody>
<tr>
<td>baseline</td>
<td>–</td>
<td>именованная последовательность снапшотов, которая имеет отдельную от настроенной политику хранения. Можно задать как определенное время хранения в днях, так и бесконечное время хранения, оставив соответственный параметр пустым. Также можно создать последовательность снапшотов только для определенного периода времени, например, в пиковые часы загрузки</td>
</tr>
<tr>
<td>dblink</td>
<td>–</td>
<td>расширение, позволяющее выполнить запрос к удаленной БД. Распространяется в составе СУБД PostgreSQL/Jatoba</td>
</tr>
<tr>
<td>HOT (Heap-only Tuple) обновление</td>
<td>–</td>
<td>механизм оптимизации выполнения команд UPDATE по изменению строк таблиц в СУБД. Данный механизм добавляет новую версию строки рядом со старой версией строки на той же странице данных и устанавливает соответствующие флаги следования записей в порядке их обновления. При таком подходе не нужно обновлять все индексы таблицы и записывать в них местоположение новой строки на диске. Данный механизм работает только для полей таблиц, не входящих в индексы, и призван уменьшить нагрузку на файловую систему</td>
</tr>
<tr>
<td>lock_timeout</td>
<td>–</td>
<td>параметр, задающий максимально возможное время блокировки таблицы / индекса / строки</td>
</tr>
<tr>
<td>pg_conf_load_time()</td>
<td>–</td>
<td>функция СУБД, которая возвращает данные о времени (моменте) загрузки конфигурации СУБД</td>
</tr>
<tr>
<td>pg_control_system()</td>
<td>–</td>
<td>функция СУБД, которая возвращает информацию о текущем состоянии управляющего файла СУБД</td>
</tr>
<tr>
<td>pg_stat_kcache</td>
<td>–</td>
<td><p>расширение, собирающее статистику по операциям чтения и записи на уровне файловой системы. Распространяется отдельно от СУБД PostgreSQL/Jatoba</p>
<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_profile/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th>Работает только на Linux системах</th>
</tr>
</thead>
<tbody>
</tbody>
</table></td>
</tr>
<tr>
<td>pg_stat_kcache.track_planning = on/off</td>
<td>–</td>
<td>параметр расширения pg_stat_kcache, контролирующий сбор данных об операциях планирования SQL-запросов и времени планирования</td>
</tr>
<tr>
<td>pg_postmaster_start_time()</td>
<td>–</td>
<td>функция СУБД, которая возвращает данные о времени (моменте) запуска СУБД</td>
</tr>
<tr>
<td>pg_stat_statements</td>
<td>–</td>
<td>расширение, собирающее статистики выполнения SQL-запросов на сервере БД. Распространяется в составе СУБД PostgreSQL/Jatoba</td>
</tr>
<tr>
<td>plpgsql</td>
<td>–</td>
<td>расширение языка SQL (процедурный язык), используемое в СУБД PostgreSQL/Jatoba. Этот язык предназначен для написания хранимых процедур и функций</td>
</tr>
<tr>
<td>postgresql.conf</td>
<td>–</td>
<td>файл конфигурации СУБД</td>
</tr>
<tr>
<td>Statistic Collector (сборщик статистики)</td>
<td>–</td>
<td>встроенный в СУБД механизм, позволяющий собирать метрики активности сервера БД</td>
</tr>
<tr>
<td>vacuum (вакуум)</td>
<td>–</td>
<td>механизм СУБД, удаляющий старые версии строк таблиц в БД</td>
</tr>
<tr>
<td>version() и jatoba_version()</td>
<td>–</td>
<td>функции СУБД, которые возвращают информацию о версии СУБД</td>
</tr>
<tr>
<td>снапшот</td>
<td>–</td>
<td>снимок состояния БД на конкретный момент времени</td>
</tr>
</tbody>
</table>

# 

| <span id="_Toc215495341" class="anchor"></span>Перечень сокращенийID | – | Identifier |
|:---|:--:|----|
| SQL | – | Structured Query Language |
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

[^1]: для версии компонента 4.2
