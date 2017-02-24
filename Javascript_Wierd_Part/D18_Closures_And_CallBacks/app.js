function sayHiGreeting() {

    var greeting = 'hi';

    setTimeout(function () {
        console.log(greeting); //闭包
    }, 3000);

}

sayHiGreeting();

var greeting = 'hi';

$('button').click(function () {
    console.log(this);
    console.log(greeting);
});
