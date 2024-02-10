const emojis = ["✨", "🥑", "😍"];

console.log(emojis.map((x) => x + "✨")); //["✨✨", "🥑✨", "😍✨"]
console.log(emojis.filter((x) => x !== "🥑")); //["✨","😍"]
console.log(emojis.find((x) => x !== "🥑")); //✨
console.log(emojis.reduce((acc, cur) => acc + "✨")); //✨✨✨
console.log(emojis.slice(1, 2, "✨")); //["✨", "✨", "😍"]
console.log(emojis.splice(1, 2, "✨")); //[ '🥑', '😍' ]
