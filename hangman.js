


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

    async function sleep(secs) {
        return new Promise((resolve) => setTimeout(resolve, secs * 1000));
    }

    async function checkLetter(userKey, chosen, unknownLetters) {
        userChar = userKey.innerHTML;

        if(chosen.indexOf(userChar) > -1) {
            userKey.style.backgroundColor = "rgb(26, 99, 32)"
            findAndUpdate(userChar, chosen, unknownLetters);
            await sleep(0.25);
            var check=true;
        
            for(let i = 0; i< chosen.length; i++) {
                console.log(unknownLetters[i].innerHTML);
                if (unknownLetters[i].innerHTML=='_'){
                    check=false;
                    break;
                }
            }
            if (check){
                alert("You won!");
                location.replace("index.html");
            }

        }
        else {
            userKey.style.backgroundColor = "rgb(131, 25, 25)"
            fails++;
            stickman.src = IDs[fails];
            if (fails == 7){
                alert("You ran out of moves :( The word was: " + chosen);
                location.replace("index.html");
            }
            await sleep(0.25);
        }
        for (let i=1; i>0;i-=0.05){
            userKey.style.opacity = i;
        }
        userKey.disable;
        /*userKey.style.visibility = 'hidden';
        userKey.style.backgroundColor = "white"*/
    }
            
    function findAndUpdate(userChar, chosen, unknownLetters) {
        for(let i = 0; i< chosen.length; i++) {
            if(userChar === chosen.charAt(i)) {
                unknownLetters[i].innerHTML = userChar;
            }
        }
    }
    

}
