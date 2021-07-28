<?php

require_once('mysqli-service.php');

function postComment($link) {
    $_POST = json_decode(file_get_contents('php://input'), true);
    $query = "INSERT INTO comments (user_name, user_email, text) VALUES ('{$_POST['user-name']}', '{$_POST['user-email']}', '{$_POST['text']}')";

    makeQuery($link, $query);
}

function getComments($link) {
    $query = "SELECT * FROM comments ORDER BY id DESC LIMIT 6";
    $result = makeQuery($link, $query);

    $html = [];
    while( $row = mysqli_fetch_assoc($result) ) {
        $comment = <<<ELT
        <div class="comment__item col-lg-4 col-md-6">
            <div class="comment__item-label">{$row['user_name']}</div>
            <div class="comment__item-body">
                <div class="comment-email">{$row['user_email']}</div>
                <div class="comment-text">{$row['text']}</div>
            </div>
        </div>
        ELT;
        array_push($html, $comment);
    }

    return $html;
}

function showCommentsHtml($link) {
    $comments = getComments($link);
    echo join($comments);
}

function run($env) {
    $link = getConnection($env);

    switch($_SERVER['REQUEST_METHOD']) {
        case 'GET': 
            showCommentsHtml($link);
            break;
        case 'POST': 
            postComment($link);
            break;
    }
}