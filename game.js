window.onload = function () {
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var game = document.getElementById("game");
    var boundries = document.querySelectorAll(".boundary");
    var score = 0;
    var scoreDisplay = document.getElementsByClassName("example")[0];
    var reset = document.createElement("button");
    var status = document.getElementById("status");
    reset.className = "reset";
    reset.innerHTML = "Reset";
    reset.style = scoreDisplay.style;
    reset.style.margin = "5px 720px";
    reset.style.padding = "10px 20px";
    document.body.appendChild(reset);
    start.onclick = function () {
        status.textContent = "You Can Do It!";
        for (var i = 0; i < boundries.length; i++) {
            boundries[i].style.backgroundColor = "#eeeeee";
        }
        
    };
    

    function wining() {
        for (var i = 0; i < boundries.length; i++) {
            var greenBg = boundries[i].style.backgroundColor = "#18f407";
            boundries[i].style.backgroundColor = greenBg;
            boundries[i].removeEventListener("mouseover", losing);
        }
        score = score + 5;
        scoreDisplay.style.backgroundColor = "rgb(154 8 230)";
        scoreDisplay.textContent = "Score:  " + `${score}`;
        status.textContent = "You Win!";
    }
    
}
