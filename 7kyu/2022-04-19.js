//You're a square!
var isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))) {
      return true
    } else {
      return false
    }
  }
  
//Sort numbers
function solution(nums){
    if (!nums) {
      return []
    }
    return nums.sort((a, b) => a - b)
  }
  