const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

// Use Object.entries
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Use Object.values 
const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data2);
console.log(values)
console.log(values.length)

// Add elements to string in begin and end 
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(12, '  -----'))