const person = {
  name: "Lydia Hallie",
  address: {
    street: "100 Main St",
  },
};

Object.freeze(person);
person.address.street = "101 Main St";
delete person.address;
console.log(person);
/*
A: person.name = "Evan Bacon"
B: delete person.address
C: person.address.street = "101 Main St"
D: person.pet = { name: "Mara" }
 */
