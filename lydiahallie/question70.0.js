async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData().then((res) => {
  console.log(res);
  return res;
});
console.log(data);
