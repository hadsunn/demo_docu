**АННОТАЦИЯ**

Данный документ представляет собой руководство по установке и настройке целевых и служебных хостов, а также создание SSH и SSL-соединений между компонентами СУБД «Jatoba»

Руководство по установке содержит следующие разделы по настройке SSH и SSL соединений:

В Приложении Приложение 1 описана установка и работа службы JDS.PasDoctor.

:::warning Важная информация
Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра .x, 6 для других версий все шаги выполняются аналогично, разница состоит в именах директорий.

Например, СУБД «Jatoba» версии 5.x по умолчанию устанавливается в директорию:
:::

ОС Windows – «C:\Program Files\GIS\Jatoba\5\bin»;ОС Linux – «/usr/jatoba-5/bin».Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image2.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th style="text-align: left;"><strong>Дополнительная информация</strong> – указания, позволяющие упростить работу с изделием</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image2.png" style="width:0.25139in;height:0.25139in" /></td>
<td style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></td>
</tr>
</tbody>
</table>

## Этапы развертывания СУБД на хостах

Документ предназначен для администраторов СУБД с целью корректного формирования экосистемы СУБД «Jatoba».

В частности, использование SSH и SSL соединений. Схема подключений представлена на рисунке Рисунок 1.1.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image3.png)

Рисунок 1.1 – Схема SSH и SSL соединений

Имеющиеся механизмы развертывания компонентов входящих в состав СУБД «Jatoba» позволяют использовать:

- ручную установку;
- автоматизированную установку.

Ручная установка описана в документе «Руководство по установке».

### Первый этап. Топология хостов СУБД

На первом этапе следует определить хосты для СУБД, их назначение и основные параметры.

### Второй этап. Установка СУБД на хостах

В зависимости от типа хоста устанавливается СУБД. Как правило, для стандартных хостов СУБД используется инсталлятор

> jatoba.sh install

Описание установки СУБД инсталлятором описана в документе «Руководство по установке».

Для узлов кластера с ролью Slave используется инсталлятор СУБД с

> jatoba.sh install_server

Описание установки СУБД инсталлятором описана в документе

### Третий этап. Установка JDS

На данном этапе на хосте с JDS устанавливается служебная СУБД и непосредственно сам компонент. Предпочтительный способ установки – инсталлятор JDS.

### Четвертый этап. Подготовка хостов. Настройка SSH соединений 

Этап включает в себя:

- 
- 

### подготовку хостов для целевых СУБД;настройку SSH соединений.Пятый этап. Подготовка SSL подключений 

В зависимости от внутренних требований, может быть настроена SSL аутентификация как для пользователей СУБД, так и для компонентов СУБД.

### Шестой этап. Установка компонентов СУБД

После завершения конфигурирования служебного и целевых хостов СУБД «Jatoba» целесообразно установить требуемые компоненты.

## Настройка SSH-соединений JDS

В приведенном ниже описании приведен пример

- 
- 

создания SSH-соединения между хостами;подключения целевой СУБД к компоненту JDS.В качестве примера используются 2 сервера с конфигурацией приведенной в таблице Таблица 2.1

| **№** | **Имя сервера** | **IP-адрес** | **Маска подсети** | **Компонент** | **Назначение хоста** |
|:---|:---|:---|:---|:---|:---|
| 1 | u602doc-jds01 | 10.116.102.41/24 | 255.255.255.0 | JDS | Служебная |
| 2 | u602doc-pgp01 | 10.116.102.49/24 | 255.255.255.0 | Pg_profile | Целевая СУБД |

Таблица 2.1 – Конфигурация сети стенда

Хостах должны быть установлены СУБД и на хосте JDS установлен непосредственно компонент.

### Создание пользователя ОС jdscontrol на целевом хосте

Создать пользователя jdscontrol ОС командой в терминале ОС:

> useradd -b /var/lib -m -s /usr/bin/bash jdscontrol

Задать пароль:

> passwd jdscontrol

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image4.png" style="width:7.104in;height:1.90884in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Screenshot from 2025-01-22 18-13-54.png" />

Рисунок 2.1 – Создание пользователя jdscontrol

### Копирование скрипта на целевой хост 

С после установки компонента JDS на служебном хосте будет находиться скрипт в каталоге /opt/jds-scripts/assign_control_rights.sh

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image5.png" style="width:3.0813in;height:2.00059in" />

Рисунок 2.2 – Расположение скрипта настройки SSH

Данный скрипт вручную надо скопировать на хост целевой СУБД (10.116.102.49). Поместить в домашний каталог /root.

Установить права:

- 
- 
- 
- 
- 
- 
- 

чтение для владельца;запись для владельца;запуск/поиск для владельца;чтение для группы;запись/поиск для группы;чтение для других;запуск/поиск для других.<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image6.png" style="width:6.664in;height:4.39897in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Screenshot from 2025-01-21 17-10-50.png" />

Рисунок 2.3 – Установка прав на скрипт через коммандер

Либо командой:

> cd /root
>
> chmod +x assign_control_rights.sh

### Выполнение скрипта на целевом хосте

Команда запуска скрипта имеет синтаксис

Скрипт имеет собственный синтаксис запуска:

> ./assign_control_rights.sh \<имя сервиса СУБД\> \<путь к папке DATA\> \<имя пользователя\>

От имени и с правами привилегированного пользователя root выполнить команду в терминале ОС:

> ./assign_control_rights.sh jatoba-6 /var/lib/jatoba/6/data/ jdscontrol

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image7.png" style="width:6.98435in;height:1.04in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Screenshot from 2025-01-22 16-55-39.png" />

Рисунок 2.4 – Выполнение скрипта

Установить права на каталог для пользователя jdscontrol командами:

```
# chmod u+rx /var/lib/jdscontrol/backup
```
>
```
# chown jdscontrol:jdscontrol /var/lib/jdscontrol/backup
```

### Создание домашнего каталога пользователя JDS на служебном хосте

Пользователь JDS был создан в процессе установки компонента и на данном шаге требуется создание для него домашней директории.

Создать папку пользователя, под которым работает JDS и назначить права, возможно командами:

> \#sudo -s
>
> \#mkdir /home/jds
>
> \#chown jds /home/jds

### Создание ключа SSH для пользователя JDS на служебном хосте

Создание ключей SSH должно проводится от имени и с правами пользователя ОС jds.

Для этого требуется переключиться на пользователя jds:

> sudo -u jds /usr/bin/bash

Создать ключ SSH для пользователя jds командой:

> ssh-keygen

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image8.png" style="width:7.06887in;height:4.648in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Screenshot from 2025-01-22 17-14-36.png" />

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image1.png" style="width:0.25in;height:0.25in" /> | При создании SSH ключей не устанавливается пароль доступа к ним |
|----|----|

Рисунок 2.5 – Создание SSH ключей

### Передача ключа SSH на целевую СУБД

Созданный ключ SSH для пользователя jds должны быть переданы на хост целевой СУБД, для формирования SSH-соединения командой:

> ssh-copy-id jdscontrol@10.116.102.49

Ответить «yes» прописью на вывод:

> Are you sure you want to continue connecting (yes/no/\[fingerprint\])?

Ввести пароль пользователя jdscontrol созданного на целевом хосте СУБД при выводе:

> jdscontrol@10.116.102.49 password:

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image9.png" style="width:7.01517in;height:3.264in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Screenshot from 2025-01-22 18-16-33.png" />

Рисунок 2.6 – Копирование SSH-ключа на целевой хост СУБД

Проверить подключение командой

> ssh jdscontrol@10.116.102.49

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image1.png" style="width:0.25in;height:0.25in" /> | При подключении по SSH протоколу не должен запрашиваться пароль |
|----|----|

После подключения проверьте операции над службой jatoba<ver>.

### Подключение JDS к целевой СУБД (SSH и PASSWORD)

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image1.png" style="width:0.25in;height:0.25in" /> | Данный пункт частично дублирует описание настройки подключения к целевой СУБД данной в руководстве |
|----|----|

На данном этапе возможно установить соединение между JDS и целевой СУБД. При этом используются SSH – соединение и метод аутентификации в СУБД «PASSWORD». Это позволит убедиться в корректности настройки и управляемости СУБД. В последствии возможно сменить метод аутентификации и подключаться к целевой СУБД по SSL протоколу.

В разделе «Ландшафт» Должна быть создана иерархическая структура объектов.

- 
- 
- 

#### Группа;Хост; СУБД.Хост

В параметрах хоста целевой СУБД указываются параметры приведенные в таблице Таблица 2.2.

| **Параметр**                  | **Значение**  |
|-------------------------------|---------------|
| Тип элемента: \*              | хост          |
| IP-адрес или FQDN-имя \*      | 10.116.102.49 |
| Имя учётной записи \*         | jdscontrol    |
| Порт для управления по SSH \* | 22            |
| Описание                      |               |

Таблица 2.2 – Устанавливаемые параметры для хоста

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image10.png" style="width:7.08681in;height:4.21515in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Opera Snapshot_2025-01-22_093949_localhost.png" />

Рисунок 2.7 – Окно настройки хоста целевой СУБД в JDS

#### Настройка конфигурационного файла pg_hba.conf

Перед настройками СУБД, во вкладке «Правила доступа» должны быть добавлены параметры подключения с удаленного хоста. В рассматриваемом примере это хост JDS IP 10.116.102.41.

В конфигурационном файле pg_hba.conf должна быть строка, как минимум, разрешающая подключения из подсети.

Например

> host all all 10.116.102.0/24 md5

Иначе компонент выведет ошибку и не позволит установить соединение с целевой СУБД.

#### СУБД

В параметрах СУБД указываются параметры приведенные в таблице Таблица 2.3

| **Параметры**                             | **Значения**               |
|-------------------------------------------|----------------------------|
| Имя сервиса \*                            | jatoba-6                   |
| Порт: \*                                  | 5432                       |
| Папка data\*                              | /var/lib/jatoba/6/data     |
| Папка для резервных копий конфигурации \* | /var/lib/jdscontrol/backup |
| Сертификат УЦ                             | не используется            |
| Имя служебной БД \*                       | postgres                   |
| Режим шифрования                          | Disable                    |
| Проверять сертификат СУБД на отзыв:       | не используется            |
| Способ аутентификации                     | Пароль                     |
| Имя роли администратора СУБД \*           | postgres                   |
| Пароль                                    |                            |

Таблица 2.3 – Устанавливаемые параметры для СУБД

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image11.png" style="width:7.08681in;height:4.21906in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Opera Snapshot_2025-01-21_183342_localhost.png" />

Рисунок 2.8 – Окно настройки целевой СУБД

## Настройка SSL-соединений 

Настройка SSL соединений, для всех компонентов СУБД, должна выполняться от одно центра сертификации, т.е. на основе одного сертификата «CA».

СУБД «Jatoba» имеет возможность использования шифрованного сетевого трафика и аутентификацию по SSL сертификату. Аутентификация клиента по SSL сертификату позволяет серверу проверить личность подключающегося, подтверждая, что сертификат X.509, представленный клиентом, подписан центром сертификации. Рекомендуется использовать только доверенные центры сертификации для выдачи сертификатов клиенту и серверу

При выпуске серверных сертификатов поле SAN (а при его отсутствии – CN) должно соответствовать доменному имени сервера или его IP адресу.

Список файлов, которые будут использованы в текущем руководстве:

- 
- 
- 
- 

корневой сертификат удостоверяющего центра (root.crt);сертификаты и ключи для каждого целевого узла (в приведенных примерах необходимо заменить {cn} на имя узла);сертификаты, ключи и контейнеры для клиентов;список отозванных сертификатов (root.crl.pem).Корневой сертификат Центра сертификации должен быть установлен в целевой системе в «Доверенные корневые центры сертификации» (Windows)

Установка корневого сертификата в GNU/Linux:

- 

> скопировать корневой сертификат удостоверяющего центра (root.crt) в каталог: /usr/share/ca-certificates/

- 

> выполнить команду в терминале ОС: dpkg-reconfigure ca-certificates
>
> и выбрать нужный сертификат

- 

> выполнить команду в терминале ОС:update-ca-certificates

Для всех настраиваемых узлов на DNS-сервере или в файлах hosts существуют записи FQDN, соответствующие создаваемым сертификатам

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image12.png" style="width:4.44306in;height:2.10347in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-17_15-58-7-1.png" />

Рисунок 3.1

В названиях пакетов ПО Jatoba вместо символа «X» нужно подставить номер актуальной версии СУБД.

В файле pg_hba.conf целевых СУБД предварительно надо задать необходимые настройки доступа, к примеру, для локальных подключений по IP или доменному имени, а также по SSL. Данные параметры приведены в качестве примера, для удаленных подключений необходимо указать конкретные адреса, базы и роли. Самая строгая степень проверки SSL сертификата: clientcert=verify-full. При этом типе авторизации проверяется соответствие значения поля CN пользовательского сертификата имени пользователя PostgreSQL.

> host all all 127.0.0.1/32 md5
>
> hostssl all all all cert clientcert=verify-full

В файле postgresql.conf целевых СУБД предварительно надо задать необходимые настройки подключения по SSL. В данном руководстве используются параметры:

> ssl = on
>
> ssl_ca_file = '/var/lib/jatoba/certs/root.crt'
>
> ssl_cert_file = '/var/lib/jatoba/certs/{cn}.crt'
>
> ssl_key_file = '/var/lib/jatoba/certs/{cn}.key'
>
> ssl_crl_dir = '/var/lib/jatoba/certs/'

У данных файлов должны быть корректные права (владелец – postgres, доступ на файл ключа – 600):

> chown -R postgres /var/lib/jatoba/certs
>
> chmod 600 /var/lib/jatoba/certs/{cn}.key

После добавления CRL-файла в каталог нужно запустить команду:

> openssl rehash '/var/lib/jatoba/certs'

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image2.png" style="width:0.25139in;height:0.25139in" /> | При использовании файла CRL нужно следить за истечением срока его актуальности для своевременной замены |
|----|----|

SSL-подключения можно отслеживать в СУБД командой:

> SELECT usename, datname, ssl, client_addr, application_name
>
> FROM pg_stat_ssl
>
> JOIN pg_stat_activity ON pg_stat_ssl.pid = pg_stat_activity.pid;

### Создание и конвертация сертификатов

Создание запроса на сертификат пользователя:

> openssl req -new -nodes -text -out {cn}.csr -keyout {cn}.key -subj "/CN={cn}"

Создание запроса на сертификат сервера с использованием файла openssl.conf:

> openssl req -new -nodes -text -out {name}.csr -keyout {name}.key -config openssl.conf

Содержимое файла openssl.conf

> \[req\]
>
> default_bits = 2048
>
> distinguished_name = req_distinguished_name
>
> req_extensions = v3_req
>
> prompt = no
>
> \[req_distinguished_name\]
>
> CN=example.local
>
> \[v3_req\]
>
> keyUsage = keyEncipherment, dataEncipherment
>
> extendedKeyUsage = serverAuth, clientAuth
>
> subjectAltName = @alt_names
>
> \[alt_names\]
>
> IP.1 = \<IP-адрес\>

Ключевые поля файла: CN и IP.1 (адрес сервера). Их нужно менять перед генерацией каждого серверного сертификата.

Эти поля нужны, чтобы сертификат мог работать с сервером не только по DNS-имени, но и по адресу (SAN).

При настройке отказоустойчивого кластера также нужно добавлять в alt_names публичный адрес ja_Dog.

На основе содержимого полученного файла \*.csr (запроса на сертификат) на сайте Служб сертификации Active Directory запросить сертификат.

При импорте файлов сертификатов из Центра Сертификации MS Active Directory в ОС Linux требуется конвертация в формат PEM. В таком виде с ними может работать СУБД «Jatoba».

Конвертация списка отозванных сертификатов:

> openssl crl -in {file_name}.crl -inform DER -out root.crl.pem

Конвертация корневого, клиентского или серверного сертификата:

> openssl x509 -inform DER -in {file_name}.cer -out {file_name}.crt

Для подключения JDS к целевым хостам требуется контейнер клиентского сертификата в формате pfx. При наличии промежуточного центра сертификации нужно создать файл root.crt-bundle

> nano root.crt-bundle

Вставить в него содержимое файлов intermediate.crt (сертификат промежуточного ЦС) и root.crt (сертификат корневого ЦС), от begin до end из каждого, включительно, в таком порядке файлов. Данный бандл может быть основой для всех клиентских бандлов.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image1.png" style="width:0.25in;height:0.25in" /> | Пример такой настройки приведен в разделе 13 настоящего документа. |
|----|----|

Создать цепочку сертификатов промежуточного и корневого ЦС для клиентского сертификата postgres:

> cp root.crt-bundle client.postgres.crt-bundle

Создать контейнер PFX для пользователя postgres:

> openssl pkcs12 -inkey client.postgres.key -in client.postgres.crt -certfile client.postgres.crt-bundle -export -out client.postgres.pfx

Пароль оставить пустым.

При отсутствии промежуточного ЦС можно использовать «корневой» сертификат как бандл, если его содержимое – с BEGIN до END. Иначе удалить лишние строки и затем использовать его для создания клиентского бандла теми же командами:

> cp root.crt root.crt-bundle

### 

### Пути хранения сертификатов и ключей компонентов СУБД

При формировании сертификатов для SSL-соединения следует стремиться к единообразию имён и мест хранения.

Имена сертификатов и места их хранения представлены в таблице Таблица 3.1.

<table>
<caption><p>Таблица 3.1 – Имена сертификатов и места их хранения</p></caption>
<colgroup>
<col style="width: 29%" />
<col style="width: 20%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th><strong>Назначение/место соединения</strong></th>
<th><strong>Файл</strong></th>
<th><strong>Путь/настройка конфигурации</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Хранение корневого сертификата в Linux</strong></td>
<td>root.crt</td>
<td>/usr/share/ca-certificates/</td>
</tr>
<tr>
<td><strong>СУБД</strong></td>
<td></td>
<td><strong>postgresql.conf</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td>/var/lib/jatoba/certs/</td>
</tr>
<tr>
<td></td>
<td></td>
<td>ssl_ca_file = '/var/lib/jatoba/certs/root.crt</td>
</tr>
<tr>
<td></td>
<td></td>
<td>ssl_cert_file = '/var/lib/jatoba/certs/{cn}.crt</td>
</tr>
<tr>
<td></td>
<td></td>
<td>ssl_key_file = '/var/lib/jatoba/certs/{cn}.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td>ssl_crl_dir = '/var/lib/jatoba/certs/</td>
</tr>
<tr>
<td><strong>jaDog</strong></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Между узлами кластера</strong></td>
<td></td>
<td><strong>postgresql.conf</strong></td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>ssl_ca_file = '/var/lib/jatoba/certs/root.crt'</td>
</tr>
<tr>
<td></td>
<td>server.crt</td>
<td>ssl_cert_file = '/var/lib/jatoba/certs/server.crt'</td>
</tr>
<tr>
<td></td>
<td>server.key</td>
<td>ssl_key_file = '/var/lib/jatoba/certs/server.key'</td>
</tr>
<tr>
<td></td>
<td></td>
<td>ssl_crl_dir = '/var/lib/jatoba/certs/'</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td><strong>В разделе 4 «Security connection settings»</strong></td>
</tr>
<tr>
<td></td>
<td></td>
<td>/var/lib/jatoba/certs/root.crt</td>
</tr>
<tr>
<td></td>
<td></td>
<td>/var/lib/jatoba/certs/server.crt</td>
</tr>
<tr>
<td></td>
<td></td>
<td>/var/lib/jatoba/certs/root.cert.pem</td>
</tr>
<tr>
<td></td>
<td></td>
<td>/var/lib/jatoba/certs/server.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Доступ ja_Dog к СУБД по SSL</strong></td>
<td></td>
<td><strong>В разделе 5) Database server system account and connection settings</strong></td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>/var/lib/jatoba/certs/root.crt</td>
</tr>
<tr>
<td></td>
<td>root.crt.pem</td>
<td>/var/lib/jatoba/certs/root.crt.pem</td>
</tr>
<tr>
<td></td>
<td>сlient.jadog_user.crt</td>
<td>/var/lib/jatoba/certs/client.jadog_user.crt</td>
</tr>
<tr>
<td></td>
<td>client.jadog_user.key</td>
<td>/var/lib/jatoba/certs/client.jadog_user.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Подключение «jaDog» к JDS разделе «Ландшафт»</strong></td>
<td></td>
<td><strong>11 – Rest API settings</strong></td>
</tr>
<tr>
<td></td>
<td>srv.crt</td>
<td>/var/lib/jatoba/certs/srv.crt</td>
</tr>
<tr>
<td></td>
<td>srv.key</td>
<td>/var/lib/jatoba/certs/srv.key</td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>/var/lib/jatoba/certs/root.crt</td>
</tr>
<tr>
<td></td>
<td>root.crt.pem</td>
<td>/var/lib/jatoba/certs/root.crt.pem</td>
</tr>
<tr>
<td></td>
<td>admin.pfx</td>
<td>/usr/share/jds/certs/clusters</td>
</tr>
<tr>
<td><strong>JDS – служебная СУБД</strong></td>
<td></td>
<td>/usr/share/jds/certs</td>
</tr>
<tr>
<td></td>
<td>root.crt-bundle</td>
<td>/usr/share/jds/certs/root.crt-bundle</td>
</tr>
<tr>
<td></td>
<td>client.jds.pfx</td>
<td>/usr/share/jds/certs/client.jds.pfx</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Web-интерфейс JDS</strong></td>
<td></td>
<td><strong>/opt/jds/appsettings.json</strong></td>
</tr>
<tr>
<td></td>
<td>jds.local.crt</td>
<td>/etc/nginx/ssl/jds.local.crt</td>
</tr>
<tr>
<td></td>
<td>jds.local.key</td>
<td>/etc/nginx/ssl/jds.local.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>JDS. Анализ запросов</strong></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td><strong>На отдельном узле</strong></td>
<td></td>
</tr>
<tr>
<td></td>
<td><p>prometheus.local.crt</p>
<p>prometheus.local.key</p></td>
<td>/etc/nginx/ssl/prometheus.local.crt</td>
</tr>
<tr>
<td></td>
<td>jds.local.crt<br />
jds.local.key</td>
<td>/etc/nginx/ssl/prometheus.local.key</td>
</tr>
<tr>
<td></td>
<td><strong>На одном узле</strong></td>
<td></td>
</tr>
<tr>
<td></td>
<td>jds.local.crt<br />
jds.local.key</td>
<td>/etc/nginx/ssl/jds.local.crt<br />
/etc/nginx/ssl/jds.local.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>JDS. Мониторинг</strong></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Система «Prometheus»</strong></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>prometheus.local.crt</td>
<td>/var/lib/certs/prometheus.local.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.key</td>
<td>/var/lib/certs/prometheus.local.key</td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>/var/lib/certs/root.crt</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>jatoba*_node_exporter</strong></td>
<td></td>
<td><strong>/usr/jatoba-X/monitoring/default/node_config.yml</strong></td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>client_ca_file: /var/lib/certs_node/root.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.crt</td>
<td>cert_file: /var/lib/certs_node/prometheus.local.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.key</td>
<td>key_file: /var/lib/certs_node/prometheus.local.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td><strong>/usr/jatoba-X/monitoring/default/prometheus.yml</strong></td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>/var/lib/certs_postgres/root.crt</td>
</tr>
<tr>
<td></td>
<td>postgres_exporter.crt</td>
<td>/var/lib/certs_postgres/postgres_exporter.crt</td>
</tr>
<tr>
<td></td>
<td>postgres_exporter.key</td>
<td>/var/lib/certs_postgres/postgres_exporter.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>jatoba*_postgres_exporter</strong></td>
<td></td>
<td><strong>/usr/jatoba-X/monitoring/default/postgres-config.yml</strong></td>
</tr>
<tr>
<td></td>
<td>prometheus.local.crt</td>
<td>cert_file: /var/lib/certs_postgres/prometheus.local.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.key</td>
<td>key_file: /var/lib/certs_postgres/prometheus.local.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td><strong>/usr/jatoba-X/monitoring/default/prometheus.yml</strong></td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>ca_file: /var/lib/certs/root.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.crt</td>
<td>cert_file: /var/lib/certs/prometheus.local.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.key</td>
<td>key_file: /var/lib/certs/prometheus.local.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td><strong>/usr/jatoba-X/monitoring/default/postgres_exporter.yml</strong></td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>sslrootcert=/var/lib/certs_postgres/root.crt</td>
</tr>
<tr>
<td></td>
<td>postgres_exporter.crt</td>
<td>sslcert=/var/lib/certs_postgres/postgres_exporter.crt</td>
</tr>
<tr>
<td></td>
<td>postgres_exporter.key</td>
<td>sslkey=/var/lib/certs_postgres/postgres_exporter.key"</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>jatoba*_sql_exporter</strong></td>
<td></td>
<td><strong>/usr/jatoba-X/monitoring/default/sql-config.yml</strong></td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>client_ca_file: /var/lib/certs_sql/root.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.crt</td>
<td>cert_file: /var/lib/certs_sql/prometheus.local.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.key</td>
<td>key_file: /var/lib/certs_sql/prometheus.local.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td><strong>/usr/jatoba-X/monitoring/default/prometheus.yml</strong></td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>client_ca_file: /var/lib/certs_sql/root.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.crt</td>
<td>cert_file: /var/lib/certs_sql/prometheus.local.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.key</td>
<td>key_file: /var/lib/certs_sql/prometheus.local.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td><strong>/usr/jatoba-X/monitoring/default/prometheus.yml</strong></td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>ca_file: /var/lib/certs/root.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.crt</td>
<td>cert_file: /var/lib/certs/prometheus.local.crt</td>
</tr>
<tr>
<td></td>
<td>prometheus.local.key</td>
<td>key_file: /var/lib/certs/prometheus.local.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td><strong>/usr/jatoba-X/monitoring/default/sql_exporter.yml</strong></td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>sslrootcert=/var/lib/certs_sql/root.crt</td>
</tr>
<tr>
<td></td>
<td>sql_exporter.crt</td>
<td>sslcert=/var/lib/certs_sql/sql_exporter.crt</td>
</tr>
<tr>
<td></td>
<td>sql_exporter.key</td>
<td>sslkey=/var/lib/certs_sql/sql_exporter.key</td>
</tr>
</tbody>
</table>

Таблица 3.1 – Имена сертификатов и места их хранения

## 

## Подключение JDS к целевой СУБД по SSL

Для данного раздела понадобится файл бандла корневого и всех промежуточных сертификатов, созданный в разделе п.п. 3.1 «Создание и конвертация сертификатов».

Целевая СУБД должна быть предварительно настроена. Файлы postgresql.conf, pg_hba.conf, файлы сертификатов хранятся в указанном каталоге.

На примере раздела «Матрица доступа»: в JDS перейти в Настройки - Цели - Добавить

Заполнить настройки для подключения к серверу СУБД. В поле сертификат нужно указать вышеуказанный бандл. В качестве функционала выбрать «Матрица доступа»

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image13.png" style="width:3.58472in;height:4.08472in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-17_16-21-14-1.png" />

Рисунок 4.1 – Создание цели

Нажать на кнопку «Добавить подключение». Заполнить настройки, выбрать режим VerifyFull, способ аутентификации - «SSL-сертификат», в качестве сертификата добавить контейнер pfx указанного выше пользователя

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image14.png" style="width:3.11319in;height:4.69792in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-17_16-21-42-1.png" />

Рисунок 4.2 – Окно редактирования подключения

Кнопка «Тест подключения» должна отобразить уведомление об успешном подключении.

В разделе Аудит и отчетность - Матрица доступа выбрать созданную цель.

## Подключение JDS к служебной СУБД по SSL

Для данного раздела понадобится файл корневого сертификата УЦ или бандл сертификатов, а также контейнер пользователя .pfx

Создать каталог для сертификатов:

> mkdir /usr/share/jds/certs

Скопировать в каталог файл корневого сертификата (или бандл всех промежуточных ЦС) и контейнер пользователя .pfx

Назначить владельцем каталога пользователя, под именем которого запускается сервис JDS, и ограничить права на файлы:

> chown -R jds /usr/share/jds/certs
>
> chmod -R 600 /usr/share/jds/certs

Отредактировать файл конфигурации JDS:

> nano /opt/jds/appsettings.json

Заменить строку:

> "ConnectionStrings": {"DefaultConnection": "User Id=jds; Password=sql; Server=localhost; Database=jdsdb; Port=5432;"
>
>  },

на

> "ConnectionStrings": {"DefaultConnection": " User Id=jds; Server=jds.local; Port=5432; Database=jdsdb; SslMode=VerifyFull"
>
> },

Добавить раздел:

> },
>
> "ConnectionSslConfigurator": {
>
> "Connections": {
>
> "DefaultConnection": {
>
> "CAFile":"/usr/share/jds/certs/root.crt-bundle",
>
> "ClientPfxFile":"/usr/share/jds/certs/client.jds.pfx",
>
> "ClientPfxPassword":null,
>
> "CheckServerCertificateRevocation":false
>
> }
>
> }
>
> }
>
> }

Перезапустить службу JDS:

> systemctl restart jds.service

## Подключение к Web-интерфейсу JDS по SSL

Для данного раздела понадобится файл корневого сертификата УЦ или бандл сертификатов, а также контейнер пользователя .pfx

По умолчанию JDS устанавливается с самоподписанным сертификатом, его требуется заменить.

Для данного раздела понадобятся файлы jds.local.crt и jds.local.key (сертификат, сгенерированный для сервера с запущенным сервисом JDS)

Для запуска web-интерфейса JDS с сертификатом из ЦС нужно скопировать файлы сертификата и ключа в каталог SSL:

> cp jds.local.crt /etc/nginx/ssl/
>
> cp jds.local.key /etc/nginx/ssl/

Отредактировать конфигурацию JDS для nginx

> nano /etc/nginx/conf.d/jds.https.conf

Заменить названия файлов сертификата и ключа

> listen 443 ssl;
>
>     ssl_certificate           /etc/nginx/ssl/jds.local.crt;
>
>     ssl_certificate_key       /etc/nginx/ssl/jds.local.key;

Перезапустить службу nginx

> systemctl restart nginx.service

## Настройка SSL компонента ja_Dog

### Настройка SSL между узлами кластера

В примере рассматривается настройка SSL-подключения между 2 узлами отказоустойчивого кластера

Провести стандартную установку jadog на все узлы кластера, следуя шагам из документа «Компонент jaDog. Управление режимом работы узлов кластера»

Добавить в pg_hba.conf главного узла строки

| hostssl | replication | jadog | \<IP другого узла\>/32 | cert | clientcert=verify-full |
|----|----|----|----|----|----|
| hostssl | all | jadog | \<IP другого узла\>/32 | cert | clientcert=verify-full |
| hostssl | all | jadog | 127.0.0.1/32 | cert | clientcert=verify-full |
| hostssl | all | jadog_user | all | cert | clientcert=verify-full |

Для всех узлов сформировать серверные сертификаты по инструкциям из раздела «Создание сертификатов» (обязательно с SAN, в дальнейшем будет настройка сервиса по IP), скопировать их, а также корневой сертификат (root.crt) и список отозванных сертификатов (root.crl.pem) в /var/lib/jatoba/certs

Так как конфигурация СУБД с путями к сертификатам будет скопирована в процессе первой репликации, должны быть одинаковыми не только пути, но и имена файлов. Файлы {cn}.crt и {cn}.key переименовать в server.crt и server.key на всех узлах. Параметры CN и SAN не будут затронуты:

> cd /var/lib/jatoba/certs
>
> mv {cn}.crt server.crt
>
> mv {cn}.key server.key

В файле postgresql.conf главного узла нужно внести соответствующие изменения в пути к файлам сертификатов.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image15.png" style="width:5.48125in;height:1.12292in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-17_17-1-0-1.png" />

Рисунок 7.1 – Пример настроек SSL-соединения в файле postgresql.conf

Задать права на каталог и файлы командой:

> chown -R postgres /var/lib/jatoba/certs
>
> chmod 600 /var/lib/jatoba/certs/server.key

На первом узле перенастроить конфигурацию jadog для использования SSL:

> cd /usr/jatoba-X/bin

\#если первоначальная настройка уже была:

> ./jadog setup -C ../etc/jadog/

\#если это первая настройка:

> ./jadog setup

В разделе 2 «Inter-jadog communication setting», пункт 5 «SSL on (param_ssl:ssl)» переключить в значение true:

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image16.png" style="width:7.16522in;height:0.96443in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-17_17-2-11-1.png" />

Рисунок 7.2 - Раздел 2 «Inter-jadog communication setting»

В разделе 4 «Security connection settings» заполнить пути к файлам сертификатов и ключей.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image17.png" style="width:7.21165in;height:0.5913in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-17_17-2-27-1.png" />

Рисунок 7.3 - разделе 4 «Security connection settings»

Повторно ввести пароль пользователя кластера в разделе 6.

С помощью раздела 13 сохранить настройки и выйти из конфигуратора.

Повторить аналогичную настройку на втором узле кластера.

В файле /usr/jatoba-X/etc/jadog/jadog_hba.cfg на обоих узлах добавить строку (если ее там нет)

> all all ssl

Проверить, что служба jadog запущена на всех узлах.

> systemctl status jadog.service

С помощью утилиты jadog_ctl на главном сервере создать кластер и включить в него узлы согласно документации.

На главном узле можно проверить тип соединений к базе данных (ssl = «t») SQL-командой:

> sudo -u postgres psql
>
> SELECT usename, datname, ssl, client_addr, application_name
>
> FROM pg_stat_ssl
>
> JOIN pg_stat_activity
>
> ON pg_stat_ssl.pid = pg_stat_activity.pid;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image18.png" style="width:7.06514in;height:0.81739in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-17_17-2-58-1.png" />

Рисунок 7.4 – SQL-команда проверки SSL-соединения между узлами

### Настройка доступа ja_Dog к СУБД по SSL

Действия проводятся на узлах кластера, настроенного по шагам из прошлого раздела

Создать клиентский сертификат для пользователя jadog_user по инструкции, скопировать файлы в каталог /var/lib/jatoba/certs всех узлов кластера

> cp ./client.jadog_user.\* /var/lib/jatoba/certs/
>
> chown -R postgres /var/lib/jatoba/certs
>
> chmod 600 /var/lib/jatoba/certs/client.jadog_user.key

На всех узлах запустить изменение конфигурации jadog командой:

> cd /usr/jatoba-X/bin
>
> ./jadog setup -C ../etc/jadog/

Перейти в пункт меню 3 «User / Admin access network setting», в Подменю 1) Public IP address (param_jadog: public_address) и заполнить значение:

1\) Public address (param_jadog:public_address) - общий IP-адрес данного узла (тот же, что указан как SAN в сертификате данного сервера)

Перейти в пункт 5) Database server system account and connection settings и заполнить значения:

<table>
<colgroup>
<col style="width: 62%" />
<col style="width: 37%" />
</colgroup>
<thead>
<tr>
<th>6) Database auth method (db_connection_settings:db_auth_method)</th>
<th>ssl</th>
</tr>
</thead>
<tbody>
<tr>
<td><p>7) Jadog to database CA file (db_connection_settings:ssl_ca_file)</p>
<p>путь к файлу корневого сертификата</p></td>
<td>/var/lib/jatoba/certs/root.crt</td>
</tr>
<tr>
<td><p>8) Jadog to database CRL file (db_connection_settings:ssl_crl_file)</p>
<p>путь к файлу отозванных сертификатов</p></td>
<td>/var/lib/jatoba/certs/root.crt.pem</td>
</tr>
<tr>
<td><p>9) Jadog to database cert file (db_connection_settings:ssl_cert_file)</p>
<p>путь к файлу сертификата jadog_user</p></td>
<td>/var/lib/jatoba/certs/client.jadog_user.crt</td>
</tr>
<tr>
<td><p>10) Jadog to database key file (db_connection_settings:ssl_key_file)</p>
<p>путь к файлу ключа сертификата jadog_user</p></td>
<td>/var/lib/jatoba/certs/client.jadog_user.key</td>
</tr>
</tbody>
</table>

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image19.png" style="width:6.96647in;height:1.65031in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-17_17-5-25-1.png" />

Рисунок 7.5 - пункт 5) Database server system account and connection settings

Ввести пароль пользователя в пункте 13.

Выйти из настройки через общий раздел 13.

При необходимости перезапустить узлы кластера в правильном порядке или в приложении jadog_ctl воспользоваться командой:

> reload jadog on cluster

### Подключение кластера «ja_Dog» к JDS разделе «Ландшафт»

В приведенном ниже описании приведен пример создания цели (Target) с подключением по SSL/TLS.

Требуются: JDS версии 2.7.0 и новее, jaDog версии 3.2 и новее.

Подключение кластеров осуществляется с помощью Rest API компонента jaDog. Rest API всегда использует SSL подключение.

Для данного раздела понадобится pfx-контейнер сертификата администратора кластера на основе клиентских сертификата и ключа пользователя admin:

> openssl pkcs12 -inkey admin.key -in admin.crt -certfile root.crt -export -out admin.pfx

#### Настройка Rest API

Настройка Rest API возможно двумя способами:

**1. При первоначальной настройке конфигурации узла кластера:**

На всех узлах кластера запустить изменение конфигурации:

> cd /usr/jatoba-X/bin
>
> ./jadog setup -C ../etc/jadog/

Перейти в раздел 11 – Rest API settings, заполнить значения:

<table>
<colgroup>
<col style="width: 69%" />
<col style="width: 30%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">1) REST API use (param_rest_api:rest_api_use)</th>
<th>«true»</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">2) REST API listen address (param_rest_api:rest_api_listen_address)</td>
<td>«0.0.0.0»</td>
</tr>
<tr>
<td style="text-align: left;"><p>3) REST API listen port (param_rest_api:rest_api_listen_port)</p>
<p>порт, который будет использовать Rest API, по умолчанию</p></td>
<td>54443</td>
</tr>
<tr>
<td style="text-align: left;"><p>4) REST API TLS server certificate (param_rest_api:rest_api_cert_file)</p>
<p>путь к файлу открытого ключа сервера</p></td>
<td>/var/lib/jatoba/certs/srv.crt</td>
</tr>
<tr>
<td style="text-align: left;"><p>5) REST API TLS server private key (param_rest_api:rest_api_key_file)</p>
<p>путь к файлу закрытого ключа сервера</p></td>
<td>/var/lib/jatoba/certs/srv.key</td>
</tr>
<tr>
<td style="text-align: left;"><p>6) REST API TLS CA bundle (param_rest_api:rest_api_ca_file)</p>
<p>путь к файлу корневого сертификата</p></td>
<td>/var/lib/jatoba/certs/root.crt</td>
</tr>
<tr>
<td style="text-align: left;"><p>7) REST API TLS server revocation list (param_rest_api:rest_api_crl_file)</p>
<p>путь к файлу отозванных сертификатов</p></td>
<td>/var/lib/jatoba/certs/root.crt.pem</td>
</tr>
</tbody>
</table>

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image20.png" style="width:6.79755in;height:2.32487in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Screenshot from 2025-03-31 15-00-52.png" />

Рисунок 7.6 - Раздел 11 – Rest API settings

**2. С помощью изменения файла конфигурации jadog.yml.**

Файл конфигурации jadog.yml располагается по адресу:

> /usr/jatoba-<ver>/etc/jadog

Для активации и определения параметров REST API предназначена секция param_rest_api. В данную секцию вносятся следующие изменения:

> param_rest_api:
>
> rest_api_use: true
>
> rest_api_cert_file: /var/lib/jatoba/serts/srv.crt
>
> rest_api_key_file: /var/lib/jatoba/serts/srv.key
>
> rest_api_ca_file: /var/lib/jatoba/serts/root.crt
>
> rest_api_crl_file: /var/lib/jatoba/serts/root.crl.pem
>
> rest_api_listen_address: 0.0.0.0
>
> rest_api_listen_port: 54443

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image21.png" style="width:7.08618in;height:2.08589in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Screenshot from 2025-03-31 14-33-00.png" />

Рисунок 7.7 - Файл конфигурации jadog.yml

После внесения изменений необходимо сохранить файл конфигурации «jadog.yml»

Работа с файлом конфигурации подробно описана в документе «Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog»

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image1.png" style="width:0.25in;height:0.25in" /> | Работа с файлом конфигурации подробно описана в документе «Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog». |
|----|----|

Если кластер уже создан, для того чтобы внесенные в файл конфигурации «jadog.yml» изменения вступили в силу, необходимо перезагрузить сервис компонента «jaDog» при помощи команды:

> systemctl restart jadog

#### Проверочные мероприятия

Перед добавлением существующего кластера в раздел «Ландшафт» JDS требуется перепроверить настройки и собрать необходимую информацию о кластере.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image22.png)

Рисунок 7.8 – Схема настроек подключения кластера

Подключение к публичному адресу кластера со стороны JDS выполняется одной из учетных записей администраторов кластера. Соответственно должен быть сформирован клиентский сертификат в формате \*.PFX для администратора кластера. При этом все сертификаты, как клиентские, как серверные должны быть сформированы от одного ЦС.

Учетная запись администратора кластера должна быть заведена в кластере и отражаться в файле по пути /usr/jatoba-<ver>/etc/jadog/user.yml.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image23.png" style="width:6.65217in;height:1.80824in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Screenshot from 2025-04-01 14-06-51.png" />

Рисунок 7.9 – Список пользователей кластера

В конфигурационном файле аутентификации по пути /usr/jatoba-<ver>/etc/jadog/jadog_hba.cfg, должно быть разрешено подключение по SSL.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image24.png" style="width:6.66087in;height:1.46041in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Screenshot from 2025-04-01 14-00-09.png" />

Рисунок 7.10 - Конфигурационный файл аутентификации кластера

В файле состояния кластера по пути: /usr/jatoba-<ver>/etc/jadog/jadog_state.yml получить значения параметров приведенных в таблице Таблица 7.1 .

| **Описание параметра** | **Наименование параметра** | **Значение параметра примера** | **Поле во вкладке «Подключение к кластеру»** |
|:---|:---|:---|:---|
| Имя кластера | cluster_name | cluster1 | Название |
| Публичный IP-адрес | PublicIP | 10.116.102.81 | Адрес |

Таблица 7.1 – Требуемые параметры для подключения кластера в файле jadog_state.yml

В файле параметров созданного узла по пути: /usr/jatoba-<ver>/etc/jadog/jadog.yml, сверить и получить значения параметров приведенных в таблице Таблица 7.2.

<table>
<caption><p>Таблица 7.2 – Требуемые параметры для подключения кластера в файле jadog.yml</p></caption>
<colgroup>
<col style="width: 20%" />
<col style="width: 52%" />
<col style="width: 26%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Описание параметра</strong></th>
<th style="text-align: center;"><strong>Параметр и значение примера</strong></th>
<th style="text-align: center;"><strong>Поле во вкладке «Подключение к кластеру»</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">Публичный IP-адрес</td>
<td style="text-align: left;">public_address: 10.116.102.81/24</td>
<td style="text-align: left;">Адрес</td>
</tr>
<tr>
<td style="text-align: left;">Параметры REST API</td>
<td style="text-align: left;"><p>param_rest_api:</p>
<p>rest_api_use: true</p>
<p>rest_api_cert_file: /var/lib/jatoba/certs/srv.crt</p>
<p>rest_api_key_file: /var/lib/jatoba/certs/srv.key</p>
<p>rest_api_ca_file: /var/lib/jatoba/certs/root.crt</p></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: left;">Порт REST API</td>
<td style="text-align: left;">rest_api_listen_port: 54443</td>
<td style="text-align: left;">Порт REST API</td>
</tr>
</tbody>
</table>

Таблица 7.2 – Требуемые параметры для подключения кластера в файле jadog.yml

#### Добавление существующего кластера ja_Dog

Выполнив проверочные мероприятия и собрав требуемую информацию для подключения, возможно подключение кластера к разделу «Ландшафт».

Потребуется перейти в раздел «Ландшафт», во вкладку «Кластеры» и нажать кнопку «Подключиться». В открывшемся окне «Подключение к кластеру» ввести значения параметров.

В «Название» указать имя имеющегося кластера, которое указывалось при создании кластера (поле регистрозависимое), в поле «Адрес» указать IP-адрес или DNS имя любого узла кластера, в том числе Public IP, в поле «Порт Rest API» указать порт, используемый Rest API, в поле сертификат нужно указать pfx-контейнер администратора кластера.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image25.png" style="width:6.80795in;height:4.52847in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Screenshot from 2025-04-01 14-17-33.png" />

Рисунок 7.11 – Окно подключения к кластеру

Далее нажать «Тест подключения». При корректных указанных параметрах должны отобразится параметры кластера. После чего нажать «Подключиться».

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image26.png" style="width:6.79056in;height:4.52847in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\Screenshot from 2025-04-01 14-18-24.png" />

Рисунок 7.12 – Подключение к кластеру

Подключенный кластер отразится в двух разделах JDS:

- 
- 

Ландшафт;Кластеры/Jadog кластеры.В разделе «Ландшафт», при настроенном SSH-соединении будет доступно управление СУБД.

В разделе Кластеры/Jadog кластеры выполняется непосредственно управление кластером.

Функциональные возможности разделов описаны в документе «Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe».

## Раздел JDS «Анализ запросов»

Руководство по полной настройке компонента находится в документе «Поддержка мониторинга СУБД в части анализа запросов»

Подключение модуля explain к служебной СУБД по SSL не поддерживается. Подключение к целевой СУБД осуществляется по SSH.

В данном разделе рассматривается настройка системы для доступа по SSL к web-интерфейсу explain.

### Настройка на узле, отдельном от JDS

Для данного раздела понадобятся:

- 
- 
- 

серверные сертификат и ключ;установлен полные пакет explain, monitor, nginx;компонент explain, установленный и доступый по адресу http://\<адрес сервера explain\>:8080.Имя узла в данном разделе - prometheus.local.

Создать папку для сертификата и ключа командой в терминале ОС:

> mkdir /etc/nginx/ssl

Скопировать в этот каталог сертификат и ключ данного сервера.

Создать файл конфигурации сайта.

> nano /etc/nginx/conf.d/explain.https.conf

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
> ssl_certificate /etc/nginx/ssl/prometheus.local.crt;
>
> ssl_certificate_key /etc/nginx/ssl/prometheus.local.key;
>
> location / {
>
> proxy_pass http://localhost:8080;
>
> }
>
> }

Перезапустить службу nginx командой.

> systemctl restart nginx

Перейти по адресу:

> https://\<адрес сервера explain\>

#### Подключение Explain в JDS

Взаимодействие JDS с сервисом pg-explain настраивается в конфигурационном файле приложения JDS appsettings.json - в свойстве PgExplainConfig.BaseAddress указать URL по которому доступен https-сервис pg-explain, например:

> nano /opt/jds/appsettings.json
>
> …
>
> "PgExplainConfig": {
>
> "BaseAddress": "https://\<адрес сервера explain\>"
>
> },
>
> …

Адрес должен быть указан без закрывающего знака «/» - дробная черта.

Зайти в web-интерфейс JDS по логину и паролю (по умолчанию, admin - secret), пункты меню Производительность – Анализ запросов.

Перейти на вкладку Настройки, мини-вкладка Добавить. Ввести IP-адрес узла с наблюдаемой СУБД, порт (если он отличается от стандартного 5432) и отметить чекбоксы собираемой статистики, например, все 4. Сохранить.

На мини-вкладке «все» должен отобразиться добавленный узел.

### Настройка на одном узле с JDS

Используется web-сервер nginx из состава JDS. Шаги и параметры немного отличаются.

Для данного раздела понадобятся серверные сертификат и ключ.

Имя узла в данном разделе - jds.local

Создать папку для сертификата и ключа:

> mkdir /etc/nginx/ssl

Скопировать в этот каталог сертификат и ключ данного сервера

Создать файл конфигурации сайта:

> nano /etc/nginx/conf.d/explain.https.conf

Вставить текст и сохранить:

> server {
>
>     charset utf-8;
>
>     access_log  /var/log/nginx/explain.access.log;
>
>     error_log   /var/log/nginx/explain.error.log;
>
>     listen 444 ssl;
>
>     ssl_certificate           /etc/nginx/ssl/jds.local.crt;
>
>     ssl_certificate_key       /etc/nginx/ssl/jds.local.key;
>
>     location / {
>
>         proxy_pass http://localhost:8080;
>
>     }
>
> }

Перезапустить службу nginx:

> systemctl restart nginx

Проверить в браузере работу explain по https:

> https://\<адрес сервера jds-explain\>:444

Взаимодействие JDS с сервисом pg-explain настраивается в конфигурационном файле приложения JDS appsettings.json - в свойстве PgExplainConfig.BaseAddress указать URL по которому доступен https-сервис pg-explain, например:

> …
>
> "PgExplainConfig": {
>
>   "BaseAddress": "https://\<адрес сервера explain\>:444"
>
> },
>
> …

Адрес должен быть указан без закрывающего знака «/» - дробная черта.

Даже при том, что сервис explain работает на том же хосте, что и JDS, то все равно в свойстве BaseAddress нужно указывать внешний IP-адрес (не localhost), т.к. обращение к pg-explain идет не от JDS, а от браузера пользователя.

Зайти в web-интерфейс JDS по логину и паролю (по умолчанию, admin - secret), пункты меню Производительность – Анализ запросов.  
Перейти на вкладку Настройки, мини-вкладка Добавить. Ввести IP-адрес узла с наблюдаемой СУБД, порт (если он отличается от стандартного 5432) и отметить чекбоксы собираемой статистики, например, все 4. Сохранить.

На мини-вкладке «все» должен отобразиться добавленный узел. 

## Раздел JDS «Мониторинг»

В разделе описывается подключение по SSL к системе Prometheus и экспортерам.

Сертификат и ключ сервера хранятся в нескольких экземплярах, так как каждый сервис работает под своим пользователем, для которого назначены уникальные права на файл ключа.

### Система «Prometheus»

Для данного подключения понадобятся серверные ключ и сертификат, корневой сертификат.

Установить на сервер мониторинга компонент jatobaX-prometheus (подробно установка описана в документе «Руководство по настройке. Часть 22. Поддержка мониторинга СУБД».

Создать каталог для хранения сертификата сервера, ключа сервера и корневого сертификата:

> mkdir /var/lib/certs/

Скопировать в этот каталог сертификат сервера, ключ сервера и корневой сертификат

Задать права на каталог

> chown -R Prometheus /var/lib/certs/
>
> chmod 600 /var/lib/certs/prometheus.local.key

В файл сервиса jatobaX_prometheus.service добавить параметры web.config.file и web.external-url:

> nano /lib/systemd/system/jatobaX_prometheus.service
>
> …
>
> ExecStart=/usr/jatoba-X/bin/Prometheus \\
>
> --config.file \${CONF_FILE} \\
>
> --storage.tsdb.path \${STORAGE_TSDB_PATH} \\
>
> --web.console.templates=\${WEB_CONSOLE_TEMPLATES} \\
>
> --web.console.libraries=\${WEB_CONSOLE_LIBRARIES} \\
>
> --web.enable-lifecycle \\
>
> --web.config.file=/usr/jatoba-X/monitoring/default/web-config.yml \\
>
> --web.external-url=https://prometheus.local/
>
> …

Параметр web.external-url содержит доменное имя данного узла, соответствующее полю CN в сертификате (здесь - prometheus.local).

Содержимое файла web-config.yml:

> tls_server_config:
>
> cert_file: /var/lib/certs/prometheus.local.crt
>
> key_file: /var/lib/certs/prometheus.local.key
>
> client_ca_file: /var/lib/certs/root.crt
>
> client_auth_type: "RequireAndVerifyClientCert"

В файл /usr/jatoba-X/monitoring/default/prometheus.yml добавить строки:

> scrape_configs:
>
> \- job_name: "prometheus"
>
> scheme: https
>
> tls_config:
>
> ca_file: /var/lib/certs/root.crt

Перечитать файл службы и перезапустить prometheus

> systemctl daemon-reload
>
> systemctl restart jatobaX_prometheus.service
>
> systemctl status jatobaX_prometheus.service

В статусе службы (или в выводе команды journalctl -xe) должна быть строка «TLS is enabled».

С удаленного узла или локально можно проверить корректность настроек командой:

> curl --cacert ./prometheus.local.crt https://prometheus.local:9090/api/v1/label/job/values

Для дальнейшего подключения сервиса JDS к мониторингу необходимо создать pfx-контейнер, к примеру, взяв клиентские сертификат и ключ пользователя postgres:

> openssl pkcs12 -inkey postgres.key –in postgres.crt -certfile root.crt –export -out client.postgres.pfx

### Экспортер «jatoba\*_node_exporter»

Для данного подключения понадобятся серверные ключ и сертификат, корневой сертификат.

Установить на целевой узел компонент jatobaX-node-exporter (подробно установка описана в документе «Руководство по настройке. Часть 22. Поддержка мониторинга СУБД». В данном примере описана установка на узле с prometheus, используются те же сертификаты.

Создать отдельный каталог для хранения сертификата и ключа:

> mkdir /var/lib/certs_node/

Скопировать в этот каталог сертификат сервера, ключ сервера и корневой сертификат.

Задать права на каталог:

> chown -R node_exporter_usr /var/lib/certs_node/
>
> chmod 600 /var/lib/certs_node/prometheus.local.key

В файл сервиса jatobaX_node_exporter.service добавить параметр web.config.file:

> nano /lib/systemd/system/jatobaX_node_exporter.service
>
> …
>
> ExecStart=/usr/jatoba-X/bin/node_exporter \\
>
> --web.config.file=/usr/jatoba-X/monitoring/default/node-config.yml
>
> …

В каталоге /usr/jatoba-X/monitoring/default создать файл node_config.yml

> nano /usr/jatoba-X/monitoring/default/node_config.yml
>
> tls_server_config:
>
> client_ca_file: /var/lib/certs_node/root.crt
>
> cert_file: /var/lib/certs_node/prometheus.local.crt
>
> key_file: /var/lib/certs_node/prometheus.local.key
>
> client_auth_type: "RequireAndVerifyClientCert"

В файл /usr/jatoba-X/monitoring/default/prometheus.yml в раздел «# экспортер данных для Linux» добавить строки:

> …
>
> \- job_name: "node-exporter"
>
> scheme: https
>
> tls_config:
>
> ca_file: /var/lib/certs/root.crt
>
> cert_file: /var/lib/certs/prometheus.local.crt
>
> key_file: /var/lib/certs/prometheus.local.key
>
> insecure_skip_verify: false
>
> …

Перечитать и перезапустить службы:

> systemctl daemon-reload
>
> systemctl restart jatobaX_node_exporter.service
>
> systemctl restart jatobaX_prometheus.service

### Экспортер «jatoba\*_postgres_exporter»

Для данного подключения понадобятся серверные ключ и сертификат, клиентские ключ и сертификат, корневой сертификат.

Установить на целевой узел компонент jatobaX-postgres-exporter (подробно установка описана в документе «Руководство по настройке. Часть 22. Поддержка мониторинга СУБД». В данном примере описана установка на узле с prometheus, используются те же сертификаты.

Создать отдельный каталог для хранения сертификата и ключа:

> mkdir /var/lib/certs_postgres/

Скопировать в этот каталог сертификат сервера, ключ сервера, сертификат и ключ пользователя postgres_exporter, а также корневой сертификат

Задать права на каталог с терминале ОС командой:

> chown -R postgres_exporter_usr /var/lib/certs_postgres/
>
> chmod 600 /var/lib/certs_postgres/prometheus.local.key

В файл сервиса jatobaX_postgres_exporter.service добавить параметр web.config.file:

> nano /lib/systemd/system/jatobaX_postgres_exporter.service
>
> …
>
> ExecStart=/usr/jatoba-X/bin/postgres_exporter \\
>
> --web.config.file=/usr/jatoba-X/monitoring/default/postgres-config.yml
>
> …

В каталоге /usr/jatoba-X/monitoring/default создать файл postgres-config.yml командой:

> nano /usr/jatoba-X/monitoring/default/postgres-config.yml

Установить параметры:

> tls_server_config:
>
> cert_file: /var/lib/certs_postgres/prometheus.local.crt
>
> key_file: /var/lib/certs_postgres/prometheus.local.key

В файл /usr/jatoba-X/monitoring/default/prometheus.yml в раздел «# стандартный экспортер данных для PostgreSQL» добавить строки:

> …
>
> \- job_name: "postgresql"
>
> scheme: https
>
> tls_config:
>
> ca_file: /var/lib/certs/root.crt
>
> cert_file: /var/lib/certs/prometheus.local.crt
>
> key_file: /var/lib/certs/prometheus.local.key
>
> insecure_skip_verify: false
>
> …

В файле /usr/jatoba-X/monitoring/default/postgres_exporter.yml записать вместо IP-адреса доменное имя целевого узла и добавить параметры для подключения к СУБД:

> DATA_SOURCE_NAME="postgresql://postgres_exporter:Password@prometheus.local:5432/postgres?sslmode=verify-full&\\
>
> sslrootcert=/var/lib/certs_postgres/root.crt&\\
>
> sslcert=/var/lib/certs_postgres/postgres_exporter.crt&\\
>
> sslkey=/var/lib/certs_postgres/postgres_exporter.key"

Обратите внимание, что в строке подключения между кавычками не должно быть посторонних символов, в том числе нечитаемых, к примеру символ табуляции \t.

Перечитать и перезапустить службы:

> systemctl daemon-reload
>
> systemctl restart jatobaX_postgres_exporter.service
>
> systemctl restart jatobaX_prometheus.service

### Экспортера «jatoba\*_sql_exporter»

Для данного подключения понадобятся серверные ключ и сертификат, клиентские ключ и сертификат, корневой сертификат.

Установить на целевой узел компонент jatobaX-sql-exporter (подробно установка описана в документе «Руководство по настройке. Часть 22. Поддержка мониторинга СУБД». В данном примере описана установка на узле с prometheus, используются те же сертификаты.

Создать отдельный каталог для хранения сертификата и ключа:

> mkdir /var/lib/certs_sql/

Скопировать в этот каталог сертификат и ключ сервера

Задать права на каталог

> chown -R sql_exporter_usr /var/lib/certs_sql/
>
> chmod 600 /var/lib/certs_sql/prometheus.local.key

В файл sql_exporter добавить значение параметра web_config_file:

> nano /usr/jatoba-X/monitoring/default/sql_exporter
>
> …
>
> WEB_CONFIG_FILE=/usr/jatoba-X/monitoring/default/sql-config.yml
>
> …

В каталоге /usr/jatoba-X/monitoring/default создать файл sql-config.yml

> nano /usr/jatoba-X/monitoring/default/sql-config.yml
>
> tls_server_config:
>
> client_ca_file: /var/lib/certs_sql/root.crt
>
> cert_file: /var/lib/certs_sql/prometheus.local.crt
>
> key_file: /var/lib/certs_sql/prometheus.local.key
>
> client_auth_type: "RequireAndVerifyClientCert"

В файл /usr/jatoba-X/monitoring/default/prometheus.yml в раздел «# экспортер данных для SQL» добавить строки:

> …
>
> \- job_name: "sql-exporter"
>
> scheme: https
>
> tls_config:
>
> ca_file: /var/lib/certs/root.crt
>
> cert_file: /var/lib/certs/prometheus.local.crt
>
> key_file: /var/lib/certs/prometheus.local.key
>
> insecure_skip_verify: false
>
> …

В файле /usr/jatoba-X/monitoring/default/sql_exporter.yml записать вместо IP-адреса доменное имя целевого узла, а также параметры подключения: путь к корневому сертификату, серверному сертификату и серверному ключу:

> data_source_name: 'postgresql://sql_exporter:Password@prometheus.local:5432/postgres?sslmode=verify-full&sslrootcert=/var/lib/certs_sql/root.crt&sslcert=/var/lib/certs_sql/sql_exporter.crt&sslkey=/var/lib/certs_sql/sql_exporter.key'

Перезапустить службы:

> systemctl restart jatobaX_prometheus.service
>
> systemctl restart jatobaX_sql_exporter.service

### Настройка подключения в JDS

Добавить в JDS новый источник данных: Настройки - Источники данных - Добавить. Вставить полный адрес сервера prometheus.

Вставить клиентский сертификат (pfx-файл), сформированный в разделе Prometheus

Тест подключения должен пройти успешно.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image27.png" style="width:4.11319in;height:2.84931in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-18_8-25-14-1.png" />

Рисунок 9.1 – Настройки источника данных в JDS

В разделе «Мониторинг» должны отобразиться графики, автоматически созданные по метрикам из сервиса prometheus.

### Настройка «Grafana»

Для подключения источника данных по TLS понадобятся клиентские сертификат и ключ.

В настройках источника данных указать имя сервера, если был указан IP-адрес. Сервер Prometheus должен быть доступен по этому адресу с сервера Grafana.

В категории TLS Settings включить пункт "TLS Server Authentication".

Вписать имя сервера (как указано в CN), вставить содержимое клиентского сертификата и ключа в соответствующие поля.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image28.png" style="width:4.58635in;height:3.60549in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-24_16-4-20.png" />

Рисунок 9.2 – Настройки TLS – соединения в «Grafana»

В конце страницы проверить подключение кнопкой «Save & Test».

## ja_log

jaLog можно настроить 2 вида подключения по SSL: подключение jalog_agent к jalog_server и подключение jalog_server к СУБД.

В данном примере на сервере JDS (jds.local) настраивается серверная часть ja_Log, на целевом сервере (prometheus.local) – агент

В файлы /etc/hosts сервера и агента добавлены записи с доменными именами узлов (или записи настроены на DNS-сервере)

генерируются серверные и клиентские сертификаты

в процессе настройки состояние подключения можно контролировать командами:

> tail -f /usr/jatoba-X/var/log/jalog/jalog_agent.log
>
> tail -f /usr/jatoba-X/var/log/jalog/jalog_server.log

### ja_log (сервер)

в файлах pg_hba.conf и postgresql.conf СУБД записать параметры, аналогичные указанным в первом примечании.

Перезапустить СУБД командой:

> systemctl restart jatoba-X.service

установить на сервер компонент jatobaX-ja-log (подробно установка описана в документе «Компонент ja_Log. Централизованный сбор записей событий СУБД», вариант для сервера)

В файле jalog_server.conf параметр DBHost должен равняться доменному имени (здесь – jds.local)

В файле /etc/hosts сделать запись для данного сервера

> 127.0.0.1 localhost jds.local
>
> \<общий IP\> jds.local

Создать каталог для хранения сертификатов:

> mkdir /var/lib/jatoba/certs

Скопировать в этот каталог все необходимые сертификаты.

Задать права на каталог:

> chown -R postgres /var/lib/jatoba/certs
>
> chmod 600 /var/lib/jatoba/certs/ja_log.key

Так как сервис jalog_server запускается от имени пользователя postgres, можно использовать каталог с сертификатами для СУБД. В файл /usr/jatoba-X/etc/jalog/jalog_server.conf добавить параметры:

> \#подключение к БД
>
> DBAuthMethod=ssl
>
> DBTLSCertFile=/var/lib/jatoba/certs/ja_log.crt
>
> DBTLSKeyFile=/var/lib/jatoba/certs/ja_log.key
>
> DBTLSCAFile=/var/lib/jatoba/certs/root.crt
>
> DBTLSCRLFile=/var/lib/jatoba/certs/root.crl.pem
>
> DBTLSMode=verify-full
>
> \#подключение между сервером и агентом
>
> TLSCAFile=/var/lib/jatoba/certs/root.crt
>
> TLSCertFile=/var/lib/jatoba/certs/jds.local.crt
>
> TLSKeyFile=/var/lib/jatoba/certs/jds.local.key
>
> TLSCRLFile=/var/lib/jatoba/certs/root.crl.pem

Запустить службу и добавить ее в автозагрузку:

> systemctl start jalog_server.service
>
> systemctl enable jalog_server.service

С помощью функций jalog.add_agent_task и jalog.turn_ON_task в БД jalog добавить задачи логирования (подробное описание – в документации)

### ja_log (агент)

Агент устанавливается на целевую СУБД. В данном случае доменное имя целевого сервера – prometheus.local

В файлах pg_hba.conf и postgresql.conf целевой СУБД записать параметры, аналогичные указанным в первом примечании (подключение к СУБД по SSL)

Убедиться, что в файле postgresql.conf есть параметры:

> log_destination = 'csvlog'
>
> log_directory = 'log'
>
> logging_collector = on

Перезапустить СУБД командой:

> systemctl restart jatoba-X.service

Установить на сервер компонент jatobaX-ja-log (подробно установка описана в документе «Компонент ja_Log. Централизованный сбор записей событий СУБД», вариант для агента).

Создать каталог для хранения сертификатов:

> mkdir /var/lib/jatoba/certs

Скопировать в этот каталог все необходимые сертификаты.

Задать права на каталог:

> chown -R postgres /var/lib/jatoba/certs
>
> chmod 600 /var/lib/jatoba/certs/ja_log.key

В файл /usr/jatoba-X/etc/jalog/jalog_agent.conf добавить адрес сервера ja_log и параметр Hostname, совпадающий с профилем на сервере jalog (здесь – prometheus), а также параметры SSL

> IPDest=\<IP-сервера ja_log\>
>
> Hostname=prometheus
>
> RefreshActiveChecks=120
>
> TLSConnect=cert
>
> TLSAccept=cert
>
> TLSCAFile=/var/lib/jatoba/certs/root.crt
>
> TLSCertFile=/var/lib/jatoba/certs/prometheus.local.crt
>
> TLSKeyFile=/var/lib/jatoba/certs/prometheus.local.key
>
> TLSCRLFile=/var/lib/jatoba/certs/root.crl.pem

Запустить службу и добавить ее в автозагрузку:

> systemctl start jalog_agent.service
>
> systemctl enable jalog_agent.service

### JDS. Подключение ja_Log для сбора событий

Перейти в Настройки - Цели - Добавить

Заполнить настройки для подключения к серверу ja_log. В поле сертификат нужно указать бандл корневого и всех промежуточных сертификатов, созданный в разделе Создание и конвертация сертификатов. В качестве функционала выбрать «Список событий»

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image29.png" style="width:3.07496in;height:3.53774in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-18_8-46-50-1.png" />

Рисунок 10.1- Окно создание цели

Нажать на кнопку с «+» (Добавить подключение). Заполнить настройки, выбрать режим VerifyFull, способ аутентификации - «SSL-сертификат», в качестве сертификата добавить контейнер pfx указанного выше пользователя.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image30.png" style="width:3.11321in;height:4.75472in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-18_8-47-10-1.png" />

Рисунок 10.2 – Окно редактирования подключения к цели

Кнопка Тест подключения должна отобразить уведомление об успешном подключении

В разделе «Аудит и отчетность» - «Список событий» выбрать созданную цель. Должны отобразиться события за выбранный период, собранные агентом ja_log на целевом хосте.

## jaPooler

Провести стандартную установку компонента japooler на все узлы кластера, следуя шагам из документа «Компонент jaPooler. Руководство по установке и эксплуатации».

### jaPooler. Подключение по SSL

Данный способ предусматривает подключение всех пользователей СУБД через japooler ТОЛЬКО ПО СЕРТИФИКАТУ.

Для использования SSL-подключения через JaPooler к СУБД Jatoba должна быть настроена и сама СУБД (см. руководство администратора п. 6.1.2. Настройка SSL).

В pg_ident.conf для всех СУБД, которые должны работать по сертификатам, необходимо сделать сопоставление с пользователем japooler - pgbouncer:

```
# MAPNAME SYSTEM-USERNAME PG-USERNAME
```
>
> usermap pgbouncer user1
>
> usermap pgbouncer user2

В pg_hba.conf для всех пользователей СУБД, которые должны подключаться по сертификатам, должна быть соответствующая запись:

```
# TYPE DATABASE USER ADDRESS METHOD
```
>
> hostssl all user1 all cert clientcert=verify-full map=usermap
>
> hostssl all user2 all cert clientcert=verify-full map=usermap

Для сервера с japooler и пользователя pgbouncer сформировать сертификаты по инструкциям из раздела «Создание сертификатов» (сертификат сервера должен содержать CN с именем сервера или его IP-адресом), скопировать их, а также корневой сертификат (root.crt) в каталог /usr/jatoba-X/etc/pgbouncer/

создать файл конфигурации japooler - /usr/jatoba-X/etc/pgbouncer/pgbouncer.ini по примеру:

> \[databases\]
>
> postgres = host=astra1.local dbname=postgres port=5432 strategy=always_rw
>
> dbname1 = host=astra1.local dbname=dbname1 port=5432 strategy=always_rw
>
> \* = host=astra1.local port=5432 strategy=always_rw
>
> \[pgbouncer\]
>
> listen_port = 6432
>
> listen_addr = \*
>
> logfile = /usr/jatoba-X/var/log/pgbouncer/pgbouncer.log
>
> pidfile = /var/run/jatoba/pgbouncer.pid
>
> pool_mode = transaction
>
> max_client_conn = 1024
>
> default_pool_size = 16
>
> ignore_startup_parameters=idle_in_transaction_session_timeout, extra_float_digits
>
> client_tls_sslmode = verify-full
>
> client_tls_ca_file = /usr/jatoba-X/etc/pgbouncer/root.crt
>
> client_tls_key_file = /usr/jatoba-X/etc/pgbouncer/astra1.local.key
>
> client_tls_cert_file = /usr/jatoba-X/etc/pgbouncer/astra1.local.crt
>
> server_tls_sslmode = verify-full
>
> server_tls_ca_file = /usr/jatoba-X/etc/pgbouncer/root.crt
>
> server_tls_key_file = /usr/jatoba-X/etc/pgbouncer/pgbouncer.key
>
> server_tls_cert_file = /usr/jatoba-X/etc/pgbouncer/pgbouncer.crt
>
> server_tls_ciphers = fast
>
> admin_users = pgbouncer
>
> auth_type = cert
>
> auth_file = /usr/jatoba-X/etc/pgbouncer/userlist.txt

Необходимо обратить внимание, что client_tls_key_file и client_tls_cert_file – это сертификаты сервера, на котором работает japooler, а server_tls_key_file и server_tls_cert_file – это сертификаты пользователя pgbouncer, он же должен быть указать в параметре admin_user.

Параметр client_tls_sslmode и server_tls_sslmode должны быть в значении verify_full, а auth_type – cert.

В файле /usr/jatoba-X/etc/pgbouncer/userlits.txt добавить строки cо всеми пользователями, которые могут подключаться по сертификату, без указания пароля:

> "user1" ""
>
> "user2" ""

Задать права на файлы конфигурации и сертификатов:

> chown postgres: /usr/jatoba-X/etc/pgbouncer/\*
>
> chmod 600 /usr/jatoba-X/etc/pgbouncer/\*.crt
>
> chmod 600 /usr/jatoba-X/etc/pgbouncer/\*.key

Чтобы применить изменения в файлах pg_hba.conf и pg_ident.conf, необходимо перезапустить СУБД или перечитать конфигурацию, подключившись через psql:

> systemctl restart jatoba-X.service

или

> select pg_reload_conf();

Запустить сервис japoooler:

> systemct start pgbouncer.service

Проверить подключения к СУБД через jaPooler можно выполнив команды:

> psql "dbname=postgres host=astra1.local port=6432 user=user1 sslmode=verify-full sslcert=/usr/jatoba-X/ssl/user1.crt sslkey=/usr/jatoba-X/ssl/user1.key sslrootcert=/usr/jatoba-X/ssl/root.crt"

или

> psql -p 6432 -h astra1.local -U user1 "dbname=postgres sslmode=verify-full  sslcert=/usr/jatoba-X/ssl/user1.crt sslkey=/usr/jatoba-X/ssl/user1.key sslrootcert=/usr/jatoba-X/ssl/root.crt"

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image31.png" style="width:7.03701in;height:2.02239in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-20_11-8-17-1.png" />

Рисунок 11.1 – Проверка SSL-соединения

При попытке подключиться без использования сертификата будет получена ошибка:

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image32.png" style="width:7.0735in;height:0.65672in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-20_11-8-34-1.png" />

Рисунок 11.2 – Вывод с ошибкой

### jaPooler. Подключение по SSL с паролем

Данный способ предусматривает возможность подключение пользователей СУБД через japooler по паролю без сертификата, так и по сертификату с паролем. Данный метод так же обеспечивает шифрование передачи данных, но при этом всегда требует пароль, не зависимо от наличия сертификата пользователя.

Для использования SSL-подключения через jaPooler к СУБД Jatoba должна быть настроена и сама СУБД (см. руководство администратора п. 6.1.2. Настройка SSL).

В pg_ident.conf для всех СУБД, которые должны подключаться по сертификатам, необходимо сделать сопоставление с пользователем japooler – pgbouncer. Пользователей, которые будут подключаться только по паролю, указывать не обязательно.

```
# MAPNAME SYSTEM-USERNAME PG-USERNAME
```
>
> usermap pgbouncer user1
>
> usermap pgbouncer user2

В pg_hba.conf для всех пользователей СУБД, которые должны подключаться по сертификатам, должна быть соответствующие записи с методом аутентификации по сертификату и паролю:

```
# TYPE DATABASE USER ADDRESS METHOD
```
>
> hostssl all user1 all cert clientcert=verify-full map=usermap
>
> hostssl all user2 all cert clientcert=verify-full map=usermap
>
> host all user1 all md5
>
> host all user2 all md5

В postgresql.conf СУБД указать метод шифрования пароля md5, возможно также использование SCRAM-SHA-256.

> password_encryption = md5

Для сервера с japooler и пользователя pgbouncer сформировать сертификаты по инструкциям из раздела «Создание сертификатов» (сертификат сервера должен содержать CN с именем сервера или его IP-адресом), скопировать их, а также корневой сертификат (root.crt) в каталог /usr/jatoba-X/etc/pgbouncer/

Создать файл конфигурации japooler - /usr/jatoba-X/etc/pgbouncer/pgbouncer.ini по примеру:

> \[databases\]
>
> postgres = host=astra1.local dbname=postgres port=5432 strategy=always_rw
>
> dbname1 = host=astra1.local dbname=dbname1 port=5432 strategy=always_rw
>
> \* = host=astra1.local port=5432 strategy=always_rw
>
> \[pgbouncer\]
>
> listen_port = 6432
>
> listen_addr = \*
>
> logfile = /usr/jatoba-X/var/log/pgbouncer/pgbouncer.log
>
> pidfile = /var/run/jatoba/pgbouncer.pid
>
> pool_mode = transaction
>
> max_client_conn = 1024
>
> default_pool_size = 16
>
> ignore_startup_parameters=idle_in_transaction_session_timeout, extra_float_digits
>
> client_tls_sslmode = require
>
> client_tls_ca_file = /usr/jatoba-X/etc/pgbouncer/root.crt
>
> client_tls_key_file = /usr/jatoba-X/etc/pgbouncer/astra1.local.key
>
> client_tls_cert_file = /usr/jatoba-X/etc/pgbouncer/astra1.local.crt
>
> server_tls_sslmode = verify-full
>
> server_tls_ca_file = /usr/jatoba-X/etc/pgbouncer/root.crt
>
> server_tls_key_file = /usr/jatoba-X/etc/pgbouncer/pgbouncer.key
>
> server_tls_cert_file = /usr/jatoba-X/etc/pgbouncer/pgbouncer.crt
>
> server_tls_ciphers = fast
>
> admin_users = pgbouncer
>
> auth_type = md5
>
> auth_file = /usr/jatoba-X/etc/pgbouncer/userlist.txt

Необходимо обратить внимание, что client_tls_key_file и client_tls_cert_file – это сертификаты сервера, на котором работает japooler, а server_tls_key_file и server_tls_cert_file – это сертификаты пользователя pgbouncer, он же должен быть указать в параметре admin_user.

Параметры: client_tls_sslmode должен быть в значении require, server_tls_sslmode должен быть в значении verify_full, а auth_type – md5, возможно также использование SCRAM-SHA-256.

В файле /usr/jatoba-X/etc/pgbouncer/userlits.txt для всех пользователей СУБД, которые могут подключаться через JaPooler, указать имя и пароль. Пароль можно указывать как в открытом виде, так и в виде хеша md5. Принятый формат пароля, защищённого MD5: "md5" + md5(password + username).

Например, для пользователя user1 с паролем sql хэш пароля будет следующим: md5d5f86855b37ab02281443ffc4d5070a8. Так же можно использовать SCRAM-SHA-256.

> "user1" "md5d5f86855b37ab02281443ffc4d5070a8"
>
> "user2" "md5e61f39e52ac9b551616f951594f31c0e"
>
> "user3" "SCRAM-SHA-256\$4096:7OyC1VG7nzPxHiu+JNFIPg==\$IXKFrCJDF5cu1GUkJaQ/FYd300MeNRAyOqTduA/NzwA=:xqsKCIfpT+qhoZNHGySdpOlsXOvzVg1gAPckHjOYw7s="
>
> "user4" "123456Aa"
>
> "pgbouncer" "12345"

Сгенерировать MD5 хэш можно на сайте https://www.md5hashgenerator.com/ или взять из СУБД с помощью запроса, в том числе для паролей с хэш SCRAM:

> select '"'\|\|rolname\|\|'" '\|\|'"'\|\|rolpassword\|\|'"' from pg_authid where rolpassword is not NULL;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image33.png" style="width:7.01784in;height:1.91791in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-20_11-10-22-1.png" />

Рисунок 11.3 – Генерация MD5 хэш

Задать права на файлы конфигурации и сертификатов:

> chown postgres: /usr/jatoba-X/etc/pgbouncer/\*
>
> chmod 600 /usr/jatoba-X/etc/pgbouncer/\*.crt
>
> chmod 600 /usr/jatoba-X/etc/pgbouncer/\*.key

Чтобы применить изменения в файлах pg_hba.conf и pg_ident.conf, необходимо перезапустить СУБД или перечитать конфигурацию, подключившись через psql:

> systemctl restart jatoba-X.service

или

> select pg_reload_conf();

Перезапустить сервис japoooler:

> systemct restart pgbouncer.service

Проверить подключения к СУБД через jaPooler можно выполнив команды:

```
# psql "dbname=postgres host=astra1.local port=6432 user=user1 sslmode=verify-full sslcert=/usr/jatoba-X/ssl/user1.crt sslkey=/usr/jatoba-X/ssl/user1.key sslrootcert=/usr/jatoba-X/ssl/root.crt"
```
>
```
# psql -p 6432 -h astra1.local -U user1 "dbname=postgres sslmode=verify-full sslcert=/usr/jatoba-X/ssl/user1.crt sslkey=/usr/jatoba-X/ssl/user1.key sslrootcert=/usr/jatoba-X/ssl/root.crt"
```
>
```
# psql -p 6432 -h astra1.local -U user1 -d postgres
```

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image34.png" style="width:7.08607in;height:3.24627in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-20_11-10-49-1.png" />

Рисунок 11.4 – Вывод проверки подключения

При попытке подключиться пользователем, не указанным в userlist.txt, получим ошибку:

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image35.png" style="width:7.12783in;height:0.69403in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-20_11-11-5-1.png" />

Рисунок 11.5 – Вывод ошибки подключения

## ja_sync_ldap

Все процедуры раздела будут проводиться на сервере с расширением ja_sync_ldap.

Расширение устанавливается и настраивается по инструкции "Руководство по настройке. Часть 8. Синхронизация учетных записей служб каталогов и СУБД. Компонент «ja_Sync_LDAP".

Подключение рассматривается на примере службы каталогов Samba.

Для работы расширения по LDAPS требуется корневой сертификат (к примеру, rootCA.crt), сгенерированный в службе сертификатов контроллера домена. Файл необходимо скопировать в каталог на сервере с ja_sync_ldap, в данном случае /usr/share/ca-certificates/.

Данный сертификат нужно установить в системе:

> cp ~/root.crt /usr/share/ca-certificates/
>
> update-ca-certificates

или для РедОС:

> cp ~/rootCA.crt /etc/pki/ca-trust/source/anchors/
>
> update-ca-trust

В файле /etc/hosts сервера с ja_sync_ldap (или в DNS-сервере) должно быть прописано соответствие адреса и FQDN для сервера DC. Синхронизация будет происходить по этому имени.

> 127.0.0.1 localhost
>
> 127.0.1.1 ubuntu
>
> 172.19.19.31 dc.example.local

Команда ping dc.example.local должна возвращать успешный ответ.

Чтобы добавить поддержку SSL-соединения в существующий профиль синхронизации, используется команда:

> SELECT ja_sync_ldap.set_ssl_profile(\<Profile_ID\>, true);

Для указания пути к сертификату используется команда

> SELECT ja_sync_ldap.set_ca_cert_profile(\<Profile_ID\>, '\< /usr/share/ca-certificates/rootCA.crt\>');

Просмотреть профили SQL-командой:

> SELECT ja_sync_ldap.get_sync_profiles();

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image36.png" style="width:7.17899in;height:1.02239in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-18_16-15-54-1.png" />

Рисунок 12.1 – Вывод профилей синхронизации

Аналогичные настройки можно провести в интерфейсе JDS.

Добавить цель с функциональностью «LDAP-синхронизация» и пользователя для цели.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image37.png" style="width:3.09641in;height:3.51949in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-18_16-16-17-1.png" />

Рисунок 12.2 – Окно создания цели

В разделе «LDAP-синхронизация добавить новый профиль. В данном случае не нужен pfx-бандл.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image38.png" style="width:3.18609in;height:4.47856in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-18_16-16-56-1.png" />

Рисунок 12.3 – Окно редактирования профиля синхронизации

Для данного профиля добавить маппинг и нажать Синхронизация

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image39.png" style="width:3.21614in;height:3.50202in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\1\image-2025-3-18_16-17-18-1.png" />

Рисунок 12.4 - Окно редактирования маппинга

## Пример настройки SSL-соединений JDS

В приведенном ниже описании приведен пример создания цели (Target) с подключением по SSL/TLS.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;"><p>Информация, приведенная в разделе, носит рекомендательный характер и может использоваться в качестве примера или в учебных целях.</p>
<p>В ИТ - инфраструктуре рекомендуется использовать сертификаты и ключи, выпущенные Удостоверяющими центрами, программное обеспечение которых имеет сертификат соответствия ФСБ России.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Требуемое программное обеспечение

Для формирования сертификатов требуется установить версию OpenSSL не ниже 3.\*.

### Пользователи

В целевой СУБД создать тестового пользователя СУБД SQL-командой:

> CREATE ROLE "test_user" login password 'P@ssword';

### Каталог хранения сертификатов 

Созданные сертификаты и конфигурационные файлы целесообразнее хранить в отдельном каталоге. В рассматриваемом примере используется каталог /usr/share/jds/cert.

Создается каталог командой:

> sudo mkdir /usr/share/jds/cert

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image40.png" style="width:7.128in;height:1.14295in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-09-05 03-26-06.png" />

Рисунок 13.1 – Команда создания каталога

### Создание конфигурационных файлов OpenSSL

#### Конфигурационный файл OpenSSL корневого ЦС

Создать конфигурационный файл OpenSSL корневого ЦС командой:

> gedit _openssl.root.conf

Вставить в него следующие параметры:

> \[req\]
>
> distinguished_name=dn
>
> \[ dn \]
>
> \[ v3_ca \]
>
> basicConstraints=CA:TRUE,pathlen:1

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image41.png" style="width:7.11613in;height:1.664in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-09-05 06-37-44.png" />

Рисунок 13.2 – Содержание конфигурационного файла OpenSSL корневого ЦС

#### Конфигурационный файл OpenSSL промежуточного ЦС

Создать конфигурационный файл OpenSSL промежуточного ЦС командой:

> gedit _openssl.intermediate.conf

Вставить в него следующие параметры:

> \[req\]
>
> distinguished_name=dn
>
> \[ dn \]
>
> \[ v3_ca \]
>
> basicConstraints=CA:TRUE,pathlen:0

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image42.png" style="width:7.08416in;height:1.632in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-09-05 06-39-14.png" />

Рисунок 13.3 - Содержание конфигурационного файла OpenSSL промежуточного ЦС

### Создание самоподписанных сертификатов

#### Самоподписанный сертификат корневого ЦС (Root CA)

Создать ключ корневого ЦС командой:

> \#openssl req -new -nodes -text -out root.csr -keyout root.key -subj "/CN=Jatoba Root CA"

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image43.png" style="width:7.072in;height:4.12447in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-09-05 06-40-13.png" />

Рисунок 13.4 – Команда создания ключа корневого ЦС

Создать сертификат корневого ЦС командой:

> \#openssl x509 -req -in root.csr -text -days 3650 -signkey root.key -out root.crt -extfile _openssl.root.conf -extensions v3_ca

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image44.png" style="width:7.05553in;height:1.65076in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-09-05 06-41-42.png" />

Рисунок 13.5 – Команда создания сертификата корневого ЦС

#### Самоподписанный сертификат промежуточного ЦС (Root CA)

Создать ключ промежуточного ЦС командой:

> \#openssl req -new -nodes -text -out intermediate.csr -keyout intermediate.key -subj "/CN=Jatoba Intermediate CA"

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image45.png" style="width:7.02978in;height:5.26172in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-09-05 07-08-58.png" />

Рисунок 13.6 – Команда создания ключа промежуточного ЦС

Создать сертификат промежуточного ЦС командой:

> \#openssl x509 -req -in intermediate.csr -text -days 1825 -CA root.crt -CAkey root.key -CAcreateserial -out intermediate.crt -extfile _openssl.intermediate.conf -extensions v3_ca

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image46.png" style="width:7.04384in;height:1.632in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-09-05 07-09-59.png" />

Рисунок 13.7 – Команда создания сертификата промежуточного ЦС командой:

#### Самоподписанный сертификат сервера СУБД (Root CA)

Создать ключ сервера СУБД командой:

> \#openssl req -new -nodes -text -out server.csr -keyout server.key -subj "/CN=\<hostname\>"

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>В значении CN=&lt;hostname&gt; должно указываться имя хоста, на котором установлена СУБД. Получить данное имя возможно выводом команды в терминале ОС.</p>
<blockquote>
<p># hostname</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Создать сертификат сервера СУБД командой:

> \#openssl x509 -req -in server.csr -text -days 365 -CA intermediate.crt -CAkey intermediate.key -CAcreateserial -out server.crt

Создать цепочку сертификатов ЦС (CA Bundle).

Создать файл server.crt-bundle командой:

> nano server.crt-bundle

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image47.png" style="width:7.112in;height:0.90596in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 06-24-03.png" />

Рисунок 13.8 – Команда создания файла server.crt-bundle

В открывшийся файл последовательно вставить содержание сертификатов:

- 
- 
- 

server;intermediate;root.Последовательность добавления сертификатов нарушать нельзя.

В параллельной сессии терминала ОС открыть файл сертификата server.crt через команду:

> gedit server.crt

Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке Рисунок 13.9.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image48.png" style="width:7.04387in;height:3.22244in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 09-57-29.png" />

Рисунок 13.9 – Копируемая область сертификата server.crt

Вставить из буфера обмена в файл server.crt-bundle.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image49.png" style="width:7.03742in;height:3.688in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 10-11-42.png" />

Рисунок 13.10 – Вставленное содержимое сертификата server.crt

В параллельной сессии терминала ОС открыть файл сертификата промежуточного ЦС intermediate.crt через команду:

> gedit intermediate.crt

Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке Рисунок 13.11.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image50.png" style="width:6.49408in;height:3.15906in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 10-14-58.png" />

Рисунок 13.11 - Копируемая область сертификата intermediate.crt

Вставить из буфера обмена в файл server.crt-bundle.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image51.png" style="width:6.69565in;height:4.99968in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 10-16-30.png" />

Рисунок 13.12 – Вставленное содержимое сертификата intermediate.crt

В параллельной сессии терминала ОС открыть файл сертификата root.crt через команду:

> gedit root.crt

Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке Рисунок 13.13.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image52.png" style="width:6.73913in;height:3.33043in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 10-28-10.png" />

Рисунок 13.13 - Копируемая область сертификата root.crt

Вставить из буфера обмена в файл server.crt-bundle.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image53.png" style="width:6.26956in;height:4.6716in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 10-29-34.png" />

Рисунок 13.14 – Вставленное содержимое сертификата root.crt

Сохранить и закрыть файл.

Создать файл root.crt-bundle командой:

> nano root.crt-bundle

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image54.png" style="width:7.12219in;height:0.80106in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 23-30-06.png" />

Рисунок 13.15 – Команда создания файла root.crt-bundle

В открывшийся файл последовательно вставить содержание сертификатов:

- 
- 

intermediate;root.Последовательность добавления сертификатов нарушать нельзя.

В параллельной сессии терминала ОС открыть файл сертификата промежуточного ЦС intermediate.crt через команду:

> gedit intermediate.crt

Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке Рисунок 13.11.

Вставить из буфера обмена в файл root.crt-bundle.

В параллельной сессии терминала ОС открыть файл сертификата root.crt через команду:

> gedit root.crt

Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке Рисунок 13.13.

Вставить из буфера обмена в файл root.crt-bundle.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image55.png" style="width:6.12768in;height:4.48696in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 23-40-19.png" />

Рисунок 13.16 – Содержание файла root.crt-bundle

Сохранить и закрыть файл.

### Создание клиентских сертификатов 

#### Клиентский сертификат пользователя postgres

Создать ключ для клиентского сертификата пользователя postgres:

> \#openssl req -new -nodes -text -out client.postgres.csr -keyout client.postgres.key -subj "/CN=postgres"

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image56.png" style="width:6.98866in;height:3.88in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-09-06 03-03-52.png" />

Рисунок 13.17 – Команда создания ключа для клиентского сертификата postgres

Создать клиентский сертификат для пользователя postgres:

> \#openssl x509 -req -in client.postgres.csr -text -days 365 -CA intermediate.crt -CAkey intermediate.key -CAcreateserial -out client.postgres.crt

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image57.png" style="width:7.096in;height:1.66987in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-09-06 03-13-43.png" />

Рисунок 13.18 – Создание клиентского сертификата client.postgres.crt

##### Конвертация клиентского сертификата postgres в PKCS#12

Сформировать цепочку сертификатов промежуточного и корневого ЦС.

> \#type intermediate.crt \> client.postgres.crt-bundle
>
> \#type root.crt \>\> client.postgres.crt-bundle

Затем из нее, клиентского сертификата и соответствующего ему закрытого ключа создадим контейнер PFX. Пароль защиты закрытого ключа оставим пустым.

##### Создание цепочки сертификатов промежуточного и корневого ЦС для клиентского сертификата postgres

Создать файл client.postgres.crt-bundle командой:

nano client.postgres.crt-bundle

В открывшийся файл последовательно вставить содержание сертификатов:

- 
- 

intermediate;root.Последовательность добавления сертификатов нарушать нельзя.

В параллельной сессии терминала ОС открыть файл сертификата промежуточного ЦС intermediate.crt через команду:

> gedit intermediate.crt

Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке Рисунок 13.11.

Вставить из буфера обмена в файл client.postgres.crt-bundle.

В параллельной сессии терминала ОС открыть файл сертификата root.crt через команду:

> gedit root.crt

Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке Рисунок 13.13.

Вставить из буфера обмена в файл client.postgres.crt-bundle.

Сохранить и закрыть файл.

##### Создание контейнера PFX 

Из сформированной цепочки сертификатов промежуточного и корневого ЦС, клиентского сертификата postgres и соответствующего ему закрытого ключа создайте контейнер PFX командой:

> \#openssl pkcs12 -inkey client.postgres.key -in client.postgres.crt -certfile client.postgres.crt-bundle -export -out client.postgres.pfx

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image58.png" style="width:7.08681in;height:1.87524in" />

Рисунок 13.19 – Команда создания контейнера client.postgres.pfx

Пароль защиты закрытого ключа оставим пустым.

#### Клиентский сертификат пользователя JDS 

Создать ключ для клиентского сертификата пользователя JDS:

> \#openssl req -new -nodes -text -out client.jds.csr -keyout client.jds.key -subj "/CN=jds"

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image59.png" style="width:7.11553in;height:1.936in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-10 04-09-50.png" />

Рисунок 13.20 - Команда создания ключа для клиентского сертификата JDS

Создать клиентский сертификат для пользователя JDS:

> \#openssl x509 -req -in client.jds.csr -text -days 365 -CA intermediate.crt -CAkey intermediate.key -CAcreateserial -out client.jds.crt

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image60.png" style="width:7.04675in;height:1.608in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-10 04-12-05.png" />

Рисунок 13.21 – Создание клиентского сертификата client.jds.crt

##### Конвертация клиентского сертификата JDS в PKCS#12

Сформировать цепочку сертификатов промежуточного и корневого ЦС.

> type intermediate.crt \> client.jds.crt-bundle
>
> type root.crt \>\> client.jds.crt-bundle

Затем из нее, клиентского сертификата и соответствующего ему закрытого ключа создадим контейнер PFX. Пароль защиты закрытого ключа оставим пустым.

##### Создание цепочки сертификатов промежуточного и корневого ЦС для клиентского сертификата JDS

Создать файл client.jds.crt-bundle командой:

nano client.jds.crt-bundle

В открывшийся файл последовательно вставить содержание сертификатов:

- 
- 

intermediate;root.Последовательность добавления сертификатов нарушать нельзя.

В параллельной сессии терминала ОС открыть файл сертификата промежуточного ЦС intermediate.crt через команду:

> gedit intermediate.crt

Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке Рисунок 13.11.

Вставить из буфера обмена в файл client.jds.crt-bundle.

В параллельной сессии терминала ОС открыть файл сертификата root.crt через команду:

> gedit root.crt

Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке Рисунок 13.13.

Вставить из буфера обмена в файл client.jds.crt-bundle.

Сохранить и закрыть файл.

##### Создание контейнера PFX 

Из сформированной цепочки сертификатов промежуточного и корневого ЦС, клиентского сертификата postgres и соответствующего ему закрытого ключа создайте контейнер PFX командой:

> \#openssl pkcs12 -inkey client.jds.key -in client.jds.crt -certfile client.jds.crt-bundle -export -out client.jds.pfx

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image61.png" style="width:7.136in;height:1.24814in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-10 04-45-54.png" />

Рисунок 13.22 - Команда создания контейнера client.jds.pfx

Пароль защиты закрытого ключа оставим пустым.

#### Клиентский сертификат пользователя test_user

Создать ключ для клиентского сертификата пользователя test_user:

> \#openssl req -new -nodes -text -out client.test_user.csr -keyout client.test_user.key -subj "/CN=test_user"

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image62.png" style="width:7.01419in;height:3.88in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-17 01-39-36.png" />

Рисунок 13.23 - Команда создания ключа для клиентского сертификата test_user

Создать клиентский сертификат для пользователя test_user:

> \#openssl x509 -req -in client.test_user.csr -text -days 365 -CA intermediate.crt -CAkey intermediate.key -CAcreateserial -out client.test_user.crt

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image63.png" style="width:7.08197in;height:1.632in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-15 08-52-26.png" />

Рисунок 13.24 – Создание клиентского сертификата client.test_user.crt

##### Конвертация клиентского сертификата test_user в PKCS#12

Сформировать цепочку сертификатов промежуточного и корневого ЦС.

> \#type intermediate.crt \> client.postgres.crt-bundle
>
> \#type root.crt \>\> client.postgres.crt-bundle

Затем из нее, клиентского сертификата и соответствующего ему закрытого ключа создадим контейнер PFX. Пароль защиты закрытого ключа оставим пустым.

##### Создание цепочки сертификатов промежуточного и корневого ЦС для клиентского сертификата test_user

Создать файл client.test_user.crt-bundle командой:

> nano client.test_user.crt-bundle

В открывшийся файл последовательно вставить содержание сертификатов:

- 
- 

intermediate;root.Последовательность добавления сертификатов нарушать нельзя.

В параллельной сессии терминала ОС открыть файл сертификата промежуточного ЦС intermediate.crt через команду:

> gedit intermediate.crt

Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке Рисунок 13.11.

Вставить из буфера обмена в файл client.postgres.crt-bundle.

В параллельной сессии терминала ОС открыть файл сертификата root.crt через команду:

> gedit root.crt

Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке Рисунок 13.13.

Вставить из буфера обмена в файл client.test_user.crt-bundle.

Сохранить и закрыть файл.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image64.png" style="width:6.696in;height:4.87953in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-17 01-43-47.png" />

Рисунок 13.25 – Содержание файла client.test_user.crt-bundle

##### Создание контейнера PFX 

Из сформированной цепочки сертификатов промежуточного и корневого ЦС, клиентского сертификата test_user и соответствующего ему закрытого ключа создайте контейнер PFX командой:

> \#openssl pkcs12 -inkey client.test_user.key -in client.test_user.crt -certfile client.test_user.crt-bundle -export -out client.test_user.pfx

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image65.png" style="width:6.99921in;height:1.584in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-17 01-53-39.png" />

Рисунок 13.26 – Команда создания контейнера client.test_user.pfx

### Структура хранения сертификатов

В силу особенностей архитектуры установки компонента JDS, служебной и целевых СУБД, возникает необходимость в структурированном хранении сертификатов.

Сертификаты СУБД предлагается хранить в каталоге:

> /var/lib/jatoba/сerts

Для создания SSL-соединения компонента JDS с целевой и/или служебной СУБД сертификат центра сертификации (CA) root.crt-bundle, должен храниться локально, например, в корневом каталоге:

> /сerts

Далее данный сертификат будет использован для создания «Target».

Сертификаты компонента JDS должны храниться в каталоге:

> /opt/jds-cert

### Настройка СУБД для SSL-соединения

Целевая и служебная СУБД настраивается для SSL-соединения путем внесения изменений в конфигурационные файлы:

- 
- 

/var/lib/jatoba/<ver>/data/postgresql.conf;/var/lib/jatoba/<ver>/data/pg_hba.conf.В конфигурационный файл postgresql.conf внести следующие изменения:

> ssl = on
>
> ssl_ca_file = '/var/lib/jatoba/сerts root.crt-bundle'
>
> ssl_cert_file = '/var/lib/jatoba/сerts server.crt-bundle' ssl_key_file = '/var/lib/jatoba/сerts server.key'

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image66.png" style="width:7.16623in;height:1.392in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-21 03-52-48.png" />

Рисунок 13.27 – Параметры SSL-соединения в СУБД

В конфигурационный файл pg_hba.conf внести следующие изменения:

```
# TYPE DATABASE USER ADDRESS METHOD OPTIONS
```
>
> hostssl all all \<ip адрес\>/CIDR cert clientcert=verify-full hostssl all all 127.0.0.1/CIDR cert clientcert=verify-full

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image67.png" style="width:7.0853in;height:2.232in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-20 03-47-26.png" />

Рисунок 13.28 – Содержание конфигурационного файла pg_hba.conf

Скопировать в каталог/var/lib/jatoba/ файлы:

- 
- 
- 

root.crt-bundle; server.crt-bundle; server.key. Назначить владельца postgres для сертификатов:

> chown postgres:postgres /var/lib/jatoba/сerts server.key

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image68.png" style="width:7.05022in;height:1.952in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-21 04-37-22.png" />

Рисунок 13.29 – Установка прав для сертификатов

Перезапустить службу jatoba:

> systemctl restart jatoba-5

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image69.png" style="width:7.06932in;height:1.608in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-20 03-53-00.png" />

Рисунок 13.30 – Перезапуск и статус службы jatoba<ver>

На данном шаге настройка СУБД «Jatoba» для SSL-соединения закончена.

### Создание цели (Target) с SSL-соединением

Создание цели (Target) с SSL-соединением состоит из следующих шагов:

- 
- 
- 
- 
- 

Перейти в раздел «Настройки» – «Цели»;Нажать «Добавить»;Ввести название цели в поле «Наименование цели»;Ввести адрес существующего хоста в поле «Хост»  
(если целевая СУБД находится на том же хосте, что и JDS - указать localhost);В поле «Сертификат» вставить сертификат root.crt-bundle (см. п. 13.5.3 «Самоподписанный сертификат сервера СУБД (Root CA)»)Как описывалось в п. 13.7, настоящего документа, целесообразнее выбрать сертификат по пути:

> /cert/root.crt-bundle

- 
- 

### В поле "Функциональность" выбрать все функциональности.Нажать "ОК".Настройка компонента JDS для SSL-соединений

При ручной настройке компонента JDS для SSL-соединений потребуется создать каталог:

> /opt/jds-cert/

Скопировать файлы сертификатов:

- 
- 

/opt/jds-cert/client.jds.pfx;/opt/jds-cert/root.crt-bundle.В рассматриваемом примере, как описано в п. 13.3, настоящего документа сформированные сертификаты храниться в каталоге:

> /usr/share/jds/cert

Назначить владельца jds для сертификата и ключа:

```
# chown jds /opt/jds-cert/client.jds.pfx
```
>
```
# chown jds /opt/jds-cert/root.crt-bundle
```

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image70.png" style="width:7.0191in;height:1.96in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-21 07-17-47.png" />

Рисунок 13.31 – Назначение владельца jds для сертификата и ключа

Назначить минимальные права для сертификата и ключа:

```
# chmod 0600 /opt/jds-cert/client.jds.pfx
```
>
```
# chmod 0600 /opt/jds-cert/root.crt-bundle
```

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image71.png" style="width:7.13893in;height:1.864in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-21 07-20-39.png" />

Рисунок 13.32 – Установка прав на сертификат и ключ

Выполнить рестарт службы jds:

> systemctl restart jds

Открыть файл appsettings.json:

> gedit /opt/jds/appsettings.json

Исследовать строку DefaultConnection:

> "ConnectionStrings": {
>
> "DefaultConnection": "User Id=jds; Password=sql; Server=localhost; Database=jdsdb; Port=5432;"
>
> },

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image72.png" style="width:7.064in;height:1.2134in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-21 07-45-26.png" />

Рисунок 13.33 – Параметры по умолчанию в файле appsettings.json

Имеющиеся параметры по умолчанию, т.е. строку подключения к БД, изменить и установить параметры подключения пользователя JDS по SSL.

> "ConnectionStrings": {
>
> "DefaultConnection": "Server=ubuntu; Port=5432; Database=jdsdb; User Id=jds; SslMode=VerifyFull"
>
> },

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image73.png" style="width:7.08955in;height:1.496in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-21 08-40-47.png" />

Рисунок 13.34 – Строка подключения пользователя jds по SSL

Вручную добавить раздел ConnectionSslConfigurator с следующим содержанием:

> },
>
> "ConnectionSslConfigurator": {
>
> "Connections": {
>
> "DefaultConnection": {
>
> "CAFile":"/opt/jds-cert/root.crt-bundle",
>
> "ClientPfxFile":"/opt/jds-cert/client.jds.pfx",
>
> "ClientPfxPassword":null,
>
> "CheckServerCertificateRevocation":false
>
> }
>
> }
>
> }
>
> }

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image74.png" style="width:6.74026in;height:3.57708in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-10-21 08-42-54.png" />

Рисунок 13.35 - Раздел ConnectionSslConfigurator

Выполнить рестарт службы jds:

```
# systemctl restart jds
```
>
```
# systemctl status jds
```

На этом шаге настройка SSL-соединения закончено.

## Настройки СУБД и ее компонент по умолчанию, которые могут быть использованы для НСД

В данном разделе приводятся параметры компонент, хранящие пароли (ключи), и перечень настроек авторизации и аутентификации СУБД «Jatoba» и входящих в ее состав компонент, отвечающих за ИБ.

### 

### Компоненты хранящие пароли (ключи)

<table>
<caption><p>Таблица 14.1 – Перечень компонент СУБД «Jatoba» хранящие пароли</p></caption>
<colgroup>
<col style="width: 12%" />
<col style="width: 20%" />
<col style="width: 11%" />
<col style="width: 14%" />
<col style="width: 40%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Название компонента</strong></th>
<th style="text-align: center;"><strong>Конфигурационный файл</strong></th>
<th style="text-align: center;"><strong>Название параметра</strong></th>
<th style="text-align: center;"><strong>Значение по умолчанию</strong></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>fasttrun</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>fulleq</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>ja_csum</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>ja_sync_ldap</td>
<td style="text-align: left;">служебная таблица ja_sync_ldap.profile</td>
<td><p>поле таблицы:</p>
<p>pswd</p></td>
<td style="text-align: left;"><p>Значение по умолчанию отсутствует.</p>
<p>Всегда явно задается Администратором СУБД</p></td>
<td>Пароль маскируется через BASE64</td>
</tr>
<tr>
<td>activator/validator</td>
<td>postgresql.conf</td>
<td></td>
<td style="text-align: left;"></td>
<td></td>
</tr>
<tr>
<td>jcs</td>
<td>postgresql.conf</td>
<td><p>jcs.key</p>
<p>jcs.iv</p></td>
<td style="text-align: left;"><p>Значение по умолчанию отсутствует.</p>
<p>Всегда явно задается Администратором СУБД</p></td>
<td>Хранит общий ключ шифрования записей для всех таблиц / баз данных</td>
</tr>
<tr>
<td>jdv</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>BTreeKNN</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>mchar</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>online_analyze</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg_cryogen</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg_hint_plan</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg_store_plans</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg-ulid</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>plantuner</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>plspgsql</td>
<td>хранилище сертификатов (Crypto API / КриптоПро)</td>
<td>хранилище сертификатов</td>
<td style="text-align: left;"><p>Значение по умолчанию отсутствует.</p>
<p>Всегда явно задается Администратором СУБД/БД; Разработчиком БД</p></td>
<td>Для обфускации/деобфускации кода хранимых процедур расширение берет ключ из локального хранилища сертификатов</td>
</tr>
<tr>
<td>securityprofile</td>
<td style="text-align: left;">служебная таблица securityprofile.password_history</td>
<td>поле таблицы: passhistpassword</td>
<td style="text-align: left;">Значение по умолчанию отсутствует. Значения появляются по мере накопления истории паролей пользователей</td>
<td>Для нужд выполнения политик, связанных с подсчетом количества различных символов в пароле и подсчетом отличных от предыдущего пароля символов, расширение требует хранения паролей в служебной таблице в открытом виде</td>
</tr>
<tr>
<td>sql_firewall</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>fasttrun</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>fulleq</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>ja_csum</td>
<td>postgresql.conf</td>
<td>ja_csum.db_name</td>
<td>postgres</td>
<td><p>Параметр используется для фоновых процессов компонента, проверяющих контрольные суммы файлов и объектов. Фоновый процесс производит подключение к СУБД по внутренним механизмам.</p>
<p>(Для взаимодействия с внешней средой не используется)</p></td>
</tr>
<tr>
<td>ja_sync_ldap</td>
<td>конфигурация внешних подключений хранится в таблице ja_sync_ldap.profile</td>
<td><p>поля таблицы:</p>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
</ul></td>
<td>host_ipportloginpswdзначение по умолчанию отсутствует; всегда явно задается Администратором СУБД</td>
<td>Данные из указанных полей используются для установления <strong>исходящего</strong> соединения из СУБД в службу каталогов по протоколам LDAP/LDAPS</td>
</tr>
<tr>
<td>jcs</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>jdv</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>BTreeKNN</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>mchar</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>online_analyze</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg_cryogen</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg_hint_plan</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg_store_plans</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg-ulid</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>plantuner</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>plspgsql</td>
<td>postgresql.conf</td>
<td>Утилита wplpgsql. Опции командной строки -h -P -U -W/-w</td>
<td>значение по умолчанию отсутствует; всегда явно задается Администратором СУБД/БД; Разработчиком БД</td>
<td><p>Данный компонент может использоваться удаленно от СУБД (например, на стороне разработчика БД) и устанавливает <strong>исходящее</strong> соединение по протоколу libpq.</p>
<p><strong>SSL соединение не поддерживается</strong></p></td>
</tr>
<tr>
<td>securityprofile</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>sql_firewall</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

Таблица 14.1 – Перечень компонент СУБД «Jatoba» хранящие пароли

### 

### Перечень настроек авторизации и аутентификации СУБД «Jatoba» и входящих в ее состав компонент, отвечающих за ИБ

<table>
<caption><p>Таблица 14.2 – Перечень настроек авторизации и аутентификации СУБД «Jatoba» и входящих в ее состав компонент, отвечающих за ИБ</p></caption>
<colgroup>
<col style="width: 12%" />
<col style="width: 15%" />
<col style="width: 20%" />
<col style="width: 12%" />
<col style="width: 40%" />
</colgroup>
<thead>
<tr>
<th><strong>Компонент</strong></th>
<th><strong>Конфигурационный файл</strong></th>
<th><strong>Настройка</strong></th>
<th><strong>Значение по умолчанию</strong></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>hba_file</td>
<td>pg_hba.conf</td>
<td><p>Задаёт файл конфигурации для аутентификации по сетевым узлам.</p>
<p><strong>Параметр задаётся при старте сервера и нельзя изменить</strong></p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>config_file</td>
<td>postgresql.conf</td>
<td><p>Задаёт основной файл конфигурации сервера.</p>
<p><strong>Параметр задаётся при старте сервера и нельзя изменить</strong></p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ident_file</td>
<td>pg_ident.conf</td>
<td><p>Задаёт файл конфигурации для сопоставлений имён пользователей.</p>
<p><strong>Параметр задаётся при старте сервера и нельзя изменить</strong></p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>authentication_timeout</td>
<td>1m</td>
<td><p>Максимальное время, за которое должна произойти аутентификация.</p>
<p>Если это значение задаётся без единиц измерения, оно считается заданным в миллисекундах</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>password_encryption</td>
<td>scram-sha-256</td>
<td>Алгоритм шифрования пароля (scram-sha-256 или md5), пароль сохраняется в виде хеша</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>krb_server_keyfile</td>
<td>/usr/local/pgsql/etc/krb5.keytab</td>
<td>Задаёт расположение файла ключей Kerberos для данного сервера</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>krb_caseins_user</td>
<td>Off</td>
<td>Обработка имен пользователей GSSAPI с/без учёта регистра</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>db_user_namespace</td>
<td>Off</td>
<td><p>Соотносит имена пользователей к базам данных.</p>
<p><strong>Параметр задаётся при старте сервера и нельзя изменить</strong></p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>SSL</td>
<td>Off</td>
<td><p>Задает тип подключения SSL.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_ca_file</td>
<td></td>
<td><p>Задаёт имя файла, содержащего сертификаты центров сертификации (ЦС) для SSL-сервера.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_cert_file</td>
<td>server.crt</td>
<td><p>Задаёт имя файла, содержащего сертификат этого SSL-сервера.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_key_file</td>
<td>server.key</td>
<td><p>Задаёт имя файла, содержащего закрытый ключ SSL-сервера.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_crl_file</td>
<td></td>
<td><p>Задаёт имя файла, содержащего список отзыва клиентских сертификатов (CRL, Certificate Revocation List) для SSL.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_ciphers</td>
<td>HIGH:MEDIUM:+3DES:!aNULL</td>
<td><p>Задаёт список наборов шифров SSL, которые могут применяться для SSL-соединений. Этот параметр действует только для подключений TLS версии 1.2 и ниже.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_crl_dir</td>
<td></td>
<td><p>Задаёт директорию, содержащего списки отзыва клиентских сертификатов.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_prefer_server_ciphers</td>
<td>On</td>
<td><p>Определяет, должны ли шифры SSL сервера предпочитаться клиентским.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_ecdh_curve</td>
<td></td>
<td><p>Задаёт имя кривой для использования при обмене ключами ECDH. Эту кривую должны поддерживать все подключающиеся клиенты.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_min_protocol_version</td>
<td>TLSv1.2</td>
<td><p>Задаёт минимальную версию протокола SSL/TLS.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_max_protocol_version</td>
<td></td>
<td><p>Задаёт максимальную версию протокола SSL/TLS.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_dh_params_file</td>
<td></td>
<td><p>Задаёт имя файла с параметрами алгоритма Диффи-Хеллмана. Использование нестандартных параметров DH защищает от атаки, рассчитанной на взлом хорошо известных встроенных параметров DH.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>ssl_passphrase_command_supports_reload</td>
<td>Off</td>
<td><p>Этот параметр определяет, будет ли заданная параметром ssl_passphrase_command команда, запрашивающая пароль, также вызываться при перезагрузке конфигурации, если для файла ключа требуется пароль.</p>
<p>Этот параметр можно задать только в postgresql.conf или в командной строке при запуске сервера</p></td>
</tr>
<tr>
<td>Jatoba</td>
<td>pg_hba.conf</td>
<td>hostssl all all &lt;ip/mask&gt; cert verify-full</td>
<td></td>
<td>Указывает, что все внешние соединения должны быть по SSL из конкретной подсети</td>
</tr>
<tr>
<td>Jatoba</td>
<td>pg_hba.conf</td>
<td>hostssl replication jadog_user &lt;ip/mask&gt; cert verify-full</td>
<td></td>
<td>Указывает, что репликация для пользователя jadog_user должна быть по SSL с конкретной подсети</td>
</tr>
<tr>
<td>Jatoba</td>
<td>pg_hba.conf</td>
<td>local all postgres scram-sha-256</td>
<td></td>
<td></td>
</tr>
<tr>
<td>jaPooler</td>
<td>pgbouncer.ini</td>
<td>conffile</td>
<td></td>
<td><blockquote>
<p>Показывает расположение текущего файла конфигурации. При изменении этого параметра компонент будет использовать другой файл конфигурации после команды RELOAD</p>
</blockquote></td>
</tr>
<tr>
<td>jaPooler</td>
<td>pgbouncer.ini</td>
<td>auth_type</td>
<td>scram-sha-256</td>
<td><blockquote>
<p>Тип аутентификации:</p>
</blockquote>
<ul>
<li></li>
<li></li>
</ul>
<p>cert – Клиент должен подключаться по соединению TLS с действительным клиентским сертификатом;md5 – Применять проверку пароля по хеш MD5. Этот метод аутентификации выбирается по умолчанию. При установке md5, если пароль пользователя задан для метода SCRAM, то применяется проверка по алгоритму SCRAM;</p>
<ul>
<li></li>
</ul>
<blockquote>
<p>scram-sha-256 - Применять проверку пароля по алгоритму SCRAM-SHA-256;Зашифрованные SCRAM пароли могут использоваться только для проверки пароли клиентов, но не для входа на сервер. Чтобы использовать SCRAM для серверных подключений, пароли необходимо задать открытым текстом.</p>
</blockquote>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul></td>
</tr>
<tr>
<td>plain – Пароли хранятся в открытом виде;trust – Аутентификация не производится;any – Аутентификация не производится, имя настраивается в строке подключения;hba – Аутентификация по файлу pg_hba.conf;pam - Для проверки подлинности пользователей используется инфраструктура PAM. Не совместим c использованием директивы auth_userjaPooler</td>
<td>pgbouncer.ini</td>
<td>auth_hba_file</td>
<td></td>
<td><blockquote>
<p>Файл конфигурации HBA (аналог pg_hba.conf в Jatoba), который используется, когда параметр auth_type равен hba</p>
</blockquote></td>
</tr>
<tr>
<td>jaPooler</td>
<td>pgbouncer.ini</td>
<td>auth_file</td>
<td></td>
<td><blockquote>
<p>Имя файла аутентификации, из которого будут загружаться имена и пароли пользователей.</p>
</blockquote></td>
</tr>
<tr>
<td>jaPooler</td>
<td>pgbouncer.ini</td>
<td>auth_user</td>
<td></td>
<td><blockquote>
<p>Имя пользователя для аутентификации в БД. Если установлен параметр auth_user, то любой пользователь, не указанный в auth_file, будет запрошен с помощью запроса auth_query из системного каталога pg_shadow с использованием auth_user.</p>
<p>Для прямого доступа к pg_shadow требуются права администратора</p>
</blockquote></td>
</tr>
<tr>
<td>jaPooler</td>
<td>pgbouncer.ini</td>
<td>auth_query</td>
<td>SELECT usename, passwd FROM pg_shadow WHERE usename=$1</td>
<td><blockquote>
<p>Запрос для извлечения пароля пользователя из базы данных.</p>
<p>Для прямого доступа к pg_shadow требуются права администратора.</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_connection: conn_string. В рамках него passfile</td>
<td></td>
<td><blockquote>
<p>Параметр используется для передачи пути файла с паролем</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_connection: conn_string. В рамках него sslrootcert</td>
<td></td>
<td><blockquote>
<p>Параметр используется для настройки SSL соединения между jadog и СУБД и отвечает за путь до CA сертификата</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_connection: conn_string. В рамках него sslcert</td>
<td></td>
<td><blockquote>
<p>Параметр используется для настройки SSL соединения между jadog и СУБД и отвечает за путь до сертификата клиента</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_connection: conn_string. В рамках него sslkey</td>
<td></td>
<td><blockquote>
<p>Параметр используется для настройки SSL соединения между jadog и СУБД и отвечает за путь до закрытого ключа клиента</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_connection: conn_string. В рамках него sslmode</td>
<td></td>
<td><blockquote>
<p>Параметр используется для настройки SSL соединения между jadog и СУБД и отвечает за режим работы SSL</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_connection: conn_string. В рамках него sslcrl</td>
<td></td>
<td><blockquote>
<p>Параметр используется для настройки SSL соединения между jadog и СУБД и отвечает за путь до списка отзывов сертификатов</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_connection: conn_string. В рамках него user</td>
<td></td>
<td><blockquote>
<p>Определяет имя пользователя при работе jadog с СУБД</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_connection: conn_string. В рамках него dbname</td>
<td></td>
<td><blockquote>
<p>Определяет имя базы данных при работе jadog с СУБД</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_ssl:ssl</td>
<td>false</td>
<td><blockquote>
<p>Включает режим защищенных соединений jadog-jadog и jadog – jadog_ctl</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_ssl:ssl_ca_file</td>
<td></td>
<td><blockquote>
<p>Параметр используется для настройки SSL соединения jadog-jadog и jadog – jadog_ctl и отвечает за путь до CA сертификата</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_ssl: ssl_cert_file</td>
<td></td>
<td><blockquote>
<p>Параметр используется для настройки SSL соединения jadog-jadog и jadog – jadog_ctl и отвечает за путь до сертификата клиента</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_ssl: ssl_crl_file</td>
<td></td>
<td><blockquote>
<p>Параметр используется для настройки SSL соединения jadog-jadog и jadog – jadog_ctl и отвечает за путь до списка отзыва</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_ssl: ssl_key_file</td>
<td></td>
<td><blockquote>
<p>Параметр используется для настройки SSL соединения jadog-jadog и jadog – jadog_ctl и отвечает за путь до закрытого ключа клиента</p>
</blockquote></td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>param_jadog: interconnect_user</td>
<td>admin</td>
<td><blockquote>
<p>Определяет имя пользователя для подключения jadog к jadog</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>DefaultConnection</td>
<td>Нет</td>
<td><p>Строка подключения к служебной БД в формате «ключ=значение», которая может содержать пароль, в том случае, если выбран способ аутентификации по логину и паролю.</p>
<blockquote>
<p>Находится в группе «ConnectionStrings».<br />
Настраивается скриптом jds-config. py</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>CAFile</td>
<td>Нет</td>
<td><p>Содержит полный путь к «CA Bundle» в формате X.509 (CRT), содержащем сертификаты, используемые для подписи серверного сертификата СУБД при настройке аутентификации по SSL-сертификату:</p>
<ul>
<li></li>
<li></li>
</ul>
<p>сертификат корневого УЦ;сертификат(ы) промежуточного (промежуточных) УЦ.Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<blockquote>
<p>Настраивается скриптом jds-config.py</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>ClientPfxFile</td>
<td>Нет</td>
<td><p>Содержит полный путь к контейнеру в формате PKCS#12 (PFX), содержащем:</p>
<ul>
<li></li>
<li></li>
<li></li>
</ul>
<p>клиентский сертификат;закрытый ключ к клиентскому сертификату;сертификаты, используемые для подписи клиентского сертификата (вся цепочка, включая сертификат корневого УЦ).Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<blockquote>
<p>Настраивается скриптом jds-config.py</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>ClientPfxPassword</td>
<td>Нет</td>
<td><p>Содержит пароль, в том случае, если сгенерированный клиентский сертификат, указанный в настройке «ClientPfxFile», защищён паролем.</p>
<p>Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<blockquote>
<p>Настраивается скриптом jds-config.py</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>CheckServerCertificateRevocation</td>
<td>True</td>
<td><p>Признак «Проверять серверный сертификат по списку отозванных сертификатов»<br />
Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<blockquote>
<p>Настраивается скриптом jds-config.py</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>Key</td>
<td>UUID-значение</td>
<td><blockquote>
<p>Начальное значение токена безопасности<br />
Находится в группе «JwtTokenConfig»</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>Issuer</td>
<td>URL сайта JDS в инфраструктуре, с указанием протокола доступа (HTTPS)</td>
<td><blockquote>
<p>Параметр «Издатель» токена безопасности<br />
Находится в группе «JwtTokenConfig»</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>Audience</td>
<td>URL сайта JDS в инфраструктуре, с указанием протокола доступа (HTTPS)</td>
<td><blockquote>
<p>Параметр «Получатель» токена безопасности<br />
Находится в группе «JwtTokenConfig»</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>AccessTokenExpiration</td>
<td>480</td>
<td><blockquote>
<p>Время действия токена безопасности, в секундах.<br />
После истечения этого времени токен автоматически обновляется.<br />
Находится в группе «JwtTokenConfig»</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>RefreshTokenExpiration</td>
<td>960</td>
<td><blockquote>
<p>Время действия токена безопасности, в секундах.<br />
После истечения этого времени токен автоматически обновляется<br />
Находится в группе «JwtTokenConfig»</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>BaseAddress</td>
<td>Нет</td>
<td><blockquote>
<p>URL сервиса Explain, развернутого в инфраструктуре, включая протокол</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>UseSsl</td>
<td>False</td>
<td><blockquote>
<p>Признак «Использовать SSL-сертификат для аутентификации на jaDog»</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>CAFile</td>
<td>Нет</td>
<td><blockquote>
<p>Путь к файлу корневого CA-сертификата для подключения к jaDog</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>CertFile</td>
<td>Нет</td>
<td><blockquote>
<p>Путь к файлу клиентского сертификата для подключения к jaDog</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>CrlFile</td>
<td>Нет</td>
<td><blockquote>
<p>Путь к файлу списка отозванных сертификатов, используемых для проверки при к jaDog</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>KeyFile</td>
<td>Нет</td>
<td><blockquote>
<p>Путь к файлу закрытого ключа клиентского сертификата для подключения к jaDog</p>
</blockquote></td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>SslEngine</td>
<td>Нет</td>
<td><blockquote>
<p>Имя криптографического модуля</p>
</blockquote></td>
</tr>
<tr>
<td>JDS doctor</td>
<td>appsettings.json</td>
<td>DefaultConnection</td>
<td>Нет</td>
<td><p>Строка подключения к служебной БД в формате «ключ=значение», которая может содержать пароль, в том случае, если выбран способ аутентификации по логину и паролю.</p>
<blockquote>
<p>Находится в группе «ConnectionStrings».<br />
Настраивается скриптом jds-config.py</p>
</blockquote></td>
</tr>
<tr>
<td>JDS doctor</td>
<td>appsettings.json</td>
<td>CAFile</td>
<td>Нет</td>
<td><p>Содержит полный путь к «CA Bundle» в формате X.509 (CRT), содержащем сертификаты, используемые для подписи серверного сертификата СУБД при настройке аутентификации по SSL-сертификату:</p>
<ul>
<li></li>
<li></li>
</ul>
<p>сертификат корневого УЦ;сертификат(ы) промежуточного (промежуточных) УЦ.Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<blockquote>
<p>Настраивается скриптом jds-config.py</p>
</blockquote></td>
</tr>
<tr>
<td>JDS doctor</td>
<td>appsettings.json</td>
<td>ClientPfxFile</td>
<td>Нет</td>
<td><p>Содержит полный путь к контейнеру в формате PKCS#12 (PFX), содержащем:</p>
<ul>
<li></li>
<li></li>
<li></li>
</ul>
<p>клиентский сертификат;закрытый ключ к клиентскому сертификату;сертификаты, используемые для подписи клиентского сертификата (вся цепочка, включая сертификат корневого УЦ).Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<blockquote>
<p>Настраивается скриптом jds-config.py</p>
</blockquote></td>
</tr>
<tr>
<td>JDS doctor</td>
<td>appsettings.json</td>
<td>ClientPfxPassword</td>
<td>Нет</td>
<td><p>Содержит пароль, в том случае, если сгенерированный клиентский сертификат, указанный в настройке «ClientPfxFile», защищён паролем.</p>
<p>Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<blockquote>
<p>Настраивается скриптом jds-config.py</p>
</blockquote></td>
</tr>
<tr>
<td>JDS doctor</td>
<td>appsettings.json</td>
<td>CheckServerCertificateRevocation</td>
<td>True</td>
<td><p>Признак «Проверять серверный сертификат по списку отозванных сертификатов»<br />
Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<blockquote>
<p>Настраивается скриптом jds-config.py</p>
</blockquote></td>
</tr>
<tr>
<td>keepalived</td>
<td>keepalived.conf</td>
<td>script</td>
<td></td>
<td><blockquote>
<p>в секции vrrp_script pg_check указан путь для файла проверки</p>
<p>смотрим строку подключения в этом скрипте</p>
</blockquote></td>
</tr>
<tr>
<td>ja_Hipe_Cluster</td>
<td>postgresql.conf</td>
<td>citus.local_hostname</td>
<td></td>
<td><blockquote>
<p>Устанавливает hostname при соединении самим с собой (необходимо при настройке кластера по SSL)</p>
</blockquote></td>
</tr>
<tr>
<td>ja_Hipe_Cluster</td>
<td>SQL</td>
<td>pg_dist_authinfo</td>
<td></td>
<td><blockquote>
<p>Смотрим строку подключения в таблице для каждого узла</p>
</blockquote></td>
</tr>
<tr>
<td>pgAudit</td>
<td></td>
<td></td>
<td></td>
<td><blockquote>
<p>Авторизация и аутентификация не требуется</p>
</blockquote></td>
</tr>
<tr>
<td>pgSQL-HTTP</td>
<td></td>
<td></td>
<td></td>
<td><blockquote>
<p>Авторизация и аутентификация не требуется</p>
</blockquote></td>
</tr>
<tr>
<td>PostGIS</td>
<td></td>
<td></td>
<td></td>
<td><blockquote>
<p>Авторизация и аутентификация не требуется</p>
</blockquote></td>
</tr>
<tr>
<td>TDS_FDW</td>
<td>SQL параметры</td>
<td>servername</td>
<td></td>
<td><blockquote>
<p>IP Адрес или DNS имя MS SQL сервера</p>
</blockquote></td>
</tr>
<tr>
<td>TDS_FDW</td>
<td>SQL параметры</td>
<td>port</td>
<td></td>
<td><blockquote>
<p>Порт MS SQL сервера</p>
</blockquote></td>
</tr>
<tr>
<td>TDS_FDW</td>
<td>SQL параметры</td>
<td>Database</td>
<td></td>
<td><blockquote>
<p>Имя БД MS SQL сервера</p>
</blockquote></td>
</tr>
<tr>
<td>TDS_FDW</td>
<td>SQL параметры</td>
<td>Dbuse</td>
<td>0</td>
<td><blockquote>
<p>0 – подключение идет к базе данных, указанной в параметр database</p>
<p>1 – подключение идет к базе данных, полученной вызовом dbuse()</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td>Аутентификация осуществляется посредством JWT токена через Pomerium</td>
<td>GF_AUTH_SIGNOUT_REDIRECT_URL</td>
<td></td>
<td><blockquote>
<p>Подписывает пользователей из Pomerium, когда они выходят из Grafana</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td>переменная окружения</td>
<td>GF_AUTH_JWT_ENABLED</td>
<td>disable</td>
<td><blockquote>
<p>Включает JWT аутентификацию</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td>переменная окружения</td>
<td>GF_AUTH_JWT_HEADER_NAME</td>
<td></td>
<td><blockquote>
<p>Указывает на имя HTTP заголовка, в котором расположен JWT токен</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td>переменная окружения</td>
<td>GF_AUTH_JWT_EMAIL_CLAIM</td>
<td></td>
<td><blockquote>
<p>связывает email_claim в JWT с электронной почтой пользователя Grafana</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td>переменная окружения</td>
<td>GF_AUTH_JWT_JWK_SET_URL</td>
<td></td>
<td><blockquote>
<p>Указывает на URL-адрес с ключом подписи для проверки</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td>переменная окружения</td>
<td>GF_AUTH_JWT_CACHE_TTL</td>
<td>60m</td>
<td><blockquote>
<p>Время жизни JWT токена</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td>defaults.ini</td>
<td>disable_initial_admin_creation</td>
<td>false</td>
<td><blockquote>
<p>Отключает создание пользователя admin при первом запуске</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td>defaults.ini</td>
<td>admin_user</td>
<td>Admin</td>
<td><blockquote>
<p>Административный пользователь</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td>defaults.ini</td>
<td>admin_password</td>
<td>admin</td>
<td><blockquote>
<p>Административный пароль</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td>defaults.ini</td>
<td>secret_key</td>
<td></td>
<td><blockquote>
<p>Для подписи некоторых параметров источника данных, таких как секреты и пароли, используется формат шифрования AES-256 в режиме CFB</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td>defaults.ini</td>
<td>disable_gravatar</td>
<td>false</td>
<td><blockquote>
<p>Использование Gravatar для картинок (аватарок) профилей</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td>defaults.ini</td>
<td>data_source_proxy_whitelist</td>
<td></td>
<td><blockquote>
<p>Определяет белый список разрешенных IP-адресов или доменов с портами, которые будут использоваться в URL-адресах источников данных с помощью прокси-сервера Grafana Data Source</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td>enabled = true</td>
<td></td>
<td><blockquote>
<p>Активирует авторизацию по токену</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td>allow_sign_up = true</td>
<td></td>
<td><blockquote>
<p>Указывает, что всегда должна быть подпись токеном</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td>name = Auth0</td>
<td></td>
<td><blockquote>
<p>Задает имя авторизирующего сервера</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td>client_id = &lt;client id&gt;</td>
<td></td>
<td><blockquote>
<p>Идентификатор клиента</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td>client_secret = &lt;client secret&gt;</td>
<td></td>
<td><blockquote>
<p>Секретный ключ, выданный авторизационным центром</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td>auth_url = https://&lt;domain&gt;/authorize</td>
<td></td>
<td><blockquote>
<p>URL адрес запроса на авторизацию</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td>token_url = https://&lt;domain&gt;/oauth/token</td>
<td></td>
<td><blockquote>
<p>URL адрес проверки токена</p>
</blockquote></td>
</tr>
<tr>
<td>grafana</td>
<td><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td>api_url = https://&lt;domain&gt;/userinfo</td>
<td></td>
<td><blockquote>
<p>URL адрес доступа в API</p>
</blockquote></td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td><p>tls_server_config:</p>
<p>cert_file: prometheus.crt</p>
<p>key_file: prometheus.key</p></td>
<td></td>
<td><blockquote>
<p>Закрытый ключ и сертификат для SSL</p>
</blockquote></td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td>client_auth_type : RequireAndVerifyClientCert</td>
<td>NoClientCert</td>
<td><blockquote>
<p>Показывает режим аутентификации</p>
</blockquote></td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td>min_version</td>
<td>TLS12</td>
<td><blockquote>
<p>Минимальная версия TLS протокола</p>
</blockquote></td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td>max_version</td>
<td>TLS13</td>
<td><blockquote>
<p>Максимальная версия TLS протокола</p>
</blockquote></td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td><p>prefer_server_cipher_suites:</p>
<p>true</p></td>
<td>true</td>
<td><blockquote>
<p>Выбор предпочтение шифров:</p>
</blockquote>
<ul>
<li></li>
<li></li>
</ul></td>
</tr>
<tr>
<td>true – используются шифры сервера;false – клиентаprometeus</td>
<td>web.yml</td>
<td>curve_preferences</td>
<td></td>
<td>Наименование ECDHE кривой</td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td><p>basic_auth_users:</p>
<p>&lt;string&gt;: &lt;secret&gt;</p></td>
<td></td>
<td><blockquote>
<p>Базовая HTTP авторизация,</p>
<p>Имя пользователя : base64(hash)</p>
</blockquote></td>
</tr>
<tr>
<td>node_exporter</td>
<td>config.yml</td>
<td><p>cert_file: /etc/node_exporter/ssl/node_exporter.crt</p>
<p>key_file: /etc/node_exporter/ssl/node_exporter.key</p></td>
<td></td>
<td><blockquote>
<p>Закрытый ключ и сертификат для SSL</p>
</blockquote></td>
</tr>
<tr>
<td>node_exporter</td>
<td>config.yml</td>
<td><p>basic_auth_users:</p>
<p>prometheus: "хеш пароля"</p></td>
<td></td>
<td><blockquote>
<p>Настройка базовой HTTP авторизации</p>
</blockquote></td>
</tr>
<tr>
<td>windows_exporter</td>
<td>web.yml tls_server_config:</td>
<td>cert_file: &lt;полный путь до файла сертификата&gt;</td>
<td></td>
<td><blockquote>
<p>Сертификат для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>windows_exporter</td>
<td>tls_server_config:</td>
<td>key_file: &lt;полный путь до файла ключа&gt;</td>
<td></td>
<td><blockquote>
<p>Закрытый ключ для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>windows_exporter</td>
<td>tls_server_config:</td>
<td>cert: строка сертификата в формате pem</td>
<td></td>
<td><blockquote>
<p>Сертификат для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>windows_exporter</td>
<td>tls_server_config:</td>
<td>key: строка ключа в формате pem</td>
<td></td>
<td><blockquote>
<p>Закрытый ключ для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>windows_exporter</td>
<td>tls_server_config:</td>
<td>client_ca: строка сертификата в формате pem</td>
<td></td>
<td><blockquote>
<p>Сертификат центра авторизации</p>
</blockquote></td>
</tr>
<tr>
<td>windows_exporter</td>
<td>tls_server_config:</td>
<td>client_ca_file: &lt;полный путь до файла сертификата&gt;</td>
<td></td>
<td></td>
</tr>
<tr>
<td>windows_exporter</td>
<td>tls_server_config:</td>
<td>client_auth_type: RequireAndVerifyClientCert</td>
<td>NoClientCert</td>
<td>Если нужна аутентификация по сертификату, то указать RequireAndVerifyClientCert</td>
</tr>
<tr>
<td>windows_exporter</td>
<td>tls_server_config:</td>
<td><p>prefer_server_cipher_suites:</p>
<p>true</p></td>
<td>true</td>
<td><blockquote>
<p>Выбор предпочтение шифров:</p>
</blockquote>
<ul>
<li></li>
<li></li>
</ul></td>
</tr>
<tr>
<td>true – используются шифры сервера;false – клиентаsql_exporter</td>
<td>web.yml tls_server_config:</td>
<td>cert_file: &lt;полный путь до файла сертификата&gt;</td>
<td></td>
<td><blockquote>
<p>Сертификат для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>key_file: &lt;полный путь до файла ключа&gt;</td>
<td></td>
<td><blockquote>
<p>Закрытый ключ для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>cert: строка сертификата в формате pem</td>
<td></td>
<td><blockquote>
<p>Сертификат для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>key: строка ключа в формате pem</td>
<td></td>
<td><blockquote>
<p>Закрытый ключ для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>client_ca: строка сертификата в формате pem</td>
<td></td>
<td><blockquote>
<p>Сертификат центра авторизации</p>
</blockquote></td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>client_ca_file: &lt;полный путь до файла сертификата&gt;</td>
<td></td>
<td></td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>client_auth_type: RequireAndVerifyClientCert</td>
<td>NoClientCert</td>
<td>Если нужна аутентификация по сертификату, то указать RequireAndVerifyClientCert</td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td><p>prefer_server_cipher_suites:</p>
<p>true</p></td>
<td>true</td>
<td><blockquote>
<p>Выбор предпочтение шифров:</p>
</blockquote>
<ul>
<li></li>
<li></li>
</ul></td>
</tr>
<tr>
<td>true – используются шифры сервера;false – клиентаpostgre_exporter</td>
<td>web.yml tls_server_config:</td>
<td>cert_file: &lt;полный путь до файла сертификата&gt;</td>
<td></td>
<td><blockquote>
<p>Сертификат для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>key_file: &lt;полный путь до файла ключа&gt;</td>
<td></td>
<td><blockquote>
<p>Закрытый ключ для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>cert: строка сертификата в формате pem</td>
<td></td>
<td><blockquote>
<p>Сертификат для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>key: строка ключа в формате pem</td>
<td></td>
<td><blockquote>
<p>Закрытый ключ для TLS соединения</p>
</blockquote></td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>client_ca: строка сертификата в формате pem</td>
<td></td>
<td><blockquote>
<p>Сертификат центра авторизации</p>
</blockquote></td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>client_ca_file: &lt;полный путь до файла сертификата&gt;</td>
<td></td>
<td></td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>client_auth_type: RequireAndVerifyClientCert</td>
<td>NoClientCert</td>
<td>Если нужна аутентификация по сертификату, то указать RequireAndVerifyClientCert</td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td><p>prefer_server_cipher_suites:</p>
<p>true</p></td>
<td>true</td>
<td><blockquote>
<p>Выбор предпочтение шифров:</p>
</blockquote>
<ul>
<li></li>
<li></li>
</ul></td>
</tr>
<tr>
<td>true – используются шифры сервера;false – клиентаjalog</td>
<td>Jalog_server.conf</td>
<td>DBAuthMethod</td>
<td>password</td>
<td>Определяет способ подключения jalog_server к СУБД (ssl или password)</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>DBTLSCertFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_server и СУБД и отвечает за путь до сертификата клиента</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>DBTLSKeyFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_server и СУБД и отвечает за путь до закрытого ключа клиента</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>DBTLSCAFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_server и СУБД и отвечает за путь до CA сертификата</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>DBTLSCRLFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_server и СУБД и отвечает за путь до списка отзывов сертификатов</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>DBTLSMode</td>
<td>verify-full</td>
<td>Параметр используется для настройки SSL соединения между jalog_server и СУБД и отвечает за режим проверки SSL сертификатов</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>UseSchannel</td>
<td></td>
<td>Только для Windows. Параметр используется для настройки ssl соединения между jalog_server и jalog_agent и отвечает за использование пакета безопасности из ОС (Secure Channel)</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>EngineName</td>
<td></td>
<td>Только для Linux. Параметр используется для настройки SSL соединения между jalog_server и jalog_agent и отвечает за название криптографического OpenSSL движка</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>TLSCAFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_server и jalog_agent и отвечает за путь до CA сертификата</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>TLSCRLFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_server и jalog_agent и отвечает за путь до списка отзывов сертификатов</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>TLSCertFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_server и jalog_agent и отвечает за путь до сертификата клиента</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>TLSKeyFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_server и jalog_agent и отвечает за путь до закрытого ключа клиента</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>TLSConnect</td>
<td>unencrypted</td>
<td>Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за способ подключения jalog_agent к jalog_server (unencrypted или cert)</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>TLSAccept</td>
<td>unencrypted</td>
<td>Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за способ приёма входящих подключений (unencrypted или cert)</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>UseSchannel</td>
<td></td>
<td>Только для Windows. Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за использование пакета безопасности из ОС (Secure Channel)</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>EngineName</td>
<td></td>
<td>Только для Linux. Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за название криптографического OpenSSL движка</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>TLSCAFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за путь до CA сертификата</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>TLSCRLFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за путь до списка отзывов сертификатов</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>TLSCertFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за путь до сертификата клиента</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>TLSKeyFile</td>
<td></td>
<td>Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за путь до закрытого ключа клиента</td>
</tr>
<tr>
<td>pgBadger</td>
<td>-</td>
<td><p>--ssh-program ssh</p>
<p>Указывает путь к используемому SSH-клиенту.</p>
<p>По умолчанию: ssh.</p>
<p>--ssh-port порт</p>
<p>Указывает порт SSH для подключения.</p>
<p>По умолчанию: 22.</p>
<p>--ssh-user имя_пользователя</p>
<p>Указывает имя пользователя для подключения.</p>
<p>По умолчанию: имя пользователя, запускающего pgbadger.</p>
<p>--ssh-identity имя_файла</p>
<p>Указывает путь к файлу идентификации.</p>
<p>--ssh-timeout секунды</p>
<p>Задаёт тайм-аут в секундах на случай сбоя SSH-соединения.</p>
<p>По умолчанию: 10.</p>
<p>--ssh-option параметры</p>
<p>Задаёт список параметров для SSH-соединения.</p></td>
<td></td>
<td>Данный компонент может использоваться для анализа удаленных журналов</td>
</tr>
<tr>
<td>fasttrun</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>fulleq</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>ja_csum</td>
<td>postgresql.conf</td>
<td>ja_csum.db_name</td>
<td>postgres</td>
<td><p>Параметр используется для фоновых процессов компонента, проверяющих контрольные суммы файлов и объектов. Фоновый процесс производит подключение к СУБД по внутренним механизмам.</p>
<p><strong>Для взаимодействия с внешней средой не используется</strong></p></td>
</tr>
<tr>
<td>ja_sync_ldap</td>
<td>конфигурация внешних подключений хранится в таблице ja_sync_ldap.profile</td>
<td><p>поля таблицы:</p>
<p>host_ip</p>
<p>port</p>
<p>login</p>
<p>pswd</p></td>
<td>значение по умолчанию отсутствует; всегда явно задается Администратором СУБД</td>
<td>Данные из указанных полей используются для установления <strong>исходящего</strong> соединения из СУБД в службу каталогов по протоколам LDAP/LDAPS</td>
</tr>
<tr>
<td>jcs</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>jdv</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>BTreeKNN</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>mchar</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>online_analyze</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg_cryogen</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg_hint_plan</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg_store_plans</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>pg-ulid</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>plantuner</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>plspgsql</td>
<td>postgresql.conf</td>
<td>Утилита wplpgsql. Опции командной строки -h -P -U -W/-w</td>
<td>значение по умолчанию отсутствует; всегда явно задается Администратором СУБД/БД; Разработчиком БД</td>
<td><p>Данный компонент может использоваться удаленно от СУБД (например, на стороне разработчика БД) и устанавливает <strong>исходящее</strong> соединение по протоколу libpq</p>
<p><strong>SSL соединение не поддерживается</strong></p></td>
</tr>
<tr>
<td>securityprofile</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>sql_firewall</td>
<td>postgresql.conf</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

Таблица 14.2 – Перечень настроек авторизации и аутентификации СУБД «Jatoba» и входящих в ее состав компонент, отвечающих за ИБ

## Реагирование на инциденты ИБ

СУБД «Jatoba» обеспечивает противодействие угрозам, представленным в «Банке данных угроз безопасности информации» на официальном сайте https://bdu.fstec.ru/threat ФСТЭК России и в частности, представленным в таблице Таблица 15.1.

Таблица 15.1 – Сопоставление угроз безопасности с мерами безопасности

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 66%" />
<col style="width: 19%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Угроза</strong></th>
<th style="text-align: center;"><strong>Описание</strong></th>
<th style="text-align: center;"><strong>Меры ГИС</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><a href="https://bdu.fstec.ru/threat/ubi.031">УБИ. 031</a></td>
<td style="text-align: left;">Угроза использования механизмов авторизации для повышения привилегий</td>
<td style="text-align: left;"><p>УПД.1,</p>
<p>УПД.2(1), УПД.4,</p>
<p>УПД.5,</p>
<p>УПД.6,</p>
<p>УПД.6(1)</p></td>
</tr>
<tr>
<td style="text-align: left;"><a href="https://bdu.fstec.ru/threat/ubi.086">УБИ. 086</a></td>
<td style="text-align: left;">Угроза несанкционированного изменения аутентификационной информации</td>
<td style="text-align: left;">УПД.1(1, 2)</td>
</tr>
<tr>
<td style="text-align: left;"><a href="https://bdu.fstec.ru/threat/ubi.088">УБИ. 088</a></td>
<td style="text-align: left;">Угроза несанкционированного копирования защищаемой информации</td>
<td style="text-align: left;"><p>ИАФ.1, ИАФ.4,</p>
<p>УПД.1,</p>
<p>УПД.1(1, 2),</p>
<p>УПД.2, УПД.2(1),</p>
<p>УПД.4, УПД.9,</p>
<p>РСБ.3, РСБ.6, РСБ.7, РСБ.8</p></td>
</tr>
<tr>
<td style="text-align: left;"><a href="https://bdu.fstec.ru/threat/ubi.090">УБИ. 090</a></td>
<td style="text-align: left;">Угроза несанкционированного создания учетной записи пользователя</td>
<td style="text-align: left;"><p>УПД.1,</p>
<p>УПД.1 (1, 2), УПД.2,</p>
<p>УПД.4,</p>
<p>УПД.9</p></td>
</tr>
<tr>
<td style="text-align: left;"><a href="https://bdu.fstec.ru/threat/ubi.091">УБИ. 091</a></td>
<td style="text-align: left;">Угроза несанкционированного удаления защищаемой информации</td>
<td style="text-align: left;">УПД.2</td>
</tr>
<tr>
<td style="text-align: left;"><a href="https://bdu.fstec.ru/threat/ubi.100">УБИ. 100</a></td>
<td style="text-align: left;">Угроза обхода некорректно настроенных механизмов аутентификации</td>
<td style="text-align: left;">ИАФ.1, ИАФ.4</td>
</tr>
<tr>
<td style="text-align: left;"><a href="https://bdu.fstec.ru/threat/ubi.122">УБИ. 122</a></td>
<td style="text-align: left;">Угроза повышения привилегий</td>
<td style="text-align: left;">УПД.1, УПД.2(1), УПД.4</td>
</tr>
<tr>
<td style="text-align: left;"><a href="https://bdu.fstec.ru/threat/ubi.124">УБИ. 124</a></td>
<td style="text-align: left;">Угроза подделки записей журнала регистрации событий</td>
<td style="text-align: left;">РСБ.6, РСБ.7</td>
</tr>
<tr>
<td style="text-align: left;"><a href="https://bdu.fstec.ru/threat/ubi.037">УБИ. 037</a></td>
<td style="text-align: left;">Угроза исследования приложения через отчеты об ошибках</td>
<td style="text-align: left;">РСБ.7</td>
</tr>
<tr>
<td style="text-align: left;"><a href="https://bdu.fstec.ru/threat/ubi.114">УБИ. 114</a></td>
<td style="text-align: left;">Угроза переполнения целочисленных переменных</td>
<td style="text-align: left;">ОЦЛ.7</td>
</tr>
<tr>
<td style="text-align: left;"><a href="https://bdu.fstec.ru/threat/ubi.158">УБИ. 158</a></td>
<td style="text-align: left;">Угроза форматирования носителей информации</td>
<td style="text-align: left;"><p>ОДТ.4,</p>
<p>ОДТ.5</p></td>
</tr>
</tbody>
</table>

Организация менеджмента инцидентов информационной безопасности должна соответствовать семейству стандартов СМИБ состоящих из взаимосвязанных стандартов, опубликованных или разрабатываемых, и содержащих несколько ключевых структурных компонентов. К числу этих компонентов относятся:

- 
- 
- 

нормативные стандарты, устанавливающие требования к СМИБ (ИСО/МЭК 27001);требования к органам по сертификации, осуществляющим сертификацию на соответствие ИСО/МЭК 27001 (ИСО/МЭК 27006);дополнительные требования, связанные с внедрением СМИБ в конкретных отраслях (ИСО/МЭК 27009).Противодействие угрозам ИБ состоит из совокупности технических и организационных мероприятий.

К основным, критичным инцидентам ИБ, связанных с эксплуатацией СУБД «Jatoba» относятся:

- 
- 

нарушение целостности и последующая блокировка пользователей СУБД;неудачные попытки входа в СУБД.Для контроля над работой компонентов «ja_CSum», «SecurityProfile» и в целом СУБД, целесообразно воспользоваться функциональными возможностями раздела «Уведомления» компонента пользовательского веб-интерфейса для администраторов «Jatoba data safe».

### Нарушение целостности и последующая блокировка пользователей СУБД

Нарушение целостности СУБД будет зафиксировано в журнале аудита СУБД:

- 
- 

событием компонента «ja_CSum» с идентификатором 115182106 и сообщением «Целостность объекта нарушена»;событием компонента «SecurityProfile» с идентификатором 103118105 и сообщением «Блокирование учетной записи».В зависимости от требований внутренних регламентов оповестить должностных лиц, участие которых предусмотрено в расследовании и устранении последствий инцидента ИБ.

В журналах аудита СУБД, SIEM и в прочих доступных источниках, установить причину нарушения целостности СУБД.

Установив причину, следует восстановить исходное состояние СУБД.

При восстановлении работоспособности СУБД, порядок действий должен быть следующим:

1)  
2)  

Войти в СУБД от имени и с правами привилегированного пользователя «postgres» или пользователя, имеющего атрибут «Superuser».Перевести компонент «ja_CSum» в режим информирования «permissive» (см. п. 3.7.1 Руководства по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum»).Включение режима информирования выполняется SQL-командой:

> ALTER SYSTEM set ja_csum.action_mode = 'permissive';

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image75.png" style="width:7.04808in;height:2.14151in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-07 08-13-07.png" />

Рисунок 15.1 – Включение режима информирования «permissive»

3)  

Отключить режим периодической проверки (см. п. 3.5 Руководства по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum»).Отключение режима периодической проверки выполняется SQL-командой:

> SELECT ja_csum.check_auto_off();

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image76.png" style="width:7.05462in;height:1.86087in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-06 23-39-08.png" />

Рисунок 15.2 – SQL-команда отключения режима периодической проверки

4)  
5)  
6)  
7)  

Внести требуемые изменения для приведения СУБД в первоначальное состояние.При необходимости перезагрузить СУБД.Войти в СУБД от имени и с правами привилегированного пользователя «postgres» или пользователя, имеющего атрибут «Superuser».Обновить файлы с контрольными суммами (см. п. 3.2 Руководства по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum»).Список контролируемых файлов создается SQL-командой:

> SELECT ja_csum.fill_list();

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image77.png" style="width:6.9876in;height:1.77358in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-05 03-37-33.png" />

Рисунок 15.3 – Команда создания файла с контрольными суммами

8)  

Перевести компонент «ja_CSum» в режим блокирования «enforcing» (см. п. 3.7.2 Руководства по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum»).Установка режима блокирования «enforcing» выполняется SQL-командой:

> ALTER SYSTEM set ja_csum.action_mode = 'enforcing';

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image78.png" style="width:7.05717in;height:2.12264in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-07 08-18-33.png" />

Рисунок 15.4 – Включение режима блокирования «enforcing»

9)  

Включить режим периодической проверки (см. п. 3.5 Руководства по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum»).Включение режима периодической проверки выполняется SQL-командой:

> SELECT ja_csum.check_auto_on();

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image79.png" style="width:6.94496in;height:1.76108in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-06 23-37-57.png" />

Рисунок 15.5 – SQL-команда включения режима периодической проверки

10) 

> Установить запрет на создание пользовательских функций.Запрет на создание пользовательских функций устанавливается SQL-командой:
>
> ALTER SYSTEM SET securityprofile.user_function_creation=off;

Затем выполнить перезагрузку конфигурации СУБД:

> select pg_reload_conf();

11) 

Выполнить проверку блокировки пользователей (см. п. 3.5 Руководства администратора).Вывод наличия блокировки пользователей выполняется SQL-командой:

> SELECT securityprofile.is_users_suspended ('db_name');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image80.png" style="width:7.0717in;height:1.54734in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 12-06-52.png" />

Рисунок 15.6 – Вывод состояния блокировки пользователей в БД

12) 

Выполнить проверку блокировки пользователей (см. п. 6.2.2.2 Руководства администратора).Вывод наличия блокировки администраторов БД выполняется SQL-командой:

> SELECT securityprofile.is_admins_suspended ('db_name');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image81.png" style="width:7.14087in;height:1.66087in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 13-18-58.png" />

Рисунок 15.7 – Вывод состояния блокировки администраторов БД

13) 

Вывести информацию о статусе блокировок всех пользователей СУБД (см. п.п. 6.2.1.1, 6.2.1.3.1 Руководства администратора).Вывод информацию о статусе блокировок всех пользователей СУБД выполняется SQL-командой:

> SELECT \* from securityprofile.is_locked ('');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image82.png" style="width:7.10254in;height:1.71549in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-25 07-00-57.png" />

Рисунок 15.8 – Вывод списка состояния пользователей

14) 
15) 

Принять решение о разблокировке пользователей или групп пользователей и администраторов СУБД.Разблокировать группу пользователей с игнорированием ошибки (см. п. 6.2.1.2.6 Руководства администратора).Разблокировка пользователей СУБД, вне зависимости от имеющихся ошибок, выполняется SQL-командой:

> SELECT securityprofile.resume_users_noerror ('db_name', 0);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image83.png" style="width:7.16176in;height:1.27358in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-15 12-21-21.png" />

Рисунок 15.9 – Выполнение команды разблокировки пользователей

16) 

Разблокировать группу администраторов БД с игнорированием ошибки (см. п. 6.2.1.3.6 Руководства администратора).Разблокировка администраторов БД, вне зависимости от имеющихся ошибок выполняется SQL-командой:

> SELECT securityprofile.resume_admins_seconds('db_name', 0);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image84.png" style="width:7.22622in;height:1.67708in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-15 12-18-07.png" />

Рисунок 15.10 – Выполнение команды разблокировки пользователей

На данном шаге восстановление работоспособности СУБД закончено.

### Превышение попыток количества неудачных попыток входа в СУБД

Инцидент ИБ блокировки пользователя СУБД в связи превышение попыток количества неудачных попыток входа в СУБД, может быть следствием:

- 
- 

попытки перебора паролей для взлома СУБД;неаккуратности пользователя СУБД.В зависимости от требований внутренних регламентов необходимо оповестить должностные лица, участие которых предусмотрено в расследовании и устранении последствий инцидента ИБ.

В журналах аудита СУБД, SIEM и в прочих доступных источниках, установить причину блокировки пользователя СУБД.

Блокирование пользователя СУБД будет зафиксировано в журнале аудита событием компонента «SecurityProfile» с идентификатором 103118105 и сообщением «Блокирование учетной записи».

В ходе проверки важно обратить внимание на следующие аспекты:

- 
- 
- 
- 

является учетная запись технической (служебной) или пользовательской;в случае пользовательской УЗ необходимо установить кому присвоена и статус заявки на разблокирование УЗ в ServiceDesk;совпадает имя заявителя и присвоенный ему IP-адрес с IP-адресом компьютера, с которого велось подключение к СУБД;какие привилегии, атрибуты предоставлены учетной записи и в какие группы входит.Когда анализ выясненных обстоятельств покажет отсутствие попыток взлома СУБД, для восстановления УЗ порядок действий должен быть следующим:

1)  

Проверить установленные блокировки УЗ.Для проверки факта блокировки и времени, в течение которого она будет действовать, администратору СУБД необходимо выполнить следующую команду:

> SELECT \* from securityprofile.is_locked('имя_пользователя');

Вывод информации о всех пользователях выполняется SQL-командой:

> SELECT \* from securityprofile.is_locked ('');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image82.png" style="width:7.02042in;height:1.69565in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-25 07-00-57.png" />

Рисунок 15.11 – Вывод списка состояния пользователей

2)  

Разблокировать УЗ.Для разблокировки учетных записей пользователей администратору СУБД необходимо выполнить следующую команду:

> SELECT securityprofile.unlock_account ('имя_пользователя', bigint);

Примечание: bigint – задержка, с которой будет выполнено снятие блокировки в днях.

> SELECT securityprofile.unlock_account('test', 0);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/sec_guide/media/image85.png" style="width:6.53933in;height:1.61518in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-25 06-57-44.png" />

Рисунок 15.12 – SQL-команда блокирования пользователя

 

## 

## 

### 

<span id="_Toc195610205" class="anchor"><span id="_Toc195610206" class="anchor"></span></span>Установка службы JDS.PasDoctor**Строка подключения к служебной БД JDS**

Для корректной работы службы ей требуется подключение к служебной БД «JDS». Строка подключения находится в файле «appsettings.json» и определяется ключом «ConnectionStrings:DefaultConnection».

**Установка в Windows**

Для установки службы Windows рекомендуется использовать утилиту «sc.exe». Следует запускать службу под учетной записью «NetworkService».

Пример вызова «sc.exe» для установки службы с параметрами:

- 
- 
- 
- 

> имя службы «JDS.Doctor»;автоматический запуск;учетная запись «Network Service»;отображаемое имя «JDS Doctor».sc.exe create JDS.Doctor start= auto binpath= C:\Full\Path\To\JDS.PasDoctor.exe obj= "NT AUTHORITY\NetworkService" DisplayName= "JDS Doctor"

Вторая команда устанавливает описание для службы.

> sc.exe description JDS.Doctor "Служба для поиска и исправления проблем с производительностью и безопасностью СУБД. Для управления службой используйте раздел Jatoba Data Safe 'Производительность - Проблемы и решения'."

**Файлы журналов в ОС Windows**

По умолчанию служба сохраняет журналы в папке C:\ProgramData\JDS\logs. Никаких действий по созданию папки или назначению прав доступа не требуется.

**Установка в ОС Linux**

Для примера используется Ubuntu 23.04. В других дистрибутивах процедура установки может отличаться.

- 

> создать пользователя, под которым будет работать служба:sudo useradd –s /usr/sbin/nologin jds

- 

> создать папку для журналов (логов), назначить ей владельца и права:sudo mkdir /var/log/jds
>
> sudo chown jds:jds /var/log/jds
>
> sudo chmod 744 /var/log/jds

В некоторых дистрибутивах при создании пользователя «jds» группа «jds» не создаётся.

Для просмотра группы по умолчанию служит команда «groups jds».

- 

> создать сервис-файл /etc/systemd/system/jds-doctor.service со следующим содержимым:**\[Unit\]**
>
> Description=JATOBA DATA SAFE Doctor
>
> **\[Service\]**
>
> WorkingDirectory=/opt/jds-doctor
>
> ExecStart=/opt/jds-doctor/JDS.PasDoctor
>
> Restart=always
>
> RestartSec=10
>
> SyslogIdentifier=jds-doctor
>
> User=jds
>
> **\[Install\]**
>
> WantedBy=multi-user.target

- 

> разрешить и запустить сервис:sudo systemctl daemon-reload
>
> sudo systemctl enable jds-doctor
>
> sudo systemctl start jds-doctor

**Файлы журналов в Linux**

По умолчанию служба сохраняет журналы (логи) в папке /var/log/jds/. Папка должна быть предварительно создана, должен быть изменен владелец и назначены права (см. секцию «Установка в Linux»).

## 

| <span id="_Toc195610207" class="anchor"></span>Перечень сокращенийDDL | – | Data Definition Language — язык описания данных |
|----|----|----|
| DML | – | Data Manipulation Language — язык манипулирования данными |
| SQL | – | Structured Query Language — язык структурированных запросов |
| БД | – | База данных |
| ОЗУ | – | Оперативное запоминающее устройство |
| ОС | – | Операционная система |
| СУБД | – | Система управления базами данных |
| ЭВМ |  | Электронно-вычислительная машина |
| ЗПС | – | Замкнутая программная среда в ОС Astra Linux Special Edition 1.6 Смоленск — это механизм авторизации на основании контроля целостности файлов с использованием проверки ЭЦП, реализованный в модуле ядра ОС disgsig_verif |

