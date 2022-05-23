// Prepare the count of languages
function countLanguages(list) {
    let languages = {}
    list.forEach(li => {
      let lang = li.language
      if (languages[lang]) {
        languages[lang] += 1
      } else {
        languages[lang] = 1
      }
    })
    return languages
  }