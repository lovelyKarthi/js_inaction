
/* Array.from(arrayLike [, mapFn [, thisArg]])
arrayLike means: anything that looks like an array we can convert to array with Array.from
 - string
 - HTMLCollection and NodeList  elements
 - existing array or object
*****************************************************************************************/

console.log('Array', Array)
console.dir(Array) // constuctor
console.log([]) // prototype

const str = 'JS Good Parts'
// converting array from string using Spread operator
const newArray = [...str]
console.log('spread operator', newArray)
// using slice and call
const newArray2 = Array.prototype.slice.call(str)
console.log('call', newArray2)
// Array.from
console.log('Array.from', Array.from(str))

// creating an array using Array.from()
let myArray = Array.from({ length: 5 }, (v, i) => v) // here v == undefined
console.log(myArray)

myArray = Array.from({ length: 5 }, (v, i) => '') // lenth 5 of empty string
console.log(myArray)

myArray = Array.from({ length: 5 }, (v, i) => 1 * i) // [0,1,2,3,4]
console.log(myArray)

// using new Array - class
let NewArray = new Array(6)
console.log(Array.from(NewArray).map((v, i) => i * i)) // (5) [empty × 5]

NewArray = NewArray.fill('')
console.log(NewArray)

NewArray = NewArray.map((v, i) => i)
console.log(NewArray)

// chaining all in one
const allInArray = (new Array(5)).fill(0).map((v, i) => i * i)
console.log(allInArray)

const ALO = 'ALO'
const af = Array.from(ALO)
const ap = Array.prototype.slice.call(ALO, 0)
const sp = [...ALO]
console.log(af === ap, af === sp, ap === sp)
