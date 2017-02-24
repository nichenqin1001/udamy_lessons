var person = {
    firstname: 'ni',
    lastname: 'chenqin',
    getFullName: function () {
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
};

var logName = function (lang1, lang2) {
    console.log(this);
    console.log('arguments:' + lang1 + ' ' + lang2);
    console.log('log:' + this.getFullName());
    console.log('----------------');
}.bind(person);

var logPersonName = logName.bind(person);

logName();
logPersonName();

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function (lang1, lang2) {
    console.log(this);
    console.log('arguments:' + lang1 + ' ' + lang2);
    console.log('log:' + this.getFullName());
    console.log('--------------------');
}).apply(person, ['en', 'es']);

// function borrowing

var person2 = {
    firstname: 'wu',
    lastname: 'wenjae'
};

console.log(person.getFullName.apply(person2));

// function curring

function multiply(a, b) {
    return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
var multipleByThree = multiply.bind(this, 3);

console.log(multipleByTwo(4));
console.log(multipleByThree(5));
