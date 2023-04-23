function multiplyNumbers(num1, num2) {
  return new Promise(function (resolve, reject) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      reject(new Error("Both arguments must be numbers"));
    } else {
      resolve(num1 * num2);
    }
  });
}

multiplyNumbers(2, 3)
  .then(function (result) {
    console.log(result); // Output: 6
  })
  .catch(function (error) {
    console.error(error.message); // Output: "Both arguments must be numbers"
  });
