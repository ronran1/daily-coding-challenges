// Array Helpers
Array.prototype.square = function() {
    let total = []
    for (i = 0; i < this.length; i++) {
      total.push(this[i] * this[i])
    }
    return total
  }
  Array.prototype.cube = function() {
     let total = []
    for (i = 0; i < this.length; i++) {
      total.push(this[i] * this[i] * this[i])
    }
    return total
  }
  Array.prototype.average = function() {
    let total = 0
    for (i = 0; i < this.length; i++) {
      total += this[i]
    }
    return total/this.length
  }
  Array.prototype.sum = function() {
    let total = 0
    for (i = 0; i < this.length; i++) {
      total += this[i]
    }
    return total
  }
  Array.prototype.even  = function() {
    let total = []
    for (i = 0; i < this.length; i++) {
      if (this[i] % 2 == 0) {
        total.push(this[i])
      }
    }
    return total
  }
  Array.prototype.odd = function() {
     let total = []
    for (i = 0; i < this.length; i++) {
      if (this[i] % 2 != 0) {
        total.push(this[i])
      }
    }
    return total
  }
  