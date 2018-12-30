// require - bibliotēkas importa atslēgvārds.
// bibliotēkas var būt iekļautas NodeJS vai arī lejupielādējamas kā pakotnes.
const readline = require('readline');

// readline ir objekts, kuram ir funkcija createInterface
// Šī funkcija var ģenerēt citu objektu, ievada izvada nodrošināšanai
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funkcija ģenerē atbildes tekstu
function formAnswer(answer) {
  return `Paldies par jūsu atbildi: ${answer}`

// Funkcija atbildes izvadei
function doAnswer(answer) {
  console.log(formAnswer(answer));
}

// Lasīšanas funkcija question sagaida ievadu
// Kad nospiests 'Enter' izsauc mūsu iepriekš definēto funkciju - doAnswer
rl.question('Ko jūs domājiet par Node.js? ', doAnswer);
