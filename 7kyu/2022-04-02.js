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

