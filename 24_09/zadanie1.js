const readline = require('node:readline');

function calculatePower(a, b){
	let result = a;
	for (let i=1; i<b; i++){
		result *= a;
	}
	return result;
}

function calculateProduct(a, b){
	return a * b;
}

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

var x, y, username;

r1.question('Podaj swoje imię: ', name =>{
	console.log(`Witaj ${name}`);
	username = name;
	r1.question('Podaj pierwszą dodatnią liczbę całkowitą: ', number =>{
		x = parseInt(number);
		r1.question('Podaj drugą dodatnią liczbę całkowitą: ', number =>{
			y = parseInt(number);
			if(x > 0 && y >0){
				console.log(`Pierwsza podana przez użytkownika ${username} liczba do potęgi ${y} wynosi: ${calculatePower(x, y)}`);
				console.log(`Iloczyn podanych przez użytkownika ${username} liczb wynosi: ${calculateProduct(x, y)}`);
			}
			else{
				console.log('Podano niepoprawne liczby')
			}
			r1.close();
		})
	})
})