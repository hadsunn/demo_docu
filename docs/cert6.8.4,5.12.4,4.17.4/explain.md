**АННОТАЦИЯ**

В документе приведены сведения, необходимые для установки и эксплуатации компонентов, предназначенных для мониторинга СУБД в части анализа запросов:

- 
- 
- 
- 
- 

Компонент «pg-explain». Версия компонента – 1.6.2;Компонент «pg-explain-db». Версия компонента – 1.6;Компонент «pg-monitor». Версия компонента – 1.6.5;Компонент «pg-monitor-collector». Версия компонента – 1.6.5;Компонент «pg-monitor-dispatcher». Версия компонента – 1.6.5.Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th style="text-align: left;"><p>Все примеры в данном документе приведены для СУБД «Jatoba» версии<br />
ядра 5.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:</p>
<ul>
<li></li>
<li></li>
</ul>
<p>ОС Windows – «C:\Program Files\GIS\Jatoba\6\bin»;ОС Linux – «/usr/jatoba-6/bin».Примеры команд приведены для операционной системы Ubuntu 20.04. При развертывании в ОС, использующих систему управления пакетами RPM, необходимо заменить команды «apt install» на соответствующие команды (dnf/yum).</p></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image2.png" style="width:0.25139in;height:0.25139in" /></td>
<td style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></td>
</tr>
</tbody>
</table>

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image2.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image1.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

## Назначение компонента

Компонент pg-explain — это инструмент для анализа планов запросов в СУБД. Он позволяет просматривать и анализировать планы запросов, созданные оптимизатором СУБД, и помогает разработчикам и администраторам баз данных понять, как СУБД выполняет запросы.

Компонент pg-explain-db — это инструмент для анализа производительности базы данных СУБД. Он предоставляет информацию о планах выполнения запросов, статистике и других показателях, которые помогают оптимизировать работу с данными.

Компонент pg-monitor — это библиотека для мониторинга событий в базе данных с использованием гибкой системы событий, предоставляемой пакетом pg-promise. Библиотека позволяет отслеживать и регистрировать события, такие как запросы, ошибки и транзакции, а также упрощает логирование событий для вашего приложения.

Компонент pg-monitor-collector — это часть программного обеспечения pgwatch2, которое собирает метрики из настроенных баз данных и сохраняет их в другой базе данных.

Компонент pg-monitor-dispatcher — это прослушиватель для СУБД, который слушает один канал базы данных и выполняет заданную команду при получении уведомления.

### Условия применения

Компоненты могут использоваться:

- 
- 
- 

с СУБД «Jatoba» версий 5.x и выше; с установленным компонентом в ОС «nodejs» версии 20 и выше;под управлением операционных систем GNU/Linux приведенных в таблице Таблица 1.1.Таблица 1.1 – Поддерживаемые ОС

| **№** | **Наименование ОС** | **Сертификат ФСТЭК** |  |
|:--:|:---|:--:|:--:|
|  |  | **№ серт.** | **Дата выдачи** |
| 1 | Astra Linux 1.7 Special Edition Смоленск (x86-64) | 2557 | 30.01.2012 |
| 2 | Astra Linux 1.8 (x86-64) |  |  |
| 3 | Альт 8 СП | 3866 | 10.08.2018 |
| 4 | Альт 10 СП | 3866 | 10.08.2018 |
| 5 | ОСНОВА2 | 20.10.5 | 31.03.2021 |
| 6 | РЕД ОС 7.3 Муром | 4060 | 12.01.2019 |

### Ограничения по эксплуатации

Ограничений по совместимости с другими компонентами нет.

## Архитектура мониторинга в части анализа запросов

В архитектуре мониторинга в части анализа запросов, допустимы две основные конфигурации:

- 

с установкой pg-explain на одном сервере СУБД «Jatoba» с установленным компонентом JDS (см. п. 5.1);![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image3.png)

Рисунок 2.1 – Установка pg-explain и JDS на одном узле

- 

с установкой pg-explain выделенном сервере СУБД и отдельном сервере СУБД с установленном компонентом JDS (см. п. 5.1).![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image4.png)

Рисунок 2.2 – Установка pg-explain и JDS на разных узлах

Данные с целевых СУБД собираются в БД pg-monitor.

## Установка и настройка целевой СУБД «Jatoba»

СУБД «Jatoba» устанавливается в соответствии с документом «Руководство по установке».

Корректная работа pg-explain обеспечивается установкой системной локали «ru_RU.UTF-8» до развертывания СУБД «Jatoba».

Регистрация событий в СУБД осуществляется компонентами:

- 
- 

«pgAudit»;«auto_explain».Компонент «pgAudit» выполняет расширенную регистрацию событий безопасности. Настройка компонента приведена в документе «Защищенная система управления базами данных «Jatoba». Руководство администратора».

Компонент «auto_explain» выполняет протоколирование планов выполнения медленных запросов.

### Установка расширения auto_explain

Чтобы не загружать компонент в процесс сервера, загрузка выполняется через переменную «shared_preload_libraries» в конфигурационном файле «postgresql.conf», как описано в п. 3.1.2 «Настройка конфигурационного файла postgresql.conf целевой СУБД» настоящего документа.

Установка пакета не требуется.

#### Переменные расширения auto_explain

Компонент имеет нижеперечисленные параметры, которые могут устанавливаться в конфигурационном файле «postgresql.conf» или изменяться суперпользователями СУБД «на лету» в рамках своих сеансов.

##### auto_explain.log_min_duration

> auto_explain.log_min_duration (integer)

Переменная auto_explain.log_min_duration задаёт время выполнения оператора в миллисекундах, при превышении которого план оператора будет протоколироваться. При значении равном 0 протоколируются все планы, а при -1 (по умолчанию) протоколирование планов отключается.

##### auto_explain.log_analyze

> auto_explain.log_analyze (boolean)

При включении параметра auto_explain.log_analyze в протокол будет записываться вывод команды EXPLAIN ANALYZE, а не EXPLAIN. По умолчанию этот параметр отключен.

##### auto_explain.log_buffers

> auto_explain.log_buffers (boolean)

Параметр auto_explain.log_buffers определяет, будет ли при протоколировании плана выполнения выводиться статистика об использовании буферов; он равносилен указанию BUFFERS команды EXPLAIN. Этот параметр действует, только если включён параметр [auto_explain.log_analyze](#auto_explain.log_analyze). По умолчанию этот параметр отключен.

##### auto_explain.log_wal

> auto_explain.log_wal (boolean)

Параметр auto_explain.log_wal определяет, будет ли при протоколировании плана выполнения выводиться статистика об использовании WAL; он равносилен указанию WAL команды EXPLAIN. Этот параметр действует, только если включён параметр [auto_explain.log_analyze](#auto_explain.log_analyze). По умолчанию этот параметр отключён.

##### auto_explain.log_timing

> auto_explain.log_timing (boolean)

Параметр auto_explain.log_timing определяет, будет ли при протоколировании плана выполнения выводиться длительность на уровне узлов: он равнозначен указанию TIMING команды EXPLAIN. Установка данного параметра может замедлить запросы в некоторых системах, так что возможно его следует отключать этот параметр, когда нужно знать только количество строк, но не точную длительность каждого узла. Этот параметр действует, только если включён [auto_explain.log_analyze](#auto_explain.log_analyze). По умолчанию этот параметр отключён.

##### auto_explain.log_triggers

> auto_explain.log_triggers (boolean)

При включении параметра auto_explain.log_triggers в протокол будет записываться статистика выполнения триггеров. Этот параметр действует, только если включён параметр [auto_explain.log_analyze](#auto_explain.log_analyze). По умолчанию этот параметр отключён.

##### auto_explain.log_verbose

> auto_explain.log_verbose (boolean)

Параметр auto_explain.log_verbose определяет, будут ли при протоколировании плана выполнения выводиться подробные сведения; он равнозначен указанию VERBOSE команды EXPLAIN. По умолчанию этот параметр отключён.

##### auto_explain.log_settings

> auto_explain.log_settings (boolean)

Параметр auto_explain.log_settings определяет, будут ли вместе с планами выполнения выводиться изменённые параметры конфигурации. При его включении выводятся только те параметры, которые влияют на планирование запросов и имеют значения, отличающиеся от встроенных. По умолчанию этот параметр отключён. Изменить его могут только суперпользователи.

##### auto_explain.log_format

> auto_explain.log_format (enum)

Параметр auto_explain.log_format выбирает формат вывода для EXPLAIN. Он может принимать значение text, xml, json и yaml. Значение по умолчанию — text. Изменить этот параметр могут только суперпользователи.

##### auto_explain.log_level

> auto_explain.log_level (enum)

Параметр auto_explain.log_level выбирает уровень, с которым auto_explain будет выводить в протокол планы запросов. Допустимые значения: DEBUG5, DEBUG4, DEBUG3, DEBUG2, DEBUG1, INFO, NOTICE, WARNING и LOG. По умолчанию подразумевается LOG. Изменить этот параметр могут только суперпользователи.

##### auto_explain.log_nested_statements

> auto_explain.log_nested_statements (boolean)

При включении параметра auto_explain.log_nested_statements протоколированию могут подлежать и вложенные операторы (операторы, выполняемые внутри функции). Когда он отключён, протоколируются планы запросов только верхнего уровня. Изменить этот параметр могут только суперпользователи.

##### auto_explain.sample_rate

> auto_explain.sample_rate (real)

Параметр auto_explain.sample_rate задаёт для auto_explain процент операторов, которые будут отслеживаться в каждом сеансе. Значение по умолчанию — 1, то есть отслеживаются все запросы. Вложенные операторы отслеживаются совместно — либо все, либо никакой из них. Изменить этот параметр могут только суперпользователи.

#### Настройка конфигурационного файла postgresql.conf целевой СУБД

В разделе «Shared Library Preloading», конфигурационного файла /var/lib/jatoba/<ver>/data/postgresql.conf, для последующей загрузки расширений pgaudit и auto_explain, установить параметры:

> shared_preload_libraries = 'pgaudit,auto_explain'

Проверить и установить параметры регистрации событий в СУБД:

> \#-------------------------------------------------------------
>
```
# JATOBA LOGGING PARAMETERS
```
>
> \#--------------------------------------------------------------
>
> logging_collector = on
>
> log_directory = 'log'
>
> log_filename = 'jatoba-%Y-%m-%d_%H%M%S.log'
>
> log_rotation_age = 1d
>
> log_rotation_size = 0
>
> log_truncate_on_rotation = on
>
> log_line_prefix = '%m \[%p\] app=%a host=%h user=%u db=%d '
>
> log_destination = 'stderr,csvlog'

Дополнительно установить параметры:

> log_min_duration_statement = 10
>
> [auto_explain.log_min_duration](#auto_explain.log_min_duration) = 10
>
> [auto_explain.log_nested_statements](#auto_explain.log_nested_statements) = true
>
> [auto_explain.log_analyze](#auto_explain.log_analyze) = true
>
> [auto_explain.log_buffers](#auto_explain.log_buffers) = true
>
> [auto_explain.log_triggers](#auto_explain.log_triggers) = on
>
> track_io_timing = 'on'

Для работы компонента «auto_explain» загрузки библиотеки будет достаточно.

После применения установленных параметров, для установки компонента «pgaudit» потребуется войти в СУБД от имени и с правами пользователя «SUPERUSER», выполнить SQL–команду:

> CREATE EXTENSION pgaudit;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image5.png" style="width:7.08955in;height:1.10348in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-04-17 05-58-00.png" />

Рисунок 3.1 – Установка расширения «pgaudit»

### Настройка файла pg_hba.conf целевой СУБД

На целевой СУБД должно быть разрешено подключение типа «local» роли «postgres» в режиме аутентификации «peer».

В конфигурационный файл /var/lib/jatoba/<ver>/data/pg_hba.conf добавить строку:

> local all postgres peer

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image6.png" style="width:6.66234in;height:2.90833in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-22 14-03-19.png" />

Рисунок 3.2 – Строка подключения в конфигурационном файле pg_hba.conf

### Настройка SSH-сервера на целевой СУБД

Подключение к целевой СУБД службой pg-monitor-collector осуществляется по протоколу SSH. Для этого на целевой СУБД должен быть установлен SSH-сервер.

#### Установка необходимых пакетов

Установка необходимых пакетов выполняется от имени и с правами привилегированного пользователя в терминале ОС.

Первоначально обновляется ОС командой:

> sudo apt update && sudo apt upgrade

Пакет, необходимый для запуска SSH-сервера, предоставляется компонентом openssh-server из OpenSSH и устанавливается командой:

> sudo apt install openssh-server

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image7.png" style="width:6.68831in;height:2.60346in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-22 15-13-51.png" />

Рисунок 3.3 – Установка openssh-server

#### Проверка статуса сервера

После завершения загрузки и установки пакета служба SSH должна быть уже запущена. Статус службы проверяется командой:

> service ssh status

Также можно использовать команды systemd:

> sudo systemctl status ssh

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image8.png" style="width:6.68182in;height:2.60278in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-22 15-16-33.png" />

Рисунок 3.4 – Вывод статуса службы SSH

В выводе команды статус службы SSH должен быть в состоянии «Active».

Если служба не работает, она активируется командой:

> sudo systemctl enable --now ssh

#### Разрешение SSH соединения через брандмауэр

В операционных системах Linux поставляется с утилита межсетевого экрана UFW (UncomplicatedFirewall), которая представляет собой интерфейс для утилиты командной строки iptables, который, в свою очередь, управляет сетевыми правилами.

Если брандмауэр активен, он может помешать подключению к SSH-серверу.

Чтобы настроить брандмауэр для разрешения требуемого доступа, необходимо выполнить следующую команду:

> sudo ufw allow ssh

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image9.png" style="width:6.68182in;height:1.13611in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-04-22 15-19-58.png" />

Рисунок 3.5 – Команда разрешения SSH-соединений

Статус UFW можно проверить командой:

> sudo ufw status

На данном этапе SSH-сервер запущен и ожидает соединения от клиента.

#### Настройка сервера SSH

Настройки сервера SSH находятся в файле /etc/ssh/sshd_config, в котором требуется установить параметры, приведенные ниже.

##### Порт SSH

По умолчанию SSH работает на порту 22, но такое поведение является небезопасным, поскольку злоумышленник может попробовать выполнить «Bruteforce» атаку для перебора пароля. Порт задается строчкой:

> Port 22

Необходимо изменить значение порта на требуемое.

##### Протокол SSH

По умолчанию сервер SSH может работать по двум версиям протокола для совместимости. Чтобы использовать только протокол версии два, необходимо раскомментировать строку и привести ее к такому виду:

> Protocol 2

##### ROOT доступ

По умолчанию Root доступ по SSH разрешен, но такое поведение небезопасно, поэтому следует раскомментировать строку:

> PermitRootLogin no

##### Доступ только определенного пользователя к SSH

Требуется разрешить доступ к SSH только для определенного пользователя или группы. Для этого необходимо добавить следующие строки:

> AllowUsers User1, User2, User3
>
> AllowGroups Group1, Group2, Group3

Здесь User1 и Group1 – пользователь и группа, которым нужно разрешить доступ.

В рассматриваемом примере в ОС сервера целевых СУБД, используются пользователи admin и admin1. Им следует разрешить доступ по SSH, добавив строку:

> AllowUsers admin, admin1

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image10.png" style="width:6.73377in;height:1.25278in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-04-23 15-22-13.png" />

Рисунок 3.6 – Строка с именами пользователей которым разрешен доступ по SSH

Выполнив конфигурирование SSH сервера, потребуется перезагрузить службу командами:

```
# systemctl stop ssh
```
>
```
# systemctl start ssh
```
>
```
# systemctl status ssh
```

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image11.png" style="width:6.64935in;height:1.63611in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-04-23 15-33-44.png" />

Рисунок 3.7 – Перезапуск службы SSH

## Установка и настройка pg-explain

### Предварительные требования к установке

На узлах системы должна быть установлена СУБД «Jatoba» в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по установке».

После установки СУБД обязательно устанавливается пароль для системного пользователя ОС «postgres»:

> sudo passwd postgres

А также для пользователя СУБД:

```
# su –l postgres
```
>
```
# psql
```
>
```
# \password
```

Компонент пользовательского веб-интерфейса для администраторов «Jatoba data safe» (JDS) устанавливается в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe», в зависимости от требуемой архитектуры, описанной в разделе 2 документа.

Установка пакетов, входящих в pg-explain, выполняется из архива JDS.

Для рассматриваемого примера, необходимо создать каталог /usr/share/jds командой:

> sudo mkdir /usr/share/jds

С дистрибутивного диска «Disk1» из каталога «Jatoba Data Safe» скопировать файлы и каталог пакета установки в созданный каталог:

- 
- 
- 

каталог – packages, содержащий пакеты установки;каталог – utils, содержащий конфигурационные файлы;скрипт – jds.sh.<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image12.png" style="width:3.47986in;height:1.15254in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\1ё23,\Screenshot from 2022-12-13 23-12-21.png" />

Рисунок 4.1 – Структура каталогов

В каталоге packages находятся пакеты pg-explain помимо пакета компонента JDS.

### Установка pg_repack

Компонент pg_repack, требуемый для работы системы, включен в состав СУБД «Jatoba» в качестве внешней утилиты и расширения, начиная с версии 5.6.1-54937.

Установка компонента осуществляется командой:

> apt install jatoba5-pg-repack

На данном шаге расширение в СУБД устанавливать не требуется, т.к. устанавливается последовательно по шагам описанным ниже в п. 4.3.

### Установка explain db

Перейти в каталог с разархивированными пакетами JDS:

> cd /usr/share/jds/packages

Установить пакет pg-explain-db_\<version\>-\<buildnumber\>_amd64.deb:

> apt install ./pg-explain-db_1.5.15-20240216_amd64.deb

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image13.png" style="width:7.08209in;height:1.54827in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-16 14-02-27.png" />

Рисунок 4.2 – Установка пакета pg-explain-db

Перейти в каталог /usr/local/lib/pg-explain-db:

> cd /usr/local/lib/pg-explain-db

Установить права на выполнение:

> chmod 755 install.sh ./scripts/clear_dsk_space.sh ./scripts/create_partitions.sh ./scripts/repack.sh

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image14.png" style="width:7.06853in;height:1.55224in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-16 14-05-27.png" />

Рисунок 4.3 – Команда установки прав на выполнение

С помощью текстового редактора открыть файл ./scripts/repack.sh:

> nano ./scripts/repack.sh

Исправить строку с указанием установленной версии СУБД «Jatoba»:

> REPACK=/usr/pgsql-14/bin/pg_repack

на строку со следующим содержанием:

> REPACK=/usr/jatoba-5/bin/pg_repack

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image15.png" style="width:7.11676in;height:2.1194in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-16 14-07-58.png" />

Рисунок 4.4 – Содержание файла ./scripts/repack.sh

Запустить основной скрипт установки:

> ./install.sh

В скрипте потребуется выполнить следующие шаги:

- 

> Указать хост БД:Enter database hostname (localhost):

- 

> Указать порт БД:Enter database port (5432):

- 

> Указать имя создаваемой БД:Enter database name (pg-monitor):

- 

> Ввести имя пользователя, от имени которого будет создана БД:Enter username to create database (postgres):

- 

> Ввести пароль пользователя, от имени которого будет создана БД:Enter password for user "postgres":

- 

> Ввести имя пользователя БД:Enter pg-explain database user (explain):

- 

> Ввести пароль для создаваемого пользователя:Enter password for pg-explain user (explain):

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image1.png" style="width:0.25in;height:0.25in" /> | При активированной парольной политике компонентом «securityprofile» устанавливаемый пароль должен соответствовать требования безопасности |
|----|----|

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image16.png" style="width:6.70833in;height:4.36389in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-17 08-52-43.png" />

Рисунок 4.5 – Выполнение скрипта установки

Подключиться к созданной в процессе установки базе и создать в ней расширение:

> CREATE EXTENSION pg_repack;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image17.png" style="width:6.69792in;height:1.31181in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-17 12-54-18.png" />

Рисунок 4.6 – SQL-команда создания расширения pg_repack

Если установка пройдет с ошибками, удалить БД pg-monitor (название по умолчанию), исправить ошибки и запустить install.sh снова.

### Установка pg-monitor

Пакет pg-monitor располагается в каталоге с разархивированными пакетами JDS:

> cd /usr/share/jds/packages

Установка пакета pg-monitor_\<version\>-\<buildnumber\>_amd64.deb выполняется командой:

> apt install ./pg-monitor_1.5.6-20240216_amd64.deb

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image18.png" style="width:6.60417in;height:3.10347in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-17 15-15-49.png" />

Рисунок 4.7 – Установка пакета pg-monitor

Перейти в каталог /usr/local/lib/pg-monitor:

> cd /usr/local/lib/pg-monitor

Переименовать файл app.cfg.json.example в файл app.cfg.json с помощью команды:

> mv app.cfg.json.example app.cfg.json

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image19.png" style="width:6.6875in;height:1.59306in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-17 15-54-41.png" />

Рисунок 4.8 – Переименование файла

Создать каталог для журнала аудита компонента:

> mkdir -p /var/log/pg-explain/offline

Отредактировать файл app.cfg.json командой:

> nano app.cfg.json

Установить требуемые параметры, такие как пароль, база данных, num_workers по числу процессорных ядер и т. д.:

> {
>
> "db": {
>
> "host" : "localhost",
>
> "port" : 5432,
>
> "user": "postgres",
>
> "password": "password",
>
> "database": "pg-monitor",
>
> "name": "pg-monitor",
>
> "timeoutReconnect": 10000
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
> "tasktype": "any",
>
> "num_workers": 8,
>
> . . .

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image20.png" style="width:6.66087in;height:5.28596in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-20 10-47-17.png" />

Рисунок 4.9 – Содержание конфигурационного файла app.cfg.json

Запустить службу pg-monitor командами в терминале ОС:

```
# systemctl start pg-monitor
```
>
```
# systemctl enable pg-monitor
```
>
```
# systemctl status pg-monitor
```

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image21.png" style="width:6.67164in;height:2.73819in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-17 16-13-23.png" />

Рисунок 4.10 – Запуск и статус службы «pg-monitor»

В веб-браузере проверить состояние службы:

> http://\<ip-адрес-сервиса-pg-monitor\>:8000

В рассматриваемом примере адрес будет следующим:

> http://10.116.102.59:8000

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image22.png" style="width:7.08681in;height:1.50833in" />

Рисунок 4.11 – Веб-интерфейс «pg-monitor»

### Установка pg-monitor-collector

Служба «pg-monitor-collector» установится автоматически после установки «pg-monitor-collector».

Для полноценного функционирования достаточно добавить ее в автозагрузку ОС и проверить статус командами:

```
# systemctl enable pg-monitor-collector
```
>
```
# systemctl status pg-monitor-collector
```

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image23.png" style="width:6.65672in;height:3.23056in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-17 16-36-36.png" />

Рисунок 4.12 – Статус службы «pg-monitor-collector»

### Настройка SSH-доступа к узлам

Мониторинг удаленных узлов по протоколу SSH требуется предварительная настройка беспарольного доступа (по сертификату). Для чего необходимо создать ключи SSH для аутентификации на локальном сервере, при помощи утилиты ssh-keygen, которая входит в набор утилит OpenSSH. По умолчанию она создает пару 2048 битных RSA ключей.

#### Генерация ключей SSH

Генерация ключей SSH выполняется командой:

> ssh-keygen

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image24.png" style="width:6.64935in;height:1.03194in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-21 10-35-22.png" />

Рисунок 4.13 – Команда генерации ключей

Утилита предложит выбрать расположение ключей. По умолчанию ключи располагаются в папке ~/.ssh/.

Секретный ключ будет называться id_rsa, а публичный id_rsa.pub.

Затем утилита предложит ввести пароль для дополнительного шифрования ключа на диске. Его можно не указывать, нажав «Enter».

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image25.png" style="width:6.64935in;height:1.14861in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-21 13-04-24.png" />

Рисунок 4.14 – Шаг ввода пароля для генерируемого ключа

Далее утилита сгенерирует ключи SSH.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image26.png" style="width:6.65584in;height:4.02566in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-21 13-05-18.png" />

Рисунок 4.15 – Генерирование ключей SSH

#### Загрузка ключа на сервер

Когда генерация ключей завершена, следует загрузить ключ на сервер целевой СУБД «Jatoba». Загрузка выполняется утилитой ssh-copy-id. Она входит в пакет программ OpenSSH. Для загрузки ключа необходим пароль доступа к серверу по SSH.

Синтаксис команды:

> ssh-copy-id -i ~/.ssh/id_rsa.pub имя_пользователя@ip-сервера

В рассматриваемом примере ключ SSH требуется скопировать на целевую СУБД с IP- 10.116.102.56 от пользователя ОС сервера СУБД (см. п. 3.3.4.4). Команда копирования будет следующей:

> ssh-copy-id -i ~/.ssh/id_rsa.pub admin1@10.116.102.56

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image27.png" style="width:6.688in;height:3.45555in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-21 14-01-33.png" />

Рисунок 4.16 – Копирование ключа SSH на сервер SSH целевой СУБД

#### Проверка созданного подключения

Проверка созданного подключения выполняется командой с сервера с установленным pg_explain:

```
# ssh postgres@ip-сервера
```
>
```
# exit
```

В рассматриваемом примере команда подключения будет следующей:

> ssh admin1@10.116.102.56

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image28.png" style="width:6.712in;height:3.97569in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-21 14-19-38.png" />

Рисунок 4.17 – Проверка подключения по SSH к целевой СУБД

#### Копирование ключа SSH в каталог pg-monitor

Скопировать закрытый ключ в каталог pg-monitor/ssh_keys. Файл должен обязательно присутствовать для запуска службы:

```
# cp ~/.ssh/id_rsa /usr/local/lib/pg-monitor/ssh_keys
```

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image29.png" style="width:6.68in;height:1.2875in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-21 14-33-19.png" />

Рисунок 4.18 – Копирование ключа SSH в каталог pg-monitor

Дать пользователю «explain» права на файл командой:

```
# chown explain:explain /usr/local/lib/pg-monitor/ssh_keys/id_rsa
```

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image30.png" style="width:6.63759in;height:1.60694in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-21 14-35-57.png" />

Рисунок 4.19 – Установка прав

Перезапустить службу коллектора:

> systemctl restart pg-monitor-collector.service

### Установка pg-explain

Установить пакет pg-explain_\<version\>-\<buildnumber\>_amd64.deb командами:

```
# cd /usr/share/jds/packages
```
>
```
# apt install ./pg-explain_1.5.9-20240216_amd64.deb
```

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image31.png" style="width:6.63958in;height:3.904in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-21 15-08-17.png" />

Рисунок 4.20 – Установка пакета pg-explain

Перейти в каталог /usr/local/lib/pg-explain:

> cd /usr/local/lib/pg-explain

Переименовать файл app.conf.example:

> mv app.conf.example app.conf

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image32.png" style="width:6.696in;height:0.99923in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-21 16-03-34.png" />

Рисунок 4.21 – Команда переименования файла

Отредактировать app.conf под требуемые настройки СУБД (БД по умолчанию pg-monitor):

> nano app.conf

Параметры используются такие же, как и при установке компонента explain db, как описано в п. 4.3 настоящего документа и показано на рисунке Рисунок 4.5.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image33.png" style="width:6.60298in;height:1.79221in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-21 16-20-44.png" />

Рисунок 4.22 – Содержание файла app.conf

Запустить службу pg-explain:

```
# systemctl start pg-explain.service
```
>
```
# systemctl enable pg-explain.service
```
>
```
# systemctl status pg-explain.service
```

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image34.png" style="width:6.68in;height:1.6875in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-21 16-29-50.png" />

Рисунок 4.23 – Запуск и вывод статуса службы pg-explain.service

В веб-браузере проверить состояние службы:

> http://\<ip-адрес-сервиса-pg-explain\>:8080

В рассматриваемом примере адрес сервиса pg-explain будет следующим:

> http://10.116.102.59:8080/

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image35.png" style="width:7.05933in;height:3.70939in" />

Рисунок 4.24 – Веб-страница сервиса pg-explain

При ошибке «Слишком много клиентов» в статусе службы увеличить параметр «max_connections» в файле конфигурационном файле «postgresql.conf» сервера с установленным компонентом «explain».

## Настройка JDS для взаимодействия с сервисами

Работа компонентов обеспечивается корректно настроенными протоколами, описанными в таблице Таблица 5.1

| **Компонент** | **Протокол** | **Компонент** | **Протокол** | **Описание** |
|----|----|----|----|----|
| JDS | http | pg-explain | http | корректная работа |
| JDS | http/https | pg-explain | https | корректная работа при наличии у pg-explain валидного сертификата или, если сертификат не валидный (self-signed и т.п.), то после отдельного подтверждения pg-explain в браузере |
| JDS | https | pg-explain | http | данная связка работать не будет из-за ограничений безопасности браузеров |

Таблица 5.1 – Протоколы взаимодействия компонентов

Поэтому требуется настроить реверс-прокси для перенаправления запросов к pg-explain.

### Настройка pg-explain на узле отдельном от узла JDS

Компонент JDS имеет функциональную возможность работы без веб-сервера nginx. Поэтому веб-сервера nginx может быть установлен после.

Установка компонент JDS выполняется с помощью инсталлятора, а веб-сервер nginx с помощью скрипта установки, как описано в документе «Защищенная система управления базами данных «Jatoba». Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe».

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image36.png)

До конфигурирования компонентов должны быть выполнены действия, описанные в разделах:

- 
- 

#### 3 «Установка и настройка целевой СУБД «Jatoba»;4 «Установка и настройка pg-explain».Установка веб-сервера nginx на сервере служебной СУБД pg-explain

Установка пакета nginx выполняется из репозитория ОС. Использование скрипта установки nginx.sh, расположенного в каталоге /usr/share/jds/utils, нецелесообразно, т.к. он выполнит конфигурирование веб-сервера для компонента JDS.

Установить nginx:

> apt install -y nginx

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image37.png" style="width:6.64286in;height:2.45411in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-22 14-53-30.png" />

Рисунок 5.1 – Установка nginx

Проверить статус веб-сервера:

> systemctl status nginx

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image38.png" style="width:6.69481in;height:1.33056in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-22 14-55-58.png" />

Рисунок 5.2 – Статус службы nginx

#### Создание сертификата и ключа

Создать папку для сертификата и ключа командой:

> mkdir /etc/nginx/ssl

Создать сертификат и ключ: 4096

> openssl req -x509 -nodes -days 3650 -newkey rsa:4096 -keyout /etc/nginx/ssl/nginx-explain.key -out /etc/nginx/ssl/nginx-explain.crt

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image39.png" style="width:6.66956in;height:1.16458in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-27 15-30-24.png" />

Рисунок 5.3 – Команда создания ключа и сертификата

Процесс формирования сертификата потребует ввода значений по параметрам, приведенным в таблице Таблица 5.2. В этой же таблице приведены значения, которые использовались для формирования примера.

| **Параметры** | **Примерные значения** |
|----|----|
| Country Name (2 letter code) \[AU\] | RU |
| State or Province Name (full name) \[Some-State\] | Leningrad obl |
| Locality Name (eg, city) \[\] | Saint Petersburg |
| Organization Name (eg, company) \[Internet Widgits Pty Ltd\] | Datagile |
| Organizational Unit Name (eg, section) \[\] | Private |
| Common Name (e.g. server FQDN or YOUR name) \[\] | NAME |
| Email Address \[\] | test@datagile.ru |

Таблица 5.2 – Параметры формирования сертификата

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image40.png" style="width:6.66883in;height:3.23958in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-22 15-34-24.png" />

Рисунок 5.4 – Вводимые параметры для формирования сертификата

#### Создание конфигурации сайта 

Создать файл конфигурации сайта командой:

> nano /etc/nginx/conf.d/explain.https.conf

Вставить текст и сохранить:

> server {
>
> charset utf-8;
>
> access_log /var/log/nginx/explain.access.log;
>
> error_log /var/log/nginx/explain.error.log;
>
> listen 443 ssl;
>
> ssl_certificate /etc/nginx/ssl/nginx-explain.crt;
>
> ssl_certificate_key /etc/nginx/ssl/nginx-explain.key;
>
> location / {
>
> proxy_pass http://localhost:8080;
>
> }
>
> }

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image41.png" style="width:6.7013in;height:2.75889in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-22 16-01-07.png" />

Рисунок 5.5 – Содержание файл конфигурации сайта

Перезапустить службу nginx:

> systemctl restart nginx

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image42.png" style="width:6.699in;height:1.50556in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-22 16-04-28.png" />

Рисунок 5.6 – Перезапуск и вывод статуса службы nginx

Проверить в браузере работу explain по https, дать подтверждение системе безопасности при запросе про недействительный сертификат:

> https://\<адрес сервера explain\>

В рассматриваемом примере используется адрес:

> <https://localhost:8080/>

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image43.png" style="width:7.08681in;height:2.97027in" />

Рисунок 5.7 – Проверка работы сайта

#### Конфигурирование компонента JDS на отдельном узле

Взаимодействие JDS с сервисом pg-explain настраивается в конфигурационном файле компонента JDS appsettings.json. В свойстве PgExplainConfig.BaseAddress указать URL, по которому доступен https-сервис pg-explain.

Например

Выполнить команду редактирования файла appsettings.json:

> nano /opt/jds/appsettings.json

Установить строки с синтаксисом:

> "PgExplainConfig": {
>
> "BaseAddress": "https://\<адрес сервера explain\>"

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image1.png" style="width:0.25in;height:0.25in" /> | Адрес должен быть указан без знака дробной черты (solidus) «/» |
|----|----|

В рассматриваемом примере один из узлов имеет IP-адрес 10.116.102.59 и строка конфигурационного файла appsettings.json компонента JDS будет иметь следующий вид:

> "PgExplainConfig": {
>
> "BaseAddress": "https://10.116.102.59"

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image44.png" style="width:7.08681in;height:0.99583in" />

Рисунок 5.8 – Содержание конфигурационного файла appsettings.json компонента JDS

Войти в веб-интерфейс компонента JDS. Перейти в подраздел «Анализ запросов».  
На вкладке «Настройки» нажать кнопку «Добавить». Ввести IP-адрес узла с наблюдаемой СУБД, порт (если он отличается от стандартного 5432) и отметить флагами пункты собираемой статистики и сохранить.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image45.png" style="width:7.08681in;height:3.02609in" />

Рисунок 5.9 – Вкладка «Настройки» раздела «Анализ запросов»

### Настройка pg-explain на одном узле с JDS

Компонент JDS может быть установлен до установки pg-explain. Порядок установки компонент не принципиален. Связь компонентом обеспечивается веб-сервером nginx с конфигурациями под каждый из компонентов.

В силу особенностей конфигурации компонентов потребуется редактировать параметры портов по протоколу HTTPS.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image46.png)

Рисунок 5.10 – Схема взаимодействия компонентов

#### Установка компонента JDS

Компонент пользовательского веб-интерфейса для администраторов «Jatoba data safe» (JDS) устанавливается в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe», в зависимости от требуемой архитектуры, описанной в разделе 2 документа.

#### Веб-сервер nginx

Веб-сервер nginx устанавливается в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe».

Выполнять действия, описанные в п. 5.1.1 документа, необязательно.

#### Создание сертификата и ключа для pg-explain

Создание сертификата и ключа для соединения по протоколу SSL описано в п. 5.1.2 документа.

#### Создание конфигурации сайта 

Отличие выполняемых шагов, описанных в п. 5.1.3 документа состоит в том, что вместо порта 443 будет использоваться порт 444 SSL.

Для чего потребуется создать или отредактировать файл конфигурации сайта командой:

> nano /etc/nginx/conf.d/explain.https.conf

Вставить текст и сохранить строки:

> server {
>
> charset utf-8;
>
> access_log /var/log/nginx/explain.access.log;
>
> error_log /var/log/nginx/explain.error.log;
>
> listen 444 ssl;
>
> ssl_certificate /etc/nginx/ssl/nginx-explain.crt;
>
> ssl_certificate_key /etc/nginx/ssl/nginx-explain.key;
>
> location / {
>
> proxy_pass http://localhost:8080;
>
> }
>
> }

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image47.png" style="width:6.84934in;height:3.01739in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-28 10-52-01.png" />

Рисунок 5.11 – Содержание файла explain.https.conf

Применение параметров обеспечивается перезагрузкой службы nginx:

> systemctl restart nginx

Проверить в веб-браузере работу explain по https, дать подтверждение системе безопасности, если спросит про недействительный сертификат.

#### Редактирование параметров компонента JDS 

Взаимодействие JDS с сервисом pg-explain настраивается в конфигурационном файле компонента JDS appsettings.json. В свойстве PgExplainConfig.BaseAddress необходимо указать URL, по которому доступен https-сервис pg-explain.

Выполнить команду редактирования конфигурационного файла компонента JDS appsettings.json, командой:

> nano /opt/jds/appsettings.json

Вставить параметры:

> "PgExplainConfig": {
>
> "BaseAddress": "https://\<адрес сервера explain\>:444"
>
> },

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image1.png" style="width:0.25in;height:0.25in" /> | Адрес должен быть указан без знака дробной черты (solidus) «/» |
|:--:|----|
| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image1.png" style="width:0.25in;height:0.25in" /> | Сервис explain работает на том же хосте, что и JDS, но в свойстве BaseAddress нужно указывать внешний IP-адрес (не localhost), т.к. обращение к pg-explain идет не от JDS, а от веб-браузера пользователя. |

В рассматриваемом примере один из узлов имеет IP-адрес 10.116.102.59 и строка конфигурационного файла appsettings.json компонента JDS будет иметь следующий вид:

> "PgExplainConfig": {
>
> "BaseAddress": "https://10.116.102.59:444"

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image48.png" style="width:6.65217in;height:1.28611in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC3\Screenshot from 2024-05-28 11-05-57.png" />

Рисунок 5.12 – Содержание конфигурационного файла приложения JDS appsettings.json

Сохранить файл и перезапустить службу «jds»

```
# systemctl restart jds
```
>
```
# systemctl status jds
```

Проверить доступность компонента JDS по адресу:

> https://10.116.102.59/

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image49.png" style="width:7.02758in;height:3.18201in" />

Войти в веб-интерфейс компонента JDS. Перейти в подраздел «Анализ запросов».  
На вкладке «Настройки» нажать кнопку «Добавить». Ввести IP-адрес узла с наблюдаемой СУБД, порт (если он отличается от стандартного 5432) и отметить флагами пункты собираемой статистики и сохранить.

После чего отобразится добавленный узел.

## Ошибки

### Ошибка FATAL: password authentication failed for user "postgres"

Ошибка появляется при вводе некорректного пароля привилегированного пользователя СУБД.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image50.png" style="width:6.67164in;height:3.08889in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-16 15-32-30.png" />

Рисунок 6.1 – Ошибка ввода пароля

Необходимо повторно запустить инсталлятор и указать корректный пароль.

### Ошибка ERROR: invalid locale name: "ru_RU.UTF-8" 

Ошибка появляется при отсутствии установленной в ОС локали «ru_RU.UTF-8».

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image51.png" style="width:6.6708in;height:3.08696in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-16 15-08-27.png" />

Рисунок 6.2 – Ошибка при неустановленной локали

Необходимо установить системную локаль «ru_RU.UTF-8» командой:

> dpkg-reconfigure locales

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/explain/media/image52.png" style="width:6.26866in;height:3.82778in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC2\Screenshot from 2024-05-16 14-41-24.png" />

Рисунок 6.3 – Выбор локали в скрипте установки

В случае, если СУБД была установлена без локали «ru_RU.UTF-8» в ОС, то потребуется ее переустановка.

## 

<span id="_Toc195524711" class="anchor"></span>Термины и определения**«/»** – ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как, «дробная черта» (англ. «solidus»).

**SSH (Secure Shell)** – сетевой протокол прикладного уровня, который позволяет осуществлять удаленное управление ОС и туннелирование TCP-соединений, например, для передачи файлов. Он шифрует весь трафик, включая передаваемые пароли, и допускает выбор различных алгоритмов шифрования. SSH-клиенты и серверы доступны для большинства сетевых ОС.

**Аутентификация «peer»** – режим аутентификации, при использовании которого пользователи автоматически аутентифицируются, если существует соответствующий пользователь СУБД с именем, совпадающим с именем ОС пользователя.

**UFW (Uncomplicated Firewall)** – утилита для конфигурирования межсетевого экрана Netfilter в ОС Linux. Она использует интерфейс командной строки и состоит из небольшого количества простых команд для лёгкого управления межсетевым экраном.

**Iptables** – утилита командной строки, стандартный интерфейс управления межсетевым экраном netfilter для ядер Linux, начиная с версии 2.4. Iptables используется для настройки правил фильтрации пакетов, маршрутизации и преобразования сетевых адресов.

**Bruteforce (брутфорс)** – метод взлома, при котором злоумышленник или тестировщик подбирает данные для входа в систему, используя различные комбинации паролей. Этот метод эффективен для взлома аккаунтов с простыми паролями, но сложен для сложных комбинаций, шифровок и фраз.

**OpenSSH** – набор программ, предоставляющих шифрование сеансов связи по компьютерным сетям с использованием протокола SSH. OpenSSH включает программы для клиента и сервера, а также инструменты для генерации ключей и аутентификации.

## 

| <span id="_Toc195524712" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language |
|:---|----|----|
| БД | – | База данных |
| ОС | – | Операционная система |
| СУБД | – | Система управления базами данных |

