//Isograms
function isIsogram(str){
    str = str.toLowerCase()
    str = Array.from(str)
    let mat = [...new Set (str)]
    str = str.join('')
    mat = mat.join('')
    return (str == mat)
  }