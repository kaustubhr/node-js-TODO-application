var stuff = require('./stuff');
var event = require('events');
var util = require('util');
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

//event emitter example
var myEmitter = new event.EventEmitter();
//below is the listener
myEmitter.on('someEvent',function(msg){
    console.log(msg);
});

//now we can actually emit the event
myEmitter.emit('someEvent','we are emitting through event-emitter'); 

//creates class that inherits events.EventsEmitter
class Person extends event.EventEmitter{
    constructor(name){
        super();
        
    this.name = name;
    }
}

//EventEmitter is inherited into Person object now
//util.inherits(Person,event.EventEmitter);

var person1 = new Person('kaustubh');
var person2 = new Person('rahul');
var person3 = new Person('desai');

var peopleArray = [person1,person2,person3];
//for each person in peopleArray, attach an event listener (emitter)
peopleArray.forEach(function(person){
    person.on('speak',function(msg){
        console.log(`${person.name} said : ${msg}` );
    });
});

//calling emit on each Person object. Person has util.inherited EventEmitter functionality  
peopleArray.forEach(function(person){
    person.emit('speak'," hello ");
});
