// var nomeUsuario = prompt("Inserir nome de usuário");

// if (nomeUsuario == "") {
//     alert("O nome de usuário não foi inserido");
// } else {
//     alert("Nome de usuário inserido: " + nomeUsuario);
// }

// var combustivel = prompt("Qual o tipo de combustível?");

// if (combustivel == "GNV") {
//     alert("O carro é movido à Gás");
// } else if (combustivel == "Gasolina") {
//     alert("O carro é movido à Gasolina");
// } else if (combustivel == "Álcool") {
//     alert("O carro é movido à Álcool");
// } else if (combustivel == "Eletrecidade") {
//     alert("O carro é movido à Eletrecidade");
// } else {
//     alert("O carro não funciona");
// }

// var num = parseInt(prompt("Digite um número inteiro de 1 a 5"));

// if (num == 1) {
//     alert("UM");
// } else if (num == 2) {
//     alert("DOIS");
// } else if (num == 3) {
//     alert("TRÊS");
// } else if (num == 4) {
//     alert("QUATRO");
// } else if (num == 5) {
//     alert("CINCO");
// } else {
//     alert("Número inválido");
// }

// var num = parseInt(prompt("Digite um número de 1 a 100"));

// if (num <= 10) {
//     alert("O número é menor ou igual a 10");
// } else if (num <= 20) {
//     alert("O número é menor ou igual a 20");
// } else if (num <= 30) {
//     alert("O número é menor ou igual a 30");
// } else if (num <= 40) {
//     alert("O número é menor ou igual a 40");
// } else if (num <= 50) {
//     alert("O número é menor ou igual a 50");
// } else if (num <= 60) {
//     alert("O número é menor ou igual a 60");
// } else if (num <= 70) {
//     alert("O número é menor ou igual a 70");
// } else if (num <= 80) {
//     alert("O número é menor ou igual a 80");
// } else if (num <= 90) {
//     alert("O número é menor ou igual a 90");
// } else if (num <= 100) {
//     alert("O número é menor ou igual a 100");
// } else {
//     alert("Valor inválido");
// }
// console.log(num);

// var nome = prompt("Inserir nome");
// var sobrenome = prompt("Inserir sobrenome");

// if ((nome != "") && (sobrenome != "")) {
//     alert("Nome: " + nome + "\nSobrenome: " + sobrenome);
// } else {
//     alert("Erro ao inserir nome e sobrenome");
// }

// var nome = prompt("Inserir nome");

// if ((nome == "ANA") || (nome == "ana") || (nome == "Ana")) {
//     alert("O nome inserido é Ana");
// } else {
//     alert("O nome inserido NÃO é Ana");
// }

var nome = prompt("Inserir nome")
var eVazio = nome == "";

if (!eVazio) {
    alert("Nome: " + nome);
} else {
    alert("Nome é vazio");
}