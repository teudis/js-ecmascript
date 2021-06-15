const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    // your code here 
}

const listOfNames4 = name => {
    // your code here
}

const square = num => num * num;