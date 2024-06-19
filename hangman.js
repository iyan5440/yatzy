
window.onload = function() {
    var wordList = document.getElementById("wordList");

    for(let i = 0; i < 6; i++) { //wordlength
		wordList.innerHTML += '<div class="word">' + 'A' + '</div>'; //'<div>_</div>' '<div>' + '_' + '</div>'
	}
}