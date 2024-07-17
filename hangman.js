

window.onload = function() {

    let fails = 0;

    const stickman = document.querySelector("#stickman");

    var unknownString = document.getElementById("unknownString");

    var currentWordState;

    //get initialize 
    initialize();

    

    const keyboardKeys = document.querySelectorAll('.key');

    //const unknownLetters = unknownString.children; //unknownLetters

    keyboardKeys.forEach(keyboardKey => {
        keyboardKey.addEventListener('click', () => {
            console.log("Check: " + keyboardKey.innerHTML);
            checkLetter(keyboardKey);
            //get decciding checkLetter
            //get win, lose or update
        })
    });


}


function initialize() {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                const res = JSON.parse(xmlhttp.responseText);
                //const resArr = res.dice;
                currentWordState = res.initialized[0];
                stickman.src = res.initialized[1];

                for(let i = 0; i < currentWordState.length; i++) {
                    unknownString.innerHTML += '<div class="word">' + currentWordState[i] + '</div>';
                }
                
            }
        }
    };
}

function checkLetter(KKey) {
    
}