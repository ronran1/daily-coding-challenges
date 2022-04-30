// Persistent bugger
function persistence(num) {
    let count = null
    let num1 = num.toString().split('').map(a => Number(a))
    for (count = 0; num1.length > 1; count++){
      num1 = num1.reduce((a, b) => a * b).toString().split('').map(a => Number(a))
    }
   return count
 }
 