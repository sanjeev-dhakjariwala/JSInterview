/* const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = "fromEntries";
const ans = Object[method](keys.map((_, i) => {
	return [keys[i], values[i]]
})) // { name: "Lydia", age: 22 }
console.log(ans) */
const keys = ["name", "age"]
const values = ["Sanjeev", 25]

const method = "fromEntries"

const ans = Object[method](keys.map((_, i) => {
	return [keys[i], values[i]]
}))

console.log(ans)