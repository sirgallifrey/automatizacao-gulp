'use strict';

(function(){
	var birls = [
		'água com músculo',
		'fibra'
	]

	var res = ''

	for (var i in birls) {
		if (birls[i] == 'fibra') {
			res += 'aqui nós fazemos ' + birls[i]
		} else {
			res += 'Aqui nós não fazemos '+ birls[i] + ', '
		}
	}
	console.log(res)
	return res
})()
