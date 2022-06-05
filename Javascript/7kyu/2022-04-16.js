// Chain me
function chain(input, fs) {
    console.log(input)
    console.log(fs)
    let y = fs[0](input)
    for (i = 1; i < fs.length; i++) {
      y = fs[i](y) 
    }
    return y
  }