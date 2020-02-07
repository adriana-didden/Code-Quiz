//INDEX.HTML JS
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementsByClassName("results");
var startBTN = document.getElementById("start");
var score = 0;
var time = 40;
var timeId;
var timerEl = document.getElementById("timer");
var count = 0
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        question:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

function startQuiz() {
    buildQuiz();
    timeId = setInterval(timeCounter, 1000);
    timeCounter()

}

function timeCounter() {

    time--;
    timerEl.textContent = "time: " + time
    if (time <= 0) {
        clearInterval(timeId);
        endQuiz();
    }

    console.log(time);
}

function check(guess) {
    console.log(questions[count].choices[guess] === questions[count].answer)
    count++
    buildQuiz()

    if (guess === true) {
        score+=10;
        console.log("score:" + score);
    } else {
        time -= 10;
    }
}


function buildQuiz() {
    quizContainer.innerHTML = ""
    console.log(quizContainer)
    var question = questions[count].question;
    var title = document.createElement('h1')
    title.textContent = question
    quizContainer.appendChild(title);

    var options = questions[count].choices;
    quizContainer.appendChild(document.createElement("br"));
    var listOfQuestion = document.createElement('ul')
    for (let i = 0; i < options.length; i++) {

        var listItem = document.createElement("li");
        listItem.innerHTML = "<button onclick = 'check(" + i + ")'>" + options[i] + "</button>"
        listOfQuestion.appendChild(listItem);

        quizContainer.appendChild(listOfQuestion);
    }
    // endQuiz();

};
function storeScore() {
    localStorage.setItem("score", JSON.stringify(score));
  }
  storeScore();
function endQuiz() {
    window.location.href = "highScores.html";


}


//HIGHSCORE.HTML JS