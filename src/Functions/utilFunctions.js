/*
 * Implement a function that determines whether a string that contains only letters is an isogram.
 * Assume the empty string is an isogram. Ignore letter case.
*/
function isIsogram (str) {
  const unique = [...new Set(str.toUpperCase())]
  const findNaN = unique.filter(n => isNaN(n))
  return !!((str.length === unique.length) && (unique.length === findNaN.length))
}

// function isIsogram (str) {
//   return new Set(str.toUpperCase()).size === str.length
// }

// function isIsogram (str) {
//   return !/(\w).*\1/i.test(str)
// }

var str1 = new Set('moOy1'.toUpperCase()).size
console.log(str1)

console.log(isIsogram('Dermatoglyphics')) // true
console.log(isIsogram('isogram')) // true
console.log(isIsogram('aba')) // false, 'same chars may not be adjacent'
console.log(isIsogram('moOse')) // false, 'same chars may not be same case'
console.log(isIsogram('isIsogram')) // false
console.log(isIsogram('')) // true, 'an empty string is a valid isogram'
