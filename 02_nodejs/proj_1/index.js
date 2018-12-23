const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ko jūs domājiet par Node.js? ', function(answer) {
  // TODO: Log the answer in a database
  console.log(`Paldies par jūsu atbildi: ${answer}`);

  rl.close();
});
