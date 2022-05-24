// Find the odd names
function findOddNames(list) {
    let list1 = list.filter(li => {
      let sum = 0
      for (i = 0; i < li.firstName.length; i++) {
        sum += li.firstName.charCodeAt(i)
      }
      return sum % 2 != 0
    })
    return list1 || []
  }
  
//Bouncing balls
function bouncingBall(h,  bounce,  window) {
  if (h < window || h < 0 || bounce < 0 || bounce >= 1) {
    return -1
  }
  let bounceHeight = h
  let count = 0
  while (bounceHeight > window) {
    count += 2
    bounceHeight *= bounce
    console.log(count)
  }
  count--
  return count
}
