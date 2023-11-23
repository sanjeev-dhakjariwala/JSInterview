function getAge(...args) {
  console.log(typeof args);
}

getAge(21);

const arr = [1, 2, 3, 4]
console.log(typeof arr)
/**
 * The rest parameter (...args) lets us "collect" all remaining arguments into an array. 
 * An array is an object, so typeof args returns "object"
 */
