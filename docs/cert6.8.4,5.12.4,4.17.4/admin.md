**АННОТАЦИЯ**

Документ представляет собой руководство администратора системы управления базами данных «Jatoba» (далее по тексту – СУБД, СУБД «Jatoba»).

Руководство администратора содержит следующие разделы:

- раздел 1, в котором приведены назначение и функции СУБД «Jatoba» и требования к среде функционирования СУБД;
- раздел 2, в котором приведен состав СУБД «Jatoba»;
- раздел 3, в котором подготовка к установке СУБД «Jatoba»;
- раздел 4, в котором описана настройка параметров СУБД «Jatoba»;
- раздел 5, в котором описаны основные операции в СУБД «Jatoba»;
- раздел 6, в котором приведены настройки безопасности СУБД «Jatoba»;
- раздел 7, в котором приведена инструкция по резервному копированию и восстановлению баз данных;
- раздел 8, в котором приведена инструкция по созданию отказоустойчивого кластера СУБД «Jatoba»;
- раздел 9, в котором приведено описание восстановление поврежденных WAL записей;
- раздел 10, в котором приведено описание алгоритма KNN;
- раздел 11, в котором описано применение сертифицированных ОС для очистки памяти СУБД;
- раздел 12, в котором приведено описание компонента tsvector2; 
- раздел 13, в котором приведено описание компонента rum;
- раздел 14, в котором приведено описание компонента xid64;
- раздел 15, в котором приведены сообщения об ошибках;
- раздел 16, в котором приведена информация о действиях после сбоев и возникших ошибках при эксплуатации СУБД «Jatoba»;
- приложение Приложение 1, в котором приведены значения полей из файла pg_hba.conf;
- приложение Приложение 2, которое содержит перечень событий СУБД с распределением по категориям безопасности.



Степени важности примечаний, применяемые в документе:

:::warning Важная информация
**Важная информация** – указания, требующие особого внимания
:::

:::info Дополнительная информация
**Дополнительная информация** – указания, позволяющие упростить работу с изделием
:::

:::info Дополнительная информация
Все примеры в данном документе приведены для СУБД «Jatoba» версии ядра 4.x, для других версий все шаги выполняются аналогично, разница состоит в именах директорий.

Например, СУБД «Jatoba» версии 5.x по умолчанию устанавливается в директорию:
- ОС Windows – «C:\Program Files\GIS\Jatoba\5\bin»;
- ОС Linux – «/usr/jatoba-5/bin».
:::

:::warning Важная информация
Для сертифицированной версии СУБД «Jatoba» поддерживается работа только на ОС, указанных в формуляре на поставку!
:::

## Общие сведения о СУБД «Jatoba»

### Назначение СУБД «Jatoba»

СУБД «Jatoba» является программным средством, предназначенным для создания и управления реляционными базами данных (БД) на базе электронно-вычислительных машин (ЭВМ) под управлением операционных систем (ОС), представленных в таблице Таблица 1.1.

Таблица 1.1 – Поддерживаемые ОС

| **№** | **Наименование ОС** | **Серверная часть** | **Клиентская часть** | **Docker (ver.)** | **Сертификат ФСТЭК** |  |
|:--:|:---|:--:|:--:|:--:|:--:|:--:|
|  |  |  |  |  | **№ серт.** | **Дата выдачи** |
| 1 | Astra Linux 1.7 Special Edition Смоленск (x86-64) | Х | Х | 20.10.2 | 2557 | 30.01.2012 |
| 2 | Astra Linux 1.8 (x86-64) | Х | Х |  |  |  |
| 3 | Альт 8 СП | Х | Х | 20.10.11 | 3866 | 10.08.2018 |
| 4 | Альт 10 СП | Х | Х | 20.10.11 | 3866 | 10.08.2018 |
| 5 | ОСНОВА2 | Х | Х | 20.10.5 | 4381 | 31.03.2021 |
| 6 | РЕД ОС 7.3 Муром | Х | Х | 20.10.1 | 4060 | 12.01.2019 |

### Функции СУБД «Jatoba»

СУБД «Jatoba» реализует следующие функциональные возможности:

- управление данными во внешней памяти;
- управление данными в оперативной памяти;
- выполнение запросов (DDL/DML);
- управление транзакциями;
- журнализация изменений, резервное копирование и восстановление базы данных после сбоев, репликация.

СУБД «Jatoba» в дополнение к стандартным возможностям управления базами данных, реализует следующие функции:

- 
- 
- 
- 
- 
- 
- 
- 

хранение пространственных, географических и геометрических данных, поддержка запросов к ним и управление ими;синтаксическая совместимость с распространенными PL/SQL Oracle;расширенные возможности секционирования больших таблиц;протоколирование, анализ и контроль выполнения команд манипулирования данными (DDL/DML);сбор журналов аудита всех операций и загрузка конфигураций в СУБД;работа в составе отказоустойчивого кластера с механизмом переключения нагрузки на основной узел кластера;защита от несанкционированного изменения конфигурационных файлов;единый пользовательский интерфейс для управления конфигурациями компонентов и просмотра их состояния СУБД.

### Требования к среде функционирования СУБД «Jatoba»

СУБД «Jatoba» устанавливается на ЭВМ с процессорами, имеющими архитектуру x86, x86-64 и AMD64, удовлетворяющие следующим аппаратным требованиям, указанным в таблице Таблица 1.2.

Таблица . – Программные и аппаратные требования к средствам вычислительной техники, на которых функционируют клиентская и серверная часть СУБД

<table>
<colgroup>
<col style="width: 37%" />
<col style="width: 49%" />
<col style="width: 12%" />
<col style="width: 0%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Характеристика</strong></th>
<th style="text-align: center;"><strong>Серт. ОС</strong></th>
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
<td style="text-align: center;">Google Chrome;Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;">Яндекс.Браузер;Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;">Chromium;Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;">Mozilla Firefox;Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;">Opera;Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;"><ul>
<li></li>
</ul></td>
<td style="text-align: center;">Microsoft Edge</td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

#### Обеспечение контроля разрешений на действия пользователей, до и после идентификации и аутентификации

На уровне информационной системы для пользователей СУБД должно быть запрещено вносить несанкционированные изменения в объекты СУБД без идентификации и аутентификации.

Со стороны СУБД «Jatoba» контроль разрешений на действия пользователей, до и после идентификации и аутентификации осуществляется следующими методами:

1)  
2)  
3)  

- 
- 
- 
- 

В соответствии с Условиями эксплуатации отраженными в п. 3.12.10 Формуляра 643.72410666.00067-07 30 01, запрещено применения метода аутентификации «Trust», который предполагает, что любой подключающийся к серверу пользователь авторизован для доступа к базе данных вне зависимости от указанного имени пользователя базы данных.Экосистема компонентов СУБД «Jatoba» позволяет выполнять централизованное управление всеми установками СУБД компонентом пользовательского веб-интерфейса для администраторов «Jatoba data safe».Компонент пользовательского веб-интерфейса для администраторов «Jatoba data safe» при использовании функциональных возможностей разделов:раздел «Роли БД» (DB roles) предназначен для управления учетными записями пользователей и в частности назначения групповых ролей, что определяет набор прав и привилегий пользователя в СУБД;разделы «Анализ рисков» (UserRisk) и «Матрица доступа» (Access matrix) позволяют контролировать назначаемые атрибуты и системные привилегии пользователям СУБД;подраздел «Список событий» (Event List) аккумулирует события СУБД со всех установок СУБД;раздел «Уведомления» (Notifications) позволяет поставить под контроль любые действия пользователей и администраторов СУБД.

## Состав СУБД «Jatoba»

В состав СУБД «Jatoba» входят компоненты, указанные в таблице Таблица 2.1.

Таблица . – Компоненты входящие в состав СУБД «Jatoba»

<table style="width:100%;">
<colgroup>
<col style="width: 5%" />
<col style="width: 20%" />
<col style="width: 40%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 4%" />
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
<td style="text-align: center;">2</td>
<td style="text-align: left;">jaDog</td>
<td style="text-align: left;">компонент управления режимом работы узлов кластера</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">3</td>
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
<td style="text-align: center;">4</td>
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
<td style="text-align: center;">5</td>
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
<td style="text-align: center;">6</td>
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
<td style="text-align: center;">7</td>
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
<td style="text-align: center;">8</td>
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
<td style="text-align: center;">9</td>
<td style="text-align: left;">Oracle_FDW (Foreign data wrapper for oracle)</td>
<td style="text-align: left;">компонент доступа к данным СУБД Oracle</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">10</td>
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
<td style="text-align: center;">11</td>
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
<td style="text-align: center;">12</td>
<td style="text-align: left;">JDV (Jatoba data vault)</td>
<td style="text-align: left;">компонент контроля субъектов доступа</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">13</td>
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
<td style="text-align: center;">14</td>
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
<td style="text-align: center;">15</td>
<td style="text-align: left;">PostGIS</td>
<td style="text-align: left;">компонент работы с географическими данными</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">16</td>
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
<td style="text-align: center;">17</td>
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
<td style="text-align: center;">18</td>
<td style="text-align: left;">pg_Cryogen</td>
<td style="text-align: left;">компонент компрессии данных СУБД</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">19</td>
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
<td style="text-align: center;">20</td>
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
<td style="text-align: center;">21</td>
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
<td style="text-align: center;">22</td>
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
<td style="text-align: center;">23</td>
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
<td style="text-align: center;">24</td>
<td style="text-align: left;">pg_ProBackup</td>
<td style="text-align: left;">компонент расширенного резервного копирования</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">25</td>
<td style="text-align: left;">PTrack</td>
<td style="text-align: left;">компонент расширенного резервного копирования</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">26</td>
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
<td style="text-align: center;">27</td>
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
<td style="text-align: center;">28</td>
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
<td style="text-align: center;">29</td>
<td style="text-align: left;">JDS (Jatoba data safe)</td>
<td style="text-align: left;">компонент пользовательского веб-интерфейса для администраторов</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">30</td>
<td style="text-align: left;">ja_Plan_Manager</td>
<td style="text-align: left;">компонент создания планов запросов в базах данных (БД), их оптимизации и экспорта в БД</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">31</td>
<td style="text-align: left;">ja_Hipe_Cluster</td>
<td style="text-align: left;">компонент высокопроизводительного кластера</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">32</td>
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
<td style="text-align: center;">33</td>
<td style="text-align: left;">pg_store_plans</td>
<td style="text-align: left;">компонент контроля выполненных планов запросов</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">34</td>
<td style="text-align: left;">Prometheus</td>
<td style="text-align: left;">система мониторинга различных программных систем и сервисов</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">35</td>
<td style="text-align: left;">jatoba*_node_exporter</td>
<td style="text-align: left;">компонент для снятия различных метрик с Linux-подобных операционных систем</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">36</td>
<td style="text-align: left;">jatoba*_postgres_exporter</td>
<td style="text-align: left;">компонент для снятия различных метрик с сервера PostgreSQL (Jatoba)</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">37</td>
<td style="text-align: left;">jatoba*_sql_exporter</td>
<td style="text-align: left;">компонент для расширения состава метрик, снимаемых с сервера PostgreSQL</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">38</td>
<td style="text-align: left;">Alertmanager</td>
<td style="text-align: left;">компонент управления и обработки оповещений в системе мониторинга Prometheus</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">39</td>
<td style="text-align: left;">ja_seceventlog</td>
<td style="text-align: left;">компонент записи событий информационной безопасности</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">40</td>
<td style="text-align: left;">rum</td>
<td style="text-align: left;">компонент поддерживающий обратный индекс с хранением позиционной информации и полнотекстовый поиск.</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
<tr>
<td style="text-align: center;">41</td>
<td style="text-align: left;">ja_Similar</td>
<td style="text-align: left;">компонент для полнотекстового поиска и определения похожих текстов</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
<td style="text-align: center;">Х</td>
</tr>
</tbody>
</table>

> Примечание:

- 
- 

Дистрибутив.Образ контейнера.

### Функциональные возможности и функциональные возможности по защите информации

#### Идентификация и аутентификация субъектов доступа и объектов доступа (ИАФ)

Функциональные возможности по идентификации и аутентификации пользователей (ИАФ.1) выполняются средствами СУБД и описаны в текущем документе:

*Руководство администратора 643.72410666.00067-07 95 01*

Установление характеристик пароля (ИАФ.4) обеспечивает компонент SecurityProfile, функциональные возможности которого описаны в текущем документе:

*Руководство администратора 643.72410666.00067-07 95 01*

#### Управление доступом субъектов доступа к объектам доступа (УПД)

Меры по управлению доступом субъектов доступа выполняются штатными средствами СУБД, описанными в данном документе:

*Руководство администратора 643.72410666.00067-07 95 01*

Функциональные возможности СУБД по заведению учетных записей пользователей (УПД.1) обеспечивает компонент «ja_Sync_LDAP». Описание компонента представлено в документе:

*Руководство по настройке. Часть 8. Синхронизация учетных записей служб каталогов и СУБД. Компонент «ja_Sync_LDAP» 643.72410666.00067-07 98 01-08*

Функциональной возможностью по назначению минимально необходимых прав и привилегий пользователям и администраторам (УПД.5) обладает компонент «Jatoba data vault». Описание компонента представлено в документе:

*Руководство по настройке. Часть 2. Контроль субъектов доступа. Компонент «Jatoba data vault» 643.72410666.00067-07 98 01-02*

#### Регистрация событий безопасности (РСБ)

Регистрация событий безопасности выполняется средствами СУБД. Для расширенного журналирования используется компонент pgAudit, функциональные возможности которого описаны в текущем документе:

*Руководство администратора 643.72410666.00067-07 95 01*

Управление передачей событий безопасности выполняется компонентом «ja_Log», функциональные возможности которого описаны в документе:

*Руководство по настройке. Часть 12. Централизованный сбор записей событий СУБД. Компонент «ja_Log» 643.72410666.00067-07 98 01-12*

Компонент «Jatoba data safe» осуществляет управление передачи событий, а также обеспечивает:

- 
- 
- 
- 

централизованное автоматизированное управление сбором, записью и хранением информации о событиях безопасности (РСБ.3);возможность просмотра и анализа информации о действиях отдельных пользователей в информационной системе (РСБ.8);постоянный и периодический контроль за состоянием целевых СУБД, уровнем их безопасности;управление кластером.Подробное описание компонента приведено в документе:

*Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe» 643.72410666.00067-07 98 01-07*

#### Обеспечение целостности информационной системы и информации (ОЦЛ)

Контроль целостности собственных компонентов по контрольным суммам осуществляется динамически в процессе работы СУБД (ОЦЛ.1) и обеспечивается компонентом *«ja_CSum»*. Описание компонента приведено в документе:

*Руководство по настройке. Часть 14. Компонент контроля целостности «ja_CSum» 643.72410666.00067-07 98 01-14*

#### Обеспечение доступности информации (ОДТ)

Обеспечение доступности информации достигается периодическим резервным копированием информации (ОДТ.4) и обеспечением возможности восстановления информации (ОДТ.5). Функции по защите информации выполняет компонент «pg_ProBackup». Описание приведено в документе:

*Руководство по настройке. Часть 4. Расширенное резервное копирование. Компонент «pg_ProBackup» 643.72410666.00067-07 98 01-04*

Обеспечение доступности информации также достигается кластеризацией серверов БД (ОДТ.6). Кластеризация БД может быть выполнена компонентом «jaDog». Описание компонента приведено в документе:

*Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog» 643.72410666.00067-07 98 01-01 (версия 1.4.2)*

*Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog» 643.72410666.00067-07 98 02-01 (версия 2.0)*

#### Компоненты, расширяющие функции управления данными

Прочие компоненты, расширяющие функциональные возможности СУБД, описаны в документах:

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

## *«Руководство по настройке. Часть 3. Формирование отчетов по журналам СУБД. Компонент «pgBadger» 643.72410666.00067-07 98 01-03»;«Руководство по настройке. Часть 5. Планирование заданий СУБД. Компонент «pg_Task» 643.72410666.00067-07 98 01-05»;«Руководство по настройке. Часть 6. Формирование отчетов производительности СУБД. Компонент «pg_Profile» 643.72410666.00067-07 98 01-06»;«Руководство по настройке. Часть 9. Обфускация кода PL/pgSQL. Компонент «PLsPgSQL» 643.72410666.00067-07 98 01-09»;«Руководство по настройке. Часть 10. Компрессия данных СУБД. Компонент «pg_Cryogen» 643.72410666.00067-07 98 01-10»;«Руководство по настройке. Часть 11. Высокопроизводительный кластер. Компонент «ja_Hipe_Cluster» 643.72410666.00067-07 98 01-11»;«Руководство по настройке. Часть 13. Поддержка платформы 1С 643.72410666.00067-07 98 01-13»;«Руководство по настройке. Часть 15. Балансировка подключений пользователей к СУБД. Компонент «jaPooler» 643.72410666.00067-07 98 01-15»;«Руководство по настройке. Часть 16. Обеспечение работы с СУБД Oracle. 643.72410666.00067-07 98 01-16»;«Руководство по настройке. Часть 17. Выявление и предотвращение исполнения нетипичных SQL-запросов. Компонент «SQL_Firewall» 643.72410666.00067-07 98 01-17»;«Руководство по настройке. Часть 18. Сокрытие информации в файлах данных СУБД. Компонент «Jatoba crypto access storage» 643.72410666.00067-07 98 01-18»;«Руководство по настройке. Часть 19. Формирование HTTP/HTTPS запросов из СУБД. Компонент «pgSQL-HTTP» 643.72410666.00067-07 98 01-19»;«Руководство по настройке. Часть 20. Компонент «TDS_FDW» 643.72410666.00067-07 98 01-20»;«Руководство по настройке. Часть 21. Управление планами запросов. Компонент «ja_Plan_Manager» 643.72410666.00067-07 98 01-21»;«Руководство по настройке. Часть 30. Запись событий информационной безопасности. Компонент ja_seceventlog» 643.72410666.00067-07 98 01-30».*Подготовка к установке СУБД «Jatoba»

Комплект установочных файлов СУБД «Jatoba» с документацией поставляется заказчику на установочном компакт-диске.

Перед началом установки необходимо:

- 
- 
- 

проверить комплектность поставки СУБД «Jatoba» в соответствии с требованиями раздела 4 документа «Защищенная система управления базами данных «Jatoba». Формуляр» 643.72410666.00067-07 30 01;провести визуальный осмотр компакт-диска с дистрибутивными файлами и эксплуатационной документацией на предмет повреждений;выполнить проверку информации, записанной на компакт-диске, на возможность чтения и соответствия имен файлов и их контрольных сумм, указанным в перечне файлов, приведенном в Приложении 1 к документу «Защищенная система управления базами данных «Jatoba». Формуляр» 643.72410666.00067-07 30 01.Контрольные суммы установочных файлов на дистрибутивном компакт-диске СУБД «Jatoba» получены с помощью программы фиксации и контроля исходного состояния программного комплекса «ФИКС» версии 2.0.2 (производитель ЗАО «ЦБИ-сервис») по алгоритму «Уровень-3».

Установка СУБД проводится в соответствии с документом «Защищенная система управления базами данных «Jatoba». Руководство по установке» 643.72410666.00067-07 97 01.

## Настройка параметров СУБД «Jatoba»

В данном разделе описываются основные параметры конфигурации, которые влияют на работу БД.

### Использование памяти

> shared_buffers (integer)

Задает объем разделяемой памяти, которую сервер баз данных будет использовать для размещения буферов со страницами файлов данных. Данная память будет совместно использоваться всеми процессами СУБД.

По умолчанию значение shared_buffers = 128 Mб, но может быть меньше, если такой объем не поддерживается операционной системой (определяется в процессе инициализации директории данных служебной утилитой initdb). Значение этого параметра не может быть меньше 128 Кб (килобайт) (минимум зависит от величины BLCKSZ – размер блока данных в файле данных, по умолчанию 8 Kб). Для хорошей производительности требуются большие значения.

После настройки данного параметра для вступления его в действие требуется перезапуск сервера.

При использовании сервера с объемом ОЗУ 1 Гб наиболее оптимальным начальным значением shared_buffers будет 25% от объема памяти. Увеличение shared_buffers обычно требует увеличения max_wal_size, чтобы растянуть процесс записи большого объема новых или измененных данных на больший промежуток времени.

При использовании сервера с объемом ОЗУ меньше 1 Гб стоит ограничиться меньшим процентом ОЗУ, чтобы оставить достаточно места операционной системе.

> huge_pages (enum)

Определяет, будут ли запрашиваться страницы большого размера (huge pages) из основной области разделяемой памяти.

При huge_pages = try (по умолчанию) сервер будет запрашивать выделение памяти страницами большого размера. Если сервер получит ошибку выделения памяти, то он вернется к стандартному поведению (выделение памяти страницами стандартного размера).

При huge_pages = on сервер не будет запущен, если в ОС не будет возможности выделять память страницами большого размера.

При huge_pages = off выделение памяти будет производиться страницами стандартного размера.

:::warning Важная информация
Данный параметр поддерживается только в ОС Linux и Windows. В остальных ОС значение try игнорируется.
:::

В результате использования страниц большого размера уменьшаются риски промахов в TLB кэше и процессор тратит меньше времени на преобразование адресов, что приводит к увеличению быстродействия.

Для того, чтобы пользователь мог использовать страницы большого размера в ОС Windows, необходимо дать пользователю Windows, от имени которого работает СУБД «Jatoba», право блокировки страниц в памяти (Lock Pages in Memory в управлении групповой политикой в Windows).

> temp_buffers (integer)

Задает максимальное число временных буферов для каждой сессии пользователя.

По умолчанию temp_buffers = 8 (8Mб = 1024 буфера).

Данный параметр можно изменить до первого обращения к временным таблицам в рамках сессии пользователя. После изменить значение этого параметра для текущей сессии будет невозможно.

В рамках сессии временные буферы выделяются по мере необходимости до достижения предела, который задан параметром temp_buffers. Если сессия не задействует временные буферы, то для него хранятся только дескрипторы буферов, которые занимают около 64 байт (в количестве temp_buffers). Если буфер используется, он будет дополнительно занимать 8192 байта (или BLCKSZ байт, в общем случае).

> max_prepared_transactions (integer)

Задает максимальное число транзакций, которые могут одновременно находиться в «подготовленном» состоянии.

По умолчанию max_prepared_transactions = 0 отключается механизм подготовленных транзакций. Задать данный параметр можно только при запуске сервера.

Если нет необходимости использовать подготовленные транзакции, следует обнулить параметр, чтобы не допустить непреднамеренного создания подготовленных транзакций. Если подготовленные транзакции используются, то max_prepared_transactions должен быть не меньше, чем max_connections для подготовки транзакции в каждом сеансе.

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Для ведомого сервера значение этого параметра должно быть больше или равно значению на ведущем. В противном случае, на ведомом сервере запросы будут запрещены. |
|----|----|

> work_mem (integer)

Задает объем памяти, который будет использоваться для внутренних операций сортировки и хэш-таблиц прежде чем будут задействованы временные файлы на диске.

По умолчанию work_mem = 4 (4 Мб). В сложных запросах может одновременно выполняться несколько операций сортировки или хэширования, при этом, указанный объем памяти может использоваться в каждой операции перед тем, как данные начнут перемещаться во временные файлы.

Общий объем памяти может превосходить значение work_mem. Операции сортировки используются для ORDER BY, DISTINCT и соединений слиянием.

> maintenance_work_mem (integer)

Задает максимальный объем памяти для операций обслуживания БД, таких как VACUUM, CREATE INDEX и ALTER TABLE ADD FOREIGN KEY.

По умолчанию maintenance_work_mem (integer) = 64 (64 Мб). Увеличение данного значения может привести к ускорению операций очистки и восстановления БД из копии.

При работе автовакуума объем памяти выделяется autovacuum_max_workers один раз, не рекомендуется устанавливать значение по умолчанию слишком большим. Управлять объемом памяти для автовакуума предпочтительно отдельно, изменяя autovacuum_work_mem.

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Для сбора идентификаторов мертвых кортежей VACUUM может использовать не более 1Гб памяти. |
|----|----|

> autovacuum_work_mem (integer)

Задает максимальный объем памяти, который будет использовать каждый рабочий процесс автовакуума.

При значении по умолчанию autovacuum_work_mem = -1 объем определяется значением maintenance_work_mem. Данный параметр не влияет на поведение команды VACUUM, которая может выполняться в других контекстах. Задать этот параметр можно только в postgresql.conf или в командной строке при запуске сервера. Увеличение autovacuum_work_mem до большего значения не повлияет на количество обнаруженных удаленных записей, которые автовакуум собирает при сканировании таблицы.

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Для сбора идентификаторов мертвых кортежей VACUUM может использовать не более 1Гб памяти. |
|----|----|

> max_stack_depth (integer)

Задает максимальную безопасную глубину стека для исполнителя.

По умолчанию max_stack_depth = 2 (2 Мб). Значение выбрано с запасом, переполнение стека невозможно за исключением выполнения сложных функций. Изменить этот параметр могут только суперпользователи.

Данное значение рекомендуется ставить равным предельному размеру стека, ограниченному ядром (который устанавливается командой ulimit –s или аналогичной), за вычетом запаса в 1 Мб. Запас необходим для потенциально рекурсивных процедур.

:::warning Важная информация
При превышении значения max_stack_depth фактического предела ядра, функция с неограниченной рекурсией сможет вызвать экстренное завершение работы отдельного процесса сервера.
:::

```
dynamic_shared_memory_type (enum)
```

Выбирает механизм динамической разделяемой памяти, который будет использоваться сервером:

- 
- 
- 
- 
- 

### при dynamic_shared_memory_type = posix происходит выделение разделяемой памяти POSIX функцией shm_open (данный механизм ставится по умолчанию);при dynamic_shared_memory_type = sysv происходит выделение разделяемой памяти System V функцией shmget;при dynamic_shared_memory_type = windows происходит выделение разделяемой памяти в Windows;при dynamic_shared_memory_type = mmap происходит эмуляция разделяемой памяти через отображение в память файлов, хранящихся в каталоге данных;при dynamic_shared_memory_type = none происходит отключение этой функциональности.Использование дискового пространства

> temp_file_limit (integer)

Задает максимальный объем дискового пространства, который сможет использовать один процесс для временных файлов, например, при сортировке и хэшировании или для сохранения удерживаемого курсора. Транзакция, которая попытается превысить этот предел, будет отменена.

По умолчанию temp_file_limit = -1 (-1Кб) означает, что предел отсутствует. Изменить данный параметр могут только суперпользователи.

Этот параметр ограничивает общий объем, который могут занимать в момент времени все временные файлы, которые задействованы в данном процессе СУБД.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /></th>
<th><p>Это не касается файлов явно создаваемых временных таблиц.</p>
<p>Ограничивается объем временных файлов, которые создаются неявно при выполнении запросов.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Использование ресурсов ядра

> max_files_per_process (integer)

Задает максимальное число файлов, которые могут быть одновременно открыты каждым серверным подпроцессом.

По умолчанию max_files_per_process = 1000 файлов. Задать этот параметр можно только при запуске сервера.

Если ядро реализует безопасное ограничение по процессам, то значение данного параметра можно не менять. На некоторых платформах ядро позволяет отдельному процессу открыть больше файлов, чем могут открыть несколько процессов одновременно. При возникновении ошибки «Too many open files», необходимо уменьшить значение параметра.

### Настройка режима вакуумизации на основе стоимостных оценок

Во время выполнения команд VACUUM и ANALYZE система ведет внутренний счетчик, в котором суммируется оцениваемая стоимость различных выполняемых операций ввода/вывода. При превышении накопленной стоимости vacuum_cost_limit, процесс, выполняющий эту операцию, отключается на время vacuum_cost_delay, после чего счетчик сбрасывается и процесс продолжается.

Данный подход реализован для снижения влияния этих команд на параллельную работу с базой, за счет уменьшения нагрузки на подсистему ввода-вывода. Важно, чтобы команды меньше влияли на выполнение других операций с базой данных. Данным процессом могут управлять администраторы.

По умолчанию данный режим отключен для выполняемых вручную команд VACUUM. Для его включения нужно установить в vacuum_cost_delay ненулевое значение.

> vacuum_cost_delay(integer)

Продолжительность времени, в течение которого будет простаивать процесс, превысивший предел стоимости.

По умолчанию vacuum_cost_delay = 0 (0 мс) – задержка очистки отсутствует. При положительных значениях интенсивность очистки будет зависеть от стоимости.

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 88%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /></th>
<th><p>Разрешение таймера vacuum_cost_delay должно быть кратно 10.</p>
<p>При настройке интенсивности очистки для vacuum_cost_delay выбираются небольшие значения (например, 10 или 20 мс). Для точного ограничения потребления ресурсов при очистке рекомендуется изменять другие параметры стоимости очистки.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

> vacuum_cost_page_hit (integer)

Примерная стоимость очистки буфера, оказавшегося в общем кэше. Содержит в себе блокировку пула буферов, поиск в хэш-таблице и сканирование содержимого страницы.

По умолчанию vacuum_cost_page_hit = 1.

> vacuum_cost_page_miss (integer)

Примерная стоимость очистки буфера, который нужно прочитать с диска. Содержит в себе блокировку пула буферов, поиск в хэш-таблице, чтение требуемого блока с диска и сканирование его содержимого.

По умолчанию vacuum_cost_page_miss = 10.

> vacuum_cost_page_dirty (integer)

Примерная стоимость очистки, при которой изменяется блок немодифицированный ранее. В данный параметр включается дополнительная стоимость ввода/вывода, связанная с записью измененного блока на диск.

По умолчанию vacuum_cost_page_dirty = 20.

> vacuum_cost_limit (integer)

Общая стоимость, при накоплении которой процесс очистки будет выключаться.

По умолчанию vacuum_cost_limit = 200.

:::warning Важная информация
Некоторые операции могут устанавливать критические блокировки и должны завершаться как можно быстрее. Во время таких операций задержка очистки по стоимости не осуществляется, поэтому накопленная за это время стоимость может быть больше установленного предела.
Во избежание ненужных длительных задержек фактическая задержка вычисляется по формуле:

```(vacuum_cost_delay * accumulated_balance) / vacuum_cost_limit ≤ vacuum_cost_delay * 4```
:::

### Настройка режима фоновой записи

В числе специальных процессов сервера есть процесс фоновой записи, задачей которого является осуществление записей новых или измененных («грязных») общих буферов на диск. При недостаточном количестве чистых общих буферов данный процесс записывает грязные буферы в файловую систему и помечает их как чистые. Процесс фоновой записи увеличивает общую нагрузку на подсистему ввода/вывода, так как может записывать изменяемую страницу несколько раз, хотя ее можно было бы записать один раз в момент контрольной точки.

> bgwriter_delay (integer)

Задает задержку между раундами активности процесса фоновой записи. Во время раунда процесс осуществляет запись определенного количества загрязненных буферов. Затем данный процесс выключается на время bgwriter_delay (в миллисекундах) и так повторяется. Если в пуле не остается загрязненных буферов, он может быть неактивен более длительное время.

По умолчанию bgwriter_delay = 200 (200мс). Задать параметр можно в postgresql.conf или в командной строке при запуске сервера.

> bgwriter_lru_maxpages (integer)

Задает максимальное число буферов, которое сможет записать процесс фоновой записи за раунд активности.

По умолчанию bgwriter_lru_maxpages = 100 (100 буферов).

При bgwriter_lru_maxpages = 0 фоновая запись отключается. Задать параметр можно в postgresql.conf или в командной строке при запуске сервера.

> bgwriter_lru_multiplier (floating point)

Число загрязненных буферов, записываемых в очередном раунде, которое зависит от количества новых буферов, требуемых серверным процессам в предыдущих раундах.

По умолчанию bgwriter_lru_multiplier = 2.0. Задать параметр можно в postgresql.conf или в командной строке при запуске сервера.

Значение bgwriter_lru_multiplier умножается на накопленное усредненное значение количества использованных буферов на предыдущих раундах и получается значение, равное количеству буферов для следующего раунда. Процесс фоновой записи пишет на диск и освобождает буферы до тех пор, пока число свободных буферов не достигнет целевого значения. Число буферов, которые записаны за раунд, ограничиваются параметром bgwriter_lru_maxpages.

> bgwriter_flush_after (integer)

При большем количестве байт, которые записываются процессом фоновой записи, чем bgwriter_flush_after, сервер посылает команду ОС произвести запись этих данных в нижележащее хранилище. Это ограничивает объем «грязных» данных в страничном кэше ядра и уменьшает вероятность затормаживания при выполнении fsync в конце контрольной точки, или когда ОС сбрасывает данные на диск большими порциями в фоне.

По умолчанию в ОС Linux bgwriter_flush_after = 512 (512 Кб). В других ОС bgwriter_flush_after = 0.

Параметр действует не на всех платформах и может принимать значение от 0 (управление отложенной записью отключается) до 2 Мб. Если BLCKSZ отличен от 8 Кб, максимальное значение корректируется пропорционально. Задать этот параметр можно только в postgresql.conf или в командной строке при запуске сервера.

### Настройка режима асинхронного поведения

> effective_io_concurrency (integer)

Задает допустимое число параллельных операций ввода/вывода, которые могут быть выполнены одновременно. Чем больше это число, тем больше операций ввода/вывода будет пытаться выполнить СУБД параллельно в отдельном сеансе. Допустимые значения находятся в интервале от 1 до 1000, а нулевое значение отключает асинхронные запросы ввода/вывода.

Для магнитных носителей начальным значением этого параметра будет являться число отдельных дисков, составляющих массив RAID 0 или RAID 1, в котором размещена база данных. Если база данных часто обрабатывает множество запросов в различных сеансах, то при небольших значениях дисковый массив может быть полностью загружен. При увеличении этого значения при полной загрузке дисков, это приведет к увеличению нагрузки на процессор.

По умолчанию effective_io_concurrency = 1, где данный параметр поддерживается, и effective_io_concurrency = 0 – в остальных. Значение можно переопределить для таблиц в определенном табличном пространстве, установив одноименный параметр табличного пространства.

> max_worker_processes (integer)

Задает максимальное число фоновых процессов, которое можно запустить в текущей системе.

По умолчанию max_worker_processes = 8. Параметр можно задать только при запуске сервера.

Для ведомого сервера значение данного параметра должно быть больше или равно значению на ведущем. В противном случае на ведомом сервере не будут разрешены запросы.

> max_parallel_workers_per_gather (integer)

Задает максимальное число рабочих процессов, которые могут запускаться одним узлом плана запроса Gather или Gather Merge (сбор результатов с рабочих процессов). Параллельные рабочие процессы берутся из пула процессов, который контролируется параметром max_worker_processes, в количестве, ограничиваемом значением max_parallel_workers. Запрошенное количество рабочих процессов может быть недоступно во время выполнения. В таком случае параметр будет выполняться с меньшим числом процессов, что может быть неэффективно.

По умолчанию max_parallel_workers_per_gather = 2.

При max_parallel_workers_per_gather = 0 отключается параллельное выполнение запросов.

Параллельные запросы потребляют больше ресурсов, чем непараллельные, так как каждый рабочий процесс является отдельным процессом. Рекомендуется это учитывать, выбирая значение параметра, а также настраивая другие параметры, управляющие использованием ресурсов.

> max_parallel_maintenance_workers (integer)

Задает максимальное число рабочих процессов, которые могут запускаться одной служебной командой. Параллельные рабочие процессы берутся из пула процессов, который контролируется параметром max_worker_processes, в количестве, ограничиваемом значением max_parallel_workers. Запрошенное количество рабочих процессов может быть недоступно во время выполнения. В таком случае служебная операция будет выполняться с меньшим числом процессов, чем ожидалось.

По умолчанию max_parallel_maintenance_workers = 2.

При max_parallel_maintenance_workers = 0 отключается использование параллельных исполнителей служебными командами.

Параллельно выполняемые служебные команды не должны потреблять значительно больше памяти, чем равнозначные непараллельные операции. Это отличает их от параллельных запросов, при выполнении которых ограничения ресурсов действуют на отдельные рабочие процессы.

> max_parallel_workers (integer)

Задает максимальное число рабочих процессов, которое система сможет поддерживать для параллельных операций.

По умолчанию max_parallel_workers = 8.

Значение данного параметра, которое превышает значение max_worker_processes, не будет действовать, так как параллельные рабочие процессы берутся из пула рабочих процессов, ограничиваемого этим параметром.

> backend_flush_after (integer)

Если при одном обслуживающем процессе записывается больше чем backend_flush_after байт, сервер дает указание ОС произвести запись этих данных в нижележащее хранилище. Это ограничивает объем «грязных» данных в страничном кэше ядра и уменьшает вероятность затормаживания при выполнении fsync в конце контрольной точки или, когда ОС сбрасывает данные на диск большими порциями в фоне.

По умолчанию backend_flush_after = 0, процесс отключен.

Параметр действует не на всех платформах и может принимать значение от 0 (управление отложенной записью отключается) до 2 Мб. Если BLCKSZ отличен от 8 Кб, максимальное значение корректируется пропорционально.

> old_snapshot_threshold (integer)

Задает минимальное время, которое позволяет использовать снапшот без ошибки о давности снапшота. Данный параметр можно задать только при запуске сервера.

По умолчанию old_snapshot_threshold = -1 отключает этот процесс. Нужные значения для производственной среды могут лежать в интервале от нескольких часов до нескольких дней. Заданное значение округляется до минут. При многих видах нагрузки критичное замусоривание базы или зацикливание идентификаторов транзакций может происходить за меньший промежуток времени.

### Параметры межсетевого взаимодействия

СУБД «Jatoba» имеет клиент-серверную архитектуру. Для подключения к СУБД используются протоколы Libpq и Jadog.

Libpq – протокол, который используется для подключения к БД пользователей. Протокол Libpq реализован в виде драйвера «Driver Libpq» и обязательно требуется для работы приложений с СУБД. Дополнительно можно использовать ODBC драйвера, если приложения поддерживают подключение к СУБД через API ODBC.

Jadog – проприетарный протокол, используется для подключения к СУБД привилегированных пользователей, который обеспечивает взаимодействие между СВТ и сервером СУБД в среде функционирования изделия. При этом не используется драйвер протокола Libpq. Инициирование подключения осуществляет клиентское приложение.

Протоколы Libpq и Jadog используют стек протоколов TCP/IP и Unix-сокеты в клиент-серверном исполнении Изделия.

Параметры стека протоколов приведены в таблице Таблица 4.1.

Таблица . – Параметры протоколов используемых СУБД

<table>
<colgroup>
<col style="width: 21%" />
<col style="width: 40%" />
<col style="width: 19%" />
<col style="width: 17%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Компонент</strong></th>
<th style="text-align: center;"><strong>Наименование протокола</strong></th>
<th style="text-align: center;"><strong>Протокол</strong></th>
<th style="text-align: center;"><strong>Порты</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="7"><strong>СУБД</strong></td>
<td>Database port (db_port)</td>
<td style="text-align: left;">Libpq</td>
<td>5432</td>
</tr>
<tr>
<td rowspan="2">Аутентификации LDAP</td>
<td style="text-align: left;">LDAP</td>
<td>389 (AD, ALD Pro, FreeIPA) по умолчанию</td>
</tr>
<tr>
<td style="text-align: left;">LDAPS</td>
<td><p>636 (SAMBA)</p>
<p>по умолчанию</p></td>
</tr>
<tr>
<td style="text-align: left;">Аутентификации GSSAPI</td>
<td style="text-align: left;">NTLM/Kerberos</td>
<td style="text-align: left;">88, 445</td>
</tr>
<tr>
<td>Аутентификации SSPI</td>
<td style="text-align: left;">NTLM/Kerberos</td>
<td>88, 445</td>
</tr>
<tr>
<td>Аутентификации Radius</td>
<td style="text-align: left;">Radius</td>
<td>1812, 1813</td>
</tr>
<tr>
<td style="text-align: left;">Аутентификации TLS/SSL (сертификаты)</td>
<td style="text-align: left;">TLS/SSL</td>
<td>5432</td>
</tr>
<tr>
<td rowspan="4" style="text-align: left;"><strong>jaDog</strong></td>
<td>Jadog TCP port (user_interface)</td>
<td style="text-align: left;">TCP</td>
<td>54321, 54322</td>
</tr>
<tr>
<td>Jadog PORT number (port)</td>
<td style="text-align: left;">Jadog</td>
<td>12345, (Custom)</td>
</tr>
<tr>
<td style="text-align: left;">Jadog searching protocol port (jadog_search_port)</td>
<td style="text-align: left;">Jadog</td>
<td>12346</td>
</tr>
<tr>
<td style="text-align: left;">REST API</td>
<td style="text-align: left;">REST API</td>
<td style="text-align: left;">54443</td>
</tr>
<tr>
<td rowspan="2" style="text-align: left;"><strong>ja__Hipe_Cluster</strong></td>
<td>Database port (db_port)</td>
<td style="text-align: left;">Libpq</td>
<td>5432</td>
</tr>
<tr>
<td>Протокол аутентификации SSL</td>
<td style="text-align: left;">SSL</td>
<td>5432, 443</td>
</tr>
<tr>
<td style="text-align: left;"><strong>ja_Inventory</strong></td>
<td>Database port (db_port)</td>
<td style="text-align: left;">Libpq</td>
<td>5432</td>
</tr>
<tr>
<td rowspan="2" style="text-align: left;"><strong>ja_Log</strong></td>
<td>Database port (db_port)</td>
<td style="text-align: left;">Libpq</td>
<td>5432</td>
</tr>
<tr>
<td>Протокол аутентификации SSL</td>
<td style="text-align: left;">SSL</td>
<td>443, 10051</td>
</tr>
<tr>
<td rowspan="2" style="text-align: left;"><strong>ja_Sync_Ldap</strong></td>
<td rowspan="2">Протокол аутентификации LDAP</td>
<td style="text-align: left;">LDAP</td>
<td style="text-align: left;">389 (AD, ALD Pro, FreeIPA) по умолчанию</td>
</tr>
<tr>
<td style="text-align: left;">LDAPS</td>
<td style="text-align: left;"><p>636 (SAMBA)</p>
<p>по умолчанию</p></td>
</tr>
<tr>
<td rowspan="10" style="text-align: left;"><strong>JDS</strong></td>
<td>Database port (db_port)</td>
<td style="text-align: left;">Libpq</td>
<td style="text-align: left;">5432</td>
</tr>
<tr>
<td>Протокол передачи данных HTTPS</td>
<td style="text-align: left;">HTTPS</td>
<td style="text-align: left;">443, 5000</td>
</tr>
<tr>
<td>Протокол передачи данных HTTP</td>
<td style="text-align: left;">HTTP</td>
<td>9000</td>
</tr>
<tr>
<td>Протокол электронной почты</td>
<td style="text-align: left;">SMTP</td>
<td>25, 587</td>
</tr>
<tr>
<td>Протокол аутентификации SSL</td>
<td style="text-align: left;">SSL</td>
<td>464</td>
</tr>
<tr>
<td>Протокол передачи сообщений на веб-сервер ZULIP</td>
<td style="text-align: left;">ZULIP</td>
<td>443</td>
</tr>
<tr>
<td>Протокол удалённого управления операционной системой</td>
<td style="text-align: left;">SSH</td>
<td>22</td>
</tr>
<tr>
<td>Jadog PORT number (port)</td>
<td style="text-align: left;">Jadog</td>
<td>12345, (Custom)</td>
</tr>
<tr>
<td>Протокол аутентификации LDAP</td>
<td style="text-align: left;">LDAP</td>
<td><p>389 (AD, ALD Pro, FreeIPA),</p>
<p>636 (SAMBA)</p></td>
</tr>
<tr>
<td>Database port (db_port)</td>
<td style="text-align: left;">Libpq</td>
<td>5433</td>
</tr>
<tr>
<td rowspan="2"><strong>Prometheus</strong></td>
<td>Протокол передачи данных HTTP</td>
<td style="text-align: left;">HTTP</td>
<td>9090</td>
</tr>
<tr>
<td>Протокол удалённого управления операционной системой</td>
<td style="text-align: left;">SSH </td>
<td style="text-align: left;">22</td>
</tr>
<tr>
<td rowspan="3"><strong>Alert manager</strong></td>
<td>Протокол передачи данных HTTP</td>
<td style="text-align: left;">HTTPS</td>
<td>9093</td>
</tr>
<tr>
<td>Протокол удалённого управления операционной системой</td>
<td style="text-align: left;">SSH </td>
<td>22</td>
</tr>
<tr>
<td>Протокол электронной почты</td>
<td style="text-align: left;">SMTP</td>
<td>25</td>
</tr>
<tr>
<td><strong>node_exporter</strong></td>
<td>Протокол передачи данных HTTP</td>
<td style="text-align: left;">HTTP</td>
<td>9100</td>
</tr>
<tr>
<td rowspan="2"><strong>postgres_exporter</strong></td>
<td>Протокол передачи данных HTTP</td>
<td style="text-align: left;">HTTP</td>
<td>9187</td>
</tr>
<tr>
<td>Database port (db_port)</td>
<td style="text-align: left;">Libpq</td>
<td>5432</td>
</tr>
<tr>
<td rowspan="2"><strong>sql_exporter</strong></td>
<td>Протокол передачи данных HTTP</td>
<td style="text-align: left;">HTTP</td>
<td>9399</td>
</tr>
<tr>
<td>Database port (db_port)</td>
<td style="text-align: left;">Libpq</td>
<td>5432</td>
</tr>
<tr>
<td rowspan="2"><strong>pg_ProBackup</strong></td>
<td>Database port (db_port)</td>
<td style="text-align: left;">Libpq</td>
<td>5433</td>
</tr>
<tr>
<td>Протокол удалённого управления операционной системой</td>
<td style="text-align: left;">SSH </td>
<td style="text-align: left;">22</td>
</tr>
<tr>
<td><strong>pgSQL-HTTP</strong></td>
<td>Протокол передачи данных HTTP</td>
<td style="text-align: left;">HTTP</td>
<td style="text-align: left;">80, 443, Custom proxy port</td>
</tr>
</tbody>
</table>

Клиентское приложение образует с серверной частью СУБД канал (сессию) взаимодействия по специальным протоколам, основанным на сообщениях.

Пользователи БД используют протокол Libpq и порт 5432.

Администратор СУБД и администраторы БД используют протокол Jadog. Подключение к СУБД может происходить по портам 54321 и 54322. В качестве резервного интерфейса подключения может использоваться подключение по протоколу Libpq на порт 5432.

Схема подключения представлена на рисунке Рисунок 4.1.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image3.png)

Рисунок . – Интерфейсы подключения СУБД

Протокол HTTPS по порту 443 используется для взаимодействия компонента «Jatoba Data Safe» с СУБД и служебной СУБД.

#### Основные параметры, связанные с настройкой сети

> listen_addresses (string)

Указывает TCP/IP-адреса, по которым сервер будет принимать подключения клиентских приложений. Значение принимает форму списка имен и/или числовых IP-адресов компьютеров, разделенную запятыми. Специальный элемент \* обозначает все доступные IP-интерфейсы. Запись 0.0.0.0 позволяет задействовать все адреса IPv4, а :: – позволяет задействовать все адреса IPv6. Если список пуст, сервер не будет привязываться ни к какому IP-интерфейсу, в этом случае подключиться к нему можно будет только через Unix-сокеты.

По умолчанию – localhost, что позволяет устанавливать подключение к серверу по TCP/IP только через локальный интерфейс «замыкания». Параметр можно задать только при запуске сервера.

> port (integer)

TCP-порт, запускаемый сервером.

По умолчанию – 5432.

Порт используется для всех IP-адресов, через которые сервер принимает подключения. Параметр можно задать только при запуске сервера.

> max_connections (integer)

Определяет максимальное количество одновременных подключений к серверу БД.

По умолчанию – 100 подключений. Это число может быть меньше, если настройки ядра накладывают ограничения (определяется в процессе initdb). Параметр можно задать только при запуске сервера.

Максимальное значение количество одновременных подключений к серверу БД составляет - 262 143 подключенний.

Для ведомого сервера значение параметра должно быть больше или равно значению на ведущем. В обратном случае запросы на ведомом сервере не будут разрешены.

> superuser_reserved_connections (integer)

Определяет количество «слотов» подключений, зарезервированных для соединений суперпользователями. Одновременно могут быть активны не более max_connections подключений. Когда число активных одновременных подключений  
≥ max_connections – superuser_reserved_connections, новые подключения принимаются только для суперпользователей, все остальные подключения, в том числе подключения для репликации, запрещаются.

По умолчанию резервируются три соединения. Это значение должно быть  
\< max_connections –max_wal_senders. Задать этот параметр можно только при запуске сервера.

> unix_socket_directories (string)

Задает каталог Unix-сокета, через который сервер будет принимать подключения клиентских приложений. Можно создать несколько сокетов, перечислив в этом значении несколько каталогов через запятую. Пробелы между записями игнорируются, если в пути каталога содержатся пробелы, его нужно прописать в двойных кавычках. При пустом значении сервер не будет работать с Unix-сокетами, в этом случае к нему можно подключиться только по TCP/IP.

Значение по умолчанию обычно /tmp. Его можно изменить во время сборки. Задать параметр можно только при запуске сервера.

В дополнение к самому файлу сокета, который называется .s.PGSQL.nnnn  
(где nnnn – номер порта сервера), в каждом каталоге unix_socket_directories будет создан обычный файл с именем .s.PGSQL.nnnn.lock. Ни один из файлов нельзя удалять вручную.

Этот параметр не действует в ОС Windows, так как в ней нет Unix-сокетов.

### Настройка производительности СУБД «Jatoba»

> std_fuzz_factor(numeric)

Глобальный параметр «std_fuzz_factor» позволяет расширить диапазон оценок планов при сравнении различных планов-кандидатов и таким образом, включить больше планов в кандидаты на выяснение лучшего.

Чем больше значение параметра «std_fuzz_factor», тем больше кандидатов будет рассматривать планировщик запросов. В результате в список кандидатов могут быть включены более оптимальные планы с потенциально большей производительностью, но схожие по оценке с другими кандидатами. Таким образом, регулируя значение параметра может повышаться общая производительность СУБД и скорость исполнения запросов.

Значением по умолчанию параметра является – «1,01». Возможный диапазон значений параметра «std_fuzz_factor» варьируется от 0,9 до 1,9.

Увеличение значение параметра приводит к возрастанию временных затрат на формирование планов запросов. Эффективное значение параметра определяется практической эксплуатацией в зависимости от сложности выполняемых запросов в СУБД.

### Поддержка возможности включения принудительной очистки высвобождаемых блоков в файлах данных (Data wiping/Zeroing)

СУБД «Jatoba», используя средства сертифицированных ОС, приведенные в таблице Таблица 1.1, обеспечивает удаление:

- 
- 

баз данных и журналов;объектов доступа базы данных;используемых СУБД, путем:

- 
- 

многократной перезаписи уничтожаемых (стираемых) объектов файловой системы специальными битовыми последовательностями;перезаписи модифицированных участков объектов файловой системы при выполнении операции удаления или в отложенном режиме через промежуток времени.Что соответствует документу «Требования по безопасности информации к системам управления базами данных (выписка)», утвержденному приказом ФСТЭК России от 14.04.2023 № 64, в части требований к очистке памяти в СУБД.

Для реализации данного механизма требуется воспользоваться документацией на используемую ОС.

## Основные операции в СУБД «Jatoba»

### Создание ролей в БД

Роли баз данных являются глобальными для всей СУБД, не для отдельной БД.

При начальной установке СУБД содержит одну предопределенную роль postgres, обладающую максимальными привилегиями (SUPERUSER).

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Для создания других ролей нужно подключиться под ролью postgres. |
|----|----|

Создать роль возможно двумя способами:

- 

> SQL-командой:CREATE ROLE \<имя\>;

- 

> утилитой командной строки:createuser \<имя\>

Подключение к серверу БД выполняется от имени и с правами конкретной учетной записи с указанием конкретной БД.

Наличие доступа к объектам СУБД и БД, а также возможность выполнения команд, определяется назначенными роли атрибутов и системных привилегий.

### Удаление ролей в БД

Роль может быть удалена двумя способами:

- 

> SQL-командой:DROP ROLE \<имя\>;

- 

> утилитой командной строки:dropuser \<имя\>

Роли могут владеть объектами БД и иметь права доступа к объектам других пользователей. При удалении роли необходимо убедиться, что объекты, принадлежащие данной роли, были переданы другой роли или удалены.

Право владения объектами можно передавать в индивидуальном порядке с использованием команды ALTER. Например, для таблиц команда ALTER выглядит следующим образом:

> ALTER TABLE \<имя_таблицы\> OWNER TO \<принимающая_роль\>;

Переназначение владения для отдельных объектов может быть проблематичным, если в БД пользователя насчитывается большое количество объектов. Для переназначения права владения всеми объектами с удаляемой роли можно воспользоваться командой REASSIGN OWNED.

> REASSIGN OWNED BY \<удаляемая_роль\> TO \<новая_роль\>;

При удалении объектов, которыми владеет удаляемая роль, можно использовать следующие команды.

Для удаления отдельных объектов БД используется команда DROP. Например, для удаления отдельной таблицы:

```
DROP TABLE <имя_таблицы>;
```

Для массового удаления объектов, принадлежащих удаляемой роли, используется команда DROP OWNED.

```
DROP OWNED BY <удаляемая_роль>;
```

:::warning Важная информация
DROP OWNED не удаляет табличные пространства и базы данных целиком. Это необходимо сделать вручную, убедившись, что удаляемые данные не представляют ценности.
:::

### Создание БД

Для создания базы данных сервер СУБД «Jatoba» должен быть развернут и запущен.

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Пользователь, создающий БД, автоматически назначается ее владельцем. Владелец может удалить свою базу, что приведет к удалению всех объектов. Только пользователь, обладающий привилегиями CREATEDB и SUPERUSER, может создавать новые БД. |
|----|----|

Создать БД можно двумя способами:

- 

> SQL-командой:CREATE DATABASE \<имя\>;

Для выполнения команды CREATE DATABASE необходимо подключение к серверу баз данных. При установке СУБД всегда содержит служебную БД postgres, к которой необходимо подключиться для создания других БД.

- 

> Утилитой командной строки createdb. Если имя БД не указано в параметрах командной строки, то эта утилита создаст базу данных с именем текущего пользователя:createdb \<имя\>

В случае создания базы данных одним пользователем для другого пользователя и назначении его владельцем используется одна из следующих команд:

- 

> SQL-команда:CREATE DATABASE \<имя_базы\> OWNER \<имя_роли\>;

- 

> Утилита командной строки:createdb -O \<имя_роли\> \<имя_базы\>

### Удаление БД

Удалить базу данных могут только или владелец БД, или пользователь, обладающий максимальными привилегиями (SUPERUSER).

Удалить БД можно двумя способами:

- 

> SQL-командой:DROP DATABASE \<имя\>;

- 

> Утилитой командной строкиdropdb \<имя\>

Выполнить команду удаления БД невозможно, пока существует хоть одно подключение к базе.

:::warning Важная информация
При удалении БД удаляются все ее объекты. Удаление БД необратимая операция.
:::

### Создание внешнего ТП

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Пользователь, создающий внешнее ТП, автоматически назначается ее владельцем. Владелец ТП может удалить свое внешнее ТП. Только пользователь, обладающий привилегиями CREATE TABLESPACE и SUPERUSER, может создавать новые внешние ТП (см. п.п. 6.2.3). |
|----|----|

Создать внешнее табличное пространство (ТП) можно с помощью следующей команды:

> CREATE TABLESPACE 'name_tablespace' LOCATION '/path';

Где /path – путь к каталогу, в котором будет располагаться внешнее табличное пространство. Если указанный путь не существует внешнее ТП не будет создано.

**Пример:**

> CREATE TABLESPACE 'tablespace1_db1' LOCATION '/home/user_db1/tablespace1';

:::warning Важная информация
Пользователь ОС postgres должен иметь доступ на чтение/запись в указываемый каталог. Если у пользователя ОС postgres нет доступа к указываемому каталогу, то внешнее ТП не будет создано.
:::

:::warning Важная информация
Каталог, в котором должно располагаться внешнее ТП не должен содержать других внешних ТП. В этом случае при выполнении команды выше внешнее ТП не будет создано.
:::

После создания каталога внешнего ТП создается символическая ссылка c именем OID ТП в каталоге /var/lib/jatoba/6/data/pg_tblspc.

Для резервного узла кластера компонента «jaDog», куда копируется внешнее табличное пространство (ТП) с главного узла, указанный каталог не должен содержать внешних ТП. Например, если на главном узле внешнее ТП создано в каталоге /home/user_db1/tablespace1, то на резервном узле(ах) этот каталог должен быть пустым — соответствующее ТП там присутствовать не должно. При попытке копирования с главного узла создаваемое внешнее ТП в существующий каталог с другим внешним ТП на резервном узле возможно завершение работы сервисов компонента «jaDog». После устранения ограничения необходимо перезапустить сервисы компонента «jaDog» при помощи команды:

> systemctl restart jadog

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Не рекомендуется создавать вложенные друг в друга ТП – так как это может привести к ошибкам в работе служебных утилит pg_rewind, pg_basebackup и других. Например, при выполнении синхронизации pg_rewind возможно возникникновение ошибок порядка создания каталогов ТП. |
|----|----|

### Удаление внешнего ТП

Удалить внешнее ТП могут только или его владелец, или пользователь, обладающий максимальными привилегиями (SUPERUSER).

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Перед удалением внешнего ТП из него необходимо удалить объекты БД, относящейся к данному ТП. |
|----|----|

Удалить внешнее табличное пространство (ТП) можно с помощью следующей команды:

> DROPE TABLESPACE 'name_tablespace';

**Пример:**

> DROPE TABLESPACE 'tablespace1_db1';

При удалении каталога внешнего ТП удаляется символическая ссылка c именем OID ТП из каталога /var/lib/jatoba/6/data/pg_tblspc.

Процедура удаления внешнего ТП в обязательном порядке записывается в журналы информационной и системной безопасности.

В случае резервного узла кластера компонента «jaDog», на который выполнялось реплецирование внешнего ТП с главного узла, после удаления ТП и в процессе последующей синхронизации каталог ТП также будет удален.

## Настройка безопасности СУБД «Jatoba»

Ролевая модель СУБД должна соответствовать двум основным принципам:

- 
- 

Разумной достаточности;Назначению минимально необходимых прав и привилегий пользователям, администрторам и лицам, обеспечивающим функционирование (УПД.5).Контроль за выданными правами в СУБД доступно выполнять в копоненте «Jatoba data safe», в разделах:

- 
- 

Раздел «Матрица доступа» (Access matrix);Раздел «Анализ рисков» (User Risk).Как описано в документе, Руководство по настройке. Часть 7. Пользовательский веб-интерфейс для администраторов. Компонент «Jatoba data safe» 643.72410666.00067-07 98 01-07.

### Идентификация и аутентификация субъектов доступа

Идентификация пользователей в СУБД «Jatoba» осуществляется по уникальным именам. Для создания пользователей в СУБД «Jatoba» необходимо от учетной записи администратора СУБД выполнить следующую команду:

> CREATE ROLE \<имя учетной записи пользователя\>;

Аутентификация пользователей осуществляется с использованием паролей (метод аутентификации (md5, password)).

Для настройки аутентификации пользователей необходимо:

- 
- 

#### настроить конфигурационный файл pg_hba.conf под необходимый метод аутентификации;настроить парольную политику.Настройка конфигурационного файла pg_hba.conf

Для настройки конфигурационного файла pg_hba.conf необходимо выполнить следующие действия:

1)  
2)  

| От учетной записи администратора СУБД подключиться к ОС и открыть файл pg_hba.conf[^1]<sup>)</sup>.В открывшемся файле pg_hba.conf внести необходимые записи в определенном формате:TYPE | DATABASE | USER | ADDRESS | METHOD |
|----|----|----|:---|----|
| *local* | *база* | *пользователь* | −−−−−− | *метод-аутентификации* |
| *host* | *база* | *пользователь* | *адрес* | *метод-аутентификации* |
| *hostssl* | *база* | *пользователь* | *адрес* | *метод-аутентификации* |
| *hostnossl* | *база* | *пользователь* | *адрес* | *метод-аутентификации* |
| *host* | *база* | *пользователь* | *IP-адрес IP-маска* | *метод-аутентификации* |
| *hostssl* | *база* | *пользователь* | *IP-адрес IP-маска* | *метод-аутентификации* |
| *hostnossl* | *база* | *пользователь* | *IP-адрес IP-маска* | *метод-аутентификации* |

Значение полей из файла pg_hba.conf представлены в Приложении 1.

3)  

- 

> Перезагрузить сервис СУБД «Jatoba» в:ОС Windows Server при помощи команд:net stop JatobaServer;
>
> net start JatobaServer

- 

> ОС семейства GNU/Linux при помощи команды:systemctl restart jatoba-<ver>

#### Настройка SSL

СУБД «Jatoba» имеет возможность использования защищённого сетевого трафика и аутентификацию по SSL сертификату. Аутентификация клиента по SSL сертификату позволяет серверу проверить личность подключающегося, подтверждая, что сертификат X.509, представленный клиентом, подписан центром сертификации. Рекомендуется использовать только доверенные центры сертификации для выдачи сертификатов клиенту и серверу. Для установки SSL необходимо установить следующие конфигурационные параметры файла postgresql.conf:

> ssl = on
>
> ssl_cert_file = '/usr/jatoba-5/etc/jatoba/server.crt'
>
> ssl_key_file = '/usr/jatoba-5/etc/jatoba/server.key'
>
> ssl_ca_file = '/usr/jatoba-5/etc/jatoba/root.crt'

При выпуске серверного сертификата, поле ASN, а при его отсутствии CN, должно соответствовать доменному имени сервера или его IP-адресу. В Unix-подобных системах к файлу server.key должен быть запрещён любой доступ группы и всех остальных, чтобы установить такое ограничение, выполнить:

> chmod 0600 server.key

Файл pg_hba.conf для входящих IP-адресов должен содержать следующие строки:

```
# TYPE DATABASE USER ADDRESS METHOD
```
>
> hostssl all all \<ip6/mask\> cert clientcert=verify-full
>
> hostssl all all \<ip/mask\> cert clientcert=verify-full

Также с помощью файла pg_hba.conf изменяя значения колонок DATABASE и USER можно ограничить доступ до конкретной роли пользователя или БД.

Самая строгая степень проверки SSL сертификата: clientcert=verify-full. При этом типе авторизации проверяется соответствие значения поля CN пользовательского сертификата имени пользователя СУБД.

Если установлен параметр ssl_crl_file или ssl_crl_dir, также проверяются списки отзыва сертификатов.

Степень проверки clientcert=verify-ca указывает на проверку только подлинности входящего клиентского сертификата. А степень проверки clientcert=require указывает только на создание SSL соединения, без проверок подлинности X.509 сертификатов.

OpenSSL предоставляет набор шифров и алгоритмов аутентификации разной защищённости. Список шифров может быть задан в файле конфигурации OpenSSL. Также можно задать конкретные используемые в БД шифры, указав их в параметре ssl_ciphers в postgresql.conf.

Если в конфигурационном файле postgresql.conf установлен параметр ssl_crl_file или ssl_crl_dir, то X.509 сертификат проверяется в списках отзыва сертификатов: (Certificate Revocation List, CRL).

#### Настройка парольной политики. Компонент «securityprofile»

Существует два основных метода формирования парольной политики. Первый метод – это использование парольной политики по умолчанию. Второй метод – это формирование новой схемы «securityprofile».

:::warning Важная информация
Необходимо обратить внимание, что целесообразнее формировать парольную политику до создания учетных записей пользователей.
:::

:::warning Важная информация
После выполнения операций pg_dump/pg_dumpall и pg_restore - требуется сменить пароли для пользователей СУБД, как описано в п. 6.2.4, SQL-командой:

```АLTER ROLE &lt;имя учетной записи пользователя&gt; password '&lt;пароль пользователя&gt;';```
:::

Установка компонента SecurityProfile описана в документе «Защищенная система управления базами данных «Jatoba». Руководство по установке».

Использовать следующие функциональные возможности компонента SecurityProfile может привилегированный пользователь или пользователь имеющий право доступа к схеме «securityprofile»:

- 
- 
- 
- 
- 

##### смена пароля пользователя;снятие блокировки пользователя;создание профиля парольной политики;назначение пользователю профиля парольной политики;смена параметров профиля парольной политики и т.д.Параметры парольной политики по умолчанию

Парольная политика по умолчанию применяется активацией компонента SecurityProfile.

Для активации модуля в СУБД «Jatoba» необходимо выполнить следующие действия:

1)  
2)  

> От учетной записи администратора СУБД подключиться к ОС и открыть файл postgresql.conf[^2]<sup>)</sup>.В файле postgresql.conf прописать следующую строку:shared_preload_libraries = 'securityprofile'

:::warning Важная информация
Указание в конфигурационном файле postgresql.conf опции shared_preload_libraries = 'securityprofile’ активирует компонент управления парольными политиками и создается политика по умолчанию с именем «default».
:::

3)  

> В файле postgresql.conf прописать следующую строку:securityprofile.db_name = 'dbname'

Параметр «dbname» определяет имя БД, в которой будет создаваться или уже создано расширение sercurityprofile, значение по умолчанию postgres.

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Служебный фоновый процесс «securityprofile_bgworker_main» выполняет синхронизацию автоматически в БД, которая указана в параметре «securityprofile.db_name». |
|----|----|

4)  

> В файле postgresql.conf прописать параметры парольной политики, приведенные в таблице Таблица 6.1.

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image3.svg" style="width:0.25139in;height:0.25139in" /> | В случае, когда параметры парольной политики не будут прописаны в файле postgresql.conf, они буду применяться автоматически по умолчанию |
|----|----|

<table style="width:100%;">
<caption><p>Таблица . - Параметры профиля «default»</p></caption>
<colgroup>
<col style="width: 36%" />
<col style="width: 35%" />
<col style="width: 11%" />
<col style="width: 8%" />
<col style="width: 8%" />
<col style="width: 0%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Примечание</strong></th>
<th style="text-align: center;"><strong>Параметры в профиле по умолчанию</strong></th>
<th style="text-align: center;"><strong>Мин-е значение</strong></th>
<th style="text-align: center;"><strong>Макс-е значение</strong></th>
<th style="text-align: center;"></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="6" style="text-align: center;"><strong>Параметры для конфигурирования парольной политики</strong></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.profile_name</td>
<td style="text-align: center;">имя профиля по умолчанию</td>
<td style="text-align: center;">'default'</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_chars</td>
<td style="text-align: center;">пароль должен содержать указанные символы (набор символов не является обязательным и может быть изменен)</td>
<td style="text-align: center;">\!"#$%&amp;()*+,-./:;&lt;=&gt;?@[]^_`{|}~</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.lower_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символ в нижнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.upper_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символ в верхнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.numbers_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 цифру</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 спец. символ из заданного набора special_chars</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_length</td>
<td style="text-align: center;">минимальная длина пароля равна 6 символам</td>
<td style="text-align: center;">6</td>
<td style="text-align: center;">6</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.maximum_length</td>
<td style="text-align: center;">максимальная длина пароля равна 32 символам</td>
<td style="text-align: center;">32</td>
<td style="text-align: center;">6</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_changes</td>
<td style="text-align: center;">минимальное количество изменений, которое должен содержать новый пароль по сравнению с предыдущим</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts</td>
<td style="text-align: center;">количество неудачных попыток входа в СУБД</td>
<td style="text-align: center;">10</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_lock_time</td>
<td style="text-align: center;"><p>время, на которое блокируется пользователь в СУБД (1 час в секундах)</p>
<p>Значение «-1» означает, что не будет происходить блокировка пользователя на заданное время, т.е. отсутствие блокировки. В противном случае при нарушении политики профиля - пользователь блокируется на указанное в параметре время.</p></td>
<td style="text-align: center;">3600</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts_max_time_sec</td>
<td style="text-align: center;">время в течении которого допустимо ошибиться</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_min_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого пароль должен использоваться и не может быть изменен</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого может быть использован текущий пароль (180 дней в секундах)</td>
<td style="text-align: center;">15 552 000</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_grace_time</td>
<td style="text-align: center;">время в секундах, в течение которого пользователь может использовать текущий пароль с напоминанием о необходимости его сменить до блокировки аккаунта. Время прибавляется к времени, установленному в securityprofile.password_life_time</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_time</td>
<td style="text-align: center;">время между повторным использованием одного и того же пароля (в секундах)</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_max</td>
<td style="text-align: center;">повторное использование пароля запрещено (Для повторного использования пароля без ограничений надо указать password_reuse_time=-1 и password_reuse_max = -1)</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.store_password_encrypted</td>
<td style="text-align: center;">хранение паролей в закрытом виде</td>
<td style="text-align: center;">True</td>
<td style="text-align: center;">True</td>
<td style="text-align: center;">False</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.user_idle_days_max</td>
<td style="text-align: center;">Политика компонента, контролирующая, что пользователь должен быть заблокирован, если период его неактивности (отсутствие входов в СУБД) превысил заданное количество дней</td>
<td style="text-align: center;">45</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td colspan="6" style="text-align: center;"><strong>Параметры для конфигурирования размера кэша расширения</strong></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.profiles_cache_limit</td>
<td style="text-align: center;">максимальное количество профилей, хранимых в кэше</td>
<td style="text-align: center;">10</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.accounts_cache_limit</td>
<td style="text-align: center;">максимальное количество пользовательских аккаунтов, хранимых в кэше</td>
<td style="text-align: center;">1000</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_history_cache_limit</td>
<td style="text-align: center;">максимальное количество парольных хэшей (md5) хранимых в кэше</td>
<td style="text-align: center;">10000</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.status_cache_limit</td>
<td style="text-align: center;">максимальное количество записей о статусах блокировок всех пользователей</td>
<td style="text-align: center;">10000</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

Таблица . - Параметры профиля «default»

В таблице указываемые параметры после знака «=» не являются абсолютными. Они могут быть изменены в диапазоне от минимального до максимального значения в соответствии с требования парольной политики. Значение «INT_MAX» обозначает числовое значение для переменной «INT» равным значению 2 147 483 647.

Значение «-1» означает запрет или блокировку.

По умолчанию все создаваемые пользователи будут привязаны к профилю «default».

**Отдельные параметры компонента**

**securityprofile.user_idle_days_max**

user_idle_days_max – это политика компонента, контролирующая, что пользователь должен быть заблокирован, если период его неактивности (отсутствие заходов в СУБД) превысил заданное количество дней.

Политика выполняет Требования к услилению **УПД.1 (3б)** в части требований:

3\) в информационной системе должно осуществляться автоматическое блокирование неактивных (неиспользуемых) учетных записей пользователей после периода времени неиспользования:

б) более 45 дней;

Управление значением параметром возможно через конфигурационный файл «postgresql.conf» и через одноименную функцию компонента от имени и с правами привелигорованного пользователя. Значение устанавливается целыми числами, в днях.

Значение по умолчанию - 45 дней.

Минимально допустимое значение для параметра = -1 (без ограничений)

Максимально допустимое = INT_MAX (~2 млрд. дней)

Функция set_profile_user_idle_days_max устанавливает значение этой политикит для заданного профиля.

> set_profile_user_idle_days_max(profile, кол-во_дней);

Служебная информация securityprofile размещается в служебных таблицах SP (например, securityprofile.account, securityprofile.profile и т.п.). Чтобы SP мог быстро принимать решения о блокировке пользователей, данная информация из служебных таблиц должна быть всегда загружена в оперативную память (в противном случае, придется каждый раз обращаться в таблицу, что приведет к значительному падению производительности и подключения пользователей к СУБД). Для размещения информации в оперативной памяти создаются специальные кэш-таблицы (для быстрого поиска и изменения).

**Параметры для конфигурирования размера кэша расширения**

К таким параметрам относятся:

- 
- 
- 
- 

securityprofile.profiles_cache_limit;securityprofile.accounts_cache_limit;securityprofile.password_history_cache_limit;securityprofile.status_cache_limit.Указанные параметры задают максимальное количества записей, которые могут размещаться в оперативной памяти.

securityprofile.profiles_cache_limit – максимальное количество профилей, хранимых в кэше. Значение по умолчанию 10, т.е. по умолчанию «securityprofile» может работать не более чем, с 10 профилями.

securityprofile.accounts_cache_limit - максимальное количество пользовательских аккаунтов, хранимых в кэше. Значение по умолчанию 1000, т.е. по умолчанию «securityprofile» может работать не более чем, с 1000 пользователями.

securityprofile.password_history_cache_limit – максимальное количество парольных хэшей (md5) хранимых в кэше. Значение по умолчанию 10000 - это максимально возможное количество записей в оперативной памяти по истории паролей всех УЗ всех пользователей.

securityprofile.status_cache_limit - максимальное количество записей о статусах блокировок всех пользователей.

Администратор СУБД (SUPERUSER) имеет права увеличить данные ограничения по своему усмотрению.

Если в процессе эксплуатации SP появляется сообщение о нехватке памяти для размещения данных «securityprofile», Администратору СУБД требуется увеличить указанные выше параметры до нужных значений в соответствии с количеством обслуживаемых пользователей, профилей и статусов блокировок. Значения этих параметров ограничены лишь объемом оперативной памяти сервера СУБД (максимальное значение INT_MAX).

**securityprofile.wait_extension_delay**

securityprofile.wait_extension_delay – это параметр проверки установки расширения в СУБД.

Расширение SP имеет две части исполнения.

Одна (внутренняя) часть интегрируется в СУБД через shared_preload_libraries = 'securityprofile' и предназначена для реализации внутренних механизмов компонента «securityprofile». Таких как, встраивание в процесс аутентификации пользователей и проверка политики, перехват запросов управления ролями (CREATE/ALTER/DROP ROLE) и внесение изменение в профили и УЗ и другие функции.

Вторая часть (SQL-часть) интегрируется в СУБД через установку расширения (CREATE EXTENSION securityprofile). В этой части идет создание служебной схемы «securityprofile», создание всех необходимых служебных таблиц и предопределенных профилей.

Работа обоих частей не может идти отдельно. Они должны быть установлены в СУБД совместно. Совместная установка разбита по времени:

- 
- 

сначала Администратор СУБД устанавливается shared_preload_libraries и перезапускает СУБД:потом Администратор логинится в СУБД и устанавливает расширение SQL-командой: CREATE EXTENSION. В промежутке времени между двумя этими действиями «securityprofile» должен проверять, установил ли Администратор расширение, и можно ли уже полноценно активировать свою работу.

В этой ситуации параметр wait_extension_delay задавал паузу во времени, через сколько «securityprofile» проверял, сделал ли уже Администратор установку расширения или нет.

Значение параметра по умолчанию 1с = 1000мс. 

При повседневной работе наличие этого параметра приводила к большому количеству сообщений об ошибках, о том, что расширение «securityprofile» еще не установлено. Поэтому было принято решения, убрать этот параметр (версия «securityprofile»-2.1). Сейчас этот параметр объявлен "устаревшим", а именно можно задавать его значение в конф. файле, это не приведет к ошибке, но сам параметр более не действует. Все ожидания заменены на адаптивный алгоритм по логарифмической шкале. С каждым следующим циклом проверки таймауте увеличивается. Это не приводит к большому количеству сообщений в журнал аудита. 

##### Обязательные действия, выполняемые сразу после установки расширения

Для учетной записи администратора СУБД в обязательном порядке, требуется задать новый пароль сразу после выполнения команды установки расширения.

В тех случаях, когда учетная запись пользователя в СУБД была создана по умолчанию до применения парольной политики, необходимо изменить пароль учетной записи при помощи команды:

> АLTER ROLE \<имя учетной записи пользователя\> password '\<пароль пользователя\>';

После чего учетная запись пользователя привяжется к профилю «default».

Создание ролей пользователей при активированной парольной политике описано в  
п. 6.2.4.

##### Встроенные профили парольных политик

Компонент «securityprofile» имеет функциональную возможность распределять учетные записи по применяемым к ним парольным политикам. Как было описано ранее, возможно применять парольные политики по умолчанию, создавать собственные, либо использовать преднастроенные профили парольных политик.

К преднастроенным относятся:

- 
- 
- 
- 
- 
- 

FSTEC_1_class – профиль для ИС первого класса защищенности (Таблица 6.2);FSTEC_2_class – профиль для ИС второго класса защищенности (Таблица 6.3);CIS – профиль, основанный на рекомендациях Center for Internet Security (Таблица 6.4);Corporate_1 – корпоративный профиль первого уровня для учетных записей пользователей (Таблица 6.5);Corporate_2 – корпоративный профиль второго уровня для учетных записей администраторов программных (программно-аппаратных средств) (Таблица 6.6);Corporate_3 – корпоративный профиль третьего уровня для технических (сервисных, служебных) учетных записей, используемых в технологических процессах ИС или встроенных производителями программных (программно-аппаратных) средств в такие средства (Таблица 6.7).Параметры в профиле установлены в зависимости от требований и могут быть изменены в сторону уменьшения до минимальных значений, как в профиле по умолчанию (default) (см. таблицу Таблица 6.1 так и в сторону увеличения до максимальных значений.

Максимальные значения обозначены параметром «INT_MAX». Это обозначение максимального значения для переменной «INT». При установке параметра максимального значения «INT_MAX» допускается числовое значение, которое меньше или равно  
2 147 483 647.

Параметры в профилях парольных политик сформированы исходя из принципа разумной достаточности и установлены по минимальным значениям от требуемых либо усредненные.

**Например**

Рассмотрим реализацию части требований к усилению ИАФ.4 (1г) в соответствии с документом «Методический документ. Меры защиты информации в государственных информационных системах» (утв. ФСТЭК России 11.02.2014):

г) длина пароля не менее восьми символов, алфавит пароля не менее 70 символов, максимальное количество неуспешных попыток аутентификации (ввода неправильного пароля) до блокировки от 3 до 4 попыток, блокировка программно-технического средства или учетной записи пользователя в случае достижения установленного максимального количества неуспешных попыток аутентификации от 15 до 60 минут, смена паролей не более чем через 60 дней.

**Длина пароля не менее восьми символов.**

Требование выполняется параметром «securityprofile.minimum_length» со значением равным 8, что соответствует требованиям и менять его в меньшую сторону нельзя.

**Максимальное количество неуспешных попыток аутентификации (ввода неправильного пароля) до блокировки от 3 до 4 попыток.**

Требование выполняется параметром «securityprofile.failed_login_attempts» с значением равным 4, что соответствует максимальному значению и параметр может быть изменен, только до значения равному 3.

**Блокировка учетной записи пользователя в случае достижения установленного максимального количества неуспешных попыток аутентификации от 15 до 60 минут.**

Требование выполняется параметром «securityprofile.password_lock_time» с установленным значением 2700 сек, что равняется 45 минутам. Значение равно усредненному значению. В этом случае значение параметра «securityprofile.password_lock_time» могут быть изменены в диапазоне:

- 
- 

##### от 15 минут (900 сек.);до 60 минут (3 600 сек.).FSTEC_1_class

Профиль парольной политики «FSTEC_1_class» разработан в соответствии с требованиями к усилению ИАФ.4 (1г) в соответствии с документом «Методический документ. Меры защиты информации в государственных информационных системах» (утв. ФСТЭК России 11.02.2014) и может быть использован для ИС первого класса защищенности.

Таблица 6.2 – Параметры парольной политики FSTEC _1_Class по умолчанию

<table>
<colgroup>
<col style="width: 36%" />
<col style="width: 33%" />
<col style="width: 15%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Примечание</strong></th>
<th style="text-align: center;"><strong>Параметры в профиле</strong></th>
<th style="text-align: center;"><strong>Макс-е значение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4" style="text-align: center;"><strong>Параметры для конфигурирования парольной политики</strong></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.profile_name</td>
<td style="text-align: center;">имя профиля по умолчанию</td>
<td style="text-align: center;">= ' FSTEC _1_Class '</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_chars</td>
<td style="text-align: center;">пароль должен содержать указанные символы (набор символов не является обязательным и может быть изменен)</td>
<td style="text-align: center;">\!"#$%&amp;()*+,-./:;&lt;=&gt;?@[]^_`{|}~</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.lower_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символ в нижнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.upper_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символ в верхнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.numbers_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 цифру</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 спец. символ из заданного набора special_chars</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_length</td>
<td style="text-align: center;">минимальная длина пароля</td>
<td style="text-align: center;">8</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.maximum_length</td>
<td style="text-align: center;">максимальная длина пароля</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_changes</td>
<td style="text-align: center;">минимальное количество изменений, которое должен содержать новый пароль по сравнению с предыдущим</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts</td>
<td style="text-align: center;">количество неудачных попыток входа в СУБД</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_lock_time</td>
<td style="text-align: center;"><p>время, на которое блокируется пользователь в СУБД (1 час в секундах)</p>
<p>Значение «-1» означает, что не будет происходить блокировка пользователя на заданное время, т.е. отсутствие блокировки. В противном случае при нарушении политики профиля - пользователь блокируется на указанное в параметре время.</p></td>
<td style="text-align: center;">2700</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts_max_time_sec</td>
<td style="text-align: center;">время в течении которого допустимо ошибиться</td>
<td style="text-align: center;">300</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_min_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого пароль должен использоваться и не может быть изменен</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого может быть использован текущий пароль (в секундах)</td>
<td style="text-align: center;">5184000</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_grace_time</td>
<td style="text-align: center;">время в секундах, в течение которого пользователь может использовать текущий пароль с напоминанием о необходимости его сменить до блокировки аккаунта. Время прибавляется к времени, установленному в securityprofile.password_life_time</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_time</td>
<td style="text-align: center;">время между повторным использованием одного и того же пароля (в секундах)</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_max</td>
<td style="text-align: center;">повторное использование пароля</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.store_password_encrypted</td>
<td style="text-align: center;">хранение паролей в закрытом виде</td>
<td style="text-align: center;">True</td>
<td style="text-align: center;">False</td>
</tr>
</tbody>
</table>

##### FSTEC_2_class

Профиль парольной политики «FSTEC_1_class» разработан в соответствии с требованиями к усилению ИАФ.4 (1в) в соответствии с документом «Методический документ. Меры защиты информации в государственных информационных системах»  
(утв. ФСТЭК России 11.02.2014) и может быть использован для ИС второго класса защищенности.

Таблица 6.3 – Параметры парольной политики FSTEC _2_Class по умолчанию

<table>
<colgroup>
<col style="width: 34%" />
<col style="width: 36%" />
<col style="width: 15%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Примечание</strong></th>
<th style="text-align: center;"><strong>Параметры в профиле</strong></th>
<th style="text-align: center;"><strong>Макс-е значение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4" style="text-align: center;"><strong>Параметры для конфигурирования парольной политики</strong></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.profile_name</td>
<td style="text-align: center;">имя профиля по умолчанию</td>
<td style="text-align: center;">' FSTEC _2_Class '</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_chars</td>
<td style="text-align: center;">пароль должен содержать указанные символы (набор символов не является обязательным и может быть изменен)</td>
<td style="text-align: center;">\!"#$%&amp;()*+,-./:;&lt;=&gt;?@[]^_`{|}~</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.lower_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символ в нижнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.upper_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символ в верхнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.numbers_count1</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 цифру</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 спец. символ из заданного набора special_chars</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_length</td>
<td style="text-align: center;">минимальная длина пароля</td>
<td style="text-align: center;">8</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.maximum_length</td>
<td style="text-align: center;">максимальная длина пароля</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_changes</td>
<td style="text-align: center;">минимальное количество изменений, которое должен содержать новый пароль по сравнению с предыдущим</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts</td>
<td style="text-align: center;">количество неудачных попыток входа в СУБД</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_lock_time</td>
<td style="text-align: center;"><p>время, на которое блокируется пользователь в СУБД (1 час в секундах)</p>
<p>Значение «-1» означает, что не будет происходить блокировка пользователя на заданное время, т.е. отсутствие блокировки. В противном случае при нарушении политики профиля - пользователь блокируется на указанное в параметре время.</p></td>
<td style="text-align: center;">1200</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts_max_time_sec</td>
<td style="text-align: center;">время в течении которого допустимо ошибиться</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_min_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого пароль должен использоваться и не может быть изменен</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого может быть использован текущий пароль</td>
<td style="text-align: center;">7776000</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_grace_time</td>
<td style="text-align: center;">время в секундах, в течение которого пользователь может использовать текущий пароль с напоминанием о необходимости его сменить до блокировки аккаунта. Время прибавляется к времени, установленному в securityprofile.password_life_time</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_time</td>
<td style="text-align: center;">время между повторным использованием одного и того же пароля (в секундах)</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_max</td>
<td style="text-align: center;">повторное использование пароля</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.store_password_encrypted</td>
<td style="text-align: center;">хранение паролей в закрытом виде</td>
<td style="text-align: center;">True</td>
<td style="text-align: center;">False</td>
</tr>
</tbody>
</table>

##### CIS

Профиль парольной политики «СIS», разработан на основе рекомендаций Center for Internet Security – Центра интернет-безопасности, являющегося некоммерческой организацией, которая разрабатывает собственные контрольные показатели и рекомендации.

Таблица 6.4 – Параметры парольной политики «CIS» по умолчанию

<table style="width:100%;">
<colgroup>
<col style="width: 34%" />
<col style="width: 36%" />
<col style="width: 15%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Примечание</strong></th>
<th style="text-align: center;"><strong>Параметры в профиле</strong></th>
<th style="text-align: center;"><strong>Макс-е значение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4" style="text-align: center;"><strong>Параметры для конфигурирования парольной политики</strong></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.profile_name</td>
<td style="text-align: center;">имя профиля по умолчанию</td>
<td style="text-align: center;">'CIS'</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_chars</td>
<td style="text-align: center;">пароль должен содержать указанные символы</td>
<td style="text-align: center;">\!"#$%&amp;()*+,-./:;&lt;=&gt;?@[]^_`{|}~</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.lower_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 0 символов в нижнем регистре</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.upper_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 0 символов в верхнем регистре</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.numbers_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 цифру</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 0 спец. символ из заданного набора special_chars</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_length</td>
<td style="text-align: center;">минимальная длина пароля</td>
<td style="text-align: center;">14</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.maximum_length</td>
<td style="text-align: center;">максимальная длина пароля</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_changes</td>
<td style="text-align: center;">минимальное количество изменений, которое должен содержать новый пароль по сравнению с предыдущим</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts</td>
<td style="text-align: center;">количество неудачных попыток входа в СУБД</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_lock_time</td>
<td style="text-align: center;"><p>время, на которое блокируется пользователь в СУБД (1 час в секундах)</p>
<p>Значение «-1» означает, что не будет происходить блокировка пользователя на заданное время, т.е. отсутствие блокировки. В противном случае при нарушении политики профиля - пользователь блокируется на указанное в параметре время.</p></td>
<td style="text-align: center;">900</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts_max_time_sec</td>
<td style="text-align: center;">время в течении которого допустимо ошибиться</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_min_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого пароль должен использоваться и не может быть изменен</td>
<td style="text-align: center;">6400</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого может быть использован текущий пароль (в секундах)</td>
<td style="text-align: center;">7776000</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_grace_time</td>
<td style="text-align: center;">время в секундах, в течение которого пользователь может использовать текущий пароль с напоминанием о необходимости его сменить до блокировки аккаунта. Время прибавляется к времени, установленному в securityprofile.password_life_time</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_time</td>
<td style="text-align: center;">время между повторным использованием одного и того же пароля (в секундах)</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_max</td>
<td style="text-align: center;">повторное использование пароля</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.store_password_encrypted</td>
<td style="text-align: center;">хранение паролей в закрытом виде</td>
<td style="text-align: center;">True</td>
<td style="text-align: center;">False</td>
</tr>
</tbody>
</table>

##### Corporate_1

Профиль парольной политики «Corporate_1» – корпоративный профиль первого уровня для учетных записей пользователей.

Таблица 6.5 – Параметры парольной политики «Corporate_1»

<table>
<colgroup>
<col style="width: 34%" />
<col style="width: 36%" />
<col style="width: 15%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Примечание</strong></th>
<th style="text-align: center;"><strong>Параметры в профиле</strong></th>
<th style="text-align: center;"><strong>Макс-е значение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4" style="text-align: center;"><strong>Параметры для конфигурирования парольной политики</strong></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.profile_name</td>
<td style="text-align: center;">имя профиля по умолчанию</td>
<td style="text-align: center;">'Corporate_1'</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_chars</td>
<td style="text-align: center;">пароль должен содержать указанные символы</td>
<td style="text-align: center;">\!"#$%&amp;()*+,-./:;&lt;=&gt;?@[]^_`{|}~</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.lower_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символ в нижнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.upper_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символ в верхнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.numbers_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 2 цифры</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 спец. символ из заданного набора special_chars</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_length</td>
<td style="text-align: center;">минимальная длина пароля</td>
<td style="text-align: center;">6</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.maximum_length</td>
<td style="text-align: center;">максимальная длина пароля</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_changes</td>
<td style="text-align: center;">минимальное количество изменений, которое должен содержать новый пароль по сравнению с предыдущим</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts</td>
<td style="text-align: center;">количество неудачных попыток входа в СУБД</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_lock_time</td>
<td style="text-align: center;"><p>время, на которое блокируется пользователь в СУБД (1 час в секундах)</p>
<p>Значение «-1» означает, что не будет происходить блокировка пользователя на заданное время, т.е. отсутствие блокировки. В противном случае при нарушении политики профиля - пользователь блокируется на указанное в параметре время.</p></td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts_max_time_sec</td>
<td style="text-align: center;">время в течении которого допустимо ошибиться</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_min_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого пароль должен использоваться и не может быть изменен</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого может быть использован текущий пароль (в секундах)</td>
<td style="text-align: center;">3888000</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_grace_time</td>
<td style="text-align: center;">время в секундах, в течение которого пользователь может использовать текущий пароль с напоминанием о необходимости его сменить до блокировки аккаунта.</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_time</td>
<td style="text-align: center;">время между повторным использованием одного и того же пароля (в секундах)</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_max</td>
<td style="text-align: center;">повторное использование пароля</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.store_password_encrypted</td>
<td style="text-align: center;">хранение паролей в закрытом виде</td>
<td style="text-align: center;">True</td>
<td style="text-align: center;">False</td>
</tr>
</tbody>
</table>

##### Corporate_2

Профиль парольной политики «Corporate_2» – корпоративный профиль второго уровня для учетных записей администраторов программных (программно-аппаратных средств).

Таблица 6.6 – Параметры парольной политики «Corporate_2»

<table>
<colgroup>
<col style="width: 37%" />
<col style="width: 34%" />
<col style="width: 15%" />
<col style="width: 12%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Примечание</strong></th>
<th style="text-align: center;"><strong>Параметры в профиле</strong></th>
<th style="text-align: center;"><strong>Макс-е значение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4" style="text-align: center;"><strong>Параметры для конфигурирования парольной политики</strong></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.profile_name</td>
<td style="text-align: center;">имя профиля по умолчанию</td>
<td style="text-align: center;">'Corporate_2'</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special</td>
<td style="text-align: center;">пароль должен содержать указанные символы</td>
<td style="text-align: center;">\!"#$%&amp;()*+,-./:;&lt;=&gt;?@[]^_`{|}~</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.lower_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символов в нижнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.upper_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символ в верхнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.numbers_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 2 цифры</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 спец. символ из заданного набора special_chars</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_length</td>
<td style="text-align: center;">минимальная длина пароля</td>
<td style="text-align: center;">12</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.maximum_length</td>
<td style="text-align: center;">максимальная длина пароля</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_changes</td>
<td style="text-align: center;">минимальное количество изменений, которое должен содержать новый пароль по сравнению с предыдущим</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts</td>
<td style="text-align: center;">количество неудачных попыток входа в СУБД</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_lock_time</td>
<td style="text-align: center;"><p>время, на которое блокируется пользователь в СУБД (1 час в секундах)</p>
<p>Значение «-1» означает, что не будет происходить блокировка пользователя на заданное время, т.е. отсутствие блокировки. В противном случае при нарушении политики профиля - пользователь блокируется на указанное в параметре время.</p></td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts_max_time_sec</td>
<td style="text-align: center;">время в течении которого допустимо ошибиться</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_min_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого пароль должен использоваться и не может быть изменен</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого может быть использован текущий пароль (в секундах)</td>
<td style="text-align: center;">7776000</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_grace_time</td>
<td style="text-align: center;">время в секундах, в течение которого пользователь может использовать текущий пароль с напоминанием о необходимости его сменить до блокировки аккаунта. Время прибавляется к времени, установленному в securityprofile.password_life_time</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_time</td>
<td style="text-align: center;">время между повторным использованием одного и того же пароля (в секундах)</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_max</td>
<td style="text-align: center;">повторное использование пароля</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.store_password_encrypted</td>
<td style="text-align: center;">хранение паролей в закрытом виде</td>
<td style="text-align: center;">True</td>
<td style="text-align: center;">False</td>
</tr>
</tbody>
</table>

##### Corporate_3

Профиль парольной политики «Corporate_3» – корпоративный профиль третьего уровня для технических (сервисных, служебных) учетных записей, используемых в технологических процессах ИС или встроенных производителями программных (программно-аппаратных) средств в такие средства.

Таблица 6.7 – Параметры парольной политики «Corporate_3»

<table>
<colgroup>
<col style="width: 36%" />
<col style="width: 34%" />
<col style="width: 15%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Параметр</strong></th>
<th style="text-align: center;"><strong>Примечание</strong></th>
<th style="text-align: center;"><strong>Параметры в профиле</strong></th>
<th style="text-align: center;"><strong>Макс-е значение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4" style="text-align: center;"><strong>Параметры для конфигурирования парольной политики</strong></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.profile_name</td>
<td style="text-align: center;">имя профиля по умолчанию</td>
<td style="text-align: center;">'Corporate_3'</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special</td>
<td style="text-align: center;">пароль должен содержать указанные символы</td>
<td style="text-align: center;">\!"#$%&amp;()*+,-./:;&lt;=&gt;?@[]^_`{|}~</td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.lower_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символов в нижнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.upper_case_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 символ в верхнем регистре</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.numbers_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 2 цифры</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.special_count</td>
<td style="text-align: center;">пароль должен содержать как минимум 1 спец. символ из заданного набора special_chars</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_length</td>
<td style="text-align: center;">минимальная длина пароля</td>
<td style="text-align: center;">16</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.maximum_length</td>
<td style="text-align: center;">максимальная длина пароля</td>
<td style="text-align: center;">256</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.minimum_changes</td>
<td style="text-align: center;">минимальное количество изменений, которое должен содержать новый пароль по сравнению с предыдущим</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">256</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts</td>
<td style="text-align: center;">количество неудачных попыток входа в СУБД</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_lock_time</td>
<td style="text-align: center;"><p>время, на которое блокируется пользователь в СУБД (1 час в секундах)</p>
<p>Значение «-1» означает, что не будет происходить блокировка пользователя на заданное время, т.е. отсутствие блокировки. В противном случае при нарушении политики профиля - пользователь блокируется на указанное в параметре время.</p></td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.failed_login_attempts_max_time_sec</td>
<td style="text-align: center;">время в течении которого допустимо ошибиться</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_min_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого пароль должен использоваться и не может быть изменен</td>
<td style="text-align: center;">30</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_life_time</td>
<td style="text-align: center;">время в секундах, в течение которого может быть использован текущий пароль (в секундах)</td>
<td style="text-align: center;">7776000</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_grace_time</td>
<td style="text-align: center;">время в секундах, в течение которого пользователь может использовать текущий пароль с напоминанием о необходимости его сменить до блокировки аккаунта. Время прибавляется к времени, установленному в securityprofile.password_life_time</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_time</td>
<td style="text-align: center;">время между повторным использованием одного и того же пароля (в секундах)</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.password_reuse_max</td>
<td style="text-align: center;">повторное использование пароля</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">Int_Max</td>
</tr>
<tr>
<td style="text-align: center;">securityprofile.store_password_encrypted</td>
<td style="text-align: center;">хранение паролей в закрытом виде</td>
<td style="text-align: center;">True</td>
<td style="text-align: center;">False</td>
</tr>
</tbody>
</table>

##### Взаимодействие параметров парольных политик

##### Время жизни пароля пользователя

Время жизни пароля пользователя состоит из трех параметров:

- 
- 
- 

максимальное время действия пароля (securityprofile.password_life_time);минимальное время действия пароля (securityprofile.password_min_life_time);льготный период действия пароля (securityprofile.password_grace_time).На рисунке Рисунок 6.1 показана схема взаимодействия временных параметров. На отрезке времени min_life_time пароль пользователя нельзя изменить.

Если временной параметр grace_time активен, то установленное в нем время прибавится к времени параметра life_time и после окончания суммарного срока действия пароля учетная запись пользователя будет заблокирована.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.png)

Рисунок . – Схема взаимодействия временных параметров

##### Количество изменений в пароле пользователя

Параметр securityprofile.minimum_changes определяет минимальное количество знаков, которыми должен отличаться новый пароль от предыдущего. Этот параметр взаимосвязан с параметром хранения паролей в закрытом виде securityprofile.store_password_encrypted. По умолчанию параметр securityprofile.store_password_encrypted имеет значение true, т.е. включен.

Если параметр равен false, то будет доступен параметр securityprofile.minimum_changes, при этом аутентификационная информация пользователей будет доступна только роли с атрибутом Superuser.

Повторное использование пароля пользователя осуществляется в несколько этапов, проверяется:

- 
- 
- 

история паролей; она проверяется вне зависимости от способа хранения аутентификационной информации, указанного в параметре securityprofile.store_password_encrypted;заданное время между использованием последнего пароля, указанного в параметре securityprofile.password_reuse_time; если параметр не задан, то проверка пропускается;заданный параметр разрешенного количества ранее использованных паролей, указанных в параметре securityprofile.password_reuse_max; если параметр не задан, то проверка пропускается.Проверки проходят параллельно.

##### Повторное использование пароля пользователя

Политика в отношении повторного использования пароля может иметь следующие варианты:

- 
- 
- 
- 
- 

разрешено установить ранее использованный пароль;разрешено установить ранее использованный пароль через определенное время;разрешено установить ранее использованный пароль определенное количество раз;разрешено установить ранее использованный пароль определенное количество раз через определенное время;запрещено установить ранее использованный пароль.Параметр «securityprofile.password_reuse_time» (промежуток времени, который должен пройти между использованием одинаковых паролей) может принимать три типа значений:

- 
- 
- 

«-1» – бесконечный промежуток (повторно использовать пароль нельзя);«0» – промежуток отсутствует, можно ставить бывший в использовании пароль сразу;более «0», но не более максимального значения переменной INT_MAX.Параметр «securityprofile.password_reuse_max» (минимальное количество смен пароля между использованием одинаковых паролей) может принимать следующие значения:

- 
- 
- 

«-1» – бесконечное количество (повторно использовать пароль нельзя);«0» – количество смен паролей равно нулю, т.е. разрешено использовать предыдущий пароль при текущей смене пароля;более «0», но не более максимального значения переменной INT_MAX.Взаимодействие параметров представлено в матрице.

Таблица . – Матрица параметров

| **Повторное использование пароля в течение времени (securityprofile.password_reuse_time)** | **Количество ранее использованных паролей (securityprofile.password_reuse_max)** |  |  |
|:---|:---|:---|:---|
|  | Запрещено (-1) | Разрешено (0) | Кол-во паролей больше указанного значения |
| Запрещено (-1) | Запрещено | Запрещено | Запрещено |
| Разрешено (0) | Запрещено | Разрешено | Разрешено |
| Период времени (более 0) | Запрещено | Разрешено | Разрешено |

Таким образом, для формирования одной из политик следует установить значения для параметров securityprofile.password_reuse_time и securityprofile.password_reuse_max приведенные в таблице Таблица 6.9.

Таблица . – Комбинации параметров значений политик повторного использования пароля

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 39%" />
<col style="width: 38%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>№</strong></th>
<th style="text-align: center;"><strong>Политика</strong></th>
<th style="text-align: center;"><strong>Параметры</strong></th>
<th style="text-align: center;"><strong>Значение</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2" style="text-align: center;">1</td>
<td rowspan="2">Использование ранее использованного пароля запрещено</td>
<td style="text-align: left;">securityprofile.password_reuse_time</td>
<td style="text-align: left;">-1</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.password_reuse_max</td>
<td style="text-align: left;">-1</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">2</td>
<td rowspan="2">Использование ранее использованного пароля запрещено, вне зависимости от количества смен пароля</td>
<td style="text-align: left;">securityprofile.password_reuse_time</td>
<td style="text-align: left;">-1</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.password_reuse_max</td>
<td style="text-align: left;"><p>0</p>
<p>(или более 0)</p></td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">3</td>
<td rowspan="2">Использование ранее использованного пароля разрешено через определенное количество раз смены пароля</td>
<td style="text-align: left;">securityprofile.password_reuse_time</td>
<td style="text-align: left;">Более 0</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.password_reuse_max</td>
<td style="text-align: left;">Более 0</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">4</td>
<td rowspan="2">Использование ранее использованного пароля запрещено. Все пароли уникальные</td>
<td style="text-align: left;">securityprofile.password_reuse_time</td>
<td style="text-align: left;"><p>0</p>
<p>(или более 0)</p></td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.password_reuse_max</td>
<td style="text-align: left;">-1</td>
</tr>
<tr>
<td rowspan="2" style="text-align: center;">5</td>
<td rowspan="2">Использование ранее использованного пароля разрешено</td>
<td style="text-align: left;">securityprofile.password_reuse_time</td>
<td style="text-align: left;">0</td>
</tr>
<tr>
<td style="text-align: left;">securityprofile.password_reuse_max</td>
<td style="text-align: left;">0</td>
</tr>
</tbody>
</table>

##### Взаимодействие параметров парольных политик при реализации мер защиты информации ИАФ.4 (1г) и УПД.6 (1)

В компоненте SecurityProfile реализована часть требований ИАФ.4 (1г) и УПД.6 (1), описанных в документе «Методический документ. Меры защиты информации в государственных информационных системах» (утв. ФСТЭК России 11.02.2014):

В мере защиты информации ИАФ.4 (1г) пользователь блокируется после достижения установленного максимального количества неуспешных попыток аутентификации на период от 15 до 60 минут.

В мере защиты информации УПД.6 (1) пользователь блокируется после достижения установленного максимального количества неуспешных попыток аутентификации за установленный период времени до момента разблокирования его администратором.

Для реализации указанных мер используются параметры:

- 
- 
- 

securityprofile.failed_login_attempts – количество неуспешных попыток аутентификации;securityprofile.password_lock_time – время блокировки пользователя;securityprofile.failed_login_attempts_max_time_sec – время, в течение которого допустимо ошибиться.Ключевым моментом является соотношение временных параметров и количество попыток аутентификации пользователя в разрезе времени.

Далее рассматриваются примеры взаимодействия параметров SecurityProfile.

**Пример № 1**

Установлены параметры:

- 
- 
- 

securityprofile.failed_login_attempts = 5 – пять неудачных попыток аутентификации;securityprofile.failed_login_attempts_max_time_sec = 0 – время, в течение которого допустимо ошибиться, не установлено;securityprofile.password_lock_time = 3600 – время блокирования пользователя 1 час.Пользователь проводит пять неудачных попыток аутентификации и по параметру securityprofile.password_lock_time = 3600 он блокируется на один час. По истечении времени пользователь может предпринять попытки аутентификации.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image5.png)

Рисунок . – Временная диаграмма примера № 1

Таким образом выполняется мера защиты информации ИАФ.4 (1г).

**Пример № 2**

Установлены параметры:

- 
- 
- 

securityprofile.failed_login_attempts = 5 – пять неудачных попыток аутентификации;securityprofile.failed_login_attempts_max_time_sec = 300 – время, в течение которого допустимо ошибиться, установлено 5 минут;securityprofile.password_lock_time = 3600 – время блокирования пользователя 1 час.Пользователь проводит пять неудачных попыток аутентификации в течение пяти минут. В этом случае параметр password_lock_time игнорируется, и пользователь блокируется до момента разблокирования его администратором.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image6.png)

Рисунок . – Временная диаграмма примера № 2

Таким образом выполняется мера защиты информации УПД.6 (1).

**Пример № 3**

Установлены параметры:

- 
- 
- 

securityprofile.failed_login_attempts = 5 – пять неудачных попыток аутентификации;securityprofile.failed_login_attempts_max_time_sec = 300 – время, в течение которого допустимо ошибиться, установлено 5 минут;securityprofile.password_lock_time = 3600 – время блокирования пользователя 1 час.Пользователь проводит четыре неудачные попытки аутентификации, но пятая попытка аутентификации удачная и проходит после времени, в течение которого допустимо ошибиться. Пользователь не блокируется, т.к. не превышены установленные параметры.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image7.png)

Рисунок . – Временная диаграмма примера № 3

**Пример № 4**

Установлены параметры:

- 
- 
- 

securityprofile.failed_login_attempts = 5 – пять неудачных попыток аутентификации;securityprofile.failed_login_attempts_max_time_sec = 300 – время, в течение которого допустимо ошибиться, установлено 5 минут;securityprofile.password_lock_time = 3600 – время блокирования пользователя 1 час.Пользователь проводит четыре неудачные попытки аутентификации. Пятая неудачная попытка происходит после истечения времени, установленного в параметре securityprofile.failed_login_attempts_max_time_sec, т.е. с момента первой неудачной аутентификации прошло более пяти минут.

Далее срабатывает параметр securityprofile.password_lock_time и пользователь блокируется на один час. Вмешательство администратора не потребуется, и пользователь сможет предпринять попытки аутентификации через час с момента пятой неудачной попытки аутентификации.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image8.png)

Рисунок . – Временная диаграмма примера № 4

Таким образом выполняется мера защиты информации ИАФ.4 (1г).

##### Параметры парольной политики по схеме securityprofile

Для активации парольной политики по схеме securityprofile в СУБД «Jatoba» необходимо выполнить следующие действия:

1)  
2)  

> От учетной записи администратора СУБД подключиться к ОС и открыть файл postgresql.conf[^3]<sup>)</sup>.В файле postgresql.conf прописать следующую строку:shared_preload_libraries = 'securityprofile'

3)  

- 

> Перезагрузить сервис СУБД «Jatoba» в:ОС Windows Server при помощи команд:net stop JatobaServer;
>
> net start JatobaServer

- 

> ОС семейства GNU/Linux при помощи команды:systemctl restart jatoba-<ver>

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image3.svg" style="width:0.25139in;height:0.25139in" /> | Необходимо обратить внимание, что указание в конфигурационном файле postgresql.conf опции shared_preload_libraries = 'securityprofile’ активирует компонент управления парольными политиками и создает политику по умолчанию с именем «default». Для создания новых политик выполняется п. г) |
|----|----|

4)  

> От учетной записи администратора СУБД подключиться к СУБД «Jatoba» и затем выполнить следующую команду:CREATE EXTENSION securityprofile;

После чего сформируется служебная схема securityprofile (см. рисунок Рисунок 6.6)

:::warning Важная информация
Для корректной работы компонента SecurityProfile допустима единственная установка расширения SecurityProfile для СУБД.
:::

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image9.png)

Рисунок . – Установка расширения «securityprofile»

Будет создан профиль по умолчанию с именем «default».

В таблице Таблица 6.10 представлены команды управления параметрами служебной схемой в СУБД «Jatoba».

Таблица . – Команды управления параметрами профиля в СУБД «Jatoba»

| **Команда** | **Примечание** |
|:---|:---|
| **Количество неуспешных попыток аутентификации** |  |
| select set_profile_failed_login_attempts ('имя_профиля', bigint); | Установка максимального количества неудачных попыток входа в СУБД. Если порог превышен, то применяется временная блокировка |
| select set_profile_failed_login_attempts_max_time_seconds('имя_профиля', bigint); | Установка времени, в течение которого пользователь навсегда блокируется при достижении установленного максимального количества неуспешных попыток аутентификации |
| select set_profile_password_lock_time ('имя_профиля', bigint); | Установка времени, на которое блокируется пользователь в днях, -1 – вечная блокировка |
| select set_profile_password_lock_time_seconds ('имя_профиля', bigint); | Установка времени, на которое блокируется пользователь в секундах |
| **Время действия пароля** |  |
| select set_profile_password_min_life_time('имя_профиля', bigint); | Установка времени в днях, в течение которого пароль должен использоваться и не может быть изменен |
| select set_profile_password_min_life_time_seconds ('имя_профиля', bigint); | Установка времени в секундах, в течение которого пароль должен использоваться и не может быть изменен |
| select set_profile_password_life_time('имя_профиля', bigint); | Установка времени в днях, в течение которого может быть использован текущий пароль (в днях). (-1 – вечность. Значение, указанное в опции VALID UNTIL при создании/смене пароля будет проигнорировано) |
| select set_profile_password_life_time_seconds ('имя_профиля', bigint); | Установка времени в секундах, в течение которого может быть использован текущий пароль |
| select set_profile_password_grace_time ('имя_профиля', bigint); | Установка времени в днях, в течение которого пользователь может использовать текущий пароль с напоминанием о необходимости его сменить до блокировки аккаунта. ( -1 – вечность. Аккаунт суперпользователя заблокирован не будет) |
| select set_profile_password_grace_time_seconds ('имя_профиля', bigint); | Установка времени в секундах, в течение которого пользователь может использовать текущий пароль с напоминанием о необходимости его сменить до блокировки аккаунта. ( -1 – вечность. Аккаунт суперпользователя заблокирован не будет) |
| **Повторное использование пароля** |  |
| select set_profile_password_reuse_time ('имя_профиля', bigint); | Установка времени в днях между повторным использованием одного и того же пароля. (-1 – вечность) |
| select set_profile_password_reuse_time_seconds ('имя_профиля', bigint); | Установка времени в секундах между повторным использованием одного и того же пароля. |
| select set_profile_password_reuse_max ('имя_профиля', integer); | Установка количества смен пароля перед возвращением к старому значению (Для повторного использования пароля без ограничений надо указать password_reuse_time=-1 и password_reuse_max = -1) |
| **Характеристики пароля** |  |
| select set_profile_password_lower_case_count ('имя_профиля', integer); | Установка минимального количества символов в нижнем регистре, которые должен содержать пароль. (0 – наличие не обязательно) |
| select set_profile_password_upper_ case_count ('имя_профиля', integer); | Установка минимального количества символов в верхнем регистре, которые должен содержать пароль. (0 – наличие не обязательно) |
| set_profile_password_numbers_count ('имя_профиля', integer); | Установка параметра минимального количества цифр, которые должен содержать пароль (0 – наличие не обязательно) |
| select set_profile_password_special_chars ('имя_профиля', 'набор спец.символов'); | Параметр указывающий на перечень набора спец.символов, которые должны использоваться в пароле |
| select set_profile_password_special count ('имя_профиля', integer); | Установка параметра, при котором пароль должен содержать минимальное количество спецсимволов (0 – наличие не обязательно) |
| select set_profile_password_min_len ('имя_профиля', integer); | Установка минимальной длины пароля |
| select set_profile_password_max_len ('имя_профиля', integer); | Параметр устанавливающий максимальную длину пароля |
| select set_profile_password_min_changes ('имя_профиля', integer); | Параметр устанавливающий минимальное количество изменений, которое должен содержать новый пароль по сравнению с предыдущим. (Работает только при условии хранения истории паролей в открытом виде) |
| select set_profile_store_password_encrypted ('имя_профиля', boolean) – true | Параметр, устанавливающий хранение истории паролей в закрытом виде (в md5 хэшах), false – в открытом |

Кроме того, есть функциональная возможность создавать дополнительные схемы и привязывать к ним учетные записи пользователей.

В таблице Таблица 6.11 представлены команды управления профилем в СУБД «Jatoba».

| **Команда** | **Примечание** |
|:---|----|
| select securityprofile.create_profile ('имя_нового_профиля'); | Создание нового профиля |
| select \* from securityprofile.show_profiles; | Просмотр списка профилей |
| select securityprofile.drop_profile ('имя_нового_профиля'); | Удаление профиля |
| select securityprofile.bind_profile ('имя_профиля', 'имя_пользователя'); | Привязка пользователя к профилю |

Таблица . – Команды управления профилем в СУБД «Jatoba»

:::warning Важная информация
Необходимо обратить внимание, что для применения схемы «securityprofile» к ранее созданным учетным записям, необходимо выполнить команду:

```bind_profile('имя_профиля', 'имя_пользователя'```)
:::


**Пример1. Создание профиля парольной политики**

**Задание**. Требуется создать дополнительный профиль парольной политики с именем «password_user», в котором будет установлена длина пароля пользователя равная 9 символам. При этом пользователь «test1» должен быть привязан к профилю «password_user».

**Шаг 1**. Создать профиль парольной политики с именем «password_user» на основании схемы «securityprofile», выполнив следующую команду:

> SELECT securityprofile.create_profile('password_user');

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image10.png" style="width:7.08648in;height:1.768in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\securityprofile\PIC\Screenshot from 2023-02-08 03-42-59.png" />

Рисунок . – Создание профиля «password_user»

**Шаг 2**. Просмотреть список имеющихся профилей, выполнив SQL-команду:

> SELECT \* from securityprofile.show_profiles;

либо просмотреть несколько столбцов из таблицы «securityprofile.profiles», выполнив SQL-команду:

> SELECT prflprofileoid, prflprofilename FROM securityprofile.profiles;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image11.png" style="width:7.02347in;height:2.90435in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-25 06-48-48.png" />

Рисунок . – Список профилей парольных политик

В результате видно, что новый профиль создан и унаследовал параметры парольной политики по умолчанию.

**Шаг 3**. Привязать пользователя «test1» к профилю «password_user», выполнив команду:

> SELECT securityprofile.bind_profile ('password_user', 'test1');

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image12.png" style="width:7.08652in;height:1.792in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\securityprofile\PIC\Screenshot from 2023-02-08 04-11-58.png" />

Рисунок . – Привязка пользователя к профилю

**Шаг 4**. Установить минимальную длину пароля пользователя равную 9 символам, выполнив команду:

> SELECT securityprofile.set_profile_password_min_len ('password_user',9);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image13.png" style="width:7.08652in;height:1.944in" alt="C:\Users\KUZNET~1\AppData\Local\Temp\vmware-kuznetsov-a\VMwareDnD\6258accd\Screenshot from 2023-02-08 04-12-54.png" />

Рисунок . – Установка длины пароля в профиле «password_user»

На данном шаге требуемое задание выполнено.

#### Взаимодействие с компонентом управления кластером «ja_Dog»

Компонент «securityprofile» может использоваться с компонентом управления кластером «ja_Dog».

При таком использовании на резервном узле после выполнения репликации, в конфигурационный файл «postgresql.conf» необходимо добавить параметр:

> securityprofile.sync_delay

со значением от «0» до «Int_Max».

Параметр задерживает синхронизацию кеша расширения.

Значение «0» соответствует отключению синхронизации кеша расширения.

Значения от «0» до «Int_Max» задают время в миллисекундах синхронизации кеша расширения. Такие значения должны быть целыми, положительными числами.

После установки параметра следует перезагрузить кластер.

При последующих ручных или автоматических сменах ролей узлов следует вручную на новом главном узле в конфигурационном файле закомментировать или удалить строку с добавленным параметром «securityprofile.sync_delay», а на резервном – добавить.

#### Взаимодействие с компонентом контроля целостности «ja_CSum»

Компонент «securityprofile» может использоваться с компонентом контроля целостности «ja_CSum» для вызова функций блокирования групп пользователей  
(см. п. 6.2.1). Функции блокировки вызываются автоматически, когда компонентом «ja_CSum» обнаружен в СУБД компонент «securityprofile».

Помимо этого, компонент «securityprofile» обладает функциональной возможностью блокировки установки пользовательских функций.

Для активации этой функциональной возможности требуется убедиться, что функция блокировки установки пользовательских функций у компонента «securityprofile» включена. При выводе должно быть значение «ON».

> SHOW securityprofile.user_function_creation;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image14.png" style="width:7.03737in;height:1.82079in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-08 08-46-55.png" />

Рисунок . – Вывод статуса функции блокировки создания функций пользователями

### Управление доступом субъектов доступа к объектам доступа

#### Блокирование и разблокирование учетных записей

Блокирование учетных записей СУБД выполняется функциональными возможностями компонента «securityprofile».

Блокирование/разблокирование УЗ может выполняться для:

- 
- 
- 

отдельного пользователя (см. п. 6.2.1.1);группы пользователей (см. п.6.2.1.2 );группы пользователей Администраторы БД (см. п. 6.2.1.3).По умолчанию блокировка пользователей выполняется в режиме «immediate». В данном режиме пользователь принудительно отключается без ожидания и непосредственного отката транзакций.

##### Блокирование/разблокирование учетной записи пользователя

Для блокировки учетной записи пользователя необходимо администратору СУБД выполнить SQL-команду с синтаксисом:

> SELECT securityprofile.lock_account('имя_пользователя', bigint);

**Например**

Заблокируем учетную запись пользователя СУБД «test» SQL-командой:

> SELECT securityprofile.lock_account('test', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image15.png" style="width:7.15903in;height:1.74212in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-25 06-56-46.png" />

Рисунок . – Блокировка пользователя

Примечание: bigint – задержка, с которой будет выполнена блокировка в днях.

select lock_account_seconds('имя_пользователя', bigint) – задержка, с которой будет выполнена блокировка в секундах.

Для разблокировки учетных записей пользователей администратору СУБД необходимо выполнить следующую команду:

> SELECT securityprofile.unlock_account ('имя_пользователя', bigint);

Примечание: bigint – задержка, с которой будет выполнено снятие блокировки в днях.

> SELECT securityprofile.unlock_account('test', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image16.png" style="width:6.53933in;height:1.61518in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-25 06-57-44.png" />

Рисунок . – SQL-команда блокирования пользователя

unlock_account_seconds ('имя_пользователя', bigint) – задержка, с которой будет выполнено снятие блокировки в секундах.

Для проверки факта блокировки и времени, в течение которого она будет действовать, администратору СУБД необходимо выполнить следующую команду:

> SELECT \* from securityprofile.is_locked('имя_пользователя');

Вывод информации о всех пользователях выполняется SQL-командой:

> SELECT \* from securityprofile.is_locked ('');

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image17.png" style="width:7.02042in;height:1.69565in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-25 07-00-57.png" />

Рисунок . – Вывод списка состояния пользователей

В выводе команды присутствуют столбы:

- 
- 

role_name – список заблокированных пользователей;database_name – база данных;Отображается значения «all», если пользователь заблокирован на основании нарушений парольных политик, которые запрещают вход во все базы данных СУБД или имя базы данных, вход в которую пользователю заблокирован.

- 

> is_locked – статус блокировки пользователя;Отображаются значения «t» (true) – заблокирован и «f» (false) – не заблокирован.

- 

until_date – дата и время блокировки;У незаблокированного пользователя поле будет пустым. Также в этом столбце может выводиться значение «inifinity», обозначающее вечную блокировку.

- 

unlock_hint – подсказка по разблокировке.Отображает подсказку администратору СУБД о том, какую функцию securityprofile использовать для разблокировки пользователя.

Поле содержит значение «resume_users», если блокировка выполнена из-за нарушения контроля целостности СУБД по директиве компонента «ja_CSum».

Значение «unlock_account» отображается, если пользователь заблокирован принудительно администратором СУБД или при нарушении парольных политик

##### Блокирование/разблокирование группы учетных записей пользователей

Блокировка группы учетных записей пользователей выполняется тремя функциями:

- 
- 
- 

##### suspend_users – блокировка группы пользователей;suspend_users_seconds – блокировка группы пользователей с задержкой в секундах;suspend_users_noerror – блокировка группы пользователей с игнорированием ошибки ранее заблокированных пользователей.Блокировка группы пользователей (securityprofile.suspend_users)

Функция «suspend_users» позволяет заблокировать категорию пользователей для заданной базы данных и имеет синтаксис SQL-команды:

> suspend_users(bigint, text DEFAULT NULL);

Если второй параметр = NULL, то время отсрочки блокировки задано в днях.

**Например**

Блокировка пользователей БД «db_test» выполняется SQL-командой:

> SELECT securityprofile.suspend_users('db_test', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image18.png" style="width:6.97396in;height:1.59907in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-13 17-39-41.png" />

Рисунок . – Блокировка пользователей БД «db_test»

При проверке статуса блокировки, будет добавлена строка с OID БД «16909».

> SELECT \* FROM securityprofile.status;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image19.png" style="width:7.10054in;height:1.9924in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-13 17-43-35.png" />

Рисунок . – Проверка статуса блокировки

Данный OID БД «16909» принадлежит БД «db_test», что проверяется SQL-командой:

> SELECT oid FROM pg_database WHERE datname = 'db_test';

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image20.png" style="width:7.17013in;height:1.6087in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-13 17-47-07.png" />

Рисунок . – Команда проверки OID БД

##### Разблокирование группы пользователей (securityprofile.resume_users)

Разблокировка пользователей выполняется функцией «resume_users» имеющей синтаксис SQL-команды:

> resume_users(bigint, text DEFAULT NULL);
>
> **Например**
>
> Разблокируем пользователей БД «db_test» SQL-командой:
>
> SELECT securityprofile.resume_users('db_test', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image21.png" style="width:6.99332in;height:1.53819in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 09-03-58.png" />

Рисунок . – Команда разблокировки пользователей БД

Проверка статуса блокировки покажет изменение даты в поле «suspendeduserstime».

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image22.png" style="width:7.0152in;height:2.93044in" alt="C:\Users\KUZNET~1\AppData\Local\Temp\vmware-kuznetsov-a\VMwareDnD\42048c27\Screenshot from 2023-11-14 09-04-31.png" />

Рисунок . – Статус блокировки пользователей

##### Блокировка группы пользователей с задержкой блокировки в устанавливаемой в секундах (securityprofile.suspend_users_seconds)

Функция «suspend_users_seconds» служит для блокировки пользователей БД с задержкой блокировки и имеет синтаксис SQL-команды:

> suspend_users_seconds(bigint, text DEFAULT NULL);

**Например**

Блокирование пользователей БД «db_test» с отсрочкой блокировки устанавливаемой в секундах, выполняется SQL-командой:

> SELECT securityprofile.suspend_users_seconds('db_test', 60);

В SQL-команде указывается БД и время задержки блокировки, устанавливаемой в секундах.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image23.png" style="width:7.04166in;height:1.55652in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 09-49-17.png" />

Рисунок . – Блокирование пользователей БД с отсрочкой блокировки устанавливаемой в секундах

##### Разблокирование группы пользователей с задержкой блокировки в устанавливаемой в секундах (securityprofile.resume_users_seconds)

Разблокирование пользователей выполняется функцией «resume_users_seconds» имеющей синтаксис:

> resume_users_seconds(bigint, text DEFAULT NULL);
>
> **Например**
>
> Разблокируем пользователей БД «db_test» с задержкой в секундах, SQL-командой:
>
> SELECT securityprofile.resume_users_seconds('db_test', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image24.png" style="width:7.067in;height:1.56522in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 10-31-54.png" />

Рисунок . – Команда разблокировки пользователей БД с установленной задержкой по времени

Проверка статуса блокировки покажет изменение даты в поле «suspendeduserstime».

> SELECT \* FROM securityprofile.status;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image25.png" style="width:7.08802in;height:2.90435in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 10-32-08.png" />

Рисунок . – Просмотр состояния блокировки

##### Блокировка группы пользователей с игнорированием ошибки (securityprofile.suspend_users_noerror)

Функция «suspend_users_noerror» аналогично suspend_users, только не выдает ошибки при наличии уже установленной блокировки и имеет синтаксис SQL-команды:

> suspend_users_noerror(text, bigint);

**Например**

Блокировка пользователей БД «db_test» игнорированием ошибки, выполняется SQL-командой:

> SELECT securityprofile.suspend_users_noerror ('db_test', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image26.png" style="width:7.08958in;height:1.72845in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 15-17-31.png" />

Рисунок . – Блокировка пользователей БД «db_test» игнорированием ошибки

В результате выполнения SQL-команды компонент заблокирует пользователей указанной БД и выведет сообщение, в котором сообщается, что «Пользователи уже были отключены от базы данных»:

> Users were suspended from database db_test already.

##### Разблокировка группы пользователей с игнорированием ошибки (resume_users_noerror)

Разблокирование пользователей выполняется функцией «resume_users_noerror» имеющей синтаксис:

> resume_users_noerror(text, bigint);
>
> **Например**

Разблокируем пользователей БД «db_test», SQL-командой вне зависимости от имеющихся ошибок:

> SELECT securityprofile.resume_users_noerror ('db_test', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image27.png" style="width:6.89722in;height:2.33913in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-15 12-21-21.png" />

Рисунок . – Выполнение команды разблокировки пользователей

##### Блокирование/разблокирование группы пользователей администраторов БД

К группе пользователей администраторов БД относятся привилегированные пользователи СУБД, имеющие атрибут CREATEROLE, и возможные атрибуты BYPASSRLS, REPLICATION, а также прочие системные привилегии относительно БД, кроме атрибута CREATEDB.

Компонент «securityprofile» при выполнении SQL-команд по блокировке/разблокировке группы пользователей Администраторы БД отличает их именно по указанным атрибутам. Включение администраторов БД в отдельную групповую роль для работы компонента не требуется.

Блокировка группы учетных записей администраторов БД выполняется тремя функциями:

- 
- 
- 

##### suspend_admins – блокировка группы администраторов БД;suspend_admins_seconds – блокировка группы администраторов БД с задержкой в секундах;suspend_admins_noerror – блокировка группы администраторов БД с игнорированием ошибки ранее заблокированных пользователей.Блокировка группы пользователей администраторов БД (suspend_admins)

Функция «suspend_admins» позволяет заблокировать категорию пользователей для заданной БД и имеет синтаксис SQL-команды:

> suspend_users(bigint, text DEFAULT NULL);

**Например**

Блокировка администраторов БД в БД «postgres» выполняется SQL-командой:

> SELECT securityprofile.suspend_admins('postgres', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image28.png" style="width:7.11432in;height:1.54167in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 18-13-39.png" />

Рисунок . – Команда блокировки администраторов БД в БД «postgres»

При проверке статуса блокировки, будет добавлена строка с OID БД «5», что соответствует БД «postgres».

> SELECT \* FROM securityprofile.status;
>
> SELECT oid FROM pg_database WHERE datname = 'postgres';

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image29.png" style="width:7.04457in;height:2.88889in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 18-25-30.png" />

Рисунок . – Проверка наличия блокировок

Вывод информации о всех пользователях выполняется SQL-командой:

> SELECT \* from securityprofile.is_locked ('');

##### Разблокирование группы пользователей администраторов БД (securityprofile.resume_ admins)

Разблокировка пользователей выполняется функцией «resume_users», имеющей синтаксис SQL-команды:

> resume_admins(bigint, text DEFAULT NULL);
>
> **Например**
>
> Разблокируем пользователей БД «db_test» SQL-командой:
>
> SELECT securityprofile.resume_admins('postgres', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image30.png" style="width:7.06129in;height:1.59306in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-15 10-40-56.png" />

Рисунок . – Разблокирование администраторов БД

Проверка статуса блокировки покажет изменение даты в поле «suspendedadminstime».

> SELECT \* FROM securityprofile.status;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image31.png" style="width:7.02654in;height:2.04167in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-15 10-41-26.png" />

Рисунок . – Проверка статуса блокировки

##### Блокировка группы пользователей администраторов БД с задержкой блокировки в устанавливаемой в секундах (securityprofile.suspend_admins_seconds)

Функция «suspend_admins_seconds» служит для блокировки администраторов БД с задержкой блокировки и имеет синтаксис SQL-команды:

> suspend_admins_seconds(bigint, text DEFAULT NULL);

**Например**

Блокирование администраторов БД «postgres» с отсрочкой блокировки устанавливаемой в секундах, выполняется SQL-командой:

```
SELECT securityprofile.suspend_admins_seconds('postgres', 60);
```

В SQL-команде указывается БД и время задержки блокировки, устанавливаемой в секундах.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image32.png" style="width:7.15902in;height:1.57292in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-15 11-41-04.png" />

Рисунок . – Блокирование администраторов БД с отсрочкой блокировки устанавливаемой в секундах

##### Разблокирование группы пользователей администраторов БД с задержкой блокировки в устанавливаемой в секундах (securityprofile.resume_admins_seconds)

Разблокирование администраторов БД выполняется функцией «resume_admins_seconds» имеющей синтаксис:

> resume_admins_seconds(bigint, text DEFAULT NULL);
>
> **Например**

Разблокируем администраторов БД «postgres» с задержкой в секундах, SQL-командой:

> SELECT securityprofile.resume_admins_seconds('postgres', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image33.png" style="width:7.03556in;height:1.55129in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-15 11-43-55.png" />

Рисунок . – Команда разблокировки администраторов БД с установленной задержкой по времени

##### Блокировка группы пользователей администраторов БД с игнорированием ошибки (securityprofile.admins_users_noerror)

Функция «suspend_admins_noerror» аналогично «suspend_admins», только не выдает ошибки при наличии уже установленной блокировки и имеет синтаксис SQL-команды:

> suspend_admins_noerror(text, bigint);

**Например**

Блокировка администраторов БД «postgres» игнорированием ошибки, выполняется SQL-командой:

> SELECT securityprofile.suspend_admins_noerror ('postgres', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image34.png" style="width:7.08056in;height:1.60788in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-15 12-16-43.png" />

Рисунок . – Блокировка администраторов БД «postgres» игнорированием ошибки

##### Разблокировка группы пользователей администраторов БД с игнорированием ошибки (resume_admins_noerror)

Разблокирование администраторов БД выполняется функцией «resume_admins_noerror» имеющей синтаксис:

> resume_admins_noerror(text, bigint);
>
> **Например**

Разблокируем администраторов БД SQL-командой вне зависимости от имеющихся ошибок:

> SELECT securityprofile.resume_admins_seconds('db_test', 0);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image35.png" style="width:7.22622in;height:1.67708in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-15 12-18-07.png" />

Рисунок . – Выполнение команды разблокировки пользователей

#### Проверка установленных блокировок

Компонент «securityprofile» обладает функциональной возможностью проверки установленных блокировок учетных записей пользователей функциями:

Проверить наличие блокировок в БД возможно следующими функциями:

- 
- 
- 

is_users_suspended – блокировка пользователей (см. п. 6.2.2.1);is_admins_suspended – блокировка администраторов БД (см. п. 6.2.2.2);is_suspended – существование блокировки (см. п. 6.2.2.3).Если в любой базе существует блокировка категории пользователя, то возвращаем «true», при отсутствии блокировкой выводится значение «false».

##### 

Проверка блокировки пользователейПроверка блокировки группы пользователей выполняется SQL-командой, имеющей синтаксис:

> SELECT securityprofile.is_users_suspended (text DEFAULT NULL);

**Например**

Сформируем SQL-команду для вывода наличия блокировки пользователей:

> SELECT securityprofile.is_users_suspended ('db_test');

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image36.png" style="width:7.0717in;height:1.54734in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 12-06-52.png" />

Рисунок . – Вывод состояния блокировки пользователей в БД

##### 

Проверка блокировки группы администраторов БДПроверка блокировки группы администраторов БД выполняется SQL-командой, имеющей синтаксис:

> SELECT securityprofile.is_admins_suspended (text DEFAULT NULL);

**Например**

Сформируем SQL-команду для вывода наличия блокировки администраторов БД:

> SELECT securityprofile.is_admins_suspended ('db_test');

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image37.png" style="width:7.14087in;height:1.66087in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 13-18-58.png" />

Рисунок . – Вывод состояния блокировки администраторов БД

##### 

Проверка существования блокировкиПроверка блокировки любой группы пользователей СУБД, как группы администраторов БД, так и группы пользователей, выполняется SQL-командой, имеющей синтаксис:

> SELECT securityprofile.is_suspended (text DEFAULT NULL);

**Например**

Сформируем SQL-команду для вывода наличия блокировок:

> SELECT securityprofile.is_suspended ('db_test');

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image38.png" style="width:7.12436in;height:1.53913in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-14 12-10-21.png" />

Рисунок . – Вывод состояния блокировок в БД

#### Создание новых ролей, присвоение атрибутов и системных привилегий

СУБД «Jatoba» поддерживает создание новых ролей (пользователей) с атрибутами ролей, приведенных в таблице Таблица 6.12. Для назначения атрибутов ролям необходимо выполнить следующую команду:

> АLTER ROLE \<имя учетной записи пользователя\> with \<атрибут ролей из таблицы Таблица 6.12\>;

Таблица 6.12 – Атрибуты ролей

| **Атрибут** | **Условный перевод** | **Описание** |
|----|----|----|
| SUPERUSER | Суперпользователь | Роль «Суперпользователь» обладает полными правами доступа к СУБД |
| INHERIT | Наследование | Роли, имеющие атрибут «INHERIT», автоматически используют права всех ролей, членами которых они являются, в том числе и унаследованные этими ролями права. |
| CREATEROLE | Право создание роли | Роль имеет разрешение на создание других ролей. Роль с правом «CREATEROLE» может не только создавать, но и изменять и удалять другие роли, а также выдавать и отзывать членство в ролях |
| CREATEDB | Право создания базы данных | Роль имеет разрешение на создание базы данных. |
| LOGIN | Право входа | Роль с атрибутом «LOGIN» рассматривается, как роль пользователя базы данных, а также может использоваться для начального подключения к базе данных. |
| REPLICATION | Право репликации | Роль имеет разрешение на запуск потоковой репликации. |
| BypassRls |  | Атрибут роли, определяющий игнорирование все политики защиты на уровне строк (RLS – Row Level Security) |

СУБД «Jatoba» регулирует системные привилегии для ролей с атрибутом «Login» в соответствии с таблицей Таблица 6.13.

Таблица . – Системные привилегии для ролей с атрибутом «LOGIN»

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 50%" />
<col style="width: 26%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Наименование</strong></th>
<th style="text-align: center;"><strong>Синтаксис предоставления разрешений роли на конкретные объекты</strong></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>SELECT LARGE OBJECT</td>
<td rowspan="2"><p>GRANT { { SELECT | UPDATE } [, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON LARGE OBJECT &lt;идентификатор большого объекта&gt; [, ...]</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Получение больших объектов</td>
</tr>
<tr>
<td>UPDATE LARGE OBJECT</td>
<td style="text-align: left;">Изменение данных в больших объектах</td>
</tr>
<tr>
<td>SELECT SEQUENCE</td>
<td rowspan="3"><p>GRANT { { USAGE | SELECT | UPDATE }</p>
<p>[, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON { SEQUENCE &lt;название последовательности&gt; [, ...]</p>
<p>| ALL SEQUENCES IN SCHEMA &lt;название схемы&gt; [, ...] }</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Получение значения последовательностей</td>
</tr>
<tr>
<td>UPDATE SEQUENCE</td>
<td style="text-align: left;">Обновление значения последовательностей</td>
</tr>
<tr>
<td>USAGE SEQUENCE</td>
<td style="text-align: left;">Использование последовательности</td>
</tr>
<tr>
<td>TRIGGER TABLE</td>
<td><p>GRANT { { TRIGGER }</p>
<p>[, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON { [ TABLE ] &lt;название таблицы&gt; [, ...]</p>
<p>| ALL TABLES IN SCHEMA &lt;название схемы&gt; [, ...] }</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Установка триггеров на таблицы</td>
</tr>
<tr>
<td>REFERENCES TABLE</td>
<td><p>GRANT { { REFERENCES }</p>
<p>[, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON { [ TABLE ] &lt;название таблицы&gt; [, ...]</p>
<p>| ALL TABLES IN SCHEMA &lt;название схемы&gt; [, ...] }</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Использование зависимых таблиц</td>
</tr>
<tr>
<td>REFERENCES TABLE COLUMN</td>
<td><p>GRANT { { REFERENCES } (&lt;название столбца&gt; [, ...] )</p>
<p>[, ...] | ALL [ PRIVILEGES ] (&lt;название столбца&gt; [, ...] ) }</p>
<p>ON [ TABLE ] &lt;название таблицы&gt; [, ...]</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Использование колонок зависимых таблиц</td>
</tr>
<tr>
<td>CREATE DATABASE</td>
<td rowspan="3"><p>GRANT { { CREATE | CONNECT | TEMPORARY } [, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON DATABASE &lt;название базы данных&gt; [, ...]</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Создание базы данных</td>
</tr>
<tr>
<td>CONNECT DATABASE</td>
<td style="text-align: left;">Подключение к базе данных</td>
</tr>
<tr>
<td>TEMPORARY DATABASE</td>
<td style="text-align: left;">Использование временных баз данных</td>
</tr>
<tr>
<td>CREATE SCHEMA</td>
<td rowspan="2"><p>GRANT { { CREATE | USAGE } [, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON SCHEMA &lt;название схемы&gt; [, ...]</p>
<p>TO { [ GROUP ] &lt;&lt;название роли&gt; PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Создание схемы</td>
</tr>
<tr>
<td>USAGE SCHEMA</td>
<td style="text-align: left;">Использование схемы</td>
</tr>
<tr>
<td>CREATE TABLESPACE</td>
<td><p>GRANT { CREATE | ALL [ PRIVILEGES ] }</p>
<p>ON TABLESPACE &lt;название табличного пространства&gt; [, ...]</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Создание табличного пространства</td>
</tr>
<tr>
<td>EXECUTE FUNCTION</td>
<td><p>GRANT { EXECUTE | ALL [ PRIVILEGES ] }</p>
<p>ON { FUNCTION &lt;название функции&gt; ( [ [ &lt;режим аргумента&gt; ] [ &lt;название аргумента&gt; ] &lt;тип данных аргументов функции&gt; [, ...] ] ) [, ...]</p>
<p>| ALL FUNCTIONS IN SCHEMA &lt;название схемы&gt; [, ...] }</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Выполнение функций</td>
</tr>
<tr>
<td>USAGE DOMAIN</td>
<td><p>GRANT { USAGE | ALL [ PRIVILEGES ] }</p>
<p>ON DOMAIN &lt;название домена&gt; [, ...]</p>
<p>TO &lt;название роли&gt; [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Использование домена</td>
</tr>
<tr>
<td>USAGE FOREIGN DATA WRAPPER</td>
<td><p>GRANT { USAGE | ALL [ PRIVILEGES ] }</p>
<p>ON FOREIGN DATA WRAPPER &lt;название внешнего источника данных&gt; [, ...]</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Использование внешних источников данных</td>
</tr>
<tr>
<td>USAGE FOREIGN SERVER</td>
<td><p>GRANT { USAGE | ALL [ PRIVILEGES ] }</p>
<p>ON FOREIGN SERVER &lt;название сервера&gt; [, ...]</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Использование внешних серверов</td>
</tr>
<tr>
<td>USAGE LANGUAGE</td>
<td><p>GRANT { USAGE | ALL [ PRIVILEGES ] }</p>
<p>ON LANGUAGE &lt;название языка программирования&gt; [, ...]</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Использования языка программирования</td>
</tr>
<tr>
<td>USAGE TYPE</td>
<td><p>GRANT { USAGE | ALL [ PRIVILEGES ] }</p>
<p>ON TYPE &lt;название типа&gt; [, ...]</p>
<p>TO &lt;название роли&gt; [, ...] [ WITH GRANT OPTION ]</p></td>
<td style="text-align: left;">Использование тип</td>
</tr>
</tbody>
</table>

СУБД «Jatoba» поддерживает права субъекта доступа, указанные в таблице Таблица 6.14, к объектам доступа. Для предоставления привилегий необходимо использовать инструкции «GRANT».

Таблица 6.14 – Права субъекта доступа к объектам доступа

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 60%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Право</strong></th>
<th style="text-align: center;"><strong>Синтаксис</strong></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>SELECT</td>
<td><p>на таблицу:</p>
<p>GRANT { { SELECT}</p>
<p>[, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON { [ TABLE ] &lt;название таблицы&gt; [, ...]</p>
<p>| ALL TABLES IN SCHEMA &lt;название схемы&gt; [, ...] }</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p>
<p>на столбец:</p>
<p>GRANT { { SELECT }</p>
<p>[, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON { [ TABLE ] &lt;название таблицы&gt; [, ...]</p>
<p>| ALL TABLES IN SCHEMA &lt;название схемы&gt; [, ...] }</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td>Позволяет читать содержание объекта, а также выполнять команду «<a href="https://postgrespro.ru/docs/postgresql/9.6/sql-select">SELECT</a>» для любого столбца или перечисленных столбцов в заданной таблице, представлении или последовательности</td>
</tr>
<tr>
<td>INSERT</td>
<td><p>GRANT { { INSERT }</p>
<p>[, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON { [ TABLE ] &lt;название таблицы&gt; [, ...]</p>
<p>| ALL TABLES IN SCHEMA &lt;название схемы&gt; [, ...] }</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td>Позволяет вставлять строки в заданную таблицу с помощью команды «Insert»</td>
</tr>
<tr>
<td>UPDATE</td>
<td><p>на таблицу:</p>
<p>GRANT { { UPDATE }</p>
<p>[, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON { [ TABLE ] &lt;название таблицы&gt; [, ...]</p>
<p>| ALL TABLES IN SCHEMA &lt;название схемы&gt; [, ...] }</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p>
<p>на столбец:</p>
<p>GRANT { { UPDATE }</p>
<p>[, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON { [ TABLE ] &lt;название таблицы&gt; [, ...]</p>
<p>| ALL TABLES IN SCHEMA &lt;название схемы&gt; [, ...] }</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td>Позволяет изменять с помощью команды «<a href="https://postgrespro.ru/docs/postgresql/9.6/sql-update">UPDATE</a>» данные во всех либо только перечисленных столбцах в заданной таблице</td>
</tr>
<tr>
<td>DELETE</td>
<td><p>GRANT { { DELETE }</p>
<p>[, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON { [ TABLE ] &lt;название таблицы&gt; [, ...]</p>
<p>| ALL TABLES IN SCHEMA &lt;название схемы&gt; [, ...] }</p>
<p>TO { [ GROUP ] &lt;название роли&gt; | PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td>Позволяет удалять строки из заданной таблицы с помощью команды «<a href="https://postgrespro.ru/docs/postgresql/9.6/sql-delete">DELETE</a>»</td>
</tr>
<tr>
<td>TRUNCATE</td>
<td><p>GRANT { { TRUNCATE }</p>
<p>[, ...] | ALL [ PRIVILEGES ] }</p>
<p>ON { [ TABLE ] &lt;название таблицы&gt; [, ...]</p>
<p>| ALL TABLES IN SCHEMA &lt;название схемы&gt; [, ...] }</p>
<p>TO { [ GROUP ] &lt;название роли&gt;| PUBLIC } [, ...] [ WITH GRANT OPTION ]</p></td>
<td>Позволяет опустошить заданную таблицу или набор таблиц с помощью команды «<a href="https://postgrespro.ru/docs/postgresql/9.6/sql-truncate">TRUNCATE</a>»</td>
</tr>
</tbody>
</table>

#### Создание ролей при активированной парольной политике

При активированной парольной политике, новые пользователи должны создаваться в два этапа. На первом этапе создается роль без пароля. На втором этапе устанавливается пароль. Пароль устанавливается при помощи команды:

> АLTER ROLE \<имя учетной записи пользователя\> password '\<пароль пользователя\>';

Смена пароля через команду «password» недоступна. СУБД «Jatoba» блокирует выполнение данной команды и предложит сменить пароль через команду «аlter role».

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image39.png" style="width:7.08638in;height:2.464in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\securityprofile\PIC\Screenshot from 2023-02-08 04-16-40.png" />

Рисунок . – Ошибка установки пароля пользователя через команду «password»

#### Блокирование сеанса доступа в СУБД после установленного времени бездействия (неактивности) пользователя

Блокирование сеанса доступа в СУБД после установленного времени бездействия (неактивности) пользователя выполняется установкой параметров:

- 
- 

idle_session_timeout;idle_in_transaction_session_timeout.Параметры устанавливаются в разделе «CLIENT CONNECTION DEFAULTS» конфигурационного файла postgresql.conf.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image40.png" style="width:7.14019in;height:0.992in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_1\Пользовательская документация\5.X_Draft\pic\Screenshot from 2023-11-09 03-06-19.png" />

Рисунок . – Параметры «idle_session_timeout» и «idle_in_transaction_session_timeout» в конфигурационном файле postgresql.conf

> idle_session_timeout

Параметр «idle_session_timeout» в СУБД определяет время (в секундах), в течение которого неактивная сессия будет оставаться открытой. По истечении этого времени неактивная сессия закрывается и все связанные с ней ресурсы освобождаются. Этот параметр может быть полезен для управления ресурсами сервера и предотвращения атак, связанных с захватом соединений (connection hijacking attacks).

> idle_in_transaction_session_timeout

В СУБД параметр «idle_in_transaction_session_timeout» определяет время неактивности (в секундах) для сессии, которая участвует в транзакции. По истечении этого времени такая сессия будет автоматически завершена.

Это помогает предотвратить ситуации, когда сессии «застревают» в состоянии ожидания из-за долго выполняющихся транзакций. Это особенно важно, если есть длительные транзакции, которые могут блокировать другие запросы к БД.

По умолчанию значение этого параметра равно 0, что означает отсутствие ограничения на время неактивности. Однако, рекомендуется установить значение, которое подходит для используемого приложения и среды.

#### Прерывание текущих сессий в БД

Функция securityprofile.terminate_backend(database_name text), используется для прерывания всех активных сессии, всех категорий пользователей в указанной базе данных.

**Например**

> SELECT securityprofile.terminate_backend('db_test');

### Генератор паролей

#### Установка расширения pwgen

Установка компонента pwgen не требует установки пакета, т.к. исходный файл расширения устанавливается при базовой установке СУБД.

Расширение устанавливается от имени и с правами привилегированного пользователя SQL-командой:

```
# CREATE extension pwgen;
```
>
```
# \dx
```

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image41.png" style="width:7.09722in;height:2.46368in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-04-15 05-08-03.png" />

Рисунок . – Установка расширения «pwgen»

Расширение работает только в той базе, в которой его установил администратор.

#### Генерация пароля

Вызов функции генерации пароля доступен для всех пользователей СУБД.

Генерация паролей осуществляется вызовом специальной SQL-функции. Функция имеет несколько параметров, через которые можно определять состав символов в генерируемых паролях. По правилам SQL значения параметров функции можно задать либо последовательно друг за другом, либо указав конкретное название параметра функции и его значение.

Без аргументов, по умолчанию, расширение сгенерирует шестисимвольный пароль с одним спецсимволом:

> SELECT pwgen();

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image42.png" style="width:6.97826in;height:1.76389in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-04-15 05-14-42.png" />

Рисунок . – Генерация пароля с параметрами по умолчанию

SQL-команда с указанием последовательности значений имеет синтаксис:

> SELECT pwgen(
>
> \[длина пароля\],
>
> \[количество строчных букв\],
>
> \[количество прописных букв\],
>
> \[количество цифр\],
>
> \[количество специальных символов\],
>
> \['допустимый набор строчных символов'\],
>
> \['допустимый набор прописных символов'\],
>
> \['допустимый набор специальных символов'\]);

**Например**

SQL-команда генерации пароля со следующими характеристиками:

- 
- 
- 
- 
- 
- 
- 
- 

длиной 10 символов:2 строчными буквами;2 прописными буквами;1 цифрой;1специальным символом;допустимый набором строчных символов - 'abcde';допустимым набором прописных символов - 'ABCDE';допустимым набором специальных символов - '@!';будет следующей:

```
# SELECT pwgen(10,2,2,1,1,'abcde','ABCDE','@!');
```

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image43.png" style="width:7.15972in;height:1.48032in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-04-15 22-39-08.png" />

Рисунок . – SQL-команда генерации пароля по последовательности параметров

Количество задаваемых букв не должно превышать длину пароля.

Значение 0 в параметрах количества символов функции pwgen означает, что не накладывается никаких ограничений на присутствие символов из соответствующего алфавита, заданного параметрами 6-10.

Параметры, задающие количество символов в пароле, определяют минимальное число символов в пароле каждого типа. Возможен вывод большего числа символов.

Сгенерировать пароли по задаваемым аргументам возможно используя параметры приведенными в таблице Таблица 6.15.

| **Параметры** | **Описание** | **Значения** |
|----|----|----|
| pw_len | длина генерируемого пароля | по умолчанию 6 |
| pw_lc_char_cnt | количество строчных (low case) символов в пароле | по умолчанию минимум 1 |
| pw_uc_char_cnt | количество прописных (upper case) символов в пароле | по умолчанию минимум 1 |
| pw_num_cnt | количество цифр в пароле | по умолчанию минимум 1 |
| pw_spec_cnt | количество специальных символов в пароле | по умолчанию минимум 1 |
| pw_lc_char_allowed | допустимый набор строчных символов, из которых генерируется пароль | 'abcdefghijklmnopqrstuvwxyz' |
| pw_uc_char_allowed | допустимый набор прописных символов, из которых генерируется пароль | 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' |
| pw_spec_allowed | допустимый набор специальных символов, из которых генерируется пароль | '\\"#\$%&()\*+,-./:;\<=\>?@\[\]^_\`{\|}~' |

Таблица . – Параметры и значения для генерации пароля

**Например**

SQL-команда генерации пароля со следующими характеристиками:

- 
- 
- 

> длиной 10 символов (pw_len =\>10);3 строчными символами в пароле (pw_lc_char_cnt =\>3);2 цифрами в пароле (pw_num_cnt =\> 5).# SELECT pwgen(pw_len =\>10, pw_lc_char_cnt =\>3, pw_num_cnt =\> 5);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image44.png" style="width:7.09192in;height:1.77778in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-04-15 23-05-27.png" />

Рисунок . – Генерация пароля по заданным параметрам

#### Генерация множества паролей

Расширение «pwgen» для генерации множества паролей использует функцию СУБД возвращения множества. В которой задается начало отсчета и конец отсчета.

SQL-команда имеет синтаксис:

> SELECT pwgen() from generate_series(start integer, stop integer);

**Например**

SQL-команда генерации множества паролей с началом отсчета от единицы и концом отсчета до 10 будет следующей:

> select pwgen() from generate_series(1, 10);

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image45.png" style="width:6.65887in;height:3.08333in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-04-16 00-09-10.png" />

Рисунок . – Генерация множества паролей

#### Удаление расширения «pwgen»

Расширение удаляется SQL-командой:

> DROP extension pwgen;

### Регистрация событий безопасности СУБД «Jatoba»

#### Настройки регистраций событий безопасности СУБД «Jatoba» под управлением ОС Windows Server

Функциональная возможность СУБД, а именно функция syslogcollector (внутренний механизм), позволяет отправлять события в хранилище ОС Windows Server.

Для настройки регистрации событий безопасности СУБД «Jatoba» необходимо выполнить ряд действий:

1)  
2)  

> От учетной записи администратора СУБД подключиться к ОС и открыть файл «postgresql.conf»[^4]<sup>)</sup>.В файле «postgresql.conf» прописать следующие параметры:log_destination = 'eventlog'
>
> logging_collector = on
>
> log_connections = on
>
> log_disconnections = on
>
> log_statement = 'mod'
>
> log_hostname = on

3)  

> Перезагрузить СУБД «Jatoba» при помощи команды:net stop JatobaServer
>
> net start JatobaServer

Расшифровка параметров по регистрации событий СУБД «Jatoba», которая установлена в ОС Windows Server, представлены в таблице Таблица 6.16.

Таблица . – Расшифровка параметров по регистрации событий СУБД «Jatoba»

| **Параметр** | **Описание** |
|----|----|
| log_destination | Данный параметр указывает на то, где будут храниться события СУБД «Jatoba» |
| logging_collector | Данный параметр позволяет включать сборщик журналов, который перенаправляет сообщения в файл журнала |
| log_connections | Включение данного параметра позволяет регистрировать все подключения к СУБД «Jatoba», включая неуспешные |
| log_disconnections | Включение данного параметра позволяет регистрировать завершение сеанса |
| log_statement | Данный параметр управляет, тем какие SQL-команды будут регистрироваться. Параметр mod позволяет записывать следующие команды: все команды DDL (CREATE, ALTER, DROP), а так же INSERT, UPDATE, DELETE, TRUNCATE и COPY FROM. PREPARE, EXECUTE и EXPLAIN ANALYZE |
| log_hostname | Включение данного параметра позволяет регистрировать имя хоста |

#### Настройки регистрации событий безопасности СУБД «Jatoba» под управлением ОС семейства GNU/Linux

Функциональная возможность СУБД, а именно функция syslogcollector (внутренний механизм), позволяет отправлять события из папки в хранилище ОС семейства GNU/Linux.

Для настройки регистрации событий безопасности СУБД «Jatoba» необходимо выполнить ряд действий:

1)  
2)  

> От учетной записи администратора СУБД подключиться к ОС и открыть файл «postgresql.conf»[^5]<sup>)</sup>.В файле «postgresql.conf» перепроверить следующие параметры:#-------------------------------------------------------------
>
```
# JATOBA LOGGING PARAMETERS
```
>
> \#--------------------------------------------------------------
>
> log_destination = 'stderr'
>
> logging_collector = on
>
> log_directory = 'log'
>
> log_filename = 'jatoba-%a.log'
>
> log_rotation_age = 1d
>
> log_rotation_size = 0
>
> log_truncate_on_rotation = on
>
> log_line_prefix = '%m \[%p\] '

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image46.png" style="width:7.09701in;height:1.94776in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-04-17 02-31-08.png" />

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Если не планируется использовать компоненты pgAudit и pgauditlogtofile, то будет целесообразным установить параметр регистрации событий СУБД log_statement. |
|----|----|

Рисунок . – Предустановленные параметры логирования

3)  

> Перезагрузить СУБД «Jatoba» при помощи команды, если параметры были изменены:# systemctl restart jatoba-<ver>

Параметры регистрации событий и их значения, используемые СУБД и ее компонентами представлены в таблице Таблица 6.17.

| **Параметр** | **Параметр СУБД** | **Параметр компонента** | **Значение** | **Описание** | **Компонент** | **shared_preload_libraries** | **EXTENSION** |
|:---|:--:|:--:|:---|:---|:---|:--:|:--:|
| log_destination | Х |  | 'csvlog' | Данный параметр указывает на то, где будут хранятся события СУБД «Jatoba» | ja_csum | Х |  |
|  | Х |  | 'csvlog' |  | ja_Log |  |  |
|  | Х |  | 'stderr,csvlog' |  | auto_explain | Х | Х |
| log_connections | Х |  | on | Параметра позволяет регистрировать все подключения к СУБД «Jatoba», включая неуспешные | ja_csum | Х |  |
|  |  |  |  |  | pgBadger |  |  |
| log_disconnections | Х |  | ON | Включение данного параметра позволяет регистрировать завершения сеанс | pgBadger |  |  |
| log_directory | Х |  | 'log' | Параметр указывает на директорию хранения журнала аудита СУБД | ja_csum | Х |  |
|  |  |  |  |  | auto_explain | Х | Х |
|  |  |  |  |  | ja_Log |  |  |
| log_min_messages | Х |  | info | Параметр определяющий минимальный уровень записываемых сообщений | ja_csum | Х |  |
| log_filename | Х |  | log_filename = 'jatoba-%Y-%m-%d_%H%M%S.log' | Параметр задаёт имя файла журнала аудита СУБД | auto_explain | Х | Х |
|  |  |  |  |  | ja_Log |  |  |
| log_rotation_age | Х |  | 1D | Параметр определяет максимальное время жизни файла аудита событий СУБД | auto_explain | Х | Х |
| log_rotation_size | Х |  | 0 | Параметр определяет ротацию файла аудита СУБД по размеру. По умолчанию значение -10 Мб. При нулевом значении ротация по размеру файла не производится. | auto_explain | Х | Х |
| log_truncate_on_rotation | Х |  | ON | Параметр устанавливает перезапись существующего файла аудита СУБД, а не дополнительную запись в них. | auto_explain | Х | Х |
| log_line_prefix | Х |  | '%t \[%p\]: user=%u,db=%d,app=%a,client=%h' | Параметр устанавливает наличие статусной информации в строках журнала аудита СУБД | pgBadger |  |  |
|  |  |  | '%m \[%p\] app=%a host=%h user=%u db=%d ' |  | auto_explain | Х | Х |
| syslog_facility | Х |  | LOCAL0 | Параметр используется при включенном при использование syslog |  |  |  |
| syslog_ident | Х |  | 'postgres' | При использование syslog данный параметр указывает имя программы, используемое для идентификации сообщений |  |  |  |
| log_timezone | Х |  |  | Параметр указывает на часовой пояс, используемых для отметок времени, записываемых в журнале |  |  |  |
| log_mask_password | Х |  | 1 | Параметр включающий функцию маскирования паролей | log_mask_password |  |  |
| log_statement | Х |  | all | Данный параметр управляет, тем какие SQL-команды будут регистрироваться. | ja_Log |  |  |
|  |  |  |  |  | log_mask_password |  |  |
| log_hostname | Х |  | on | Включение данного параметра позволяет регистрировать имя хоста |  |  |  |
| track_io_timing | Х |  | on | Параметр включает мониторинг времени чтения и записи блоков | auto_explain | Х | Х |
| log_min_duration_statement | Х |  | 10 | Параметр записывает продолжительность выполнения всех команд, время работы которых не меньше указанного | pgBadger |  |  |
|  |  |  |  |  | auto_explain | Х | Х |
|  |  |  |  |  | log_mask_password |  |  |
| log_duration | Х |  | true | Параметр в СУБД, который контролирует, будет ли длительность выполненных запросов регистрироваться в журнале. Если log_duration включён (установлен в true), СУБД будет регистрировать длительность каждого выполненного SQL-запроса в журнале сервера. | log_mask_password |  |  |
| log_checkpoints | Х |  | on | Параметр включает регистрацию выполнения контрольных точек и точек перезапуска сервера | pgBadger |  |  |
| log_lock_waits | Х |  | on | Параметр определяет, нужно ли фиксировать в журнале события, когда сеанс ожидает получения блокировки дольше, чем указано в deadlock_timeout | pgBadger |  |  |
| log_temp_files | Х |  | 0 | Параметр включает регистрацию имен и размеров временных файлов | pgBadger |  |  |
| log_autovacuum_min_duration | Х |  | 0 | Параметр включает регистрацию действий по автоочистке | pgBadger |  |  |
| log_error_verbosity | Х |  | default | Параметр определяет количество детальной информации | pgBadger |  |  |
| logging_collector | Х |  | on | Параметр позволяет включать сборщик журналов, который перенаправляет сообщения в файл журнала | auto_explain | Х | Х |
|  |  |  |  |  | ja_csum | Х |  |
|  |  |  |  |  | ja_Log |  |  |
| auto_explain.log_min_duration |  | Х | 10 | минимальное время выполнения запроса в миллисекундах, при превышении которого план запроса будет попадать в лог | auto_explain | Х | Х |
| auto_explain.log_nested_statements |  | Х | true | Параметр включает регистрацию планов выполнения вложенных операторов (операторов, выполняемых внутри функции) | auto_explain | Х | Х |
| auto_explain.log_analyze |  | Х | true | Параметр определяет регистрацию плана выполнения запроса | auto_explain | Х | Х |
| auto_explain.log_buffers |  | Х | true | Параметр определяет, будет ли регистрироваться статистика использования буферного кеша | auto_explain | Х | Х |
| auto_explain.log_triggers |  | Х | on | Параметр определяет регистрацию выполнении триггеров | auto_explain | Х | Х |
| track_io_timing | Х |  | 'on' | Параметр включет мониторинг времени чтения и записи блоков | auto_explain | Х | Х |

Таблица . – Параметры и их значения СУБД и ее компонентов

#### Компонент «pgAudit». Настройка расширенной регистрации событий безопасности

Компонент «pgAudit» обеспечивает расширенное журналирование событий. Компонент выполнен в виде расширения СУБД. Версия компонента – 16.0.0.

Установка пакета компонента описана в документе 643.72410666.00067-07 97 01 «Руководство по установке».

После установки компонента поле «error message» расширяется данными:

- тип записи события;
- № выражения;
- № подвыражения;
- класс события;
- SQL–операция;
- тип объекта БД;
- имя объекта БД;
- полный текст SQL–запроса (скрипта);
- параметры SQL–запроса (скрипта).

Структура полей событий безопасности меняется, как представлено в таблице Таблица 6.18.

Таблица . – Структура полей событий безопасности

| **№** | **Стандартные поля событий безопасности** |  |  |  |  |
|:--:|----|----|----|----|----|
|  |  |  | **Поля событий безопасности с pgAudit** |  |  |
| 1 | **Time stamp with milliseconds** |  |  | Штамп времени с миллисекундами |  |
| 2 | **Criticality** |  |  | Критичность события |  |
| 3 | **Class** |  |  | Тип события |  |
| 4 | **User name** |  |  | Имя пользователя |  |
| 5 | **Database name** |  |  | Имя базы данных |  |
| 6 | **Process ID** |  |  | Идентификатор процесса |  |
| 7 | **Client host** |  |  | Клиентский узел |  |
| 8 | **Port number** |  |  | Номер порта |  |
| 9 | **Session ID** |  |  | Идентификатор сессии |  |
| 10 | **Per-session line numbe** |  |  | Номер строки каждой сессии |  |
| 11 | **Command tag** |  |  | Тег команды |  |
| 12 | **Session start time** |  |  | Время начала сессии |  |
| 13 | **Virtual transaction ID** |  |  | Виртуальный идентификатор транзакции |  |
| 14 | **Regular transaction ID** |  |  | Идентификатор транзакции |  |
| 15 | **Error severity** |  |  | Уровень важности ошибки |  |
| 16 | **SQLSTATE code** |  |  | Код ошибки SQLSTATE |  |
| 17 | **Error message** |  |  | Сообщение об ошибке |  |
| 17.1 |  | **Audit_type** |  |  | Тип записи события |
| 17.2 |  | **Statement_id** |  |  | № выражения |
| 17.3 |  | **Substatement_id** |  |  | № подвыражения |
| 17.4 |  | **Class** |  |  | класс события |
| 17.5 |  | **Command** |  |  | SQL–операция |
| 17.6 |  | **Object_type** |  |  | Тип объекта БД |
| 17.7 |  | **Object_name** |  |  | Имя объекта БД |
| 17.8 |  | **Statement** |  |  | Полный текст SQL–запроса (скрипта) |
| 17.9 |  | **Parameter** |  |  | Параметры SQL–запроса (скрипта) |
| 18 | **Error message detail** |  |  | Подробности к сообщению об ошибке |  |
| 19 | **Hint** |  |  | Подсказка к сообщению об ошибке |  |
| 20 | **Internal query that led to the error** |  |  | Внутренний запрос |  |
| 21 | **Character count of the error position therein** |  |  | Номер символа внутреннего запроса, где произошла ошибка |  |
| 22 | **Error context** |  |  | Контекст ошибки |  |
| 23 | **User query that led to the error** |  |  | Запрос пользователя |  |
| 24 | **Character count of the error position therein** |  |  | Номер символа в запросе пользователя |  |
| 25 | **Location of the error in the PostgreSQL source code** |  |  | Расположение ошибки в исходном коде |  |

##### Установка расширения pgAudit

Для установки расширения pgAudit необходимо:

1)  

- 

> Открыть конфигурационный файл:в ОС Windows:C:\Program Files\GIS\Jatoba\\ver\>\data\postgresql.conf

- 

> в GNU Linux:nano /var/lib/jatoba/<ver>/data/postgresql.conf

2)  

> Установить параметр в конфигурационном файле в postgresql.conf:shared_preload_libraries = 'pgaudit'

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image47.png" style="width:7.05764in;height:1.76402in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-04-17 02-01-24.png" />

Рисунок . – Параметр загрузки библиотеки компонента «pgAudit»

3)  

- 

> Перезапустить СУБД «Jatoba»:в ОС Windows:net stop JatobaServer
>
> net start JatobaServer

- 

> в GNU Linux:systemctl restart jatoba-<ver>

4)  

> Войти в СУБД от имени и с правами пользователя «SUPERUSER», выполнить SQL–команду:CREATE EXTENSION pgaudit;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image48.png" style="width:7.08955in;height:1.10348in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-04-17 05-58-00.png" />

Рисунок . – Установка расширения «pgaudit»

5)  

- 

> Перезапустить СУБД:в ОС Windows:net stop JatobaServer
>
> net start JatobaServer

- 

> в GNU Linux:systemctl restart jatoba-<ver>

После чего установку расширения можно считать оконченной.

##### Функциональные возможности компонента pgAudit

Для корректной работы компонента потребуется, чтобы в конфигурационном файле был установлен параметр «log_statement», как было выше описано в п. 6.4.1, 6.4.2.

**pgaudit.log**

Обязательно должен быть установлен параметр pgaudit.log. По умолчанию установлено значение «none». При помощи SQL-команды можно установить какие классы операторов будут регистрироваться в журнале событий.

Значения параметра могут быть следующими:

- 
- 
- 
- 
- 
- 
- 
- 

READ – регистрируются SQL-команды SELECT, COPY в случае если источником является отношение или запрос;WRITE – регистрируются SQL-команды INSERT, UPDATE, DELETE, TRUNCATE, и COPY;FUNCTION – регистрируются функции CALLS и DO;ROLE – регистрируются SQL-команды относящиеся к ролям и системным привилегиям такие как, GRANT, REVOKE, CREATE/ALTER/DROP ROLE;DDL – регистрируются SQL-команды DDL не относящиеся к параметру ROLE;MISC – регистрируются прочие команды SQL-команды, такие как DISCARD, FETCH, CHECKPOINT, VACUUM, SET;MISC_SET – регистрируются SQL-команды типа SET;ALL – регистрируются все перечисленные SQL-команды.Сравнение регистрируемых SQL-команд при стандартной регистрации событий безопасности СУБД и с применением компонента pgAudit приведены в таблице Таблица 6.19.

Таблица . – Сравнительная таблица регистрируемых SQL-команд

| **log_statement** |  | **pg_Audit** |  |
|:---|:---|:---|:---|
| **Параметр** | **SQL-команды записываемые в журнал** | **Параметр** | **SQL-команды записываемые в журнал** |
| **ALL** |  | **ALL** |  |
|  |  | **READ** | SELECT |
|  |  |  | COPY TO |
| **MOD** | INSERT | **WRITE** | INSERT |
|  | UPDATE |  | UPDATE |
|  | DELETE |  | DELETE |
|  | TRUNCATE |  | TRUNCATE |
|  | COPY FROM |  | COPY FROM |
|  | PREPARE |  |  |
|  | EXECUTE |  |  |
|  | EXPLAIN ANALYZE |  |  |
| **DDL** | CREATE | **DDL** | CREATE |
|  | ALTER |  | ALTER |
|  | DROP |  | DROP |
|  |  | **FUNCTION** | CALL |
|  |  |  | DO |
|  |  | **ROLE** | GRANT |
|  |  |  | REVOKE |
|  |  |  | ALTER DEFAULT PRIVILEGES |
|  |  |  | SET ROLE |
|  |  | **MISC** | DISCARD |
|  |  |  | FETCH |
|  |  |  | CHECKPOINT |
|  |  |  | VACUUM |
|  |  |  | SET |
|  |  | **MISC_SET** | SET |
| **NONE** |  | NONE |  |

**pgaudit.log_catalog**

Указывает, что ведение журнала сеанса должно быть включено в случае, когда все отношения в операторе находятся в pg_catalog.

Значение по умолчанию – on.

**pgaudit.log_client**

Указывает, будут ли сообщения журнала видны клиентскому процессу, такому как psql. Обычно этот параметр следует оставлять отключенным, но он может быть полезен для отладки или других целей.

Значение по умолчанию – off.

**pgaudit.log_level**

Указывает уровень детализации журнала, который будет использоваться для записей журнала.

Уровни детализации журнала FATAL и PANIC запрещены.

Этот параметр используется для регрессионного тестирования, а также может быть полезен конечным пользователям для тестирования или других целей.

Значение по умолчанию – log.

**pgaudit.log_parameter**

Параметр указывает, что журнал аудита должен включать параметры, которые были переданы с оператором. При наличии параметров они будут включены в CSV формат после текста оператора.

Значение по умолчанию – off.

**pgaudit.log_relation**

Параметр указывает должны ли отражаться в журнале регистрации событий отдельные записи для каждого отношения (TABLE, VIEW, и т.д.), указанного в операторе SELECT или DML.

Значение по умолчанию – off.

**pgaudit.log_rows**

Параметр указывает, что журнал аудита должен включать строки, извлеченные или затронутые оператором. Если включено, поле строк будет включено после поля параметров.

Значение по умолчанию – off.

**pgaudit.log_statement**

Параметр указывает, будет ли протоколирование включать текст инструкции и параметры (если включено). В зависимости от требований журнал аудита может не требовать этого, и журналы становятся менее подробными.

Значение по умолчанию – on.

**pgaudit.log_statement_once**

Параметр указывает, будет ли протоколирование включать текст оператора и параметры с первой записью журнала для комбинации оператора/подоператора или с каждой записью. Отключение этого параметра приведет к менее подробному журналированию, но может затруднить определение инструкции, сгенерировавшей запись в журнале, хотя пары оператор/подоператор вместе с идентификатором процесса должно быть достаточно для идентификации текста оператора, зарегистрированного с предыдущей записью.

Значение по умолчанию – off.

**pgaudit.role**

Указывает основную роль, используемую для ведения журнала аудита объектов. Можно определить несколько ролей аудита, назначив их главной роли. Это позволяет нескольким группам отвечать за различные аспекты ведения журналов аудита.

По умолчанию роли нет.

**Пример № 1. Создание записи журнала аудита для всех событий**

Для создания записи журнала аудита для всех событий потребуется:

1)  

> От имени и с правами пользователя «Superuser» авторизоваться в СУБД:psql -U postgres

2)  

> Задать запись всех событий в журнал аудита, выполнив SQL-команду:ALTER SYSTEM SET pgaudit.log = 'All';

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image49.png" style="width:7.17164in;height:1.09269in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-04-17 06-00-03.png" />

Рисунок . – Установка параметра записи всех событий в журнал аудита

3)  

> Проверить заданный параметр записи всех событий:SELECT name,setting FROM pg_settings WHERE name LIKE 'pgaudit%';

**Пример № 2. Создание записей аудита событий для определенной роли**

Для создания записи журнала аудита для определенной роли потребуется:

1)  

> От имени и с правами пользователя «Superuser» авторизоваться в СУБД:psql -U postgres

2)  

> Создать роль «auditor»:CREATE ROLE auditor;

3)  

> Задать запись событий «Чтение» для роли «auditor»:ALTER ROLE auditor SET pgaudit.log = 'Read';

4)  

> Проверить заданный параметр записи «Чтение» всех событий для роли «auditor»:SELECT rolname, rolconfig from pg_roles;

5)  

> Создать несколько команд в СУБД от роли «auditor»:# CREATE TABLE Test (Id int NOT NULL, LastName varchar(255) NOT NULL, FirstName varchar(255), Age int, PRIMARY KEY (ID));  
```
# INSERT INTO Test (Id, LastName, FirstName, Age) VALUES (1,'Testov','Test', 123);  
```
> SELECT \* FROM test;

6)  

> Создать несколько команд в СУБД от роли «postgres»:# CREATE TABLE Test1 (Id int NOT NULL, LastName varchar(255) NOT NULL, FirstName varchar(255), Age int, PRIMARY KEY (ID));
>
```
# INSERT INTO Test1 (Id, LastName, FirstName, Age) VALUES (1,'Testov','Test', 123);  
```
> SELECT \* FROM test1;

7)  

> Проверить созданные записи в логе аудита:nano /var/lib/jatoba/<ver>/data/log/jatoba-день_недели.log

**Пример № 3. Создание записей аудита событий для определенной колонки в таблице**

Для создания записи журнала аудита для определенной колонки в таблице потребуется:

1)  

> От имени и с правами пользователя «Superuser» авторизоваться в СУБД:psql -U postgres

2)  

> Создать роль «auditor»:CREATE ROLE auditor;

3)  

> Добавить роль в таблицу «pgaudit»:set pgaudit.role = 'auditor';

4)  

> Создать таблицу «Test»:CREATE TABLE Test (Id int NOT NULL, LastName varchar(255) NOT NULL, FirstName varchar(255), Age int, PRIMARY KEY (ID));

5)  

> Добавить запись в таблицу:INSERT INTO Test (Id, LastName, FirstName, Age) VALUES (1,'Testov','Test', 123);

6)  

> Задать запись событий только для выражения "UPDATE" для колонки «age» в таблице «Test» для пользователя «auditor»:GRANT update (age) ON Test TO auditor;

7)  

> Выполнить команды:# UPDATE Test SET Age = 1234 WHERE Age = 123;  
```
# UPDATE Test SET LastName = 'Booba' WHERE LastName = 'Testov';
```

8)  

> Проверить созданные записи в логе аудита:nano /var/lib/jatoba/4/data/log/jatoba-день_недели.log

**Пример № 4. Создание записей аудита событий для определенной базы**

1)  

> От имени и с правами пользователя «Superuser» авторизоваться в СУБД:psql -U postgres

2)  

> Создать новую БД:CREATE DATABASE test1;

3)  

> Задать запись всех событий в журнал аудита для базы данных «test1»:ALTER DATABASE test1 SET pgaudit.log = 'All';

4)  

> Выполнить команды:# CREATE TABLE Test (Id int NOT NULL, LastName varchar(255) NOT NULL, FirstName varchar(255), Age int, PRIMARY KEY (ID));  
```
# INSERT INTO Test (Id, LastName, FirstName, Age) VALUES (1,'Testov','Test', 123);  
```
> SELECT \* FROM test;

5)  

> Подключиться к созданной БД:\c test1

6)  

> Создать несколько команд в СУБД:# CREATE TABLE Test1 (Id int NOT NULL, LastName varchar(255) NOT NULL, FirstName varchar(255), Age int, PRIMARY KEY (ID));  
```
# INSERT INTO Test1 (Id, LastName, FirstName, Age) VALUES (1,'Testov','Test', 123);  
```
> SELECT \* FROM test1;

7)  

> Проверить созданные записи в логе аудита:nano /var/lib/jatoba/<ver>/data/log/jatoba-день_недели.log

#### Компонент «pgauditlogtofile». Хранение событий безопасности в отдельном хранилище

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Компонент не поставляется с сертифицированной версией изделия |
|----|----|

Компонент «pgauditlogtofile» служит дополнением к компоненту «pgAudit» и предназначен для хранения событий безопасности в отдельном хранилище, в частности событий подключения и отключения к СУБД. Версия компонента – 1.5.12.

##### Установка расширения pgauditlogtofile

Установка пакета компонента описана в документе 643.72410666.00067-07 97 01 «Руководство по установке». Компонент выполнен в виде расширения СУБД.

Для установки расширения «pgauditlogtofile» необходимо:

1)  

> Установить параметр загрузки библиотеки компонента в разделе «shared_preload_libraries» в конфигурационном файле postgresql.conf:shared_preload_libraries = 'pgaudit, auditlogtofile'

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image50.png" style="width:7.11458in;height:1.27839in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-18 01-37-29.png" />

Рисунок . – Строка для загрузки библиотеки расширения «pgauditlogtofile»

Библиотека компонента «pgauditlogtofile» должна загружаться после библиотеки компонента «pgaudit».

2)  

- 

> Применить установленные параметры. Установленные параметры возможно применить:перезагрузкой службы СУБД, используя команду в терминале ОС:# systemctl restart jatoba-<ver>

- 

> SQL-командой в СУБД:SELECT pg_reload_conf();

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image51.png" style="width:7.13433in;height:1.79488in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-17 06-21-29.png" />

Рисунок . – SQL-команда применения изменений в конфигурационных файлах

3)  

> Установить расширение SQL-командой:CREATE EXTENSION pgauditlogtofile;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image52.png" style="width:7.01334in;height:1.0597in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-17 06-23-12.png" />

Рисунок . – SQL-команда установки расширения «pgauditlogtofile»

##### Функциональные возможности компонента pgauditlogtofile

Конфигурирование компонента проводится установкой параметров в конфигурационном файле postgresql.conf.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image53.png" style="width:6.97408in;height:2.66981in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-18 01-12-02.png" />

Рисунок . – Параметры компонента «pgauditlogtofile»

**pgaudit.log_directory**

Параметр «pgaudit.log_directory» определяет директорию хранения журнала аудита СУБД. Это ключевой параметр, который перенаправит события безопасности в отдельное хранилище.

> pgaudit.log_directory = 'log'

По умолчанию установлено значение – 'log'.

В случае, если оставить параметр по умолчанию, то события безопасности отделяться не будут. Для отдельного хранения событий безопасности необходимо указать требуемый каталог. Если указываемый каталог не создан, то расширение его создаст самостоятельно.

**Например**

Заданная директория для хранения событий безопасности /audit_log. Для корректной работы компонента требуется установить права на доступ к директории пользователю postgres командами в терминале ОС:

```
# chown postgres: /audit_log
```
>
```
# chmod 700 /audit_log
```
>
```
# ls -ld /audit_log/
```

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image54.png" style="width:7.16038in;height:1.4478in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC2\Screenshot from 2024-04-18 01-06-37.png" />

Рисунок . – Установка прав на директорию

**pgaudit.log_filename**

Параметр определяет имя файла, в который будет записан аудит. При записи в существующий файл будут добавлены новые записи.

> pgaudit.log_filename = 'audit-%Y%m%d_%H%M.log'

По умолчанию установлено значение: 'audit-%Y%m%d_%H%M.log'

**pgaudit.log_rotation_age**

Параметр «pgaudit.log_rotation_age» определяет период ротации файла.

По умолчанию установлено значение – 0.

Данное значение отключает ротацию. Новые значения устанавливаются, как целые, положительные числа в минутах.

**pgaudit.log_connections**

Параметр определяет перехват событий безопасности соединения с СУБД.

> pgaudit.log_connections = true

По умолчанию значение: false.

**pgaudit.log_disconnections**

Параметр определяет перехват событий безопасности разъединения с СУБД.

> pgaudit.log_disconnections = true

По умолчанию значение: false.

#### Маскирование паролей

Функциональной возможностью СУБД является маскирование паролей в журнале аудита. Все SQL-команды, используемые в работе с СУБД, вводящие или изменяющие пароли, подвергаются процедуре маскирования паролей в журнале аудита.

В конфигурационном файле /var/lib/jatoba/<ver>/data/postgresql.conf обязательно должен быть установлен:

- 
- 
- 

> параметр регистрации событий СУБД «log_statement», определяющий какие SQL-команды будут регистрироваться (см. таблицу Таблица 6.17);параметр регистрации событий СУБД «log_duration», определяющий будет ли регистрироваться длительность каждого выполненного SQL-запроса (см. таблицу Таблица 6.17);параметр включения/отключения маскирования «log_mask_password» который может принимать следующие значения: 1/0, on/off, true/false, yes/no.log_statement='all'  
> log_mask_password=1

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image55.png" style="width:6.74515in;height:2.08209in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-06-18 03-32-46.png" />

Рисунок . – Параметры postgresql.conf обязательные для маскирования паролей

Применение установленных параметров в конфигурационных файлах выполняется от имени и справами привилегированного пользователя СУБД SQL-командой:

> SELECT pg_reload_conf ();

Вторым способом применения установленных параметров является перезагрузка службы СУБД.

Установленный режим маскирования паролей выводится SQL-командой:

> SHOW log_mask_password;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image56.png" style="width:7.11267in;height:1.72917in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-06-18 06-58-27.png" />

Рисунок . – Вывод режим маскирования паролей

Маскирование паролей выполняется при создании пользователей.

**Например**

Создается пользователь СУБД с паролем SQL-командой:

> CREATE USER user1 with password 'n123456';

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image57.png" style="width:7.1875in;height:1.08782in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-06-18 07-05-25.png" />

Рисунок . – SQL-команда создания пользователя

В журнале аудита СУБД установленный пароль будет маскирован.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image58.png" style="width:7.10833in;height:0.60329in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-06-18 07-07-01.png" />

Рисунок . – Журнал аудита СУБД с записью создания пользователя

Аналогично маскируются вводимые значения хэшированных паролей в формате SHA256 и MD5.

**Например**

Установим пароль для пользователя СУБД введя хэшированные пароли SQL-запросом:

```
# ALTER ROLE user1 with password 'sha256#kvosmkwgokrpokewrpokerpokporkorgk';
```
>
```
# ALTER ROLE user1 with password 'md5kvosmkwgokrpokewrpokerpokporkorgk';
```

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image59.png" style="width:7.08371in;height:1.36111in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-06-18 22-42-07.png" />

Рисунок . – Установка хэшированного пароля пользователя

В журнале аудита СУБД установленный пароль в хэшированном формате будет маскирован.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image60.png" style="width:7.01389in;height:0.74209in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC4\Screenshot from 2024-06-18 22-43-14.png" />

Рисунок . – Отображение хэшированного пароля пользователя

При использовании компонента «ja_seceventlog» и сохранении событий безопасности в формате JSON, маскирование паролей будет выполняться.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image61.png" style="width:6.8884in;height:2.18868in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure_2\Пользовательская документация\Draft\PIC\Screenshot from 2024-08-04 23-50-43.png" />

Рисунок . – Маскирование пароля при использовании компонента «ja_seceventlog»

## Резервное копирование и восстановление баз данных

### Выгрузка кластера баз данных СУБД «Jatoba» в формате скрипта

Выгрузка кластера всех баз данных СУБД «Jatoba» в формате скрипта осуществляется с помощью следующей команды:

> pg_dumpall -f \<каталог с базы данных\>all.dump

Более подробную информацию о параметрах pg_dumpall можно узнать с помощью команды:

> pg_dumpall --help

### Выгрузка определенной базы данных СУБД «Jatoba» в формате скрипта в файл

Выгрузка определенной базы данных СУБД «Jatoba» в формате скрипта в файл осуществляется при помощи команды:

> pg_dump -Fc \<наименование базы данных\> -f \<каталог с базы данных\>\<наименование базы данных\>.dump

Более подробную информацию о параметритах pg_dump можно узнать с помощью команды:

> pg_dump --help

### Восстановление базы данных СУБД «Jatoba» из файла архива

Восстановление базы данных СУБД «Jatoba» из файла архива, созданного командой pg_dump, осуществляется с помощью команды:

> pg_restore –d \<наименование базы данных\> \<каталог с базы данных\>\<наименование базы данных\>.dump

Более подробную информацию о параметритах pg_restore можно узнать с помощью команды:

> pg_restore --help

### Создание резервной копии файлов СУБД «Jatoba»

Создание резервной копии файлов СУБД «Jatoba» осуществляется при помощи команды:

> pg_basebackup -D \<каталог, где будет хранится копия файлов из каталога «data» СУБД «Jatoba»\>

Более подробную информацию о параметрах pg_basebackup можно узнать с помощью команды:

> pg_basebackup --help

## Настройка отказоустойчивого кластера СУБД «Jatoba»

### Настройка отказоустойчивого кластера СУБД «Jatoba» на ОС Windows Server

До настройки отказоустойчивого кластера СУБД «Jatoba» на ОС Windows Server необходимо, чтобы были выполнены следующие условия/требования:

1)  

- 
- 
- 
- 
- 

2)  

Два сервера СУБД (физических или виртуальных машин) минимальные требования:1хCPU 1,4 ГГц;RAM 6 Гб;HDD 50 Гб;2xLAN 1 Гигабит;ОС Windows Server 2016.Серверы СУБД должны быть в домене.Настройка производится от имени пользователя, обладающего правами локального администратора и администратора домена, необходимо создавать записи в DNS и ActiveDirectory.

3)  
4)  

Два диска iSCSI-3, один минимум 600 Мб (для диска кворума кластера Windows Server Failover Cluster (далее − WSFC)), второй в зависимости от предполагаемого размера БД.Серверы СУБД должны быть объединены WSFC.Для настройки отказоустойчивого кластера СУБД «Jatoba» на ОС Windows Server 2016 необходимо выполнить следующие действия:

1)  

> На каждом сервере в переменную среды Path добавить путь:C:\Program Files\GIS\Jatoba\\ver\>\bin

2)  

- 

На первом сервере СУБД:если отсутствует диск Е то, через консоль диспетчера отказоустойчивости кластера, необходимо подключить диск E (см. рисунок Рисунок 8.1) к первому серверу;<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image62.png" style="width:6.94398in;height:2.30723in" />

Рисунок . – Консоль диспетчера отказоустойчивости кластера. Подключение диска Е

- 
- 

> создать на диске Е каталог pgdata;запустить установку СУБД «Jatoba» из дистрибутива. Во время установки указать путь к БД e:\pgbase (см. рисунок Рисунок 8.2), остальные параметры необходимо выбрать стандартно (пароль для пользователя postgres –должен быть доменный, локализация, порт и т.д.);<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image63.png" style="width:3.70833in;height:1.51042in" />

Рисунок . – Путь к БД

- 

3)  
4)  
5)  

> остановить службу JatobaServer. Удалить содержимое каталога e:\pgdata.Проделать данные шаги на втором сервере, пароль и порт указать точно такие, как на первом сервере, только без остановки службы и удаления содержимого каталога e:\pgdata.Выдать необходимые доступы в файле e:\pgbase\ph_hba.conf.В файле e:\pgbase\ppstgresql.conf изменить параметр:listen_addresses = '\*'

6)  
7)  
8)  

Перезапустить службу JatobaServer.Добавить роль универсальной службы. Эта роль позволяет автоматически переключать БД на другой сервер, в случае отказа первого.Запустить диспетчер отказоустойчивого кластера. Добавить необходимую роль, как показано на рисунке Рисунок 8.3.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image64.png" style="width:6.84177in;height:4.25251in" />

Рисунок .– Добавление роли

9)  

Нажать на кнопку далее и выбрать службу JatobaServer, как показано на рисунке Рисунок 8.4;<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image65.png" style="width:6.30405in;height:2.48312in" />

Рисунок . – Выбор службы JatobaServer

10) 

Нажать кнопку «Далее» и затем выбрать имя и IP-адреса точки подключения к СУБД «Jatoba» (см. пример на рисунке Рисунок 8.5).<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image66.png" style="width:6.08633in;height:2.75047in" />

Рисунок 8.5 – Выбор имя и IP-адреса точки подключения к Jatoba

11) 

Нажать «Далее» и выбрать хранилище, на рисунке Рисунок 8.6 – диск Е.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image67.png" style="width:6.17792in;height:2.95925in" />

Рисунок . – Выбор хранилища

12) 
13) 
14) 
15) 

Нажать «Далее» и затем кнопку «Готово». На этом роль отказоустойчивости службы PG настроена.Добавить контроль доступности подключения к PG.Создать локального администратора на каждом сервере (в примере это пользователь pna).На рабочем столе этого пользователя создать файл скрипта Powershell pg_check.ps1 со следующим содержимым:*\$pg_status = "C:\tmp\pg_status.txt"*

> *function pg_check {*
>
> *\$stream = \[System.IO.StreamWriter\] \$pg_status*
>
> *pg_isready -p 8080 -h 127.0.0.1 -U postgres*
>
> *\$? \| % { \$stream.WriteLine(\$_) }*
>
> *\$stream.close()*
>
> *\# Таймаут ожидания ответа от запроса pg_isready*
>
> *Start-Sleep -Seconds 3*
>
> *}*
>
> *function loop_check {*
>
> *foreach(\$i in 1..3) {*
>
> *if ((Get-Content \$pg_status) -eq \$False) {*
>
> *pg_check*
>
> *}*
>
> *\# Таймаут повтора проверки запроса. При увеличении необходимо корректировать частоты выполнения скрипта в планировщике.*
>
> *Start-Sleep -Seconds 10*
>
> *}*
>
> *\# Перезагружаем компьютер после трех неудачных проверок pg_isready*
>
> *Restart-Computer -force*
>
> *}*
>
> *pg_check*
>
> *if (((Get-Service -Name JatobaServer).Status -eq "Running") -and ((Get-Content \$pg_status) -eq \$False)) {*
>
> *loop_check*
>
> ***}***

Этот скрипт проверяет доступность подключения к локальному PG и если после трех попыток не может подключиться, то перезапускает локальный Windows сервер, в результате чего физические подключения к БД пойдут через второй сервер (сработает кластерная роль). Количество попыток подключения, таймаут ожидания повтора можно изменять, при увеличении таймаута необходимо увеличить время повтора выполнения скрипта в планировщике заданий.

16) 
17) 
18) 

Создать задачу в планировщике.В задании используется именно пользователь «postgres».Добавить триггер, как показано на рисунке Рисунок 8.7.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image68.png" style="width:4.61887in;height:4.54888in" />

Рисунок . – Добавление триггера

19) 

> Указать путь к PowerShell на локальном компьютере:C:\Windows\System32\WindowsPowerShell\v1.1\powershell.exe

и файл скрипта как показано на рисунке Рисунок 8.8:

> -File "C:\tmp\pg_check.ps1",

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image69.png" style="width:6.23018in;height:4.461in" />

Рисунок . – Путь к PowerShell. Путь к файлу скрипта

20) 

Указать условия запуска, как показано на рисунке Рисунок 8.9.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image70.png" style="width:6.30382in;height:3.648in" />

Рисунок . – Условия запуска

21) 

Затем параметры, как показано на рисунке Рисунок 8.10.<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image71.png" style="width:5.86309in;height:4.128in" />

Рисунок . – Параметры

### Настройка отказоустойчивого кластера СУБД «Jatoba» с использованием компонента «jaDog»

Настройка отказоустойчивого кластера СУБД «Jatoba» c использованием встроенного модуля jaDog описана в документах:

- 
- 

### «643.72410666.00067-07 98 01-01 «Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog» (версия 1.4.2);«643.72410666.00067-07 98 02-01 «Руководство по настройке. Часть 1. Управление режимом работы узлов кластера. Компонент «jaDog» (версия 3.2).Поддержка асинхронной репликации данных между несколькими БД одного и того же типа

В СУБД есть возможность асинхронной репликации данных с использованием нескольких БД одного и того же типа. Для этого применяется механизм Streaming Replication, который позволяет создавать несколько реплик одной и той же базы данных.

Настройка репликации:

- 
- 

> убедитесь, что все серверы, на которых будут размещены реплицированные базы данных, имеют доступ к каталогу pg_xlog/ на сервере-источнике;на сервере-источнике откройте файл pg_hba.conf и добавьте строку, разрешающую доступ без пароля для всех IP-адресов:host replication all all 0.0.0. 0/0 md5

- 

> запустите команду pg_create_physical_replication_slot на сервере-источнике для создания слота репликации;Например:
>
```
# SELECT pg_create_physical_replication_slot(‘my_repl_slot’);
```

- 

на каждом сервере, где будет размещена реплика, откройте файл pg_hba.conf и добавьте строку для сервера-источника, разрешающую подключение к слоту репликации, созданному на предыдущем шаге.Например:

> Allow replication connection from server_source

### Поддержка задания временной задержки репликации между серверами

> recovery_min_apply_delay (integer)

Параметр «recovery_min_apply_delay» работает путем определения минимального времени, которое должно пройти между записью операции на диск и следующей операцией записи. Это помогает обеспечить, что все операции были успешно записаны на диск, прежде чем продолжить процесс записи. Если происходит сбой системы, СУБД может использовать это время для проверки, были ли операции успешно записаны. Если время истекло, а операция все еще не была записана, СУБД попытается перезаписать ее.

По умолчанию ведомый сервер восстанавливает записи WAL передающего настолько быстро, насколько это возможно.

Задержка применяется лишь для записей WAL, представляющих фиксацию транзакций. Остальные записи проигрываются незамедлительно, так как их эффект не будет заметен до применения соответствующей записи о фиксации транзакции, благодаря правилам видимости MVCC.

Задержка добавляется, как только восстанавливаемая база данных достигает согласованного состояния, и исключается, когда ведущий сервер переключается в режим основного. После переключения ведущий сервер завершает восстановление незамедлительно.

Данный параметр предназначен для применения в конфигурациях с потоковой репликацией; однако если он задан, он будет учитываться во всех случаях, кроме восстановления после сбоя. Задержка, устанавливаемая этим параметром, влияет и на работу механизма hot_standby_feedback, что может привести к раздуванию базы на главном сервере; использовать данный параметр при включении этого механизма следует с осторожностью.

### Развертывание отказоустойчивого кластера в приложении «Patroni» с СУБД «Jatoba»

Приложение «Patroni» можно использовать с СУБД «Jatoba» для создания высокодоступных кластеров на основе потоковой репликации., но с учетом особенностей конфигурирования.

Первой особенностью является размещение бинарных файлов и каталогов с данными. Для работы приложения «Patroni» с правильными каталогами требуется явно прописать их в конфигурации.

В разделе «postgresql» нужно явно задать параметры «bin_dir» и «data_dir» для путей по умолчанию:

> bin_dir: /usr/jatoba-<ver>/bin
>
> data_dir: /var/lib/jatoba/<ver>/data

Второй особенностью является инициализация СУБД.

Процедура установки СУБД описана в «Руководстве по установке. 643.72410666.00067-07 97 01». Доступна установка:

- 
- 

вручную из локального репозитория;с помощью инсталлятора.Инсталлятор выполнит все необходимые процедуры и СУБД будет готова для дальнейшего использования.

Ручная установка из локального репозитория потребует выполнения

- 

> инициализации каталога данных СУБД:./jatoba-setup initdb jatoba-<ver>

После этого, как будут внесены изменения в конфигурационные параметры приложения «Patroni», установлена и проинициализирована СУБД «Jatoba», можно запускать приложения «Patroni» и строить кластер.

## Восстановление поврежденных WAL записей

WAL Recovery – это функциональность ядра СУБД «Jatoba» по восстановлению поврежденных WAL записей в процессе потоковой репликации данных.

WAL – это журнал, в который попадают изменения данных до того, как они физически применятся к самой БД. Каждая запись журнала содержит информацию, достаточную для повторения изменений в случае необходимости.

При потоковой репликации с Главного сервера на Резервные передаются WAL файлы, которые при успешной проверке их контрольных сумм (CRC) применяются на Резервных узлах, за счет чего данные на Резервных узлах синхронизируются с данными на Главном сервере.

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image72.png" style="width:5.35972in;height:4.54452in" alt="C:\Users\Cherevan-Y\AppData\Local\Microsoft\Windows\INetCache\Content.MSO\D19438A5.tmp" />

Рисунок 9.1 – Схема работы

Если на Главном узле произошла ошибка и файл журнала WAL повредился, то после передачи WAL записей на Резервные узлы, на них не совпадут контрольные суммы. В результате репликация прервется с ошибкой в логах.

Для включения восстановления поврежденных WAL записей необходимо установить параметр в файле postgresql.conf:

> wal_sender_check_crc = on

Этот параметр активирует функциональность по восстановлению поврежденных WAL записей на Главном узле перед их отправкой на Резервные узлы. При успехе или неуспехе восстановления поврежденных записей WAL будет соответствующая запись в логах СУБД.

Опционально можно также установить параметр wal_sender_panic_on_crc_error:

> wal_sender_panic_on_crc_error = on

При включенном параметре, сообщения об ошибке восстановления WAL записей будут записываться в лог с уровнем важности «PANIC», в противном случае уровень важности будет «FATAL».

## Поиск ближайших соседей (KNN для B-Tree)

Метод K-ближайших соседей (K-nearest neighbors, KNN) — это метод, используемый для решения задач классификации и регрессии. KNN основан на идее, что объекты, которые находятся рядом в пространстве признаков, вероятно относятся к одной категории.

При использовании KNN для классификации нового объекта вычисляются расстояния до всех известных объектов в наборе. Затем выбирается K объектов с наименьшими расстояниями (ближайшие соседи).

Параметр K определяет количество ближайших соседей, которые учитываются при классификации. Выбор оптимального значения K является важным этапом в настройке алгоритма KNN. Слишком малое значение K может привести к нестабильности предсказаний, в то время как слишком большое значение K может снизить точность модели, поскольку она будет учитывать слишком много неинформативных объектов.

В случае использования KNN для классификации объект присваивается тому классу, который является наиболее распространённым среди k соседей данного элемента, классы которых уже известны. В случае использования метода для регрессии, объекту присваивается среднее значение по k ближайшим к нему объектам, значения которых уже известны.

Области применения метода KNN:

- 
- 
- 
- 
- 

предварительная обработка данных;механизмы рекомендаций;финансы: (прогнозирование фондового рынка, курсы валют, торговые фьючерсы и анализ отмывания денег);здравоохранение;распознавание образов: (идентификация шаблонов, например, при классификации текста и цифр).Индекс B-Tree в СУБД – индекс на основе дерева. Индексы B-Tree эффективны для обычных типов данных таких как текст, числа и метки времени. Использование стандартных B-Tree индексов обычно достаточно для большинства типов данных и таблиц пользователя. Команда CREATE INDEX по умолчанию создает индекс B-Tree.

Структура индекса B-Tree порядка m - это дерево, удовлетворяющее требованиям:

- 
- 
- 
- 
- 
- 

каждый узел имеет не более m потомков;каждый внутренний узел имеет как минимум ⌈m/2⌉ потомков;корень имеет как минимум два потомка (если он сам не лист);все листья находятся на одном уровне;не листовой узел с k потомков содержит k−1 ключей;сохраняет состояние сбалансированности и четности.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image73.png)

Рисунок . – Структура B-Tree

Когда выполняется поиск на основе этого индекса, он проходит вниз по дереву, чтобы найти ключ, по которому дерево построено, а затем возвращает искомые данные. Использование индекса гораздо быстрее, чем последовательное сканирование.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image74.png)

Рисунок 10.2 – K Nearest Neighbors для B-tree

Метод KNN уже реализован для индексов типа GiST. Однако применение этих индексов не всегда оправдано для простых типов данных. Пользователь в большинстве случаев оперирует именно простыми типами данных. В следующем примере представлена эффективность применения B-Tree индексов по сравнению GiST индексами.

**Пример использования KNN с GiST**

Создадим план запроса для тестовой таблицы:

```
# CREATE TABLE test (a int4);  
```
```
# insert into test (a) select x from generate_series(1,100000) as x;
```
>
```
# ANALYZE test;
```
>
```
# CREATE EXTENSION btree_gist;
```
>
```
# EXPLAIN (costs off) SELECT \*, a \<-\> 50000 AS dist FROM test ORDER BY a \<-\> 50000 LIMIT 10;
```

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image75.png" style="width:7.02468in;height:2.98261in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-22 07-26-10.png" />

Рисунок . – Создание плана запроса для тестовой таблицы

Создадим план запроса:

```
# EXPLAIN (analyze, costs off) SELECT \*, a \<-\> 50000 AS dist FROM test ORDER BY a \<-\> 50000 LIMIT 10;
```

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image76.png" style="width:7.00742in;height:2.25217in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-22 07-27-29.png" />

Рисунок . – Создание плана запроса

Создадим индекс для тестовой таблицы и план запроса:

```
# CREATE INDEX test_gistidx ON test USING GIST (a);
```
>
```
# explain (costs off) SELECT \*, a \<-\> 50000 AS dist FROM test ORDER BY a \<-\> 50000 LIMIT 10;
```

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image77.png" style="width:7.04653in;height:1.93043in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-22 07-41-05.png" />

Рисунок 10.5 – Создание индекса GIST

Создадим план запроса:

```
# EXPLAIN (analyze, costs off) SELECT \*, a \<-\> 50000 AS dist FROM test ORDER BY a \<-\> 50000 LIMIT 10;
```

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image78.png" style="width:7.02971in;height:2.19791in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-22 07-42-25.png" />

Рисунок . – Создание плана запроса

Создадим B-Tree индекс и выведем все доступные информационные схемы (information schemas) в СУБД. Вывод показывает список таблиц, колонок, индексов, триггеров, и т.д., которые определены в каждой из информационных схем.

```
# CREATE INDEX test_btreeidx ON test USING btree (a);
```
>
```
# \di+
```

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image79.png" style="width:7.15897in;height:2.16522in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-22 07-44-07.png" />

Рисунок . – Вывод информации о таблицах

Из примера видно следующее:

- 
- 

применение стратегия поиска KNN в индексах увеличивает скорость выполнения запросов на порядки;индекс B-Tree работает быстрее за счет своего меньшего размера по сравнению с GIST индексом.В СУБД «Jatoba» метод KNN реализован для B-Tree индексов. В следующем разделе описаны виды SQL-запросов, которые используют метод KNN.

### Форма SQL-запроса, для которых работает KNN

Применение KNN сейчас возможно для SQL-запросов вида:

> SELECT ... FROM ... WHERE ... ORDER BY проиндексированное_поле_таблицы оператор константа LIMIT n

или

> SELECT (проиндексированное_поле_таблицы оператор константа) AS x FROM ... WHERE ... ORDER BY x LIMIT n

или

> SELECT (константа оператор проиндексированное_поле_таблицы) AS x FROM ... WHERE ... ORDER BY x LIMIT n

**Пример такого запроса:**

Выбрать 5 ближайших к заданной дате 01/01/2024 событий из таблицы всех событий:

> SELECT date, event, ('2024-01-01'::date \<-\> date) AS dist FROM events ORDER BY dist ASC LIMIT 5;

В данном примере «близость» или разница между датами событий вычисляется оператором '\<-\>', ORDER BY сортирует эту разницу в порядке возрастания, LIMIT из сортированного списка берет первые 5 элементов.

При условии, что построен индекс по полю date, СУБД с KNN должна использовать этот индекс для поиска ближайших дат (с минимальной дистанцией) к заданной.

В плане индекса мы должны увидеть узел плана Index Scan с опцией OrderBy (обход записей по индексы), обозначающую использование введенного дополнительного поля и всего механизма KNN в целом.

Без KNN аналогичные запросы будут формироваться с альтернативными планами, производительность которых ниже или даже значительно ниже чем с KNN.

### Влияние доработок по KNN на расширение btree_gist

KNN изменяет работу встроенного расширения btree_gist.

В данном виде индекса заменяется использование встроенных операторов дистанции '\<-\>' на использование аналогичных операторов в основном системном каталоге, которые вводятся в рамках KNN. Функционал самого расширения btree_gist от этого не изменяется.

Данное изменение касается следующих типов данных:

- 

<!-- -->

- 
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
- 
- 

целые:int2;int4;int8;вещественные:float4;float8;специальные:oid;money;временные:date;time; timestamp; timestamptz;interval.В данном виде индекса в функциях операторов дистанции код вычисления дистанции заменяется на вызов соответствующей функции ядра. Встроенное расширение btree_gist теперь использует эти перенесенные в ядро функции.

### Влияние доработок по KNN на системный каталог

KNN вносит следующие, видимые для пользователя изменения системного каталога.

Теперь системный каталог СУБД должен содержать следующие объекты:

#### Системная таблица pg_amop

Системная таблица pg_amop хранит информацию об операторах семейства операторов \[индексных\] методов доступа (вида индекса). Семейство операторов - это группа операторов и вспомогательных процедур, обеспечивающих работу вида индекса (например, btree индекс умеет искать и сортировать данные на основании операторов \<, \<=, =, =\>, \>; вместе с некоторыми другими операторами и вспомогательными функциями эти операторы образуют семейства операторов для btree: btree/datetime_ops, btree/float_ops, ...). KNN добавляет 26 операторов (операторов дистанции '\<-\>'), которые можно посмотреть следующим запросом:

> SELECT
>
> pg_amop.oid, opfamily.opfname as amopfamily , ltype.typname as amoplefttype,  
> rtype.typname as amoprighttype, pg_amop.amopstrategy, pg_amop.amoppurpose,  
> pg_operator.oprname as amopopr, pg_am.amname as amopmethod, opsortfamily.opfname as amopsortfamily  
> from pg_amop  
> join pg_opfamily as opfamily on pg_amop.amopfamily = opfamily.oid  
> join pg_type as ltype on pg_amop.amoplefttype = ltype.oid  
> join pg_type as rtype on pg_amop.amoprighttype = rtype.oid  
> join pg_operator on pg_amop.amopopr = pg_operator.oid  
> join pg_am on pg_amop.amopmethod = pg_am.oid  
> join pg_opfamily as opsortfamily on pg_amop.amopsortfamily = opsortfamily.oid  
> where amopstrategy=6 order by 2, 3, 4;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image80.png" style="width:6.99308in;height:4.31304in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-25 03-26-13.png" />

Рисунок . – Список операторов дистанции

#### Системная таблица pg_operator

Системная таблица pg_operator хранит информацию об операторах, которые можно использовать в выражениях SQL-запросов (например, в выражении a \< 5, '\<' - оператор). Оператор может быть бинарным, а именно, операнд слева (тип операнда) и операнд справа (тип операнда), а также должен возвращать какое-то значение (зависит от оператора, в примере сравнивает значения целочисленных типов и возвращает значение булевого типа). KNN для возможности выполнения описанных выше видов запросов вводит 26 новых операторов дистанции для простых типов. Список таких операторов можно получить следующим запросом:

> SELECT  
> o.oid, o.oprname, ns.nspname as oprnamespace, ai.rolname as oprowner,  
> o.oprkind, o.oprcanmerge, o.oprcanhash, ltt.typname as oprleft, rtt.typname as oprright,  
> rst.typname as oprresult, co.oprname as oprcom, no.oprname as oprnegate, p.proname as oprcode,  
> pr.proname as oprrest, pj.proname as oprjoin  
> from pg_operator as o  
> join pg_namespace as ns on ns.oid = o.oprnamespace  
> join pg_authid as ai on ai.oid = o.oprowner  
> join pg_type as ltt on ltt.oid = o.oprleft  
> join pg_type as rtt on rtt.oid = o.oprright  
> join pg_type as rst on rst.oid = o.oprresult  
> left join pg_operator as co on co.oid = o.oprcom  
> left join pg_operator as no on no.oid = o.oprnegate  
> left join pg_proc as p on p.oid = o.oprcode  
> left join pg_proc as pr on pr.oid = o.oprrest  
> left join pg_proc as pj on pj.oid = o.oprjoin  
> where  
> o.oprname = '\<-\>' and  
> array\[ltt.typname::text, rtt.typname::text, rst.typname::text\] \<@ array\['int2', 'int4', 'int8', 'oid', 'float4', 'float8', 'money', 'date', 'time', 'timestamp', 'timestamptz', 'interval'\]  
> order by 8, 9, 10;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image81.png" style="width:7.02322in;height:4.10435in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-25 03-30-37.png" />

Рисунок . – Вывод операторов дистанции для простых типов.

#### Системная таблица pg_proc

Системная таблица pg_proc хранит информацию о функциях, которые можно использовать в SQL-запросах. Под каждый оператор (специальные знаки в выражениях) также подставляется какая-либо функция, которая выполняет конечный код. KNN для возможности выполнения описанных выше видов запросов (выполнения операторов дистанции) вводит 26 новых функций, которые вычисляют дистанцию между двумя значениями перечисленных выше типов данных, и которые можно посмотреть следующим запросом:

> SELECT  
> p.oid, p.proname, p.provolatile, t.typname as prorettype,  
> (select string_agg(t.typname, ' ') from pg_type as t join lateral unnest(p.proargtypes) as pat on t.oid = pat) as proargtypes,  
> p.prosrc  
> from pg_proc as p  
> join pg_type as t on p.prorettype = t.oid  
> where  
> p.proname = any(array\['int2dist', 'int4dist', 'int8dist', 'oiddist', 'float4dist', 'float8dist', 'cash_distance', 'date_distance', 'time_distance', 'timestamp_distance', 'timestamptz_distance', 'interval_distance', 'int24dist', 'int28dist', 'int42dist', 'int48dist', 'int82dist', 'int84dist', 'float48dist', 'float84dist', 'date_dist_timestamp', 'date_dist_timestamptz', 'timestamp_dist_date', 'timestamp_dist_timestamptz', 'timestamptz_dist_date', 'timestamptz_dist_timestamp'\])  
> order by 5, 4;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image82.png" style="width:7.0978in;height:3.68696in" alt="C:\Users\kuznetsov-a\Documents\Jatoba_5_Azure\Пользовательская документация\Draft\PIC\Screenshot from 2024-03-25 03-35-33.png" />

Рисунок . – Вывод функций

## Очистка памяти в СУБД

Согласно нормативному документу «Требования по безопасности информации к системам управления базами данных (выписка)», утвержденному приказом ФСТЭК России от 14.04.2023 № 64, необходимо выполнять очистку памяти в СУБД.

В текущей реализации для очистки памяти СУБД «Jatoba» используются средства сертифицированной операционной системы. Поддерживаемые сертифицированные операционные системы приведены в таблице Таблица 1.1, а используемые в них утилиты для очистки памяти приведены в таблице Таблица 11.1.

| **№** | **ОС**                                | **Наименование утилиты в ОС** |
|:-----:|:--------------------------------------|:------------------------------|
|   1   | Альт 8 СП                             | sfill                         |
|   2   | РОСА 7.3 Кобальт для серверных систем | wipe                          |
|       |                                       | shred                         |
|   3   | Astra Linux                           | fly-admin-smc                 |
|   4   | РЕД ОС 7.3 Муром                      | chattr                        |
|       |                                       | sfill                         |

Таблица . – Утилиты, используемые в ОС

## Компонент tsvector2

Компонент tsvector2 предназначен для обеспечения полнотекстового поиска в БД и предоставляет расширенный тип данных tsvector.

Компонент выполнен в виде расширения.

Расширение устанавлиается после установки пакета компонента, как описано ы в документе «Руководство по установке».

Расширение компонента устанавливается от имени и с правами привилегированного пользователя SQL-командой:

> CREATE EXTENSION tsvector2;

Расширенный тип данных tsvector реализован для обеспечения лучшего сжатия и устранения ограничения размера оригинального типа tsvector на 1 МБ.

Он может использоваться как прозрачная замена оригинального tsvector и поддерживает все его функции, операторы и типы индексов. Функции, названия которых содержат tsvector, были изменены на tsvector2.

Компонент обладает специальными функциями:

- 
- 
- 
- 
- 
- 
- 
- 

to_tsvector2 (from text, json, jsonb types) - преобразование текста в tsvector2 (см. п.п. 12.1);array_to_tsvector2 - преобразования из массива в строку (12.1.5);tsvector2_to_array - преобразование из строки в массив (12.1.6);tsvector2_stat - получение статистики по лексемам (12.1.7);jsonb_to_tsvector2 - преобразование jsonb в tsvector2 (12.1.4);json_to_tsvector2 - преобразование json в tsvector2 (12.1.4); tsvector2_update_trigger – обновление тригера (12.1.8);tsvector2_update_trigger_column – обновление тригера в колонке (12.1.8).Общие функции, которые можно безопасно использовать в обоих типах:

- 
- 
- 
- 
- 
- 
- 
- 

### strip;unnest;length;setweight;ts_rank;ts_rank_cd;ts_delete;ts_filter.Примеры использования компонента tsvector2

#### Функция «to_tsvector2». Преобразование текста в tsvector2

Выполнить нормализацию на англ. (преобразование в лексемы) слов в предложении:

> SELECT to_tsvector2('english', 'The quick brown fox jumps over the lazy dog.');

В этом шаге слова были нормализованы и отсортированы. Стоп-слова "the" и "over" (предлоги, артикли, окончания) были исключены.

Вывод в терминале:

> to_tsvector ---------------------------------------------------
>
> 'brown':3 'dog':9 'fox':4 'jump':5 'lazi':8 'quick':2
>
> (1 row)

Выполнить нормализацию на русский язык (преобразование в лексемы) слов в предложении:

| <img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image4.svg" style="width:0.25in;height:0.25in" /> | Перед выполнением на ОС Windows выполнить команду в тертинале - chcp 1251 |
|----|----|

> SELECT to_tsvector2('russian', 'Это пример текста для тестирования.');

В этом шаге слова были нормализованы и отсортированы. Стоп-слова "the" и "over" (предлоги, артикли, окончания) были исключены.

Вывод в терминале:

> to_tsvector
>
> --------------------------------------------
>
> 'пример':2 'текст':3 'тестирован':5 'эт':1

Преобразования текста в tsvector2:

> SELECT to_tsvector2('This is a simple test document.') AS result;

В этом шаге слова были нормализованы и отсортированы. Стоп-слова "the" и "over" (предлоги, артикли, окончания) были исключены.

Вывод в терминале: 

> result ---------------------------------
>
> 'document':6 'simpl':4 'test':5 (1 row)

#### Индексация с использованием tsvector

Cоздать таблицу:

> CREATE TABLE documents ( id SERIAL PRIMARY KEY, data JSONB ); 

Вставить данные:

> INSERT INTO documents (data) VALUES ('{"title": "PostgreSQL for Beginners", "content": "This is a guide to PostgreSQL."}'), ('{"title": "Advanced PostgreSQL", "content": "Learn advanced features of PostgreSQL."}');

Создать индекс на колонку, который содержит данные типа tsvector, для ускорения поиска:

> CREATE INDEX idx_gin_documents ON documents USING GIN (data);  
>
> CREATE INDEX

Выключить sec scan:

> SET enable_seqscan=off;
>
> SET enable_indexscan=on;
>
> SET enable_indexonlyscan=on;

Выполнить запрос с оператором сравнения для поиска искомого значения:

> SELECT \* FROM documents WHERE to_tsvector2('english', data-\>\>'title') \|\| to_tsvector2('english', data-\>\>'content') @@ to_tsquery('PostgreSQL & Beginners'); 

Выводятся искомые значения из колонки которые были введены для tsquery запроса.  
Вывод в териминал:

> \[ RECORD 1 \]
>
> ---------------------------------------------------
>
> id \| 1 data \| {"title": "PostgreSQL for Beginners", "content": "This is a guide to PostgreSQL."}

Убедиться, что поиск производится по индексу:

> EXPLAIN ANALYZE SELECT \* FROM documents WHERE to_tsvector2('english', data-\>\>'title') \|\| to_tsvector2('english', data-\>\>'content') @@ to_tsquery('PostgreSQL & Beginners');

При выполнении SQL-команды SELECT в запросе используется INDEX SCAN.

#### Поиск с использованием tsvector2

Создать таблицу:

> CREATE TABLE documents ( id SERIAL PRIMARY KEY, title TEXT, content TEXT, tsv_content TSVECTOR2 GENERATED ALWAYS AS (to_tsvector2('english', content)) STORED );

Вставить данные:

> INSERT INTO documents (title, content)  
>  VALUES ('PostgreSQL Basics', 'This document explains the basics of PostgreSQL.'), ('Advanced PostgreSQL', 'Learn advanced features of PostgreSQL for performance tuning.'), ('Full Text Search in PostgreSQL', 'This article covers full text search capabilities in PostgreSQL.');

Выполнить запрос для проверки полнотекстового поиска:

> SELECT \* FROM documents WHERE tsv_content @@ to_tsquery('PostgreSQL & basics'); 

Выводится документ с заголовком "PostgreSQL Basics".

Вставить данные:

> INSERT INTO documents (title, content) VALUES  
> ('Learning text','This is test text for testing jatoba');  

Выполнить запрос:

> SELECT \* FROM documents WHERE tsv_content @@ to_tsquery('test & jatoba');

Должен вернуть документ с заголовком:

> "Learning text \| This is test text for testing jatoba".

Выполнить запрос для разбора и нормализации текстового содержимого документа при помощи to_tsvector2 и произвести поиск

> SELECT to_tsvector2('fat cats ate fat rats') @@ to_tsquery('fat & rat');

В ответе возвращается true - так как значение типа tsquery содержит искомые слова, это должны быть уже нормализованные лексемы

Ответ в терминале: 

> ?column?
>
> ----------
>
> t

Выполнить запрос для разбора и нормализации текстового содержимого документа при помощи to_tsvector2 и произвести поиск:

> SELECT to_tsvector2('fatal error') @@ to_tsquery('fatal & error');

Вывод:

> ?column?
>
> ----------
>
> t

#### Функции «jsonb_to_tsvector2» и «json_to_tsvector2». Преобразование json и jsonb в tsvector2

Выполнить нормализацию (преобразование в лексемы) значений в ключах jsonb:

> SELECT to_tsvector2('{"a": "aaa bbb ddd ccc if is over", "b": \["eee fff ggg"\], "c": {"d": "hhh iii"}, "d":"if", "e":"make chance Jenya pls", "f":"Dima, compressor is not working!!!"}'::jsonb);

В этом шаге значения ключей jsonb были нормализованы и отсортированы. Стоп-слова "if is over if" (предлоги, артикли, окончания) были исключены. Лексемы преобразованы в нижний регистр.

Вывод в терминал:

> to_tsvector2
>
> ---------------------------------------------------------------
>
> 'aaa':1 'bbb':2 'ccc':4 'ddd':3 'eee':9 'fff':10 'ggg':11 'hhh':13 'iii':14

Выполнить преобразования JSONB в tsvector2:

> SELECT to_tsvector2('{"key": "value", "text": "This is a test."}'::jsonb) AS result;

В этом шаге значения ключей jsonb были нормализованы и отсортированы. Стоп-слова (предлоги, артикли, окончания) были исключены.

>  result
>
> -------------------
>
> 'test':6 'valu':1 (1 row)

Выполнить преобразования JSON в tsvector:

> SELECT jsonb_to_tsvector2('{"key": "value", "text": "This is a test."}','"all"') AS result;

В этом шаге значения ключей jsonb были нормализованы и отсортированы при помощи функции jsonb_to_tsvector2(). Стоп-слова (предлоги, артикли, окончания) были исключены.

> result
>
> -------------------
>
> 'test':6 'valu':1 (1 row)

#### Функция «array_to_tsvector2». Преобразования из массива в строку 

Выполнить преобразование массива в tsvector:

> SELECT array_to_tsvector2(ARRAY\['This', 'is', 'a', 'test'\]) AS result; 

содержащий лексемы из массива строк

>  result
>
> ------------------------
>
> 'This' 'a' 'is' 'test' (1 row)

#### Функция «tsvector2_to_array». Преобразование из строки в массив

Выполнить преобразование из строки в массив tsvector:

> SELECT tsvector2_to_array(to_tsvector2('This is a test document.')) AS result; 

Возвращается массив строк с лексемами из tsvector2

Вывод в терминале:

> result
>
> -----------------
>
> {document,test} (1 row)

#### Функция «tsvector2_stat». Получение статистики по лексемам

Создать таблицу:

> CREATE TABLE doc ( id SERIAL PRIMARY KEY, content TEXT, tsv_content TSVECTOR2 GENERATED ALWAYS AS (to_tsvector2(content)) STORED ); 

Внести данные:

> INSERT INTO doc (content) VALUES ('This is a test document.'), ('Another example of a test document.'), ('PostgreSQL is great for full-text search.');

Использование tsvector2_stat для получения статистики:

> SELECT \* FROM tsvector2_stat('SELECT tsv_content FROM doc');

Вывод статистике в таблице где:

- 
- 
- 

> word - лексема (слово);ndoc - количество документов где оно встречается;nentry - количество встреч в данном документе.word \| ndoc \| nentry
>
> -----------+------+--------
>
> text \| 1 \| 1
>
> test \| 2 \| 2
>
> search \| 1 \| 1
>
> postgresql \| 1 \| 1
>
> great \| 1 \| 1
>
> full-text \| 1 \| 1
>
> full \| 1 \| 1
>
> exampl \| 1 \| 1
>
> document \| 2 \| 2
>
> anoth \| 1 \| 1
>
> (10 rows)

#### Функции «tsvector2_update_trigger» и «tsvector2_update_trigger_column» 

Создать таблицу:

> CREATE TABLE messages ( id SERIAL PRIMARY KEY, title TEXT, body TEXT, tsv_content TSVECTOR2 GENERATED ALWAYS AS (to_tsvector2(title \|\| ' ' \|\| body)) STORED );

Создать триггер tsvector2_update_trigger:

> CREATE TRIGGER tsvector2_update_trigger BEFORE INSERT OR UPDATE ON messages FOR EACH ROW EXECUTE PROCEDURE tsvector2_update_trigger('tsv_content', 'pg_catalog.english', 'title', 'body');

Вставить 2 строки:

> INSERT INTO messages (title, body) VALUES ('First message', 'This is the body of the first message.'), ('Second message', 'This is the body of the second message.');  

Проверить вставленные данные:

> SELECT \* FROM messages; 

Обновить одну запись:

> UPDATE messages SET body = 'Updated body of the first message.' WHERE id = 1;

Запросить данные:

> SELECT tsv_content FROM messages WHERE id = 1; 

Создать новую таблицу:

> CREATE TABLE messages2 (
>
> id SERIAL PRIMARY KEY,
>
> tsv tsvector2,
>
> body TEXT,
>
> lang regconfig
>
> );

Создать триггер для апдейта колонки:

> CREATE TRIGGER tsvector2_update_trigger_column BEFORE INSERT OR UPDATE ON messages2 FOR EACH ROW EXECUTE PROCEDURE tsvector2_update_trigger_column('tsv', 'lang', 'body');

Произвести вставку в таблицу:

> INSERT INTO messages2 (body, lang) VALUES ('First message This is the body of the third message.', 'pg_catalog.english'), ('Second message This is the body of the third message.', 'pg_catalog.english'), ('Third message This is the body of the third message.', 'pg_catalog.english');

Обновить одну из записей:

> UPDATE messages2 SET body = 'Updated title for third message.' WHERE id = 3;

Произвести запрос:

> SELECT tsv FROM messages2 WHERE id = 3; 

Поле tsv обновилось после изменения.

Вывод в терминал:

> tsv
>
> -----------------------------------------
>
> 'messag':5 'third':4 'titl':2 'updat':1

## Компонент RUM

Компонент предоставляет метод доступа RUM для работы с индексами, основанный на коде методов доступа GIN.

Установка пакета компонента описана в документе «Руководство по установке».

Расширение компонента устанавливается от имени и с правами привилегированного пользователя SQL-командой:

> CREATE EXTENSION rum;

Индекс GIN позволяет выполнять быстрый полнотекстовый поиск, используя типы tsvector и tsquery. Однако при этом применении он имеет следующие недостатки:

Компонент RUM сохраняет информацию о позиции лексем или метки времени.

### Общие операторы 

Операторы компонента перечислены в таблице Таблица 13.1.

| **Оператор** | **Возвращает** | **Описание** |
|:---|:---|:---|
| tsvector \<=\> tsquery | float4 | Возвращает расстояние между значениями tsvector и tsquery. |
| timestamp \<=\> timestamp | float8 | Возвращает расстояние между двумя значениями timestamp. |
| timestamp \<=\| timestamp | float8 | Возвращает расстояние только для возрастающих значений timestamp. |
| timestamp \|=\> timestamp | float8 | Возвращает расстояние только для убывающих значений timestamp. |

Таблица . – Операторы компонента rum

###  Классы операторов 

Расширение rum предоставляет следующие классы операторов:

- 

rum_tsvector_opsСохраняет лексемы tsvector с информацией о позициях. Поддерживает упорядочивание с оператором \<=\> и поиск по префиксу.

- 

rum_tsvector_hash_opsСохраняет хеш лексем tsvector с информацией о позициях. Поддерживает упорядочивание с оператором \<=\>, и не поддерживает поиск по префиксу.

- 

rum_tsvector_addon_opsСохраняет лексемы tsvector с дополнительными данными любых типов, которые принимает RUM.

- 

rum_tsvector_hash_addon_opsСохраняет лексемы tsvector с дополнительными данными любых типов, которые принимает RUM. Не поддерживает поиск по префиксу.

- 

rum_tsquery_opsСохраняет ветви дерева запроса в дополнительной информации.

- 

rum_anyarray_opsСохраняет элементы массива anyarray и длину массива. Поддерживает упорядочивание с оператором \<=\>.

Индексируемые операторы: && @\> \<@ = %

- 

rum_anyarray_addon_opsСохраняет элементы anyarray с дополнительными данными любых типов, которые принимает RUM.

- 

rum_type_opsСохраняет лексемы соответствующего типа с информацией о позициях. В качестве типа в имени класса должно подставляться одно из следующих имён типов: int2, int4, int8, float4, float8, money, oid, timestamp, timestamptz, time, timetz, date, interval, macaddr, inet, cidr, text, varchar, char, bytea, bit, varbit, numeric.

Класс операторов rum_type_ops поддерживает упорядочивание с операторами \<=\>, \<=\| и \|=\>. Его можно использовать совместно с классами операторов rum_tsvector_addon_ops, rum_tsvector_hash_addon_ops и rum_anyarray_addon_ops.

Поддержка индексируемых операторов зависит от типа данных:

- 
- 

### Операторы \< \<= = \>= \> \<=\> \<=\| \|=\> поддерживаются для типов int2, int4, int8, float4, float8, money, oid, timestamp, timestamptz.Операторы \< \<= = \>= \> поддерживаются для типов time, timetz, date, interval, macaddr, inet, cidr, text, varchar, char, bytea, bit, varbit, numeric.Примеры использования

#### Оператор rum_tsvector_ops

Создать таблицу:

> CREATE TABLE test_rum(t text, a tsvector);

Создать триггер:

> CREATE TRIGGER tsvectorupdate BEFORE UPDATE OR INSERT ON test_rum FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger('a', 'pg_catalog.english', 't');

Заполнить таблицу:

> INSERT INTO test_rum(t) VALUES ('The situation is most beautiful'); INSERT INTO test_rum(t) VALUES ('It is a beautiful');
>
> INSERT INTO test_rum(t) VALUES ('It looks like a beautiful place');

Создать индекс:

> CREATE INDEX rumidx ON test_rum USING rum (a rum_tsvector_ops);

Выполнить чтение из таблицы:

> SELECT t, a \<=\> to_tsquery('english', 'beautiful \| place') AS rank FROM test_rum WHERE a @@ to_tsquery('english', 'beautiful \| place') ORDER BY a \<=\> to_tsquery('english', 'beautiful \| place');

Еще раз выполнить чтение из таблицы:

> SELECT t, a \<=\> to_tsquery('english', 'place \| situation') AS rank FROM test_rum WHERE a @@ to_tsquery('english', 'place \| situation') ORDER BY a \<=\> to_tsquery('english', 'place \| situation');

#### Оператор rum_anyarray_ops 

Создать таблицу:

> CREATE TABLE test_array (i int2\[\]);

Заполнить таблицу:

> INSERT INTO test_array VALUES ('{}'), ('{0}'), ('{1,2,3,4}'), ('{1,2,3}'), ('{1,2}'), ('{1}');

Создать индекс:

> CREATE INDEX idx_array ON test_array USING rum (i rum_anyarray_ops);

Задать значение параметра:

> SET enable_seqscan TO off;

Вывести план запроса:

> EXPLAIN (COSTS OFF) SELECT \* FROM test_array WHERE i && '{1}' ORDER BY i \<=\> '{1}' ASC;

Выполнить чтение из таблицы:

> SELECT \* FROM test_array WHERE i && '{1}' ORDER BY i \<=\> '{1}' ASC;

## Компонент xid64

Для обеспечения работы механизма MVCC (управление параллельным доступом посредством многоверсионности транзакций) СУБД «Jatoba» отслеживает, какие транзакции уже завершены, а какие еще активны.

Для этого каждой транзакции в СУБД «Jatoba» присваивается уникальный номер — идентификатор (xid). Его можно узнать, используя функцию txid_current().

Применяемый 64-битный счетчик транзакции xid64 в СУБД «Jatoba» в условиях высокой транзакционной нагрузки, позволяет избежать его «переполнения» (как в случае использования 32-битного счетчика и риска остановки работы БД) и дает гораздо большую свободу администраторам БД.

Компонент xid64 является частью СУБД «Jatoba» и включен по умолчанию, а также требует отдельной настройки параметров.

## Сообщения об ошибках

СУБД «Jatoba» использует пятисимвольные коды ошибок, описанные в стандарте SQL ISO/IEC 9075 «Язык баз данных SQL».

Перечень данных ошибок приведен в таблице Таблица 15.1.

Таблица . – Коды ошибок СУБД «Jatoba» по стандарту SQL ISO/IEC 9075

| **Код ошибки** | **Имя условия** |
|----|----|
| **Класс 00** | **Успешное завершение** |
| 00000 | successful_completion |
| **Класс 01** | **Предупреждение** |
| 01000 | warning |
| 0100C | dynamic_result_sets_returned |
| 01008 | implicit_zero_bit_padding |
| 01003 | null_value_eliminated_in_set_function |
| 01007 | privilege_not_granted |
| 01006 | privilege_not_revoked |
| 01004 | string_data_right_truncation |
| 01P01 | deprecated_feature |
| **Класс 02** | **Нет данных (это также класс предупреждений согласно стандарту SQL)** |
| 02000 | no_data |
| 02001 | no_additional_dynamic_result_sets_returned |
| **Класс 03** | **SQL-оператор еще не завершен** |
| 03000 | sql_statement_not_yet_complete |
| **Класс 08** | **Исключение, связанное с подключением** |
| 08000 | connection_exception |
| 08003 | connection_does_not_exist |
| 08006 | connection_failure |
| 08001 | sqlclient_unable_to_establish_sqlconnection |
| 08004 | sqlserver_rejected_establishment_of_sqlconnection |
| 08007 | transaction_resolution_unknown |
| 08P01 | protocol_violation |
| **Класс 09** | **Исключение с действием триггера** |
| 09000 | triggered_action_exception |
| **Класс 0A** | **Неподдерживаемая функциональность** |
| 0A000 | feature_not_supported |
| **Класс 0B** | **Неверное начало транзакции** |
| 0B000 | invalid_transaction_initiation |
| **Класс 0F** | **Исключение с указателем на данные** |
| 0F000 | locator_exception |
| 0F001 | invalid_locator_specification |
| **Класс 0L** | **Неверный праводатель** |
| 0L000 | invalid_grantor |
| 0LP01 | invalid_grant_operation |
| **Класс 0P** | **Неверное указание роли** |
| 0P000 | invalid_role_specification |
| **Класс 0Z** | **Исключение диагностики** |
| 0Z000 | diagnostics_exception |
| 0Z002 | stacked_diagnostics_accessed_without_active_handler |
| **Класс 20** | **Case не найден** |
| 20000 | case_not_found |
| **Класс 21** | **Нарушение количества** |
| 21000 | cardinality_violation |
| **Класс 22** | **Исключение в данных** |
| 22000 | data_exception |
| 2202E | array_subscript_error |
| 22021 | character_not_in_repertoire |
| 22008 | datetime_field_overflow |
| 22012 | division_by_zero |
| 22005 | error_in_assignment |
| 2200B | escape_character_conflict |
| 22022 | indicator_overflow |
| 22015 | interval_field_overflow |
| 2201E | invalid_argument_for_logarithm |
| 22014 | invalid_argument_for_ntile_function |
| 22016 | invalid_argument_for_nth_value_function |
| 2201F | invalid_argument_for_power_function |
| 2201G | invalid_argument_for_width_bucket_function |
| 22018 | invalid_character_value_for_cast |
| 22007 | invalid_datetime_format |
| 22019 | invalid_escape_character |
| 2200D | invalid_escape_octet |
| 22025 | invalid_escape_sequence |
| 22P06 | nonstandard_use_of_escape_character |
| 22010 | invalid_indicator_parameter_value |
| 22023 | invalid_parameter_value |
| 2201B | invalid_regular_expression |
| 2201W | invalid_row_count_in_limit_clause |
| 2201X | invalid_row_count_in_result_offset_clause |
| 2202H | invalid_tablesample_argument |
| 2202G | invalid_tablesample_repeat |
| 22009 | invalid_time_zone_displacement_value |
| 2200C | invalid_use_of_escape_character |
| 2200G | most_specific_type_mismatch |
| 22004 | null_value_not_allowed |
| 22002 | null_value_no_indicator_parameter |
| 22003 | numeric_value_out_of_range |
| 22026 | string_data_length_mismatch |
| 2001 | string_data_right_truncation |
| 22011 | substring_error |
| 22027 | trim_error |
| 22024 | unterminated_c_string |
| 2200F | zero_length_character_string |
| 22P01 | floating_point_exception |
| 22P02 | invalid_text_representation |
| 22P03 | invalid_binary_representation |
| 22P04 | bad_copy_file_format |
| 22P05 | untranslatable_character |
| 2200L | not_an_xml_document |
| 2200M | invalid_xml_document |
| 2200N | invalid_xml_content |
| 2200S | invalid_xml_comment |
| 2200T | invalid_xml_processing_instruction |
| **Класс 23** | **Нарушение ограничения целостности** |
| 23000 | integrity_constraint_violation |
| 23001 | restrict_violation |
| 23502 | not_null_violation |
| 23503 | foreign_key_violation |
| 23505 | unique_violation |
| 23514 | check_violation |
| 23P01 | exclusion_violation |
| **Класс 24** | **Неверное состояние курсора** |
| 24000 | invalid_cursor_state |
| **Класс 25** | **Неверное состояние транзакции** |
| 25000 | invalid_transaction_state |
| 25001 | active_sql_transaction |
| 25002 | branch_transaction_already_active |
| 25008 | held_cursor_requires_same_isolation_level |
| 25003 | inappropriate_access_mode_for_branch_transaction |
| 25004 | inappropriate_isolation_level_for_branch_transaction |
| 25005 | no_active_sql_transaction_for_branch_transaction |
| 25006 | read_only_sql_transaction |
| 25007 | schema_and_data_statement_mixing_not_supported |
| 25P01 | no_active_sql_transaction |
| 25P02 | in_failed_sql_transaction |
| **Класс 26** | **Неверное имя SQL-оператора** |
| 26000 | invalid_sql_statement_name |
| **Класс 27** | **Нарушение при изменении данных в триггере** |
| 27000 | triggered_data_change_violation |
| **Класс 28** | **Неверное указание авторизации** |
| 28000 | invalid_authorization_specification |
| 28P01 | invalid_password |
| **Класс 2B** | **Зависимые описания привилегий все еще существуют** |
| 2B000 | dependent_privilege_descriptors_still_exist |
| 2BP01 | dependent_objects_still_exist |
| **Класс 2D** | **Неверное завершение транзакции** |
| 2D000 | invalid_transaction_termination |
| **Класс 2F** | **Исключение в подпрограмме SQL** |
| 2F000 | sql_routine_exception |
| 2F005 | function_executed_no_return_statement |
| 2F002 | modifying_sql_data_not_permitted |
| 2F003 | prohibited_sql_statement_attempted |
| 2F004 | reading_sql_data_not_permitted |
| **Класс 34** | **Неверное имя курсора** |
| 34000 | invalid_cursor_name |
| **Класс 38** | **Исключение во внешней подпрограмме** |
| 38000 | external_routine_exception |
| 38001 | containing_sql_not_permitted |
| 38002 | modifying_sql_data_not_permitted |
| 38003 | prohibited_sql_statement_attempted |
| 38004 | reading_sql_data_not_permitted |
| **Класс 39** | **Исключение при вызове внешней подпрограммы** |
| 39001 | invalid_sqlstate_returned |
| 39000 | external_routine_invocation_exception |
| 39004 | null_value_not_allowed |
| 39P01 | trigger_protocol_violated |
| 39P02 | srf_protocol_violated |
| 39P03 | event_trigger_protocol_violated |
| **Класс 3B** | **Исключение точки сохранения** |
| 3B000 | savepoint_exception |
| 3B001 | invalid_savepoint_specification |
| **Класс 3D** | **Неверное имя каталога** |
| 3D000 | invalid_catalog_name |
| **Класс 3F** | **Неверное имя схемы** |
| 3F000 | invalid_schema_name |
| **Класс 40** | **Откат транзакции** |
| 40000 | transaction_rollback |
| 40002 | transaction_integrity_constraint_violation |
| 40001 | serialization_failure |
| 40003 | statement_completion_unknown |
| 40P01 | deadlock_detected |
| **Класс 42** | **Ошибка синтаксиса или нарушение правила доступа** |
| 42000 | syntax_error_or_access_rule_violation |
| 42601 | syntax_error |
| 42501 | insufficient_privilege |
| 42846 | cannot_coerce |
| 42803 | grouping_error |
| 42P20 | windowing_error |
| 42P19 | invalid_recursion |
| 42830 | invalid_foreign_key |
| 42602 | invalid_name |
| 42622 | name_too_long |
| 42939 | reserved_name |
| 42804 | datatype_mismatch |
| 42P18 | indeterminate_datatype |
| 42P21 | collation_mismatch |
| 42P22 | indeterminate_collation |
| 42809 | wrong_object_type |
| 42703 | undefined_column |
| 42883 | undefined_function |
| 42P01 | undefined_table |
| 42P02 | undefined_parameter |
| 42704 | undefined_object |
| 42701 | duplicate_column |
| 42P03 | duplicate_cursor |
| 42P04 | duplicate_database |
| 42723 | duplicate_function |
| 42P05 | duplicate_prepared_statement |
| 42P06 | duplicate_schema |
| 42P07 | duplicate_table |
| 42712 | duplicate_alias |
| 42710 | duplicate_object |
| 42702 | ambiguous_column |
| 42725 | ambiguous_function |
| 42P08 | ambiguous_parameter |
| 42P09 | ambiguous_alias |
| 42P10 | invalid_column_reference |
| 42611 | invalid_column_definition |
| 42P11 | invalid_cursor_definition |
| 42P12 | invalid_database_definition |
| 42P13 | invalid_function_definition |
| 42P14 | invalid_prepared_statement_definition |
| 42P15 | invalid_schema_definition |
| 42P16 | invalid_table_definition |
| 42P17 | invalid_object_definition |
| **Класс 44** | **Нарушение WITH CHECK OPTION** |
| 44000 | with_check_option_violation |
| **Класс 53** | **Нехватка ресурсов** |
| 53000 | insufficient_resources |
| 53100 | disk_full |
| 53200 | out_of_memory |
| 53300 | too_many_connections |
| 53400 | configuration_limit_exceeded |
| **Класс 54** | **Превышение ограничения программы** |
| 54000 | program_limit_exceeded |
| 54001 | statement_too_complex |
| 54011 | too_many_columns |
| 54023 | too_many_arguments |
| **Класс 55** | **Объект не в требуемом состоянии** |
| 55000 | object_not_in_prerequisite_state |
| 55006 | object_in_use |
| 55P02 | cant_change_runtime_param |
| 55P03 | lock_not_available |
| **Класс 57** | **Вмешательство оператора** |
| 57000 | operator_intervention |
| 57014 | query_canceled |
| 57P01 | admin_shutdown |
| 57P02 | crash_shutdown |
| 57P03 | cannot_connect_now |
| 57P04 | database_dropped |
| **Класс 58** | **Ошибка системы** |
| 58000 | system_error |
| 58030 | io_error |
| 58P01 | undefined_file |
| 58P02 | duplicate_file |
| **Класс F0** | **Ошибка файла конфигурации** |
| F0000 | config_file_error |
| F0001 | lock_file_exists |
| **Класс HV** | **Ошибка обертки сторонних данных (SQL/MED)** |
| HV000 | fdw_error |
| HV005 | fdw_column_name_not_found |
| HV002 | fdw_dynamic_parameter_value_needed |
| HV010 | fdw_function_sequence_error |
| HV021 | fdw_inconsistent_descriptor_information |
| HV024 | fdw_invalid_attribute_value |
| HV007 | fdw_invalid_column_name |
| HV008 | fdw_invalid_column_number |
| HV004 | fdw_invalid_data_type |
| HV006 | fdw_invalid_data_type_descriptors |
| HV091 | fdw_invalid_descriptor_field_identifier |
| HV00B | fdw_invalid_handle |
| HV00C | fdw_invalid_option_index |
| HV00D | fdw_invalid_option_name |
| HV090 | fdw_invalid_string_length_or_buffer_length |
| HV00A | fdw_invalid_string_format |
| HV009 | fdw_invalid_use_of_null_pointer |
| HV014 | fdw_too_many_handles |
| HV001 | fdw_out_of_memory |
| HV00P | fdw_no_schemas |
| HV00J | fdw_option_name_not_found |
| HV00K | fdw_reply_handle |
| HV00Q | fdw_schema_not_found |
| HV00R | fdw_table_not_found |
| HV00L | fdw_unable_to_create_execution |
| HV00M | fdw_unable_to_create_reply |
| HV00N | fdw_unable_to_establish_connection |
| **Класс P0** | **Ошибка PL/pgSQL** |
| P0000 | plpgsql_error |
| P0001 | raise_exception |
| P0002 | no_data_found |
| P0003 | too_many_rows |
| P0004 | assert_failure |
| **Класс XX** | **Внутренняя ошибка** |
| XX000 | internal_error |
| XX001 | data_corrupted |
| XX002 | index_corrupted |

Возможные сообщения об ошибках, связанные с действиями по выполнению функций безопасности, приведены в таблице Таблица 15.2.

Таблица . – Перечень ошибок при выполнении ФБО

<table>
<colgroup>
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 38%" />
<col style="width: 41%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Мера</strong></th>
<th style="text-align: center;"><strong>Код</strong></th>
<th style="text-align: center;"><strong>Сообщение</strong></th>
<th style="text-align: center;"><strong>Сообщение в транскрипции</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>(ИАФ)</td>
<td>c:43</td>
<td>msgid "could not look up effective user ID %ld: %s"</td>
<td>msgstr "выяснить эффективный идентификатор пользователя (%ld) не удалось: %s"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:554</td>
<td>msgid "user does not exist"</td>
<td>msgstr "пользователь не существует"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:60</td>
<td>msgid "user name lookup failure: error code %lu"</td>
<td>msgstr "распознать имя пользователя не удалось (код ошибки: %lu)"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:1796</td>
<td>msgid "Enter new password: "</td>
<td>msgstr "Введите новый пароль: "</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:1801</td>
<td>msgid "Passwords didn't match.\n"</td>
<td>msgstr "Пароли не совпадают.\n"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:3329</td>
<td>msgid "Cannot login"</td>
<td>msgstr "Вход запрещен"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:3358</td>
<td>msgid "Password valid until "</td>
<td>msgstr "Пароль действует до "</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:140</td>
<td>msgid " -w, --no-password never prompt for password\n"</td>
<td>msgstr " -w, --no-password не запрашивать пароль\n"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:141</td>
<td>msgid """ -W, --password force password prompt (should happen ""automatically)\n"</td>
<td>msgstr """ -W, --password запрашивать пароль всегда (обычно не требуется)\n"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:297</td>
<td>msgid " \\password [USERNAME] securely change the password for a user\n"</td>
<td>msgstr " \\password [ИМЯ] безопасно сменить пароль пользователя\n"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:1093</td>
<td>msgid "password too long"</td>
<td>msgstr "слишком длинный пароль"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:249</td>
<td>msgid "client selected an invalid SASL authentication mechanism"</td>
<td>msgstr "клиент выбрал неверный механизм аутентификации SASL"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:296</td>
<td>msgid "password authentication failed for user \"%s\""</td>
<td>msgstr "пользователь \"%s\" не прошел проверку подлинности (по паролю)"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:322</td>
<td>msgid "authentication failed for user \"%s\": invalid authentication method"</td>
<td>msgstr "пользователь \"%s\" не прошел проверку подлинности: неверный метод проверки"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:3282</td>
<td>msgid "could not perform MD5 encryption of received packet"</td>
<td>msgstr "не удалось вычислить MD5 для принятого пакета"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:80</td>
<td>msgid "User \"%s\" has an expired password."</td>
<td>msgstr "Срок пароля пользователя \"%s\" истек."</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:182</td>
<td>msgid "User \"%s\" has a password that cannot be used with MD5 authentication."</td>
<td>msgstr "Пользователь \"%s\" имеет пароль, неподходящий для аутентификации по MD5."</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td><p>c:206</p>
<p>c:247</p>
<p>c:271</p></td>
<td>msgid "Password does not match for user \"%s\"."</td>
<td>msgstr "Пароль не подходит для пользователя \"%s\"."</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:290</td>
<td>msgid "Password of user \"%s\" is in unrecognized format."</td>
<td>msgstr "Пароль пользователя \"%s\" представлен в неизвестном формате."</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:408</td>
<td>msgid "%s: real and effective user IDs must match\n"</td>
<td>msgstr "%s: фактический и эффективный ID пользователя должны совпадать\n"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>c:2397</td>
<td>msgid "Sets the maximum allowed time to complete client authentication."</td>
<td>msgstr "Ограничивает время, за которое клиент должен пройти аутентификацию."</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>y:1026</td>
<td>msgid "UNENCRYPTED PASSWORD is no longer supported"</td>
<td>msgstr "вариант UNENCRYPTED PASSWORD более не поддерживается"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>y:1027</td>
<td>msgid "Remove UNENCRYPTED to store the password in encrypted form instead."</td>
<td>msgstr "Удалите слово UNENCRYPTED, чтобы сохранить пароль в зашифрованном виде."</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>l:1556</td>
<td>#~ msgid "%s: could not determine user name (GetUserName failed)\n"</td>
<td>#~ msgstr "%s: не удалось определить имя пользователя (ошибка в GetUserName)\n"</td>
</tr>
<tr>
<td>(ИАФ)</td>
<td>l:1556</td>
<td>#~ msgid "User \"%s\" has an empty password."</td>
<td>#~ msgstr "У пользователя \"%s\" пустой пароль."</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:45</td>
<td>msgid "command not executable"</td>
<td>msgstr "неисполняемая команда"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:552</td>
<td>msgid "could not get home directory for user ID %ld: %s\n"</td>
<td>msgstr "не удалось получить домашний каталог пользователя c ид. %ld: %s\n"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1098</td>
<td>msgid "The server (version %s) does not support altering default privileges.\n"</td>
<td>msgstr "Сервер (версия %s) не поддерживает изменение прав по умолчанию.\n"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3323</td>
<td>msgid "Create role"</td>
<td>msgstr "Создает роли"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3326</td>
<td>msgid "Create DB"</td>
<td>msgstr "Создает БД"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3408</td>
<td>msgid "The server (version %s) does not support per-database role settings.\n"</td>
<td>"Сервер (версия %s) не поддерживает назначение параметров ролей для баз "</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3444</td>
<td>msgid "Did not find any settings for role \"%s\" and database \"%s\".\n"</td>
<td>msgstr "Параметры для роли \"%s\" и базы данных \"%s\" не найдены.\n"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3447</td>
<td>msgid "Did not find any settings for role \"%s\".\n"</td>
<td>msgstr "Параметры для роли \"%s\" не найдены.\n"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3450</td>
<td>msgid "Did not find any settings.\n"</td>
<td>msgstr "Никакие параметры не найдены.\n"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3364</td>
<td>msgid "permission denied for aggregate %s"</td>
<td>msgstr "нет доступа к агрегату %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3367</td>
<td>msgid "permission denied for collation %s"</td>
<td>msgstr "нет доступа к правилу сортировки %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3370</td>
<td>msgid "permission denied for column %s"</td>
<td>msgstr "нет доступа к столбцу %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3373</td>
<td>msgid "permission denied for conversion %s"</td>
<td>msgstr "нет доступа к преобразованию %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3376</td>
<td>msgid "permission denied for database %s"</td>
<td>msgstr "нет доступа к базе данных %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3379</td>
<td>msgid "permission denied for domain %s"</td>
<td>msgstr "нет доступа к домену %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3382</td>
<td>msgid "permission denied for event trigger %s"</td>
<td>msgstr "нет доступа к событийному триггеру %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3385</td>
<td>msgid "permission denied for extension %s"</td>
<td>msgstr "нет доступа к расширению %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3388</td>
<td>msgid "permission denied for foreign-data wrapper %s"</td>
<td>msgstr "нет доступа к обертке сторонних данных %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3391</td>
<td>msgid "permission denied for foreign server %s"</td>
<td>msgstr "нет доступа к стороннему серверу %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3394</td>
<td>msgid "permission denied for foreign table %s"</td>
<td>msgstr "нет доступа к сторонней таблице %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3397</td>
<td>msgid "permission denied for function %s"</td>
<td>msgstr "нет доступа к функции %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3400</td>
<td>msgid "permission denied for index %s"</td>
<td>msgstr "нет доступа к индексу %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3403</td>
<td>msgid "permission denied for language %s"</td>
<td>msgstr "нет доступа к языку %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3406</td>
<td>msgid "permission denied for large object %s"</td>
<td>msgstr "нет доступа к большому объекту %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3409</td>
<td>msgid "permission denied for materialized view %s"</td>
<td>msgstr "нет доступа к материализованному представлению %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3412</td>
<td>msgid "permission denied for operator class %s"</td>
<td>msgstr "нет доступа к классу операторов %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3415</td>
<td>msgid "permission denied for operator %s"</td>
<td>msgstr "нет доступа к оператору %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3418</td>
<td>msgid "permission denied for operator family %s"</td>
<td>msgstr "нет доступа к семейству операторов %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3421</td>
<td>msgid "permission denied for policy %s"</td>
<td>msgstr "нет доступа к политике %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3424</td>
<td>msgid "permission denied for procedure %s"</td>
<td>msgstr "нет доступа к процедуре %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3427</td>
<td>msgid "permission denied for publication %s"</td>
<td>msgstr "нет доступа к публикации %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3430</td>
<td>msgid "permission denied for routine %s"</td>
<td>msgstr "нет доступа к подпрограмме %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3433</td>
<td>msgid "permission denied for schema %s"</td>
<td>msgstr "нет доступа к схеме %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1852</td>
<td>msgid "permission denied for sequence %s"</td>
<td>msgstr "нет доступа к последовательности %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3439</td>
<td>msgid "permission denied for statistics object %s"</td>
<td>msgstr "нет доступа к объекту статистики %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3442</td>
<td>msgid "permission denied for subscription %s"</td>
<td>msgstr "нет доступа к подписке %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3445</td>
<td>msgid "permission denied for table %s"</td>
<td>msgstr "нет доступа к таблице %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3448</td>
<td>msgid "permission denied for tablespace %s"</td>
<td>msgstr "нет доступа к табличному пространству %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3451</td>
<td>msgid "permission denied for text search configuration %s"</td>
<td>msgstr "нет доступа к конфигурации текстового поиска %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3454</td>
<td>msgid "permission denied for text search dictionary %s"</td>
<td>msgstr "нет доступа к словарю текстового поиска %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3457</td>
<td>msgid "permission denied for type %s"</td>
<td>msgstr "нет доступа к типу %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3460</td>
<td>msgid "permission denied for view %s"</td>
<td>msgstr "нет доступа к представлению %s"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:3643</td>
<td>msgid "permission denied for column \"%s\" of relation \"%s\""</td>
<td>msgstr "нет доступа к столбцу \"%s\" отношения \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:58</td>
<td>msgid "permission denied to create access method \"%s\""</td>
<td>msgstr "нет прав на создание метода доступа \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:60</td>
<td>msgid "Must be superuser to create an access method."</td>
<td>msgstr "Для создания метода доступа нужно быть суперпользователем."</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:68</td>
<td>msgid "access method \"%s\" already exists"</td>
<td>msgstr "метод доступа \"%s\" уже существует"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:123</td>
<td>msgid "must be superuser to drop access methods"</td>
<td>msgstr "для удаления методов доступа нужно быть суперпользователем"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:824</td>
<td>msgid "" "must be superuser or a member of the pg_write_server_files role to COPY to a ""file"</td>
<td>"для выполнения COPY с записью в файл нужно быть суперпользователем или ""членом роли pg_write_server_files"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:311</td>
<td>msgid "permission denied to create database"</td>
<td>msgstr "нет прав на создание базы данных"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:346</td>
<td>msgid "permission denied to copy database \"%s\""</td>
<td>msgstr "нет прав на копирование базы данных \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td><p>c:480</p>
<p>c:1016</p></td>
<td>msgid "database \"%s\" already exists"</td>
<td>msgstr "база данных \"%s\" уже существует"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:839</td>
<td>msgid "cannot drop a template database"</td>
<td>msgstr "удалить шаблон базы данных нельзя"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:845</td>
<td>msgid "cannot drop the currently open database"</td>
<td>msgstr "удалить базу данных, открытую в данный момент, нельзя"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1007</td>
<td>msgid "permission denied to rename database"</td>
<td>msgstr "нет прав на переименование базы данных"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1667</td>
<td>msgid "permission denied to change owner of database"</td>
<td>msgstr "нет прав на изменение владельца базы данных"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:620</td>
<td>msgid "permission denied to change owner of event trigger \"%s\""</td>
<td>msgstr "нет прав на изменение владельца событийного триггера \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:807</td>
<td>msgid "permission denied to create extension \"%s\""</td>
<td>msgstr "нет прав на создание расширения \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:813</td>
<td>msgid "permission denied to update extension \"%s\""</td>
<td>msgstr "нет прав на изменение расширения \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:696</td>
<td>msgid "permission denied to alter foreign-data wrapper \"%s\""</td>
<td>msgstr "нет прав на изменение обертки сторонних данных \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:924</td>
<td>msgid "permission denied: \"%s\" is a system catalog"</td>
<td>msgstr "доступ запрещен: \"%s\" - это системный каталог"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:170</td>
<td>msgid "ignoring specified roles other than PUBLIC"</td>
<td>msgstr "все указанные роли, кроме PUBLIC, игнорируются"</td>
</tr>
<tr>
<td>(УПД)</td>
<td><p>c:802</p>
<p>c:1247</p></td>
<td>msgid "policy \"%s\" for table \"%s\" already exists"</td>
<td>msgstr "политика \"%s\" для таблицы \"%s\" уже существует"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:681</td>
<td>msgid "permission denied to change owner of publication \"%s\""</td>
<td>msgstr "нет прав на изменение владельца публикации \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:590</td>
<td>msgid "could not set permissions on directory \"%s\": %m"</td>
<td>msgstr "не удалось установить права для каталога \"%s\": %m"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:295</td>
<td>msgid "must be superuser to create superusers"</td>
<td>msgstr "для создания суперпользователей нужно быть суперпользователем"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:302</td>
<td>msgid "must be superuser to create replication users"</td>
<td>msgstr "для создания пользователей-репликаторов нужно быть суперпользователем"</td>
</tr>
<tr>
<td>(УПД)</td>
<td><p>c:309</p>
<p>c:707</p></td>
<td>msgid "must be superuser to change bypassrls attribute"</td>
<td>msgstr "для изменения атрибута bypassrls нужно быть суперпользователем"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:316</td>
<td>msgid "permission denied to create role"</td>
<td>msgstr "нет прав для создания роли"</td>
</tr>
<tr>
<td>(УПД)</td>
<td><p>c:340</p>
<p>c:1210</p></td>
<td>msgid "role \"%s\" already exists"</td>
<td>msgstr "роль \"%s\" уже существует"</td>
</tr>
<tr>
<td>(УПД)</td>
<td><p>c:406</p>
<p>c:816</p></td>
<td>msgid "empty string is not a valid password, clearing password"</td>
<td>msgstr "пустая строка не является допустимым паролем; пароль сбрасывается"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1593</td>
<td>msgid "must be superuser to alter superusers"</td>
<td>msgstr "для модификации суперпользователей нужно быть суперпользователем"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:700</td>
<td>msgid "must be superuser to alter replication users"</td>
<td>msgstr "для модификации пользователей-репликаторов нужно быть суперпользователем"</td>
</tr>
<tr>
<td>(УПД)</td>
<td><p>c:723</p>
<p>c:923</p></td>
<td>msgid "permission denied"</td>
<td>msgstr "нет доступа"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:975</td>
<td>msgid "permission denied to drop role"</td>
<td>msgstr "нет прав для удаления роли"</td>
</tr>
<tr>
<td>(УПД)</td>
<td><p>c:1026</p>
<p>c:1030</p></td>
<td>msgid "current user cannot be dropped"</td>
<td>msgstr "пользователь не может удалить сам себя"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1034</td>
<td>msgid "session user cannot be dropped"</td>
<td>msgstr "пользователя текущего сеанса нельзя удалить"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1045</td>
<td>msgid "must be superuser to drop superusers"</td>
<td>msgstr "для удаления суперпользователей нужно быть суперпользователем"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1182</td>
<td>msgid "session user cannot be renamed"</td>
<td>msgstr "пользователя текущего сеанса нельзя переименовать"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1186</td>
<td>msgid "current user cannot be renamed"</td>
<td>msgstr "пользователь не может переименовать сам себя"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1220</td>
<td>msgid "must be superuser to rename superusers"</td>
<td>msgstr "для переименования суперпользователей нужно быть суперпользователем"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1227</td>
<td>msgid "permission denied to rename role"</td>
<td>msgstr "нет прав на переименование роли"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1248</td>
<td>msgid "MD5 password cleared because of role rename"</td>
<td>msgstr "в результате переименования роли очищен MD5-хеш пароля"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1346</td>
<td>msgid "permission denied to drop objects"</td>
<td>msgstr "нет прав на удаление объектов"</td>
</tr>
<tr>
<td>(УПД)</td>
<td><p>c:1373</p>
<p>c:1382</p></td>
<td>msgid "permission denied to reassign objects"</td>
<td>msgstr "нет прав для переназначения объектов"</td>
</tr>
<tr>
<td>(УПД)</td>
<td><p>c:1457</p>
<p>c:1601</p></td>
<td>msgid "must have admin option on role \"%s\""</td>
<td>msgstr "требуется право admin для роли \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:1474</td>
<td>msgid "must be superuser to set grantor"</td>
<td>msgstr "для назначения права управления правами нужно быть суперпользователем"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:466</td>
<td>msgid "could not access file \"%s\": %m"</td>
<td>msgstr "нет доступа к файлу \"%s\": %m"</td>
</tr>
<tr>
<td>(УПД)</td>
<td><p>c:847</p>
<p>c:296</p></td>
<td>msgid "permission denied for large object %u"</td>
<td>msgstr "нет доступа к большому объекту %u"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:696</td>
<td>msgid "could not set permissions of file \"%s\": %m"</td>
<td>msgstr "не удалось установить права доступа для файла \"%s\": %m"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:157</td>
<td>msgid "data directory \"%s\" has invalid permissions"</td>
<td>msgstr "для каталога данных \"%s\" установлены неправильные права доступа"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:645</td>
<td>msgid "role \"%s\" is not permitted to log in"</td>
<td>msgstr "для роли \"%s\" вход запрещен"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:663</td>
<td>msgid "too many connections for role \"%s\""</td>
<td>msgstr "слишком много подключений для роли \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:723</td>
<td>msgid "permission denied to set session authorization"</td>
<td>msgstr "нет прав для смены объекта авторизации в сеансе"</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:346</td>
<td>msgid "User does not have CONNECT privilege."</td>
<td>msgstr "Пользователь не имеет привилегии CONNECT."</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:363</td>
<td>msgid "too many connections for database \"%s\""</td>
<td>msgstr "слишком много подключений к БД \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td>c:803</td>
<td>msgid "must be superuser or replication role to start walsender"</td>
<td>msgstr "для запуска процесса walsender требуется роль репликации или права суперпользователя "</td>
</tr>
<tr>
<td>(УПД)</td>
<td>y:1089</td>
<td>msgid "unrecognized role option \"%s\""</td>
<td>msgstr "нераспознанный параметр роли \"%s\""</td>
</tr>
<tr>
<td>(УПД)</td>
<td><p>y:14900</p>
<p>y:14907</p></td>
<td>msgid "%s cannot be used as a role name here"</td>
<td>msgstr "%s нельзя использовать здесь как имя роли"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:3003</td>
<td>msgid "Cannot add header to table content: column count of %d exceeded.\n"</td>
<td>"Ошибка добавления заголовка таблицы: превышен предел числа столбцов  (%d).\n"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:3043</td>
<td>msgid "Cannot add cell to table content: total cell count of %d exceeded.\n"</td>
<td>"Ошибка добавления ячейки в таблицу: превышен предел числа ячеек (%d).\n"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:3292</td>
<td>msgid "invalid output format (internal error): %d"</td>
<td>msgstr "неверный формат вывода (внутренняя ошибка): %d"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:220</td>
<td>msgid "Invalid command \\%s. Try \\? for help.\n"</td>
<td>msgstr "Неверная команда \\%s. Справка по командам: \\?\n"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:222</td>
<td>msgid "invalid command \\%s\n"</td>
<td>msgstr "неверная команда \\%s\n"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:4496</td>
<td>msgid "invalid field size"</td>
<td>msgstr "неверный размер поля"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:4519</td>
<td>msgid "incorrect binary data format"</td>
<td>msgstr "неверный двоичный формат данных"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:3209</td>
<td>msgid "invalid input string for \"Y,YYY\""</td>
<td>msgstr "ошибка синтаксиса в значении для шаблона \"Y,YYY\""</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:3724</td>
<td>msgid "hour \"%d\" is invalid for the 12-hour clock"</td>
<td>msgstr "час \"%d\" не соответствует 12-часовому формату времени"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:2389</td>
<td>msgid "The given value did not match any of the allowed values for this field."</td>
<td>msgstr "Данное значение не соответствует ни одному из допустимых значений для этого "поля."</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:2266</td>
<td>msgid "Value must be in the range %d to %d."</td>
<td>msgstr "Значение должно быть в интервале %d..%d."</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:2259</td>
<td>msgid "Value must be an integer."</td>
<td>msgstr "Значение должно быть целым числом."</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td><p>c:2244</p>
<p>c:2257</p></td>
<td>msgid "invalid value \"%s\" for \"%s\""</td>
<td>msgstr "неверное значение \"%s\" для \"%s\""</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:2229</td>
<td>msgid "source string too short for \"%s\" formatting field"</td>
<td>msgstr "входная строка короче, чем требует поле форматирования \"%s\""</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:1392</td>
<td>msgid "\"%s\" is not a number"</td>
<td>msgstr "\"%s\" не является числом"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>c:488</td>
<td>msgid "invalid format specification for an interval value"</td>
<td>msgstr "неправильная спецификация формата для целого числа"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td><p>c:125</p>
<p>c:51</p>
<p>c:61</p></td>
<td>msgid "invalid input syntax for integer: \"%s\""</td>
<td>msgstr "неверное значение для целого числа: \"%s\""</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "access method name cannot be qualified"</td>
<td>#~ msgstr "имя метода доступа не может быть составным"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "database name cannot be qualified"</td>
<td>#~ msgstr "имя базы данных не может быть составным"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "extension name cannot be qualified"</td>
<td>#~ msgstr "имя расширения не может быть составным"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "tablespace name cannot be qualified"</td>
<td>#~ msgstr "имя табличного пространства не может быть составным"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "role name cannot be qualified"</td>
<td>#~ msgstr "имя роли не может быть составным"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "schema name cannot be qualified"</td>
<td>#~ msgstr "имя схемы не может быть составным"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "language name cannot be qualified"</td>
<td>#~ msgstr "имя языка не может быть составным"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "foreign-data wrapper name cannot be qualified"</td>
<td>#~ msgstr "имя обертки сторонних данных не может быть составным"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "server name cannot be qualified"</td>
<td>#~ msgstr "имя сервера не может быть составным"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "event trigger name cannot be qualified"</td>
<td>#~ msgstr "имя событийного триггера не может быть составным"</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "invalid input syntax for type real: \"%s\""</td>
<td>#~ msgstr "неверный синтаксис для типа real: \"%s\""</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "invalid value for parameter \"replication\""</td>
<td>#~ msgstr "неверное значение параметра \"replication\""</td>
</tr>
<tr>
<td>(ОЦЛ)</td>
<td>l:1556</td>
<td>#~ msgid "invalid symbol"</td>
<td>#~ msgstr "неверный символ"</td>
</tr>
<tr>
<td>(РСБ)</td>
<td>c:179</td>
<td>msgid "invalid data in history file \"%s\""</td>
<td>msgstr "неверные данные в файле истории \"%s\""</td>
</tr>
<tr>
<td>(РСБ)</td>
<td>c:915</td>
<td>msgid "%s: invalid datetoken tables, please fix\n"</td>
<td>msgstr "%s: ошибка в таблицах маркеров времени, требуется исправление\n"</td>
</tr>
<tr>
<td>(РСБ)</td>
<td><p>c:565</p>
<p>c:579</p></td>
<td>msgid "could not create pipe for syslog: %m"</td>
<td>msgstr "не удалось создать канал для syslog: %m"</td>
</tr>
<tr>
<td>(РСБ)</td>
<td>c:1102</td>
<td>msgid "could not write to log file: %s\n"</td>
<td>msgstr "не удалось записать в файл протокола: %s\n"</td>
</tr>
<tr>
<td>(РСБ)</td>
<td>c:1219</td>
<td>msgid "could not open log file \"%s\": %m"</td>
<td>msgstr "не удалось открыть файл протокола \"%s\": %m"</td>
</tr>
<tr>
<td>(РСБ)</td>
<td>c:630</td>
<td>msgid "could not fork system logger: %m"</td>
<td>msgstr "не удалось породить процесс системного протоколирования: %m"</td>
</tr>
<tr>
<td>(РСБ)</td>
<td>c:484</td>
<td>msgid "invalid input syntax for numeric time zone: \"%s\""</td>
<td>msgstr "неверный синтаксис для числового часового пояса: \"%s\""</td>
</tr>
<tr>
<td>(РСБ)</td>
<td>c:301</td>
<td>msgid "invalid time zone file name \"%s\""</td>
<td>msgstr "неправильное имя файла часовых поясов: \"%s\""</td>
</tr>
</tbody>
</table>

## Действия после сбоев и ошибок эксплуатации СУБД «Jatoba»

При эксплуатации СУБД «Jatoba» возможно возникновение следующих ошибок:

- 
- 
- 
- 

### сбой инициализация расширения «securityprofile» (п. 16.3);ошибки создания пользователя (п. 16.4);ошибки, возникающие при использовании профиля парольных политик (п. 16.5);ошибка авторизации (п. 16.6).Временная блокировка пользователей СУБД и суперпользователя

Ошибка может возникнуть если не были выполнены требования п. 6.1.3.2 настоящего документа.

> Account must have password. Account locked temporary.

В случае когда временно заблокированы УЗ пользователей СУБД, следует выполнить действия описанные в п. 6.2.4.

Если заблокирован пользователь «postgres», то порядок действий должен быть следующим:

1)  
2)  

> Изменить метод аутентификации в конфигурационном файле «pg_hba.conf» на «TRUST».В файле конфигурационном фале «postgresql.conf» **не отключать** параметр:shared_preload_libraries = 'securityprofile'

3)  

- 

> Перезапустить СУБД «Jatoba» командами:в ОС Windows:net stop JatobaServer
>
> net start JatobaServer

- 

> в GNU Linux:systemctl stop jatoba-<ver>
>
> systemctl start jatoba-<ver>
>
> systemctl status jatoba-<ver>

4)  

> Войти в СУБД от имени и с правами пользователя «postgres» и изменить пароль в СУБД при помощи команды:АLTER ROLE \<имя учетной записи пользователя\> password '\<пароль пользователя\>';

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image83.png" style="width:7.08652in;height:1.832in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\securityprofile\PIC\Screenshot from 2023-02-08 07-56-15.png" />

Рисунок . – Смена пароля пользователя «postgres»

5)  
6)  

- 

> Изменить метод аутентификации в конфигурационном файле «pg_hba.conf» на «md5» или другой метод парольной аутентификации; Перезапустить СУБД «Jatoba» командами:в ОС Windows:net stop JatobaServer
>
> net start JatobaServer

- 

> в GNU Linux:systemctl stop jatoba-<ver>
>
> systemctl start jatoba-<ver>
>
> systemctl status jatoba-<ver>

7)  

### Проверить работоспособность СУБД, войдя от имени и с правами пользователя «postgres».Блокировка суперпользователя СУБД

Ошибка может возникнуть в случае:

- 
- 
- 

истечение срока действия пароля, без своевременного обновления пароля;превышение допустимого числа попыток ввода некорректного пароля;отсутствие подключений к серверу с использованием учетных данных, дольше разрешенного времени.Если заблокирован пользователь «postgres», то порядок действий должен быть следующим:

1)  

> Изменить метод аутентификации в конфигурационном файле «pg_hba.conf» на «TRUST». Будет достаточно добавить строку с именем суперпользователя:
>
> local all \<имя роли суперпользователя\> trust

2)  

> В файле конфигурационном фале «postgresql.conf» **не отключать** параметр:shared_preload_libraries = 'securityprofile'

3)  

- 

> Перезапустить СУБД «Jatoba» командами:в ОС Windows:net stop JatobaServer
>
> net start JatobaServer

- 

> в GNU Linux:systemctl stop jatoba-<ver>
>
> systemctl start jatoba-<ver>
>
> systemctl status jatoba-<ver>

4)  

- 

Выполнить команду разблокировки учетной записи заблокированного пользователя:SQL-командой:

> SELECT securityprofile.unlock_account('\<имя заблокированной роли\>', 0);

- 

> Командой в терминале ОС:postgres@host\$ psql -p 5435 -d secprofdb -U pgadmin -c "SELECT securityprofile.unlock_account('\<имя заблокированной роли\>', 0);"

5)  
6)  

> Открыть в редакторе файл "pg_hba.conf" и восстановить режим аутентификации, отключив режим "trust".Перезапустить службу СУБД. SYSTEMCTL RESTART \<Имя службы СУБД\>

7)  

### Проверить работоспособность СУБД, войдя от имени и с правами пользователя «postgres».Сбой инициализация расширения «securityprofile»

После перезагрузки сервера СУБД либо службы «JatobaServer» СУБД у пользователей, при авторизации может возникать ошибка:

> «FATAL: Extension securityprofile need to be initialized by superuser.»

На процесс авторизации пользователей в СУБД данная ошибка не влияет.

Для устранения возникшей ошибки, следует повторно инициализировать расширение «SecurityProfile», выполнив команду:

> SELECT securityprofile.synchronize();

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image84.png" style="width:7.08652in;height:1.8in" alt="C:\Users\kuznetsov-a\Documents\!Наработки!\securityprofile\PIC\Screenshot from 2023-02-08 04-23-32.png" />

Рисунок . – Команда выполнения инициализации расширения «SecurityProfile»

### Ошибки создания пользователя

При попытке пользователя, обладающего привилегией создания ролей «Create roles», создать пользователя может возникнуть ошибка:

> «permission denied for schema securityprofile»

Это означает, что у пользователя отсутствует доступ к схеме «securityprofile».

Для устранения ошибки следует предоставить права пользователю на использование схемы, выполнив команды:

> GRANT CREATE ON SCHEMA securityprofile TO \<имя пользователя\>;
>
> GRANT USAGE ON SCHEMA securityprofile TO \<имя пользователя\>;

После инициализации расширения «securityprofile» активируется парольная политика по умолчанию.

Пароль пользователя должен содержать:

- 
- 
- 

### 1 символ в верхнем регистре;1 символ в нижнем регистре;1 спецсимвол.Ошибки, возникающие при использовании профиля парольных политик «securityprofile»

Перечень ошибок, возникающих при использовании профиля парольных политик «securityprofile», приведен в таблице Таблица 16.1.

Таблица . – Перечень ошибок

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 27%" />
<col style="width: 33%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>№</strong></th>
<th style="text-align: center;"><strong>Текст ошибки</strong></th>
<th style="text-align: center;"><strong>Перевод</strong></th>
<th style="text-align: center;"><strong>Пути исправления</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><ol type="1">
<li></li>
</ol></td>
<td style="text-align: left;"><p>Schema (%s) does not exist.</p>
<p>Probably extension (%s) is not created yet</p></td>
<td style="text-align: left;"><p>Схема (<em>имя схемы</em>) не существует.</p>
<p>Вероятно, расширение (<em>имя проф</em>иля) еще не создано</p></td>
<td style="text-align: left;"><p>Требуется установить расширение командой:</p>
<blockquote>
<p>create extension securityprofile;</p>
</blockquote>
<p>Подробно действия описаны в п.6.1.2</p></td>
</tr>
<tr>
<td><ol start="2" type="1">
<li></li>
</ol></td>
<td style="text-align: left;"><p>Table (%s) does not exist.</p>
<p>Probably extension (%s) is not created yet</p></td>
<td style="text-align: left;"><p>Таблица (<em>имя таблицы</em>) не существует.</p>
<p>Вероятно, расширение (<em>имя профиля</em>) еще не создано</p></td>
<td style="text-align: left;"><p>Требуется установить расширение командой:</p>
<blockquote>
<p>create extension securityprofile;</p>
</blockquote>
<p>Подробно действия описаны в п.6.1.2</p></td>
</tr>
<tr>
<td><ol start="3" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Extension "securityprofile" has to be loaded using shared_preload_libraries</td>
<td style="text-align: left;">Расширение "securityprofile" должно быть загружено с помощью shared_preload_libraries</td>
<td style="text-align: left;"><p>Для устранения ошибки в файле «postgresql.conf» прописать следующую строку:</p>
<blockquote>
<p>shared_preload_libraries = 'securityprofile'</p>
</blockquote>
<p>Подробно действия описаны в п.6.1.2</p></td>
</tr>
<tr>
<td><ol start="4" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">You must be superuser to run this function</td>
<td style="text-align: left;">Вы должны быть суперпользователем, чтобы запустить эту функцию</td>
<td style="text-align: left;"><p>Ошибка возникает при попытке с недостаточными привилегиями пользователя запустить функции управления расширениями, в том числе «securityprofile».</p>
<p>Пользователю потребуется назначить дополнительные привилегии, в том числе на схему выполнив команды:</p>
<blockquote>
<p>GRANT CREATE ON SCHEMA securityprofile TO &lt;имя пользователя&gt;;</p>
<p>GRANT USAGE ON SCHEMA securityprofile TO &lt;имя пользователя&gt;;</p>
</blockquote></td>
</tr>
<tr>
<td><ol start="5" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Failed login attempts limit exceeded</td>
<td style="text-align: left;">Превышен лимит неудачных попыток входа в систему</td>
<td style="text-align: left;">Пользователю следует подождать установленное время или обратиться к администратору</td>
</tr>
<tr>
<td><ol start="6" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Password may not be reused. Try another</td>
<td style="text-align: left;">Пароль не может быть использован повторно. Попробовать другой</td>
<td style="text-align: left;">Сообщение возникает при нарушении парольной политики повторного использования пароля</td>
</tr>
<tr>
<td><ol start="7" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Value of string's length should be between min_border and max_border</td>
<td style="text-align: left;">Значение длины строки должно быть между min_border и max_border</td>
<td style="text-align: left;"><p>Ошибка возникает, при:</p>
<ul>
<li></li>
<li></li>
</ul>
<p>смене пароля пользователя;создании или переименовании профиля и задании строки спецсимволов.Длина введенной строки не удовлетворяет предустановленным границам расширения:</p>
<ul>
<li></li>
<li></li>
<li></li>
</ul></td>
</tr>
<tr>
<td><ol start="8" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">имени от 1 до 32;пароля от 6 до 256;строки спецсимволов от 0 до 32New password must have at least (%d) changes. profile-&gt; password_min_changes_count</td>
<td style="text-align: left;">Новый пароль должен иметь не менее (количество символов) изменений. profile - &gt; password_min_changes_count</td>
<td style="text-align: left;">Сообщение возникает при нарушении политики количества изменений в пароле</td>
</tr>
<tr>
<td><ol start="9" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">User's password may not be changed right now. Password's minimim life time not expired yet</td>
<td style="text-align: left;">Пароль пользователя не может быть изменен прямо сейчас. Минимальное время жизни пароля еще не истекло</td>
<td style="text-align: left;"><p>В случае, когда инициализирован параметр «securityprofile.password_min_life_time» и пользователю присвоен пароль начинается период в течение которого пароль должен использоваться и не может быть изменен.</p>
<p>Соотношение временных параметров пароля подробно описано в п. 6.1.3.4.2, а параметры парольных политик приведены в таблице <strong>Ошибка! Недопустимый результат для таблицы.</strong>.</p>
<p>В данном случае необходимо дождаться окончания минимального времени действия пароля, либо отключить параметр «securityprofile.password_min_life_time»</p></td>
</tr>
<tr>
<td><ol start="10" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Password is too short</td>
<td style="text-align: left;">Пароль слишком короткий</td>
<td style="text-align: left;">Сообщение возникает при попытке установить пароль, который не соответствует значению минимального количества символов (securityprofile.minimum_length)</td>
</tr>
<tr>
<td><ol start="11" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Password is too long</td>
<td style="text-align: left;">Пароль слишком длинный</td>
<td style="text-align: left;">Сообщение возникает при попытке установить пароль количество символов в котором превышает установленный параметр максимальной длины пароля (securityprofile.maximum_length)</td>
</tr>
<tr>
<td><ol start="12" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Password must not contain user name</td>
<td style="text-align: left;">Пароль не должен содержать имя пользователя</td>
<td style="text-align: left;"><p>Сообщение возникает при проверке содержания пароля.</p>
<p>В теле пароля не должно быть указания имени пользователя</p></td>
</tr>
<tr>
<td><ol start="13" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Password contains invalid characters</td>
<td style="text-align: left;">Пароль содержит недопустимые символы</td>
<td style="text-align: left;">Сообщение возникает, когда в пароле присутствуют специальные символы, не содержащиеся в справочнике специальных символов, заданных параметром «securityprofile.special_chars»</td>
</tr>
<tr>
<td><ol start="14" type="1">
<li></li>
</ol></td>
<td style="text-align: left;"><p>Extension (%)s need existent role to check it's new password.</p>
<p>Call CREATE ROLE without PASSWORD part then use ALTER ROLE ... PASSWORD to set new password properly</p></td>
<td style="text-align: left;"><p>Расширению требуется уже существующая роль, для проверки ее нового пароля.</p>
<p>Выполните запрос CREATE ROLE без установки пароля.</p>
<p>Затем выполните запрос ALTER ROLE для установки пароля</p></td>
<td style="text-align: left;">Ошибка возникает при создании пользователя с указанием пароля. Подробно создание пользователя в п.6.2.4</td>
</tr>
<tr>
<td><ol start="15" type="1">
<li></li>
</ol></td>
<td style="text-align: left;"><p>Can not check password validity</p>
<p>Password may be changed only by ALTER ROLE query</p></td>
<td style="text-align: left;"><p>Невозможно проверить валидность пароля</p>
<p>Пароль может быть изменен только запросом ALTER ROLE</p></td>
<td style="text-align: left;">Ошибка связана с особенностью реализации парольных политик. Изменить пароль пользователя можно через команду ALTER ROLE</td>
</tr>
<tr>
<td><ol start="16" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">User must change password. Password grace time expired</td>
<td style="text-align: left;">Пользователь должен изменить пароль. Срок действия льготного пароля истек</td>
<td style="text-align: left;">Ошибка возникает при истечении срока действия пароля</td>
</tr>
<tr>
<td><ol start="17" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">User should change password. Password life time expired. Password still in use until grace time expired, so user may login on next try</td>
<td style="text-align: left;">Пользователь должен сменить пароль. Срок службы пароля истек. Пароль все еще используется до истечения льготного времени, поэтому пользователь может войти в систему при следующей попытке</td>
<td style="text-align: left;"><p>Сообщение возникает при истечении срока действия пароля пользователя, если установлен параметр</p>
<p>«securityprofile.password_grace_time» - время в секундах, в течение которого пользователь может использовать текущий пароль с напоминанием о необходимости его сменить до блокировки аккаунта. Время прибавляется к времени, установленному в securityprofile.password_life_time. Подробно взаимодействие параметров описано в пп. 6.1.3.4.1</p></td>
</tr>
<tr>
<td><ol start="18" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Account is locked forever</td>
<td style="text-align: left;">Учетная запись заблокирована навсегда</td>
<td style="text-align: left;">Учетную запись пользователя может разблокировать только Superuser. Ошибка возникает, если время блокировки установлено параметром «unlimited» (бесконечно)</td>
</tr>
<tr>
<td><ol start="19" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Account is locked till. Try later unlock_date</td>
<td style="text-align: left;">Учетная запись пользователя заблокирована до «даты». Попробуйте позже «даты»</td>
<td style="text-align: left;">Учетную запись пользователя может разблокировать только Superuser. Ошибка возникает, если время блокировки установлено на определенный период времени</td>
</tr>
<tr>
<td><ol start="20" type="1">
<li></li>
</ol></td>
<td style="text-align: left;"><p>Extension "EXTENSION_NAME" need to be initialized by superuser</p>
<p>Login as superuser and call "select securityprofile.synchronize()</p></td>
<td style="text-align: left;"><p>Расширение «securityprofile» должно быть инициализировано суперпользователем</p>
<p>Войдите в систему, как суперпользователь и вызовите команду select securityprofile. synchronize ()</p></td>
<td style="text-align: left;">Сообщение возникает при ошибке инициализации «securityprofile». Действия по исправлению описаны в подразделе 16.3</td>
</tr>
<tr>
<td><ol start="21" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Value should be between min_border and max_border</td>
<td style="text-align: left;">Значение должно быть между min_border и max_border</td>
<td style="text-align: left;">Ошибка возникает при установке значений профиля. В данном случае устанавливаемые параметры выходят за предустановленные границы</td>
</tr>
<tr>
<td><ol start="22" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Password minimum length can not be larger than maximum length, default_profile.password_max_len</td>
<td style="text-align: left;">Минимальная длина пароля не может быть больше максимальной длины, default_profile.password_max_len</td>
<td style="text-align: left;">Ошибка возникает при создании профиля для групп пользователей «securityprofile», если ошибочно были указаны противоречивые параметры, где минимальная длина пароля более максимальной длины</td>
</tr>
<tr>
<td><ol start="23" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Password maximum length can not be lesser than minimum length, default_profile.password_min_len</td>
<td style="text-align: left;">Максимальная длина пароля не может быть меньше минимальной длины, default_profile.password_min_len</td>
<td style="text-align: left;">Ошибка возникает при создании профиля для групп пользователей «securityprofile», если ошибочно были указаны противоречивые параметры, где максимальная длина пароля менее минимальной длины</td>
</tr>
<tr>
<td><ol start="24" type="1">
<li></li>
</ol></td>
<td style="text-align: left;"><p>Default profile already exist.</p>
<p>Specified name used by default profile</p></td>
<td style="text-align: left;">Профиль по умолчанию уже существует. Указанное имя используется профиль по умолчанию</td>
<td style="text-align: left;">Ошибка возникает при создании одноименного профиля существующему профилю securityprofile (default)</td>
</tr>
<tr>
<td><ol start="25" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Profile already exist</td>
<td style="text-align: left;">Профиль (имя профиля) уже существует</td>
<td style="text-align: left;">Ошибка может возникать при указании имени нового профиля, совпадающего с уже существующим профилем securityprofile</td>
</tr>
<tr>
<td><ol start="26" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Default profile can not be removed</td>
<td style="text-align: left;">Профиль по умолчанию не может быть удален</td>
<td style="text-align: left;">Поскольку securityprofile (default) является базовым профилем, то его нельзя удалить</td>
</tr>
<tr>
<td><ol start="27" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Profile have binded users</td>
<td style="text-align: left;">Профиль (имя профиля) имеет привязанных пользователей</td>
<td style="text-align: left;"><p>Сообщение появляется при попытке удалить профайл с привязанными к нему пользователями. Для исправления ошибки необходимо перепривязать пользователей, выполнив команду select (имя схемы) bind_profile ('имя_профиля', 'имя_пользователя').</p>
<p>Команды управления профилями приведены в таблице Таблица 6.11</p></td>
</tr>
<tr>
<td><ol start="28" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Default profile can not be changed with function call</td>
<td style="text-align: left;">Профиль по умолчанию не может быть изменен с помощью вызова функции</td>
<td style="text-align: left;">Профиль по умолчанию не может быть изменен стандартными функциями. Изменения допустимы через редактирование конфигурационного файла postgresql.conf</td>
</tr>
<tr>
<td><ol start="29" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Profile name already in use, new_profile_name</td>
<td style="text-align: left;">Имя профиля (имя профиля) уже используется</td>
<td style="text-align: left;">Используйте другое имя создаваемого профиля</td>
</tr>
<tr>
<td><ol start="30" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Password minimum length can not be larger than maximum length, profile-&gt;password_max_len</td>
<td style="text-align: left;">Минимальная длина пароля не может быть больше максимальной длины, profile - &gt;password_max_len)</td>
<td style="text-align: left;">Сообщение об ошибке возникает при формировании профиля для групп пользователей, при установлении длины пароля. Следует присвоить минимальной длине пароля (password_min_len) значение, которое не будет превышать ранее заданную максимальную длину пароля (password_max_len)</td>
</tr>
<tr>
<td><ol start="31" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Password maximum length can not be lesser than minimum length, profile-&gt;password_min_len</td>
<td style="text-align: left;">Максимальная длина пароля не может быть меньше минимальной длины, profile - &gt;password_min_len</td>
<td style="text-align: left;"><p>Сообщение об ошибке возникает при формировании профиля для групп пользователей, при установлении максимальной длины пароля.</p>
<p>Следует присвоить максимальное значение длины пароля (password_max_len), превышающее ранее заданное значение минимальной длины пароля (password_min_len)</p></td>
</tr>
<tr>
<td><ol start="32" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Shared buffer hash table corrupted(profiles)</td>
<td style="text-align: left;">Общая буферная хэш-таблица повреждена (<em>имя профиля</em>)</td>
<td rowspan="3" style="text-align: left;"><p>Ошибки связаны с системным сбоем. Для их устранения рекомендуется:</p>
<ul>
<li></li>
<li></li>
<li></li>
</ul></td>
</tr>
<tr>
<td><ol start="33" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">провести тестирование оперативной памяти;перезагрузить СУБД;восстановить БД из резервной копииPassword encryption failed</td>
<td style="text-align: left;">Ошибка шифрования пароля</td>
</tr>
<tr>
<td><ol start="34" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Cache entry does not exist</td>
<td style="text-align: left;">Запись в кэше не существует</td>
</tr>
<tr>
<td><ol start="35" type="1">
<li></li>
</ol></td>
<td style="text-align: left;">Cache synchronization failed for background worker of securityprofile. Extension not installed</td>
<td style="text-align: left;">Фоновый процесс не может выполнить синхронизацию, расширение не установлено</td>
<td style="text-align: left;">Указать в файле PostgreSQL.conf параметр securityprofile.db_name = 'dbname' и/или установить расширение securityprofile в БД dbname</td>
</tr>
</tbody>
</table>

### Ошибка авторизации

Ошибка авторизации в psql после установки СУБД «Jatoba» с настройками СУБД: «Язык и регион: English_USA» и «Кодировка: WIN1252» на английскую версию ОС Windows Server с выбранными при установке параметрами: «Time and currency format: Russian (Russia)» и «Keyboard or input method: Russian».

1)  
2)  

> Запустить cmd.exe.Выполнить:psql -U postgres;

<img src="./docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image85.png" style="width:6.69935in;height:1.48958in" alt="https://tfs.gaz-is.ru/jatoba/981020a7-f838-41e3-ae9d-f0e47d9ec553/_apis/wit/attachments/36da2a72-c12f-4f88-9cd7-bb2b197f7e04?filename=pic1.png" />

Рисунок . – Окно командной строки с ошибкой

3)  Решение проблемы:

- перейти в панель управления (control panel);
- затем перейти в «Clock, Language, and Region/Language»;
- нажать «Advanced settings»;
- в секции «Override for Windows display language» выбрать «English (United Stated)»;
- нажать «Save»;снова запустить cmd.exe;
- ввести: chcp 1251;
- повторить вход в psql.

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image86.png)

Рисунок . – Окно командной строки без ошибок

### Компонент «ja_seceventlog». Ошибка загрузки библиотеки

Сообщение об ошибке загрузки библиотеки

> ja_seceventlog must be loaded via shared_preload_libraries

возникает, при применении установленных параметров в конфигурационных файлах SQL-командой:

```
SELECT pg_reload_conf ();
```

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image87.png)

Рисунок . – Ошибка загрузки библиотеки

Для устранения возникшей ошибки, следует перезагрузить СУБД:

- в ОС Windows:

```
net stop JatobaServer
net start JatobaServer
```
>

- в GNU Linux:

```
systemctl restart jatoba-<ver>
```

### Контактные данные службы технической поддержки

При невозможности самостоятельно решить возникшие трудности с СУБД «Jatoba» следует обратиться в службу технической поддержки ООО «Газинформсервис».

| Телефон  | 8 (800) 700-09-87                                       |
|----------|---------------------------------------------------------|
| Веб-сайт | <https://www.gaz-is.ru/poddergka/zajavka.html#produkty> |
| E-mail   | <support@gaz-is.ru>                                     |

Таблица . – Контактные данные службы технической поддержки

#### Версия изделия

Для скорейшего решения вопроса, рекомендуется сообщить в службу технической поддержки точную версию установленного экземпляра изделия.

Версию изделия можно узнать, выполнив команду:

```
SELECT jatoba_version();
```

![](@site/docs/assets/images/cert6.8.4,5.12.4,4.17.4/admin/media/image88.png)

Рисунок . – Команда запроса версии изделия

## Значение полей из файла pg_hba.conf

Значение поля «TYPE» представлены в таблице П.П.1.1.1.

Таблица П.1.. – Значение поля «TYPE»

<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Значение поля</strong></th>
<th style="text-align: center;"><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>local</td>
<td><p>Сопоставляет попытки подключения с использованием Unix-сокетов. Без данной записи все соединения через Unix-сокеты будут запрещены.</p>
<p>Данное поле не работает в ОС Windows Server</p></td>
</tr>
<tr>
<td>host<sup>1)</sup></td>
<td><p>Соответствует попыткам подключения, выполненным с использованием TCP/IP.</p>
<p>Записи хоста соответствуют попыткам подключения SSL или без SSL</p></td>
</tr>
<tr>
<td>hostssl</td>
<td>Соответствует попыткам подключения, выполненным с использованием TCP/IP и шифрованием SSL</td>
</tr>
<tr>
<td>hostnossl</td>
<td>Соответствует попыткам подключения, выполненным с использованием TCP/IP (без шифрования ssl)</td>
</tr>
<tr>
<td colspan="2"><sup>1)</sup> Удаленное соединение TCP/IP будут невозможны, если сервер не запущен с подходящим значением для параметра конфигурации listen_addresses, поскольку по умолчанию выполняется прослушивание соединений TCP/IP только на локальном кольцевом адресе localhost</td>
</tr>
</tbody>
</table>

Поле «DATABASE» указывает, какие имена баз данных соответствует данной строчки. Значение поля «DATABASE» представлены в таблице П.П.1.1.2.

Таблица П.1.. – Значение поля «DATABASE»

| **Значение поля** | **Описание** |
|----|----|
| all | Указывает, что данная строчка относится ко всем базам данных |
| sameuser | Указывает, что данная строчка соответствует тому, что запрашиваемая база имеет то же имя, что и запрашиваемый пользователь |
| samerole | Указывает, что данная строчка соответствует тому, что запрашиваемый пользователь должен быть членом роли с тем же именем, что и запрошенная база данных. Суперпользователи не считаются членами роли для целей samerole, если они не являются явными членами роли, прямо или косвенно |
| replication | Значение replication указывает, что запрашивается подключение репликации (в этом случае конкретная база данных не указывается) |

Поле «USER» указывает, что данная строчка соответствует конкретному имени пользователя. Значение all указывает, что оно соответствует всем пользователям. Можно указать несколько имен пользователей, разделяя их запятыми.

Поле «ADDRESS» указывает, что данная строчка соответствует адресу клиентской машины. Данное поле может содержать имя хоста или диапазон IP-адресов, или одно из нижеупомянутых ключевых слов. Диапазон IP-адресов указывается с использованием стандартных числовых обозначений для начального адреса диапазона, затем косой черты (/) и длины маски CIDR. Длина маски указывает количество старших битов IP-адреса клиента, которые должны совпадать. Биты справа от этого должны быть равны нулю в данном IP-адресе. Между IP-адресом, / и длиной маски CIDR не должно быть пробелов. Запись в формате IPv4 будет соответствовать только соединениям IPv4, а запись в формате IPv6 будет соответствовать только соединениям IPv6, даже если представленный адрес находится в диапазоне IPv4-in-IPv6.

Поле «IP-адрес IP-маска» используется в качестве альтернативы IP-адрес / длина маски. Вместо указания длины маски фактическая маска указывается в отдельном столбце. Например, 255.0.0.0 представляет длину маски CIDR IPv4 8, а 255.255.255.255 представляет длину маски CIDR 32.

Поле «METHOD» определяет, что данная строчка будет осуществлять соединение по этому методу аутентификации. Значение поля «METHOD» представлены в таблице П.1.3.

Таблица П.1.. – Значение поля «METHOD»

| **Значение поля** | **Описание** |
|----|----|
| md5 | Аутентификация осуществляется по паролю. По каналу связи передается пароль в виде хеша MD5. |
| password | Аутентификация осуществляется по паролю. Пароль передается в открытом виде. |

## 

<span id="_Toc215499038" class="anchor"></span>**Перечень событий СУБД с распределением по категориям безопасности**

Таблица П.2.1 – Перечень событий СУБД с распределением по категориям безопасности

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 12%" />
<col style="width: 63%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><p><strong>Категория события/</strong></p>
<p><strong>Класс события</strong></p></th>
<th style="text-align: center;"><strong>Код события</strong></th>
<th style="text-align: center;"><strong>Название условия</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 00 - Successful Completion</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">00000</td>
<td style="text-align: left;">ERRCODE SUCCESSFUL COMPLETION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 01 - Warning</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">01000</td>
<td style="text-align: left;">ERRCODE WARNING</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">0100C</td>
<td style="text-align: left;">ERRCODE WARNING DYNAMIC RESULT SETS RETURNED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">01008</td>
<td style="text-align: left;">ERRCODE WARNING IMPLICIT ZERO BIT PADDING</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">01003</td>
<td style="text-align: left;">ERRCODE WARNING NULL VALUE ELIMINATED IN SET FUNCTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">01007</td>
<td style="text-align: left;">ERRCODE WARNING PRIVILEGE NOT GRANTED</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">01006</td>
<td style="text-align: left;">ERRCODE WARNING PRIVILEGE NOT REVOKED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">01004</td>
<td style="text-align: left;">ERRCODE WARNING STRING DATA RIGHT TRUNCATION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">01P01</td>
<td style="text-align: left;">ERRCODE WARNING DEPRECATED FEATURE</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 02 - No Data</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">02000</td>
<td style="text-align: left;">ERRCODE NO DATA</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">02001</td>
<td style="text-align: left;">ERRCODE NO ADDITIONAL DYNAMIC RESULT SETS RETURNED</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 03 - SQL Statement Not Yet Complete</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">03000</td>
<td style="text-align: left;">ERRCODE SQL STATEMENT NOT YET COMPLETE</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 08 - Connection Exception</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">08000</td>
<td style="text-align: left;">ERRCODE CONNECTION EXCEPTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">08003</td>
<td style="text-align: left;">ERRCODE CONNECTION DOES NOT EXIST</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">08006</td>
<td style="text-align: left;">ERRCODE CONNECTION FAILURE</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">08001</td>
<td style="text-align: left;">ERRCODE SQLCLIENT UNABLE TO ESTABLISH SQLCONNECTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">08004</td>
<td style="text-align: left;">ERRCODE SQLSERVER REJECTED ESTABLISHMENT OF SQLCONNECTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">08007</td>
<td style="text-align: left;">ERRCODE TRANSACTION RESOLUTION UNKNOWN</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">08P01</td>
<td style="text-align: left;">ERRCODE PROTOCOL VIOLATION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 09 - Triggered Action Exception</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">09000</td>
<td style="text-align: left;">ERRCODE TRIGGERED ACTION EXCEPTION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 0A - Feature Not Supported</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">0A000</td>
<td style="text-align: left;">ERRCODE FEATURE NOT SUPPORTED</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 0B - Invalid Transaction Initiation</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">0B000</td>
<td style="text-align: left;">ERRCODE INVALID TRANSACTION INITIATION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 0F - Locator Exception</strong></td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">0F000</td>
<td style="text-align: left;">ERRCODE LOCATOR EXCEPTION</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">0F001</td>
<td style="text-align: left;">ERRCODE L E INVALID SPECIFICATION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 0L - Invalid Grantor</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">0L000</td>
<td style="text-align: left;">ERRCODE INVALID GRANTOR</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">0LP01</td>
<td style="text-align: left;">ERRCODE INVALID GRANT OPERATION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 0P - Invalid Role Specification</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">0P000</td>
<td style="text-align: left;">ERRCODE INVALID ROLE SPECIFICATION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 0Z - Diagnostics Exception</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">0Z000</td>
<td style="text-align: left;">ERRCODE DIAGNOSTICS EXCEPTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">0Z002</td>
<td style="text-align: left;">ERRCODE STACKED DIAGNOSTICS ACCESSED WITHOUT ACTIVE HANDLER</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 20 - Case Not Found</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">20000</td>
<td style="text-align: left;">ERRCODE CASE NOT FOUND</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 21 - Cardinality Violation</strong></td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">21000</td>
<td style="text-align: left;">ERRCODE CARDINALITY VIOLATION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 22 - Data Exception</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22000</td>
<td style="text-align: left;">ERRCODE DATA EXCEPTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2202E</td>
<td style="text-align: left;">ERRCODE ARRAY SUBSCRIPT ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22021</td>
<td style="text-align: left;">ERRCODE CHARACTER NOT IN REPERTOIRE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22008</td>
<td style="text-align: left;">ERRCODE DATETIME FIELD OVERFLOW</td>
</tr>
<tr>
<td style="text-align: left;">Контроль целостности</td>
<td style="text-align: left;">22008</td>
<td style="text-align: left;">ERRCODE DATETIME VALUE OUT OF RANGE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2202</td>
<td style="text-align: left;">ERRCODE ARRAY ELEMENT ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22012</td>
<td style="text-align: left;">ERRCODE DIVISION BY ZERO</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22005</td>
<td style="text-align: left;">ERRCODE ERROR IN ASSIGNMENT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2200B</td>
<td style="text-align: left;">ERRCODE ESCAPE CHARACTER CONFLICT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22022</td>
<td style="text-align: left;">ERRCODE INDICATOR OVERFLOW</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22015</td>
<td style="text-align: left;">ERRCODE INTERVAL FIELD OVERFLOW</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2201E</td>
<td style="text-align: left;">ERRCODE INVALID ARGUMENT FOR LOG</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22013</td>
<td style="text-align: left;">ERRCODE INVALID PRECEDING OR FOLLOWING SIZE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22014</td>
<td style="text-align: left;">ERRCODE INVALID ARGUMENT FOR NTILE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22016</td>
<td style="text-align: left;">ERRCODE INVALID ARGUMENT FOR NTH VALUE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2201F</td>
<td style="text-align: left;">ERRCODE INVALID ARGUMENT FOR POWER FUNCTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2201G</td>
<td style="text-align: left;">ERRCODE INVALID ARGUMENT FOR WIDTH BUCKET FUNCTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22018</td>
<td style="text-align: left;">ERRCODE INVALID CHARACTER VALUE FOR CAST</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22007</td>
<td style="text-align: left;">ERRCODE INVALID DATETIME FORMAT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22019</td>
<td style="text-align: left;">ERRCODE INVALID ESCAPE CHARACTER</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2200D</td>
<td style="text-align: left;">ERRCODE INVALID ESCAPE OCTET</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22025</td>
<td style="text-align: left;">ERRCODE INVALID ESCAPE SEQUENCE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22P06</td>
<td style="text-align: left;">ERRCODE NONSTANDARD USE OF ESCAPE CHARACTER</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22010</td>
<td style="text-align: left;">ERRCODE INVALID INDICATOR PARAMETER VALUE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22023</td>
<td style="text-align: left;">ERRCODE INVALID PARAMETER VALUE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2201B</td>
<td style="text-align: left;">ERRCODE INVALID REGULAR EXPRESSION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2201W</td>
<td style="text-align: left;">ERRCODE INVALID ROW COUNT IN LIMIT CLAUSE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2201X</td>
<td style="text-align: left;">ERRCODE INVALID ROW COUNT IN RESULT OFFSET CLAUSE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2202H</td>
<td style="text-align: left;">ERRCODE INVALID TABLESAMPLE ARGUMENT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2202G</td>
<td style="text-align: left;">ERRCODE INVALID TABLESAMPLE REPEAT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22009</td>
<td style="text-align: left;">ERRCODE INVALID TIME ZONE DISPLACEMENT VALUE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2200C</td>
<td style="text-align: left;">ERRCODE INVALID USE OF ESCAPE CHARACTER</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2200G</td>
<td style="text-align: left;">ERRCODE MOST SPECIFIC TYPE MISMATCH</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22004</td>
<td style="text-align: left;">ERRCODE NULL VALUE NOT ALLOWED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22002</td>
<td style="text-align: left;">ERRCODE NULL VALUE NO INDICATOR PARAMETER</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22003</td>
<td style="text-align: left;">ERRCODE NUMERIC VALUE OUT OF RANGE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22026</td>
<td style="text-align: left;">ERRCODE STRING DATA LENGTH MISMATCH</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22001</td>
<td style="text-align: left;">ERRCODE STRING DATA RIGHT TRUNCATION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22011</td>
<td style="text-align: left;">ERRCODE SUBSTRING ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22027</td>
<td style="text-align: left;">ERRCODE TRIM ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22024</td>
<td style="text-align: left;">ERRCODE UNTERMINATED C STRING</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2200F</td>
<td style="text-align: left;">ERRCODE ZERO LENGTH CHARACTER STRING</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22P01</td>
<td style="text-align: left;">ERRCODE FLOATING POINT EXCEPTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22P02</td>
<td style="text-align: left;">ERRCODE INVALID TEXT REPRESENTATION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22P03</td>
<td style="text-align: left;">ERRCODE INVALID BINARY REPRESENTATION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22P04</td>
<td style="text-align: left;">ERRCODE BAD COPY FILE FORMAT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22P05</td>
<td style="text-align: left;">ERRCODE UNTRANSLATABLE CHARACTER</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2200L</td>
<td style="text-align: left;">ERRCODE NOT AN XML DOCUMENT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2200M</td>
<td style="text-align: left;">ERRCODE INVALID XML DOCUMENT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2200N</td>
<td style="text-align: left;">ERRCODE INVALID XML CONTENT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2200S</td>
<td style="text-align: left;">ERRCODE INVALID XML COMMENT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2200T</td>
<td style="text-align: left;">ERRCODE INVALID XML PROCESSING INSTRUCTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2200H</td>
<td style="text-align: left;">ERRCODE SEQUENCE GENERATOR LIMIT EXCEEDED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22030</td>
<td style="text-align: left;">ERRCODE DUPLICATE JSON OBJECT KEY VALUE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22031</td>
<td style="text-align: left;">ERRCODE INVALID ARGUMENT FOR SQL JSON DATETIME FUNCTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22032</td>
<td style="text-align: left;">ERRCODE INVALID JSON TEXT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22033</td>
<td style="text-align: left;">ERRCODE INVALID SQL JSON SUBSCRIPT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22034</td>
<td style="text-align: left;">ERRCODE MORE THAN ONE SQL JSON ITEM</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22035</td>
<td style="text-align: left;">ERRCODE NO SQL JSON ITEM</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22036</td>
<td style="text-align: left;">ERRCODE NON NUMERIC SQL JSON ITEM</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22037</td>
<td style="text-align: left;">ERRCODE NON UNIQUE KEYS IN A JSON OBJECT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22038</td>
<td style="text-align: left;">ERRCODE SINGLETON SQL JSON ITEM REQUIRED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">22039</td>
<td style="text-align: left;">ERRCODE SQL JSON ARRAY NOT FOUND</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2203A</td>
<td style="text-align: left;">ERRCODE SQL JSON MEMBER NOT FOUND</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2203B</td>
<td style="text-align: left;">ERRCODE SQL JSON NUMBER NOT FOUND</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2203C</td>
<td style="text-align: left;">ERRCODE SQL JSON OBJECT NOT FOUND</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2203D</td>
<td style="text-align: left;">ERRCODE TOO MANY JSON ARRAY ELEMENTS</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2203E</td>
<td style="text-align: left;">ERRCODE TOO MANY JSON OBJECT MEMBERS</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2203F</td>
<td style="text-align: left;">ERRCODE SQL JSON SCALAR REQUIRED</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 23 - Integrity Constraint Violation</strong></td>
</tr>
<tr>
<td style="text-align: left;">Контроль целостности</td>
<td style="text-align: left;">23000</td>
<td style="text-align: left;">ERRCODE INTEGRITY CONSTRAINT VIOLATION</td>
</tr>
<tr>
<td style="text-align: left;">Контроль целостности</td>
<td style="text-align: left;">23001</td>
<td style="text-align: left;">ERRCODE RESTRICT VIOLATION</td>
</tr>
<tr>
<td style="text-align: left;">Контроль целостности</td>
<td style="text-align: left;">23502</td>
<td style="text-align: left;">ERRCODE NOT NULL VIOLATION</td>
</tr>
<tr>
<td style="text-align: left;">Контроль целостности</td>
<td style="text-align: left;">23503</td>
<td style="text-align: left;">ERRCODE FOREIGN KEY VIOLATION</td>
</tr>
<tr>
<td style="text-align: left;">Контроль целостности</td>
<td style="text-align: left;">23505</td>
<td style="text-align: left;">ERRCODE UNIQUE VIOLATION</td>
</tr>
<tr>
<td style="text-align: left;">Контроль целостности</td>
<td style="text-align: left;">23514</td>
<td style="text-align: left;">ERRCODE CHECK VIOLATION</td>
</tr>
<tr>
<td style="text-align: left;">Контроль целостности</td>
<td style="text-align: left;">23P01</td>
<td style="text-align: left;">ERRCODE EXCLUSION VIOLATION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 24 - Invalid Cursor State</strong></td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">24000</td>
<td style="text-align: left;">ERRCODE INVALID CURSOR STATE</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 25 - Invalid Transaction State</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25000</td>
<td style="text-align: left;">ERRCODE INVALID TRANSACTION STATE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25001</td>
<td style="text-align: left;">ERRCODE ACTIVE SQL TRANSACTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25002</td>
<td style="text-align: left;">ERRCODE BRANCH TRANSACTION ALREADY ACTIVE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25008</td>
<td style="text-align: left;">ERRCODE HELD CURSOR REQUIRES SAME ISOLATION LEVEL</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25003</td>
<td style="text-align: left;">ERRCODE INAPPROPRIATE ACCESS MODE FOR BRANCH TRANSACTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25004</td>
<td style="text-align: left;">ERRCODE INAPPROPRIATE ISOLATION LEVEL FOR BRANCH TRANSACTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25005</td>
<td style="text-align: left;">ERRCODE NO ACTIVE SQL TRANSACTION FOR BRANCH TRANSACTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25006</td>
<td style="text-align: left;">ERRCODE READ ONLY SQL TRANSACTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25007</td>
<td style="text-align: left;">ERRCODE SCHEMA AND DATA STATEMENT MIXING NOT SUPPORTED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25P01</td>
<td style="text-align: left;">ERRCODE NO ACTIVE SQL TRANSACTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25P02</td>
<td style="text-align: left;">ERRCODE IN FAILED SQL TRANSACTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">25P03</td>
<td style="text-align: left;">ERRCODE IDLE IN TRANSACTION SESSION TIMEOUT</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 26 - Invalid SQL Statement Name</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">26000</td>
<td style="text-align: left;">ERRCODE INVALID SQL STATEMENT NAME</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 27 - Triggered Data Change Violation</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">27000</td>
<td style="text-align: left;">ERRCODE TRIGGERED DATA CHANGE VIOLATION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 28 - Invalid Authorization Specification</strong></td>
</tr>
<tr>
<td style="text-align: left;">Идентификация</td>
<td style="text-align: left;">28000</td>
<td style="text-align: left;">ERRCODE INVALID AUTHORIZATION SPECIFICATION</td>
</tr>
<tr>
<td style="text-align: left;">Идентификация</td>
<td style="text-align: left;">28P01</td>
<td style="text-align: left;">ERRCODE INVALID PASSWORD</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 2B - Dependent Privilege Descriptors Still Exist</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">2B000</td>
<td style="text-align: left;">ERRCODE DEPENDENT PRIVILEGE DESCRIPTORS STILL EXIST</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">2BP01</td>
<td style="text-align: left;">ERRCODE DEPENDENT OBJECTS STILL EXIST</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 2D - Invalid Transaction Termination</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">2D000</td>
<td style="text-align: left;">ERRCODE INVALID TRANSACTION TERMINATION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 2F - SQL Routine Exception</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">2F000</td>
<td style="text-align: left;">ERRCODE SQL ROUTINE EXCEPTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">2F005</td>
<td style="text-align: left;">ERRCODE S R E FUNCTION EXECUTED NO RETURN STATEMENT</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">2F002</td>
<td style="text-align: left;">ERRCODE S R E MODIFYING SQL DATA NOT PERMITTED</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">2F003</td>
<td style="text-align: left;">ERRCODE S R E PROHIBITED SQL STATEMENT ATTEMPTED</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">2F004</td>
<td style="text-align: left;">ERRCODE S R E READING SQL DATA NOT PERMITTED</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 34 - Invalid Cursor Name</strong></td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">34000</td>
<td style="text-align: left;">ERRCODE INVALID CURSOR NAME</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 38 - External Routine Exception</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">38000</td>
<td style="text-align: left;">ERRCODE EXTERNAL ROUTINE EXCEPTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">38001</td>
<td style="text-align: left;">ERRCODE E R E CONTAINING SQL NOT PERMITTED</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">38002</td>
<td style="text-align: left;">ERRCODE E R E MODIFYING SQL DATA NOT PERMITTED</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">38003</td>
<td style="text-align: left;">ERRCODE E R E PROHIBITED SQL STATEMENT ATTEMPTED</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">38004</td>
<td style="text-align: left;">ERRCODE E R E READING SQL DATA NOT PERMITTED</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 39 - External Routine Invocation Exception</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">39000</td>
<td style="text-align: left;">ERRCODE EXTERNAL ROUTINE INVOCATION EXCEPTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">39001</td>
<td style="text-align: left;">ERRCODE E R I E INVALID SQLSTATE RETURNED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">39004</td>
<td style="text-align: left;">ERRCODE E R I E NULL VALUE NOT ALLOWED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">39P01</td>
<td style="text-align: left;">ERRCODE E R I E TRIGGER PROTOCOL VIOLATED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">39P02</td>
<td style="text-align: left;">ERRCODE E R I E SRF PROTOCOL VIOLATED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">39P03</td>
<td style="text-align: left;">ERRCODE E R I E EVENT TRIGGER PROTOCOL VIOLATED</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 3B - Savepoint Exception</strong></td>
</tr>
<tr>
<td style="text-align: left;">Резервное копирование</td>
<td style="text-align: left;">3B000</td>
<td style="text-align: left;">ERRCODE SAVEPOINT EXCEPTION</td>
</tr>
<tr>
<td style="text-align: left;">Резервное копирование</td>
<td style="text-align: left;">3B001</td>
<td style="text-align: left;">ERRCODE S E INVALID SPECIFICATION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 3D - Invalid Catalog Name</strong></td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">3D000</td>
<td style="text-align: left;">ERRCODE INVALID CATALOG NAME</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 3F - Invalid Schema Name</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">3F000</td>
<td style="text-align: left;">ERRCODE INVALID SCHEMA NAME</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 40 - Transaction Rollback</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">40000</td>
<td style="text-align: left;">ERRCODE TRANSACTION ROLLBACK</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">40002</td>
<td style="text-align: left;">ERRCODE T R INTEGRITY CONSTRAINT VIOLATION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">40001</td>
<td style="text-align: left;">ERRCODE T R SERIALIZATION FAILURE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">40003</td>
<td style="text-align: left;">ERRCODE T R STATEMENT COMPLETION UNKNOWN</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">40P01</td>
<td style="text-align: left;">ERRCODE T R DEADLOCK DETECTED</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 42 - Syntax Error or Access Rule Violation</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">42000</td>
<td style="text-align: left;">ERRCODE SYNTAX ERROR OR ACCESS RULE VIOLATION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42601</td>
<td style="text-align: left;">ERRCODE SYNTAX ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">42501</td>
<td style="text-align: left;">ERRCODE INSUFFICIENT PRIVILEGE</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">42846</td>
<td style="text-align: left;">ERRCODE CANNOT COERCE</td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">42803</td>
<td style="text-align: left;">ERRCODE GROUPING ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P20</td>
<td style="text-align: left;">ERRCODE WINDOWING ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P19</td>
<td style="text-align: left;">ERRCODE INVALID RECURSION</td>
</tr>
<tr>
<td style="text-align: left;">Идентификация</td>
<td style="text-align: left;">42830</td>
<td style="text-align: left;">ERRCODE INVALID FOREIGN KEY</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42602</td>
<td style="text-align: left;">ERRCODE INVALID NAME</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42622</td>
<td style="text-align: left;">ERRCODE NAME TOO LONG</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42939</td>
<td style="text-align: left;">ERRCODE RESERVED NAME</td>
</tr>
<tr>
<td style="text-align: left;">Контроль целостности данных</td>
<td style="text-align: left;">42804</td>
<td style="text-align: left;">ERRCODE DATATYPE MISMATCH</td>
</tr>
<tr>
<td style="text-align: left;">Контроль целостности данных</td>
<td style="text-align: left;">42P18</td>
<td style="text-align: left;">ERRCODE INDETERMINATE DATATYPE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P21</td>
<td style="text-align: left;">ERRCODE COLLATION MISMATCH</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P22</td>
<td style="text-align: left;">ERRCODE INDETERMINATE COLLATION</td>
</tr>
<tr>
<td style="text-align: left;">Контроль целостности данных</td>
<td style="text-align: left;">42809</td>
<td style="text-align: left;">ERRCODE WRONG OBJECT TYPE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">428C9</td>
<td style="text-align: left;">ERRCODE GENERATED ALWAYS</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42703</td>
<td style="text-align: left;">ERRCODE UNDEFINED COLUMN</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42883</td>
<td style="text-align: left;">ERRCODE UNDEFINED FUNCTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P01</td>
<td style="text-align: left;">ERRCODE UNDEFINED TABLE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P02</td>
<td style="text-align: left;">ERRCODE UNDEFINED PARAMETER</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42704</td>
<td style="text-align: left;">ERRCODE UNDEFINED OBJECT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42701</td>
<td style="text-align: left;">ERRCODE DUPLICATE COLUMN</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P03</td>
<td style="text-align: left;">ERRCODE DUPLICATE CURSOR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P04</td>
<td style="text-align: left;">ERRCODE DUPLICATE DATABASE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42723</td>
<td style="text-align: left;">ERRCODE DUPLICATE FUNCTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P05</td>
<td style="text-align: left;">ERRCODE DUPLICATE PSTATEMENT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P06</td>
<td style="text-align: left;">ERRCODE DUPLICATE SCHEMA</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P07</td>
<td style="text-align: left;">ERRCODE DUPLICATE TABLE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42712</td>
<td style="text-align: left;">ERRCODE DUPLICATE ALIAS</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42710</td>
<td style="text-align: left;">ERRCODE DUPLICATE OBJECT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42702</td>
<td style="text-align: left;">ERRCODE AMBIGUOUS COLUMN</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42725</td>
<td style="text-align: left;">ERRCODE AMBIGUOUS FUNCTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P08</td>
<td style="text-align: left;">ERRCODE AMBIGUOUS PARAMETER</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P09</td>
<td style="text-align: left;">ERRCODE AMBIGUOUS ALIAS</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P10</td>
<td style="text-align: left;">ERRCODE INVALID COLUMN REFERENCE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42611</td>
<td style="text-align: left;">ERRCODE INVALID COLUMN DEFINITION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P11</td>
<td style="text-align: left;">ERRCODE INVALID CURSOR DEFINITION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P12</td>
<td style="text-align: left;">ERRCODE INVALID DATABASE DEFINITION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P13</td>
<td style="text-align: left;">ERRCODE INVALID FUNCTION DEFINITION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P14</td>
<td style="text-align: left;">ERRCODE INVALID PSTATEMENT DEFINITION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P15</td>
<td style="text-align: left;">ERRCODE INVALID SCHEMA DEFINITION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P16</td>
<td style="text-align: left;">ERRCODE INVALID TABLE DEFINITION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">42P17</td>
<td style="text-align: left;">ERRCODE INVALID OBJECT DEFINITION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 44 - WITH CHECK OPTION Violation</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление доступом</td>
<td style="text-align: left;">44000</td>
<td style="text-align: left;">ERRCODE WITH CHECK OPTION VIOLATION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 53 - Insufficient Resources</strong></td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">53000</td>
<td style="text-align: left;">ERRCODE INSUFFICIENT RESOURCES</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">53100</td>
<td style="text-align: left;">ERRCODE DISK FULL</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">53200</td>
<td style="text-align: left;">ERRCODE OUT OF MEMORY</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">53300</td>
<td style="text-align: left;">ERRCODE TOO MANY CONNECTIONS</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">53400</td>
<td style="text-align: left;">ERRCODE CONFIGURATION LIMIT EXCEEDED</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 54 - Program Limit Exceeded</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">54000</td>
<td style="text-align: left;">ERRCODE PROGRAM LIMIT EXCEEDED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">54001</td>
<td style="text-align: left;">ERRCODE STATEMENT TOO COMPLEX</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">54011</td>
<td style="text-align: left;">ERRCODE TOO MANY COLUMNS</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">54023</td>
<td style="text-align: left;">ERRCODE TOO MANY ARGUMENTS</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 55 - Object Not In Prerequisite State</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">55000</td>
<td style="text-align: left;">ERRCODE OBJECT NOT IN PREREQUISITE STATE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">55006</td>
<td style="text-align: left;">ERRCODE OBJECT IN USE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">55P02</td>
<td style="text-align: left;">ERRCODE CANT CHANGE RUNTIME PARAM</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">55P03</td>
<td style="text-align: left;">ERRCODE LOCK NOT AVAILABLE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">55P04</td>
<td style="text-align: left;">ERRCODE UNSAFE NEW ENUM VALUE USAGE</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 57 - Operator Intervention</strong></td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">57000</td>
<td style="text-align: left;">ERRCODE OPERATOR INTERVENTION</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">57014</td>
<td style="text-align: left;">ERRCODE QUERY CANCELED</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">57P01</td>
<td style="text-align: left;">ERRCODE ADMIN SHUTDOWN</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">57P02</td>
<td style="text-align: left;">ERRCODE CRASH SHUTDOWN</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">57P03</td>
<td style="text-align: left;">ERRCODE CANNOT CONNECT NOW</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">57P04</td>
<td style="text-align: left;">ERRCODE DATABASE DROPPED</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">57P05</td>
<td style="text-align: left;">ERRCODE IDLE SESSION TIMEOUT</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 58 - System Error</strong></td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">58000</td>
<td style="text-align: left;">ERRCODE SYSTEM ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">58030</td>
<td style="text-align: left;">ERRCODE IO ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">58P01</td>
<td style="text-align: left;">ERRCODE UNDEFINED FILE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">58P02</td>
<td style="text-align: left;">ERRCODE DUPLICATE FILE</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class 72 - Snapshot Failure</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">72000</td>
<td style="text-align: left;">ERRCODE SNAPSHOT TOO OLD</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class F0 - Configuration File Error</strong></td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">F0000</td>
<td style="text-align: left;">ERRCODE CONFIG FILE ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">F0001</td>
<td style="text-align: left;">ERRCODE LOCK FILE EXISTS</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class HV - Foreign Data Wrapper Error (SQL/MED)</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV000</td>
<td style="text-align: left;">ERRCODE FDW ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV005</td>
<td style="text-align: left;">ERRCODE FDW COLUMN NAME NOT FOUND</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV002</td>
<td style="text-align: left;">ERRCODE FDW DYNAMIC PARAMETER VALUE NEEDED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV010</td>
<td style="text-align: left;">ERRCODE FDW FUNCTION SEQUENCE ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV021</td>
<td style="text-align: left;">ERRCODE FDW INCONSISTENT DESCRIPTOR INFORMATION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV024</td>
<td style="text-align: left;">ERRCODE FDW INVALID ATTRIBUTE VALUE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV007</td>
<td style="text-align: left;">ERRCODE FDW INVALID COLUMN NAME</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV008</td>
<td style="text-align: left;">ERRCODE FDW INVALID COLUMN NUMBER</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV004</td>
<td style="text-align: left;">ERRCODE FDW INVALID DATA TYPE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV006</td>
<td style="text-align: left;">ERRCODE FDW INVALID DATA TYPE DESCRIPTORS</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV091</td>
<td style="text-align: left;">ERRCODE FDW INVALID DESCRIPTOR FIELD IDENTIFIER</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00B</td>
<td style="text-align: left;">ERRCODE FDW INVALID HANDLE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00C</td>
<td style="text-align: left;">ERRCODE FDW INVALID OPTION INDEX</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00D</td>
<td style="text-align: left;">ERRCODE FDW INVALID OPTION NAME</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV090</td>
<td style="text-align: left;">ERRCODE FDW INVALID STRING LENGTH OR BUFFER LENGTH</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00A</td>
<td style="text-align: left;">ERRCODE FDW INVALID STRING FORMAT</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV009</td>
<td style="text-align: left;">ERRCODE FDW INVALID USE OF NULL POINTER</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV014</td>
<td style="text-align: left;">ERRCODE FDW TOO MANY HANDLES</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV001</td>
<td style="text-align: left;">ERRCODE FDW OUT OF MEMORY</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00P</td>
<td style="text-align: left;">ERRCODE FDW NO SCHEMAS</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00J</td>
<td style="text-align: left;">ERRCODE FDW OPTION NAME NOT FOUND</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00K</td>
<td style="text-align: left;">ERRCODE FDW REPLY HANDLE</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00Q</td>
<td style="text-align: left;">ERRCODE FDW SCHEMA NOT FOUND</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00R</td>
<td style="text-align: left;">ERRCODE FDW TABLE NOT FOUND</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00L</td>
<td style="text-align: left;">ERRCODE FDW UNABLE TO CREATE EXECUTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00M</td>
<td style="text-align: left;">ERRCODE FDW UNABLE TO CREATE REPLY</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">HV00N</td>
<td style="text-align: left;">ERRCODE FDW UNABLE TO ESTABLISH CONNECTION</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class P0 - PL/pgSQL Error</strong></td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">P0000</td>
<td style="text-align: left;">ERRCODE PLPGSQL ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">P0001</td>
<td style="text-align: left;">ERRCODE RAISE EXCEPTION</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">P0002</td>
<td style="text-align: left;">ERRCODE NO DATA FOUND</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">P0003</td>
<td style="text-align: left;">ERRCODE TOO MANY ROWS</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">P0004</td>
<td style="text-align: left;">ERRCODE ASSERT FAILURE</td>
</tr>
<tr>
<td colspan="3" style="text-align: left;"><strong>Class XX - Internal Error</strong></td>
</tr>
<tr>
<td style="text-align: left;">Прочее</td>
<td style="text-align: left;">XX000</td>
<td style="text-align: left;">ERRCODE INTERNAL ERROR</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">XX001</td>
<td style="text-align: left;">ERRCODE DATA CORRUPTED</td>
</tr>
<tr>
<td style="text-align: left;">Управление данными</td>
<td style="text-align: left;">XX002</td>
<td style="text-align: left;">ERRCODE INDEX CORRUPTED</td>
</tr>
</tbody>
</table>

## 

<span id="_Toc215499039" class="anchor"></span>Термины и определения**SMTP** (Simple Mail Transfer Protocol) – протокол, используемый для передачи электронной почты.

**ZULIP** – веб-сервис для обмена сообщениями и организации обсуждений с использованием технологии real-time.

**Администратор СУБД** – субъект доступа, выполняющий административные функции в СУБД и наделенный правами:

- создавать учетные записи пользователей СУБД;
- модифицировать, блокировать и удалять учетные записи пользователей СУБД;
- назначать права доступа пользователям СУБД к объектам доступа СУБД;
- управлять конфигурацией СУБД;
- создавать, подключать БД.

Администратор СУБД имеет атрибут SUPERUSER и/или обладает системной учетной записью «postgres».

**Администратор БД** – субъект доступа, выполняющий административные функции в БД и наделенный правами:

- создавать учетные записи пользователей БД;
- модифицировать, блокировать и удалять учетные записи пользователей БД;
- управлять конфигурацией БД;
- назначать права доступа пользователям БД (пользователей информационной системы) к объектам доступа БД;
- создавать резервные копии БД и восстанавливать БД из резервной копии;
- создавать, модифицировать и удалять процедуры (программный код), хранимые в БД.

Администратор БД имеет атрибут CREATEROLE, и возможные атрибуты BYPASSRLS, REPLICATION, а также прочие системные привилегии относительно БД, кроме атрибута CREATEDB.

**Пользователь СУБД** – субъект доступа c назначенным атрибутом LOGIN, наделенный правами:

- создавать и манипулировать объектами доступа БД (таблица, запись или столбец, поле, представление и иные объекты доступа);
- выполнять процедуры (программный код), хранимые в БД.**Пользователь БД** – субъект доступа, имеющий доступ к ограниченному перечню БД и объектов БД. 

Имеющий следующий набор привилегий:

- создавать и манипулировать объектами доступа БД (таблица, запись или столбец, поле, представление и иные объекты доступа);
- выполнять процедуры (программный код), хранимые в БД.

Пользователь БД имеет обязательный атрибут LOGIN.

**Безусловная блокировка пользователя** – это ограничение пользователя в возможности устанавливать новую сессию с СУБД. Безусловная блокировка имеет приоритет над ограничениями, накладываемыми парольными политикам (блокировка вследствие истечения срока действия пароля, временные блокировки при исчерпании попыток ввода пароля и т.п.), применяется независимо от них и не зависит от применяемого метода аутентификации пользователей. Снятие безусловной блокировки не снимает блокировок по парольным политикам и наоборот.

**Завершение сессии пользователя** – принудительное завершение открытой сессии пользователя с БД/СУБД в заданном режиме.

**KNN (K-nearest neighbors)** – это алгоритм машинного обучения, используемый для решения задач классификации и регрессии. Алгоритм KNN основан на идее, что объекты, которые находятся рядом в пространстве признаков, вероятно, относятся к одной категории.

**Строчные буквы** – это маленькие буквы, которые используются в письме и не превышают размеры строки.

**Прописные буквы или заглавные** – это графические знаки большего размера, которые превышают границы строки.

**Лексема** — это нормализованный фрагмент текста, в котором разные словоформы приведены к одной. Лексемы используются для индексации и поиска документов.

## Перечень сокращений

|              |                                                                  |
|--------------|------------------------------------------------------------------|
| API          | Application programming interface                                |
| CIDR         | Classless Inter-Domain Routing                                   |
| CIS          | Center for Internet Security                                     |
| CSV          | Comma-Separated Values                                           |
| DDL          | Data Definition Language                                         |
| DML          | Data Manipulation Language                                       |
| DNS          | Domain Name System                                               |
| HDD          | Hard Disk Drive                                                  |
| HTTP         | HyperText Transfer Protocol                                      |
| HTTPS        | HyperText Transfer Protocol Secure                               |
| IEC          | International Electrotechnical Commission                        |
| IIS          | Internet Information Services                                    |
| IP           | Internet Protocol                                                |
| ISO          | International Organization for Standardization                   |
| LDAP         | Lightweight Directory Access Protocol                            |
| SQL          | Structured Query Language                                        |
| SSL          | Secure Sockets Layer                                             |
| SSPI         | Security Support Provider Interface                              |
| TCP          | Transmission Control Protocol                                    |
| АРМ          | Автоматизированное рабочее место                                 |
| БД           | База данных                                                      |
| ИАФ          | Идентификация и аутентификация                                   |
| ИС           | Информационная система                                           |
| ОДТ          | Обеспечение доступности информации                               |
| ОЗУ          | Оперативное запоминающее устройство                              |
| ООО          | Общество с ограниченной ответственностью                         |
| ОС           | Операционная система                                             |
| ОЦЛ          | Обеспечение целостности                                          |
| РСБ          | Регистрация событий безопасности                                 |
| СВТ          | Средство вычислительной техники                                  |
| СУБД         | Система управления базами данных                                 |
| ТП           | Табличное пространство                                           |
| УЗ           | Учетная запись                                                   |
| УПД          | Управление доступом                                              |
| ФБО          | Функция безопасности объекта оценки                              |
| ФСТЭК России | Федеральная служба по техническому и экспортному контролю России |
| ЭВМ          | Электронно-вычислительная машина                                 |


[^1]: <sup>)</sup> Местонахождение файла pg_hba.conf по умолчанию:

    ОС семейства GNU/Linux: /var/lib/jatoba/<ver>/data/pg_hba.conf;

    ОС Windows: C:\Program Files\GIS\Jatoba\\ver\>\data\pg_hba.conf.

[^2]: <sup>)</sup> Местонахождение файла postgresql.conf по умолчанию в:

    ОС семейства GNU/Linux: /var/lib/jatoba/<ver>/data/postgresql.conf;

    ОС Windows Server: C:\Program Files\GIS\Jatoba\\ver\>\data\postgresql.conf.

[^3]: <sup>)</sup> Местонахождение файла postgresql.conf по умолчанию в:

    ОС семейства GNU/Linux: /var/lib/jatoba/<ver>/data/postgresql.conf;

    ОС Windows Server: C:\Program Files\GIS\Jatoba\\ver\>\data\postgresql.conf.

[^4]: Местонахождение файла «postgresql.conf» в ОС Windows Server: C:\Program Files\GIS\Jatoba\\ver\>\data\postgresql.conf

[^5]: <sup>)</sup> Местонахождение файла «postgresql.conf» в ОС семейства GNU/Linux: /var/lib/jatoba/<ver>/data/postgresql.conf
