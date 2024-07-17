<?php
namespace hangman;

class Hangman {
    
    private $IDs;

    private $fails;

    private $wordList;
    private $chosen;
    
    private $currentWordState;

    public function __construct() {
        // Access instance variables with $this
        $this->IDs = ["https://pbs.twimg.com/media/GQdun7FXwAABl16?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk8QrXwAADygT?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk6kfW0AEV_5U?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk6kmWgAA07ea?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk6kgXAAAJny8?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk6kgW4AAulJG?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk8Q5WYAAsB7f?format=png&name=900x900"];

        $this->fails = 0;
        $this->wordList = ['AZURE','DIRNDI','LYMPH','BUFFOON','PLAIN','DUPLEX','ZILCH','EMBEZZLE','SPHINX','ESPIONAGE','EUOUAE'];
        $this->chosen = "";
        $this->currentWordState = [];
        
    }


    public function initializeGame() {
        $this->chosen = $this->wordList[rand(0, count($this-> wordList))];
        $this->currentWordState = [];

        for($i = 0; $i < strlen($this->chosen); $i++ ) {
            $this->currentWordState[$i] = "";
        }
    }

    public function checkLetter($userKey) {
        if(stripos($this->chosen,$userKey) > -1) {
            $this->findAndUpdate($userKey);
        }
        else {
            $this->fails++; 
        }
        $this->handleResult();
    }

    public function findAndUpdate($userKey) {
        for($i = 0; $i < strlen($this->chosen); $i++ ) {
            if($this->chosen[$i] === $userKey) {
                $this->currentWordState[$i] = $userKey;
            }
        }
    }

    public function handleResult() {
        if($this->fails == 7) {
            return 1;
        }
        elseif($this->chosen === join($this->currentWordState)) {
            return 0;
        }
        else {
            return 2;
        }
    }

    public function getChosenWord() {
        
        return $this->chosen;
    }

    public function getCurrentWordList() {
        
        return $this->currentWordState;
    }

    public function getCurrentHangman() {
        
        return $this->IDs[$this->fails];
    }

    public function hasGameEnded() {
        return $this->fails == 7;
    }

    
}