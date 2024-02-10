const myMap = new Map();
const myFunc = () => 'greeting';
const myFunc1 = () => 'greeting';

myMap.set(myFunc, 'Hello world!');
myMap.set(myFunc1, 'Hello world!');

console.log(myMap)

//1
console.log(myMap.get('greeting'));
//2
console.log(myMap.get(myFunc));
//3
console.log(myMap.get(() => 'greeting'));