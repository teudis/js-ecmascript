let person = {

    name : 'John',
    age  : 21,
    country : 'United States'
}

console.log(person.name, person.age)

//ES6

let {name,country} = person
console.log(name, country)
