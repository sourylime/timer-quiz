document.addEventListener("DOMContentLoaded", function () {

    var scoreElement = document.getElementById("score");
    var highscoresElement = document.getElementById("highscores");

    var quizScore = localStorage.getItem("quizScore");


    if (quizScore !== null) {
        scoreElement.textContent = "Your Score: " + quizScore;
    } else {
        scoreElement.textContent = "Score not available";
    }

    // You can add more logic here to display high scores or perform other actions

    // Example: Display a button to go back to the home page
    var backButton = document.createElement("button");
    backButton.textContent = "Back to Home";
    backButton.addEventListener("click", function () {
        window.location.href = "index.html"; // Replace with the actual home page URL
    });
    highscoresElement.appendChild(backButton);
});
