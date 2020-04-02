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
var score = 0;

qSpace.style.display = "none";
choices.style.display = "none";
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

//nothing is making this go to the next question. Do I need  for loop?
function showQuestion(qnum) {
    //shows a question 
    choices.setAttribute("data-ans", questions[qnum].correctAnswer)
    question[qnum];
        qSpace.textContent = questions[qnum].question;
        choiceA.textContent =  "A: " + questions[qnum].answers.a;
        choiceB.textContent =  "B: " + questions[qnum].answers.b;
        choiceC.textContent =  "C: " + questions[qnum].answers.c;
        choiceD.textContent =  "D: " + questions[qnum].answers.d;
    
        if (qnum === 4){
            console.log(qnum);
        window.location.href = "highscores.html";
    }    
}

function resetQ () {
    score++;
    scoreBoard.textContent = " " + score;
    i++;
    showQuestion(i);
    
}
    //when an answer is clicked it checks the answer
   choices.addEventListener("click", function(event) {
        var element = event.target;
        var correct = choices.getAttribute("data-ans");
        console.log(correct)
        if (element.getAttribute("id") === "a" && correct === "a") {
            rightWrong.textContent = "Correct!";
            resetQ();
        } else if (element.getAttribute("id") === "b" && correct === "b") {
            rightWrong.textContent = "Correct!"; 
            resetQ();
        } else if (element.getAttribute("id") === "c" && correct === "c") {
            rightWrong.textContent = "Correct!";
            resetQ();
        } else if (element.getAttribute("id") === "d" && correct === "d") {
            rightWrong.textContent = "Correct!";
            resetQ();
        } else{
            rightWrong.textContent = "Incorrect";
            i++;
            showQuestion(i);
            secondsLeft -= 5;
        }      
});


//I CAN'T GET THE NEXT QUESTION TO COME UP AFTER ANSWERING





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

// JavaScript for Highscored Page
/*
var submitIn = document.getElementById("submitInitials");
var highscoresInput = document.getElementById("highscoresInput");
var goBack = document.getElementById("goBcack");
var clearHs = document.getElementById("clearHs");
var initials = document.getElementById("initials");




function renderHs() {
    // Clear todoList element and update todoCountSpan
    listOfHs.innerHTML = "";
  
    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
  
      var hs = document.createElement("p");
      li.textContent = todo;
      todoList.appendChild(li);
    }
  }


  function storeTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  // When form is submitted...
  todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var todoText = todoInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  });
  

//when they click submit the input and button dissapear and then the list appears with the appended entry

//for loop? takes the entry and appends it with a 1 then a 2. and so on??
*/