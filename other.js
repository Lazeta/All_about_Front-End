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


// switch
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}


// Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются.
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Маловато' );
  case 4:
    alert( 'В точку!' );
  case 5:
    alert( 'Перебор' );
  default:
    alert( "Нет таких значений" );
}


// Теперь оба варианта 3 и 5 выводят одно сообщение.
// Возможность группировать case – это побочный эффект того, как switch/case работает без break. 
// Здесь выполнение case 3 начинается со строки (*) и продолжается в case 5, потому что отсутствует break.
let a = 3;
switch (a) {
  case 4:
    alert('Правильно!');
    break;

  case 3: // (*) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}


// Для '0' и '1' выполнится первый alert.
// Для '2' – второй alert.
// Но для 3, результат выполнения prompt будет строка "3", которая не соответствует строгому 
// равенству === с числом 3. Таким образом, мы имеем «мёртвый код» в case 3! Выполнится вариант default.
let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
}