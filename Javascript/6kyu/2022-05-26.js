// Split strings
function solution(str){
    str = str.split('')
   if (str.length % 2 != 0) {
     str.push('_')
   }
   let y = []
   for (i = 0; i < str.length; i += 2) {
     y.push(str.slice(i, i+2).join(''))
     
   }
   return y
 }
 