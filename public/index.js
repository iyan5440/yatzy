//click event for start button
    //post
    //UserName from input

    onload = () => {
        getLeaderboard();
    }



    //const userName = document.getElementById("user-input");
    const start = document.getElementById("start-button");
    const userInput = document.getElementById("user-input");


    function verifyStartGameState() {
        const userName = userInput.value.trim();
        //console.log(userName);

        //console.log(userName == "");
        if (userName !== "") {
            sendUserName();
            location.replace("main.php");
        }
    }

    function sendUserName() {
        const userName = userInput.value.trim();
        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {

                }
            }
        };

        const encodedUserName = encodeURIComponent(userName);
        xmlhttp.open("POST", `./Hangman-api.php?action=sendUserName&UserName=${encodedUserName}`, true);
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
                    
                    
                }
            }
        };
    
        xmlhttp.open("GET", "./Hangman-api.php?action=getLeaderboard", true);
        xmlhttp.send();
    }