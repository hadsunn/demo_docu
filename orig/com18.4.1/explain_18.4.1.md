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
<p><strong>Руководство по настройке. Часть 29.</strong></p>
<p><strong>Поддержка мониторинга СУБД в части анализа запросов</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-29</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 51</p>
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

## АННОТАЦИЯ

> В документе приведены сведения, необходимые для установки и эксплуатации компонентов, предназначенных для мониторинга СУБД в части анализа запросов:

- Компонент «pg-explain». Версия компонента – 1.15.2;

- Компонент «pg-explain-db». Версия компонента – 1.15.2;

- Компонент «pg-monitor». Версия компонента – 1.15.2;

- Компонент «pg-monitor-collector». Версия компонента – 1.15.2;

- <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image1.png" style="width:0.25224in;height:0.25208in" />Компонент «pg-monitor-dispatcher». Версия компонента – 1.15.2. Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><blockquote>
<p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 5.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:</p>
</blockquote>
<ul>
<li><p>ОС Windows – «C:\Program Files\GIS\Jatoba\6\bin»;</p></li>
<li><p>ОС Linux – «/usr/jatoba-6/bin».</p></li>
</ul>
<blockquote>
<p>Примеры команд приведены для операционной системы Ubuntu 20.04. При развертывании в ОС, использующих систему управления пакетами RPM, необходимо заменить команды «apt install» на соответствующие команды (dnf/yum).</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Компонент поддерживается только в коммерческой версии СБД «Jatoba»</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image2.png" style="width:0.25208in;height:0.25208in" />Степени важности примечаний, применяемые в документе:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image2.png" style="width:0.25138in;height:0.25101in" /> **Важная информация** – указания, требующие особого внимания

> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image1.png" style="width:0.25in;height:0.24983in" /> **Дополнительная информация** – указания, позволяющие упростить работу с изделием

## СОДЕРЖАНИЕ

## 

1.  [Назначение компонентов 5](#назначение-компонентов)

    1.  [Условия применения 5](#условия-применения)

    2.  [Ограничения по эксплуатации 5](#ограничения-по-эксплуатации)

2.  [Архитектура мониторинга в части анализа запросов 6](#архитектура-мониторинга-в-части-анализа-запросов)

3.  [Установка и настройка целевой СУБД «Jatoba» 7](#установка-и-настройка-целевой-субд-jatoba)

    1.  [Установка расширения auto_explain 7](#установка-расширения-auto_explain)

        1.  [Переменные расширения auto_explain 7](#переменные-расширения-auto_explain)

        2.  [Настройка конфигурационного файла postgresql.conf целевой СУБД 10](#настройка-конфигурационного-файла-postgresql.conf-целевой-субд)

    2.  [Настройка файла pg_hba.conf целевой СУБД 11](#настройка-файла-pg_hba.conf-целевой-субд)

    3.  [Настройка SSH-сервера на целевой СУБД 12](#настройка-ssh-сервера-на-целевой-субд)

        1.  [Установка необходимых пакетов 12](#установка-необходимых-пакетов)

        2.  [Проверка статуса сервера 13](#проверка-статуса-сервера)

        3.  [Разрешение SSH соединения через брандмауэр 14](#разрешение-ssh-соединения-через-брандмауэр)

        4.  [Настройка сервера SSH 14](#настройка-сервера-ssh)

    4.  [Установка программной платформы «Node.js» 16](#установка-программной-платформы-node.js)

4.  [Установка и настройка pg-explain 17](#установка-и-настройка-pg-explain)

    1.  [Предварительные требования к установке 17](#предварительные-требования-к-установке)

    2.  [Установка pg_repack 18](#установка-pg_repack)

    3.  [Установка explain db 18](#установка-explain-db)

    4.  [Установка pg-monitor 22](#установка-pg-monitor)

    5.  [Установка pg-monitor-collector 25](#установка-pg-monitor-collector)

    6.  [Настройка SSH-доступа к узлам 26](#настройка-ssh-доступа-к-узлам)

        1.  [Генерация ключей SSH 26](#генерация-ключей-ssh)

        2.  [Загрузка ключа на сервер 27](#загрузка-ключа-на-сервер)

        3.  [Проверка созданного подключения 28](#проверка-созданного-подключения)

        4.  [Копирование ключа SSH в каталог pg-monitor 29](#копирование-ключа-ssh-в-каталог-pg-monitor)

    7.  [Установка pg-explain 30](#установка-pg-explain)

5.  [Настройка JDS для взаимодействия с сервисами 33](#настройка-jds-для-взаимодействия-с-сервисами)

    1.  [Настройка pg-explain на узле отдельном от узла JDS 33](#настройка-pg-explain-на-узле-отдельном-от-узла-jds)

        1.  [Установка веб-сервера nginx на сервере служебной СУБД pg-explain 34](#установка-веб-сервера-nginx-на-сервере-служебной-субд-pg-explain)

        2.  [Создание сертификата и ключа 35](#создание-сертификата-и-ключа)

        3.  [Создание конфигурации сайта 36](#создание-конфигурации-сайта)

        4.  [Конфигурирование компонента JDS на отдельном узле 38](#конфигурирование-компонента-jds-на-отдельном-узле)

    2.  [Настройка pg-explain на одном узле с JDS 39](#настройка-pg-explain-на-одном-узле-с-jds)

        1.  [Установка компонента JDS 40](#установка-компонента-jds)

        2.  [Веб-сервер nginx 40](#веб-сервер-nginx)

        3.  [Создание сертификата и ключа для pg-explain 40](#создание-сертификата-и-ключа-для-pg-explain)

        4.  [Создание конфигурации сайта 40](#создание-конфигурации-сайта-1)

        5.  [Редактирование параметров компонента JDS 42](#редактирование-параметров-компонента-jds)

6.  [Обновление pg-explain 44](#обновление-pg-explain)

    1.  [Предварительные требования 44](#предварительные-требования)

    2.  [Процесс обновления 44](#процесс-обновления)

7.  [Ошибки 46](#ошибки)

    1.  [Ошибка FATAL: password authentication failed for user "postgres" 46](#ошибка-fatal-password-authentication-failed-for-user-postgres)

    2.  [Ошибка ERROR: invalid locale name: "ru_RU.UTF-8" 46](#ошибка-error-invalid-locale-name-ru_ru.utf-8)

    3.  [Ошибка в журнале pg-explain 47](#_bookmark54)

[Термины и определения 49](#термины-и-определения)

[Перечень сокращений 50](#перечень-сокращений)

## НАЗНАЧЕНИЕ КОМПОНЕНТОВ

> Компонент pg-explain — это инструмент для анализа планов запросов в СУБД. Он позволяет просматривать и анализировать планы запросов, созданные оптимизатором СУБД, и помогает разработчикам и администраторам баз данных понять, как СУБД выполняет запросы.
>
> Компонент pg-explain-db — это инструмент для анализа производительности базы данных СУБД. Он предоставляет информацию о планах выполнения запросов, статистике и других показателях, которые помогают оптимизировать работу с данными.
>
> Компонент pg-monitor — это библиотека для мониторинга событий в базе данных с использованием гибкой системы событий, предоставляемой пакетом pg-promise. Библиотека позволяет отслеживать и регистрировать события, такие как запросы, ошибки и транзакции, а также упрощает логирование событий для вашего приложения.
>
> Компонент pg-monitor-collector — это часть программного обеспечения pgwatch2, которое собирает метрики из настроенных баз данных и сохраняет их в другой базе данных.
>
> Компонент pg-monitor-dispatcher — это прослушиватель для СУБД, который слушает один канал базы данных и выполняет заданную команду при получении уведомления.

### Условия применения

> Компоненты могут использоваться:

- с СУБД «Jatoba» версий 5.x и выше;

- с установленным компонентом в ОС «nodejs» версии 20 и выше;

### Ограничения по эксплуатации

> Ограничений по совместимости с другими компонентами нет. Не поддерживается работа компонента pg-monitor в ОС:

- ОС Альт 10;

- Ubuntu 20.04 и старше.

# АРХИТЕКТУРА МОНИТОРИНГА В ЧАСТИ АНАЛИЗА ЗАПРОСОВ

> В архитектуре мониторинга в части анализа запросов, допустимы две основные конфигурации:
>
> − с установкой pg-explain на одном сервере СУБД «Jatoba» с установленным компонентом JDS (см. п. [5.1](#настройка-pg-explain-на-узле-отдельном-от-узла-jds));

**Целевая СУБД**

**pg_repack**

z

**auto_explain**

**SSH**

**Служебная СУБД**

**explain db**

> **pg-monitor**

**pg-monitor-collector**

**JDS**

**Целевая СУБД**

**SSH**

**HTTPS**

**auto_explain**

**HTTPS**

**pg-explain**

> Рисунок 2.1 – Установка pg-explain и JDS на одном узле
>
> − с установкой pg-explain выделенном сервере СУБД и отдельном сервере СУБД с установленном компонентом JDS (см. п. [5.1](#настройка-pg-explain-на-узле-отдельном-от-узла-jds)).

**Целевая СУБД**

**pg_repack**

**auto_explain**

**SSH**

**Служебная СУБД**

**pg-explain**

**explain db**

**Служебная СУБД JDS**

**pg-monitor**

**pg-monitor-collector**

**JDS**

**Целевая СУБД**

**auto_explain**

**SSH**

**pg-explain**

**HTTPS**

> Рисунок 2.2 – Установка pg-explain и JDS на разных узлах Данные с целевых СУБД собираются в БД pg-monitor.

# УСТАНОВКА И НАСТРОЙКА ЦЕЛЕВОЙ СУБД «JATOBA»

> СУБД «Jatoba» устанавливается в соответствии с документом «Руководство по установке».
>
> Корректная работа pg-explain обеспечивается установкой системной локали
>
> «ru_RU.UTF-8» до развертывания СУБД «Jatoba».
>
> Регистрация событий в СУБД осуществляется компонентами:

- «pgAudit»;

- «auto_explain».

> Компонент «pgAudit» выполняет расширенную регистрацию событий безопасности. Настройка компонента приведена в документе «Защищенная система управления базами данных «Jatoba». Руководство администратора».
>
> Компонент «auto_explain» выполняет протоколирование планов выполнения медленных запросов.

### Установка расширения auto_explain

> Чтобы не загружать компонент в процесс сервера, загрузка выполняется через переменную «shared_preload_libraries» в конфигурационном файле «postgresql.conf», как описано в п. [3.1.2](#настройка-конфигурационного-файла-postgresql.conf-целевой-субд) «[Настройка конфигурационного файла postgresql.conf целевой СУБД](#настройка-конфигурационного-файла-postgresql.conf-целевой-субд)» настоящего документа.
>
> Установка пакета не требуется.

### Переменные расширения auto_explain

> Компонент имеет нижеперечисленные параметры, которые могут устанавливаться в конфигурационном файле «postgresql.conf» или изменяться суперпользователями СУБД «на лету» в рамках своих сеансов.

1.  <span id="_bookmark7" class="anchor"></span>**auto_explain.log_min_duration**

> auto_explain.log_min_duration (integer)
>
> Переменная auto_explain.log_min_duration задаёт время выполнения оператора в миллисекундах, при превышении которого план оператора будет протоколироваться. При
>
> значении равном 0 протоколируются все планы, а при -1 (по умолчанию) протоколирование планов отключается.

2.  <span id="_bookmark8" class="anchor"></span>**auto_explain.log_analyze**

> auto_explain.log_analyze (boolean)
>
> При включении параметра auto_explain.log_analyze в протокол будет записываться вывод команды EXPLAIN ANALYZE, а не EXPLAIN. По умолчанию этот параметр отключен.

3.  <span id="_bookmark9" class="anchor"></span>**auto_explain.log_buffers**

> auto_explain.log_buffers (boolean)
>
> Параметр auto_explain.log_buffers определяет, будет ли при протоколировании плана выполнения выводиться статистика об использовании буферов; он равносилен указанию BUFFERS команды EXPLAIN. Этот параметр действует, только если включён параметр [<u>auto_explain.log_analyze</u>](#_bookmark8). По умолчанию этот параметр отключен.

4.  **auto_explain.log_wal**

> auto_explain.log_wal (boolean)
>
> Параметр auto_explain.log_wal определяет, будет ли при протоколировании плана выполнения выводиться статистика об использовании WAL; он равносилен указанию WAL команды EXPLAIN. Этот параметр действует, только если включён параметр [<u>auto_explain.log_analyze</u>](#_bookmark8). По умолчанию этот параметр отключён.

5.  **auto_explain.log_timing**

> auto_explain.log_timing (boolean)
>
> Параметр auto_explain.log_timing определяет, будет ли при протоколировании плана выполнения выводиться длительность на уровне узлов: он равнозначен указанию TIMING команды EXPLAIN. Установка данного параметра может замедлить запросы в некоторых системах, так что возможно его следует отключать этот параметр, когда нужно знать только количество строк, но не точную длительность каждого узла. Этот параметр действует, только если включён [<u>auto_explain.log_analyze</u>](#_bookmark8). По умолчанию этот параметр отключён.

6.  <span id="_bookmark10" class="anchor"></span>**auto_explain.log_triggers**

> auto_explain.log_triggers (boolean)
>
> При включении параметра auto_explain.log_triggers в протокол будет записываться статистика выполнения триггеров. Этот параметр действует, только если включён параметр [<u>auto_explain.log_analyze</u>](#_bookmark8). По умолчанию этот параметр отключён.

7.  **auto_explain.log_verbose**

> auto_explain.log_verbose (boolean)
>
> Параметр auto_explain.log_verbose определяет, будут ли при протоколировании плана выполнения выводиться подробные сведения; он равнозначен указанию VERBOSE команды EXPLAIN. По умолчанию этот параметр отключён.

8.  **auto_explain.log_settings**

> auto_explain.log_settings (boolean)
>
> Параметр auto_explain.log_settings определяет, будут ли вместе с планами выполнения выводиться изменённые параметры конфигурации. При его включении выводятся только те параметры, которые влияют на планирование запросов и имеют значения, отличающиеся от встроенных. По умолчанию этот параметр отключён. Изменить его могут только суперпользователи.

9.  **auto_explain.log_format**

> auto_explain.log_format (enum)
>
> Параметр auto_explain.log_format выбирает формат вывода для EXPLAIN. Он может принимать значение text, xml, json и yaml. Значение по умолчанию — text. Изменить этот параметр могут только суперпользователи.

10. **auto_explain.log_level**

> auto_explain.log_level (enum)
>
> Параметр auto_explain.log_level выбирает уровень, с которым auto_explain будет выводить в протокол планы запросов. Допустимые значения: DEBUG5, DEBUG4, DEBUG3,
>
> DEBUG2, DEBUG1, INFO, NOTICE, WARNING и LOG. По умолчанию подразумевается LOG. Изменить этот параметр могут только суперпользователи.

11. <span id="_bookmark11" class="anchor"></span>**auto_explain.log_nested_statements**

> auto_explain.log_nested_statements (boolean)
>
> При включении параметра auto_explain.log_nested_statements протоколированию могут подлежать и вложенные операторы (операторы, выполняемые внутри функции). Когда он отключён, протоколируются планы запросов только верхнего уровня. Изменить этот параметр могут только суперпользователи.

12. **auto_explain.sample_rate**

> auto_explain.sample_rate (real)
>
> Параметр auto_explain.sample_rate задаёт для auto_explain процент операторов, которые будут отслеживаться в каждом сеансе. Значение по умолчанию — 1, то есть отслеживаются все запросы. Вложенные операторы отслеживаются совместно — либо все, либо никакой из них. Изменить этот параметр могут только суперпользователи.

### Настройка конфигурационного файла postgresql.conf целевой СУБД

> В разделе «Shared Library Preloading», конфигурационного файла
>
> /var/lib/jatoba/\<ver\>/data/postgresql.conf, для последующей загрузки расширений pgaudit и auto_explain, установить параметры:
>
> shared_preload_libraries = 'pgaudit,auto_explain'
>
> Проверить и установить параметры регистрации событий в СУБД:
>
> \#
>
> \# JATOBA LOGGING PARAMETERS \#
>
> logging_collector = on log_directory = 'log'
>
> log_filename = 'jatoba-%Y-%m-%d\_%H%M%S.log' log_rotation_age = 1d
>
> log_rotation_size = 0
>
> log_truncate_on_rotation = on
>
> log_line_prefix = '%m \[%p\] app=%a host=%h user=%u db=%d ' log_destination = 'stderr,csvlog'
>
> Дополнительно установить параметры:
>
> Для работы компонента «auto_explain» загрузки библиотеки будет достаточно. После применения установленных параметров, для установки компонента «pgaudit»
>
> log_min_duration_statement = 10
>
> [auto_explain.log_min_duration](#_bookmark7) = 10 [auto_explain.log_nested_statements](#_bookmark11) = true [auto_explain.log_analyze](#_bookmark8) = true [auto_explain.log_buffers](#_bookmark9) = true [auto_explain.log_triggers](#_bookmark10) = on track_io_timing = 'on'
>
> потребуется войти в СУБД от имени и с правами пользователя «SUPERUSER», выполнить SQL–команду:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image273.png" style="width:7.09533in;height:1.10437in" />

> CREATE EXTENSION pgaudit;
>
> Рисунок 3.1 – Установка расширения «pgaudit»

### Настройка файла pg_hba.conf целевой СУБД

> На целевой СУБД должно быть разрешено подключение типа «local» роли «postgres» в режиме аутентификации «peer».
>
> В конфигурационный файл /var/lib/jatoba/\<ver\>/data/pg_hba.conf добавить строку:
>
> local all postgres peer
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image274.png" style="width:6.62918in;height:2.89354in" />
>
> Рисунок 3.2 – Строка подключения в конфигурационном файле pg_hba.conf

### Настройка SSH-сервера на целевой СУБД

> Подключение к целевой СУБД службой pg-monitor-collector осуществляется по протоколу SSH. Для этого на целевой СУБД должен быть установлен SSH-сервер.

### Установка необходимых пакетов

> Установка необходимых пакетов выполняется от имени и с правами привилегированного пользователя в терминале ОС.
>
> Первоначально обновляется ОС командой:
>
> sudo apt update && sudo apt upgrade
>
> Пакет, необходимый для запуска SSH-сервера, предоставляется компонентом openssh-server из OpenSSH и устанавливается командой:
>
> sudo apt install openssh-server
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image275.png" style="width:6.69361in;height:2.60521in" />
>
> Рисунок 3.3 – Установка openssh-server

### Проверка статуса сервера

> После завершения загрузки и установки пакета служба SSH должна быть уже запущена. Статус службы проверяется командой:
>
> service ssh status
>
> Также можно использовать команды systemd:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image276.png" style="width:6.68806in;height:2.60521in" />

> sudo systemctl status ssh
>
> Рисунок 3.4 – Вывод статуса службы SSH
>
> В выводе команды статус службы SSH должен быть в состоянии «Active». Если служба не работает, она активируется командой:
>
> sudo systemctl enable --now ssh

### Разрешение SSH соединения через брандмауэр

> В операционных системах Linux поставляется с утилита межсетевого экрана UFW (UncomplicatedFirewall), которая представляет собой интерфейс для утилиты командной строки iptables, который, в свою очередь, управляет сетевыми правилами.
>
> Если брандмауэр активен, он может помешать подключению к SSH-серверу.
>
> Чтобы настроить брандмауэр для разрешения требуемого доступа, необходимо выполнить следующую команду:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image277.png" style="width:6.68141in;height:1.13604in" />

> sudo ufw allow ssh
>
> Рисунок 3.5 – Команда разрешения SSH-соединений Статус UFW можно проверить командой:
>
> sudo ufw status

На данном этапе SSH-сервер запущен и ожидает соединения от клиента.

### Настройка сервера SSH

> Настройки сервера SSH находятся в файле /etc/ssh/sshd_config, в котором требуется установить параметры, приведенные ниже.

### Порт SSH

> По умолчанию SSH работает на порту 22, но такое поведение является небезопасным, поскольку злоумышленник может попробовать выполнить «Bruteforce» атаку для перебора пароля. Порт задается строчкой:
>
> Port 22
>
> Необходимо изменить значение порта на требуемое.

### Протокол SSH

> По умолчанию сервер SSH может работать по двум версиям протокола для совместимости. Чтобы использовать только протокол версии два, необходимо раскомментировать строку и привести ее к такому виду:
>
> Protocol 2

### ROOT доступ

> По умолчанию Root доступ по SSH разрешен, но такое поведение небезопасно, поэтому следует раскомментировать строку:
>
> PermitRootLogin no

### Доступ только определенного пользователя к SSH

> Требуется разрешить доступ к SSH только для определенного пользователя или группы. Для этого необходимо добавить следующие строки:
>
> AllowUsers User1, User2, User3 AllowGroups Group1, Group2, Group3
>
> Здесь User1 и Group1 – пользователь и группа, которым нужно разрешить доступ.
>
> В рассматриваемом примере в ОС сервера целевых СУБД, используются пользователи admin и admin1. Им следует разрешить доступ по SSH, добавив строку:
>
> AllowUsers admin, admin1
>
> Рисунок 3.6 – Строка с именами пользователей которым разрешен доступ по SSH Выполнив конфигурирование SSH сервера, потребуется перезагрузить службу
>
> командами:
>
> \# systemctl stop ssh \# systemctl start ssh \# systemctl status ssh

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image279.png" style="width:6.66644in;height:1.64031in" />

> Рисунок 3.7 – Перезапуск службы SSH

### Установка программной платформы «Node.js»

> Требуется установка программной платформы «Node.js», которая позволяет использовать JavaScript версии 20 и выше.
>
> Установка выполняется нижеописанными командами:
>
> curl -fsSL <https://deb.nodesource.com/setup_20.x> \| sudo bash - apt-get install -y nodejs
>
> nodejs --version

# УСТАНОВКА И НАСТРОЙКА PG-EXPLAIN

### Предварительные требования к установке

> На узлах системы должна быть установлена СУБД «Jatoba» в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по установке».
>
> После установки СУБД обязательно устанавливается пароль для системного пользователя ОС «postgres»:
>
> sudo passwd postgres
>
> А также для пользователя СУБД:
>
> \# su –l postgres \# psql
>
> \# \password
>
> Компонент пользовательского веб-интерфейса для администраторов «Jatoba data safe» (JDS) устанавливается в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe», в зависимости от требуемой архитектуры, описанной в разделе [2](#архитектура-мониторинга-в-части-анализа-запросов) документа.
>
> Установка пакетов, входящих в pg-explain, выполняется из архива JDS.
>
> Для рассматриваемого примера, необходимо создать каталог /usr/share/jds командой:
>
> sudo mkdir /usr/share/jds
>
> С дистрибутивного диска «Disk1» из каталога «Jatoba Data Safe» скопировать файлы и каталог пакета установки в созданный каталог:

- каталог – packages, содержащий пакеты установки;

- каталог – utils, содержащий конфигурационные файлы;

- скрипт – jds.sh.

> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image280.png" style="width:3.47648in;height:1.15281in" />
>
> Рисунок 4.1 – Структура каталогов
>
> В каталоге packages находятся пакеты pg-explain помимо пакета компонента JDS.

### Установка pg_repack

> Компонент pg_repack, требуемый для работы системы, включен в состав СУБД
>
> «Jatoba» в качестве внешней утилиты и расширения, начиная с версии 5.6.1-54937.
>
> Установка компонента осуществляется командой:
>
> apt install jatoba5-pg-repack
>
> На данном шаге расширение в СУБД устанавливать не требуется, т.к. устанавливается последовательно по шагам описанным ниже в п. [4.3](#установка-explain-db).

### Установка explain db

> Перейти в каталог с разархивированными пакетами JDS:
>
> cd /usr/share/jds/packages

Установить пакет pg-explain-db\_\<version\>-\<buildnumber\>\_amd64.deb:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image281.png" style="width:7.10143in;height:1.5525in" />

> apt install ./pg-explain-db_1.5.15-20240216_amd64.deb
>
> Рисунок 4.2 – Установка пакета pg-explain-db Перейти в каталог /usr/local/lib/pg-explain-db:
>
> cd /usr/local/lib/pg-explain-db
>
> Установить права на выполнение:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image282.png" style="width:7.06972in;height:1.5525in" />

chmod

755

install.sh

./scripts/clear_dsk_space.sh

./scripts/create_partitions.sh ./scripts/repack.sh

> Рисунок 4.3 – Команда установки прав на выполнение С помощью текстового редактора открыть файл ./scripts/repack.sh:
>
> nano ./scripts/repack.sh

Исправить строку с указанием установленной версии СУБД «Jatoba»:

> REPACK=/usr/pgsql-14/bin/pg_repack
>
> на строку со следующим содержанием:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image283.png" style="width:7.07959in;height:2.10833in" />

> REPACK=/usr/jatoba-5/bin/pg_repack
>
> Рисунок 4.4 – Содержание файла ./scripts/repack.sh Запустить основной скрипт установки:
>
> ./install.sh
>
> В скрипте потребуется выполнить следующие шаги:

- <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image1.png" style="width:0.25in;height:0.25in" />Указать хост БД:

> Enter database hostname (localhost):

- Указать порт БД:

> Enter database port (5432):

- Указать имя создаваемой БД:

> Enter database name (pg-monitor):

- Ввести имя пользователя, от имени которого будет создана БД:

> Enter username to create database (postgres):

- Ввести пароль пользователя, от имени которого будет создана БД:

> Enter password for user "postgres":

- Ввести имя пользователя БД:

> Enter pg-explain database user (explain):

- Ввести пароль для создаваемого пользователя:

> Enter password for pg-explain user (explain):
>
> При активированной парольной политике компонентом «securityprofile» устанавливаемый пароль должен соответствовать требования безопасности
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image284.png" style="width:6.74319in;height:4.38625in" />
>
> <span id="_bookmark25" class="anchor"></span>Рисунок 4.5 – Выполнение скрипта установки
>
> Подключиться к созданной в процессе установки базе и создать в ней расширение:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image285.png" style="width:6.67805in;height:1.30792in" />

> CREATE EXTENSION pg_repack;
>
> Рисунок 4.6 – SQL-команда создания расширения pg_repack
>
> Если установка пройдет с ошибками, удалить БД pg-monitor (название по умолчанию), исправить ошибки и запустить install.sh снова.

### Установка pg-monitor

> Пакет pg-monitor располагается в каталоге с разархивированными пакетами JDS:
>
> cd /usr/share/jds/packages
>
> Установка пакета pg-monitor\_\<version\>-\<buildnumber\>\_amd64.deb выполняется командой:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image286.png" style="width:6.63404in;height:3.1175in" />

> apt install ./pg-monitor_1.5.6-20240216_amd64.deb
>
> Рисунок 4.7 – Установка пакета pg-monitor Перейти в каталог /usr/local/lib/pg-monitor:
>
> cd /usr/local/lib/pg-monitor
>
> Переименовать файл app.cfg.json.example в файл app.cfg.json с помощью команды:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image287.png" style="width:6.68168in;height:1.59167in" />

> mv app.cfg.json.example app.cfg.json
>
> Рисунок 4.8 – Переименование файла
>
> Создать каталог для журнала аудита компонента:
>
> mkdir -p /var/log/pg-explain/offline
>
> Отредактировать файл app.cfg.json командой:
>
> nano app.cfg.json
>
> Установить требуемые параметры, такие как пароль, база данных, num_workers по числу процессорных ядер и т. д.:
>
> {
>
> "db": {
>
> "host" : "localhost", "port" : 5432, "user": "postgres",
>
> "password": "password", "database": "pg-monitor", "name": "pg-monitor", "timeoutReconnect": 10000
>
> },
>
> "offline": {
>
> "hostname": "pg-explain",
>
> "logdir": "/var/log/pg-explain/offline"
>
> },
>
> "tasktype": "any", "num_workers": 8,
>
> . . .
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image288.png" style="width:6.62675in;height:5.25854in" />
>
> Рисунок 4.9 – Содержание конфигурационного файла app.cfg.json Запустить службу pg-monitor командами в терминале ОС:
>
> \# systemctl start pg-monitor \# systemctl enable pg-monitor \# systemctl status pg-monitor
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image289.png" style="width:6.63623in;height:2.72333in" />
>
> Рисунок 4.10 – Запуск и статус службы «pg-monitor» В веб-браузере проверить состояние службы:
>
> http://\<ip-адрес-сервиса-pg-monitor\>:8000
>
> В рассматриваемом примере адрес будет следующим:
>
> [http://10.116.102.59:8000](http://10.116.102.59:8000/)
>
> Рисунок 4.11 – Веб-интерфейс «pg-monitor»

### Установка pg-monitor-collector

> Служба «pg-monitor-collector» установится автоматически после установки «pg-monitor-collector».
>
> Для полноценного функционирования достаточно добавить ее в автозагрузку ОС и проверить статус командами:
>
> \# systemctl enable pg-monitor-collector \# systemctl status pg-monitor-collector
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image291.png" style="width:6.68586in;height:3.24437in" />
>
> Рисунок 4.12 – Статус службы «pg-monitor-collector»

### Настройка SSH-доступа к узлам

> Мониторинг удаленных узлов по протоколу SSH требуется предварительная настройка беспарольного доступа (по сертификату). Для чего необходимо создать ключи SSH для аутентификации на локальном сервере, при помощи утилиты ssh-keygen, которая входит в набор утилит OpenSSH. По умолчанию она создает пару 2048 битных RSA ключей.

### Генерация ключей SSH

> Генерация ключей SSH выполняется командой:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image292.png" style="width:6.63812in;height:1.03021in" />

> ssh-keygen
>
> Рисунок 4.13 – Команда генерации ключей
>
> Утилита предложит выбрать расположение ключей. По умолчанию ключи располагаются в папке ~/.ssh/.
>
> Секретный ключ будет называться id_rsa, а публичный id_rsa.pub.
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image1.png" style="width:0.25in;height:0.24974in" />В зависимости от версии операционной системы названия файлов могут отличаться
>
> Затем утилита предложит ввести пароль для дополнительного шифрования ключа на диске. Его можно не указывать, нажав «Enter».

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image293.png" style="width:6.63805in;height:1.14667in" />

> Рисунок 4.14 – Шаг ввода пароля для генерируемого ключа Далее утилита сгенерирует ключи SSH.

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image294.png" style="width:6.62066in;height:4.00437in" />

> Рисунок 4.15 – Генерирование ключей SSH

### Загрузка ключа на сервер

> Когда генерация ключей завершена, следует загрузить ключ на сервер целевой СУБД
>
> «Jatoba». Загрузка выполняется утилитой ssh-copy-id. Она входит в пакет программ OpenSSH. Для загрузки ключа необходим пароль доступа к серверу по SSH.
>
> Синтаксис команды:
>
> ssh-copy-id -i ~/.ssh/id_rsa.pub имя_пользователя@ip-сервера
>
> В рассматриваемом примере ключ SSH требуется скопировать на целевую СУБД с IP-10.116.102.56 от пользователя ОС сервера СУБД (см. п. [3.3.4.4](#доступ-только-определенного-пользователя-к-ssh)). Команда копирования будет следующей:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image295.png" style="width:6.7178in;height:3.47094in" />

> ssh-copy-id -i ~/.ssh/id_rsa.pub <admin1@10.116.102.56>
>
> Рисунок 4.16 – Копирование ключа SSH на сервер SSH целевой СУБД

### Проверка созданного подключения

> Проверка созданного подключения выполняется командой с сервера с установленным pg_explain:
>
> \# ssh postgres@ip-сервера \# exit

В рассматриваемом примере команда подключения будет следующей:

> ssh <admin1@10.116.102.56>
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image296.png" style="width:6.68657in;height:3.96031in" />
>
> Рисунок 4.17 – Проверка подключения по SSH к целевой СУБД

### Копирование ключа SSH в каталог pg-monitor

> Скопировать закрытый ключ в каталог pg-monitor/ssh_keys. Файл должен обязательно присутствовать для запуска службы и называться id_rsa. При необходимости файл нужно переименовать:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image297.png" style="width:6.64642in;height:1.28104in" />

> \# cp ~/.ssh/id_rsa /usr/local/lib/pg-monitor/ssh_keys
>
> Рисунок 4.18 – Копирование ключа SSH в каталог pg-monitor Дать пользователю «explain» права на файл командой:
>
> \# chown explain:explain /usr/local/lib/pg-monitor/ssh_keys/id_rsa
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image298.png" style="width:6.66453in;height:1.61312in" />
>
> Рисунок 4.19 – Установка прав Перезапустить службу коллектора:
>
> systemctl restart pg-monitor-collector.service

### Установка pg-explain

> Установить пакет pg-explain\_\<version\>-\<buildnumber\>\_amd64.deb командами:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image299.png" style="width:6.6737in;height:3.92406in" />

> \# cd /usr/share/jds/packages
>
> \# apt install ./pg-explain_1.5.9-20240216_amd64.deb
>
> Рисунок 4.20 – Установка пакета pg-explain Перейти в каталог /usr/local/lib/pg-explain:
>
> cd /usr/local/lib/pg-explain
>
> Переименовать файл app.conf.example:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image300.png" style="width:6.66345in;height:0.99437in" />

> mv app.conf.example app.conf
>
> Рисунок 4.21 – Команда переименования файла
>
> Отредактировать app.conf под требуемые настройки СУБД (БД по умолчанию pg-monitor):
>
> nano app.conf
>
> Параметры используются такие же, как и при установке компонента explain db, как описано в п. [4.3](#установка-explain-db) настоящего документа и показано на рисунке [4.5](#_bookmark25).

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image301.png" style="width:6.63526in;height:1.80062in" />

> Рисунок 4.22 – Содержание файла app.conf Запустить службу pg-explain:
>
> \# systemctl start pg-explain.service \# systemctl enable pg-explain.service \# systemctl status pg-explain.service
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image302.png" style="width:6.69614in;height:1.69125in" />
>
> Рисунок 4.23 – Запуск и вывод статуса службы pg-explain.service В веб-браузере проверить состояние службы:
>
> http://\<ip-адрес-сервиса-pg-explain\>:8080
>
> В рассматриваемом примере адрес сервиса pg-explain будет следующим:
>
> <http://10.116.102.59:8080/>
>
> Рисунок 4.24 – Веб-страница сервиса pg-explain
>
> При ошибке «Слишком много клиентов» в статусе службы увеличить параметр
>
> «max_connections» в файле конфигурационном файле «postgresql.conf» сервера с установленным компонентом «explain».

# НАСТРОЙКА JDS ДЛЯ ВЗАИМОДЕЙСТВИЯ С СЕРВИСАМИ

> Работа компонентов обеспечивается корректно настроенными протоколами, описанными в таблице [5.1](#_bookmark35)
>
> <span id="_bookmark35" class="anchor"></span>Таблица 5.1 – Протоколы взаимодействия компонентов

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 13%" />
<col style="width: 15%" />
<col style="width: 13%" />
<col style="width: 42%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Компонент</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Протокол</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Компонент</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Протокол</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>JDS</p>
</blockquote></td>
<td><blockquote>
<p>http</p>
</blockquote></td>
<td><blockquote>
<p>pg-explain</p>
</blockquote></td>
<td><blockquote>
<p>http</p>
</blockquote></td>
<td><blockquote>
<p>корректная работа</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>JDS</p>
</blockquote></td>
<td><blockquote>
<p>http/https</p>
</blockquote></td>
<td><blockquote>
<p>pg-explain</p>
</blockquote></td>
<td><blockquote>
<p>https</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>корректная работа при наличии у pg-explain валидного сертификата или, если сертификат не валидный (self-signed и т.п.), то после отдельного подтверждения pg-explain в браузере</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>JDS</p>
</blockquote></td>
<td><blockquote>
<p>https</p>
</blockquote></td>
<td><blockquote>
<p>pg-explain</p>
</blockquote></td>
<td><blockquote>
<p>http</p>
</blockquote></td>
<td><blockquote>
<p>данная связка работать не будет из-за ограничений безопасности браузеров</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Поэтому требуется настроить реверс-прокси для перенаправления запросов к pg-explain.

### Настройка pg-explain на узле отдельном от узла JDS

> Компонент JDS имеет функциональную возможность работы без веб-сервера nginx.
>
> Поэтому веб-сервера nginx может быть установлен после.
>
> Установка компонент JDS выполняется с помощью инсталлятора, а веб-сервер nginx с помощью скрипта установки, как описано в документе «Защищенная система управления базами данных «Jatoba». Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe».

**Целевая СУБД**

**pg_repack**

**auto_explain**

**SSH**

**Служебная СУБД**

**pg-explain**

**explain db**

**Служебная СУБД JDS**

**pg-monitor**

**pg-monitor-collector**

**JDS**

**Целевая СУБД**

**auto_explain**

**SSH**

**pg-explain**

**HTTPS**

> До конфигурирования компонентов должны быть выполнены действия, описанные в разделах:

- [3](#установка-и-настройка-целевой-субд-jatoba) «[Установка и настройка целевой СУБД «Jatoba»](#установка-и-настройка-целевой-субд-jatoba);

- [4](#установка-и-настройка-pg-explain) «[Установка и настройка pg-explain](#установка-и-настройка-pg-explain)».

### Установка веб-сервера nginx на сервере служебной СУБД pg-explain

> Установка пакета nginx выполняется из репозитория ОС. Использование скрипта установки nginx.sh, расположенного в каталоге /usr/share/jds/utils, нецелесообразно, т.к. он выполнит конфигурирование веб-сервера для компонента JDS.
>
> Установить nginx:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image357.png" style="width:6.65878in;height:2.46in" />

> apt install -y nginx
>
> Рисунок 5.1 – Установка nginx Проверить статус веб-сервера:
>
> systemctl status nginx

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image358.png" style="width:6.70465in;height:1.3325in" />

> Рисунок 5.2 – Статус службы nginx

### Создание сертификата и ключа

> Создать папку для сертификата и ключа командой:
>
> mkdir /etc/nginx/ssl
>
> Создать сертификат и ключ: 4096

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image359.png" style="width:6.69517in;height:1.16906in" />

openssl req -x509 -nodes -days 3650 -newkey rsa:4096 -keyout

/etc/nginx/ssl/nginx-explain.key explain.crt

-out

/etc/nginx/ssl/nginx-

> Рисунок 5.3 – Команда создания ключа и сертификата
>
> Процесс формирования сертификата потребует ввода значений по параметрам, приведенным в таблице [5.2](#_bookmark39). В этой же таблице приведены значения, которые использовались для формирования примера.
>
> <span id="_bookmark39" class="anchor"></span>Таблица 5.2 – Параметры формирования сертификата

<table>
<colgroup>
<col style="width: 66%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Параметры</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Примерные значения</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Country Name (2 letter code) [AU]</p>
</blockquote></td>
<td><blockquote>
<p>RU</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>State or Province Name (full name) [Some-State]</p>
</blockquote></td>
<td><blockquote>
<p>Leningrad obl</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Locality Name (eg, city) []</p>
</blockquote></td>
<td><blockquote>
<p>Saint Petersburg</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Organization Name (eg, company) [Internet Widgits Pty Ltd]</p>
</blockquote></td>
<td><blockquote>
<p>Datagile</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Organizational Unit Name (eg, section) []</p>
</blockquote></td>
<td><blockquote>
<p>Private</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Common Name (e.g. server FQDN or YOUR name) []</p>
</blockquote></td>
<td><blockquote>
<p>NAME</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Email Address []</p>
</blockquote></td>
<td><blockquote>
<p><a href="mailto:test@datagile.ru">test@datagile.ru</a></p>
</blockquote></td>
</tr>
</tbody>
</table>

> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image360.png" style="width:6.68238in;height:3.24583in" />
>
> Рисунок 5.4 – Вводимые параметры для формирования сертификата

### Создание конфигурации сайта

> Создать файл конфигурации сайта командой:
>
> nano /etc/nginx/conf.d/explain.https.conf
>
> Вставить текст и сохранить:

server {

> charset utf-8;
>
> access_log /var/log/nginx/explain.access.log; error_log /var/log/nginx/explain.error.log;

listen 443 ssl; ssl_certificate ssl_certificate_key

/etc/nginx/ssl/nginx-explain.crt;

/etc/nginx/ssl/nginx-explain.key;

location / {

> proxy_pass [http://localhost:8080](http://localhost:8080/);

}

}

> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image361.png" style="width:6.70227in;height:2.75896in" />
>
> Рисунок 5.5 – Содержание файл конфигурации сайта Перезапустить службу nginx:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image362.png" style="width:6.7271in;height:1.51187in" />

> systemctl restart nginx
>
> Рисунок 5.6 – Перезапуск и вывод статуса службы nginx
>
> Проверить в браузере работу explain по https, дать подтверждение системе безопасности при запросе про недействительный сертификат:
>
> https://\<адрес сервера explain\>
>
> В рассматриваемом примере используется адрес:
>
> [<u>https://localhost:8080/</u>](https://localhost:8080/)
>
> Рисунок 5.7 – Проверка работы сайта

### Конфигурирование компонента JDS на отдельном узле

> Взаимодействие JDS с сервисом pg-explain настраивается в конфигурационном файле компонента JDS appsettings.commercial.json. В свойстве PgExplainConfig.BaseAddress указать URL, по которому доступен https-сервис pg-explain.
>
> Например
>
> Выполнить команду редактирования файла appsettings.commercial.json:
>
> nano /opt/jds/appsettings.commercial.json
>
> Установить строки с синтаксисом:
>
> "PgExplainConfig": {
>
> "BaseAddress": "https://\<адрес сервера explain\>"
>
> Адрес должен быть указан без знака дробной черты (solidus) «/»
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image1.png" style="width:0.25in;height:0.25in" />В рассматриваемом примере один из узлов имеет IP-адрес 10.116.102.59 и строка конфигурационного файла appsettings.commercial.json компонента JDS будет иметь следующий вид:
>
> "PgExplainConfig": {
>
> "BaseAddress": "[https://10.116.102.59](https://10.116.102.59/)"
>
> Рисунок 5.8 – Содержание конфигурационного файла appsettings.commercial.json компонента JDS
>
> Войти в веб-интерфейс компонента JDS. Перейти в подраздел «Анализ запросов». На вкладке «Настройки» нажать кнопку «Добавить». Ввести IP-адрес узла с наблюдаемой СУБД, порт (если он отличается от стандартного 5432) и отметить флагами пункты собираемой статистики и сохранить.
>
> Рисунок 5.9 – Вкладка «Настройки» раздела «Анализ запросов»

### Настройка pg-explain на одном узле с JDS

> Компонент JDS может быть установлен до установки pg-explain. Порядок установки компонент не принципиален. Связь компонентом обеспечивается веб-сервером nginx с конфигурациями под каждый из компонентов.
>
> В силу особенностей конфигурации компонентов потребуется редактировать параметры портов по протоколу HTTPS.

**pg-monitor-collector**

**pg-explain**

**HTTPS**

**auto_explain**

**HTTPS**

**SSH**

**Целевая СУБД**

**JDS**

**Целевая СУБД**

**pg-monitor**

**explain db**

**Служебная СУБД**

**SSH**

**auto_explain**

z

**pg_repack**

> Рисунок 5.10 – Схема взаимодействия компонентов

### Установка компонента JDS

> Компонент пользовательского веб-интерфейса для администраторов «Jatoba data safe» (JDS) устанавливается в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe», в зависимости от требуемой архитектуры, описанной в разделе [2](#архитектура-мониторинга-в-части-анализа-запросов) документа.

### Веб-сервер nginx

> Веб-сервер nginx устанавливается в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe».
>
> Выполнять действия, описанные в п. [5.1.1](#установка-веб-сервера-nginx-на-сервере-служебной-субд-pg-explain) документа, необязательно.

### Создание сертификата и ключа для pg-explain

> Создание сертификата и ключа для соединения по протоколу SSL описано в п. [5.1.2](#создание-сертификата-и-ключа) документа.

### Создание конфигурации сайта

> Отличие выполняемых шагов, описанных в п. [5.1.3](#создание-конфигурации-сайта) документа состоит в том, что вместо порта 443 будет использоваться порт 444 SSL.
>
> Для чего потребуется создать или отредактировать файл конфигурации сайта командой:
>
> nano /etc/nginx/conf.d/explain.https.conf
>
> Вставить текст и сохранить строки:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image413.png" style="width:6.86046in;height:3.02229in" />

server {

> charset utf-8;
>
> access_log /var/log/nginx/explain.access.log; error_log /var/log/nginx/explain.error.log;

listen 444 ssl; ssl_certificate ssl_certificate_key

/etc/nginx/ssl/nginx-explain.crt;

/etc/nginx/ssl/nginx-explain.key;

location / {

> proxy_pass [http://localhost:8080](http://localhost:8080/);

}

}

> Рисунок 5.11 – Содержание файла explain.https.conf Применение параметров обеспечивается перезагрузкой службы nginx:
>
> systemctl restart nginx
>
> Проверить в веб-браузере работу explain по https, дать подтверждение системе безопасности, если спросит про недействительный сертификат.

### Редактирование параметров компонента JDS

> Взаимодействие JDS с сервисом pg-explain настраивается в конфигурационном файле компонента JDS appsettings.commercial.json. В свойстве PgExplainConfig.BaseAddress необходимо указать URL, по которому доступен https-сервис pg-explain.
>
> Выполнить команду редактирования конфигурационного файла компонента JDS appsettings.json, командой:
>
> nano /opt/jds/appsettings.commercial.json
>
> Вставить параметры:
>
> "PgExplainConfig": {
>
> "BaseAddress": "https://\<адрес сервера explain\>:444"
>
> },

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><blockquote>
<p>Адрес должен быть указан без знака дробной черты (solidus) «/»</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><blockquote>
<p>Сервис explain работает на том же хосте, что и JDS, но в свойстве BaseAddress нужно указывать внешний IP-адрес (не localhost), т.к. обращение к pg-explain идет не от JDS, а от веб-браузера пользователя.</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image1.png" style="width:0.25209in;height:0.25208in" /><img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image1.png" style="width:0.25208in;height:0.25208in" />В рассматриваемом примере один из узлов имеет IP-адрес 10.116.102.59 и строка конфигурационного файла appsettings.commercial.json компонента JDS будет иметь следующий вид:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image414.png" style="width:6.64451in;height:0.68083in" />

> "PgExplainConfig": {
>
> "BaseAddress": "[https://10.116.102.59:444](https://10.116.102.59:444/)"
>
> Рисунок 5.12 – Содержание конфигурационного файла приложения JDS appsettings.commercial.json
>
> Сохранить файл и перезапустить службу «jds»
>
> \# systemctl restart jds \# systemctl status jds
>
> Проверить доступность компонента JDS по адресу:
>
> <https://10.116.102.59/>
>
> Войти в веб-интерфейс компонента JDS. Перейти в подраздел «Анализ запросов». На вкладке «Настройки» нажать кнопку «Добавить». Ввести IP-адрес узла с наблюдаемой СУБД, порт (если он отличается от стандартного 5432) и отметить флагами пункты собираемой статистики и сохранить.
>
> После чего отобразится добавленный узел.

# ОБНОВЛЕНИЕ PG-EXPLAIN

### Предварительные требования

> Для выполнения обновления должны быть выполнены следующие требования:

- установлены СУБД Jatoba 6, JDS, explain версии 1.5.6;

- обновление происходит до версии explain 1.6.5;

- команды приведены для ОС Астра 1.7.

### Процесс обновления

> Остановить службы monitor и explain:
>
> systemctl stop pg-monitor && systemctl stop pg-explain
>
> Распаковать новый дистрибутив:

tar

xvf /tmp/

jds-2.7.0-linux-x64-release-deb.tar.gz

-C

/usr/share/

> Распаковать файлы новой версии pg-explain-db:
>
> \# cd /usr/share/jds/packages
>
> \# apt install ./pg-explain-db\*
>
> Перейти в каталог со скриптами установки, задать права:
>
> \# cd /usr/local/lib/pg-explain-db
>
> \# chmod 755 install.sh ./scripts/clear_dsk_space.sh
>
> ./scripts/create_partitions.sh ./scripts/repack.sh
>
> Изменить путь к бинарному файлу repack в конфигурации:
>
> sed -i 's/usr\\pgsql-14\\bin\\/usr\\jatoba-6\\bin\\/g'
>
> ./scripts/repack.sh
>
> Запустить процедуру обновления служебной базы данных:
>
> ./install.sh updatedb
>
> Запустить установку новой версии pg-monitor:
>
> \# cd /usr/share/jds/packages
>
> \# apt install ./pg-monitor_1.6.5-20240427_amd64.deb
>
> Запустить службу и проверить ее статус:
>
> systemctl start pg-monitor && systemctl status pg-monitor
>
> Запустить установку новой версии pg-explain:
>
> apt install ./pg-explain_1.6.2-20240427_amd64.deb
>
> Запустить службу и проверить ее статус
>
> systemctl start pg-explain.service

# ОШИБКИ

### Ошибка FATAL: password authentication failed for user "postgres"

> Ошибка появляется при вводе некорректного пароля привилегированного пользователя СУБД.

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image416.png" style="width:6.63739in;height:3.07271in" />

> Рисунок 7.1 – Ошибка ввода пароля
>
> Необходимо повторно запустить инсталлятор и указать корректный пароль.

### Ошибка ERROR: invalid locale name: "ru_RU.UTF-8"

> Ошибка появляется при отсутствии установленной в ОС локали «ru_RU.UTF-8».

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image417.png" style="width:6.6409in;height:3.07271in" />

> Рисунок 7.2 – Ошибка при неустановленной локали

Необходимо установить системную локаль «ru_RU.UTF-8» командой:

<img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image418.png" style="width:6.23186in;height:3.80531in" />

> dpkg-reconfigure locales
>
> Рисунок 7.3 – Выбор локали в скрипте установки
>
> В случае, если СУБД была установлена без локали «ru_RU.UTF-8» в ОС, то потребуется ее переустановка.

### Ошибка в журнале pg-explain

> Ошибка проявляется в версии pg-explain 1.15.2 при работе на виртуальной машине под управлением Proxmox VE. Причина – использование виртуального процессора по умолчанию (тип **kvm64** или аналогичный), который не поддерживает расширение SIMD (Single Instruction, Multiple Data), необходимое для выполнения WebAssembly-модулей внутри pg-explain.
>
> В файле /var/log/pg-explain/pg-explain.log регистрируется запись вида:

Explainer

worker

218

error:

Error

\[CompileError\]:

WebAssembly.Module(): Wasm SIMD unsupported @+27

> Для исправления ситуации необходимо изменить тип центрального процессора (CPU) виртуальной машины на **host**. Это позволит виртуальной машине использовать все
>
> инструкции физического процессора хоста, включая SIMD.
>
> <img src="./docs/assets/images/com18.4.1/explain_18.4.1/media/image1.png" style="width:0.25in;height:0.25in" />Указанное решение применимо только для сред, где физический процессор хоста действительно поддерживает SIMD. Использование типа **host** повышает производительность, но снижает возможность «живой» миграции ВМ между узлами с разными моделями CPU.

## ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ

> **«/»** – ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как,
>
> «дробная черта» (англ. «solidus»).
>
> **SSH (Secure Shell)** – сетевой протокол прикладного уровня, который позволяет осуществлять удаленное управление ОС и туннелирование TCP-соединений, например, для передачи файлов. Он шифрует весь трафик, включая передаваемые пароли, и допускает выбор различных алгоритмов шифрования. SSH-клиенты и серверы доступны для большинства сетевых ОС.
>
> **Аутентификация «peer»** – режим аутентификации, при использовании которого пользователи автоматически аутентифицируются, если существует соответствующий пользователь СУБД с именем, совпадающим с именем ОС пользователя.
>
> **UFW (Uncomplicated Firewall)** – утилита для конфигурирования межсетевого экрана Netfilter в ОС Linux. Она использует интерфейс командной строки и состоит из небольшого количества простых команд для лёгкого управления межсетевым экраном.
>
> **Iptables** – утилита командной строки, стандартный интерфейс управления межсетевым экраном netfilter для ядер Linux, начиная с версии 2.4. Iptables используется для настройки правил фильтрации пакетов, маршрутизации и преобразования сетевых адресов.
>
> **Bruteforce (брутфорс)** – метод взлома, при котором злоумышленник или тестировщик подбирает данные для входа в систему, используя различные комбинации паролей. Этот метод эффективен для взлома аккаунтов с простыми паролями, но сложен для сложных комбинаций, шифровок и фраз.
>
> **OpenSSH** – набор программ, предоставляющих шифрование сеансов связи по компьютерным сетям с использованием протокола SSH. OpenSSH включает программы для клиента и сервера, а также инструменты для генерации ключей и аутентификации.

## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

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
<th style="text-align: center;">–</th>
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
<td style="text-align: center;">–</td>
<td><blockquote>
<p>База данных</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ОС</p>
</blockquote></td>
<td style="text-align: center;">–</td>
<td><blockquote>
<p>Операционная система</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>СУБД</p>
</blockquote></td>
<td style="text-align: center;">–</td>
<td><blockquote>
<p>Система управления базами данных</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table style="width:100%;">
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
<p>Входящий номер сопроводите льного документа и дата</p>
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
