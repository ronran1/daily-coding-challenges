// Order the food
function orderFood(list) {
    let food = {}
    list.forEach(li => {
      let fud = li.meal
      if(food[fud]){
        food[fud] += 1
      } else {
        food[fud] = 1
      }
    })
    return food
  }

// Get key-val pairs as arrays
function keysAndValues(data){
  return [Object.keys(data), Object.values(data)]
}
