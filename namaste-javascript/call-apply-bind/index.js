const info1 = {
  firstName: "Sanjeev",
  lastname: "Jha",
  greet: function () {
    console.log(`Hello ${this.firstName} ${this.lastname}`);
  },
};
//Changing to arrow function greet function doesn't work
const info2 = {
  firstName: "Sanjeev",
  lastName: "Jha",
  greet: () => {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

info1.greet();
info2.greet();

const info = function (hometown) {
  console.log(`Hello ${this.firstName} ${this.lastName} from ${hometown}`);
};

const person = {
  firstName: "Brian",
  lastName: "Griffin",
};

info.call(person, "Quahog");
info.apply(person, ["Quahog"]);
const returnedFunc = info.bind(person, "Quahog");
returnedFunc()