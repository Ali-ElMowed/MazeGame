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
    
    
}
