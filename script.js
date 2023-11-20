document.addEventListener("DOMContentLoaded", function () {
    var questionText = document.getElementById('question-text');
    var choicesEl = document.getElementById("choices");
    var submitBtn = document.getElementById("submit");
    var timerDisplay = document.getElementById("timer");
    var currentQuestion = 0;
    var timerSeconds = 60;
    var timerInterval;
    var score = 0;

    var questions = [
        {
            question: "JavaScript is an __________ language?",
            choices: ["A. Object-Oriented", "B. Object-Based", "C. Procedural"],
            correctAnswer: "B. Object-Based"
        },
        {
            question: "Which of the following keywords is used to define a variable in Javascript?",
            choices: ["A. var", "B. let", "C. None of those."],
            correctAnswer: "A. var"
        },
        {
            question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
            choices: ["A. Alert", "B. Crash", "C. Gives a warning"],
            correctAnswer: "C. Gives a warning"

        }
    ];

    function displayQuestion() {
        startTimer();

        if (currentQuestion < questions.length) {
            questionText.textContent = questions[currentQuestion].question;
            choicesEl.innerHTML = "";
            choicesEl.style.listStyleType = "none";

            questions[currentQuestion].choices.forEach((choice, index) => {
                var choicesListItem = document.createElement("li");
                var input = document.createElement("input");
                input.type = "radio";
                input.name = "choice";
                input.value = choice;
                choicesListItem.appendChild(input);
                choicesListItem.appendChild(document.createTextNode(choice));
                choicesEl.appendChild(choicesListItem);
            });
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        clearInterval(timerInterval);
        var quizDoneEl = document.createElement("div")
        quizDoneEl.textContent = "Quiz complete! Score:" + score;
        localStorage.setItem("quizScore", score);
        document.body.appendChild(quizDoneEl);
        resetQuiz();
        setTimeout(function () {
            window.location.href = "result.html"
        })
    }
    function resetQuiz() {
        currentQuestion = 0;
        timerSeconds = 60;
        score = 0;
        displayQuestion();
    }

    function handleSubmission() {
        var selectedChoice = document.querySelector('input[name="choice"]:checked');

        if (selectedChoice) {
            var userAnswer = selectedChoice.value;
            var correctAnswer = questions[currentQuestion].correctAnswer;

            if (userAnswer === correctAnswer) {
                score++

            } else {

                decreaseTimer();
            }

            currentQuestion++;
            displayQuestion();
        } else {
            alert("Please select an answer before submitting.");
        }
    }

    function startTimer() {
        timerInterval = setInterval(function () {
            timerDisplay.textContent = "Time left: " + timerSeconds + " seconds";

            if (timerSeconds <= 0) {
                clearInterval(timerInterval);

                endQuiz();
            } else {
                timerSeconds--;
            }
        }, 1000);
    }

    function decreaseTimer() {
        timerSeconds -= 30;
    }

    submitBtn.addEventListener("click", handleSubmission);
    displayQuestion();


});



