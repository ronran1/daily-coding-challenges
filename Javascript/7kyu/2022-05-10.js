// Reverse words
function reverseWords(str) {
    str = str.split(' ')
    for (i in str) {
      str[i] = str[i].split('').reverse().join('')
    }
    return str.join(' ')
  }

