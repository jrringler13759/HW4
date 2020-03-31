var questions = [
    { question: "What is 8 * 9?", answers: { a: "17", b: "71", c: "72", d: "27"}, correctAnswer: "c"},
    { question: "What is 15 / 3?", answers: { a: "5", b: "-5", c: "3", d: "-3"}, correctAnswer: "a"},
    { question: "What is 3 + 4?", answers: { a: "43", b: "34", c: "-7", d: "7"}, correctAnswer: "d"},
    { question: "How do you spell code?", answers: { a: "doec", b: "odec", c: "code", d: "coed"}, correctAnswer: "c"}
]

var timer = document.getElementById("timer");
var qSpace = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var startBtn = document.getElementById("start");
var rightWrong = document.getElementById("rightWrong");

function timer() {
    //timer counts down from 75 
    //when it = 0 , game over/highscore screen
} 

function showQuestion() {
    //shows a question and waits for an answer to be clicked
    //when it gets to the end of the array of questions it
    //sends the player to the highscore page.
    //they enter their initials and it saves to local storage
}

function checkAnswer() {
    //when an answer is clicked it checks the answer
    //compare to the property value from the question object
    //print right or wrong below the questsion
    //If correct gain points, if incorrect lose points
}


function start() {
    //hides the start button
    //shows the question with answer choices for an interval
    //and checks answer
    //shows right or wrong and also shows new question on same click
    
}









