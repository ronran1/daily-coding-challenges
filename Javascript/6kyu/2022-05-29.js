// Sum of digits/digital root
function digital_root(n) {
    let x = (n) => {
      while (n.length != 1) {
        n = n.toString().split('').reduce((a, b) => Number(a) + Number(b)).toString()
      }
      return n
    }
    return Number(x(n))
  }
  