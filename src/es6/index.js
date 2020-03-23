//!data default
function newFunction(name, age, country) {
  var name = name || 'manu';
  var age = age || 29;
  var country = country || 'ES'
  console.log(name, age, country)
}
newFunction()

//es6
function newFunction2(name = 'manu', age = 29, country = 'ES') {
  console.log(name, age, country)
}
newFunction2('ricardo', 23, 'CO')

//!template string
let hello = 'Hello'
let world = 'World'

let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

//es6
let expiParase2 = `${hello} ${world}`
console.log(expiParase2)

//!multilínea
let lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry \n'
+ 'otra frase epica que necesitamos.'
console.log(lorem)

//es6
let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry 
otra frase epica que necesitamos.`
console.log(lorem2)

//!deconstrucción
let person = {
  'name': 'manu',
  'age': 29,
  'country': 'ES'
}

console.log(person.name, person.age)

//es6
let { name, age, country } = person;
console.log(name, age, country)

//!spread operator
let team1 = ['manu', 'julian', 'ricardo']
let team2 = ['thor', 'alex', 'jorge']

//es6
let education = ['david', ...team1, ...team2]
console.log(education)

//!let y const
var hola = 'hola' // disponible de forma global

{
  var globalVar = 'Global Var'
}

{
  let glboalLet = 'Global Let'
  console.log(glboalLet)
}

console.log(globalVar)
// console.log(glboalLet) // no accesible 'is not defined'

const a = 'b'
a = 'a'
// console.log(a) // no se puede asignar 'Assignment to constant variable.'

//!objetos
let name = 'name'
let age = 29

let obj = { name = name, age = age }
console.log(obj)

//es6
let obj2 = { name, age }
console.log(obj2)

//! arrow functions
const names = [
  { name: 'manu', age: 29},
  { name: 'thor', age: 1002}
]

let listOfNames = names.map(function (item) {
  console.log(item.name)
})

//es6
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age) => {
  // code
}

const listOfNames4 = name => {
  // code 
}

const square = num => num * num;

//!promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Hey!')
    } else {
      reject('Ups!')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.error(error))
  
//!classes
class Calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }
  
  sum(a, b) {
    this.valueA = a
    this.valueB = b
    return this.valueA + this.valueB
  }
}

const calc = new Calculator()
console.log('calc', calc.sum(2,2))

//!modulos
import { hello } from './module'

console.log(hello())

//!generator
function* helloWolrd() {
  if (true) {
    yield 'Hello, '
  }
  if (true) {
    yield 'World'
  }
}

const generetorHello = helloWolrd()
console.log(generetorHello.next().value)
console.log(generetorHello.next().value)
console.log(generetorHello.next().value)