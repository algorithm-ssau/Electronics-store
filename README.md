# Electronics-store

Purpose of this project is to create educational electronics store website
using modern technologies and tools.

Frontend: React + TypeScript + Redux
Server: Express + Node.js + MongoDB
API: Python

## Building

You can build this project either with [Docker](https://www.docker.com/) or without it. Recommended way is to use Docker since it is very fast and simple.
Direct download link:

https://www.docker.com/products/docker-desktop

### Building with Docker

This project assembles into 3 docker containers, named accordingly:
- api:prod
- server:prod
- client:prod

There is a simple shell script for convenience. Keep in mind, however, that docker containers require a lot of space (around ~3 GBs for this project).

```shell
# In Root dir:
cd scripts
sh build-docker-containers.sh
```

### Building without Docker

In order to build without docker, you should have [python3](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installing/) installed.
Then you can use following commands:
- Server:
```shell
# In Root dir:
cd server
npm i
```
- Api:
```shell
# In Root dir:
cd python-api
# Use python or python3
python -m venv env
# On some OS use following line instead:
# cd env/bin & activate
cd env/scripts & activate
cd ../..
pip3 install -r pip_packages.txt
```
- Client:
```shell
# In Root dir:
cd client
# If you have troubles npm i, uncomment following line:
# npm run lint:fix
npm i
```
## Running

By default, this project uses ports
- 8080 for client;
- 5000 for server;
- 8000 for api.

### Running with Docker

You can use [Docker compose](https://docs.docker.com/compose/) to run these containers together.
```shell
# In Root dir:
docker compose up
```
There you go! Now whole project is running on http://localhost:8080

### Running without docker

In order to run without docker, you should also have [uvicorn](https://www.uvicorn.org/) installed.

- Server
```shell
# In Root dir:
cd server
npm run start
```
- Api
```shell
# In Root dir:
cd python-api
uvicorn main:app
```  
- Client
```shell
cd client
npm run start
```

## About

Клиентская часть предоставляет пользователю удобный интерфейс для взаимодействия с
приложением. Первая страница это регистрация/вход где необходимо указать уникальный
логин и правильный пароль. После удачного входа пользователь попадает в каталог товаров.
Здесь представлена вся продукция магазина. Здесь каждый товар можно добавить в корзину.
Нажать на кнопку выхода из приложения. Перейти на личную страницу пользователя или в корзину.
На личной странице пользователя отображена информация о пользователя, настройки и все его
заказы. При переходе на корзину мы видим все добавленные товары и итоговую стоимость. Если
все указано правильно можно перейти к оплате, где проверяется количество денег на счете
пользователя. После оплаты заказ можно увидеть на странице пользователя.

### Информация о разработчиках

Кротков Владимир Денисович
Студент 3 курса Факультета информатики. Full-stack разработчик.
Технологии: C++, C#, JS, TS, React, MySQL.
Проходит обучение на военной кафедре Самарского университета. Увлекается аниме и современными технологиями.

Иванов Сергей Юриевич
Студент 3 курса Факультета информатики. C# backend разработчик.
Технологии: С#, .NET, Js, React, SQL
Проходит обучение на военной кафедре Самарского университета. Увлекается футболом и предпринимательством.
Занимается разработкой симуляторов радиоприборов на Unity.

Бужлаков Никита Сергеевич
Студент 3 курса Факультета информатики. Java backend разработчик.
Технологии: Java, Spring, Js, React, SQL, C#
Увлекается походами, тяжелым роком.

Абрамов Кирилл Дмитриевич
Студент третьего курса Факультета информатики. Java бекэнд разработчик.
Технологии: Java, Spring, SQL, Hibernate, C#, Unity, Js, NodeJs
Учится на военной кафедре Самарского университета. Увлекается психологией, профсоюзной деятельностью.

Корчагин Петр Петрович
Студент третьего курса Факультета информатики. Data Science.
Технологии: Python, PyTorch, ScKit-learn, Numpy, C#, Js, NodeJs
Воинственный анимешник.

### Серверная часть

Серверная часть для обеспечения работы приложения онлайн магазина предоставляет следующие сущности:
Customer, Order, Product.
У каждой сущности в приложении есть свой уникальный id.

- Customer это объект покупателя в магазине. У него есть имя, уникальные логин, email и пароль, количество денег
на счету, аватар, статус верификации и список id его заказов (Order).

- Order это заказ пользователя, он создается, при покупке пользователем каких либо товаров (Product)
и содержит в себе статус заказа, дату приема заказа, общую стоимость заказа и id продуктов, которые заказал пользователь.

- Product это продукт, который может приобрести пользователь. У него есть цена, название, картинка
тип и описание

### Python API

Основная задача данного API - возвращать общедоступную служебную информацию, хранящуюся в файле .env.
На данный момент можно получить в JSON формате следующие данные:

1) Версию Сервера (/api/appinfo/server/version)
2) Версию Клиента (/api/appinfo/client/version)
3) Дату последнего обновления Сервера (/api/appinfo/server/last_update)
4) Дату последнего обновления Клиента (/api/appinfo/client/last_update)
5) Список разработчиков с указанием позиций в команде (/api/appinfo/developers)

### Клиентская часть

Клиентская часть нужна для взаимодействия пользователя с сайтом через удобный интерфейс.
Пользователь уберегается от ошибок и получает возможность комфортно путешествовать по сайту с помощью навигации.
Предусмотрены возможности регистрации нового пользователя и входа уже существующего, добавления товаров в корзину и их покупки, а также многое другое.
При заходе администратора, у него на странице отображается техническая информация.

## Наши преимущества

Ниже приведена таблица, в которой указаны наши преимущества по сравнению с другими известными сервисами и магазинами.

| Описание | Иные сервисы | EStore |
|----------------|:---------:|----------------:|
| Дней до добавления поиска | [Google stadia](https://stadia.google.com/): >500 | 1< |
| Средняя скорость поиска | [Ситилинк](https://www.citilink.ru/): ~3-5 секунд | < 0.01 секунды |
| Корзина сохраняется, если случайно забыли зайти | [Aliexpress](https://aliexpress.ru/): нет | да |

... и многое другие.

#### Приятного времяпрепровождения!