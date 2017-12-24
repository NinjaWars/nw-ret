function greeter(person: Person) {
	// `Hello ${person.firstName} ${person.lastName}`;
	return "Hello ".concat(person.fullName);
}

class Student {
	fullName: string;
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = `${firstName} ${middleInitial} ${lastName}`;
	}
}

interface Person {
	firstName: string;
	lastName: string;
	fullName: string;
}

let user1 = "Roy User";
let user2 = [4, 6, 7];
let user3 = {firstName: "Roy", lastName: "Ronalds"};
let user = new Student("Roy", "X", "Ronalds");

document.body.innerHTML = greeter(user);
