// Find the parity outlier
function findOutlier(integers){
    return integers.filter(el => el % 2 === 0).length > 1 ? integers.find(el => el % 2 != 0) : integers.find(el => el % 2 == 0)
  }
  