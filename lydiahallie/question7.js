let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b); 
console.log(b === c);

/**
 * == check for loose equality i.e. it tries to convert the value in the right side to one present in the left side
 * === Checks for strict equality
 */