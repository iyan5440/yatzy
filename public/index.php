<?php
session_start();

require_once './_config.php';

if (isset($_SESSION['game'])) {
    //$_SESSION['game'] = new YatzyGame();
    //$game = $_SESSION['game'];

    unset($_SESSION['game']);
}

if (!isset($_SESSION['leaderboard'])) {
    //$_SESSION['game'] = new YatzyGame();
    //$game = $_SESSION['game'];

    $_SESSION['leaderboard'] = [];
}






?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangman</title>
    <link  type="text/css" rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Hangman</h1>
    <div>
        <a href="main.php"><button>Start</button></a>
    </div>
</body>
</html>