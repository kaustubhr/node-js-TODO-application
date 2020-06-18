var stuff = require('./stuff');
var events = require('events');
var util = require('util');
var fs = require('fs');
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
var myEmitter = new events.EventEmitter();
//below is the listener
myEmitter.on('someEvent',function(msg){
    console.log(msg);
});

//now we can actually emit the event
myEmitter.emit('someEvent','we are emitting through event-emitter'); 

//creates class that inherits events.EventsEmitter
class Person extends events.EventEmitter{
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

//reading file, blocking code, have to execute this line before going forward, synchronous versions
var readMe = fs.readFileSync('readme.txt','utf8');
console.log(readMe);

fs.writeFileSync('writeme.txt',readMe);

//async version of reading n writing. need a callBack function to fire when the process is complete
fs.readFile('readme.txt','utf8',function(err,data){
    console.log('in async version');
    console.log(data);
    fs.writeFile('writeme.txt',data,function(err){});
});
console.log('test'); // test gets printed first, which takes place WHILE the file is being read
//this async can handle multiple requests faster, as it is non-blocking

//this deletes the file. have to check if file exists before deleting, else error.
//fs.unlink('writeme.txt',function(err){});
//make and remove directories synchronous
//fs.mkdir('stuff',function(err){});
//fs.rmdirSync('stuff');
//remove files before removing directory

