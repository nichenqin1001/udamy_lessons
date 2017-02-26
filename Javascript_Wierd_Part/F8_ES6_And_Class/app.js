class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return 'hi ' + this.firstname;
    }
}

var john = new Person('john', 'doe');
console.log(john);
console.log(john.greet());