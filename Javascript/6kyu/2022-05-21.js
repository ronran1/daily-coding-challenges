//Age diversity

function isAgeDiverse(list) {
    let list1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    let arr = list.map(li => li.age)
    console.log(arr)
    let mat = arr.map(a => {
      if (a < 100) {
        return a.toString()[0]
      } else {
        return ""
      }
    })
    let mat1 = [...new Set(mat)]
    console.log(mat1)
    return arr.every(li => {
      if(li > 100) {
        return true
      }
      let x = li.toString()
      return list1.includes(x[0])
    }) && mat1.length == 10
  }
  