**АННОТАЦИЯ**

В документе приведены сведения, необходимые для установки и эксплуатации компонентов, предназначенных для мониторинга СУБД.

| **Версия СУБД «Jatoba»** | **node_exporter** | **postgres_exporter** | **sql_exporter** | **Prometheus** | **Alertmanager** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 4/5 | 1.8 | 0.18.1 | 0.18.6 | 3.5 | 0.27 |
| 6/18 | 1.11.1 | 0.19.1 | 0.24 | 3.11 |  |

Таблица . – Версии компонентов для мониторинга СУБД

Настоящее руководство предназначено для администраторов СУБД.

Степени важности примечаний, применяемые в документе:

:::warning Важная информация
**Важная информация** – указания, требующие особого внимания
:::

:::info Дополнительная информация
**Дополнительная информация** – указания, позволяющие упростить работу с изделием
:::

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">

![](@site/docs/assets/images/monitoring/media/image2.png)
<th style="text-align: left;"><p>Все примеры в данном документе приведены для СУБД «Jatoba» версии<br />
ядра 5.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-6/bin».</p></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">

![](@site/docs/assets/images/monitoring/media/image1.png)
<td style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></td>
</tr>
</tbody>
</table>

## Назначение компонента

Компонент «node_exporter» – программный инструмент, предназначенный для мониторинга и сбора метрик с различных компонентов в Linux-подобных ОС.

Компонент собирает и экспортирует различные метрики, такие как загрузка процессора, использование памяти, статистика сети, системные вызовы и т.д. Собранные данные могут быть отправлены на сервер «Prometheus» для визуализации и анализа.

Компонент «postgres_exporter» – инструмент для сбора и экспорта метрик PostgreSQL, таких как статистика по базе данных, нагрузка на сервер, количество запросов и т.д. Он разработан для работы с PostgreSQL и предоставляет данные в формате, удобном для системы «Prometheus». С помощью «postgres_exporter» можно отслеживать производительность PostgreSQL, выявлять проблемы и оптимизировать настройки базы данных.

Компонент «sql_exporter» – инструмент для экспорта данных из SQL-запросов в формат, удобный для анализа и визуализации. Он позволяет получать информацию о структуре таблиц, данных, индексах, статистике и других параметрах базы данных. Полезен для анализа производительности системы, выявления проблем и оптимизации запросов.

### Условия применения

Компоненты могут использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем GNU/Linux.

### Ограничения по эксплуатации

Для подключения целевой СУБД к компоненту «Jatoba data safe» требуется указывать IP–адрес в строке подключения утилит к СУБД и не использовать параметр «localhost».

Символы «коммерческое эт» «@», «амперсанд» «&», «равно» «=», «вопросительный знак» «?» и «двоеточие» «:», не рекомендуется использовать в именах пользователей и в паролях, для исключения ошибки в строке подключения.

Эти символы используются для разделения параметров строки подключения.

Ограничений по совместимости с другими компонентами нет.

## Архитектура системы мониторинга

Архитектура системы мониторинга основана на том, что:

- 
- 

<!-- -->

- 
- 

<!-- -->

- 
- 
- 

на серверах целевых СУБД устанавливается экспортера «node_exporter» (см. р. 4);на целевых СУБД устанавливаются утилиты сбора метрик, такие как: экспортер «postgres_exporter» (см. р. 5);экспортер «sql_exporter» (см. р. 6);система «Prometheus» собирает их в своём хранилище (см. р. 7);компонент «Jatoba data safe» использует данные хранилища «Prometheus» для отображения их в разделе «Мониторинг»;утилита «Alertmanager» обеспечивает контроль над пороговыми значениями и рассылку уведомлений (см. р. 8).В зависимости от количества СУБД, подключенных к мониторингу и общей нагрузки, система «Prometheus» может быть установлена на отдельном сервере. В этом случае «JDS» будет получать данные по сети, что увеличит нагрузку на неё.

Целесообразнее компонент JDS и систему «Prometheus» устанавливать на одном сервере. Такая конфигурация сделает данный сервер полноценным сервером мониторинга и безопасности.

Для каждой наблюдаемой СУБД должны быть настроены все экспортёры.

В рассматриваемом примере на ОС Ubuntu 22.04 используются параметры сети и программного обеспечения, приведенные в таблице Таблица 2.1.

<table>
<caption><p>Таблица . – Конфигурация стенда</p></caption>
<colgroup>
<col style="width: 5%" />
<col style="width: 18%" />
<col style="width: 19%" />
<col style="width: 20%" />
<col style="width: 11%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>№</strong></th>
<th style="text-align: center;"><strong>Имя сервера</strong></th>
<th style="text-align: center;"><strong>IP-адрес</strong></th>
<th style="text-align: center;"><strong>ПО</strong></th>
<th style="text-align: center;"><strong>Port</strong></th>
<th style="text-align: center;"><strong>Роль</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: left;">u602doc-jds01</td>
<td style="text-align: left;">10.116.102.41/24</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Сервер мониторинга</td>
</tr>
<tr>
<td style="text-align: center;">1.1</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">JDS</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">1.2</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Prometheus</td>
<td style="text-align: left;">9090</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Alert manager</td>
<td style="text-align: left;"><p>9093</p>
<p>22</p></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">2</td>
<td style="text-align: left;">u602doc-pgp01</td>
<td style="text-align: left;">10.116.102.45/24</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Целевая СУБД</td>
</tr>
<tr>
<td style="text-align: center;">2.1</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">node_exporter</td>
<td style="text-align: left;">9100</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">2.2</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">postgres_exporter</td>
<td style="text-align: left;">9187</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">2.3</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">sql_exporter</td>
<td style="text-align: left;">9399</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">3</td>
<td style="text-align: left;">u602doc-ldap01</td>
<td style="text-align: left;">10.116.102.47/24</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Целевая СУБД</td>
</tr>
<tr>
<td style="text-align: center;">3.1</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">node_exporter</td>
<td style="text-align: left;">9100</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">3.2</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">postgres_exporter</td>
<td style="text-align: left;">9187</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;">3.3</td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">sql_exporter</td>
<td style="text-align: left;">9399</td>
<td style="text-align: left;"></td>
</tr>
</tbody>
</table>

Таблица . – Конфигурация стенда

Схема стенда представлена на рисунке Рисунок 2.1.

![](./assets/images/monitoring/media/image3.png)

Рисунок . – Схема стенда

## Установка и настройка целевых СУБД

### Установка СУБД

Установка СУБД «Jatoba» выполняется от имени пользователя, обладающего административными привилегиями в системе, в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по установке».

### Настройка конфигурационных файлов

Целевые СУБД должны быть настроены на приём подключений

В конфигурационном файле «postgresql.conf», в разделе «CONNECTIONS AND AUTHENTICATION» раскомментирован и установлен параметр:

> listen_addresses = '\*'



![](@site/docs/assets/images/monitoring/media/image4.png)

Рисунок . - Конфигурационный файл «postgresql.conf»

В конфигурационном файле «pg_hba.conf» разрешены подключения компонента sql_exporter к СУБД с локального интерфейса:

> host all sql_exporter 127.0.0.1/32 scram-sha-256



![](@site/docs/assets/images/monitoring/media/image5.png)

Рисунок . – Конфигурационный файл «pg_hba.conf»

После внесения изменений в конфигурационный файл «pg_hba.conf» необходимо выполнить перезагрузку параметров СУБД и проверку статуса ее работы с помощью команд:

```
# systemctl reload jatoba-18
```
>
```
# systemctl status jatoba-18
```

## Установка экспортера «jatoba\*_node_exporter»

Экспортер «jatoba*_node_exporter» должен быть установлен на всех целевых СУБД.

Экспортер позволяет снимать различные метрики с Linux-подобных операционных систем. Это агент, который передает серверу «Prometheus» аппаратные и программные показатели работы GNU/Linux.

Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

```
# apt-get install jatoba<ver>-node-exporter
```



![](@site/docs/assets/images/monitoring/media/image6.png)

Рисунок . – Установка пакета «jatoba\*_node_exporter»

В результате установки пакета будет создан пользователь ОС «node_exporter_usr», от которого будет производиться запуск утилиты.



![](@site/docs/assets/images/monitoring/media/image7.png)

Рисунок . -пользователя «node_exporter_usr»

У данного пользователя нет интерактивной оболочки для входа.

Автоматически будет создан файл конфигурации сервиса по адресу:

> /usr/lib/systemd/system/jatoba<ver>_node_exporter.service



![](@site/docs/assets/images/monitoring/media/image8.png)

Рисунок . – Содержание конфигурационного файла

Далее требуется запустить службу экспортера, включить ее в автозапуск и проверить статус работы:

```
# systemctl enable jatoba<ver>_node_exporter
```
>
```
# systemctl start jatoba<ver>_node_exporter
```
>
```
# systemctl status jatoba<ver>_node_exporter
```



![](@site/docs/assets/images/monitoring/media/image9.png)

Рисунок . - Проверка сервиса «jatoba\*_node_exporter»

Чтобы проверить статус работы экспортера нужно в браузере открыть веб-интерфейс экспортера:

```
# localhost:9100

# http://0.0.0.0:9100
```




![](@site/docs/assets/images/monitoring/media/image10.png)

Рисунок . – Веб-интерфейс утилиты «node_exporter»

В рассматриваемом примере на целевой СУБД:

- 

u602doc-pgp01 IP - 10.116.102.45 веб-интерфейс утилиты «node_exporter» проверяется по URL:# http://10.116.102.45:9100



![](@site/docs/assets/images/monitoring/media/image11.png)

Рисунок . – Веб-интерфейс утилиты «node_exporter» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- 

u602doc-ldap01 IP-10.116.102.47 веб-интерфейс утилиты «node_exporter» проверяется по URL:# http://10.116.102.47:9100



![](@site/docs/assets/images/monitoring/media/image12.png)

Рисунок . – Веб-интерфейс утилиты «node_exporter» на целевой СУБД u602doc-ldap01 IP-10.116.102.47

По умолчанию экспортер использует все доступные коллекторы метрик.

Состав снимаемых метрик отображается на странице:

> localhost:9100/metrics

При необходимости может быть изменен состав используемых коллекторов с помощью опций командной строки:

> ./jatoba<ver>_node_exporter --\[no-\]collector.netdev --\[no-\]collector.netstat

Если необходимо изменить значения адреса веб-интерфейса (:9100), node_exporter запускается с опцией --web.listen-address:

> ./jatoba<ver>_node_exporter --web.listen-address=:9101

:::info Дополнительная информация
Изменение состава метрик либо адреса веб-интерфейса целесообразнее сохранить в файле сервиса «node_exporter.service». Иначе при перезагрузке ОС настройки компонента вернутся к изначальным, хранящимся в файле сервиса
:::

Ручной запуск утилиты производится командой:

> ./jatoba<ver>_node_exporter

Никакой конфигурации экспортера не требуется.

## Установка экспортера «jatoba\*_postgres_exporter»

Экспортер «jatoba\*postgres_exporter» должен быть установлен на всех целевых СУБД, и в той же БД.

С помощью данного экспортера снимаются метрики с сервера PostgreSQL (Jatoba). Это агент, написанный на языке Golang, подключающийся к заданному источнику данных (БД) и по запросу сервера «Prometheus» возвращающий ему значения метрик. Состав метрик заранее предопределен и их значения вычисляются с помощью фиксированных  
SQL-запросов.

### Установка утилиты и службы «jatoba\*_postgres_exporter»

Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

```
# apt-get install jatoba<ver>-postgres-exporter
```



![](@site/docs/assets/images/monitoring/media/image13.png)

Рисунок . – Установка пакета jatoba\*-postgres-exporter

В результате установки пакета будет создан:

- 

> файл запуска по адресу: /usr/jatoba-<ver>/bin/postgres_exporter

- 

> конфигурационный файл по адресу:   /usr/jatoba-<ver>/monitoring/default/postgres_exporter

- 

пользователь ОС «postgres_exporter_usr», от которого будет производиться запуск сервиса.У данного пользователя нет интерактивной оболочки для входа.

### Создание пользователя СУБД «postgres_exporter»

Для соединения утилиты с СУБД создать пользователя СУБД «postgres_exporter» SQL-командой:

> CREATE ROLE postgres_exporter SUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'Password';



![](@site/docs/assets/images/monitoring/media/image14.png)

:::warning Важная информация
В рассматриваемом примере пользователь СУБД «postgres_exporter» является привилегированным пользователем
:::

Рисунок . – Создание роли «postgres_exporter»

### Настройка переменных окружения

Дальнейшая настройка утилиты требует внесения параметров подключения в файле переменных окружения «postgres_exporter», командой:

```
# gedit /usr/jatoba-<ver>/monitoring/default/postgres_exporter
```

Необходимо настроить имя пользователя, пароль и параметры SSL-подключения в файле переменных окружения «postgres_exporter».

Строка подключения выполнена в формате схемы URL. Основная форма URI подключения имеет синтаксис:

> postgresql://\[пользователь@\]\[сервер\]\[/база_данных\]\[?указание_параметра\]
>
> где пользователь:
>
> имя_пользователя\[:пароль\]
>
> и сервер:
>
> \[узел\]\[:порт\]\[,...\]
>
> и указание_параметра:
>
> имя=значение\[&...\]

В качестве обозначения схемы URI может использоваться postgresql:// или postgres://. Остальные части URI являются необязательными. В следующих примерах показан допустимый синтаксис URI:

> postgresql://
>
> postgresql://localhost
>
> postgresql://localhost:5433
>
> postgresql://localhost/mydb
>
> postgresql://user@localhost
>
> postgresql://user:secret@localhost
>
> postgresql://other@localhost/otherdb?connect_timeout=10&application_name=myapp
>
> postgresql://host1:123,host2:456/somedb?target_session_attrs=any&application_name=myapp

В рассматриваемом примере на целевой СУБД:

- 

> u602doc-pgp01 IP - 10.116.102.45 строка подключения утилиты к СУБД имеет следующий вид:DATA_SOURCE_NAME="postgresql://postgres_exporter:Password@10.116.102.45:5432/postgres?sslmode=disable"

:::info Дополнительная информация
Обратите внимание, что необходимо прописывать общий, а не локальный адрес сетевого интерфейса
:::



![](@site/docs/assets/images/monitoring/media/image15.png)

Рисунок . – Содержание файла «postgres_exporter.default» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- 

> u602doc-ldap01 IP-10.116.102.47 строка подключения утилиты к СУБД имеет следующий вид:DATA_SOURCE_NAME="postgresql://postgres_exporter:Password@10.116.102.47:5432/postgres?sslmode=disable"



![](@site/docs/assets/images/monitoring/media/image16.png)

Рисунок .– Содержание файла «postgres_exporter.default» на целевой СУБД u602doc-ldap01 IP-10.116.102.47

### Запуск утилиты «postgres_exporter»

Обновить конфигурацию system командой:

```
# systemctl daemon-reload
```

Запустить службу экспортера, включить ее автозапуск и проверить статус работы:

```
# systemctl start jatoba<ver>_postgres_exporter
```
>
```
# systemctl enable jatoba<ver>_postgres_exporter
```
>
```
# systemctl status jatoba<ver>_postgres_exporter
```



![](@site/docs/assets/images/monitoring/media/image17.png)

Рисунок . – Запуск и вывод статуса службы «postgres_exporter»

Чтобы проверить статус работы экспортера нужно в браузере открыть веб-интерфейс экспортера:

localhost:9187

http://0.0.0.0:9187



![](@site/docs/assets/images/monitoring/media/image18.png)

Рисунок 5.6 – Веб-интерфейс «postgres_exporter»

В рассматриваемом примере на целевой СУБД:

- 

u602doc-pgp01 IP - 10.116.102.45 веб-интерфейс утилиты «node_exporter» проверяется по URL:http://10.116.102.45:9187



![](@site/docs/assets/images/monitoring/media/image19.png)

Рисунок . – Веб-интерфейс «postgres_exporter» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- 

u602doc-ldap01 IP-10.116.102.47 веб-интерфейс утилиты «node_exporter» проверяется по URL:http://10.116.102.47:9187



![](@site/docs/assets/images/monitoring/media/image20.png)

Рисунок . – Веб-интерфейс «postgres_exporter» на целевой СУБД u602doc-ldap01 IP-10.116.102.47

При успешном подключении к БД на странице localhost:9187/metrics будет показан список значений метрик с префиксом «pg_» в имени.

Если необходимо изменить значение адреса веб-интерфейса (по умолчанию :9187), postgres_exporter запускается с опцией --web.listen-address, например:

> export DATA_SOURCE_NAME=postgresql://postgres:secret@127.0.0.1
>
> ./jatoba\*_postgres_exporter --web.listen-address=:9188

:::info Дополнительная информация
Изменение адреса веб-интерфейса целесообразнее сохранить в файле сервиса «postgres_exporter». Иначе при перезагрузке ОС настройки компонента вернуться к изначальным, хранящимся в файле сервиса.
:::

Полный список опций командной строки postgres_exporter можно вывести, если запустить его с опцией --help.

## Установка экспортера «jatoba\*_sql_exporter»

Экспортер «jatoba\*_SQL_exporter» должен быть установлен на всех целевых СУБД и в той же БД.

Данный экспортер можно использовать для расширения состава метрик, снимаемых с сервера PostgreSQL стандартным экспортером «jatoba\*_postgres_exporter» (см. п. 5), а также для метрик компонента «SQL_Firewall».

Это агент, также написанный на языке Golang, который подключается к заданному источнику данных (БД) и забирает с него метрики по pull-запросу сервера «Prometheus».

Состав собираемых метрик и SQL-запросов, которые их возвращают, полностью конфигурируемы пользователем. Используемые SQL-запросы группируются в так называемые коллекторы, состав которых легко может быть расширен. Также в коллекторе для каждого возвращаемого запросом поля задается указатель на соответствующую метрику.

### Установка утилиты и службы «sql_exporter»

Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

```
# apt-get install jatoba<ver>-sql-exporter
```



![](@site/docs/assets/images/monitoring/media/image21.png)

Рисунок . – Установка пакета «jatoba\*-sql-exporter»

В результате установки пакета будет создан:

- 

> файл запуска по адресу: /usr/jatoba-<ver>/bin/sql_exporter

- 

> конфигурационный файл по адресу:   /usr/jatoba-<ver>/monitoring/default/sql_exporter.yml

- 

> конфигурационный файл переменных окружения по адресу/usr/jatoba-<ver>/monitoring/default/sql_exporter

- 

> конфигурационный файл для сбора данных узлов кластера ja_Hipe_Cluster/Citus по адресу:/usr/jatoba-<ver>/monitoring/default/citus.collector.yml

- 

> конфигурационный файл для сбора данных компонента SQL_Firewall по адресу:/usr/jatoba-<ver>/monitoring/default/sqlfw.collector.yml

- 

пользователь ОС «sql_exporter_usr», от которого будет производиться запуск сервиса.У данного пользователя нет интерактивной оболочки для входа.

### Настройка переменных окружения

Проверить параметры экспортера в файле переменных окружения «sql_exporter», выполнив команду редактирования:

```
# gedit /usr/jatoba-<ver>/monitoring/default/sql_exporter
```
```
# gedit /usr/jatoba-<ver>/monitoring/default/sql_exporter
```
```
# gedit /usr/jatoba-<ver>/monitoring/default/sql_exporter
```

Основным из параметров является путь к конфигурационному файлу «sql_exporter.yml» в строке параметра CONF_FILE.

> CONF_FILE=/usr/jatoba-<ver>/monitoring/default/sql_exporter.yml

Настройка и расположение файла «sql_exporter.yml» приведены в п. 6.4 настоящего документа.



![](@site/docs/assets/images/monitoring/media/image22.png)

Рисунок . – Содержание файла переменных окружения «sql_exporter»

### Создание пользователя СУБД «sql_exporter»

Для соединения утилиты с СУБД необходимо создать пользователя СУБД «sql_exporter» SQL-командой:

> CREATE ROLE sql_exporter SUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'Password';



![](@site/docs/assets/images/monitoring/media/image23.png)

:::warning Важная информация
В рассматриваемом примере пользователь СУБД «sql_exporter» является привилегированным пользователем
:::

Рисунок . – Создание роли «sql_exporter»

### Настройка параметров экспортера и подключения к БД в файле «sql_exporter.yml»

Основным параметром для настройки параметров экспортера и подключения к БД в файле «sql_exporter.yml» является параметр «data_source_name».

Требуется открыть файл для редактирования командами:

> # gedit /usr/jatoba-<ver>/monitoring/default/sql_exporter.yml

Строка подключения выполнена в формате схемы URL. Синтаксис строки описан в п. 5.3 настоящего документа.

В рассматриваемом примере на целевой СУБД:

- 

> u602doc-pgp01 IP - 10.116.102.45 строка подключения утилиты к СУБД имеет следующий вид:data_source_name: 'postgresql://sql_exporter:Password@10.116.102.45:5432/postgres?sslmode=disable'

:::warning Важная информация
Необходимо обратить внимание на то, что в конфигурационном файле sql_exporter.yml для параметра data_source_name необходимо указывать внешний IP-адрес узла, а не локальный IP-адрес сетевого интерфейса (127.0.0.1).
:::



![](@site/docs/assets/images/monitoring/media/image24.png)

Рисунок . – Содержание файла «sql_exporter.yml», строка «data_source_name» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- 

> u602doc-ldap01 IP-10.116.102.47 строка подключения утилиты к СУБД имеет следующий вид:data_source_name: 'postgresql://sql_exporter:Password@10.116.102.47:5432/postgres?sslmode=disable'



![](@site/docs/assets/images/monitoring/media/image25.png)

:::info Дополнительная информация
В случае необходимости мониторинга компонента SQL Firewall в конфигурационном файле sql_exporter.yml в поле «collectors» через запятую необходимо добавить значение sql_firewall (см. рисунокРисунок 6.6).
:::

Рисунок . – Содержание файла «sql_exporter.yml», строка «data_source_name» на целевой СУБД u602doc-ldap01 IP-10.116.102.47



![](@site/docs/assets/images/monitoring/media/image26.png)

Рисунок . – Добавление мониторинга компонента SQL Firewall в конфигурационном файле sql_exporter.yml

Сохранить внесенные изменения.

В дистрибутиве содержится файл с подготовленными метриками для мониторинга СУБД «Jatoba» «postgres.collector.yml», который по умолчанию использует «jatoba\*_SQL_exporter».

### Запуск утилиты «jatoba\*_sql_exporter»

Обновить конфигурацию systemd:

```
# systemctl daemon-reload
```

Запустить службу экспортера, включить ее в автозапуск и проверить статус работы:

```
# systemctl start jatoba\<ver>_sql_exporter
# systemctl enable jatoba\<ver>_sql_exporter
# systemctl status jatoba\<ver>_sql_exporter
```



![](@site/docs/assets/images/monitoring/media/image27.png)

Рисунок . – Установка и запуск службы «sql_exporter»

Чтобы проверить статус работы экспортера, нужно в браузере открыть веб-интерфейс экспортера:

> localhost:9399
>
> http://0.0.0.0:9399



![](@site/docs/assets/images/monitoring/media/image28.png)

Рисунок . – Веб-интерфейс «sql_exporter»

При нажатии на ссылку metrics будет выведена сводная информация обо всех собираемых параметрах СУБД.

В рассматриваемом примере на целевой СУБД:

- 

> u602doc-pgp01 IP - 10.116.102.45 веб-интерфейс утилиты «sql_exporter» проверяется по URL:http://10.116.102.45:9399



![](@site/docs/assets/images/monitoring/media/image29.png)

Рисунок . – Веб-интерфейс «sql_exporter» на целевой СУБД u602doc-pgp01 IP - 10.116.102.45

- 

> u602doc-ldap01 IP-10.116.102.47 веб-интерфейс утилиты «node_exporter» проверяется по URL:http://10.116.102.47:9399



![](@site/docs/assets/images/monitoring/media/image30.png)

Рисунок . – Веб-интерфейс «sql_exporter» на целевой СУБД u602doc-ldap01 IP-10.116.102.47

При успешном подключении к БД и отсутствии ошибок в конфигурации на странице localhost:9399/metrics будет показан список значений снятых метрик.

:::info Дополнительная информация
При установке и настройке компонента «SQL_Firewall» в этот список будут входить статистические данные по выявленным SQL-инъекциями. Описание предоставляемых статистических данных компонента «SQL_Firewall» приводится в документе «Компонент SQL_Firewall. Выявление и предотвращение исполнения нетипичных SQL-запросов» 643.72410666.00067-08 98 01-17.
:::

Если необходимо изменить значения адреса веб-интерфейса (:9399), jatoba\*_sql_exporter запускается с опцией -web.listen-address, например:

> ./jatoba<ver>_sql_exporter -web.listen-address :9398

:::info Дополнительная информация
Изменение адреса веб-интерфейса целесообразнее сохранить в файле сервиса «sql_exporter». Иначе при перезагрузке ОС настройки компонента вернуться к изначальным, хранящимся в файле сервиса.
:::

Полный список опций командной строки sql_exporter можно вывести, если запустить его с опцией -help.

## Система «Prometheus»

«Prometheus» – система мониторинга различных программных систем и сервисов. «Prometheus» собирает и сохраняет метрики в виде временных рядов данных. Информация о каждой метрике хранится вместе с отметкой времени, когда она была записана, и опционным набором меток (labels), представляющих пары «ключ: значение». Сами метрики являются числовыми измерениями, которые по типу могут быть монотонно возрастающими значениями счетчиков (counter) или произвольно изменяющимися значениями датчиков (gauge).

Основными компонентами системы «Prometheus» являются:

- 
- 
- 

Сервер «Prometheus», который собирает и сохраняет метрики в своей встроенной базе данных TSDB;Экспортеры данных, которые по запросу сервера снимают метрики с заданных сервисов (targets) и возвращают их серверу;Web UI, с помощью которого можно исследовать собранные метрики с помощью языка запросов promQL.Документация по использованию системы находится на официальном сайте разработчика по адресу: <https://prometheus.io>.

### Установка системы «Prometheus»

Документация по использованию системы находится на официальном сайте разработчика по адресу: <https://prometheus.io>.

Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

> # apt-get install jatoba<ver>-prometheus



![](@site/docs/assets/images/monitoring/media/image31.png)

Рисунок . – Установка пакета «jatoba<ver>-prometheus»

В результате установки пакета будет создан:

- 

> файл переменных окружения сервиса по адресу:usr/jatoba-<ver>/monitoring/default/prometheus

- 

> файл сервиса по адресуusr/lib/system/system/jatoba<ver>_prometheus.service

- 

> файл конфигурации, адаптированный под использование с СУБД «Jatoba» по адресу:usr/jatoba-<ver>/monitoring/default/prometheus.yml

- 

> база данных по адресу:/opt/prometheus

- 

> служебные директории веб-консоли по адресу:usr/jatoba-<ver>/monitoring/prometheus

- 

пользователь ОС «prometheus», от которого будет производиться запуск сервиса.У данного пользователя нет интерактивной оболочки для входа и нет домашней директории.

### Конфигурация системы «Prometheus»

Необходимо задать конфигурацию сервера в формате YAML выполнив команду редактирования:

> # gedit /usr/jatoba-<ver>/monitoring/default/prometheus.yml

В конфигурации важными параметрами являются:

- 
- 
- 

частота опроса метрик (scrape_interval);время ожидания ответа (scrape_timeout);HTTP, IP адреса (targets).Для параметра «targets» возможно указать одну или несколько целей, для получения метрик с экспортера, при этом параметр будет иметь синтаксис, с одной целью:

> \- targets: \['X.X.X.X:port'\]

и с несколькими целями

> \- targets: \['X.X.X.X:port', 'X.X.X.X:port'\]

В рассматриваемом примере, в конфигурационном файле prometheus.yml устанавливаются IP-адреса серверов, находящихся под наблюдением.

:::info Дополнительная информация
Обратите внимание, что необходимо прописывать общий, а не локальный адрес сетевого интерфейса
:::

Ниже приведены примеры таких «job-name».

#### Примеры блока «postgres-exporter»

Пример стандартного «postgres-exporter» экспортера с двумя целями:

> # стандартный экспортер данных для PostgreSQL
>
> \- job_name: "postgres-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.102.45:9187','10.116.102.47:9187'\]
>
> labels:
>
> alias: postgres
>
> dbms: 'u602doc-export01'



![](@site/docs/assets/images/monitoring/media/image32.png)

Рисунок . - Стандартный экспортер данных для PostgreSQL

Пример стандартного «postgres-exporter» экспортера для двух «job-name» с одной и двумя целями:

```
# Экспортер данных для PostgreSQL сервера srv1
```
>
> \- job_name: "srv1-postgres-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.103.45:9187'\]
>
> labels:
>
> alias: postgres
>
> dbms: '10.116.103.45'
>
```
# Экспортер данных для PostgreSQL сервера srv2 и srv3
```
>
> \- job_name: "srv2-srv3-postgres-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.103.46:9187', '10.116.103.47:9187'\]
>
> labels:
>
> alias: postgres
>
> dbms: '10.116.103.46'

#### Примеры блока «sql-exporter»

Пример экспортера данных для SQL с двумя целями:

```
# экспортер данных для SQL
```
>
> \- job_name: "sql-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.102.45:9399','10.116.102.47:9399'\]
>
> labels:
>
> alias: postgres
>
> dbms: '10.116.103.45'

Пример экспортера SQL для двух «job-name» с одной и двумя целями:

```
# Экспортер данных для SQL сервера srv1
```
>
> \- job_name: "srv1-sql-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.103.45:9399'\]
>
> labels:
>
> alias: postgres
>
> dbms: '10.116.103.45'
>
```
# Экспортер данных для SQL сервера srv2 и srv3
```
>
> \- job_name: "srv2-srv3-sql-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.103.46:9399','10.116.103.47:9399'\]
>
> labels:
>
> alias: postgres
>
> dbms: '10.116.103.46'

При использовании виджета «jaDog» необходимо добавить параметр labels:cluster_jadog и указать в нем название кластера, которое соответствует названию в цели кластера (см. п. 11.2 данного руководства), например:

```
# экспортер данных для SQL
```
>
> \- job_name: "node_sql"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.102.45:9399','10.116.102.47:9399'\]
>
> labels:
>
> alias: postgres
>
> dbms: '10.116.103.45'
>
> **cluster_jadog: 'jadog'**

#### Примеры блока «node-exporter»

Пример экспортера данных «node-exporter» для GNU/ Linux с двумя целями:

```
# экспортер данных для Linux
```
>
> \- job_name: "node-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.102.45:9100','10.116.102.47:9100'\]
>
> labels:
>
> alias: os
>
> dbms: '10.116.103.45'

Пример экспортера данных «node-exporter» для GNU/Linux для двух «job-name» с одной и двумя целями:

```
# Экспортер данных для Linux сервера srv1
```
>
> \- job_name: "srv1-node-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.103.46:9100'\]
>
> labels:
>
> alias: os
>
> dbms: '10.116.103.46'
>
```
# Экспортер данных для Linux сервера srv2 и srv3
```
>
> \- job_name: "srv2-srv3-node-exporter"
>
> metrics_path: '/metrics'
>
> static_configs:
>
> \- targets: \['10.116.103.46:9100','10.116.103.47:9100'\]
>
> labels:
>
> alias: os
>
> dbms: '10.116.103.46'

В конфигурационном файле prometheus.yml, в строке «targets», допустимо указывать любое количество адресов экспортеров, относящихся к одной или разным СУБД.

Обработка критических событий и вычисление rules не заданы, хотя соответствующие блоки присутствуют в конфигурации.

Полное описание параметров конфигурации сервера приведено в документации <https://prometheus.io/docs/prometheus/latest/configuration/configuration/>

### Запуск системы «Prometheus»

Перед запуском сервиса требуется удостоверится в корректности содержания файла сервиса.

Просмотр файла осуществляется командой в терминале ОС:

```
# gedit /usr/lib/systemd/system/jatoba<ver>/prometheus.service
```



![](@site/docs/assets/images/monitoring/media/image33.png)

Рисунок . – Содержание файла сервиса «jatoba18_prometheus.service»

Обновить конфигурацию systemd:

```
# systemctl daemon-reload
```

Запустить службу система, включить ее в автозапуск и проверить статус работы:

```
# systemctl start jatoba\<ver>_prometheus
# systemctl enable jatoba\<ver>_prometheus
# systemctl status jatoba\<ver>_prometheus
```



![](@site/docs/assets/images/monitoring/media/image34.png)

Рисунок . Установка и запуск службы системы «Prometheus»

Статус запущенного сервера «Prometheus» можно проверить с помощью web UI, открыв в браузере страницу с адресом [http://localhost:9090](http://localhost:9090/).



![](@site/docs/assets/images/monitoring/media/image35.png)

Рисунок . – Веб интерфейс системы «Prometheus»

На вкладке «Status» можно посмотреть текущую конфигурацию и опции запуска сервера, статус встроенной базы данных tsdb и заданные цели (targets).

В окне «Expression» можно ввести название метрики или выражение на языке promQL и, нажатием на кнопку «Execute», отобразить результаты в виде таблицы или графика.

Руководство по языку запросов promQL располагается по адресу: <https://prometheus.io/docs/prometheus/latest/querying/basics/>

Полный список собираемых метрик можно открыть при нажатии на кнопку «Open Metrics Explorer» слева от кнопки «Execute» или отобразить в окне «Expressions» при вводе первых символов наименования метрики, если включена опция автодополнения.

Список значений собираемых метрик для каждой цели можно отобразить на странице веб-интерфейса соответствующего экспортера данных, например, localhost:9090/metrics.



![](@site/docs/assets/images/monitoring/media/image36.png)

Рисунок . – Список значений собираемых метрик

В рассматриваемом примере подключение к системе «Prometheus» используется адрес:

> http://10.116.102.41:9090/

Перейдя в меню «Target» отразятся статистические данные наблюдаемых СУБД.



![](@site/docs/assets/images/monitoring/media/image37.png)

Рисунок . – Страница целей системы «Prometheus»

## Утилита «Alertmanager»

Alertmanager — это инструмент для управления и обработки оповещений в системе мониторинга Prometheus. Он выполняет следующие функции:

- 
- 
- 
- 

группировка оповещений: группирует похожие оповещения для снижения шума и предотвращения дублирования;удаление дубликатов: гарантирует отправку уникальных оповещений без повторений;маршрутизация и приглушение оповещений: позволяет определять правила и конфигурации для маршрутизации оповещений нужным получателям на основе их важности или других критериев. Также можно временно приглушить оповещения во время обслуживания или определённых периодов;уведомление о тревоге: интегрируется с различными каналами связи, такими как электронная почта, Slack, PagerDuty и другие, позволяя отправлять уведомления о тревогах нужным людям или командам.

### Установка утилиты и службы «alertmanager»

Установка пакета выполняется в соответствии с Руководством по установке, из локального репозитория командой:

```
# apt-get install jatoba<ver>-alertmanager
```



![](@site/docs/assets/images/monitoring/media/image38.png)

Рисунок . – Установка пакета «jatoba\*-alertmanager»

В результате установки пакета будет создан:

- 

файл запуска по адресу:/usr/jatoba-<ver>/bin/alertmanager

- 

конфигурационный файл по адресу: /usr/jatoba-<ver>/monitoring/default/alertmanager.yml

- 

служба по адресу: /usr/lib/systemd/jatoba<ver>_alertmanager.service

- 

пользователь ОС «alertmanager», от которого будет производиться запуск сервиса.У данного пользователя нет интерактивной оболочки для входа и нет домашней директории.

### Настройка параметров утилиты

Утилита «AlertManager» отправляет уведомления через каналы:

- 
- 
- 

SMTP; Telegram;Zulip.Настройка каждого из каналов выполняется файле в конфигурационном файле «alertmanager.yml». После установки пакета в конфигурационном файле будет установлены параметры по умолчанию.



![](@site/docs/assets/images/monitoring/media/image39.png)

Рисунок . – Параметры по умолчанию

#### SMTP

В узле «global» необходимо указать данные для подключения к почтовому серверу. Целесообразно использовать специальную, неперсонифицированную, техническую учетную запись почты, от имени которой будет рассылаться предупреждения.

Редактирование конфигурационного файла выполняется командой:

\# gedit /usr/jatoba-<ver>/monitoring/default/alertmanager.yml

В узле «route» указываются настройки агрегирования предупреждений.

В узле «receivers» в узле «email_general» указываются настройки получателя. Используется общий узел для всех получателей, email получателя подставляется из метки «emailto» с помощью шаблона.

global:

smtp_smarthost: mail.domain.ru:587

smtp_from: domain_name@domain.ru

smtp_auth_user_name: user_name@domain.ru

smtp_auth_password: password

smtp_require_tls: true

route:

receiver: email_general

group_by: \[emailto\]

group_wait: 30s

group_interval: 5m

repeat_interval: 3h

receivers:

\- name: email_general

email_configs:

\- send_resolved: true

to: '{{ .CommonLabels.emailto }}'



![](@site/docs/assets/images/monitoring/media/image40.png)

Рисунок . - Конфигурационный файл «alertmanager.yml»

#### Telegram

Настройка получения уведомлений (предупреждений) от утилиты «AlertManager» в Telegram состоит из нескольких этапов:

- 
- 
- 

Создать в Telegram бота;Создание канала в Telegram;открытие канала передачи предупреждений в утилите «AlertManager».**Создание в Telegram бота**

Бот должен создаваться через @BotFather официальный сервис Telegram для создания, настройки и управления чат‑ботами.

Сервис находится через оно поиска в Telegram.



![](@site/docs/assets/images/monitoring/media/image41.png)

Рисунок . – Поиск сервиса @BotFather

Нажать кнопку «Старт».



![](@site/docs/assets/images/monitoring/media/image42.png)

Рисунок . – Создание бота

Выполните команду создания бота и следуем инструкциям, задаем имя JDS alerts, а username – jds_alertmanager_bot.

Выполнить команду создания бота:

/newbot - create a new bot

Задайте уникальное имя бота:

jds_alertmanager_bot

my_jds_alertmanager_bot

При создании бота выдается его токен. Далее он потребуется в настройках.



![](@site/docs/assets/images/monitoring/media/image43.png)

Рисунок . – Вывод информации о боте

Далее необходимо выяснить идентификатор чата (канала), в который будут отправляться предупреждения. Это можно сделать, например, с помощью веб-запроса.

Пишем в чат произвольное сообщение, тэгируя бота:



![](@site/docs/assets/images/monitoring/media/image44.png)

Рисунок 8.7 – Сообщение с тэгированием бота

Добавьте новый маршрут, нового получателя и указываем местонахождение шаблонов уведомлений в конфигурационный файл alertmanager.yml.

По указанному пути к файлам шаблонов создайте преднастроенный шаблон - файл telegram.jds.tmpl следующего содержания:

> {{ define "telegram.jds" }}
>
> {{ range .Alerts }}
>
> {{ if eq .Status "firing"}}\<b\>{{ .Status \| toUpper }}\</b\>&#x1F525{{ else }}\<b\>{{ .Status \| toUpper }}\</b\>&#x2705{{ end }}
>
> {{- if .Annotations.summary }}
>
> {{ .Annotations.summary }}
>
> {{- end }}
>
> {{- if .Labels.dbms }}
>
> \<b\>Database:\</b\> {{ .Labels.dbms }}
>
> {{- end }}
>
> {{- if .Annotations.object }}
>
> \<b\>Object:\</b\> {{ .Annotations.object }}
>
> {{- end }}
>
> {{- if .Labels.emailto }}
>
> \<b\>EmailTo:\</b\> {{ .Labels.emailto }}
>
> {{- end }}
>
> {{- if .Labels.alertid }}
>
> alert_id: \<code\>{{ .Labels.alertid }}\</code\>
>
> {{- end }}
>
> {{ end }}
>
> {{ end }}

Перезапустите «Alertmanager» командой:

```
# systemctl restart alertmanager
```

#### Zulip

Конфигурирование утилиты «AlertManager» и приложения «Zulip» состоит из нескольких этапов. Создание канала и бота в приложении «Zulip» и открытие канала передачи предупреждений в утилите «AlertManager».

Создание канал и бота в приложении «Zulip» требует следующих действий:

- 

Открыть приложение Zulip и перейти в меню «Каналы»;

![](@site/docs/assets/images/monitoring/media/image45.png)

Рисунок . – Создание канала

- 
- 
- 

Создать канал; Установить настройки нового канала;Задать название канала и описание;

![](@site/docs/assets/images/monitoring/media/image46.png)

Рисунок . – Настройки канала

- 

Нажать кнопку «Добавить еще подписчиков»В качестве первого подписчика автоматически будет выбран создатель канала.

- 
- 

Нажать кнопку «Создать»;Создать бота;Через пиктограмму личного профиля, расположенную в правом верхнем углу приложения Zulip перейти в «Настройки». Выбрать меню «Боты» и нажать кнопку «Добавить нового бота».

В открывшимся окне «Добавить нового бота»:

- 
- 
- 
- 

Выбрать тип бота – Входящий вебхук;Имя (бота) – уникальное имя (в рассматриваемом примере используется имя «alert»);Адрес электронной почты бота – допустимо использовать имя бота. Домен почты подключится автоматически;Аватар – не обязательно.

![](@site/docs/assets/images/monitoring/media/image47.png)

Рисунок . – Создание бота в Zilip

После установки параметров нажать кнопку «Добавить». Созданный бот отразится в списке «Активные боты».

- 

Создать «URL для интеграции»Для интеграции утилиты «AlertManager» и приложения «Zulip» требуется «URL интеграции».

URL создается через пиктограмму в виде цепи, расположенную в блоке бота.



![](@site/docs/assets/images/monitoring/media/image48.png)

Рисунок . – Пиктограмма «Создать URL для интеграции»

Нажатие на пиктограмму вызовет окне «Создать URL для интеграции», в котором устанавливаются параметры:

- 
- 

Интеграция – Prometheus Alertmanager;Куда отправлять оповещения – выбрать созданный канал (alert).

![](@site/docs/assets/images/monitoring/media/image49.png)

Рисунок . - Копирование URL для интеграции

Нажатие кнопки «Копировать URL» скопирует созданную ссылку в буфер обмена, после чего далее окно можно закрыть.

- 

Сконфигурировать «AlertManager»;Создав бота в Zulip и сгенерировав «URL интеграции» сконфигурируйте «AlertManager» через конфигурационный файл «alertmanager.yml».

Редактирование конфигурационного файла выполняется командой:

\# gedit /usr/jatoba-<ver>/monitoring/default/alertmanager.yml

Раскомментируйте строки:

- 
- 

receiver: zulip_chat;continue: true.Тем самым создаётся «маршрут» для отправки сообщений по каналу Zulip.



![](@site/docs/assets/images/monitoring/media/image50.png)

Рисунок . – Параметры «маршрута» для отправки предупреждений по каналу Zulip

Расскомментируйте строки:

- 
- 

url;send_resolved.В строку «URL» вставьте «URL для интеграции» скопированный из созданного бота в Zulip и в конце строки добавить значение:

&desc=summary

Данное значение служит для кастомизации сообщений.



![](@site/docs/assets/images/monitoring/media/image51.png)

Рисунок . – URL для отправки предупреждений в Zulip

На данном конфигурирование утилиты «AlertManager» для отправки сообщений по каналу Zulip закончено и модно переходить к запуску утилиты описанному в п.п. 8.3.

### Запуск утилиты «alertmanager»

Обновить конфигурацию system командой:

```
# systemctl daemon-reload
```

Запустить службу утилиты, включить ее автозапуск и проверить статус работы:

```
# systemctl start jatoba<ver>_alertmanager
```
>
```
# systemctl enable jatoba<ver>_alertmanager
```
>
```
# systemctl status jatoba<ver>_alertmanager
```



![](@site/docs/assets/images/monitoring/media/image52.png)

Рисунок . - Запуск и вывод статуса службы «jatoba\*_alertmanager»

Чтобы проверить статус работы утилиты, нужно в браузере открыть веб-интерфейс утилиты «Alertmanager»:

localhost:9093

<http://0.0.0.0:9093>

http://\<ip\>:9093



![](@site/docs/assets/images/monitoring/media/image53.png)

Рисунок . – Веб-интерфейс утилиты «alertmanager»

На данном шаге конфигурирование утилиты не закончено. Проверена, только работоспособность. Интеграция с другими компонентами описана в разделе 9 «Подключение к JDS».

## Подключение к JDS

Подключение хранилища системы «Prometheus» к компоненту «Jatoba data safe» для отображения в разделе «Мониторинг» описано в документе «Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe», в пункте «Источники данных».

Для настройки «Уведомлений» о контролируемых значениях СУБД требуется сконфигурировать 3 компонента, такие как система «Prometheus», утилита «Alertmanager» и компоненты пользовательского веб-интерфейса для администраторов «Jatoba data safe» (JDS).

Последовательность действий будет следующая.

Настраивается SSH-соединение на хосте и/или с хостом с установленной системой «Prometheus» (см. п. 9.1).

В разделе «Настройки» компонента JDS, во вкладке «Источник данных» созданное подключение к системе «Prometheus» дополняется параметрами «Настройки конфигурации предупреждений» (уведомлений).

В этой настройке указывается, IP адрес системы «Prometheus», порт подключения, пользователь и путь к файлу с правилами уведомлений. В последствии это имя файла будет использовано в конфигурировании системы «Prometheus».

Файл с правилами уведомлений предварительно не создаётся и появляется по вышеуказанному пути. Поэтому для его создания требуется создать уведомление в разделе «Мониторинг» в любом из дашбордов.

На хосте с системой «Prometheus» в конфигурационном файле

> /usr/jatoba-<ver>/monitoring/default/prometheus.yml

связать систему «Prometheus» и утилиту «Alertmanager».

### Настройка SSH-соединения

Настройка SSH-соединения производится в обязательном порядке для любой архитектуры компонентов. В том числе, если утилита «Alertmanager», система «Prometheus» и JDS установлены на одном хосте.

Необходимо настроить SSH-соединение с хоста компонента JDS на сервер с развернутой системой «Prometheus». Соединение будет использоваться компонентом JDS для копирования конфигурационного файла с правилами предупреждений.

В настройках SSH-сервера должны быть разрешены локальные подключения и подключения от имени и с правами пользователя «root».

Следует выполнить следующие действия:

- 

создать папку пользователя, под которым работает JDS:sudo -s

\# mkdir /home/jds

\# chown jds /home/jds

\# exit

- 

сгенерировать ключи под пользователем JDS, скопировать на хост с системой «Prometheus»:sudo -u jds /usr/bin/bash

\# ssh-keygen

(задать пустой пароль)

\# ssh-copy-id root@IP

(yes)

- 

проверить соединение (должно соединиться без запроса пароля):# ssh root@IP

\# exit

exit

### Конфигурирование JDS

**Вкладка «Источник данных»**

На хосте с установленным компонентом JDS перейти в раздел «Настройки». Созданной подключение к системе «Prometheus» изменить, дополнив параметрами «Настройки конфигурации предупреждений» (уведомлений).

В этой настройке указывается:

- 
- 
- 
- 

IP адрес системы «Prometheus»;порт подключения – 22, соответствующий SSH-подключению;пользователь – root;путь к файлу с правилами уведомлений: /usr/jatoba-<ver>/monitoring/default/alertrules.yml

В последствии это имя файла будет использовано в конфигурировании системы «Prometheus».



![](@site/docs/assets/images/monitoring/media/image54.png)

Рисунок . - «Настройки конфигурации предупреждений»

**Раздел «Мониторинг»**

В разделе «Мониторинг» создав уведомление в любом из дашбордов с динамическими данными будет сформирован файл с правилами уведомлений по пути указанному в настройках «Источника данных» в сформированном подключении к системе «Prometheus»:

/usr/jatoba-<ver>/monitoring/default/alertrules.yml



![](@site/docs/assets/images/monitoring/media/image55.png)

Рисунок . – Создание уведомления в компоненте JDS

### Настройка связки системы «Prometheus» и утилиты «Alertmanager»

Имея данные конфигурации и конфигурационный файл уведомлений можно приступить к связке системы «Prometheus» и утилиты «Alertmanager», для чего надо выполнить команду редактирования конфигурационного файла системы «Prometheus»:

```
# gedit usr/jatoba-<ver>/monitoring/default/prometheus.yml
```

Соответствующий раздел «Alertmanager configuration» находится в начале файла и параметры надо внести именно в него. Вставка параметров в конец файла может привести к ошибке.

В узле «targets» указывается хост или хосты с установленной утилитой «Alertmanager»

В узле rule_files необходимо указать имя конфигурационного файла уведомлений

alerting:

alertmanagers:

\- static_configs:

\- targets:

\- IP\*\*.\*\*\*.\*\*\*.\*\*:9093

rule_files:

\- "alertrules.yml"



![](@site/docs/assets/images/monitoring/media/image56.png)

Рисунок . - Раздел «Alertmanager configuration»

Проверить корректность введенных параметров возможно командами:

\# cd /usr/jatoba-<ver>/bin#

\# ./promtool check config /usr/jatoba-<ver>/monitoring/default/prometheus.yml

Если параметры верны, перезапустить службу:

\# systemctl restart jatoba<ver>_prometheus

На данном шаге конфигурирование раздела «Мониторинг» компонента JDS закончено.

## Настройка экспортеров для компонента ja_Hipe_Cluster

Настройка системы мониторинга подразумевает конфигурирование целевых СУБД и кластера на основе компонента «ja_Hipe_Cluster» в экосистеме СУБД «Jatoba». Используется выделенный сервер мониторинга «Jatoba Data Safe» собирающий данные для виджетов с сервера «Prometheus». Сервера «Prometheus» аккумулирует данные о СУБД и ОС с кластера и СУБД.

### Параметры стенда

Параметры стенда, приведенные в таблице Таблица 10.1.

| **№** | **Имя сервера** | **IP-адрес** | **ПО** | **Port** | **Роль** |
|:--:|:---|:---|:---|:---|:---|
| 1 | u602doc-jds01 | 10.116.102.41/24 | JDS |  | Сервер мониторинга |
| 2 | u602doc-pgp01 | 10.116.102.45/24 |  |  | Сервер Prometheus |
|  |  |  | Prometheus | 9090 |  |
|  |  |  | Alert manager | 9093, 22 |  |
|  |  |  | node_exporter | 9100 |  |
|  |  |  | postgres_exporter | 9187 |  |
|  |  |  | sql_exporter | 9399 |  |
| 3 | u602doc-hipe01 | 10.116.102.61/24 |  |  | Coordinator |
|  |  |  | citus |  |  |
|  |  |  | node_exporter | 9100 |  |
|  |  |  | postgres_exporter | 9187 |  |
|  |  |  | sql_exporter | 9399 |  |
| 4 | u602doc-hipe02 | 10.116.102.62/24 |  |  | Worker (Node1) |
|  |  |  | citus |  |  |
|  |  |  | node_exporter | 9100 |  |
|  |  |  | postgres_exporter | 9187 |  |
|  |  |  | sql_exporter | 9399 |  |
| 5 | u602doc-hipe03 | 10.116.102.63/24 |  |  | Worker (Node2) |
|  |  |  | citus |  |  |
|  |  |  | node_exporter | 9100 |  |
|  |  |  | postgres_exporter | 9187 |  |
|  |  |  | sql_exporter | 9399 |  |
| 6 | u602doc-ldap01 | 10.116.102.47/24 |  |  | Целевая СУБД |
|  |  |  | node_exporter | 9100 |  |
|  |  |  | postgres_exporter | 9187 |  |
|  |  |  | sql_exporter | 9399 |  |

Таблица . – Конфигурация стенда

Схема стенда представлена на рисунке Рисунок 10.1.

![](./assets/images/monitoring/media/image57.png)

Рисунок . – Схема стенда мониторинга с кластером «ja_Hipe_Cluster»

Настройка экспортёров на целевой СУБД описан выше в настоящем документе и их параметры остаются неизменными в конфигурационном фале /usr/jatoba-<ver>/monitoring/default/prometheus.yml.

Конфигурация экспортёров кластера добавляется отдельно.

Настройка экспортёров ja_Hipe_Cluster для принципиально не отличается от вышеописанного процесса, но имеет ряд особенностей.

Настройка СУБД в кластере для мониторинга выполняется согласно разделу 3 «Установка и настройка целевых СУБД».

В результате:

- 
- 

должна быть настроена аутентификация;должны быть установлены, как минимум, расширения citus и citus_columnar.

![](@site/docs/assets/images/monitoring/media/image58.png)

Рисунок . – Вывод установленных расширений

Установка экспортёров выполняется согласно разделам настоящего документа:

- 
- 
- 

4 «Установка экспортера «jatoba\*_node_exporter»;5 «Установка экспортера «jatoba\*_postgres_exporter»;6 «Установка экспортера «jatoba\*_sql_exporter».В конфигурационных файлах «jatoba\*_postgres_exporter» и «jatoba\*_sql_exporter» в строке «DATA_SOURCE_NAME» должен быть указан IP-адрес узла.

### Конфигурирование системы «Prometheus» для компонента «ja_Hipe_Cluster»

На сервере «Prometheus» (u602doc-pgp01, IP-10.116.102.45/24) в конфигурационный файл /usr/jatoba-<ver>/monitoring/default/prometheus.yml добавляется раздел с экспортёрами, установленными на узлах кластера.

> \###############################################################
>
```
# экспортеры координатора (Citus)
```
>
> \- job_name: "coordinator"
>
> static_configs:
>
> \- targets: \['10.116.102.61:9100', '10.116.102.61:9187', '10.116.102.61:9399'\]
>
> labels:
>
> cluster_citus: 'ja_hipe_cluster'
>
> dbms: 'u602doc-hipe01'
>
```
# экспортеры worker1 (Node1)
```
>
> \- job_name: "worker1"
>
> static_configs:
>
> \- targets: \['10.116.102.62:9100', '10.116.102.62:9187', '10.116.102.62:9399'\]
>
> labels:
>
> cluster_citus: 'ja_hipe_cluster'
>
> dbms: 'u602doc-hipe02'
>
```
# экспортеры worker2 (Node2)
```
>
> \- job_name: worker2
>
> static_configs:
>
> \- targets: \['10.116.102.63:9100', '10.116.102.63:9187', '10.116.102.63:9399'\]
>
> labels:
>
> cluster_citus: 'ja_hipe_cluster'
>
> dbms: 'u602doc-hipe03'
>
> \###############################################################

В строке «job_name» целесообразнее указать роль узла в кластере.

В строке «targets» перечисляются IP-адрес и порт каждого из установленных экспортёров, установленных на узле.

Строка «cluster_citus» является меткой для формирования выпадающего списка «Кластеры» по которой формируется кластерная панель виджетов.

Строка «dbms» содержит уникальное DNS-имена или IP-адреса соответствующих объектов СУБД и кластера.

Целесообразнее указывать идентификационный признак подключенного к мониторингу кластера, как показано на рисунке Рисунок 10.3.



![](@site/docs/assets/images/monitoring/media/image59.png)

Рисунок . - Использование имени кластера в строке Строка «cluster_citus

В результате на панели виджетов для кластера, в выпадающем списке отразится имя кластера.



![](@site/docs/assets/images/monitoring/media/image60.png)

Рисунок . – Имя кластера на панели виджетов

На виджетах отразятся графы каждого узла кластера.

## Настройка экспортеров для компонента jaDog

Настройка системы мониторинга кластеров на основе компонента «jaDog» требует:

- 
- 

конфигурирования узлов кластера; выделенный сервер мониторинга «Jatoba Data Safe» собирающий данные для виджетов с сервера «Prometheus».Настройка СУБД в кластере «jaDog» для мониторинга выполняется согласно разделу 3 «Установка и настройка целевых СУБД».

Настройка экспортёров на целевых СУБД кластера описана выше в настоящем документе и их параметры остаются неизменными в конфигурационном фале /usr/jatoba-<ver>/monitoring/default/prometheus.yml.

Установка экспортеров выполняется согласно разделам настоящего документа:

- 
- 
- 

4 «Установка экспортера «jatoba\*_node_exporter»;5 «Установка экспортера «jatoba\*_postgres_exporter»;6 «Установка экспортера «jatoba\*_sql_exporter».В конфигурационных файлах «jatoba\*_postgres_exporter» и «jatoba\*_sql_exporter» в строке «DATA_SOURCE_NAME» должен быть указан IP-адрес узла.

### Параметры стенда

Параметры стенда, приведенные в таблице

| **№** | **Имя сервера** | **IP-адрес** | **ПО** | **Port** | **Роль** |
|:--:|:---|:---|:---|:---|:---|
| 1 | u602doc-jds01 | 10.116.102.41/24 | JDS |  | Сервер мониторинга |
| 2 | u602doc-pgp01 | 10.116.102.45/24 |  |  | Сервер Prometheus |
|  |  |  | Prometheus | 9090 |  |
|  |  |  | Alert manager | 9093, 22 |  |
|  |  |  | node_exporter | 9100 |  |
|  |  |  | postgres_exporter | 9187 |  |
|  |  |  | sql_exporter | 9399 |  |
| 3 | u602doc-jadog01 | 10.116.102.54/24 |  |  | Главный узел (Master) |
|  |  |  | jadog | 5432 |  |
|  |  |  | node_exporter | 9100 |  |
|  |  |  | postgres_exporter | 9187 |  |
|  |  |  | sql_exporter | 9399 |  |
| 4 | u602doc-jadog02 | 10.116.102.55/24 |  |  | Резервный узел (Slave) |
|  |  |  | jadog | 5432 |  |
|  |  |  | node_exporter | 9100 |  |
|  |  |  | postgres_exporter | 9187 |  |
|  |  |  | sql_exporter | 9399 |  |
| 5 | u602doc-jadog03 | 10.116.102.56/24 |  |  | Узел-арбитр (Referee) |
|  |  |  | jadog |  |  |
|  |  |  | node_exporter | 9100 |  |
|  |  |  | postgres_exporter | 9187 |  |
|  |  |  | sql_exporter | 9399 |  |
| 6 | u602doc-ldap01 | 10.116.102.47/24 |  |  | Целевая СУБД |
|  |  |  | node_exporter | 9100 |  |
|  |  |  | postgres_exporter | 9187 |  |
|  |  |  | sql_exporter | 9399 |  |

Таблица . – Конфигурация стенда

Схема стенда представлена на рисунке Рисунок 11.1.

![](./assets/images/monitoring/media/image61.png)

Рисунок . – Схема стенда мониторинга с кластером «jaDog»

### Конфигурирование системы «Prometheus» для компонента «jaDog»

На сервере «Prometheus» (u602doc-pgp01, IP-10.116.102.45/24) в конфигурационный файл /usr/jatoba-<ver>/monitoring/default/prometheus.yml добавляется раздел с целями по количеству узлов отказоустойчивого кластера.

> \###############################################################
>
```
# экспортер данных для jaDog
```
>
> \- job_name: node1
>
> scheme: https
>
> tls_config:
>
> \#ca_file: /opt/prometheus/rootca.crt
>
> cert_file: /opt/prometheus/rest_user.crt
>
> key_file: /opt/prometheus/rest_user.key
>
> insecure_skip_verify: true
>
> static_configs:
>
> \- targets: \['10.116.102.54:54443'\]
>
> labels:
>
> cluster_jadog: 'jadog'
>
> node: '10.116.102.54:5432'
>
> \- job_name: node2
>
> scheme: https
>
> tls_config:
>
> \#ca_file: /opt/prometheus/rootca.crt
>
> cert_file: /opt/prometheus/rest_user.crt
>
> key_file: /opt/prometheus/rest_user.key
>
> insecure_skip_verify: true
>
> static_configs:
>
> \- targets: \['10.116.102.55:54443'\]
>
> labels:
>
> cluster_jadog: 'jadog'
>
> node: '10.116.102.55:5432'
>
> \- job_name: node_referee
>
> scheme: https
>
> tls_config:
>
> \#ca_file: /opt/prometheus/rootca.crt
>
> cert_file: /opt/prometheus/rest_user.crt
>
> key_file: /opt/prometheus/rest_user.key
>
> insecure_skip_verify: true
>
> static_configs:
>
> \- targets: \['10.116.102.56:54443'\]
>
> labels:
>
> cluster_jadog: 'jadog'
>
> node: '10.116.102.56'
>
> \###############################################################

В строке «targets» указать адрес и сетевой порт REST API узла «jaDog».

:::info Дополнительная информация
Для подключения к интерфейсу REST API компонента «jaDog» применяются сертификаты SSL. При этом к каталогу /var/lib/jatoba/ssl_jadog/, в котором располагаются сертификаты SSL пользователя компонента «jaDog», должен быть обеспечен доступ для системного пользователя prometheus. Для этого необходимо его добавить в системную группу postgres.

Другим вариантом является копирование сертификатов SSL пользователя компонента «jaDog», например, в каталог /opt/prometheus/.
:::

В строке «cluster_jadog» задать произвольное название кластера (одинаковое для всех узлов).

В строке «node» задать адрес СУБД управляемой экземпляром «jaDog» (для узла-арбитра сетевой порт не указывается).

После внесенных изменений конфигурационный файл /usr/jatoba-<ver>/monitoring/default/prometheus.yml требуется сохранить, обновить конфигурацию systemd и перезапустить службу Prometheus:

```
# systemctl daemon-reload
```
>
```
# systemctl restart jatoba18_prometheus.service
```

На данном шаге конфигурирование системы «Prometheus» для мониторинга кластера на основе компонента «jaDog» закончено.

Добавление виджетов описано в документе «Руководство по настройке. Часть 20. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe».

## Обновление компонентов экспортеров

Предварительные условия: необходимо в каталоге /localrepo заменить файлы на ту версию дистрибутива, с которой в дальнейшем будет выполняться обновление компонентов. Если это не сделано, необходимо обратиться в раздел «1.2 Обновление СУБД с промежуточных версий» документа «Руководство по обновлению СУБД «Jatoba» 643.72410666.00067-08 93 01.

### Обновление компонента «sql_exporter»

#### Установка новой версии компонента «sql_exporter»

Обновление версии компонента «sql_exporter» требует сохранения конфигурационных файлов и выполняется на узлах в следующем порядке:

1)  
2)  - 

> Скопировать новый пакет компонента «sql_exporter» в отдельную директорию. Например, в директорию /home/admin/Downloads.Загрузить и установить новый пакет jatoba<ver>_sql_exporter от имени и с правами привилегированного пользователя ОС:Находясь в каталоге с пакетом:# apt install ./jatoba<ver>-sql-exporter_\* –y

- 

> Из корневого каталога командой:# apt install /home/admin/Downloads/jatoba<ver>-sql-exporter_\* –y



![](@site/docs/assets/images/monitoring/media/image62.png)

Рисунок . – Установка нового пакета

При установке новой версии конфигурационные файлы предыдущей версии будут сохранены в каталоге /usr/jatoba-<ver>/monitoring/default с расширением backup.

После установки новой версии jatoba<ver>_sql_exporter в каталоге /usr/jatoba-<ver>/monitoring/default будет создан дополнительный файл конфигурации citus.collector.yml, а также обновлен postgres.collector.yml.

3)  

Восстановить резервные копии конфигураций в каталог /usr/jatoba-<ver>/monitoring/default.На данном шаге обновление компонента sql_exporter завершено.

#### Настройка мониторинга кластера «ja_Hipe_Cluster» после обновления

Следующие шаги выполняются только на узле-координаторе кластера «ja_Hipe_Cluster».

1)  

> Начиная с версии jatoba6-sql-exporter_0.14.3-440 для поддержки мониторинга ja_Hipe Citus на узле-координаторе необходимо дополнительно создать второй экземпляр службы - jatoba<ver>_sql_exporter.сitus.service. Для этого потребуется скопировать файл сервиса командой в консоли ОС:# cp /lib/systemd/system/jatoba<ver>_sql_exporter.service /lib/systemd/system/jatoba<ver>_sql_exporter.citus.service



![](@site/docs/assets/images/monitoring/media/image63.png)

Рисунок . – Создание второго экземпляра службы

2)  

> Настроить второй экземпляр jatoba<ver>_sql_exporter.citus.service. Для этого необходимо открыть файл\# nano /lib/systemd/system/jatoba<ver>_sql_exporter.citus.service

И внести следующие изменения:

> \[Service\]
>
> EnvironmentFile=/usr/jatoba-<ver>/monitoring/default/sql_exporter.citus



![](@site/docs/assets/images/monitoring/media/image64.png)

Рисунок . – Изменение настроек второго экземпляра

3)  

> Скопировать файл командой в консоли ОС:# cp /usr/jatoba-<ver>/monitoring/default/sql_exporter.yml /usr/jatoba-<ver>/monitoring/default/sql_exporter.citus.yml



![](@site/docs/assets/images/monitoring/media/image65.png)

Рисунок . – Копирование файла настроек sql_exporter.citus.yml

4)  

> Открыть файл sql_exporter.citus.yml# nano /usr/jatoba-<ver>/monitoring/default/sql_exporter.citus.yml

И внести следующие изменения:

> data_source_name: 'postgresql://sql_exporter:\[password\]@10.116.102.61:5432/\[citus_db\]?sslmode=disable'
>
> collectors: \[citus\]

Где password – пароль пользователя СУБД, citus_db – название БД, в которой установлено расширение «citus».



![](@site/docs/assets/images/monitoring/media/image66.png)

Рисунок . – Изменение настроек второго экземпляра

5)  

> Скопировать файл командой в консоли ОС:\# cp /usr/jatoba-<ver>/monitoring/default/sql_exporter /usr/jatoba-<ver>/monitoring/default/sql_exporter.citus



![](@site/docs/assets/images/monitoring/media/image67.png)

Рисунок . – Копирование файла настроек sql_exporter.yml

6)  

> Открыть файл sql_exporter.citus:# nano /usr/jatoba-<ver>/monitoring/default/sql_exporter.citus
>
> И внести следующие изменения:
>
> CONF_FILE=/usr/jatoba-<ver>/monitoring/default/sql_exporter.citus.yml
>
> LISTEN_ADDRESS=0.0.0.0:9366

Здесь для доступа к метрикам компонента «ja_Hipe_Cluster» будет использован сетевой порт 9366.



![](@site/docs/assets/images/monitoring/media/image68.png)

Рисунок . – Изменение настроек второго экземпляра

7)  

> Обновить конфигурацию systemd:# systemctl daemon-reload

8)  

> Запустить второй экземпляр службы jatoba<ver>_sql_exporter.citus, включить ее в автозапуск и проверить статус работы:# systemctl start jatoba<ver>_sql_exporter.citus
>
```
# systemctl enable jatoba<ver>_sql_exporter.citus
```
>
```
# systemctl status jatoba<ver>_sql_exporter.citus
```



![](@site/docs/assets/images/monitoring/media/image69.png)

Рисунок . – Проверка статуса службы второго экземпляра

9)  

> Запустить и проверить статус работы первого экземпляра:# systemctl start jatoba<ver>_sql_exporter
>
```
# systemctl status jatoba<ver>_sql_exporter
```

10) 

> Открыть в браузере веб-интерфейс sql_exporter и проверить наличие метрик компонента Citus для второго экземпляра службы:http://localhost:9366/metrics



![](@site/docs/assets/images/monitoring/media/image70.png)

Рисунок . – Проверка метрик компонента sql_exporter

11) 

> Переключиться на узел с запущенной системой «Prometheus» и открыть на редактирование файл:# nano /usr/jatoba-<ver>/monitoring/default/prometheus.yml

В секции «# экспортеры координатора (Citus)» внести (добавить) следующие изменения:

```
# экспортеры координатора (Citus)
```
>
> \- job_name: "coordinator"
>
> static_configs:
>
> \- targets: \[..., **'IP-address:9366'**\]

Где IP-address – сетевой адрес узла-координатора.



![](@site/docs/assets/images/monitoring/media/image71.png)

Рисунок . – Параметры в конфигурационном файле prometheus.yml

12) 

> Перезагрузить службу «Prometheus»# systemctl stop jatoba<ver>_prometheus
>
```
# systemctl start jatoba<ver>_prometheus
```

13) 

Открыть веб-интерфейс системы «Prometheus» по адресу http://\<IP-адрес\>:9090/targets и проверить наличие соединения с компонентом sql_exporter.

![](@site/docs/assets/images/monitoring/media/image72.png)

Рисунок . – Страница «Targets» в системе «Prometheus»

Открыть веб-интерфейс администратора Jatoba Data Safe (JDS) и проверить наличие метрик кластера «ja_Hipe_Cluster».

### Обновление компонентов node_exporter, postgres_exporter и alertmanager

Обновление версии компонентов мониторинга СУБД node_exporter, postgres_exporter и alertmanager выполняется на узлах в следующем порядке:

1)  

> Остановка и отключение служб обновляемых компонентов мониторинга СУБД:# systemctl stop jatoba<ver>_node_exporter jatoba<ver>_postgres_exporter jatoba<ver>_alertmanager
>
```
# systemctl disable jatoba<ver>_node_exporter jatoba<ver>_postgres_exporter jatoba<ver>_alertmanager
```

2)  

> Обновление версии компонентов мониторинга СУБД из локального репозитория:\# apt-get install jatoba<ver>-node-exporter jatoba<ver>-postgres-exporter jatoba<ver>-alertmanager

3)  

> После обновления открыть файлы конфигурации компонентов мониторинга СУБД и ознакомиться с новыми параметрами:# nano /usr/jatoba-<ver>/monitoring/default/postgres_exporter
>
```
# nano /usr/jatoba-<ver>/monitoring/default/alertmanager.yml
```

4)  

> Отредактировать пользовательские файлы конфигурации компонентов мониторинга СУБД (с расширением .backup), созданные на этапе обновления с внесением в них параметров из новой версии:# nano /usr/jatoba-<ver>/monitoring/default/postgres_exporter.backup
>
```
# nano /usr/jatoba-<ver>/monitoring/default/alertmanager.yml.backup
```

и переименовать обратно:

```
# cp /usr/jatoba-<ver>/monitoring/default/postgres_exporter.backup /usr/jatoba-<ver>/monitoring/default/postgres_exporter
```
>
```
# cp /usr/jatoba-<ver>/monitoring/default/alertmanager.yml.backup /usr/jatoba-<ver>/monitoring/default/alertmanager.yml
```

5)  

> Активация, запуск и проверка статуса компонентов мониторинга СУБД после обновления:
```
# systemctl enable jatoba<ver>_node_exporter jatoba<ver>_postgres_exporter jatoba<ver>_alertmanager
# systemctl start jatoba<ver>_node_exporter jatoba<ver>_postgres_exporter jatoba<ver>_alertmanager
# systemctl status jatoba<ver>_node_exporter
# systemctl status jatoba<ver>_postgres_exporter
```
>
```
# systemctl status jatoba<ver>_alertmanager
```

6)  - 
    - 
    - 

Запустить веб-интерфейс и убедиться, что служба компонента работает:http://localhost:9100/ - node_exporter;http://localhost:9187/ - postgres_exporter;http://localhost:9093/ - alertmanager.На данном шаге обновление компонентов мониторинга СУБД завершено.

## Обновление системы «Prometeus»

Обновление версии системы «Prometheus» требует сохранения конфигурационных файлов системы и выполняется в следующем порядке:

1)  
2)  
3)  

> Сохранить резервную копию каталога конфигураций /usr/jatoba-<ver>/monitoring/defaultСкопировать новый пакет в отдельную директорию. Например, в директорию /home/admin/Downloads.Удалить существующий пакет# apt remove jatoba<ver>-prometheus –y



![](@site/docs/assets/images/monitoring/media/image73.png)

Рисунок . – Удаление существующего пакета

4)  

- 

> Установить новый пакет от имени и с правами привилегированного пользователя ОС: Находясь в каталоге с пакетом:# apt install ./jatoba<ver>-prometheus_\* –y

- 

> Из корневого каталога командой:\# apt install /home/admin/Downloads/jatoba<ver>-prometheus\* –y



![](@site/docs/assets/images/monitoring/media/image74.png)

Рисунок 13.2 – Установка нового пакета

5)  
6)  

> Восстановить резервные копии конфигураций в каталог /usr/jatoba-<ver>/monitoring/defaultПроверить владельца и права на каталог приложения командой:ls -la /opt/prometheus/

7)  

> В случае отклонения настроек назначить корректные права командой:chown prometheus:prometheus -R /opt/prometheus/

8)  

> Обновить конфигурацию systemd:# systemctl daemon-reload

9)  

> Запустить службу системы, включить ее в автозапуск и проверить статус работы:# systemctl start jatoba<ver>_prometheus
>
```
# systemctl enable jatoba<ver>_prometheus
```
>
```
# systemctl status jatoba<ver>_prometheus
```

На данном шаге обновление системы «Prometheus» закончено.

В момент обновления компонента данные с экспортёров будут потеряны, т.к. экспортёры не хранят данные, а передают их постоянно.



![](@site/docs/assets/images/monitoring/media/image75.png)

Рисунок . – Промежуток в данных собранных с экспортёров

## 

<span id="_Toc231670687" class="anchor"></span>Термины и определения@ - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как, «коммерческое эт» (англ. «commercial ат»).

& - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как, «коммерческое и» (амперсанд) (англ. ampersand)

= - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как, «равно» (англ. equals SIGH).

? - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как, «вопросительный знак» (англ. question mark).

: - ГОСТ 34.302.2-91 (ИСО 8859/2-87) «Наборы 8 битных однобайтовых кодированных графических символов. латинский алфавит № 2» определяет символ как, «двоеточие» (англ. colon).

## 

| <span id="_Toc231670688" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language |
|:---|----|----|
| БД | – | База данных |
| ОС | – | Операционная система |
| СУБД | – | Система управления базами данных |

