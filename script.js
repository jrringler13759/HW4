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
var quizTitle = document.getElementById("quizTitle");
var instructions = document.getElementById("directions");
var scoreBoard = document.getElementById("score");

var i = 0;
var secondsLeft = 75;





qSpace.style.display = "";
choices.style.display = "";
startBtn.style.display = "inline-grid";
instructions.style.display = "inline-grid";



function timer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = " " + secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time is up");
      window.location.href = "highscores.html";
    }
  }, 1000);
}

//scoreBoard.textContent = " " + score;






function showQuestion(qnum) {
    //shows a question 
    choices.dataset("data-ans", questions[qnum].correctAnswer)
    question[qnum];
        qSpace.textContent = questions[qnum].question;
        choiceA.textContent =  "A: " + questions[qnum].answers.a;
        choiceB.textContent =  "B: " + questions[qnum].answers.b;
        choiceC.textContent =  "C: " + questions[qnum].answers.c;
        choiceD.textContent =  "D: " + questions[qnum].answers.d;
    
        if (qnum === 4){
        
        window.location.href = "highscores.html";
    }    
}




function resetQ () {
    rightWrong.textContent = "Correct!";
    i++;
    if (i < 3){
    showQuestion(i);
  }  
}
    //when an answer is clicked it checks the answer
choices.addEventListener("click", function(event) {
    var element = event.target;
    var correct = choices.getAttribute("data-ans");
    console.log(correct)
        if (element.getAttribute("id") === "a" && correct === "a") {
            resetQ();
        } else if (element.getAttribute("id") === "b" && correct === "b") {
            resetQ();
        } else if (element.getAttribute("id") === "c" && correct === "c") {
            resetQ();
        } else if (element.getAttribute("id") === "d" && correct === "d") {
            resetQ();
        } else{
            rightWrong.textContent = "Incorrect";
            i++;
            showQuestion(i);
            secondsLeft -= 5;
        }      
});


function hideShow() {
    qSpace.style.display = "inline-grid";
    startBtn.style.display = "none";
    instructions.style.display = "none";
    choices.style.display = "";
    quizTitle.style.display = "none";
}

function start() {
    hideShow();
    timer();
    showQuestion(i);   
  
}

startBtn.addEventListener("click", start);







// JavaScript for High Scores Page

var submitIn = document.getElementById("submitInitials");
var highscoresInput = document.getElementById("highscoresInput");
var goBack = document.getElementById("goBcack");
var clearHs = document.getElementById("clearHs");
var initials = document.getElementById("initials");
var listOfHs = document.getElementById("listOfHs");

var highScores = [];

getHs();



function listHs () {
  for (var i = 0; i < highScores.length; i++){
    var hs = highScores[i];
    var li = document.createElement("li");
    li.textContent = hs;
    li.setAttribute("data-index", i);
    listOfHs.appendChild(li);
  }
}

function getHs () {
  var storedHs = JSON.parse(localStorage.getItem("highScores"));
  if (storedHs !== null){
    highScores = storedHs;
  }
  listHs();
}

function storeHs () {
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

submitIn.addEventListener("click", function(event){

  var initialsInput = highScoresInput.value.trim();

  if (initialsInput === "") {
    return;
  }
  highScores.push(initialsInput);
  highScoresInput.value = "";

  storeHs();
  listHs();
});






















