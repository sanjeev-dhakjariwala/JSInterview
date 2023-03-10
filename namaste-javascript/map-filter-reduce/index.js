const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// map function
const mappedArr = arr.map((a) => {
  return a * 2;
});
const mappedArr1 = arr.map((a) => {
  if (a % 2 === 0) {
    return a * 2;
  }
});

console.log(mappedArr);
console.log(mappedArr1);

// filter function
const filteredArr = arr.filter((a) => {
  return a % 2 === 0;
});

console.log(filteredArr);

// reduce

const reduceRes = arr.reduce((acc, ele) => {
  return acc + ele;
});

console.log(reduceRes);
