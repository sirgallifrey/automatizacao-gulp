'use strict';

//const e let

var constante = "eu sou uma constante";

var novaVar = "eu sou o let";

var pessoas = [{ nome: 'Babam', idade: 37 }, { nome: 'Adilson', idade: 9001 }, { nome: 'João', idade: 30 }];

var getMaiorDeTrinta = function getMaiorDeTrinta(pessoas) {
	//find e Arrow function
	return pessoas.find(function (x) {
		return x.idade > 30;
	});
};

console.log(getMaiorDeTrinta(pessoas));

var sayMessage = function sayMessage(pessoas) {
	//String Interpolation
	return "Hello " + pessoas[0].nome + ",\n\taposto que o es5 não tem string literal\n\tmulti linha";
};

console.log(sayMessage(pessoas));