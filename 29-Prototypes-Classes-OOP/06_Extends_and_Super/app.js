// class Pet {
// 	constructor(name, age) {
// 		console.log('IN PET CONSTRUCTOR!');
// 		this.name = name;
// 		this.age = age;
// 	}
// 	eat() {
// 		return `${this.name} is eating!`;
// 	}
// }

// class Cat extends Pet {
// 	constructor(name, age, livesLeft = 9) {
// 		console.log('IN CAT CONSTRUCTOR!');
// 		super(name, age);
// 		this.livesLeft = livesLeft;
// 	}
// 	meow() {
// 		return 'MEOWWWW!!';
// 	}
// }

// class Dog extends Pet {
// 	bark() {
// 		return 'WOOOF!!';
// 	}
// 	eat() {
// 		return `${this.name} scarfs his food!`;
// 	}
// }
class Pet {
	constructor(name, age) {
		console.log("IN PET CONSTRUCTOR!!!");
		this.name = name;
		this.age = age;
	}

	eat() {
		return `${this.name} is eating.`;
	}

}



class Cat extends Pet{
	constructor(name, age, livesLeft) {
		console.log("IN CAT CONSTRUCTOR!!!");
		super(name, age);
		this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEEEOOWW';
	}
}



class Dog extends Pet{
	bark() {
		return 'WOOOOFF';
	}

	eat() {
		return `${this.name} scarfs his food!`;		// this will come first, if not found, then will go to Pet!!!
	}
}




const monty = new Cat('Monty', 9);
console.log(monty);	// Cat { name: 'Monty', age: 9 }
console.log(monty.eat());	// Monty is eating.

const wyatt = new Dog('Wyatt', 13);
console.log(wyatt);	// Dog { name: 'Wyatt', age: 13 }
console.log(wyatt.eat());	// Wyatt scarfs his food!


