var counter = function(arr){
    return('There are ' + arr.length + ' elements in this array');
};

var adder = function(a,b){
    return `The sum of two numbers is ${a+b}`;    
};
//directly initializing prperty of module.export without having additional variable 
// module.exports.pi = 3.142
var pi  = 3.142;


module.exports = {
    adder: adder,
    counter:counter,
    pi:pi
}

//can also do the following:
// module.exports.counter = counter;
//module.exports.pi = pi; 
//module.exports.adder = adder;