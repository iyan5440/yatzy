<?php
require_once './_config.php';
require_once "../app/models/HangmanGame.php";
require_once '../includes/db_connection.php';
session_start();





header("Content-Type: application/json");

$game = new hang\HangmanGame;



if (!isset($_SESSION['game'])) {
    $game->initializeGame();
    //$test = $game.getObject();
    $_SESSION['game'] = $game;
    //$game = $_SESSION['game'];
}
else {
    // Try to unserialize the game object from the session
    $game = $_SESSION['game'];
}


if (isset($_GET['action'])) {
    $action = $_GET['action'];

    switch ($action) {
        case 'initialize':

            
           // $_SESSION['game'] = $game;

            $currWordState = $game->getCurrentWordList();

            $currImg = $game->getCurrentHangman();

            $ch = $game->getChosenWord();

            echo json_encode(['initialized' => [
                'wordState' => $currWordState,
                'hangman' => $currImg,
                'chos' => $ch
                ]]);

            break;
        case 'decidingCheckLetter':

            if (isset($_GET['KKey'])) {
                $KKey = $_GET['KKey'];
            }
            //error_log("KKey: " . $KKey);
            //print($KKey);
            //var_dump($KKey);


            $Result = $game->checkLetter($KKey);
            $currWordState = $game->getCurrentWordList();

            echo json_encode(['result' =>  $Result]);
        
            break;
        case 'update':

            if (isset($_GET['resu'])) {
                $resu = $_GET['resu'];
            }


             if($resu == 0 || $resu == 1) {
                //updateLeaderboard
                $score = $game->getCurrentScore();
                $_SESSION['currentUser'][1] = $score;

                array_push($_SESSION['leaderboard'], $_SESSION['currentUser']);
                usort($_SESSION['leaderboard'], 'compareScores');

                if(count($_SESSION['leaderboard']) >= 10) {

                    while(count($_SESSION['leaderboard']) > 10) {
                        array_pop($_SESSION['leaderboard']);
                    }
                }

                //send end state
                $currWordState = $game->getCurrentWordList();
                $promptMsg = "You won!";
                echo json_encode(['State01' => [
                    'wordState' => $currWordState,
                    'promptMsg' => $resu == 0 ? "You won!" : "You ran out of moves :( The word was: " . $game->getChosenWord()
                    ]]);
            }

            elseif($resu == 2) {
                $currWordState = $game->getCurrentWordList();
                $currImg = $game->getCurrentHangman();
                echo json_encode(['State2' => [
                    'wordState' => $currWordState,
                    'hangman' => $currImg
                    ]]);
            }

            elseif($resu == 3) {
                $currWordState = $game->getCurrentWordList();
                $currImg = $game->getCurrentHangman();
                echo json_encode(['State2' => [
                    'wordState' => $currWordState,
                    'hangman' => $currImg,
                    'failCheck' => true
                    ]]);
            }

            break;
        case 'sendUserName':
            //&UserName

            //var_dump("ASDFSDFSDF");
            //error_log("TEST.");
            //var_dump("POST data: " . print_r($_POST, true));

            if (isset($_GET['userName'])) {
                //var_dump("teeheeF");
                //error_log("Username not set in session.");
                $userName = $_GET['userName'];
                $_SESSION['currentUser'] = [$userName, 0];
            }

            //var_dump("Yes");



            echo json_encode(['messaged' => $_SESSION['currentUser']]);

            break;
        case 'getLeaderboard':
            $leaderboard = $_SESSION['leaderboard'];

            echo json_encode(['leaderboard' =>  $leaderboard]);
            break;

        default:
            // Invalid action
            http_response_code(400);
            echo json_encode(['error' => 'Invalid action']);
            break;
    }
}


function compareScores($a, $b) {
    return $b[1] - $a[1]; 
}



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



