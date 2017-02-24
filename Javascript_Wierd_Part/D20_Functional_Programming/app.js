function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function (item) {
    return item * 2;
});

console.log(arr2);

var arr3 = mapForEach(arr1, function (item) {
    return item > 2;
});

console.log(arr3);

var checkLimit = function (limit, item) {
    return limit < item;
};

var arr4 = mapForEach(arr1, checkLimit.bind(this, 1));

console.log(arr4);

var checkLimitSimplfy = function (limiter) {
    return function (limiter, item) {
        return limiter < item;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkLimitSimplfy(2));

console.log(arr5);
