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

//! asyn await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World!'), 3000)
      : reject(new Error('test error'))
  })
}

const hellowAsync = async () => {
  const hello = await helloWorld()
  console.log(hello)
}

hellowAsync()

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello)
  } catch (error) {
    console.log(error)
  }
}

anotherFunction()