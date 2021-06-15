let person = {

    name : 'John',
    age  : 21,
    country : 'United States'
}

console.log(person.name, person.age)

//ES6

let {name,country} = person
console.log(name, country)


// SPREAD OPERATOR

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);
/*
console show
[ 'David',
'Oscar',
'Julian',
'Ricardo',
'Valeria',
'Yesica',
'Camila' ]

*/