// usa-se 'var' para armazenar valores

var todos = "valores armazenados"

// mostrar saídas sobre o código

console.log("a frase armazenada é" + todos)

// dar entrada de texto / receber um input do usuário

var entrada = prompt("insira um valor")


// NÚMEROS E OPERADORES

var nome = 'Tony';
var sobrenome ='Carvalho';
var nomeCompleto = nome + ' ' sobrenome;

console.log(nomeCompleto);


// CONDICIONAIS

var nome = 'Tony';

if (nome === 'Tony') {
  console.log('Legal! Seu nome é este mesmo');
} else if (nome === 'Tonynho') {
  console.log('Legal! Seu apelido é este mesmo');
} else {
  console.log('Que pena! seu nome não é Tony!');
}


var nome = 'Tony'

switch (nome) {
  case 'Tony':
    console.log('Legal, Você é o Tony mesmo!');
      break;
  case 'Tonynho':
    console.log('Sim! Este é o seu apelido!');
      break;
        default:
    console.log('Eita, acho que você não é Tony');
      break;
}


// ESTRUTURAS DE REPETIÇÃO

// FOR

var numeroSorteado = 10;

for (var i = 0; i < 100; i++) {
  console.log(i);
}

// -------------------------------------------------------------------------------

var tabuada = 7;

for (var i = 0; i <= 10; i++) {
  console.log('Valor de ' + tabuada + ' x ' + i + ' = ' + tabuada * i);
}

// -------------------------------------------------------------------------------

for (var i = 0; i < 100; i++) {
  if (numeroSorteado === i) {
    console.log('seu numero foi sorteado');
    break;
  }
}

// WHILE

var achou = false;
var numeroSorteado = 100;
var possivelValor = 0;

while (!achou) {
  possivelValor += 1;
  if (numeroSorteado === possivelValor) {
    achou = true;
  } else {
    console.log(
      'Possível valor não corresponde ao número sorteado ' + possivelValor
    );    
  }
}
