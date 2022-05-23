//Continental representation
function allContinents(list) {
    let arrCont = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    let list1 = list.map(li => li.continent)
    let set1 = [...new Set(list1)]
    return set1.length === arrCont.length
  }