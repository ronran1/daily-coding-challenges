// Can they code in the same language?
function isSameLanguage(list) {
    return list.every((li, i, arr) => {
      if (i === 0) {
        return true
      } else {
        return li.language == arr[i-1].language
      }
    })
  }