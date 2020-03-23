//! 
const obj = {
  name: 'manu',
  age: 29,
  country: 'ES'
}

let { name, ...all } = obj
console.log(name, all) // manu { age: 29, country: 'ES' }

//!
const obj = {
  name: 'manu',
  age: 29,
}

const obj1 = {
  ...obj,
  country: 'ES'
}

console.log(obj1) // { name: 'manu', age: 29, country: 'ES' }

//! promise.finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World!'), 3000)
      : reject(new Error('test error'))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.error(error))
  .finally(() => console.log('ha terminado!'))
  
//! regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-29')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day) // 2018 04 29