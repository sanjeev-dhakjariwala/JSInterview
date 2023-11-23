/**
 * Important concept to understand how to handle nullpointer exception
 */
function getFruit(fruits) {
  console.log(fruits?.[1]?.[1]);
}

getFruit([["🍊", "🍌"], ["🍍"]]);
getFruit();
getFruit([["🍍"], ["🍊", "🍌"]]);
