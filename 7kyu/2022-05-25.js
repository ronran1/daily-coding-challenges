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
<<<<<<< HEAD
  }

// Get key-val pairs as arrays
function keysAndValues(data){
  return [Object.keys(data), Object.values(data)]
}
=======
  }
>>>>>>> 753608c19b7975da3a3340525e2a01bf91cd2b24
