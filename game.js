var wordlist = [
["T", "E", "R", "R", "O", "R", "D", "O", "M", "E"],
  ["M","O","N","S","T","R","O","S","I","T", "Y"],
  ["E","X","E","C","U","T","I","O","N"],
  ["D","E","A","T","H","S","H","E","A", "D"],
  ["G","R","I","M","R","E","A","P","E", "R"],
  ["H","O","R","R","O","R","S"]
]
var random = Math.floor((Math.random()*(wordlist.length-1)));
var win_count = 0; 

var guessWord = wordlist[random]; // the word to guess will be chosen from the array above
var wordArr = new Array(guessWord.length);
var errorCount = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < wordArr.length; i++){
  wordArr[i] = "_ ";
}

// prints the guessfield
function printwordArr(){
  for (var i = 0; i < wordArr.length; i++){
  var field = document.getElementById("field");
  var spaces = document.createTextNode(wordArr[i]);
  field.appendChild(spaces);
  }
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var guessButton = function(){
  var f = document.rateformular; 
  var b = f.elements["ratetext"]; 
  var letterSave = b.value; // the letter provided by the user
  letterSave = letterSave.toUpperCase();
  for (var i = 0; i < guessWord.length; i++){
    if(guessWord[i] === letterSave){
      wordArr[i] = letterSave + " ";
      var truthCheck = true;
    }
  b.value = "";
  }
  
  //deletes the guessfield and replaces it with the new one
  var field = document.getElementById("field");
  field.innerHTML=""; 
  printwordArr();
  
  // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
  if(!truthCheck){
    var wrong_check = document.getElementById("wrong_check");
    var spaces = document.createTextNode(" " + letterSave);
    wrong_check.appendChild(spaces); 
    errorCount++;
    var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + errorCount + ".png";
  }
  
  //checks if all letters have been found
  var finalCheck = true;
  for (var i = 0; i < wordArr.length; i++){
    if(wordArr[i] === "_ "){
      finalCheck = false;
    }
  }
  if(finalCheck){
    window.alert("CONGRATULATIONS, YOU LIVED!");
    window.alert("Win Count: " + win_count)
    win_count++;
  }
  
  //once you got six wrong letters, you lose
  if(errorCount === 6){
    window.alert("YOU HAVE BEEN KILLED.");
  }
}

function init(){
  printwordArr();
}

window.onload = init;