---
title: Руководство по безопасности
toc_max_heading_level: 4
---

## АННОТАЦИЯ

Данный документ представляет собой руководство по установке и настройке целевых и служебных хостов, а также создание SSH и SSL-соединений между компонентами СУБД «Jatoba».

Руководство по установке содержит следующие разделы по настройке SSH и SSL соединений:

В Приложении [1](#приложение-1) описана установка и работа службы JDS.Doctor.

:::info Дополнительная информация
Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра .x, 6 для других версий все шаги выполняются аналогично, разница состоит в именах директорий.

Например, СУБД «Jatoba» версии 5.x по умолчанию устанавливается в директорию:

–	ОС Windows – «C:\Program Files\GIS\Jatoba\5\bin»;

–	ОС Linux – «/usr/jatoba-5/bin».
:::



## ЭТАПЫ РАЗВЕРТЫВАНИЯ СУБД НА ХОСТАХ

Документ предназначен для администраторов СУБД с целью корректного формирования экосистемы СУБД «Jatoba».

В частности, использование SSH и SSL соединений. Схема подключений представлена на рисунке [1.1](#_bookmark1).

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image11_.png)

<span id="_bookmark1" class="anchor"></span>Рисунок 1.1 – Схема SSH и SSL соединений

Имеющиеся механизмы развертывания компонентов входящих в состав СУБД «Jatoba» позволяют использовать:

- ручную установку;

- автоматизированную установку.

Ручная установка описана в документе «Руководство по установке».

### Первый этап. Топология хостов СУБД

На первом этапе следует определить хосты для СУБД, их назначение и основные параметры.

### Второй этап. Установка СУБД на хостах

В зависимости от типа хоста устанавливается СУБД. Как правило, для стандартных хостов СУБД используется инсталлятор


```
jatoba.sh install
```


Описание установки СУБД инсталлятором описана в документе «Руководство по установке».

Для узлов кластера с ролью Slave используется инсталлятор СУБД с


```
jatoba.sh install_server
```


Описание установки СУБД инсталлятором описана в документе

### Третий этап. Установка JDS

На данном этапе на хосте с JDS устанавливается служебная СУБД и непосредственно сам компонент. Предпочтительный способ установки – инсталлятор JDS.

### Четвертый этап. Подготовка хостов. Настройка SSH соединений

Этап включает в себя:

- подготовку хостов для целевых СУБД;

- настройку SSH соединений.

### Пятый этап. Подготовка SSL подключений

В зависимости от внутренних требований, может быть настроена SSL аутентификация как для пользователей СУБД, так и для компонентов СУБД.

### Шестой этап. Установка компонентов СУБД

После завершения конфигурирования служебного и целевых хостов СУБД «Jatoba» целесообразно установить требуемые компоненты.

## НАСТРОЙКА SSH-СОЕДИНЕНИЙ JDS

В приведенном ниже описании приведен пример:

- создания SSH-соединения между хостами;

- подключения целевой СУБД к компоненту JDS.

В качестве примера используются 2 сервера с конфигурацией приведенной в таблице

[2.1](#_bookmark9)

<span id="_bookmark9" class="anchor"></span>Таблица 2.1 – Конфигурация сети стенда

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 17%" />
<col style="width: 18%" />
<col style="width: 15%" />
<col style="width: 18%" />
<col style="width: 24%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th>
<p><strong>Имя сервера</strong></p>
</th>
<th style="text-align: center;"><strong>IP-адрес</strong></th>
<th style="text-align: center;">
<p><strong>Маска подсети</strong></p>
</th>
<th>
<p><strong>Компонент</strong></p>
</th>
<th>
<p><strong>Назначение хоста</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>u602doc-jds01</td>
<td style="text-align: center;">10.116.102.41/24</td>
<td style="text-align: center;">255.255.255.0</td>
<td>JDS</td>
<td>Служебная</td>
</tr>
<tr>
<td>2</td>
<td>u602doc-pgp01</td>
<td style="text-align: center;">10.116.102.49/24</td>
<td style="text-align: center;">255.255.255.0</td>
<td>Pg_profile</td>
<td>Целевая СУБД</td>
</tr>
</tbody>
</table>

Хостах должны быть установлены СУБД и на хосте JDS установлен непосредственно компонент.

### Создание пользователя ОС jdscontrol на целевом хосте

Создать пользователя jdscontrol ОС командой в терминале ОС:


```
useradd -b /var/lib -m -s /usr/bin/bash jdscontrol
```


Задать пароль:

```
passwd jdscontrol
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image114.png)



Рисунок 2.1 – Создание пользователя jdscontrol

### Копирование скрипта на целевой хост

С после установки компонента JDS на служебном хосте будет находиться скрипт в каталоге /opt/jds-scripts/assign_control_rights.sh

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image115.jpeg)

Рисунок 2.2 – Расположение скрипта настройки SSH

Данный скрипт вручную надо скопировать на хост целевой СУБД (10.116.102.49).

Поместить в домашний каталог /root.

Установить права:

- чтение для владельца;

- запись для владельца;

- запуск/поиск для владельца;

- чтение для группы;

- запись/поиск для группы;

- чтение для других;

- запуск/поиск для других.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image116.png)

Рисунок 2.3 – Установка прав на скрипт через коммандер 

Либо командой:


```
cd /root
chmod +x assign_control_rights.sh
```


### Выполнение скрипта на целевом хосте

Команда запуска скрипта имеет синтаксис Скрипт имеет собственный синтаксис запуска:


```
./assign_control_rights.sh <имя сервиса СУБД> <путь к папке DATA> <имя пользователя>
```


От имени и с правами привилегированного пользователя root выполнить команду в терминале ОС:


```
./assign_control_rights.sh jatoba-6 /var/lib/jatoba/6/data/ jdscontrol
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image117.png)

Рисунок 2.4 – Выполнение скрипта

### Создание домашнего каталога пользователя JDS на служебном хосте

Пользователь JDS был создан в процессе установки компонента и на данном шаге требуется создание для него домашней директории.

Создать папку пользователя, под которым работает JDS и назначить права, возможно командами:


```
#sudo -s
#mkdir /home/jds 
#chown jds /home/jds
```


### Создание ключа SSH для пользователя JDS на служебном хосте

Создание ключей SSH должно проводится от имени и с правами пользователя ОС jds. Для этого требуется переключиться на пользователя jds:


```
sudo -u jds /usr/bin/bash
```


Создать ключ SSH для пользователя jds командой:


```
ssh-keygen
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image118.png)

Рисунок 2.5 – Создание SSH ключей

:::info Дополнительная информация
При создании SSH ключей не устанавливается пароль доступа к ним
:::

### Передача ключа SSH на целевую СУБД

На целевом хосте должна быть запущена служба SSH. Проверка выполняется командой:


```
systemctl status ssh
```


Если SSH не установлен, то требуется установить его командой:


```
apt install ssh
```


Далее созданный ключ SSH для пользователя jds должны быть переданы на хост целевой СУБД, для формирования SSH-соединения командой:


```
ssh-copy-id <jdscontrol@10.116.102.49>
```


Ответить «yes» прописью на вывод:

> Are you sure you want to continue connecting (yes/no/[fingerprint])?

Ввести пароль пользователя jdscontrol созданного на целевом хосте СУБД при выводе:

```
<jdscontrol@10.116.102.49> password:
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image119.png)



Рисунок 2.6 – Копирование SSH-ключа на целевой хост СУБД 

Проверить подключение командой:


```
ssh <jdscontrol@10.116.102.49>
```

:::info Дополнительная информация
При подключении по SSH протоколу не должен запрашиваться пароль
:::

После подключения проверьте операции над службой jatoba<ver>.

### Подключение JDS к целевой СУБД (SSH и PASSWORD)

:::info Дополнительная информация
Данный пункт частично дублирует описание настройки подключения к целевой СУБД данной в руководстве
:::

На данном этапе возможно установить соединение между JDS и целевой СУБД. При этом используются SSH – соединение и метод аутентификации в СУБД «PASSWORD». Это позволит убедиться в корректности настройки и управляемости СУБД. В последствии

возможно сменить метод аутентификации и подключаться к целевой СУБД по SSL протоколу.

В разделе «Ландшафт» Должна быть создана иерархическая структура объектов.

- Хост;

- СУБД.

#### Хост

В параметрах хоста целевой СУБД указываются параметры приведенные в таблице [2.2](#_bookmark18).

<span id="_bookmark18" class="anchor"></span>Таблица 2.2 – Устанавливаемые параметры для хоста

| **Параметр**                  | **Значение**                           |
|-------------------------------|----------------------------------------|
| Тип элемента: \*              | Хост (подстанавливается автоматически) |
| IP-адрес или FQDN-имя \*      | 10.116.102.49                          |
| Имя учётной записи \*         | jdscontrol                             |
| Порт для управления по SSH \* | 22                                     |
| Описание                      |                                        |

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image27_.png)

Рисунок 2.7 – Окно настройки хоста целевой СУБД в JDS

#### Настройка конфигурационного файла pg_hba.conf

Перед настройками СУБД, во вкладке «Правила доступа» должны быть добавлены параметры подключения с удаленного хоста. В рассматриваемом примере это хост JDS IP 10.116.102.41.

В конфигурационном файле pg_hba.conf должна быть строка, как минимум, разрешающая подключения из подсети.

Например


```
host all all 10.116.102.0/24 md5
```


Иначе компонент выведет ошибку и не позволит установить соединение с целевой СУБД.

#### СУБД

В параметрах СУБД указываются параметры приведенные в таблице [2.3](#_bookmark21) <span id="_bookmark21" class="anchor"></span>Таблица 2.3 – Устанавливаемые параметры для СУБД

<table>
<colgroup>
<col style="width: 53%" />
<col style="width: 46%" />
</colgroup>
<thead>
<tr>
<th><strong>Параметры</strong></th>
<th><strong>Значения</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Элемент-родитель</td>
<td>10.116.102.49</td>
</tr>
<tr>
<td>Тип элемента</td>
<td><p>СУБД</p>
<p>(устанавливается автоматически)</p></td>
</tr>
<tr>
<td>Название СУБД</td>
<td>(устанавливается автоматически)</td>
</tr>
<tr>
<td>Имя сервиса *</td>
<td>jatoba-18</td>
</tr>
<tr>
<td>Порт: *</td>
<td>5432</td>
</tr>
<tr>
<td>Папка data*</td>
<td>/var/lib/jatoba/18/data</td>
</tr>
<tr>
<td>Папка для резервных копий конфигурации *</td>
<td>/var/lib/jdscontrol/backup</td>
</tr>
<tr>
<td>Сертификат УЦ</td>
<td>не используется</td>
</tr>
<tr>
<td>Описание</td>
<td></td>
</tr>
<tr>
<td>Имя служебной БД *</td>
<td>
<p>postgres</p>
</td>
</tr>
<tr>
<td>Режим шифрования</td>
<td>Disable</td>
</tr>
<tr>
<td>Проверять сертификат СУБД на отзыв:</td>
<td>не используется</td>
</tr>
<tr>
<td>Способ аутентификации</td>
<td>Пароль</td>
</tr>
<tr>
<td>Имя роли администратора СУБД *</td>
<td>postgres</td>
</tr>
<tr>
<td>Пароль</td>
<td></td>
</tr>
</tbody>
</table>

Параметр «Название СУБД» формируется из IP-адреса, порта подключения и имени сервиса СУБД. Поле является редактируемым и в нем доступно указать любое значение удобное для восприятия. Установленное наименование измениться во всех разделах компонента JDS.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image28_.png)

Рисунок 2.8 – Окно настройки целевой СУБД

## НАСТРОЙКА SSL-СОЕДИНЕНИЙ

Настройка SSL соединений, для всех компонентов СУБД, должна выполняться от одно центра сертификации, т.е. на основе одного сертификата «CA».

СУБД «Jatoba» имеет возможность использования шифрованного сетевого трафика и аутентификацию по SSL сертификату. Аутентификация клиента по SSL сертификату позволяет серверу проверить личность подключающегося, подтверждая, что сертификат X.509, представленный клиентом, подписан центром сертификации. Рекомендуется использовать только доверенные центры сертификации для выдачи сертификатов клиенту и серверу

При выпуске серверных сертификатов поле SAN (а при его отсутствии – CN) должно соответствовать доменному имени сервера или его IP адресу.

Список файлов, которые будут использованы в текущем руководстве:

- корневой сертификат удостоверяющего центра (root.crt);

- сертификаты и ключи для каждого целевого узла (в приведенных примерах необходимо заменить {cn} на имя узла);

- сертификаты, ключи и контейнеры для клиентов;

- список отозванных сертификатов (root.crl.pem).

Корневой сертификат Центра сертификации должен быть установлен в целевой системе в «Доверенные корневые центры сертификации» (Windows)

Установка корневого сертификата в GNU/Linux:

- скопировать корневой сертификат удостоверяющего центра (root.crt) в каталог:


```
/usr/share/ca-certificates/
```


- выполнить команду в терминале ОС:


```
dpkg-reconfigure ca-certificates
```


и выбрать нужный сертификат

- выполнить команду в терминале ОС:


```
update-ca-certificates
```


Для всех настраиваемых узлов на DNS-сервере или в файлах hosts существуют записи FQDN, соответствующие создаваемым сертификатам

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image122.jpeg)

Рисунок 3.1 - Записи FQDN

В названиях пакетов ПО Jatoba вместо символа «X» нужно подставить номер актуальной версии СУБД.

В файле pg_hba.conf целевых СУБД предварительно надо задать необходимые настройки доступа, к примеру, для локальных подключений по IP или доменному имени, а также по SSL. Данные параметры приведены в качестве примера, для удаленных подключений необходимо указать конкретные адреса, базы и роли. Самая строгая степень проверки SSL сертификата: clientcert=verify-full. При этом типе авторизации проверяется соответствие значения поля CN пользовательского сертификата имени пользователя PostgreSQL.

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr>
<th>
<p>host</p>
</th>
<th style="text-align: center;">all</th>
<th style="text-align: center;">all</th>
<th>
<p>127.0.0.1/32 md5</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>hostssl</p>
</td>
<td style="text-align: center;">all</td>
<td style="text-align: center;">all</td>
<td>
<p>all cert clientcert=verify-full</p>
</td>
</tr>
</tbody>
</table>

В файле postgresql.conf целевых СУБД предварительно надо задать необходимые настройки подключения по SSL. В данном руководстве используются параметры:


```
ssl = on
ssl_ca_file = '/var/lib/jatoba/certs/root.crt' 
ssl_cert_file = '/var/lib/jatoba/certs/{cn}.crt' 
ssl_key_file = '/var/lib/jatoba/certs/{cn}.key' 
ssl_crl_dir = '/var/lib/jatoba/certs/'
```


У данных файлов должны быть корректные права (владелец – postgres, доступ на файл ключа – 600):


```
chown -R postgres /var/lib/jatoba/certs 
chmod 600 /var/lib/jatoba/certs/{cn}.key
```


После добавления CRL-файла в каталог нужно запустить команду:


```
openssl rehash '/var/lib/jatoba/certs'
```

:::warning Важная информация
При использовании файла CRL нужно следить за истечением срока его актуальности для своевременной замены
:::

SSL-подключения можно отслеживать в СУБД командой:


```sql
SELECT usename, datname, ssl, client_addr, application_name
    FROM pg_stat_ssl
    JOIN pg_stat_activity ON pg_stat_ssl.pid = pg_stat_activity.pid;
```


### Создание и конвертация сертификатов

Создание запроса на сертификат пользователя:


```
openssl req -new -nodes -text -out {cn}.csr -keyout {cn}.key - subj "/CN={cn}"
```


Создание запроса на сертификат сервера с использованием файла openssl.cnf:


```
openssl req -new -nodes -text -out {name}.csr -keyout {name}.key -config openssl.cnf
```


Содержимое файла openssl.cnf


```
[req]
default_bits = 2048
distinguished_name = req_distinguished_name 
req_extensions = v3_req
prompt = no

[req_distinguished_name] 
CN=example.local

[v3_req]
keyUsage = keyEncipherment, dataEncipherment, digitalSignature 
extendedKeyUsage = serverAuth, clientAuth
subjectAltName = @alt_names

[alt_names]
IP.1 = <IP-адрес>
```


Ключевые поля файла: CN и IP.1 (адрес сервера). Их нужно менять перед генерацией каждого серверного сертификата.

Эти поля нужны, чтобы сертификат мог работать с сервером не только по DNS-имени, но и по адресу (SAN).

При настройке отказоустойчивого кластера также нужно добавлять в alt_names публичный адрес jaDog.

На основе содержимого полученного файла \*.csr (запроса на сертификат) на сайте Служб сертификации Active Directory запросить сертификат.

При импорте файлов сертификатов из Центра Сертификации MS Active Directory в ОС Linux требуется конвертация в формат PEM. В таком виде с ними может работать СУБД «Jatoba».

Конвертация списка отозванных сертификатов:


```
openssl crl -in {file_name}.crl -inform DER -out root.crl.pem
```


Конвертация корневого, клиентского или серверного сертификата:


```
openssl x509 -inform DER -in {file_name}.cer -out {file_name}.crt
```


Для подключения JDS к целевым хостам требуется контейнер клиентского сертификата в формате pfx. При наличии промежуточного центра сертификации нужно создать файл root.crt-bundle


```
nano root.crt-bundle
```

Вставить в него содержимое файлов intermediate.crt (сертификат промежуточного ЦС) и root.crt (сертификат корневого ЦС), от begin до end из каждого, включительно, в таком порядке файлов. Данный бандл может быть основой для всех клиентских бандлов.

:::info Дополнительная информация
Пример такой настройки приведен в разделе 14 настоящего документа.
:::

Создать цепочку сертификатов промежуточного и корневого ЦС для клиентского сертификата postgres:


```
cp root.crt-bundle client.postgres.crt-bundle
```


Создать контейнер PFX для пользователя postgres:


```
openssl pkcs12 -inkey client.postgres.key -in client.postgres.crt -certfile client.postgres.crt-bundle - export -out client.postgres.pfx
```


Пароль оставить пустым.

При отсутствии промежуточного ЦС можно использовать «корневой» сертификат как бандл, если его содержимое – с BEGIN до END. Иначе удалить лишние строки и затем использовать его для создания клиентского бандла теми же командами:


```
cp root.crt root.crt-bundle
```


### Пути хранения сертификатов и ключей компонентов СУБД

При формировании сертификатов для SSL-соединения следует стремиться к единообразию имён и мест хранения. Имена сертификатов и места их хранения представлены в таблице [3.1](#_bookmark25).

Таблица 3.1 – Названия сертификатов и места их хранения

| **Назначение/место соединения** | **Файл** | **Путь/настройка конфигурации** |
|----|----|----|
| **Хранение корневого сертификата в Linux** | root.crt | /usr/share/ca-certificates/ |
| **СУБД** |  | **postgresql.conf** |
|  |  | /var/lib/jatoba/ssl_jatoba/ |
|  |  | ssl_ca_file = '/var/lib/jatoba/ssl_jatoba/root.crt' |
|  |  | ssl_cert_file = '/var/lib/jatoba/ssl_jatoba/{cn}.crt' |
|  |  | ssl_key_file = '/var/lib/jatoba/ssl_jatoba/{cn}.key' |
|  |  | ssl_crl_dir = '/var/lib/jatoba/ssl_jatoba/' |
| **jaDog** |  |  |
| **Между узлами кластера** |  | **jadog.yml** |
|  |  | /var/lib/jatoba/ssl_jadog/ |
|  | root.crt | db_connection_settings:ssl_ca_file: /var/lib/jatoba/ssl_jatoba/root.crt |
|  | jadog_service.crt | db_connection_settings:ssl_cert_file: /var/lib/jatoba/ssl_jatoba/jadog_service.crt |
|  | jadog_service.key | db_connection_settings:ssl_key_file: /var/lib/jatoba/ssl_jatoba/jadog_service.key |
|  |  |  |
|  | root.crt | tls:ca_file: /var/lib/jatoba/ssl_jatoba/root.crt |
|  | interconnect.crt | tls:cert_file: /var/lib/jatoba/ssl_jatoba/server.crt |
|  | interconnect.key | tls:key_file: /var/lib/jatoba/ssl_jatoba/server.key |
|  |  |  |
|  | root.crt | rest_api:ca_file: /var/lib/jatoba/ssl_jatoba/root.crt |
|  | rest_api_server.crt | rest_api:cert_file: /var/lib/jatoba/ssl_jatoba/server.crt |
|  | rest_api_server.key | rest_api: key_file: /var/lib/jatoba/ssl_jatoba/server.key |
|  |  |  |
|  |  |  |
| **Подключение «jaDog» к СУБД по SSL** |  | **В разделе 5) Database server system account and connection settings** |
|  | root.crt | /var/lib/jatoba/ssl_jadog/root.crt |

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 16%" />
<col style="width: 56%" />
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
<td></td>
<td>root.crt.pem</td>
<td>/var/lib/jatoba/ssl_jadog/root.crt.pem</td>
</tr>
<tr>
<td></td>
<td>сlient.jadog_user.crt</td>
<td>/var/lib/jatoba/ssl_jadog/jadog_user.crt</td>
</tr>
<tr>
<td></td>
<td>client.jadog_user.key</td>
<td>/var/lib/jatoba/ssl_jadog/jadog_user.key</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><p><strong>Подключение «jaDog» к JDS разделе</strong></p>
<p><strong>«Ландшафт»</strong></p></td>
<td></td>
<td><strong>11 – Rest API settings</strong></td>
</tr>
<tr>
<td></td>
<td>srv.crt</td>
<td>/var/lib/jatoba/ssl_jadog/srv.crt</td>
</tr>
<tr>
<td></td>
<td>srv.key</td>
<td>/var/lib/jatoba/ssl_jadog/srv.key</td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>/var/lib/jatoba/ssl_jadog/root.crt</td>
</tr>
<tr>
<td></td>
<td>root.crt.pem</td>
<td>/var/lib/jatoba/ssl_jadog/root.crt.pem</td>
</tr>
<tr>
<td></td>
<td>admin.pfx</td>
<td>/usr/share/jds/ssl_jadog/clusters</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>ja_Log (сервер)</strong></td>
<td>ja_log.crt</td>
<td>/var/lib/jatoba/ssl_jalog/ja_log.crt</td>
</tr>
<tr>
<td></td>
<td>ja_log.key</td>
<td>/var/lib/jatoba/ssl_jalog/ja_log.key</td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>/var/lib/jatoba/ssl_jalog/root.crt</td>
</tr>
<tr>
<td></td>
<td>root.crl.pem</td>
<td>/var/lib/jatoba/ssl_jalog/root.crl.pem</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>ja_Log (агент)</strong></td>
<td>ja_log_agent.crt</td>
<td>/var/lib/jatoba/ssl_jalog/ja_log_agent.crt</td>
</tr>
<tr>
<td></td>
<td>ja_log_agent.key</td>
<td>/var/lib/jatoba/ssl_jalog/ja_log_agent.key</td>
</tr>
<tr>
<td></td>
<td>root.crt</td>
<td>/var/lib/jatoba/ssl_jalog/root.crt</td>
</tr>
<tr>
<td></td>
<td>root.crl.pem</td>
<td>/var/lib/jatoba/ssl_jalog/root.crl.pem</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
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
<td>prometheus.local.crt prometheus.local.key</td>
<td>/etc/nginx/ssl/prometheus.local.crt</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 16%" />
<col style="width: 56%" />
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
<td></td>
<td>jds.local.crt jds.local.key</td>
<td>/etc/nginx/ssl/prometheus.local.key</td>
</tr>
<tr>
<td></td>
<td><strong>На одном узле</strong></td>
<td></td>
</tr>
<tr>
<td></td>
<td>jds.local.crt jds.local.key</td>
<td><p>/etc/nginx/ssl/jds.local.crt</p>
<p>/etc/nginx/ssl/jds.local.key</p></td>
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
<td>
<p>key_file: /var/lib/certs_node/prometheus.local.key</p>
</td>
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
</tbody>
</table>

| **Назначение/место соединения** | **Файл** | **Путь/настройка конфигурации** |
|----|----|----|
|  |  |  |
| **jatoba\*_sql_exporter** |  | **/usr/jatoba-X/monitoring/default/sql-config.yml** |
|  | root.crt | client_ca_file: /var/lib/certs_sql/root.crt |
|  | prometheus.local.crt | cert_file: /var/lib/certs_sql/prometheus.local.crt |
|  | prometheus.local.key | key_file: /var/lib/certs_sql/prometheus.local.key |
|  |  |  |
|  |  | **/usr/jatoba-X/monitoring/default/prometheus.yml** |
|  | root.crt | client_ca_file: /var/lib/certs_sql/root.crt |
|  | prometheus.local.crt | cert_file: /var/lib/certs_sql/prometheus.local.crt |
|  | prometheus.local.key | key_file: /var/lib/certs_sql/prometheus.local.key |
|  |  |  |
|  |  | **/usr/jatoba-X/monitoring/default/prometheus.yml** |
|  | root.crt | ca_file: /var/lib/certs/root.crt |
|  | prometheus.local.crt | cert_file: /var/lib/certs/prometheus.local.crt |
|  | prometheus.local.key | key_file: /var/lib/certs/prometheus.local.key |
|  |  |  |
|  |  | **/usr/jatoba-X/monitoring/default/sql_exporter.yml** |
|  | root.crt | sslrootcert=/var/lib/certs_sql/root.crt |
|  | sql_exporter.crt | sslcert=/var/lib/certs_sql/sql_exporter.crt |
|  | sql_exporter.key | sslkey=/var/lib/certs_sql/sql_exporter.key |

## ПОДКЛЮЧЕНИЕ JDS К ЦЕЛЕВОЙ СУБД ПО SSL

Для данного раздела понадобится файл бандла корневого и всех промежуточных сертификатов, созданный в разделе п.п. [3.1](#создание-и-конвертация-сертификатов) «[Создание и конвертация сертификатов](#создание-и-конвертация-сертификатов)».

Целевая СУБД должна быть предварительно настроена. Файлы postgresql.conf, pg_hba.conf, файлы сертификатов хранятся в указанном каталоге.

На примере раздела «Матрица доступа»: в JDS перейти в Настройки - Цели - Добавить

Заполнить настройки для подключения к серверу СУБД. В поле сертификат нужно указать вышеуказанный бандл. В качестве функционала выбрать «Матрица доступа»

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image123.png)

Рисунок 4.1 – Создание цели

Нажать на кнопку «Добавить подключение». Заполнить настройки, выбрать режим VerifyFull, способ аутентификации - «SSL-сертификат», в качестве сертификата добавить контейнер pfx указанного выше пользователя

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image124.png)

Рисунок 4.2 – Окно редактирования подключения

Кнопка «Тест подключения» должна отобразить уведомление об успешном подключении.

В разделе Аудит и отчетность - Матрица доступа выбрать созданную цель.

## ПОДКЛЮЧЕНИЕ JDS К СЛУЖЕБНОЙ СУБД ПО SSL

Для данного раздела понадобится файл корневого сертификата УЦ или бандл сертификатов, а также контейнер пользователя .pfx

Создать каталог для сертификатов:


```
mkdir /usr/share/jds/certs
```


Скопировать в каталог файл корневого сертификата (или бандл всех промежуточных ЦС) и контейнер пользователя .pfx

Назначить владельцем каталога пользователя, под именем которого запускается сервис JDS, и ограничить права на файлы:


```
chown -R jds /usr/share/jds/certs 
chmod -R 600 /usr/share/jds/certs
```


Отредактировать файл конфигурации JDS:


```
nano /opt/jds/appsettings.json
```


Заменить строку:


```
"ConnectionStrings": {"DefaultConnection": "User Id=jds; Password=sql; Server=localhost; Database=jdsdb; Port=5432;"
},
```


на


```
"ConnectionStrings": {"DefaultConnection": " User Id=jds; Server=jds.local; Port=5432; Database=jdsdb; SslMode=VerifyFull"
},
```


Добавить раздел:


```
},
"ConnectionSslConfigurator": { 
    "Connections": {
    "DefaultConnection": { "CAFile":"/usr/share/jds/certs/root.crt-bundle", 
    "ClientPfxFile":"/usr/share/jds/certs/client.jds.pfx",
    "ClientPfxPassword":null, 
    "CheckServerCertificateRevocation":false
}
}
}
}
```


Перезапустить службу JDS:


```
systemctl restart jds.service
```


## ПОДКЛЮЧЕНИЕ К WEB-ИНТЕРФЕЙСУ JDS ПО SSL

Для данного раздела понадобится файл корневого сертификата УЦ или бандл сертификатов, а также контейнер пользователя .pfx

По умолчанию JDS устанавливается с самоподписанным сертификатом, его требуется заменить.

Для данного раздела понадобятся файлы jds.local.crt и jds.local.key (сертификат, сгенерированный для сервера с запущенным сервисом JDS)

Для запуска web-интерфейса JDS с сертификатом из ЦС нужно скопировать файлы сертификата и ключа в каталог SSL:


```
cp jds.local.crt /etc/nginx/ssl/ 
cp jds.local.key /etc/nginx/ssl/
```


Отредактировать конфигурацию JDS для nginx


```
nano /etc/nginx/conf.d/jds.https.conf
```


Заменить названия файлов сертификата и ключа


```
listen 443 ssl; 
ssl_certificate         /etc/nginx/ssl/jds.local.crt;
ssl_certificate_key     /etc/nginx/ssl/jds.local.key;
```


Перезапустить службу nginx


```
systemctl restart nginx.service
```


## НАСТРОЙКА SSL КОМПОНЕНТА JADOG

### Настройка SSL между узлами кластера

В примере рассматривается настройка SSL-подключения между 2 узлами отказоустойчивого кластера.

В качестве учетной записи «interconnect_user» для межузлового взаимодействия с использованием SSL применяется пользователь «jadog_user».

Выполнить стандартную установку компонента «jaDog» на все узлы кластера, следуя инструкциям из первой части документа «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01.

Добавить в конфигурационный файл /var/lib/jatoba/6/data/pg_hba.conf главного узла следующие строки:


```
hostssl replication jadog_user 127.0.0.1/32 cert clientcert=verify-full
hostssl replication jadog_user 10.116.102.0/24 cert clientcert=verify-full
```


На каждом из узлов кластера необходимо сформировать сертификаты для пользователя jadog_user с следующими параметрами:

- CN= <interconnect user> - название учетной записи, для межузлового взаимодействия;

- extendedKeyUsage=clientAuth.

На каждом из узлов кластера необходимо сформировать серверные сертификаты с следующими параметрами:

- CN=<hostname>, где hostname – название узла, для которого сформирован сертификат;

- SAN - список альтернативных названий узла;

- extendedKeyUsage=serverAuth.

Полученные сертификаты скопировать, а также корневой сертификат (root.crt) в каталог /var/lib/jatoba/ssl_jadog.

Права доступа к сертификатам необходимо определить при помощи команды:


```
chown -R postgres /var/lib/jatoba/ssl_jadog 
chmod 600 /var/lib/jatoba/ssl_jadog/*.key
```


На каждом узле кластера настроить пути к директории с сертификатами при помощи следующих команд в консольной утилите jadog_ctl:


```
set parameter interconnect_user:name = 'jadog_user' 
set parameter interconnect_user:ca_file = '/var/lib/jatoba/ssl_jadog/self_signed_ca.crt'
set parameter interconnect_user:cert_file = '/var/lib/jatoba/ssl_jadog/jadog_user.crt' 
set parameter interconnect_user: key_file = '/var/lib/jatoba/ssl_jadog/jadog_user.key'
```


Настройка пути к директории с сертификатами также выполняется с помощью консольной утилиты:


```
cd /usr/jatoba-6/bin
./jadog setup -C ../etc/jadog/
```


В конфигурационном файле /var/lib/jatoba/6/data/postgresql.conf главного узла нужно внести соответствующие изменения в пути к файлам сертификатов.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image125.png)

Рисунок 7.1 – Пример настроек SSL-соединения в файле postgresql.conf 

Задать права на каталог и файлы командой:


```
chown -R postgres /var/lib/jatoba/ssl_jatoba
chmod 600 /var/lib/jatoba/ssl_jatoba/jatoba_server.key
```


На первом узле перенастроить конфигурацию jadog для использования SSL:


```
cd /usr/jatoba-X/bin
```


\#если первоначальная настройка уже была:


```
./jadog setup -C ../etc/jadog/
```


\#если это первая настройка:


```
./jadog setup
```


В разделе 2 «Inter-jadog communication setting», пункт 5 «SSL on (ssl:ssl)» переключить в значение true:

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image126.png)

Рисунок 7.2 - Раздел 2 «Inter-jadog communication setting»

В разделе 4 «Security connection settings» заполнить пути к файлам сертификатов и ключей.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image127.png)

Рисунок 7.3 - разделе 4 «Security connection settings» 

Повторно ввести пароль пользователя кластера в разделе 6.

С помощью раздела 13 сохранить настройки и выйти из конфигуратора. Повторить аналогичную настройку на втором узле кластера.

В файле /usr/jatoba-X/etc/jadog/jadog_hba.cfg на обоих узлах добавить строку (если ее там нет)


```
all all ssl
```


Проверить, что служба jadog запущена на всех узлах.


```
systemctl status jadog.service
```


С помощью утилиты jadog_ctl на главном сервере создать кластер и включить в него узлы согласно документации.

На главном узле можно проверить тип соединений к базе данных (ssl = «t») SQL-командой:


```
sudo -u postgres psql
```


```sql
SELECT usename, datname, ssl, client_addr, application_name FROM pg_stat_ssl
JOIN pg_stat_activity
ON pg_stat_ssl.pid = pg_stat_activity.pid;
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image128.jpeg)



Рисунок 7.4 – SQL-команда проверки SSL-соединения между узлами

### Настройка доступа jaDog к СУБД по SSL

Действия проводятся на узлах кластера, настроенного по шагам из прошлого раздела.

Создать клиентский сертификат для пользователя jadog_user по инструкции, скопировать файлы в каталог /var/lib/jatoba/certs всех узлов кластера


```
cp ./client.jadog_user.* /var/lib/jatoba/ssl_jatoba/ 
chown -R postgres /var/lib/jatoba/ssl_jatoba
chmod 600 /var/lib/jatoba/ssl_jatoba/client.jadog_user.key
```


На всех узлах запустить изменение конфигурации jadog командой:


```
cd /usr/jatoba-X/bin
./jadog setup -C ../etc/jadog/
```


Перейти в пункт меню 3 «User / Admin access network setting», в Подменю 1) Public IP address (main:public_address) и заполнить значение:

1\) Public address (main:public_address) - общий IP-адрес данного узла (тот же, что указан как SAN в сертификате данного сервера)

Перейти в пункт 5) Database server system account and connection settings и заполнить значения:

<table>
<colgroup>
<col style="width: 93%" />
<col style="width: 6%" />
</colgroup>
<thead>
<tr>
<th>6) Database auth method (db_connection_settings:db_auth_method)</th>
<th>
<p>ssl</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>№ изменения:</th>
<th>Подпись отв. лица:</th>
<th>
<p>Дата внесения изм:</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 61%" />
<col style="width: 38%" />
</colgroup>
<thead>
<tr>
<th><p>7) Jadog to database CA file (db_connection_settings:ssl_ca_file)</p>
<p>путь к файлу корневого сертификата</p></th>
<th>
<p>/var/lib/jatoba/certs/root.crt</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>8) Jadog to database CRL file (db_connection_settings:ssl_crl_file) путь к файлу отозванных сертификатов</td>
<td>
<p>/var/lib/jatoba/certs/root.crt.pem</p>
</td>
</tr>
<tr>
<td><p>9) Jadog to database cert file (db_connection_settings:ssl_cert_file)</p>
<p>путь к файлу сертификата jadog_user</p></td>
<td>
<p>/var/lib/jatoba/certs/client.jadog_user.crt</p>
</td>
</tr>
<tr>
<td><p>10) Jadog to database key file (db_connection_settings:ssl_key_file)</p>
<p>путь к файлу ключа сертификата jadog_user</p></td>
<td>
<p>/var/lib/jatoba/certs/client.jadog_user.key</p>
</td>
</tr>
</tbody>
</table>

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image129.jpeg)

Рисунок 7.5 - пункт 5) Database server system account and connection settings 

Ввести пароль пользователя в пункте 13.

Выйти из настройки через общий раздел 13.

При необходимости перезапустить узлы кластера в правильном порядке или в приложении jadog_ctl воспользоваться командой:


```
reload jadog on cluster
```


### Подключение кластера «jaDog» к JDS разделе «Ландшафт»

В приведенном ниже описании приведен пример создания цели (Target) с подключением по SSL/TLS.

Требуются: JDS версии 2.7.0 и новее, jaDog версии 3.2 и новее.

Подключение кластеров осуществляется с помощью Rest API компонента jaDog. Rest API всегда использует SSL подключение.

Для данного раздела понадобится pfx-контейнер сертификата администратора кластера на основе клиентских сертификата и ключа пользователя admin:


```
openssl pkcs12 -inkey admin.key -in admin.crt -certfile root.crt -export -out admin.pfx
```


### Настройка Rest API

Настройка Rest API возможна при помощи запуска консольной утилиты установки компонента «jaDog» в специальном режиме:


```
cd /usr/jatoba-X/bin
./jadog setup -C ../etc/jadog/
```


Перейти в раздел 10 – Rest API settings, заполнить значения:

<table>
<colgroup>
<col style="width: 61%" />
<col style="width: 38%" />
</colgroup>
<thead>
<tr>
<th>1) REST API use (rest_api:api_use)</th>
<th>
<p>«true»</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>2) REST API listen address (rest_api:listen_address)</td>
<td>
<p>«0.0.0.0»</p>
</td>
</tr>
<tr>
<td><p>3) REST API listen port (rest_api:listen_port)</p>
<p>порт, который будет использовать Rest API, по умолчанию</p></td>
<td>
<p>54443</p>
</td>
</tr>
<tr>
<td>4) REST API TLS server certificate (rest_api:cert_file) путь к файлу открытого ключа сервера</td>
<td>
<p>/var/lib/jatoba/ssl_jadog/server.crt</p>
</td>
</tr>
<tr>
<td>5) REST API TLS server private key (rest_api:key_file) путь к файлу закрытого ключа сервера</td>
<td>
<p>/var/lib/jatoba/ssl_jadog/server.key</p>
</td>
</tr>
<tr>
<td><p>6) REST API TLS CA bundle (rest_api:ca_file)</p>
<p>путь к файлу корневого сертификата</p></td>
<td>
<p>/var/lib/jatoba/ssl_jatoba/root.crt</p>
</td>
</tr>
<tr>
<td>7) REST API TLS server revocation list (rest_api:crl_file) путь к файлу отозванных сертификатов</td>
<td>
<p>/var/lib/jatoba/ssl_jatoba/root.crt.pem</p>
</td>
</tr>
</tbody>
</table>

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image130.png)

Рисунок 7.6 - Раздел 10 – Rest API settings

Выйти в главное меню и перейти в раздел 14) Save settings and setup jadog для сохранения внесенных параметров в конфигурации кластера.

### Проверочные мероприятия

Перед добавлением существующего кластера в раздел «Ландшафт» JDS требуется перепроверить настройки и собрать необходимую информацию о кластере.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image77_.png)

Рисунок 7.7 – Схема настроек подключения кластера

Подключение к публичному адресу кластера со стороны JDS выполняется одной из учетных записей администраторов кластера. Соответственно должен быть сформирован клиентский сертификат в формате \*.PFX для администратора кластера. При этом все сертификаты, как клиентские, как серверные должны быть сформированы от одного ЦС.

Учетная запись администратора кластера должна быть заведена в кластере и отражаться в файле по пути /usr/jatoba-<ver>/etc/jadog/users.yml.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image173.png)

Рисунок 7.8 – Список пользователей кластера

В конфигурационном файле аутентификации по пути /usr/jatoba-<ver>/etc/jadog/jadog_hba.cfg, должно быть разрешено подключение по SSL.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image174.png)

Рисунок 7.9 - Конфигурационный файл аутентификации кластера

В файле состояния кластера по пути: /usr/jatoba-<ver>/etc/jadog/jadog_state.yml получить значения параметров приведенных в таблице [7.1](#_bookmark35) .

<span id="_bookmark35" class="anchor"></span>Таблица 7.1 – Требуемые параметры для подключения кластера в файле jadog_state.yml

<table>
<colgroup>
<col style="width: 21%" />
<col style="width: 25%" />
<col style="width: 27%" />
<col style="width: 26%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Описание параметра</strong></p>
</th>
<th>
<p><strong>Наименование параметра</strong></p>
</th>
<th>
<p><strong>Значение параметра примера</strong></p>
</th>
<th>
<p><strong>Поле во вкладке</strong></p>
<p><strong>«Подключение к кластеру»</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>Имя кластера</td>
<td>cluster_name</td>
<td>cluster1</td>
<td>Название</td>
</tr>
<tr>
<td><p>Публичный IP-</p>
<p>адрес</p></td>
<td>PublicIP</td>
<td>10.116.102.81</td>
<td>Адрес</td>
</tr>
</tbody>
</table>

В файле параметров созданного узла по пути: /usr/jatoba-<ver>/etc/jadog/jadog.yml, сверить и получить значения параметров приведенных в таблице [7.2](#_bookmark36).

<span id="_bookmark36" class="anchor"></span>Таблица 7.2 – Требуемые параметры для подключения кластера в файле jadog.yml

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 52%" />
<col style="width: 26%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Описание параметра</strong></p>
</th>
<th>
<p><strong>Параметр и значение примера</strong></p>
</th>
<th>
<p><strong>Поле во вкладке</strong></p>
<p><strong>«Подключение к кластеру»</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Публичный IP-</p>
<p>адрес</p></td>
<td>public_address: 10.116.102.81/24</td>
<td>Адрес</td>
</tr>
<tr>
<td><p>Параметры REST</p>
<p>API</p></td>
<td><p>rest_api:</p>

<p>api_use: true</p>
<p>cert_file: /var/lib/jatoba/ssl_jadog/server.crt</p>
</td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 52%" />
<col style="width: 26%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Описание параметра</strong></p>
</th>
<th>
<p><strong>Параметр и значение примера</strong></p>
</th>
<th>
<p><strong>Поле во вкладке</strong></p>
<p><strong>«Подключение к кластеру»</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>
<p>key_file: /var/lib/jatoba/ssl_jadog/server.key</p>
<p>ca_file: /var/lib/jatoba/ssl_jatoba/root.crt</p>
</td>
<td></td>
</tr>
<tr>
<td>Порт REST API</td>
<td>listen_port: 54443</td>
<td>Порт REST API</td>
</tr>
</tbody>
</table>

### Добавление существующего кластера ja_Dog

Выполнив проверочные мероприятия и собрав требуемую информацию для подключения, возможно подключение кластера к разделу «Ландшафт».

Потребуется перейти в раздел «Ландшафт», во вкладку «Кластеры» и нажать кнопку «Подключиться». В открывшемся окне «Подключение к кластеру» ввести значения параметров.

В «Название» указать имя имеющегося кластера, которое указывалось при создании кластера (поле регистрозависимое), в поле «Адрес» указать IP-адрес или DNS имя любого узла кластера, в том числе Public IP, в поле «Порт Rest API» указать порт, используемый Rest API, в поле сертификат нужно указать pfx-контейнер администратора кластера.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image710_.png)

Рисунок 7.10 – Окно подключения к кластеру

Далее нажать «Тест подключения». При корректных указанных параметрах должны отобразится:

- Во вкладке «Структура» визуально отобразится структура кластера;

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image711_.png)

Рисунок 7.11 – Структура кластера отображаемая при подключении к кластеру

- Во вкладке «JSON» отразятся параметры подключения

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image712_.png)

Рисунок 7.12– Структура кластера отображаемая при подключении к кластеру 

Подключенный кластер отразится в двух разделах JDS:

- Ландшафт;

- Кластеры/Jadog кластеры.

В разделе «Ландшафт», при настроенном SSH-соединении будет доступно управление СУБД.

В разделе Кластеры/Jadog кластеры выполняется непосредственно управление кластером.

Функциональные возможности разделов описаны в документе «Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe».

## РАЗДЕЛ JDS «АНАЛИЗ ЗАПРОСОВ»

Руководство по полной настройке компонента находится в документе «Поддержка мониторинга СУБД в части анализа запросов»

Подключение модуля explain к служебной СУБД по SSL не поддерживается.

Подключение к целевой СУБД осуществляется по SSH.

В данном разделе рассматривается настройка системы для доступа по SSL к web-интерфейсу explain.

### Настройка на узле, отдельном от JDS

Для данного раздела понадобятся:

- серверные сертификат и ключ;

- установлен полные пакет explain, monitor, nginx;

- компонент explain, установленный и доступый по адресу http://<адрес сервера explain>:8080.

Имя узла в данном разделе - prometheus.local.

Создать папку для сертификата и ключа командой в терминале ОС:


```
mkdir /etc/nginx/ssl
```


Скопировать в этот каталог сертификат и ключ данного сервера. Создать файл конфигурации сайта.


```
nano /etc/nginx/conf.d/explain.https.conf
```


Вставить текст и сохранить:


```
server {
    charset utf-8;
    access_log /var/log/nginx/explain.access.log; 
    error_log /var/log/nginx/explain.error.log; 
    listen 443 ssl;
    ssl_certificate    /etc/nginx/ssl/prometheus.local.crt; 
    ssl_certificate_key    /etc/nginx/ssl/prometheus.local.key;
    location / {
        proxy_pass [http://localhost:8080](http://localhost:8080/);
    }
}
```


Перезапустить службу nginx командой.


```
systemctl restart nginx
```


Перейти по адресу:


```
https://<адрес сервера explain>
```


### Подключение Explain в JDS

Взаимодействие JDS с сервисом pg-explain настраивается в конфигурационном файле приложения JDS appsettings.json - в свойстве PgExplainConfig.BaseAddress указать URL по которому доступен https-сервис pg-explain, например:


```
nano /opt/jds/appsettings.json
```



```
…
"PgExplainConfig": {
    "BaseAddress": "https://<адрес сервера explain>"
},
…
```


Адрес должен быть указан без закрывающего знака «/» - дробная черта.

Зайти в web-интерфейс JDS по логину и паролю (по умолчанию, admin - secret), пункты меню Производительность – Анализ запросов.

Перейти на вкладку Настройки, мини-вкладка Добавить. Ввести IP-адрес узла с наблюдаемой СУБД, порт (если он отличается от стандартного 5432) и отметить чекбоксы собираемой статистики, например, все 4. Сохранить.

На мини-вкладке «все» должен отобразиться добавленный узел.

### Настройка на одном узле с JDS

Используется web-сервер nginx из состава JDS. Шаги и параметры немного отличаются.

Для данного раздела понадобятся серверные сертификат и ключ. Имя узла в данном разделе - jds.local

Создать папку для сертификата и ключа:


```
mkdir /etc/nginx/ssl
```


Скопировать в этот каталог сертификат и ключ данного сервера Создать файл конфигурации сайта:


```
nano /etc/nginx/conf.d/explain.https.conf
```


Вставить текст и сохранить:


```
server {
    charset utf-8;
    access_log /var/log/nginx/explain.access.log; 
    error_log /var/log/nginx/explain.error.log; 
    listen 444 ssl;
    ssl_certificate         /etc/nginx/ssl/jds.local.crt;
    ssl_certificate_key     /etc/nginx/ssl/jds.local.key;
    location / {
        proxy_pass [http://localhost:8080](http://localhost:8080/);
    }
}
```


Перезапустить службу nginx:


```
systemctl restart nginx
```


Проверить в браузере работу explain по https:


```
https://<адрес сервера jds-explain>:444
```


Взаимодействие JDS с сервисом pg-explain настраивается в конфигурационном файле приложения JDS appsettings.json - в свойстве PgExplainConfig.BaseAddress указать URL по которому доступен https-сервис pg-explain, например:


```
…
"PgExplainConfig": {
    "BaseAddress": "https://<адрес сервера explain>:444"
},
…
```


Адрес должен быть указан без закрывающего знака «/» - дробная черта.

Даже при том, что сервис explain работает на том же хосте, что и JDS, то все равно в свойстве BaseAddress нужно указывать внешний IP-адрес (не localhost), т.к. обращение к pg-explain идет не от JDS, а от браузера пользователя.

Зайти в web-интерфейс JDS по логину и паролю (по умолчанию, admin - secret), пункты меню Производительность – Анализ запросов. Перейти на вкладку Настройки, мини-вкладка Добавить. Ввести IP-адрес узла с наблюдаемой СУБД, порт (если он отличается от стандартного 5432) и отметить чекбоксы собираемой статистики, например, все 4. Сохранить.

На мини-вкладке «все» должен отобразиться добавленный узел.

## РАЗДЕЛ JDS «МОНИТОРИНГ»

В разделе описывается подключение по SSL к системе Prometheus и экспортерам.

Сертификат и ключ сервера хранятся в нескольких экземплярах, так как каждый сервис работает под своим пользователем, для которого назначены уникальные права на файл ключа.

### Система «Prometheus»

Для данного подключения понадобятся серверные ключ и сертификат, корневой сертификат.

Установить на сервер мониторинга компонент jatobaX-prometheus (подробно установка описана в документе «Руководство по настройке. Часть 22. Поддержка мониторинга СУБД».

Создать каталог для хранения сертификата сервера, ключа сервера и корневого сертификата:


```
mkdir /var/lib/certs/
```


Скопировать в этот каталог сертификат сервера, ключ сервера и корневой сертификат Задать права на каталог


```
chown -R Prometheus /var/lib/certs/
chmod 600 /var/lib/certs/prometheus.local.key
```


В файл сервиса jatobaX_prometheus.service добавить параметры web.config.file и web.external-url:

nano /lib/systemd/system/jatobaX_prometheus.service


```
…

ExecStart=/usr/jatoba-X/bin/Prometheus \
    --config.file ${CONF_FILE} \
    --storage.tsdb.path ${STORAGE_TSDB_PATH} \
    --web.console.templates=${WEB_CONSOLE_TEMPLATES} \
    --web.console.libraries=${WEB_CONSOLE_LIBRARIES} \
    --web.enable-lifecycle \
    --web.config.file=/usr/jatoba-X/monitoring/default/web-config.yml \
    --web.external-url=<https://prometheus.local/>
…
```


Параметр web.external-url содержит доменное имя данного узла, соответствующее полю CN в сертификате (здесь - prometheus.local).

Содержимое файла web-config.yml:


```
tls_server_config:
cert_file: /var/lib/certs/prometheus.local.crt 
key_file: /var/lib/certs/prometheus.local.key 
client_ca_file: /var/lib/certs/root.crt 
client_auth_type: "RequireAndVerifyClientCert"
```


В файл /usr/jatoba-X/monitoring/default/prometheus.yml добавить строки:


```
scrape_configs:
    - job_name: "prometheus" 
    scheme: https 
    tls_config:
        ca_file: /var/lib/certs/root.crt
```


Перечитать файл службы и перезапустить prometheus


```
systemctl daemon-reload
systemctl restart jatobaX_prometheus.service 
systemctl status jatobaX_prometheus.service
```


В статусе службы (или в выводе команды journalctl -xe) должна быть строка «TLS is enabled».

С удаленного узла или локально можно проверить корректность настроек командой:


```
curl --cacert ./prometheus.local.crt <https://prometheus.local:9090/api/v1/label/job/values>
```


Для дальнейшего подключения сервиса JDS к мониторингу необходимо создать pfx-контейнер, к примеру, взяв клиентские сертификат и ключ пользователя postgres:


```
openssl pkcs12 -inkey postgres.key –in postgres.crt -certfile root.crt –export -out client.postgres.pfx
```


### Экспортер «jatoba*_node_exporter»

Для данного подключения понадобятся серверные ключ и сертификат, корневой сертификат.

Установить на целевой узел компонент jatobaX-node-exporter (подробно установка описана в документе «Руководство по настройке. Часть 22. Поддержка мониторинга СУБД». В данном примере описана установка на узле с prometheus, используются те же сертификаты.

Создать отдельный каталог для хранения сертификата и ключа:


```
mkdir /var/lib/certs_node/
```


Скопировать в этот каталог сертификат сервера, ключ сервера и корневой сертификат. Задать права на каталог:


```
chown -R node_exporter_usr /var/lib/certs_node/ 
chmod 600 /var/lib/certs_node/prometheus.local.key
```


В файл сервиса jatobaX_node_exporter.service добавить параметр web.config.file:


```
nano /lib/systemd/system/jatobaX_node_exporter.service
```



```
…
ExecStart=/usr/jatoba-X/bin/node_exporter \
    --web.config.file=/usr/jatoba-X/monitoring/default/node-config.yml
…

```

В каталоге /usr/jatoba-X/monitoring/default создать файл node_config.yml


```
nano /usr/jatoba-X/monitoring/default/node_config.yml
```



```
tls_server_config:
    client_ca_file: /var/lib/certs_node/root.crt 
    cert_file: /var/lib/certs_node/prometheus.local.crt 
    key_file: /var/lib/certs_node/prometheus.local.key 
    client_auth_type: "RequireAndVerifyClientCert"
```


В файл /usr/jatoba-X/monitoring/default/prometheus.yml в раздел «# экспортер данных для Linux» добавить строки:


```
…
- job_name: "node-exporter" 
    scheme: https
    tls_config:
        ca_file: /var/lib/certs/root.crt
        cert_file: /var/lib/certs/prometheus.local.crt 
        key_file: /var/lib/certs/prometheus.local.key 
        insecure_skip_verify: false
…
```


Перечитать и перезапустить службы:


```
systemctl daemon-reload
systemctl restart jatobaX_node_exporter.service 
systemctl restart jatobaX_prometheus.service
```


### Экспортер «jatoba*_postgres_exporter»

Для данного подключения понадобятся серверные ключ и сертификат, клиентские ключ и сертификат, корневой сертификат.

Установить на целевой узел компонент jatobaX-postgres-exporter (подробно установка описана в документе «Руководство по настройке. Часть 22. Поддержка мониторинга СУБД». В данном примере описана установка на узле с prometheus, используются те же сертификаты.

Создать отдельный каталог для хранения сертификата и ключа:


```
mkdir /var/lib/certs_postgres/
```


Скопировать в этот каталог сертификат сервера, ключ сервера, сертификат и ключ пользователя postgres_exporter, а также корневой сертификат

Задать права на каталог с терминале ОС командой:


```
chown -R postgres_exporter_usr /var/lib/certs_postgres/ 
chmod 600 /var/lib/certs_postgres/prometheus.local.key
```


В файл сервиса jatobaX_postgres_exporter.service добавить параметр web.config.file:


```
nano /lib/systemd/system/jatobaX_postgres_exporter.service
```



```
…
ExecStart=/usr/jatoba-X/bin/postgres_exporter \
    --web.config.file=/usr/jatoba-X/monitoring/default/postgres-config.yml
…
```


В каталоге /usr/jatoba-X/monitoring/default создать файл postgres-config.yml командой:


```
nano /usr/jatoba-X/monitoring/default/postgres-config.yml
```


Установить параметры:


```
tls_server_config:
    cert_file: /var/lib/certs_postgres/prometheus.local.crt 
    key_file: /var/lib/certs_postgres/prometheus.local.key
```


В файл /usr/jatoba-X/monitoring/default/prometheus.yml в раздел «# стандартный экспортер данных для PostgreSQL» добавить строки:


```
…
- job_name: "postgresql" scheme: 
https tls_config:
    ca_file: /var/lib/certs/root.crt
    cert_file: /var/lib/certs/prometheus.local.crt 
    key_file: /var/lib/certs/prometheus.local.key 
    insecure_skip_verify: false
…
```


В файле /usr/jatoba-X/monitoring/default/postgres_exporter.yml записать вместо IP-адреса доменное имя целевого узла и добавить параметры для подключения к СУБД:


```
DATA_SOURCE_NAME="postgresql://postgres_exporter:Password@prometheus.local:5432/postgres?sslmode=verify-full&sslrootcert=/var/lib/certs_postgres/root.crt&sslcert=/var/lib/certs_postgres/postgres_exporter.crt&sslkey=/var/lib/certs_postgres/postgres_exporter.key"
```


Обратите внимание, что в строке подключения между кавычками не должно быть посторонних символов, в том числе нечитаемых, к примеру символ табуляции \t.

Перечитать и перезапустить службы:


```
systemctl daemon-reload
systemctl restart jatobaX_postgres_exporter.service 
systemctl restart jatobaX_prometheus.service
```


### Экспортера «jatoba*_sql_exporter»

Для данного подключения понадобятся серверные ключ и сертификат, клиентские ключ и сертификат, корневой сертификат.

Установить на целевой узел компонент jatobaX-sql-exporter (подробно установка описана в документе «Руководство по настройке. Часть 22. Поддержка мониторинга СУБД». В данном примере описана установка на узле с prometheus, используются те же сертификаты.

Создать отдельный каталог для хранения сертификата и ключа:


```
mkdir /var/lib/certs_sql/
```


Скопировать в этот каталог сертификат и ключ сервера Задать права на каталог


```
chown -R sql_exporter_usr /var/lib/certs_sql/ 
chmod 600 /var/lib/certs_sql/prometheus.local.key
```


В файл sql_exporter добавить значение параметра web_config_file:


```
nano /usr/jatoba-X/monitoring/default/sql_exporter
```



```
…
WEB_CONFIG_FILE=/usr/jatoba-X/monitoring/default/sql-config.yml
…
```


В каталоге /usr/jatoba-X/monitoring/default создать файл sql-config.yml


```
nano /usr/jatoba-X/monitoring/default/sql-config.yml
```



```
tls_server_config:
    client_ca_file: /var/lib/certs_sql/root.crt 
    cert_file: /var/lib/certs_sql/prometheus.local.crt 
    key_file: /var/lib/certs_sql/prometheus.local.key 
    client_auth_type: "RequireAndVerifyClientCert"
```


В файл /usr/jatoba-X/monitoring/default/prometheus.yml в раздел «# экспортер данных для SQL» добавить строки:


```
…
- job_name: "sql-exporter" 
scheme: https 
tls_config:
    ca_file: /var/lib/certs/root.crt
    cert_file: /var/lib/certs/prometheus.local.crt 
    key_file: /var/lib/certs/prometheus.local.key 
    insecure_skip_verify: false
…
```


В файле /usr/jatoba-X/monitoring/default/sql_exporter.yml записать вместо IP-адреса доменное имя целевого узла, а также параметры подключения: путь к корневому сертификату, серверному сертификату и серверному ключу:


```
data_source_name: 'postgresql://sql_exporter:Password@prometheus.local:5432/postgres?sslmode=verify-full&sslrootcert=/var/lib/certs_sql/root.crt&sslcert=/var/lib/certs_sql/sql_exporter.crt&sslkey=/var/lib/certs_sql/sql_exporter.key'
```


Перезапустить службы:


```
systemctl restart jatobaX_prometheus.service 
systemctl restart jatobaX_sql_exporter.service
```


### Настройка подключения в JDS

Добавить в JDS новый источник данных: Настройки - Источники данных - Добавить.

Вставить полный адрес сервера prometheus.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image178.png)

Рисунок 9.1 – Настройки источника данных в JDS

В разделе «Мониторинг» должны отобразиться графики, автоматически созданные по метрикам из сервиса prometheus.

### Настройка «Grafana»

Для подключения источника данных по TLS понадобятся клиентские сертификат и ключ.

В настройках источника данных указать имя сервера, если был указан IP-адрес.

Сервер Prometheus должен быть доступен по этому адресу с сервера Grafana. В категории TLS Settings включить пункт "TLS Server Authentication".

Вписать имя сервера (как указано в CN), вставить содержимое клиентского сертификата и ключа в соответствующие поля.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image179.jpeg)

Рисунок 9.2 – Настройки TLS – соединения в «Grafana» 

В конце страницы проверить подключение кнопкой «Save & Test».

## JA_LOG. ЦЕНТРАЛИЗОВАННЫЙ СБОР ЗАПИСЕЙ СОБЫТИЙ В СУБД

Ja_Log можно настроить 2 вида подключения по SSL: подключение jalog_agent к jalog_server и подключение jalog_server к СУБД.

В данном примере на сервере JDS (jds.local) настраивается серверная часть ja_Log.

В файлы /etc/hosts сервера и агента добавлены записи с доменными именами узлов (или записи настроены на DNS-сервере).

Генерируются серверные и клиентские сертификаты.

В процессе настройки состояние подключения можно контролировать командами:


```
tail -f /usr/jatoba-X/var/log/jalog/jalog_agent.log 
tail -f /usr/jatoba-X/var/log/jalog/jalog_server.log
```


### ja_log (сервер)

В файлах pg_hba.conf и postgresql.conf СУБД записать параметры, аналогичные указанным в первом примечании.

Перезапустить СУБД командой:


```
systemctl restart jatoba-X.service
```


В файле /etc/hosts сделать запись для данного сервера:


```
127.0.0.1 localhost jds.local
<общий IP> jds.local
```


Создать каталог для хранения сертификатов:


```
mkdir /var/lib/jatoba/certs
```


Скопировать в этот каталог все необходимые сертификаты. Задать права на каталог:


```
chown -R postgres /var/lib/jatoba/certs 
chmod 600 /var/lib/jatoba/certs/ja_log.key
```


Так как сервис jalog_server запускается от имени пользователя postgres, можно использовать каталог с сертификатами для СУБД. В файл /usr/jatoba-X/etc/jalog/jalog_server.yml добавить параметры:


```
# Собственные параметры сервера
server:
    # listen_ip: 0.0.0.0    # IP-адрес, который прослушивает сервер
    # listen_port: 10051    # Порт, который прослушивает сервер
# Параметры TLS
tls:
    cert_file:/var/lib/jatoba/certs/ja_log.crt # Путь до сертификата
    key_file:/var/lib/jatoba/certs/ja_log.key # Путь до файла ключа
    ca_file: /var/lib/jatoba/certs/root.crt # Путь до файла ca
    crl_file: /var/lib/jatoba/certs/root.crl.pem # Путь до файла crl
```


Перезапустить службу jalog_server:


```
systemctl restart jalog_server.service
```


### ja_log (агент)

Агент устанавливается на целевую СУБД.

В файлах pg_hba.conf и postgresql.conf целевой СУБД записать параметры, аналогичные указанным в первом примечании (подключение к СУБД по SSL)

Убедиться, что в файле postgresql.conf есть параметры:


```
log_destination = 'csvlog' 
log_directory = 'log' 
logging_collector = on
```


Перезапустить СУБД командой:


```
systemctl restart jatoba-X.service
```


Установить на сервер СУБД компонент jatobaX-ja-log (подробно установка описана в документе «Компонент ja_Log. Централизованный сбор записей событий СУБД», вариант для агента).

Создать каталог для хранения сертификатов:


```
mkdir /var/lib/jatoba/certs
```


Скопировать в этот каталог все необходимые сертификаты. Задать права на каталог:


```
chown -R postgres /var/lib/jatoba/certs 
chmod 600 /var/lib/jatoba/certs/ja_log.key
```


В файл /usr/jatoba-X/etc/jalog/jalog_agent.yml параметры SSL


```
jalog_agent:
    agent_name:	# Уникальное имя агента
    ip:	# Ip-адрес агента
    # port: 22345	# Порт агента
    # task_puller_frequency: 15	# Частота запроса задач у сервера, в секундах
    # task_execution_frequency: 5	# Частота проверки лог-файлов, в секундах
    # Параметры сервера, с которым работает агент jalog_server:
    # ip: 127.0.0.1	# Ip-адрес сервера
    # port: 10051	# Порт сервера
# Параметры TLS
tls:
    cert_file:/var/lib/jatoba/certs/ja_log_agent.crt # Путь до сертификата
    key_file:/var/lib/jatoba/certs/ja_log_agent.key # Путь до файла ключа
    ca_file:/var/lib/jatoba/certs/root.crt # Путь до файла ca
    crl_file:/var/lib/jatoba/certs/root.crl.pem # Путь до файла crl
```



Запустить службу и добавить ее в автозагрузку:


```
systemctl start jalog_agent.service 
systemctl enable jalog_agent.service
```


### TLS соединение между «jalog_server» и служебной СУБД с БД ja_log

Раздел описывает настройку TLS соединения между серверной частью «jalog_server» компонента «ja_Log» и служебной СУБД с БД «ja_log».

TLS соединение между «jalog_server» и служебной СУБД с БД ja_log обеспечивается

- настройкой служебной СУБД для SSL/TLS соединения (см. п.[3](#настройка-ssl-соединений));

- настройкой серверной части «jalog_server» для SSL/TLS соединения (см. п [10.1](#ja_log-сервер));

В этом случае соединение установится автоматически.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image101_.png)

Рисунок 10.1 – Схема TLS соединения

### JDS. Подключение ja_Log для сбора событий

Перейти в Настройки - Цели - Добавить

Заполнить настройки для подключения к серверу ja_log. В поле сертификат нужно указать бандл корневого и всех промежуточных сертификатов, созданный в разделе Создание и конвертация сертификатов. В качестве функционала выбрать «Список событий»

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image182.png)

Рисунок 10.2- Окно создание цели

Нажать на кнопку с «+» (Добавить подключение). Заполнить настройки, выбрать режим VerifyFull, способ аутентификации - «SSL-сертификат», в качестве сертификата добавить контейнер pfx указанного выше пользователя.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image183.png)

Рисунок 10.3 – Окно редактирования подключения к цели

Кнопка Тест подключения должна отобразить уведомление об успешном подключении

В разделе «Аудит и отчетность» - «Список событий» выбрать созданную цель. Должны отобразиться события за выбранный период, собранные агентом ja_log на целевом хосте.

## JAPOOLER. БАЛАНСИРОВЩИК ПОДКЛЮЧЕНИЙ ПОЛЬЗОВАТЕЛЕЙ К СУБД

Провести стандартную установку компонента japooler на все узлы кластера, следуя шагам из документа «Компонент jaPooler. Руководство по установке и эксплуатации».

### jaPooler. Подключение по SSL

Данный способ предусматривает подключение всех пользователей СУБД через japooler ТОЛЬКО ПО СЕРТИФИКАТУ.

Для использования SSL-подключения через JaPooler к СУБД Jatoba должна быть настроена и сама СУБД (см. руководство администратора п. 6.1.2. Настройка SSL).

В pg_ident.conf для всех СУБД, которые должны работать по сертификатам, необходимо сделать сопоставление с пользователем japooler - pgbouncer:


```
# MAPNAME   SYSTEM-USERNAME     PG-USERNAME
usermap     pgbouncer           user1
usermap     pgbouncer           user2
```


В pg_hba.conf для всех пользователей СУБД, которые должны подключаться по сертификатам, должна быть соответствующая запись:


```
# TYPE  DATABASE    USER    ADDRESS     METHOD
hostssl all         user1   all         cert clientcert=verify-full map=usermap 
hostssl all         user2   all         cert clientcert=verify-full map=usermap
```


Для сервера с japooler и пользователя pgbouncer сформировать сертификаты по инструкциям из раздела «Создание сертификатов» (сертификат сервера должен содержать CN с именем сервера или его IP-адресом), скопировать их, а также корневой сертификат (root.crt) в каталог /usr/jatoba-X/etc/pgbouncer/ создать файл конфигурации japooler - /usr/jatoba-X/etc/pgbouncer/pgbouncer.ini по примеру:


```
[databases]
postgres = host=astra1.local dbname=postgres port=5432
strategy=always_rw
dbname1 = host=astra1.local dbname=dbname1 port=5432
strategy=always_rw
* = host=astra1.local port=5432 strategy=always_rw
[pgbouncer]
listen_port = 6432
listen_addr = *
logfile = /usr/jatoba-X/var/log/pgbouncer/pgbouncer.log
pidfile = /var/run/jatoba/pgbouncer.pid
pool_mode = transaction
max_client_conn = 1024
default_pool_size = 16
ignore_startup_parameters=idle_in_transaction_session_timeout,
extra_float_digits
```


```
client_tls_sslmode = verify-full
client_tls_ca_file = /usr/jatoba-X/etc/pgbouncer/root.crt
client_tls_key_file = /usr/jatobaX/etc/pgbouncer/astra1.local.key
client_tls_cert_file = /usr/jatobaX/etc/pgbouncer/astra1.local.crt
```


```
server_tls_sslmode = verify-full
server_tls_ca_file = /usr/jatoba-X/etc/pgbouncer/root.crt
server_tls_key_file = /usr/jatoba-X/etc/pgbouncer/pgbouncer.key
server_tls_cert_file = /usr/jatobaX/etc/pgbouncer/pgbouncer.crt
server_tls_ciphers = fast
admin_users = pgbouncer
auth_type = cert
auth_file = /usr/jatoba-X/etc/pgbouncer/userlist.txt
```




Необходимо обратить внимание, что client_tls_key_file и client_tls_cert_file – это сертификаты сервера, на котором работает japooler, а server_tls_key_file и server_tls_cert_file – это сертификаты пользователя pgbouncer, он же должен быть указать в параметре admin_user.

Параметр client_tls_sslmode и server_tls_sslmode должны быть в значении verify_full, а auth_type – cert.

В файле /usr/jatoba-X/etc/pgbouncer/userlits.txt добавить строки cо всеми пользователями, которые могут подключаться по сертификату, без указания пароля:


```
"user1" ""
"user2" ""
```


Задать права на файлы конфигурации и сертификатов:


```
chown postgres: /usr/jatoba-X/etc/pgbouncer/* 
chmod 600 /usr/jatoba-X/etc/pgbouncer/*.crt
chmod 600 /usr/jatoba-X/etc/pgbouncer/*.key
```


Чтобы применить изменения в файлах pg_hba.conf и pg_ident.conf, необходимо перезапустить СУБД или перечитать конфигурацию, подключившись через psql:


```
systemctl restart jatoba-X.service
```


или


```
select pg_reload_conf();
```


Запустить сервис japoooler:


```
systemct start pgbouncer.service
```


Проверить подключения к СУБД через jaPooler можно выполнив команды:


```
psql "dbname=postgres host=astra1.local port=6432 user=user1 sslmode=verify-full sslcert=/usr/jatoba-X/ssl/user1.crt sslkey=/usr/jatoba-X/ssl/user1.key sslrootcert=/usr/jatoba-X/ssl/root.crt"
```


или


```
psql -p 6432 -h astra1.local -U user1 "dbname=postgres sslmode=verify-full sslcert=/usr/jatoba-X/ssl/user1.crt sslkey=/usr/jatoba-X/ssl/user1.key sslrootcert=/usr/jatoba-X/ssl/root.crt"
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image184.jpeg)

Рисунок 11.1 – Проверка SSL-соединения

При попытке подключиться без использования сертификата будет получена ошибка:

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image185.jpeg)

Рисунок 11.2 – Вывод с ошибкой

### jaPooler. Подключение по SSL с паролем

Данный способ предусматривает возможность подключение пользователей СУБД через japooler по паролю без сертификата, так и по сертификату с паролем. Данный метод так же обеспечивает шифрование передачи данных, но при этом всегда требует пароль, не зависимо от наличия сертификата пользователя.

Для использования SSL-подключения через jaPooler к СУБД Jatoba должна быть настроена и сама СУБД (см. руководство администратора п. 6.1.2. Настройка SSL).

В pg_ident.conf для всех СУБД, которые должны подключаться по сертификатам, необходимо сделать сопоставление с пользователем japooler – pgbouncer. Пользователей, которые будут подключаться только по паролю, указывать не обязательно.

```
# MAPNAME   SYSTEM-USERNAME     PG-USERNAME
usermap     pgbouncer           user1
usermap     pgbouncer           user2
```





В pg_hba.conf для всех пользователей СУБД, которые должны подключаться по сертификатам, должна быть соответствующие записи с методом аутентификации по сертификату и паролю:


```
# TYPE DATABASE USER ADDRESS METHOD
hostssl all user1 all cert clientcert=verify-full map=usermap
hostssl all user2 all cert clientcert=verify-full map=usermap
host all user1 all md5
host all user2 all md5
```


В postgresql.conf СУБД указать метод шифрования пароля md5, возможно также использование SCRAM-SHA-256.


```
password_encryption = md5
```


Для сервера с japooler и пользователя pgbouncer сформировать сертификаты по инструкциям из раздела «Создание сертификатов» (сертификат сервера должен содержать CN с именем сервера или его IP-адресом), скопировать их, а также корневой сертификат (root.crt) в каталог /usr/jatoba-X/etc/pgbouncer/

Создать файл конфигурации japooler - /usr/jatoba-X/etc/pgbouncer/pgbouncer.ini по примеру:


```
[databases]
postgres = host=astra1.local dbname=postgres port=5432
strategy=always_rw
dbname1 = host=astra1.local dbname=dbname1 port=5432
strategy=always_rw
* = host=astra1.local port=5432 strategy=always_rw
```


```
[pgbouncer]
listen_port = 6432
listen_addr = *
logfile = /usr/jatoba-X/var/log/pgbouncer/pgbouncer.log
pidfile = /var/run/jatoba/pgbouncer.pid
pool_mode = transaction
max_client_conn = 1024
default_pool_size = 16
ignore_startup_parameters=idle_in_transaction_session_timeout,extra_float_digits
client_tls_sslmode = require
client_tls_ca_file = /usr/jatoba-X/etc/pgbouncer/root.crt
client_tls_key_file = /usr/jatobaX/etc/pgbouncer/astra1.local.key
client_tls_cert_file = /usr/jatobaX/etc/pgbouncer/astra1.local.crt
```


```
server_tls_sslmode = verify-full
server_tls_ca_file = /usr/jatoba-X/etc/pgbouncer/root.crt
server_tls_key_file = /usr/jatoba-X/etc/pgbouncer/pgbouncer.key
server_tls_cert_file = /usr/jatobaX/etc/pgbouncer/pgbouncer.crt
server_tls_ciphers = fast
admin_users = pgbouncer
auth_type = md5
auth_file = /usr/jatoba-X/etc/pgbouncer/userlist.txt
```


Необходимо обратить внимание, что client_tls_key_file и client_tls_cert_file – это сертификаты сервера, на котором работает japooler, а server_tls_key_file и server_tls_cert_file – это сертификаты пользователя pgbouncer, он же должен быть указать в параметре admin_user.

Параметры: client_tls_sslmode должен быть в значении require, server_tls_sslmode должен быть в значении verify_full, а auth_type – md5, возможно также использование SCRAM-SHA-256.

В файле /usr/jatoba-X/etc/pgbouncer/userlits.txt для всех пользователей СУБД, которые могут подключаться через JaPooler, указать имя и пароль. Пароль можно указывать как в открытом виде, так и в виде хеша md5. Принятый формат пароля, защищённого MD5: "md5" + md5(password + username).

Например, для пользователя user1 с паролем sql хэш пароля будет следующим: md5d5f86855b37ab02281443ffc4d5070a8. Так же можно использовать SCRAM-SHA-256.


```
"user1" "md5d5f86855b37ab02281443ffc4d5070a8" 
"user2" "md5e61f39e52ac9b551616f951594f31c0e" 
"user3" "SCRAM-SHA-256\$4096:7OyC1VG7nzPxHiu+JNFIPg==\$IXKFrCJDF5cu1GUkJaQ/FYd300MeNRAyOqTduA/NzwA=:xqsKCIfpT+qhoZNHGySdpOlsXOvzVg1gAPckHjOYw7s=" 
"user4" "123456Aa"
"pgbouncer" "12345"
```


Сгенерировать MD5 хэш можно на сайте <https://www.md5hashgenerator.com/> или взять из СУБД с помощью запроса, в том числе для паролей с хэш SCRAM:


```sql
select '"'||rolname||'" '||'"'||rolpassword||'"' 
    from pg_authid
    where rolpassword is not NULL;
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image186.jpeg)



Рисунок 11.3 – Генерация MD5 хэш 

Задать права на файлы конфигурации и сертификатов:


```
chown postgres: /usr/jatoba-X/etc/pgbouncer/* 
chmod 600 /usr/jatoba-X/etc/pgbouncer/*.crt
chmod 600 /usr/jatoba-X/etc/pgbouncer/*.key
```


Чтобы применить изменения в файлах pg_hba.conf и pg_ident.conf, необходимо перезапустить СУБД или перечитать конфигурацию, подключившись через psql:


```
systemctl restart jatoba-X.service
```


или


```
select pg_reload_conf();
```


Перезапустить сервис japoooler:


```
systemct restart pgbouncer.service
```


Проверить подключения к СУБД через jaPooler можно выполнив команды:


```
# psql "dbname=postgres host=astra1.local port=6432 user=user1 sslmode=verify-full sslcert=/usr/jatoba-X/ssl/user1.crt sslkey=/usr/jatoba-X/ssl/user1.key sslrootcert=/usr/jatoba-X/ssl/root.crt"
# psql -p 6432 -h astra1.local -U user1 "dbname=postgres sslmode=verify-full sslcert=/usr/jatoba-X/ssl/user1.crt sslkey=/usr/jatoba-X/ssl/user1.key sslrootcert=/usr/jatoba-X/ssl/root.crt"
# psql -p 6432 -h astra1.local -U user1 -d postgres
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image187.jpeg)

Рисунок 11.4 – Вывод проверки подключения

При попытке подключиться пользователем, не указанным в userlist.txt, получим ошибку:

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image188.jpeg)

Рисунок 11.5 – Вывод ошибки подключения

## JA_SYNC_LDAP. СИНХРОНИЗАЦИЯ УЧЕТНЫХ ЗАПИСЕЙ СЛУЖБ КАТАЛОГОВ И СУБД

Все процедуры раздела будут проводиться на сервере с расширением ja_sync_ldap.

Расширение устанавливается и настраивается по инструкции "Руководство по настройке. Часть 8. Синхронизация учетных записей служб каталогов и СУБД. Компонент «ja_Sync_LDAP".

Подключение рассматривается на примере службы каталогов Samba.

Для работы расширения по LDAPS требуется корневой сертификат (к примеру, rootCA.crt), сгенерированный в службе сертификатов контроллера домена. Файл необходимо скопировать в каталог на сервере с ja_sync_ldap, в данном случае /usr/share/ca-certificates/.

Данный сертификат нужно установить в системе:


```
cp ~/root.crt /usr/share/ca-certificates/ update-ca-certificates
```


или для РедОС:


```
cp ~/rootCA.crt /etc/pki/ca-trust/source/anchors/ update-ca-trust
```


В файле /etc/hosts сервера с ja_sync_ldap (или в DNS-сервере) должно быть прописано соответствие адреса и FQDN для сервера DC. Синхронизация будет происходить по этому имени.


```
127.0.0.1 localhost
127.0.1.1 ubuntu
172.19.19.31 dc.example.local
```


Команда ping dc.example.local должна возвращать успешный ответ.

Чтобы добавить поддержку SSL-соединения в существующий профиль синхронизации, используется команда:


```sql
SELECT ja_sync_ldap.set_ssl_profile(<Profile_ID>, true);
```


Для указания пути к сертификату используется команда


```sql
SELECT ja_sync_ldap.set_ca_cert_profile(<Profile_ID>, '</usr/share/ca-certificates/rootCA.crt>');
```


Просмотреть профили SQL-командой:


```sql
SELECT ja_sync_ldap.get_sync_profiles();
```




![](@site/docs/assets/images/com18.3.1/secur_guide/media/image189.jpeg)

Рисунок 12.1 – Вывод профилей синхронизации 

Аналогичные настройки можно провести в интерфейсе JDS.

Добавить цель с функциональностью «LDAP-синхронизация» и пользователя для цели.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image190.png)

Рисунок 12.2 – Окно создания цели

В разделе «LDAP-синхронизация добавить новый профиль. В данном случае не нужен pfx-бандл.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image191.png)

Рисунок 12.3 – Окно редактирования профиля синхронизации 

Для данного профиля добавить маппинг и нажать Синхронизация

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image192.png)

Рисунок 12.4 - Окно редактирования маппинга

## SSL АУТЕНТИФИКАЦИЯ В КОНТЕЙНЕРЕ

Существует два способа настройки и использования SSL аутентификации между клиентом (клиентской частью psql) и СУБД «Jatoba» в контейнерном исполнении:

- Запуск контейнера через docker compose с SSL аутентификацией (п.п. [13.1](#запуск-контейнера-через-docker-compose-с-ssl-аутентификацией));

- Запуск контейнера с SSL аутентификацией (п.п. [13.2](#_bookmark60)).

SSL аутентификация используется между хостом с установленной клиентской частью, т.е. с утилитой psql и СУБД «Jatoba» в контейнерном исполнении.

В дальнейшем описании будут использованы обозначения:

- СУБД «Jatoba» в контейнерном исполнении ВМ1 (docker);

- хост с установленнй клиентской частью – ВМ 2 (psql).

### Запуск контейнера через docker compose с SSL аутентификацией

Настройка и запуск контейнера через docker compose с SSL аутентификацией подразумевает следующие шаги:

**ВМ1 (docker)**

- Импортировать образ контейнера на ВМ1 (docker):


```
cd container chmod +x *.sh
./setup.sh
```


- Изменить права доступа на скрипт по созданию сертификатов:


```
chmod a+x generate-ssl-certs.sh
```


- Выполнить скрипт по созданию ssl-сертификатов:


```
./generate-ssl-certs.sh
```


В результате, текущей директории создан каталог «ssl», будут сформированы сертификаты и выведено сообщение:

> CA Certificate Jatoba Root CA has been successfully generated. Certificate server has been successfully generated.

Certificate client has been successfully generated.

- Перейти в каталог standalone и раскомментировать строку в docker-compose.yml:


```
nano docker-compose.yml
- ${SSL_CERTS_PATH}:<путь к каталогу ssl>/ssl/certs
```

- Открыть файл переменных окружения .env и добавить следующие параметры:


```
SSL_MODE=true
SSL_CERTS_PATH=<путь к папке ssl>/ssl/server
```


- Выполнить запуск СУБД:


```
docker-compose up -d
```


**Локально - на ВМ1 (docker), где запущен docker**

- Добавить SN имя, используемое в server сертификате (по умолчанию jatobadb) в /etc/hosts:


```
sudo bash -c "echo '127.0.0.1 jatobadb' >> /etc/hosts"
```


- Задать следующую переменную:


```
export SSL_DIR=<путь к каталогу ssl>/ssl/client chmod 600 $SSL_DIR/client.key
```


- Установить клиент psql и запустить его используя переменные окружения с SSL-аутентификацией:


```
PGSSLMODE=verify-full \ 
PGSSLROOTCERT=\$SSL_DIR/root.crt \ 
PGSSLCERT=\$SSL_DIR/client.crt \ 
PGSSLKEY=\$SSL_DIR/client.key \
psql -U postgres -p 54321 -h jatobadb
```


Подключение выполнено успешно.

**Подключение с удаленного хоста ВМ2 (psql)**

- Скопировать каталог ssl/client на ВМ2

- Добавить SN имя используемое в server сертификате (по умолчанию jatobadb) в /etc/hosts:


```
sudo bash -c "echo '<ip адрес VM, где развернут сервис jatobadb в докере> jatobadb' >> /etc/hosts";
```


- Задать следующую переменную:


```
export SSL_DIR=<путь к каталогу ssl>/ssl/client chmod 600 $SSL_DIR/client.key
```


- Запустить psql, используя переменные окружения с SSL-аутентификацией:


```
PGSSLMODE=verify-full \ 
PGSSLROOTCERT=\$SSL_DIR/root.crt \ 
PGSSLCERT=\$SSL_DIR/client.crt \ 
PGSSLKEY=\$SSL_DIR/client.key \
psql -U postgres -p 54321 -h jatobadb
```


Подключение выполнено успешно.

- Получить pid номер соединения и проверить тип соединения:


```sql
SELECT pg_backend_pid();
SELECT * from pg_stat_ssl where pid=<pid номер из предыдущего запроса>;
```


Вывод:


```
ssl=t version="TLSv1.3"
cipher="TLS_AES_256_GCM_SHA384" 
client_dn="/CN=postgres" 
client_serial=< not null > 
issuer_dn="/CN=Jatoba Root CA"
```


###  Запуск контейнера с SSL аутентификацией

Настройка и запуск контейнера с SSL аутентификацией подразумевает следующие шаги:

- Импортировать образ контейнера на ВМ1 (docker):


```
cd container chmod +x *.sh
./setup.sh
```


- Изменить права доступа на скрипт по созданию сертификатов:


```
chmod a+x generate-ssl-certs.sh
```


В результате, текущей директории создан каталог «ssl», будут сформированы сертификаты и выведено сообщение:

> CA Certificate Jatoba Root CA has been successfully generated. Certificate server has been successfully generated. Certificate client has been successfully generated.

- Открыть файл переменных окружения .env и добавить следующие параметры:


```
SSL_MODE=true
SSL_CERTS_PATH=<путь к каталогу ssl>/ssl/server
```


- Выполнить:


```
./run.sh; ./log.sh
```


СУБД успешно запущена

**Локально - на ВМ1 (docker), где запущен docker**

- Добавить SN имя используемое в server сертификате (по умолчанию jatobadb) в /etc/hosts:


```
sudo bash -c "echo '127.0.0.1 jatobadb' >> /etc/hosts"
```


- Задать следующую переменную:


```
export SSL_DIR=<путь к каталогу ssl>/ssl/client chmod 600 $SSL_DIR/client.key
```


- Установить клиент psql и запустить его используя переменные окружения с SSL-аутентификацией:


```
PGSSLMODE=verify-full \ 
PGSSLROOTCERT=\$SSL_DIR/root.crt \ 
PGSSLCERT=\$SSL_DIR/client.crt \ 
PGSSLKEY=\$SSL_DIR/client.key \
psql -U postgres -p 54321 -h jatobadb
```


- Получить pid номер соединения и проверить тип соединения:


```sql
SELECT pg_backend_pid();
SELECT * from pg_stat_ssl where pid=<pid номер из предыдущего запроса>;
```


При правильной настройке будет вывод:


```
ssl=t 
version="TLSv1.3"
cipher="TLS_AES_256_GCM_SHA384" 
client_dn="/CN=postgres" 
client_serial=< not null > 
issuer_dn="/CN=Jatoba Root CA"
```


**Подключение с удаленного хоста ВМ2 (psql)**

- Скопировать каталог ssl/client на ВМ2

- Добавить SN имя, используемое в server сертификате (по умолчанию jatobadb) в /etc/hosts:


```
sudo bash -c "echo '<ip адрес VM, где развернут сервис jatobadb в докере> jatobadb' >> /etc/hosts"
```


- Задать следующую переменную:


```
export SSL_DIR=<путь к каталогу ssl>/ssl/client chmod 600 $SSL_DIR/client.key
```


- Запустить psql, используя переменные окружения с SSL-аутентификацией:


```
PGSSLMODE=verify-full \ 
PGSSLROOTCERT=\$SSL_DIR/root.crt \ 
PGSSLCERT=\$SSL_DIR/client.crt \ 
PGSSLKEY=\$SSL_DIR/client.key \
psql -U postgres -p 54321 -h jatobadb
```


Подключение выполнено успешно.

- Получить pid номер соединения и проверить тип соединения:


```
SELECT pg_backend_pid();
SELECT * from pg_stat_ssl where pid=<pid номер из предыдущего запроса>;
```


При корректной настройке SSL-соединения будет следующий вывод:


```
ssl=t 
version="TLSv1.3"
cipher="TLS_AES_256_GCM_SHA384" 
client_dn="/CN=postgres" 
client_serial=< not null > 
issuer_dn="/CN=Jatoba Root CA"
```


## ПРИМЕР НАСТРОЙКИ SSL-СОЕДИНЕНИЙ JDS

В приведенном ниже описании приведен пример создания цели (Target) с подключением по SSL/TLS.

:::warning Важная информация
Информация, приведенная в разделе, носит рекомендательный характер и может использоваться в качестве примера или в учебных целях.

В ИТ - инфраструктуре рекомендуется использовать сертификаты и ключи, выпущенные Удостоверяющими центрами, программное обеспечение которых имеет сертификат соответствия ФСБ России.

:::

### Требуемое программное обеспечение

Для формирования сертификатов требуется установить версию OpenSSL не ниже 3.\*.

### Пользователи

В целевой СУБД создать тестового пользователя СУБД SQL-командой:


```sql
CREATE ROLE "test_user" login password 'P@ssword';
```


### Каталог хранения сертификатов

Созданные сертификаты и конфигурационные файлы целесообразнее хранить в отдельном каталоге. В рассматриваемом примере используется каталог /usr/share/jds/cert.

Создается каталог командой:

```sql
sudo mkdir /usr/share/jds/cert
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image193.png)



Рисунок 14.1 – Команда создания каталога

### Создание конфигурационных файлов OpenSSL

#### Конфигурационный файл OpenSSL корневого ЦС

Создать конфигурационный файл OpenSSL корневого ЦС командой:


```
gedit _openssl.root.conf
```


Вставить в него следующие параметры:


```
[req] 
distinguished_name=dn 
[ dn ]
[ v3_ca ] 
basicConstraints=CA:TRUE,pathlen:1
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image142_.png)

Рисунок 14.2 – Содержание конфигурационного файла OpenSSL корневого ЦС

#### Конфигурационный файл OpenSSL промежуточного ЦС

Создать конфигурационный файл OpenSSL промежуточного ЦС командой:


```
gedit _openssl.intermediate.conf
```


Вставить в него следующие параметры:


```
[req] 
distinguished_name=dn 
[ dn ]
[ v3_ca ] 
basicConstraints=CA:TRUE,pathlen:0
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image143_.png)

Рисунок 14.3 - Содержание конфигурационного файла OpenSSL промежуточного ЦС

### Создание самоподписанных сертификатов

#### Самоподписанный сертификат корневого ЦС (Root CA)

Создать ключ корневого ЦС командой:

```
#openssl req -new -nodes -text -out root.csr -keyout root.key - subj "/CN=Jatoba Root CA"
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image196.png)



Рисунок 14.4 – Команда создания ключа корневого ЦС 

Создать сертификат корневого ЦС командой:

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image197.png)


```
#openssl x509 -req -in root.csr -text -days 3650 -signkey root.key -out root.crt -extfile _openssl.root.conf -extensions v3_ca
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image145_.png)

Рисунок 14.5 – Команда создания сертификата корневого ЦС

#### Самоподписанный сертификат промежуточного ЦС (Root CA)

Создать ключ промежуточного ЦС командой:

```
#openssl req -new -nodes -text -out intermediate.csr -keyout intermediate.key -subj "/CN=Jatoba Intermediate CA"
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image198.png)



Рисунок 14.6 – Команда создания ключа промежуточного ЦС 

Создать сертификат промежуточного ЦС командой:


```
#openssl x509 -req -in intermediate.csr -text -days 1825 -CA root.crt -CAkey root.key -CAcreateserial -out intermediate.crt -extfile _openssl.intermediate.conf -extensions v3_ca
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image199.png)

Рисунок 14.7 – Команда создания сертификата промежуточного ЦС командой:

#### Самоподписанный сертификат сервера СУБД (Root CA)

Создать ключ сервера СУБД командой:


```
#openssl req -new -nodes -text -out server.csr -keyout server.key -subj "/CN=<hostname>"
```

:::info Дополнительная информация
В значении CN=<hostname> должно указываться имя хоста, на котором установлена СУБД. Получить данное имя возможно выводом команды в терминале ОС.


```
# hostname
```
:::

Создать сертификат сервера СУБД командой:


```
#openssl x509 -req -in server.csr -text -days 365 -CA intermediate.crt -CAkey intermediate.key -CAcreateserial -out server.crt
```


Создать цепочку сертификатов ЦС (CA Bundle). Создать файл server.crt-bundle командой:


```
nano server.crt-bundle
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image200.png)

Рисунок 14.8 – Команда создания файла server.crt-bundle

В открывшийся файл последовательно вставить содержание сертификатов:

- server;

- intermediate;

- root.

Последовательность добавления сертификатов нарушать нельзя.

В параллельной сессии терминала ОС открыть файл сертификата server.crt через команду:


```
gedit server.crt
```


Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке [14.9](#_bookmark72).

<span id="_bookmark72" class="anchor"></span>Рисунок 14.9 – Копируемая область сертификата server.crt 

Вставить из буфера обмена в файл server.crt-bundle.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image202.png)

Рисунок 14.10 – Вставленное содержимое сертификата server.crt

В параллельной сессии терминала ОС открыть файл сертификата промежуточного ЦС intermediate.crt через команду:


```
gedit intermediate.crt
```


Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке [14.11](#_bookmark73).

<span id="_bookmark73" class="anchor"></span>Рисунок 14.11 - Копируемая область сертификата intermediate.crt

Вставить из буфера обмена в файл server.crt-bundle.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image204.png)

Рисунок 14.12 – Вставленное содержимое сертификата intermediate.crt

В параллельной сессии терминала ОС открыть файл сертификата root.crt через команду:


```
gedit root.crt
```


Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке [14.13](#_bookmark74).

<span id="_bookmark74" class="anchor"></span>Рисунок 14.13 - Копируемая область сертификата root.crt 

Вставить из буфера обмена в файл server.crt-bundle.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image206.png)

Рисунок 14.14 – Вставленное содержимое сертификата root.crt 

Сохранить и закрыть файл.

Создать файл root.crt-bundle командой:

```
nano root.crt-bundle
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image207.png)



Рисунок 14.15 – Команда создания файла root.crt-bundle

В открывшийся файл последовательно вставить содержание сертификатов:

- intermediate;

- root.

Последовательность добавления сертификатов нарушать нельзя.

В параллельной сессии терминала ОС открыть файл сертификата промежуточного ЦС intermediate.crt через команду:


```
gedit intermediate.crt
```


Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке [14.11](#_bookmark73).

Вставить из буфера обмена в файл root.crt-bundle.

В параллельной сессии терминала ОС открыть файл сертификата root.crt через команду:


```
gedit root.crt
```


Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке [14.13](#_bookmark74).

Вставить из буфера обмена в файл root.crt-bundle.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image208.png)

Рисунок 14.16 – Содержание файла root.crt-bundle 

Сохранить и закрыть файл.

### Создание клиентских сертификатов

#### Клиентский сертификат пользователя postgres

Создать ключ для клиентского сертификата пользователя postgres:


```
#openssl req -new -nodes -text -out client.postgres.csr -keyout client.postgres.key -subj "/CN=postgres"
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image209.png)

Рисунок 14.17 – Команда создания ключа для клиентского сертификата postgres 

Создать клиентский сертификат для пользователя postgres:

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image210.png)


```
#openssl x509 -req -in client.postgres.csr -text -days 365 -CA intermediate.crt -CAkey intermediate.key -CAcreateserial -out client.postgres.crt
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image1418_.png)

Рисунок 14.18 – Создание клиентского сертификата client.postgres.crt

##### Конвертация клиентского сертификата postgres в PKCS#12

Сформировать цепочку сертификатов промежуточного и корневого ЦС.


```
#type intermediate.crt > client.postgres.crt-bundle 
#type root.crt >> client.postgres.crt-bundle
```


Затем из нее, клиентского сертификата и соответствующего ему закрытого ключа создадим контейнер PFX. Пароль защиты закрытого ключа оставим пустым.

##### Создание цепочки сертификатов промежуточного и корневого ЦС для клиентского сертификата postgres

Создать файл client.postgres.crt-bundle командой:


```
nano client.postgres.crt-bundle
```


В открывшийся файл последовательно вставить содержание сертификатов:

- intermediate;

- root.

Последовательность добавления сертификатов нарушать нельзя.

В параллельной сессии терминала ОС открыть файл сертификата промежуточного ЦС intermediate.crt через команду:


```
gedit intermediate.crt
```


Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке [14.11](#_bookmark73).

Вставить из буфера обмена в файл client.postgres.crt-bundle.

В параллельной сессии терминала ОС открыть файл сертификата root.crt через команду:


```
gedit root.crt
```


Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке [14.13](#_bookmark74).

Вставить из буфера обмена в файл client.postgres.crt-bundle. Сохранить и закрыть файл.

##### Создание контейнера PFX

Из сформированной цепочки сертификатов промежуточного и корневого ЦС, клиентского сертификата postgres и соответствующего ему закрытого ключа создайте контейнер PFX командой:

```
#openssl pkcs12 -inkey client.postgres.key -in client.postgres.crt -certfile client.postgres.crt-bundle - export -out client.postgres.pfx
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image211.png)



Рисунок 14.19 – Команда создания контейнера client.postgres.pfx 

Пароль защиты закрытого ключа оставим пустым.

#### Клиентский сертификат пользователя JDS

Создать ключ для клиентского сертификата пользователя JDS:

```
#openssl req -new -nodes -text -out client.jds.csr -keyout client.jds.key -subj "/CN=jds"
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image212.png)



Рисунок 14.20 - Команда создания ключа для клиентского сертификата JDS 

Создать клиентский сертификат для пользователя JDS:


```
#openssl x509 -req -in client.jds.csr -text -days 365 -CA intermediate.crt -CAkey intermediate.key -CAcreateserial -out client.jds.crt
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image213.png)

Рисунок 14.21 – Создание клиентского сертификата client.jds.crt

##### Конвертация клиентского сертификата JDS в PKCS#12

Сформировать цепочку сертификатов промежуточного и корневого ЦС.


```
type intermediate.crt > client.jds.crt-bundle 
type root.crt >> client.jds.crt-bundle
```


Затем из нее, клиентского сертификата и соответствующего ему закрытого ключа создадим контейнер PFX. Пароль защиты закрытого ключа оставим пустым.

##### Создание цепочки сертификатов промежуточного и корневого ЦС для клиентского сертификата JDS

Создать файл client.jds.crt-bundle командой:


```
nano client.jds.crt-bundle
```


В открывшийся файл последовательно вставить содержание сертификатов:

- intermediate;

- root.

Последовательность добавления сертификатов нарушать нельзя.

В параллельной сессии терминала ОС открыть файл сертификата промежуточного ЦС intermediate.crt через команду:


```
gedit intermediate.crt
```


Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке [14.11](#_bookmark73).

Вставить из буфера обмена в файл client.jds.crt-bundle.

В параллельной сессии терминала ОС открыть файл сертификата root.crt через команду:


```
gedit root.crt
```


Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке [14.13](#_bookmark74).

Вставить из буфера обмена в файл client.jds.crt-bundle. Сохранить и закрыть файл.

##### Создание контейнера PFX

Из сформированной цепочки сертификатов промежуточного и корневого ЦС, клиентского сертификата postgres и соответствующего ему закрытого ключа создайте контейнер PFX командой:

```
#openssl pkcs12 -inkey client.jds.key -in client.jds.crt - certfile client.jds.crt-bundle -export -out client.jds.pfx
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image214.png)



Рисунок 14.22 - Команда создания контейнера client.jds.pfx 

Пароль защиты закрытого ключа оставим пустым.

#### Клиентский сертификат пользователя test_user

Создать ключ для клиентского сертификата пользователя test_user:

```
#openssl req -new -nodes -text -out client.test_user.csr - keyout client.test_user.key -subj "/CN=test_user"
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image215.png)



Рисунок 14.23 - Команда создания ключа для клиентского сертификата test_user 

Создать клиентский сертификат для пользователя test_user:

```
#openssl x509 -req -in client.test_user.csr -text -days 365 -CA intermediate.crt -CAkey intermediate.key -CAcreateserial -out client.test_user.crt
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image216.png)



Рисунок 14.24 – Создание клиентского сертификата client.test_user.crt

##### Конвертация клиентского сертификата test_user в PKCS#12

Сформировать цепочку сертификатов промежуточного и корневого ЦС.


```
#type intermediate.crt > client.postgres.crt-bundle 
#type root.crt >> client.postgres.crt-bundle
```


Затем из нее, клиентского сертификата и соответствующего ему закрытого ключа создадим контейнер PFX. Пароль защиты закрытого ключа оставим пустым.

##### Создание цепочки сертификатов промежуточного и корневого ЦС для клиентского сертификата test_user

Создать файл client.test_user.crt-bundle командой:


```
nano client.test_user.crt-bundle
```


В открывшийся файл последовательно вставить содержание сертификатов:

- intermediate;

- root.

Последовательность добавления сертификатов нарушать нельзя.

В параллельной сессии терминала ОС открыть файл сертификата промежуточного ЦС intermediate.crt через команду:


```
gedit intermediate.crt
```


Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке [14.11](#_bookmark73).

Вставить из буфера обмена в файл client.postgres.crt-bundle.

В параллельной сессии терминала ОС открыть файл сертификата root.crt через команду:


```
gedit root.crt
```


Выделить и скопировать содержание сертификата от значения «BEGIN CERTIFICATE» до «END CERTIFICATE», как показано на рисунке [14.13](#_bookmark74).

Вставить из буфера обмена в файл client.test_user.crt-bundle.

Сохранить и закрыть файл.

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image217.png)

Рисунок 14.25 – Содержание файла client.test_user.crt-bundle

##### Создание контейнера PFX

Из сформированной цепочки сертификатов промежуточного и корневого ЦС, клиентского сертификата test_user и соответствующего ему закрытого ключа создайте контейнер PFX командой:


```
#openssl pkcs12 -inkey client.test_user.key -in client.test_user.crt -certfile client.test_user.crt-bundle - export -out client.test_user.pfx
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image218.png)

Рисунок 14.26 – Команда создания контейнера client.test_user.pfx

### Структура хранения сертификатов

В силу особенностей архитектуры установки компонента JDS, служебной и целевых СУБД, возникает необходимость в структурированном хранении сертификатов.

Сертификаты СУБД предлагается хранить в каталоге:

> /var/lib/jatoba/сerts

Для создания SSL-соединения компонента JDS с целевой и/или служебной СУБД сертификат центра сертификации (CA) root.crt-bundle, должен храниться локально, например, в корневом каталоге:

> /сerts

Далее данный сертификат будет использован для создания «Target». Сертификаты компонента JDS должны храниться в каталоге:

> /opt/jds-cert

### Настройка СУБД для SSL-соединения

Целевая и служебная СУБД настраивается для SSL-соединения путем внесения изменений в конфигурационные файлы:

- /var/lib/jatoba/<ver>/data/postgresql.conf;

- /var/lib/jatoba/<ver>/data/pg_hba.conf.

В конфигурационный файл postgresql.conf внести следующие изменения:


```
ssl = on
ssl_ca_file = '/var/lib/jatoba/сerts root.crt-bundle' 
ssl_cert_file = '/var/lib/jatoba/сerts server.crt-bundle' 
ssl_key_file = '/var/lib/jatoba/сerts server.key'
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image1427_.png)

Рисунок 14.27 – Параметры SSL-соединения в СУБД

В конфигурационный файл pg_hba.conf внести следующие изменения:

```
# TYPE DATABASE USER ADDRESS METHOD OPTIONS
hostssl all all <ip адрес>/CIDR cert clientcert=verify-full hostssl all all 127.0.0.1/CIDR cert clientcert=verify-full
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image1428_.png)

Рисунок 14.28 – Содержание конфигурационного файла pg_hba.conf 

Скопировать в каталог/var/lib/jatoba/ файлы:

- root.crt-bundle;

- server.crt-bundle;

- server.key.

Назначить владельца postgres для сертификатов:


```
chown postgres:postgres /var/lib/jatoba/сerts server.key
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image221.png)

Рисунок 14.29 – Установка прав для сертификатов 

Перезапустить службу jatoba:

```
systemctl restart jatoba-5
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image222.png)



Рисунок 14.30 – Перезапуск и статус службы jatoba<ver>

На данном шаге настройка СУБД «Jatoba» для SSL-соединения закончена.

### Создание цели (Target) с SSL-соединением

Создание цели (Target) с SSL-соединением состоит из следующих шагов:

- Перейти в раздел «Настройки» – «Цели»;

- Нажать «Добавить»;

- Ввести название цели в поле «Наименование цели»;

- Ввести адрес существующего хоста в поле «Хост» (если целевая СУБД находится на том же хосте, что и JDS - указать localhost);

- В поле «Сертификат» вставить сертификат root.crt-bundle (см. п. [14.5.3](#самоподписанный-сертификат-сервера-субд-root-ca)«Самоподписанный сертификат сервера СУБД (Root CA)»)

Как описывалось в п. [14.7](#структура-хранения-сертификатов), настоящего документа, целесообразнее выбрать сертификат по пути:


```
/cert/root.crt-bundle
```


- В поле "Функциональность" выбрать все функциональности.

- Нажать "ОК".

### Настройка компонента JDS для SSL-соединений

При ручной настройке компонента JDS для SSL-соединений потребуется создать каталог:


```
/opt/jds-cert/
```


Скопировать файлы сертификатов:

- /opt/jds-cert/client.jds.pfx;

- /opt/jds-cert/root.crt-bundle.

В рассматриваемом примере, как описано в п. [14.3](#каталог-хранения-сертификатов), настоящего документа сформированные сертификаты храниться в каталоге:


```
/usr/share/jds/cert
```


Назначить владельца jds для сертификата и ключа:


```
# chown jds /opt/jds-cert/client.jds.pfx 
# chown jds /opt/jds-cert/root.crt-bundle
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image223.png)

Рисунок 14.31 – Назначение владельца jds для сертификата и ключа 

Назначить минимальные права для сертификата и ключа:

```
# chmod 0600 /opt/jds-cert/client.jds.pfx
# chmod 0600 /opt/jds-cert/root.crt-bundle
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image224.png)

Рисунок 14.32 – Установка прав на сертификат и ключ 

Выполнить рестарт службы jds:


```
systemctl restart jds
```


Открыть файл appsettings.json:


```
gedit /opt/jds/appsettings.json
```


Исследовать строку DefaultConnection:


```
"ConnectionStrings": {
    "DefaultConnection": "User Id=jds; Password=sql; Server=localhost; Database=jdsdb; Port=5432;"
},
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image1433_.png)

Рисунок 14.33 – Параметры по умолчанию в файле appsettings.json 

Имеющиеся параметры по умолчанию, т.е. строку подключения к БД, изменить и установить параметры подключения пользователя JDS по SSL.

"ConnectionStrings": {
    "DefaultConnection": "Server=ubuntu; Port=5432; Database=jdsdb; User Id=jds; SslMode=VerifyFull"
},

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image1434_.png)

Рисунок 14.34 – Строка подключения пользователя jds по SSL

Вручную добавить раздел ConnectionSslConfigurator с следующим содержанием:


```
},
"ConnectionSslConfigurator": { 
    "Connections": {
        "DefaultConnection": {
        "CAFile":"/opt/jds-cert/root.crt-bundle", 
        "ClientPfxFile":"/opt/jds-cert/client.jds.pfx", 
        "ClientPfxPassword":null, 
        "CheckServerCertificateRevocation":false
}
}
}
}
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image1435_.png)

Рисунок 14.35 - Раздел ConnectionSslConfigurator 

Выполнить рестарт службы jds:

```
# systemctl restart jds 
# systemctl status jds
```

На этом шаге настройка SSL-соединения закончено.

## ПОДГОТОВКА ХОСТОВ НА ОС WINDOWS

В данном разделе приведено описание установки SSH-соединения между хостами с компонентом JDS под управлением ОС Windows и хостами с СУБД под управлением GNU/Linux.

Основной целью явлется, чтобы локальная учётная запись, под которой работает компонент JDS, имела настроенные ssh-ключи для беспарольного входа на все целевые хосты под учётной записью jdscontrol (или другой, назначенной на целевом хосте как учётная запись для удалённого администрирования).

### Подготовка хоста с компонентом JDS

На хосте с компонентом JDS выполняются следующие действия:

:::info Дополнительная информация
Инструкции по установке SSH находятся по ссылкам:

https://learn.microsoft.com/ru-ru/windows/terminal/tutorials/ssh 

https://winitpro.ru/index.php/2020/01/22/vstroennyj-ssh-klient-windows/
:::

- создать локальную учётную «jdsuser» запись с правами обычного пользователя, установить ей пароль, согласно принятой политике сложности паролей;

- выполнить вход под учётной записью jdsuser

- создать ssh-ключи для учётной записи jdsuser, закрытый ключ без пароля командой:


```
ssh-keygen
```


- запомнить путь к файлу ключа;

- для каждого целевого хоста (включая localhost, если JDS управляет СУБД на собственном хосте):


```
type %USERPROFILE%\ssh\id_XXXX.pub | ssh jdscontrol@target_host "cat >> .ssh/authorized_keys"
```


- вместо id_XXXX указать актуальное имя файла публичного ключа;

- расширение должно быть .pub;

- ответить, т.е. ввести "yes" на предложение принять ключ целевого хоста;

- выйти (exit).

В результате, локальная учётная запись jdsuser на Windows-хосте будет иметь возможность беспарольного входя на целевые хосты.

В случае, когда компонент JDS развёрнут как IIS-приложение выполняются следующие действия:

- создать новый AppPool IIS, далее – JdsAppPool;

- настроить JdsAppPool на работы под локальной учётной записью jdsuser в качестве Identity, включить опцию загрузки профиля пользователя в настройке JdsAppPool;

- указать JdsAppPool в качестве пула приложений для сайта с JDS. 

:::info Дополнительная информация
Инструкции по настройке находятся по ссылке:

https://learn.microsoft.com/en-us/iis/manage/configuring-security/application-pool-identities#configuring-iis-application-pool-identities
:::

### Подготовка хоста с СУБД на ОС Windows

Подготовка хоста с СУБД на ОС Windows требует выполнения следующих действий:

- установить поддержку SSH;

:::info Дополнительная информация
Инструкции по установке SSH находятся по ссылкам:

https://learn.microsoft.com/ru-ru/windows/terminal/tutorials/ssh

https://winitpro.ru/index.php/2020/01/22/vstroennyj-ssh-klient-windows/

:::

- создать локальную учётную запись «jdscontrol» с правами обычного пользователя, установить ей пароль, согласно принятой политике сложности паролей;

- убедиться в возможности входа на Windows-хост с СУБД по SSH под учётной записью jdscontrol командой:


```
ssh jdscontrol@windows-host-with-jatoba
```


- после входа выполнить команду:


```
dir
```


- достаточно получить любой вывод

- выйти командой:


```
exit
```


- предоставить учётной записи jdscontrol следующие права:

  - право чтения списка файлов в каталоге DATA;

  - право чтения списка файлов в каталоге DATA\log;

  - право чтения файлов в каталоге DATA\log;

  - право чтения и записи ограниченного перечня файлов в папке DATA: postgres.conf, pg_hba.conf, pg_ident.conf;

  - право чтения и записи для дополнительных файлов в папке DATA, относящихся к настройке СУБД и созданных администратором вручную пример - файлы в директивах incude_file, include_dir.

## ПОДГОТОВКА ХОСТА С СУБД «POSTGRESQL» ДЛЯ УПРАВЛЕНИЯ КОМПОНЕНТОМ JDS

Действия по подготовке хоста с СУБД «PostgreSQL» для управления компонентом JDS отличаются от действия по установке СУБД «Jatoba».

Отличие следует из изменений путей к файлам конфигурации СУБД:

- для СУБД «Jatoba» файлы конфигурации «postgrtesql.conf», «pg_hba.conf» и «pg_ident.conf» располагаются в папке DATA, независимо от версии СУБД;

- для СУБД PostgreSQL вышеуказанные файлы конфигурации находятся в папке /etc/postgresql и далее, в зависимости от особенностей установки СУБД;

- кроме того, Jatoba может быть установлена вручную, с нестандартным расположением файлов конфигурации и предыдущий пункт будет относится и к Jatoba.

Сложность состоит в том, что для управления конфигурацией СУБД требуется доступ на запись к определённым файлам, а для выполнения этих действий на хосте с целевой СУБД используется учётная запись с ограниченными правами, предугадать где расположены файлы конфигурации СУБД нельзя.

Для СУБД PostgreSQL, а также для нестандартных установок СУБД «Jatoba», требуется выполнить настройку вручную:

- требуется выбрать локальную учётную запись, которая будет использоваться для управления целевым хостом и службой СУБД (далее принимается имя - jdscontrol); эта учётная запись должна иметь домашнюю папку и разрешение использовать bash как оболочку;

- имя этой учётной записи указывается в соответствующем поле настройки хоста в JDS;

- определить название группы, которой принадлежат файлы конфигурации СУБД и добавить локальную учётную запись «jdscontrol» в эту группу;

- файл «postgresql.conf» целевой СУБД должен иметь права на запись для группы;

- файл «pg_hba.conf» целевой СУБД должен иметь права на запись для группы;

- файл pg_ident.conf целевого инстанса СУБД должен иметь права на запись для группы;

- папки, в которых находятся указанные файлы, должны иметь разрешение на чтение списка файлов для группы, членом которой является «jdscontrol», на всех уровнях вложенности до файлов конфигурации;

- вышесказанное, также, должно выполняться ко всем дополнительным файлам конфигурации, которые используются как "включаемые" (include, include_if_exists, include_dir);

- должна существовать и быть доступной на чтение и запись для учётной записи «jdscontrol» папка для хранения резервных копий конфигураций СУБД, указанная в соответствующем поле настройки хоста в JDS;

- учётная запись «jdscontrol» должна иметь право запуска, остановки, перезапуска, разрешения и блокирования автозапуска для службы СУБД, название которой указано в соответствующем поле настройки СУБД в JDS, без запроса пароля - средствами настройки механизма sudoers.

**Например**

Действия выполняются от привилегированного пользователя ОС «root», учётная запись «jdscontrol» уже существует, она имеет домашнюю папку)

Операции по настройке прав учётной записи jdscontrol для СУБД Postgresql 16, установленной штатным образом на ОС Debian 12, работающей как служба systemd с именем postgresql@16-main, будут следующими:

- создать локальную учётную запись для управления;

- учётную запись включить в группу «postgres», т.к. этой группе принадлежат файлы конфигурации СУБД, командой:


```
useradd -r -b /var/lib -m -G postgres -s $(which bash) jdscontrol
```


- файлы конфигурации службы находятся в папке /etc/postgresql/16/main


```
chmod g+w /etc/postgresql/16/main/postgresql.conf 
chmod g+w /etc/postgresql/16/main/pg_hba.conf 
chmod g+w /etc/postgresql/16/main/pg_ident.conf
```


- создать список команд для управления сервисом СУБД;

- создать файл /etc/sudoers.d/jds_commands_postgresql16main следующего содержания:


```
Cmnd_Alias POSTGRESQL16MAIN = \
/usr/bin/systemctl start <postgresql@16-main.service>,
/usr/bin/systemctl start postgresql@16-main, \
/usr/bin/systemctl stop <postgresql@16-main.service>,
/usr/bin/systemctl stop postgresql@16-main, \
/usr/bin/systemctl restart <postgresql@16-main.service>,
/usr/bin/systemctl restart postgresql@16-main, \
/usr/bin/systemctl enable <postgresql@16-main.service>,
/usr/bin/systemctl enable postgresql@16-main, \
/usr/bin/systemctl disable <postgresql@16-main.service>,
/usr/bin/systemctl disable postgresql@16-main
```


- предоставить право учётной записи «jdscontrol» выполнять список команд под именем POSTGRESQL16MAIN через sudo без запроса пароля:

- создать файл /etc/sudoers.d/jdscontrol_postgresql16main следующего содержания:


```
jdscontrol ALL = NOPASSWD: POSTGRESQL16MAIN
```


- создать в домашней папке пользователя jdscontrol папку для резервных копий конфигураций СУБД:


```
su jdscontrol -c "mkdir -p ~/backup"
```


На даном шаге настройка закончена.

## НАСТРОЙКИ СУБД И ЕЕ КОМПОНЕНТ ПО УМОЛЧАНИЮ, КОТОРЫЕ МОГУТ БЫТЬ ИСПОЛЬЗОВАНЫ ДЛЯ НСД

В данном разделе приводятся параметры компонент, хранящие пароли (ключи), и перечень настроек авторизации и аутентификации СУБД «Jatoba» и входящих в ее состав компонент, отвечающих за ИБ.

### Компоненты хранящие пароли (ключи)

Таблица 17.1 – Перечень компонент СУБД «Jatoba» хранящие пароли

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 20%" />
<col style="width: 11%" />
<col style="width: 14%" />
<col style="width: 40%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название компонента</strong></p>
</th>
<th>
<p><strong>Конфигурационный файл</strong></p>
</th>
<th>
<p><strong>Название параметра</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>fasttrun</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>fulleq</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>ja_csum</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>ja_sync_ldap</td>
<td>служебная таблица ja_sync_ldap.profile</td>
<td>поле таблицы: pswd</td>
<td><p>Значение по умолчанию отсутствует.</p>
<p>Всегда явно задается Администратором</p>
<p>СУБД</p></td>
<td>Пароль маскируется через BASE64</td>
</tr>
<tr>
<td>activator/validator</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>jcs</td>
<td>postgresql.conf</td>
<td>jcs.key jcs.iv</td>
<td><p>Значение по умолчанию отсутствует.</p>
<p>Всегда явно задается</p>
<p>Администратором СУБД</p></td>
<td>Хранит общий ключ шифрования записей для всех таблиц / баз данных</td>
</tr>
<tr>
<td>jdv</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>BTreeKNN</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>mchar</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>online_analyze</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>pg_cryogen</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>pg_hint_plan</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>pg_store_plans</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>pg-ulid</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>plantuner</td>
<td>postgresql.conf</td>
<td>-</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>plspgsql</td>
<td>хранилище сертификатов (Crypto API / КриптоПро)</td>
<td>хранилище сертификатов</td>
<td><p>Значение по умолчанию</p>
<p>отсутствует.</p></td>
<td><p>Для обфускации/деобфускации кода хранимых процедур расширение берет ключ из локального хранилища</p>
<p>сертификатов</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 20%" />
<col style="width: 11%" />
<col style="width: 14%" />
<col style="width: 40%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название компонента</strong></p>
</th>
<th>
<p><strong>Конфигурационный файл</strong></p>
</th>
<th>
<p><strong>Название параметра</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td><p>Всегда явно задается</p>
<p>Администратором СУБД/БД;</p>
<p>Разработчиком БД</p></td>
<td></td>
</tr>
<tr>
<td>securityprofile</td>
<td>служебная таблица securityprofile.password_history</td>
<td>поле таблицы: passhistpassword</td>
<td><p>Значение по умолчанию отсутствует. Значения появляются по мере накопления истории паролей</p>
<p>пользователей</p></td>
<td style="text-align: left;">Для нужд выполнения политик, связанных с подсчетом количества различных символов в пароле и подсчетом отличных от предыдущего пароля символов, расширение требует хранения паролей в служебной таблице в открытом виде</td>
</tr>
<tr>
<td>sql_firewall</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>fasttrun</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>fulleq</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>ja_csum</td>
<td>postgresql.conf</td>
<td>ja_csum.db_name</td>
<td>postgres</td>
<td style="text-align: left;"><p>Параметр используется для фоновых процессов компонента, проверяющих контрольные суммы файлов и объектов. Фоновый процесс производит подключение к СУБД по внутренним механизмам.</p>
<p>(Для взаимодействия с внешней средой не используется)</p></td>
</tr>
<tr>
<td>ja_sync_ldap</td>
<td style="text-align: left;">конфигурация внешних подключений хранится в таблице ja_sync_ldap.profile</td>
<td><p>поля таблицы:</p>
<ul>
<li><p>host_ip</p></li>
<li><p>port</p></li>
<li><p>login</p></li>
<li><p>pswd</p></li>
</ul></td>
<td><p>значение по умолчанию отсутствует; всегда явно задается Администратором</p>
<p>СУБД</p></td>
<td style="text-align: left;">Данные из указанных полей используются для установления <strong>исходящего</strong> соединения из СУБД в службу каталогов по протоколам LDAP/LDAPS</td>
</tr>
<tr>
<td>jcs</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>jdv</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>BTreeKNN</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>mchar</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>online_analyze</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>pg_cryogen</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>pg_hint_plan</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 20%" />
<col style="width: 11%" />
<col style="width: 14%" />
<col style="width: 40%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название компонента</strong></p>
</th>
<th>
<p><strong>Конфигурационный файл</strong></p>
</th>
<th>
<p><strong>Название параметра</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>pg_store_plans</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>pg-ulid</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>plantuner</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>plspgsql</td>
<td>postgresql.conf</td>
<td>Утилита wplpgsql. Опции командной строки -h -P -U - W/-w</td>
<td><p>значение по умолчанию отсутствует; всегда явно задается Администратором СУБД/БД;</p>
<p>Разработчиком БД</p></td>
<td style="text-align: left;"><p>Данный компонент может использоваться удаленно от СУБД (например, на стороне разработчика БД) и устанавливает <strong>исходящее</strong> соединение по протоколу libpq.</p>
<p><strong>SSL соединение не поддерживается</strong></p></td>
</tr>
<tr>
<td>securityprofile</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>sql_firewall</td>
<td>postgresql.conf</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>

### Перечень настроек авторизации и аутентификации СУБД «Jatoba» и входящих в ее состав компонент, отвечающих за ИБ

Таблица 17.2 – Перечень настроек авторизации и аутентификации СУБД «Jatoba» и входящих в ее состав компонент, отвечающих за ИБ

<table>
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
<th><p><strong>Конфигурационный</strong></p>
<p><strong>файл</strong></p></th>
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по</strong></p>
<p><strong>умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>hba_file</p>
</td>
<td>
<p>pg_hba.conf</p>
</td>
<td>
<p>Задаёт файл конфигурации для аутентификации по сетевым узлам.</p>
<p><strong>Параметр задаётся при старте сервера и нельзя изменить</strong></p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>config_file</p>
</td>
<td>
<p>postgresql.conf</p>
</td>
<td>
<p>Задаёт основной файл конфигурации сервера.</p>
<p><strong>Параметр задаётся при старте сервера и нельзя изменить</strong></p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ident_file</p>
</td>
<td>
<p>pg_ident.conf</p>
</td>
<td>
<p>Задаёт файл конфигурации для сопоставлений имён пользователей.</p>
<p><strong>Параметр задаётся при старте сервера и нельзя изменить</strong></p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>authentication_timeout</p>
</td>
<td>
<p>1m</p>
</td>
<td>
<p>Максимальное время, за которое должна произойти аутентификация.</p>
<p>Если это значение задаётся без единиц измерения, оно считается заданным в миллисекундах</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>password_encryption</p>
</td>
<td>
<p>scram-sha-256</p>
</td>
<td>
<p>Алгоритм шифрования пароля (scram-sha-256 или md5),</p>
<p>пароль сохраняется в виде хеша</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>krb_server_keyfile</p>
</td>
<td>
<p>/usr/local/pgsql/et c/krb5.keytab</p>
</td>
<td>
<p>Задаёт расположение файла ключей Kerberos для данного сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>krb_caseins_user</p>
</td>
<td>
<p>Off</p>
</td>
<td>
<p>Обработка имен пользователей GSSAPI с/без учёта регистра</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>db_user_namespace</p>
</td>
<td>
<p>Off</p>
</td>
<td>
<p>Соотносит имена пользователей к базам данных.</p>
<p><strong>Параметр задаётся при старте сервера и нельзя изменить</strong></p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>SSL</p>
</td>
<td>
<p>Off</p>
</td>
<td>
<p>Задает тип подключения SSL.</p>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_ca_file</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Задаёт имя файла, содержащего сертификаты центров сертификации (ЦС) для SSL-сервера.</p>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_cert_file</p>
</td>
<td>
<p>server.crt</p>
</td>
<td>
<p>Задаёт имя файла, содержащего сертификат этого SSL-сервера.</p>
</td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_key_file</p>
</td>
<td>
<p>server.key</p>
</td>
<td>
<p>Задаёт имя файла, содержащего закрытый ключ SSL-сервера. Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_crl_file</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Задаёт имя файла, содержащего список отзыва клиентских сертификатов (CRL, Certificate Revocation List) для SSL.</p>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_ciphers</p>
</td>
<td>
<p>HIGH:MEDIUM:</p>
<p>+3DES:!aNULL</p>
</td>
<td>
<p>Задаёт список наборов шифров SSL, которые могут применяться для SSL-соединений. Этот параметр действует только для подключений TLS версии 1.2 и ниже.</p>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_crl_dir</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Задаёт директорию, содержащего списки отзыва клиентских сертификатов.</p>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_prefer_server_ciphers</p>
</td>
<td>
<p>On</p>
</td>
<td>
<p>Определяет, должны ли шифры SSL сервера предпочитаться клиентским.</p>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_ecdh_curve</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Задаёт имя кривой для использования при обмене ключами ECDH. Эту кривую должны поддерживать все подключающиеся клиенты.</p>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_min_protocol_version</p>
</td>
<td>
<p>TLSv1.2</p>
</td>
<td>
<p>Задаёт минимальную версию протокола SSL/TLS.</p>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_max_protocol_version</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Задаёт максимальную версию протокола SSL/TLS.</p>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_dh_params_file</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Задаёт имя файла с параметрами алгоритма Диффи-Хеллмана.</p>
<p>Использование нестандартных параметров DH защищает от атаки, рассчитанной на взлом хорошо известных встроенных параметров DH.</p>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>postgresql.conf</td>
<td>
<p>ssl_passphrase_command_supp orts_reload</p>
</td>
<td>
<p>Off</p>
</td>
<td>
<p>Этот параметр определяет, будет ли заданная параметром ssl_passphrase_command команда, запрашивающая пароль, также вызываться при перезагрузке конфигурации, если для файла ключа требуется пароль.</p>
<p>Этот параметр можно задать только в postgresql.conf или в</p>
<p>командной строке при запуске сервера</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>pg_hba.conf</td>
<td>
<p>hostssl all all &lt;ip/mask&gt; cert verify-full</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Указывает, что все внешние соединения должны быть по SSL из конкретной подсети</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>pg_hba.conf</td>
<td>
<p>hostssl replication jadog_user</p>
<p>&lt;ip/mask&gt; cert verify-full</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Указывает, что репликация для пользователя jadog_user должна быть по SSL с конкретной подсети</p>
</td>
</tr>
<tr>
<td>Jatoba</td>
<td>pg_hba.conf</td>
<td>
<p>local all postgres scram-sha-256</p>
</td>
<td>
<p>-</p>
</td>
<td></td>
</tr>
<tr>
<td>jaPooler</td>
<td>pgbouncer.ini</td>
<td>
<p>conffile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Показывает расположение текущего файла конфигурации. При изменении этого параметра компонент будет использовать другой файл конфигурации после команды</p>
<p>RELOAD</p>
</td>
</tr>
<tr>
<td>jaPooler</td>
<td>pgbouncer.ini</td>
<td>
<p>auth_type</p>
</td>
<td>
<p>scram-sha-256</p>
</td>
<td>
<p>Тип аутентификации:</p>

<ul>
<li><p>cert – Клиент должен подключаться по соединению TLS с действительным клиентским сертификатом;</p></li>
<li><p>md5 – Применять проверку пароля по хеш MD5.</p></li>
</ul>
<p>Этот метод аутентификации выбирается по умолчанию. При установке md5, если пароль пользователя задан для метода SCRAM, то применяется проверка по алгоритму SCRAM;</p>
<ul>
<li><p>scram-sha-256 - Применять проверку пароля по алгоритму SCRAM-SHA-256;</p></li>
</ul>

<p>Зашифрованные SCRAM пароли могут использоваться только для проверки пароли клиентов, но не для входа на сервер.</p>
</td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>
<p>Чтобы использовать SCRAM для серверных подключений,</p>
<p>пароли необходимо задать открытым текстом.</p>

<ul>
<li><p>plain – Пароли хранятся в открытом виде;</p></li>
<li><p>trust – Аутентификация не производится;</p></li>
<li><p>any – Аутентификация не производится, имя настраивается в строке подключения;</p></li>
<li><p>hba – Аутентификация по файлу pg_hba.conf;</p></li>
<li><p>pam - Для проверки подлинности пользователей</p></li>
</ul>

<p>используется инфраструктура PAM. Не совместим c использованием директивы auth_user</p>
</td>
</tr>
<tr>
<td>jaPooler</td>
<td>pgbouncer.ini</td>
<td>
<p>auth_hba_file</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Файл конфигурации HBA (аналог pg_hba.conf в Jatoba), который используется, когда параметр auth_type равен hba</p>
</td>
</tr>
<tr>
<td>jaPooler</td>
<td>pgbouncer.ini</td>
<td>
<p>auth_file</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Имя файла аутентификации, из которого будут загружаться имена и пароли пользователей.</p>
</td>
</tr>
<tr>
<td>jaPooler</td>
<td>pgbouncer.ini</td>
<td>
<p>auth_user</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Имя пользователя для аутентификации в БД. Если установлен параметр auth_user, то любой пользователь, не указанный в auth_file, будет запрошен с помощью запроса auth_query из системного каталога pg_shadow с использованием auth_user. Для прямого доступа к pg_shadow требуются права</p>
<p>администратора</p>
</td>
</tr>
<tr>
<td>jaPooler</td>
<td>pgbouncer.ini</td>
<td>
<p>auth_query</p>
</td>
<td>
<p>SELECT</p>
<p>usename, passwd FROM</p>
<p>pg_shadow WHERE</p>
<p>usename=$1</p>
</td>
<td>
<p>Запрос для извлечения пароля пользователя из базы данных. Для прямого доступа к pg_shadow требуются права администратора.</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>
<p>db_connection:conn_string. В рамках него passfile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для передачи пути файла с паролем</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>
<p>db_connection:conn_string. В</p>
<p>рамках него sslrootcert</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между</p>
<p>jadog и СУБД и отвечает за путь до CA сертификата</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td>jadog.yml</td>
<td>
<p>db_connection:conn_string. В рамках него sslcert</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между jadog и СУБД и отвечает за путь до сертификата клиента</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 10%" />
<col style="width: 4%" />
<col style="width: 17%" />
<col style="width: 2%" />
<col style="width: 12%" />
<col style="width: 7%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th><strong>Компонент</strong></th>
<th colspan="2"><strong>Конфигурационный файл</strong></th>
<th colspan="2">
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th colspan="2" style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>db_connection:conn_string. В</p>
<p>рамках него sslkey</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Параметр используется для настройки SSL соединения между</p>
<p>jadog и СУБД и отвечает за путь до закрытого ключа клиента</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>db_connection:conn_string. В рамках него sslmode</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Параметр используется для настройки SSL соединения между jadog и СУБД и отвечает за режим работы SSL</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>db_connection:conn_string. В рамках него sslcrl</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Параметр используется для настройки SSL соединения между jadog и СУБД и отвечает за путь до списка отзывов</p>
<p>сертификатов</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>db_connection:conn_string. В рамках него user</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Определяет имя пользователя при работе jadog с СУБД</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>db_connection:conn_string. В</p>
<p>рамках него dbname</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Определяет имя базы данных при работе jadog с СУБД</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>tls:tls</p>
</td>
<td>
<p>false</p>
</td>
<td colspan="2">
<p>Включает режим защищенных соединений jadog-jadog и jadog – jadog_ctl</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>tls:ca_file</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Параметр используется для настройки SSL подключения к</p>
<p>службе jaDog и отвечает за путь до CA сертификата</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>tls:cert_file</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Параметр используется для настройки SSL подключения к службе jaDog и отвечает за путь до сертификата клиента</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>tls:crl_file</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Параметр используется для настройки SSL подключения к</p>
<p>службе jaDog и отвечает за путь до списка отзыва</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>tls:key_file</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Параметр используется для настройки SSL подключения к службе jaDog и отвечает за путь до закрытого ключа клиента</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>main:interconnect_user:name</p>
</td>
<td>
<p>admin</p>
</td>
<td colspan="2">
<p>Определение пользователя для подключения SSL</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>main:interconnect_user:ca_file</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Параметр используется для настройки SSL соединения</p>
<p>пользователя interconnect_user (jadog-jadog) и отвечает за путь до CA сертификата</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>main:interconnect_user:cert_fil e</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Параметр используется для настройки SSL соединения пользователя interconnect_user (jadog-jadog) и отвечает за путь до сертификата клиента</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>main:interconnect_user:crl_file</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Параметр используется для настройки SSL соединения пользователя interconnect_user (jadog-jadog) и отвечает за путь</p>
<p>до списка отзыва</p>
</td>
</tr>
<tr>
<td>jadog</td>
<td colspan="2">jadog.yml</td>
<td colspan="2">
<p>main:interconnect_user:key_fil e</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Параметр используется для настройки SSL соединения пользователя interconnect_user (jadog-jadog) и отвечает за путь</p>
<p>до закрытого ключа клиента</p>
</td>
</tr>
<tr>
<td colspan="2">№ изменения:</td>
<td colspan="2">
<p>Подпись отв. лица:</p>
</td>
<td colspan="3">
<p>Дата внесения изм:</p>
</td>
<td></td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>DefaultConnection</p>
</td>
<td>
<p>Нет</p>
</td>
<td>
<p>Строка подключения к служебной БД в формате</p>
<p>«ключ=значение», которая может содержать пароль, в том случае, если выбран способ аутентификации по логину и паролю.</p>
<p>Находится в группе «ConnectionStrings». Настраивается скриптом jds-config. py</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>CAFile</p>
</td>
<td>
<p>Нет</p>
</td>
<td>
<p>Содержит полный путь к «CA Bundle» в формате X.509 (CRT), содержащем сертификаты, используемые для подписи серверного сертификата СУБД при настройке аутентификации по SSL-сертификату:</p>

<ul>
<li><p>сертификат корневого УЦ;</p></li>
<li><p>сертификат(ы) промежуточного (промежуточных) УЦ. Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p></li>
</ul>

<p>Настраивается скриптом jds-config.py</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>ClientPfxFile</p>
</td>
<td>
<p>Нет</p>
</td>
<td>
<p>Содержит полный путь к контейнеру в формате PKCS#12 (PFX), содержащем:</p>

<ul>
<li><p>клиентский сертификат;</p></li>
<li><p>закрытый ключ к клиентскому сертификату;</p></li>
<li><p>сертификаты, используемые для подписи клиентского сертификата (вся цепочка, включая сертификат корневого УЦ).</p></li>
</ul>

<p>Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<p>Настраивается скриптом jds-config.py</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>ClientPfxPassword</p>
</td>
<td>
<p>Нет</p>
</td>
<td>
<p>Содержит пароль, в том случае, если сгенерированный клиентский сертификат, указанный в настройке</p>
<p>«ClientPfxFile», защищён паролем.</p>
<p>Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<p>Настраивается скриптом jds-config.py</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>CheckServerCertificateRevocat</p>
<p>ion</p>
</td>
<td>
<p>True</p>
</td>
<td>
<p>Признак «Проверять серверный сертификат по списку отозванных сертификатов»</p>
</td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>
<p>Находится в группе «ConnectionSslConfigurator \ Connections </p>
<p>DefaultConnection»</p>
<p>Настраивается скриптом jds-config.py</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>Key</p>
</td>
<td>
<p>UUID-значение</p>
</td>
<td>
<p>Начальное значение токена безопасности Находится в группе «JwtTokenConfig»</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>Issuer</p>
</td>
<td>
<p>URL сайта JDS в инфраструктуре, с указанием протокола доступа</p>
<p>(HTTPS)</p>
</td>
<td>
<p>Параметр «Издатель» токена безопасности Находится в группе «JwtTokenConfig»</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>Audience</p>
</td>
<td>
<p>URL сайта JDS в инфраструктуре, с указанием протокола доступа</p>
<p>(HTTPS)</p>
</td>
<td>
<p>Параметр «Получатель» токена безопасности Находится в группе «JwtTokenConfig»</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>AccessTokenExpiration</p>
</td>
<td>
<p>480</p>
</td>
<td>
<p>Время действия токена безопасности, в секундах. После истечения этого времени токен автоматически обновляется.</p>
<p>Находится в группе «JwtTokenConfig»</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>RefreshTokenExpiration</p>
</td>
<td>
<p>960</p>
</td>
<td>
<p>Время действия токена безопасности, в секундах. После истечения этого времени токен автоматически обновляется</p>
<p>Находится в группе «JwtTokenConfig»</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>BaseAddress</p>
</td>
<td>
<p>Нет</p>
</td>
<td>
<p>URL сервиса Explain, развернутого в инфраструктуре, включая протокол</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>UseSsl</p>
</td>
<td>
<p>False</p>
</td>
<td>
<p>Признак «Использовать SSL-сертификат для аутентификации на jaDog»</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>CAFile</p>
</td>
<td>
<p>Нет</p>
</td>
<td>
<p>Путь к файлу корневого CA-сертификата для подключения к jaDog</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td>appsettings.json</td>
<td>
<p>CertFile</p>
</td>
<td>
<p>Нет</p>
</td>
<td>
<p>Путь к файлу клиентского сертификата для подключения к jaDog</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 10%" />
<col style="width: 4%" />
<col style="width: 17%" />
<col style="width: 2%" />
<col style="width: 12%" />
<col style="width: 7%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th><strong>Компонент</strong></th>
<th colspan="2"><strong>Конфигурационный файл</strong></th>
<th colspan="2">
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th colspan="2" style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>JDS</td>
<td colspan="2">appsettings.json</td>
<td colspan="2">
<p>CrlFile</p>
</td>
<td>
<p>Нет</p>
</td>
<td colspan="2">
<p>Путь к файлу списка отозванных сертификатов, используемых</p>
<p>для проверки при к jaDog</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td colspan="2">appsettings.json</td>
<td colspan="2">
<p>KeyFile</p>
</td>
<td>
<p>Нет</p>
</td>
<td colspan="2">
<p>Путь к файлу закрытого ключа клиентского сертификата для подключения к jaDog</p>
</td>
</tr>
<tr>
<td>JDS</td>
<td colspan="2">appsettings.json</td>
<td colspan="2">
<p>SslEngine</p>
</td>
<td>
<p>Нет</p>
</td>
<td colspan="2">
<p>Имя криптографического модуля</p>
</td>
</tr>
<tr>
<td>JDS doctor</td>
<td colspan="2">appsettings.json</td>
<td colspan="2">
<p>DefaultConnection</p>
</td>
<td>
<p>Нет</p>
</td>
<td colspan="2">
<p>Строка подключения к служебной БД в формате</p>
<p>«ключ=значение», которая может содержать пароль, в том случае, если выбран способ аутентификации по логину и паролю.</p>
<p>Находится в группе «ConnectionStrings». Настраивается скриптом jds-config.py</p>
</td>
</tr>
<tr>
<td>JDS doctor</td>
<td colspan="2">appsettings.json</td>
<td colspan="2">
<p>CAFile</p>
</td>
<td>
<p>Нет</p>
</td>
<td colspan="2">
<p>Содержит полный путь к «CA Bundle» в формате X.509 (CRT), содержащем сертификаты, используемые для подписи серверного сертификата СУБД при настройке аутентификации по SSL-сертификату:</p>

<ul>
<li><p>сертификат корневого УЦ;</p></li>
<li><p>сертификат(ы) промежуточного (промежуточных) УЦ. Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p></li>
</ul>

<p>Настраивается скриптом jds-config.py</p>
</td>
</tr>
<tr>
<td>JDS doctor</td>
<td colspan="2">appsettings.json</td>
<td colspan="2">
<p>ClientPfxFile</p>
</td>
<td>
<p>Нет</p>
</td>
<td colspan="2">
<p>Содержит полный путь к контейнеру в формате PKCS#12 (PFX), содержащем:</p>

<ul>
<li><p>клиентский сертификат;</p></li>
<li><p>закрытый ключ к клиентскому сертификату;</p></li>
<li><p>сертификаты, используемые для подписи клиентского сертификата (вся цепочка, включая сертификат корневого УЦ).</p></li>
</ul>

<p>Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<p>Настраивается скриптом jds-config.py</p>
</td>
</tr>
<tr>
<td>JDS doctor</td>
<td colspan="2">appsettings.json</td>
<td colspan="2">
<p>ClientPfxPassword</p>
</td>
<td>
<p>Нет</p>
</td>
<td colspan="2">
<p>Содержит пароль, в том случае, если сгенерированный клиентский сертификат, указанный в настройке</p>
<p>«ClientPfxFile», защищён паролем.</p>
</td>
</tr>
<tr>
<td colspan="2">№ изменения:</td>
<td colspan="2">
<p>Подпись отв. лица:</p>
</td>
<td colspan="3">
<p>Дата внесения изм:</p>
</td>
<td></td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>
<p>Находится в группе «ConnectionSslConfigurator \ Connections </p>
<p>DefaultConnection»</p>
<p>Настраивается скриптом jds-config.py</p>
</td>
</tr>
<tr>
<td>JDS doctor</td>
<td>appsettings.json</td>
<td>
<p>CheckServerCertificateRevocat</p>
<p>ion</p>
</td>
<td>
<p>True</p>
</td>
<td>
<p>Признак «Проверять серверный сертификат по списку отозванных сертификатов»</p>
<p>Находится в группе «ConnectionSslConfigurator \ Connections \ DefaultConnection»</p>
<p>Настраивается скриптом jds-config.py</p>
</td>
</tr>
<tr>
<td>keepalived</td>
<td>keepalived.conf</td>
<td>
<p>script</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>в секции vrrp_script pg_check указан путь для файла проверки</p>
<p>смотрим строку подключения в этом скрипте</p>
</td>
</tr>
<tr>
<td>ja_Hipe_Cluster</td>
<td>postgresql.conf</td>
<td>
<p>citus.local_hostname</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Устанавливает hostname при соединении самим с собой (необходимо при настройке кластера по SSL)</p>
</td>
</tr>
<tr>
<td>ja_Hipe_Cluster</td>
<td>SQL</td>
<td>
<p>pg_dist_authinfo</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Смотрим строку подключения в таблице для каждого узла</p>
</td>
</tr>
<tr>
<td>pgAudit</td>
<td>-</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Авторизация и аутентификация не требуется</p>
</td>
</tr>
<tr>
<td>pgSQL-HTTP</td>
<td>-</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Авторизация и аутентификация не требуется</p>
</td>
</tr>
<tr>
<td>PostGIS</td>
<td>-</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Авторизация и аутентификация не требуется</p>
</td>
</tr>
<tr>
<td>TDS_FDW</td>
<td>SQL параметры</td>
<td>
<p>servername</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>IP Адрес или DNS имя MS SQL сервера</p>
</td>
</tr>
<tr>
<td>TDS_FDW</td>
<td>SQL параметры</td>
<td>
<p>port</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Порт MS SQL сервера</p>
</td>
</tr>
<tr>
<td>TDS_FDW</td>
<td>SQL параметры</td>
<td>
<p>Database</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Имя БД MS SQL сервера</p>
</td>
</tr>
<tr>
<td>TDS_FDW</td>
<td>SQL параметры</td>
<td>
<p>Dbuse</p>
</td>
<td>
<p>0</p>
</td>
<td><ol start="0" type="1">
<li><p>– подключение идет к базе данных, указанной в параметр database</p></li>
<li><p>– подключение идет к базе данных, полученной вызовом dbuse()</p></li>
</ol></td>
</tr>
<tr>
<td>grafana</td>
<td><p>Аутентификация осуществляется посредством JWT токена через</p>
<p>Pomerium</p></td>
<td>
<p>GF_AUTH_SIGNOUT_REDI RECT_URL</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Подписывает пользователей из Pomerium, когда они выходят из Grafana</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td>переменная окружения</td>
<td>
<p>GF_AUTH_JWT_ENABLED</p>
</td>
<td>
<p>disable</p>
</td>
<td>
<p>Включает JWT аутентификацию</p>
</td>
</tr>
<tr>
<td></td>
<td>переменная окружения</td>
<td>
<p>GF_AUTH_JWT_HEADER_N AME</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Указывает на имя HTTP заголовка, в котором расположен JWT токен</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>№ изменения:</th>
<th>Подпись отв. лица:</th>
<th>
<p>Дата внесения изм:</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 10%" />
<col style="width: 4%" />
<col style="width: 17%" />
<col style="width: 2%" />
<col style="width: 12%" />
<col style="width: 7%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th><strong>Компонент</strong></th>
<th colspan="2"><strong>Конфигурационный файл</strong></th>
<th colspan="2">
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th colspan="2" style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>grafana</td>
<td colspan="2"><p>переменная</p>
<p>окружения</p></td>
<td colspan="2">
<p>GF_AUTH_JWT_EMAIL_CL</p>
<p>AIM</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>связывает email_claim в JWT с электронной почтой</p>
<p>пользователя Grafana</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">переменная окружения</td>
<td colspan="2">
<p>GF_AUTH_JWT_JWK_SET_ URL</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Указывает на URL-адрес с ключом подписи для проверки</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">переменная окружения</td>
<td colspan="2">
<p>GF_AUTH_JWT_CACHE_TT</p>
<p>L</p>
</td>
<td>
<p>60m</p>
</td>
<td colspan="2">
<p>Время жизни JWT токена</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">defaults.ini</td>
<td colspan="2">
<p>disable_initial_admin_creation</p>
</td>
<td>
<p>false</p>
</td>
<td colspan="2">
<p>Отключает создание пользователя admin при первом запуске</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">defaults.ini</td>
<td colspan="2">
<p>admin_user</p>
</td>
<td>
<p>Admin</p>
</td>
<td colspan="2">
<p>Административный пользователь</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">defaults.ini</td>
<td colspan="2">
<p>admin_password</p>
</td>
<td>
<p>admin</p>
</td>
<td colspan="2">
<p>Административный пароль</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">defaults.ini</td>
<td colspan="2">
<p>secret_key</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Для подписи некоторых параметров источника данных, таких как секреты и пароли, используется формат шифрования AES-</p>
<p>256 в режиме CFB</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">defaults.ini</td>
<td colspan="2">
<p>disable_gravatar</p>
</td>
<td>
<p>false</p>
</td>
<td colspan="2">
<p>Использование Gravatar для картинок (аватарок) профилей</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">defaults.ini</td>
<td colspan="2">
<p>data_source_proxy_whitelist</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Определяет белый список разрешенных IP-адресов или доменов с портами, которые будут использоваться в URL-адресах источников данных с помощью прокси-сервера</p>
<p>Grafana Data Source</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2"><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td colspan="2">
<p>enabled = true</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Активирует авторизацию по токену</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">defaults.ini [auth.generic_oauth]</td>
<td colspan="2">
<p>allow_sign_up = true</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Указывает, что всегда должна быть подпись токеном</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2"><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td colspan="2">
<p>name = Auth0</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Задает имя авторизирующего сервера</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">defaults.ini [auth.generic_oauth]</td>
<td colspan="2">
<p>client_id = &lt;client id&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Идентификатор клиента</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2"><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td colspan="2">
<p>client_secret = &lt;client secret&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Секретный ключ, выданный авторизационным центром</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">defaults.ini [auth.generic_oauth]</td>
<td colspan="2">
<p>auth_url = https://&lt;domain&gt;/authorize</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>URL адрес запроса на авторизацию</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2"><p>defaults.ini</p>
<p>[auth.generic_oauth]</p></td>
<td colspan="2">
<p>token_url =</p>
<p>https://&lt;domain&gt;/oauth/token</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>URL адрес проверки токена</p>
</td>
</tr>
<tr>
<td>grafana</td>
<td colspan="2">defaults.ini [auth.generic_oauth]</td>
<td colspan="2">
<p>api_url = https://&lt;domain&gt;/userinfo</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>URL адрес доступа в API</p>
</td>
</tr>
<tr>
<td>prometeus</td>
<td colspan="2">web.yml</td>
<td colspan="2">
<p>tls_server_config:</p>
</td>
<td>
<p>-</p>
</td>
<td colspan="2">
<p>Закрытый ключ и сертификат для SSL</p>
</td>
</tr>
<tr>
<td colspan="2">№ изменения:</td>
<td colspan="2">
<p>Подпись отв. лица:</p>
</td>
<td colspan="3">
<p>Дата внесения изм:</p>
</td>
<td></td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td>
<p>cert_file: prometheus.crt</p>
<p>key_file: prometheus.key</p>
</td>
<td></td>
<td></td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td>
<p>client_auth_type : RequireAndVerifyClientCert</p>
</td>
<td>
<p>NoClientCert</p>
</td>
<td>
<p>Показывает режим аутентификации</p>
</td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td>
<p>min_version</p>
</td>
<td>
<p>TLS12</p>
</td>
<td>
<p>Минимальная версия TLS протокола</p>
</td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td>
<p>max_version</p>
</td>
<td>
<p>TLS13</p>
</td>
<td>
<p>Максимальная версия TLS протокола</p>
</td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td>
<p>prefer_server_cipher_suites: true</p>
</td>
<td>
<p>true</p>
</td>
<td>
<p>Выбор предпочтение шифров:</p>

<ul>
<li><p>true – используются шифры сервера;</p></li>
<li><p>false – клиента</p></li>
</ul></td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td>
<p>curve_preferences</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Наименование ECDHE кривой</p>
</td>
</tr>
<tr>
<td>prometeus</td>
<td>web.yml</td>
<td>
<p>basic_auth_users:</p>
<p>&lt;string&gt;: &lt;secret&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Базовая HTTP авторизация, Имя пользователя : base64(hash)</p>
</td>
</tr>
<tr>
<td>node_exporter</td>
<td>config.yml</td>
<td>
<p>cert_file:</p>
<p>/etc/node_exporter/ssl/node_ex porter.crt</p>
<p>key_file:</p>
<p>/etc/node_exporter/ssl/node_ex porter.key</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Закрытый ключ и сертификат для SSL</p>
</td>
</tr>
<tr>
<td>node_exporter</td>
<td>config.yml</td>
<td>
<p>basic_auth_users:</p>
<p>prometheus: "хеш пароля"</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Настройка базовой HTTP авторизации</p>
</td>
</tr>
<tr>
<td>windows_exporte r</td>
<td>web.yml tls_server_config:</td>
<td>
<p>cert_file: &lt;полный путь до файла сертификата&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Сертификат для TLS соединения</p>
</td>
</tr>
<tr>
<td><p>windows_exporte</p>
<p>r</p></td>
<td>tls_server_config:</td>
<td>
<p>key_file: &lt;полный путь до</p>
<p>файла ключа&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Закрытый ключ для TLS соединения</p>
</td>
</tr>
<tr>
<td>windows_exporte r</td>
<td>tls_server_config:</td>
<td>
<p>cert: строка сертификата в формате pem</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Сертификат для TLS соединения</p>
</td>
</tr>
<tr>
<td><p>windows_exporte</p>
<p>r</p></td>
<td>tls_server_config:</td>
<td>
<p>key: строка ключа в формате</p>
<p>pem</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Закрытый ключ для TLS соединения</p>
</td>
</tr>
<tr>
<td>windows_exporte r</td>
<td>tls_server_config:</td>
<td>
<p>client_ca: строка сертификата в формате pem</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Сертификат центра авторизации</p>
</td>
</tr>
<tr>
<td><p>windows_exporte</p>
<p>r</p></td>
<td>tls_server_config:</td>
<td>
<p>client_ca_file: &lt;полный путь</p>
<p>до файла сертификата&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td></td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>windows_exporte</p>
<p>r</p></td>
<td>tls_server_config:</td>
<td>
<p>client_auth_type:</p>
<p>RequireAndVerifyClientCert</p>
</td>
<td>
<p>NoClientCert</p>
</td>
<td>
<p>Если нужна аутентификация по сертификату, то указать</p>
<p>RequireAndVerifyClientCert</p>
</td>
</tr>
<tr>
<td>windows_exporte r</td>
<td>tls_server_config:</td>
<td>
<p>prefer_server_cipher_suites: true</p>
</td>
<td>
<p>true</p>
</td>
<td>
<p>Выбор предпочтение шифров:</p>

<ul>
<li><p>true – используются шифры сервера;</p></li>
<li><p>false – клиента</p></li>
</ul></td>
</tr>
<tr>
<td>sql_exporter</td>
<td><p>web.yml</p>
<p>tls_server_config:</p></td>
<td>
<p>cert_file: &lt;полный путь до</p>
<p>файла сертификата&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Сертификат для TLS соединения</p>
</td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>
<p>key_file: &lt;полный путь до файла ключа&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Закрытый ключ для TLS соединения</p>
</td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>
<p>cert: строка сертификата в</p>
<p>формате pem</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Сертификат для TLS соединения</p>
</td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>
<p>key: строка ключа в формате pem</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Закрытый ключ для TLS соединения</p>
</td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>
<p>client_ca: строка сертификата</p>
<p>в формате pem</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Сертификат центра авторизации</p>
</td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>
<p>client_ca_file: &lt;полный путь до файла сертификата&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td></td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>
<p>client_auth_type: RequireAndVerifyClientCert</p>
</td>
<td>
<p>NoClientCert</p>
</td>
<td>
<p>Если нужна аутентификация по сертификату, то указать RequireAndVerifyClientCert</p>
</td>
</tr>
<tr>
<td>sql_exporter</td>
<td>tls_server_config:</td>
<td>
<p>prefer_server_cipher_suites: true</p>
</td>
<td>
<p>true</p>
</td>
<td>
<p>Выбор предпочтение шифров:</p>

<ul>
<li><p>true – используются шифры сервера;</p></li>
<li><p>false – клиента</p></li>
</ul></td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>web.yml tls_server_config:</td>
<td>
<p>cert_file: &lt;полный путь до файла сертификата&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Сертификат для TLS соединения</p>
</td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>
<p>key_file: &lt;полный путь до</p>
<p>файла ключа&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Закрытый ключ для TLS соединения</p>
</td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>
<p>cert: строка сертификата в формате pem</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Сертификат для TLS соединения</p>
</td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>
<p>key: строка ключа в формате</p>
<p>pem</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Закрытый ключ для TLS соединения</p>
</td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>
<p>client_ca: строка сертификата в формате pem</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Сертификат центра авторизации</p>
</td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>
<p>client_ca_file: &lt;полный путь</p>
<p>до файла сертификата&gt;</p>
</td>
<td>
<p>-</p>
</td>
<td></td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>
<p>client_auth_type: RequireAndVerifyClientCert</p>
</td>
<td>
<p>NoClientCert</p>
</td>
<td>
<p>Если нужна аутентификация по сертификату, то указать RequireAndVerifyClientCert</p>
</td>
</tr>
<tr>
<td>postgre_exporter</td>
<td>tls_server_config:</td>
<td>
<p>prefer_server_cipher_suites: true</p>
</td>
<td>
<p>true</p>
</td>
<td>
<p>Выбор предпочтение шифров:</p>

<ul>
<li><p>true – используются шифры сервера;</p></li>
<li><p>false – клиента</p></li>
</ul></td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>DBAuthMethod</p>
</td>
<td>
<p>password</p>
</td>
<td>
<p>Определяет способ подключения jalog_server к СУБД (ssl или password)</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>DBTLSCertFile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между</p>
<p>jalog_server и СУБД и отвечает за путь до сертификата клиента</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>DBTLSKeyFile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между</p>
<p>jalog_server и СУБД и отвечает за путь до закрытого ключа клиента</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>DBTLSCAFile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между jalog_server и СУБД и отвечает за путь до CA сертификата</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>DBTLSCRLFile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между jalog_server и СУБД и отвечает за путь до списка отзывов</p>
<p>сертификатов</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>DBTLSMode</p>
</td>
<td>
<p>verify-full</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между jalog_server и СУБД и отвечает за режим проверки SSL</p>
<p>сертификатов</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>UseSchannel</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Только для Windows. Параметр используется для настройки ssl</p>
<p>соединения между jalog_server и jalog_agent и отвечает за использование пакета безопасности из ОС (Secure Channel)</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>EngineName</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Только для Linux. Параметр используется для настройки SSL</p>
<p>соединения между jalog_server и jalog_agent и отвечает за название криптографического OpenSSL движка</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>TLSCAFile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между jalog_server и jalog_agent и отвечает за путь до CA сертификата</p>
</td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>TLSCRLFile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между</p>
<p>jalog_server и jalog_agent и отвечает за путь до списка отзывов сертификатов</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>TLSCertFile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между</p>
<p>jalog_server и jalog_agent и отвечает за путь до сертификата клиента</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_server.conf</td>
<td>
<p>TLSKeyFile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между</p>
<p>jalog_server и jalog_agent и отвечает за путь до закрытого ключа клиента</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>
<p>TLSConnect</p>
</td>
<td>
<p>unencrypted</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за способ подключения jalog_agent к jalog_server (unencrypted или cert)</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>
<p>TLSAccept</p>
</td>
<td>
<p>unencrypted</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за способ приёма</p>
<p>входящих подключений (unencrypted или cert)</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>
<p>UseSchannel</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Только для Windows. Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за</p>
<p>использование пакета безопасности из ОС (Secure Channel)</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>
<p>EngineName</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Только для Linux. Параметр используется для настройки SSL</p>
<p>соединения между jalog_agent и jalog_server и отвечает за название криптографического OpenSSL движка</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>
<p>TLSCAFile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между</p>
<p>jalog_agent и jalog_server и отвечает за путь до CA сертификата</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>
<p>TLSCRLFile</p>
</td>
<td>
<p>-</p>
</td>
<td style="text-align: left;">
<p>Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за путь до списка отзывов сертификатов</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>
<p>TLSCertFile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за путь до сертификата</p>
<p>клиента</p>
</td>
</tr>
<tr>
<td>jalog</td>
<td>Jalog_agent.conf</td>
<td>
<p>TLSKeyFile</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Параметр используется для настройки SSL соединения между jalog_agent и jalog_server и отвечает за путь до закрытого</p>
<p>ключа клиента</p>
</td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>pgBadger</td>
<td>-</td>
<td>
<p>--ssh-program ssh</p>
<p>Указывает путь к используемому SSH-клиенту. По умолчанию: ssh.</p>

<p>--ssh-port порт Указывает порт SSH для подключения.</p>

<p>По умолчанию: 22.</p>
<p>--ssh-user имя_пользователя Указывает имя пользователя для подключения.</p>
<p>По умолчанию: имя пользователя, запускающего pgbadger.</p>
<p>--ssh-identity имя_файла Указывает путь к файлу идентификации.</p>
<p>--ssh-timeout секунды Задаёт тайм-аут в секундах на случай сбоя SSH-соединения.</p>
<p>По умолчанию: 10.</p>
<p>--ssh-option параметры</p>
<p>Задаёт список параметров для SSH-соединения.</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>Данный компонент может использоваться для анализа</p>
<p>удаленных журналов</p>
</td>
</tr>
<tr>
<td>fasttrun</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>fulleq</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>ja_csum</td>
<td>postgresql.conf</td>
<td>
<p>ja_csum.db_name</p>
</td>
<td>
<p>postgres</p>
</td>
<td>
<p>Параметр используется для фоновых процессов компонента, проверяющих контрольные суммы файлов и объектов.</p>
<p>Фоновый процесс производит подключение к СУБД по внутренним механизмам.</p>
<p><strong>Для взаимодействия с внешней средой не используется</strong></p>
</td>
</tr>
</tbody>
</table>

<table>
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
<th>
<p><strong>Настройка</strong></p>
</th>
<th>
<p><strong>Значение по умолчанию</strong></p>
</th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>ja_sync_ldap</td>
<td><p>конфигурация</p>
<p>внешних подключений хранится в таблице ja_sync_ldap.profile</p></td>
<td>
<p>поля таблицы:</p>
<p>host_ip port login pswd</p>
</td>
<td>
<p>значение по</p>
<p>умолчанию отсутствует; всегда явно задается Администраторо</p>
<p>м СУБД</p>
</td>
<td>
<p>Данные из указанных полей используются для установления</p>
<p><strong>исходящего</strong> соединения из СУБД в службу каталогов по протоколам LDAP/LDAPS</p>
</td>
</tr>
<tr>
<td>jcs</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>jdv</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>BTreeKNN</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>mchar</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>online_analyze</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>pg_cryogen</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>pg_hint_plan</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>pg_store_plans</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>pg-ulid</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>plantuner</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>plspgsql</td>
<td>postgresql.conf</td>
<td>Утилита wplpgsql. Опции командной строки -h -P -U - W/-w</td>
<td>
<p>значение по умолчанию отсутствует; всегда явно задается Администраторо м СУБД/БД;</p>
<p>Разработчиком БД</p>
</td>
<td>
<p>Данный компонент может использоваться удаленно от СУБД (например, на стороне разработчика БД) и устанавливает <strong>исходящее</strong> соединение по протоколу libpq</p>
<p><strong>SSL соединение не поддерживается</strong></p>
</td>
</tr>
<tr>
<td>securityprofile</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
<tr>
<td>sql_firewall</td>
<td>postgresql.conf</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
<td>
<p>-</p>
</td>
</tr>
</tbody>
</table>

## РЕАГИРОВАНИЕ НА ИНЦИДЕНТЫ ИБ

СУБД «Jatoba» обеспечивает противодействие угрозам, представленным в «Банке данных угроз безопасности информации» на официальном сайте <https://bdu.fstec.ru/threat> ФСТЭК России и в частности, представленным в таблице [18.1](#_bookmark91).

Таблица 18.1 – Сопоставление угроз безопасности с мерами безопасности

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
<th>
<p><strong>Меры ГИС</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://bdu.fstec.ru/threat/ubi.031"><u>УБИ. 031</u></a></td>
<td>Угроза использования механизмов авторизации для повышения привилегий</td>
<td><p>УПД.1, УПД.2(1), УПД.4,</p>
<p>УПД.5,</p>
<p>УПД.6, УПД.6(1)</p></td>
</tr>
<tr>
<td style="text-align: center;"><a href="https://bdu.fstec.ru/threat/ubi.086"><u>УБИ. 086</u></a></td>
<td><p>Угроза несанкционированного изменения</p>
<p>аутентификационной информации</p></td>
<td>УПД.1(1, 2)</td>
</tr>
<tr>
<td><a href="https://bdu.fstec.ru/threat/ubi.088"><u>УБИ. 088</u></a></td>
<td>Угроза несанкционированного копирования защищаемой информации</td>
<td><p>ИАФ.1,</p>
<p>ИАФ.4,</p>
<p>УПД.1, УПД.1(1, 2), УПД.2, УПД.2(1), УПД.4,</p>
<p>УПД.9, РСБ.3, РСБ.6,</p>
<p>РСБ.7, РСБ.8</p></td>
</tr>
<tr>
<td><a href="https://bdu.fstec.ru/threat/ubi.090"><u>УБИ. 090</u></a></td>
<td>Угроза несанкционированного создания учетной записи пользователя</td>
<td><p>УПД.1, УПД.1 (1, 2), УПД.2,</p>
<p>УПД.4, УПД.9</p></td>
</tr>
<tr>
<td style="text-align: center;"><a href="https://bdu.fstec.ru/threat/ubi.091"><u>УБИ. 091</u></a></td>
<td><p>Угроза несанкционированного удаления защищаемой</p>
<p>информации</p></td>
<td>УПД.2</td>
</tr>
<tr>
<td style="text-align: center;"><a href="https://bdu.fstec.ru/threat/ubi.100"><u>УБИ. 100</u></a></td>
<td><p>Угроза обхода некорректно настроенных механизмов</p>
<p>аутентификации</p></td>
<td><p>ИАФ.1,</p>
<p>ИАФ.4</p></td>
</tr>
<tr>
<td style="text-align: center;"><a href="https://bdu.fstec.ru/threat/ubi.122"><u>УБИ. 122</u></a></td>
<td>Угроза повышения привилегий</td>
<td><p>УПД.1,</p>
<p>УПД.2(1), УПД.4</p></td>
</tr>
<tr>
<td style="text-align: center;"><a href="https://bdu.fstec.ru/threat/ubi.124"><u>УБИ. 124</u></a></td>
<td>Угроза подделки записей журнала регистрации событий</td>
<td>РСБ.6, РСБ.7</td>
</tr>
<tr>
<td style="text-align: center;"><a href="https://bdu.fstec.ru/threat/ubi.037"><u>УБИ. 037</u></a></td>
<td>Угроза исследования приложения через отчеты об ошибках</td>
<td>РСБ.7</td>
</tr>
<tr>
<td style="text-align: center;"><a href="https://bdu.fstec.ru/threat/ubi.114"><u>УБИ. 114</u></a></td>
<td>Угроза переполнения целочисленных переменных</td>
<td>ОЦЛ.7</td>
</tr>
<tr>
<td style="text-align: center;"><a href="https://bdu.fstec.ru/threat/ubi.158"><u>УБИ. 158</u></a></td>
<td>Угроза форматирования носителей информации</td>
<td><p>ОДТ.4,</p>
<p>ОДТ.5</p></td>
</tr>
</tbody>
</table>

Организация менеджмента инцидентов информационной безопасности должна соответствовать семейству стандартов СМИБ состоящих из взаимосвязанных стандартов, опубликованных или разрабатываемых, и содержащих несколько ключевых структурных компонентов. К числу этих компонентов относятся:

- нормативные стандарты, устанавливающие требования к СМИБ (ИСО/МЭК 27001);

- требования к органам по сертификации, осуществляющим сертификацию на соответствие ИСО/МЭК 27001 (ИСО/МЭК 27006);

- дополнительные требования, связанные с внедрением СМИБ в конкретных отраслях (ИСО/МЭК 27009).

Противодействие угрозам ИБ состоит из совокупности технических и организационных мероприятий.

К основным, критичным инцидентам ИБ, связанных с эксплуатацией СУБД «Jatoba» относятся:

- нарушение целостности и последующая блокировка пользователей СУБД;

- неудачные попытки входа в СУБД.

Для контроля над работой компонентов «ja_CSum», «SecurityProfile» и в целом СУБД, целесообразно воспользоваться функциональными возможностями раздела «Уведомления» компонента пользовательского веб-интерфейса для администраторов «Jatoba data safe».

### Нарушение целостности и последующая блокировка пользователей СУБД

Нарушение целостности СУБД будет зафиксировано в журнале аудита СУБД:

- событием компонента «ja_CSum» с идентификатором 115182106 и сообщением «Целостность объекта нарушена»;

- событием компонента «SecurityProfile» с идентификатором 103118105 и сообщением «Блокирование учетной записи».

В зависимости от требований внутренних регламентов оповестить должностных лиц, участие которых предусмотрено в расследовании и устранении последствий инцидента ИБ.

В журналах аудита СУБД, SIEM и в прочих доступных источниках, установить причину нарушения целостности СУБД.

Установив причину, следует восстановить исходное состояние СУБД.

При восстановлении работоспособности СУБД, порядок действий должен быть следующим:

1)  Войти в СУБД от имени и с правами привилегированного пользователя «postgres» или пользователя, имеющего атрибут «Superuser».

2)  Перевести компонент «ja_CSum» в режим информирования «permissive» (см. п. 3.7.1 Руководства по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum»).

Включение режима информирования выполняется SQL-командой:

```sql
ALTER SYSTEM set ja_csum.action_mode = 'permissive';
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image228.png)



Рисунок 18.1 – Включение режима информирования «permissive»

3)  Отключить режим периодической проверки (см. п. 3.5 Руководства по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum»).

Отключение режима периодической проверки выполняется SQL-командой:


```sql
SELECT ja_csum.check_auto_off();
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image229.png)

Рисунок 18.2 – SQL-команда отключения режима периодической проверки

4)  Внести требуемые изменения для приведения СУБД в первоначальное состояние.

5)  При необходимости перезагрузить СУБД.

6)  Войти в СУБД от имени и с правами привилегированного пользователя «postgres» или пользователя, имеющего атрибут «Superuser».

7)  Обновить файлы с контрольными суммами (см. п. 3.2 Руководства по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum»).

Список контролируемых файлов создается SQL-командой:

```sql
SELECT ja_csum.fill_list();
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image230.png)



Рисунок 18.3 – Команда создания файла с контрольными суммами

8)  Перевести компонент «ja_CSum» в режим блокирования «enforcing» (см. п. 3.7.2 Руководства по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum»).

Установка режима блокирования «enforcing» выполняется SQL-командой:


```sql
ALTER SYSTEM set ja_csum.action_mode = 'enforcing';
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image231.png)

Рисунок 18.4 – Включение режима блокирования «enforcing»

9)  Включить режим периодической проверки (см. п. 3.5 Руководства по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum»).

Включение режима периодической проверки выполняется SQL-командой:

```sql
SELECT ja_csum.check_auto_on();
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image232.png)



Рисунок 18.5 – SQL-команда включения режима периодической проверки

10) Установить запрет на создание пользовательских функций.

Запрет на создание пользовательских функций устанавливается SQL-командой:


```sql
ALTER SYSTEM SET securityprofile.user_function_creation=off;
```


Затем выполнить перезагрузку конфигурации СУБД:


```sql
select pg_reload_conf();
```


11) Выполнить проверку блокировки пользователей (см. п. 3.5 Руководства администратора).

Вывод наличия блокировки пользователей выполняется SQL-командой:


```sql
SELECT securityprofile.is_users_suspended ('db_name');
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image233.png)

Рисунок 18.6 – Вывод состояния блокировки пользователей в БД

12) Выполнить проверку блокировки пользователей (см. п. 6.2.2.2 Руководства администратора).

Вывод наличия блокировки администраторов БД выполняется SQL-командой:

```sql
SELECT securityprofile.is_admins_suspended ('db_name');
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image234.png)



Рисунок 18.7 – Вывод состояния блокировки администраторов БД

13) Вывести информацию о статусе блокировок всех пользователей СУБД (см. п.п. 6.2.1.1, 6.2.1.3.1 Руководства администратора).

Вывод информацию о статусе блокировок всех пользователей СУБД выполняется SQL-командой:


```sql
SELECT * from securityprofile.is_locked ('');
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image235.png)

Рисунок 18.8 – Вывод списка состояния пользователей

14) Принять решение о разблокировке пользователей или групп пользователей и администраторов СУБД.

15) Разблокировать группу пользователей с игнорированием ошибки (см. п. 6.2.1.2.6 Руководства администратора).

Разблокировка пользователей СУБД, вне зависимости от имеющихся ошибок, выполняется SQL-командой:

```sql
SELECT securityprofile.resume_users_noerror ('db_name', 0);
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image236.png)



Рисунок 18.9 – Выполнение команды разблокировки пользователей

16) Разблокировать группу администраторов БД с игнорированием ошибки (см. п. 6.2.1.3.6 Руководства администратора).

Разблокировка администраторов БД, вне зависимости от имеющихся ошибок выполняется SQL-командой:


```sql
SELECT securityprofile.resume_admins_seconds('db_name', 0);
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image237.png)

Рисунок 18.10 – Выполнение команды разблокировки пользователей На данном шаге восстановление работоспособности СУБД закончено.

### Превышение попыток количества неудачных попыток входа в СУБД

Инцидент ИБ блокировки пользователя СУБД в связи превышение попыток количества неудачных попыток входа в СУБД, может быть следствием:

- попытки перебора паролей для взлома СУБД;

- неаккуратности пользователя СУБД.

В зависимости от требований внутренних регламентов необходимо оповестить должностные лица, участие которых предусмотрено в расследовании и устранении последствий инцидента ИБ.

В журналах аудита СУБД, SIEM и в прочих доступных источниках, установить причину блокировки пользователя СУБД.

Блокирование пользователя СУБД будет зафиксировано в журнале аудита событием компонента «SecurityProfile» с идентификатором 103118105 и сообщением «Блокирование учетной записи».

В ходе проверки важно обратить внимание на следующие аспекты:

- является учетная запись технической (служебной) или пользовательской;

- в случае пользовательской УЗ необходимо установить кому присвоена и статус заявки на разблокирование УЗ в ServiceDesk;

- совпадает имя заявителя и присвоенный ему IP-адрес с IP-адресом компьютера, с которого велось подключение к СУБД;

- какие привилегии, атрибуты предоставлены учетной записи и в какие группы входит.

Когда анализ выясненных обстоятельств покажет отсутствие попыток взлома СУБД, для восстановления УЗ порядок действий должен быть следующим:

1)  Проверить установленные блокировки УЗ.

Для проверки факта блокировки и времени, в течение которого она будет действовать, администратору СУБД необходимо выполнить следующую команду:


```sql
SELECT * from securityprofile.is_locked('имя_пользователя');
```


Вывод информации о всех пользователях выполняется SQL-командой:

```sql
SELECT * from securityprofile.is_locked ('');
```

![](@site/docs/assets/images/com18.3.1/secur_guide/media/image235.png)



Рисунок 18.11 – Вывод списка состояния пользователей

2)  Разблокировать УЗ.

Для разблокировки учетных записей пользователей администратору СУБД необходимо выполнить следующую команду:


```sql
SELECT securityprofile.unlock_account ('имя_пользователя', bigint);
```


Примечание: bigint – задержка, с которой будет выполнено снятие блокировки в днях.


```sql
SELECT securityprofile.unlock_account('test', 0);
```


![](@site/docs/assets/images/com18.3.1/secur_guide/media/image238.png)

Рисунок 18.12 – SQL-команда блокирования пользователя

## ПРИЛОЖЕНИЕ 1

### Установка службы JDS.Doctor

#### Строка подключения к служебной БД JDS

Для корректной работы службы ей требуется подключение к служебной БД «JDS». Строка подключения находится в файле «appsettings.json» и определяется ключом «ConnectionStrings:DefaultConnection».

#### Установка в Windows

Для установки службы Windows рекомендуется использовать утилиту «sc.exe».

Следует запускать службу под учетной записью «NetworkService».

Пример вызова «sc.exe» для установки службы с параметрами:

- имя службы «JDS.Doctor»;

- автоматический запуск;

- учетная запись «Network Service»;

- отображаемое имя «JDS Doctor».


```
sc.exe create JDS.Doctor start= auto binpath= C:\Full\Path\To\J DS.PasDoctor.exe obj= "NT AUTHORITY\NetworkService" DisplayName = "JDS Doctor"
```


Вторая команда устанавливает описание для службы.


```
sc.exe description JDS.Doctor "Служба для поиска и исправления проблем с производительностью и безопасностью СУБД. Для управле ния службой используйте раздел Jatoba Data Safe 'Производительность - Проблемы и решения'."
```

#### Файлы журналов в ОС Windows

По умолчанию служба сохраняет журналы в папке C:\ProgramData\JDS\logs. Никаких действий по созданию папки или назначению прав доступа не требуется.

#### Установка в ОС Linux

Для примера используется Ubuntu 23.04. В других дистрибутивах процедура установки может отличаться.

- создать пользователя, под которым будет работать служба:


```
sudo useradd –s /usr/sbin/nologin jds
```


- создать папку для журналов (логов), назначить ей владельца и права:


```
sudo mkdir /var/log/jds
sudo chown jds:jds /var/log/jds 
sudo chmod 744 /var/log/jds
```


В некоторых дистрибутивах при создании пользователя «jds» группа «jds» не создаётся.

Для просмотра группы по умолчанию служит команда «groups jds».

- создать сервис-файл /etc/systemd/system/jds-doctor.service со следующим содержимым:


```
**[Unit]**
Description=JATOBA DATA SAFE Doctor

**[Service]**
WorkingDirectory=/opt/jds-doctor 
ExecStart=/opt/jds-doctor/JDS.PasDoctor 
Restart=always
RestartSec=10 
SyslogIdentifier=jds-doctor 
User=jds

**[Install]**
WantedBy=multi-user.target
```



- разрешить и запустить сервис:


```
sudo systemctl daemon-reload sudo 
systemctl enable jds-doctor 
sudo systemctl start jds-doctor
```


#### Файлы журналов в Linux

По умолчанию служба сохраняет журналы (логи) в папке /var/log/jds/. Папка должна быть предварительно создана, должен быть изменен владелец и назначены права (см. секцию «Установка в Linux»).

## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

| Сокращение | Расшифровка                                                                                                                                                                                                               |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DDL        | Data Definition Language — язык описания данных                                                                                                                                                                           |
| DML        | Data Manipulation Language — язык манипулирования данными                                                                                                                                                                 |
| SQL        | Structured Query Language — язык структурированных запросов                                                                                                                                                               |
| БД         | База данных                                                                                                                                                                                                               |
| ОЗУ        | Оперативное запоминающее устройство                                                                                                                                                                                       |
| ОС         | Операционная система                                                                                                                                                                                                      |
| СУБД       | Система управления базами данных                                                                                                                                                                                          |
| ЭВМ        | Электронно-вычислительная машина                                                                                                                                                                                          |
| ЗПС        | Замкнутая программная среда в ОС Astra Linux Special Edition 1.7 Смоленск — это механизм авторизации на основании контроля целостности файлов с использованием проверки ЭЦП, реализованный в модуле ядра ОС disgsig_verif |

