//Disemvowel trolls
function disemvowel(str) {
    const re = /[aeiou]/gi
    str = str.replace(re, '')
    return str;
  }
  
// find the next perfect square
function findNextSquare(sq) {
    let x = sq + 1
    if (!Number.isInteger(Math.sqrt(sq))) {
      return -1
    }
    while (!Number.isInteger(Math.sqrt(x))) {
      x++
    }
    return x
  }
  