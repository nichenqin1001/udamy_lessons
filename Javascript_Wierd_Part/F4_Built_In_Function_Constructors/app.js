String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
};

console.log('john'.isLengthGreaterThan(3));

Number.prototype.isPositive = function () {
    return this > 0;
};

var a = new Number(3);
console.log(a.isPositive());