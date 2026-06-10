---
title: Jatoba Data Safe
---

# АННОТАЦИЯ

В данном руководстве приведены сведения, необходимые для установки и
эксплуатации компонента пользовательского веб-интерфейса для
администраторов  
«Jatoba data safe» (далее по тексту – компонент или JDS).

Степени важности примечаний, применяемые в
документе:

:::warning[Важная информация]
указания, требующие особого внимания
:::

:::info[Дополнительная информация]
указания, позволяющие упростить работу с изделием
:::

--------------------

:::info[Дополнительная информация]
Для СУБД «Jatoba» версии ядра 4, 5, 6 и 18 используется версия компонента — 2.11.
:::

:::warning[Важная информация]
Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!
:::


# Ниже - временные главы













<span id="_Toc225259250" class="anchor"></span>Перечень «Классов
    событий» используемых в подразделе «Подписки»

Таблица П.1.1 – Перечень «Классов
событий»

| **sql\_state\_code**                                                       | **Наименование**                                          |
| -------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Class 00 — Successful Completion**                                       |                                                           |
| 00000                                                                      | successful\_completion                                    |
| **Class 01 — Warning**                                                     |                                                           |
| 01000                                                                      | warning                                                   |
| 0100C                                                                      | dynamic\_result\_sets\_returned                           |
| 01008                                                                      | implicit\_zero\_bit\_padding                              |
| 01003                                                                      | null\_value\_eliminated\_in\_set\_function                |
| 01007                                                                      | privilege\_not\_granted                                   |
| 01006                                                                      | privilege\_not\_revoked                                   |
| 01004                                                                      | string\_data\_right\_truncation                           |
| 01P01                                                                      | deprecated\_feature                                       |
| **Class 02 — No Data (this is also a warning class per the SQL standard)** |                                                           |
| 02000                                                                      | no\_data                                                  |
| 02001                                                                      | no\_additional\_dynamic\_result\_sets\_returned           |
| **Class 03 — SQL Statement Not Yet Complete**                              |                                                           |
| 03000                                                                      | sql\_statement\_not\_yet\_complete                        |
| **Class 08 — Connection Exception**                                        |                                                           |
| 08000                                                                      | connection\_exception                                     |
| 08003                                                                      | connection\_does\_not\_exist                              |
| 08006                                                                      | connection\_failure                                       |
| 08001                                                                      | sqlclient\_unable\_to\_establish_sqlconnection           |
| 08004                                                                      | sqlserver\_rejected\_establishment_of_sqlconnection     |
| 08007                                                                      | transaction\_resolution\_unknown                          |
| 08P01                                                                      | protocol\_violation                                       |
| **Class 09 — Triggered Action Exception**                                  |                                                           |
| 09000                                                                      | triggered\_action\_exception                              |
| **Class 0A — Feature Not Supported**                                       |                                                           |
| 0A000                                                                      | feature\_not\_supported                                   |
| **Class 0B — Invalid Transaction Initiation**                              |                                                           |
| 0B000                                                                      | invalid\_transaction\_initiation                          |
| **Class 0F — Locator Exception**                                           |                                                           |
| 0F000                                                                      | locator\_exception                                        |
| 0F001                                                                      | invalid\_locator\_specification                           |
| **Class 0L — Invalid Grantor**                                             |                                                           |
| 0L000                                                                      | invalid\_grantor                                          |
| 0LP01                                                                      | invalid\_grant\_operation                                 |
| **Class 0P — Invalid Role Specification**                                  |                                                           |
| 0P000                                                                      | invalid\_role\_specification                              |
| **Class 0Z — Diagnostics Exception**                                       |                                                           |
| 0Z000                                                                      | diagnostics\_exception                                    |
| 0Z002                                                                      | stacked\_diagnostics\_accessed\_without\_active\_handler  |
| **Class 20 — Case Not Found**                                              |                                                           |
| 20000                                                                      | case\_not\_found                                          |
| **Class 21 — Cardinality Violation**                                       |                                                           |
| 21000                                                                      | cardinality\_violation                                    |
| **Class 22 — Data Exception**                                              |                                                           |
| 22000                                                                      | data\_exception                                           |
| 2202E                                                                      | array\_subscript\_error                                   |
| 22021                                                                      | character\_not\_in\_repertoire                            |
| 22008                                                                      | datetime\_field\_overflow                                 |
| 22012                                                                      | division\_by\_zero                                        |
| 22005                                                                      | error\_in\_assignment                                     |
| 2200B                                                                      | escape\_character\_conflict                               |
| 22022                                                                      | indicator\_overflow                                       |
| 22015                                                                      | interval\_field\_overflow                                 |
| 2201E                                                                      | invalid\_argument\_for\_logarithm                         |
| 22014                                                                      | invalid\_argument\_for\_ntile\_function                   |
| 22016                                                                      | invalid\_argument\_for\_nth\_value\_function              |
| 2201F                                                                      | invalid\_argument\_for\_power\_function                   |
| 2201G                                                                      | invalid\_argument\_for\_width\_bucket\_function           |
| 22018                                                                      | invalid\_character\_value\_for\_cast                      |
| 22007                                                                      | invalid\_datetime\_format                                 |
| 22019                                                                      | invalid\_escape\_character                                |
| 2200D                                                                      | invalid\_escape\_octet                                    |
| 22025                                                                      | invalid\_escape\_sequence                                 |
| 22P06                                                                      | nonstandard\_use\_of\_escape\_character                   |
| 22010                                                                      | invalid\_indicator\_parameter\_value                      |
| 22023                                                                      | invalid\_parameter\_value                                 |
| 22013                                                                      | invalid\_preceding\_or\_following\_size                   |
| 2201B                                                                      | invalid\_regular\_expression                              |
| 2201W                                                                      | invalid\_row\_count\_in\_limit\_clause                    |
| 2201X                                                                      | invalid\_row\_count\_in\_result\_offset\_clause           |
| 2202H                                                                      | invalid\_tablesample\_argument                            |
| 2202G                                                                      | invalid\_tablesample\_repeat                              |
| 22009                                                                      | invalid\_time\_zone\_displacement\_value                  |
| 2200C                                                                      | invalid\_use\_of\_escape\_character                       |
| 2200G                                                                      | most\_specific\_type\_mismatch                            |
| 22004                                                                      | null\_value\_not\_allowed                                 |
| 22002                                                                      | null\_value\_no\_indicator\_parameter                     |
| 22003                                                                      | numeric\_value\_out\_of\_range                            |
| 2200H                                                                      | sequence\_generator\_limit\_exceeded                      |
| 22026                                                                      | string\_data\_length\_mismatch                            |
| 22001                                                                      | string\_data\_right\_truncation                           |
| 22011                                                                      | substring\_error                                          |
| 22027                                                                      | trim\_error                                               |
| 22024                                                                      | unterminated\_c\_string                                   |
| 2200F                                                                      | zero\_length\_character\_string                           |
| 22P01                                                                      | floating\_point\_exception                                |
| 22P02                                                                      | invalid\_text\_representation                             |
| 22P03                                                                      | invalid\_binary\_representation                           |
| 22P04                                                                      | bad\_copy\_file\_format                                   |
| 22P05                                                                      | untranslatable\_character                                 |
| 2200L                                                                      | not\_an\_xml\_document                                    |
| 2200M                                                                      | invalid\_xml\_document                                    |
| 2200N                                                                      | invalid\_xml\_content                                     |
| 2200S                                                                      | invalid\_xml\_comment                                     |
| 2200T                                                                      | invalid\_xml\_processing\_instruction                     |
| 22030                                                                      | duplicate\_json\_object\_key\_value                       |
| 22031                                                                      | invalid\_argument\_for\_sql\_json\_datetime\_function     |
| 22032                                                                      | invalid\_json\_text                                       |
| 22033                                                                      | invalid\_sql\_json\_subscript                             |
| 22034                                                                      | more\_than\_one\_sql\_json\_item                          |
| 22035                                                                      | no\_sql\_json\_item                                       |
| 22036                                                                      | non\_numeric\_sql\_json\_item                             |
| 22037                                                                      | non\_unique\_keys\_in\_a\_json\_object                    |
| 22038                                                                      | singleton\_sql\_json\_item\_required                      |
| 22039                                                                      | sql\_json\_array\_not\_found                              |
| 2203A                                                                      | sql\_json\_member\_not\_found                             |
| 2203B                                                                      | sql\_json\_number\_not\_found                             |
| 2203C                                                                      | sql\_json\_object\_not\_found                             |
| 2203D                                                                      | too\_many\_json\_array\_elements                          |
| 2203E                                                                      | too\_many\_json\_object\_members                          |
| 2203F                                                                      | sql\_json\_scalar\_required                               |
| 2203G                                                                      | sql\_json\_item\_cannot\_be\_cast\_to\_target\_type       |
| **Class 23 — Integrity Constraint Violation**                              |                                                           |
| 23000                                                                      | integrity\_constraint\_violation                          |
| 23001                                                                      | restrict\_violation                                       |
| 23502                                                                      | not\_null\_violation                                      |
| 23503                                                                      | foreign\_key\_violation                                   |
| 23505                                                                      | unique\_violation                                         |
| 23514                                                                      | check\_violation                                          |
| 23P01                                                                      | exclusion\_violation                                      |
| **Class 24 — Invalid Cursor State**                                        |                                                           |
| 24000                                                                      | invalid\_cursor\_state                                    |
| **Class 25 — Invalid Transaction State**                                   |                                                           |
| 25000                                                                      | invalid\_transaction\_state                               |
| 25001                                                                      | active\_sql\_transaction                                  |
| 25002                                                                      | branch\_transaction\_already\_active                      |
| 25008                                                                      | held\_cursor\_requires\_same\_isolation\_level            |
| 25003                                                                      | inappropriate\_access\_mode\_for\_branch\_transaction     |
| 25004                                                                      | inappropriate\_isolation\_level\_for\_branch\_transaction |
| 25005                                                                      | no\_active\_sql\_transaction\_for\_branch\_transaction    |
| 25006                                                                      | read\_only\_sql\_transaction                              |
| 25007                                                                      | schema\_and\_data\_statement\_mixing\_not\_supported      |
| 25P01                                                                      | no\_active\_sql\_transaction                              |
| 25P02                                                                      | in\_failed\_sql\_transaction                              |
| 25P03                                                                      | idle\_in\_transaction\_session\_timeout                   |
| **Class 26 — Invalid SQL Statement Name**                                  |                                                           |
| 26000                                                                      | invalid\_sql\_statement\_name                             |
| **Class 27 — Triggered Data Change Violation**                             |                                                           |
| 27000                                                                      | triggered\_data\_change\_violation                        |
| **Class 28 — Invalid Authorization Specification**                         |                                                           |
| 28000                                                                      | invalid\_authorization\_specification                     |
| 28P01                                                                      | invalid\_password                                         |
| **Class 2B — Dependent Privilege Descriptors Still Exist**                 |                                                           |
| 2B000                                                                      | dependent\_privilege\_descriptors\_still\_exist           |
| 2BP01                                                                      | dependent\_objects\_still\_exist                          |
| **Class 2D — Invalid Transaction Termination**                             |                                                           |
| 2D000                                                                      | invalid\_transaction\_termination                         |
| **Class 2F — SQL Routine Exception**                                       |                                                           |
| 2F000                                                                      | sql\_routine\_exception                                   |
| 2F005                                                                      | function\_executed\_no\_return\_statement                 |
| 2F002                                                                      | modifying\_sql\_data\_not\_permitted                      |
| 2F003                                                                      | prohibited\_sql\_statement\_attempted                     |
| 2F004                                                                      | reading\_sql\_data\_not\_permitted                        |
| **Class 34 — Invalid Cursor Name**                                         |                                                           |
| 34000                                                                      | invalid\_cursor\_name                                     |
| **Class 38 — External Routine Exception**                                  |                                                           |
| 38000                                                                      | external\_routine\_exception                              |
| 38001                                                                      | containing\_sql\_not\_permitted                           |
| 38002                                                                      | modifying\_sql\_data\_not\_permitted                      |
| 38003                                                                      | prohibited\_sql\_statement\_attempted                     |
| 38004                                                                      | reading\_sql\_data\_not\_permitted                        |
| **Class 39 — External Routine Invocation Exception**                       |                                                           |
| 39000                                                                      | external\_routine\_invocation\_exception                  |
| 39001                                                                      | invalid\_sqlstate\_returned                               |
| 39004                                                                      | null\_value\_not\_allowed                                 |
| 39P01                                                                      | trigger\_protocol\_violated                               |
| 39P02                                                                      | srf\_protocol\_violated                                   |
| 39P03                                                                      | event\_trigger\_protocol\_violated                        |
| **Class 3B — Savepoint Exception**                                         |                                                           |
| 3B000                                                                      | savepoint\_exception                                      |
| 3B001                                                                      | invalid\_savepoint\_specification                         |
| **Class 3D — Invalid Catalog Name**                                        |                                                           |
| 3D000                                                                      | invalid\_catalog\_name                                    |
| **Class 3F — Invalid Schema Name**                                         |                                                           |
| 3F000                                                                      | invalid\_schema\_name                                     |
| **Class 40 — Transaction Rollback**                                        |                                                           |
| 40000                                                                      | transaction\_rollback                                     |
| 40002                                                                      | transaction\_integrity\_constraint\_violation             |
| 40001                                                                      | serialization\_failure                                    |
| 40003                                                                      | statement\_completion\_unknown                            |
| 40P01                                                                      | deadlock\_detected                                        |
| **Class 42 — Syntax Error or Access Rule Violation**                       |                                                           |
| 42000                                                                      | syntax\_error\_or\_access\_rule\_violation                |
| 42601                                                                      | syntax\_error                                             |
| 42501                                                                      | insufficient\_privilege                                   |
| 42846                                                                      | cannot\_coerce                                            |
| 42803                                                                      | grouping\_error                                           |
| 42P20                                                                      | windowing\_error                                          |
| 42P19                                                                      | invalid\_recursion                                        |
| 42830                                                                      | invalid\_foreign\_key                                     |
| 42602                                                                      | invalid\_name                                             |
| 42622                                                                      | name\_too\_long                                           |
| 42939                                                                      | reserved\_name                                            |
| 42804                                                                      | datatype\_mismatch                                        |
| 42P18                                                                      | indeterminate\_datatype                                   |
| 42P21                                                                      | collation\_mismatch                                       |
| 42P22                                                                      | indeterminate\_collation                                  |
| 42809                                                                      | wrong\_object\_type                                       |
| 428C9                                                                      | generated\_always                                         |
| 42703                                                                      | undefined\_column                                         |
| 42883                                                                      | undefined\_function                                       |
| 42P01                                                                      | undefined\_table                                          |
| 42P02                                                                      | undefined\_parameter                                      |
| 42704                                                                      | undefined\_object                                         |
| 42701                                                                      | duplicate\_column                                         |
| 42P03                                                                      | duplicate\_cursor                                         |
| 42P04                                                                      | duplicate\_database                                       |
| 42723                                                                      | duplicate\_function                                       |
| 42P05                                                                      | duplicate\_prepared\_statement                            |
| 42P06                                                                      | duplicate\_schema                                         |
| 42P07                                                                      | duplicate\_table                                          |
| 42712                                                                      | duplicate\_alias                                          |
| 42710                                                                      | duplicate\_object                                         |
| 42702                                                                      | ambiguous\_column                                         |
| 42725                                                                      | ambiguous\_function                                       |
| 42P08                                                                      | ambiguous\_parameter                                      |
| 42P09                                                                      | ambiguous\_alias                                          |
| 42P10                                                                      | invalid\_column\_reference                                |
| 42611                                                                      | invalid\_column\_definition                               |
| 42P11                                                                      | invalid\_cursor\_definition                               |
| 42P12                                                                      | invalid\_database\_definition                             |
| 42P13                                                                      | invalid\_function\_definition                             |
| 42P14                                                                      | invalid\_prepared\_statement\_definition                  |
| 42P15                                                                      | invalid\_schema\_definition                               |
| 42P16                                                                      | invalid\_table\_definition                                |
| 42P17                                                                      | invalid\_object\_definition                               |
| **Class 44 — WITH CHECK OPTION Violation**                                 |                                                           |
| 44000                                                                      | with\_check\_option\_violation                            |
| **Class 53 — Insufficient Resources**                                      |                                                           |
| 53000                                                                      | insufficient\_resources                                   |
| 53100                                                                      | disk\_full                                                |
| 53200                                                                      | out\_of\_memory                                           |
| 53300                                                                      | too\_many\_connections                                    |
| 53400                                                                      | configuration\_limit\_exceeded                            |
| **Class 54 — Program Limit Exceeded**                                      |                                                           |
| 54000                                                                      | program\_limit\_exceeded                                  |
| 54001                                                                      | statement\_too\_complex                                   |
| 54011                                                                      | too\_many\_columns                                        |
| 54023                                                                      | too\_many\_arguments                                      |
| **Class 55 — Object Not In Prerequisite State**                            |                                                           |
| 55000                                                                      | object\_not\_in\_prerequisite\_state                      |
| 55006                                                                      | object\_in\_use                                           |
| 55P02                                                                      | cant\_change\_runtime\_param                              |
| 55P03                                                                      | lock\_not\_available                                      |
| 55P04                                                                      | unsafe\_new\_enum\_value\_usage                           |
| **Class 57 — Operator Intervention**                                       |                                                           |
| 57000                                                                      | operator\_intervention                                    |
| 57014                                                                      | query\_canceled                                           |
| 57P01                                                                      | admin\_shutdown                                           |
| 57P02                                                                      | crash\_shutdown                                           |
| 57P03                                                                      | cannot\_connect\_now                                      |
| 57P04                                                                      | database\_dropped                                         |
| 57P05                                                                      | idle\_session\_timeout                                    |
| **Class 58 — System Error (errors external to PostgreSQL itself)**         |                                                           |
| 58000                                                                      | system\_error                                             |
| 58030                                                                      | io\_error                                                 |
| 58P01                                                                      | undefined\_file                                           |
| 58P02                                                                      | duplicate\_file                                           |
| **Class 72 — Snapshot Failure**                                            |                                                           |
| 72000                                                                      | snapshot\_too\_old                                        |
| **Class F0 — Configuration File Error**                                    |                                                           |
| F0000                                                                      | config\_file\_error                                       |
| F0001                                                                      | lock\_file\_exists                                        |
| **Class HV — Foreign Data Wrapper Error (SQL/MED)**                        |                                                           |
| HV000                                                                      | fdw\_error                                                |
| HV005                                                                      | fdw\_column\_name\_not\_found                             |
| HV002                                                                      | fdw\_dynamic\_parameter\_value\_needed                    |
| HV010                                                                      | fdw\_function\_sequence\_error                            |
| HV021                                                                      | fdw\_inconsistent\_descriptor\_information                |
| HV024                                                                      | fdw\_invalid\_attribute\_value                            |
| HV007                                                                      | fdw\_invalid\_column\_name                                |
| HV008                                                                      | fdw\_invalid\_column\_number                              |
| HV004                                                                      | fdw\_invalid\_data\_type                                  |
| HV006                                                                      | fdw\_invalid\_data\_type\_descriptors                     |
| HV091                                                                      | fdw\_invalid\_descriptor\_field\_identifier               |
| HV00B                                                                      | fdw\_invalid\_handle                                      |
| HV00C                                                                      | fdw\_invalid\_option\_index                               |
| HV00D                                                                      | fdw\_invalid\_option\_name                                |
| HV090                                                                      | fdw\_invalid\_string\_length\_or\_buffer\_length          |
| HV00A                                                                      | fdw\_invalid\_string\_format                              |
| HV009                                                                      | fdw\_invalid\_use\_of\_null\_pointer                      |
| HV014                                                                      | fdw\_too\_many\_handles                                   |
| HV001                                                                      | fdw\_out\_of\_memory                                      |
| HV00P                                                                      | fdw\_no\_schemas                                          |
| HV00J                                                                      | fdw\_option\_name\_not\_found                             |
| HV00K                                                                      | fdw\_reply\_handle                                        |
| HV00Q                                                                      | fdw\_schema\_not\_found                                   |
| HV00R                                                                      | fdw\_table\_not\_found                                    |
| HV00L                                                                      | fdw\_unable\_to\_create\_execution                        |
| HV00M                                                                      | fdw\_unable\_to\_create\_reply                            |
| HV00N                                                                      | fdw\_unable\_to\_establish\_connection                    |
| **Class P0 — PL/pgSQL Error**                                              |                                                           |
| P0000                                                                      | plpgsql\_error                                            |
| P0001                                                                      | raise\_exception                                          |
| P0002                                                                      | no\_data\_found                                           |
| P0003                                                                      | too\_many\_rows                                           |
| P0004                                                                      | assert\_failure                                           |
| **Class XX — Internal Error**                                              |                                                           |
| XX000                                                                      | internal\_error                                           |
| XX001                                                                      | data\_corrupted                                           |
| XX002                                                                      | index\_corrupted                                          |

# Термины и определения

**Целевая СУБД** – СУБД являющаяся целью мониторинга.

При использовании компонента пользовательского веб-интерфейса для
администраторов «Jatoba data safe», компонент ведет мониторинг,
обслуживание и прочие действия отдельно установленных СУБД «Jatoba».
Такие СУБД для компонента «Jatoba data safe» являются целевыми.

**Служебная СУБД** – СУБД, обслуживающая компонент «Jatoba data safe», и
выполняющая служебные функции

**Флажок** (от англ. check box) – элемент графического пользовательского
интерфейса, позволяющий пользователю управлять параметром с двумя
состояниями.

**Бекапирование** – резервное копирование (англ. backup copy) – процесс
создания копии данных на носителе (жестком диске, дискете и т. д.),
предназначенном для восстановления данных в оригинальном или новом
месте их расположения в случае их повреждения или разрушения.

**Маппинг** – маппинг, маппирование (англ. mapping) – в программировании
определение соответствия данных между последовательностями элементов.

**Instance** – производная от слова инсталляция (англ. install). В
контексте документа под данным термином подразумевается
установленный на отдельном физическом или виртуальном сервере
экземпляр СУБД «Jatoba».

**Пиктограмма** – значок, элемент графического интерфейса пользователя;
небольшое изображение на мониторе, служащее для идентификации
некоторого объекта: файла, программы и т. п. Выбор и
активизация пиктограммы вызывает действие, связанное с
выбранным объектом.

**Extension** – расширение в СУБД - это совокупность нескольких SQL
объектов (типы данных, функции, операторы), объединенных в виде
скрипта, динамически загружаемая библиотека (если она необходима) и
управляющий файл, в котором указывается имя скрипта, путь к библиотеке,
версия по умолчанию и прочие опции.

**Снапшот** (англ. Snapshots) – снимок состояния объекта.

**Соответствие групп (mapping)** – совокупность параметров, описывающих
какие учетные записи AD будут синхронизированы с учетными записями
СУБД.

**SMTP** (Simple Mail Transfer Protocol) – протокол, используемый для
передачи электронной почты.

**ZULIP** – веб-сервис для обмена сообщениями и организации обсуждений с
использованием технологии real-time.

**Первичная идентификация -** действия по формированию и регистрации
информации о субъекте доступа или объекте доступа, а также действия
по присвоению идентификатора доступа субъекту доступа или объекту
доступа и его регистрации в перечне присвоенных идентификаторов
доступа. (ГОСТ Р 58833-2020, пункт 3.41)

**BOM (Byte Order Mark)** — метка порядка байтов, специальный символ
стандарта Unicode (U+FEFF), который может располагаться в начале
файла. Он помогает определить:

  - кодировку текста (UTF-8, UTF‑16, UTF‑32);

  - порядок байтов (Little Endian / Big Endian).

Для UTF‑8 BOM — это последовательность трёх байтов: EF BB BF (в
шестнадцатеричном
представлении).

# Перечень сокращений

| API          | – | Application programming interface                                |
| ------------ | - | ---------------------------------------------------------------- |
| HTTP         | – | HyperText Transfer Protocol                                      |
| HTTPS        | – | HyperText Transfer Protocol Secure                               |
| IIS          | – | Internet Information Services                                    |
| IP           | – | Internet Protocol                                                |
| ISO          | – | International Organization for Standardization                   |
| LDAP         | – | Lightweight Directory Access Protocol                            |
| SQL          | – | Structured Query Language                                        |
| TCP          | – | Transmission Control Protocol                                    |
| UDP          | – | User Datagram Protocol                                           |
| UID          | – | User Identifier                                                  |
| PID          | – | Process ID. Идентификатор процесса                               |
| АРМ          | – | Автоматизированное рабочее место                                 |
| БД           | – | База данных                                                      |
| ИБ           | – | Информационная безопасность                                      |
| ОЗУ          | – | Оперативное запоминающее устройство                              |
| ОС           | – | Операционная система                                             |
| РСБ          | – | Регистрация событий безопасности                                 |
| СМИБ         | – | Система менеджмента информационной безопасности                  |
| СУБД         | – | Система управления базами данных                                 |
| УПД          | – | Управление доступом                                              |
| ФСТЭК России | – | Федеральная служба по техническому и экспортному контролю России |
| ЭВМ          | – | Электронно-вычислительная машина                                 |

