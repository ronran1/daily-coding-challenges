// Does my number look big in this
function narcissistic(value) {
    value = value.toString().split('')
    let x = value.length
    let y = 0
    value.forEach(el => {
      y += Math.pow(el, x)
    })
    return y == +value.join('')
  }