# HTTP (HyperText Transfer Protocol)

**HTTP** - протокол клиент-серверного взаимодействия прикладного уровня, регулирующий передачу данных по сети. Изначально предназаначен для передачи гипертекста.

**Гипертекст**  - это документ, содержащий информацию, связаную между собой ссылками.

Клиент и сервер обмениваются между собой http-запросами и http-ответами. Между этими запросами и ответами как правило существуют многочисленные посредники, называемые прокси, которые выполняют различные операции и работают как шлюзы или кэш, например.
Http не сохраняет состояние, но имеет сессию (Реализовано с помощью куки). Протокол полагается в транспортной реализации на TCP протокол благодаря надежности передачи данных. Соединение частично регулируется чере заголовок "Connection".

***

### Взаимодействия клиента и сервера по http протоколу реализовано следующим образом:

**1.** Устанавливается TCP-соединение между сервером и клиентов. Клиент может открыть новое соединение, переиспользовать существующее, или открыть несколько TCP-соединений к серверу.

**2.** Отправляется http-запрос, содержащий шапку и тело сообщения:

Пример заголовка:
GET / HTTP/1.1 - стартовая строка
Host: developer.mozilla.org
Accept-Language: fr

**3.** Ожидание ответа от сервера: 

Пример ответа:
HTTP/1.1 200 OK 
***
Date: Sat, 09 Oct 2010 14:28:02 GMT
***
Server: Apache
***
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
***
ETag: "51142bc1-7449-479b075b2891b"
***
Accept-Ranges: bytes
***
Content-Length: 29769
***
Content-Type: text/html
***

**4.** Закрывание или переиспользование соеденения.

### HTTP СООБЩЕНИЯ

**Запрос содержит:**
Метод URI Версия протокола - стартовую строку
Заголовки
Тело

**Ответ содержит:** 
Версия протоколо Код состояния Расшифрока кода - стартовую строку
Заголовки
Тело

#### МЕТОДЫ
* **GET** - Запрос ресурса. Можно передать парметры через url - resource ?param1=value1 &p aram2=value

* **HEAD** - Аналогичен GET, используется для получения методанных от сервера, проверки наличия ресурса, тк в ответе сервер отсутсвует тело сообщение. Заголовки ответа могут кэшироваться. При несовпадении метаданных ресурса с соответствующей информацией в кэше — копия ресурса помечается как устаревшая. 

* **OPTIONS** - Используется для проверки возможностей веб-сервера. В ответ сервера включается заголовок allow, описывающий список поддерживаемых методов сервера.

* **POST** - Применяется для передачи данных серверу. В отличии от GET отправленные одинаковые данные могут возвращать разные ответы сервера. Сообщения не кэшируются.

* **PUT** - Загружает содержимое на указанный ЮРИ. Отличается от POST тем, что отправляеммые ресурсы не обрабатываются.

* **PATCH** - Аалогично PUT, но применяется только к фрагменту ресурса.

* **DELETE** - Удаляет указаннный ресурс.

* **TRACE** - Показывает промежуточные сервера.

* **CONNECT** - Преобразует соединение запроса в прозрачный TCP/IP-туннель, обычно чтобы содействовать установлению защищённого SSL-соединения через нешифрованный прокси.

#### КОДЫ СОСТОЯНИЯ

[Обратно](https://github.com/ejller/Web_lab_one/edit/master/README.md)