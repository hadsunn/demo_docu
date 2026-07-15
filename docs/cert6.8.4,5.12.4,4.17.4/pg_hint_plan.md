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
<p><strong>Руководство по настройке. Часть 31.<br />
Корректировка запросов.<br />
Компонент «pg_hint_plan»</strong></p></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;"><strong>643.72410666.00067-07 98 01-31</strong></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="2" style="text-align: center;">Листов 16</td>
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

В документе приведены сведения, необходимые для установки и эксплуатации компонента «pg_hint_plan» (далее по тексту – «компонент»), предназначенного для выполнения корректировки запросов.

Настоящее руководство предназначено для администраторов СУБД.

Для СУБД «Jatoba» версии ядра 5 используется версия компонента — 1.5.1

Для СУБД «Jatoba» версии ядра 6 используется версия компонента — 1.6.0

Степени важности примечаний, применяемые в документе:

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_hint_plan/media/image1.png" style="width:0.25139in;height:0.25139in" /> | **Важная информация** – указания, требующие особого внимания |
|----|----|

| <img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_hint_plan/media/image2.png" style="width:0.25in;height:0.25in" /> | **Дополнительная информация** – указания, позволяющие упростить работу с изделием |
|----|----|

**СОДЕРЖАНИЕ**

# 

[1. Назначение компонента [4](#назначение-компонента)](#назначение-компонента)

[1.1. Условия применения [4](#условия-применения)](#условия-применения)

[1.2. Ограничения [4](#ограничения)](#ограничения)

[2. Установка и настройка [5](#если-в-предложении-from-больше-чем-from_collapse_limit-элементов-компонент-не-может-повлиять-на-порядок-соединенияесли-принудительно-выбранный-план-нельзя-выполнить-компонент-выберет-любой-исполнимыйнельзя-передать-запрос-в-ecpgодинаковые-запросы-с-разными-указаниями-будут-консолидироваться-как-один-и-тот-же-запрос.установка-и-настройка)](#если-в-предложении-from-больше-чем-from_collapse_limit-элементов-компонент-не-может-повлиять-на-порядок-соединенияесли-принудительно-выбранный-план-нельзя-выполнить-компонент-выберет-любой-исполнимыйнельзя-передать-запрос-в-ecpgодинаковые-запросы-с-разными-указаниями-будут-консолидироваться-как-один-и-тот-же-запрос.установка-и-настройка)

[3. Функциональные возможности компонента [6](#функциональные-возможности-компонента)](#функциональные-возможности-компонента)

[3.1. Использование [6](#использование)](#использование)

[3.2. Таблица указаний [6](#таблица-указаний)](#таблица-указаний)

[3.3. Типы указаний [6](#типы-указаний)](#типы-указаний)

[3.4. Указания для методов сканирования [7](#указания-для-методов-сканирования)](#указания-для-методов-сканирования)

[3.5. Указания для методов соединения [7](#указания-для-методов-соединения)](#указания-для-методов-соединения)

[3.6. Указание для порядка соединения [7](#указание-для-порядка-соединения)](#указание-для-порядка-соединения)

[3.7. Указания для управления поведением соединения [7](#указания-для-управления-поведением-соединения)](#указания-для-управления-поведением-соединения)

[3.8. Указание для корректировки числа строк [8](#указание-для-корректировки-числа-строк)](#указание-для-корректировки-числа-строк)

[3.9. Указания для параллельных планов [8](#указания-для-параллельных-планов)](#указания-для-параллельных-планов)

[3.10. Временное переопределение параметров GUC [8](#временное-переопределение-параметров-guc)](#временное-переопределение-параметров-guc)

[3.11. Параметры GUC для настройки pg_hint_plan [8](#параметры-guc-для-настройки-pg_hint_plan)](#параметры-guc-для-настройки-pg_hint_plan)

[3.12. Подробное описание указаний [9](#подробное-описание-указаний)](#подробное-описание-указаний)

[3.12.1. Синтаксис и расположение [9](#синтаксис-и-расположение)](#синтаксис-и-расположение)

[3.12.2. Использование с PL/pgSQL [9](#использование-с-plpgsql)](#использование-с-plpgsql)

[3.12.3. Регистр букв в именах объектов [9](#указания-воздействуют-только-на-следующие-типы-запросовзапросы-возвращающие-одну-строку-select-insert-update-и-deleteзапросы-возвращающие-множество-строк-return-queryдинамические-операторы-sql-executeзапрос-открывающий-курсор-openцикл-по-результату-запроса-forкомментарий-с-указанием-должен-добавляться-после-первого-слова-запроса-так-как-комментарии-идущие-перед-ним-в-составе-запроса-не-передаются.регистр-букв-в-именах-объектов)](#указания-воздействуют-только-на-следующие-типы-запросовзапросы-возвращающие-одну-строку-select-insert-update-и-deleteзапросы-возвращающие-множество-строк-return-queryдинамические-операторы-sql-executeзапрос-открывающий-курсор-openцикл-по-результату-запроса-forкомментарий-с-указанием-должен-добавляться-после-первого-слова-запроса-так-как-комментарии-идущие-перед-ним-в-составе-запроса-не-передаются.регистр-букв-в-именах-объектов)

[3.12.4. Экранирование спецсимволов в именах объектов [9](#экранирование-спецсимволов-в-именах-объектов)](#экранирование-спецсимволов-в-именах-объектов)

[3.12.5. Различение нескольких вхождений таблицы [10](#различение-нескольких-вхождений-таблицы)](#различение-нескольких-вхождений-таблицы)

[3.12.6. Нижележащие таблицы представлений или правил [10](#нижележащие-таблицы-представлений-или-правил)](#нижележащие-таблицы-представлений-или-правил)

[3.12.7. Таблицы с наследованием [10](#таблицы-с-наследованием)](#таблицы-с-наследованием)

[3.12.8. Указания с составными операторами [10](#указания-с-составными-операторами)](#указания-с-составными-операторами)

[3.12.9. Выражения VALUES [10](#выражения-values)](#выражения-values)

[3.12.10. Подзапросы [10](#подзапросы)](#подзапросы)

[3.12.11. Использование указания IndexOnlyScan [11](#использование-указания-indexonlyscan)](#использование-указания-indexonlyscan)

[3.12.12. Поведение указания NoIndexScan [11](#поведение-указания-noindexscan)](#поведение-указания-noindexscan)

[3.12.13. Указание Parallel и UNION [11](#указание-parallel-и-union)](#указание-parallel-и-union)

[3.12.14. Установка параметров pg_hint_plan в указаниях Set [11](#установка-параметров-pg_hint_plan-в-указаниях-set)](#установка-параметров-pg_hint_plan-в-указаниях-set)

[3.12.15. Поддерживаемые указания [11](#указания-изменяющие-enable_hint-и-enable_hint_table-игнорируются-несмотря-на-то-что-в-отладочном-выводе-они-отмечаются-как-использованные-указанияизменение-debug_print-и-message_level-начинает-действовать-с-середины-процедуры-обработки-целевого-запроса.поддерживаемые-указания)](#указания-изменяющие-enable_hint-и-enable_hint_table-игнорируются-несмотря-на-то-что-в-отладочном-выводе-они-отмечаются-как-использованные-указанияизменение-debug_print-и-message_level-начинает-действовать-с-середины-процедуры-обработки-целевого-запроса.поддерживаемые-указания)

[4. Ошибки [14](#ошибки)](#ошибки)

[Перечень сокращений [15](#_Toc152343299)](#_Toc152343299)

# Назначение компонента

Компонент «pg_hint_plan» предназначен для корректировки планов выполнения, применяя так называемые «указания», записываемые в виде простых описаний в SQL-комментариях особого вида.

## Условия применения

Компонент «pg_hint_plan» может использоваться с СУБД «Jatoba» версий 5.x и выше, под управлением операционных систем Windows и GNU/Linux.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="../docs/assets/images/cert6.8.4,5.12.4,4.17.4/pg_hint_plan/media/image1.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>В текущей реализации компонента не поддерживается управление через компонент пользовательского веб-интерфейса для администраторов<br />
«Jatoba data safe».</p>
<p>Ограничений по совместимости с другими компонентами нет.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Ограничения

Существуют следующие функциональные ограничения планировщика:

- 
- 
- 
- 

# если в предложении FROM больше чем from_collapse_limit элементов, компонент не может повлиять на порядок соединения;если принудительно выбранный план нельзя выполнить, компонент выберет любой исполнимый;нельзя передать запрос в ECPG;одинаковые запросы с разными указаниями будут консолидироваться как один и тот же запрос.Установка и настройка

Установка компонента должна производится от имени пользователя, обладающего административными привилегиями в системе. Данный компонент штатным образом может быть установлен только с СУБД «Jatoba» (см. документ «Защищенная система управления базами данных «Jatoba». Руководство по установке).

Для активации компонента в файле postgresql.conf прописать следующую строку:

> shared_preload_libraries = 'pg_hint_plan'

Для автоматической загрузки определенных сеансов необходимо использовать:

> ALTER USER SET/ALTER DATABASE SET

Компонент не требует выполнения CREATE EXTENSION, но для использования таблицы указаний необходимо создать расширение и включить параметр:

> CREATE EXTENSION pg_hint_plan;
>
> SET pg_hint_plan.enable_hint_table TO on;

# Функциональные возможности компонента

## Использование

Компонент считывает указания в комментариях особого вида, заданных оператором SQL. Эта особая запись начинается с последовательности символов /\*+ и заканчивается последовательностью \*/. Фразы указаний состоят из имени указания и последующих параметров, которые заключаются в скобки и разделяются пробелами. Такие указания могут размещаться в нескольких строках для улучшения читаемости.

## Таблица указаний

Для удобства использования указания вносятся в специальную таблицу hint_plan.hints.

| **Столбец** | **Описание** |
|:---|----|
| id | Уникальный номер строки с указанием. Этот столбец заполняется автоматически генератором последовательности. |
| norm_query_string | Шаблон для выбора запросов, к которым будет относиться указание. Константы, фигурирующие в целевом запросе, должны заменяться знаками ?. Пробельные символы в шаблоне являются значимыми. |
| application_name | Значение переменной, выбирающее сеансы, в которых будет действовать указание. С пустой строкой будут выбираться сеансы с любым значением ***application_name***. |
| hint | Фраза указания. Это поле должно содержать указания без обрамляющей разметки комментариев. |

Таблица . – Содержание таблицы hint_plan.hints

Таблица указаний принадлежит пользователю, создавшему расширение, и для нее назначаются права доступа, установленные по умолчанию в момент CREATE EXTENSION. Указания, заданные в таблице, имеют больший приоритет, чем указания в комментариях.

## Типы указаний

Фразы указаний подразделяются на шесть типов по видам объектов, на которые они могут воздействовать, и видам воздействия: методы сканирования, методы соединения, порядок соединения, корректировка количества строк, параллельные запросы и параметры GUC.

## Указания для методов сканирования

Указания для методов сканирования принудительно устанавливают метод сканирования для заданной таблицы. В качестве имени целевой таблицы компонент может распознать и ее псевдоним, если он определен.

Такие указания применимы к обычным таблицам, таблицам с наследованием, нежурналируемым таблицам, временным таблицам и системным каталогам. Они не применяются к внешним (сторонним) таблицам, табличным функциям, результатам VALUES, CTE, представлениям и вложенным запросам.

## Указания для методов соединения

Указания для методов соединения принудительно выбирают определенный метод для соединения заданных таблиц.

Эти указания могут работать с обычными таблицами, таблицами с наследованием, нежурналируемыми и временными таблицами, внешними (сторонними) таблицами, системными каталогами, табличными функциями, результатами команд VALUES и CTE. Однако на представления и подзапросы они не воздействуют.

Указания для методов соединения рекомендуется использовать вместе с указанием для порядка соединения Leading, так как оно гарантирует применение порядка, указанного в запросе.

## Указание для порядка соединения

Указание Leading устанавливает порядок соединения двух и более таблиц. Выбрать порядок можно двумя способами:

- 
- 

установить определенный порядок соединения, но не ограничивать направление на каждом уровне;ограничить направление соединения.Указание Leading не может функционировать с модулем GEQO, если число указанных в запросе таблиц превышает geqo_threshold.

## Указания для управления поведением соединения

Указание «Memoize» позволяет соединению запоминать внутренний результат, а указание «NoMemoize» запрещает это.

## Указание для корректировки числа строк

Указание Rows корректирует неверную оценку количества строк при соединениях, возможно вызванную ограничениями планировщика.

## Указания для параллельных планов

Указание Parallel устанавливает конфигурацию параллельного выполнения при сканировании. Третий параметр определяет режим изменений конфигурации:

- 
- 

«soft» pg_hint_plan меняет только max_parallel_workers_per_gather;«hard» меняются и другие параметры планировщика, чтобы принудительно установить количество параллельных исполнителей.Это указание может воздействовать на обычные таблицы, родительские таблицы в иерархии наследования, нежурналируемые таблицы и системные каталоги. На внешние таблицы, табличные функции, предложения VALUES, CTE, представления и вложенные запросы оно не действует. Обращаться в данном указании к внутренней таблице в представлении можно по имени или псевдониму этой таблицы.

## Временное переопределение параметров GUC

Указание Set меняет параметры GUC только на время планирования. Желаемое влияние на планирование могут оказывать параметры GUC, если только какое-либо другое указание не конфликтует с заданными параметрами метода планирования. Если для одного параметра GUC задано несколько указаний, в силу вступает последнее.

## Параметры GUC для настройки pg_hint_plan

На поведение pg_hint_plan влияют следующие описанные ниже параметры GUC.

<table>
<caption><p>Таблица . – Параметры GUC</p></caption>
<colgroup>
<col style="width: 31%" />
<col style="width: 52%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Имя параметра</strong></th>
<th style="text-align: center;"><strong>Описание</strong></th>
<th style="text-align: center;"><strong>Значение по умолчанию</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">pg_hint_plan.enable_hint</td>
<td>Значение True включает pg_hint_plan</td>
<td>on (вкл.)</td>
</tr>
<tr>
<td style="text-align: left;">pg_hint_plan.enable_hint_table</td>
<td>Значение True включает использование указаний из таблицы</td>
<td>on (вкл.)</td>
</tr>
<tr>
<td style="text-align: left;">pg_hint_plan.parse_messages</td>
<td>Задает уровень, с которым будут попадать в журнал ошибки разбора указаний. Допустимые значения: error, warning, notice, info, log, debug</td>
<td>INFO</td>
</tr>
<tr>
<td style="text-align: left;">pg_hint_plan.debug_print</td>
<td><p>Управляет выводом и детализацией отладочной информации.</p>
<p>Допустимые значения: off, on, detailed и verbose</p></td>
<td>off (выкл.)</td>
</tr>
<tr>
<td style="text-align: left;">pg_hint_plan.message_level</td>
<td>Задает уровень, с которым будут попадать в журнал отладочные сообщения. Допустимые значения: error, warning, notice, info, log, debug</td>
<td>LOG</td>
</tr>
</tbody>
</table>

Таблица . – Параметры GUC

## Подробное описание указаний

### Синтаксис и расположение

Обработчик pg_hint_plan считывает указания только из первого блочного комментария и немедленно прекращает разбор, обнаруживая недопустимый символ. Допустимыми символами являются буквы, цифры, пробелы, подчеркивания, запятые и скобки.

### Использование с PL/pgSQL

Компонент может работать с запросами в скриптах PL/pgSQL с некоторыми ограничениями.

- - 
  - 
  - 
  - 
  - 
- 

### Указания воздействуют только на следующие типы запросов:Запросы, возвращающие одну строку (SELECT, INSERT, UPDATE и DELETE);Запросы, возвращающие множество строк (RETURN QUERY);Динамические операторы SQL (EXECUTE);Запрос, открывающий курсор (OPEN);Цикл по результату запроса (FOR);Комментарий с указанием должен добавляться после первого слова запроса, так как комментарии, идущие перед ним, в составе запроса не передаются.Регистр букв в именах объектов

В отличие от стандартных функциональных возможностей СУБД, pg_hint_plan, разбирая имена объектов в указаниях, сравнивает их с внутренними именами объектов с учетом регистра.

### Экранирование спецсимволов в именах объектов

Если имя объекта включает в себя скобки, кавычки или пробелы, оно должно заключаться в кавычки. При этом действуют те же правила экранирования, что и в СУБД.

### Различение нескольких вхождений таблицы

Компонент может выбирать целевые объекты по псевдонимам, если они заданы. Это позволяет обратиться к одному определенному вхождению таблицы, используемой в запросе неоднократно.

### Нижележащие таблицы представлений или правил

Указания не применяются непосредственно к представлениям, но могут воздействовать на выполняемые запросы, если имена объектов в указаниях совпадают с именами объектов в развернутом запросе представления. К таблицам внутри представления можно обращаться снаружи по назначенным им псевдонимам.

Необходимо использовать уникальные псевдонимы во избежание неправильной обработки.

### Таблицы с наследованием

Указания могут быть нацелены только на родителя в иерархии наследования, однако при этом они воздействуют на всю иерархию. Указания, нацеленные на потомков в этой иерархии, не будут действовать.

### Указания с составными операторами

Для одного описания составного оператора может задаваться только один комментарий, и записанные в нем указания будут распространяться на все отдельные операторы внутри этого составного.

### Выражения VALUES

Все выражения VALUES в предложении FROM имеют внутреннее обозначение \*VALUES\*, так что к ним можно обращаться, только если в запросе фигурирует только одно выражение VALUES. Два или более выражений VALUES в запросе невозможно отличить, посмотрев на результат EXPLAIN, что приводит к неоднозначным результатам.

### Подзапросы

В указаниях можно обращаться к подзапросам по имени ANY_subquery.

Для этих синтаксисов планировщик внутри дает имя подзапросу, планируя соединения таблиц с этим подзапросом, так что в указаниях соединений можно обращаться к нему по этому неявному имени.

### Использование указания IndexOnlyScan

Сканирование индекса может вопреки ожиданиям выполняться с другим индексом, когда индекс, заданный в указании IndexOnlyScan, оказывается неподходящим для сканирования только по индексу.

### Поведение указания NoIndexScan

Указание NoIndexScan подразумевает NoIndexOnlyScan.

### Указание Parallel и UNION

Предложение UNION может выполняться в параллельном режиме, только когда все нижележащие подзапросы безопасны для распараллеливания. С другой стороны, если параллельное выполнение принудительно выбирается для любого из подзапросов, все предложение UNION будет обрабатываться параллельно, если это возможно. При этом в случае выбора в указании Parallel нулевого количества исполнителей выполнение в параллельном режиме будет запрещено.

### Установка параметров pg_hint_plan в указаниях Set

Параметры pg_hint_plan меняют поведение самого обработчика указаний, поэтому некоторые параметры работают не так, как можно ожидать:

- 
- 

### Указания, изменяющие enable_hint и enable_hint_table, игнорируются несмотря на то, что в отладочном выводе они отмечаются как «использованные указания»;Изменение debug_print и message_level начинает действовать с середины процедуры обработки целевого запроса.Поддерживаемые указания

Ниже перечислены все поддерживаемые указания.

| **Группа** | **Формат** | **Описание** |
|:---|:---|:---|
| Метод сканирования | SeqScan(таблица) | Принудительно выбирает последовательное сканирование таблицы |
|  | TidScan(таблица) | Принудительно выбирает сканирование таблицы по TID |
|  | IndexScan(таблица \[ индекс...\]) | Принудительно выбирает сканирование таблицы по индексу (при добавлении индексов сканирование ограничивается ими) |
|  | IndexOnlyScan(таблица \[ индекс...\]) | Принудительно выбирает сканирование таблицы только по индексу (при добавлении индексов сканирование ограничивается ими). Если сканирование только по индексу невозможно, может использоваться обычное сканирование по индексу |
|  | BitmapScan(таблица\[ индекс...\]) | Принудительно выбирает сканирование таблицы по битовой карте (при добавлении индексов сканирование ограничивается ими) |
|  | IndexScanRegexp(таблица \[ регулярное выражение POSIX...\]) | Принудительно выбирает сканирование таблицы по индексу. Сканирование ограничивается индексами с именами, соответствующими указанному регулярному выражению POSIX |
|  | IndexOnlyScanRegexp(таблица \[ регулярное выражение POSIX...\]) | Принудительно выбирает сканирование таблицы только по индексу. Сканирование ограничивается индексами с именами, соответствующими указанному регулярному выражению POSIX |
|  | BitmapScanRegexp(таблица\[ регулярное выражение POSIX...\]) | Принудительно выбирает сканирование таблицы по битовой карте. Сканирование ограничивается индексами с именами, соответствующими указанному регулярному выражению POSIX |
|  | NoSeqScan(таблица) | Отключает выбор последовательного сканирование таблицы |
|  | NoTidScan(таблица) | Отключает выбор сканирования таблицы по TID |
|   | NoIndexScan(таблица) | Отключает выбор сканирования по индексу и сканирования только по индексу для заданной таблицы |
|  | NoIndexOnlyScan(таблица) | Принудительно отключает выбор сканирования только по индексу для заданной таблицы |
|  | NoBitmapScan(таблица) | Отключает выбор сканирования по битовой карте для таблицы |
| Метод соединения | NestLoop(таблица таблица\[ таблица...\]) | Принудительно выбирает вложенный цикл для соединений с заданными таблицами |
|  | HashJoin(таблица таблица\[ таблица...\]) | Принудительно выбирает соединение по хешу для соединений с заданными таблицами |
|  | MergeJoin(таблица таблица\[ таблица...\]) | Принудительно выбирает соединение слиянием для соединений с заданными таблицами |
|  | NoNestLoop(таблица таблица\[ таблица...\]) | Отключает выбор вложенного цикла для соединений с заданными таблицами |
|  | NoHashJoin(таблица таблица\[ таблица...\]) | Отключает выбор соединения по хешу для соединений с заданными таблицами |
|  | NoMergeJoin(таблица таблица\[ таблица...\]) | Отключает выбор соединения слиянием для соединений с заданными таблицами |
| Порядок соединения | Leading(таблица таблица\[ таблица...\]) | Принудительно выбирает заданный порядок соединения |
|  | Leading(\<соединяемая пара\>) | Принудительно выбирает заданный порядок и направления соединения. Соединяемая пара в данном случае — это пара таблица и/или других соединяемых пар, заключенная в скобки, что позволяет образовывать вложенные структуры |
| Управление поведением соединения | Memoize(таблица таблица\[ таблица...\]) | Позволяет самому верхнему соединению среди соединений, включающих указанные таблицы, запоминать внутренний результат. Обратите внимание, запоминание при этом не будет задействовано принудительно |
|  | NoMemoize(таблица таблица\[ таблица...\]) | Запрещает самому верхнему соединению среди соединений, включающих указанные таблицы, запоминать внутренний результат |
| Корректировка числа строк | Rows(таблица таблица\[ таблица...\] корректировка) | Корректирует число строк, получаемых в результате соединения указанных таблиц. Для корректировки можно задать абсолютное значение (#\<n\>) или использовать сложение (+\<n\>), вычитание (-\<n\>) и умножение (\*\<n\>). Здесь \<n\> — это строка, которую сможет воспринять функция strtod() |
| Настройка параллельных запросов | Parallel(таблица\<число исполнителей\> \[soft\|hard\]) | Принудительно включает или отключает параллельную обработку заданной таблицы. Параметр \<число исполнителей\> в этом указании определяет желаемое количество параллельных исполнителей (значение 0 отключает параллельное выполнение). Если третий параметр равен soft (по умолчанию), меняется только значение параметра сервера max_parallel_workers_per_gather, а в остальном планировщику остается свобода выбора. Со значением hard заданное количество исполнителей устанавливается принудительно |
| GUC | Set(параметр-GUC значение) | Устанавливает значение для параметра GUC на время планирования запроса |

Таблица . – Список указаний

# Ошибки

В случае ошибки компонент останавливает разбор, и в большинстве случаев применяет указания, уже разобранные к этому моменту.

Таблица 4.1 – Типичные ошибки

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 61%" />
</colgroup>
<thead>
<tr>
<th>Синтаксические ошибки</th>
<th>Ошибки в записи или неправильные имена указаний Ошибки выводятся в журнал сообщений сервера с уровнем, заданным в параметре pg_hint_plan.message_level, если параметр pg_hint_plan.debug_print имеет значение, отличное от off.</th>
</tr>
</thead>
<tbody>
<tr>
<td>Неправильные обращения к объектам</td>
<td>Указания с неправильными обращениями к объектам просто игнорируются. Ошибки такого типа отмечаются в журнале как «неиспользованные указания» при тех же условиях, что и синтаксические ошибки.</td>
</tr>
<tr>
<td>Избыточные или конфликтующие указания</td>
<td>Когда указания избыточны или одно указание конфликтует с другим, действовать будет последнее указание. Ошибки такого типа отмечаются как «дублирующиеся указания» в журнале сообщений сервера при тех же условиях, что и синтаксические ошибки.</td>
</tr>
<tr>
<td>Вложенные комментарии</td>
<td><p>Комментарий с указаниями не может содержать в себе другой блочный комментарий.</p>
<p>В случае возникновения такой ошибки, компонент прекращает разбор.</p></td>
</tr>
</tbody>
</table>

# 

| <span id="_Toc152343299" class="anchor"></span>Перечень сокращенийSQL | – | Structured Query Language |
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
