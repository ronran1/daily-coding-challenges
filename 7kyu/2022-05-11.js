// Don't give me five!
function dontGiveMeFive(start, end)
{
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    let arrStr = ""
    arrStr = arr[i].toString().split('')
    if (!arrStr.includes("5")) {
      count++
    }
  }
  return count
}

