// palindrome?
function isPalindrome(x) {
    const y = x.toLowerCase()
    console.log(y)
     const z = x.split('').reverse().join('').toLowerCase()
   console.log(z)
    return z == y
 
 }

// Parse int from char problem
function getAge(inputString){
    return Number(inputString[0])
  }

// Even or Odd
function even_or_odd(number) {
    if (number % 2 == 0) {
      return "Even"
    } else {
      return "Odd"
    }
  }
  