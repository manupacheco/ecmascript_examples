//! Array.flat
let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat()) // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(2)) // [ 1, 2, 3, 1, 2, 3, 1, 2, 3]

//! Array.flatMap
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2])) // [ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]

//! String.trimStart y trimEnd
let hello = '            hello world!'

console.log(hello)
console.log(hello.trimStart()) // hello world!

let hello = 'hello world!            '

console.log(hello)
console.log(hello.trimEnd()) // hello world!

//! 
try {
  
} catch (error) {
  error
}
// ---- // 
try {
  
} catch {
  error
}

//! Object.fromEntries
let entries = [['name', 'manu'], ['age', 29]]

console.log(Object.fromEntries(entries))

//! symbol
let mySimbol = `My Symbol`
let symbol = Symbol(mySimbol)
console.log(symbol.description)