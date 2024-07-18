<?php
namespace hang;

require_once '_config.php';
include "Hangman.php";

class hangmanGame {
    public $HangmanPlay;

    public function __construct() {
        $this->HangmanPlay = new Hangman();
    }

    
}