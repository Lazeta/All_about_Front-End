for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
}



const people = [
    {name2: 'Vlad', budget: 4200},
    {name2: 'Elena', budget: 3500},
    {name2: 'Victoria', budget: 1700},
]
let findedPerson
for (const person of people) {
    if(person.budget === 3500) {
        findedPerson = person
    }
}
console.log(findedPerson)



const person0 = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    greet() {
        console.log('greet from person')
    },
}
// цикл for ... in опасен тем что метод for in бежит не только по ключам объекта, но он 
// так же может заходить в его prototype и из за этого могут возникать некоторые проблемы.
// чтобы этого избежать нужно дописать специальную дополнительную проверку
for(let key in person0){
    if(person0.hasOwnProperty(key)) {
        console.log('key:', key)
        console.log('value:', person0[key])
    }
}



let w = 0;
while (w < 3) { // выводит 0, затем 1, затем 2
  alert( w );
  w++;
}


// Если тело цикла состоит лишь из одной инструкции, мы можем опустить фигурные скобки {…}:
let i = 3;
while (i) alert(i--);



// Цикл сначала выполнит тело, а затем проверит условие condition, и пока 
// его значение равно true, он будет выполняться снова и снова.
let q = 0;
do {
  alert( q );
  q++;
} while (q < 3);


// подсчитывает сумму вводимых чисел до тех пор, пока посетитель их вводит, а затем – выдаёт:
let sum = 0;
while (true) {
  let value = +prompt("Введите число", '');
  if (!value) break; // (*
  sum += value;
}
alert( 'Сумма: ' + sum );



for (let i = 0; i < 10; i++) {
    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
    alert(i); // 1, затем 3, 5, 7, 9
}



for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Значение на координатах (${i},${j})`, '');
      // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
    }
}
alert('Готово!');



outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Значение на координатах (${i},${j})`, '');
      // если пустая строка или Отмена, то выйти из обоих циклов
      if (!input) break outer; // (*)
      // сделать что-нибудь со значениями...
      outer:
      for (let i = 0; i < 3; i++) { ... }
    }
}
alert('Готово!');

