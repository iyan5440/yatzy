<?php
namespace hang;

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
        $this->chosen = $this->wordList[rand(0, count($this-> wordList) - 1)];
        $this->currentWordState = array_fill(0, strlen($this->chosen), '_');
/*
        for($i = 0; $i < strlen($this->chosen); $i++ ) {
            $this->currentWordState[$i] = "_";
        }*/

        ///var_dump($this->chosen);
        //var_dump($this->currentWordState);

    }

    public function checkLetter($userKey) {
        //var_dump($userKey);
        //var_dump($this->chosen);
        //var_dump(stripos($this->chosen,$userKey));
        if(stripos($this->chosen,$userKey) > -1) {
            //print("you passed");
            $this->findAndUpdate($userKey);
        }
        else {
            $this->fails++;
        }


        return $this->handleResult();
    }

    public function findAndUpdate($userKey) {
        for($i = 0; $i < strlen($this->chosen); $i++ ) {
            //var_dump($userKey);
            //var_dump($this->chosen[$i]);
            if($this->chosen[$i] === $userKey) {
                $this->currentWordState[$i] = $userKey;
            }
        }

    }

    public function handleResult() {
        if($this->fails == 7) {
            return 1;
        }
        else if($this->getChosenWord() === implode('', $this->getCurrentWordList())) {
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

    public function getCurrentScore() {
        return $this->fails;
    }

    
}