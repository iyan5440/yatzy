<?php
require_once './_config.php';
session_start();


//require_once '../app/models/Hangman-api.php';
//require_once './Hangman-api.php';

//use hang\HangmanGame;
//use hang\Hangman;

//header("Content-Type: application/json");

//$game = new Hangman();


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangman</title>
    <link type="text/css"  rel="stylesheet" href="main.css">
</head>
<body>
    <div class="row core">
        <div class="unknownString" id="unknownString">

        </div>
        <img src="https://pbs.twimg.com/media/GQdun7FXwAABl16?format=png&name=900x900" alt="No stickman at all" id="stickman">
        
    </div>
    <div class="keyboard">
        <div class="row">
            <div class="key">Q</div>
            <div class="key">W</div>
            <div class="key">E</div>
            <div class="key">R</div>
            <div class="key">T</div>
            <div class="key">Y</div>
            <div class="key">U</div>
            <div class="key">I</div>
            <div class="key">O</div>
            <div class="key">P</div>
        </div>
        <div class="row">
            <div class="key">A</div>
            <div class="key">S</div>
            <div class="key">D</div>
            <div class="key">F</div>
            <div class="key">G</div>
            <div class="key">H</div>
            <div class="key">J</div>
            <div class="key">K</div>
            <div class="key">L</div>
        </div>
        <div class="row secondLast">
            <div class="key">Z</div>
            <div class="key">X</div>
            <div class="key">C</div>
            <div class="key">V</div>
            <div class="key">B</div>
            <div class="key">N</div>
            <div class="key">M</div>
        </div>
    </div>
</body>
<script src="hangman.js"></script>
</html>