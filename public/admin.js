//click event for start button
    //post
    //UserName from input

    onload = () => {
        getLeaderboard();
    }



    //const userName = document.getElementById("user-input");
    const start = document.getElementById("start-button");
    const userInput = document.getElementById("user-input");
    var leaderboardHtml = document.getElementById("leaderboard");


    function verifyStartGameState() {
        const userName = userInput.value.trim();
        console.log(userName);

        //console.log(userName == "");
        if (userName !== "") {
            sendUserName(userName);
            location.replace("main.php");

        }
    }

    const leaderboardUsers = document.querySelectorAll('luser');

    //const unknownLetters = unknownString.children; //unknownLetters

    function deleteUserFromLeaderboard(rowId, playerName) {
        document.getElementById(rowId).remove();

        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    const res = JSON.parse(xmlhttp.responseText);
                    console.log(res.messaged);
                    getLeaderboard();
                }
            }
        };

        const encodedPlayerName = encodeURIComponent(playerName);
        xmlhttp.open("POST", `./Hangman-api.php?action=deleteUserFromLeaderboard&playerName=${encodedPlayerName}`, true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    }

    function clearLeaderboard() {

    }



    //have a get request that adds information from server to leaderboard

    function getLeaderboard() {
        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    const res = JSON.parse(xmlhttp.responseText);

                    leaderboardRes = res.leaderboard; 
                    // update leaderboard table with leaderboardRes content
                    for (let i = 0; i < leaderboardRes.length; i++) {
                        const curRow = leaderboardRes[i];
                        const newRow = document.createElement('tr');
                        newRow.setAttribute('id','luser');

                        const nameCell = document.createElement('td');
                        nameCell.innerText = curRow.player_name;

                        const scoreCell = document.createElement('td');
                        scoreCell.innerText = curRow.score;

                        const delCell = document.createElement('td');
                        const delButton = document.createElement('button');
                        delCell.innerText = 'X';
                        deleteButton.onClick(deleteUserFromLeaderboard(newRow.id, curRow.player_name));

                        newRow.appendChild(nameCell);
                        newRow.appendChild(scoreCell);

                        leaderboardHtml.appendChild(newRow);
                        
                    }
                    
                }
            }
        };
    
        xmlhttp.open("GET", "./Hangman-api.php?action=getLeaderboard", true);
        xmlhttp.send();
    }