async function getData() {
  return await Promise.resolve("I made it!");
}

/* const data = getData().then((res) => {
  console.log(`RES ${res}`);
  return res;
}); */

const data = async () => {
  const res = await getData();
  console.log(res);
};

data();
