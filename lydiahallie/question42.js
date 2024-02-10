const person = {
  name: "Lydia",
  age: 21,
};

for (const item in person) {
  console.log(item);
}
console.log("---------------------");
let arr = [1, 2, 3, 4, 5];

for (let i of arr) {
  console.log(i);
}
console.log("---------------------");
for (let i in arr) {
  console.log(i);
}
