


const IDs = ["https://pbs.twimg.com/media/GQdun7FXwAABl16?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk8QrXwAADygT?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk6kfW0AEV_5U?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk6kmWgAA07ea?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk6kgXAAAJny8?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk6kgW4AAulJG?format=png&name=900x900",
        "https://pbs.twimg.com/media/GQdk8Q5WYAAsB7f?format=png&name=900x900"];

    

window.onload = function() {

    let fails = 0;

    const stickman = document.querySelector("#stickman");

    var unknownString = document.getElementById("unknownString");

    const wordList = ['AZURE','DIRNDI','LYMPH','BUFFOON','PLAIN','DUPLEX','ZILCH','EMBEZZLE','SPHINX','ESPIONAGE','EUOUAE'];

    const chosen = wordList[Math.floor(Math.random() * wordList.length)];

    const keyboardKeys = document.querySelectorAll('.key');

    for(let i = 0; i < chosen.length; i++) {
		unknownString.innerHTML += '<div class="word">' + '_' + '</div>';
	}

    const unknownLetters = unknownString.children; //unknownLetters

    keyboardKeys.forEach(keyboardKey => {
        keyboardKey.addEventListener('click', () => {
            console.log("Check: " + keyboardKey.innerHTML);
            checkLetter(keyboardKey, chosen, unknownLetters);
        })
    });

    function checkLetter(userKey, chosen, unknownLetters) {
        userChar = userKey.innerHTML;
        userKey.style.visibility = 'hidden';
        if(chosen.indexOf(userChar) > -1) {
            findAndUpdate(userChar, chosen, unknownLetters);
            var check=true;
        
            for(let i = 0; i< chosen.length; i++) {
                console.log(words[i].innerHTML);
                if (words[i].innerHTML=='_'){
                    check=false;
                    break;
                }
            }
            if (check){
                alert("You won!");
                location.replace("page.html");
            }

        }
        else {
            fails++;
            stickman.src = IDs[fails];
            //console.log("Fails", fails);
            if (fails == 7){
                alert("You ran out of moves :( The word was: " + chosen);
                location.replace("page.html");
            }
        }
    }
            
    function findAndUpdate(userChar, chosen, unknownLetters) {
        for(let i = 0; i< chosen.length; i++) {
            if(userChar === chosen.charAt(i)) {
                unknownLetters[i].innerHTML = userChar;
            }
        }
    }    
}
