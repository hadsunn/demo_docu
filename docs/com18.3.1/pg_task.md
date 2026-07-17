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
<p><strong>Руководство по настройке. Часть 5.</strong></p>
<p><strong>Планирование заданий СУБД Компонент «pg_Task»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-05</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 17</p>
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

> **АННОТАЦИЯ**
>
> В документе приведены сведения, описывающие работу планировщика заданий системы управления базами данных (СУБД), компонента pg_Task. Настоящее руководство предназначено для администратора СУБД «Jatoba».
>
> Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/pg_task/media/image1.png" style="width:0.25138in;height:0.25051in" /> **Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/pg_task/media/image2.png" style="width:0.25in;height:0.25in" /> **Дополнительная информация** – указания, позволяющие упростить работу с изделием
>
> Администратор СУБД «Jatoba» должен иметь навыки по работе с СУБД PostgreSQL или защищенной СУБД «Jatoba» (ООО «Газинформсервис»).
>
> <img src="../docs/assets/images/com18.3.1/pg_task/media/image2.png" style="width:0.25in;height:0.25in" /> Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра
>
> 4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.
>
> Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:

- ОС Windows – «C:\Program Files\GIS\Jatoba\5\bin»;

- ОС Linux – «/usr/jatoba-6/bin».

> Для СУБД «Jatoba» версии ядра 4/5/6/18 используется версия компонента — 2.0
>
> <img src="../docs/assets/images/com18.3.1/pg_task/media/image1.png" style="width:0.25139in;height:0.25139in" /> Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!
>
> **СОДЕРЖАНИЕ**

1.  1.  
2.  1.  
    2.  
    3.  
3.  
4.  
5.  

[Назначение компонента 4](#назначение-компонента)[Функциональные возможности 4](#функциональные-возможности)[Установка и настройка 5](#установка-и-настройка)[Установка компонента на ОС Windows 5](#установка-компонента-на-ос-windows)[Установка компонента ОС GNU/Linux 6](#установка-компонента-ос-gnulinux)[Установка компонента в СУБД 8](#установка-компонента-в-субд)[Создание задач для планировщика 11](#создание-задач-для-планировщика)[Удаление задачи 14](#удаление-задачи)[Удаление компонента 15](#удаление-компонента)[Перечень сокращений 16](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент pg_Task является планировщиком асинхронных задач.

## Функциональные возможности

> Компонент позволяет организовать выполнение фоновых заданий на языке SQL в заданное время в заданной базе данных от заданного пользователя.
>
> Для своей работы в каждой базе данных, созданных в рамках сервера СУБД, компонент создает собственную таблицу для управления фоновыми заданиями.
>
> Результаты выполнения заданий сохраняются в текстовом виде в специальном поле таблицы заданий.

# УСТАНОВКА И НАСТРОЙКА

## Установка компонента на ОС Windows

> Компонент устанавливается в составе СУБД «Jatoba» под управлением ОС Windows при первичной установке.
>
> а) в окне «Выбор типа установки» следует выбрать тип установки «Выборочная» (см. рис. [2.1](#_bookmark4));

<img src="../docs/assets/images/com18.3.1/pg_task/media/image3.png" style="width:3.76015in;height:2.94281in" />

> <span id="_bookmark4" class="anchor"></span>Рисунок 2.1 – Окно выбора типа установки
>
> б) в диалоговом окне (см. рис. [2.2](#_bookmark5)) выбрать «Планирование заданий СУБД»;

<img src="../docs/assets/images/com18.3.1/pg_task/media/image4.png" style="width:3.9208in;height:3.06375in" />

> <span id="_bookmark5" class="anchor"></span>Рисунок 2.2 – Выбор устанавливаемых компонент
>
> в) в открывшемся окне «Все готово к установке Jatoba» запустить процесс установки, нажав кнопку «Установить» (см. рис. [2.3](#_bookmark6));
>
> <img src="../docs/assets/images/com18.3.1/pg_task/media/image5.png" style="width:4.06013in;height:3.16875in" />
>
> <span id="_bookmark6" class="anchor"></span>Рисунок 2.3 – Окно «Все готово к установке Jatoba»

## Установка компонента ОС GNU/Linux

> Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке, либо доустановить.
>
> Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

> Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

> apt-get install jatoba4-pg-task

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:

> yum install jatoba4-pg-task
>
> Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

> apt-get install jatoba4-pg-task
>
> Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba1-pg-task и т.п.
>
> Удаление модуля также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

## Установка компонента в СУБД

> Установка производится администратором базы данных. Для установки планировщика не требуется загрузка расширения, достаточно прописать в postgresql.conf:
>
> shared_preload_libraries = 'pg_task'
>
> В этом же файле можно по желанию добавить значение для пустой строки (параметр null в таблице [2.1](#_bookmark9)):
>
> pg_task.default_null = '\\N'
>
> Можно также добавить список баз данных и пользователей, на которых должны выполняться задачи, в формате json-строки. Если БД и/или роли не существуют на текущий момент, то они будут созданы.
>
> pg_task.json = '\[{"data":"postgres"}\]'
>
> Примеры:
>
> pg_task.json= '\[{"data":"db1", "user":"user1"}, {"data":"db2", "user":"user2"}\]'
>
> pg_task.json = '\[{"data":"database1"},{"data":"database2","user":"username2"},
>
> {"data":"database3","schema":"schema3"},{"data":"database4","ta
>
> ble":"table4"},{"data":"database5","timeout":100}\]'
>
> Если эти данные не указать, по умолчанию планировщик создаст таблицы task во всех базах данных от имени пользователей баз данных и в схемах по умолчанию для этих пользователей.
>
> <img src="../docs/assets/images/com18.3.1/pg_task/media/image2.png" style="width:0.25in;height:0.24833in" /> Пользователь по умолчанию – postgres. База данных по умолчанию – postgres. Схема – public.
>
> Использование компонента доступно для пользователей, имеющих доступ к таблице
>
> task.
>
> После старта сервера планировщик создает, если еще не создана, таблицу задач со следующими столбцами (см. таблицу [2.1](#_bookmark9)):
>
> <span id="_bookmark9" class="anchor"></span>Таблица 2.1 – Таблица задач

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 15%" />
<col style="width: 17%" />
<col style="width: 20%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Тип</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обязательный</strong></p>
<p><strong>(ненулевой)</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Значение по</strong></p>
<p><strong>умолчанию</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>id</p>
</blockquote></td>
<td><blockquote>
<p>BIGSERIAL</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>autoincrement</p>
</blockquote></td>
<td><blockquote>
<p>первичный ключ</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>parent</p>
</blockquote></td>
<td><blockquote>
<p>BIGINT</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>-</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>внешний ключ к родительской</p>
<p>задаче (при необходимости)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>plan</p>
</blockquote></td>
<td><blockquote>
<p>TIMESTAMP</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>CURRENT_TIME STAMP</p>
</blockquote></td>
<td><blockquote>
<p>запланированное время начала</p>
<p>(по умолчанию – как можно быстрее)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>start</p>
</blockquote></td>
<td><blockquote>
<p>TIMESTAMP</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>-</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>фактическое время начала</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>stop</p>
</blockquote></td>
<td><blockquote>
<p>TIMESTAMP</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>-</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>фактическое время остановки</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>active</p>
</blockquote></td>
<td><blockquote>
<p>INTERVAL</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>1 hour</p>
</blockquote></td>
<td><blockquote>
<p>период, в который задача</p>
<p>исполняется</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>live</p>
</blockquote></td>
<td><blockquote>
<p>INTERVAL</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>0 sec</p>
</blockquote></td>
<td><blockquote>
<p>максимальное время жизни</p>
<p>текущего рабочего процесса</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>repeat</p>
</blockquote></td>
<td><blockquote>
<p>INTERVAL</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>0 sec</p>
</blockquote></td>
<td><blockquote>
<p>интервал повторения задачи</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>timeout</p>
</blockquote></td>
<td><blockquote>
<p>INTERVAL</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>0 sec</p>
</blockquote></td>
<td><blockquote>
<p>позволяет ограничивать время</p>
<p>выполнения задачи</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>count</p>
</blockquote></td>
<td><blockquote>
<p>INTEGER</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>0</p>
</blockquote></td>
<td><blockquote>
<p>количество одновременно</p>
<p>выполняемых задач в группе</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>hash</p>
</blockquote></td>
<td><blockquote>
<p>INTEGER</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>хэш-сумма групповой задачи</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>max</p>
</blockquote></td>
<td><blockquote>
<p>INT</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>0</p>
</blockquote></td>
<td><blockquote>
<p>максимальное количество одновременно выполняемых</p>
<p>задач в группе</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pid</p>
</blockquote></td>
<td><blockquote>
<p>INT</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>-</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>идентификатор процесса,</p>
<p>выполняющего задачу</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>state</p>
</blockquote></td>
<td><blockquote>
<p>STATE</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>PLAN</p>
</blockquote></td>
<td><blockquote>
<p>статус задачи: PLAN, TAKE,</p>
<p>WORK, DONE, FAIL, STOP</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>delete</p>
</blockquote></td>
<td><blockquote>
<p>BOOLEAN</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>true</p>
</blockquote></td>
<td><blockquote>
<p>удалять задачу автоматически</p>
<p>после выполнения, если нет результата (вывод равен нулю)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>drift</p>
</blockquote></td>
<td><blockquote>
<p>BOOLEAN</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>false</p>
</blockquote></td>
<td><blockquote>
<p>предотвращать ли отсчет</p>
<p>времени при повторе задачи</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>header</p>
</blockquote></td>
<td><blockquote>
<p>BOOLEAN</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>true</p>
</blockquote></td>
<td><blockquote>
<p>флаг присоединения заголовка с названием колонок, если</p>
<p>задача возвращает таблицу</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>string</p>
</blockquote></td>
<td><blockquote>
<p>BOOLEAN</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>true</p>
</blockquote></td>
<td><blockquote>
<p>флаг, отображающий, является</p>
<p>ли результат вывода строковым типом</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 15%" />
<col style="width: 17%" />
<col style="width: 20%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Тип</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обязательный</strong></p>
<p><strong>(ненулевой)</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Значение по</strong></p>
<p><strong>умолчанию</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>delimiter</p>
</blockquote></td>
<td><blockquote>
<p>CHAR</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>\t</p>
</blockquote></td>
<td><blockquote>
<p>символ-разделитель,</p>
<p>используемый для оформления строки результата (параметр output)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>escape</p>
</blockquote></td>
<td><blockquote>
<p>CHAR</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>escape-символ, используемый для оформления строки</p>
<p>результата</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>quote</p>
</blockquote></td>
<td><blockquote>
<p>CHAR</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>символ кавычек,</p>
<p>используемый для оформления строки результата</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>data</p>
</blockquote></td>
<td><blockquote>
<p>TEXT</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>-</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>пользовательская информация</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>error</p>
</blockquote></td>
<td><blockquote>
<p>TEXT</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>-</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>текст ошибки</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>group</p>
</blockquote></td>
<td><blockquote>
<p>TEXT</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>group</p>
</blockquote></td>
<td><blockquote>
<p>групповая задача</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>input</p>
</blockquote></td>
<td><blockquote>
<p>TEXT</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>непосредственно сама задача</p>
<p>для выполнения на языке SQL</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>null</p>
</blockquote></td>
<td><blockquote>
<p>TEXT</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>+</p>
</blockquote></td>
<td><blockquote>
<p>\N</p>
</blockquote></td>
<td><blockquote>
<p>текст «пустого» значения, используется для оформления</p>
<p>строки результата</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>output</p>
</blockquote></td>
<td><blockquote>
<p>TEXT</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>-</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>полученный результат</p>
<p>выполнения задачи</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>remote</p>
</blockquote></td>
<td><blockquote>
<p>TEXT</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>-</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>подключение к удаленной базе</p>
<p>данных (при необходимости)</p>
</blockquote></td>
</tr>
</tbody>
</table>

# СОЗДАНИЕ ЗАДАЧ ДЛЯ ПЛАНИРОВЩИКА

> Планировщик запускает несколько фоновых рабочих процессов:

- один для отслеживания изменений в конфигурационном файле и запуске/остановке при необходимости остальных фоновых процессов планировщика;

- по одному фоновому рабочему процессу для каждой базы для проверки запланированных задач в каждой базе и запуске при необходимости выполнения задач.

> Для быстрого выполнения задачи нужно выполнить SQL-команду:
>
> INSERT INTO task (input) VALUES ('SELECT now()');

- input – задача, которую необходимо выполнить.

> Результат выполнения задачи планировщик записывает в столбец результата (output) в текстовом виде. Если в результате выполнения задачи будет несколько колонок, то pg_task создаст текстовую таблицу в колонке output.
>
> В результате выполнения задачи может быть несколько строк, все они добавятся в колонку результата.
>
> Для того, чтобы создать задачу и выполнить ее не сразу, а в определенное время, достаточно добавить в таблицу task следующую команду:
>
> INSERT INTO task (plan, input) VALUES (now() + '5 min'::INTERVAL, 'SELECT now()');

- plan – планируемое время запуска задачи в стандартных форматах (например: "now() + '5 min'::INTERVAL" или, указав время, "2021-09-01 00:00:00");

- input – задача, которую необходимо выполнить.

> Для того, чтобы поставить задачу на периодическое исполнение, нужно записать в таблицу task следующую команду:
>
> INSERT INTO task (repeat, input) VALUES ('5 min', 'SELECT now()');

- repeat – периодичность запуска задачи;

- input – задача которую необходимо выполнить.

> <img src="../docs/assets/images/com18.3.1/pg_task/media/image1.png" style="width:0.25138in;height:0.25045in" />Если время исполнения задачи превышает период запуска задачи, то возможна ситуация, когда новая задача запустится до того, как закончится первая и задачи будут выполняться параллельно, что может вызвать некоторые проблемы.
>
> Для недопущения подобной ситуации, нужно правильно оценить время выполнения задачи, либо использовать опцию drift, которая будет отсчитывать время запуска последующей задачи от момента завершения первой задачи:
>
> INSERT INTO task (repeat, input, drift) VALUES ('5 min', 'SELECT now()', false);

- repeat – периодичность запуска задачи;

- input – задача которую необходимо выполнить;

- drift – флаг, который указывает, отсчитывать ли время последующего запуска задачи от старта первой задачи (true) или от окончания первой задачи (false, по умолчанию).

> При возникновении ошибки при выполнении задачи, она перехватывается и в текстовом виде записывается в колонку error, а задаче присваивается соответствующее состояние в колонке state.
>
> Например, выполнение команды:
>
> INSERT INTO task (input) VALUES ('SELECT 1/0');
>
> создаст запись в колонке error:
>
> ....
>
> sqlerror\33816706 message\division by zero
>
> ....
>
> При необходимости параллельного выполнения нескольких задач – можно создать группы:
>
> INSERT INTO task ("group", max, input) VALUES ('group_1', 2, 'SELECT 1');
>
> INSERT INTO task ("group", max, input) VALUES ('group_1', 2, 'SELECT 2');

- group – уникальное имя группы;

- max – количество параллельно исполняемых задач в группе;

- input – задача, которую необходимо выполнить.

> Также можно увеличить количество параллельных задач для определенной группы:
>
> INSERT INTO task ("group", max, input) VALUES ('group_1', 3, 'SELECT 3');

- группа group_1 имеет 3 параллельных задачи.

> Запуск задачи на удаленной базе данных:
>
> INSERT INTO task (input, remote) VALUES ('SELECT now()', 'user=user host=host');

- input – задача, которую необходимо выполнить;

- remote – данные для подключения к удаленной базе данных, входные параметры – user, password, host, port, dbname.

> Все вышеуказанные примеры использования компонента можно комбинировать под конкретные цели.

# УДАЛЕНИЕ ЗАДАЧИ

> Для удаления задачи необходимо удалить строку (строки) конкретной задачи из таблицы task.
>
> <img src="../docs/assets/images/com18.3.1/pg_task/media/image2.png" style="width:0.25in;height:0.24897in" />Проще всего идентифицировать строки по полям input, id, или parent.
>
> DELETE FROM task WHERE id = 77;
>
> DELETE FROM task WHERE parent = 77;
>
> DELETE FROM task WHERE input = 'SELECT now()';

# УДАЛЕНИЕ КОМПОНЕНТА

> Для удаления компонента достаточно закомментировать в конфигурационном файле
>
> «postgresql.conf» строку:
>
> \#shared_preload_libraries = 'pg_task'

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 8%" />
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
<p>Structured Query Language – язык структурированных запросов</p>
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
<p>СУБД</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Система управления базами данных</p>
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
