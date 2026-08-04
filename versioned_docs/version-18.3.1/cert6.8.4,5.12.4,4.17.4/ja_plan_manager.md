**АННОТАЦИЯ**

В документе приведены сведения, необходимые для установки и эксплуатации компонента «ja_Plan_Manager» (далее по тексту – компонент или ja_Plan_Manager), предназначенного для сохранения планов запросов, их дальнейшего использования, экспорта и импорта в базах данных (БД) и оптимизации.

Настоящее руководство предназначено для администраторов СУБД.

:::info Дополнительная информация
Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 6.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.

Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:
:::

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image3.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image2.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image3.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Назначение компонента

Компонент «ja_Plan_Manager» предназначен для сохранения, экспорта/импорта и подмены планов запросов в БД.

### Условия применения

Компонент «ja_Plan_Manager» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем Windows и GNU/Linux.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image3.png" style="width:0.25139in;height:0.25139in" /></th>
<th>В текущей реализации компонента не поддерживается управление через компонент пользовательского веб-интерфейса для администраторов<br />
«Jatoba data safe», но поддерживается установка расширения.</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image3.png" style="width:0.25139in;height:0.25139in" /></td>
<td><p>Ввиду различий в планировщике на разных мажорных версиях СУБД - импорт планов запросов необходимо выполнять в рамках той же версии, из которой выполнялся экспорт.</p>
<p>Ограничений по совместимости с другими компонентами нет.</p></td>
</tr>
</tbody>
</table>

## Установка компонента

Установка компонента должна производиться от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо доустановить.

Установку компонента возможно провести двумя способами:

1)  
2)  

установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- 

> для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:apt-get install jatoba<ver>-ja-plan-manager

- 

> для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:yum install jatoba<ver>-ja-plan-manager

Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- 

> ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:apt-get install jatoba<ver>-ja-plan-manager

Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется.

Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Настройка компонента

### Механизм работы компонента

Компонент работает, используя принцип импорта/экспорта. Для экспорта используется домашний каталог пользователя postgres, либо указанный администратором СУБД.

Сначала формируется план запросов в одной БД (test_db_a), он в виде файла экспортируется в папку обмена.

Затем из папки обмена или через соединение dblink загружается в другую БД (test_db_b). Для этого необходимо:

- 
- 
- 

настроить конфигурационный файл для каждой БД;установить расширение для каждой БД;выполнить действия по экспорту/импорту плана запросов.Схема работы компонента представлена на рисунке Рисунок 3.1.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image4.png)

Рисунок 3.1 – Схема работы компонента

Компонент хранит планы запросов в таблице ja_plan_manager.jpm_plans. Столбцы таблицы описаны в таблице Таблица 3.1.

| **Название столбца** | **Описание** |
|----|----|
| query | запрос (записывается в параметризованном виде) |
| query_hash | хеш от запроса |
| query_id | идентификатор запроса (вычисляется только при включении системной функции compute_query_id) |
| enable | включение (true) / отключение (false) режима использования плана запроса |
| plan | план запроса |
| plan_hash | хеш от плана запроса |
| description | описание (заполняется пользователем при необходимости) |
| reloids | системный столбец, необходимый для работы компонента |
| index_reloids | системный столбец, необходимый для работы компонента |

Таблица 3.1 – Описание столбцов таблицы jpm_plans

### Настройка конфигурационного файла postgresql.conf

Установка расширения «ja_plan_manager» требует, чтобы в конфигурационном файле postgresql.conf были заданы параметры загрузки разделяемых библиотек, которые будут загружаться при запуске сервера СУБД.

Файл расположен в каталоге:

> /var/lib/jatoba/<ver>/data/

Откройте его в режиме редактирования и в разделе «Shared Library Preloading», для последующей загрузки расширения установите параметр:

> shared_preload_libraries = 'ja_plan_manager'

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image5.png" style="width:7.11715in;height:1.25217in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-13 01-50-49.png" />

Рисунок 3.2 – Параметры конфигурационного файла postgresql.conf

Для применения параметров потребуется перезапустить СУБД и проверить статус демона «jatoba-5».

> systemctl restart jatoba-<ver>
>
> systemctl status jatoba-<ver>

В случае, когда базы данных находятся в разных инсталляциях СУБД, вышеописанные действия проводятся в каждой из СУБД.

### Установка расширения «ja_Plan_Manager»

После перезагрузки СУБД и загрузки расширения станет доступной установка расширения «ja_plan_manager». Расширение должно быть установлено в каждой базе данных, в которых планируются проводить манипуляции по экспорту/импорту планов запросов. В рассматриваемом примере расширение должно быть установлено в тестовых базах данных:

- 
- 

test_db_a;test_db_b.Расширение устанавливается SQL-командой:

> CREATE EXTENSION ja_plan_manager;

Просмотреть расширения БД можно SQL-командой:

> \dx

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image6.png" style="width:7.12236in;height:2.82609in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-13 02-42-06.png" />

Рисунок 3.4 – Команда установки расширения в «test_db_a»

Аналогичные действия выполняются для второй тестовой БД «test_db_b»

```
# \connect test_db_b
```
>
```
# CREATE EXTENSION ja_plan_manager;
```
>
```
# \dx
```

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image7.png" style="width:7.07826in;height:2.80879in" alt="C:\Users\KUZNET~1\AppData\Local\Temp\vmware-kuznetsov-a\VMwareDnD\4cb3d220\Screenshot from 2024-12-13 02-41-26.png" />

Рисунок 3.5 – Команда установки расширения в «test_db_b»

## Функциональные возможности компонента

Функциональные возможности компонента позволяют:

- 
- 
- 

<!-- -->

- 
- 
- 
- 

<!-- -->

- 

<!-- -->

- 
- 

<!-- -->

- 

включать/отключать режим сохранения запросов;включать/отключать режим использования сохраненных запросов;экспортировать планы запросов в формате:json;text;xml; yaml;экспортировать планы запросов через:домашний каталог пользователя;строку соединения с другой БД (dblink connection);импортировать планы запросов.При использовании компонента есть возможность использовать кириллицу в именах объектов СУБД «Jatoba».

### Включение/отключение режима сохранения плана запросов

Для включения режима сохранения плана запросов устанавливается переменная SQL-командой:

> SET ja_plan_manager.write_mode = true;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image8.png" style="width:7.11304in;height:1.07324in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-13 04-21-18.png" />

Рисунок 4.1 – SQL-команда включения режима сохранения плана запросов

В режиме сохранения плана запросов данные будут сохраняться в таблицу «ja_plan_manager.jpm_plans». В таблицу будут сохраняться только разные планы, даже если они были сгенерированы для одинакового запроса.

Отключается режим сохранения планов запросов SQL-командой:

> SET ja_plan_manager.write_mode = false;

### Включение/отключение режима использования сохраненных планов запросов

Для установления режима использования сохраненных планов запросов устанавливается переменная SQL-командой:

> UPDATE ja_plan_manager.jpm_plans SET enable=true;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image9.png" style="width:7.12417in;height:1.16in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\ja_plan_manager\pic\Screenshot from 2022-12-19 23-28-43.png" />

Рисунок 4.2 – Команда установления режима использования сохраненных запросов

После этого шага план для запроса будет взят из таблицы «ja_plan_manager.jpm_plans».

Одному и тому же запросу могут соответствовать разные планы. Если включен режим использования одного плана запроса, второй план к этому запросу невозможно будет включить: сработает триггер.

### Экспорт/импорт плана запросов

#### Экспорт

Чтобы экспортировать план запроса через файл json, необходимо выполнить следующий SQL-запрос:

> SELECT ja_plan_manager.ja_export_plan (\<query_hash\>, \<file_path\>);

Формат вывода указывается в расширении имени файла экспорта. Поддерживаются следующие форматы:

- 
- 
- 
- 

##### json;text;xml;yaml.Экспорт через «dblink connection»

Чтобы экспортировать план запроса непосредственно в другую базу данных c которой есть соединение, необходимо выполнить следующий SQL-запрос:

> SELECT ja_plan_manager.ja_copy_plan(\<connection_string\>, \<query_hash\>);

План будет автоматически импортирован принимающей базой данных без необходимости вызова там каких-либо функций.

Формат «connection_string» совпадает с обычной строкой подключения «dblink». Он должен содержать параметры, необходимые для идентификации базы данных и авторизации импорта (имя базы данных, хост, порт, суперпользователь и пароль).

После импорта плана необходимо активировать его, чтобы он был выполнен соответствующим SQL-запросом:

> UPDATE ja_plan_manager.jpm_plans SET enable = true;

#### Импорт

Для импорта плана запроса необходимо выполнить следующую SQL-команду:

> SELECT ja_plan_manager.ja_import_plan(\<query_hash\>, \<file_path\>);

##### Импорт через «dblink connection»

Для прямой передачи плана запроса на другую базу внутри сети можно использовать «dblink». Для этого необходимо вызвать следующий SQL-запрос:

> SELECT ja_plan_manager.ja_copy_plan(\<connection_string\>, \<query_hash\>);

План запроса будет автоматически импортирован принимающей базой данных без необходимости вызывать какие-либо функции в ней.

Формат «connection_string» аналогичен формату «connstr» в функциях «dblink». В ней должна содержаться информация, достаточная для подключения к базе и авторизации в ней:

- 
- 
- 
- 
- 

dbname;host;port;user;password – пароль суперпользователя.После импорта плана необходимо активировать его, чтобы при вызове соответствующего ему запроса выполнялся именно импортированный план:

> UPDATE ja_plan_manager.jpm_plans SET enable = true;

### Просмотр сохраненных планов запросов

С помощью функции «show_plan» можно просмотреть сохраненные планы. Для этого требуется знать хеш запроса, который может быть извлечен из таблицы «ja_plan_manager.jpm_plans», и выполнить SQL-запрос:

> SELECT ja_plan_manager.show_plan(\<query_hash\>);

### Анализ планов запросов

Анализ плана запроса выполняется SQL-командой:

> EXPLAIN ANALYZE \<query\>;

### Журналирование отработанных планов запросов

При использовании плана запроса возникнет уведомление (notice), сообщающее, план с каким query_hash был отработан:

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image10.png" style="width:7.07017in;height:1.9942in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 23-15-05.png" />

Рисунок 4.3 – Уведомление о срабатывании плана запроса

В файле журнала событий СУБД «Jatoba» также появится запись о срабатывании плана:

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image11.png" style="width:7.01389in;height:0.74405in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-17 01-52-37.png" />

Рисунок 4.4 – Файл журнала событий с записью о срабатывании плана запроса

Файлы журнала событий находятся в директории:

> /var/lib/jatoba/<ver>/data/log/

Запись в журнале событий появится также если отработан запрос, план которого есть в таблице «ja_plan_manager.jpm_plans», но он не включен (enable=false).

## Пример реализации функциональных возможностей компонента

В качестве примера использования компонента будут рассмотрены две тестовые БД, находящиеся в одной СУБД, у которых уже установлено расширение «ja_plan_manager».

- 
- 

test_db_a;test_db_b.В базах данных создаются таблицы «customers» и «orders». Таблица «customers» содержит три записи, а таблица «orders» будет содержать тысячу записей.

### Подготовка БД «test_db_a»

В БД «test_db_a» создать таблицу «customers»:

> CREATE table customers(id serial PRIMARY KEY, name text not null, city text not null);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image12.png" style="width:7.08696in;height:1.27895in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 05-46-58.png" />

Рисунок 5.1 – Создание таблицы «customers» в БД «test_db_a»

Добавить три записи в таблицу «customers»:

> INSERT INTO customers (name, city) VALUES
>
> ('Alice', 'Paris'),
>
> ('Bob', 'London'),
>
> ('Eve', 'Berlin');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image13.png" style="width:7.04451in;height:2.12174in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 06-29-07.png" />

Рисунок 5.2 – Добавление значений в таблицу «customers» в БД «test_db_a»

В БД «test_db_a» создать таблицу «orders»:

> CREATE table orders(id serial PRIMARY KEY, customer_id integer NOT NULL, product text NOT NULL, price integer NOT NULL);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image14.png" style="width:7.14783in;height:1.35256in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 22-21-37.png" />

Рисунок 5.3 – Создание таблицы «orders» в БД «test_db_a»

Добавьте 1000 записей в таблицу «orders»:

> INSERT INTO orders (customer_id, product, price)
>
> SELECT (random() \* 3 + 1)::integer, 'product', (random() \* 1000 + 1)::integer
>
> FROM generate_series(1, 1000);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image15.png" style="width:7.09228in;height:2.07826in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 22-23-21.png" />

Рисунок 5.4 – Добавление значений в таблицу «orders» в БД «test_db_a»

### Подготовка БД «test_db_b»

В БД «test_db_b» создать таблицу «customers»:

> CREATE TABLE customers(id serial PRIMARY KEY, name text not null, city text not null);

Добавить три записи в таблицу «customers»:

> INSERT INTO customers (name, city) VALUES
>
> ('Alice', 'Paris'),
>
> ('Bob', 'London'),
>
> ('Eve', 'Berlin');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image16.png" style="width:7.0706in;height:2.13913in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 22-36-34.png" />

Рисунок 5.5 – Создание и добавление значений в таблицу «customers» в БД «test_db_b»

В БД «test_db_b» создать таблицу «orders»:

> CREATE table orders(id serial PRIMARY KEY, customer_id integer NOT NULL, product text NOT NULL, price integer NOT NULL);

Добавить 1000 записей в таблицу «orders»:

> INSERT INTO orders (customer_id, product, price)
>
> SELECT (random() \* 3 + 1)::integer, 'product', (random() \* 1000 + 1)::integer
>
> FROM generate_series(1, 1000);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image17.png" style="width:7.02971in;height:2.08746in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 22-42-22.png" />

Рисунок 5.6 – Создание и добавление значений в таблицу «orders» в БД «test_db_b»

Для последующего сравнения планов запроса необходимо создать индекс для таблицы «orders» в БД «test_db_b»:

> CREATE index idx_orders_price on orders(price);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image18.png" style="width:7.09565in;height:1.08412in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 22-43-45.png" />

Рисунок 5.7 – Создание индекса

### Сознание плана запроса на test_db_a

Установить соединение с БД «test_db_a» и выполнить анализ плана запроса:

> EXPLAIN ANALYZE SELECT c.name, c.city FROM orders o JOIN customers c ON o.customer_id = c.id WHERE o.price = 500;

СУБД выведет параметры плана запроса.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image19.png" style="width:6.7913in;height:2.29507in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 22-55-50.png" />

Рисунок 5.8 – Вывод плана запроса

Включить режим сохранения плана запросов, установив переменную «write_mode» в режим «true» SQL-командой:

> SET ja_plan_manager.write_mode = true;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image20.png" style="width:7.15278in;height:1.13752in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 22-56-56.png" />

Рисунок 5.9 – Режим сохранения плана запросов

Затем выполнить SQL-запрос, который запишется в таблицу «jpm_plans»:

> SELECT c.name, c.city FROM orders o JOIN customers c ON o.customer_id = c.id WHERE o.price = 500;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image10.png" style="width:7.07017in;height:1.9942in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 23-15-05.png" />

Рисунок 5.10

Из записи таблицы «ja_plan_manager.jpm_plans» вывести присвоенное значение «query_hash»:

> SELECT query, query_hash, enable FROM ja_plan_manager.jpm_plans;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image21.png" style="width:7.0531in;height:1.42609in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-16 23-16-26.png" />

Рисунок 5.11 – Вывод присвоенного значения

Полученный хеш запроса равен «334402852». Полученное значение потребуется для экспорта.

### Экспорт плана в каталог пользователя

Выполнить экспорт плана запроса, указав формат вывода JSON в расширении файла, значение «query_hash» равное «334402852» и путь к каталогу пользователя:

> SELECT ja_plan_manager.ja_export_plan(334402852, '/var/lib/jatoba/6/data/plan.json');

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image3.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;"><p>Экспорт плана запроса должен выполняться с тем же присвоенным значением хеш (query_hash).</p>
<p>При вводе не верного значения рационального числа хеш в SQL-команде экспорта будет создан пустой файл плана запроса.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image22.png" style="width:7.03236in;height:1.96528in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-17 00-42-18.png" />

Рисунок 5.12 – SQL-команда экспорта плана запроса

В результате по указанному пути будет создан файл плана запроса в формате JSON.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image23.png" style="width:6.74783in;height:2.80764in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-17 00-43-07.png" />

Рисунок 5.13 – Экспортированный план запроса

### Импорт плана в БД «test_db_b»

Установить соединение с БД «test_db_b» и выполнить импорт плана запроса из каталога пользователя SQL-командой:

> SELECT ja_plan_manager.ja_import_plan(334402852, '/var/lib/jatoba/6/data/plan.json');

Импортированный план запроса запишется в таблицу «jpm_plans».

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image24.png" style="width:7.1108in;height:2.57639in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-17 01-29-08.png" />

Рисунок 5.14 – Импорт плана запроса

Чтобы использовать импортированный план запроса, необходимо включить режим использования сохраненных планов запросов SQL-командой:

> UPDATE ja_plan_manager.jpm_plans SET enable = true where query_hash = 334402852;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image25.png" style="width:7.1625in;height:0.94984in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-17 01-31-23.png" />

Рисунок 5.15 – Режим использования сохраненных планов запросов

Затем необходимо выполнить анализ плана запроса, чтобы убедиться в применении плана запроса:

> EXPLAIN ANALYZE SELECT c.name, c.city FROM orders o JOIN customers c ON o.customer_id = c.id WHERE o.price = 500;

Выведенные параметры плана запроса в БД «test_db_b» идентичны параметрам плана запроса в БД «test_db_a».

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image26.png" style="width:6.98941in;height:2.47917in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-17 01-33-21.png" />

Рисунок 5.16 – Вывод плана запроса в БД «test_db_b»

## Удаление компонента

Удаление компонента производится SQL-командой:

> DROP EXTENSION ja_plan_manager;

После чего необходимо убрать загрузку модуля из postgresql.conf, поставив знак \# или удалив имя расширения из списка расширений.

> \#shared_preload_libraries = 'ja_plan_manager'

### Отключение режима использования плана запросов

Отключить режим использования планов запросов:

> UPDATE ja_plan_manager.jpm_plans SET enable = false where query_hash = 334402852;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image27.png" style="width:7.16099in;height:1.27083in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-17 01-39-55.png" />

Рисунок 6.1 – Отключение режима использования планов запросов

Затем выполнить анализ плана запроса:

> EXPLAIN ANALYZE SELECT c.name, c.city FROM orders o JOIN customers c ON o.customer_id = c.id WHERE o.price = 500;

Убедиться, что изменились параметры плана запроса. В частности, в плане запроса используется сканирование индекса таблицы.

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_plan_manager/media/image28.png" style="width:7.11806in;height:1.76886in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-17 01-41-14.png" />

Рисунок 6.2 – Новый план запроса

## 

| <span id="_Toc215496951" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language – язык структурированных запросов |
|:---|----|----|
| БД | – | База данных |
| ОС | – | Операционная система |
| СУБД | – | Система управления базами данных |

