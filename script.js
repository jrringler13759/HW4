var questions = [
    { question: "What is 8 * 9?", answers: { a: "17", b: "71", c: "72", d: "27"}, correctAnswer: "c"},
    { question: "What is 15 / 3?", answers: { a: "5", b: "-5", c: "3", d: "-3"}, correctAnswer: "a"},
    { question: "What is 3 + 4?", answers: { a: "43", b: "34", c: "-7", d: "7"}, correctAnswer: "d"},
    { question: "How do you spell code?", answers: { a: "doec", b: "odec", c: "code", d: "coed"}, correctAnswer: "c"}
]

var timer = document.getElementById("timer");
var qSpace = document.getElementById("question");
var choices = document.getElementById("choices");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var startBtn = document.getElementById("start");
var rightWrong = document.getElementById("rightWrong");

var secondsLeft = 75;

function timer() {
    //timer counts down from 75 
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
    //when it = 0 , game over/highscore screen
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          
        }
    
      }, 120000);
    
} 


function showQuestion(qnum) {
    //shows a question and waits for an answer to be clicked
    
       question[qnum];
          qSpace.textContent = questions[qnum].question;
          choiceA.textContent = questions[qnum].answers.a;
          choiceB.textContent = questions[qnum].answers.b;
          choiceC.textContent = questions[qnum].answers.c;
          choiceD.textContent = questions[qnum].answers.d;
          
}

function checkAnswer() {
    //when an answer is clicked it checks the answer
    choices.addEventListener("click", function(event) {
        var element = event.target;
      
        // If that element is a button...
        if (element.matches("choiceA") && questions.correctAnswer === "a") {

        } if (element.matches("choiceB") && questions.correctAnswer === "b") {
            
        } if (element.matches("choiceC") && questions.correctAnswer === "c") {
            
        } if (element.matches("choiceD") && questions.correctAnswer === "d") {
            
        }
    //compare to the property value from the question object
    //print right or wrong below the questsion
    //If correct gain points, if incorrect lose points
});
}



var i = 0;
function start() {
    showQuestion(i);
    i++
}


startBtn.addEventListener("click", start);