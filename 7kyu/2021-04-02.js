/* First date I'm keeping track of the kata solutions. This file will be a historical archive. Dates range from 2022-04-02 -> 2022-03-15. To check out more details, view my codewars profile @ https://codewars.com/users/ronran1 */

// 8 kyu

// Multiply: 18 days ago
function multiply(a, b){
    return(a * b)
  }

// Convert boolean values to strings 'Yes' or 'No': 18 days ago
function boolToWord( bool ){
    if (bool === true) {
      return("Yes")
    } else if (bool === false) {
      return ("No")
      } else {
        return ("invalid") // escape if bool/truthy value is not passed
      }
    }

// Remove first and last character: 18 days ago
function removeChar(str) {
    let x = str.substring(1, str.length-1)
    return(x)
  };
  
// Sum of positives: 18 days ago
function positiveSum(arr) {
    let sum = 0
    for (i = 0; i <= arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i]
      }
    }
    return(sum)
  }

// Sum arrays: 18 days ago
function sum (numbers) {
    let total = 0
    for (i = 0; i < numbers.length; i++) {
      total += numbers[i]
    }
    return(total)
      
  };

// Beginner Series #2 Clock: 16 days ago
function past(h, m, s){
    //#Happy Coding! ^_^
    let total = 0
    h *= 3600000
    m *= 60000
    s *= 1000
    if (0 <= h <= 23 || 0 <= m <= 59 || 0 <= s <= 59) {
      return(h+m+s)
    } else {
      return("Invalid input")
    }
  }

// How good are you really?: 15 days ago
function betterThanAverage(classPoints, yourPoints) {
    let total = 0
    let avg = classPoints.forEach((classpts) => {
      total += classpts
      });
    total /= classPoints.length
    return (total < yourPoints) ? true : false
  }

// Count of positives/sum of negatives: 15 days ago
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) {
      return([])
    } else {
        let positives = input.filter(pos => pos > 0)
        let negatives = input.filter(neg => neg < 0)
        let sumNeg = negatives.reduce((a, b) => a + b, 0)
        return [positives.length, sumNeg];
    }
  }

// Beginner - Lost without a Map: 15 days ago
function maps(x){
    let y = x.map((num) => num*2)
    return y
  }

// Reversed Strings: 12 days ago
function solution(str){
    let y = str.split('')
    y.reverse()
    return(y.join(''))
  }

// Count by X: 12 days ago
function countBy(x, n) {
    let z = [];
    for (i = 1; i <= n; i++) {
      z.push(x*i)
    }
    return z;
  }

// String Repeat: 12 days ago
function repeatStr (n, s) {
    let z = ''
    for (i = 0; i < n; i++) {
      z += s
    }
    return z
  }

// Is he gonna survive?: 12 days ago
function hero(bullets, dragons){
    let bulletsNeeded = dragons * 2
    if (bullets >= bulletsNeeded) {
      return true
    } else {
      return false
    }
  }

// Powers of 2: 12 days ago
function powersOfTwo(n){
    let arr = []
    for (i = 0; i <= n; i++) {
      arr.push(Math.pow(2, i))
    }
    return arr
  }

// USD => CNY: 11 days ago
function usdcny(usd) {
    return(`${(usd*6.75).toFixed(2)} Chinese Yuan`)
  }


// 7 kyu

// Highest and Lowest: 12 days ago
function highAndLow(numbers){
    let numArr = numbers.split(' ')
    numArr.sort((a, b) => b-a)
    return `${numArr[0]} ${numArr[numArr.length - 1]}`
  }

// Get the middle character: 8 days ago
function getMiddle(s)
{
  let y = s.length/2
  if (Number.isInteger(y)) {
    return `${s[y-1]}${s[y]}`
  } else {
    return `${s[Math.floor(y)]}`
  }
}

//Factorial: 6 days ago
function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
  }

// Sum of two lowest positive integers: 6 days ago
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b)
    return (numbers[0] + numbers[1]) 
  }

// The highest profit wins!: 6 days ago
function minMax(arr){
    arr.sort((a, b) => a - b) 
    return([arr[0], arr[arr.length - 1]])
  }

// Shortest Word: 4 days ago
function findShort(s){
    let y = s.split(' ')
    let z = y.map(a => a.length)
    z.sort((a, b) => a - b)
    return z[0]
  }

// Categorize new member: 4 days ago
function openOrSenior(data){
    let results = []
    for (i = 0; i < data.length; i++) {
      if (data[i][0] >= 55 && data[i][1] > 7) {
        results.push('Senior')
      } else {
        results.push('Open')
      }
    }
    return results
  }

// Exes and Ohs: 3 days ago
function XO(str) {
    str = str.toLowerCase()
    let x = 0
    let o = 0
      for (i = 0; i < str.length; i++) {
        if (str[i] == "x") {
          x += 1
        } else if (str[i] == "o") {
          o += 1
        }
      }
    return(x == o)
  }

// Square every Digit: 3 days ago
function squareDigits(num){
    num = num.toString()
    let x = 0
    let y = 0
    for (i = 0; i < num.length; i++) {
      x = Math.pow(Number(num[i]), 2)
      y += x.toString()
    }
    return(Number(y))
  }

// Remove anchor from URL: 3 days ago
function removeUrlAnchor(url){
    return(url.split('#')[0])
  }

// Small enough? - Beginner: 2 days ago
function smallEnough(a, limit){
    let b
    for (i = 0; i < a.length; i++) {
      if (a[i] > limit) {
        b = false
        break;
      } else {
        b = true
      }
    }
    return b
  }

// Sum of all multiples of 3 or 5: 2 days ago 
function findSum(n) {
    let total = 0
    for (i = 0; i <= n; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        total += i
      }
    }
    return total
  }

// Vowels Count: 2 days ago
function getCount(str) {
    let vowelsCount = 0;
    
    str = str.split('')
    for (i in str) {
      if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        vowelsCount += 1
      }
      console.log(i)
    }
    
    return vowelsCount;
  }
  