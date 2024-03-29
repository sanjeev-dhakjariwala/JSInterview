/**
 * With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument.
 * In this case, we pass the handler object which
 * contained two properties: set and get. set gets invoked whenever we set property values,
 * get gets invoked whenever we get (access) property values.
 * The first argument is an empty object {}, which is the value of person.
 * To this object, the custom behavior specified in the handler object gets added. If we add a property
 * to the person object, set will get invoked. If we access a property on the person object, get gets invoked.
 * First, we added a new property name to the proxy object (person.name = "Lydia"). set gets invoked, and logs
 * "Added a new property!".
 * Then, we access a property value on the proxy object, the get property on the handler object got invoked.
 * "Accessed a property!" gets logged.
 */
const handler = {
  set: () => console.log("Added a new property!"),
  get: () => console.log("Accessed a property!"),
};

const person = new Proxy({}, handler);

person.name = "Lydia";
person.name;
