let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b); // true
console.log(a === b); // false
console.log(b === c); // false

/**
 * == check for loose equality i.e. it tries to convert the value in the right side to one present in the left side
 * === Checks for strict equality
 */