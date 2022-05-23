// Count # of JS devs
function countDevelopers(list) {
    let count = 0
    list.forEach(li => {
      if(li.continent == 'Europe' && li.language == 'JavaScript') {
        count++
      }
    })
    return count
  }

// Testing 123
var number=function(array){
  return array.map((el, i) => {
    return `${i + 1}: ${el}`
  })
}
