var person = {
    firstname: 'default',
    lastname: 'default',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
};

var nee = {
    firstname: 'ni',
    lastname: 'chenqin'
};

nee.__proto__ = person;


for (var key in nee) {
    if (nee.hasOwnProperty(key)) {
        console.log(key + ':' + nee[key]);
    }
}
