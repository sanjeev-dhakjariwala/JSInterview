(() => {
    let x = (y = 10);
    console.log(x);
  })();
  
  console.log(typeof x);
  console.log(typeof y);