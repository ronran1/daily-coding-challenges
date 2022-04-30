// remove string spaces
function noSpace(x){
    return x.split(' ').join('')
    
  }

//Grasshopper summation
var summation = function (num) {
    let total = 0
    for (i = 1; i <= num; i++) {
      total += i
    }
    return total
  }

// Bool to string
function booleanToString(b){
    return b == true ? "true" : "false"
  }
  