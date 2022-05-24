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

