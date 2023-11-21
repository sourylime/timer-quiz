document.addEventListener("DOMContentLoaded", function () {
    var scoreElement = document.getElementById("score");
    var highscoresElement = document.getElementById("highscores");

    var quizScore = localStorage.getItem("quizScore");

    var booodyEl = document.getElementById("booody");

    if (booodyEl) {
        booodyEl.style.backgroundColor = "#d896ff"
    }

    if (scoreElement) {
        scoreElement.style.marginLeft = "400px"
        scoreElement.style.fontSize = "25px"
        scoreElement.style.color = "#800080"
    }
    var scoreTitle = document.getElementById("scoreTitle");

    if (scoreTitle) {
        scoreTitle.style.marginLeft = "350px"
        scoreTitle.style.fontSize = "35px"
        scoreTitle.style.color = "#800080"
    }


    if (quizScore !== null) {
        scoreElement.textContent = "Your Score: " + quizScore;


        var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        displayHighScores(highScores);


        highScores.push(parseInt(quizScore));


        localStorage.setItem("highScores", JSON.stringify(highScores));
    } else {
        scoreElement.textContent = "Score not available";
    }

    var backButton = document.createElement("button");
    backButton.textContent = "Back to Home";
    backButton.addEventListener("click", function () {
        window.location.href = "index.html";

    });
    if (backButton) {
        backButton.style.marginLeft = "930px"
    }

    highscoresElement.appendChild(backButton);

    var highScoreTitle = document.getElementById("highscore-title");

    highScoreTitle.textContent = "HIGHSCORES";
    if (highScoreTitle) {
        highScoreTitle.style.color = "#800080";
        highScoreTitle.style.marginLeft = "420px";
        highScoreTitle.style.marginTop = "10px";
    }

    function displayHighScores(scores) {

        scores.sort(function (a, b) {
            return b - a;
        });

        var highScoresList = document.createElement("ol");

        if (highScoresList) {
            highScoresList.style.marginLeft = "425px";
            highScoresList.style.color = "#800080"

        }

        scores.forEach(function (score) {
            var scoreListItem = document.createElement("li");
            scoreListItem.textContent = score;
            highScoresList.appendChild(scoreListItem);
        });

        highscoresElement.appendChild(highScoresList);
    }
});


