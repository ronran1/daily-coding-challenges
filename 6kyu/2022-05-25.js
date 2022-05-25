// Max Ball
function maxBall(v) {
    let h = []
    let x = 0
    let t = 0
    v = v * 0.277778
    do {
      t += 0.1
      x = v*t-(0.5*9.81*t*t)
      h.push(v*t - 0.5*9.81*t*t)
      console.log(x)
    } while (x >= 0)
    return h.indexOf(Math.max(...h)) + 1
    
}

// Create phone number
function createPhoneNumber(numbers){
    let arr = []
    arr.push(numbers.slice(0, 3).join(''))
    arr.push(numbers.slice(3, 6).join(''))
    arr.push(numbers.slice(6, 10).join(''))
    return `(${arr[0]}) ${arr[1]}-${arr[2]}`
  }