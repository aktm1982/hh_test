<?php

function getConnection($env) {
    $link = new mysqli($env['hostname'], $env['username'], $env['password'], $env['db_name']);

    if ($link->connect_error) {
        die('Не удалось подключиться к серверу');
    }
    
    return $link;
}

function makeQuery($link, $queryString) {
    return $link->query($queryString);
}