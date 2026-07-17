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
<p><strong>Руководство по настройке. Часть 12.</strong></p>
<p><strong>Централизованный сбор записей событий в СУБД. Компонент «ja_Log»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-12</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 65</p>
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

# <img src="../docs/assets/images/com18.3.1/jalog/media/image1.png" style="width:0.2523in;height:0.25208in" />АННОТАЦИЯ

> В документе приведены сведения необходимые для установки и эксплуатации компонента централизованного сбора записей событий СУБД «ja_Log» (далее по тексту – компонент либо ja_Log).
>
> Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image1.png" style="width:0.25139in;height:0.25139in" />**Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.25in;height:0.25in" />**Дополнительная информация** – указания, позволяющие упростить работу с изделием
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.25208in;height:0.25208in" />Настоящее руководство предназначено для администраторов СУБД «Jatoba».

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра</p>
<p>18.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 5.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-5/bin».</p>
<p>Используется версия компонента — 3.0</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только</p>
<p>на ОС, указанных в формуляре на поставку!</p>
</blockquote></td>
</tr>
</tbody>
</table>

# СОДЕРЖАНИЕ

# 

1.  [Назначение компонента 5](#назначение-компонента)

> <img src="../docs/assets/images/com18.3.1/jalog/media/image3.png" style="width:0.22in;height:0.12333in" /> [Условия применения 7](#условия-применения)

2.  [Установка и настройка 8](#установка-и-настройка)

<img src="../docs/assets/images/com18.3.1/jalog/media/image4.png" style="width:0.23667in;height:0.12333in" /> [Установка компонента «ja_Log» в ОС GNU/Linux 8](#установка-компонента-ja_log-в-ос-gnulinux)

3.  [Настройка архитектуры агент-сервер на ОС GNU/Linux 10](#настройка-архитектуры-агент-сервер-на-ос-gnulinux)

<img src="../docs/assets/images/com18.3.1/jalog/media/image5.png" style="width:0.23333in;height:0.12332in" /> [Служебная СУБД. Конфигурирование серверной части компонента 10](#служебная-субд.-конфигурирование-серверной-части-компонента)

1.  [Создание служебной БД и установка расширения 10](#создание-служебной-бд-и-установка-расширения)

2.  [Создание технологической учетной записи 12](#создание-технологической-учетной-записи)

3.  [Создание табличного пространства для хранения архивных секций 14](#создание-табличного-пространства-для-хранения-архивных-секций)

4.  [Установка параметров jalog_server.yml 15](#установка-параметров-jalog_server.yml)

5.  [Установка службы jalog_server 16](#установка-службы-jalog_server)

6.  [Добавление нового агента в служебной СУБД 17](#добавление-нового-агента-в-служебной-субд)

7.  [Изменение параметров агента в служебной СУБД 18](#изменение-параметров-агента-в-служебной-субд)

8.  [Добавление новой задачи агента в служебной СУБД 20](#добавление-новой-задачи-агента-в-служебной-субд)

9.  [Изменение параметров задачи в служебной СУБД 22](#изменение-параметров-задачи-в-служебной-субд)

10. [Применение маски для журналов событий 22](#применение-маски-для-журналов-событий)

11. [Запуск сервера на служебной СУБД 24](#_bookmark20)

12. [Проверка содержания таблицы jalog.logcsv 25](#проверка-содержания-таблицы-jalog.logcsv)

13. [Удаление агента в служебной СУБД 25](#удаление-агента-в-служебной-субд)

14. [Удаление задачи агента из служебной СУБД 26](#удаление-задачи-агента-из-служебной-субд)

15. [Функционал ротации журналов служебной СУБД 27](#функционал-ротации-журналов-служебной-субд)

<img src="../docs/assets/images/com18.3.1/jalog/media/image6.png" style="width:0.23333in;height:0.12333in" /> [Целевая СУБД. Конфигурирование клиентской части компонента 29](#целевая-субд.-конфигурирование-клиентской-части-компонента)

1.  [Добавление в список логирования на целевой СУБД 29](#добавление-в-список-логирования-на-целевой-субд)

2.  [Настройка конфигурационного файла jalog_agent.yml 30](#настройка-конфигурационного-файла-jalog_agent.yml)

3.  [Установка службы jalog_agent 31](#установка-службы-jalog_agent)

4.  [Запуск агента на целевой СУБД 31](#запуск-агента-на-целевой-субд)

<!-- -->

4.  [Структура конфигурационных файлов 34](#структура-конфигурационных-файлов)

<img src="../docs/assets/images/com18.3.1/jalog/media/image7.png" style="width:0.23667in;height:0.12333in" /> [Структура конфигурационного файла сервера jalog_server.yml 34](#структура-конфигурационного-файла-сервера-jalog_server.yml)

1.  [Собственные параметры сервера 34](#собственные-параметры-сервера)

2.  [Параметры TLS 35](#параметры-tls)

3.  [Параметры подключения к базе данных 35](#параметры-подключения-к-базе-данных)

<img src="../docs/assets/images/com18.3.1/jalog/media/image8.png" style="width:0.23667in;height:0.12332in" /> [Структура конфигурационного файла агента jalog_agent.yml 36](#структура-конфигурационного-файла-агента-jalog_agent.yml)

5.  [Настройка TLS для компонента в ОС GNU/Linux 38](#настройка-tls-для-компонента-в-ос-gnulinux)

6.  [Обновление компонента 39](#обновление-компонента)

<img src="../docs/assets/images/com18.3.1/jalog/media/image9.png" style="width:0.23333in;height:0.12333in" /> [Обновление компонента в ОС GNU/Linux с версии 1.2 до версии 2.0 39](#обновление-компонента-в-ос-gnulinux-с-версии-1.2-до-версии-2.0)

<img src="../docs/assets/images/com18.3.1/jalog/media/image10.png" style="width:0.23333in;height:0.12333in" /> [Обновление компонента в ОС GNU/Linux с версии 2.0 до версии 2.1 41](#обновление-компонента-в-ос-gnulinux-с-версии-2.0-до-версии-2.1)

<img src="../docs/assets/images/com18.3.1/jalog/media/image11.png" style="width:0.23333in;height:0.12332in" /> [Обновление компонента ОС GNU/Linux с версии 2.1 до версии 3.0 42](#обновление-компонента-ос-gnulinux-с-версии-2.1-до-версии-3.0)

1.  [Обновление компонента на служебной СУБД 42](#обновление-компонента-на-служебной-субд)

2.  [Обновление компонента на целевой СУБД 47](#обновление-компонента-на-целевой-субд)

<!-- -->

7.  [Удаление компонента в ОС GNU/Linux 49](#удаление-компонента-в-ос-gnulinux)

8.  [Ошибки 51](#ошибки)

<img src="../docs/assets/images/com18.3.1/jalog/media/image12.png" style="width:0.23in;height:0.12332in" /> [Дублирование сообщений при рассылке уведомлений 51](#дублирование-сообщений-при-рассылке-уведомлений)

<img src="../docs/assets/images/com18.3.1/jalog/media/image13.png" style="width:0.23in;height:0.12333in" /> [Ошибка при выполнении подключения агента к серверу 51](#ошибка-при-выполнении-подключения-агента-к-серверу)

<img src="../docs/assets/images/com18.3.1/jalog/media/image14.png" style="width:0.23in;height:0.12333in" /> [Ошибка при подключении компонента «jaLog» к СУБД «Jatoba» 52](#ошибка-при-подключении-компонента-jalog-к-субд-jatoba)

[Приложение 1 53](#приложение-1)

[Пример установки СУБД «Jatoba» из локального репозитория для ОС Ubuntu 53](#пример-установки-субд-jatoba-из-локального-репозитория-для-ос-ubuntu)

[Приложение 2 60](#приложение-2)

[Структура конфигурационного файла сервера jalog_server.yml 60](#структура-конфигурационного-файла-сервера-jalog_server.yml-1)

[Структура конфигурационного файла агента jalog_agent.yml 61](#структура-конфигурационного-файла-агента-jalog_agent.yml-1)

[Термины и определения 63](#термины-и-определения)

[Перечень сокращений 64](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент «ja_Log» предназначен для централизованного сбора записей событий с целевых СУБД «Jatoba», также компонентов «jaDog» и «ja_seceventlog», в служебную СУБД
>
> «Jatoba data safe» (далее по тексту – JDS).
>
> Компонент работает по клиент-серверной технологии. Возможна клиент-серверная и локальная установка.
>
> При клиент-серверной установке на серверах целевых СУБД устанавливается агент компонента, а на сервере служебной СУБД серверная часть компонента. Передача данных осуществляется по протоколу Libpq или TLS.
>
> ja_Log agent

JDS

ja_Log

> server

DB ja_Log

> Jatoba

Master

ja_Log

> agent

Jatoba

> Slave

Replication

jatoba_log

jaseceventlog

> jatoba_log jaseceventlog
>
> Рисунок 1.1 – Схема работы компонента при клиент-серверной установке
>
> При локальной установке на сервере СУБД устанавливается агент и сервер компонента. Локальная установка обеспечивает получение журналов работы компонента
>
> «ja_Log», а также компонента «JDS». Передача данных в этом осуществляется по внутреннему интерфейсу.

ja_log \_server

ja_log

JDS

ja_log \_agen t

/ log

> Рисунок 1.2 – Схема работы компонента при локальной установке
>
> Агент из каталога СУБД /log передает события безопасности серверу компонента
>
> «ja_Log», который записывает их в служебную БД.
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image1.png" style="width:0.25139in;height:0.25139in" />При установке сервера и агента на одном экземпляре БД необходимо избегать полного логирования всех операций log_statement = 'all', т.к. в таком случае файлы журналов будут накапливать как записи самих запросов, так и записи записей этих запросов в служебную таблицу компонента, что приведет к разрастанию этих файлов.
>
> Также необходимо избегать использования log_statement = 'mod', т.к. в этом случае будет выполняться журналирования всех INSERT-запросов, что также приведет к прогрессивному увеличению файлов журналов.
>
> Компонент организовывает секционирование таблицы журнала событий с секцией равной одним суткам. В расширении jalog для БД применяется функция, которая на вход принимает дату и создает секцию для таблицы журнала событий соответствующего календарного дня. Секции таблицы журнала событий при помощи функции могут создаваться администратором СУБД как заранее, так и автоматически при вставке новых записей событий. При миграции с предыдущих версий компонента будет создана отдельная таблица, содержащая все предыдущие журналы событий, а также записи, по которым по каким-то причинам не определена секция в основной таблице журнала событий.

## <img src="../docs/assets/images/com18.3.1/jalog/media/image30.png" style="width:0.27in;height:0.14in" /> Условия применения

> В текущей реализации не поддерживается управление с помощью пользовательского веб-интерфейса для администраторов «Jatoba Data Safe». Управление осуществляется через корректировку управляющих параметров и конфигурационных файлов.
>
> При совместном использовании компонента управления режимом работы узлов кластера «ja_Dog» и компонента Централизованный сбор записей событий СУБД «ja_Log», рекомендуется хранить журналы аудита вне каталога данных.

# УСТАНОВКА И НАСТРОЙКА

> Установка модуля должна производиться от имени пользователя, обладающего административными привилегиями в системе. Компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

## <img src="../docs/assets/images/com18.3.1/jalog/media/image31.png" style="width:0.27667in;height:0.14in" /> Установка компонента «ja_Log» в ОС GNU/Linux

> Установка компонента осуществляется в процессе установки СУБД «Jatoba», также компонент можно установить опционально после основной инсталляции СУБД.
>
> Установку компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

> Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.25in;height:0.25in" />для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

> apt-get install jatoba\<ver\>-ja-log
>
> Здесь и далее по документу \<ver\> - номер версии СУБД «Jatoba».
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image32.png" style="width:7.11064in;height:2.56719in" />
>
> Рисунок 2.1 – Установка компонента в ОС GNU/Linux

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки следующая:

> yum install jatoba\<ver\>-ja-log
>
> Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

> apt-get install jatoba\<ver\>-ja-log
>
> В процессе установки компонента выполняется создание рабочих директорий, выставление прав доступа, а также создание необходимых служб для запуска.
>
> Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется. Например, jatoba5-ja-log и т.п.
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

# НАСТРОЙКА АРХИТЕКТУРЫ АГЕНТ-СЕРВЕР НА ОС GNU/LINUX

> В разделе описывается настройка компонента ja_Log на ОС GNU Linux в архитектуре агент-сервер. В качестве примера используются 2 ЭВМ c ОС Ubuntu. Параметры, которых приведены в таблице [3.1](#_bookmark5).
>
> <span id="_bookmark5" class="anchor"></span>Таблица 3.1 – Параметры ЭВМ

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Название ЭВМ</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>IP</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Роль</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>node54</p>
</blockquote></td>
<td><blockquote>
<p>10.116.102.54</p>
</blockquote></td>
<td><blockquote>
<p>Служебная СУБД (сервер)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>node55</p>
</blockquote></td>
<td><blockquote>
<p>10.116.102.55</p>
</blockquote></td>
<td><blockquote>
<p>Целевая СУБД (агент)</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Целесообразнее в качестве сервера использовать хост с установленным компонентом
>
> «Jatoba Data Safe» (JDS). Используемая СУБД считается служебной и в ней же будет располагаться БД с собранными событиями безопасности компонентом ja_Log.

## <img src="../docs/assets/images/com18.3.1/jalog/media/image33.png" style="width:0.28in;height:0.14in" /> Служебная СУБД. Конфигурирование серверной части компонента

> Конфигурирование серверной части компонента потребует выполнения нижеописанных действий.

## Создание служебной БД и установка расширения

> Авторизоваться в СУБД при помощи утилиты psql от имени привилегированного пользователя СУБД:
>
> \# su – postgres psql -U postgres
>
> Создать отдельную БД для компонента:
>
> CREATE DATABASE ja_log;
>
> Подключиться к созданной БД и установить расширение «jalog» в служебную БД:
>
> \c ja_log
>
> ja_log=# CREATE EXTENSION jalog;

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 93%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><img src="../docs/assets/images/com18.3.1/jalog/media/image1.png" style="width:0.25208in;height:0.25208in" /></p>
</blockquote></th>
<th><blockquote>
<p><strong>ВАЖНО!</strong> В случае совместной работы компонента «ja_Log» с SecurityProfile в</p>
<p>одной СУБД, расширение «jalog» должно устанавливаться в ту же БД, в которую установлено расширение «securityprofile».</p>
</blockquote></th>
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
<th><blockquote>
<p>№ изменения:</p>
</blockquote></th>
<th><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></th>
<th><blockquote>
<p>Дата внесения изм:</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> Справочная информация по настройке компонента SecurityProfile приведена в документе «Руководство администратора СУБД Jatoba» 643.72410666.00067-08 95 01

<img src="../docs/assets/images/com18.3.1/jalog/media/image34.jpeg" style="width:7.11063in;height:1.54031in" />

> Рисунок 3.1 – Создание служебной БД и установка расширения Проверить установку расширения в служебной СУБД при помощи команды:

<img src="../docs/assets/images/com18.3.1/jalog/media/image35.png" style="width:7.07118in;height:4.46083in" />

> \dx+ jalog
>
> Рисунок 3.2 – Проверка установленного расширения
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.25in;height:0.25in" />Расширение может быть установлено в разделе «Ландшафт» компонента JDS.

## Создание технологической учетной записи

> После установки расширения компонента администратор создает технологическую учетную запись (УЗ) jalog_user, при помощи которой компонент выполняет свои функции в СУБД.
>
> Технологическая УЗ создается в рамках групповой роли jalog_role, у которой имеются права на доступ к схемам, процедурам и табличным пространствам компонента «ja_Log».
>
> Групповая роль jalog_role создается автоматически в процессе установки расширения компонента в БД. Для данной групповой роли автоматически назначаются права доступа владельца БД, схем, функций и процедур компонента «ja_Log».
>
> Создание технологической УЗ jalog_user осуществляется при помощи SQL-команды:
>
> SELECT jalog.add_jalog_user('jalog_user');
>
> Проверить успешность создания в СУБД технологической учетной записи jalog_user при помощи команды:

<img src="../docs/assets/images/com18.3.1/jalog/media/image36.png" style="width:7.11255in;height:3.09031in" />

> \du
>
> Рисунок 3.3 – Список ролей БД
>
> В перечне пользователей должна быть созданная технологическая УЗ.
>
> Для установки пароля технологической УЗ для подключения к СУБД необходимо выполнить SQL-команду следующего синтаксиса:
>
> ALTER ROLE jalog_user WITH PASSWORD '\[password_jalog_user\]';

<img src="../docs/assets/images/com18.3.1/jalog/media/image37.jpeg" style="width:7.11064in;height:0.99781in" />

> Рисунок 3.4 – Создание пароля технологической УЗ
>
> После создания пароля технологической УЗ необходимо убедится в том, что технологическая УЗ корректно наследует атрибуты групповой роли jalog_role с помощью следующей команды:

<img src="../docs/assets/images/com18.3.1/jalog/media/image38.png" style="width:7.11063in;height:1.86969in" />

> \drg
>
> Рисунок 3.5 – Проверка наследования атрибутов групповой роли
>
> Для подключения к БД необходимо добавить параметры доступа технологической записи в конфигурационный файл /var/lib/jatoba/\<ver\>/data/pg_hba.conf:
>
> host ja_log jalog_user 127.0.0.1/32 scram-sha-256
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image39.png" style="width:6.34649in;height:3.18604in" />
>
> Рисунок 3.6 – Содержимое конфигурационного файла pg_hba.conf
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.25in;height:0.25in" />В конфигурационном файле pg_hba.conf может указываться внешний IP-адрес сервера СУБД, на котором установлено расширение ja_Log и настроена технологическая запись пользователя.

## Создание табличного пространства для хранения архивных секций

> Для хранения архивных секций необходимо создать отдельное табличное пространство.
>
> Для создания такого табличного пространства необходимо

1)  Создать в ОС каталог для хранения данных табличного пространства:

> mkdir /var/lib/jatoba/\<ver\>/ts_jalog_archive
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image1.png" style="width:0.25139in;height:0.25139in" />Пользователь postgres должен иметь права доступа на созданный каталог.

2)  Авторизоваться в СУБД при помощи утилиты psql от имени привилегированного пользователя СУБД:

> \# su – postgres psql -U postgres

3)  Создать в БД табличное пространство для хранения архивных секций

> CREATE TABLESPACE ts_jalog_archive LOCATION '/var/lib/jatoba/\<ver\>/ts_jalog_archive';

4)  Предоставить права доступа для групповой роли jalog_role к созданному табличному пространству:

<img src="../docs/assets/images/com18.3.1/jalog/media/image40.png" style="width:7.09487in;height:1.15833in" />

> GRANT CREATE ON TABLESPACE ts_jalog_archive TO jalog_role;
>
> Рисунок 3.7 – Предоставление групповой роли прав доступа к табличному пространству

## Установка параметров jalog_server.yml

> Запуск агента сервера сбора событий безопасности требует установки параметров в конфигурационном файле «jalog_server.yml».
>
> Для внесения изменений необходимо открыть конфигурационный файл
>
> «jalog_server.yml» в терминале ОС:
>
> nano /usr/jatoba-\<ver\>/etc/jalog/jalog_server.yml
>
> и указать следующие значения:

\# Собственные параметры сервера

server:

> listen_ip: 10.116.102.54

прослушивает сервер listen_port: 10051

\# Параметры TLS

tls:

> \# cert_file: \# key_file: \# ca_file:
>
> \# crl_file:

\# IP-адрес или DNS имя, который

\# Порт, который прослушивает сервер

\# Путь до сертификата

\# Путь до файла ключа (только Linux) \# Путь до файла ca (только Linux)

\# Путь до файла crl (только Linux)

\# Параметры подключения к базе данных

> database_params:
>
> conn_string: host=127.0.0.1 user=jalog_user dbname=ja_log password=w12345678 \# Строка подключения к СУБД
>
> \# Параметры логирования
>
> log:
>
> path: "/usr/jatoba-18/var/log/jalog/" \# Путь к каталогу логов (Linux)
>
> \# path: "C:\\Program files\\GIS\\Jatoba\\18\\var\\log\\jalog\\" \# Путь к каталогу логов (Windows)
>
> filename: jalog_server-%Y-%m-%d \# Шаблон для имени файлов логов
>
> level: info \# Уровень логирования
>
> type: csv \# Форматы файлов логов (txt, csv, json)
>
> filemode: 0600 \# Параметр доступа к файлам логов (только Linux)
>
> rotation_age: 1d \# Интервал ротации файлов логов по времени
>
> rotation_size: 10MB \# Интервал ротации по объему файла логов
>
> truncate_on_rotation: false \# Признак перезаписи файла логов
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.25in;height:0.24921in" />Компонент jalog при установке в конфигурационном файле параметра «type: json» обеспечивает поддержку журналов событий PostgreSQL – PG-json.
>
> Параметр level может принимать следующие значения:

- fatal;

- error;

- warning;

- info;

- debug1;

- debug2;

> После установки параметров в файле jalog_server.yml можно устанавливать службы агентов компонента на серверах с целевыми СУБД (см. п.п. [3.2.3](#установка-службы-jalog_agent)).

## Установка службы jalog_server

> Во время установки на служебной СУБД устанавливается служба «jalog_server» от имени и с правами привилегированного пользователя.
>
> Необходимо добавить службу jalog_server в автозапуск ОС:
>
> \# systemctl enable jalog_server

## Добавление нового агента в служебной СУБД

> Авторизоваться в psql от имени привилегированного пользователя:
>
> \# su – postgres psql -U postgres
>
> Подключиться к базе данных ja_log:
>
> \c ja_log
>
> Добавить нового агента можно при помощи запроса следующего синтаксиса:
>
> SELECT jalog.agent_create('\[agent_name\]', '\[ip_agent\]', \[port_agent\], \[true/false\]);
>
> Значение параметров agent_name, ip_agent и port_agent должно совпадать с соответствующими параметрами из конфигурационного файла агента (см. п. [3.2.2](#настройка-конфигурационного-файла-jalog_agent.yml)). Значение true/false определяет включен или выключен создаваемый агент.

## Пример:

<img src="../docs/assets/images/com18.3.1/jalog/media/image41.jpeg" style="width:7.11063in;height:1.69531in" />

> SELECT jalog.agent_create('jalog_agent', '10.116.102.55',
>
> 22345, true);
>
> Рисунок 3.8 – Добавление нового агента
>
> После добавления агента необходимо убедится в корректности его параметров при помощи следующего запроса:
>
> SELECT \* FROM jalog.agents \gx

<img src="../docs/assets/images/com18.3.1/jalog/media/image42.jpeg" style="width:7.11061in;height:2.21844in" />

> Рисунок 3.9 – Проверка параметров нового агента
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.25in;height:0.24894in" />Если служба агента на целевой СУБД не настроена или возникли проблемы с подключением агента к служебной СУБД параметр connect_status будет иметь значение f.

## Изменение параметров агента в служебной СУБД

> Активация/деактивация агента в служебной СУБД определяется при его создании (см. п. [3.1.6](#добавление-нового-агента-в-служебной-субд)). В случае если агент добавлялся в служебную СУБД деактивированным его активировать при помощи следующего SQL-запроса:
>
> SELECT jalog.agent_update (\[agent_id\], status := true);
>
> Где agent_id – идентификатор агента, параметры которого необходимо изменить.

## Пример:

> SELECT jalog.agent_update (1, status := true);
>
> Далее необходимо убедиться, что агент активирован:
>
> SELECT \* FROM jalog.agents \gx
>
> В результате выполнения команды активации агента значение в колонке «status» сменится с «f» – (false) на «t» – (true).
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image43.jpeg" style="width:7.11064in;height:3.26469in" />
>
> Рисунок 3.10 – Активация и проверка агента Деактивация агента производится при помощи следующего SQL-запроса:
>
> SELECT jalog.agent_update (\[agent_id\], status := false)

## Пример:

> SELECT jalog.agent_update (1, status := false)
>
> Далее необходимо убедиться, что агент деактивирован:
>
> SELECT \* from jalog.agents;
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image44.jpeg" style="width:7.11064in;height:3.26469in" />
>
> Рисунок 3.11 – Деактивация и проверка агента
>
> В результате выполнения команды активации агента значение в колонке «status» сменится с «t» – (true) на «f» – (false).
>
> По примеру указанных выше команд возможно изменение номера порта при помощи следующего запроса:
>
> SELECT jalog.agent_update (\[agent_id\], port:= \[agent_port\])
>
> Аналогично изменяются другие параметры агента.

## Добавление новой задачи агента в служебной СУБД

> Для каждого агента можно создать произвольное количество задач. Авторизоваться в psql от имени привилегированного пользователя:
>
> \# su – postgres psql -U postgres
>
> Подключиться к БД ja_log:
>
> \c ja_log
>
> Добавить новую задачу для созданного агента можно при помощи запроса следующего синтаксиса:
>
> SELECT jalog.key_create(\[id_agent\], '\[target\]', '\[log_filename\]', \[true/false\]);
>
> Параметр id_agent – идентификатор агента, который можно узнать при просмотре параметров агента (см. п. [3.1.6](#добавление-нового-агента-в-служебной-субд)); target – название задачи для агента; log_filename – путь к директории, содержащей журналы, допускается применять регулярные выражения. Значение true/false определяет активна или неактивна создаваемая задача агента.

## Пример:

<img src="../docs/assets/images/com18.3.1/jalog/media/image45.jpeg" style="width:7.11252in;height:1.86969in" />

> SELECT jalog.key_create(1, 'agent1', '/var/lib/jatoba/\<ver\>/data/log/jatoba-\[0-9\]{4}-\[0-9\]{2}-\[0-9\]{2}\_\[0-9\]{6}.csv', true);
>
> Рисунок 3.12 – Создание новой задачи для агента
>
> После создания задачи для агента необходимо убедится в корректности ее параметров при помощи следующего SQL-запроса:

<img src="../docs/assets/images/com18.3.1/jalog/media/image46.jpeg" style="width:7.11239in;height:2.39281in" />

> SELECT \* FROM jalog.key \gx
>
> Рисунок 3.13 – Проверка параметров новой задачи

## Изменение параметров задачи в служебной СУБД

> Администратор, используя функцию key_update, в которой обязательным значением является key_id, для запуска выполнения задачи устанавливает в поле status значение true:
>
> SELECT jalog.key_update (\[key_id\], status := true)
>
> Где key_id – идентификатор задачи, параметры которой необходимо изменить.

<img src="../docs/assets/images/com18.3.1/jalog/media/image47.jpeg" style="width:7.11482in;height:1.69531in" />

> Рисунок 3.14 – Изменение параметров задачи Деактивация задачи состоит в использовании значения false в поле status.
>
> Аналогично изменяются другие параметры задачи.

## Применение маски для журналов событий

> Название файла журнала событий формируется по параметру log_filename в конфигурационном файле «postgresql.conf».
>
> log_filename = 'jatoba-%a.log'
>
> Список возможных значений для параметра log_filename:

- jatoba-%Y%m%d\_%H%M%S.log

- jatoba-%d-%m-%Y.log

- jatoba-%A.log

- jatoba-%U.log

- jatoba-%Y-W%U.log

> Название файла журнала событий указывается по маске:
>
> jatoba log
>
> В представленном примере в названии файла журнала событий указано наименование СУБД и день недели, когда был сформирован файл, по параметру «%a». Соответственно от разделительного знака до разделительного знака перед расширением файла в маске имени файла SQL-команды устанавливается 3 точки. Специальный символ «.» обозначает ровно один символ в имени файла.
>
> Вид сформированного файла событий безопасности представлен на рисунке [3.15](#_bookmark17).

<img src="../docs/assets/images/com18.3.1/jalog/media/image48.png" style="width:3.56394in;height:0.92031in" />

> <span id="_bookmark17" class="anchor"></span>Рисунок 3.15 – Сформированный файл событий безопасности СУБД Соотношение параметров и символов в имени файла регистрации событий
>
> представлено в таблице [3.2](#_bookmark18).
>
> <span id="_bookmark18" class="anchor"></span>Таблица 3.2 – Соотношение параметров и символов в имени файла регистрации событий

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 13%" />
<col style="width: 7%" />
<col style="width: 18%" />
<col style="width: 9%" />
<col style="width: 19%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr>
<th colspan="2"><blockquote>
<p><strong>Параметры</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Имя СУБД</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Разделительный знак</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>День недели</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Разделительный знак перед</strong></p>
<p><strong>расширением</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Расширение файла</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>postgresql.conf</p>
</blockquote></td>
<td>log_filename</td>
<td style="text-align: center;"><blockquote>
<p>jatoba</p>
</blockquote></td>
<td style="text-align: center;">-</td>
<td style="text-align: center;"><blockquote>
<p>%a</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>log</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Имя файла в директории</p>
<p>LOG СУБД</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>jatoba</p>
</blockquote></td>
<td style="text-align: center;">-</td>
<td style="text-align: center;"><blockquote>
<p>Wed</p>
</blockquote></td>
<td><blockquote>
<p>.</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>csv</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Параметр в SQL-</p>
<p>команде</p>
</blockquote></td>
<td><blockquote>
<p>key_text</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>jatoba</p>
</blockquote></td>
<td style="text-align: center;">-</td>
<td style="text-align: center;"></td>
<td><blockquote>
<p>.</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>csv</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Маска зависит от настроенного формата префикса для записей журнала. Например, для параметра log_filename = 'jatoba-%Y-%m-%d\_%H%M%S.json' при формировании задания стоит указать следующее значение параметра:
>
> jatoba-\[0-9\]{4}-\[0-9\]{2}-\[0-9\]{2}\_\[0-9\]{6}.json
>
> В этом случае имя файла журнала событий безопасности будет следующим:
>
> jatoba-2023-05-18_053315.json
>
> Такое имя файла журнала событий образуется при использовании аббревиатуры элементов интервалов по стандарту ISO 8601. Расчет количества символов для маски в SQL-команде приведен в таблице [3.3](#_bookmark19).
>
> <span id="_bookmark19" class="anchor"></span>Таблица 3.3 – Количество символов в маске файла

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 8%" />
<col style="width: 4%" />
<col style="width: 5%" />
<col style="width: 3%" />
<col style="width: 6%" />
<col style="width: 3%" />
<col style="width: 5%" />
<col style="width: 3%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 3%" />
<col style="width: 6%" />
</colgroup>
<thead>
<tr>
<th></th>
<th style="text-align: center;"><blockquote>
<p><span id="_bookmark20" class="anchor"></span><strong>Имя СУБД</strong></p>
</blockquote></th>
<th></th>
<th><blockquote>
<p><strong>Годы</strong></p>
</blockquote></th>
<th></th>
<th><blockquote>
<p><strong>Месяцы</strong></p>
</blockquote></th>
<th></th>
<th><blockquote>
<p><strong>Дни</strong></p>
</blockquote></th>
<th></th>
<th><blockquote>
<p><strong>Часы</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Минуты</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Секунды</strong></p>
</blockquote></th>
<th></th>
<th><blockquote>
<p><strong>Расширение файла</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>Аббревиатуры элементов интервалов по стандарту ISO 8601</strong></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>jatoba</p>
</blockquote></td>
<td><blockquote>
<p>-</p>
</blockquote></td>
<td><blockquote>
<p>%Y</p>
</blockquote></td>
<td><blockquote>
<p>-</p>
</blockquote></td>
<td><blockquote>
<p>%m</p>
</blockquote></td>
<td><blockquote>
<p>-</p>
</blockquote></td>
<td><blockquote>
<p>%d</p>
</blockquote></td>
<td><blockquote>
<p>_</p>
</blockquote></td>
<td><blockquote>
<p>%H</p>
</blockquote></td>
<td><blockquote>
<p>%M</p>
</blockquote></td>
<td><blockquote>
<p>%S</p>
</blockquote></td>
<td><blockquote>
<p>.</p>
</blockquote></td>
<td><blockquote>
<p>csv</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><strong>Количество символов</strong></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><strong>Итого символов</strong></p>
</blockquote></td>
<td colspan="13" style="text-align: center;"><blockquote>
<p>18</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Запуск сервера на служебной СУБД

> Запуск сервера на служебной СУБД выполняется при помощи команды:
>
> \# systemctl start jalog_server
>
> Убедиться, что служба успешно запущена:

<img src="../docs/assets/images/com18.3.1/jalog/media/image49.png" style="width:6.73955in;height:2.52542in" />

> \# systemctl status jalog_server
>
> Рисунок 3.16 – Запуск сервера на служебной СУБД
>
> В случае если служба сервера компонента не запускается необходимо проверить системный журнал на наличие ошибок при помощи команды:
>
> \# cat /var/log/syslog \| grep jalog
>
> На данном шаге настройка службы сервера компонента в ОС GNU/Linux завершена.

## Проверка содержания таблицы jalog.logcsv

> После запуска агента на целевой СУБД (см. п. [3.2.4](#запуск-агента-на-целевой-субд)) необходимо на служебной СУБД проверить корректность передачи журналов событий с целевой СУБД в основную таблицу jalog.logcsv:
>
> SELECT \* FROM jalog.logcsv;

Таблица должна содержать записи журналов событий с целевых СУБД.

<img src="../docs/assets/images/com18.3.1/jalog/media/image50.jpeg" style="width:6.91689in;height:2.54458in" />

> Рисунок 3.17 – Фрагмент содержимого таблицы jalog.logcsv
>
> В качестве примеров отображения информации можно применять следующие SQL-запросы:
>
> SELECT \* FROM jalog.logcsv WHERE agent_name = \[agent_name\]; SELECT \* FROM jalog.logcsv WHERE target = \[target_name\];

## Пример:

> SELECT \* FROM jalog.logcsv WHERE agent_name = jalog_agent; SELECT \* FROM jalog.logcsv WHERE target = agent1;

## Удаление агента в служебной СУБД

> Авторизоваться в psql от имени привилегированного пользователя:
>
> psql -U postgres
>
> Подключиться к базе данных ja_log:
>
> \c ja_log
>
> Удаление агента производится по его идентификатору id_agent. Для получения идентификатора необходимо выполнить следующий SQL-запрос:
>
> SELECT \* FROM jalog.agents;
>
> В столбце «id_agent» определить номер агента, который требуется удалить. Удалить агента при помощи следующего SQL-запроса:
>
> SELECT jalog.agent_delete(\[id_agent\]);

## Пример:

<img src="../docs/assets/images/com18.3.1/jalog/media/image51.jpeg" style="width:7.11067in;height:1.52094in" />

> SELECT jalog.agent_delete(1);
>
> Рисунок 3.18 – Удаление агента на служебной СУБД
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image1.png" style="width:0.25138in;height:0.25082in" />При удалении агента также выполняется удаление всех связанных с ним заданий.

## Удаление задачи агента из служебной СУБД

> Для удаления существующей задачи агента необходимо выполнить следующий запрос:
>
> SELECT jalog.key_delete(\[key_id\]);
>
> Где key_id – идентификатор задачи (см. п. [3.1.8](#добавление-новой-задачи-агента-в-служебной-субд))

## Пример:

<img src="../docs/assets/images/com18.3.1/jalog/media/image52.jpeg" style="width:6.72833in;height:1.60417in" />

> SELECT jalog.key_delete(3);
>
> Рисунок 3.19 – Удаление задачи агента из служебной СУБД

## Функционал ротации журналов служебной СУБД

> Для оптимизации ресурсов по хранению журналов администратор БД использует систему их ротации.
>
> Компонент «ja_Log» позволяет выполнять следующие процедуры:

- Контролировать глубину журнала на служебной СУБД;

- Перенос архивных журналов служебной СУБД в другое табличное пространство, например на более медленные носители информации;

- Удалять архивированные записи журнала служебной СУБД.

> Для того, чтобы перенести журнал служебной СУБД в другое табличное пространство (например созданное в п. [3.1.3](#создание-табличного-пространства-для-хранения-архивных-секций)) необходимо воспользоваться процедурой следующего синтаксиса:
>
> call jalog.rotation_hot_logs_days(0, \['date_point'\]::date, \[-hot_logs_days\], \[' target_tablespace'\])
>
> где 0 – виртуальный идентификатор для журналирования; date_point – дата, начиная с которой необходимо переместить журналы в другое ТП. В качестве date_point можно указывать дату в формате YYYYMMDD. Значение null указывает на текущую дату; hot_logs_days – глубина перемещения в днях (значение всегда отрицательное);
>
> target_tablespace – табличное пространство для выполнения перемещения журналов служебной СУБД.
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.25in;height:0.25in" />Для ротации архивных журналов служебной СУБД может быть использовано существующее табличное пространство. При установке расширения компоненту выдаются все необходимые права доступа ко всем существующим на тот момент табличным пространствам служебной СУБД. Назначаемые права доступа необходимы для корректного перемещения архивных журналов, выполнения функций и процедур.
>
> Если после установки расширения создается новое табличное пространство, которое будет использовано для ротации архивных журналов, то в этом случае для групповой роли jalog_role определяются права доступа к ему (см. пример в п. [3.1.3](#создание-табличного-пространства-для-хранения-архивных-секций)).

## Пример:

> \c ja_log
>
> call jalog.rotation_hot_logs_days(0, null, -7, 'ts_jalog_archive');
>
> Данный пример процедуры выполняет перемещение журналов служебной СУБД в табличное пространство ts_jalog_archive за последние 7 дней начиная с предыдущего дня.
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.25in;height:0.24836in" />Администратор при выполнении переноса журналов в другое табличное пространство должен оценивать объем журналов. В случае, если журнал содержит значительное количество информации, рекомендуется выполнять его поэтапный перенос используя параметры процедуры jalog.rotation_hot_logs_days.

<img src="../docs/assets/images/com18.3.1/jalog/media/image53.png" style="width:7.0834in;height:1.44792in" />

> Рисунок 3.20 – Перенос журналов служебной СУБД в другое табличное пространство
>
> Удаление архивированных журналов необходимо воспользоваться процедурой следующего синтаксиса:
>
> call jalog.truncate_max_logs_days(0, \['date_point'\]::date, \[-max_logs_days\]);
>
> где 0 – виртуальный идентификатор для журналирования; date_point – дата, начиная с которой необходимо удалить архивированные журналы. В качестве date_point можно указывать дату в формате YYYYMMDD. Значение null указывает на текущую дату; max_logs_days – глубина удаления архивных журналов в днях (значение всегда отрицательное).

## Пример:

> \c ja_log
>
> call jalog.truncate_max_logs_days(0, null, -89);
>
> Данный пример процедуры выполняет удаление архивированных журналов, например при помощи процедуры jalog.rotation_hot_logs_days (см. выше), за последние 90 дней начиная с текущей даты.

<img src="../docs/assets/images/com18.3.1/jalog/media/image54.jpeg" style="width:7.14365in;height:1.30458in" />

> Рисунок 3.21 – Удаление архивированных журналов служебной СУБД
>
> С целью автоматизации выполнения процедур ротации журналов служебной СУБД администратор может добавить процедуры в системную утилиту cron или в планировщик заданий СУБД (см. документа «Руководство по настройке. Часть 5. Планирование заданий СУБД. Компонент «pg_Task»» 643.72410666.00067-08 98 01-05).

## <img src="../docs/assets/images/com18.3.1/jalog/media/image55.png" style="width:0.28in;height:0.14in" /> Целевая СУБД. Конфигурирование клиентской части компонента

## Добавление в список логирования на целевой СУБД

> Добавление целевой СУБД в список логирования требует выполнения нижеописанных действий.
>
> Открыть конфигурационный файл СУБД postgresql.conf:
>
> \# nano /var/lib/jatoba/\<ver\>/data/postgresql.conf
>
> Изменить формат логов (значения менять в конце файла, а не в середине):
>
> log_destination = 'csvlog' logging_collector = on
>
> Выполнить перезагрузку СУБД в терминале ОС:
>
> \# systemctl restart jatoba-\<ver\>

## Настройка конфигурационного файла jalog_agent.yml

> Запуск агента сервера сбора событий безопасности требует установки параметров в конфигурационном файле.
>
> Требуется открыть файл конфигурационный файл jalog_agent.yml в терминале ОС:
>
> \# nano /usr/jatoba-\<ver\>/etc/jalog/jalog_agent.yml
>
> и указать следующие значения:
>
> \# Собственные параметры агента jalog_agent:
>
> agent_name: jalog_agent \# Уникальное имя агента, должно совпадать со значением на сервере
>
> ip: 10.116.102.55 \# Ip-адрес или DNS имя агента
>
> port: 22345 \# Порт агента
>
> \# task_puller_frequency: 15 \# Частота запроса задач у сервера, в секундах
>
> \# task_execution_frequency: 5 \# Частота проверки лог-файлов, в секундах
>
> \# max_logs_per_iteration: 1000 \# Максимальное количество логов, которые обрабатываются за итерацию (10-1000)
>
> \# Параметры сервера, с которым работает агент jalog_server:
>
> ip: 10.116.102.54 \# Ip-адрес или DNS имя сервера
>
> port: 10051 \# Порт сервера \# Параметры TLS
>
> tls:
>
> \# cert_file: \# Путь до сертификата
>
> \# key_file: \# Путь до файла ключа (только Linux)
>
> \# ca_file: \# Путь до файла ca (только Linux)
>
> \# crl_file: \# Путь до файла crl (только Linux) \# Параметры логирования
>
> log:
>
> path: "/usr/jatoba-18/var/log/jalog/" \# Путь к каталогу логов (Linux)

\# path: "C:\\Program files\\GIS\\Jatoba\\18\\var\\log\\jalog\\" \# Путь к каталогу логов (Windows)

> filename: jalog_agent-%Y-%m-%d level: info
>
> type: csv

filemode: 0600 (только Linux)

rotation_age: 1d времени

rotation_size: 10MB логов

> truncate_on_rotation: false

\# Шаблон для имени файлов логов \# Уровень логирования

\# Форматы файлов логов (txt, csv, json) \# Параметр доступа к файлам логов

\# Интервал ротации файлов логов по

\# Интервал ротации по объему файла \# Признак перезаписи файла логов

> <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.25in;height:0.25in" />Реальное значение параметра task_puller_frequency складывается из установки в конфигурационном файле jalog_agent.yml + задержка обработки jalog_agent в 10 секунд.

## Установка службы jalog_agent

> Во время установки на целевой СУБД устанавливается служба «jalog_agent» от имени и с правами привилегированного пользователя.
>
> Необходимо добавить службу jalog_server в автозапуск ОС:
>
> \# systemctl enable jalog_agent

## Запуск агента на целевой СУБД

> Запуск агента на целевой СУБД выполняется при помощи команды:
>
> \# systemctl start jalog_agent
>
> Убедиться, что служба успешно запущена:
>
> \# systemctl status jalog_agent
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image56.png" style="width:7.14063in;height:2.77344in" />
>
> Рисунок 3.22 – Установка службы агента компонента в ОС GNU/Linux
>
> После запуска службы агента необходимо на служебной СУБД проверить статус подключения агента:
>
> SELECT \* FROM jalog.agents \gx
>
> Если служба агента на целевой СУБД настроена параметр connect_status будет иметь значение t.

<img src="../docs/assets/images/com18.3.1/jalog/media/image57.jpeg" style="width:7.11572in;height:2.21844in" />

> Рисунок 3.23 – Проверка состояния подключения агента к служебной СУБД
>
> В случае если служба сервера компонента не запускается необходимо проверить системный журнал на наличие ошибок при помощи команды:
>
> \# cat /var/log/syslog \| grep jalog
>
> На данном шаге настройка службы агента компонента в ОС GNU/Linux завершена.
>
> Далее становится возможным подключение к служебной БД «ja_log» в компоненте
>
> JDS.

# СТРУКТУРА КОНФИГУРАЦИОННЫХ ФАЙЛОВ

## <img src="../docs/assets/images/com18.3.1/jalog/media/image58.png" style="width:0.27667in;height:0.14in" /> Структура конфигурационного файла сервера jalog_server.yml

> В файле jalog_server.yml присутствует следующая структура:
>
> \# Собственные параметры сервера server:
>
> listen_ip: 10.116.102.54 \# IP-адрес или DNS имя, который прослушивает сервер
>
> listen_port: 10051 \# Порт, который прослушивает сервер \# Параметры TLS
>
> tls:
>
> \# cert_file: \# Путь до сертификата
>
> \# key_file: \# Путь до файла ключа (только Linux)
>
> \# ca_file: \# Путь до файла ca (только Linux)
>
> \# crl_file: \# Путь до файла crl (только Linux) \# Параметры подключения к базе данных
>
> database_params:
>
> conn_string: host=127.0.0.1 user=jalog_user dbname=ja_log password=w12345678 \# Строка подключения к СУБД \# Параметры логирования
>
> log:
>
> path: "/usr/jatoba-18/var/log/jalog/" \# Путь к каталогу логов (Linux) \# path: "C:\\Program files\\GIS\\Jatoba\\18\\var\\log\\jalog\\" \# Путь
>
> к каталогу логов (Windows)
>
> filename: jalog_server-%Y-%m-%d \# Шаблон для имени файлов логов level: info \# Уровень логирования
>
> type: csv \# Форматы файлов логов (txt, csv, json)
>
> filemode: 0600 \# Параметр доступа к файлам логов (только Linux)
>
> rotation_age: 1d \# Интервал ротации файлов логов по времени
>
> rotation_size: 10MB \# Интервал ротации по объему файла логов
>
> truncate_on_rotation: false \# Признак перезаписи файла логов

## Собственные параметры сервера

> Данный раздел конфигурационного файла jalog_server.yml определяет сетевые параметры сервера.

1.  **listen_ip**

> Числовой IP-адрес или DNS-название сервера для подключения агентов. Он должен быть представлен в стандартном формате адресов IPv4, например, 172.28.40.9.
>
> Значение по умолчанию – 0.0.0.0

2.  **listen_port**

> Номер порта, по которому агенты подключаются к серверу.
>
> Значение по умолчанию – 10051

## Параметры TLS

> Данный раздел конфигурационного файла jalog_server.yml определяет пути к каталогам, содержащим сертификаты и ключи SSL/TLS.

3.  **cert_file**

> Путь до файла сертификата, который агент ja_Log использует для подключения к СУБД.
>
> Значение по умолчанию не задано.

4.  **key_file**

> Путь до файла с ключом, который агент ja_Log использует для подключения к серверу.
>
> Значение по умолчанию не задано.

5.  **ca_file**

> Путь до сертификата центра сертификации, который агент ja_Log использует для подключения к серверу.
>
> Значение по умолчанию не задано.

6.  **crl_file**

> Путь до CRL файла, который агент ja_Log использует для подключения к серверу. Значение по умолчанию не задано.

## Параметры подключения к базе данных

> Раздел database_params конфигурационного файла jalog_server.yml определяет параметры подключения к базе данных компонента. Параметры подключения определяются в строке подключения conn_string.

## host

> IP-адрес БД, по которому выполняется подключение компонента ja_Log. Он должен быть представлен в стандартном формате адресов IPv4, например, 172.28.40.9.
>
> Значение по умолчанию – 127.0.0.1

## user

> Имя пользователя СУБД Jatoba, используемое для подключения компонента ja_Log. Значение по умолчанию – ja_log.

## dbname

> Название БД, к которой подключается компонента ja_Log. Название БД определяется на этапе настройки компонента (см. [3.1.1](#создание-служебной-бд-и-установка-расширения)).
>
> Значение по умолчанию – ja_log.

## password

> Пароль для доступа к БД, используемый в случае, когда компонент ja_Log настроен на аутентификацию по паролю.

## passfile

> Путь к расположению файла, в котором хранятся пароли пользователей СУБД. По умолчанию это ~/.pgpass в домашнем каталоге СУБД.

7.  **require_auth**

> Параметр определяет метод аутентификации, который клиент требует от сервера. Если сервер не использует требуемый метод для аутентификации клиента или если обмен сообщениями аутентификации со стороны сервера не завершён, соединение не будет установлено. Доступные методы аутентификации – password, md5, none.

8.  **connect_timeout**

> Максимальное время ожидания подключения в секундах (задаётся десятичным целым числом, например: 10). При нуле, отрицательном или не заданном значении ожидание будет бесконечным.

## <img src="../docs/assets/images/com18.3.1/jalog/media/image59.png" style="width:0.27667in;height:0.14in" /> Структура конфигурационного файла агента jalog_agent.yml

> В файле jalog_agent.yml присутствует следующая структура:

\# Собственные параметры агента jalog_agent:

> agent_name: jalog_agent

\# Уникальное имя агента,

должно совпадать со значением на сервере

> ip: 10.116.102.55

агента

> port: 22345

\# Ip-адрес или DNS имя

\# Порт агента

> \# task_puller_frequency: 15 \# Частота запроса задач у сервера, в секундах
>
> \# task_execution_frequency: 5 \# Частота проверки лог-файлов, в секундах
>
> \# max_logs_per_iteration: 1000 \# Максимальное количество логов, которые обрабатываются за итерацию (10-1000)
>
> \# Параметры сервера, с которым работает агент jalog_server:
>
> ip: 10.116.102.54 \# Ip-адрес или DNS имя сервера
>
> port: 10051 \# Порт сервера \# Параметры TLS
>
> tls:
>
> \# cert_file: \# Путь до сертификата
>
> \# key_file: \# Путь до файла ключа (только Linux)
>
> \# ca_file: \# Путь до файла ca (только
>
> Linux)
>
> \# crl_file: \# Путь до файла crl (только
>
> Linux)
>
> \# Параметры логирования log:
>
> path: "/usr/jatoba-18/var/log/jalog/" \# Путь к каталогу логов (Linux)
>
> \# path: "C:\\Program files\\GIS\\Jatoba\\18\\var\\log\\jalog\\" \# Путь к каталогу логов (Windows)
>
> filename: jalog_agent-%Y-%m-%d \# Шаблон для имени файлов логов
>
> level: info \# Уровень логирования
>
> type: csv \# Форматы файлов логов (txt, csv, json)
>
> filemode: 0600 \# Параметр доступа к файлам логов (только Linux)
>
> rotation_age: 1d \# Интервал ротации файлов логов по времени
>
> rotation_size: 10MB \# Интервал ротации по объему файла логов
>
> truncate_on_rotation: false \# Признак перезаписи файла логов

# НАСТРОЙКА TLS ДЛЯ КОМПОНЕНТА В ОС GNU/LINUX

> Настройка TLS/SSL соединений для компонента «ja_Log» описана в документе
>
> «Руководство по безопасности».

# ОБНОВЛЕНИЕ КОМПОНЕНТА

> В качестве примера процедуры обновления компонента приводятся для дистрибутивов, основанных на пакетном менеджере APT. Для дистрибутивов, основанных на пакетном менеджере RPM информация аналогична, а особенности обновления приводятся в примечаниях.

## <img src="../docs/assets/images/com18.3.1/jalog/media/image60.png" style="width:0.27333in;height:0.14in" /> Обновление компонента в ОС GNU/Linux с версии 1.2 до версии 2.0

> В случае обновления компонента с версии 1.2 до версии 2.0 в ОС GNU/Linux требуется:

1)  Скопировать конфигурационные файлы версии 1.2;

2)  Остановить СУБД «Jatoba» и сервер компонента «ja_Log»:

> \# systemctl stop jatoba-\<ver\> && systemctl stop jalog_server

3)  Обновить локальный репозиторий СУБД «Jatoba»;

4)  Обновить пакет компонента;

> \# apt-get install jatoba\<ver\>-ja-log

5)  Запустить СУБД «Jatoba»:

> \# systemctl start jatoba-\<ver\>

6)  Запустить скрипт migration.sql из служебной СУБД, который находится в каталоге

> /usr/jatoba-\<ver\>/etc/jalog:
>
> psql -U postgres
>
> \c ja_log
>
> \i /usr/jatoba-\<ver\>/etc/jalog/migration.sql

7)  Проверить версию расширения компонента (должна быть установлена версия

> 2.1):
>
> \dx

8)  Перейти в /usr/jatoba-\<ver\>/etc/jalog/ и проверить наличие конфигурационных файлов версии 2.0: jalog_server.yml на сервере служебной СУБД и jalog_agent.yml на сервере целевой СУБД;

9)  Выполнить настройку конфигурационных файлов согласно п.п. [3.1.3](#создание-табличного-пространства-для-хранения-архивных-секций) и п.п. [3.2.2](#настройка-конфигурационного-файла-jalog_agent.yml);

10) На сервере служебной СУБД указать новый конфигурационный файл jalog_server.yml версии 2.0:

> \# systemctl stop jalog_server
>
> \# systemctl edit --full jalog_server.service
>
> \### Параметры запуска Jalog_server
>
> ExecStart=/usr/jatoba-\<ver\>/bin/jalog_server /usr/jatoba-
>
> \<ver\>/etc/jalog/jalog_server.yml \# systemctl daemon-reload
>
> \# systemctl start jalog_server \# systemctl status jalog_server

11) На сервере целевой СУБД указать новый конфигурационный файл jalog_agent.yml версии 2.0:

> \# systemctl stop jalog_agent
>
> \# systemctl edit --full jalog_agent.service
>
> \### Параметры запуска Jalog_agent
>
> ExecStart=/usr/jatoba-\<ver\>/bin/jalog_agent /usr/jatoba-
>
> \<ver\>/etc/jalog/jalog_agent.yml \# systemctl daemon-reload
>
> \# systemctl start jalog_agent \# systemctl status jalog_agent

12) На сервере служебной СУБД убедиться, что журналы событий предыдущей версии компонента будут присоединены в качестве секции в таблице jalog.logcsv_archive

> psql -U postgres
>
> \c ja_log
>
> SELECT key_id, message FROM jalog.logcsv_archive ORDER BY key_id desc;

13) Проверить наличие секции в таблице jalog.logcsv

> \d+ jalog.logcsv

14) На служебной СУБД проверить корректность передачи журналов событий с целевой СУБД в основную таблицу jalog.logcsv

> SELECT message FROM jalog.logcsv;

## <img src="../docs/assets/images/com18.3.1/jalog/media/image61.png" style="width:0.27333in;height:0.14in" /> Обновление компонента в ОС GNU/Linux с версии 2.0 до версии 2.1

> <img src="../docs/assets/images/com18.3.1/jalog/media/image1.png" style="width:0.25139in;height:0.25139in" />При обновлении компонента с версии 2.0 до версии 2.1 необходимо выполнить резервное копирование конфигурационных файлов jalog_server.yml (см. п. [4.1](#структура-конфигурационного-файла-сервера-jalog_server.yml)) и jalog_agent.yml (см. п. [4.2](#структура-конфигурационного-файла-агента-jalog_agent.yml)).
>
> В случае обновления компонента с версии 2.0 до версии 2.1 в ОС GNU/Linux порядок действий аналогичен рассмотренному в п. [6.1](#обновление-компонента-в-ос-gnulinux-с-версии-1.2-до-версии-2.0) кроме:
>
> − шага 4, вместо которого необходимо выполнить команду в утилите psql:
>
> ALTER EXTENSION jalog UPDATE;
>
> − шагов 7, 8 и 9, вместо которых необходимо скопировать конфигурационные файлы служебной СУБД в каталог /usr/jatoba-\<ver\>/etc/jalog/ и запустить компонент
>
> «ja_Log»:
>
> \# systemctl start jalog_server
>
> А также скопировать конфигурационные файлы целевой СУБД в каталог /usr/jatoba-6/etc/jalog/ и запустить агент компонента «ja_Log»:
>
> \# systemctl start jalog_agent
>
> После успешного запуска служб компонента обновление компонента до версии 2.1 считается выполненной.

## <img src="../docs/assets/images/com18.3.1/jalog/media/image62.png" style="width:0.27333in;height:0.14in" /> Обновление компонента ОС GNU/Linux с версии 2.1 до версии 3.0

> Последовательность обновления компонента «ja_Log» с версии 2.1 до версии 3.0 в ОС GNU/Linux состоит в том, что сначала выполняется обновление на служебной СУБД (jalog_server), а затем на целевых СУБД (jalog_agent).
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image1.png" style="width:0.25139in;height:0.25139in" />Для обновления компонента «ja_Log» с версии 2.1 до версии 3.0.1-502 (включительно) в дистрибутивах ОС GNU/Linux с пакетным менеджером RPM/DNF (в том числе ALT Linux) необходимо выполнить удаление компонента и его повторную установку (см. п. [2.1](#установка-компонента-ja_log-в-ос-gnulinux)). При установке из отдельного пакета применяется следующая команда:
>
> \# rpm -i jatoba\<ver\>-ja-log_3.0.1-\<build\>\_x86_64.rpm
>
> При обновлении версии компонента «ja_Log», начиная с версии 3.0.1-502, выполняется установка «поверх» существующей версии.

## Обновление компонента на служебной СУБД

> В случае обновления компонента на служебной СУБД с версии 2.1 до версии 3.0 в ОС GNU/Linux требуется:

1)  Остановить службы СУБД и компонента «ja_Log»:

> \# systemctl stop jatoba-\<ver\> jalog_server

2)  Скопировать конфигурационный файл компонента версии 2.1 на служебной СУБД в удобное место, например в домашнюю директорию пользователя:

> \# cp /usr/jatoba-\<ver\>/etc/jalog/jalog_server.yml
>
> /home/user/jalog_server.yml.backup

3)  Выполнить удаление компонента версии 2.1 на служебной СУБД:

> \# apt remove jatoba\<ver\>-ja-log

<table>
<colgroup>
<col style="width: 8%" />
<col style="width: 91%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.24785in;height:0.24635in" /></p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>В дистрибутивах ОС GNU/Linux с пакетным менеджером RPM/DNF необходимо выполнить удаление компонента при помощи одной из следующих команд:</p>
<p># rpm -e jatoba&lt;ver&gt;-ja-log</p>
</blockquote></th>
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
<th><blockquote>
<p>№ изменения:</p>
</blockquote></th>
<th><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></th>
<th><blockquote>
<p>Дата внесения изм:</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> \# dnf remove jatoba\<ver\>-ja-log

4)  Перейти в директорию, в которой располагается установочный пакет с версией 3.0, и выполнить установку, например, с помощью утилиты apt-get с опцией install:

> \# apt-get install ./jatoba\<ver\>-ja-log_3.0.1-yyy_amd64.deb
>
> Где yyy – номер сборки пакета компонента «ja_Log».

<img src="../docs/assets/images/com18.3.1/jalog/media/image63.jpeg" style="width:7.11856in;height:1.34656in" />

> Рисунок 6.1 – Установка пакета с новой версией компонента на служебной СУБД

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><blockquote>
<p>В дистрибутивах ОС GNU/Linux с пакетным менеджером RPM/DNF необходимо выполнить установку компонента при помощи команды:</p>
<p># rpm -i jatoba&lt;ver&gt;-ja-log_3.0.1-&lt;build&gt;_x86_64.rpm</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><blockquote>
<p>В случае, использования репозитория согласно документу «Руководство по установке» 643.72410666.00067-08 97 01, обновление выполняется при помощи команды:</p>
<p># apt install jatoba&lt;ver&gt;-ja-log</p>
</blockquote></td>
</tr>
</tbody>
</table>

5)  <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.24767in;height:0.24635in" /><img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.24723in;height:0.24635in" />Отредактировать конфигурационный файл jalog_server.yml от версии 3.0 в соответствии с параметрами в конфигурационном файле jalog_server.yml.backup от версии

> 2.1. Структура конфигурационного файла служебной СУБД приведена в п. [4.1](#структура-конфигурационного-файла-сервера-jalog_server.yml).
>
> \# nano /usr/jatoba-\<ver\>/etc/jalog/jalog_server.yml

6)  Запустить службу СУБД:

> \# systemctl start jatoba-\<ver\> && systemctl status jatoba-\<ver\>

7)  Авторизоваться в СУБД от имени и с правами суперпользователя с подключением к БД, в которой установлено расширение jalog:

> psql -U postgres -d ja_log

8)  Выполнить обновление расширения jalog на служебной СУБД с помощью SQL-команды:

> ALTER EXTENSION jalog UPDATE;

9)  Убедится в том, что версия обновленного расширения теперь 3.0:

<img src="../docs/assets/images/com18.3.1/jalog/media/image64.png" style="width:7.1135in;height:3.96219in" />

> \dx
>
> Рисунок 6.2 – Обновление и проверка версии компонента на служебной СУБД

10) Выполнить проверку основных таблиц служебной СУБД после обновления версии компонента с помощью SQL-команды:

> \dt+ jalog.\*
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image65.png" style="width:7.10938in;height:2.49219in" />
>
> Рисунок 6.3 – Проверка основных таблиц компонента на служебной СУБД

11) Выполнить проверку состояния агентов в служебной СУБД:

<img src="../docs/assets/images/com18.3.1/jalog/media/image66.png" style="width:7.11066in;height:1.69531in" />

> SELECT \* FROM jalog.agents;
>
> Рисунок 6.4 – Проверка состояния агентов на служебной СУБД
>
> При этом status – после обновления компонента до версии 3.0 остаётся активным true, connect_status – после обновления переводится в значение false.

12) Восстановить данные об агенте указав IP-адрес узла с целевой СУБД jalog_agent:

> SELECT jalog.agent_update(1, ip =\> '10.116.102.55');
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image67.jpeg" style="width:7.11066in;height:1.69531in" />
>
> Рисунок 6.5 – Проверка состояния агентов на служебной СУБД Повторить процедуру для всех агентов.

13) Выполнить проверку состояния задач агентов в служебной СУБД:

<img src="../docs/assets/images/com18.3.1/jalog/media/image68.png" style="width:7.08095in;height:1.20177in" />

> SELECT \* FROM jalog.key;
>
> Рисунок 6.6 – Проверка состояния задач на служебной СУБД
>
> При этом в поле target может отсутствовать название задачи. В этом случае, необходимо выполнить SQL-запрос с указанием названия задачи агента:

<img src="../docs/assets/images/com18.3.1/jalog/media/image69.jpeg" style="width:7.1133in;height:1.69531in" />

> SELECT jalog.key_update(1, target =\> 'agent_jatoba');
>
> Рисунок 6.7 – Установка названия задачи на служебной СУБД Повторить процедуру для всех задач агентов.

14) Запустить службу компонента «ja_Log» и проверить ее состояние:

> \# systemctl start jalog_server && systemctl status jalog_server

<img src="../docs/assets/images/com18.3.1/jalog/media/image70.jpeg" style="width:7.06561in;height:2.41458in" />

> Рисунок 6.8 – Запуск и проверка состояния службы компонента на служебной СУБД После успешного запуска службы компонента «ja_Log» и отсутствия сообщений об
>
> ошибках обновление компонента на служебной СУБД до версии 3.0 считается выполненной успешно.

## Обновление компонента на целевой СУБД

> В случае обновления компонента на целевой СУБД с версии 2.1 до версии 3.0 в ОС GNU/Linux требуется:

1)  Остановить службы СУБД и компонента «ja_Log»:

> \# systemctl stop jatoba-\<ver\> jalog_agent

2)  Скопировать конфигурационный файл компонента версии 2.1 на целевой СУБД в удобное место, например в домашнюю директорию пользователя:

> \# cp /usr/jatoba-\<ver\>/etc/jalog/jalog_agent.yml
>
> /home/user/jalog_agent.yml.backup

3)  Выполнить удаление компонента версии 2.1 на целевой СУБД:

> \# apt remove jatoba\<ver\>-ja-log

4)  Перейти в директорию, в которой располагается установочный пакет с версией 3.0, и выполнить установку, например, с помощью утилиты dpkg:

> \# dpkg -i jatoba\<ver\>-ja-log_3.0.0-yyy_amd64.deb
>
> Где yyy – номер сборки пакета компонента «ja_Log».
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image2.png" style="width:0.25in;height:0.25in" />В случае, использования репозитория согласно документу «Руководство по установке» 643.72410666.00067-08 97 01, обновление выполняется при помощи команды:
>
> \# apt --only-upgrade install jatoba\<ver\>-ja-log

5)  Отредактировать конфигурационный файл jalog_agent.yml версии 3.0 в соответствии с параметрами в конфигурационном файле jalog_agent.yml.backup от версии

> 2.1. Структура конфигурационного файла целевой СУБД приведена в п. [4.2](#структура-конфигурационного-файла-агента-jalog_agent.yml).
>
> \# nano /usr/jatoba-\<ver\>/etc/jalog/jalog_agent.yml

6)  Запустить службу СУБД, а также службы компонента «ja_Log» и проверить ее состояние:

> \# systemctl start jatoba-\<ver\> && systemctl start jalog_agent && systemctl status jalog_agent
>
> После успешного запуска службы компонента «ja_Log» и отсутствия сообщений об ошибках обновление компонента на целевой СУБД до версии 3.0 считается выполненной успешно. Повторить процедуру обновления компонента для других целевых СУБД.

# УДАЛЕНИЕ КОМПОНЕНТА В ОС GNU/LINUX

> На сервере с служебной СУБД авторизоваться в psql от имени привилегированного пользователя:
>
> psql -U postgres
>
> Подключиться к БД ja_log и выполнить удаление целевой СУБД из списка журналирования:
>
> \#\c ja_log
>
> SELECT jalog.agent_delete(\<id агента\>);
>
> Убедиться в том, что агент удален:
>
> SELECT \* from jalog.agents;
>
> В процессе удаления агента выполняется также удаление все связанных с ним задач. На сервере с целевой СУБД остановить службу компонента:
>
> \# systemctl stop jalog_agent
>
> Открыть конфигурационный файл postgresql.conf и задать формирование лога в формате, указанном по умолчанию:
>
> log_destination = 'stderr'
>
> Сохранить изменения и выполнить перезагрузку целевой СУБД:
>
> \# systemctl stop jatoba-\<ver\> \# systemctl start jatoba-\<ver\>
>
> Подключиться к серверу со служебной СУБД и остановить службу:
>
> \# systemctl stop jalog_server
>
> Подключиться к служебной СУБД и удалить БД jalog со всем содержимым:
>
> drop database ja_log;
>
> Удаление пакета компонента осуществляется средствами пакетного менеджера ОС. Для этого необходимо использовать соответствующую пакетному менеджеру ОС команду удаления (remove, purge, erase и т.п.).

# ОШИБКИ

## <img src="../docs/assets/images/com18.3.1/jalog/media/image71.png" style="width:0.27667in;height:0.14in" /> Дублирование сообщений при рассылке уведомлений

> Ошибка возникает при некорректной настройке клиента синхронизации времени.
>
> Ошибка устраняется на уровне ОС командами от имени привилегированного пользователя:
>
> \# apt purge ntp
>
> \# apt purge chrony
>
> \# timedatectl set-ntp true
>
> \# systemctl start systemd-timesyncd

## <img src="../docs/assets/images/com18.3.1/jalog/media/image72.png" style="width:0.27667in;height:0.14in" /> Ошибка при выполнении подключения агента к серверу

> В случае ошибки с настройками подключения агента к серверу компонента «jaLog» в журнале работы компонента будет отображаться следующая ошибка:
>
> 2025-07-14 18:20:48 ERROR Cannot fetch tasks from jalog_server: Connection to address 10.116.102.54():10051 is failed. Reason: TCPSocket::connect::connection to 10.116.102.54:10051 failed.
>
> Error: 111. The next attempt will be in 15 seconds, Jalog ver.
>
> 2.0.0
>
> Для решения данной ошибки необходимо на узле, выполняющем роль сервера компонента «jaLog» убедится, что служба «jalog_server» запущена и корректно работает:
>
> \# systemctl status jalog_server
>
> jalog_server.service - Jalog_server - Centralized logging server daemon
>
> Loaded: loaded (/etc/systemd/system/jalog_server.service; enabled; vendor preset: enabled)
>
> Active: active (running) since Tue 2025-07-15 10:02:23 MSK; 55s ago
>
> Main PID: 182838 (jalog_server) Tasks: 7 (limit: 4601)
>
> Memory: 2.6M CPU: 51ms
>
> CGroup: /system.slice/jalog_server.service
>
> └─182838 /usr/jatoba-6/bin/jalog_server
>
> /usr/jatoba-6/etc/jalog/jalog_server.yml
>
> июл 15 10:02:23 node1 systemd\[1\]: Started Jalog_server - Centralized logging server daemon.

## <img src="../docs/assets/images/com18.3.1/jalog/media/image73.png" style="width:0.27667in;height:0.14in" /> Ошибка при подключении компонента «jaLog» к СУБД «Jatoba»

> В случае ошибки с настройками подключения компонента «jaLog» к СУБД «Jatoba» в журнале работы компонента будет отображаться следующая ошибка:
>
> 2025-07-14 18:27:17 ERROR Cannot load category reference: connection is failed: connection to server at "127.0.0.1", port 5432 failed: fe_sendauth: no password supplied
>
> ConnInfo :host=127.0.0.1 user=postgres dbname=postgres, Jalog ver. 2.0.0
>
> Данная ошибка связана с тем, что для подключения компонента «jaLog» к СУБД
>
> «Jatoba» используется пароль пользователя postgres. Для выполнения успешного подключения необходимо указать пароль (password) в секции database_params:conn_string в конфигурационном файле jalog_server.yml, который располагается в каталоге /usr/jatoba-
>
> \<версия\>/etc/jalog/.
>
> Также необходимо проверить что в строке подключения к СУБД указан параметр dbname=ja_log.

# ПРИЛОЖЕНИЕ 1

## Пример установки СУБД «Jatoba» из локального репозитория для ОС Ubuntu

> Установка СУБД «Jatoba» из локального репозитория для ОС Ubuntu проводится в следующем порядке:

1)  В терминале войти в режим суперпользователя, выполнив команду:

> sudo su

2)  Если команды sudo не существует – установить:

> su -l,
>
> \# apt-get install sudo -y

3)  Выполнить обновление системы:

<img src="../docs/assets/images/com18.3.1/jalog/media/image74.png" style="width:7.11748in;height:3.01281in" />

> \# apt update && sudo apt upgrade –y \# apt -s dist-upgrade
>
> \# apt dist-upgrade
>
> Рисунок 8.1 – Обновление системы

4)  Создать папку localrepo в корневом каталоге:

> \# mkdir /localrepo

5)  В созданную папку скопировать:

> каталог \<pool\> каталог \<dist\>
>
> файл \<DEB-GPG-KEY-Jatoba\>

<img src="../docs/assets/images/com18.3.1/jalog/media/image75.png" style="width:3.47683in;height:1.085in" />

> Рисунок 8.2 – Структура каталога «localrepo»

6)  Установить открытый ключ репозитория:

<img src="../docs/assets/images/com18.3.1/jalog/media/image76.png" style="width:7.11753in;height:1.085in" />

> \# apt-key add /localrepo/DEB-GPG-KEY-Jatoba
>
> Рисунок 8.3 – Установка открытого ключа репозитория

7)  Добавить описание локального репозитория в систему:

> \# nano /etc/apt/sources.list.d/jatoba-\<ver\>.list

8)  Вставить в файл следующее содержимое и сохранить:

<img src="../docs/assets/images/com18.3.1/jalog/media/image77.png" style="width:7.11756in;height:1.12375in" />

> deb file:///localrepo stable non-free

Рисунок 8.4 – Содержание файла «jatoba-4.list»

9)  Проиндексировать обновленное состояние репозитория:

> \# apt-get update
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image78.png" style="width:7.11739in;height:2.64469in" />
>
> Рисунок 8.5 – Индексация репозитория

10) Установить СУБД Jatoba при помощи команды:

<img src="../docs/assets/images/com18.3.1/jalog/media/image79.png" style="width:7.11743in;height:3.55531in" />

> \# apt-get install jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server jatoba\<ver\>-ja-log
>
> Рисунок 8.6 – Установка пакетов

11) Убедиться, что отсутствуют ошибки зависимостей:

> for f in \$(LANG=C find /usr/jatoba-\<ver\> -type f -exec file {}
>
> \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image80.png" style="width:7.11754in;height:1.95687in" />
>
> Рисунок 8.7 – Проверка отсутствия ошибок зависимостей

12) Перейти в директорию исполняемых файлов СУБД:

<img src="../docs/assets/images/com18.3.1/jalog/media/image81.png" style="width:7.11759in;height:0.92031in" />

> \# cd /usr/jatoba-\<ver\>/bin
>
> Рисунок 8.8 – Переход в каталог

13) Инициализировать каталог данных СУБД при помощи команды:

<img src="../docs/assets/images/com18.3.1/jalog/media/image82.png" style="width:7.11742in;height:1.24969in" />

> \# ./jatoba-setup initdb jatoba-\<ver\>
>
> Рисунок 8.9 – Инициализация СУБД

14) Добавить сервис в список автозапуска:

> \# systemctl enable jatoba-\<ver\>
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image83.png" style="width:7.1061in;height:1.27875in" />
>
> Рисунок 8.10 – Добавление сервиса jatoba-4 а автозагрузку ОС

15) Запустить службу:

<img src="../docs/assets/images/com18.3.1/jalog/media/image84.png" style="width:7.10596in;height:0.95906in" />

> \# systemctl start jatoba-\<ver\>
>
> Рисунок 8.11 – Запуск службы jatoba-4

16) Проверить статус службы:

> \# systemctl status jatoba-\<ver\>
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image85.png" style="width:7.10612in;height:4.7275in" />
>
> Рисунок 8.12 – Проверка статуса службы jatoba-4

17) Авторизоваться в psql:

> \# su – postgres psql

18) Установить пароль для пользователя СУБД «postgres»:

<img src="../docs/assets/images/com18.3.1/jalog/media/image86.png" style="width:7.08283in;height:0.59417in" />

> \password
>
> Рисунок 8.13 – Установка пароля для пользователя ОС

19) Установить пароль для системного пользователя ОС «postgres»:

> \# passwd postgres
>
> <img src="../docs/assets/images/com18.3.1/jalog/media/image87.png" style="width:7.1049in;height:1.64687in" />
>
> Рисунок 8.14 – Установка пароля для пользователя СУБД
>
> На этом этапе установку СУБД с компонентом «ja_Log» можно считать оконченной.

# ПРИЛОЖЕНИЕ 2

## Структура конфигурационного файла сервера jalog_server.yml

> Таблица П.8.1 – Структура конфигурационного файла jalog_server.yml компонента
>
> «jaLog» ОС Linux

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 19%" />
<col style="width: 42%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Наименование параметра</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Значение по умолчанию</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Описание параметра</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>server</strong></p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><strong>Собственные параметры сервера ja_Log</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>listen_ip</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0.0.0.0</p>
</blockquote></td>
<td><blockquote>
<p>IP-адрес, который прослушивает сервер, указывается реальный IP-адрес</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>listen_port</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>10051</p>
</blockquote></td>
<td><blockquote>
<p>Номер порта, по которому агенты подключаются к серверу</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><strong>tls</strong></p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><strong>Параметры TLS</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>cert_file</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Путь до файла сертификата, который агент ja_Log использует для подключения к СУБД.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>key_file</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Путь до файла с ключом, который агент ja_Log использует для подключения к серверу.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ca_file</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Путь до сертификата центра сертификации, который агент ja_Log использует для подключения к серверу</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>crl_file</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Путь до CRL файла, который агент ja_Log использует для подключения к серверу</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><strong>database_params</strong></p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><strong>Параметры подключения к базе данных</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>conn_string</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Строка с параметрами подключения компонента к БД</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><strong>log</strong></p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><strong>Параметры ведения журналов работы</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>path</p>
</blockquote></td>
<td><blockquote>
<p>/usr/jatoba-</p>
<p>&lt;ver&gt;/var/log/jalo g/</p>
</blockquote></td>
<td><blockquote>
<p>Каталог хранения журналов работы</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>filename</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>jalog_server-%Y-</p>
<p>%m-%d</p>
</blockquote></td>
<td><blockquote>
<p>Шаблон названия файлов журналов</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 19%" />
<col style="width: 42%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Наименование параметра</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Значение по умолчанию</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Описание параметра</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>level</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>info</p>
</blockquote></td>
<td><blockquote>
<p>Уровень детализации журналов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>type</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>txt</p>
</blockquote></td>
<td><blockquote>
<p>Тип файлов журналов (txt, csv, json)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>filemode</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>0600 (Linux)</p>
</blockquote></td>
<td><blockquote>
<p>Параметры доступа к файлам журнвло</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>rotation_age</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1d</p>
</blockquote></td>
<td><blockquote>
<p>Интервал ротации файлов журналов по времени</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>rotation_size</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>10MB</p>
</blockquote></td>
<td><blockquote>
<p>Интервал ротации файлов журналов по размеру</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>truncate_on_rotation</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>false</p>
</blockquote></td>
<td><blockquote>
<p>Признак перезаписи файла журнала</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Структура конфигурационного файла агента jalog_agent.yml

> Таблица П.8.2 – Структура конфигурационного файла jalog_agent.yml компонента
>
> «jaLog» для ОС Linux

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 19%" />
<col style="width: 42%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Наименование параметра</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Значение по умолчанию</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Описание параметра</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>jalog_agent</strong></p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><strong>Параметры агента ja_Log</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>agent_name</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Название узла, на котором установлен агент</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ip</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>IP-адрес узла, на котором установлен агент</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>port</p>
</blockquote></td>
<td><blockquote>
<p>22345</p>
</blockquote></td>
<td><blockquote>
<p>Номер сетевого порта агента</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>task_puller_frequency</p>
</blockquote></td>
<td><blockquote>
<p>15</p>
</blockquote></td>
<td><blockquote>
<p>Частота запроса задач у сервера, в секундах</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>max_logs_per_iteration</p>
</blockquote></td>
<td><blockquote>
<p>1000</p>
</blockquote></td>
<td><blockquote>
<p>Максимальное количество журналов, которые обрабатываются за итерацию (10-1000)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><strong>jalog_server</strong></p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><strong>Параметры сервера ja_Log</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ip</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>IP-адрес сервера ja_Log</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>port</p>
</blockquote></td>
<td><blockquote>
<p>10051</p>
</blockquote></td>
<td><blockquote>
<p>Номер порта, по которому агенты подключаются к серверу</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><strong>tls</strong></p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><strong>Параметры TLS</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>cert_file</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Путь до файла сертификата, который агент ja_Log использует для подключения к СУБД.</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 19%" />
<col style="width: 42%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Наименование параметра</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Значение по умолчанию</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Описание параметра</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>key_file</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Путь до файла с ключом, который агент ja_Log использует для подключения к серверу.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ca_file</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Путь до сертификата центра сертификации, который агент ja_Log использует для подключения к серверу</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>crl_file</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Путь до CRL файла, который агент ja_Log использует для подключения к серверу</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><strong>log</strong></p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><strong>Параметры ведения журналов работы</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>path</p>
</blockquote></td>
<td><blockquote>
<p>/usr/jatoba-</p>
<p>&lt;ver&gt;/var/log/jalo g/</p>
</blockquote></td>
<td><blockquote>
<p>Каталог хранения журналов работы</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>filename</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>jalog_agent-%Y-</p>
<p>%m-%d</p>
</blockquote></td>
<td><blockquote>
<p>Шаблон названия файлов журналов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>level</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>info</p>
</blockquote></td>
<td><blockquote>
<p>Уровень детализации журналов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>type</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>txt</p>
</blockquote></td>
<td><blockquote>
<p>Тип файлов журналов (txt, csv, json)</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>filemode</p>
</blockquote></td>
<td><blockquote>
<p>0600 (Linux)</p>
</blockquote></td>
<td><blockquote>
<p>Параметры доступа к файлам журнвло</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>rotation_age</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>1d</p>
</blockquote></td>
<td><blockquote>
<p>Интервал ротации файлов журналов по времени</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>rotation_size</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>10MB</p>
</blockquote></td>
<td><blockquote>
<p>Интервал ротации файлов журналов по размеру</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>truncate_on_rotation</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>false</p>
</blockquote></td>
<td><blockquote>
<p>Признак перезаписи файла журнала</p>
</blockquote></td>
</tr>
</tbody>
</table>

# ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ

> **Целевая СУБД** – СУБД, являющаяся целью мониторинга.
>
> При использовании компонента пользовательского веб-интерфейса для администраторов «Jatoba data safe», компонент ведет мониторинг, обслуживание и прочие действия отдельно установленных СУБД «Jatoba». Такие СУБД для компонента «Jatoba data safe» являются целевыми.
>
> **Служебная СУБД** – СУБД, обслуживающая компонент «Jatoba data safe», и выполняющая служебные функции, такие как:

- обеспечение собственного функционирования;

- сбор событий безопасности с отдельно установленных СУБД «Jatoba».

> Таким образом СУБД, обслуживающая компонент «Jatoba data safe» выполняет служебные функции и к ней применяется термин – «служебная СУБД».

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 10%" />
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
<p>Structured Query Language — язык структурированных запросов</p>
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
<p>ЭВМ</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Электронно-вычислительная машина</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ДСЧ</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Датчик случайных чисел</p>
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
</tbody>
</table>
