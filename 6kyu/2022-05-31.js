// Find unique number
function findUniq(arr) {
    let obj = {}
    arr.forEach(el => {
      if (obj[el]) {
        obj[el]++
      } else {
        obj[el] = 1
      }
    })
    let x = Object.values(obj).indexOf(1)
    return +Object.keys(obj)[x]
  }

