const person = {
    name: "John",
    age : 20
};
const person2 = {
    question: "?",
    human: true
}
let person3 = {
    name: 'Jony',
    age: 32,
    lastName: 'Makaskvil'
}


// indexOf выведел весь объект
const people = [
    {name2: 'Vlad', budget: 4200},
    {name2: 'Elena', budget: 3500},
    {name2: 'Victoria', budget: 1700},
]
console.log(people.indexOf())
// // выведит строку части объекта который удовлетворит условиям
const index = people.findIndex(predicate= function(person4) {
    return person4.budget === 3500
})
console.log(people[index])
// ускореный способ найти нужного нам человека без индекса
const person5 = people.find(function(person5) {
    return person5.budget === 3500
})

// упростим функцию. Лямпда функция
const person6 = people.find(person6 => person6.budget === 3500)



const person7 = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed Key',
    greet() {
        console.log('greet from person7')
    },
}
console.log(person7.name)
// 'age' только так, а не без кавычек можно указать к какой части переменной в объекте мы обращаемся если присвоен тип число.
// 'variable' нужен когда мы обращаемся к динамической составляющей или по указанной в кавычках переменной.
console.log(person7['age']) 
console.log(person7['complex key']) 
console.log(person7)
person7.greet()
person7.age++
person7.languages.push('by')
console.log(person7)
person7['key_4'] = undefined
delete person7['key_4']

const name4 = person7.name
const age4 = person7.age
const languages4 = person7.languages
console.log(name4, age4, languages4)

// деструктуризация
const {name, age, languages} = person7
console.log(name, age, languages)

// ставим в ключи объекта значения по умолчанию
const {name: personName = 'Space', age: personAge = 10, languages: personLanguages = 'ua'} = person7
console.log(personName, personAge, personLanguages)
console.log('')


const person8 = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    greet() {
        console.log('greet from person')
    },
}
// cоздаём на каждой итерации переменную key и с помощью оператора in мы проебагаемся по объекту. 
// теперь переменная key получает все ключи объекта в столбик. 
for(let key in person8){
    console.log('key:', key) // или console.log('key:', key, 'value:', person8[key])
    console.log('value:', person8[key])
} console.log('')



// создаёт такой же вывод что и способы выше
const keys = Object.keys(person8)
keys.forEach((key) => {
    console.log('key:', key)
    console.log('value:', person8[key])
}) // или 
console.log('')

Object.keys(person8).forEach((key) => {
    console.log('key:', key)
    console.log('value:', person8[key])
}) 
console.log('')


// context
const person9 = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    greet() {
        console.log('greet from person')
    },
    info() {
        console.info('Информация про человека по имени:', person9.name)
    }
}
person9.info()

// или используем this
const person10 = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    greet() {
        console.log('greet from person')
    },
    info() {
        console.log('this:', this)
        console.info('Информация про человека по имени:', this.name)
    }
}
person10.info()
console.log('')

// работаем с объектами где указываем методы по которым работаем
const logger = {
    // получить ключи объекта с параметром obj
    keys(obj) {
        console.log('Object Keys: ', Object.keys(obj))
    }
}
logger.keys(person10)
console.log('')

const logger2 = {
    // получить ключи объекта через параметр this
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    }
}
logger2.keys(person10)
console.log('')
// const bound = logger.keys.bind(person10)
// bound()
// logger.keys.call((person10))