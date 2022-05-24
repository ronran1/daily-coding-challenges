// Find avg age
function getAverageAge(list) {
    return Math.round(list.map(li => li.age).reduce((a, b) => a + b) / list.length)
  }