let arrTwo = [8, 22, 1,];
var students = [ 'Jack', 'James', 'Rober', 'John'];
var myFriends = ['Jennifer','Mary','Patricia'];
const ages = [32, 33, 16, 40];
var arrays = [2.1, 3.5, 4.7]; 
const students2 = [
    { name: "Nick", grade: 10 },
    { name: "John", grade: 15 },
    { name: "Julia", grade: 19 },
    { name: "Nathalie", grade: 9 },
];
const aboveTenSum = students2
.map(student2 => student2.grade) // сравниваем массив студентов с массивом их оценок
.filter(grade => grade >= 10) // отбираем оценки выше 10
.reduce((prev, next) => prev + next, 0); // суммируем каждую оценку выше 10

console.log(aboveTenSum) // 44 -- 10 (Nick) + 15 (John) + 19 (Julia), Nathalie



let users = ['Ваня', 'Иштван', ]
let newusers = users;
newusers.push('Оля');
newusers.splice(1, 1, 'Петя')
console.log(newusers)
console.log(newusers.shift());
newusers.unshift('Маша', 'Паша')
console.log(newusers)



let arr = ["Ваня", "Иштван", "Оля",];
        console.log(variable = arr.splice(1,1));



let str = 'Ваня,Иштван,Оля';
console.log(str.split(','));



let arr2 = [9, 2, 8,];
let reduceValue = arr2.reduce(function (previousValue, item, index, array) {
    console.log(previousValue);
});



var a = `a,b`.split(`,`);
var a = new Array(`a`, `b`);
var a = [`a`, `b`];

var myArr = [];
myArr[1] = 0;
myArr[6] = 7;
myArr[99] = 1;
console.log(myArr.length);


const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседенс']
// .map всегда возвращает новый массив, сохраняя тем самым и старый для использования
const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})
console.log(upperCaseCars)

const fib = [1, 1, 2, 3, 5, 8, 13, 21]
const pow2Fib = fib.map(num => num ** 2)
console.log(pow2Fib)

const pow2 = num => num ** 2
const pow2Fib2 = fib.map(pow2)
console.log(pow2Fib2)

const sqrt = num => Math.sqrt(num)
const pow3 = num => num ** 2
const pow3Fib = fib.map(pow3).map(sqrt) //или const pow3Fib = fib.map(pow3).map(Math.sqrt)
console.log(pow3Fib)

const pow4 = num => num ** 2
const pow4Fib = fib.map(pow4)
// фильтруем результирующую строку
const filteredNumbers = pow2Fib.filter(num => {
    return num > 20
})
console.log(filteredNumbers)



const people = [
    {name2: 'Vlad', budget: 4200},
    {name2: 'Elena', budget: 3500},
    {name2: 'Victoria', budget: 1700},
]
const allBudget = people.reduce(function(acc, person) {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)
// добавляем условия по которым будет происходить слаживание суммы массива
const allBudget2 = people.filter(person => person.budget > 2000).reduce(function(acc, person) {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget2) 
// чейнинг (chaining) вызов в подряд некоторых методов
const allBudget3 = people
    .filter(person => person.budget > 2000)
    .reduce(function(acc, person) {
    acc += person.budget
    return acc
}, 0)

// через поисковик смотрит есть ли такая строка и получает её при значении true 
// const displayItems = allItems.filter(item => item.name.contains('phone')) // или .indexOf('phone') !== -1)
