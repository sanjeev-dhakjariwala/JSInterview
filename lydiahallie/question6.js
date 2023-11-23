let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);

/**
 * Shallow Copy -> Point by reference so any change in one will be reflected in the other
 * Deep Copy -> The link is removed so the change in one will be not be reflected in the other in JS is it accomplished by JSON.stringify()
 */
