const fakeRequestPromise = (url) => {
  return new Promise((resolved, rejected) => {
    const delay = Math.floor(Math.random() * 4500);
    if (delay > 3500) {
      rejected(`Connection timed out!!!`);
    } else {
      resolved(`Here is your fake data from ${url}`);
    }
  });
};

fakeRequestPromise(`books.com/page1`)
  .then((res) => {
    console.log(res);
    return fakeRequestPromise(`book.com/page2`);
  })
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });
