var stuff = require('./stuff');

console.log(__dirname);
console.log(__filename);
var t=0;

var timer = setInterval(() => {
    t +=2;
    console.log(t + ' seconds have passed');
    if(t>5){
        clearInterval(timer);
        sayHi();
        callFunction(sayBye);
        console.log(stuff.counter(['kaustubh','raghavendrarao','deshpande']));
        console.log(stuff.adder(stuff.pi,12));
        
    }

}, 2000);

//normal function
function sayHi(){
    console.log('say Hi');
}

//function expression
var sayBye = function(){
    console.log('say Bye');
};

//calling a function inside a function
function callFunction(fun)
{
    fun();
}
