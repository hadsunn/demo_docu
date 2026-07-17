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
<th style="text-align: center;"><blockquote>
<p>УТВЕРЖДЕН 643.72410666.00067-07 98 01-ЛУ</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>ЗАЩИЩЕННАЯ СИСТЕМА УПРАВЛЕНИЯ БАЗАМИ ДАННЫХ «JATOBA»</p>
<p><strong>Руководство по настройке. Часть 18.</strong></p>
<p><strong>Сокрытие информации в файлах данных СУБД. Компонент «Jatoba crypto access storage»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-07 98 01-18</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 21</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2026</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: right;">Литера О<sub>1</sub></td>
</tr>
</tbody>
</table>

# <img src="../docs/assets/images/com18.3.1/jcs/media/image1.png" style="width:0.25208in;height:0.25208in" />АННОТАЦИЯ

> В документе приведены сведения, необходимые для установки и эксплуатации компонента предназначенного для сокрытия информации в файлах данных СУБД «Jatoba crypto access storage» (далее по тексту – «компонент» или JCS).
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image1.png" style="width:0.25208in;height:0.25208in" />Степени важности примечаний, применяемые в документе:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Важная информация</strong> – указания, требующие особого внимания</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>Дополнительная информация</strong> – указания, позволяющие упростить работу с изделием</p>
</blockquote></td>
</tr>
</tbody>
</table>

<img src="../docs/assets/images/com18.3.1/jcs/media/image2.png" style="width:0.25209in;height:0.25208in" /><img src="../docs/assets/images/com18.3.1/jcs/media/image2.png" style="width:0.25209in;height:0.25208in" />Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра</p>
<p>4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 5.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-5/bin».</p>
<p>Для СУБД «Jatoba» версии ядра 4 используется версия компонента — 2.0.</p>
<p>Для СУБД «Jatoba» версии ядра 5/6/18 используется версия компонента — 3.0.</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p>
</blockquote></td>
</tr>
</tbody>
</table>

# СОДЕРЖАНИЕ

1.  [Назначение компонента 4](#назначение-компонента)

    1.  [Условия применения 4](#условия-применения)

2.  [Установка компонента 5](#установка-компонента)

    1.  [Установка компонента в ОС GNU/Linux 5](#установка-компонента-в-ос-gnulinux)

    2.  [Установка расширения компонента 6](#установка-расширения-компонента)

3.  [Функциональные возможности 8](#функциональные-возможности)

    1.  [Создание ключа и вектора для преобразования данных по умолчанию без параметров 8](#создание-ключа-и-вектора-для-преобразования-данных-по-умолчанию-без-параметров)

    2.  [Создание ключа и вектора для преобразования данных БД с выбором алгоритма AES 10](#создание-ключа-и-вектора-для-преобразования-данных-бд-с-выбором-алгоритма-aes)

    3.  [Создание преобразованной таблицы 10](#создание-преобразованной-таблицы)

    4.  [Чтение данных из преобразованной таблицы 11](#чтение-данных-из-преобразованной-таблицы)

    5.  [Применение преобразования данных к существующей таблице 12](#применение-преобразования-данных-к-существующей-таблице)

    6.  [Просмотр значения ключа преобразования данных jcs.key 12](#просмотр-значения-ключа-преобразования-данных-jcs.key)

    7.  [Вывод номера версии компонента 13](#вывод-номера-версии-компонента)

4.  [Удаление компонента 14](#удаление-компонента)

    1.  [Удаление компонента при отсутствии зависимых от него объектов 14](#удаление-компонента-при-отсутствии-зависимых-от-него-объектов)

    2.  [Удаление компонента при наличии зависимых от него объектов 14](#удаление-компонента-при-наличии-зависимых-от-него-объектов)

5.  [Обновление компонента 15](#обновление-компонента)

    1.  [Обновление компонента с версии 2.0 на версию 3.0 в ОС GNU/Linux 15](#обновление-компонента-с-версии-2.0-на-версию-3.0-в-ос-gnulinux)

6.  [Сообщения об ошибках 18](#сообщения-об-ошибках)

    1.  [Повторное создание ключа и вектора для БД 18](#повторное-создание-ключа-и-вектора-для-бд)

    2.  [Создание преобразованной таблицы без предварительной генерации ключа и вектора преобразования](#создание-преобразованной-таблицы-без-предварительной-генерации-ключа-и-вектора-преобразования-данных) [данных 18](#создание-преобразованной-таблицы-без-предварительной-генерации-ключа-и-вектора-преобразования-данных)

    3.  [Чтение данных из преобразованной таблицы если отсутствует таблица jcs.key 18](#чтение-данных-из-преобразованной-таблицы-если-отсутствует-таблица-jcs.key)

    4.  [Создание ключа и вектора для преобразования с выбором БД без предустановленного расширения JCS](#создание-ключа-и-вектора-для-преобразования-с-выбором-бд-без-предустановленного-расширения-jcs)

[. 18](#создание-ключа-и-вектора-для-преобразования-с-выбором-бд-без-предустановленного-расширения-jcs)

[Перечень сокращений 20](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент JCS предназначен для выполнения сокрытия данных только в таблицах БД и предотвращения возможности ознакомления при их утрате.

## Условия применения

> Компонент JCS может использоваться совместно с СУБД «Jatoba» версий 4.x и выше, под управлением ОС GNU/Linux.
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image1.png" style="width:0.25139in;height:0.25139in" />Начиная с версии 3.0 компонента JCS, ключи преобразования данных хранятся в таблице jcs.key внутри БД, а не в файле jcs.key файловой системы.
>
> В случае утраты ключей преобразования данных или повреждения таблицы jcs.key восстановить данные, содержащиеся в таблицах БД, будет невозможно.
>
> В текущей реализации компонента не поддерживается:

- управление через компонент пользовательского веб-интерфейса для администраторов «Jatoba data safe»;

- преобразование данных секционированных таблиц;

- преобразование данных индексов и материализованных представлений СУБД.

> Компонент JCS не рекомендуется использовать совместно с компонентом сжатия данных на уровне страниц «ja_Compression», поскольку в этом случае сжатие данных неэффективно.
>
> Ограничений по совместимости с другими компонентами нет.

# УСТАНОВКА КОМПОНЕНТА

> Компонент функционирует под управлением ОС семейства GNU Linux. Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе.

## Установка компонента в ОС GNU/Linux

> Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке, либо доустановить.
>
> Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

> Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС.
>
> Для разных типов пакетных менеджеров команда установки различается:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты):

> apt-get install jatoba18-jcs

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства Red Hat и вышедшие из нее, использующие rpm-пакеты):

> yum install jatoba18-jcs
>
> При установке компонента на ОС ALT Linux и openSUSE необходимо учитывать следующие особенности:

- ALT Linux использует пакетный менеджер APT, но распространяется в виде

> rpm-пакетов, команда установки выглядит аналогично Debian:
>
> apt-get install jatoba18-jcs
>
> Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично в соответствии с номером версии СУБД, в составе которой он распространяется.
>
> В наименовании компонента указывается:

- наименование СУБД;

- версия СУБД;

- знак разделителя;

- наименование компонента.

> Например, jatoba4-jсs и т.п.
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Установка расширения компонента

> Предварительная настройка конфигурационного файла «postgresql.conf» для установки расширения компонента не требуется.
>
> Расширение устанавливается при помощи SQL-команды:

<img src="../docs/assets/images/com18.3.1/jcs/media/image3.png" style="width:7.05062in;height:1.0925in" />

> CREATE EXTENSION jcs;
>
> Рисунок 2.1 – Команда установки расширения в CLI под ОС Ubuntu
>
> В результате выполнения SQL-команды в БД создаются схема данных «jcs» и служебная таблица jcs.key.
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image2.png" style="width:0.25in;height:0.25in" />Расширение необходимо устанавливать в каждую БД, в которой требуется выполнять процедуры преобразования данных!
>
> Проверка установки расширения и схемы данных, выполняется SQL-командами:

<img src="../docs/assets/images/com18.3.1/jcs/media/image4.png" style="width:7.1106in;height:4.11719in" />

> \dx
>
> \dn
>
> Рисунок 2.2 – Результат установки расширения и схемы данных в ОС GNU/Linux

# ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ

> Компонент использует два алгоритма преобразования данных:

- AES (используется по умолчанию);

- TwoFish. Компонент позволяет:

- создавать ключ и вектор преобразования данных;

- создавать преобразованные объекты, которые будут доступны другим пользователям СУБД и т.д.

> <img src="../docs/assets/images/com18.3.1/jcs/media/image1.png" style="width:0.25139in;height:0.25139in" />Изменение ключа и вектора предобразования данных, алгоритма преобразования данных может привести к потере доступности данных.
>
> Изменение параметров преобразования данных для объекта не поддерживается!
>
> При создании ключа и вектора преобразования данных соответствующая запись добавляется в служебную таблицу jcs.key. Автоматический режим удаления строк данных в таблице jcs.key компонентом «JCS» не поддерживается.
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image1.png" style="width:0.25139in;height:0.25139in" />Таблица jcs.key защищена служебным триггером, который запрещает выполнение операций UPDATE, DELETE и TRUNCATE над данной таблицей. Это предотвращает случайное или намеренное изменение информации, содержащей ключ и вектор преобразования данных. При необходимости смены ключей следует создать новый ключ для базы данных (при этом предыдущая запись сохраняется в таблице jcs.key).

## Создание ключа и вектора для преобразования данных по умолчанию без параметров

> В режиме администратора существует функциональная возможность создания ключа и вектора преобразования данных по умолчанию. При этом дополнительные параметры не указываются, а назначаются по умолчанию.
>
> Для генерации ключа и вектора по умолчанию (без параметров) необходимо переключиться в БД, в которой установлено расширение jcs, затем от имени и с правами пользователя, имеющего административные привилегии, выполнить SQL-команду:

<img src="../docs/assets/images/com18.3.1/jcs/media/image5.png" style="width:7.11756in;height:1.80187in" />

> SELECT jcs.create_key();
>
> Рисунок 3.1 – Команда создания таблицы jcs.key в ОС GNU/Linux При изменении названия БД, например при помощи SQL-команды
>
> ALTER DATABASE old_db_name RENAME TO new_db_name;
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image1.png" style="width:0.25139in;height:0.25139in" />необходимо в служебной таблице jcs.key в этой БД повторно создать ключ и вектор преобразования данных.
>
> Для просмотра таблицы jcs.key необходимо выполнить следующий запрос:
>
> SELECT \* FROM jcs.key;
>
> Таблица jcs.key содержит следующие столбцы:

- jcs_database – БД;

- jcs_key – ключ преобразования данных;

- jcs_iv – вектор преобразования данных;

- jcs_isaes – метод преобразования данных (true для AES или false для TwoFish).

> По умолчанию, при создании таблицы jcs.key устанавливается метод преобразования данных AES (jcs_isaes) и обозначается значением «t».

Пример содержания таблицы jcs.key приведен на рисунке [3.2](#_bookmark7).

<img src="../docs/assets/images/com18.3.1/jcs/media/image6.png" style="width:7.09371in;height:1.09656in" />

> <span id="_bookmark7" class="anchor"></span>Рисунок 3.2 – Содержание таблицы jcs.key в ОС GNU/Linux

## Создание ключа и вектора для преобразования данных БД с выбором алгоритма AES

> Аналогично вышеописанной SQL-команде можно выполнить SQL-команду для создания ключа и вектора преобразования данных БД с явным указанием алгоритма преобразования данных.
>
> Для этого используется SQL-команда с параметром «true» для той БД, к которой выполнено подключение:
>
> SELECT jcs.create_key(true);
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image1.png" style="width:0.25139in;height:0.25139in" />Если для текущей БД уже существует запись в таблице jcs.key, команда завершится с ошибкой:
>
> ОШИБКА: Key is already defined for database
>
> '\[db_name\]'

## Создание преобразованной таблицы

> После создания ключа и вектора преобразования данных становится доступной возможность создания защищенной таблицы.
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image2.png" style="width:0.25in;height:0.25in" />Все операции вставки, обновления и удаления данных в зашифрованной таблице выполняются обычным образом. Шифрование и дешифрование происходят автоматически при записи и чтении данных.
>
> В качестве примера создадим таблицу с именем «table_a» с использованием механизма преобразования данных SQL-командой:
>
> CREATE TABLE table_a (i int, j int, n varchar(255)) using jcs;
>
> Для последующей проверки доступности данных внесем две строки данных в таблицу:
>
> INSERT INTO table_a values(1, 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante.');
>
> INSERT INTO table_a values(2, 3, 'Morbi lobortis mattis ultricies. Vestibulum elementum ut sem sed fringilla.');

## Чтение данных из преобразованной таблицы

> Вывести содержимое таблицы можно с помощью SQL-команды:
>
> SELECT \* FROM table_a;
>
> При просмотре содержимого таблиц, все записи читаемы и полностью соответствуют тем, что добавлены после создания таблицы (см. рисунок [3.3](#_bookmark11)).

<img src="../docs/assets/images/com18.3.1/jcs/media/image7.png" style="width:7.05968in;height:1.74in" />

> <span id="_bookmark11" class="anchor"></span>Рисунок 3.3 – Чтение данных из зашифрованной таблицы table_a
>
> Для проверки доступности информации в таблице с преобразованными данными, создадим пользователя БД «user_test» с атрибутом «Login»:
>
> CREATE ROLE user_test NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN PASSWORD '12345678';
>
> Предоставим все права на операции с таблицей «table_a» в схеме данных «public»:
>
> GRANT ALL ON TABLE public.table_a TO user_test;
>
> Авторизуемся в БД «test_db» от имени и с правами пользователя user_test и сформируем аналогичный SQL-запрос на вывод содержимого таблицы «table_a».
>
> psql -h localhost -U user_test -d test_db SELECT \* FROM table_a;

## Применение преобразования данных к существующей таблице

> Преобразовать данные существующей таблицы можно изменив метод доступа на jcs:
>
> ALTER TABLE table_a SET ACCESS METHOD jcs;
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image2.png" style="width:0.25in;height:0.25in" />Перед выполнением данной операции убедитесь, что для текущей базы данных создан ключ преобразования данных в таблице jcs.key. В противном случае операция завершится ошибкой.
>
> После этого необходимо проверить доступ к преобразованным данным этой таблицы (см. п. [3.4](#чтение-данных-из-преобразованной-таблицы)).

## Просмотр значения ключа преобразования данных jcs.key

> Просмотр ключа выполняется SQL–командой:
>
> SHOW jcs.key;
>
> Выводится значение параметра «jcs_key» из таблицы «jcs.key», если SQL-запрос был выполнен от имени и с правами пользователя «postgres».

<img src="../docs/assets/images/com18.3.1/jcs/media/image8.png" style="width:7.10666in;height:1.69531in" />

> Рисунок 3.4 – Вывод значения ключа преобразования данных jcs.key
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image2.png" style="width:0.25in;height:0.25in" />Параметры, устанавливаемые через команду SET и отображаемые через команду SHOW, существуют только в рамках текущего сеанса.
>
> Если SQL-запрос выполнен от имени и с правами пользователя СУБД, значение параметра «jcs_key» будет скрыто.

## Вывод номера версии компонента

> Версия компонента выводится SQL-командой:

<img src="../docs/assets/images/com18.3.1/jcs/media/image9.png" style="width:7.09531in;height:1.69531in" />

> SELECT jcs.version();
>
> Рисунок 3.5 – Вывод номера версии компонента

# УДАЛЕНИЕ КОМПОНЕНТА

## Удаление компонента при отсутствии зависимых от него объектов

> Удаление компонента осуществляется средствами пакетного менеджера ОС. При этом нужно использовать команду удаления, соответствующую пакетному менеджеру: remove, purge, erase и т.п.
>
> Для удаления компонента потребуется авторизоваться в СУБД и выполнить команду:
>
> DROP EXTENSION jcs;
>
> В ОС GNU/Linux требуется выйти из psql и удалить пакет расширения, выполнив SQL-команду:
>
> apt-get remove jatoba18-jcs

## Удаление компонента при наличии зависимых от него объектов

> Для удаления компонента вместе со всеми зависимыми от него объектами потребуется авторизоваться в СУБД и выполнить команду:
>
> DROP EXTENSION jcs cascade;

# ОБНОВЛЕНИЕ КОМПОНЕНТА

> <img src="../docs/assets/images/com18.3.1/jcs/media/image1.png" style="width:0.25138in;height:0.25083in" />В данном разделе описаны процедуры обновления компонента JCS с версии 2.0 до версии 3.0.
>
> Версия JCS 3.0 доступна только после обновления СУБД «Jatoba» до версии ядра 5/6/18.

## Обновление компонента с версии 2.0 на версию 3.0 в ОС GNU/Linux

> Обновление компонента до версии 3.0 выполняются в следующей последовательности:

1)  Остановить службу СУБД;

2)  Выполнить установку пакета компонента с новой версией 3.0;

3)  Запустить службу СУБД;

4)  Выполнить подключение к СУБД и обновить расширение:

> ALTER EXTENSION jcs UPDATE;

5)  Проверить версию компонента:

> \dx
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image10.png" style="width:7.10089in;height:4.13656in" />
>
> Рисунок 5.1 – Обновление компонента «JCS» в ОС GNU/Linux

6)  Выполнить ручной перенос ключа и вектора преобразования данных из файла jcs.key в таблицу jcs.key. Для этого необходимо открыть содержимое файла

> /var/lib/jatoba/\<ver\>/jcs/jcs.key, скопировать имя БД, ключ, вектор и значение параметра isAES и выполнить запрос следующего синтаксиса:
>
> INSERT INTO jcs.key(jcs_database, jcs_key, jcs_iv, jcs_isaes) VALUES ('\<dbname\>', '\<jcs_key\>', '\<jcs_iv\>', \<true/false\>);
>
> Где dbname – название БД, jcs_key – ключ преобразования данных, jcs_iv – вектор преобразования данных, true/false – использование метода преобразования данных isAES.
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image2.png" style="width:0.25in;height:0.25in" />Запрос выполняется для каждой строки из файла jcs.key

## Пример:

> INSERT INTO jcs.key(jcs_database, jcs_key, jcs_iv, jcs_isaes) VALUES ('postgres', 'e044f581984c47b3c50f461264ae387d1ff84ee3b59de948e3961e0c87a71a 81', '4447615a4a7b0a02737b243c7f212125', true);
>
> <img src="../docs/assets/images/com18.3.1/jcs/media/image11.jpeg" style="width:7.11061in;height:1.33687in" />
>
> Рисунок 5.2 – Перенос ключа и вектора преобразования данных из файла jcs.key в таблицу jcs.key

7)  Выполнить чтение преобразованных данных из таблицы и убедится в том, что к ним имеется доступ.

> На данном этапе обновление компонента «JCS» до версии 3.0 считается выполненным успешно.

# СООБЩЕНИЯ ОБ ОШИБКАХ

## Повторное создание ключа и вектора для БД

> Создание ключа и вектора для преобразования данных с параметрами или по умолчанию осуществляется с помощью SQL-команды:
>
> SELECT jcs.create_key();
>
> В случае, если эти действия были ранее выполнены, то СУБД выведет ошибку:
>
> Key is already defined for database
>
> Это означает, что повторно сгенерировать ключ и вектор преобразования данных для текущей БД невозможно.

## Создание преобразованной таблицы без предварительной генерации ключа и вектора преобразования данных

> Создание преобразованной таблицы осуществляется с помощью SQL-команды:
>
> CREATE TABLE table_a (g int) using jcs;
>
> Если таблица «jcs.key» отсутствует, то СУБД выведет сообщение об ошибке:
>
> Error executing the cryptographic function

## Чтение данных из преобразованной таблицы если отсутствует таблица jcs.key

> Чтение данных из преобразованной таблицы будет невозможно в случае удаления или повреждения таблицы «jcs.key», СУБД выведет ошибку:
>
> Error executing the cryptographic function
>
> Восстановить доступ к данным возможно, только при восстановлении таблицы
>
> «jcs.key».

## Создание ключа и вектора для преобразования с выбором БД без предустановленного расширения JCS

> В случае, если компонент JCS не установлен, то при попытке создания ключа и вектора для преобразования данных, СУБД выведет сообщение об ошибке:
>
> SQL Error \[3F000\]: ERROR: schema "jcs" does not exist

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 7%" />
<col style="width: 69%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>SQL</p>
</blockquote></th>
<th style="text-align: right;">–</th>
<th><blockquote>
<p>Structured Query Language – язык структурированных запросов</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>CLI</p>
</blockquote></td>
<td style="text-align: right;">–</td>
<td><blockquote>
<p>Command-line interface – интерфейс командной строки</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>БД</p>
</blockquote></td>
<td style="text-align: right;">–</td>
<td><blockquote>
<p>База данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ОС</p>
</blockquote></td>
<td style="text-align: right;">–</td>
<td><blockquote>
<p>Операционная система</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>СУБД</p>
</blockquote></td>
<td style="text-align: right;">–</td>
<td><blockquote>
<p>Система управления базами данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ФСТЭК России</p>
</blockquote></td>
<td style="text-align: right;">–</td>
<td><blockquote>
<p>Федеральная служба по техническому и экспортному контролю России</p>
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
</tbody>
</table>
