var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
    console.log('request was made : '+ req.url);
    if(req.url === '/head' || req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);    
    }
    else if(req.url == '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res); 
    }
    else if(req.url==='/api'){
        res.writeHead(200,{'Content-Type':'application/JSON'});
        var myObj = {
            name: 'Kaustubh',
            job: 'Software Developer',
            age:'24'
        };
        //expects buffer or string
        res.end(JSON.stringify(myObj));
    }   
    //res.writeHead(200,{'Content-Type': 'application/JSON'});
    //res.end expects string of buffer
    //res.end(JSON.stringify(myObj));

    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/error.html').pipe(res); 
    }

});

server.listen(3000,'127.0.0.1');
console.log('Now listening to port 3000');