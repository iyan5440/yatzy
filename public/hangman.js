

window.onload = function() {
    let fails = 0;

    const stickman = document.querySelector("#stickman");

    var unknownString = document.getElementById("unknownString");

    var currentWordState;

    var promptMsg;

    var chose;

    initialize();


    

    const keyboardKeys = document.querySelectorAll('.key');

    //const unknownLetters = unknownString.children; //unknownLetters

    keyboardKeys.forEach(keyboardKey => {
        keyboardKey.addEventListener('click', () => {
            //console.log("Check: " + keyboardKey.innerHTML);
            checkLetter(keyboardKey.innerText).then( resu => {
                update(resu, keyboardKey);
            })
            
            //get win, lose or update
        })
    });


}

function updateunknownString (currentWordState) {
    unknownString.innerHTML = "";
    for(let i = 0; i < currentWordState.length; i++) {
        unknownString.innerHTML += '<div class="word">' + currentWordState[i] + '</div>';
    }
}


function initialize() {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                const res = JSON.parse(xmlhttp.responseText);

                currentWordState = res.initialized.wordState;
                //console.log(currentWordState);
                //console.log(typeof(currentWordState));
                stickman.src = res.initialized.hangman;
                chose = res.initialized.chos;
                //console.log(chose);
                updateunknownString(currentWordState);

                
            }
        }
    };

    xmlhttp.open("GET", "./Hangman-api.php?action=initialize", true);
    xmlhttp.send();
}

function checkLetter(KKey) {
    return new Promise((resolve) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    console.log(xmlhttp.responseText);
                    const res = JSON.parse(xmlhttp.responseText);
                    //console.log("t4");

                    resolve(res.result);
                    //console.log(res.results.result);
                    //console.log(res.results.wordState);
                    
                }
            }
        };
        const encodedKKey = encodeURIComponent(KKey);
        console.log(KKey);
        xmlhttp.open("GET",  `./Hangman-api.php?action=decidingCheckLetter&KKey=${encodedKKey}`, true);
        xmlhttp.send();
    });
    

}

function update(resu, keyboardKey) {

    const xmlhttp = new XMLHttpRequest();
    const result = encodeURIComponent(resu);
    //console.log("Hey ");
    console.log(result);
    xmlhttp.open("GET", `./Hangman-api.php?action=update&resu=${result}`, true);
    xmlhttp.send();
    

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                try {
                    console.log(xmlhttp.responseText);
                    const res = JSON.parse(xmlhttp.responseText);
                    console.log("t5");
                    if (resu == 0 || resu == 1) {
                        currentWordState = res.State01.wordState;
                        updateunknownString(currentWordState);
                        promptMsg = res.State01.promptMsg;
                        alert(promptMsg);
                        location.replace("index.php");
                    }
                    else if (resu == 2) {
                        currentWordState = res.State2.wordState;
                        stickman.src = res.State2.hangman;
                        updateunknownString(currentWordState);
                    }

                    else if (resu == 3) {
                        currentWordState = res.State2.wordState;
                        stickman.src = res.State2.hangman;
                        updateunknownString(currentWordState);
                        keyboardKey.style.visibility = 'hidden';
                    }
                
                    else {
                        //404
                    }
                } catch (e) {
                    console.error("Error parsing JSON response:", e);
                }

                
                
            }
        }
    };
}