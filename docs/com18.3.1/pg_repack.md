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
<p><strong>Руководство по настройке. Часть 24.</strong></p>
<p><strong>Реорганизация таблиц. Компонент «pg_repack»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-24</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 22</p>
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

> **АННОТАЦИЯ**
>
> В документе приведены сведения, необходимые для установки и эксплуатации компонента «pg_repack» (далее по тексту – «компонент» или pg_repack), предназначенного для реорганизации таблиц СУБД «Jatoba».
>
> Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/pg_repack/media/image1.png" style="width:0.25138in;height:0.25051in" /> **Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/pg_repack/media/image2.png" style="width:0.25in;height:0.25in" /> **Дополнительная информация** – указания, позволяющие упростить работу с изделием
>
> Настоящее руководство предназначено для администраторов СУБД.
>
> <img src="../docs/assets/images/com18.3.1/pg_repack/media/image2.png" style="width:0.25in;height:0.24862in" /> Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра
>
> 6.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.
>
> Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-6/bin».
>
> Для СУБД «Jatoba» версий ядра 6 используется версия компонента – 1.5.1.
>
> Для СУБД «Jatoba» версий ядра 5 и 18 используется версия компонента – 1.5.3.
>
> <img src="../docs/assets/images/com18.3.1/pg_repack/media/image1.png" style="width:0.25138in;height:0.25139in" /> Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!
>
> **СОДЕРЖАНИЕ**

1.  1.  
2.  1.  
    2.  
3.  1.  
    2.  
4.  1.  
    2.  
    3.  
    4.  
5.  
6.  1.  

[Назначение компонента 4](#назначение-компонента)[Условия применения 4](#условия-применения)[Установка и настройка 6](#установка-и-настройка)[Установка пакета «pg_repack» в ОС GNU/Linux 6](#установка-пакета-pg_repack-в-ос-gnulinux)[Установка расширения 7](#установка-расширения)[Функциональные возможности компонента 8](#функциональные-возможности-компонента)[Параметры реорганизации 9](#параметры-реорганизации)[Параметры подключения утилиты 10](#параметры-подключения-утилиты)[Пример использоания 12](#пример-использоания)[Кластеризация online 12](#кластеризация-online)[Полная вакуумизация online конкретных таблиц 13](#полная-вакуумизация-online-конкретных-таблиц)[Перемещение отдельного индекса 15](#перемещение-отдельного-индекса)[Перемещение всех индексов конкретной таблицы 17](#перемещение-всех-индексов-конкретной-таблицы)[Удаление расширения 19](#удаление-расширения)[Обновление расширения 20](#обновление-расширения)[Обновление компонента в ОС GNU/Linux 20](#обновление-компонента-в-ос-gnulinux)[Перечень сокращений 21](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент «pg_repack» — представляет собой утилиту и расширение, которое предотвращает раздувание таблиц и индексов. В отличие от команд CLUSTER и VACUUM FULL, компонент «pg_repack» осуществляет операции без полной блокировки таблиц. Так же, это расширение позволяет восстановить физический порядок кластеризованных индексов.
>
> Такая функциональная возможность снижает объем занимаемого дискового пространства и повышает производительность сервера СУБД.

## Условия применения

> Компонент «pg_repack» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux. Непосредственно в составе СУБД
>
> «Jatoba» компонент используется для поддержки мониторинга СУБД в части анализа запросов, как описано в документах

- Руководство по настройке. Часть 24. Поддержка мониторинга СУБД в части анализа запросов;

- Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe». Подраздел «Анализ запросов» (Query analysis).

> Компонент выполнен в форме внешней утилиты и расширения СУБД и не имеет ограничений по совместимости с другими компонентами.
>
> Имеет ряд особенностей по функциональным возможностям:

- Отсутствие ограничений на работу с жестким диском и возможности распределить нагрузку приводит к значительной нагрузке на жесткий диск и падению производительности при работе с большими таблицами (падение сравнимо с вызовом полного копирования таблицы);

- Во время работы переполняется журнал предзаписи (WAL, Write-Ahead Logging), что приводит к задержке между лидером кластера и репликой. Результатом этого может стать падение СУБД;

> <img src="../docs/assets/images/com18.3.1/pg_repack/media/image2.png" style="width:0.25in;height:0.25in" />При обработке больших таблиц рекомендуется отключить слот репликации на время работы утилиты

- Для реорганизации таблиц требуется дополнительное место на жестком диске, равное сумме размера оригинальной таблицы, размера индексов и размера таблицы с журналом аудита. При небольшой нагрузке размером журнала аудита можно пренебречь.

- Не может реорганизовывать временные таблицы;

- Не может кластеризовать таблицу согласно индексам GiST и RUM;

- Во время работы утилиты, нельзя выполнять DDL команды: CREATE, ALTER и DROP.

# УСТАНОВКА И НАСТРОЙКА

> Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе.
>
> Установка компонента под управлением ОС GNU/Linux приведено ниже.

## Установка пакета «pg_repack» в ОС GNU/Linux

> Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо доустановить.
>
> Установку пакета возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

> Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

> apt-get install jatoba\<ver\>-pg-repack

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:

> yum install jatoba\<ver\>-pg_repack
>
> Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

> apt-get install jatoba\<ver\>-pg_repack
>
> Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется.
>
> Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.
>
> В результате установки пакета в директории:

- /usr/jatoba-\<ver\>/bin будет создана утилита \*pg_repack;

- /usr/jatoba-6/share/extension/ будут созданы одноименные файлы, а именно:

  - управляющий файл расширения, с суффиксом. control;

  - SQL-скрипт для расширения.

## Установка расширения

> После перезагрузки СУБД и загрузки расширения станет доступной установка расширения «pg_repack» SQL-командой:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image3.png" style="width:7.0906in;height:1.05417in" />

> CREATE EXTENSION pg_repack;
>
> Рисунок 2.1 – Установка расширения
>
> Установка расширения выполняется от имени и с правами привилегированного пользователя.

# ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

> Можно выбрать один из четырех способов использования:

- неблокирующая кластеризация (CLUSTER) (с упорядочиванием по кластеризующему индексу);

- упорядочивание по указанным столбцам;

- неблокирующая полная очистка (VACUUM FULL) (только упаковка строк);

- перестроение или перемещение только индексов таблицы.

> Применить «pg_repack» можно только к таблицам, в которых должен быть первичный ключ (PRIMARY KEY) или уникальный не нулевой индекс (UNIIQE NOT NULL).
>
> При этом алгоритм работы будет следующим:

- Расширение pg_repack создаёт лог-таблицу, чтобы хранить данные обо всех изменениях во время работы. Триггер будет реплицировать эти изменения на каждую операцию INSERT, UPDATE и DELETE.

- Создаётся таблица, аналогичная исходной по структуре, но без индексов и ограничений, чтобы не замедлять процесс вставки данных.

- Компонент «pg_repack» переносит в новую таблицу данные из старой, автоматически фильтруя все неактуальные строки, а затем создаёт индексы для новой таблицы. За время выполнения всех этих операций в лог-таблице накапливаются изменения.

- Переносятся изменения в новую таблицу. Перенос выполняется в несколько итераций, и когда в лог-таблице остаётся менее 20 записей, pg_repack захватывает строгую блокировку, переносит последние данные и подменяет старую таблицу на новую в системных таблицах Jatoba.

- Старая таблица и таблица с логами удаляются и в файловой системе освобождается место.

## Параметры реорганизации

> Параметры реорганизации таблиц приведены в таблице [3.1](#_bookmark7).
>
> <span id="_bookmark7" class="anchor"></span>Таблица 3.1 – Параметры реорганизации таблиц

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметры</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>-a</p>
<p>--all</p>
</blockquote></td>
<td><blockquote>
<p>Попытаться перепаковать все базы данных в кластере. Базы данных,</p>
<p>в которых расширение pg_repack не установлено, будут пропущены.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-t таблица,</p>
<p>--table=таблица</p>
</blockquote></td>
<td><blockquote>
<p>Реорганизовать только указанную таблицу (таблицы). Реорганизовать несколько таблиц можно, добавив несколько ключей</p>
<p>-t. По умолчанию реорганизуются все подходящие таблицы в целевых базах данных.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-I таблица</p>
<p>--parent-table=таблица</p>
</blockquote></td>
<td><blockquote>
<p>Реорганизовать как указанную таблицу (таблицы), так и дочерние. Реорганизовать несколько иерархий таблиц можно, добавив</p>
<p>несколько ключей -I.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-c схема</p>
<p>--schema=схема</p>
</blockquote></td>
<td><blockquote>
<p>Перепаковать таблицы только в указанной схеме (схемах). Перепаковать несколько схем можно, добавив несколько ключей -c. Можно использовать в сочетании с --tablespace для перемещения</p>
<p>таблиц в другое табличное пространство.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-o столбец[, ...]</p>
<p>--order-by=столбец[, ...]</p>
</blockquote></td>
<td><blockquote>
<p>Выполнить неблокирующую кластеризацию (CLUSTER),</p>
<p>упорядочивая данные по указанным столбцам.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-n</p>
<p>--no-order</p>
</blockquote></td>
<td><blockquote>
<p>Выполнить неблокирующую полную очистку (VACUUM FULL).</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-N</p>
<p>--dry-run</p>
</blockquote></td>
<td><blockquote>
<p>Только показать, какие таблицы будут перепакованы, и завершиться.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-j num_jobs</p>
<p>--jobs=num_jobs</p>
</blockquote></td>
<td><blockquote>
<p>Установить заданное количество дополнительных соединений к jatoba и использовать эти дополнительные подключения для перестраивания индексов таблиц в параллельном режиме.</p>
<p>Параллельное перестроение индексов поддерживается только при реорганизации таблиц полностью, без ключей --index или --only-indexes. Если ваш сервер имеет несколько процессорных ядер и</p>
<p>быструю дисковую подсистему, параллельный режим может быть полезен для ускорения pg_repack.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-s тбл_пр-во</p>
<p>--tablespace= тбл_пр-во</p>
</blockquote></td>
<td><blockquote>
<p>Перенести перепакованные таблицы в заданное табличное пространство: по сути это неблокирующая версия команды ALTER TABLE ... SET TABLESPACE. Индексы таблиц остаются в исходном табличном пространстве, если только дополнительно не указан ключ</p>
<p>--moveidx.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-S</p>
<p>--moveidx</p>
</blockquote></td>
<td><blockquote>
<p>Также перенести индексы перепакованных таблиц в табличное пространство, заданное ключом --tablespace.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-i индекс</p>
<p>--index=индекс</p>
</blockquote></td>
<td><blockquote>
<p>Перепаковать только указанный индекс. Перепаковать несколько индексов можно, добавив несколько ключей -i. Можно использовать в сочетании с --tablespace для перемещения индексов в другое</p>
<p>табличное пространство.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-x</p>
<p>--only-indexes</p>
</blockquote></td>
<td><blockquote>
<p>Перепаковать только индексы таблиц, заданных ключами --table.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-T сек</p>
<p>--wait-timeout=сек</p>
</blockquote></td>
<td><blockquote>
<p>Расширению pg_repack необходимо получить исключительную</p>
<p>блокировку в конце реорганизации. Этот параметр определяет,</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметры</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td><blockquote>
<p>сколько секунд pg_repack будет ждать получения этой блокировки.</p>
<p>Если за это время блокировка не будет получена и параметр --no-kill-backend не указан, pg_repack принудительно отменит конфликтующие запросы. Если же вы используете СУБД «Jatoba» с версией ядра 5 и новее, pg_repack прибегнет к вызову pg_terminate_backend(), чтобы отключить все оставшиеся фоновые процессы, после того, как это время истечёт дважды. Значение по</p>
<p>умолчанию: 60 сек.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-D</p>
<p>--no-kill-backend</p>
</blockquote></td>
<td><blockquote>
<p>Пропускать перепаковку таблицы вместо отмены конфликтующих запросов, если блокировка не может быть получена в течение времени, указанного в --wait-timeout. Значение по умолчанию —</p>
<p>false.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-Z</p>
<p>--no-analyze</p>
</blockquote></td>
<td><blockquote>
<p>Не выполнять ANALYZE после полной реорганизации таблицы. В</p>
<p>отсутствие этого ключа после реорганизации ANALYZE выполняется.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-k</p>
<p>--no-superuser-check</p>
</blockquote></td>
<td><blockquote>
<p>Пропускать проверку суперпользователя клиентом. Этот параметр полезен при использовании pg_repack на платформах, которые</p>
<p>поддерживают запуск расширения не от имени суперпользователя.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-C</p>
<p>--exclude-extension</p>
</blockquote></td>
<td><blockquote>
<p>Пропускать таблицы, которые принадлежат указанному расширению</p>
<p>(расширениям). Время планирования некоторых расширений может сильно зависеть от таких таблиц</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--switch-threshold</p>
</blockquote></td>
<td><blockquote>
<p>Переключать таблицы, когда в таблице журнала остаётся заданное число кортежей. Этот параметр можно использовать, чтобы иметь</p>
<p>возможность нагнать таблицы с большим объёмом записи.</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Параметры подключения утилиты

> Для подключения утилиты к СУБД можно использовать переменные окружения: PGDATABASE, PGHOST, PGPORT и PGUSER
>
> Параметры подключения утилиты к СУБД приведены в таблице [3.2](#_bookmark9).
>
> <span id="_bookmark9" class="anchor"></span>Таблица 3.2 - Параметры подключения утилиты к СУБД

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 66%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметры</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>-a</p>
<p>--all</p>
</blockquote></td>
<td><blockquote>
<p>Реорганизовать все базы данных.</p>
<p>Параметр --all нельзя использовать вместе с --dbname, --table или --parent-table.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-d имя_бд</p>
<p>--dbname=имя_бд</p>
</blockquote></td>
<td><blockquote>
<p>Указывает имя базы данных для реорганизации. Если оно не указано, и параметр -a (или --all) не используется, то имя базы берётся из переменного окружения PGDATABASE. Если и эта переменная не задана, выбирается имя подключающегося</p>
<p>пользователя.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-h сервер</p>
<p>--host=сервер</p>
</blockquote></td>
<td><blockquote>
<p>Указывает имя компьютера, на котором работает сервер. Если</p>
<p>значение начинается с косой черты, оно определяет каталог Unix-сокета.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-p порт</p>
<p>--port=порт</p>
</blockquote></td>
<td><blockquote>
<p>Порт подключения</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-U имя_пользователя</p>
</blockquote></td>
<td><blockquote>
<p>Имя пользователя для подключения.</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 66%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметры</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>--username=имя_пользователя</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>-w</p>
<p>--no-password</p>
</blockquote></td>
<td><blockquote>
<p>Не выдавать запрос на ввод пароля. Если сервер требует аутентификацию по паролю и пароль не доступен с помощью других средств, таких как файл .pgpass, попытка соединения не удастся. Этот параметр может быть полезен в пакетных заданиях и скриптах, где нет пользователя, который вводит</p>
<p>пароль.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-W</p>
<p>--password</p>
</blockquote></td>
<td><blockquote>
<p>Принудительно запрашивать пароль перед подключением к базе данных.</p>
<p>Это несущественный параметр, так как pg_repack запрашивает пароль автоматически, если сервер проверяет подлинность по паролю. Однако, чтобы понять это, pg_repack лишний раз</p>
<p>подключается к серверу. Поэтому иногда имеет смысл ввести - W, чтобы исключить эту ненужную попытку подключения.</p>
</blockquote></td>
</tr>
</tbody>
</table>

# ПРИМЕР ИСПОЛЬЗОАНИЯ

## Кластеризация online

> Компонент обладает функциональной возможностью выполнения неблокирующей кластеризации (CLUSTER) всех кластеризованных таблиц и полной очистки (VACUUM FULL) всех некластеризованных таблиц.
>
> **Например**
>
> Создать таблицы:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image4.png" style="width:7.08296in;height:1.75375in" />

> CREATE TABLE a (i int); CREATE TABLE b (i int); CREATE TABLE c (i int);
>
> Рисунок 4.1 – SQL-команда создания таблиц Создать индексы:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image5.png" style="width:7.17302in;height:1.77281in" />

> CREATE UNIQUE INDEX title_idx1 ON a (i); CREATE UNIQUE INDEX title_idx2 ON b (i); CREATE UNIQUE INDEX title_idx3 ON c (i);
>
> Рисунок 4.2 - SQL-команда создания индексов
>
> Кластеризовать первую таблицу:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image6.png" style="width:7.12725in;height:1.11167in" />

> CLUSTER a using title_idx1;
>
> Рисунок 4.3 - SQL-команда создания индекса таблицы
>
> Выполнить кластеризацию online таблицы a и полный вакуум online таблиц b и c утилитой «pg_repack» в терминале ОС:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image7.png" style="width:7.08378in;height:1.2075in" />

> ./pg_repack postgres
>
> Рисунок 4.4 – Команда кластеризации таблицы В выводе команды не должно быть сообщений об ошибках.

## Полная вакуумизация online конкретных таблиц

> Компонент обладает функциональной возможностью полной вакуумизациии «online» конкретных таблиц
>
> **Например**
>
> Создать таблицы:
>
> CREATE TABLE a (i int); CREATE TABLE b (i int); CREATE TABLE c (i int);
>
> <img src="../docs/assets/images/com18.3.1/pg_repack/media/image8.png" style="width:6.93181in;height:1.74375in" />
>
> Рисунок 4.5– SQL-команда создания таблиц Создать индексы:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image9.png" style="width:7.15351in;height:1.80187in" />

> CREATE UNIQUE INDEX title_idx1 ON a (i); CREATE UNIQUE INDEX title_idx2 ON b (i); CREATE UNIQUE INDEX title_idx3 ON c (i);
>
> Рисунок 4.6 - SQL-команда создания индексов
>
> Выполнить полный вакуум online таблиц b и c утилитой «pg_repack» в терминале ОС:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image10.png" style="width:7.09651in;height:1.59083in" />

> ./pg_repack --no-order --table b --table c postgres
>
> Рисунок 4.7 – Команда кластеризации таблиц

## Перемещение отдельного индекса

> Создать таблицы:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image11.png" style="width:7.12852in;height:1.81125in" />

> CREATE TABLE A (i int); CREATE TABLE B (i int); CREATE TABLE C (i int);
>
> Рисунок 4.8 – SQL-команда создания таблиц Создать каталог и назначить права в терминале ОС:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image12.png" style="width:7.1469in;height:1.61in" />

> \# mkdir -p /data/dbs
>
> \# chown postgres:postgres /data/dbs
>
> Рисунок 4.9 – Создание каталогов для хранения индекса и табличного пространства Создать табличное пространство в отдельном каталоге:
>
> CREATE TABLESPACE dbspace LOCATION '/data/dbs';
>
> <img src="../docs/assets/images/com18.3.1/pg_repack/media/image13.png" style="width:7.05877in;height:1.0901in" />
>
> Рисунок 4.10 - SQL-команда создания табличного пространства Создать индексы:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image14.png" style="width:7.1002in;height:1.79208in" />

> CREATE UNIQUE INDEX title_idx1 ON a (i); CREATE UNIQUE INDEX title_idx2 ON b (i); CREATE UNIQUE INDEX title_idx3 ON c (i);
>
> Рисунок 4.11 - SQL-команда создания индексов
>
> Переместить указанный индекс в табличное пространство утилитой «pg_repack» в терминале ОС:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image15.png" style="width:7.1658in;height:1.81156in" />

> ./pg_repack -d postgres --index title_idx1 --tablespace dbspace
>
> Рисунок 4.12 – Команда перемещения индекса в табличное пространство

## Перемещение всех индексов конкретной таблицы

> Компонент обладает функциональной возможностью перемещения всех индексов таблицы.
>
> **Например**
>
> Создать таблицы:
>
> CREATE TABLE a (i int); CREATE TABLE b (i int); CREATE TABLE c (i int);
>
> Создать каталог и назначить права:
>
> \# mkdir -p /data/dbs
>
> \# chown postgres:postgres /data/dbs
>
> Создать табличное пространство:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image16.png" style="width:7.13176in;height:1.0925in" />

> CREATE TABLESPACE dbspace LOCATION '/data/dbs';
>
> Рисунок 4.13 - SQL-команда создания табличного пространства Создать индексы:
>
> CREATE UNIQUE INDEX title_idx1 ON a (i); CREATE UNIQUE INDEX title_idx2 ON b (i); CREATE UNIQUE INDEX title_idx3 ON c (i);
>
> <img src="../docs/assets/images/com18.3.1/pg_repack/media/image17.png" style="width:7.08923in;height:1.74417in" />
>
> Рисунок 4.14 - SQL-команда создания индексов
>
> Переместить индексы таблицы a в табличное пространство утилитой «pg_repack» в терминале ОС:

<img src="../docs/assets/images/com18.3.1/pg_repack/media/image18.png" style="width:7.0314in;height:1.60198in" />

> ./pg_repack -d postgres --table a --only-indexes --tablespace dbspace
>
> Рисунок 4.15 – Команда перемещения индексов в табличное пространство В выводе команды не должно быть сообщений об ошибках.

# УДАЛЕНИЕ РАСШИРЕНИЯ

> Расширение компонента удаляется SQL-командой:
>
> DROP EXTENSION pg_repack CASCADE;

# ОБНОВЛЕНИЕ РАСШИРЕНИЯ

## Обновление компонента в ОС GNU/Linux

> Предварительные условия: выполнено обновление СУБД «Jatoba» до версии 18 согласно документу «Руководство по обновлению СУБД Jatoba» 643.72410666.00067-08 93 01.
>
> <img src="../docs/assets/images/com18.3.1/pg_repack/media/image1.png" style="width:0.25138in;height:0.2498in" />При обновлении СУБД «Jatoba» до версии 18 необходимо отключить функцию подсчета контрольных сумм при инициализации каталога данных. Сведения о процедурах обновления до СУБД «Jatoba» 18 изложены в документе
>
> «Руководство по обновлению» 643.72410666.00067-08 93 01
>
> Для обновления компонента pg_repack с версии 1.5.1 включительно до версии 1.5.3 необходимо выполнить следующие шаги:

1)  Удалить расширение компонента pg_repack версии 1.5.1 согласно разделу [5](#удаление-расширения) данного руководства;

2)  Остановить службу СУБД «Jatoba»:

> \# systemctl stop jatoba-18

3)  Установить новую версию 1.5.3 компонента командой:

> \# apt install jatoba18-pg-repack

4)  Выполнить запуск СУБД «Jatoba» 18:

> \# systemctl start jatoba-18 && systemctl status jatoba-18

5)  Установить расширение в БД:

> CREATE EXTENSION pg_repack;
>
> На данном шаге обновление компонента pg_repack завершено.

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
