// polyfill
if (!Object.create) {
    Object.create = function (o) {
        'use strict';
        if (arguments.length > 1) {
            throw new Error('Object.create implementation' + 'only accept the first parameter');
        }

        function F() {}
        F.prototype = o;
        return new F();
    };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function () {
        'use strict';
        return 'hi ' + this.firstname;
    }
};

var john = Object.create(person);

john.firstname = 'ni';
john.lastname = 'chenqin';

console.log(john.greet());