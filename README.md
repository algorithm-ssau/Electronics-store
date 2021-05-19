# Electronics-store

Purpose of this project is to create simple electronics store website
using modern technologies and tools.

In order to build this project, it is convenient to have docker installed.

Frontend: React + TypeScript + Redux
Server: Express + Node.js + MongoDB
API: Python

Building for YOUR_TARGET_NAME, where YOUR_TARGET_NAME is one of the following:
   1) localhost
   2) gcloud
   3) mywire 
gcloud means google cloud.

Building for YOUR_TARGET_NAME:
1) cd client
2) docker build -f YOUR_TARGET_NAME.Dockerfile -t client:YOUR_TARGET_NAME .
3) cd ../server
4) docker build -f YOUR_TARGET_NAME.Dockerfile -t server:YOUR_TARGET_NAME .
5) cd ../python-api
6) docker build -f YOUR_TARGET_NAME.Dockerfile -t api:YOUR_TARGET_NAME .
OR:
   1) cd scripts
   2) sh build-for-YOUR_TARGET_NAME.sh
    
Running for YOUR_TARGET_NAME:
1) docker compose -f docker-compose-YOUR_TARGET_NAME.yml up

If you do not have docker installed, you can visit Dockerfile in each folder to see and copy its build instructions.
Pay attention to .env files though.

Клиентская часть предоставляет пользователю удобный интерфейс для взаимодействия с
приложением. Первая страница это регистрация/вход где необходимо указать уникальный
логин и правильный пароль. После удачного входа пользователь попадает в каталог товаров.
Здесь представлена вся продукция магазина. Здесь каждый товар можно добавить в корзину.
Нажать на кнопку выхода из приложения. Перейти на личную страницу пользователя или в корзину.
На личной странице пользователя отображена информация о пользователя, настройки и все его
заказы. При переходе на корзину мы видим все добавленные товары и итоговую стоимость. Если
все указано правильно можно перейти к оплате, где проверяется количество денег на счете
пользователя. После оплаты заказ можно увидеть на странице пользователя.

Информация о разработчиках

Кротков Владимир Денисович
Студент 3 курса Факультета информатики. Full-stack разработкик на JS.
Технологии: C++,C#,Java,JS,ReactJS,SQL.
Проходит обучение на военной кафедре Самарского университета. Увлекается аниме и современными технологиями.

Иванов Сергей Юриевич
Студент 3 курса Факультета информатики. C# бекэнд разработчик.
Технологии: С#, .NET, Js, ReactJS, SQL
Проходит обучение на военной кафедре Самарского университета. Увлекается футболом и предпринимательством.
Занимается разработкой симуляторов радиоприборов на Unity

Бужлаков Никита Сергеевич
Студент 3 курса Факультета информатики. Java бекэнд разработчик.
Технологии: Java, Spring, Js, ReactJS, SQL, C#
Увлекается походами, тяжелым роком

Серверная часть для обеспечения работы приложения онлайн магазина предоставляет следующие сущности:
Customer, Order, Product
У каждой сущности в приложении есть свой уникальный id.
Customer это объект покупателя в магазине. У него есть имя, уникальные логин, email и пароль, количество денег
на счету, аватар, статус верификации и список id его заказов (Order).
Order это заказ пользователя, он создается, при покупки пользователем каких либо товаров(Product)
и содержит в себе статус заказа, дату приема заказа, общую стоимость заказа и id продуктов, которые заказал пользователь
Product это продукт, который может приобрести пользователь. У него есть цена, название, картинка
тип и описание

Информация о разработчиках:
Абрамов Кирилл Дмитриевич
Студент третьего курса Факультета информатики. Java бекэнд разработчик.
Технологии: Java, Spring, SQL, Hibernate, C#, Unity, Js, NodeJs
Учится на военной кафедре Самарского университета. Увлекается психологией, профсоюзной деятельностью.

Корчагин Петр Петрович
Студент третьего курса Факультета информатики. Data Science.
Технологии: Python, PyTorch, ScKit-learn, Numpy, C#, Js, NodeJs
Увлечения: Воинственный анимешник

Подготовка к запуску PythonAPI:
    1) Создать виртуальную среду разработки вводом в терминал команды python3 (python если на компьютере установлен
    только python 3) -m venv env в корневой папке сервера
    2) Активировать виртуальную среду разработки вводом команды cd env/scripts & activate
    3) Вернуться в корневую папку сервера командой cd ../..
    4) Запустить в терминале команду pip3 (pip если на компьютере установлен
    только python 3) install -r pip_packages.txt
Запуск Python API:
    1) Если виртуальная среда разработки не активирована, активировать ее
    2) Запустить в терминале команду uvicorn main:app
Функционал Python API:
    Основная задача данного API - возвращать общедоступную служебную информацию, хранящуюся в файле .env
    На данный момент можно получить в JSON формате следующие данные:
        1) Версию Сервера (/api/appinfo/server/version)
        2) Версию Клиента (/api/appinfo/client/version)
        3) Дату последнего обновления Сервера (/api/appinfo/server/last_update)
        4) Дату последнего обновления Клиента (/api/appinfo/client/last_update)
        5) Список разработчиков с указанием позиций в команде (/api/appinfo/developers)
