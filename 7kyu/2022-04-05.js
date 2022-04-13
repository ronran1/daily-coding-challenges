// Descending Order
function descendingOrder(n){
    let arr = (n + '').split('').sort().reverse().join('')
    return Number(arr)
  }