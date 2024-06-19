
window.onload = function() {
    var wordList = document.getElementById("wordList");

    const keyboardKeys = document.querySelectorAll('.key');

    for(let i = 0; i < 6; i++) { //wordlength
		wordList.innerHTML += '<div class="word">' + '_' + '</div>'; //'<div>_</div>' '<div>' + '_' + '</div>'
	}

    keyboardKeys.forEach(keyboardKey => {
        keyboardKey.addEventListener('click', () => {
            console.log("Check: " + keyboardKey.innerHTML);
        })
    });
}

function check(character) {
    
}