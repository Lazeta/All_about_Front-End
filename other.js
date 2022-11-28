// как подаать в фиксированном виде код на страницу
const printText = `
<div>This is div</div>
<p>this os paragraph</p>
    `
console.log(printText)

const name0 = 'Владилен'
console.log(name0.toUpperCase().toLowerCase().startsWith('влад'))

const name1 = 'Vladilen'
const age = 26
// const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age + ' лет'
const output = `Привет, меня зовут ${name1} и мой возраст: ${age < 30 ? 'Young' : 'Old'} лет` 
// где {age < 30 ? 'Young' : 'Old'} тернарное выражение true or false
console.log(output)



let heightC = 10
let dC = 4
let v = 3.1415926535 * dC * heightC 
console.log(Number(v))