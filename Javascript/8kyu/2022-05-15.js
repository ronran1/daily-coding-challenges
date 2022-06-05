//Alternating case
String.prototype.toAlternatingCase = function () {
    let x = this.split('')
    let y = []
    for (i = 0; i < x.length; i++) {
      if (this[i] === this[i].toUpperCase()) {
        y.push(this[i].toLowerCase())
      } else if (this[i] === this[i].toLowerCase()) {
        y.push(this[i].toUpperCase())
      } else {
        y.push(this[i])
      }
    }
    return y.join('')
  }
  
//Grasshopper
function sayHello(name) {
  return `Hello, ${name}`
}

// Reverse array of digits
function digitize(n) {
  n = n.toString().split('').reverse()
  n = n.map(x => {
    return parseInt(x)
  })
  return n
}

// Wide mouthed frog
function mouthSize(animal) {
  
  return animal.toLowerCase() === "alligator" ? "small" : "wide"
}

