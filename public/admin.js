//click event for start button
    //post
    //UserName from input

    onload = () => {
        getLeaderboard();
    }



    //const userName = document.getElementById("user-input");
    var userName;
    const start = document.getElementById("start-button");
    const userInput = document.getElementById("user-input");
    var leaderboardHtml = document.getElementById("leaderboard");


    function backToHome() {
        location.replace("index.php");
    }

    //const unknownLetters = unknownString.children; //unknownLetters

    function deleteUserFromLeaderboard(playerName, score) {


        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    //const res = JSON.parse(xmlhttp.responseText);
                    //console.log(res.messaged);
                    //const row = document.getElementById(rowId);
                    //row.remove();

                    getLeaderboard();
                }
            }
        };

        const encodedPlayerName = encodeURIComponent(playerName);
        const encodedPlayerScore = encodeURIComponent(score);
        xmlhttp.open("POST", `./Hangman-api.php?action=deleteUserFromLeaderboard&playerName=${encodedPlayerName}&playerScore=${encodedPlayerScore}`, true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    }

    function clearLeaderboard() {
        const userRows = leaderboardHtml.querySelectorAll('tr:not(:first-child)');
        userRows.forEach(userRow => userRow.remove());
    }

    //have a get request that adds information from server to leaderboard

    function getLeaderboard() {
        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    const res = JSON.parse(xmlhttp.responseText);

                    const leaderboardRes = res.leaderboard; 

                    clearLeaderboard();
                    // update leaderboard table with leaderboardRes content
                    for (let i = 0; i < leaderboardRes.length; i++) {
                        const curRow = leaderboardRes[i];
                        const newRow = document.createElement('tr');

                        const rowId = `user-${i}`;
                        newRow.setAttribute('id', rowId);

                        const nameCell = document.createElement('td');
                        nameCell.innerText = curRow.player_name;

                        const scoreCell = document.createElement('td');
                        scoreCell.innerText = curRow.score;

                        const delCell = document.createElement('td');
                        const delButton = document.createElement('button');
                        delButton.innerText = 'X';
                        //delButton.setAttribute("onClick", deleteUserFromLeaderboard(newRow.id, curRow.player_name));
                        delButton.addEventListener('click', () => deleteUserFromLeaderboard(curRow.player_name, curRow.score));
                        delCell.appendChild(delButton);

                        newRow.appendChild(nameCell);
                        newRow.appendChild(scoreCell);
                        newRow.appendChild(delCell);

                        leaderboardHtml.appendChild(newRow);
                        
                    }
                    
                }
            }
        };
    
        xmlhttp.open("GET", "./Hangman-api.php?action=getLeaderboard", true);
        xmlhttp.send();
    }