document.addEventListener("DOMContentLoaded", function () {
    var scoreElement = document.getElementById("score");
    var highscoresElement = document.getElementById("highscores");

    var quizScore = localStorage.getItem("quizScore");

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

    highscoresElement.appendChild(backButton);

    var highScoreTitle = document.getElementById("highscore-title");

    highScoreTitle.textContent = "HIGHSCORES";

    function displayHighScores(scores) {

        scores.sort(function (a, b) {
            return b - a;
        });

        var highScoresList = document.createElement("ol");

        scores.forEach(function (score) {
            var scoreListItem = document.createElement("li");
            scoreListItem.textContent = score;
            highScoresList.appendChild(scoreListItem);
        });

        highscoresElement.appendChild(highScoresList);
    }
});


