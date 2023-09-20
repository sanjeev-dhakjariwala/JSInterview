function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
console.log(typeof sayHi);
