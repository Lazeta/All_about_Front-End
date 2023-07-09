// // tasks_1
// const data2 = {
//     task10: "10аб456вг378д29",
//     task20: "12341414141",
//     task30: "123456789"
// };

// // Function
// const fn2 = {
//     task10: (str) => {
//         const filtered = { num: [], sym: [] };
//         let result = "";
//         for (let val of str)
//             if (/\d/.test(val) && !(val % 2)) filtered.num.push(val);
//             else if (/[а-я]/.test(val)) filtered.sym.push(val);
//         for (let i = 0; i < 5; i++) result += filtered.sym[i] + filtered.num[i];
//         return result;
//     },
//     task20: (str) => {
//         if (!str) return null;
//         const lastSymbol = str.at(-1);
//         const result = [];
//         for (let i = 0; i < str.length; i++)
//             if (str[i].toLowerCase() === lastSymbol) result.push(i + 1);
//         return result;
//     },
//     task30: (str) => [...str].filter((val, i) => !((i + 1) % 3))
// }

// // Вывод
// console.log(fn2.task10(data2.task10))
// console.log('                        --- next task ---')
// console.log(fn2.task20(data2.task20))
// console.log('                        --- next task ---')
// console.log(fn2.task30(data2.task30))



// // My_Function
// // Функции
// // Cформировать и вывести строку из 10 символов. На четных позициях - четные цифры,
// // на нечетных - буквы. Данные: "1234567890абвгд"
// // выводить пустой символ если значение по условию некоректно или не находит значение (undefined), 
// // таким образом строка сама себя обрезает если она короче 10 символов.
// const fn = {
//     task1: (str) => {
//         let answer = "";
//         let strNumbers = str.replace(/[а-яА-Я13579 a-zA-Z;%$]/ig, "");
//         let strLetters = str.replace(/\d/g, "");
//         for(let i = 0; i < str.length; i++) {
//             if (typeof answer !== 'undefined') {
//                 answer = answer.replace(/[undefined$]/ig, " ")
//                 answer += strLetters.at(i) + strNumbers.at(i);
                
//             }
//             else {
//                 answer += strLetters.at(i) + strNumbers.at(i);  
//             }               
//         }
//             return answer.slice(0, 10);
//     },
// //2. Создать функцию вывода номеров символов, совпадающих с последним символом строки
//     task2: (str) => {
//         let lastSymbol = str.at(-1);
//         let result = [];
//         for(let i = 0; i < str.length; i++){
//             if (str[i] === lastSymbol){
//                 result.push(i);
//             }                  
//         }
//         result.pop()
//         // превращение элементов массива в элементы строки с помощью разделителя указанного в качестве аргумента ', '
//         return result.join(', ')
//     }, 

// //3. Создать функцию вывода каждого 3 символа строки
//     task3: (str) => {
//         let answer = [];
//         if(str === '' || ""){
//             return answer = 'don`t have symbol';
//         } else {
//             if(str == " ") {
//                 return answer = '\'space\'';
//             } else {
//                 for(let i = 2; i < str.length; i += 3) {
//                 answer += str[i];
//                     }
//                 return [answer].join().split([]);
//             }
//         }
//     },
// }
// const data = {
//     task1: "1234567890абвгд",
//     task1_2: "1535оф238оып9ф2м4м6ии5251",
//     task1_3: "qwerty123456789asdfgh",
//     task1_4: "v285abi3$ 42 55a 3a3  1kgaqqq8W",
//     task1_5: "фои5Иищ5ф;М  59И Г%Ф52ф240и",
//     task1_6: "ab246",

//     task2: "123д4567д890фбвгд",
//     task2_2: "123121", 
//     task2_3: "fan2An5Hn56g51",
//     task2_4: "WWWWwwwWwWWW WW",
//     task2_5: "  ",
//     task2_6: "wq",

//     task3: "1234567890",
//     task3_2: "qwertyasdfgh",
//     task3_3: "qhgoGeiGrIkkbD",
//     task3_4: "R53hdIuU900&$hEW3",
//     task3_5: " ... ",
//     task3_6: "",
//     task3_7: " ",
// };

// console.log(fn.task1(data.task1))
// console.log(fn.task1(data.task1_2))
// console.log(fn.task1(data.task1_3))
// console.log(fn.task1(data.task1_4))
// console.log(fn.task1(data.task1_5))
// console.log(fn.task1(data.task1_6))
// console.log('                        --- next task ---')

// console.log(fn.task2(data.task2))
// console.log(fn.task2(data.task2_2))
// console.log(fn.task2(data.task2_3))
// console.log(fn.task2(data.task2_4))
// console.log(fn.task2(data.task2_5))
// console.log(fn.task2(data.task2_6))
// console.log('                        --- next task ---')

// console.log(fn.task3(data.task3))
// console.log(fn.task3(data.task3_2))
// console.log(fn.task3(data.task3_3))
// console.log(fn.task3(data.task3_4))
// console.log(fn.task3(data.task3_5))
// console.log(fn.task3(data.task3_6))
// console.log(fn.task3(data.task3_7))
// console.log('                        --- next task ---')



// function colourAssociation(array){
//     let result = []
//     for (let i = 0; i < array.length; i++) {
//         result[i] = {[array[i][0]]: array[i][1]};
//     }
//     console.log(result)
// }



// // Function calling input and return value in string
// // index.html
// <body>
//     <input type="text" class="enterData">
//     <button type="submit">Submit</button>
//     <div class="result"></div>
// </body>
// {/* index.js */}
// function myClick() {
//     let res = document.querySelector('.enterData').value;
//     document.querySelector('.result').innerHTML = res;
//     console.log(res);
// }
// document.querySelector('button').onclick = myClick;

// // более продвинутый способ получения инпута
// // document.querySelector('button').addEventListener('click', myClick) 
// // value - получить текст из input
// // innerHTML - получить - записать текст в парный тег



// // 
// const aboveTenSum = student
// .map(student => student.grade) // сравниваем массив студентов с массивом их оценок
// .filter(grade => grade >= 10) // отбираем оценки выше 10
// .reduce((prev, next) => prev + next, 0); // суммируем каждую оценку выше 10

// console.log(aboveTenSum) // 44 -- 10 (Nick) + 15 (John) + 19 (Julia), Nathalie



// // добавляет из двумерного массива ключ и значение в новый объект
// const colourAssociation = array => array.map(([color, association]) => ({[color]: association}))



// const data = {
//     task1: "1234567890абвгд",
//   };
//   const fn = {
//     task1: (str) => {
//       let answer = "";
//       let strNumbers = str.replace(/[а-я13579]/ig, "");
//       let strLetters = str.replace(/\d/g, "");
//       for (let i = 0; i < strLetters.length; i++) {
//         answer += strLetters.at(i) + strNumbers.at(i);
//       }
//       return answer;
//     }
//   }
//   alert(fn.task1(data.task1))



// // #1
// const sumCells = document.querySelectorAll('.sum-cell');
// console.log(sumCells)
// let sum = 0;
// for(let i = 0; i < sumCells.length; i++) {
//     sum = sum + (+sumCells[i].textContent);
// }
// console.log(sum)
// document.querySelector('.sum-result').textContent = sum;



// // #2 работает если у нас 1 столбец
// const sumCells = document.querySelectorAll('.sum-cell');
// let sum = Array.from(sumCells).reduce(
//     (accum, item) => accum += +item.textContent, 0);
// console.log(sum);
// document.querySelector('.sum-result').textContent = sum;



// #3
const sumCells = document.querySelectorAll('.sum-cell');
let result = {};
for(let i = 0; i < sumCells.length; i++) {
    let cellClass = sumCells[i].classList;
    console.log(cellClass);
    for(let k = 0; k < cellClass.length; k++) {
        if  (cellClass[k] in result) {
            result[cellClass[k]] += +sumCells[i].textContent;
        }
        else {
            result[cellClass[k]] = +sumCells[i].textContent;
        }
    }
}
console.log(result);
document.querySelector('.sum-result-1').textContent = (result.aaa);
document.querySelector('.sum-result-2').textContent = (result.bbb);