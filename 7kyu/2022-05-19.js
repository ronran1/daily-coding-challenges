// Greet devs
function greetDevelopers(list) {
    return list.map(li => {
      return {
        ...li,
        greeting: `Hi ${li.firstName}, what do you like the most about ${li.language}?`
      }
    })
  }

//will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg*fuelLeft === distanceToPump || mpg*fuelLeft > distanceToPump
};

// Multiples and digit sums
function procedure(n){
  let x = []
  for (i = 0; i <= 100; i++) {
    if (i % n === 0) {
      x.push(i)
    }
  }
  let y = x.map(el => {
    let temp = el.toString().split('')
    return Number(temp.reduce((a, b) => Number(a) + Number(b)))
  })
  return y.reduce((a, b) => a + b)
}

// Simple multiplication
function simpleMultiplication(number) {
  return number % 2 === 0 ? number*8 : number*9
}

//Jaden casing strings
String.prototype.toJadenCase = function () {
  return this.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
};

