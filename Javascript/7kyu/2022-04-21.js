//Narcissistic numbers
function isNarcissistic(n){
    let n1 = n.toString().split('')
    let arr = []
    for (i = 0; i < n1.length; i++) {
      arr.push(Math.pow(n1[i], n1.length))
    }
    arr = arr.reduce((a, b) => a + b)
    return n == arr
  }
  
// Filter list
function filter_list(l) {
    return l.filter((a) => typeof a == 'number')
  }
// Odd or even?
function oddOrEven(array) {
    if (array.length == 0) {
      array.push(0)
    }
    let result = array.reduce((a, b) => a + b)
    return result % 2 == 0  ? "even" : "odd"
 }
 