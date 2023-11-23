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
const promiseEx = new Promise((resolve, reject) => {
  const val = Math.random();
  if (val > 0.5) {
    resolve("Promise Successful!!!");
  } else {
    reject("Promise rejected!!!");
  }
});

const ans = promiseEx
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
