'use strict';

(function(){
	var birls = [
		'Aqui é bodybuilder',
		'BIRRRLL',
		'Ele está olhado pra nós'
	]

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min
	}

	var getARandonBirl = function(birls){
		var birlIndex = getRandomInt(0,birls.length)
		return birls[birlIndex]
	}

	var saysomethingBirlly = function(){
		console.log(getARandonBirl(birls))
	}

	console.log(birls)
	console.log(saysomethingBirlly())
})()
