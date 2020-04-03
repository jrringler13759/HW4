
// JavaScript for High Scores Page
var clearHs = document.getElementById("clearHs");
var listOfHs = document.getElementById("listOfHs");

var highScores = [];

function getHs () {
    var storedHs = JSON.parse(localStorage.getItem("highScores"));
    if (storedHs){
      highScores = storedHs;
    } 
  }

function listHs () {
  for (var i = 0; i < highScores.length; i++){
    var li = document.createElement("li");
    li.setAttribute("class", "initialsItem");
    li.textContent = highScores[i].initials + " - " + highScores[i].score;
    listOfHs.appendChild(li);
  }
}

clearHs.addEventListener("click", function(){
    localStorage.removeItem("highScores");
    location.reload();
});


getHs();
listHs();