// Maximum Length Difference
function mxdiflg(a1, a2) {
    console.log(a1, a2)
      if (a1.length == 0 || a2.length == 0) {
        return -1
      }
      let a1length = []
      let a2length = []
    for (let i = 0; (i < Math.max(a1.length, a2.length)); i++) {
      if (a1[i] == undefined) {
        a2length.push(a2[i].length)
      }
      else if (a2[i] == undefined) {
        a1length.push(a1[i].length)
      } else {
        a1length.push(a1[i].length)
        a2length.push(a2[i].length)
      }
    }
  
    let x = Math.max(...a1length)
    let y = Math.max(...a2length)
    let z = Math.min(...a1length)
    let g = Math.min(...a2length)
    return ((x-g) > (y-z)) ? (x-g) : (y - z)
  }

// Find the Vowels
function vowelIndices(word){
    word = word.toLowerCase()
    arr = word.split('')
    console.log(arr)
    fin = []
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == 'y' || arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
        fin.push(i + 1)
        console.log(`pushed ${i + 1}`)
      }
    }
    return fin
  }