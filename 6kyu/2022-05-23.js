// Find the most senior developer
function findSenior(list) {
    let maxValue = 0
    list.forEach(li => {
      if (li.age > maxValue) {
        maxValue = li.age
      }
    })
    return list.filter(li => li.age === maxValue)
  
  }
  