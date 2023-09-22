/* Everything in JavaScript is either a...
A: primitive or object
B: function or object
C: trick question! only objects
D: number or object */

const fun = (a = 0,b = 0) => a + b;

console.log(fun()); // 0
console.log(fun(1, 2)); // 3