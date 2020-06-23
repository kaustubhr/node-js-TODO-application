var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('this is express homepage');
})
app.listen(3000);