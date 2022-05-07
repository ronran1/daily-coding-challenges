// Simple string characters
function solve(s){
    let up = 0
    let low = 0
    let num = 0
    let spec = 0
    s = s.split('')
    for (i = 0; i < s.length; i++) {
      if(s[i] == s[i].toUpperCase() && s[i].toLowerCase() != s[i].toUpperCase()) {
        up++
  //       console.log(`${s[i]} is uppercase`)
      } else if (s[i] == s[i].toLowerCase() && s[i].toLowerCase() != s[i].toUpperCase()) {
        low++
  //       console.log(`${s[i]} is lowercase`)
  
      } else if (s[i] == Number(s[i])) {
        num++
  //       console.log(`${s[i]} is num`)
      } else {
        spec++
  //       console.log(`${s[i]} is spec`)
      }
    }
    return [up, low, num, spec]
  }

// Find middle elements
function gimme (triplet) {
    let tripletCopy = [...triplet]
    triplet.sort((a, b) => a - b)
    return tripletCopy.indexOf(triplet[1])
  }

// Sort array by string length
function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
  };

//Find the capitals
var capitals = function (word) {
    let arr = []
    for (i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        arr.push(i)
      }
    }
    return arr
  };

//Number of people in the bus
var number = function(busStops){
    let add = 0
    let sub = 0
    for (let i = 0; i < busStops.length; i++) {
      add += busStops[i][0]
      sub -= busStops[i][1]
    }
    return add + sub
  }
  