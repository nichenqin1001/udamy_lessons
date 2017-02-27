var a = 3;
console.log(typeof a); //number

var b = "Hello";
console.log(typeof b); //string

var c = {};
console.log(typeof c); //object

var d = [];
console.log(typeof d); // weird! object
console.log(Object.prototype.toString.call(d)); // better! [object Array]

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(e);
console.log(typeof e); //object
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function () {};
console.log(typeof z);
