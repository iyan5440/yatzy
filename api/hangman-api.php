<?php

require_once '_config.php';

header("Content-Type: application/json");

$game = new hangman\Hangman;

if (isset($_GET['action'])) {
    $action = $_GET['action'];

    switch ($action) {
        case 'initialize':
            
            break;
        case 'decidingCheckLetter':
        
            break;
        case 'endGame':
        
            break;
        case 'update':
        
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



