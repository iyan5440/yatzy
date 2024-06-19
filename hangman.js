
//Javascript
const IDs = ["https://pbs.twimg.com/media/GQdun7FXwAABl16?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk8QrXwAADygT?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk6kfW0AEV_5U?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk6kmWgAA07ea?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk6kgXAAAJny8?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk6kgW4AAulJG?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk8Q5WYAAsB7f?format=png&name=900x900"];
let fails = 0;
const stickman = main.querySelector("stickman");
function tryLetter(){
    if(fail){
        fails++;
        stickman.removeElement("src");
        stickman.src=IDs[fails]
        if (fails==6){
            lose();
        }
    }
}


window.onload = function() {
    var unknownString = document.getElementById("unknownString");

    const wordList = ['AZURE','DIRNDI','LYMPH','BUFFOON','PLAIN','DUPLEX','ZILCH','EMBEZZLE','SPHINX','ESPIONAGE','EUOUAE'];

    const chosen = wordList[Math.floor(Math.random() * wordList.length)];

    console.log("" + chosen);

    const keyboardKeys = document.querySelectorAll('.key');

    for(let i = 0; i < chosen.length; i++) {
		unknownString.innerHTML += '<div class="word">' + '_' + '</div>';
	}

    const words = unknownString.children;

    keyboardKeys.forEach(keyboardKey => {
        keyboardKey.addEventListener('click', () => {
            console.log("Check: " + keyboardKey.innerHTML);
            checkLetter(keyboardKey, chosen, words);
        })
    });
}

function checkLetter(userKey, chosen, words) {
    userChar = userKey.innerHTML
    if(chosen.indexOf(userChar) > -1) {
        findAndUpdate(userChar, chosen, words);
        userKey.style.visibility = 'hidden';
    }
    else {
        //damage hangman
    }
}
        
function findAndUpdate(userChar, chosen, words) {
    for(let i = 0; i< chosen.length; i++) {
        if(userChar === chosen.charAt(i)) {
            words[i].innerHTML = userChar;
        }
    }
}          

