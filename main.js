// GLOBAL VARIABLES


//player input form
var playerForm = document.querySelector(".player-form")
var playerInput = document.querySelectorAll(".player-input");

// names for challenger one 
var challengerOne = document.querySelector(".name-input-one");

// name for challenger two 
var challengerTwo = document.querySelector(".name-input-two");

// name output for challenger one
var chalOneUpdateName = document.querySelector(".name-output-one");

//name output for challenger two
var chalTwoUpdateName = document.querySelector(".name-output-two");

// guess one number
var guessValueOne = document.querySelector(".guess-input-one");

// guess two number
var guessValueTwo = document.querySelector(".guess-input-two");

// min-range-input
var minRangeInput = document.querySelector(".min-range");

// max-range-input
var maxRangeInput = document.querySelector(".max-range");

// update button
var updateButton = document.querySelector(".set-range-button");

// min-range statement
var lowNumber = document.querySelector(".min");

// max-range statement
var highNumber = document.querySelector(".max");

// challenger 1 guess
var guessOutputOne = document.querySelector(".guess-output-one");

// challenger 2 guess
var guessOutputTwo = document.querySelector(".guess-output-two");

// Form Buttons
var submitButton = document.querySelector(".submit");
var resetButton = document.querySelector(".reset");
var clearButton = document.querySelector(".clear");


// min-range-input
var minRange;

// default range 
var solution = Math.ceil(Math.random() * 100);
console.log(solution);

// max-range-input
var maxRange;

var maxParsed = parseInt(maxRange, 10);

// update button
var updateButton = document.querySelector(".set-range-button");

// min-range statement
var lowNumber = document.querySelector(".min");

// max-range statement
var highNumber = document.querySelector(".max");

// challenger 1 guess
var guessOutputOne = document.querySelector(".guess-output-one");

// challenger 2 guess
var guessOutputTwo = document.querySelector(".guess-output-two");

// submit button
var submitButton = document.querySelector(".submit");

// reset button
var resetButton = document.querySelector(".reset");

// reset to new random number
var resetNewNumber

// clear button
clearButton = document.querySelector(".clear");


// FUNCTIONS

function getSolution() {
  solution = Math.floor(Math.random() *(maxRange - minRange + 1) + minRange)
  console.log(solution)
}

function clearGuessValues() {
  guessValueOne.value = "";
  guessValueTwo.value = "";
}

function clearChalValues() {
  challengerOne.value = "Challenger 1";
  challengerTwo.value = "Challenger 2";
}

function enableButtons() {
  // var playerInputArray = Array.from(playerInput);
  console.log(playerInput);
  for (var i = 0; i < playerInput.length; i++) {
    console.log(playerInput[i].value)
    if (playerInput[i].value.length > 0) {
      resetButton.disabled = false;
      clearButton.disabled = false;      
    }
  }
}

function disableButtons() {
  if (playerInput[0].value.length === 0
    && playerInput[1].value.length === 0
    && playerInput[2].value.length === 0
    && playerInput[3].value.length === 0) {
    clearButton.disabled = true;
    resetButton.disabled = true;
  }
}

function resetRange() {
  minRangeInput.value = 1;
  maxRangeInput.value = 100;
}

function resetGuesses() {
  guessOutputOne.innerText = "?";
  guessOutputTwo.innerText = "?";
}
  

// EVENT LISTENERS

// update range for static numbers in card row 2
updateButton.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(minRangeInput.value);
  lowNumber.innerText = minRangeInput.value;
  console.log(maxRangeInput.value);
  highNumber.innerText = maxRangeInput.value;
})

// update range for number generator(button update)
updateButton.addEventListener("click", function(e) {
  e.preventDefault();   
  minRange = parseInt(document.querySelector(".min-range").value, 10);
  maxRange = parseInt(document.querySelector(".max-range").value, 10);
  getSolution();
})

// update challenger one guess (button submit guess)
submitButton.addEventListener("click", go)
function go(e) {
  e.preventDefault();
  console.log(guessValueOne.value);
  guessOutputOne.innerText = guessValueOne.value;
  console.log(guessValueTwo.value);
  guessOutputTwo.innerText = guessValueTwo.value;
};

// update challenger names to latet score cards using submit guess button
submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(challengerOne.value);
  chalOneUpdateName.innerText = challengerOne.value;
  console.log(challengerTwo.value);
  chalTwoUpdateName.innerText = challengerTwo.value;
})


clearButton.addEventListener("click", function(e) {
  e.preventDefault();
});


// Enable and Dis
playerForm.addEventListener("keyup", enableButtons);
playerForm.addEventListener("keyup", disableButtons);


// submit guess (button guess)

// reset game (button reset)
resetButton.addEventListener("click", function(e) {
  e.preventDefault();
  minRange = parseInt(document.querySelector(".min-range").value, 10) || 1;
  maxRange = parseInt(document.querySelector(".max-range").value, 10) || 100;
  solution = Math.floor(Math.random() *(maxRange - minRange + 1) + minRange)
  return getSolution();
})

clearButton.addEventListener("click", function(e) {
  e.preventDefault();
  clearGuessValues();
  clearChalValues();
  resetRange();
  resetGuesses();
})