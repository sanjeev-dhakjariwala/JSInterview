let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1); // 10
console.log(num2); // 10
console.log(num); //  11
