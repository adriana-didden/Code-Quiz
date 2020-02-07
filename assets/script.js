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
        return;

    }

    console.log(time);

}

function check(guess) {
    console.log(questions[count].choices[guess] === questions[count].answer)
    count++
    buildQuiz()

    if (guess === true) {
        score++
    } else if (time > 0) {
        time -= 5;
    } else if (time <= 0) {
        endQuiz();
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
    // var name = "radio" + i;
    var listOfQuestion = document.createElement('ul')
    for (let i = 0; i < options.length; i++) {

        var listItem = document.createElement("li");
        listItem.innerHTML = "<button onclick = 'check(" + i + ")'>" + options[i] + "</button>"
        listOfQuestion.appendChild(listItem);

        quizContainer.appendChild(listOfQuestion);

    }
    endQuiz();

};
function endQuiz() {
    window.location.href = "highScores.html";


}
  //timed quiz on javascript fundamentals
//stores high scores so i can gauge my progress to my peers

//click start button
    //timer begins and presented a question

    //when answer is clicked, the next question appears

    //if question is answered incorrectly time is subtracted from timer

    //if all questions are completed OR the timer = 0 the quiz is over

    //when the quiz is over i can save my initials and score



    //submit URL of github and functional deployed version

    //add readme!