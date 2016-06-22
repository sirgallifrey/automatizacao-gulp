'use strict';

//const e let
const constante = "eu sou uma constante"

let novaVar = "eu sou o let"

const pessoas = [
	{nome: 'Babam', idade: 37},
	{nome: 'Adilson', idade: 9001},
	{nome: 'João', idade: 30}
]

const getMaiorDeTrinta = function(pessoas) {
	//find e Arrow function
	return pessoas.find(x => x.idade > 30)
}

console.log(getMaiorDeTrinta(pessoas))


const sayMessage = function(pessoas) {
	//String Interpolation
	return `Hello ${pessoas[0].nome},
	aposto que o es5 não tem string literal
	multi linha`
}

console.log(sayMessage(pessoas))
