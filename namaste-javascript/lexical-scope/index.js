function parent() {
  let a = 100;
  function child() {
    let a = 1000;
    console.log(a);
  }
  child();
}
let a = 10;
parent();
