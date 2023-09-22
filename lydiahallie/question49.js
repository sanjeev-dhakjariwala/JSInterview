(() => {
    let x = (y = 10);
    console.log(x);
  })();
  
  console.log(typeof x);
  console.log(typeof y);

  /**
   * let x = (y = 10); is actually shorthand for:
      y = 10;
      let x = y;
   */