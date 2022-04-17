// Multiples of 3 or 5 - overly complicated solution but at least i understand the reduce function lol
function solution(number){
    let array = []  
    for (i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        array.push(i)
      }
    }
    return (array.length == 0) ? 0 : array.reduce((a, b) => a + b)
  }
  