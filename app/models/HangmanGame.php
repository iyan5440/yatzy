<?php
namespace hang;

require_once '_config.php';
include "Hangman.php";

class hangmanGame {
    public $HangmanPlay;

    public function __construct() {
        $this->HangmanPlay = new Hangman();
    }

    public function initializeGame() {
        $this->HangmanPlay->initializeGame();
    }

    public function checkLetter($userKey) {
        return $this->HangmanPlay->checkLetter($userKey);
    }

    public function getCurrentWordList() {
        return $this->HangmanPlay->getCurrentWordList();
    }

    public function getCurrentHangman() {
        return $this->HangmanPlay->getCurrentHangman();
    }

    public function getChosenWord() {
        return $this->HangmanPlay->getChosenWord();
    }

    public function getObj() {
        return new Hangman();
    }
    
}