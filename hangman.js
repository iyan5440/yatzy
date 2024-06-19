
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