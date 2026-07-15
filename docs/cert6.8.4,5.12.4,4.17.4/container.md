<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><p>УТВЕРЖДЕН</p>
<p>643.72410666.00067-07 99 01-ЛУ</p></th>
<th style="text-align: center;"></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" style="text-align: center;"><p>ЗАЩИЩЕННАЯ СИСТЕМА УПРАВЛЕНИЯ<br />
БАЗАМИ ДАННЫХ «JATOBA»</p>
<p><strong>Инструкция по настройке и использованию контейнера</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 99 01</strong></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">Листов 36</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">2024</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: right;">Литера О<sub>1</sub></td>
</tr>
</tbody>
</table>

**АННОТАЦИЯ**

В документе приведены сведения, описывающие работу контейнера СУБД «Jatoba».

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Для СУБД «Jatoba» версии ядра 4 используется версия — 4.17.1</p>
<p>Для СУБД «Jatoba» версии ядра 5 используется версия — 5.12.1</p>
<p>Для СУБД «Jatoba» версии ядра 6 используется версия — 6.8.1</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image2.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image1.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

**СОДЕРЖАНИЕ**

# 

[1. Требования к ПО [4](#требования-к-по)](#требования-к-по)

[2. Комплект контейнера [5](#комплект-контейнера)](#комплект-контейнера)

[3. Установка контейнера [9](#установка-контейнера)](#установка-контейнера)

[3.1. Обновление ОС [9](#обновление-ос)](#обновление-ос)

[3.2. Установка платформы docker в ОС [10](#установка-платформы-docker-в-ос)](#установка-платформы-docker-в-ос)

[3.3. Импорт образа [11](#импорт-образа)](#импорт-образа)

[3.4. Переменные окружения [12](#переменные-окружения)](#переменные-окружения)

[3.4.1. Запуск нового контейнера [14](#запуск-нового-контейнера)](#запуск-нового-контейнера)

[3.4.2. Запуск контейнера [15](#запуск-контейнера)](#запуск-контейнера)

[4. Основные операции с контейнером [17](#основные-операции-с-контейнером)](#основные-операции-с-контейнером)

[4.1. Проверка статуса (docker ps -a) [17](#проверка-статуса-docker-ps--a)](#проверка-статуса-docker-ps--a)

[4.2. Проверка наличие созданных томов (volume list) [18](#проверка-наличие-созданных-томов-volume-list)](#проверка-наличие-созданных-томов-volume-list)

[4.3. Остановка контейнера (stop.sh) [18](#остановка-контейнера-stop.sh)](#остановка-контейнера-stop.sh)

[4.4. Запуск остановленного контейнера (start.sh) [19](#запуск-остановленного-контейнера-start.sh)](#запуск-остановленного-контейнера-start.sh)

[4.5. Перезапуск контейнера (restart.sh) [19](#перезапуск-контейнера-restart.sh)](#перезапуск-контейнера-restart.sh)

[4.6. Логирование контейнера (log.sh) [20](#логирование-контейнера-log.sh)](#логирование-контейнера-log.sh)

[4.7. Удаление контейнера (remove.sh) [20](#удаление-контейнера-remove.sh)](#удаление-контейнера-remove.sh)

[4.8. Запуск контейнера через docker run [21](#запуск-контейнера-через-docker-run)](#запуск-контейнера-через-docker-run)

[4.9. Сохранение данных контейнера [23](#сохранение-данных-контейнера)](#сохранение-данных-контейнера)

[5. Изменение пользовательских настроек postgresql.conf [24](#изменение-пользовательских-настроек-postgresql.conf)](#изменение-пользовательских-настроек-postgresql.conf)

[6. Примеры команд запуска контейнера [26](#примеры-команд-запуска-контейнера)](#примеры-команд-запуска-контейнера)

[7. Использование утилиты psql [27](#использование-утилиты-psql)](#использование-утилиты-psql)

[8. Поведение контейнера в особых случаях [29](#поведение-контейнера-в-особых-случаях)](#поведение-контейнера-в-особых-случаях)

[8.1. Изменение настроек после запуска контейнера [29](#изменение-настроек-после-запуска-контейнера)](#изменение-настроек-после-запуска-контейнера)

[Приложение 1 [30](#приложение-1)](#приложение-1)

[Приложение 2 [32](#приложение-2)](#приложение-2)

[Термины и определения [34](#термины-и-определения)](#термины-и-определения)

[Перечень сокращений [35](#перечень-сокращений)](#перечень-сокращений)

# Требования к ПО

Контейнер устанавливается на ЭВМ под управлением ОС, указанных в таблице Таблица 1.1.

Таблица . – Перечень поддерживаемых ОС

| **№** | **Наименование ОС** | **Серверная часть** | **Клиентская часть** | **Docker (ver.)** | **Сертификат ФСТЭК** |  |
|:--:|:---|:--:|:--:|:--:|:--:|:--:|
|  |  |  |  |  | **№ серт.** | **Дата выдачи** |
| 1 | Astra Linux 1.7 Special Edition Смоленск (x86-64) | Х | Х | 20.10.2 | 2557 | 30.01.2012 |
| 2 | Astra Linux 1.8 (x86-64) | Х | Х |  |  |  |
| 3 | Альт 8 СП | Х | Х | 20.10.11 | 3866 | 10.08.2018 |
| 4 | Альт 10 СП | Х | Х | 20.10.11 | 3866 | 10.08.2018 |
| 5 | ОСНОВА2 | Х | Х | 20.10.5 | 4381 | 31.03.2021 |
| 6 | РЕД ОС 7.3 Муром | Х | Х | 20.10.1 | 4060 | 12.01.2019 |

Для использования контейнера необходимо установить docker-ce версии, указанной в таблице 1.1. Инструкцию по установке ПО для необходимой ОС можно найти на сайтах:

- для Astra Linux — <https://wiki.astralinux.ru/pages/viewpage.action?pageId=158601444>,

- для РЕД ОС — <https://redos.red-soft.ru/base/arm/arm-other/docker-install/>,

- для Альт — <https://www.altlinux.org/Docker>,

- для остальных ОС, представленных в таблице Таблица 1.1 —<https://docs.docker.com/engine/install/>.

# Комплект контейнера

Контейнер СУБД «Jatoba» распространяется в виде архива, содержащего файлы, указанные в таблице 2.1.

| **Название документа** | **Описание** |
|----|----|
| jatobaХ_Х.Х.Х-ХХХХ-df1.3.1-astralinux1.7.tar[^1] | образ контейнера |
| .env | файл, содержащий переменные окружения для контейнера (см. подраздел 3.4) |
| changelog.md | текстовый файл, описывающий изменения ПО |
| postgresql.template.conf | конфигурация БД, использующаяся контейнером по умолчанию (см. раздел 5) |
| README.md | краткая инструкция к контейнеру |
| log.sh | скрипт, использующийся для вывода журнала событий контейнера (см. раздел 4.6) |
| remove.sh | скрипт, использующийся для удаления контейнера (см. подраздел 4.7) |
| restart.sh | cкрипт, использующийся для перезапуска контейнера (см. подраздел 4.5) |
| run.sh | скрипт, использующийся для запуска нового контейнера (см. п. 3.4.2) |
| setup.sh | скрипт, использующийся для импорта образа контейнера (см. подраздел 3.3) |
| start.sh | скрипт, использующийся для запуска существующего контейнера (см. подраздел 4.4) |
| stop.sh | скрипт, использующийся для остановки контейнера (см. подраздел 4.3) |

Таблица . – Описание файлов комплекта контейнера

В образе контейнера содержится БД «Jatoba» и компоненты к ней (см. таблицу

Таблица 2.2). Настройка компонентов описана отдельно в соответствующих документах.

Установка дополнительных компонентов описаны в приложениях (Oracle_FWD – в Приложение 1 и PLsPgSQL – в Приложение 2).

Таблица . – Состав образа контейнера

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 21%" />
<col style="width: 5%" />
<col style="width: 4%" />
<col style="width: 5%" />
<col style="width: 4%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 41%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"></th>
<th style="text-align: center;"><strong>Наименование</strong></th>
<th colspan="2" style="text-align: center;"><strong>J4</strong></th>
<th colspan="2" style="text-align: center;"><strong>J5</strong></th>
<th colspan="2" style="text-align: center;"><strong>J6</strong></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
<tr>
<th style="text-align: center;"><strong>№</strong></th>
<th style="text-align: center;"></th>
<th style="text-align: center;">комм</th>
<th style="text-align: center;">серт</th>
<th style="text-align: center;">комм</th>
<th style="text-align: center;">серт</th>
<th style="text-align: center;">комм</th>
<th style="text-align: center;">серт</th>
<th style="text-align: center;"></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">1</td>
<td>ядро СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td></td>
</tr>
<tr>
<td style="text-align: center;">1.1</td>
<td>server</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>Сервер СУБД</td>
</tr>
<tr>
<td style="text-align: center;">1.2</td>
<td>client</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>Клиентские утилиты для СУБД</td>
</tr>
<tr>
<td style="text-align: center;">1.3</td>
<td>contrib</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>Дополнительные расширения для сервера СУБД</td>
</tr>
<tr>
<td style="text-align: center;">1.4</td>
<td>docs</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>Документация СУБД</td>
</tr>
<tr>
<td style="text-align: center;">1.5</td>
<td>libs</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>Библиотеки для клиентских утилит СУБД</td>
</tr>
<tr>
<td style="text-align: center;">1.6</td>
<td>plperl</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>Расширение для реализации хранимых процедур на языке Perl</td>
</tr>
<tr>
<td style="text-align: center;">1.7</td>
<td>plpython</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>Расширение для реализации хранимых процедур на языке Python 2</td>
</tr>
<tr>
<td style="text-align: center;">1.8</td>
<td>plpython3</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>Расширение для реализации хранимых процедур на языке Python 3</td>
</tr>
<tr>
<td style="text-align: center;">2</td>
<td>jaDog</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>jaDog</td>
</tr>
<tr>
<td style="text-align: center;">3</td>
<td>jaPooler</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>jaPooler</td>
</tr>
<tr>
<td style="text-align: center;">4</td>
<td>fasttrun</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент совместимости с 1С</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td>fulleq</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент совместимости с 1С</td>
</tr>
<tr>
<td style="text-align: center;">6</td>
<td>mchar</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент совместимости с 1С</td>
</tr>
<tr>
<td style="text-align: center;">7</td>
<td>online_analyze</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент совместимости с 1С</td>
</tr>
<tr>
<td style="text-align: center;">8</td>
<td>plantuner</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент совместимости с 1С</td>
</tr>
<tr>
<td style="text-align: center;">9</td>
<td>Oracle_FDW (Foreign data wrapper for oracle)</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td>компонент доступа к данным СУБД Oracle</td>
</tr>
<tr>
<td style="text-align: center;">10</td>
<td><p>OraFCE</p>
<p>(Oracle function compatibility extension)</p></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент совместимости с СУБД Oracle</td>
</tr>
<tr>
<td style="text-align: center;">11</td>
<td>pg_Variables</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент совместимости с системой глобальных переменных СУБД Oracle</td>
</tr>
<tr>
<td style="text-align: center;">12</td>
<td>JDV (Jatoba data vault)</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент контроля субъектов доступа</td>
</tr>
<tr>
<td style="text-align: center;">13</td>
<td>pgSQL-HTTP</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент формирования HTTP/HTTPS запросов из СУБД</td>
</tr>
<tr>
<td style="text-align: center;">14</td>
<td>PlsPgSQL</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>компонент обфускации кода PL/pgSQL</td>
</tr>
<tr>
<td style="text-align: center;">15</td>
<td>PostGIS</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>компонент работы с географическими данными</td>
</tr>
<tr>
<td style="text-align: center;">16</td>
<td><p>JCS</p>
<p>(Jatoba crypto access storage)</p></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент сокрытия информации в файлах данных СУБД</td>
</tr>
<tr>
<td style="text-align: center;">17</td>
<td>SQL_Firewall</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент выявления и предотвращения исполнения нетипичных SQL-запросов</td>
</tr>
<tr>
<td style="text-align: center;">18</td>
<td>pg_Cryogen</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент компрессии данных СУБД</td>
</tr>
<tr>
<td style="text-align: center;">19</td>
<td>pg_Task</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент планирования заданий СУБД</td>
</tr>
<tr>
<td style="text-align: center;">20</td>
<td>pgAudit</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент расширенного журналирования событий СУБД</td>
</tr>
<tr>
<td style="text-align: center;">21</td>
<td>ja_Log</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>компонент централизованного сбора записей событий СУБД</td>
</tr>
<tr>
<td style="text-align: center;">22</td>
<td>pgBadger</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>компонент формирования отчетов по журналам СУБД</td>
</tr>
<tr>
<td style="text-align: center;">23</td>
<td>SecurityProfile</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент управления парольными политиками пользователей СУБД</td>
</tr>
<tr>
<td style="text-align: center;">24</td>
<td>pg_ProBackup</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>компонент расширенного резервного копирования</td>
</tr>
<tr>
<td style="text-align: center;">25</td>
<td>PTrack</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>компонент расширенного резервного копирования</td>
</tr>
<tr>
<td style="text-align: center;">26</td>
<td>ja_CSum</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент контроля целостности</td>
</tr>
<tr>
<td style="text-align: center;">27</td>
<td>ja_Sync_Ldap</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент синхронизации учетных записей с MS Active Directory</td>
</tr>
<tr>
<td style="text-align: center;">28</td>
<td>pg_Profile</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент формирования отчетов производительности СУБД</td>
</tr>
<tr>
<td style="text-align: center;">29</td>
<td><p>JDS</p>
<p>(Jatoba data safe)</p></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>компонент пользовательского веб-интерфейса для администраторов</td>
</tr>
<tr>
<td style="text-align: center;">30</td>
<td>ja_Plan_Manager</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td>компонент создания планов запросов в базах данных (БД), их оптимизации и экспорта в БД</td>
</tr>
<tr>
<td style="text-align: center;">31</td>
<td>ja_Hipe_Cluster</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент высокопроизводительного кластера</td>
</tr>
<tr>
<td style="text-align: center;">32</td>
<td>TDS_FDW</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент поддержки платформы Microsoft SQL Server</td>
</tr>
<tr>
<td style="text-align: center;">33</td>
<td>pg-hint-plan</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент корректировки запросов</td>
</tr>
<tr>
<td style="text-align: center;">34</td>
<td>pg-store-plans</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td>компонент контроля выполненных планов запросов</td>
</tr>
<tr>
<td style="text-align: center;">35</td>
<td>node_exporter</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>компонент сбора аппаратных и программных показателей работы GNU/Linux</td>
</tr>
<tr>
<td style="text-align: center;">36</td>
<td>postgres_exporter</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>компонент сбора метрик СУБД</td>
</tr>
<tr>
<td style="text-align: center;">37</td>
<td>sql_exporter</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>компонент сбора расширенных метрик СУБД</td>
</tr>
<tr>
<td style="text-align: center;">38</td>
<td>pg_ulid</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td>компонент поддержки лексографического идентификатора</td>
</tr>
</tbody>
</table>

# Установка контейнера

Установка контейнера состоит из следующих шагов:

- Обновление ОС (п. 3.1);

- Установка платформы docker в ОС (п. 3.2);

- Импорт образа (п. 3.3);

- Установка разрешений на исполнения всех исполняемых файлов контейнере;

- Настройка переменных окружения (п. 3.4)

<!-- -->

- Запуск скрипта логирования контейнера log (п. 4.6);

- Проверка созданного контейнера (п. 4.2).

## Обновление ОС

Обновление ОС выполняется синхронизацией пакетов и обновлением их командами, описанными ниже.

sudo apt update

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image3.png" style="width:7.00146in;height:2.41739in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-03-04 23-21-06.png" />
<figcaption><p>Рисунок . – Синхронизация пакетов</p></figcaption>
</figure>

Команда «apt update» используется для синхронизации списков пакетов в вашей системе.

Она извлекает последние списки пакетов PPA и репозиториев в вашей системе и обеспечивает их актуальность.

Команда «apt upgrade» обновляет пакеты до последних версий и устанавливает новые пакеты, если они требуются в качестве зависимостей.

Он не удаляет никакие пакеты, а если какие-либо из них предназначены для удаления, он их пропускает.

sudo apt upgrade 

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image4.png" style="width:7.08384in;height:2.90435in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-03-04 23-22-34.png" />
<figcaption><p>Рисунок . – Обновление пакетов ОС</p></figcaption>
</figure>

## Установка платформы docker в ОС

Платформа докера должна устанавливаться версии 20.10.12 или выше.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image1.png" style="width:0.25in;height:0.25in" /> | Подробная инструкция по установке находится на сайте разработчика по адресу: <https://docs.docker.com/engine/install/> |
|----|----|

Альтернативный вариант (можно использовать для OS (DEB), которых нет в списке на сайте):

sudo apt install docker.io

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image5.png" style="width:7.1913in;height:1.22245in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-03-04 23-23-52.png" />
<figcaption><p>Рисунок . - Установка платформы docker в ОС</p></figcaption>
</figure>

Версия установленной платформы docker проверяется командой:

docker –v

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image6.png" style="width:7.18219in;height:1.144in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-03-04 23-26-49.png" />
<figcaption><p>Рисунок . – Проверка версии установленной платформы docker</p></figcaption>
</figure>

## Импорт образа

Образ поставляется в виде архива, который необходимо импортировать в локальный набор образов. Для импорта образа надо исполнить скрипт setup.sh, который входит в комплект.

Необходимо дать скрипту право на выполнение командой:

chmod +x setup.sh

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image7.png" style="width:7.04043in;height:3.97391in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-03-04 22-40-36.png" />
<figcaption><p>Рисунок . – Выполнение команды chmod</p></figcaption>
</figure>

Запустить установку образа:

./setup.sh

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image8.png" style="width:7.15634in;height:1.912in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-03-05 03-07-03.png" />
<figcaption><p>Рисунок . – Выполнение скрипта setup.sh</p></figcaption>
</figure>

После выполнения скрипта образ будет загружен и готов для создания контейнеров.

Проверка наличия образа выполняется командой:

sudo docker images

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image9.png" style="width:7.15075in;height:1.22361in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-03-05 04-28-03.png" />
<figcaption><p>Рисунок . – Вывод данных об образе</p></figcaption>
</figure>

## Переменные окружения

Переменные окружения, указанные в таблице Таблица 3.1, контейнер использует при инициализации БД.

Чтобы задать переменные окружения, необходимо указать значения параметров при запуске контейнера (docker run) в виде параметров (–e \<параметр\>) или в виде файла (--env-file .env). Шаблон файла .env есть в комплекте контейнера.

| **Название** | **Значение параметра** | **Необходимо указывать** | **Описание** |
|:--:|:--:|:--:|:--:|
| **\# Сommon** |  |  |  |
| JATOBA_VERSION | \<ver.image\> |  | Версия контейнера |
| PG_MAJOR | \<ver\> |  | Мажорная версия СУБД |
| IMAGE_NAME | jatoba |  | Имя образа |
| CONTAINER_NAME | jatobadb |  | Имя контейнера |
| **\# Need absolute path to file** |  |  |  |
| POSTGRESCONF_PATH | /path/to/postgresql.template.conf |  | Путь к шаблону конфигурационного файла |
| **\# For external postgres.conf** |  |  |  |
| PGCFGFILE_TIMEZONE | Europe/Moscow | Х | Временная зона |
| **\# Volumes** |  |  |  |
| POSTGRESQL_VOLUME_DATA | postgresql-volume-data |  | Том с данными |
| POSTGRESQL_VOLUME_EXTENSIONS | postgresql-volume-extensions |  | Том с расширениям |
| **\# Account data** |  |  |  |
| POSTGRES_USER | postgres |  | Имя пользователя сервера БД. По умолчанию: postgres |
| POSTGRES_PASSWORD | mysecretpassword | Х | Пользовательский пароль для подключения к системной БД |

Таблица . – Переменные окружения

### Запуск нового контейнера

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image2.png" style="width:0.25139in;height:0.25139in" /> | Изменить версию СУБД при использовании текущей версии контейнера невозможно. |
|----|----|

В данном разделе описаны действия, которые необходимо сделать администратору, чтобы контейнер корректно запустился и инициализировал БД.

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image10.emf" />
<figcaption><p>Рисунок . – Проверки, которые контейнер делает после запуска</p></figcaption>
</figure>

На рисунке Рисунок 3.8 отображен процесс запуска контейнера: какие проверки происходят после запуска, и в каких случаях могут происходить ошибки. На этой схеме видно, что при запуске новый контейнер может принимать часть данных от старого контейнера, такую как каталог данных БД (см. подраздел 4.9).

В качестве шаблона конфигурационного файла контейнер использует файл «postgresql.template.conf», содержащийся в комплекте. Однако пользователь может переопределить этот файл при запуске контейнера (см. подраздел 4.9).

Запустить контейнер можно с помощью команды «docker run» (см. подраздел 4.8) или с помощью скрипта run.sh (см. подраздел 3.4.2).

### Запуск контейнера

Для запуска контейнера СУБД «Jatoba» необходимо выполнить последовательность действий, приведенную ниже.

1.  Проверить параметры в файле .env, находящийся в текущем каталоге:

\# cd /home/admin1/Downloads/container/

\# nano .env

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image11.png" style="width:6.70408in;height:1.50435in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-03-05 07-26-45.png" />

Рисунок . – Файл «.env»

Сохранить внесенные изменения. Перемещать, переименовывать файл .env не требуется.

2.  Перейти в каталог с системой. Если ранее скриптам не был дан доступ на выполнение, необходимо выполнить команду:

chmod +x \*.sh

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image12.png" style="width:7.13913in;height:3.69424in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-03-05 06-55-41.png" />
<figcaption><p>Рисунок . – Содержимое каталога</p></figcaption>
</figure>

3.  Далее необходимо запустить контейнер и одновременно вывести журнал событий контейнера:

./run.sh; ./log.sh

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image13.png" style="width:6.70139in;height:2.82609in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-03-06 03-17-09.png" />
<figcaption><p>Рисунок . – Журнал событий контейнера после запуска скриптов «./run.sh; ./log.sh»</p></figcaption>
</figure>

# Основные операции с контейнером

В комплекте контейнера расположены скрипты, упрощающие работу с контейнерами. Скрипты должны находиться в одном каталоге с файлом .env. Имя контейнера, с которым работают скрипты, указывается в .env параметром CONTAINER_NAME.

.env – файл, содержащий набор переменных окружения. Переменные окружения описаны в подразделе 3.4.

Описание скриптов:

- remove.sh – удаляет контейнер (см. подраздел 4.7);

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image2.png" style="width:0.25139in;height:0.25139in" /> | Если каталог data не был примонтирован к хостовому серверу при инициализации контейнера, то при использовании скрипта remove.sh данные удалятся. Если каталог был примонтирован, то данные при запуске remove.sh сохранятся. |
|----|----|

- stop.sh – останавливает контейнер (см. подраздел 4.3);

- run.sh – запускает новый контейнер (см. п. 3.4.2);

- start.sh – запускает остановленный (но не удаленный) контейнер (см. п .4.4);

- restart.sh - используется для перезапуска контейнера (см. подраздел 4.5);

- stop.sh - используется для остановки контейнера (см. подраздел 4.3);

- log.sh – запускает просмотр журнала событий БД (см. подраздел 4.6);

- remove.sh – удаляет контейнер (см. подраздел 4.7);

Чтобы выполнить скрипт, надо дать ему право на выполнение:

chmod +x \<название скрипта\>.sh

И запустить:

./\<название скрипта\>.sh

## Проверка статуса (docker ps -a)

Проверка статуса контейнера выполняется из терминала ОС командой:

\# docker ps -a

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image14.png" style="width:7.2987in;height:0.67622in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-11 04-39-37.png" />
<figcaption><p>Рисунок . – Вывод статуса контейнера</p></figcaption>
</figure>

В выводе статуса будут отражены столбцы:

- CONTAINER ID – идентификатор контейнера;

- IMAGE –имя образа, из которого был поднят контейнер;

- COMMAND - команда, которая выполнилась при старте контейнера

- CREATED – время с момента создания контейнера;

- STATUS – дни работы контейнера (текущее состояние);

- PORTS – используемые порты и адресация сети (проброс портов);

- NAMES – имя контейнера.

## Проверка наличие созданных томов (volume list)

Проверка созданных томов выполняется из терминала ОС командой:

\# docker volume list

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image15.png" style="width:7.125in;height:1.72508in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-11 07-33-30.png" />
<figcaption><p>Рисунок . – Вывод команды проверки созданных томов</p></figcaption>
</figure>

## Остановка контейнера (stop.sh)

Остановка контейнера выполняется скриптом «stop.sh», расположенным в домашней директории контейнера.

Скрипт «stop.sh» запускается командой из терминала ОС:

./stop.sh 

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image16.png" style="width:7.14921in;height:1.39904in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-11 08-04-36.png" />
<figcaption><p>Рисунок . – Команда остановки контейнера</p></figcaption>
</figure>

При проверке статуса контейнера в столбце «Status» значение «Exited» с указанием истекшего времени с момента остановки контейнера.

docker ps -a 

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image17.png" style="width:7.24819in;height:1.44215in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-11 08-06-47.png" />
<figcaption><p>Рисунок . – Вывод статуса остановленного контейнера</p></figcaption>
</figure>

## Запуск остановленного контейнера (start.sh)

Запуск контейнера выполняется скриптом «start.sh», командой из корневого каталога контейнера в терминале ОС:

./start.sh

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image18.png" style="width:7.07919in;height:1.424in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-11 08-27-16.png" />
<figcaption><p>Рисунок . – Команда запуска контейнера</p></figcaption>
</figure>

## Перезапуск контейнера (restart.sh)

Перезапуск контейнера выполняется скриптом «restart.sh», командой из корневого каталога контейнера в терминале ОС:

./restart.sh

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image19.png" style="width:7.096in;height:1.456in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-12 01-21-44.png" />
<figcaption><p>Рисунок . – Выполнение команды перезапуска контейнера</p></figcaption>
</figure>

## Логирование контейнера (log.sh)

Скрипт log.sh может запускаться самостоятельно, либо совместно со скриптами:

- run.sh (п. 3.4.2);

./run.sh; ./log.sh

- start.sh (п. 4.4).

./start.sh; ./log.sh

При запущенном контейнере скрипт «log.sh» выведет журнал событий контейнера:

./log.sh 

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image20.png" style="width:7.04423in;height:1.73044in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-12 01-47-39.png" />
<figcaption><p>Рисунок . – Вывод скрипта логирования</p></figcaption>
</figure>

## Удаление контейнера (remove.sh)

Удаление контейнера должно выполняться по следующим шагам:

- Выполнить скрипт удаления контейнера:

./remove.sh

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image21.png" style="width:7.21515in;height:1.81314in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-12 04-41-59.png" />
<figcaption><p>Рисунок . – Удаление контейнера</p></figcaption>
</figure>

- Удалить том с данными:

docker volume rm postgresql-volume-data

- Удалить том с расширениями СУБД:

docker volume rm postgresql-volume-extensions

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image22.png" style="width:7.02987in;height:1.69476in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-12 07-24-20.png" />
<figcaption><p>Рисунок . – Команды удаления томов с данными и расширениями СУБД</p></figcaption>
</figure>

- Проверить отсутствие контейнера в списке:

docker ps –a

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image23.png" style="width:7.15973in;height:1.9434in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-12 04-44-11.png" />
<figcaption><p>Рисунок . – Вывод статуса контейнера</p></figcaption>
</figure>

## Запуск контейнера через docker run

Для запуска контейнера СУБД «Jatoba» необходимо выполнить команду:

docker run \<параметры\> jatoba\*:\*.\*.\*-\*\*\*\*-df1.\*.\*

Примеры команд запуска контейнера есть в разделе 6.

Параметры docker run для запуска контейнера СУБД «Jatoba»:

- -i – параметр, который делает возможным взаимодействие с терминалом внутри контейнера;

- -t – параметр, который предоставляет доступ к терминалу внутри контейнера;

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image1.png" style="width:0.25in;height:0.25in" /> | Параметры –t и –i обычно используются в паре |
|----|----|

- -d – параметр для запуска контейнера в фоновом режиме. При запуске контейнера с использованием этого параметра контейнер не остановится при закрытии консоли;

- -v \<название созданного docker-volume\>:\<путь до каталога внутри контейнера\> – параметр, позволяющий сохранять каталог контейнера на хостовом сервере. При использовании этого параметра данные контейнера сохранятся при его удалении (см. подраздел 4.9);

- -e \<параметр\>=\<значение параметра\> – параметр, который задает переменную окружения для контейнера;

- --env-file \<путь к файлу\> – параметр, который задает путь к файлу, содержащему переменные окружения для контейнера;

- -p \<внешний порт\>:5432 – параметр, который сопоставляет порт внутри контейнера с портом на хостовом сервере — таким образом, к БД в контейнере можно обратиться через указанный порт на хостовом сервере;

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image1.png" style="width:0.25in;height:0.25in" /> | Если на хостовом сервере уже запущен процесс, использующий порт 5432, можно поменять порт для контейнера, например, на 54321 (-p 54321:5432) |
|----|----|

- --name – имя запускаемого контейнера.

При успешном создании контейнера появится его идентификатор.

По имени или идентификатору контейнера можно получить журнал событий и убедиться, что сервер БД корректно запустился. Команда для просмотра журнала событий:

docker logs \<имя контейнера\>

Либо для отслеживания потока вывода журнала событий:

docker logs -f \<имя контейнера\>

## Сохранение данных контейнера

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image1.png" style="width:0.25in;height:0.25in" /> | При запуске контейнера с использованием скрипта run.sh сохранять данные не требуется, это делает скрипт. |
|----|----|

Перед запуском нового контейнера рекомендуется создать docker-volume для каталога данных сервера БД. Иначе в случае удаления контейнера эти данные будут потеряны.

Чтобы создать docker-volume для сохранения каталога данных сервера БД (каталога /var/lib/jatoba/\<ver\>/data), выполнить команду:

docker volume create postgresql-volume-data

Для использования этого docker-volume в контейнере, при запуске контейнера с помощью команды docker run (см. подраздел 4.8) необходимо добавить параметр -v postgresql-volume-data:/var/lib/jatoba/\<ver\>/data.

# Изменение пользовательских настроек postgresql.conf

В комплекте контейнера есть файл конфигурации БД (postgresql.template.conf), который используется в качестве шаблона при настройке БД. Но его можно переопределить через монтирование нового файла конфигурации на хостовой сервер или через перенос файла в контейнер:

- Монтирование файла. При использовании этого способа файл конфигурации сохранится на хостовом сервере в случае удаления контейнера.

> Для этого при запуске контейнера (docker run) указать параметр:
>
> -v \<путь до postgresql.conf на хостовом сервере\>:/settings/postgresql.conf

- Перенос файла. При использовании этого способа файл конфигурации не сохранится при удалении контейнера.

> В каталог /settings, находящийся внутри контейнера, поместить свой файл конфигурации с именем postgresql.conf и перезапустить контейнер. Это можно сделать с помощью команды:
>
> docker cp \<путь до postgresql.conf на хостовом сервере\> \<имя контейнера\>:/settings
>
> Затем выполнить команду:
>
> docker restart \<имя контейнера\>

**Шаблонизация параметров**

В пользовательском файле настроек поддерживается шаблонизация параметров. Например, если при создании контейнера задать переменную окружения PGCFGFILE_TIMEZONE, то ее можно указать в пользовательском файле настроек: log_timezone= {{PGCFGFILE_TIMEZONE}}.

Если в файле конфигурации было шаблонизировано значение, но соответствующей переменной окружения не существует, контейнер будет выдавать ошибку. В таком случае необходимо или указать значение этого параметра в качестве переменной окружения при запуске, или изменить файл конфигурации, чтобы в нем было явно указано значение параметра.

# Примеры команд запуска контейнера

1)  С созданием docker-volume.

Выполнить команду создания docker-volume для сохранения каталога данных сервера БД:

> docker volume create postgresql-volume-data
>
> Выполнить команду запуска контейнера:
>
> docker run -it -d \\
>
> -v postgresql-volume-data:/var/lib/jatoba/4/data \\
>
> -e POSTGRES_PASSWORD=mysecretpassword \\
>
> --name jatobadb jatoba4:4.8.2-1124-df1.2.1

В данном примере в интерактивном режиме создается контейнер с примонтированными docker-volume для каталога данных БД. Доступ к БД есть с хостового сервера по порту 5432. Имя контейнера – jatobadb.

2)  Без создания docker-volume.

Для запуска контейнера выполнить команду:

docker run -it -d \\

-e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_USER=admin \\

-p 5432:5432 --name jatobadb jatoba4:4.8.2-1124-df1.2.1

В данном примере создается контейнер jatobadb. Доступ к БД у пользователя admin, пароль для подключения не используется. После удаления контейнера данные не сохранятся, потому что docker-volume не были примонтированы  
(см. подраздел 4.9).

# Использование утилиты psql

psql – это терминальный интерфейс, использующийся для работы с СУБД «Jatoba». Он позволяет вводить запросы в интерактивном режиме, отправлять их в СУБД и просматривать результат выполнения запросов.

Для подключения к СУБД «Jatoba» с сервера, на котором развернут и запущен контейнер, можно использовать команду:

docker exec -it \<название контейнера\> psql -U \<имя пользователя БД\>

Здесь:

- docker exec -it – команда запуска процесса в контейнере, -it обозначает интерактивный режим выполнения (позволяет использовать оболочку командной строки внутри контейнера и выполнять из-под нее команды);

- \<название контейнера\> – имя контейнера СУБД «Jatoba», указанное при запуске;

- psql – утилита, запускаемая внутри контейнера;

- -U \<имя пользователя БД\> – параметр утилиты psql, который обозначает, что psql будет подключаться к СУБД «Jatoba» под указанным пользователем БД. Необходимо использовать имя, указанное в параметре POSTGRES_USER файла .env.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image1.png" style="width:0.25in;height:0.25in" /> | По умолчанию, если в файле .env не был указан POSTGRES_USER, при инициализации создается пользователь postgres. |
|----|----|

Пример использования команды:

docker exec -it jatobadb psql -U postgres

В данном примере подключение идет к контейнеру с названием jatobadb, в нем в интерактивном режиме запускается утилита psql под пользователем postgres.

<figure>
<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/container/media/image24.png" style="width:6.99595in;height:1.584in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-12 03-03-58.png" />
<figcaption><p>Рисунок . - Запуск утилиты psql в контейнере</p></figcaption>
</figure>

# Поведение контейнера в особых случаях

## Изменение настроек после запуска контейнера

Настройки подключения к БД, такие как пароль пользователя и метод аутентификации, указываются переменными окружения при первом запуске БД (см. подраздел 3.4). Они используются контейнером при инициализации БД, после чего эти настройки можно изменить двумя способами:

- Удалить контейнер и создать его заново с использованием новых переменных окружения. При этом необходимо использовать новый docker-volume для каталога данных, потому что при использовании старого docker-volume БД не будет проинициализирована заново;

- Вручную изменить настройки в запущенном контейнере, например:

<!-- -->

- Для смены пароля пользователя БД выполнить команду:

> docker exec -it \<имя контейнера\> psql -U \<имя пользователя\> -c "ALTER USER \<имя пользователя\> PASSWORD '\<новый пароль\>';"

- Для смены метода аутентификации необходимо отредактировать файл pg_hba.conf. Если для контейнера был создан и примонтирован docker-volume для каталога данных, отредактировать файл можно таким образом:

  1.  На хостовом сервере выполнить команду:

> docker inspect postgresql-volume-data

2.  Открыть файл pg_hba.conf: он находится в каталоге, указанном в графе «Mountpoint».

3.  Изменить настройки в файле pg_hba.conf.

4.  Перезапустить контейнер:

> docker restart \<имя контейнера\>

# Приложение 1

Установка компонента Oracle_FDW

Чтобы установить компонент Oracle_FDW, необходимо:

1.  Скачать внешний rpm-пакет Oracle Instance Client версии 11.1. Скачать его возможно по адресу: <https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html>

2.  Скопировать файл пакета в контейнер:

docker cp \<oracle instance client\>.rpm \<имя контейнера\>:/\<oracle instance client\>.rpm

3.  Перейти в каталог c дистрибутивом astralinux17smolensk.

4.  Скопировать установщик компонента на контейнер:

docker cp jatoba4-oracle-fdw_4.8.2-1124_amd64.deb \<имя контейнера\>:/jatoba4-oracle-fdw_4.8.2-1124_amd64file.deb

5.  Зайти в bash оболочку контейнера:

docker exec -it \<имя контейнера\> /bin/bash

6.  Прописать репозиторий:

echo "deb https://dl.astralinux.ru/astra/stable/1.7_x86-64/repository-main/ 1.7_x86-64 main contrib non-free" \> /etc/apt/source.list

7.  Обновить списки пакетов:

apt update

8.  Установить дополнительные библиотеки:

apt install alien libaio1

9.  Установить Oracle Instance Client:

alien -i \<oracle instance client\>.rpm

10. Выполнить конфигурирование установленной библиотеки:

echo /usr/lib/oracle/11.2/client64/lib \> /etc/ld.so.conf.d/oracle-instantclient.conf

ldconfig

11. Установить пакет Oracle_FDW:

dpkg -i jatoba4-oracle-fdw_4.8.2-1124_amd64file.deb

> Далее необходимо настроить компонент в соответствии с инструкцией к компоненту.

# Приложение 2

Установка компонента PLsPgSQL

Чтобы установить компонент PLsPgSQL, необходимо:

1.  Скачать библиотеку lsb-cprocsp.

> lsb-cprocsp – криптопровайдер «КриптоПро CSP» версии 5.0. Данный пакет распространяется в виде самостоятельного DEB/RPM дистрибутива. Для установки необходимо обратиться к документации на официальном сайте разработчика КриптоПро – для доступа требуется зарегистрированный пользователь по правилам сайта <https://cryptopro.ru/user>);

2.  Создать каталог cryptopro в контейнере:

sudo docker exec -it \<имя контейнера\> mkdir cryptopro

3.  Скопировать файлы библиотеки в каталог cryptopro в контейнере:

docker cp \<имя каталога с файлами КриптоПро\>/. \<имя контейнера\>:/cryptopro

4.  Дать скрипту install.sh право на исполнение:

sudo docker exec -it \<имя контейнера\> chmod +x cryptopro/install.sh

5.  Установить библиотеку КриптоПро:

sudo docker exec -it \<имя контейнера\> cryptopro/install.sh

6.  Перейти в каталог c дистрибутивом astralinux17smolensk.

7.  Скопировать пакет gis-cryptoplatform17 на контейнер:

docker cp gis-cryptoplatform17_1.7.3-4_amd64.deb \<имя контейнера\>:/gis-cryptoplatform17_1.7.3-4_amd64.deb

8.  Скопировать пакет PLsPgSQL на контейнер:

docker cp jatoba4-plspgsql_4.8.2-1124_amd64.deb \<имя контейнера\>:/jatoba4-plspgsql_4.8.2-1124_amd64.deb

9.  Установить библиотеку gis-cryptoplatform17:

docker exec -it \<имя контейнера\> dpkg -i gis-cryptoplatform17_1.7.3-4_amd64.deb

10. Установить компонент PLsPgSQL:

docker exec -it \<имя контейнера\> dpkg -i jatoba4-plspgsql_4.8.2-1124_amd64.deb

> Далее необходимо настроить компонент в соответствии с инструкцией к компоненту.

# Термины и определения

**docker-volume** – это механизм сохранения данных, сгенерированных и используемых контейнерами Docker, которые остаются после работы и удаления контейнеров, если были использованы в команде запуска контейнера через аргументы -v или --volume.

**Хостовой сервер** — сервер, на который устанавливается образ и запускается контейнер СУБД «Jatoba».

**Docker -** это платформа для автоматизации развертывания и управления приложениями в средах с различными операционными системами. Он позволяет упаковывать приложения со всем их зависимостями в легкие, повторно используемые модули-контейнеры. Docker ускоряет процесс разработки и доставки приложений, а также упрощает управление инфраструктурой и контейнеризацию приложений.**  
**

# Перечень сокращений

| ОС   | –   | Операционная система             |
|------|-----|----------------------------------|
| БД   | –   | База данных                      |
| ПО   | –   | Программное обеспечение          |
| СУБД | –   | Система управления базами данных |
| ЭВМ  | –   | Электронно-вычислительная машина |

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
<th colspan="10" style="text-align: center;">Лист регистрации изменений</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2" style="text-align: center;">Изм.</td>
<td colspan="4" style="text-align: center;">Номера листов (страниц)</td>
<td rowspan="2" style="text-align: center;">Всего<br />
листов (страниц)<br />
в документе</td>
<td rowspan="2" style="text-align: center;">Номер документа</td>
<td rowspan="2" style="text-align: center;">Входящий номер сопроводительного документа и дата</td>
<td rowspan="2" style="text-align: center;">Подпись</td>
<td rowspan="2" style="text-align: center;">Дата</td>
</tr>
<tr>
<td style="text-align: center;">измененных</td>
<td style="text-align: center;">замененных</td>
<td style="text-align: center;">новых</td>
<td style="text-align: center;">аннулированных</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

[^1]: версия уточняется при поставке
