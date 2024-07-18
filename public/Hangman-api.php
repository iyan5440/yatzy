<?php

require_once './_config.php';
include "../app/models/HangmanGame.php";

use hang\HangmanGame;

//header("Content-Type: application/json");

if (!isset($_SESSION['game'])) {
    $game = new HangmanGame();
    $_SESSION['game'] = $game;
    //$game = $_SESSION['game'];
    $game->HangmanPlay->initializeGame();
}




if (isset($_GET['action'])) {
    $action = $_GET['action'];

    switch ($action) {
        case 'initialize':

            $currWordState = $game->HangmanPlay->getCurrentWordList();

            $currImg = $game->HangmanPlay->getCurrentHangman();

            echo json_encode(['initialized' => [
                'wordState' => $currWordState,
                'hangman' => $currImg
                ]]);

            break;
        case 'decidingCheckLetter':

            if (isset($_GET['KKey'])) {
                $KKey = $_GET['KKey'];
            }
            //error_log("KKey: " . $KKey);
            //print($KKey);

            $Result = $game->HangmanPlay->checkLetter($KKey);
            $currWordState = $game->HangmanPlay->getCurrentWordList();

            echo json_encode(['result' =>  $Result]);
        
            break;
        case 'update':

            if (isset($_GET['resu'])) {
                $resu = $_GET['resu'];
            }


             if($resu == 0 || $resu == 1) {
                $currWordState = $game->HangmanPlay->getCurrentWordList();
                $promptMsg = "You won!";
                echo json_encode(['State01' => [
                    'wordState' => $currWordState,
                    'promptMsg' => $resu == 0 ? "You won!" : "You ran out of moves :( The word was: " . $game->HangmanPlay->getChosenWord()
                    ]]);
            }

            elseif($resu == 2) {
                $currWordState = $game->HangmanPlay->getCurrentWordList();
                $currImg = $game->HangmanPlay->getCurrentHangman();
                echo json_encode(['State2' => [
                    'wordState' => $currWordState,
                    'hangman' => $currImg
                    ]]);
            }

            break;
        case 'startPlayerProfile':
        
            break;
        case 'storePlayerProfile':
        
            break;
        case 'leaderboard':
        
            break;

        default:
            // Invalid action
            http_response_code(400);
            echo json_encode(['error' => 'Invalid action']);
            break;
    }
}

//get initialize
    //get currentWordState = unknownLetters
    //get img ID

//request decidingCheckLetter
    //get Result
        //0 -> request endGameWin
        //1 -> request endGameLose
        //2 -> request get update

//get endGame
    //get currentWordState = unknownLetters
    //promptMessage

//get update
    //get currentWordState = unknownLetters

    //get img ID

//post person to leaderboard
    //post username
    //stored in [currentPerson] = [userName,""];

//post score to leaderboard
    //store in  [currentPerson] = [userName,score];
    //store in _Session leaderboard
    //check if leaderboard <= 10
        //add person
        //sort
    //if not <=10
        //check last location [9] and replace



