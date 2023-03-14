const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21, enumerable: true });
Object.defineProperty(person, "hot", { value: true });

console.log(person);
console.log(Object.keys(person));
