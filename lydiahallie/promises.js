const callBack = (i, resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve(`Callback resolved!!! ${i}`);
  } else {
    reject(`Callback rejected!!!`);
  }
};

const callBackHell = callBack(
  1,
  (resolve) => {
    console.log(resolve);
    callBack(
      2,
      (resolve) => {
        console.log(resolve);
      },
      (reject) => {
        console.log(reject);
      }
    );
  },
  (reject) => {
    console.log(reject);
  }
);

const callBackUsingPromise = (i) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.5) {
      resolve(`Promise resolved ${i}!!!`);
    } else {
      reject(`Promise rejected!!!`);
    }
  });
};

const ans = callBackUsingPromise(1)
  .then((res) => {
    console.log(res);
    return callBackUsingPromise(2);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
