// <<<< Виды Функций >>>>
// 1.
// Functrion Declaration -- Можем обращаться к ней когда захотим, 
// даже если она идёт после вызова функции. */
function variable(name0) {
    console.log('Hello - ', name0)
}
variable(name0 = 'Maxim')

// Function Expression -- К нему обратиться можно лишь после его чтения, вызовом после. 
// но имеет свои приимущества в некоторых случаях.
const variable2 = function variable2(name1) {
    console.log('Hello - ', name1)
}
variable2(name1 = 'Maxim')
// узнать подробности и тип элемента
console.dir(variable)

// 2. Анонимные функции
let counter = 0;
setInterval(handler = function() {
    console.log(++counter)
}, timeout = 1000)   

// Функция считает интервал по секундно до тех пор пока не будут удовлетворены условия `if`
let counter1 = 0
const interval = setInterval(handler = function() {
    if (counter1 === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, timeout = 1000)

// 3. Стрелочные функции
//   стрелка
const arrow = (name2) => {
    console.log('Hello - ', name2)
} 
arrow( name2 = 'Vladilen')

const arrow2 = name3 => console.log('Hello - ', name3)
arrow( name3 = 'Vladilen')

const pow2 = num => num ** 2
console.log(pow2(name4 = 5))

const arrow3 = (name5, age5) => console.log('Hello - ', name5, age5)
arrow3(name5 = 'Maxim -', age5 = '25 years')
    
// 4. Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b
console.log(sum(a = 41, b = 4))
console.log(sum(a = 50))

// суммирует любое колличество чисел
function sumAll(...all) {
    let result = 0;
    for (let num of all) {
        result += num
    }
    return result
}
const res = sumAll(all = 1, 2, 4, 6, 7, 9, 0, 125, 25, 0, -2, 5, 0125, 999)
console.log(res) 
// reduce не работает в данном случае когда мы хотим получить сумму числе массива, нужно иметь переменную массива для того чтобы просумировать.
// const initialValue = 0;
// const result = all.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue );
// console.log(result)

// 5. Замыкания
// При каждом вызове функции logWithLastName у нас значение внутри функции createMember становится приватным и оно не сменяемо, а вот то что мы указываем в LogWithLastName, то будет указыватся в добаков к приватному значению, тем самым константа Vladilen защищает себя от каких либо изменения и всегда остаётся.
function createMember(name6) {
    return function(lastName) {
        return (name6 + lastName)
    }
}
const logWithLastName = createMember(name6 = 'Vladilen')
console.log(logWithLastName(' Minin'))
console.log(logWithLastName(' Kuznecow'))
console.log(logWithLastName(' Panin'))



function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Ещё не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Владилен'
const personName2 = 'Максим'
const personAge = 26
const personAge2 = -10
const output = logPerson`Имя: ${personName}, Возвраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возвраст: ${personAge2}!`

console.log(output)
console.log(output2)

function greet(name7) {
    console.log('Hello - ', name7)
}
// раньше присвоение переменной можно было указать через `:` но теперь через `=` 
greet( name7 = 'Tony')

// возвращает случайные числа в диапозоне согласно вызваной функции с указанными аргументами.
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};
console.log(getRandomBetween(2, 60))
console.log(Math.random())



const resultMoney = (sales) => {
    let res = sales
    return newres = ((res * 0.10 + sales) - 190) / 2;
}

function resultMoney(sales) {
    let res = sales;
    return newres = ((res * 0.10 + sales) - 190) / 2; 
}
resultMoney(1000)
console.log(newres)



setTimeout(function() { alert(`Hello`) }, 5000);



