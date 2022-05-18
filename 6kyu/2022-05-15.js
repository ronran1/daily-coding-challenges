// Array.diff
function arrayDiff(a, b) {
    if (b.length == 0) {
      return a
    }
    let d = a.filter(function(item) {
      return !b.includes(item)
    })
    return d
  }

