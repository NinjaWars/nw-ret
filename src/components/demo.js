function greeter(person) {
    // `Hello ${person.firstName} ${person.lastName}`;
    return "Hello ".concat(person.fullName);
}
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var user1 = "Roy User";
var user2 = [4, 6, 7];
var user3 = { firstName: "Roy", lastName: "Ronalds" };
var user = new Student("Roy", "X", "Ronalds");
document.body.innerHTML = greeter(user);
