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
<p><strong>Руководство по настройке. Часть 4.</strong></p>
<p><strong>Инструкция по безопасной настройке кластера на основе компонента «jaDog»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 02-04</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 36</p>
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

# АННОТАЦИЯ

> Настоящий документ является дополнением к существующему документу
>
> «Руководство по безопасности. Часть 27» и описывает рекомендации по безопасной настройке СУБД Jatoba.
>
> Настоящее руководство предназначено для администраторов СУБД, специалистов по информационной безопасности и носит рекомендательный характер.
>
> Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image1.png" style="width:0.25138in;height:0.25005in" /> **Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25in;height:0.25in" /> **Дополнительная информация** – указания, позволяющие упростить работу с изделием
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25in;height:0.25in" /> Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра
>
> 6.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.
>
> Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:

- ОС Windows – «C:\Program Files\GIS\Jatoba\6\bin»;

- ОС Linux – «/usr/jatoba-6/bin».

## <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image1.png" style="width:0.25138in;height:0.25138in" /> Важная информация

> Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!

# СОДЕРЖАНИЕ

1.  [Актуальность версий 4](#актуальность-версий)

2.  [Подключение 6](#подключение)

    1.  [Минимизация количества пользователей/ролей, которым разрешено подключение к БД 6](#минимизация-количества-пользователейролей-которым-разрешено-подключение-к-бд)

    2.  [Минимизация количества узлов/подсетей, с которых разрешено подключение к БД 7](#минимизация-количества-узловподсетей-с-которых-разрешено-подключение-к-бд)

    3.  [Минимизация количества БД, к которым разрешено подключение 7](#минимизация-количества-бд-к-которым-разрешено-подключение)

    4.  [Минимизация количества УЗ, которым разрешено подключение к компоненту jaDog 8](#минимизация-количества-уз-которым-разрешено-подключение-к-компоненту-jadog)

    5.  [Минимизация количества узлов/подсетей, с которых разрешено подключение к компоненту jaDog 9](#минимизация-количества-узловподсетей-с-которых-разрешено-подключение-к-компоненту-jadog)

    6.  [Измените номер порта, используемый Jatoba на узлах кластера, на нестандартный 10](#измените-номер-порта-используемый-jatoba-на-узлах-кластера-на-нестандартный)

    7.  [Измените номера портов, используемые jaDog, на нестандартные 11](#измените-номера-портов-используемые-jadog-на-нестандартные)

3.  [Применение TLS/SSL 13](#применение-tlsssl)

    1.  [Создание CA ключей 13](#создание-ca-ключей)

    2.  [Создание сертификатов сервера и администратора (пользователя) 13](#создание-сертификатов-сервера-и-администратора-пользователя)

        1.  [Создание серверного сертификата 13](#создание-серверного-сертификата)

        2.  [Создание пользовательского сертификата 14](#создание-пользовательского-сертификата)

        3.  [Проверка сертификатов TLS при запуске сервиса jaDog 14](#проверка-сертификатов-tls-при-запуске-сервиса-jadog)

        4.  [Предупреждение об истечении срока действия сертификата 15](#предупреждение-об-истечении-срока-действия-сертификата)

    3.  [Настройка проверки SSL-сертификатов при подключении к узлам кластера 16](#_bookmark17)

    4.  [Настройка проверки SSL-сертификатов при подключении к компоненту jaDog 17](#настройка-проверки-ssl-сертификатов-при-подключении-к-компоненту)

    5.  [Настройка подключения jaDog к СУБД с помощью SSL-сертификатов 18](#_bookmark19)

    6.  [Настройка подключения к REST API с помощью SSL-сертификатов 19](#настройка-подключения-к-rest-api-с-помощью-ssl-сертификатов)

    7.  [Настройка минимальной версии протокола TLS не ниже рекомендованной 20](#_bookmark21)

    8.  [Настройка шаблона файла ответов с применением SSL-сертификатов 21](#настройка-шаблона-файла-ответов-с-применением-ssl-сертификатов)

4.  [Аутентификация 25](#аутентификация)

    1.  [Используйте надёжный метод аутентификации при подключении к узлам кластера 25](#используйте-надёжный-метод-аутентификации-при-подключении-к-узлам-кластера)

    2.  [Используйте надёжный метод аутентификации при подключении к компоненту jaDog 25](#используйте-надёжный-метод-аутентификации-при-подключении-к-компоненту-jadog)

    3.  [Измените пароли всех технических и административных УЗ при переводе системы в эксплуатацию 26](#измените-пароли-всех-технических-и-административных-уз-при-переводе-системы-в-эксплуатацию)

5.  [Журналирование 27](#журналирование)

    1.  [Настройте параметры журналирования компонента jaDog 27](#настройте-параметры-журналирования-компонента-jadog)

    2.  [Настройка журналирования событий ИБ 27](#настройка-журналирования-событий-иб)

6.  [Хеширование и маскирование 29](#хеширование-и-маскирование)

    1.  [Настройте стойкий алгоритм хеширования паролей в БД на узлах кластера 29](#настройте-стойкий-алгоритм-хеширования-паролей-в-бд-на-узлах-кластера)

7.  [Контроль целостности 31](#контроль-целостности)

    1.  [Установка расширения ja_csum и подсчет эталонных контрольных сумм 31](#установка-расширения-ja_csum-и-подсчет-эталонных-контрольных-сумм)

8.  [Резервное копирование 32](#резервное-копирование)

    1.  [Храните резервную копию файла ответов со структурой кластера в удалённом сетевом хранилище 32](#храните-резервную-копию-файла-ответов-со-структурой-кластера-в-удалённом-сетевом-хранилище)

[Термины и определения 33](#термины-и-определения)

[Перечень сокращений 35](#перечень-сокращений)

# АКТУАЛЬНОСТЬ ВЕРСИЙ

> Используйте актуальную версию ПО СУБД «Jatoba» и компонентов, регулярно проверяйте выпуск обновлений.
>
> Чем старше версия используемого программного обеспечения, тем больше времени было у злоумышленников на то, чтобы найти в ней уязвимости и «эксплойты» и, соответственно, тем уязвимее будет информационная система.
>
> Чтобы защитить системы от потенциальных угроз, необходимо своевременно устанавливать обновления безопасности, закрывающие известные уязвимости в программном обеспечении.
>
> Для проверки используемой версии СУБД «Jatoba» можно воспользоваться командой в терминале ОС:

## Пример команды

> /usr/jatoba-\<ver\>/bin/postgres --version
>
> Мажорные версии PostgreSQL и Jatoba соотносятся следующим образом:

- <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25in;height:0.25in" />PostgreSQL 14 - Jatoba 4;

- PostgreSQL 15 - Jatoba 5;

- PostgreSQL 16 - Jatoba 6

- PostgreSQL 18 - Jatoba 18.

> При подключении к СУБД, можно воспользоваться следующей функцией:

## Пример функции

> SELECT jatoba_version();
>
> Для получения версий установленных компонентов необходимо подключиться к БД, в которую они установлены, и выполнить запрос к системному каталогу:

## Пример запроса

> SELECT extname, extversion FROM pg_catalog.pg_extension;
>
> В терминале psql можно воспользоваться метакомандой:

## Пример метакоманды

> \dx
>
> Процедуры обновления СУБД «Jatoba» и компонентов приведены в документе "Руководство по обновлению" или руководствах на компоненты.
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25in;height:0.2491in" />Из соображений требований ИБ начиная с мажорной версии 4 компонента jaDog его процессы в ОС выполняются не от имени УЗ root, а от имени технологической УЗ, от которой запущен сервер СУБД «Jatoba».

# ПОДКЛЮЧЕНИЕ

## Минимизация количества пользователей/ролей, которым разрешено подключение к БД

> Ограничение количества учётных записей, имеющих возможность подключения к СУБД, снижает шансы злоумышленника получить доступ к СУБД.
>
> Возможность подключения к СУБД узла кластера настраивается в конфигурационном файле pg_hba.conf.
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25in;height:0.25in" />Наиболее безопасным вариантом будет указание в файле pg_hba.conf возможности подключения только технической учётной записи для взаимодействия jaDog с СУБД (db_connection_settings:user) и минимально необходимого списка учётных записей администраторов и технических учётных записей приложений.
>
> В процессе развёртывания кластера создаётся (в случае развёртывания с помощью jadog0 и файла ответов - автоматически, в случае ручного развёртывания - при вызове функции grant_jadog_role_to_jadog_user('\<username\>')) групповая роль jadog_repl_acc, являющаяся членом (с параметрами SET и INHERIT) встроенной роли pg_read_all_stats и имеющая атрибуты INHERIT и REPLICATION. Техническая учётная запись для взаимодействия JaDog с СУБД (примерах ниже - jadog_user) включается в роль jadog_repl_acc.
>
> В приведённом ниже примере конфигурации настроена возможность подключения только для технической УЗ JaDog (jadog_user) и УЗ администратора инстанса СУБД (db_admin):
>
> **Пример конфигурационного файла pg_hba.conf**

\# TYPE DATABASE USER

ADDRESS

METHOD

\# "local" is for Unix domain socket connections only

hostssl replication jadog_user

127.0.0.1/32

cert

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 15%" />
<col style="width: 21%" />
<col style="width: 38%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>local</p>
</blockquote></th>
<th style="text-align: center;">[db_name]</th>
<th><blockquote>
<p>db_admin</p>
</blockquote></th>
<th></th>
<th style="text-align: right;">peer</th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>hostssl</p>
</blockquote></td>
<td style="text-align: center;">[db_name]</td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>127.0.0.1/32</p>
</blockquote></td>
<td style="text-align: right;">cert</td>
</tr>
<tr>
<td><blockquote>
<p>hostssl</p>
</blockquote></td>
<td style="text-align: center;">[db_name]</td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.131/32</p>
</blockquote></td>
<td style="text-align: right;">cert</td>
</tr>
</tbody>
</table>

> hostssl replication jadog_user 192.168.239.131/32 cert

## Минимизация количества узлов/подсетей, с которых разрешено подключение к БД

> В дополнение к предыдущему пункту, ограничение в конфигурационном файле pg_hba.conf количества адресов/подсетей, с которых возможно подключение к СУБД на каждом узле кластера, позволяет ещё сильнее уменьшить шансы злоумышленника на проникновение в СУБД. Даже в случае получения данных одной из учётных записей злоумышленнику придётся дополнительно получить контроль над хостом в определённой подсети, чтобы подключиться к СУБД.
>
> По возможности не используйте значение 'all' в поле ADDRESS конфигурационного файла pg_hba.conf, такая настройка позволит злоумышленнику попытаться подключиться с любого хоста, над которым у него есть контроль. Вместо этого лучше использовать отдельные адреса узлов, с которых необходимо подключение к инстансу СУБД, либо ограниченные подсети.
>
> В приведённом ниже примере конфигурации настроена возможность подключения технической УЗ JaDog (jadog_user) только c localhost и с внешнего адреса самого узла.
>
> **Пример конфигурационного файла pg_hba.conf**

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 17%" />
<col style="width: 20%" />
<col style="width: 34%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p># TYPE</p>
</blockquote></th>
<th><blockquote>
<p>DATABASE</p>
</blockquote></th>
<th><blockquote>
<p>USER</p>
</blockquote></th>
<th><blockquote>
<p>ADDRESS</p>
</blockquote></th>
<th><blockquote>
<p>METHOD</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>hostssl</p>
</blockquote></td>
<td><blockquote>
<p>[db_name]</p>
</blockquote></td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>127.0.0.1/32</p>
</blockquote></td>
<td><blockquote>
<p>cert</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>hostssl</p>
</blockquote></td>
<td><blockquote>
<p>[db_name]</p>
</blockquote></td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.131/32</p>
</blockquote></td>
<td><blockquote>
<p>cert</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>hostssl</p>
</blockquote></td>
<td><blockquote>
<p>replication</p>
</blockquote></td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>127.0.0.1/32</p>
</blockquote></td>
<td><blockquote>
<p>cert</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>hostssl</p>
</blockquote></td>
<td><blockquote>
<p>replication</p>
</blockquote></td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.131/32</p>
</blockquote></td>
<td><blockquote>
<p>cert</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Минимизация количества БД, к которым разрешено подключение

> В дополнение к предыдущим пунктам, ограничение в конфигурационном файле pg_hba.conf количества баз данных, к которым возможно подключение, дополнительно снижает шансы злоумышленника на проникновение в СУБД. Даже в случае получения данных одной из учётных записей и обретения контроля над одним из хостов в определённой подсети злоумышленнику придётся подобрать название базы для подключения.
>
> По возможности не используйте значение 'all' в поле DATABASE конфигурационного файла pg_hba.conf, такая настройка позволит злоумышленнику попытаться подключиться данным именем УЗ к любой базе данных.
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25in;height:0.24897in" />Данная рекомендация не относится к техническому пользователю для взаимодействия JaDog с СУБД (db_connection_settings:user), ему как раз нужна возможность подключения ко всем базам данных.
>
> В приведённом ниже примере конфигурации настроена возможность подключения технической УЗ приложения (appuser) только к БД этого приложения (appdb).
>
> **Пример конфигурационного файла pg_hba.conf**

<table>
<colgroup>
<col style="width: 29%" />
<col style="width: 17%" />
<col style="width: 34%" />
<col style="width: 19%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p># TYPE DATABASE</p>
</blockquote></th>
<th><blockquote>
<p>USER</p>
</blockquote></th>
<th><blockquote>
<p>ADDRESS</p>
</blockquote></th>
<th><blockquote>
<p>METHOD</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>hostssl appdb</p>
</blockquote></td>
<td><blockquote>
<p>appuser</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.101/32</p>
</blockquote></td>
<td><blockquote>
<p>cert</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Минимизация количества УЗ, которым разрешено подключение к компоненту jaDog

> Ограничение количества учётных записей, имеющих возможность подключения к компоненту jaDog, снижает шансы злоумышленника получить контроль над кластером. Возможность подключения к компоненту jaDog узла кластера настраивается в конфигурационном файле jadog_hba.cfg (см. документ «Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog»).
>
> В случае использования парольной аутентификации между узлами кластера наиболее безопасным вариантом будет указание в файле конфигурации jadog_hba.cfg возможности подключения только технической учётной записи для взаимодействия с другими jaDog-сервисами (main:interconnect_user) и минимально необходимого списка учётных записей администраторов.
>
> В приведённом ниже примере конфигурации настроена возможность подключения только УЗ для взаимодействия с другими JaDog-сервисами (admin) и УЗ администратора (administrator).
>
> **Пример конфигурационного файла jadog_hba.cfg**

<table>
<colgroup>
<col style="width: 31%" />
<col style="width: 45%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p># USER</p>
</blockquote></th>
<th><blockquote>
<p>ADDRESS</p>
</blockquote></th>
<th><blockquote>
<p>METHOD</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>admin</p>
</blockquote></td>
<td><blockquote>
<p>127.0.0.1/32</p>
</blockquote></td>
<td><blockquote>
<p>sha-256</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>admin</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.0/24</p>
</blockquote></td>
<td><blockquote>
<p>sha-256</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>administrator</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.0/24</p>
</blockquote></td>
<td><blockquote>
<p>sha-256</p>
</blockquote></td>
</tr>
</tbody>
</table>

> В случае же использования аутентификации между узлами кластера с использованием SSL-сертификатов помимо озвученных выше УЗ в файле конфигурации jadog_hba.cfg на каждом узле кластера обязательно должна быть указана возможность подключения для пользователей, имя которых совпадает с полем CN серверных сертификатов остальных узлов кластера (т.к. в таком случае компонент JaDog одного узла кластера при подключении будет представляться другому узлу именем, указанным в поле CN серверного сертификата, и при отсутствии таких записей в jadog_hba.cfg межузловое взаимодействие будет невозможно).
>
> В приведённом ниже примере конфигурации настроена возможность подключения только УЗ для взаимодействия с другими JaDog-сервисами (admin) и CN серверных сертификатов других узлов кластера (jadog-node2 и jadog-node3).
>
> **Пример конфигурационного файла jadog_hba.cfg**

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 50%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p># USER</p>
</blockquote></th>
<th><blockquote>
<p>ADDRESS</p>
</blockquote></th>
<th><blockquote>
<p>METHOD</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>admin</p>
</blockquote></td>
<td><blockquote>
<p>127.0.0.1/32</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>admin</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.0/24</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jadog-node2</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.132/32</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jadog-node3</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.133/32</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
</tbody>
</table>

> По возможности не используйте значение 'all' в поле USER конфигурационного файла jadog_hba.cfg – такая настройка увеличивает для злоумышленника шанс подобрать имя учётной записи методом перебора.

## Минимизация количества узлов/подсетей, с которых разрешено подключение к компоненту jaDog

> В дополнение к предыдущему пункту, ограничение в конфигурационном файле jadog_hba.cfg количества адресов/подсетей, с которых возможно подключение к компоненту
>
> jaDog на каждом узле кластера позволяет ещё сильнее уменьшить шансы злоумышленника на получение контроля над кластером. Даже в случае получения данных одной из учётных записей злоумышленнику придётся дополнительно получить контроль над хостом в определённой подсети, чтобы подключиться к кластеру (см. документ "Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog»" п. 4.2.1.).
>
> По возможности не используйте значение 'all' в поле ADDRESS конфигурационного файла jadog_hba.cfg, такая настройка позволит злоумышленнику попытаться подключиться с любого хоста, над которым у него есть контроль. Вместо этого лучше использовать отдельные адреса узлов, с которых необходимо подключение к компоненту jaDog, либо ограниченные подсети.
>
> В приведённом ниже примере конфигурации настроена возможность подключения УЗ для взаимодействия с другими jaDog-сервисами (admin) только c localhost и подсети кластера, а CN серверных сертификатов других узлов кластера (jadog-node2 и jadog-node3)
>
> \- только с адресов соответственных узлов.
>
> **Пример конфигурационного файла jadog_hba.cfg**

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 50%" />
<col style="width: 17%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p># USER</p>
</blockquote></th>
<th><blockquote>
<p>ADDRESS</p>
</blockquote></th>
<th><blockquote>
<p>METHOD</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>admin</p>
</blockquote></td>
<td><blockquote>
<p>127.0.0.1/32</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>admin</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.0/24</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jadog-node2</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.132/32</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jadog-node3</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.133/32</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Измените номер порта, используемый Jatoba на узлах кластера, на нестандартный

> Изменение стандартного номера порта на случайный усложняет для злоумышленника проведение автоматизированных атак (с помощью ботов или автоматизированных скриптов).
>
> Для изменения номера порта откройте конфигурационный файл postgresql.conf и измените значение параметра port:

## Пример конфигурации

> port = 5432
>
> Измените стандартное значение 5432 на любой другой номер порта, не задействованный на этом сервере.
>
> Значение параметра port также можно изменить при помощи команды ALTER SYSTEM:

## Пример запроса

> ALTER SYSTEM SET port = 5433;
>
> После изменения значения параметра port нужно перезагрузить экземпляр СУБД (т.к. параметр имеет контекст postmaster).
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25in;height:0.24999in" />Обратите внимание на то, что после изменения номера порта в конфигурации СУБД «Jatoba» нужно указать этот порт в параметрах подключения jaDog к СУБД «Jatoba».
>
> Для того, чтобы указать компоненту jaDog на каком порту работает экземпляр Jatoba, можно воспользоваться командой утилиты jadog_ctl:

## Пример команды

> parameter set 'db_connection_settings:port' = 5433

## Измените номера портов, используемые jaDog, на нестандартные

> Аналогично предыдущему пункту, стандартные порты, используемые компонентом jaDog для своей работы, могут быть использованы злоумышленником в автоматизированной атаке, поэтому их также следует изменить на любые не задействованные на данном сервере.
>
> Для изменения портов, используемых jaDog, а также адреса, который прослушивает REST API, можно воспользоваться командами утилиты jadog_ctl:

## Пример команд

> parameter set 'main:port' = 12345
>
> parameter set 'main:user_interface_port' = 54321 parameter set 'rest_api:listen_port' = 54443 parameter set 'rest_api:listen_address' = 127.0.0.1
>
> Также можно ознакомится с параметрами, указанными в секциях main и rest_api в файле конфигурации jadog.yml.

## Пример конфигурации

> main:
>
> port: 12345
>
> user_interface_port: 54321 rest_api:
>
> listen_port: 54443
>
> listen_address: 127.0.0.1

# ПРИМЕНЕНИЕ TLS/SSL

> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image1.png" style="width:0.25138in;height:0.25083in" />Использование самоподписанных сертификатов TLS (SSL) допустимо только при проектировании и отладке кластера. В целях обеспечения информационной безопасности в промышленной эксплуатации допускается использование только сертификатов, выданных удостоверяющим центром (CA).
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25in;height:0.24912in" />В конфигурациях компонентов СУБД «Jatoba» рекомендуется применение сертификатов TLS (SSL) версии 3.
>
> Применение сертификатов TLS (SSL) для компонента «jaDog» приводится в документе «Руководство по безопасности СУБД Jatoba» 643.72410666.00067-08 97 01-27.

## Создание CA ключей

> openssl req -x509 -days 365 -newkey rsa:4096 -sha256 -nodes - keyout ca-key.crt -out ca-cert.crt -subj "/C=RU/ST=SPB/L=Saint-Petersburg /CN=Self-signed CA"

## Создание сертификатов сервера и администратора (пользователя)

> При подготовке сертификатов в качестве значений «CN=» может указываться название сервера (hostname) или имя (логин) администратора, в зависимости от назначения сертификата. В таком случае сертификаты подразделяются на серверные и клиентские.

## Создание серверного сертификата

> Серверный сертификат SSL создается следующим образом:
>
> openssl req -newkey rsa:4096 -nodes -keyout server1-key.crt - out server1-req.crt -subj "/extendedKeyUsage=serverAuth
>
> /subjectAltName=DNS:jatoba-10,DNS:jatoba-11,DNS:localhost,IP:127.0.0.1,IP:192.168.72.10,IP:192.168.72.11
>
> /CN=jatoba-11"
>
> Аналогично сертификаты создаются локально на всех остальных узлах кластера:
>
> openssl req -newkey rsa:4096 -nodes -keyout server3-key.crt - out server3-req.crt -subj "/extendedKeyUsage=serverAuth
>
> /subjectAltName=DNS:jatoba-10,DNS:*DNS_name_server*,DNS:localhost,IP:127.0.0.1, IP:public_address,IP:*IP_address_server* **/CN=server_name_N**"
>
> Подписание выпущенного сертификата для узла кластера:
>
> openssl x509 -req -in server1-req.crt -days 365 -CA root.crt - CAkey ca-key.crt -CAcreateserial -extfile openssl.cnf - extensions v3_req -out **server1**-cert.crt
>
> Аналогично сертификаты подписываются для всех остальных узлов кластера:
>
> openssl x509 -req -in server3-req.crt -days 365 -CA root.crt - CAkey ca-key.crt -CAcreateserial -extfile openssl.cnf - extensions v3_req -out **serverN**-cert.crt
>
> Проверка корректности выпущенного сертификата узла кластера:
>
> openssl x509 -in **server1**-cert.crt -noout -text

## Создание пользовательского сертификата

> Создание сертификата для администратора (пользователя) кластера:
>
> openssl req -newkey rsa:4096 -nodes -keyout user_name-key.crt - out user_name-req.crt -subj "/extendedKeyUsage=clientAuth
>
> **/CN=user_name**"
>
> Подписание выпущенного сертификата для администратора (пользователя) кластера:
>
> openssl x509 -req -in user-req.crt -days 365 -CA ca-cert.crt - CAkey ca-key.crt -CAcreateserial -extfile openssl.cnf - extensions v3_req -out **user_name**-cert.crt
>
> Значение user_name может быть персонифицированной УЗ администратора кластера, либо технологической УЗ (interconnect_user, jadog_user).
>
> Проверка корректности выпущенного сертификата администратора (пользователя) кластера:
>
> openssl x509 -in **user_name**-cert.crt -noout -text

## Проверка сертификатов TLS при запуске сервиса jaDog

> При запуске сервис jaDog проверяет серверный TLS-сертификат. Для успешного запуска необходимо, чтобы имя хоста, с которого запускается сервис, совпадало с одним из допустимых имён в сертификате.
>
> Источники проверки имён в сертификате:

- Common Name (CN) — основное имя хоста;

- Subject Alternative Name (SAN) — список альтернативных имён.

> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image1.png" style="width:0.25139in;height:0.25139in" />Сервис последовательно проверяет оба поля (сначала SAN, затем CN). Таким образом, в случае если хотя бы одно из полей заполнено не корректно служба компонента «jaDog» не будет запущена.
>
> Формат допустимых имён в сертификате:

- имя должно быть полным и явным (FQDN или IP-адрес);

- использование шаблонов с подстановочными знаками (wildcards, например

> \*.example.com) не поддерживается и приведёт к отказу в запуске службы компонента
>
> «jaDog».
>
> Сценарии, приводящие к отказу в запуске службы компонента «jaDog»:

- недействительный или просроченный серверный сертификат;

- имя хоста сервера отсутствует как в поле CN, так и в списке SAN сертификата;

- параметр запуска -h содержит название узла или IP-адрес, которых нет в CN или списке SAN сертификата;

- в списке имён (CN или SAN) сертификата обнаружен шаблон с wildcard (\*).

## Предупреждение об истечении срока действия сертификата

> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image1.png" style="width:0.25139in;height:0.25139in" />Компонент «jaDog» предоставляет администратору СУБД функционал вывода оповещения в случае, если для сертификата SSL (TLS) истек срок годности.
>
> В случаи, если у сертификатов SSL (TLS) истек срок годности, то соединение с компонентом «jaDog» будет активно только до следующей переустановки соединения.
>
> Оповещение выводится при подключении к консольной утилите jadog_ctl в виде сообщений «jaDog certificate has expired. Certificate (путь к сертификату SSL) expires in (количество дней до истечения срока)» в блоке «Health Events» (см. рисунок [3.1](#_bookmark16)).
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image3.png" style="width:7.10375in;height:1.58135in" />
>
> <span id="_bookmark16" class="anchor"></span>Рисунок 3.1 – Сообщения об истечении срока годности сертификатов SSL (TLS) в
>
> утилите jadog_ctl
>
> В функциональный журнал вносится сообщение с текстом «User certificate is expiring»

<img src="../docs/assets/images/com18.3.1/jadog_secur/media/image4.jpeg" style="width:7.12773in;height:0.73104in" />

> Рисунок 3.2 – Сообщения об истечении срока годности сертификатов SSL (TLS) в
>
> функциональном журнале
>
> В журнал информационной безопасности каждые 4 часа вносится сообщение с кодом 104123103 «Истек срок действия сертификата».

<img src="../docs/assets/images/com18.3.1/jadog_secur/media/image5.jpeg" style="width:7.03425in;height:0.69958in" />

> Рисунок 3.3 – Сообщения об истечении срока годности сертификатов SSL (TLS) в журнале информационной безопасности

1.  <span id="_bookmark17" class="anchor"></span>**Настройка проверки SSL-сертификатов при подключении к узлам кластера** Наиболее безопасным методом аутентификации при подключении к узлам кластера является метод с использованием сертификатов SSL, предполагающий проверку подлинности как клиента сервером, так и сервера клиентом, а также задействующий шифрование данных, передаваемых между клиентом и сервером. Применение этого метода

> аутентификации позволяет защититься от атак типа MITM (Man-in-the-Middle).
>
> Таблица 3.1 – Названия сертификатов и места их хранения

<table>
<colgroup>
<col style="width: 22%" />
<col style="width: 77%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Файл</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Путь/настройка конфигурации</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td><blockquote>
<p><strong>jadog.yml – конфигурационный файл</strong></p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>/var/lib/jatoba/ssl_jadog/ - каталог хранения сертификатов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>root.crt</p>
</blockquote></td>
<td><blockquote>
<p>db_connection_settings:ssl_ca_file: /var/lib/jatoba/ssl_jatoba/root.crt</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 22%" />
<col style="width: 77%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Файл</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Путь/настройка конфигурации</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>jadog_service.crt</p>
</blockquote></td>
<td><blockquote>
<p>db_connection_settings:ssl_cert_file: /var/lib/jatoba/ssl_jadog/jadog_service.crt</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jadog_service.key</p>
</blockquote></td>
<td><blockquote>
<p>db_connection_settings:ssl_key_file: /var/lib/jatoba/ssl_jadog/jadog_service.key</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>root.crt</p>
</blockquote></td>
<td><blockquote>
<p>tls:ca_file: /var/lib/jatoba/ssl_jatoba/root.crt</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>interconnect.crt</p>
</blockquote></td>
<td><blockquote>
<p>tls:cert_file: /var/lib/jatoba/ssl_jadog/interconnect.crt</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>interconnect.key</p>
</blockquote></td>
<td><blockquote>
<p>tls:key_file: /var/lib/jatoba/ssl_jadog/interconnect.key</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>root.crt</p>
</blockquote></td>
<td><blockquote>
<p>rest_api:ca_file: /var/lib/jatoba/ssl_jatoba/root.crt</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>rest_api_server.crt</p>
</blockquote></td>
<td><blockquote>
<p>rest_api:cert_file: /var/lib/jatoba/ssl_jadog/server.crt</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>rest_api_server.key</p>
</blockquote></td>
<td><blockquote>
<p>rest_api: key_file: /var/lib/jatoba/ssl_jadog/server.key</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Для примера настройки см. документ "Руководство по безопасности. Часть 27." п. 7.1. При добавлении записей в конфигурационный файл pg_hba.conf на узлах кластера руководствуйтесь принципами, описанными в п. [4.1](#используйте-надёжный-метод-аутентификации-при-подключении-к-узлам-кластера) - [4.3](#измените-пароли-всех-технических-и-административных-уз-при-переводе-системы-в-эксплуатацию) настоящего руководства.
>
> Пример указания сертификатов в конфигурационном файле postgresql.conf.

## Пример конфигурационного файла postgresql.conf

> ssl = on
>
> ssl_ca_file = '/var/lib/jatoba/ssl_jatoba/root.crt' ssl_cert_file = '/var/lib/jatoba/ssl_jatoba/server.crt' ssl_key_file = '/var/lib/jatoba/ssl_jatoba/server.key'
>
> Пример настройки проверки сертификатов при подключении технической УЗ (jadog_user) в конфигурационном файле pg_hba.conf.
>
> **Пример конфигурационного файла pg_hba.conf**

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 15%" />
<col style="width: 15%" />
<col style="width: 25%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p># TYPE</p>
</blockquote></th>
<th><blockquote>
<p>DATABASE</p>
</blockquote></th>
<th><blockquote>
<p>USER</p>
</blockquote></th>
<th><blockquote>
<p>ADDRESS</p>
</blockquote></th>
<th><blockquote>
<p>METHOD</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>hostssl</p>
</blockquote></td>
<td><blockquote>
<p>replication</p>
</blockquote></td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>127.0.0.1/32</p>
</blockquote></td>
<td><blockquote>
<p>cert clientcert=verify-</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>full</p>
</blockquote></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>hostssl</p>
</blockquote></td>
<td><blockquote>
<p>replication</p>
</blockquote></td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.131/32</p>
</blockquote></td>
<td><blockquote>
<p>cert clientcert=verify-</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>full</p>
</blockquote></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

## Настройка проверки SSL-сертификатов при подключении к компоненту

> **jaDog**
>
> Для примера настройки см. документ «Руководство по безопасности. Часть 27.» п. 7.1.
>
> При добавлении записей в конфигурационный файл jadog_hba.cfg на узлах кластера руководствуйтесь принципами, описанными в п. [2.1](#минимизация-количества-пользователейролей-которым-разрешено-подключение-к-бд) - [2.5](#минимизация-количества-узловподсетей-с-которых-разрешено-подключение-к-компоненту-jadog) данного документа.
>
> Для указания сертификатов, используемых jaDog для соединения между узлами, можно воспользоваться командами утилиты jadog_ctl.
>
> parameter set 'tls:tls' = true parameter set 'tls:ca_file' =
>
> /var/lib/jatoba/ssl_jatoba/root.crt
>
> parameter set 'tls:cert_file' =
>
> /var/lib/jatoba/ssl_jadog/interconnect.crt
>
> parameter set 'tls:key_file' =
>
> /var/lib/jatoba/ssl_jadog/interconnect.key
>
> Также можно ознакомится с параметрами, указанными в секции tls в файле конфигурации jadog.yml

## Пример конфигурации

> tls:
>
> tls: true
>
> ca_file: /var/lib/jatoba/ssl_jatoba/root.crt cert_file: /var/lib/jatoba/ssl_jadog/interconnect.crt key_file: /var/lib/jatoba/ssl_jadog/interconnect.key
>
> Пример настройки проверки сертификатов при подключении УЗ для взаимодействия с другими jadog-сервисами (admin) и CN серверных сертификатов других узлов кластера (jadog-node2 и jadog-node3) в конфигурационном файле jadog_hba.cfg.
>
> **Пример конфигурационного файла jadog_hba.cfg**

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 50%" />
<col style="width: 17%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p># USER</p>
</blockquote></th>
<th><blockquote>
<p>ADDRESS</p>
</blockquote></th>
<th><blockquote>
<p>METHOD</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>admin</p>
</blockquote></td>
<td><blockquote>
<p>127.0.0.1/32</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>admin</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.0/24</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jadog-node2</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.132/32</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jadog-node3</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.133/32</p>
</blockquote></td>
<td><blockquote>
<p>ssl</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Настройка подключения jaDog к СУБД с помощью SSL-сертификатов

> Для примера настройки см. документ "Руководство по безопасности. Часть 27." п. 7.2.
>
> Для указания сертификатов, используемых jaDog для подключения к СУБД можно воспользоваться командами утилиты jadog_ctl.
>
> parameter set 'db_connection:auth_method' = ssl
>
> parameter set 'db_connection_settings:ssl_mode' = verify-full parameter set 'db_connection_settings:ssl_ca_file' =
>
> /var/lib/jatoba/ssl_jatoba/root.crt
>
> parameter set 'db_connection_settings:ssl_cert_file' =
>
> /var/lib/jatoba/ssl_jadog/jadog_service.crt
>
> parameter set 'db_connection_settings.ssl_key_file' =
>
> /var/lib/jatoba/ssl_jadog/jadog_service.key

## Пример конфигурации

> db_connection: auth_method: ssl
>
> А также изменить пути до сертификатов, указанные в строке подключения в секции
>
> db_connection_settings: → ssl_mode db_connection_settings: → ssl_ca_file db_connection_settings: → ssl_cert_file db_connection_settings: → ssl_key_file.

## Настройка подключения к REST API с помощью SSL-сертификатов

> Для примера настройки см. документ «Руководство по безопасности. Часть 27.» п.
>
> 7.3.1.
>
> Для указания сертификатов, используемых jaDog при подключении к REST API
>
> можно воспользоваться командами утилиты jadog_ctl.

## Пример команд

> parameter set 'rest_api:ca_file' =
>
> /var/lib/jatoba/ssl_jadog/root.crt
>
> parameter set 'rest_api:cert_file' =
>
> /var/lib/jatoba/ssl_jadog/jadog_user.crt
>
> parameter set 'rest_api:key_file' =
>
> /var/lib/jatoba/ssl_jadog/jadog_user.key
>
> Также можно ознакомится с параметрами, указанными в секции rest_api в файле конфигурации jadog.yml.

## Пример конфигурации

> rest_api:
>
> ca_file: /var/lib/jatoba/ssl_jadog/root.crt cert_file: /var/lib/jatoba/ssl_jadog/server.crt key_file: /var/lib/jatoba/ssl_jadog/server.key

## Настройка минимальной версии протокола TLS не ниже рекомендованной

> Версии протокола TLS ниже чем TLSv1.2 имеют известные уязвимости, считаются устаревшими и не рекомендуются к использованию без крайней на то необходимости.
>
> Для ограничения минимальной версии протокола TLS откройте конфигурационный файл postgresql.conf и измените значение параметра ssl_min_protocol_version.

## Пример конфигурации

> ssl_min_protocol_version = 'TLSv1.2'
>
> Значение параметра ssl_min_protocol_version также можно изменить при помощи команды ALTER SYSTEM.

## Пример запроса

> ALTER SYSTEM SET ssl_min_protocol_version = 'TLSv1.2';
>
> После изменения значения параметра необходимо перечитать конфигурацию инстанса СУБД.

## Пример функции

> SELECT pg_reload_conf();
>
> Также можно перечитать конфигурацию с использованием команды утилиты jadog_ctl.

## Пример команды

> reload dbs node 'node_name'
>
> Есть возможность перечитать конфигурацию инстанса СУБД сразу на всех узлах кластера с использованием команды утилиты jadog_ctl.

## Пример команды

> reload dbs cluster

## Настройка шаблона файла ответов с применением SSL-сертификатов

> При использовании автоматизированного развертывания кластера c применением SSL-сертификатов необходимые параметры указываются непосредственно в шаблоне файла ответов.
>
> Подготовка самоподписанных SSL-сертификатов для проектирования, отладки и непромышленной эксплуатации кластера описана в третьей части документа «Краткое руководство по настройке. Компонент «jaDog» 643.72410666.00067-08 98 02-03.
>
> Шаблоны файлов ответов для автоматизированного развертывания кластера располагаются в директории /usr/jatoba-\<ver\>/share/doc/jadog/clusters_kits, где \<ver\> - номер версии СУБД «Jatoba». Шаблоны с применением SSL-сертификатов содержат в названии суффикс «ssl».
>
> Применение SSL-сертификатов в компоненте «jaDog» подразумевает подготовку трех типов SSL-сертификатов:

- для подключения при инициализации БД (здесь и далее называются postgres), расположение в директории /var/lib/jatoba/ssl_jatoba;

- для подключения к БД (здесь и далее имеют префикс jadog_server), расположение в директории /var/lib/jatoba/ssl_jatoba;

- для межузлового взаимодействия (здесь и далее имеют префикс jadog_user), расположение в директории /var/lib/jatoba/ssl_jadog.

> Для межузлового взаимодействия в компоненте «jaDog» применяется специализированный пользователь с типом «interconnect user». По тексту инструкции для
>
> примера таким пользователем определен jadog_user. Описание процедур создания пользователя jadog_user приводится в первой части документа «Управление режимом работы узлов кластера. Компонент «jaDog» 643.72410666.00067-08 98 02-01.
>
> В секции default_cluster_params:db_init_conn_string параметров первоначальной инициализации СУБД определяются пути к директориям, которые содержат необходимые SSL-сертификаты.
>
> default_cluster_params:
>
> db_init_conn_string: host=127.0.0.1 port=5432 dbname=postgres user=postgres sslmode=verify-full sslrootcert=/var/lib/jatoba/ssl_jatoba/root.crt sslcert=/var/lib/jatoba/ssl_jatoba/postgres.crt sslkey=/var/lib/jatoba/ssl_jatoba/postgres.key
>
> initdb:
>
> initdb_options: "--locale=ru_RU.utf8 --encoding=UTF-8 --set ssl='on'
>
> --set ssl_ca_file='/var/lib/jatoba/ssl_jatoba/root.crt' --set ssl_cert_file='/var/lib/jatoba/ssl_jatoba/jatoba_server.crt' --set ssl_key_file='/var/lib/jatoba/ssl_jatoba/jatoba_server.key'"
>
> В секции pg_hba.conf шаблона необходимо указать параметры подключения
>
> «interconnect user» к базам данных:

pg_hba.conf: \# Параметры будут установлены при формировании кластера в файл pg_hba.conf

> \- local all

\- hostssl all

postgres

all

127.0.0.1/32

trust

cert

clientcert=verify-full

- hostssl all all 192.168.72.0/24 cert clientcert=verify-full

- hostssl replication jadog_user 127.0.0.1/32 cert clientcert=verify-full

\- hostssl

replication jadog_user

192.168.72.0/24

cert

clientcert=verify-full

> В секции cluster_settings:jadog_users для каждого из пользователей необходимо указать метод аутентификации, в данном случае ssl. Например:

<table>
<colgroup>
<col style="width: 1%" />
<col style="width: 32%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="4"><blockquote>
<p>jadog_users:</p>
<p>- name: admin address: all</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
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

> method: ssl
>
> \- name: jadog_user address: all method: ssl
>
> В секции cluster_settings:default_node_params:main в параметре interconnect_user необходимо указать название учетной записи, используемой для межузлового взаимодействия, в данном примере это jadog_user. В данной секции также перечисляются пути к директориям, которые содержат SSL-сертификаты для межузлового взаимодействия. Например:
>
> default_node_params: main:
>
> interconnect_user: name: jadog_user
>
> ca_file: /var/lib/jatoba/ssl_jadog/root.crt cert_file: /var/lib/jatoba/ssl_jadog/jadog_user.crt key_file: /var/lib/jatoba/ssl_jadog/jadog_user.key
>
> В секции cluster_settings:default_node_params:tls необходимо указать пути к директориям, в которых находятся сертификаты SSL:
>
> tls:
>
> tls: true
>
> ca_file: /var/lib/jatoba/ssl_jadog/root.crt
>
> cert_file: /var/lib/jatoba/ssl_jadog/jadog_service.crt key_file: /var/lib/jatoba/ssl_jadog/jadog_service.key
>
> В секции cluster_settings:default_node_params:db_connection в параметре auth_method необходимо указать метод аутентификации в БД, в данном случае ssl:
>
> db_connection:
>
> auth_method: ssl
>
> В секции cluster_settings:default_node_params:db_connection_settings необходимо указать пути к директориям, в которых находятся сертификаты SSL:
>
> db_connection_settings: user: jadog_user
>
> ssl_ca_file: /var/lib/jatoba/ssl_jatoba/root.crt ssl_cert_file: /var/lib/jatoba/ssl_jatoba/jadog_user.crt ssl_key_file: /var/lib/jatoba/ssl_jatoba/jadog_user.key ssl_mode: verify-full

# АУТЕНТИФИКАЦИЯ

## Используйте надёжный метод аутентификации при подключении к узлам кластера

> Рекомендованным методом аутентификации при подключении к СУБД на узлах кластера является аутентификация с проверкой SSL-сертификатов - cert (см. раздел [3](#применение-tlsssl) данного документа). Тем не менее, в случае, если информационная система не поддерживает аутентификацию по сертификату, следует настроить надёжный метод аутентификации в конфигурационном файле pg_hba.conf узлов кластера.
>
> Методы аутентификации trust, password, ident, peer и md5 не являются надёжными и не рекомендуются к использованию в промышленной среде. Вместо них рекомендуется использовать один из следующих методов, поддерживаемых СУБД «Jatoba»: scram-sha-256, gss, sspi, ldap, radius, pam.
>
> В приведённом ниже примере конфигурации настроена возможность подключения технической УЗ (jadog_user) с применением метода аутентификации scram-sha-256.
>
> **Пример конфигурационного файла pg_hba.conf**

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 18%" />
<col style="width: 17%" />
<col style="width: 29%" />
<col style="width: 22%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p># TYPE</p>
</blockquote></th>
<th><blockquote>
<p>DATABASE</p>
</blockquote></th>
<th><blockquote>
<p>USER</p>
</blockquote></th>
<th><blockquote>
<p>ADDRESS</p>
</blockquote></th>
<th><blockquote>
<p>METHOD</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>host</p>
</blockquote></td>
<td><blockquote>
<p>[db_name]</p>
</blockquote></td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>127.0.0.1/32</p>
</blockquote></td>
<td><blockquote>
<p>scram-sha-256</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>host</p>
</blockquote></td>
<td><blockquote>
<p>[db_name]</p>
</blockquote></td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.131/32</p>
</blockquote></td>
<td><blockquote>
<p>scram-sha-256</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>host</p>
</blockquote></td>
<td><blockquote>
<p>replication</p>
</blockquote></td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>127.0.0.1/32</p>
</blockquote></td>
<td><blockquote>
<p>scram-sha-256</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>host</p>
</blockquote></td>
<td><blockquote>
<p>replication</p>
</blockquote></td>
<td><blockquote>
<p>jadog_user</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.131/32</p>
</blockquote></td>
<td><blockquote>
<p>scram-sha-256</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Используйте надёжный метод аутентификации при подключении к компоненту jaDog

> Рекомендованным методом аутентификации при подключении к компоненту jaDog является аутентификация с проверкой SSL-сертификатов - ssl (см. п. [3.4](#настройка-проверки-ssl-сертификатов-при-подключении-к-компоненту) данного документа). В случае, если информационная система не поддерживает аутентификацию по сертификату, следует настроить аутентификацию с помощью метода scram-sha-256.
>
> В приведённом ниже примере конфигурации настроена аутентификация УЗ для взаимодействия с другими jaDog-сервисами (admin) и УЗ администратора (administrator) с применением метода scram-sha-256.
>
> **Пример конфигурационного файла jadog_hba.cfg**

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 45%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p># USER</p>
</blockquote></th>
<th><blockquote>
<p>ADDRESS</p>
</blockquote></th>
<th style="text-align: right;">METHOD</th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>admin</p>
</blockquote></td>
<td><blockquote>
<p>127.0.0.1/32</p>
</blockquote></td>
<td style="text-align: right;">sha-256</td>
</tr>
<tr>
<td><blockquote>
<p>admin</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.0/24</p>
</blockquote></td>
<td style="text-align: right;">sha-256</td>
</tr>
<tr>
<td><blockquote>
<p>administrator</p>
</blockquote></td>
<td><blockquote>
<p>192.168.239.0/24</p>
</blockquote></td>
<td style="text-align: right;">sha-256</td>
</tr>
</tbody>
</table>

## Измените пароли всех технических и административных УЗ при переводе системы в эксплуатацию

> В случае использования парольной аутентификации вместо SSL в процессе настройки компонента jaDog и развёртывания кластера (вручную или с помощью jadog0) в интерфейсе jaDog и файлах ответов указываются пароли технических и административных учетных записей. Эти пароли могут быть скомпрометированы в процессе настройки, поэтому при переводе системы в промышленную эксплуатацию они должны быть изменены.

# ЖУРНАЛИРОВАНИЕ

## Настройте параметры журналирования компонента jaDog

> Помимо журналирования событий инстанса СУБД также нужно настроить журналирование событий компонента jaDog.
>
> Для установки параметров журналирования jaDog можно воспользоваться командами утилиты jadog_ctl.

## Пример команд

> parameter set 'log:path' = /usr/jatoba-\<ver\>/var/log/jadog parameter set 'log:file' = true
>
> parameter set 'log:mode' = 0600
>
> parameter set 'log:file_name' = jadog-%Y-%m-%d\_%H%M%S parameter set 'log:type' = json
>
> parameter set 'log:level' = info
>
> Также можно ознакомится с параметрами, указанными в секции log в файле конфигурации jadog.yml.

## Пример конфигурации

> log:
>
> path: /usr/jatoba-\<ver\>/var/log/jadog file: true
>
> mode: 0600 file_name: jadog-%a level: info
>
> type: json

## Настройка журналирования событий ИБ

> Не менее важно настроить журналирование событий ИБ компонента jaDog.
>
> Для установки параметров журналирования событий ИБ jaDog можно воспользоваться командами утилиты jadog_ctl:

## Пример команд:

> parameter set 'security_log:type' = json parameter set 'security_log:path' = /usr/jatoba-
>
> \<ver\>/var/log/jadog
>
> parameter set 'security_log:file_mode' = 0600
>
> parameter set 'security_log:file_name' = security_jadog-%Y-%m-
>
> %d\_%H%M%S
>
> Также можно ознакомится с параметрами, указанными в секции security_log в файле конфигурации jadog.yml.

## Пример конфигурации:

> security_log:
>
> path: /usr/jatoba-\<ver\>/var/log/jadog file_mode: 0600
>
> file_name: security_jadog-%Y-%m-%d\_%H%M%S type: json

# ХЕШИРОВАНИЕ И МАСКИРОВАНИЕ

## Настройте стойкий алгоритм хеширования паролей в БД на узлах кластера

> В случае использования парольной аутентификации пароль технической УЗ (jadog_user) должен храниться в СУБД в захешированном стойким алгоритмом (с использованием случайной соли) виде. Тогда даже в случае получения злоумышленником хеша пароля использование им радужных таблиц для определения исходного пароля не принесёт результата.
>
> СУБД «Jatoba» поддерживает два алгоритма хеширования: md5 (менее стойкий) и scram-sha-256 (более стойкий).

<table>
<colgroup>
<col style="width: 57%" />
<col style="width: 29%" />
<col style="width: 12%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p>Для установки стойкого алгоритма</p>
</blockquote></th>
<th style="text-align: center;">хеширования паролей</th>
<th style="text-align: right;">откройте</th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>конфигурационный файл postgresql.conf и</p>
</blockquote></td>
<td style="text-align: center;">измените значение</td>
<td style="text-align: right;">параметра</td>
</tr>
<tr>
<td><blockquote>
<p>password_encryption.</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: right;"></td>
</tr>
</tbody>
</table>

## Пример конфигурации

> password_encryption = scram-sha-256
>
> Значение параметра password_encryption также можно изменить при помощи команды ALTER SYSTEM.

## Пример запроса

> ALTER SYSTEM SET password_encryption = 'scram-sha-256';
>
> После изменения значения параметра необходимо перечитать конфигурацию инстанса СУБД.

## Пример функции

> SELECT pg_reload_conf();
>
> Также можно перечитать конфигурацию с использованием команды утилиты jadog_ctl.

## Пример команды

<table>
<colgroup>
<col style="width: 1%" />
<col style="width: 32%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="4"><blockquote>
<p>reload dbs node 'node_name'</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
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

> Есть возможность перечитать конфигурацию инстанса СУБД сразу на всех узлах кластера с использованием команды утилиты jadog_ctl.

## Пример команды

> reload dbs cluster
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25in;height:0.25in" />Обратите внимание на то, что после изменения значения параметра и перечитывания конфигурации следует изменить пароль технической УЗ (jadog_user) для того, чтобы он перехешировался указанным алгоритмом.

# <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25208in;height:0.25208in" />КОНТРОЛЬ ЦЕЛОСТНОСТИ

## Установка расширения ja_csum и подсчет эталонных контрольных сумм

> Для предотвращения несанкционированного изменения шаблонных баз данных, библиотек, бинарных файлов и файлов конфигурации рекомендуется зафиксировать их контрольные суммы и постоянно наблюдать за фактом их изменения. Для реализации этой функции требуется установить расширение ja_csum.
>
> Для примера установки и применения расширения ja_csum см. документ
>
> «Руководство по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum».
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image1.png" style="width:0.25138in;height:0.25076in" />В случае ручной фиксации эталонных контрольных сумм файлов компонента jaDog неизменными в процессе работы компонента файлами считаются:

- библиотеки;

- бинарные файлы;

- файл конфигурации jadog.yml;

- файл конфигурации jadog_hba.cfg;

- файл конфигурации users.yml.

> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25209in;height:0.25208in" />Фиксация контрольных сумм других файлов расширения может привести к непредвиденным блокировкам УЗ в продуктовой среде!

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><blockquote>
<p>Обратите внимание на то, что пакет компонента ja_csum должен быть установлен на всех хостах до конфигурирования кластера. В случае, если на одном узле кластера расширение будет установлено, а на другом - нет, на узле с отсутствующим пакетом расширения демон Jatoba в определённый момент</p>
<p>зафиксирует ошибку и будет остановлен.</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Обратите внимание на то, что для функционирования на всех узлах кластера</p>
<p>файлы эталонных контрольных сумм должны быть скопированы на все узлы кластера.</p>
</blockquote></td>
</tr>
</tbody>
</table>

# РЕЗЕРВНОЕ КОПИРОВАНИЕ

## Храните резервную копию файла ответов со структурой кластера в удалённом сетевом хранилище

> Компонент «jaDog» имеет встроенную возможность выгрузки структуры кластера в файл, который впоследствии может быть использован как файл ответа для восстановления состояния кластера в случае вывода злоумышленником из строя одного или нескольких узлов кластера (см. документ "Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog»" п. 3.7.).
>
> При планировании политики создания и хранения резервных копий рекомендуется использовать для сохранения резервных файлов ответов не локальную директорию сервера СУБД, а удалённое сетевое хранилище, физически расположенное в другом ЦОД. Тогда в случае вывода злоумышленником из строя сегмента серверной инфраструктуры файлы ответов останутся доступны для восстановления.
>
> <img src="../docs/assets/images/com18.3.1/jadog_secur/media/image2.png" style="width:0.25in;height:0.24977in" />Обратите внимание на то, что для функционирования на всех узлах кластера директория, находящаяся на удалённом файловом сервере, должна быть подключена на всех узлах кластера.

# ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ

> **Аутентификационная информация** — информация, используемая при аутентификации субъекта доступа или объекта доступа.
>
> Аутентификация – действия по проверке подлинности субъекта доступа и/или объекта доступа, а также по проверке принадлежности субъекту доступа и/или объекту доступа предъявленного идентификатора доступа и аутентификационной информации (ГОСТ Р 58833-2020).
>
> **Администратор СУБД** – субъект доступа, выполняющий административные функции в СУБД и наделенный правами:

- создавать учетные записи пользователей системы управления базами данных;

- модифицировать, блокировать и удалять учетные записи пользователей системы управления базами данных;

- назначать права доступа пользователям системы управления базами данных к объектам доступа системы управления базами данных;

- управлять конфигурацией системы управления базами данных;

- создавать, подключать базы данных.

> Администратор СУБД имеет атрибут SUPERUSER и/или обладает системной учетной записью «postgres».
>
> **Администратор БД** – субъект доступа, выполняющий административные функции в БД и наделенный правами:

- создавать учетные записи пользователей базы данных;

- модифицировать, блокировать и удалять учетные записи пользователей базы данных;

- управлять конфигурацией базы данных;

- назначать права доступа пользователям базы данных (пользователей информационной системы) к объектам доступа базы данных;

- создавать резервные копии базы данных и восстанавливать базу данных из резервной копии;

- создавать, модифицировать и удалять процедуры (программный код), хранимые в базе данных.

> Администратор БД имеет атрибут CREATEROLE, и возможные атрибуты BYPASSRLS, REPLICATION, а также прочие системные привилегии относительно БД, кроме атрибута CREATEDB.
>
> **Безусловная блокировка пользователя** – это ограничение пользователя в возможности устанавливать новую сессию с СУБД. Безусловная блокировка имеет приоритет над ограничениями, накладываемыми парольными политикам (блокировка вследствие истечения срока действия пароля, временные блокировки при исчерпании попыток ввода пароля и т.п.), применяется независимо от них и не зависит от применяемого метода аутентификации пользователей. Снятие безусловной блокировки не снимает блокировок по парольным политикам и наоборот.
>
> **Завершение сессии пользователя** – принудительное завершение открытой сессии пользователя с БД/СУБД в заданном режиме.
>
> **Пользователь БД** - субъект доступа, имеющий доступ к ограниченному перечню БД и объектов БД. Имеющий следующий набор привилегий:

- создавать и манипулировать объектами доступа БД (таблица, запись или столбец, поле, представление и иные объекты доступа);

- выполнять процедуры (программный код), хранимые в БД. Пользователь БД имеет обязательный атрибут LOGIN.

> **Пользователь СУБД** – см. «Пользователь БД». Для СУБД эти понятия идентичны. СУБД не разграничивает пользователей по отдельным БД. Все пользователи общие, доступ к отдельным БД определяется настройками доступа.
>
> **Роль** – субъект доступа в БД/СУБД, наделенный определенным набором привилегий (чаще всего употребляется как обобщение группы пользователей для выполнения определенного набора действий в БД/СУБД).

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 7%" />
<col style="width: 80%" />
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
<p>КЦ</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Контроль целостности</p>
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
<tr>
<td><blockquote>
<p>ФСТЭК</p>
<p>России</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
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
