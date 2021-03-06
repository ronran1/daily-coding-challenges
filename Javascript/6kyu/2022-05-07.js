// Title Case
function titleCase(title, minorWords) {
    if (!title) {
      return title
    }
    let newTitle= []
    title = title.toLowerCase().split(' ')
    if (!minorWords) {
      for (let i in title) {
        newTitle.push(title[i][0].toUpperCase() + title[i].slice(1))
      }
    } else {
      minorWords = minorWords.toLowerCase().split(' ')
      title[0].length == 1 ? newTitle.push(title[0].toUpperCase()) : newTitle.push(title[0][0].toUpperCase() + title[0].slice(1))
      for (i = 1; i < title.length; i++) {
        if (!minorWords.includes(title[i])) {
          newTitle.push(title[i][0].toUpperCase() + title[i].slice(1))
        } else {
          newTitle.push(title[i])
        }
      }
    }
    return newTitle.join(' ')
}  

//Where is my parent?
function findChildren(dance) {
  dance = dance.toLowerCase().split('')
  dance.sort()
  dance[0] = dance[0].toUpperCase()
  for (i = 1; i < dance.length; i++) {
    if (dance[i] !== dance[i - 1].toUpperCase() && dance[i] !== dance[i-1].toLowerCase()) {
      dance[i] = dance[i].toUpperCase()
    }
  }
  return dance.join('')
}
