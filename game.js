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

    var timeContainer = document.createElement("div");

    var live = document.createElement("div");
    var livetext = document.createElement("h3");
    livetext.innerHTML = "Live";
    var liveTimer = document.createElement("h3");
    liveTimer.className = "liveTimer";
    liveTimer.innerHTML = "0:0.0";
    live.className = "live";
    live.appendChild(livetext);
    live.appendChild(liveTimer);

    var last = document.createElement("div");
    var lasttext = document.createElement("h3");
    lasttext.innerHTML = "last";
    var lastTimer = document.createElement("h3");
    lastTimer.className = "lastTimer";
    lastTimer.innerHTML = "0:0.0";
    last.className = "last";
    last.appendChild(lasttext);
    last.appendChild(lastTimer);

    var best = document.createElement("div");
    var besttext = document.createElement("h3");
    besttext.innerHTML = "best";
    var bestTimer = document.createElement("h3");
    bestTimer.className = "bestTimer";
    bestTimer.innerHTML = "0:0.0";
    best.className = "best";
    best.appendChild(besttext);
    best.appendChild(bestTimer);

    timeContainer.appendChild(live);
    timeContainer.appendChild(last);
    timeContainer.appendChild(best);
    timeContainer.style.display = "flex";
    document.body.appendChild(timeContainer);
    timeContainer.style.justifyContent = "space-between";
    timeContainer.style.maxWidth = "300px";
    timeContainer.style.marginLeft = "600px";
    var record=[];
    var count = 0;
    var count1 = 0;


    var check = null;
    function printDuration() {
        if (check == null) {
            var cnt = 0;

            check = setInterval(function () {
                cnt += 1;
                liveTimer.innerHTML ="0:0." +cnt;
                count1 = cnt;
                count=liveTimer.innerHTML;
                
            }, 100);
            record.push(count1);
            

        }
    }
    function stop() {
        clearInterval(check);
        lastTimer.innerHTML ="0:0."+record[record.length-1];
        bestTimer.innerHTML ="0:0."+Math.min.apply(Math,record);
        check = null;
    }
      




    start.onclick = function () {
        game.addEventListener("mouseleave", cheating)
        status.textContent = "You Can Do It!";
        for (var i = 0; i < boundries.length; i++) {
            boundries[i].style.backgroundColor = "#eeeeee";
        }
        for (var i = 0; i < boundries.length; i++) {
            boundries[i].addEventListener("mouseover", losing,);
        }
        end.addEventListener("mouseover", wining, { once: true });
        printDuration();
    }

    reset.onclick = function () {
        for (var i = 0; i < boundries.length; i++) {
            boundries[i].style.backgroundColor = "#eeeeee";
        }
        status.textContent = "Begin by moving your mouse over the S.";
        score = 0;
        scoreDisplay.textContent = "Score:  " + `${score}`;
        record=[];
        count=0;
        liveTimer.innerHTML ="0:0.0";
        lastTimer.innerHTML ="0:0.0";
        bestTimer.innerHTML ="0:0.0";
    }
    function losing() {
        for (var i = 0; i < boundries.length; i++) {
            var redBg = boundries[i].style.backgroundColor = "red";
            boundries[i].style.backgroundColor = redBg;
            boundries[i].removeEventListener("mouseover", losing);
            end.removeEventListener("mouseover", wining);
            game.removeEventListener("mouseleave", cheating)

        }
        stop();
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
        stop();
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
