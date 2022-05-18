// Set alarm
function setAlarm(employed, vacation){
    return employed && vacation ? false : employed && !vacation ? true : !employed && !vacation ? false : !employed && vacation ? false : true 
  }

// Transportation on vacation
function rentalCarCost(d) {
    let total = 40 * d
    return d < 3 ? total : d < 7 && d >= 3 ? total - 20 : total - 50
  }

// Sentence smash
function smash (words) {
    return words.join(' ')
 };

// If/else with ternary
function saleHotdogs(n){
    return n < 5 ? 100*n : n >= 5 && n < 10 ? 95*n : 90*n
  }

// Max/min values of a list
var min = function(list){
  list.sort((a, b) => a - b)
  return list[0];
}

var max = function(list){
  list.sort((a, b) => b - a)
  return list[0];
}

// opposite number
function opposite(number) {
  return number*-1
}

// Squaring an argument
const square = (x) => x * x// Write the "square"-function here

