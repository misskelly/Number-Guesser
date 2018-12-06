// GLOBAL VARIABLES

// names for challenger one 
var challengerOne = document.querySelector(".name");

// name for challenger two 
var challengerTwo = document.querySelector(".name-input-two");

// guess one number
var guessValueOne = document.querySelector(".guess-input-one");

// guess two number
var guessValueTwo = document.querySelector(".guess-input-two");

// min-range-input
var minRange = document.querySelector(".min-range");

// max-range-input
var maxRange = document.querySelector(".max-range");

// update button
var updateButton = document.querySelector(".set-range-button");

// min-range statement
var lowNumber = document.querySelector(".min");

// max-range statement
var highNumber = document.querySelector(".max");

// number of guesses-!!Anonymous Function!!
// var totalGuesses = 


// FUNCTIONS
// function minNumber(minRange) {
//   lowNumber.value = minRange;
// }

// EVENT LISTENERS

// update range (button update)
updateButton.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(minRange.value);
  lowNumber.innerText = minRange.value;
})

//   lowNumber.innerText = minRange;
// })




// submit guess (button guess)
// reset game (button reset)
// clear game (button clear)












