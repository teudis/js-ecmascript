/*

var for global variable
let for variable in a scope

*/

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);

// CONST ES6 use keyword const


const a = 'b';
a = 'a'; // ignored because (a) is a declared const
console.log(a);

