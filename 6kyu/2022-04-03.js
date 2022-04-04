function isPangram(string){
    const reg = /[A-Z]/gi
    let x = string.toLowerCase().match(reg)
    let y = [...new Set(x)]
    return (y.length == 26) ? true : false
  }
  