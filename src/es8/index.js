//! object.entries
const data = {
  frontend: 'manu',
  backend: 'thor',
  design: 'alex'
}

const entries = Object.entries(data) // [ [ 'frontend', 'manu' ], [ 'backend', 'thor' ], [ 'design', 'alex' ] ]
console.log(entries)
console.log(entries.length)

//! object.values
const data = {
  frontend: 'manu',
  backend: 'thor',
  design: 'alex'
}

const values = Object.values(data) // [ 'manu', 'thor', 'alex' ]
console.log(values)

//! string.pad
const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' ---- '))