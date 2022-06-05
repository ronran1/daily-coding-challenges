//Find the first Py dev
function getFirstPython(list) {
    let list1 = list.filter(li => li.language === 'Python')
    return list1.length > 0 ? [list1[0].firstName, list1[0].country].join(', ') : 'There will be no Python developers'
  }