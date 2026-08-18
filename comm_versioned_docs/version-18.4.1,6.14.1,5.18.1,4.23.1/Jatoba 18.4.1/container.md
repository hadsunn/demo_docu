---
title: Инструкция по настройке и использованию контейнера
---

**АННОТАЦИЯ**

:::info Дополнительная информация
Для СУБД «Jatoba» версии ядра 4 используется версия — 4.23.1 

Для СУБД «Jatoba» версии ядра 5 используется версия — 5.18.1 

Для СУБД «Jatoba» версии ядра 6 используется версия — 6.14.1 

Для СУБД «Jatoba» версии ядра 18 используется версия — 18.4.1
:::

## ТРЕБОВАНИЯ К ПО

Контейнер устанавливается на ЭВМ под управлением ОС, указанных в таблице 1.1 документа «Руководство по установке СУБД Jatoba» 643.72410666.00067-08 97 01.

Для использования контейнера необходимо установить docker-ce версии, указанной в таблице 1.1 документа «Руководство по установке СУБД Jatoba» 643.72410666.00067-08 97 01. Инструкцию по установке ПО для необходимой ОС можно найти на сайтах:

- для Astra Linux — [<u>https://wiki.astralinux.ru/pages/viewpage.action?pageId=158601444,</u>](https://wiki.astralinux.ru/pages/viewpage.action?pageId=158601444)

- для РЕД ОС — [<u>https://redos.red-soft.ru/base/arm/arm-other/docker-install/</u>,](https://redos.red-soft.ru/base/arm/arm-other/docker-install/)

- для Альт — [<u>https://www.altlinux.org/Docker</u>,](https://www.altlinux.org/Docker)

- для остальных ОС, представленных в таблице 1.1 документа «Руководство по установке СУБД Jatoba» 643.72410666.00067-08 97 01 - [<u>https://docs.docker.com/engine/install/</u>.](https://docs.docker.com/engine/install/)

## КОМПЛЕКТ КОНТЕЙНЕРА

Контейнер СУБД «Jatoba» распространяется в виде архива, содержащего файлы, указанные в таблице 2.1.

Таблица 2.1 – Описание файлов комплекта контейнера

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 61%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Название документа</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>standalone</p>
</td>
<td>
<p>Каталог содержащий инструмент предназначенный для</p>
<p>определения и запуска многоконтейнерных приложений (docker-compose.yml)</p>
</td>
</tr>
<tr>
<td>
<p>jatobaХ_Х.Х.Х-ХХХХ-df1.3.1-astralinux1.8.tar<a href="#_bookmark2"><sup>1</sup></a></p>
</td>
<td>
<p>образ контейнера</p>
</td>
</tr>
<tr>
<td>
<p>.env</p>
</td>
<td>
<p>файл, содержащий переменные окружения для контейнера (см. подраздел <a href="#переменные-окружения">3.4</a>)</p>
</td>
</tr>
<tr>
<td>
<p>changelog.md</p>
</td>
<td>
<p>текстовый файл, описывающий изменения ПО</p>
</td>
</tr>
<tr>
<td>
<p>postgresql.template.conf</p>
</td>
<td>
<p>конфигурация БД, использующаяся контейнером по</p>
<p>умолчанию (см. раздел <a href="#изменение-пользовательских-настроек-postgresql.conf">5</a>)</p>
</td>
</tr>
<tr>
<td>
<p>README.md</p>
</td>
<td>
<p>краткая инструкция к контейнеру</p>
</td>
</tr>
<tr>
<td>
<p>log.sh</p>
</td>
<td>
<p>скрипт, использующийся для вывода журнала событий</p>
<p>контейнера (см. раздел <a href="#логирование-контейнера-log.sh">4.6</a>)</p>
</td>
</tr>
<tr>
<td>
<p>remove.sh</p>
</td>
<td>
<p>скрипт, использующийся для удаления контейнера (см.</p>
<p>подраздел <a href="#удаление-контейнера-remove.sh">4.7</a>)</p>
</td>
</tr>
<tr>
<td>
<p>restart.sh</p>
</td>
<td>
<p>скрипт, использующийся для перезапуска контейнера (см.</p>
<p>подраздел <a href="#перезапуск-контейнера-restart.sh">4.5</a>)</p>
</td>
</tr>
<tr>
<td>
<p>run.sh</p>
</td>
<td>
<p>скрипт, использующийся для запуска нового контейнера</p>
<p>(см. п. <a href="#запуск-контейнера">3.4.2</a>)</p>
</td>
</tr>
<tr>
<td>
<p>setup.sh</p>
</td>
<td>
<p>скрипт, использующийся для импорта образа контейнера</p>
<p>(см. подраздел <a href="#импорт-образа">3.3</a>)</p>
</td>
</tr>
<tr>
<td>
<p>start.sh</p>
</td>
<td>
<p>скрипт, использующийся для запуска существующего</p>
<p>контейнера (см. подраздел <a href="#запуск-остановленного-контейнера-start.sh">4.4</a>)</p>
</td>
</tr>
<tr>
<td>
<p>stop.sh</p>
</td>
<td>
<p>скрипт, использующийся для остановки контейнера (см.</p>
<p>подраздел <a href="#остановка-контейнера-stop.sh">4.3</a>)</p>
</td>
</tr>
</tbody>
</table>

В образе контейнера содержится БД «Jatoba» и компоненты к ней (см. таблицу [2.2](#комплект-контейнера)).

Настройка компонентов описана отдельно в соответствующих документах.

Установка дополнительных компонентов описаны в приложениях (Oracle_FWD – в Приложении [1](#приложение-1) и PLsPgSQL – в Приложении [2](#приложение-2)).

<span id="_bookmark2" class="anchor"></span><sup>1</sup> версия уточняется при поставке

Таблица 2.2 – Состав образа контейнера

<table>
<colgroup>
<col style="width: 1%" />
<col style="width: 3%" />
<col style="width: 16%" />
<col style="width: 6%" />
<col style="width: 15%" />
<col style="width: 22%" />
<col style="width: 4%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 2%" />
<col style="width: 2%" />
</colgroup>
<thead>
<tr>
<th rowspan="27"></th>
<th rowspan="2">
<p><strong>№</strong></p>
</th>
<th colspan="2" rowspan="2">
<p><strong>Наименование</strong></p>
</th>
<th colspan="3" rowspan="2">
<p><strong>Описание</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th colspan="2">
<p><strong>J18</strong></p>
</th>
</tr>
<tr>
<th>
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th>
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th>
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th>
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th>
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th>
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th>
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th>
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>1</p>
</th>
<th colspan="2">
<p>ядро СУБД</p>
</th>
<th colspan="3"></th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th></th>
<th colspan="2">
<p>pwgen</p>
</th>
<th colspan="3">
<p>генератор паролей</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th></th>
<th colspan="2">
<p>ja_pwmasking</p>
</th>
<th colspan="3">
<p>маскирование паролей</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th></th>
<th colspan="2">
<p>KNN</p>
</th>
<th colspan="3">
<p>поиск ближайших соседей</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th></th>
<th colspan="2">
<p>xid64</p>
</th>
<th colspan="3">
<p>компонент xid64</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th></th>
<th colspan="2">
<p>ja_Compression</p>
</th>
<th colspan="3">
<p>сжатие данных на уровне страниц</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th></th>
<th colspan="2">
<p>WAL Recovery</p>
</th>
<th colspan="3">
<p>восстановление поврежденных WAL записей</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th></th>
<th colspan="2">
<p>ja_TableSpace</p>
</th>
<th colspan="3">
<p>Автоматическое создание директорий табличных пространств</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th></th>
<th colspan="2">
<p>ja_tune</p>
</th>
<th colspan="3">
<p>Генератор конфигурационного файла</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th></th>
<th colspan="2">
<p>ja_ATX</p>
</th>
<th colspan="3">
<p>Механизм автономных транзакций</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th></th>
<th colspan="2">
<p>ja_WIpe_Files</p>
</th>
<th colspan="3">
<p>DataWiping: очистка файлов данных объектов доступа</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>2</p>
</th>
<th colspan="2">
<p>jaDog</p>
</th>
<th colspan="3">
<p>компонент управления режимом работы узлов кластера</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>3</p>
</th>
<th colspan="2">
<p>JDV (Jatoba data vault)</p>
</th>
<th colspan="3">
<p>компонент контроля субъектов доступа</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>4</p>
</th>
<th colspan="2">
<p>pgBadger</p>
</th>
<th colspan="3">
<p>компонент формирования отчетов по журналам СУБД</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>5</p>
</th>
<th colspan="2">
<p>pg_ProBackup</p>
</th>
<th colspan="3">
<p>компонент расширенного резервного копирования</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>6</p>
</th>
<th colspan="2">
<p>pg_Task</p>
</th>
<th colspan="3">
<p>компонент планирования заданий СУБД</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>7</p>
</th>
<th colspan="2">
<p>pg_Profile</p>
</th>
<th colspan="3">
<p>компонент формирования отчетов производительности СУБД</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>8</p>
</th>
<th colspan="2">
<p>JDS (Jatoba data safe)</p>
</th>
<th colspan="3">
<p>компонент пользовательского веб-интерфейса для</p>
<p>администраторов</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>9</p>
</th>
<th colspan="2">
<p>ja_Sync_Ldap</p>
</th>
<th colspan="3">
<p>компонент синхронизации учетных записей со службами каталогов</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>10</p>
</th>
<th colspan="2">
<p>PlsPgSQL</p>
</th>
<th colspan="3">
<p>компонент обфускации кода PL/pgSQL</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>11</p>
</th>
<th colspan="2">
<p>ja_Hipe_Cluster</p>
</th>
<th colspan="3">
<p>компонент высокопроизводительного кластера</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>12</p>
</th>
<th colspan="2">
<p>ja_Log</p>
</th>
<th colspan="3">
<p>компонент централизованного сбора записей событий СУБД</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>13</p>
</th>
<th colspan="2">
<p>1c_support</p>
</th>
<th colspan="3">
<p>компонент поддержки платформы 1С</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>14</p>
</th>
<th colspan="2">
<p>fasttrun</p>
</th>
<th colspan="3">
<p>компонент совместимости с 1С</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p>15</p>
</th>
<th colspan="2">
<p>fulleq</p>
</th>
<th colspan="3">
<p>компонент совместимости с 1С</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
<th style="text-align: center;">
<p>Х</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3">
<p>№ изменения:</p>
</td>
<td colspan="2">
<p>Подпись отв. лица:</p>
</td>
<td>
<p>Дата внесения изм:</p>
</td>
<td colspan="9"></td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 3%" />
<col style="width: 23%" />
<col style="width: 43%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 2%" />
<col style="width: 2%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование</strong></p>
</th>
<th rowspan="2">
<p><strong>Описание</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J18</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p>16</p>
</td>
<td>
<p>mchar</p>
</td>
<td>
<p>компонент совместимости с 1С</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>17</p>
</td>
<td>
<p>online_analyze</p>
</td>
<td>
<p>компонент совместимости с 1С</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>18</p>
</td>
<td>
<p>plantuner</p>
</td>
<td>
<p>компонент совместимости с 1С</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>19</p>
</td>
<td>
<p>ja_CSum</p>
</td>
<td>
<p>компонент контроля целостности</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>20</p>
</td>
<td>
<p>jaPooler</p>
</td>
<td>
<p>компонент балансировки подключений пользователей к СУБД</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>21</p>
</td>
<td>
<p>Oracle_FDW (Foreign data wrapper for oracle)</p>
</td>
<td>
<p>компонент доступа к данным СУБД Oracle</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>22</p>
</td>
<td>
<p>OraFCE (Oracle function compatibility extension)</p>
</td>
<td>
<p>компонент совместимости с СУБД Oracle</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>23</p>
</td>
<td>
<p>pg_Variables</p>
</td>
<td>
<p>компонент совместимости с системой глобальных переменных СУБД Oracle</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>24</p>
</td>
<td>
<p>SQL_Firewall</p>
</td>
<td>
<p>компонент выявления и предотвращения исполнения нетипичных SQL-запросов</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>25</p>
</td>
<td>
<p>JCS (Jatoba crypto access storage)</p>
</td>
<td>
<p>компонент сокрытия информации в файлах данных СУБД</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>26</p>
</td>
<td>
<p>pgSQL-HTTP</p>
</td>
<td>
<p>компонент формирования HTTP/HTTPS запросов из СУБД</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>27</p>
</td>
<td>
<p>TDS_FDW</p>
</td>
<td>
<p>компонент поддержки платформы Microsoft SQL Server</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>28</p>
</td>
<td>
<p>pgAudit</p>
</td>
<td>
<p>компонент расширенного журналирования событий СУБД</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>29</p>
</td>
<td>
<p>pgauditlogtofile</p>
</td>
<td>
<p>хранение событий безопасности в отдельном хранилище</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>30</p>
</td>
<td>
<p>PostGIS</p>
</td>
<td>
<p>компонент работы с географическими данными</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>31</p>
</td>
<td>
<p>PTrack</p>
</td>
<td>
<p>компонент расширенного резервного копирования</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>32</p>
</td>
<td>
<p>SecurityProfile</p>
</td>
<td>
<p>компонент управления парольными политиками пользователей</p>
<p>СУБД</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 3%" />
<col style="width: 23%" />
<col style="width: 43%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 2%" />
<col style="width: 2%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование</strong></p>
</th>
<th rowspan="2">
<p><strong>Описание</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J18</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p>33</p>
</td>
<td>
<p>ja_Plan_Manager</p>
</td>
<td>
<p>компонент создания планов запросов в базах данных (БД), их</p>
<p>оптимизации и экспорта в БД</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>34</p>
</td>
<td>
<p>pg_store_plans</p>
</td>
<td>
<p>контроль выполненных планов запросов</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>35</p>
</td>
<td>
<p>pg-hint-plan</p>
</td>
<td>
<p>компонент корректировки запросов</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>36</p>
</td>
<td>
<p>ja_Container</p>
</td>
<td>
<p>СУБД «Jatoba» в контейнере</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>37</p>
</td>
<td>
<p>node_exporter</p>
</td>
<td>
<p>компонент сбора аппаратных и программных показателей работы GNU/Linux</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>38</p>
</td>
<td>
<p>postgres_exporter</p>
</td>
<td>
<p>компонент сбора метрик СУБД</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>39</p>
</td>
<td>
<p>sql_exporter</p>
</td>
<td>
<p>SQL экспортёр. Компонент сбора расширенных метрик СУБД</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>40</p>
</td>
<td>
<p>prometheus</p>
</td>
<td>
<p>компонент мониторинга различных программных систем и сервисов Prometheus</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>41</p>
</td>
<td>
<p>Alertmanager</p>
</td>
<td>
<p>компонент управления и обработки оповещений в системе мониторинга Prometheus</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>42</p>
</td>
<td>
<p></p>
</td>
<td>
<p>Работа СУБД «Jatoba» в режиме ЗПС в ОС Astra Linux</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>43</p>
</td>
<td>
<p>gis-cryptoplatform</p>
</td>
<td>
<p>библиотека «ГИС»</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>—</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>44</p>
</td>
<td>
<p>pg_ulid</p>
</td>
<td>
<p>компонент поддержки лексографического идентификатора</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>45</p>
</td>
<td>
<p>ja_SecEventLog</p>
</td>
<td>
<p>компонент записи событий информационной безопасности</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>46</p>
</td>
<td>
<p>rum</p>
</td>
<td>
<p>компонент поддерживающий обратный индекс с хранением</p>
<p>позиционной информации и полнотекстовый поиск</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>47</p>
</td>
<td>
<p>pg_repack</p>
</td>
<td>
<p>компонент реорганизации таблицы с минимальными блокировками</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>48</p>
</td>
<td>
<p>osnova-digsig-key</p>
</td>
<td>
<p>работа СУБД Jatoba в режиме ЗПС в ОС ОСНОВА</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>49</p>
</td>
<td>
<p>tsvector2</p>
</td>
<td>
<p>компонент полнотекстового поиска в БД</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 3%" />
<col style="width: 23%" />
<col style="width: 43%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 2%" />
<col style="width: 2%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование</strong></p>
</th>
<th rowspan="2">
<p><strong>Описание</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>J18</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дист.<sup>1)</sup></strong></p>
</th>
<th style="text-align: center;">
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p>50</p>
</td>
<td>
<p>ja_Similar</p>
</td>
<td>
<p>компонент для полнотекстового поиска и определения похожих</p>
<p>текстов</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>51</p>
</td>
<td>
<p>ja_Inventory</p>
</td>
<td>
<p>компонент инвентаризации СУБД</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>52</p>
</td>
<td>
<p>ja_tune</p>
</td>
<td>
<p>Генератор конфигурационного файла</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>53</p>
</td>
<td>
<p>hunspell</p>
</td>
<td>
<p>Свободная библиотека для проверки орфографии и морфологического анализа. Компонент «hunspell»</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>54</p>
</td>
<td>
<p>ja_anonymizer</p>
</td>
<td>
<p>Маскирование данных</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>55</p>
</td>
<td>
<p>wal-g</p>
</td>
<td>
<p>Архивация и восстановление данных.</p>
<p>Компонент «wal-g»</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
</tr>
</tbody>
</table>

## УСТАНОВКА КОНТЕЙНЕРА

Установка контейнера состоит из следующих шагов:

- Обновление ОС (п. [3.1](#_bookmark5));

- Установка платформы docker в ОС (п. [3.2](#установка-платформы-docker-в-ос));

- Импорт образа (п. [3.3](#импорт-образа));

- Установка разрешений на исполнения всех исполняемых файлов контейнере;

- Настройка переменных окружения (п. [3.4](#переменные-окружения))

- Запуск скрипта логирования контейнера log (п. [4.6](#логирование-контейнера-log.sh));

- Проверка созданного контейнера (п. [4.2](#проверка-наличие-созданных-томов-volume-list)).

### Обновление ОС

Обновление ОС выполняется синхронизацией пакетов и обновлением их командами, описанными ниже.

```
sudo apt update
```

![](@site/docs/assets/images/com18.3.1/container/media/image3.png)



Рисунок 3.1 – Синхронизация пакетов

Команда «apt update» используется для синхронизации списков пакетов в вашей системе.

Она извлекает последние списки пакетов PPA и репозиториев в вашей системе и обеспечивает их актуальность.

Команда «apt upgrade» обновляет пакеты до последних версий и устанавливает новые пакеты, если они требуются в качестве зависимостей.

Он не удаляет никакие пакеты, а если какие-либо из них предназначены для удаления, он их пропускает.

```
sudo apt upgrade
```

![](@site/docs/assets/images/com18.3.1/container/media/image4.png)



Рисунок 3.2 – Обновление пакетов ОС

### Установка платформы docker в ОС

Платформа докера должна устанавливаться версии 20.10.12 или выше.

![](@site/docs/assets/images/com18.3.1/container/media/image2.png)

Альтернативный вариант (можно использовать для OS (DEB), которых нет в списке на сайте):


```
sudo apt install docker.io
```


![](@site/docs/assets/images/com18.3.1/container/media/image5.png)

Рисунок 3.3 - Установка платформы docker в ОС 

Версия установленной платформы docker проверяется командой:

```
docker -v
```

![](@site/docs/assets/images/com18.3.1/container/media/image6.png)





Рисунок 3.4 – Проверка версии установленной платформы docker

### Установка образа

Образ поставляется в виде архива, который необходимо импортировать в локальный
набор образов.


#### Изменение конфигурации службы Docker в ОС Astra Linux Special Edition

В ОС Astra Linux Special Edition встроенный сканер безопасности OpenSCAP блокирует установку и запуск образов, содержащих известные уязвимости (CVE). Сканер безопасности идентифицирует пакет libpq5, поставляемый в составе jatoba-libs. Версионность jatoba-libs привязана к major-версии Jatoba, которая, в свою очередь, до 18-й версии рассчитывалась как номер PostgreSQL минус 10. Фильтр сканера настроен на пороговое значение версии пакета. Если версия jatoba-libs менее 15.13, средство контроля выдает предупреждение о наличии уязвимостей, характерных для релиза PostgreSQL 15, независимо от фактического содержимого обновлений.

Для продолжения установки образа необходимо предварительно изменить конфигурацию службы Docker:

- Для версии ОС Astra Linux Special Edition 1.8.3 и новее создать файл /etc/docket/daemon.json следующего содержания:


```
{
  "live-restore": true,
  "scan-on-image-create": false,
  "scan-on-container-start": false
}
```

- Для версий ОС Astra Linux Special Edition 1.7.х, 1.8.1 и 1.8.2 файл /etc/docket/daemon.json будет содержать:


```
{
  "astra-sec-level":6,
  "live-restore":true
}
```


После этого необходимо перезапустить службу Docker


```
systemctl restart docker.service
```


и перейти к запуску установки образа.

#### Запуск установки образа

Для установки образа надо выполнить запуск скрипта «setup.sh», который входит в комплект поставки. Необходимо выдать скрипту «setup.sh» право на выполнение командой:

```
chmod +x setup.sh
```


![](@site/docs/assets/images/com18.3.1/container/media/image7.png)

Рисунок 3.5 – Выполнение команды chmod 

Запустить установку образа:

```
./setup.sh
```

![](@site/docs/assets/images/com18.3.1/container/media/image8.png)



Рисунок 3.6 – Выполнение скрипта setup.sh

После выполнения скрипта образ будет загружен и готов для создания контейнеров. Проверка наличия образа выполняется командой:


```
sudo docker images
```


![](@site/docs/assets/images/com18.3.1/container/media/image9.png)

Рисунок 3.7 – Вывод данных об образе

### Переменные окружения

Переменные окружения, указанные в таблице [3.1](#_bookmark9), контейнер использует при инициализации БД.

Чтобы задать переменные окружения, необходимо указать значения параметров при запуске контейнера (docker run) в виде параметров (–e <параметр>) или в виде файла (--env-file .env). Шаблон файла .env есть в комплекте контейнера.

Таблица 3.1 – Переменные окружения

<table>
<colgroup>
<col style="width: 34%" />
<col style="width: 34%" />
<col style="width: 10%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Название</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Значение параметра</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Необходимо указывать</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4" style="text-align: center;">
<p><strong># Сommon</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>JATOBA_VERSION</p>
</td>
<td style="text-align: center;">
<p>&lt;ver.image&gt;</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Версия контейнера</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>PG_MAJOR</p>
</td>
<td style="text-align: center;">
<p>&lt;ver&gt;</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Мажорная версия СУБД</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>IMAGE_NAME</p>
</td>
<td style="text-align: center;">
<p>jatoba</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Имя образа</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>CONTAINER_NAME</p>
</td>
<td style="text-align: center;">
<p>jatobadb</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Имя контейнера</p>
</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">
<p><strong># Need absolute path to file</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>POSTGRESCONF_PATH</p>
</td>
<td style="text-align: center;">
<p>/path/to/postgresql.template.conf</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Путь к шаблону</p>
<p>конфигурационного файла</p>
</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">
<p><strong># For external postgres.conf</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>PGCFGFILE_TIMEZONE</p>
</td>
<td style="text-align: center;">
<p>Europe/Moscow</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Временная зона</p>
</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">
<p><strong># Volumes</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>POSTGRESQL_VOLUME_DATA</p>
</td>
<td style="text-align: center;">
<p>postgresql-volume-data</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Том с данными</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>POSTGRESQL_VOLUME_EXTENSIONS</p>
</td>
<td style="text-align: center;">
<p>postgresql-volume-extensions</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Том с расширениям</p>
</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">
<p><strong># Account data</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>POSTGRES_USER</p>
</td>
<td style="text-align: center;">
<p>postgres</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Имя пользователя сервера БД. По умолчанию:</p>
<p>postgres</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>POSTGRES_PASSWORD</p>
</td>
<td style="text-align: center;">
<p>mysecretpassword</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Пользовательский пароль</p>
<p>для подключения к системной БД</p>
</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">
<p><strong># setup.sh script (show additional docker layers information)</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>SHOW_DOCKER_OVERLAY_LAYERS_TABLE</p>
</td>
<td style="text-align: center;">
<p>false</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p>Вывод сопоставления слоёв</p>
<p>контейнера</p>
</td>
</tr>
</tbody>
</table>

### Запуск нового контейнера

![](@site/docs/assets/images/com18.3.1/container/media/image1.png)

:::warning Важная информация
Изменить версию СУБД при использовании текущей версии контейнера невозможно.
:::

В данном разделе описаны действия, которые необходимо сделать администратору, чтобы контейнер корректно запустился и инициализировал БД.

![](@site/docs/assets/images/com18.3.1/container/media/image38_.png)

Рисунок 3.8 – Проверки, которые контейнер делает после запуска

На рисунке [3.8](#_bookmark11) отображен процесс запуска контейнера: какие проверки происходят после запуска, и в каких случаях могут происходить ошибки. На этой схеме видно, что при запуске новый контейнер может принимать часть данных от старого контейнера, такую как каталог данных БД (см. подраздел [4.9](#сохранение-данных-контейнера)).

В качестве шаблона конфигурационного файла контейнер использует файл «postgresql.template.conf», содержащийся в комплекте. Однако пользователь может переопределить этот файл при запуске контейнера (см. подраздел [4.9](#сохранение-данных-контейнера)).

Запустить контейнер можно с помощью команды «docker run» (см. подраздел [4.8](#запуск-контейнера-через-docker-run)) или с помощью скрипта run.sh (см. подраздел [3.4.2](#запуск-контейнера)).

### Запуск контейнера

Для запуска контейнера СУБД «Jatoba» необходимо выполнить последовательность действий, приведенную ниже.

1.  Проверить параметры в файле .env, находящийся в текущем каталоге:

![](@site/docs/assets/images/com18.3.1/container/media/image21.png)

```
# cd /home/admin1/Downloads/container/
```

```
# nano .env
```

Рисунок 3.9 – Файл «.env»

Сохранить внесенные изменения. Перемещать, переименовывать файл .env не требуется.

2.  Перейти в каталог с системой. Если ранее скриптам не был дан доступ на выполнение, необходимо выполнить команду:

```
chmod +x *.sh
```

3.  Далее необходимо запустить контейнер и одновременно вывести журнал событий контейнера:

```
./run.sh; ./log.sh
```

![](@site/docs/assets/images/com18.3.1/container/media/image22.png)

Рисунок 3.10 – Журнал событий контейнера после запуска скриптов «./run.sh; ./log.sh»

### Запуск контейнера через docker compose

Запуск контейнера возможен после:

- импорта образа, как описано в п.п. [3.3](#импорт-образа), настоящего документа;

- Установленного docker compose plugin версии 2.20.2;

Либо установить docker compose plugin командами в терминале ОС:

```
sudo apt install docker-compose-v2 docker compose version
```

![](@site/docs/assets/images/com18.3.1/container/media/image23.png)



Рисунок 3.11 – Установка docker compose plugin

Далее выполняются следующие действия:

Перейти в директорию standalone.

В файле .env задать надёжный пароль для пользователя postgres в переменной POSTGRES_PASSWORD

Собрать и запустить контейнер:

```
docker compose up –d
```

Проверить, что СУБД успешно запустилось:

```
docker ps
```

Проверить лог контейнера:

```
docker logs jatobadb
```

Проверить volume:

```
docker volume list
```

Проверить подключение к контейнеру:

```
docker exec -it jatobadb /bin/bash
```

![](@site/docs/assets/images/com18.3.1/container/media/image24.png)



Рисунок 3.12 – Вывод команды проверки подключения к контейнеру

На данном этапе пользователь находится внутри встроенной операционной системы, от имени и с правами пользователя данной ОС «postgres», в которой доступен минимальный набор команд. Например, вывод списка каталогов.

![](@site/docs/assets/images/com18.3.1/container/media/image25.png)

Рисунок 3.13 - Вывод списка каталогов

Проверить подключение к СУБД, не выходя из контейнера:

```
psql
```

![](@site/docs/assets/images/com18.3.1/container/media/image26.png)

Рисунок 3.14 – Запуск СУБД «Jatoba»

или, если уже отключились от контейнера на предыдущем шаге:

```
docker exec -it jatobadb psql -U postgres
```

## ОСНОВНЫЕ ОПЕРАЦИИ С КОНТЕЙНЕРОМ

В комплекте контейнера расположены скрипты, упрощающие работу с контейнерами. Скрипты должны находиться в одном каталоге с файлом .env. Имя контейнера, с которым работают скрипты, указывается в .env параметром CONTAINER_NAME.

.env – файл, содержащий набор переменных окружения. Переменные окружения описаны в подразделе [3.4](#переменные-окружения).

Описание скриптов:

- remove.sh – удаляет контейнер (см. подраздел [4.7](#удаление-контейнера-remove.sh));

:::warning Важная информация
Если каталог data не был примонтирован к хостовому серверу при инициализации контейнера, то при использовании скрипта remove.sh данные удалятся. Если каталог
был примонтирован, то данные при запуске remove.sh сохранятся.
:::


- stop.sh – останавливает контейнер (см. подраздел [4.3](#остановка-контейнера-stop.sh));

- run.sh – запускает новый контейнер (см. п. [3.4.2](#запуск-контейнера));

- start.sh – запускает остановленный (но не удаленный) контейнер (см. п .[4.4](#запуск-остановленного-контейнера-start.sh));

- restart.sh - используется для перезапуска контейнера (см. подраздел 4.5);

- stop.sh - используется для остановки контейнера (см. подраздел 4.3);

- log.sh – запускает просмотр журнала событий БД (см. подраздел [4.6](#логирование-контейнера-log.sh));

- remove.sh – удаляет контейнер (см. подраздел 4.7);

Чтобы выполнить скрипт, надо дать ему право на выполнение:

```
chmod +x <название скрипта>.sh
```

И запустить:

```
./<название скрипта>.sh
```

### Проверка статуса (docker ps -a)

Проверка статуса контейнера выполняется из терминала ОС командой:

```
# docker ps -a
```

![](@site/docs/assets/images/com18.3.1/container/media/image27.png)

Рисунок 4.1 – Вывод статуса контейнера В выводе статуса будут отражены столбцы:

- CONTAINER ID – идентификатор контейнера;

- IMAGE –имя образа, из которого был поднят контейнер;

- COMMAND - команда, которая выполнилась при старте контейнера

- CREATED – время с момента создания контейнера;

- STATUS – дни работы контейнера (текущее состояние);

- PORTS – используемые порты и адресация сети (проброс портов);

- NAMES – имя контейнера.

### Проверка наличие созданных томов (volume list)

Проверка созданных томов выполняется из терминала ОС командой:

```
# docker volume list
```

![](@site/docs/assets/images/com18.3.1/container/media/image28.png)



Рисунок 4.2 – Вывод команды проверки созданных томов

### Остановка контейнера (stop.sh)

Остановка контейнера выполняется скриптом «stop.sh», расположенным в домашней директории контейнера.

Скрипт «stop.sh» запускается командой из терминала ОС:

```
./stop.sh
```

![](@site/docs/assets/images/com18.3.1/container/media/image29.png)

Рисунок 4.3 – Команда остановки контейнера

При проверке статуса контейнера в столбце «Status» значение «Exited» с указанием истекшего времени с момента остановки контейнера.

```
docker ps -a
```

![](@site/docs/assets/images/com18.3.1/container/media/image30.png)

Рисунок 4.4 – Вывод статуса остановленного контейнера

### Запуск остановленного контейнера (start.sh)

Запуск контейнера выполняется скриптом «start.sh», командой из корневого каталога контейнера в терминале ОС:

![](@site/docs/assets/images/com18.3.1/container/media/image31.png)

```
./start.sh
```

Рисунок 4.5 – Команда запуска контейнера

### Перезапуск контейнера (restart.sh)

Перезапуск контейнера выполняется скриптом «restart.sh», командой из корневого каталога контейнера в терминале ОС:

```
./restart.sh
```

![](@site/docs/assets/images/com18.3.1/container/media/image32.png)

Рисунок 4.6 – Выполнение команды перезапуска контейнера

### Логирование контейнера (log.sh)

Скрипт log.sh может запускаться самостоятельно, либо совместно со скриптами:

- run.sh (п. [3.4.2](#запуск-контейнера));

```
./run.sh; ./log.sh
```

- start.sh (п. [4.4](#запуск-остановленного-контейнера-start.sh)).

```
./start.sh; ./log.sh
```

При запущенном контейнере скрипт «log.sh» выведет журнал событий контейнера:

```
./log.sh
```

![](@site/docs/assets/images/com18.3.1/container/media/image33.png)



Рисунок 4.7 – Вывод скрипта логирования

### Удаление контейнера (remove.sh)

Удаление контейнера должно выполняться по следующим шагам:

- Выполнить скрипт удаления контейнера:

```
./remove.sh
```

![](@site/docs/assets/images/com18.3.1/container/media/image34.png)

Рисунок 4.8 – Удаление контейнера

- Удалить том с данными:

```
docker volume rm postgresql-volume-data
```

- Удалить том с расширениями СУБД:
- 
```
docker volume rm postgresql-volume-extensions
```

![](@site/docs/assets/images/com18.3.1/container/media/image35.png)



Рисунок 4.9 – Команды удаления томов с данными и расширениями СУБД

- Проверить отсутствие контейнера в списке:
- 
```
docker ps –a
```

![](@site/docs/assets/images/com18.3.1/container/media/image36.png)



Рисунок 4.10 – Вывод статуса контейнера

### Запуск контейнера через docker run

Для запуска контейнера СУБД «Jatoba» необходимо выполнить команду:

```
docker run <параметры> jatoba*:*.*.*-****-df1.*.*
```

Примеры команд запуска контейнера есть в разделе 6.

Параметры docker run для запуска контейнера СУБД «Jatoba»:

- --user – запуск контейнера от имени пользователя

:::info Дополнительная информация
Параметр –user активирует режим «non-root», т.е. запуск контейнера не от привилегированного пользователя.

Данный параметр прописан в скрипте «run.sh», однако при игнорировании его контейнер запустится от пользователя «root».

:::

Данный параметр прописан в скрипте «run.sh», однако при игнорировании его контейнер запустится от пользователя «root».

- -i – параметр, который делает возможным взаимодействие с терминалом внутри контейнера;

- -t – параметр, который предоставляет доступ к терминалу внутри контейнера;

:::info Дополнительная информация
Параметры –t и –i обычно используются в паре
:::

- -d – параметр для запуска контейнера в фоновом режиме. При запуске

контейнера с использованием этого параметра контейнер не остановится при закрытии консоли;

- -v <название созданного docker-volume>:<путь до каталога внутри контейнера>

- параметр, позволяющий сохранять каталог контейнера на хостовом сервере. При использовании этого параметра данные контейнера сохранятся при его удалении (см. подраздел [4.9](#сохранение-данных-контейнера));

- -e <параметр>=<значение параметра> – параметр, который задает переменную окружения для контейнера;

- --env-file <путь к файлу> – параметр, который задает путь к файлу, содержащему переменные окружения для контейнера;

- -p <внешний порт>:5432 – параметр, который сопоставляет порт внутри контейнера с портом на хостовом сервере — таким образом, к БД в контейнере можно обратиться через указанный порт на хостовом сервере;

:::info Дополнительная информация
Если на хостовом сервере уже запущен процесс, использующий порт 5432, можно поменять порт для контейнера, например, на 54321 (-p 54321:5432)
:::

- --name – имя запускаемого контейнера.

При успешном создании контейнера появится его идентификатор.

По имени или идентификатору контейнера можно получить журнал событий и убедиться, что сервер БД корректно запустился. Команда для просмотра журнала событий:

```
docker logs <имя контейнера>
```

Либо для отслеживания потока вывода журнала событий:

```
docker logs -f <имя контейнера>
```

### Сохранение данных контейнера

:::info Дополнительная информация
При запуске контейнера с использованием скрипта run.sh сохранять данные не требуется, это делает скрипт.
:::

Перед запуском нового контейнера рекомендуется создать docker-volume для каталога данных сервера БД. Иначе в случае удаления контейнера эти данные будут потеряны.

Чтобы создать docker-volume для сохранения каталога данных сервера БД (каталога /var/lib/jatoba/<ver>/data), выполнить команду:

```
docker volume create postgresql-volume-data
```

Для использования этого docker-volume в контейнере, при запуске контейнера с помощью команды docker run (см. подраздел [4.8](#запуск-контейнера-через-docker-run)) необходимо добавить параметр -v postgresql-volume-data:/var/lib/jatoba/<ver>/data.

## ИЗМЕНЕНИЕ ПОЛЬЗОВАТЕЛЬСКИХ НАСТРОЕК POSTGRESQL.CONF

В комплекте контейнера есть файл конфигурации БД (postgresql.template.conf), который используется в качестве шаблона при настройке БД. Но его можно переопределить через монтирование нового файла конфигурации на хостовой сервер или через перенос файла в контейнер:

- Монтирование файла. При использовании этого способа файл конфигурации сохранится на хостовом сервере в случае удаления контейнера.

Для этого при запуске контейнера (docker run) указать параметр:

```
-v <путь до postgresql.conf на хостовом сервере>:/settin gs/postgresql.conf
```

- Перенос файла. При использовании этого способа файл конфигурации не сохранится при удалении контейнера.

В каталог /settings, находящийся внутри контейнера, поместить свой файл конфигурации с именем postgresql.conf и перезапустить контейнер. Это можно сделать с помощью команды:

```
docker cp <путь до postgresql.conf на хостовом сервере> <имя контейнера>:/settings
```

Затем выполнить команду:

```
docker restart <имя контейнера>
```

### Шаблонизация параметров

В пользовательском файле настроек поддерживается шаблонизация параметров. Например, если при создании контейнера задать переменную окружения PGCFGFILE_TIMEZONE, то ее можно указать в пользовательском файле настроек: log_timezone= {{PGCFGFILE_TIMEZONE}}.

Если в файле конфигурации было шаблонизировано значение, но соответствующей переменной окружения не существует, контейнер будет выдавать ошибку. В таком случае необходимо или указать значение этого параметра в качестве переменной окружения при запуске, или изменить файл конфигурации, чтобы в нем было явно указано значение параметра


##  ПРИМЕРЫ КОМАНД ЗАПУСКА КОНТЕЙНЕРА

1)  С созданием docker-volume.

Выполнить команду создания docker-volume для сохранения каталога данных сервера

```
docker volume create postgresql-volume-data
```

Выполнить команду запуска контейнера:

```
docker run -it -d \\
  -v postgresql-volume-data:/var/lib/jatoba/4/data \\
  -e POSTGRES_PASSWORD=mysecretpassword \\
  --user postgres \\
  --name jatobadb jatoba4:4.8.2-1124-df1.2.1
```

В данном примере в интерактивном режиме создается контейнер с смонтированными docker-volume для каталога данных БД. Доступ к БД есть с хостового сервера по порту 5432. Имя контейнера – jatobadb.

2)  Без создания docker-volume.

Для запуска контейнера выполнить команду:

```
docker run -it -d \\
  -e POSTGRES_HOST_AUTH_METHOD= trust -e POSTGRES_USER=admin \\
  --user postgres \\
  -p 5432:5432 --name jatobadb jatoba4:4.8.2-1124-df1.2.1
```

В данном примере создается контейнер jatobadb. Доступ к БД у пользователя admin, пароль для подключения не используется. После удаления контейнера данные не сохранятся, потому что docker-volume не были смонтированы (см. подраздел [4.9](#сохранение-данных-контейнера)).

## ИСПОЛЬЗОВАНИЕ УТИЛИТЫ PSQL

psql – это терминальный интерфейс, использующийся для работы с СУБД «Jatoba». Он позволяет вводить запросы в интерактивном режиме, отправлять их в СУБД и просматривать результат выполнения запросов.

Для подключения к СУБД «Jatoba» с сервера, на котором развернут и запущен контейнер, можно использовать команду:

```
docker exec -it <название контейнера> psql -U <имя пользователя БД>
```

Здесь:

- docker exec -it – команда запуска процесса в контейнере, -it обозначает интерактивный режим выполнения (позволяет использовать оболочку командной строки внутри контейнера и выполнять из-под нее команды);

- <название контейнера> – имя контейнера СУБД «Jatoba», указанное при запуске;

- psql – утилита, запускаемая внутри контейнера;

- -U <имя пользователя БД> – параметр утилиты psql, который обозначает, что psql будет подключаться к СУБД «Jatoba» под указанным пользователем БД. Необходимо использовать имя, указанное в параметре POSTGRES_USER файла .env.

:::info Дополнительная информация
По умолчанию, если в файле .env не был указан POSTGRES_USER, при инициализации создается пользователь postgres
:::

Пример использования команды:

```
docker exec -it jatobadb psql -U postgres
```

В данном примере подключение идет к контейнеру с названием jatobadb, в нем в интерактивном режиме запускается утилита psql под пользователем postgres.

![](@site/docs/assets/images/com18.3.1/container/media/image37.png)

Рисунок 7.1 - Запуск утилиты psql в контейнере

## СОПОСТАВЛЕНИЕ СЛОЕВ КОНТЕЙНЕРА С ДИРЕКТОРИЯМИ

При импорте в локальное хранилище образа контейнера докер именует директории содержащие слои распакованных образов случайным образом. В силу данной причины для сопоставления слоёв образа директориям на хосте, содержащим распакованные слои используется скрипт setup.sh.

Перед использованием скрипта требуется

— установить утилиту командной строки для работы с JSON-данными jq командой:

```
apt install jq
```

- чтобы была установлена платформа docker в ОС (см. п.п. [3.2](#установка-платформы-docker-в-ос));

- образ, залитый в локальное хранилище образов;

- в файле переменных окружения установлен параметр:

```
# setup.sh script (show additional docker layers information) SHOW_DOCKER_OVERLAY_LAYERS_TABLE=true
```

![](@site/docs/assets/images/com18.3.1/container/media/image38.png)



Рисунок 8.1 – Параметр «SHOW_DOCKER_OVERLAY_LAYERS_TABLE» в файле переменных окружения

Скрипт запускается командой:

```
bash ./setup.sh
```

![](@site/docs/assets/images/com18.3.1/container/media/image39.png)



Рисунок 8.2 – Вывод сопоставленных слоёв

## ПОВЕДЕНИЕ КОНТЕЙНЕРА В ОСОБЫХ СЛУЧАЯХ

### Изменение настроек после запуска контейнера

Настройки подключения к БД, такие как пароль пользователя и метод аутентификации, указываются переменными окружения при первом запуске БД (см. подраздел [3.4](#переменные-окружения)). Они используются контейнером при инициализации БД, после чего эти настройки можно изменить двумя способами:

- Удалить контейнер и создать его заново с использованием новых переменных окружения. При этом необходимо использовать новый docker-volume для каталога данных, потому что при использовании старого docker-volume БД не будет проинициализирована заново;

- Вручную изменить настройки в запущенном контейнере, например:

  - Для смены пароля пользователя БД выполнить команду:

```
docker exec -it <имя контейнера> psql -U <имя пользователя> -c "ALTER USER <имя пользователя> PASSWORD '<новый пароль>';"
```

- Для смены метода аутентификации необходимо отредактировать файл pg_hba.conf. Если для контейнера был создан и примонтирован docker-volume для каталога данных, отредактировать файл можно таким образом:

  1.  На хостовом сервере выполнить команду:

```
docker inspect postgresql-volume-data
```

2.  Открыть файл pg_hba.conf: он находится в каталоге, указанном в графе «Mountpoint».

3.  Изменить настройки в файле pg_hba.conf.

4.  Перезапустить контейнер:

```
docker restart <имя контейнера>
```

## SSL АУТЕНТИФИКАЦИЯ В СУБД «JATOBA» КОНТЕЙНЕРЕ

SSL аутентификация в СУБД «Jatoba» контейнере описана в документе «Руководство по безопасности СУБД «Jatoba».

## ПРИЛОЖЕНИЕ 1

### Установка компонента Oracle_FDW

Чтобы установить компонент Oracle_FDW, необходимо:

1.  Скачать внешний rpm-пакет Oracle Instance Client версии 11.1. Скачать его возможно по адресу: [<u>https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html</u>](https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html)

2.  Скопировать файл пакета в контейнер:

```
docker cp <oracle instance client>.rpm <имя контейнера>:/<oracle instance client>.rpm
```

3.  Перейти в каталог c дистрибутивом astralinux17smolensk.

4.  Скопировать установщик компонента на контейнер:

```
docker cp jatoba4-oracle-fdw_4.8.2-1124_amd64.deb <имя контейнера>:/jatoba4-oracle-fdw_4.8.2-1124_amd64file.deb
```

5.  Зайти в bash оболочку контейнера:

```
docker exec -it <имя контейнера> /bin/bash
```

6.  Прописать репозиторий:

```
echo "deb [https://dl.astralinux.ru/astra/stable/1.7_x86-64/r epository-main/](https://dl.astralinux.ru/astra/stable/1.7_x86-64/repository-main/) 1.7_x86-64 main contrib non-free" > /etc/ apt/source.list
```

7.  Обновить списки пакетов:

```
apt update
```

8.  Установить дополнительные библиотеки:

```
apt install alien libaio1
```

9.  Установить Oracle Instance Client:

```
alien -i <oracle instance client>.rpm
```

10. Выполнить конфигурирование установленной библиотеки:

```
echo /usr/lib/oracle/11.2/client64/lib > /etc/ld.so.conf.d/o racle-instantclient.conf
ldconfig
```

11. Установить пакет Oracle_FDW:

```
dpkg -i jatoba4-oracle-fdw_4.8.2-1124_amd64file.deb
```

Далее необходимо настроить компонент в соответствии с инструкцией к компоненту.

## ПРИЛОЖЕНИЕ 2

### Установка компонента PLsPgSQL

Чтобы установить компонент PLsPgSQL, необходимо:

1.  Скачать библиотеку lsb-cprocsp.

lsb-cprocsp – криптопровайдер «КриптоПро CSP» версии 5.0. Данный пакет распространяется в виде самостоятельного DEB/RPM дистрибутива. Для установки необходимо обратиться к документации на официальном сайте разработчика КриптоПро – для доступа требуется зарегистрированный пользователь по правилам сайта [<u>https://cryptopro.ru/user</u>)](https://cryptopro.ru/user);

2.  Создать каталог cryptopro в контейнере:

```
sudo docker exec -it <имя контейнера> mkdir cryptopro
```

3.  Скопировать файлы библиотеки в каталог cryptopro в контейнере:

```
docker cp <имя каталога с файлами КриптоПро>/. <имя контейнера>:/cryptopro
```

4.  Дать скрипту install.sh право на исполнение:

```
sudo docker exec -it <имя контейнера> chmod +x cryptopro/install.sh
```

5.  Установить библиотеку КриптоПро:

```
sudo docker exec -it <имя контейнера> cryptopro/install.sh
```

6.  Перейти в каталог c дистрибутивом astralinux17smolensk.

7.  Скопировать пакет gis-cryptoplatform17 на контейнер:

```
docker cp gis-cryptoplatform17_1.7.3-4_amd64.deb <имя контейнера>:/gis-cryptoplatform17_1.7.3-4_amd64.deb
```

8.  Скопировать пакет PLsPgSQL на контейнер:

```
docker cp jatoba4-plspgsql_4.8.2-1124_amd64.deb <имя контейнера>:/jatoba4-plspgsql_4.8.2-1124_amd64.deb
```

9.  Установить библиотеку gis-cryptoplatform17:

```
docker exec -it <имя контейнера> dpkg -i gis-cryptoplatform17_1.7.3-4_amd64.deb
```

10. Установить компонент PLsPgSQL:

```
docker exec -it <имя контейнера> dpkg -i jatoba4-plspgsql_4.8.2-1124_amd64.deb
```

Далее необходимо настроить компонент в соответствии с инструкцией к компоненту.

## ПРИЛОЖЕНИЕ 3

### Пример настройки резервного копирования

Настройка резервного копирования СУБД в контейнерном исполнении требует выполнения следующих шагов:

1)  Предварительные действия:

Создать

ВМ1 - файловый сервер. ВМ2 - сервер Jatoba.

2)  2 Подготовить ВМ1 с файловым сервером:

обновить ОС и установить nfs-сервер командой в терминале ОС:

```
apt-get update -y
apt-get install nfs-kernel-server
```

3)  Открыть файл настройки сервера:

```
nano /etc/exports
```

и добавить строку:

```
/path/to/share/dir <IP-адрес ВМ2>(rw,sync,no_subtree_check)
```

Например:

```
/home/user/share 192.168.223.130(rw,sync,no_subtree_check)
```

4)  Создать каталог для файлового сервера:

```
mkdir /home/user/share
```

--здесь и далее будет использован каталог /home/user/share для примера из шага 3

5)  Настроить права:

```
chmod 777 /home/user/share
```

6)  Применить настройки и перезапустить nfs-сервер:

```
exportfs -a
systemctl restart nfs-server
```

7)  Подготовить ВМ2 с сервером Jatoba: Обновить ОС и установить nfs-клиент и docker:

```
apt-get update -y
apt-get install nfs-common docker.io
```

8)  Создать и примонтировать сетевой каталог:

```
mkdir /mnt/<share каталог>
mount -t nfs <IP-адрес ВМ1>:/path/to/share/dir /mnt/<share каталог>
```

9)  Скопировать в домашний каталог на ВМ2 папку, содержащую архив с образом и скрипты для работы с ним.

10) Сценарий:

Выдать права на выполнение скриптов

```
chmod a+x \*.sh
```

11) Проверить права:

```
ls –l
```

12) Выполнить скрипт:

```
sudo ./setup.sh
```

13) Проверить наличие образа:

```
sudo docker images
```

14) Отредактировать скрипт run.sh, добавить строку с /mnt/nfs_share:

```
docker run -it -d \\
  -e PGDATA=/var/lib/jatoba/${PG_MAJOR}/data/pgdata \\
  -v /mnt/nfs_share:/var/lib/jatoba/${PG_MAJOR}/backups \\
  -v ${POSTGRESQL_VOLUME_DATA}:/var/lib/jatoba/${PG_MAJOR}/data \\
  -v ${POSTGRESQL_VOLUME_EXTENSIONS}:/var/lib/jatoba/${PG_MAJOR} \\
  --user root \\
  --env-file .env \\
  -p 54321:5432 --name ${CONTAINER_NAME} $_IMAGE_TAG
```



15) Запустить контейнер:

```
./run.sh
```

16) Проверить смонтированные в контейнер каталоги:

```
docker inspect jatobadb | grep -A 50 Mounts
```

17) Выполнить подключение к контейнеру:

```
docker exec -it jatobadb /bin/bash
```

18) Инициализировать каталог резервных копий (директория backups):

```
/usr/jatoba-*/bin/pg_probackup init -B /var/lib/jatoba/*/backups
```

19) Определить копируемый экземпляр БД (-B каталог_резервных_копий -D

директория_данных):

```
/usr/jatoba-*/bin/pg_probackup add-instance -B /var/lib/jatoba/*/backups -D /var/lib/jatoba/*/data/pgdata --instance localdb
```

20) Указать параметры подключения:

```
/usr/jatoba-*/bin/pg_probackup set-config -B
/var/lib/jatoba/*/backups --instance localdb -d postgres -h 127.0.0.1 -U postgres --archive-timeout=1min
```



21) Выполнить команду создания резервной копии:

```
/usr/jatoba-*/bin/pg_probackup backup -B /var/lib/jatoba/*/backups --instance localdb -b FULL --stream
```

22) Убедиться, что полная резервная копия в режиме STREAM была создана:

```
/usr/jatoba-*/bin/pg_probackup show -B /var/lib/jatoba/*/backups --instance localdb
```

23) Убедиться, что каталог backups не пустой:

```
ls -la /var/lib/jatoba/6/backups/
```

24) Выйти из контейнера и проверить сетевую папку:

```
ls -la /mnt/nfs_share
```

25) Проверить сетевую папку на ВМ1:

```
ls -la /home/user/share
```

## ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ

**docker-volume** – это механизм сохранения данных, сгенерированных и используемых контейнерами Docker, которые остаются после работы и удаления контейнеров, если были использованы в команде запуска контейнера через аргументы -v или --volume.

**Хостовой сервер** — сервер, на который устанавливается образ и запускается контейнер СУБД «Jatoba».

**Docker -** это платформа для автоматизации развертывания и управления приложениями в средах с различными операционными системами. Он позволяет упаковывать приложения со всем их зависимостями в легкие, повторно используемые модули-контейнеры. Docker ускоряет процесс разработки и доставки приложений, а также упрощает управление инфраструктурой и контейнеризацию приложений.

## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

| Сокращение | Расшифровка                      |
|------------|----------------------------------|
| ОС         | Операционная система             |
| БД         | База данных                      |
| ПО         | Программное обеспечение          |
| СУБД       | Система управления базами данных |
| ЭВМ        | Электронно-вычислительная машина |
