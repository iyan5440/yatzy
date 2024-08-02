<?php
require_once './_config.php';
session_start();

if (isset($_SESSION['game'])) {
    //$_SESSION['game'] = new YatzyGame();
    //$game = $_SESSION['game'];

    unset($_SESSION['game']);
}

if (isset($_SESSION['currentUser'])) {
    //$_SESSION['game'] = new YatzyGame();
    //$game = $_SESSION['game'];

    unset($_SESSION['currentUser']);
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
    <h1 class="items">Hangman</h1>
    <div>

    </div>
    <div class="items">
        <table id="leaderboard">
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
        </table>

        <label>Enter Player Name:</label>
        <input type="text" id="user-input">
    </div>
    <div class="start">
        <button id="start-button" onclick="verifyStartGameState()">Start</button>
    </div>
</body>
<script src="index.js"></script>
</html>