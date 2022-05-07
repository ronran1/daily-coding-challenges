// Total points
function points(games) {
    let x = 0
    let result
    for (i = 0; i < games.length; i++) {
      result = games[i].split(':')
      if (result[0] > result[1]) {
        x += 3
      } else if (result[0] < result[1]) {
        x += 0
      } else if (result[0] == result[1]) {
        x +=1
      }
    }
    return x
  }
  