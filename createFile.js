const fs = require("fs/promises");

async function example() {
  for (let i = 151; i <= 153; i++) {
    try {
      const content = "";
      await fs.writeFile(`./question${i}.js`, content);
    } catch (err) {
      console.log(err);
    }
  }
}
example();
