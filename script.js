var questions = [
    { question: "What is 8 * 9?", answers: { a: "17", b: "71", c: "72", d: "27"}, correctAnswer: "c"},
    { question: "What is 15 / 3?", answers: { a: "5", b: "-5", c: "3", d: "-3"}, correctAnswer: "a"},
    { question: "What is 3 + 4?", answers: { a: "43", b: "34", c: "-7", d: "7"}, correctAnswer: "d"},
    { question: "How do you spell code?", answers: { a: "doec", b: "odec", c: "code", d: "coed"}, correctAnswer: "c"}
]

var timerEl = document.getElementById("timer");
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
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      window.location.href = "highscores.html";
    }
    //lose time for incorrect answers

  }, 1000);
}


function showQuestion(qnum) {
    //shows a question 
    
    question[qnum];
        qSpace.textContent = questions[qnum].question;
        choiceA.textContent = questions[qnum].answers.a;
        choiceB.textContent = questions[qnum].answers.b;
        choiceC.textContent = questions[qnum].answers.c;
        choiceD.textContent = questions[qnum].answers.d;
    if (qnum === null){
        window.location.href = "highscores.html";
    }    
}

function checkAnswer() {
    //when an answer is clicked it checks the answer
    choiceA.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("choiceA") && questions.correctAnswer === "a") {
            rightWrong.textContent = "Correct!";
        }
    }); 
    choiceB.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("choiceB") && questions.correctAnswer === "b") {
            rightWrong.textContent = "Correct!";
        }
    }); 
    choiceC.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("choiceC") && questions.correctAnswer === "c") {
            rightWrong.textContent = "Correct!";
        } 
    });
    choiceD.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("choiceD") && questions.correctAnswer === "d") {
            rightWrong.textContent = "Correct!";
        } else{
            rightWrong.textContent = "Incorrect";
        }
   
});

}

function hideStart() {
    startBtn.style.display = "none";
}


var i = 0;
function start() {
    hideStart();
    timer();
    showQuestion(i);
    checkAnswer();
    i++;
}


startBtn.addEventListener("click", start);