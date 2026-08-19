---
title: Компонент «ja_Anonymizer». Маскирование данных.

---

**АННОТАЦИЯ**

Компонент «ja_Anonymizer» входит в состав СУБД «Jatoba» и обеспечивает защиту данных за счёт их маскировки или обезличивания. Это позволяет скрывать конфиденциальную информацию и персональные данные пользователей.

Настоящее руководство предназначено для администраторов СУБД.

:::info Дополнительная информация
Для СУБД «Jatoba» версии ядра 6/18 используется версия компонента — 2.4.
:::

:::warning Важная информация
Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!
:::


## НАЗНАЧЕНИЕ КОМПОНЕНТА

Компонент «ja_Anonymizer» — это расширение СУБД «Jatoba», предоставляющее механизм маскирования или обезличивания данных.

Такая функциональная возможность позволяет объявлять правила маскирования, используя язык описания данных (DDL), и определять свою стратегию маскировки данных внутри самого определения таблицы БД.

### Условия применения

Компонент «ja_Anonymizer» может использоваться с СУБД «Jatoba» версий 6.x и выше, под управлением операционных систем GNU/Linux.

Компонент выполнен в форме расширения СУБД и не имеет ограничений по совместимости с другими компонентами.

### Ограничения при работе с компонентом

Имеет ряд особенностей по функциональным возможностям:

- скорость выполнения статической маскировки зависит от объема БД и количества созданных правил маскировки;

- динамическая маскировка данных применяется только для одной схемы, по умолчанию — public. В случае необходимости схема может быть изменена пользователем;

- динамическая маскировка данных может существенно замедлить работу с некоторыми запросами, особенно при попытке соединить две таблицы по замаскированному ключу, используя хеширование или псевдомаскировку.

## УСТАНОВКА И НАСТРОЙКА

Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе.

Установка компонента под управлением ОС GNU/Linux приведено ниже.

### Установка пакета «ja_anonymizer» в ОС GNU/Linux

Компонент устанавливается в составе СУБД «Jatoba». Его возможно установить при первичной установке либо при последующей эксплуатации СУБД.

Установку пакета компонента возможно провести двумя способами:

1)  установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него;

2)  установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя.

Компонент выполнен в виде отдельного deb или rpm-пакета. Установка компонента осуществляется средствами пакетного менеджера ОС. Для разных типов пакетных менеджеров команда установки немного отличается. Ниже приведены основные типы:

- для систем на основе пакетного менеджера APT (к таким системам относятся все ОС семейства Debian, использующие deb-пакеты) команда установки следующая:

```
# apt-get install jatoba<ver>-ja_anonymizer
```

- для систем на основе пакетных менеджеров YUM/DNF (к таким системам относятся все ОС семейства RedHat и вышедшие из нее, использующие rpm-пакеты) команда установки, следующая:

```
# yum install jatoba<ver>-ja_anonymizer
```

Отдельного уточнения требуют операционные системы ALT Linux и openSUSE.

- ALT Linux использует пакетный менеджер APT, но распространяется в виде rpm-пакетов и для нее команда установки выглядит аналогично Debian:

```
# apt-get install jatoba<ver>-ja_anonymizer
```

Установка компонента в составе других версий СУБД «Jatoba» осуществляется аналогично. Отличие будет только в номере версии СУБД, в составе которой он распространяется.

Удаление пакета также осуществляется средствами пакетного менеджера ОС. Вместо команды install нужно использовать соответствующую данному пакетному менеджеру команду удаления (remove, purge, erase и т.п.).

Для получения детальной информации по пакетному менеджеру рекомендуется обратиться к документации по ОС.

В результате установки пакета в директории:

- /usr/jatoba-<ver>/lib/ будет создана библиотека anon.so;

- /usr/jatoba-<ver>/share/extension/ будет создан управляющий файл расширения anon.control;

- /usr/jatoba-<ver>/share/extension/anon/ будет создан набор csv-файлов.

### Настройка конфигурационного файла СУБД

Чтобы активировать функции компонента, необходимо выполнить следующие действия:

1)  Добавьте имя библиотеки в переменную shared_preload_libraries в файле postgresql.conf:

```
shared_preload_libraries = 'anon'
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image3.png)

Рисунок 2.1 – Настройки библиотеки компонента в файле postgresql.conf

2)  Перезагрузить СУБД, чтобы активировать внесённые изменения:

```
# systemctl restart jatoba-<ver>
```

3)  Проверить статус работы СУБД после перезагрузки:

```
# systemctl status jatoba-<ver>
```

Дополнительно можно проверить правильность загрузки библиотеки расширения выполнив следующий запрос:

```sql
SHOW shared_preload_libraries;
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image4.jpeg)


Рисунок 2.2 – Информация о загруженной в СУБД библиотеке компонента

### Установка расширения компонента

После перезагрузки СУБД и загрузки библиотеки компонента появляется возможность установки расширения «ja_anonymizer».

Установка расширения возможна двумя способами:

- Для БД, в которой требуется маскирование данных;

- Глобально для СУБД.

Установка расширения выполняется от имени и с правами привилегированного пользователя СУБД.

#### Установка расширения в БД

:::info Дополнительная информация
Здесь и далее расширение устанавливается в БД «anon_db» в качестве примера
:::

Последовательность действий при установке расширения в БД следующая:

1)  Создать БД, в которую будет устанавливаться расширение компонента:

```
CREATE DATABASE anon_db;
\connect anon_db
```

2)  Загрузку компонента в БД рекомендуется выполнять следующим образом:

```
ALTER DATABASE anon_db SET session_preload_libraries = 'anon';
\connect anon_db
```

Данный способ имеет ряд преимуществ:

- Будет выполнен сброс pg_dump с помощью опции -c, В этом случае дамп БД будет самодостаточным.

- Распространяется на резервный экземпляр БД с помощью потоковой репликации. Это означает, что возможно использование функции анонимизации на копии БД, доступном только для чтения (при условии, что расширение так же установлено на резервном экземпляре БД).


![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image5.png)

Рисунок 2.3 – Создание БД anon_db и регистрация загрузки библиотеки компонента

3) Установка и инициализация расширения:

```sql
CREATE EXTENSION anon CASCADE;

SELECT anon.init();
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image6.jpeg)

Рисунок 2.4 – Установка в БД расширения компонента и инициализация

4) Просмотр установленных расширений в БД:

```sql
\dx
```


![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image7.png)

Рисунок 2.5 – Просмотр установленных расширений 

Проверка загруженных расширений в БД:

```
SHOW session_preload_libraries;
SELECT * FROM pg_extension WHERE extname= 'anon'; 
SELECT anon.is_initialized();
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image8.png)

Рисунок 2.6 – Просмотр установленных расширений

#### Установка расширения в СУБД (глобально)

Вторым способом является установка расширения глобально для СУБД. Последовательность действий при установке расширения в СУБД следующая:

1)  Загрузку компонента в БД рекомендуется выполнять следующим образом:

```
ALTER SYSTEM SET shared_preload_libraries = 'anon';
```

2)  Выполнить перезагрузку СУБД:

```
# systemctl restart jatoba-<ver>
```

3)  Проверить статус службы СУБД:

```
# systemctl status jatoba-<ver>
```

4)  Далее выполнить установку и проверку расширения согласно пунткам [3)](#_bookmark8)-[4)](#_bookmark9) из п.п. [2.3.1](#установка-расширения-в-бд).

## ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

Компонент предоставляет следующие функциональные возможности:

- статическое маскирование (Static Masking): безвозвратно замаскировать все персональные данные, хранящиеся в БД, заменив их другими значениями, сохранив структуру для дальнейшего анализа;

- динамическое маскирование (Dynamic Masking): включить «прозрачную» маскировку для определённых (MASKED) пользователей, чтобы они не имели возможности доступа к маскируемым реальным персональным данным;

- анонимные дампы (Anonymous Dumps): экспортировать замаскированную версию данных в внешний SQL-файл. SQL-файл с замаскированными данными возможно использовать для тестов или передачи другим пользователям;

- маскирующие представления (Masking Views): создание специальных представлений (views), в которых конфиденциальные поля уже замаскированы;

- маскирующие обертки данных (Masking Data Wrappers): применение правил маскировки к данным, поступающим в БД из внешних источников.

Кроме указанных пяти способов, также существуют конкретные функции маскировки, используемые для определенных полей таблиц, такие как:

- рандомизация;

- фальсификация;

- частичное скрытие;

- перестановка;

- искажение.

Рандомизация заменяет конфиденциальные данные случайными, но правдоподобными значениями. Цель состоит в том, чтобы исключить возможность какой-либо идентификации по записи данных, оставляя её пригодной для тестирования, анализа и обработки данных.

Перестановка перемешивает значения в рамках столбца. Исходные данные могут быть восстановлены, если алгоритм перестановки будет расшифрован.

Частичное скрытие заменяет часть значения, а часть данных оставляет нетронутыми. Например: номер кредитной карты может быть заменён на «40XX XXXX XXXX XX96»

### Функции маскирования данных

#### Полная маскировка (замена исходных данных фиксированным значением)

При полной маскировке исходные данные могут быть полностью заменены на определенный фиксированный набор символов.

Замена на фиксированное значение описана в п.п. [4.2.2](#замена-данных-запроса-фиксированным-значением) данного руководства.

Полная маскировка данных возможна при использовании синтаксической конструкции:

```sql
MASKED WITH VALUE $$текст$$
```

Или

```sql
$$MASKED WITH VALUE 'текст'$$
```

:::info Дополнительная информация
В данном	случае	символы	экранирования ($$) находятся снаружи от маскирующего значения
:::

Равнозначные примеры:

```sql
MASKED WITH VALUE $$CONFIDENTIAL$$
$$MASKED WITH VALUE 'CONFIDENTIAL'$$
```

#### Частичная маскировка данных

Частичная маскировка данных заключается в том, что часть оригинального значения остается видимой, а другая часть скрывается.

Таблица 3.1 – Функции частичной маскировки данных

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 35%" />
<col style="width: 25%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Функция</strong></p>
</th>
<th>
<p><strong>Описание</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Пример</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td style="text-align: center;">
<p>anon.partial(original_value,n1,text,n2)</p>
</td>
<td>
<p>Маскирование части символов, original_value -</p>
</td>
<td>
<p>anon.partial(postcode,1,$$****$$,1)</p>
<p>→ заменить значение столбца</p>
</td>
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
<th style="text-align: left;">
<p>значение или имя столбца таблицы, которое будет искажено, n1 и n2 - количество не маскируемых символов в начале и конце строки, text - набор символов для подмены значения</p>
</th>
<th style="text-align: left;">
<p>postcode на ****, оставив видимыми первый и последний символы, например так 6****5</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>2</p>
</td>
<td>
<p>anon.partial_email(mail_value)</p>
</td>
<td style="text-align: left;">
<p>Функция для маскировки адреса электронной почты, mail_value - адрес электронной почты</p>
</td>
<td style="text-align: left;">
<p>anon.partial_email(email) → заменяет значение столбца email на ******, оставляя видимыми по 2 первых символа, например так da******@gm******.com</p>
</td>
</tr>
</tbody>
</table>

### Искажение исходных данных

Искажение исходных данных возможно применять к числовым значениям или датам в определенных пределах.

Например, можно скрыть день рождения, заменив его случайной датой в пределах ±1 месяц. Такое искажение скроет персональные данные, но практически не повлияет на аналитические отчеты (например анализ возрастных групп покупателей).

Таблица 3.2 – Функции искажения исходных данных

<table style="width:100%;">
<colgroup>
<col style="width: 5%" />
<col style="width: 35%" />
<col style="width: 25%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Функция</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Описание</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Пример</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td>
<p>anon.noise(original_value,ratio)</p>
</td>
<td style="text-align: left;">
<p>Искажение числовых значений, original_value - значение или имя столбца таблицы, которое будет искажено, ratio - коэффициент искажения</p>
</td>
<td>
<p>anon.noise(salary,0.33) → изменить значения столбца salary на ±33%</p>
</td>
</tr>
<tr>
<td>
<p>2</p>
</td>
<td>
<p>anon.dnoise(original_value,interval)</p>
</td>
<td style="text-align: left;">
<p>Искажение даты, original_value - значение или имя столбца таблицы, которое будет искажено, interaval - интервал сдвига</p>
</td>
<td>
<p>anon.dnoise(date, '1 month') → изменить значения столбца date на</p>
<p>±1 месяц</p>
</td>
</tr>
</tbody>
</table>

:::warning Важная информация
Функции маскирования «noise()» уязвимы для повторных атак, особенно при использовании «динамического маскирования». Пользователь под маской может угадать исходное значение, запросив его замаскированное значение несколько раз, а затем просто использовать «AVG()» функцию для получения приближенного значения.

Вкратце, эти функции лучше всего подходят для «анонимных дампов» и
«статического маскирования». Их следует избегать при использовании «динамического маскирования»
:::

### Генерация случайных данных

Генерация абсолютно случайных данных.

Выделяются следующие группы генерации случайных данных:

- Простая генерация;

- Значение в определенном интервале;

- Из заданного массива;

- Из перечисляемого типа ENUM;

- Значение из диапазона (RANGE);

- Из последовательности (sequence).

Таблица 3.3 – Функции генерации случайных данных

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
<th style="text-align: center;">
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Функция</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
<th colspan="2" style="text-align: center;">
<p><strong>Пример</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="5" style="text-align: center;">
<p><strong>Простая генерация</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>1</p>
</td>
<td style="text-align: center;">
<p>anon.random_date()</p>
</td>
<td style="text-align: center;">
<p>Возвращает случайную дату</p>
</td>
<td colspan="2" style="text-align: center;">
<p>anon.random_date() → случайная дата</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>2</p>
</td>
<td style="text-align: center;">
<p>anon.random_string(n)</p>
</td>
<td style="text-align: center;">
<p>Случайная строка, n -</p>
<p>количество символов</p>
</td>
<td colspan="2" style="text-align: center;">
<p>anon.random_string(10) → случайная строка из 10 символов</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>3</p>
</td>
<td style="text-align: center;">
<p>anon.random_zip()</p>
</td>
<td style="text-align: center;">
<p>Случайный 5-значньй цифровой код</p>
</td>
<td colspan="2" style="text-align: center;">
<p>anon.random_zip() → 5-значньй цифровой код</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>4</p>
</td>
<td style="text-align: center;">
<p>anon.random_phone(p)</p>
</td>
<td style="text-align: left;">
<p>Случайный 9-значный телефонный номер, p - префикс номера</p>
</td>
<td colspan="2" style="text-align: center;">
<p>anon.random_phone('+79') → номер, начинающийся на +79</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>5</p>
</td>
<td style="text-align: center;">
<p>anon.random_hash(seed)</p>
</td>
<td style="text-align: center;">
<p>Случайный хеш строки, seed - срока</p>
</td>
<td colspan="2" style="text-align: center;">
<p>anon.random_hash('3Se6j') → случайный хеш</p>
</td>
</tr>
<tr>
<td colspan="5" style="text-align: center;">
<p><strong>Генерация значения из определенного интервала</strong></p>
</td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">
<p>№ изменения:</p>
</td>
<td colspan="2" style="text-align: center;">
<p>Подпись отв. лица:</p>
</td>
<td style="text-align: center;">
<p>Дата внесения изм:</p>
</td>
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
<th style="text-align: center;">
<p>6</p>
</th>
<th>
<p>anon.random_date_between(d 1,d2)</p>
</th>
<th>
<p>Случайная дата в интервале между d1 и d2</p>
</th>
<th>
<p>anon.random_date_between('2024-01-01','2024-12-31') → случайная дата 2024 года</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p>7</p>
</td>
<td>
<p>anon.random_int_between(i1,i 2)</p>
</td>
<td>
<p>Случайное число INT в интервале между i1 и i2</p>
</td>
<td>
<p>anon.random_int_between(1,10) → случайное число от 1 до 10</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>8</p>
</td>
<td>
<p>anon.random_bigint_between( b1,b2)</p>
</td>
<td>
<p>Случайное число BIGINT в интервале между b1 и b2</p>
</td>
<td>
<p>anon.random_bigint_between(10,1000</p>
<p>) → случайное число от 10 до 1000</p>
</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">
<p><strong>Генерация из массива</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>9</p>
</td>
<td>
<p>anon.random_in(ARRAY[n1,n 2,...,nX]))</p>
</td>
<td>
<p>Случайный элемент из массива от n1 до nX</p>
</td>
<td style="text-align: left;">
<p>anon.random_in(ARRAY['red','green',' blue']) → случайный цвет из 3 элементов массива</p>
</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">
<p><strong>Случайный выбор из перечисляемого типа ENUM</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>10</p>
</td>
<td>
<p>anon.random_in_enum(var_of</p>
<p>_an_enum_type)</p>
</td>
<td>
<p>Случайный элемент из перечисляемого типа ENUM</p>
</td>
<td>
<p>CREATE TYPE card AS ENUM</p>
<p>('visa', 'mastercard', 'unionpay');</p>
<p>anon.random_in_enum(NULL::CARD</p>
<p>) → случайный выбор из типа CARD</p>
</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">
<p><strong>Выбор случайного значения из диапазона (RANGE)</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>11</p>
</td>
<td>
<p>anon.random_in_int4range('[n 1,n2)')</p>
</td>
<td style="text-align: left;">
<p>Случайное число INT от n1 (включительно) до n2 (исключается)</p>
</td>
<td>
<p>anon.random_in_int4range('[5,6)') → вернется число INT равное 5</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>12</p>
</td>
<td>
<p>anon.random_in_int8range('(n 1,n2]')</p>
</td>
<td style="text-align: left;">
<p>Случайное число BIGINT от n1 (исключается) до n2 (включительно)</p>
</td>
<td>
<p>anon.random_in_int8range('(6,7]') → вернется число BIGINT равное 7</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>13</p>
</td>
<td>
<p>anon.random_in_numrange('[n 1,n2]')</p>
</td>
<td>
<p>Случайное число NUMERIC между n1 и n2</p>
</td>
<td>
<p>anon.random_in_numrange('[0.1,0.9]')</p>
<p>→ число NUMERIC между 0.1 и 0.9</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>14</p>
</td>
<td>
<p>anon.random_in_daterange('[d 1,d2)')</p>
</td>
<td style="text-align: left;">
<p>Случайная дата от d1 (включительно) до d2 (исключается)</p>
</td>
<td>
<p>anon.random_in_daterange('[2001-01-01, 2002-01-01)') → дата из 2001 года</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>15</p>
</td>
<td>
<p>anon.random_in_tsrange('[t1,t 2]')</p>
</td>
<td>
<p>Случайная дата в формате TIMESTAMP между t1 и t2</p>
</td>
<td>
<p>anon.random_in_tsrange('[2022-10-01,2022-10-31]') → случайный TIMESTAMP в пределах октября 2022</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>16</p>
</td>
<td>
<p>anon.random_in_tstzrange('[t1</p>
<p>,t2]')</p>
</td>
<td style="text-align: left;">
<p>Случайная дата в формате TIMESTAMP между t1 и t2 с часовым поясом (TIMEZONE)</p>
</td>
<td>
<p>anon.random_in_tstzrange('[2022-10-01,2022-10-31]') → случайный TIMESTAMP с часовым поясом</p>
</td>
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
<th colspan="4" style="text-align: center;">
<p><strong>Генерация последовательных значений (sequence)</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">
<p>17</p>
</td>
<td>
<p>anon.random_id()</p>
</td>
<td style="text-align: left;">
<p>Случайное уникальное значение типа BIGINT, каждый вызов значение увеличивается, подобно nextval()</p>
</td>
<td>
<p>anon.random_id() → случайный последовательный BIGINT</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>18</p>
</td>
<td>
<p>anon.random_id_int()</p>
</td>
<td style="text-align: left;">
<p>Случайное уникальное значение типа INT, каждый вызов значение увеличивается, подобно nextval()</p>
</td>
<td>
<p>anon.random_id_int() → случайный последовательный INT</p>
</td>
</tr>
<tr>
<td style="text-align: center;">
<p>19</p>
</td>
<td>
<p>anon.random_id_small_int()</p>
</td>
<td style="text-align: left;">
<p>Случайное уникальное значение типа SMALLINT, каждый вызов значение увеличивается, подобно nextval()</p>
</td>
<td style="text-align: left;">
<p>anon.random_id_small_int() → случайный последовательный SMALLINT</p>
</td>
</tr>
</tbody>
</table>

:::info Дополнительная информация
Символы '[' и ']' – означают включение значения в диапазон. Символы '(' и ')' – означают исключение значения в диапазона.

Например, (anon.random_in_int4range('[n1,n2)') – случайное число INT от n1 (включительно) до n2 (исключается).
:::

:::info Дополнительная информация
Невозможно получить случайное значение из диапазона с бесконечной границей. Например:

```sql
anon.random_in_int4range('[2022,)')	
```
возвращается NULL.
:::

:::warning Важная информация
Каждый вызов функций генерации последовательных значений будет возвращать увеличенное значение, во многом похожее на функцию [nextval()].

В любой момент вы можете сбросить текущее значение последовательности, заменив его новым значением. Например:
```sql
SELECT pg_catalog.setval('anon.random_id_seq', 42);
```
:::

### Псевдонимизация

Псевдонимизация создает реалистичные значения (псевдонимы), связанные с исходным значением.

Данная функция всегда будут возвращать одно и то же значение. В этом состоит основное отличие псевдонимизации от фальсификации.

При вызове любой из функций псевдонимизации возможно использование аргумента salt. Аргумент salt предназначен для увеличения сложности генерируемых данных и минимизации атак по словарю. Если соль (salt) не указана в аргументе, вместо неё используется значение общего параметра anon.salt.

Таблица 3.4 – Функции псевдонимизации исходных данных

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 33%" />
<col style="width: 28%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Функция</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Описание</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Пример</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td>
<p>anon.pseudo_first_name(seed,salt)</p>
</td>
<td style="text-align: left;">
<p>Псевдоним имени, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</td>
<td style="text-align: left;">
<p>anon.pseudo_first_name(fname) → псевдоним имени для столбца fname</p>
</td>
</tr>
<tr>
<td>
<p>2</p>
</td>
<td>
<p>anon.pseudo_last_name(seed,salt)</p>
</td>
<td style="text-align: left;">
<p>Псевдоним фамилии, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</td>
<td style="text-align: left;">
<p>anon.pseudo_last_name(lname) → псевдоним фамилии для столбца lname</p>
</td>
</tr>
<tr>
<td>
<p>3</p>
</td>
<td>
<p>anon.pseudo_email(seed,salt)</p>
</td>
<td style="text-align: left;">
<p>Псевдоним электронной почты, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</td>
<td style="text-align: left;">
<p>anon.pseudo_email(email) → случайный действительный электронный адрес для столбца email</p>
</td>
</tr>
<tr>
<td>
<p>4</p>
</td>
<td>
<p>anon.pseudo_city(seed,salt)</p>
</td>
<td style="text-align: left;">
<p>Псевдоним города, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</td>
<td style="text-align: left;">
<p>anon.pseudo_city(work_city) → случайное название города для столбца work_city</p>
</td>
</tr>
<tr>
<td>
<p>5</p>
</td>
<td>
<p>anon.pseudo_country(seed,salt)</p>
</td>
<td style="text-align: left;">
<p>Псевдоним страны, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</td>
<td style="text-align: left;">
<p>anon.pseudo_country(user_country)</p>
<p>→ случайное название страны для столбца user_country</p>
</td>
</tr>
<tr>
<td>
<p>6</p>
</td>
<td>
<p>anon.pseudo_company(seed,salt)</p>
</td>
<td style="text-align: left;">
<p>Псевдоним компании, seed - имя столбца таблицы, salt - необязательный аргумент</p>
</td>
<td style="text-align: left;">
<p>anon.pseudo_company(cname) → случайное название компании для столбца cname</p>
</td>
</tr>
<tr>
<td>
<p>7</p>
</td>
<td>
<p>anon.pseudo_iban(seed,salt)</p>
</td>
<td style="text-align: left;">
<p>Случайный действительный номер IBAN</p>
<p>(международный номер банковского счёта), seed - имя столбца таблицы, salt - необязательный аргумент</p>
</td>
<td style="text-align: left;">
<p>anon.pseudo_iban(iban_cust) → случайный действительный номер IBAN для столбца iban_cust</p>
</td>
</tr>
<tr>
<td>
<p>8</p>
</td>
<td>
<p>anon.pseudo_siret(seed,salt)</p>
</td>
<td style="text-align: left;">
<p>Случайный действительный</p>
<p>14-значный номер SIRET, seed - имя столбца таблицы,</p>
</td>
<td style="text-align: left;">
<p>anon.pseudo_siret(siret_code) → случайный действительный</p>
</td>
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
<th style="text-align: left;">
<p>salt - необязательный аргумент</p>
</th>
<th style="text-align: left;">
<p>идентификатор SIRET для столбца siret_code</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">9</td>
<td>
<p>anon.pseudo_shift()</p>
</td>
<td style="text-align: left;">
<p>Сдвиг используя секретное значение (anon.shift) для псевдонимизации.</p>
<p>Секретное значение может быть инициализировано случайным образом с помощью anon.set_shift() или определено с помощью anon.set_shift(INT).</p>
</td>
<td style="text-align: left;">
<p>anon.pseudo_shift(id) → сдвиг идентификатора первичного ключа</p>
</td>
</tr>
<tr>
<td style="text-align: center;">10</td>
<td>
<p>anon.pseudo_xor()</p>
</td>
<td style="text-align: left;">
<p>Выполнение операции</p>
<p>«исключающее ИЛИ» используя секретное значение (anon.shift) для псевдонимизации.</p>
<p>Секретное значение может быть инициализировано случайным образом с помощью anon.set_shift() или определено с помощью anon.set_shift(INT).</p>
</td>
<td style="text-align: left;">
<p>anon.pseudo_xor(id) → выполнение операции</p>
<p>«исключающее ИЛИ» над значением идентификатора первичного ключа</p>
</td>
</tr>
</tbody>
</table>

:::warning Важная информация
Этот набор данных представлен на английском языке и очень мал (1000 значений для каждой категории). Если вы хотите использовать локализованные данные или загрузить определённый набор данных, ознакомьтесь с разделом 3.8 Пользовательские функции и наборы поддельных данных.
:::

### Хэширование исходных данных

Хеширование исходных данных не является допустимым методом маскирования. Тем не менее на практике иногда необходимо сгенерировать детерминированный хэш исходных данных.

Например, в случае если таблицы связаны через пару первичного и внешнего ключа. В таком случае рекомендуется использовать функцию anon.hash(), а не функцию anon.digest(), так как, в этом случае, salt не будет отображаться в правиле маскирования.

Таблица 3.5 – Функции хэширования исходных данных

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 30%" />
<col style="width: 31%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Функция</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Пример</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td>
<p>anon.hash(value)</p>
</td>
<td style="text-align: left;">
<p>Текстовый хеш значения value, при этом будут использованы общие параметры anon.salt и anon.algorithm</p>
</td>
<td>
<p>anon.hash('Abc123') → хеш значения 'Abc123'</p>
</td>
</tr>
<tr>
<td>
<p>2</p>
</td>
<td>
<p>anon.digest(value,salt,algorithm)</p>
</td>
<td style="text-align: left;">
<p>Текстовый хеш значения value, с учетом переданных аргументов: salt - секретная соль, algorithm - алгоритм хеширования</p>
</td>
<td>
<p>anon.digest('Abc123','abcd','sha224')</p>
<p>→ хеш значения 'Abc123', по алгоритму sha224</p>
</td>
</tr>
</tbody>
</table>

Для того чтобы определить общие параметры функций хэширования необходимо использовать следующие запросы:

```
ALTER DATABASE anon_db SET anon.salt TO '[anon.salt]';
```

Где anon.salt – случайные символы, например xsfnjefnjsnfjsnf.

```
ALTER DATABASE anon_db SET anon.algorithm TO '[anon.algorithm]';
```

Где algorithm – используемый алгоритм хэширования, например md5, sha1, sha224, sha256, sha384, sha512.

:::warning Важная информация
Функции хеширования не будут работать, если входные данные содержат неэкранированный символ (особенно одинарный обратный слеш). В большинстве случаев это признак ошибки в приложении, как правило, когда входные данные не проходят надлежащую очистку
:::

### Обобщение исходных данных

Обобщение исходных данных заключается в замене исходного значения диапазоном, содержащим это значение. То есть, информацию: «Максиму 42 года», можно обобщить как: «Максиму от 40 до 50 лет».

Таблица 3.6 – Функции обобщения исходных данных

| Функция                                   | Описание                                                                                                                          | Пример                                                                                                                          |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| anon.generalize_tsrange(date,step)        | Функция обобщения даты date,<br>возвращает диапазон дат, определенный аргументом step -<br>это период: день, месяц, год и<br>т.д. | anon.generalize_tsrange('1952-07-<br>17','decade') → этот пример вернет диапазон "1950-01-01<br>00:00:00","1960-01-01 00:00:00" |
| anon.generalize_int4range(value,<br>step) | Функция вернет диапазон типа<br>integer, value - числовое<br>значение, step - размер<br>диапазона                                 | anon.generalize_int4range(55, '10')<br>→ этот пример вернет диапазон<br>50,60                                                   |
| anon.generalize_int8range(value,<br>step) | Функция вернет диапазон типа<br>bigint, value - числовое<br>значение, step - размер<br>диапазона                                  | anon.generalize_int8range(5005,<br>200) → этот пример вернет<br>диапазон 5000,5200                                              |
| anon.generalize_numrange(value,<br>step)  | Функция вернет диапазон типа<br>numeric, value - числовое<br>значение, step - размер<br>диапазона                                 | anon.generalize_numrange(5.47, 2)<br>→ этот пример вернет диапазон<br>4,6                                                       |

### Базовая фальсификация исходных данных

Фальсификация - замена данных случайными, но правдоподобными значениями.

В отличие от псевдонимизации, каждый запрос данных будет возвращать новое случайное значение. Цель состоит в том, чтобы избежать какой-либо идентификации по записи данных, оставляя её при этом пригодной для тестирования, анализа и обработки данных.

Кроме фальсификации таких данных, как имя, фамилия, название компании и так далее, компонент, позволяет фальсифицировать текстовые данные подходящим по размеру случайным текстом.

Таблица 3.7 – Функции базовой фальсификации исходных данных

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 30%" />
<col style="width: 32%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Функция</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Пример</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td>
<p>anon.fake_address()</p>
</td>
<td>
<p>Функция вернет случайный почтовый адрес</p>
</td>
<td style="text-align: left;">
<p>anon.fake_address() → случайный адрес, например: 743 Wade Point Suite 171, Lake</p>
<p>Connie, MT 92286</p>
</td>
</tr>
<tr>
<td>
<p>2</p>
</td>
<td>
<p>anon.fake_city()</p>
</td>
<td>
<p>Функция вернет случайное название города</p>
</td>
<td style="text-align: left;">
<p>anon.fake_city() → случайное название города</p>
</td>
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
<th>
<p>3</p>
</th>
<th>
<p>anon.fake_country()</p>
</th>
<th>
<p>Функция вернет случайное название страны</p>
</th>
<th>
<p>anon.fake_country() → случайное название страны</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>4</p>
</td>
<td>
<p>anon.fake_company()</p>
</td>
<td>
<p>Функция вернет случайное название компании</p>
</td>
<td>
<p>anon.fake_company() → случайное название компании</p>
</td>
</tr>
<tr>
<td>
<p>5</p>
</td>
<td>
<p>anon.fake_email()</p>
</td>
<td>
<p>Функция вернет случайный адрес электронной почты</p>
</td>
<td style="text-align: left;">
<p>anon.fake_email() → случайный адрес электронной почты</p>
</td>
</tr>
<tr>
<td>
<p>6</p>
</td>
<td>
<p>anon.fake_first_name()</p>
</td>
<td>
<p>Функция вернет случайное имя</p>
</td>
<td>
<p>anon.fake_first_name() → случайное имя</p>
</td>
</tr>
<tr>
<td>
<p>7</p>
</td>
<td>
<p>anon.fake_last_name()</p>
</td>
<td>
<p>Функция вернет случайную фамилию</p>
</td>
<td>
<p>anon.fake_last_name() → случайная фамилия</p>
</td>
</tr>
<tr>
<td>
<p>8</p>
</td>
<td>
<p>anon.fake_postcode()</p>
</td>
<td>
<p>Функция вернет случайный 5-значный почтовый код</p>
</td>
<td>
<p>anon.fake_postcode() → 5-значный почтовый код</p>
</td>
</tr>
<tr>
<td>
<p>9</p>
</td>
<td>
<p>anon.fake_iban()</p>
</td>
<td style="text-align: left;">
<p>Случайный действительный номер IBAN (международный номер банковского счёта)</p>
</td>
<td>
<p>anon.fake_iban() → случайный действительный номер IBAN</p>
</td>
</tr>
<tr>
<td>
<p>10</p>
</td>
<td>
<p>anon.fake_siret()</p>
</td>
<td>
<p>Млучайный действительный 14-значный номер <a href="https://en.wikipedia.org/wiki/SIRET_code"><u>SIRET</u></a></p>
</td>
<td>
<p>anon.fake_siret() → случайный действительный номер SIRET</p>
</td>
</tr>
<tr>
<td>
<p>11</p>
</td>
<td>
<p>anon.lorem_ipsum(paragraphs</p>
<p>:= value)</p>
</td>
<td style="text-align: left;">
<p>Функция вернет несколько параграфов случайного текста, количество</p>
<p>определяется <em>value</em></p>
</td>
<td>
<p>anon.lorem_ipsum(paragraphs</p>
<p>:= 4) → 4 параграфа случайного текста</p>
</td>
</tr>
<tr>
<td>
<p>12</p>
</td>
<td>
<p>anon.lorem_ipsum(words := value)</p>
</td>
<td style="text-align: left;">
<p>Функция вернет несколько случайных слов, количество определяется <em>value</em></p>
</td>
<td>
<p>anon.lorem_ipsum(words := 20)</p>
<p>→ 20 случайных слов</p>
</td>
</tr>
<tr>
<td>
<p>13</p>
</td>
<td>
<p>anon.lorem_ipsum(characters</p>
<p>:= value)</p>
</td>
<td style="text-align: left;">
<p>Функция вернет случайную строку, длина которой определяется <em>value</em></p>
</td>
<td style="text-align: left;">
<p>anon.lorem_ipsum(characters := anon.length(table.column)) → вернет то же количество символов, что и в исходном столбце</p>
</td>
</tr>
</tbody>
</table>

### Расширенная фальсификация исходных данных

Расширенная фальсификация основана на функции dummy_\*, которая насчитывает более 70 параметров, таких как: случайный город, IP-адрес, фамилия, имя и т.д.

Функция dummy_\* позиционируется как более продвинутая, по сравнению с fake_\*.

Локализация в компоненте доступна только для функций dummy_\*. Это достигается добавлением слова _locale к названию функции (например dummy_last_name_locale('fr_FR') вернет французскую фамилию).

На данный момент доступны следующие варианты локализации фальсификации данных: en_US (по умолчанию), ar_SA, fr_FR, ja_JP, pt_BR, zh_CN, zh_TW.

### Маскирование исходных данных с условием

В некоторых ситуациях может потребоваться применить маскирующий фильтр только для определенных значений или для ограниченного числа строк в таблице.

Например, если надо замаскировать только строки, содержащие значения, при этом строки, содержащие NULL, не маскировать. Для этого предназначена функция anon.ternary, которая работает как классическое условие: CASE WHEN x THEN y ELSE z.

Таблица 3.8 – Функция маскирования исходных данных с условием

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 34%" />
<col style="width: 27%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>№</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Функция</strong></p>
</th>
<th style="text-align: left;">
<p><strong>Описание</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Пример</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>1</p>
</td>
<td style="text-align: center;">
<p>anon.ternary(condition,value1,value2)</p>
</td>
<td style="text-align: left;">
<p>Если выполняется условие condition, то выбирается значение value1, иначе value2</p>
</td>
<td>
<p>anon.ternary(score IS NULL, NULL,</p>
<p>anon.random_int_between(0,100))</p>
<p>→ изменить значения столбца на случайное число (от 0 до 100), если его значение не NULL.</p>
</td>
</tr>
</tbody>
</table>


:::warning Важная информация
Условное маскирование может создать частично детерминированную «связь» между исходными и замаскированными данными. Эта связь может быть использована для извлечения персонифицированных данных из замаскированных
:::

### Пользовательские функции и наборы поддельных данных

При работе с пользовательскими функциями необходимо создать пользователя с маской. Для этого необходимо выполнить следующий запрос:

```
CREATE ROLE maskuser LOGIN;
```

#### Пользовательские наборы данных

По умолчанию расширение поставляется с небольшим набором поддельных данных на английском языке (address.csv, company.csv, email.csv, iban.csv, identifiers_category.csv, lorem_ipsum.csv, siret.csv, city.csv, country.csv, first_name.csv, identifier.csv, last_name.csv, postcode.csv).

Набор файлов поддельных данных на английском языке расположен в каталоге

> /usr/jatoba-<ver>/share/extension/anon/.

Для того чтобы функция anon.fake_\* работала с пользовательскими данными, необходимо подготовить собственные наборы по образцу из файлов, затем их можно импортировать из файлов в формате CSV с помощью запроса:

```sql
SELECT anon.init('/path/to/custom_csv_files/');
```

Где /path/to/custom_csv_files/ - путь к каталогу с набором пользовательских данных.

#### Пользовательские функции маскирования данных

Кроме поставляемых с расширением функций, есть возможность создавать собственные функции для маскирования данных.

Для пользовательской функции потребуется создать таблицу, которая будет служить справочником значений:

```sql
CREATE TABLE anon.ru_city (id INT, city TEXT); INSERT INTO anon.ru_city VALUES

(1,'Москва'),

(2,'Санкт-Петербург'),

(3,'Екатеринбург');

GRANT SELECT ON anon.ru_city TO maskuser; GRANT SELECT ON public.users TO maskuser;
```


![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image9.jpeg)

Рисунок 3.1 – Создание таблицы-справочника значений

В данном руководстве в качестве примера предлагается создать функцию маскирования исходных данных, которая будет возвращать названия российских городов и применить созданную функцию для динамического маскирования таблицы:

```sql
CREATE FUNCTION anon.fake_ru_city() RETURNS TEXT

VOLATILE LANGUAGE SQL

AS \$func\$

SELECT city FROM anon.ru_city ORDER BY RANDOM() LIMIT 1

\$func\$;
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image10.jpeg)

Рисунок 3.2 – Создание функции anon.fake_ru_city

Создание таблицы, для которой будет применяться пользовательская функция anon.fake_ru_city:

```sql
CREATE TABLE users

(id INT, login TEXT, city TEXT); INSERT INTO users

VALUES

(1,'divanov','Брянск'),

(2,'emilkina','Уфа'),

(3,'afonin','Суздаль');
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image11.jpeg)

Рисунок 3.3 – Создание таблицы с исходными данными для маскирования

Далее необходимо применить правило маскирования к столбцу users.city, которое будет использовать пользовательскую функцию anon.fake_ru_city:

```sql
SECURITY LABEL FOR anon ON COLUMN users.city IS 'MASKED WITH FUNCTION anon.fake_ru_city()'; SELECT anon.anonymize_column('users','city');
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image12.jpeg)



Рисунок 3.4 – Применение правил маскирования данных к таблице

После активации правила маскирования необходимо убедится в том, что данные из исходной таблицы users успешно маскируются:


```sql
\c - maskuser

You are now connected to database "anon_db" as user "maskuser".

SELECT * FROM users;

id  | login | city

1.  | divanov | Екатеринбург

2.  | emilkina | Санкт-Петербург

3.  | afonin | Москва
```

Как можно увидеть, данные в столбце users.city выводятся данные, которые маскируют исходные, подменяя значения из таблицы-справочника anon.ru_city.

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image13.jpeg)

Рисунок 3.5 – Проверка маскирования исходных данных при использовании пользовательской функции anon.fake_ru_city

## ПРИМЕР ИСПОЛЬЗОВАНИЯ

### Статическое маскирование данных

Статический метод подменяет данные другими значениями.

:::warning Важная информация
Статический метод маскировки безвозвратно изменяет данные в таблицах или всей БД
:::

Статическое маскирование данных в случае, если для столбца таблицы есть ограничение внешнего ключа (например, references city(name), где city - список городов) может привести к ошибке, если исходное значение заменяется из маскирующего набора данных, которого нет во внешнем ключе. Это следствие нарушения ограничений внешнего ключа. Если маскирующее значение совпадает с одним из элементов внешнего ключа, то статическое маскирование не приводит к возникновению ошибок.

В качестве примера будет представлен пример с несколькими функциями маскировки:

```sql
CREATE TABLE employees ( id SERIAL,
firstname TEXT, lastname TEXT, company TEXT, postcode TEXT
);
INSERT INTO employees VALUES
(111,'Maria','Belova','Bank of Saratov','405657'),
(222,'Pavel','Petrov','Head and Hands','601245');
```


![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image14.jpeg)

Рисунок 4.1 – Создание таблицы с исходными данными

Таблица employees будет содержать информацию, представленную на рисунке 4.2

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image15.jpeg)

Рисунок 4.2 – Исходные данные в таблице employees

В качестве маскируемых данных будет выбран столбец postcode. Для этого определяется правило статической маскировки следующего вида:


```sql
SECURITY LABEL FOR anon ON COLUMN employees.postcode
IS 'MASKED WITH FUNCTION anon.partial(postcode,1,$$****$$,1)';

```
![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image16.jpeg)

Рисунок 4.3 – Регистрация правила статического маскирования исходных данных таблицы employees

Данное правило заменяет знаками звездочка (\*) символы между первым и последним знаком в столбце postcode.

После определения правила статической маскировки она применяется к столбцу postcode с помощью следующего запроса:

```
SELECT anon.anonymize_column('employees','postcode');
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image17.jpeg)



Рисунок 4.4 – Применение правила anon.anonymize_column статического маскирования исходных данных таблицы employees к столбцу postcode

С целью проверки статической маскировки можно повторно выполнить запрос на чтение данных из таблицы employees:

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image18.jpeg)

Рисунок 4.5 –Данные таблицы employees после использования статического маскирования к столбцу postcode

Как видно из результата выполнения запроса все значения в столбце postcode заменены на маскированные данные вида «x****x» в соответствии с определенным ранее правилом статической маскировки.

Дополнительно можно выполнить статическую маскировку других столбцов таблицы employees определяя новые правила, например маскировка фамилии или названия компании (столбцы lastname и company):

```sql
SECURITY LABEL FOR anon ON COLUMN employees.lastname IS 'MASKED WITH FUNCTION anon.dummy_last_name()'; SECURITY LABEL FOR anon ON COLUMN employees.company

IS 'MASKED WITH FUNCTION anon.fake_company()';
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image19.png)

Рисунок 4.6 –Дополнительные правила маскирования исходных данных к таблице employees

После этого необходимо выполнить запросы на применение указанных правил к данным, содержащимся в таблице employees:

```
SELECT anon.anonymize_table('employees');
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image20.jpeg)

Рисунок 4.7 – Дополнительные правила маскирования исходных данных к таблице employees

Либо статическая маскировка данных во всех таблицах БД в соответствии с определяемыми правилами:

```
SELECT anon.anonymize_database();
```

С целью проверки статической маскировки можно повторно выполнить запрос на чтение данных из таблицы employees:

```
SELECT * FROM employees;
```

Как видно из рисунка 4.8, в таблице employees столбцы lastname, company содержат новые данные.

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image21.jpeg)

Рисунок 4.8 – Данные таблицы employees после использования статического маскирования к столбцам lastname, company, postcode

### Динамическое маскирование данных

При динамическом маскировании, данные для обычного пользователя представляются в исходном виде, а для пользователя с маской, соответственно в замаскированном.

Динамическое маскирование можно использовать кластере компонента «jaDog» при чтении с синхронной реплики.

Динамическое маскирование данных для секционированных таблиц устанавливается для самой секционированной таблицы, но не для секций этой таблицы.

Динамическое маскирование в запросах вида SELECT * FROM table WHERE colname = 'значение', в случае если colname имеет динамическое маскирование. То есть столбец, может быть, как проиндексирован, так и нет. Если в запросе, где условием выборки будет значение из замаскированного столбца, подставляется существующее значение из оригинальной таблицы, то результатом будет пустая выборка, так как оригинальные значения подменяются маскированными. Если же подставить значение из набора данных, которыми маскируется столбец, то получим ненулевую выборку данных. Индексация столбца с маскируемыми данными на конечный результат не влияет.

В данном подразделе будет рассмотрено несколько примеров использования динамической маскировки данных.

Включение динамического маскирования данных в общем случае производится с помощью выполнения следующего запроса:


```sql
ALTER DATABASE anon_db SET anon.transparent_dynamic_masking TO true;
```


![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image22.png)

Рисунок 4.9 – Включение динамического маскирования исходных данных

:::info Дополнительная информация
При	использовании	динамической	маскировки	исходных	данных	не используются следующие запросы:

```sql
SELECT anon.anonymize_table('table_name');
SELECT anon.anonymize_database('database_name');
SELECT anon.anonymize_column(' column_name',' column_name');
```
:::

#### Правило маскирования данных пользователя с маской

Пользователь с маской создается, так же как это указано в п.п. [3.8](#пользовательские-функции-и-наборы-поддельных-данных). Применить правило маскирования данных к созданному пользователю;


```sql
SECURITY LABEL FOR anon ON ROLE maskuser IS 'MASKED';
```



![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image23.png)

Рисунок 4.10 – Создание пользователя с максой и применение для него правил маскирования исходных данных

Определить права доступа пользователя с маской к схеме БД и таблицам:


```sql
GRANT USAGE ON SCHEMA anon TO maskuser; 
GRANT USAGE ON SCHEMA public TO maskuser;
GRANT SELECT ON ALL TABLES IN SCHEMA anon TO maskuser; 
GRANT SELECT ON ALL TABLES IN SCHEMA public TO maskuser;
```



![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image24.png)

Рисунок 4.11 – Определить права доступа пользователя с маской к схеме БД и таблицам

#### Замена данных запроса фиксированным значением

Правило замены данных запроса фиксированным значением активируется следующим образом:

```sql
SECURITY LABEL FOR anon ON COLUMN employees.lastname IS 'MASKED WITH VALUE $$CONFIDENTIAL$$';
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image25.jpeg)


Рисунок 4.12 – Регистрация правила динамического маскирования исходных данных таблицы employees в столбце lastname

Другой вариант экранирования фиксированного значения выглядит следующим образом:


```sql
SECURITY LABEL FOR anon ON COLUMN employees.lastname IS $$MASKED WITH VALUE 'CONFIDENTIAL'$$;
```

При выполнении запроса от имени пользователя maskuser в столбце lastname будет отображаться замаскированное значение «CONFIDENTIAL».

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image413_.png)

Рисунок 4.13 – Данные таблицы employees после использования динамического маскирования к столбцам lastname при выполнении запроса от имени пользователя maskuser

#### Замена символами исходных данных

Правило замены исходных данных запроса на символы активируется с помощью выполнения следующего SQL-запроса:


```sql
SECURITY LABEL FOR anon ON COLUMN employees.postcode
IS 'MASKED WITH FUNCTION anon.partial(postcode,1,$$****$$,1)';
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image414_.png)

Рисунок 4.14 – Регистрация правила динамического маскирования исходных данных
таблицы employees в столбце postcode

#### Замена исходных данных на случайное правдоподобное значение

В данном правиле маскирования используется функция dummy_*.

Функция dummy_* при каждом запросе данных подставляет разные правдоподобные значения.

Правило для замены данных запроса на случайное правдоподобное значение активируется с помощью выполнения следующим образом:


```sql
SECURITY LABEL FOR anon ON COLUMN employees.company IS 'MASKED WITH FUNCTION anon.dummy_company_name()';
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image28.jpeg)

Рисунок 4.15 – Регистрация правила динамического маскирования исходных данных таблицы employees в столбце company

#### Замена исходных данных на псевдоним

В данном правиле маскирования используется функция pseudo_*. 

Функция pseudo_* подменяет исходные данные на псевдоним.

Псевдоним остается неизменным для каждого запроса данных. Иными словами, псевдонимизация — это способ защиты конфиденциальной информации, при котором, в отличие от замаскированных данных (функции dummy_\* и fake_\*), псевдонимизированные данные (pseudo_\*) в некоторой степени «связаны» с реальными данными в БД.

Правило для замены данных запроса на псевдонимизированные данные активируется с помощью выполнения следующим образом:

```sql
SECURITY LABEL FOR anon ON COLUMN employees.firstname IS 'MASKED WITH FUNCTION anon.pseudo_first_name(firstname)';
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image29.jpeg)



Рисунок 4.16 – Регистрация правила динамического маскирования исходных данных таблицы employees в столбце firstname

#### Результат применения динамического маскирования

После определения одного или нескольких правил динамического маскирования данных таблица, к которой имеет доступ пользователь без маски, будет иметь вид, представленный на рисунке [4.17](#_bookmark37).

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image30.jpeg)

<span id="_bookmark37" class="anchor"></span>Рисунок 4.17 – Исходные данные в таблице employees

В тоже время, для пользователя с маской эта таблица будет иметь вид, содержащий замаскированные данные (см. рисунок [4.18](#_bookmark38)).

<img src="../docs/assets/images/com18.4.1/ja_anonymizer/media/image31.png)

<span id="_bookmark38" class="anchor"></span>Рисунок 4.18 – Данные таблицы employees после использования динамического маскирования столбцов lastname, company и postcode при выполнении запроса от имени пользователя maskuser

При выполнении пользователем с маской повторного запроса результат будет содержать новые маскированные данные (столбец company) и те же самые псевдонимизированные данные (столбец firstname):

```sql
SELECT * FROM employees;

| id  | firstname | lastname     | company               | postcode |
|-----|-----------|--------------|-----------------------|----------|
| 111 | Abigail   | CONFIDENTIAL | Erdman and Sons       | 4****7   |
| 222 | Steve     | CONFIDENTIAL | Zulauf and Abbott LLC | 6****5   |
```

#### Отключение правила динамической маскировки

Для того чтобы отключить правило динамической маскировки необходимо выполнить следующий запрос:

```sql
SECURITY LABEL FOR anon ON COLUMN employees.lastname IS NULL;
```

#### Отключение правила динамической маскировки для пользователя

Для того чтобы отключить правило динамической маскировки для пользователя с маской необходимо выполнить следующий запрос:

```sql
SECURITY LABEL FOR anon ON ROLE maskuser IS NULL;
```

### Дамп с маскированными данными

Дамп с маскированными данными является удобным средством передачи копии реальной БД для разработки, тестирования или внешним организациям, без риска раскрытия персональных данных, коммерческой тайны и других критических данных.

#### Создания пользователя с маской для работы с дампом

Создадим пользователя, который будет использовать функционал дампа с маскированными данными:

```sql
CREATE ROLE anon_dumper LOGIN PASSWORD '[password]';
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image32.jpeg)

Рисунок 4.19 – Создание пользователя с маской для работы с дампом

Включение динамического маскирования данных с помощью выполнения следующего запроса:

```sql
ALTER ROLE anon_dumper SET anon.transparent_dynamic_masking = True;
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image33.jpeg)

Рисунок 4.20 – Включение динамического маскирования данных пользователя с маской для работы с дампом

Включение правил маскирования данных для пользователя:

```sql
SECURITY LABEL FOR anon ON ROLE anon_dumper IS 'MASKED';
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image34.png)

Рисунок 4.21 – Включение правил маскирования данных для пользователя с маской для работы с дампом

Для предоставления доступа к схеме данных и таблицам необходимо выполнить следующие запросы:

```sql
GRANT USAGE ON SCHEMA public TO anon_dumper;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon_dumper; 
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO anon_dumper; 
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon_dumper;
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image35.png)

Рисунок 4.22 – SQL-запросы для предоставления доступа к схеме данных и таблицам

#### Запуск создания дампа с маскированными данными

Для того чтобы создать дамп, содержащий маскированные данные необходимо выполнить команду:

```
postgres@node1:~$ pg_dump [db_name] --user anon_dumper --no-security-labels --file=test_anonymized.sql
```

:::info Дополнительная информация
Команда pg_dump выполняется от имени пользователя postgres.
:::

В случае возникновения ошибок при создании дампа с маскированными данными необходимо обратится к п.п. [6.1](#ошибка-при-выгрузке-дампа-с-маскированными-данными-из-бд-в-режиме).

#### Проверка маскировки данных в дампе

После создания дампа необходимо убедится в том, что данные в нем замаскированы (столбцы firstname, company и postcode):

```
COPY public.employees (id, firstname, lastname, company, postcode) FROM stdin;

111 Abigail Belova Jaskolski and Sons 4****7
222 Steve Petrov Christiansen and Heathcote Group 6****5
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image36.jpeg)

Рисунок 4.23 – Содержимое таблицы employees с замаскированными данными (столбцы firstname, company и postcode)

### Представления с маскированными данными

Для описания работы с маскированным представлением необходимо создать таблицу customer:

```sql
CREATE TABLE customer( id SERIAL,
full_name TEXT, birth DATE, employer TEXT, postcode TEXT, fk_shop INTEGER
);
```

Заполнить таблицу customer данными:

```
INSERT INTO customer VALUES
(911,'Sergey Svetlakov','1977-12-12','STS', '750010',12),
(312,'Mikhail Porechenkov','1969-03-02','NTV', '620086',423);
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image37.png)

Рисунок 4.24 – Создание таблицы customer и заполнение данными


Убедится в корректности внесенных данных:

```
SELECT * FROM customer;

id | full_name | birth | employer | postcode | fk_shop
911 | Sergey Svetlakov | 1977-12-12 | STS | 750010 |  12
312 | Mikhail Porechenkov | 1969-03-02 | NTV | 620086 | 423
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image38.png)

Рисунок 4.25 – Содержимое таблицы customer

Создание представления с маскированием данных осуществляется при помощи следующего запроса:

```
CREATE MATERIALIZED VIEW masked_customer AS SELECT
    id,
    'CONFIDENTIAL'::TEXT AS full_name,
    anon.generalize_daterange(birth,'decade') AS birth, employer,
    anon.partial(postcode,2,$$****$$,0) AS postcode, fk_shop
FROM customer;
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image39.jpeg)


Рисунок 4.26 – Создание представления masked_customer

Вывод информации указанного представления masked_customer будет содержать информацию, скрывающую исходные данные из таблицы customer:

```sql
SELECT * FROM masked_customer;


id | full_name | birth | employer | postcode| fk_shop
911 | CONFIDENTIAL | [1970-01-01,1980-01-01) | STS | 75**** | 12
312 | CONFIDENTIAL | [1960-01-01,1970-01-01) | NTV | 62**** | 423
```

<img src="../docs/assets/images/com18.4.1/ja_anonymizer/media/image40.png)

Рисунок 4.27 – Замаскированное содержимое представления masked_customer

### Маскирующие обертки данных

Принцип маскирующей обертки данных заключается в том, что СУБД используется в качестве «маскирующего прокси» с любым типом внешнего источника данных.

Таким образом возможно применять правила маскирования к данным, хранящимся в CSV-файлах, в другой СУБД, в хранилище NoSQL, в каталоге LDAP и так далее.

В приводимом примере источником данных будет файл журнала:

```
cat /tmp/app.log

2025-03-24 08:25:32,sarah,10.0.0.45,view_dashboard
2025-03-24 09:15:00,mike,172.16.0.89,update_profile
2025-03-24 09:30:45,emma,192.168.2.200,download_report
```

Здесь /tmp/app.log – путь и название файла журнала с данными.

#### Подготовка к работе с внешним источником данных

Для загрузки данных из внешнего источника необходимо воспользоваться расширением file_fdw:

```sql
CREATE EXTENSION IF NOT EXISTS file_fdw;
CREATE SERVER external_files FOREIGN DATA WRAPPER file_fdw;
```

Создать новую схему данных для работы с внешним источником. В примере таблица будет называться files:

```sql
CREATE SCHEMA files;
```


![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image41.png)

Рисунок 4.28 – Создание и настройка расширения file_fdw, создание схемы данных files

#### Создание внешней таблицы

Столбцы внешней таблицы соответствуют содержимому файла журнала.

Для работы с внешним источником данных необходимо создать таблицу и указать источник внешних данных:

```sql
CREATE FOREIGN TABLE files.app_log (
tms TIMESTAMP, login VARCHAR(255), ip INET,
action TEXT
)
SERVER external_files
OPTIONS (filename '/tmp/app.log', delimiter ',');
```

Опция filename указывает путь и название внешнего источника данных для маскирования.


:::info Дополнительная информация
К файлу внешнего источника данных должен быть обеспечен доступ для пользователя postgres
:::

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image42.jpg)

Рисунок 4.29 – Создание внешней таблицы files.app_log

Для предоставления доступа к схеме данных и таблицам необходимо выполнить следующие запросы:

```sql
GRANT USAGE ON SCHEMA files TO maskuser;
GRANT SELECT ON ALL TABLES IN SCHEMA files TO maskuser;
```

![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image43.png)



Рисунок 4.30 – Предоставление доступа к схеме данных и внешней таблице files.app_log

#### Определение правил маскирования данных внешнего источника

В соответствии с тем к каким полям необходимо применить маскирование определяются правила маскировки:

```sql
SECURITY LABEL FOR anon ON COLUMN files.app_log.login IS 'MASKED WITH VALUE $$CONFIDENTIAL$$';
SECURITY LABEL FOR anon ON COLUMN files.app_log.ip IS 'MASKED WITH FUNCTION anon.dummy_ipv4()';
```


![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image44.png)

Рисунок 4.31 – Определение правил маскирования данных внешней таблицы files.app_log 

Альтернативный вариант экранирования значения CONFIDENTIAL:

```sql
SECURITY LABEL FOR anon ON COLUMN files.app_log.login IS $$MASKED WITH VALUE 'CONFIDENTIAL'$$;
```

#### Проверка маскирования данных из внешнего источника

Для проверки маскирования данных из внешнего источника необходимо выполнить запрос к таблице:

```sql
\c - maskuser

You are now connected to database "anon_db" as user "maskuser".
SELECT * FROM files.app_log;

tms                 | login        | ip             | action

2025-03-24 08:25:32 | CONFIDENTIAL | 152.90.250.121 | view_dashboard

2025-03-24 09:15:00 | CONFIDENTIAL | 177.29.143.147 | update_profile

2025-03-24 09:30:45 | CONFIDENTIAL | 204.141.38.236 | download_report
```

В результате запроса данные, которые были определены ранее правилами маскирования искажены или содержат запись о конфиденциальности.


![](@site/docs/assets/images/com18.4.1/ja_anonymizer/media/image45.png)

Рисунок 4.32 – Маскированные данные внешней таблицы files.app_log при просмотре от имени пользователя с маской

## УДАЛЕНИЕ РАСШИРЕНИЯ

Расширение компонента и библиотека удаляются с помощью следующих SQL-команд:

```sql
postgres=# DROP EXTENSION anon CASCADE;
postgres=# ALTER DATABASE anon_db RESET session_preload_libraries;
```

После этого необходимо убедится в том, что расширение компонента успешно удалено из СУБД при помощи команды:

```sql
\dx
```

В конфигурационном файле СУБД postgresql.conf закомментировать (при помощи знака #) или удалить из параметра shared_preload_libraries название библиотеки компонента:

```
#shared_preload_libraries = 'anon'
```

Перезагрузить СУБД и убедится в корректном статусе работы службы:

```
# systemctl restart jatoba-<ver>
# systemctl status jatoba-<ver>
```

## ВОЗМОЖНЫЕ ОШИБКИ

### Ошибка при выгрузке дампа с маскированными данными из БД в режиме **«только чтение»**

Предварительные условия:

- Установленные СУБД «Jatoba» и расширение ja_anonymizer в БД anon_db;

- Создан пользователя с маской (здесь и далее см. п.п. [4.3.1](#создания-пользователя-с-маской-для-работы-с-дампом)):

```sql
CREATE ROLE anon_dumper LOGIN PASSWORD '[password]';
```

- Включено динамическое маскирование данных роли:

```sql
ALTER ROLE anon_dumper SET anon.transparent_dynamic_masking = true;
```

- Применено правило маскирования данных к созданному пользователю:

```sql
SECURITY LABEL FOR anon ON ROLE anon_dumper IS 'MASKED';
```
- Создана таблица и активировано правило маскирования данных таблицы с генерацией последовательных значений (sequence):

```sql
SECURITY LABEL FOR anon ON COLUMN customer.id IS $$MASKED WITH FUNCTION anon.random_id_int()$$;
```

После создания таблицы, содержащей данные для маскирования, при выгрузке в дамп может возникать ошибка следующего вида:

```
./pg_dump anon_db --user anon_dumper --no-security-labels --file=masked_data.sql

pg_dump: error: Dumping the contents of table "customer" failed: PQgetResult() failed.

pg_dump: detail: Error message from server: ОШИБКА: в транзакции в режиме "только чтение" нельзя выполнить nextval()

CONTEXT: SQL-функция "random_id_int", оператор 1

pg_dump: detail: Command was: COPY public.customer (id, full_name, birth, city, postcode, fk_shop) TO stdout
```

Возникновение данной ошибки связано с установленным для БД режимом «только чтение» (read-only). В связи с этим, при выполнении выгрузки дампа из БД функции маскирования данных, которые выполняют изменение пользовательских и/или служебных данных (например, счетчики), не будут доступны к использованию.

## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

| Сокращение | Расшифровка                                                                                                           |
|------------|-----------------------------------------------------------------------------------------------------------------------|
| CSV        | Текстовый формат, предназначенный для представления табличных данных                                                  |
| LDAP       | Протокол прикладного уровня для доступа к службе каталогов                                                            |
| NoSQL      | Обозначение класса систем управления базами данных (СУБД) и существенно отличающихся от традиционных реляционных СУБД |
| SQL        | Structured Query Language                                                                                             |
| БД         | База данных                                                                                                           |
| ОС         | Операционная система                                                                                                  |
| СУБД       | Система управления базами данных                                                                                      |

