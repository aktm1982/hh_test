Honey Hunters App
============
1. Скачать репозиторий в каталог публичных документов сервера (www, htdocs, domains и т.д.)
2. Отредактировать файл settings/env.php: указать данные для подключения к серверу MySQL (хост, имя пользователя, пароль). Имя базы данных не менять.
3. Папку comments_db переместить в каталог data в корневом каталоге установленной базы MySQL.
4. Открыть терминал, перейти в каталог приложения - hh_test.
5. Выполнить команды:
    npm install - для установки зависимостей в проект;
    npm run build - для сборки проекта;
6. Запустить сервер, перейти на сайт hh_test

* для работы с базой данных потребуется установленное расширение mysqli для php