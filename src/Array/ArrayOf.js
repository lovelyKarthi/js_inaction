/**
 * The Array.of() method creates a new Array instance from a variable number of arguments,
 * regardless of number or type of the arguments.
 *
 * Syntax: Array.of(element0[, element1[, ...[, elementN]]])
 */

Array.of(7) // [7]
Array.of(1, 2, 3) // [1, 2, 3]
Array.of(1) // [1]
Array.of('a', 'b', 'c') // [a, b, c]
Array.of(undefined) // [undefined]

/**
 * don't use the below
Array(7) // array of 7 empty slots
Array(1, 2, 3) // [1, 2, 3]
 */
