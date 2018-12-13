// ****************
// GLOBAL VARIABLES
// ****************


// names for challenger one 
var challengerOne = document.querySelector(".name-input-one");

// name for challenger two 
var challengerTwo = document.querySelector(".name-input-two");

// name output for challenger one
var chalOneUpdateName = document.querySelector(".name-output-one");

// name output for challenger two
var chalTwoUpdateName = document.querySelector(".name-output-two");

// challenger input fields 
var playerForm = document.querySelector(".player-form");
var playerInput = document.querySelectorAll(".player-input");

// guess one number
var guessValueOne = document.querySelector(".guess-input-one");

// guess two number
var guessValueTwo = document.querySelector(".guess-input-two");

// min-range-input
var minRangeInput = document.querySelector(".min-range");

// max-range-input
var maxRangeInput = document.querySelector(".max-range");

// min-range statement
var lowNumber = document.querySelector(".min");

// max-range statement
var highNumber = document.querySelector(".max");

// challenger 1 guess
var guessOutputOne = document.querySelector(".guess-output-one");

// challenger 2 guess
var guessOutputTwo = document.querySelector(".guess-output-two");

// form Buttons
var submitButton = document.querySelector(".submit");
var resetButton = document.querySelector(".reset");
var clearButton = document.querySelector(".clear");
var updateButton = document.querySelector(".set-range-button");

// default range 
var solution = Math.ceil(Math.random() * 100);
console.log(solution);

// changes the max range input from a string to a number
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

// challenger 1 hint statement (high/low)
var guessHintOne = document.querySelector(".hint-one");

// challenger 2 hint statement (high/low)
var guessHintTwo = document.querySelector(".hint-two");


// ************************
// UNASSIGNED GLOBAL VARIABLES
// ************************


// reset to new random number
var resetNewNumber;

// min-range-input
var minRange;

// max-range-input
var maxRange;



// ***************
// EVENT LISTENERS
// ***************


updateButton.addEventListener("click", updateClick); 
submitButton.addEventListener("click", submitClick);
clearButton.addEventListener("click", clearClick);
resetButton.addEventListener("click", resetClick);


// Enable and Disable 
playerForm.addEventListener("keyup", enableButtons);
playerForm.addEventListener("keyup", disableButtons);



// ****************
// ALL FUNCTIONS
// ****************


function updateClick(e) {
  e.preventDefault();
  updateStaticRange();
  updateNumberGenerator();
  onlyNumbersRange();
  checkRange()
}

function clearClick(e) {
  e.preventDefault();
  clearGuessValues();
  clearChalValues();
  resetRange();
  resetGuesses();
}

function submitClick(e) {
  e.preventDefault();
  chalOneHighLow();
  chalTwoHighLow();
  chalNameToStatic();
  onlyNumbersGuess()
  chalTwoGuessInRange();
  chalOneGuessInRange();
  emptyChallenger();
  guessToStatic();
}

function resetClick(e) {
  e.preventDefault();
  minRange = parseInt(document.querySelector(".min-range").value, 10) || 1;
  maxRange = parseInt(document.querySelector(".max-range").value, 10) || 100;
  solution = Math.floor(Math.random() *(maxRange - minRange + 1) + minRange)
  return getSolution();
  resetGuesses();
}

function clearGuessValues() {
  guessValueOne.value = "";
  guessValueTwo.value = "";
}

function resetGuesses() {
  guessOutputOne.innerText = "?";
  guessOutputTwo.innerText = "?";
}
  
function updateStaticRange() {
  lowNumber.innerText = minRangeInput.value;
  highNumber.innerText = maxRangeInput.value;
}

// update range for number generator once the min and max input fields are entered by challengers
function updateNumberGenerator() {
  minRange = parseInt(document.querySelector(".min-range").value, 10);
  maxRange = parseInt(document.querySelector(".max-range").value, 10);
  getSolution();
}

// creates new solution once min/max range is updated
function getSolution() {
  solution = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
  console.log(solution + " random generated number");
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
  for (var i = 0; i < playerInput.length; i++) {
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

// update challenger names to latest score cards
function chalNameToStatic() {
  chalOneUpdateName.innerText = challengerOne.value;
  chalTwoUpdateName.innerText = challengerTwo.value;
}

// resets range to default 1 to 100
function resetRange() {
  minRangeInput.value = 1;
  maxRangeInput.value = 100;
}

// resets static latest score card guesses
function resetGuesses() {
  guessOutputOne.innerText = "?";
  guessOutputTwo.innerText = "?";
}
  
function checkRange() {
  if (!minRangeInput.checkValidity()){
    alert("Whoops! Min Range number must be between 0 and 999!")
  };
  if (!maxRangeInput.checkValidity()){
    alert("Whoops! Max Range number must be between 10 and 999!")
  };
  if (minRangeInput.value > maxRange.value) {
    alert("Uh Oh! Min Range number must be lower than Max Range number!")
  };
  if (maxRangeInput.value < minRangeInput.value){
    alert("Uh Oh! Max Range number must be higher than Min Range number!")
  };
}

function guessToStatic() {
  guessOutputOne.innerText = guessValueOne.value;
  guessOutputTwo.innerText = guessValueTwo.value;
}

// The function will grab the inner text of the .hint-one and .hint-two  which will then be updated to the value of a function. the function will be a boolean which compares the argument of guessValueOne and guessValueTwo with the getSolution().

function chalOneHighLow() {
  if (guessValueOne.value > solution) {
    guessHintOne.innerText = "that's too high";
  } else if (guessValueOne.value < solution) {
    guessHintOne.innerText = "that's too low";
  } else {
    guessHintOne.innerText = "BOOM!";
    alert("BOOM!");
  }
}

function chalTwoHighLow() {
  if (guessValueTwo.value > solution) {
    guessHintTwo.innerText = "that's too high";
  } else if (guessValueTwo.value < solution) {
    guessHintTwo.innerText = "that's too low";
  } else {
    guessHintTwo.innerText = "BOOM!";
    alert("BOOM!");
  }
}

function chalTwoGuessInRange() {
  if (parseInt(guessValueTwo.value) < parseInt(minRangeInput.value)) {
    clearGuessValues();
    alert("Guess can not be lower than the Min Range");
  } else if (parseInt(guessValueTwo.value) > parseInt(maxRangeInput.value)) {
    alert("Guess can not be higher than the Max Range");
    clearGuessValues();  
  } 
}

function chalOneGuessInRange() {
  if (parseInt(guessValueOne.value) < parseInt(minRangeInput.value)) {
    clearGuessValues();
    alert("Guess can not be lower than the Min Range");
  } else if (parseInt(guessValueOne.value) > parseInt(maxRangeInput.value)) {
    alert("Guess can not be higher than the Max Range");
    clearGuessValues();  
  } 
}

function onlyNumbersGuess() {
  if (guessValueOne.value == "" || guessValueTwo.value == "") {
    alert("Please change guess value :)");
  }
}

function onlyNumbersRange() {    
  if (minRangeInput.value == "" || maxRangeInput == "") {
    alert("Please change guess value :)");
  }
}

function emptyChallenger() {
  if (challengerOne.value == "" || challengerTwo.value == "") {
    alert("Please update Challenger Name");
  }
}