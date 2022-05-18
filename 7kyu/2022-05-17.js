// Friend or foe
function friend(friends){
    let tru = []
    friends.forEach(friend => {
      if(friend.length == 4) {
        tru.push(friend)
      }
    })
    return tru
  }

// Summing a number's digits
function sumDigits(number) {
    let str = Math.abs(number).toString()
    return Number(str.split('').reduce((a, b) => Number(a) + Number(b)))
  }

// Sort arrays
sortme = function( names ){
    return names.sort()
  }

// Ones and zeroes
const binaryArrayToNumber = arr => {
    let arr1 = arr.join('')
    let num = arr1.toString()
    return parseInt(num, 2)
  };

// Driving school series #1
function passed (list) { 
    let newList = list.filter(a => a <= 18)
    return newList.length == 0 ? "No pass scores registered." : Math.round(newList.reduce((a, b) => a + b) / newList.length)
  } 

// Binary addition
function addBinary(a,b) {
    return (a+b).toString(2)
  }



