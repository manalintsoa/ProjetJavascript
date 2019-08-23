var n = prompt("Entrer la valeur de n :")

function factoriel(n){

	var fact, i;
	fact = 1;
	
		for(i = 1; i<= n; i++){
			fact = fact*i;
		}

	return fact;
	console.log(fact);
}
console.log(factoriel(n));
