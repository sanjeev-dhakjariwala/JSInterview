function outerFunction() {
  const outerVariable = "Hello, ";

  function innerFunction(name) {
    const innerVariable = "Welcome to my website!";
    console.log(`${outerVariable} ${name} ${innerVariable}`);
  }

  return innerFunction;
}

const fun = outerFunction();
fun("Sanjeev")