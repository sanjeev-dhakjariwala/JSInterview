function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're done here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(game.next().value); // Do you love JavaScript?
console.log(game.next("Yes").value); // JavaScript loves you back ❤️

// function* generateNumbers() {
//   let i = 0;
//   while (true) {
//     yield i++;
//   }
// }

// const generator = generateNumbers();

// console.log(generator.next().value); // 0
// console.log(generator.next().value); // 1
// console.log(generator.next().value); // 2
