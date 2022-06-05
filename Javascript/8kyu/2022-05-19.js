// Lario and Muigi pipe problem
function pipeFix(numbers){
    let newArr = []
    for (i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
      newArr.push(i)
    }
    return newArr
  }

//Square (n) sum
function squareSum(numbers){
    return numbers.length !== 0 ? numbers.map(x => x*x).reduce((a, b) => a + b) : 0
  }

//Invert values
function invert(array) {
    return array.map(x => -x)
 }
 