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
var mainDiv = document.getElementById("mainDiv");

var highscoresInput = document.getElementById("highscoresInput");
var submitIn = document.getElementById("submitInitials");
var highScores = [];

var i = 0;
var secondsLeft = 75;
var timerInterval;

function showInstructions () {
  qSpace.style.display = "none";
  choices.style.display = "none";
  mainDiv.style.display = "inline-grid";
  highscoresInput.style.display = "none";
}

function timer() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = " " + secondsLeft;
    if(secondsLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function showQuestion(qnum) {
  if (qnum < 4){
  choices.setAttribute("data-ans", questions[qnum].correctAnswer)
  question[qnum];
      qSpace.textContent = questions[qnum].question;
      choiceA.textContent =  "A: " + questions[qnum].answers.a;
      choiceB.textContent =  "B: " + questions[qnum].answers.b;
      choiceC.textContent =  "C: " + questions[qnum].answers.c;
      choiceD.textContent =  "D: " + questions[qnum].answers.d;
  } else {
    endGame();
  }         
}

function getHs () {
  var storedHs = JSON.parse(localStorage.getItem("highScores"));
  if (storedHs !== null){
    highScores = storedHs;
  }
}

function resetQ () {
  i++;
  showQuestion(i); 
}

function storeHs () {
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function startGame() {
  qSpace.style.display = "inline-grid";
  choices.style.display = "";
  startBtn.style.display = "none";
  instructions.style.display = "none";
  quizTitle.style.display = "none";
}

function endGame() {
  highscoresInput.style.display = "inline-grid";
  qSpace.style.display = "none";
  choices.style.display = "none";
  rightWrong.textContent = "";
  clearInterval(timerInterval);
}

function start() {
  startGame();
  timer();
  showQuestion(i);   

}

choices.addEventListener("click", function(event) {
  var element = event.target;
  var correct = choices.getAttribute("data-ans");
  if (element.getAttribute("id") === correct) {
    rightWrong.textContent = "Correct!";
  } else {
      rightWrong.textContent = "Incorrect";
      secondsLeft -= 5;
  } 
  resetQ();        
});

startBtn.addEventListener("click", start);

submitIn.addEventListener("click", function(){
  var initials = document.getElementById("initials");
  var initialsInput = initials.value.trim();
  if (initialsInput === "") {
    return;
  }
  var gameInfo = {
    score: secondsLeft,
    initials: initialsInput
  }
  highScores.push(gameInfo);
  initialsInput.value = "";
  
  storeHs();
  location.href = "highscores.html";
 
});

getHs();

showInstructions();



