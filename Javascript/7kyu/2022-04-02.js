// Find the nth digit of a number
// FAILED - unlocked solutions
var findDigit = function(num, nth){
    if(nth <= 0)
      return -1;
     
    var x = Math.abs(num);
    for (var i=1; i < nth; i++){
      x = Math.floor(x/10);
      console.log(x)
    }
    return x%10;
}

// Simple Beads Count
function countRedBeads(n) {
    let red = 0
    if (n <= 1) {
      return 0
    } else {
      for (let i = 2; i <= n; i++) {
        red += 2
      }
    }
    return red
  }

  // Simpler solution to above
  function countRedBeadsOptimal(n) {
    return n < 2 ? 0 : 2 * n - 2; // if n is less than 2, return left side. if greater than 2, return right side
  }

// Count the divisors of a number
function getDivisorsCnt(n){
    let x = 0;
    for(i = 1; i <= n; i++){
      if(n % i == 0){
        x++;
      }
    }
  return x
}

// Folding your way to the moon
function foldTo(distance) {
    let n = 0.0001
    let count = 0
    if (distance < 0) {
      return null
    }
    while (n < distance) {
      n *= 2
      count++
    }
    return count
  }

// Deodorant Evaporator
function evaporator(content, evap_per_day, threshold){ 
    let thresh = (content * 0.01 * threshold)
    let count = 0
    while (content > thresh) {
      content = content - (content * 0.01 * evap_per_day)
      count++
    }
    return count
  }

// Largest pair sum in array
function largestPairSum(numbers)
{
  numbers.sort((a,b) => b - a);
  return numbers[0] + numbers[1];
}

// Printer Errors: exercise in regexp
function printerError(s) {
    const control = new RegExp(/[a-m]/gi)
    found = s.match(control)
    return `${s.length - found.length}/${s.length}`
}