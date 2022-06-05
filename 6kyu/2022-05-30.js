// Stop spinning my words
function spinWords(string){
    let x = string.split(' ')
    let y = []
    for (i in x) {
      if(x[i].length >= 5) {
        y.push(x[i].split('').reverse().join(''))
      } else {
        y.push(x[i])
      }
    }
    return y.join(' ')
}

