//Javascript
const IDs = ["https://pbs.twimg.com/media/GQdun7FXwAABl16?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk8QrXwAADygT?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk6kfW0AEV_5U?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk6kmWgAA07ea?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk6kgXAAAJny8?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk6kgW4AAulJG?format=png&name=900x900",
    "https://pbs.twimg.com/media/GQdk8Q5WYAAsB7f?format=png&name=900x900"];
let fails = 0;
const stickman = main.querySelector("stickman");
function tryLetter(){
    if(fail){
        fails++;
        stickman.removeElement("src");
        stickman.src=IDs[fails]
        if (fails==6){
            lose();
        }
    }
}