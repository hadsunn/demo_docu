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
<p><strong>Руководство по настройке. Часть 2.</strong></p>
<p><strong>Контроль субъектов доступа. Компонент «Jatoba data vault»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-02</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 29</p>
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

# <img src="../docs/assets/images/com18.3.1/jdv/media/image1.png" style="width:0.25208in;height:0.25208in" />АННОТАЦИЯ

> В документе приведены сведения, необходимые для установки и эксплуатации компонента «Jatoba data vault» (далее – Компонент JDV). Настоящее руководство предназначено для администратора СУБД «Jatoba».
>
> Администратор СУБД «Jatoba» должен иметь навыки по работе с системами управления базами данных (СУБД) PostgreSQL или защищенной СУБД «Jatoba» (ООО «Газинформсервис»).
>
> Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image1.png" style="width:0.25139in;height:0.25139in" />**Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image2.png" style="width:0.25in;height:0.24863in" /><img src="../docs/assets/images/com18.3.1/jdv/media/image2.png" style="width:0.25249in;height:0.25208in" />**Дополнительная информация** – указания, позволяющие упростить работу с изделием

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
<p>Для СУБД «Jatoba» версии ядра 4 используется версия компонента — 1.4.</p>
<p>Для СУБД «Jatoba» версии ядра 5/6/18 используется версия компонента — 1.7.</p>
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

    1.  [Функциональные возможности 4](#функциональные-возможности)

2.  [Установка и настройка компонента 7](#установка-и-настройка-компонента)

    1.  [Установка компонента в ОС GNU/Linux 7](#установка-компонента-в-ос-gnulinux)

    2.  [Установка расширения JDV 8](#установка-расширения-jdv)

        1.  [Особенности совместного использования компонентов JDV и securityprofile 8](#_bookmark5)

        2.  [Установка расширения JDV отдельно 9](#_bookmark6)

    3.  [Использование компонента 11](#использование-компонента)

        1.  [Роль «dv_owner» 13](#роль-dv_owner)

        2.  [Групповая роль «dv_secanalyst» 13](#групповая-роль-dv_secanalyst)

        3.  [Роль «dv_acctmgr» 14](#роль-dv_acctmgr)

        4.  [Групповая роль «dv_group» 15](#групповая-роль-dv_group)

3.  [Проверка работоспособности компонента 16](#проверка-работоспособности-компонента)

4.  [Описание операций 20](#описание-операций)

    1.  [Управление списком защищаемых таблиц 20](#управление-списком-защищаемых-таблиц)

    2.  [Управление списком защищенных ролей 20](#управление-списком-защищенных-ролей)

    3.  [Управление функциями мониторинга 21](#управление-функциями-мониторинга)

        1.  [Определение событий безопасности подлежащих регистрации компонентом JDV 21](#определение-событий-безопасности-подлежащих-регистрации-компонентом-jdv)

        2.  [Управление регистрацией событий безопасности (логированием) компонента JDV 22](#управление-регистрацией-событий-безопасности-логированием-компонента-jdv)

        3.  [Управление местом хранения событий безопасности и политикой хранения 24](#управление-местом-хранения-событий-безопасности-и-политикой-хранения)

5.  [Временное отключение компонента 26](#временное-отключение-компонента)

6.  [Удаление компонента 27](#удаление-компонента)

[Перечень сокращений 28](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент JDV предназначен для ограничения доступа пользователей СУБД к защищаемым объектам баз данных (БД).

## Функциональные возможности

> Компонент JDV позволяет создать список защищаемых таблиц БД, работать c каждой из которых могут только:

- владелец таблицы;

- пользователь, который имеет доступ к таблице и при этом имеет специальное разрешение (команда jdv_set_perm).

> Пользователи с полными правами в СУБД (далее – суперпользователи) не имеют доступа к защищенным таблицам, если они не относятся к данным категориям.
>
> Для суперпользователей по отношению к защищаемым объектам БД недоступны команды:

- SELECT;

- INSERT;

- UPDATE;

- DELETE;

- DROP;

- TRUNCATE.

> Суперпользователям недоступны команды:

- CREATE ROLE, DROP ROLE, ALTER ROLE;

- CREATE EXTENSION;

- CREATE TRIGGER;

- DROP EXTENSION jdv;

- LOAD.

> Суперпользователям частично недоступны команды:

- DROP OWNED;

- GRANT;

- REASSIGN OWNED;

- SET ROLE;

- SET SESSION AUTHORIZATION.

> Данные команды недоступны, если они применяются по отношению:

- к ролям, владеющим защищаемыми объектами;

- к ролям, имеющим специальные разрешения;

- к служебным объектам расширения.

> Суперпользователю недоступны для изменения и удаления само расширение и объекты расширения:

- схема (jdv);

- роли (dv_owner, dv_secanalyst, dv_acctmgr, dv_group);

- таблицы и функции расширения.

> Суперпользователю недоступны команды INSERT, UPDATE, DELETE по отношению к системным каталогам:

- pg_attribute;

- pg_authid;

- pg_auth_members;

- pg_constraint;

- pg_db_role_setting;

- pg_enum;

- pg_extension;

- pg_index;

- pg_init_privs;

- pg_namespace;

- pg_proc;

- pg_class;

- pg_type.

> <img src="../docs/assets/images/com18.3.1/jdv/media/image1.png" style="width:0.25138in;height:0.25067in" />Компонент JDV добавляет ограничения при работе с объектами, но не предоставляет дополнительных средств для обхода стандартной системы проверки доступа к объектам
>
> Для получения доступа к защищаемой таблице пользователь должен иметь:

1)  доступ от СУБД «Jatoba»;

2)  разрешение от компонента JDV. Суперпользователь должен иметь разрешение от JDV.

# УСТАНОВКА И НАСТРОЙКА КОМПОНЕНТА

> Компонент JDV устанавливается на ЭВМ, на которой установлена расширяемая СУБД.
>
> Все команды при установке и при работе с компонентом JDV выполняются в консоли работы с СУБД (встроенная в PostgreSQL и СУБД «Jatoba» утилита psql).

## Установка компонента в ОС GNU/Linux

> Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке, либо доустановить.
>
> Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

> Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

> apt-get install jatoba4-jdv

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:

> yum install jatoba4-jdv
>
> Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

> apt-get install jatoba4-jdv
>
> Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba4-jdv т.п.
>
> Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Установка расширения JDV

1.  <span id="_bookmark5" class="anchor"></span>**Особенности совместного использования компонентов JDV и**

> **securityprofile**
>
> Компонент JDV совместим с компонентом SecurityProfile версии 1.2 и старше.
>
> При использовании компонента парольных политик SecurityProfile, сначала необходимо установить расширение SecurityProfile, затем расширение jdv.
>
> В конфигурационном файле в «postgresql.conf» установить следующий порядок загрузки:
>
> shared_preload_libraries = 'jdv, securityprofile'
>
> После чего выполнить следующие действия:

1)  Указать в конфигурационном файле «pg_hba.conf» метод «md5» для ipv4 подключений.

> <img src="../docs/assets/images/com18.3.1/jdv/media/image1.png" style="width:0.25139in;height:0.25139in" />Начиная с СУБД «Jatoba» версии 18 для компонента SecurityProfile необходимо применять метод аутентификации «scram-sha-256».

2)  Выполнить перезагрузку СУБД.

3)  Авторизоваться в СУБД от имени и с правами суперпользователя.

4)  Создать расширение securityprofile SQL-командой:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3"><blockquote>
<p>CREATE EXTENSION securityprofile;</p>
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

5)  Выполнить создание профиля dv_profile парольной политики компонента SecurityProfile в соответствии с указаниями из п.п. 6.1.6. Взаимодействие с компонентом JDV из документа «Руководство администратора» 643.72410666.00067-08 95 01;

6)  Создать расширение jdv SQL-командой:

> CREATE EXTENSION IF NOT EXISTS jdv;

7)  Функцию инициализации securityprofile SQL-командой:

> SELECT securityprofile.synchronize();

8)  Установить пароль для суперпользователя, подходящий под установленную парольную политику по умолчанию.

9)  Авторизоваться под служебными пользователями JDV – dv_acctmgr или dv_owner.

## Установка расширения JDV отдельно

> Для установки компонента выполняется следующая последовательности действий:

1)  В разделе «Shared Library Preloading» конфигурационного файла postgresql.conf внести изменения:

<img src="../docs/assets/images/com18.3.1/jdv/media/image3.png" style="width:7.08553in;height:1.65792in" />

> shared_preload_libraries = 'jdv'
>
> Рисунок 2.1 – Окно редактирования postgresql.conf Затем для применения параметров перезагрузить СУБД.

2)  Загрузить расширение, выполнив команду:

> CREATE EXTENSION IF NOT EXISTS jdv;
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image4.png" style="width:7.0367in;height:1.30812in" />
>
> Рисунок 2.2 – Создание расширения
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image2.png" style="width:0.25in;height:0.25in" />Загрузить расширение будет невозможно, если не выполнен п. 2.
>
> В результате установки расширения в СУБД будут созданы:

- схема jdv;

<img src="../docs/assets/images/com18.3.1/jdv/media/image5.png" style="width:7.03657in;height:1.50937in" />

- роли:

  - dv_owner (временный пароль: P@ssword1);

  - dv_acctmgr (временный пароль: P@ssword2);

  - dv_secanalyst (nologin);

<img src="../docs/assets/images/com18.3.1/jdv/media/image6.png" style="width:7.03872in;height:1.62437in" />

- служебные таблицы:

  - jdv_log;

  - jdv_log_meta;

  - jdv_log_rules;

  - jdv_settings;

  - jdv_table;

<img src="../docs/assets/images/com18.3.1/jdv/media/image7.png" style="width:7.03675in;height:1.28656in" />

> Рисунок 2.3 – Служебные таблицы

- функции расширения:

  - в схеме jdv.

<img src="../docs/assets/images/com18.3.1/jdv/media/image8.png" style="width:7.03663in;height:3.13375in" />

> Рисунок 2.4 – Функции расширения в схеме JDV
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image1.png" style="width:0.25138in;height:0.25138in" />В случае последующей установки компонента SecurityProfile необходимо создать профиль dv_profile парольной политики в соответствии с указаниями из п.п. 6.1.6. Взаимодействие с компонентом JDV из документа «Руководство администратора» 643.72410666.00067-08 95 01

## Использование компонента

> Типовое соотношение структуры и атрибутов ролей в СУБД отображено на рисунке [2.5](#_bookmark8).
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image9.png" style="width:1.43559in;height:1.43479in" />Атр и буты р олей
>
> SUPERUSER
>
> Стр ук ту р а р олей в СУБД
>
> Атр и буты р олей
>
> CREATEROLE CREATED B REPLICATION
>
> Адм и н и стр атор безоп ас н ости
>
> Адм и н и стр атор ы БД
>
> Гр у п п овые р оли
>
> INHERIT
>
> INHERIT

LOGI N

> Гр у п п овые р оли
>
> Пользователи БД
>
> <span id="_bookmark8" class="anchor"></span>Рисунок 2.5 – Схема структуры атрибутов ролей
>
> При активации компонентов JDV и SecurityProfile структура ролей управления СУБД изменяется. Компонент JDV предназначен для ограничения доступа пользователей СУБД к защищаемым объектам баз данных. Компонент SecurityProfile предназначен для реализации парольной политики.
>
> Условная группа Администраторов баз данных дробится на дополнительные роли с переходом функциональных возможностей по:

- администрированию защищаемых таблиц и пользователей;

- мониторинга ролей, объектов и схем;

- администрированию пользователей.

> Ролевая модель состоит из:

- администратора баз данных (Database administrator);

- администратора безопасности (Security administrator);

- аудитора (Auditor);

- администратора пользователей (User administrator);

- защищаемых пользователей и пользователей (Protected users & users).

## Роль «dv_owner»

> Для администрирования защищаемых таблиц и пользователей администратор безопасности (Security administrator) имеет роль «dv_owner», при этом не имеет функциональных возможностей по администрированию пользователей и используется только для работы с функциями расширения.

<img src="../docs/assets/images/com18.3.1/jdv/media/image14.png" style="width:7.04552in;height:1.21469in" />

> Рисунок 2.6 – Свойства роли «dv_owner» При использовании компонента JDV совместно с

## Групповая роль «dv_secanalyst»

> Аудитор (Auditor) отнесен к групповой роли «dv_secanalyst», имеет функциональные возможности только просмотра событий безопасности, генерируемых компонентом JDV, таких как jdv_table, jdv_log_rules и jdv_log.
>
> Роль «dv_secanalyst» не используется для обработки информации с СУБД.
>
> Для работы с ней dv_owner должен предварительно включить существующую роль в члены этой группы (например, роль администратора безопасности, но не суперпользователя):
>
> GRANT dv_secanalyst TO role AIB
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image15.png" style="width:7.03656in;height:1.20031in" />
>
> Рисунок 2.7 – Свойства групповой роли «dv_secanalyst»

## Роль «dv_acctmgr»

> Администратор пользователей (User administrator) отнесен к роли «dv_acctmgr» и имеет эксклюзивную функциональную возможность по администрированию пользователей и ряд функциональных особенностей:

- Роль dv_acctmgr эксклюзивно получает права на CREATE / ALTER / DROP /

> '\password \[username\]' для всех ROLE / USER.

- Роль dv_acctmgr не может создавать/удалять суперпользователей и изменять их параметры.

- Роль dv_acctmgr не может изменить пароль для роли dv_owner и ее членов, а также суперпользователей. Все пользователи могут изменить свой пароль самостоятельно.

> <img src="../docs/assets/images/com18.3.1/jdv/media/image2.png" style="width:0.25in;height:0.24953in" />Все роли, которые имеют атрибут CREATEROLE (имеющиеся или вновь созданные), могут воспользоваться этой опцией только если являются членами группы dv_acctmgr.
>
> Только dv_acctmgr может включить роль в dv_acctmgr (кроме суперпользователей и членов их групп):
>
> GRANT dv_acctmgr TO role
>
> Ограничение версии: dv_acctmgr не может делать ALTER RENAME для защищенных ролей.
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image16.png" style="width:7.06232in;height:1.21469in" />
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image1.png" style="width:0.25139in;height:0.25139in" />Рисунок 2.8 – Свойства роли «dv_acctmgr»

## Групповая роль «dv_group»

> Защищаемые пользователи (Protected users), являющиеся владельцами таблиц(ы) и (или) имеющие специальное разрешение на доступ к защищаемому объекту, относятся к групповой роли «dv_group». Остальные пользователи (users) могут относиться к любым другим групповым ролям.

<img src="../docs/assets/images/com18.3.1/jdv/media/image17.png" style="width:7.03658in;height:1.17156in" />

> Рисунок 2.9 – Свойство групповой роли «dv_group»
>
> Ролевая модель при функционировании компонентов JDV и SecurityProfile представлена на рисунке [2.10](#_bookmark13).
>
> Dat ab ase ad m in ist rat or
>
> Secu r i ty ad m in ist rat or
>
> Audit or
>
> User ad m in ist rat or
>
> Pro tec ted u sers & u ser s

<table>
<colgroup>
<col style="width: 22%" />
<col style="width: 22%" />
<col style="width: 20%" />
<col style="width: 17%" />
<col style="width: 17%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Superuser</p>
<p>Dat ab ase ad m in ist rat or</p>
<p>(CREATED B)</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>dv_ow n er (LOGI N)</p>
</blockquote>
<p>JD V</p></th>
<th><blockquote>
<p>dv_secan aly st (NOLOGIN)</p>
<p>JD V</p>
<p>(м он и тор и н г )</p>
</blockquote></th>
<th style="text-align: right;"><p>dv_acct m g r</p>
<blockquote>
<p>(LOGI N) (CREATEROLE)</p>
<p>JD V</p>
</blockquote>
<p>securit yprofile</p></th>
<th><blockquote>
<p>dv_group (NOLOGIN)</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td style="text-align: center;"><blockquote>
<p>Адм и н истр ир ован ие защ и щаем ых табли ц и п ользователей</p>
</blockquote></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2"></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>Ф унк ци и м о ни тор и нга</p>
</blockquote></td>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>Л ог и рован и е ролей</p>
<p>Л ог и р о ван и е объек тов</p>
<p>jd v.jd v_log Л ог и рован и е схем</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>Адм и н истр ир ован ие п ользователей</p>
<p>Пользователи БД</p>
</blockquote></td>
<td><blockquote>
<p>Пользователи БД</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <span id="_bookmark13" class="anchor"></span>Рисунок 2.10 – Распределение функциональных возможностей

# ПРОВЕРКА РАБОТОСПОСОБНОСТИ КОМПОНЕНТА

> Для проверки корректности работы компонента JDV необходимо выполнить следующие действия:

1)  Пользователь «dv_acctmgr» создает роли «role_x», «role_y» и «roleAIB», выполнив следующие команды:

<img src="../docs/assets/images/com18.3.1/jdv/media/image35.png" style="width:7.03669in;height:1.2075in" />

> CREATE ROLE role_x LOGIN PASSWORD 'P@ssword3';
>
> Рисунок 3.1 – Окно создания пользователя «role_x»

<img src="../docs/assets/images/com18.3.1/jdv/media/image36.png" style="width:7.03669in;height:1.40875in" />

> CREATE ROLE role_y LOGIN PASSWORD 'P@ssword4';
>
> Рисунок 3.2 – Окно создания пользователя «role_y»

<img src="../docs/assets/images/com18.3.1/jdv/media/image37.png" style="width:7.04336in;height:1.63156in" />

> CREATE ROLE roleAIB NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN PASSWORD 'P@ssword5';
>
> Рисунок 3.3 – Окно создания роли «roleAIB»

2)  Пользователь «role_x» создает тестовую таблицу и устанавливает доступ к ней для пользователя «role_y»:

> CREATE TABLE table_x (i int, j int);

<img src="../docs/assets/images/com18.3.1/jdv/media/image38.png" style="width:7.03657in;height:1.30094in" />

> Рисунок 3.4 – Окно создания таблицы table_x

<img src="../docs/assets/images/com18.3.1/jdv/media/image39.png" style="width:7.04257in;height:1.53094in" />

> GRANT ALL PRIVILEGES ON TABLE table_x TO role_y;
>
> Рисунок 3.5 – Окно предоставления привилегий пользователю «role_y»

3)  Пользователь «dv_owner» включает в состав групповой роли «dv_secanalyst» роль-наблюдателя «roleAIB», выполнив команду:

<img src="../docs/assets/images/com18.3.1/jdv/media/image40.png" style="width:7.03662in;height:1.31531in" />

> GRANT dv_secanalyst TO roleAIB;
>
> Рисунок 3.6 – Окно включения роли «roleAIB» в состав групповой роли «dv_secanalyst»

4)  Пользователь «dv_owner» включает таблицу «table_x» в список защищаемых объектов, выполнив команду:

> SELECT jdv.jdv_add_table('table_x');
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image41.png" style="width:7.03664in;height:2.00531in" />
>
> Рисунок 3.7 – Окно включения таблицу «table_x» в список защищаемых объектов

5)  Пользователь «SUPERUSER» при попытке доступа к защищаемой таблице

> «table_x» получает отказ на выполнение операции:

<img src="../docs/assets/images/com18.3.1/jdv/media/image42.png" style="width:7.0367in;height:1.28656in" />

> SELECT \* FROM table_x;
>
> Рисунок 3.8 – Окно ошибки получения доступа Superuser к защищаемой таблице «table_x»

6)  Пользователь «role_y» при попытке доступа к защищаемой таблице «table_x» получает отказ на выполнение операции:

<img src="../docs/assets/images/com18.3.1/jdv/media/image43.png" style="width:7.03667in;height:1.30812in" />

> SELECT \* FROM table_x;
>
> Рисунок 3.9 – Окно попытки доступа к защищаемой таблице «table_x» пользователем
>
> «role_y»

7)  Пользователь «dv_owner» устанавливает разрешение на работу с таблицей

> «table_x» пользователю «role_y»:
>
> SELECT jdv.jdv_set_perm('table_x', 'role_y');
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image44.png" style="width:7.03662in;height:1.88312in" />
>
> Рисунок 3.10 – Окно предоставления доступа пользователю «role_y» к защищаемой таблице «table_x»

8)  Пользователь «role_y» успешно выполняет операцию:

<img src="../docs/assets/images/com18.3.1/jdv/media/image45.png" style="width:7.04036in;height:1.76094in" />

> SELECT \* FROM table_x;
>
> Рисунок 3.11 – Окно получения доступа к защищаемой таблице

9)  Пользователь «roleAIB» успешно просматривает таблицу защищаемых объектов «jdv.jdv_table»:

<img src="../docs/assets/images/com18.3.1/jdv/media/image46.png" style="width:7.03745in;height:1.88312in" />

> SELECT \* from jdv.jdv_table;
>
> Рисунок 3.12 – Окно получения доступа к списку защищаемых таблиц

# ОПИСАНИЕ ОПЕРАЦИЙ

## Управление списком защищаемых таблиц

> Роли dv_owner доступны функции управления списком защищаемых таблиц:

1)  <img src="../docs/assets/images/com18.3.1/jdv/media/image2.png" style="width:0.25in;height:0.24932in" />добавление в список защищаемых объектов «jdv.jdv_table» защищаемой таблицы:

> jdv.jdv_add_table(table_name)
>
> Объекты, находящиеся в этом списке, нельзя переименовать и удалить через команду DROP и DROP OWNED.

2)  удаление из списка защищаемых объектов таблицы:

> jdv.jdv_remove_table(table_name)

3)  установка разрешения пользователю (роли) на работу с защищаемой таблицей:

> jdv.jdv_set_perm(table_name, role_name)

4)  отмена разрешения на работу с защищаемой таблицей пользователю (роли):

> jdv.jdv_reset_perm(table_name, role_name)

## Управление списком защищенных ролей

> Роли dv_owner также доступны функции управления списком защищенных ролей:

1)  добавление роли в список защищаемых:

> jdv.jdv_add_role(role_name)
>
> При добавлении таблиц и установке разрешений (через функции jdv_add_table и jdv_set_perm) роль-владелец или роль-пользователь добавляются в список защищаемых автоматически, поэтому эту функцию использовать в данном случае не требуется.
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image2.png" style="width:0.25in;height:0.24999in" />При выполнении данной функции заданная роль включается в группу dv_group.

2)  удаление роли из списка защищаемых:

> jdv.jdv_remove_role(role_name)
>
> При удалении таблиц и отмене разрешений (через функции jdv_remove_table и jdv_reset_perm) роли из списка защищаемых автоматически не удаляются. Это связано с тем, что данная роль может иметь защищаемые объекты в других базах данных.
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image2.png" style="width:0.25in;height:0.25in" />При выполнении данной функции заданная роль исключается из группы dv_group.

## Управление функциями мониторинга

> Ролям «dv_owner» и «dv_secanalyst» доступны функции мониторинга:

1)  просмотр списка защищаемых объектов:

> SELECT \* from jdv.jdv_table where role_name = 'o w n e r'

2)  просмотр списка разрешений:

> SELECT \* from jdv.jdv_table where role_name \<\> 'o w n e r'

## Определение событий безопасности подлежащих регистрации компонентом JDV

> При выполнении пользователями операций (успешных и неуспешных) в файл журнала postgresql записываются информационные сообщения. Компонентом JDV обеспечивается логирование следующих событий:

1)  создание, изменение, удаление правила.

> Например, сообщение об успешном добавлении таблицы table1 в список защищаемых таблиц:
>
> jdv \* set \* jdv_add_table('table1')

2)  успешная попытка доступа пользователя к таблице/таблицам.

> Например, сообщение об успешном получении ролью role1 доступа к таблицам schema1.table1 и schema.table2 (роли role1 ранее назначены разрешения на доступ к этим
>
> таблицам):
>
> jdv \* success \* role1: schema1.table1

3)  неуспешная попытка доступа пользователя к таблице/таблицам.

> Например, сообщение о неуспешной попытке доступа роли role1 к таблицам schema1.table1 и schema.table2 (роли role1 ранее не назначены разрешения на доступ к этим таблицам):
>
> jdv \* prohibit \* role1: schema1.table1

## Управление регистрацией событий безопасности (логированием) компонента JDV

> По умолчанию логирование включено для всех защищаемых таблиц и всех ролей, для схем не задано. Для выполнения логирования по событиям 2) и 3) требуется указать необходимые схемы, в которых находятся защищаемые объекты.

Компонент JDV позволяет настраивать логирование от имени и с правами роли

«dv_owner». При этом доступны функции управления логированием ролей, объектов и схем:

1)  функции для управления логированием ролей:

    - добавление в логирование действий над объектами JDV ролей role1, role2.

> jdv.jdv_log_include_role('role1','role2' \| '\*')
>
> При этом возможно добавление как одной, так и нескольких ролей, а также добавление всех возможных ролей, установив параметр '\*'.

- исключение из логирования действий над объектами JDV ролей role1, role2.

> jdv.jdv_log_exclude_role('role1','role2' \| '\*')
>
> При этом возможно исключение как одной, так и нескольких ролей, а также исключение всех возможных ролей, установив параметр '\*'.

2)  функции для управления логированием объектов.

    - добавление в логи действий над объектами schema1.table1, schema1.table2

> jdv.jdv_log_include_object('schema1.table1,'schema1.table2' \| '\*')
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image2.png" style="width:0.25in;height:0.25in" />Возможно добавление в логирование как одного, так и нескольких объектов, а также добавление всех возможных объектов установив параметр '\*'.
>
> По умолчанию для всех защищаемых таблиц логирование включено.

- исключение из логирования действий над объектами schema1.table1, schema1.table2

> jdv.jdv_log_exclude_object('schema1.table1','schema1.table2' \| '\*')
>
> Возможно исключение из логирования как одного, так и нескольких объектов, а также исключение всех возможных объектов, установив параметр '\*'.

3)  функции для управления логированием схем.

> ‒ добавление в логирование действий над всеми объектами схем schema1, schema2:
>
> jdv_log_include_schema('schema1','schema2' \| '\*')
>
> Возможно добавление в логирование действий как с одной, так и несколькими схемами, а также добавление всех возможных схем, установив параметр '\*'.
>
> ‒ исключение из логирования действий над всеми объектами схем schema1, schema2:
>
> jdv_log_exclude_schema('schema1','schema2' \| '\*')
>
> Возможно исключение из логирования действий как над одной, так и над несколькими схемами, а также исключение всех возможных схем, установив параметр '\*'.
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image2.png" style="width:0.25in;height:0.25in" />По умолчанию для всех схем логирование отключено. Требуется задать необходимые схемы.

## Управление местом хранения событий безопасности и политикой хранения

> По умолчанию поток событий безопасности (логов) направляется в хранилище СУБД
>
> «Jatoba».
>
> При необходимости, логирование событий доступа к объектам может также производиться в служебную таблицу jdv_log. Для этого имеются следующие функции:

1)  функция для переключения места логирования:

> jdv.jdv_log_dest('pglog' или 'pglog_table')
>
> где:
>
> ‒ 'pglog' – поток логов компонента jdv направляется в хранилище СУБД «Jatoba»;
>
> ‒ 'pglog_table' – поток событий безопасности направляется в таблицу jdv.jdv_log и в хранилище СУБД «Jatoba».
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image2.png" style="width:0.25in;height:0.25in" />Все служебные таблицы, в том числе таблица «jdv.jdv_log», доступны только для членов «dv_owner» и «dv_secanalyst».
>
> В таблицу jdv.jdv_log записывается следующая информация:
>
> ‒ время начала транзакции;
>
> ‒ имя роли;
>
> ‒ имя объекта;
>
> ‒ статус доступа ('SUCCESS', 'PROHIBIT');
>
> ‒ текст команды (не более 300 символов).

2)  <img src="../docs/assets/images/com18.3.1/jdv/media/image2.png" style="width:0.25in;height:0.25in" />функция для задания политики очистки таблицы «jdv.jdv_log»:

> jdv_log_flush('параметр', значение)
>
> Вызывать функцию может только dv_owner.
>
> Принимает один из вариантов параметра:
>
> ‒ 'day' – дневная периодичность, в сутках;
>
> ‒ 'kb' – размерная периодичность, в килобайтах;
>
> ‒ 'rows' – размерная периодичность, в строках;
>
> ‒ 'now' – моментальная очистка;
>
> ‒ 'check' – просмотр установленной политики очистки;
>
> ‒ 'disable'– отмена политик очистки.
>
> Параметры количества периодичности – 'day', 'size_kb', 'rows' – целое число.
>
> Выставление новой политики очистки поверх старой отменяет старую политику автоматически.
>
> Примеры применения команды jdv_log_flush приведены в таблице [1](#_bookmark22). <span id="_bookmark22" class="anchor"></span>Таблица 1 – Примеры применения команды jdv_log_flush

<table>
<colgroup>
<col style="width: 42%" />
<col style="width: 57%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Команда</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>SELECT jdv_log_flush('day', 7)</p>
</blockquote></td>
<td><blockquote>
<p>Все записи старше 7 дней удаляются. Проверка</p>
<p>раз в 1 час</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SELECT jdv_log_flush('kb', 1024)</p>
</blockquote></td>
<td><blockquote>
<p>При превышении таблицы размера в 1024 Кб</p>
<p>самые старые логи удаляются. Проверка раз в 1 час</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SELECT jdv_log_flush('rows', 10000)</p>
</blockquote></td>
<td><blockquote>
<p>При превышении таблицы размера в 10000 cтрок самые старые логи удаляются. Проверка раз в 1</p>
<p>час</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SELECT jdv_log_flush('disable')</p>
</blockquote></td>
<td><blockquote>
<p>Отменяет политику очистки</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SELECT jdv_log_flush('check')</p>
</blockquote></td>
<td><blockquote>
<p>Показывает текущую политику очистки:</p>
<p>rows, 10000 / kb, 1024 / day, 7</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SELECT jdv_log_flush('now')</p>
</blockquote></td>
<td><blockquote>
<p>Таблица полностью очищается</p>
</blockquote></td>
</tr>
</tbody>
</table>

# ВРЕМЕННОЕ ОТКЛЮЧЕНИЕ КОМПОНЕНТА

> Компонент JDV может быть временно отключен, например, при выполнении обновления СУБД «Jatoba» до версии 18 включительно.
>
> Для временного отключения компонента JDV необходимо проделать следующие
>
> шаги:

1)  подключиться к СУБД ролью «dv_owner» и выполнить команду деактивации

> компонента:
>
> SELECT jdv.jdv_deactivate();

2)  подключиться к СУБД суперпользователем для выполнения любых операций без ограничений, например, выполнения обновления компонента (см. документ

> «Руководство по обновлению» 643.72410666.00067-08 93 01);

3)  подключиться ролью dv_owner и выполнить команду активации компонента:

> SELECT jdv.jdv_activate();
>
> <img src="../docs/assets/images/com18.3.1/jdv/media/image1.png" style="width:0.25138in;height:0.25032in" />При отключенном компоненте нельзя использовать функции расширения.

# <img src="../docs/assets/images/com18.3.1/jdv/media/image1.png" style="width:0.25139in;height:0.25139in" />УДАЛЕНИЕ КОМПОНЕНТА

> Для полного удаления компонента JDV необходимо выполнить следующие действия:

1)  подключиться ролью dv_owner и выполнить команду деактивации компонента:

> SELECT jdv.jdv_deactivate();

2)  подключиться к серверу под суперпользователем и выполнить:

> ALTER ROLE ALL RESET session_preload_libraries;

3)  удалить расширение командой:

> DROP EXTENSION jdv;

4)  удалить роли dv_group, dv_owner, dv_acctmgr и dv_secanalyst:

> DROP ROLE dv_group, dv_owner, dv_acctmgr, dv_secanalyst;

5)  удалить или закомментировать в конфигурационном файле postgresql.conf загрузку компонента JDV:

> \#shared_preload_libraries = jdv
>
> Для удаления компонента JDV недостаточно выполнения команды – DROP EXTENSION "jdv"

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 8%" />
<col style="width: 79%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>SQL</p>
</blockquote></th>
<th style="text-align: right;">–</th>
<th><blockquote>
<p>Structured Query Language — язык структурированных запросов</p>
</blockquote></th>
</tr>
</thead>
<tbody>
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
<p>ЭВМ</p>
</blockquote></td>
<td style="text-align: right;">–</td>
<td><blockquote>
<p>Электронно-вычислительная машина</p>
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
