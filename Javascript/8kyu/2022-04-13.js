// To square (root) or not to square(root)
function squareOrSquareRoot(array) {
    let x = []
    for (i = 0; i < array.length; i++) {
      if (Number.isInteger(Math.sqrt(array[i]))) {
        x.push(Math.sqrt(array[i]))
      } else {
        x.push(Math.pow(array[i], 2))
      }
    }
    return x
  }