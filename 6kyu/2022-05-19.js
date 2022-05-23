// language diversity
function isLanguageDiverse(list) {
    console.log(list)
    let languages = {}
    list.forEach(li => {
      let lang = li.language
      if(languages[lang]) {
        languages[lang] += 1
      } else {
        languages[lang] = 1
      }
    })
    let val = Object.values(languages).sort((a, b) => a - b)
    return val[0]*2 >= val[val.length - 1]
  }
  