**АННОТАЦИЯ**

Данный документ представляет собой руководство по установке защищенной системы управления базами данных «Jatoba» (далее по тексту – СУБД, СУБД «Jatoba»).

Руководство по установке содержит следующие разделы:

- 
- 
- 
- 
- 
- 
- 
- 

<!-- -->

- 
- 

<!-- -->

- 

<!-- -->

- 
- 

<!-- -->

- 

<!-- -->

- 
- 

<!-- -->

- 

<!-- -->

- 
- 

<!-- -->

- 

<!-- -->

- 
- 
- 

<!-- -->

- 
- 

:::warning Важная информация
Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.

Например, СУБД «Jatoba» версии 5.x по умолчанию устанавливается в директорию:
:::

ОС Windows – «C:\Program Files\GIS\Jatoba\5\bin»;ОС Linux – «/usr/jatoba-5/bin».Степени важности примечаний, применяемые в документе:

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th style="text-align: left;"><strong>Важная информация</strong> – указания, требующие особого внимания</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /></td>
<td><strong>Дополнительная информация</strong> – указания, позволяющие упростить работу с изделием</td>
</tr>
<tr>
<td style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></td>
<td style="text-align: left;"><p><strong>Важная информация</strong></p>
<p>Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!</p></td>
</tr>
</tbody>
</table>



## Общие сведения о СУБД «Jatoba»

### Назначение СУБД «Jatoba»

СУБД «Jatoba» является программным средством, предназначенным для создания и управления реляционными базами данных на базе ЭВМ под управлением операционных систем (ОС), представленных в таблице Таблица 1.1.

| **№** | **Наименование ОС** | **Серверная часть** | **Клиентская часть** | **Docker (ver.)** | **Сертификат ФСТЭК** |  |
|:--:|:---|:--:|:--:|:--:|:--:|:--:|
|  |  |  |  |  | **№ серт.** | **Дата выдачи** |
| 1 | Astra Linux 1.7 Special Edition Смоленск (x86-64) | Х | Х | 25.0.5 | 2557 | 30.01.2012 |
| 2 | Astra Linux 1.8 (x86-64) | Х | Х | 25.0.5 |  |  |
| 3 | Альт 8 СП | Х | Х | 27.1.1 | 3866 | 10.08.2018 |
| 4 | Альт 10 СП | Х | Х | 27.1.1 | 3866 | 10.08.2018 |
| 5 | ОСНОВА2 | Х | Х | 20.10.5 | 4381 | 31.03.2021 |
| 6 | РЕД ОС 7.3 Муром | Х | Х | 25.0.7 | 4060 | 12.01.2019 |

Таблица 1.1 – Перечень поддерживаемых ОС

### Функции СУБД «Jatoba»

СУБД «Jatoba» реализует следующие функциональные возможности:

- 
- 
- 
- 
- 

управление данными во внешней памяти;управление данными в оперативной памяти;выполнение запросов (DDL/DML);управление транзакциями;журнализация изменений, резервное копирование и восстановление базы данных после сбоев, репликация.СУБД «Jatoba» в дополнение к стандартным возможностям управления базами данных, реализует следующие функции:

- 
- 
- 
- 
- 
- 
- 
- 

### хранение пространственных, географических и геометрических данных, поддержка запросов к ним и управление ими;синтаксическая совместимость с распространенными PL/SQL Oracle;расширенные возможности секционирования больших таблиц;протоколирование, анализ и контроль выполнения команд манипулирования данными (DDL/DML);сбор журналов аудита всех операций и загрузка конфигураций в СУБД;работа в составе отказоустойчивого кластера с механизмом переключения нагрузки на основной узел кластера;защита от несанкционированного изменения конфигурационных файлов;единый пользовательский интерфейс для управления конфигурациями компонентов и просмотра их состояния СУБД.Требования к среде функционирования СУБД «Jatoba»

СУБД «Jatoba» устанавливается на ЭВМ с процессорами, имеющими архитектуру x86, x86-64 и AMD64, удовлетворяющие следующим аппаратным требованиям, указанным в таблице Таблица 1.2.

<table>
<caption><p>Таблица 1.2 – Программные и аппаратные требования к ЭВМ, на которых функционируют клиентская и серверная часть СУБД</p></caption>
<colgroup>
<col style="width: 36%" />
<col style="width: 40%" />
<col style="width: 23%" />
<col style="width: 0%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Характеристика</strong></th>
<th style="text-align: center;"><strong>Сертифицированная ОС</strong></th>
<th style="text-align: center;"></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4" style="text-align: center;"><strong>Требования к аппаратному обеспечению сервера СУБД</strong></td>
</tr>
<tr>
<td style="text-align: center;">ОЗУ</td>
<td style="text-align: center;">Не менее 2 Гб</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Свободный объем жесткого диска</td>
<td style="text-align: center;"><p>Минимальный объем от 40 Гб</p>
<p>Рекомендуемый объем от 100 Гб</p></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Устройства видео вывода</td>
<td style="text-align: center;">Монитор и видеоадаптер с поддержкой VGA и разрешением 800x600 или выше</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Тип процессора и минимальная тактовая частота процессора</td>
<td style="text-align: center;">64-разрядный процессор Intel или AMD 3 ГГц или больше</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Минимальное количество ядер</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Максимальное количество ядер</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Устройства ввода-вывода</td>
<td style="text-align: center;">Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB, либо PS/2-интерфейсами</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Адаптер Ethernet</td>
<td style="text-align: center;">100 Мбит/с</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="4" style="text-align: center;"><strong>Требования к аппаратному обеспечению АРМ управления</strong></td>
</tr>
<tr>
<td style="text-align: center;">ОЗУ</td>
<td style="text-align: center;">Не менее 4 Гб</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Свободный объем жесткого диска</td>
<td style="text-align: center;">От 3 Гб</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Устройства видео вывода</td>
<td style="text-align: center;">Монитор и видеоадаптер с поддержкой VGA и разрешением 800x600 или выше</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Тип процессора и минимальная тактовая частота процессора</td>
<td style="text-align: center;"><p>64-разрядный процессор Intel или AMD</p>
<p>Рекомендуемая частота: 2.4 ГГц или больше</p></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Устройства ввода-вывода</td>
<td style="text-align: center;">Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB-интерфейсами, либо PS/2 интерфейсами</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Адаптер Ethernet</td>
<td style="text-align: center;">100 Мбит/с</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="4" style="text-align: center;"><strong>Требования к программному обеспечению сервера</strong></td>
</tr>
<tr>
<td style="text-align: center;">Операционная система</td>
<td style="text-align: center;">Требования приведены в таблице Таблица 1.1</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="4" style="text-align: center;"><strong>Требования к программному обеспечению АРМ управления</strong></td>
</tr>
<tr>
<td style="text-align: center;">Операционная система</td>
<td style="text-align: center;">Требования приведены в таблице Таблица 1.1</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="4" style="text-align: center;"><strong>Требования к аппаратному обеспечению сервера Jatoba data safe</strong></td>
</tr>
<tr>
<td style="text-align: center;">ОЗУ</td>
<td style="text-align: center;">Не менее 2 Гб</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Свободный объем жесткого диска</td>
<td style="text-align: center;"><p>Минимальный объем от 40 Гб</p>
<p>Рекомендуемый объем от 100 Гб</p></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Устройства видео вывода</td>
<td style="text-align: center;">Монитор и видеоадаптер с поддержкой VGA и разрешением 800x600 или выше</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Тип процессора и минимальная тактовая частота процессора</td>
<td style="text-align: center;">64-разрядный процессор Intel или AMD 3 ГГц или больше</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Минимальное количество ядер</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Устройства ввода-вывода</td>
<td style="text-align: center;">Стандартные 105-клавишная клавиатура и манипулятор «мышь» с USB, либо PS/2 интерфейсами</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Адаптер Ethernet</td>
<td style="text-align: center;">100 Мбит/с</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="4" style="text-align: center;"><strong>Требования к программному обеспечению сервера Jatoba data safe</strong></td>
</tr>
<tr>
<td rowspan="3" style="text-align: center;">Поддерживаемые платформы</td>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;">win-x86;</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;">win-x64;</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;">linux-x64Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">СУБД</td>
<td style="text-align: center;">Защищенная система управления базами данных «Jatoba»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">Веб-сервер</td>
<td style="text-align: center;">IIS 10</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Nginx</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">Компоненты</td>
<td style="text-align: center;">ASP.NET Core 6.0 Runtime (v6.0.1) – Windows Hosting Bundle Installer</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td rowspan="6" style="text-align: center;">Internet браузер</td>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>Яндекс.БраузерХ</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>ChromiumХ</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>Mozilla FirefoxХ</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>Opera</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>Microsoft Edge</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;"><blockquote>
<p>Google Chrome</p>
</blockquote></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

Таблица 1.2 – Программные и аппаратные требования к ЭВМ, на которых функционируют клиентская и серверная часть СУБД

## Состав СУБД «Jatoba»

В состав СУБД «Jatoba» входят компоненты, указанные в таблице Таблица 2.1.

<table>
<caption><p>Таблица 2.1 – Состав компонент СУБД «Jatoba»</p></caption>
<colgroup>
<col style="width: 5%" />
<col style="width: 21%" />
<col style="width: 38%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;"><strong>№</strong></th>
<th rowspan="2" style="text-align: center;"><strong>Наименование</strong></th>
<th rowspan="2" style="text-align: center;"><strong>Описание</strong></th>
<th colspan="2" style="text-align: center;"><strong>J4</strong></th>
<th colspan="2" style="text-align: center;"><strong>J5</strong></th>
<th colspan="2" style="text-align: center;"><strong>J6</strong></th>
</tr>
<tr>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.<sup>1)</sup></strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.<sup>1)</sup></strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Дист.<sup>1)</sup></strong></p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p><strong>Обр.к.<sup>2)</sup></strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: left;">ядро СУБД</td>
<td style="text-align: left;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: left;">pwgen</td>
<td style="text-align: left;">генератор паролей</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">маскирование паролей</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: left;">KNN</td>
<td style="text-align: left;">поиск ближайших соседей</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: left;">xid64</td>
<td style="text-align: left;">компонент xid64</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: left;">ja_Compression</td>
<td style="text-align: left;">сжатие данных на уровне страниц</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: left;">WAL Recovery</td>
<td style="text-align: left;">восстановление поврежденных WAL записей</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">2</td>
<td style="text-align: left;">jaDog</td>
<td style="text-align: left;">компонент управления режимом работы узлов кластера</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">3</td>
<td style="text-align: left;"><p>JDV</p>
<p>(Jatoba data vault)</p></td>
<td style="text-align: left;">компонент контроля субъектов доступа</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">4</td>
<td style="text-align: left;">pgBadger</td>
<td style="text-align: left;">компонент формирования отчетов по журналам СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: left;">pg_ProBackup</td>
<td style="text-align: left;">компонент расширенного резервного копирования</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">6</td>
<td style="text-align: left;">pg_Task</td>
<td style="text-align: left;">компонент планирования заданий СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">7</td>
<td style="text-align: left;">pg_Profile</td>
<td style="text-align: left;">компонент формирования отчетов производительности СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">8</td>
<td style="text-align: left;"><p>JDS</p>
<p>(Jatoba data safe)</p></td>
<td style="text-align: left;">компонент пользовательского веб-интерфейса для администраторов</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">9</td>
<td style="text-align: left;">ja_Sync_Ldap</td>
<td style="text-align: left;">компонент синхронизации учетных записей со службами каталогов</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">10</td>
<td style="text-align: left;">PlsPgSQL</td>
<td style="text-align: left;">компонент обфускации кода PL/pgSQL</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">11</td>
<td style="text-align: left;">ja_Hipe_Cluster</td>
<td style="text-align: left;">компонент высокопроизводительного кластера</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">12</td>
<td style="text-align: left;">ja_Log</td>
<td style="text-align: left;">компонент централизованного сбора записей событий СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">13</td>
<td style="text-align: left;">1c_support</td>
<td style="text-align: left;">компонент поддержки платформы 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">14</td>
<td style="text-align: left;">fasttrun</td>
<td style="text-align: left;">компонент совместимости с 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">15</td>
<td style="text-align: left;">fulleq</td>
<td style="text-align: left;">компонент совместимости с 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">16</td>
<td style="text-align: left;">mchar</td>
<td style="text-align: left;">компонент совместимости с 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">17</td>
<td style="text-align: left;">online_analyze</td>
<td style="text-align: left;">компонент совместимости с 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">18</td>
<td style="text-align: left;">plantuner</td>
<td style="text-align: left;">компонент совместимости с 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">19</td>
<td style="text-align: left;">ja_CSum</td>
<td style="text-align: left;">компонент контроля целостности</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">20</td>
<td style="text-align: left;">jaPooler</td>
<td style="text-align: left;">компонент балансировки подключений пользователей к СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">21</td>
<td style="text-align: left;">Oracle_FDW (Foreign data wrapper for oracle)</td>
<td style="text-align: left;">компонент доступа к данным СУБД Oracle</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">22</td>
<td style="text-align: left;">OraFCE (Oracle function compatibility extension)</td>
<td style="text-align: left;">компонент совместимости с СУБД Oracle</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">23</td>
<td style="text-align: left;">pg_Variables</td>
<td style="text-align: left;">компонент совместимости с системой глобальных переменных СУБД Oracle</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">24</td>
<td style="text-align: left;">SQL_Firewall</td>
<td style="text-align: left;">компонент выявления и предотвращения исполнения нетипичных SQL-запросов</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">25</td>
<td style="text-align: left;">JCS (Jatoba crypto access storage)</td>
<td style="text-align: left;">компонент сокрытия информации в файлах данных СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">26</td>
<td style="text-align: left;">pgSQL-HTTP</td>
<td style="text-align: left;">компонент формирования HTTP/HTTPS запросов из СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">27</td>
<td style="text-align: left;">TDS_FDW</td>
<td style="text-align: left;">компонент поддержки платформы Microsoft SQL Server</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">28</td>
<td style="text-align: left;">pgAudit</td>
<td style="text-align: left;">компонент расширенного журналирования событий СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">29</td>
<td style="text-align: left;">pgauditlogtofile</td>
<td style="text-align: left;">хранение событий безопасности в отдельном хранилище</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">30</td>
<td style="text-align: left;">PostGIS</td>
<td style="text-align: left;">компонент работы с географическими данными</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">31</td>
<td style="text-align: left;">PTrack</td>
<td style="text-align: left;">компонент расширенного резервного копирования</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">32</td>
<td style="text-align: left;">SecurityProfile</td>
<td style="text-align: left;">компонент управления парольными политиками пользователей СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">33</td>
<td style="text-align: left;">ja_Plan_Manager</td>
<td style="text-align: left;">компонент создания планов запросов в базах данных (БД), их оптимизации и экспорта в БД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">34</td>
<td style="text-align: left;">pg_store_plans</td>
<td style="text-align: left;">контроль выполненных планов запросов</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">35</td>
<td style="text-align: left;">pg-hint-plan</td>
<td style="text-align: left;">компонент корректировки запросов</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">36</td>
<td style="text-align: left;">ja_Container</td>
<td style="text-align: left;">СУБД «Jatoba» в контейнере</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">37</td>
<td style="text-align: left;">node_exporter</td>
<td style="text-align: left;">компонент сбора аппаратных и программных показателей работы GNU/Linux</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: center;">38</td>
<td style="text-align: left;">postgres_exporter</td>
<td style="text-align: left;">компонент сбора метрик СУБД</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: center;">39</td>
<td style="text-align: left;">sql_exporter</td>
<td style="text-align: left;">SQL экспортёр. Компонент сбора расширенных метрик СУБД</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: center;">40</td>
<td style="text-align: left;">prometheus</td>
<td style="text-align: left;">компонент мониторинга различных программных систем и сервисов Prometheus</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: center;">41</td>
<td style="text-align: left;">Alertmanager</td>
<td style="text-align: left;">компонент управления и обработки оповещений в системе мониторинга Prometheus</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: center;">42</td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Работа СУБД «Jatoba» в режиме ЗПС в ОС Astra Linux</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: center;">43</td>
<td style="text-align: left;">gis-cryptoplatform</td>
<td style="text-align: left;">библиотека «ГИС»</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td style="text-align: center;">44</td>
<td style="text-align: left;">pg_ulid</td>
<td style="text-align: left;">компонент поддержки лексографического идентификатора</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">45</td>
<td style="text-align: left;">ja_Seceventlog</td>
<td style="text-align: left;">компонент записи событий информационной безопасности</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">46</td>
<td style="text-align: left;">rum</td>
<td style="text-align: left;">компонент поддерживающий обратный индекс с хранением позиционной информации и полнотекстовый поиск</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">47</td>
<td style="text-align: left;">pg_repack</td>
<td style="text-align: left;">компонент реорганизации таблицы с минимальными блокировками</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">48</td>
<td style="text-align: left;">osnova-digsig-key</td>
<td style="text-align: left;">работа СУБД Jatoba в режиме ЗПС в ОС ОСНОВА</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">49</td>
<td style="text-align: left;">tsvector2</td>
<td style="text-align: left;">компонент полнотекстового поиска в БД</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">50</td>
<td style="text-align: left;">ja_Similar</td>
<td style="text-align: left;">компонент для полнотекстового поиска и определения похожих текстов</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">51</td>
<td style="text-align: left;">ja_Inventory</td>
<td style="text-align: left;">компонент инвентаризации СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">52</td>
<td style="text-align: left;">ja_tune</td>
<td style="text-align: left;">Генератор конфигурационного файла</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

Таблица 2.1 – Состав компонент СУБД «Jatoba»

> Примечание:

- 
- 

Дистрибутив.Образ контейнера.

## Установка СУБД «Jatoba» на ОС семейства GNU/Linux

Установку СУБД «Jatoba» возможно провести тремя способами:

1)  
2)  
3)  

| Установка из локального репозитория инсталлятором (см. п. 3.1).Установка из локального репозитория (CDROM) – производится из файлов, записанных на компакт-диск или скопированных с него п. (3.3).Установка непосредственно из deb/rpm-файлов – производится опционально, по усмотрению пользователя (п.п. 3.4, 3.5).<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Пользователь может найти весь необходимый набор deb/rpm-файлов на компакт-диске. |
|----|----|

Установка СУБД «Jatoba» на ОС GNU/Linux происходит в несколько этапов:

- 
- 
- 
- 
- 

настройка репозитория СУБД;установка основных пакетов;инициализация директории данных СУБД;конфигурирование СУБД;запуск сервиса СУБД.Пример установки и удаления СУБД «Jatoba» из локального репозитория для:

- 
- 
- 

ОС Ubuntu 18.04 приведен в Приложении Приложение 2;РЕД ОС 7.3 Муром приведен в Приложении Приложение 3;Альт 9 Server приведен в Приложении Приложение 4.Пример установки СУБД «Jatoba» из локального репозитория в Astra Linux 1.6 Special Edition Смоленск в замкнутой программной среде приведен в Приложении Приложение 5 настоящего документа.

Концептуальная схема последовательности действий представлена на рисунке Рисунок 3.1. Более подробное описание установки приведено ниже.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image3.png)

Рисунок 3.1 – Последовательность действий при установке СУБД на ОС GNU/Linux

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p><strong>Только для ОС Astra Linux 1.6 Смоленск</strong></p>
<p>Для корректного обновления системы и последующей установки<br />
СУБД «Jatoba» рекомендуется подключить и примонтировать все ISO-файлы установки и обновления ОС одновременно, прописав репозитории в виде локальных директорий точек монтирования. При использовании источников установки «cdrom» возможны ошибки нахождения зависимых пакетов на разных ISO-образах.</p></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></td>
<td>Перед началом установки СУБД «Jatoba» в ОС необходимо поставить все последние обновления.</td>
</tr>
<tr>
<td style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></td>
<td><p><strong>Только для ОС CentOS Linux 8.2 и выше</strong></p>
<p>Ввиду прекращения производителем поддержки ОС CentOS Linux 8-й версии необходимо в качестве источника для установки пакетов и обновлений системы использовать архивный репозиторий <a href="https://vault.centos.org"><u>https://vault.centos.org</u></a></p></td>
</tr>
<tr>
<td style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></td>
<td><p>Установка и запуск СУБД в ОС производится от имени пользователя «root» (суперпользователь). Порядок получения root-привилегий в различных ОС GNU/Linux может отличаться. Обычно для этого используется связка команд sudo su.</p>
<p>В случае если используется для получения root-привилегий команда su отдельно от sudo, то su следует обязательно использовать с параметром –l.</p>
<p>В случае отсутствия пакета sudo в системе, его необходимо установить. Для получения соответствующих пакетов пользователю необходимо обратиться к соответствующему руководству администратора операционной системы.</p></td>
</tr>
</tbody>
</table>

### Инсталлятор СУБД «Jatoba» для ОС семейства GNU/Linux

Инсталлятор выполняет базовую установку СУБД «Jatoba», инсталлируя пакеты:

- 
- 
- 
- 

jatoba<ver>-client – клиентская часть СУБД;jatoba<ver>-contrib – вспомогательный набор модулей (расширений) СУБД;jatoba<ver>-libs – основные библиотеки для клиентской и серверной части СУБД;jatoba<ver>-server – серверная часть СУБД.Установка пакетов, расширяющих возможности СУБД, выполняется отдельно в соответствии с пунктом 3.3.3 настоящего документа.

Работу инсталлятора возможно условно разделить на следующие этапы:

- 
- 

#### подготовительные действия;начало установки;Подготовительные действия для запуска инсталлятора

На этапе подготовительных действий выполняются следующие шаги:

1)  

> В терминале войти в режим суперпользователя, выполнив команду:sudo su

2)  

> Выполнить обновление системы:apt-get update -y && apt-get upgrade -y && apt dist-upgrade -y

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image4.png" style="width:7.08651in;height:2.64348in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_3\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-09-15 02-59-35.png" />

Рисунок 3.2 – Обновление системы

3)  

> Создать папку localrepo в корневом каталоге:mkdir /localrepo

4)  

- 
- 
- 

В созданную папку скопировать:каталог \<pool\>каталог \<dist\>файл \<DEB-GPG-KEY-Jatoba\><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image5.png" style="width:3.46832in;height:1.07763in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_3\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-09-15 02-41-50.png" />

Рисунок 3.3 – Структура каталога «localrepo»

5)  

Расположить установочный скрипт jatoba.sh в корневой директории текущего пользователя:<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image6.png" style="width:3.46722in;height:0.93874in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_3\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-09-15 03-09-24.png" />

Рисунок 3.4 – Расположение установочного скрипта jatoba.sh

6)  

> Дать разрешение на запуск:# cd /home
>
```
# chmod +x jatoba.sh
```

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image7.png" style="width:7.08651in;height:1.13044in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_3\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-09-15 03-10-44.png" />

Рисунок 3.5 – Команда установки прав на запуск скрипта

#### Установка СУБД инсталлятором

> Этап начала установки включает в себя следующие шаги:

1)  

> Запустить скрипт:./jatoba.sh install

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image8.png" style="width:7.08651in;height:0.8in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_3\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-09-15 03-11-35.png" />

Рисунок 3.6 – Команда запуска установочного скрипта

2)  

Указать версию устанавливаемой СУБД и подтвердить выбор для установки:<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image9.png" style="width:7.03983in;height:1.416in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-06 06-37-40.png" />

Рисунок 3.7 – Выбор версии СУБД

После чего начнется процесс установки и построится дерево зависимостей.

Автоматически добавится описание локального репозитория.

Запустится процедура инициализации БД.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image10.png" style="width:7.08531in;height:0.76389in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_3\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-09-15 03-38-58.png" />

Рисунок 3.8 – Инициализация БД

После процедуры инициализации БД в автоматическом режиме:

- 
- 

внесутся изменения в конфигурационный файл «postgresql.conf»;добавится сервис в список автозапуска.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image11.png" style="width:7.01514in;height:2.248in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-09-14 05-14-28.png" />

Рисунок 3.9 – Добавление службы в автозагрузку

3)  

Ввести пароль пользователя СУБД postgres и подтвердить его.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image12.png" style="width:7.00676in;height:4.01739in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-22 06-35-20.png" />

Рисунок 3.10 – Ввод и подтверждение пароля для пользователя «postgres»

4)  

Окончание установки (рис. Рисунок 3.11).<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image13.png" style="width:7.01114in;height:1.384in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-09-14 05-17-50.png" />

Рисунок 3.11 – Окно окончания установки

5)  

> Установить пароль для системного пользователя ОС «postgres»:sudo passwd postgres

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image14.png" style="width:7.08293in;height:1.408in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-09-14 05-28-01.png" />

Рисунок 3.12 - Установка пароля для системного пользователя ОС «postgres»

6)  

> Авторизоваться в psql, для этого нажать сочетание клавиш:CTRL + D
>
> Затем войти в psql:
>
> su postgres
>
> psql

7)  

> Установить пароль для пользователя СУБД «postgres»:\password

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image15.png" style="width:6.672in;height:2.43958in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC3\Screenshot from 2024-09-14 05-32-24.png" />

Рисунок 3.13 – Установка пароля для пользователя СУБД

На данном шаге установка СУБД закончена.

### Установка СУБД «Jatoba» с генератором конфигурационного файла ja_tune

Компонент «ja_tune» предназначен для Администратора СУБД и является генератором рекомендуемого конфигурационного файла «postgresql.conf» на основе данных об аппаратной платформе, на которой предполагается запускать экземпляр СУБД, данных операционной системы, предполагаемом профиле нагрузки СУБД и некоторых дополнительных параметрах.

Компонент «ja_tune» представляет собой самостоятельный исполняемый файл, запуск которого не зависит от запуска СУБД. В процессе функционирования компонент не требует наличия запущенного экземпляра СУБД и не требует подключения к какому-либо экземпляру СУБД.

Компонент выполнен в форме консольного приложения и может запускаться Администратором СУБД в двух режимах:

1\) из консоли операционной системы;

2\) при запуске утилиты «jatoba-setup» при инициализации каталога данный СУБД.

Для работы консольного приложения ja_tune требуются привилегии Администратора операционной системы для получения необходимой информации об аппаратных и системных характеристиках сервера СУБД.

Консольное приложение ja_tune не интегрировано в инсталлятор СУБД. Использование утилиты генерации рекомендуемого конфигурационного файла СУБД доступно при выполнении ручной установки СУБД, в соответствии с положениями разделов в п.п. 3.4, 3.5 настоящего документа.

Консольное приложение ja_tune устанавливается в составе пакета jatoba<ver>-server – серверная часть СУБД.

#### Запуск утилиты из консоли ОС

Консольный запуск утилиты целесообразен для:

- 
- 

| определения рекомендованных параметров для установленной СУБД и последующей корректировкой таковых;определения рекомендованных параметров перед установкой СУБД.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Параметры командной строки ja_tune можно вводить как верхнем, так и в нижнем регистре (например, SSD и ssd – равнозначные). При ошибке в значении параметра выводится информационное сообщение. |
|----|----|

Таблица 3.1 - Параметры командной строки ja_tune

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 84%" />
</colgroup>
<thead>
<tr>
<th><strong>Параметр</strong></th>
<th><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>--os</td>
<td><p>Название семейства операционной системы, для которой составляется конфигурационный файл.</p>
<p>Допустимый набор значений:</p>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
<p>linux – ОС GNU/Linux (debian, redhat и т.п.);unix – ОС семейства UNIX (freebsd, solaris и т.п.);windows – ОС семейства Windows;darwin – ОС macOS от Apple.Значение по умолчанию: linux</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--arch</td>
<td><p>Название архитектуры сервера, для которого составляется конфигурационный файл.</p>
<p>Допустимый набор значений:</p>
<ul>
<li></li>
<li></li>
<li></li>
</ul>
<p>x86-64 – 64-битные системы от Intel и AMD;amd64 – синоним x86-64;arm64 – 64-битные системы на базе процессоров ARM.Значение по умолчанию: x86-64</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--strgtype</td>
<td><p>Тип подсистемы хранения, которая используется на целевом сервере.</p>
<p>Допустимый набор значений:</p>
<ul>
<li></li>
<li></li>
<li></li>
</ul>
<p>hdd – используются накопители на жёстких магнитных дисках;ssd – используются твердотельные накопители;san – используются сетевые системы хранения данных, построенные на высокоскоростных и сверхвысокоскоростных каналах связи.Значение по умолчанию: SSD</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--workload</td>
<td><p>Тип нагрузки (профиль), под который планируется эксплуатация СУБД.</p>
<p>Допустимый набор значений:</p>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
<p>web – СУБД планируется эксплуатировать в среде Web-сервисов;oltp – СУБД планируется эксплуатировать в системах с высокой транзакционной нагрузкой;dwh – СУБД планируется эксплуатировать в системах с высокой аналитической нагрузкой (OLAP / Data Warehouse)mixed – СУБД планируется эксплуатировать с системах со смешанной нагрузкой;desktop – СУБД планируется эксплуатировать в настольных системах (в том числе для персонального использования);1c – СУБД планируется эксплуатировать в системах 1С:Платформа.Значение по умолчанию: mixed</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--cpu</td>
<td><p>Количество ядер (не гиперпоточность) на сервере, где планируется эксплуатация СУБД.</p>
<p>Допустимый набор значений: целое число; в пределах 1≤ CPU ≤ 256</p>
<p>Значение по умолчанию: 32</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--ram</td>
<td><p>Объем оперативной памяти, установленной на сервере.</p>
<p>Допустимый набор значений: цело число; в пределах 1 ≤ ram ≤ 1536</p>
<p>Значение по умолчанию: 128</p>
<p>Значение задается в гигабайтах (множитель 1024 [гигобайты]).</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--maxconn</td>
<td><p>Максимальное количество одновременных соединений пользователей, которое планируется обрабатывать сервером СУБД.</p>
<p>Допустимый набор значений: целое число; в пределах 20 ≤ maxconn ≤ 262143</p>
<p>Значение по умолчанию: 100</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--dbversion</td>
<td><p>Версия СУБД Jatoba/PostgreSQL</p>
<p>Значение, которое начинается с «PG», обозначает СУБД PostgreSQL и ее версию.</p>
<p>Значение, которое начинается с «J», обозначает СУБД Jatoba и ее версию.</p>
<p>Допустимый набор значений: PG10-PG16, J4-J6.</p>
<p>Значение по: J6</p>
<p>Пример. Если СУБД Jatoba имеет версию 6.4.1, значит параметр --dbversion должен иметь значение «J6».</p></td>
</tr>
<tr>
<td>--replication</td>
<td><p>Будет ли использоваться физическая / логическая репликация в процессе эксплуатации СУБД.</p>
<p>Допустимые значения:</p>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
<p>yes / no; on / off;1 / 0;true / false.Значение по умолчанию: yes</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--synreplication</td>
<td><p>Будет ли использоваться синхронный режим фиксации транзакции.</p>
<p>Обычно синхронный режим фиксации транзакций подразумевает, что СУБД будет дожидаться факта физической записи на диск результатов выполнения транзакции (обычно это WAL). Такое ожидание хоть и дает повышенный уровень надежности и сохранности данных, но несколько снижает производительность за счет дополнительного ожидания операций ввода/вывода.</p>
<p>Допустимые значения:</p>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
<p>yes / no;on / off;1 / 0;true / false.Значение по умолчанию: yes</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--help</td>
<td><p>Вывод краткой справочной информации о всех параметрах.</p>
<p>Если параметр указан в командной строке (даже если указаны и другие параметры), то ja_tune выводит краткую справочную информацию об использовании ja_tune и выходит с кодом возврата 0.</p></td>
</tr>
<tr>
<td>--version</td>
<td>Вывод информации о версии ja_tune.</td>
</tr>
</tbody>
</table>

Встроенная справка к утилите ja_tune вызывается при помощи команды:

> ./ja_tune --help

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image16.png" style="width:7.12669in;height:3.03333in" />

Рисунок 3.14 – Встроенная справка к утилите ja_tune

#### Запуск утилиты при инициализации каталога данных СУБД (jatoba-setup)

Утилиту ja_tune возможно использовать при инициализации каталога данных СУБД в утилите jatoba-setup, с параметрами приведенными в таблице Таблица 3.2.

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Параметры командной строки jatoba-setup при использовании утилиты ja_tune можно вводить как верхнем, так и в нижнем регистре (например, SSD и ssd – равнозначные). При ошибке в значении параметра выводится информационное сообщение. |
|----|----|

<table>
<caption><p>Таблица 3.2 – Параметры командной строки jatoba-setup при использовании утилиты ja_tune</p></caption>
<colgroup>
<col style="width: 16%" />
<col style="width: 83%" />
</colgroup>
<thead>
<tr>
<th><strong>Параметр</strong></th>
<th><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>--tune</td>
<td><p>Параметр, при помощи которого запускается утилита ja_tune при инициализации каталога данных с помощью jatoba-setup.</p>
<p>Параметр --tune имеет опциональный аргумент – абсолютное или относительное имя файла, куда будет записана рекомендуемая конфигурация. Если задано относительное имя, то файл сохраняется относительно директории PGDATA, заданной в jatoba-setup. Если аргумент не задан, т.е. пользователь явно не указал имя файла, то используется имя по умолчанию «ja_tune.conf».</p></td>
</tr>
<tr>
<td>--tune-strgtype</td>
<td><p>Параметр аналогичный --strgtype</p>
<p>Тип подсистемы хранения, которая используется на целевом сервере.</p>
<p>Допустимый набор значений параметра --tune-strgtype:</p>
<ul>
<li></li>
<li></li>
<li></li>
</ul>
<p>hdd – используются накопители на жёстких магнитных дисках;ssd – используются твердотельные накопители;san – используются сетевые системы хранения данных, построенные на высокоскоростных и сверхвысокоскоростных каналах связи.Значение по умолчанию: SSD</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--tune-workload</td>
<td><p>Параметр аналогичный --workload</p>
<p>Тип нагрузки (профиль), под который планируется эксплуатация СУБД.</p>
<p>Допустимый набор значений параметра --tune-workload:</p>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
<p>web – СУБД планируется эксплуатировать в среде Web-сервисов;oltp – СУБД планируется эксплуатировать в системах с высокой транзакционной нагрузкой;dwh – СУБД планируется эксплуатировать в системах с высокой аналитической нагрузкой (OLAP / Data Warehouse)mixed – СУБД планируется эксплуатировать с системах со смешанной нагрузкой;desktop – СУБД планируется эксплуатировать в настольных системах (в том числе для персонального использования);1c – СУБД планируется эксплуатировать в системах 1С:Платформа.Значение по умолчанию: Mixed</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--tune-maxconn</td>
<td><p>Параметр аналогичный --maxconn</p>
<p>Максимальное количество одновременных соединений пользователей, которое планируется обрабатывать сервером СУБД.</p>
<p>Допустимый набор значений параметра --tune-maxconn: целое число; в пределах 20 ≤ maxconn ≤ 262143</p>
<p>Значение по умолчанию: 100</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--tune-replication</td>
<td><p>Параметр аналогичный --replication</p>
<p>Будет ли использоваться физическая / логическая репликация в процессе эксплуатации СУБД.</p>
<p>Допустимые значения параметра --tune-replication:</p>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
<p>yes / no; on / off;1 / 0;true / false.Значение по умолчанию: yes</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
<tr>
<td>--tune-synreplication</td>
<td><p>параметр аналогичный --synreplication</p>
<p>Будет ли использоваться синхронный режим фиксации транзакции.</p>
<p>Обычно синхронный режим фиксации транзакций подразумевает, что СУБД будет дожидаться факта физической записи на диск результатов выполнения транзакции (обычно это WAL). Такое ожидание хоть и дает повышенный уровень надежности и сохранности данных, но несколько снижает производительность за счет дополнительного ожидания операций ввода/вывода.</p>
<p>Допустимые значения параметра --tune-synreplication:</p>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
<p>yes / no;on / off;1 / 0;true / false.Значение по умолчанию: yes</p>
<p>Значения автоматически <strong>не определяются</strong>.</p></td>
</tr>
</tbody>
</table>

Таблица 3.2 – Параметры командной строки jatoba-setup при использовании утилиты ja_tune

Встроенная справка в jatoba-setup к параметрам утилиты ja_tune вызывается при помощи команды:

> ./jatoba-setup --help

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image17.png" style="width:6.98697in;height:3.96667in" />

Рисунок 3.15 – Встроенная справка в jatoba-setup к параметрам утилиты ja_tune

#### Вывод результатов

Утилита не выводит результат своей работы в какой-либо файл. Для записи результатов в файл используйте соответствующие команды перенаправления в командной строке операционной системы:

- 
- 

\> имя файла - перенаправление в файл с перезаписью содержимого файла;\>\> имя файла - добавление в конец файла (возможно уже существующего).Пример № 1

Вывод результатов в консоль ОС

> ./ja_tune --workload web --os Linux --ram 2 --cpu 2 --maxconn 20 --dbversion J6 --strgtype ssd --replication true --synreplication true

Пример № 2

Вывод результатов в файл с добавлением результатов в конец файла

> ./ja_tune --workload web --os Linux --ram 2 --cpu 2 --maxconn 20 –-dbversion PG14 --strgtype ssd --replication true -- synreplication true \>\> jatoba_tune.conf

### Пакеты установки СУБД «Jatoba»

#### Базовая установка

Пакеты jatoba<ver>-client, jatoba<ver>-contrib, jatoba<ver>-libs, jatoba<ver>-server являются обязательными для установки СУБД:

- 
- 
- 
- 

jatoba<ver>-client – клиентская часть СУБД;jatoba<ver>-contrib – вспомогательный набор модулей (расширений СУБД);jatoba<ver>-libs – основные библиотеки для клиентской и серверной части СУБД;jatoba<ver>-server – серверная часть СУБД.Установка данных пакетов разными способами (зависит от вида полученного дистрибутива и/или файлов дистрибутива) подробно описана в подразделах 3.1, 3.5 и 3.7.

В пункте 3.3.3 описана установка дополнительных пакетов, расширяющих возможности СУБД.

#### Установка клиентской части СУБД «Jatoba» на ОС семейства GNU/Linux

Пакеты jatoba<ver>-client, jatoba<ver>-libs являются обязательными для установки клиентской части СУБД:

- 
- 

jatoba<ver>-client – клиентская часть СУБД;jatoba<ver>-libs – основные библиотеки для клиентской и серверной части СУБД.Установка данных пакетов разными способами (зависит от вида полученного дистрибутива и/или файлов дистрибутива) подробно описана в подразделах 3.1, 3.5 и 3.7.

Например, установка через пакетный менеджер для Debian систем «dpkg». Синтаксис команды будет следующим:

> dpkg -i jatoba<ver>-client_X.X.X-X_amd64.deb jatoba<ver>-libs_X.X.X-X_amd64.deb

Использование пакетного менеджера «dpkg» требует ввода полного имени устанавливаемых пакетов, как представлено ниже:

> dpkg -i jatoba4-client_4.5.3-1061_amd64.deb jatoba4-libs_4.5.3-1061_amd64.deb

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image18.png" style="width:7.08597in;height:1.23611in" alt="D:\VM\Чистые VM\Install\Screenshot from 2023-01-31 03-48-48.png" />

Рисунок 3.16 – Установка клиентской части СУБД через пакетный менеджер «dpkg»

В том числе возможна установка клиентской части СУБД через инструмент командной строки APT (Advanced Package Tool).

Команда будет следующей:

> apt-get install jatoba<ver>-client jatoba<ver>-libs

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image19.png" style="width:7.08597in;height:1.25in" alt="D:\VM\Чистые VM\Install\Screenshot from 2023-01-31 03-56-13.png" />

Рисунок 3.17 – Установка клиентской части СУБД через APT

После чего в каталоге:

> /usr/jatoba-<ver>/bin

будут установлены исполняемые файлы в том числе и «psql», который требуется для подключения пользователя к СУБД.

Приведенная установка клиентской части СУБД не требует формирования локального репозитория.

#### Установка пакетов, расширяющих возможности СУБД

Установка расширений СУБД предполагает установку определенных дополнительных пакетов, входящих в состав дистрибутива СУБД «Jatoba». Отдельные пакеты из состава СУБД «Jatoba» требуют установки либо вспомогательных пакетов из состава ОС, либо вспомогательных пакетов, разработанных третьими лицами (сторонними компаниями).

Описание установки расширений и дополнений из состава СУБД, приведенное в  
п.п. 3.3.3.1 – 3.3.3.22, дается в следующем порядке:

- 
- 
- 

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">указывается список пакетов из состава дистрибутива СУБД «Jatoba», которые включают это расширение, и список сторонних зависимостей, необходимых для этого расширения;при наличии сторонних зависимостей указывается команда их установки;описывается команда установки пакетов расширения.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th>Существуют особенности по поддержке компонент, представленные в<br />
таблице Таблица 3.3</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<table style="width:100%;">
<caption><p>Таблица 3.3 – Поддержка компонент СУБД в ОС</p></caption>
<colgroup>
<col style="width: 4%" />
<col style="width: 12%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 1%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 2%" />
<col style="width: 0%" />
<col style="width: 1%" />
<col style="width: 2%" />
<col style="width: 0%" />
<col style="width: 1%" />
<col style="width: 2%" />
<col style="width: 0%" />
<col style="width: 1%" />
<col style="width: 2%" />
</colgroup>
<thead>
<tr>
<th rowspan="2" style="text-align: center;"><strong>№</strong></th>
<th rowspan="2"><strong>Название компонента</strong></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Windows 10,11, 2016, 2019, 2022</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Astra Linux 1.6</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Astra Linux 1.7</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Astra Linux 2.12</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Debian 10</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Debian 11</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Альт 8 СП</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Альт 9 Server</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Альт 10 Server</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Ubuntu 18.04</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Ubuntu 20.04</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Ubuntu 22.04</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>РЕД ОС 7.2 Муром</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>РЕД ОС 7.3 Муром</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>РОСА 7.3</strong></p>
<p><strong>Кобальт</strong></p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p><strong>РОСА 7.9</strong></p>
</blockquote></th>
<th colspan="3" style="text-align: left;"><blockquote>
<p><strong>CentOS 7</strong></p>
</blockquote></th>
<th colspan="3" style="text-align: left;"><blockquote>
<p><strong>RedHat</strong></p>
<p><strong>Enterprise Linux 7</strong></p>
</blockquote></th>
<th colspan="3" style="text-align: left;"><blockquote>
<p><strong>RedHat Enterprise Linux 8</strong></p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p><strong>Oracle Linux 8.4</strong></p>
</blockquote></th>
</tr>
<tr>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: center;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
<th colspan="2" style="text-align: left;"><blockquote>
<p>серт</p>
</blockquote></th>
<th style="text-align: left;"><blockquote>
<p>ком</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2">Инсталляционный пакет</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td colspan="2" style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td colspan="2" style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td colspan="2" style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">1</td>
<td rowspan="2">Компонент «jaDog»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">2</td>
<td rowspan="2">Компонент «Jatoba data vault»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">3</td>
<td rowspan="2">Компонент «pgBadger»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">4</td>
<td rowspan="2">Компонент «pg_ProBackup»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">5</td>
<td rowspan="2">Компонент «pg_Task»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">6</td>
<td rowspan="2">Компонент «pg_Profile»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">7</td>
<td rowspan="2">Компонент «Jatoba data safe»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">8</td>
<td rowspan="2">Компонент «ja_Sync_LDAP»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">9</td>
<td rowspan="2">Компонент «PLspgSQL»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">10</td>
<td rowspan="2">Компонент «pg_Cryogen»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">11</td>
<td>Компонент «Citus»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td>Компонент «ja_Hipe_Cluster»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">12</td>
<td rowspan="2">Компонент «ja_Log»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td style="text-align: center;">13</td>
<td>Поддержка платформы 1С</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td colspan="2" style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td colspan="2" style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td colspan="2" style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">13.1</td>
<td rowspan="2">«fasttrun»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">13.2</td>
<td rowspan="2">«fulleq»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">13.3</td>
<td rowspan="2">«mchar»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">13.4</td>
<td rowspan="2">«online_analyze»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">13.5</td>
<td rowspan="2">«plantuner»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">14</td>
<td rowspan="2">Компонент «ja_CSum»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">15</td>
<td rowspan="2">Компонент «jaPooler»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td style="text-align: center;">16</td>
<td>Обеспечение работы с СУБД Oracle</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td colspan="2" style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td colspan="2" style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td colspan="2" style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">16.1</td>
<td rowspan="2" style="text-align: left;">«oracle_FDW»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">16.2</td>
<td rowspan="2">«oraFCE»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">16.3</td>
<td rowspan="2">«pg_Variables»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">17</td>
<td rowspan="2">Компонент «SQL_Firewall»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">18</td>
<td rowspan="2">Компонент «Jatoba crypto access storage»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">19</td>
<td rowspan="2">Компонент «pgSQL-HTTP»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">20</td>
<td rowspan="2">Компонент «pgAudit»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">21</td>
<td rowspan="2">Компонент «pgauditlogtofile»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">22</td>
<td rowspan="2">Компонент «PostGIS»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">23</td>
<td rowspan="2">Компонент «PTrack»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">24</td>
<td rowspan="2">Компонент «SecurityProfile»</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;">4</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">25</td>
<td rowspan="2">Компонент «TDS_FDW»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">26</td>
<td rowspan="2">Компонент «ja_Plan_Manager»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">4</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">27</td>
<td rowspan="2">Компонент «pg_repack»</td>
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
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">28</td>
<td rowspan="2">Компонент «pg_store_plans»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">29</td>
<td rowspan="2">Компонент «pg_hint_plan»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">30</td>
<td rowspan="2">Компонент «node_exporter»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">31</td>
<td rowspan="2">Компонент «postgres_exporter»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">32</td>
<td rowspan="2">Компонент «sql_exporter»</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">33</td>
<td rowspan="2">Компонент «pg_ulid»</td>
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
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">34</td>
<td rowspan="2"><p>Компонент</p>
<p>«pg-explain»</p></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">35</td>
<td rowspan="2"><p>Компонент</p>
<p>«pg-explain-db»</p></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">36</td>
<td rowspan="2"><p>Компонент</p>
<p>«pg-monitor»</p></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">37</td>
<td rowspan="2"><p>Компонент</p>
<p>«pg-monitor-collector»</p></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">38</td>
<td rowspan="2"><p>Компонент</p>
<p>«pg-monitor-dispatcher»</p></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;">5</td>
</tr>
</tbody>
</table>

Таблица 3.3 – Поддержка компонент СУБД в ОС

> Примечание:

- 
- 
- 
- 
- 
- 

«4» – СУБД «Jatoba» с версией ядра «4»;«5» – СУБД «Jatoba» с версией ядра «5»;«» – не поддерживается компонент в ОС;«Х» – поддерживается компонент в ОС;«серт» – сертифицированная версия СУБД;«ком» – не сертифицированная, коммерческая версия СУБД.

Команда установки пакетов в разных дистрибутивах Linux может отличаться, также могут отличаться некоторые шаги установки, связанные с отдельными особенностями дистрибутивов Linux и способами распространения продуктов третьих лиц. Описание команды установки дано в виде группы команд для четырех отличительных видов дистрибутивов Linux:

1)  

> классический Debian Linux и все дистрибутивы от него производные:apt-get install \<список имен пакетов\>

2)  

> классический Red Hat и все дистрибутивы от него производные:yum install \<список имен пакетов\>

3)  

> ALTLinux – дистрибутив, построенный на базе RPM-пакетов, но использующий APT в качестве высокоуровневого менеджера пактов (команда установки выглядит аналогично Debian):apt-get install \<список имен пакетов\>

Все необходимые отличия, связанные с установкой в разных видах дистрибутивов Linux, также даны с пометкой соответствующей ОС.

Ряд компонентов для корректной установки требуют зависимые пакеты, часть из которых отсутствует в системных репозиториях операционных систем (CentOS 7, RHEL 7, Oracle 8, RHEL 8), поэтому перед установкой пакетов, расширяющих базовые функциональные возможности СУБД, рекомендуется добавить в систему EPEL репозитории.

Порядок установки EPEL репозиториев:

- 1)  

> Для CentOS 7/RHEL 7/Oracle 8:Выполнить установку репозиториев:yum install epel-release

2)  

> Обновить состояние репозиториев:yum makecache

3)  

> Выполнить обновление:yum update -y

- 

1)  

> Для RHEL 8:В subscription-manager включить вспомогательный репозиторий:subscription-manager repos --enable codeready-builder-for-rhel-8-\$(arch)-rpms

2)  

> Выполнить установку репозитория:dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm

3)  

> Обновить состояние репозиториев:yum makecache

4)  

> Выполнить обновление:yum update -y

##### Набор разработчика

Список пакетов:

- 
- 
- 

| jatoba<ver>-dev – библиотеки и заголовочные файлы для создания собственных расширений для Jatoba/PostgreSQL;jatoba<ver>-docs – англоязычная документация для администраторов, пользователей и разработчиков;jatoba<ver>-test – набор утилит и библиотек для проведения функционального тестирования СУБД и ее расширений.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-dev jatoba<ver>-docs jatoba<ver>-test

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-devel jatoba<ver>-docs jatoba<ver>-test

- 

> ОС ALTLinux:apt-get install jatoba<ver>-devel jatoba<ver>-docs jatoba<ver>-test

- 

> ОС openSUSE:zypper install jatoba<ver>-devel jatoba<ver>-docs jatoba<ver>-test

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image20.png" style="width:7.08681in;height:4.7091in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 22-39-25.png" />

Рисунок 3.18 – Установка набора разработчика на примере ОС GNU/Linux Debian

##### Пакет поддержки 1C

Список пакета:

- 

| jatoba<ver>-1csupport – в составе пять специальных модулей (расширений), необходимые для работы 1C.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-1csupport

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-1csupport

- 

> ОС ALTLinux:apt-get install jatoba<ver>-1csupport

- 

> ОС openSUSE:zypper install jatoba<ver>-1csupport

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image21.png" style="width:7.0867in;height:4.00833in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 07-59-21.png" />

Рисунок 3.19 – Установка поддержки 1С на примере ОС GNU/Linux Debian

##### Поддержка миграции из Oracle Database®

Список пакетов:

- 
- 

| jatoba<ver>-oracle-fdw – расширение, которое предоставляет обертку доступа к внешним данным, находящимся в СУБД Oracle Database®;jatoba<ver>-orafce – расширение, которое предоставляет набор функций и операторов, совместимых с СУБД Oracle Database®.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: требуется установка клиентских библиотек СУБД Oracle Database® (пакеты Oracle Instance Client версии 12.2, поставляет Oracle Inc.; заинтересованный пользователь должен скачать и установить их самостоятельно с сайта [oracle.com](https://www.oracle.com/ru/index.html) до установки компонент «Oracle_FDW») |
|----|----|

Установка сторонних пакетов:

Детально описана в документации компании разработчика, доступной по ссылке: [Installing Oracle Instant Client Packages](https://docs.oracle.com/en/database/oracle/oracle-database/21/lacli/instant-client-install-linux.html#GUID-CD3C72C6-110E-453A-8B69-2961D37EB70B) (рекомендуем обратить внимание на версию устанавливаемой библиотеки).

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Пакеты jatoba4-oracle-fdw и jatoba4-orafce можно устанавливать и использовать отдельно друг от друга |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-oracle-fdw jatoba<ver>-orafce

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-oracle_fdw jatoba<ver>-orafce

- 

> ОС ALTLinux:apt-get install jatoba<ver>-oracle_fdw jatoba<ver>-orafce

- 

> ОС openSUSE:zypper install jatoba<ver>-oracle_fdw jatoba<ver>-orafce

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image22.png" style="width:7.08359in;height:3.96458in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 08-00-39.png" />

Рисунок 3.20 – Установка компонент миграции на примере ОС GNU/Linux Debian

##### 

«jaDog» – управление режимом работы узлов кластераКомпонент «jaDog» входит в состав СУБД «Jatoba», предназначен для контроля состояния серверов (далее – узлов) кластера СУБД и обеспечивает выполнение функций обработки отказа и восстановления узлов кластера в автоматическом режиме.

Список пакетов:

> jatoba<ver>-client
>
> jatoba<ver>-contrib
>
> jatoba<ver>-libs
>
> jatoba<ver>-server

т.е. устанавливается при [базовой установке СУБД](#базовая-установка) (пункт 3.3.1).

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-07 98 01-01 «Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog». Пример установки приведен в Приложении 3 документа.

##### 

«jаPooler» – балансировка подключений пользователей к СУБДКомпонент «jaPooler» предназначен для управления соединениями, позволяет подключиться к СУБД большому числу клиентов без существенного снижения производительности.

Список пакетов:

> jatoba<ver>-japooler
>
> jatoba<ver>-server
>
> jatoba<ver>-client
>
> jatoba<ver>-libs

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка компонента под ОС GNU/Linux приведена в документе 643.72410666.00067-07 98 01-15 «Руководство по настройке. Часть 15. Балансировка подключений пользователей к СУБД. Компонент «jaPooler».

##### 

«ja_CSum» – контроль целостностиКомпонент «ja_CSum» предназначен для выполнения периодических фоновых проверок файлов, расположенных в ключевых директориях СУБД.

Список пакетов:

> jatoba<ver>-ja_csum

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка компонента под ОС семейства Windows и GNU/Linux описана в документе 643.72410666.00067-07 98 01-14 «Руководство по настройке. Часть 14. Контроль целостности. Компонент «ja_CSum».

##### 

«ja_Log» – централизованный сбор записей событий СУБДКомпонент «ja_Log» предназначен для сбора событий безопасности с целевых  
СУБД «Jatoba» в служебную СУБД «Jatoba data safe».

Список пакетов:

> jatoba<ver>-ja-log

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-07 98 01-12 «Руководство по настройке. Часть 12. Централизованный сбор записей событий в СУБД. Компонент «ja_Log». Пример установки приведен в Приложении документа.

##### 

«JCS (Jatoba crypto access storage)» – сокрытие информации в файлах данных СУБДКомпонент «JCS» предназначен для выполнения сокрытия данных в объектах СУБД и предотвращает возможность ознакомления с преобразованными данными при их утрате.

Список пакетов:

> jatoba<ver>-client
>
> jatoba<ver>-contrib
>
> jatoba<ver>-libs
>
> jatoba<ver>-server
>
> jatoba<ver>-jcs

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-07 98 01-18 «Руководство по настройке. Часть 18. Сокрытие информации в файлах данных СУБД. Компонент «Jatoba crypto access storage». Пример установки приведен в Приложении 1 документа.

##### «SQL_Firewall» – выявление и предотвращение исполнения нетипичных SQL-запросов

Компонент «SQL_Firewall» предназначен для защиты базы данных от SQL-инъекций или неожиданных запросов.

Список пакетов:

> jatoba<ver>-client
>
> jatoba<ver>-contrib
>
> jatoba<ver>-libs
>
> jatoba<ver>-server
>
> jatoba<ver>-sql-firewall

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-07 98 01-17 «Руководство по настройке. Часть 17. Выявление и предотвращение исполнения нетипичных SQL-запросов. Компонент «SQL_Firewall».

##### 

«pg_Cryogen» – компрессия данных СУБДКомпонент «pg_Cryogen» предназначен для компрессии данных в СУБД.

Список пакетов:

> jatoba<ver>-client
>
> jatoba<ver>-contrib
>
> jatoba<ver>-libs
>
> jatoba<ver>-server
>
> jatoba<ver>-pg-cryogen

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-07 98 01-10 «Руководство по настройке. Часть 10. Компрессия данных СУБД. Компонент «pg_Cryogen». Пример установки приведен в Приложении 1 документа.

##### 

«JDV (Jatoba data vault)» – контроль субъектов доступаКомпонент «JDV» предназначен для ограничения доступа пользователей СУБД к защищаемым объектам БД.

Список пакетов:

> jatoba<ver>-client
>
> jatoba<ver>-contrib
>
> jatoba<ver>-libs
>
> jatoba<ver>-server
>
> jatoba<ver>-jdv

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-07 98 01-02 Руководство по настройке. Часть 2. Контроль субъектов доступа. Компонент «Jatoba data vault».

##### «Jatoba data safe (JDS)» – компонент пользовательского веб-интерфейса для администраторов СУБД

Установка компонента приведена в документе 643.72410666.00067-07 98 01-07 «Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe».

##### 

«ja_Sync_LDAP» – компонент синхронизации учетных записей с MS Active DirectoryКомпонент обеспечивает администратора инструментом на уровне СУБД, выполняющим синхронизацию списка пользователей между внешней службой аутентификации (службы каталогов LDAP/Active Directory) и СУБД.

Список пакетов:

> jatoba<ver>-ja-sync-ldap

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка компонента под ОС семейства Windows и GNU/Linux приведена в документе 643.72410666.00067-07 98 01-08 «Руководство по настройке. Часть 8. Синхронизация учетных записей служб каталогов и СУБД. Компонент «ja_Sync_LDAP».

##### «pgAudit» – аудит действий пользователя

Список пакетов:

- 

| jatoba<ver>-pgaudit – расширение к СУБД, встраиваемое в конвейер обработки запросов и регистрирующее доступ пользователей к объектам СУБД (в основном к таблицам и функциям).<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-pgaudit

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-pgaudit

- 

> ОС ALTLinux:apt-get install jatoba<ver>-pgaudit

- 

> ОС openSUSE:zypper install jatoba<ver>-pgaudit

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image23.png" style="width:7.01867in;height:3.95348in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-04-17 01-49-12.png" />

Рисунок 3.21 – Установка расширения аудита на примере ОС GNU/Linux Debian

##### «pgauditlogtofile» – дополнительный компонент к компоненту pgAudit

Список пакетов:

- 

| jatoba<ver>-pgauditlogtofile – расширение к СУБД, дополняющее функциональные возможности расширения «pgAudit», перенаправляя строки журнала аудита СУБД в независимый файл.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-pgauditlogtofile

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-pgauditlogtofile

- 

> ОС ALTLinux:apt-get install jatoba<ver>-pgauditlogtofile

- 

> ОС openSUSE:zypper install jatoba<ver>-pgauditlogtofile

Начало формы

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image24.png" style="width:7.01731in;height:3.98033in" alt="C:\Users\KUZNET~1\AppData\Local\Temp\vmware-kuznetsov-a\VMwareDnD\ad9af89c\Screenshot from 2024-04-17 00-41-15.png" />

Рисунок 3.22 – Установка расширения аудита на примере ОС GNU/Linux Debian

##### «pgBadger» – анализатор журналов событий

Список пакетов:

- 

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">jatoba4-pgbadger – отдельный исполняемый файл на языке Perl, который работает отдельно от СУБД, но требует доступа к файлам событий СУБД.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Внешние зависимости:</p>
<ol type="1">
<li></li>
<li></li>
</ol></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

perl и несколько perl-модулей для генерации файлов в формате CSV и JSON;опционально может использовать SSH для удаленного доступа.Установка данного расширения приведена в документе 643.72410666.00067-07 98 01-03 «Руководство по настройке. Часть 3. Настройка модуля для анализа файлов регистрации событий СУБД. Модуль «pgBadger».

##### «pg_ProBackup» – расширенное средство резервного копирования

Список пакетов:

- 
- 

| jatoba<ver>-pg_probackup – отдельный исполняемый файл, который работает отдельно от СУБД, но требует доступа к СУБД для выполнения функций резервирования / контроля / восстановления данных;jatoba<ver>-ptrack – расширение к СУБД, которым может пользоваться «pg_ProBackup» для выполнения инкрементального резервного копирования (один из режимов работы «pg_ProBackup»).<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: опционально может использовать SSH для удаленного доступа к серверу для выполнения резервирования / восстановления |
|----|----|

Установка данного компонента приведена в документе 643.72410666.00067-07 98 01-04. «Руководство по настройке. Часть 4. Расширенное резервное копирование. Компонент «pg_ProBackup».

##### «pg_Profile» – анализ производительности СУБД

Список пакетов:

- 

| jatoba<ver>-pg_profile – расширение к СУБД, позволяющее собирать и просматривать параметры и метрики функционирования различных баз данных (БД) в различное время, а также строить отчеты по этим данным и сравнивать их между собой для выявления проблемных мест.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка данного расширения приведена в документе 643.72410666.00067-07 98 01-06 «Руководство по настройке. Часть 6. Настройка модуля для анализа производительности СУБД. Модуль «pg_Profile».

##### «pgSQL-HTTP» – доступ к сайтам по HTTP/S протоколу из СУБД

Список пакетов:

- 

| jatoba<ver>-pgsql-http – расширение к СУБД, позволяющее выполнять запросы к внешним веб-серверам (http/https-запросы).<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: требует библиотеку curl. Библиотека curl обычно входит в стандартную установку большинства Linux-дистрибутивов. Если по каким-то причинам она не установлена, то далее приведены команды, с помощью которых ее можно установить на различных видах дистрибутивов |
|----|----|

Установка зависимостей:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install libcurl-gnutls

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install libcurl

- 

> ОС ALTLinux:apt-get install libcurl

- 

> ОС openSUSE:zypper install libcurl

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-pgsql-http

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-pgsql-http

- 

> ОС ALT Linux:apt-get install jatoba<ver>-pgsql-http

- 

> ОС openSUSE:zypper install jatoba<ver>-pgsql-http

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image25.png" style="width:7.0867in;height:4.075in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 08-10-19.png" />

Рисунок 3.23 – Установка расширения на примере ОС GNU/Linux Debian

##### «pg_Variables» – создание переменных в сессии пользователя

Список пакетов:

- 

| jatoba<ver>-pg-variables – расширение к СУБД.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-pg-variables

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-pg_variables

- 

> ОС ALTLinux:apt-get install jatoba<ver>-pg_variables

- 

> ОС openSUSE:zypper install jatoba<ver>-pg_variables

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image26.png" style="width:7.0867in;height:4.025in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 08-04-17.png" />

Рисунок 3.24 – Установка расширения на примере ОС GNU/Linux Debian

##### Дополнительные языки хранимых процедур

Список пакетов:

- 
- 
- 

| jatoba<ver>-plperl – добавление в СУБД поддержки написания хранимых процедур на языке perl;jatoba<ver>-plpython – добавление в СУБД поддержки написания хранимых процедур на языке python версии 2;jatoba<ver>-plpython3 – добавление в СУБД поддержки написания хранимых процедур на языке python версии 3.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: требуется в системе наличие библиотек для языков perl, python2 и python3. Эти языки обычно входят в стандартный комплект поставки большинства Linux-дистрибутивов и устанавливаются автоматически |
|----|----|

Перечисленные пакеты не зависят друг от друга и могут быть поставлены по отдельности в любом порядке. Команды установки показаны на примере пакета jatoba4-plpython3.

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-plpython3

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-plpython3

- 

> ОС ALTLinux:apt-get install jatoba<ver>-plpython3

- 

> ОС openSUSE:zypper install jatoba<ver>-plpython3

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image27.png" style="width:7.0867in;height:4.03333in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 08-05-06.png" />

Рисунок 3.25 – Установка расширения на примере ОС GNU/Linux Debian

##### «PlsPgSQL» – обфускация исходных текстов хранимых процедур

Список пакетов:

- 

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">jatoba&lt;ver&gt;-plspgsql – расширение к СУБД, а также утилита закрытия исходных текстов хранимых процедур.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Внешние зависимости: требуется установка следующих внешних продуктов:</p>
<ol type="1">
<li></li>
<li></li>
</ol></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

lsb-cprocsp – криптопровайдер «КриптоПро CSP» для различных операционных систем разработанный ООО «КРИПТО-ПРО» (не входит в состав дистрибутива);gis-cryptoplatform17 – библиотека «КриптоПлатформа» для централизованной работы с криптоправайдерами в ОС, продукт поставляет ООО «Газинформсервис».Список сторонних пакетов:

1)  
2)  

lsb-cprocsp – криптопровайдер «КриптоПро CSP» версии 5.0. Данный пакет распространяется в виде самостоятельного DEB/RPM дистрибутива. Для установки необходимо обратиться к документации на официальном сайте разработчика КриптоПро – для доступа требуется зарегистрированный пользователь по правилам сайта <https://cryptopro.ru/user>);gis-cryptoplatform17 – библиотека «КриптоПлатформа» версия 1.7.3-4. Данный пакет распространяется в составе дистрибутива СУБД «Jatoba» и устанавливается автоматически по зависимостям при установке пакета jatoba<ver>-plspgsql.Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-plspgsql

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-plspgsql

- 

> ОС ALTLinux:apt-get install jatoba<ver>-plspgsql

- 

> ОС openSUSE:zypper install jatoba<ver>-plspgsql

##### «PostGIS» – организация работы с геоданными

Список пакетов:

- 

| jatoba<ver>-postgis – расширение к СУБД, а также утилита получения и преобразования данных, определяемой формат между СУБД и внешними приложениями картографии.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: GDAL, PROJ, GEOS – специализированные библиотеки обработки данных, применяемые в области геоинформатики и картографии. Указанные пакеты поставляются в составе некоторых дистрибутивов Linux и будут установлены автоматически по зависимостям |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-postgis

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-postgis

- 

> ОС ALTLinux:apt-get install jatoba<ver>-postgis

- 

> ОС openSUSE:zypper install jatoba<ver>-postgis

##### «SecurityProfile» – парольные политики

Список пакетов:

- 

| jatoba<ver>-securityprofile – расширение к СУБД, позволяющее формировать парольные политики.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакета:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-securityprofile

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-securityprofile

- 

> ОС ALTLinux:apt-get install jatoba<ver>-securityprofile

- 

> ОС openSUSE:zypper install jatoba<ver>-securityprofile

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image28.png" style="width:7.08611in;height:3.088in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 08-12-09.png" />

Рисунок 3.26 – Установка расширения на примере ОС GNU/Linux Debian

##### «pg_Task» – планировщик асинхронных задач

Список пакетов:

- 

| jatoba<ver>-pg_task – расширение к СУБД, позволяющее задавать задачи на языке SQL для их выполнения в заданное время в заданной базе данных от заданного пользователя.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка данного расширения приведена в документе 643.72410666.00067-07 98 01-05 «Руководство по настройке. Часть 5. Планирование заданий СУБД. Компонент «pg_Task».

##### «ja_Plan_Manager» – компонент создания планов запросов в БД

Список пакетов:

- 

| jatoba<ver>-ja-plan-manager – расширение к СУБД, предназначенное для создания, оптимизации, экспорта/импорта и подмены планов запросов в БД.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка данного расширения приведена в документе 643.72410666.00067-07 98 01-21 «Руководство по настройке. Часть 21. Управление планами запросов. Компонент «ja_Plan_Manager».

##### «pg_hint_plan» – компонент корректировки запросов

Список пакетов:

- 

| jatoba<ver>-pg-hint-plan – расширение к СУБД, предназначенное для корректировки планов выполнения, применяя так называемые «указания», записываемые в виде простых описаний в SQL-комментариях особого вида.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-pg-hint-plan

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-pg-hint-plan

- 

> ОС ALTLinux:apt-get install jatoba<ver>-pg-hint-plan

- 

> ОС openSUSE:zypper install jatoba<ver>-pg-hint-plan

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image29.png" style="width:6.98984in;height:3.904in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-15 03-41-16.png" />

Рисунок 3.27 – Установка пакета jatoba<ver>-pg-hint-plan в OC Ubuntu

##### «pg_store_plans» – компонент контроля выполненных планов запросов

Список пакетов:

- 

| jatoba<ver>-pg-store-plans – расширение к СУБД, предназначенное для контроля выполненных планов запросов.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-pg-store-plans

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-pg-store-plans

- 

> ОС ALTLinux:apt-get install jatoba<ver>-pg-store-plans

- 

> ОС openSUSE:zypper install jatoba<ver>-pg-store-plans

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image30.png" style="width:7.06351in;height:3.976in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-12-15 03-33-41.png" />

Рисунок 3.28 – Установка пакета jatoba<ver>-pg-store-plans в OC Ubuntu

##### «pg_ulid» – компонент поддержки лексографического идентификатора

Список пакетов:

- 

| jatoba<ver>-pg-ulid – расширение к СУБД, предназначенное для поддержки поддержка типа данных ULID.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-pg-ulid

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-pg_ulid

- 

> ОС ALTLinux:apt-get install jatoba<ver>-pg_ulid

- 

> ОС openSUSE:zypper install jatoba<ver>-pg_ulid

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image31.png" style="width:7.01652in;height:3.07826in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-20 03-29-23.png" />

Рисунок 3.29 – Установка пакета jatoba<ver>-pg-ulid в OC Ubuntu

##### «ja_seceventlog» – компонент записи событий информационной безопасности

Список пакетов:

- 

| jatoba<ver>-ja_seceventlog – расширение к СУБД, предназначенное для записи событий информационной безопасности СУБД.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-ja-seceventlog

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-ja_seceventlog

- 

> ОС ALTLinux:apt-get install jatoba<ver>-ja_seceventlog

- 

> ОС openSUSE:zypper install jatoba<ver>-ja_seceventlog

##### «rum» – компонент поддержки индекса RUM

Список пакетов:

- 

| jatoba<ver>-rum – расширение к СУБД, предназначенное для доступа к индексу RUM СУБД.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-rum

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-rum

- 

> ОС ALTLinux:apt-get install jatoba<ver>-rum

- 

> ОС openSUSE:zypper install jatoba<ver>-rum

##### «ja_Similar» – компонент полнотекстового поиска

Список пакетов:

- 

| jatoba<ver>-ja-similar – расширение к СУБД, предназначенное для полнотекстового поиска и определения похожих текстов.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-ja-similar

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-ja-similar

- 

> ОС ALTLinux:apt-get install jatoba<ver>-ja-similar

- 

> ОС openSUSE:zypper install jatoba<ver>-ja-similar

##### «ja_Inventory» – компонент инвентаризации СУБД

Список пакетов:

- 

| jatoba<ver>-ja-inventory – утилита предназначенная для инвентаризации СУБД.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-ja-inventory

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-ja-inventory

- 

> ОС ALTLinux:apt-get install jatoba<ver>-ja-inventory

- 

> ОС openSUSE:zypper install jatoba<ver>-ja-inventory

##### «pg_repack» – компонент реорганизации таблиц

Установка компонента описана в документе 643.72410666.00067-07 98 01-24 «Руководство по настройке. Часть 24. Реорганизация таблиц. Компонент «pg_repack».

##### tsvector2 – компонент расширенного типа данных tsvector

Список пакетов:

- 

| jatoba<ver>-tsvector2 – утилита предназначенная для инвентаризации СУБД.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Внешние зависимости: не требует |
|----|----|

Установка пакетов:

- 

> ОС GNU/Linux Debian и производные от нее:apt-get install jatoba<ver>-tsvector2

- 

> ОС GNU/Linux Red Hat и производные от нее:yum install jatoba<ver>-tsvector2

- 

> ОС ALTLinux:apt-get install jatoba<ver>-tsvector2

- 

> ОС openSUSE:zypper install jatoba<ver>-tsvector2

##### Компоненты поддержки мониторинга СУБД

Установка компонентов:

- 
- 
- 
- 
- 

jatoba\*_node_exporter;jatoba\*_postgres_exporter;jatoba\*_sql_exporter;системы «Prometheus»;утилита «alertmanager»;описана в документе 643.72410666.00067-07 98 01-28 «Руководство по настройке. Часть 28. Поддержка мониторинга СУБД.

### Порядок установки СУБД «Jatoba» на ОС GNU/Linux, основанной на Debian из локального репозитория

Для установки СУБД «Jatoba» необходимо выполнить следующую последовательность действий:

1)  

> Создать каталог /localrepo, выполнив команду:mkdir /localrepo

2)  

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">В каталог /localrepo скопировать необходимые файлы для установки<br />
СУБД «Jatoba».<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>Требуется скопировать полную структуру файлов и каталогов из дистрибутива. Также допускается установка с CD/DVD носителя напрямую. В этом случае, пользователю не требуется копировать файлы, а вместо /localrepo во всех шагах далее указывать соответствующий путь до носителя и директорию репозитория СУБД на носителе для соответствующей ОС.</p>
<p>Структура каталога дистрибутива для всех поддерживаемых ОС GNU/Linux, основанных на Debian, описана в таблице Таблица П 1 Приложения Приложение 1.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

3)  

> Проверить результат копирования всех файлов, перейдя в каталог /localrepo и выполнив команду (см. рис. Рисунок 3.30):ls -l

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image32.png" style="width:7.08595in;height:1.62637in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 07-38-27.png" />

Рисунок 3.30 – Просмотр каталога /localrepo

4)  

> Установить открытый ключ репозитория при помощи команды (см. рис. Рисунок 3.31):apt-key add /localrepo/DEB-GPG-KEY-Jatoba

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image33.png" style="width:7.08595in;height:1.07692in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 07-40-26.png" />

<table>
<caption><p>Рисунок 3.31 – Установка открытого ключа</p></caption>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>Для более новых версий ОС GNU/Linux, основанных на Debian (Astra Linux 1.8, Debian 12, Ubuntu 24.04 и других), рекомендуется добавлять ключ репозитория следующим образом.</p>
<p>Скопировать ключ репозитория:</p>
<blockquote>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</blockquote>
<p>Добавить описание нового репозитория в список:</p>
<blockquote>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt; /etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</blockquote>
<p>Здесь jatoba-&lt;ver&gt; - версия устанавливаемой СУБД «Jatoba».</p>
<p>Затем выполнить 6) из данного подраздела.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Рисунок 3.31 – Установка открытого ключа

5)  

> Создать файл с описанием локального репозитория в системе, имя файла репозитория и его содержимое для соответствующей ОС указано в таблице Таблица П 2 Приложения Приложение 1:nano /etc/apt/sources.list.d/jatoba-4.list

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image34.png" style="width:7.08651in;height:1.16279in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-24 03-32-02.png" />

Рисунок 3.32 – Описание локального репозитория

6)  

> Обновить описания пакетов при помощи команды (см. рис. Рисунок 3.33):apt-get update

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image35.png" style="width:7.08595in;height:2.45055in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 07-44-26.png" />

Рисунок 3.33 – Обновление описания пакетов

7)  

> Установить основные пакеты СУБД «Jatoba» при помощи команды (см. рис. Рисунок 3.34):apt-get install jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

<table>
<caption><p><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image36.png" style="width:7.08595in;height:3.53846in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 07-51-52.png" /></p></caption>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>Пакеты jatoba&lt;ver&gt;-client, jatoba&lt;ver&gt;-contrib, jatoba&lt;ver&gt;-libs, jatoba&lt;ver&gt;-server являются обязательными для установки СУБД.</p>
<p>При необходимости установки дополнительных пакетов см. раздел 3.3.3</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image36.png" style="width:7.08595in;height:3.53846in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 07-51-52.png" />

Рисунок 3.34 – Установка основных пакетов

8)  

> Перейти в директорию расположения исполняемых файлов СУБД «Jatoba», выполнив команду (см. рис. Рисунок 3.35):cd /usr/jatoba-<ver>/bin/

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image37.png" style="width:7.08595in;height:0.94505in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 07-53-12.png" />

Рисунок 3.35 – Переход в директорию установки

9)  

> Инициализировать каталог данных СУБД «Jatoba» при помощи команды  
> (см. рис. Рисунок 3.36):./jatoba-setup initdb jatoba-<ver>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image38.png" style="width:7.08595in;height:1.28571in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4\Наработки\Руководство по установке\Screenshot from 2022-10-04 07-54-01.png" />

<table>
<caption><p>Рисунок 3.36 – Инициализация каталога СУБД</p></caption>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>При инициализации каталога данных можно явно указать язык и кодировку, для этого следует добавить переменную окружения:</p>
<blockquote>
<p>PGSETUP_INITDB_OPTIONS="--locale=ru_RU.utf8<br />
--encoding=UTF-8" ./jatoba-setup initdb jatoba-4</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /></td>
<td>При ошибках «Data directory is not empty!» или «Initializing database… mkdir: невозможно создать каталог «var/lib/jatoba/4/data/log»: Файл существует failed, see /var/lib/jatoba/4/initdb.log» нужно ввести команду принудительного удаления каталога и его содержимого.</td>
</tr>
<tr>
<td style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></td>
<td><p>Перед удалением необходимо убедиться, что все нужные данные сохранены.</p>
<blockquote>
<p>rm -rf /var/lib/jatoba/&lt;ver&gt;/data/*</p>
</blockquote></td>
</tr>
</tbody>
</table>

Рисунок 3.36 – Инициализация каталога СУБД

10) 
11) 

Администратору СУБД рекомендуется изменить другие параметры в конфигурационном файле postgresql.conf, в зависимости от условий эксплуатации СУБД (дополнительная информация описана в документе «Защищенная система управления базами данных «Jatoba». Руководство администратора»).При необходимости добавить службу Jatoba в автозапуск в соответствии с пунктом 3.6.Установка СУБД «Jatoba» завершена.

### Порядок установки СУБД «Jatoba» на ОС семейства GNU/Linux, основанной на RPM из локального репозитория

Для установки СУБД «Jatoba» необходимо выполнить следующую последовательность действий:

1)  

> Создать каталог /localrepo, выполнив команду:mkdir /localrepo

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image39.png" style="width:7.08681in;height:0.97917in" />

Рисунок 3.37 – Создание каталога localrepo

2)  

:::info Дополнительная информация
Требуется скопировать полную структуру файлов и каталогов из дистрибутива. Также допускается установка с CD/DVD носителя напрямую. В этому случае, пользователю не требуется копировать файлы, а вместо /localrepo во всех шагах далее указывать соответствующий путь до носителя и директорию репозитория СУБД на носителе для соответствующей ОС.

Структура каталога дистрибутива для всех поддерживаемых ОС GNU/Linux, основанных на RPM, описана в таблице Таблица П 1 Приложения Приложение 1.
:::

3)  

> Проверить результат копирования всех файлов, перейдя в каталог /localrepo и выполнив команду (см. рис. Рисунок 3.38):ls -l

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image40.png" style="width:7.08681in;height:1.89583in" />

Рисунок 3.38 – Просмотр каталога /localrepo

4)  

:::warning Важная информация
<strong>Только для ОС Альт</strong>

В указанной ОС данный шаг пропускается. Проверка целостности и достоверности устанавливаемых пакетов осуществляется с использованием контрольных сумм, указанных в формуляре.
:::

> rpm --import /localrepo/RPM-GPG-KEY-Jatoba

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image41.png" style="width:7.08681in;height:1in" />

Рисунок 3.39 – Установка открытого ключа

5)  

> Создать файл с описанием локального репозитория в системе, имя файла репозитория и его содержимое для соответствующей ОС указано в таблице Таблица П 2  
> Приложения Приложение 1:nano /etc/yum.repos.d/jatoba-<ver>.repo

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image42.png" style="width:7.08681in;height:0.79167in" />

Рисунок 3.40 – Создание файла с описанием репозитория

Например, для РЕД ОС 7.2 Муром необходимо добавить следующее описание репозитория в файл /etc/yum.repos.d/jatoba-4.repo:

> \[jatoba-4\]
>
> name=Jatoba 4 Official Repository
>
> baseurl=file:///localrepo
>
> enabled=1
>
> gpgcheck=1
>
> gpgkey=file:///localerepo/RPM-GPG-KEY-Jatoba

:::warning Важная информация
<strong>Только для ОС Alt Linux (Альт 8 СП и т.п.)</strong>

Описание репозитория необходимо добавлять в файл /etc/apt/sources.list.d/jatoba-4.list, аналогично тому как это делается в системах, основанных на Debian:
:::

6)  

> Обновить описания пакетов при помощи команды (см. рис. Рисунок 3.41):yum makecache

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image43.png" style="width:7.08681in;height:1.72917in" />

Рисунок 3.41 – Обновление описания пакетов

:::warning Важная информация
<strong>Только для ОС Alt Linux (Альт 8 СП и т.п.)</strong>

Обновить описание пакетов при помощи команды (см. рис. Рисунок 3.42):
:::

7)  

> Установить основные пакеты СУБД «Jatoba» при помощи команды  
> (см. рис. Рисунок 3.43):yum install jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

:::info Дополнительная информация
Пакеты jatoba&lt;ver&gt;-client, jatoba&lt;ver&gt;-contrib, jatoba&lt;ver&gt;-libs и jatoba&lt;ver&gt;-server являются обязательными для установки СУБД.

При необходимости установки дополнительных пакетов см. пункт 4.5.2
:::

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image45.png" style="width:6.67964in;height:4.69634in" />

<table>
<caption><p>Рисунок 3.43 – Установка основных пакетов</p></caption>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p><strong>Только для ОС Alt Linux (Альт 8 СП и т.п.)</strong></p>
<p>Установить основные пакеты СУБД «Jatoba» при помощи команды:</p>
<blockquote>
<p>apt-get install jatoba&lt;ver&gt;-client jatoba&lt;ver&gt;-contrib jatoba&lt;ver&gt;-libs jatoba&lt;ver&gt;-server</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Рисунок 3.43 – Установка основных пакетов

8)  

> Перейти в директорию расположения исполняемых файлов СУБД «Jatoba», выполнив команду (см. рис. Рисунок 3.44):cd /usr/jatoba-<ver>/bin/

<img src="@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image46.png" style="width:6.97545in;height:1.01505in" />

Рисунок 3.44 – Переход в директорию установки

9)  

> Инициализировать каталог данных СУБД «Jatoba» при помощи команды  
> (см. рис. Рисунок 3.45):./jatoba-setup initdb jatoba-<ver>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image47.png" style="width:7.08681in;height:1.5625in" />

<table>
<caption><p>Рисунок 3.45 – Инициализация каталога СУБД</p></caption>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th>При ошибках «Data directory is not empty!» или «Initalizing database… mkdir: невозможно создать каталог «var/lib/jatoba/4/data//log»: Файл существует failed, see /var/lib/jatoba/4/initdb.log» нужно ввести команду принудительного удаления каталога и его содержимого.</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></td>
<td><p>Перед удалением необходимо убедиться, что все нужные данные сохранены.</p>
<blockquote>
<p>rm –rf /var/lib/jatoba/&lt;ver&gt;/data/*</p>
</blockquote></td>
</tr>
</tbody>
</table>

Рисунок 3.45 – Инициализация каталога СУБД

10) 
11) 

Администратору СУБД рекомендуется изменить другие параметры в конфигурационном файле postgresql.conf, в зависимости от условий эксплуатации СУБД (дополнительная информация описана в документе 643.72410666.00067-07 95 01 «Защищенная система управления базами данных «Jatoba». Руководство администратора»).При необходимости добавить службу Jatoba в автозапуск в соответствии с пунктом 3.6.Установка СУБД «Jatoba» завершена.

### Добавление в автозапуск службы Jatoba в ОС GNU/Linux

Для загрузки СУБД «Jatoba» вместе с ОС необходимо выполнить следующие действия:

1)  
2)  

> Запустить сервис.Добавить его в список автозапуска при старте ОС, выполнив команды  
> (см. рис. Рисунок 3.46):systemctl start jatoba-<ver>
>
> systemctl enable jatoba-<ver>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image48.png" style="width:7.08681in;height:1.51887in" />

Рисунок 3.46 – Запуск сервиса и добавление в автозагрузку

### Порядок установки СУБД «Jatoba» из DEB/RPM-файлов

Установка из файлов является опциональным способом и требует больше ручной работы от пользователя по установке зависимых пакетов. Пользователям рекомендуется производить установку методами, описанными в подразделах 3.1 и/или 3.5 в зависимости от ОС.

#### Установка СУБД «Jatoba» из DEB-файлов

Установка из файлов предполагает, что у пользователя имеется основной набор DEB-файлов, которые он может скачать с официального компакт-диска:

- 
- 
- 
- 

:::info Дополнительная информация
Пакеты jatoba&lt;ver&gt;-client, jatoba&lt;ver&gt;-contrib, jatoba&lt;ver&gt;-libs, jatoba&lt;ver&gt;-server являются обязательными для установки СУБД.

При необходимости установки дополнительных пакетов см. пункт 3.3.3
:::

Для установки СУБД «Jatoba» из DEB-файлов необходимо выполнить следующую последовательность действий:

1)  

> Перейти в директорию дистрибутива, где расположены установочные DEB-файлы:cd \<путь до директории\>

2)  

> Выполнить команду установки основных пакетов (см. рис. Рисунок 3.47):dpkg -i jatoba<ver>-client_X.X.X-X_amd64.deb jatoba<ver>-contrib_X.X.X-X_amd64.deb jatoba<ver>-libs_X.X.X-X_amd64.deb jatoba<ver>-server_X.X.X-X[^1]_amd64.deb

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image49.png" style="width:7.0859in;height:1.14179in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\PIC\Screenshot from 2022-11-28 01-35-40.png" />

<table>
<caption><p>Рисунок 3.47 – Команда установки основных пакетов</p></caption>
<colgroup>
<col style="width: 7%" />
<col style="width: 92%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /></th>
<th><p>Для установки базовых пакетов требуется установка множества зависимостей. Неразрешенные зависимости приводят к появлению ошибок на стадии установки (см. рис. Рисунок 3.48):</p>
<p><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image50.png" style="width:6.36567in;height:4.22914in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\PIC\Screenshot from 2022-11-28 01-56-33.png" /></p>
<p>Рисунок 3.48 – Ошибки неразрешенных зависимостей</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Рисунок 3.47 – Команда установки основных пакетов

3)  

> Установить все оставшиеся зависимости в автоматическом режиме  
> (см. рис. Рисунок 3.49):apt-get install –f

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image51.png" style="width:6.35625in;height:3.44753in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\PIC\Screenshot from 2022-11-28 02-08-38.png" />

Рисунок 3.49 – Установка оставшихся зависимостей

Дальнейшая установка СУБД «Jatoba» аналогична порядку, описанному в подразделе 3.1, с шага перехода в директорию расположения исполняемых файлов.

#### Установка СУБД «Jatoba» из RPM-файлов

Установка из файлов предполагает, что у пользователя имеется основной набор RPM-файлов, которые он может скачать с официального компакт-диска:

- 
- 
- 
- 

:::info Дополнительная информация
Пакеты jatoba4-client<em>,</em> jatoba4-contrib<em>,</em> jatoba4-libs<em>,</em> jatoba4-server являются обязательными для установки СУБД.

При необходимости установки дополнительных пакетов см. пункт 3.3.3.
:::

Для установки СУБД «Jatoba» из RPM-файлов необходимо выполнить следующую последовательность действий:

1)  

> Перейти в директорию дистрибутива, где расположены установочные RPM-файлы:cd \<путь до директории\>

2)  

> Выполнить команду установки основных пакетов (см. рис. Рисунок 3.50):rpm -i jatoba<ver>-client_X.X.X-X_amd64.rpm jatoba<ver>-contrib_X.X.X-X_amd64.rpm jatoba<ver>-libs_X.X.X-X_amd64.rpm jatoba<ver>-server_X.X.X-X[^2]_amd64.rpm

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image52.png" style="width:7.02861in;height:1.17262in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\PIC\Снимок экрана в 2022-11-28 10-25-40.png" />

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Для установки базовых пакетов требуется установка множества зависимостей. Неразрешенные зависимости приводят к появлению ошибок на стадии установки. |
|----|----|

Рисунок 3.50 – Команда установки основных пакетов

3)  

> Выполнить установку зависимых пакетов с помощью одной из следующих команд:yum install \<имя пакета\>
>
> rpm -i \<имя пакета\>

:::warning Важная информация
<strong>Только для ОС Альт</strong>

Установка зависимых пакетов происходит при помощи следующей команды (см. рис. Рисунок 3.51):
:::

Дальнейшая установка СУБД «Jatoba» аналогична, описанному в подразделе 3.1, с шага 8) переход в директорию расположения исполняемых файлов.

## Установка обновлений СУБД «Jatoba»

При выявлении информации об уязвимости изделия, среды его функционирования и отсутствии информации в БДУ ФСТЭК России (<https://bdu.fstec.ru/>) ООО «Газинформсервис» информирует потребителей о недостатках средства, а также о компенсирующих мерах по защите информации или ограничениях по применению путем отправки сообщений на электронные адреса потребителей.

Дополнительно разработчик размещает на официальном сайте компании http://www.gaz-is.ru/:

- 
- 
- 

информационное сообщение, содержащее описание уязвимости и информирует потребителей о необходимости обновления средства защиты информации;файлы с обновленной версией ПО изделия;новые контрольные суммы ПО изделия (включая контрольные суммы файла с обновлением и контрольные суммы ПО после применения обновления).Перед применением обновления требуется выполнить расчет контрольных суммы полученного файла с обновлением и сверить их с контрольными суммами, указанными на официальном сайте разработчика.

В случае совпадения контрольных сумм осуществляется установка обновления. При несовпадении контрольных сумм обновление не осуществляется и незамедлительно сообщается об этом разработчику (производителю) изделия.

После установки обновления делается соответствующая отметка в разделе 12 документа 643.72410666.00067-07 30 01 «Защищенная система управления базами данных СУБД «Jatoba». Формуляр».

Установка обновлений проводится в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по обновлению».

Перед установкой обновлений рекомендуется сделать резервную копию БД и конфигурационных файлов.

## Установка компонента «Jatoba data safe»

Установка компонента происходит в два этапа:

1)  
2)  

:::info Дополнительная информация
СУБД «Jatoba» должна быть установлена в первую очередь.

Для служебной БД JDS обязательно должен быть установлен параметр:
:::

> Параметр устанавливается автоматически при установке.

Служебная БД будет хранить список целей (target), учетные записи пользователей, технические учетные записи и обеспечивать меры безопасности.

Настройка служебной СУБД описана в документе 643.72410666.00067-07 97 01 «Защищенная система управления базами данных «Jatoba». Руководство администратора».

В качестве метода аутентификации должен использоваться метод «password».

### Установка компонента JDS под ОС GNU/Linux с помощью инсталлятора

Перед началом установки необходимо убедиться, что служба (демон) «jatoba-(ver)» запущена и установлен метод аутентификации по паролю в конфигурационном файле pg_hba.conf.

Скопировать папку с дистрибутивом на сервер установки в папку локального пользователя.

Для примера создадим каталог /usr/share/jds командой:

> sudo mkdir /usr/share/jds

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image54.png" style="width:7.104in;height:0.92114in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\pic\Screenshot from 2022-12-12 03-23-43.png" />

Рисунок 5.1 – Команда создания каталога

С дистрибутивного диска скопировать файлы и каталог пакета установки в созданный каталог:

- 
- 
- 

каталог – packages, содержащий пакеты установки;каталог – utils, содержащий конфигурационные файлы;скрипт – jds.sh.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image55.png" style="width:3.47986in;height:1.15254in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\1ё23,\Screenshot from 2022-12-13 23-12-21.png" />

Рисунок 5.2 – Структура каталогов

Запустить инсталлятор компонента командой:

```
# cd /usr/share/jds/
```
>
```
# sudo bash jds.sh install
```

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image56.png" style="width:7.05027in;height:1.112in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-14 02-32-03.png" />

Рисунок 5.3 – Команда запуск инсталлятора JDS

Команда инсталляции является универсальной для всех ОС GNU/Linux.

Инсталлятор проверит установлен ли пакет jatoba\<version\>-client. Если пакет не установлен, то инсталлятор выведет ошибку и потребуется доустановить его из дистрибутива СУБД.

Инсталлятор выведет запрос на согласие установки компонента.

> Do you wish to install jds?

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image57.png" style="width:7.112in;height:1.83079in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\pic\Screenshot from 2022-12-12 03-27-11.png" />

Рисунок 5.4 – Вывод запроса об установке компонента

Выбрав положительный ответ, инсталлятор установит дополнительные пакеты и файлы необходимые для запуска службы «jds.service».

Следующим этапом инсталлятор выведет сообщения о выборе конфигурации по умолчанию:

> Do you want to change default configuration settings?

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image58.png" style="width:7.08644in;height:1.55528in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\1ё23,\Screenshot from 2022-12-13 23-14-48.png" />

Рисунок 5.5 – Вывод сообщения о выборе конфигурации

Инсталлятор предложит параметры СУБД по умолчанию, если значение не отличается от значения по умолчанию, то вводить параметры не требуется, достаточно нажать клавишу «Enter» и значение подставится автоматически:

- 

> Enter JATOBA_SERVER (default localhost)? – Введите адрес установки СУБД «Jatoba»:

- 

Enter JATOBA_PORT (default 5432)?Введите порт подключения к СУБД «Jatoba»:

- 

> Enter JATOBA_USER_ID (default jds)?Введите имя пользователя компонента JDS для СУБД, по умолчанию пользователь «jds»:

- 

> Enter JATOBA_USER_PSWD (default sql)?Введите пароль для пользователя «jds»:

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Ввод параметра отражается отдельно и не присутствует в общем списке |
|----|----|

- 

> Enter JATOBA_DATABASE (default jdsdb)?Введите имя БД, которую будет использовать компонент JDS, по умолчанию имя БД «jdsdb»:

- 

> Enter JDS_PUBLISH_PORT (default 5000)?Введите публичный порт СУБД, по умолчанию будет использоваться порт 5000:

- 

> Enter SUPERUSER name (default postgres)?Введите пароль суперпользователя, по умолчанию используется пользователь «postgres».

Инсталлятор предложит установить предложенный пароль по умолчанию:

Enter JATOBA_USER_PSWD (default sql)?

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image59.png" style="width:7.03106in;height:3.625in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-22 12-06-56.png" />

Рисунок 5.6 – Предложение изменения пароля по умолчанию

Далее инсталлятор запросит ввод пароля привилегированного пользователя СУБД «postgres» для:

- 

создания роли «jds» в СУБД:Creating role: jds

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image60.png" style="width:7.15993in;height:1.41667in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-22 13-41-07.png" />

Рисунок 5.7 – Запрос пароля пользователя «postgres» для создания роли «jds»

- 

создания служебной БД «jdsdb», владельцем которой будет созданный пользователь «jds»:Creating db: jdsdb OWNER jds

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image61.png" style="width:7.08333in;height:5.01043in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-22 13-08-44.png" />

Рисунок 5.8 - Создание служебной БД «jdsdb»

- 

установки расширений СУБД и конфигурации БД «jdsdb»:Creating extension: dblink and change configuration standard_conforming_strings in jdsdb

В служебной БД будут созданы служебные функции для подраздела «Проблемы и решения» (Problems & Solutions).

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image62.png" style="width:6.98476in;height:4.9375in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-22 13-18-51.png" />

Рисунок 5.9 – Установка расширений и стандартной конфигурации БД

Будут созданы в каталоге /opt подкаталоги:

- 
- 
- 

jds-script – подкаталог для запуска службы «jds.service»;jds – подкаталог содержания веб-сайта компонента JDS и конфигурационными файлами;jds-doctor – подкаталог для запуска службы «jds-doctor.service».<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image63.png" style="width:3.09375in;height:1.19402in" />

Рисунок 5.10 – Структура каталога opt

Инсталлятор автоматически создаст и запустит службы «jds.service» и «jds-doctor.service».

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image64.png" style="width:6.65625in;height:5.02014in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-22 13-37-20.png" />

Рисунок 5.11 – Установка служб компонента JDS

> На данном этапе установка компонента JDS закончена.

#### Запуск компонента JDS. Установка/смена пароля администратора

Перед запуском компонента потребуется установить пароль для администратора компонента.

Установка пароля выполняется от имени и с правами привилегированного пользователя ОС «root» в терминале командой:

> ./JDS.WebApi --setadmin username password
>
> Командная строка для установки и сброса пароля имеет параметры:

- 
- 
- 

> --setadmin - параметр, указывающий на необходимость установки или смены пароля;username - имя пользователя;password – пароль.Например
>
> cd /opt/jds
>
> ./JDS.WebApi --setadmin admin Gazprom09!
>
> systemctl restart jds

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image65.png" style="width:7.12737in;height:1.45283in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\2\Screenshot from 2025-05-19 15-51-38.png" />

Рисунок 5.12 Установка/сброс пароля администратора

Устанавливаемый пароль должен отвечать параметрам сложности.

**Запуск сертифицированной версии компонента JDS 2.7.5**

В сертифицированной версии компонента JDS 2.7.5 запуск /opt/jds/JDS.WebApi стал возможен только при явном указании пути к .NET через переменную окружения DOTNET_ROOT. Это делает вызов JDS.WebApi --setadmin

Для запуска используется скрипт «reset_admin_paswd.sh», расположеный по пути:

> /opt/jds-scripts

Используются параметры запуска:

```
# reset_admin_paswd.sh без параметров или с параметром --help отображает справку
```
>
```
# reset_admin_paswd.sh \<user\> \<password\> устанавливает пароль "password" для администратора "user"
```

**Альтернативный вариант запуска сертифицированной версии компонента JDS 2.7.5**

Альтернативный запуск компонента выполняется в терминале ОС командой:

> DOTNET_ROOT=/opt/jds ./JDS.WebApi --setadmin \<user\> \<password\>

Проверить работоспособность установки компонента можно веб-браузером ОС, набрав в адресной строке адрес: <http://localhost:5000/>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image66.png" style="width:7.08681in;height:4.48462in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\pic\Screenshot from 2022-12-12 06-22-20.png" />

Рисунок 5.13 – Стартовая страница JDS в GNU/Linux

### Способы публикации WEB-приложения JDS в инфраструктуре

Публикация - это порядок предоставления доступа к приложению JDS в инфраструктуре.

Установка приложения JDS - доставка бинарников и конфигурирование доступа к служебной БД - сама по себе не является публикацией, так как по умолчанию приложение принимает входящие подключения по HTTP-протоколу на порту 5000 только на адресе 127.0.0.1 и не доступно извне.

Общие требования к публикации:

- 
- 
- 

приложение должно быть доступно пользователю по протоколу HTTPS;сертификат, которым защищается приложение, должен быть валидным для локальной инфраструктуры;если развёртывание JDS производится в защищённой сертифицированной инфраструктуре, использование не сертифицированных сервисов не допускается; предполагается, что JDS, сам по себе, сертифицирован.**Типовые способы публикации WEB-приложения**

JDS как WEB-приложение, написанное на .NET, взаимодействует с внешним миром через собственный HTTP(s) сервер Kestrel, входящий в состав .NET SDK.

Публикация .NET WEB-приложений, обычно, производится с помощью дополнительного сервиса Reverse proxy, часто реализуемого с применением NGINX.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image67.png" style="width:7.08681in;height:1.02834in" alt="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel/_static/kestrel-to-internet.png?view=aspnetcore-8.0" />

Рисунок 5.14 – Публикация с помощью дополнительного сервиса Reverse proxy

Кроме того, .NET WEB-приложение может использовать для публикации Kestrel самостоятельно.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image68.png" style="width:5.09583in;height:1.18403in" alt="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel/_static/kestrel-to-internet2.png?view=aspnetcore-8.0" />

Рисунок 5.15 - Публикации с помощью Kestrel

**Примеры настройки публикации WEB-приложения JDS**

**Вариант 1.**

Публикация с использованием встроенного сервера Kestrel по протоколу HTTPS

В файл настройки приложения jds/appsettings.json требуется указать значения параметров Kestrel \\ Endpoints \\ Default и Kestrel \\ Certificates \\ Default:

> "Kestrel": {
>
>     "Endpoints": {
>
>         "Default": {
>
>             "Url": "https://\*:443"
>
>         }
>
>     },
>
>     "Certificates": {
>
>         "Default": {
>
>             "Path": "/path/to/certificate.pfx",
>
>             "Password": ""
>
>         }
>
>     }
>
> }

В примере выше JDS публикуется на всех IP-адресах хоста, на порту 443, с использованием протокола HTTPS.

Сертификат, используемый Kestrel для защиты канала, должен быть валидным (выпущен центром сертификации, корневые сертификаты которого настроены на всех хостах инфраструктуры как доверенные).

Сертификат должен быть в формате PFX, собирается следующим образом:

> openssl pkcs12 -export -out certificate.pfx -inkey private.key -in certificate.crt

В этом примере PFX-файл собирается из файла сертификата и закрытого ключа; предполагается что пароль к закрытому ключу не установлен. В ином случае (пароль установлен) требуется указать пароль при сборке PFX-файла, также, указать пароль в поле «Password» файла настройки. Файл сертификата должен быть доступен на чтение для пользователя, под которым запускается JDS.

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /> | Правила безопасности ОС Linux могут запрещать привязку непривилегированных (пользовательских) приложений к портам ниже 1024. |
|----|----|

Нужно присвоить соответствующие права исполняемому файлу JDS:

> sudo setcap 'cap_net_bind_service=+ep' /opt/jds/JDS.WebApi

**Вариант 2**

Публикация с использованием внешнего WEB-сервера NGINX (не входит в комплект поставки JDS)

В данном примере WEB-приложение привязывается к порту 5000 на localhost, а NGINX настраивается на проксирование внешних HTTPS-запросов на localhost:5000.

В файл настройки приложения jds/appsettings.json требуется указать значение только параметра Kestrel \\ Endpoints \\ Default:

>     "Kestrel": {
>
>         "Endpoints": {
>
>             "Default": {
>
>                 "Url": "http://localhost:5000"
>
>             },
>
>         }
>
>     },

Параметр Kestrel \\ Certificates \\ Default требуется удалить из файла конфигурации.

Файл настройки сайта для WEB-сервера NGINX должен выглядеть следующим образом:

> server {
>
>     listen 443 ssl default_server;
>
>     listen \[::\]:443 ssl default_server;
>
>     ssl_certificate        /var/www/_pki/certificate.crt;
>
>     ssl_certificate_key    /var/www/_pki/private.key;
>
>     ssl_protocols    TLSv1.2 TLSv1.3;
>
>     ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384';
>
>     root /var/www/html;
>
>     index index.html index.htm index.nginx-debian.html;
>
>     server_name jds.local.net;
>
>     location / {
>
>         proxy_set_header Host \$host;
>
>         proxy_set_header Upgrade \$http_upgrade;
>
>         proxy_set_header Connection 'upgrade';
>
>         proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
>
>         proxy_set_header X-Forwarder-Proto \$scheme;
>
>         proxy_pass http://localhost:5000;
>
>         proxy_http_version 1.1;
>
>     }
>
> }

В примере выше нужно изменить "по месту" значения следующих параметров, приведённых в таблице Таблица 5.1:

<table>
<caption><p>Таблица 5.1 – Применяемые параметры</p></caption>
<colgroup>
<col style="width: 19%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Значение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">ssl_certificate</td>
<td style="text-align: left;">Путь к файлу сертификата, сформированного для для сайта "jds.local.net"</td>
</tr>
<tr>
<td style="text-align: left;">ssl_certificate_key</td>
<td style="text-align: left;">Путь к файлу закрытого ключа сертификата, сформированного для для сайта "jds.local.net"</td>
</tr>
<tr>
<td style="text-align: left;">ssl_password_file</td>
<td style="text-align: left;">Текст пароля закрытого ключа сертификата, сформированного для для сайта "jds.local.net", если он установлен</td>
</tr>
<tr>
<td style="text-align: left;">server_name</td>
<td style="text-align: left;">Имя сайта, на котором работает JDS. В данном примере это "jds.local.net"</td>
</tr>
<tr>
<td style="text-align: left;">proxy_pass</td>
<td style="text-align: left;"><p>Адрес и порт, на который перенаправляются HTTPS-запросы для сайта "jds.local.net".</p>
<p>Это значение должно совпадать с значением настройки Kestrel \ Endpoints \ Default файла jds/appsettings.json.</p></td>
</tr>
</tbody>
</table>

Таблица 5.1 – Применяемые параметры

#### Установка веб-сервера nginx

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | Скрипт применяется в коммерческой версии СУБД «Jatoba» |
|----|----|

В случае, когда требуется установить веб-сервер в ОС GNU/Linux в каталоге, хранится скрипт установки веб-сервера nginx:

> /usr/share/jds/utils
>
> Устанавливается пакет из удаленного репозитория командой:
>
> cd ./utils/
>
> sudo bash nginx.sh install -y

Для ОС Astra Linux применяется команда:

> bash [nginx.sh](http://nginx.sh/) install --default

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image69.png" style="width:7.08597in;height:4.59028in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\pic\Screenshot from 2022-12-12 07-40-07.png" />

Рисунок 5.16 – Установка веб-сервера nginx

При первом запуске веб-страницы JDS по адресу <https://localhost/> веб-браузер может сообщить, что обнаружил потенциальную угрозу безопасности и прекратил работу с localhost.

Для устранения проблемы, необходимо нажать «Advanced».

В открывшимся окне появится дополнительное сообщение, что нет доверия к сертификату.

Подтвердить, что доверяете сертификату, нажав на «Accept the Risk and Continue».

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image70.png" style="width:7.08541in;height:2.93589in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\1ё23,\Screenshot from 2022-12-13 23-38-03.png" />

Рисунок 5.17 – Вывод сообщений веб-браузером

После чего веб-страница JDS станет доступной по адресу <https://localhost>, в котором используется SSL-соединение.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image71.png" style="width:7.08681in;height:4.48394in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\1ё23,\Screenshot from 2022-12-13 23-31-18.png" />

Рисунок 5.18 – Стартовая страница JDS

#### Удаление веб-сервера nginx

В случае, когда требуется удалить веб-сервер в ОС GNU/Linux, в каталоге хранится скрипт «nginx.sh»:

> /usr/share/jds/utils
>
> Удаление проводится в автоматическом режиме командой:
>
> cd ./utils/
>
> sudo bash nginx.sh uninstall -y

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image72.png" style="width:7.08681in;height:4.89069in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\1ё23,\Screenshot from 2022-12-13 23-43-00.png" />

Рисунок 5.19 – Удаление веб-сервера nginx

### Удаление компонента JDS

Скрипт удаления компонента JDS находится в каталоге локального пользователя, а в рассматриваемом примере в каталоге:

> /usr/share/jds

Скрипт выполняется от имени и с правами привилегированного пользователя с ключом «uninstall»:

> sudo bash jds.sh uninstall

После запуска скрипта будет выведен запрос о подтверждении удаления:

> Do you wish to uninstall jds

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image73.png" style="width:7.08597in;height:1.4375in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\pic\Screenshot from 2022-12-12 08-00-47.png" />

Рисунок 5.20 – Вывод запроса о продолжении удаления

При подтверждении будут выполнены следующие действия:

- 
- 
- 
- 

остановлена и удалена служба «jds.service»;удален каталог /opt;удалена роль СУБД «jds»;удалена служебная БД «jdsdb» при подтверждении удаления.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image74.png" style="width:7.08597in;height:3.18056in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\UI JDS\pic\Screenshot from 2022-12-12 08-42-28.png" />

Рисунок 5.21 – Удаление компонента JDS

### Обновление компонента JDS

Существует два способа обновления компонента:

- 
- 

#### в ручном режиме;с помощью инсталлятора.Обновление компонента JDS в ручном режиме

При обновлении существующего развёртывания JDS требуется обеспечить не только доставку на хост новых исполняемых файлов, но в обязательном порядке сохранить все данные компонента, ранее созданные/сохранённые пользователем (далее - данные приложения).

Как минимум требуется сохранить:

- 
- 
- 
- 

файл конфигурации (на момент написания требования - appsettings.json);служебная база данных JDS;SSH-ключ учётной записи, под которой запускается JDS;файл ~/.ssh/known_hosts учётной записи, под которой запускается JDS.Обновление компонента в ручном режиме выполняется в следующем порядке:

1)  
2)  

- 
- 

3)  

- 
- 
- 

4)  
5)  

- 
- 

6)  

- 
- 

7)  

Остановить службы jds и jds-doctorСделать резервную копию файлов:/opt/jds/appsettings.json;/opt/jds-doctor/appsetting.json.Удалить папки:/opt/jds;/opt/jds-doctor;/opt/jds-scripts;Распаковать архив jds-\*.tar.gz в папку /optПереименовать папки (если требуется)/opt/jds.doctor -\> /opt/jds-doctor;/opt/jds.scripts -\> /opt/jds-scripts.Восстановить следующие файлы из резервной копии: /opt/jds/appsettings.json;/opt/jds-doctor/appsetting.json.Запустить службы jds и jds-doctor

#### Обновление компонента JDS с помощью инсталлятора

Функциональные возможности компонента позволяют выполнять обновление компонента JDS с помощью инсталлятора. Данный метод не гарантирует сохранение данных, т.е. данных созданных/сохранённых пользователями компонента.

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /> | Обновление версий компонента должно проводиться последовательно от версии к версии. |
|----|----|

При первоначальной установке необходимо создать каталог /usr/share/jds. Для последовательного обновления версии компонента нужно создать каталог с номером версии. Например, каталог /usr/share/jds2-2-28.

В созданный каталог, с дистрибутивного диска скопировать следующие файлы и каталоги пакета установки:

- 
- 
- 

каталог – packages, содержащий пакеты установки;каталог – utils, содержащий конфигурационные файлы;скрипт – jds.sh.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image75.png" style="width:6.83125in;height:1.84in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-27 11-23-29.png" />

Рисунок 5.22 – Вид каталогов

Запустить инсталлятор компонента командой:

> sudo bash jds.sh upgrade

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image76.png" style="width:7.07148in;height:0.90896in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-27 11-34-10.png" />

Рисунок 5.23 – Выполнение команды обновления компонента

Подтвердить обновление компонента:

> Do you wish to upgrade jds (y/n)? Y

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image77.png" style="width:7.01082in;height:1.904in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-27 11-42-42.png" />

Рисунок 5.24 – Подтверждение операции обновления

При обновлении компонента, будет выведено сообщение о создании конфигурационного файла:

> \[INFO\] Configuration file: jds.config does not exist. Default config file: jds.config is created.

На следующем шаге инсталлятор запросит подтверждение изменения конфигурации по умолчанию:

> Do you want to change default configuration settings (y/n)?

Откажитесь или подтвердите обновление настроек и введите новые требуемые настройки.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image78.png" style="width:6.43358in;height:3.29719in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-27 11-48-41.png" />

Рисунок 5.25 – Подтверждения сохранения текущих настроек компонента

После чего инсталлятор запросит пароль привилегированного пользователя СУБД для обновления разрешений в СУБД.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image79.png" style="width:6.88756in;height:3.8819in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-27 11-50-21.png" />

Рисунок 5.26 – Ввод пароля привилегированного пользователя СУБД

Далее инсталлятор в автоматическом режиме выполнит обновление компонента.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image80.png" style="width:6.96035in;height:3.904in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic3\Screenshot from 2024-02-27 11-55-55.png" />

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image1.png" style="width:0.25in;height:0.25in" /> | В процессе обновления компонента JDS, аутентификационная информация пользователей компонента, созданные «Цели» и прочие настройки сохранятся. |
|----|----|

Рисунок 5.27 – Окно завершения обновления

## Сообщения об ошибках

### Ошибка установки открытого ключа репозитория

Ошибка установки открытого ключа репозитория может возникнуть на ОС Debian 11.

> gnug,gnupg2 and gnupg1 do not seem to be installed, but one of them is required for this operation

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image81.png" style="width:7.08681in;height:0.60556in" />

Рисунок 6.1 – Ошибка установки открытого ключа на Debian 11

Для устранения возникшей ошибки, следует установить пакет «gnupg» при помощи команды:

> apt-get install gnupg

После чего продолжить установку СУБД.

### Ошибка настройки учетной записи системного пользователя ОС «postgres»

Ошибка возникает на этапе создания пользователя ОС «postgres» при инсталляции СУБД «Jatoba» на ОС семейства Microsoft Windows.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image82.png" style="width:3.98399in;height:3.11721in" />

Рисунок 6.2 – Ошибка настройки учетной записи системного пользователя

Для устранения возникшей ошибки требуется назначить пароль, соответствующий требованиям.

### Ошибка настройки учетной записи пользователя СУБД «postgres»

Ошибка возникает на этапе создания пользователя СУБД «postgres» при инсталляции СУБД «Jatoba» на ОС семейства Microsoft Windows.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image83.png" style="width:4.04681in;height:3.18079in" />

Рисунок 6.3 – Ошибка настройки учетной записи пользователя СУБД «postgres»

Для устранения возникшей ошибки требуется назначить пароль, соответствующий требованиям.

### Ошибка повторной установки компонента «securityprofile»

После удаления компонента «securityprofile» удаляются все данные и зависимые объекты компонента.

При попытке повторной установки может возникнуть ошибка.

Избежать её возможно перезагрузкой СУБД и повторной установкой расширения «securityprofile».

### Ошибка в имени локального репозитория 

В случае, когда установка СУБД выполняется в GNU/Linux установочным скриптом «jatoba.sh» и данный скрипт не нашел директорию localrepo – будет выведено сообщение формата как показано на рис. Рисунок 6.4.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image84.png" style="width:7.08681in;height:0.46969in" />

Рисунок 6.4 – Сообщение скрипта

Если переменной окружения задать корректный путь до директории локального репозитория – установка будет успешно выполнена.

Однако рекомендуется устанавливать СУБД «Jatoba» способами, описанными в настоящем документе.

## 

<span id="_Toc215498573" class="anchor"></span>Структура каталога дистрибутива для всех поддерживаемых ОС GNU/Linux приведена в таблице Таблица П 1.

<table>
<caption><p>Таблица П 1 – Структура каталога дистрибутива для ОС GNU/Linux</p></caption>
<colgroup>
<col style="width: 48%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>ОС</strong></th>
<th style="text-align: center;"><strong>Состав файлов и директорий репозитория</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Astra Linux 1.6 Special Edition Смоленск</p>
<p>Astra Linux 1.7 Special Edition Смоленск</p>
<p>Astra Linux 1.8</p>
<p>Astra Linux 2.12 Сommon Edition Орел</p>
<p>Debian 10</p>
<p>Debian 11</p>
<p>Debian 12</p>
<p>Ubuntu 20.04</p>
<p>Ubuntu 22.04</p>
<p>Ubuntu 24.04</p>
<p>ОСнова 2.0</p></td>
<td><ul>
<li></li>
<li></li>
<li></li>
</ul></td>
</tr>
<tr>
<td><p>каталог &lt;pool&gt;;каталог &lt;dists&gt;;файл ключа &lt;DEB-GPG-KEY-Jatoba&gt;AlterOS Sever 7.5</p>
<p>РЕД ОС 7.3 Муром</p>
<p>RedHat Enterprise Linux 8.2</p>
<p>Oracle Linux 8.4</p></td>
<td><ul>
<li></li>
<li></li>
<li></li>
</ul></td>
</tr>
<tr>
<td><p>каталог &lt;packages&gt;;каталог &lt;repodata&gt;;файл ключа &lt;RPM-GPG-KEY-Jatoba&gt;Альт 8 СП</p>
<p>Альт 9 Server</p>
<p>Альт 10 Server</p></td>
<td><ul>
<li></li>
<li></li>
</ul></td>
</tr>
</tbody>
</table>

Таблица П 1 – Структура каталога дистрибутива для ОС GNU/Linux

каталог \<x86_64\>;файл \<RPM-GPG-KEY-Jatoba\>Описание локального репозитория для каждой ОС различны. В таблице Таблица П 2 приведены соответствия между ОС и локальными репозиториями.

<table>
<caption><p>Таблица П 2 – Соответствия ОС и репозитория</p></caption>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Alt Linux</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><u>Файл репозитория:</u></p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
<p><u>Описание локального репозитория:</u></p>
<p>rpm file:///localrepo x86_64 classic</p></td>
</tr>
<tr>
<td style="text-align: center;"><strong>AlterOS Sever 7.5 CentOS 7, РЕД ОС 7.2, 7.3 Муром, РОСА 7.3 Кобальт для серверных систем, RedHat Enterprise Linux 7.8, 8.2, Oracle Linux 8.4</strong></td>
</tr>
<tr>
<td><p><u>Файл репозитория:</u></p>
<p>/etc/yum.repos.d/jatoba-&lt;ver&gt;.repo</p>
<p><u>Описание локального репозитория:</u></p>
<p>[jatoba-4]</p>
<p>name=Jatoba 4 Official Repository</p>
<p>baseurl=file:///localrepo</p>
<p>enabled=1</p>
<p>gpgcheck=1</p>
<p>gpgkey=file:///localerepo/RPM-GPG-KEY-Jatoba</p></td>
</tr>
<tr>
<td style="text-align: center;"><strong>Astra Linux 1.6 Special Edition Смоленск, Astra Linux 1.7 Special Edition Смоленск, Astra Linux 2.12 Сommon Edition Орел, Debian10, Debian 11,Ubuntu 18.04, Ubuntu 20.04,</strong> <strong>Ubuntu22.04, ОСнова 2.0</strong></td>
</tr>
<tr>
<td><p><u>Файл репозитория:</u></p>
<p>/etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
<p><u>Описание локального репозитория:</u></p>
<p>deb file:///localrepo stable non-free</p></td>
</tr>
</tbody>
</table>

Таблица П 2 – Соответствия ОС и репозитория

## 

<span id="_Toc215498574" class="anchor"></span>Пример установки и удаления СУБД «Jatoba» из локального репозитория для ОС Ubuntu 18.04

### 

<span id="_Toc215498575" class="anchor"></span>Установка СУБД «Jatoba» из локального репозитория в ОС UbuntuУстановка СУБД «Jatoba» из локального репозитория для ОС Ubuntu проводится в следующем порядке:

1)  

> В терминале войти в режим суперпользователя, выполнив команду:sudo su

2)  

> Если команды sudo не существует – установить:su -l
>
> apt-get install sudo -y

3)  

> Выполнить обновление системы:sudo apt update && sudo apt upgrade –y
>
> sudo apt -s dist-upgrade
>
> sudo apt dist-upgrade

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image85.png" style="width:7.0859in;height:2.97761in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 05-31-16.png" />

Рисунок 2.1 – Обновление системы

4)  

> Создать папку localrepo в корневом каталоге:mkdir /localrepo

5)  

- 
- 
- 

В созданную папку скопировать:каталог \<pool\>каталог \<dist\>файл \<DEB-GPG-KEY-Jatoba\><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image86.png" style="width:3.48056in;height:1.08423in" alt="C:\Users\kuznetsov-a\Desktop\Новая папка\123\Screenshot from 2022-08-05 01-48-04.png" />

Рисунок 2.2 – Структура каталога «localrepo»

6)  

> Установить открытый ключ репозитория:apt-key add /localrepo/DEB-GPG-KEY-Jatoba

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image87.png" style="width:7.08648in;height:1.088in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 06-05-52.png" />

<table>
<caption><p>Рисунок 2.3 – Установка открытого ключа репозитория</p></caption>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>Для более новых версий ОС GNU/Linux, основанных на Debian (Astra Linux 1.8, Debian 12, Ubuntu 24.04 и других), рекомендуется добавлять ключ репозитория следующим образом.</p>
<p>Скопировать ключ репозитория:</p>
<blockquote>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</blockquote>
<p>Добавить описание нового репозитория в список:</p>
<blockquote>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt; /etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</blockquote>
<p>Здесь jatoba-&lt;ver&gt; - версия устанавливаемой СУБД «Jatoba».</p>
<p>Затем выполнить пункт 9) из данного подраздела.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Рисунок 2.3 – Установка открытого ключа репозитория

7)  

> Добавить описание локального репозитория в систему:nano /etc/apt/sources.list.d/jatoba-<ver>.list

8)  

> Вставить в файл следующее содержимое и сохранить:deb file:///localrepo stable non-free

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image88.png" style="width:7.08648in;height:1.136in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 06-07-05.png" />

Рисунок 2.4 – Содержание файла «jatoba-4.list»

9)  

> Проиндексировать обновленное состояние репозитория:apt-get update

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image89.png" style="width:7.08648in;height:2.632in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 06-08-01.png" />

Рисунок 2.5 – Индексация репозитория

10) 

> Установить СУБД «Jatoba» при помощи команды:apt-get install jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image90.png" style="width:6.68056in;height:4.38819in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 01-43-13.png" />

Рисунок 2.6 – Установка пакетов

11) 

> Убедиться, что отсутствуют ошибки зависимостей:for f in \$(LANG=C find /usr/jatoba-\<версия\> -type f -exec file {} \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

12) 

> Перейти в директорию исполняемых файлов СУБД:cd /usr/jatoba-<ver>/bin

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image91.png" style="width:6.67361in;height:0.87431in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 01-45-30.png" />

Рисунок 2.7 – Переход в каталог

13) 

> Инициализировать каталог данных СУБД при помощи команды:./jatoba-setup initdb jatoba-<ver>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image92.png" style="width:7.15278in;height:1.26589in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 01-46-25.png" />

Рисунок 2.8 – Инициализация СУБД

14) 

> Добавить сервис в список автозапуска:systemctl enable jatoba-<ver>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image93.png" style="width:7.01642in;height:1.24306in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 01-47-29.png" />

Рисунок 2.9 – Добавление сервиса jatoba-4 в автозагрузку ОС

15) 

> Запустить службу:systemctl start jatoba-<ver>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image94.png" style="width:7.03472in;height:0.86216in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 01-48-24.png" />

Рисунок 2.10 – Запуск службы jatoba-4

16) 

> Проверить статус службы:systemctl status jatoba-<ver>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image95.png" style="width:6.70139in;height:3.74306in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 01-49-20.png" />

Рисунок 2.11 – Проверка статуса службы jatoba-4

17) 

> Установить пароль для системного пользователя ОС «postgres»:sudo passwd postgres

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image96.png" style="width:7.08701in;height:1.41667in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 01-51-05.png" />

Рисунок 2.12 – Установка пароля для пользователя СУБД

18) 

> Авторизоваться в psql, для этого нажать сочетание клавиш:CTRL + D
>
> затем войти в psql:
>
> su postgres
>
> psql

19) 

> Установить пароль для пользователя СУБД «postgres»:\password

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image97.png" style="width:7.03678in;height:2.43056in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_6\Пользовательская документация\Draft\PIC2\Screenshot from 2024-09-09 01-53-12.png" />

Рисунок 2.13 – Установка пароля для пользователя ОС

На этом этапе установка СУБД окончена.

### 

<span id="_Toc215498576" class="anchor"></span>Удаление СУБД «Jatoba» из локального репозитория в ОС UbuntuУдаление СУБД «Jatoba» из локального репозитория в ОС Ubuntu 18.04 проводится в следующем порядке:

1)  

> Вывести список служб СУБД «Jatoba»:systemctl list-unit-files 'ja\*'

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image98.png" style="width:7.08644in;height:1.65094in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-12-30.png" />

Рисунок 2.14 – Список служб

Команда сформирована по маске из первых букв названий служб. Из полученного списка очевидно, что установлена только СУБД.

Перечень служб, используемых при эксплуатации СУБД, приведен в таблице Таблица П 2.1.

<table>
<caption><p>Таблица П 2.1 – Перечень служб используемых СУБД</p></caption>
<colgroup>
<col style="width: 66%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Наименование компонента</strong></th>
<th style="text-align: center;"><strong>Наименование службы (демона)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">СУБД «Jatoba»</td>
<td>jatoba-&lt;ver&gt;</td>
</tr>
<tr>
<td style="text-align: left;"><p>Централизованный сбор записей событий в СУБД.</p>
<p>Компонент «ja_Log»</p></td>
<td style="text-align: left;"><p>jalog_server</p>
<p>jalog_agent</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>Управление режимом работы узлов кластера</p>
<p>Компонент «jaDog»</p></td>
<td style="text-align: left;">jadog</td>
</tr>
</tbody>
</table>

Таблица П 2.1 – Перечень служб используемых СУБД

2)  

> Удалить службу из автозагрузки ОС:systemctl disable jatoba-<ver>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image99.png" style="width:7.08644in;height:1.09434in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-13-50.png" />

Рисунок 2.15 – Удаление службы «jatoba-4» из автозагрузки

Если были установлены компоненты СУБД, приведенные в таблице Таблица П 2.1, то службы компонентов удаляются командой:

> systemctl disable \<имя службы\>

3)  

> Проверить статус отключенной из автозагрузки службы:systemctl status jatoba-<ver>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image100.png" style="width:7.08644in;height:2.14151in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-14-41.png" />

Рисунок 2.16 – Проверка статуса службы

Служба должна иметь статус «disabled».

4)  

> Удалить все ненужные пакеты, первоначально установленные по зависимостям:sudo apt autoremove jatoba<ver>-\*

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image101.png" style="width:7.08644in;height:1.63208in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-16-54.png" />

Рисунок 2.17 – Удаление пакетов по зависимостям

Подтвердить проведение операции и в результате будет выведен список удаленных пакетов.

При удалении пакетов будут удалены все связанные с ними службы.

5)  

> Вывести список служб СУБД «Jatoba»:systemctl list-unit-files 'ja\*'

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image102.png" style="width:7.08644in;height:1.29245in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-19-02.png" />

Рисунок 2.18 – Список служб по маске «ja\*»

Список служб должен быть пуст.

6)  

> Просмотреть список пользователей командой:cat /etc/passwd

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image103.png" style="width:7.08644in;height:1.25472in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-20-02.png" />

Рисунок 2.19 – Список пользователей

7)  

> Удалить пользователя «postgres» командой:userdel postgres

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image104.png" style="width:7.08644in;height:0.93396in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-21-41.png" />

Рисунок 2.20 – Удаление пользователя «postgres»

8)  

> Удалить каталоги СУБД командами:rm -rf /usr/jatoba-<ver>
>
> rm -rf /var/lib/jatoba

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image105.png" style="width:7.08644in;height:1.11321in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-22-35.png" />

Рисунок 2.21 – Удаление каталогов СУБД

9)  

> Удалить каталог репозитория:rm -rf /localrepo

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image106.png" style="width:7.08644in;height:0.92453in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-23-42.png" />

Рисунок 2.22 – Удаление каталога репозитория

10) 

> Просмотреть список репозиториев ОС:sudo grep -rhE ^deb /etc/apt/sources.list\*

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image107.png" style="width:7.08597in;height:3in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-47-24.png" />

Рисунок 2.23 – Просмотр списка репозиториев ОС

В списке репозиториев будет присутствовать запись:

> deb file:///localrepo stable non-free

11) 

> Удалить описание локального репозитория:rm /etc/apt/sources.list.d/jatoba-<ver>.list

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image108.png" style="width:7.08597in;height:0.9375in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-52-43.png" />

Рисунок 2.24 – Удаление репозитория

12) 

> Проиндексировать обновленное состояние репозитория:apt-get update

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image109.png" style="width:7.08597in;height:1.57292in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-53-32.png" />

Рисунок 2.25 – Обновление репозитория

13) 

> Просмотреть список репозиториев ОС:sudo grep -rhE ^deb /etc/apt/sources.list\*

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image110.png" style="width:7.08597in;height:2.84375in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\PIC\Screenshot from 2023-02-13 07-54-32.png" />

Рисунок 2.26 – Просмотр списка репозиториев ОС после обновления

В списке репозиториев будет отсутствовать запись:

> deb file:///localrepo stable non-free

На этом шаге удаление СУБД закончено.

## 

<span id="_Toc215498577" class="anchor"></span>Пример установки и удаления СУБД «Jatoba» из локального репозитория для РЕД ОС 7.3 Муром

### 

<span id="_Toc215498578" class="anchor"></span>Установка СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 МуромУстановка СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром проводится в следующем порядке:

1)  

> В терминале войти в режим суперпользователя, выполнив команду:sudo su

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image111.png" style="width:7.08631in;height:0.89552in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 13-33-47.png" />

Рисунок 3.1 – Вход в режим суперпользователя

2)  

> Если команды sudo не существует, то установить командой:yum install sudo -y

3)  

> Выполнить обновление системы;Допустимо использовать команду:
>
> dnf update –y

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image112.png" style="width:7.08618in;height:0.72388in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 13-50-39.png" />

Рисунок 3.2 – Обновление системы командой «dnf»

> Или команду:
>
> yum update –y

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image113.png" style="width:7.08631in;height:0.86567in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 14-06-08.png" />

Рисунок 3.3 – Обновление системы командой «yum»

4)  

> Создать папку localrepo в корневом каталоге:mkdir /localrepo

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image114.png" style="width:7.0858in;height:0.65672in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 14-08-44.png" />

Рисунок 3.4 – Создание каталога «localrepo»

5)  

- 
- 
- 

В созданную папку скопировать:каталог \<packages\>;каталог \<repodata\>;файл ключа \<RPM-GPG-KEY-Jatoba\>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image115.png" style="width:3.38611in;height:1.17431in" />

Рисунок 3.5 – Структура каталога «localrepo»

Если директория с файлами находится в корневой директории пользователя, необходимо выполнить команду:

> cp -R /home/\<username\>/X.XX.X-XXXX/repo/. /localrepo/

6)  

> Установить открытый ключ репозитория:rpm --import /localrepo/RPM-GPG-KEY-Jatoba

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image116.png" style="width:7.0858in;height:0.67164in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 14-14-23.png" />

Рисунок 3.6 – Установка открытого ключа репозитория

7)  

> Добавить описание локального репозитория в систему:nano /etc/yum.repos.d/jatoba-\<версия\>.repo

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image117.png" style="width:7.0858in;height:0.65672in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 14-18-23.png" />

Рисунок 3.7 – Добавление локального репозитория в ОС

8)  

> Вставить в файл следующее содержимое и сохранить:\[jatoba-4\]
>
> name=Jatoba 4 Official Repository
>
> baseurl=file:///localrepo
>
> enabled=1
>
> gpgcheck=1
>
> gpgkey=file:///localerepo/RPM-GPG-KEY-Jatoba

9)  

> Проиндексировать обновленное состояние репозитория:yum makecache

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image118.png" style="width:7.0858in;height:1.41791in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 14-24-31.png" />

Рисунок 3.8 – Индексация репозитория

10) 

> Установить СУБД «Jatoba» при помощи команды:yum install jatoba4-client jatoba4-contrib jatoba4-libs jatoba4-server

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image119.png" style="width:7.0858in;height:4.69403in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 14-29-05.png" />

Рисунок 3.9 – Установка пакетов

Необходимо подтвердить продолжение установки.

11) 

> Убедиться, что отсутствуют ошибки зависимостей:for f in \$(LANG=C find /usr/jatoba-\<версия\> -type f -exec file {} \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

12) 

> Перейти в директорию исполняемых файлов СУБД:cd /usr/jatoba-4/bin

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image120.png" style="width:7.0858in;height:0.66418in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 14-33-16.png" />

Рисунок 3.10 – Команда перехода в каталог

13) 

> Инициализировать каталог данных СУБД при помощи команды:./jatoba-setup initdb jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image121.png" style="width:7.0858in;height:1.02985in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 14-36-08.png" />

Рисунок 3.11 – Инициализация СУБД

14) 

> Добавить сервис в список автозапуска:systemctl enable jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image122.png" style="width:7.0858in;height:1.06716in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 15-36-07.png" />

Рисунок 3.12 – Добавление сервиса jatoba-4 а автозагрузку ОС

15) 

> Запустить службу:systemctl start jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image123.png" style="width:7.0858in;height:0.67164in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 15-36-54.png" />

Рисунок 3.13 – Запуск службы jatoba-4

16) 

> Проверить статус службы:systemctl status jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image124.png" style="width:7.0858in;height:2.15672in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 15-37-31.png" />

Рисунок 3.14 – Проверка статуса службы

17) 

> Авторизоваться в «psql» от имени и с правами пользователя «postgres» и установить для него пароль в СУБД:sudo su – postgres
>
> cd /usr/jatoba-4/bin/  
> psql
>
> \password

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image125.png" style="width:7.0858in;height:2.20896in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 15-40-20.png" />

Рисунок 3.15 – Установка пароля для пользователя СУБД «postgres»

18) 

> Выйти в профиль пользователя «root» нажатием сочетания клавиш:CTRL + D

19) 

> Установить пароль для системного пользователя ОС «postgres»:sudo passwd postgres

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image126.png" style="width:7.0858in;height:1.64925in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\4.X_Draft\Установка\Снимок экрана в 2023-02-09 15-46-48.png" />

Рисунок 3.16 – Установка пароля для пользователя ОС

На этом этапе установка СУБД окончена.

### 

<span id="_Toc215498579" class="anchor"></span>Удаление СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 МуромУдаление СУБД «Jatoba» из локального репозитория в РЕД ОС 7.3 Муром проводится в следующем порядке:

1)  

> Вывести список служб СУБД «Jatoba»:systemctl list-unit-files 'ja\*'

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image127.png" style="width:7.08681in;height:1.47761in" />

Рисунок 3.17 – Список служб

Команда сформирована по маске из первых букв названий служб. Из полученного списка очевидно, что установлена только СУБД.

Перечень служб используемых при эксплуатации СУБД приведен в таблице Таблица П 3.1

<table>
<caption><p>Таблица П 3.1 – Перечень служб используемых СУБД</p></caption>
<colgroup>
<col style="width: 66%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Наименование компонента</strong></th>
<th style="text-align: center;"><strong>Наименование службы (демона)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">СУБД «Jatoba»</td>
<td>jatoba-4</td>
</tr>
<tr>
<td style="text-align: left;"><p>Централизованный сбор записей событий в СУБД.</p>
<p>Компонент «ja_Log»</p></td>
<td style="text-align: left;"><p>jalog_server</p>
<p>jalog_agent</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>Управление режимом работы узлов кластера</p>
<p>Компонент «jaDog»</p></td>
<td style="text-align: left;">jadog</td>
</tr>
</tbody>
</table>

Таблица П 3.1 – Перечень служб используемых СУБД

2)  

> Удалить службу из автозагрузки ОС:systemctl disable jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image128.png" style="width:7.08681in;height:0.89552in" />

Рисунок 3.18 – Удаление службы «jatoba-4» из автозагрузки

Если были установлены компоненты СУБД приведенные в таблице Таблица П 3.1, то службы компонентов удаляются командой:

> systemctl disable \<имя службы\>

3)  

> Проверить статус отключенной из автозагрузки службы:systemctl status jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image129.png" style="width:7.08681in;height:2.26866in" />

Рисунок 3.19 – Проверка статуса службы

Служба должна иметь статус «disabled».

4)  

> Удалить все ненужные пакеты, первоначально установленные по зависимостям:yum autoremove jatoba4-\*

Подтвердить проведение операции и в результате будет выведен список удаленных пакетов.

При удалении пакетов будут удалены все связанные с ними службы.

5)  

> Вывести список служб СУБД «Jatoba»:systemctl list-unit-files 'ja\*'

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image130.png" style="width:7.08681in;height:1.29104in" />

Рисунок 3.20 – Список служб по маске «ja\*»

Список служб должен быть пуст.

6)  

Просмотреть список пользователей:В терминале ОС список пользователей выводится командой:

> cat /etc/passwd

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image131.png" style="width:7.08681in;height:1.20895in" />

Рисунок 3.21 – Список пользователей

В ОС список пользователей выводится с помощью утилиты «Менеджер пользователей», отключив параметр «Скрыть системных пользователей и группы».

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image132.png" style="width:6.92728in;height:2.52235in" />

Рисунок 3.22 – Вывод списка пользователей в утилите «Менеджер пользователей»

7)  

> Удалить пользователя «postgres» командой:userdel postgres

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image133.png" style="width:7.08681in;height:0.65672in" />

Рисунок 3.23 – Удаление пользователя «postgres»

В ОС удалить пользователя «postgres» возможно через утилиту «Менеджер пользователей», используя пиктограмму «Удалить».

8)  

> Удалить каталоги СУБД командами:rm -rf /usr/jatoba-4
>
> rm -rf /var/lib/jatoba

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image134.png" style="width:7.08681in;height:0.82836in" />

Рисунок 3.24 – Удаление каталогов СУБД

9)  

> Удалить каталог репозитория:rm -rf /localrepo

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image135.png" style="width:7.08681in;height:0.6791in" />

Рисунок 3.25 – Удаление каталога репозитория

10) 

> Просмотреть список репозиториев ОС:yum repolist

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image136.png" style="width:7.08681in;height:1.4403in" />

Рисунок 3.26 – Список репозиториев

В выведенном списке будет присутствовать репозиторий «jatoba-4».

11) 

> Просмотреть описание локального репозитория «jatoba-4» в ОС:cat /etc/yum.repos.d/jatoba-4.repo

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image137.png" style="width:7.08681in;height:1.68657in" />

Рисунок 3.27 – Вывод описания локального репозитория «jatoba-4»

12) 

> Удалить описание локального репозитория «jatoba-4» в ОС:rm /etc/yum.repos.d/jatoba-4.repo

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image138.png" style="width:7.08681in;height:0.64164in" />

Рисунок 3.28 – Удаление локального репозитория

Подтвердить команду удаления.

13) 

> Просмотреть список репозиториев ОС:yum repolist

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image139.png" style="width:7.08681in;height:1.20896in" />

В списке репозиториев ОС должен отсутствовать репозиторий «jatoba-4». На этом шаге удаление СУБД закончено.

## 

<span id="_Toc215498580" class="anchor"></span>Пример установки и удаления СУБД «Jatoba» из локального репозитория для Альт 9 Server

### 

<span id="_Toc215498581" class="anchor"></span>Установка СУБД «Jatoba» из локального репозитория в Альт 9 ServerУстановка СУБД «Jatoba» из локального репозитория в Альт 9 Server проводится в следующем порядке:

1)  

> В терминале MATE войти в режим суперпользователя, выполнив команду:sudo su

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image140.png" style="width:7.08681in;height:1.21739in" />

Рисунок 4.1 – Вход в режим суперпользователя

2)  

> Выполнить обновление системы, последовательно выполняя команды:apt-get update
>
> apt-get dist-upgrade
>
> update-kernel
>
> apt-get clean
>
> reboot

После обновления ОС установится пакет «sudo», убедиться в его установке можно командой:

> apt-get install sudo -y

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image141.png" style="width:7.08681in;height:1.91304in" />

Рисунок 4.2 – Проверка установки пакета «sudo»

3)  

> Установить пакет «nano» командой:apt-get install nano

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image142.png" style="width:7.08681in;height:3.83478in" />

Рисунок 4.3 – Установка пакета «nano»

4)  

> Создать папку localrepo в корневом каталоге:mkdir /localrepo

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image143.png" style="width:7.08681in;height:1.06087in" />

Рисунок 4.4 – Создание каталога «localrepo»

5)  

- 
- 

В созданную папку скопировать:каталог \<x86_64\>файл \<RPM-GPG-KEY-Jatoba\><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image144.png" style="width:3.31296in;height:0.9742in" />

Рисунок 4.5 - Структура каталога «localrepo»

6)  

> Установить открытый ключ репозитория:rpm --import /localrepo/RPM-GPG-KEY-Jatoba

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image145.png" style="width:7.08681in;height:1.06956in" />

<table>
<caption><p>Рисунок 4.6 – Установка открытого ключа репозитория</p></caption>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>Для более новых версий ОС GNU/Linux, основанных на Debian (Astra Linux 1.8, Debian 12, Ubuntu 24.04 и других), рекомендуется добавлять ключ репозитория следующим образом.</p>
<p>Скопировать ключ репозитория:</p>
<blockquote>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</blockquote>
<p>Добавить описание нового репозитория в список:</p>
<blockquote>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt; /etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</blockquote>
<p>Здесь jatoba-&lt;ver&gt; - версия устанавливаемой СУБД «Jatoba».</p>
<p>Затем выполнить 9) из данного подраздела.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Рисунок 4.6 – Установка открытого ключа репозитория

7)  

> Добавить описание локального репозитория в систему:nano /etc/apt/sources.list.d/jatoba-4.list

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image146.png" style="width:7.08681in;height:1.05217in" />

Рисунок 4.7 – Добавление локального репозитория в ОС

8)  

> Вставить в файл следующее содержимое и сохранить:rpm file:///localrepo x86_64 classic

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image147.png" style="width:7.08681in;height:1.08696in" />

Рисунок 4.8 – Содержание файла «jatoba-4.list»

9)  

> Проиндексировать обновленное состояние репозитория:apt-get update

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image148.png" style="width:7.08681in;height:3.13043in" />

Рисунок 4.9 – Индексация репозитория

10) 

> Установить СУБД «Jatoba» при помощи команды:apt-get install jatoba4-client jatoba4-contrib jatoba4-libs jatoba4-server

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image149.png" style="width:7.08681in;height:3.14783in" />

Рисунок 4.10 – Установка пакетов

Подтвердите продолжение установки.

11) 

> Убедиться, что отсутствуют ошибки зависимостей:for f in \$(LANG=C find /usr/jatoba-4 -type f -exec file {} \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done 

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image150.png" style="width:7.08681in;height:1.53043in" />

Рисунок 4.11 – Команда проверки отсутствия ошибок зависимостей

12) 

> Перейти в директорию исполняемых файлов СУБД:cd /usr/jatoba-4/bin

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image151.png" style="width:7.08681in;height:1.06087in" />

Рисунок 4.12 – Команда перехода в каталог

13) 

> Инициализировать каталог данных СУБД при помощи команды:./jatoba-setup initdb jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image152.png" style="width:7.08681in;height:1.38261in" />

Рисунок 4.13 – Инициализация СУБД

14) 

> Добавить сервис в список автозапуска:systemctl enable jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image153.png" style="width:7.08681in;height:1.38261in" />

Рисунок 4.14 – Добавление сервиса jatoba-4 а автозагрузку ОС

15) 

> Запустить службу:systemctl start jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image154.png" style="width:7.08681in;height:1.05217in" />

Рисунок 4.15 – Запуск службы jatoba-4

16) 

> Проверить статус службы:systemctl status jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image155.png" style="width:7.08681in;height:2.43478in" />

Рисунок 4.16 – Проверка статуса службы

17) 

> Авторизоваться в psql от имени и с правами пользователя «postgres» и установить для него пароль в СУБД:su -l postgres
>
> cd /usr/jatoba-4/bin/  
> psql
>
> \password

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image156.png" style="width:7.08681in;height:2.44348in" />

Рисунок 4.17 – Установка пароля для пользователя СУБД «postgres»

18) 

> Войти в профиль пользователя «root» нажатием сочетания клавиш:CTRL + D

19) 

> Установить пароль для системного пользователя ОС «postgres»:passwd postgres

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image157.png" style="width:7.08681in;height:5.39722in" />

Рисунок 4.18 – Установка пароля для пользователя ОС

На этом этапе установка СУБД окончена.

### 

<span id="_Toc215498582" class="anchor"></span>Удаление СУБД «Jatoba» из локального репозитория в Альт 9 ServerУдаление СУБД «Jatoba» из локального репозитория в Альт 9 Server проводится в следующем порядке:

1)  

> Вывести список служб СУБД «Jatoba»:systemctl list-unit-files 'ja\*'

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image158.png" style="width:7.08681in;height:1.73913in" />

Рисунок 4.19 – Список служб

Команда сформирована по маске из первых букв названий служб. Из полученного списка очевидно, что установлена только СУБД.

Перечень служб, используемых при эксплуатации СУБД, приведен в таблице Таблица П 4.1.

<table>
<caption><p>Таблица П 4.1 – Перечень служб используемых СУБД</p></caption>
<colgroup>
<col style="width: 66%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Наименование компонента</strong></th>
<th style="text-align: center;"><strong>Наименование службы (демона)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">СУБД «Jatoba»</td>
<td>jatoba-4</td>
</tr>
<tr>
<td style="text-align: left;"><p>Централизованный сбор записей событий в СУБД.</p>
<p>Компонент «ja_Log»</p></td>
<td style="text-align: left;"><p>jalog_server</p>
<p>jalog_agent</p></td>
</tr>
<tr>
<td style="text-align: left;"><p>Управление режимом работы узлов кластера</p>
<p>Компонент «jaDog»</p></td>
<td style="text-align: left;">jadog</td>
</tr>
</tbody>
</table>

Таблица П 4.1 – Перечень служб используемых СУБД

2)  

> Удалить службу из автозагрузки ОС:systemctl disable jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image159.png" style="width:7.08681in;height:1.22609in" />

Рисунок 4.20 – Удаление службы «jatoba-4» из автозагрузки

Если были установлены компоненты СУБД, приведенные в таблице Таблица П 4.1, то службы компонентов удаляются командой:

> systemctl disable \<имя службы\>

3)  

> Проверить статус отключенной из автозагрузки службы:systemctl status jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image160.png" style="width:7.08681in;height:1.37528in" />

Рисунок 4.21 – Проверка статуса службы

Служба должна иметь статус «disabled».

4)  

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">Удалить все ненужные пакеты.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>Удаление пакетов командами:</p>
<blockquote>
<p>apt-get remove jatoba4-*</p>
<p>apt-get autoremove jatoba4-*</p>
</blockquote>
<p>может привести к ошибке и некорректному удалению пакетов.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Для корректного удаления пакетов рекомендуется использовать менеджер пакетов «Synaptic».

Для запуска менеджера пакетов «Synaptic» необходимо выбрать в меню ОС «Система» → «Параметры» → «Прочие» → «Менеджер пакетов». Перед своим запуском программа попросит ввести пароль суперпользователя:

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image161.png" style="width:6.01042in;height:1.84375in" />

Рисунок 4.22 – Ввод пароля «root»

Нажать кнопку «Происхождение» (см. рис. Рисунок 4.23) и выбрать в списке репозиторий «Локальный/classic», который является локальным репозиторием СУБД «Jatoba».

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image162.png" style="width:7in;height:5.5625in" />

Рисунок 4.23 – Локальный репозиторий СУБД «Jatoba» в менеджере пакетов «Synaptic»

В списке пакетов отображаются пакеты, находящиеся в локальном репозитории СУБД «Jatoba». Пакеты могут иметь статусы, представленные в таблице Таблица П 4.2.

| **Пиктограмма** | **Статус пакета** | **Вид пакета** |
|:--:|:---|:---|
| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image163.png" style="width:0.24375in;height:0.22639in" /> | пакет, установленный в системе | <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image164.png" style="width:1.66667in;height:0.23958in" /> |
| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image165.png" style="width:0.21875in;height:0.21875in" /> | пакет, доступный для установки | <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image166.png" style="width:1.86458in;height:0.22917in" /> |
| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image167.png" style="width:0.22917in;height:0.22917in" /> | пакет назначен для установки | <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image168.png" style="width:1.90625in;height:0.28125in" /> |
| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image169.png" style="width:0.21875in;height:0.22917in" /> | пакет, отмеченный для удаления | <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image170.png" style="width:1.66667in;height:0.26042in" /> |

Таблица П 4.2 – Статусы пакетов в репозитории

Пакеты со статусом «установленные в системе» должны быть помечены для удаления, через контекстное меню или клавишей «Delete».

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image171.png" style="width:6.875in;height:5.41667in" />

Рисунок 4.24 – Контекстное меню

После маркировки пакетов для удаления нажать кнопку «Применить». Менеджер пакетов «Synaptic» выведет окно подтверждения удаления пакетов, в котором необходимо подтвердить действие, нажав на кнопку «Применить».

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image172.png" style="width:6.88542in;height:5.44792in" />

Рисунок 4.25 – Подтверждение удаления пактов

После удаления пакетов в репозитории «Локальный/classic» все пакеты сменят статус на «пакет доступный к установке». На данном шаге работа с менеджером пакетов «Synaptic» закончена.

5)  

> Вывести список служб СУБД «Jatoba» командой в терминале MATE:systemctl list-unit-files 'ja\*'

Список служб, выведенных по маске, должен быть пуст, т.к. процедура удаления пакетов удяляет и связанные с ними службы.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image173.png" style="width:7.08681in;height:1.60377in" />

Рисунок 4.26 – Список служб по маске «ja\*»

6)  

> Просмотреть список репозиториев:apt-repo list

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image174.png" style="width:7.08681in;height:1.75472in" />

Рисунок 4.27 – Список локальных репозиториев

В списке локальных репозиториев должна присутствать запись:

> rpm file:///localrepo x86_64 classic

7)  

> Удалить описание локального репозитория:rm /etc/apt/sources.list.d/jatoba-4.list

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image175.png" style="width:7.08681in;height:1.23585in" />

Рисунок 4.28 – Удаление описания репозитория

Подтвердите проведение операции.

8)  

> Просмотреть список репозиториев:apt-repo list

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image176.png" style="width:7.08681in;height:1.63208in" />

Рисунок 4.29 – Список локальных репозиториев после удаления

В списке локальных репозиториев должна отсутствовать запись:

> rpm file:///localrepo x86_64 classic

Что означает корретное удаление описание локального репозитория СУБД «Jatoba».

9)  

> Просмотреть список пользователей командой:cat /etc/passwd

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image177.png" style="width:7.08681in;height:1.2188in" />

Рисунок 4.30 – Список пользователей

Если в списке пользователей ОС присутствует строка:

> postgres:x:46:46:PostgreSQL Server:/var/lib/jatoba:/bin/bash

следовательно, требуется удалить пользователя «postgres».

10) 

> Удалить пользователя «postgres» командой:userdel postgres

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image178.png" style="width:7.08681in;height:1.04717in" />

Рисунок 4.31 – Удаление пользователя «postgres»

При повторном просмотре списка пользователей ОС, строка о пользователе «postgres» должна отсутствовать.

11) 

> Удалить каталоги СУБД командами:rm -rf /usr/jatoba-4
>
> rm -rf /var/lib/jatoba

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image179.png" style="width:7.08681in;height:1.21698in" />

Рисунок 4.32 – Удаление каталогов СУБД

12) 

> Удалить каталог репозитория:rm -rf /localrepo

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image180.png" style="width:7.08681in;height:1.07547in" />

Рисунок 4.33 – Удаление каталога репозитория

На этом шаге удаление СУБД закончено.

## 

<span id="_Toc215498583" class="anchor"></span>Пример установки и удаления СУБД «Jatoba» из локального репозитория для ОС Astra Linux 1.6 Special Edition Смоленск (x86-64) в ЗПС

### 

<span id="_Toc215498584" class="anchor"></span>Установка ОС Astra Linux 1.6 Special Edition Смоленск (x86-64)При установке ОС на этапе «Выбор программного обеспечения» не выбирать установку СУБД входящей в состав дистрибутива.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image181.png" style="width:6.87292in;height:5.14814in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\PIC\Снимок.PNG" />

Рисунок 5.1 – Этап «Выбор программного обеспечения»

На следующем этапе «Дополнительные настройки ОС», установить флаг для опции «Включить режим замкнутой программной среды».

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image182.png" style="width:6.88in;height:5.15972in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_4_1\Пользовательская документация\PIC\Снимок3.PNG" />

Рисунок 5.2 – Этап «Дополнительные настройки ОС»

### 

<span id="_Toc215498585" class="anchor"></span>Установка СУБД «Jatoba» из локального репозитория в ОС Astra Linux 1.6 Special Edition Смоленск (x86-64)Установка СУБД «Jatoba» из локального репозитория для ОС Astra Linux 1.6 Special Edition Смоленск (x86-64) проводится в следующем порядке:

1)  

> В терминале войти в режим суперпользователя, выполнив команду:sudo su

2)  

> Если команды sudo не существует – установить:su -l
>
> apt-get install sudo -y

3)  

> Выполнить обновление системы:sudo apt update && sudo apt upgrade –y
>
> sudo apt -s dist-upgrade
>
> sudo apt dist-upgrade

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image183.png" style="width:7.08585in;height:1.904in" alt="D:\VM\Установка\shared\PIC\Screenshot_20230619_113522.png" />

Рисунок 5.3 – Обновление системы

4)  

> Создать папку localrepo в корневом каталоге:mkdir /localrepo

5)  

- 
- 
- 

В созданную папку скопировать:каталог \<pool\>каталог \<dist\>файл \<DEB-GPG-KEY-Jatoba\><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image184.png" style="width:3.40939in;height:0.92778in" alt="D:\VM\Установка\shared\PIC\Screenshot_20230619_114515.png" />

Рисунок 5.4 – Структура каталога «localrepo»

6)  

> Установить открытый ключ репозитория:apt-key add /localrepo/DEB-GPG-KEY-Jatoba

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image185.png" style="width:7.08681in;height:1.304in" />

<table>
<caption><p>Рисунок 5.5 – Установка открытого ключа репозитория</p></caption>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /></th>
<th><p>Для более новых версий ОС GNU/Linux, основанных на Debian (Astra Linux 1.8, Debian 12, Ubuntu 24.04 и других), рекомендуется добавлять ключ репозитория следующим образом.</p>
<p>Скопировать ключ репозитория:</p>
<blockquote>
<p>cp /localrepo/DEB-GPG-KEY-Jatoba /etc/apt/keyrings/</p>
</blockquote>
<p>Добавить описание нового репозитория в список:</p>
<blockquote>
<p>echo "deb [signed-by=/etc/apt/keyrings/DEB-GPG-KEY-Jatoba] file:///localrepo stable non-free" &gt; /etc/apt/sources.list.d/jatoba-&lt;ver&gt;.list</p>
</blockquote>
<p>Здесь jatoba-&lt;ver&gt; - версия устанавливаемой СУБД «Jatoba».</p>
<p>Затем выполнить 9) из данного подраздела.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Рисунок 5.5 – Установка открытого ключа репозитория

7)  

> Добавить описание локального репозитория в систему:nano /etc/apt/sources.list.d/jatoba-4.list

8)  

> Вставить в файл следующее содержимое и сохранить:deb file:///localrepo stable non-free

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image186.png" style="width:7.08681in;height:1.32in" />

Рисунок 5.6 – Содержание файла «jatoba-4.list»

9)  

> Проиндексировать обновленное состояние репозитория:apt-get update

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image187.png" style="width:7.08681in;height:3.016in" />

Рисунок 5.7 – Индексация репозитория

10) 

> Установить СУБД «Jatoba» при помощи команды и подтвердить выполнение:apt-get install jatoba4-client jatoba4-contrib jatoba4-libs jatoba4-server

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image188.png" style="width:7.08681in;height:4.47569in" />

Рисунок 5.8 – Установка пакетов

11) 

> Установить дополнительный пакет СУБД «Jatoba» для ОС Astra Linux Special Edition 1.6 Смоленск при помощи команды и подтвердить выполнение:apt-get install jatoba4-astra-digsig-key

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image189.png" style="width:7.09651in;height:3.7965in" />

Рисунок 5.9 – Установка дополнительного пакета

> Установка дополнительного пакета сформирует файл «gazis_pub.key» в каталоге:
>
> /usr/jatoba-4/share
>
> <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image190.png" style="width:3.34213in;height:2.43463in" />

Рисунок 5.10 – Расположение файла «gazis_pub.key»

12) 

> Убедиться, что отсутствуют ошибки зависимостей:for f in \$(LANG=C find /usr/jatoba-4 -type f -exec file {} \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

13) 

Скопировать файл «gazis_pub.key»из каталога /usr/jatoba-4/share в каталог /etc/digsig/keys.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image191.png" style="width:1.71473in;height:0.96691in" />

Рисунок 5.11 – Содержание каталога /etc/digsig/keys

14) 

> Импортировать в систему открытый ключ «gazis_pub.key» командами:cd /etc/digsig/keys/
>
> gpg --import /etc/digsig/keys/gazis_pub.key

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image192.png" style="width:7.08681in;height:2.41045in" />

Рисунок 5.12 – Импорт открытого ключа

15) 

- 

> Выполнить переход в режим ЗПС с использованием терминала:Настроить конфигурационный файл «digsig_initramfs.conf»:sudo mcedit /etc/digsig/digsig_initramfs.conf

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image193.png" style="width:7.08681in;height:0.97015in" />

Рисунок 5.13 – Команда редактирования конфигурационного файла

В конфигурационном файле «digsig_initramfs.conf» должны быть установлены параметры:

> DIGSIG_ELF_MODE=1
>
> DIGSIG_XATTR_MODE=0
>
> DIGSIG_IGNORE_XATTR_KEYS=0
>
> DIGSIG_IGNORE_GOST2021=0

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image194.png" style="width:7.08681in;height:1.64179in" />

Рисунок 5.14 – Конфигурационный файл «digsig_initramfs.conf»

- 

> Применить текущие настройки «digsig_initramfs.conf» командой:sudo update-initramfs -u -k all

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image195.png" style="width:7.08681in;height:1.70895in" />

Рисунок 5.15 – Применение текущих настроек «digsig_initramfs.conf»

- 

> Перезапустите ОС командой:sudo reboot

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image196.png" style="width:7.08681in;height:0.99254in" />

Рисунок 5.16 – Перезагрузка ОС

Таким образом будет включен режим ЗПС.

- 

> После перезапуска ОС проверьте, что ELF mode – включен, а XATTR mode – отключен, выполнив команды:cat /sys/digsig/elf_mode
>
> cat /sys/digsig/xattr_mode

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image197.png" style="width:7.08681in;height:1.59702in" />

Рисунок 5.17 – Проверка параметров

16) 

> Перейти в директорию исполняемых файлов СУБД:cd /usr/jatoba-4/bin

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image198.png" style="width:7.08681in;height:1.11194in" />

Рисунок 5.18 – Переход в каталог

17) 

> Инициализировать каталог данных СУБД при помощи команды:./jatoba-setup initdb jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image199.png" style="width:7.08681in;height:1.425in" />

Рисунок 5.19 – Инициализация СУБД

18) 

> Добавить сервис в список автозапуска:systemctl enable jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image200.png" style="width:7.08681in;height:1.41791in" />

Рисунок 5.20 – Добавление сервиса jatoba-4 в автозагрузку ОС

19) 

> Запустить службу:systemctl start jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image201.png" style="width:7.08681in;height:1.10448in" />

Рисунок 5.21 – Запуск службы jatoba-4

20) 

> Проверить статус службы:systemctl status jatoba-4

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image202.png" style="width:7.08681in;height:2.25373in" />

Рисунок 5.22 – Проверка статуса службы jatoba-4

21) 

> Установить пароль для системного пользователя ОС «postgres»:sudo passwd postgres

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image203.png" style="width:7.08681in;height:1.53731in" />

Рисунок 5.23 – Установка пароля для пользователя ОС

22) 

> Авторизоваться в psql, для этого нажать сочетание клавиш:CTRL + D
>
> затем войти в psql:
>
> su - postgres
>
> psql

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image204.png" style="width:7.08681in;height:1.88961in" />

Рисунок 5.24 – Вход в СУБД

23) 

> Установить пароль для пользователя СУБД «postgres»:\password

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image205.png" style="width:7.08681in;height:1.42537in" />

Рисунок 5.25 – Установка пароля для пользователя СУБД

На этом этапе установка СУБД окончена.

### 

<span id="_Toc215498586" class="anchor"></span>Удаление СУБД «Jatoba» из локального репозитория в ОС Действия выполняемые для удаления СУБД «Jatoba» из локального репозитория аналогичны действиям, описанным в Приложении Приложение 2 настоящего документа.

## 

### 

<span id="_Toc215498587" class="anchor"><span id="_Toc215498588" class="anchor"></span></span>Установка СУБД «Jatoba» из локального репозитория в ОС ОСНОВА 2.0Перед началом установки должен быть скопирован дистрибутив в каталог /localrepo.

При установке открытого ключа репозитория требуется отключить режим ЗПС либо обеспечить работу утилиты apt-key в условиях ЗПС.

Установка СУБД «Jatoba» из локального репозитория в ОС ОСНОВА 2.0 выполняется следующими шагами:

1)  

> Проверить статус включенного режима ЗПС:ls -al /etc/ima/policy

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image206.png" style="width:6.88542in;height:0.87013in" />

Рисунок 6.1 – Команда проверки статуса ЗПС

Вывод имеет два значения:

- 
- 

2)  

> /etc/ima/policy -\> policy.d/empty – выключен (по умолчанию);/etc/ima/policy -\> policy.d/appraise – включен.Выполнить обновление системы:apt-get update -y & apt-get upgrade -y

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image207.png" style="width:6.88542in;height:2.50649in" />

Рисунок 6.2 – Команда обновления системы

3)  

> Добавить репозиторий jatoba с отключенным режимом ЗПС:apt-key add /localrepo/DEB-GPG-KEY-Jatoba

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image208.png" style="width:6.88542in;height:1.07792in" />

Рисунок 6.3 – Команда добавления репозитория

4)  

> Добавить описание локального репозитория в систему:nano /etc/apt/sources.list.d/jatoba-<ver>.list

5)  

Вставить в файл следующее содержимое и сохранить:<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image209.png" style="width:6.88542in;height:0.9026in" />

Рисунок 6.4 – Содержание файла jatoba-<ver>.list

6)  

> Проиндексировать обновленное состояние репозитория:apt-get update

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image210.png" style="width:6.88542in;height:2.16234in" />

Рисунок 6.5 – Команда индексирования репозитория

7)  

> В ОС включить режим ЗПС командами:sudo rm /etc/ima/policy
>
> sudo ln -s /etc/ima/policy.d/appraise /etc/ima/policy

8)  

> Применить обновленные настройки и перезагрузить ОС:sudo update-initramfs -u -k all
>
> sudo reboot

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image211.png" style="width:6.88542in;height:1.21428in" />

Рисунок 6.6 – Команды включения режима ЗПС

9)  

> Установить пакет osnova-digsig-key:apt install jatoba5-osnova-digsig-key

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image212.png" style="width:6.88542in;height:3.60417in" />

Рисунок 6.7 – Команда установки пакета osnova-digsig-key

10) 

> Применить обновленные настройки:update-initramfs -u -k all

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image213.png" style="width:6.88542in;height:0.93507in" />

Рисунок 6.8 – Команда применения настроек

11) 

> Перезагрузить систему:reboot

12) 

> После авторизации войти в режим суперпользователя, выполнив команду:sudo su

13) 

> Проверить статус режима ЗПС:ls -al /etc/ima/policy

В выводе команды режим ЗПС должен быть включен, т.е. иметь значение «appraise»:

> /etc/ima/policy -\> policy.d/appraise

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image214.png" style="width:6.88542in;height:0.97403in" />

Рисунок 6.9 – Вывод статуса ЗПС

14) 

> Установить пакет osnova-digsig-key:apt install jatoba<ver>-osnova-digsig-key

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image215.png" style="width:6.88542in;height:2.01948in" />

Рисунок 6.10 – Команда установки пакета osnova-digsig-key

15) 

> Добавить публичный ключ:cp /usr/jatoba-<ver>/share/gaz-is.der /etc/ima/certs

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image216.png" style="width:6.88542in;height:0.68831in" />

Рисунок 6.11 – Команда копирования публичного ключа

16) 

> Обновить данные:update-initramfs -u -k all

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image217.png" style="width:6.88542in;height:0.92208in" />

Рисунок 6.12 – Команда применения настроек

17) 

> Перезагрузить систему:reboot

18) 

> После авторизации войти в режим суперпользователя, выполнив команду:sudo su

19) 

> Установить СУБД Jatoba при помощи команды:apt-get install jatoba<ver>-client jatoba<ver>-contrib jatoba<ver>-libs jatoba<ver>-server

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image218.png" style="width:6.88542in;height:3.32468in" />

Рисунок 6.13 – Команда установки основных пакетов СУБД «Jatoba»

20) 

> Убедиться, что отсутствуют ошибки зависимостей:for f in \$(LANG=C find /usr/jatoba-<ver> -type f -exec file {} \\ \| grep "ELF 64-bit LSB" \| awk 'BEGIN {FS=":"} { print \$1}' \| sort); do echo \$f; ldd \$f \| grep "not found"; done

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image219.png" style="width:6.88542in;height:1.29221in" />

Рисунок 6.14 – Команда проверки зависимостей

21) 

> Перейти в директорию исполняемых файлов СУБД:cd /usr/jatoba-<ver>/bin

22) 

> Инициализировать каталог данных СУБД при помощи команды:./jatoba-setup initdb jatoba-\<версия\>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image220.png" style="width:6.88542in;height:1.08442in" />

Рисунок 6.15 – Команда инициализации СУБД

23) 

> Вывести права на директорию данных:stat /var/lib/jatoba/  
> stat /var/lib/jatoba/\<версия\>  
> stat /var/lib/jatoba/\<версия\>/data

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image221.png" style="width:6.88542in;height:1.87013in" />

Рисунок 6.16 – Команда вывода прав доступа

В выводе команд должны отразится права на доступ:

- 
- 

24) 

> Uid: postgres;Gid: postgres.Добавить сервис в список автозапуска:systemctl enable jatoba-<ver>

25) 

> Запустить службу:systemctl start jatoba-<ver>

26) 

> Проверить статус службы:systemctl status jatoba-<ver>

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image222.png" style="width:6.88542in;height:1.70779in" />

Рисунок 6.17 – Запуск службы jatoba-<ver> и проверка ее статуса

27) 

> Проверить наличие подписи в исполняемых файлах:evmctl show /usr/jatoba-<ver>/bin/initdb

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image223.png" style="width:6.88542in;height:2.29221in" />

Рисунок 6.18 – Вывод подписи в исполняемых файлах

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/install/media/image2.png" style="width:0.25139in;height:0.25139in" /> | При установке стороннего ПО, например КриптоПро, которое требуется для работы некоторых компонент СУБД, администратору необходимо обеспечить работоспособность этого ПО в условиях ЗПС (должно быть подписано). |
|----|----|

## 

### 

<span id="_Toc215498589" class="anchor"><span id="_Toc215498590" class="anchor"></span></span>Установка службы JDS.PasDoctor**Строка подключения к служебной БД JDS**

Для корректной работы службы ей требуется подключение к служебной БД «JDS». Строка подключения находится в файле «appsettings.json» и определяется ключом «ConnectionStrings:DefaultConnection».

**Установка в ОС Windows**

Для установки службы Windows рекомендуется использовать утилиту «sc.exe». Следует запускать службу под учетной записью «NetworkService».

Пример вызова «sc.exe» для установки службы с параметрами:

- 
- 
- 
- 

> имя службы «JDS.Doctor»;автоматический запуск;учетная запись «Network Service»;отображаемое имя «JDS Doctor».sc.exe create JDS.Doctor start= auto binpath= C:\Full\Path\To\JDS.PasDoctor.exe obj= "NT AUTHORITY\NetworkService" DisplayName= "JDS Doctor"

Вторая команда устанавливает описание для службы.

> sc.exe description JDS.Doctor "Служба для поиска и исправления проблем с производительностью и безопасностью СУБД. Для управления службой используйте раздел Jatoba Data Safe 'Производительность - Проблемы и решения'."

**Файлы журналов в ОС Windows**

По умолчанию служба сохраняет журналы в папке C:\ProgramData\JDS\logs. Никаких действий по созданию папки или назначению прав доступа не требуется.

**Установка в ОС Linux**

Для примера используется Ubuntu 23.04. В других дистрибутивах процедура установки может отличаться.

- 

> создать пользователя, под которым будет работать служба:sudo useradd –s /usr/sbin/nologin jds

- 

> создать папку для журналов (логов), назначить ей владельца и права:sudo mkdir /var/log/jds
>
> sudo chown jds:jds /var/log/jds
>
> sudo chmod 744 /var/log/jds

В некоторых дистрибутивах при создании пользователя «jds» группа «jds» не создаётся.

Для просмотра группы по умолчанию служит команда «groups jds».

- 

> создать сервис-файл /etc/systemd/system/jds-doctor.service со следующим содержимым:**\[Unit\]**
>
> Description=JATOBA DATA SAFE Doctor
>
> **\[Service\]**
>
> WorkingDirectory=/opt/jds-doctor
>
> ExecStart=/opt/jds-doctor/JDS.PasDoctor
>
> Restart=always
>
> RestartSec=10
>
> SyslogIdentifier=jds-doctor
>
> User=jds
>
> **\[Install\]**
>
> WantedBy=multi-user.target

- 

> разрешить и запустить сервис:sudo systemctl daemon-reload
>
> sudo systemctl enable jds-doctor
>
> sudo systemctl start jds-doctor

**Файлы журналов в Linux**

По умолчанию служба сохраняет журналы (логи) в папке /var/log/jds/. Папка должна быть предварительно создана, должен быть изменен владелец и назначены права (см. секцию «Установка в Linux»).

## 

| <span id="_Toc215498591" class="anchor"></span>Перечень сокращенийDDL | – | Data Definition Language — язык описания данных |
|----|----|----|
| DML | – | Data Manipulation Language — язык манипулирования данными |
| SQL | – | Structured Query Language — язык структурированных запросов |
| БД | – | База данных |
| ОЗУ | – | Оперативное запоминающее устройство |
| ОС | – | Операционная система |
| СУБД | – | Система управления базами данных |
| ЭВМ |  | Электронно-вычислительная машина |
| ЗПС | – | Замкнутая программная среда в ОС Astra Linux Special Edition 1.6 Смоленск — это механизм авторизации на основании контроля целостности файлов с использованием проверки ЭЦП, реализованный в модуле ядра ОС disgsig_verif |


[^1]: Номер версии уточняется при поставке изделия

[^2]: Номер версии уточняется при поставке изделия
