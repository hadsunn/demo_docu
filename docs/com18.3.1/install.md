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
<p>УТВЕРЖДЕН 643.72410666.00067-08 97 01-ЛУ</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>ЗАЩИЩЕННАЯ СИСТЕМА УПРАВЛЕНИЯ БАЗАМИ ДАННЫХ «JATOBA»</p>
<p><strong>Руководство по установке</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 97 01</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 216</p>
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

# <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25366in;height:0.25208in" />АННОТАЦИЯ

> Данный документ представляет собой руководство по установке защищенной системы управления базами данных «Jatoba» (далее по тексту – СУБД, СУБД «Jatoba»).
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24958in" />Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра
>
> 4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.
>
> Например, СУБД «Jatoba» версии 5.x по умолчанию устанавливается в директорию:

- ОС Windows – «C:\Program Files\GIS\Jatoba\5\bin»;

- ОС Linux – «/usr/jatoba-5/bin».

> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25305in;height:0.25208in" /><img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25208in;height:0.25208in" />Степени важности примечаний, применяемые в документе:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Важная информация</strong> – указания, требующие особого внимания</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>Дополнительная информация</strong> – указания, позволяющие упростить работу с изделием</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p>
</blockquote></td>
</tr>
</tbody>
</table>

# СОДЕРЖАНИЕ

# 

1.  [Общие сведения о СУБД «Jatoba» 6](#общие-сведения-о-субд-jatoba)

    1.  [Назначение СУБД «Jatoba» 6](#назначение-субд-jatoba)

    2.  [Функции СУБД «Jatoba» 6](#функции-субд-jatoba)

    3.  [Требования к среде функционирования СУБД «Jatoba» 8](#требования-к-среде-функционирования-субд-jatoba)

    <!-- -->

    1.  [Требования по совместимости с антивирусным программным обеспечением 10](#_bookmark6)

2.  [Состав СУБД «Jatoba» 12](#состав-субд-jatoba)

3.  [Установка СУБД «Jatoba» на ОС семейства GNU/Linux 16](#установка-субд-jatoba-на-ос-семейства-gnulinux)

    1.  [Инсталлятор СУБД «Jatoba» для ОС семейства GNU/Linux 18](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux)

        1.  [Подготовительные действия для запуска инсталлятора 19](#подготовительные-действия-для-запуска-инсталлятора)

        2.  [Установка СУБД инсталлятором 20](#установка-субд-инсталлятором)

        3.  [Установка СУБД с поддержкой платформы 1C 23](#установка-субд-с-поддержкой-платформы-1c)

    2.  [Установка СУБД «Jatoba» с генератором конфигурационного файла ja_tune 24](#_bookmark16)

        1.  [Запуск утилиты из консоли ОС 25](#запуск-утилиты-из-консоли-ос)

        2.  [Запуск утилиты при инициализации каталога данных СУБД (jatoba-setup) 30](#setup)

    3.  [Пакеты установки СУБД «Jatoba» 33](#пакеты-установки-субд-jatoba)

        1.  [Базовая установка 33](#базовая-установка)

        2.  [Установка клиентской части СУБД «Jatoba» на ОС семейства GNU/Linux 34](#установка-клиентской-части-субд-jatoba-на-ос-семейства-gnulinux)

        3.  [Установка пакетов, расширяющих возможности СУБД 35](#установка-пакетов-расширяющих-возможности-субд)

    4.  [Порядок установки СУБД «Jatoba» на ОС GNU/Linux, основанной на Debian из локального](#порядок-установки-субд-jatoba-на-ос-gnulinux-основанной-на-debian-из-локального-репозитория) [репозитория 65](#порядок-установки-субд-jatoba-на-ос-gnulinux-основанной-на-debian-из-локального-репозитория)

    5.  [Порядок установки СУБД «Jatoba» на ОС семейства GNU/Linux, основанной на RPM из локального](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория) [репозитория 69](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория)

    6.  [Добавление в автозапуск службы Jatoba в ОС GNU/Linux 74](#добавление-в-автозапуск-службы-jatoba-в-ос-gnulinux)

    7.  [Порядок установки СУБД «Jatoba» из DEB/RPM-файлов 75](#порядок-установки-субд-jatoba-из-debrpm-файлов)

        1.  [Установка СУБД «Jatoba» из DEB-файлов 75](#установка-субд-jatoba-из-deb-файлов)

        2.  [Установка СУБД «Jatoba» из RPM-файлов 78](#установка-субд-jatoba-из-rpm-файлов)

4.  [Установка СУБД «Jatoba» на ОС семейства Microsoft Windows 80](#установка-субд-jatoba-на-ос-семейства-microsoft-windows)

    1.  [Порядок установки СУБД «Jatoba» на ОС Windows Server 2016 80](#порядок-установки-субд-jatoba-на-ос-windows-server-2016)

        1.  [Возможная ошибка при установке СУБД «Jatoba» на ОС Windows 86](#возможная-ошибка-при-установке-субд-jatoba-на-ос-windows)

    2.  [Установка клиентской части СУБД «Jatoba» на ОС Windows Server 2016 88](#_bookmark75)

        1.  [Порядок установки СУБД «Jatoba» на ОС Windows 88](#порядок-установки-субд-jatoba-на-ос-windows)

5.  [Установка обновлений СУБД «Jatoba» 91](#установка-обновлений-субд-jatoba)

6.  [Установка компонента «Jatoba data safe» 92](#установка-компонента-jatoba-data-safe)

    1.  [Установка компонента JDS под ОС GNU/Linux с помощью инсталлятора 92](#установка-компонента-jds-под-ос-gnulinux-с-помощью-инсталлятора)

        1.  [Запуск компонента JDS. Установка/смена пароля администратора 99](#запуск-компонента-jds.-установкасмена-пароля-администратора)

    2.  [Способы публикации WEB-приложения JDS в инфраструктуре 101](#способы-публикации-web-приложения-jds-в-инфраструктуре)

        1.  [Установка веб-сервера nginx 106](#установка-веб-сервера-nginx)

        2.  [Удаление веб-сервера nginx 107](#удаление-веб-сервера-nginx)

    3.  [Удаление компонента JDS 108](#удаление-компонента-jds)

    4.  [Обновление компонента JDS в ручном режиме 109](#обновление-компонента-jds-в-ручном-режиме)

    5.  [Установка компонента JDS на ОС Windows с помощью инсталлятора 112](#установка-компонента-jds-на-ос-windows-с-помощью-инсталлятора)

        1.  [Настройка сервера ОС Windows Server 2016 113](#настройка-сервера-ос-windows-server-2016)

        2.  [Установка роли веб-сервера (IIS) 113](#установка-роли-веб-сервера-iis)

        3.  [Проверка установленного веб-сервера (IIS) 121](#проверка-установленного-веб-сервера-iis)

        4.  [Установка дополнительных компонент 122](#установка-дополнительных-компонент)

        5.  [Запуск инсталлятора JDS 123](#запуск-инсталлятора-jds)

        6.  [Главная страница 133](#главная-страница)

        7.  [Удаление и восстановление компонента JDS 134](#удаление-и-восстановление-компонента-jds)

    6.  [Установка компонента JDS на ОС Windows вручную из архива 135](#установка-компонента-jds-на-ос-windows-вручную-из-архива)

        1.  [Начальная настройка служебной СУБД «Jatoba» 135](#начальная-настройка-служебной-субд-jatoba)

        2.  [Настройка IIS 136](#настройка-iis)

        3.  [Создание каталогов 139](#создание-каталогов)

        4.  [Копирование компонента JDS 139](#копирование-компонента-jds)

        5.  [Создание сайта 140](#создание-сайта)

        6.  [Дополнительные параметры сайта 143](#дополнительные-параметры-сайта)

        7.  [Создание служебной БД «jdsdb» 144](#создание-служебной-бд-jdsdb)

        8.  [Установка службы «JDS Doctor» 144](#установка-службы-jds-doctor)

7.  [Сообщения об ошибках 145](#сообщения-об-ошибках)

    1.  [Ошибка установки открытого ключа репозитория 145](#ошибка-установки-открытого-ключа-репозитория)

    2.  [Ошибка настройки учетной записи системного пользователя ОС «postgres» 145](#ошибка-настройки-учетной-записи-системного-пользователя-ос-postgres)

    3.  [Ошибка настройки учетной записи пользователя СУБД «postgres» 146](#ошибка-настройки-учетной-записи-пользователя-субд-postgres)

    4.  [Ошибка повторной установки компонента «securityprofile» 146](#ошибка-повторной-установки-компонента-securityprofile)

    5.  [Ошибка в имени локального репозитория 146](#ошибка-в-имени-локального-репозитория)

[Приложение 1 148](#приложение-1)

[Приложение 2 150](#приложение-2)

[Установка СУБД «Jatoba» из локального репозитория в ОС Ubuntu 150](#установка-субд-jatoba-из-локального-репозитория-в-ос-ubuntu)

[Удаление СУБД «Jatoba» из локального репозитория в ОС Ubuntu 156](#_bookmark154)

[Приложение 3 162](#приложение-3)

[Установка СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром 162](#установка-субд-jatoba-из-локального-репозитория-в-ред-ос-7.3-муром)

[Удаление СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром 167](#удаление-субд-jatoba-из-локального-репозитория-в-ред-ос-7.3-муром)

[Приложение 4 173](#приложение-4)

[Установка СУБД «Jatoba» из локального репозитория в Альт 9 Server 173](#_bookmark161)

[Удаление СУБД «Jatoba» из локального репозитория в Альт 9 Server 180](#удаление-субд-jatoba-из-локального-репозитория-в-альт-9-server)

[Приложение 5 189](#приложение-5)

[Установка ОС Astra Linux 1.7 Special Edition Смоленск (x86-64) 189](#установка-ос-astra-linux-1.7-special-edition-смоленск-x86-64)

[Установка СУБД «Jatoba» из локального репозитория в ОС Astra Linux 1.7 Special Edition Смоленск (x86-64) 190](#установка-субд-jatoba-из-локального-репозитория-в-ос-astra-linux-1.7-special-edition-смоленск-x86-64)

[Удаление СУБД «Jatoba» из локального репозитория в ОС 200](#удаление-субд-jatoba-из-локального-репозитория-в-ос)

[Приложение 6 201](#приложение-6)

[Установка СУБД «Jatoba» из локального репозитория в ОС ОСНОВА 2.0 201](#установка-субд-jatoba-из-локального-репозитория-в-ос-основа-2.0)

[Приложение 7 209](#приложение-7)

[Пример установки веб-сервера (IIS) на ОС Windows 10 209](#пример-установки-веб-сервера-iis-на-ос-windows-10)

[Приложение 8 213](#приложение-8)

[Установка службы JDS.PasDoctor 213](#установка-службы-jds.pasdoctor)

[Перечень сокращений 215](#перечень-сокращений)

# ОБЩИЕ СВЕДЕНИЯ О СУБД «JATOBA»

## Назначение СУБД «Jatoba»

> СУБД «Jatoba» является программным средством, предназначенным для создания и управления реляционными базами данных на базе ЭВМ под управлением операционных систем (ОС), представленных в таблице [1.1](#_bookmark2).
>
> <span id="_bookmark2" class="anchor"></span>Таблица 1.1 – Перечень поддерживаемых ОС

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
<th rowspan="2" style="text-align: center;"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p><strong>Наименование ОС</strong></p>
</blockquote></th>
<th rowspan="2" style="text-align: center;"><blockquote>
<p><strong>Серверная часть</strong></p>
</blockquote></th>
<th rowspan="2" style="text-align: center;"><blockquote>
<p><strong>Клиентская часть</strong></p>
</blockquote></th>
<th rowspan="2" style="text-align: center;"><blockquote>
<p><strong>Docker (ver.)</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>Сертификат ФСТЭК</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>№ серт.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дата</strong></p>
<p><strong>выдачи</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>Windows 10</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>Windows 11</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>Windows Server 2016</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>Windows Server 2019</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>Windows Server 2022</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>6</p>
</blockquote></td>
<td><blockquote>
<p>Astra Linux 1.7 Special Edition Смоленск (x86-64)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>25.0.5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>2557</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>30.01.2012</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>7</p>
</blockquote></td>
<td><blockquote>
<p>Astra Linux 1.8 (x86-64)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>25.0.5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>8</p>
</blockquote></td>
<td><blockquote>
<p>Debian 11</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>24.0.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>9</p>
</blockquote></td>
<td><blockquote>
<p>Debian 12</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>24.0.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>10</p>
</blockquote></td>
<td><blockquote>
<p>Альт 8 СП</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>27.1.1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3866</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>10.08.2018</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>11</p>
</blockquote></td>
<td><blockquote>
<p>Альт 10 СП</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>27.1.1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>3866</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>10.08.2018</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>12</p>
</blockquote></td>
<td><blockquote>
<p>Альт 9.1 Server</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>13</p>
</blockquote></td>
<td><blockquote>
<p>Альт 10 Server</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>23.0.1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>14</p>
</blockquote></td>
<td><blockquote>
<p>Ubuntu 20.04</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>24.0.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>15</p>
</blockquote></td>
<td><blockquote>
<p>Ubuntu 22.04</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>24.0.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>16</p>
</blockquote></td>
<td><blockquote>
<p>Ubuntu 24.04</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>24.0.2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>17</p>
</blockquote></td>
<td><blockquote>
<p>ОСНОВА2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>20.10.5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4381</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>31.03.2021</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>18</p>
</blockquote></td>
<td><blockquote>
<p>РЕД ОС 7.3 Муром</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p>25.0.7</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4060</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>12.01.2019</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>19</p>
</blockquote></td>
<td><blockquote>
<p>РЕД ОС 8</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>20</p>
</blockquote></td>
<td><blockquote>
<p>РОСА «Хром» 12.4</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>21</p>
</blockquote></td>
<td><blockquote>
<p>Oracle Linux 8.4</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
</tbody>
</table>

## Функции СУБД «Jatoba»

> СУБД «Jatoba» реализует следующие функциональные возможности:

- управление данными во внешней памяти;

- управление данными в оперативной памяти;

- выполнение запросов (DDL/DML);

- управление транзакциями;

- журнализация изменений, резервное копирование и восстановление базы данных после сбоев, репликация.

> СУБД «Jatoba» в дополнение к стандартным возможностям управления базами данных, реализует следующие функции:

- хранение пространственных, географических и геометрических данных, поддержка запросов к ним и управление ими;

- синтаксическая совместимость с распространенными PL/SQL Oracle;

- расширенные возможности секционирования больших таблиц;

- протоколирование, анализ и контроль выполнения команд манипулирования данными (DDL/DML);

- сбор журналов аудита всех операций и загрузка конфигураций в СУБД;

- работа в составе отказоустойчивого кластера с механизмом переключения нагрузки на основной узел кластера;

- защита от несанкционированного изменения конфигурационных файлов;

- единый пользовательский интерфейс для управления конфигурациями компонентов и просмотра их состояния СУБД.

## Требования к среде функционирования СУБД «Jatoba»

> СУБД «Jatoba» устанавливается на ЭВМ с процессорами, имеющими архитектуру x86, x86-64 и AMD64, удовлетворяющие следующим аппаратным требованиям, указанным в таблице [1.2](#_bookmark5).
>
> <span id="_bookmark5" class="anchor"></span>Таблица 1.2 – Программные и аппаратные требования к ЭВМ, на которых функционируют клиентская и серверная часть СУБД

<table style="width:100%;">
<colgroup>
<col style="width: 36%" />
<col style="width: 40%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Характеристика</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Сертифицированная ОС</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>Требования к аппаратному обеспечению сервера СУБД</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>ОЗУ</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Не менее 2 Гб</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Свободный объем жесткого диска</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Минимальный объем от 40 Гб Рекомендуемый объем от 100 Гб</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Устройства видео вывода</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Монитор и видеоадаптер с поддержкой VGA и разрешением 800x600 или выше</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Тип процессора и минимальная тактовая частота процессора</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>64-разрядный процессор Intel или AMD 3 ГГц или больше</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Минимальное количество ядер</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>4</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Максимальное количество ядер</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>256</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Устройства ввода-вывода</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Стандартные 105-клавишная</p>
<p>клавиатура и манипулятор «мышь» с USB, либо PS/2-интерфейсами</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Адаптер Ethernet</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>100 Мбит/с</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>Требования к аппаратному обеспечению АРМ управления</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>ОЗУ</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Не менее 4 Гб</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Свободный объем жесткого диска</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>От 3 Гб</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Устройства видео вывода</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Монитор и видеоадаптер с</p>
<p>поддержкой VGA и разрешением 800x600 или выше</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Тип процессора и минимальная тактовая частота процессора</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>64-разрядный процессор Intel или AMD</p>
<p>Рекомендуемая частота: 2.4 ГГц или больше</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Устройства ввода-вывода</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB-интерфейсами, либо PS/2 интерфейсами</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Адаптер Ethernet</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>100 Мбит/с</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>Требования к программному обеспечению сервера</strong></p>
</blockquote></td>
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
<th style="text-align: center;"><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Характеристика</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Сертифицированная ОС</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Операционная система</p>
</blockquote></td>
<td><blockquote>
<p>Требования приведены в таблице</p>
<p><a href="#_bookmark2">1.1</a></p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>Требования к программному обеспечению АРМ управления</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Операционная система</p>
</blockquote></td>
<td><blockquote>
<p>Требования приведены в таблице <a href="#_bookmark2">1.1</a></p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>Требования к аппаратному обеспечению сервера Jatoba data safe</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ОЗУ</p>
</blockquote></td>
<td><blockquote>
<p>Не менее 2 Гб</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Свободный объем жесткого диска</p>
</blockquote></td>
<td><blockquote>
<p>Минимальный объем от 40 Гб Рекомендуемый объем от 100 Гб</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Устройства видео вывода</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Монитор и видеоадаптер с поддержкой VGA и разрешением 800x600 или выше</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Тип процессора и минимальная тактовая частота процессора</p>
</blockquote></td>
<td><blockquote>
<p>64-разрядный процессор Intel или AMD 3 ГГц или больше</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Минимальное количество ядер</p>
</blockquote></td>
<td><blockquote>
<p>4</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Устройства ввода-вывода</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB, либо PS/2 интерфейсами</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td><blockquote>
<p>Адаптер Ethernet</p>
</blockquote></td>
<td><blockquote>
<p>100 Мбит/с</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td colspan="3" style="text-align: center;"><blockquote>
<p><strong>Требования к программному обеспечению сервера Jatoba data safe</strong></p>
</blockquote></td>
</tr>
<tr>
<td rowspan="3"><blockquote>
<p>Поддерживаемые платформы</p>
</blockquote></td>
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
<td><blockquote>
<p>СУБД</p>
</blockquote></td>
<td><blockquote>
<p>Защищенная система управления</p>
<p>базами данных «Jatoba»</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td rowspan="2"><blockquote>
<p>Веб-сервер</p>
</blockquote></td>
<td><blockquote>
<p>IIS 10</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Nginx</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компоненты</p>
</blockquote></td>
<td><blockquote>
<p>ASP.NET Core 6.0 Runtime (v6.0.1) – Windows Hosting Bundle Installer</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td rowspan="6"><blockquote>
<p>Internet браузер</p>
</blockquote></td>
<td><ul>
<li><p>Яндекс.Браузер</p></li>
</ul></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><ul>
<li><p>Chromium</p></li>
</ul></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><ul>
<li><p>Mozilla Firefox</p></li>
</ul></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><ul>
<li><p>Opera</p></li>
</ul></td>
<td><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><ul>
<li><p>Microsoft Edge</p></li>
</ul></td>
<td><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><ul>
<li><p>Google Chrome</p></li>
</ul></td>
<td><blockquote>
<p></p>
</blockquote></td>
</tr>
</tbody>
</table>

1.  <span id="_bookmark6" class="anchor"></span>**Требования по совместимости с антивирусным программным обеспечением** При выполнении установки и в ходе дальнейшей эксплуатации СУБД «Jatoba», и ее отдельных компонентов, в случае применения антивирусного программного обеспечения

> необходимо обеспечить добавление исключений.
>
> Приведенные исключения для антивирусного программного обеспечения делятся на обязательные и рекомендуемые. Список рекомендаций содержится в таблице
>
> Таблица 1.3 – Рекомендации по включению каталогов и файлов СУБД «Jatoba», а также отдельных компонентов в исключения антивирусного программного обеспечения

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
<th colspan="2" rowspan="2" style="text-align: center;"><blockquote>
<p><strong>Путь к каталогу</strong></p>
</blockquote></th>
<th colspan="3" style="text-align: center;"><blockquote>
<p><strong>Примечание</strong></p>
</blockquote></th>
</tr>
<tr>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>Обяз.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Рекоменд.</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="5" style="text-align: center;"><blockquote>
<p><strong>Каталоги СУБД Jatoba</strong></p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/usr/jatoba-&lt;ver&gt;</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/var/lib/jatoba</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/opt/prometheus</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/etc/sysconfig/jatoba</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td colspan="5" style="text-align: center;"><blockquote>
<p><strong>Компонент JDS</strong></p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/opt/jds</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/opt/jds-doctor</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/opt/prometheus</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/opt/jds-scripts</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/usr/local/lib/pg-explain</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/usr/local/lib/pg-monitor</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/var/log/jds</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/var/log/pg-explain</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/var/log/pg-explain-db</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/var/log/pg-monitor</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/etc/sysconfig/pg-explain</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>/etc/sysconfig/pg-monitor</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td colspan="5" style="text-align: center;"><blockquote>
<p><strong>Каталоги с архивом WAL-файлов</strong></p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>Параметр archive_command в файле postgresql.conf</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="5" style="text-align: center;"><blockquote>
<p><strong>Каталоги с резервными копиями</strong></p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: left;"><blockquote>
<p>Параметр в команде создания резервной копии или в конфигурационном файле утилиты резервного копирования</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="5" style="text-align: center;"><blockquote>
<p><strong>Каталоги табличных пространств</strong></p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>Каталог табличного пространства (ТП) указывается непосредственно в команде при его создании</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="5" style="text-align: center;"><blockquote>
<p><strong>Файлы служб</strong></p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>jatoba&lt;ver&gt;-service</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>jadog.service</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>pgbouncer.service</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>№ изменения:</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>Дата внесения изм:</p>
</blockquote></td>
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
<th rowspan="2" style="text-align: center;"><blockquote>
<p><strong>Путь к каталогу</strong></p>
</blockquote></th>
<th colspan="2"><blockquote>
<p><strong>Примечание</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Обяз.</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Рекоменд.</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>jatoba&lt;ver&gt;_sql_exporter.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jatoba&lt;ver&gt;_node_exporter.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jatoba&lt;ver&gt;_postgres_exporter.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jatoba&lt;ver&gt;_prometheus.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jatoba{version}_sql_exporter.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jatoba{version}_node_exporter.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jatoba{version}_postgres_exporter.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jatoba{version}_prometheus.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jds.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>jds-doctor.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg-explain.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg-monitor.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg-monitor-collector.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg-monitor-dispatcher.service</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>•</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Критерием для обязательного и рекомендованного исключения для каталогов, служит их назначение. Если в них содержатся данные (файлы и каталоги) баз данных (каталоги с данными, резервными копиями, архивами и т.д.) и исполняемые файлы, то такие каталоги и файлы необходимо обязательно добавлять в исключения. Конфигурационные файлы, скрипты, файлы служб, каталоги с логами – рекомендуется добавлять в исключения.

# СОСТАВ СУБД «JATOBA»

> В состав СУБД «Jatoba» входят компоненты, указанные в таблице [2.1](#_bookmark8). <span id="_bookmark8" class="anchor"></span>Таблица 2.1 – Состав компонент СУБД «Jatoba»

<table style="width:100%;">
<colgroup>
<col style="width: 6%" />
<col style="width: 41%" />
<col style="width: 18%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr>
<th colspan="2" rowspan="3"><blockquote>
<p><strong>Полное название компонента</strong></p>
</blockquote></th>
<th rowspan="3"><blockquote>
<p><strong>Наименование англоязычное</strong></p>
</blockquote></th>
<th colspan="8" style="text-align: center;"><blockquote>
<p><strong>Версия компонента</strong></p>
</blockquote></th>
</tr>
<tr>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J4</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J5</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J6</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J18</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2"><blockquote>
<p>Базовый инсталляционный пакет</p>
</blockquote></td>
<td><blockquote>
<p>Jatoba</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Генератор паролей. pwgen</p>
</blockquote></td>
<td><blockquote>
<p>pwgen</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Маскирование паролей</p>
</blockquote></td>
<td><blockquote>
<p>ja_pwmasking</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Поиск ближайших соседей. KNN</p>
</blockquote></td>
<td><blockquote>
<p>KNN</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Компонент xid64</p>
</blockquote></td>
<td><blockquote>
<p>xid64</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Сжатие данных на уровне страниц.</p>
<p>Компонент "ja_Compression"</p>
</blockquote></td>
<td><blockquote>
<p>ja_Compression</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Восстановление поврежденных WAL</p>
<p>записей. WAL Recovery</p>
</blockquote></td>
<td><blockquote>
<p>WAL Recovery</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Автоматическое создание директорий</p>
<p>табличных пространств</p>
</blockquote></td>
<td><blockquote>
<p>ja_TableSpace</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Генератор конфигурационного файла</p>
</blockquote></td>
<td><blockquote>
<p>ja_tune</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>Механизм автономных транзакций</p>
</blockquote></td>
<td><blockquote>
<p>ja_ATX</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td><blockquote>
<p>DataWiping: очистка файлов данных</p>
<p>объектов доступа</p>
</blockquote></td>
<td><blockquote>
<p>ja_WIpe_Files</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2"><blockquote>
<p>Управление режимом работы узлов кластера. Компонент «jaDog»</p>
</blockquote></td>
<td><blockquote>
<p>jaDog</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2"><blockquote>
<p>Контроль субъектов доступа. Компонент «Jatoba data vault»</p>
</blockquote></td>
<td><blockquote>
<p>Jatoba data vault</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2"><blockquote>
<p>Формирование отчетов по журналам СУБД. Компонент «pgBadger»</p>
</blockquote></td>
<td><blockquote>
<p>pgBadger</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2"><blockquote>
<p>Расширенное резервное копирование. Компонент «pg_ProBackup»</p>
</blockquote></td>
<td><blockquote>
<p>pg_ProBackup</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td colspan="2"><blockquote>
<p>Планирование заданий СУБД. Компонент «pg_Task»</p>
</blockquote></td>
<td><blockquote>
<p>pg_Task</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2"><blockquote>
<p>Формирование отчетов производительности СУБД. Компонент «pg_Profile»</p>
</blockquote></td>
<td><blockquote>
<p>pg_Profile</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2"><blockquote>
<p>Пользовательский веб-интерфейс для администраторов.</p>
<p>Компонент «Jatoba data safe»</p>
</blockquote></td>
<td><blockquote>
<p>Jatoba data safe</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" rowspan="4"><blockquote>
<p>Компонент мониторинга запросов СУБД</p>
</blockquote></td>
<td><blockquote>
<p>pg-explain</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg-explain-db</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg-monitor</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg-monitor-</p>
<p>collector</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 47%" />
<col style="width: 18%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr>
<th rowspan="4"><blockquote>
<p><strong>Полное название компонента</strong></p>
</blockquote></th>
<th rowspan="3"><blockquote>
<p><strong>Наименование англоязычное</strong></p>
</blockquote></th>
<th colspan="8"><blockquote>
<p><strong>Версия компонента</strong></p>
</blockquote></th>
</tr>
<tr>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J4</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J5</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J6</strong></p>
</blockquote></th>
<th colspan="2"><blockquote>
<p><strong>J18</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Д</strong></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p>pg-monitor-</p>
<p>dispatcher</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></th>
<th style="text-align: center;"></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Синхронизация учетных записей с MS Active Directory / LDAP.</p>
<p>Компонент «ja_Sync_LDAP»</p>
</blockquote></td>
<td><blockquote>
<p>ja_Sync_LDAP</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Обфускация кода PL/spgSQL. Компонент «PLspgSQL»</p>
</blockquote></td>
<td><blockquote>
<p>PLspgSQL</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Высокопроизводительный кластер. Компонент «ja_Hipe_Cluster»</p>
</blockquote></td>
<td><blockquote>
<p>ja_Hipe_Cluster</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Централизованный сбор записей событий СУБД. Компонент «ja_Log»</p>
</blockquote></td>
<td><blockquote>
<p>ja_Log</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка платформы 1С</p>
</blockquote></td>
<td><blockquote>
<p>1C_support</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент совместимости с 1С.</p>
<p>«fasttrun»</p>
</blockquote></td>
<td><blockquote>
<p>fasttrun</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент совместимости с 1С.</p>
<p>«fulleq»</p>
</blockquote></td>
<td><blockquote>
<p>fulleq</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент совместимости с 1С.</p>
<p>«mchar»</p>
</blockquote></td>
<td><blockquote>
<p>mchar</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент совместимости с 1С.</p>
<p>«online_analyze»</p>
</blockquote></td>
<td><blockquote>
<p>online_analyze</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент совместимости с 1С.</p>
<p>«plantuner»</p>
</blockquote></td>
<td><blockquote>
<p>plantuner</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Контроль целостности. Компонент «ja_CSum»</p>
</blockquote></td>
<td><blockquote>
<p>ja_CSum</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Балансировка подключений пользователей к СУБД.</p>
<p>Компонент «jaPooler»</p>
</blockquote></td>
<td><blockquote>
<p>jaPooler</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td></td>
</tr>
<tr>
<td rowspan="3"><blockquote>
<p>Обеспечение работы с СУБД Oracle</p>
</blockquote></td>
<td><blockquote>
<p>Oracle_FDW</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>OraFCE</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>pg_Variables</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Выявление и предотвращение исполнения нетипичных SQL-запросов.</p>
<p>Компонент «SQL_Firewall»</p>
</blockquote></td>
<td><blockquote>
<p>SQL_Firewall</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Библиотека для взаимодействия с моделями машинного обучения.</p>
<p>Компонент "ONNX Runtime"</p>
</blockquote></td>
<td><blockquote>
<p>onnxruntime</p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p></p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Сокрытие информации в файлах данных СУБД. Компонент «Jatoba crypto access storage»</p>
</blockquote></td>
<td><blockquote>
<p>Jatoba crypto access storage</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Формирование HTTP/HTTPS запросов из СУБД. Компонент «pgSQL-HTTP»</p>
</blockquote></td>
<td><blockquote>
<p>pgSQL-HTTP</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
<td><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 47%" />
<col style="width: 18%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr>
<th rowspan="3"><blockquote>
<p><strong>Полное название компонента</strong></p>
</blockquote></th>
<th rowspan="3"><blockquote>
<p><strong>Наименование англоязычное</strong></p>
</blockquote></th>
<th colspan="8" style="text-align: center;"><blockquote>
<p><strong>Версия компонента</strong></p>
</blockquote></th>
</tr>
<tr>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J4</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J5</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J6</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J18</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Д</strong></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Обеспечение работы с СУБД MS SQL Server. Компонент «TDS_FDW»</p>
</blockquote></td>
<td><blockquote>
<p>TDS_FDW</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Pасширенное журналирование событий СУБД. Компонент «pgAudit»</p>
</blockquote></td>
<td><blockquote>
<p>pgAudit</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент «pgauditlogtofile»</p>
</blockquote></td>
<td><blockquote>
<p>pgauditlogtofile</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Работа с географическими данными. Компонент «PostGIS»</p>
</blockquote></td>
<td><blockquote>
<p>PostGIS</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Расширенное резервное копирование. Компонент «PTrack»</p>
</blockquote></td>
<td><blockquote>
<p>PTrack</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Управление парольными политиками пользователей СУБД.</p>
<p>Компонент «SecurityProfile»</p>
</blockquote></td>
<td><blockquote>
<p>SecurityProfile</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Управление планами запросов. Компонент «ja_Plan_Manager»</p>
</blockquote></td>
<td><blockquote>
<p>ja_Plan_Manager</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Контроль выполненных планов запросов Компонент «pg_store_plans»</p>
</blockquote></td>
<td><blockquote>
<p>pg_store_plans</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Настройка планов выполнения. Компонент</p>
<p>«pg_hint_plan»</p>
</blockquote></td>
<td><blockquote>
<p>pg_hint_plan</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>«Jatoba» в контейнере</p>
</blockquote></td>
<td><blockquote>
<p>ja_Container</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент сбора аппаратных и программных показателей работы GNU/Linux.</p>
<p>node_exporter.</p>
</blockquote></td>
<td><blockquote>
<p>node_exporter</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент сбора метрик СУБД.</p>
<p>postgres_exporter</p>
</blockquote></td>
<td><blockquote>
<p>postgres_exporter</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>SQL экспортёр. Компонент сбора расширенных</p>
<p>метрик СУБД</p>
</blockquote></td>
<td><blockquote>
<p>sql_exporter</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент мониторинга различных программных систем и сервисов.</p>
<p>Prometheus</p>
</blockquote></td>
<td><blockquote>
<p>prometheus</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Компонент управления и обработки оповещений</p>
<p>в системе мониторинга Prometheus. Alertmanager</p>
</blockquote></td>
<td><blockquote>
<p>Alertmanager</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Работа СУБД «Jatoba» в режиме ЗПС в ОС Astra Linux</p>
</blockquote></td>
<td></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>gis-cryptoplatform</p>
</blockquote></td>
<td><blockquote>
<p>gis-cryptoplatform</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Поддержка лексографического идентификатора. Компонент «pg-ulid»</p>
</blockquote></td>
<td><blockquote>
<p>pg-ulid</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Запись событий информационной безопасности. Компонент «ja_seceventlog»</p>
</blockquote></td>
<td><blockquote>
<p>ja_seceventlog</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Обратный индекс с хранением позиционной информации, полнотекстовый поиск.</p>
<p>Компонент «rum»</p>
</blockquote></td>
<td><blockquote>
<p>rum</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Реорганизация таблицы с минимальными блокировками. Компонент «pg_repack»</p>
</blockquote></td>
<td><blockquote>
<p>pg_repack</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 47%" />
<col style="width: 18%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr>
<th rowspan="3"><blockquote>
<p><strong>Полное название компонента</strong></p>
</blockquote></th>
<th rowspan="3"><blockquote>
<p><strong>Наименование англоязычное</strong></p>
</blockquote></th>
<th colspan="8" style="text-align: center;"><blockquote>
<p><strong>Версия компонента</strong></p>
</blockquote></th>
</tr>
<tr>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J4</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J5</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J6</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>J18</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Д</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Д</strong></th>
<th style="text-align: center;"><blockquote>
<p><strong>ОК</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Работа СУБД Jatoba в режиме ЗПС в ОС ОСНОВА</p>
</blockquote></td>
<td><blockquote>
<p>osnova-digsig-key</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Расширенный тип данных tsvector. Компонент "tsvector2"</p>
</blockquote></td>
<td><blockquote>
<p>tsvector2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Полнотекстовый поиск и определение похожих текстов. Компонент "ja_Similar"</p>
</blockquote></td>
<td><blockquote>
<p>ja_Similar</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Инвентаризация СУБД</p>
</blockquote></td>
<td><blockquote>
<p>ja_Inventory</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td><blockquote>
<p>Cвободная библиотека для проверки орфографии и морфологического анализа. Компонент</p>
<p>«hunspell»</p>
</blockquote></td>
<td><blockquote>
<p>hunspell</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Маскирование данных. Компонент «ja_anonymizer»</p>
</blockquote></td>
<td><blockquote>
<p>ja_anonymizer</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Архивация и восстановление данных. Компонент «wal-g»</p>
</blockquote></td>
<td><blockquote>
<p>wal-g</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Х</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Примечание:

- Д - Дистрибутив

- ОК - Образ контейнера.

# УСТАНОВКА СУБД «JATOBA» НА ОС СЕМЕЙСТВА GNU/LINUX

> Установку СУБД «Jatoba» возможно провести тремя способами:

1)  Установка из локального репозитория инсталлятором (см. п. [3.1](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux)).

2)  Установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него п. ([3.3](#пакеты-установки-субд-jatoba)).

3)  Установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя (п.п. [3.4](#порядок-установки-субд-jatoba-на-ос-gnulinux-основанной-на-debian-из-локального-репозитория), [3.5](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория)).

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Пользователь может найти весь необходимый набор deb/rpm-файлов на компакт-диске.
>
> Установка СУБД «Jatoba» на ОС GNU/Linux происходит в несколько этапов:

- настройка репозитория СУБД;

- установка основных пакетов;

- инициализация директории данных СУБД;

- конфигурирование СУБД;

- запуск сервиса СУБД.

> Пример установки и удаления СУБД «Jatoba» из локального репозитория для:

- ОС Ubuntu 18.04 приведен в Приложении [2](#приложение-2);

- РЕД ОС 7.3 Муром приведен в Приложении [3](#приложение-3);

- Альт 9 Server приведен в Приложении [4](#приложение-4).

> Пример установки СУБД «Jatoba» из локального репозитория в Astra Linux 1.6 Special Edition Смоленск в замкнутой программной среде приведен в Приложении [5](#приложение-5) настоящего документа.
>
> Концептуальная схема последовательности действий представлена на рисунке [3.1](#_bookmark10).
>
> Более подробное описание установки приведено ниже.

Начало у стан овк и

Подг о товк а ОС к ус тан о вк е СУБД

Завер ш е н и е у стан овк и

> Зап уск (автозап у ск ) и п р овер к а р аботы СУБД
>
> Д оп о лн и тельн ое

к он фи г ури рован и е СУБД

> Ин и ц и али зац и я к аталог а данны х
>
> Ус тан о вк а о сн овн ы х п ак е тов

Л ок альн ы й репо зи тори й

> (CDROM)
>
> DEB/ RPM -фай лы (оп ци он альн о)
>
> Ус тан о вк а р еп ози то р и я СУБД
>
> <span id="_bookmark10" class="anchor"></span>Рисунок 3.1 – Последовательность действий при установке СУБД на ОС GNU/Linux

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 93%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25208in;height:0.25208in" /></p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p><strong>Только для ОС Astra Linux 1.6 Смоленск</strong></p>
<p>Для корректного обновления системы и последующей установки СУБД «Jatoba» рекомендуется подключить и примонтировать все ISO-файлы установки и обновления ОС одновременно, прописав репозитории в виде локальных директорий точек монтирования. При использовании источников установки «cdrom» возможны ошибки нахождения зависимых пакетов на</p>
<p>разных ISO-образах.</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25208in;height:0.25208in" /></p>
</blockquote></td>
<td><blockquote>
<p>Перед началом установки СУБД «Jatoba» в ОС необходимо поставить все последние обновления.</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 93%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25208in;height:0.25208in" /></p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p><strong>Только для ОС CentOS Linux 8.2 и выше</strong></p>
<p>Ввиду прекращения производителем поддержки ОС CentOS Linux 8-й версии необходимо в качестве источника для установки пакетов и обновлений системы</p>
<p>использовать архивный репозиторий <a href="https://vault.centos.org/"><u>https://vault.centos.org</u></a></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25319in;height:0.25208in" /></p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Установка и запуск СУБД в ОС производится от имени пользователя «root» (суперпользователь). Порядок получения root-привилегий в различных ОС GNU/Linux может отличаться. Обычно для этого используется связка команд sudo su.</p>
<p>В случае если используется для получения root-привилегий команда su отдельно от sudo, то su следует обязательно использовать с параметром –l.</p>
<p>В случае отсутствия пакета sudo в системе, его необходимо установить. Для</p>
<p>получения соответствующих пакетов пользователю необходимо обратиться к соответствующему руководству администратора операционной системы.</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Инсталлятор СУБД «Jatoba» для ОС семейства GNU/Linux

> Инсталлятор выполняет базовую установку СУБД «Jatoba», инсталлируя пакеты:

- jatoba\<ver\>-client – клиентская часть СУБД;

- jatoba\<ver\>-contrib – вспомогательный набор модулей (расширений) СУБД;

- jatoba\<ver\>-libs – основные библиотеки для клиентской и серверной части СУБД;

- jatoba\<ver\>-server – серверная часть СУБД.

> Установка пакетов, расширяющих возможности СУБД, выполняется отдельно в соответствии с пунктом [3.3.3](#установка-пакетов-расширяющих-возможности-субд) настоящего документа.
>
> Работу инсталлятора возможно условно разделить на следующие этапы:

- подготовительные действия;

- начало установки.

## <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25138in;height:0.25073in" />Подготовительные действия для запуска инсталлятора

> Для корректного отображения сообщений инсталлятора (установочного скрипта) консоль ОС должна обеспечивать отображение кириллических символов.
>
> Для установки корректного набора шрифтов необходимо открыть файл
>
> /etc/vconsole.conf (в зависимости от дистрибутива ОС может располагаться в другом каталоге) и установить параметр:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>FONT="UniCyr_8x16"</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> Сохранить файл и выполнить обновление настроек:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>setfont UniCyr_8x16</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

На этапе подготовительных действий выполняются следующие шаги:

1)  В терминале войти в режим суперпользователя, выполнив команду:

> sudo su

2)  Выполнить обновление системы:

<img src="../docs/assets/images/com18.3.1/install/media/image26.png" style="width:7.10798in;height:2.64469in" />

> apt-get update -y && apt-get upgrade -y && apt dist-upgrade -y
>
> Рисунок 3.2 – Обновление системы

3)  Создать папку localrepo в корневом каталоге:

> mkdir /localrepo

4)  В созданную папку скопировать:

<img src="../docs/assets/images/com18.3.1/install/media/image27.png" style="width:3.45101in;height:1.07333in" />

- каталог \<pool\>

- каталог \<dist\>

- файл \<DEB-GPG-KEY-Jatoba\>

> Рисунок 3.3 – Структура каталога «localrepo»

5)  Расположить установочный скрипт jatoba.sh в корневой директории текущего пользователя:

<img src="../docs/assets/images/com18.3.1/install/media/image28.png" style="width:3.46872in;height:0.93969in" />

> Рисунок 3.4 – Расположение установочного скрипта jatoba.sh

6)  Дать разрешение на запуск:

<img src="../docs/assets/images/com18.3.1/install/media/image29.png" style="width:7.1038in;height:1.12375in" />

> \# cd /home
>
> \# chmod +x jatoba.sh
>
> Рисунок 3.5 – Команда установки прав на запуск скрипта

## Установка СУБД инсталлятором

> Этап начала установки включает в себя следующие шаги:

1)  Запустить скрипт:

> ./jatoba.sh install

<img src="../docs/assets/images/com18.3.1/install/media/image30.png" style="width:7.104in;height:0.79437in" />

> Рисунок 3.6 – Команда запуска установочного скрипта

2)  Указать версию устанавливаемой СУБД и подтвердить выбор для установки:

<img src="../docs/assets/images/com18.3.1/install/media/image31.png" style="width:7.02193in;height:1.4124in" />

> Рисунок 3.7 – Выбор версии СУБД
>
> После чего начнется процесс установки и построится дерево зависимостей. Автоматически добавится описание локального репозитория.
>
> Запустится процедура инициализации БД.

<img src="../docs/assets/images/com18.3.1/install/media/image32.png" style="width:7.10404in;height:0.76531in" />

> Рисунок 3.8 – Инициализация БД
>
> После процедуры инициализации БД в автоматическом режиме:

- внесутся изменения в конфигурационный файл «postgresql.conf»;

- добавится сервис в список автозапуска.

> <img src="../docs/assets/images/com18.3.1/install/media/image33.png" style="width:7.01066in;height:2.24656in" />
>
> Рисунок 3.9 – Добавление службы в автозагрузку

3)  Ввести пароль пользователя СУБД postgres и подтвердить его.

<img src="../docs/assets/images/com18.3.1/install/media/image34.png" style="width:6.99864in;height:4.01167in" />

> Рисунок 3.10 – Ввод и подтверждение пароля для пользователя «postgres»

4)  Окончание установки (рис. [3.11](#_bookmark14)).

<img src="../docs/assets/images/com18.3.1/install/media/image35.png" style="width:6.99543in;height:1.38in" />

> <span id="_bookmark14" class="anchor"></span>Рисунок 3.11 – Окно окончания установки

5)  Установить пароль для системного пользователя ОС «postgres»:

<img src="../docs/assets/images/com18.3.1/install/media/image36.png" style="width:7.06626in;height:1.40469in" />

> sudo passwd postgres
>
> Рисунок 3.12 - Установка пароля для системного пользователя ОС «postgres»

6)  Авторизоваться в psql, для этого нажать сочетание клавиш:

> CTRL + D
>
> Затем войти в psql:
>
> su postgres psql

7)  Установить пароль для пользователя СУБД «postgres»:

<img src="../docs/assets/images/com18.3.1/install/media/image37.png" style="width:7.00934in;height:2.415in" />

> \password
>
> Рисунок 3.13 – Установка пароля для пользователя СУБД На данном шаге установка СУБД закончена.

## Установка СУБД с поддержкой платформы 1C

> Для автоматической настройки экземпляра СУБД под работу с платформой 1С предусмотрена специальная опция «install_1c» инсталлятора:
>
> \# ./jatoba.sh install_1c \[-y\]
>
> Подробное описание действий, выполняемых инсталлятором с поддержкой платформы 1С, приведены в документе «Поддержка платформы 1С» 643.72410666.00067-08 98 01-13.

1.  <span id="_bookmark16" class="anchor"></span>**Установка СУБД «Jatoba» с генератором конфигурационного файла ja_tune** Компонент «ja_tune» предназначен для Администратора СУБД и является генератором рекомендуемого конфигурационного файла «postgresql.conf» на основе данных об аппаратной платформе, на которой предполагается запускать экземпляр СУБД, данных операционной системы, предполагаемом профиле нагрузки СУБД и некоторых

> дополнительных параметрах.
>
> Компонент «ja_tune» представляет собой самостоятельный исполняемый файл, запуск которого не зависит от запуска СУБД. В процессе функционирования компонент не требует наличия запущенного экземпляра СУБД и не требует подключения к какому-либо экземпляру СУБД.
>
> Компонент выполнен в форме консольного приложения и может запускаться Администратором СУБД в двух режимах:

1)  из консоли операционной системы (п. [3.2.1](#запуск-утилиты-из-консоли-ос));

2)  при запуске утилиты «jatoba-setup» при инициализации каталога данный СУБД (п. [3.2.2](#setup)).

> Для работы консольного приложения «ja_tune» требуются привилегии Администратора операционной системы для получения необходимой информации об аппаратных и системных характеристиках сервера СУБД.
>
> Консольное приложение ja_tune не интегрировано в инсталлятор СУБД. Использование утилиты генерации рекомендуемого конфигурационного файла СУБД доступно при выполнении ручной установки СУБД, в соответствии с положениями разделов в п.п. [3.4](#порядок-установки-субд-jatoba-на-ос-gnulinux-основанной-на-debian-из-локального-репозитория), [3.5](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория) настоящего документа.
>
> Консольное приложение «ja_tune» устанавливается в составе пакета jatoba\<ver\>-server – серверная часть СУБД.
>
> Приложение располагается в директории:
>
> /usr/jatoba-\<ver\>/bin
>
> Версия компонента ja_tune – 1.3.0.

## Запуск утилиты из консоли ОС

> Консольный запуск утилиты целесообразен для:

- определения рекомендованных параметров для установленной СУБД и последующей корректировкой таковых;

- определения рекомендованных параметров перед установкой СУБД.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24935in" />Параметры командной строки ja_tune можно вводить как верхнем, так и в нижнем регистре (например, SSD и ssd – равнозначные). При ошибке в значении параметра выводится информационное сообщение.
>
> Таблица 3.1 - Параметры командной строки ja_tune

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 15%" />
<col style="width: 71%" />
</colgroup>
<thead>
<tr>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p><strong>long option</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>short option/ full option</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2"><blockquote>
<p>-v</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>--ver</p>
<p>--version</p>
</blockquote></td>
<td><blockquote>
<p>output version information, then exit</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Вывод информации о версии ja_tune.</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="2"><blockquote>
<p>-o,</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>--os</p>
</blockquote></td>
<td><blockquote>
<p>operating system {windows|linux|unix|darwin}</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Название семейства операционной системы, для которой составляется конфигурационный файл.</p>
<p>Допустимый набор значений:</p>
</blockquote>
<ul>
<li><p>linux – ОС GNU/Linux (debian, redhat и т.п.);</p></li>
<li><p>unix – ОС семейства UNIX (freebsd, solaris и т.п.);</p></li>
<li><p>windows – ОС семейства Windows;</p></li>
<li><p>darwin – ОС macOS от Apple. Значение по умолчанию: linux</p></li>
</ul>
<blockquote>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="2"><blockquote>
<p>-a</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>--arch</p>
</blockquote></td>
<td><blockquote>
<p>processor architecture {amd64|x86-64|arm64}</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Название архитектуры сервера, для которого составляется конфигурационный файл.</p>
<p>Допустимый набор значений:</p>
</blockquote>
<ul>
<li><p>x86-64 – 64-битные системы от Intel и AMD;</p></li>
<li><p>amd64 – синоним x86-64;</p></li>
<li><p>arm64 – 64-битные системы на базе процессоров ARM. Значение по умолчанию: x86-64</p></li>
</ul>
<blockquote>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="2"><blockquote>
<p>-s</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>--stype</p>
<p>--strgtype</p>
</blockquote></td>
<td><blockquote>
<p>drive type {ssd|san|hdd}</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Тип подсистемы хранения, которая используется на целевом сервере. Допустимый набор значений:</p>
</blockquote>
<ul>
<li><p>hdd – используются накопители на жёстких магнитных дисках;</p></li>
<li><p>ssd – используются твердотельные накопители;</p></li>
<li><p>san – используются сетевые системы хранения данных, построенные на высокоскоростных и сверхвысокоскоростных каналах связи.</p></li>
</ul>
<blockquote>
<p>Значение по умолчанию: SSD</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>-p</p>
</blockquote></td>
<td><blockquote>
<p>--app</p>
</blockquote></td>
<td><blockquote>
<p>application profile deprecated, use --application {web|oltp|dwh|mixed|desktop|1c}</p>
</blockquote></td>
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
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th rowspan="2"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p><strong>long option</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>short option/ full option</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2"></td>
<td><blockquote>
<p>--application</p>
</blockquote></td>
<td><blockquote>
<p>Тип нагрузки (профиль), под который планируется эксплуатация СУБД.</p>
<p>Допустимый набор значений:</p>
</blockquote>
<ul>
<li><p>web – СУБД планируется эксплуатировать в среде Web-сервисов;</p></li>
<li><p>oltp – СУБД планируется эксплуатировать в системах с высокой транзакционной нагрузкой;</p></li>
<li><p>dwh – СУБД планируется эксплуатировать в системах с высокой аналитической нагрузкой (OLAP / Data Warehouse)</p></li>
<li><p>mixed – СУБД планируется эксплуатировать с системах со смешанной нагрузкой;</p></li>
<li><p>desktop – СУБД планируется эксплуатировать в настольных системах (в том числе для персонального использования);</p></li>
<li><p>1c – СУБД планируется эксплуатировать в системах 1С:Платформа. Значение по умолчанию: mixed</p></li>
</ul>
<blockquote>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--workload</p>
</blockquote></td>
<td><blockquote>
<p>--workload не рекомендуется использовать, как устаревший. Полноценным аналогом является параметр --application</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="2"><blockquote>
<p>-c</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>--cpu</p>
</blockquote></td>
<td><blockquote>
<p>number of CPUs</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Количество ядер (не гиперпоточность) на сервере, где планируется эксплуатация СУБД.</p>
<p>Допустимый набор значений: целое число; в пределах 1≤ CPU ≤ 256 Значение по умолчанию: 32</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="2"><blockquote>
<p>-m</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>--ram</p>
</blockquote></td>
<td><blockquote>
<p>total amount of memory in GB</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Объем оперативной памяти, установленной на сервере. Допустимый набор значений: цело число; в пределах 1 ≤ ram ≤ 1536 Значение по умолчанию: 128</p>
<p>Значение задается в гигабайтах (множитель 1024 [гигобайты]). Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="2"><blockquote>
<p>-N</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>--conn</p>
<p>--maxconn</p>
</blockquote></td>
<td><blockquote>
<p>maximum allowed number of connections</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Максимальное количество одновременных соединений пользователей, которое планируется обрабатывать сервером СУБД.</p>
<p>Допустимый набор значений: целое число; в пределах 20 ≤ maxconn ≤ 262143 Значение по умолчанию: 100</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="2"><blockquote>
<p>-V</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>--dbver</p>
<p>--dbversion</p>
</blockquote></td>
<td><blockquote>
<p>PostgreSQL/Jatoba version {PG10, ..., PG16, J4, ..., J6}</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Версия СУБД Jatoba/PostgreSQL</p>
<p>Значение, которое начинается с «PG», обозначает СУБД PostgreSQL и ее версию. Значение, которое начинается с «J», обозначает СУБД Jatoba и ее версию.</p>
<p>Допустимый набор значений: PG10-PG16, J4-J6.</p>
<p>Значение по умолчанию: J6</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
<p>Пример. Если СУБД Jatoba имеет версию 6.4.1, значит параметр --dbversion должен иметь значение «J6».</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="2"><blockquote>
<p>-R</p>
</blockquote></td>
<td rowspan="2"><blockquote>
<p>--repl</p>
<p>--replication</p>
</blockquote></td>
<td><blockquote>
<p>replication mode{true|false|1|0|on|off|yes|no}</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Будет ли использоваться физическая / логическая репликация в процессе эксплуатации СУБД.</p>
<p>Допустимые значения:</p>
</blockquote>
<ul>
<li><p>yes / no;</p></li>
<li><p>on / off;</p></li>
<li><p>1 / 0;</p></li>
<li><p>true / false. Значение по умолчанию: off</p></li>
</ul>
<blockquote>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 15%" />
<col style="width: 70%" />
</colgroup>
<thead>
<tr>
<th colspan="3"><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>long option</strong></p>
</blockquote></td>
<td><blockquote>
<p><strong>short option/ full option</strong></p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--help</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Вывод краткой справочной информации о всех параметрах.</p>
<p>Если параметр указан в командной строке (даже если указаны и другие параметры), то ja_tune выводит краткую справочную информацию об использовании ja_tune и</p>
<p>выходит с кодом возврата 0.</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: right;">Встро</td>
<td colspan="2"><blockquote>
<p>енная справка к утилите ja_tune вызывается при помощи команды:</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: right;">./ja_tun</td>
<td colspan="2"><blockquote>
<p>e --help</p>
</blockquote></td>
</tr>
<tr>
<td colspan="3"><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image38.png" style="width:7.06541in;height:2.52521in" /></p>
</blockquote></td>
</tr>
</tbody>
</table>

> Рисунок 3.14 – Встроенная справка к утилите ja_tune
>
> При установленной в ОС локали «ru_RU» вывод справочной информации для утилиты ja_tune будет русифицирован, как представлено на рисунке [3.15](#_bookmark18).

<img src="../docs/assets/images/com18.3.1/install/media/image39.jpeg" style="width:7.06857in;height:2.69021in" />

> <span id="_bookmark18" class="anchor"></span>Рисунок 3.15 – Вывод русифицированной справки
>
> **Пример №1**
>
> Установим параметры расчета конфигурации СУБД с выводом результатов в терминал:
>
> -o linux – ОС Linux;
>
> -a amd64 – тип процессора amd64;
>
> -s ssd – тип носителя ssd;
>
> -p web – тип нагрузки web;
>
> Команда в терминале ОС будет иметь следующий вид:
>
> ./ja_tune -o linux -a amd64 -s ssd -p web
>
> В результате утилита ja_tune выведет расчетные параметры СУБД в терминале ОС.

<img src="../docs/assets/images/com18.3.1/install/media/image40.png" style="width:4.89761in;height:2.84667in" />

> Рисунок 3.16 – Вывод результатов расчёта в терминал ОС
>
> При установленной в ОС локали «ru_RU», вывод значений расчетных параметров утилитой, будет русифицирован, как представлено на рисунке [3.17](#_bookmark19).
>
> <img src="../docs/assets/images/com18.3.1/install/media/image41.png" style="width:4.75297in;height:3.24417in" />
>
> <span id="_bookmark19" class="anchor"></span>Рисунок 3.17 – Вывод русифицированных результатов расчёта в терминал ОС
>
> **Пример №2**
>
> Установим те же параметры с выводом результатов в файл. Для вывода результата расчета в файл используются параметры:

- \> имя файла - перенаправление в файл с перезаписью содержимого файла;

- \>\> имя файла - добавление в конец файла (возможно уже существующего). Команда в терминале ОС будет иметь следующий вид:

> ./ja_tune -o linux -a amd64 -s ssd -p web \> test.cfg
>
> В результате выполнения команды будет создан конфигурационный файл test.cfg, расположенный в директории:
>
> /usr/jatoba-\<ver\>/bin
>
> В содержании конфигурационного файла указываются вводные параметры расчета и далее полученные расчетные значения параметров СУБД.
>
> <img src="../docs/assets/images/com18.3.1/install/media/image42.png" style="width:5.22954in;height:3.2851in" />

## setup)

> Рисунок 3.18 – Вывод результатов расчетов по заданным параметрам в файл

## Запуск утилиты при инициализации каталога данных СУБД (jatoba-

Утилиту ja_tune возможно использовать при инициализации каталога данных СУБД

> в утилите jatoba-setup, с параметрами, приведенными в таблице [3.2](#_bookmark21).
>
> В этом случае будет:

- Произведена инициализация СУБД;

- Сформирован конфигурационный файл расчетных параметров «ja_tune.conf» в директории:

> /var/lib/jatoba/\<ver\>/data

- Сформирован конфигурационный файл «postgresql.conf», в котором будет ссылка (инклуд) на конфигурационный файл «ja_tune.conf»:

> include 'ja_tune.conf'
>
> <span id="_bookmark21" class="anchor"></span>Таблица 3.2 – Параметры командной строки jatoba-setup при использовании утилиты ja_tune

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
<th colspan="3" style="text-align: center;"><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th colspan="2" rowspan="2" style="text-align: left;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
<tr>
<th><blockquote>
<p><strong>long option</strong></p>
</blockquote></th>
<th colspan="2"><blockquote>
<p><strong>short option/</strong></p>
<p><strong>full option</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>--tune</p>
</blockquote></td>
<td colspan="2"></td>
<td colspan="2" style="text-align: left;"><blockquote>
<p>Параметр, при помощи которого запускается утилита ja_tune при инициализации каталога данных с помощью jatoba-setup.</p>
<p>Параметр --tune имеет опциональный аргумент – абсолютное или относительное имя файла, куда будет записана рекомендуемая конфигурация. Если задано относительное имя, то файл сохраняется относительно директории PGDATA, заданной в jatoba-setup. Если аргумент не задан, т.е. пользователь явно не указал имя файла, то используется имя по умолчанию «ja_tune.conf».</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--tune-stype</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>--tune-strgtype</p>
</blockquote></td>
<td colspan="2" style="text-align: left;"><blockquote>
<p>Параметр аналогичный --strgtype</p>
<p>Тип подсистемы хранения, которая используется на целевом сервере. Допустимый набор значений параметра --tune-strgtype:</p>
</blockquote>
<ul>
<li><p>hdd – используются накопители на жёстких магнитных дисках;</p></li>
<li><p>ssd – используются твердотельные накопители;</p></li>
<li><p>san – используются сетевые системы хранения данных, построенные на высокоскоростных и сверхвысокоскоростных каналах связи.</p></li>
</ul>
<blockquote>
<p>Значение по умолчанию: SSD</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
<tr>
<td rowspan="2"><blockquote>
<p>--tune-app</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>-tune-application</p>
</blockquote></td>
<td colspan="2" style="text-align: left;"><blockquote>
<p>Параметр аналогичный --workload</p>
<p>Тип нагрузки (профиль), под который планируется эксплуатация СУБД. Допустимый набор значений параметра --tune-workload:</p>
</blockquote>
<ul>
<li><p>web – СУБД планируется эксплуатировать в среде Web-сервисов;</p></li>
<li><p>oltp – СУБД планируется эксплуатировать в системах с высокой транзакционной нагрузкой;</p></li>
<li><p>dwh – СУБД планируется эксплуатировать в системах с высокой аналитической нагрузкой (OLAP / Data Warehouse)</p></li>
<li><p>mixed – СУБД планируется эксплуатировать с системах со смешанной нагрузкой;</p></li>
<li><p>desktop – СУБД планируется эксплуатировать в настольных системах (в том числе для персонального использования);</p></li>
<li><p>1c – СУБД планируется эксплуатировать в системах 1С:Платформа.</p></li>
</ul>
<blockquote>
<p>Значение по умолчанию: Mixed</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2"><blockquote>
<p>--tune-workload</p>
</blockquote></td>
<td colspan="2" style="text-align: left;"><blockquote>
<p>--workload не рекомендуется использовать, как устаревший. Полноценным аналогом является параметр --application</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--tune-conn</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>--tune-maxconn</p>
</blockquote></td>
<td colspan="2" style="text-align: left;"><blockquote>
<p>Параметр аналогичный --maxconn</p>
<p>Максимальное количество одновременных соединений пользователей, которое планируется обрабатывать сервером СУБД.</p>
<p>Допустимый набор значений параметра --tune-maxconn: целое число; в пределах 20 ≤ maxconn ≤ 262143</p>
<p>Значение по умолчанию: 100</p>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>--tune-repl</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>--tune-replication</p>
</blockquote></td>
<td colspan="2" style="text-align: left;"><blockquote>
<p>Параметр аналогичный --replication</p>
<p>Будет ли использоваться физическая / логическая репликация в процессе эксплуатации СУБД.</p>
<p>Допустимые значения параметра --tune-replication:</p>
</blockquote>
<ul>
<li><p>yes / no;</p></li>
<li><p>on / off;</p></li>
<li><p>1 / 0;</p></li>
<li><p>true / false. Значение по умолчанию: off</p></li>
</ul>
<blockquote>
<p>Значения автоматически <strong>не определяются</strong>.</p>
</blockquote></td>
</tr>
<tr>
<td colspan="2"><blockquote>
<p>№ изменения:</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Дата внесения изм:</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Встроенная справка в jatoba-setup к параметрам утилиты ja_tune вызывается при помощи команды:
>
> ./jatoba-setup --help
>
> <img src="../docs/assets/images/com18.3.1/install/media/image43.jpeg" style="width:6.11168in;height:3.90762in" />Рисунок 3.19 – Встроенная справка в jatoba-setup к параметрам утилиты ja_tune <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" /> Параметры командной строки jatoba-setup при использовании утилиты ja_tune
>
> можно вводить как верхнем, так и в нижнем регистре (например, SSD и ssd – равнозначные). При ошибке в значении параметра выводится информационное сообщение.
>
> **Пример №3**
>
> Установим параметры расчета и установки конфигурации СУБД:
>
> --tune – запуск утилиты;
>
> --tune-stype=ssd – тип носителя ssd;
>
> --tune-app=1C – тип профиля нагрузки, 1С;
>
> --tune-repl=yes – использование репликации;
>
> Команда в терминале ОС будет иметь следующий вид:
>
> ./jatoba-setup initdb jatoba-6 --tune --tune-stype=ssd --tune-app=1C --tune-repl=yes
>
> В итоге СУБД будет проинициализирована и сконфигурирована под заданные параметры. В конфигурационном файле «postgresql.conf», будет ссылка (include) на конфигурационный файл «ja_tune.conf», который будет расположен в каталоге
>
> /var/lib/jatoba/6/data.

<img src="../docs/assets/images/com18.3.1/install/media/image44.png" style="width:7.07482in;height:3.38281in" />

> Рисунок 3.20 - Ссылка (инклуд) на конфигурационный файл «ja_tune.conf» в конфигурационном файле «postgresql.conf»
>
> В содержании конфигурационного файла «ja_tune.conf» указываются вводные параметры расчета и далее полученные расчетные значения параметров СУБД.

## Пакеты установки СУБД «Jatoba»

## Базовая установка

> Пакеты jatoba\<ver\>-client, jatoba\<ver\>-contrib, jatoba\<ver\>-libs, jatoba\<ver\>-server являются обязательными для установки СУБД:

- jatoba\<ver\>-client – клиентская часть СУБД;

- jatoba\<ver\>-contrib – вспомогательный набор модулей (расширений СУБД);

- jatoba\<ver\>-libs – основные библиотеки для клиентской и серверной части СУБД;

- jatoba\<ver\>-server – серверная часть СУБД.

> Установка данных пакетов разными способами (зависит от вида полученного дистрибутива и/или файлов дистрибутива) подробно описана в подразделах [3.1,](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux) [3.5](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория) и [3.7](#порядок-установки-субд-jatoba-из-debrpm-файлов).
>
> В пункте [3.3.3](#установка-пакетов-расширяющих-возможности-субд) описана установка дополнительных пакетов, расширяющих возможности СУБД.

## Установка клиентской части СУБД «Jatoba» на ОС семейства GNU/Linux

> Пакеты jatoba\<ver\>-client, jatoba\<ver\>-libs являются обязательными для установки клиентской части СУБД:

- jatoba\<ver\>-client – клиентская часть СУБД;

- jatoba\<ver\>-libs – основные библиотеки для клиентской и серверной части СУБД.

> Установка данных пакетов разными способами (зависит от вида полученного дистрибутива и/или файлов дистрибутива) подробно описана в подразделах [3.1](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux), [3.5](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория) и [3.7](#порядок-установки-субд-jatoba-из-debrpm-файлов).
>
> Например, установка через пакетный менеджер для Debian систем «dpkg». Синтаксис команды будет следующим:
>
> dpkg -i jatoba\<ver\>-client_X.X.X-X_amd64.deb jatoba\<ver\>-libs_X.X.X-X_amd64.deb
>
> Использование пакетного менеджера «dpkg» требует ввода полного имени устанавливаемых пакетов, как представлено ниже:

<img src="../docs/assets/images/com18.3.1/install/media/image45.png" style="width:7.11057in;height:1.24in" />

> dpkg -i jatoba4-client_4.5.3-1061_amd64.deb jatoba4-libs_4.5.3-1061_amd64.deb
>
> Рисунок 3.21 – Установка клиентской части СУБД через пакетный менеджер «dpkg»
>
> В том числе возможна установка клиентской части СУБД через инструмент командной строки APT (Advanced Package Tool).
>
> Команда будет следующей:

<img src="../docs/assets/images/com18.3.1/install/media/image46.png" style="width:7.11061in;height:1.24969in" />

> apt-get install jatoba\<ver\>-client jatoba\<ver\>-libs
>
> Рисунок 3.22 – Установка клиентской части СУБД через APT После чего в каталоге:
>
> /usr/jatoba-\<ver\>/bin
>
> будут установлены исполняемые файлы в том числе и «psql», который требуется для подключения пользователя к СУБД.
>
> Приведенная установка клиентской части СУБД не требует формирования локального репозитория.

## Установка пакетов, расширяющих возможности СУБД

> Установка расширений СУБД предполагает установку определенных дополнительных пакетов, входящих в состав дистрибутива СУБД «Jatoba». Отдельные пакеты из состава СУБД «Jatoba» требуют установки либо вспомогательных пакетов из состава ОС, либо вспомогательных пакетов, разработанных третьими лицами (сторонними компаниями).
>
> Описание установки расширений и дополнений из состава СУБД, приведенное в п.п. [3.3.3.1](#набор-разработчика) – [3.3.3.21](#_bookmark27), дается в следующем порядке:

- указывается список пакетов из состава дистрибутива СУБД «Jatoba», которые включают это расширение, и список сторонних зависимостей, необходимых для этого расширения;

- при наличии сторонних зависимостей указывается команда их установки;

- описывается команда установки пакетов расширения.

> Команда установки пакетов в разных дистрибутивах Linux может отличаться, также могут отличаться некоторые шаги установки, связанные с отдельными особенностями дистрибутивов Linux и способами распространения продуктов третьих лиц. Описание команды установки дано в виде группы команд для четырех отличительных видов дистрибутивов Linux:

1)  классический Debian Linux и все дистрибутивы от него производные:

> apt-get install \<список имен пакетов\>

2)  классический Red Hat и все дистрибутивы от него производные:

> yum install \<список имен пакетов\>

3)  ALTLinux – дистрибутив, построенный на базе RPM-пакетов, но использующий APT в качестве высокоуровневого менеджера пактов (команда установки выглядит аналогично Debian):

> apt-get install \<список имен пакетов\>
>
> Все необходимые отличия, связанные с установкой в разных видах дистрибутивов Linux, также даны с пометкой соответствующей ОС.
>
> Ряд компонентов для корректной установки требуют зависимые пакеты, часть из которых отсутствует в системных репозиториях операционных систем (CentOS 7, RHEL 7, Oracle 8, RHEL 8), поэтому перед установкой пакетов, расширяющих базовые функциональные возможности СУБД, рекомендуется добавить в систему EPEL репозитории.
>
> Порядок установки EPEL репозиториев:

- Для CentOS 7/RHEL 7/Oracle 8:

  1)  Выполнить установку репозиториев:

> yum install epel-release

2)  Обновить состояние репозиториев:

> yum makecache

3)  Выполнить обновление:

> yum update -y

- Для RHEL 8:

  1)  В subscription-manager включить вспомогательный репозиторий:

> subscription-manager repos --enable codeready-builder-for-rhel-8-\$(arch)-rpms

2)  Выполнить установку репозитория:

> dnf install <https://dl.fedoraproject.org/pub/epel/epel->release-latest-8.noarch.rpm

3)  Обновить состояние репозиториев:

> yum makecache

4)  Выполнить обновление:

> yum update -y

## Набор разработчика

> Список пакетов:

- jatoba\<ver\>-dev – библиотеки и заголовочные файлы для создания собственных расширений для Jatoba/PostgreSQL;

- jatoba\<ver\>-docs – англоязычная документация для администраторов, пользователей и разработчиков;

- jatoba\<ver\>-test – набор утилит и библиотек для проведения функционального тестирования СУБД и ее расширений.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: не требует
>
> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-dev jatoba\<ver\>-docs jatoba\<ver\>-test

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-devel jatoba\<ver\>-docs jatoba\<ver\>-test

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-devel jatoba\<ver\>-docs jatoba\<ver\>-test

- ОС openSUSE:

<img src="../docs/assets/images/com18.3.1/install/media/image47.png" style="width:7.11638in;height:4.7275in" />

> zypper install jatoba\<ver\>-devel jatoba\<ver\>-docs jatoba\<ver\>-test
>
> Рисунок 3.23 – Установка набора разработчика на примере ОС GNU/Linux Debian

## Пакет поддержки 1C

> Список пакета:

- <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />jatoba\<ver\>-1csupport – в составе пять специальных модулей (расширений), необходимые для работы 1C.

> Внешние зависимости: не требует
>
> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-1csupport

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-1csupport

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-1csupport

- ОС openSUSE:

> zypper install jatoba\<ver\>-1csupport
>
> <img src="../docs/assets/images/com18.3.1/install/media/image48.png" style="width:7.11458in;height:4.02031in" />
>
> Рисунок 3.24 – Установка поддержки 1С на примере ОС GNU/Linux Debian

1.  **Поддержка миграции из Oracle Database®**

> Список пакетов:

- jatoba\<ver\>-oracle-fdw – расширение, которое предоставляет обертку доступа к внешним данным, находящимся в СУБД Oracle Database®;

- jatoba\<ver\>-orafce – расширение, которое предоставляет набор функций и операторов, совместимых с СУБД Oracle Database®.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.2488in" />Внешние зависимости: требуется установка клиентских библиотек СУБД Oracle Database® (пакеты Oracle Instance Client версии 12.2, поставляет Oracle Inc.; заинтересованный пользователь должен скачать и установить их самостоятельно с сайта [<u>oracle.com</u>](https://www.oracle.com/ru/index.html) до установки компонент «Oracle_FDW»)
>
> Установка сторонних пакетов:
>
> Детально описана в документации компании разработчика, доступной по ссылке: [<u>Installing Oracle Instant Client Packages</u>](https://docs.oracle.com/en/database/oracle/oracle-database/21/lacli/instant-client-install-linux.html#GUID-CD3C72C6-110E-453A-8B69-2961D37EB70B) (рекомендуем обратить внимание на версию устанавливаемой библиотеки).

<img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25209in;height:0.25208in" />

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><blockquote>
<p><strong>Только для ОС Astra Linux версий 1.7, 1.8; ОС Основа</strong></p>
<p>Установка внешних зависимостей, в виде клиентских библиотек СУБД Oracle Database® (пакеты Oracle Instance Client версии 12.2), в режиме «Замкнутая программная среда (ЗПС)» невозможна, так как данные клиентские библиотеки не подписаны ЭЦП, соответственно, не являются доверительными в режиме ЗПС.</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Пакеты jatoba4-oracle-fdw и jatoba4-orafce можно устанавливать и использовать отдельно друг от друга</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25215in;height:0.25208in" />Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-oracle-fdw jatoba\<ver\>-orafce

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-oracle_fdw jatoba\<ver\>-orafce

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-oracle_fdw jatoba\<ver\>-orafce

- ОС openSUSE:

> zypper install jatoba\<ver\>-oracle_fdw jatoba\<ver\>-orafce
>
> <img src="../docs/assets/images/com18.3.1/install/media/image49.png" style="width:7.11393in;height:3.98156in" />
>
> Рисунок 3.25 – Установка компонент миграции на примере ОС GNU/Linux Debian

## «jaDog» – управление режимом работы узлов кластера

> Компонент «jaDog» входит в состав СУБД «Jatoba», предназначен для контроля состояния серверов (далее – узлов) кластера СУБД и обеспечивает выполнение функций обработки отказа и восстановления узлов кластера в автоматическом режиме.
>
> Список пакетов:
>
> jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server
>
> т.е. устанавливается при [<u>базовой установке СУБД</u>](#базовая-установка) (пункт [3.3.1](#базовая-установка)).
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24964in" />Внешние зависимости: не требует
>
> Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-01 «Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog». Пример установки приведен в Приложении 3 документа.

## «jаPooler» – балансировка подключений пользователей к СУБД

> Компонент «jaPooler» предназначен для управления соединениями, позволяет подключиться к СУБД большому числу клиентов без существенного снижения производительности.
>
> Список пакетов:
>
> jatoba\<ver\>-japooler jatoba\<ver\>-server jatoba\<ver\>-client jatoba\<ver\>-libs
>
> Внешние зависимости: не требует
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24999in" />Установка компонента под ОС GNU/Linux приведена в документе 643.72410666.00067-08 98 01-15 «Руководство по настройке. Часть 15. Балансировка подключений пользователей к СУБД. Компонент «jaPooler».

1.  **«ja_CSum» – контроль целостности**

> Компонент «ja_CSum» предназначен для выполнения периодических фоновых проверок файлов, расположенных в ключевых директориях СУБД.
>
> Список пакетов:
>
> jatoba\<ver\>-ja_csum
>
> Внешние зависимости: не требует
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24897in" />Установка компонента под ОС семейства Windows и GNU/Linux описана в документе 643.72410666.00067-08 98 01-14 «Руководство по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum».

2.  **«ja_Log» – централизованный сбор записей событий СУБД**

> Компонент «ja_Log» предназначен для сбора событий безопасности с целевых СУБД «Jatoba» в служебную СУБД «Jatoba data safe».
>
> Список пакетов:
>
> jatoba\<ver\>-ja-log
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: не требует
>
> Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-12 «Руководство по настройке. Часть 12. Централизованный сбор записей событий в СУБД. Компонент «ja_Log». Пример установки приведен в Приложении документа.

## «JCS (Jatoba crypto access storage)» – сокрытие информации в файлах данных СУБД

> Компонент «JCS» предназначен для выполнения сокрытия данных в объектах СУБД и предотвращает возможность ознакомления с преобразованными данными при их утрате.
>
> Список пакетов:
>
> jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server jatoba\<ver\>-jcs
>
> Внешние зависимости: не требует
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24921in" />Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-18 «Руководство по настройке. Часть 18. Сокрытие информации в файлах данных СУБД. Компонент «Jatoba crypto access storage». Пример установки приведен в Приложении 1 документа.

3.  **«SQL_Firewall» – выявление и предотвращение исполнения нетипичных SQL-запросов**

> Компонент «SQL_Firewall» предназначен для защиты базы данных от SQL-инъекций или неожиданных запросов.
>
> Список пакетов:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3"><blockquote>
<p>jatoba&lt;ver&gt;-client jatoba&lt;ver&gt;-contrib jatoba&lt;ver&gt;-libs</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>№ изменения:</p>
</blockquote></td>
<td><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></td>
<td><blockquote>
<p>Дата внесения изм:</p>
</blockquote></td>
</tr>
</tbody>
</table>

> jatoba\<ver\>-server jatoba\<ver\>-sql-firewall
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: не требует
>
> Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-17 «Руководство по настройке. Часть 17. Выявление и предотвращение исполнения нетипичных SQL-запросов. Компонент «SQL_Firewall».

4.  **«pg_Cryogen» – компрессия данных СУБД**

> Компонент «pg_Cryogen» предназначен для компрессии данных в СУБД. Список пакетов:
>
> jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server
>
> jatoba\<ver\>-pg-cryogen
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24982in" />Внешние зависимости: не требует
>
> Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-10 «Руководство по настройке. Часть 10. Компрессия данных СУБД. Компонент «pg_Cryogen». Пример установки приведен в Приложении 1 документа.

## «JDV (Jatoba data vault)» – контроль субъектов доступа

> Компонент «JDV» предназначен для ограничения доступа пользователей СУБД к защищаемым объектам БД.
>
> Список пакетов:
>
> jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server jatoba\<ver\>-jdv
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: не требует
>
> Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-02 Руководство по настройке. Часть 2. Контроль субъектов доступа. Компонент «Jatoba data vault».

5.  **«ja_Sync_LDAP» – компонент синхронизации учетных записей с MS Active Directory**

> Компонент обеспечивает администратора инструментом на уровне СУБД, выполняющим синхронизацию списка пользователей между внешней службой аутентификации (службы каталогов LDAP/Active Directory) и СУБД.
>
> Список пакетов:
>
> jatoba\<ver\>-ja-sync-ldap
>
> Внешние зависимости: не требует
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24999in" />Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-08 98 01-08 «Руководство по настройке. Часть 8. Синхронизация учетных записей служб каталогов и СУБД. Компонент «ja_Sync_LDAP».

## «pgAudit» – аудит действий пользователя

> Список пакетов:

- jatoba\<ver\>-pgaudit – расширение к СУБД, встраиваемое в конвейер обработки запросов и регистрирующее доступ пользователей к объектам СУБД (в основном к таблицам и функциям).

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24999in" />Внешние зависимости: не требует
>
> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-pgaudit

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-pgaudit

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-pgaudit

- ОС openSUSE:

<img src="../docs/assets/images/com18.3.1/install/media/image50.png" style="width:7.04434in;height:3.9675in" />

> zypper install jatoba\<ver\>-pgaudit
>
> Рисунок 3.26 – Установка расширения аудита на примере ОС GNU/Linux Debian

## «pgauditlogtofile» – дополнительный компонент к компоненту pgAudit

> Список пакетов:

- jatoba\<ver\>-pgauditlogtofile – расширение к СУБД, дополняющее функциональные возможности расширения «pgAudit», перенаправляя строки журнала аудита СУБД в независимый файл.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24964in" />Внешние зависимости: не требует
>
> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-pgauditlogtofile

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-pgauditlogtofile

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-pgauditlogtofile

- ОС openSUSE:

<img src="../docs/assets/images/com18.3.1/install/media/image51.png" style="width:7.01277in;height:3.97708in" alt="C:\Users\KUZNET~1\AppData\Local\Temp\vmware-kuznetsov-a\VMwareDnD\ad9af89c\Screenshot from 2024-04-17 00-41-15.png " />

> zypper install jatoba\<ver\>-pgauditlogtofile
>
> Рисунок 3.27 – Установка расширения аудита на примере ОС GNU/Linux Debian

## «pgBadger» – анализатор журналов событий

> Список пакетов:

- jatoba4-pgbadger – отдельный исполняемый файл на языке Perl, который работает отдельно от СУБД, но требует доступа к файлам событий СУБД.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости:

1)  perl и несколько perl-модулей для генерации файлов в формате CSV и JSON;

2)  опционально может использовать SSH для удаленного доступа.

> Установка данного расширения приведена в документе 643.72410666.00067-08 98 01-03 «Руководство по настройке. Часть 3. Настройка модуля для анализа файлов регистрации событий СУБД. Модуль «pgBadger».

1.  **«pg_ProBackup» – расширенное средство резервного копирования**

> Список пакетов:

- jatoba\<ver\>-pg_probackup – отдельный исполняемый файл, который работает отдельно от СУБД, но требует доступа к СУБД для выполнения функций резервирования / контроля / восстановления данных;

- jatoba\<ver\>-ptrack – расширение к СУБД, которым может пользоваться

> «pg_ProBackup» для выполнения инкрементального резервного копирования (один из режимов работы «pg_ProBackup»).
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24942in" />Внешние зависимости: опционально может использовать SSH для удаленного доступа к серверу для выполнения резервирования / восстановления

Установка данного компонента приведена в документе 643.72410666.00067-08 98 01-

04\. «Руководство по настройке. Часть 4. Расширенное резервное копирование. Компонент

> «pg_ProBackup».

2.  **«pg_Profile» – анализ производительности СУБД**

> Список пакетов:

- jatoba\<ver\>-pg_profile – расширение к СУБД, позволяющее собирать и просматривать параметры и метрики функционирования различных баз данных (БД) в различное время, а также строить отчеты по этим данным и сравнивать их между собой для выявления проблемных мест.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24879in" />Внешние зависимости: не требует
>
> Установка данного расширения приведена в документе 643.72410666.00067-08 98 01-06 «Руководство по настройке. Часть 6. Настройка модуля для анализа производительности СУБД. Модуль «pg_Profile».

## «pgSQL-HTTP» – доступ к сайтам по HTTP/S протоколу из СУБД

> Список пакетов:

- jatoba\<ver\>-pgsql-http – расширение к СУБД, позволяющее выполнять запросы к внешним веб-серверам (http/https-запросы).

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24999in" />Внешние зависимости: требует библиотеку curl. Библиотека curl обычно входит в стандартную установку большинства Linux-дистрибутивов. Если по каким-то причинам она не установлена, то далее приведены команды, с помощью которых ее можно установить на различных видах дистрибутивов
>
> Установка зависимостей:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install libcurl-gnutls

- ОС GNU/Linux Red Hat и производные от нее:

> yum install libcurl

- ОС ALTLinux:

> apt-get install libcurl

- ОС openSUSE:

> zypper install libcurl
>
> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-pgsql-http

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-pgsql-http

- ОС ALT Linux:

> apt-get install jatoba\<ver\>-pgsql-http

- ОС openSUSE:

<img src="../docs/assets/images/com18.3.1/install/media/image52.png" style="width:7.11526in;height:4.08812in" />

> zypper install jatoba\<ver\>-pgsql-http
>
> Рисунок 3.28 – Установка расширения на примере ОС GNU/Linux Debian

1.  **«pg_Variables» – создание переменных в сессии пользователя**

> Список пакетов:

- <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24919in" /> jatoba\<ver\>-pg-variables – расширение к СУБД. Внешние зависимости: не требует

> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3"><blockquote>
<p>apt-get install jatoba&lt;ver&gt;-pg-variables</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>№ изменения:</p>
</blockquote></td>
<td><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></td>
<td><blockquote>
<p>Дата внесения изм:</p>
</blockquote></td>
</tr>
</tbody>
</table>

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-pg_variables

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-pg_variables

- ОС openSUSE:

<img src="../docs/assets/images/com18.3.1/install/media/image53.png" style="width:7.11449in;height:4.03969in" />

> zypper install jatoba\<ver\>-pg_variables
>
> Рисунок 3.29 – Установка расширения на примере ОС GNU/Linux Debian

## Дополнительные языки хранимых процедур

> Список пакетов:

- jatoba\<ver\>-plperl – добавление в СУБД поддержки написания хранимых процедур на языке perl;

- jatoba\<ver\>-plpython – добавление в СУБД поддержки написания хранимых процедур на языке python версии 2;

- <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />jatoba\<ver\>-plpython3 – добавление в СУБД поддержки написания хранимых процедур на языке python версии 3.

> Внешние зависимости: требуется в системе наличие библиотек для языков perl, python2 и python3. Эти языки обычно входят в стандартный комплект поставки большинства Linux-дистрибутивов и устанавливаются автоматически
>
> Перечисленные пакеты не зависят друг от друга и могут быть поставлены по отдельности в любом порядке. Команды установки показаны на примере пакета jatoba4-plpython3.
>
> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-plpython3

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-plpython3

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-plpython3

- ОС openSUSE:

> zypper install jatoba\<ver\>-plpython3

<img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25209in;height:0.25208in" />

> <img src="../docs/assets/images/com18.3.1/install/media/image54.png" style="width:7.1145in;height:4.03969in" />
>
> Рисунок 3.30 – Установка расширения на примере ОС GNU/Linux Debian

## «PlsPgSQL» – обфускация исходных текстов хранимых процедур

> Список пакетов:

- <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25242in;height:0.25208in" />jatoba\<ver\>-plspgsql – расширение к СУБД, а также утилита закрытия исходных текстов хранимых процедур.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>Внешние зависимости: требуется установка следующих внешних продуктов:</p>
</blockquote>
<ol type="1">
<li><p>lsb-cprocsp – криптопровайдер «КриптоПро CSP» для различных операционных систем разработанный ООО «КРИПТО-ПРО» (не входит в состав дистрибутива);</p></li>
<li><p>gis-cryptoplatform17 – библиотека «КриптоПлатформа» для централизованной работы с криптоправайдерами в ОС, продукт поставляет ООО «Газинформсервис».</p></li>
</ol></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><strong>Только для ОС Astra Linux версий 1.7, 1.8; ОС Основа</strong></p>
<p>Установка внешней зависимостей, в виде криптопровайдера «КриптоПро CSP», в режиме «Замкнутая программная среда (ЗПС)» невозможна, так как данные</p>
</blockquote></td>
</tr>
</tbody>
</table>

> клиентские библиотеки не подписаны ЭЦП, соответственно, не являются доверительными в режиме ЗПС.
>
> Список сторонних пакетов:

1)  lsb-cprocsp – криптопровайдер «КриптоПро CSP» версии 5.0. Данный пакет распространяется в виде самостоятельного DEB/RPM дистрибутива. Для установки необходимо обратиться к документации на официальном сайте разработчика КриптоПро – для доступа требуется зарегистрированный пользователь по правилам сайта [<u>https://cryptopro.ru/user</u>)](https://cryptopro.ru/user);

2)  gis-cryptoplatform17 – библиотека «КриптоПлатформа» версия 1.7.3-4. Данный пакет распространяется в составе дистрибутива СУБД «Jatoba» и устанавливается автоматически по зависимостям при установке пакета jatoba\<ver\>-plspgsql.

> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-plspgsql

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-plspgsql

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-plspgsql

- ОС openSUSE:

> zypper install jatoba\<ver\>-plspgsql

## «PostGIS» – организация работы с геоданными

> Список пакетов:

- jatoba\<ver\>-postgis – расширение к СУБД, а также утилита получения и преобразования данных, определяемой формат между СУБД и внешними приложениями картографии.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: GDAL, PROJ, GEOS – специализированные библиотеки обработки данных, применяемые в области геоинформатики и картографии. Указанные пакеты поставляются в составе некоторых дистрибутивов Linux и будут установлены автоматически по зависимостям
>
> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-postgis

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-postgis

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-postgis

- ОС openSUSE:

> zypper install jatoba\<ver\>-postgis

## «SecurityProfile» – парольные политики

> Список пакетов:

- <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />jatoba\<ver\>-securityprofile – расширение к СУБД, позволяющее формировать парольные политики.

> Внешние зависимости: не требует
>
> Установка пакета:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-securityprofile

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-securityprofile

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-securityprofile

- ОС openSUSE:

<img src="../docs/assets/images/com18.3.1/install/media/image55.png" style="width:7.11556in;height:3.1in" />

> zypper install jatoba\<ver\>-securityprofile
>
> Рисунок 3.31 – Установка расширения на примере ОС GNU/Linux Debian

1.  <span id="_bookmark27" class="anchor"></span>**«pg_Task» – планировщик асинхронных задач**

> Список пакетов:

- jatoba\<ver\>-pg_task – расширение к СУБД, позволяющее задавать задачи на языке SQL для их выполнения в заданное время в заданной базе данных от заданного пользователя.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: не требует
>
> Установка данного расширения приведена в документе 643.72410666.00067-08 98 01-05 «Руководство по настройке. Часть 5. Планирование заданий СУБД. Компонент
>
> «pg_Task».

1.  **«ja_Plan_Manager» – компонент создания планов запросов в БД**

> Список пакетов:

- jatoba\<ver\>-ja-plan-manager – расширение к СУБД, предназначенное для создания, оптимизации, экспорта/импорта и подмены планов запросов в БД.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: не требует

Установка данного расширения приведена в документе 643.72410666.00067-08 98 01-

21 «Руководство по настройке. Часть 21. Управление планами запросов. Компонент

> «ja_Plan_Manager».

2.  **«pg_hint_plan» – компонент корректировки запросов**

> Список пакетов:

- jatoba\<ver\>-pg-hint-plan – расширение к СУБД, предназначенное для корректировки планов выполнения, применяя так называемые «указания», записываемые в виде простых описаний в SQL-комментариях особого вида.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24999in" />Внешние зависимости: не требует
>
> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-pg-hint-plan

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-pg-hint-plan

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-pg-hint-plan

- ОС openSUSE:

> zypper install jatoba\<ver\>-pg-hint-plan
>
> <img src="../docs/assets/images/com18.3.1/install/media/image56.png" style="width:7.02634in;height:3.92437in" />
>
> Рисунок 3.32 – Установка пакета jatoba\<ver\>-pg-hint-plan в OC Ubuntu

3.  **«pg_store_plans» – компонент контроля выполненных планов запросов**

> Список пакетов:

- jatoba\<ver\>-pg-store-plans – расширение к СУБД, предназначенное для контроля выполненных планов запросов.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: не требует
>
> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-pg-store-plans

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-pg-store-plans

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-pg-store-plans

- ОС openSUSE:

> zypper install jatoba\<ver\>-pg-store-plans

<img src="../docs/assets/images/com18.3.1/install/media/image57.png" style="width:7.08249in;height:3.98667in" />

> Рисунок 3.33 – Установка пакета jatoba\<ver\>-pg-store-plans в OC Ubuntu

4.  **«pg_ulid» – компонент поддержки лексографического идентификатора**

> Список пакетов:

- jatoba\<ver\>-pg-ulid – расширение к СУБД, предназначенное для поддержки типа данных ULID.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: не требует
>
> Установка пакетов:

- ОС GNU/Linux Debian и производные от нее:

> apt-get install jatoba\<ver\>-pg-ulid

- ОС GNU/Linux Red Hat и производные от нее:

> yum install jatoba\<ver\>-pg_ulid

- ОС ALTLinux:

> apt-get install jatoba\<ver\>-pg_ulid

- ОС openSUSE:

<img src="../docs/assets/images/com18.3.1/install/media/image58.png" style="width:7.02262in;height:3.08073in" />

> zypper install jatoba\<ver\>-pg_ulid
>
> Рисунок 3.34 – Установка пакета jatoba\<ver\>-pg-ulid в OC Ubuntu

5.  **«ja_seceventlog» – компонент записи событий информационной безопасности**

> Список пакетов:

- jatoba\<ver\>-ja_seceventlog – расширение к СУБД, предназначенное для записи событий информационной безопасности СУБД.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: не требует
>
> Установка пакетов:
>
> − ОС GNU/Linux Debian и производные от нее:
>
> apt-get install jatoba\<ver\>-ja-seceventlog
>
> − ОС GNU/Linux Red Hat и производные от нее:
>
> yum install jatoba\<ver\>-ja_seceventlog
>
> apt-get install jatoba\<ver\>-ja_seceventlog
>
> − ОС openSUSE:
>
> zypper install jatoba\<ver\>-ja_seceventlog

## «rum» – компонент поддержки индекса RUM

> Список пакетов:

- jatoba\<ver\>-rum – расширение к СУБД, предназначенное для доступа к индексу RUM СУБД.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: не требует
>
> Установка пакетов:
>
> − ОС GNU/Linux Debian и производные от нее:
>
> apt-get install jatoba\<ver\>-rum
>
> − ОС GNU/Linux Red Hat и производные от нее:
>
> yum install jatoba\<ver\>-rum
>
> − ОС ALTLinux:
>
> apt-get install jatoba\<ver\>-rum
>
> − ОС openSUSE:
>
> zypper install jatoba\<ver\>-rum

6.  **«ja_Similar» – компонент полнотекстового поиска**

> Список пакетов:

- jatoba\<ver\>-ja-similar – расширение к СУБД, предназначенное для полнотекстового поиска и определения похожих текстов.

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Внешние зависимости: не требует
>
> Установка пакетов:
>
> − ОС GNU/Linux Debian и производные от нее:
>
> apt-get install jatoba\<ver\>-ja-similar
>
> − ОС GNU/Linux Red Hat и производные от нее:
>
> yum install jatoba\<ver\>-ja-similar
>
> − ОС ALTLinux:
>
> apt-get install jatoba\<ver\>-ja-similar
>
> − ОС openSUSE:
>
> zypper install jatoba\<ver\>-ja-similar

7.  **«ja_Inventory» – компонент инвентаризации СУБД**

> Список пакетов:

- <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24999in" /> jatoba\<ver\>-ja-inventory – утилита предназначенная для инвентаризации СУБД. Внешние зависимости: не требует

> Установка пакетов:
>
> − ОС GNU/Linux Debian и производные от нее:
>
> apt-get install jatoba\<ver\>-ja-inventory
>
> − ОС GNU/Linux Red Hat и производные от нее:
>
> yum install jatoba\<ver\>-ja-inventory
>
> − ОС ALTLinux:
>
> apt-get install jatoba\<ver\>-ja-inventory
>
> − ОС openSUSE:
>
> zypper install jatoba\<ver\>-ja-inventory

8.  **«pg_repack» – компонент реорганизации таблиц**

> Установка компонента описана в документе 643.72410666.00067-08 98 01-24
>
> «Руководство по настройке. Часть 24. Реорганизация таблиц. Компонент «pg_repack».

## tsvector2 – компонент расширенного типа данных tsvector

> Список пакетов:

- <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" /> jatoba\<ver\>-tsvector2 – утилита предназначенная для инвентаризации СУБД. Внешние зависимости: не требует

> Установка пакетов:
>
> − ОС GNU/Linux Debian и производные от нее:
>
> apt-get install jatoba\<ver\>-tsvector2
>
> − ОС GNU/Linux Red Hat и производные от нее:
>
> yum install jatoba\<ver\>-tsvector2
>
> − ОС ALTLinux:
>
> apt-get install jatoba\<ver\>-tsvector2
>
> − ОС openSUSE:
>
> zypper install jatoba\<ver\>-tsvector2

## Компоненты поддержки мониторинга СУБД

> Установка компонентов:

- jatoba\*\_node_exporter;

- jatoba\*\_postgres_exporter;

- jatoba\*\_sql_exporter;

- системы «Prometheus»;

- утилита «alertmanager»;

> описана в документе 643.72410666.00067-08 98 01-28 «Руководство по настройке.
>
> Часть 28. Поддержка мониторинга СУБД.

## Порядок установки СУБД «Jatoba» на ОС GNU/Linux, основанной на Debian из локального репозитория

> Для установки СУБД «Jatoba» необходимо выполнить следующую последовательность действий:

1)  Создать каталог /localrepo, выполнив команду:

> mkdir /localrepo

2)  В каталог /localrepo скопировать необходимые файлы для установки СУБД «Jatoba».

> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25138in;height:0.25013in" />Требуется скопировать полную структуру файлов и каталогов из дистрибутива. Также допускается установка с CD/DVD носителя напрямую. В этом случае, пользователю не требуется копировать файлы, а вместо /localrepo во всех шагах далее указывать соответствующий путь до носителя и директорию репозитория СУБД на носителе для соответствующей ОС.
>
> Структура каталога дистрибутива для всех поддерживаемых ОС GNU/Linux, основанных на Debian, описана в таблице [П 1](#_bookmark150) Приложения [1](#приложение-1).

3)  Проверить результат копирования всех файлов, перейдя в каталог /localrepo и выполнив команду (см. рис. [3.35](#_bookmark29)):

<img src="../docs/assets/images/com18.3.1/install/media/image59.png" style="width:7.10645in;height:1.6275in" />

> ls -l
>
> <span id="_bookmark29" class="anchor"></span>Рисунок 3.35 – Просмотр каталога /localrepo

4)  Установить открытый ключ репозитория при помощи команды (см. рис. [3.36](#_bookmark30)):

> apt-key add /localrepo/DEB-GPG-KEY-Jatoba

<img src="../docs/assets/images/com18.3.1/install/media/image60.png" style="width:7.10651in;height:1.07531in" />

> <span id="_bookmark30" class="anchor"></span>Рисунок 3.36 – Установка открытого ключа
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25138in;height:0.25134in" />Для более новых версий ОС GNU/Linux, основанных на Debian (Astra Linux 1.8, Debian 12, Ubuntu 24.04 и других), рекомендуется добавлять ключ репозитория следующим образом.
>
> Скопировать ключ репозитория:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> Добавить описание нового репозитория в список:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt;</p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> Здесь jatoba-\<ver\> - версия устанавливаемой СУБД «Jatoba». Затем выполнить [6)](#_bookmark31) из данного подраздела.

5)  Создать файл с описанием локального репозитория в системе, имя файла репозитория и его содержимое для соответствующей ОС указано в таблице [П 2](#_bookmark151) Приложения [1](#приложение-1):

<img src="../docs/assets/images/com18.3.1/install/media/image61.png" style="width:7.10707in;height:1.1625in" />

> nano /etc/apt/sources.list.d/jatoba-4.list
>
> Рисунок 3.37 – Описание локального репозитория

6)  <span id="_bookmark31" class="anchor"></span>Обновить описания пакетов при помощи команды (см. рис. [3.38](#_bookmark32)):

> apt-get update

<img src="../docs/assets/images/com18.3.1/install/media/image62.png" style="width:7.10645in;height:2.45094in" />

> <span id="_bookmark32" class="anchor"></span>[3.39](#_bookmark33)):
>
> Рисунок 3.38 – Обновление описания пакетов

7)  Установить основные пакеты СУБД «Jatoba» при помощи команды (см. рис.

> apt-get install jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />Пакеты jatoba\<ver\>-client, jatoba\<ver\>-contrib, jatoba\<ver\>-libs, jatoba\<ver\>-server являются обязательными для установки СУБД.
>
> При необходимости установки дополнительных пакетов см. раздел [3.3.3](#установка-пакетов-расширяющих-возможности-субд)

<img src="../docs/assets/images/com18.3.1/install/media/image63.png" style="width:7.03004in;height:3.5075in" />

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.24717in;height:0.24635in" /><img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.24729in;height:0.24635in" /><img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25208in;height:0.25208in" /><span id="_bookmark33" class="anchor"></span>Рисунок 3.39 – Установка основных пакетов

8)  <span id="_bookmark34" class="anchor"></span>Перейти в директорию расположения исполняемых файлов СУБД «Jatoba», выполнив команду (см. рис. [3.40](#_bookmark35)):

<img src="../docs/assets/images/com18.3.1/install/media/image64.png" style="width:7.11893in;height:0.93969in" />

> cd /usr/jatoba-\<ver\>/bin/
>
> <span id="_bookmark35" class="anchor"></span>Рисунок 3.40 – Переход в директорию установки

9)  Инициализировать каталог данных СУБД «Jatoba» при помощи команды (см. рис. [3.41](#_bookmark36)):

<img src="../docs/assets/images/com18.3.1/install/media/image65.png" style="width:7.1064in;height:1.28844in" />

> ./jatoba-setup initdb jatoba-\<ver\>
>
> <span id="_bookmark36" class="anchor"></span>Рисунок 3.41 – Инициализация каталога СУБД

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><blockquote>
<p>При инициализации каталога данных можно явно указать язык и кодировку, для этого следует добавить переменную окружения:</p>
<p>PGSETUP_INITDB_OPTIONS="--locale=ru_RU.utf8</p>
<p>--encoding=UTF-8" ./jatoba-setup initdb jatoba-&lt;ver&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><blockquote>
<p>При ошибках «Data directory is not empty!» или «Initializing database… mkdir: невозможно создать каталог «var/lib/jatoba/&lt;ver&gt;/data/log»: Файл существует failed, see /var/lib/jatoba/&lt;ver&gt;/initdb.log» нужно ввести команду принудительного удаления каталога и его содержимого.</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: left;"><blockquote>
<p>Перед удалением необходимо убедиться, что все нужные данные сохранены.</p>
</blockquote></td>
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
<p>rm -rf /var/lib/jatoba/&lt;ver&gt;/data/*</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

10) Администратору СУБД рекомендуется изменить другие параметры в конфигурационном файле postgresql.conf, в зависимости от условий эксплуатации СУБД (дополнительная информация описана в документе «Защищенная система управления базами данных «Jatoba». Руководство администратора»).

11) При необходимости добавить службу Jatoba в автозапуск в соответствии с пунктом [3.6](#добавление-в-автозапуск-службы-jatoba-в-ос-gnulinux).

> Установка СУБД «Jatoba» завершена.

## Порядок установки СУБД «Jatoba» на ОС семейства GNU/Linux, основанной на RPM из локального репозитория

> Для установки СУБД «Jatoba» необходимо выполнить следующую последовательность действий:

1)  Создать каталог /localrepo, выполнив команду:

<img src="../docs/assets/images/com18.3.1/install/media/image66.png" style="width:7.0777in;height:0.97698in" />

> mkdir /localrepo
>
> Рисунок 3.42 – Создание каталога localrepo

2)  В каталог /localrepo скопировать необходимые файлы для установки СУБД

> «Jatoba».
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25138in;height:0.25118in" />Требуется скопировать полную структуру файлов и каталогов из дистрибутива. Также допускается установка с CD/DVD носителя напрямую. В этому случае, пользователю не требуется копировать файлы, а вместо /localrepo во всех шагах далее указывать соответствующий путь до носителя и директорию репозитория СУБД на носителе для соответствующей ОС.
>
> Структура каталога дистрибутива для всех поддерживаемых ОС GNU/Linux, основанных на RPM, описана в таблице [П1](#_bookmark150) Приложения [1](#приложение-1).

3)  Проверить результат копирования всех файлов, перейдя в каталог /localrepo и выполнив команду (см. рис. [3.43](#_bookmark38)):

<img src="../docs/assets/images/com18.3.1/install/media/image67.png" style="width:7.07434in;height:1.88479in" />

> ls -l
>
> <span id="_bookmark38" class="anchor"></span>Рисунок 3.43 – Просмотр каталога /localrepo

4)  Установить открытый ключ репозитория при помощи команды (см. рис. [3.44](#_bookmark39)):

## <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24856in" />Только для ОС Альт

> В указанной ОС данный шаг пропускается. Проверка целостности и достоверности устанавливаемых пакетов осуществляется с использованием контрольных сумм, указанных в формуляре.

<img src="../docs/assets/images/com18.3.1/install/media/image68.png" style="width:7.07519in;height:0.99427in" />

> rpm --import /localrepo/RPM-GPG-KEY-Jatoba
>
> <span id="_bookmark39" class="anchor"></span>Рисунок 3.44 – Установка открытого ключа

5)  Создать файл с описанием локального репозитория в системе, имя файла репозитория и его содержимое для соответствующей ОС указано в таблице [П2](#_bookmark151) Приложения [1](#приложение-1):

> nano /etc/yum.repos.d/jatoba-\<ver\>.repo
>
> <img src="../docs/assets/images/com18.3.1/install/media/image69.png" style="width:7.07297in;height:0.78677in" />
>
> Рисунок 3.45 – Создание файла с описанием репозитория
>
> Например, для РЕД ОС 7.2 Муром, при установке СУБД «Jatoba» с версией ядра 4, необходимо добавить следующее описание репозитория в файл /etc/yum.repos.d/jatoba-
>
> 4.repo:
>
> \[jatoba-4\]
>
> name=Jatoba 4 Official Repository baseurl=file:///localrepo enabled=1
>
> gpgcheck=1
>
> gpgkey=file:///localerepo/RPM-GPG-KEY-Jatoba

## <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Только для ОС Alt Linux (Альт 8 СП и т.п.)

> Описание репозитория необходимо добавлять в файл
>
> /etc/apt/sources.list.d/jatoba-\<ver\>.list, аналогично тому, как это делается в системах, основанных на Debian:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>rpm file:///localrepo x86_64 classic</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

6)  Обновить описания пакетов при помощи команды (см. рис. [3.46](#_bookmark40)):

<img src="../docs/assets/images/com18.3.1/install/media/image70.png" style="width:7.07429in;height:1.72052in" />

> yum makecache
>
> Рисунок 3.46 – Обновление описания пакетов

## <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Только для ОС Alt Linux (Альт 8 СП и т.п.)

> Обновить описание пакетов при помощи команды (см. рис. [3.47](#_bookmark41)):

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>apt-get update</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<img src="../docs/assets/images/com18.3.1/install/media/image71.jpeg" style="width:5.04562in;height:1.99875in" />

> <span id="_bookmark41" class="anchor"></span>Рисунок 3.47 – Обновление описания пакетов

7)  Установить основные пакеты СУБД «Jatoba» при помощи команды (см. рис. [3.48](#_bookmark42)):

> yum install jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server
>
> Пакеты jatoba\<ver\>-client, jatoba\<ver\>-contrib, jatoba\<ver\>-libs и jatoba\<ver\>-server являются обязательными для установки СУБД.
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />При необходимости установки дополнительных пакетов см. пункт 4.5.2
>
> <img src="../docs/assets/images/com18.3.1/install/media/image72.png" style="width:6.64667in;height:4.67187in" />
>
> <span id="_bookmark42" class="anchor"></span>Рисунок 3.48 – Установка основных пакетов

## <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Только для ОС Alt Linux (Альт 8 СП и т.п.)

> Установить основные пакеты СУБД «Jatoba» при помощи команды:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>apt-get install jatoba&lt;ver&gt;-client jatoba&lt;ver&gt;-contrib jatoba&lt;ver&gt;-libs jatoba&lt;ver&gt;-server</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

8)  Перейти в директорию расположения исполняемых файлов СУБД «Jatoba», выполнив команду (см. рис. [3.49](#_bookmark43)):

<img src="../docs/assets/images/com18.3.1/install/media/image73.png" style="width:6.99601in;height:1.01646in" />

> cd /usr/jatoba-\<ver\>/bin/
>
> <span id="_bookmark43" class="anchor"></span>Рисунок 3.49 – Переход в директорию установки

9)  Инициализировать каталог данных СУБД «Jatoba» при помощи команды (см. рис. [3.50](#_bookmark44)):

<img src="../docs/assets/images/com18.3.1/install/media/image74.png" style="width:7.07462in;height:1.55625in" />

> ./jatoba-setup initdb jatoba-\<ver\>
>
> <span id="_bookmark44" class="anchor"></span>Рисунок 3.50 – Инициализация каталога СУБД

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><blockquote>
<p>При ошибках «Data directory is not empty!» или «Initalizing database… mkdir: невозможно создать каталог «var/lib/jatoba/&lt;ver&gt;/data//log»: Файл существует failed, see /var/lib/jatoba/&lt;ver&gt;/initdb.log» нужно ввести команду принудительного удаления каталога и его содержимого.</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Перед удалением необходимо убедиться, что все нужные данные сохранены.</p>
<p>rm –rf /var/lib/jatoba/&lt;ver&gt;/data/*</p>
</blockquote></td>
</tr>
</tbody>
</table>

10) <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.24769in;height:0.24635in" /><img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25208in;height:0.25208in" />Администратору СУБД рекомендуется изменить другие параметры в конфигурационном файле postgresql.conf, в зависимости от условий эксплуатации СУБД (дополнительная информация описана в документе 643.72410666.00067-08 95 01

> «Защищенная система управления базами данных «Jatoba». Руководство администратора»).

11) При необходимости добавить службу Jatoba в автозапуск в соответствии с пунктом [3.6](#добавление-в-автозапуск-службы-jatoba-в-ос-gnulinux).

> Установка СУБД «Jatoba» завершена.

## Добавление в автозапуск службы Jatoba в ОС GNU/Linux

> Для загрузки СУБД «Jatoba» вместе с ОС необходимо выполнить следующие действия:

1)  Запустить сервис.

2)  Добавить его в список автозапуска при старте ОС, выполнив команды (см. рис. [3.51](#_bookmark46)):

<img src="../docs/assets/images/com18.3.1/install/media/image75.png" style="width:7.07939in;height:1.51302in" />

> systemctl start jatoba-\<ver\> systemctl enable jatoba-\<ver\>
>
> <span id="_bookmark46" class="anchor"></span>Рисунок 3.51 – Запуск сервиса и добавление в автозагрузку

## Порядок установки СУБД «Jatoba» из DEB/RPM-файлов

> Установка из файлов является опциональным способом и требует больше ручной работы от пользователя по установке зависимых пакетов. Пользователям рекомендуется производить установку методами, описанными в подразделах [3.1](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux) и/или [3.5](#порядок-установки-субд-jatoba-на-ос-семейства-gnulinux-основанной-на-rpm-из-локального-репозитория) в зависимости от ОС.

## Установка СУБД «Jatoba» из DEB-файлов

> Установка из файлов предполагает, что у пользователя имеется основной набор DEB-файлов, которые он может скачать с официального компакт-диска:

- jatoba\<ver\>-client;

- jatoba\<ver\>-contrib;

- jatoba\<ver\>-libs;

- jatoba\<ver\>-server.

> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />Пакеты jatoba\<ver\>-client, jatoba\<ver\>-contrib, jatoba\<ver\>-libs, jatoba\<ver\>-server являются обязательными для установки СУБД.
>
> При необходимости установки дополнительных пакетов см. пункт [3.3.3](#установка-пакетов-расширяющих-возможности-субд)
>
> Для установки СУБД «Jatoba» из DEB-файлов необходимо выполнить следующую последовательность действий:

1)  Перейти в директорию дистрибутива, где расположены установочные DEB-файлы:

> cd \<путь до директории\>

2)  Выполнить команду установки основных пакетов (см. рис. [3.52](#_bookmark49)):

<img src="../docs/assets/images/com18.3.1/install/media/image76.png" style="width:7.04687in;height:1.13083in" />

> dpkg -i jatoba\<ver\>-client_X.X.X-X_amd64.deb jatoba\<ver\>-contrib_X.X.X-X_amd64.deb jatoba\<ver\>-libs_X.X.X-X_amd64.deb jatoba\<ver\>-server_X.X.X-X[1](#_bookmark50)\_amd64.deb
>
> <span id="_bookmark49" class="anchor"></span>Рисунок 3.52 – Команда установки основных пакетов
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24994in" /> Для установки базовых пакетов требуется установка множества зависимостей. Неразрешенные зависимости приводят к появлению ошибок на стадии установки (см. рис. [3.53](#_bookmark51)):
>
> <span id="_bookmark50" class="anchor"></span><sup>1</sup> Номер версии уточняется при поставке изделия
>
> <img src="../docs/assets/images/com18.3.1/install/media/image77.png" style="width:6.35067in;height:4.21917in" />
>
> <span id="_bookmark51" class="anchor"></span>Рисунок 3.53 – Ошибки неразрешенных зависимостей

3)  Установить все оставшиеся зависимости в автоматическом режиме (см. рис. [3.54](#_bookmark52)):

<img src="../docs/assets/images/com18.3.1/install/media/image78.png" style="width:6.35064in;height:3.44104in" />

> apt-get install –f
>
> <span id="_bookmark52" class="anchor"></span>Рисунок 3.54 – Установка оставшихся зависимостей
>
> Дальнейшая установка СУБД «Jatoba» аналогична порядку, описанному в подразделе [3.1](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux), с шага перехода в директорию расположения исполняемых файлов.

## Установка СУБД «Jatoba» из RPM-файлов

> Установка из файлов предполагает, что у пользователя имеется основной набор RPM-файлов, которые он может скачать с официального компакт-диска:

- jatoba\<ver\>-client;

- jatoba\<ver\>-contrib;

- jatoba\<ver\>-libs;

- jatoba\<ver\>-server.

> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25138in;height:0.25068in" />Пакеты jatoba\<ver\>-client*,* jatoba\<ver\>-contrib*,* jatoba\<ver\>-libs*,* jatoba\<ver\>-server являются обязательными для установки СУБД.
>
> При необходимости установки дополнительных пакетов см. пункт [3.3.3](#установка-пакетов-расширяющих-возможности-субд).
>
> Для установки СУБД «Jatoba» из RPM-файлов необходимо выполнить следующую последовательность действий:

1)  Перейти в директорию дистрибутива, где расположены установочные RPM-файлы:

> cd \<путь до директории\>

2)  Выполнить команду установки основных пакетов (см. рис. [3.55](#_bookmark55)):

> rpm -i jatoba\<ver\>-client_X.X.X-X_amd64.rpm jatoba\<ver\>-contrib_X.X.X-X_amd64.rpm jatoba\<ver\>-libs_X.X.X-X_amd64.rpm jatoba\<ver\>-server_X.X.X-X[2](#_bookmark54)\_amd64.rpm
>
> <span id="_bookmark54" class="anchor"></span><sup>2</sup> Номер версии уточняется при поставке изделия
>
> <img src="../docs/assets/images/com18.3.1/install/media/image79.png" style="width:7.04789in;height:1.17583in" />
>
> <span id="_bookmark55" class="anchor"></span>Рисунок 3.55 – Команда установки основных пакетов
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24889in" />Для установки базовых пакетов требуется установка множества зависимостей. Неразрешенные зависимости приводят к появлению ошибок на стадии установки.

3)  Выполнить установку зависимых пакетов с помощью одной из следующих команд:

> yum install \<имя пакета\> rpm -i \<имя пакета\>

## <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.2493in" />Только для ОС Альт

> Установка зависимых пакетов происходит при помощи следующей команды (см. рис. [3.56](#_bookmark56)):

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>apt-get install &lt;имя пакета&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<img src="../docs/assets/images/com18.3.1/install/media/image80.png" style="width:5.81802in;height:2.13469in" alt="CentOS 8 " />

> <span id="_bookmark56" class="anchor"></span>Рисунок 3.56 – Установка зависимого пакета «glibc»
>
> Дальнейшая установка СУБД «Jatoba» аналогична, описанному в подразделе [3.1](#инсталлятор-субд-jatoba-для-ос-семейства-gnulinux), с шага [8)](#_bookmark34) переход в директорию расположения исполняемых файлов.

# УСТАНОВКА СУБД «JATOBA» НА ОС СЕМЕЙСТВА MICROSOFT WINDOWS

> Установка СУБД «Jatoba» должна выполняться доверенным администратором в соответствии с данным документом.
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Порядок установки дистрибутива аналогичен на всех ОС семейства Microsoft Windows
>
> В процессе установки СУБД не следует использовать:

- доменные имена (domain_name\user_name);

- имена с пробелами.

## Порядок установки СУБД «Jatoba» на ОС Windows Server 2016

> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />Перед установкой СУБД «Jatoba» на ОС Windows необходимо убедиться, что установлен Visual C++ 2017 Redistributable 14.23.27820. В случае его отсутствия – провести установку
>
> Для установки СУБД «Jatoba» на ОС Windows необходимо выполнить следующую последовательность действий:

1)  В ОС Windows запустить файл «JatobaInstaller-Х.Х.Х-Х[<sup>3</sup>](#_bookmark59).msi».

2)  В открывшемся окне приветствия нажать кнопку «Далее» (см. рис. [4.1](#_bookmark60)).

> <span id="_bookmark59" class="anchor"></span><sup>3</sup> Номер версии уточняется при поставке изделия
>
> <img src="../docs/assets/images/com18.3.1/install/media/image81.png" style="width:3.91877in;height:3.06375in" />
>
> <span id="_bookmark60" class="anchor"></span>Рисунок 4.1 – Запуск мастера установки

3)  В диалоговом окне «Лицензионное соглашение» прочесть условия лицензионного соглашения, затем установить флажок напротив «Я принимаю условия лицензионного соглашения» и нажать кнопку «Далее» (см. рис. [4.2](#_bookmark61)).

<img src="../docs/assets/images/com18.3.1/install/media/image82.png" style="width:3.86719in;height:3.02344in" />

> <span id="_bookmark61" class="anchor"></span>Рисунок 4.2 – Окно «Лицензионное соглашение»

4)  В открывшемся окне «Определение директории установки» указать путь к каталогу хранения файлов данных СУБД «Jatoba» или оставить путь по умолчанию, затем нажать кнопку «Далее» (см. рис. [4.3](#_bookmark62)).

> <img src="../docs/assets/images/com18.3.1/install/media/image83.png" style="width:3.81563in;height:2.98312in" />
>
> <span id="_bookmark62" class="anchor"></span>Рисунок 4.3 – Окно «Определение директории установки»

5)  Указать тип установки (см. рис. [4.4](#_bookmark63)):

> − «Обычная» или «Полная» – будет последовательно предложено задать директорию расположения данных, задать пароль системного пользователя, указать начальные настройки СУБД (пароля администратора СУБД, язык и кодировку хранения данных в СУБД). Обычная установка не включает дополнительные расширения СУБД по работе с различными видами данных и интеграции с другими СУБД;
>
> − «Выборочная» – сначала будет предложено отметить к установке нужные компоненты. Затем, если будет выбрана установка «Jatoba для Сервера», будет последовательно предложено задать все необходимые параметры аналогично «полной» или
>
> «обычной» установке.
>
> <img src="../docs/assets/images/com18.3.1/install/media/image84.png" style="width:3.91874in;height:3.06375in" />
>
> <span id="_bookmark63" class="anchor"></span>Рисунок 4.4 – Окно «Выбор типа установки»

6)  В открывшемся окне «Определение директории данных» указать путь к каталогу хранения файлов данных СУБД «Jatoba» или оставить выбранный по умолчанию, и нажать кнопку «Далее» (см. рис. [4.5](#_bookmark64)).

<img src="../docs/assets/images/com18.3.1/install/media/image85.png" style="width:3.81572in;height:2.98312in" />

> <span id="_bookmark64" class="anchor"></span>Рисунок 4.5 – Окно «Определение директории данных»

7)  В открывшемся окне «Настройка учетной записи системного пользователя» указать системного пользователя (либо оставить пользователя, предложенного по умолчанию) и указать пароль, от имени которого будет работать СУБД «Jatoba», и нажать кнопку «Далее» (см. рис. [4.6](#_bookmark65)).

> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />Имя пользователя, от которого происходит установка, не должно содержать пробелов.

<img src="../docs/assets/images/com18.3.1/install/media/image86.png" style="width:3.91876in;height:3.06375in" />

> <span id="_bookmark65" class="anchor"></span>Рисунок 4.6 – Окно «Настройки учетной записи системного пользователя»

8)  В открывшемся окне «Настройка СУБД» требуется указать порт для подключения, имя администратора СУБД, его пароль, кодировку данных из выпадающего списка, а также регион и язык (см. рис. [4.7](#_bookmark66)).

<img src="../docs/assets/images/com18.3.1/install/media/image87.png" style="width:3.86719in;height:3.02344in" />

> <span id="_bookmark66" class="anchor"></span>Рисунок 4.7 – Окно «Настройки СУБД»
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25138in;height:0.25124in" />Для последующей корректной работы СУБД рекомендуется установить кодировку данных UTF8.
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Для обеспечения целостности данных рекомендуется поставить флажок напротив поля «Проверка контрольных сумм».

9)  В открывшемся окне «Все готово к установке Jatoba» запустить процесс установки, нажав кнопку «Установить» (см. рис. [4.8](#_bookmark67)).

<img src="../docs/assets/images/com18.3.1/install/media/image88.png" style="width:3.91875in;height:3.06375in" />

> <span id="_bookmark67" class="anchor"></span>Рисунок 4.8 – Окно «Все готово к установке Jatoba» Процесс установки СУБД «Jatoba» занимает несколько минут.

10) По завершению установки в окне «Установка Jatoba завершена» необходимо нажать кнопку «Готово» (см. рис. [4.9](#_bookmark68)).

<img src="../docs/assets/images/com18.3.1/install/media/image89.png" style="width:4.02387in;height:3.14437in" />

> <span id="_bookmark68" class="anchor"></span>Рисунок 4.9 – Окно «Установка Jatoba завершена»

## Возможная ошибка при установке СУБД «Jatoba» на ОС Windows

> При неудачной установке СУБД «Jatoba» программа выдаст информационное сообщение (см. рис. [4.10](#_bookmark70)).

<img src="../docs/assets/images/com18.3.1/install/media/image90.png" style="width:4.31866in;height:2.17687in" />

> <span id="_bookmark70" class="anchor"></span>Рисунок 4.10 – Информационное сообщение о неудачной установке СУБД «Jatoba»
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />В СУБД «Jatoba» версии ядра 5 в имени сервиса присутствует номер версии JatobaServer-\<версия\>
>
> Для устранения ошибки и повторной установки СУБД «Jatoba» необходимо деинсталлировать программу вручную. Для этого необходимо выполнить следующие шаги:

1)  Удалить установленную СУБД «Jatoba».

> Пуск → Параметры Windows → Приложения → Приложения и возможности → Jatoba
>
> → Удалить (см. рис. [4.11](#_bookmark71)).
>
> <span id="_bookmark71" class="anchor"></span>Рисунок 4.11 – Удаление СУБД «Jatoba»

2)  Удалить пользователя, который был создан в ходе установки.

> Пуск → Средства администрирования Windows → Управление компьютером → Локальные пользователи и группы → Пользователи → postgres → Удалить (см. рис. [4.12](#_bookmark72)).
>
> <span id="_bookmark72" class="anchor"></span>Рисунок 4.12 – Удаление пользователя

3)  Удалить локальную службу системы.

> Пуск → Средства администрирования Windows → Службы → JatobaServer → Остановить службу (см. рис. [4.13](#_bookmark73)).
>
> <span id="_bookmark73" class="anchor"></span>Рисунок 4.13 – Остановка локальной службы/системы

4)  Удалить системную папку. Системная папка располагается по адресу:

> С:\Program Files\GIS\Jatoba\\ver\>\data
>
> При удалении данной папки необходимо нажать правой кнопкой мыши на папку → Свойства → Безопасность → Дополнительно → Изменить владельца → В поле «Введите имена выбираемых объектов» ввести «Администратор» → ОК → Установить флажок напротив «Заменить все записи разрешений дочернего объекта наследуемыми от этого объекта» → ОК (см. рис. [4.14](#_bookmark74)).
>
> <span id="_bookmark74" class="anchor"></span>Рисунок 4.14 – Удаление папки правами администратора

1.  <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" /><span id="_bookmark75" class="anchor"></span>**Установка клиентской части СУБД «Jatoba» на ОС Windows Server 2016** Перед установкой клиентской части СУБД «Jatoba» на ОС Windows необходимо убедиться, что установлен Visual C++ 2017 Redistributable 14.23.27820. В случае его отсутствия – провести установку

## Порядок установки СУБД «Jatoba» на ОС Windows

> Процесс установки клиентской части СУБД «Jatoba» аналогичен, описанному в разделе [4.1](#порядок-установки-субд-jatoba-на-ос-windows-server-2016), до шага выбора типа установки:

1)  В окне «Выбор типа установки» следует выбрать тип установки «Выборочная» (см. рис. [4.15](#_bookmark77)).

<img src="../docs/assets/images/com18.3.1/install/media/image95.png" style="width:3.76015in;height:2.94281in" />

> <span id="_bookmark77" class="anchor"></span>Рисунок 4.15 – Окно выбора типа установки

2)  в окне «Выборочная установка», отключить параметр «Jatoba для Сервера». При этом установится только клиентская часть СУБД «Jatoba» (см. рис. [4.16](#_bookmark78)).

<img src="../docs/assets/images/com18.3.1/install/media/image96.png" style="width:3.86054in;height:3.02344in" />

> <span id="_bookmark78" class="anchor"></span>Рисунок 4.16 – Выбор устанавливаемых компонент

3)  В открывшемся окне «Все готово к установке Jatoba» запустить процесс установки, нажав кнопку «Установить» (см. рис. [4.17](#_bookmark79)).

<img src="../docs/assets/images/com18.3.1/install/media/image97.png" style="width:4.06212in;height:3.16875in" />

> <span id="_bookmark79" class="anchor"></span>Рисунок 4.17 – Окно «Все готово к установке Jatoba»
>
> Откроется окно процесса установки. Процесс установки клиентской части СУБД
>
> «Jatoba» занимает несколько минут.

4)  По завершению установки в окне «Установка Jatoba завершена» необходимо нажать кнопку «Готово» (см. рис. [4.18](#_bookmark80)).

> <img src="../docs/assets/images/com18.3.1/install/media/image98.png" style="width:4.04908in;height:3.17625in" />
>
> <span id="_bookmark80" class="anchor"></span>Рисунок 4.18 – Окно «Установка Jatoba завершена»

# УСТАНОВКА ОБНОВЛЕНИЙ СУБД «JATOBA»

> При выявлении информации об уязвимости изделия, среды его функционирования и отсутствии информации в БДУ ФСТЭК России [(<u>https://bdu.fstec.ru/</u>)](https://bdu.fstec.ru/) ООО «Газинформсервис» информирует потребителей о недостатках средства, а также о компенсирующих мерах по защите информации или ограничениях по применению путем отправки сообщений на электронные адреса потребителей.
>
> Дополнительно разработчик размещает на официальном сайте компании <http://www.gaz-is.ru/>:

- информационное сообщение, содержащее описание уязвимости и информирует потребителей о необходимости обновления средства защиты информации;

- файлы с обновленной версией ПО изделия;

- новые контрольные суммы ПО изделия (включая контрольные суммы файла с обновлением и контрольные суммы ПО после применения обновления).

> Перед применением обновления требуется выполнить расчет контрольных суммы полученного файла с обновлением и сверить их с контрольными суммами, указанными на официальном сайте разработчика.
>
> В случае совпадения контрольных сумм осуществляется установка обновления. При несовпадении контрольных сумм обновление не осуществляется и незамедлительно сообщается об этом разработчику (производителю) изделия.
>
> После установки обновления делается соответствующая отметка в разделе 12 документа 643.72410666.00067-08 30 01 «Защищенная система управления базами данных СУБД «Jatoba». Формуляр».
>
> Установка обновлений проводится в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по обновлению».
>
> Перед установкой обновлений рекомендуется сделать резервную копию БД и конфигурационных файлов.

# УСТАНОВКА КОМПОНЕНТА «JATOBA DATA SAFE»

> Установка компонента происходит в два этапа:

1)  Создание служебной БД на базе СУБД (БД) «Jatoba».

2)  Установка компонента JDS.

> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />СУБД «Jatoba» должна быть установлена в первую очередь.
>
> Для служебной БД JDS обязательно должен быть установлен параметр:
>
> standard_conforming_strings=on
>
> Параметр устанавливается автоматически при установке.
>
> Служебная БД будет хранить список целей (target), учетные записи пользователей, технические учетные записи и обеспечивать меры безопасности.

Настройка служебной СУБД описана в документе 643.72410666.00067-08 97 01

«Защищенная система управления базами данных «Jatoba». Руководство администратора».

> В качестве метода аутентификации должен использоваться метод «password».

## Установка компонента JDS под ОС GNU/Linux с помощью инсталлятора

> Перед началом установки необходимо убедиться, что служба (демон) «jatoba-(ver)» запущена и установлен метод аутентификации по паролю в конфигурационном файле pg_hba.conf.
>
> Скопировать папку с дистрибутивом на сервер установки в папку локального пользователя.
>
> Для примера создадим каталог /usr/share/jds командой:

<img src="../docs/assets/images/com18.3.1/install/media/image99.png" style="width:7.11984in;height:0.92031in" />

> sudo mkdir /usr/share/jds
>
> Рисунок 6.1 – Команда создания каталога
>
> С дистрибутивного диска скопировать файлы и каталог пакета установки в созданный каталог:

- каталог – packages, содержащий пакеты установки;

- каталог – utils, содержащий конфигурационные файлы;

- скрипт – jds.sh.

<img src="../docs/assets/images/com18.3.1/install/media/image100.png" style="width:3.47549in;height:1.15281in" />

> Рисунок 6.2 – Структура каталогов Запустить инсталлятор компонента командой:

<img src="../docs/assets/images/com18.3.1/install/media/image101.png" style="width:7.07729in;height:1.11625in" />

> \# cd /usr/share/jds/
>
> \# sudo bash jds.sh install
>
> Рисунок 6.3 – Команда запуск инсталлятора JDS Команда инсталляции является универсальной для всех ОС GNU/Linux.
>
> Инсталлятор проверит установлен ли пакет jatoba\<version\>-client. Если пакет не установлен, то инсталлятор выведет ошибку и потребуется доустановить его из дистрибутива СУБД.
>
> Инсталлятор выведет запрос на согласие установки компонента.
>
> Do you wish to install jds?
>
> <img src="../docs/assets/images/com18.3.1/install/media/image102.png" style="width:7.11747in;height:1.83094in" />
>
> Рисунок 6.4 – Вывод запроса об установке компонента
>
> Выбрав положительный ответ, инсталлятор установит дополнительные пакеты и файлы необходимые для запуска службы «jds.service».
>
> Следующим этапом инсталлятор выведет сообщения о выборе конфигурации по умолчанию:

<img src="../docs/assets/images/com18.3.1/install/media/image103.png" style="width:7.10659in;height:1.55969in" />

> Do you want to change default configuration settings?
>
> Рисунок 6.5 – Вывод сообщения о выборе конфигурации
>
> Инсталлятор предложит параметры СУБД по умолчанию, если значение не отличается от значения по умолчанию, то вводить параметры не требуется, достаточно нажать клавишу «Enter» и значение подставится автоматически:

- Enter JATOBA_SERVER (default localhost)? –

> Введите адрес установки СУБД «Jatoba»:

- Enter JATOBA_PORT (default 5432)?

> Введите порт подключения к СУБД «Jatoba»:

- Enter JATOBA_USER_ID (default jds)?

> Введите имя пользователя компонента JDS для СУБД, по умолчанию пользователь
>
> «jds»:

- Enter JATOBA_USER_PSWD (default sql)?

> Введите пароль для пользователя «jds»:
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Ввод параметра отражается отдельно и не присутствует в общем списке

- Enter JATOBA_DATABASE (default jdsdb)?

> Введите имя БД, которую будет использовать компонент JDS, по умолчанию имя БД
>
> «jdsdb»:

- Enter JDS_PUBLISH_PORT (default 5000)?

> Введите публичный порт СУБД, по умолчанию будет использоваться порт 5000:

- Enter SUPERUSER name (default postgres)?

> Введите пароль суперпользователя, по умолчанию используется пользователь
>
> «postgres».
>
> Инсталлятор предложит установить предложенный пароль по умолчанию:
>
> Enter JATOBA_USER_PSWD (default sql)?
>
> <img src="../docs/assets/images/com18.3.1/install/media/image104.png" style="width:7.06338in;height:3.64167in" />
>
> Рисунок 6.6 – Предложение изменения пароля по умолчанию
>
> Далее инсталлятор запросит ввод пароля привилегированного пользователя СУБД
>
> «postgres» для:

- создания роли «jds» в СУБД:

<img src="../docs/assets/images/com18.3.1/install/media/image105.png" style="width:7.19732in;height:1.42406in" />

> Creating role: jds
>
> Рисунок 6.7 – Запрос пароля пользователя «postgres» для создания роли «jds»

- создания служебной БД «jdsdb», владельцем которой будет созданный пользователь «jds»:

> Creating db: jdsdb OWNER jds
>
> <img src="../docs/assets/images/com18.3.1/install/media/image106.png" style="width:7.07213in;height:5.0025in" />
>
> Рисунок 6.8 - Создание служебной БД «jdsdb»

- установки расширений СУБД и конфигурации БД «jdsdb»:

> Creating extension: dblink and change configuration standard_conforming_strings in jdsdb
>
> В служебной БД будут созданы служебные функции для подраздела «Проблемы и решения» (Problems & Solutions).
>
> <img src="../docs/assets/images/com18.3.1/install/media/image107.png" style="width:6.98638in;height:4.93865in" />
>
> Рисунок 6.9 – Установка расширений и стандартной конфигурации БД Будут созданы в каталоге /opt подкаталоги:

- jds-script – подкаталог для запуска службы «jds.service»;

- jds – подкаталог содержания веб-сайта компонента JDS и конфигурационными файлами;

- jds-doctor – подкаталог для запуска службы «jds-doctor.service».

<img src="../docs/assets/images/com18.3.1/install/media/image108.jpeg" style="width:3.10383in;height:1.19792in" />

> Рисунок 6.10 – Структура каталога opt
>
> Инсталлятор автоматически создаст и запустит службы «jds.service» и «jds-doctor.service».
>
> <img src="../docs/assets/images/com18.3.1/install/media/image109.png" style="width:6.69293in;height:5.04781in" />
>
> Рисунок 6.11 – Установка служб компонента JDS На данном этапе установка компонента JDS закончена.

## Запуск компонента JDS. Установка/смена пароля администратора

> Перед запуском компонента потребуется установить пароль для администратора компонента.
>
> Установка пароля выполняется от имени и с правами привилегированного пользователя ОС «root» в терминале командой:
>
> ./JDS.WebApi --setadmin username password
>
> Командная строка для установки и сброса пароля имеет параметры:

- --setadmin - параметр, указывающий на необходимость установки или смены

> пароля;

- username - имя пользователя;

- password – пароль.

> Например

<img src="../docs/assets/images/com18.3.1/install/media/image110.png" style="width:7.09917in;height:1.44708in" />

> cd /opt/jds
>
> ./JDS.WebApi --setadmin admin Gazprom09! systemctl restart jds
>
> Рисунок 6.12 Установка/сброс пароля администратора Устанавливаемый пароль должен отвечать параметрам сложности.

## Запуск сертифицированной версии компонента JDS 2.7.5

> В сертифицированной версии компонента JDS 2.7.5 запуск /opt/jds/JDS.WebApi стал возможен только при явном указании пути к .NET через переменную окружения DOTNET_ROOT. Это делает вызов JDS.WebApi --setadmin
>
> Для запуска используется скрипт «reset_admin_paswd.sh», расположеный по пути:
>
> /opt/jds-scripts
>
> Используются параметры запуска:
>
> \# reset_admin_paswd.sh без параметров или с параметром --help отображает справку
>
> \# reset_admin_paswd.sh \<user\> \<password\> устанавливает пароль "password" для администратора "user"

## Альтернативный вариант запуска сертифицированной версии компонента JDS

> **2.7.5**
>
> Альтернативный запуск компонента выполняется в терминале ОС командой:
>
> DOTNET_ROOT=/opt/jds ./JDS.WebApi --setadmin \<user\> \<password\>
>
> Проверить работоспособность установки компонента можно веб-браузером ОС, набрав в адресной строке адрес: [<u>http://localhost:5000/</u>](http://localhost:5000/)
>
> Рисунок 6.13 – Стартовая страница JDS в GNU/Linux

## Способы публикации WEB-приложения JDS в инфраструктуре

> Публикация — это порядок предоставления доступа к приложению JDS в инфраструктуре.
>
> Установка приложения JDS - доставка бинарников и конфигурирование доступа к служебной БД - сама по себе не является публикацией, так как по умолчанию приложение принимает входящие подключения по HTTP-протоколу на порту 5000 только на адресе
>
> 127.0.0.1 и не доступно извне.
>
> Общие требования к публикации:

- приложение должно быть доступно пользователю по протоколу HTTPS;

- сертификат, которым защищается приложение, должен быть валидным для локальной инфраструктуры;

- если развёртывание JDS производится в защищённой сертифицированной инфраструктуре, использование не сертифицированных сервисов не допускается; предполагается, что JDS, сам по себе, сертифицирован.

## Типовые способы публикации WEB-приложения

> JDS как WEB-приложение, написанное на .NET, взаимодействует с внешним миром через собственный HTTP(s) сервер Kestrel, входящий в состав .NET SDK.
>
> Публикация .NET WEB-приложений, обычно, производится с помощью дополнительного сервиса Reverse proxy, часто реализуемого с применением NGINX.

<img src="../docs/assets/images/com18.3.1/install/media/image112.png" style="width:6.99616in;height:0.9425in" alt="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel/_static/kestrel-to-internet.png?view=aspnetcore-8.0 " />

> Рисунок 6.14 – Публикация с помощью дополнительного сервиса Reverse proxy Кроме того, .NET WEB-приложение может использовать для публикации Kestrel
>
> самостоятельно.

<img src="../docs/assets/images/com18.3.1/install/media/image113.png" style="width:4.93311in;height:1in" alt="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel/_static/kestrel-to-internet2.png?view=aspnetcore-8.0 " />

> Рисунок 6.15 - Публикации с помощью Kestrel

## Примеры настройки публикации WEB-приложения JDS Вариант 1.

> Публикация с использованием встроенного сервера Kestrel по протоколу HTTPS
>
> В файл настройки приложения jds/appsettings.json требуется указать значения параметров Kestrel \\ Endpoints \\ Default и Kestrel \\ Certificates \\ Default:
>
> "Kestrel": {
>
> "Endpoints": {
>
> "Default": {
>
> "Url": "https://\*:443"
>
> }
>
> },
>
> "Certificates": {
>
> "Default": {
>
> "Path": "/path/to/certificate.pfx", "Password": ""
>
> }
>
> }
>
> }
>
> В примере выше JDS публикуется на всех IP-адресах хоста, на порту 443, с использованием протокола HTTPS.
>
> Сертификат, используемый Kestrel для защиты канала, должен быть валидным (выпущен центром сертификации, корневые сертификаты которого настроены на всех хостах инфраструктуры как доверенные).
>
> Сертификат должен быть в формате PFX, собирается следующим образом:
>
> openssl pkcs12 -export -out certificate.pfx -inkey private.key
>
> -in certificate.crt
>
> В этом примере PFX-файл собирается из файла сертификата и закрытого ключа; предполагается, что пароль к закрытому ключу не установлен. В ином случае (пароль установлен) требуется указать пароль при сборке PFX-файла, также, указать пароль в поле
>
> «Password» файла настройки. Файл сертификата должен быть доступен на чтение для пользователя, под которым запускается JDS.
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25138in;height:0.25055in" />Правила безопасности ОС Linux могут запрещать привязку непривилегированных (пользовательских) приложений к портам ниже 1024.

Нужно присвоить соответствующие права исполняемому файлу JDS:

> sudo setcap 'cap_net_bind_service=+ep' /opt/jds/JDS.WebApi

## Вариант 2

> Публикация с использованием внешнего WEB-сервера NGINX (не входит в комплект поставки JDS)
>
> В данном примере WEB-приложение привязывается к порту 5000 на localhost, а NGINX настраивается на проксирование внешних HTTPS-запросов на localhost:5000.
>
> В файл настройки приложения jds/appsettings.json требуется указать значение только параметра Kestrel \\ Endpoints \\ Default:
>
> "Kestrel": {
>
> "Endpoints": {
>
> "Default": {
>
> "Url": "[http://localhost:5000](http://localhost:5000/)"
>
> },
>
> }
>
> },
>
> Параметр Kestrel \\ Certificates \\ Default требуется удалить из файла конфигурации.
>
> Файл настройки сайта для WEB-сервера NGINX должен выглядеть следующим образом:
>
> server {
>
> listen 443 ssl default_server; listen \[::\]:443 ssl default_server;
>
> ssl_certificate /var/www/\_pki/certificate.crt; ssl_certificate_key /var/www/\_pki/private.key; ssl_protocols TLSv1.2 TLSv1.3;
>
> ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POL Y1305_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384';
>
> root /var/www/html;
>
> index index.html index.htm index.nginx-debian.html; server_name jds.local.net;
>
> location / {
>
> proxy_set_header Host \$host; proxy_set_header Upgrade \$http_upgrade; proxy_set_header Connection 'upgrade'; proxy_set_header X-Forwarded-For
>
> \$proxy_add_x_forwarded_for;
>
> proxy_set_header X-Forwarder-Proto \$scheme; proxy_pass [http://localhost:5000](http://localhost:5000/); proxy_http_version 1.1;
>
> }
>
> }
>
> В примере выше нужно изменить "по месту" значения следующих параметров, приведённых в таблице [6.1](#_bookmark86):
>
> <span id="_bookmark86" class="anchor"></span>Таблица 6.1 – Применяемые параметры

<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Значение</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>ssl_certificate</p>
</blockquote></td>
<td><blockquote>
<p>Путь к файлу сертификата, сформированного для для сайта "jds.local.net"</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ssl_certificate_key</p>
</blockquote></td>
<td><blockquote>
<p>Путь к файлу закрытого ключа сертификата, сформированного для для сайта "jds.local.net"</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ssl_password_file</p>
</blockquote></td>
<td><blockquote>
<p>Текст пароля закрытого ключа сертификата, сформированного для для сайта "jds.local.net", если он установлен</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>server_name</p>
</blockquote></td>
<td><blockquote>
<p>Имя сайта, на котором работает JDS. В данном примере это "jds.local.net"</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>proxy_pass</p>
</blockquote></td>
<td><blockquote>
<p>Адрес и порт, на который перенаправляются HTTPS-запросы для сайта "jds.local.net".</p>
<p>Это значение должно совпадать с значением настройки Kestrel \ Endpoints \ Default файла jds/appsettings.json.</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Установка веб-сервера nginx

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Скрипт применяется в коммерческой версии СУБД «Jatoba»
>
> В случае, когда требуется установить веб-сервер в ОС GNU/Linux в каталоге, хранится скрипт установки веб-сервера nginx:
>
> /usr/share/jds/utils
>
> Устанавливается пакет из удаленного репозитория командой:
>
> cd ./utils/
>
> sudo bash nginx.sh install -y
>
> Для ОС Astra Linux применяется команда:

<img src="../docs/assets/images/com18.3.1/install/media/image114.png" style="width:7.11068in;height:4.60156in" />

> bash [nginx.sh](http://nginx.sh/) install --default
>
> Рисунок 6.16 – Установка веб-сервера nginx
>
> При первом запуске веб-страницы JDS по адресу [<u>https://localhost/</u>](https://localhost/) веб-браузер может сообщить, что обнаружил потенциальную угрозу безопасности и прекратил работу с localhost.
>
> Для устранения проблемы, необходимо нажать «Advanced».
>
> В открывшимся окне появится дополнительное сообщение, что нет доверия к сертификату.
>
> Подтвердить, что доверяете сертификату, нажав на «Accept the Risk and Continue».
>
> Рисунок 6.17 – Вывод сообщений веб-браузером
>
> После чего веб-страница JDS станет доступной по адресу [<u>https://localhost</u>,](https://localhost/) в котором используется SSL-соединение.

## Удаление веб-сервера nginx

> В случае, когда требуется удалить веб-сервер в ОС GNU/Linux, в каталоге хранится скрипт «nginx.sh»:
>
> /usr/share/jds/utils
>
> Удаление проводится в автоматическом режиме командой:
>
> cd ./utils/
>
> sudo bash nginx.sh uninstall -y
>
> <img src="../docs/assets/images/com18.3.1/install/media/image116.png" style="width:7.10301in;height:4.90187in" />
>
> Рисунок 6.18 – Удаление веб-сервера nginx

## Удаление компонента JDS

> Скрипт удаления компонента JDS находится в каталоге локального пользователя, а в рассматриваемом примере в каталоге:
>
> /usr/share/jds
>
> Скрипт выполняется от имени и с правами привилегированного пользователя с ключом «uninstall»:
>
> sudo bash jds.sh uninstall

После запуска скрипта будет выведен запрос о подтверждении удаления:

> Do you wish to uninstall jds
>
> <img src="../docs/assets/images/com18.3.1/install/media/image117.png" style="width:7.11065in;height:1.43375in" />
>
> Рисунок 6.19 – Вывод запроса о продолжении удаления При подтверждении будут выполнены следующие действия:

- остановлена и удалена служба «jds.service»;

- удален каталог /opt;

- удалена роль СУБД «jds»;

- удалена служебная БД «jdsdb» при подтверждении удаления.

<img src="../docs/assets/images/com18.3.1/install/media/image118.png" style="width:7.11272in;height:3.18719in" />

> Рисунок 6.20 – Удаление компонента JDS

## Обновление компонента JDS в ручном режиме

> При обновлении существующего развёртывания JDS требуется обеспечить не только доставку на хост новых исполняемых файлов, но в обязательном порядке сохранить все данные компонента, ранее созданные/сохранённые пользователем (далее - данные приложения).
>
> Как минимум требуется сохранить:

- файл конфигурации - appsettings.json;

- служебная база данных JDS;

- SSH-ключ учётной записи, под которой запускается JDS;

- файл ~/.ssh/known_hosts учётной записи, под которой запускается JDS. Обновление компонента в ручном режиме выполняется в следующем порядке:

1)  Остановить службы jds и jds-doctor

> \# systemctl stop jds
>
> \# systemctl status jds
>
> \# systemctl stop jds-doctor
>
> \# systemctl status jds-doctor

2)  Сделать резервную копию файлов:

    - /opt/jds/appsettings.json;

    - /opt/jds-doctor/appsetting.json.

3)  Удалить папки:

    - /opt/jds;

    - /opt/jds-doctor;

    - /opt/jds-scripts;

4)  Распаковать архив jds-\*\*\*-\*-\*\*\*- release.tar.gz в папку /opt

5)  Переименовать папки (если требуется)

    - /opt/jds.doctor -\> /opt/jds-doctor;

    - /opt/jds.scripts -\> /opt/jds-scripts.

6)  Восстановить следующие файлы из резервной копии:

    - /opt/jds/appsettings.json;

    - /opt/jds-doctor/appsetting.json.

7)  Проверить и при необходимости дополнить содержание конфигурационного файла /opt/jds/appsettings.json компонента JDS

> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />Конфигурационный файл /opt/jds/appsettings.json компонента JDS версии 2.9 имеет дополнительные секцию параметров журналирования.
>
> Без этой секции параметров компонент не запустится.
>
> Конфигурационный файл /opt/jds/appsettings.json восстановленный из резервной копии, необходимо дополнить секцией параметров:

<img src="../docs/assets/images/com18.3.1/install/media/image119.png" style="width:7.04455in;height:3.06187in" />

> {
>
> "AppLogging": {
>
> "Level": "Information", "SensitiveDataLogging": false, "FileCount": 90, "RotateInterval": "Day"
>
> },
>
> Рисунок 6.21 – Секция параметров журналирования для JDS

8)  Проверить и при необходимости дополнить содержание конфигурационного файла /opt/jds-doctor/appsetting.json службы jds-doctor

> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />Конфигурационный файл /opt/jds-doctor/appsetting.json службы jds-doctor версии 2.9 имеет дополнительные секцию параметров журналирования.
>
> Без этой секции параметров служба не запустится.
>
> Конфигурационный файл /opt/jds-doctor/appsetting.json восстановленный из резервной копии, необходимо дополнить секцией параметров:
>
> {
>
> "AppLogging": {
>
> "Level": "Information",
>
> "SensitiveDataLogging": false,
>
> "FileCount": 90,
>
> "RotateInterval": "Day"
>
> },

<img src="../docs/assets/images/com18.3.1/install/media/image120.png" style="width:7.13256in;height:2.955in" />

> Рисунок 6.22– Секция параметров журналирования для службы jds-doctor

9)  В папке /opt установить атрибуты доступа командами:

> chown -R root: ./jds/\*.\*
>
> chown -R root: ./jds-doctor/\*.\* chown -R root: ./jds-scripts/\*.\*
>
> find /opt/jds -type d -exec chmod 0755 {} \\ find /opt/jds -type f -exec chmod 0664 {} \\
>
> find /opt/jds-doctor -type d -exec chmod 0755 {} \\ find /opt/jds-doctor -type f -exec chmod 0664 {} \\ chmod +x ./jds/JDS.WebApi
>
> chmod +x ./jds-doctor/JDS.PasDoctor
>
> Для операционной системы ОСНОВА2 (OSnova 2.10) до запуска служб требуется выполнить команды:
>
> \$ sudo setfattr -n user.pax.flags -v m
>
> /opt/jds/JDS.WebApi
>
> \$ sudo setfattr -n user.pax.flags -v m /opt/jds-doctor/JDS.PasDoctor

10) Запустить службы jds и jds-doctor

## <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Установка компонента JDS на ОС Windows с помощью инсталлятора

> Пример установки компонента JDS на серверных ОС приведен далее по тексту документа.
>
> Пример установки веб-сервера (IIS) на ОС Windows 10 приведен в Приложении [7](#приложение-7). Дальнейшие действия по установке и конфигурированию компонента будут аналогичны, приведенным ниже.

## Настройка сервера ОС Windows Server 2016

> Для предварительной настройки сервера ОС Windows необходимо:

- задать корректное имя сервера;

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Имя сервера не должно включать символ нижнего подчеркивания «\_», в противном случае ОС выдаст ошибку.

- настроить сетевое окружение;

- установить обновления ОС;

- в панели диспетчера серверов отключить «Конфигурацию усиленной безопасности Internet Explorer».

## Установка роли веб-сервера (IIS)

> Для установки роли веб-сервера (далее – IIS) необходимо проделать следующие шаги:

1)  Перейти в панель «Диспетчер серверов» → «Панель мониторинга» →

> «Добавить роли и компоненты» (рисунок [6.23](#_bookmark94)).
>
> <span id="_bookmark94" class="anchor"></span>Рисунок 6.23 – Окно «Диспетчер серверов»

2)  В открывшемся окне «Мастер добавления ролей и компонентов» ознакомиться с разделом «Перед началом работы», затем нажать кнопку «Далее» (рисунок [6.24](#_bookmark95)).

> <img src="../docs/assets/images/com18.3.1/install/media/image122.jpeg" style="width:5.40355in;height:3.85in" />
>
> <span id="_bookmark95" class="anchor"></span>Рисунок 6.24 – Окно с разделом «Перед началом работы»

3)  В разделе «Выбор типа установки» установить флажок напротив поля

> «Установка ролей или компонентов» и нажать «Далее» (рисунок [6.25](#_bookmark96)).

<img src="../docs/assets/images/com18.3.1/install/media/image123.jpeg" style="width:5.32169in;height:3.79167in" />

> <span id="_bookmark96" class="anchor"></span>Рисунок 6.25 – Окно с разделом «Выбор типа установки»

4)  В разделе «Выбор целевого сервера» установить флажок напротив поля

> «Выберите сервер из пула серверов» и нажать «Далее» (рисунок [6.26](#_bookmark97)).
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />На данном шаге будет выбран текущий сервер.

<img src="../docs/assets/images/com18.3.1/install/media/image124.jpeg" style="width:5.23981in;height:3.73333in" />

> <span id="_bookmark97" class="anchor"></span>Рисунок 6.26 – Окно с разделом «Выбор целевого сервера»

5)  <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24944in" />В разделе «Выбор ролей сервера» установить флажок напротив поля «Веб-сервер (IIS)» (рисунок [6.27](#_bookmark98)), после этого откроется окно «Мастер добавления ролей и компонентов», в котором необходимо нажать «Добавить компоненты» (рисунок [6.28](#_bookmark99)). Вернуться в окно с разделом «Выбор ролей сервера» и нажать «Далее» (рисунок [6.29](#_bookmark100)).

> По умолчанию флажок установлен напротив поля «Файловые службы и службы хранилища», который необходимо оставить.
>
> <img src="../docs/assets/images/com18.3.1/install/media/image125.jpeg" style="width:5.56731in;height:3.96667in" />
>
> <span id="_bookmark98" class="anchor"></span>Рисунок 6.27 – Окно с разделом «Выбор ролей сервера»
>
> <span id="_bookmark99" class="anchor"></span>Рисунок 6.28 – Вспомогательное окно «Мастер добавления ролей и компонентов»
>
> <img src="../docs/assets/images/com18.3.1/install/media/image127.jpeg" style="width:5.56731in;height:3.96667in" />
>
> <span id="_bookmark100" class="anchor"></span>Рисунок 6.29 – Окно с разделом «Выбор ролей сервера»

6)  В разделе «Выбор компонентов» оставить выбранные компоненты по умолчанию и нажать «Далее» (рисунок [6.30](#_bookmark101)).

<img src="../docs/assets/images/com18.3.1/install/media/image128.jpeg" style="width:5.56843in;height:3.96667in" />

> <span id="_bookmark101" class="anchor"></span>Рисунок 6.30 – Окно с разделом «Выбор компонентов»

7)  В разделе «Роль веб-сервера (IIS)» описана информация о веб-сервере IIS,

> после ознакомления нажать «Далее» (рисунок [6.31](#_bookmark102)).

<img src="../docs/assets/images/com18.3.1/install/media/image129.jpeg" style="width:5.48544in;height:3.90833in" />

> <span id="_bookmark102" class="anchor"></span>Рисунок 6.31 – Окно с разделом «Роль веб-сервера (IIS)»

8)  В разделе «Выбор служб ролей» оставить выбранные параметры по умолчанию и нажать «Далее» (рисунок [6.32](#_bookmark104)).

> Параметры, установленные по умолчанию в разделе «Выбор служб ролей», приведены в таблице [6.2](#_bookmark103).
>
> <span id="_bookmark103" class="anchor"></span>Таблица 6.2 – Требуемые параметры в шаге «Службы ролей»

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 34%" />
<col style="width: 59%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Основной параметр</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Связанный параметр</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Безопасность</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>1.1</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Фильтрация запросов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Исправность и диагностика</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2.1</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Ведение журнала HTTP</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Общие функции HTTP</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3.1</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Документ по умолчанию</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3.2</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Обзор каталога</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3.3</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Ошибки HTTP</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3.4</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Статическое содержимое</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>4</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Производительность</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>4.1</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Сжатие статического содержимого</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>5</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Разработка приложений</strong></p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 34%" />
<col style="width: 59%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Основной параметр</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Связанный параметр</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>5.1</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Инициализация приложений</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>6</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Средства управления</strong></p>
</blockquote></td>
</tr>
<tr>
<td></td>
<td></td>
<td><blockquote>
<p>Консоль управления службами IIS</p>
</blockquote></td>
</tr>
</tbody>
</table>

<img src="../docs/assets/images/com18.3.1/install/media/image130.jpeg" style="width:5.48543in;height:3.90833in" />

> <span id="_bookmark104" class="anchor"></span>Рисунок 6.32 – Окно с разделом «Выбор служб ролей»

<img src="../docs/assets/images/com18.3.1/install/media/image131.jpeg" style="width:5.48667in;height:3.90833in" />

> Рисунок 6.33 – Окно с разделом «Службы ролей» (Инициализация приложений)

9)  В разделе «Подтверждение установки компонентов» проверить настроенные параметры и начать установку веб-сервера, нажав «Установить» (рисунок [6.34](#_bookmark105)).

<img src="../docs/assets/images/com18.3.1/install/media/image132.jpeg" style="width:5.48544in;height:3.90833in" />

> <span id="_bookmark105" class="anchor"></span>Рисунок 6.34 – Окно с разделом «Подтверждение установки компонентов»

10) В разделе «Ход установки» показан результат установки компонента. После успешной установки нажать «Закрыть» (рисунок [6.35](#_bookmark106)).

> <img src="../docs/assets/images/com18.3.1/install/media/image133.jpeg" style="width:5.40356in;height:3.85in" />
>
> <span id="_bookmark106" class="anchor"></span>Рисунок 6.35 – Окно с разделом «Ход установки»

## Проверка установленного веб-сервера (IIS)

> Для проверки установки веб-сервера (IIS) необходимо в веб-браузере перейти по ссылке [<u>http://localhost</u>.](http://localhost/)
>
> На рисунке [6.36](#_bookmark108) показана страница с корректной установкой веб-сервера.

<img src="../docs/assets/images/com18.3.1/install/media/image134.jpeg" style="width:5.43695in;height:2.92875in" />

> <span id="_bookmark108" class="anchor"></span>Рисунок 6.36 – Тестовая страница веб-сервера (IIS)
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />Функционирование компонента JDS под стандартным веб-браузером Internet Explorer не поддерживается.

## Установка дополнительных компонент

> Для корректной работы компонента JDS требуется установить дополнительную утилиту ASP.NET Core 6.0 Runtime (v6.0.1) – Windows Hosting Bundle Installer.
>
> Утилита загружается с официального сайта производителя.
>
> На странице загрузки перейти в раздел ASP.NET Core 6.0 Runtime 6.0.1.
>
> <span id="_bookmark110" class="anchor"></span>Рисунок 6.37 – Вид страницы загрузки и гиперссылки
>
> Затем необходимо скачать по гиперссылке дистрибутив с именем dotnet-hosting-6.0.1-win как показано на рисунке [6.37](#_bookmark110).
>
> Так же должен быть установлен framework 4.8.
>
> Установив дистрибутив, перезагрузить веб-сервер IIS, кликнув пиктограмму
>
> «Перезапустить», как представлено на рисунке [6.38](#_bookmark111).
>
> <span id="_bookmark111" class="anchor"></span>Рисунок 6.38 – Пиктограмма перезапуска IIS
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />Версии утилиты ASP.NET Core 6.0 Runtime выше указанной, компонентом JDS не поддерживается.

## Запуск инсталлятора JDS

> Функциональные возможности инсталлятора JDS позволяют автоматизировать процесс конфигурирования веб-сервера (IIS), создания сайта и служебной БД.
>
> По введенным параметрам инсталлятор автоматически:

- сконфигурирует веб-сервер (IIS);

- создаст сертификат локального компьютера, для поддержания протокола HTTPS, добавит его в доверенные;

- создаст служебную БД «jdsdb» и пользователя «jds».

> Для начала установки необходимо запустить инсталлятор jds-\*.\*.\*\*-win-x64-release.msi.
>
> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Наименование пакета может отличаться в зависимости от поставляемой версии компонента.
>
> Откроется приветственное окно, в котором для продолжения установки нажать
>
> «Далее».

<img src="../docs/assets/images/com18.3.1/install/media/image137.jpeg" style="width:3.91913in;height:3.06375in" />

> Рисунок 6.39 – Приветственное окно инсталлятора
>
> В следующем окне необходимо ознакомиться с лицензионным соглашением и, в случае согласия, выбрать вариант «Я принимаю условия лицензионного соглашения» и нажать «Далее» для продолжения установки.
>
> Рисунок 6.40 – Окно «Лицензионное соглашение»
>
> В следующем окне проверить по предлагаемому списку выполнение подготовительных действий. Убедившись, установить флажок в поле «Все необходимые компоненты предустановлены и настроены» и продолжить установку.
>
> Рисунок 6.41 – Окно «Требование к установке»
>
> В окне «Настройки подключения» инсталлятор выведет в полях значения по умолчанию. Выводятся параметры по двум типам:

- настройки для подключения к СУБД;

- настройки JDS.

> В настройках для подключения к СУБД подразумевается, что компонент JDS устанавливается на ЭВМ, на которой установлена СУБД «Jatoba». Если СУБД установлена отдельно, то в поле «Сервер» указывается адрес удаленного сервера:

- порт подключения установлен по умолчанию – 5432;

- база данных для подключения по умолчанию установлена – postgres;

- в поле «Пароль» указать действующий пароль суперпользователя.

> Таким образом формируется область настройки подключения.
>
> Рисунок 6.42 – Окно «Настройки подключения» В настройках JDS указываются:

- база данных – по умолчанию установлено имя «jdsdb»;

- пользователь СУБД – по умолчанию установлено имя «jds»;

- пароль пользователя «jds».

> В следующем окне «Настройка сайта» инсталлятор выведет в полях значения:

- имя пула приложений – по умолчанию установлено значение «JDSAppPool»;

- имя пользователя – «jds_app». Пользователь будет создан автоматически;

- пароль пользователя «»;

- имя сайта – по умолчанию установлено значение «JDS Web Site»;

- протокол;

- IP-адрес;

- порт;

- SSL-сертификат.

> Поля «Имя пула приложений» и «Имя сайта» редактируемые и можно указать желаемые значения.
>
> Рисунок 6.43 – Окно «Настройки сайта»
>
> Данные значения пропишутся в основных настройках сайта веб-сервера (IIS).
>
> <img src="../docs/assets/images/com18.3.1/install/media/image142.jpeg" style="width:7.04154in;height:3.81781in" />
>
> <span id="_bookmark113" class="anchor"></span>Рисунок 6.44 – Основные настройки веб-сайта
>
> Поле «Протокол» выполнено в виде выпадающего списка, в котором можно выбрать одно из двух значений:

- http;

- https.

<img src="../docs/assets/images/com18.3.1/install/media/image143.png" style="width:3.97043in;height:3.10406in" />

> Рисунок 6.45 – Выпадающий список поля «Протокол»
>
> При выборе протокола «https» доступен выпадающий список поля SSL-сертификат.
>
> Поле «IP-адрес» выполнено в виде выпадающего списка, в котором можно выбрать одно из двух значений:

- 127.0.0.1;

- «Все неназначенные».

> Меню «IP-адрес» позволяет выбрать сетевой интерфейс, который сервер будет прослушивать на предмет запросов.
>
> При выборе параметра «Все неназначенные» веб-сервер будет прослушивать все интерфейсы за исключением тех, где другой сайт должен обслуживаться через этот же порт TCP.

<img src="../docs/assets/images/com18.3.1/install/media/image144.png" style="width:3.91876in;height:3.06375in" />

> Рисунок 6.46 – Выпадающий список поля «IP-адрес»
>
> В поле «Порт» установлено значение – 8443, которое можно изменить на требуемое значение.
>
> В поле «Порт» можно указать порт TCP, на котором веб-сервер будет прослушивать запросы клиентов. В общем случае каждый сайт должен обслуживаться через уникальный порт, поэтому во избежание конфликтов с подключенным к порту 80 веб-сайтом по умолчанию, указан порт 8443.
>
> Поле «SSL-сертификат» выполнено в виде выпадающего списка, в котором возможно выбрать одно из двух значений:

- без сертификата (будет добавлен вручную в настройках сайта);

- сгенерировать и привязать самозаверенный сертификат.

> Вручную добавляется сертификат в привязке сайта веб-сервера, как показано на рисунке [6.49](#_bookmark114).
>
> При выборе пункта «Сгенерировать и привязать самозаверенный сертификат» инсталлятор самостоятельно сгенерирует сертификат, установит доверительные отношения и поместит его в хранилище «локальный компьютер».

<img src="../docs/assets/images/com18.3.1/install/media/image145.png" style="width:3.97088in;height:3.10406in" />

> Рисунок 6.47 – Выпадающий список поля «SSL-сертификат» Проверить установленный сертификат можно через консоль MMC.
>
> Рисунок 6.48 – Консоль MMC Сформированный сертификат будет действителен до 01.01.2040 г.
>
> Установленные параметры в окне «Настройки сайта» пропишутся в привязке сайта веб-сервера.
>
> <img src="../docs/assets/images/com18.3.1/install/media/image147.jpeg" style="width:7.04741in;height:3.82375in" />
>
> <span id="_bookmark114" class="anchor"></span>Рисунок 6.49 – Параметры в привязке сайта веб-сервера (IIS)
>
> Следующим откроется окно настройки «Конечная папка». В поле указывается директория для установки как показано на рисунке [6.44.](#_bookmark113) По умолчанию установлен каталог:
>
> C:\Program Files\GIS\JDS
>
> При необходимости, значение по умолчанию можно изменить.

<img src="../docs/assets/images/com18.3.1/install/media/image148.png" style="width:3.92051in;height:3.06375in" />

> Рисунок 6.50 – Окно «Конечная папка»
>
> В окне «Установка JDS Doctor» указывается директория для установки одноименной службы, как показано на рисунке [6.51](#_bookmark115). По умолчанию установлен каталог:
>
> C:\Program Files\GIS\JDS.Doctor\\
>
> При необходимости, значение по умолчанию можно изменить.

<img src="../docs/assets/images/com18.3.1/install/media/image149.png" style="width:3.91889in;height:3.06375in" />

> <span id="_bookmark115" class="anchor"></span>Рисунок 6.51 – Окно «Установка JDS Doctor»
>
> Служба требуется для работы подраздела JDS «Проблемы и решения» (Problems & Solutions).
>
> В результате инсталлятор установит службу в ОС.
>
> Рисунок 6.52 – Установленная служба «JDS Doctor» в списке служб ОС В окне «Все готово к установке Jatoba Data Safe» выбрать «Установить».
>
> <img src="../docs/assets/images/com18.3.1/install/media/image151.png" style="width:3.97032in;height:3.10406in" />
>
> Рисунок 6.53 – Окно «Все готово к установке Jatoba Data Safe»
>
> По завершению установки будет выведено диалоговое окно завершения установки.

<img src="../docs/assets/images/com18.3.1/install/media/image152.jpeg" style="width:3.97032in;height:3.10406in" />

> Рисунок 6.54 – Окно завершения установки
>
> Инсталлятор добавит компонент в меню «Пуск» и на рабочем столе будет создан ярлык.

<img src="../docs/assets/images/com18.3.1/install/media/image153.png" style="width:0.85418in;height:0.95833in" />

> Рисунок 6.55 – Ярлык JDS на рабочем столе

## Главная страница

> После успешной инсталляции по адресу: [<u>http://localhost:8483/</u>,](http://localhost:8483/) станет доступной станица веб-сайта JDS (рисунок [6.56](#_bookmark117)).
>
> <span id="_bookmark117" class="anchor"></span>Рисунок 6.56 – Главная страница На главной странице (рисунке [6.57](#_bookmark118)) требуется:

- указать имя пользователя;

- указать пароль пользователя.

> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />По умолчанию, для доступа к JDS используется техническая учетная запись с именем admin.
>
> Пароль устанавливается командой в терминале ОС:
>
> "c:\Program Files\GIS\JDS\JDS.WebApi.exe" --setadmin username password

Далее следует перезапустить IIS в консоли IIS или командой:

> iisreset /restart
>
> На главной странице имеется функциональная возможность выбора языка интерфейса. Доступны три языка:

- русский;

- английский;

- китайский.

> Выбрать язык интерфейса можно в выпадающем меню, как обозначено под № 3 на рисунке [6.57](#_bookmark118).
>
> <img src="../docs/assets/images/com18.3.1/install/media/image155.png" style="width:2.54272in;height:5.17818in" />Имя пользователя
>
> 1
>
> Пароль пользователя
>
> 2
>
> Выбор языка интерфейса
>
> 3
>
> <span id="_bookmark118" class="anchor"></span>Рисунок 6.57 – Структура стартового окна

## Удаление и восстановление компонента JDS

> Удаление компонента возможно через:

- раздел «Панель управления» средством «Программы и компоненты» операционной системы;

- запуск инсталлятора.

> Запустив инсталлятор будут доступны пиктограммы «Восстановить» и «Удалить».
>
> <img src="../docs/assets/images/com18.3.1/install/media/image157.png" style="width:3.91876in;height:3.06375in" />
>
> Рисунок 6.58 – Окно инсталлятора в режиме восстановления/удаления
>
> В режиме восстановления инсталлятор вернет значения страницы компонента JDS веб-сервера (IIS), которые были установлены при первоначальной установке из сохраненных конфигурационных файлов.

## Установка компонента JDS на ОС Windows вручную из архива

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Раздел актуален для несертифицированной (коммерческой) версии СУБД «Jatoba»
>
> Установка компонента вручную из архива требует аналогичных действий, описанных в пунктах документа:

- [6.5.1](#настройка-сервера-ос-windows-server-2016) «[Настройка сервера ОС Windows Server 2016](#настройка-сервера-ос-windows-server-2016)»;

- [6.5.2](#установка-роли-веб-сервера-iis) «[Установка роли веб-сервера (IIS)](#установка-роли-веб-сервера-iis)»;

- [6.5.3](#проверка-установленного-веб-сервера-iis) «[Проверка установленного веб-сервера (IIS)](#проверка-установленного-веб-сервера-iis)»;

- [6.5.4](#установка-дополнительных-компонент) «[Установка дополнительных компонент](#установка-дополнительных-компонент)».

## Начальная настройка служебной СУБД «Jatoba»

> Компоненту JDS требуется хранить различного рода информацию в своей служебной СУБД или БД. Для обеспечения безопасности такого архитектурного решения используется СУБД «Jatoba».

Первым шагом создается роль «jds» командой в служебной СУБД JDS:

> CREATE ROLE jds NOSUPERUSER CREATEDB NOCREATEROLE NOINHERIT LOGIN PASSWORD 'sql';
>
> При создании роли не рекомендуется использовать символы верхнего регистра. Это техническая учетная запись, которой требуются два атрибута:

- CREATEDB – право создания БД;

- LOGIN – право входа.

<img src="../docs/assets/images/com18.3.1/install/media/image158.png" style="width:7.03911in;height:1.30812in" />

> Рисунок 6.59 – Назначение атрибутов роли «jds»

## Настройка IIS

> Следующим этапом необходимо настроить веб-сервер (IIS). Для этого нужно проделать следующие шаги:

1)  Перейти по пути «Панель управления» → «Администрирование» →

> «Диспетчер служб IIS» (рисунок [6.60](#_bookmark123)).
>
> <span id="_bookmark123" class="anchor"></span>Рисунок 6.60 – Путь к диспетчеру служб IIS

2)  Открыть начальную страницу «Диспетчера служб IIS» (рисунок [6.61](#_bookmark124)).

> <img src="../docs/assets/images/com18.3.1/install/media/image160.jpeg" style="width:6.73407in;height:3.58312in" />
>
> <span id="_bookmark124" class="anchor"></span>[6.62](#_bookmark125)).
>
> Рисунок 6.61 – Начальная страница IIS

3)  Выбрать текущий сервер, в данном случае – LAN-COMPUTER-NA (рисунок

> <span id="_bookmark125" class="anchor"></span>Рисунок 6.62 – Выбор текущего сервера

4)  Выбрать вкладку «Пулы приложений» и через контекстное меню выполнить команду «Добавить пул приложений» (рисунок [6.63](#_bookmark126)).

> <img src="../docs/assets/images/com18.3.1/install/media/image162.png" style="width:6.48826in;height:3.46125in" />
>
> <span id="_bookmark126" class="anchor"></span>Рисунок 6.63 – Команда «Добавить пул приложений»

5)  В открывшимся окне ввести значения (рисунок [6.64](#_bookmark127)) и нажать «ОК»:

    - имя пула (в данном случае имя – «DataSafeUpPull»);

    - параметр «Версия среды CLR .NET» – «Без управляемого кода»;

    - параметр «Режим управляемого конвейера» – «Встроенный».

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.2494in" />Флажок напротив поля «Немедленный запуск пула приложений» оставить без изменений.

<img src="../docs/assets/images/com18.3.1/install/media/image163.png" style="width:3.14811in;height:2.9375in" />

> <span id="_bookmark127" class="anchor"></span>Рисунок 6.64 – Параметры пула

6)  В окне «Пулы приложений» появится созданный пул (рисунок [6.65](#_bookmark128)).

> <span id="_bookmark128" class="anchor"></span>Рисунок 6.65 – Добавленный пул приложений

## Создание каталогов

> Для дальнейшей установки компонента JDS требуется размещение файлов с дистрибутивного диска в целевой каталог, для этого следует:

1)  <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.24964in" /> Используя средства ОС, создать папку С:\WebSites\DataSafeSite; Размещение каталога на диске «С» не обязательно.

2)  В некоторых конфигурациях потребуется предоставить к папке полный доступ для группы ОС «IIS_Users» (IIS-IUSRS).

## Копирование компонента JDS

> На дистрибутивном диске находится архив DataSafeSite-ХХХХ-ХХ-ХХ.7z в формате
>
> «7z».
>
> Имя архива может меняться в зависимости от версии компонента. Первые 4 цифры
>
> означают год, вторые две цифры – месяц и последние две цифры означают день сборки компонента.
>
> Содержимое архива следует распаковать и скопировать в целевой каталог С:\WebSites\DataSafeSite.

## Создание сайта

> Поскольку путь расположения сайта на компьютере создан и содержимое сайта хранится в специальном каталоге, можно создать сайт JDS.
>
> Для создания сайта JDS требуется проделать следующие действия:

1)  Открыть «Диспетчер служб IIS» (как описано в п. [6.6.2](#настройка-iis)), перейти на вкладку

> «Сайты» и через контекстное меню выполнить команду «Добавить веб-сайт» (рисунок [6.66](#_bookmark132)).
>
> <span id="_bookmark132" class="anchor"></span>Рисунок 6.66 – Команда «Добавить веб-сайт»

2)  В открывшимся окне «Добавить веб-сайт» заполнить обязательные параметры и нажать «ОК» (рисунок [6.68](#_bookmark135)):

    - <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" /> имя сайта – в данном случае «Data Safe Web Site»; Допускается писать имя сайта с пробелами.

    - пул приложений – нажать на кнопку «Выбрать», в открывшемся окне «Выбор пула приложений» из выпадающего списка выбрать пул, созданный в разделе [6.6.2](#настройка-iis) –

> «DataSafeUpPull» (рисунок [6.67](#_bookmark133));
>
> <span id="_bookmark133" class="anchor"></span>Рисунок 6.67 – Окно «Выбор пула приложений»

- физический путь – каталог, в котором находится содержимое сайта JDS. Копирование содержимого сайта описано в разделе [6.6.4](#копирование-компонента-jds);

- раздел «Привязка».

> Параметры раздела «Привязка» допустимо указать в соответствии с таблицей [6.3](#_bookmark134).
>
> <span id="_bookmark134" class="anchor"></span>Таблица 6.3 – Значения параметров в разделе «Привязка»

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 19%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Параметр</strong></p>
</blockquote></th>
<th style="text-align: center;"><strong>Значение параметра</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>Тип</p>
</blockquote></td>
<td><blockquote>
<p>http</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>IP-адрес</p>
</blockquote></td>
<td><blockquote>
<p>Все неназначенные</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>Порт</p>
</blockquote></td>
<td><blockquote>
<p>8080</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>Имя узла</p>
</blockquote></td>
<td><blockquote>
<p>Допустимо не задавать имя узла</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <span id="_bookmark135" class="anchor"></span>Рисунок 6.68 – Окно «Добавить веб-сайт» Создание сайта «Data Safe Web Site» завершено (рисунок [6.69](#_bookmark136)).
>
> <span id="_bookmark136" class="anchor"></span>Рисунок 6.69 – Сайт «Data Safe Web Site»

## Дополнительные параметры сайта

> После создания и сохранения сайта необходимо запустить настройку его дополнительных параметров. Для этого нужно проделать следующие шаги:

1)  Перейти по пути «Панель управления» → «Администрирование» →

> «Диспетчер служб IIS».

2)  В правом нижнем углу окна выбрать «Дополнительные параметры» (рисунок

> [6.70](#_bookmark138)).
>
> <span id="_bookmark138" class="anchor"></span>Рисунок 6.70 – Диспетчер служб IIS

3)  В окне «Дополнительные параметры» в строке «Предварительная установка включена» (Preload Enabled) из выпадающего списка установить параметр: «True» (рисунок [6.71](#_bookmark139)).

> <span id="_bookmark139" class="anchor"></span>Рисунок 6.71 – Окно «Дополнительные параметры»

## Создание служебной БД «jdsdb»

> После успешного запуска сайта компонента JDS автоматически создается база данных «jdsdb».
>
> Дополнительных действий по установке БД не требуется.

## Установка службы «JDS Doctor»

> Установка службы «JDS Doctor» для ОС Windows описана в Приложении [8,](#приложение-8) настоящего документа.

# СООБЩЕНИЯ ОБ ОШИБКАХ

## Ошибка установки открытого ключа репозитория

> Ошибка установки открытого ключа репозитория может возникнуть на ОС Debian 11.

<img src="../docs/assets/images/com18.3.1/install/media/image171.png" style="width:7.07864in;height:0.60365in" />

> gnug,gnupg2 and gnupg1 do not seem to be installed, but one of them is required for this operation
>
> Рисунок 7.1 – Ошибка установки открытого ключа на Debian 11
>
> Для устранения возникшей ошибки, следует установить пакет «gnupg» при помощи команды:
>
> apt-get install gnupg
>
> После чего продолжить установку СУБД.

## Ошибка настройки учетной записи системного пользователя ОС «postgres»

> Ошибка возникает на этапе создания пользователя ОС «postgres» при инсталляции СУБД «Jatoba» на ОС семейства Microsoft Windows.

<img src="../docs/assets/images/com18.3.1/install/media/image172.png" style="width:3.96696in;height:3.10333in" />

> Рисунок 7.2 – Ошибка настройки учетной записи системного пользователя
>
> Для устранения возникшей ошибки требуется назначить пароль, соответствующий требованиям.

## Ошибка настройки учетной записи пользователя СУБД «postgres»

> Ошибка возникает на этапе создания пользователя СУБД «postgres» при инсталляции СУБД «Jatoba» на ОС семейства Microsoft Windows.

<img src="../docs/assets/images/com18.3.1/install/media/image173.png" style="width:4.01184in;height:3.15219in" />

> Рисунок 7.3 – Ошибка настройки учетной записи пользователя СУБД «postgres»
>
> Для устранения возникшей ошибки требуется назначить пароль, соответствующий требованиям.

## Ошибка повторной установки компонента «securityprofile»

> После удаления компонента «securityprofile» удаляются все данные и зависимые объекты компонента.
>
> При попытке повторной установки может возникнуть ошибка.
>
> Избежать её возможно перезагрузкой СУБД и повторной установкой расширения
>
> «securityprofile».

## Ошибка в имени локального репозитория

> В случае, когда установка СУБД выполняется в GNU/Linux установочным скриптом
>
> «jatoba.sh» и данный скрипт не нашел директорию localrepo – будет выведено сообщение формата как показано на рис. [7.4](#_bookmark148).
>
> <span id="_bookmark148" class="anchor"></span>Рисунок 7.4 – Сообщение скрипта
>
> Если переменной окружения задать корректный путь до директории локального репозитория – установка будет успешно выполнена.
>
> Однако рекомендуется устанавливать СУБД «Jatoba» способами, описанными в настоящем документе.

# ПРИЛОЖЕНИЕ 1

> Структура каталога дистрибутива для всех поддерживаемых ОС GNU/Linux приведена в таблице [П1](#_bookmark150).
>
> <span id="_bookmark150" class="anchor"></span>Таблица П1 – Структура каталога дистрибутива для ОС GNU/Linux

<table>
<colgroup>
<col style="width: 48%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>ОС</strong></th>
<th><blockquote>
<p><strong>Состав файлов и директорий репозитория</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Astra Linux 1.7 Special Edition Смоленск Astra Linux 1.8</p>
<p>Debian 11</p>
<p>Debian 12</p>
<p>Ubuntu 20.04</p>
<p>Ubuntu 22.04</p>
<p>Ubuntu 24.04</p>
<p>ОСнова 2.0</p>
</blockquote></td>
<td><ul>
<li><p>каталог &lt;pool&gt;;</p></li>
<li><p>каталог &lt;dists&gt;;</p></li>
<li><p>файл ключа &lt;DEB-GPG-KEY-Jatoba&gt;</p></li>
</ul></td>
</tr>
<tr>
<td><blockquote>
<p>РЕД ОС 7.3 Муром Oracle Linux 8.4</p>
</blockquote></td>
<td><ul>
<li><p>каталог &lt;packages&gt;;</p></li>
<li><p>каталог &lt;repodata&gt;;</p></li>
<li><p>файл ключа &lt;RPM-GPG-KEY-Jatoba&gt;</p></li>
</ul></td>
</tr>
<tr>
<td><blockquote>
<p>Альт 8 СП</p>
<p>Альт 9 Server</p>
<p>Альт 10 Server</p>
</blockquote></td>
<td><ul>
<li><p>каталог &lt;x86_64&gt;;</p></li>
<li><p>файл &lt;RPM-GPG-KEY-Jatoba&gt;</p></li>
</ul></td>
</tr>
</tbody>
</table>

> Описание локального репозитория для каждой ОС различны. В таблице [П2](#_bookmark151) приведены соответствия между ОС и локальными репозиториями.
>
> <span id="_bookmark151" class="anchor"></span>Таблица П2 – Соответствия ОС и репозитория

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Alt Linux</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><u>Файл репозитория:</u></p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
<p><u>Описание локального репозитория:</u></p>
<p>rpm file:///localrepo x86_64 classic</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>РЕД ОС 7.3 Муром, Oracle Linux 8.4</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><u>Файл репозитория:</u></p>
<p>/etc/yum.repos.d/jatoba-&lt;ver&gt;.repo</p>
<p><u>Описание локального репозитория:</u></p>
<p>[jatoba-4]</p>
<p>name=Jatoba 4 Official Repository baseurl=file:///localrepo enabled=1</p>
<p>gpgcheck=1</p>
<p>gpgkey=file:///localerepo/RPM-GPG-KEY-Jatoba</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>Astra Linux 1.7 Special Edition Смоленск, Debian 11, Ubuntu 20.04, Ubuntu22.04, ОСнова 2.0</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><u>Файл репозитория:</u></p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
<p><u>Описание локального репозитория:</u></p>
<p>deb file:///localrepo stable non-free</p>
</blockquote></td>
</tr>
</tbody>
</table>

# ПРИЛОЖЕНИЕ 2

> **Пример установки и удаления СУБД «Jatoba» из локального репозитория для ОС Ubuntu 20.04**

## Установка СУБД «Jatoba» из локального репозитория в ОС Ubuntu

> Установка СУБД «Jatoba» из локального репозитория для ОС Ubuntu проводится в следующем порядке:

1)  В терминале войти в режим суперпользователя, выполнив команду:

> sudo su

2)  Если команды sudo не существует – установить:

> su -l
>
> apt-get install sudo -y

3)  Выполнить обновление системы:

<img src="../docs/assets/images/com18.3.1/install/media/image175.png" style="width:7.11573in;height:2.98375in" />

> sudo apt update && sudo apt upgrade –y sudo apt -s dist-upgrade
>
> sudo apt dist-upgrade
>
> Рисунок 2.1 – Обновление системы

4)  Создать папку localrepo в корневом каталоге:

> mkdir /localrepo

5)  В созданную папку скопировать:

<img src="../docs/assets/images/com18.3.1/install/media/image176.png" style="width:3.47683in;height:1.085in" />

- каталог \<pool\>

- каталог \<dist\>

- файл \<DEB-GPG-KEY-Jatoba\>

> Рисунок 2.2 – Структура каталога «localrepo»

6)  Установить открытый ключ репозитория:

<img src="../docs/assets/images/com18.3.1/install/media/image177.png" style="width:7.11751in;height:1.085in" />

> apt-key add /localrepo/DEB-GPG-KEY-Jatoba
>
> Рисунок 2.3 – Установка открытого ключа репозитория
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />Для более новых версий ОС GNU/Linux, основанных на Debian (Astra Linux 1.8, Debian 12, Ubuntu 24.04 и других), рекомендуется добавлять ключ репозитория следующим образом.
>
> Скопировать ключ репозитория:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> Добавить описание нового репозитория в список:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt;</p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> Здесь jatoba-\<ver\> - версия устанавливаемой СУБД «Jatoba». Затем выполнить пункт 9) из данного подраздела.

7)  Добавить описание локального репозитория в систему:

> nano /etc/apt/sources.list.d/jatoba-\<ver\>.list

8)  Вставить в файл следующее содержимое и сохранить:

<img src="../docs/assets/images/com18.3.1/install/media/image178.png" style="width:7.11726in;height:1.13344in" />

> deb file:///localrepo stable non-free
>
> Рисунок 2.4 – Содержание файла «jatoba-4.list»

9)  Проиндексировать обновленное состояние репозитория:

<img src="../docs/assets/images/com18.3.1/install/media/image179.png" style="width:7.1174in;height:2.635in" />

> apt-get update
>
> Рисунок 2.5 – Индексация репозитория 10)Установить СУБД «Jatoba» при помощи команды:
>
> apt-get install jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server
>
> <img src="../docs/assets/images/com18.3.1/install/media/image180.png" style="width:6.719in;height:4.41344in" />
>
> Рисунок 2.6 – Установка пакетов

11) Убедиться, что отсутствуют ошибки зависимостей:

> for f in \$(LANG=C find /usr/jatoba-\<версия\> -type f -exec file
>
> {} \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print
>
> \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

12) Перейти в директорию исполняемых файлов СУБД:

<img src="../docs/assets/images/com18.3.1/install/media/image181.png" style="width:6.70992in;height:0.87906in" />

> cd /usr/jatoba-\<ver\>/bin
>
> Рисунок 2.7 – Переход в каталог

13) Инициализировать каталог данных СУБД при помощи команды:

> ./jatoba-setup initdb jatoba-\<ver\>
>
> <img src="../docs/assets/images/com18.3.1/install/media/image182.png" style="width:7.17069in;height:1.26906in" />
>
> Рисунок 2.8 – Инициализация СУБД

14) Добавить сервис в список автозапуска:

<img src="../docs/assets/images/com18.3.1/install/media/image183.png" style="width:7.00913in;height:1.24177in" />

> systemctl enable jatoba-\<ver\>
>
> Рисунок 2.9 – Добавление сервиса jatoba-4 в автозагрузку ОС 15)Запустить службу:

<img src="../docs/assets/images/com18.3.1/install/media/image184.png" style="width:7.0384in;height:0.8626in" />

> systemctl start jatoba-\<ver\>
>
> Рисунок 2.10 – Запуск службы jatoba-4 16)Проверить статус службы:
>
> systemctl status jatoba-\<ver\>
>
> <img src="../docs/assets/images/com18.3.1/install/media/image185.png" style="width:6.73343in;height:3.76094in" />
>
> Рисунок 2.11 – Проверка статуса службы «jatoba-4» 17)Установить пароль для системного пользователя ОС «postgres»:

<img src="../docs/assets/images/com18.3.1/install/media/image186.png" style="width:7.06565in;height:1.4124in" />

> sudo passwd postgres
>
> Рисунок 2.12 – Установка пароля для пользователя СУБД 18)Авторизоваться в psql, для этого нажать сочетание клавиш:
>
> CTRL + D
>
> затем войти в psql:
>
> su postgres psql
>
> 19)Установить пароль для пользователя СУБД «postgres»:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3"><blockquote>
<p>\password</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>№ изменения:</p>
</blockquote></td>
<td><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></td>
<td><blockquote>
<p>Дата внесения изм:</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <img src="../docs/assets/images/com18.3.1/install/media/image187.png" style="width:6.99808in;height:2.41719in" />
>
> Рисунок 2.13 – Установка пароля для пользователя ОС На этом этапе установка СУБД окончена.

## Удаление СУБД «Jatoba» из локального репозитория в ОС Ubuntu

> Удаление СУБД «Jatoba» из локального репозитория в ОС Ubuntu 20.04 проводится в следующем порядке:

1)  Вывести список служб СУБД «Jatoba»:

<img src="../docs/assets/images/com18.3.1/install/media/image188.png" style="width:7.10489in;height:1.64687in" />

> systemctl list-unit-files 'ja\*'
>
> Рисунок 2.14 – Список служб
>
> Команда сформирована по маске из первых букв названий служб. Из полученного списка очевидно, что установлена только СУБД.
>
> Перечень служб, используемых при эксплуатации СУБД, приведен в таблице [П 2.1](#_bookmark155). Таблица П 2.1 – Перечень служб используемых СУБД

<table>
<colgroup>
<col style="width: 66%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Наименование компонента</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Наименование службы</strong></p>
<p><strong>(демона)</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>СУБД «Jatoba»</p>
</blockquote></td>
<td><blockquote>
<p>jatoba-&lt;ver&gt;</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Централизованный сбор записей событий в СУБД.</p>
</blockquote></td>
<td><blockquote>
<p>jalog_server</p>
</blockquote></td>
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
<th><blockquote>
<p><strong>Наименование компонента</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Наименование службы</strong></p>
<p><strong>(демона)</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>Компонент «ja_Log»</p>
</blockquote></td>
<td><blockquote>
<p>jalog_agent</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Управление режимом работы узлов кластера</p>
<p>Компонент «jaDog»</p>
</blockquote></td>
<td><blockquote>
<p>jadog</p>
</blockquote></td>
</tr>
</tbody>
</table>

2)  Удалить службу из автозагрузки ОС:

<img src="../docs/assets/images/com18.3.1/install/media/image189.png" style="width:7.10477in;height:1.09469in" />

> systemctl disable jatoba-\<ver\>
>
> Рисунок 2.15 – Удаление службы «jatoba-4» из автозагрузки
>
> Если были установлены компоненты СУБД, приведенные в таблице [П 2.1](#_bookmark155), то службы компонентов удаляются командой:
>
> systemctl disable \<имя службы\>

3)  Проверить статус отключенной из автозагрузки службы:

<img src="../docs/assets/images/com18.3.1/install/media/image190.png" style="width:7.10489in;height:2.14094in" />

> systemctl status jatoba-\<ver\>
>
> Рисунок 2.16 – Проверка статуса службы Служба должна иметь статус «disabled».

4)  Удалить все ненужные пакеты, первоначально установленные по зависимостям:

> sudo apt autoremove jatoba\<ver\>-\*

<img src="../docs/assets/images/com18.3.1/install/media/image191.png" style="width:7.1049in;height:1.6275in" />

> Рисунок 2.17 – Удаление пакетов по зависимостям
>
> Подтвердить проведение операции и в результате будет выведен список удаленных пакетов.
>
> При удалении пакетов будут удалены все связанные с ними службы.

5)  Вывести список служб СУБД «Jatoba»:

<img src="../docs/assets/images/com18.3.1/install/media/image192.png" style="width:7.10489in;height:1.28844in" />

> systemctl list-unit-files 'ja\*'
>
> Рисунок 2.18 – Список служб по маске «ja\*» Список служб должен быть пуст.

6)  Просмотреть список пользователей командой:

<img src="../docs/assets/images/com18.3.1/install/media/image193.png" style="width:7.10492in;height:1.24969in" />

> cat /etc/passwd
>
> Рисунок 2.19 – Список пользователей

7)  Удалить пользователя «postgres» командой:

> userdel postgres

<img src="../docs/assets/images/com18.3.1/install/media/image194.png" style="width:7.10475in;height:0.93in" />

> Рисунок 2.20 – Удаление пользователя «postgres»

8)  Удалить каталоги СУБД командами:

<img src="../docs/assets/images/com18.3.1/install/media/image195.png" style="width:7.10497in;height:1.11406in" />

> rm -rf /usr/jatoba-\<ver\> rm -rf /var/lib/jatoba
>
> Рисунок 2.21 – Удаление каталогов СУБД

9)  Удалить каталог репозитория:

<img src="../docs/assets/images/com18.3.1/install/media/image196.png" style="width:7.10477in;height:0.92031in" />

> rm -rf /localrepo
>
> Рисунок 2.22 – Удаление каталога репозитория

10) Просмотреть список репозиториев ОС:

> sudo grep -rhE ^deb /etc/apt/sources.list\*
>
> <img src="../docs/assets/images/com18.3.1/install/media/image197.png" style="width:7.11059in;height:3.00312in" />
>
> Рисунок 2.23 – Просмотр списка репозиториев ОС

В списке репозиториев будет присутствовать запись:

> deb file:///localrepo stable non-free

11) Удалить описание локального репозитория:

<img src="../docs/assets/images/com18.3.1/install/media/image198.png" style="width:7.11078in;height:0.93969in" />

> rm /etc/apt/sources.list.d/jatoba-\<ver\>.list
>
> Рисунок 2.24 – Удаление репозитория

12) Проиндексировать обновленное состояние репозитория:

<img src="../docs/assets/images/com18.3.1/install/media/image199.png" style="width:7.11057in;height:1.56937in" />

> apt-get update
>
> Рисунок 2.25 – Обновление репозитория

13) Просмотреть список репозиториев ОС:

<img src="../docs/assets/images/com18.3.1/install/media/image200.png" style="width:7.11055in;height:2.84812in" />

> sudo grep -rhE ^deb /etc/apt/sources.list\*
>
> Рисунок 2.26 – Просмотр списка репозиториев ОС после обновления В списке репозиториев будет отсутствовать запись:
>
> deb file:///localrepo stable non-free
>
> На этом шаге удаление СУБД закончено.

# ПРИЛОЖЕНИЕ 3

> **Пример установки и удаления СУБД «Jatoba» из локального репозитория для РЕД ОС 7.3 Муром**

## Установка СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром

> Установка СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром проводится в следующем порядке:

1)  В терминале войти в режим суперпользователя, выполнив команду:

> sudo su
>
> Рисунок 3.1 – Вход в режим суперпользователя

2)  Если команды sudo не существует, то установить командой:

> yum install sudo -y

3)  Выполнить обновление системы; Допустимо использовать команду:

> dnf update –y
>
> Рисунок 3.2 – Обновление системы командой «dnf» Или команду:
>
> yum update –y
>
> Рисунок 3.3 – Обновление системы командой «yum»

4)  Создать папку localrepo в корневом каталоге:

> mkdir /localrepo
>
> Рисунок 3.4 – Создание каталога «localrepo»

5)  В созданную папку скопировать:

<img src="../docs/assets/images/com18.3.1/install/media/image205.png" style="width:3.38919in;height:1.175in" />

- каталог \<packages\>;

- каталог \<repodata\>;

- файл ключа \<RPM-GPG-KEY-Jatoba\>

> Рисунок 3.5 – Структура каталога «localrepo»
>
> Если директория с файлами находится в корневой директории пользователя, необходимо выполнить команду:
>
> cp -R /home/\<username\>/X.XX.X-XXXX/repo/. /localrepo/

6)  Установить открытый ключ репозитория:

> rpm --import /localrepo/RPM-GPG-KEY-Jatoba
>
> Рисунок 3.6 – Установка открытого ключа репозитория

7)  Добавить описание локального репозитория в систему:

> nano /etc/yum.repos.d/jatoba-\<ver\>.repo
>
> Рисунок 3.7 – Добавление локального репозитория в ОС

8)  Вставить в файл следующее содержимое и сохранить:

> \[jatoba-4\]
>
> name=Jatoba 4 Official Repository baseurl=file:///localrepo enabled=1
>
> gpgcheck=1
>
> gpgkey=file:///localerepo/RPM-GPG-KEY-Jatoba

9)  Проиндексировать обновленное состояние репозитория:

> yum makecache
>
> Рисунок 3.8 – Индексация репозитория

10) Установить СУБД «Jatoba» при помощи команды:

> yum install jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server
>
> Рисунок 3.9 – Установка пакетов Необходимо подтвердить продолжение установки.

11) Убедиться, что отсутствуют ошибки зависимостей:

> for f in \$(LANG=C find /usr/jatoba-\<ver\> -type f -exec file {}
>
> \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

12) Перейти в директорию исполняемых файлов СУБД:

> cd /usr/jatoba-\<ver\>/bin
>
> Рисунок 3.10 – Команда перехода в каталог

13) Инициализировать каталог данных СУБД при помощи команды:

> ./jatoba-setup initdb jatoba-\<ver\>
>
> Рисунок 3.11 – Инициализация СУБД

14) Добавить сервис в список автозапуска:

> systemctl enable jatoba-\<ver\>
>
> Рисунок 3.12 – Добавление сервиса jatoba-4 а автозагрузку ОС

15) Запустить службу:

> systemctl start jatoba-\<ver\>
>
> Рисунок 3.13 – Запуск службы jatoba-4

16) Проверить статус службы:

> systemctl status jatoba-\<ver\>
>
> Рисунок 3.14 – Проверка статуса службы

17) Авторизоваться в «psql» от имени и с правами пользователя «postgres» и установить для него пароль в СУБД:

> sudo su – postgres
>
> cd /usr/jatoba-\<ver\>/bin/ psql
>
> \password

Рисунок 3.15 – Установка пароля для пользователя СУБД «postgres»

18) Выйти в профиль пользователя «root» нажатием сочетания клавиш:

> CTRL + D

19) Установить пароль для системного пользователя ОС «postgres»:

> sudo passwd postgres
>
> Рисунок 3.16 – Установка пароля для пользователя ОС На этом этапе установка СУБД окончена.

## Удаление СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром

> Удаление СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром проводится в следующем порядке:

1)  Вывести список служб СУБД «Jatoba»:

> systemctl list-unit-files 'ja\*'
>
> Рисунок 3.17 – Список служб
>
> Команда сформирована по маске из первых букв названий служб. Из полученного списка очевидно, что установлена только СУБД.
>
> Перечень служб используемых при эксплуатации СУБД приведен в таблице [П 3.1](#_bookmark159)
>
> <span id="_bookmark159" class="anchor"></span>Таблица П 3.1 – Перечень служб используемых СУБД

<table>
<colgroup>
<col style="width: 66%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Наименование компонента</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Наименование службы</strong></p>
<p><strong>(демона)</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>СУБД «Jatoba»</p>
</blockquote></td>
<td><blockquote>
<p>jatoba-&lt;ver&gt;</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Централизованный сбор записей событий в СУБД.</p>
<p>Компонент «ja_Log»</p>
</blockquote></td>
<td><blockquote>
<p>jalog_server</p>
<p>jalog_agent</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Управление режимом работы узлов кластера</p>
<p>Компонент «jaDog»</p>
</blockquote></td>
<td><blockquote>
<p>jadog</p>
</blockquote></td>
</tr>
</tbody>
</table>

2)  Удалить службу из автозагрузки ОС:

> systemctl disable jatoba-\<ver\>
>
> Рисунок 3.18 – Удаление службы «jatoba-4» из автозагрузки
>
> Если были установлены компоненты СУБД приведенные в таблице [П 3.1](#_bookmark159), то службы компонентов удаляются командой:
>
> systemctl disable \<имя службы\>

3)  Проверить статус отключенной из автозагрузки службы:

> systemctl status jatoba-\<ver\>
>
> Рисунок 3.19 – Проверка статуса службы

Служба должна иметь статус «disabled».

4)  Удалить все ненужные пакеты, первоначально установленные по зависимостям:

> yum autoremove jatoba\<ver\>-\*
>
> Подтвердить проведение операции и в результате будет выведен список удаленных пакетов.
>
> При удалении пакетов будут удалены все связанные с ними службы.

5)  Вывести список служб СУБД «Jatoba»:

> systemctl list-unit-files 'ja\*'
>
> Рисунок 3.20 – Список служб по маске «ja\*» Список служб должен быть пуст.

6)  Просмотреть список пользователей:

> В терминале ОС список пользователей выводится командой:
>
> cat /etc/passwd
>
> Рисунок 3.21 – Список пользователей
>
> В ОС список пользователей выводится с помощью утилиты «Менеджер пользователей», отключив параметр «Скрыть системных пользователей и группы».
>
> Рисунок 3.22 – Вывод списка пользователей в утилите «Менеджер пользователей»

7)  Удалить пользователя «postgres» командой:

> userdel postgres
>
> Рисунок 3.23 – Удаление пользователя «postgres»
>
> В ОС удалить пользователя «postgres» возможно через утилиту «Менеджер пользователей», используя пиктограмму «Удалить».

8)  Удалить каталоги СУБД командами:

> rm -rf /usr/jatoba-\<ver\>
>
> rm -rf /var/lib/jatoba
>
> Рисунок 3.24 – Удаление каталогов СУБД

9)  Удалить каталог репозитория:

> rm -rf /localrepo
>
> Рисунок 3.25 – Удаление каталога репозитория

10) Просмотреть список репозиториев ОС:

> yum repolist
>
> Рисунок 3.26 – Список репозиториев

В выведенном списке будет присутствовать репозиторий «jatoba-4».

11) Просмотреть описание локального репозитория «jatoba-4» в ОС:

> cat /etc/yum.repos.d/jatoba-\<ver\>.repo
>
> Рисунок 3.27 – Вывод описания локального репозитория «jatoba-4»

12) Удалить описание локального репозитория «jatoba-4» в ОС:

> rm /etc/yum.repos.d/jatoba-\<ver\>.repo
>
> Рисунок 3.28 – Удаление локального репозитория Подтвердить команду удаления.

13) Просмотреть список репозиториев ОС:

> yum repolist
>
> В списке репозиториев ОС должен отсутствовать репозиторий «jatoba-\<ver\>». На этом шаге удаление СУБД закончено.

## ПРИЛОЖЕНИЕ 4

> **Пример установки и удаления СУБД «Jatoba» из локального репозитория для Альт 9** <span id="_bookmark161" class="anchor"></span>**Server**

## Установка СУБД «Jatoba» из локального репозитория в Альт 9 Server

> Установка СУБД «Jatoba» из локального репозитория в Альт 9 Server проводится в следующем порядке:

1)  В терминале MATE войти в режим суперпользователя, выполнив команду:

> sudo su
>
> Рисунок 4.1 – Вход в режим суперпользователя

2)  Выполнить обновление системы, последовательно выполняя команды:

> apt-get update
>
> apt-get dist-upgrade update-kernel
>
> apt-get clean reboot
>
> После обновления ОС установится пакет «sudo», убедиться в его установке можно командой:
>
> apt-get install sudo -y
>
> Рисунок 4.2 – Проверка установки пакета «sudo»

3)  Установить пакет «nano» командой:

> apt-get install nano
>
> Рисунок 4.3 – Установка пакета «nano»

4)  Создать папку localrepo в корневом каталоге:

> mkdir /localrepo
>
> Рисунок 4.4 – Создание каталога «localrepo»

5)  В созданную папку скопировать:

- каталог \<x86_64\>

- файл \<RPM-GPG-KEY-Jatoba\>

> <img src="../docs/assets/images/com18.3.1/install/media/image234.png" style="width:3.29803in;height:0.96979in" />
>
> Рисунок 4.5 - Структура каталога «localrepo»

6)  Установить открытый ключ репозитория:

> rpm --import /localrepo/RPM-GPG-KEY-Jatoba
>
> Рисунок 4.6 – Установка открытого ключа репозитория
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25138in;height:0.25075in" />Для более новых версий ОС GNU/Linux, основанных на Debian (Astra Linux 1.8, Debian 12, Ubuntu 24.04 и других), рекомендуется добавлять ключ репозитория следующим образом.
>
> Скопировать ключ репозитория:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> Добавить описание нового репозитория в список:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt;</p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> Здесь jatoba-\<ver\> - версия устанавливаемой СУБД «Jatoba». Затем выполнить 9) из данного подраздела.

7)  Добавить описание локального репозитория в систему:

> nano /etc/apt/sources.list.d/jatoba-\<ver\>.list
>
> Рисунок 4.7 – Добавление локального репозитория в ОС

8)  Вставить в файл следующее содержимое и сохранить:

> rpm file:///localrepo x86_64 classic

Рисунок 4.8 – Содержание файла «jatoba-4.list»

9)  Проиндексировать обновленное состояние репозитория:

> apt-get update
>
> Рисунок 4.9 – Индексация репозитория

10) Установить СУБД «Jatoba» при помощи команды:

> apt-get install jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server
>
> Рисунок 4.10 – Установка пакетов Подтвердите продолжение установки.

11) Убедиться, что отсутствуют ошибки зависимостей:

> for f in \$(LANG=C find /usr/jatoba-\<ver\> -type f -exec file {}
>
> \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done
>
> Рисунок 4.11 – Команда проверки отсутствия ошибок зависимостей

12) Перейти в директорию исполняемых файлов СУБД:

> cd /usr/jatoba-\<ver\>/bin
>
> Рисунок 4.12 – Команда перехода в каталог

13) Инициализировать каталог данных СУБД при помощи команды:

> ./jatoba-setup initdb jatoba-\<ver\>
>
> Рисунок 4.13 – Инициализация СУБД

14) Добавить сервис в список автозапуска:

> systemctl enable jatoba-\<ver\>
>
> Рисунок 4.14 – Добавление сервиса jatoba-4 а автозагрузку ОС

15) Запустить службу:

> systemctl start jatoba-\<ver\>
>
> Рисунок 4.15 – Запуск службы jatoba-4

16) Проверить статус службы:

> systemctl status jatoba-\<ver\>
>
> Рисунок 4.16 – Проверка статуса службы

17) Авторизоваться в psql от имени и с правами пользователя «postgres» и установить для него пароль в СУБД:

> su -l postgres
>
> cd /usr/jatoba-\<ver\>/bin/ psql
>
> \password

Рисунок 4.17 – Установка пароля для пользователя СУБД «postgres»

18) Войти в профиль пользователя «root» нажатием сочетания клавиш:

> CTRL + D

19) Установить пароль для системного пользователя ОС «postgres»:

> passwd postgres
>
> <img src="../docs/assets/images/com18.3.1/install/media/image247.jpeg" style="width:7.09538in;height:5.40375in" />
>
> Рисунок 4.18 – Установка пароля для пользователя ОС На этом этапе установка СУБД окончена.

## Удаление СУБД «Jatoba» из локального репозитория в Альт 9 Server

> Удаление СУБД «Jatoba» из локального репозитория в Альт 9 Server проводится в следующем порядке:

1)  Вывести список служб СУБД «Jatoba»:

> systemctl list-unit-files 'ja\*'
>
> Рисунок 4.19 – Список служб
>
> Команда сформирована по маске из первых букв названий служб. Из полученного списка очевидно, что установлена только СУБД.
>
> Перечень служб, используемых при эксплуатации СУБД, приведен в таблице [П 4.1](#_bookmark163).
>
> <span id="_bookmark163" class="anchor"></span>Таблица П 4.1 – Перечень служб используемых СУБД

<table>
<colgroup>
<col style="width: 66%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Наименование компонента</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Наименование службы</strong></p>
<p><strong>(демона)</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>СУБД «Jatoba»</p>
</blockquote></td>
<td><blockquote>
<p>jatoba-&lt;ver&gt;</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Централизованный сбор записей событий в СУБД.</p>
<p>Компонент «ja_Log»</p>
</blockquote></td>
<td><blockquote>
<p>jalog_server</p>
<p>jalog_agent</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>Управление режимом работы узлов кластера</p>
<p>Компонент «jaDog»</p>
</blockquote></td>
<td><blockquote>
<p>jadog</p>
</blockquote></td>
</tr>
</tbody>
</table>

2)  Удалить службу из автозагрузки ОС:

> systemctl disable jatoba-\<ver\>
>
> Рисунок 4.20 – Удаление службы «jatoba-4» из автозагрузки
>
> Если были установлены компоненты СУБД, приведенные в таблице [П 4.1](#_bookmark163), то службы компонентов удаляются командой:
>
> systemctl disable \<имя службы\>

3)  Проверить статус отключенной из автозагрузки службы:

> systemctl status jatoba-\<ver\>
>
> Рисунок 4.21 – Проверка статуса службы Служба должна иметь статус «disabled».

4)  Удалить все ненужные пакеты.

> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />Удаление пакетов командами:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>apt-get remove jatoba&lt;ver&gt;-*</p>
<p>apt-get autoremove jatoba&lt;ver&gt;-*</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> может привести к ошибке и некорректному удалению пакетов.
>
> Для корректного удаления пакетов рекомендуется использовать менеджер пакетов
>
> «Synaptic».
>
> Для запуска менеджера пакетов «Synaptic» необходимо выбрать в меню ОС
>
> «Система» → «Параметры» → «Прочие» → «Менеджер пакетов». Перед своим запуском программа попросит ввести пароль суперпользователя:

<img src="../docs/assets/images/com18.3.1/install/media/image251.jpeg" style="width:6.01042in;height:1.84375in" />

> Рисунок 4.22 – Ввод пароля «root»
>
> Нажать кнопку «Происхождение» (см. рис. [4.23](#_bookmark164)) и выбрать в списке репозиторий
>
> «Локальный/classic», который является локальным репозиторием СУБД «Jatoba».
>
> <img src="../docs/assets/images/com18.3.1/install/media/image252.jpeg" style="width:7in;height:5.5625in" />
>
> <span id="_bookmark164" class="anchor"></span>Рисунок 4.23 – Локальный репозиторий СУБД «Jatoba» в менеджере пакетов «Synaptic» В списке пакетов отображаются пакеты, находящиеся в локальном репозитории
>
> СУБД «Jatoba». Пакеты могут иметь статусы, представленные в таблице [П 4.2](#_bookmark165).
>
> <span id="_bookmark165" class="anchor"></span>Таблица П 4.2 – Статусы пакетов в репозитории

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 46%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>Пиктограмма</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Статус пакета</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Вид пакета</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image253.png" style="width:0.24428in;height:0.22687in" /></p>
</blockquote></td>
<td><blockquote>
<p>пакет, установленный в системе</p>
</blockquote></td>
<td><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image254.png" style="width:1.66676in;height:0.23958in" /></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image255.png" style="width:0.21875in;height:0.21875in" /></p>
</blockquote></td>
<td><blockquote>
<p>пакет, доступный для установки</p>
</blockquote></td>
<td><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image256.png" style="width:1.86458in;height:0.22917in" /></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image257.png" style="width:0.22917in;height:0.22917in" /></p>
</blockquote></td>
<td><blockquote>
<p>пакет назначен для установки</p>
</blockquote></td>
<td><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image258.png" style="width:1.90625in;height:0.28125in" /></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image259.png" style="width:0.21875in;height:0.22917in" /></p>
</blockquote></td>
<td><blockquote>
<p>пакет, отмеченный для удаления</p>
</blockquote></td>
<td><blockquote>
<p><img src="../docs/assets/images/com18.3.1/install/media/image260.png" style="width:1.66667in;height:0.26042in" /></p>
</blockquote></td>
</tr>
</tbody>
</table>

> Пакеты со статусом «установленные в системе» должны быть помечены для удаления, через контекстное меню или клавишей «Delete».

<img src="../docs/assets/images/com18.3.1/install/media/image261.jpeg" style="width:6.875in;height:5.41667in" />

> Рисунок 4.24 – Контекстное меню
>
> После маркировки пакетов для удаления нажать кнопку «Применить». Менеджер пакетов «Synaptic» выведет окно подтверждения удаления пакетов, в котором необходимо подтвердить действие, нажав на кнопку «Применить».
>
> <img src="../docs/assets/images/com18.3.1/install/media/image262.jpeg" style="width:6.88542in;height:5.44792in" />
>
> Рисунок 4.25 – Подтверждение удаления пактов
>
> После удаления пакетов в репозитории «Локальный/classic» все пакеты сменят статус на «пакет доступный к установке». На данном шаге работа с менеджером пакетов «Synaptic» закончена.

5)  Вывести список служб СУБД «Jatoba» командой в терминале MATE:

> systemctl list-unit-files 'ja\*'
>
> Список служб, выведенных по маске, должен быть пуст, т.к. процедура удаления пакетов удяляет и связанные с ними службы.
>
> Рисунок 4.26 – Список служб по маске «ja\*»

6)  Просмотреть список репозиториев:

> apt-repo list
>
> Рисунок 4.27 – Список локальных репозиториев В списке локальных репозиториев должна присутствать запись:
>
> rpm file:///localrepo x86_64 classic

7)  Удалить описание локального репозитория:

> rm /etc/apt/sources.list.d/jatoba-\<ver\>.list
>
> Рисунок 4.28 – Удаление описания репозитория Подтвердите проведение операции.

8)  Просмотреть список репозиториев:

> apt-repo list
>
> Рисунок 4.29 – Список локальных репозиториев после удаления В списке локальных репозиториев должна отсутствовать запись:
>
> rpm file:///localrepo x86_64 classic
>
> Что означает корретное удаление описание локального репозитория СУБД «Jatoba».

9)  Просмотреть список пользователей командой:

> cat /etc/passwd
>
> Рисунок 4.30 – Список пользователей Если в списке пользователей ОС присутствует строка:
>
> postgres:x:46:46:PostgreSQL Server:/var/lib/jatoba:/bin/bash
>
> следовательно, требуется удалить пользователя «postgres».

10) Удалить пользователя «postgres» командой:

> userdel postgres
>
> Рисунок 4.31 – Удаление пользователя «postgres»
>
> При повторном просмотре списка пользователей ОС, строка о пользователе «postgres» должна отсутствовать.

11) Удалить каталоги СУБД командами:

> rm -rf /usr/jatoba-\<ver\> rm -rf /var/lib/jatoba
>
> Рисунок 4.32 – Удаление каталогов СУБД

12) Удалить каталог репозитория:

> rm -rf /localrepo
>
> Рисунок 4.33 – Удаление каталога репозитория На этом шаге удаление СУБД закончено.

# ПРИЛОЖЕНИЕ 5

> **Пример установки и удаления СУБД «Jatoba» из локального репозитория для ОС Astra Linux 1.7 Special Edition Смоленск (x86-64) в ЗПС**

## Установка ОС Astra Linux 1.7 Special Edition Смоленск (x86-64)

> При установке ОС на этапе «Выбор программного обеспечения» не выбирать установку СУБД входящей в состав дистрибутива.
>
> Рисунок 5.1 – Этап «Выбор программного обеспечения»
>
> На следующем этапе «Дополнительные настройки ОС», установить флаг для опции
>
> «Включить режим замкнутой программной среды».
>
> Рисунок 5.2 – Этап «Дополнительные настройки ОС»

## Установка СУБД «Jatoba» из локального репозитория в ОС Astra Linux 1.7 Special Edition Смоленск (x86-64)

> Установка СУБД «Jatoba» из локального репозитория для ОС Astra Linux 1.6 Special Edition Смоленск (x86-64) проводится в следующем порядке:

1)  В терминале войти в режим суперпользователя, выполнив команду:

> sudo su

2)  Если команды sudo не существует – установить:

> su -l
>
> apt-get install sudo -y

3)  Выполнить обновление системы:

> sudo apt update && sudo apt upgrade –y
>
> sudo apt -s dist-upgrade sudo apt dist-upgrade

<img src="../docs/assets/images/com18.3.1/install/media/image273.png" style="width:7.03947in;height:1.89062in" />

> Рисунок 5.3 – Обновление системы

4)  Создать папку localrepo в корневом каталоге:

> mkdir /localrepo

5)  В созданную папку скопировать:

<img src="../docs/assets/images/com18.3.1/install/media/image274.png" style="width:3.3854in;height:0.92125in" />

- каталог \<pool\>

- каталог \<dist\>

- файл \<DEB-GPG-KEY-Jatoba\>

> Рисунок 5.4 – Структура каталога «localrepo»

6)  Установить открытый ключ репозитория:

<img src="../docs/assets/images/com18.3.1/install/media/image275.png" style="width:7.08485in;height:1.30167in" />

> apt-key add /localrepo/DEB-GPG-KEY-Jatoba
>
> Рисунок 5.5 – Установка открытого ключа репозитория
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />Для более новых версий ОС GNU/Linux, основанных на Debian (Astra Linux 1.8, Debian 12, Ubuntu 24.04 и других), рекомендуется добавлять ключ репозитория следующим образом.
>
> Скопировать ключ репозитория:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> Добавить описание нового репозитория в список:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt;</p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> Здесь jatoba-\<ver\> - версия устанавливаемой СУБД «Jatoba». Затем выполнить 9) из данного подраздела.

7)  Добавить описание локального репозитория в систему:

> nano /etc/apt/sources.list.d/jatoba-\<ver\>.list

8)  Вставить в файл следующее содержимое и сохранить:

> deb file:///localrepo stable non-free

Рисунок 5.6 – Содержание файла «jatoba-4.list»

9)  Проиндексировать обновленное состояние репозитория:

> apt-get update
>
> Рисунок 5.7 – Индексация репозитория

10) Установить СУБД «Jatoba» при помощи команды и подтвердить выполнение:

> apt-get install jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server
>
> Рисунок 5.8 – Установка пакетов

11) Установить дополнительный пакет СУБД «Jatoba» для ОС Astra Linux Special Edition 1.7 Смоленск при помощи команды и подтвердить выполнение:

<img src="../docs/assets/images/com18.3.1/install/media/image279.png" style="width:7.08482in;height:3.78667in" />

> apt-get install jatoba\<ver\>-astra-digsig-key
>
> Рисунок 5.9 – Установка дополнительного пакета
>
> Установка дополнительного пакета сформирует файл «gazis_pub.key» в каталоге:

<img src="../docs/assets/images/com18.3.1/install/media/image280.png" style="width:3.34019in;height:2.43323in" />

> /usr/jatoba-\<ver\>/share
>
> Рисунок 5.10 – Расположение файла «gazis_pub.key»

12) Убедиться, что отсутствуют ошибки зависимостей:

> for f in \$(LANG=C find /usr/jatoba-\<ver\> -type f -exec file {}
>
> \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

13) Скопировать файл «gazis_pub.key»из каталога /usr/jatoba-4/share в каталог

> /etc/digsig/keys.

<img src="../docs/assets/images/com18.3.1/install/media/image281.png" style="width:1.71819in;height:0.96885in" />

> Рисунок 5.11 – Содержание каталога /etc/digsig/keys

14) Импортировать в систему открытый ключ «gazis_pub.key» командами:

> cd /etc/digsig/keys/
>
> gpg --import /etc/digsig/keys/gazis_pub.key
>
> Рисунок 5.12 – Импорт открытого ключа

15) Выполнить переход в режим ЗПС с использованием терминала:

    - Настроить конфигурационный файл «digsig_initramfs.conf»:

> sudo mcedit /etc/digsig/digsig_initramfs.conf
>
> Рисунок 5.13 – Команда редактирования конфигурационного файла
>
> В конфигурационном файле «digsig_initramfs.conf» должны быть установлены параметры:
>
> DIGSIG_ELF_MODE=1 DIGSIG_XATTR_MODE=0 DIGSIG_IGNORE_XATTR_KEYS=0 DIGSIG_IGNORE_GOST2021=0

Рисунок 5.14 – Конфигурационный файл «digsig_initramfs.conf»

- Применить текущие настройки «digsig_initramfs.conf» командой:

> sudo update-initramfs -u -k all
>
> Рисунок 5.15 – Применение текущих настроек «digsig_initramfs.conf»

- Перезапустите ОС командой:

> sudo reboot
>
> Рисунок 5.16 – Перезагрузка ОС Таким образом будет включен режим ЗПС.

- После перезапуска ОС проверьте, что ELF mode – включен, а XATTR mode – отключен, выполнив команды:

<img src="../docs/assets/images/com18.3.1/install/media/image287.png" style="width:7.04834in;height:1.58271in" />

> cat /sys/digsig/elf_mode cat /sys/digsig/xattr_mode

Рисунок 5.17 – Проверка параметров

16) Перейти в директорию исполняемых файлов СУБД:

> cd /usr/jatoba-\<ver\>/bin
>
> Рисунок 5.18 – Переход в каталог

17) Инициализировать каталог данных СУБД при помощи команды:

> ./jatoba-setup initdb jatoba-\<ver\>
>
> Рисунок 5.19 – Инициализация СУБД

18) Добавить сервис в список автозапуска:

> systemctl enable jatoba-\<ver\>
>
> Рисунок 5.20 – Добавление сервиса jatoba-4 в автозагрузку ОС

19) Запустить службу:

> systemctl start jatoba-\<ver\>
>
> Рисунок 5.21 – Запуск службы jatoba-4

20) Проверить статус службы:

> systemctl status jatoba-\<ver\>
>
> Рисунок 5.22 – Проверка статуса службы «jatoba-\<ver\>»

21) Установить пароль для системного пользователя ОС «postgres»:

<img src="../docs/assets/images/com18.3.1/install/media/image293.png" style="width:7.04817in;height:1.52354in" />

> sudo passwd postgres
>
> Рисунок 5.23 – Установка пароля для пользователя ОС

22) Авторизоваться в psql, для этого нажать сочетание клавиш:

> CTRL + D
>
> затем войти в psql:
>
> su - postgres psql
>
> <img src="../docs/assets/images/com18.3.1/install/media/image294.png" style="width:7.04818in;height:1.87854in" />
>
> Рисунок 5.24 – Вход в СУБД

23) Установить пароль для пользователя СУБД «postgres»:

<img src="../docs/assets/images/com18.3.1/install/media/image295.png" style="width:7.04832in;height:1.4126in" />

> \password
>
> Рисунок 5.25 – Установка пароля для пользователя СУБД На этом этапе установка СУБД окончена.

## Удаление СУБД «Jatoba» из локального репозитория в ОС

> Действия выполняемые для удаления СУБД «Jatoba» из локального репозитория аналогичны действиям, описанным в Приложении [2](#приложение-2) настоящего документа.

# ПРИЛОЖЕНИЕ 6

## Установка СУБД «Jatoba» из локального репозитория в ОС ОСНОВА 2.0

> Перед началом установки должен быть скопирован дистрибутив в каталог /localrepo.
>
> При установке открытого ключа репозитория требуется отключить режим ЗПС либо обеспечить работу утилиты apt-key в условиях ЗПС.
>
> Установка СУБД «Jatoba» из локального репозитория в ОС ОСНОВА 2.0 выполняется следующими шагами:

1)  Проверить статус включенного режима ЗПС:

> ls -al /etc/ima/policy
>
> Рисунок 6.1 – Команда проверки статуса ЗПС Вывод имеет два значения:

- /etc/ima/policy -\> policy.d/empty – выключен (по умолчанию);

- /etc/ima/policy -\> policy.d/appraise – включен.

2)  Выполнить обновление системы:

> apt-get update -y & apt-get upgrade -y
>
> Рисунок 6.2 – Команда обновления системы

3)  Добавить репозиторий jatoba с отключенным режимом ЗПС:

<img src="../docs/assets/images/com18.3.1/install/media/image298.png" style="width:6.88549in;height:1.07292in" />

> apt-key add /localrepo/DEB-GPG-KEY-Jatoba
>
> Рисунок 6.3 – Команда добавления репозитория

4)  Добавить описание локального репозитория в систему:

> nano /etc/apt/sources.list.d/jatoba-\<ver\>.list

5)  Вставить в файл следующее содержимое и сохранить:

> Рисунок 6.4 – Содержание файла jatoba-\<ver\>.list

6)  Проиндексировать обновленное состояние репозитория:

> apt-get update
>
> Рисунок 6.5 – Команда индексирования репозитория

7)  В ОС включить режим ЗПС командами:

> sudo rm /etc/ima/policy
>
> sudo ln -s /etc/ima/policy.d/appraise /etc/ima/policy

8)  Применить обновленные настройки и перезагрузить ОС:

> sudo update-initramfs -u -k all sudo reboot
>
> Рисунок 6.6 – Команды включения режима ЗПС

9)  Установить пакет osnova-digsig-key:

> apt install jatoba5-osnova-digsig-key
>
> Рисунок 6.7 – Команда установки пакета osnova-digsig-key

10) Применить обновленные настройки:

> update-initramfs -u -k all
>
> Рисунок 6.8 – Команда применения настроек

11) Перезагрузить систему:

> reboot

12) После авторизации войти в режим суперпользователя, выполнив команду:

> sudo su

13) Проверить статус режима ЗПС:

> ls -al /etc/ima/policy
>
> В выводе команды режим ЗПС должен быть включен, т.е. иметь значение «appraise»:
>
> /etc/ima/policy -\> policy.d/appraise
>
> Рисунок 6.9 – Вывод статуса ЗПС

14) Установить пакет osnova-digsig-key:

> apt install jatoba\<ver\>-osnova-digsig-key
>
> Рисунок 6.10 – Команда установки пакета osnova-digsig-key

15) Добавить публичный ключ:

<img src="../docs/assets/images/com18.3.1/install/media/image306.png" style="width:6.88562in;height:0.6875in" />

> cp /usr/jatoba-\<ver\>/share/gaz-is.der /etc/ima/certs
>
> Рисунок 6.11 – Команда копирования публичного ключа

16) Обновить данные:

> update-initramfs -u -k all
>
> Рисунок 6.12 – Команда применения настроек

17) Перезагрузить систему:

> reboot

18) После авторизации войти в режим суперпользователя, выполнив команду:

> sudo su

19) Установить СУБД Jatoba при помощи команды:

> apt-get install jatoba\<ver\>-client jatoba\<ver\>-contrib jatoba\<ver\>-libs jatoba\<ver\>-server
>
> Рисунок 6.13 – Команда установки основных пакетов СУБД «Jatoba»

20) Убедиться, что отсутствуют ошибки зависимостей:

> for f in \$(LANG=C find /usr/jatoba-\<ver\> -type f -exec file {}
>
> \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done
>
> Рисунок 6.14 – Команда проверки зависимостей

21) Перейти в директорию исполняемых файлов СУБД:

> cd /usr/jatoba-\<ver\>/bin

22) Инициализировать каталог данных СУБД при помощи команды:

> ./jatoba-setup initdb jatoba-\<версия\>
>
> Рисунок 6.15 – Команда инициализации СУБД

23) Вывести права на директорию данных:

> stat /var/lib/jatoba/
>
> stat /var/lib/jatoba/\<ver\>
>
> stat /var/lib/jatoba/\<ver\>/data
>
> Рисунок 6.16 – Команда вывода прав доступа В выводе команд должны отразится права на доступ:

- Uid: postgres;

- Gid: postgres.

24) Добавить сервис в список автозапуска:

> systemctl enable jatoba-\<ver\>

25) Запустить службу:

> systemctl start jatoba-\<ver\>

26) Проверить статус службы:

> systemctl status jatoba-\<ver\>
>
> <img src="../docs/assets/images/com18.3.1/install/media/image312.png" style="width:6.88547in;height:1.69792in" />
>
> Рисунок 6.17 – Запуск службы jatoba-\<ver\> и проверка ее статуса

27) Проверить наличие подписи в исполняемых файлах:

<img src="../docs/assets/images/com18.3.1/install/media/image313.png" style="width:6.88546in;height:2.29167in" />

> evmctl show /usr/jatoba-\<ver\>/bin/initdb
>
> Рисунок 6.18 – Вывод подписи в исполняемых файлах
>
> <img src="../docs/assets/images/com18.3.1/install/media/image1.png" style="width:0.25139in;height:0.25139in" />При установке стороннего ПО, например КриптоПро, которое требуется для работы некоторых компонент СУБД, администратору необходимо обеспечить работоспособность этого ПО в условиях ЗПС (должно быть подписано).

# ПРИЛОЖЕНИЕ 7

## Пример установки веб-сервера (IIS) на ОС Windows 10

> Перед установкой веб-сервера (IIS) на ОС Windows 10 необходимо выполнить действия по предварительной настройке компьютера. Для чего необходимо:

- задать корректное имя компьютера;

> <img src="../docs/assets/images/com18.3.1/install/media/image2.png" style="width:0.25in;height:0.25in" />Имя компьютера не должно включать символ нижнего подчеркивания «\_», в противном случае ОС выдаст ошибку.

- настроить сетевое окружение;

- установить обновления ОС.

Для установки роли веб-сервера необходимо проделать следующие шаги:

1)  Перейти в «Панель управления» → «Программы» → «Программы и компоненты»

> → «Включение или отключение компонентов Windows» ([Рисунок 7.1](#_bookmark174)).
>
> <span id="_bookmark174" class="anchor"></span>Рисунок 7.1 – Включение или отключение компонентов Windows

2)  В открывшемся окне «Компоненты Windows» выбрать раздел «Внедряемое веб-ядро служб IIS» (рисунок [7.2](#_bookmark175)).

> <img src="../docs/assets/images/com18.3.1/install/media/image315.png" style="width:3.93387in;height:3.48833in" />
>
> <span id="_bookmark175" class="anchor"></span>Рисунок 7.2 – Раздел «Внедряемое веб-ядро служб IIS»

3)  В разделе «Windows PowerShell 2.0» оставить выбранные компоненты по умолчанию (рисунок [7.3](#_bookmark176)).

<img src="../docs/assets/images/com18.3.1/install/media/image316.png" style="width:3.93386in;height:3.55469in" />

> <span id="_bookmark176" class="anchor"></span>Рисунок 7.3 – Раздел «Windows PowerShell 2.0

4)  В окне «Компоненты Windows» выбрать раздел «Службы IIS» (рисунок [7.4](#_bookmark177)).

> <img src="../docs/assets/images/com18.3.1/install/media/image317.png" style="width:3.93386in;height:3.55469in" />
>
> <span id="_bookmark177" class="anchor"></span>Рисунок 7.4 – Раздел «Службы IIS»
>
> Параметры, устанавливаемые разделе «Службы IIS», приведены в таблице П. [П.7.1](#_bookmark178).
>
> <span id="_bookmark178" class="anchor"></span>Таблица П.7.1 – Требуемые параметры в разделе «Службы IIS»

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 25%" />
<col style="width: 68%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Основные параметры</strong></p>
<p><strong>раздела «Службы IIS»</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Связанный параметр</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Безопасность</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>1.1</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Фильтрация запросов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Компоненты разработки приложений</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2.1</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Инициализация приложений</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Общие функции HTTP</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3.1</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Документ по умолчанию</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3.2</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Обзор каталога</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3.3</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Просмотр каталога</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3.4</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Ошибки HTTP</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3.5</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Статическое содержимое</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>4</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Проверка работоспособности и диагностика</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>4.1</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Ведение журнала HTTP</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>5</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Функции повышения быстродействия</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>5.1</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Сжатие статического содержимого</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>6</p>
</blockquote></td>
<td colspan="2"><blockquote>
<p><strong>Средства управления веб-сайтом</strong></p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>6.1</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p>Консоль управления IIS</p>
</blockquote></td>
</tr>
</tbody>
</table>

5)  В окне «Компоненты Windows» проверить настроенные параметры и начать установку веб-сервера, нажав кнопку «ОК».

6)  В окне «Компоненты Windows» показан результат установки компонента. После успешной установки нажать «Закрыть» (рисунок [7.5](#_bookmark179)).

> <span id="_bookmark179" class="anchor"></span>Рисунок 7.5 – Окончание установки веб-сервера IIS
>
> Для проверки установки веб-сервера (IIS) необходимо в веб-браузере перейти по ссылке [<u>http://localhost</u>.](http://localhost/)
>
> На рисунке [7.6](#_bookmark180) показана страница с корректной установкой веб-сервера.
>
> <span id="_bookmark180" class="anchor"></span>Рисунок 7.6 – Тестовая страница веб-сервера (IIS)

# ПРИЛОЖЕНИЕ 8

## Установка службы JDS.PasDoctor

> **Строка подключения к служебной БД JDS**
>
> Для корректной работы службы ей требуется подключение к служебной БД «JDS». Строка подключения находится в файле «appsettings.json» и определяется ключом
>
> «ConnectionStrings:DefaultConnection».

## Установка в ОС Windows

> Для установки службы Windows рекомендуется использовать утилиту «sc.exe».
>
> Следует запускать службу под учетной записью «NetworkService».
>
> Пример вызова «sc.exe» для установки службы с параметрами:

- имя службы «JDS.Doctor»;

- автоматический запуск;

- учетная запись «Network Service»;

- отображаемое имя «JDS Doctor».

> sc.exe create JDS.Doctor start= auto binpath= C:\Full\Path\To\J DS.PasDoctor.exe obj= "NT AUTHORITY\NetworkService" DisplayName
>
> = "JDS Doctor"
>
> Вторая команда устанавливает описание для службы.
>
> sc.exe description JDS.Doctor "Служба для поиска и исправления проблем с производительностью и безопасностью СУБД. Для управле ния службой используйте раздел Jatoba Data Safe 'Производительн ость - Проблемы и решения'."

## Файлы журналов в ОС Windows

> По умолчанию служба сохраняет журналы в папке C:\ProgramData\JDS\logs. Никаких действий по созданию папки или назначению прав доступа не требуется.

## Установка в ОС Linux

> Для примера используется Ubuntu 23.04. В других дистрибутивах процедура установки может отличаться.

- создать пользователя, под которым будет работать служба:

> sudo useradd –s /usr/sbin/nologin jds

- создать папку для журналов (логов), назначить ей владельца и права:

> sudo mkdir /var/log/jds
>
> sudo chown jds:jds /var/log/jds sudo chmod 744 /var/log/jds
>
> В некоторых дистрибутивах при создании пользователя «jds» группа «jds» не создаётся.
>
> Для просмотра группы по умолчанию служит команда «groups jds».

- создать сервис-файл /etc/systemd/system/jds-doctor.service со следующим содержимым:

> **\[Unit\]**
>
> Description=JATOBA DATA SAFE Doctor
>
> **\[Service\]**
>
> WorkingDirectory=/opt/jds-doctor ExecStart=/opt/jds-doctor/JDS.PasDoctor Restart=always
>
> RestartSec=10 SyslogIdentifier=jds-doctor User=jds
>
> **\[Install\]**
>
> WantedBy=multi-user.target

- разрешить и запустить сервис:

> sudo systemctl daemon-reload sudo systemctl enable jds-doctor sudo systemctl start jds-doctor

## Файлы журналов в Linux

> По умолчанию служба сохраняет журналы (логи) в папке /var/log/jds/. Папка должна быть предварительно создана, должен быть изменен владелец и назначены права (см. секцию «Установка в Linux»).

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 7%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>DDL</p>
</blockquote></th>
<th><blockquote>
<p>–</p>
</blockquote></th>
<th><blockquote>
<p>Data Definition Language — язык описания данных</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>DML</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Data Manipulation Language — язык манипулирования данными</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>SQL</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Structured Query Language — язык структурированных запросов</p>
</blockquote></td>
</tr>
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
<p>ОЗУ</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Оперативное запоминающее устройство</p>
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
<td></td>
<td><blockquote>
<p>Электронно-вычислительная машина</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>ЗПС</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Замкнутая программная среда в ОС Astra Linux Special Edition — это механизм авторизации на основании контроля целостности файлов с использованием проверки ЭЦП, реализованный в модуле ядра ОС</p>
<p>disgsig_verif</p>
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
