/**
 * create array
 */
// Basic way
const animals = ['cat', 'dog', 'cow']
console.log(animals)

// With Array Constructor
const birds = new Array('dove', 'blue bird', 'kingfisher') // preferrable is basic type
console.log(birds)

// with Array.of() - common use to create mixed data type
const Any = Array.of('', null, undefined, [], {})
console.log(Any)

// Spread Operator
const moreAnimal = [...animals, 'monkey']
console.log(moreAnimal)

// From another Array - Array.from() ->
// newly created array is completely new copyrights and is not gonna mutate any changes to the old array
const copyOfAnimals = Array.from(animals)
console.log(copyOfAnimals)

// From Array-Like Objects
// Some Lists look like Arrays but are not arrays.
// One of such list is NodeList which you receive as an output of document.quaerySelectorAll
const divs = document.querySelectorAll('div')
const divsArray = Array.from(divs)
console.log(divsArray)

const divs2 = document.querySelectorAll('div')
const divsArray2 = Array.from(divs2)
console.log(divsArray2)

// Using Loops like Map
const animalsCopy = animals.map(a => `${a}'s kid`)
console.log(animalsCopy)

// Using Reduce
const animalsCopy2 = animals.reduce((gang, animal) => [
  ...gang,
  { animal }
], [])
console.log(animalsCopy2)

// New Array of Length and Fill with some value
const emojis = new Array(5).fill('😎')
console.log(emojis)
const random = new Array(5).fill(1).map((v, i) => i * (Math.random() * 10).toFixed(0))
console.log(random)

// Using Object.key and Object.values from an object
const days = { 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday' }
console.log(Object.keys(days))
console.log(Object.values(days))

// Array Concat Function
let concatArray = [birds, [], 'checken']
console.log(concatArray)
concatArray = [].concat(birds, [], 'checken')
console.log(concatArray)
/* *****array constructer method *****************
Array.from()
Array.isArray()
Array.of()
/* ******* Array prototype method*****************
Array.prototype.concat()
Array.prototype.copyWithin()
Array.prototype.entries()
Array.prototype.every()
Array.prototype.fill()
Array.prototype.filter()
Array.prototype.find()
Array.prototype.findIndex()
Array.prototype.flat()
Array.prototype.flatMap()
Array.prototype.forEach()
Array.prototype.includes()
Array.prototype.indexOf()
Array.prototype.join()
Array.prototype.keys()
Array.prototype.lastIndexOf()
Array.prototype.map()
Array.prototype.pop()
Array.prototype.push()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.toLocaleString()
Array.prototype.toSource()
Array.prototype.toString()
Array.prototype.unshift()
Array.prototype.values()
/* Array.prototype[@@iterator]()
get Array[@@species]
***************************** */
