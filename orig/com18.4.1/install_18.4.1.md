<table>
<colgroup>
<col style="width: 41%" />
<col style="width: 58%" />
</colgroup>
<thead>
<tr>
<th>
<p>Подп. и дата</p>
</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Инв. № дубл.</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Взам. инв. №</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Подп. и дата</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Инв. № подл.</p>
</td>
<td></td>
</tr>
</tbody>
</table>

## ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

Данный документ представляет собой руководство по установке защищенной системы управления базами данных «Jatoba» (далее по тексту – СУБД, СУБД «Jatoba»).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Например, СУБД «Jatoba» версии 5.x по умолчанию устанавливается в директорию:

- ОС Windows – «C:\Program Files\GIS\Jatoba\5\bin»;

- ОС Linux – «/usr/jatoba-5/bin».

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Важная информация</strong> – указания, требующие особого внимания</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Дополнительная информация</strong> – указания, позволяющие упростить работу с изделием</p>
</td>
</tr>
<tr>
<td>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p>
</td>
</tr>
</tbody>
</table>

## СОДЕРЖАНИЕ

## 

- [](#)
- [СОДЕРЖАНИЕ](#содержание)
- [](#-1)
- [ОБЩИЕ СВЕДЕНИЯ О СУБД «JATOBA»](#общие-сведения-о-субд-jatoba)
  - [Назначение СУБД «Jatoba»](#назначение-субд-jatoba)
  - [Требования к среде функционирования СУБД «Jatoba»](#требования-к-среде-функционирования-субд-jatoba)
- [КОМПЛЕКТЫ ПОСТАВКИ И СОСТАВ КОМПОНЕТ СУБД «JATOBA»](#комплекты-поставки-и-состав-компонет-субд-jatoba)
- [УСТАНОВКА СУБД «JATOBA» НА ОС СЕМЕЙСТВА GNU/LINUX](#установка-субд-jatoba-на-ос-семейства-gnulinux)
  - [Инсталлятор СУБД «Jatoba» для ОС семейства GNU/Linux](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux)
  - [](#-2)
  - [Установка СУБД инсталлятором](#установка-субд-инсталлятором)
  - [Установка СУБД с поддержкой платформы 1C](#установка-субд-с-поддержкой-платформы-1c)
  - [Установка СУБД «Jatoba» с генератором конфигурационного файла](#установка-субд-jatoba-с-генератором-конфигурационного-файла)
  - [Запуск утилиты из консоли ОС](#запуск-утилиты-из-консоли-ос)
  - [setup)](#setup)
  - [Запуск утилиты при инициализации каталога данных СУБД (jatoba-](#запуск-утилиты-при-инициализации-каталога-данных-субд-jatoba-)
  - [Пакеты установки СУБД «Jatoba»](#пакеты-установки-субд-jatoba)
  - [Базовая установка](#базовая-установка)
  - [Установка клиентской части СУБД «Jatoba» на ОС семейства GNU/Linux](#установка-клиентской-части-субд-jatoba-на-ос-семейства-gnulinux)
  - [Установка пакетов, расширяющих возможности СУБД](#установка-пакетов-расширяющих-возможности-субд)
  - [Набор разработчика](#набор-разработчика)
  - [Пакет поддержки 1C](#пакет-поддержки-1c)
  - [«jaDog» – управление режимом работы узлов кластера](#jadog--управление-режимом-работы-узлов-кластера)
  - [«jаPooler» – балансировка подключений пользователей к СУБД](#jаpooler--балансировка-подключений-пользователей-к-субд)
  - [«JCS (Jatoba crypto access storage)» – сокрытие информации в файлах данных СУБД](#jcs-jatoba-crypto-access-storage--сокрытие-информации-в-файлах-данных-субд)
  - [«JDV (Jatoba Database Vault)» – контроль субъектов доступа](#jdv-jatoba-database-vault--контроль-субъектов-доступа)
  - [«pgAudit» – аудит действий пользователя](#pgaudit--аудит-действий-пользователя)
  - [«pgauditlogtofile» – дополнительный компонент к компоненту pgAudit](#pgauditlogtofile--дополнительный-компонент-к-компоненту-pgaudit)
  - [«pgBadger» – анализатор журналов событий](#pgbadger--анализатор-журналов-событий)
  - [«pgSQL-HTTP» – доступ к сайтам по HTTP/S протоколу из СУБД](#pgsql-http--доступ-к-сайтам-по-https-протоколу-из-субд)
  - [Дополнительные языки хранимых процедур](#дополнительные-языки-хранимых-процедур)
  - [«PlsPgSQL» – обфускация исходных текстов хранимых процедур](#plspgsql--обфускация-исходных-текстов-хранимых-процедур)
  - [«PostGIS» – организация работы с геоданными](#postgis--организация-работы-с-геоданными)
  - [«SecurityProfile» – парольные политики](#securityprofile--парольные-политики)
  - [«rum» – компонент поддержки индекса RUM](#rum--компонент-поддержки-индекса-rum)
  - [tsvector2 – компонент расширенного типа данных tsvector](#tsvector2--компонент-расширенного-типа-данных-tsvector)
  - [Компоненты поддержки мониторинга СУБД](#компоненты-поддержки-мониторинга-субд)
  - [Порядок установки СУБД «Jatoba» на ОС GNU/Linux, основанной на Debian из локального репозитория](#порядок-установки-субд-jatoba-на-ос-gnulinux-основанной-на-debian-из-локального-репозитория)
  - [Порядок установки СУБД «Jatoba» на ОС семейства GNU/Linux, основанной на RPM из локального репозитория](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория)
  - [](#-3)
  - [](#-4)
  - [](#-5)
  - [](#-6)
  - [Добавление в автозапуск службы Jatoba в ОС GNU/Linux](#добавление-в-автозапуск-службы-jatoba-в-ос-gnulinux)
  - [Порядок установки СУБД «Jatoba» из DEB/RPM-файлов](#порядок-установки-субд-jatoba-из-debrpm-файлов)
  - [Установка СУБД «Jatoba» из DEB-файлов](#установка-субд-jatoba-из-deb-файлов)
  - [Установка СУБД «Jatoba» из RPM-файлов](#установка-субд-jatoba-из-rpm-файлов)
  - [](#-7)
- [УСТАНОВКА СУБД «JATOBA» НА ОС СЕМЕЙСТВА MICROSOFT WINDOWS](#установка-субд-jatoba-на-ос-семейства-microsoft-windows)
  - [Порядок установки СУБД «Jatoba» на ОС Windows Server 2016](#порядок-установки-субд-jatoba-на-ос-windows-server-2016)
  - [Возможная ошибка при установке СУБД «Jatoba» на ОС Windows](#возможная-ошибка-при-установке-субд-jatoba-на-ос-windows)
  - [Порядок установки СУБД «Jatoba» на ОС Windows](#порядок-установки-субд-jatoba-на-ос-windows)
- [УСТАНОВКА ОБНОВЛЕНИЙ СУБД «JATOBA»](#установка-обновлений-субд-jatoba)
- [СООБЩЕНИЯ ОБ ОШИБКАХ](#сообщения-об-ошибках)
  - [Ошибка установки открытого ключа репозитория](#ошибка-установки-открытого-ключа-репозитория)
  - [Ошибка настройки учетной записи системного пользователя ОС «postgres»](#ошибка-настройки-учетной-записи-системного-пользователя-ос-postgres)
  - [Ошибка настройки учетной записи пользователя СУБД «postgres»](#ошибка-настройки-учетной-записи-пользователя-субд-postgres)
  - [Ошибка повторной установки компонента «securityprofile»](#ошибка-повторной-установки-компонента-securityprofile)
  - [Ошибка в имени локального репозитория](#ошибка-в-имени-локального-репозитория)
- [ПРИЛОЖЕНИЕ 1](#приложение-1)
- [ПРИЛОЖЕНИЕ 2](#приложение-2)
  - [Установка СУБД «Jatoba» из локального репозитория в ОС Ubuntu](#установка-субд-jatoba-из-локального-репозитория-в-ос-ubuntu)
  - [Удаление СУБД «Jatoba» из локального репозитория в ОС Ubuntu](#удаление-субд-jatoba-из-локального-репозитория-в-ос-ubuntu)
- [ПРИЛОЖЕНИЕ 3](#приложение-3)
  - [Установка СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром](#установка-субд-jatoba-из-локального-репозитория-в-ред-ос-73-муром)
  - [Удаление СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром](#удаление-субд-jatoba-из-локального-репозитория-в-ред-ос-73-муром)
  - [ПРИЛОЖЕНИЕ 4](#приложение-4)
  - [Установка СУБД «Jatoba» из локального репозитория в Альт 9 Server](#установка-субд-jatoba-из-локального-репозитория-в-альт-9-server)
  - [Удаление СУБД «Jatoba» из локального репозитория в Альт 9 Server](#удаление-субд-jatoba-из-локального-репозитория-в-альт-9-server)
- [ПРИЛОЖЕНИЕ 5](#приложение-5)
  - [Установка ОС Astra Linux 1.7 Special Edition Смоленск (x86-64)](#установка-ос-astra-linux-17-special-edition-смоленск-x86-64)
  - [Установка СУБД «Jatoba» из локального репозитория в ОС Astra Linux 1.7 Special Edition Смоленск (x86-64)](#установка-субд-jatoba-из-локального-репозитория-в-ос-astra-linux-17-special-edition-смоленск-x86-64)
  - [Удаление СУБД «Jatoba» из локального репозитория в ОС](#удаление-субд-jatoba-из-локального-репозитория-в-ос)
- [ПРИЛОЖЕНИЕ 6](#приложение-6)
  - [Установка СУБД «Jatoba» из локального репозитория в ОС ОСНОВА 2.0](#установка-субд-jatoba-из-локального-репозитория-в-ос-основа-20)
- [ПРИЛОЖЕНИЕ 7](#приложение-7)
  - [Пример установки веб-сервера (IIS) на ОС Windows 10](#пример-установки-веб-сервера-iis-на-ос-windows-10)
- [ПЕРЕЧЕНЬ СОКРАЩЕНИЙ](#перечень-сокращений)

[Приложение 1 95](#приложение-1)

[Приложение 2 97](#приложение-2)

[Установка СУБД «Jatoba» из локального репозитория в ОС Ubuntu 97](#установка-субд-jatoba-из-локального-репозитория-в-ос-ubuntu)

[Удаление СУБД «Jatoba» из локального репозитория в ОС Ubuntu 103](#_bookmark93)

[Приложение 3 109](#приложение-3)

[Установка СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром 109](#установка-субд-jatoba-из-локального-репозитория-в-ред-ос-7.3-муром)

[Удаление СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром 115](#удаление-субд-jatoba-из-локального-репозитория-в-ред-ос-7.3-муром)

[Приложение 4 121](#приложение-4)

[Установка СУБД «Jatoba» из локального репозитория в Альт 9 Server 121](#_bookmark100)

[Удаление СУБД «Jatoba» из локального репозитория в Альт 9 Server 128](#удаление-субд-jatoba-из-локального-репозитория-в-альт-9-server)

[Приложение 5 137](#приложение-5)

[Установка ОС Astra Linux 1.7 Special Edition Смоленск (x86-64) 137](#установка-ос-astra-linux-1.7-special-edition-смоленск-x86-64)

[Установка СУБД «Jatoba» из локального репозитория в ОС Astra Linux 1.7 Special Edition Смоленск (x86-64) 138](#установка-субд-jatoba-из-локального-репозитория-в-ос-astra-linux-1.7-special-edition-смоленск-x86-64)

[Удаление СУБД «Jatoba» из локального репозитория в ОС 148](#удаление-субд-jatoba-из-локального-репозитория-в-ос)

[Приложение 6 149](#приложение-6)

[Установка СУБД «Jatoba» из локального репозитория в ОС ОСНОВА 2.0 149](#установка-субд-jatoba-из-локального-репозитория-в-ос-основа-2.0)

[Приложение 7 157](#приложение-7)

[Пример установки веб-сервера (IIS) на ОС Windows 10 157](#пример-установки-веб-сервера-iis-на-ос-windows-10)

[Перечень сокращений 161](#перечень-сокращений)

## ОБЩИЕ СВЕДЕНИЯ О СУБД «JATOBA»

### Назначение СУБД «Jatoba»

СУБД «Jatoba» является программным средством, предназначенным для создания и управления реляционными базами данных на базе ЭВМ под управлением операционных систем (ОС), представленных в таблице [1.1](#_bookmark2).

<span id="_bookmark2" class="anchor"></span>Таблица 1.1 – Перечень поддерживаемых ОС

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 30%" />
<col style="width: 13%" />
<col style="width: 15%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 12%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование ОС</strong></p>
</th>
<th rowspan="2" style="text-align: center;">
<p><strong>Серверная часть</strong></p>
</th>
<th rowspan="2" style="text-align: center;">
<p><strong>Клиентская часть</strong></p>
</th>
<th rowspan="2" style="text-align: center;">
<p><strong>Docker (ver.)</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>Сертификат ФСТЭК</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>№ серт.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Дата</strong></p>
<p><strong>выдачи</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p>1</p>
</td>
<td>
<p>Windows 10</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
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
</tr>
<tr>
<td style="text-align: center;">
<p>2</p>
</td>
<td>
<p>Windows 11</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
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
</tr>
<tr>
<td style="text-align: center;">
<p>3</p>
</td>
<td>
<p>Windows Server 2016</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
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
</tr>
<tr>
<td style="text-align: center;">
<p>4</p>
</td>
<td>
<p>Windows Server 2019</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
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
</tr>
<tr>
<td style="text-align: center;">
<p>5</p>
</td>
<td>
<p>Windows Server 2022</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
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
</tr>
<tr>
<td style="text-align: center;">
<p>6</p>
</td>
<td>
<p>Astra Linux 1.7 Special Edition Смоленск (x86-64)</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>25.0.5</p>
</td>
<td style="text-align: center;">
<p>2557</p>
</td>
<td style="text-align: center;">
<p>30.01.2012</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>Astra Linux 1.8 (x86-64)</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>25.0.5</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>Debian 11</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>24.0.2</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>Debian 12</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>24.0.2</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>10</p>
</td>
<td>
<p>Альт 8 СП</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>27.1.1</p>
</td>
<td style="text-align: center;">
<p>3866</p>
</td>
<td style="text-align: center;">
<p>10.08.2018</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>11</p>
</td>
<td>
<p>Альт 10 СП</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>27.1.1</p>
</td>
<td style="text-align: center;">
<p>3866</p>
</td>
<td style="text-align: center;">
<p>10.08.2018</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>12</p>
</td>
<td>
<p>Альт 9.1 Server</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
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
</tr>
<tr>
<td style="text-align: center;">
<p>13</p>
</td>
<td>
<p>Альт 10 Server</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>23.0.1</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>14</p>
</td>
<td>
<p>Ubuntu 20.04</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>24.0.2</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>15</p>
</td>
<td>
<p>Ubuntu 22.04</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>24.0.2</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>16</p>
</td>
<td>
<p>Ubuntu 24.04</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>24.0.2</p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>17</p>
</td>
<td>
<p>ОСНОВА2</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>20.10.5</p>
</td>
<td style="text-align: center;">
<p>4381</p>
</td>
<td style="text-align: center;">
<p>31.03.2021</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>18</p>
</td>
<td>
<p>РЕД ОС 7.3 Муром</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>25.0.7</p>
</td>
<td style="text-align: center;">
<p>4060</p>
</td>
<td style="text-align: center;">
<p>12.01.2019</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>19</p>
</td>
<td>
<p>РЕД ОС 8</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
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
</tr>
<tr>
<td style="text-align: center;">
<p>20</p>
</td>
<td>
<p>РОСА «Хром» 12.4</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
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
</tr>
<tr>
<td style="text-align: center;">
<p>21</p>
</td>
<td>
<p>Oracle Linux 8.4</p>
</td>
<td style="text-align: center;">
<p>Х</p>
</td>
<td style="text-align: center;">
<p>Х</p>
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
</tr>
</tbody>
</table>

### Требования к среде функционирования СУБД «Jatoba»

СУБД «Jatoba» устанавливается на ЭВМ с процессорами, имеющими архитектуру x86, x86-64 и AMD64, удовлетворяющие следующим аппаратным требованиям, указанным в таблице [1.2](#_bookmark4).

<span id="_bookmark4" class="anchor"></span>Таблица 1.2 – Программные и аппаратные требования к ЭВМ, на которых функционируют клиентская и серверная часть СУБД

<table>
<colgroup>
<col style="width: 36%" />
<col style="width: 40%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Параметр</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Характеристика</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Сертифицированная ОС</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3" style="text-align: center;">
<p><strong>Требования к аппаратному обеспечению сервера СУБД</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>ОЗУ</p>
</td>
<td style="text-align: center;">
<p>Не менее 2 Гб</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Свободный объем жесткого диска</p>
</td>
<td style="text-align: center;">
<p>Минимальный объем от 40 Гб Рекомендуемый объем от 100 Гб</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Устройства видео вывода</p>
</td>
<td style="text-align: center;">
<p>Монитор и видеоадаптер с</p>
<p>поддержкой VGA и разрешением 800x600 или выше</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Тип процессора и минимальная тактовая частота процессора</p>
</td>
<td style="text-align: center;">
<p>64-разрядный процессор Intel или AMD 3 ГГц или больше</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Минимальное количество ядер</p>
</td>
<td style="text-align: center;">
<p>4</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Максимальное количество ядер</p>
</td>
<td style="text-align: center;">
<p>256</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Устройства ввода-вывода</p>
</td>
<td style="text-align: left;">
<p>Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB, либо PS/2-интерфейсами</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Адаптер Ethernet</p>
</td>
<td style="text-align: center;">
<p>100 Мбит/с</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;">
<p><strong>Требования к аппаратному обеспечению АРМ управления</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>ОЗУ</p>
</td>
<td style="text-align: center;">
<p>Не менее 4 Гб</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Свободный объем жесткого диска</p>
</td>
<td style="text-align: center;">
<p>От 3 Гб</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Устройства видео вывода</p>
</td>
<td style="text-align: left;">
<p>Монитор и видеоадаптер с поддержкой VGA и разрешением 800x600 или выше</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Тип процессора и минимальная тактовая частота процессора</p>
</td>
<td style="text-align: center;">
<p>64-разрядный процессор Intel или AMD</p>
<p>Рекомендуемая частота: 2.4 ГГц или больше</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Устройства ввода-вывода</p>
</td>
<td style="text-align: left;">
<p>Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB-интерфейсами, либо PS/2</p>
<p>интерфейсами</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">
<p>Адаптер Ethernet</p>
</td>
<td style="text-align: center;">
<p>100 Мбит/с</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;">
<p><strong>Требования к программному обеспечению сервера</strong></p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 36%" />
<col style="width: 40%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Параметр</strong></p>
</th>
<th>
<p><strong>Характеристика</strong></p>
</th>
<th>
<p><strong>Сертифицированная ОС</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Операционная система</p>
</td>
<td>
<p>Требования приведены в таблице</p>
<p><a href="#_bookmark2">1.1</a></p>
</td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;">
<p><strong>Требования к программному обеспечению АРМ управления</strong></p>
</td>
</tr>
<tr>
<td>
<p>Операционная система</p>
</td>
<td>
<p>Требования приведены в таблице <a href="#_bookmark2">1.1</a></p>
</td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;">
<p><strong>Требования к аппаратному обеспечению сервера Jatoba data safe</strong></p>
</td>
</tr>
<tr>
<td>
<p>ОЗУ</p>
</td>
<td>
<p>Не менее 2 Гб</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Свободный объем жесткого диска</p>
</td>
<td>
<p>Минимальный объем от 40 Гб Рекомендуемый объем от 100 Гб</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Устройства видео вывода</p>
</td>
<td style="text-align: left;">
<p>Монитор и видеоадаптер с поддержкой VGA и разрешением 800x600 или выше</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Тип процессора и минимальная тактовая частота процессора</p>
</td>
<td>
<p>64-разрядный процессор Intel или AMD 3 ГГц или больше</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Минимальное количество ядер</p>
</td>
<td>
<p>4</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Устройства ввода-вывода</p>
</td>
<td style="text-align: left;">
<p>Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB, либо PS/2 интерфейсами</p>
</td>
<td></td>
</tr>
<tr>
<td>
<p>Адаптер Ethernet</p>
</td>
<td>
<p>100 Мбит/с</p>
</td>
<td></td>
</tr>
<tr>
<td colspan="3">
<p><strong>Требования к программному обеспечению сервера Jatoba data safe</strong></p>
</td>
</tr>
<tr>
<td rowspan="3">
<p>Поддерживаемые платформы</p>
</td>
<td><ul>
<li><p>win-x86;</p></li>
</ul></td>
<td style="text-align: right;"></td>
</tr>
<tr>
<td><ul>
<li><p>win-x64;</p></li>
</ul></td>
<td style="text-align: right;"></td>
</tr>
<tr>
<td><ul>
<li><p>linux-x64</p></li>
</ul></td>
<td style="text-align: right;">Х</td>
</tr>
<tr>
<td>
<p>СУБД</p>
</td>
<td>
<p>Защищенная система управления базами данных «Jatoba»</p>
</td>
<td></td>
</tr>
<tr>
<td rowspan="2">
<p>Веб-сервер</p>
</td>
<td>
<p>IIS 10</p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td>
<p>Nginx</p>
</td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td>
<p>Компоненты</p>
</td>
<td>
<p>ASP.NET Core 6.0 Runtime (v6.0.1) – Windows Hosting Bundle Installer</p>
</td>
<td>
<p></p>
</td>
</tr>
<tr>
<td rowspan="6">
<p>Internet браузер</p>
</td>
<td><ul>
<li><p>Яндекс.Браузер</p></li>
</ul></td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td><ul>
<li><p>Chromium</p></li>
</ul></td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td><ul>
<li><p>Mozilla Firefox</p></li>
</ul></td>
<td>
<p>Х</p>
</td>
</tr>
<tr>
<td><ul>
<li><p>Opera</p></li>
</ul></td>
<td>
<p></p>
</td>
</tr>
<tr>
<td><ul>
<li><p>Microsoft Edge</p></li>
</ul></td>
<td>
<p></p>
</td>
</tr>
<tr>
<td><ul>
<li><p>Google Chrome</p></li>
</ul></td>
<td>
<p></p>
</td>
</tr>
</tbody>
</table>

1.  <span id="_bookmark5" class="anchor"></span>**Требования по совместимости с антивирусным программным обеспечением** При выполнении установки и в ходе дальнейшей эксплуатации СУБД «Jatoba», и ее отдельных компонентов, в случае применения антивирусного программного обеспечения необходимо обеспечить добавление исключений.

Приведенные исключения для антивирусного программного обеспечения делятся на обязательные и рекомендуемые. Список рекомендаций содержится в таблице

Таблица 1.3 – Рекомендации по включению каталогов и файлов СУБД «Jatoba», а также отдельных компонентов в исключения антивирусного программного обеспечения

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 26%" />
<col style="width: 6%" />
<col style="width: 13%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th colspan="2" rowspan="2" style="text-align: center;">
<p><strong>Путь к каталогу</strong></p>
</th>
<th colspan="3" style="text-align: center;">
<p><strong>Примечание</strong></p>
</th>
</tr>
<tr>
<th colspan="2" style="text-align: center;">
<p><strong>Обяз.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Рекоменд.</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="5" style="text-align: center;">
<p><strong>Каталоги СУБД Jatoba</strong></p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/usr/jatoba-&lt;ver&gt;</p>
</td>
<td colspan="2" style="text-align: center;">
<p>•</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/var/lib/jatoba</p>
</td>
<td colspan="2" style="text-align: center;">
<p>•</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/opt/prometheus</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/etc/sysconfig/jatoba</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td colspan="5" style="text-align: center;">
<p><strong>Компонент JDS</strong></p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/opt/jds</p>
</td>
<td colspan="2" style="text-align: center;">
<p>•</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/opt/jds-doctor</p>
</td>
<td colspan="2" style="text-align: center;">
<p>•</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/opt/prometheus</p>
</td>
<td colspan="2" style="text-align: center;">
<p>•</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/opt/jds-scripts</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/usr/local/lib/pg-explain</p>
</td>
<td colspan="2" style="text-align: center;">
<p>•</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/usr/local/lib/pg-monitor</p>
</td>
<td colspan="2" style="text-align: center;">
<p>•</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/var/log/jds</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/var/log/pg-explain</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/var/log/pg-explain-db</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/var/log/pg-monitor</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/etc/sysconfig/pg-explain</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>/etc/sysconfig/pg-monitor</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td colspan="5" style="text-align: center;">
<p><strong>Каталоги с архивом WAL-файлов</strong></p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>Параметр archive_command в файле postgresql.conf</p>
</td>
<td colspan="2" style="text-align: center;">
<p>•</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="5" style="text-align: center;">
<p><strong>Каталоги с резервными копиями</strong></p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>Параметр в команде создания резервной копии или в</p>
<p>конфигурационном файле утилиты резервного копирования</p>
</td>
<td colspan="2" style="text-align: center;">
<p>•</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="5" style="text-align: center;">
<p><strong>Каталоги табличных пространств</strong></p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>Каталог табличного пространства (ТП) указывается непосредственно в команде при его создании</p>
</td>
<td colspan="2" style="text-align: center;">
<p>•</p>
</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="5" style="text-align: center;">
<p><strong>Файлы служб</strong></p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>jatoba&lt;ver&gt;-service</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>jadog.service</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>pgbouncer.service</p>
</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>№ изменения:</p>
</td>
<td colspan="2" style="text-align: center;">
<p>Подпись отв. лица:</p>
</td>
<td colspan="2" style="text-align: center;">
<p>Дата внесения изм:</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 59%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;">
<p><strong>Путь к каталогу</strong></p>
</th>
<th colspan="2">
<p><strong>Примечание</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>Обяз.</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Рекоменд.</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>jatoba&lt;ver&gt;_sql_exporter.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>jatoba&lt;ver&gt;_node_exporter.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>jatoba&lt;ver&gt;_postgres_exporter.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>jatoba&lt;ver&gt;_prometheus.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>jatoba{version}_sql_exporter.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>jatoba{version}_node_exporter.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>jatoba{version}_postgres_exporter.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>jatoba{version}_prometheus.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>jds.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>jds-doctor.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>pg-explain.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>pg-monitor.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>pg-monitor-collector.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
<tr>
<td>
<p>pg-monitor-dispatcher.service</p>
</td>
<td></td>
<td style="text-align: center;">
<p>•</p>
</td>
</tr>
</tbody>
</table>

Критерием для обязательного и рекомендованного исключения для каталогов, служит их назначение. Если в них содержатся данные (файлы и каталоги) баз данных (каталоги с данными, резервными копиями, архивами и т.д.) и исполняемые файлы, то такие каталоги и файлы необходимо обязательно добавлять в исключения. Конфигурационные файлы, скрипты, файлы служб, каталоги с логами – рекомендуется добавлять в исключения.

## КОМПЛЕКТЫ ПОСТАВКИ И СОСТАВ КОМПОНЕТ СУБД «JATOBA»

СУБД «Jatoba» поставляется в формате сертифицированной и коммерческой версии.

Данные версии подразделяются на:

- «Для использования в ИС»;

- «Jatoba 1С».

Комплекты поставки отличаются по составу компонент.

В состав СУБД «Jatoba» входят компоненты, указанные в таблице [2.1<span id="_bookmark7" class="anchor"></span>](#_bookmark7).

Таблица 2.1 – Состав компонент СУБД «Jatoba»

<table style="width:100%;">
<colgroup>
<col style="width: 4%" />
<col style="width: 60%" />
<col style="width: 14%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 4%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr>
<th colspan="2" rowspan="2">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4" style="text-align: center;">
<p><strong>Для использования в</strong></p>
<p><strong>ИС</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>1С</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J18</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J6-1С</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J18-1С</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<p>Базовый инсталляционный пакет</p>
</td>
<td>
<p>Jatoba</p>
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
<td></td>
<td>
<p>Генератор паролей. pwgen</p>
</td>
<td>
<p>pwgen</p>
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
</tr>
<tr>
<td></td>
<td>
<p>Маскирование паролей</p>
</td>
<td>
<p>ja_pwmasking</p>
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
</tr>
<tr>
<td></td>
<td>
<p>Поиск ближайших соседей. KNN</p>
</td>
<td>
<p>KNN</p>
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
<td></td>
<td>
<p>Компонент xid64</p>
</td>
<td>
<p>xid64</p>
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
</tr>
<tr>
<td></td>
<td>
<p>Сжатие данных на уровне страниц. Компонент «ja_Compression»</p>
</td>
<td>
<p>ja_Compression</p>
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
<td></td>
<td>
<p>Восстановление поврежденных WAL записей. WAL Recovery</p>
</td>
<td>
<p>WAL Recovery</p>
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
</tr>
<tr>
<td></td>
<td>
<p>Автоматическое создание директорий табличных пространств</p>
</td>
<td>
<p>ja_TableSpace</p>
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
</tr>
<tr>
<td></td>
<td>
<p>Генератор конфигурационного файла</p>
</td>
<td>
<p>ja_tune</p>
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
<td></td>
<td>
<p>Механизм автономных транзакций</p>
</td>
<td>
<p>ja_ATX</p>
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
<td></td>
<td>
<p>DataWiping: очистка файлов данных объектов доступа</p>
</td>
<td>
<p>ja_WIpe_Files</p>
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
<td colspan="2">
<p>Управление режимом работы узлов кластера. Компонент «jaDog»</p>
</td>
<td>
<p>jaDog</p>
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
<td colspan="2">
<p>Контроль субъектов доступа. Компонент «Jatoba Database Vault»</p>
</td>
<td>
<p>Jatoba Database Vault</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="2">
<p>Формирование отчетов по журналам СУБД. Компонент «pgBadger»</p>
</td>
<td>
<p>pgBadger</p>
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
<td colspan="2">
<p>Расширенное резервное копирование. Компонент «pg_ProBackup»</p>
</td>
<td>
<p>pg_ProBackup</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="2">
<p>Планирование заданий СУБД. Компонент «pg_Task»</p>
</td>
<td>
<p>pg_Task</p>
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
<td colspan="2">
<p>Формирование отчетов производительности СУБД. Компонент «pg_Profile»</p>
</td>
<td>
<p>pg_Profile</p>
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
<td colspan="2">
<p>Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe»</p>
</td>
<td>
<p>Jatoba data safe</p>
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
<td colspan="2">
<p>Агент JDS</p>
</td>
<td>
<p>ja_agnet</p>
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
</tr>
<tr>
<td colspan="2" rowspan="5">
<p>Компонент мониторинга запросов СУБД</p>
</td>
<td>
<p>pg-explain</p>
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
</tr>
<tr>
<td>
<p>pg-explain-db</p>
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
</tr>
<tr>
<td>
<p>pg-monitor</p>
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
</tr>
<tr>
<td>
<p>pg-monitor-collector</p>
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
</tr>
<tr>
<td>
<p>pg-monitor-dispatcher</p>
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
</tr>
<tr>
<td colspan="2">
<p>Синхронизация учетных записей с MS Active Directory / LDAP. Компонент «ja_Sync_LDAP»</p>
</td>
<td>
<p>ja_Sync_LDAP</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="2">
<p>Обфускация кода PL/spgSQL. Компонент «PLspgSQL»</p>
</td>
<td>
<p>PLspgSQL</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="2">
<p>Высокопроизводительный кластер. Компонент «ja_Hipe_Cluster»</p>
</td>
<td>
<p>ja_Hipe_Cluster</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
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
<th>
<p>№ изменения:</p>
</th>
<th>
<p>Подпись отв. лица:</p>
</th>
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
<col style="width: 22%" />
<col style="width: 22%" />
<col style="width: 19%" />
<col style="width: 2%" />
<col style="width: 11%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 4%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr>
<th colspan="3" rowspan="2">
<p><strong>Полное название компонента</strong></p>
</th>
<th colspan="2" rowspan="2">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4" style="text-align: center;">
<p><strong>Для использования в ИС</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>1С</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J18</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J6-1С</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J18-1С</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3">
<p>Централизованный сбор записей событий СУБД. Компонент «ja_Log»</p>
</td>
<td colspan="2">
<p>ja_Log</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Поддержка платформы 1С</p>
</td>
<td colspan="2">
<p>1C_support</p>
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
</tr>
<tr>
<td colspan="3">
<p>Компонент совместимости с 1С. «fasttrun»</p>
</td>
<td colspan="2">
<p>fasttrun</p>
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
</tr>
<tr>
<td colspan="3">
<p>Компонент совместимости с 1С. «fulleq»</p>
</td>
<td colspan="2">
<p>fulleq</p>
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
</tr>
<tr>
<td colspan="3">
<p>Компонент совместимости с 1С. «mchar»</p>
</td>
<td colspan="2">
<p>mchar</p>
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
</tr>
<tr>
<td colspan="3">
<p>Компонент совместимости с 1С. «online_analyze»</p>
</td>
<td colspan="2">
<p>online_analyze</p>
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
</tr>
<tr>
<td colspan="3">
<p>Компонент совместимости с 1С. «plantuner»</p>
</td>
<td colspan="2">
<p>plantuner</p>
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
</tr>
<tr>
<td colspan="3">
<p>Контроль целостности. Компонент «ja_CSum»</p>
</td>
<td colspan="2">
<p>ja_CSum</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Балансировка подключений пользователей к СУБД. Компонент «jaPooler»</p>
</td>
<td colspan="2">
<p>jaPooler</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3" rowspan="3">
<p>Обеспечение работы с СУБД Oracle</p>
</td>
<td colspan="2">
<p>Oracle_FDW</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="2">
<p>OraFCE</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="2">
<p>pg_Variables</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Выявление и предотвращение исполнения нетипичных SQL-запросов. Компонент «SQL_Firewall»</p>
</td>
<td colspan="2">
<p>SQL_Firewall</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Библиотека для взаимодействия с моделями машинного обучения. Компонент «ONNX Runtime»</p>
</td>
<td colspan="2">
<p>onnxruntime</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Сокрытие информации в файлах данных СУБД. Компонент «Jatoba crypto access storage»</p>
</td>
<td colspan="2">
<p>JCS</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Формирование HTTP/HTTPS запросов из СУБД. Компонент «pgSQL-HTTP»</p>
</td>
<td colspan="2">
<p>pgSQL-HTTP</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Обеспечение работы с СУБД MS SQL Server. Компонент «TDS_FDW»</p>
</td>
<td colspan="2">
<p>TDS_FDW</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Расширенное журналирование событий СУБД. Компонент «pgAudit»</p>
</td>
<td colspan="2">
<p>pgAudit</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Компонент «pgauditlogtofile»</p>
</td>
<td colspan="2">
<p>pgauditlogtofile</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Работа с географическими данными. Компонент «PostGIS»</p>
</td>
<td colspan="2">
<p>PostGIS</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Расширенное резервное копирование. Компонент «PTrack»</p>
</td>
<td colspan="2">
<p>PTrack</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Управление парольными политиками пользователей СУБД. Компонент «SecurityProfile»</p>
</td>
<td colspan="2">
<p>SecurityProfile</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Управление планами запросов. Компонент «ja_Plan_Manager»</p>
</td>
<td colspan="2">
<p>ja_Plan_Manager</p>
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
<td colspan="3">
<p>Контроль выполненных планов запросов Компонент «pg_store_plans»</p>
</td>
<td colspan="2">
<p>pg_store_plans</p>
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
</tr>
<tr>
<td colspan="3">
<p>Настройка планов выполнения. Компонент «pg_hint_plan»</p>
</td>
<td colspan="2">
<p>pg_hint_plan</p>
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
</tr>
<tr>
<td colspan="3">
<p>«Jatoba» в контейнере</p>
</td>
<td colspan="2">
<p>ja_Container</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td colspan="3">
<p>Компонент сбора аппаратных и программных показателей работы GNU/Linux. node_exporter.</p>
</td>
<td colspan="2">
<p>node_exporter</p>
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
</tr>
<tr>
<td colspan="3">
<p>Компонент сбора метрик СУБД. postgres_exporter</p>
</td>
<td colspan="2">
<p>postgres_exporter</p>
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
</tr>
<tr>
<td colspan="3">
<p>SQL экспортёр. Компонент сбора расширенных метрик СУБД</p>
</td>
<td colspan="2">
<p>sql_exporter</p>
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
</tr>
<tr>
<td>
<p>№ изменения:</p>
</td>
<td>
<p>Подпись отв. лица:</p>
</td>
<td colspan="2">
<p>Дата внесения изм:</p>
</td>
<td colspan="7"></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 65%" />
<col style="width: 14%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 4%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr>
<th rowspan="2">
<p><strong>Полное название компонента</strong></p>
</th>
<th rowspan="2">
<p><strong>Наименование англоязычное</strong></p>
</th>
<th colspan="4" style="text-align: center;">
<p><strong>Для использования в ИС</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>1С</strong></p>
</th>
</tr>
<tr>
<th style="text-align: center;">
<p><strong>J4</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J5</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J6</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J18</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J6-1С</strong></p>
</th>
<th style="text-align: center;">
<p><strong>J18-1С</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Компонент мониторинга различных программных систем и сервисов. Prometheus</p>
</td>
<td>
<p>Prometheus</p>
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
</tr>
<tr>
<td>
<p>Компонент управления и обработки оповещений в системе мониторинга Prometheus. Alertmanager</p>
</td>
<td>
<p>Alertmanager</p>
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
</tr>
<tr>
<td>
<p>Работа СУБД «Jatoba» в режиме ЗПС в ОС Astra Linux</p>
</td>
<td>
<p>astra-digsig-key</p>
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
<td>
<p>gis-cryptoplatform</p>
</td>
<td>
<p>gis-cryptoplatform</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td>
<p>Поддержка лексографического идентификатора. Компонент «pg-ulid»</p>
</td>
<td>
<p>pg-ulid</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td>
<p>Запись событий информационной безопасности. Компонент «ja_seceventlog»</p>
</td>
<td>
<p>ja_seceventlog</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td>
<p>Обратный индекс с хранением позиционной информации, полнотекстовый поиск. Компонент «rum»</p>
</td>
<td>
<p>rum</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td>
<p>Реорганизация таблицы с минимальными блокировками. Компонент «pg_repack»</p>
</td>
<td>
<p>pg_repack</p>
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
</tr>
<tr>
<td>
<p>Работа СУБД Jatoba в режиме ЗПС в ОС ОСНОВА</p>
</td>
<td>
<p>osnova-digsig-key</p>
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
<td>
<p>Расширенный тип данных tsvector. Компонент "tsvector2"</p>
</td>
<td>
<p>tsvector2</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td>
<p>Полнотекстовый поиск и определение похожих текстов. Компонент "ja_Similar"</p>
</td>
<td>
<p>ja_Similar</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td>
<p>Инвентаризация СУБД</p>
</td>
<td>
<p>ja_Inventory</p>
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
<td>
<p>Cвободная библиотека для проверки орфографии и морфологического анализа. Компонент «hunspell»</p>
</td>
<td>
<p>hunspell</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td>
<p>Маскирование данных. Компонент «ja_anonymizer»</p>
</td>
<td>
<p>ja_anonymizer</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
</td>
</tr>
<tr>
<td>
<p>Архивация и восстановление данных. Компонент «WAL-G»</p>
</td>
<td>
<p>wal-g</p>
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
<p></p>
</td>
<td style="text-align: center;">
<p></p>
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
<th>
<p>№ изменения:</p>
</th>
<th>
<p>Подпись отв. лица:</p>
</th>
<th>
<p>Дата внесения изм:</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## УСТАНОВКА СУБД «JATOBA» НА ОС СЕМЕЙСТВА GNU/LINUX

В зависимости от версии поставки СУБД «Jatoba» имена пакетов компонент отличаются.

В версии «Jatoba 1С» имя пакета дополняется суффиксом «1с». Синтаксис имени пакета будет следующим:

jatoba<ver>-<edition>-<name>_<build version>

Например. Пакет для «jatoba server» будет иметь имя:

jatoba18-1c-server_18.3.1-62238_amd64.deb

В версии «Для использования в ИС» дополнительный суффикс отсутствует. Синтаксис имени пакета будет следующим:

jatoba<ver>-<name>_<build version>

Например. Пакет для «jatoba server» будет иметь имя:

jatoba18-server_18.3.1-62238_amd64.deb

Установку СУБД «Jatoba» возможно провести тремя способами:

1)  Установка из локального репозитория инсталлятором (см. п. [3.1](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux)).

2)  Установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него п. ([3.3](#пакеты-установки-субд-jatoba)).

3)  Установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя (п.п. [3.4](#порядок-установки-субд-jatoba-на-ос-gnulinux-основанной-на-debian-из-локального-репозитория), [3.5](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка СУБД «Jatoba» на ОС GNU/Linux происходит в несколько этапов:

- настройка репозитория СУБД;

- установка основных пакетов;

- инициализация директории данных СУБД;

- конфигурирование СУБД;

- запуск сервиса СУБД.

Пример установки и удаления СУБД «Jatoba» из локального репозитория для:

- ОС Ubuntu 18.04 приведен в Приложении [2](#приложение-2);

- РЕД ОС 7.3 Муром приведен в Приложении [3](#приложение-3);

- Альт 9 Server приведен в Приложении [4](#приложение-4).

Пример установки СУБД «Jatoba» из локального репозитория в Astra Linux 1.6 Special Edition Смоленск в замкнутой программной среде приведен в Приложении [5](#приложение-5) настоящего документа.

Концептуальная схема последовательности действий представлена на рисунке [3.1](#_bookmark9).

Более подробное описание установки приведено ниже.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

**Начало установки**

**Подготовка ОС к установке СУБД**

**Завершение установки**

**Запуск (автозапуск) и проверка работы СУБД**

**Дополнительное конфигурирование СУБД**

**Инициализация каталога данных**

**Установка основных пакетов**

**Локальный репозиторий**

**(CDROM)**

**DEB/RPM-файлы (опционально)**

**Установка репозитория СУБД**

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">
<p><strong>Только для ОС Astra Linux 1.6 Смоленск</strong></p>
<p>Для корректного обновления системы и последующей установки СУБД «Jatoba» рекомендуется подключить и примонтировать все ISO-файлы установки и обновления ОС одновременно, прописав репозитории в виде локальных директорий точек монтирования. При использовании источников установки «cdrom» возможны ошибки нахождения зависимых пакетов на разных ISO-образах.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Перед началом установки СУБД «Jatoba» в ОС необходимо поставить все последние обновления.</p>
</td>
</tr>
</tbody>
</table>

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">
<p><strong>Только для ОС CentOS Linux 8.2 и выше</strong></p>
<p>Ввиду прекращения производителем поддержки ОС CentOS Linux 8-й версии необходимо в качестве источника для установки пакетов и обновлений системы использовать архивный репозиторий <a href="https://vault.centos.org/"><u>https://vault.centos.org</u></a></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>Установка и запуск СУБД в ОС производится от имени пользователя «root» (суперпользователь). Порядок получения root-привилегий в различных ОС GNU/Linux может отличаться. Обычно для этого используется связка команд sudo su.</p>
<p>В случае если используется для получения root-привилегий команда su отдельно от sudo, то su следует обязательно использовать с параметром –l.</p>
<p>В случае отсутствия пакета sudo в системе, его необходимо установить. Для</p>
<p>получения соответствующих пакетов пользователю необходимо обратиться к соответствующему руководству администратора операционной системы.</p>
</td>
</tr>
</tbody>
</table>

### Инсталлятор СУБД «Jatoba» для ОС семейства GNU/Linux

Инсталлятор выполняет базовую установку СУБД «Jatoba», инсталлируя пакеты:

- jatoba<ver>-client – клиентская часть СУБД;

- jatoba<ver>-contrib – вспомогательный набор модулей (расширений) СУБД;

- jatoba<ver>-libs – основные библиотеки для клиентской и серверной части СУБД;

- jatoba<ver>-server – серверная часть СУБД.

Установка пакетов, расширяющих возможности СУБД, выполняется отдельно в соответствии с пунктом [3.3.3](#установка-пакетов-расширяющих-возможности-субд) настоящего документа.

Работу инсталлятора возможно условно разделить на следующие этапы:

- подготовительные действия;

- начало установки.

### ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

Для корректного отображения сообщений инсталлятора (установочного скрипта) консоль ОС должна обеспечивать отображение кириллических символов.

Для установки корректного набора шрифтов необходимо открыть файл

/etc/vconsole.conf (в зависимости от дистрибутива ОС может располагаться в другом каталоге) и установить параметр:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>FONT="UniCyr_8x16"</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Сохранить файл и выполнить обновление настроек:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>setfont UniCyr_8x16</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

На этапе подготовительных действий выполняются следующие шаги:

1)  В терминале войти в режим суперпользователя, выполнив команду:

sudo su

2)  Выполнить обновление системы:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image26.png)

apt-get update -y && apt-get upgrade -y && apt dist-upgrade -y

Рисунок 3.2 – Обновление системы

3)  Создать папку localrepo в корневом каталоге:

mkdir /localrepo

4)  В созданную папку скопировать:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image27.png)

- каталог <pool>

- каталог <dist>

- файл <DEB-GPG-KEY-Jatoba>

Рисунок 3.3 – Структура каталога «localrepo»

5)  Расположить установочный скрипт jatoba.sh в корневой директории текущего пользователя:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image28.png)

Рисунок 3.4 – Расположение установочного скрипта jatoba.sh

6)  Дать разрешение на запуск:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image29.png)

```
# cd /home
```

```
# chmod +x jatoba.sh
```

Рисунок 3.5 – Команда установки прав на запуск скрипта

### Установка СУБД инсталлятором

Этап начала установки включает в себя следующие шаги:

1)  Запустить скрипт:

./jatoba.sh install

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image30.png)

Рисунок 3.6 – Команда запуска установочного скрипта

2)  Указать версию устанавливаемой СУБД и подтвердить выбор для установки:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image31.png)

Рисунок 3.7 – Выбор версии СУБД

После чего начнется процесс установки и построится дерево зависимостей. Автоматически добавится описание локального репозитория.

Запустится процедура инициализации БД.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image32.png)

Рисунок 3.8 – Инициализация БД

После процедуры инициализации БД в автоматическом режиме:

- внесутся изменения в конфигурационный файл «postgresql.conf»;

- добавится сервис в список автозапуска.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image33.png)

Рисунок 3.9 – Добавление службы в автозагрузку

3)  Ввести пароль пользователя СУБД postgres и подтвердить его.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image34.png)

Рисунок 3.10 – Ввод и подтверждение пароля для пользователя «postgres»

4)  Окончание установки (рис. [3.11](#_bookmark13)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image35.png)

<span id="_bookmark13" class="anchor"></span>Рисунок 3.11 – Окно окончания установки

5)  Установить пароль для системного пользователя ОС «postgres»:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image36.png)

sudo passwd postgres

Рисунок 3.12 - Установка пароля для системного пользователя ОС «postgres»

6)  Авторизоваться в psql, для этого нажать сочетание клавиш:

CTRL + D

Затем войти в psql:

su postgres psql

7)  Установить пароль для пользователя СУБД «postgres»:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image37.png)

\password

Рисунок 3.13 – Установка пароля для пользователя СУБД На данном шаге установка СУБД закончена.

### Установка СУБД с поддержкой платформы 1C

Для автоматической настройки экземпляра СУБД под работу с платформой 1С предусмотрена специальная опция «install_1c» инсталлятора:

```
# ./jatoba.sh install_1c \[-y\]
```

Подробное описание действий, выполняемых инсталлятором с поддержкой платформы 1С, приведены в документе «Поддержка платформы 1С» 643.72410666.00067-08 98 01-13.

### Установка СУБД «Jatoba» с генератором конфигурационного файла

**«ja_tune»**

Компонент «ja_tune» предназначен для Администратора СУБД и является генератором рекомендуемого конфигурационного файла «postgresql.conf» на основе данных об аппаратной платформе, на которой предполагается запускать экземпляр СУБД, данных операционной системы, предполагаемом профиле нагрузки СУБД и некоторых дополнительных параметрах.

Компонент «ja_tune» представляет собой самостоятельный исполняемый файл, запуск которого не зависит от запуска СУБД. В процессе функционирования компонент не требует наличия запущенного экземпляра СУБД и не требует подключения к какому-либо экземпляру СУБД.

Компонент выполнен в форме консольного приложения и может запускаться Администратором СУБД в двух режимах:

1)  из консоли операционной системы (п. [3.2.1](#запуск-утилиты-из-консоли-ос));

2)  при запуске утилиты «jatoba-setup» при инициализации каталога данный СУБД (п. [3.2.2](#setup)).

Для работы консольного приложения «ja_tune» требуются привилегии Администратора операционной системы для получения необходимой информации об аппаратных и системных характеристиках сервера СУБД.

Консольное приложение «ja_tune» не интегрировано в инсталлятор СУБД. Использование утилиты генерации рекомендуемого конфигурационного файла СУБД доступно при выполнении ручной установки СУБД, в соответствии с положениями разделов в п.п. [3.4](#порядок-установки-субд-jatoba-на-ос-gnulinux-основанной-на-debian-из-локального-репозитория), [3.5](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория) настоящего документа.

Консольное приложение «ja_tune» устанавливается в составе пакета jatoba<ver>-server – серверная часть СУБД.

Приложение располагается в директории:

/usr/jatoba-<ver>/bin

При этом в СУБД «Jatoba» 6/18 версия компонента ja_tune – 1.4.1.

### Запуск утилиты из консоли ОС

Консольный запуск утилиты целесообразен для:

- определения рекомендованных параметров для установленной СУБД и последующей корректировкой таковых;

- определения рекомендованных параметров перед установкой СУБД.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Таблица 3.1 - Параметры командной строки ja_tune

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 15%" />
<col style="width: 71%" />
</colgroup>
<thead>
<tr>
<th colspan="2" style="text-align: center;">
<p><strong>Параметр</strong></p>
</th>
<th rowspan="2">
<p><strong>Описание</strong></p>
</th>
</tr>
<tr>
<th>
<p><strong>short option</strong></p>
</th>
<th>
<p><strong>long option</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2">
<p>-v</p>
</td>
<td rowspan="2">
<p>--ver</p>
<p>--version</p>
</td>
<td>
<p>output version information, then exit</p>
</td>
</tr>
<tr>
<td>
<p>Вывод информации о версии ja_tune.</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p>-o,</p>
</td>
<td rowspan="2">
<p>--os</p>
</td>
<td>
<p>operating system {windows|linux|unix|darwin}</p>
</td>
</tr>
<tr>
<td>
<p>Название семейства операционной системы, для которой составляется конфигурационный файл.</p>
<p>Допустимый набор значений:</p>

<ul>
<li><p>linux – ОС GNU/Linux (debian, redhat и т.п.);</p></li>
<li><p>unix – ОС семейства UNIX (freebsd, solaris и т.п.);</p></li>
<li><p>windows – ОС семейства Windows;</p></li>
<li><p>darwin – ОС macOS от Apple. Значение по умолчанию: linux</p></li>
</ul>

<p>Значения автоматически <strong>определяются</strong>.</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p>-a</p>
</td>
<td rowspan="2">
<p>--arch</p>
</td>
<td>
<p>processor architecture {amd64|x86-64|arm64}</p>
</td>
</tr>
<tr>
<td>
<p>Название архитектуры сервера, для которого составляется конфигурационный файл.</p>
<p>Допустимый набор значений:</p>

<ul>
<li><p>x86-64 – 64-битные системы от Intel и AMD;</p></li>
<li><p>amd64 – синоним x86-64;</p></li>
<li><p>arm64 – 64-битные системы на базе процессоров ARM. Значение по умолчанию: x86-64</p></li>
</ul>

<p>Значения автоматически <strong>определяются</strong>.</p>
</td>
</tr>
<tr>
<td>
<p>-s</p>
</td>
<td>
<p>--stype</p>
</td>
<td>
<p>storage type {ssd|san|hdd}</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 15%" />
<col style="width: 71%" />
</colgroup>
<thead>
<tr>
<th colspan="2" style="text-align: center;">
<p><strong>Параметр</strong></p>
</th>
<th rowspan="2">
<p><strong>Описание</strong></p>
</th>
</tr>
<tr>
<th>
<p><strong>short option</strong></p>
</th>
<th>
<p><strong>long option</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>
<p>--strgtype</p>
</td>
<td>
<p>Тип подсистемы хранения, которая используется на целевом сервере.</p>
<p>Допустимый набор значений:</p>

<ul>
<li><p>hdd – используются накопители на жёстких магнитных дисках;</p></li>
<li><p>ssd – используются твердотельные накопители;</p></li>
<li><p>san – используются сетевые системы хранения данных, построенные на высокоскоростных и сверхвысокоскоростных каналах связи.</p></li>
</ul>

<p>Значение по умолчанию: SSD</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</td>
</tr>
<tr>
<td rowspan="3">
<p>-p</p>
</td>
<td rowspan="2">
<p>--app</p>
<p>--application</p>
</td>
<td>
<p>application profile {web|oltp|dwh|mixed|desktop|1c}</p>
</td>
</tr>
<tr>
<td>
<p>Тип нагрузки (профиль), под который планируется эксплуатация СУБД. Допустимый набор значений:</p>

<ul>
<li><p>web – СУБД планируется эксплуатировать в среде Web-сервисов;</p></li>
<li><p>oltp – СУБД планируется эксплуатировать в системах с высокой транзакционной нагрузкой;</p></li>
<li><p>dwh – СУБД планируется эксплуатировать в системах с высокой аналитической нагрузкой (OLAP / Data Warehouse)</p></li>
<li><p>mixed – СУБД планируется эксплуатировать с системах со смешанной нагрузкой;</p></li>
<li><p>desktop – СУБД планируется эксплуатировать в настольных системах (в том числе для персонального использования);</p></li>
<li><p>1c – СУБД планируется эксплуатировать в системах 1С:Платформа. Значение по умолчанию: mixed</p></li>
</ul>

<p>Значения автоматически <strong>не определяются</strong>.</p>
</td>
</tr>
<tr>
<td>
<p>--workload</p>
</td>
<td>
<p>--workload не рекомендуется использовать, как устаревший. Полноценным аналогом является параметр --application</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p>-c</p>
</td>
<td rowspan="2">
<p>--cpu</p>
</td>
<td>
<p>number of CPUs</p>
</td>
</tr>
<tr>
<td>
<p>Количество ядер (не гиперпоточность) на сервере, где планируется эксплуатация СУБД.</p>
<p>Допустимый набор значений: целое число; в пределах 1≤ CPU ≤ 256 Значение по умолчанию: 32</p>
<p>Значения автоматически <strong>определяются</strong>.</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p>-m</p>
</td>
<td rowspan="2">
<p>--ram</p>
</td>
<td>
<p>total memory (GB)</p>
</td>
</tr>
<tr>
<td>
<p>Объем оперативной памяти, установленной на сервере. Допустимый набор значений: цело число; в пределах 1 ≤ ram ≤ 1536 Значение по умолчанию: 128</p>
<p>Значение задается в гигабайтах (множитель 1024 [гигобайты]). Значения автоматически <strong>определяются</strong>.</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p>-N</p>
</td>
<td rowspan="2">
<p>--conn</p>
<p>--maxconn</p>
</td>
<td>
<p>maximum allowed number of connections</p>
</td>
</tr>
<tr>
<td>
<p>Максимальное количество одновременных соединений пользователей, которое планируется обрабатывать сервером СУБД.</p>
<p>Допустимый набор значений: целое число; в пределах 20 ≤ maxconn ≤ 262143 Значение по умолчанию: 100</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p>-V</p>
</td>
<td rowspan="2">
<p>--dbver</p>
<p>--dbversion</p>
</td>
<td>
<p>PostgreSQL/Jatoba version {PG10, ..., PG18, J4, ..., J6, J18}</p>
</td>
</tr>
<tr>
<td>
<p>Версия СУБД Jatoba/PostgreSQL</p>
<p>Значение, которое начинается с «PG», обозначает СУБД PostgreSQL и ее версию. Значение, которое начинается с «J», обозначает СУБД Jatoba и ее версию.</p>
<p>Допустимый набор значений: PG10-PG16, J4-J6.</p>
<p>Значение по умолчанию: J6</p>
<p>Значения автоматически <strong>определяются</strong>.</p>
<p>Если СУБД Jatoba имеет версию 6.4.1, значит параметр --dbversion должен иметь значение «J6».</p>
</td>
</tr>
<tr>
<td>
<p>-R</p>
</td>
<td>
<p>--repl</p>
</td>
<td>
<p>replication enabled {true|false|1|0|on|off|yes|no}</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 15%" />
<col style="width: 71%" />
</colgroup>
<thead>
<tr>
<th colspan="2" style="text-align: center;">
<p><strong>Параметр</strong></p>
</th>
<th rowspan="2">
<p><strong>Описание</strong></p>
</th>
</tr>
<tr>
<th>
<p><strong>short option</strong></p>
</th>
<th>
<p><strong>long option</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>
<p>--replication</p>
</td>
<td>
<p>Будет ли использоваться физическая / логическая репликация в процессе</p>
<p>эксплуатации СУБД. Допустимые значения:</p>

<ul>
<li><p>yes / no;</p></li>
<li><p>on / off;</p></li>
<li><p>1 / 0;</p></li>
<li><p>true / false. Значение по умолчанию: off</p></li>
</ul>

<p>Значения автоматически <strong>не определяются</strong>.</p>
</td>
</tr>
<tr>
<td>
<p>--h</p>
</td>
<td>
<p>--help</p>
</td>
<td style="text-align: left;">
<p>Вывод краткой справочной информации о всех параметрах.</p>
<p>Если параметр указан в командной строке (даже если указаны и другие параметры), то ja_tune выводит краткую справочную информацию об использовании ja_tune и выходит с кодом возврата 0.</p>
</td>
</tr>
</tbody>
</table>

Встроенная справка к утилите ja_tune вызывается при помощи команды:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image38.png)

./ja_tune --help

Рисунок 3.14 – Встроенная справка к утилите ja_tune

При установленной в ОС локали «ru_RU» вывод справочной информации для утилиты ja_tune будет русифицирован, как представлено на рисунке [3.15](#_bookmark17).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image39.png)

<span id="_bookmark17" class="anchor"></span>Рисунок 3.15 – Вывод русифицированной справки

**Пример №1**

Установим параметры расчета конфигурации СУБД с выводом результатов в терминал:

- o linux – ОС Linux;

- a amd64 – тип процессора amd64;

- s ssd – тип носителя ssd;

- p web – тип нагрузки web;

Команда в терминале ОС будет иметь следующий вид:

./ja_tune -o linux -a amd64 -s ssd -p web

В результате утилита ja_tune выведет расчетные параметры СУБД в терминале ОС.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image40.png)

Рисунок 3.16 – Вывод результатов расчёта в терминал ОС

При установленной в ОС локали «ru_RU», вывод значений расчетных параметров утилитой, будет русифицирован, как представлено на рисунке [3.17](#_bookmark18).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image41.png)

<span id="_bookmark18" class="anchor"></span>Рисунок 3.17 – Вывод русифицированных результатов расчёта в терминал ОС

**Пример №2**

Установим те же параметры с выводом результатов в файл. Для вывода результата расчета в файл используются следующие операторы перенаправления:

- > имя файла - перенаправление в файл с перезаписью содержимого файла;

- >> имя файла - добавление в конец файла (возможно уже существующего). Команда в терминале ОС будет иметь следующий вид:

./ja_tune -o linux -a amd64 -s ssd -p web > test.cfg

В результате выполнения команды будет создан конфигурационный файл test.cfg, расположенный в директории:

/usr/jatoba-<ver>/bin

В содержании конфигурационного файла указываются вводные параметры расчета и далее полученные расчетные значения параметров СУБД.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image42.png)

### setup)

Рисунок 3.18 – Вывод результатов расчетов по заданным параметрам в файл

### Запуск утилиты при инициализации каталога данных СУБД (jatoba-

Утилиту ja_tune возможно использовать при инициализации каталога данных СУБД

в утилите jatoba-setup, с параметрами, приведенными в таблице [3.2](#_bookmark20).

В этом случае будет:

- Произведена инициализация СУБД;

- Сформирован конфигурационный файл расчетных параметров «ja_tune.conf» в директории:

/var/lib/jatoba/<ver>/data

- Сформирован конфигурационный файл «postgresql.conf», в котором будет ссылка на конфигурационный файл «ja_tune.conf»:

include 'ja_tune.conf'

<span id="_bookmark20" class="anchor"></span>Таблица 3.2 – Параметры командной строки jatoba-setup при использовании утилиты ja_tune

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 17%" />
<col style="width: 1%" />
<col style="width: 31%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3" style="text-align: center;">
<p><strong>Параметр</strong></p>
</th>
<th colspan="2" rowspan="2" style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
<tr>
<th>
<p><strong>Основной</strong></p>
</th>
<th colspan="2">
<p><strong>Синоним</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>--tune</p>
</td>
<td colspan="2"></td>
<td colspan="2" style="text-align: left;">
<p>Параметр, при помощи которого запускается утилита ja_tune при инициализации каталога данных с помощью jatoba-setup.</p>
<p>Параметр --tune имеет опциональный аргумент – абсолютное или относительное имя файла, куда будет записана рекомендуемая конфигурация. Если задано относительное имя, то файл сохраняется относительно директории PGDATA, заданной в jatoba-setup. Если аргумент не задан, т.е. пользователь явно не указал имя файла, то используется имя</p>
<p>по умолчанию «ja_tune.conf».</p>
</td>
</tr>
<tr>
<td>
<p>--tune-stype</p>
</td>
<td colspan="2">
<p>--tune-strgtype</p>
</td>
<td colspan="2" style="text-align: left;">
<p>Параметр аналогичный --strgtype</p>
<p>Тип подсистемы хранения, которая используется на целевом сервере. Допустимый набор значений параметра --tune-strgtype:</p>

<ul>
<li><p>hdd – используются накопители на жёстких магнитных дисках;</p></li>
<li><p>ssd – используются твердотельные накопители;</p></li>
<li><p>san – используются сетевые системы хранения данных, построенные на высокоскоростных и сверхвысокоскоростных каналах связи.</p></li>
</ul>

<p>Значение по умолчанию: SSD</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p>--tune-app</p>
</td>
<td colspan="2">
<p>-tune-application</p>
</td>
<td colspan="2" style="text-align: left;">
<p>Параметр аналогичный --workload</p>
<p>Тип нагрузки (профиль), под который планируется эксплуатация СУБД. Допустимый набор значений параметра --tune-workload:</p>

<ul>
<li><p>web – СУБД планируется эксплуатировать в среде Web-сервисов;</p></li>
<li><p>oltp – СУБД планируется эксплуатировать в системах с высокой транзакционной нагрузкой;</p></li>
<li><p>dwh – СУБД планируется эксплуатировать в системах с высокой аналитической нагрузкой (OLAP / Data Warehouse)</p></li>
<li><p>mixed – СУБД планируется эксплуатировать с системах со смешанной нагрузкой;</p></li>
<li><p>desktop – СУБД планируется эксплуатировать в настольных системах (в том числе для персонального использования);</p></li>
<li><p>1c – СУБД планируется эксплуатировать в системах 1С:Платформа.</p></li>
</ul>

<p>Значение по умолчанию: Mixed</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</td>
</tr>
<tr>
<td colspan="2">
<p>--tune-workload</p>
</td>
<td colspan="2" style="text-align: left;">
<p>--workload не рекомендуется использовать, как устаревший. Полноценным аналогом является параметр --application</p>
</td>
</tr>
<tr>
<td>
<p>--tune-conn</p>
</td>
<td colspan="2">
<p>--tune-maxconn</p>
</td>
<td colspan="2" style="text-align: left;">
<p>Параметр аналогичный --maxconn</p>
<p>Максимальное количество одновременных соединений пользователей, которое планируется обрабатывать сервером СУБД.</p>
<p>Допустимый набор значений параметра --tune-maxconn: целое число; в пределах 20 ≤ maxconn ≤ 262143</p>
<p>Значение по умолчанию: 100</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</td>
</tr>
<tr>
<td colspan="2">
<p>№ изменения:</p>
</td>
<td colspan="2">
<p>Подпись отв. лица:</p>
</td>
<td style="text-align: left;">
<p>Дата внесения изм:</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 19%" />
<col style="width: 65%" />
</colgroup>
<thead>
<tr>
<th colspan="2" style="text-align: center;">
<p><strong>Параметр</strong></p>
</th>
<th rowspan="2" style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
<tr>
<th>
<p><strong>Основной</strong></p>
</th>
<th>
<p><strong>Синоним</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>--tune-repl</p>
</td>
<td>
<p>--tune-replication</p>
</td>
<td>
<p>Параметр аналогичный --replication</p>
<p>Будет ли использоваться физическая / логическая репликация в процессе эксплуатации СУБД.</p>
<p>Допустимые значения параметра --tune-replication:</p>

<ul>
<li><p>yes / no;</p></li>
<li><p>on / off;</p></li>
<li><p>1 / 0;</p></li>
<li><p>true / false. Значение по умолчанию: off</p></li>
</ul>

<p>Значения автоматически <strong>не определяются</strong>.</p>
</td>
</tr>
</tbody>
</table>

Встроенная справка в jatoba-setup к параметрам утилиты ja_tune вызывается при помощи команды:

./jatoba-setup --help

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image43.png)

можно вводить как верхнем, так и в нижнем регистре (например, SSD и ssd – равнозначные). При ошибке в значении параметра выводится информационное сообщение.

**Пример №3**

Установим параметры расчета и установки конфигурации СУБД:

--tune – запуск утилиты;

--tune-stype=ssd – тип носителя ssd;

--tune-app=1C – тип профиля нагрузки, 1С;

--tune-repl=yes – использование репликации;

Команда в терминале ОС будет иметь следующий вид:

./jatoba-setup initdb jatoba-6 --tune --tune-stype=ssd --tune-app=1C --tune-repl=yes

В итоге СУБД будет проинициализирована и сконфигурирована под заданные параметры. В конфигурационном файле «postgresql.conf», будет ссылка (include) на конфигурационный файл «ja_tune.conf», который будет расположен в каталоге

/var/lib/jatoba/6/data.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image44.png)

Рисунок 3.20 - Ссылка на сгенерированный файл «ja_tune.conf» в конфигурационном файле «postgresql.conf»

В содержании конфигурационного файла «ja_tune.conf» указываются входные параметры расчета и далее полученные расчетные значения параметров СУБД.

### Пакеты установки СУБД «Jatoba»

СУБД «Jatoba» поставляется в формате сертифицированной и коммерческой версии.

Данные версии подразделяются на:

- «Для использования в ИС»;

- «Jatoba 1С».

В версии «Jatoba 1С» имя пакета дополняется суффиксом «1с».

В версии «Для использования в ИС» дополнительный суффикс отсутствует.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

### Базовая установка

Пакеты jatoba<ver>-client, jatoba<ver>-contrib, jatoba<ver>-libs, jatoba<ver>-server являются обязательными для установки СУБД:

- jatoba<ver>-client – клиентская часть СУБД;

- jatoba<ver>-contrib – вспомогательный набор модулей (расширений СУБД);

- jatoba<ver>-libs – основные библиотеки для клиентской и серверной части СУБД;

- jatoba<ver>-server – серверная часть СУБД.

Установка данных пакетов разными способами (зависит от вида полученного дистрибутива и/или файлов дистрибутива) подробно описана в подразделах [3.1](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux), [3.5](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория) и [3.7](#порядок-установки-субд-jatoba-из-debrpm-файлов).

В пункте [3.3.3](#установка-пакетов-расширяющих-возможности-субд) описана установка дополнительных пакетов, расширяющих возможности СУБД.

### Установка клиентской части СУБД «Jatoba» на ОС семейства GNU/Linux

Пакеты jatoba<ver>-client, jatoba<ver>-libs являются обязательными для установки клиентской части СУБД:

- jatoba<ver>-client – клиентская часть СУБД;

- jatoba<ver>-libs – основные библиотеки для клиентской и серверной части СУБД.

Установка данных пакетов разными способами (зависит от вида полученного дистрибутива и/или файлов дистрибутива) подробно описана в подразделах [3.1](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux), [3.5](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория) и [3.7](#порядок-установки-субд-jatoba-из-debrpm-файлов).

Например, установка через пакетный менеджер для Debian систем «dpkg». Синтаксис команды будет следующим:

dpkg -i jatoba<ver>-client_X.X.X-X_amd64.deb jatoba<ver>-libs_X.X.X-X_amd64.deb

Использование пакетного менеджера «dpkg» требует ввода полного имени устанавливаемых пакетов, как представлено ниже:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image45.png)

dpkg -i jatoba4-client_4.5.3-1061_amd64.deb jatoba4-libs_4.5.3-1061_amd64.deb

Рисунок 3.21 – Установка клиентской части СУБД через пакетный менеджер «dpkg»

В том числе возможна установка клиентской части СУБД через инструмент командной строки APT (Advanced Package Tool).

Команда будет следующей:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image46.png)

apt-get install jatoba<ver>-client jatoba<ver>-libs

Рисунок 3.22 – Установка клиентской части СУБД через APT После чего в каталоге:

/usr/jatoba-<ver>/bin

будут установлены исполняемые файлы в том числе и «psql», который требуется для подключения пользователя к СУБД.

Приведенная установка клиентской части СУБД не требует формирования локального репозитория.

### Установка пакетов, расширяющих возможности СУБД

Установка расширений СУБД предполагает установку определенных дополнительных пакетов, входящих в состав дистрибутива СУБД «Jatoba». Отдельные пакеты из состава СУБД «Jatoba» требуют установки либо вспомогательных пакетов из состава ОС, либо вспомогательных пакетов, разработанных третьими лицами (сторонними компаниями).

Описание установки расширений и дополнений из состава СУБД, приведенное в п.п. [3.3.3.1](#набор-разработчика) – [3.3.3.21](#_bookmark26), дается в следующем порядке:

- указывается список пакетов из состава дистрибутива СУБД «Jatoba», которые включают это расширение, и список сторонних зависимостей, необходимых для этого расширения;

- при наличии сторонних зависимостей указывается команда их установки;

- описывается команда установки пакетов расширения.

Команда установки пакетов в разных дистрибутивах Linux может отличаться, также могут отличаться некоторые шаги установки, связанные с отдельными особенностями дистрибутивов Linux и способами распространения продуктов третьих лиц. Описание команды установки дано в виде группы команд для четырех отличительных видов дистрибутивов Linux:

1)  классический Debian Linux и все дистрибутивы от него производные:

apt-get install <список имен пакетов>

2)  классический Red Hat и все дистрибутивы от него производные:

yum install <список имен пакетов>

3)  ALTLinux – дистрибутив, построенный на базе RPM-пакетов, но использующий APT в качестве высокоуровневого менеджера пактов (команда установки выглядит аналогично Debian):

apt-get install <список имен пакетов>

Все необходимые отличия, связанные с установкой в разных видах дистрибутивов Linux, также даны с пометкой соответствующей ОС.

Ряд компонентов для корректной установки требуют зависимые пакеты, часть из которых отсутствует в системных репозиториях операционных систем (CentOS 7, RHEL 7, Oracle 8, RHEL 8), поэтому перед установкой пакетов, расширяющих базовые функциональные возможности СУБД, рекомендуется добавить в систему EPEL репозитории.

Порядок установки EPEL репозиториев:

- Для CentOS 7/RHEL 7/Oracle 8:

  1)  Выполнить установку репозиториев:

yum install epel-release

2)  Обновить состояние репозиториев:

yum makecache

3)  Выполнить обновление:

yum update -y

- Для RHEL 8:

  1)  В subscription-manager включить вспомогательный репозиторий:

subscription-manager repos --enable codeready-builder-for-rhel-8-\$(arch)-rpms

2)  Выполнить установку репозитория:

dnf install <https://dl.fedoraproject.org/pub/epel/epel->release-latest-8.noarch.rpm

3)  Обновить состояние репозиториев:

yum makecache

4)  Выполнить обновление:

yum update -y

### Набор разработчика

Список пакетов:

- jatoba<ver>-dev – библиотеки и заголовочные файлы для создания собственных расширений для Jatoba/PostgreSQL;

- jatoba<ver>-docs – англоязычная документация для администраторов, пользователей и разработчиков;

- jatoba<ver>-test – набор утилит и библиотек для проведения функционального тестирования СУБД и ее расширений.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-dev jatoba<ver>-docs jatoba<ver>-test

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-devel jatoba<ver>-docs jatoba<ver>-test

- ОС ALTLinux:

apt-get install jatoba<ver>-devel jatoba<ver>-docs jatoba<ver>-test

- ОС openSUSE:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image47.png)

zypper install jatoba<ver>-devel jatoba<ver>-docs jatoba<ver>-test

Рисунок 3.23 – Установка набора разработчика на примере ОС GNU/Linux Debian

### Пакет поддержки 1C

Список пакета:

- jatoba<ver>-1csupport – в составе пять специальных модулей (расширений), необходимые для работы 1C.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-1csupport

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-1csupport

- ОС ALTLinux:

apt-get install jatoba<ver>-1csupport

- ОС openSUSE:

zypper install jatoba<ver>-1csupport

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image48.png)

Рисунок 3.24 – Установка поддержки 1С на примере ОС GNU/Linux Debian

1.  **Поддержка миграции из Oracle Database®**

Список пакетов:

- jatoba<ver>-oracle-fdw – расширение, которое предоставляет обертку доступа к внешним данным, находящимся в СУБД Oracle Database®;

- jatoba<ver>-orafce – расширение, которое предоставляет набор функций и операторов, совместимых с СУБД Oracle Database®.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка сторонних пакетов:

Детально описана в документации компании разработчика, доступной по ссылке: [<u>Installing Oracle Instant Client Packages</u>](https://docs.oracle.com/en/database/oracle/oracle-database/21/lacli/instant-client-install-linux.html#GUID-CD3C72C6-110E-453A-8B69-2961D37EB70B) (рекомендуем обратить внимание на версию устанавливаемой библиотеки).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">
<p><strong>Только для ОС Astra Linux версий 1.7, 1.8; ОС Основа</strong></p>
<p>Установка внешних зависимостей, в виде клиентских библиотек СУБД Oracle Database® (пакеты Oracle Instance Client версии 12.2), в режиме «Замкнутая программная среда (ЗПС)» невозможна, так как данные клиентские библиотеки не подписаны ЭЦП, соответственно, не являются доверительными в режиме ЗПС.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Пакеты jatoba4-oracle-fdw и jatoba4-orafce можно устанавливать и использовать отдельно друг от друга</p>
</td>
</tr>
</tbody>
</table>

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-oracle-fdw jatoba<ver>-orafce

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-oracle_fdw jatoba<ver>-orafce

- ОС ALTLinux:

apt-get install jatoba<ver>-oracle_fdw jatoba<ver>-orafce

- ОС openSUSE:

zypper install jatoba<ver>-oracle_fdw jatoba<ver>-orafce

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image49.png)

Рисунок 3.25 – Установка компонент миграции на примере ОС GNU/Linux Debian

### «jaDog» – управление режимом работы узлов кластера

Компонент «jaDog» входит в состав СУБД «Jatoba», предназначен для контроля состояния серверов (далее – узлов) кластера СУБД и обеспечивает выполнение функций обработки отказа и восстановления узлов кластера в автоматическом режиме.

Список пакетов:

jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

т.е. устанавливается при [<u>базовой установке СУБД</u>](#базовая-установка) (пункт [3.3.1](#базовая-установка)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-01 «Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog». Пример установки приведен в Приложении 3 документа.

### «jаPooler» – балансировка подключений пользователей к СУБД

Компонент «jaPooler» предназначен для управления соединениями, позволяет подключиться к СУБД большому числу клиентов без существенного снижения производительности.

Список пакетов:

jatoba<ver>-japooler jatoba<ver>-server jatoba<ver>-client jatoba<ver>-libs

Внешние зависимости: не требует

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

1.  **«ja_CSum» – контроль целостности**

Компонент «ja_CSum» предназначен для выполнения периодических фоновых проверок файлов, расположенных в ключевых директориях СУБД.

Список пакетов:

jatoba<ver>-ja_csum

Внешние зависимости: не требует

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

2.  **«ja_Log» – централизованный сбор записей событий СУБД**

Компонент «ja_Log» предназначен для сбора событий безопасности с целевых СУБД «Jatoba» в служебную СУБД «Jatoba data safe».

Список пакетов:

jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs

jatoba<ver>-ja-log

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-12 «Руководство по настройке. Часть 12. Централизованный сбор записей событий в СУБД. Компонент «ja_Log». Пример установки приведен в Приложении документа.

### «JCS (Jatoba crypto access storage)» – сокрытие информации в файлах данных СУБД

Компонент «JCS» предназначен для выполнения сокрытия данных в объектах СУБД и предотвращает возможность ознакомления с преобразованными данными при их утрате.

Список пакетов:

jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server jatoba<ver>-jcs

Внешние зависимости: не требует

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

3.  **«SQL_Firewall» – выявление и предотвращение исполнения нетипичных SQL-запросов**

Компонент «SQL_Firewall» предназначен для защиты базы данных от SQL-инъекций или неожиданных запросов.

Список пакетов:

jatoba<ver>-server jatoba<ver>-sql-firewall

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-17 «Руководство по настройке. Часть 17. Выявление и предотвращение исполнения нетипичных SQL-запросов. Компонент «SQL_Firewall».

4.  **«pg_Cryogen» – компрессия данных СУБД**

Компонент «pg_Cryogen» предназначен для компрессии данных в СУБД. Список пакетов:

jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

jatoba<ver>-pg-cryogen

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-10 «Руководство по настройке. Часть 10. Компрессия данных СУБД. Компонент «pg_Cryogen». Пример установки приведен в Приложении 1 документа.

### «JDV (Jatoba Database Vault)» – контроль субъектов доступа

Компонент «JDV» предназначен для ограничения доступа пользователей СУБД к защищаемым объектам БД.

Список пакетов:

jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server jatoba<ver>-jdv

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-02 Руководство по настройке. Часть 2. Контроль субъектов доступа. Компонент «Jatoba Database Vault».

5.  **«ja_Sync_LDAP» – компонент синхронизации учетных записей с MS Active Directory**

Компонент обеспечивает администратора инструментом на уровне СУБД, выполняющим синхронизацию списка пользователей между внешней службой аутентификации (службы каталогов LDAP/Active Directory) и СУБД.

Список пакетов:

jatoba<ver>-ja-sync-ldap

Внешние зависимости: не требует

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

### «pgAudit» – аудит действий пользователя

Список пакетов:

- jatoba<ver>-pgaudit – расширение к СУБД, встраиваемое в конвейер обработки запросов и регистрирующее доступ пользователей к объектам СУБД (в основном к таблицам и функциям).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-pgaudit

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-pgaudit

- ОС ALTLinux:

apt-get install jatoba<ver>-pgaudit

- ОС openSUSE:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image50.png)

zypper install jatoba<ver>-pgaudit

Рисунок 3.26 – Установка расширения аудита на примере ОС GNU/Linux Debian

### «pgauditlogtofile» – дополнительный компонент к компоненту pgAudit

Список пакетов:

- jatoba<ver>-pgauditlogtofile – расширение к СУБД, дополняющее функциональные возможности расширения «pgAudit», перенаправляя строки журнала аудита СУБД в независимый файл.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-pgauditlogtofile

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-pgauditlogtofile

- ОС ALTLinux:

apt-get install jatoba<ver>-pgauditlogtofile

- ОС openSUSE:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image51.png)

zypper install jatoba<ver>-pgauditlogtofile

Рисунок 3.27 – Установка расширения аудита на примере ОС GNU/Linux Debian

### «pgBadger» – анализатор журналов событий

Список пакетов:

- jatoba4-pgbadger – отдельный исполняемый файл на языке Perl, который работает отдельно от СУБД, но требует доступа к файлам событий СУБД.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

1)  perl и несколько perl-модулей для генерации файлов в формате CSV и JSON;

2)  опционально может использовать SSH для удаленного доступа.

Установка данного расширения приведена в документе 643.72410666.00067-08 98 01-03 «Руководство по настройке. Часть 3. Настройка модуля для анализа файлов регистрации событий СУБД. Модуль «pgBadger».

1.  **«pg_ProBackup» – расширенное средство резервного копирования**

Список пакетов:

- jatoba<ver>-pg_probackup – отдельный исполняемый файл, который работает отдельно от СУБД, но требует доступа к СУБД для выполнения функций резервирования / контроля / восстановления данных;

- jatoba<ver>-ptrack – расширение к СУБД, которым может пользоваться

«pg_ProBackup» для выполнения инкрементального резервного копирования (один из режимов работы «pg_ProBackup»).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка данного компонента приведена в документе 643.72410666.00067-08 98 01-

04\. «Руководство по настройке. Часть 4. Расширенное резервное копирование. Компонент

«pg_ProBackup».

2.  **«pg_Profile» – анализ производительности СУБД**

Список пакетов:

- jatoba<ver>-pg_profile – расширение к СУБД, позволяющее собирать и просматривать параметры и метрики функционирования различных баз данных (БД) в различное время, а также строить отчеты по этим данным и сравнивать их между собой для выявления проблемных мест.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка данного расширения приведена в документе 643.72410666.00067-08 98 01-06 «Руководство по настройке. Часть 6. Настройка модуля для анализа производительности СУБД. Модуль «pg_Profile».

### «pgSQL-HTTP» – доступ к сайтам по HTTP/S протоколу из СУБД

Список пакетов:

- jatoba<ver>-pgsql-http – расширение к СУБД, позволяющее выполнять запросы к внешним веб-серверам (http/https-запросы).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка зависимостей:

- ОС GNU/Linux Debian и производные от нее:

apt-get install libcurl-gnutls

- ОС GNU/Linux Red Hat и производные от нее:

yum install libcurl

- ОС ALTLinux:

apt-get install libcurl

- ОС openSUSE:

zypper install libcurl

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-pgsql-http

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-pgsql-http

- ОС ALT Linux:

apt-get install jatoba<ver>-pgsql-http

- ОС openSUSE:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image52.png)

zypper install jatoba<ver>-pgsql-http

Рисунок 3.28 – Установка расширения на примере ОС GNU/Linux Debian

1.  **«pg_Variables» – создание переменных в сессии пользователя**

Список пакетов:

- ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3">
<p>apt-get install jatoba&lt;ver&gt;-pg-variables</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>№ изменения:</p>
</td>
<td>
<p>Подпись отв. лица:</p>
</td>
<td>
<p>Дата внесения изм:</p>
</td>
</tr>
</tbody>
</table>

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-pg_variables

- ОС ALTLinux:

apt-get install jatoba<ver>-pg_variables

- ОС openSUSE:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image53.png)

zypper install jatoba<ver>-pg_variables

Рисунок 3.29 – Установка расширения на примере ОС GNU/Linux Debian

### Дополнительные языки хранимых процедур

Список пакетов:

- jatoba<ver>-plperl – добавление в СУБД поддержки написания хранимых процедур на языке perl;

- jatoba<ver>-plpython – добавление в СУБД поддержки написания хранимых процедур на языке python версии 2;

- jatoba<ver>-plpython3 – добавление в СУБД поддержки написания хранимых процедур на языке python версии 3.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Перечисленные пакеты не зависят друг от друга и могут быть поставлены по отдельности в любом порядке. Команды установки показаны на примере пакета jatoba4-plpython3.

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-plpython3

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-plpython3

- ОС ALTLinux:

apt-get install jatoba<ver>-plpython3

- ОС openSUSE:

zypper install jatoba<ver>-plpython3

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image54.png)

Рисунок 3.30 – Установка расширения на примере ОС GNU/Linux Debian

### «PlsPgSQL» – обфускация исходных текстов хранимых процедур

Список пакетов:

- ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>Внешние зависимости: требуется установка следующих внешних продуктов:</p>

<ol type="1">
<li><p>lsb-cprocsp – криптопровайдер «КриптоПро CSP» для различных операционных систем разработанный ООО «КРИПТО-ПРО» (не входит в состав дистрибутива);</p></li>
<li><p>gis-cryptoplatform17 – библиотека «КриптоПлатформа» для централизованной работы с криптоправайдерами в ОС, продукт поставляет ООО «Газинформсервис».</p></li>
</ol></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Только для ОС Astra Linux версий 1.7, 1.8; ОС Основа</strong></p>
<p>Установка внешней зависимостей, в виде криптопровайдера «КриптоПро CSP», в режиме «Замкнутая программная среда (ЗПС)» невозможна, так как данные</p>
</td>
</tr>
</tbody>
</table>

клиентские библиотеки не подписаны ЭЦП, соответственно, не являются доверительными в режиме ЗПС.

Список сторонних пакетов:

1)  lsb-cprocsp – криптопровайдер «КриптоПро CSP» версии 5.0. Данный пакет распространяется в виде самостоятельного DEB/RPM дистрибутива. Для установки необходимо обратиться к документации на официальном сайте разработчика КриптоПро – для доступа требуется зарегистрированный пользователь по правилам сайта [<u>https://cryptopro.ru/user</u>)](https://cryptopro.ru/user);

2)  gis-cryptoplatform17 – библиотека «КриптоПлатформа» версия 1.7.3-4. Данный пакет распространяется в составе дистрибутива СУБД «Jatoba» и устанавливается автоматически по зависимостям при установке пакета jatoba<ver>-plspgsql.

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-plspgsql

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-plspgsql

- ОС ALTLinux:

apt-get install jatoba<ver>-plspgsql

- ОС openSUSE:

zypper install jatoba<ver>-plspgsql

### «PostGIS» – организация работы с геоданными

Список пакетов:

- jatoba<ver>-postgis – расширение к СУБД, а также утилита получения и преобразования данных, определяемой формат между СУБД и внешними приложениями картографии.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-postgis

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-postgis

- ОС ALTLinux:

apt-get install jatoba<ver>-postgis

- ОС openSUSE:

zypper install jatoba<ver>-postgis

### «SecurityProfile» – парольные политики

Список пакетов:

- jatoba<ver>-securityprofile – расширение к СУБД, позволяющее формировать парольные политики.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакета:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-securityprofile

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-securityprofile

- ОС ALTLinux:

apt-get install jatoba<ver>-securityprofile

- ОС openSUSE:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image55.png)

zypper install jatoba<ver>-securityprofile

Рисунок 3.31 – Установка расширения на примере ОС GNU/Linux Debian

1.  <span id="_bookmark26" class="anchor"></span>**«pg_Task» – планировщик асинхронных задач**

Список пакетов:

- jatoba<ver>-pg_task – расширение к СУБД, позволяющее задавать задачи на языке SQL для их выполнения в заданное время в заданной базе данных от заданного пользователя.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка данного расширения приведена в документе 643.72410666.00067-08 98 01-05 «Руководство по настройке. Часть 5. Планирование заданий СУБД. Компонент

«pg_Task».

1.  **«ja_Plan_Manager» – компонент создания планов запросов в БД**

Список пакетов:

- jatoba<ver>-ja-plan-manager – расширение к СУБД, предназначенное для создания, оптимизации, экспорта/импорта и подмены планов запросов в БД.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка данного расширения приведена в документе 643.72410666.00067-08 98 01-

21 «Руководство по настройке. Часть 21. Управление планами запросов. Компонент

«ja_Plan_Manager».

2.  **«pg_hint_plan» – компонент корректировки запросов**

Список пакетов:

- jatoba<ver>-pg-hint-plan – расширение к СУБД, предназначенное для корректировки планов выполнения, применяя так называемые «указания», записываемые в виде простых описаний в SQL-комментариях особого вида.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-pg-hint-plan

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-pg-hint-plan

- ОС ALTLinux:

apt-get install jatoba<ver>-pg-hint-plan

- ОС openSUSE:

zypper install jatoba<ver>-pg-hint-plan

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image56.png)

Рисунок 3.32 – Установка пакета jatoba<ver>-pg-hint-plan в OC Ubuntu

3.  **«pg_store_plans» – компонент контроля выполненных планов запросов**

Список пакетов:

- jatoba<ver>-pg-store-plans – расширение к СУБД, предназначенное для контроля выполненных планов запросов.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-pg-store-plans

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-pg-store-plans

- ОС ALTLinux:

apt-get install jatoba<ver>-pg-store-plans

- ОС openSUSE:

zypper install jatoba<ver>-pg-store-plans

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image57.png)

Рисунок 3.33 – Установка пакета jatoba<ver>-pg-store-plans в OC Ubuntu

4.  **«pg_ulid» – компонент поддержки лексографического идентификатора**

Список пакетов:

- jatoba<ver>-pg-ulid – расширение к СУБД, предназначенное для поддержки типа данных ULID.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-pg-ulid

- ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-pg_ulid

- ОС ALTLinux:

apt-get install jatoba<ver>-pg_ulid

- ОС openSUSE:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image58.png)

zypper install jatoba<ver>-pg_ulid

Рисунок 3.34 – Установка пакета jatoba<ver>-pg-ulid в OC Ubuntu

5.  **«ja_seceventlog» – компонент записи событий информационной безопасности**

Список пакетов:

- jatoba<ver>-ja_seceventlog – расширение к СУБД, предназначенное для записи событий информационной безопасности СУБД.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

− ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-ja-seceventlog

− ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-ja_seceventlog

apt-get install jatoba<ver>-ja_seceventlog

− ОС openSUSE:

zypper install jatoba<ver>-ja_seceventlog

### «rum» – компонент поддержки индекса RUM

Список пакетов:

- jatoba<ver>-rum – расширение к СУБД, предназначенное для доступа к индексу RUM СУБД.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

− ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-rum

− ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-rum

− ОС ALTLinux:

apt-get install jatoba<ver>-rum

− ОС openSUSE:

zypper install jatoba<ver>-rum

6.  **«ja_Similar» – компонент полнотекстового поиска**

Список пакетов:

- jatoba<ver>-ja-similar – расширение к СУБД, предназначенное для полнотекстового поиска и определения похожих текстов.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

− ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-ja-similar

− ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-ja-similar

− ОС ALTLinux:

apt-get install jatoba<ver>-ja-similar

− ОС openSUSE:

zypper install jatoba<ver>-ja-similar

7.  **«ja_Inventory» – компонент инвентаризации СУБД**

Список пакетов:

- ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

− ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-ja-inventory

− ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-ja-inventory

− ОС ALTLinux:

apt-get install jatoba<ver>-ja-inventory

− ОС openSUSE:

zypper install jatoba<ver>-ja-inventory

8.  **«pg_repack» – компонент реорганизации таблиц**

Установка компонента описана в документе 643.72410666.00067-08 98 01-24

«Руководство по настройке. Часть 24. Реорганизация таблиц. Компонент «pg_repack».

### tsvector2 – компонент расширенного типа данных tsvector

Список пакетов:

- ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка пакетов:

− ОС GNU/Linux Debian и производные от нее:

apt-get install jatoba<ver>-tsvector2

− ОС GNU/Linux Red Hat и производные от нее:

yum install jatoba<ver>-tsvector2

− ОС ALTLinux:

apt-get install jatoba<ver>-tsvector2

− ОС openSUSE:

zypper install jatoba<ver>-tsvector2

### Компоненты поддержки мониторинга СУБД

Установка компонентов:

- jatoba\*_node_exporter;

- jatoba\*_postgres_exporter;

- jatoba\*_sql_exporter;

- системы «Prometheus»;

- утилита «alertmanager»;

описана в документе 643.72410666.00067-08 98 01-28 «Руководство по настройке.

Часть 28. Поддержка мониторинга СУБД.

### Порядок установки СУБД «Jatoba» на ОС GNU/Linux, основанной на Debian из локального репозитория

Для установки СУБД «Jatoba» необходимо выполнить следующую последовательность действий:

1)  Создать каталог /localrepo, выполнив команду:

mkdir /localrepo

2)  В каталог /localrepo скопировать необходимые файлы для установки СУБД «Jatoba».

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

Структура каталога дистрибутива для всех поддерживаемых ОС GNU/Linux, основанных на Debian, описана в таблице [П 1](#_bookmark89) Приложения [1](#приложение-1).

3)  Проверить результат копирования всех файлов, перейдя в каталог /localrepo и выполнив команду (см. рис. [3.35](#_bookmark28)):

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image59.png)

ls -l

<span id="_bookmark28" class="anchor"></span>Рисунок 3.35 – Просмотр каталога /localrepo

4)  Установить открытый ключ репозитория при помощи команды (см. рис. [3.36](#_bookmark29)):

apt-key add /localrepo/DEB-GPG-KEY-Jatoba

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image60.png)

<span id="_bookmark29" class="anchor"></span>Рисунок 3.36 – Установка открытого ключа

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

Скопировать ключ репозитория:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Добавить описание нового репозитория в список:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt;</p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Здесь jatoba-<ver> - версия устанавливаемой СУБД «Jatoba». Затем выполнить [6)](#_bookmark30) из данного подраздела.

5)  Создать файл с описанием локального репозитория в системе, имя файла репозитория и его содержимое для соответствующей ОС указано в таблице [П 2](#_bookmark90) Приложения [1](#приложение-1):

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image61.png)

nano /etc/apt/sources.list.d/jatoba-4.list

Рисунок 3.37 – Описание локального репозитория

6)  <span id="_bookmark30" class="anchor"></span>Обновить описания пакетов при помощи команды (см. рис. [3.38](#_bookmark31)):

apt-get update

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image62.png)

<span id="_bookmark31" class="anchor"></span>[3.39](#_bookmark32)):

Рисунок 3.38 – Обновление описания пакетов

7)  Установить основные пакеты СУБД «Jatoba» при помощи команды (см. рис.

apt-get install jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

При необходимости установки дополнительных пакетов см. раздел [3.3.3](#установка-пакетов-расширяющих-возможности-субд)

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image63.png)

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

8)  <span id="_bookmark33" class="anchor"></span>Перейти в директорию расположения исполняемых файлов СУБД «Jatoba», выполнив команду (см. рис. [3.40](#_bookmark34)):

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image64.png)

cd /usr/jatoba-<ver>/bin/

<span id="_bookmark34" class="anchor"></span>Рисунок 3.40 – Переход в директорию установки

9)  Инициализировать каталог данных СУБД «Jatoba» при помощи команды (см. рис. [3.41](#_bookmark35)):

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image65.png)

./jatoba-setup initdb jatoba-<ver>

<span id="_bookmark35" class="anchor"></span>Рисунок 3.41 – Инициализация каталога СУБД

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">
<p>При инициализации каталога данных можно явно указать язык и кодировку, для этого следует добавить переменную окружения:</p>
<p>PGSETUP_INITDB_OPTIONS="--locale=ru_RU.utf8</p>
<p>--encoding=UTF-8" ./jatoba-setup initdb jatoba-&lt;ver&gt;</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">
<p>При ошибках «Data directory is not empty!» или «Initializing database… mkdir: невозможно создать каталог «var/lib/jatoba/&lt;ver&gt;/data/log»: Файл существует failed, see /var/lib/jatoba/&lt;ver&gt;/initdb.log» нужно ввести команду принудительного удаления каталога и его содержимого.</p>
</td>
</tr>
<tr>
<td style="text-align: left;">
<p>Перед удалением необходимо убедиться, что все нужные данные сохранены.</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>rm -rf /var/lib/jatoba/&lt;ver&gt;/data/*</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

10) Администратору СУБД рекомендуется изменить другие параметры в конфигурационном файле postgresql.conf, в зависимости от условий эксплуатации СУБД (дополнительная информация описана в документе «Защищенная система управления базами данных «Jatoba». Руководство администратора»).

11) При необходимости добавить службу Jatoba в автозапуск в соответствии с пунктом [3.6](#добавление-в-автозапуск-службы-jatoba-в-ос-gnulinux).

Установка СУБД «Jatoba» завершена.

### Порядок установки СУБД «Jatoba» на ОС семейства GNU/Linux, основанной на RPM из локального репозитория

Для установки СУБД «Jatoba» необходимо выполнить следующую последовательность действий:

1)  Создать каталог /localrepo, выполнив команду:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image66.png)

mkdir /localrepo

Рисунок 3.42 – Создание каталога localrepo

2)  В каталог /localrepo скопировать необходимые файлы для установки СУБД

«Jatoba».

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

Структура каталога дистрибутива для всех поддерживаемых ОС GNU/Linux, основанных на RPM, описана в таблице [П1](#_bookmark89) Приложения [1](#приложение-1).

3)  Проверить результат копирования всех файлов, перейдя в каталог /localrepo и выполнив команду (см. рис. [3.43](#_bookmark37)):

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image67.png)

ls -l

<span id="_bookmark37" class="anchor"></span>Рисунок 3.43 – Просмотр каталога /localrepo

4)  Установить открытый ключ репозитория при помощи команды (см. рис. [3.44](#_bookmark38)):

### ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

В указанной ОС данный шаг пропускается. Проверка целостности и достоверности устанавливаемых пакетов осуществляется с использованием контрольных сумм, указанных в формуляре.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image68.png)

rpm --import /localrepo/RPM-GPG-KEY-Jatoba

<span id="_bookmark38" class="anchor"></span>Рисунок 3.44 – Установка открытого ключа

5)  Создать файл с описанием локального репозитория в системе, имя файла репозитория и его содержимое для соответствующей ОС указано в таблице [П2](#_bookmark90) Приложения [1](#приложение-1):

nano /etc/yum.repos.d/jatoba-<ver>.repo

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image69.png)

Рисунок 3.45 – Создание файла с описанием репозитория

Например, для РЕД ОС 7.2 Муром, при установке СУБД «Jatoba» с версией ядра 4, необходимо добавить следующее описание репозитория в файл /etc/yum.repos.d/jatoba-4.repo:

\[jatoba-4\]

name=Jatoba 4 Official Repository baseurl=file:///localrepo enabled=1

gpgcheck=1

gpgkey=file:///localerepo/RPM-GPG-KEY-Jatoba

### ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Описание репозитория необходимо добавлять в файл

/etc/apt/sources.list.d/jatoba-<ver>.list, аналогично тому, как это делается в системах, основанных на Debian:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>rpm file:///localrepo x86_64 classic</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

6)  Обновить описания пакетов при помощи команды (см. рис. [3.46](#_bookmark39)):

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image70.png)

yum makecache

<span id="_bookmark39" class="anchor"></span>Рисунок 3.46 – Обновление описания пакетов

### ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Обновить описание пакетов при помощи команды (см. рис. [3.47](#_bookmark40)):

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>apt-get update</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image71.jpeg)

<span id="_bookmark40" class="anchor"></span>Рисунок 3.47 – Обновление описания пакетов

7)  Установить основные пакеты СУБД «Jatoba» при помощи команды (см. рис. [3.48](#_bookmark41)):

yum install jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

Пакеты jatoba<ver>-client, jatoba<ver>-contrib, jatoba<ver>-libs и jatoba<ver>-server являются обязательными для установки СУБД.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image72.png)

<span id="_bookmark41" class="anchor"></span>Рисунок 3.48 – Установка основных пакетов

### ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установить основные пакеты СУБД «Jatoba» при помощи команды:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>apt-get install jatoba&lt;ver&gt;-client jatoba&lt;ver&gt;-contrib jatoba&lt;ver&gt;-libs jatoba&lt;ver&gt;-server</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

8)  Перейти в директорию расположения исполняемых файлов СУБД «Jatoba», выполнив команду (см. рис. [3.49](#_bookmark42)):

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image73.png)

cd /usr/jatoba-<ver>/bin/

<span id="_bookmark42" class="anchor"></span>Рисунок 3.49 – Переход в директорию установки

9)  Инициализировать каталог данных СУБД «Jatoba» при помощи команды (см. рис. [3.50](#_bookmark43)):

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image74.png)

./jatoba-setup initdb jatoba-<ver>

<span id="_bookmark43" class="anchor"></span>Рисунок 3.50 – Инициализация каталога СУБД

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">
<p>При ошибках «Data directory is not empty!» или «Initalizing database… mkdir: невозможно создать каталог «var/lib/jatoba/&lt;ver&gt;/data//log»: Файл существует failed, see /var/lib/jatoba/&lt;ver&gt;/initdb.log» нужно ввести команду принудительного удаления каталога и его содержимого.</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Перед удалением необходимо убедиться, что все нужные данные сохранены.</p>
<p>rm –rf /var/lib/jatoba/&lt;ver&gt;/data/*</p>
</td>
</tr>
</tbody>
</table>

10) ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

«Защищенная система управления базами данных «Jatoba». Руководство администратора»).

11) При необходимости добавить службу Jatoba в автозапуск в соответствии с пунктом [3.6](#добавление-в-автозапуск-службы-jatoba-в-ос-gnulinux).

Установка СУБД «Jatoba» завершена.

### Добавление в автозапуск службы Jatoba в ОС GNU/Linux

Для загрузки СУБД «Jatoba» вместе с ОС необходимо выполнить следующие действия:

1)  Запустить сервис.

2)  Добавить его в список автозапуска при старте ОС, выполнив команды (см. рис. [3.51](#_bookmark45)):

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image75.png)

systemctl start jatoba-<ver> systemctl enable jatoba-<ver>

<span id="_bookmark45" class="anchor"></span>Рисунок 3.51 – Запуск сервиса и добавление в автозагрузку

### Порядок установки СУБД «Jatoba» из DEB/RPM-файлов

Установка из файлов является опциональным способом и требует больше ручной работы от пользователя по установке зависимых пакетов. Пользователям рекомендуется производить установку методами, описанными в подразделах [3.1](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux) и/или [3.5](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория) в зависимости от ОС.

### Установка СУБД «Jatoba» из DEB-файлов

Установка из файлов предполагает, что у пользователя имеется основной набор DEB-файлов, которые он может скачать с официального компакт-диска:

- jatoba<ver>-client;

- jatoba<ver>-contrib;

- jatoba<ver>-libs;

- jatoba<ver>-server.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

При необходимости установки дополнительных пакетов см. пункт [3.3.3](#установка-пакетов-расширяющих-возможности-субд)

Для установки СУБД «Jatoba» из DEB-файлов необходимо выполнить следующую последовательность действий:

1)  Перейти в директорию дистрибутива, где расположены установочные DEB-файлы:

cd <путь до директории>

2)  Выполнить команду установки основных пакетов (см. рис. [3.52](#_bookmark48)):

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image76.png)

dpkg -i jatoba<ver>-client_X.X.X-X_amd64.deb jatoba<ver>-contrib_X.X.X-X_amd64.deb jatoba<ver>-libs_X.X.X-X_amd64.deb jatoba<ver>-server_X.X.X-X[1](#_bookmark49)_amd64.deb

<span id="_bookmark48" class="anchor"></span>Рисунок 3.52 – Команда установки основных пакетов

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

<span id="_bookmark49" class="anchor"></span><sup>1</sup> Номер версии уточняется при поставке изделия

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image77.png)

<span id="_bookmark50" class="anchor"></span>Рисунок 3.53 – Ошибки неразрешенных зависимостей

3)  Установить все оставшиеся зависимости в автоматическом режиме (см. рис. [3.54](#_bookmark51)):

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image78.png)

apt-get install –f

<span id="_bookmark51" class="anchor"></span>Рисунок 3.54 – Установка оставшихся зависимостей

Дальнейшая установка СУБД «Jatoba» аналогична порядку, описанному в подразделе [3.1](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux), с шага перехода в директорию расположения исполняемых файлов.

### Установка СУБД «Jatoba» из RPM-файлов

Установка из файлов предполагает, что у пользователя имеется основной набор RPM-файлов, которые он может скачать с официального компакт-диска:

- jatoba<ver>-client;

- jatoba<ver>-contrib;

- jatoba<ver>-libs;

- jatoba<ver>-server.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

При необходимости установки дополнительных пакетов см. пункт [3.3.3](#установка-пакетов-расширяющих-возможности-субд).

Для установки СУБД «Jatoba» из RPM-файлов необходимо выполнить следующую последовательность действий:

1)  Перейти в директорию дистрибутива, где расположены установочные RPM-файлы:

cd <путь до директории>

2)  Выполнить команду установки основных пакетов (см. рис. [3.55](#_bookmark54)):

rpm -i jatoba<ver>-client_X.X.X-X_amd64.rpm jatoba<ver>-contrib_X.X.X-X_amd64.rpm jatoba<ver>-libs_X.X.X-X_amd64.rpm jatoba<ver>-server_X.X.X-X[2](#_bookmark53)_amd64.rpm

<span id="_bookmark53" class="anchor"></span><sup>2</sup> Номер версии уточняется при поставке изделия

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image79.png)

<span id="_bookmark54" class="anchor"></span>Рисунок 3.55 – Команда установки основных пакетов

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

3)  Выполнить установку зависимых пакетов с помощью одной из следующих команд:

yum install <имя пакета> rpm -i <имя пакета>

### ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Установка зависимых пакетов происходит при помощи следующей команды (см. рис. [3.56](#_bookmark55)):

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>apt-get install &lt;имя пакета&gt;</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image80.png)

<span id="_bookmark55" class="anchor"></span>Рисунок 3.56 – Установка зависимого пакета «glibc»

Дальнейшая установка СУБД «Jatoba» аналогична, описанному в подразделе [3.1](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux), с шага [8)](#_bookmark33) переход в директорию расположения исполняемых файлов.

## УСТАНОВКА СУБД «JATOBA» НА ОС СЕМЕЙСТВА MICROSOFT WINDOWS

Установка СУБД «Jatoba» должна выполняться доверенным администратором в соответствии с данным документом.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

В процессе установки СУБД не следует использовать:

- доменные имена (domain_name\user_name);

- имена с пробелами.

### Порядок установки СУБД «Jatoba» на ОС Windows Server 2016

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

Для установки СУБД «Jatoba» на ОС Windows необходимо выполнить следующую последовательность действий:

1)  В ОС Windows запустить файл «JatobaInstaller-Х.Х.Х-Х[<sup>3</sup>](#_bookmark58).msi».

2)  В открывшемся окне приветствия нажать кнопку «Далее» (см. рис. [4.1](#_bookmark59)).

<span id="_bookmark58" class="anchor"></span><sup>3</sup> Номер версии уточняется при поставке изделия

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image81.png)

<span id="_bookmark59" class="anchor"></span>Рисунок 4.1 – Запуск мастера установки

3)  В диалоговом окне «Лицензионное соглашение» прочесть условия лицензионного соглашения, затем установить флажок напротив «Я принимаю условия лицензионного соглашения» и нажать кнопку «Далее» (см. рис. [4.2](#_bookmark60)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image82.png)

<span id="_bookmark60" class="anchor"></span>Рисунок 4.2 – Окно «Лицензионное соглашение»

4)  В открывшемся окне «Определение директории установки» указать путь к каталогу хранения файлов данных СУБД «Jatoba» или оставить путь по умолчанию, затем нажать кнопку «Далее» (см. рис. [4.3](#_bookmark61)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image83.png)

<span id="_bookmark61" class="anchor"></span>Рисунок 4.3 – Окно «Определение директории установки»

5)  Указать тип установки (см. рис. [4.4](#_bookmark62)):

− «Обычная» или «Полная» – будет последовательно предложено задать директорию расположения данных, задать пароль системного пользователя, указать начальные настройки СУБД (пароля администратора СУБД, язык и кодировку хранения данных в СУБД). Обычная установка не включает дополнительные расширения СУБД по работе с различными видами данных и интеграции с другими СУБД;

− «Выборочная» – сначала будет предложено отметить к установке нужные компоненты. Затем, если будет выбрана установка «Jatoba для Сервера», будет последовательно предложено задать все необходимые параметры аналогично «полной» или

«обычной» установке.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image84.png)

<span id="_bookmark62" class="anchor"></span>Рисунок 4.4 – Окно «Выбор типа установки»

6)  В открывшемся окне «Определение директории данных» указать путь к каталогу хранения файлов данных СУБД «Jatoba» или оставить выбранный по умолчанию, и нажать кнопку «Далее» (см. рис. [4.5](#_bookmark63)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image85.png)

<span id="_bookmark63" class="anchor"></span>Рисунок 4.5 – Окно «Определение директории данных»

7)  В открывшемся окне «Настройка учетной записи системного пользователя» указать системного пользователя (либо оставить пользователя, предложенного по умолчанию) и указать пароль, от имени которого будет работать СУБД «Jatoba», и нажать кнопку «Далее» (см. рис. [4.6](#_bookmark64)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image86.png)

<span id="_bookmark64" class="anchor"></span>Рисунок 4.6 – Окно «Настройки учетной записи системного пользователя»

8)  В открывшемся окне «Настройка СУБД» требуется указать порт для подключения, имя администратора СУБД, его пароль, кодировку данных из выпадающего списка, а также регион и язык (см. рис. [4.7](#_bookmark65)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image87.png)

<span id="_bookmark65" class="anchor"></span>Рисунок 4.7 – Окно «Настройки СУБД»

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

9)  В открывшемся окне «Все готово к установке Jatoba» запустить процесс установки, нажав кнопку «Установить» (см. рис. [4.8](#_bookmark66)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image88.png)

<span id="_bookmark66" class="anchor"></span>Рисунок 4.8 – Окно «Все готово к установке Jatoba» Процесс установки СУБД «Jatoba» занимает несколько минут.

10) По завершению установки в окне «Установка Jatoba завершена» необходимо нажать кнопку «Готово» (см. рис. [4.9](#_bookmark67)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image89.png)

<span id="_bookmark67" class="anchor"></span>Рисунок 4.9 – Окно «Установка Jatoba завершена»

### Возможная ошибка при установке СУБД «Jatoba» на ОС Windows

При неудачной установке СУБД «Jatoba» программа выдаст информационное сообщение (см. рис. [4.10](#_bookmark69)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image90.png)

<span id="_bookmark69" class="anchor"></span>Рисунок 4.10 – Информационное сообщение о неудачной установке СУБД «Jatoba»

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

Для устранения ошибки и повторной установки СУБД «Jatoba» необходимо деинсталлировать программу вручную. Для этого необходимо выполнить следующие шаги:

1)  Удалить установленную СУБД «Jatoba».

Пуск → Параметры Windows → Приложения → Приложения и возможности → Jatoba

→ Удалить (см. рис. [4.11](#_bookmark70)).

<span id="_bookmark70" class="anchor"></span>Рисунок 4.11 – Удаление СУБД «Jatoba»

2)  Удалить пользователя, который был создан в ходе установки.

Пуск → Средства администрирования Windows → Управление компьютером → Локальные пользователи и группы → Пользователи → postgres → Удалить (см. рис. [4.12](#_bookmark71)).

<span id="_bookmark71" class="anchor"></span>Рисунок 4.12 – Удаление пользователя

3)  Удалить локальную службу системы.

Пуск → Средства администрирования Windows → Службы → JatobaServer → Остановить службу (см. рис. [4.13](#_bookmark72)).

<span id="_bookmark72" class="anchor"></span>Рисунок 4.13 – Остановка локальной службы/системы

4)  Удалить системную папку.

Системная папка располагается по адресу:

С:\Program Files\GIS\Jatoba\\ver>\data

При удалении данной папки необходимо нажать правой кнопкой мыши на папку → Свойства → Безопасность → Дополнительно → Изменить владельца → В поле «Введите имена выбираемых объектов» ввести «Администратор» → ОК → Установить флажок напротив «Заменить все записи разрешений дочернего объекта наследуемыми от этого объекта» → ОК (см. рис. [4.14](#_bookmark73)).

<span id="_bookmark73" class="anchor"></span>Рисунок 4.14 – Удаление папки правами администратора

1.  ![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

### Порядок установки СУБД «Jatoba» на ОС Windows

Процесс установки клиентской части СУБД «Jatoba» аналогичен, описанному в разделе [4.1](#порядок-установки-субд-jatoba-на-ос-windows-server-2016), до шага выбора типа установки:

1)  В окне «Выбор типа установки» следует выбрать тип установки «Выборочная» (см. рис. [4.15](#_bookmark76)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image95.png)

<span id="_bookmark76" class="anchor"></span>Рисунок 4.15 – Окно выбора типа установки

2)  в окне «Выборочная установка», отключить параметр «Jatoba для Сервера». При этом установится только клиентская часть СУБД «Jatoba» (см. рис. [4.16](#_bookmark77)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image96.png)

<span id="_bookmark77" class="anchor"></span>Рисунок 4.16 – Выбор устанавливаемых компонент

3)  В открывшемся окне «Все готово к установке Jatoba» запустить процесс установки, нажав кнопку «Установить» (см. рис. [4.17](#_bookmark78)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image97.png)

<span id="_bookmark78" class="anchor"></span>Рисунок 4.17 – Окно «Все готово к установке Jatoba»

Откроется окно процесса установки. Процесс установки клиентской части СУБД

«Jatoba» занимает несколько минут.

4)  По завершению установки в окне «Установка Jatoba завершена» необходимо нажать кнопку «Готово» (см. рис. [4.18](#_bookmark79)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image98.png)

<span id="_bookmark79" class="anchor"></span>Рисунок 4.18 – Окно «Установка Jatoba завершена»

## УСТАНОВКА ОБНОВЛЕНИЙ СУБД «JATOBA»

При выявлении информации об уязвимости изделия, среды его функционирования и отсутствии информации в БДУ ФСТЭК России [(<u>https://bdu.fstec.ru/</u>)](https://bdu.fstec.ru/) ООО «Газинформсервис» информирует потребителей о недостатках средства, а также о компенсирующих мерах по защите информации или ограничениях по применению путем отправки сообщений на электронные адреса потребителей.

Дополнительно разработчик размещает на официальном сайте компании <http://www.gaz-is.ru/>:

- информационное сообщение, содержащее описание уязвимости и информирует потребителей о необходимости обновления средства защиты информации;

- файлы с обновленной версией ПО изделия;

- новые контрольные суммы ПО изделия (включая контрольные суммы файла с обновлением и контрольные суммы ПО после применения обновления).

Перед применением обновления требуется выполнить расчет контрольных суммы полученного файла с обновлением и сверить их с контрольными суммами, указанными на официальном сайте разработчика.

В случае совпадения контрольных сумм осуществляется установка обновления. При несовпадении контрольных сумм обновление не осуществляется и незамедлительно сообщается об этом разработчику (производителю) изделия.

После установки обновления делается соответствующая отметка в разделе 12 документа 643.72410666.00067-08 30 01 «Защищенная система управления базами данных СУБД «Jatoba». Формуляр».

Установка обновлений проводится в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по обновлению».

Перед установкой обновлений рекомендуется сделать резервную копию БД и конфигурационных файлов.

## СООБЩЕНИЯ ОБ ОШИБКАХ

### Ошибка установки открытого ключа репозитория

Ошибка установки открытого ключа репозитория может возникнуть на ОС Debian 11.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image99.png)

gnug,gnupg2 and gnupg1 do not seem to be installed, but one of them is required for this operation

Рисунок 6.1 – Ошибка установки открытого ключа на Debian 11

Для устранения возникшей ошибки, следует установить пакет «gnupg» при помощи команды:

apt-get install gnupg

После чего продолжить установку СУБД.

### Ошибка настройки учетной записи системного пользователя ОС «postgres»

Ошибка возникает на этапе создания пользователя ОС «postgres» при инсталляции СУБД «Jatoba» на ОС семейства Microsoft Windows.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image100.png)

Рисунок 6.2 – Ошибка настройки учетной записи системного пользователя

Для устранения возникшей ошибки требуется назначить пароль, соответствующий требованиям.

### Ошибка настройки учетной записи пользователя СУБД «postgres»

Ошибка возникает на этапе создания пользователя СУБД «postgres» при инсталляции СУБД «Jatoba» на ОС семейства Microsoft Windows.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image101.png)

Рисунок 6.3 – Ошибка настройки учетной записи пользователя СУБД «postgres»

Для устранения возникшей ошибки требуется назначить пароль, соответствующий требованиям.

### Ошибка повторной установки компонента «securityprofile»

После удаления компонента «securityprofile» удаляются все данные и зависимые объекты компонента.

При попытке повторной установки может возникнуть ошибка.

Избежать её возможно перезагрузкой СУБД и повторной установкой расширения

«securityprofile».

### Ошибка в имени локального репозитория

В случае, когда установка СУБД выполняется в GNU/Linux установочным скриптом

«jatoba.sh» и данный скрипт не нашел директорию localrepo – будет выведено сообщение формата как показано на рис. [6.4](#_bookmark87).

<span id="_bookmark87" class="anchor"></span>Рисунок 6.4 – Сообщение скрипта

Если переменной окружения задать корректный путь до директории локального репозитория – установка будет успешно выполнена.

Однако рекомендуется устанавливать СУБД «Jatoba» способами, описанными в настоящем документе.

## ПРИЛОЖЕНИЕ 1

Структура каталога дистрибутива для всех поддерживаемых ОС GNU/Linux приведена в таблице [П1](#_bookmark89).

<span id="_bookmark89" class="anchor"></span>Таблица П1 – Структура каталога дистрибутива для ОС GNU/Linux

<table>
<colgroup>
<col style="width: 48%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>ОС</strong></p>
</th>
<th>
<p><strong>Состав файлов и директорий репозитория</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Astra Linux 1.7 Special Edition Смоленск Astra Linux 1.8</p>
<p>Debian 11</p>
<p>Debian 12</p>
<p>Ubuntu 20.04</p>
<p>Ubuntu 22.04</p>
<p>Ubuntu 24.04</p>
<p>ОСнова 2.0</p>
</td>
<td><ul>
<li><p>каталог &lt;pool&gt;;</p></li>
<li><p>каталог &lt;dists&gt;;</p></li>
<li><p>файл ключа &lt;DEB-GPG-KEY-Jatoba&gt;</p></li>
</ul></td>
</tr>
<tr>
<td>
<p>РЕД ОС 7.3 Муром Oracle Linux 8.4</p>
</td>
<td><ul>
<li><p>каталог &lt;packages&gt;;</p></li>
<li><p>каталог &lt;repodata&gt;;</p></li>
<li><p>файл ключа &lt;RPM-GPG-KEY-Jatoba&gt;</p></li>
</ul></td>
</tr>
<tr>
<td>
<p>Альт 8 СП</p>
<p>Альт 9 Server</p>
<p>Альт 10 Server</p>
</td>
<td><ul>
<li><p>каталог &lt;x86_64&gt;;</p></li>
<li><p>файл &lt;RPM-GPG-KEY-Jatoba&gt;</p></li>
</ul></td>
</tr>
</tbody>
</table>

Описание локального репозитория для каждой ОС различны. В таблице [П2](#_bookmark90) приведены соответствия между ОС и локальными репозиториями.

<span id="_bookmark90" class="anchor"></span>Таблица П2 – Соответствия ОС и репозитория

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">
<p><strong>Alt Linux</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><u>Файл репозитория:</u></p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
<p><u>Описание локального репозитория:</u></p>
<p>rpm file:///localrepo x86_64 classic</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>РЕД ОС 7.3 Муром, Oracle Linux 8.4</strong></p>
</td>
</tr>
<tr>
<td>
<p><u>Файл репозитория:</u></p>
<p>/etc/yum.repos.d/jatoba-&lt;ver&gt;.repo</p>
<p><u>Описание локального репозитория:</u></p>
<p>[jatoba-4]</p>
<p>name=Jatoba 4 Official Repository baseurl=file:///localrepo enabled=1</p>
<p>gpgcheck=1</p>
<p>gpgkey=file:///localerepo/RPM-GPG-KEY-Jatoba</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p><strong>Astra Linux 1.7 Special Edition Смоленск, Debian 11, Ubuntu 20.04, Ubuntu22.04, ОСнова 2.0</strong></p>
</td>
</tr>
<tr>
<td>
<p><u>Файл репозитория:</u></p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
<p><u>Описание локального репозитория:</u></p>
<p>deb file:///localrepo stable non-free</p>
</td>
</tr>
</tbody>
</table>

## ПРИЛОЖЕНИЕ 2

**Пример установки и удаления СУБД «Jatoba» из локального репозитория для ОС Ubuntu 20.04**

### Установка СУБД «Jatoba» из локального репозитория в ОС Ubuntu

Установка СУБД «Jatoba» из локального репозитория для ОС Ubuntu проводится в следующем порядке:

1)  В терминале войти в режим суперпользователя, выполнив команду:

sudo su

2)  Если команды sudo не существует – установить:

su -l

apt-get install sudo -y

3)  Выполнить обновление системы:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image103.png)

sudo apt update && sudo apt upgrade –y sudo apt -s dist-upgrade

sudo apt dist-upgrade

Рисунок 2.1 – Обновление системы

4)  Создать папку localrepo в корневом каталоге:

mkdir /localrepo

5)  В созданную папку скопировать:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image104.png)

- каталог <pool>

- каталог <dist>

- файл <DEB-GPG-KEY-Jatoba>

Рисунок 2.2 – Структура каталога «localrepo»

6)  Установить открытый ключ репозитория:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image105.png)

apt-key add /localrepo/DEB-GPG-KEY-Jatoba

Рисунок 2.3 – Установка открытого ключа репозитория

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

Скопировать ключ репозитория:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Добавить описание нового репозитория в список:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt;</p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Здесь jatoba-<ver> - версия устанавливаемой СУБД «Jatoba». Затем выполнить пункт 9) из данного подраздела.

7)  Добавить описание локального репозитория в систему:

nano /etc/apt/sources.list.d/jatoba-<ver>.list

8)  Вставить в файл следующее содержимое и сохранить:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image106.png)

deb file:///localrepo stable non-free

Рисунок 2.4 – Содержание файла «jatoba-4.list»

9)  Проиндексировать обновленное состояние репозитория:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image107.png)

apt-get update

Рисунок 2.5 – Индексация репозитория 10)Установить СУБД «Jatoba» при помощи команды:

apt-get install jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image108.png)

Рисунок 2.6 – Установка пакетов

11) Убедиться, что отсутствуют ошибки зависимостей:

for f in \$(LANG=C find /usr/jatoba-<версия> -type f -exec file

{} \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print

\$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

12) Перейти в директорию исполняемых файлов СУБД:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image109.png)

cd /usr/jatoba-<ver>/bin

Рисунок 2.7 – Переход в каталог

13) Инициализировать каталог данных СУБД при помощи команды:

./jatoba-setup initdb jatoba-<ver>

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image110.png)

Рисунок 2.8 – Инициализация СУБД

14) Добавить сервис в список автозапуска:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image111.png)

systemctl enable jatoba-<ver>

Рисунок 2.9 – Добавление сервиса jatoba-4 в автозагрузку ОС 15)Запустить службу:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image112.png)

systemctl start jatoba-<ver>

Рисунок 2.10 – Запуск службы jatoba-4 16)Проверить статус службы:

systemctl status jatoba-<ver>

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image113.png)

Рисунок 2.11 – Проверка статуса службы «jatoba-4» 17)Установить пароль для системного пользователя ОС «postgres»:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image114.png)

sudo passwd postgres

Рисунок 2.12 – Установка пароля для пользователя СУБД 18)Авторизоваться в psql, для этого нажать сочетание клавиш:

CTRL + D

затем войти в psql:

su postgres psql

19)Установить пароль для пользователя СУБД «postgres»:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3">
<p>\password</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>№ изменения:</p>
</td>
<td>
<p>Подпись отв. лица:</p>
</td>
<td>
<p>Дата внесения изм:</p>
</td>
</tr>
</tbody>
</table>

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image115.png)

Рисунок 2.13 – Установка пароля для пользователя ОС На этом этапе установка СУБД окончена.

### Удаление СУБД «Jatoba» из локального репозитория в ОС Ubuntu

Удаление СУБД «Jatoba» из локального репозитория в ОС Ubuntu 20.04 проводится в следующем порядке:

1)  Вывести список служб СУБД «Jatoba»:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image116.png)

systemctl list-unit-files 'ja\*'

Рисунок 2.14 – Список служб

Команда сформирована по маске из первых букв названий служб. Из полученного списка очевидно, что установлена только СУБД.

Перечень служб, используемых при эксплуатации СУБД, приведен в таблице [П 2.1](#_bookmark94). Таблица П 2.1 – Перечень служб используемых СУБД

<table>
<colgroup>
<col style="width: 66%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Наименование компонента</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Наименование службы</strong></p>
<p><strong>(демона)</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>СУБД «Jatoba»</p>
</td>
<td>
<p>jatoba-&lt;ver&gt;</p>
</td>
</tr>
<tr>
<td>
<p>Централизованный сбор записей событий в СУБД.</p>
</td>
<td>
<p>jalog_server</p>
</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 66%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Наименование компонента</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Наименование службы</strong></p>
<p><strong>(демона)</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Компонент «ja_Log»</p>
</td>
<td>
<p>jalog_agent</p>
</td>
</tr>
<tr>
<td>
<p>Управление режимом работы узлов кластера</p>
<p>Компонент «jaDog»</p>
</td>
<td>
<p>jadog</p>
</td>
</tr>
</tbody>
</table>

2)  Удалить службу из автозагрузки ОС:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image117.png)

systemctl disable jatoba-<ver>

Рисунок 2.15 – Удаление службы «jatoba-4» из автозагрузки

Если были установлены компоненты СУБД, приведенные в таблице [П 2.1](#_bookmark94), то службы компонентов удаляются командой:

systemctl disable <имя службы>

3)  Проверить статус отключенной из автозагрузки службы:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image118.png)

systemctl status jatoba-<ver>

Рисунок 2.16 – Проверка статуса службы Служба должна иметь статус «disabled».

4)  Удалить все ненужные пакеты, первоначально установленные по зависимостям:

sudo apt autoremove jatoba<ver>-\*

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image119.png)

Рисунок 2.17 – Удаление пакетов по зависимостям

Подтвердить проведение операции и в результате будет выведен список удаленных пакетов.

При удалении пакетов будут удалены все связанные с ними службы.

5)  Вывести список служб СУБД «Jatoba»:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image120.png)

systemctl list-unit-files 'ja\*'

Рисунок 2.18 – Список служб по маске «ja\*» Список служб должен быть пуст.

6)  Просмотреть список пользователей командой:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image121.png)

cat /etc/passwd

Рисунок 2.19 – Список пользователей

7)  Удалить пользователя «postgres» командой:

userdel postgres

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image122.png)

Рисунок 2.20 – Удаление пользователя «postgres»

8)  Удалить каталоги СУБД командами:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image123.png)

rm -rf /usr/jatoba-<ver> rm -rf /var/lib/jatoba

Рисунок 2.21 – Удаление каталогов СУБД

9)  Удалить каталог репозитория:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image124.png)

rm -rf /localrepo

Рисунок 2.22 – Удаление каталога репозитория

10) Просмотреть список репозиториев ОС:

sudo grep -rhE ^deb /etc/apt/sources.list\*

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image125.png)

Рисунок 2.23 – Просмотр списка репозиториев ОС

В списке репозиториев будет присутствовать запись:

deb file:///localrepo stable non-free

11) Удалить описание локального репозитория:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image126.png)

rm /etc/apt/sources.list.d/jatoba-<ver>.list

Рисунок 2.24 – Удаление репозитория

12) Проиндексировать обновленное состояние репозитория:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image127.png)

apt-get update

Рисунок 2.25 – Обновление репозитория

13) Просмотреть список репозиториев ОС:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image128.png)

sudo grep -rhE ^deb /etc/apt/sources.list\*

Рисунок 2.26 – Просмотр списка репозиториев ОС после обновления В списке репозиториев будет отсутствовать запись:

deb file:///localrepo stable non-free

На этом шаге удаление СУБД закончено.

## ПРИЛОЖЕНИЕ 3

**Пример установки и удаления СУБД «Jatoba» из локального репозитория для РЕД ОС 7.3 Муром**

### Установка СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром

Установка СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром проводится в следующем порядке:

1)  В терминале войти в режим суперпользователя, выполнив команду:

sudo su

2)  Если команды sudo не существует, то установить командой:

dnf install sudo -y

3)  Выполнить обновление системы при помощи команды;

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image129.png)

```
# dnf update
```

Рисунок 3.1 – Обновление системы командой «dnf»

4)  Создать папку localrepo в корневом каталоге:

```
# mkdir /localrepo
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image130.png)

Рисунок 3.2 – Создание каталога «localrepo»

5)  В созданную папку скопировать:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image131.png)

- каталог <packages>;

- каталог <repodata>;

- файл ключа <RPM-GPG-KEY-Jatoba>

Рисунок 3.3 – Структура каталога «localrepo»

Если директория с файлами находится в корневой директории пользователя, необходимо выполнить команду:

```
# cp -R /home/<username>/X.XX.X-XXXX/repo/. /localrepo/
```

6)  Установить открытый ключ репозитория:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image132.png)

```
# rpm --import /localrepo/RPM-GPG-KEY-Jatoba
```

Рисунок 3.4 – Установка открытого ключа репозитория

7)  Добавить описание локального репозитория в систему:

```
# nano /etc/yum.repos.d/jatoba-<ver>.repo
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image133.png)

Рисунок 3.5 – Добавление локального репозитория в ОС

8)  Вставить в файл следующее содержимое и сохранить:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image134.png)

\[jatoba-18\]

name=Jatoba 18 Official Repository baseurl=file:///localrepo enabled=1

gpgcheck=1

gpgkey=file:///localerepo/RPM-GPG-KEY-Jatoba

Рисунок 3.6 – Описание локального репозитория в ОС

9)  Проиндексировать обновленное состояние репозитория:

```
# dnf makecache
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image135.png)

Рисунок 3.7 – Индексация локального репозитория

10) Установить СУБД «Jatoba» при помощи команды:

dnf install jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image136.png)

Рисунок 3.8 – Установка пакетов СУБД «Jatoba» Необходимо подтвердить продолжение установки.

11) Убедиться, что отсутствуют ошибки зависимостей:

```
# for f in \$(LANG=C find /usr/jatoba-<ver> -type f -exec file
```

{} \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print

\$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image137.png)

Рисунок 3.9 – Проверка ошибок зависимостей

12) Перейти в директорию исполняемых файлов СУБД:

```
# cd /usr/jatoba-<ver>/bin
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image138.png)

Рисунок 3.10 – Команда перехода в каталог

13) Инициализировать каталог данных СУБД при помощи команды:

```
# ./jatoba-setup initdb jatoba-<ver>
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image139.png)

Рисунок 3.11 – Инициализация СУБД

14) Добавить сервис в список автозапуска:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image140.png)

```
# systemctl enable jatoba-<ver>
```

Рисунок 3.12 – Добавление сервиса jatoba-18 а автозагрузку ОС

15) Запустить службу:

```
# systemctl start jatoba-<ver>
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image141.png)

Рисунок 3.13 – Запуск службы jatoba-18

16) Проверить статус службы:

```
# systemctl status jatoba-<ver>
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image142.png)

Рисунок 3.14 – Проверка статуса службы jatoba-18

17) Авторизоваться в «psql» от имени и с правами пользователя «postgres» и установить для него пароль в СУБД:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image143.png)

```
# sudo su - postgres
```

cd /usr/jatoba-<ver>/bin/ psql

\password

Рисунок 3.15 – Установка пароля для пользователя СУБД «postgres»

18) Выйти в профиль пользователя «root» нажатием сочетания клавиш:

CTRL + D

19) Установить пароль для системного пользователя ОС «postgres»:

```
# passwd postgres
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image144.png)

Рисунок 3.16 – Установка пароля для пользователя ОС На этом этапе установка СУБД «Jatoba» окончена.

### Удаление СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром

Удаление СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром проводится в следующем порядке:

1)  Вывести список служб СУБД «Jatoba»:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image145.png)

```
# systemctl list-unit-files 'ja\*'
```

Рисунок 3.17 – Список служб

Команда сформирована по маске из первых букв названий служб. Из полученного списка очевидно, что установлена только СУБД.

Перечень служб используемых при эксплуатации СУБД приведен в таблице [П 3.1](#_bookmark98)

<span id="_bookmark98" class="anchor"></span>Таблица П 3.1 – Перечень служб используемых СУБД

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="2">
<p><strong>Наименование компонента</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Наименование службы</strong></p>
<p><strong>(демона)</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<p>СУБД «Jatoba»</p>
</td>
<td>
<p>jatoba-&lt;ver&gt;</p>
</td>
</tr>
<tr>
<td colspan="2">
<p>Централизованный сбор записей событий в СУБД.</p>
<p>Компонент «ja_Log»</p>
</td>
<td>
<p>jalog_server</p>
<p>jalog_agent</p>
</td>
</tr>
<tr>
<td colspan="2">
<p>Управление режимом работы узлов кластера</p>
<p>Компонент «jaDog»</p>
</td>
<td>
<p>jadog</p>
</td>
</tr>
<tr>
<td>
<p>№ изменения:</p>
</td>
<td>
<p>Подпись отв. лица:</p>
</td>
<td>
<p>Дата внесения изм:</p>
</td>
</tr>
</tbody>
</table>

2)  Удалить службу из автозагрузки ОС:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image146.png)

```
# systemctl disable jatoba-<ver>
```

Рисунок 3.18 – Удаление службы jatoba-18 из автозагрузки

Если были установлены компоненты СУБД приведенные в таблице [П 3.1](#_bookmark98), то службы компонентов удаляются командой:

```
# systemctl disable <имя службы>
```

3)  Проверить статус отключенной из автозагрузки службы:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image147.png)

```
# systemctl status jatoba-<ver>
```

Рисунок 3.19 – Проверка статуса службы jatoba-18

Служба должна иметь статус «disabled».

4)  Удалить все ненужные пакеты, первоначально установленные по зависимостям:

```
# dnf autoremove jatoba<ver>-\*
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image148.png)

Рисунок 3.20 – Удаление пакетов СУБД из ОС

Подтвердить проведение операции и в результате будет выведен список удаленных пакетов.

При удалении пакетов будут удалены все связанные с ними службы.

5)  Вывести список служб СУБД «Jatoba»:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image149.png)

```
# systemctl list-unit-files 'ja\*'
```

Рисунок 3.21 – Список служб по маске «ja\*» Список служб должен быть пуст.

6)  Просмотреть список пользователей:

В терминале ОС список пользователей выводится командой:

```
# cat /etc/passwd
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image150.png)

Рисунок 3.22 – Список пользователей

В ОС список пользователей выводится с помощью утилиты «Менеджер пользователей», отключив параметр «Скрыть системных пользователей и группы».

Рисунок 3.23 – Вывод списка пользователей в утилите «Менеджер пользователей»

7)  Удалить пользователя «postgres» командой:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image152.png)

```
# userdel postgres
```

Рисунок 3.24 – Удаление пользователя «postgres»

В ОС удалить пользователя «postgres» возможно через утилиту «Менеджер пользователей», используя пиктограмму «Удалить».

8)  Удалить каталоги СУБД командами:

```
# rm -rf /usr/jatoba-<ver>
```

```
# rm -rf /var/lib/jatoba
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image153.png)

Рисунок 3.25 – Удаление каталогов СУБД

9)  Удалить каталог репозитория:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image154.png)

```
# rm -rf /localrepo
```

Рисунок 3.26 – Удаление каталога локального репозитория

10) Просмотреть список репозиториев ОС:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image155.png)

```
# dnf repolist
```

Рисунок 3.27 – Список репозиториев в ОС

В выведенном списке будет присутствовать репозиторий «jatoba-18».

11) Просмотреть описание локального репозитория «jatoba-18» в ОС:

```
# cat /etc/yum.repos.d/jatoba-<ver>.repo
```

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image156.png)

Рисунок 3.28 – Вывод описания локального репозитория «jatoba-18»

12) Удалить описание локального репозитория «jatoba-18» в ОС:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image157.png)

```
# rm /etc/yum.repos.d/jatoba-<ver>.repo
```

Рисунок 3.29 – Удаление локального репозитория Подтвердить команду удаления.

13) Просмотреть список репозиториев ОС:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image158.png)

```
# dnf repolist
```

Рисунок 3.30 – Список репозиториев в ОС

В списке репозиториев ОС должен отсутствовать репозиторий «jatoba-<ver>». На этом шаге удаление СУБД закончено.

### ПРИЛОЖЕНИЕ 4

**Пример установки и удаления СУБД «Jatoba» из локального репозитория для Альт 9** <span id="_bookmark100" class="anchor"></span>**Server**

### Установка СУБД «Jatoba» из локального репозитория в Альт 9 Server

Установка СУБД «Jatoba» из локального репозитория в Альт 9 Server проводится в следующем порядке:

1)  В терминале MATE войти в режим суперпользователя, выполнив команду:

sudo su

Рисунок 4.1 – Вход в режим суперпользователя

2)  Выполнить обновление системы, последовательно выполняя команды:

apt-get update

apt-get dist-upgrade update-kernel

apt-get clean reboot

После обновления ОС установится пакет «sudo», убедиться в его установке можно командой:

apt-get install sudo -y

Рисунок 4.2 – Проверка установки пакета «sudo»

3)  Установить пакет «nano» командой:

apt-get install nano

Рисунок 4.3 – Установка пакета «nano»

4)  Создать папку localrepo в корневом каталоге:

mkdir /localrepo

Рисунок 4.4 – Создание каталога «localrepo»

5)  В созданную папку скопировать:

- каталог <x86_64>

- файл <RPM-GPG-KEY-Jatoba>

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image163.png)

Рисунок 4.5 - Структура каталога «localrepo»

6)  Установить открытый ключ репозитория:

rpm --import /localrepo/RPM-GPG-KEY-Jatoba

Рисунок 4.6 – Установка открытого ключа репозитория

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

Скопировать ключ репозитория:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Добавить описание нового репозитория в список:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt;</p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Здесь jatoba-<ver> - версия устанавливаемой СУБД «Jatoba». Затем выполнить 9) из данного подраздела.

7)  Добавить описание локального репозитория в систему:

nano /etc/apt/sources.list.d/jatoba-<ver>.list

Рисунок 4.7 – Добавление локального репозитория в ОС

8)  Вставить в файл следующее содержимое и сохранить:

rpm file:///localrepo x86_64 classic

Рисунок 4.8 – Содержание файла «jatoba-4.list»

9)  Проиндексировать обновленное состояние репозитория:

apt-get update

Рисунок 4.9 – Индексация репозитория

10) Установить СУБД «Jatoba» при помощи команды:

apt-get install jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

Рисунок 4.10 – Установка пакетов Подтвердите продолжение установки.

11) Убедиться, что отсутствуют ошибки зависимостей:

for f in \$(LANG=C find /usr/jatoba-<ver> -type f -exec file {}

\\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

Рисунок 4.11 – Команда проверки отсутствия ошибок зависимостей

12) Перейти в директорию исполняемых файлов СУБД:

cd /usr/jatoba-<ver>/bin

Рисунок 4.12 – Команда перехода в каталог

13) Инициализировать каталог данных СУБД при помощи команды:

./jatoba-setup initdb jatoba-<ver>

Рисунок 4.13 – Инициализация СУБД

14) Добавить сервис в список автозапуска:

systemctl enable jatoba-<ver>

Рисунок 4.14 – Добавление сервиса jatoba-4 а автозагрузку ОС

15) Запустить службу:

systemctl start jatoba-<ver>

Рисунок 4.15 – Запуск службы jatoba-4

16) Проверить статус службы:

systemctl status jatoba-<ver>

Рисунок 4.16 – Проверка статуса службы

17) Авторизоваться в psql от имени и с правами пользователя «postgres» и установить для него пароль в СУБД:

su -l postgres

cd /usr/jatoba-<ver>/bin/ psql

\password

Рисунок 4.17 – Установка пароля для пользователя СУБД «postgres»

18) Войти в профиль пользователя «root» нажатием сочетания клавиш:

CTRL + D

19) Установить пароль для системного пользователя ОС «postgres»:

passwd postgres

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image176.jpeg)

Рисунок 4.18 – Установка пароля для пользователя ОС На этом этапе установка СУБД окончена.

### Удаление СУБД «Jatoba» из локального репозитория в Альт 9 Server

Удаление СУБД «Jatoba» из локального репозитория в Альт 9 Server проводится в следующем порядке:

1)  Вывести список служб СУБД «Jatoba»:

systemctl list-unit-files 'ja\*'

Рисунок 4.19 – Список служб

Команда сформирована по маске из первых букв названий служб. Из полученного списка очевидно, что установлена только СУБД.

Перечень служб, используемых при эксплуатации СУБД, приведен в таблице [П 4.1](#_bookmark102).

<span id="_bookmark102" class="anchor"></span>Таблица П 4.1 – Перечень служб используемых СУБД

<table>
<colgroup>
<col style="width: 66%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Наименование компонента</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Наименование службы</strong></p>
<p><strong>(демона)</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>СУБД «Jatoba»</p>
</td>
<td>
<p>jatoba-&lt;ver&gt;</p>
</td>
</tr>
<tr>
<td>
<p>Централизованный сбор записей событий в СУБД.</p>
<p>Компонент «ja_Log»</p>
</td>
<td>
<p>jalog_server</p>
<p>jalog_agent</p>
</td>
</tr>
<tr>
<td>
<p>Управление режимом работы узлов кластера</p>
<p>Компонент «jaDog»</p>
</td>
<td>
<p>jadog</p>
</td>
</tr>
</tbody>
</table>

2)  Удалить службу из автозагрузки ОС:

systemctl disable jatoba-<ver>

Рисунок 4.20 – Удаление службы «jatoba-4» из автозагрузки

Если были установлены компоненты СУБД, приведенные в таблице [П 4.1](#_bookmark102), то службы компонентов удаляются командой:

systemctl disable <имя службы>

3)  Проверить статус отключенной из автозагрузки службы:

systemctl status jatoba-<ver>

Рисунок 4.21 – Проверка статуса службы Служба должна иметь статус «disabled».

4)  Удалить все ненужные пакеты.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>apt-get remove jatoba&lt;ver&gt;-*</p>
<p>apt-get autoremove jatoba&lt;ver&gt;-*</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

может привести к ошибке и некорректному удалению пакетов.

Для корректного удаления пакетов рекомендуется использовать менеджер пакетов

«Synaptic».

Для запуска менеджера пакетов «Synaptic» необходимо выбрать в меню ОС

«Система» → «Параметры» → «Прочие» → «Менеджер пакетов». Перед своим запуском программа попросит ввести пароль суперпользователя:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image180.jpeg)

Рисунок 4.22 – Ввод пароля «root»

Нажать кнопку «Происхождение» (см. рис. [4.23](#_bookmark103)) и выбрать в списке репозиторий

«Локальный/classic», который является локальным репозиторием СУБД «Jatoba».

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image181.jpeg)

<span id="_bookmark103" class="anchor"></span>Рисунок 4.23 – Локальный репозиторий СУБД «Jatoba» в менеджере пакетов «Synaptic» В списке пакетов отображаются пакеты, находящиеся в локальном репозитории

СУБД «Jatoba». Пакеты могут иметь статусы, представленные в таблице [П 4.2](#_bookmark104).

<span id="_bookmark104" class="anchor"></span>Таблица П 4.2 – Статусы пакетов в репозитории

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 46%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Пиктограмма</strong></p>
</th>
<th>
<p><strong>Статус пакета</strong></p>
</th>
<th>
<p><strong>Вид пакета</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>![](@site/docs/assets/images/com18.3.1/install_tmp/media/image182.png)
</td>
<td>
<p>пакет, установленный в системе</p>
</td>
<td>
<p>![](@site/docs/assets/images/com18.3.1/install_tmp/media/image183.png)
</td>
</tr>
<tr>
<td>
<p>![](@site/docs/assets/images/com18.3.1/install_tmp/media/image184.png)
</td>
<td>
<p>пакет, доступный для установки</p>
</td>
<td>
<p>![](@site/docs/assets/images/com18.3.1/install_tmp/media/image185.png)
</td>
</tr>
<tr>
<td>
<p>![](@site/docs/assets/images/com18.3.1/install_tmp/media/image186.png)
</td>
<td>
<p>пакет назначен для установки</p>
</td>
<td>
<p>![](@site/docs/assets/images/com18.3.1/install_tmp/media/image187.png)
</td>
</tr>
<tr>
<td>
<p>![](@site/docs/assets/images/com18.3.1/install_tmp/media/image188.png)
</td>
<td>
<p>пакет, отмеченный для удаления</p>
</td>
<td>
<p>![](@site/docs/assets/images/com18.3.1/install_tmp/media/image189.png)
</td>
</tr>
</tbody>
</table>

Пакеты со статусом «установленные в системе» должны быть помечены для удаления, через контекстное меню или клавишей «Delete».

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image190.jpeg)

Рисунок 4.24 – Контекстное меню

После маркировки пакетов для удаления нажать кнопку «Применить». Менеджер пакетов «Synaptic» выведет окно подтверждения удаления пакетов, в котором необходимо подтвердить действие, нажав на кнопку «Применить».

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image191.jpeg)

Рисунок 4.25 – Подтверждение удаления пактов

После удаления пакетов в репозитории «Локальный/classic» все пакеты сменят статус на «пакет доступный к установке». На данном шаге работа с менеджером пакетов «Synaptic» закончена.

5)  Вывести список служб СУБД «Jatoba» командой в терминале MATE:

systemctl list-unit-files 'ja\*'

Список служб, выведенных по маске, должен быть пуст, т.к. процедура удаления пакетов удяляет и связанные с ними службы.

Рисунок 4.26 – Список служб по маске «ja\*»

6)  Просмотреть список репозиториев:

apt-repo list

Рисунок 4.27 – Список локальных репозиториев В списке локальных репозиториев должна присутствать запись:

rpm file:///localrepo x86_64 classic

7)  Удалить описание локального репозитория:

rm /etc/apt/sources.list.d/jatoba-<ver>.list

Рисунок 4.28 – Удаление описания репозитория Подтвердите проведение операции.

8)  Просмотреть список репозиториев:

apt-repo list

Рисунок 4.29 – Список локальных репозиториев после удаления В списке локальных репозиториев должна отсутствовать запись:

rpm file:///localrepo x86_64 classic

Что означает корретное удаление описание локального репозитория СУБД «Jatoba».

9)  Просмотреть список пользователей командой:

cat /etc/passwd

Рисунок 4.30 – Список пользователей Если в списке пользователей ОС присутствует строка:

postgres:x:46:46:PostgreSQL Server:/var/lib/jatoba:/bin/bash

следовательно, требуется удалить пользователя «postgres».

10) Удалить пользователя «postgres» командой:

userdel postgres

Рисунок 4.31 – Удаление пользователя «postgres»

При повторном просмотре списка пользователей ОС, строка о пользователе «postgres» должна отсутствовать.

11) Удалить каталоги СУБД командами:

rm -rf /usr/jatoba-<ver> rm -rf /var/lib/jatoba

Рисунок 4.32 – Удаление каталогов СУБД

12) Удалить каталог репозитория:

rm -rf /localrepo

Рисунок 4.33 – Удаление каталога репозитория На этом шаге удаление СУБД закончено.

## ПРИЛОЖЕНИЕ 5

**Пример установки и удаления СУБД «Jatoba» из локального репозитория для ОС Astra Linux 1.7 Special Edition Смоленск (x86-64) в ЗПС**

### Установка ОС Astra Linux 1.7 Special Edition Смоленск (x86-64)

При установке ОС на этапе «Выбор программного обеспечения» не выбирать установку СУБД входящей в состав дистрибутива.

Рисунок 5.1 – Этап «Выбор программного обеспечения»

На следующем этапе «Дополнительные настройки ОС», установить флаг для опции

«Включить режим замкнутой программной среды».

Рисунок 5.2 – Этап «Дополнительные настройки ОС»

### Установка СУБД «Jatoba» из локального репозитория в ОС Astra Linux 1.7 Special Edition Смоленск (x86-64)

Установка СУБД «Jatoba» из локального репозитория для ОС Astra Linux 1.6 Special Edition Смоленск (x86-64) проводится в следующем порядке:

1)  В терминале войти в режим суперпользователя, выполнив команду:

sudo su

2)  Если команды sudo не существует – установить:

su -l

apt-get install sudo -y

3)  Выполнить обновление системы:

sudo apt update && sudo apt upgrade –y

sudo apt -s dist-upgrade sudo apt dist-upgrade

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image202.png)

Рисунок 5.3 – Обновление системы

4)  Создать папку localrepo в корневом каталоге:

mkdir /localrepo

5)  В созданную папку скопировать:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image203.png)

- каталог <pool>

- каталог <dist>

- файл <DEB-GPG-KEY-Jatoba>

Рисунок 5.4 – Структура каталога «localrepo»

6)  Установить открытый ключ репозитория:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image204.png)

apt-key add /localrepo/DEB-GPG-KEY-Jatoba

Рисунок 5.5 – Установка открытого ключа репозитория

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

Скопировать ключ репозитория:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Добавить описание нового репозитория в список:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt;</p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Здесь jatoba-<ver> - версия устанавливаемой СУБД «Jatoba». Затем выполнить 9) из данного подраздела.

7)  Добавить описание локального репозитория в систему:

nano /etc/apt/sources.list.d/jatoba-<ver>.list

8)  Вставить в файл следующее содержимое и сохранить:

deb file:///localrepo stable non-free

Рисунок 5.6 – Содержание файла «jatoba-4.list»

9)  Проиндексировать обновленное состояние репозитория:

apt-get update

Рисунок 5.7 – Индексация репозитория

10) Установить СУБД «Jatoba» при помощи команды и подтвердить выполнение:

apt-get install jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

Рисунок 5.8 – Установка пакетов

11) Удалить ссылку на файл jatoba-<ver>-libs.conf из директории /etc/ld.so.conf.d/:

unlink /etc/ld.so.conf.d/jatoba-<ver>-libs.conf

12) Скопировать файл jatoba-<ver>-libs.conf из директории /usr/jatoba-<ver>/share/ в /etc/ld.so.conf.d/:

cp /usr/jatoba-<ver>/share/jatoba-<ver>-libs.conf

/etc/ld.so.conf.d/

13) Выполнить проверку и обновить кэш динамических библиотек:

ldconfig

14) Обновить образы инициализации:

update-initramfs -u -k all

15) Установить дополнительный пакет СУБД «Jatoba» для ОС Astra Linux Special Edition 1.7 Смоленск при помощи команды и подтвердить выполнение:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image208.png)

apt-get install jatoba<ver>-astra-digsig-key

Рисунок 5.9 – Установка дополнительного пакета

Установка дополнительного пакета сформирует файл «gazis_pub.key» в каталоге:

/usr/jatoba-<ver>/share

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image209.png)

Рисунок 5.10 – Расположение файла «gazis_pub.key»

16) Убедиться, что отсутствуют ошибки зависимостей:

for f in \$(LANG=C find /usr/jatoba-<ver> -type f -exec file {}

\\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

17) Скопировать файл «gazis_pub.key»из каталога /usr/jatoba-4/share в каталог

/etc/digsig/keys.

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image210.png)

Рисунок 5.11 – Содержание каталога /etc/digsig/keys

18) Импортировать в систему открытый ключ «gazis_pub.key» командами:

cd /etc/digsig/keys/

gpg --import /etc/digsig/keys/gazis_pub.key

Рисунок 5.12 – Импорт открытого ключа

19) Выполнить переход в режим ЗПС с использованием терминала:

    - Настроить конфигурационный файл «digsig_initramfs.conf»:

sudo mcedit /etc/digsig/digsig_initramfs.conf

Рисунок 5.13 – Команда редактирования конфигурационного файла

В конфигурационном файле «digsig_initramfs.conf» должны быть установлены параметры:

DIGSIG_ELF_MODE=1 DIGSIG_XATTR_MODE=0 DIGSIG_IGNORE_XATTR_KEYS=0 DIGSIG_IGNORE_GOST2021=0

Рисунок 5.14 – Конфигурационный файл «digsig_initramfs.conf»

- Применить текущие настройки «digsig_initramfs.conf» командой:

sudo update-initramfs -u -k all

Рисунок 5.15 – Применение текущих настроек «digsig_initramfs.conf»

- Перезапустите ОС командой:

sudo reboot

Рисунок 5.16 – Перезагрузка ОС Таким образом будет включен режим ЗПС.

- После перезапуска ОС проверьте, что ELF mode – включен, а XATTR mode – отключен, выполнив команды:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image216.png)

cat /sys/digsig/elf_mode cat /sys/digsig/xattr_mode

Рисунок 5.17 – Проверка параметров

20) Перейти в директорию исполняемых файлов СУБД:

cd /usr/jatoba-<ver>/bin

Рисунок 5.18 – Переход в каталог

21) Инициализировать каталог данных СУБД при помощи команды:

./jatoba-setup initdb jatoba-<ver>

Рисунок 5.19 – Инициализация СУБД

22) Добавить сервис в список автозапуска:

systemctl enable jatoba-<ver>

Рисунок 5.20 – Добавление сервиса jatoba-4 в автозагрузку ОС

23) Запустить службу:

systemctl start jatoba-<ver>

Рисунок 5.21 – Запуск службы jatoba-4

24) Проверить статус службы:

systemctl status jatoba-<ver>

Рисунок 5.22 – Проверка статуса службы «jatoba-<ver>»

25) Установить пароль для системного пользователя ОС «postgres»:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image222.png)

sudo passwd postgres

Рисунок 5.23 – Установка пароля для пользователя ОС

26) Авторизоваться в psql, для этого нажать сочетание клавиш:

CTRL + D

затем войти в psql:

su - postgres

psql

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image223.png)

Рисунок 5.24 – Вход в СУБД

27) Установить пароль для пользователя СУБД «postgres»:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image224.png)

\password

Рисунок 5.25 – Установка пароля для пользователя СУБД На этом этапе установка СУБД окончена.

### Удаление СУБД «Jatoba» из локального репозитория в ОС

Действия выполняемые для удаления СУБД «Jatoba» из локального репозитория аналогичны действиям, описанным в Приложении [2](#приложение-2) настоящего документа.

## ПРИЛОЖЕНИЕ 6

### Установка СУБД «Jatoba» из локального репозитория в ОС ОСНОВА 2.0

Перед началом установки должен быть скопирован дистрибутив в каталог /localrepo.

При установке открытого ключа репозитория требуется отключить режим ЗПС либо обеспечить работу утилиты apt-key в условиях ЗПС.

Установка СУБД «Jatoba» из локального репозитория в ОС ОСНОВА 2.0 выполняется следующими шагами:

1)  Проверить статус включенного режима ЗПС:

ls -al /etc/ima/policy

Рисунок 6.1 – Команда проверки статуса ЗПС Вывод имеет два значения:

- /etc/ima/policy -> policy.d/empty – выключен (по умолчанию);

- /etc/ima/policy -> policy.d/appraise – включен.

2)  Выполнить обновление системы:

apt-get update -y & apt-get upgrade -y

Рисунок 6.2 – Команда обновления системы

3)  Добавить репозиторий jatoba с отключенным режимом ЗПС:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image227.png)

apt-key add /localrepo/DEB-GPG-KEY-Jatoba

Рисунок 6.3 – Команда добавления репозитория

4)  Добавить описание локального репозитория в систему:

nano /etc/apt/sources.list.d/jatoba-<ver>.list

5)  Вставить в файл следующее содержимое и сохранить:

Рисунок 6.4 – Содержание файла jatoba-<ver>.list

6)  Проиндексировать обновленное состояние репозитория:

apt-get update

Рисунок 6.5 – Команда индексирования репозитория

7)  В ОС включить режим ЗПС командами:

sudo rm /etc/ima/policy

sudo ln -s /etc/ima/policy.d/appraise /etc/ima/policy

8)  Применить обновленные настройки и перезагрузить ОС:

sudo update-initramfs -u -k all sudo reboot

Рисунок 6.6 – Команды включения режима ЗПС

9)  Установить пакет osnova-digsig-key:

apt install jatoba5-osnova-digsig-key

Рисунок 6.7 – Команда установки пакета osnova-digsig-key

10) Применить обновленные настройки:

update-initramfs -u -k all

Рисунок 6.8 – Команда применения настроек

11) Перезагрузить систему:

reboot

12) После авторизации войти в режим суперпользователя, выполнив команду:

sudo su

13) Проверить статус режима ЗПС:

ls -al /etc/ima/policy

В выводе команды режим ЗПС должен быть включен, т.е. иметь значение «appraise»:

/etc/ima/policy -> policy.d/appraise

Рисунок 6.9 – Вывод статуса ЗПС

14) Установить пакет osnova-digsig-key:

apt install jatoba<ver>-osnova-digsig-key

Рисунок 6.10 – Команда установки пакета osnova-digsig-key

15) Добавить публичный ключ:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image235.png)

cp /usr/jatoba-<ver>/share/gaz-is.der /etc/ima/certs

Рисунок 6.11 – Команда копирования публичного ключа

16) Обновить данные:

update-initramfs -u -k all

Рисунок 6.12 – Команда применения настроек

17) Перезагрузить систему:

reboot

18) После авторизации войти в режим суперпользователя, выполнив команду:

sudo su

19) Установить СУБД Jatoba при помощи команды:

apt-get install jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

Рисунок 6.13 – Команда установки основных пакетов СУБД «Jatoba»

20) Убедиться, что отсутствуют ошибки зависимостей:

for f in \$(LANG=C find /usr/jatoba-<ver> -type f -exec file {}

\\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

Рисунок 6.14 – Команда проверки зависимостей

21) Перейти в директорию исполняемых файлов СУБД:

cd /usr/jatoba-<ver>/bin

22) Инициализировать каталог данных СУБД при помощи команды:

./jatoba-setup initdb jatoba-<версия>

Рисунок 6.15 – Команда инициализации СУБД

23) Вывести права на директорию данных:

stat /var/lib/jatoba/

stat /var/lib/jatoba/<ver>

stat /var/lib/jatoba/<ver>/data

Рисунок 6.16 – Команда вывода прав доступа В выводе команд должны отразится права на доступ:

- Uid: postgres;

- Gid: postgres.

24) Добавить сервис в список автозапуска:

systemctl enable jatoba-<ver>

25) Запустить службу:

systemctl start jatoba-<ver>

26) Проверить статус службы:

systemctl status jatoba-<ver>

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image241.png)

Рисунок 6.17 – Запуск службы jatoba-<ver> и проверка ее статуса

27) Проверить наличие подписи в исполняемых файлах:

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image242.png)

evmctl show /usr/jatoba-<ver>/bin/initdb

Рисунок 6.18 – Вывод подписи в исполняемых файлах

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image1.png)

## ПРИЛОЖЕНИЕ 7

### Пример установки веб-сервера (IIS) на ОС Windows 10

Перед установкой веб-сервера (IIS) на ОС Windows 10 необходимо выполнить действия по предварительной настройке компьютера. Для чего необходимо:

- задать корректное имя компьютера;

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image2.png)

- настроить сетевое окружение;

- установить обновления ОС.

Для установки роли веб-сервера необходимо проделать следующие шаги:

1)  Перейти в «Панель управления» → «Программы» → «Программы и компоненты»

→ «Включение или отключение компонентов Windows» ([Рисунок 7.1](#_bookmark113)).

<span id="_bookmark113" class="anchor"></span>Рисунок 7.1 – Включение или отключение компонентов Windows

2)  В открывшемся окне «Компоненты Windows» выбрать раздел «Внедряемое веб-ядро служб IIS» (рисунок [7.2](#_bookmark114)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image244.png)

<span id="_bookmark114" class="anchor"></span>Рисунок 7.2 – Раздел «Внедряемое веб-ядро служб IIS»

3)  В разделе «Windows PowerShell 2.0» оставить выбранные компоненты по умолчанию (рисунок [7.3](#_bookmark115)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image245.png)

<span id="_bookmark115" class="anchor"></span>Рисунок 7.3 – Раздел «Windows PowerShell 2.0

4)  В окне «Компоненты Windows» выбрать раздел «Службы IIS» (рисунок [7.4](#_bookmark116)).

![](@site/docs/assets/images/com18.3.1/install_tmp/media/image246.png)

<span id="_bookmark116" class="anchor"></span>Рисунок 7.4 – Раздел «Службы IIS»

Параметры, устанавливаемые разделе «Службы IIS», приведены в таблице П. [П.7.1](#_bookmark117).

<span id="_bookmark117" class="anchor"></span>Таблица П.7.1 – Требуемые параметры в разделе «Службы IIS»

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 25%" />
<col style="width: 68%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th>
<p><strong>Основные параметры</strong></p>
<p><strong>раздела «Службы IIS»</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Связанный параметр</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td colspan="2">
<p><strong>Безопасность</strong></p>
</td>
</tr>
<tr>
<td>
<p>1.1</p>
</td>
<td></td>
<td>
<p>Фильтрация запросов</p>
</td>
</tr>
<tr>
<td>
<p>2</p>
</td>
<td colspan="2">
<p><strong>Компоненты разработки приложений</strong></p>
</td>
</tr>
<tr>
<td>
<p>2.1</p>
</td>
<td></td>
<td>
<p>Инициализация приложений</p>
</td>
</tr>
<tr>
<td>
<p>3</p>
</td>
<td colspan="2">
<p><strong>Общие функции HTTP</strong></p>
</td>
</tr>
<tr>
<td>
<p>3.1</p>
</td>
<td></td>
<td>
<p>Документ по умолчанию</p>
</td>
</tr>
<tr>
<td>
<p>3.2</p>
</td>
<td></td>
<td>
<p>Обзор каталога</p>
</td>
</tr>
<tr>
<td>
<p>3.3</p>
</td>
<td></td>
<td>
<p>Просмотр каталога</p>
</td>
</tr>
<tr>
<td>
<p>3.4</p>
</td>
<td></td>
<td>
<p>Ошибки HTTP</p>
</td>
</tr>
<tr>
<td>
<p>3.5</p>
</td>
<td></td>
<td>
<p>Статическое содержимое</p>
</td>
</tr>
<tr>
<td>
<p>4</p>
</td>
<td colspan="2">
<p><strong>Проверка работоспособности и диагностика</strong></p>
</td>
</tr>
<tr>
<td>
<p>4.1</p>
</td>
<td></td>
<td>
<p>Ведение журнала HTTP</p>
</td>
</tr>
<tr>
<td>
<p>5</p>
</td>
<td colspan="2">
<p><strong>Функции повышения быстродействия</strong></p>
</td>
</tr>
<tr>
<td>
<p>5.1</p>
</td>
<td></td>
<td>
<p>Сжатие статического содержимого</p>
</td>
</tr>
<tr>
<td>
<p>6</p>
</td>
<td colspan="2">
<p><strong>Средства управления веб-сайтом</strong></p>
</td>
</tr>
<tr>
<td>
<p>6.1</p>
</td>
<td></td>
<td>
<p>Консоль управления IIS</p>
</td>
</tr>
</tbody>
</table>

5)  В окне «Компоненты Windows» проверить настроенные параметры и начать установку веб-сервера, нажав кнопку «ОК».

6)  В окне «Компоненты Windows» показан результат установки компонента. После успешной установки нажать «Закрыть» (рисунок [7.5](#_bookmark118)).

<span id="_bookmark118" class="anchor"></span>Рисунок 7.5 – Окончание установки веб-сервера IIS

Для проверки установки веб-сервера (IIS) необходимо в веб-браузере перейти по ссылке [<u>http://localhost</u>.](http://localhost/)

На рисунке [7.6](#_bookmark119) показана страница с корректной установкой веб-сервера.

<span id="_bookmark119" class="anchor"></span>Рисунок 7.6 – Тестовая страница веб-сервера (IIS)

## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

DDL – Data Definition Language — язык описания данных

DML – Data Manipulation Language — язык манипулирования данными SQL – Structured Query Language — язык структурированных запросов БД – База данных

ОЗУ – Оперативное запоминающее устройство ОС – Операционная система

СУБД – Система управления базами данных ЭВМ Электронно-вычислительная машина

ЗПС – Замкнутая программная среда в ОС Astra Linux Special Edition — это

механизм авторизации на основании контроля целостности файлов с использованием проверки ЭЦП, реализованный в модуле ядра ОС disgsig_verif

ФСТЭК

России

– Федеральная служба по техническому и экспортному контролю России

<table style="width:100%;">
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
<th colspan="10" style="text-align: center;">
<p>Лист регистрации изменений</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2">
<p>Изм.</p>
</td>
<td colspan="4">
<p>Номера листов (страниц)</p>
</td>
<td rowspan="2" style="text-align: center;">
<p>Всего листов (страниц) в документе</p>
</td>
<td rowspan="2">
<p>Номер документа</p>
</td>
<td rowspan="2" style="text-align: center;">
<p>Входящий номер сопроводите льного документа и</p>
<p>дата</p>
</td>
<td rowspan="2">
<p>Подпись</p>
</td>
<td rowspan="2">
<p>Дата</p>
</td>
</tr>
<tr>
<td>
<p>измене нных</p>
</td>
<td>
<p>замене нных</p>
</td>
<td>
<p>новых</p>
</td>
<td>
<p>аннулир ованных</p>
</td>
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
