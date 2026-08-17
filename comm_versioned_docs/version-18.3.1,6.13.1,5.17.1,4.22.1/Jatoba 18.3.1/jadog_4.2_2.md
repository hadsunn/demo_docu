---
title: Компонент «jaDog». Руководство по настройке. Часть 2.
toc_max_heading_level: 4
---

**АННОТАЦИЯ**

Во второй части документа приведены сведения, необходимые для настройки отказоустойчивого кластера защищенной системы управления базами данных «Jatoba» (далее — СУБД «Jatoba») с использованием компонента «jaDog», входящего в состав СУБД «Jatoba». Настоящее руководство предназначено для администратора СУБД «Jatoba».

Представленные в документе снимки экрана могут отличаться для различных версий настраиваемой СУБД и предназначены для демонстрации хода настройки отказоустойчивого кластера СУБД «Jatoba».

Администратор СУБД «Jatoba» должен иметь навыки по работе с системами управления базами данных (СУБД) PostgreSQL или защищенной СУБД «Jatoba» (ООО «Газинформсервис»).

:::info Дополнительная информация
Примеры в данном документе приведены для СУБД «Jatoba» версии ядра 5, а также для СУБД «Jatoba» версии ядра 6.

Для СУБД «Jatoba» версий ядра 5 и 6 используется версия компонента — 3.2.

На приведенных в руководстве иллюстрациях версия компонента «jaDog» может отличаться от фактической.
:::

## ОБЩИЕ СВЕДЕНИЯ

### Виды кластеров

#### Отказоустойчивый кластер

Отказоустойчивый кластер состоит от двух и более узлов (Node). В котором один узел выполняет роль Master, а остальные узлы выполняют роль Slave.

В сети должны быть зарезервированы IP-адреса для каждого их узлов и отдельно внешний IP-адрес (Public address), к которому будут подключаться пользователи СУБД с запросом на чтение и запись (RW).

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image11_.png)

Рисунок 1.1 – Схема отказоустойчивого кластера

Для повышения консистентности данных и прекращения потерь в отказоустойчивом кластере может использоваться механизм параллельного архивирования WAL-файлов с Master узла и копированием архива WAL на Slave узлы.

WAL (Write-Ahead Log) файлы в PostgreSQL — это контрольные точки, которые используются для обеспечения целостности и согласованности данных в БД. Они пишутся на внешний сетевой диск перед тем, как изменения будут применены к таблицам, и служат для восстановления БД в случае сбоя.

В зависимости от типа репликации возможно построение кластера с каскадной или перекрёстной репликацией данных между узлами.

В зависимости от вида репликации возможно построение кластера с синхронной (по умолчанию) или асинхронной репликацией данных между узлами. Синхронная репликация устанавливается по умолчанию.

:::info Дополнительная информация
При добавлении узлов в кластер в ручном режиме (см. первую часть документа «Компонент jaDog. Управление режимом работы узлов кластера (версия 4, часть 1)» 643.72410666.00067-08 98 02-01), вид репликации узла указывается при помощи одной из команд:


```
cluster add slave [ip] [port] as ['node_name'] 
cluster add sync slave [ip] [port] as ['node_name']
```

При использовании файла ответов для автоматизированной настройки кластера асинхронная репликация указывается в секции nodes.[node_name]:

```
replication_type: async
```

:::

Описание настройки кластеров с перекрестной или каскадной репликацией приводится в данном руководстве в разделах 2-3 и 4-5 соответственно.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image12_.png)

Рисунок 1.2 – Схема отказоустойчивого кластера с копированием WAL на файловый сервер

#### Геораспределенный, отказоустойчивый кластер

Геораспределенный, отказоустойчивый кластер подразумевает, что его узлы находятся на разных географически разделенных площадках – дата-центрах. В составе кластера должно быть от четырех узлов, которые могут находиться в разных подсетях.

Подразумевается, что каждая из площадок (дата-центров) находится в своей подсети и между подсетями настроены правила маршрутизации.

Описание настройки геораспределенного отказоустойчивого кластера приводится в разделе [1](#_bookmark1) данного руководства.

Параметры стека протоколов, используемых при построении геораспределенного отказоустойчивого кластера, приведены в таблице [1.1.](#_bookmark5)

<span id="_bookmark5" class="anchor"></span>Таблица 1.1 – Параметры протоколов используемых СУБД

<table>
<colgroup>
<col style="width: 59%" />
<col style="width: 16%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Наименование</strong></p>
</th>
<th>
<p><strong>Протокол</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Database port (db_port)</p>
</td>
<td>
<p>Libpq</p>
</td>
<td>
<p>5432</p>
</td>
</tr>
<tr>
<td>
<p>Jadog TCP port (user_interface)</p>
</td>
<td>
<p>TCP</p>
</td>
<td>
<p>54321, 54322</p>
</td>
</tr>
<tr>
<td>
<p>Jadog PORT number (port)</p>
</td>
<td>
<p>Jadog</p>
</td>
<td>
<p>12345, (Custom)</p>
</td>
</tr>
</tbody>
</table>

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image13_.png)

Рисунок 1.3 – Схема геораспределенного кластера

Файловый сервер для WAL – архивов может располагаться на отдельной площадке. Такое расположение позволяет минимизировать риск потери WAL-архива.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image14_.png)

Рисунок 1.4 – Схема геораспределенного кластера с копированием WAL на файловый сервер

## ПЕРЕКРЕСТНАЯ РЕПЛИКАЦИЯ. ИСПОЛЬЗОВАНИЕ ФАЙЛОВ ОТВЕТОВ

СУБД «Jatoba» поддерживает установку нескольких экземпляров СУБД на одном хосте (сервере), с последующим созданием кластера или кластеров с перекрестным типом репликации.

Применение такого типа репликации поможет снизить количество серверов, используемых для СУБД, и затрат на количество лицензий.

В представленной ниже схеме каждый из серверов включает в себя как минимум два экземпляра СУБД.

Второй экземпляр СУБД должен использоваться в роли «Slave» для кластера. 

Таким образом два сервера поддерживают два кластера.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image21_.png)

Рисунок 2.1 – Схема перекрестной репликации

В рассматриваемом примере установки и конфигурировании отказоустойчивого кластера «jaDog» с перекрестной репликацией на ОС Ubuntu 22.04 используются параметры сети кластера, приведенные в таблице [2.1](#_bookmark7).


Таблица 2.1 – Конфигурация сети узлов кластера с использованием перекрестной репликации

<table style="width:100%;">
<colgroup>
<col style="width: 4%" />
<col style="width: 10%" />
<col style="width: 18%" />
<col style="width: 15%" />
<col style="width: 11%" />
<col style="width: 18%" />
<col style="width: 8%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th rowspan="3" style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th rowspan="3">
<p><strong>Имя сервера</strong></p>
</th>
<th>
<p><strong>Подсеть кластера</strong></p>
</th>
<th rowspan="3" style="text-align: center;">
<p><strong>Маска подсети</strong></p>
</th>
<th rowspan="3" style="text-align: center;">
<p><strong>Номер сетевого порта Jatoba</strong></p>
</th>
<th rowspan="3" style="text-align: center;">
<p><strong>Public IP</strong></p>
</th>
<th rowspan="3" style="text-align: center;">
<p><strong>Роль</strong></p>
</th>
<th rowspan="3">
<p><strong>Имя кластера</strong></p>
</th>
</tr>
<tr>
<th>
<p>10.116.102.0/24</p>
</th>
</tr>
<tr>
<th>
<p><strong>IP-адрес</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Node1</p>
</td>
<td>
<p>10.116.102.54/24</p>
</td>
<td style="text-align: center;">
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>5432</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td style="text-align: center;">
<p>Master</p>
</td>
<td rowspan="2">
<p>cluster1</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Node2</p>
</td>
<td>
<p>10.116.102.55/24</p>
</td>
<td style="text-align: center;">
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>5433</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td style="text-align: center;">
<p>Slave</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Node3</p>
</td>
<td>
<p>10.116.102.55/24</p>
</td>
<td style="text-align: center;">
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>5432</p>
</td>
<td style="text-align: center;">
<p>10.116.102.82/24</p>
</td>
<td style="text-align: center;">
<p>Master</p>
</td>
<td rowspan="2">
<p>cluster2</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Node4</p>
</td>
<td>
<p>10.116.102.54/24</p>
</td>
<td style="text-align: center;">
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>5433</p>
</td>
<td style="text-align: center;">
<p>10.116.102.82/24</p>
</td>
<td style="text-align: center;">
<p>Slave</p>
</td>
</tr>
</tbody>
</table>

Установка компонента «jaDog» на главном и резервном узле отличаются по количеству выполняемых действий.

Предварительными условиями для настройки компонента «jaDog» на главном узле кластера с перекрестной репликацией являются:

- установленная СУБД «Jatoba» (см. «Руководство по установке»);

- установленный компонент «jaDog» (см. п.п 2.1.1, часть первая «Компонент jaDog. Управление режимом работы узлов кластера»);

- настроенная аутентификация пользователей в файле pg_hba.conf (см. п.п 2.1.2, часть первая «Компонент jaDog. Управление режимом работы узлов кластера»;

- установленный пароль системного пользователя;

- установленное расширение «jadog» для СУБД (см. п.п 2.1.4, часть первая «Компонент jaDog. Управление режимом работы узлов кластера»;

- созданный и настроенный пользователь jadog_user (см. п.п 2.1.5, часть первая «Компонент jaDog. Управление режимом работы узлов кластера»;

- настроены и выпущены сертификаты SSL для всех узлов кластера, для которых будет далее выполнена настройка перекрестной репликации.

Установка и настройка узлов кластера приведена в первой части документа «Компонент jaDog. Управление режимом работы узлов кластера» в разделах 2, 3 и 6.

### Формирование файла ответов для кластера с перекрестной репликацией

Шаблон файла ответов автоматизированного построения кластеров с перекрестной репликацией содержит в себе все необходимые настройки. Далее готовый

:::info Дополнительная информация
При	редактировании	шаблонов	файлов	ответов	последующие	уровни параметров в иерархии отделяются от предыдущих двумя пробелами.
:::

:::info Дополнительная информация
Шаблон файла ответов автоматизированного построения кластеров с перекрестной репликацией «jadog_cross_cluster.yml» формируется на основании   шаблона,   расположенного   в   директории   /usr/jatoba-6/share/doc/jadog/clusters_kits/jadog_referee/init_jadog_referee.yml.in
:::

В файле ответов «jadog_cross_cluster.yml» для автоматизированного построения кластеров с каскадной репликацией для каждого параметра приводятся комментарии, описывающие его назначение.

:::info Дополнительная информация
В случае, если для параметра slot_name не определено значение, то оно генерируется автоматически по формуле:

```
[rs_]+[hostname]+[_]+[datetime]
```

Где, rs_ - префикс (от сокр. replication slot), hostname – короткое название узла без DNS-записи, datetime – только локальные дата и время в формате ddmmyyhhmmss.

Например:

```
rs_host123_2590925070015
```
Если в имени узла содержатся буквы в верхнем регистре, дефис (-) или точки, то:

- верхний регистр – будет переведен в нижний.
- дефисы и точки – удалены из полученного hostname. 
:::

### Запуск настройки кластера с перекрестной репликацией

Формирование и настройка узлов кластера с перекрестной репликацией выполняется при помощи специального «нулевого» режима (jadog0).

Предварительно «нулевой» режим (jadog0) должен быть обязательно запущен на всех узлах перед выполнением формирования кластера из файла ответов.

Запуск специального «нулевого» режима (jadog0) в режиме упрощенной небезопасной аутентификации (подробнее описание и требования в п. 3.5. Режим упрощенной небезопасной аутентификации в первой части документа «Компонент jaDog. Управление режимом работы узлов кластер» 643.72410666.00067-08 98 02-01) и создание временного пользователя выполняется с использованием ключа --basic при помощи команды:


```
/usr/jatoba-<ver>/bin/jadog jadog0 --basic -U [temp_user] -W [temp_password]
```


Где temp_user – имя создаваемого временного пользователя; temp_password – пароль временного пользователя, состоящий из не менее чем шести символов и одной цифры.

Сервис jadog0 при запуске по умолчанию задействует сетевой порт TCP 64321. В случае необходимости запуска сервиса «jadog0» на другом сетевом порту необходимо использовать ключ [-p] | [--port] [номер_порта].

Примеры запуска сервиса «jadog0» с указанием сетевого порта TCP не по умолчанию:


```
/usr/jatoba-<ver>/bin/ jadog jadog0 --basic -U [temp_user] -W [temp_password] --port [номер_порта]
```


или


```
/usr/jatoba-<ver>/bin/ jadog jadog0 --basic -U [temp_user] -W [temp_password] -p [номер_порта]
```


**Пример:**


```
/usr/jatoba-<ver>/bin/ jadog jadog0 --basic -U tempInstallUser -W paSSw0rd! -p 4444
```


При запуске сервиса «jadog0» выполняется проверка по следующим параметрам:

- Указываемый сетевой порт имеет допустимый диапазон (0-65535);

- Указываемый сетевой порт не занят другими сервисами и службами;

- Количество настраиваемых сетевых портов не более одного;

- Количество задействованных ключей не более одного.

Если указанные выше условия запуска не удовлетворяются в запуске сервиса «jadog0» будет отказано до устранения проблем.

Сетевой порт, который указывает пользователь (см. пример выше) для запуска специального «нулевого» режима jadog0, может использоваться на всех узлах кластера или только на некоторых:

- В первом случае в секции default_node_params необходимо указать следующие параметры:


```
default_node_params: 
    jadog0:
        port:4444
```


- Во втором случае в секции nodes файла ответов для каждого узла необходимо указать следующие параметры:


```
nodes:
-	node_name: node_11 
    jadog0:
        port: 4444
...
-	node_name: node_12 
    jadog0:
        port: 4445
```



Выполнение сервиса «jadog0» с указанием номера сетевого порта, отличного от значения по умолчанию применяется при использовании перекрестной репликации между узлами кластера.

После этого на узле «Master» открыть дополнительное окно терминала и выполнить чтение параметров из файла ответов «jadog_cross_cluster.yml» и развертывание узлов кластеров с перекрестной репликацией:


```
/usr/jatoba-<ver>/bin/jadog_ctl create_cluster -q -f json -T 999999 -c /<dir1>/jadog_cross_cluster.yml --basic -U [temp_user]-W [temp_password]
```


Где <dir1> - путь к каталогу, в котором расположен файл ответов в формате YML temp_user – имя временного пользователя (см. п. 3.5.1); temp_password – пароль временного пользователя.

:::info Дополнительная информация
В случае возникновения ошибок при автоматической настройке кластера производится откат всех изменений. Событие при этом записывается в журнал компонента «jaDog» с перечнем причин остановки.

В случае возникновения ошибок при автоматической настройке нескольких кластеров откат изменений производится только для кластера, в процессе создания которого произошла ошибка.

В обоих случаях необходимо повторно запустить процедуру чтения параметров из файла конфигурации и развертывание узлов кластера(ов).

:::

В случае если пользователю необходимо создать несколько кластеров их настройки последовательно указываются в файле YML. Общая структура файла будет иметь следующий вид:


```
cluster_settings:
    - cluster_name: myCluster1 #Параметры кластера №1
    ...
    - cluster_name: myCluster2 #Параметры кластера №2
    ...

```

Системные события в процессе автоматической настройки кластера записываются в журнал, который расположен по следующему пути:


```
/usr/jatoba-<ver>/var/log/jadog/jadog0_<номер_порта>.json
```


Журнал событий автоматической настройки кластера представлен в формате JSON для удобства контроля формирования кластера администратором.

Также процесс формирования и настройки кластера возможно контролировать при помощи команды:


```
cluster
```


После завершения формирования кластера на основании файла ответов jadog_cross_cluster.yml сервис «jadog0» завершает свою работу.

### Настройка компонента «jaDog» для перекрёстной репликации на резервном узле (втором экземпляре СУБД) с помощью файла ответов

Другим способом настройки компонента «jaDog» на резервном узле (втором экземпляре СУБД) является использование настроенного файла конфигурации «jadog.yml» главного узла (первого экземпляра СУБД).

Для запуска настройки компонента «jaDog» второго экземпляра СУБД необходимо выполнить команду:


```
./jadog setup -C usr/jatoba-<ver>/etc/jadog/
```


Далее, в пункте меню 2 «Inter-jadog communication settings» в параметре «Jadog service name (main:service_name)» указать название сервиса второго экземпляра компонента «jaDog» - [jadog2]. Остальные настройки второго экземпляра компонента «jaDog» настраиваются в соответствии с требованиями к нему.

Альтернативным вариантом выполнения установки узла кластера в тихом режиме является выполнение следующей последовательности действий:

- в шаблоне установочного файла ответов «jadog_setup_faq2.yml» внести значения параметров, например:


```
main:
    service_name: jadog2 
    ip: 10.96.1.139/24
    public_address: 10.96.1.140/24 
    network_interface: ens33 
    interconnect_user: admin
    jadog_users:
    - name: jadog_user
        password: [указать_пароль_jadog_user] 
        address: 10.96.1.0/24
        method: sha-256 
replication:
    slot_name: jadog_slot_2 db_connection:
    auth_method: password 
db_connection_settings:
    passfile: /usr/jatoba-6/bin/.pgpass
    user_pass: [указать_пароль] # пароль пользователя СУБД postgresql:
    db_service_name: jatoba-6
```

:::info Дополнительная информация
Шаблон	для	установочного	файла	ответов	«jadog_setup_faq2.yml располагается по пути /usr/jatoba-<ver>/share/doc/jadog/clusters_kits/standalone/jadog_setup_faq.yml
:::



Описание параметров приведено в п.6.7 и в Приложении 1 первой части документа «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01.

- Сохранить и разместить установочный файл ответов «jadog_setup_faq2.yml» в директории /usr/jatoba-<ver>/bin/;

- Запустить установку (настройку) jadog второго экземпляра СУБД в тихом режиме выполнив команды в терминале ОС:

```
# cd /usr/jatoba-<ver>/bin/
# ./jadog setup -c jadog_setup_faq2.yml
```

- Проверить статус сервиса:

```
# systemctl status jadog2
```

Сервис «jadog2» второго экземпляра СУБД компонента «jaDog» будет загружен, но не активирован и не запущен.

- Добавить в автозагрузку ОС и запустить сервис «jadog2» командами в терминале ОС:

```
# systemctl enable jadog2 
# systemctl start jadog2
```

Дальнейшую настройку второго экземпляра компонента «jaDog» возможно выполнить при помощи редактирования параметров кластера, описанных в п.п. 7.18 первой части документа «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01.

### Настройка параметра dc_public_address

:::info Дополнительная информация
Дальнейшее описание настройки параметра dc_public_address справедливо в том числе для автоматизированной настройки кластеров с другими типами репликации.
:::

В случае автоматизированной настройки кластера при помощи файла ответов и при использовании в кластере нескольких дата-центров пользователю необходимо определить параметр dc_public_address.

В параметре dc_public_address указывают IP-адрес, через который будет происходить доступ пользователей к СУБД.

Для каждого дата-центра dc_public_address определяется в отдельности. В случае если для двух и более кластеров необходимо использовать один и тот же dc_public_address его рекомендуется определять через параметр public_address секции cluster_settings:default_node_params в файле ответов.

Параметр dc_public_address настраивается в секции datacenters:datacenter (IP-адреса приводятся в листинге в качестве примера, секции настройки нод скрыты):


```
 datacenters:
 - datacenter: DC1 # Уникальное наименование дата-центра. Дата-центр может быть один или несколько.
    dc_public_address: 10.116.102.80/32 # public_address по умолчанию для всего DC. Если public_address явно не задан для ноды, то этот адрес будет установлен для каждой ноды в DC.
    [Блок описания нод кластера DC1]
 - datacenter: DC2 # Уникальное наименование дата-центра. Дата-центр может быть один или несколько.
    dc_public_address: 10.116.102.81/32 # public_address по умолчанию для всего DC. Если public_address явно не задан для ноды, то этот адрес будет установлен для каждой ноды в DC.
    [Блок описания нод кластера DC2]
```


При формировании файла ответов в нем необходимо учитывать приоритет установки параметров IP-адреса, через который будет происходить доступ пользователей к СУБД, в следующей последовательности:

- Параметр public_address в секции datacenters:nodes:node_name – указывается для каждого конкретного узла и имеет наивысший приоритет в файле ответов;

- Параметр public_address в секции cluster_settings:default_node_params – в этом случае применяется для всех узлов всех дата-центов, входящих в кластер;

- Параметр dc_public_address в секции datacenters:datacenter – в этом случае применяется для всех узлов дата-центра (значение dc_public_address заменяет собой public_address в настройках узлов).

Параметры могут быть установлены одновременно, но использоваться будет тот параметр, который имеет высший приоритет.

:::info Дополнительная информация
В случае если параметр public (или dc_public_address) не настроен в файле тихой инсталляции, то выполнение автоматизированного развертывания кластера будет прервано с отображением ошибки.
:::

### Настройка параметров архивирования и восстановления WAL

:::info Дополнительная информация
Дальнейшее описание настройки параметров архивирования и восстановления файлов WAL (write ahead log) справедливо в том числе для автоматизированной настройки кластеров с другими типами репликации
:::

Секция «wal_archive» - настройки архивирования и восстановления WAL, предназначена для установки параметров и команд резервного копирования.

При первоначальной настройке кластера включение механизма резервного копирования WAL необязательно.

Описание и рекомендуемые значения по умолчанию параметров секции «wal_archive» приведено в п.п. 6.7.8 первой части «Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog» 643.72410666.00067-08 98 02-01.

Для настройки параметров механизма резервного копирования и восстановления WAL в файл ответов необходимо включить секции «wal_archive» и «restore» следующего содержания (здесь и далее пути к каталогам хранения архивных копий WAL приводятся в качестве примеров):


```
wal_archive:
    directory: "/nfs/archive_wal" # Системный каталог для архивирования/восстановления WAL
    command: "cp %p /nfs/archive_wal/%f" # Команда копирования архива WAL
    cleanup_command: "/usr/jatoba-6/bin/pg_archivecleanup /nfs/archive_wal" # Команда очистки архива WAL cleanup_needed: false # Признак необходимости запуска процесса очистки архива WAL
    cleanup_timeout: 30000 # Временной промежуток очистки архива WAL в миллисекундах
wal_restore:
    command: "cp /nfs/arhive_wal/%f %p"
```

:::info Дополнительная информация
Необходимо указывать действительные пути к каталогам хранения архивных копий файлов WAL. В случае указания ошибок в пути к каталогам архивных копий файлов WAL возможно возникновение ошибок при проведении процедур восстановления данных СУБД.
:::



Секции «wal_archive» и «restore» возможно расположить в двух предопределенных местах:

- Секция cluster_settings:default_node_params – настройки в данной секции распространяются на кластер и определяются для всех узлов, входящих в него;
- Секция cluster_settings:datacenters: - [datacenter_name]:nodes – настройки в данной секции распространяются только на те узлы, для которых это определено. Например, секция nodes может выглядеть следующим образом:



```
datacenters:
-	datacenter: 
    nodes:
        - node_name: node_11 
          main:
            ip: 192.168.72.141
          replication:
            slot_name: rs_node_11
        - node_name: node_12 
          main:
            ip: 192.168.72.142
          replication:
            slot_name: rs_node_12 
          wal_archive:
            directory: "/nfs/archive_wal" 
            command: "cp %p /nfs/archive_wal/%f" 
            cleanup_command: "/usr/jatoba-6/bin/pg_archivecleanup /nfs/archive_wal"
            cleanup_needed: false 
            cleanup_timeout: 30000
          wal_restore:
            command: "cp /nfs/arhive_wal/%f %p"
```

:::info Дополнительная информация
В качестве значений параметров wal_archive:command и restore:wal_restore_command также могут указываться сторонние внешние программы по архивированию и восстановлению. Настройка параметров архивации и восстановления сторонних внешних программ выполняется согласно руководствам к ним.
:::



## ПЕРЕКРЕСТНАЯ РЕПЛИКАЦИЯ. НАСТРОЙКА В РУЧНОМ РЕЖИМЕ

Схема установки нескольких экземпляров СУБД представлена на рисунке [3.1](#_bookmark14).

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image31_.png)

<span id="_bookmark14" class="anchor"></span>Рисунок 3.1 – Схема установки двух экземпляров СУБД на одном сервере Ход установки описан ниже.

### Установка первого экземпляра СУБД

Первый экземпляр СУБД устанавливается из локального репозитория, как описано в документе «Руководство по установке СУБД Jatoba» 643.72410666.00067-08 97 01.

Также для установки первого экземпляра СУБД с ролью «Master» можно воспользоваться инсталлятором, работа которого также описана в документе «Руководство по установке СУБД Jatoba» 643.72410666.00067-08 97 01.

После выполнения установки СУБД требуется:

– установить пакет компонента «jaDog»:

```
# apt-get install jatoba<ver>-jadog
```

– установить пароль для пользователя СУБД «postgres»:

```
# su –l postgres psql
\password
```

### Создание второго экземпляра СУБД

Создание второго экземпляра СУБД требует выполнения следующих шагов:

– создать ссылку для запуска командой в консоли ОС:

```
# systemctl enable jatoba-<ver>
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image298.png)



Рисунок 3.2 – Создание ссылки для запуска – скопировать файл сервиса командой в консоли ОС:


```
# cp /lib/systemd/system/jatoba-<ver>.service /lib/systemd/system/jatoba-clone.service
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image299.png)

Рисунок 3.3 – Копирование файла сервиса СУБД

В результате в каталоге /lib/systemd/system/ появится файл «jatoba-clone.service» для второго экземпляра СУБД.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image300.jpeg)

Рисунок 3.4 – Содержание каталога /lib/systemd/system/ 

– выполнить смену пользователя на postgres:

```
# su postgres
```

– инициализировать новый каталог данных командой в консоли ОС:


```
/usr/jatoba-<ver>/bin/pg_ctl initdb -D /var/lib/jatoba/<ver>/clone
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image301.png)

Рисунок 3.5 – Ход инициализации нового каталога СУБД

В результате будет создан каталог данных по пути /var/lib/jatoba/<ver>/clone. Структура каталога представлена на рисунке [3.6](#_bookmark17).

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image302.png)

<span id="_bookmark17" class="anchor"></span>Рисунок 3.6 – Структура каталога

- в данном каталоге /var/lib/jatoba/<ver>/clone/ дополнить параметрами конфигурационный файл «postgresql.conf»:


```
log_destination = 'stderr' 
logging_collector = on 
log_directory = 'log' 
log_filename = 'jatoba-%a.log' 
log_rotation_age = 1d 
log_rotation_size = 0 
log_truncate_on_rotation = on 
log_line_prefix = '%m [%p] '
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image303.png)

Рисунок 3.7 – Параметры конфигурационного файла «postgresql.conf» второго экземпляра СУБД

:::info Дополнительная информация
Параметры логирования приведены в качестве примера и должны отличаться от требований, предъявляемых к СУБД в зависимости от типа ИС.
:::


- в разделе «Connection Settings» конфигурационного файл «postgresql.conf» установить параметр:

```
port = 5433
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image304.png)

Рисунок 3.8 – Параметр «port» второго экземпляра СУБД

- проверить и установить метод аутентификации scram-sha-256 в конфигурационном файле «pg_hba.conf», расположенном по пути /var/lib/jatoba/<ver>/clone/;

- изменить расположение БД в копии сервиса командой:

```
# nano /lib/systemd/system/jatoba-clone.service
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image305.png)

Рисунок 3.9 – Редактирование файла сервиса 

– внести в разделе «Location of database directory» строку:


```
Environment=PGDATA=/var/lib/jatoba/<ver>/clone/
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image306.png)

Рисунок 3.10 – Изменение строки «Environment» 

– выполнить старт новой службы:

```
# systemctl start jatoba-clone
```

- проверить статус службы командой:
- 
```
# systemctl status jatoba-clone
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image307.png)



Рисунок 3.11 – Старт и проверка службы jatoba-clone 

– выполнить подключение к новому экземпляру СУБД:


```
psql -U postgres -d postgres -p 5433
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image308.png)

Рисунок 3.12 – Вход во второй экземпляр СУБД 

На данном шаге создание второго экземпляра СУБД закончено.

### Установка расширения «jadog» на первом экземпляре СУБД

Установка расширения «jadog» на первой СУБД идентична описанным действиям в п. 3.3 первой части документа «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01. С одной особенностью, что по значению порта надо контролировать подключение к экземпляру СУБД.

В результате потребуется:

– выполнить подключение к psql:


```
psql -U postgres -d postgres -p 5432
```


– создать расширение «jadog»:


```
CREATE EXTENSION jadog;
```


На втором экземпляре СУБД выполнять описанные действия не надо, т.к. в процессе создания кластера данные в БД синхронизируются.

### Создание пользователя «jadog_user» на первом экземпляре СУБД

Установка пользователя «jadog_user» на первом экземпляре СУБД идентична описанным действиям в п. 3.4 первой части документа «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01.

Пользователь создается при помощи SQL-команды с синтаксисом:


```
SELECT jadog.add_jadog_user('jadog_user');
```


Пароль для пользователя создается при помощи SQL-команды:


```
ALTER ROLE jadog_user with password '[password]';
```


### Настройка jadog для двух экземпляров СУБД

Настройка компонента «jaDog» для двух экземпляров СУБД сводится к формированию конфигурационного файла «jadog.yml» для первого экземпляра СУБД и копирования его с последующим редактированием для второго экземпляра СУБД.

Фактически компонент будет работать с двумя файлами конфигураций «jadog.yml» двух экземпляров СУБД. Конфигурационные файлы «jadog.yml» при этом будут располагаться в разных директориях.

#### Настройка компонента «jaDog» на главном узле (первом экземпляре СУБД)

Действия по настройке кластера на основной СУБД описаны в п.п 6.7 документа «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01.

Запуск настройки «jaDog» для первого экземпляра СУБД выполняется командами:

```
# cd /usr/jatoba-<ver>/bin 
# ./jadog setup
```

Устанавливаемые параметры на главном узле (первом экземпляре СУБД) кластера приведены в таблице [3.1](#_bookmark22).

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th>
<p>№ изменения:</p>
</th>
<th>
<p>По<span id="_bookmark22" class="anchor"></span>дпись отв. лица:</p>
</th>
<th>
<p>Дата внесения изм:</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Таблица 3.1 – Перечень устанавливаемых параметров на главном узле (первом экземпляре СУБД)

<table>
<colgroup>
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 63%" />
<col style="width: 29%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>1</strong></p>
</td>
<td colspan="3">
<p><strong>Database server and jadog directory settings Menu</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Database server binaries (path:db_bin_path)</p>
</td>
<td>
<p>[/usr/jatoba-&lt;ver&gt;/bin]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Database server data (postgresql:db_data_path)</p>
</td>
<td>
<p>[/var/lib/jatoba/&lt;ver&gt;/data]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Jadog configs (path:config_path)</p>
</td>
<td>
<p>[/usr/jatoba-&lt;ver&gt;/etc/jadog]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Jadog module files (path:module_path)</p>
</td>
<td>
<p>[/usr/jatoba-</p>
<p>&lt;ver&gt;/share/jadog/scripts]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Jadog state (path:state_path)</p>
</td>
<td>
<p>[/usr/jatoba-&lt;ver&gt;/etc/jadog]</p>
</td>
</tr>
<tr>
<td>
<p><strong>2</strong></p>
</td>
<td colspan="3">
<p><strong>Inter-jadog communication settings</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Jadog service name (main:service_name)</p>
</td>
<td>
<p>[jadog]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Jadog IP address (main:ip)</p>
</td>
<td>
<p>Текущий IP (10.96.1.139/24)</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Jadog PORT number (main:port)</p>
</td>
<td>
<p>[12345]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>SSL on (tls:tls)</p>
</td>
<td>
<p>[false]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Jadog interconnection user (main:interconnect_user)</p>
</td>
<td>
<p>[admin]</p>
</td>
</tr>
<tr>
<td>
<p><strong>3</strong></p>
</td>
<td colspan="3">
<p><strong>User / Admin access network settings</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Public address (main:public_address)</p>
</td>
<td>
<p>Внешний IP адрес (10.96.1.140/24)</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Public address control interval (main:public_address_control_interval)</p>
</td>
<td>
<p>[5000]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Public address control attempts (main:public_address_control_attempts)</p>
</td>
<td>
<p>[3]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>DB monitor timeout (postgresql:db_check_interval)</p>
</td>
<td>
<p>[5000]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Trusted IP address (main:trusted_address)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>RDBMS trusted ip (ja_hipe_cluster:rdbms_trusted_ip)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>RDBMS trusted port (ja_hipe_cluster:rdbms_trusted_port)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>Network interface name (main:network_interface)</p>
</td>
<td>
<p>Имя сетевого интерфейса (ens33)</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>Jadog TCP port (main:user_interface_port)</p>
</td>
<td>
<p>[54321]</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 63%" />
<col style="width: 29%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>4</strong></p>
</td>
<td colspan="3">
<p><strong>Administrator account list</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Add new account to the list</p>
</td>
<td>
<p>admin</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Delete account from the list</p>
</td>
<td></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Clear all accounts</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p><strong>5</strong></p>
</td>
<td colspan="3">
<p><strong>Database server system account and connection settings</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Database host (db_connection_settings:db_host)</p>
</td>
<td>
<p>[127.0.0.1]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Database port (db_connection_settings:db_port)</p>
</td>
<td>
<p>[5432]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Database service name (db_connection_settings:db_service_name)</p>
</td>
<td>
<p>[jatoba-&lt;ver&gt;]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Database name (db_connection_settings:db_name)</p>
</td>
<td>
<p>[postgres]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Jadog password file (db_connection_settings:db_passfile)</p>
</td>
<td>
<p>/usr/jatoba-&lt;ver&gt;/bin/db_passfile</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>Database auth method (db_connection:auth_method)</p>
</td>
<td>
<p>[password]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>Jadog to database CA file (db_connection_settings:ssl_ca_file)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>Jadog to database CRL file (db_connection_settings:ssl_crl_file)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>Jadog to database cert file (db_connection_settings:ssl_cert_file)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>10</p>
</td>
<td>
<p>Jadog to database key file (db_connection_settings:ssl_key_file)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>11</p>
</td>
<td>
<p>Jadog to database SSL mode (db_connection_settings:ssl_mode)</p>
</td>
<td>
<p>[very-full]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>12</p>
</td>
<td>
<p>Jadog database user name (db_connection_settings:db_jadog_user)</p>
</td>
<td>
<p>[jadog_user]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>13</p>
</td>
<td>
<p>Jadog database user password (db_connection_settings:db_jadog_user_pass)</p>
</td>
<td></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>14</p>
</td>
<td>
<p>Database server OS user (system:system_user)</p>
</td>
<td>
<p>[postgres]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>15</p>
</td>
<td>
<p>Replication slot name (replication:slot_name)</p>
</td>
<td>
<p>[jadog_slot]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>16</p>
</td>
<td>
<p>Replication Slot TTL (replication:slot_ttl)</p>
</td>
<td>
<p>[300000]</p>
</td>
</tr>
<tr>
<td>
<p><strong>6</strong></p>
</td>
<td colspan="3">
<p><strong>«Failover setting»</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Auto failover mode [true/false] (cluster_behavior:autofailover_mode)</p>
</td>
<td>
<p>[true]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Auto dc promote mode [true/false] (cluster_behavior:dc_autofailover_mode)</p>
</td>
<td>
<p>[false]</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 63%" />
<col style="width: 29%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>7</strong></p>
</td>
<td colspan="3">
<p><strong>«Replication setting»</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Replication node name (replication:slot_name)</p>
</td>
<td>
<p>[jadog_slot]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Synchronous commit setting (synchronous:synchronous_commit)</p>
</td>
<td>
<p>remote_apply</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Synchronous type (synchronous:synchronous_type)</p>
</td>
<td>
<p>ANY</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>The number of synchronous standbys (synchronous:synchronous_commit_max_nodes)</p>
</td>
<td>
<p>[3]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>The wal_level value (postgresql:wal_level)</p>
</td>
<td>
<p>[replica]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>List of ignored replication slots (replication:ignore_replication_slots)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td>
<p><strong>8</strong></p>
</td>
<td colspan="3">
<p><strong>WAL archive and restore settings</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>System directory for WAL archive/restore (wal_archive:directory)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>WAL archive copy command (wal_archive:command)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>WAL archive restore command (wal_restore:command)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>WAL archive cleanup process on (wal_archive:cleanup_needed)</p>
</td>
<td>
<p>[false]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>WAL archive cleanup command (wal_archive:cleanup_command)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>WAL archive cleanup timeout (wal_archive:cleanup_timeout)</p>
</td>
<td>
<p>[30000]</p>
</td>
</tr>
<tr>
<td>
<p><strong>9</strong></p>
</td>
<td colspan="3">
<p><strong>Reporting and logging</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Log directory (log:path)</p>
</td>
<td>
<p>[/usr/jatoba-&lt;ver&gt;/var/log/jadog]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Log filename (log:file_name)</p>
</td>
<td>
<p>[jadog-%Y-%m-%d_%H%M%S]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Log file mode (log:mode)</p>
</td>
<td>
<p>[0600]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Log format (log:type)</p>
</td>
<td>
<p>[json]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Max log file usage duration (log:rotation_age)</p>
</td>
<td>
<p>[1d]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>Max log file size (log:rotation_size)</p>
</td>
<td>
<p>[10MB]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>Truncate, not append, logs (log:truncate_on_rotation)</p>
</td>
<td>
<p>[false]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>Log verbosity (log:level)</p>
</td>
<td>
<p>[info]</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 63%" />
<col style="width: 29%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;"></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>Security log directory (security_log:path)</p>
</td>
<td>
<p>[/usr/jatoba-&lt;ver&gt;/var/log/jadog].</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>10</p>
</td>
<td>
<p>Security log filename (security_log:file_name)</p>
</td>
<td>
<p>[security_jadog-%Y-%m-</p>
<p>%d_%H%M%S]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>11</p>
</td>
<td>
<p>Security log file mode (security_log:file_mode)</p>
</td>
<td>
<p>[0600]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>12</p>
</td>
<td>
<p>Security log format (security_log:type)</p>
</td>
<td>
<p>[json]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>13</p>
</td>
<td>
<p>Max security log file usage duration (security_log:rotation_age)</p>
</td>
<td>
<p>[1d]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>14</p>
</td>
<td>
<p>Max security log file size (security_log:rotation_size)</p>
</td>
<td>
<p>[10MB]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>15</p>
</td>
<td>
<p>Truncate, not append, security logs (security_log:truncate_on_rotation)</p>
</td>
<td>
<p>[false]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>16</p>
</td>
<td>
<p>Allow to write into file (log:file)</p>
</td>
<td>
<p>[true]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>17</p>
</td>
<td>
<p>Allow to write into stdout (log:screen)</p>
</td>
<td>
<p>[false]</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>10</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>REST API settings</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>REST API use (rest_api:api_use)</p>
</td>
<td>
<p>[false]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>REST API listen address (rest_api:listen_address)</p>
</td>
<td>
<p>[0.0.0.0]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>REST API listen port (rest_api:listen_port)</p>
</td>
<td>
<p>[54443]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>REST API TLS server certificate (rest_api:cert_file)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>REST API TLS server private key (rest_api:key_file)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>REST API TLS CA certificate (rest_api:ca_file)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>REST API TLS server revocation list (rest_api:crl_file)</p>
</td>
<td>
<p>[]</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>11</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>Recovery settings</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Allow backup if dir exist (after_rewind_fail_backup:backup_allow)</p>
</td>
<td>
<p>[true]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Time delay (ms) of the cluster response (recovery:cluster_timeout)</p>
</td>
<td>
<p>[3000000]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>backup script file (backup:script_backup)</p>
</td>
<td>
<p>/usr/jatoba-</p>
<p>&lt;ver&gt;/share/jadog/scripts/backup.sh</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>12</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>Reset all settings to the default values</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>13</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>Check and show all settings</strong></p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 63%" />
<col style="width: 29%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p><strong>14</strong></p>
</td>
<td colspan="3">
<p><strong>Save settings and setup jadog</strong></p>
</td>
</tr>
</tbody>
</table>

После чего требуется запустить и добавить сервис «jaDog» в автозапуск ОС командами:

```
systemctl start jadog 
systemctl enable jadog 
systemctl status jadog
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image309.png)



Рисунок 3.13 – Запуск и проверка статуса сервиса «jadog»

#### Настройка компонента «jaDog» на резервном узле (втором экземпляре СУБД)

После формирования параметров кластера на главном узле (первом экземпляре СУБД) в каталоге /usr/jatoba-6/etc/jadog/ находится конфигурационный файл «jadog.yml».

Для подготовки резервного узла (второго экземпляра СУБД) кластера необходимо скопировать конфигурацию главного узла кластера (первого экземпляра СУБД) «jadog.yml» в каталог /usr/jatoba-6/etc/jadog2/ и внести изменения.

Копирование каталога конфигурации с вложенным файлом «jadog.yml» выполняется командой:


```
cp -r ../etc/jadog/ ../etc/jadog2
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image310.png)

Рисунок 3.14 – Копирование каталога

Структура каталога /usr/jatoba-<ver>/etc/ показана на рисунке [3.15.](#_bookmark24) На этом этапе каталоги /usr/jatoba-6/etc/jadog/ и /usr/jatoba-<ver>/etc/jadog2/ содержат одинаковую конфигурацию.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image311.png)

<span id="_bookmark24" class="anchor"></span>Рисунок 3.15 – Структура каталога usr/jatoba-5/etc

Файл конфигурации /usr/jatoba-<ver>/etc/jadog2/jadog.yml для второго экземпляра СУБД требует внесения изменений. Для чего необходимо отрыть файл конфигурации в редакторе командой:


```
nano /usr/jatoba-<ver>/etc/jadog2/jadog.yml
```


Установить следующие параметры:


```
db_port: 5433 
path:
    db_bin_path: /usr/jatoba-6/bin 
postgresql:
    db_data_path: /var/lib/jatoba/6/clone 
    db_service_name: jatoba-clone
replication:
    slot_name: jadog_slot_2 
main:
    port: 2222
    user_interface_port: 54322
log:
    screen: true file: false
```


:::info Дополнительная информация
Значение параметра slot_name является уникальным для каждого экземпляра компонента «jaDog».
:::

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image312.png)

Рисунок 3.16 – Измененные параметры в конфигурационном файле /usr/jatoba-<ver>/etc/jadog2/jadog.yml

#### Настройка сервиса «jadog» для резервного узла второго экземпляра СУБД

По умолчанию сервис «jadog» хранится в каталоге:


```
cd /etc/systemd/system
```


Для запуска второго сервиса «jadog» для резервного узла второго экземпляра СУБД потребуется клонировать файл сервиса «jadog» командами в ОС:


```
cp /etc/systemd/system/jadog.service /etc/systemd/system/jadog-clone.service
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image313.png)

Рисунок 3.17 – Выполнение клонирования файла сервиса «jadog»

В результате в каталоге /etc/systemd/system появится файл «jadog-clone.service»

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image318_.png)

Рисунок 3.18 – Расположение файлов сервиса «jadog»

Клонированный файл сервиса «jadog-clone.service» нуждается в редактировании, чтобы при последующей автозагрузке он пользовался собственным конфигурационным файлом, расположенным в каталоге:


```
/usr/jatoba-<ver>/etc/jadog2/jadog.yml
```


Для этого требуется отрыть файл конфигурации в редакторе командой:


```
nano /etc/systemd/system/jadog-clone.service
```


Установить следующие параметры:

```
ExecStart="/usr/jatoba-<ver>/bin/jadog" -C "/usr/jatoba-<ver>/etc/jadog2"
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image315.png)



Рисунок 3.19 – Редактирования файла сервиса «jadog-clone.service»

Тем самым указывается директория, хранящая ранее клонированный и отредактированный файл конфигурации узла кластера.

Запуск, включение в автозагрузку ОС и проверка статуса сервиса выполняется командами:

```
systemctl start jadog-clone 
systemctl enable jadog-clone 
systemctl status jadog-clone
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image316.png)



Рисунок 3.20 – Запуск и проверка статуса «jadog-clone.service»

### 3.6. Создание кластера

Дальнейшее конфигурирование кластера зависит от типа кластера.

Последовательная репликация описана в п. 6.9 первой части документа «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01.

Перекрестная репликация описана в разделе [3](#перекрестная-репликация.-настройка-в-ручном-режиме) настоящего документа.

## КАСКАДНАЯ РЕПЛИКАЦИЯ. ИСПОЛЬЗОВАНИЕ ФАЙЛОВ ОТВЕТОВ

Каскадная репликация позволяет снизить количество подключений и нагрузку на главный узел (Master). Основную нагрузку с него снимает подчиненный резервный узел (Primary Slave) работает как получатель и отправитель. К подчиненному резервному узел (Primary Slave) подключаются подчиненные каскадные узлы (Cascade Slave).

В данном разделе рассматривается вариант настройки кластера с каскадной репликацией в автоматизированном режиме с использованием подготовленного файла ответов. Ручная настройка кластера с каскадной репликацией приведена в разделе [5](#каскадная-репликация.-настройка-в-ручном-режиме).

В рассматриваемом примере установки и конфигурировании отказоустойчивого кластера «jaDog» на ОС Ubuntu 22.04 используются параметры сети кластера, приведенные в таблице [4.1](#_bookmark29).

Таблица 4.1 – Конфигурация сети кластера для каскадной репликации

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 11%" />
<col style="width: 19%" />
<col style="width: 16%" />
<col style="width: 19%" />
<col style="width: 12%" />
<col style="width: 17%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th>
<p><strong>Имя сервера</strong></p>
</th>
<th style="text-align: center;">
<p><strong>IP-адрес</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Маска подсети</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Public IP</strong></p>
</th>
<th>
<p><strong>Роль</strong></p>
</th>
<th>
<p><strong>Имя кластера</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td>
<p>node1</p>
</td>
<td style="text-align: center;">
<p>10.116.102.54/24</p>
</td>
<td style="text-align: center;">
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Master</p>
</td>
<td rowspan="3">
<p>cluster_cascade</p>
</td>
</tr>
<tr>
<td>
<p>2</p>
</td>
<td>
<p>node2</p>
</td>
<td style="text-align: center;">
<p>10.116.102.55/24</p>
</td>
<td style="text-align: center;">
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Primary Slave</p>
</td>
</tr>
<tr>
<td>
<p>4</p>
</td>
<td>
<p>node3</p>
</td>
<td style="text-align: center;">
<p>10.116.102.57/24</p>
</td>
<td style="text-align: center;">
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Cascade Slave</p>
</td>
</tr>
</tbody>
</table>

:::info Дополнительная информация
Узлы кластера с каскадной репликацией должны работать в асинхронном режиме.
:::

### Формирование файла ответов для кластера с каскадной репликацией

Шаблон файла ответов автоматизированного построения кластеров с каскадной репликацией содержит в себе все необходимые настройки. Далее данный шаблон файла ответов будет называться «jadog_cascading_cluster.yml».

:::info Дополнительная информация
Шаблон файла ответов автоматизированного построения кластеров с каскадной репликацией «jadog_cascading_cluster.yml» формируется на основании   шаблона,   расположенного   в   директории   /usr/jatoba-<ver>/share/doc/jadog/clusters_kits/jadog_referee/init_jadog_referee.yml.in

:::

В шаблоне файла ответов «jadog_cascading_cluster.yml» для автоматизированного построения кластеров с перекрестной репликацией для каждого параметра приводятся комментарии, описывающие его назначение.

:::info Дополнительная информация
По умолчанию главный подчиненный узел (Primary Slave), входящий в кластер с каскадной репликацией, настраивается на асинхронный тип репликации с главным узлом с помощью параметра replication_type: async. Для  каскадных  резервных  узлов  (Cascade  Slave)  указывается  как
replication_type: none

:::

:::info Дополнительная информация
В случае, если для параметра slot_name не определено значение, то оно генерируется автоматически по формуле:

```
[rs_]+[hostname]+[_]+[datetime]
```

Где, rs_ - префикс (от сокр. replication slot), hostname – короткое название узла без DNS-записи, datetime – только локальные дата и время в формате ddmmyyhhmmss.

Например:

```
rs_host123_2590925070015
```

Если в имени узла содержатся буквы в верхнем регистре, дефис (-) или точки, то:
- верхний регистр – будет переведен в нижний.
- дефисы и точки – удалены из полученного hostname. 

Существующий слот репликации во время работы не переназначается.
:::

### Запуск настройки кластера с каскадной репликацией

Формирование и настройка узлов кластера с каскадной репликацией выполняется аналогично процедуре для кластера с перекрестной репликацией (см. п. [2.2](#запуск-настройки-кластера-с-перекрестной-репликацией)).

### Настройка компонента «jaDog» для каскадной репликации на подчиненном главном узле и резервном узле с помощью файла ответов

Настройка компонента «jaDog» для каскадной репликации на подчиненном главном узле (Primary Slave) и резервном узле (Cascade Slave) с помощью файла ответов выполняется аналогично процедуре для кластера с перекрестной репликацией (см. п.п. [2.3](#настройка-компонента-jadog-для-перекрёстной-репликации-на-резервном-узле-втором-экземпляре-субд-с-помощью-файла-ответов)).

## КАСКАДНАЯ РЕПЛИКАЦИЯ. НАСТРОЙКА В РУЧНОМ РЕЖИМЕ

В данном разделе рассматривается вариант настройки каскадной репликации с использованием сервиса «jadog» с параметром «setup».

В рассматриваемом примере установки и конфигурировании отказоустойчивого кластера «jaDog» на ОС Ubuntu 22.04 используются параметры сети кластера, приведенные в таблице [5.1](#_bookmark33).

<span id="_bookmark33" class="anchor"></span>Таблица 5.1 – Конфигурация сети кластера для каскадной репликации

<table style="width:100%;">
<colgroup>
<col style="width: 4%" />
<col style="width: 12%" />
<col style="width: 19%" />
<col style="width: 16%" />
<col style="width: 19%" />
<col style="width: 16%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th>
<p><strong>Имя сервера</strong></p>
</th>
<th style="text-align: center;">
<p><strong>IP-адрес</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Маска подсети</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Public IP</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Роль</strong></p>
</th>
<th>
<p><strong>Имя кластера</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td>
<p>Node1</p>
</td>
<td style="text-align: center;">
<p>10.116.102.54/24</p>
</td>
<td style="text-align: center;">255.255.255.0</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Master</p>
</td>
<td rowspan="5">
<p>Cascade</p>
</td>
</tr>
<tr>
<td>
<p>2</p>
</td>
<td>
<p>Node2</p>
</td>
<td style="text-align: center;">
<p>10.116.102.55/24</p>
</td>
<td style="text-align: center;">255.255.255.0</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Primary Slave</p>
</td>
</tr>
<tr>
<td>
<p>3</p>
</td>
<td>
<p>Shared-node</p>
</td>
<td style="text-align: center;">
<p>10.116.102.56/24</p>
</td>
<td style="text-align: center;">255.255.255.0</td>
<td style="text-align: center;"></td>
<td>
<p>File-server</p>
</td>
</tr>
<tr>
<td>
<p>4</p>
</td>
<td>
<p>Node4</p>
</td>
<td style="text-align: center;">
<p>10.116.102.57/24</p>
</td>
<td style="text-align: center;">255.255.255.0</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Cascade Slave</p>
</td>
</tr>
<tr>
<td>
<p>5</p>
</td>
<td>
<p>Node5</p>
</td>
<td style="text-align: center;">
<p>10.116.102.58/24</p>
</td>
<td style="text-align: center;">255.255.255.0</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Cascade Slave</p>
</td>
</tr>
</tbody>
</table>

В работе кластера с каскадной репликацией также будет участвовать и файловый сервер с архивом WAL.

:::info Дополнительная информация
Узлы кластера с каскадной репликацией должны работать в асинхронном режиме.
:::

### Настройка компонента «jaDog» на главном узле при каскадной репликации

Настройка компонента «jaDog» на главном узле при каскадной репликации полностью описана в пунктах настоящего руководства. Должны быть выполнены шаги, описанные в пунктах с параметрами, приведенными в таблице [5.2](#_bookmark36) для Node1:

- установка пароля системного пользователя ОС «postgres»;

- установка расширения «jadog»;

- вызов функции «add_jadog_user» для создания пользователя «jadog_user»;

- установка пакетов СУБД на резервном узле (Slave).

### Настройка и запуск компонента «jaDog» на резервных узлах при каскадной репликации

Резервные узлы Node2, Node4 и Node5 настраиваются с параметрами, приведенными в таблице [5.2](#_bookmark36) по п. 5.6 первой части «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01.

Устанавливаемые помощи сервиса «jadog» с параметром «setup» параметры кластера с каскадной репликацией, приведены в таблице [5.2](#_bookmark36).

Таблица 5.2 – Перечень устанавливаемых параметров для каскадной репликации

<table>
<colgroup>
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 30%" />
<col style="width: 18%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Node1</strong></p>
</th>
<th>
<p><strong>Node2</strong></p>
</th>
<th>
<p><strong>Node4</strong></p>
</th>
<th>
<p><strong>Node5</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>1</strong></p>
</td>
<td colspan="3">
<p><strong>Database server and jadog directory settings Menu</strong></p>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Database server binaries (path:db_bin_path)</p>
</td>
<td>
<p>[/usr/jatoba-&lt;ver&gt;/bin]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Database server data (postgresql:db_data_path)</p>
</td>
<td>
<p>[/var/lib/jatoba/&lt;ver&gt;/data]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Jadog configs (path:config_path)</p>
</td>
<td>
<p>[/usr/jatoba-&lt;ver&gt;/etc/jadog]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Jadog module files (path:module_path)</p>
</td>
<td>
<p>[/usr/jatoba-</p>
<p>&lt;ver&gt;/share/jadog/scripts]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Jadog state (path:state_path)</p>
</td>
<td>
<p>[/usr/jatoba-&lt;ver&gt;/etc/jadog]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td>
<p><strong>2</strong></p>
</td>
<td colspan="3">
<p><strong>Inter-jadog communication settings</strong></p>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Jadog service name (main:service_name)</p>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Jadog IP address (main:ip)</p>
</td>
<td>
<p>Текущий IP</p>
<p>(10.116.102.54/24)</p>
</td>
<td>
<p>10.116.102.54/24</p>
</td>
<td>
<p>10.116.102.55/24</p>
</td>
<td>
<p>10.116.102.57/24</p>
</td>
<td>
<p>10.116.102.58/24</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Jadog PORT number (main:port)</p>
</td>
<td>
<p>[12345]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>SSL on (tls:tls)</p>
</td>
<td>
<p>[false]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Jadog interconnection user</p>
<p>(main:interconnect_user)</p>
</td>
<td>
<p>[admin]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td>
<p><strong>3</strong></p>
</td>
<td colspan="3">
<p><strong>User / Admin access network settings</strong></p>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Public address (main:public_address)</p>
</td>
<td>
<p>Внешний IP адрес</p>
<p>(10.116.102.81/24)</p>
</td>
<td>
<p>10.116.102.81/24</p>
</td>
<td>
<p>10.116.102.81/24</p>
</td>
<td>
<p>10.116.102.81/24</p>
</td>
<td>
<p>10.116.102.81/24</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Public address control interval</p>
<p>(main:public_address_control_interval)</p>
</td>
<td>
<p>[5000]</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Public address control attempts</p>
<p>(main:public_address_control_attempts)</p>
</td>
<td>
<p>[3]</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>DB monitor timeout</p>
<p>(postgresql:db_check_interval)</p>
</td>
<td>
<p>[5000]</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Trusted IP address (main:trusted_address)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 30%" />
<col style="width: 18%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th style="text-align: center;"></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node1</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node2</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node5</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>RDBMS trusted ip</p>
<p>(ja_hipe_cluster:rdbms_trusted_ip)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>RDBMS trusted port</p>
<p>(ja_hipe_cluster:rdbms_trusted_port)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>Network interface name (main:network_interface)</p>
</td>
<td>
<p>Имя сетевого интерфейса</p>
<p>(ens18)</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>Jadog TCP port (main:user_interface_port)</p>
</td>
<td>
<p>[54321]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td>
<p><strong>4</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>Administrator account list</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Add new account to the list</p>
</td>
<td>
<p>admin</p>
</td>
<td style="text-align: center;">
<p>admin</p>
</td>
<td style="text-align: center;">
<p>admin</p>
</td>
<td style="text-align: center;">
<p>admin</p>
</td>
<td style="text-align: center;">
<p>admin</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Delete account from the list</p>
</td>
<td></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Clear all accounts</p>
</td>
<td></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>
<p><strong>5</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>Database server system account and connection settings</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Database host (db_connection_settings:host)</p>
</td>
<td>
<p>[127.0.0.1]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Database port (db_connection_settings:port)</p>
</td>
<td>
<p>[5432]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Database service name</p>
<p>(postgresql:db_service_name)</p>
</td>
<td>
<p>[jatoba-&lt;ver&gt;]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Database name (db_connection_settings:database)</p>
</td>
<td>
<p>[postgres]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Jadog password file</p>
<p>(db_connection_settings:passfile)</p>
</td>
<td>
<p>/usr/jatoba-</p>
<p>&lt;ver&gt;/bin/db_passfile</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>Database auth method</p>
<p>(db_connection:auth_method)</p>
</td>
<td>
<p>[password]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>Jadog to database CA file</p>
<p>(db_connection_settings:ssl_ca_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>Jadog to database CRL file</p>
<p>(db_connection_settings:ssl_crl_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>Jadog to database cert file</p>
<p>(db_connection_settings:ssl_cert_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>10</p>
</td>
<td>
<p>Jadog to database key file</p>
<p>(db_connection_settings:ssl_key_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 30%" />
<col style="width: 18%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th style="text-align: center;"></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node1</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node2</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node5</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td style="text-align: center;">
<p>11</p>
</td>
<td>
<p>Jadog to database SSL mode</p>
<p>(db_connection_settings:ssl_mode)</p>
</td>
<td>
<p>[verify-full]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>12</p>
</td>
<td>
<p>Jadog database user name</p>
<p>(db_connection_settings:user)</p>
</td>
<td>
<p>[jadog_user]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>13</p>
</td>
<td>
<p>Jadog database user password</p>
<p>(db_connection_settings:user_pass)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>14</p>
</td>
<td>
<p>Database server OS user (system:system_user)</p>
</td>
<td>
<p>[postgres]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>15</p>
</td>
<td>
<p>Replication node name (replication:slot_name)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>node1</p>
</td>
<td style="text-align: center;">
<p>node2</p>
</td>
<td style="text-align: center;">
<p>node4</p>
</td>
<td style="text-align: center;">
<p>node5</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>16</p>
</td>
<td>
<p>Replication Slot TTL (replication:slot_ttl)</p>
</td>
<td>
<p>[300000]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td>
<p><strong>6</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>«Failover setting»</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Auto failover mode [true/false]</p>
<p>(cluster_behavior:autofailover_mode)</p>
</td>
<td>
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Auto dc promote mode [true/false]</p>
<p>(cluster_behavior:dc_autofailover_mode)</p>
</td>
<td>
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
</tr>
<tr>
<td>
<p><strong>7</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>«Replication setting»</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Replication node name (replication:slot_name)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>node1</p>
</td>
<td style="text-align: center;">
<p>node2</p>
</td>
<td style="text-align: center;">
<p>node4</p>
</td>
<td style="text-align: center;">
<p>node5</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Synchronous commit setting</p>
<p>(synchronous:synchronous_commit)</p>
</td>
<td>
<p>remote_apply</p>
</td>
<td style="text-align: center;">
<p>remote_apply</p>
</td>
<td style="text-align: center;">
<p>remote_apply</p>
</td>
<td style="text-align: center;">
<p>remote_apply</p>
</td>
<td style="text-align: center;">
<p>remote_apply</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Synchronous type</p>
<p>(synchronous:synchronous_type)</p>
</td>
<td>
<p>ANY</p>
</td>
<td style="text-align: center;">
<p>ANY</p>
</td>
<td style="text-align: center;">
<p>ANY</p>
</td>
<td style="text-align: center;">
<p>ANY</p>
</td>
<td style="text-align: center;">
<p>ANY</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>The number of synchronous standbys</p>
<p>(synchronous:synchronous_commit_max_nodes)</p>
</td>
<td>
<p>4</p>
</td>
<td style="text-align: center;">
<p>4</p>
</td>
<td style="text-align: center;">
<p>4</p>
</td>
<td style="text-align: center;">
<p>4</p>
</td>
<td style="text-align: center;">
<p>4</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>The wal_level value (postgresql:wal_level)</p>
</td>
<td>
<p>[replica]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>List of ignored replication slots</p>
<p>(replication:ignore_replication_slots)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td>
<p><strong>8</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>WAL archive and restore settings</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>System directory for WAL archive/restore</p>
<p>(wal_archive:directory)</p>
</td>
<td>
<p>[/nfs/arhive_wal]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>WAL archive copy command</p>
<p>(wal_archive:command)</p>
</td>
<td>
<p>[cp %p /nfs/arhive_wal/%f]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 30%" />
<col style="width: 18%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th style="text-align: center;"></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node1</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node2</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node5</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>WAL archive restore command</p>
<p>(wal_restore:command)</p>
</td>
<td>
<p>[cp /nfs/arhive_wal/%f %p]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>WAL archive cleanup process on</p>
<p>(wal_archive:cleanup_needed)</p>
</td>
<td>
<p>[false]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>WAL archive cleanup command (wal_archive:cleanup_command)</p>
</td>
<td>
<p>[/usr/jatoba-</p>
<p>&lt;ver&gt;/bin/pg_archivecleanup</p>
<p>/nfs/arhive_wal %s]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>WAL archive cleanup timeout</p>
<p>(wal_archive:cleanup_timeout)</p>
</td>
<td>
<p>[30000]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td>
<p><strong>9</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>Reporting and logging</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Log directory (log:path)</p>
</td>
<td>
<p>[/usr/jatoba-</p>
<p>&lt;ver&gt;/var/log/jadog]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Log filename (log:file_name)</p>
</td>
<td>
<p>[jadog-%Y-%m-</p>
<p>%d_%H%M%S]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Log file mode (log:mode)</p>
</td>
<td>
<p>[0600]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Log format (log:type)</p>
</td>
<td>
<p>[json]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Max log file usage duration (log:rotation_age)</p>
</td>
<td>
<p>[1d]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>Max log file size (log:rotation_size)</p>
</td>
<td>
<p>[10MB]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>Truncate, not append, logs</p>
<p>(log:truncate_on_rotation)</p>
</td>
<td>
<p>[false]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>Log verbosity (log:level)</p>
</td>
<td>
<p>[info]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>Security log directory (security_log:path)</p>
</td>
<td>
<p>[/usr/jatoba-</p>
<p>&lt;ver&gt;/var/log/jadog].</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>10</p>
</td>
<td>
<p>Security log filename (security_log:file_name)</p>
</td>
<td>
<p>[security_jadog-%Y-%m-</p>
<p>%d_%H%M%S]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>11</p>
</td>
<td>
<p>Security log file mode (security_log:file_mode)</p>
</td>
<td>
<p>[0600]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>12</p>
</td>
<td>
<p>Security log format (security_log:type)</p>
</td>
<td>
<p>[json]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>13</p>
</td>
<td>
<p>Max security log file usage duration</p>
<p>(security_log:rotation_age)</p>
</td>
<td>
<p>[1d]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 30%" />
<col style="width: 18%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;"></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node1</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node2</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node5</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td style="text-align: center;">
<p>14</p>
</td>
<td>
<p>Max security log file size</p>
<p>(security_log:rotation_size)</p>
</td>
<td>
<p>[10MB]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>15</p>
</td>
<td>
<p>Truncate, not append, security logs</p>
<p>(security_log:truncate_on_rotation)</p>
</td>
<td>
<p>[false]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>16</p>
</td>
<td>
<p>Allow to write into file (log:file)</p>
</td>
<td>
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>17</p>
</td>
<td>
<p>Allow to write into stdout (log:screen)</p>
</td>
<td>
<p>[false]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>10</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>REST API settings Menu</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>REST API use (rest_api:api_use)</p>
</td>
<td>
<p>[false]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>REST API listen address (rest_api:listen_address)</p>
</td>
<td>
<p>[0.0.0.0]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>REST API listen port (rest_api:listen_port)</p>
</td>
<td>
<p>[54443]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>REST API TLS server certificate</p>
<p>(rest_api:cert_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>REST API TLS server private key</p>
<p>(rest_api:key_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>REST API TLS CA certificate (rest_api:ca_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>REST API TLS server revocation list</p>
<p>(rest_api:crl_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>11</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>Recovery settings</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Allow backup if dir exist</p>
<p>(after_rewind_fail_backup:backup_allow)</p>
</td>
<td>
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Time delay (ms) of the cluster response</p>
<p>(recovery:cluster_timeout)</p>
</td>
<td>
<p>[3000000]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>backup script file (backup:script_backup)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>12</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>Reset all settings to the default values</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>13</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>Check and show all settings</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>14</strong></p>
</td>
<td colspan="3" style="text-align: center;">
<p><strong>Save settings and setup jadog</strong></p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

### Настройка кластера для каскадной репликации

Первоначально требуется установить параметры аутентификации на главном узле (Master). С этой целью в конфигурационном файле /var/lib/jatoba/<ver>/data/pg_hba.conf требуется внести строки с указанием подсети, в которой работает кластер.

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 21%" />
<col style="width: 18%" />
<col style="width: 25%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">host</th>
<th>
<p>replication</p>
</th>
<th style="text-align: center;">
<p>jadog_user</p>
</th>
<th style="text-align: center;">
<p>10.116.102.0/24</p>
</th>
<th>
<p>scram-sha-256</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p>host</p>
</td>
<td>
<p>all</p>
</td>
<td style="text-align: center;">
<p>jadog_user</p>
</td>
<td style="text-align: center;">
<p>10.116.102.0/24</p>
</td>
<td>
<p>scram-sha-256</p>
</td>
</tr>
</tbody>
</table>

Тем самым, пользователю СУБД «jadog_user» разрешается подключаться к СУБД в подсети, проводить репликацию по методу аутентификации «scram-sha-256» в подсети.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image317.png)

Рисунок 5.1 – Добавление параметров репликации в конфигурационном файле «pg_hba.conf»

Применение установленных параметров в конфигурационном файле «pg_hba.conf» выполняется от имени и справами привилегированного пользователя СУБД SQL-командой:


```
select pg_reload_conf ();
```


Параметры применятся без перезагрузки СУБД.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image318.png)

Рисунок 5.2 – SQL-команда применения параметров конфигурационных файлов 

Следующим шагом является непосредственное конфигурирование каскадного кластера.

На сервере, который будет выполнять роль главного узла кластера, подключиться к утилите «jadog_ctl» в терминале ОС:


```
./jadog_ctl
```


– создать кластер:

```
cluster create 'cascade'
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image319.png)



Рисунок 5.3 – Команда создания кластера – присвоить узлу роль главного:


```
cluster add master 10.116.102.54 12345
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image320.png)

Рисунок 5.4 – Присвоение узлу роли Master

На данном этапе обозначен узел, который будет выполнять роль главного в кластере.

Схема исходного состояния кластера представлена на [5.5](#_bookmark38).

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image55_.png)

<span id="_bookmark38" class="anchor"></span>Рисунок 5.5 – Исходное состояние узлов кластера с каскадной репликацией

После определения главного узла, к нему добавляется подчиненный узел (Primary Slave) при помощи команды следующего синтаксиса:


```
cluster add slave [nodata] [ip/host_name] [port]
```


где nodata – специальный режим добавления узла без необходимости скачивания каталога СУБД с главного узла (см. описание режима в документе «Компонент jaDog. Управление режимом работы узлов кластера (часть 1)» 643.72410666.00067-08 98 02-01).

**Например:**


```
cluster add slave 10.116.102.55 12345
```


Для того чтобы проверить статус добавленного узла необходимо выполнить следующую команду:


```
cluster
```


В выводе состояния кластера будет отображаться информация, что кластер создан и состоит из двух узлов.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image367.png)

Рисунок 5.6 – Вывод состояние кластера

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image57_.png)

Рисунок 5.7 – Структура кластера с подключенным вторым подчиненным узлом (Slave Main)

Ко подчиненному узлу (Primary Slave) подключаются узлы с ролью подчиненных каскадных узлов (Cascade Slave):

```
cluster add cascade slave 10.116.102.57 12345 primary 10.116.102.55 12345
cluster add cascade slave 10.116.102.58 12345 primary 10.116.102.55 12345
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image421.png)



Рисунок 5.8 - подключение узлов Slave Cascade

Активировать кластер командой, т.е. активировать использование публичного IP-адреса (public ip):


```
cluster ip activate
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image422.png)

Рисунок 5.9 – Команда активации кластера Вывести статус кластера командой:


```
cluster
```


В выводе статуса кластера видно, что в кластере:

- узел Node1 IP-10.116.102.54 выполняет роль главного (Master);

- узел Node2 IP-10.116.102.55 выполняет роль подчиненного (Slave или Primary Slave) и подключен к узлу Node1 IP-10.116.102.54;

- узлы Node4 IP-10.116.102.57 и Node5 IP-10.116.102.58 выполняют роль каскадных (Slave или Slave Cascade) и подключены к узлу Node2 IP-10.116.102.55.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image423.png)

Рисунок 5.10 – Вывод статуса кластера с каскадной репликацией 

Таким образом сформирован кластер с каскадной репликацией.

### Изменение типа подчиненности резервного узла в кластере с каскадной репликацией

В случае если в кластере уже имеются резервные узлы (Slave) их можно назначить в качестве каскадного (Cascade Slave). Для этого необходимо:

1)  Подключиться на главном узле кластера к компоненту «jaDog» при помощи консольной утилиты «jadog_ctl».

2)  Выполнить одну из команд:


```
node [ip] [port] set primary = '[primary_node]'
node [ip] [port] set primary [primary_ip] [primary_port] node '[node_name]' set primary = '[primary_node]'
node '[node_name]' set primary [primary_ip] [primary_port]
```


Где primary_node – название подчиненного резервного узла кластера (Primary Slave).

**Пример:**


```
node 10.116.102.57 12345 set primary = 'node55'
```


Другим вариантом изменения роли резервного узла на каскадный (Cascade Slave) является использование команды:


```
node [ip] [port] set primary [primary_ip] [primary_port]
```


Где значения primary_ip и primary_port соответствуют IP-адресу и номеру сетевого порта подчиненного узла (Primary Slave).

**Пример:**


```
node 10.116.102.57 12345 set primary 10.116.102.55 12345
```


Также вместо IP-адреса и сетевого порта каскадного узла (Cascade Slave) можно использовать его название в кластере, например:


```
node 'node57' set primary = 'node55'
node 'node57' set primary = 10.116.102.55 12345
```


3)  После завершения внесения изменений типа репликации необходимо перевести кластер в рабочий режим и проверить состояние его узлов при помощи команды:


```
cluster
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image511_.png)

Рисунок 5.11 – Схема сформированного кластера с каскадной репликацией

### Работа кластера с каскадной репликацией в дата-центрах

Кластер с каскадной репликацией имеет функциональную возможность работы в дата-центрах и поддерживаются следующие конфигурации:

- размещение кластера в одном дата-центре;

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image512_.png)

Рисунок 5.12 – Схема размещения кластера в одном дата-центре

- размещение главного узла в одном дата-центре и резервных узлов Primary Slave, Cascade Slave в другом дата-центре.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image513_.png)

Рисунок 5.13 – Схема размещения главного узла в одном дата-центре и резервных узлов Primary Slave, Cascade Slave в другом дата-центре

:::info Дополнительная информация
При выполнении операции смены Switchover выполняется смена роли главного узла (Master) кластера. При этом каскадные резервные узлы (Cascade Slave) переключаются на «новый» главный узел.

Основные правила определения нового подчиненного Primary Slave в кластере с каскадной репликацией:
 
- предыдущий узел Primary Slave при переключении не может быть новым Primary Slave узлом для Cascade Slave;
- узел не может быть Primary Slave для самого себя;
- узел Primary Slave не может быть выбран из числа узлов-арбитров (Referee);
- узел Primary Slave не может быть выбран из числа узлов Cascade Slave;
- в случае, если не удалось определить новый Primary Slave узел для каскадных узлов Cascade Slave, то Primary Slave узлом станет новый главный узел. В этом случае, кластер перестает быть каскадным.
:::

Основные правила определения нового подчиненного Primary Slave в кластере с каскадной репликацией:

‒ предыдущий узел Primary Slave при переключении не может быть новым Primary Slave узлом для Cascade Slave;

‒ узел не может быть Primary Slave для самого себя;

‒ узел Primary Slave не может быть выбран из числа узлов-арбитров (Referee);

‒ узел Primary Slave не может быть выбран из числа узлов Cascade Slave;

‒ в случае, если не удалось определить новый Primary Slave узел для каскадных узлов Cascade Slave, то Primary Slave узлом станет новый главный узел. В этом случае, кластер перестает быть каскадным.

### Повторная инициализация узлов в кластере с каскадной репликацией

Компонент «jaDog» реализует функционал повторной инициализации резервного узла в кластере с каскадной репликацией с использованием:

- существующего каталога данных СУБД (режим nodata);

- повторной загрузки каталога данных СУБД с главного узла.

Повторная инициализация резервного узла кластера необходима, например, в случае если каталог с данными СУБД на нем удален.

Описание работы и существующие ограничения повторной инициализации узлов приведены в документе «Компонент jaDog. Управление режимом работы узлов кластера (часть 1)» 643.72410666.00067-08 98 02-01.

В кластере с каскадной репликацией для повторной инициализации узла Primary Slave с использованием существующей резервной копии необходимо выполнить (команды выполняются с главного узла):


```
cluster reinit node nodata 10.116.102.55 12345
```


После повторной инициализации подчиненного узла Primary Slave, необходимо дождаться завершения синхронизации каталога данных СУБД между ним и главным узлом кластера (Master). После успешного завершения процесса синхронизации, необходимо повторно подключить к узлу Primary Slave каскадные узлы Cascade Slave:


```
node 10.116.102.57 12345 set primary 10.116.102.55 12345

node 10.116.102.58 12345 set primary 10.116.102.55 12345
```


## ГЕОРАСПРЕДЕЛЕННЫЙ, ОТКАЗОУСТОЙЧИВЫЙ КЛАСТЕР. РЕШЕНИЕ JA_DTC_AS

ja_DTC_AS — это инженерное решение применения компонента «jaDog», позволяющее объединять узлы кластера в дата-центры.

Дата-центр — это логическая сущность, позволяющая сопоставить узлы кластера по подсетям в дата-центрах.

### Режимы работы геораспределенного отказоустойчивого кластера

#### Нормальный режим работы

При нормальном режиме работы кластера используется единственный публичный IP-адрес (Public IP), который зарезервирован и используется на основной площадке (DC1).

Главный узел (Master):

- принимает подключения от пользователей;

- записывает изменения в БД;

- реплицирует данные на узлы Slave;

- записывает WAL-архив на сетевой диск. Резервные узлы (Slave):

- при необходимости копируют WAL-архив с сетевого диска;

- принимают SQL-запросы на чтение данных.

#### Выход из строя главного узла в дата-центре DC1

В случае выхода из строя узла главного узла на первой площадке (DC1) ближайший узел на площадке примет на себя роль нового главного узла. В этом случае запустится

«Процедура обработки отказа (failover)», описанная в п.п 7.21 части первой «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01.

Время переходных операций равно 10 сек.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image61_.png)

Рисунок 6.1 – Схема выхода из строя узла Master на первой площадке (DC1)

В целом кластер не потеряет работоспособности, но потребует внимания администратора СУБД.

#### dc_failover. Аварийный режим № 1. Последовательный выход из строя главных узлов

В случае последовательного выхода из строя главного узла в сегменте кластера, расположенного в дата-центре «DC1», кластером будет обрабатываться режим смены дата-центров (dc_failover).

В режим «dc_failover» входят следующие шаги:

- определение нового главного узла с ролью «Master» в работоспособном сегменте кластера в дата-центре «DC2»;

- переход на главный узел с ролью «Master» на площадке «DC2» в течение 10 секунд;

- переход на резервный дата-центр «DC2», который становится основным.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image62_.png)

Рисунок 6.2 – Режим «dc_failover»

В режим «dc_failover» может выполняться как в ручном, так и в автоматическом режиме.

При установленном в конфигурационном файле jadog.yml параметре cluster_behavior:dc_autofailover_mode = true процедура обработки отказа выполнится в автоматическом режиме, т.е. автоматически выполнит вышеописанные действия.

:::info Дополнительная информация
Изменение параметра cluster_behavior:dc_autofailover_mode выполняется при помощи команды «parameter set» в консольной утилите jadog_ctl.
:::

При установленном параметре cluster_behavior:dc_autofailover_mode = false кластер перейдет в режим ожидания. В режиме ожидания кластер ожидает от администратора команды «datacenter promote», описанной в части первой «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01, которая служит подтверждением использования другой площадки (дата-центра). Команда может поступить с любого узла «jaDog».

#### DTC_Network_Failure. Аварийный режим № 2 Пропадание связи между дата-центрами

В случае пропадания связи между площадками (дата-центрами, ЦОД) основной сегмент кластера будет фиксировать отсутствие репликации с резервной площадкой и продолжит работу в нормальном режиме.

Резервный сегмент кластера перейдет в режим ожидания. В этом режиме будет ожидать восстановления связи между площадками и возобновления репликации или команды «datacenter promote», описанной в п. 7.11 части первой «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01, от администратора или Global Server Load Balancing (GLSB).

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image63_.png)

Рисунок 6.3 – Аварийный режим DTC_Network_Failure

#### DC_Promote. Смена роли DC

В штатном режиме перевода кластера GLSB или администратор:

- переводит весь трафик на резервную площадку «DC2»;

- DC_Health_Script понимает, что трафик перенаправлен в резервную площадку и дает команду «DC_Promote» jaDog на смену площадки;

- jaDog должен инициировать процесс «DC_Promote».

После назначения нового главного узла будет активирован Public IP в дата-центре «DC2» и все системы могут работать с СУБД.

Пример выполнения команды datacenter promote (DC_Promote) приведен в п. [6.1.7](#пример-выполнения-dc_promote) данного руководства.

#### Нештатный обратный DC_Promote

В ситуации, когда кластер переключается на резервную площадку «DC2» с основной площадки «DC1», он находится в промежуточном состоянии. Прерывание мероприятия недопустимо.

Если во время мероприятия по смене площадок (дата-центров, ЦОД) поступит обратная команда, то кластер приостановит ее выполнение. Это достигается механизмом асинхронного выполнения команд таких как:

- cluster add slave [ip] [port] (здесь и далее см. часть первую «Компонент jaDog.

Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01);

- cluster drop node;

- cluster switchover;

- datacenter promote (dcPromote).

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image64_.png)

Рисунок 6.4 – Нештатный обратный «DC_Promote»

Выполнение команды по смене площадок (дата-центров, ЦОД) начнется только после выполнения первой команды.

#### Пример выполнения «DC_Promote»

Работа кластера в разных подсетях, и соответственно в разных дата-центрах, требует подготовительных действий, т.к. конфигурационный файл правил аутентификации в СУБД «pg_hba.conf» не настраивается автоматически на разные подсети при конфигурировании узла кластера.

Схема первоначального состояния узлов кластера представлена на рисунке [6.5](#_bookmark51)

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image65_.png)

<span id="_bookmark51" class="anchor"></span>Рисунок 6.5 – Начальное состояние узлов кластера

В рассматриваемом примере узлы кластера имеют сетевую адресацию, представленную в таблице [6.1](#_bookmark52).

<span id="_bookmark52" class="anchor"></span>Таблица 6.1 – Сетевая адресация серверов стенда кластера «jaDog» для работы в дата-центре

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 14%" />
<col style="width: 19%" />
<col style="width: 17%" />
<col style="width: 18%" />
<col style="width: 12%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th>
<p><strong>Имя сервера</strong></p>
</th>
<th>
<p><strong>IP-адрес</strong></p>
</th>
<th>
<p><strong>Маска подсети</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Public IP</strong></p>
</th>
<th>
<p><strong>Роль/ состояние</strong></p>
</th>
<th>
<p><strong>Дата-центр</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p><strong>1</strong></p>
</td>
<td>
<p><strong>JDS</strong></p>
</td>
<td>
<p>10.116.102.40</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td colspan="6" style="text-align: center;">
<p><strong>Подсеть 102</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>2</strong></p>
</td>
<td>
<p><strong>Node1</strong></p>
</td>
<td>
<p>10.116.102.54/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Slave</p>
</td>
<td>
<p>dc1</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>3</strong></p>
</td>
<td>
<p><strong>Node2</strong></p>
</td>
<td>
<p>10.116.102.55/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Master</p>
</td>
<td>
<p>dc1</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>4</strong></p>
</td>
<td>
<p><strong>Node3</strong></p>
</td>
<td>
<p>10.116.102.57/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>5</strong></p>
</td>
<td>
<p><strong>Node4</strong></p>
</td>
<td>
<p>10.116.102.58/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td colspan="6" style="text-align: center;">
<p><strong>Подсеть 103</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>6</strong></p>
</td>
<td>
<p><strong>Node5</strong></p>
</td>
<td>
<p>10.116.103.57/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.103.82/24</p>
</td>
<td>
<p>Unknown</p>
</td>
<td>
<p>dc2</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 14%" />
<col style="width: 19%" />
<col style="width: 17%" />
<col style="width: 18%" />
<col style="width: 12%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Имя</strong></p>
<p><strong>сервера</strong></p>
</th>
<th>
<p><strong>IP-адрес</strong></p>
</th>
<th>
<p><strong>Маска</strong></p>
<p><strong>подсети</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Public IP</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Роль/</strong></p>
<p><strong>состояние</strong></p>
</th>
<th>
<p><strong>Дата-</strong></p>
<p><strong>центр</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p><strong>7</strong></p>
</td>
<td>
<p><strong>Node6</strong></p>
</td>
<td>
<p>10.116.103.58/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.103.82/24</p>
</td>
<td>
<p>Unknown</p>
</td>
<td>
<p>dc2</p>
</td>
</tr>
</tbody>
</table>

Дата-центры на этом этапе еще не сформированы.

Узел Node2 выполняет роль главного, а узел Node1 выполняет роль резервного, и оба сконфигурированы на Public IP 10.116.102.81/24.

Узлы Node5 и Node6 являются свободными и сконфигурированы на Public IP 10.116.103.82/24.

##### Подготовительные действия для создания кластера

На узле Node2 с ролью «Master» потребуется внести дополнительные параметры для подключения узлов из другой подсети, внеся следующие строки:


```
host	replication	jadog_user	10.116.102.0/24	scram-sha-256
host	replication	jadog_user	10.116.103.0/24	scram-sha-256
```



![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image627.png)

Рисунок 6.6 – Параметры конфигурационного файлы pg_hba.conf на узле «Master» 

Сохранить внесенные изменения.

Применение параметров целесообразнее выполнить не через перезагрузку служб, а через SQL-команду. Для чего от имени и с правами пользователя «postgres» войти в СУБД и выполнить SQL-команду:

```
SELECT pg_reload_conf();
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image628.png)

Рисунок 6.7 – Выполнение перезагрузки параметров СУБД

Далее можно переходить к конфигурированию кластера в дата-центрах в разделе

«Список кластеров» компонента JDS (см. документ «Компонент Jatoba Data Safe 2.10. Пользовательский веб-интерфейс для администраторов» 643.72410666.00067-08 98 01-07).

##### Добавление узлов в кластер из другой подсети. Меню «Узел» (Node)

Авторизовавшись на узле кластера с ролью «Master» необходимо добавить резервные узлы из другой подсети при помощи команд в консольной утилите «jadog_ctl»:


```
cluster add slave 10.116.103.57 12345
cluster add slave 10.116.103.58 12345
```


Промежуточное состояние стенда представлено в таблице [6.2](#_bookmark53).

<span id="_bookmark53" class="anchor"></span>Таблица 6.2 – Сетевая адресация серверов стенда кластера «jaDog» для работы в дата-центре

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 14%" />
<col style="width: 19%" />
<col style="width: 17%" />
<col style="width: 18%" />
<col style="width: 12%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Имя</strong></p>
<p><strong>сервера</strong></p>
</th>
<th>
<p><strong>IP-адрес</strong></p>
</th>
<th>
<p><strong>Маска</strong></p>
<p><strong>подсети</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Public IP</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Роль/</strong></p>
<p><strong>состояние</strong></p>
</th>
<th>
<p><strong>Дата-</strong></p>
<p><strong>центр</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p><strong>1</strong></p>
</td>
<td>
<p><strong>JDS</strong></p>
</td>
<td>
<p>10.116.102.40</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td colspan="6" style="text-align: center;">
<p><strong>Подсеть 102</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>2</strong></p>
</td>
<td>
<p><strong>Node1</strong></p>
</td>
<td>
<p>10.116.102.54/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Slave</p>
</td>
<td></td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>3</strong></p>
</td>
<td>
<p><strong>Node2</strong></p>
</td>
<td>
<p>10.116.102.55/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Master</p>
</td>
<td></td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>4</strong></p>
</td>
<td>
<p><strong>Node3</strong></p>
</td>
<td>
<p>10.116.102.57/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>5</strong></p>
</td>
<td>
<p><strong>Node4</strong></p>
</td>
<td>
<p>10.116.102.58/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td colspan="6" style="text-align: center;">
<p><strong>Подсеть 103</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>6</strong></p>
</td>
<td>
<p><strong>Node5</strong></p>
</td>
<td>
<p>10.116.103.57/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.103.82/24</p>
</td>
<td>
<p>Slave</p>
</td>
<td></td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>7</strong></p>
</td>
<td>
<p><strong>Node6</strong></p>
</td>
<td>
<p>10.116.103.58/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.103.82/24</p>
</td>
<td>
<p>Slave</p>
</td>
<td></td>
</tr>
</tbody>
</table>

##### Создание Дата-центров

Каждому из дата-центров требуется дать название. Для рассматриваемого примера создаются следующие дата-центры:

‒ «dc1»;

‒ «dc2».

Это соответствует команде в консольной утилите «jadog_ctl»:


```
datacenter create '[name]'
```


##### Присоединение узлов кластера к дата-центрам

К созданным дата-центрам присоединяются следующие узлы кластера:

‒ Node1 IP-10.116.102.54/24 и Node2 IP- 10.116.102.55/24 к «dc1»;

‒ Node5 IP-10.116.103.57/24 и Node6 IP-10.116.103.58/24 к «dc2».

Это соответствует команде в утилите «jadog_ctl»:


```
datacenter 'dc1' attach node 10.116.102.54 12345
datacenter 'dc1' attach node 10.116.102.55 12345
datacenter 'dc2' attach node 10.116.103.57 12345
datacenter 'dc2' attach node 10.116.103.58 12345
```


В результате узлы кластера распределены по дата-центрам. Узел в дата-центре «dc1» выполняет роль главного (Master), остальные узлы резервные (Slave).

В подсети «102» кластер работает с Public IP – 10.116.102.81/24. Второй публичный адрес 10.116.103.82/24 в подсети «103» не используется. Полученная конфигурация кластера представлена в таблице [6.3](#_bookmark54) и показана на рисунке [6.8](#_bookmark55).

<span id="_bookmark54" class="anchor"></span>Таблица 6.3 – Сетевая адресация серверов стенда кластера «jaDog», работающих в дата-центрах

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 14%" />
<col style="width: 19%" />
<col style="width: 17%" />
<col style="width: 18%" />
<col style="width: 12%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Имя</strong></p>
<p><strong>сервера</strong></p>
</th>
<th>
<p><strong>IP-адрес</strong></p>
</th>
<th>
<p><strong>Маска</strong></p>
<p><strong>подсети</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Public IP</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Роль/</strong></p>
<p><strong>состояние</strong></p>
</th>
<th>
<p><strong>Дата-</strong></p>
<p><strong>центр</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p><strong>1</strong></p>
</td>
<td>
<p><strong>JDS</strong></p>
</td>
<td>
<p>10.116.102.40</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td colspan="6" style="text-align: center;">
<p><strong>Подсеть 102</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>2</strong></p>
</td>
<td>
<p><strong>Node1</strong></p>
</td>
<td>
<p>10.116.102.54/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Slave</p>
</td>
<td>
<p>dc1</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>3</strong></p>
</td>
<td>
<p><strong>Node2</strong></p>
</td>
<td>
<p>10.116.102.55/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td>
<p>Master</p>
</td>
<td>
<p>dc1</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>4</strong></p>
</td>
<td>
<p><strong>Node3</strong></p>
</td>
<td>
<p>10.116.102.57/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>5</strong></p>
</td>
<td>
<p><strong>Node4</strong></p>
</td>
<td>
<p>10.116.102.58/24</p>
</td>
<td>
<p>255.255.255.0</p>
</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 14%" />
<col style="width: 19%" />
<col style="width: 17%" />
<col style="width: 18%" />
<col style="width: 12%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Имя</strong></p>
<p><strong>сервера</strong></p>
</th>
<th style="text-align: center;">
<p><strong>IP-адрес</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Маска</strong></p>
<p><strong>подсети</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Public IP</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Роль/</strong></p>
<p><strong>состояние</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дата-</strong></p>
<p><strong>центр</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td colspan="6" style="text-align: center;">
<p><strong>Подсеть 103</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>6</strong></p>
</td>
<td style="text-align: center;">
<p><strong>Node5</strong></p>
</td>
<td style="text-align: center;">
<p>10.116.103.57/24</p>
</td>
<td style="text-align: center;">
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.103.82/24</p>
</td>
<td style="text-align: center;">
<p>Slave</p>
</td>
<td style="text-align: center;">
<p>dc2</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>7</strong></p>
</td>
<td style="text-align: center;">
<p><strong>Node6</strong></p>
</td>
<td style="text-align: center;">
<p>10.116.103.58/24</p>
</td>
<td style="text-align: center;">
<p>255.255.255.0</p>
</td>
<td style="text-align: center;">
<p>10.116.103.82/24</p>
</td>
<td style="text-align: center;">
<p>Slave</p>
</td>
<td style="text-align: center;">
<p>dc2</p>
</td>
</tr>
</tbody>
</table>

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image68_.png)

<span id="_bookmark55" class="anchor"></span>Рисунок 6.8 – Схема кластера в дата-центрах

##### Выполнение «DC Promote»

Data Centre Promote (англ.) означает продвижение центра обработки данных (дата-центра) до уровня ведущего. Функциональная возможность «DC Promote» состоит в том, что «ведущий» дата-центр, в котором был узел кластера с ролью «Master», сменит свою роль на «ведомого». А резервный, «ведомый» дата-центр, принудительно продвинется до роли «ведущего» и в его подсети выбранный узел кластера возьмет на себя роль «Master».

Функциональная возможность «DC Promote» может использоваться при:

‒ аварийных ситуациях;

‒ плановых переключениях.

Выполнить «DC Promote» возможно подключившись к узлу, который должен быть главным (Master). В данном случае это узел кластера Node5 c IP-10.116.103.57 находящийся в «dc2».

После подтверждения действия начнется процесс принудительного продвижения дата-центра «dc2». Узел кластера Node5 возьмет на себя роль главного и автоматически активируется Public IP-10.116.103.82/24.

Схема репликации кластера изменится на представленную на рисунке [6.9](#_bookmark56).

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image69_.png)

<span id="_bookmark56" class="anchor"></span>Рисунок 6.9 – Схема дата-центров кластера после выполнения «DC Promote»

## ПЕРЕНАПРАВЛЕНИЕ ПОДКЛЮЧЕНИЙ МЕЖДУ ДАТА-ЦЕНТРАМИ

Концепция перенаправления подключений состоит в том, что компонент балансировки подключений пользователей к СУБД «jaPooler» установлен в устойчивой подсети, принимает подключения от приложения (пользователей) и, опрашивая Public_IP, направляет запрос в тот узел кластера, в тот дата-центр, который откликается на запрос. В описываемой конфигурации компонент «jaPooler» работает в отдельном «прокси» режиме.

Принципиальная схема сети и взаимодействия компонентов СУБД «Jatoba» в ней, представлена на рисунке [7.1](#_bookmark58).

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image71_.png)

<span id="_bookmark58" class="anchor"></span>Рисунок 7.1 – Принципиальная схема взаимодействия компонент СУБД 

На указанной схеме 4 основных блока:

1)  Клиентское приложение, которое настраивается на подключение к СУБД с установленным компонентом «jaPooler».

2)  Сервер СУБД «Jatoba» с установленным компонентом «jaPooler», который параллельно выполняет роль файлового сервера с архивом WAL.

3)  Узлы кластера в основной подсети и в первом дата-центре.

4)  Узлы кластера в резервной подсети и во втором дата-центре.

Узлы кластера настраиваются по классической схеме асинхронной репликацией, как описано в разделе 6 части первой «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01. Дополнительно может быть настроено архивирование WAL в сетевой каталог.

В рассматриваемом примере установки и конфигурирования отказоустойчивого кластера «jaDog» на ОС Ubuntu 22.04 используются параметры сети кластера, приведенные в таблице [7.1](#_bookmark59).

<span id="_bookmark59" class="anchor"></span>Таблица 7.1 – Конфигурация сети кластера при перенаправлении подключений

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 10%" />
<col style="width: 18%" />
<col style="width: 15%" />
<col style="width: 18%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Имя сервера</strong></p>
</th>
<th style="text-align: center;">
<p><strong>IP-адрес</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Маска подсети</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Public IP</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Роль</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Имя кластера</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дата-центр</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="8" style="text-align: center;">
<p><strong>Подсеть 102</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>1</p>
</td>
<td style="text-align: center;">
<p>Node1</p>
</td>
<td style="text-align: center;">
<p>10.116.102.54/24</p>
</td>
<td style="text-align: center;">255.255.255.0</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td style="text-align: center;">
<p>Master</p>
</td>
<td rowspan="2" style="text-align: center;">
<p>test</p>
</td>
<td style="text-align: center;">
<p>dc1</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>2</p>
</td>
<td style="text-align: center;">
<p>Node2</p>
</td>
<td style="text-align: center;">
<p>10.116.102.55/24</p>
</td>
<td style="text-align: center;">255.255.255.0</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td style="text-align: center;">
<p>Slave</p>
</td>
<td style="text-align: center;">
<p>dc1</p>
</td>
</tr>
<tr>
<td colspan="8" style="text-align: center;">
<p><strong>Подсеть 102</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>3</p>
</td>
<td style="text-align: center;">
<p>Shared-node</p>
</td>
<td style="text-align: center;">
<p>10.116.102.56/24</p>
</td>
<td style="text-align: center;">255.255.255.0</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>File-server,</p>
<p>Balancer</p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="8" style="text-align: center;">
<p><strong>Подсеть 103</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>4</p>
</td>
<td style="text-align: center;">
<p>Node6</p>
</td>
<td style="text-align: center;">
<p>10.116.103.57/24</p>
</td>
<td style="text-align: center;">255.255.255.0</td>
<td style="text-align: center;">
<p>10.116.103.82/24</p>
</td>
<td style="text-align: center;">
<p>Slave</p>
</td>
<td rowspan="2" style="text-align: center;">
<p>test</p>
</td>
<td style="text-align: center;">
<p>dc2</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>5</p>
</td>
<td style="text-align: center;">
<p>Node7</p>
</td>
<td style="text-align: center;">
<p>10.116.103.58/24</p>
</td>
<td style="text-align: center;">255.255.255.0</td>
<td style="text-align: center;">
<p>10.116.103.82/24</p>
</td>
<td style="text-align: center;">
<p>Slave</p>
</td>
<td style="text-align: center;">
<p>dc2</p>
</td>
</tr>
</tbody>
</table>

Использование компонента «jaPooler» для перенаправления подключений между дата-центрами дополняет инженерное решение, описанное в разделе [6](#геораспределенный-отказоустойчивый-кластер.) настоящего руководства.

### Настройка и запуск компонента «jaDog» на резервных узлах

Резервные узлы Node2, Node6 и Node7 настраиваются с параметрами, приведенными в таблице [7.2](#_bookmark61) и в разделе [6](#геораспределенный-отказоустойчивый-кластер.) настоящего руководства.

Устанавливаемые параметры кластера, приведены в таблице [7.2](#_bookmark61).

Таблица 7.2 – Перечень устанавливаемых параметров для каскадной репликации

<table style="width:100%;">
<colgroup>
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 31%" />
<col style="width: 16%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node1</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node2</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node7</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p><strong>1</strong></p>
</td>
<td colspan="7">
<p><strong>Database server and jadog directory settings Menu</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Database server binaries (path:db_bin_path)</p>
</td>
<td>
<p>[/usr/jatoba-&lt;ver&gt;/bin]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Database server data (postgresql:db_data_path)</p>
</td>
<td>
<p>[/var/lib/jatoba/&lt;ver&gt;/data]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Jadog configs (path:config_path)</p>
</td>
<td>
<p>[/usr/jatoba-</p>
<p>&lt;ver&gt;/etc/jadog]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Jadog module files (path:module_path)</p>
</td>
<td>
<p>[/usr/jatoba-</p>
<p>&lt;ver&gt;/share/jadog/scripts]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Jadog state (path:state_path)</p>
</td>
<td>
<p>[/usr/jatoba-</p>
<p>&lt;ver&gt;/etc/jadog]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>2</strong></p>
</td>
<td colspan="7">
<p><strong>Inter-jadog communication settings</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Jadog service name (main:service_name)</p>
</td>
<td>
<p>[jadog]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Jadog IP address (main:ip)</p>
</td>
<td>
<p>Текущий IP</p>
<p>(10.116.102.54/24)</p>
</td>
<td style="text-align: center;">
<p>10.116.102.54/24</p>
</td>
<td style="text-align: center;">
<p>10.116.102.55/24</p>
</td>
<td style="text-align: center;">
<p>10.116.103.57/24</p>
</td>
<td style="text-align: center;">
<p>10.116.103.58/24</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Jadog PORT number (main:port)</p>
</td>
<td>
<p>[12345]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>SSL on (tls:tls)</p>
</td>
<td>
<p>[false]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Jadog interconnection user (main:interconnect_user)</p>
</td>
<td>
<p>[admin]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>3</strong></p>
</td>
<td colspan="7">
<p><strong>User / Admin access network settings</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Public address (main:public_address)</p>
</td>
<td>
<p>Внешний IP адрес</p>
<p>(10.116.102.81/24)</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td style="text-align: center;">
<p>10.116.102.81/24</p>
</td>
<td style="text-align: center;">
<p>10.116.103.82/24</p>
</td>
<td style="text-align: center;">
<p>10.116.103.82/24</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Public address control interval</p>
<p>(main:public_address_control_interval)</p>
</td>
<td>
<p>[5000]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Public address control attempts</p>
<p>(main:public_address_control_attempts)</p>
</td>
<td>
<p>[3]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>DB monitor timeout (postgresql:db_check_interval)</p>
</td>
<td>
<p>[5000]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Trusted IP address (main:trusted_address)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 31%" />
<col style="width: 16%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;"></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node1</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node2</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node7</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>RDBMS trusted ip</p>
<p>(ja_hipe_cluster:rdbms_trusted_ip)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>RDBMS trusted port</p>
<p>(ja_hipe_cluster:rdbms_trusted_port)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>Network interface name (main:network_interface)</p>
</td>
<td>
<p>Имя сетевого</p>
<p>интерфейса (ens18)</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>Jadog TCP port (main:user_interface_port)</p>
</td>
<td>
<p>[54321]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>4</strong></p>
</td>
<td colspan="7" style="text-align: center;">
<p><strong>Administrator account list</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Add new account to the list</p>
</td>
<td>
<p>admin</p>
</td>
<td style="text-align: center;">
<p>admin</p>
</td>
<td style="text-align: center;">
<p>admin</p>
</td>
<td style="text-align: center;">
<p>admin</p>
</td>
<td style="text-align: center;">
<p>admin</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Delete account from the list</p>
</td>
<td></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Clear all accounts</p>
</td>
<td></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>5</strong></p>
</td>
<td colspan="7" style="text-align: center;">
<p><strong>Database server system account and connection settings</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Database host (db_connection_settings:db_host)</p>
</td>
<td>
<p>[127.0.0.1]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Database port (db_connection_settings:db_port)</p>
</td>
<td>
<p>[5432]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Database service name</p>
<p>(db_connection_settings:db_service_name)</p>
</td>
<td>
<p>[jatoba-6]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Database name (db_connection_settings:db_name)</p>
</td>
<td>
<p>[postgres]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Jadog password file</p>
<p>(db_connection_settings:db_passfile)</p>
</td>
<td>
<p>/usr/jatoba-</p>
<p>&lt;ver&gt;/bin/db_passfile</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>Database auth method</p>
<p>(db_connection_settings:db_auth_method)</p>
</td>
<td>
<p>[password]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>Jadog to database CA file</p>
<p>(db_connection_settings:jadog_to_db_ca_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>Jadog to database CRL file</p>
<p>(db_connection_settings:jadog_to_db_crl_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>Jadog to database cert file</p>
<p>(db_connection_settings:jadog_to_db_cert_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>10</p>
</td>
<td>
<p>Jadog to database key file</p>
<p>(db_connection_settings:jadog_to_db_key_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
<td style="text-align: center;">
<p>[]</p>
</td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 31%" />
<col style="width: 16%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;"></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node1</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node2</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node7</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td style="text-align: center;">
<p>11</p>
</td>
<td>
<p>Jadog to database SSL mode</p>
<p>(db_connection_settings:ssl_mode)</p>
</td>
<td>
<p>[very-full]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>12</p>
</td>
<td>
<p>Jadog database user name</p>
<p>(db_connection_settings:db_jadog_user)</p>
</td>
<td>
<p>[jadog_user]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>13</p>
</td>
<td>
<p>Jadog database user password (db_jadog_user_pass)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>14</p>
</td>
<td>
<p>Database server OS user (system:system_user)</p>
</td>
<td>
<p>[postgres]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>15</p>
</td>
<td>
<p>Replication slot name (replication:slot_name)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>node1</p>
</td>
<td style="text-align: center;">
<p>node2</p>
</td>
<td style="text-align: center;">
<p>node6</p>
</td>
<td style="text-align: center;">
<p>node7</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>16</p>
</td>
<td>
<p>Replication Slot TTL (replication:slot_ttl)</p>
</td>
<td>
<p>[300000]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>6</strong></p>
</td>
<td colspan="7" style="text-align: center;">
<p><strong>«Failover setting»</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Auto failover mode [true/false]</p>
<p>(cluster_behavior:autofailover_mode)</p>
</td>
<td>
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Auto dc promote mode [true/false]</p>
<p>(cluster_behavior:dc_autofailover_mode)</p>
</td>
<td>
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
<td style="text-align: center;">
<p>[true]</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>7</strong></p>
</td>
<td colspan="7" style="text-align: center;">
<p><strong>«Replication setting»</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Replication node name (replication:slot_name)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>node1</p>
</td>
<td style="text-align: center;">
<p>node2</p>
</td>
<td style="text-align: center;">
<p>node6</p>
</td>
<td style="text-align: center;">
<p>node7</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Synchronous commit setting</p>
<p>(synchronous:synchronous_commit)</p>
</td>
<td>
<p>remote_apply</p>
</td>
<td style="text-align: center;">
<p>remote_apply</p>
</td>
<td style="text-align: center;">
<p>remote_apply</p>
</td>
<td style="text-align: center;">
<p>remote_apply</p>
</td>
<td style="text-align: center;">
<p>remote_apply</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Synchronous type (synchronous:synchronous_type)</p>
</td>
<td>
<p>ANY</p>
</td>
<td style="text-align: center;">
<p>ANY</p>
</td>
<td style="text-align: center;">
<p>ANY</p>
</td>
<td style="text-align: center;">
<p>ANY</p>
</td>
<td style="text-align: center;">
<p>ANY</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>The number of synchronous standbys</p>
<p>(synchronous:synchronous_commit_max_nodes)</p>
</td>
<td>
<p>4</p>
</td>
<td style="text-align: center;">
<p>4</p>
</td>
<td style="text-align: center;">
<p>4</p>
</td>
<td style="text-align: center;">
<p>4</p>
</td>
<td style="text-align: center;">
<p>4</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>The wal_level value (postgresql:wal_level)</p>
</td>
<td>
<p>[replica]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>List of ignored replication slots</p>
<p>(replication:ignore_replication_slots)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>8</strong></p>
</td>
<td colspan="7" style="text-align: center;">
<p><strong>WAL archive and restore settings</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>System directory for WAL archive/restore</p>
<p>(wal_archive:directory)</p>
</td>
<td>
<p>[/nfs/arhive_wal]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>WAL archive copy command</p>
<p>(wal_archive:command)</p>
</td>
<td>
<p>[cp %p</p>
<p>/nfs/arhive_wal/%f]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>WAL archive restore command</p>
<p>(wal_restore:command)</p>
</td>
<td>
<p>[cp /nfs/arhive_wal/%f</p>
<p>%p]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 31%" />
<col style="width: 16%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;"></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node1</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node2</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node7</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>WAL archive cleanup process on</p>
<p>(wal_archive:cleanup_needed)</p>
</td>
<td>
<p>[false]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>WAL archive cleanup command (wal_archive:cleanup_command)</p>
</td>
<td>
<p>[/usr/jatoba-</p>
<p>&lt;ver&gt;/bin/pg_archiveclean up /nfs/arhive_wal %s]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>WAL archive cleanup timeout</p>
<p>(wal_archive:cleanup_timeout)</p>
</td>
<td>
<p>[30000]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>9</strong></p>
</td>
<td colspan="7" style="text-align: center;">
<p><strong>Reporting and logging</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Log directory (log:path)</p>
</td>
<td>
<p>[/usr/jatoba-</p>
<p>6/var/log/jadog]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Log filename (log:file_name)</p>
</td>
<td>
<p>[jadog-%Y-%m-</p>
<p>%d_%H%M%S]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Log file mode (log:mode)</p>
</td>
<td>
<p>[0600]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Log format (log:type)</p>
</td>
<td>
<p>[json]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Max log file usage duration (log:rotation_age)</p>
</td>
<td>
<p>[1d]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>Max log file size (log:rotation_size)</p>
</td>
<td>
<p>[10MB]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>Truncate, not append, logs (log:truncate_on_rotation)</p>
</td>
<td>
<p>[false]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>Log verbosity (log:level)</p>
</td>
<td>
<p>[info]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>Security log directory (security_log:path)</p>
</td>
<td>
<p>[/usr/jatoba-</p>
<p>&lt;ver&gt;/var/log/jadog].</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>10</p>
</td>
<td>
<p>Security log filename (security_log:file_name)</p>
</td>
<td>
<p>[security_jadog-%Y-%m-</p>
<p>%d_%H%M%S]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>11</p>
</td>
<td>
<p>Security log file mode (security_log:file_mode)</p>
</td>
<td>
<p>[0600]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>12</p>
</td>
<td>
<p>Security log format (security_log:type)</p>
</td>
<td>
<p>[json]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>13</p>
</td>
<td>
<p>Max security log file usage duration</p>
<p>(security_log:rotation_age)</p>
</td>
<td>
<p>[1d]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>14</p>
</td>
<td>
<p>Max security log file size (security_log:rotation_size)</p>
</td>
<td>
<p>[10MB]</p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>15</p>
</td>
<td>
<p>Truncate, not append, security logs</p>
<p>(security_log:truncate_on_rotation)</p>
</td>
<td>
<p>[false]</p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>16</p>
</td>
<td>
<p>Allow to write into file (log:file)</p>
</td>
<td>
<p>[true]</p>
</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 31%" />
<col style="width: 16%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;"></th>
<th>
<p><strong>Меню/Пункт меню</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node1</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node2</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Node7</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td style="text-align: center;">
<p>17</p>
</td>
<td>
<p>Allow to write into stdout (log:screen)</p>
</td>
<td>
<p>[false]</p>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>10</strong></p>
</td>
<td colspan="7" style="text-align: center;">
<p><strong>REST API Settings</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>REST API use (rest_api:api_use)</p>
</td>
<td>
<p>[false]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>REST API listen address (rest_api:listen_address)</p>
</td>
<td>
<p>[0.0.0.0]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>REST API listen port (rest_api:listen_port)</p>
</td>
<td>
<p>[54443]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>REST API TLS server certificate (rest_api:cert_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>REST API TLS server private key (rest_api:key_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>REST API TLS CA certificate (rest_api:ca_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>REST API TLS server revocation list</p>
<p>(rest_api:crl_file)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>11</strong></p>
</td>
<td colspan="7" style="text-align: center;">
<p><strong>Recovery settings</strong></p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Allow backup if dir exist (after_rewind_fail_backup:after_rewind_fail_backup</p>
<p>_allow)</p>
</td>
<td>
<p>[true]</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
<td>
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Time delay (ms) of the cluster response</p>
<p>(recovery:cluster_timeout)</p>
</td>
<td>
<p>[3000000]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td></td>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>backup script file (backup:script_backup)</p>
</td>
<td>
<p>[]</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
<td style="text-align: center;">
<p>═</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>12</strong></p>
</td>
<td colspan="7" style="text-align: center;">
<p><strong>Reset all settings to the default values</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>13</strong></p>
</td>
<td colspan="7" style="text-align: center;">
<p><strong>Check and show all settings</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>14</strong></p>
</td>
<td colspan="7" style="text-align: center;">
<p><strong>Save settings and setup jadog</strong></p>
</td>
</tr>
</tbody>
</table>

### Установка и настройка компонента «jaPooler»

Компонент «jaPooler» для перенаправления подключений используется как утилита со своей службой в ОС.

Установка и настройка компонента «jaPooler» полностью описана в документе «Руководство по настройке. Часть 15. Балансировка подключений пользователей к СУБД. Компонент «jaPooler».

### Конфигурирование компонента «jaPooler»

Основные настройки компонента «jaPooler» проводятся в файле /usr/jatoba-<ver>/etc/pgbouncer.ini. Неактивные параметры маркируются символами «;» «#» в начале строки.

В конфигурационном файле указываются публичные IP – адреса (Public IP) сегментов кластера, распределенных по дата-центрам. Строка имеет синтаксис:


```
postgres = host=<public ip node1>,<public ip node2> port=5432 host_balancer=off strategy=always_rw auth_user=postgres
```


В рассматриваемом примере строка в конфигурационном файле pgbouncer.ini будет иметь вид:


```
postgres = host=10.116.102.81,10.116.103.82 port=5432 host_balancer=off strategy=always_rw auth_user=postgres
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image72_.png)

Рисунок 7.2 – Строка переподключений по Public IP

Публичные IP – адреса (Public IP) используются для отправки запросов от клиентских приложений к сегментам кластера. В случае выхода из строя основного дата-центра, запросы перенаправляются на Public IP резервного дата-центра.

В строке указывается стратегия балансировки «strategy=always_rw». В таком режиме все запросы на чтение и на запись отправляются на узел с ролью Master.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image73_.png)

Рисунок 7.3 – Схема работы при установленной стратегии «always_rw» Активировать строку запроса для извлечения пароля пользователя из базы данных:


```
auth_query = SELECT usename, passwd FROM pg_shadow WHERE usename=$1
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image74_.png)

Рисунок 7.4 – Строка запроса для извлечения пароля пользователя из БД 

Активировать строку с указанием базы данных для аутентификации:


```
auth_dbname = postgres
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image75_.png)

Рисунок 7.5 – Строка с указанием БД для аутентификации

На данном шаге настройка конфигурационного файла закончена. В конфигурационном файле компонента jaPooler /usr/jatoba-<ver>/etc/userlist.txt указываются пользователи, имеющие право доступа к СУБД в дата-центрах.

В строке указывается:

- имя пользователя;

- метод аутентификации слитно с хешем пароля по 128-битному алгоритму хеширования MD5.

Хеш пароля вычисляется в специализированном калькуляторе. И в строке кодировки потребуется указать пароль и имя пользователя.



Рисунок 7.6 – Калькулятор хеша паролей 

В представленном примере строка имеет следующий вид:


```
"postgres" "md5067ac55252970a27e3158d918448c59c"
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image77_.png)

Рисунок 7.7 – Строка пароля пользователя

### Запуск сервиса компонента

Постоянная работа компонента обеспечивается установкой и загрузкой службы в автозагрузку ОС.

Установка и загрузка службы в автозагрузку ОС выполняется в терминале от имени и с правами привилегированного пользователя командами:


```
systemctl start pgbouncer 
systemctl status pgbouncer 
systemctl enable pgbouncer
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image750.png)


Рисунок 7.8 – Запуск службы компонента

На данном этапе настройка геораспределенного, отказоустойчивого кластера (решение JA_DTC_AS) закончена.

Схема переадресации запросов при отказе одного из дата-центров представлена на рисунке [7.9](#_bookmark65).

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image79_.png)

<span id="_bookmark65" class="anchor"></span>Рисунок 7.9 – Схема переадресации запросов при отказе одного из дата-центров

## ПРИМЕНЕНИЕ REST API

Компонент «jaDog» предоставляет программный интерфейс REST API для получения информации о состоянии кластера узлов, а также для управления этими узлами.

С целью документирования функционала интерфейса REST API компонента «jaDog» в каталоге /usr/jatoba-6/share/docs размещается файл api.yml. В данном файле перечислены все реализуемые методы для взаимодействия компонента «jaDog» с внешними информационными системами.

Перечень методов REST API, их назначение, а также соответствие им команд консольной утилиты «jadog_ctl» перечислены в таблице [8.2](#_bookmark82).

### Настройка функционала REST API

Включение функционала REST API в компоненте «jaDog» возможно осуществить при помощи одного из способов:

- редактирование файла «jadog.yml»;

- настройка параметров через использование консольной утилиты «jadog» с параметром setup;

- использование файла ответов при автоматизированной настройке компонентов и узлов кластера.

#### Настройка параметров REST API через консольную утилиты «jadog»

Подробная настройка параметров управления REST API приводится в первой части документа «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-02 в подразделе 6.7.10. Пункт меню 10 «REST API Settings».

#### Настройка параметров REST API в файле ответов

Настройка параметров REST API в файле ответов необходима при выполнении автоматизированной настройки компонентов и узлов кластера.

Для активации и определения параметров REST API в файле ответов необходимо добавить в секцию default_node_params следующий раздел:


```
rest_api:
    api_use: true
    cert_file: /var/lib/jatoba/ssl_jadog/jadog_user.crt
    key_file: /var/lib/jatoba/ssl_jadog/jadog_user.key 
    ca_file: /var/lib/jatoba/ssl_jadog/root.crt 
    listen_address: 10.116.102.54/24
    listen_port: 54443
```


Здесь <dir> - полный путь к каталогу с сертификатами SSL, 10.116.102.54/24 – пример IP-адреса, на котором будут приниматься подключения.

### Проверка функционала REST API

Для того чтобы внесенные в файл конфигурации «jadog.yml» изменения вступили в силу необходимо перезагрузить сервис компонента «jaDog» при помощи команды:


```
systemctl restart jadog
```


После перезагрузки сервиса «jadog» компонента «jaDog» необходимо проверить работоспособность REST API.

Для этого в консоли выполняется команда вывода сетевой статистики:


```
netstat -ln
```


В результате выполнения команды отобразится таблица:


```
Active Internet connections (only servers)

Proto   Recv-Q  Send-Q  Local Address           Foreign Address     State

tcp          0      0   10.116.102.54:54443     0.0.0.0:\*          LISTEN
```


Где «10.116.102.54:54443» - IP-адрес и сетевой порт, на котором будут приниматься соединения по REST API.

#### Проверка обработки запросов к REST API

После чего можно проверить обработку запросов к REST API через утилиту curl при помощи команды:


```
curl -X GET --cacert /var/lib/jatoba/ssl_jadog/root.crt --cert /var/lib/jatoba/ssl_jadog/jadog_service.crt --key /var/lib/jatoba/ssl_jadog/jadog_service.key -k https://host_name(ip):54443/cluster/[cluster_name]
```


В результате выполнения команды в терминале будет отображена информация о составе и состоянии кластера, и входящих в него узлов, аналогично выполнению команды «cluster».

После этого настройку сервера REST API в компоненте «jaDog» можно считать завершенной.

#### Получение значения параметров через REST API

Значение параметра кластера можно получить при помощи запроса с следующим синтаксисом:


```
curl -X GET --cacert /var/lib/jatoba/ssl_jadog/root.crt --cert /var/lib/jatoba/ssl_jadog/jadog_service.crt --key /var/lib/jatoba/ssl_jadog/jadog_service.key -k https://host_name(ip):54443/cluster/[cluster_name]/parameters?p arameters=[param_group]:[param_name]
```


**Пример:**


```
curl -X GET --cacert /var/lib/jatoba/ssl_jadog/root.crt --cert /var/lib/jatoba/ssl_jadog/jadog_service.crt --key /var/lib/jatoba/ssl_jadog/jadog_service.key -k <https://10.116.102.54:54443/cluster/cluster2/parameters?paramet> ers= replication:slot_name
```


Результат запроса параметра replication:slot_name через REST API будет возвращен в виде сообщения:


```
{"err_code":0,"id":826,"jadog_version":"4.2.0-5432","message":"{\"action\":\"show parameters\",\"params\":[{\"name\":\"replication:slot_name\",\" value\":\"rs_node11\"}]}","result_state_id":101,"state":"true"}
```


#### Коды возврата состояния REST API

Коды состояний REST API предназначены для стандартизированного информирования клиентских систем (ИС) о результате выполнения запросов к компоненту jaDog.

Коды состояний REST API обеспечивает однозначную интерпретацию исхода выполнения команд компонента «jaDog».

При отправке запросов через REST API на выполнение команд возвращаются стандартные коды состояния, указанные в таблице [8.1](#_bookmark74).

<span id="_bookmark74" class="anchor"></span>Таблица 8.1– Коды состояний REST API компонента «jaDog»

<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Код состояния REST API</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>200</p>
</td>
<td style="text-align: left;">
<p>OK – запрос компонента выполнен успешно. Код «200» возвращается только в том случае, если операция выполнена полностью, без каких-либо отклонений от ожидаемого результата.</p>
<p>Все требуемые действия завершены, состояние системы соответствует описанному в спецификации API для данной операции</p>
</td>
</tr>
<tr>
<td>
<p>201</p>
</td>
<td style="text-align: left;">
<p>Created – в результате успешного выполнения запроса был создан пользователь, задача планировщика, узел, дата-центр или кластер.</p>
<p>Код «201» возвращается только в том случае, если операция выполнена полностью, без каких-либо отклонений от ожидаемого результата</p>
</td>
</tr>
<tr>
<td>
<p>202</p>
</td>
<td style="text-align: left;">
<p>Accepted – запрос к компоненту принят на обработку.</p>
</td>
</tr>
<tr>
<td>
<p>500</p>
</td>
<td style="text-align: left;">
<p>Internal Server Error – запрос компонента выполнен с ошибками (неверные значения параметров).</p>
<p>Код «500» возвращается в ситуациях, когда выполнение операции было прервано из-за исключительной ситуации, сбоя в логике работы компонента «jaDog», невозможности доступа к необходимым</p>
<p>внутренним ресурсам или иной непредусмотренной ошибки на стороне сервера</p>
</td>
</tr>
</tbody>
</table>

#### Результат выполнения запросов к REST API

При выполнении запроса атрибутов через REST API компонент может содержать следующую информацию:

- err_code – логический статус выполненного запроса (0, 1);

- id – идентификатор запроса;

- jadog_version – версия компонента «jaDog»;

- message – текст сообщения, содержит результат выполнения запроса;

- protocol_version – версия протокола компонента «jaDog»;

- result_state_id – идентификатор результата запроса;

- state – статус;

- non_changed_params – флаг измененного/неизмененного параметра.

### Функционал обработки и выполнения команд в утилите «jadog_ctl»

Команды, приведенные в данном подразделе, используются для автоматизации вывода результатов выполнения команд в утилите «jadog_ctl».

#### Настройка асинхронной обработки команд

Настройка асинхронной обработки команд выполняется командой:

```
api set async
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image768.png)



Рисунок 8.1 – Вывод результата выполнения команды «api set async»

Применение команды описано в п. [6.1.6](#нештатный-обратный-dc_promote) «Нештатный обратный DC_Promote» второй части документа «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-02 и применяется на узле кластера с ролью «Master».

### Настройка синхронной обработки команд

Настройка синхронной обработки команд выполняется командой:

```
api set sync
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image769.jpeg)



Рисунок 8.2 – Вывод результата выполнения команды «api set sync»

#### Результат последней выполненной команды

Команда «api response» выдает результат последней выполненной команды, исключая команды статуса:


```
api response
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image770.jpeg)

Рисунок 8.3 – Вывод результата выполнения последней команды

Команда применяется для вывода результатов команд, описанных в пунктах документа «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01:

- «Создание кластера (cluster create '[cluster_name]')»;

- «Добавление узла кластера в качестве главного (cluster add master [ip] [port])»;

- «Удаление узла кластера (cluster drop node [ip] [port])»;

- «Принудительная смена ролей серверов (cluster switchover [ip] [port])»;

- «Принудительное переключение на текущий дата-центр (datacenter promote)».

#### Результат выполнения команды по идентификатору

В консольном и терминальном режиме возможно вывести результат выполнения команды по ее идентификатору (id).

Команда имеет синтаксис:


```
api response [id]
```


**Например**

Аутентифицируемся в утилите «jadog_ctl».

Утилита «jadog_ctl» выведет идентификатор операции, например id = 0. Используя значения id = 0 в команде:


```
api response 13
```


будет выведен результат указанной команды без ее выполнения.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image771.jpeg)

Рисунок 8.4 – Получение результата выполнения команды

### Перечень REST API команд и соответствие аналогам утилиты «jadog_ctl»

<span id="_bookmark82" class="anchor"></span>Таблица 8.2 – Описание соответствия REST API команд с аналогами утилиты «jadog_ctl»

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="5">
<p><strong>Команды для работы с параметрами компонента «jaDog»</strong></p>
</td>
</tr>
<tr>
<td>
<p>\protocol</p>
</td>
<td>
<p>Получение</p>
<p>информации о версии компонента «jaDog»</p>
</td>
<td>
<p>GET</p>
</td>
<td>
<p>Отсутствуют</p>
</td>
<td>
<p>/version</p>
</td>
</tr>
<tr>
<td>
<p>Отсутствует</p>
</td>
<td>
<p>Получение списка параметров кластера</p>
</td>
<td>
<p>GET</p>
</td>
<td>
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td>
<p>/cluster/{cluster_name}/parameter s</p>
</td>
</tr>
<tr>
<td>
<p>parameter '[parameter_name</p>
<p>]'</p>
</td>
<td>
<p>Получение значения параметра</p>
</td>
<td>
<p>GET</p>
</td>
<td>
<p>{ "cluster_name": "", "param:name": ""</p>
<p>}</p>
</td>
<td>
<p>/cluster/{cluster_name}/parameter s?parameters=["param:name"]</p>
</td>
</tr>
<tr>
<td>
<p>parameter set list</p>
</td>
<td>
<p>Изменение набора параметров узла кластера</p>
</td>
<td>
<p>PATCH</p>
</td>
<td>
<p>{ "parameters": [</p>
<p>{"param1":</p>
<p>"value1"},</p>
<p>{"param2": "value2"}</p>
<p>] }</p>
</td>
<td>
<p>/cluster/{cluster_name}/set/param eters</p>
</td>
</tr>
<tr>
<td colspan="5">
<p><strong>Команды для работы с группой кластеров (bundle)</strong></p>
</td>
</tr>
<tr>
<td>
<p>bundle create ['bundle_name']</p>
</td>
<td>
<p>Создание новой группы кластеров</p>
</td>
<td>
<p>PUT</p>
</td>
<td>
<p>{ "bundle_name": ""</p>
<p>}</p>
</td>
<td>
<p>/bundle?bundle_name=</p>
<p>{bundle_name}</p>
</td>
</tr>
<tr>
<td>
<p>bundle drop ['bundle_name']</p>
</td>
<td>
<p>Удаление существующей</p>
<p>группы кластеров</p>
</td>
<td>
<p>DELETE</p>
</td>
<td>
<p>{ "bundle_name": ""</p>
<p>}</p>
</td>
<td>
<p>/bundle/{bundle_name}</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>bundle attach cluster [ip] [port]</p>
</td>
<td rowspan="3">
<p>Присоединение к</p>
<p>группе кластеров существующего кластера по его IP-адресу, сетевому порту</p>
</td>
<td rowspan="3">
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "bundle_name": "", "ip": "", "port": ""</p>
<p>}</p>
</td>
<td rowspan="3">
<p>/bundle/{bundle_name}/cluster/{ip</p>
<p>}/{port}/interconnect_user/{inter connect_user}</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>bundle attach cluster {ip}</p>
<p>{port} [interconnect_us er]</p>
</td>
<td rowspan="2">
<p>Присоединение к группе кластеров существующего кластера по его IP-адресу, сетевому порту и технологической записи</p>
<p>администратора</p>
</td>
<td rowspan="2">
<p>POST</p>
</td>
<td>
<p>{ "bundle_name": "",</p>
<p>"ip": "", "port": "",</p>
<p>"interconnect_user": "" }</p>
</td>
<td rowspan="2">
<p>/bundle/{bundle_name}/cluster/{ip</p>
<p>}/{port}/interconnect_user/{inter connect_user}</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>bundle detach cluster {ip}</p>
<p>{port}</p>
</td>
<td rowspan="2">
<p>Отсоединение от группы кластеров существующего кластера по его IP-адресу, сетевому</p>
<p>порту</p>
</td>
<td rowspan="2">
<p>DELETE</p>
</td>
<td>
<p>{ "bundle_name": "", "ip": "", "port": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/bundle/{bundle_name}/cluster/{ip</p>
<p>}/{port}</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>bundle detach cluster</p>
<p>{'cluster_name'}</p>
</td>
<td rowspan="3">
<p>Отсоединение от группы кластеров существующего кластера по его</p>
<p>названию</p>
</td>
<td rowspan="3">
<p>DELETE</p>
</td>
<td>
<p>{ "bundle_name": "",</p>
<p>"cluster_name": "" }</p>
</td>
<td rowspan="3">
<p>/bundle/{bundle_name}/cluster/{cl uster_name}</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 0%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th colspan="2">
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>bundle</p>
</td>
<td rowspan="2">
<p>Отображение</p>
<p>сведений о группе кластеров</p>
</td>
<td>
<p>GET</p>
</td>
<td rowspan="2"></td>
<td rowspan="2"></td>
<td>
<p>/bundle/status</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td colspan="6">
<p><strong>Команды для работы с кластером и его узлами</strong></p>
</td>
</tr>
<tr>
<td>
<p>cluster create</p>
</td>
<td rowspan="2">
<p>Создание нового кластера</p>
</td>
<td>
<p>PUT</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td colspan="2" rowspan="2">
<p>/cluster</p>
<p>?cluster_name={cluster_name}</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>cluster</p>
</td>
<td rowspan="2">
<p>Получение описания</p>
<p>кластера с текущими статусами узлов</p>
</td>
<td>
<p>GET</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="2"></td>
<td>
<p>/cluster/{cluster_name}</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>cluster drop</p>
</td>
<td rowspan="2">
<p>Удаление кластера</p>
</td>
<td>
<p>DELETE</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="2"></td>
<td>
<p>/cluster/{cluster_name}/delete</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>cluster ip activate</p>
</td>
<td rowspan="2">
<p>Присвоение публичного IP-адреса</p>
<p>кластеру</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="2"></td>
<td>
<p>/cluster/{cluster_name}/activate</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>cluster ip deactivate</p>
</td>
<td rowspan="2">
<p>Удаление публичного IP-адреса кластера</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td colspan="2" rowspan="2">
<p>/cluster/{cluster_name}/deactivat e</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>reload jadog cluster</p>
</td>
<td rowspan="3">
<p>Перезагрузка файлов конфигурации всех компонентов «jaDog»</p>
<p>в кластере</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="3"></td>
<td rowspan="2">
<p>/cluster/{cluster_name}/jadog/rel oad</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>maintenance set cluster</p>
</td>
<td rowspan="3">
<p>Включение режима технического обслуживания</p>
<p>кластера</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="3"></td>
<td rowspan="2">
<p>/cluster/{cluster_name}/maintenan ce</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>maintenance reset cluster</p>
</td>
<td rowspan="3">
<p>Выключение режима</p>
<p>технического обслуживания кластера</p>
</td>
<td rowspan="3">
<p>DELETE</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="3">
<p>/cluster/{cluster_name}/maintenan ce</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td style="text-align: left;">
<p>cluster add master [ip] [port]</p>
</td>
<td rowspan="2">
<p>Добавление в кластер главного узла по IP-адресу и сетевому порту</p>
</td>
<td rowspan="2">
<p>PUT</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": "", "ip": "",</p>
<p>"port": "", "role": "" }</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{ip}/port/{port}?role=master</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>cluster add master [ip] [port] as [node_name]</p>
</td>
<td rowspan="2">
<p>Добавление в кластер главного узла по IP-адресу и сетевому порту с указанием</p>
<p>названия</p>
</td>
<td rowspan="2">
<p>PUT</p>
</td>
<td>
<p>{ "cluster_name": "", "node_name": "",</p>
<p>"ip": "", "port":</p>
<p>"", "role": "" }</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{ip}/port/{port}?role=master&amp;nod e_name={node_name}</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>cluster add [role] [sync]</p>
<p>[ip] [port]</p>
</td>
<td rowspan="2">
<p>Добавление в кластер резервного узла по IP-адресу и сетевому порту с указанием типа репликации и названия</p>
</td>
<td rowspan="2">
<p>PUT</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": "", "node_name": "",</p>
<p>"ip": "", "port":</p>
<p>"", "role": "", "sync": "",</p>
<p>"primary_ip": "",</p>
<p>"primary_port": "",</p>
<p>"primary_name": "" }</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{ip}/port/{port}?role=slave&amp;node</p>
<p>_name={node_name}&amp;sync={sync|asyn c}</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>cluster add [role] [ip] [port] as [node_name]</p>
</td>
<td rowspan="2">
<p>Добавление в кластер узла арбитра по IP-адресу и сетевому порту с указанием и</p>
<p>названия</p>
</td>
<td rowspan="2">
<p>PUT</p>
</td>
<td>
<p>{ "cluster_name": "", "node_name": "",</p>
<p>"ip": "", "port":</p>
<p>"", "role": "" }</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{ip}/port/{port}?role=referee&amp;no de_name={node_name}</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>cluster drop node [ip] [port]</p>
</td>
<td rowspan="3">
<p>Исключение узла из</p>
<p>кластера по его IP-адресу и сетевому порту</p>
</td>
<td rowspan="3">
<p>DELETE</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": "", "ip": "",</p>
<p>"port": "" }</p>
</td>
<td rowspan="3">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{port}</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>reload jadog node [ip] [port]</p>
</td>
<td rowspan="3">
<p>Перезагрузка компонента «jaDog» на узле по его IP-адресу и номеру</p>
<p>сетевого порта</p>
</td>
<td rowspan="3">
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": "", "ip": "",</p>
<p>"port": "" }</p>
</td>
<td rowspan="3">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{port}/jadog/reload</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>maintenance set node [ip] [port]</p>
</td>
<td rowspan="3">
<p>Установка режима технического обслуживания на узле кластера по его IP-адресу и сетевому</p>
<p>порту</p>
</td>
<td rowspan="3">
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name":</p>
<p>"", "ip": "",</p>
<p>"port": "" }</p>
</td>
<td rowspan="3">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{port}/maintenance</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>maintenance reset node [ip] [port]</p>
</td>
<td rowspan="2">
<p>Снятие режима технического обслуживания на узле кластера по его IP-адресу и сетевому</p>
<p>порту</p>
</td>
<td rowspan="2">
<p>DELETE</p>
</td>
<td>
<p>{ "cluster_name":</p>
<p>"", "ip": "",</p>
<p>"port": "" }</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{port}/maintenance</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>reload jadog node '[node_name]'</p>
</td>
<td rowspan="2">
<p>Перезагрузка компонента «jaDog» на узле по его</p>
<p>названию</p>
</td>
<td rowspan="2">
<p>POST</p>
</td>
<td>
<p>{ "cluster_name":</p>
<p>"", "node_name": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{nod e_name}/jadog/reload</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>maintenance set node '[node_name]'</p>
</td>
<td rowspan="2">
<p>Установка режима</p>
<p>технического обслуживания на узле кластера по его названию</p>
</td>
<td rowspan="2">
<p>POST</p>
</td>
<td>
<p>{ "cluster_name": "", " node_name ": "" }</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{nod e_name}/maintenance</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>maintenance reset node [ip] [port]</p>
</td>
<td rowspan="2">
<p>Снятие режима технического обслуживания на узле кластера по его</p>
<p>названию</p>
</td>
<td rowspan="2">
<p>DELETE</p>
</td>
<td>
<p>{ "cluster_name": "", " node_name ": "" }</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{nod e_name}/maintenance</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>reload jadog master</p>
</td>
<td rowspan="2">
<p>Выполнение перегрузки файлов конфигурации компонента «jaDog» (на главном узле или на узле, если он не в</p>
<p>составе кластера)</p>
</td>
<td rowspan="2">
<p>POST</p>
</td>
<td rowspan="2">
<p>Отсутствуют</p>
</td>
<td rowspan="2">
<p>/reload</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>cluster structure [full]</p>
</td>
<td rowspan="2">
<p>Получение структуры кластера в кратком/полном</p>
<p>формате в файле YML</p>
</td>
<td rowspan="2">
<p>GET</p>
</td>
<td>
<p>{ "cluster_name": "", "format": "" }</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/structure</p>
<p>/</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>cluster reinit node ['node_name']</p>
</td>
<td>
<p>Повторная инициализация узла в кластере</p>
</td>
<td>
<p>POST</p>
</td>
<td>
<p>{ "cluster_name": "", "node_name": ""</p>
<p>}</p>
</td>
<td>
<p>/cluster/{cluster_name}/node/{nod e_name}/reinit</p>
</td>
</tr>
<tr>
<td colspan="5">
<p><strong>Команды для работы с дата-центрами</strong></p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 3%" />
<col style="width: 12%" />
<col style="width: 9%" />
<col style="width: 20%" />
<col style="width: 1%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th colspan="2">
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th colspan="2">
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>datacenter create ['dc_name']</p>
</td>
<td colspan="2">
<p>Создание нового дата-</p>
<p>центра</p>
</td>
<td>
<p>PUT</p>
</td>
<td colspan="2">
<p>{ " dc_name ": "" }</p>
</td>
<td>
<p>/datacenter?dc_name={dc_name}</p>
</td>
</tr>
<tr>
<td>
<p>datacenter drop ['dc_name']</p>
</td>
<td colspan="2">
<p>Удаление существующего дата-</p>
<p>центра</p>
</td>
<td>
<p>DELETE</p>
</td>
<td colspan="2">
<p>{ " dc_name ": "" }</p>
</td>
<td>
<p>/datacenter/{dc_name}</p>
</td>
</tr>
<tr>
<td>
<p>datacenter ['dc_name'] attach node [ip] [port]</p>
</td>
<td colspan="2">
<p>Присоединение узла по его IP-адресу и сетевому порту к дата-центру</p>
</td>
<td>
<p>POST</p>
</td>
<td colspan="2">
<p>{ "dc_name": "", "ip": "", "port": ""</p>
<p>}</p>
</td>
<td>
<p>/datacenter/{dc_name}/node/{ip}/{ port}/attach</p>
</td>
</tr>
<tr>
<td>
<p>datacenter ['dc_name'] detach node [ip] [port]</p>
</td>
<td colspan="2">
<p>Отсоединение узла по</p>
<p>его IP-адресу и сетевому порту от дата-центра</p>
</td>
<td>
<p>POST</p>
</td>
<td colspan="2">
<p>{ "dc_name": "", "ip": "", "port": ""</p>
<p>}</p>
</td>
<td>
<p>/datacenter/{dc_name}/node/{ip}/{ port}/detach</p>
</td>
</tr>
<tr>
<td>
<p>datacenter ['name'] attach node</p>
</td>
<td colspan="2">
<p>Присоединение узла</p>
<p>по его названию к дата-центру</p>
</td>
<td>
<p>POST</p>
</td>
<td colspan="2">
<p>{ "dc_name": "",</p>
<p>"node_name": "", }</p>
</td>
<td>
<p>/datacenter/{dc_name}/node/{node_ name}/attach</p>
</td>
</tr>
<tr>
<td>
<p>datacenter ['name'] detach node</p>
</td>
<td colspan="2">
<p>Отсоединение узла по</p>
<p>его названию от дата-центра</p>
</td>
<td>
<p>POST</p>
</td>
<td colspan="2">
<p>{ "dc_name": "",</p>
<p>"node_name": "", }</p>
</td>
<td>
<p>/datacenter/{dc_name}/node/{node_ name}/detach</p>
</td>
</tr>
<tr>
<td>
<p>datacenter promote</p>
</td>
<td colspan="2">
<p>Выполнение операции</p>
<p>«switchover» для текущего дата-центра</p>
</td>
<td>
<p>POST</p>
</td>
<td colspan="2">
<p>{ "dc_name": "" }</p>
</td>
<td>
<p>/datacenter/{dc_name}/promote</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p></th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="5">
<p><strong>Команды для работы с учетными записями компонента «jaDog»</strong></p>
</td>
</tr>
<tr>
<td rowspan="3">
<p>user create или user create ['name'] with password ['password']</p>
</td>
<td rowspan="3">
<p>Создать учетную запись для компонента «jaDog»</p>
</td>
<td>
<p>PUT</p>
</td>
<td rowspan="2">
<p>{ "user_name": "",</p>
<p>"password": ""}</p>
</td>
<td rowspan="3">
<p>/user?user_name=name&amp;password= password</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="3">
<p>user ['user_name '] set name ['new name'] или user ['user_name '] set password ['password']</p>
</td>
<td rowspan="3" style="text-align: left;">
<p>Изменить название учетной записи или пароль</p>
</td>
<td>
<p>PATCH</p>
</td>
<td rowspan="2">
<p>{ "user_name": "",</p>
<p>"password": ""}</p>
</td>
<td rowspan="3">
<p>/user/{user_name}</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>user drop ['user_name']</p>
</td>
<td rowspan="2">
<p>Удалить</p>
<p>существующую учётную запись</p>
</td>
<td>
<p>DELETE</p>
</td>
<td>
<p>{ "user_name": "" }</p>
</td>
<td rowspan="2">
<p>/user/{user_name}</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>user lock ['user_name']</p>
</td>
<td rowspan="2">
<p>Заблокировать учетную запись</p>
</td>
<td>
<p>POST</p>
</td>
<td>
<p>{ "user_name": "" }</p>
</td>
<td rowspan="2">
<p>/user/{username}/lock</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>user unlock ['user_name']</p>
</td>
<td rowspan="2">
<p>Разблокировать учетную запись</p>
</td>
<td>
<p>POST</p>
</td>
<td>
<p>{ "user_name": "" }</p>
</td>
<td rowspan="2">
<p>/user/{username}/unlock</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>user ls</p>
</td>
<td rowspan="2">
<p>Получение списка</p>
<p>учетных записей компонента «jaDog»</p>
</td>
<td>
<p>GET</p>
</td>
<td rowspan="2">
<p>Отсутствуют</p>
</td>
<td rowspan="2">
<p>/users</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td colspan="5">
<p><strong>Команды для работы с узлами кластера</strong></p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>node [ip] [port]</p>
</td>
<td rowspan="3">
<p>Получение</p>
<p>информации по IP-адресу и порту об узле, входящего в кластер</p>
</td>
<td rowspan="3">
<p>GET</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": "", "ip": "",</p>
<p>"port": "" }</p>
</td>
<td rowspan="3">
<p>/cluster/{cluster_name}/node/ip/{ ip}/port/{port}</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>node ['node_name']</p>
</td>
<td rowspan="2">
<p>Получение информации о статусе узла кластера</p>
</td>
<td rowspan="2">
<p>GET</p>
</td>
<td rowspan="2">
<p>{ "cluster_name":</p>
<p>"", "node_name": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{nod e_name}</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>node ['old_node_name'</p>
<p>] set name ['new_node_name'</p>
<p>]</p>
</td>
<td rowspan="2">
<p>Переименование узла кластера</p>
</td>
<td rowspan="2">
<p>PATCH</p>
</td>
<td>
<p>{ "cluster_name": "", "ip": "",</p>
<p>"new_node_name": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{port}</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>node [ip] [port] set name ['new_node_name'</p>
<p>]</p>
</td>
<td rowspan="2">
<p>Назначение названия узлу кластера</p>
</td>
<td rowspan="2">
<p>PATCH</p>
</td>
<td rowspan="2">
<p>{ "cluster_name":</p>
<p>"", "ip": "",</p>
<p>"port": "",</p>
<p>"new_node_name": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/ip/{ ip}/port/{port}</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>cluster switchover [ip] [port]</p>
</td>
<td rowspan="2">
<p>Выполнение переключения роли главного узла на указанный узел по его IP-адресу и номеру</p>
<p>порта</p>
</td>
<td rowspan="2">
<p>POST</p>
</td>
<td>
<p>{ "cluster_name":</p>
<p>"", "ip": "",</p>
<p>"port": "" }</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{port}/switchover</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>node [ip] [port] set replication type = ['replication_ty pe']</p>
</td>
<td>
<p>Изменение типа репликации резервного узла кластера</p>
</td>
<td>
<p>PATCH</p>
</td>
<td>
<p>{ "cluster_name": "", "ip": "",</p>
<p>"port": "", "replication_type": "" }</p>
</td>
<td style="text-align: left;">
<p>/cluster/{cluster_name}/node/{nod e_name}?replication_type=[sync|as ync]</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td>
<p>cluster switchover ['node_name']</p>
</td>
<td rowspan="2">
<p>Переключение роли главного узла на указанный узел по</p>
<p>названию</p>
</td>
<td rowspan="2">
<p>POST</p>
</td>
<td>
<p>{ "cluster_name":</p>
<p>"", "node_name": ""</p>
<p>}</p>
</td>
<td rowspan="2" style="text-align: left;">
<p>/cluster/{cluster_name}/node/{nod e_name}/switchover</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>node is [</p>
<p>(m)aster |</p>
<p>(s)lave |</p>
<p>(p)rimary |</p>
<p>(r)eferee ]</p>
</td>
<td rowspan="2">
<p>Получение информации о роли узла в виде значений true/false</p>
</td>
<td rowspan="2">
<p>GET</p>
</td>
<td>
<p>master, slave, primary, referee</p>
</td>
<td rowspan="2" style="text-align: left;">
<p>/node_is?checked_role=master | slave | primary | referee</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>node in [ maintenance | cascade | sync | async ]</p>
</td>
<td rowspan="2">
<p>Получение информации о режиме работы узла кластера</p>
<p>и состоянии</p>
</td>
<td rowspan="2">
<p>GET</p>
</td>
<td>
<p>maintenance, cascade, sync, async</p>
</td>
<td rowspan="2" style="text-align: left;">
<p>/node_in?checked_status=maintenan ce | cascade | sync | async</p>
</td>
</tr>
<tr>
<td rowspan="4"></td>
</tr>
<tr>
<td></td>
<td rowspan="2">
<p>технического</p>
</td>
<td rowspan="2"></td>
<td rowspan="2" style="text-align: left;"></td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td>
<p>обслуживания</p>
</td>
<td></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td>
<p>cluster reinit</p>
</td>
<td rowspan="2">
<p>Повторная инициализация</p>
<p>резервного узла</p>
</td>
<td rowspan="2">
<p>POST</p>
</td>
<td rowspan="2"></td>
<td rowspan="2" style="text-align: left;">
<p>/reinitialize</p>
</td>
</tr>
<tr>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 8%" />
<col style="width: 0%" />
<col style="width: 22%" />
<col style="width: 0%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th colspan="2">
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th colspan="2">
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2">
<p>cluster reinit nodata</p>
</td>
<td rowspan="3">
<p>Повторная</p>
<p>инициализация резервного узла в режиме nodata</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="3"></td>
<td rowspan="3"></td>
<td rowspan="3"></td>
<td>
<p>/reinitialize?nodata=true</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="3">
<p>cluster add slave nodata [ip] [port] as</p>
<p>['node_name']</p>
</td>
<td rowspan="4">
<p>Добавление резервного узла в кластер в режиме nodata</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="4"></td>
<td rowspan="2">
<p>{ "cluster_name": "", "role": "", "node_name": "" }</p>
</td>
<td rowspan="4"></td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{port}?role=slave&amp;nodata=true&amp;no de_name={node_name}</p>
</td>
</tr>
<tr>
<td rowspan="3"></td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td colspan="7">
<p><strong>Команды для работы с СУБД</strong></p>
</td>
</tr>
<tr>
<td rowspan="2">
<p>reload dbs cluster</p>
</td>
<td rowspan="3">
<p>Перезагрузка файлов конфигурации</p>
<p>«jaDog» на узле</p>
<p>кластера по его имени</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="3"></td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="3"></td>
<td rowspan="2">
<p>/cluster/{cluster_name}/dbs/reloa d</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>restart dbs cluster</p>
</td>
<td rowspan="2">
<p>Перегрузка всех СУБД в кластере</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2"></td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td colspan="2" rowspan="2">
<p>/cluster/{cluster_name}/dbs/resta rt</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>start dbs cluster</p>
</td>
<td rowspan="2">
<p>Запуск СУБД во всем кластере</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2"></td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="2"></td>
<td>
<p>/cluster/{cluster_name}/dbs/start</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>stop dbs cluster</p>
</td>
<td rowspan="2">
<p>Остановка СУБД во всем кластере</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2"></td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="2"></td>
<td>
<p>/cluster/{cluster_name}/dbs/stop</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>reload dbs node</p>
</td>
<td rowspan="2">
<p>Перезагрузка файлов конфигурации</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2"></td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td colspan="2" rowspan="2">
<p>/cluster/{cluster_name}/node/dbs/ reload</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>
<p>«jaDog» на главном</p>
<p>узле кластера</p>
</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>restart dbs node</p>
</td>
<td rowspan="2">
<p>Перезагрузка СУБД на главном узле</p>
<p>кластера</p>
</td>
<td rowspan="2">
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/dbs/ restart</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>start dbs node</p>
</td>
<td rowspan="2">
<p>Запуск СУБД главном узле кластера</p>
</td>
<td rowspan="2">
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/dbs/ start</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>stop dbs node</p>
</td>
<td rowspan="2">
<p>Остановка СУБД на главном узле кластера</p>
</td>
<td rowspan="2">
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/dbs/ stop</p>
</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>reload dbs node [ip] [port]</p>
</td>
<td rowspan="3">
<p>Перезагрузка файлов конфигурации СУБД на узле кластера по его IP адресу и</p>
<p>сетевому порту</p>
</td>
<td rowspan="3">
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": "", "ip": "",</p>
<p>"port": "" }</p>
</td>
<td rowspan="3">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{port}/dbs/reload</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>restart dbs node [ip port]</p>
</td>
<td rowspan="3" style="text-align: left;">
<p>Перезагрузка СУБД на узле кластера по его IP адресу и</p>
<p>сетевому порту</p>
</td>
<td rowspan="3">
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": "", "ip": "",</p>
<p>"port": "" }</p>
</td>
<td rowspan="3">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{port}/dbs/restart</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td>
<p>start dbs node [ip] [port]</p>
</td>
<td rowspan="3">
<p>Запуск СУБД на узле кластера по его IP-адресу и номеру</p>
<p>сетевого порта</p>
</td>
<td rowspan="3">
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": "", "ip": "",</p>
<p>"port": "" }</p>
</td>
<td rowspan="3">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{port}/dbs/start</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2">
<p>stop dbs node [ip] [port]</p>
</td>
<td rowspan="4">
<p>Остановка СУБД на</p>
<p>узле кластера по его IP-адресу и номеру сетевого порта</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="3">
<p>{ "cluster_name":</p>
<p>"", "ip": "",</p>
<p>"port": "" }</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{ip}</p>
<p>/{port}/dbs/stop</p>
</td>
</tr>
<tr>
<td rowspan="3"></td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>reload dbs node ['node_name']</p>
</td>
<td rowspan="4" style="text-align: left;">
<p>Перезагрузка файлов конфигурации СУБД на узле кластера по</p>
<p>его названию</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="3">
<p>{ "cluster_name":</p>
<p>"", "node_name": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{nod e_name}/jadog/dbs/reload</p>
</td>
</tr>
<tr>
<td rowspan="3"></td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>restart dbs node ['node_name']</p>
</td>
<td rowspan="3" style="text-align: left;">
<p>Перезагрузка СУБД на узле кластера по его названию</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="3">
<p>{ "cluster_name":</p>
<p>"", "node_name": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{nod e_name}/dbs/restart</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>start dbs node ['node_name']</p>
</td>
<td rowspan="3">
<p>Запуск СУБД на узле кластера по его названию</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="3">
<p>{ "cluster_name":</p>
<p>"", "node_name": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{nod e_name}/dbs/start</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>stop dbs node ['node_name']</p>
</td>
<td rowspan="3" style="text-align: left;">
<p>Остановка СУБД на узле кластера по его названию</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="3">
<p>{ "cluster_name":</p>
<p>"", "node_name": ""</p>
<p>}</p>
</td>
<td rowspan="2">
<p>/cluster/{cluster_name}/node/{nod e_name}/dbs/stop</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td colspan="5">
<p><strong>Команды для работы с планировщиком заданий</strong></p>
</td>
</tr>
<tr>
<td>
<p>schedule ls</p>
</td>
<td rowspan="2">
<p>Отображение списка текущих заданий</p>
<p>планировщика</p>
</td>
<td>
<p>GET</p>
</td>
<td rowspan="2">
<p>Отсутствуют</p>
</td>
<td>
<p>/schedule</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>schedule completed ls</p>
</td>
<td rowspan="2">
<p>Отображение списка</p>
<p>завершенных заданий планировщика</p>
</td>
<td>
<p>GET</p>
</td>
<td rowspan="2">
<p>Отсутствуют</p>
</td>
<td>
<p>/schedule/completed</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 22%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th>
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2">
<p>schedule reset [job_name]</p>
</td>
<td rowspan="2">
<p>Удаление задания из</p>
<p>планировщика по его названию</p>
</td>
<td>
<p>DELETE</p>
</td>
<td>
<p>{ "job_name": "" }</p>
</td>
<td>
<p>/schedule/reset/{job_name}</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="3">
<p>schedule set [job_name] [job_delay_inter val] [job_command]</p>
</td>
<td rowspan="3">
<p>Добавление задания в планировщик с указанием задержки на выполнение</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "job_name": "", " job_delay_interval ": "",</p>
<p>"job_command": "" }</p>
</td>
<td>
<p>/schedule/set/job_delay_interval</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="3">
<p>schedule set [job_name]</p>
<p>{job_time}</p>
<p>{job_command}</p>
</td>
<td rowspan="3">
<p>Добавление задания в планировщик с указанием даты и времени выполнения</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "job_name": "",</p>
<p>"job_time": "",</p>
<p>"job_command": "" }</p>
</td>
<td>
<p>/schedule/set/job_time</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td colspan="5">
<p><strong>Команды для работы с синхронизатором файлов кластера</strong></p>
</td>
</tr>
<tr>
<td>
<p>fm ls</p>
</td>
<td rowspan="2">
<p>Вывод списка файлов синхронизации</p>
</td>
<td>
<p>GET</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""}</p>
</td>
<td>
<p>/cluster{cluster_name}/fm</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>
<p>fm copy</p>
</td>
<td rowspan="3">
<p>Синхронизация всех файлов на узлах кластера (кроме</p>
<p>Referee)</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td>
<p>/cluster{cluster_name}/fm</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>fm copy -n [nodes]</p>
</td>
<td rowspan="3">
<p>Синхронизация всех файлов на определенных узлах кластера (кроме</p>
<p>Referee)</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="2">
<p>{ "cluster_name": "", "nodes": "" }</p>
</td>
<td>
<p>/cluster{cluster_name}/fm</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 8%" />
<col style="width: 0%" />
<col style="width: 21%" />
<col style="width: 0%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th colspan="3">
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2">
<p>fm copy --referee</p>
</td>
<td rowspan="3">
<p>Синхронизация всех</p>
<p>файлов на узлах кластера, включая узлы Referee</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="3"></td>
<td rowspan="2">
<p>{ "cluster_name":</p>
<p>"", "referee": "" }</p>
</td>
<td rowspan="3"></td>
<td>
<p>/cluster{cluster_name}/fm</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>fm copy [file id]</p>
</td>
<td rowspan="4">
<p>Синхронизация указанного файла на всех узлах кластера</p>
<p>(кроме Referee)</p>
</td>
<td>
<p>POST</p>
</td>
<td rowspan="4"></td>
<td rowspan="3">
<p>{ "cluster_name": "", "numfile": "", "nodes": "" }</p>
</td>
<td rowspan="4"></td>
<td>
<p>/cluster{cluster_name}/fm</p>
</td>
</tr>
<tr>
<td rowspan="3"></td>
<td rowspan="3"></td>
</tr>
<tr>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>fm copy [file id] --referee</p>
</td>
<td rowspan="3">
<p>Синхронизация указанного файла на всех узлах кластера, включая узлы Referee</p>
</td>
<td>
<p>POST</p>
</td>
<td colspan="3" rowspan="3">
<p>{ "cluster_name": "", "referee": "", "numfile": "",</p>
<p>"nodes": "" }</p>
</td>
<td>
<p>/cluster{cluster_name}/fm</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>fm set [file path]</p>
</td>
<td rowspan="2">
<p>Добавление файла или</p>
<p>каталога в список для синхронизации</p>
</td>
<td>
<p>PATCH</p>
</td>
<td colspan="3" rowspan="2">
<p>{ "cluster_name": "", "paths": "" }</p>
</td>
<td>
<p>/cluster{cluster_name}/fm</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align: center;">
<p>fm drop</p>
</td>
<td rowspan="2">
<p>Очистка списка файлов для</p>
<p>синхронизации</p>
</td>
<td>
<p>DELETE</p>
</td>
<td colspan="3" rowspan="2">
<p>{ "cluster_name": ""</p>
<p>}</p>
</td>
<td>
<p>/cluster{cluster_name}/fm</p>
</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>fm drop [file_id]</p>
</td>
<td rowspan="3" style="text-align: left;">
<p>Удаление файла по идентификатору из списка для</p>
<p>синхронизации</p>
</td>
<td>
<p>DELETE</p>
</td>
<td rowspan="3"></td>
<td rowspan="2">
<p>{ "cluster_name": "", "file_id": "" }</p>
</td>
<td rowspan="3"></td>
<td>
<p>/cluster{cluster_name}/fm</p>
</td>
</tr>
<tr>
<td rowspan="2"></td>
<td rowspan="2"></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td colspan="7">
<p><strong>Команды для запроса метрик кластера</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>Отсутствует</p>
</td>
<td>
<p>Получение метрик в</p>
<p>формате Prometheus</p>
</td>
<td>
<p>GET</p>
</td>
<td colspan="3">
<p>Отсутствуют</p>
</td>
<td>
<p>/metrics</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 8%" />
<col style="width: 22%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Аналог в утилите</strong></p>
<p><strong>«jadog_ctl»</strong></p>
</th>
<th>
<p><strong>Описание команды</strong></p>
</th>
<th>
<p><strong>Операция</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Параметры</strong></p>
</th>
<th>
<p><strong>Шаблон полной команды REST API</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Отсутствует</p>
</td>
<td>
<p>Получение метрик в</p>
<p>формате Prometheus</p>
</td>
<td>
<p>GET</p>
</td>
<td style="text-align: center;">Отсутствуют</td>
<td>
<p>/metrics?is_json=false</p>
</td>
</tr>
<tr>
<td>
<p>Отсутствует</p>
</td>
<td>
<p>Получение метрик в</p>
<p>формате JSON</p>
</td>
<td>
<p>GET</p>
</td>
<td style="text-align: center;">Отсутствуют</td>
<td>
<p>/metrics?is_json=true</p>
</td>
</tr>
</tbody>
</table>

## НАСТРОЙКА ГРУППЫ КЛАСТЕРОВ (BUNDLE) С КОМПОНЕНТОМ «JADOG» В РУЧНОМ РЕЖИМЕ

Под группой кластеров (bundle) понимается совокупность кластеров, управляемых при помощи компонента «jaDog».

Структура инженерного решения в этом случае будет иметь вид:

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image91_.png)

Рисунок 9.1 – Схема формирования и состава группы кластеров

Группа кластеров обеспечивает отказоустойчивость всего высокопроизводительного кластера (например, компонента «ja_Hipe_Cluster» или инженерного решения, построенного на его основе) с учетом состояния каждого подкластера.

Под подкластером (кластером второго уровня) понимается кластер компонента «jaDog», обеспечивающий отказоустойчивость отдельного узла группы кластеров.

Состояние каждого кластера в группе кластеров обеспечивается возможностью регулирования отдельно от группы, но с учетом его состояния. Поведение и работоспособность группы кластеров определяются с учетом состояния каждого кластера, входящего в нее.

В целях обеспечения информационной безопасности все действия администратора кластера или действия ИС через API в обязательном порядке фиксируются в журналах событий.

### Создание группы кластеров

Группа кластеров формируется на основе того кластера (вместе с входящими в него узлами), с которого выполняется его создание.

Для того чтобы создать группу кластеров необходимо выполнить следующие команды:

1)  На главном узле подкластера подключиться к консольной утилите «jadog_ctl» (здесь и далее команды выполняются в «jadog_ctl») и выполнить команду по созданию новой группы кластеров:


```
bundle create ['bundle_name']
```


**Пример:**

```
bundle create 'bundle0'
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image781.png)



Рисунок 9.2 – Вывод результата выполнения команды «bundle create» 

:::info Дополнительная информация
Название группы кластеров должно соответствовать следующим требованиям:

- начинается и заканчивается строчной буквой или цифрой;

- разрешены строчные буквы, цифры, а также "-" и "_";

- нельзя использовать 2 символа "_" и "-" подряд в любой комбинации.
:::



Вывод сообщения «Reply: Bundle created bundle0» соответствует успешному созданию нового группы кластеров.

При создании группы кластеров генерируется уникальный идентификатор – Bundle_ulid.

2)  После создания группы кластеров необходимо выполнить проверку ее состояния при помощи команды:

```
bundle
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image782.png)



<span id="_bookmark85" class="anchor"></span>Рисунок 9.3 – Вывод результата выполнения команды «bundle» 

Команда «bundle» предоставляет следующую информацию:

- версия компонента «jaDog»;

- значение интегральный показателя состояния (Health Lost);

- значение идентификатора Bundle ulid;

- количество кластеров, присоединенных к группе;

- количество узлов в группе кластеров;

- название группы кластеров;

- название дата-центра;

- таблица с характеристиками и статусами узлов кластеров, которая дополнительно содержит идентификатор группы и роль узла в кластере ja_Hipe Citus.

На иллюстрации [9.3](#_bookmark85) видно, что группа кластеров с названием «bundle0» состоит из кластера «cluster1» и его узлов «node1», «node2» и «node_referee».

Структуру группы кластера в формате JSON возможно получить при помощи команды:

```
/usr/jatoba-<ver>/bin# ./jadog_ctl -h localhost -p 54321 -U [admin_name] -W [password_user] -C "bundle" -q -f json

```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image783.jpeg)


Рисунок 9.4 – Получение структуры группы узлов

### Присоединение дополнительных кластеров к группе кластеров

Для того чтобы присоединить группе кластеров дополнительные кластера необходимо выполнить следующее:

1)  На главном узле кластера, который уже присоединен к группе кластеров, подключиться к консольной утилите «jadog_ctl» и выполнить команду:


```
bundle attach cluster [ip] [port]
```


**Пример:**


```
bundle attach cluster 10.116.102.56 12345
```


В случае если название технологической учетной записи «Jadog interconnection user» (по умолчанию «admin») в присоединяемом кластере отличается, команда будет иметь следующий синтаксис:

bundle attach cluster [ip] [port] ['interconnect_user']

Где «interconnect_user» - название технологической учетной записи для взаимодействия между сервисами компонентов «jaDog», а «ip» и «port» - IP-адрес и сетевой порт главного узла присоединяемого кластера.

**Пример:**


```
bundle attach cluster 10.116.102.56 12345 'admin_cluster2'
```


Название технологической учетной записи задается при выполнении настройки компонентов «jaDog» (см. первую часть документа «Компонент jaDog. Управление режимом работы узлов кластера» 643.72410666.00067-08 98 02-01).

2)  После присоединения дополнительного кластера необходимо проверить статус группы кластеров и входящих в него кластеров при помощи команды:


```
bundle
```


### Файл состояния группы кластеров

После создания группы кластеров информация о его структуре и параметрах сохраняется в файл «bundle_state.yml», расположенный в каталоге /usr/jatoba-<ver>/etc/jadog.

Файл состояния группы кластеров «bundle_state.yml» содержит иерархическую структуру, отражающую подчиненность кластеров и узлов (см. рисунок [9.5](#_bookmark88)).

Дополнительно информация о принадлежности кластера к конкретной группе кластеров после успешного присоединения вносится в файл «jadog_state.yml», расположенный в каталоге /usr/jatoba-<ver>/etc/jadog.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image784.jpeg)

<span id="_bookmark88" class="anchor"></span>Рисунок 9.5 – Содержимое файла состояния группы кластеров «bundle_state.yml»

При изменении состава группы кластеров содержимое файла состояния

«bundle_state.yml» обновляется на всех узлах кластеров, входящих эту группу. Таким образом все узлы содержат информацию о составе и состоянии всех узлов, что обеспечивает отказоустойчивость и не противоречивость. В случае обработки отказов (failover), а также при изменении ролей узлов (switchover), информация об этом также обновляется в файлах состояния «bundle_state.yml» на всех узлах группы кластеров.

### Отсоединение кластера от группы кластеров

В случае если присоединенный ранее кластер необходимо вывести из группы это выполняется в следующей последовательности:

1)  Подключиться к любому из главных узлов кластеров, кроме того, который требуется отсоединить, и при помощи консольной утилиты «jadog_ctl» выполнить команду:


```
bundle detach cluster {ip} {port}
```


Где «ip» и «port» - IP-адрес и сетевой порт главного узла отсоединяемого кластера.

**Пример:**


```
bundle detach cluster 10.116.102.56 12345
```


2)  Другим вариантом отсоединения кластера является использование его названия. В этом случае команда будет иметь следующий вид:


```
bundle detach cluster [cluster_name]
```


Название отсоединяемого кластера возможно узнать при помощи команды «bundle».

**Пример:**


```
bundle detach cluster cluster2
```


3)  После отсоединения кластера от группы кластеров необходимо проверить ее состояние при помощи команды:


```
bundle
```


### Удаление группы кластеров

В случае необходимости удаления группы кластеров необходимо предварительно отсоединить от нее всего кластеры (см. п.п. [9.4](#отсоединение-кластера-от-группы-кластеров)) кроме последнего.

Далее необходимо подключиться к главному узлу последнего кластера, входящего в группу, и в консольной утилите «jadog_ctl» выполнить следующую команду:


```
bundle drop ['bundle_name']
```


**Пример:**


```
bundle drop 'bundle0'
```


После выполнения данной команды группа кластеров считается удаленной.

### Особенности взаимодействия компонентов «jaDog» и «ja_Hipe_Cluster»

С целью обеспечения отказоустойчивости высокопроизводительного кластера компонента «ja_Hipe_Cluster» при настройке с помощью компонента «jaDog» администратор должен выполнить настройку узлов (кроме узлов с ролью «Координатор») без использования параметра Public address. В этом случае при возникновении аварийных случаев обеспечивается взаимодействие составных частей кластера непосредственно по IP-адресам.

Предварительным условием выполнения процедур обработки отказа или переключения главного узла(ов) является принадлежность всех узлов кластера компонента «ja_Hipe_Cluster» к одной группе кластеров компонента «jaDog».

Компонент «jaDog» в этом случае использует внутренние механизмы компонента «ja_Hipe_Cluster» в части реализации функций обработки отказа (failover, FO) и процедур принудительной смены ролей серверов (switchover, SO).

#### Процедура принудительной смены ролей серверов (switchover, SO)

В случае возникновения внештатной ситуации, затрагивающей главный узел кластера с ролью «Master», компонент «jaDog» выполняет переключение этой роли на новый узел (или реплику в терминологии компонента «ja_Hipe_Cluster») с использованием функции

«citus_update_node». Таким образом обеспечивается резервирование как отдельной реплики, так и работоспособность репликасета (набора реплик) в рамках одной группы кластеров с использованием встроенного инструментария компонентов «ja_Hipe_Cluster» и «jaDog».

### Переключение основного дата-центра группы кластеров (Bundle DCPromote)

Процедура Bundle DCPromote позволяет перевести кластеры, входящие в одну группу кластеров (bundle), на работу с резервным дата-центром (DC), сделав его основным.

Для понимания процессов Bundle DCPromote важно учесть следующее:

- на время выполнения процедуры Bundle DCPromote высокопроизводительный кластер ja_Hipe_Cluster не сможет полноценно обрабатывать запись данных. Необходимо обеспечить режим минимальной нагрузки («без нагрузки на запись»);

- администратор обязан самостоятельно убедиться в отсутствии или значительном снижении нагрузки на группу кластеров перед началом переключения на резервный дата-центр;

:::warning Важная информация
Невыполнение условия по отсутствию нагрузки на группу кластеров является основной причиной сбоев и длительных простоев при выполнении процедуры Bundle DCPromote.
:::

- наличие нагрузки на группу кластеров во время переключения на резервный дата-центр может привести к значительному увеличению длительности операций, а также к временным отказам в чтении и записи данных;

- прикладное ПО должно быть готово обрабатывать возможные сбои соединения с СУБД (компонент «jaDog» не выполняет отслеживание уровня нагрузки и/или количества сетевых соединений);

- аварийное или штатное переключение основного дата-центра на резервный в группе кластеров фиксируется в журнале информационной безопасности компонента с кодом события 120197103 «Конфигурация компонента программного обеспечения изменена» с обязательным указанием производимой операции.

Предварительные условия:

- высокопроизводительный кластер ja_Hipe_Cluster настроен для работы с несколькими дата-центрами: главные узлы в одном дата-центре, резервные – в другом (см. рисунок [9.12](#_bookmark98));

- процедура Bundle DCPromote выполняется только через команду bundle promote.

#### Штатное (плановое) переключение дата-центра

В рассматриваемом примере переключения основного дата-центра DC1 используются параметры группы кластеров, приведенные в таблице [4.1](#_bookmark29).

Таблица 9.1 – Конфигурация группы кластеров

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 13%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 12%" />
<col style="width: 16%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th>
<p><strong>Имя сервера</strong></p>
</th>
<th>
<p><strong>IP-адрес</strong></p>
</th>
<th>
<p><strong>Public IP</strong></p>
</th>
<th>
<p><strong>Роль</strong></p>
</th>
<th>
<p><strong>Имя кластера</strong></p>
</th>
<th>
<p><strong>Дата-центр</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td>
<p>node54</p>
</td>
<td>
<p>10.116.102.54/24</p>
</td>
<td>
<p>10.116.102.81/24</p>
</td>
<td>
<p>Master</p>
</td>
<td>
<p>cluster1</p>
</td>
<td>
<p>DC1</p>
</td>
</tr>
<tr>
<td>
<p>2</p>
</td>
<td>
<p>node55</p>
</td>
<td>
<p>10.116.102.55/24</p>
</td>
<td>
<p>10.116.102.56/24</p>
</td>
<td>
<p>Master</p>
</td>
<td>
<p>cluster2</p>
</td>
<td>
<p>DC1</p>
</td>
</tr>
<tr>
<td>
<p>3</p>
</td>
<td>
<p>node57</p>
</td>
<td>
<p>10.116.102.57/24</p>
</td>
<td>
<p>10.116.102.81/24</p>
</td>
<td>
<p>Slave</p>
</td>
<td>
<p>cluster1</p>
</td>
<td>
<p>DC2</p>
</td>
</tr>
<tr>
<td>
<p>4</p>
</td>
<td>
<p>node58</p>
</td>
<td>
<p>10.116.102.58/24</p>
</td>
<td>
<p>10.116.102.56/24</p>
</td>
<td>
<p>Slave</p>
</td>
<td>
<p>cluster2</p>
</td>
<td>
<p>DC2</p>
</td>
</tr>
</tbody>
</table>

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image785.jpeg)

Рисунок 9.6 – Статус группы кластеров до переключения основного дата-центра

Для того чтобы переключить дата-центр DC1 в группе кластеров на резервный DC2, необходимо на любом его резервном узле (в данном примере резервный узел node57 c IP-адресом 10.116.102.57) выполнить в консольной утилите jadog_ctl команду:


```
bundle promote
```

:::info Дополнительная информация
Команду bundle promote не запускают на главном узле кластера, если он уже расположен в резервном дата-центре, на который должно осуществляться переключение.
:::

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image786.png)

Рисунок 9.7 – Выполнение команды переключения основного дата-центра DC1 на DC2 

Узел, на котором выполняется команда bundle promote, оповещает другие узлы и кластеры, входящие в группу кластеров, о необходимости смены основного дата-центра DC1 на DC2.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image787.png)

Рисунок 9.8 – Статус группы кластеров после переключения на дата-центр DC2

:::info Дополнительная информация
В процессе переключения на резервный дата-центр в каждом кластере производится голосование между резервными узлами на роль главного узла.
:::

Как видно, узлы node57 и node58 теперь являются главными узлами в кластерах cluster1 и cluster2, а дата-центр DC2 теперь является основным дата-центром группы кластеров bundle_dc_promote.

Узел, при получении команды bundle promote, выполняет одну из процедур обработки отказа – SwitchOver или FailOver (подробнее см. документ «Компонент jaDog. Управление режимом работы узлов кластера (версия 4.2, часть 1)» 643.72410666.00067-08 98 02-01).

#### Аварийное переключение дата-центра

В качестве примера аварийного переключения основного дата-центра DC1 на резервный DC2 будет рассмотрена ситуация, когда неработоспособны главные узлы в обоих кластерах. Например, состояние узлов кластера cluster1 приведено на рисунке [9.9](#_bookmark96).

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image788.png)

<span id="_bookmark96" class="anchor"></span>Рисунок 9.9 – Статус узлов кластера cluster2

Для того, чтобы переключить работу группы узлов на резервный дата-центр DC2 с функционирующими резервными узлами node57 и node58, необходимо на одном из оставшихся резервных узлов выполнить в консольной утилите jadog_ctl команду:


```
bundle promote
```


В ходе выполнения данной команды резервные узлы из кластеров cluster 1 и cluster2 автоматически меняют свою роль на главные узлы.

После успешного переключения группы кластеров резервный дата-центр может начать принимать запросы на соединение восстанавливая таким образом штатную работу клиентских сервисов и приложений.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image789.png)

Рисунок 9.10 – Статус узлов кластера cluster2 после аварийного переключения на резервный дата-центр DC2

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image790.jpeg)

Рисунок 9.11 – Статус группы кластеров после аварийного переключения на резервный дата-центр DC2

В случае, если неработоспособные главные узлы node54 и node55 восстановят свою работу, они автоматически изменят свои роли в кластерах на резервные.

#### Выполнения переключения дата-центра в высокопроизводительном кластере

Для того чтобы переключить основной дата-центр в высокопроизводительном кластере ja_Hipe_Cluster, который входит в группу кластеров, на резервный необходимо на узле координаторе выполнить в консольной утилите jadog_ctl команду:


```
bundle promote
```

:::info Дополнительная информация
В том случае, если узел, на котором выполняется команда bundle promote не является координатором, то он автоматически перенаправляет команду bundle promote координатору своего кластера.
:::

В процессе выполнения процедуры Bundle DCPromote выполняется остановка функционирования высокопроизводительного кластера ja_Hipe_Cluster. Для этого производится обновление метаданных на каждом узле, после чего они приостанавливают прием данных. После успешного завершения процедуры Bundle DCPromote метаданные узлов возвращаются в исходное состояние и кластер возвращается в штатное рабочее состояние.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image912_.png)

<span id="_bookmark98" class="anchor"></span>Рисунок 9.12 – Процедура переключения основного дата-центра при штатной работе группы кластеров

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image913_.png)

Рисунок 9.13 – Процедура переключения основного дата-центра при аварийной работе группы кластеров

## НАСТРОЙКА ГРУППЫ КЛАСТЕРОВ С КОМПОНЕНТОМ «JADOG» В АВТОМАТИЧЕСКОМ РЕЖИМЕ

Описание назначения и структура группы кластеров приведены в разделе [9](#настройка-группы-кластеров-bundle-с-компонентом).

Настройка группы кластеров в автоматическом режиме подразумевает использование специального файла ответов в формате YML.

Файл ответов содержит в себе подготовленный пользователем перечень параметров группы кластеров, а также дополнительные атрибуты для других компонентов, например «ja_Hipe_Cluster».

Параметры, указываемые в файле ответов, соответствует проектируемой инфраструктуре группы кластеров.

Предварительные условия:

- Подготовленная инфраструктура (проект и описание структуры группы кластеров);

- На серверах установлена ОС и обеспечена сетевая доступность;

- На серверах при помощи менеджера пакетов APT выполнена установка;

  - СУБД «Jatoba». Процедура установки пакетов СУБД приводится в документе «Руководство по установке СУБД Jatoba» 643.72410666.00067-08 97 01;

  - Компонента «jaDog»;

  - Компонента «ja_Hipe_Cluster». Процедура установки пакетов компонента приводится в документе «Компонент ja_Hipe_Cluster. Горизонтальное масштабирование» 643.72410666.00067-08 98 01-11

– На серверах запущен специальный «нулевой» режим (jadog0).

### Формирование файла ответов для группы кластеров

Шаблон файла ответов автоматизированного построения группы кластеров содержит в себе все необходимые настройки. Далее готовый файл ответов будет называться «jadog_init_hipe.yml».


:::info Дополнительная информация
Шаблон файла ответов автоматизированного построения группы кластеров «jadog_init_hipe.yml» формируется на основании шаблона, расположенного в директории /usr/jatoba-6/share/doc/jadog/clusters_kits/ja_hipe_cluster/init_ja_hipe_cluster.yml
:::


В файле ответов «jadog_init_hipe.yml» каждого параметра приводятся комментарии, описывающие его назначение.

Параметры, заданные в файле ответов на уровне кластера (секция cluster_settings), имеют приоритет по сравнению с параметрами на уровне группы кластеров. Если параметр не определён в секции cluster_settings, то используются параметры из секции default_cluster_params:


```
default_cluster_params:	# Блок атрибутов используемый для каждого кластера в бандле.
    db_init_conn_string: host=127.0.0.1 port=5432 user=postgres dbname=postgres password='change_on_install' # Строка подключения к СУБД для установки расширений и выполнения скриптов. Требует SU прав.
    initdb:	# Блок инициализации СУБД. Содержит параметры инициализации СУБД
        initdb_options: "--locale=ru_RU.utf8 --encoding=UTF-8" # Строка параметров инициализации СУБД Jatoba.
        postgresql.conf:  # Параметры будут установлены при формировании кластера в конец файла postgresql.conf.
            listen_addresses: "'*'" 
            log_destination: "'stderr'" 
            logging_collector: on 
            log_directory: "'log'"
            log_filename: "'jatoba-%Y-%m-%d_%H%M%S.log'" 
            log_rotation_age: 1d
            log_rotation_size: 0 
            log_truncate_on_rotation: off 
            log_line_prefix: "'%m [%p] '" 
            log_statement: all
            shared_preload_libraries: "'citus, pg_stat_statements'" 
            max_connections: 128
            max_prepared_transactions: 256 
            data_sync_retry: off
        pg_hba.conf:	# Параметры будут установлены при формировании кластера в файл pg_hba.conf
            -	local all postgres scram-sha-256
            -	local ja_hipe_cluster jadog_user scram-sha-256
            -	host all postgres 10.116.102.0/24 trust
            -	host all postgres 127.0.0.1/32 scram-sha-256
            -	host ja_hipe_cluster jadog_user 127.0.0.1/32 scram-sha-256
            -	host replication jadog_user 127.0.0.1/32 scram-sha-256
            -	host replication jadog_user 10.116.102.0/24 scram-sha-256
```

Узел, который является узлом-координатором, определяется через параметр cordinator_cluster в файле ответов. Данный параметр расположен в подсекции ja_hipe_cluster и является обязательным только при развертывании высоконагруженного кластера компонента «ja_Hipe_Cluster». Координатор высоконагруженного кластера может быть только один. В случае если параметр cordinator_cluster в файле ответов не указан, то автоматическое развертывание кластера завершится с ошибкой.

Правила авторизации пользователей, описанные в файле ответов в подсекции pg_hba.conf, полностью заменяют собой весь блок правил авторизации в файле /var/lib/jatoba/<ver>/data/pg_hba.conf.


```
pg_hba.conf: # Параметры будут установлены при формировании кластера в файл pg_hba.conf
-	local all postgres scram-sha-256
-	local ja_hipe_cluster jadog_user scram-sha-256
-	host all postgres 10.116.102.0/24 trust
-	host all postgres 127.0.0.1/32 scram-sha-256
-	host ja_hipe_cluster jadog_user 127.0.0.1/32 scram-sha-256
-	host replication jadog_user 127.0.0.1/32 scram-sha-256
-	host replication jadog_user 10.116.102.0/24 scram-sha-256
```


### Запуск автоматической настройки группы кластеров

Предварительно «нулевой» режим (jadog0) должен быть обязательно запущен на всех узлах перед выполнением формирования группы кластеров из файла ответов.

Запуск «нулевого» режима (jadog0) с упрощенной небезопасной аутентификацией производится при помощи команды:


```
/usr/jatoba-6/bin/jadog jadog0 --basic -U [temp_user] -W [temp_password]
```


Где temp_user – имя создаваемого временного пользователя; temp_password – пароль временного пользователя, состоящий из не менее чем шести символов и одной цифры.

После этого на главном узле с ролью «Master» открыть дополнительное окно/вкладку терминала и выполнить чтение параметров из файла ответов «jadog_init_hipe.yml» и развертывание узлов кластеров с перекрестной репликацией:


```
/usr/jatoba-6/bin/jadog_ctl create_cluster -q -f json -T 999999 -c /<dir1>/jadog_init_hipe.yml --basic -U [temp_user]-W [temp_password]
```


Где <dir1> - путь к каталогу, в котором расположен файл ответов в формате YML temp_user – имя временного пользователя (см. п. 3.5.1); temp_password – пароль временного пользователя.

Процесс формирования группы кластеров с использованием файла ответов сводится к последовательному выполнению следующих шагов:

1)  Чтение и разбор файла ответов, содержащего настройки группы кластеров.

2)  Инициализация СУБД на узлах с использованием значений из параметра initdb_options;

3)  Установка параметров файлов postgresql.conf и pg_hba.conf;

4)  Установка в БД расширения компонента «jaDog»

5)  Установка необходимых расширений с использованием значений из параметра shared_preload_libraries;

:::info Дополнительная информация
В случае если для параметра shared_preload_libraries не указана установка расширения citus группа кластеров будет сформирована без компонента «ja_Hipe_Cluster»
:::

6)  Запуск БД на узлах кластера;

7)  Настройка суперпользователя с использованием значений из параметра db_init_conn_string;

8)  Назначение узла-координатора. Данный узел также должен являться главным узлом (с ролью Master) кластера компонента «jaDog».

9)  Выполнение настройки узлов компонента «jaDog» в группе кластеров.

10) (Опционально) Выполнение настройки узлов компонента «ja_Hipe_Cluster» в группе кластеров – определение узла-координатора на рабочих узлах, добавление рабочих узлов в высокопроизводительный кластер.

11) По завершению формирования группы кластеров возможно выполнить SQL-скрипты уровня группы кластеров или входящих в нее кластеров.

:::info Дополнительная информация
В случае возникновения ошибок при автоматической настройке кластера производится откат всех изменений. Событие при этом записывается в журнал компонента «jaDog» с перечнем причин остановки.

В случае возникновения ошибок при автоматической настройке нескольких кластеров откат изменений производится только для кластера, в процессе создания которого произошла ошибка.

В обоих случаях необходимо повторно запустить процедуру чтения параметров из файла конфигурации и развертывание узлов кластера(ов).
:::


Остановка формирования группы кластеров может прерываться в следующих случаях:

- не назначен узел-координатор в параметре cordinator_cluster;

- параметр bundle.citus.cordinator_cluster установлен более чем для одного узла;

## ПРИЛОЖЕНИЕ 1

**Пример монтирования сетевого каталога для настройки архивирования WAL**

В рассматриваемом примере монтирования сетевого каталога для конфигурирования отказоустойчивого кластера «jaDog» на ОС Ubuntu 20.04, 22.04 используются параметры сети кластера, приведенные в таблице [1.1](#_bookmark104).

<span id="_bookmark104" class="anchor"></span>Таблица 1.1 – Конфигурация сети кластера c файловым сервером архива WAL

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 14%" />
<col style="width: 22%" />
<col style="width: 25%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th rowspan="3" style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th rowspan="3">
<p><strong>Имя сервера</strong></p>
</th>
<th>
<p><strong>Подсеть кластера</strong></p>
</th>
<th rowspan="3" style="text-align: center;">
<p><strong>Точка монтирования</strong></p>
</th>
<th rowspan="3">
<p><strong>Каталог архивов WAL</strong></p>
</th>
</tr>
<tr>
<th>
<p>10.116.102.0/24</p>
</th>
</tr>
<tr>
<th>
<p><strong>IP-адрес</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Node1</p>
</td>
<td>
<p>10.116.102.54/24</p>
</td>
<td style="text-align: center;">
<p>/nfs/arhive_wal</p>
</td>
<td></td>
</tr>
<tr>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Node2</p>
</td>
<td>
<p>10.116.102.55/24</p>
</td>
<td style="text-align: center;">
<p>/nfs/arhive_wal</p>
</td>
<td></td>
</tr>
<tr>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Shared-node</p>
</td>
<td>
<p>10.116.102.56/24</p>
</td>
<td style="text-align: center;"></td>
<td>
<p>/var/nfs/arhive_wal</p>
</td>
</tr>
</tbody>
</table>

Использование функциональной возможности архивирования WAL может применяться в таких инженерных решениях, как катастрофоустойчивый кластер и геораспределенный кластер, основанный на компоненте «jaDog».

Инфраструктура кластера, помимо узлов кластера, требует выделенный сетевой ресурс (файловый сервер) с каталогом, доступным для записи и чтения. Имя каталога и IP-адрес не должны изменяться.

Каждый из узлов кластера должен иметь смонтированный сетевой диск, автозагружаемый при перезагрузке операционной системы.

Структурная схема кластера с файловым сервером представлена на рисунке [1.1](#_bookmark105).

Такая структура позволяет узлу кластера с функцией Master записывать архив WAL на сетевой ресурс, а другим узлам «подхватывать» недостающие файлы из архива.

При смене ролей узлов кластера внешний архив и идентичные настройки работы с ним позволяют оперативно и с консистентными данными обеспечивать бесперебойную работу пользователей.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/imagep11_.png)

Рисунок 1.1 – Структурная схема кластера с файловым сервером

### Настройка монтирования NFS

NFS (сетевая файловая система) — это распределенный протокол файловой системы, позволяющий монтировать на сервер удаленные каталоги. Это позволяет управлять пространством хранения в другом месте и выполнять запись в это пространство с нескольких клиентов. NFS обеспечивает относительно стандартизированный и производительный способ доступа к удаленным системам через сеть и хорошо работает в ситуациях, когда требуется регулярный доступ к общим ресурсам.

### Загрузка и установка компонентов

На хосте Shared-node IP-10.116.102.56/24 (файловом сервере) установить пакет nfs-kernel-server, который позволит предоставлять доступ к каталогам.

Поскольку это первая операция, которая выполняется с помощью apt в этом сеансе, обновить индекс локальных пакетов перед установкой:

```
sudo apt update
sudo apt install nfs-kernel-server
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image833.png)



Рисунок 1.2 – Установка пакета nfs-kernel-server

На клиентах Node1 IP - 10.116.102.54/24 и Node2 IP - 10.116.102.55/24 необходимо установить пакет nfs-common, обеспечивающий функции NFS без добавления каких-либо серверных компонентов. Обновить индекс локальных пакетов перед установкой, чтобы гарантированно использовать актуальную информацию:


```
sudo apt update
sudo apt install nfs-common
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image834.png)

Рисунок 1.3 - Установка пакета nfs-common

### Создание каталога на хосте (файловом сервере)

На хосте Shared-node IP-10.116.102.56/24 (файловом сервере) создать каталог командой:

```
sudo mkdir /var/nfs/arhive_wal -p
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image835.png)

Рисунок 1.4 – Создание каталога на хосте

Каталог создается с правами sudo, владельцем каталога будет пользователь root на хосте:


```
ls -la /var/nfs/arhive_wal
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image836.png)

Рисунок 1.5 – Проверка установленных прав на каталог

Для безопасности NFS преобразует любые операции root на клиенте в операции с учетными данными nobody:nogroup. В связи с этим, необходимо изменить владельца каталога для соответствия этим учетным данным.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image837.png)

```
# sudo chown nobody:nogroup /var/nfs/arhive_wal 
# ls -la /var/nfs/arhive_wal
```

Рисунок 1.6 – Установка и проверка прав на каталог

### Экспорт каталога

Открыть на хосте Shared-node IP-10.116.102.56/24 (файловом сервере) файл /etc/exports в текстовом редакторе с привилегиями root:


```
sudo nano /etc/exports
```


Файл содержит комментарии, показывающие общую структуру каждой строки конфигурации. Синтаксис выглядит следующим образом:


```
directory_to_share client(share_option1,...,share_optionN)
(rw,sync,no_root_squash,no_subtree_check)
```


Возможно применение следующих опций:

- rw: эта опция дает клиенту доступ к чтению и записи на соответствующем томе;

- sync: эта опция принудительно заставляет NFS записывать изменения на диске, прежде чем отправлять ответ. В результате получаем более стабильную и согласованную среду, поскольку в ответе отражается фактическое состояние удаленного тома, при этом снижается скорость операций с файлами;

- no_subtree_check: данная опция предотвращает проверку вложенного дерева, когда хост проверяет фактическую доступность файла в экспортированном дереве при каждом

запросе. Это может вызвать трудности в случае переименования файла, если он открыт на клиентской системе. Проверку вложенного дерева в большинстве случаев лучше отключить;

- no_root_squash: по умолчанию NFS преобразует запросы удаленного пользователя root в запросы пользователя без привилегий на сервере. Это предназначено для обеспечения безопасности, чтобы пользователь root клиентской системы не мог использовать файловую систему хоста с правами root. Опция no_root_squash отключает такое поведение для определенных общих ресурсов.

Установить параметры подключения клиентов добавив строки:

```
/var/nfs/arhive_wal 10.116.102.54 (rw,sync,no_root_squash,no_subtree_check)
/var/nfs/arhive_wal 10.116.102.55 (rw,sync,no_root_squash,no_subtree_check)
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image838.png)



Рисунок 1.7 – Строки подключений клиентов в конфигурационном файле /etc/exports 

Таким образом предоставляется доступ узлам кластера Node1 IP-110.116.102.54/24 и Node2 IP 10.116.102.55/24 к каталогу на внешнем файловом сервере.

После редактирования файла, его необходимо сохранить и закрыть.

Чтобы сделать общий ресурс доступным для настроенных клиентов, перезапустить сервер NFS с помощью следующей команды:


```
sudo systemctl restart nfs-kernel-server 
sudo systemctl status nfs-kernel-server
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image839.png)

Рисунок 1.8 – Перезагрузка и проверка статуса службы nfs-kernel-server

### Проверка брандмауэра на хосте

Состояние брандмауэра проверяется командой:

```
sudo ufw status
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image840.png)



Рисунок 1.9 – Проверка статуса брандмауэра

В представленном примере брандмауэр отключен. Если он будет активен, то необходимо выполнить команду с синтаксисом:


```
sudo ufw allow from [client_ip] to any port nfs
```


Чтобы открыть порт 2049 на хосте, необходимо указать IP-адрес клиентской системы. На данном этапе подготовка хоста для хранения архива WAL закончена.

### Создание точек монтирования и монтирование каталогов на клиентской системе

Операции монтирования проводятся на узлах кластера Node1 IP-10.116.102.54/24 и Node2 IP 10.116.102.55/24. Действия будут аналогичными.

Создать каталог для монтируемого ресурса:

```
sudo mkdir -p /nfs/arhive_wal
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image841.png)



Рисунок 1.10 - Создайте каталога для монтируемого ресурса

Теперь есть место для размещения удаленных общих ресурсов и открыт брандмауэр, поэтому можно монтировать общие ресурсы, используя IP-адрес сервера хоста:

```
sudo mount 10.116.102.56:/var/nfs/arhive_wal /nfs/arhive_wal
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image842.png)



Рисунок 1.11 – Команда монтирования общего ресурса 

Повторить действия на Node1:

```
# sudo mkdir -p /nfs/arhive_wal
# sudo mount 10.116.102.56:/var/nfs/arhive_wal /nfs/arhive_wal
```

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image843.png)



Рисунок 1.12 – Создание точки монтирования и монтирование сетевого каталога Сетевые каталоги на узлах кластера смонтированы.

Проверить смонтированные каталоги возможно командой:


```
df -h
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image844.png)

Рисунок 1.13 – Вывод смонтированных каталогов

### Монтирование удаленных каталогов NFS при загрузке

Удаленные общие ресурсы NFS можно автоматически монтировать при загрузке, для чего их нужно добавить в файл /etc/fstab на всех узлах кластера.

Открыть данный файл в текстовом редакторе с привилегиями root:


```
sudo nano /etc/fstab
```


Добавьте в конец файла строки параметры монтируемого каталога на «Shared-node» IP-10.116.102.56:


```
10.116.102.56:/var/nfs/arhive_wal /nfs/arhive_wal nfs auto,nofail,noatime,nolock,intr,tcp,actimeo=1800 0 0
```


![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image845.png)

Рисунок 1.14– Редактирование файла /etc/fstab на Node2 

После редактирования файла его необходимо сохранить и закрыть.

Повторить действие на всех узлах кластера.

![](@site/docs/assets/images/com18.3.1/jadog_4.2_2/media/image846.png)

Рисунок 1.15 – Редактирование файла /etc/fstab на Node1

На этом этапе монтирование сетевого каталога закончено. Узлы кластера будут автоматически монтировать сетевой каталог.

## ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ

**Smallint** – тип значения, представляет числа от -32768 до 32767, используя 2 байта.

**Integer** – тип значения, представляет обычное целое число, которое обычно используется для хранения автоинкрементированных идентификаторов и других целочисленных значений. Он использует 4 байта и может представлять числа от - 2147483648 до 2147483647.

**Bigint** – тип значения, как правило это «большое» целое число, способное представлять числа в диапазоне от -9223372036854775808 до 9223372036854775807, используя 8 байтов.

**Boolean** – это логический тип данных, который может принимать значения True (верно) или False (неверно).

**CRL (Certificate Revocation List)** – это список сертификатов, которые были отозваны выдающим их центром сертификации. CRL содержит информацию о сертификатах, которые больше не являются действительными, и используется центрами сертификации для проверки того, что сертификаты все еще являются действительными.

**IPv4** (Internet Protocol version 4) — это четвёртая версия интернет-протокола (IP). Он использует 32-битные (четырёхбайтные) адреса, что ограничивает адресное пространство 4 294 967 296 возможными уникальными адресами. Протокол описан в RFC 791 (сентябрь 1981 года) и заменил RFC 760 (январь 1980 года).

## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

| Сокращение | Расшифровка                                                                                                                                                                  |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DHCP       | Dynamic Host Configuration Protocol – протокол динамической настройки узла                                                                                                   |
| GLSB       | Global Server Load Balancing – распределение информации между серверами для повышения удобства работы пользователей и обеспечения более быстрой передачи информации и данных |
| SQL        | Structured Query Language – язык структурированных запросов                                                                                                                  |
| SSL        | Secure Sockets Layer – уровень защищенных сокетов. Криптографический протокол, который подразумевает безопасную связь                                                        |
| БД         | База данных                                                                                                                                                                  |
| ДСЧ        | Датчик случайных чисел                                                                                                                                                       |
| ОС         | Операционная система                                                                                                                                                         |
| СУБД       | Система управления базами данных                                                                                                                                             |
| УЗ         | Учетная запись                                                                                                                                                               |
| УЦ         | Удостоверяющий центр                                                                                                                                                         |
| ЭВМ        | Электронно-вычислительная машина                                                                                                                                             |

