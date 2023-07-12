/*
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
*/

/*
// indexOf выведет весь объект
const people = [
    {name2: 'Vlad', budget: 4200},
    {name2: 'Elena', budget: 3500},
    {name2: 'Victoria', budget: 1700},
]
console.log(people.indexOf())
// // выведет строку части объекта который удовлетворит условиям
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
*/

/*
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
*/

/*
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
*/

/*
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
*/

/*
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
*/

/*
// let user = new Object(); // синтаксис "конструктор объекта"
// let user = {}; // синтаксис "литерал объекта"
// объект объявленный с помощью const может быть изменён

const person = {
    name: "John",
    age : 20,
};
const person2 = {
    question: "?",
    human: true,
}
let person3 = {
    name: 'Jony',
    age: 32,
    lastName: 'Makaskvil',
}
console.log(person.name) 
console.log(person.name[0])
console.log(person.name[2 - length])
console.log(person.name[length + 2])
console.log(person.name[0].toLowerCase())
console.log(person.name.toLowerCase())
console.log(person.name + person.age)
console.log(person.name[2] + person.age)
console.log(person.age + person3.age)
console.log(`${person.name} `+ `has ${person3.age}${person2.question}`)
console.log(person2.isAdmin = true, person2)
console.log(delete person2.isAdmin, person2)
person3.lastName = "Max"
console.log(person3)

// это вызовет синтаксическую ошибку
// person.likes birds = true
// для этого есть квадратные скобки
person["likes birds"] = true
console.log(person)
let key = "likes birds"; // имя свойства может хранится в переменной
console.log(person[key] = true);
*/

/*
let key = prompt("What are you want to know about user?")
const person11 = {
    
}
person11.key
person11.key = "Billy";
person11.value = 'Billy'; // или добавить ключ или к ключу затем добавить значение через value присваивание.
console.log(person11)
*/

/*
let fruit = prompt("How is fruit buy?", "apple");
let bag = {
    [fruit]: 5, // the property name will be taken from the fruit variable
}
// or
// let bag = {};
// bag[fruit] = 5
alert(bag.apple); // 5, if fruit="apple"
// we may use more complex expressions
let fruit2 = 'apple';
let bag2 = {
    [fruit2 + 'Computers']: 5 // bag2.appleComputers = 5
};
// Если наши переменные известны, то используем точку,
// если же нам требуется более сложные конструкции, то квадратные скобки
*/

/*
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...другие свойства
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

// more short record
function makeUser(name, age) {
  return {
    name, // то же самое, что и name: name
    age, // то же самое, что и age: age
    // ...
  };
}

let user2 = {
  name2, // тоже самое, что и name:name
  age2: 30,
};
*/

/*
// Ограничения на имена свойств в объектах нет.
// эти имена свойств допустимы
let obj = {
  for: 1,
  let: 2,
  return: 3,
  0: "Text" // то же самое что и "0": "Text"
};
console.log(obj.for + obj.let + obj.return); // 6
obj.__proto__ = 5; // исключение из правил присвоения
console.log(obj.__proto__) // [object Object], value - this is object, that is not that, what we expected
*/

/*
// Проверка существования свойства, оператор «in»
let user = {}
console.log(user.noSuchProperty === undefined); // true значает "no property"
// special operator "in" for examination 
// "key" in object // example
// details
user.name = "John";
user['age'] = 30;
console.log(user)
console.log("age" in user); // true
console.log("blabla" in user);
// may down quotes
let key = "age";
console.log(key in user)
// 'in' use when we have property 'undefined'
*/

/*
// для перебора всех свойств объекьта используется цикл for..in
// for (key in object){
//     // тело цикла выполняется для каждого свойства объекта
// }

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for(let key in user) {
    // keys
    console.log(key); // name, age, isAdmin
    // values keys
    console.log(user[key]); // John, 30, true
}
*/
