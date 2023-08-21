a();
//Function Statement aka Function Declaration
function a() {
  console.log(`Function Statement!`);
}

//Function Expression with anonymous function
const b = function () {
  console.log(`Function Expression!`);
};
b();

//Arrow Function
const c = () => {
  console.log(`Arrow Function!`);
};

//First Class Function
function firstClass(fun){
    return fun;
}

console.log(firstClass(c));




