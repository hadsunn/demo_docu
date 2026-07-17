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
<p><strong>Руководство по настройке. Часть 33.</strong></p>
<p><strong>Маскирование данных.</strong></p>
<p><strong>Компонент «ja_Anonymizer»</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p><strong>643.72410666.00067-08 98 01-33</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>Листов 52</p>
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

# АННОТАЦИЯ

> Компонент «ja_Anonymizer» входит в состав СУБД «Jatoba» и обеспечивает защиту данных за счёт их маскировки или обезличивания. Это позволяет скрывать конфиденциальную информацию и персональные данные пользователей.
>
> Настоящее руководство предназначено для администраторов СУБД.
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image1.png" style="width:0.25in;height:0.24912in" /> Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра
>
> 6.x.
>
> Для СУБД «Jatoba» версии ядра 6/18 используется версия компонента — 2.4.
>
> Степени важности примечаний, применяемые в документе:
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image2.png" style="width:0.25139in;height:0.25139in" /> **Важная информация** – указания, требующие особого внимания
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image1.png" style="width:0.25in;height:0.24999in" /> **Дополнительная информация** – указания, позволяющие упростить работу с изделием

## <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image2.png" style="width:0.25139in;height:0.25139in" /> Важная информация

> Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!

# СОДЕРЖАНИЕ

# 

1.  [Назначение компонента 5](#назначение-компонента)

    1.  [Условия применения 5](#условия-применения)

    2.  [Ограничения при работе с компонентом 5](#ограничения-при-работе-с-компонентом)

2.  [Установка и настройка 6](#установка-и-настройка)

    1.  [Установка пакета «ja_anonymizer» в ОС GNU/Linux 6](#установка-пакета-ja_anonymizer-в-ос-gnulinux)

    2.  [Настройка конфигурационного файла СУБД 7](#настройка-конфигурационного-файла-субд)

    3.  [Установка расширения компонента 8](#установка-расширения-компонента)

        1.  [Установка расширения в БД 8](#установка-расширения-в-бд)

        2.  [Установка расширения в СУБД (глобально) 10](#_bookmark10)

3.  [Функциональные возможности компонента 12](#функциональные-возможности-компонента)

    1.  [Функции маскирования данных 13](#функции-маскирования-данных)

        1.  [Полная маскировка (замена исходных данных фиксированным значением) 13](#полная-маскировка-замена-исходных-данных-фиксированным-значением)

        2.  [Частичная маскировка данных 13](#частичная-маскировка-данных)

        3.  [Искажение исходных данных 14](#искажение-исходных-данных)

        4.  [Генерация случайных данных 15](#генерация-случайных-данных)

    2.  [Псевдонимизация 17](#псевдонимизация)

    3.  [Хэширование исходных данных 19](#хэширование-исходных-данных)

    4.  [Обобщение исходных данных 20](#обобщение-исходных-данных)

    5.  [Базовая фальсификация исходных данных 21](#базовая-фальсификация-исходных-данных)

    6.  [Расширенная фальсификация исходных данных 22](#расширенная-фальсификация-исходных-данных)

    7.  [Маскирование исходных данных с условием 23](#маскирование-исходных-данных-с-условием)

    8.  [Пользовательские функции и наборы поддельных данных 23](#пользовательские-функции-и-наборы-поддельных-данных)

        1.  [Пользовательские наборы данных 23](#пользовательские-наборы-данных)

        2.  [Пользовательские функции маскирования данных 24](#пользовательские-функции-маскирования-данных)

4.  [Пример использования 28](#пример-использования)

    1.  [Статическое маскирование данных 28](#статическое-маскирование-данных)

    2.  [Динамическое маскирование данных 32](#динамическое-маскирование-данных)

        1.  [Правило маскирования данных пользователя с маской 33](#правило-маскирования-данных-пользователя-с-маской)

        2.  [Замена данных запроса фиксированным значением 34](#замена-данных-запроса-фиксированным-значением)

        3.  [Замена символами исходных данных 35](#замена-символами-исходных-данных)

        4.  [Замена исходных данных на случайное правдоподобное значение 35](#замена-исходных-данных-на-случайное-правдоподобное-значение)

        5.  [Замена исходных данных на псевдоним 36](#замена-исходных-данных-на-псевдоним)

        6.  [Результат применения динамического маскирования 36](#результат-применения-динамического-маскирования)

        7.  [Отключение правила динамической маскировки 37](#отключение-правила-динамической-маскировки)

        8.  [Отключение правила динамической маскировки для пользователя 38](#отключение-правила-динамической-маскировки-для-пользователя)

    3.  [Дамп с маскированными данными 38](#дамп-с-маскированными-данными)

        1.  [Создания пользователя с маской для работы с дампом 38](#создания-пользователя-с-маской-для-работы-с-дампом)

        2.  [Запуск создания дампа с маскированными данными 39](#запуск-создания-дампа-с-маскированными-данными)

        3.  [Проверка маскировки данных в дампе 40](#проверка-маскировки-данных-в-дампе)

    4.  [Представления с маскированными данными 40](#представления-с-маскированными-данными)

    5.  [Маскирующие обертки данных 43](#маскирующие-обертки-данных)

        1.  [Подготовка к работе с внешним источником данных 43](#подготовка-к-работе-с-внешним-источником-данных)

        2.  [Создание внешней таблицы 44](#создание-внешней-таблицы)

        3.  [Определение правил маскирования данных внешнего источника 45](#определение-правил-маскирования-данных-внешнего-источника)

        4.  [Проверка маскирования данных из внешнего источника 46](#проверка-маскирования-данных-из-внешнего-источника)

5.  [Удаление расширения 48](#удаление-расширения)

6.  [Возможные ошибки 49](#возможные-ошибки)

    1.  [Ошибка при выгрузке дампа с маскированными данными из БД в режиме «только чтение» 49](#ошибка-при-выгрузке-дампа-с-маскированными-данными-из-бд-в-режиме)

[Перечень сокращений 51](#перечень-сокращений)

# НАЗНАЧЕНИЕ КОМПОНЕНТА

> Компонент «ja_Anonymizer» — это расширение СУБД «Jatoba», предоставляющее механизм маскирования или обезличивания данных.
>
> Такая функциональная возможность позволяет объявлять правила маскирования, используя язык описания данных (DDL), и определять свою стратегию маскировки данных внутри самого определения таблицы БД.

## Условия применения

> Компонент «ja_Anonymizer» может использоваться с СУБД «Jatoba» версий 6.x и выше, под управлением операционных систем GNU/Linux.
>
> Компонент выполнен в форме расширения СУБД и не имеет ограничений по совместимости с другими компонентами.

## Ограничения при работе с компонентом

> Имеет ряд особенностей по функциональным возможностям:

- скорость выполнения статической маскировки зависит от объема БД и количества созданных правил маскировки;

- динамическая маскировка данных применяется только для одной схемы, по умолчанию — public. В случае необходимости схема может быть изменена пользователем;

- динамическая маскировка данных может существенно замедлить работу с некоторыми запросами, особенно при попытке соединить две таблицы по замаскированному ключу, используя хеширование или псевдомаскировку.

# УСТАНОВКА И НАСТРОЙКА

> Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе.
>
> Установка компонента под управлением ОС GNU/Linux приведено ниже.

## Установка пакета «ja_anonymizer» в ОС GNU/Linux

> Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо при последующей эксплуатации СУБД.
>
> Установку пакета компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

> Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

> \# apt-get install jatoba\<ver\>-ja_anonymizer

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки, следующая:

> \# yum install jatoba\<ver\>-ja_anonymizer
>
> Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

> \# apt-get install jatoba\<ver\>-ja_anonymizer
>
> Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется.
>
> Удаление пакета также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).
>
> Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.
>
> В результате установки пакета в директории:

- /usr/jatoba-\<ver\>/lib/ будет создана библиотека anon.so;

- /usr/jatoba-\<ver\>/share/extension/ будет создан управляющий файл расширения anon.control;

- /usr/jatoba-\<ver\>/share/extension/anon/ будет создан набор csv-файлов.

## Настройка конфигурационного файла СУБД

> Чтобы активировать функции компонента, необходимо выполнить следующие действия:

1)  Добавьте имя библиотеки в переменную shared_preload_libraries в файле postgresql.conf:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image3.png" style="width:5.1432in;height:1.22687in" />

> shared_preload_libraries = 'anon'
>
> Рисунок 2.1 – Настройки библиотеки компонента в файле postgresql.conf

2)  Перезагрузить СУБД, чтобы активировать внесённые изменения:

> \# systemctl restart jatoba-\<ver\>

3)  Проверить статус работы СУБД после перезагрузки:

> \# systemctl status jatoba-\<ver\>
>
> Дополнительно можно проверить правильность загрузки библиотеки расширения выполнив следующий запрос:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image4.jpeg" style="width:5.52502in;height:2.29937in" />

> SHOW shared_preload_libraries;
>
> Рисунок 2.2 – Информация о загруженной в СУБД библиотеке компонента

## Установка расширения компонента

> После перезагрузки СУБД и загрузки библиотеки компонента появляется возможность установки расширения «ja_anonymizer».
>
> Установка расширения возможна двумя способами:

- Для БД, в которой требуется маскирование данных;

- Глобально для СУБД.

> Установка расширения выполняется от имени и с правами привилегированного пользователя СУБД.

## Установка расширения в БД

> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image1.png" style="width:0.25in;height:0.24912in" />Здесь и далее расширение устанавливается в БД «anon_db» в качестве примера.
>
> Последовательность действий при установке расширения в БД следующая:

1)  Создать БД, в которую будет устанавливаться расширение компонента:

> CREATE DATABASE anon_db;
>
> \connect anon_db

2)  Загрузку компонента в БД рекомендуется выполнять следующим образом:

> ALTER DATABASE anon_db SET session_preload_libraries = 'anon';
>
> \connect anon_db
>
> Данный способ имеет ряд преимуществ:

- Будет выполнен сброс pg_dump с помощью опции -c, В этом случае дамп БД будет самодостаточным.

- Распространяется на резервный экземпляр БД с помощью потоковой репликации. Это означает, что возможно использование функции анонимизации на копии БД, доступном только для чтения (при условии, что расширение так же установлено на резервном экземпляре БД).

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image5.png" style="width:5.16427in;height:1.33073in" />

> Рисунок 2.3 – Создание БД anon_db и регистрация загрузки библиотеки компонента

3)  <span id="_bookmark8" class="anchor"></span>Установка и инициализация расширения:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image6.jpeg" style="width:5.59577in;height:1.73635in" />

> CREATE EXTENSION anon CASCADE;
>
> SELECT anon.init();
>
> Рисунок 2.4 – Установка в БД расширения компонента и инициализация

4)  <span id="_bookmark9" class="anchor"></span>Просмотр установленных расширений в БД:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3"><blockquote>
<p>\dx</p>
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

> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image7.png" style="width:6.42092in;height:1.78031in" />
>
> Рисунок 2.5 – Просмотр установленных расширений Проверка загруженных расширений в БД:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image8.png" style="width:7.08704in;height:1.33073in" />

> SHOW session_preload_libraries;
>
> SELECT \* FROM pg_extension WHERE extname= 'anon'; SELECT anon.is_initialized();
>
> Рисунок 2.6 – Просмотр установленных расширений

## Установка расширения в СУБД (глобально)

> Вторым способом является установка расширения глобально для СУБД. Последовательность действий при установке расширения в СУБД следующая:

1)  Загрузку компонента в БД рекомендуется выполнять следующим образом:

> ALTER SYSTEM SET shared_preload_libraries = 'anon';

2)  Выполнить перезагрузку СУБД:

> \# systemctl restart jatoba-\<ver\>

3)  Проверить статус службы СУБД:

> \# systemctl status jatoba-\<ver\>

4)  Далее выполнить установку и проверку расширения согласно пунткам [3)](#_bookmark8)-[4)](#_bookmark9) из п.п. [2.3.1](#установка-расширения-в-бд).

# ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

Компонент предоставляет следующие функциональные возможности:

- статическое маскирование (Static Masking): безвозвратно замаскировать все персональные данные, хранящиеся в БД, заменив их другими значениями, сохранив структуру для дальнейшего анализа;

- динамическое маскирование (Dynamic Masking): включить «прозрачную» маскировку для определённых (MASKED) пользователей, чтобы они не имели возможности доступа к маскируемым реальным персональным данным;

- анонимные дампы (Anonymous Dumps): экспортировать замаскированную версию данных в внешний SQL-файл. SQL-файл с замаскированными данными возможно использовать для тестов или передачи другим пользователям;

- маскирующие представления (Masking Views): создание специальных представлений (views), в которых конфиденциальные поля уже замаскированы;

- маскирующие обертки данных (Masking Data Wrappers): применение правил маскировки к данным, поступающим в БД из внешних источников.

> Кроме указанных пяти способов, также существуют конкретные функции маскировки, используемые для определенных полей таблиц, такие как:

- рандомизация;

- фальсификация;

- частичное скрытие;

- перестановка;

- искажение.

> Рандомизация заменяет конфиденциальные данные случайными, но правдоподобными значениями. Цель состоит в том, чтобы исключить возможность какой-либо идентификации по записи данных, оставляя её пригодной для тестирования, анализа и обработки данных.
>
> Перестановка перемешивает значения в рамках столбца. Исходные данные могут быть восстановлены, если алгоритм перестановки будет расшифрован.
>
> Частичное скрытие заменяет часть значения, а часть данных оставляет нетронутыми.
>
> Например: номер кредитной карты может быть заменён на «40XX XXXX XXXX XX96»

## Функции маскирования данных

## Полная маскировка (замена исходных данных фиксированным значением)

> При полной маскировке исходные данные могут быть полностью заменены на определенный фиксированный набор символов.
>
> Замена на фиксированное значение описана в п.п. [4.2.2](#замена-данных-запроса-фиксированным-значением) данного руководства.
>
> Полная маскировка данных возможна при использовании синтаксической конструкции:
>
> MASKED WITH VALUE \$\$текст\$\$
>
> Или
>
> \$\$MASKED WITH VALUE 'текст'\$\$
>
> В данном случае символы экранирования (\$\$) находятся снаружи от маскирующего значения.

## <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image1.png" style="width:0.25in;height:0.24999in" />Равнозначные примеры:

> MASKED WITH VALUE \$\$CONFIDENTIAL\$\$
>
> \$\$MASKED WITH VALUE 'CONFIDENTIAL'\$\$

## Частичная маскировка данных

> Частичная маскировка данных заключается в том, что часть оригинального значения остается видимой, а другая часть скрывается.
>
> Таблица 3.1 – Функции частичной маскировки данных

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 35%" />
<col style="width: 25%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Функция</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Пример</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>anon.partial(original_value,n1,text,n2)</p>
</blockquote></td>
<td><blockquote>
<p>Маскирование части символов, original_value -</p>
</blockquote></td>
<td><blockquote>
<p>anon.partial(postcode,1,$$****$$,1)</p>
<p>→ заменить значение столбца</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 35%" />
<col style="width: 25%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th></th>
<th></th>
<th style="text-align: left;"><blockquote>
<p>значение или имя столбца таблицы, которое будет искажено, n1 и n2 - количество не маскируемых символов в начале и конце строки, text - набор символов для подмены значения</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>postcode на ****, оставив видимыми первый и последний символы, например так 6****5</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>anon.partial_email(mail_value)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Функция для маскировки адреса электронной почты, mail_value - адрес электронной почты</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.partial_email(email) → заменяет значение столбца email на ******, оставляя видимыми по 2 первых символа, например так da******@gm******.com</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Искажение исходных данных

> Искажение исходных данных возможно применять к числовым значениям или датам в определенных пределах.
>
> Например, можно скрыть день рождения, заменив его случайной датой в пределах ±1 месяц. Такое искажение скроет персональные данные, но практически не повлияет на аналитические отчеты (например анализ возрастных групп покупателей).
>
> Таблица 3.2 – Функции искажения исходных данных

<table style="width:100%;">
<colgroup>
<col style="width: 5%" />
<col style="width: 35%" />
<col style="width: 25%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Функция</strong></p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Пример</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>anon.noise(original_value,ratio)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Искажение числовых значений, original_value - значение или имя столбца таблицы, которое будет искажено, ratio - коэффициент искажения</p>
</blockquote></td>
<td><blockquote>
<p>anon.noise(salary,0.33) → изменить значения столбца salary на ±33%</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>anon.dnoise(original_value,interval)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Искажение даты, original_value - значение или имя столбца таблицы, которое будет искажено, interaval - интервал сдвига</p>
</blockquote></td>
<td><blockquote>
<p>anon.dnoise(date, '1 month') → изменить значения столбца date на</p>
<p>±1 месяц</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image2.png" style="width:0.25139in;height:0.25139in" />Функции маскирования «noise()» уязвимы для повторных атак, особенно при использовании «динамического маскирования». Пользователь под маской может угадать исходное значение, запросив его замаскированное значение
>
> несколько раз, а затем просто использовать «AVG()» функцию для получения приближенного значения.
>
> Вкратце, эти функции лучше всего подходят для «анонимных дампов» и
>
> «статического маскирования». Их следует избегать при использовании «динамического маскирования».

## Генерация случайных данных

> Генерация абсолютно случайных данных.
>
> Выделяются следующие группы генерации случайных данных:

- Простая генерация;

- Значение в определенном интервале;

- Из заданного массива;

- Из перечисляемого типа ENUM;

- Значение из диапазона (RANGE);

- Из последовательности (sequence).

> Таблица 3.3 – Функции генерации случайных данных

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 29%" />
<col style="width: 30%" />
<col style="width: 2%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Функция</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: center;"><blockquote>
<p><strong>Пример</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="5" style="text-align: center;"><blockquote>
<p><strong>Простая генерация</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>anon.random_date()</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Возвращает случайную дату</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>anon.random_date() → случайная дата</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>2</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>anon.random_string(n)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Случайная строка, n -</p>
<p>количество символов</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>anon.random_string(10) → случайная строка из 10 символов</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>3</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>anon.random_zip()</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Случайный 5-значньй цифровой код</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>anon.random_zip() → 5-значньй цифровой код</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>4</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>anon.random_phone(p)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Случайный 9-значный телефонный номер, p - префикс номера</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>anon.random_phone('+79') → номер, начинающийся на +79</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>5</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>anon.random_hash(seed)</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Случайный хеш строки, seed - срока</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>anon.random_hash('3Se6j') → случайный хеш</p>
</blockquote></td>
</tr>
<tr>
<td colspan="5" style="text-align: center;"><blockquote>
<p><strong>Генерация значения из определенного интервала</strong></p>
</blockquote></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><blockquote>
<p>№ изменения:</p>
</blockquote></td>
<td colspan="2" style="text-align: center;"><blockquote>
<p>Подпись отв. лица:</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>Дата внесения изм:</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 28%" />
<col style="width: 30%" />
<col style="width: 36%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p>6</p>
</blockquote></th>
<th><blockquote>
<p>anon.random_date_between(d 1,d2)</p>
</blockquote></th>
<th><blockquote>
<p>Случайная дата в интервале между d1 и d2</p>
</blockquote></th>
<th><blockquote>
<p>anon.random_date_between('2024-01-01','2024-12-31') → случайная дата 2024 года</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>7</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_int_between(i1,i 2)</p>
</blockquote></td>
<td><blockquote>
<p>Случайное число INT в интервале между i1 и i2</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_int_between(1,10) → случайное число от 1 до 10</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>8</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_bigint_between( b1,b2)</p>
</blockquote></td>
<td><blockquote>
<p>Случайное число BIGINT в интервале между b1 и b2</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_bigint_between(10,1000</p>
<p>) → случайное число от 10 до 1000</p>
</blockquote></td>
</tr>
<tr>
<td colspan="4" style="text-align: center;"><blockquote>
<p><strong>Генерация из массива</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>9</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in(ARRAY[n1,n 2,...,nX]))</p>
</blockquote></td>
<td><blockquote>
<p>Случайный элемент из массива от n1 до nX</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.random_in(ARRAY['red','green',' blue']) → случайный цвет из 3 элементов массива</p>
</blockquote></td>
</tr>
<tr>
<td colspan="4" style="text-align: center;"><blockquote>
<p><strong>Случайный выбор из перечисляемого типа ENUM</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>10</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_enum(var_of</p>
<p>_an_enum_type)</p>
</blockquote></td>
<td><blockquote>
<p>Случайный элемент из перечисляемого типа ENUM</p>
</blockquote></td>
<td><blockquote>
<p>CREATE TYPE card AS ENUM</p>
<p>('visa', 'mastercard', 'unionpay');</p>
<p>anon.random_in_enum(NULL::CARD</p>
<p>) → случайный выбор из типа CARD</p>
</blockquote></td>
</tr>
<tr>
<td colspan="4" style="text-align: center;"><blockquote>
<p><strong>Выбор случайного значения из диапазона (RANGE)</strong></p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>11</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_int4range('[n 1,n2)')</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Случайное число INT от n1 (включительно) до n2 (исключается)</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_int4range('[5,6)') → вернется число INT равное 5</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>12</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_int8range('(n 1,n2]')</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Случайное число BIGINT от n1 (исключается) до n2 (включительно)</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_int8range('(6,7]') → вернется число BIGINT равное 7</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>13</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_numrange('[n 1,n2]')</p>
</blockquote></td>
<td><blockquote>
<p>Случайное число NUMERIC между n1 и n2</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_numrange('[0.1,0.9]')</p>
<p>→ число NUMERIC между 0.1 и 0.9</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>14</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_daterange('[d 1,d2)')</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Случайная дата от d1 (включительно) до d2 (исключается)</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_daterange('[2001-01-01, 2002-01-01)') → дата из 2001 года</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>15</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_tsrange('[t1,t 2]')</p>
</blockquote></td>
<td><blockquote>
<p>Случайная дата в формате TIMESTAMP между t1 и t2</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_tsrange('[2022-10-01,2022-10-31]') → случайный TIMESTAMP в пределах октября 2022</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>16</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_tstzrange('[t1</p>
<p>,t2]')</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Случайная дата в формате TIMESTAMP между t1 и t2 с часовым поясом (TIMEZONE)</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_in_tstzrange('[2022-10-01,2022-10-31]') → случайный TIMESTAMP с часовым поясом</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 28%" />
<col style="width: 30%" />
<col style="width: 36%" />
</colgroup>
<thead>
<tr>
<th colspan="4" style="text-align: center;"><blockquote>
<p><strong>Генерация последовательных значений (sequence)</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><blockquote>
<p>17</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_id()</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Случайное уникальное значение типа BIGINT, каждый вызов значение увеличивается, подобно nextval()</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_id() → случайный последовательный BIGINT</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>18</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_id_int()</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Случайное уникальное значение типа INT, каждый вызов значение увеличивается, подобно nextval()</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_id_int() → случайный последовательный INT</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;"><blockquote>
<p>19</p>
</blockquote></td>
<td><blockquote>
<p>anon.random_id_small_int()</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Случайное уникальное значение типа SMALLINT, каждый вызов значение увеличивается, подобно nextval()</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.random_id_small_int() → случайный последовательный SMALLINT</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image1.png" style="width:0.25in;height:0.25in" /> Символы '\[' и '\]' – означают включение значения в диапазон. Символы '(' и ')' – означают исключение значения в диапазона.
>
> Например, (anon.random_in_int4range('\[n1,n2)') – случайное число INT от n1 (включительно) до n2 (исключается).
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image1.png" style="width:0.25in;height:0.25in" /> Невозможно получить случайное значение из диапазона с бесконечной границей. Например:
>
> anon.random_in_int4range('\[2022,)')
>
> возвращается NULL.
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image2.png" style="width:0.25139in;height:0.25139in" /> Каждый вызов функций генерации последовательных значений будет возвращать увеличенное значение, во многом похожее на функцию \[nextval()\].
>
> В любой момент вы можете сбросить текущее значение последовательности, заменив его новым значением. Например:
>
> SELECT pg_catalog.setval('anon.random_id_seq', 42);

## Псевдонимизация

> Псевдонимизация создает реалистичные значения (псевдонимы), связанные с исходным значением.
>
> Данная функция всегда будут возвращать одно и то же значение. В этом состоит основное отличие псевдонимизации от фальсификации.
>
> При вызове любой из функций псевдонимизации возможно использование аргумента salt. Аргумент salt предназначен для увеличения сложности генерируемых данных и минимизации атак по словарю. Если соль (salt) не указана в аргументе, вместо неё используется значение общего параметра anon.salt.
>
> Таблица 3.4 – Функции псевдонимизации исходных данных

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 33%" />
<col style="width: 28%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Функция</strong></p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Пример</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>anon.pseudo_first_name(seed,salt)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Псевдоним имени, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.pseudo_first_name(fname) → псевдоним имени для столбца fname</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>anon.pseudo_last_name(seed,salt)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Псевдоним фамилии, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.pseudo_last_name(lname) → псевдоним фамилии для столбца lname</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>anon.pseudo_email(seed,salt)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Псевдоним электронной почты, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.pseudo_email(email) → случайный действительный электронный адрес для столбца email</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>anon.pseudo_city(seed,salt)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Псевдоним города, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.pseudo_city(work_city) → случайное название города для столбца work_city</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>anon.pseudo_country(seed,salt)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Псевдоним страны, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.pseudo_country(user_country)</p>
<p>→ случайное название страны для столбца user_country</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>6</p>
</blockquote></td>
<td><blockquote>
<p>anon.pseudo_company(seed,salt)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Псевдоним компании, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.pseudo_company(cname) → случайное название компании для столбца cname</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>7</p>
</blockquote></td>
<td><blockquote>
<p>anon.pseudo_iban(seed,salt)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Случайный действительный номер IBAN</p>
<p>(международный номер банковского счёта), seed - имя столбца таблицы, salt - необязательный аргумент</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.pseudo_iban(iban_cust) → случайный действительный номер IBAN для столбца iban_cust</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>8</p>
</blockquote></td>
<td><blockquote>
<p>anon.pseudo_siret(seed,salt)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Случайный действительный</p>
<p>14-значный номер SIRET, seed - имя столбца таблицы,</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.pseudo_siret(siret_code) → случайный действительный</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 33%" />
<col style="width: 28%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"></th>
<th></th>
<th style="text-align: left;"><blockquote>
<p>salt - необязательный аргумент</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>идентификатор SIRET для столбца siret_code</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">9</td>
<td><blockquote>
<p>anon.pseudo_shift()</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Сдвиг используя секретное значение (anon.shift) для псевдонимизации.</p>
<p>Секретное значение может быть инициализировано случайным образом с помощью anon.set_shift() или определено с помощью anon.set_shift(INT).</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.pseudo_shift(id) → сдвиг идентификатора первичного ключа</p>
</blockquote></td>
</tr>
<tr>
<td style="text-align: center;">10</td>
<td><blockquote>
<p>anon.pseudo_xor()</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Выполнение операции</p>
<p>«исключающее ИЛИ» используя секретное значение (anon.shift) для псевдонимизации.</p>
<p>Секретное значение может быть инициализировано случайным образом с помощью anon.set_shift() или определено с помощью anon.set_shift(INT).</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.pseudo_xor(id) → выполнение операции</p>
<p>«исключающее ИЛИ» над значением идентификатора первичного ключа</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image2.png" style="width:0.25139in;height:0.25139in" />Этот набор данных представлен на английском языке и очень мал (1000 значений для каждой категории). Если вы хотите использовать локализованные данные или загрузить определённый набор данных, ознакомьтесь с разделом [3.8](#пользовательские-функции-и-наборы-поддельных-данных) Пользовательские функции и наборы поддельных данных.

## Хэширование исходных данных

> Хеширование исходных данных не является допустимым методом маскирования. Тем не менее на практике иногда необходимо сгенерировать детерминированный хэш исходных данных.
>
> Например, в случае если таблицы связаны через пару первичного и внешнего ключа. В таком случае рекомендуется использовать функцию anon.hash(), а не функцию anon.digest(), так как, в этом случае, salt не будет отображаться в правиле маскирования.
>
> Таблица 3.5 – Функции хэширования исходных данных

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 30%" />
<col style="width: 31%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Функция</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Пример</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>anon.hash(value)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Текстовый хеш значения value, при этом будут использованы общие параметры anon.salt и anon.algorithm</p>
</blockquote></td>
<td><blockquote>
<p>anon.hash('Abc123') → хеш значения 'Abc123'</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>anon.digest(value,salt,algorithm)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Текстовый хеш значения value, с учетом переданных аргументов: salt - секретная соль, algorithm - алгоритм хеширования</p>
</blockquote></td>
<td><blockquote>
<p>anon.digest('Abc123','abcd','sha224')</p>
<p>→ хеш значения 'Abc123', по алгоритму sha224</p>
</blockquote></td>
</tr>
</tbody>
</table>

> Для того чтобы определить общие параметры функций хэширования необходимо использовать следующие запросы:
>
> ALTER DATABASE anon_db SET anon.salt TO '\[anon.salt\]';
>
> Где anon.salt – случайные символы, например xsfnjefnjsnfjsnf.
>
> ALTER DATABASE anon_db SET anon.algorithm TO '\[anon.algorithm\]';
>
> Где algorithm – используемый алгоритм хэширования, например md5, sha1, sha224, sha256, sha384, sha512.
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image2.png" style="width:0.25139in;height:0.25139in" />Функции хеширования не будут работать, если входные данные содержат неэкранированный символ (особенно одинарный обратный слеш). В большинстве случаев это признак ошибки в приложении, как правило, когда входные данные не проходят надлежащую очистку.

## Обобщение исходных данных

> Обобщение исходных данных заключается в замене исходного значения диапазоном, содержащим это значение. То есть, информацию: «Максиму 42 года», можно обобщить как:
>
> «Максиму от 40 до 50 лет».
>
> Таблица 3.6 – Функции обобщения исходных данных

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 31%" />
<col style="width: 31%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Функция</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Пример</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>anon.generalize_tsrange(date,step)</p>
</blockquote></td>
<td><blockquote>
<p>Функция обобщения даты date, возвращает диапазон дат,</p>
</blockquote></td>
<td><blockquote>
<p>anon.generalize_tsrange('1952-07-17','decade') → этот пример</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 31%" />
<col style="width: 31%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Функция</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Пример</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td style="text-align: left;"><blockquote>
<p>определенный аргументом step - это период: день, месяц, год и т.д.</p>
</blockquote></td>
<td><blockquote>
<p>вернет диапазон "1950-01-01</p>
<p>00:00:00","1960-01-01 00:00:00"</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>anon.generalize_int4range(value, step)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Функция вернет диапазон типа integer, value - числовое значение, step - размер диапазона</p>
</blockquote></td>
<td><blockquote>
<p>anon.generalize_int4range(55, '10')</p>
<p>→ этот пример вернет диапазон 50,60</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>anon.generalize_int8range(value, step)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Функция вернет диапазон типа bigint, value - числовое значение, step - размер диапазона</p>
</blockquote></td>
<td><blockquote>
<p>anon.generalize_int8range(5005, 200) → этот пример вернет диапазон 5000,5200</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>anon.generalize_numrange(value, step)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Функция вернет диапазон типа numeric, value - числовое значение, step - размер диапазона</p>
</blockquote></td>
<td><blockquote>
<p>anon.generalize_numrange(5.47, 2)</p>
<p>→ этот пример вернет диапазон 4,6</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Базовая фальсификация исходных данных

> Фальсификация - замена данных случайными, но правдоподобными значениями.
>
> В отличие от псевдонимизации, каждый запрос данных будет возвращать новое случайное значение. Цель состоит в том, чтобы избежать какой-либо идентификации по записи данных, оставляя её при этом пригодной для тестирования, анализа и обработки данных.
>
> Кроме фальсификации таких данных, как имя, фамилия, название компании и так далее, компонент, позволяет фальсифицировать текстовые данные подходящим по размеру случайным текстом.
>
> Таблица 3.7 – Функции базовой фальсификации исходных данных

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 30%" />
<col style="width: 32%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Функция</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Пример</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_address()</p>
</blockquote></td>
<td><blockquote>
<p>Функция вернет случайный почтовый адрес</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.fake_address() → случайный адрес, например: 743 Wade Point Suite 171, Lake</p>
<p>Connie, MT 92286</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_city()</p>
</blockquote></td>
<td><blockquote>
<p>Функция вернет случайное название города</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.fake_city() → случайное название города</p>
</blockquote></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 30%" />
<col style="width: 32%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>3</p>
</blockquote></th>
<th><blockquote>
<p>anon.fake_country()</p>
</blockquote></th>
<th><blockquote>
<p>Функция вернет случайное название страны</p>
</blockquote></th>
<th><blockquote>
<p>anon.fake_country() → случайное название страны</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_company()</p>
</blockquote></td>
<td><blockquote>
<p>Функция вернет случайное название компании</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_company() → случайное название компании</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_email()</p>
</blockquote></td>
<td><blockquote>
<p>Функция вернет случайный адрес электронной почты</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.fake_email() → случайный адрес электронной почты</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>6</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_first_name()</p>
</blockquote></td>
<td><blockquote>
<p>Функция вернет случайное имя</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_first_name() → случайное имя</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>7</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_last_name()</p>
</blockquote></td>
<td><blockquote>
<p>Функция вернет случайную фамилию</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_last_name() → случайная фамилия</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>8</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_postcode()</p>
</blockquote></td>
<td><blockquote>
<p>Функция вернет случайный 5-значный почтовый код</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_postcode() → 5-значный почтовый код</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>9</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_iban()</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Случайный действительный номер IBAN (международный номер банковского счёта)</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_iban() → случайный действительный номер IBAN</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>10</p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_siret()</p>
</blockquote></td>
<td><blockquote>
<p>Млучайный действительный 14-значный номер <a href="https://en.wikipedia.org/wiki/SIRET_code"><u>SIRET</u></a></p>
</blockquote></td>
<td><blockquote>
<p>anon.fake_siret() → случайный действительный номер SIRET</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>11</p>
</blockquote></td>
<td><blockquote>
<p>anon.lorem_ipsum(paragraphs</p>
<p>:= value)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Функция вернет несколько параграфов случайного текста, количество</p>
<p>определяется <em>value</em></p>
</blockquote></td>
<td><blockquote>
<p>anon.lorem_ipsum(paragraphs</p>
<p>:= 4) → 4 параграфа случайного текста</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>12</p>
</blockquote></td>
<td><blockquote>
<p>anon.lorem_ipsum(words := value)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Функция вернет несколько случайных слов, количество определяется <em>value</em></p>
</blockquote></td>
<td><blockquote>
<p>anon.lorem_ipsum(words := 20)</p>
<p>→ 20 случайных слов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>13</p>
</blockquote></td>
<td><blockquote>
<p>anon.lorem_ipsum(characters</p>
<p>:= value)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Функция вернет случайную строку, длина которой определяется <em>value</em></p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>anon.lorem_ipsum(characters := anon.length(table.column)) → вернет то же количество символов, что и в исходном столбце</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Расширенная фальсификация исходных данных

> Расширенная фальсификация основана на функции dummy\_\*, которая насчитывает более 70 параметров, таких как: случайный город, IP-адрес, фамилия, имя и т.д.
>
> Функция dummy\_\* позиционируется как более продвинутая, по сравнению с fake\_\*.
>
> Локализация в компоненте доступна только для функций dummy\_\*. Это достигается добавлением слова \_locale к названию функции (например dummy_last_name_locale('fr_FR') вернет французскую фамилию).
>
> На данный момент доступны следующие варианты локализации фальсификации данных: en_US (по умолчанию), ar_SA, fr_FR, ja_JP, pt_BR, zh_CN, zh_TW.

## Маскирование исходных данных с условием

> В некоторых ситуациях может потребоваться применить маскирующий фильтр только для определенных значений или для ограниченного числа строк в таблице.
>
> Например, если надо замаскировать только строки, содержащие значения, при этом строки, содержащие NULL, не маскировать. Для этого предназначена функция anon.ternary, которая работает как классическое условие: CASE WHEN x THEN y ELSE z.
>
> Таблица 3.8 – Функция маскирования исходных данных с условием

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 34%" />
<col style="width: 27%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p><strong>№</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Функция</strong></p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Пример</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td style="text-align: center;"><blockquote>
<p>anon.ternary(condition,value1,value2)</p>
</blockquote></td>
<td style="text-align: left;"><blockquote>
<p>Если выполняется условие condition, то выбирается значение value1, иначе value2</p>
</blockquote></td>
<td><blockquote>
<p>anon.ternary(score IS NULL, NULL,</p>
<p>anon.random_int_between(0,100))</p>
<p>→ изменить значения столбца на случайное число (от 0 до 100), если его значение не NULL.</p>
</blockquote></td>
</tr>
</tbody>
</table>

> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image2.png" style="width:0.25139in;height:0.25139in" />Условное маскирование может создать частично детерминированную «связь» между исходными и замаскированными данными. Эта связь может быть использована для извлечения персонифицированных данных из замаскированных.

## Пользовательские функции и наборы поддельных данных

> При работе с пользовательскими функциями необходимо создать пользователя с маской. Для этого необходимо выполнить следующий запрос:
>
> CREATE ROLE maskuser LOGIN;

## Пользовательские наборы данных

> По умолчанию расширение поставляется с небольшим набором поддельных данных на английском языке (address.csv, company.csv, email.csv, iban.csv, identifiers_category.csv,
>
> lorem_ipsum.csv, siret.csv, city.csv, country.csv, first_name.csv, identifier.csv, last_name.csv, postcode.csv).
>
> Набор файлов поддельных данных на английском языке расположен в каталоге
>
> /usr/jatoba-\<ver\>/share/extension/anon/.
>
> Для того чтобы функция anon.fake\_\* работала с пользовательскими данными, необходимо подготовить собственные наборы по образцу из файлов, затем их можно импортировать из файлов в формате CSV с помощью запроса:
>
> SELECT anon.init('/path/to/custom_csv_files/');
>
> Где /path/to/custom_csv_files/ - путь к каталогу с набором пользовательских данных.

## Пользовательские функции маскирования данных

> Кроме поставляемых с расширением функций, есть возможность создавать собственные функции для маскирования данных.
>
> Для пользовательской функции потребуется создать таблицу, которая будет служить справочником значений:
>
> CREATE TABLE anon.ru_city (id INT, city TEXT); INSERT INTO anon.ru_city VALUES
>
> (1,'Москва'),
>
> (2,'Санкт-Петербург'),
>
> (3,'Екатеринбург');
>
> GRANT SELECT ON anon.ru_city TO maskuser; GRANT SELECT ON public.users TO maskuser;
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image9.jpeg" style="width:5.5301in;height:2.31875in" />
>
> Рисунок 3.1 – Создание таблицы-справочника значений
>
> В данном руководстве в качестве примера предлагается создать функцию маскирования исходных данных, которая будет возвращать названия российских городов и применить созданную функцию для динамического маскирования таблицы:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image10.jpeg" style="width:5.5562in;height:2.00375in" />

> CREATE FUNCTION anon.fake_ru_city() RETURNS TEXT
>
> VOLATILE LANGUAGE SQL
>
> AS \$func\$
>
> SELECT city FROM anon.ru_city ORDER BY RANDOM() LIMIT 1
>
> \$func\$;
>
> Рисунок 3.2 – Создание функции anon.fake_ru_city
>
> Создание таблицы, для которой будет применяться пользовательская функция anon.fake_ru_city:
>
> CREATE TABLE users
>
> (id INT, login TEXT, city TEXT); INSERT INTO users
>
> VALUES
>
> (1,'divanov','Брянск'),
>
> (2,'emilkina','Уфа'),
>
> (3,'afonin','Суздаль');

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image11.jpeg" style="width:5.55628in;height:2.00375in" />

> Рисунок 3.3 – Создание таблицы с исходными данными для маскирования
>
> Далее необходимо применить правило маскирования к столбцу users.city, которое будет использовать пользовательскую функцию anon.fake_ru_city:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image12.jpeg" style="width:5.55926in;height:1.05in" />

> SECURITY LABEL FOR anon ON COLUMN users.city IS 'MASKED WITH FUNCTION anon.fake_ru_city()'; SELECT anon.anonymize_column('users','city');
>
> Рисунок 3.4 – Применение правил маскирования данных к таблице
>
> После активации правила маскирования необходимо убедится в том, что данные из исходной таблицы users успешно маскируются:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th colspan="3"><blockquote>
<p>\c - maskuser</p>
<p>You are now connected to database "anon_db" as user "maskuser".</p>
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

SELECT \* FROM users;

id \| login

> \+

\|

\+

city

1.  \| divanov \| Екатеринбург

2.  \| emilkina \| Санкт-Петербург

3.  \| afonin \| Москва

> Как можно увидеть, данные в столбце users.city выводятся данные, которые маскируют исходные, подменяя значения из таблицы-справочника anon.ru_city.

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image13.jpeg" style="width:6.34713in;height:2.2825in" />

> Рисунок 3.5 – Проверка маскирования исходных данных при использовании пользовательской функции anon.fake_ru_city

# ПРИМЕР ИСПОЛЬЗОВАНИЯ

## Статическое маскирование данных

> Статический метод подменяет данные другими значениями.
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image2.png" style="width:0.25138in;height:0.25027in" />Статический метод маскировки безвозвратно изменяет данные в таблицах или всей БД.
>
> Статическое маскирование данных в случае, если для столбца таблицы есть ограничение внешнего ключа (например, references city(name), где city - список городов) может привести к ошибке, если исходное значение заменяется из маскирующего набора данных, которого нет во внешнем ключе. Это следствие нарушения ограничений внешнего ключа. Если маскирующее значение совпадает с одним из элементов внешнего ключа, то статическое маскирование не приводит к возникновению ошибок.
>
> В качестве примера будет представлен пример с несколькими функциями маскировки:
>
> CREATE TABLE employees ( id SERIAL,
>
> firstname TEXT, lastname TEXT, company TEXT, postcode TEXT
>
> );
>
> INSERT INTO employees VALUES
>
> (111,'Maria','Belova','Bank of Saratov','405657'),
>
> (222,'Pavel','Petrov','Head and Hands','601245');
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image14.jpeg" style="width:4.89487in;height:2.30479in" />
>
> Рисунок 4.1 – Создание таблицы с исходными данными
>
> Таблица employees будет содержать информацию, представленную на рисунке [4.2](#_bookmark28).

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image15.jpeg" style="width:4.85931in;height:1.84948in" />

> <span id="_bookmark28" class="anchor"></span>Рисунок 4.2 – Исходные данные в таблице employees
>
> В качестве маскируемых данных будет выбран столбец postcode. Для этого определяется правило статической маскировки следующего вида:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image16.jpeg" style="width:5.51683in;height:0.98312in" />

> SECURITY LABEL FOR anon ON COLUMN employees.postcode
>
> IS 'MASKED WITH FUNCTION anon.partial(postcode,1,\$\$\*\*\*\*\$\$,1)';
>
> Рисунок 4.3 – Регистрация правила статического маскирования исходных данных таблицы employees
>
> Данное правило заменяет знаками звездочка (\*) символы между первым и последним знаком в столбце postcode.
>
> После определения правила статической маскировки она применяется к столбцу postcode с помощью следующего запроса:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image17.jpeg" style="width:5.73913in;height:1.47656in" />

> SELECT anon.anonymize_column('employees','postcode');
>
> Рисунок 4.4 – Применение правила anon.anonymize_column статического маскирования исходных данных таблицы employees к столбцу postcode
>
> С целью проверки статической маскировки можно повторно выполнить запрос на чтение данных из таблицы employees:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image18.jpeg" style="width:5.72904in;height:1.62844in" />

> Рисунок 4.5 –Данные таблицы employees после использования статического маскирования к столбцу postcode
>
> Как видно из результата выполнения запроса все значения в столбце postcode заменены на маскированные данные вида «x\*\*\*\*x» в соответствии с определенным ранее правилом статической маскировки.
>
> Дополнительно можно выполнить статическую маскировку других столбцов таблицы employees определяя новые правила, например маскировка фамилии или названия компании (столбцы lastname и company):
>
> SECURITY LABEL FOR anon ON COLUMN employees.lastname IS 'MASKED WITH FUNCTION anon.dummy_last_name()'; SECURITY LABEL FOR anon ON COLUMN employees.company
>
> IS 'MASKED WITH FUNCTION anon.fake_company()';

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image19.png" style="width:5.96998in;height:1.42187in" />

> Рисунок 4.6 –Дополнительные правила маскирования исходных данных к таблице employees
>
> После этого необходимо выполнить запросы на применение указанных правил к данным, содержащимся в таблице employees:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image20.jpeg" style="width:5.88378in;height:1.40365in" />

> SELECT anon.anonymize_table('employees');
>
> Рисунок 4.7 –Дополнительные правила маскирования исходных данных к таблице employees
>
> Либо статическая маскировка данных во всех таблицах БД в соответствии с определяемыми правилами:
>
> SELECT anon.anonymize_database();
>
> С целью проверки статической маскировки можно повторно выполнить запрос на чтение данных из таблицы employees:
>
> SELECT \* FROM employees;
>
> Как видно из рисунка [4.8](#_bookmark29), в таблице employees столбцы lastname, company содержат новые данные.
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image21.jpeg" style="width:6.25251in;height:1.64854in" />
>
> <span id="_bookmark29" class="anchor"></span>Рисунок 4.8 – Данные таблицы employees после использования статического маскирования к столбцам lastname, company, postcode

## Динамическое маскирование данных

> При динамическом маскировании, данные для обычного пользователя представляются в исходном виде, а для пользователя с маской, соответственно в замаскированном.
>
> Динамическое маскирование можно использовать кластере компонента «jaDog» при чтении с синхронной реплики.
>
> Динамическое маскирование данных для секционированных таблиц устанавливается для самой секционированной таблицы, но не для секций этой таблицы.
>
> Динамическое маскирование в запросах вида SELECT \* FROM table WHERE colname
>
> = 'значение', в случае если colname имеет динамическое маскирование. То есть столбец, может быть, как проиндексирован, так и нет. Если в запросе, где условием выборки будет значение из замаскированного столбца, подставляется существующее значение из оригинальной таблицы, то результатом будет пустая выборка, так как оригинальные значения подменяются маскированными. Если же подставить значение из набора данных, которыми маскируется столбец, то получим ненулевую выборку данных. Индексация столбца с маскируемыми данными на конечный результат не влияет.
>
> В данном подразделе будет рассмотрено несколько примеров использования динамической маскировки данных.
>
> Включение динамического маскирования данных в общем случае производится с помощью выполнения следующего запроса:
>
> ALTER DATABASE anon_db SET anon.transparent_dynamic_masking TO true;
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image22.png" style="width:6.24407in;height:1.03354in" />
>
> Рисунок 4.9 – Включение динамического маскирования исходных данных
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image1.png" style="width:0.25in;height:0.25in" />При использовании динамической маскировки исходных данных **не используются** следующие запросы:
>
> SELECT anon.anonymize_table('table_name'); SELECT anon.anonymize_database('database_name'); SELECT anon.anonymize_column(' column_name',' column_name');

## Правило маскирования данных пользователя с маской

> Пользователь с маской создается, так же как это указано в п.п. [3.8](#пользовательские-функции-и-наборы-поддельных-данных). Применить правило маскирования данных к созданному пользователю;
>
> SECURITY LABEL FOR anon ON ROLE maskuser IS 'MASKED';

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image23.png" style="width:6.35415in;height:1.20177in" />

> Рисунок 4.10 – Создание пользователя с максой и применение для него правил маскирования исходных данных
>
> Определить права доступа пользователя с маской к схеме БД и таблицам:
>
> GRANT USAGE ON SCHEMA anon TO maskuser; GRANT USAGE ON SCHEMA public TO maskuser;
>
> GRANT SELECT ON ALL TABLES IN SCHEMA anon TO maskuser; GRANT SELECT ON ALL TABLES IN SCHEMA public TO maskuser;
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image24.png" style="width:6.34605in;height:1.19312in" />
>
> Рисунок 4.11 – Определить права доступа пользователя с маской к схеме БД и таблицам

## Замена данных запроса фиксированным значением

> Правило замены данных запроса фиксированным значением активируется следующим образом:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image25.jpeg" style="width:6.49893in;height:1.07135in" />

> SECURITY LABEL FOR anon ON COLUMN employees.lastname IS 'MASKED WITH VALUE \$\$CONFIDENTIAL\$\$';
>
> Рисунок 4.12 – Регистрация правила динамического маскирования исходных данных таблицы employees в столбце lastname
>
> Другой вариант экранирования фиксированного значения выглядит следующим образом:
>
> SECURITY LABEL FOR anon ON COLUMN employees.lastname IS \$\$MASKED WITH VALUE 'CONFIDENTIAL'\$\$;
>
> При выполнении запроса от имени пользователя maskuser в столбце lastname будет отображаться замаскированное значение «CONFIDENTIAL».
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image26.png" style="width:6.42383in;height:2.13552in" />
>
> Рисунок 4.13 – Данные таблицы employees после использования динамического маскирования к столбцам lastname при выполнении запроса от имени пользователя maskuser

## Замена символами исходных данных

> Правило замены исходных данных запроса на символы активируется с помощью выполнения следующего SQL-запроса:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image27.jpeg" style="width:6.55206in;height:1.07135in" />

> SECURITY LABEL FOR anon ON COLUMN employees.postcode
>
> IS 'MASKED WITH FUNCTION anon.partial(postcode,1,\$\$\*\*\*\*\$\$,1)';
>
> Рисунок 4.14 – Регистрация правила динамического маскирования исходных данных таблицы employees в столбце postcode

## Замена исходных данных на случайное правдоподобное значение

> В данном правиле маскирования используется функция dummy\_\*.
>
> Функция dummy\_\* при каждом запросе данных подставляет разные правдоподобные значения.
>
> Правило для замены данных запроса на случайное правдоподобное значение активируется с помощью выполнения следующим образом:
>
> SECURITY LABEL FOR anon ON COLUMN employees.company IS 'MASKED WITH FUNCTION anon.dummy_company_name()';
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image28.jpeg" style="width:6.55207in;height:1.07135in" />
>
> Рисунок 4.15 – Регистрация правила динамического маскирования исходных данных таблицы employees в столбце company

## Замена исходных данных на псевдоним

> В данном правиле маскирования используется функция pseudo\_\*. Функция pseudo\_\* подменяет исходные данные на псевдоним.
>
> Псевдоним остается неизменным для каждого запроса данных. Иными словами, псевдонимизация — это способ защиты конфиденциальной информации, при котором, в отличие от замаскированных данных (функции dummy\_\* и fake\_\*), псевдонимизированные данные (pseudo\_\*) в некоторой степени «связаны» с реальными данными в БД.
>
> Правило для замены данных запроса на псевдонимизированные данные активируется с помощью выполнения следующим образом:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image29.jpeg" style="width:6.55206in;height:1.07135in" />

> SECURITY LABEL FOR anon ON COLUMN employees.firstname
>
> IS 'MASKED WITH FUNCTION anon.pseudo_first_name(firstname)';
>
> Рисунок 4.16 – Регистрация правила динамического маскирования исходных данных таблицы employees в столбце firstname

## Результат применения динамического маскирования

> После определения одного или нескольких правил динамического маскирования данных таблица, к которой имеет доступ пользователь без маски, будет иметь вид, представленный на рисунке [4.17](#_bookmark37).
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image30.jpeg" style="width:5.58567in;height:1.62844in" />
>
> <span id="_bookmark37" class="anchor"></span>Рисунок 4.17 – Исходные данные в таблице employees
>
> В тоже время, для пользователя с маской эта таблица будет иметь вид, содержащий замаскированные данные (см. рисунок [4.18](#_bookmark38)).

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image31.png" style="width:6.41267in;height:2.00687in" />

> <span id="_bookmark38" class="anchor"></span>Рисунок 4.18 – Данные таблицы employees после использования динамического маскирования столбцов lastname, company и postcode при выполнении запроса от имени пользователя maskuser
>
> При выполнении пользователем с маской повторного запроса результат будет содержать новые маскированные данные (столбец company) и те же самые псевдонимизированные данные (столбец firstname):

\| CONFIDENTIAL \| Zulauf and Abbott LLC \| 6\*\*\*\*5

\| 4\*\*\*\*7

\| CONFIDENTIAL \| Erdman and Sons

111 \| Abigail

222 \| Steve

----+-----------+--------------+-----------------------+---------

\| postcode

company

\|

lastname

id \| firstname \|

SELECT \* FROM employees;

## Отключение правила динамической маскировки

> Для того чтобы отключить правило динамической маскировки необходимо выполнить следующий запрос:
>
> SECURITY LABEL FOR anon ON COLUMN employees.lastname IS NULL;

## Отключение правила динамической маскировки для пользователя

> Для того чтобы отключить правило динамической маскировки для пользователя с маской необходимо выполнить следующий запрос:
>
> SECURITY LABEL FOR anon ON ROLE maskuser IS NULL;

## Дамп с маскированными данными

> Дамп с маскированными данными является удобным средством передачи копии реальной БД для разработки, тестирования или внешним организациям, без риска раскрытия персональных данных, коммерческой тайны и других критических данных.

## Создания пользователя с маской для работы с дампом

> Создадим пользователя, который будет использовать функционал дампа с маскированными данными:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image32.jpeg" style="width:5.58555in;height:1.02094in" />

> CREATE ROLE anon_dumper LOGIN PASSWORD '\[password\]';
>
> Рисунок 4.19 – Создание пользователя с маской для работы с дампом Включение динамического маскирования данных с помощью выполнения
>
> следующего запроса:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image33.jpeg" style="width:6.41419in;height:0.91375in" />

> ALTER ROLE anon_dumper SET anon.transparent_dynamic_masking = True;
>
> Рисунок 4.20 – Включение динамического маскирования данных пользователя с маской для работы с дампом
>
> Включение правил маскирования данных для пользователя:
>
> SECURITY LABEL FOR anon ON ROLE anon_dumper IS 'MASKED';

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image34.jpeg" style="width:6.33966in;height:0.91198in" />

> Рисунок 4.21 – Включение правил маскирования данных для пользователя с маской для работы с дампом
>
> Для предоставления доступа к схеме данных и таблицам необходимо выполнить следующие запросы:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image35.png" style="width:6.41968in;height:1.89021in" />

> GRANT USAGE ON SCHEMA public TO anon_dumper;
>
> GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon_dumper; GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO anon_dumper; GRANT ALL ON ALL TABLES IN SCHEMA public TO anon_dumper;
>
> Рисунок 4.22 – SQL-запросы для предоставления доступа к схеме данных и таблицам

## Запуск создания дампа с маскированными данными

> Для того чтобы создать дамп, содержащий маскированные данные необходимо выполнить команду:
>
> postgres@node1:~\$ pg_dump \[db_name\] --user anon_dumper --no-security-labels --file=test_anonymized.sql

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image1.png" style="width:0.25in;height:0.24975in" />Команда pg_dump выполняется от имени пользователя postgres.

> В случае возникновения ошибок при создании дампа с маскированными данными необходимо обратится к п.п. [6.1](#ошибка-при-выгрузке-дампа-с-маскированными-данными-из-бд-в-режиме).

## Проверка маскировки данных в дампе

> После создания дампа необходимо убедится в том, что данные в нем замаскированы (столбцы firstname, company и postcode):

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image36.jpeg" style="width:6.72313in;height:2.42573in" />

COPY public.employees (id, firstname, lastname, company, postcode) FROM stdin;

111

222

Abigail Belova Jaskolski and Sons 4\*\*\*\*7

Steve

Petrov Christiansen and Heathcote Group 6\*\*\*\*5

> Рисунок 4.23 – Содержимое таблицы employees с замаскированными данными (столбцы firstname, company и postcode)

## Представления с маскированными данными

> Для описания работы с маскированным представлением необходимо создать таблицу customer:
>
> CREATE TABLE customer( id SERIAL,
>
> full_name TEXT, birth DATE, employer TEXT, postcode TEXT, fk_shop INTEGER
>
> );
>
> Заполнить таблицу customer данными:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image37.jpeg" style="width:5.43953in;height:2.42573in" />

> INSERT INTO customer VALUES
>
> (911,'Sergey Svetlakov','1977-12-12','STS', '750010',12),
>
> (312,'Mikhail Porechenkov','1969-03-02','NTV', '620086',423);
>
> Рисунок 4.24 – Создание таблицы customer и заполнение данными Убедится в корректности внесенных данных:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image38.png" style="width:6.71254in;height:1.80937in" />

SELECT \* FROM customer;

id

\|

\+

full_name

\| birth

\+

\| employer \| postcode \| fk_shop

\+

911 \| Sergey Svetlakov \| 1977-12-12 \| STS

312 \| Mikhail Porechenkov \| 1969-03-02 \| NTV

\+ +

\| 750010 \|

\| 620086 \|

12

423

> Рисунок 4.25 – Содержимое таблицы customer
>
> Создание представления с маскированием данных осуществляется при помощи следующего запроса:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image39.jpeg" style="width:6.26515in;height:2.16125in" />

> CREATE MATERIALIZED VIEW masked_customer AS SELECT
>
> id,
>
> 'CONFIDENTIAL'::TEXT AS full_name,
>
> anon.generalize_daterange(birth,'decade') AS birth, employer,
>
> anon.partial(postcode,2,\$\$\*\*\*\*\$\$,0) AS postcode, fk_shop
>
> FROM customer;
>
> Рисунок 4.26 – Создание представления masked_customer
>
> Вывод информации указанного представления masked_customer будет содержать информацию, скрывающую исходные данные из таблицы customer:

SELECT \* FROM masked_customer;

id

\|

\+

full_name

\|

\+

birth

\| employer \| postcode\| fk_shop

\+

\+

\+

\-

911 \| CONFIDENTIAL \| \[1970-01-01,1980-01-01) \| STS \| 75\*\*\*\* \| 12

312 \| CONFIDENTIAL \| \[1960-01-01,1970-01-01) \| NTV \| 62\*\*\*\* \| 423

> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image40.png" style="width:6.75861in;height:1.82948in" />
>
> Рисунок 4.27 – Замаскированное содержимое представления masked_customer

## Маскирующие обертки данных

> Принцип маскирующей обертки данных заключается в том, что СУБД используется в качестве «маскирующего прокси» с любым типом внешнего источника данных.
>
> Таким образом возможно применять правила маскирования к данным, хранящимся в CSV-файлах, в другой СУБД, в хранилище NoSQL, в каталоге LDAP и так далее.
>
> В приводимом примере источником данных будет файл журнала:
>
> cat /tmp/app.log
>
> 2025-03-24 08:25:32,sarah,10.0.0.45,view_dashboard
>
> 2025-03-24 09:15:00,mike,172.16.0.89,update_profile
>
> 2025-03-24 09:30:45,emma,192.168.2.200,download_report
>
> Здесь /tmp/app.log – путь и название файла журнала с данными.

## Подготовка к работе с внешним источником данных

> Для загрузки данных из внешнего источника необходимо воспользоваться расширением file_fdw:
>
> CREATE EXTENSION IF NOT EXISTS file_fdw;
>
> CREATE SERVER external_files FOREIGN DATA WRAPPER file_fdw;
>
> Создать новую схему данных для работы с внешним источником. В примере таблица будет называться files:
>
> CREATE SCHEMA files;
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image41.png" style="width:5.37066in;height:1.71437in" />
>
> Рисунок 4.28 – Создание и настройка расширения file_fdw, создание схемы данных files

## Создание внешней таблицы

> Столбцы внешней таблицы соответствуют содержимому файла журнала.
>
> Для работы с внешним источником данных необходимо создать таблицу и указать источник внешних данных:
>
> CREATE FOREIGN TABLE files.app_log (
>
> tms TIMESTAMP, login VARCHAR(255), ip INET,
>
> action TEXT
>
> )
>
> SERVER external_files
>
> OPTIONS (filename '/tmp/app.log', delimiter ',');
>
> Опция filename указывает путь и название внешнего источника данных для маскирования.
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image1.png" style="width:0.25in;height:0.25in" />К файлу внешнего источника данных должен быть обеспечен доступ для пользователя postgres.
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image42.jpeg" style="width:5.7925in;height:2.31875in" />
>
> Рисунок 4.29 – Создание внешней таблицы files.app_log
>
> Для предоставления доступа к схеме данных и таблицам необходимо выполнить следующие запросы:

<img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image43.png" style="width:6.45948in;height:1.29375in" />

> GRANT USAGE ON SCHEMA files TO maskuser;
>
> GRANT SELECT ON ALL TABLES IN SCHEMA files TO maskuser;
>
> Рисунок 4.30 – Предоставление доступа к схеме данных и внешней таблице files.app_log

## Определение правил маскирования данных внешнего источника

> В соответствии с тем к каким полям необходимо применить маскирование определяются правила маскировки:
>
> SECURITY LABEL FOR anon ON COLUMN files.app_log.login IS 'MASKED WITH VALUE \$\$CONFIDENTIAL\$\$';
>
> SECURITY LABEL FOR anon ON COLUMN files.app_log.ip IS 'MASKED WITH FUNCTION anon.dummy_ipv4()';
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image44.png" style="width:5.73148in;height:1.49479in" />
>
> Рисунок 4.31 – Определение правил маскирования данных внешней таблицы files.app_log Альтернативный вариант экранирования значения CONFIDENTIAL:
>
> SECURITY LABEL FOR anon ON COLUMN files.app_log.login IS \$\$MASKED WITH VALUE 'CONFIDENTIAL'\$\$;

## Проверка маскирования данных из внешнего источника

> Для проверки маскирования данных из внешнего источника необходимо выполнить запрос к таблице:

\c - maskuser

You are now connected to database "anon_db" as user "maskuser". SELECT \* FROM files.app_log;

tms

\|

\+

login

\|

\+

ip

\|

\+

action

2025-03-24 08:25:32 \| CONFIDENTIAL \| 152.90.250.121 \| view_dashboard

2025-03-24 09:15:00 \| CONFIDENTIAL \| 177.29.143.147 \| update_profile

2025-03-24 09:30:45 \| CONFIDENTIAL \| 204.141.38.236 \| download_report

> В результате запроса данные, которые были определены ранее правилами маскирования искажены или содержат запись о конфиденциальности.
>
> <img src="../docs/assets/images/com18.3.1/ja_anonymizer/media/image45.png" style="width:5.4519in;height:2.15312in" />
>
> Рисунок 4.32 –Маскированные данные внешней таблицы files.app_log при просмотре от имени пользователя с маской

# УДАЛЕНИЕ РАСШИРЕНИЯ

> Расширение компонента и библиотека удаляются с помощью следующих SQL-команд:
>
> postgres=# DROP EXTENSION anon CASCADE;
>
> postgres=# ALTER DATABASE anon_db RESET session_preload_libraries;
>
> После этого необходимо убедится в том, что расширение компонента успешно удалено из СУБД при помощи команды:
>
> \dx
>
> В конфигурационном файле СУБД postgresql.conf закомментировать (при помощи знака \#) или удалить из параметра shared_preload_libraries название библиотеки компонента:
>
> \#shared_preload_libraries = 'anon'

Перезагрузить СУБД и убедится в корректном статусе работы службы:

> \# systemctl restart jatoba-\<ver\> \# systemctl status jatoba-\<ver\>

# ВОЗМОЖНЫЕ ОШИБКИ

## Ошибка при выгрузке дампа с маскированными данными из БД в режиме

> **«только чтение»**
>
> Предварительные условия:

- Установленные СУБД «Jatoba» и расширение ja_anonymizer в БД anon_db;

- Создан пользователя с маской (здесь и далее см. п.п. [4.3.1](#создания-пользователя-с-маской-для-работы-с-дампом)):

> CREATE ROLE anon_dumper LOGIN PASSWORD '\[password\]';

- Включено динамическое маскирование данных роли:

> ALTER ROLE anon_dumper SET anon.transparent_dynamic_masking = true;

- Применено правило маскирования данных к созданному пользователю:

> SECURITY LABEL FOR anon ON ROLE anon_dumper IS 'MASKED';

- Создана таблица и активировано правило маскирования данных таблицы с генерацией последовательных значений (sequence):

> SECURITY LABEL FOR anon ON COLUMN customer.id IS \$\$MASKED WITH FUNCTION anon.random_id_int()\$\$;
>
> После создания таблицы, содержащей данные для маскирования, при выгрузке в дамп может возникать ошибка следующего вида:
>
> ./pg_dump anon_db --user anon_dumper --no-security-labels --file=masked_data.sql
>
> pg_dump: error: Dumping the contents of table "customer" failed: PQgetResult() failed.
>
> pg_dump: detail: Error message from server: ОШИБКА: в транзакции в режиме "только чтение" нельзя выполнить nextval()
>
> CONTEXT: SQL-функция "random_id_int", оператор 1
>
> pg_dump: detail: Command was: COPY public.customer (id, full_name, birth, city, postcode, fk_shop) TO stdout
>
> Возникновение данной ошибки связано с установленным для БД режимом «только чтение» (read-only). В связи с этим, при выполнении выгрузки дампа из БД функции маскирования данных, которые выполняют изменение пользовательских и/или служебных данных (например, счетчики), не будут доступны к использованию.

# ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 7%" />
<col style="width: 81%" />
</colgroup>
<thead>
<tr>
<th><blockquote>
<p>CSV</p>
</blockquote></th>
<th><blockquote>
<p>–</p>
</blockquote></th>
<th><blockquote>
<p>Текстовый формат, предназначенный для представления табличных данных</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td><blockquote>
<p>LDAP</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Протокол прикладного уровня для доступа к службе каталогов</p>
</blockquote></td>
</tr>
<tr>
<td><blockquote>
<p>NoSQL</p>
</blockquote></td>
<td><blockquote>
<p>–</p>
</blockquote></td>
<td><blockquote>
<p>Обозначение класса систем управления базами данных (СУБД) и существенно отличающихся от традиционных реляционных СУБД</p>
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
<p>Structured Query Language</p>
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
