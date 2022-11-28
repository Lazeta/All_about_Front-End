let arrTwo = [8, 22, 1,];
var students = [ 'Jack', 'James', 'Rober', 'John'];
var myFriends = ['Jennifer','Mary','Patricia'];
const ages = [32, 33, 16, 40];
var arrays = [2.1, 3.5, 4.7]; 
const students = [
    { name: "Nick", grade: 10 },
    { name: "John", grade: 15 },
    { name: "Julia", grade: 19 },
    { name: "Nathalie", grade: 9 },
];
const aboveTenSum = students
.map(student => student.grade) // сравниваем массив студентов с массивом их оценок
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



let arr = [9, 2, 8,];
let reduceValue = arr.reduce(function (previousValue, item, index, array) {
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