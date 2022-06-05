// Ask for missing details
function askForMissingDetails(list) {
    return list.map(li => {
      for (let key in li) {
        if(!li[key]) {
          return {
            ...li,
            question: `Hi, could you please provide your ${key}.`
          }
        }
      }
    }).filter(x => x !== undefined)
  }