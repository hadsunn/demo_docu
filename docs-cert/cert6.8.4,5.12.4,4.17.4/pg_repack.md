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
<p><strong>Руководство по настройке. Часть 24.<br />
Реорганизация таблиц.<br />
Компонент «pg_repack»</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-24</strong></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">Листов 22</td>
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

В документе приведены сведения, необходимые для установки и эксплуатации компонента «pg_repack» (далее по тексту – «компонент» или pg_repack), предназначенного для реорганизации таблиц СУБД «Jatoba».

Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 6.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:</p>
<ul>
<li></li>
<li></li>
</ul></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

ОС Windows – «C:\Program Files\GIS\Jatoba\6\bin»;ОС Linux – «/usr/jatoba-6/bin».Версия компонента — 1.5.1

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image2.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image1.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонента [4](#назначение-компонента)](#назначение-компонента)

[1.1. Условия применения [4](#условия-применения)](#условия-применения)

[2. Установка и настройка [6](#установка-и-настройка)](#установка-и-настройка)

[2.1. Установка пакета «pg_repack» в ОС GNU/Linux [6](#установка-пакета-pg_repack-в-ос-gnulinux)](#установка-пакета-pg_repack-в-ос-gnulinux)

[2.2. Установка расширения [7](#usrjatoba-verbin-будет-создана-утилита-pg_repackusrjatoba-6shareextension-будут-созданы-одноименные-файлы-а-именноуправляющий-файл-расширения-с-суффиксом.-controlsql-скрипт-для-расширения.установка-расширения)](#usrjatoba-verbin-будет-создана-утилита-pg_repackusrjatoba-6shareextension-будут-созданы-одноименные-файлы-а-именноуправляющий-файл-расширения-с-суффиксом.-controlsql-скрипт-для-расширения.установка-расширения)

[3. Функциональные возможности компонента [9](#функциональные-возможности-компонента)](#функциональные-возможности-компонента)

[3.1. Параметры реорганизации [10](#параметры-реорганизации)](#параметры-реорганизации)

[3.2. Параметры подключения утилиты [11](#параметры-подключения-утилиты)](#параметры-подключения-утилиты)

[4. Пример использоания [13](#пример-использоания)](#пример-использоания)

[4.1. Кластеризация online [13](#кластеризация-online)](#кластеризация-online)

[4.2. Полная вакуумизация online конкретных таблиц [14](#полная-вакуумизация-online-конкретных-таблиц)](#полная-вакуумизация-online-конкретных-таблиц)

[4.3. Перемещение отдельного индекса [16](#перемещение-отдельного-индекса)](#перемещение-отдельного-индекса)

[4.4. Перемещение всех индексов конкретной таблицы [18](#перемещение-всех-индексов-конкретной-таблицы)](#перемещение-всех-индексов-конкретной-таблицы)

[5. Удаление расширения [20](#удаление-расширения)](#удаление-расширения)

[Перечень сокращений [21](#_Toc186019839)](#_Toc186019839)

 

# Назначение компонента

Компонент «pg_repack» — представляет собой утилиту и расширение, которое предотвращает раздувание таблиц и индексов. В отличие от команд CLUSTER и VACUUM FULL, компонент «pg_repack» осуществляет операции без полной блокировки таблиц. Так же, это расширение позволяет восстановить физический порядок кластеризованных индексов.

Такая функциональная возможность снижает объем занимаемого дискового пространства и повышает производительность сервера СУБД.

## Условия применения

Компонент «pg_repack» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux. Непосредственно в составе СУБД «Jatoba» компонент используется для поддержки мониторинга СУБД в части анализа запросов, как описано в документах

- 
- 

Руководство по настройке. Часть 24. Поддержка мониторинга СУБД в части анализа запросов;Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe». Подраздел «Анализ запросов» (Query analysis).Компонент выполнен в форме внешней утилиты и расширения СУБД и не имеет ограничений по совместимости с другими компонентами.

Имеет ряд особенностей по функциональным возможностям:

- 
- 

| Отсутствие ограничений на работу с жестким диском и возможности распределить нагрузку приводит к значительной нагрузке на жесткий диск и падению производительности при работе с большими таблицами (падение сравнимо с вызовом полного копирования таблицы);Во время работы переполняется журнал предзаписи (WAL, Write-Ahead Logging), что приводит к задержке между лидером кластера и репликой. Результатом этого может стать падение СУБД;<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image1.png" style="width:0.25in;height:0.25in" /> | При обработке больших таблиц рекомендуется отключить слот репликации на время работы утилиты |
|----|----|

- 
- 
- 
- 

Для реорганизации таблиц требуется дополнительное место на жестком диске, равное сумме размера оригинальной таблицы, размера индексов и размера таблицы с журналом аудита. При небольшой нагрузке размером журнала аудита можно пренебречь.Не может реорганизовывать временные таблицы;Не может кластеризовать таблицу согласно индексам GiST и RUM;Во время работы утилиты, нельзя выполнять DDL команды: CREATE, ALTER и DROP.

# Установка и настройка

Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе.

Установка компонента под управлением ОС Windows и ОС GNU/Linux приведено ниже.

## Установка пакета «pg_repack» в ОС GNU/Linux

Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо доустановить.

Установку пакета возможно провести двумя способами:

1)  
2)  

установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- 

> для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:apt-get install jatoba\<ver\>-pg-repack

- 

> для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:yum install jatoba\<ver\>-pg_repack

Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- 

> ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:apt-get install jatoba\<ver\>-pg_repack

Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется.

Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

В результате установки пакета в директории:

- 
- 

<!-- -->

- 
- 

## /usr/jatoba-\<ver\>/bin будет создана утилита \*pg_repack;/usr/jatoba-6/share/extension/ будут созданы одноименные файлы, а именно:управляющий файл расширения, с суффиксом. control;SQL-скрипт для расширения.Установка расширения

После перезагрузки СУБД и загрузки расширения станет доступной установка расширения «pg_repack» SQL-командой:

> CREATE EXTENSION pg_repack;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image3.png" style="width:7.13043in;height:1.06009in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 03-29-55.png" />

Рисунок 2.1 – Установка расширения

Установка расширения выполняется от имени и с правами привилегированного пользователя.

# Функциональные возможности компонента

Можно выбрать один из четырех способов использования:

- 
- 
- 
- 

неблокирующая кластеризация (CLUSTER) (с упорядочиванием по кластеризующему индексу);упорядочивание по указанным столбцам;неблокирующая полная очистка (VACUUM FULL) (только упаковка строк);перестроение или перемещение только индексов таблицы. Применить «pg_repack» можно только к таблицам, в которых должен быть первичный ключ (PRIMARY KEY) или уникальный не нулевой индекс (UNIIQE NOT NULL).

При этом алгоритм работы будет следующим:

- 
- 
- 
- 
- 

Расширение pg_repack создаёт лог-таблицу, чтобы хранить данные обо всех изменениях во время работы. Триггер будет реплицировать эти изменения на каждую операцию INSERT, UPDATE и DELETE. Создаётся таблица, аналогичная исходной по структуре, но без индексов и ограничений, чтобы не замедлять процесс вставки данных.Компонент «pg_repack» переносит в новую таблицу данные из старой, автоматически фильтруя все неактуальные строки, а затем создаёт индексы для новой таблицы. За время выполнения всех этих операций в лог-таблице накапливаются изменения.Переносятся изменения в новую таблицу. Перенос выполняется в несколько итераций, и когда в лог-таблице остаётся менее 20 записей, pg_repack захватывает строгую блокировку, переносит последние данные и подменяет старую таблицу на новую в системных таблицах Jatoba.Старая таблица и таблица с логами удаляются и в файловой системе освобождается место.

## Параметры реорганизации

Параметры реорганизации таблиц приведены в таблице Таблица 3.1.

<table>
<caption><p>Таблица 3.1 – Параметры реорганизации таблиц</p></caption>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr>
<th><strong>Параметры</strong></th>
<th><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>-a</p>
<p>--all   </p></td>
<td>Попытаться перепаковать все базы данных в кластере. Базы данных, в которых расширение pg_repack не установлено, будут пропущены.</td>
</tr>
<tr>
<td><p>-t таблица,</p>
<p>--table=таблица    </p></td>
<td>Реорганизовать только указанную таблицу (таблицы). Реорганизовать несколько таблиц можно, добавив несколько ключей -t. По умолчанию реорганизуются все подходящие таблицы в целевых базах данных.</td>
</tr>
<tr>
<td><p>-I таблица</p>
<p>--parent-table=таблица</p></td>
<td>Реорганизовать как указанную таблицу (таблицы), так и дочерние. Реорганизовать несколько иерархий таблиц можно, добавив несколько ключей -I.</td>
</tr>
<tr>
<td><p>-c схема</p>
<p>--schema=схема</p>
<p> </p></td>
<td>Перепаковать таблицы только в указанной схеме (схемах). Перепаковать несколько схем можно, добавив несколько ключей -c. Можно использовать в сочетании с --tablespace для перемещения таблиц в другое табличное пространство.</td>
</tr>
<tr>
<td><p>-o столбец[, ...]</p>
<p>--order-by=столбец[, ...]</p></td>
<td>Выполнить неблокирующую кластеризацию (CLUSTER), упорядочивая данные по указанным столбцам. </td>
</tr>
<tr>
<td><p>-n</p>
<p>--no-order</p></td>
<td>Выполнить неблокирующую полную очистку (VACUUM FULL).</td>
</tr>
<tr>
<td><p>-N</p>
<p>--dry-run</p>
<p> </p></td>
<td><p>Только показать, какие таблицы будут перепакованы, и завершиться.</p>
<p> </p></td>
</tr>
<tr>
<td><p>-j num_jobs</p>
<p>--jobs=num_jobs</p></td>
<td>Установить заданное количество дополнительных соединений к jatoba и использовать эти дополнительные подключения для перестраивания индексов таблиц в параллельном режиме. Параллельное перестроение индексов поддерживается только при реорганизации таблиц полностью, без ключей --index или --only-indexes. Если ваш сервер имеет несколько процессорных ядер и быструю дисковую подсистему, параллельный режим может быть полезен для ускорения pg_repack.</td>
</tr>
<tr>
<td><p>-s тбл_пр-во</p>
<p>--tablespace= тбл_пр-во</p></td>
<td>Перенести перепакованные таблицы в заданное табличное пространство: по сути это неблокирующая версия команды ALTER TABLE ... SET TABLESPACE. Индексы таблиц остаются в исходном табличном пространстве, если только дополнительно не указан ключ --moveidx. </td>
</tr>
<tr>
<td><p>-S</p>
<p>--moveidx</p>
<p> </p></td>
<td>Также перенести индексы перепакованных таблиц в табличное пространство, заданное ключом --tablespace.</td>
</tr>
<tr>
<td><p>-i индекс</p>
<p>--index=индекс</p></td>
<td>Перепаковать только указанный индекс. Перепаковать несколько индексов можно, добавив несколько ключей -i. Можно использовать в сочетании с --tablespace для перемещения индексов в другое табличное пространство.</td>
</tr>
<tr>
<td><p>-x</p>
<p>--only-indexes</p></td>
<td><p>Перепаковать только индексы таблиц, заданных ключами --table.</p>
<p> </p></td>
</tr>
<tr>
<td><p>-T сек</p>
<p>--wait-timeout=сек</p>
<p> </p></td>
<td>Расширению pg_repack необходимо получить исключительную блокировку в конце реорганизации. Этот параметр определяет, сколько секунд pg_repack будет ждать получения этой блокировки. Если за это время блокировка не будет получена и параметр --no-kill-backend не указан, pg_repack принудительно отменит конфликтующие запросы. Если же вы используете СУБД «Jatoba» с версией ядра 5 и новее, pg_repack прибегнет к вызову pg_terminate_backend(), чтобы отключить все оставшиеся фоновые процессы, после того, как это время истечёт дважды. Значение по умолчанию: 60 сек.</td>
</tr>
<tr>
<td><p>-D</p>
<p>--no-kill-backend</p></td>
<td>Пропускать перепаковку таблицы вместо отмены конфликтующих запросов, если блокировка не может быть получена в течение времени, указанного в --wait-timeout. Значение по умолчанию — false.</td>
</tr>
<tr>
<td><p>-Z</p>
<p>--no-analyze</p></td>
<td>Не выполнять ANALYZE после полной реорганизации таблицы. В отсутствие этого ключа после реорганизации ANALYZE выполняется.</td>
</tr>
<tr>
<td><p>-k</p>
<p>--no-superuser-check</p></td>
<td>Пропускать проверку суперпользователя клиентом. Этот параметр полезен при использовании pg_repack на платформах, которые поддерживают запуск расширения не от имени суперпользователя.</td>
</tr>
<tr>
<td><p>-C</p>
<p>--exclude-extension</p></td>
<td>Пропускать таблицы, которые принадлежат указанному расширению (расширениям). Время планирования некоторых расширений может сильно зависеть от таких таблиц</td>
</tr>
<tr>
<td>--switch-threshold</td>
<td>Переключать таблицы, когда в таблице журнала остаётся заданное число кортежей. Этот параметр можно использовать, чтобы иметь возможность нагнать таблицы с большим объёмом записи.</td>
</tr>
</tbody>
</table>

Таблица 3.1 – Параметры реорганизации таблиц

 

## Параметры подключения утилиты

Для подключения утилиты к СУБД можно использовать переменные окружения: PGDATABASE, PGHOST, PGPORT и PGUSER

Параметры подключения утилиты к СУБД приведены в таблице Таблица 3.2.

<table>
<caption><p>Таблица 3.2 - Параметры подключения утилиты к СУБД</p></caption>
<colgroup>
<col style="width: 33%" />
<col style="width: 66%" />
</colgroup>
<thead>
<tr>
<th><strong>Параметры</strong></th>
<th><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>-a</p>
<p>--all</p></td>
<td><p>Реорганизовать все базы данных.</p>
<p>Параметр --all нельзя использовать вместе с --dbname, --table или --parent-table.</p></td>
</tr>
<tr>
<td><p>-d имя_бд</p>
<p>--dbname=имя_бд</p></td>
<td>Указывает имя базы данных для реорганизации. Если оно не указано, и параметр -a (или --all) не используется, то имя базы берётся из переменного окружения PGDATABASE. Если и эта переменная не задана, выбирается имя подключающегося пользователя.</td>
</tr>
<tr>
<td><p>-h сервер</p>
<p>--host=сервер</p></td>
<td>Указывает имя компьютера, на котором работает сервер. Если значение начинается с косой черты, оно определяет каталог Unix-сокета.</td>
</tr>
<tr>
<td><p>-p порт</p>
<p>--port=порт</p></td>
<td>Порт подключения</td>
</tr>
<tr>
<td><p>-U имя_пользователя</p>
<p>--username=имя_пользователя</p>
<p> </p></td>
<td><p>Имя пользователя для подключения.</p>
<p> </p></td>
</tr>
<tr>
<td><p>-w</p>
<p>--no-password</p></td>
<td>Не выдавать запрос на ввод пароля. Если сервер требует аутентификацию по паролю и пароль не доступен с помощью других средств, таких как файл .pgpass, попытка соединения не удастся. Этот параметр может быть полезен в пакетных заданиях и скриптах, где нет пользователя, который вводит пароль.</td>
</tr>
<tr>
<td><p>-W</p>
<p>--password</p></td>
<td><p>Принудительно запрашивать пароль перед подключением к базе данных. </p>
<p>Это несущественный параметр, так как pg_repack запрашивает пароль автоматически, если сервер проверяет подлинность по паролю. Однако, чтобы понять это, pg_repack лишний раз подключается к серверу. Поэтому иногда имеет смысл ввести -W, чтобы исключить эту ненужную попытку подключения. </p></td>
</tr>
</tbody>
</table>

Таблица 3.2 - Параметры подключения утилиты к СУБД

# Пример использоания

## Кластеризация online

Компонент обладает функциональной возможностью выполнения неблокирующей кластеризации (CLUSTER) всех кластеризованных таблиц и полной очистки (VACUUM FULL) всех некластеризованных таблиц.

**Например**

Создать таблицы:

> CREATE TABLE a (i int);
>
> CREATE TABLE b (i int);
>
> CREATE TABLE c (i int);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image4.png" style="width:7.11292in;height:1.76116in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 04-49-52.png" />

Рисунок 4.1 – SQL-команда создания таблиц

Создать индексы:

> CREATE UNIQUE INDEX title_idx1 ON a (i);
>
> CREATE UNIQUE INDEX title_idx2 ON b (i);
>
> CREATE UNIQUE INDEX title_idx3 ON c (i);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image5.png" style="width:7.17213in;height:1.77391in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 05-09-12.png" />

Рисунок 4.2 - SQL-команда создания индексов

Кластеризовать первую таблицу:

> CLUSTER a using title_idx1;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image6.png" style="width:7.12174in;height:1.11082in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 05-16-33.png" />

Рисунок 4.3 - SQL-команда создания индекса таблицы

Выполнить кластеризацию online таблицы a и полный вакуум online таблиц b и c утилитой «pg_repack» в терминале ОС:

> ./pg_repack postgres

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image7.png" style="width:7.12153in;height:1.21532in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 05-24-28.png" />

Рисунок 4.4 – Команда кластеризации таблицы

В выводе команды не должно быть сообщений об ошибках.

## Полная вакуумизация online конкретных таблиц

Компонент обладает функциональной возможностью полной вакуумизациии «online» конкретных таблиц

**Например**

Создать таблицы:

> CREATE TABLE a (i int);
>
> CREATE TABLE b (i int);
>
> CREATE TABLE c (i int);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image8.png" style="width:6.91345in;height:1.73913in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 06-08-24.png" />

Рисунок 4.5– SQL-команда создания таблиц

Создать индексы:

> CREATE UNIQUE INDEX title_idx1 ON a (i);
>
> CREATE UNIQUE INDEX title_idx2 ON b (i);
>
> CREATE UNIQUE INDEX title_idx3 ON c (i);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image9.png" style="width:7.13044in;height:1.79605in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 06-09-36.png" />

Рисунок 4.6 - SQL-команда создания индексов

Выполнить полный вакуум online таблиц b и c утилитой «pg_repack» в терминале ОС:

> ./pg_repack --no-order --table b --table c postgres

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image10.png" style="width:7.09854in;height:1.5913in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 06-11-00.png" />

Рисунок 4.7 – Команда кластеризации таблиц

## Перемещение отдельного индекса

Создать таблицы:

> CREATE TABLE A (i int);
>
> CREATE TABLE B (i int);
>
> CREATE TABLE C (i int);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image11.png" style="width:7.15625in;height:1.81829in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 06-52-05.png" />

Рисунок 4.8 – SQL-команда создания таблиц

Создать каталог и назначить права в терминале ОС:

> \# mkdir -p /data/dbs
>
> \# chown postgres:postgres /data/dbs

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image12.png" style="width:7.15652in;height:1.61242in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 07-24-15.png" />

Рисунок 4.9 – Создание каталогов для хранения индекса и табличного пространства

Создать табличное пространство в отдельном каталоге:

> CREATE TABLESPACE dbspace LOCATION '/data/dbs';

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image13.png" style="width:7.08889in;height:1.09476in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 07-26-09.png" />

Рисунок 4.10 - SQL-команда создания табличного пространства

Создать индексы:

> CREATE UNIQUE INDEX title_idx1 ON a (i);
>
> CREATE UNIQUE INDEX title_idx2 ON b (i);
>
> CREATE UNIQUE INDEX title_idx3 ON c (i);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image14.png" style="width:7.1215in;height:1.79871in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 07-27-28.png" />

Рисунок 4.11 - SQL-команда создания индексов

Переместить указанный индекс в табличное пространство утилитой «pg_repack» в терминале ОС:

> ./pg_repack -d postgres --index title_idx1 --tablespace dbspace

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image15.png" style="width:7.13913in;height:1.80482in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 07-29-17.png" />

Рисунок 4.12 – Команда перемещения индекса в табличное пространство

## Перемещение всех индексов конкретной таблицы

Компонент обладает функциональной возможностью перемещения всех индексов таблицы.

**Например**

Создать таблицы:

> CREATE TABLE a (i int);
>
> CREATE TABLE b (i int);
>
> CREATE TABLE c (i int);

Создать каталог и назначить права:

> \# mkdir -p /data/dbs
>
> \# chown postgres:postgres /data/dbs

Создать табличное пространство:

> CREATE TABLESPACE dbspace LOCATION '/data/dbs';

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image16.png" style="width:7.13043in;height:1.0923in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 23-10-41.png" />

Рисунок 4.13 - SQL-команда создания табличного пространства

Создать индексы:

> CREATE UNIQUE INDEX title_idx1 ON a (i);
>
> CREATE UNIQUE INDEX title_idx2 ON b (i);
>
> CREATE UNIQUE INDEX title_idx3 ON c (i);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image17.png" style="width:7.12117in;height:1.75202in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 23-12-29.png" />

Рисунок 4.14 - SQL-команда создания индексов

Переместить индексы таблицы a в табличное пространство утилитой «pg_repack» в терминале ОС:

> ./pg_repack -d postgres --table a --only-indexes --tablespace dbspace

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_repack/media/image18.png" style="width:7.02269in;height:1.6in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-24 23-14-36.png" />

Рисунок 4.15 – Команда перемещения индексов в табличное пространство

В выводе команды не должно быть сообщений об ошибках.

# Удаление расширения

Расширение компонента удаляется SQL-командой:

> DROP EXTENSION pg_repack CASCADE;

# 

| <span id="_Toc186019839" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language |
|:---|----|----|
| БД | – | База данных |
| КС | – | Контрольные суммы |
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
