(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x); // 1
  }
  console.log(x); // undefined
  console.log(y); // 2
})();
