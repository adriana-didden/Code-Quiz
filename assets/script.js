var quizContainer = document.getElementsByClassName("quiz");
var resultsContainer = document.getElementsByClassName("results");
var startBTN = document.getElementById("start");
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

}

function buildQuiz(){
for ( var i = 0; i < questions.length; i++ ) {
    var question = questions[i].question;
    document.write (question);
    
    var options = questions[i].choices;
    document.body.appendChild(document.createElement("br"));
     var name = "radio"+i; 
    for ( var opt in options ) {
    
      var radioEle = document.createElement("input");
      radioEle.type = "radio";          
      radioEle.value = options[opt];
      radioEle.name = name;
      document.body.appendChild(radioEle);
      var label = document.createElement("Label");
      label.innerHTML = options[opt];
      document.body.appendChild(label);
      document.body.appendChild(document.createElement("br"));
    }
    
    document.body.appendChild(document.createElement("br"));
    
  }
};

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