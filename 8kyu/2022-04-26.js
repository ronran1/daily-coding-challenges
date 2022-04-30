//add isUpperCase functionality
String.prototype.isUpperCase = function() {
    let newString = ''
    for (i = 0; i < this.length; i++) {
      newString += this[i].toUpperCase()
    }
    return newString == this
  }
  

//centry from year
function century(year) {
    if (Number.isInteger(year / 100)) {
      return year / 100
    } else {
    return Math.floor(year /= 100) + 1
    }
  }
  