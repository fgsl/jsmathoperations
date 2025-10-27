const prompt = require("prompt-sync")();

var numero1 = prompt('Número 1: ');
var numero2 = prompt('Número 2: ');

var contador1 = 0;
var contador2 = 0;
var produto = 0;

while (contador1 < numero1) {
    contador2 = 0;
    while (contador2 < numero2) {
        produto++; // $produto = $produto + 1;
        contador2++;
    }
    contador1++;
}
console.log("\nO produto é igual a " + produto + "\n");    
