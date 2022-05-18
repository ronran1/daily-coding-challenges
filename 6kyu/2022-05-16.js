//Two sum
function twoSum(numbers, target) {
    let result = []
    let original = [...numbers]
    for (i = 0; i < 10000; i++) {
      const shuffledArray = numbers.sort((a, b) => 0.5 - Math.random());
      console.log(shuffledArray)
      if (shuffledArray[0] + shuffledArray[1] == target) {
        if (shuffledArray[0] == shuffledArray[1]) {
          result.push(original.indexOf(shuffledArray[0]))
          result.push(original.lastIndexOf(shuffledArray[1]))
          return result
          break;
        } else{
        result.push(original.indexOf(shuffledArray[0]))
        result.push(original.indexOf(shuffledArray[1]))
        return result
        break;
        }
      }    
    }
  }
  