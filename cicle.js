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