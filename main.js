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
var minRange;
 // = document.querySelector(".min-range").value;
// var minParsed = parseInt(minRange, 10);

// default range 
var solution = Math.ceil(Math.random() * 100);
console.log(solution);

// max-range-input
var maxRange;
 // = document.querySelector(".max-range").value;
var maxParsed = parseInt(maxRange, 10);

// update button
var updateButton = document.querySelector(".set-range-button");

// min-range statement
var lowNumber = document.querySelector(".min");

// max-range statement
var highNumber = document.querySelector(".max");

// number of guesses-!!Anonymous Function!!

// RANDOM NUMBER
// var  a = "1";
// var b = "100";
// var low = parseInt(a, 10);
// var high = parseInt(b, 10);


// function getSolution(min,max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getSolution(e) {
//   e.preventDefault();
//   min = parseInt(minRange.value) || 1;
//   max = parseInt(minRange.value) || 100;
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// FUNCTIONS

function getSolution() {
  // e.preventDefault();
  solution = Math.floor(Math.random() *(maxRange - minRange + 1) + minRange)
  console.log(solution)
}


// function minNumber(minRange) {
//   lowNumber.value = minRange;
// }

// EVENT LISTENERS

// update range (button update)
updateButton.addEventListener("click", function(e) {
  e.preventDefault();
  minRange = parseInt(document.querySelector(".min-range").value, 10);
  maxRange = parseInt(document.querySelector(".max-range").value, 10);
  getSolution();
})

//   lowNumber.innerText = minRange;
// })




// submit guess (button guess)
// reset game (button reset)
// clear game (button clear)












