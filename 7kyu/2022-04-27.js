//Round up to next multiple of 5
function roundToNext5(n){
    for (i = n; i < n + 8; i++) {
      if (i % 5 == 0) {
        return i
        break;
      }
    }
  }
// Credit card masker
// return masked string
function maskify(cc) {
  if(cc.length - 4 < 0) {
    return cc
  }
  let newCC = cc.slice(0, cc.length - 4)
  newCC = [...newCC].map(ch => ch ? "#" : ch).join("");
  return newCC + cc.slice(cc.length - 4, cc.length)
  }