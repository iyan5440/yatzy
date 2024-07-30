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

    function sendUserName(userName) {
        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    const res = JSON.parse(xmlhttp.responseText);
                    console.log(res.messaged);
                }
            }
        };

        const encodedUserName = encodeURIComponent(userName);
        xmlhttp.open("POST", `./Hangman-api.php?action=sendUserName&userName=${encodedUserName}`, true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send();
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

                        const nameCell = document.createElement('td');
                        nameCell.innerText = curRow[0];

                        const scoreCell = document.createElement('td');
                        scoreCell.innerText = curRow[1];

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