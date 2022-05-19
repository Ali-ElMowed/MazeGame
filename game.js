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
        game.addEventListener("mouseleave", cheating)
        status.textContent = "You Can Do It!";
        for (var i = 0; i < boundries.length; i++) {
            boundries[i].style.backgroundColor = "#eeeeee";
        }
        for (var i = 0; i < boundries.length; i++) {
            boundries[i].addEventListener("mouseover", losing,);
        }
        end.addEventListener("mouseover",wining , { once: true });
    };
    reset.onclick = function () {
        for (var i = 0; i < boundries.length; i++) {
            boundries[i].style.backgroundColor = "#eeeeee";
        }
        status.textContent="Begin by moving your mouse over the S.";
        score = 0;
        scoreDisplay.textContent = "Score:  " + `${score}`;
    }
    function losing() {
        for (var i = 0; i < boundries.length; i++) {
            var redBg = boundries[i].style.backgroundColor = "red";
            boundries[i].style.backgroundColor = redBg;
            boundries[i].removeEventListener("mouseover", losing);
            end.removeEventListener("mouseover",wining);
            game.removeEventListener("mouseleave", cheating)

        }
        score = score - 10;
        scoreDisplay.style.backgroundColor = "rgb(154 8 230)"
        scoreDisplay.textContent = "Score:  " + `${score}`;
        status.textContent = "You Lose!";

    }
    function wining() {
        for (var i = 0; i < boundries.length; i++) {
            var greenBg = boundries[i].style.backgroundColor = "#18f407";
            boundries[i].style.backgroundColor = greenBg;
            boundries[i].removeEventListener("mouseover", losing);
            game.removeEventListener("mouseleave", cheating)

        }
        score = score + 5;
        scoreDisplay.style.backgroundColor = "rgb(154 8 230)";
        scoreDisplay.textContent = "Score:  " + `${score}`;
        status.textContent = "You Win!";
    } 
    function cheating() {
            alert("Don't Cheat!");
            losing();
    }
}
