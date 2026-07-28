---
title: Компонент «ja_Similar». Полнотекстовый поиск.
toc_max_heading_level: 4
---

**Аннотация**

В документе приведены сведения, необходимые для установки и эксплуатации компонента «ja_Similar» (далее по тексту – «компонент» или ja_Similar), предназначенного для выполнения полнотекстового поиска и определения похожих текстов.




:::info Дополнительная информация
Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра
6.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.

Например, СУБД «Jatoba» версии 6.x по умолчанию устанавливается в директорию ОС Linux – «/usr/jatoba-6/bin».

Версия компонента — 1.0
:::

:::warning Важная информация
Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!
:::

## НАЗНАЧЕНИЕ КОМПОНЕНТА

Компонент «ja_Similar» предназначен для предоставления функции и операторы для определения схожести текстов на основе техники хеширования, чувствительного к близким значениям (Locally-Sensitive Hashing или LSH).

Решение такого типа задачи ранее не было доступно в PostgreSQL. С помощью этого расширения решаются типы задач:

- поиск плагиата;

- сравнение содержания статей;

- дедупликация документов;

- поиск аномалий в типовых документах;

- сравнение с эталоном на схожесть.

### Условия применения

Компонент «ja_Similar» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционной системы GNU/Linux.

:::warning Важная информация
В текущей реализации компонента не поддерживается управление через компонент пользовательского	веб-интерфейса	для	администраторов «Jatoba data safe», но поддерживается установка расширения. Ограничений по совместимости с другими компонентами нет.
:::

## УСТАНОВКА И НАСТРОЙКА

Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе.

### Установка пакета «ja_Similar»

Пакет компонента устанавливается после установки базовых пакетов СУБД «Jatoba»:

- jatoba<ver>-client – клиентская часть СУБД;

- jatoba<ver>-contrib – вспомогательный набор модулей (расширений) СУБД;

- jatoba<ver>-libs – основные библиотеки для клиентской и серверной части СУБД;

- jatoba<ver>-server – серверная часть СУБД.

В зависимости от типа ОС GNU/Linux пакет компонента устанавливается командой в терминале:

- ОС GNU/Linux Debian и производные от нее:

```
apt-get install jatoba<ver>-ja-similar
```

- ОС GNU/Linux Red Hat и производные от нее:

```
yum install jatoba<ver>-ja-similar
```

- ОС ALTLinux:

```
apt-get install jatoba<ver>-ja-similar
```

### Установка расширения «ja_Similar»

В СУБД «Jatoba» расширение устанавливается от имени и с правами привилегированного пользователя SQL-командой:

```
CREATE EXTENSION ja_similar;
```

## ФУНКЦИОНАЛЬНЫЕ ВОЗМОЖНОСТИ КОМПОНЕНТА

Расширение «ja_similar» предоставляет функции и операторы для определения схожести текстов на основе техники хеширования, чувствительного к близким значениям (Locally-Sensitive Hashing, или LSH).

### Функции и операторы

### Функции расширения

minhash_similarity - это функция расширения, определяющая **расчетную схожесть текстов**. Выводимый расчет определяет схожесть текстов в диапазоне результатов:

- от нуля - значение указывает, что два текста полностью различны;

- до одного - значение указывает, что два текста идентичны.

Описание функции приведено в таблице 3.1.

Таблица 3.1 – Описание функции «minhash_similarity»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 15%" />
<col style="width: 58%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Оператор</strong></p>
</th>
<th>
<p><strong>Возвращает</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>minhash_similarity(text, text)</p>
</td>
<td>
<p>float8</p>
</td>
<td>
<p>Возвращает расчетную схожесть двух текстов.</p>
</td>
</tr>
</tbody>
</table>

### Операторы расширения

Расширение имеет оператор приведенный в таблице 3.2.

Таблица 3.2 – Операторы расширения «ja_similar»

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 15%" />
<col style="width: 58%" />
</colgroup>
<thead>
<tr>
<th>
<p><strong>Оператор</strong></p>
</th>
<th>
<p><strong>Возвращает</strong></p>
</th>
<th style="text-align: center;">
<p><strong>Описание</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>text &lt;~&gt; text</p>
</td>
<td>
<p>boolean</p>
</td>
<td>
<p>Возвращает true, если схожесть аргументов выше текущего порога, заданного параметром ja_lsh_fts.similarity_threshold.</p>
</td>
</tr>
</tbody>
</table>

### Параметры GUC

Расширение «ja_similar» использует параметры:

- similarity_threshold - **порог схожести**;

> ja_similar.similarity_threshold (float8)

Параметр задаёт текущий порог схожести, который используют оператор <~> и функция «minhash_similarity». Это значение должно быть в диапазоне от 0 до 1.

Значение по умолчанию – 0.1.

- consistent_threshold - **отсекающий порог** (уровень);

> ja_similar.consistent_threshold (float8)

Параметр задает отсекающий порог (уровень), который используется внутри индекса GIN при проверке значений на соответствие запросу, т.е. это предвыборка, которая отсекает неподходящий текст до поиска.

Это значение должно быть в диапазоне от 0 до 1. Значение по умолчанию – 0.2.

Если указать высокое значение отсекающего порога (consistent_threshold), то при поиске будут отбираться тексты, совпадающие по наполнению примерно на 100%. То есть для расчета схожести будут отобраны тексты, совпадающие с искомым почти полностью.

При низком значении текущего порога схожести (consistent_threshold) для расчета схожести отбирается больше текстов, в том числе не обязательно схожих.

Если указать высокое значение отсекающего порога (consistent_threshold), то при расчете схожести (minhash_similarity) в результат попадут только те из подтекстов, которые совпадают в соотношении similarity_threshold \* 100%.

Тогда расчетная схожесть текстов (minhash_simialrity) будет стремится к «1», если искомый текст содержится в найденном примерно полностью.

При низком пороге схожести (similarity_threshold) значение расчетной схожести тестов (minhash_similarity) отражает более общую схожесть текстов, т.е. им не обязательно совпадать.

Эти параметры были вынесены в GUC, для оптимизации конкретного поискового запроса, если при стандартных параметрах он долго выполняется или плохо считает схожесть.

### Класс операторов для индексов

Компонент «ja_Similar» предоставляет класс операторов индекса GIN, позволяющий создавать индекс по текстовым столбцам для очень быстрого поиска по критерию схожести

подтекста с исходным текстом большой длины. Этот тип индекса поддерживает вышеописанный оператор схожести.

Пример:

```
# CREATE TABLE test_sim (id bigserial, content text);
```

```
# CREATE INDEX sim_idx ON test_sim USING GIN (content gin_minhash_ops);
```

На данном этапе создан индекс по столбцу «content», используя который можно осуществлять поиск по схожести.

Пример типичного запроса:

```
SELECT t.id, minhash_similarity(t.content, :'text') AS similarity
FROM test_sim AS t
WHERE t.content <~> :'text' ORDER BY similarity DESC;
```

Расчет схожести текстов основан на подходе к созданию сигнатур, который по своей сути вероятностный, из-за чего могут возникать ситуации, когда:

- Подтекст полностью содержится в тексте, но схожесть меньше 1;

- Подтекст не полностью содержится в тексте, но итоговая схожесть равна 1;

Данные ситуации нормальны и не являются поводом для беспокойства. Также стоит выбирать для запросов тексты длиной не менее порядка 200-300 символов, так как на коротких текстах точность поиска довольно низкая.

### Пример использования

На примере, показанном ниже, демонстрируется, как выглядит работа с расширением на реальных данных. Для демонстрации взят дамп из 10000 статей Википедии сохраненный в каталог /wiki.

Требуется выполнить следующие шаги:

− Создать таблицу:

```
CREATE TABLE articles(id SERIAL PRIMARY KEY, title VARCHAR(128), content text);
```

![](@site/docs/assets/images/com18.3.1/ja_similar/media/image3.png)

Рисунок 3.1 – Создание таблицы

В таблицу загружаются данные из дампа Википедии fixed_wikidump.csv:

```
FROM '/wiki/fixed_wikidump.csv' WITH (FORMAT csv, HEADER, ENCODING 'UTF8');
```

![](@site/docs/assets/images/com18.3.1/ja_similar/media/image4.png)



Рисунок 3.2 – Загрузка дампа в таблицу

- Создать индекс LSH;
- 
```
CREATE INDEX lsh_idx ON articles USING gin(content gin_minhash_ops);
```

Создается индекс для поиска похожих текстов над колонкой «content» с содержимым статей SQL-командой:

![](@site/docs/assets/images/com18.3.1/ja_similar/media/image5.png)



Рисунок 3.3 – Создание индекса LSH

- Отключить последовательного сканирования SeqScan;

Для нормальной работы индекса GIN на больших данных выключить последовательное сканирование SeqScan, которое подразумевает последовательный перебор всех строк БД в поисках требуемого значения SQL-командой:

```
SET enable_seqscan = OFF;
```

![](@site/docs/assets/images/com18.3.1/ja_similar/media/image6.png)



Рисунок 3.4 – Отключение сканирования SeqScan

- Задать произвольный текст;

Задать произвольный текст для создания читаемого запроса, который будет искаться.

Для примера взят фрагмент из статьи про Аристотеля.

:::info Дополнительная информация
В СУБД «Jatoba» под управлением ОС Windows в SQL-команде используются двойные кавычки
:::

> \set query_text 'Plato argued that all things have a universal form, which could be either a property or a relation to other things. When one looks at an apple, for example, one sees an apple, and one can also analyse a form of an apple. In this distinction, there is a particular apple and a universal form of an apple. Moreover, one can place an apple next to a book, so that one can speak of both the book and apple as being next to each other. Plato argued that there are some universal forms that are not a part of particular things. For example, it is possible that there is no particular good in existence, but "good" is still a proper universal form. Aristotle disagreed with Plato on this point, arguing that all universals are instantiated at some period of time, and that there are no universals that are unattached to existing things. In addition, Aristotle disagreed with Plato about the location of universals. Where Plato spoke of the forms as existing separately from the things that participate in them, Aristotle maintained that universals exist within each thing on which each universal is predicated. So, according to Aristotle, the form of apple exists within each apple, rather than in the world of the forms.'

![](@site/docs/assets/images/com18.3.1/ja_similar/media/image7.png)

Рисунок 3.5 – Задание искомого текста

- Выполнить запрос на поиск похожих текстов:

В этом запросе мы получается список статей, содержимое которых имеет схожесть с нашим искомым куском текста, и эту самую расчетную схожесть.

```
SELECT t.id, t.title, minhash_similarity(t.content,

:'query_text') AS similarity FROM articles AS t

WHERE t.content <~> :'query_text' ORDER BY similarity DESC;
```

![](@site/docs/assets/images/com18.3.1/ja_similar/media/image8.png)



Рисунок 3.6 – Запрос и вывод схожести текстов

В выводе SQL-запроса возвращены:

- ID -71;

- название статьи – Aristotle;

- коэффициент схожести - 87.5%, близкий к 1 (87.5 процентов).

## УДАЛЕНИЕ КОМПОНЕНТА

Удаление компонента проводится поэтапно. Расширение удаляется SQL-командой:

```
DROP EXTENSION ja_similar CASCADE;
```

После чего проверяется отсутствие расширения в БД:

```
\dx
```

Проверяется отсутствие схемы данных в БД:

```
\dn
```

В зависимости от типа ОС GNU/Linux пакет компонента удаляется командой в терминале:

- ОС GNU/Linux Debian и производные от нее:

```
apt-get remove jatoba<ver>-ja-similar
```

- ОС GNU/Linux Red Hat и производные от нее:

```
yum remove jatoba<ver>-rum ja-similar
```

- ОС ALTLinux:

```
apt-get remove jatoba<ver>-ja-similar
```

- ОС openSUSE:

```
zypper remove jatoba<ver>-ja-similar
```

## ПЕРЕЧЕНЬ СОКРАЩЕНИЙ

| Сокращение | Расшифровка                      |
|------------|----------------------------------|
| SQL        | Structured Query Language        |
| БД         | База данных                      |
| ОС         | Операционная система             |
| СУБД       | Система управления базами данных |

