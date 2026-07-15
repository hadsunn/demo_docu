<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><p>УТВЕРЖДЕН</p>
<p>643.72410666.00067-07 98 01-ЛУ</p></th>
<th style="text-align: center;"></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" style="text-align: center;"><p>ЗАЩИЩЕННАЯ СИСТЕМА УПРАВЛЕНИЯ<br />
БАЗАМИ ДАННЫХ «JATOBA»</p>
<p><strong>Руководство по настройке. Часть 22.<br />
Полнотекстовый поиск и определение похожих текстов.</strong></p>
<p><strong>Компонент «ja_Similar»</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-22</strong></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">Листов 17</td>
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

В документе приведены сведения, необходимые для установки и эксплуатации компонента «ja_Similar» (далее по тексту – «компонент» или ja_Similar), предназначенного для выполнения полнотекстового поиска и определения похожих текстов.

Настоящее руководство предназначено для администраторов СУБД.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 6.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.</p>
<p>Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию:</p>
<ul>
<li></li>
<li></li>
</ul>
<p>ОС Windows – «C:\Program Files\GIS\Jatoba\6\bin»;ОС Linux – «/usr/jatoba-6/bin».Версия компонента — 1.0</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image2.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image1.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонента [4](#назначение-компонента)](#назначение-компонента)

[1.1. Условия применения [4](#поиск-плагиатасравнение-содержания-статейдедупликация-документовпоиск-аномалий-в-типовых-документахсравнение-с-эталоном-на-схожесть.условия-применения)](#поиск-плагиатасравнение-содержания-статейдедупликация-документовпоиск-аномалий-в-типовых-документахсравнение-с-эталоном-на-схожесть.условия-применения)

[2. Установка и настройка [5](#установка-и-настройка)](#установка-и-настройка)

[2.1. Установка пакета «ja_Similar» [5](#установка-пакета-ja_similar)](#установка-пакета-ja_similar)

[2.2. Установка расширения «ja_Similar» [6](#установка-расширения-ja_similar)](#установка-расширения-ja_similar)

[3. Функциональные возможности компонента [7](#функциональные-возможности-компонента)](#функциональные-возможности-компонента)

[3.1. Функции и операторы [7](#функции-и-операторы)](#функции-и-операторы)

[3.1.1. Функции расширения [7](#функции-расширения)](#функции-расширения)

[3.1.2. Операторы расширения [7](#операторы-расширения)](#операторы-расширения)

[3.2. Параметры GUC [7](#параметры-guc)](#параметры-guc)

[3.3. Класс операторов для индексов [8](#класс-операторов-для-индексов)](#класс-операторов-для-индексов)

[3.4. Пример использования [9](#пример-использования)](#пример-использования)

[4. Удаление компонента [14](#удаление-компонента)](#удаление-компонента)

[Перечень сокращений [16](#_Toc187831030)](#_Toc187831030)

# Назначение компонента

Компонент «ja_Similar» предназначен для предоставления функции и операторы для определения схожести текстов на основе техники хеширования, чувствительного к близким значениям (Locally-Sensitive Hashing, или LSH).  

Решение такого типа задачи ранее не было доступно в PostgreSQL. С помощью этого расширения решаются типы задач:

- 
- 
- 
- 
- 

## поиск плагиата;сравнение содержания статей;дедупликация документов;поиск аномалий в типовых документах;сравнение с эталоном на схожесть.Условия применения

Компонент «ja_Similar» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем Windows и GNU/Linux.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>В текущей реализации компонента не поддерживается управление через компонент пользовательского веб-интерфейса для администраторов<br />
«Jatoba data safe», но поддерживается установка расширения.</p>
<p>Ограничений по совместимости с другими компонентами нет.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# Установка и настройка

Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе.

## Установка пакета «ja_Similar» 

Пакет компонента устанавливается после установки базовых пакетов СУБД «Jatoba»:

- 
- 
- 
- 

jatoba\<ver\>-client – клиентская часть СУБД;jatoba\<ver\>-contrib – вспомогательный набор модулей (расширений) СУБД;jatoba\<ver\>-libs – основные библиотеки для клиентской и серверной части СУБД;jatoba\<ver\>-server – серверная часть СУБД.В зависимости от типа ОС GNU/Linux пакет компонента устанавливается командой в терминале:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba\<ver\>-ja-similar

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba\<ver\>-ja-similar

- 

> ОС ALTLinux:apt-get install jatoba\<ver\>-ja-similar

## Установка расширения «ja_Similar»

В СУБД «Jatoba» расширение устанавливается от имени и с правами привилегированного пользователя SQL-командой:

> CREATE EXTENSION ja_similar;

# Функциональные возможности компонента

Расширение «ja_similar» предоставляет функции и операторы для определения схожести текстов на основе техники хеширования, чувствительного к близким значениям (Locally-Sensitive Hashing, или LSH).

## Функции и операторы

### Функции расширения

minhash_similarity - это функция расширения, определяющая **расчетную схожесть текстов**. Выводимый расчет определяет схожесть текстов в диапазоне результатов:

- 
- 

от нуля - значение указывает, что два текста полностью различны;до одного - значение указывает, что два текста идентичны.Описание функции приведено в таблице Таблица 3.1.

<table>
<caption><p>Таблица 3.1 – Описание функции «minhash_similarity»</p></caption>
<colgroup>
<col style="width: 26%" />
<col style="width: 15%" />
<col style="width: 58%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Оператор</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Возвращает</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td>minhash_similarity(text, text)</td>
<td>float8</td>
<td>Возвращает расчетную схожесть двух текстов.</td>
</tr>
</tbody>
</table>

Таблица 3.1 – Описание функции «minhash_similarity»

### Операторы расширения

Расширение имеет оператор приведенный в таблице Таблица 3.2.

<table>
<caption><p>Таблица 3.2 – Операторы расширения «ja_similar»</p></caption>
<colgroup>
<col style="width: 26%" />
<col style="width: 15%" />
<col style="width: 58%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Оператор</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Возвращает</strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Описание</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td>text &lt;~&gt; text</td>
<td>boolean</td>
<td>Возвращает true, если схожесть аргументов выше текущего порога, заданного параметром ja_lsh_fts.similarity_threshold.</td>
</tr>
</tbody>
</table>

Таблица 3.2 – Операторы расширения «ja_similar»

## Параметры GUC

Расширение «ja_similar» использует параметры:

- 

> similarity_threshold - **порог схожести**;ja_similar.similarity_threshold (float8)

Параметр задаёт текущий порог схожести, который используют оператор \<~\> и функция «minhash_similarity». Это значение должно быть в диапазоне от 0 до 1.

Значение по умолчанию – 0.1.

- 

> consistent_threshold - **отсекающий порог** (уровень);ja_similar.consistent_threshold (float8)

Параметр задает отсекающий порог (уровень), который используется внутри индекса GIN при проверке значений на соответствие запросу, т.е. это предвыборка, которая отсекает неподходящий текст до поиска.

Это значение должно быть в диапазоне от 0 до 1.

Значение по умолчанию – 0.2.

Если указать высокое значение отсекающего порога (consistent_threshold), то при поиске будут отбираться тексты, совпадающие по наполнению примерно на 100%. То есть для расчета схожести будут отобраны тексты, совпадающие с искомым почти полностью.

При низком значении текущего порога схожести (consistent_threshold) для расчета схожести отбирается больше текстов, в том числе не обязательно схожих.

Если указать высокое значение отсекающего порога (consistent_threshold), то при расчете схожести (minhash_similarity) в результат попадут только те из подтекстов, которые совпадают в соотношении similarity_threshold \* 100%.

Тогда расчетная схожесть текстов (minhash_simialrity) будет стремится к «1», если искомый текст содержится в найденном примерно полностью.

При низком пороге схожести (similarity_threshold) значение расчетной схожести тестов (minhash_similarity) отражает более общую схожесть текстов, т.е. им не обязательно совпадать.

Эти параметры были вынесены в GUC, для оптимизации конкретного поискового запроса, если при стандартных параметрах он долго выполняется или плохо считает схожесть.

## Класс операторов для индексов

Компонент «ja_Similar» предоставляет класс операторов индекса GIN, позволяющий создавать индекс по текстовым столбцам для очень быстрого поиска по критерию схожести подтекста с исходным текстом большой длины. Этот тип индекса поддерживает вышеописанный оператор схожести.

Пример:

> \# CREATE TABLE test_sim (id bigserial, content text);
>
> \# CREATE INDEX sim_idx ON test_sim USING GIN (content gin_minhash_ops);

На данном этапе создан индекс по столбцу «content», используя который можно осуществлять поиск по схожести.

Пример типичного запроса:

> SELECT t.id, minhash_similarity(t.content, :'text') AS similarity
>
> FROM test_sim AS t
>
> WHERE t.content \<~\> :'text'
>
> ORDER BY similarity DESC;

Расчет схожести текстов основан на подходе к созданию сигнатур, который по своей сути вероятностный, из-за чего могут возникать ситуации, когда:

- 
- 

Подтекст полностью содержится в тексте, но схожесть меньше 1;Подтекст не полностью содержится в тексте, но итоговая схожесть равна 1;Данные ситуации нормальны и не являются поводом для беспокойства. Также стоит выбирать для запросов тексты длиной не менее порядка 200-300 символов, так как на коротких текстах точность поиска довольно низкая.

## Пример использования

На примере, показанном ниже, демонстрируется, как выглядит работа с расширением на реальных данных. Для демонстрации взят дамп из 10000 статей Википедии сохраненный в каталог /wiki.

Требуется выполнить следующие шаги:

- 

> Создать таблицу:CREATE TABLE articles(id SERIAL PRIMARY KEY, title VARCHAR(128), content text);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image3.png" style="width:7.10448in;height:1.26165in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-10 05-46-52.png" />

Рисунок 3.1 – Создание таблицы

В таблицу загружаются данные из дампа Википедии fixed_wikidump.csv:

> FROM '/wiki/fixed_wikidump.csv' WITH (FORMAT csv, HEADER, ENCODING 'UTF8');

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image4.png" style="width:7.11875in;height:1.27444in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-10 05-54-27.png" />

Рисунок 3.2 – Загрузка дампа в таблицу

- 

Создать индекс LSH;Создается индекс для поиска похожих текстов над колонкой «content» с содержимым статей SQL-командой:

> CREATE INDEX lsh_idx ON articles USING gin(content gin_minhash_ops);

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image5.png" style="width:7.16953in;height:1.08955in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-10 06-00-49.png" />

Рисунок 3.3 – Создание индекса LSH

- 

Отключить последовательного сканирования SeqScan;Для нормальной работы индекса GIN на больших данных выключить последовательное сканирование SeqScan, которое подразумевает последовательный перебор всех строк БД в поисках требуемого значения SQL-командой:

> SET enable_seqscan = OFF;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image6.png" style="width:7.1194in;height:1.12758in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-10 06-02-56.png" />

Рисунок 3.4 – Отключение сканирования SeqScan

- 

Задать произвольный текст;Задать произвольный текст для создания читаемого запроса, который будет искаться. Для примера взят фрагмент из статьи про Аристотеля.

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image1.png" style="width:0.25in;height:0.25in" /> | В СУБД «Jatoba» под управлением ОС Windows в SQL-команде используются двойные кавычки |
|----|----|

> \set query_text 'Plato argued that all things have a universal form, which could be either a property or a relation to other things. When one looks at an apple, for example, one sees an apple, and one can also analyse a form of an apple. In this distinction, there is a particular apple and a universal form of an apple. Moreover, one can place an apple next to a book, so that one can speak of both the book and apple as being next to each other. Plato argued that there are some universal forms that are not a part of particular things. For example, it is possible that there is no particular good in existence, but "good" is still a proper universal form. Aristotle disagreed with Plato on this point, arguing that all universals are instantiated at some period of time, and that there are no universals that are unattached to existing things. In addition, Aristotle disagreed with Plato about the location of universals. Where Plato spoke of the forms as existing separately from the things that participate in them, Aristotle maintained that universals exist within each thing on which each universal is predicated. So, according to Aristotle, the form of apple exists within each apple, rather than in the world of the forms.'

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image7.png" style="width:7.13005in;height:3.55224in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-10 06-04-07.png" />

Рисунок 3.5 – Задание искомого текста

- 

Выполнить запрос на поиск похожих текстов:В этом запросе мы получается список статей, содержимое которых имеет схожесть с нашим искомым куском текста, и эту самую расчетную схожесть.

> SELECT t.id, t.title, minhash_similarity(t.content, :'query_text') AS similarity
>
> FROM articles AS t
>
> WHERE t.content \<~\> :'query_text'
>
> ORDER BY similarity DESC;

<img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/ja_similar/media/image8.png" style="width:7.23649in;height:2.5in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC1\Screenshot from 2024-12-10 06-14-52.png" />

Рисунок 3.6 – Запрос и вывод схожести текстов

В выводе SQL-запроса возвращены:

- 
- 
- 

ID -71;название статьи – Aristotle;коэффициент схожести - 87.5%, близкий к 1 (87.5 процентов).

# Удаление компонента

Удаление компонента проводится поэтапно.

Расширение удаляется SQL-командой:

> DROP EXTENSION ja_similar CASCADE;

После чего проверяется отсутствие расширения в БД:

> \dx

Проверяется отсутствие схемы данных в БД:

> \dn

В зависимости от типа ОС GNU/Linux пакет компонента удаляется командой в терминале:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get remove jatoba\<ver\>-ja-similar

- 

> ОС GNU/Linux Red Hat и производные от нее:yum remove jatoba\<ver\>-rum ja-similar

- 

> ОС ALTLinux:apt-get remove jatoba\<ver\>-ja-similar

- 

> ОС openSUSE:zypper remove jatoba\<ver\>-ja-similar

# 

| <span id="_Toc187831030" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language |
|:---|----|----|
| БД | – | База данных |
| ОС | – | Операционная система |
| СУБД | – | Система управления базами данных |

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
